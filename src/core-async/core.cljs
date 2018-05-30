(ns core-async.core
  (:require  [cljs.core.async :refer [>! <! chan put! take! close! timeout]]
             [cljs.core.async :refer-macros [go go-loop alt!]])
  (:use [clojure.repl :only (source)]))

;; Source: David Nolen: https://youtu.be/AhxcGGeh5ho?t=11m49s

(.log js/console (go 5))

(go (.log js/console (<! (go 5)))) ; => 5

(let [c (chan)]
  (go
    (>! c 10)))

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

;; Handy Go timeout function from [@naiquevin](https://gist.github.com/naiquevin/6b78186176e86c0a15e3)

(source alt!)

(let [ch (chan)]
  (go (while true (<! (timeout 250)) (>! ch 1)))
  (go (while true (<! (timeout 1000)) (>! ch 2)))
  (go (while true (<! (timeout 1500)) (>! ch 3)))

  (defn render [q]
    (apply str
      (for [p (reverse q)]
        (str "process: " p " "))))

  (defn peekn
    "Returns vector of (up to) n items from the end of vector v"
    [v n]
    (if (> (count v) n)
      (subvec v (- (count v) n)) ; subvec returns a vector of length: n
      v))

  (go
    (loop [i 0 ret []]
      (if (= i 10)
        (.log js/console (render ret))
        (recur (inc 1) (->
                         (conj ret (<! c))
                         (peekn 4)
                         (.log js/console (render ret))))))))
