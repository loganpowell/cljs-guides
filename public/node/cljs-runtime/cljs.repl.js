goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__28118){
var map__28119 = p__28118;
var map__28119__$1 = ((((!((map__28119 == null)))?(((((map__28119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28119.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28119):map__28119);
var m = map__28119__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28119__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28119__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__28121_28149 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28122_28150 = null;
var count__28123_28151 = (0);
var i__28124_28152 = (0);
while(true){
if((i__28124_28152 < count__28123_28151)){
var f_28154 = chunk__28122_28150.cljs$core$IIndexed$_nth$arity$2(null,i__28124_28152);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_28154], 0));


var G__28156 = seq__28121_28149;
var G__28157 = chunk__28122_28150;
var G__28158 = count__28123_28151;
var G__28159 = (i__28124_28152 + (1));
seq__28121_28149 = G__28156;
chunk__28122_28150 = G__28157;
count__28123_28151 = G__28158;
i__28124_28152 = G__28159;
continue;
} else {
var temp__5457__auto___28160 = cljs.core.seq(seq__28121_28149);
if(temp__5457__auto___28160){
var seq__28121_28161__$1 = temp__5457__auto___28160;
if(cljs.core.chunked_seq_QMARK_(seq__28121_28161__$1)){
var c__4319__auto___28162 = cljs.core.chunk_first(seq__28121_28161__$1);
var G__28163 = cljs.core.chunk_rest(seq__28121_28161__$1);
var G__28164 = c__4319__auto___28162;
var G__28165 = cljs.core.count(c__4319__auto___28162);
var G__28166 = (0);
seq__28121_28149 = G__28163;
chunk__28122_28150 = G__28164;
count__28123_28151 = G__28165;
i__28124_28152 = G__28166;
continue;
} else {
var f_28167 = cljs.core.first(seq__28121_28161__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_28167], 0));


var G__28169 = cljs.core.next(seq__28121_28161__$1);
var G__28170 = null;
var G__28171 = (0);
var G__28172 = (0);
seq__28121_28149 = G__28169;
chunk__28122_28150 = G__28170;
count__28123_28151 = G__28171;
i__28124_28152 = G__28172;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28173 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_28173], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_28173)))?cljs.core.second(arglists_28173):arglists_28173)], 0));
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
var seq__28125_28184 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28126_28185 = null;
var count__28127_28186 = (0);
var i__28128_28187 = (0);
while(true){
if((i__28128_28187 < count__28127_28186)){
var vec__28129_28188 = chunk__28126_28185.cljs$core$IIndexed$_nth$arity$2(null,i__28128_28187);
var name_28189 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28129_28188,(0),null);
var map__28132_28190 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28129_28188,(1),null);
var map__28132_28191__$1 = ((((!((map__28132_28190 == null)))?(((((map__28132_28190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28132_28190.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28132_28190):map__28132_28190);
var doc_28192 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28132_28191__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28193 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28132_28191__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_28189], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_28193], 0));

if(cljs.core.truth_(doc_28192)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_28192], 0));
} else {
}


var G__28194 = seq__28125_28184;
var G__28195 = chunk__28126_28185;
var G__28196 = count__28127_28186;
var G__28197 = (i__28128_28187 + (1));
seq__28125_28184 = G__28194;
chunk__28126_28185 = G__28195;
count__28127_28186 = G__28196;
i__28128_28187 = G__28197;
continue;
} else {
var temp__5457__auto___28198 = cljs.core.seq(seq__28125_28184);
if(temp__5457__auto___28198){
var seq__28125_28199__$1 = temp__5457__auto___28198;
if(cljs.core.chunked_seq_QMARK_(seq__28125_28199__$1)){
var c__4319__auto___28200 = cljs.core.chunk_first(seq__28125_28199__$1);
var G__28201 = cljs.core.chunk_rest(seq__28125_28199__$1);
var G__28202 = c__4319__auto___28200;
var G__28203 = cljs.core.count(c__4319__auto___28200);
var G__28204 = (0);
seq__28125_28184 = G__28201;
chunk__28126_28185 = G__28202;
count__28127_28186 = G__28203;
i__28128_28187 = G__28204;
continue;
} else {
var vec__28134_28205 = cljs.core.first(seq__28125_28199__$1);
var name_28206 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28134_28205,(0),null);
var map__28137_28207 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28134_28205,(1),null);
var map__28137_28208__$1 = ((((!((map__28137_28207 == null)))?(((((map__28137_28207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28137_28207.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28137_28207):map__28137_28207);
var doc_28209 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28137_28208__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28210 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28137_28208__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_28206], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_28210], 0));

if(cljs.core.truth_(doc_28209)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_28209], 0));
} else {
}


var G__28212 = cljs.core.next(seq__28125_28199__$1);
var G__28213 = null;
var G__28214 = (0);
var G__28215 = (0);
seq__28125_28184 = G__28212;
chunk__28126_28185 = G__28213;
count__28127_28186 = G__28214;
i__28128_28187 = G__28215;
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

var seq__28139 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__28140 = null;
var count__28141 = (0);
var i__28142 = (0);
while(true){
if((i__28142 < count__28141)){
var role = chunk__28140.cljs$core$IIndexed$_nth$arity$2(null,i__28142);
var temp__5457__auto___28217__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___28217__$1)){
var spec_28218 = temp__5457__auto___28217__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_28218)], 0));
} else {
}


var G__28223 = seq__28139;
var G__28224 = chunk__28140;
var G__28225 = count__28141;
var G__28226 = (i__28142 + (1));
seq__28139 = G__28223;
chunk__28140 = G__28224;
count__28141 = G__28225;
i__28142 = G__28226;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq(seq__28139);
if(temp__5457__auto____$1){
var seq__28139__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__28139__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__28139__$1);
var G__28227 = cljs.core.chunk_rest(seq__28139__$1);
var G__28228 = c__4319__auto__;
var G__28229 = cljs.core.count(c__4319__auto__);
var G__28230 = (0);
seq__28139 = G__28227;
chunk__28140 = G__28228;
count__28141 = G__28229;
i__28142 = G__28230;
continue;
} else {
var role = cljs.core.first(seq__28139__$1);
var temp__5457__auto___28231__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___28231__$2)){
var spec_28232 = temp__5457__auto___28231__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_28232)], 0));
} else {
}


var G__28233 = cljs.core.next(seq__28139__$1);
var G__28234 = null;
var G__28235 = (0);
var G__28236 = (0);
seq__28139 = G__28233;
chunk__28140 = G__28234;
count__28141 = G__28235;
i__28142 = G__28236;
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
