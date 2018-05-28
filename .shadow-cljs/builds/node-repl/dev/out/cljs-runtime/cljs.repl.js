goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34415){
var map__34416 = p__34415;
var map__34416__$1 = ((((!((map__34416 == null)))?(((((map__34416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34416.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34416):map__34416);
var m = map__34416__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34416__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34416__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34418_34440 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34419_34441 = null;
var count__34420_34442 = (0);
var i__34421_34443 = (0);
while(true){
if((i__34421_34443 < count__34420_34442)){
var f_34444 = chunk__34419_34441.cljs$core$IIndexed$_nth$arity$2(null,i__34421_34443);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_34444], 0));


var G__34445 = seq__34418_34440;
var G__34446 = chunk__34419_34441;
var G__34447 = count__34420_34442;
var G__34448 = (i__34421_34443 + (1));
seq__34418_34440 = G__34445;
chunk__34419_34441 = G__34446;
count__34420_34442 = G__34447;
i__34421_34443 = G__34448;
continue;
} else {
var temp__5457__auto___34449 = cljs.core.seq(seq__34418_34440);
if(temp__5457__auto___34449){
var seq__34418_34450__$1 = temp__5457__auto___34449;
if(cljs.core.chunked_seq_QMARK_(seq__34418_34450__$1)){
var c__4319__auto___34451 = cljs.core.chunk_first(seq__34418_34450__$1);
var G__34452 = cljs.core.chunk_rest(seq__34418_34450__$1);
var G__34453 = c__4319__auto___34451;
var G__34454 = cljs.core.count(c__4319__auto___34451);
var G__34455 = (0);
seq__34418_34440 = G__34452;
chunk__34419_34441 = G__34453;
count__34420_34442 = G__34454;
i__34421_34443 = G__34455;
continue;
} else {
var f_34456 = cljs.core.first(seq__34418_34450__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_34456], 0));


var G__34457 = cljs.core.next(seq__34418_34450__$1);
var G__34458 = null;
var G__34459 = (0);
var G__34460 = (0);
seq__34418_34440 = G__34457;
chunk__34419_34441 = G__34458;
count__34420_34442 = G__34459;
i__34421_34443 = G__34460;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_34461 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_34461], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_34461)))?cljs.core.second(arglists_34461):arglists_34461)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34422_34464 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34423_34465 = null;
var count__34424_34466 = (0);
var i__34425_34467 = (0);
while(true){
if((i__34425_34467 < count__34424_34466)){
var vec__34426_34468 = chunk__34423_34465.cljs$core$IIndexed$_nth$arity$2(null,i__34425_34467);
var name_34469 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34426_34468,(0),null);
var map__34429_34470 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34426_34468,(1),null);
var map__34429_34471__$1 = ((((!((map__34429_34470 == null)))?(((((map__34429_34470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34429_34470.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34429_34470):map__34429_34470);
var doc_34472 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34429_34471__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34473 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34429_34471__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_34469], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_34473], 0));

if(cljs.core.truth_(doc_34472)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_34472], 0));
} else {
}


var G__34475 = seq__34422_34464;
var G__34476 = chunk__34423_34465;
var G__34477 = count__34424_34466;
var G__34478 = (i__34425_34467 + (1));
seq__34422_34464 = G__34475;
chunk__34423_34465 = G__34476;
count__34424_34466 = G__34477;
i__34425_34467 = G__34478;
continue;
} else {
var temp__5457__auto___34479 = cljs.core.seq(seq__34422_34464);
if(temp__5457__auto___34479){
var seq__34422_34480__$1 = temp__5457__auto___34479;
if(cljs.core.chunked_seq_QMARK_(seq__34422_34480__$1)){
var c__4319__auto___34481 = cljs.core.chunk_first(seq__34422_34480__$1);
var G__34482 = cljs.core.chunk_rest(seq__34422_34480__$1);
var G__34483 = c__4319__auto___34481;
var G__34484 = cljs.core.count(c__4319__auto___34481);
var G__34485 = (0);
seq__34422_34464 = G__34482;
chunk__34423_34465 = G__34483;
count__34424_34466 = G__34484;
i__34425_34467 = G__34485;
continue;
} else {
var vec__34431_34486 = cljs.core.first(seq__34422_34480__$1);
var name_34487 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34431_34486,(0),null);
var map__34434_34488 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34431_34486,(1),null);
var map__34434_34489__$1 = ((((!((map__34434_34488 == null)))?(((((map__34434_34488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34434_34488.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34434_34488):map__34434_34488);
var doc_34490 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34434_34489__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34491 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34434_34489__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_34487], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_34491], 0));

if(cljs.core.truth_(doc_34490)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_34490], 0));
} else {
}


var G__34497 = cljs.core.next(seq__34422_34480__$1);
var G__34498 = null;
var G__34499 = (0);
var G__34500 = (0);
seq__34422_34464 = G__34497;
chunk__34423_34465 = G__34498;
count__34424_34466 = G__34499;
i__34425_34467 = G__34500;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n))].join(''),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__34436 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34437 = null;
var count__34438 = (0);
var i__34439 = (0);
while(true){
if((i__34439 < count__34438)){
var role = chunk__34437.cljs$core$IIndexed$_nth$arity$2(null,i__34439);
var temp__5457__auto___34501__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___34501__$1)){
var spec_34502 = temp__5457__auto___34501__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_34502)], 0));
} else {
}


var G__34504 = seq__34436;
var G__34505 = chunk__34437;
var G__34506 = count__34438;
var G__34507 = (i__34439 + (1));
seq__34436 = G__34504;
chunk__34437 = G__34505;
count__34438 = G__34506;
i__34439 = G__34507;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq(seq__34436);
if(temp__5457__auto____$1){
var seq__34436__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__34436__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__34436__$1);
var G__34509 = cljs.core.chunk_rest(seq__34436__$1);
var G__34510 = c__4319__auto__;
var G__34511 = cljs.core.count(c__4319__auto__);
var G__34512 = (0);
seq__34436 = G__34509;
chunk__34437 = G__34510;
count__34438 = G__34511;
i__34439 = G__34512;
continue;
} else {
var role = cljs.core.first(seq__34436__$1);
var temp__5457__auto___34515__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___34515__$2)){
var spec_34516 = temp__5457__auto___34515__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_34516)], 0));
} else {
}


var G__34517 = cljs.core.next(seq__34436__$1);
var G__34518 = null;
var G__34519 = (0);
var G__34520 = (0);
seq__34436 = G__34517;
chunk__34437 = G__34518;
count__34438 = G__34519;
i__34439 = G__34520;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=cljs.repl.js.map
