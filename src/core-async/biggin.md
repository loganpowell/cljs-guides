<!-- ---
title: 'Getting Started with `cljs.core.async`'
created: '6-01-2018'
canonicalUrl: 'https://github.com/loganpowell/cljs-guides/blob/master/src/core-async/core-async-intro.md'
tags: ['cljs', 'core-async', 'clojurescript', 'go', 'chan']
license: 'public-domain'
--- -->

## Scene, Props and Characters:
- Customers: puts in orders, takes out food
- Cooks: puts in food, takes out orders
- The best Sushi restaurant in the city, but also known for showing prferential treatment to their in-house customers over phone ordering or take out customers.
- traditional bars: a counter top between the cooks and the customers (bufferless channel)
- conveyor bars: a buffered channel
- phone orders taken by cooks when not busy:

## Progression
> show a success and failure case at each step and add features to solve our problems along the way

- `put!` => `chan`
- success: (slow time, cook's waiting (parked) for order):
- fail:  (no takers/buffer): Phone order => We want sushi, so we try phone ordering. Our call isn't answered (they're busy), since no backpressure (there's no answering machine or online option), our order isn't registered. We'd have to keep calling, but we're hungry, so we decide to go to the restaurant and try to order takeout from there.
-  `>!` => `chan`
- success: since we get to stand in line (due to backpreassure via `go` block), we get our order in (FIFO), but!
- fail: `take!` <= `chan` (no food coming into the takeaway counter) Take away (order at the restaurant ) => The hostess tells us that takeaway orders are only catered to (asynchronously) when the cooks are free (they go to the takeaway stand and see if anyone is standing there), so she recommends we just eat at the restaurant.
- `take!` <= `chan`  (no buffer) (a takeaway counter, you go up, if there's a cook there, you get sushi)
- success: You're in luck, it's slow and the cook is waiting to put (parked), you grab  what he givs you and go!
- fail: Cooks are busy with their sit-down clientelle. You go up to the bar and no one's there, so you sit back down (can't park there and wait for a cook). So, you decide to join the sit-down clientelle...
-  `<!` <= `chan` (no buffer)
- success: sit at a small counter bar and put order in (`>!` = parks) and wait for food (parking `<!`) FIFO `chan`
- fail: walk up to the bar and it's packed! (lots of parked puts/takes), we don't want to wait forever, what can we do? The hostess tells you to try their new "conveyor sushi"
- `take!` <= `chan` (with `buffer`):
- success:  sit at the conveyor belt and just take at will (not placing an order)
- fail:  

## Interogatives and Analogies (Menu)
- Analogy told from the perspective of the customer, unless otherwise noted
- Features listed in order of appearance in story

Feature          | Mac/Fnc | Analogy | Example
---              | :---:   | ---     | ---
`put!`           | fnc     | *calling* for sushi (no backpressure) depends on cooks' availability. For backpressure, either wrap in a `go` (wait/**park** at the sushi bar with the cook) or order at a conveyor (buffer) | `(defn hostess-phone-order [order line] (str (put! line order #(.log js/console %))` = nobody's picking up the phone, so the order is dropped. Let's just go to the restaurant.
`take!`          | fnc     | *trying to get sushi as available* for sushi (no backpressure) depends on food availability |
`>!`             | fnc     | *ordering* sushi at the restaurant |
`<!`             | fnc     | *waiting* for sushi at the restaurant |
`go`             | mac     | like eating at the sushi bar (fifo/fcfs = enables synchronous syntax and back-pressure) |
`go-loop`        | mac     | | a repeating sequence of orders (puts) or orders-in (takes)
`chan`           | fnc     | A vehicle that serves to coordinate the plate (`nil`) of food from the cook to the customer. Unbuffered = counter, buffered = on a [conveyor](https://en.wikipedia.org/wiki/Conveyor_belt_sushi) with the order |
"handlers"       | fnc     | Used *when you have to wait (park)* (unless `oncaller?` set to `false`). As a customer: 1) If at a coveyor (buffered) for orders (puts), a signal you get when your order was put on the conveyor or 2) if unbuffered, a signal that it was received by the cook. |
`timeout`        | fnc     | a channel (conveyor) that just closes itself after n mlsecs |
`close!`         | fnc     | a "closed" sign on the counter/conveyor that ignores new puts (orders). Food on the conveyor (buffer) is allowed to be taken. If nothing's on the conveyor (empty/un buffer(ed)), seated customers (pending takes) are told to go home (`nil` = empty plates instead of food) |
`buffer`         | fnc     | the length of the conveyor belt |
`sliding-buffer` | fnc     | Cook: if the conveyor gets full, they throw away the oldest food |
`dropping-buffer`| fnc     | Cook: if the conveyor gets full, they don't accept any new orders |
`alt!`           | mac     | @ mix of `alts!` with `cond` => static switch (macro = known at compile time) |
`alts!`          | fnc     | a "valve/switch" in the conveyor (alt* are the only ops that works on both sides of the channel) => dynamic switch (used at runtime) |


# `core.async`: the Hottest Sushi Bar in the City.

## Dependencies

### Your Namespace
```clj
(ns core-async.core
  (:require  [cljs.core.async :refer [>! <! chan put! take! timeout close! alts! dropping-buffer sliding-buffer]]
             [cljs.core.async :refer-macros [go go-loop alt!]]))
```

## Code

Working examples in [core.cljs](./core.cljs)


# Putting and Taking Orders

Let's create some shortcut utilities for logging out when orders where placed and received:

```clj
(defn take-logger [val]
  (prn (str "order taken: " val)))

(defn put-logger [val]
  (prn (str "order in: " val)))
```


### Customers Put, Cooks Take Orders (No Buffer)
Scenario | `take!`| `<!`
---      | :---:  | :---:
`put!`   | **1**  | **2**         
`>!`     | **3**  | **4**

## 1: Using Callbacks for Both Puts and Takes

##### Using `put!` with `take!`

---
### [`put!`](https://clojuredocs.org/clojure.core.async/put!) Basics

Options:
- `(put! port val)`
- `(put! port val fn1)`
- `(put! port val fn1 on-caller?)`

Usage:
- Asynchronously puts a `val` into `port`, calling `fn1` (if supplied) when complete, passing `false` if `port` is already closed.
- Returns a `true` unless `port` is already closed
- `nil` values are not allowed.
- If `on-caller?` (default `true`) is `true`, and the put is immediately accepted, will call `fn1` on calling thread.  

---





For this exercise, we'll use only the "non-parking" `put!` and `take!` functions with a "bufferless" `chan` to convey our orders between customers and cooks:

```clj
(defn put!-phone-order [channel order]
  (put! channel order put-logger))

(defn take!-phone-order [channel]
  (take! channel take-logger))

(def bufferless-orders-chan (chan))
```

Then add some orders and/or take some orders from the `bufferless-orders-chan`:

```clj
;; eval at will:
(put!-phone-order bufferless-orders-chan "Futo Maki")
(put!-phone-order bufferless-orders-chan "Vegan Spider")
;; eval at will:
(take!-phone-order bufferless-orders-chan)
```

### Customers Put, Cooks Take Orders (With Buffer)
Scenario | `take!`| `<!`
---      | :---:  | :---:
`put!`   | **1**  | **2**         
`>!`     | **3**  | **4**

# Putting and Taking Sushi

### Cooks Put, Customers Take Sushi (Transducers without Buffer)
Scenario | `take!`| `<!`
---      | :---:  | :---:
`put!`   | **1**  | **2**         
`>!`     | **3**  | **4**

### Cooks Put, Customers Take Sushi (Transducers with Windowed Buffer)
Scenario | `take!`| `<!`
---      | :---:  | :---:
`put!`   | **1**  | **2**         
`>!`     | **3**  | **4**



- Why?
  - decouple processes from each other (modularity of functionality)
  - use transducers (single set of collection manipulation operations across async and sync collections)
- What?
  - Macros:
  - go
  - go-loop
  - alt!
  - Functions
  - chan
  - "parking"/blocking (implements back-pressure) operations
  - >!
  - <!
  - non-blocking (geared for integration with functionality outside   of go blocks)
  - take!
  - put!
- How?
- When?
- Where?

![](https://media.giphy.com/media/l1JojmmBMELYFKJc4/giphy.gif)
![](https://cdn.dribbble.com/users/921277/screenshots/3668954/sushi.gif)
![](https://answers.flexsim.com/storage/attachments/491-slugmerge.gif)
![](https://i1.wp.com/www.eyedesyn.com/wp-content/uploads/2015/10/sushi_flip1.gif)
![](http://www.orientalmotor.com/images/applications/a_conv_strt_stp.gif)
![](https://d.wattpad.com/story_parts/506836445/images/150006aa7fdc9556517010073673.gif)
![](https://i.pinimg.com/originals/17/48/7c/17487c667f8c64c517227edb3b2392ad.gif)
![]()
![]()
![]()
![]()
![]()
![]()
![]()
![]()
