<!-- ---
title: 'Getting Started with `cljs.core.async`'
created: '5-31-2018'
canonicalUrl: 'https://github.com/loganpowell/cljs-guides/blob/master/src/core-async/core-async-intro.md'
tags: ['cljs', 'core-async', 'clojurescript', 'go', 'clojure']
license: 'public-domain'
--- -->


# Getting Started with `cljs.core.async`

As Rich Hickey said [in debut'ing `core.async`](https://github.com/matthiasn/talk-transcripts/blob/master/Hickey_Rich/CoreAsync.md):

> There comes a time in all good programs when components or subsystems must stop communicating directly to each other. Conveyance must become "first class"


`core.asyc` [channels outperform promises](http://swannodette.github.io/2013/08/23/make-no-promises) when compared one-to-one, but the real performance boost comes when you combine `core.async` with other features of ClojureScript (e.g., [transducers](https://blog.venanti.us/using-transducers-with-core-async-clojurescript/)), especially when dealing with large amounts of data.

## Introduction

This is the first of a [series of guides](./core-async-guides.md), which cover - in an incremental fashion - the wonderful, but nuanced world of "simple made easy" asynchronous communication in your ClojureScript programs via `core.async`.

Most of the code included in [the examples](./core.cljs) were stolen from [David Nolen](https://github.com/swannodette/swannodette.github.com/blob/master/code/blog/src/blog/csp/core.cljs), which he goes over in his introductory [meetup video](https://www.youtube.com/watch?v=AhxcGGeh5ho) and [corresponding blogpost](http://swannodette.github.io/2013/07/12/communicating-sequential-processes). I'm essentially just decorating these with some narrative assistance friendly to absolute beginners.

## Differences in `core.async` between Clojure and ClojureScript

Very roughly speaking - anything that has "blocking" semantics in `clojure.core.async` (e.g., anything with two `!!`s) will not be  available in `cljs.core.async`, but *not to worry* we can still achieve a massive improvement over callback hell by using the very light-weight `go` block and `chan` primitives.


## Basic Constructs/Primitives

There are a few differences between the features of `core.async` in Clojure and ClojureScript as a matter of necessity. Though Clojure has threads, Node/JavaScript only has a single thread, so any thread-blocking operation will not - by default - be available in ClojureScript's implementation. However, there are ways you can get more features by using extensions to the library such as [`superv.async`](https://github.com/replikativ/superv.async), but those are out of the scope of this guide.

> Note: We're going to be using some JavaScript interop in the following guide. Find out more on [JavaScript/ClojureScript Interop](http://www.spacjer.com/blog/2014/09/12/clojurescript-javascript-interop/).

### Macros Covered:
- [`go`](https://clojuredocs.org/clojure.core.async/go): Provides an environment (lexical "block") where internal asynchronous functions can be written in a synchronous (more deterministic) fashion (i.e., sequential).
- [`go-loop`](https://clojuredocs.org/clojure.core.async/go-loop): Similar to regular [`loop`](https://clojuredocs.org/clojure.core/loop), but hosted in a `go` block, allowing [`recur`](https://clojuredocs.org/clojure.core/recur)sion = syntactic sugar for `(go (loop [] ...))`

### Functions Covered:

Function | Short Description | Syntax | Must be used in a `go` block?
--- | --- | :---: | :---:
[`chan`](https://clojuredocs.org/clojure.core.async/chan) | Channel: async coordination vehicle | async | true
[`>!`](https://clojuredocs.org/clojure.core.async/>!) | "Put bang" -> Put to `chan` | sync | true
[`<!`](https://clojuredocs.org/clojure.core.async/>!) | "Take bang" -> Take from a `chan` | sync | true

## Dependencies

You'll need to add this to the namespace of your file:

```clj
(ns core-async.core
  (:require  [cljs.core.async :refer [>! <! chan put! take! close! timeout alts! alt! buffer dropping-buffer sliding-buffer]]
             [cljs.core.async :refer-macros [go go-loop alt!]])
  (:use [clojure.repl :only (source)]))
```
The `source` function is a handy sister to the natively available `doc` function, which allows you to inspect the definition of a given macro or function in a library. If you're a beginner - like me - I use this to figure out what other peoples code does ;)

Also, you'll need to add this to your `:dependencies`:

```clj
[org.clojure/core.async <current version>]
```

> current version can be forn [here](https://github.com/clojure/core.async#releases-and-dependency-information)


# `go` Block Basics

> Check out this fun overview of channels from Eric Normand [on YouTube](https://www.youtube.com/watch?v=msv8Fvtd6YQ)

`go` blocks provide an environment where we can escape callback hell. I like to think of them as pulling us into a new little programming world where we can write our async code in it's logical order while still maintaining the semantics of regular Clojure(Script) code. I.e., this is **where** the magic happens.

As [Stuart Halloway](https://twitter.com/stuarthalloway?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor) explains in his [great talk](https://www.infoq.com/presentations/core-async) about `core.async` (paraphrasing):

`go` is a first class process (a process, which can be passed as a value to other processes) abstraction that will either use real threads (if available) or use "magic callback hell behind the scenes" giving users who don't have real threads to work with (ClojureScript/JavaScript) the ability to write code as if they did. `go` uses a state-machine with "parking" to enable this.

We will touch on what "parking" means [in another post](./core-async-guides.md). For now, let's look at some code!

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
But the value (`5`) that we might have hoped we could get out is hidden inside the channel as we can see in a following log to our console:

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

The lesson here is *not* that you will always wrap a `go` in another `go`, but that you can only do a "parking" take (`<!`) from a channel within a `go` block. In the case above, we created our channel in an unconventional way (by using a `go` instead of a channel directly), just to show that what is returned from a `go` is actually a channel (`chan`).

# `chan` Basics

---
#### [Usage](https://clojure.github.io/core.async/#clojure.core.async/chan): 
###### `(chan)`
###### `(chan buf-or-n)`
###### `(chan buf-or-n xform)`
###### `(chan buf-or-n xform ex-handler)`

#### Elaboration:
- Creates a channel with an optional buffer, an optional transducer (like `(map f)`, `(filter p)` etc or a composition thereof), and an optional exception-handler.  
- If `buf-or-n` is a number, will create and use a fixed buffer of that size. If a *transducer* is supplied a buffer must be specified.
- `ex-handler` must be a `fn` of one argument - if an exception occurs during transformation it will be called with the Throwable as an argument, and any non-nil return value will be placed in the channel.
---

If `go` blocks create an environment where we can write async code as if it were sync code, how do we communicate or pass information between these environments? Are we limited to doing this stuff **only** inside the `go` blocks if we want to pretend we live in this magical world? The answer is "no". The way we pass the work that we've done inside one `go` block to another `go` block is via channels (`chan`). A channel acts like a vehicle - a vessel if you will - which can be passed around between `go` blocks living in different areas in your code or in someone else's. I think the word channel can be a bit overloaded and confusing as it brings to *my* mind the idea of a cable or some type of tether. I like how Rich Hickey refers to them as ["coveyor belts"](https://www.infoq.com/presentations/clojure-core-async).

![core.async model](https://res.infoq.com/presentations/clojure-core-async/en/slides/sl32.jpg)
Like a conveyor belt, a `chan` is both a means of transportation and an object that can - itself - be moved around. This is the nature of `chan`. They convey information, but can - themselves - be conveyed, I.e., passed between functions as data.

Let's introduce an actual channel into our code. To start, let's treat the `chan` as a simple internal means of conveying something:

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

Ok... what just happened? Why didn't we get the second console log? Well, this is the first lesson we need to learn about channels. We tried to take (`<!`) from an empty `chan`. What happened? We closed the `go` block before we put anything on that could be taken (`(go ...)<-closing paren closes the go block`) and thus escaped the thread we provisioned in the `chan`. I.e., until something is put in the channel, anything following the `<!` take operation will be suspended (will "wait") and if nothing is ever put into a  channel being taken from all that follows will be garbage collected when the channel is closed.

Let's expand on the example by communicating between two `go` blocks living in the scope:


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
5
We made progress
```

The second console log was made possible by the following `go` blocks putting operation `>!`, which "woke up" the first - suspended at lexical time - by putting a value into the shared channel. This is the beginnings of inter `go` block communication. The potential of which is vastly more systemic in scope.

One more example just for good measure:

```clj
(let [c (chan)]
  (go
    (.log js/console "Before")
    (>! c (js/Date.)) ; put the current date into the channel
    (.log js/console "After"))
  (go
    (.log js/console "Order")
    (.log js/console (<! c)) ; take the date out
    (.log js/console "doesn't matter")))
```
Which logs:
```
Before
Order
2018-05-28T21:36:32.725Z
doesn't matter
After
```
What's happening is that the first `go` block's second console log isn't allowed to read until it's put operation `>!` is satisfied by the take operation in the second `go` block. This is the primary takeaway from this example. I.e., that  writes (`>!`/`put!`) and reads (`<!`/`take!`) need to be balanced in order to facilitate the sequential flow of information within and/or between `go` blocks.  

## Up Next

If this wetted your appetite to learn a bit more about `core.async`, check out [the next lesson](./core-async.md)

## Channels In Summary:

If you're passing a `chan` within or between `go` blocks in the same or different scopes, any unbalanced put to or take from that `chan` will be "suspended". In this case, it's accidentally forewarning of our code to use the combination of `let`...`go` ;)

> Read more about the theory behind this: [Communicating Sequential Processes: CSP](https://en.wikipedia.org/wiki/Communicating_sequential_processes)).
