<!-- ---
title: '`cljs.core.async` `alts!`, `timeout` and "Parking"'
created: '5-31-2018'
canonicalUrl: 'https://github.com/loganpowell/cljs-guides/blob/master/src/core-async/core-async.md'
tags: ['cljs', 'core-async', 'clojurescript', 'go', 'clojure']
license: 'public-domain'
--- -->


# `cljs.core.async` `alts!`, `timeout` and "Parking"

In this follow up to [the introduction of `core.async` basics](./core-async-intro.md) we'll get a bit deeper into the rabbit hole and do some more interesting things to expose the inner workings of `core.async`. This is also, a part of [a series](./core-async-guides.md) on the subject.

## Macros Covered:
- [`go-loop`](https://clojuredocs.org/clojure.core.async/go-loop): Syntactic sugar for `(go (loop [] ...))`

### Functions Covered:

Function | Short Description | Syntax | Must be used in a `go` block?
--- | --- | :---: | :---:
[`alts!`](https://clojuredocs.org/clojure.core.async/alts!) | `chan` flow control | sync | true
[`timeout`](https://clojuredocs.org/clojure.core.async/timeout)| Return a channel that closes after set milliseconds | async | false

## Dependencies

You'll need to add this to the namespace of your file:

```clj
(ns core-async.core
  (:require  [cljs.core.async :refer [>! <! chan timeout alts!]]
             [cljs.core.async :refer-macros [go go-loop]]))
```

# Anatomy of a Channel

Building upon our newfound [basic grasp of *what a `chan` does*](./core-async-intro.md) (the "queue", which can serve as a vehicle for conveying information between processes in `core.async`), let's explore *how it does it*. Trust me, understanding this will save you lots of frustration and misunderstanding.

Since channels "spin up" (virtual) threads, any ongoing putting or taking operations to/from the `chan` can remain waiting ("parked") in the thread provisioned for the `chan` until garbage collected. We'll go in more depth into what this means in this guide.

Let's look again at the diagram from [the introductory guide](./core-async-intro.md)

![Comparing Channels to Direct Communication](http://endot.org/notes/2014-02-14-core-async-clojure/compare.png)

... and *zoom in* on one of those little yellow boxes (**"Channel"**) included in Rich Hickey's [presentation](https://vimeo.com/100518968) and its relationship between other parts of your program (SPI = service provider interface):

![SPI](https://raw.githubusercontent.com/matthiasn/talk-transcripts/master/Hickey_Rich/ImplementationDetails/00.05.37.jpg)

We'll continue to use a "conveyor belt" analogy in this guide. Accordingly, you can think of the `impl/put! [val handler]` as operation(s) that seek to convey values to another part of our program. `impl/take! [handler]` are the operations on the other side that want those values. In between them is a conveyor (channel) capable of moving those values along asynchronously without either side needing to know about the other.

Let's start our exploration with a slightly manipulated [example](http://swannodette.github.io/2013/07/12/communicating-sequential-processes) provided by David Nolen.

> Before you eval this example, know it might require a restart of your remote repl (depending on your environment) to terminate the looping `go` block. So, you can just trust that this would never end if you don't want that headache.

```clj
(def ch (chan))

(go (while true (<! (timeout 250)) (>! ch 1)))
(go (while true (<! (timeout 500)) (>! ch 2)))
(go (while true (<! (timeout 750)) (>! ch 3)))

(go-loop []
  (recur (.log js/console (str "process: " (<! ch)))))
```
Which logs the following processes. Note the breaks between each log here represent single occurrences of `(recur...)`, which will be of interest to us in a moment:

- `process: 2`
- `process: 3`
- `process: 2`
- `process: 1`
- `process: 2`
- `process: 1`
- `process: 1`
- `process: 1`
`... happily ever after`

Here, we've set three processes (`(go (while...))`) in motion, trying to put values onto the conveyor (`ch`) and a separate process (`(go-loop ...)`) trying to take values off. These processes know nothing of each other. They communicate with each other via the channel.

While this is an impressive display of the power of `core.async` (Try running three concurrent processes in JavaScript in three lines of code? Ha!), it is also a call for you to be careful when setting your operations to/from a channel in motion.

# Control Flow with `timeout` and `alts!`

Stopping a looping `(go...)` block is tricky business. The `(go...)` blocks are operations outside of the channel. The channel is not a part of them, nor they a part of it. So, what if we don't want a never ending process from our `chan`? One way of dealing with this is to use the `core.async` [`alts!`](https://clojuredocs.org/clojure.core.async/alts!) as a control mechanism.

![The omniconveyor](https://cdn-images-1.medium.com/max/900/1*vdhvl1KtmHTztQrTFauRGQ.gif)

> Alt* is actually the tricky operation. **Almost everything that's built into (`core.async`s) channel implementation is there to support `alt*`** because alt is the hard part. - Rich Hickey

---
# `alts!` Basics

#### [Usage](https://clojuredocs.org/clojure.core.async/alts!):
###### `(alts! ports & {:as opts})`

#### Elaboration:
- Completes at most one of several channel operations.
- Must be called inside a `(go ...)` block.
- `ports` is a vector of channel endpoints, which can be either a channel to take from or a vector of `[channel-to-put-to val-to-put]`, in any combination.
- Takes will be made as if by `<!`, and puts will be made as if by `>!`. Unless the `:priority` option is `true`, if more than one port operation is ready a non-deterministic choice will be made.
- If no operation is ready and a `:default` value is supplied, `[default-val :default]` will be returned, otherwise `alts!` will park until the first operation to become ready completes.
- Returns `[val port]` of the completed operation, where `val` is the value taken for takes, and a boolean (`true` unless already closed, as per `put!`) for puts.

##### `opts` are passed as `:key val ...` Supported options:

- `:default val` - the value to use if none of the operations are immediately ready
- `:priority true` - (default `nil`) when `true`, the operations will be tried in order.

Note: there is no guarantee that the `port` or `val` expressions will be used, nor in what order should they be, so you should *not* depend on them for side effects.

---


Let's see this in action:

```clj
(defn timeout-chan [port]
  (let [tmt (timeout 3000)]
    (go (while true (<! (timeout 250)) (>! port 1)))
    (go (while true (<! (timeout 500)) (>! port 2)))
    (go (while true (<! (timeout 750)) (>! port 3)))
    (go-loop [_ []] ; accumulator = placeholder, replaced with each `(recur (.log...`
      (let [[val ch] (alts! [port tmt])]
        (cond
          (= ch tmt) (.log js/console (str "done"))
          :else
          (recur (.log js/console (str "process: " (<! port)))))))))

(def test-chan (chan))
```

Then eval this:
```clj
(timeout-chan test-chan)
```

Which logs:
- `process: 2`
- `process: 3`
- `process: 2`
- `process: 1`
- `process: 2`
- `process: 1`
- `process: 1`
- `process: 1`
- `process: 1`
- `process: 3 done`

`alts!` returns one of the "ports" (channels) passed to it as args, acting like a valve, making switching between threads possible.

Essentially, `alts!` is a control structure, which will take from one of a number of channels depending on which is available at the time of choosing. In this case, the timeout block won't be available to take from until 3000 milliseconds have elapsed, at which point it will remain available for taking from the looping `(recur ... (<! port))` take, whereas the values coming from the triplet sequence of putting `(go (while...))` loops are only available periodically. Thus, the `tmt` channel gets taken from when its time runs out, effectively starving the taking operations in the looping `(go (while...))` blocks, thus "parking" their puts.


# "Parking"

Let's zoom in further into our channel, temporarily disregarding the i/o relationships to focus on the inner workings of the `core.async` channel (our conveyor belt) alone:

![conveyor](https://github.com/matthiasn/talk-transcripts/raw/master/Hickey_Rich/ImplementationDetails/00.06.23.jpg)

Right now, we'll gloss over the `buffer` and focus on what's happening on the edges of the channel. For now, think of a buffer-less channel like a ridiculously short conveyor belt that can't hold anything. In this case, the channel acts only as a coordination point where two completely decoupled operations can interact with each other asynchronously. I.e., *the putting **handler** (operation) will have to wait for a taking **handler** (or vice-versa) on the other side to do the hand-off, whereupon the **value** is conveyed between them.*

As we'll see [in another guide](./core-async-index.md), adding a buffer effectively stretches the conveyor belt out giving it capacity to coordinate conveyance between value-producing *operations* **and** hold conveyed *values* along the way.

In the previous code example, the three `(go (while...))` blocks pushing values into a channel can be thought of as "little programs", which spin up their own little (JavaScript virtual) threads that can park put operations until takes are able to facilitate asynchronous data flow. As such, those little programs will continue to push values into the shared `chan` (`test-chan`) until its buffer (if provided) is full. In this case, since we didn't provide a buffer, the `test-chan` will park pending put operations until more take operations enable those putting operations' values to be conveyed.

Let's illustrate what this means for our `test-chan` by eval'ing the same function call on it again:

```clj
(timeout-chan test-chan)
```

Now, note the additional processes that get logged out - and in what fashion - here:

- `process: 1`
- `process: 2 process: 1`
- `process: 3 process: 1`
- `process: 2 process: 1`
- `process: 1`
- `process: 3 process: 2 process: 1`
- `process: 1`
- `process: 2 process: 1`
- `process: 3 process: 1`
- `process: 2 process: 1`
- `process: 1`
- `process: 3 done`

Let's compare these two previous logs side-by-side:

First Log | Second Log
--- | ---
 ` ` | `process: 1`
`process: 2` | `process: 2 process: 1`
`process: 3` | `process: 3 process: 1`
`process: 2` | `process: 2 process: 1`
`process: 1` | `process: 1`
`process: 2` | `process: 3 process: 2 process: 1`
`process: 1` | `process: 1`
`process: 1` | `process: 2 process: 1`
`process: 1` | `process: 3 process: 1`
`process: 1` | `process: 2 process: 1`
` ` | `process: 1`
`process: 3 done` | `process: 3 done`

You can see the difference between the two logs above (the exact log output is not critical here) as a manifestation of what's going on inside the `test-chan`. When we switched the `go-loop` to the `timeout` channel (with `alts!`) in our first eval, we left the values being pushed by the previous `(go...)` blocks in a *waiting* state, i.e., **parked**. Upon second eval, the `test-chan` gets an extra dose of puts because it consumes - simultaneously:

- the second eval's `(go...)` put values
- the first evals - post `alts!` - *un-parked* put values.
- the first eval's `(go...)` put values - enabled by new `(recur ... (<! port))` taking operations

I hope this is starting to make sense. When I first encountered this, I was confused, so I hoped to help others who might wonder what's going on here by elaborating.

---
# `timeout` Basics

#### [Usage](https://clojuredocs.org/clojure.core.async/timeout):
###### `(timeout msecs)`

#### Elaboration:
- Returns a channel that will close after `msecs`
---

We used `timeout` above to terminate our process. It's important to note that - as per the [documentation](https://clojuredocs.org/clojure.core.async/timeout) - while `timeout` does return a channel, that the channel is only there to signal you when the given number of milliseconds has elapsed and it signals that by giving you a closed `chan`. This is one method for properly terminating a long-running process: Stop it taking from or putting to the target `chan` by switching to a closed channel (e.g., via the `alts!` function).


# Next Up!

We'll build some more responsibility into our channels using buffers. Find the link to the guide and more [in the index](./core-async-index.md).

# Getting Help

## Join the Clojurian's Slack Channel

In the making of this guide, I leveraged the wonderful community of Clojure(Script) users on the [Clojurians' Slack](http://clojurians.net/).

- If you're new to Clojure(Script), I highly recommend the [#beginners channel](https://clojurians.slack.com/messages/beginners/)
- If you're new to `core.async`, there's a [#core-async channel](https://clojurians.slack.com/messages/core-async/) as well!

I think you'll find the members of the community are some of the most generous people you'll ever meet.

## Special Thanks

- Great help from these guys on the Clojurians' Slack:
  - [noisesmith](https://twitter.com/noisesmith)
  - [hiredman](https://github.com/hiredman)
  - [SeanCorfield](https://twitter.com/seancorfield)
  - [BrianRubinton](https://twitter.com/brianru)
- [David Nolen](https://twitter.com/swannodette) for his awesome [blog posts](http://swannodette.github.io/2013/07/12/communicating-sequential-processes) and [webinars](https://purelyfunctional.tv/programmer-profiles/david-nolen/) and - of course - for [ClojureScript!](https://github.com/clojure/clojurescript/graphs/contributors)
- [Timothy Baldridge](https://twitter.com/timbaldridge) and [Alex Miller](https://twitter.com/puredanger) for [`core.async`](https://github.com/clojure/core.async/graphs/contributors). Tim also has some great [`core.async` tutorials](https://tbaldridge.pivotshare.com/home)!

## Additional Resources

- Implementation of `core.async` [Rich Hickey presentation](https://vimeo.com/100518968)
  - [transcript and slides](https://github.com/matthiasn/talk-transcripts/blob/master/Hickey_Rich/ImplementationDetails.md) courtesy of [Matthias Nehlsen](https://github.com/matthiasn)
- Presentation: [`core.async` debut](https://www.youtube.com/watch?v=VrmfuuHW_6w) with Rich Hickey
  - [Transcript and slides](https://github.com/matthiasn/talk-transcripts/blob/master/Hickey_Rich/CoreAsync.md) courtesy of [Matthias Nehlsen](https://github.com/matthiasn)
- `core.async`: Concurrency Without Callbacks from [Stuart Halloway](https://www.infoq.com/presentations/core-async)
  - github [source for examples](https://github.com/cognitect/async-webinar) from the talk
- Timeouts and Working with Multiple Channels via Parking and `alts!` by [Will Fleming](https://wtfleming.github.io/2015/05/27/adventures-with-core-async-part-two-parking-timeouts-alt/)
- Other Examples from [Tim Baldridge](https://github.com/halgari/clojure-conj-2013-core.async-examples/blob/master/src/clojure_conj_talk/core.clj)
- David Nolen [Webinar Examples](https://github.com/cognitect/async-webinar/blob/master/src/webinar/core.cljs)
- Interview with Tim Baldridge [discussing `core.async`](https://www.infoq.com/interviews/baldridge-core-async).

#### More on Threads and Parking:

There's a great [blog post on braveclojure](https://www.braveclojure.com/core-async/) on the parking mechanics of `core.async` (and processes in general) which I'd recommend for those that need to learn more. There was also a very concise [Hacker News comment](https://news.ycombinator.com/item?id=5961407), which I found enlightening:

> The IoC (Inversion of Control) threads work by converting park-able functions into Single-Static Assignment (SSA) form and then compiled to a state machine. Essentially, each time a function is "parked", it returns a value indicating where to resume from. These little state machine functions are basically big switch statements that you don't need to write by hand. This design is inspired by C#'s async compilation strategy.
