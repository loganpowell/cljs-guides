# `core.async` Guides Index:

## 1) [Getting Started](./core-async-intro.md)

### Macros Covered:
- [`go`](https://clojuredocs.org/clojure.core.async/go): Provides an environment (lexical "block") where internal asynchronous functions can be written in a synchronous (more deterministic) fashion (i.e., sequential).
- [`go-loop`](https://clojuredocs.org/clojure.core.async/go-loop): Similar to regular [`loop`](https://clojuredocs.org/clojure.core/loop), but hosted in a `go` block, allowing [`recur`](https://clojuredocs.org/clojure.core/recur)sion = syntactic sugar for `(go (loop [] ...))`

### Functions Covered:

Function | Short Description | Syntax | Must be used in a `go` block?
--- | --- | :---: | :---:
[`chan`](https://clojuredocs.org/clojure.core.async/chan) | Channel: async coordination vehicle | async | true
[`>!`](https://clojuredocs.org/clojure.core.async/>!) | "Put bang" -> Put to `chan` | sync | true
[`<!`](https://clojuredocs.org/clojure.core.async/>!) | "Take bang" -> Take from a `chan` | sync | true



## 2) [`cljs.core.async` `alts!`, `put!`, `take!` and "parking"](./puts-takes-alts.md)

### Functions Covered:

Function | Short Description | Syntax | Must be used in a `go` block?
--- | --- | :---: | :---:
[`alts!`](https://clojuredocs.org/clojure.core.async/alts!) | `chan` flow control | sync | true
[`put!`](https://clojuredocs.org/clojure.core.async/put!) | "Put bang" -> Put to `chan` | async | false
[`take!`](https://clojuredocs.org/clojure.core.async/take!)| "Take bang" -> Take from a `chan` | async | false
