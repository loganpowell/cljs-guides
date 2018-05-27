(ns guides.http
    (:require [ajax.core :refer [GET POST]])
    (:require [cljs.data.json :as json])
    (:require fs))

(defn handler [response]
  (let [store (atom)]
    (swap! store assoc :response response)
    (.log js/console (str response)))
  @store)

(handler "testing")

(defn errorHandler [{:keys [status status-text]}]
 (.log js/console
  (str "something bad happened: " status " " status-text)))

(def censusBaseUrl "https://api.census.gov/data.json")

(GET censusBaseUrl {:handler handler
                      :error-handler error-handler
                      :response-format :json
                      :keywords? true})

(defn discovery "Fetches the base URL from api.census.gov's data API"
  [store]
  (GET "https://api.census.gov/data.json"
            ; create a callback to handle the response
           {:handler (fn [phones] (swap! store assoc :phones phones))
            :error-handler (fn [details] (.warn js/console (str "Failed to refresh phones from server: " details)))
            :response-format :json, :keywords? true}))
