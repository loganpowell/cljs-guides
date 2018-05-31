(ns core-async.core
  (:require  [cljs.core.async :refer [>! <! chan put! take! close! timeout alts! alt!]]
             [cljs.core.async :refer-macros [go go-loop alt!]])
  (:use [clojure.repl :only (source)]))

;; Source: David Nolen: https://youtu.be/AhxcGGeh5ho?t=11m49s

(.log js/console (go 5))

(go (.log js/console (<! (go 5)))) ; => 5

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

(def ch (chan))

(defn render [q]
  (apply str
    (for [p (reverse q)]
      (str "process: " p " "))))

(go (while true (<! (timeout 250)) (>! ch 1)))
(go (while true (<! (timeout 1000)) (>! ch 2)))
(go (while true (<! (timeout 1500)) (>! ch 3)))

(defn peekn
  "Returns vector of (up to) n items from the end of vector v"
  [v n]
  (if (> (count v) n)
    (subvec v (- (count v) n))
    v))

(go (loop [q []]
      (.log js/console (render q))
      (recur (-> (conj q (<! ch)) (peekn 4)))))

(comment
  process: 1
  process: 2process: 1
  process: 1process: 2process: 1
  process: 1process: 1process: 2process: 1
  process: 2process: 1process: 1process: 2
  ... forever)

; USING `alts!`

(let [tmt (timeout 5000)
      ch (chan)]
  (go (while true (<! (timeout 250)) (>! ch 1)))
  (go (while true (<! (timeout 1000)) (>! ch 2)))
  (go (while true (<! (timeout 1500)) (>! ch 3)))
  (go-loop [q []]
    (let [[value channel] (alts! [ch tmt])]
      (cond
        (= channel tmt) (.log js/console (str "done"))
        :else
        (do
          (.log js/console (render q))
          (recur (-> (conj q (<! ch)) (peekn 4))))))))
(comment
  process: 1
  process: 2process: 1
  process: 1process: 2process: 1
  process: 1process: 1process: 2process: 1
  process: 2process: 1process: 1process: 2
  ...
  done)
