(ns docs.parser
  (:require [ajax.core :refer [GET POST]])
  (:require [ajax.core :as http])
  (:require [cljs.core.async :refer [>! <! chan put! take! close!]])
  (:require [cljs.core.async :refer-macros [go go-loop alt!]]))
  ; (:require fs))

; instaparse?: http://instaparse-live.matt.is/

(defn ajax-call "Accept a cljs-ajax request map, and returns a channel which will contain the response."
  [{:keys [method uri] :as opts}]
  (let [=resp= (chan)]
    (http/ajax-request (assoc opts
                        :handler (fn [[ok r :as data]]
                                   (if ok
                                     (put! =resp= r)
                                     (prn "AJAX Error" {:error r :request opts})))))
   =resp=))

; (def ajax-defaults "Basic options for the response format"
;   {:format (http/json-request-format)
;    :response-format (http/json-response-format {:keywords? true})})

(def cljs-core-async-docs "https://raw.githubusercontent.com/clojure/core.async/master/src/main/clojure/cljs/core/async.cljs")

(defn test-fetch []
  (ajax-call :method :get :uri cljs-core-async-docs))

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
