(ns http.core
  (:require  [cljs.core.async
              :as async
              :refer [chan put! take! >! <! pipe timeout close! alts! dropping-buffer]]
             [cljs.core.async :refer-macros [go go-loop alt!]]
             [ajax.core :as http :refer [GET POST]]
             [cognitect.transit :as t]
             [oops.core :as obj]
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

(defn get-sushi [format handler keywords?]
  (GET
    "http://api.sushicount.com/add-piece-of-sushi/0"
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

; keywords don't apply to :transit
(get-sushi :transit #(->> (t->json %) (prn)))
;;=> "[\"^ \",\"pieces_of_sushi\",1]"

; ===============================
; Using transit writer :json-verbose for formal json
; ===============================

(defn t->json-verbose [t]
  (let [w (t/writer :json-verbose)]
    (t/write w t)))

(get-sushi :transit #(->> (t->json-verbose %) (prn)))
;;=> "{\"pieces_of_sushi\":1}"

; must use js/console.log to get non stringified json
(get-sushi :transit #(->> (t->json-verbose %) (js/console.log)))
;;=> {"pieces_of_sushi":1}

; For JavaScript digestion, use JSON.parse for easy data access
(get-sushi :transit #(->> (t->json-verbose %) (js/JSON.parse) (js/console.log)))
;;=> { pieces_of_sushi: 1 }


; Let's use an API with a little more functionality. Pickup from where we left off on our [`core.async` 101 guide](), let's use a case study for the rest of Since our sushi franchise is heavily interdependent with local farmers' markets, we'll use the USDA's farmers' markets search API.

; We'll add the `:params` argument map to our `cljs-ajax` request to provide some interface into the API. Also, since we want to do something with these data in Clojure(script), let's keyword-ize the response.

; The `zipcode` argument will translate the `:zip` key into a parameter for the REST API:
; I.e.: https://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch`?` `zip=` `zipcode`

(defn get-markets [format zipcode keywords?]
  (GET
    "https://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch"
    {:response-format format
     :handler #(pprint %)
     :keywords? keywords?
     :error-handler #(prn (str "Error!: " %))
     :params {:zip zipcode}}))


(get-markets :json 32514 true)
;;=>
; {:results
;  [{:id "1007518", :marketname "4.3 Pensacola Growers' Retail Farmers' Market"}
;   {:id "1011160", :marketname "6.3 Santa Rosa Farmers Market"}
; ...]}

(get-markets :json 32514 false)
;{"results"
; [{"id" "1007518", "marketname" "4.3 Pensacola Growers' Retail Farmers' Market"}
;  {"id" "1011160", "marketname" "6.3 Santa Rosa Farmers Market"}
; ...]}

; ===============================
; TODO: Move Transducers after chan here...
; ===============================

; By default, `cljs-ajax` uses the Google Closure library [XhrIo](https://developers.google.com/closure/library/docs/xhrio) API. If you want to use [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) API directly, add :api (js/XMLHttpRequest.) to the map. Both of these use callback APIs to do their business.


;   e88~~\  e88~-_  888-~\  e88~~8e         /~~~8e   d88~\ Y88b  / 888-~88e  e88~~\
;  d888    d888   i 888    d888  88b ____       88b C888    Y888/  888  888 d888
;  8888    8888   | 888    8888__888       e88~-888  Y88b    Y8/   888  888 8888
;  Y888    Y888   ' 888    Y888    ,      C888  888   888D    Y    888  888 Y888
;   "88__/  "88_-~  888     "88___/        "88_-888 \_88P    /     888  888  '88__/
;                                                          _/

(defn get-json->put!
  [base-url keywords?]
  (let [=resp= (chan)
        args (merge
               {:response-format  :json
                :handler          #(put! =resp= %)
                :error-handler    #(prn (str "ERROR: " %))}
               (when-let [keywords? {:keywords? keywords?}]
                 keywords?))]
    (do
      (GET base-url args)
      =resp=)))

;; Now that we're using `core.async`, we'll have to move our success-handler out of `cljs-ajax` in order  for the response that is put into the channel to be handled once it is taken out. Observe:

(go
  (->
    (get-json->put! "https://api.census.gov/data/2016/acs/acs5?get=B01001_001E,B01001_001M&in=state:01&for=county:*")
    (<!)
    (pprint)))
;;=> something like:
;[["B01001_001E" "B01001_001M" "state" "county"]
; ["55049" "-555555555" "01" "001"]
; ["199510" "-555555555" "01" "003"]
; ["26614" "-555555555" "01" "005"]
; ...]


; You may be asking yourself "why would we want to use `core.async` with an http request? Why not just use callbacks?" Well, you could use callbacks, with futures (promises), but let's say we want to build in some sophisticated data transformations over your response.

; Let's do something a bit more interesting. The huge payload of data that broke my last editor wasn't just a test. We will that payload for our next example.

; Let's say we're looking to setup a new headquarters and want to create a heatmap of all US Counties to evaluate local markets that fit our existing customer demographic profiles. This tool will leverage two APIs:
; - Census Statistics, which has a public API (that you can use without a [key](https://api.census.gov/data/key_signup.html) for a pretty generous number of calls per month).)
; - A simple call to a raw GeoJSON file which has been stored in a raw format on [Github](https://github.com/loganpowell/geojson/blob/master/src/archive/test.geojson)


; ===============================
; A couple of helper functions for building a proper URL string
; ===============================

; Unfortunately, Census' statistics API URL structure does not follow any of the conventions supported natively in `cljs-ajax`s `:vec-strategy` schemes (`:java`, `:rails`, `:indexed`). Thus, in order to make our calls to this API, we'll build a query string builder function.
;
; This section is not important to your understanding of either `core.async` or `cljs-ajax` and can be comfortably skipped. However, if you're target API does not conform to the `:vec-strategy` schemes, it might be handy for you to see some string manipulation techniques for putting together a URL.


(defn vec-pair->str [pair]
  (subs (str (s/join ":" pair)) 1))

(defn stats-url-builder
  "Composes a URL to call Census' statistics API"
  [{:keys [vintage sourcePath geoHierarchy variables key]}]
  (str
    "https://api.census.gov/data/"
    vintage
    "/" (s/join "/" sourcePath)
    "?get=" (s/join "," variables)
    (if (= 1 (count geoHierarchy))
      (str "&for=" (vec-pair->str (first geoHierarchy)))
      (str "&in=" (s/join "%20" (map #(vec-pair->str % ) (butlast geoHierarchy)))
           "&for=" (vec-pair->str (last geoHierarchy))))
    "&key=" key))

(def stats-key (obj/oget (env/load) ["parsed" "Census_Key_Pro"]))

;; EXAMPLE:
(stats-url-builder {:vintage "2016"
                    :sourcePath ["acs" "acs5"]
                    :geoHierarchy {:state "01" :county "073" :tract "000100"}
                    :variables ["B01001_001E" "B01001_001M"]
                    :key stats-key}) ;; input your key

;; Produces => "https://api.census.gov/data/2016/acs/acs5?get=B01001_001E,B01001_001M&in=state:01%20county:073&for=tract:000100&key=6980d91653a1f78acd456d9187ed28e23ea5d4e3"

;; Census's statistics API doesn't return standard JSON and thus the`keywords?` argument doesn't make a difference

; ===============================
; Wrangling the Census statistics' API response into a proper map - THE OLD FASHIONED WAY
; ===============================

; The response format of the Census statistics' API is a csv-like JSON format, which will make it difficult to work with despite it's smaller payload size. Let's create a function that takes the top row as the labels and zipmap them to the rest of the rows of the response:

; [Inspiration](https://github.com/mihi-tr/csv-map/blob/master/src/csv_map/core.clj)

;; Note: When using "threading" macros (`->` & `->>`) the value that is thread through the functions is passed as the FIRST argument, thus we're placing `rows` ahead of the `key` argument:
(defn zipmap-1st [rows key]
  (if (= :keywords key)
    (map (partial zipmap (vec (map keyword (first rows)))) (rest rows))
    (map (partial zipmap (first rows)) (rest rows))))

(defn get-stats
  "Composes a call and calls Census' Statistics API"
  [args]
  (let [url (stats-url-builder args)]
    (go
      (->
        (get-json->put! url true)
        (<!)
        (zipmap-1st :keywords) ;; <<- See note on "threading" above
        (vec)
        (pprint)))))


; EXAMPLES:
(get-stats {:vintage "2016"
            :sourcePath ["acs" "acs5"]
            :geoHierarchy {:state "01" :county "073" :tract "000100"}
            :variables ["B01001_001E" "B01001_001M"]
            :key stats-key})
;;=> #object[cljs.core.async.impl.channels.ManyToManyChannel]
; [{:B01001_001E "3111",
;   :B01001_001M "369",
;   :state "01",
;   :county "073",
;   :tract "000100"}]

(get-stats {:vintage "2016"
            :sourcePath ["acs" "acs5"]
            :geoHierarchy {:state "01" :county "*"}
            :variables ["B01001_001E"]
            :key stats-key})
;;=> #object[cljs.core.async.impl.channels.ManyToManyChannel]
; [{:B01001_001E "55049", :state "01", :county "001"
;  {:B01001_001E "199510", :state "01", :county "003"}
;  {:B01001_001E "26614", :state "01", :county "005"}
; ...]

(get-stats {:vintage "2016"
            :sourcePath ["acs" "acs5"]
            :geoHierarchy {:state "01"}
            :variables ["B01001_001E"]
            :key stats-key})
;;=> #object[cljs.core.async.impl.channels.ManyToManyChannel]
;[{:B01001_001E "4841164", :state "01"}]

(defn stats+geoids
  "
  Takes a single result map from the Census stats API and an integer denoting the number of variables the user requested.
  The integer is used to target the non-variable geographic IDs in the result, which are combined into a UID key.
  The function constructs a new map with a hierarchy containing two new parent keys.
  The top-level parent key is the composed key, which will serve in the `deep-merge` to `group-by`.
  The second-level parent key is statically set to `:properties`.
  The original map is nested into the lowest level of the new map.
  This new hierarchy will enable deep-merging of the stats with a GeoJSON `feature`s `:properties` map.
  "
  [coll vars#]
  (map (fn [item]
         {(keyword (reduce str (vals (take-last (- (count item) vars#) item))))
          {:properties item}})
       coll))
;; Help from [Stack Overflow](https://stackoverflow.com/questions/37734468/constructing-a-map-on-anonymous-function-in-clojure)

;; Example
(stats+geoids [{:B01001_001E "55049", :state "01", :county "001"}
               {:B01001_001E "199510", :state "01", :county "003"}
               {:B01001_001E "26614", :state "01", :county "005"}
               {:B01001_001E "22572", :state "01", :county "007"}
               {:B01001_001E "57704", :state "01", :county "009"}
               {:B01001_001E "10552", :state "01", :county "011"}]
              1)
;;=>
;({:01001 {:properties {:B01001_001E "55049", :state "01", :county "001"}}
; {:01003 {:properties {:B01001_001E "199510", :state "01", :county "003"}}}
; {:01005 {:properties {:B01001_001E "26614", :state "01", :county "005"}}}
; ...)

(defn get-stats->put!
  "Composes a call and calls Census' Statistics API"
  [args cb]
  (let [call (stats-url-builder args)
        vars# (count (get args :variables))]
    (go
      (let [time (js/Date.)]
        (->
          (get-json->put! call true)
          (<!)
          (zipmap-1st :keywords)
          (stats+geoids vars#)
          (vec)
          (cb))
        (js/console.log (str "get-stats->put!: Elapsed ms= " (- (js/Date.) time)))))))

;=> #object[cljs.core.async.impl.channels.ManyToManyChannel]
;[{:01001 {:properties {:B01001_001E "55049", :state "01", :county "001"}}}
; {:01003 {:properties {:B01001_001E "199510", :state "01", :county "003"}}}
; {:01005 {:properties {:B01001_001E "26614", :state "01", :county "005"}}}
; ...]

;; Now this works, but we would be creating new collections with each passing transformation through the threading macro here (`->`). How might we make this a bit more efficient?
;; Answer: Transducers!

; ~~~888~~~                                        888
;    888    888-~\   /~~~8e  888-~88e  d88~\  e88~\888 888  888  e88~~\  e88~~8e  888-~\  d88~\
;    888    888          88b 888  888 C888   d888  888 888  888 d888    d888  88b 888    C888
;    888    888     e88~-888 888  888  Y88b  8888  888 888  888 8888    8888__888 888     Y88b
;    888    888    C888  888 888  888   888D Y888  888 888  888 Y888    Y888    , 888      888D
;    888    888     "88_-888 888  888 \_88P   "88_/888 "88_-888  "88__/  '88___/  888    \_88P
;
;

; ===============================

;; A stateful transducer is needed to change the behavior based on which item in the collection we are "on".
(defn xf-zipmap-1st [rf]
  "
  Stateful transducer, which stores the first item as a list of a keys to apply (via `zipmap`) to the rest of the items in a collection. Serves to turn the Census API response into a more conventional JSON format.
  "
  (let [prep (volatile! nil)]
    (fn
      ([] (rf))
      ([result] (rf result))
      ([result item]
       (let [prev @prep]
         (if (nil? prev)
           (do
             (vreset! prep (vec (map keyword item)))
             nil)
           (rf result (zipmap prev (vec item)))))))))

;; If you want to pass an argument into your transducer, wrap it in another function, which takes the arg and returns a transducer containing it.
(defn xf-geo+stat [vars#]
  "
  A function, which returns a transducer after being passed an integer argument denoting the number of variables the user requested. The transducer is used to transform each item from the Census API response collection into a new map with a hierarchy that will enable deep-merging of the stats with a GeoJSON `feature`s `:properties` map.
  "
  (fn [rf]
    (fn
      ([] (rf))
      ([result] (rf result))
      ([result item]
       (rf result {(keyword (reduce str (vals (take-last (- (count item) vars#) item))))
                   {:properties item}})))))

;; `xf-zipmap-1st` is a transducer, which means we can use it sans `()`s, while `xf-geo+stat` RETURNS a transducer, which requires us to wrap the function in `()`s to return that internal transducer.
(defn xf-1-stat->map [vars#]
  (comp
    xf-zipmap-1st
    (xf-geo+stat vars#)))

(defn get->put!->port
  [url port]
  (let [args {:response-format :json
              :handler         #(put! port %)
              :error-handler   #(prn (str "ERROR: " %))
              :keywords        true}]
       (do
         (GET url args)
         port)))

;; When working with `core.async` it's important to understand what you expect the shape of your data flowing into your channels will look like. In the case below, a single request using `cljs-ajax` will return a list of results, so we deal with this list after it is retrieved rather than as part of the `chan` establishment. When we plan on using transducers as a way to treat a stream or flow of individual items as a collection **over time** via a channel, we can do so by adding such a transducer to the `chan` directly (e.g.: `let [port (chan 1 (xform-each-item))]`
(source async/transduce)

(defn get->chan->xfstats
  "Composes a call and calls Census' Statistics API"
  [{:keys [variables] :as args} cb]
  (let [url (stats-url-builder args)
        vars (count variables)
        port (chan)]
    (go
      (let [time (js/Date.)]
        (get->put!->port url port)
        (cb (sequence (xf-1-stat->map vars) (<! port)))
        (js/console.log (str "get->chan->xfstats: Elapsed ms= " (- (js/Date.) time)))))))

(get->chan->xfstats {:vintage "2016"
                     :sourcePath ["acs" "acs5"]
                     :geoHierarchy {:county "*"}
                     :variables ["B01001_001E"]
                     :key stats-key}
                    pprint)


(defn xf-stats->map [vars#]
  "
  A higher order transducer function, which returns a transducer after being passed an integer argument denoting the number of variables the user requested. The transducer is used to transform *the entire* Census API response collection into a new map, which will enable deep-merging of the stats with a GeoJSON `feature`s `:properties` map. Designed as a `core.async` channel transducer."
  (fn [rf]
    (fn
      ([] (rf))
      ([result] (rf result))
      ([result item]
       (rf result (transduce (xf-1-stat->map vars#) conj item))))))

(transduce (xf-stats->map 2) conj [["B01001_001E" "B01001_001M" "state" "county"]
                                   ["55049" "-555555555" "01" "001"]
                                   ["57704" "-555555555" "01" "009"]
                                   ["10552" "-555555555" "01" "011"]
                                   ["24013" "-555555555" "01" "133"]])

(defn get->chanxf->stats
  "Composes a call and calls Census' Statistics API"
  [{:keys [variables] :as args} cb]
  (let [url   (stats-url-builder args)
        vars# (count variables)
        =resp=  (chan 1 (xf-stats->map vars#) #(pprint "fail! " %))]
    (go
      (let [time (js/Date.)]
        (get->put!->port url =resp=)
        (cb (<! =resp=))
        (js/console.log (str "get->chanxf->stats: Elapsed ms= " (- (js/Date.) time)))))))

; ===============================
; Comparing the speed of our solutions against each other
; ===============================

;; for all counties: "get->chanxf->stats: Elapsed ms= 6956"
(get->chanxf->stats {:vintage "2016"
                     :sourcePath ["acs" "acs5"]
                     :geoHierarchy {:county "*"}
                     :variables ["B01001_001E"]
                     :key stats-key}
                    pprint)
;;=>
;({:01133 {:properties {:B01001_001E "24013", :state "01", :county "133"}}}
; {:01131 {:properties {:B01001_001E "11119", :state "01", :county "131"}}}
; {:01129 {:properties {:B01001_001E "16909", :state "01", :county "129"}}}
; {:01127 {:properties {:B01001_001E "65593", :state "01", :county "127"}}}
; ...)

;; for all counties: "get->chan->xfstats: Elapsed ms= 6496"
(get->chan->xfstats {:vintage "2016"
                     :sourcePath ["acs" "acs5"]
                     :geoHierarchy {:county "*"}
                     :variables ["B01001_001E"]
                     :key stats-key}
                    pprint)
;;=>
;({:01001{:properties {:B01001_001E "55049", :state "01", :county "001"}}}
; {:01003{:properties {:B01001_001E "199510", :state "01", :county "003"}}}
; {:01005{:properties {:B01001_001E "26614", :state "01", :county "005"}}}
; {:01007{:properties {:B01001_001E "22572", :state "01", :county "007"}}}
; ...)

;; for all counties: "get-stats->put!: Elapsed ms= 7929"
(get-stats->put! {:vintage "2016"
                  :sourcePath ["acs" "acs5"]
                  :geoHierarchy {:county "*"}
                  :variables ["B01001_001E"]
                  :key stats-key}
                 pprint)
;;=>
;[{:01001{:properties {:B01001_001E "55049", :state "01", :county "001"}}}
; {:01003{:properties {:B01001_001E "199510", :state "01", :county "003"}}}
; {:01005{:properties {:B01001_001E "26614", :state "01", :county "005"}}}
; {:01007{:properties {:B01001_001E "22572", :state "01", :county "007"}}}
; ...]

; Read more on the [anatomy of transducers](https://bendyworks.com/blog/transducers-clojures-next-big-idea)
; Stateful [transducers examples](http://exupero.org/hazard/post/signal-processing/)
; More [transducers](http://matthiasnehlsen.com/blog/2014/10/06/Building-Systems-in-Clojure-2/)
; And even [more](http://blog.eikeland.se/2014/08/14/transducers/)



;; Deep Merge function [stolen](https://gist.github.com/danielpcox/c70a8aa2c36766200a95)
(defn deep-merge
  "Recursively merges two maps together along matching key paths. Implements `clojure/core.merge-with`."
  [v & vs]
  (letfn [(rec-merge [v1 v2]
            (if (and (map? v1) (map? v2))
              (merge-with deep-merge v1 v2)
              v2))]
    (if (some identity vs)
      (reduce #(rec-merge %1 %2) v vs)
      v)))

(defn merge-geo+stats
  [stats-map geo-map]
  (for [[_ maps] (group-by keys (concat stats-map geo-map))]
    (apply deep-merge maps)))

(def stats-x [{:01001 {:properties {:B01001_001E "55049"}}}
              {:01005 {:properties {:B01001_001E "26614"
                                    :test1 "string"
                                    :test2 91}}}])

; Transformed geojson map
(def geo-x [{:01005 {:type "Feature",
                     :properties {:STATEFP "01",
                                  :LSAD "06",
                                  :COUNTYNS "00161528",
                                  :AFFGEOID "0500000US01005",
                                  :GEOID "01005",
                                  :AWATER 50864677,
                                  :COUNTYFP "005",
                                  :NAME "Barbour",
                                  :ALAND 2291820706},
                     :geometry {:type "Polygon",
                                :coordinates
                                      [[[-85.748032 31.619181
                                         [-85.745435 31.618898]
                                         [-85.742651 31.621259]]]]}}}
            {:01003 {:type "Feature",
                     :properties {:STATEFP "01",
                                  :LSAD "06",
                                  :COUNTYNS "00161528",
                                  :AFFGEOID "0500000US01005",
                                  :GEOID "01003",
                                  :AWATER 50864677,
                                  :COUNTYFP "005",
                                  :NAME "Barbour",
                                  :ALAND 2291820706},
                     :geometry {:type "Polygon",
                                :coordinates
                                      [[[-85.748032 31.619181]
                                        [-85.745435 31.618898]
                                        [-85.742651 31.621259]]]}}}])

(merge-geo+stats stats-x geo-x)


; ===============================
; TODO: Merging Two Channels ::START
; ===============================

(defn merge-geo-stats
  "
  Takes an arg map to configure a call the Census' statistics API as well as a matching GeoJSON file.
  The match is based on `vintage` and `geoHierarchy` of the arg map.
  The calls are spun up (simultaneously) into parallel `core.async` processes for speed.
  Both calls return their results via a `core.async` channel (`chan`) - for later merger - via `put!`.
  The results from the Census stats `chan` are passed into a local `chan` to store the state.
  A `deep-merge` into the local `chan` combines the stats results with the GeoJSON values.
  Note that the GeoJSON results can be a superset of the Census stats' results.
  Thus, superfluous GeoJSON values are filtered out via a `remove` operation on the collection in the local `chan`.
  "
  [args]
  (let [stats-call (stats-url-builder args)
        vars# (count (get args :variables))
        =features= (chan 1)
        =stats= (chan 1 (xf-stats->map vars#) #(pprint "fail! " %))]
    (go (get->put!->port "https://raw.githubusercontent.com/loganpowell/geojson/master/src/data/smallGeo.json" =features=))
    (go (get->put!->port stats-call =stats=))))




(go
  (->
    (get-json->put! "https://raw.githubusercontent.com/loganpowell/geojson/master/src/data/smallGeo.json" true)
    (<!)
    (get-in [:features])
    (pprint)))
;;=> #object[cljs.core.async.impl.channels.ManyToManyChannel]
;{:type "FeatureCollection",
; :features
;  [{:type "Feature",
;    :properties
;     {:STATEFP "01",}
;      :LSAD "06",
;      :COUNTYNS "00161528",
;      :AFFGEOID "0500000US01005",
;      :GEOID "01005",

; ===============================
; TODO: Merging Two Channels :: END
; ===============================



(merge-geo-stats {:vintage "2016"
                  :sourcePath ["acs" "acs5"]
                  :geoHierarchy {:state "01" :county "*"}
                  :variables ["B01001_001E"]
                  :key stats-key})

(get-json->put! "https://raw.githubusercontent.com/loganpowell/geojson/master/src/data/smallGeo.json" true)
(def example-args {:vintage "2016"
                   :sourcePath ["acs" "acs5"]
                   :geoHierarchy {:state "01" :county "*"}
                   :variables ["B01001_001E" "2" "3"]
                   :key stats-key})

(deep-merge-geo-stats {:vintage "2016"
                       :sourcePath ["acs" "acs5"]
                       :geoHierarchy {:state "01" :county "*"}
                       :variables ["B01001_001E"]
                       :key stats-key})



; ===============================
;  TEST DATA
; ===============================


(go
  (->
    (get-json->put! "https://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=32514" false)
    (<!)
    (pprint)))
;;=> #object[cljs.core.async.impl.channels.ManyToManyChannel]
;{:results
; [{:id "1007518",
;   :marketname "4.3 Pensacola Growers' Retail Farmers' Market"}
;  {:id "1011160", :marketname "6.3 Santa Rosa Farmers Market"}
;  {:id "1005683", :marketname "6.5 The Market @ Saint Monica's"}
;  {:id "1004835", :marketname "7.7 Palafox Market"}
;  {:id "1007779", :marketname "8.2 Port City Market"}
;  {:id "1006840", :marketname "13.6 Riverwalk Market"}
; ...
;  {:id "1010546", :marketname "54.8 Raw and Juicy Farmers Market"}]}

;; This will also work for very large payloads.
(go
  (->
    (get-json->put! "https://raw.githubusercontent.com/loganpowell/geojson/master/src/data/smallGeo.json" true)
    (<!)
    (pprint)))
;;=> #object[cljs.core.async.impl.channels.ManyToManyChannel]
;{:type "FeatureCollection",
; :features
;  [{:type "Feature",
;    :properties
;     {:STATEFP "01",}
;      :LSAD "06",
;      :COUNTYNS "00161528",
;      :AFFGEOID "0500000US01005",
;      :GEOID "01005",
;      :AWATER 50864677,
;      :COUNTYFP "005",
;      :NAME "Barbour",
;      :ALAND 2291820706},
;    :geometry
;     {:type "Polygon",}
;      :coordinates
;      [[[-85.748032 31.619181]
;        [-85.745435 31.618898]
;        [-85.742651 31.621259]
;        [-85.74174 31.619403]
;        [-85.739813 31.62181]
;        [-85.739921 31.623322]
;        [-85.736932 31.623691]
;        [-85.731172 31.62994]
;        [-85.729832 31.632373]
;       ...


(def stats-data [{:B01001_001E "55049", :state "01", :county "001"}
                 {:B01001_001E "199510", :state "01", :county "003"}
                 {:B01001_001E "26614", :state "01", :county "005"}
                 {:B01001_001E "22572", :state "01", :county "007"}
                 {:B01001_001E "57704", :state "01", :county "009"}
                 {:B01001_001E "10552", :state "01", :county "011"}])

(def geojson-data {:type "FeatureCollection",
                   :features [{:type "Feature",
                               :properties {:STATEFP "01",
                                            :LSAD "06",
                                            :COUNTYNS "00161528",
                                            :AFFGEOID "0500000US01005",
                                            :GEOID "01005",
                                            :AWATER 50864677,
                                            :COUNTYFP "005",
                                            :NAME "Barbour",
                                            :ALAND 2291820706},
                               :geometry {:type "Polygon",
                                          :coordinates
                                                [[[-85.748032 31.619181]
                                                  [-85.745435 31.618898]
                                                  [-85.742651 31.621259]]]}}]})

;; Example
; Transformed stats map
(def stats-x [{:01001 {:properties {:B01001_001E "55049"}}}
              {:01005 {:properties {:B01001_001E "26614"
                                    :test1 "string"
                                    :test2 91}}}])

; Transformed geojson map
(def geo-x [{:01005 {:type "Feature",
                     :properties {:STATEFP "01",
                                  :LSAD "06",
                                  :COUNTYNS "00161528",
                                  :AFFGEOID "0500000US01005",
                                  :GEOID "01005",
                                  :AWATER 50864677,
                                  :COUNTYFP "005",
                                  :NAME "Barbour",
                                  :ALAND 2291820706},
                     :geometry {:type "Polygon",
                                :coordinates
                                      [[[-85.748032 31.619181
                                           [-85.745435 31.618898]
                                           [-85.742651 31.621259]]]]}}}
            {:01003 {:type "Feature",
                     :properties {:STATEFP "01",
                                  :LSAD "06",
                                  :COUNTYNS "00161528",
                                  :AFFGEOID "0500000US01005",
                                  :GEOID "01003",
                                  :AWATER 50864677,
                                  :COUNTYFP "005",
                                  :NAME "Barbour",
                                  :ALAND 2291820706},
                     :geometry {:type "Polygon",
                                :coordinates
                                      [[[-85.748032 31.619181]
                                        [-85.745435 31.618898]
                                        [-85.742651 31.621259]]]}}}])


(merge-geo+stats stats-x geo-x)

(transduce xf-zipmap-1st
           conj
           [["B01001_001E" "B01001_001M" "state" "county"]
            ["55049" "-555555555" "01" "001"]
            ["199510" "-555555555" "01" "003"]
            ["26614" "-555555555" "01" "005"]
            ["22572" "-555555555" "01" "007"]
            ["57704" "-555555555" "01" "009"]
            ["10552" "-555555555" "01" "011"]
            ["24013" "-555555555" "01" "133"]])

(transduce (xf-geo+stat 2)
           conj
           [{:B01001_001E "55049", :B01001_001M "-555555555", :state "01", :county "001"}
            {:B01001_001E "199510", :B01001_001M "-555555555", :state "01", :county "003"}
            {:B01001_001E "26614", :B01001_001M "-555555555", :state "01", :county "005"}
            {:B01001_001E "22572", :B01001_001M "-555555555", :state "01", :county "007"}
            {:B01001_001E "57704", :B01001_001M "-555555555", :state "01", :county "009"}
            {:B01001_001E "10552", :B01001_001M "-555555555", :state "01", :county "011"}
            {:B01001_001E "24013", :B01001_001M "-555555555", :state "01", :county "133"}])

;; `transducer` is not lazy. It is analogous to the standard `reduce` function.
(transduce (xf-1-stat->map 2)
           conj
           [["B01001_001E" "B01001_001M" "state" "county"]
            ["55049" "-555555555" "01" "001"]
            ["57704" "-555555555" "01" "009"]
            ["10552" "-555555555" "01" "011"]
            ["24013" "-555555555" "01" "133"]])
;=>
;({:01133 {:properties {:B01001_001E "24013", :B01001_001M "-555555555", :state "01", :county "133"}}
;  {:01011 {:properties {:B01001_001E "10552", :B01001_001M "-555555555", :state "01", :county "011"}}}
;  {:01009 {:properties {:B01001_001E "57704", :B01001_001M "-555555555", :state "01", :county "009"}}}
;  {:01001 {:properties {:B01001_001E "55049", :B01001_001M "-555555555", :state "01", :county "001"}}}})