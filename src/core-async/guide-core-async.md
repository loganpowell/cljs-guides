<!-- ---
title: 'Getting Started with `cljs.core.async`'
created: '5-31-2018'
canonicalUrl: 'https://github.com/loganpowell/cljs-guides/blob/master/src/core-async/guide-core-async.md'
tags: ['cljs', 'core-async', 'clojurescript', 'go', 'clojure']
license: 'public-domain'
--- -->


# Getting Started with `cljs.core.async`

## Introduction

This guide is meant to provide a very cursory introduction the ClojureScript `core.async` library. There are a number of other resources out there on the matter ([LMGTFY](https://www.google.com/search?rlz=1C1CHFX_enUS685US685&ei=h08MW9vEMJC50PEP5_WUaA&q=cljs+core.async+clojurescript&oq=cljs+core.async+clojurescript&gs_l=psy-ab.3..35i39k1.13036.16452.0.16719.20.17.1.0.0.0.300.2341.0j7j3j1.11.0....0...1.1.64.psy-ab..10.10.1848...0i22i30k1j33i160k1.0.O0OV63yLtr0)), but the material herein is geared toward a specific near-term goal, combining `core.async` with `cljs-ajax`, for which a guide [is to follow](../http-async/guide-async-http.md).

Most of the code included in [the examples](./core.cljs) was pulled from [David Nolen's github](https://github.com/swannodette/swannodette.github.com/blob/master/code/blog/src/blog/csp/core.cljs), which he goes over in his introductory [meetup video](https://www.youtube.com/watch?v=AhxcGGeh5ho) and [corresponding blogpost](http://swannodette.github.io/2013/07/12/communicating-sequential-processes). He focuses on working in the browser, but this guide is for those looking for examples that work in Node.

## Differences in `core.async` between Clojure and ClojureScript

Very roughly speaking - anything that has "blocking" semantics in `clojure.core.async` (e.g., anything with two `!!`s) will not be  available in `cljs.core.async`, but *not to worry* we can still achieve a massive improvement over callback hell by using the very light-weight `go` block and `chan` primitives. Additionally, `core.asyc` [performance is better than promises](http://swannodette.github.io/2013/08/23/make-no-promises) when compared one-to-one, but the real performance boost comes when you [combine `core.async` with transducers](https://blog.venanti.us/using-transducers-with-core-async-clojurescript/) when dealing with large amounts of data.


## Basic Constructs/Primitives

There are a few differences between the features of `core.async` in Clojure and ClojureScript as a matter of necessity. Though Clojure has threads, Node/JavaScript only has a single thread, so any thread-blocking operation will not - by default - be available in ClojureScript's implementation. However, there are ways you can get more features by using extensions to the library such as [`superv.async`](https://github.com/replikativ/superv.async), but those are out of the scope of this guide.

> Note: We're going to be using some JavaScript interop in the following guide. Find out more on [JavaScript/ClojureScript Interop](http://www.spacjer.com/blog/2014/09/12/clojurescript-javascript-interop/).

### Macros Covered:
- [`go`](https://clojuredocs.org/clojure.core.async/go): Provides an environment (lexical "block") where internal asynchronous functions can be written in a synchronous (more deterministic) fashion (i.e., sequential).
- [`go-loop`](https://clojuredocs.org/clojure.core.async/go-loop): Similar to regular [`loop`](https://clojuredocs.org/clojure.core/loop), but hosted in a `go` block, allowing [`recur`](https://clojuredocs.org/clojure.core/recur)sion.

### Functions Covered:

Function | Short Description | Syntax | Must be used in a `go` block?
--- | --- | :---: | :---:
[`chan`](https://clojuredocs.org/clojure.core.async/chan) | Channel: async coordination vehicle | async | true
[`>!`](https://clojuredocs.org/clojure.core.async/>!) | "Put bang" -> Put to `chan` | sync | true
[`<!`](https://clojuredocs.org/clojure.core.async/>!) | "Take bang" -> Take from a `chan` | sync | true
[`alts!`](https://clojuredocs.org/clojure.core.async/alts!) | `chan` flow control | sync | true
[`put!`](https://clojuredocs.org/clojure.core.async/put!) | "Put bang" -> Put to `chan` | async | false
[`take!`](https://clojuredocs.org/clojure.core.async/take!)| "Take bang" -> Take from a `chan` | async | false

## Dependencies

You'll need to add this to the namespace of your file:

```clj
(ns core-async.core
  (:require  [cljs.core.async :refer [>! <! chan put! take! close! timeout]]
             [cljs.core.async :refer-macros [go go-loop alt!]])
  (:use [clojure.repl :only (source)]))
```
The `source` function is a handy sister to the natively available `doc` function, which allows you to inspect the definition of a given macro or function (respectively). If you're a beginner - like me - I use this to figure out what other peoples code does ;)

Also, you'll need to add this to your `:dependencies`:

```clj
[org.clojure/core.async <current version>]
```

> current version can be forn [here](https://github.com/clojure/core.async#releases-and-dependency-information)


# `go` Block Basics

> Check out this fun overview of channels from Eric Normand [on YouTube](https://www.youtube.com/watch?v=msv8Fvtd6YQ)

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

The lesson here is *not* that you will always wrap a `go` in another `go`, but that you can only do a *synchronous* take (`<!`) from a channel within a `go` block. In the case above, we created our channel in an unconventional way (by using a `go` instead of a channel directly), just to show that what is returned from a `go` is actually a channel (`chan`).

# `chan` Basics

If `go` blocks create an environment where we can write async code as if it were sync code, how do we communicate or pass information between these environments? Are we limited to doing this stuff **only** inside the `go` blocks if we want to pretend we live in this magical world? The answer is "no". The way we pass the work that we've done inside one `go` block to another `go` block is via channels (`chan`). A channel acts like a vehicle - a vessel if you will - which can be passed around between `go` blocks living in different areas in your code or in someone else's. I think the word channel can be a bit overloaded and confusing as it brings to *my* mind the idea of a cable or some type of tether. I like how Rich Hickey refers to them as ["coveyor belts"](https://www.infoq.com/presentations/clojure-core-async).

Like a conveyor belt, a `chan` is both a means of transportation and an object that can be transported. This is the nature of `chan`. They convey information, but can - themselves - be conveyed, I.e., passed between functions as data.

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

Ok... what just happened? Why didn't we get the second console log? Well, this is the first lesson we need to learn about channels. We tried to take (`<!`) from an empty `chan`. What happened? We closed the `go` block before we put anything on that could be taken (`(go ...)<-closing paren closes the go block`) and thus killed the suspended thread we provisioned in the `chan`. I.e., until something is put in the channel, anything following the `<!` take operation will be suspended and if nothing is ever put into a  channel being taken from all that follows will be garbage collected when the channel is closed.

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

## Channels In Summary:

If you're passing a `chan` within or between `go` blocks in the same or different scopes, any unbalanced put to or take from that `chan` will be "suspended".

> Read more about the theory behind this: [Communicating Sequential Processes: CSP](https://en.wikipedia.org/wiki/Communicating_sequential_processes)).


## Gotchas

It's important to note that you can't just kill a `chan` by closing a `go` block. Critically, any ongoing operations will remain locked in the thread provisioned for the `chan`.

In this case, it's accidentally forewarning of our code to use the combination of `let`...`go` ;)

Let's see this in action in a slightly manipulated [example](http://swannodette.github.io/2013/07/12/communicating-sequential-processes) provided by David Nolen:

> Note: if you eval this, it will require a restart of your remote repl to terminate the looping `go` block. So, you can just trust that this would never end if you don't want that headache.

```clj
(def ch (chan))

(defn render [q]
  (apply str
    (for [p (reverse q)]
      (str "process: " p))))

(go (while true (<! (timeout 250)) (>! ch 1)))
(go (while true (<! (timeout 500)) (>! ch 2)))
(go (while true (<! (timeout 750)) (>! ch 3)))

(defn peekn
  "Returns vector of (up to) n items from the end of vector v"
  [v n]
  (if (> (count v) n)
    (subvec v (- (count v) n))
    v))

(doc subvec)

(go (loop [q []]
      (.log js/console out (render q))
      (recur (-> (conj q (<! ch)) (peekn 10)))))
```
Which logs:

```
process: 2
process: 3 process: 2
process: 2 process: 3 process: 2
process: 1 process: 2 process: 3 process: 2
process: 2 process: 1 process: 2 process: 3 process: 2
process: 1 process: 2 process: 1 process: 2 process: 3 process: 2
process: 1 process: 1 process: 2 process: 1 process: 2 process: 3
process: 1 process: 1 process: 1 process: 2 process: 1 process: 2
process: 1 process: 1 process: 1 process: 1 process: 2 process: 1
process: 3 process: 1 process: 1 process: 1 process: 1 process: 2
process: 1 process: 3 process: 1 process: 1 process: 1 process: 1
... happily ever after
```

While this is an impressive display of the power of `core.async` (Try running three concurrent processes in JavaScript in three lines of code? Ha!), it is also a call for you to be careful when setting your channels in motion.


# Control Flow with `alts!`

So, what if we don't want a never ending process from our `chan`? One way of dealing with this is to use the `core.async` [`alts!`](https://clojuredocs.org/clojure.core.async/alts!) as a control structure:

After ensuring your `render` and `peekn` functions are loaded into the namespace by eval'ing them, eval this:

```clj
(let [tmt (timeout 5000)
      ch (chan)]
  (go (while true (<! (timeout 250)) (>! ch 1)))
  (go (while true (<! (timeout 500)) (>! ch 2)))
  (go (while true (<! (timeout 750)) (>! ch 3)))
  (go-loop [q []]
    (let [[value channel] (alts! [ch tmt])]
      (cond
        (= channel tmt) (.log js/console (str "done"))
        :else
        (do
          (.log js/console (render q))
          (recur (-> (conj q (<! ch)) (peekn 6))))))))
```
Which logs:
```
process: 2
process: 3 process: 2
process: 2 process: 3 process: 2
process: 1 process: 2 process: 3 process: 2
process: 2 process: 1 process: 2 process: 3 process: 2
process: 1 process: 2 process: 1 process: 2 process: 3 process: 2
process: 1 process: 1 process: 2 process: 1 process: 2 process: 3
process: 1 process: 1 process: 1 process: 2 process: 1 process: 2
process: 1 process: 1 process: 1 process: 1 process: 2 process: 1
process: 3 process: 1 process: 1 process: 1 process: 1 process: 2
process: 1 process: 3 process: 1 process: 1 process: 1 process: 1
process: 2 process: 1 process: 3 process: 1 process: 1 process: 1
process: 3 process: 2 process: 1 process: 3 process: 1 process: 1
process: 2 process: 3 process: 2 process: 1 process: 3 process: 1
process: 1 process: 2 process: 3 process: 2 process: 1 process: 3
process: 2 process: 1 process: 2 process: 3 process: 2 process: 1
done
```

This example steals from another [David Nolen presentation](http://go.cognitect.com/core_async_webinar_recording) on the topic. Essentially, `alts!` is a control structure for channels that will take a value from one of a number of channels depending on which is available at the time of choosing. In this case, the timeout block won't be available to take from until 5000 milliseconds have elapsed, at which point it will remain available for taking from whereas the other triple sequence of pusher `(go (while...))` loops are only available periodically. Thus, the `tmt` channel gets taken from when its time runs out, closing the `alt!` channel.

`alts!` returns one of the "ports" (channels) passed to it as args, depending on the toggling behavior of the provided threads themselves.  From the [documentation](https://clojuredocs.org/clojure.core.async/alts!):

> Completes at most one of several channel operations. Must be called inside a (go ...) block. "ports" is a vector of channel endpoints, which can be either a single channel to take from or a vector of `[channel-to-put-to val-to-put]`, in any combination. Takes will be made as if by <!, and puts will be made as if by >!...[more](https://clojuredocs.org/clojure.core.async/alts!)

# `timeout`

We used `timeout` here to close our channel. It's important to note that - as per the [documentation](https://clojuredocs.org/clojure.core.async/timeout) - while `timeout` does return a channel, that the channel is only there to signal you when the given number of milliseconds has elapsed and it signals that by giving you a closed `chan`. This is one method for properly terminating a looping `go` block: by stopping takes by it via switching to a terminal channel with `alts!`.

# `put!` and `take!`

So far, we've only been using the synchronous syntax (`<!`& `>!`) for taking from and putting to a `chan`. Let's cover briefly their asynchronous siblings, [`put!`](https://clojuredocs.org/clojure.core.async/put!) and [`take!`](https://clojuredocs.org/clojure.core.async/take!).

## `put!`

Sometimes, the docs for functions in Clojure(Script) (I use `(source <function/macro name>)` to see them in my REPL) are a little like inside baseball.
>  "Asynchronously puts a val into port, calling fn0 (if supplied) when
   complete. nil values are not allowed. Will throw if closed. If
   on-caller? (default true) is true, and the put is immediately
   accepted, will call fn0 on calling thread.  Returns nil."

The function signature is the same as `>!`:

`(put! port-to-put-to value-to-put)`

I often Google to find layman's terms to describe them. Here's a great [one from StackOverflow](https://stackoverflow.com/a/35342456):

> If `put!` is not accepted immediately, it places a pending put (the value to be put on the channel + the `put!` callback) on a queue internal to the channel... The callback will be called on a pooled thread **if**: (1) the put is not immediately accepted **or** (2) an explicit `false` is passed in as a final argument to the `put!` call (this argument is called on-caller?).

There's also a great summary of when to use `put!` (instead of `>!`) from [a lispcast blog post](https://lispcast.com/willy-wonka-core-async/)

> USE `put!` and `take!` TO GET STUFF into and out of YOUR CHANNELS FROM OUTSIDE.
`put!` and `take!` (do not park as do `>!` and `<!`) is a way to get values from outside of `core.async` into `core.async` without blocking. For instance, if you’re using a callback-style, which is very common in JavaScript, you will want to make your callback call `put!` to get the value onto a channel.

Let's see this in action. After ensuring your `render` and `peekn` functions are loaded into the namespace by eval'ing them, eval this:

```clj
(defn timeout-chan [port]
  (let [tmt (timeout 5000)]
    (go (while true (<! (timeout 250)) (>! port 1)))
    (go (while true (<! (timeout 500)) (>! port 2)))
    (go (while true (<! (timeout 750)) (>! port 3)))
    (go-loop [q []]
      (let [[val ch] (alts! [port tmt])]
        (cond
          (= ch tmt) (.log js/console (str "done"))
          :else
          (do
            (.log js/console (render q))
            (recur (-> (conj q (<! port)) (peekn 6)))))))))

(defn msg->chan [port msg]
  (put! port msg))

(def test-chan (chan))
```

Then eval this:
```clj
(timeout-chan test-chan)
```

Then, before your five seconds are up, eval this:
```clj
(msg->chan test-chan "OUTSIDE")
```

Which logs:
```
process: 3
process: 1 process: 3
process: 2 process: 1 process: 3
process: 1 process: 2 process: 1 process: 3
process: 3 process: 1 process: 2 process: 1 process: 3
process: 1 process: 3 process: 1 process: 2 process: 1 process: 3
process: 2 process: 1 process: 3 process: 1 process: 2 process: 1
process: 1 process: 2 process: 1 process: 3 process: 1 process: 2
process: 1 process: 1 process: 2 process: 1 process: 3 process: 1
process: 3 process: 1 process: 1 process: 2 process: 1 process: 3
process: 2 process: 3 process: 1 process: 1 process: 2 process: 1
process: 1 process: 2 process: 3 process: 1 process: 1 process: 2
process: 1 process: 1 process: 2 process: 3 process: 1 process: 1
process: 2 process: 1 process: 1 process: 2 process: 3 process: 1
process: 1 process: 2 process: 1 process: 1 process: 2 process: 3
process: OUTSIDE process: 1 process: 2 process: 1 process: 1 process: 2
process: 3 process: OUTSIDE process: 1 process: 2 process: 1 process: 1
process: 1 process: 3 process: OUTSIDE process: 1 process: 2 process: 1
process: 2 process: 1 process: 3 process: OUTSIDE process: 1 process: 2
process: 1 process: 2 process: 1 process: 3 process: OUTSIDE process: 1
process: 1 process: 1 process: 2 process: 1 process: 3 process: OUTSIDE
process: 3 process: 1 process: 1 process: 2 process: 1 process: 3
process: 2 process: 3 process: 1 process: 1 process: 2 process: 1
process: 1 process: 2 process: 3 process: 1 process: 1 process: 2
process: 1 process: 1 process: 2 process: 3 process: 1 process: 1
process: 2 process: 1 process: 1 process: 2 process: 3 process: 1
process: 1 process: 2 process: 1 process: 1 process: 2 process: 3
process: 3 process: 1 process: 2 process: 1 process: 1 process: 2
process: 1 process: 3 process: 1 process: 2 process: 1 process: 1
process: 2 process: 1 process: 3 process: 1 process: 2 process: 1
process: 1 process: 2 process: 1 process: 3 process: 1 process: 2
process: 1 process: 1 process: 2 process: 1 process: 3 process: 1
process: 3 process: 1 process: 1 process: 2 process: 1 process: 3
process: 2 process: 3 process: 1 process: 1 process: 2 process: 1
process: 1 process: 2 process: 3 process: 1 process: 1 process: 2
done
```


## Parking

Although slightly a broader scope than the intention of this guide, there's a great [blog post on braveclojure](https://www.braveclojure.com/core-async/) on the parking mechanics of `core.async` (and processes in general) which I'd recommend for the curious at heart or for those that need to learn more. Note that - in both this and the Willy Wonka blog post (linked above) - the authors cover blocking, which - as mentioned in the "Introduction" - we don't use in ClojureScript/JavaScript.

# Getting Help

## Join the Clojurian's Slack Channel

In the making of this guide, I leveraged the wonderful community of Clojure(Script) users on the [Clojurians' Slack](http://clojurians.net/).

- If you're new to Clojure(Script), I highly recommend the [#beginners channel](https://clojurians.slack.com/messages/beginners/)
- If you're new to `core.async`, there's a [#core-async channel](https://clojurians.slack.com/messages/core-async/) as well!

I think you'll find the members of the community are some of the most generous people you'll ever meet.

## Special Thanks

[David Nolen](https://twitter.com/swannodette) for his awesome [blog posts](http://swannodette.github.io/2013/07/12/communicating-sequential-processes) and [webinars](https://purelyfunctional.tv/programmer-profiles/david-nolen/) and - of course - for [ClojureScript!(https://github.com/clojure/clojurescript/graphs/contributors)]
[Timothy Baldridge](https://twitter.com/timbaldridge) and [Alex Miller](https://twitter.com/puredanger) for [`core.async`](https://github.com/clojure/core.async/graphs/contributors)

On the Clojurians' Slack:
- [noisesmith](https://twitter.com/noisesmith)
- [hiredman](https://github.com/hiredman)
- [SeanCorfield](https://twitter.com/seancorfield)

## Additional Resources

If you haven't already, take a gander at the clojure.core.async ([API Reference](https://clojure.github.io/core.async/) or [docs](https://clojuredocs.org/clojure.core.async)), do so!

I also stole (with a bit of tweaking for Node instead of browser use) from a great [blog post](http://rigsomelight.com/2013/07/18/clojurescript-core-async-todos.html) from [Bruce Hauman](https://twitter.com/bhauman) (the creator of the popular [figwheel](https://github.com/bhauman/lein-figwheel) lein plugin that made ClojureScript the first hot-code-reloading story to JavaScript).
