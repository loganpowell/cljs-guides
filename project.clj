(defproject cljs/guides "0.0.1"
  :source-paths
  ["src"]
  :nrepl {:port 3333}
  :dependencies
  [[thheller/shadow-cljs "1.0.20170629"]
   [org.clojure/core.async "0.4.474"]
   [cljs-http "0.1.45"]
   [cljs-ajax "0.7.3"]
   [com.cognitect/transit-cljs "0.8.256"]]
  :builds
  {:lib {:target     :node-library
         :output-dir "public/node"
         :output-to "public/node/examples.js"
         :compiler-options {:pretty-print true}
         :exports {:guides guides.core/node}}})