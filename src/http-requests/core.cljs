(ns http.core
    (:require [ajax.core :refer [GET POST]])
    (:require fs))

;; Basic working example:

(def cljs-async-docs "https://raw.githubusercontent.com/clojure/core.async/master/src/main/clojure/cljs/core/async.cljs")

(defn basic-handler
  [response]
  (.log js/console (str response)))

(GET cljs-async-docs {:handler basic-handler})

;; Bad endpoint example:

(def bad-url "https://rercontent.com/badlink.cl")

; Destructure the response object to get the :status and :status-text
(defn basic-error-handler [{:keys [status status-text]}]
 (.log js/console
    (str "AJAX Error Status: " status " -> " status-text)))

(GET bad-url
  {:handler basic-handler
   :error-handler basic-error-handler})

; => AJAX Error Status: 0 -> Request failed.
; => AJAX Error Status: 400
