(ns http-async.core
    (:require [ajax.core :refer [GET POST]])
    (:require fs)
    (:require [cljs.core.async :refer [>! <! chan put! take! close!]])
    (:require [cljs.core.async :refer-macros [go go-loop alt!]]))

;; Basic working example:

(def cljs-async-docs "https://raw.githubusercontent.com/clojure/core.async/master/src/main/clojure/cljs/core/async.cljs")

(defn basic-handler
  [response]
  (.log js/console (str response)))

; Destructure the response object to get the :status and :status-text
(defn basic-error-handler [{:keys [status status-text]}]
 (.log js/console
    (str "AJAX Error Status: " status " -> " status-text)))

(GET cljs-async-docs
  {:handler basic-handler
   :error-handler basic-error-handler})

; => AJAX Error Status: 0 -> Request failed.
; => AJAX Error Status: 400


(let [c (chan)]
  (go
    (.log js/console "We got here")
    (<! c) ; take a value off the channel
    (.log js/console "We'll never get here")))

(go
  (.log js/console (<! (test-fetch)))
  (.log js/console "the end"))

(def docPath "./guides/cljs-async-http/cljs-ca-docs.txt")
(def docText (.readFileSync fs docPath "utf8"))

(cljs.reader/read-string docText)
