<!-- ---
title: '`cljs.core.async` `alts!`, `put!`, `take!` and "parking"'
created: '5-31-2018'
canonicalUrl: 'https://github.com/loganpowell/cljs-guides/blob/master/src/core-async/core-async.md'
tags: ['cljs', 'core-async', 'clojurescript', 'go', 'clojure']
license: 'public-domain'
--- -->


# `cljs.core.async` `alts!`, `put!`, `take!` and "parking"

In this follow up to [the introduction of `core.async` basics](./ore-async-intro.md) we'll get a bit deeper into the rabbit hole and do some more interesting things to expose the inner workings of `core.async`. This is also, a part of [a series](./core-async-guides.md) on the subject.


## Macros Covered:
- [`go-loop`](https://clojuredocs.org/clojure.core.async/go-loop): Syntactic sugar for `(go (loop [] ...))`

### Functions Covered:

Function | Short Description | Syntax | Must be used in a `go` block?
--- | --- | :---: | :---:
[`alts!`](https://clojuredocs.org/clojure.core.async/alts!) | `chan` flow control | sync | true
[`put!`](https://clojuredocs.org/clojure.core.async/put!) | "Put bang" -> Put to `chan` | async | false
[`take!`](https://clojuredocs.org/clojure.core.async/take!)| "Take bang" -> Take from a `chan` | async | false

## Dependencies

You'll need to add this to the namespace of your file:

```clj
(ns core-async.core
  (:require  [cljs.core.async :refer [>! <! chan put! take! close! timeout alts! alt! buffer dropping-buffer sliding-buffer]]
             [cljs.core.async :refer-macros [go go-loop alt!]])
  (:use [clojure.repl :only (source)]))
```

## Gotchas of `chan`

Now that we have a basic grasp of `chan` (the "queue", which can serve as a vehicle for conveying information between processes in `core.async`), it's important to note that you can't just kill a `chan` by closing its spawning `go` block. Critically, any ongoing putting or taking operations to/from the `chan` remain locked/waiting in the thread provisioned for the `chan`.

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
      (recur (-> (conj q (<! ch)) (peekn 3)))))
```
Which logs:

```
process: 2
process: 3 process: 2
process: 2 process: 3 process: 2
process: 1 process: 2 process: 3
process: 2 process: 1 process: 2
process: 1 process: 2 process: 1
process: 1 process: 1 process: 2
process: 1 process: 1 process: 1
process: 1 process: 1 process: 1
process: 3 process: 1 process: 1
process: 1 process: 3 process: 1
process: 2 process: 1 process: 3
process: 3 process: 2 process: 1
process: 2 process: 3 process: 2
process: 1 process: 2 process: 3
... happily ever after
```

While this is an impressive display of the power of `core.async` (Try running three concurrent processes in JavaScript in three lines of code? Ha!), it is also a call for you to be careful when setting your channels in motion.

These three `(go...)` blocks pushing values into a channel can be thought of as "little programs", which spin up their own little (real or virtual) threads that can park/wait.


# Control Flow with `alts!`

So, what if we don't want a never ending process from our `chan`? One way of dealing with this is to use the `core.async` [`alts!`](https://clojuredocs.org/clojure.core.async/alts!) as a control structure:

After ensuring your `render` and `peekn` functions are loaded into the namespace by eval'ing them, eval this:


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
            (recur (-> (conj q (<! port)) (peekn 3)))))))))

(def test-chan (chan))
```

Then eval this:
```clj
(timeout-chan test-chan)
```

Which logs:
```
process: 2
process: 2 process: 2
process: 1 process: 2 process: 2
process: 1 process: 1 process: 2
process: 1 process: 1 process: 1
process: 3 process: 1 process: 1
process: 3 process: 3 process: 1

process: 1 process: 3 process: 3
process: 1 process: 1 process: 3
process: 1 process: 1 process: 1

process: 2 process: 1 process: 1
process: 1 process: 2 process: 1
process: 2 process: 1 process: 2
process: 2 process: 2 process: 1
process: 1 process: 2 process: 2
process: 1 process: 1 process: 2

process: 3 process: 1 process: 1
process: 3 process: 3 process: 1
process: 3 process: 3 process: 3
process: 1 process: 3 process: 3
process: 1 process: 1 process: 3
process: 1 process: 1 process: 1

process: 2 process: 1 process: 1
process: 2 process: 2 process: 1
process: 2 process: 2 process: 2
process: 1 process: 2 process: 2
process: 1 process: 1 process: 2
process: 1 process: 1 process: 1

process: 1 process: 1 process: 1
process: 1 process: 1 process: 1
process: 1 process: 1 process: 1

process: 3 process: 1 process: 1
process: 3 process: 3 process: 1
process: 3 process: 3 process: 3
process: 3 process: 3 process: 3
process: 2 process: 3 process: 3
process: 2 process: 2 process: 3
process: 1 process: 2 process: 2
process: 1 process: 1 process: 2
process: 1 process: 1 process: 1

process: 1 process: 1 process: 1
process: 1 process: 1 process: 1
process: 1 process: 1 process: 1

done
```

This example steals from another [David Nolen presentation](http://go.cognitect.com/core_async_webinar_recording) on the topic. Essentially, `alts!` is a control structure for channels that will take a value from one of a number of channels depending on which is available at the time of choosing. In this case, the timeout block won't be available to take from until 5000 milliseconds have elapsed, at which point it will remain available for taking from whereas the other triple sequence of pusher `(go (while...))` loops are only available periodically. Thus, the `tmt` channel gets taken from when its time runs out, closing the `alt!` channel.

`alts!` returns one of the "ports" (channels) passed to it as args, depending on the toggling behavior of the provided threads themselves.

## `alt!` vs `alts!`

![alt!](https://res.infoq.com/presentations/core-async/en/slides/sl26.jpg)
> source: [infoQ](https://www.youtube.com/watch?v=VrmfuuHW_6w)

There are two flavors of `alt*` in `core.async`, who's difference is explained pretty succinctly by [Michal Marczyk](https://stackoverflow.com/a/22085702):

- `alts!` is a **function** that accepts a vector of channels to take from and/or channels with values to be put on them (in the form of doubleton vectors: [c v]). The vector may be dynamically constructed; the code calling `alts`! may not know how many channels it'll be choosing among (and indeed that number need not be constant across invocations).

- `alt!` is a convenience **macro** which basically acts as a cross between `cond` and `alts!`. Here the number of "ports" (channels or channel+value pairs) must be known statically, but in practice this is quite often the case and the `cond`-like syntax is very clear.

> `alt!` expands to a somewhat elaborate expression using `alts!`; apart from the syntactic convenience, it offers no extra functionality.



# `timeout`

We used `timeout` here to close our channel. It's important to note that - as per the [documentation](https://clojuredocs.org/clojure.core.async/timeout) - while `timeout` does return a channel, that the channel is only there to signal you when the given number of milliseconds has elapsed and it signals that by giving you a closed `chan`. This is one method for properly terminating a looping `go` block: Stop it taking from or putting to a shared `chan` by switching to a `timeout` channel via the `alts!` function.



# `put!` and `take!`

So far, we've only been using the "parking" syntax (`<!`& `>!`) for taking from and putting to a `chan`, which must take place in a `go` block. Let's cover briefly their dismembered siblings, [`put!`](https://clojuredocs.org/clojure.core.async/put!) and [`take!`](https://clojuredocs.org/clojure.core.async/take!).

## `put!`

Sometimes, the docs for functions in Clojure(Script) (I use `(source <function/macro name>)` to see them in my REPL) are a little like inside baseball.
>  "Asynchronously puts a val into port, calling fn0 (if supplied) when
   complete. nil values are not allowed. Will throw if closed. If
   on-caller? (default true) is true, and the put is immediately
   accepted, will call fn0 on calling thread.  Returns nil."

The function signature is the same as `>!`:

`(put! port-to-put-to value-to-put)`

I often Google to find layman's terms to describe them. Here's a great [one from StackOverflow](https://stackoverflow.com/a/35342456):

> If `put!` is not accepted immediately, it places a pending put (the value to be put on the channel + the `put!` callback) on a queue internal to the channel... The callback will be called on a pooled thread **if**: (1) the put is not immediately accepted **or** (2) an explicit `false` is passed in as a final argument to the `put!` call (this argument is called `on-caller?`).

There's also a great summary of when to use `put!` (instead of `>!`) from [a lispcast blog post](https://lispcast.com/willy-wonka-core-async/)

> USE `put!` and `take!` TO GET STUFF into and out of YOUR CHANNELS FROM OUTSIDE.
`put!` and `take!` (do not park as do `>!` and `<!`) is a way to get values from outside of `core.async` into `core.async` without blocking. For instance, if you’re using a callback-style, which is very common in JavaScript, you will want to make your callback call `put!` to get the value onto a channel.

This is corroborated in [Stuart Halloway's talk](https://www.infoq.com/presentations/core-async) on `core.async`, wherein he gives an example of a listener in your web app, which (asynchronously) sends events (`put!`s) to a channel (API) and then `take!`s the response from the API.

Let's see this in action. After ensuring your `render` and `peekn` functions are loaded into the namespace by eval'ing them, eval this:
```clj
(defn msg->chan [port msg]
  (put! port msg))
```

Then eval the `timeout-chan` again:
```clj
(timeout-chan test-chan)
```
Then, before your five seconds are up, eval this:
```clj
(msg->chan test-chan "OUTSIDE")
```

Which logs:
```
process: 2
process: 2 process: 2
process: 1 process: 2 process: 2
process: 1 process: 1 process: 2
process: 3 process: 1 process: 1
process: 3 process: 3 process: 1
process: 1 process: 3 process: 3
process: 1 process: 1 process: 3
process: 2 process: 1 process: 1
process: 2 process: 2 process: 1
process: 2 process: 2 process: 2
process: 1 process: 2 process: 2
process: 1 process: 1 process: 2
process: 3 process: 1 process: 1
process: 3 process: 3 process: 1
process: 3 process: 3 process: 3
process: 1 process: 3 process: 3
process: 1 process: 1 process: 3
process: 2 process: 1 process: 1
process: 2 process: 2 process: 1
process: 2 process: 2 process: 2
process: 1 process: 2 process: 2
process: 1 process: 1 process: 2
process: 1 process: 1 process: 1
process: 1 process: 1 process: 1
process: 1 process: 1 process: 1
process: 2 process: 1 process: 1
process: 3 process: 2 process: 1
process: 3 process: 3 process: 2
process: 2 process: 3 process: 3
process: 2 process: 2 process: 3
process: 1 process: 2 process: 2
process: 1 process: 1 process: 2
process: OUTSIDE process: 1 process: 1
process: 1 process: OUTSIDE process: 1
process: 1 process: 1 process: OUTSIDE
process: 2 process: 1 process: 1
process: 2 process: 2 process: 1
process: 2 process: 2 process: 2
process: 1 process: 2 process: 2
process: 1 process: 1 process: 2
process: 3 process: 1 process: 1
process: 3 process: 3 process: 1
process: 3 process: 3 process: 3
process: 1 process: 3 process: 3
process: 1 process: 1 process: 3
process: 2 process: 1 process: 1
process: 2 process: 2 process: 1
process: 2 process: 2 process: 2
process: 1 process: 2 process: 2
process: 1 process: 1 process: 2
process: 1 process: 1 process: 1
process: 1 process: 1 process: 1
process: 1 process: 1 process: 1
process: 3 process: 1 process: 1
process: 3 process: 3 process: 1
process: 2 process: 3 process: 3
process: 2 process: 2 process: 3
process: 2 process: 2 process: 2
process: 1 process: 2 process: 2
process: 1 process: 1 process: 2
process: 1 process: 1 process: 1
process: 1 process: 1 process: 1
process: 1 process: 1 process: 1
process: 2 process: 1 process: 1
process: 2 process: 2 process: 1
process: 1 process: 2 process: 2
process: 1 process: 1 process: 2
process: 1 process: 1 process: 1
process: 3 process: 1 process: 1
process: 3 process: 3 process: 1
process: 1 process: 3 process: 3
process: 1 process: 1 process: 3
process: 1 process: 1 process: 1
process: 2 process: 1 process: 1
process: 2 process: 2 process: 1
process: 1 process: 2 process: 2
process: 1 process: 1 process: 2
process: 1 process: 1 process: 1
process: 1 process: 1 process: 1
process: 1 process: 1 process: 1
process: 3 process: 1 process: 1
process: 3 process: 3 process: 1
process: 3 process: 3 process: 3
process: 2 process: 3 process: 3
process: 2 process: 2 process: 3
process: 1 process: 2 process: 2
process: 1 process: 1 process: 2
process: 1 process: 1 process: 1
process: 1 process: 1 process: 1
process: 1 process: 1 process: 1
done
```

Notice how we got a much longer log this time, when we - asynchronously - added a message to the channel? Now it's time to dig deeper into what's meant by "parking" to help us understand.

## Parking

Although slightly a broader scope than the intention of this guide, there's a great [blog post on braveclojure](https://www.braveclojure.com/core-async/) on the parking mechanics of `core.async` (and processes in general) which I'd recommend for those that need to learn more.

There was also a very concise [Hacker News comment](), which I found enlightening:

> The IoC ([Inversion of Control]) threads work by converting park-able functions into Single-Static Assignment (SSA) form [1] and then compiled to a state machine. Essentially, each time a function is "parked", it returns a value indicating where to resume from. These little state machine functions are basically big switch statements that you don't need to write by hand. This design is inspired by C#'s async compilation strategy.





# Getting Help

## Join the Clojurian's Slack Channel

In the making of this guide, I leveraged the wonderful community of Clojure(Script) users on the [Clojurians' Slack](http://clojurians.net/).

- If you're new to Clojure(Script), I highly recommend the [#beginners channel](https://clojurians.slack.com/messages/beginners/)
- If you're new to `core.async`, there's a [#core-async channel](https://clojurians.slack.com/messages/core-async/) as well!

I think you'll find the members of the community are some of the most generous people you'll ever meet.

## Special Thanks

- [David Nolen](https://twitter.com/swannodette) for his awesome [blog posts](http://swannodette.github.io/2013/07/12/communicating-sequential-processes) and [webinars](https://purelyfunctional.tv/programmer-profiles/david-nolen/) and - of course - for [ClojureScript!](https://github.com/clojure/clojurescript/graphs/contributors)
- [Timothy Baldridge](https://twitter.com/timbaldridge) and [Alex Miller](https://twitter.com/puredanger) for [`core.async`](https://github.com/clojure/core.async/graphs/contributors). He also has some great [tutorials](https://tbaldridge.pivotshare.com/home)!

On the Clojurians' Slack:
- [noisesmith](https://twitter.com/noisesmith)
- [hiredman](https://github.com/hiredman)
- [SeanCorfield](https://twitter.com/seancorfield)
- [BrianRubinton](https://twitter.com/brianru)

## Additional Resources


I also stole (with a bit of tweaking for Node instead of browser use) from a great [blog post](http://rigsomelight.com/2013/07/18/clojurescript-core-async-todos.html) from [Bruce Hauman](https://twitter.com/bhauman) (the creator of the popular [figwheel](https://github.com/bhauman/lein-figwheel) lein plugin that made ClojureScript the first hot-code-reloading story to JavaScript).


### Other Great Links

- [Timeouts and Working with Multiple Channels via Parking and `alts!`](https://wtfleming.github.io/2015/05/27/adventures-with-core-async-part-two-parking-timeouts-alt/)
- [`core.async`: Concurrency Without Callbacks](https://www.infoq.com/presentations/core-async)
  - [github source for examples from the talk](https://github.com/cognitect/async-webinar)
- [Other Examples from @Halgari](https://github.com/halgari/clojure-conj-2013-core.async-examples/blob/master/src/clojure_conj_talk/core.clj)
- [David Nolen Webinar Examples](https://github.com/cognitect/async-webinar/blob/master/src/webinar/core.cljs)



# TODO:
- to [watch Tim Baldridge](https://www.infoq.com/interviews/baldridge-core-async)
- language from [Rich](https://github.com/matthiasn/talk-transcripts/blob/master/Hickey_Rich/CoreAsync.md)
- Bruce Hauman [blog](http://rigsomelight.com/2013/07/18/clojurescript-core-async-todos.html)
- [interactive stuff](https://wtfleming.github.io/2015/05/27/adventures-with-core-async-part-two-parking-timeouts-alt/)
- [`merge`](https://yobriefca.se/blog/2014/06/01/combining-and-controlling-channels-with-core-dot-asyncs-merge-and-mix/) `chan`s instead of manually using evals for example
- actual API interaction example (we're trying to get away from callback hell right? The cake in the icing). Use the tripple `go` blocks to search three apis (let's use Census!)
- more [visuals?](http://martintrojer.github.io/clojure/2013/07/07/coreasync-and-blocking-io)
- wrapping [core.async over cljs-ajax](https://github.com/vvvvalvalval/reagent-phonecat-tutorial/wiki/Step-11:-Asynchrony-and-error-management-with-core.async)
- wrapping [part 1](https://github.com/vvvvalvalval/reagent-phonecat-tutorial/wiki/Step-05:-talking-to-the-server)
- more [wrapping from another author](http://dimagog.github.io/blog/clojure/clojurescript/2013/07/12/making-http-requests-from-clojurescript-with-core.async/)
- using [tranducers with core.async](https://blog.venanti.us/using-transducers-with-core-async-clojurescript/)
- introducting [cljs-ajax](https://yogthos.net/posts/2013-04-09-Introducing-cljs-ajax.html)
-
- stuff for [cljs-ajax](https://lispcast.com/core-async-browser-motivation/)
-
