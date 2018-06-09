---
title: '`cljs.core.async` Basics'
created: '6-01-2018'
canonicalUrl: 'https://github.com/loganpowell/cljs-guides/blob/master/src/core-async/core-async-basics.md'
tags: ['cljs', 'core-async', 'clojurescript', 'go', 'chan']
license: 'public-domain'
---

# `cljs.core.async` Basics'

![Comparing Channels to Direct Communication](http://endot.org/notes/2014-02-14-core-async-clojure/compare.png)

## Dependencies

```clj
(ns core-async.core
  (:require  [cljs.core.async :refer [chan put! take! >! <! buffer dropping-buffer sliding-buffer timeout close! alts!]]
             [cljs.core.async :refer-macros [go go-loop alt!]])
  (:use [clojure.repl :only (source)]))
```

ANSII ART courtesy: http://patorjk.com/software/taag/#p=display&h=2&v=0&f=Bolger&t=Buffer

Convenience utilities (you'll want these handy at the top of the file for later, but we'll get to them then)


## Orders Utils


```clj
(defn take-logger [order]
  (prn (str "order taken: " order)))

(defn put-logger [boolean]
  (prn (str "order put? " boolean)))

(defn put!-order [channel order]
  (put! channel order put-logger))

(defn take!-order [channel]
  (take! channel take-logger))
```
---

#### *There comes a time in all good programs when components or subsystems must stop communicating directly to each other.*

### *Conveyance must become first class*.
-- [Rich Hickey: `core.async` début](https://github.com/matthiasn/talk-transcripts/blob/master/Hickey_Rich/CoreAsync.md)

---

Channels are the backbone of `core.async`. As in Clojure(Script), immutable data collections are the backbone, channels can be thought of as a special kind of data collection. A channel is similar in some ways to a vector (or an array in JavaScript). Like vectors, channels are collections that take values from one end (upstream) and discharge them from the other (downstream). However, unlike vectors (or arrays), channels ("queues") *only convey one value **at a time*** (asynchronous).

In my mind, I see a vector as a two-dimensional box, who's contents stretch the box along its x-axis. Whereas, with a queue (channel), which can only contain one value at any given time, its a three-dimensional box with new values stretching the box along the z axis (time). However, unlike vectors (or even Rx/observable streams)`core.async` channels can not only contain values within its "box" (buffer) - they can make operations seeking to put to or take from the queue wait in a line - outside the box - along that z-axis without the developer having to use callbacks to line them up! This provides a huge convenience for asynchronous programming. As we'll see in the following examples, these features of `core.async` abstract away the complexity of callbacks, allowing you to write asynchronous programs in a blissfully synchronous fashion.


`core.asyc` outperforms other async vehicles in a number of ways, but here are just a few highlights:

- **Write asynchronous code as if it was synchronous**
- They're [faster]((http://swannodette.github.io/2013/08/23/make-no-promises) than Promises.
- **Processes are first class**: you can use `core.async` channels and `go` blocks not only to pass data/values around, but pass also processes themselves! This feature enables you to take processes and de/compose them to do incredibly sophisticated things in just a few lines of code.
- **Treat channel i/o data as you would _any other_ collection in ClojureScript**. Enabling you to learn one set of operations (e.g., `map`, `filter`, etc... using [transducers](https://blog.venanti.us/using-transducers-with-core-async-clojurescript/)) to rule them all!

This last selling point was really the clincher for me. The idea of learning one set of operations that could be used across all my code, both asynchronous and synchronous, in a way that would improve my skills with the *language* (not just the library) seems more efficient IMHO.

Also, if you're coming to the light via JavaScript (React/RxJS), have a read of these two articles from the great [Bobby Schultz](https://twitter.com/puppybits):
- [ReactJS with CSP & core.async](https://medium.com/@puppybits/react-without-flux-a76236d1e1d)
- [RxJS is great. So why have I moved on?](https://medium.com/@puppybits/rxjs-is-great-so-why-have-i-moved-on-534c513e7af3) TLDR:
  - Do you like RxJS/Flux/Redux-type Observables? Got that.
  - How about Go and Es2016 awaits and generators? Got that and better with transducers.
  - Like immutable data? Got the best implementation around.
  - Like travel traveling, teleportation, telekinesis? That’s trivial in cljs.
  - Like having a great community with great libraries? Got that.
  - Great composability with just the right amount of encapsulation? Yep.
  - Writing code in whatever way is best for your data? ClojureScript is a full language.
  - Do you like not ripping out your entire data model when a new Flux comes along? We’ve unsubscribed from the flux of the month club long ago.

Don't get me wrong. This bliss comes at a cost. There's a non-trivial learning curve involved. But I hope, after going through - and importantly running - the examples herein, you'll have the fundamentals to prepare you and get you excited to use them.

Enough talk. Let's start.

For these examples, we'll use an analogy to help explain things. Let's say we're operating a sushi bar and we're starting small, just to handle taking some orders from customers...


## One-time Async Orders on a `chan` with `put!` and `take!`


Let's take a look at a slide about the channel "Service Provider Interface" (SPI) from Rich Hickey's [presentation](https://vimeo.com/100518968) and its relationship between other parts of your program (SPI = service provider interface):

![SPI](https://raw.githubusercontent.com/matthiasn/talk-transcripts/master/Hickey_Rich/ImplementationDetails/00.05.37.jpg)

We'll start with three parts of the SPI: `chan`, `put!` and `take!`

Let's take a look at a slide about the channel anatomy from Rich Hickey's [presentation](https://vimeo.com/100518968), temporarily disregarding the i/o relationships to focus on the inner workings of the `core.async` channel (our conveyor belt) alone:

![anatomy](https://github.com/matthiasn/talk-transcripts/raw/master/Hickey_Rich/ImplementationDetails/00.06.23.jpg)

```clj
(source chan)
(comment
  (defn chan
    "Creates a channel with an optional buffer, an optional transducer (like `(map f)`, `(filter p)` etc or a composition thereof), and an optional exception handler. If `buf-or-n` is a number, will create and use a fixed buffer of that size. If a transducer is supplied a buffer must be specified. `ex-handler` must be a fn of one argument - if an exception occurs during transformation it will be called with the thrown value as an argument, and any non-nil return value will be placed in the channel."
    ([] (chan nil))
    ([buf-or-n] (chan buf-or-n nil nil))
    ([buf-or-n xform] (chan buf-or-n xform nil))
    ([buf-or-n xform ex-handler]
     (let [buf-or-n (if (= buf-or-n 0)
                      nil
                      buf-or-n)]
       (when xform (assert buf-or-n "buffer must be supplied when transducer is"))
       (channels/chan (if (number? buf-or-n)
                        (buffer buf-or-n)
                        buf-or-n)
                      xform
                      ex-handler)))))
```

A `core.async` channel (`chan`) can take from 0 to 3 arguments. To start, we'll use a simple `chan`, which creates a bufferless channel with no value transformations or exception handlers,  which forces the channel to queue up any pending  put or take operations instead of allowing put operations to discharge values into the channel. This kind of channel is best used for simple transactions. Let's use the analogy of a phone order.

Create a basic channel
```clj
(def bufferless-chan (chan))

(put!
 bufferless-chan channel
 "Futo Maki" order
 #(prn (str "order put? " %))) ; callback
;;=> true <- pending put

(put!
 bufferless-chan channel
 "Vegan Spider" order
 #(prn (str "order put? " %))) ; callback
;;=> true <- pending put

(take!
  bufferless-chan channel
  #(prn (str "order taken: " %))) ; callback
```
take 1) =>
```
"order taken: Futo Maki"
"order put? true"
nil
```
take 2) =>
```
"order taken: Vegan Spider"
"order put? true"
nil
```
take 3) =>
```
nil <- pending take
```
eval put! function again =>
```
"order put? true"
"order taken: Vegan Spider"
true
```

Notice the organization of the callback logs for our orders. Let's dig into the source for `put!` and `take!` to see what's going on here:

```clj
(source put!)
(comment
  (defn put!
    "Asynchronously puts a `val` into `port`, calling `fn1` (if supplied) when complete. `nil` values are not allowed. Will throw if closed. If `on-caller?` (default `true`) is `true`, and the put is immediately accepted, will call `fn1` on calling thread.  Returns `nil`."
    ([port val
       (if-let [ret (impl/put! port val fhnop)]
         @ret
         true)])
    ([port val fn1] (put! port val fn1 true))
    ([port val fn1 on-caller?
       (if-let [retb (impl/put! port val (fn-handler fn1))]
         (let [ret @retb]
           (if on-caller?
             (fn1 ret)
             (dispatch/run #(fn1 ret)))
           ret)
         true)])))
```
```clj
(source take!)
(comment
 (defn take!
   "Asynchronously takes a `val` from `port`, passing to `fn1`. Will pass `nil` if closed. If `on-caller?` (default `true`) is `true`, and value is immediately available, will call `fn1` on calling thread. Returns `nil.`"
   ([port fn1] (take! port fn1 true))
   ([port fn1 on-caller?
      (let [ret (impl/take! port (fn-handler fn1))]
        (when ret
          (let [val @ret]
            (if on-caller?
              (fn1 val)
              (dispatch/run #(fn1 val)))))
        nil)])))
```

The same callback behavior is present in both async operations. If `on-caller?` (default `true`) is `true`, and value is immediately accepted (for put!) or available (for take!), will call `fn1` on calling thread.

When a `put!` is matched with a pending `take!` (customer calls -> cook answers phone) , the `take!` callback is triggered first ("Thanks for calling Conveyor Sushi! May I take your order?" -> the order is conveyed) and `nil` is returned (confirming the order went through on `take!`).  Conversely - when a `take!` is met with a pending `put!`,  the `put!` callback is triggered first (the cook calls customer -> customer answers phone "Hello?" -> the order is conveyed) and `true` is returned (confirming the order went through on `put!`).

This explains the callback behavior of our puts and takes above. If we want to change the behavior of these callbacks, we can set the `on-caller` parameter to `false`.

Now that we know how/when these callbacks are triggered, let's create some convenience utilities to abstract them away. We'll use these throughout the remainder of our examples.


## Orders Utils


Create some logging callbacks to include with our put and take operations:

```clj
(defn take-logger [order]
  (prn (str "order taken: " order)))

(defn put-logger [boolean]
  (prn (str "order put? " boolean)))

Then we'll create shortcut put and take functions which are given a channel and the logging callback
(defn put!-order [channel order]
  (put! channel order put-logger))

(defn take!-order [channel]
  (take! channel take-logger))
```


## Robo Orders Overflow

```clj
(def bufferless-chan (chan))
```
What happens if we got one of those infamous robo-dialers, just spamming away at the phone line trying to sell us timeshares? Well, with our simple `chan` our line would overflow.
```clj
(defn bot-orders [channel order]
  (dotimes [x 1030]
    (put!-order channel order)))

(bot-orders bufferless-chan "Sushi!")
```
```
;;=> Error: Assert failed: No more than 1024 pending puts are allowed on a single channel. Consider using a windowed buffer. (< (.-length puts) impl/MAX-QUEUE-SIZE)
```

The creators of `core.async` thought it prudent (and it seems reasonable to me) for channels to be limited in how many pending put/take operations are allowed to be queued (max = 1024 pending operations). So, how might we deal with this kind of traffic? One way is with a buffered channel.


## Robo Orders with a Fixed Buffer

```clj
(source buffer)
(comment
  (defn buffer
    "Returns a fixed buffer of size `n`. When full, puts will block/park."
    [n]
    (buffers/fixed-buffer n)))
```

There are two ways to create a channel with a fixed buffer. One is by explicitly using the `buffer` funcction. The other is just to pass an integer as an argument to a basic channel like so:
```clj
(def fixed-chan (chan 10)) buffer = 10 values
```
eval at will
```clj
(bot-orders fixed-chan "Sushi!")
```
```
;=> "order put? true"
;=> "order put? true"
;=> "order put? true"
...7 more
nil
```

We can see that 10 of our puts were immediately accepted by the channel (causing their callbacks to be fired immediately here), while the rest will have to wait in the puts queue for future (async) takes. We were able to do this in this specific case because we received 1030 order and had a buffer that stored 10 values, allowing those 10 puts to be handled and commpleted (1030 puts - 10 puts consumed by buffer = 1020 pending puts =< 1024 max.).

You can think of a fixed buffer like a voicemail service for our sushi orders. Or - if you prefer - an online ordering system that saves orders (in this case with a storage capacity of 10 orders). Instead of forcing all customers to wait until there's a match on the other side, a buffer allows the first 10 orders to be stored "inside" the channel. This would allow those first 10 customers to put in their order and get back to their lives. Those lucky bastards.

eval at will:
```clj
(take!-order fixed-chan)
```
takes 1 - 1020) =>
```
"order taken: Sushi!"
"order put? true"
nil
```
take 1021) =>
```
"order taken: Sushi!"
nil
```
Last 10 puts callbacks have already fired.

Now this works, but let's say we have a really aggressive robo-dialer or we're a franchise with orders coming in from around the world! The International House of Sushi! Sounds... terrible actually, but - for illustrative purposes let's do it.

So we can keep track of what's going on with the channel in the following examples, let's create a new `put!-n-order` function to include an order number.
```clj
(defn put!-n-order [channel order n]
  (put! channel (str "#: " n " order: " order) put-logger))

(defn IHOS-orders [channel order]
  (dotimes [x 2100] lots-o'-orders
    (put!-n-order channel order x)))
```
refresh (re-eval) our fixed-chan
```clj
(def fixed-chan (chan 10)) ; buffer = 10 put values

(IHOS-orders fixed-chan "Nigiri!")
```
;;=>
```
"order put? true"
"order put? true"
"order put? true"
"order put? true"
"order put? true"
"order put? true"
"order put? true"
"order put? true"
"order put? true"
"order put? true"
...
Error: Assert failed: No more than 1024 pending puts are allowed on a single channel. Consider using a windowed buffer. (< (.-length puts) impl/MAX-QUEUE-SIZE) ...
```

物の哀れ What's happened is we've hit the limit of pending operations to our channel minus the capacity of our buffer (2100 puts - 10 buffer = 2090 pending puts > 1024 max.).

```clj
(take!-order fixed-chan)
```
;=>
```
"order taken: #: 0 order: Nigiri!"
"order put? true"
...
```

Ok, so we can get to first 10 of the orders in the buffer and the others that didn't overflow the pending puts queue, but - with the rest - we're in the same tsukemono (Japanese pickle) we were before. Our charming little inbox, which may have served us fine before becoming the biggest sushi chain on the planet, is full **and we get an error thrown**, which may create havoc in our system.

What might we do now? Well, if we didn't want to lose any orders, we could increase the size of our fixed buffer. That might be what we want. Or, we could use a "windowed buffer", which will drop some of the orders. There are two types of windowed buffers: a `sliding-buffer` and a `dropping-buffer`.


## Handling Orders Deluge with a `sliding-buffer` (Drop Oldest Puts)


"Windowed" buffers serve as contracts or policies for how you handle incoming data. In our case, dropping orders may not seem the best policy, but lets entertain what happens when we do. First, let's use a `sliding-buffer`, which drops the oldest puts:

```clj
(source sliding-buffer)
(comment
  (defn sliding-buffer)
  "Returns a `buffer` of size `n`. When full, puts will complete, and be buffered, but oldest elements in buffer will be dropped (not transferred)."
  [n]
  (buffers/sliding-buffer n))

(def slide-chan (chan (sliding-buffer 10))) buffer = 10 put values
```
Warning: Big log (and I don't mean the song by Robert Plant. That would be cool though....) ahead!
```clj
(IHOS-orders slide-chan "Sashimi")
```
```
"order put? true"
"order put? true"
... **2088 more**
```
```clj
(take!-order slide-chan)
```
take 1) =>
```
"order taken: #: 2090 order: Nigiri!"
nil
```
take 2) =>
```
"order taken: #: 2091 order: Nigiri!"
nil
...
```
take 10) =>
```
"order taken: #: 2099 order: Nigiri!"
nil
```
take 11) =>  nil

*Note: The reason we got 2099 instead of 2100 is due to the index starting at 0*

Now, we don't get that pesky error thrown, we have the last 10 orders, which were stored in the `sliding-buffer`, **but** all the other orders are thrown away. In some cases, this may be what you want. E.g., for streams of data where the latest/newest values are the important ones. Say we have a display in each of our restaurants showing the latest sushi orders, so as to give dine-in patrons that "I want what they're having" syndrome.

A different policy we might want to build into our incoming data source is to drop the latest data upon meeting some threshold. We can do that with a `dropping-buffer`.


## Handling Traffic with a `dropping-buffer` (Drop Latest Puts)

```clj
(source dropping-buffer)
(comment
  (defn dropping-buffer
    "Returns a buffer of size `n`. When full, puts will complete but val will be dropped (no transfer)."
    [n]
    (buffers/dropping-buffer n)))

(def drop-chan (chan (dropping-buffer 10)))

(IHOS-orders drop-chan "Tofu Katsu")
```
```
"order put? true"
"order put? true"
... **2088 more**
```
```clj
(take!-order drop-chan)
```
take 1) =>
```
"order taken: #: 0 order: Tofu Katsu"
nil
```
take 2) =>
```
"order taken: #: 1 order: Tofu Katsu"
nil
...
```
take 10) =>
```
"order taken: #: 9 order: Tofu Katsu"
```
Now we are keeping the oldest data. Once our buffer is full (10 values), any remaining puts will be completed (an their callbacks fired if supplied), but only the first 10 values will be kept. The rest are dropped. When dealing with upstream (putting) data source, sometimes this behavior is useful.

For our sushi restaurant, this is like having a special bar section called "The Roulette Room" (Tagline: *"That's just how we roll."™*). This isn't your run of the mill bar seating room though. It's got a glow in the dark jellyfish aquarium and celebrity chefs from around the world, so people line up to get a spot. But there's a catch. If a spot is open you can take it, but if not, you are sent away and you lose your place in line. While you can get back in line (make another put), you can't wait ("park") in line (that would be rude‡ to the seated guests). In our example above, all pending and future puts are dispatched as completed, but their values are dropped until room opens up in the buffer at which time new puts will be accepted.

While this works for The Roulette Room, this just won't do for our ordering system. We don't want to drop any orders (that would be rude‡, not to mention bad for business). So, how might we accommodate our deluge of orders without dropping any?

*‡ There are 16 words for "rude" in Japanese*


## Burst Orders with (`go`) Backpressure Upstream (`>!`) and Async Downstream (`take!`)


"One of the ways you can take care of (not dropping puts) is to implement backpressure by using a blocking construct on the entry point." - RH

```clj
(source go)
(comment
 (defmacro go
  "Asynchronously executes the `body`, returning immediately to the calling thread. Additionally, any visible calls to `<!`, `>!` and `alt!/alts!` channel operations within the body will block (if necessary) by 'parking' the calling thread rather than tying up an OS thread (or the only JS thread when in ClojureScript). Upon completion of the operation, the `body` will be resumed.

  Returns a channel which will receive the result of the `body` when completed"
  [& body]
  `(let [c# (cljs.core.async/chan 1)]
     (cljs.core.async.impl.dispatch/run
      (fn []
        (let [f# ~(ioc/state-machine body 1 &env ioc/async-custom-terminators)
              state# (-> (f#)
                         (ioc/aset-all! cljs.core.async.impl.ioc-helpers/USER-START-IDX c#))]
          (cljs.core.async.impl.ioc-helpers/run-state-machine-wrapped state#))))
     c#)))
```

This is *where* the magic happens. `go` blocks provide an environment where we can escape callback hell. As [Stuart Halloway](https://twitter.com/stuarthalloway?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor) explains in his [great talk](https://www.infoq.com/presentations/core-async) about `core.async` (paraphrasing):

`go` is a first class process abstraction (can be passed as a value to other processes) that will either use real threads (if available) or use "magic-callback-hell-behind-the-scenes-threads" giving users who don't have real threads to work with (i.e., ClojureScript/JavaScript users) the ability to write code as if they did. `go` uses a state-machine with "parking" to enable this.

**The way we pass work done within a `go` block to another part of our program (or vice-versa) is through channels.** and the way we put values into a channel when inside a go block is with the "parking" put syntax `>!`

```clj
(source >!)
(comment
  (defn >!
    "puts a `val` into `port`. nil values are not allowed. Must be called inside a `(go ...)` block. Will park if no buffer space is available. Returns `true` unless `port` is already closed."
    [port val]
    (throw (js/Error. ">! used not in (go ...) block"))))
```

Notice that the "parking" put function (`>!`) doesn't have a callback argument (as does `put!`). Since `go` will allow us to write our asynchronous code in a synchronous style, we won't need them. Asynchronous callback communication between functions to convey data over time are a thing of the past and you can think of data flowing through the operations to/from channels withing a `go` block as being available synchronously. However, for illustrative purposes, we want our logs, so we have to move our `put-logger` outside the channel operation to get them.

```clj
(defn backpressured-orders [channel order]
  (go
    (dotimes [x 2100] increase number of bot orders
      (put-logger (>! channel (str "#: " x " order: " order))))))

(def burst-chan (chan 50))
```

Buffers with backpressure not only allow you handle large data feeds, they also allow you to balance put (upstream) and take (downstream) data sources, which might flow inconsistently. For example, if our sushi chefs get the online orders only when they have time to do 50 orders (in "bursts" of 50), a fixed buffer of 50 with backpressure upstream would allow them to take their capacity and then open that buffer for the next 50 to fill up for the next run. Let's see this in action.

```clj
(defn burst-take! [channel]
  (dotimes [x 50] increase number of bot orders
    (take!-order channel)))

(backpressured-orders burst-chan "Umami Tamago")
```
;;=>
```
"order put? true"
"order put? true"
... 48 more
```
```clj
(burst-take! burst-chan)
```
take 1) =>
```
"order taken: #: 0 order: Umami Tamago"
...
"order taken: #: 49 order: Umami Tamago"
"order put? true"
"order put? true"
... 48 more
```
take 2) =>
```
"order taken: #: 50 order: Umami Tamago"
...
"order taken: #: 99 order: Umami Tamago"
"order put? true"
"order put? true"
... 48 more
```

As you can see, upon evaluation of `backpressured-orders` we get 50 orders put into the fixed buffer. Then - with each evaluation of `burst-take!` - we get a set of 50 takes (exhausing the buffer) and 50 more puts, which fill up the buffer again.

Also notice, that we we're significantly over the queue limit on the other side of our buffer. However, we didn't get the `(MAX-QUEUE-SIZE)` Error as we did in the case using `put!`.

What allowed us to queue up the remaining pending orders (after our buffer 50 filled up) - even though we're over the 1024 allowance for pending puts - is backpressure. By wraping our orders' puts in a `(go...)` block and changing the `put!` to its corresponding "parking" syntax (`>!`) we've spun up a thread (in JavaScript an ["Inversion of Control" state-machine](http://hueypetersen.com/posts/2013/08/02/the-state-machines-of-core-async/)) that conducts some "magic-callback-hell-behind-the-scenes" to register and keep track of the pending puts without overflowing the channel. In effect, we are able to postpone put operations that would cause the channel's queue to overflow and only convey those for which there are active takes and/or room in a buffer.

Elaboration: Backpressure prevents putting operations from getting registered to the handlers' queu in the channel. Instead of using the channel's puts queu, the "blocking" `(go...)` creates a state machine that keeps track of the state of the `dotimes` function (in this case) and effectively pauses it when there's no availability for puts in the channel. This allows upstream "producers" of data to govern their rate of production according to the capacity the consumers downstream.


## Burst Orders with Backpressure Upstream (`>!`), "Parking" Downstream (`<!`)


We get an immaterial difference when using "blocking" syntax downstream
```clj
(source <!)
(comment
  (defn <!
    "takes a val from `port`. Must be called inside a `(go ...)` block. Will return nil if closed. Will park if nothing is available. Returns `true` unless port is already closed"
    [port]
    (throw (js/Error. "<! used not in (go ...) block"))))

(def burst-chan (chan 50))

(defn burst-<! [channel]
  (go
    (dotimes [x 50] increase number of bot orders
      (take-logger (<! channel)))))

(backpressured-orders burst-chan "Umami Tamago")
```
same as before
```clj
(burst-<! burst-chan)
```
same as before


## Burst Orders with Async Upstream (`put!`) Downstream "Parking" (`<!`)


However, if we were to reverse the backpressure, i.e., use the asynchronous putting syntax (`put!`) upstream with the "parking" take syntax (`<!`) downstream...
```clj
(def burst-chan (chan 50))

(IHOS-orders burst-chan "Miso Soup!")
```
Old faithful:
```
Error: Assert failed: No more than 1024 pending puts are allowed on a single channel. Consider using a windowed buffer. (< (.-length puts) impl/MAX-QUEUE-SIZE)
```
```clj
(burst-<! burst-chan)
```
```
No bueno
```

The lesson here is that **if you want to "respect backpressure", the parking syntax `(go ...(>! ...))` *must be implemented upstream* (from the producer/putting end) of the channel.**

Now, no orders will ever be dropped. But, what if we can't handle all those orders? We don't want to drop orders. We also don't want customers to place an order if there's no hope of them ever getting filled. So, what do we do? Well, there are lots of ways we can control the behavior of our channels, but let's start with a few fundamental control structures.

Now that we know how to handle deluges of upstream data (i.e., from puts) and have gotten acquainted with the limits of channels pending operations queues, we can reduce the number of puts and takes (and logging) to focus on controlling the qualities of behavior (rather than quantities of traffic) of our channels.


## Shutdown Orders with `close!`


```clj
(source close!)
(comment
 (defn close!
   "Closes a channel. The channel will no longer accept any puts (they will be ignored). Data in the channel remains available for taking, until exhausted, after which takes will return nil. If there are any pending takes, they will be dispatched with nil. Closing a closed channel is a no-op. Returns nil. Logically closing happens after all puts have been delivered. Therefore, any blocked or parked puts will remain blocked/parked until a taker releases them."
   ([port]
    (impl/close! port))))
```

The `close!` function provides a way to shut a channel down from the "outside". By passing a channel into the `close!` function, all following puts will be rejected (returning false), but any values in a buffer will be available for taking as well as any parked or pending puts sent to the channel before `close!`.

Let's first send in some puts to a channel with a small buffer of a sufficient quantity, which will convey orders into the buffer as well as queue up some pending puts for the channel.
```clj
(defn max-order [channel order]
  (go
    (dotimes [x 12]
      (put-logger (>! channel (str "#: " x " order: " order))))
    (close! channel)))

(def capacity (chan 5))

(defn take!-til-closed [channel]
  (dotimes [x 5]
    (take!-order channel)))

(max-order capacity "Wildcard")
```
;;=>
```
"order put? true"
"order put? true"
"order put? true"
"order put? true"
"order put? true"
```
```clj
(take!-til-closed capacity)
```
take 1) =>
```
"order taken: #: 0 order: Wildcard"
...
"order put? true"
...
nil
```
take 2) =>
```
"order taken: #: 5 order: Wildcard"
...
"order put? true"
...
nil
```
take 3) =>
```
"order taken: #: 10 order: Wildcard"
"order taken: #: 11 order: Wildcard"
"order taken: "
"order taken: "
"order taken: "
nil
```

After 12 puts, we closed the channel. Thus, 5 orders went into the fixed buffer and 7 were queued up. None were lost. However, if we try to put more orders into the closed channel...

```clj
(put! capacity "Overflow" put-logger)
```
;=>
```
"order put? false"
false
```

This is a simple way of controling how many orders we are prepared to handle. For a fledgling sushi bar, this might be sufficient. Let's consider some more sophisticated ways of workign with channels.


## Instituting a closing time with `alts!` and `timeout`


One of the most important control structures in `core.async`: `alts!`

> Alt is actually the tricky operation. Almost everything that's built into this channel implementation is there to support alt because alt is the hard part. - [RH](https://github.com/matthiasn/talk-transcripts/blob/master/Hickey_Rich/ImplementationDetails.md)

```clj
(source alts!)
(comment
  (defn alts!
    "Completes at most one of several channel operations. Must be called inside a `(go ...) block`. `ports` is a vector of channel endpoints, which can be either a channel to take from or a vector of `[channel-to-put-to val-to-put]`, in any combination. Takes will be made as if by `<!`, and puts will be made as if by `>!`. Unless the `:priority` option is `true`, if more than one port operation is ready a non-deterministic choice will be made. If no operation is ready and a `:default` value is supplied, `[default-val :default]` will be returned, otherwise `alts!` will park until the first operation to become ready completes. Returns `[val port]` of the completed operation, where `val` is the value taken for takes, and a boolean (`true` unless already closed, as per `put!`) for puts.

    Supported options: (`opts` are passed as `:key val`)

    `:default val` - the value to use if none of the operations are immediately ready
    `:priority true` - (default nil) when `true`, the operations will be tried in order.

    Note: there is no guarantee that the port exps or val exprs will be used, nor in what order should they be, so they should not be depended upon for side effects."

    [ports & {:as opts}]
    (throw (js/Error. "alts! used not in (go ...) block"))))
```
```clj
(source timeout)
(comment
  (defn timeout
    "Returns a channel that will close after msecs"
    [msecs]
    (timers/timeout msecs)))
```

Let's make our example a little more interesting. Say we have three bars at each of our sushi restaurants, each taking orders in (simultaneously!) at different intervals (some are more popular than others). Let's also say that our restaurant stops taking orders after 3000 milliseconds of operation time ("Fastest Sushi on the Planet"™).

```clj
(defn timeout-chan [channel]
  (let [closer (timeout 3000)]
    (go (while true (<! (timeout 250)) (>! channel "Main Bar")))
    (go (while true (<! (timeout 500)) (>! channel "Online Order")))
    (go (while true (<! (timeout 750)) (>! channel "Roulette Room")))
    (go-loop [_ []]
      (let [[val ch] (alts! [channel closer])] <- `alts!`
        (cond
          (= ch closer) (do
                          (close! channel)
                          (.log js/console (str "No more orders. Domo arigatogozaimashita.")))
          :else
          (recur (.log js/console (str "Order up: " (<! channel)))))))))

(def capacity (chan 5))

(timeout-chan capacity)
```
;;=>
```
Order up: Online Order
Order up: Roulette Room
Order up: Online Order
Order up: Main Bar
Order up: Online Order
Order up: Main Bar
Order up: Main Bar
Order up: Main Bar
Order up: Main Bar
Order up: Roulette Room
No more orders. Domo Arigatogozaimashita.
```

We used `timeout` above to terminate our process. It's important to note that while `timeout` does return a channel, that the channel is only there to signal you when the given number of milliseconds has elapsed and it signals that by giving you a closed `chan`. This is one method for properly terminating a looping `go`: Stop it taking from or putting to the target `chan` by switching to a closed channel (via `alts!`).

But more importantly...

# We just spun up three. independent. synchronous. threads. Yeah, we just did that in three lines of code.

This is not a section. I just thought an H1 was apropos.

Now we can drain the pending orders from the buffer and let our cooks get to more important things... Yamazaki.

```clj
(take! capacity take-logger)
```
```
;;=> "order taken: Online Order"
;;=> "order taken: "
```
And we're done!

This has been a whirlwind tour of the basics of `core.async`. I hope - in future articles to go in more depth and cover even more exciting things you can do with it.


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

- If you haven't already, take a gander at the clojure.core.async ([API Reference](https://clojure.github.io/core.async/) or [docs](https://clojuredocs.org/clojure.core.async)), do so!
- Check out this [blog post](https://medium.com/@hlship/some-observations-about-clojure-core-async-dc0ad44b8e2f) from [Howard M. Lewis](https://twitter.com/hlship) (the core contributor of a fantastic [Clojure GraphQL Server](https://github.com/walmartlabs/lacinia/graphs/contributors)) covering what to think about when spinning up threads.
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

### Examples of `core.async`

Check out Some Advanced Examples of `core.async`in Action in Actual Projects

1) [NetRunner: Game](https://github.com/mtgred/netrunner/search?q=core.async&unscoped_q=core.async)
2) [Goya: Pixel Editor](https://github.com/jackschaedler/goya/search?q=core.async&unscoped_q=core.async)
3) [Wordsmith Markdown Editor](https://github.com/yuhama/wordsmith/blob/848976002c8a0830e7ee85a352530f610d112389/src/wordsmith/core.cljs)

### For the theorist reader:

Read more about the concepts behind `core.async`: [Communicating Sequential Processes: CSP](https://en.wikipedia.org/wiki/Communicating_sequential_processes)).
