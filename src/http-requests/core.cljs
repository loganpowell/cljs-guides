(ns http.core
  (:require  [cljs.core.async :refer [chan put! take! >! <! buffer dropping-buffer sliding-buffer timeout close! alts!]]
             [cljs.core.async :refer-macros [go go-loop alt!]]
             [ajax.core :as http :refer [GET POST]]
             [cognitect.transit :as t]
             fs)
  (:use [clojure.repl :only (source)]))

;          888   ,e,                         ,e,
;   e88~~\ 888    "   d88~\        /~~~8e     "    /~~~8e  Y88b  /
;  d888    888   888 C888   ____       88b   888       88b  Y88b/
;  8888    888   888  Y88b        e88~-888   888  e88~-888   Y88b
;  Y888    888   888   888D      C888  888   888 C888  888   /Y88b
;   "88__/ 888   88P \_88P        "88_-888   88P  "88_-888  /  Y88b
;              \_8"                        \_8'

; ===============================
; Basics
; ===============================


(GET
  "http://api.sushicount.com/add-piece-of-sushi/0"
  {:handler #(prn %)})
;;=> {"pieces_of_sushi" 1}


(GET
  "http://badsushi"
  {:handler #(prn %)
   :error-handler #(prn (str "bad sushi: " %))})
;;=> "bad sushi: {:status 0, :status-text \"Request failed.\", :failure :failed}"


; ===============================
; :response-format
; ===============================


(def single-sushi-url "http://api.sushicount.com/add-piece-of-sushi/0")

(defn get-json-keywords? [ _boolean_]
  (GET
    single-sushi-url
    {:handler #(prn %)
     :error-handler #(prn (str "bad sushi: " %))
     :response-format (http/json-response-format {:keywords? _boolean_})}))

(get-json-keywords? false)
;;=> {"pieces_of_sushi" 1}

(get-json-keywords? true)
;;=> {:pieces_of_sushi 1}



; ===============================
; :response-format json
; ===============================

(defn json-handler [response]
  (->>
    (str response)
    (prn)))

(defn get-sushi [format success-handler keywords?]
  (GET
    single-sushi-url
    {:handler success-handler
     :error-handler #(prn (str "bad sushi: " %))
     :response-format format
     :keywords? keywords?}))

; :keywords? option only applies to :response-format :json
(get-sushi :json json-handler false)
;;=> "{\"pieces_of_sushi\" 1}"

; turn json into keywordized clojure map!
(get-sushi :json json-handler true)
;;=> "{:pieces_of_sushi 1}"


;
;    d8                                    ,e,   d8)
;  _d88__ 888-~\   /~~~8e  888-~88e  d88~\  "  _d88__
;   888   888          88b 888  888 C888   888  888
;   888   888     e88~-888 888  888  Y88b  888  888
;   888   888    C888  888 888  888   888D 888  888
;   "88_/ 888     "88_-888 888  888 \_88P  888  "88_/
;

; ===============================
; Using transit writer for optimized :json response
; ===============================

(defn transit->json [transit]
  (let [w (t/writer :json)]
    (t/write w transit)))

(defn transit-handler [response]
  (->>
    (transit->json response)
    (prn)))

; keywords don't apply to :transit
(get-sushi :transit transit-handler)
;;=> "[\"^ \",\"pieces_of_sushi\",1]"

; ===============================
; Using transit writer :json-verbose for formal json
; ===============================

(defn transit->json-verbose [transit]
  (let [w (t/writer :json-verbose)]
    (t/write w transit)))

(defn transit-handler-verbose-prn [response]
  (->>
    (transit->json-verbose response)
    (prn)))

(get-sushi :transit transit-handler-verbose-prn)
;;=> "{\"pieces_of_sushi\":1}"

; ===============================
; Using use js/console.log to see actual stringified json
; ===============================

; must use js/console.log to get non stringified json
(defn transit-handler-verbose [response]
  (->>
    (transit->json-verbose response)
    (js/console.log)))

; get actual json in console (you can eveen add ):
(get-sushi :transit transit-handler-verbose)
;;=> {"pieces_of_sushi":1}

; ===============================
; Using use js/JSON.parse to return a JS Object
; ===============================

; For JavaScript digestion, use JSON.parse for easy data access
(defn transit-handler-verbose-obj [response]
  (->>
    (transit->json-verbose response)
    (js/JSON.parse)
    (js/console.log)))

(get-sushi :transit transit-handler-verbose-obj)
;;=> { pieces_of_sushi: 1 }


;
;   e88~~\  e88~-_  888-~\  e88~~8e         /~~~8e   d88~\ Y88b  / 888-~88e  e88~~\
;  d888    d888   i 888    d888  88b ____       88b C888    Y888/  888  888 d888
;  8888    8888   | 888    8888__888       e88~-888  Y88b    Y8/   888  888 8888
;  Y888    Y888   ' 888    Y888    ,      C888  888   888D    Y    888  888 Y888
;   "88__/  "88_-~  888     "88___/        "88_-888 \_88P    /     888  888  '88__/
;                                                          _/

; ===============================
; Return a channel instead of a future
; ===============================


(defn ajax-call "Accept a cljs-ajax request map, and returns a channel which will contain the response."
  [{:keys [method uri] :as opts}]
  (let [=resp= (chan)]
    (http/ajax-request (assoc opts
                        :handler (fn [[ok r :as data]]
                                   (if ok
                                     (->>
                                       (transit->json)
                                       (put! =resp= r))
                                     (prn "AJAX Error" {:error r :request opts})))))
    =resp=))

(def ajax-defaults "Basic options for the response format"
  {:format (http/json-request-format)
   :response-format (http/transit-response-format {:keywords? false})})

(defn fetch-datasets []
  (ajax-call (assoc ajax-defaults
               :method :get :uri census-discovery-base)))

(defn clj->json
  [ds]
  (->>
    (clj->js ds)
    (.stringify js/JSON)))
    ; (.parse js/JSON)))


(go
  (->
    (fetch-datasets)
    (<!)
    ; (clj->json)
    (prn)))
