goog.provide('guides.core');
goog.require('cljs.core');
guides.core.node = (function guides$core$node(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23640 = arguments.length;
var i__4500__auto___23641 = (0);
while(true){
if((i__4500__auto___23641 < len__4499__auto___23640)){
args__4502__auto__.push((arguments[i__4500__auto___23641]));

var G__23642 = (i__4500__auto___23641 + (1));
i__4500__auto___23641 = G__23642;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return guides.core.node.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

guides.core.node.cljs$core$IFn$_invoke$arity$variadic = (function (cli_args){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["hello world"], 0));
});

guides.core.node.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
guides.core.node.cljs$lang$applyTo = (function (seq23623){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23623));
});

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Hey from node!"], 0));

//# sourceMappingURL=guides.core.js.map
