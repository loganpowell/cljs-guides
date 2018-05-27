(ns go.experiments
  (:require  [ajax.core :as ajx]
             [cljs.core.async :refer [>! <! chan put! take! close!]]
             [cljs.core.async :refer-macros [go go-loop alt!]]))

;; Source: David Nolen: https://youtu.be/AhxcGGeh5ho?t=11m49s

(.log js/console (go 5))

(go (.log js/console (<! (go 5)))) ; => 5

(let [c (chan)]
  (go
    (.log js/console "We got here")
    (<! c) ; take a value off the channel
    (.log js/console "We'll never get here"))) ; => "We got here

(let [c (chan)]
  (go
    (.log js/console "Got here")
    (<! c)
    (.log js/console "We made progress"))
  (go ; when this following go block runs, it allows the prior go to finish
    (>! c (js/Date.))))
; => "Got here
; => We made progress

(let [c (chan)]
  (go
    (.log js/console "Before")
    (>! c (js/Date.))
    (.log js/console "After"))
  (go
    (.log js/console "Order")
    (<! c)
    (.log js/console "doesn't matter")))
; => Before
; => Order
; => doesn't matter
; => After

; put! is async version of >! allows puts outside of go block
; take! is async version of <! ||    takes  ||
(comment ; for browser
  (defn events [el type] ; take dom event (el) w/type
    (let [out (chan)] ; create a channel
      (.addEventListener el type ; add listener to dom event
        (fn [e] (put! out e))) ; put each event into channel
      out)) ; return the channel for consumers

; the while loop: recursion to continuously <! from the events channel
  (let [move (events js/window "mousemove")]
    (go (while true ;; this looks like it would never terminate
          (.log js/console (<! move))))))

; map over an input channels' contents
(defn map [f in] "Mapping fn: takes a function and a seq"
  (let [out (chan)] ; create channel
    (go (while true
          (>! out (f (<! in))))) ; xform fn mapped over input to channel
    out))

; our transducer function
(defn e->v [e]
  [(.-pageX e) (.-pageY e)])
