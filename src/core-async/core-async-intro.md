<!-- ---
title: 'Getting Started with `cljs.core.async`'
created: '5-31-2018'
canonicalUrl: 'https://github.com/loganpowell/cljs-guides/blob/master/src/core-async/core-async-intro.md'
tags: ['cljs', 'core-async', 'clojurescript', 'go', 'clojure']
license: 'public-domain'
--- -->


# Getting Started with `cljs.core.async`

This guide was meant to help those just getting started with `core.async`, but why would we want to learn something new for asynchronous communicating between our functions/systems when we already have a way to do that (i.e., callbacks)?

---
### Conveyance must become first class

There comes a time in all good programs when components or subsystems must stop communicating directly to each other.

-- [Rich Hickey: `core.async` début](https://github.com/matthiasn/talk-transcripts/blob/master/Hickey_Rich/CoreAsync.md)

---

`core.asyc` outperforms [other async vehicles](http://swannodette.github.io/2013/08/23/make-no-promises) in a number of ways, which should become apparent by running through some examples, but here are just a few:

1) **Processes are first class**: you can use `core.async` channels and `go` blocks not only to pass data/values around, but pass also processes themselves! This feature enables you to take processes and de/compose them to do incredibly sophisticated things in just a few lines of code.
2) **Write asynchronous code as if it was synchronous** (using `go` blocks)
3) **Treat channel i/o data as you would _any other_ collection in ClojureScript**. Enabling you to learn one set of operations (e.g., `map`, `filter`, etc... using [transducers](https://blog.venanti.us/using-transducers-with-core-async-clojurescript/)) to rule them all!

This third point really was the clincher for me. I was learning the - genuinely wonderful to work with - `ramda.js` library, when it dawned on me: _{ Haven't I done something like this before? }_ Like all great libraries, they come and go out of favor (remember JQuery?). The idea of learning one set of operations that could be used across all my code, both asynchronous and synchronous, in a way that would improve my skills with the *language* (not just the library) feels more efficient to me. That being said, I'm the type that always has this [xkcd](https://xkcd.com/974/) protest in the back of my head:

<p align="center">
  <img src="https://imgs.xkcd.com/comics/the_general_problem.png" alt="The General Problem"/>
</p>

## Introduction

This is the first of a [series of guides](./core-async-index.md), which cover - in an incremental fashion - the wonderful, but nuanced world of "simple made easy" asynchronous communication in your ClojureScript programs via `core.async`.

Most of the code included in [the examples](./core.cljs) were stolen from [David Nolen](https://github.com/swannodette/swannodette.github.com/blob/master/code/blog/src/blog/csp/core.cljs), which he goes over in his introductory [meetup video](https://www.youtube.com/watch?v=AhxcGGeh5ho).

### Differences in `core.async` between Clojure and ClojureScript

There are a few differences between the features of `core.async` in Clojure and ClojureScript as a matter of necessity. Though Clojure has threads, Node/JavaScript only has a single thread, so any thread-blocking operation will not - by default - be available in ClojureScript's implementation. However, there are ways you can get more features by using extensions to the library such as [`superv.async`](https://github.com/replikativ/superv.async), but those are out of the scope of this guide.

Very roughly speaking - anything that has "blocking" semantics in `clojure.core.async` (e.g., anything with two `!!`s) will not be  available in `cljs.core.async`.

## Macros Covered:
- [`go`](https://clojuredocs.org/clojure.core.async/go): Provides an first-class process (and lexical "block") where internal asynchronous functions can be written in a synchronous fashion.
- [`go-loop`](https://clojuredocs.org/clojure.core.async/go-loop): Syntactic sugar for `(go (loop [] ...))`

## Functions Covered:

Function | Short Description | Syntax | Must be used in a `go` block?
--- | --- | :---: | :---:
[`chan`](https://clojuredocs.org/clojure.core.async/chan) | Channel: async coordination vehicle | async | true
[`>!`](https://clojuredocs.org/clojure.core.async/>!) | "Put bang" -> Put to `chan` | sync | true
[`<!`](https://clojuredocs.org/clojure.core.async/>!) | "Take bang" -> Take from a `chan` | sync | true

## Dependencies

You'll need to add this to the namespace of your file:

```clj
(ns core-async.core
  (:require  [cljs.core.async :refer [>! <! chan]]
             [cljs.core.async :refer-macros [go go-loop]])
  (:use [clojure.repl :only (source)]))
```
> The `source` function is a handy sister to the natively available `doc` function, which allows you to inspect the definition of a given macro or function in a library.

Also, you'll need to add the [current version](https://github.com/clojure/core.async#releases-and-dependency-information) of `core.async` to your project's `:dependencies`:

```clj
[org.clojure/core.async <current version>]
```


---
# `go` Block Basics

#### [Usage](https://clojure.github.io/core.async/#clojure.core.async/go):
###### `(go & body)`

#### Elaboration:

- Asynchronously executes the `body`, returning immediately to the calling thread.
- Any visible calls to `<!`, `>!` and `alt!`/`alts!` channel operations within the body will **block (if necessary) by 'parking'** the calling thread rather than tying up the only JS thread when in ClojureScript.
- Upon completion of the operation, the `body` will be resumed.
- Returns a channel which will receive the result of the `body` when completed
---

`go` blocks provide an environment where we can escape callback hell. I like to think of them as pulling us into a new little programming world where we can write our async code in it's logical order. As [Stuart Halloway](https://twitter.com/stuarthalloway?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor) explains in his [great talk](https://www.infoq.com/presentations/core-async) about `core.async` (paraphrasing):

`go` is a first class process abstraction (can be passed as a value to other processes) that will either use real threads (if available) or use "magic-callback-hell-behind-the-scenes-threads" giving users who don't have real threads to work with (i.e., ClojureScript/JavaScript users) the ability to write code as if they did. `go` uses a state-machine with "parking" to enable this.

We will touch on what "parking" means [in another post](./puts-takes-alts.md). For now, let's look at some code!

```clj
(.log js/console (go 5))
```
In our console we will see that **the result of the `go` block is a `ManyToManyChannel`** with the following semantics:

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

So, what if we tried to value out with `<!`? Let's try eval'ing this:
```clj
(.log js/console (<! (go 5)))
```

...aaaand we get this:
```
throw (new Error("<! used not in (go ...) block"));
```

Since we're trying to "take" (`<!`) the value from *outside* the `go` block, we get an error. It may seem a bit odd at first, but the quickest way to remedy this is to wrap our `<!` (taking operation) in a `go` block:

```clj
(go (.log js/console (<! (go 5))))
```
And now we get our value out:
```
5
```

This is *not* best practice. The takeaway is that **you can only do a "parking" take (`<!`) from a channel within a `go` block**. In the case above, we created our channel in an unconventional way (by using a `go` instead of a channel directly), just to show that what is returned from a `go` is actually a channel (`chan`).



---
# `chan` Basics

> Check out this fun overview of channels from Eric Normand [on YouTube](https://www.youtube.com/watch?v=msv8Fvtd6YQ)
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

If `go` blocks create an environment where we can write async code as if it were sync code, how do we communicate or pass information between these environments? Are we limited to doing this stuff only inside the `go` blocks? The answer is "no". **The way we pass work done inside one `go` block to another `go` block is with channels (`chan`).**

Let's introduce a *bona fide* channel into our code. To start, let's treat the `chan` as a simple internal means of conveying something:

```clj
(let [c (chan)]
  (go
    (.log js/console "We got here")
    (.log js/console (<! c)) ; take from the channel
    (.log js/console "We'll never get here")))
```
Logging out:

```
We got here
```

Ok... what just happened? Why didn't we get the second console log? Well, this is the first lesson we need to learn about channels. We tried to take (`<!`) from an empty `chan`. What happened? We closed the `go` block before we put anything on that could be taken (`(go ...)<-closing paren closes the go block`) and thus abandoned the thread we provisioned. **Until a put is offset by a take (or vice versa) within the channel the operation will be suspended (will "wait") until it's satisfied by its counterpart or garbage collected.**

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
What's happening is that the first `go` block's second console log isn't allowed to read until it's put operation `>!` is satisfied by the take operation in the second `go` block. This is the primary takeaway from this example. I.e., that  **writes (`>!`/`put!`) and reads (`<!`/`take!`) need to be balanced in order to facilitate the sequential flow of information within and/or between `go` blocks.**

"Parking" is a feature, which prevents our provisioned processes from running out of control forever after. We can determine we handle too many puts to a channel that has not pending takes with the various `buffer` functions, which we'll cover in a [later guide](./core-async-index.md).


## Channels In Summary:

If you're passing a `chan` within or between `go` blocks in the same or different scopes, any unbalanced put to or take from that `chan` will be "suspended". In this case, it's accidentally forewarning of our code to use the combination of `let`...`go` ;)

---
## Up Next

If this wetted your appetite to learn a bit more about `core.async`, check out [the next lesson](./core-async.md)

## Additional Resources

If you haven't already, take a gander at the clojure.core.async ([API Reference](https://clojure.github.io/core.async/) or [docs](https://clojuredocs.org/clojure.core.async)), do so!

Check out this [blog post](https://medium.com/@hlship/some-observations-about-clojure-core-async-dc0ad44b8e2f) from [Howard M. Lewis](https://twitter.com/hlship) (the core contributor of a fantastic [Clojure GraphQL Server](https://github.com/walmartlabs/lacinia/graphs/contributors)) covering what to think about when spinning up threads.

I also stole (with a bit of tweaking for Node instead of browser use) from a great [blog post](http://rigsomelight.com/2013/07/18/clojurescript-core-async-todos.html) from [Bruce Hauman](https://twitter.com/bhauman) (the creator of the popular [figwheel](https://github.com/bhauman/lein-figwheel) lein plugin that made ClojureScript the first hot-code-reloading story to JavaScript).

### Examples of `core.async`

Check out Some Advanced Examples of `core.async`in Action in Actual Projects

1) [NetRunner: Game](https://github.com/mtgred/netrunner/search?q=core.async&unscoped_q=core.async)
2) [Goya: Pixel Editor](https://github.com/jackschaedler/goya/search?q=core.async&unscoped_q=core.async)
3) [Wordsmith Markdown Editor](https://github.com/yuhama/wordsmith/blob/848976002c8a0830e7ee85a352530f610d112389/src/wordsmith/core.cljs)

### For the theorist reader:

Read more about the concepts behind `core.async`: [Communicating Sequential Processes: CSP](https://en.wikipedia.org/wiki/Communicating_sequential_processes)).
