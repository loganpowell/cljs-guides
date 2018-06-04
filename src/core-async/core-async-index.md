# `core.async` Guides Index:

## 1) [Getting Started](./core-async-intro.md)

### Macros Covered:
- [`go`](https://clojuredocs.org/clojure.core.async/go): Provides an environment (lexical "block") where internal asynchronous functions can be written in a synchronous (more deterministic) fashion (i.e., sequential).

### Functions Covered:

Function | Short Description | Syntax | Must be used in a `go` block?
--- | --- | :---: | :---:
[`chan`](https://clojuredocs.org/clojure.core.async/chan) | Channel: async coordination vehicle | async | true
[`>!`](https://clojuredocs.org/clojure.core.async/>!) | "Put bang" -> Put to `chan` | sync | true
[`<!`](https://clojuredocs.org/clojure.core.async/>!) | "Take bang" -> Take from a `chan` | sync | true

---

## 2) [`cljs.core.async` `alts!`, `timeout` and "Parking"](./alts-timeout-parking.md)

## Macros Covered:
- [`go-loop`](https://clojuredocs.org/clojure.core.async/go-loop): Syntactic sugar for `(go (loop [] ...))`

### Functions Covered:

Function | Short Description | Syntax | Must be used in a `go` block?
--- | --- | :---: | :---:
[`alts!`](https://clojuredocs.org/clojure.core.async/alts!) | `chan` flow control | sync | true
[`timeout`](https://clojuredocs.org/clojure.core.async/timeout)| Return a channel that closes after set milliseconds | async | false

---

## 3) [`cljs.core.async` Buffers, `put!` and `take!`](./put-take-buffers.md)

Function | Short Description | Syntax | Must be used in a `go` block?
--- | --- | :---: | :---:
[`buffer`](https://clojuredocs.org/clojure.core.async/buffer) | A fixed capacity of a `chan`, which parks over-capacity puts  | async | false
[`put!`](https://clojuredocs.org/clojure.core.async/put!) | "Put bang" -> Put to `chan` | async | false
[`take!`](https://clojuredocs.org/clojure.core.async/take!)| "Take bang" -> Take from a `chan` | async | false
[`sliding-buffer`](https://clojuredocs.org/clojure.core.async/sliding-buffer) | A buffer, which allows newest over capacity puts by dropping oldest puts in the buffer (doesn't park overcapacity puts)| async | false
[`dropping-buffer`](https://clojuredocs.org/clojure.core.async/dropping-buffer) | A buffer, which "drops" newest puts when full (doesn't park overcapacity puts) | async | false
