# Guide for Using `cljs-ajax` with `cljs.core.async`

This guide picks up after the [most basic `cljs-ajax` example](../http-async/guide-cljs-ajax.md). Now, we could use the callback nature of `cljs-ajax`'s handler, but then we'd start slipping into "callback hell". One of the many attractive features of Clojure(Script) is that we can escape this hell with `core.async`.

## Introduction

Figuring out how to use `cljs-ajax` in coordination with `cljs.core.async` is a little bit of a scavenger hunt. There were a [couple](https://github.com/vvvvalvalval/reagent-phonecat-tutorial/wiki/Step-11:-Asynchrony-and-error-management-with-core.async) of [resources](https://blog.venanti.us/using-transducers-with-core-async-clojurescript/), from which I've stolen liberally here, but I figured for this **match made in heaven** there should be more. So, I hope you gain something from this endeavor.

## Motivation

At the time of writing, there are two main contenders in the ClojureScript HTTP fetching scene:

1) [`cljs-ajax`](https://github.com/JulianBirch/cljs-ajax): Works with Clojure and ClojureScript, but doesn't default to using `core.async` channels.
2) [`cljs-http`](https://github.com/r0man/cljs-http): Works only in ClojureScript, but **does** default to use `core.async` channels.

So, why did I decide on `cljs-ajax` if what I wanted was to combine HTTP fetching with `core.async`? Because I'm lazy and I don't want to have to learn two libraries that share the same goal. Moreover, for those who - like me - find one of the more attractive aspects of Clojure(script) to be it's ability to be used across the stack, I like the idea of "Write once, run anywhere." I also want to learn how to use `cljs.core.async`, so there's that.

# The Basics

## Make an HTTP Request with `cljs-ajax`

Let's start with the simplest request. I'll be using a public API I'm familiar with from [the Census Bureau](https://www.census.gov/data/developers/data-sets.html). You get some free requests without having to sign up for a key, so these examples should just work for you if you're following along.




### References
- `cljs-ajax` [README](https://github.com/JulianBirch/cljs-ajax/blob/master/README.md)
- []()
- Introducing Cljs-ajax [Blog Post](https://yogthos.net/posts/2013-04-09-Introducing-cljs-ajax.html)
- [https://github.com/vvvvalvalval/reagent-phonecat-tutorial/wiki/Step-05:-talking-to-the-server](https://github.com/vvvvalvalval/reagent-phonecat-tutorial/wiki/Step-05:-talking-to-the-server)

## Getting Started with `cljs.core.async`

### References
- []

## Making Burritos (wrapping HTTP fetches in channels)

### References
- []

## Extra Credit: Using Transducers

### References
- [Using Transducers with Core.async in ClojureScript](https://blog.venanti.us/using-transducers-with-core-async-clojurescript/)
