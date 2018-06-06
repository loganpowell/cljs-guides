(ns core-async.core
  (:require  [cljs.core.async :refer [>! <! chan put! take! timeout close! alts! dropping-buffer sliding-buffer]]
             [cljs.core.async :refer-macros [go go-loop alt!]])
  (:use [clojure.repl :only (source)]))


; ANSII ART courtesy: http://patorjk.com/software/taag/#p=display&h=2&v=0&f=Bolger&t=Buffer

; ===============================
; Orders Utils
; ===============================

; It's important to note that you will only get these Callbacks
; called if - e.g. - the put is not immediately consumed
; by either a pending take (or vice-versa) or a buffer (tbd)

(defn take-logger [val]
  (prn (str "order taken: " val)))

(defn put-logger [val]
  (prn (str "order in: " val)))


; ===============================
; One-time orders with put! and take!
; ===============================

(def bufferless-orders-chan (chan))

(defn put!-phone-order [channel order]
  (put! channel order put-logger))

(defn take!-phone-order [channel]
  (take! channel take-logger))

(put!-phone-order bufferless-orders-chan "Futo Maki")
(put!-phone-order bufferless-orders-chan "Vegan Spider")
; eval at will
(take!-phone-order bufferless-orders-chan)

; ===============================
; Bot orders
; ===============================

(defn bot-orders [channel order]
  (dotimes [x 1100]
    (put! channel order)))

(bot-orders bufferless-orders-chan "Sushi!")
;;=> Error: Assert failed: No more than 1024 pending puts are allowed on a single channel. Consider using a windowed buffer. (< (.-length puts) impl/MAX-QUEUE-SIZE)



; 888~~\             88~\   88~\
; 888   | 888  888 _888__ _888__  e88~~8e  888-~\  d88~\
; 888 _/  888  888  888    888   d888  88b 888    C888
; 888  \  888  888  888    888   8888__888 888     Y88b
; 888   | 888  888  888    888   Y888    , 888      888D
; 888__/  "88_-888  888    888    "88___/  888    \_88P

; ===============================
; Bot orders with fixed buffer
; ===============================

(def orders-chan-fixed (chan 1000)) ; buffer = 1000 put values

(defn bot-orders [channel order]
  (dotimes [x 1100] ; 1100 puts - 1000 buffer = 100 pending puts
    (put! channel order)))

(bot-orders orders-chan-fixed "Sushi!")

(take!-phone-order orders-chan-fixed)
;;=> works, but...

(defn bot-orders [channel order]
  (dotimes [x 2100] ; increase number of bot orders
    (put! channel order)))

; refresh (re-eval) our orders-chan-fixed
; re-eval (bot-orders ...)
;;=> Error: Assert failed: No more than 1024 pending puts are allowed on a single channel. Consider using a windowed buffer. (< (.-length puts) impl/MAX-QUEUE-SIZE)

; ===============================
; Bot orders with sliding-buffer (drop oldest)
; ===============================

; let's alter the code in two ways:
; 1) add an order number to the order
; 2) let's use a sliding-buffer instead of a fixed one

(defn bot-orders-numbered [channel order]
  (dotimes [x 2100] ; increase number of bot orders
    (put! channel (str "#: " x " order: " order))))

(def orders-chan-slide (chan (sliding-buffer 2))) ; buffer = 2 put values

(bot-orders-numbered orders-chan-slide "Sushi!")

(take!-phone-order orders-chan-slide)
; take 1) => "order taken: #: 2098 order: Sushi!" nil
; take 2) => "order taken: #: 2099 order: Sushi!" nil
; take 3) =>  nil
; The reason we got 2099 instead of 2100 is due to the index of `x` starting at 0

; ===============================
; Bot orders with dropping-buffer (drop latest)
; ===============================

(def orders-chan-drop (chan (dropping-buffer 2))) ; buffer = 2 put values

(bot-orders-numbered orders-chan-drop "Sushi!")

(take!-phone-order orders-chan-drop)
; take 1) => "order taken: #: 0 order: Sushi!" nil
; take 2) => "order taken: #: 1 order: Sushi!" nil
; take 3) =>  nil

; When dealing with upstream (putting) data source, sometimes this behavior is
; useful. Like when you're getting bot'ed. We can say we should never expect
; 2000 orders coming in via our online ordering system and dropping the latest
; might be a simple way to ensure your system doesn't get backed up
; by evil sushi-hatin' hackers.


; Buffers not only allow you to drop potentially out-dated or overzealous incomming
; data, but also allow you to balance put (upstream) and take (downstream) data
; sources, which might flow inconsistently. For example, if our sushi chefs
; get the online orders only when they have time to do, say 50 orders
; (in "bursts" of 50), a fixed buffer of 50 would allow them to take their
; capacity and then open that buffer for the next 50 to fill up for the next run.

; However, in this case we don't want to drop any orders (that's bad for business).
; How might we accommodate this use case without dropping any orders?

; 888~~\                    888   _
; 888   |   /~~~8e   e88~~\ 888 e~ ~  888-~88e  888-~\  e88~~8e   d88~\  d88~\ 888  888 888-~\  e88~~8e
; 888 _/        88b d888    888d8b    888  888b 888    d888  88b C888   C888   888  888 888    d888  88b
; 888  \   e88~-888 8888    888Y88b   888  8888 888    8888__888  Y88b   Y88b  888  888 888    8888__888
; 888   | C888  888 Y888    888 Y88b  888  888P 888    Y888    ,   888D   888D 888  888 888    Y888    ,
; 888__/   "88_-888  "88__/ 888  Y88b 888-_88"  888     "88___/  \_88P  \_88P  "88_-888 888     "88___
;                                     888

; ===============================
; Bot orders with backpressure
; ===============================

; "One of the ways you can take care of (not dropping puts) is to implement backpressure by using a blocking construct on the entry point." - RH

(defn bot-orders-w-backpressure [channel order]
  (go
    (dotimes [x 2100] ; increase number of bot orders
      (>! channel (str "#: " x " order: " order)))))

(def orders-chan-burst (chan 50))

(bot-orders-w-backpressure orders-chan-burst "Sashimi!")

(defn burst-take! [channel]
  (dotimes [x 50] ; increase number of bot orders
    (take! channel take-logger)))

(burst-take! orders-chan-burst)
; FIRST EVAL =>
; "order taken: #: 0 order: Sashimi!"
; ...
; "order taken: #: 49 order: Sashimi!"

; SECOND EVAL =>
; "order taken: #: 50 order: Sashimi!"
; ...
; "order taken: #: 99 order: Sashimi!"

; What allowed us to both hydrate the buffer with 50 orders AND qeue up the
; remaining pending orders is backpressure. By wraping our putting bot-orders
; in a `(go...)` block and changing the `put!` to its corresponding "parking"
; syntax `>!` we've spun up a thread (in JavaScript a state-machine) that
; conducts some "magic-internal-callback-hell" internally to register and keep
; track of the pending puts without overflowing the channel. Notice that we
; used a fixed buffer of 50, which - without backpressure - would not accommodate
; the 2100 bot-orders sent. Without backpressure, we would have gotten the error
; we saw before:
;;=> Error: Assert failed: No more than 1024 pending puts are allowed on a single channel. Consider using a windowed buffer. (< (.-length puts) impl/MAX-QUEUE-SIZE)

; Now no orders will ever be dropped. But, what if we can't handle all the orders?
; We don't want to drop order. We also don't want customers to place an order if
; There's no hope of them ever getting filled. So, what do we do?

;         888                            d8b
;  e88~~\ 888  e88~-_   d88~\  e88~~8e  !Y88!
; d888    888 d888   i C888   d888  88b  Y8Y
; 8888    888 8888   |  Y88b  8888__888   8
; Y888    888 Y888   '   888D Y888    ,   e
;  "88__/ 888  "88_-~  \_88P   "88___/   "8"




;   d8   ,e,                                             d8    d8b
; _d88__  "  888-~88e-~88e  e88~~8e   e88~-_  888  888 _d88__ !Y88!
;  888   888 888  888  888 d888  88b d888   i 888  888  888    Y8Y
;  888   888 888  888  888 8888__888 8888   | 888  888  888     8
;  888   888 888  888  888 Y888    , Y888   ' 888  888  888     e
;  "88_/ 888 888  888  888  "88___/   "88_-~  "88_-888  "88_/  "8"


;           888   d8           d8b
;   /~~~8e  888 _d88__  d88~\ !Y88!
;       88b 888  888   C888    Y8Y
;  e88~-888 888  888    Y88b    8
; C888  888 888  888     888D   e
;  "88_-888 888  "88_/ \_88P   "8"





;; Source: David Nolen: https://youtu.be/AhxcGGeh5ho?t=11m49s

; `go` blocks return channels
(source go)

(.log js/console (go 5))

; `>!` & `<!` ("parking" put & take)
(source >!)
(source <!)

(go (.log js/console (<! (go 5))))

; `chan` (channels)
(source chan)

(let [c (chan)]
  (go
    (.log js/console "We got here")
    (.log js/console (<! c)) ; take a value off the channel
    (.log js/console "We'll never get here"))) ; => We got here

(let [c (chan)]
  (go
    (.log js/console "Got here")
    (.log js/console (<! c))
    (.log js/console "We made progress"))
  (go ; when this following go block runs, it allows the prior go to finish
    (>! c 5)))

(let [c (chan)]
  (go
    (.log js/console "Before")
    (>! c (js/Date.))
    (.log js/console "After"))
  (go
    (.log js/console "Order")
    (.log js/console (<! c))
    (.log js/console "doesn't matter")))

; `timeout`
(source timeout)

; Gotchas of `chan`:

(def ch (chan))

(go (while true (<! (timeout 250)) (>! ch 1)))
(go (while true (<! (timeout 500)) (>! ch 2)))
(go (while true (<! (timeout 750)) (>! ch 3)))

(go-loop []
  (recur (.log js/console (str "process: " (<! ch)))))


; Control Flow with `alts!`
; USING `alts!`
(source alts!)


(defn timeout-chan [port]
  (let [tmt (timeout 3000)]
    (go (while true (<! (timeout 250)) (>! port 1)))
    (go (while true (<! (timeout 500)) (>! port 2)))
    (go (while true (<! (timeout 750)) (>! port 3)))
    (go-loop [_ []]
      (let [[val ch] (alts! [port tmt])]
        (cond
          (= ch tmt) (.log js/console (str "done"))
          :else
          (recur (.log js/console (str "process: " (<! port)))))))))


(def test-chan (chan))

(timeout-chan test-chan)

; `put!` and 'take!`

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

(source chan)
(toggle-chan test-chan2 stopping-chan)

(stopping-put-async stopping-chan "HALT")
(stopping-put-park stopping-chan "STOP")






; Buffers

(def fixed-chan (chan 2))
(timeout-chan fixed-chan)
(msg->chan fixed-chan "TEST-CHAN")

(def buff-chan (chan (buffer 2)))
(timeout-chan buff-chan)
(msg->chan buff-chan "BUFF-CHAN")

(def slide-chan (chan (sliding-buffer 2)))
(timeout-chan slide-chan)
(msg->chan slide-chan "SLIDE-CHAN")

(def drop-chan (chan (dropping-buffer 2)))
(timeout-chan drop-chan)
(msg->chan drop-chan "DROP-CHAN")


; `put!` and `take!` (asynchronous channel operations)
(source put!)
(source take!)




;; ======================= ARCHIVE


(def ch (chan))

(defn render [q]
  (apply str
    (for [p (reverse q)]
      (str "process: " p " "))))

(go (while true (<! (timeout 250)) (>! ch 1)))
(go (while true (<! (timeout 500)) (>! ch 2)))
(go (while true (<! (timeout 750)) (>! ch 3)))

(defn peekn
  "Returns vector of (up to) n items from the end of vector v"
  [v n]
  (if (> (count v) n)
    (subvec v (- (count v) n))
    v))

(go-loop [p []]
  (.log js/console (render q))
  (recur (-> (conj q (<! port)) (peekn 1))))


(defn timeout-chan [port]
  (let [tmt (timeout 3000)]
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
            (recur (-> (conj q (<! port)) (peekn 1)))))))))
