(ns core-async.core
  (:require  [cljs.core.async :refer [>! <! chan put! take! close! timeout alts! alt! buffer dropping-buffer sliding-buffer]]
             [cljs.core.async :refer-macros [go go-loop alt!]])
  (:use [clojure.repl :only (source)]))

;; Source: David Nolen: https://youtu.be/AhxcGGeh5ho?t=11m49s

; `go` blocks return channels
(source go)

(.log js/console (go 5))

; `>!` & `<!` ("parking" put & take)
(source >!)
(source <!)

(go (.log js/console (<! (go 5)))) ; => 5

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
; => Got here
; => We made progress

(let [c (chan)]
  (go
    (.log js/console "Before")
    (>! c (js/Date.))
    (.log js/console "After"))
  (go
    (.log js/console "Order")
    (.log js/console (<! c))
    (.log js/console "doesn't matter")))
; => Before
; => Order
; => doesn't matter
; => After

; `timeout`
(source timeout)

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

(go (loop [q []]
      (.log js/console (render q))
      (recur (-> (conj q (<! ch)) (peekn 3)))))

; USING `alts!`
(source alts!)

; `put!` and `take!` (asynchronous channel operations)
(source put!)
(source take!)

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

(defn msg->chan [port msg]
  (put! port msg))

(def test-chan (chan))
(timeout-chan test-chan)
(msg->chan test-chan "TEST-CHAN")

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
