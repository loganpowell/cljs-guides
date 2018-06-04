<!-- ---
title: '`cljs.core.async` Buffers, `put!` and `take!`'
created: '5-31-2018'
canonicalUrl: 'https://github.com/loganpowell/cljs-guides/blob/master/src/core-async/core-async.md'
tags: ['cljs', 'core-async', 'clojurescript', 'go', 'clojure']
license: 'public-domain'
--- -->

# `cljs.core.async` Buffers, `put!` and `take!`

### Functions Covered:

Function | Short Description | Syntax | Must be used in a `go` block?
--- | --- | :---: | :---:
[`buffer`](https://clojuredocs.org/clojure.core.async/buffer) | A fixed capacity of a `chan`, which parks over-capacity puts  | async | false
[`put!`](https://clojuredocs.org/clojure.core.async/put!) | "Put bang" -> Put to `chan` | async | false
[`take!`](https://clojuredocs.org/clojure.core.async/take!)| "Take bang" -> Take from a `chan` | async | false
[`sliding-buffer`](https://clojuredocs.org/clojure.core.async/sliding-buffer) | A buffer, which allows newest over capacity puts by dropping oldest puts in the buffer (doesn't park overcapacity puts)| async | false
[`dropping-buffer`](https://clojuredocs.org/clojure.core.async/dropping-buffer) | A buffer, which "drops" newest puts when full (doesn't park overcapacity puts) | async | false

## Dependencies

You'll need to add this to the namespace of your file:

```clj
(ns core-async.core
  (:require  [cljs.core.async :refer [>! <! chan timeout put! take! alts! buffer sliding-buffer dropping-buffer]]
             [cljs.core.async :refer-macros [go go-loop]]))
```


Let's rehash our [memory](./alts-timeout-parking.md) of the inner workings of the `core.async` channel.

![conveyor](https://github.com/matthiasn/talk-transcripts/raw/master/Hickey_Rich/ImplementationDetails/00.06.23.jpg)

Up [until now](./core-async-index.md) we've been using buffer-less channels. These have served as handy coordination points where two completely decoupled operations can interact with each other asynchronously, but there's still a bit to be desired from this mechanism. I.e., *the putting **handler** (operation) has had to wait for a taking **handler** (or vice-versa) on the other side to do the hand-off, whereupon the **value** is conveyed between them.*

By adding a buffer, we effectively stretch the "conveyor belt" out giving it capacity to coordinate conveyance between value-producing *operations* **and** hold conveyed *values* along the way.

# `put!` and `take!`

So far, we've only been using the "parking" syntax (`<!` & `>!`) for taking from and putting to a `chan`, which must take place in a `go` block. Let's discuss their `go` block-dismembered siblings, [`put!`](https://clojuredocs.org/clojure.core.async/put!) and [`take!`](https://clojuredocs.org/clojure.core.async/take!).

---

# `put!` Basics

#### [Usage](https://clojuredocs.org/clojure.core.async/put!):
###### `(put! port val)`
       `(put! port val fn1)`
       `(put! port val fn1 on-caller?)`

#### Elaboration:
- Asynchronously puts a `val` into `port`, calling `fn1` (if supplied) when complete, passing `false` if `port` is already closed.
- `nil` values are not allowed.
- If `on-caller?` (default `true`) is `true`, and the put is immediately accepted, will call `fn1` on calling thread.  
- Returns true unless `port` is already closed.

# `take!` Basics

#### [Usage](https://clojuredocs.org/clojure.core.async/take!):
###### `(take! port fn1)`
       `(take! port fn1 on-caller?)`

#### Elaboration:
- Asynchronously takes a `val` from `port`, passing to `fn1`. Will pass `nil` if closed.
- If `on-caller?` (default `true`) is `true`, and value is immediately available, will call `fn1` on calling thread.
- Returns `nil`.

---

Usually, when I'm getting acquainted with the features and language of a library, I find this sort of explanation a bit self-referential and prefer layman's terms. Here's a great [one from StackOverflow](https://stackoverflow.com/a/35342456):

> If `put!` is not matched by a take immediately, it places a pending put operation (the value to be put on the channel + the `put!` callback) on a queue internal to the channel...
> The `put!`/`take!` callback will be called **if**:
> 1) the put/take is not immediately matched **or**
> 2) an explicit `false` is passed in as a final argument to the `put!`/`take!` call (this argument is called `on-caller?`).

There's also a great summary of when to use `put!` and `take` (instead of `>!` and `<!`) from [a lispcast blog post](https://lispcast.com/willy-wonka-core-async/)

> USE `put!` and `take!` TO GET STUFF into and out of YOUR CHANNELS FROM OUTSIDE.
`put!` and `take!` (**do not park as do `>!` and `<!`**) are ways to get values from outside of `core.async` into `core.async` without blocking. For instance, if you’re using a callback-style, which is very common in JavaScript, you will want to make your callback call `put!` to get the value onto a channel.

This is corroborated and expanded upon by Rich Hickey [in his deep dive talk on `core.async`](https://vimeo.com/100518968)

> ...if you're getting raw data from some external source, (you should be using) `put!`, but **there's no backpressure on put `put!`**. All those `put!`s where do they go? ... What should happen if I can't keep up?
> ... One of the ways you can take care of not being able to keep up is to implement backpressure by using a blocking construct (i.e., `(go...)`) on the entry point. The other is just to use (a) "windowed buffer"

Let's see an example of how this will impact our code

```clj

(defn toggle-chan [process stopper]
  (go (while true (<! (timeout 250)) (>! process 1)))
  (go (while true (<! (timeout 500)) (>! process 2)))
  (go (while true (<! (timeout 750)) (>! process 3)))
  (go-loop [_ []] ; accumulator = placeholder, replaced with each `(recur (.log...`
    (let [[val ch] (alts! [process stopper])]
      (cond
        (= ch stopper) (take! stopper #(.log js/console (str "take val: " %)))
        :else
        (recur (.log js/console (str "process: " (<! process))))))))

(defn stopping-put-async [port val]
  (put! port val #(.log js/console (str "put val: " %))))

(defn stopping-put-park [port val]
  (go (>! port val #(.log js/console (str "put val: " %)))))

(def test-chan2 (chan))
(def stopping-chan (chan 2))

```


# Getting Started with Buffers

If you don't provide a buffer explicitly, `core.async` will create an unbuffered channel where a put operation will park until conveyed by a take operation.
