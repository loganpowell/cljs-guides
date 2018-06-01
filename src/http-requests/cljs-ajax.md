# Getting Started with `cljs-ajax` Guide

[`cljs-ajax`](https://github.com/JulianBirch/cljs-ajax) is a Clojure(script) http fetch solution.

## Introduction from the [`cljs-ajax` README.md](https://github.com/JulianBirch/cljs-ajax/blob/master/README.md):

> The client provides an easy way to send Ajax requests to the server using GET, POST, and PUT functions. It also provides a simple way using ajax-request. All requests are asynchronous, accepting callback functions for response and error handling.

> There are four formats currently supported for communicating with the server: `:transit`, `:json`, `:text` and `:raw`. (`:text` will send parameters up using normal form submission and return the raw text. :raw does the same, but on the JVM it returns the body's java.io.InputStream and doesn't close it.)

Upon Google'ing for a while, I learned that there are very few, scattered guides for using `cljs-ajax` (a Clojure(script) library for communicating with HTTP endpoints). There's its [README in Github](https://github.com/JulianBirch/cljs-ajax/blob/master/README.md) and a [blog post](https://yogthos.net/posts/2013-04-09-Introducing-cljs-ajax.html) from 2013 (release article), but - beyond that - very little, so I decided to give back to the community that's given so much to its members by adding another drop to the bucket.

## Overview

`cljs-ajax` provides three primary functions (`GET`, `POST`, `PUT`) each of which take two arguments:

- a `URI`
- a Clojure(Script) map (`{:key value}`), which provision the settings options. We will cover the following settings in this guide:
  - `:handler`: Most important setting - provide a callback function to handle the response if your HTTP call is successful.
  - `:error-handler`: The handler function for errors, should accept an error response (detailed below). If you do not provide an error-handler, the contents of the `default-error-handler` atom will be called instead. By default this is println for Clojure and writes an error to the console for ClojureScript.

[Find more settings options in the `cljs-ajax` docs](https://github.com/JulianBirch/cljs-ajax/blob/master/README.md#getpostput)

# Exercise: Parsing Clojure(Script) Docs

## The `:handler` Setting
We will start by using `cljs-ajax` to do a simple HTTP fetch (`GET`) for the `cljs.core.async` docs and print to the response to the console.

```clj
(ns guides.http
    (:require [ajax.core :refer [GET POST]])
    (:require fs))

(def cljs-async-docs "https://raw.githubusercontent.com/clojure/core.async/master/src/main/clojure/cljs/core/async.cljs")

(defn basic-handler
  [response]
  (.log js/console (str response)))

(GET cljs-async-docs {:handler basic-handler})
```
Which should log in your console:
```
(ns cljs.core.async
    (:refer-clojure :exclude [reduce transduce into merge map take partition partition-by])
    (:require [cljs.core.async.impl.protocols :as impl]
              [cljs.core.async.impl.channels :as channels]
              [cljs.core.async.impl.buffers :as buffers]
              [cljs.core.async.impl.timers :as timers]
              [cljs.core.async.impl.dispatch :as dispatch]
              [cljs.core.async.impl.ioc-helpers :as helpers])
    (:require-macros [cljs.core.async.impl.ioc-macros :as ioc]
                     [cljs.core.async :refer [go go-loop]]))

(defn- fn-handler
  ([f] (fn-handler f true))
  ([f blockable]
   (reify
     impl/Handler
     (active? [_] true)
     (blockable? [_] blockable)
     (commit [_] f))))

(defn buffer
  "Returns a fixed buffer of size n. When full, puts will block/park."
  [n]
  (buffers/fixed-buffer n))

...

```

## The `:error-handler` Setting

Now, let's say we hit a dead endpoint. How do we deal with that? If we just maul the URL we defined, and call the functions again, we get the `default-error-handler` response provided by `cljs-ajax`:

```
{ meta: null,
  cnt: 4,
  arr:
   [ { ns: null,
       name: 'status',
       fqn: 'status',
       _hash: -1997798413,
       'cljs$lang$protocol_mask$partition0$': 2153775105,
       'cljs$lang$protocol_mask$partition1$': 4096 },
     404,
     { ns: null,
       name: 'status-text',
       fqn: 'status-text',
       _hash: -1834235478,
       'cljs$lang$protocol_mask$partition0$': 2153775105,
       'cljs$lang$protocol_mask$partition1$': 4096 },
     null,
     { ns: null,
       name: 'failure',
       fqn: 'failure',
       _hash: 720415879,
       'cljs$lang$protocol_mask$partition0$': 2153775105,
       'cljs$lang$protocol_mask$partition1$': 4096 },
     { ns: null,
       name: 'error',
       fqn: 'error',
       _hash: -978969032,
       'cljs$lang$protocol_mask$partition0$': 2153775105,
       'cljs$lang$protocol_mask$partition1$': 4096 },
     { ns: null,
       name: 'response',
       fqn: 'response',
       _hash: -1068424192,
       'cljs$lang$protocol_mask$partition0$': 2153775105,
       'cljs$lang$protocol_mask$partition1$': 4096 },
     '404: Not Found\n' ],
  __hash: null,
  'cljs$lang$protocol_mask$partition0$': 16647951,
  'cljs$lang$protocol_mask$partition1$': 139268 }
```

This isn't very usable for our purposes, so let's make an error-handler:

```clj
; Destructure the response object to get the :status and :status-text
(defn basic-error-handler [{:keys [status status-text]}]
 (.log js/console
    (str "AJAX Error Status: " status " -> " status-text)))

(GET bad-url
  {:handler basic-handler
   :error-handler basic-error-handler})
```
Now, execute the new `GET` in your REPL and - depending on how you messed up the URL, you should get something like:

```
AJAX Error Status: 0 -> Request failed.
```
or
```
AJAX Error Status: 400
```

If you got this far, great! Now, if you'd like to do some more advanced stuff, move on to learn [how to use `cljs-ajax` with `core.async`](../http-async/guide-async-http.md).
