goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__27975){
var map__27976 = p__27975;
var map__27976__$1 = ((((!((map__27976 == null)))?(((((map__27976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27976.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27976):map__27976);
var m = map__27976__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27976__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27976__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__27978_28005 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27979_28006 = null;
var count__27980_28007 = (0);
var i__27981_28008 = (0);
while(true){
if((i__27981_28008 < count__27980_28007)){
var f_28009 = chunk__27979_28006.cljs$core$IIndexed$_nth$arity$2(null,i__27981_28008);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_28009], 0));


var G__28010 = seq__27978_28005;
var G__28011 = chunk__27979_28006;
var G__28012 = count__27980_28007;
var G__28013 = (i__27981_28008 + (1));
seq__27978_28005 = G__28010;
chunk__27979_28006 = G__28011;
count__27980_28007 = G__28012;
i__27981_28008 = G__28013;
continue;
} else {
var temp__5457__auto___28014 = cljs.core.seq(seq__27978_28005);
if(temp__5457__auto___28014){
var seq__27978_28015__$1 = temp__5457__auto___28014;
if(cljs.core.chunked_seq_QMARK_(seq__27978_28015__$1)){
var c__4319__auto___28016 = cljs.core.chunk_first(seq__27978_28015__$1);
var G__28017 = cljs.core.chunk_rest(seq__27978_28015__$1);
var G__28018 = c__4319__auto___28016;
var G__28019 = cljs.core.count(c__4319__auto___28016);
var G__28020 = (0);
seq__27978_28005 = G__28017;
chunk__27979_28006 = G__28018;
count__27980_28007 = G__28019;
i__27981_28008 = G__28020;
continue;
} else {
var f_28021 = cljs.core.first(seq__27978_28015__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_28021], 0));


var G__28023 = cljs.core.next(seq__27978_28015__$1);
var G__28024 = null;
var G__28025 = (0);
var G__28026 = (0);
seq__27978_28005 = G__28023;
chunk__27979_28006 = G__28024;
count__27980_28007 = G__28025;
i__27981_28008 = G__28026;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28027 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_28027], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_28027)))?cljs.core.second(arglists_28027):arglists_28027)], 0));
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
var seq__27982_28028 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27983_28029 = null;
var count__27984_28030 = (0);
var i__27985_28031 = (0);
while(true){
if((i__27985_28031 < count__27984_28030)){
var vec__27986_28032 = chunk__27983_28029.cljs$core$IIndexed$_nth$arity$2(null,i__27985_28031);
var name_28033 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27986_28032,(0),null);
var map__27989_28034 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27986_28032,(1),null);
var map__27989_28035__$1 = ((((!((map__27989_28034 == null)))?(((((map__27989_28034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27989_28034.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27989_28034):map__27989_28034);
var doc_28036 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27989_28035__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28037 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27989_28035__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_28033], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_28037], 0));

if(cljs.core.truth_(doc_28036)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_28036], 0));
} else {
}


var G__28039 = seq__27982_28028;
var G__28040 = chunk__27983_28029;
var G__28041 = count__27984_28030;
var G__28042 = (i__27985_28031 + (1));
seq__27982_28028 = G__28039;
chunk__27983_28029 = G__28040;
count__27984_28030 = G__28041;
i__27985_28031 = G__28042;
continue;
} else {
var temp__5457__auto___28043 = cljs.core.seq(seq__27982_28028);
if(temp__5457__auto___28043){
var seq__27982_28044__$1 = temp__5457__auto___28043;
if(cljs.core.chunked_seq_QMARK_(seq__27982_28044__$1)){
var c__4319__auto___28045 = cljs.core.chunk_first(seq__27982_28044__$1);
var G__28046 = cljs.core.chunk_rest(seq__27982_28044__$1);
var G__28047 = c__4319__auto___28045;
var G__28048 = cljs.core.count(c__4319__auto___28045);
var G__28049 = (0);
seq__27982_28028 = G__28046;
chunk__27983_28029 = G__28047;
count__27984_28030 = G__28048;
i__27985_28031 = G__28049;
continue;
} else {
var vec__27991_28050 = cljs.core.first(seq__27982_28044__$1);
var name_28051 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27991_28050,(0),null);
var map__27994_28052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27991_28050,(1),null);
var map__27994_28053__$1 = ((((!((map__27994_28052 == null)))?(((((map__27994_28052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27994_28052.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27994_28052):map__27994_28052);
var doc_28054 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27994_28053__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28055 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27994_28053__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_28051], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_28055], 0));

if(cljs.core.truth_(doc_28054)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_28054], 0));
} else {
}


var G__28056 = cljs.core.next(seq__27982_28044__$1);
var G__28057 = null;
var G__28058 = (0);
var G__28059 = (0);
seq__27982_28028 = G__28056;
chunk__27983_28029 = G__28057;
count__27984_28030 = G__28058;
i__27985_28031 = G__28059;
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

var seq__27996 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__27997 = null;
var count__27998 = (0);
var i__27999 = (0);
while(true){
if((i__27999 < count__27998)){
var role = chunk__27997.cljs$core$IIndexed$_nth$arity$2(null,i__27999);
var temp__5457__auto___28060__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___28060__$1)){
var spec_28061 = temp__5457__auto___28060__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_28061)], 0));
} else {
}


var G__28062 = seq__27996;
var G__28063 = chunk__27997;
var G__28064 = count__27998;
var G__28065 = (i__27999 + (1));
seq__27996 = G__28062;
chunk__27997 = G__28063;
count__27998 = G__28064;
i__27999 = G__28065;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq(seq__27996);
if(temp__5457__auto____$1){
var seq__27996__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__27996__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__27996__$1);
var G__28066 = cljs.core.chunk_rest(seq__27996__$1);
var G__28067 = c__4319__auto__;
var G__28068 = cljs.core.count(c__4319__auto__);
var G__28069 = (0);
seq__27996 = G__28066;
chunk__27997 = G__28067;
count__27998 = G__28068;
i__27999 = G__28069;
continue;
} else {
var role = cljs.core.first(seq__27996__$1);
var temp__5457__auto___28081__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___28081__$2)){
var spec_28082 = temp__5457__auto___28081__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_28082)], 0));
} else {
}


var G__28083 = cljs.core.next(seq__27996__$1);
var G__28084 = null;
var G__28085 = (0);
var G__28086 = (0);
seq__27996 = G__28083;
chunk__27997 = G__28084;
count__27998 = G__28085;
i__27999 = G__28086;
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
