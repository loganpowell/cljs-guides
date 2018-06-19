(ns http.core
  (:require  [cljs.core.async :refer [chan put! take! >! <! buffer dropping-buffer sliding-buffer timeout close! alts!]]
             [cljs.core.async :refer-macros [go go-loop alt!]]
             [ajax.core :as http :refer [GET POST]]
             [cognitect.transit :as t]
             [oops.core :as ops :refer [oget]]
             [clojure.string :as s]
             [cljs.pprint :refer [pprint]]
             ["dotenv" :as env]
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

; The default settings of `cljs-ajax`s response format is `:json`. It's important to note that the `:keywords?` option only applies to `:response-format :json`, so we'll need to specify that if we're explicitly including the `:response-format`:

(get-sushi :json #(prn %) false)
;;=> {"pieces_of_sushi" 1} ;; = same as default behavior in first example

; turn json into keywordized clojure map!
(get-sushi :json #(prn %) true)
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

(defn t->json [t]
  (let [w (t/writer :json)]
    (t/write w t)))

(defn transit-handler [r]
  (->>
    (t->json r)
    (prn)))

; keywords don't apply to :transit
(get-sushi :transit transit-handler)
;;=> "[\"^ \",\"pieces_of_sushi\",1]"

; ===============================
; Using transit writer :json-verbose for formal json
; ===============================

(defn t->json-verbose [t]
  (let [w (t/writer :json-verbose)]
    (t/write w t)))

(defn json-verbose [r]
  (->>
    (t->json-verbose r)
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

(defn basic-success-handler [response] (pprint response))

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
; Merge two remote resources
; ===============================

; By default, `cljs-ajax` uses the Google Closure library [XhrIo](https://developers.google.com/closure/library/docs/xhrio) API. If you want to use [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) API directly, add :api (js/XMLHttpRequest.) to the map. Both of these use callback APIs to do their business.


;   e88~~\  e88~-_  888-~\  e88~~8e         /~~~8e   d88~\ Y88b  / 888-~88e  e88~~\
;  d888    d888   i 888    d888  88b ____       88b C888    Y888/  888  888 d888
;  8888    8888   | 888    8888__888       e88~-888  Y88b    Y8/   888  888 8888
;  Y888    Y888   ' 888    Y888    ,      C888  888   888D    Y    888  888 Y888
;   "88__/  "88_-~  888     "88___/        "88_-888 \_88P    /     888  888  '88__/
;                                                          _/

(defn get-json
  [base-url keywords? params]
  (let [=resp= (chan)
        args (merge
               {:response-format :json
                ;:handler #(put! =resp= % (fn [r] (prn (str "put? " r))))
                :handler #(put! =resp= % prn)
                :error-handler #(prn (str "error: " %))}
               (when-let [keywords? {:keywords? keywords?}]
                 keywords?)
               (when-let [params {:params params}]
                 params))]
    (do
      (GET base-url args)
      =resp=)))

;; Now that we're using `core.async`, we'll have to move our success-handler out of `cljs-ajax` in order  for the response that is put into the channel to be handled once it is taken out. Observe:
(go
  (->
    (get-json
      "https://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=32514"
      false)
    (<!)
    (pprint)))
;;=>
;{"results"
; [{"id" "1007518", "marketname" "4.3 Pensacola Growers' Retail Farmers' Market"}
;... same as before
;  {"id" "1010546", "marketname" "54.8 Raw and Juicy Farmers Market"}]}

;; This will also work for very large payloads.


(go
  (->
    (get-json
      "https://raw.githubusercontent.com/loganpowell/geojson/master/src/data/smallGeo.json"
      false)
    (<!)
    (pprint)))

;;=> #object[cljs.core.async.impl.channels.ManyToManyChannel]
; "put? true"
; {"type" "FeatureCollection",
;  "features"
;  [{"type" "Feature",
;    "properties"
;    {"LSAD" "06",
;     "COUNTYNS" "00161528",
;     "NAME" "Barbour",
;     "GEOID" "01005",
;     "STATEFP" "01",
;     "ALAND" 2291820706,
;     "AFFGEOID" "0500000US01005",
;     "AWATER" 50864677,
;     "COUNTYFP" "005"},
;    "geometry"
;    {"type" "Polygon",
;     "coordinates"
;     [[[-85.748032 31.619181]
;       [-85.745435 31.618898]
;       ...

; ===============================
; Aside: Test the Might of your Editor :D

;; WARNING: This large (@20M) file might freeze up your machine. For me, the console.log broke my default editor (Atom), so I had to switch to the Intellij IDEA with Cursive Plugin, which works. Be warned that even when this did work, it took about 2 minutes.

(go
  (->
    (get-json
      "https://raw.githubusercontent.com/loganpowell/geojson/master/src/archive/test.geojson"
      false)
    (<!)
    (pprint)))

; ===============================


; You may be asking yourself "why would we want to use `core.async` with an http request? Why not just use callbacks?" Well, you could use callbacks, with futures (promises), but let's say we want to build in some sophisticated data transformations over your response.

; Let's do something a bit more interesting. The huge payload of data that broke my last editor wasn't just a test. We will that payload for our next example.

; Let's say we're looking to setup a new headquarters and want to create a heatmap of all US Counties to evaluate local markets that fit our existing customer demographic profiles. This tool will leverage two APIs:
; - Census Statistics, which has a public API (that you can use without a [key](https://api.census.gov/data/key_signup.html) for a pretty generous number of calls per month).)
; - A simple call to a raw GeoJSON file which has been stored in a raw format on [Github](https://github.com/loganpowell/geojson/blob/master/src/archive/test.geojson)


; ===============================
; A couple of helper functions for building a proper URL string
; ===============================

; We will have to do some "wrangling" with these data in order to get what we need: A GeoJSON payload with statistics merged into the "properties" attribute. This section is not important to your understanding of either `core.async` or `cljs-ajax` and can be comfortably skipped. However, we will need this in order to do the cool multi-API data munging later.

(def stats-key (ops/oget (env/load) ["parsed" "Census_Key_Pro"]))

(def stats-base "https://api.census.gov/data/")

(defn vec-pair->str [pair]
  (subs (str (s/join ":" pair)) 1))

; TEST
(vec-pair->str [:state "01"])
;;=> "state:01"

(defn stats-url-builder
  "Composes a URL to call Census' statistics API"
  [{:keys [vintage sourcePath geoHierarchy variables key]}]
  (str
    stats-base vintage
    "/" (s/join "/" sourcePath)
    "?get=" (s/join "," variables)
    (if (<= 2 (count geoHierarchy))
      (str "&in=" (s/join "%20" (map #(vec-pair->str % ) (butlast geoHierarchy)))
           "&for=" (vec-pair->str (last geoHierarchy)))
      (str "&for=" (vec-pair->str (first geoHierarchy))))
    "&key=" key))

; TEST
(stats-url-builder {:vintage "2016"
                    :sourcePath ["acs" "acs5"]
                    :geoHierarchy {:state "01" :county "073" :tract "00100"}
                    :variables ["B01001_001E" "B01001_001M"]
                    :key stats-key})
;;=> "https://api.census.gov/data/2016/acs/acs5?get=B01001_001E,B01001_001M&in=state:01%20county:073&for=tract:000100&key=<key>"
; Works :)

; ===============================
; Wrangling the Census statistics' API response into a proper map
; ===============================

; The response format of the Census statistics' API is a csv-like JSON format, which will make it difficult to work with despite it's clear advantage in terms of payload size. Let's create a function that takes the top row as the labels and zipmap them to the rest of the rows of the response:

; [Inspiration](https://github.com/mihi-tr/csv-map/blob/master/src/csv_map/core.clj)

(defn parse-stats-response [k c]
  (if (= :keywords k)
    (map (partial zipmap (vec (map keyword (first c)))) (rest c))
    (map (partial zipmap (first c)) (rest c))))

(parse-stats-response [["B01001_001E" "B01001_001M" "state" "county" "tract"] ["3111" "369" "01" "073" "000100"]] :keywords)

(defn get-stats
  "Composes a call and calls Census' Statistics API"
  [{:keys [vintage source geography variables key] :as args} keywords?]
  (let [call (stats-url-builder args)]
    (go
      (->
        (get-json call false)
        (<!)
        (parse-stats-response keywords?)
        (pprint)))))

; TESTS
(get-stats{:vintage "2016"
           :sourcePath ["acs" "acs5"]
           :geoHierarchy {:state "01" :county "073" :tract "000100"}
           :variables ["B01001_001E" "B01001_001M"]
           :key stats-key} :keywords)
;;=> ({:B01001_001E "3111", :B01001_001M "369", :state "01", :county "073", :tract "000100"})

(get-stats{:vintage "2016"
           :sourcePath ["acs" "acs5"]
           :geoHierarchy {:state "01" :county "073"}
           :variables ["B01001_001E" "B01001_001M"]
           :key stats-key} :keywords)
;;=> ({:B01001_001E "659096", :B01001_001M "-555555555", :state "01", :county "073"})

(get-stats{:vintage "2016"
           :sourcePath ["acs" "acs5"]
           :geoHierarchy {:state "*"}
           :variables ["B01001_001E"]
           :key stats-key} :keywords)

