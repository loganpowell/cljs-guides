(ns core-async.core
  (:require  [cljs.core.async :refer [>! <! chan put! take! timeout close! alts! dropping-buffer sliding-buffer]]
             [cljs.core.async :refer-macros [go go-loop alt!]])
  (:use [clojure.repl :only (source)]))


; ===============================
; Orders Utils
; ===============================

(defn take-logger [val]
  (prn (str "order taken: " val)))

(defn put-logger [val]
  (prn (str "order in: " val)))


;  ____  _  _  ____  ____  ____  ____  ____  ____  ____
; (  _ \/ )( \(  __)(  __)(  __)(  _ \(  _ \(  __)(    \
;  ) _ () \/ ( ) _)  ) _)  ) _)  )   / )   / ) _)  ) D (
; (____/\____/(__)  (__)  (____)(__\_)(__\_)(____)(____/
; 
; courtesy: http://patorjk.com/software/taag/#p=display&h=1&v=0&f=Sub-Zero&t=Bufferless%20

; ===============================
; Orders with put! and take!
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
; Bot orders with looping put!
; ===============================

(defn bot-orders [channel order]
  (loop []
    (put! channel order)
    (recur)))

(bot-orders bufferless-orders-chan "Sushi!")
;;=> Error: Assert failed: No more than 1024 pending puts are allowed on a single channel. Consider using a windowed buffer. (< (.-length puts) impl/MAX-QUEUE-SIZE)


; ===============================
; Bot orders with backpressure
; ===============================

(defn bot-orders-bp [channel order]
  (go
    (loop []
      (>! channel order)
      (recur))))

(bot-orders-bp bufferless-orders-chan "Sushi!")



;  ______   __  __   ______  ______  ______   ______   ______   ______   _____
; /\  == \ /\ \/\ \ /\  ___\/\  ___\/\  ___\ /\  == \ /\  == \ /\  ___\ /\  __-.
; \ \  __< \ \ \_\ \\ \  __\\ \  __\\ \  __\ \ \  __< \ \  __< \ \  __\ \ \ \/\ \
;  \ \_____\\ \_____\\ \_\   \ \_\   \ \_____\\ \_\ \_\\ \_\ \_\\ \_____\\ \____-
;   \/_____/ \/_____/ \/_/    \/_/    \/_____/ \/_/ /_/ \/_/ /_/ \/_____/ \/____/







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
