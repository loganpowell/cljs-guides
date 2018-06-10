(ns core-async.core
  (:require  [cljs.core.async :refer [chan put! take! >! <! buffer dropping-buffer sliding-buffer timeout close! alts!]]
             [cljs.core.async :refer-macros [go go-loop alt!]])
  (:use [clojure.repl :only (source)]))


; ANSII ART courtesy: http://patorjk.com/software/taag/#p=display&h=2&v=0&f=Bolger&t=Buffer

; Convenience utilities (you'll want these handy at the top of the file for later, but we'll get to them then)

; ===============================
; Orders Utils
; ===============================

(defn take-logger [order]
  (prn (str "order taken: " order)))

(defn put-logger [boolean]
  (prn (str "order put? " boolean)))

(defn put!-order [channel order]
  (put! channel order put-logger))

(defn take!-order [channel]
  (take! channel take-logger))


;         888
;  e88~~\ 888-~88e   /~~~8e  888-~88e
; d888    888  888       88b 888  888
; 8888    888  888  e88~-888 888  888
; Y888    888  888 C888  888 888  888
;  "88__/ 888  888  "88_-888 888  888

;                      d8    d8b
; 888-~88e  888  888 _d88__ !Y88!
; 888  888b 888  888  888    Y8Y
; 888  8888 888  888  888     8
; 888  888P 888  888  888     e
; 888-_88"  "88_-888  "88_/  "8"
; 888
;
;   d8             888   _              d8b
; _d88__   /~~~8e  888 e~ ~   e88~~8e  !Y88!
;  888         88b 888d8b    d888  88b  Y8Y
;  888    e88~-888 888Y88b   8888__888   8
;  888   C888  888 888 Y88b  Y888    ,   e
;  "88_/  "88_-888 888  Y88b  "88___/   "8"
;

; ===============================
; One-time Async Orders on a `chan` with `put!` and `take!`
; ===============================

(source chan)
(comment
  (defn chan
    "Creates a channel with an optional buffer, an optional transducer (like `(map f)`, `(filter p)` etc or a composition thereof), and an optional exception handler. If `buf-or-n` is a number, will create and use a fixed buffer of that size. If a transducer is supplied a buffer must be specified. `ex-handler` must be a fn of one argument - if an exception occurs during transformation it will be called with the thrown value as an argument, and any non-nil return value will be placed in the channel."
    ([] (chan nil))
    ([buf-or-n] (chan buf-or-n nil nil))
    ([buf-or-n xform] (chan buf-or-n xform nil))
    ([buf-or-n xform ex-handler]
     (let [buf-or-n (if (= buf-or-n 0)
                      nil
                      buf-or-n)]
       (when xform (assert buf-or-n "buffer must be supplied when transducer is"))
       (channels/chan (if (number? buf-or-n)
                        (buffer buf-or-n)
                        buf-or-n)
                      xform
                      ex-handler)))))

; Create a basic channel
(def bufferless-chan (chan))

(put!
 bufferless-chan ; channel
 "Futo Maki" ; order
 #(prn (str "order put? " %))) ; callback
;;=> true ; <- pending put

(put!
 bufferless-chan ; channel
 "Vegan Spider" ; order
 #(prn (str "order put? " %))) ; callback
;;=> true ; <- pending put

(take!
  bufferless-chan ; channel
  #(prn (str "order taken: " %))) ; callback
; take 1) =>
; "order taken: Futo Maki"
; "order put? true"
; nil

; take 2) =>
; "order taken: Vegan Spider"
; "order put? true"
; nil

; take 3) =>
; nil ; <- pending take

; eval put! function again =>
; "order put? true"
; "order taken: Vegan Spider"
; true

(source put!)
(comment
  (defn put!
    "Asynchronously puts a `val` into `port`, calling `fn1` (if supplied) when complete. `nil` values are not allowed. Will throw if closed. If `on-caller?` (default `true`) is `true`, and the put is immediately accepted, will call `fn1` on calling thread.  Returns `nil`."
    ([port val
       (if-let [ret (impl/put! port val fhnop)]
         @ret
         true)])
    ([port val fn1] (put! port val fn1 true))
    ([port val fn1 on-caller?
       (if-let [retb (impl/put! port val (fn-handler fn1))]
         (let [ret @retb]
           (if on-caller?
             (fn1 ret)
             (dispatch/run #(fn1 ret)))
           ret)
         true)])))

(source take!)
(comment
 (defn take!
   "Asynchronously takes a `val` from `port`, passing to `fn1`. Will pass `nil` if closed. If `on-caller?` (default `true`) is `true`, and value is immediately available, will call `fn1` on calling thread. Returns `nil.`"
   ([port fn1] (take! port fn1 true))
   ([port fn1 on-caller?
      (let [ret (impl/take! port (fn-handler fn1))]
        (when ret
          (let [val @ret]
            (if on-caller?
              (fn1 val)
              (dispatch/run #(fn1 val)))))
        nil)])))


; ===============================
; Robo Orders Overflow
; ===============================

(def bufferless-chan (chan))

; What happens if we got one of those infamous robo-dialers, just spamming away at the phone line trying to sell us timeshares? Well, with our simple `chan` our line would overflow.

(defn bot-orders [channel order]
  (dotimes [x 1030]
    (put!-order channel order)))

(bot-orders bufferless-chan "Sushi!")
;;=> Error: Assert failed: No more than 1024 pending puts are allowed on a single channel. Consider using a windowed buffer. (< (.-length puts) impl/MAX-QUEUE-SIZE)



; 888~~\             88~\   88~\
; 888   | 888  888 _888__ _888__  e88~~8e  888-~\  d88~\
; 888 _/  888  888  888    888   d888  88b 888    C888
; 888  \  888  888  888    888   8888__888 888     Y88b
; 888   | 888  888  888    888   Y888    , 888      888D
; 888__/  "88_-888  888    888    "88___/  888    \_88P

; ===============================
; Robo Orders with a Fixed Buffer
; ===============================

(source buffer)
(comment
  (defn buffer
    "Returns a fixed buffer of size `n`. When full, puts will block/park."
    [n]
    (buffers/fixed-buffer n)))

; There are two ways to create a channel with a fixed buffer. One is by explicitly using the `buffer` funcction. The other is just to pass an integer as an argument to a basic channel like so:

(def fixed-chan (chan 10)) ; buffer = 10 values

; eval at will
(bot-orders fixed-chan "Sushi!")
;; => "order put? true"
;; => "order put? true"
;; => "order put? true"
; ...7 more
; nil


; eval at will:
(take!-order fixed-chan)
; takes 1 - 1020) =>
; "order taken: Sushi!"
; "order put? true"
; nil

; take 1021) =>
; "order taken: Sushi!"
; nil


(defn put!-n-order [channel order n]
  (put! channel (str "#: " n " order: " order) put-logger))

(defn IHOS-orders [channel order]
  (dotimes [x 2100] ; lots-o'-orders
    (put!-n-order channel order x)))

; refresh (re-eval) our fixed-chan
(def fixed-chan (chan 10)) ; buffer = 10 put values

(IHOS-orders fixed-chan "Nigiri!")
;;=>
; "order put? true"
; "order put? true"
; "order put? true"
; "order put? true"
; "order put? true"
; "order put? true"
; "order put? true"
; "order put? true"
; "order put? true"
; "order put? true"
; ...
; Error: Assert failed: No more than 1024 pending puts are allowed on a single channel. Consider using a windowed buffer. (< (.-length puts) impl/MAX-QUEUE-SIZE) ...


(take!-order fixed-chan)
;; =>
; "order taken: #: 0 order: Nigiri!"
; "order put? true"
; ...


; ===============================
; Handling Orders Deluge with a `sliding-buffer` (Drop Oldest Puts)
; ===============================


(source sliding-buffer)
(comment
  (defn sliding-buffer)
  "Returns a `buffer` of size `n`. When full, puts will complete, and be buffered, but oldest elements in buffer will be dropped (not transferred)."
  [n]
  (buffers/sliding-buffer n))

(def slide-chan (chan (sliding-buffer 10))) ; buffer = 10 put values

; Warning: Big log (and I don't mean the song by Robert Plant. That would be cool though....) ahead!
(IHOS-orders slide-chan "Sashimi")
; "order put? true"
; "order put? true"
; ... **2088 more**

(take!-order slide-chan)
; take 1) => "order taken: #: 2090 order: Nigiri!"
; nil
; take 2) => "order taken: #: 2091 order: Nigiri!"
; nil
; ...
; take 10) => "order taken: #: 2099 order: Nigiri!"
; nil
; take 11) =>  nil

; ===============================
; Handling Traffic with a `dropping-buffer` (Drop Latest Puts)
; ===============================

(source dropping-buffer)
(comment
  (defn dropping-buffer
    "Returns a buffer of size `n`. When full, puts will complete but val will be dropped (no transfer)."
    [n]
    (buffers/dropping-buffer n)))

(def drop-chan (chan (dropping-buffer 10)))

(IHOS-orders drop-chan "Tofu Katsu")
; "order put? true"
; "order put? true"
; ... **2088 more**

(take!-order drop-chan)
; take 1) => "order taken: #: 0 order: Tofu Katsu"
; nil
; take 2) => "order taken: #: 1 order: Tofu Katsu"
; nil
; ...
; take 10) => "order taken: #: 9 order: Tofu Katsu"


; 888~~\                    888   _
; 888   |   /~~~8e   e88~~\ 888 e~ ~  888-~88e  888-~\  e88~~8e   d88~\  d88~\ 888  888 888-~\  e88~~8e
; 888 _/        88b d888    888d8b    888  888b 888    d888  88b C888   C888   888  888 888    d888  88b
; 888  \   e88~-888 8888    888Y88b   888  8888 888    8888__888  Y88b   Y88b  888  888 888    8888__888
; 888   | C888  888 Y888    888 Y88b  888  888P 888    Y888    ,   888D   888D 888  888 888    Y888    ,
; 888__/   "88_-888  "88__/ 888  Y88b 888-_88"  888     "88___/  \_88P  \_88P  "88_-888 888     "88___
;                                     888

;       /               ,d8P\         -_      d8b
; e88~88e  e88~-_       888b |          ~-_  !Y88!
; 888 888 d888   i      `Y88X              >  Y8Y
; "88_88" 8888   |       /Y88b/         _-~    8
;  /      Y888   '      | `Y88b       -~       e
; Cb       "88_-~        \_/Y88b              "8"
;  Y8"8D

; ===============================
; Burst Orders with (`go`) Backpressure Upstream (`>!`) and Async Downstream (`take!`)
; ===============================

(source go)
(comment
 (defmacro go
  "Asynchronously executes the `body`, returning immediately to the calling thread. Additionally, any visible calls to `<!`, `>!` and `alt!/alts!` channel operations within the body will block (if necessary) by 'parking' the calling thread rather than tying up an OS thread (or the only JS thread when in ClojureScript). Upon completion of the operation, the `body` will be resumed.

  Returns a channel which will receive the result of the `body` when completed"
  [& body]
  `(let [c# (cljs.core.async/chan 1)]
     (cljs.core.async.impl.dispatch/run
      (fn []
        (let [f# ~(ioc/state-machine body 1 &env ioc/async-custom-terminators)
              state# (-> (f#)
                         (ioc/aset-all! cljs.core.async.impl.ioc-helpers/USER-START-IDX c#))]
          (cljs.core.async.impl.ioc-helpers/run-state-machine-wrapped state#))))
     c#)))

(source >!)
(comment
  (defn >!
    "puts a `val` into `port`. nil values are not allowed. Must be called inside a `(go ...)` block. Will park if no buffer space is available. Returns `true` unless `port` is already closed."
    [port val]
    (throw (js/Error. ">! used not in (go ...) block"))))

; ===============================
; `go` caveat (stops translation at fn boundaries)

(comment
  (defn >!-order [channel order count]
    (put-logger (>! channel (str "#: " count " order: " order))))

  (defn backpressured-orders [channel order]
    (go
      (dotimes [x 2100] ; increase number of bot orders
        (>!-order channel order x)))))

; => Error: >! used not in (go ...) block
; ===============================

(defn backpressured-orders [channel order]
  (go
    (dotimes [x 2100] ; increase number of bot orders
      (put-logger (>! channel (str "#: " x " order: " order))))))

(def burst-chan (chan 50))


(defn burst-take! [channel]
  (dotimes [x 50] ; increase number of bot orders
    (take!-order channel)))

(backpressured-orders burst-chan "Umami Tamago")
; =>
; "order put? true"
; "order put? true"
; ... 48 more

(burst-take! burst-chan)
; FIRST EVAL =>
; "order taken: #: 0 order: Umami Tamago"
; ...
; "order taken: #: 49 order: Umami Tamago"
; "order put? true"
; "order put? true"
; ... 48 more

; SECOND EVAL =>
; "order taken: #: 50 order: Umami Tamago"
; ...
; "order taken: #: 99 order: Umami Tamago"
; "order put? true"
; "order put? true"
; ... 48 more

; ===============================
; Burst Orders with Backpressure Upstream (`>!`), "Parking" Downstream (`<!`)
; ===============================

; We get an immaterial difference when using "blocking" syntax downstream

(source <!)
(comment
  (defn <!
    "takes a val from `port`. Must be called inside a `(go ...)` block. Will return nil if closed. Will park if nothing is available. Returns `true` unless port is already closed"
    [port]
    (throw (js/Error. "<! used not in (go ...) block"))))

(def burst-chan (chan 50))

(defn burst-<! [channel]
  (go
    (dotimes [x 50] ; increase number of bot orders
      (take-logger (<! channel)))))

(backpressured-orders burst-chan "Umami Tamago")
; same as before
(burst-<! burst-chan)
; same as before

; ===============================
; Burst Orders with Async Upstream (`put!`) Downstream "Parking" (`<!`)
; ===============================

(def burst-chan (chan 50))

(IHOS-orders burst-chan "Miso Soup!")
; Old faithful:
; Error: Assert failed: No more than 1024 pending puts are allowed on a single channel. Consider using a windowed buffer. (< (.-length puts) impl/MAX-QUEUE-SIZE)

(burst-<! burst-chan)
; No bueno


;         888                            d8b
;  e88~~\ 888  e88~-_   d88~\  e88~~8e  !Y88!
; d888    888 d888   i C888   d888  88b  Y8Y
; 8888    888 8888   |  Y88b  8888__888   8
; Y888    888 Y888   '   888D Y888    ,   e
;  "88__/ 888  "88_-~  \_88P   "88___/   "8'

; ===============================
; Shutdown Orders with `close!`
; ===============================

(source close!)
(comment
 (defn close!
   "Closes a channel. The channel will no longer accept any puts (they will be ignored). Data in the channel remains available for taking, until exhausted, after which takes will return nil. If there are any pending takes, they will be dispatched with nil. Closing a closed channel is a no-op. Returns nil. Logically closing happens after all puts have been delivered. Therefore, any blocked or parked puts will remain blocked/parked until a taker releases them."
   ([port]
    (impl/close! port))))

(defn max-order [channel order]
  (go
    (dotimes [x 12]
      (put-logger (>! channel (str "#: " x " order: " order))))
    (close! channel)))

(def capacity (chan 5))

(defn take!-til-closed [channel]
  (dotimes [x 5]
    (take!-order channel)))

(max-order capacity "Wildcard")
;;=>
; "order put? true"
; "order put? true"
; "order put? true"
; "order put? true"
; "order put? true"

(take!-til-closed capacity)
;; take 1) =>
; "order taken: #: 0 order: Wildcard"
; ...
; "order put? true"
; ...
; nil

;; take 2) =>
; "order taken: #: 5 order: Wildcard"
; ...
; "order put? true"
; ...
; nil

;; take 3) =>
; "order taken: #: 10 order: Wildcard"
; "order taken: #: 11 order: Wildcard"
; "order taken: "
; "order taken: "
; "order taken: "
; nil

(put! capacity "Overflow" put-logger)
;; =>
; "order put? false"
; false

; ===============================
; Instituting a closing time with `alts!` and `timeout`
; ===============================

;           888   d8           d8b
;   /~~~8e  888 _d88__  d88~\ !Y88!
;       88b 888  888   C888    Y8Y
;  e88~-888 888  888    Y88b    8
; C888  888 888  888     888D   e
;  "88_-888 888  "88_/ \_88P   "8"

;   d8   ,e,                                             d8
; _d88__  "  888-~88e-~88e  e88~~8e   e88~-_  888  888 _d88__
;  888   888 888  888  888 d888  88b d888   i 888  888  888
;  888   888 888  888  888 8888__888 8888   | 888  888  888
;  888   888 888  888  888 Y888    , Y888   ' 888  888  888
;  "88_/ 888 888  888  888  "88___/   "88_-~  "88_-888  "88_/


(source alts!)
(comment
  (defn alts!
    "Completes at most one of several channel operations. Must be called inside a `(go ...) block`. `ports` is a vector of channel endpoints, which can be either a channel to take from or a vector of `[channel-to-put-to val-to-put]`, in any combination. Takes will be made as if by `<!`, and puts will be made as if by `>!`. Unless the `:priority` option is `true`, if more than one port operation is ready a non-deterministic choice will be made. If no operation is ready and a `:default` value is supplied, `[default-val :default]` will be returned, otherwise `alts!` will park until the first operation to become ready completes. Returns `[val port]` of the completed operation, where `val` is the value taken for takes, and a boolean (`true` unless already closed, as per `put!`) for puts.

    Supported options: (`opts` are passed as `:key val`)

    `:default val` - the value to use if none of the operations are immediately ready
    `:priority true` - (default nil) when `true`, the operations will be tried in order.

    Note: there is no guarantee that the port exps or val exprs will be used, nor in what order should they be, so they should not be depended upon for side effects."

    [ports & {:as opts}]
    (throw (js/Error. "alts! used not in (go ...) block"))))

(source timeout)
(comment
  (defn timeout
    "Returns a channel that will close after msecs"
    [msecs]
    (timers/timeout msecs)))

(defn timeout-chan [channel]
  (let [closer (timeout 3000)]
    (go (while true (<! (timeout 250)) (>! channel "Main Bar")))
    (go (while true (<! (timeout 500)) (>! channel "Online Order")))
    (go (while true (<! (timeout 750)) (>! channel "Roulette Room")))
    (go-loop [_ []]
      (let [[val ch] (alts! [channel closer])] ; <- `alts!`
        (cond
          (= ch closer) (do
                          (close! channel)
                          (.log js/console (str "No more orders. Domo arigatogozaimashita.")))
          :else
          (recur (.log js/console (str "Order up: " (<! channel)))))))))

(def capacity (chan 5))

(timeout-chan capacity)
;;=>
; Order up: Online Order
; Order up: Roulette Room
; Order up: Online Order
; Order up: Main Bar
; Order up: Online Order
; Order up: Main Bar
; Order up: Main Bar
; Order up: Main Bar
; Order up: Main Bar
; Order up: Roulette Room
; No more orders. Domo Arigatogozaimashita.


(take! capacity take-logger)
;;=> "order taken: Online Order"
;;=> "order taken: "


;
; ~~~888~~~   ,88~-_   888~-_     ,88~-_
;    888     d888   \  888   \   d888   \
;    888    88888    | 888    | 88888    |
;    888    88888    | 888    | 88888    |
;    888     Y888   /  888   /   Y888   /
;    888      `88_-~   888_-~     `88_-~




;                                      /
; 888-~88e-~88e  e88~~8e  888-~\ e88~88e  e88~~8e
; 888  888  888 d888  88b 888    888 888 d888  88b
; 888  888  888 8888__888 888    "88_88" 8888__888
; 888  888  888 Y888    , 888     /      Y888    ,
; 888  888  888  "88___/  888    Cb       "88___/
;                                 Y8""8D

;                        888   d8
; 888-~88e-~88e 888  888 888 _d88__
; 888  888  888 888  888 888  888
; 888  888  888 888  888 888  888
; 888  888  888 888  888 888  888
; 888  888  888 "88_-888 888  "88_/
;


;   d8
; _d88__   /~~~8e  888-~88e
;  888         88b 888  888b
;  888    e88~-888 888  8888
;  888   C888  888 888  888P
;  "88_/  "88_-888 888-_88'
;                  888
;
;                    888
; 888-~88e  888  888 888-~88e
; 888  888b 888  888 888  888b
; 888  8888 888  888 888  8888
; 888  888P 888  888 888  888P
; 888-_88"  "88_-888 888-_88'
; 888

;                 888
;  d88~\ 888  888 888-~88e
; C888   888  888 888  888b
;  Y88b  888  888 888  8888
;   888D 888  888 888  888P
; \_88P  "88_-888 888-_88"
;


;; ARCHIVE: David Nolen: https://youtu.be/AhxcGGeh5ho?t=11m49s

; `go` blocks return channels
(source go)

(.log js/console (go 5))

; `>!` & `<!` ("parking" put & take)
(source >!)
(source <!)

(go (.log js/console (<! (go 5))))

; `chan` (channels)
(source chan)

(let [c (chan)]
  (go
    (.log js/console "We got here")
    (.log js/console (<! c)) ; take a value off the channel
    (.log js/console "We'll never get here"))) ; => We got here

(let [c (chan)]
  (go
    (.log js/console "Got here")
    (.log js/console (<! c))
    (.log js/console "We made progress"))
  (go ; when this following go block runs, it allows the prior go to finish
    (>! c 5)))

(let [c (chan)]
  (go
    (.log js/console "Before")
    (>! c (js/Date.))
    (.log js/console "After"))
  (go
    (.log js/console "Order")
    (.log js/console (<! c))
    (.log js/console "doesn't matter")))

; `timeout`
(source timeout)

; Gotchas of `chan`:

(def ch (chan))

(go (while true (<! (timeout 250)) (>! ch 1)))
(go (while true (<! (timeout 500)) (>! ch 2)))
(go (while true (<! (timeout 750)) (>! ch 3)))

(go-loop []
  (recur (.log js/console (str "process: " (<! ch)))))


; Control Flow with `alts!`
; USING `alts!`
(source alts!)


(defn timeout-chan [port]
  (let [tmt (timeout 3000)]
    (go (while true (<! (timeout 250)) (>! port 1)))
    (go (while true (<! (timeout 500)) (>! port 2)))
    (go (while true (<! (timeout 750)) (>! port 3)))
    (go-loop [_ []]
      (let [[val ch] (alts! [port tmt])]
        (cond
          (= ch tmt) (.log js/console (str "done"))
          :else
          (recur (.log js/console (str "process: " (<! port)))))))))


(def test-chan (chan))

(timeout-chan test-chan)

; `put!` and 'take!`

(defn toggle-chan [process stopper]
  (go (while true (<! (timeout 250)) (>! process 1)))
  (go (while true (<! (timeout 500)) (>! process 2)))
  (go (while true (<! (timeout 750)) (>! process 3)))
  (go-loop [_ []] ; accumulator = placeholder, replaced with each `(recur (.log...`
    (let [[val ch] (alts! [process stopper])]
      (cond
        (= ch stopper) (take! stopper #(.log js/console (str "take val: " %)))
        :else
        (recur (.log js/console (str "process: " (<! process))))))))

(defn stopping-put-async [port val]
  (put! port val #(.log js/console (str "put val: " %))))

(defn stopping-put-park [port val]
  (go (>! port val #(.log js/console (str "put val: " %)))))

(def test-chan2 (chan))
(def stopping-chan (chan 2))

(source chan)
(toggle-chan test-chan2 stopping-chan)

(stopping-put-async stopping-chan "HALT")
(stopping-put-park stopping-chan "STOP")

; Buffers

(def fixed-chan (chan 2))
(timeout-chan fixed-chan)
(msg->chan fixed-chan "TEST-CHAN")

(def buff-chan (chan (buffer 2)))
(timeout-chan buff-chan)
(msg->chan buff-chan "BUFF-CHAN")

(def slide-chan (chan (sliding-buffer 2)))
(timeout-chan slide-chan)
(msg->chan slide-chan "SLIDE-CHAN")

(def drop-chan (chan (dropping-buffer 2)))
(timeout-chan drop-chan)
(msg->chan drop-chan "DROP-CHAN")


; `put!` and `take!` (asynchronous channel operations)
(source put!)
(source take!)
