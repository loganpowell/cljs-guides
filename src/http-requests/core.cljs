(ns http.core
  (:require  [cljs.core.async :refer [chan put! take! >! <! buffer dropping-buffer sliding-buffer timeout close! alts!]]
             [cljs.core.async :refer-macros [go go-loop alt!]]
             [ajax.core :as http :refer [GET POST]]
             [cognitect.transit :as t]
             [clojure.string :as s]
             fs)
  (:use [clojure.repl :only (source)]))

; For Intellij IDE:
; start up remote repl: yarn shadow-cljs clj-repl
; start up Shadow REPL in intellij (Ctrl+Alt+R)
; in Shadow REPL:
; 1) `(shadow/watch :lib)
; 2) `(shadow.cljs.devtools.api/node-repl)

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

; Picking up from where we left off after the [`core.async` 101 guide](), let's pretend we are a sushi franchise with some outdated technology, which needs to be refactored. This provide some context which will allow us to see what kinds of problems we can solve with `cljs-ajax` + `transit` and `core.async`.

; Let's start with a simple HTTP GET request:

(GET
  "http://api.sushicount.com/add-piece-of-sushi/0"
  {:handler #(prn %)})
;;=> {"pieces_of_sushi" 1}

; While this response looks similar to JSON, it's not. We'll cover how to get data in/out of native ClojureScript data structures later. For now, let's just kick the tires of `cljs-ajax`.

(GET
  "http://no-sushi-here"
  {:handler #(prn %)
   :error-handler #(prn (str "bad sushi: " %))})
;;=> "bad sushi: {:status 0, :status-text \"Request failed.\", :failure :failed}"


; ===============================
; :response-format json
; ===============================

(def single-sushi-url "http://api.sushicount.com/add-piece-of-sushi/0")

(defn get-sushi [format handler keywords?]
  (GET
    single-sushi-url
    {:handler handler
     :error-handler #(prn (str "bad sushi: " %))
     :response-format format
     :keywords? keywords?}))

(defn json-sushi [response] (prn response))

; The default settings of `cljs-ajax`s response format is `:json`. It's important to note that the `:keywords?` option only applies to `:response-format :json`, so we'll need to specify that if we're explicitly including the `:response-format`:

(get-sushi :json json-sushi false)
;;=> {"pieces_of_sushi" 1} ;; = same as default behavior in first example

; turn json into keywordized clojure map!
(get-sushi :json json-sushi true)
;;=> {:pieces_of_sushi 1}


;    d8                                    ,e,   d8)
;  _d88__ 888-~\   /~~~8e  888-~88e  d88~\  "  _d88__
;   888   888          88b 888  888 C888   888  888
;   888   888     e88~-888 888  888  Y88b  888  888
;   888   888    C888  888 888  888   888D 888  888
;   "88_/ 888     "88_-888 888  888 \_88P  888  "88_/


; ===============================
; Using transit writer for optimized :json response
; ===============================

(defn t->json [transit]
  (let [w (t/writer :json)]
    (t/write w transit)))

(defn transit-handler [response]
  (->>
    (t->json response)
    (prn)))

; keywords don't apply to :transit
(get-sushi :transit transit-handler)
;;=> "[\"^ \",\"pieces_of_sushi\",1]"

; ===============================
; Using transit writer :json-verbose for formal json
; ===============================

(defn t->json-verbose [transit]
  (let [w (t/writer :json-verbose)]
    (t/write w transit)))

(defn json-verbose [response]
  (->>
    (t->json-verbose response)
    (prn)))

(get-sushi :transit json-verbose)
;;=> "{\"pieces_of_sushi\":1}"

; ===============================
; Using use js/console.log to see actual stringified json
; ===============================

; must use js/console.log to get non stringified json
(defn json-verbose-pretty [response]
  (->>
    (t->json-verbose response)
    (js/console.log)))

; get actual json in console (you can eveen add ):
(get-sushi :transit json-verbose-pretty)
;;=> {"pieces_of_sushi":1}

; ===============================
; Using use js/JSON.parse to return a JS Object
; ===============================

; For JavaScript digestion, use JSON.parse for easy data access
(defn js-obj [response]
  (->>
    (t->json-verbose response)
    (js/JSON.parse)
    (js/console.log)))

(get-sushi :transit js-obj)
;;=> { pieces_of_sushi: 1 }


; Let's use an API with a little more functionality. Pickup from where we left off on our [`core.async` 101 guide](), let's use a case study for the rest of Since our sushi franchise is heavily interdependent with local farmers' markets, we'll use the USDA's farmers' markets search API.

; We'll add the `:params` argument map to our `cljs-ajax` request to provide some interface into the API. Also, since we want to do something with these data in Clojure(script), let's keyword-ize the response.

; https://api.census.gov/data/2016/zbp?get=EMP,GEO_TTL&for=zipcode:*

; (defn census-base-url "https://api.census.gov/data")

(def usda-base-url "https://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch")

(defn basic-error-handler [error] (prn (str "Error!: " error)))

(defn basic-success-handler [response] (cljs.pprint/pprint response))

; The `zipcode` argument will translate the `:zip` key into a parameter for the REST API:
; I.e.: https://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch`?` `zip=` `zipcode`

(defn get-markets [format handler keywords? zipcode]
  (GET
    usda-base-url
    {:response-format format
     :handler handler
     :keywords? keywords?
     :error-handler basic-error-handler
     :params {:zip zipcode}}))


(get-markets :json basic-success-handler true 32514)
;;=>
; {:results
;  [{:id "1007518", :marketname "4.3 Pensacola Growers' Retail Farmers' Market"}
;   {:id "1011160", :marketname "6.3 Santa Rosa Farmers Market"}
;   {:id "1005683", :marketname "6.5 The Market @ Saint Monica's"}
;   {:id "1004835", :marketname "7.7 Palafox Market"}
;   {:id "1007779", :marketname "8.2 Port City Market"}
;   {:id "1006840", :marketname "13.6 Riverwalk Market"}
;   {:id "1011667", :marketname "17.7 Perdido Farmers Market"}
;   {:id "1004049", :marketname "22.9 Elberta Farmer's Market"}
;   {:id "1004401", :marketname "27.8 Chicago Street Farmers Market"}
;   {:id "1004086", :marketname "31.4 Alabama Gulf Coast Market"}
;   {:id "1005971", :marketname "33.0 Flomaton Farmers Market"}
;   {:id "1001372", :marketname "37.0 Okaloosa County Farmers Market"}
;   {:id "1011967", :marketname "37.0 Akers of Strawberries"}
;   {:id "1001373", :marketname "37.2 Fort Walton Beach Farmers Market"}
;   {:id "1000051", :marketname "39.6 Fairhope Outdoor Farm Market"}
;   {:id "1001508", :marketname "43.5 Crestview Farmers Market"}
;   {:id "1001610", :marketname "44.9 Brewton Farmers Market"}
;   {:id "1003137", :marketname "52.0 Halls Mill Road Farmers Market"}
;   {:id "1010546", :marketname "54.8 Raw and Juicy Farmers Market"}]}


; ===============================
; Advanced Destructuring for `cljs-ajax` Arguments
; ===============================


; By default, `cljs-ajax` uses the Google Closure library [XhrIo](https://developers.google.com/closure/library/docs/xhrio) API. If you want to use [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) API directly, add :api (js/XMLHttpRequest.) to the map. Both of these use callback APIs to do their business.

; Let's do something a bit more interesting and use `core.async`.

; ===============================
; Aside: Destructuring

; If you're new to destructuring syntax, there's a great article about it by [Bruno Bonacci](http://blog.brunobonacci.com/2014/11/16/clojure-complete-guide-to-destructuring/). But here's an example of some pretty sweet map destructuring to get us acquainted with what's possible:

(defn destructuring-example
  [{{:keys [key]} :fs {:keys [method url]} :http :as opts}]
  (let [response
        (str "key? " key " method? " method " opts? " opts)]
    (prn response)))

(destructuring-example {:fs {:key "test key"} :http {:method "get" :url "test url"}})
;;=>
; "}})
; key? test key
; method? get
; opts? {:fs {:key \"test key\"}, :http {:method \"get\", :url \"test url\"}}
; "

; ===============================

; Merge two remote resources

; Let's say we're looking to setup a new headquarters and want to create a heatmap of all US Counties to evaluate local markets that fit our existing customer demographic profiles. This tool will leverage two APIs:
; - Census Statistics, which has a public API (that you can use without a [key](https://api.census.gov/data/key_signup.html) for a pretty generous number of calls per month).)

; - A simple call to a raw GeoJSON file


(defn get-json
  [base-url keywords? params]
  (let [args (merge
               {:response-format :json
                :handler #(js/console.log (t->json-verbose %))
                :keywords? keywords?
                :error-handler #(prn (str "error: " %))}
               (when-let [params {:params params}]
                 params))]
    (GET
      base-url
      args)))

;; This large (@20M) console.log breaks Atom. Works in Intellij with Cursive Plugin
(get-json
  "https://raw.githubusercontent.com/loganpowell/geojson/master/src/archive/test.geojson"
  false)


; ===============================
; Wrangling...
; ===============================

; [source](https://github.com/mihi-tr/csv-map/blob/master/src/csv_map/core.clj)


(defn keywordize
  "takes a map, converts string keys to keyword keys with all lowercase and dash instead of spaces"
  [m]
  (into {}
        (for [[k v] m]
          [(keyword (s/lower-case (s/replace k #" " "-"))) v])))

;; API

(defn parse-csv
  "parses a csv to a map ([csv & {:as opts}]) passes options to clojure-csv converts string keys to keywords if ':key :keyword' is pass as extra opts."
  [csv & {key :key :as opts}]
  (let [opts   (vec (reduce concat (vec opts)))
        c      (apply parse-csv csv opts)
        output (map (partial zipmap (reverse (first c))) (map reverse (rest c)))]
    (if (= key :keyword) (map keywordize output) output)))



(defn get-map-keys
  [base-url keywords? params]
  (let [args (merge
               {:response-format :json
                ;:handler #(prn (parse-csv % {:key :keyword}))
                :handler #(prn %)
                :keywords? keywords?
                :error-handler #(prn (str "error: " %))}
               (when-let [params {:params params}]
                 params))]
    (GET
      base-url
      args)))

;; This large (@20M) console.log breaks Atom. Works in Intellij with Cursive Plugin
(get-map-keys
  "https://raw.githubusercontent.com/loganpowell/geojson/master/src/archive/test.geojson"
  true)

(get-map-keys
  "https://api.census.gov/data/2016/acs/acs5?get=NAME,B01001_001E&for=county:*&in=state:01"
  false)












;   e88~~\  e88~-_  888-~\  e88~~8e         /~~~8e   d88~\ Y88b  / 888-~88e  e88~~\
;  d888    d888   i 888    d888  88b ____       88b C888    Y888/  888  888 d888
;  8888    8888   | 888    8888__888       e88~-888  Y88b    Y8/   888  888 8888
;  Y888    Y888   ' 888    Y888    ,      C888  888   888D    Y    888  888 Y888
;   "88__/  "88_-~  888     "88___/        "88_-888 \_88P    /     888  888  '88__/
;                                                          _/

; Let's start

(defn ajax-call "Accept a cljs-ajax request map, and returns a channel which will contain the response."
  [{:keys [method uri] :as opts}]
  (let [=resp= (chan)]
    (http/ajax-request (assoc opts
                        :handler (fn [[ok r :as data]]
                                   (if ok
                                     (->>
                                       (t->json)
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
