# Getting Started with `cljs.core.async`

## Introduction

This guide is meant to provide a very cursory introduction the ClojureScript `core.async` library. There are a number of other resources out there on the matter ([LMGTFY](https://www.google.com/search?rlz=1C1CHFX_enUS685US685&ei=h08MW9vEMJC50PEP5_WUaA&q=cljs+core.async+clojurescript&oq=cljs+core.async+clojurescript&gs_l=psy-ab.3..35i39k1.13036.16452.0.16719.20.17.1.0.0.0.300.2341.0j7j3j1.11.0....0...1.1.64.psy-ab..10.10.1848...0i22i30k1j33i160k1.0.O0OV63yLtr0)), but the material herein is geared toward a specific near-term goal, combining `core.async` with `cljs-ajax`, for which a guide [is to follow](../http-async/guide-async-http.md).

If you haven't already, take a gander at the clojure.core.async docs ([dictionary](https://clojure.github.io/core.async/) or [index](https://clojuredocs.org/clojure.core.async)), but - very roughly speaking - anything that has "blocking" semantics in `clojure.core.async` (e.g., anything with two `!!`s) will not be natively available in `cljs.core.async`, but *not to worry* we can still achieve a massive improvement over callback hell by using the very light-weight `go` block and `chan` primitives. Additionally, `core.asyc` [performance is better than promises](http://swannodette.github.io/2013/08/23/make-no-promises) when compared one-to-one, but the real performance boost comes when you [combine `core.async` with transducers](https://blog.venanti.us/using-transducers-with-core-async-clojurescript/) when dealing with large amounts of data.

Most of the code included in [the examples](./core.cljs) was pulled from [David Nolen's github](https://github.com/swannodette/swannodette.github.com/blob/master/code/blog/src/blog/csp/core.cljs), which he goes over in his introductory [meetup video](https://www.youtube.com/watch?v=AhxcGGeh5ho) and [corresponding blogpost](http://swannodette.github.io/2013/07/12/communicating-sequential-processes). He focuses on working in the browser, but this guide is for those looking for examples that work in Node.

## Basic Constructs/Primitives

There are a few differences between the features of `core.async` in Clojure and ClojureScript as a matter of necessity. Though Clojure has threads, Node/JavaScript only has a single thread, so any thread-blocking operation will not - by default - be available in ClojureScript's implementation. However, there are ways you can get more feature parity through using extensions such as [`superv.async`](https://github.com/replikativ/superv.async), but those are out of the scope of this guide.

> Note: We're going to be using some JavaScript interop in the following guide. Find out more on [JavaScript/ClojureScript Interop](http://www.spacjer.com/blog/2014/09/12/clojurescript-javascript-interop/).

### Macros Covered:
- [`go`](https://clojuredocs.org/clojure.core.async/go): Provides an environment (lexical "block") where internal asynchronous functions can be written in a synchronous (more deterministic) fashion (i.e., sequential).
- [`go-loop`](https://clojuredocs.org/clojure.core.async/go-loop): Similar to regular [`loop`](https://clojuredocs.org/clojure.core/loop), but hosted in a `go` block, allowing [`recur`](https://clojuredocs.org/clojure.core/recur)sion.

### Functions Covered:

Function | Short Description | Syntax | Must be used in a `go` block?
--- | --- | :---: | :---: | ---
[`chan`](https://clojuredocs.org/clojure.core.async/chan) | Channel: async coordination vehicle | async | true
[`>!`](https://clojuredocs.org/clojure.core.async/>!) | "Put bang" -> Put to `chan` | sync | true
[`<!`](https://clojuredocs.org/clojure.core.async/>!) | "Take bang" -> Take from a `chan` | sync | true
[`put!`](https://clojuredocs.org/clojure.core.async/put!) | "Put bang" -> Put to `chan` | async | false
[`take!`](https://clojuredocs.org/clojure.core.async/take!)| "Take bang" -> Take from a `chan` | async | false

# `go` Block Basics

`go` blocks provide an environment where we can escape callback hell. I like to think of them as pulling us into a new little programming world where we can write our async code in it's logical order while still maintaining the semantics of regular Clojure(Script) code. I.e., this is **where** the magic happens.

```clj
(.log js/console (go 5))
```
In our console we will see that the result of the `go` block *itself* is actually a `ManyToManyChannel` with the following semantics:
```clj
{ takes: { head: 0, tail: 0, length: 0, arr: [ <32 empty items> ] },
  dirty_takes: 0,
  puts: { head: 0, tail: 0, length: 0, arr: [ <32 empty items> ] },
  dirty_puts: 0,
  buf:
   { buf: { head: 0, tail: 0, length: 0, arr: [Array] },
     n: 1,
     'cljs$lang$protocol_mask$partition0$': 2,
     'cljs$lang$protocol_mask$partition1$': 0 },
  closed: false,
  add_BANG_:
   { [Function: G__25820]
     'cljs$core$IFn$_invoke$arity$1': [Function: G__25820__1],
     'cljs$core$IFn$_invoke$arity$2': [Function: G__25820__2] } }
```
But the value (`5`) that we might have hoped we could get out is stuck in the channel as we can see in a following log to our console:
```
nil
```

So, what if we tried what our curiosity leads us to try to take that value out? E.g.: `<!`
```clj
(.log js/console (<! (go 5)))
```
We get this:
```
throw (new Error("<! used not in (go ...) block"));
```

Since we're trying to "take" (`<!`) the value from *outside* the `go` block, we get an error. It may seem a bit odd at first, but the surest way to remedy this is to wrap our `<!` (taking operation) in a `go` block:

```clj
(go (.log js/console (<! (go 5))))
```
And now we get our value out:
```
5
```

The lesson here is *not* that you will always wrap a `go` in another `go`, but that you can only do a *synchronous* take (`<!`) from a channel within a `go` block. In the case above, we created our channel in an unconventional way (by using a `go` instead of a channel directly), just to show that what is returned from a `go` is actually a channel (`chan`).

Let's try something a little prettier and a *little* more clear:
```clj
(let [c (chan)]
  (go
    (.log js/console "We got here")
    (.log js/console (<! c)) ; take from the channel
    (.log js/console "We'll never get here")))
```
Which logs:
```
We got here
```

Here, we're provisioning a `chan`nel as within a local variable and executing a `go` block to take from that channel. So, why didn't we get the second console log? Well, we gave back the only thing an empty `go` block can give back - nothing - and it then gets closed: `(go ...)<-closing paren closes the go block`. I.e., until something is put in the channel, anything following the `<!` take operation will be suspended and if nothing is ever put into a  channel being taken from all that follows will be garbage collected when the channel is closed.

Let's see this in action...


```clj
(let [c (chan)]
  (go
    (.log js/console "Got here")
    (.log js/console (<! c))
    (.log js/console "We made progress"))
  (go
    (>! c 5)))
```

This time we should get something like this logged to our console:
```
Got here
user=>
[cljs.core.async.impl.channels.ManyToManyChannel]
5
We made progress
```
Notice the order of what we got back here:
1) our first console log: `"Got here"`
2) our `chan`
3) our value `5`
4) our second console log: `"We made progress"`

The second console log was made possible by the following `go` blocks putting operation `>!`, which "woke up" the first - suspended at lexical time - by putting a value into the shared channel.

Now, let's dig a little deeper into these phenomena:

```clj
(let [c (chan)]
  (go
    (.log js/console "Before")
    (>! c (js/Date.))
    (.log js/console "After"))
  (go
    (.log js/console "Order")
    (.log js/console (<! c))
    (.log js/console "doesn't matter")))
```
Which logs:
```
Before
Order
user=>
[cljs.core.async.impl.channels.ManyToManyChannel]
2018-05-28T21:36:32.725Z
doesn't matter
After
```
What's happening is that the first `go` block's second console log isn't allowed to read until it's put operation `>!` is satisfied by the take operation in the second `go` block. This is the primary lesson of `go` blocks (aka [Communicating Sequential Processes: CSP](https://en.wikipedia.org/wiki/Communicating_sequential_processes)). I.e., that  writes (`>!`/`put!`) and reads (`<!`/`take!`) need to be balanced in order to facilitate the sequential flow of information through within and/or between `go` blocks.

Let's see how this is done in a fun way:

```clj
