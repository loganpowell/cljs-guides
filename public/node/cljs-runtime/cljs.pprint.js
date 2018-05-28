goog.provide('cljs.pprint');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
cljs.pprint.print = (function cljs$pprint$print(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27773 = arguments.length;
var i__4500__auto___27774 = (0);
while(true){
if((i__4500__auto___27774 < len__4499__auto___27773)){
args__4502__auto__.push((arguments[i__4500__auto___27774]));

var G__27775 = (i__4500__auto___27774 + (1));
i__4500__auto___27774 = G__27775;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,more));
});

cljs.pprint.print.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.pprint.print.cljs$lang$applyTo = (function (seq27772){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27772));
});

cljs.pprint.println = (function cljs$pprint$println(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27777 = arguments.length;
var i__4500__auto___27778 = (0);
while(true){
if((i__4500__auto___27778 < len__4499__auto___27777)){
args__4502__auto__.push((arguments[i__4500__auto___27778]));

var G__27779 = (i__4500__auto___27778 + (1));
i__4500__auto___27778 = G__27779;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.pprint.print,more);

return cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.println.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.pprint.println.cljs$lang$applyTo = (function (seq27776){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27776));
});

cljs.pprint.print_char = (function cljs$pprint$print_char(c){
return cljs.core._write(cljs.core._STAR_out_STAR_,(function (){var pred__27780 = cljs.core._EQ_;
var expr__27781 = c;
if(cljs.core.truth_((function (){var G__27783 = "\b";
var G__27784 = expr__27781;
return (pred__27780.cljs$core$IFn$_invoke$arity$2 ? pred__27780.cljs$core$IFn$_invoke$arity$2(G__27783,G__27784) : pred__27780.call(null,G__27783,G__27784));
})())){
return "\\backspace";
} else {
if(cljs.core.truth_((function (){var G__27785 = "\t";
var G__27786 = expr__27781;
return (pred__27780.cljs$core$IFn$_invoke$arity$2 ? pred__27780.cljs$core$IFn$_invoke$arity$2(G__27785,G__27786) : pred__27780.call(null,G__27785,G__27786));
})())){
return "\\tab";
} else {
if(cljs.core.truth_((function (){var G__27787 = "\n";
var G__27788 = expr__27781;
return (pred__27780.cljs$core$IFn$_invoke$arity$2 ? pred__27780.cljs$core$IFn$_invoke$arity$2(G__27787,G__27788) : pred__27780.call(null,G__27787,G__27788));
})())){
return "\\newline";
} else {
if(cljs.core.truth_((function (){var G__27789 = "\f";
var G__27790 = expr__27781;
return (pred__27780.cljs$core$IFn$_invoke$arity$2 ? pred__27780.cljs$core$IFn$_invoke$arity$2(G__27789,G__27790) : pred__27780.call(null,G__27789,G__27790));
})())){
return "\\formfeed";
} else {
if(cljs.core.truth_((function (){var G__27791 = "\r";
var G__27792 = expr__27781;
return (pred__27780.cljs$core$IFn$_invoke$arity$2 ? pred__27780.cljs$core$IFn$_invoke$arity$2(G__27791,G__27792) : pred__27780.call(null,G__27791,G__27792));
})())){
return "\\return";
} else {
if(cljs.core.truth_((function (){var G__27793 = "\"";
var G__27794 = expr__27781;
return (pred__27780.cljs$core$IFn$_invoke$arity$2 ? pred__27780.cljs$core$IFn$_invoke$arity$2(G__27793,G__27794) : pred__27780.call(null,G__27793,G__27794));
})())){
return "\\\"";
} else {
if(cljs.core.truth_((function (){var G__27795 = "\\";
var G__27796 = expr__27781;
return (pred__27780.cljs$core$IFn$_invoke$arity$2 ? pred__27780.cljs$core$IFn$_invoke$arity$2(G__27795,G__27796) : pred__27780.call(null,G__27795,G__27796));
})())){
return "\\\\";
} else {
return ["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join('');
}
}
}
}
}
}
}
})());
});
cljs.pprint.pr = (function cljs$pprint$pr(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27798 = arguments.length;
var i__4500__auto___27799 = (0);
while(true){
if((i__4500__auto___27799 < len__4499__auto___27798)){
args__4502__auto__.push((arguments[i__4500__auto___27799]));

var G__27800 = (i__4500__auto___27799 + (1));
i__4500__auto___27799 = G__27800;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,more));
});

cljs.pprint.pr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.pprint.pr.cljs$lang$applyTo = (function (seq27797){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27797));
});

cljs.pprint.prn = (function cljs$pprint$prn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27802 = arguments.length;
var i__4500__auto___27803 = (0);
while(true){
if((i__4500__auto___27803 < len__4499__auto___27802)){
args__4502__auto__.push((arguments[i__4500__auto___27803]));

var G__27804 = (i__4500__auto___27803 + (1));
i__4500__auto___27803 = G__27804;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.pprint.pr,more);

return cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.prn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.pprint.prn.cljs$lang$applyTo = (function (seq27801){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27801));
});

/**
 * Returns true if n is an float.
 */
cljs.pprint.float_QMARK_ = (function cljs$pprint$float_QMARK_(n){
return ((typeof n === 'number') && (!(isNaN(n))) && (!((n === Infinity))) && (!((parseFloat(n) === parseInt(n,(10))))));
});
/**
 * Convert char to int
 */
cljs.pprint.char_code = (function cljs$pprint$char_code(c){
if(typeof c === 'number'){
return c;
} else {
if(((typeof c === 'string') && ((c.length === (1))))){
return c.charCodeAt((0));
} else {
throw (new Error("Argument to char must be a character or number"));

}
}
});
cljs.pprint.map_passing_context = (function cljs$pprint$map_passing_context(func,initial_context,lis){
var context = initial_context;
var lis__$1 = lis;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(lis__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var this$ = cljs.core.first(lis__$1);
var remainder = cljs.core.next(lis__$1);
var vec__27805 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27805,(0),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27805,(1),null);
var G__27808 = new_context;
var G__27809 = remainder;
var G__27810 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__27808;
lis__$1 = G__27809;
acc = G__27810;
continue;
}
break;
}
});
cljs.pprint.consume = (function cljs$pprint$consume(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__27811 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27811,(0),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27811,(1),null);
if(cljs.core.not(result)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,new_context], null);
} else {
var G__27814 = new_context;
var G__27815 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__27814;
acc = G__27815;
continue;
}
break;
}
});
cljs.pprint.consume_while = (function cljs$pprint$consume_while(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__27816 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27816,(0),null);
var continue$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27816,(1),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27816,(2),null);
if(cljs.core.not(continue$)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var G__27819 = new_context;
var G__27820 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__27819;
acc = G__27820;
continue;
}
break;
}
});
cljs.pprint.unzip_map = (function cljs$pprint$unzip_map(m){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4292__auto__ = (function cljs$pprint$unzip_map_$_iter__27821(s__27822){
return (new cljs.core.LazySeq(null,(function (){
var s__27822__$1 = s__27822;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__27822__$1);
if(temp__5457__auto__){
var s__27822__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27822__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__27822__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__27824 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__27823 = (0);
while(true){
if((i__27823 < size__4291__auto__)){
var vec__27825 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__27823);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27825,(0),null);
var vec__27828 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27825,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27828,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27828,(1),null);
cljs.core.chunk_append(b__27824,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null));

var G__27853 = (i__27823 + (1));
i__27823 = G__27853;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27824),cljs$pprint$unzip_map_$_iter__27821(cljs.core.chunk_rest(s__27822__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27824),null);
}
} else {
var vec__27831 = cljs.core.first(s__27822__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27831,(0),null);
var vec__27834 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27831,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27834,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27834,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null),cljs$pprint$unzip_map_$_iter__27821(cljs.core.rest(s__27822__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__(m);
})()),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4292__auto__ = (function cljs$pprint$unzip_map_$_iter__27837(s__27838){
return (new cljs.core.LazySeq(null,(function (){
var s__27838__$1 = s__27838;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__27838__$1);
if(temp__5457__auto__){
var s__27838__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27838__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__27838__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__27840 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__27839 = (0);
while(true){
if((i__27839 < size__4291__auto__)){
var vec__27841 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__27839);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27841,(0),null);
var vec__27844 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27841,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27844,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27844,(1),null);
cljs.core.chunk_append(b__27840,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null));

var G__27854 = (i__27839 + (1));
i__27839 = G__27854;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27840),cljs$pprint$unzip_map_$_iter__27837(cljs.core.chunk_rest(s__27838__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27840),null);
}
} else {
var vec__27847 = cljs.core.first(s__27838__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27847,(0),null);
var vec__27850 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27847,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27850,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27850,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null),cljs$pprint$unzip_map_$_iter__27837(cljs.core.rest(s__27838__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__(m);
})())], null);
});
cljs.pprint.tuple_map = (function cljs$pprint$tuple_map(m,v1){

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4292__auto__ = (function cljs$pprint$tuple_map_$_iter__27855(s__27856){
return (new cljs.core.LazySeq(null,(function (){
var s__27856__$1 = s__27856;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__27856__$1);
if(temp__5457__auto__){
var s__27856__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27856__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__27856__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__27858 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__27857 = (0);
while(true){
if((i__27857 < size__4291__auto__)){
var vec__27859 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__27857);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27859,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27859,(1),null);
cljs.core.chunk_append(b__27858,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null));

var G__27865 = (i__27857 + (1));
i__27857 = G__27865;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27858),cljs$pprint$tuple_map_$_iter__27855(cljs.core.chunk_rest(s__27856__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27858),null);
}
} else {
var vec__27862 = cljs.core.first(s__27856__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27862,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27862,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null),cljs$pprint$tuple_map_$_iter__27855(cljs.core.rest(s__27856__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__(m);
})());
});
cljs.pprint.rtrim = (function cljs$pprint$rtrim(s,c){

var len = cljs.core.count(s);
if((((len > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - (1))),c)))){
var n = (len - (1));
while(true){
if((n < (0))){
return "";
} else {
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,n),c))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(n + (1)));
} else {
var G__27866 = (n - (1));
n = G__27866;
continue;

}
}
break;
}
} else {
return s;
}
});
cljs.pprint.ltrim = (function cljs$pprint$ltrim(s,c){

var len = cljs.core.count(s);
if((((len > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(0)),c)))){
var n = (0);
while(true){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,len)) || (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,n),c))))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,n);
} else {
var G__27867 = (n + (1));
n = G__27867;
continue;
}
break;
}
} else {
return s;
}
});
cljs.pprint.prefix_count = (function cljs$pprint$prefix_count(aseq,val){

var test = ((cljs.core.coll_QMARK_(val))?cljs.core.set(val):cljs.core.PersistentHashSet.createAsIfByAssoc([val]));
var pos = (0);
while(true){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pos,cljs.core.count(aseq))) || (cljs.core.not((function (){var G__27869 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(aseq,pos);
return (test.cljs$core$IFn$_invoke$arity$1 ? test.cljs$core$IFn$_invoke$arity$1(G__27869) : test.call(null,G__27869));
})())))){
return pos;
} else {
var G__27870 = (pos + (1));
pos = G__27870;
continue;
}
break;
}
});

/**
 * @interface
 */
cljs.pprint.IPrettyFlush = function(){};

cljs.pprint._ppflush = (function cljs$pprint$_ppflush(pp){
if(((!((pp == null))) && (!((pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1 == null))))){
return pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1(pp);
} else {
var x__4211__auto__ = (((pp == null))?null:pp);
var m__4212__auto__ = (cljs.pprint._ppflush[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(pp) : m__4212__auto__.call(null,pp));
} else {
var m__4212__auto____$1 = (cljs.pprint._ppflush["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(pp) : m__4212__auto____$1.call(null,pp));
} else {
throw cljs.core.missing_protocol("IPrettyFlush.-ppflush",pp);
}
}
}
});

cljs.pprint._STAR_default_page_width_STAR_ = (72);
cljs.pprint.get_field = (function cljs$pprint$get_field(this$,sym){
var G__27871 = cljs.core.deref(cljs.core.deref(this$));
return (sym.cljs$core$IFn$_invoke$arity$1 ? sym.cljs$core$IFn$_invoke$arity$1(G__27871) : sym.call(null,G__27871));
});
cljs.pprint.set_field = (function cljs$pprint$set_field(this$,sym,new_val){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,sym,new_val);
});
cljs.pprint.get_column = (function cljs$pprint$get_column(this$){
return cljs.pprint.get_field(this$,new cljs.core.Keyword(null,"cur","cur",1153190599));
});
cljs.pprint.get_line = (function cljs$pprint$get_line(this$){
return cljs.pprint.get_field(this$,new cljs.core.Keyword(null,"line","line",212345235));
});
cljs.pprint.get_max_column = (function cljs$pprint$get_max_column(this$){
return cljs.pprint.get_field(this$,new cljs.core.Keyword(null,"max","max",61366548));
});
cljs.pprint.set_max_column = (function cljs$pprint$set_max_column(this$,new_max){
cljs.pprint.set_field(this$,new cljs.core.Keyword(null,"max","max",61366548),new_max);

return null;
});
cljs.pprint.get_writer = (function cljs$pprint$get_writer(this$){
return cljs.pprint.get_field(this$,new cljs.core.Keyword(null,"base","base",185279322));
});
cljs.pprint.c_write_char = (function cljs$pprint$c_write_char(this$,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\n")){
cljs.pprint.set_field(this$,new cljs.core.Keyword(null,"cur","cur",1153190599),(0));

cljs.pprint.set_field(this$,new cljs.core.Keyword(null,"line","line",212345235),(cljs.pprint.get_field(this$,new cljs.core.Keyword(null,"line","line",212345235)) + (1)));
} else {
cljs.pprint.set_field(this$,new cljs.core.Keyword(null,"cur","cur",1153190599),(cljs.pprint.get_field(this$,new cljs.core.Keyword(null,"cur","cur",1153190599)) + (1)));
}

return cljs.core._write(cljs.pprint.get_field(this$,new cljs.core.Keyword(null,"base","base",185279322)),c);
});
cljs.pprint.column_writer = (function cljs$pprint$column_writer(var_args){
var G__27874 = arguments.length;
switch (G__27874) {
case 1:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1 = (function (writer){
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2(writer,cljs.pprint._STAR_default_page_width_STAR_);
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2 = (function (writer,max_columns){
var fields = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max","max",61366548),max_columns,new cljs.core.Keyword(null,"cur","cur",1153190599),(0),new cljs.core.Keyword(null,"line","line",212345235),(0),new cljs.core.Keyword(null,"base","base",185279322),writer], null));
if(typeof cljs.pprint.t_cljs$pprint27875 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint27875 = (function (writer,max_columns,fields,meta27876){
this.writer = writer;
this.max_columns = max_columns;
this.fields = fields;
this.meta27876 = meta27876;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint27875.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (fields){
return (function (_27877,meta27876__$1){
var self__ = this;
var _27877__$1 = this;
return (new cljs.pprint.t_cljs$pprint27875(self__.writer,self__.max_columns,self__.fields,meta27876__$1));
});})(fields))
;

cljs.pprint.t_cljs$pprint27875.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (fields){
return (function (_27877){
var self__ = this;
var _27877__$1 = this;
return self__.meta27876;
});})(fields))
;

cljs.pprint.t_cljs$pprint27875.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(fields))
;

cljs.pprint.t_cljs$pprint27875.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(fields))
;

cljs.pprint.t_cljs$pprint27875.prototype.cljs$core$IWriter$_write$arity$2 = ((function (fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__27878 = cljs.core._EQ_;
var expr__27879 = cljs.core.type(x);
if(cljs.core.truth_((pred__27878.cljs$core$IFn$_invoke$arity$2 ? pred__27878.cljs$core$IFn$_invoke$arity$2(String,expr__27879) : pred__27878.call(null,String,expr__27879)))){
var s = x;
var nl = s.lastIndexOf("\n");
if((nl < (0))){
cljs.pprint.set_field(this$__$1,new cljs.core.Keyword(null,"cur","cur",1153190599),(cljs.pprint.get_field(this$__$1,new cljs.core.Keyword(null,"cur","cur",1153190599)) + cljs.core.count(s)));
} else {
cljs.pprint.set_field(this$__$1,new cljs.core.Keyword(null,"cur","cur",1153190599),((cljs.core.count(s) - nl) - (1)));

cljs.pprint.set_field(this$__$1,new cljs.core.Keyword(null,"line","line",212345235),(cljs.pprint.get_field(this$__$1,new cljs.core.Keyword(null,"line","line",212345235)) + cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (s,nl,pred__27878,expr__27879,this$__$1,fields){
return (function (p1__27872_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__27872_SHARP_,"\n");
});})(s,nl,pred__27878,expr__27879,this$__$1,fields))
,s))));
}

return cljs.core._write(cljs.pprint.get_field(this$__$1,new cljs.core.Keyword(null,"base","base",185279322)),s);
} else {
if(cljs.core.truth_((pred__27878.cljs$core$IFn$_invoke$arity$2 ? pred__27878.cljs$core$IFn$_invoke$arity$2(Number,expr__27879) : pred__27878.call(null,Number,expr__27879)))){
return cljs.pprint.c_write_char(this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__27879)].join('')));
}
}
});})(fields))
;

cljs.pprint.t_cljs$pprint27875.getBasis = ((function (fields){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"max-columns","max-columns",-912112507,null),new cljs.core.Symbol(null,"fields","fields",-291534703,null),new cljs.core.Symbol(null,"meta27876","meta27876",-1543441497,null)], null);
});})(fields))
;

cljs.pprint.t_cljs$pprint27875.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint27875.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint27875";

cljs.pprint.t_cljs$pprint27875.cljs$lang$ctorPrWriter = ((function (fields){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.pprint/t_cljs$pprint27875");
});})(fields))
;

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint27875.
 */
cljs.pprint.__GT_t_cljs$pprint27875 = ((function (fields){
return (function cljs$pprint$__GT_t_cljs$pprint27875(writer__$1,max_columns__$1,fields__$1,meta27876){
return (new cljs.pprint.t_cljs$pprint27875(writer__$1,max_columns__$1,fields__$1,meta27876));
});})(fields))
;

}

return (new cljs.pprint.t_cljs$pprint27875(writer,max_columns,fields,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.pprint.column_writer.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.logical_block = (function (parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,__meta,__extmap,__hash){
this.parent = parent;
this.section = section;
this.start_col = start_col;
this.indent = indent;
this.done_nl = done_nl;
this.intra_block_nl = intra_block_nl;
this.prefix = prefix;
this.per_line_prefix = per_line_prefix;
this.suffix = suffix;
this.logical_block_callback = logical_block_callback;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__12159__auto__,k__12160__auto__){
var self__ = this;
var this__12159__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__12159__auto____$1,k__12160__auto__,null);
});

cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12161__auto__,k27883,else__12162__auto__){
var self__ = this;
var this__12161__auto____$1 = this;
var G__27887 = k27883;
var G__27887__$1 = (((G__27887 instanceof cljs.core.Keyword))?G__27887.fqn:null);
switch (G__27887__$1) {
case "parent":
return self__.parent;

break;
case "section":
return self__.section;

break;
case "start-col":
return self__.start_col;

break;
case "indent":
return self__.indent;

break;
case "done-nl":
return self__.done_nl;

break;
case "intra-block-nl":
return self__.intra_block_nl;

break;
case "prefix":
return self__.prefix;

break;
case "per-line-prefix":
return self__.per_line_prefix;

break;
case "suffix":
return self__.suffix;

break;
case "logical-block-callback":
return self__.logical_block_callback;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27883,else__12162__auto__);

}
});

cljs.pprint.logical_block.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__12173__auto__,writer__12174__auto__,opts__12175__auto__){
var self__ = this;
var this__12173__auto____$1 = this;
var pr_pair__12176__auto__ = ((function (this__12173__auto____$1){
return (function (keyval__12177__auto__){
return cljs.core.pr_sequential_writer(writer__12174__auto__,cljs.core.pr_writer,""," ","",opts__12175__auto__,keyval__12177__auto__);
});})(this__12173__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__12174__auto__,pr_pair__12176__auto__,"#cljs.pprint.logical-block{",", ","}",opts__12175__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"section","section",-300141526),self__.section],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-col","start-col",668080143),self__.start_col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indent","indent",-148200125),self__.indent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),self__.done_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"suffix","suffix",367373057),self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),self__.logical_block_callback],null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27882){
var self__ = this;
var G__27882__$1 = this;
return (new cljs.core.RecordIter((0),G__27882__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"start-col","start-col",668080143),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),new cljs.core.Keyword(null,"suffix","suffix",367373057),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.logical_block.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__12157__auto__){
var self__ = this;
var this__12157__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.logical_block.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__12154__auto__){
var self__ = this;
var this__12154__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__12163__auto__){
var self__ = this;
var this__12163__auto____$1 = this;
return (10 + cljs.core.count(self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__12155__auto__){
var self__ = this;
var this__12155__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__27888 = ((function (h__4030__auto__,this__12155__auto____$1){
return (function (coll__12156__auto__){
return (1977012399 ^ cljs.core.hash_unordered_coll(coll__12156__auto__));
});})(h__4030__auto__,this__12155__auto____$1))
;
return fexpr__27888(this__12155__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

cljs.pprint.logical_block.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27884,other27885){
var self__ = this;
var this27884__$1 = this;
return ((!((other27885 == null))) && ((this27884__$1.constructor === other27885.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27884__$1.parent,other27885.parent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27884__$1.section,other27885.section)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27884__$1.start_col,other27885.start_col)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27884__$1.indent,other27885.indent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27884__$1.done_nl,other27885.done_nl)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27884__$1.intra_block_nl,other27885.intra_block_nl)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27884__$1.prefix,other27885.prefix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27884__$1.per_line_prefix,other27885.per_line_prefix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27884__$1.suffix,other27885.suffix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27884__$1.logical_block_callback,other27885.logical_block_callback)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27884__$1.__extmap,other27885.__extmap)));
});

cljs.pprint.logical_block.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__12168__auto__,k__12169__auto__){
var self__ = this;
var this__12168__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"suffix","suffix",367373057),null,new cljs.core.Keyword(null,"indent","indent",-148200125),null,new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"section","section",-300141526),null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),null,new cljs.core.Keyword(null,"start-col","start-col",668080143),null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),null,new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),null,new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),null], null), null),k__12169__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__12168__auto____$1),self__.__meta),k__12169__auto__);
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__12169__auto__)),null));
}
});

cljs.pprint.logical_block.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12166__auto__,k__12167__auto__,G__27882){
var self__ = this;
var this__12166__auto____$1 = this;
var pred__27889 = cljs.core.keyword_identical_QMARK_;
var expr__27890 = k__12167__auto__;
if(cljs.core.truth_((function (){var G__27892 = new cljs.core.Keyword(null,"parent","parent",-878878779);
var G__27893 = expr__27890;
return (pred__27889.cljs$core$IFn$_invoke$arity$2 ? pred__27889.cljs$core$IFn$_invoke$arity$2(G__27892,G__27893) : pred__27889.call(null,G__27892,G__27893));
})())){
return (new cljs.pprint.logical_block(G__27882,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27894 = new cljs.core.Keyword(null,"section","section",-300141526);
var G__27895 = expr__27890;
return (pred__27889.cljs$core$IFn$_invoke$arity$2 ? pred__27889.cljs$core$IFn$_invoke$arity$2(G__27894,G__27895) : pred__27889.call(null,G__27894,G__27895));
})())){
return (new cljs.pprint.logical_block(self__.parent,G__27882,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27896 = new cljs.core.Keyword(null,"start-col","start-col",668080143);
var G__27897 = expr__27890;
return (pred__27889.cljs$core$IFn$_invoke$arity$2 ? pred__27889.cljs$core$IFn$_invoke$arity$2(G__27896,G__27897) : pred__27889.call(null,G__27896,G__27897));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,G__27882,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27898 = new cljs.core.Keyword(null,"indent","indent",-148200125);
var G__27899 = expr__27890;
return (pred__27889.cljs$core$IFn$_invoke$arity$2 ? pred__27889.cljs$core$IFn$_invoke$arity$2(G__27898,G__27899) : pred__27889.call(null,G__27898,G__27899));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,G__27882,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27900 = new cljs.core.Keyword(null,"done-nl","done-nl",-381024340);
var G__27901 = expr__27890;
return (pred__27889.cljs$core$IFn$_invoke$arity$2 ? pred__27889.cljs$core$IFn$_invoke$arity$2(G__27900,G__27901) : pred__27889.call(null,G__27900,G__27901));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,G__27882,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27902 = new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875);
var G__27903 = expr__27890;
return (pred__27889.cljs$core$IFn$_invoke$arity$2 ? pred__27889.cljs$core$IFn$_invoke$arity$2(G__27902,G__27903) : pred__27889.call(null,G__27902,G__27903));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,G__27882,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27904 = new cljs.core.Keyword(null,"prefix","prefix",-265908465);
var G__27905 = expr__27890;
return (pred__27889.cljs$core$IFn$_invoke$arity$2 ? pred__27889.cljs$core$IFn$_invoke$arity$2(G__27904,G__27905) : pred__27889.call(null,G__27904,G__27905));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,G__27882,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27906 = new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813);
var G__27907 = expr__27890;
return (pred__27889.cljs$core$IFn$_invoke$arity$2 ? pred__27889.cljs$core$IFn$_invoke$arity$2(G__27906,G__27907) : pred__27889.call(null,G__27906,G__27907));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,G__27882,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27908 = new cljs.core.Keyword(null,"suffix","suffix",367373057);
var G__27909 = expr__27890;
return (pred__27889.cljs$core$IFn$_invoke$arity$2 ? pred__27889.cljs$core$IFn$_invoke$arity$2(G__27908,G__27909) : pred__27889.call(null,G__27908,G__27909));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,G__27882,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27910 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194);
var G__27911 = expr__27890;
return (pred__27889.cljs$core$IFn$_invoke$arity$2 ? pred__27889.cljs$core$IFn$_invoke$arity$2(G__27910,G__27911) : pred__27889.call(null,G__27910,G__27911));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,G__27882,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__12167__auto__,G__27882),null));
}
}
}
}
}
}
}
}
}
}
});

cljs.pprint.logical_block.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12171__auto__){
var self__ = this;
var this__12171__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"section","section",-300141526),self__.section],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-col","start-col",668080143),self__.start_col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indent","indent",-148200125),self__.indent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),self__.done_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"suffix","suffix",367373057),self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),self__.logical_block_callback],null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__12158__auto__,G__27882){
var self__ = this;
var this__12158__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,G__27882,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__12164__auto__,entry__12165__auto__){
var self__ = this;
var this__12164__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__12165__auto__)){
return cljs.core._assoc(this__12164__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12165__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12165__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__12164__auto____$1,entry__12165__auto__);
}
});

cljs.pprint.logical_block.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"section","section",1340390001,null),new cljs.core.Symbol(null,"start-col","start-col",-1986355626,null),new cljs.core.Symbol(null,"indent","indent",1492331402,null),new cljs.core.Symbol(null,"done-nl","done-nl",1259507187,null),new cljs.core.Symbol(null,"intra-block-nl","intra-block-nl",-845608894,null),new cljs.core.Symbol(null,"prefix","prefix",1374623062,null),new cljs.core.Symbol(null,"per-line-prefix","per-line-prefix",-1807493956,null),new cljs.core.Symbol(null,"suffix","suffix",2007904584,null),new cljs.core.Symbol(null,"logical-block-callback","logical-block-callback",-1041744575,null)], null);
});

cljs.pprint.logical_block.cljs$lang$type = true;

cljs.pprint.logical_block.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"cljs.pprint/logical-block",null,(1),null));
});

cljs.pprint.logical_block.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"cljs.pprint/logical-block");
});

/**
 * Positional factory function for cljs.pprint/logical-block.
 */
cljs.pprint.__GT_logical_block = (function cljs$pprint$__GT_logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback){
return (new cljs.pprint.logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,null,null,null));
});

/**
 * Factory function for cljs.pprint/logical-block, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_logical_block = (function cljs$pprint$map__GT_logical_block(G__27886){
return (new cljs.pprint.logical_block(new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__27886),new cljs.core.Keyword(null,"section","section",-300141526).cljs$core$IFn$_invoke$arity$1(G__27886),new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(G__27886),new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(G__27886),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(G__27886),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(G__27886),new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(G__27886),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813).cljs$core$IFn$_invoke$arity$1(G__27886),new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(G__27886),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(G__27886),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27886,new cljs.core.Keyword(null,"parent","parent",-878878779),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"start-col","start-col",668080143),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),new cljs.core.Keyword(null,"suffix","suffix",367373057),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194)], 0))),null));
});

cljs.pprint.ancestor_QMARK_ = (function cljs$pprint$ancestor_QMARK_(parent,child){
var child__$1 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(child);
while(true){
if((child__$1 == null)){
return false;
} else {
if((parent === child__$1)){
return true;
} else {
var G__27913 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(child__$1);
child__$1 = G__27913;
continue;

}
}
break;
}
});
cljs.pprint.buffer_length = (function cljs$pprint$buffer_length(l){
var l__$1 = cljs.core.seq(l);
if(l__$1){
return (new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(cljs.core.last(l__$1)) - new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(cljs.core.first(l__$1)));
} else {
return (0);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.buffer_blob = (function (type_tag,data,trailing_white_space,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.data = data;
this.trailing_white_space = trailing_white_space;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__12159__auto__,k__12160__auto__){
var self__ = this;
var this__12159__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__12159__auto____$1,k__12160__auto__,null);
});

cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12161__auto__,k27915,else__12162__auto__){
var self__ = this;
var this__12161__auto____$1 = this;
var G__27919 = k27915;
var G__27919__$1 = (((G__27919 instanceof cljs.core.Keyword))?G__27919.fqn:null);
switch (G__27919__$1) {
case "type-tag":
return self__.type_tag;

break;
case "data":
return self__.data;

break;
case "trailing-white-space":
return self__.trailing_white_space;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27915,else__12162__auto__);

}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__12173__auto__,writer__12174__auto__,opts__12175__auto__){
var self__ = this;
var this__12173__auto____$1 = this;
var pr_pair__12176__auto__ = ((function (this__12173__auto____$1){
return (function (keyval__12177__auto__){
return cljs.core.pr_sequential_writer(writer__12174__auto__,cljs.core.pr_writer,""," ","",opts__12175__auto__,keyval__12177__auto__);
});})(this__12173__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__12174__auto__,pr_pair__12176__auto__,"#cljs.pprint.buffer-blob{",", ","}",opts__12175__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27914){
var self__ = this;
var G__27914__$1 = this;
return (new cljs.core.RecordIter((0),G__27914__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__12157__auto__){
var self__ = this;
var this__12157__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__12154__auto__){
var self__ = this;
var this__12154__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__12163__auto__){
var self__ = this;
var this__12163__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__12155__auto__){
var self__ = this;
var this__12155__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__27920 = ((function (h__4030__auto__,this__12155__auto____$1){
return (function (coll__12156__auto__){
return (1809113693 ^ cljs.core.hash_unordered_coll(coll__12156__auto__));
});})(h__4030__auto__,this__12155__auto____$1))
;
return fexpr__27920(this__12155__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27916,other27917){
var self__ = this;
var this27916__$1 = this;
return ((!((other27917 == null))) && ((this27916__$1.constructor === other27917.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27916__$1.type_tag,other27917.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27916__$1.data,other27917.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27916__$1.trailing_white_space,other27917.trailing_white_space)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27916__$1.start_pos,other27917.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27916__$1.end_pos,other27917.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27916__$1.__extmap,other27917.__extmap)));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__12168__auto__,k__12169__auto__){
var self__ = this;
var this__12168__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__12169__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__12168__auto____$1),self__.__meta),k__12169__auto__);
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__12169__auto__)),null));
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12166__auto__,k__12167__auto__,G__27914){
var self__ = this;
var this__12166__auto____$1 = this;
var pred__27921 = cljs.core.keyword_identical_QMARK_;
var expr__27922 = k__12167__auto__;
if(cljs.core.truth_((function (){var G__27924 = new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267);
var G__27925 = expr__27922;
return (pred__27921.cljs$core$IFn$_invoke$arity$2 ? pred__27921.cljs$core$IFn$_invoke$arity$2(G__27924,G__27925) : pred__27921.call(null,G__27924,G__27925));
})())){
return (new cljs.pprint.buffer_blob(G__27914,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27926 = new cljs.core.Keyword(null,"data","data",-232669377);
var G__27927 = expr__27922;
return (pred__27921.cljs$core$IFn$_invoke$arity$2 ? pred__27921.cljs$core$IFn$_invoke$arity$2(G__27926,G__27927) : pred__27921.call(null,G__27926,G__27927));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,G__27914,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27928 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996);
var G__27929 = expr__27922;
return (pred__27921.cljs$core$IFn$_invoke$arity$2 ? pred__27921.cljs$core$IFn$_invoke$arity$2(G__27928,G__27929) : pred__27921.call(null,G__27928,G__27929));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,G__27914,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27930 = new cljs.core.Keyword(null,"start-pos","start-pos",668789086);
var G__27931 = expr__27922;
return (pred__27921.cljs$core$IFn$_invoke$arity$2 ? pred__27921.cljs$core$IFn$_invoke$arity$2(G__27930,G__27931) : pred__27921.call(null,G__27930,G__27931));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,G__27914,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27932 = new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926);
var G__27933 = expr__27922;
return (pred__27921.cljs$core$IFn$_invoke$arity$2 ? pred__27921.cljs$core$IFn$_invoke$arity$2(G__27932,G__27933) : pred__27921.call(null,G__27932,G__27933));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,G__27914,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__12167__auto__,G__27914),null));
}
}
}
}
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12171__auto__){
var self__ = this;
var this__12171__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__12158__auto__,G__27914){
var self__ = this;
var this__12158__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,G__27914,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__12164__auto__,entry__12165__auto__){
var self__ = this;
var this__12164__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__12165__auto__)){
return cljs.core._assoc(this__12164__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12165__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12165__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__12164__auto____$1,entry__12165__auto__);
}
});

cljs.pprint.buffer_blob.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"trailing-white-space","trailing-white-space",-1158428773,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.buffer_blob.cljs$lang$type = true;

cljs.pprint.buffer_blob.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"cljs.pprint/buffer-blob",null,(1),null));
});

cljs.pprint.buffer_blob.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"cljs.pprint/buffer-blob");
});

/**
 * Positional factory function for cljs.pprint/buffer-blob.
 */
cljs.pprint.__GT_buffer_blob = (function cljs$pprint$__GT_buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/buffer-blob, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_buffer_blob = (function cljs$pprint$map__GT_buffer_blob(G__27918){
return (new cljs.pprint.buffer_blob(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__27918),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__27918),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(G__27918),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__27918),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__27918),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27918,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], 0))),null));
});


cljs.pprint.make_buffer_blob = (function cljs$pprint$make_buffer_blob(data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(new cljs.core.Keyword(null,"buffer-blob","buffer-blob",-1830112173),data,trailing_white_space,start_pos,end_pos,null,null,null));
});

cljs.pprint.buffer_blob_QMARK_ = (function cljs$pprint$buffer_blob_QMARK_(x__27705__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__27705__auto__),new cljs.core.Keyword(null,"buffer-blob","buffer-blob",-1830112173));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.nl_t = (function (type_tag,type,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.type = type;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__12159__auto__,k__12160__auto__){
var self__ = this;
var this__12159__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__12159__auto____$1,k__12160__auto__,null);
});

cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12161__auto__,k27936,else__12162__auto__){
var self__ = this;
var this__12161__auto____$1 = this;
var G__27940 = k27936;
var G__27940__$1 = (((G__27940 instanceof cljs.core.Keyword))?G__27940.fqn:null);
switch (G__27940__$1) {
case "type-tag":
return self__.type_tag;

break;
case "type":
return self__.type;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27936,else__12162__auto__);

}
});

cljs.pprint.nl_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__12173__auto__,writer__12174__auto__,opts__12175__auto__){
var self__ = this;
var this__12173__auto____$1 = this;
var pr_pair__12176__auto__ = ((function (this__12173__auto____$1){
return (function (keyval__12177__auto__){
return cljs.core.pr_sequential_writer(writer__12174__auto__,cljs.core.pr_writer,""," ","",opts__12175__auto__,keyval__12177__auto__);
});})(this__12173__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__12174__auto__,pr_pair__12176__auto__,"#cljs.pprint.nl-t{",", ","}",opts__12175__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27935){
var self__ = this;
var G__27935__$1 = this;
return (new cljs.core.RecordIter((0),G__27935__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.nl_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__12157__auto__){
var self__ = this;
var this__12157__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.nl_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__12154__auto__){
var self__ = this;
var this__12154__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__12163__auto__){
var self__ = this;
var this__12163__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__12155__auto__){
var self__ = this;
var this__12155__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__27941 = ((function (h__4030__auto__,this__12155__auto____$1){
return (function (coll__12156__auto__){
return (-1640656800 ^ cljs.core.hash_unordered_coll(coll__12156__auto__));
});})(h__4030__auto__,this__12155__auto____$1))
;
return fexpr__27941(this__12155__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

cljs.pprint.nl_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27937,other27938){
var self__ = this;
var this27937__$1 = this;
return ((!((other27938 == null))) && ((this27937__$1.constructor === other27938.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27937__$1.type_tag,other27938.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27937__$1.type,other27938.type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27937__$1.logical_block,other27938.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27937__$1.start_pos,other27938.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27937__$1.end_pos,other27938.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27937__$1.__extmap,other27938.__extmap)));
});

cljs.pprint.nl_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__12168__auto__,k__12169__auto__){
var self__ = this;
var this__12168__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__12169__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__12168__auto____$1),self__.__meta),k__12169__auto__);
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__12169__auto__)),null));
}
});

cljs.pprint.nl_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12166__auto__,k__12167__auto__,G__27935){
var self__ = this;
var this__12166__auto____$1 = this;
var pred__27942 = cljs.core.keyword_identical_QMARK_;
var expr__27943 = k__12167__auto__;
if(cljs.core.truth_((function (){var G__27945 = new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267);
var G__27946 = expr__27943;
return (pred__27942.cljs$core$IFn$_invoke$arity$2 ? pred__27942.cljs$core$IFn$_invoke$arity$2(G__27945,G__27946) : pred__27942.call(null,G__27945,G__27946));
})())){
return (new cljs.pprint.nl_t(G__27935,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27947 = new cljs.core.Keyword(null,"type","type",1174270348);
var G__27948 = expr__27943;
return (pred__27942.cljs$core$IFn$_invoke$arity$2 ? pred__27942.cljs$core$IFn$_invoke$arity$2(G__27947,G__27948) : pred__27942.call(null,G__27947,G__27948));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,G__27935,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27949 = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564);
var G__27950 = expr__27943;
return (pred__27942.cljs$core$IFn$_invoke$arity$2 ? pred__27942.cljs$core$IFn$_invoke$arity$2(G__27949,G__27950) : pred__27942.call(null,G__27949,G__27950));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,G__27935,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27951 = new cljs.core.Keyword(null,"start-pos","start-pos",668789086);
var G__27952 = expr__27943;
return (pred__27942.cljs$core$IFn$_invoke$arity$2 ? pred__27942.cljs$core$IFn$_invoke$arity$2(G__27951,G__27952) : pred__27942.call(null,G__27951,G__27952));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,G__27935,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27953 = new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926);
var G__27954 = expr__27943;
return (pred__27942.cljs$core$IFn$_invoke$arity$2 ? pred__27942.cljs$core$IFn$_invoke$arity$2(G__27953,G__27954) : pred__27942.call(null,G__27953,G__27954));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,G__27935,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__12167__auto__,G__27935),null));
}
}
}
}
}
});

cljs.pprint.nl_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12171__auto__){
var self__ = this;
var this__12171__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__12158__auto__,G__27935){
var self__ = this;
var this__12158__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,G__27935,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__12164__auto__,entry__12165__auto__){
var self__ = this;
var this__12164__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__12165__auto__)){
return cljs.core._assoc(this__12164__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12165__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12165__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__12164__auto____$1,entry__12165__auto__);
}
});

cljs.pprint.nl_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.nl_t.cljs$lang$type = true;

cljs.pprint.nl_t.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"cljs.pprint/nl-t",null,(1),null));
});

cljs.pprint.nl_t.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"cljs.pprint/nl-t");
});

/**
 * Positional factory function for cljs.pprint/nl-t.
 */
cljs.pprint.__GT_nl_t = (function cljs$pprint$__GT_nl_t(type_tag,type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(type_tag,type,logical_block,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/nl-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_nl_t = (function cljs$pprint$map__GT_nl_t(G__27939){
return (new cljs.pprint.nl_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__27939),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__27939),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__27939),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__27939),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__27939),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27939,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], 0))),null));
});


cljs.pprint.make_nl_t = (function cljs$pprint$make_nl_t(type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114),type,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.nl_t_QMARK_ = (function cljs$pprint$nl_t_QMARK_(x__27705__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__27705__auto__),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.start_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__12159__auto__,k__12160__auto__){
var self__ = this;
var this__12159__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__12159__auto____$1,k__12160__auto__,null);
});

cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12161__auto__,k27957,else__12162__auto__){
var self__ = this;
var this__12161__auto____$1 = this;
var G__27961 = k27957;
var G__27961__$1 = (((G__27961 instanceof cljs.core.Keyword))?G__27961.fqn:null);
switch (G__27961__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27957,else__12162__auto__);

}
});

cljs.pprint.start_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__12173__auto__,writer__12174__auto__,opts__12175__auto__){
var self__ = this;
var this__12173__auto____$1 = this;
var pr_pair__12176__auto__ = ((function (this__12173__auto____$1){
return (function (keyval__12177__auto__){
return cljs.core.pr_sequential_writer(writer__12174__auto__,cljs.core.pr_writer,""," ","",opts__12175__auto__,keyval__12177__auto__);
});})(this__12173__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__12174__auto__,pr_pair__12176__auto__,"#cljs.pprint.start-block-t{",", ","}",opts__12175__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27956){
var self__ = this;
var G__27956__$1 = this;
return (new cljs.core.RecordIter((0),G__27956__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.start_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__12157__auto__){
var self__ = this;
var this__12157__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.start_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__12154__auto__){
var self__ = this;
var this__12154__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__12163__auto__){
var self__ = this;
var this__12163__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__12155__auto__){
var self__ = this;
var this__12155__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__27962 = ((function (h__4030__auto__,this__12155__auto____$1){
return (function (coll__12156__auto__){
return (-414877272 ^ cljs.core.hash_unordered_coll(coll__12156__auto__));
});})(h__4030__auto__,this__12155__auto____$1))
;
return fexpr__27962(this__12155__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27958,other27959){
var self__ = this;
var this27958__$1 = this;
return ((!((other27959 == null))) && ((this27958__$1.constructor === other27959.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27958__$1.type_tag,other27959.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27958__$1.logical_block,other27959.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27958__$1.start_pos,other27959.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27958__$1.end_pos,other27959.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27958__$1.__extmap,other27959.__extmap)));
});

cljs.pprint.start_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__12168__auto__,k__12169__auto__){
var self__ = this;
var this__12168__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__12169__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__12168__auto____$1),self__.__meta),k__12169__auto__);
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__12169__auto__)),null));
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12166__auto__,k__12167__auto__,G__27956){
var self__ = this;
var this__12166__auto____$1 = this;
var pred__27963 = cljs.core.keyword_identical_QMARK_;
var expr__27964 = k__12167__auto__;
if(cljs.core.truth_((function (){var G__27966 = new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267);
var G__27967 = expr__27964;
return (pred__27963.cljs$core$IFn$_invoke$arity$2 ? pred__27963.cljs$core$IFn$_invoke$arity$2(G__27966,G__27967) : pred__27963.call(null,G__27966,G__27967));
})())){
return (new cljs.pprint.start_block_t(G__27956,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27968 = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564);
var G__27969 = expr__27964;
return (pred__27963.cljs$core$IFn$_invoke$arity$2 ? pred__27963.cljs$core$IFn$_invoke$arity$2(G__27968,G__27969) : pred__27963.call(null,G__27968,G__27969));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,G__27956,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27970 = new cljs.core.Keyword(null,"start-pos","start-pos",668789086);
var G__27971 = expr__27964;
return (pred__27963.cljs$core$IFn$_invoke$arity$2 ? pred__27963.cljs$core$IFn$_invoke$arity$2(G__27970,G__27971) : pred__27963.call(null,G__27970,G__27971));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,G__27956,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27972 = new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926);
var G__27973 = expr__27964;
return (pred__27963.cljs$core$IFn$_invoke$arity$2 ? pred__27963.cljs$core$IFn$_invoke$arity$2(G__27972,G__27973) : pred__27963.call(null,G__27972,G__27973));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__27956,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__12167__auto__,G__27956),null));
}
}
}
}
});

cljs.pprint.start_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12171__auto__){
var self__ = this;
var this__12171__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__12158__auto__,G__27956){
var self__ = this;
var this__12158__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__27956,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__12164__auto__,entry__12165__auto__){
var self__ = this;
var this__12164__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__12165__auto__)){
return cljs.core._assoc(this__12164__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12165__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12165__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__12164__auto____$1,entry__12165__auto__);
}
});

cljs.pprint.start_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.start_block_t.cljs$lang$type = true;

cljs.pprint.start_block_t.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"cljs.pprint/start-block-t",null,(1),null));
});

cljs.pprint.start_block_t.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"cljs.pprint/start-block-t");
});

/**
 * Positional factory function for cljs.pprint/start-block-t.
 */
cljs.pprint.__GT_start_block_t = (function cljs$pprint$__GT_start_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/start-block-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_start_block_t = (function cljs$pprint$map__GT_start_block_t(G__27960){
return (new cljs.pprint.start_block_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__27960),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__27960),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__27960),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__27960),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27960,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], 0))),null));
});


cljs.pprint.make_start_block_t = (function cljs$pprint$make_start_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(new cljs.core.Keyword(null,"start-block-t","start-block-t",-373430594),logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.start_block_t_QMARK_ = (function cljs$pprint$start_block_t_QMARK_(x__27705__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__27705__auto__),new cljs.core.Keyword(null,"start-block-t","start-block-t",-373430594));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.end_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__12159__auto__,k__12160__auto__){
var self__ = this;
var this__12159__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__12159__auto____$1,k__12160__auto__,null);
});

cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12161__auto__,k28001,else__12162__auto__){
var self__ = this;
var this__12161__auto____$1 = this;
var G__28022 = k28001;
var G__28022__$1 = (((G__28022 instanceof cljs.core.Keyword))?G__28022.fqn:null);
switch (G__28022__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28001,else__12162__auto__);

}
});

cljs.pprint.end_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__12173__auto__,writer__12174__auto__,opts__12175__auto__){
var self__ = this;
var this__12173__auto____$1 = this;
var pr_pair__12176__auto__ = ((function (this__12173__auto____$1){
return (function (keyval__12177__auto__){
return cljs.core.pr_sequential_writer(writer__12174__auto__,cljs.core.pr_writer,""," ","",opts__12175__auto__,keyval__12177__auto__);
});})(this__12173__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__12174__auto__,pr_pair__12176__auto__,"#cljs.pprint.end-block-t{",", ","}",opts__12175__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28000){
var self__ = this;
var G__28000__$1 = this;
return (new cljs.core.RecordIter((0),G__28000__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.end_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__12157__auto__){
var self__ = this;
var this__12157__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.end_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__12154__auto__){
var self__ = this;
var this__12154__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__12163__auto__){
var self__ = this;
var this__12163__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__12155__auto__){
var self__ = this;
var this__12155__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__28038 = ((function (h__4030__auto__,this__12155__auto____$1){
return (function (coll__12156__auto__){
return (1365867980 ^ cljs.core.hash_unordered_coll(coll__12156__auto__));
});})(h__4030__auto__,this__12155__auto____$1))
;
return fexpr__28038(this__12155__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28002,other28003){
var self__ = this;
var this28002__$1 = this;
return ((!((other28003 == null))) && ((this28002__$1.constructor === other28003.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28002__$1.type_tag,other28003.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28002__$1.logical_block,other28003.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28002__$1.start_pos,other28003.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28002__$1.end_pos,other28003.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28002__$1.__extmap,other28003.__extmap)));
});

cljs.pprint.end_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__12168__auto__,k__12169__auto__){
var self__ = this;
var this__12168__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__12169__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__12168__auto____$1),self__.__meta),k__12169__auto__);
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__12169__auto__)),null));
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12166__auto__,k__12167__auto__,G__28000){
var self__ = this;
var this__12166__auto____$1 = this;
var pred__28070 = cljs.core.keyword_identical_QMARK_;
var expr__28071 = k__12167__auto__;
if(cljs.core.truth_((function (){var G__28073 = new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267);
var G__28074 = expr__28071;
return (pred__28070.cljs$core$IFn$_invoke$arity$2 ? pred__28070.cljs$core$IFn$_invoke$arity$2(G__28073,G__28074) : pred__28070.call(null,G__28073,G__28074));
})())){
return (new cljs.pprint.end_block_t(G__28000,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28075 = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564);
var G__28076 = expr__28071;
return (pred__28070.cljs$core$IFn$_invoke$arity$2 ? pred__28070.cljs$core$IFn$_invoke$arity$2(G__28075,G__28076) : pred__28070.call(null,G__28075,G__28076));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,G__28000,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28077 = new cljs.core.Keyword(null,"start-pos","start-pos",668789086);
var G__28078 = expr__28071;
return (pred__28070.cljs$core$IFn$_invoke$arity$2 ? pred__28070.cljs$core$IFn$_invoke$arity$2(G__28077,G__28078) : pred__28070.call(null,G__28077,G__28078));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,G__28000,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28079 = new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926);
var G__28080 = expr__28071;
return (pred__28070.cljs$core$IFn$_invoke$arity$2 ? pred__28070.cljs$core$IFn$_invoke$arity$2(G__28079,G__28080) : pred__28070.call(null,G__28079,G__28080));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__28000,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__12167__auto__,G__28000),null));
}
}
}
}
});

cljs.pprint.end_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12171__auto__){
var self__ = this;
var this__12171__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__12158__auto__,G__28000){
var self__ = this;
var this__12158__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__28000,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__12164__auto__,entry__12165__auto__){
var self__ = this;
var this__12164__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__12165__auto__)){
return cljs.core._assoc(this__12164__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12165__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12165__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__12164__auto____$1,entry__12165__auto__);
}
});

cljs.pprint.end_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.end_block_t.cljs$lang$type = true;

cljs.pprint.end_block_t.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"cljs.pprint/end-block-t",null,(1),null));
});

cljs.pprint.end_block_t.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"cljs.pprint/end-block-t");
});

/**
 * Positional factory function for cljs.pprint/end-block-t.
 */
cljs.pprint.__GT_end_block_t = (function cljs$pprint$__GT_end_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/end-block-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_end_block_t = (function cljs$pprint$map__GT_end_block_t(G__28004){
return (new cljs.pprint.end_block_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__28004),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__28004),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__28004),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__28004),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28004,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], 0))),null));
});


cljs.pprint.make_end_block_t = (function cljs$pprint$make_end_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(new cljs.core.Keyword(null,"end-block-t","end-block-t",1544648735),logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.end_block_t_QMARK_ = (function cljs$pprint$end_block_t_QMARK_(x__27705__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__27705__auto__),new cljs.core.Keyword(null,"end-block-t","end-block-t",1544648735));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.indent_t = (function (type_tag,logical_block,relative_to,offset,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.relative_to = relative_to;
this.offset = offset;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__12159__auto__,k__12160__auto__){
var self__ = this;
var this__12159__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__12159__auto____$1,k__12160__auto__,null);
});

cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12161__auto__,k28089,else__12162__auto__){
var self__ = this;
var this__12161__auto____$1 = this;
var G__28093 = k28089;
var G__28093__$1 = (((G__28093 instanceof cljs.core.Keyword))?G__28093.fqn:null);
switch (G__28093__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "relative-to":
return self__.relative_to;

break;
case "offset":
return self__.offset;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28089,else__12162__auto__);

}
});

cljs.pprint.indent_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__12173__auto__,writer__12174__auto__,opts__12175__auto__){
var self__ = this;
var this__12173__auto____$1 = this;
var pr_pair__12176__auto__ = ((function (this__12173__auto____$1){
return (function (keyval__12177__auto__){
return cljs.core.pr_sequential_writer(writer__12174__auto__,cljs.core.pr_writer,""," ","",opts__12175__auto__,keyval__12177__auto__);
});})(this__12173__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__12174__auto__,pr_pair__12176__auto__,"#cljs.pprint.indent-t{",", ","}",opts__12175__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),self__.relative_to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28088){
var self__ = this;
var G__28088__$1 = this;
return (new cljs.core.RecordIter((0),G__28088__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.indent_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__12157__auto__){
var self__ = this;
var this__12157__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.indent_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__12154__auto__){
var self__ = this;
var this__12154__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__12163__auto__){
var self__ = this;
var this__12163__auto____$1 = this;
return (6 + cljs.core.count(self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__12155__auto__){
var self__ = this;
var this__12155__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__28094 = ((function (h__4030__auto__,this__12155__auto____$1){
return (function (coll__12156__auto__){
return (-1602780238 ^ cljs.core.hash_unordered_coll(coll__12156__auto__));
});})(h__4030__auto__,this__12155__auto____$1))
;
return fexpr__28094(this__12155__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

cljs.pprint.indent_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28090,other28091){
var self__ = this;
var this28090__$1 = this;
return ((!((other28091 == null))) && ((this28090__$1.constructor === other28091.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28090__$1.type_tag,other28091.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28090__$1.logical_block,other28091.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28090__$1.relative_to,other28091.relative_to)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28090__$1.offset,other28091.offset)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28090__$1.start_pos,other28091.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28090__$1.end_pos,other28091.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28090__$1.__extmap,other28091.__extmap)));
});

cljs.pprint.indent_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__12168__auto__,k__12169__auto__){
var self__ = this;
var this__12168__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"offset","offset",296498311),null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__12169__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__12168__auto____$1),self__.__meta),k__12169__auto__);
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__12169__auto__)),null));
}
});

cljs.pprint.indent_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12166__auto__,k__12167__auto__,G__28088){
var self__ = this;
var this__12166__auto____$1 = this;
var pred__28095 = cljs.core.keyword_identical_QMARK_;
var expr__28096 = k__12167__auto__;
if(cljs.core.truth_((function (){var G__28098 = new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267);
var G__28099 = expr__28096;
return (pred__28095.cljs$core$IFn$_invoke$arity$2 ? pred__28095.cljs$core$IFn$_invoke$arity$2(G__28098,G__28099) : pred__28095.call(null,G__28098,G__28099));
})())){
return (new cljs.pprint.indent_t(G__28088,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28100 = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564);
var G__28101 = expr__28096;
return (pred__28095.cljs$core$IFn$_invoke$arity$2 ? pred__28095.cljs$core$IFn$_invoke$arity$2(G__28100,G__28101) : pred__28095.call(null,G__28100,G__28101));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,G__28088,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28102 = new cljs.core.Keyword(null,"relative-to","relative-to",-470100051);
var G__28103 = expr__28096;
return (pred__28095.cljs$core$IFn$_invoke$arity$2 ? pred__28095.cljs$core$IFn$_invoke$arity$2(G__28102,G__28103) : pred__28095.call(null,G__28102,G__28103));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,G__28088,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28104 = new cljs.core.Keyword(null,"offset","offset",296498311);
var G__28105 = expr__28096;
return (pred__28095.cljs$core$IFn$_invoke$arity$2 ? pred__28095.cljs$core$IFn$_invoke$arity$2(G__28104,G__28105) : pred__28095.call(null,G__28104,G__28105));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,G__28088,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28106 = new cljs.core.Keyword(null,"start-pos","start-pos",668789086);
var G__28107 = expr__28096;
return (pred__28095.cljs$core$IFn$_invoke$arity$2 ? pred__28095.cljs$core$IFn$_invoke$arity$2(G__28106,G__28107) : pred__28095.call(null,G__28106,G__28107));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,G__28088,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28108 = new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926);
var G__28109 = expr__28096;
return (pred__28095.cljs$core$IFn$_invoke$arity$2 ? pred__28095.cljs$core$IFn$_invoke$arity$2(G__28108,G__28109) : pred__28095.call(null,G__28108,G__28109));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,G__28088,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__12167__auto__,G__28088),null));
}
}
}
}
}
}
});

cljs.pprint.indent_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12171__auto__){
var self__ = this;
var this__12171__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),self__.relative_to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__12158__auto__,G__28088){
var self__ = this;
var this__12158__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,G__28088,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__12164__auto__,entry__12165__auto__){
var self__ = this;
var this__12164__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__12165__auto__)){
return cljs.core._assoc(this__12164__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12165__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12165__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__12164__auto____$1,entry__12165__auto__);
}
});

cljs.pprint.indent_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"relative-to","relative-to",1170431476,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.indent_t.cljs$lang$type = true;

cljs.pprint.indent_t.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"cljs.pprint/indent-t",null,(1),null));
});

cljs.pprint.indent_t.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"cljs.pprint/indent-t");
});

/**
 * Positional factory function for cljs.pprint/indent-t.
 */
cljs.pprint.__GT_indent_t = (function cljs$pprint$__GT_indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/indent-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_indent_t = (function cljs$pprint$map__GT_indent_t(G__28092){
return (new cljs.pprint.indent_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__28092),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__28092),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051).cljs$core$IFn$_invoke$arity$1(G__28092),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(G__28092),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__28092),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__28092),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28092,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], 0))),null));
});


cljs.pprint.make_indent_t = (function cljs$pprint$make_indent_t(logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(new cljs.core.Keyword(null,"indent-t","indent-t",528318969),logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

cljs.pprint.indent_t_QMARK_ = (function cljs$pprint$indent_t_QMARK_(x__27705__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__27705__auto__),new cljs.core.Keyword(null,"indent-t","indent-t",528318969));
});
cljs.pprint.pp_newline = (function cljs$pprint$pp_newline(){
return "\n";
});
if(typeof cljs.pprint.write_token !== 'undefined'){
} else {
cljs.pprint.write_token = (function (){var method_table__4382__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","write-token"),((function (method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__){
return (function (p1__28116_SHARP_,p2__28115_SHARP_){
return new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(p2__28115_SHARP_);
});})(method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
cljs.core._add_method(cljs.pprint.write_token,new cljs.core.Keyword(null,"start-block-t","start-block-t",-373430594),(function (this$,token){
var temp__5457__auto___28124 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5457__auto___28124)){
var cb_28125 = temp__5457__auto___28124;
var G__28119_28126 = new cljs.core.Keyword(null,"start","start",-355208981);
(cb_28125.cljs$core$IFn$_invoke$arity$1 ? cb_28125.cljs$core$IFn$_invoke$arity$1(G__28119_28126) : cb_28125.call(null,G__28119_28126));
} else {
}

var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token);
var temp__5457__auto___28127 = new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(temp__5457__auto___28127)){
var prefix_28128 = temp__5457__auto___28127;
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix_28128);
} else {
}

var col = cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_(new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),col);
}));
cljs.core._add_method(cljs.pprint.write_token,new cljs.core.Keyword(null,"end-block-t","end-block-t",1544648735),(function (this$,token){
var temp__5457__auto___28130 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5457__auto___28130)){
var cb_28131 = temp__5457__auto___28130;
var G__28129_28132 = new cljs.core.Keyword(null,"end","end",-268185958);
(cb_28131.cljs$core$IFn$_invoke$arity$1 ? cb_28131.cljs$core$IFn$_invoke$arity$1(G__28129_28132) : cb_28131.call(null,G__28129_28132));
} else {
}

var temp__5457__auto__ = new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token));
if(cljs.core.truth_(temp__5457__auto__)){
var suffix = temp__5457__auto__;
return cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),suffix);
} else {
return null;
}
}));
cljs.core._add_method(cljs.pprint.write_token,new cljs.core.Keyword(null,"indent-t","indent-t",528318969),(function (this$,token){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token);
return cljs.core.reset_BANG_(new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),(new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(token) + (function (){var pred__28135 = cljs.core._EQ_;
var expr__28136 = new cljs.core.Keyword(null,"relative-to","relative-to",-470100051).cljs$core$IFn$_invoke$arity$1(token);
if(cljs.core.truth_((function (){var G__28138 = new cljs.core.Keyword(null,"block","block",664686210);
var G__28139 = expr__28136;
return (pred__28135.cljs$core$IFn$_invoke$arity$2 ? pred__28135.cljs$core$IFn$_invoke$arity$2(G__28138,G__28139) : pred__28135.call(null,G__28138,G__28139));
})())){
return cljs.core.deref(new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_((function (){var G__28140 = new cljs.core.Keyword(null,"current","current",-1088038603);
var G__28141 = expr__28136;
return (pred__28135.cljs$core$IFn$_invoke$arity$2 ? pred__28135.cljs$core$IFn$_invoke$arity$2(G__28140,G__28141) : pred__28135.call(null,G__28140,G__28141));
})())){
return cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28136)].join('')));
}
}
})()));
}));
cljs.core._add_method(cljs.pprint.write_token,new cljs.core.Keyword(null,"buffer-blob","buffer-blob",-1830112173),(function (this$,token){
return cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(token));
}));
cljs.core._add_method(cljs.pprint.write_token,new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114),(function (this$,token){
if(cljs.core.truth_((function (){var or__3922__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"mandatory","mandatory",542802336));
if(or__3922__auto__){
return or__3922__auto__;
} else {
var and__3911__auto__ = !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"fill","fill",883462889)));
if(and__3911__auto__){
return cljs.core.deref(new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token)));
} else {
return and__3911__auto__;
}
}
})())){
(cljs.pprint.emit_nl.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.emit_nl.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.emit_nl.call(null,this$,token));
} else {
var temp__5455__auto___28147 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5455__auto___28147)){
var tws_28148 = temp__5455__auto___28147;
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_28148);
} else {
}
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
}));
cljs.pprint.write_tokens = (function cljs$pprint$write_tokens(this$,tokens,force_trailing_whitespace){
var seq__28149 = cljs.core.seq(tokens);
var chunk__28150 = null;
var count__28151 = (0);
var i__28152 = (0);
while(true){
if((i__28152 < count__28151)){
var token = chunk__28150.cljs$core$IIndexed$_nth$arity$2(null,i__28152);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114)))){
var temp__5455__auto___28153 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5455__auto___28153)){
var tws_28154 = temp__5455__auto___28153;
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_28154);
} else {
}
} else {
}

(cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.write_token.call(null,this$,token));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(token));

var tws_28155 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_((function (){var and__3911__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__3911__auto__)){
return tws_28155;
} else {
return and__3911__auto__;
}
})())){
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_28155);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
} else {
}


var G__28156 = seq__28149;
var G__28157 = chunk__28150;
var G__28158 = count__28151;
var G__28159 = (i__28152 + (1));
seq__28149 = G__28156;
chunk__28150 = G__28157;
count__28151 = G__28158;
i__28152 = G__28159;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__28149);
if(temp__5457__auto__){
var seq__28149__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28149__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__28149__$1);
var G__28160 = cljs.core.chunk_rest(seq__28149__$1);
var G__28161 = c__4319__auto__;
var G__28162 = cljs.core.count(c__4319__auto__);
var G__28163 = (0);
seq__28149 = G__28160;
chunk__28150 = G__28161;
count__28151 = G__28162;
i__28152 = G__28163;
continue;
} else {
var token = cljs.core.first(seq__28149__$1);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114)))){
var temp__5455__auto___28167 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5455__auto___28167)){
var tws_28168 = temp__5455__auto___28167;
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_28168);
} else {
}
} else {
}

(cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.write_token.call(null,this$,token));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(token));

var tws_28173 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_((function (){var and__3911__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__3911__auto__)){
return tws_28173;
} else {
return and__3911__auto__;
}
})())){
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_28173);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
} else {
}


var G__28175 = cljs.core.next(seq__28149__$1);
var G__28176 = null;
var G__28177 = (0);
var G__28178 = (0);
seq__28149 = G__28175;
chunk__28150 = G__28176;
count__28151 = G__28177;
i__28152 = G__28178;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.pprint.tokens_fit_QMARK_ = (function cljs$pprint$tokens_fit_QMARK_(this$,tokens){
var maxcol = cljs.pprint.get_max_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
return (((maxcol == null)) || (((cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)))) + cljs.pprint.buffer_length(tokens)) < maxcol)));
});
cljs.pprint.linear_nl_QMARK_ = (function cljs$pprint$linear_nl_QMARK_(this$,lb,section){
var or__3922__auto__ = cljs.core.deref(new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,section));
}
});
cljs.pprint.miser_nl_QMARK_ = (function cljs$pprint$miser_nl_QMARK_(this$,lb,section){
var miser_width = (cljs.pprint.get_miser_width.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.get_miser_width.cljs$core$IFn$_invoke$arity$1(this$) : cljs.pprint.get_miser_width.call(null,this$));
var maxcol = cljs.pprint.get_max_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
var and__3911__auto__ = miser_width;
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = maxcol;
if(cljs.core.truth_(and__3911__auto____$1)){
var and__3911__auto____$2 = (cljs.core.deref(new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb)) >= (maxcol - miser_width));
if(and__3911__auto____$2){
return cljs.pprint.linear_nl_QMARK_(this$,lb,section);
} else {
return and__3911__auto____$2;
}
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
});
if(typeof cljs.pprint.emit_nl_QMARK_ !== 'undefined'){
} else {
cljs.pprint.emit_nl_QMARK_ = (function (){var method_table__4382__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","emit-nl?"),((function (method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__){
return (function (t,_,___$1,___$2){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(t);
});})(method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
cljs.core._add_method(cljs.pprint.emit_nl_QMARK_,new cljs.core.Keyword(null,"linear","linear",872268697),(function (newl,this$,section,_){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.linear_nl_QMARK_(this$,lb,section);
}));
cljs.core._add_method(cljs.pprint.emit_nl_QMARK_,new cljs.core.Keyword(null,"miser","miser",-556060186),(function (newl,this$,section,_){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.miser_nl_QMARK_(this$,lb,section);
}));
cljs.core._add_method(cljs.pprint.emit_nl_QMARK_,new cljs.core.Keyword(null,"fill","fill",883462889),(function (newl,this$,section,subsection){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(newl);
var or__3922__auto__ = cljs.core.deref(new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,subsection));
if(or__3922__auto____$1){
return or__3922__auto____$1;
} else {
return cljs.pprint.miser_nl_QMARK_(this$,lb,section);
}
}
}));
cljs.core._add_method(cljs.pprint.emit_nl_QMARK_,new cljs.core.Keyword(null,"mandatory","mandatory",542802336),(function (_,___$1,___$2,___$3){
return true;
}));
cljs.pprint.get_section = (function cljs$pprint$get_section(buffer){
var nl = cljs.core.first(buffer);
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (nl,lb){
return (function (p1__28184_SHARP_){
return cljs.core.not((function (){var and__3911__auto__ = cljs.pprint.nl_t_QMARK_(p1__28184_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.pprint.ancestor_QMARK_(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(p1__28184_SHARP_),lb);
} else {
return and__3911__auto__;
}
})());
});})(nl,lb))
,cljs.core.next(buffer)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [section,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((cljs.core.count(section) + (1)),buffer))], null);
});
cljs.pprint.get_sub_section = (function cljs$pprint$get_sub_section(buffer){
var nl = cljs.core.first(buffer);
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (nl,lb){
return (function (p1__28187_SHARP_){
var nl_lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(p1__28187_SHARP_);
return cljs.core.not((function (){var and__3911__auto__ = cljs.pprint.nl_t_QMARK_(p1__28187_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
var or__3922__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nl_lb,lb);
if(or__3922__auto__){
return or__3922__auto__;
} else {
return cljs.pprint.ancestor_QMARK_(nl_lb,lb);
}
} else {
return and__3911__auto__;
}
})());
});})(nl,lb))
,cljs.core.next(buffer)));
return section;
});
cljs.pprint.update_nl_state = (function cljs$pprint$update_nl_state(lb){
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(lb),true);

cljs.core.reset_BANG_(new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(lb),true);

var lb__$1 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(lb);
while(true){
if(cljs.core.truth_(lb__$1)){
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(lb__$1),true);

cljs.core.reset_BANG_(new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(lb__$1),true);

var G__28193 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(lb__$1);
lb__$1 = G__28193;
continue;
} else {
return null;
}
break;
}
});
cljs.pprint.emit_nl = (function cljs$pprint$emit_nl(this$,nl){
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);

var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(nl);
var prefix = new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(prefix)){
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var istr_28200 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((cljs.core.deref(new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb)) - cljs.core.count(prefix))," "));
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),istr_28200);

return cljs.pprint.update_nl_state(lb);
});
cljs.pprint.split_at_newline = (function cljs$pprint$split_at_newline(tokens){
var pre = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__28201_SHARP_){
return cljs.core.not(cljs.pprint.nl_t_QMARK_(p1__28201_SHARP_));
}),tokens));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pre),tokens))], null);
});
cljs.pprint.write_token_string = (function cljs$pprint$write_token_string(this$,tokens){
var vec__28204 = cljs.pprint.split_at_newline(tokens);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28204,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28204,(1),null);
if(cljs.core.truth_(a)){
cljs.pprint.write_tokens(this$,a,false);
} else {
}

if(cljs.core.truth_(b)){
var vec__28207 = cljs.pprint.get_section(b);
var section = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28207,(0),null);
var remainder = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28207,(1),null);
var newl = cljs.core.first(b);
var do_nl = (function (){var G__28210 = newl;
var G__28211 = this$;
var G__28212 = section;
var G__28213 = cljs.pprint.get_sub_section(b);
return (cljs.pprint.emit_nl_QMARK_.cljs$core$IFn$_invoke$arity$4 ? cljs.pprint.emit_nl_QMARK_.cljs$core$IFn$_invoke$arity$4(G__28210,G__28211,G__28212,G__28213) : cljs.pprint.emit_nl_QMARK_.call(null,G__28210,G__28211,G__28212,G__28213));
})();
var result = (cljs.core.truth_(do_nl)?(function (){
cljs.pprint.emit_nl(this$,newl);

return cljs.core.next(b);
})()
:b);
var long_section = cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,result));
var result__$1 = ((long_section)?(function (){var rem2 = (cljs.pprint.write_token_string.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token_string.cljs$core$IFn$_invoke$arity$2(this$,section) : cljs.pprint.write_token_string.call(null,this$,section));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rem2,section)){
cljs.pprint.write_tokens(this$,section,false);

return remainder;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(rem2,remainder));
}
})():result);
return result__$1;
} else {
return null;
}
});
cljs.pprint.write_line = (function cljs$pprint$write_line(this$){
var buffer = new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
while(true){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,buffer));

if(cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,buffer))){
var new_buffer = cljs.pprint.write_token_string(this$,buffer);
if(!((buffer === new_buffer))){
var G__28215 = new_buffer;
buffer = G__28215;
continue;
} else {
return null;
}
} else {
return null;
}
break;
}
});
cljs.pprint.add_to_buffer = (function cljs$pprint$add_to_buffer(this$,token){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),token));

if(cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)))))){
return cljs.pprint.write_line(this$);
} else {
return null;
}
});
cljs.pprint.write_buffered_output = (function cljs$pprint$write_buffered_output(this$){
cljs.pprint.write_line(this$);

var temp__5455__auto__ = new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5455__auto__)){
var buf = temp__5455__auto__;
cljs.pprint.write_tokens(this$,buf,true);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.PersistentVector.EMPTY);
} else {
return null;
}
});
cljs.pprint.write_white_space = (function cljs$pprint$write_white_space(this$){
var temp__5457__auto__ = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5457__auto__)){
var tws = temp__5457__auto__;
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
} else {
return null;
}
});
cljs.pprint.write_initial_lines = (function cljs$pprint$write_initial_lines(this$,s){
var lines = clojure.string.split.cljs$core$IFn$_invoke$arity$3(s,"\n",(-1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(lines),(1))){
return s;
} else {
var prefix = new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)))));
var l = cljs.core.first(lines);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"buffering","buffering",-876713613),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))))){
var oldpos_28224 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos_28225 = (oldpos_28224 + cljs.core.count(l));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos_28225);

cljs.pprint.add_to_buffer(this$,cljs.pprint.make_buffer_blob(l,null,oldpos_28224,newpos_28225));

cljs.pprint.write_buffered_output(this$);
} else {
cljs.pprint.write_white_space(this$);

cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l);
}

cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),"\n");

var seq__28218_28227 = cljs.core.seq(cljs.core.next(cljs.core.butlast(lines)));
var chunk__28219_28228 = null;
var count__28220_28229 = (0);
var i__28221_28230 = (0);
while(true){
if((i__28221_28230 < count__28220_28229)){
var l_28231__$1 = chunk__28219_28228.cljs$core$IIndexed$_nth$arity$2(null,i__28221_28230);
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l_28231__$1);

cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

if(cljs.core.truth_(prefix)){
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}


var G__28233 = seq__28218_28227;
var G__28234 = chunk__28219_28228;
var G__28235 = count__28220_28229;
var G__28236 = (i__28221_28230 + (1));
seq__28218_28227 = G__28233;
chunk__28219_28228 = G__28234;
count__28220_28229 = G__28235;
i__28221_28230 = G__28236;
continue;
} else {
var temp__5457__auto___28237 = cljs.core.seq(seq__28218_28227);
if(temp__5457__auto___28237){
var seq__28218_28239__$1 = temp__5457__auto___28237;
if(cljs.core.chunked_seq_QMARK_(seq__28218_28239__$1)){
var c__4319__auto___28240 = cljs.core.chunk_first(seq__28218_28239__$1);
var G__28241 = cljs.core.chunk_rest(seq__28218_28239__$1);
var G__28242 = c__4319__auto___28240;
var G__28243 = cljs.core.count(c__4319__auto___28240);
var G__28244 = (0);
seq__28218_28227 = G__28241;
chunk__28219_28228 = G__28242;
count__28220_28229 = G__28243;
i__28221_28230 = G__28244;
continue;
} else {
var l_28245__$1 = cljs.core.first(seq__28218_28239__$1);
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l_28245__$1);

cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

if(cljs.core.truth_(prefix)){
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}


var G__28246 = cljs.core.next(seq__28218_28239__$1);
var G__28247 = null;
var G__28248 = (0);
var G__28249 = (0);
seq__28218_28227 = G__28246;
chunk__28219_28228 = G__28247;
count__28220_28229 = G__28248;
i__28221_28230 = G__28249;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffering","buffering",-876713613),new cljs.core.Keyword(null,"writing","writing",-1486865108));

return cljs.core.last(lines);
}
});
cljs.pprint.p_write_char = (function cljs$pprint$p_write_char(this$,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space(this$);

return cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),c);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\n")){
return cljs.pprint.write_initial_lines(this$,"\n");
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos = (oldpos + (1));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos);

return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_buffer_blob(cljs.core.char$(c),null,oldpos,newpos));
}
}
});
cljs.pprint.pretty_writer = (function cljs$pprint$pretty_writer(writer,max_columns,miser_width){
var lb = (new cljs.pprint.logical_block(null,null,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),null,null,null,null,null,null,null));
var fields = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776),new cljs.core.Keyword(null,"miser-width","miser-width",-1310049437),new cljs.core.Keyword(null,"buffer-block","buffer-block",-10937307),new cljs.core.Keyword(null,"pretty-writer","pretty-writer",-1222834267),new cljs.core.Keyword(null,"sections","sections",-886710106),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.Keyword(null,"buffer-level","buffer-level",928864731),new cljs.core.Keyword(null,"buffer","buffer",617295198)],[lb,miser_width,lb,true,null,new cljs.core.Keyword(null,"writing","writing",-1486865108),(0),null,cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2(writer,max_columns),(1),cljs.core.PersistentVector.EMPTY]));
if(typeof cljs.pprint.t_cljs$pprint28252 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.pprint.IPrettyFlush}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint28252 = (function (writer,max_columns,miser_width,lb,fields,meta28253){
this.writer = writer;
this.max_columns = max_columns;
this.miser_width = miser_width;
this.lb = lb;
this.fields = fields;
this.meta28253 = meta28253;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint28252.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (lb,fields){
return (function (_28254,meta28253__$1){
var self__ = this;
var _28254__$1 = this;
return (new cljs.pprint.t_cljs$pprint28252(self__.writer,self__.max_columns,self__.miser_width,self__.lb,self__.fields,meta28253__$1));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint28252.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (lb,fields){
return (function (_28254){
var self__ = this;
var _28254__$1 = this;
return self__.meta28253;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint28252.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (lb,fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint28252.prototype.cljs$core$IWriter$_write$arity$2 = ((function (lb,fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__28258 = cljs.core._EQ_;
var expr__28259 = cljs.core.type(x);
if(cljs.core.truth_((pred__28258.cljs$core$IFn$_invoke$arity$2 ? pred__28258.cljs$core$IFn$_invoke$arity$2(String,expr__28259) : pred__28258.call(null,String,expr__28259)))){
var s0 = cljs.pprint.write_initial_lines(this$__$1,x);
var s = clojure.string.replace_first(s0,/\s+$/,"");
var white_space = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s0,cljs.core.count(s));
var mode = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space(this$__$1);

cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),s);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),white_space);
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1)));
var newpos = (oldpos + cljs.core.count(s0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos);

return cljs.pprint.add_to_buffer(this$__$1,cljs.pprint.make_buffer_blob(s,white_space,oldpos,newpos));
}
} else {
if(cljs.core.truth_((pred__28258.cljs$core$IFn$_invoke$arity$2 ? pred__28258.cljs$core$IFn$_invoke$arity$2(Number,expr__28259) : pred__28258.call(null,Number,expr__28259)))){
return cljs.pprint.p_write_char(this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28259)].join('')));
}
}
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint28252.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
cljs.pprint._ppflush(this$__$1);

return cljs.core._flush(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint28252.prototype.cljs$pprint$IPrettyFlush$ = cljs.core.PROTOCOL_SENTINEL;

cljs.pprint.t_cljs$pprint28252.prototype.cljs$pprint$IPrettyFlush$_ppflush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),new cljs.core.Keyword(null,"buffering","buffering",-876713613))){
cljs.pprint.write_tokens(this$__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),true);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.PersistentVector.EMPTY);
} else {
return cljs.pprint.write_white_space(this$__$1);
}
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint28252.getBasis = ((function (lb,fields){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"max-columns","max-columns",-912112507,null),new cljs.core.Symbol(null,"miser-width","miser-width",330482090,null),new cljs.core.Symbol(null,"lb","lb",950310490,null),new cljs.core.Symbol(null,"fields","fields",-291534703,null),new cljs.core.Symbol(null,"meta28253","meta28253",-946963717,null)], null);
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint28252.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint28252.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint28252";

cljs.pprint.t_cljs$pprint28252.cljs$lang$ctorPrWriter = ((function (lb,fields){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.pprint/t_cljs$pprint28252");
});})(lb,fields))
;

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint28252.
 */
cljs.pprint.__GT_t_cljs$pprint28252 = ((function (lb,fields){
return (function cljs$pprint$pretty_writer_$___GT_t_cljs$pprint28252(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta28253){
return (new cljs.pprint.t_cljs$pprint28252(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta28253));
});})(lb,fields))
;

}

return (new cljs.pprint.t_cljs$pprint28252(writer,max_columns,miser_width,lb,fields,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.start_block = (function cljs$pprint$start_block(this$,prefix,per_line_prefix,suffix){
var lb = (new cljs.pprint.logical_block(new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),null,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),prefix,per_line_prefix,suffix,null,null,null,null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776),lb);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space(this$);

var temp__5457__auto___28267 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5457__auto___28267)){
var cb_28268 = temp__5457__auto___28267;
var G__28266_28269 = new cljs.core.Keyword(null,"start","start",-355208981);
(cb_28268.cljs$core$IFn$_invoke$arity$1 ? cb_28268.cljs$core$IFn$_invoke$arity$1(G__28266_28269) : cb_28268.call(null,G__28266_28269));
} else {
}

if(cljs.core.truth_(prefix)){
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var col = cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_(new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),col);
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos = (oldpos + (cljs.core.truth_(prefix)?cljs.core.count(prefix):(0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos);

return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_start_block_t(lb,oldpos,newpos));
}
});
cljs.pprint.end_block = (function cljs$pprint$end_block(this$){
var lb = new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var suffix = new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space(this$);

if(cljs.core.truth_(suffix)){
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),suffix);
} else {
}

var temp__5457__auto___28271 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5457__auto___28271)){
var cb_28272 = temp__5457__auto___28271;
var G__28270_28273 = new cljs.core.Keyword(null,"end","end",-268185958);
(cb_28272.cljs$core$IFn$_invoke$arity$1 ? cb_28272.cljs$core$IFn$_invoke$arity$1(G__28270_28273) : cb_28272.call(null,G__28270_28273));
} else {
}
} else {
var oldpos_28274 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos_28275 = (oldpos_28274 + (cljs.core.truth_(suffix)?cljs.core.count(suffix):(0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos_28275);

cljs.pprint.add_to_buffer(this$,cljs.pprint.make_end_block_t(lb,oldpos_28274,newpos_28275));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(lb));
});
cljs.pprint.nl = (function cljs$pprint$nl(this$,type){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"buffering","buffering",-876713613));

var pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_nl_t(type,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),pos,pos));
});
cljs.pprint.indent = (function cljs$pprint$indent(this$,relative_to,offset){
var lb = new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space(this$);

return cljs.core.reset_BANG_(new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),(offset + (function (){var pred__28276 = cljs.core._EQ_;
var expr__28277 = relative_to;
if(cljs.core.truth_((function (){var G__28279 = new cljs.core.Keyword(null,"block","block",664686210);
var G__28280 = expr__28277;
return (pred__28276.cljs$core$IFn$_invoke$arity$2 ? pred__28276.cljs$core$IFn$_invoke$arity$2(G__28279,G__28280) : pred__28276.call(null,G__28279,G__28280));
})())){
return cljs.core.deref(new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_((function (){var G__28281 = new cljs.core.Keyword(null,"current","current",-1088038603);
var G__28282 = expr__28277;
return (pred__28276.cljs$core$IFn$_invoke$arity$2 ? pred__28276.cljs$core$IFn$_invoke$arity$2(G__28281,G__28282) : pred__28276.call(null,G__28281,G__28282));
})())){
return cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28277)].join('')));
}
}
})()));
} else {
var pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_indent_t(lb,relative_to,offset,pos,pos));
}
});
cljs.pprint.get_miser_width = (function cljs$pprint$get_miser_width(this$){
return new cljs.core.Keyword(null,"miser-width","miser-width",-1310049437).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
});
/**
 * Bind to true if you want write to use pretty printing
 */
cljs.pprint._STAR_print_pretty_STAR_ = true;
if(typeof cljs.pprint._STAR_print_pprint_dispatch_STAR_ !== 'undefined'){
} else {
/**
 * The pretty print dispatch function. Use with-pprint-dispatch or
 * set-pprint-dispatch to modify.
 */
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = null;
}
/**
 * Pretty printing will try to avoid anything going beyond this column.
 * Set it to nil to have pprint let the line be arbitrarily long. This will ignore all
 * non-mandatory newlines.
 */
cljs.pprint._STAR_print_right_margin_STAR_ = (72);
/**
 * The column at which to enter miser style. Depending on the dispatch table,
 * miser style add newlines in more places to try to keep lines short allowing for further
 * levels of nesting.
 */
cljs.pprint._STAR_print_miser_width_STAR_ = (40);
/**
 * Maximum number of lines to print in a pretty print instance (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_lines_STAR_ = null;
/**
 * Mark circular structures (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_circle_STAR_ = null;
/**
 * Mark repeated structures rather than repeat them (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_shared_STAR_ = null;
/**
 * Don't print namespaces with symbols. This is particularly useful when
 * pretty printing the results of macro expansions
 */
cljs.pprint._STAR_print_suppress_namespaces_STAR_ = null;
/**
 * Print a radix specifier in front of integers and rationals. If *print-base* is 2, 8,
 * or 16, then the radix specifier used is #b, #o, or #x, respectively. Otherwise the
 * radix specifier is in the form #XXr where XX is the decimal value of *print-base* 
 */
cljs.pprint._STAR_print_radix_STAR_ = null;
/**
 * The base to use for printing integers and rationals.
 */
cljs.pprint._STAR_print_base_STAR_ = (10);
cljs.pprint._STAR_current_level_STAR_ = (0);
cljs.pprint._STAR_current_length_STAR_ = null;
cljs.pprint.table_ize = (function cljs$pprint$table_ize(t,m){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__28283_SHARP_){
var temp__5457__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(t,cljs.core.key(p1__28283_SHARP_));
if(cljs.core.truth_(temp__5457__auto__)){
var v = temp__5457__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.val(p1__28283_SHARP_)], null);
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m], 0)));
});
/**
 * Return true iff x is a PrettyWriter
 */
cljs.pprint.pretty_writer_QMARK_ = (function cljs$pprint$pretty_writer_QMARK_(x){
var and__3911__auto__ = ((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x));
if(and__3911__auto__){
return new cljs.core.Keyword(null,"pretty-writer","pretty-writer",-1222834267).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(x)));
} else {
return and__3911__auto__;
}
});
/**
 * Wrap base-writer in a PrettyWriter with the specified right-margin and miser-width
 */
cljs.pprint.make_pretty_writer = (function cljs$pprint$make_pretty_writer(base_writer,right_margin,miser_width){
return cljs.pprint.pretty_writer(base_writer,right_margin,miser_width);
});
/**
 * Write an object to *out* subject to the current bindings of the printer control
 * variables. Use the kw-args argument to override individual variables for this call (and
 * any recursive calls).
 * 
 * *out* must be a PrettyWriter if pretty printing is enabled. This is the responsibility
 * of the caller.
 * 
 * This method is primarily intended for use by pretty print dispatch functions that
 * already know that the pretty printer will have set up their environment appropriately.
 * Normal library clients should use the standard "write" interface. 
 */
cljs.pprint.write_out = (function cljs$pprint$write_out(object){
var length_reached = (function (){var and__3911__auto__ = cljs.pprint._STAR_current_length_STAR_;
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = cljs.core._STAR_print_length_STAR_;
if(cljs.core.truth_(and__3911__auto____$1)){
return (cljs.pprint._STAR_current_length_STAR_ >= cljs.core._STAR_print_length_STAR_);
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})();
if(!(cljs.pprint._STAR_print_pretty_STAR_)){
(cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint.pr.call(null,object));
} else {
if(cljs.core.truth_(length_reached)){
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
} else {
if(cljs.core.truth_(cljs.pprint._STAR_current_length_STAR_)){
cljs.pprint._STAR_current_length_STAR_ = (cljs.pprint._STAR_current_length_STAR_ + (1));
} else {
}

(cljs.pprint._STAR_print_pprint_dispatch_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint._STAR_print_pprint_dispatch_STAR_.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint._STAR_print_pprint_dispatch_STAR_.call(null,object));
}
}

return length_reached;
});
/**
 * Write an object subject to the current bindings of the printer control variables.
 * Use the kw-args argument to override individual variables for this call (and any
 * recursive calls). Returns the string result if :stream is nil or nil otherwise.
 * 
 * The following keyword arguments can be passed with values:
 *   Keyword              Meaning                              Default value
 *   :stream              Writer for output or nil             true (indicates *out*)
 *   :base                Base to use for writing rationals    Current value of *print-base*
 *   :circle*             If true, mark circular structures    Current value of *print-circle*
 *   :length              Maximum elements to show in sublists Current value of *print-length*
 *   :level               Maximum depth                        Current value of *print-level*
 *   :lines*              Maximum lines of output              Current value of *print-lines*
 *   :miser-width         Width to enter miser mode            Current value of *print-miser-width*
 *   :dispatch            The pretty print dispatch function   Current value of *print-pprint-dispatch*
 *   :pretty              If true, do pretty printing          Current value of *print-pretty*
 *   :radix               If true, prepend a radix specifier   Current value of *print-radix*
 *   :readably*           If true, print readably              Current value of *print-readably*
 *   :right-margin        The column for the right margin      Current value of *print-right-margin*
 *   :suppress-namespaces If true, no namespaces in symbols    Current value of *print-suppress-namespaces*
 * 
 *   * = not yet supported
 */
cljs.pprint.write = (function cljs$pprint$write(var_args){
var args__4502__auto__ = [];
var len__4499__auto___28302 = arguments.length;
var i__4500__auto___28303 = (0);
while(true){
if((i__4500__auto___28303 < len__4499__auto___28302)){
args__4502__auto__.push((arguments[i__4500__auto___28303]));

var G__28304 = (i__4500__auto___28303 + (1));
i__4500__auto___28303 = G__28304;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic = (function (object,kw_args){
var options = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stream","stream",1534941648),true], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,kw_args)], 0));
var _STAR_print_base_STAR_28288 = cljs.pprint._STAR_print_base_STAR_;
var _STAR_print_circle_STAR_28289 = cljs.pprint._STAR_print_circle_STAR_;
var _STAR_print_length_STAR_28290 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR_28291 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_lines_STAR_28292 = cljs.pprint._STAR_print_lines_STAR_;
var _STAR_print_miser_width_STAR_28293 = cljs.pprint._STAR_print_miser_width_STAR_;
var _STAR_print_pprint_dispatch_STAR_28294 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pretty_STAR_28295 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_radix_STAR_28296 = cljs.pprint._STAR_print_radix_STAR_;
var _STAR_print_readably_STAR_28297 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_right_margin_STAR_28298 = cljs.pprint._STAR_print_right_margin_STAR_;
var _STAR_print_suppress_namespaces_STAR_28299 = cljs.pprint._STAR_print_suppress_namespaces_STAR_;
cljs.pprint._STAR_print_base_STAR_ = new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_base_STAR_);

cljs.pprint._STAR_print_circle_STAR_ = new cljs.core.Keyword(null,"circle","circle",1903212362).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_circle_STAR_);

cljs.core._STAR_print_length_STAR_ = new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_length_STAR_);

cljs.core._STAR_print_level_STAR_ = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_level_STAR_);

cljs.pprint._STAR_print_lines_STAR_ = new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_lines_STAR_);

cljs.pprint._STAR_print_miser_width_STAR_ = new cljs.core.Keyword(null,"miser-width","miser-width",-1310049437).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_miser_width_STAR_);

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = new cljs.core.Keyword(null,"dispatch","dispatch",1319337009).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pprint_dispatch_STAR_);

cljs.pprint._STAR_print_pretty_STAR_ = new cljs.core.Keyword(null,"pretty","pretty",-1916372486).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pretty_STAR_);

cljs.pprint._STAR_print_radix_STAR_ = new cljs.core.Keyword(null,"radix","radix",857016463).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_radix_STAR_);

cljs.core._STAR_print_readably_STAR_ = new cljs.core.Keyword(null,"readably","readably",1129599760).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_readably_STAR_);

cljs.pprint._STAR_print_right_margin_STAR_ = new cljs.core.Keyword(null,"right-margin","right-margin",-810413306).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_right_margin_STAR_);

cljs.pprint._STAR_print_suppress_namespaces_STAR_ = new cljs.core.Keyword(null,"suppress-namespaces","suppress-namespaces",2130686956).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_suppress_namespaces_STAR_);

try{try{var sb = (new goog.string.StringBuffer());
var optval = ((cljs.core.contains_QMARK_(options,new cljs.core.Keyword(null,"stream","stream",1534941648)))?new cljs.core.Keyword(null,"stream","stream",1534941648).cljs$core$IFn$_invoke$arity$1(options):true);
var base_writer = ((((optval === true) || ((optval == null))))?(new cljs.core.StringBufferWriter(sb)):optval);
if(cljs.pprint._STAR_print_pretty_STAR_){
var base_writer__27688__auto___28305 = base_writer;
var new_writer__27689__auto___28306 = cljs.core.not(cljs.pprint.pretty_writer_QMARK_(base_writer__27688__auto___28305));
var _STAR_out_STAR_28300_28307 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = ((new_writer__27689__auto___28306)?cljs.pprint.make_pretty_writer(base_writer__27688__auto___28305,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__27688__auto___28305);

try{cljs.pprint.write_out(object);

cljs.pprint._ppflush(cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_28300_28307;
}} else {
var _STAR_out_STAR_28301_28308 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = base_writer;

try{(cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint.pr.call(null,object));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_28301_28308;
}}

if(optval === true){
cljs.core.string_print([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''));
} else {
}

if((optval == null)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('');
} else {
return null;
}
}finally {}}finally {cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR_28299;

cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR_28298;

cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR_28297;

cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR_28296;

cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR_28295;

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_28294;

cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR_28293;

cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR_28292;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_28291;

cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_28290;

cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR_28289;

cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR_28288;
}});

cljs.pprint.write.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.pprint.write.cljs$lang$applyTo = (function (seq28286){
var G__28287 = cljs.core.first(seq28286);
var seq28286__$1 = cljs.core.next(seq28286);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28287,seq28286__$1);
});

cljs.pprint.pprint = (function cljs$pprint$pprint(var_args){
var G__28310 = arguments.length;
switch (G__28310) {
case 1:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1 = (function (object){
var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR_28311 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (new cljs.core.StringBufferWriter(sb));

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2(object,cljs.core._STAR_out_STAR_);

return cljs.core.string_print([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_28311;
}});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2 = (function (object,writer){
var base_writer__27688__auto__ = writer;
var new_writer__27689__auto__ = cljs.core.not(cljs.pprint.pretty_writer_QMARK_(base_writer__27688__auto__));
var _STAR_out_STAR_28312 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = ((new_writer__27689__auto__)?cljs.pprint.make_pretty_writer(base_writer__27688__auto__,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__27688__auto__);

try{var _STAR_print_pretty_STAR_28313_28315 = cljs.pprint._STAR_print_pretty_STAR_;
cljs.pprint._STAR_print_pretty_STAR_ = true;

try{cljs.pprint.write_out(object);
}finally {cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR_28313_28315;
}
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.pprint.get_column(cljs.core._STAR_out_STAR_)))){
cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
} else {
}

return cljs.pprint._ppflush(cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_28312;
}});

cljs.pprint.pprint.cljs$lang$maxFixedArity = 2;

cljs.pprint.set_pprint_dispatch = (function cljs$pprint$set_pprint_dispatch(function$){
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = function$;

return null;
});
cljs.pprint.check_enumerated_arg = (function cljs$pprint$check_enumerated_arg(arg,choices){
if(cljs.core.not((choices.cljs$core$IFn$_invoke$arity$1 ? choices.cljs$core$IFn$_invoke$arity$1(arg) : choices.call(null,arg)))){
throw (new Error(["Bad argument: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg),". It must be one of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(choices)].join('')));
} else {
return null;
}
});
cljs.pprint.level_exceeded = (function cljs$pprint$level_exceeded(){
var and__3911__auto__ = cljs.core._STAR_print_level_STAR_;
if(cljs.core.truth_(and__3911__auto__)){
return (cljs.pprint._STAR_current_level_STAR_ >= cljs.core._STAR_print_level_STAR_);
} else {
return and__3911__auto__;
}
});
/**
 * Print a conditional newline to a pretty printing stream. kind specifies if the
 *   newline is :linear, :miser, :fill, or :mandatory.
 * 
 *   This function is intended for use when writing custom dispatch functions.
 * 
 *   Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_newline = (function cljs$pprint$pprint_newline(kind){
cljs.pprint.check_enumerated_arg(kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mandatory","mandatory",542802336),null,new cljs.core.Keyword(null,"miser","miser",-556060186),null,new cljs.core.Keyword(null,"fill","fill",883462889),null,new cljs.core.Keyword(null,"linear","linear",872268697),null], null), null));

return cljs.pprint.nl(cljs.core._STAR_out_STAR_,kind);
});
/**
 * Create an indent at this point in the pretty printing stream. This defines how
 * following lines are indented. relative-to can be either :block or :current depending
 * whether the indent should be computed relative to the start of the logical block or
 * the current column position. n is an offset.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_indent = (function cljs$pprint$pprint_indent(relative_to,n){
cljs.pprint.check_enumerated_arg(relative_to,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"block","block",664686210),null,new cljs.core.Keyword(null,"current","current",-1088038603),null], null), null));

return cljs.pprint.indent(cljs.core._STAR_out_STAR_,relative_to,n);
});
/**
 * Tab at this point in the pretty printing stream. kind specifies whether the tab
 * is :line, :section, :line-relative, or :section-relative.
 * 
 * Colnum and colinc specify the target column and the increment to move the target
 * forward if the output is already past the original target.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 * 
 * THIS FUNCTION IS NOT YET IMPLEMENTED.
 */
cljs.pprint.pprint_tab = (function cljs$pprint$pprint_tab(kind,colnum,colinc){
cljs.pprint.check_enumerated_arg(kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"section","section",-300141526),null,new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"line-relative","line-relative",1149548219),null,new cljs.core.Keyword(null,"section-relative","section-relative",-658298724),null], null), null));

throw (new Error("pprint-tab is not yet implemented"));
});
/**
 * An implementation of a Common Lisp compatible format function. cl-format formats its
 * arguments to an output stream or string based on the format control string given. It
 * supports sophisticated formatting of structured data.
 * 
 * Writer satisfies IWriter, true to output via *print-fn* or nil to output
 * to a string, format-in is the format control string and the remaining arguments
 * are the data to be formatted.
 * 
 * The format control string is a string to be output with embedded 'format directives'
 * describing how to format the various arguments passed in.
 * 
 * If writer is nil, cl-format returns the formatted result string. Otherwise, cl-format
 * returns nil.
 * 
 * For example:
 *  (let [results [46 38 22]]
 *      (cl-format true "There ~[are~;is~:;are~]~:* ~d result~:p: ~{~d~^, ~}~%"
 *                 (count results) results))
 * 
 * Prints via *print-fn*:
 *  There are 3 results: 46, 38, 22
 * 
 * Detailed documentation on format control strings is available in the "Common Lisp the
 * Language, 2nd edition", Chapter 22 (available online at:
 * http://www.cs.cmu.edu/afs/cs.cmu.edu/project/ai-repository/ai/html/cltl/clm/node200.html#SECTION002633000000000000000)
 * and in the Common Lisp HyperSpec at
 * http://www.lispworks.com/documentation/HyperSpec/Body/22_c.htm
 */
cljs.pprint.cl_format = (function cljs$pprint$cl_format(var_args){
var args__4502__auto__ = [];
var len__4499__auto___28319 = arguments.length;
var i__4500__auto___28320 = (0);
while(true){
if((i__4500__auto___28320 < len__4499__auto___28319)){
args__4502__auto__.push((arguments[i__4500__auto___28320]));

var G__28321 = (i__4500__auto___28320 + (1));
i__4500__auto___28320 = G__28321;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic = (function (writer,format_in,args){
var compiled_format = ((typeof format_in === 'string')?(cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1(format_in) : cljs.pprint.compile_format.call(null,format_in)):format_in);
var navigator = (cljs.pprint.init_navigator.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.init_navigator.cljs$core$IFn$_invoke$arity$1(args) : cljs.pprint.init_navigator.call(null,args));
return (cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3(writer,compiled_format,navigator) : cljs.pprint.execute_format.call(null,writer,compiled_format,navigator));
});

cljs.pprint.cl_format.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.pprint.cl_format.cljs$lang$applyTo = (function (seq28316){
var G__28317 = cljs.core.first(seq28316);
var seq28316__$1 = cljs.core.next(seq28316);
var G__28318 = cljs.core.first(seq28316__$1);
var seq28316__$2 = cljs.core.next(seq28316__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28317,G__28318,seq28316__$2);
});

cljs.pprint._STAR_format_str_STAR_ = null;
cljs.pprint.format_error = (function cljs$pprint$format_error(message,offset){
var full_message = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_format_str_STAR_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(offset," "))),"^",cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")].join('');
throw Error(full_message);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.arg_navigator = (function (seq,rest,pos,__meta,__extmap,__hash){
this.seq = seq;
this.rest = rest;
this.pos = pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__12159__auto__,k__12160__auto__){
var self__ = this;
var this__12159__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__12159__auto____$1,k__12160__auto__,null);
});

cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12161__auto__,k28323,else__12162__auto__){
var self__ = this;
var this__12161__auto____$1 = this;
var G__28327 = k28323;
var G__28327__$1 = (((G__28327 instanceof cljs.core.Keyword))?G__28327.fqn:null);
switch (G__28327__$1) {
case "seq":
return self__.seq;

break;
case "rest":
return self__.rest;

break;
case "pos":
return self__.pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28323,else__12162__auto__);

}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__12173__auto__,writer__12174__auto__,opts__12175__auto__){
var self__ = this;
var this__12173__auto____$1 = this;
var pr_pair__12176__auto__ = ((function (this__12173__auto____$1){
return (function (keyval__12177__auto__){
return cljs.core.pr_sequential_writer(writer__12174__auto__,cljs.core.pr_writer,""," ","",opts__12175__auto__,keyval__12177__auto__);
});})(this__12173__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__12174__auto__,pr_pair__12176__auto__,"#cljs.pprint.arg-navigator{",", ","}",opts__12175__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seq","seq",-1817803783),self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rest","rest",-1241696419),self__.rest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos],null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28322){
var self__ = this;
var G__28322__$1 = this;
return (new cljs.core.RecordIter((0),G__28322__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seq","seq",-1817803783),new cljs.core.Keyword(null,"rest","rest",-1241696419),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__12157__auto__){
var self__ = this;
var this__12157__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__12154__auto__){
var self__ = this;
var this__12154__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__12163__auto__){
var self__ = this;
var this__12163__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__12155__auto__){
var self__ = this;
var this__12155__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__28328 = ((function (h__4030__auto__,this__12155__auto____$1){
return (function (coll__12156__auto__){
return (-402038447 ^ cljs.core.hash_unordered_coll(coll__12156__auto__));
});})(h__4030__auto__,this__12155__auto____$1))
;
return fexpr__28328(this__12155__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28324,other28325){
var self__ = this;
var this28324__$1 = this;
return ((!((other28325 == null))) && ((this28324__$1.constructor === other28325.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28324__$1.seq,other28325.seq)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28324__$1.rest,other28325.rest)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28324__$1.pos,other28325.pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28324__$1.__extmap,other28325.__extmap)));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__12168__auto__,k__12169__auto__){
var self__ = this;
var this__12168__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),null,new cljs.core.Keyword(null,"seq","seq",-1817803783),null,new cljs.core.Keyword(null,"rest","rest",-1241696419),null], null), null),k__12169__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__12168__auto____$1),self__.__meta),k__12169__auto__);
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__12169__auto__)),null));
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12166__auto__,k__12167__auto__,G__28322){
var self__ = this;
var this__12166__auto____$1 = this;
var pred__28329 = cljs.core.keyword_identical_QMARK_;
var expr__28330 = k__12167__auto__;
if(cljs.core.truth_((function (){var G__28332 = new cljs.core.Keyword(null,"seq","seq",-1817803783);
var G__28333 = expr__28330;
return (pred__28329.cljs$core$IFn$_invoke$arity$2 ? pred__28329.cljs$core$IFn$_invoke$arity$2(G__28332,G__28333) : pred__28329.call(null,G__28332,G__28333));
})())){
return (new cljs.pprint.arg_navigator(G__28322,self__.rest,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28334 = new cljs.core.Keyword(null,"rest","rest",-1241696419);
var G__28335 = expr__28330;
return (pred__28329.cljs$core$IFn$_invoke$arity$2 ? pred__28329.cljs$core$IFn$_invoke$arity$2(G__28334,G__28335) : pred__28329.call(null,G__28334,G__28335));
})())){
return (new cljs.pprint.arg_navigator(self__.seq,G__28322,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28336 = new cljs.core.Keyword(null,"pos","pos",-864607220);
var G__28337 = expr__28330;
return (pred__28329.cljs$core$IFn$_invoke$arity$2 ? pred__28329.cljs$core$IFn$_invoke$arity$2(G__28336,G__28337) : pred__28329.call(null,G__28336,G__28337));
})())){
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,G__28322,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__12167__auto__,G__28322),null));
}
}
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12171__auto__){
var self__ = this;
var this__12171__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seq","seq",-1817803783),self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rest","rest",-1241696419),self__.rest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos],null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__12158__auto__,G__28322){
var self__ = this;
var this__12158__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,G__28322,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__12164__auto__,entry__12165__auto__){
var self__ = this;
var this__12164__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__12165__auto__)){
return cljs.core._assoc(this__12164__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12165__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12165__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__12164__auto____$1,entry__12165__auto__);
}
});

cljs.pprint.arg_navigator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.Symbol(null,"rest","rest",398835108,null),new cljs.core.Symbol(null,"pos","pos",775924307,null)], null);
});

cljs.pprint.arg_navigator.cljs$lang$type = true;

cljs.pprint.arg_navigator.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"cljs.pprint/arg-navigator",null,(1),null));
});

cljs.pprint.arg_navigator.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"cljs.pprint/arg-navigator");
});

/**
 * Positional factory function for cljs.pprint/arg-navigator.
 */
cljs.pprint.__GT_arg_navigator = (function cljs$pprint$__GT_arg_navigator(seq,rest,pos){
return (new cljs.pprint.arg_navigator(seq,rest,pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/arg-navigator, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_arg_navigator = (function cljs$pprint$map__GT_arg_navigator(G__28326){
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(G__28326),new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(G__28326),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(G__28326),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28326,new cljs.core.Keyword(null,"seq","seq",-1817803783),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"rest","rest",-1241696419),new cljs.core.Keyword(null,"pos","pos",-864607220)], 0))),null));
});

/**
 * Create a new arg-navigator from the sequence with the position set to 0
 */
cljs.pprint.init_navigator = (function cljs$pprint$init_navigator(s){
var s__$1 = cljs.core.seq(s);
return (new cljs.pprint.arg_navigator(s__$1,s__$1,(0),null,null,null));
});
cljs.pprint.next_arg = (function cljs$pprint$next_arg(navigator){
var rst = new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(rst),(new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next(rst),(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
throw Error("Not enough arguments for format definition");
}
});
cljs.pprint.next_arg_or_nil = (function cljs$pprint$next_arg_or_nil(navigator){
var rst = new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(rst),(new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next(rst),(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,navigator], null);
}
});
cljs.pprint.get_format_arg = (function cljs$pprint$get_format_arg(navigator){
var vec__28339 = cljs.pprint.next_arg(navigator);
var raw_format = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28339,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28339,(1),null);
var compiled_format = ((typeof raw_format === 'string')?(cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1(raw_format) : cljs.pprint.compile_format.call(null,raw_format)):raw_format);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [compiled_format,navigator__$1], null);
});
cljs.pprint.absolute_reposition = (function cljs$pprint$absolute_reposition(navigator,position){
if((position >= new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator))){
var G__28342 = navigator;
var G__28343 = (new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) - position);
return (cljs.pprint.relative_reposition.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.relative_reposition.cljs$core$IFn$_invoke$arity$2(G__28342,G__28343) : cljs.pprint.relative_reposition.call(null,G__28342,G__28343));
} else {
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(position,new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator)),position,null,null,null));
}
});
cljs.pprint.relative_reposition = (function cljs$pprint$relative_reposition(navigator,position){
var newpos = (new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) + position);
if((position < (0))){
return cljs.pprint.absolute_reposition(navigator,newpos);
} else {
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(position,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator)),newpos,null,null,null));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.compiled_directive = (function (func,def,params,offset,__meta,__extmap,__hash){
this.func = func;
this.def = def;
this.params = params;
this.offset = offset;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__12159__auto__,k__12160__auto__){
var self__ = this;
var this__12159__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__12159__auto____$1,k__12160__auto__,null);
});

cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12161__auto__,k28351,else__12162__auto__){
var self__ = this;
var this__12161__auto____$1 = this;
var G__28355 = k28351;
var G__28355__$1 = (((G__28355 instanceof cljs.core.Keyword))?G__28355.fqn:null);
switch (G__28355__$1) {
case "func":
return self__.func;

break;
case "def":
return self__.def;

break;
case "params":
return self__.params;

break;
case "offset":
return self__.offset;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28351,else__12162__auto__);

}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__12173__auto__,writer__12174__auto__,opts__12175__auto__){
var self__ = this;
var this__12173__auto____$1 = this;
var pr_pair__12176__auto__ = ((function (this__12173__auto____$1){
return (function (keyval__12177__auto__){
return cljs.core.pr_sequential_writer(writer__12174__auto__,cljs.core.pr_writer,""," ","",opts__12175__auto__,keyval__12177__auto__);
});})(this__12173__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__12174__auto__,pr_pair__12176__auto__,"#cljs.pprint.compiled-directive{",", ","}",opts__12175__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"func","func",-238706040),self__.func],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"def","def",-1043430536),self__.def],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset],null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28350){
var self__ = this;
var G__28350__$1 = this;
return (new cljs.core.RecordIter((0),G__28350__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"func","func",-238706040),new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"offset","offset",296498311)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__12157__auto__){
var self__ = this;
var this__12157__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__12154__auto__){
var self__ = this;
var this__12154__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__12163__auto__){
var self__ = this;
var this__12163__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__12155__auto__){
var self__ = this;
var this__12155__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__28356 = ((function (h__4030__auto__,this__12155__auto____$1){
return (function (coll__12156__auto__){
return (-829256337 ^ cljs.core.hash_unordered_coll(coll__12156__auto__));
});})(h__4030__auto__,this__12155__auto____$1))
;
return fexpr__28356(this__12155__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28352,other28353){
var self__ = this;
var this28352__$1 = this;
return ((!((other28353 == null))) && ((this28352__$1.constructor === other28353.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28352__$1.func,other28353.func)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28352__$1.def,other28353.def)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28352__$1.params,other28353.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28352__$1.offset,other28353.offset)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28352__$1.__extmap,other28353.__extmap)));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__12168__auto__,k__12169__auto__){
var self__ = this;
var this__12168__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"offset","offset",296498311),null,new cljs.core.Keyword(null,"func","func",-238706040),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"def","def",-1043430536),null], null), null),k__12169__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__12168__auto____$1),self__.__meta),k__12169__auto__);
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__12169__auto__)),null));
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12166__auto__,k__12167__auto__,G__28350){
var self__ = this;
var this__12166__auto____$1 = this;
var pred__28368 = cljs.core.keyword_identical_QMARK_;
var expr__28369 = k__12167__auto__;
if(cljs.core.truth_((function (){var G__28372 = new cljs.core.Keyword(null,"func","func",-238706040);
var G__28373 = expr__28369;
return (pred__28368.cljs$core$IFn$_invoke$arity$2 ? pred__28368.cljs$core$IFn$_invoke$arity$2(G__28372,G__28373) : pred__28368.call(null,G__28372,G__28373));
})())){
return (new cljs.pprint.compiled_directive(G__28350,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28374 = new cljs.core.Keyword(null,"def","def",-1043430536);
var G__28375 = expr__28369;
return (pred__28368.cljs$core$IFn$_invoke$arity$2 ? pred__28368.cljs$core$IFn$_invoke$arity$2(G__28374,G__28375) : pred__28368.call(null,G__28374,G__28375));
})())){
return (new cljs.pprint.compiled_directive(self__.func,G__28350,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28376 = new cljs.core.Keyword(null,"params","params",710516235);
var G__28377 = expr__28369;
return (pred__28368.cljs$core$IFn$_invoke$arity$2 ? pred__28368.cljs$core$IFn$_invoke$arity$2(G__28376,G__28377) : pred__28368.call(null,G__28376,G__28377));
})())){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,G__28350,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28380 = new cljs.core.Keyword(null,"offset","offset",296498311);
var G__28381 = expr__28369;
return (pred__28368.cljs$core$IFn$_invoke$arity$2 ? pred__28368.cljs$core$IFn$_invoke$arity$2(G__28380,G__28381) : pred__28368.call(null,G__28380,G__28381));
})())){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,G__28350,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__12167__auto__,G__28350),null));
}
}
}
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12171__auto__){
var self__ = this;
var this__12171__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"func","func",-238706040),self__.func],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"def","def",-1043430536),self__.def],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset],null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__12158__auto__,G__28350){
var self__ = this;
var this__12158__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,G__28350,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__12164__auto__,entry__12165__auto__){
var self__ = this;
var this__12164__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__12165__auto__)){
return cljs.core._assoc(this__12164__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12165__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12165__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__12164__auto____$1,entry__12165__auto__);
}
});

cljs.pprint.compiled_directive.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"func","func",1401825487,null),new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null)], null);
});

cljs.pprint.compiled_directive.cljs$lang$type = true;

cljs.pprint.compiled_directive.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"cljs.pprint/compiled-directive",null,(1),null));
});

cljs.pprint.compiled_directive.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"cljs.pprint/compiled-directive");
});

/**
 * Positional factory function for cljs.pprint/compiled-directive.
 */
cljs.pprint.__GT_compiled_directive = (function cljs$pprint$__GT_compiled_directive(func,def,params,offset){
return (new cljs.pprint.compiled_directive(func,def,params,offset,null,null,null));
});

/**
 * Factory function for cljs.pprint/compiled-directive, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_compiled_directive = (function cljs$pprint$map__GT_compiled_directive(G__28354){
return (new cljs.pprint.compiled_directive(new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(G__28354),new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(G__28354),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__28354),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(G__28354),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28354,new cljs.core.Keyword(null,"func","func",-238706040),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"offset","offset",296498311)], 0))),null));
});

cljs.pprint.realize_parameter = (function cljs$pprint$realize_parameter(p__28391,navigator){
var vec__28392 = p__28391;
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28392,(0),null);
var vec__28395 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28392,(1),null);
var raw_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28395,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28395,(1),null);
var vec__28398 = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),param))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_val,new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",-758446196)))?cljs.pprint.next_arg(navigator):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_val,new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",-1216589335)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator)),navigator], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null)
)));
var real_param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28398,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28398,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [real_param,offset], null)], null),new_navigator], null);
});
cljs.pprint.realize_parameter_list = (function cljs$pprint$realize_parameter_list(parameter_map,navigator){
var vec__28404 = cljs.pprint.map_passing_context(cljs.pprint.realize_parameter,navigator,parameter_map);
var pairs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28404,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28404,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,pairs),new_navigator], null);
});
cljs.pprint.special_radix_markers = new cljs.core.PersistentArrayMap(null, 3, [(2),"#b",(8),"#o",(16),"#x"], null);
cljs.pprint.format_simple_number = (function cljs$pprint$format_simple_number(n){
if(cljs.core.integer_QMARK_(n)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.pprint._STAR_print_base_STAR_,(10))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?".":null))].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?(function (){var or__3922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.special_radix_markers,cljs.pprint._STAR_print_base_STAR_);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_print_base_STAR_),"r"].join('');
}
})():null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.pprint.opt_base_str.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.opt_base_str.cljs$core$IFn$_invoke$arity$2(cljs.pprint._STAR_print_base_STAR_,n) : cljs.pprint.opt_base_str.call(null,cljs.pprint._STAR_print_base_STAR_,n)))].join('');
}
} else {
return null;

}
});
cljs.pprint.format_ascii = (function cljs$pprint$format_ascii(print_func,params,arg_navigator,offsets){
var vec__28423 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28423,(0),null);
var arg_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28423,(1),null);
var base_output = (function (){var or__3922__auto__ = cljs.pprint.format_simple_number(arg);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (print_func.cljs$core$IFn$_invoke$arity$1 ? print_func.cljs$core$IFn$_invoke$arity$1(arg) : print_func.call(null,arg));
}
})();
var base_width = base_output.length;
var min_width = (base_width + new cljs.core.Keyword(null,"minpad","minpad",323570901).cljs$core$IFn$_invoke$arity$1(params));
var width = (((min_width >= new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params)))?min_width:(min_width + ((cljs.core.quot(((new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params) - min_width) - (1)),new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params)) + (1)) * new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params))));
var chars = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((width - base_width),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars),cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output)].join('')], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars)].join('')], 0));
}

return arg_navigator__$1;
});
/**
 * returns true if a number is actually an integer (that is, has no fractional part)
 */
cljs.pprint.integral_QMARK_ = (function cljs$pprint$integral_QMARK_(x){
if(cljs.core.integer_QMARK_(x)){
return true;
} else {
if(cljs.pprint.float_QMARK_(x)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,Math.floor(x));
} else {
return false;

}
}
});
/**
 * Return the list of remainders (essentially the 'digits') of val in the given base
 */
cljs.pprint.remainders = (function cljs$pprint$remainders(base,val){
return cljs.core.reverse(cljs.core.first(cljs.pprint.consume((function (p1__28484_SHARP_){
if((p1__28484_SHARP_ > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rem(p1__28484_SHARP_,base),cljs.core.quot(p1__28484_SHARP_,base)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
}
}),val)));
});
/**
 * Return val as a string in the given base
 */
cljs.pprint.base_str = (function cljs$pprint$base_str(base,val){
if((val === (0))){
return "0";
} else {
var xlated_val = val
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (xlated_val){
return (function (p1__28485_SHARP_){
if((p1__28485_SHARP_ < (10))){
return cljs.core.char$((cljs.pprint.char_code("0") + p1__28485_SHARP_));
} else {
return cljs.core.char$((cljs.pprint.char_code("a") + (p1__28485_SHARP_ - (10))));
}
});})(xlated_val))
,cljs.pprint.remainders(base,val)));
}
});
cljs.pprint.javascript_base_formats = new cljs.core.PersistentArrayMap(null, 3, [(8),"%o",(10),"%d",(16),"%x"], null);
/**
 * Return val as a string in the given base. No cljs format, so no improved performance.
 */
cljs.pprint.opt_base_str = (function cljs$pprint$opt_base_str(base,val){
return cljs.pprint.base_str(base,val);
});
cljs.pprint.group_by_STAR_ = (function cljs$pprint$group_by_STAR_(unit,lis){
return cljs.core.reverse(cljs.core.first(cljs.pprint.consume((function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.reverse(cljs.core.take.cljs$core$IFn$_invoke$arity$2(unit,x))),cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(unit,x))], null);
}),cljs.core.reverse(lis))));
});
cljs.pprint.format_integer = (function cljs$pprint$format_integer(base,params,arg_navigator,offsets){
var vec__28495 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28495,(0),null);
var arg_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28495,(1),null);
if(cljs.core.truth_(cljs.pprint.integral_QMARK_(arg))){
var neg_28499 = (arg < (0));
var pos_arg_28500 = ((neg_28499)?(- arg):arg);
var raw_str_28501 = cljs.pprint.opt_base_str(base,pos_arg_28500);
var group_str_28502 = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?(function (){var groups = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (neg_28499,pos_arg_28500,raw_str_28501,vec__28495,arg,arg_navigator__$1){
return (function (p1__28492_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,p1__28492_SHARP_);
});})(neg_28499,pos_arg_28500,raw_str_28501,vec__28495,arg,arg_navigator__$1))
,cljs.pprint.group_by_STAR_(new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083).cljs$core$IFn$_invoke$arity$1(params),raw_str_28501));
var commas = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(groups),new cljs.core.Keyword(null,"commachar","commachar",652859327).cljs$core$IFn$_invoke$arity$1(params));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.next(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(commas,groups)));
})():raw_str_28501);
var signed_str_28503 = ((neg_28499)?["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_28502)].join(''):(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_28502)].join(''):group_str_28502
));
var padded_str_28504 = (((signed_str_28503.length < new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params) - signed_str_28503.length),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(signed_str_28503)].join(''):signed_str_28503);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([padded_str_28504], 0));
} else {
cljs.pprint.format_ascii(cljs.core.print_str,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"colinc","colinc",-584873385),(1),new cljs.core.Keyword(null,"minpad","minpad",323570901),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"at","at",1476951349),true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),null);
}

return arg_navigator__$1;
});
cljs.pprint.english_cardinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"], null);
cljs.pprint.english_ordinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zeroth","first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth","fifteenth","sixteenth","seventeenth","eighteenth","nineteenth"], null);
cljs.pprint.english_cardinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"], null);
cljs.pprint.english_ordinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twentieth","thirtieth","fortieth","fiftieth","sixtieth","seventieth","eightieth","ninetieth"], null);
cljs.pprint.english_scale_numbers = new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","thousand","million","billion","trillion","quadrillion","quintillion","sextillion","septillion","octillion","nonillion","decillion","undecillion","duodecillion","tredecillion","quattuordecillion","quindecillion","sexdecillion","septendecillion","octodecillion","novemdecillion","vigintillion"], null);
/**
 * Convert a number less than 1000 to a cardinal english string
 */
cljs.pprint.format_simple_cardinal = (function cljs$pprint$format_simple_cardinal(num){
var hundreds = cljs.core.quot(num,(100));
var tens = cljs.core.rem(num,(100));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,hundreds))," hundred"].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((((hundreds > (0))) && ((tens > (0)))))?" ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,tens):(function (){var ten_digit = cljs.core.quot(tens,(10));
var unit_digit = cljs.core.rem(tens,(10));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_tens,ten_digit):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((((ten_digit > (0))) && ((unit_digit > (0)))))?"-":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,unit_digit):null))].join('');
})()):null))].join('');
});
/**
 * Take a sequence of parts, add scale numbers (e.g., million) and combine into a string
 *   offset is a factor of 10^3 to multiply by
 */
cljs.pprint.add_english_scales = (function cljs$pprint$add_english_scales(parts,offset){
var cnt = cljs.core.count(parts);
var acc = cljs.core.PersistentVector.EMPTY;
var pos = (cnt - (1));
var this$ = cljs.core.first(parts);
var remainder = cljs.core.next(parts);
while(true){
if((remainder == null)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",acc))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((!(cljs.core.empty_QMARK_(this$))) && (!(cljs.core.empty_QMARK_(acc)))))?", ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((!(cljs.core.empty_QMARK_(this$))) && (((pos + offset) > (0)))))?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_scale_numbers,(pos + offset)))].join(''):null))].join('');
} else {
var G__28505 = ((cljs.core.empty_QMARK_(this$))?acc:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_scale_numbers,(pos + offset)))].join('')));
var G__28506 = (pos - (1));
var G__28507 = cljs.core.first(remainder);
var G__28508 = cljs.core.next(remainder);
acc = G__28505;
pos = G__28506;
this$ = G__28507;
remainder = G__28508;
continue;
}
break;
}
});
cljs.pprint.format_cardinal_english = (function cljs$pprint$format_cardinal_english(params,navigator,offsets){
var vec__28509 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28509,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28509,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),arg)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["zero"], 0));
} else {
var abs_arg_28512 = (((arg < (0)))?(- arg):arg);
var parts_28513 = cljs.pprint.remainders((1000),abs_arg_28512);
if((cljs.core.count(parts_28513) <= cljs.core.count(cljs.pprint.english_scale_numbers))){
var parts_strs_28514 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.format_simple_cardinal,parts_28513);
var full_str_28515 = cljs.pprint.add_english_scales(parts_strs_28514,(0));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((((arg < (0)))?"minus ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_str_28515)].join('')], 0));
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530)," ",new cljs.core.Keyword(null,"commachar","commachar",652859327),",",new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(3),new cljs.core.Keyword(null,"colon","colon",-965200945),true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),(0),new cljs.core.Keyword(null,"commachar","commachar",652859327),(0),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(0)], null));
}
}

return navigator__$1;
});
/**
 * Convert a number less than 1000 to a ordinal english string
 *   Note this should only be used for the last one in the sequence
 */
cljs.pprint.format_simple_ordinal = (function cljs$pprint$format_simple_ordinal(num){
var hundreds = cljs.core.quot(num,(100));
var tens = cljs.core.rem(num,(100));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,hundreds))," hundred"].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((((hundreds > (0))) && ((tens > (0)))))?" ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_units,tens):(function (){var ten_digit = cljs.core.quot(tens,(10));
var unit_digit = cljs.core.rem(tens,(10));
if((((ten_digit > (0))) && (!((unit_digit > (0)))))){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_tens,ten_digit);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_tens,ten_digit):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((((ten_digit > (0))) && ((unit_digit > (0)))))?"-":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_units,unit_digit):null))].join('');
}
})()):(((hundreds > (0)))?"th":null)))].join('');
});
cljs.pprint.format_ordinal_english = (function cljs$pprint$format_ordinal_english(params,navigator,offsets){
var vec__28516 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28516,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28516,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),arg)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["zeroth"], 0));
} else {
var abs_arg_28519 = (((arg < (0)))?(- arg):arg);
var parts_28520 = cljs.pprint.remainders((1000),abs_arg_28519);
if((cljs.core.count(parts_28520) <= cljs.core.count(cljs.pprint.english_scale_numbers))){
var parts_strs_28521 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.format_simple_cardinal,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(parts_28520));
var head_str_28522 = cljs.pprint.add_english_scales(parts_strs_28521,(1));
var tail_str_28523 = cljs.pprint.format_simple_ordinal(cljs.core.last(parts_28520));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((((arg < (0)))?"minus ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((!(cljs.core.empty_QMARK_(head_str_28522))) && (!(cljs.core.empty_QMARK_(tail_str_28523)))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(head_str_28522),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tail_str_28523)].join(''):((!(cljs.core.empty_QMARK_(head_str_28522)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(head_str_28522),"th"].join(''):tail_str_28523
)))].join('')], 0));
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530)," ",new cljs.core.Keyword(null,"commachar","commachar",652859327),",",new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(3),new cljs.core.Keyword(null,"colon","colon",-965200945),true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),(0),new cljs.core.Keyword(null,"commachar","commachar",652859327),(0),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(0)], null));

var low_two_digits_28524 = cljs.core.rem(arg,(100));
var not_teens_28525 = ((((11) < low_two_digits_28524)) || (((19) > low_two_digits_28524)));
var low_digit_28526 = cljs.core.rem(low_two_digits_28524,(10));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((((low_digit_28526 === (1))) && (not_teens_28525)))?"st":(((((low_digit_28526 === (2))) && (not_teens_28525)))?"nd":(((((low_digit_28526 === (3))) && (not_teens_28525)))?"rd":"th"
)))], 0));
}
}

return navigator__$1;
});
cljs.pprint.old_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IIII","V","VI","VII","VIII","VIIII"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XXXX","L","LX","LXX","LXXX","LXXXX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CCCC","D","DC","DCC","DCCC","DCCCC"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
cljs.pprint.new_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IV","V","VI","VII","VIII","IX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
/**
 * Format a roman numeral using the specified look-up table
 */
cljs.pprint.format_roman = (function cljs$pprint$format_roman(table,params,navigator,offsets){
var vec__28527 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28527,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28527,(1),null);
if(((typeof arg === 'number') && ((arg > (0))) && ((arg < (4000))))){
var digits_28530 = cljs.pprint.remainders((10),arg);
var acc_28531 = cljs.core.PersistentVector.EMPTY;
var pos_28532 = (cljs.core.count(digits_28530) - (1));
var digits_28533__$1 = digits_28530;
while(true){
if(cljs.core.empty_QMARK_(digits_28533__$1)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,acc_28531)], 0));
} else {
var digit_28534 = cljs.core.first(digits_28533__$1);
var G__28535 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),digit_28534))?acc_28531:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc_28531,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(table,pos_28532),(digit_28534 - (1)))));
var G__28536 = (pos_28532 - (1));
var G__28537 = cljs.core.next(digits_28533__$1);
acc_28531 = G__28535;
pos_28532 = G__28536;
digits_28533__$1 = G__28537;
continue;
}
break;
}
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530)," ",new cljs.core.Keyword(null,"commachar","commachar",652859327),",",new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(3),new cljs.core.Keyword(null,"colon","colon",-965200945),true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),(0),new cljs.core.Keyword(null,"commachar","commachar",652859327),(0),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(0)], null));
}

return navigator__$1;
});
cljs.pprint.format_old_roman = (function cljs$pprint$format_old_roman(params,navigator,offsets){
return cljs.pprint.format_roman(cljs.pprint.old_roman_table,params,navigator,offsets);
});
cljs.pprint.format_new_roman = (function cljs$pprint$format_new_roman(params,navigator,offsets){
return cljs.pprint.format_roman(cljs.pprint.new_roman_table,params,navigator,offsets);
});
cljs.pprint.special_chars = new cljs.core.PersistentArrayMap(null, 5, [(8),"Backspace",(9),"Tab",(10),"Newline",(13),"Return",(32),"Space"], null);
cljs.pprint.pretty_character = (function cljs$pprint$pretty_character(params,navigator,offsets){
var vec__28538 = cljs.pprint.next_arg(navigator);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28538,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28538,(1),null);
var as_int = cljs.pprint.char_code(c);
var base_char = (as_int & (127));
var meta = (as_int & (128));
var special = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.special_chars,base_char);
if((meta > (0))){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Meta-"], 0));
} else {
}

cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(special)?special:(((base_char < (32)))?["Control-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$((base_char + (64))))].join(''):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(base_char,(127)))?"Control-?":cljs.core.char$(base_char)
)))], 0));

return navigator__$1;
});
cljs.pprint.readable_character = (function cljs$pprint$readable_character(params,navigator,offsets){
var vec__28541 = cljs.pprint.next_arg(navigator);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28541,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28541,(1),null);
var pred__28544_28551 = cljs.core._EQ_;
var expr__28545_28552 = new cljs.core.Keyword(null,"char-format","char-format",-1016499218).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_((function (){var G__28547 = "o";
var G__28548 = expr__28545_28552;
return (pred__28544_28551.cljs$core$IFn$_invoke$arity$2 ? pred__28544_28551.cljs$core$IFn$_invoke$arity$2(G__28547,G__28548) : pred__28544_28551.call(null,G__28547,G__28548));
})())){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\\o~3, '0o",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.pprint.char_code(c)], 0));
} else {
if(cljs.core.truth_((function (){var G__28549 = "u";
var G__28550 = expr__28545_28552;
return (pred__28544_28551.cljs$core$IFn$_invoke$arity$2 ? pred__28544_28551.cljs$core$IFn$_invoke$arity$2(G__28549,G__28550) : pred__28544_28551.call(null,G__28549,G__28550));
})())){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\\u~4, '0x",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.pprint.char_code(c)], 0));
} else {
if(cljs.core.truth_((pred__28544_28551.cljs$core$IFn$_invoke$arity$2 ? pred__28544_28551.cljs$core$IFn$_invoke$arity$2(null,expr__28545_28552) : pred__28544_28551.call(null,null,expr__28545_28552)))){
cljs.pprint.print_char(c);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28545_28552)].join('')));
}
}
}

return navigator__$1;
});
cljs.pprint.plain_character = (function cljs$pprint$plain_character(params,navigator,offsets){
var vec__28553 = cljs.pprint.next_arg(navigator);
var char$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28553,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28553,(1),null);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([char$], 0));

return navigator__$1;
});
cljs.pprint.abort_QMARK_ = (function cljs$pprint$abort_QMARK_(context){
var token = cljs.core.first(context);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),token)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007),token)));
});
cljs.pprint.execute_sub_format = (function cljs$pprint$execute_sub_format(format,args,base_args){
return cljs.core.second(cljs.pprint.map_passing_context((function (element,context){
if(cljs.core.truth_(cljs.pprint.abort_QMARK_(context))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__28556 = cljs.pprint.realize_parameter_list(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28556,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28556,(1),null);
var vec__28559 = cljs.pprint.unzip_map(params);
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28559,(0),null);
var offsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28559,(1),null);
var params__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822),base_args);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format));
});
/**
 * Produce string parts for the mantissa (normalize 1-9) and exponent
 */
cljs.pprint.float_parts_base = (function cljs$pprint$float_parts_base(f){
var s = clojure.string.lower_case([cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
var exploc = s.indexOf("e");
var dotloc = s.indexOf(".");
if((exploc < (0))){
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.count(s) - (1)))].join('')], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),dotloc)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(dotloc + (1))))].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((dotloc - (1)))].join('')], null);
}
} else {
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),exploc),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(exploc + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(2),exploc))].join(''),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(exploc + (1)))], null);
}
}
});
/**
 * Take care of leading and trailing zeros in decomposed floats
 */
cljs.pprint.float_parts = (function cljs$pprint$float_parts(f){
var vec__28566 = cljs.pprint.float_parts_base(f);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28566,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28566,(1),null);
var m1 = cljs.pprint.rtrim(m,"0");
var m2 = cljs.pprint.ltrim(m1,"0");
var delta = (cljs.core.count(m1) - cljs.core.count(m2));
var e__$1 = (((((cljs.core.count(e) > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(e,(0)),"+"))))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(e,(1)):e);
if(cljs.core.empty_QMARK_(m2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m2,(parseInt(e__$1,(10)) - delta)], null);
}
});
/**
 * Assumption: The input string consists of one or more decimal digits,
 *   and no other characters. Return a string containing one or more
 *   decimal digits containing a decimal number one larger than the input
 *   string. The output string will always be the same length as the input
 *   string, or one character longer.
 */
cljs.pprint.inc_s = (function cljs$pprint$inc_s(s){
var len_1 = (cljs.core.count(s) - (1));
var i = (len_1 | (0));
while(true){
if((i < (0))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"1",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((len_1 + (1)),"0"));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("9",s.charAt(i))){
var G__28569 = (i - (1));
i = G__28569;
continue;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),i),cljs.core.char$((cljs.pprint.char_code(s.charAt(i)) + (1))),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((len_1 - i),"0"));

}
}
break;
}
});
cljs.pprint.round_str = (function cljs$pprint$round_str(m,e,d,w){
if(cljs.core.truth_((function (){var or__3922__auto__ = d;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return w;
}
})())){
var len = cljs.core.count(m);
var w__$1 = (cljs.core.truth_(w)?(function (){var x__4006__auto__ = (2);
var y__4007__auto__ = w;
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})():(0));
var round_pos = (cljs.core.truth_(d)?((e + d) + (1)):(((e >= (0)))?(function (){var x__4006__auto__ = (e + (1));
var y__4007__auto__ = (w__$1 - (1));
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})():(w__$1 + e)
));
var vec__28570 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(round_pos,(0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(e + (1)),(1),(len + (1))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,round_pos,len], null));
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28570,(0),null);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28570,(1),null);
var round_pos__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28570,(2),null);
var len__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28570,(3),null);
if(cljs.core.truth_(round_pos__$1)){
if((round_pos__$1 < (0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0),false], null);
} else {
if((len__$1 > round_pos__$1)){
var round_char = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m1,round_pos__$1);
var result = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m1,(0),round_pos__$1);
if((cljs.pprint.char_code(round_char) >= cljs.pprint.char_code("5"))){
var round_up_result = cljs.pprint.inc_s(result);
var expanded = (cljs.core.count(round_up_result) > cljs.core.count(result));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((expanded)?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(round_up_result,(0),(cljs.core.count(round_up_result) - (1))):round_up_result),e1,expanded], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,e1,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
});
cljs.pprint.expand_fixed = (function cljs$pprint$expand_fixed(m,e,d){
var vec__28575 = (((e < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((- e) - (1)),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(-1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e], null));
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28575,(0),null);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28575,(1),null);
var len = cljs.core.count(m1);
var target_len = (cljs.core.truth_(d)?((e1 + d) + (1)):(e1 + (1)));
if((len < target_len)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(m1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((target_len - len),"0")))].join('');
} else {
return m1;
}
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_decimal = (function cljs$pprint$insert_decimal(m,e){
if((e < (0))){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
var loc = (e + (1));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m,(0),loc)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(m,loc))].join('');
}
});
cljs.pprint.get_fixed = (function cljs$pprint$get_fixed(m,e,d){
return cljs.pprint.insert_decimal(cljs.pprint.expand_fixed(m,e,d),e);
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_scaled_decimal = (function cljs$pprint$insert_scaled_decimal(m,k){
if((k < (0))){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m,(0),k)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(m,k))].join('');
}
});
cljs.pprint.convert_ratio = (function cljs$pprint$convert_ratio(x){
return x;
});
cljs.pprint.fixed_float = (function cljs$pprint$fixed_float(params,navigator,offsets){
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var vec__28578 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28578,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28578,(1),null);
var vec__28581 = (((arg < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-",(- arg)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+",arg], null));
var sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28581,(0),null);
var abs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28581,(1),null);
var abs__$1 = cljs.pprint.convert_ratio(abs);
var vec__28584 = cljs.pprint.float_parts(abs__$1);
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28584,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28584,(1),null);
var scaled_exp = (exp + new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(params));
var add_sign = (function (){var or__3922__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (arg < (0));
}
})();
var append_zero = ((cljs.core.not(d)) && (((cljs.core.count(mantissa) - (1)) <= scaled_exp)));
var vec__28587 = cljs.pprint.round_str(mantissa,scaled_exp,d,(cljs.core.truth_(w)?(w - (cljs.core.truth_(add_sign)?(1):(0))):null));
var rounded_mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28587,(0),null);
var scaled_exp__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28587,(1),null);
var expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28587,(2),null);
var fixed_repr = cljs.pprint.get_fixed(rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp__$1 + (1)):scaled_exp__$1),d);
var fixed_repr__$1 = (cljs.core.truth_((function (){var and__3911__auto__ = w;
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = d;
if(cljs.core.truth_(and__3911__auto____$1)){
return (((d >= (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fixed_repr.charAt((0)),"0")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fixed_repr.charAt((1)),".")) && ((cljs.core.count(fixed_repr) > (w - (cljs.core.truth_(add_sign)?(1):(0))))));
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})())?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(fixed_repr,(1)):fixed_repr);
var prepend_zero = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(fixed_repr__$1),".");
if(cljs.core.truth_(w)){
var len_28590 = cljs.core.count(fixed_repr__$1);
var signed_len_28591 = (cljs.core.truth_(add_sign)?(len_28590 + (1)):len_28590);
var prepend_zero_28592__$1 = ((prepend_zero) && (!((signed_len_28591 >= w))));
var append_zero_28593__$1 = ((append_zero) && (!((signed_len_28591 >= w))));
var full_len_28594 = ((((prepend_zero_28592__$1) || (append_zero_28593__$1)))?(signed_len_28591 + (1)):signed_len_28591);
if(cljs.core.truth_((function (){var and__3911__auto__ = (full_len_28594 > w);
if(and__3911__auto__){
return new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__3911__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(w,new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params)))], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((w - full_len_28594),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_28592__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_28593__$1)?"0":null))].join('')], 0));
}
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero)?"0":null))].join('')], 0));
}

return navigator__$1;
});
cljs.pprint.exponential_float = (function cljs$pprint$exponential_float(params,navigator,offset){
var vec__28595 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28595,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28595,(1),null);
var arg__$1 = cljs.pprint.convert_ratio(arg);
var G__28601_28611 = cljs.pprint.float_parts((((arg__$1 < (0)))?(- arg__$1):arg__$1));
var vec__28602_28612 = G__28601_28611;
var mantissa_28613 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28602_28612,(0),null);
var exp_28614 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28602_28612,(1),null);
var G__28601_28615__$1 = G__28601_28611;
while(true){
var vec__28605_28616 = G__28601_28615__$1;
var mantissa_28617__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28605_28616,(0),null);
var exp_28618__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28605_28616,(1),null);
var w_28619 = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var d_28620 = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var e_28621 = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(params);
var k_28622 = new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(params);
var expchar_28623 = (function (){var or__3922__auto__ = new cljs.core.Keyword(null,"exponentchar","exponentchar",1986664222).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "E";
}
})();
var add_sign_28624 = (function (){var or__3922__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (arg__$1 < (0));
}
})();
var prepend_zero_28625 = (k_28622 <= (0));
var scaled_exp_28626 = (exp_28618__$1 - (k_28622 - (1)));
var scaled_exp_str_28627 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.abs(scaled_exp_28626))].join('');
var scaled_exp_str_28628__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(expchar_28623),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((scaled_exp_28626 < (0)))?"-":"+")),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(e_28621)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((e_28621 - cljs.core.count(scaled_exp_str_28627)),"0")):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_28627)].join('');
var exp_width_28629 = cljs.core.count(scaled_exp_str_28628__$1);
var base_mantissa_width_28630 = cljs.core.count(mantissa_28617__$1);
var scaled_mantissa_28631 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((- k_28622),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mantissa_28617__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(d_28620)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((d_28620 - (base_mantissa_width_28630 - (1))) - (((k_28622 < (0)))?(- k_28622):(0))),"0")):null))].join('');
var w_mantissa_28632 = (cljs.core.truth_(w_28619)?(w_28619 - exp_width_28629):null);
var vec__28608_28633 = cljs.pprint.round_str(scaled_mantissa_28631,(0),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_28622,(0)))?(d_28620 - (1)):(((k_28622 > (0)))?d_28620:(((k_28622 < (0)))?(d_28620 - (1)):null))),(cljs.core.truth_(w_mantissa_28632)?(w_mantissa_28632 - (cljs.core.truth_(add_sign_28624)?(1):(0))):null));
var rounded_mantissa_28634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28608_28633,(0),null);
var __28635 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28608_28633,(1),null);
var incr_exp_28636 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28608_28633,(2),null);
var full_mantissa_28637 = cljs.pprint.insert_scaled_decimal(rounded_mantissa_28634,k_28622);
var append_zero_28638 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_28622,cljs.core.count(rounded_mantissa_28634))) && ((d_28620 == null)));
if(cljs.core.not(incr_exp_28636)){
if(cljs.core.truth_(w_28619)){
var len_28639 = (cljs.core.count(full_mantissa_28637) + exp_width_28629);
var signed_len_28640 = (cljs.core.truth_(add_sign_28624)?(len_28639 + (1)):len_28639);
var prepend_zero_28641__$1 = ((prepend_zero_28625) && (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(signed_len_28640,w_28619))));
var full_len_28642 = ((prepend_zero_28641__$1)?(signed_len_28640 + (1)):signed_len_28640);
var append_zero_28643__$1 = ((append_zero_28638) && ((full_len_28642 < w_28619)));
if(cljs.core.truth_((function (){var and__3911__auto__ = (function (){var or__3922__auto__ = (full_len_28642 > w_28619);
if(or__3922__auto__){
return or__3922__auto__;
} else {
var and__3911__auto__ = e_28621;
if(cljs.core.truth_(and__3911__auto__)){
return ((exp_width_28629 - (2)) > e_28621);
} else {
return and__3911__auto__;
}
}
})();
if(cljs.core.truth_(and__3911__auto__)){
return new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__3911__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(w_28619,new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params)))], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((w_28619 - full_len_28642) - ((append_zero_28643__$1)?(1):(0))),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign_28624)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_28641__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_mantissa_28637),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_28643__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_28628__$1)].join('')], 0));
}
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign_28624)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_28625)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_mantissa_28637),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_28638)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_28628__$1)].join('')], 0));
}
} else {
var G__28644 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rounded_mantissa_28634,(exp_28618__$1 + (1))], null);
G__28601_28615__$1 = G__28644;
continue;
}
break;
}

return navigator__$1;
});
cljs.pprint.general_float = (function cljs$pprint$general_float(params,navigator,offsets){
var vec__28645 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28645,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28645,(1),null);
var arg__$1 = cljs.pprint.convert_ratio(arg);
var vec__28648 = cljs.pprint.float_parts((((arg__$1 < (0)))?(- arg__$1):arg__$1));
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28648,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28648,(1),null);
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var e = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(params);
var n = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg__$1,0.0))?(0):(exp + (1)));
var ee = (cljs.core.truth_(e)?(e + (2)):(4));
var ww = (cljs.core.truth_(w)?(w - ee):null);
var d__$1 = (cljs.core.truth_(d)?d:(function (){var x__4006__auto__ = cljs.core.count(mantissa);
var y__4007__auto__ = (function (){var x__4009__auto__ = n;
var y__4010__auto__ = (7);
return ((x__4009__auto__ < y__4010__auto__) ? x__4009__auto__ : y__4010__auto__);
})();
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})());
var dd = (d__$1 - n);
if(((((0) <= dd)) && ((dd <= d__$1)))){
var navigator__$1 = cljs.pprint.fixed_float(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"w","w",354169001),ww,new cljs.core.Keyword(null,"d","d",1972142424),dd,new cljs.core.Keyword(null,"k","k",-2146297393),(0),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"at","at",1476951349),new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params)], null),navigator,offsets);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(ee," "))], 0));

return navigator__$1;
} else {
return cljs.pprint.exponential_float(params,navigator,offsets);
}
});
cljs.pprint.dollar_float = (function cljs$pprint$dollar_float(params,navigator,offsets){
var vec__28651 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28651,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28651,(1),null);
var vec__28654 = cljs.pprint.float_parts(Math.abs(arg));
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28654,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28654,(1),null);
var d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var n = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params);
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var add_sign = (function (){var or__3922__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (arg < (0));
}
})();
var vec__28657 = cljs.pprint.round_str(mantissa,exp,d,null);
var rounded_mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28657,(0),null);
var scaled_exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28657,(1),null);
var expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28657,(2),null);
var fixed_repr = cljs.pprint.get_fixed(rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp + (1)):scaled_exp),d);
var full_repr = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((n - fixed_repr.indexOf(".")),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr)].join('');
var full_len = (cljs.core.count(full_repr) + (cljs.core.truth_(add_sign)?(1):(0)));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__3911__auto__ = new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__3911__auto__)){
return add_sign;
} else {
return and__3911__auto__;
}
})())?(((arg < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((w - full_len),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.not(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params));
if(and__3911__auto__){
return add_sign;
} else {
return and__3911__auto__;
}
})())?(((arg < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_repr)].join('')], 0));

return navigator__$1;
});
cljs.pprint.choice_conditional = (function cljs$pprint$choice_conditional(params,arg_navigator,offsets){
var arg = new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(params);
var vec__28660 = (cljs.core.truth_(arg)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg,arg_navigator], null):cljs.pprint.next_arg(arg_navigator));
var arg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28660,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28660,(1),null);
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause = (((((arg__$1 < (0))) || ((arg__$1 >= cljs.core.count(clauses)))))?cljs.core.first(new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(params)):cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,arg__$1));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.boolean_conditional = (function cljs$pprint$boolean_conditional(params,arg_navigator,offsets){
var vec__28663 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28663,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28663,(1),null);
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.second(clauses):cljs.core.first(clauses));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.check_arg_conditional = (function cljs$pprint$check_arg_conditional(params,arg_navigator,offsets){
var vec__28666 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28666,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28666,(1),null);
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.first(clauses):null);
if(cljs.core.truth_(arg)){
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,arg_navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return arg_navigator;
}
} else {
return navigator;
}
});
cljs.pprint.iterate_sublist = (function cljs$pprint$iterate_sublist(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__28669 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28669,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28669,(1),null);
var vec__28672 = cljs.pprint.next_arg(navigator__$1);
var arg_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28672,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28672,(1),null);
var args = cljs.pprint.init_navigator(arg_list);
var count = (0);
var args__$1 = args;
var last_pos = ((-1) | (0));
while(true){
if(((cljs.core.not(max_count)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(args__$1),last_pos)) && ((count > (1))))){
throw Error("%{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__3922__auto__ = ((cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(args__$1))) && (((cljs.core.not(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__3922__auto__){
return or__3922__auto__;
} else {
var and__3911__auto__ = max_count;
if(cljs.core.truth_(and__3911__auto__)){
return (count >= max_count);
} else {
return and__3911__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,args__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),cljs.core.first(iter_result))){
return navigator__$2;
} else {
var G__28675 = (count + (1));
var G__28676 = iter_result;
var G__28677 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(args__$1);
count = G__28675;
args__$1 = G__28676;
last_pos = G__28677;
continue;
}
}
break;
}
});
cljs.pprint.iterate_list_of_sublists = (function cljs$pprint$iterate_list_of_sublists(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__28678 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28678,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28678,(1),null);
var vec__28681 = cljs.pprint.next_arg(navigator__$1);
var arg_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28681,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28681,(1),null);
var count = (0);
var arg_list__$1 = arg_list;
while(true){
if(cljs.core.truth_((function (){var or__3922__auto__ = ((cljs.core.empty_QMARK_(arg_list__$1)) && (((cljs.core.not(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__3922__auto__){
return or__3922__auto__;
} else {
var and__3911__auto__ = max_count;
if(cljs.core.truth_(and__3911__auto__)){
return (count >= max_count);
} else {
return and__3911__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,cljs.pprint.init_navigator(cljs.core.first(arg_list__$1)),cljs.pprint.init_navigator(cljs.core.next(arg_list__$1)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007),cljs.core.first(iter_result))){
return navigator__$2;
} else {
var G__28684 = (count + (1));
var G__28685 = cljs.core.next(arg_list__$1);
count = G__28684;
arg_list__$1 = G__28685;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_list = (function cljs$pprint$iterate_main_list(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__28686 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28686,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28686,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
var last_pos = ((-1) | (0));
while(true){
if(((cljs.core.not(max_count)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator__$2),last_pos)) && ((count > (1))))){
throw Error("%@{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__3922__auto__ = ((cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator__$2))) && (((cljs.core.not(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__3922__auto__){
return or__3922__auto__;
} else {
var and__3911__auto__ = max_count;
if(cljs.core.truth_(and__3911__auto__)){
return (count >= max_count);
} else {
return and__3911__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,navigator__$2,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),cljs.core.first(iter_result))){
return cljs.core.second(iter_result);
} else {
var G__28689 = (count + (1));
var G__28690 = iter_result;
var G__28691 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator__$2);
count = G__28689;
navigator__$2 = G__28690;
last_pos = G__28691;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_sublists = (function cljs$pprint$iterate_main_sublists(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__28692 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28692,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28692,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
while(true){
if(cljs.core.truth_((function (){var or__3922__auto__ = ((cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator__$2))) && (((cljs.core.not(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__3922__auto__){
return or__3922__auto__;
} else {
var and__3911__auto__ = max_count;
if(cljs.core.truth_(and__3911__auto__)){
return (count >= max_count);
} else {
return and__3911__auto__;
}
}
})())){
return navigator__$2;
} else {
var vec__28695 = cljs.pprint.next_arg_or_nil(navigator__$2);
var sublist = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28695,(0),null);
var navigator__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28695,(1),null);
var iter_result = cljs.pprint.execute_sub_format(clause,cljs.pprint.init_navigator(sublist),navigator__$3);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007),cljs.core.first(iter_result))){
return navigator__$3;
} else {
var G__28698 = (count + (1));
var G__28699 = navigator__$3;
count = G__28698;
navigator__$2 = G__28699;
continue;
}
}
break;
}
});
cljs.pprint.logical_block_or_justify = (function cljs$pprint$logical_block_or_justify(params,navigator,offsets){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))){
return (cljs.pprint.format_logical_block.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.format_logical_block.cljs$core$IFn$_invoke$arity$3(params,navigator,offsets) : cljs.pprint.format_logical_block.call(null,params,navigator,offsets));
} else {
return (cljs.pprint.justify_clauses.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.justify_clauses.cljs$core$IFn$_invoke$arity$3(params,navigator,offsets) : cljs.pprint.justify_clauses.call(null,params,navigator,offsets));
}
});
cljs.pprint.render_clauses = (function cljs$pprint$render_clauses(clauses,navigator,base_navigator){
var clauses__$1 = clauses;
var acc = cljs.core.PersistentVector.EMPTY;
var navigator__$1 = navigator;
while(true){
if(cljs.core.empty_QMARK_(clauses__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,navigator__$1], null);
} else {
var clause = cljs.core.first(clauses__$1);
var vec__28700 = (function (){var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR_28703 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (new cljs.core.StringBufferWriter(sb));

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.execute_sub_format(clause,navigator__$1,base_navigator),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('')], null);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_28703;
}})();
var iter_result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28700,(0),null);
var result_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28700,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),cljs.core.first(iter_result))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,cljs.core.second(iter_result)], null);
} else {
var G__28704 = cljs.core.next(clauses__$1);
var G__28705 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result_str);
var G__28706 = iter_result;
clauses__$1 = G__28704;
acc = G__28705;
navigator__$1 = G__28706;
continue;
}
}
break;
}
});
cljs.pprint.justify_clauses = (function cljs$pprint$justify_clauses(params,navigator,offsets){
var vec__28707 = (function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5457__auto__)){
var else$ = temp__5457__auto__;
return cljs.pprint.render_clauses(else$,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return null;
}
})();
var vec__28710 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28707,(0),null);
var eol_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28710,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28707,(1),null);
var navigator__$1 = (function (){var or__3922__auto__ = new_navigator;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return navigator;
}
})();
var vec__28713 = (function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"else-params","else-params",-832171646).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5457__auto__)){
var p = temp__5457__auto__;
return cljs.pprint.realize_parameter_list(p,navigator__$1);
} else {
return null;
}
})();
var else_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28713,(0),null);
var new_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28713,(1),null);
var navigator__$2 = (function (){var or__3922__auto__ = new_navigator__$1;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return navigator__$1;
}
})();
var min_remaining = (function (){var or__3922__auto__ = cljs.core.first(new cljs.core.Keyword(null,"min-remaining","min-remaining",962687677).cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (0);
}
})();
var max_columns = (function (){var or__3922__auto__ = cljs.core.first(new cljs.core.Keyword(null,"max-columns","max-columns",1742323262).cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.pprint.get_max_column(cljs.core._STAR_out_STAR_);
}
})();
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var vec__28716 = cljs.pprint.render_clauses(clauses,navigator__$2,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
var strs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28716,(0),null);
var navigator__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28716,(1),null);
var slots = (function (){var x__4006__auto__ = (1);
var y__4007__auto__ = (((cljs.core.count(strs) - (1)) + (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?(1):(0))) + (cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?(1):(0)));
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})();
var chars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,strs));
var mincol = new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params);
var minpad = new cljs.core.Keyword(null,"minpad","minpad",323570901).cljs$core$IFn$_invoke$arity$1(params);
var colinc = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var minout = (chars + (slots * minpad));
var result_columns = (((minout <= mincol))?mincol:(mincol + (colinc * ((1) + cljs.core.quot(((minout - mincol) - (1)),colinc)))));
var total_pad = (result_columns - chars);
var pad = (function (){var x__4006__auto__ = minpad;
var y__4007__auto__ = cljs.core.quot(total_pad,slots);
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})();
var extra_pad = (total_pad - (pad * slots));
var pad_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(pad,new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_((function (){var and__3911__auto__ = eol_str;
if(cljs.core.truth_(and__3911__auto__)){
return (((cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_)))) + min_remaining) + result_columns) > max_columns);
} else {
return and__3911__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([eol_str], 0));
} else {
}

var slots_28719__$1 = slots;
var extra_pad_28720__$1 = extra_pad;
var strs_28721__$1 = strs;
var pad_only_28722 = (function (){var or__3922__auto__ = new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(strs_28721__$1),(1))) && (cljs.core.not(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))));
}
})();
while(true){
if(cljs.core.seq(strs_28721__$1)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not(pad_only_28722))?cljs.core.first(strs_28721__$1):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var or__3922__auto__ = pad_only_28722;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = cljs.core.next(strs_28721__$1);
if(or__3922__auto____$1){
return or__3922__auto____$1;
} else {
return new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
}
}
})())?pad_str:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((extra_pad_28720__$1 > (0)))?new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params):null))].join('')], 0));

var G__28723 = (slots_28719__$1 - (1));
var G__28724 = (extra_pad_28720__$1 - (1));
var G__28725 = (cljs.core.truth_(pad_only_28722)?strs_28721__$1:cljs.core.next(strs_28721__$1));
var G__28726 = false;
slots_28719__$1 = G__28723;
extra_pad_28720__$1 = G__28724;
strs_28721__$1 = G__28725;
pad_only_28722 = G__28726;
continue;
} else {
}
break;
}

return navigator__$3;
});
/**
 * Returns a proxy that wraps writer, converting all characters to lower case
 */
cljs.pprint.downcase_writer = (function cljs$pprint$downcase_writer(writer){
if(typeof cljs.pprint.t_cljs$pprint28727 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint28727 = (function (writer,meta28728){
this.writer = writer;
this.meta28728 = meta28728;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint28727.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28729,meta28728__$1){
var self__ = this;
var _28729__$1 = this;
return (new cljs.pprint.t_cljs$pprint28727(self__.writer,meta28728__$1));
});

cljs.pprint.t_cljs$pprint28727.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28729){
var self__ = this;
var _28729__$1 = this;
return self__.meta28728;
});

cljs.pprint.t_cljs$pprint28727.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});

cljs.pprint.t_cljs$pprint28727.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__28730 = cljs.core._EQ_;
var expr__28731 = cljs.core.type(x);
if(cljs.core.truth_((pred__28730.cljs$core$IFn$_invoke$arity$2 ? pred__28730.cljs$core$IFn$_invoke$arity$2(String,expr__28731) : pred__28730.call(null,String,expr__28731)))){
var s = x;
return cljs.core._write(self__.writer,clojure.string.lower_case(s));
} else {
if(cljs.core.truth_((pred__28730.cljs$core$IFn$_invoke$arity$2 ? pred__28730.cljs$core$IFn$_invoke$arity$2(Number,expr__28731) : pred__28730.call(null,Number,expr__28731)))){
var c = x;
return cljs.core._write(self__.writer,clojure.string.lower_case(cljs.core.char$(c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28731)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint28727.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"meta28728","meta28728",-1108713647,null)], null);
});

cljs.pprint.t_cljs$pprint28727.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint28727.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint28727";

cljs.pprint.t_cljs$pprint28727.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.pprint/t_cljs$pprint28727");
});

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint28727.
 */
cljs.pprint.__GT_t_cljs$pprint28727 = (function cljs$pprint$downcase_writer_$___GT_t_cljs$pprint28727(writer__$1,meta28728){
return (new cljs.pprint.t_cljs$pprint28727(writer__$1,meta28728));
});

}

return (new cljs.pprint.t_cljs$pprint28727(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, converting all characters to upper case
 */
cljs.pprint.upcase_writer = (function cljs$pprint$upcase_writer(writer){
if(typeof cljs.pprint.t_cljs$pprint28733 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint28733 = (function (writer,meta28734){
this.writer = writer;
this.meta28734 = meta28734;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint28733.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28735,meta28734__$1){
var self__ = this;
var _28735__$1 = this;
return (new cljs.pprint.t_cljs$pprint28733(self__.writer,meta28734__$1));
});

cljs.pprint.t_cljs$pprint28733.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28735){
var self__ = this;
var _28735__$1 = this;
return self__.meta28734;
});

cljs.pprint.t_cljs$pprint28733.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});

cljs.pprint.t_cljs$pprint28733.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__28736 = cljs.core._EQ_;
var expr__28737 = cljs.core.type(x);
if(cljs.core.truth_((pred__28736.cljs$core$IFn$_invoke$arity$2 ? pred__28736.cljs$core$IFn$_invoke$arity$2(String,expr__28737) : pred__28736.call(null,String,expr__28737)))){
var s = x;
return cljs.core._write(self__.writer,clojure.string.upper_case(s));
} else {
if(cljs.core.truth_((pred__28736.cljs$core$IFn$_invoke$arity$2 ? pred__28736.cljs$core$IFn$_invoke$arity$2(Number,expr__28737) : pred__28736.call(null,Number,expr__28737)))){
var c = x;
return cljs.core._write(self__.writer,clojure.string.upper_case(cljs.core.char$(c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28737)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint28733.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"meta28734","meta28734",1657885501,null)], null);
});

cljs.pprint.t_cljs$pprint28733.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint28733.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint28733";

cljs.pprint.t_cljs$pprint28733.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.pprint/t_cljs$pprint28733");
});

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint28733.
 */
cljs.pprint.__GT_t_cljs$pprint28733 = (function cljs$pprint$upcase_writer_$___GT_t_cljs$pprint28733(writer__$1,meta28734){
return (new cljs.pprint.t_cljs$pprint28733(writer__$1,meta28734));
});

}

return (new cljs.pprint.t_cljs$pprint28733(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Capitalizes the words in a string. If first? is false, don't capitalize the
 *                                    first character of the string even if it's a letter.
 */
cljs.pprint.capitalize_string = (function cljs$pprint$capitalize_string(s,first_QMARK_){
var f = cljs.core.first(s);
var s__$1 = (cljs.core.truth_((function (){var and__3911__auto__ = first_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = f;
if(cljs.core.truth_(and__3911__auto____$1)){
return goog.string.isUnicodeChar(f);
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)))].join(''):s);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.first(cljs.pprint.consume(((function (f,s__$1){
return (function (s__$2){
if(cljs.core.empty_QMARK_(s__$2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
} else {
var m = RegExp("\\W\\w","g").exec(s__$2);
var offset = (function (){var and__3911__auto__ = m;
if(cljs.core.truth_(and__3911__auto__)){
return (m.index + (1));
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(offset)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s__$2,(0),offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s__$2,offset)))].join(''),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$2,(offset + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$2,null], null);
}
}
});})(f,s__$1))
,s__$1)));
});
/**
 * Returns a proxy that wraps writer, capitalizing all words
 */
cljs.pprint.capitalize_word_writer = (function cljs$pprint$capitalize_word_writer(writer){
var last_was_whitespace_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if(typeof cljs.pprint.t_cljs$pprint28739 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint28739 = (function (writer,last_was_whitespace_QMARK_,meta28740){
this.writer = writer;
this.last_was_whitespace_QMARK_ = last_was_whitespace_QMARK_;
this.meta28740 = meta28740;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint28739.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (_28741,meta28740__$1){
var self__ = this;
var _28741__$1 = this;
return (new cljs.pprint.t_cljs$pprint28739(self__.writer,self__.last_was_whitespace_QMARK_,meta28740__$1));
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint28739.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_28741){
var self__ = this;
var _28741__$1 = this;
return self__.meta28740;
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint28739.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint28739.prototype.cljs$core$IWriter$_write$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__28742 = cljs.core._EQ_;
var expr__28743 = cljs.core.type(x);
if(cljs.core.truth_((pred__28742.cljs$core$IFn$_invoke$arity$2 ? pred__28742.cljs$core$IFn$_invoke$arity$2(String,expr__28743) : pred__28742.call(null,String,expr__28743)))){
var s = x;
cljs.core._write(self__.writer,cljs.pprint.capitalize_string(s.toLowerCase(),cljs.core.deref(self__.last_was_whitespace_QMARK_)));

if((s.length > (0))){
return cljs.core.reset_BANG_(self__.last_was_whitespace_QMARK_,(function (){var G__28745 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - (1)));
return goog.string.isEmptyOrWhitespace(G__28745);
})());
} else {
return null;
}
} else {
if(cljs.core.truth_((pred__28742.cljs$core$IFn$_invoke$arity$2 ? pred__28742.cljs$core$IFn$_invoke$arity$2(Number,expr__28743) : pred__28742.call(null,Number,expr__28743)))){
var c = cljs.core.char$(x);
var mod_c = (cljs.core.truth_(cljs.core.deref(self__.last_was_whitespace_QMARK_))?clojure.string.upper_case(c):c);
cljs.core._write(self__.writer,mod_c);

return cljs.core.reset_BANG_(self__.last_was_whitespace_QMARK_,goog.string.isEmptyOrWhitespace(c));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28743)].join('')));
}
}
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint28739.getBasis = ((function (last_was_whitespace_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"last-was-whitespace?","last-was-whitespace?",-1073928093,null),new cljs.core.Symbol(null,"meta28740","meta28740",1481734738,null)], null);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint28739.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint28739.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint28739";

cljs.pprint.t_cljs$pprint28739.cljs$lang$ctorPrWriter = ((function (last_was_whitespace_QMARK_){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.pprint/t_cljs$pprint28739");
});})(last_was_whitespace_QMARK_))
;

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint28739.
 */
cljs.pprint.__GT_t_cljs$pprint28739 = ((function (last_was_whitespace_QMARK_){
return (function cljs$pprint$capitalize_word_writer_$___GT_t_cljs$pprint28739(writer__$1,last_was_whitespace_QMARK___$1,meta28740){
return (new cljs.pprint.t_cljs$pprint28739(writer__$1,last_was_whitespace_QMARK___$1,meta28740));
});})(last_was_whitespace_QMARK_))
;

}

return (new cljs.pprint.t_cljs$pprint28739(writer,last_was_whitespace_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, capitalizing the first word
 */
cljs.pprint.init_cap_writer = (function cljs$pprint$init_cap_writer(writer){
var capped = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
if(typeof cljs.pprint.t_cljs$pprint28746 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint28746 = (function (writer,capped,meta28747){
this.writer = writer;
this.capped = capped;
this.meta28747 = meta28747;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint28746.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (capped){
return (function (_28748,meta28747__$1){
var self__ = this;
var _28748__$1 = this;
return (new cljs.pprint.t_cljs$pprint28746(self__.writer,self__.capped,meta28747__$1));
});})(capped))
;

cljs.pprint.t_cljs$pprint28746.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (capped){
return (function (_28748){
var self__ = this;
var _28748__$1 = this;
return self__.meta28747;
});})(capped))
;

cljs.pprint.t_cljs$pprint28746.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (capped){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(capped))
;

cljs.pprint.t_cljs$pprint28746.prototype.cljs$core$IWriter$_write$arity$2 = ((function (capped){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__28749 = cljs.core._EQ_;
var expr__28750 = cljs.core.type(x);
if(cljs.core.truth_((pred__28749.cljs$core$IFn$_invoke$arity$2 ? pred__28749.cljs$core$IFn$_invoke$arity$2(String,expr__28750) : pred__28749.call(null,String,expr__28750)))){
var s = clojure.string.lower_case(x);
if(cljs.core.not(cljs.core.deref(self__.capped))){
var m = RegExp("\\S","g").exec(s);
var offset = (function (){var and__3911__auto__ = m;
if(cljs.core.truth_(and__3911__auto__)){
return m.index;
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(offset)){
cljs.core._write(self__.writer,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,offset))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(offset + (1)))))].join(''));

return cljs.core.reset_BANG_(self__.capped,true);
} else {
return cljs.core._write(self__.writer,s);
}
} else {
return cljs.core._write(self__.writer,clojure.string.lower_case(s));
}
} else {
if(cljs.core.truth_((pred__28749.cljs$core$IFn$_invoke$arity$2 ? pred__28749.cljs$core$IFn$_invoke$arity$2(Number,expr__28750) : pred__28749.call(null,Number,expr__28750)))){
var c = cljs.core.char$(x);
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.not(cljs.core.deref(self__.capped));
if(and__3911__auto__){
return goog.string.isUnicodeChar(c);
} else {
return and__3911__auto__;
}
})())){
cljs.core.reset_BANG_(self__.capped,true);

return cljs.core._write(self__.writer,clojure.string.upper_case(c));
} else {
return cljs.core._write(self__.writer,clojure.string.lower_case(c));
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28750)].join('')));
}
}
});})(capped))
;

cljs.pprint.t_cljs$pprint28746.getBasis = ((function (capped){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"capped","capped",-1650988402,null),new cljs.core.Symbol(null,"meta28747","meta28747",812716547,null)], null);
});})(capped))
;

cljs.pprint.t_cljs$pprint28746.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint28746.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint28746";

cljs.pprint.t_cljs$pprint28746.cljs$lang$ctorPrWriter = ((function (capped){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.pprint/t_cljs$pprint28746");
});})(capped))
;

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint28746.
 */
cljs.pprint.__GT_t_cljs$pprint28746 = ((function (capped){
return (function cljs$pprint$init_cap_writer_$___GT_t_cljs$pprint28746(writer__$1,capped__$1,meta28747){
return (new cljs.pprint.t_cljs$pprint28746(writer__$1,capped__$1,meta28747));
});})(capped))
;

}

return (new cljs.pprint.t_cljs$pprint28746(writer,capped,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.modify_case = (function cljs$pprint$modify_case(make_writer,params,navigator,offsets){
var clause = cljs.core.first(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var _STAR_out_STAR_28752 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (make_writer.cljs$core$IFn$_invoke$arity$1 ? make_writer.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_out_STAR_) : make_writer.call(null,cljs.core._STAR_out_STAR_));

try{return cljs.pprint.execute_sub_format(clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_28752;
}});
/**
 * Returns the IWriter passed in wrapped in a pretty writer proxy, unless it's
 * already a pretty writer. Generally, it is unnecessary to call this function, since pprint,
 * write, and cl-format all call it if they need to. However if you want the state to be
 * preserved across calls, you will want to wrap them with this.
 * 
 * For example, when you want to generate column-aware output with multiple calls to cl-format,
 * do it like in this example:
 * 
 *  (defn print-table [aseq column-width]
 *    (binding [*out* (get-pretty-writer *out*)]
 *      (doseq [row aseq]
 *        (doseq [col row]
 *          (cl-format true "~4D~7,vT" col column-width))
 *        (prn))))
 * 
 * Now when you run:
 * 
 *  user> (print-table (map #(vector % (* % %) (* % % %)) (range 1 11)) 8)
 * 
 * It prints a table of squares and cubes for the numbers from 1 to 10:
 * 
 *     1      1       1
 *     2      4       8
 *     3      9      27
 *     4     16      64
 *     5     25     125
 *     6     36     216
 *     7     49     343
 *     8     64     512
 *     9     81     729
 *    10    100    1000
 */
cljs.pprint.get_pretty_writer = (function cljs$pprint$get_pretty_writer(writer){
if(cljs.core.truth_(cljs.pprint.pretty_writer_QMARK_(writer))){
return writer;
} else {
return cljs.pprint.pretty_writer(writer,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_);
}
});
/**
 * Make a newline if *out* is not already at the beginning of the line. If *out* is
 * not a pretty writer (which keeps track of columns), this function always outputs a newline.
 */
cljs.pprint.fresh_line = (function cljs$pprint$fresh_line(){
if(((!((cljs.core._STAR_out_STAR_ == null)))?(((((cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === cljs.core._STAR_out_STAR_.cljs$core$IDeref$))))?true:(((!cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,cljs.core._STAR_out_STAR_):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,cljs.core._STAR_out_STAR_))){
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_))))))){
return cljs.pprint.prn();
} else {
return null;
}
} else {
return cljs.pprint.prn();
}
});
cljs.pprint.absolute_tabulation = (function cljs$pprint$absolute_tabulation(params,navigator,offsets){
var colnum_28754 = new cljs.core.Keyword(null,"colnum","colnum",2023796854).cljs$core$IFn$_invoke$arity$1(params);
var colinc_28755 = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var current_28756 = cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_))));
var space_count_28757 = (((current_28756 < colnum_28754))?(colnum_28754 - current_28756):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(colinc_28755,(0)))?(0):(colinc_28755 - cljs.core.rem((current_28756 - colnum_28754),colinc_28755))
));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(space_count_28757," "))], 0));

return navigator;
});
cljs.pprint.relative_tabulation = (function cljs$pprint$relative_tabulation(params,navigator,offsets){
var colrel_28758 = new cljs.core.Keyword(null,"colnum","colnum",2023796854).cljs$core$IFn$_invoke$arity$1(params);
var colinc_28759 = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var start_col_28760 = (colrel_28758 + cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_)))));
var offset_28761 = (((colinc_28759 > (0)))?cljs.core.rem(start_col_28760,colinc_28759):(0));
var space_count_28762 = (colrel_28758 + ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),offset_28761))?(0):(colinc_28759 - offset_28761)));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(space_count_28762," "))], 0));

return navigator;
});
cljs.pprint.format_logical_block = (function cljs$pprint$format_logical_block(params,navigator,offsets){
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause_count = cljs.core.count(clauses);
var prefix = (((clause_count > (1)))?new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.first(clauses)))):(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?"(":null));
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,(((clause_count > (1)))?(1):(0)));
var suffix = (((clause_count > (2)))?new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,(2))))):(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?")":null));
var vec__28763 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28763,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28763,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_28766_28768 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28767_28769 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,suffix);

cljs.pprint.execute_sub_format(body,cljs.pprint.init_navigator(arg),new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28767_28769;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28766_28768;
}}


return navigator__$1;
});
cljs.pprint.set_indent = (function cljs$pprint$set_indent(params,navigator,offsets){
var relative_to = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"current","current",-1088038603):new cljs.core.Keyword(null,"block","block",664686210));
cljs.pprint.pprint_indent(relative_to,new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params));

return navigator;
});
cljs.pprint.conditional_newline = (function cljs$pprint$conditional_newline(params,navigator,offsets){
var kind = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"mandatory","mandatory",542802336):new cljs.core.Keyword(null,"fill","fill",883462889)):(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"miser","miser",-556060186):new cljs.core.Keyword(null,"linear","linear",872268697)));
cljs.pprint.pprint_newline(kind);

return navigator;
});
cljs.pprint.directive_table = cljs.core.PersistentHashMap.fromArrays(["A","S","D","B","O","X","R","P","C","F","E","G","$","%","&","|","~","\n","T","*","?","(",")","[",";","]","{","}","<",">","^","W","_","I"],[new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"A",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",323570901),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__28770_SHARP_,p2__28771_SHARP_,p3__28772_SHARP_){
return cljs.pprint.format_ascii(cljs.core.print_str,p1__28770_SHARP_,p2__28771_SHARP_,p3__28772_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"S",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",323570901),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__28773_SHARP_,p2__28774_SHARP_,p3__28775_SHARP_){
return cljs.pprint.format_ascii(cljs.core.pr_str,p1__28773_SHARP_,p2__28774_SHARP_,p3__28775_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"D",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__28776_SHARP_,p2__28777_SHARP_,p3__28778_SHARP_){
return cljs.pprint.format_integer((10),p1__28776_SHARP_,p2__28777_SHARP_,p3__28778_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"B",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__28779_SHARP_,p2__28780_SHARP_,p3__28781_SHARP_){
return cljs.pprint.format_integer((2),p1__28779_SHARP_,p2__28780_SHARP_,p3__28781_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"O",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__28782_SHARP_,p2__28783_SHARP_,p3__28784_SHARP_){
return cljs.pprint.format_integer((8),p1__28782_SHARP_,p2__28783_SHARP_,p3__28784_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"X",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__28785_SHARP_,p2__28786_SHARP_,p3__28787_SHARP_){
return cljs.pprint.format_integer((16),p1__28785_SHARP_,p2__28786_SHARP_,p3__28787_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"R",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(5),[new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(cljs.core.first(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(params)))){
return (function (p1__28788_SHARP_,p2__28789_SHARP_,p3__28790_SHARP_){
return cljs.pprint.format_integer(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(p1__28788_SHARP_),p1__28788_SHARP_,p2__28789_SHARP_,p3__28790_SHARP_);
});
} else {
if(cljs.core.truth_((function (){var and__3911__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__3911__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__3911__auto__;
}
})())){
return (function (p1__28791_SHARP_,p2__28792_SHARP_,p3__28793_SHARP_){
return cljs.pprint.format_old_roman(p1__28791_SHARP_,p2__28792_SHARP_,p3__28793_SHARP_);
});
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__28794_SHARP_,p2__28795_SHARP_,p3__28796_SHARP_){
return cljs.pprint.format_new_roman(p1__28794_SHARP_,p2__28795_SHARP_,p3__28796_SHARP_);
});
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__28797_SHARP_,p2__28798_SHARP_,p3__28799_SHARP_){
return cljs.pprint.format_ordinal_english(p1__28797_SHARP_,p2__28798_SHARP_,p3__28799_SHARP_);
});
} else {
return (function (p1__28800_SHARP_,p2__28801_SHARP_,p3__28802_SHARP_){
return cljs.pprint.format_cardinal_english(p1__28800_SHARP_,p2__28801_SHARP_,p3__28802_SHARP_);
});

}
}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"P",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,navigator,offsets){
var navigator__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.pprint.relative_reposition(navigator,(-1)):navigator);
var strs = (cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["y","ies"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","s"], null));
var vec__28812 = cljs.pprint.next_arg(navigator__$1);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28812,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28812,(1),null);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg,(1)))?cljs.core.first(strs):cljs.core.second(strs))], 0));

return navigator__$2;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"C",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"char-format","char-format",-1016499218),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.pretty_character;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.readable_character;
} else {
return cljs.pprint.plain_character;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"F",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(5),[new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.fixed_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"E",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(7),[new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"exponentchar","exponentchar",1986664222),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.exponential_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"G",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(7),[new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"exponentchar","exponentchar",1986664222),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.general_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"$",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),Number], null),new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.dollar_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"%",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__4376__auto___28830 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
var i_28831 = (0);
while(true){
if((i_28831 < n__4376__auto___28830)){
cljs.pprint.prn();

var G__28832 = (i_28831 + (1));
i_28831 = G__28832;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"&",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var cnt_28833 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
if((cnt_28833 > (0))){
cljs.pprint.fresh_line();
} else {
}

var n__4376__auto___28834 = (cnt_28833 - (1));
var i_28835 = (0);
while(true){
if((i_28835 < n__4376__auto___28834)){
cljs.pprint.prn();

var G__28836 = (i_28835 + (1));
i_28835 = G__28836;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"|",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__4376__auto___28837 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
var i_28838 = (0);
while(true){
if((i_28838 < n__4376__auto___28837)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\f"], 0));

var G__28839 = (i_28838 + (1));
i_28838 = G__28839;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"~",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params__$1);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,"~"))], 0));

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"\n",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params__$1))){
cljs.pprint.prn();
} else {
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"T",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(2),[new cljs.core.Keyword(null,"colnum","colnum",2023796854),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__28803_SHARP_,p2__28804_SHARP_,p3__28805_SHARP_){
return cljs.pprint.relative_tabulation(p1__28803_SHARP_,p2__28804_SHARP_,p3__28805_SHARP_);
});
} else {
return (function (p1__28806_SHARP_,p2__28807_SHARP_,p3__28808_SHARP_){
return cljs.pprint.absolute_tabulation(p1__28806_SHARP_,p2__28807_SHARP_,p3__28808_SHARP_);
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"*",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,navigator,offsets){
var n = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params__$1))){
return cljs.pprint.absolute_reposition(navigator,n);
} else {
return cljs.pprint.relative_reposition(navigator,(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?(- n):n));
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"?",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return (function (params__$1,navigator,offsets){
var vec__28815 = cljs.pprint.get_format_arg(navigator);
var subformat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28815,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28815,(1),null);
return cljs.pprint.execute_sub_format(subformat,navigator__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params__$1));
});
} else {
return (function (params__$1,navigator,offsets){
var vec__28818 = cljs.pprint.get_format_arg(navigator);
var subformat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28818,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28818,(1),null);
var vec__28821 = cljs.pprint.next_arg(navigator__$1);
var subargs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28821,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28821,(1),null);
var sub_navigator = cljs.pprint.init_navigator(subargs);
cljs.pprint.execute_sub_format(subformat,sub_navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params__$1));

return navigator__$2;
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"(",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",-452581833),")",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),null,new cljs.core.Keyword(null,"else","else",-1508377146),null], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
var mod_case_writer = (cljs.core.truth_((function (){var and__3911__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__3911__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__3911__auto__;
}
})())?cljs.pprint.upcase_writer:(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.capitalize_word_writer:(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.init_cap_writer:cljs.pprint.downcase_writer
)));
return ((function (mod_case_writer){
return (function (p1__28809_SHARP_,p2__28810_SHARP_,p3__28811_SHARP_){
return cljs.pprint.modify_case(mod_case_writer,p1__28809_SHARP_,p2__28810_SHARP_,p3__28811_SHARP_);
});
;})(mod_case_writer))
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),")",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"[",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",-452581833),"]",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),true,new cljs.core.Keyword(null,"else","else",-1508377146),new cljs.core.Keyword(null,"last","last",1105735132)], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.boolean_conditional;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.check_arg_conditional;
} else {
return cljs.pprint.choice_conditional;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),";",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(2),[new cljs.core.Keyword(null,"min-remaining","min-remaining",962687677),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"max-columns","max-columns",1742323262),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"separator","separator",-1628749125),true], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"]",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"{",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"right","right",-452581833),"}",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),false], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_((function (){var and__3911__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__3911__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__3911__auto__;
}
})())){
return cljs.pprint.iterate_main_sublists;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_list_of_sublists;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_main_list;
} else {
return cljs.pprint.iterate_sublist;

}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"}",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"<",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",323570901),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null,new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",-452581833),">",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),true,new cljs.core.Keyword(null,"else","else",-1508377146),new cljs.core.Keyword(null,"first","first",-644103046)], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.logical_block_or_justify;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),">",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"^",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(3),[new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,navigator,offsets){
var arg1 = new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(params__$1);
var arg2 = new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(params__$1);
var arg3 = new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(params__$1);
var exit = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007):new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333));
if(cljs.core.truth_((function (){var and__3911__auto__ = arg1;
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = arg2;
if(cljs.core.truth_(and__3911__auto____$1)){
return arg3;
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})())){
if((((arg1 <= arg2)) && ((arg2 <= arg3)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_((function (){var and__3911__auto__ = arg1;
if(cljs.core.truth_(and__3911__auto__)){
return arg2;
} else {
return and__3911__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg1,arg2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_(arg1)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg1,(0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if((cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params__$1))):cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}

}
}
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"W",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null,new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
}
})())){
var bindings = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),null,new cljs.core.Keyword(null,"length","length",588987862),null], null):cljs.core.PersistentVector.EMPTY),(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pretty","pretty",-1916372486),true], null):cljs.core.PersistentVector.EMPTY));
return ((function (bindings){
return (function (params__$1,navigator,offsets){
var vec__28824 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28824,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28824,(1),null);
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.pprint.write,arg,bindings))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),navigator__$1], null);
} else {
return navigator__$1;
}
});
;})(bindings))
} else {
return (function (params__$1,navigator,offsets){
var vec__28827 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28827,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28827,(1),null);
if(cljs.core.truth_(cljs.pprint.write_out(arg))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),navigator__$1], null);
} else {
return navigator__$1;
}
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"_",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.conditional_newline;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"I",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.set_indent;
})], null)]);
cljs.pprint.param_pattern = /^([vV]|#|('.)|([+-]?\d+)|(?=,))/;
cljs.pprint.special_params = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",-1216589335),null,new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",-758446196),null], null), null);
cljs.pprint.extract_param = (function cljs$pprint$extract_param(p__28840){
var vec__28841 = p__28840;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28841,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28841,(1),null);
var saw_comma = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28841,(2),null);
var m = (new RegExp(cljs.pprint.param_pattern.source,"g"));
var param = m.exec(s);
if(cljs.core.truth_(param)){
var token_str = cljs.core.first(param);
var remainder = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,m.lastIndex);
var new_offset = (offset + m.lastIndex);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(",",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(remainder,(0))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder,new_offset,false], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(remainder,(1)),(new_offset + (1)),true], null)], null);
}
} else {
if(cljs.core.truth_(saw_comma)){
return cljs.pprint.format_error("Badly formed parameters in format directive",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset], null)], null);
}
}
});
cljs.pprint.extract_params = (function cljs$pprint$extract_params(s,offset){
return cljs.pprint.consume(cljs.pprint.extract_param,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,false], null));
});
/**
 * Translate the string representation of a param to the internalized
 *                                    representation
 */
cljs.pprint.translate_param = (function cljs$pprint$translate_param(p__28844){
var vec__28845 = p__28844;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28845,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28845,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(0)))?null:((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(1))) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["V",null,"v",null], null), null),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0))))))?new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",-758446196):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0))))))?new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",-1216589335):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0))))))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(1)):parseInt(p,(10))
)))),offset], null);
});
cljs.pprint.flag_defs = new cljs.core.PersistentArrayMap(null, 2, [":",new cljs.core.Keyword(null,"colon","colon",-965200945),"@",new cljs.core.Keyword(null,"at","at",1476951349)], null);
cljs.pprint.extract_flags = (function cljs$pprint$extract_flags(s,offset){
return cljs.pprint.consume((function (p__28848){
var vec__28849 = p__28848;
var s__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28849,(0),null);
var offset__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28849,(1),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28849,(2),null);
if(cljs.core.empty_QMARK_(s__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
} else {
var flag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.flag_defs,cljs.core.first(s__$1));
if(cljs.core.truth_(flag)){
if(cljs.core.contains_QMARK_(flags,flag)){
return cljs.pprint.format_error(["Flag \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(s__$1)),"\" appears more than once in a directive"].join(''),offset__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$1,(1)),(offset__$1 + (1)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(flags,flag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,offset__$1], null))], null)], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.pprint.check_flags = (function cljs$pprint$check_flags(def,flags){
var allowed = new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(def);
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.not(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(allowed));
if(and__3911__auto__){
return new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__3911__auto__;
}
})())){
cljs.pprint.format_error(["\"@\" is an illegal flag for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.not(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(allowed));
if(and__3911__auto__){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__3911__auto__;
}
})())){
cljs.pprint.format_error(["\":\" is an illegal flag for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.not(new cljs.core.Keyword(null,"both","both",-393648840).cljs$core$IFn$_invoke$arity$1(allowed));
if(and__3911__auto__){
var and__3911__auto____$1 = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags);
if(cljs.core.truth_(and__3911__auto____$1)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})())){
return cljs.pprint.format_error(["Cannot combine \"@\" and \":\" flags for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),(function (){var x__4009__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags),(1));
var y__4010__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags),(1));
return ((x__4009__auto__ < y__4010__auto__) ? x__4009__auto__ : y__4010__auto__);
})());
} else {
return null;
}
});
/**
 * Takes a directive definition and the list of actual parameters and
 * a map of flags and returns a map of the parameters and flags with defaults
 * filled in. We check to make sure that there are the right types and number
 * of parameters as well.
 */
cljs.pprint.map_params = (function cljs$pprint$map_params(def,params,flags,offset){
cljs.pprint.check_flags(def,flags);

if((cljs.core.count(params) > cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def)))){
cljs.pprint.format_error(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"Too many parameters for directive \"~C\": ~D~:* ~[were~;was~:;were~] specified but only ~D~:* ~[are~;is~:;are~] allowed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def),cljs.core.count(params),cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def))], 0)),cljs.core.second(cljs.core.first(params)));
} else {
}

cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__28852_SHARP_,p2__28853_SHARP_){
var val = cljs.core.first(p1__28852_SHARP_);
if(!((((val == null)) || (cljs.core.contains_QMARK_(cljs.pprint.special_params,val)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(cljs.core.second(p2__28853_SHARP_)),cljs.core.type(val)))))){
return cljs.pprint.format_error(["Parameter ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(p2__28853_SHARP_)))," has bad type in directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),"\": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(val))].join(''),cljs.core.second(p1__28852_SHARP_));
} else {
return null;
}
}),params,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def)));

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse((function (){var iter__4292__auto__ = (function cljs$pprint$map_params_$_iter__28857(s__28858){
return (new cljs.core.LazySeq(null,(function (){
var s__28858__$1 = s__28858;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__28858__$1);
if(temp__5457__auto__){
var s__28858__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28858__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__28858__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__28860 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__28859 = (0);
while(true){
if((i__28859 < size__4291__auto__)){
var vec__28861 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__28859);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28861,(0),null);
var vec__28864 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28861,(1),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28864,(0),null);
cljs.core.chunk_append(b__28860,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null));

var G__28873 = (i__28859 + (1));
i__28859 = G__28873;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28860),cljs$pprint$map_params_$_iter__28857(cljs.core.chunk_rest(s__28858__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28860),null);
}
} else {
var vec__28867 = cljs.core.first(s__28858__$2);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28867,(0),null);
var vec__28870 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28867,(1),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28870,(0),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null),cljs$pprint$map_params_$_iter__28857(cljs.core.rest(s__28858__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def));
})())),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__28854_SHARP_,p2__28855_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,p1__28854_SHARP_,p2__28855_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__28856_SHARP_){
return cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__28856_SHARP_,(1)));
}),cljs.core.zipmap(cljs.core.keys(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def)),params))),flags], 0));
});
cljs.pprint.compile_directive = (function cljs$pprint$compile_directive(s,offset){
var vec__28874 = cljs.pprint.extract_params(s,offset);
var raw_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28874,(0),null);
var vec__28877 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28874,(1),null);
var rest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28877,(0),null);
var offset__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28877,(1),null);
var vec__28880 = cljs.pprint.extract_flags(rest,offset__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28880,(0),null);
var vec__28883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28880,(1),null);
var rest__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28883,(0),null);
var offset__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28883,(1),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28883,(2),null);
var directive = cljs.core.first(rest__$1);
var def = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.directive_table,clojure.string.upper_case(directive));
var params = (cljs.core.truth_(def)?cljs.pprint.map_params(def,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.translate_param,raw_params),flags,offset__$2):null);
if(cljs.core.not(directive)){
cljs.pprint.format_error("Format string ended in the middle of a directive",offset__$2);
} else {
}

if(cljs.core.not(def)){
cljs.pprint.format_error(["Directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(directive),"\" is undefined"].join(''),offset__$2);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive((function (){var fexpr__28886 = new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656).cljs$core$IFn$_invoke$arity$1(def);
return (fexpr__28886.cljs$core$IFn$_invoke$arity$2 ? fexpr__28886.cljs$core$IFn$_invoke$arity$2(params,offset__$2) : fexpr__28886.call(null,params,offset__$2));
})(),def,params,offset__$2,null,null,null)),(function (){var remainder = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(rest__$1,(1));
var offset__$3 = (offset__$2 + (1));
var trim_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def))) && (cljs.core.not(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))));
var trim_count = ((trim_QMARK_)?cljs.pprint.prefix_count(remainder,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ","\t"], null)):(0));
var remainder__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(remainder,trim_count);
var offset__$4 = (offset__$3 + trim_count);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder__$1,offset__$4], null);
})()], null);
});
cljs.pprint.compile_raw_string = (function cljs$pprint$compile_raw_string(s,offset){
return (new cljs.pprint.compiled_directive((function (_,a,___$1){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s], 0));

return a;
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"string","string",-1989541586),s], null),offset,null,null,null));
});
cljs.pprint.right_bracket = (function cljs$pprint$right_bracket(this$){
return new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.separator_QMARK_ = (function cljs$pprint$separator_QMARK_(this$){
return new cljs.core.Keyword(null,"separator","separator",-1628749125).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.else_separator_QMARK_ = (function cljs$pprint$else_separator_QMARK_(this$){
var and__3911__auto__ = new cljs.core.Keyword(null,"separator","separator",-1628749125).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)));
if(cljs.core.truth_(and__3911__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$));
} else {
return and__3911__auto__;
}
});
cljs.pprint.process_bracket = (function cljs$pprint$process_bracket(this$,remainder){
var vec__28887 = (function (){var G__28890 = new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$));
var G__28891 = new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(this$);
var G__28892 = remainder;
return (cljs.pprint.collect_clauses.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.collect_clauses.cljs$core$IFn$_invoke$arity$3(G__28890,G__28891,G__28892) : cljs.pprint.collect_clauses.call(null,G__28890,G__28891,G__28892));
})();
var subex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28887,(0),null);
var remainder__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28887,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive(new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(this$),new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$),cljs.pprint.tuple_map(subex,new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(this$))], 0)),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(this$),null,null,null)),remainder__$1], null);
});
cljs.pprint.process_clause = (function cljs$pprint$process_clause(bracket_info,offset,remainder){
return cljs.pprint.consume((function (remainder__$1){
if(cljs.core.empty_QMARK_(remainder__$1)){
return cljs.pprint.format_error("No closing bracket found.",offset);
} else {
var this$ = cljs.core.first(remainder__$1);
var remainder__$2 = cljs.core.next(remainder__$1);
if(cljs.core.truth_(cljs.pprint.right_bracket(this$))){
return cljs.pprint.process_bracket(this$,remainder__$2);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(bracket_info),new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right-bracket","right-bracket",951856080),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$),null,remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.else_separator_QMARK_(this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"else","else",-1508377146),null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$),remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.separator_QMARK_(this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"separator","separator",-1628749125),null,null,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$2], null);

}
}
}
}
}
}),remainder);
});
cljs.pprint.collect_clauses = (function cljs$pprint$collect_clauses(bracket_info,offset,remainder){
return cljs.core.second(cljs.pprint.consume((function (p__28893){
var vec__28894 = p__28893;
var clause_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28894,(0),null);
var saw_else = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28894,(1),null);
var remainder__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28894,(2),null);
var vec__28897 = cljs.pprint.process_clause(bracket_info,offset,remainder__$1);
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28897,(0),null);
var vec__28900 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28897,(1),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28900,(0),null);
var right_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28900,(1),null);
var else_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28900,(2),null);
var remainder__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28900,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"right-bracket","right-bracket",951856080))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,cljs.core.PersistentArrayMap.createAsIfByAssoc([(cljs.core.truth_(saw_else)?new cljs.core.Keyword(null,"else","else",-1508377146):new cljs.core.Keyword(null,"clauses","clauses",1454841241)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"right-params","right-params",-1790676237),right_params])], 0)),remainder__$2], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"else","else",-1508377146))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(clause_map))){
return cljs.pprint.format_error("Two else clauses (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not(new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error("An else clause (\"~:;\") is in a bracket type that doesn't support it.",offset);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"first","first",-644103046),new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(bracket_info))) && (cljs.core.seq(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(clause_map))))){
return cljs.pprint.format_error("The else clause (\"~:;\") is only allowed in the first position for this directive.",offset);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"first","first",-644103046),new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"else","else",-1508377146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"else-params","else-params",-832171646),else_params], null)], 0)),false,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)], 0)),true,remainder__$2], null)], null);
}

}
}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"separator","separator",-1628749125))){
if(cljs.core.truth_(saw_else)){
return cljs.pprint.format_error("A plain clause (with \"~;\") follows an else clause (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not(new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error("A separator (\"~;\") is in a bracket type that doesn't support it.",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)], 0)),false,remainder__$2], null)], null);

}
}
} else {
return null;
}
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),cljs.core.PersistentVector.EMPTY], null),false,remainder], null)));
});
/**
 * Take a linearly compiled format and process the bracket directives to give it
 * the appropriate tree structure
 */
cljs.pprint.process_nesting = (function cljs$pprint$process_nesting(format){
return cljs.core.first(cljs.pprint.consume((function (remainder){
var this$ = cljs.core.first(remainder);
var remainder__$1 = cljs.core.next(remainder);
var bracket = new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$));
if(cljs.core.truth_(new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(bracket))){
return cljs.pprint.process_bracket(this$,remainder__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$1], null);
}
}),format));
});
/**
 * Compiles format-str into a compiled format which can be used as an argument
 * to cl-format just like a plain format string. Use this function for improved
 * performance when you're using the same format string repeatedly
 */
cljs.pprint.compile_format = (function cljs$pprint$compile_format(format_str){
var _STAR_format_str_STAR_28903 = cljs.pprint._STAR_format_str_STAR_;
cljs.pprint._STAR_format_str_STAR_ = format_str;

try{return cljs.pprint.process_nesting(cljs.core.first(cljs.pprint.consume(((function (_STAR_format_str_STAR_28903){
return (function (p__28904){
var vec__28905 = p__28904;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28905,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28905,(1),null);
if(cljs.core.empty_QMARK_(s)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,s], null);
} else {
var tilde = s.indexOf("~");
if((tilde < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string(s,offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",(offset + s.length)], null)], null);
} else {
if((tilde === (0))){
return cljs.pprint.compile_directive(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)),(offset + (1)));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),tilde),offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,tilde),(tilde + offset)], null)], null);

}
}
}
});})(_STAR_format_str_STAR_28903))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [format_str,(0)], null))));
}finally {cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR_28903;
}});
/**
 * determine whether a given compiled format has any directives that depend on the
 * column number or pretty printing
 */
cljs.pprint.needs_pretty = (function cljs$pprint$needs_pretty(format){
var format__$1 = format;
while(true){
if(cljs.core.empty_QMARK_(format__$1)){
return false;
} else {
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"pretty","pretty",-1916372486).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1))));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = cljs.core.some(cljs.pprint.needs_pretty,cljs.core.first(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1)))));
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return cljs.core.some(cljs.pprint.needs_pretty,cljs.core.first(new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1)))));
}
}
})())){
return true;
} else {
var G__28908 = cljs.core.next(format__$1);
format__$1 = G__28908;
continue;
}
}
break;
}
});
/**
 * Executes the format with the arguments.
 */
cljs.pprint.execute_format = (function cljs$pprint$execute_format(var_args){
var G__28910 = arguments.length;
switch (G__28910) {
case 3:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3 = (function (stream,format,args){
var sb = (new goog.string.StringBuffer());
var real_stream = ((((cljs.core.not(stream)) || (stream === true)))?(new cljs.core.StringBufferWriter(sb)):stream);
var wrapped_stream = (cljs.core.truth_((function (){var and__3911__auto__ = cljs.pprint.needs_pretty(format);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not(cljs.pprint.pretty_writer_QMARK_(real_stream));
} else {
return and__3911__auto__;
}
})())?cljs.pprint.get_pretty_writer(real_stream):real_stream);
var _STAR_out_STAR_28911 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = wrapped_stream;

try{try{cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(format,args);
}finally {if(!((real_stream === wrapped_stream))){
cljs.core._flush(wrapped_stream);
} else {
}
}
if(cljs.core.not(stream)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('');
} else {
if(stream === true){
return cljs.core.string_print([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''));
} else {
return null;

}
}
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_28911;
}});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2 = (function (format,args){
cljs.pprint.map_passing_context((function (element,context){
if(cljs.core.truth_(cljs.pprint.abort_QMARK_(context))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__28912 = cljs.pprint.realize_parameter_list(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28912,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28912,(1),null);
var vec__28915 = cljs.pprint.unzip_map(params);
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28915,(0),null);
var offsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28915,(1),null);
var params__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822),args__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format);

return null;
});

cljs.pprint.execute_format.cljs$lang$maxFixedArity = 3;

cljs.pprint.cached_compile = cljs.core.memoize(cljs.pprint.compile_format);
/**
 * Installs a function as a new method of multimethod associated with dispatch-value. 
 */
cljs.pprint.use_method = (function cljs$pprint$use_method(multifn,dispatch_val,func){
return cljs.core._add_method(multifn,dispatch_val,func);
});
cljs.pprint.reader_macros = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol(null,"quote","quote",1377916282,null),"'",new cljs.core.Symbol(null,"var","var",870848730,null),"#'",new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),"@",new cljs.core.Symbol("clojure.core","unquote","clojure.core/unquote",843087510,null),"~",new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null),"@",new cljs.core.Symbol("cljs.core","unquote","cljs.core/unquote",1013085760,null),"~"], null);
cljs.pprint.pprint_reader_macro = (function cljs$pprint$pprint_reader_macro(alis){
var macro_char = (function (){var G__28919 = cljs.core.first(alis);
return (cljs.pprint.reader_macros.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.reader_macros.cljs$core$IFn$_invoke$arity$1(G__28919) : cljs.pprint.reader_macros.call(null,G__28919));
})();
if(cljs.core.truth_((function (){var and__3911__auto__ = macro_char;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(alis));
} else {
return and__3911__auto__;
}
})())){
cljs.core._write(cljs.core._STAR_out_STAR_,macro_char);

cljs.pprint.write_out(cljs.core.second(alis));

return true;
} else {
return null;
}
});
cljs.pprint.pprint_simple_list = (function cljs$pprint$pprint_simple_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_28920_28923 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28921_28924 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var length_count28922_28925 = (0);
var alis_28926__$1 = cljs.core.seq(alis);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count28922_28925 < cljs.core._STAR_print_length_STAR_)))){
if(alis_28926__$1){
cljs.pprint.write_out(cljs.core.first(alis_28926__$1));

if(cljs.core.next(alis_28926__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var G__28927 = (length_count28922_28925 + (1));
var G__28928 = cljs.core.next(alis_28926__$1);
length_count28922_28925 = G__28927;
alis_28926__$1 = G__28928;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28921_28924;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28920_28923;
}}

return null;
});
cljs.pprint.pprint_list = (function cljs$pprint$pprint_list(alis){
if(cljs.core.not(cljs.pprint.pprint_reader_macro(alis))){
return cljs.pprint.pprint_simple_list(alis);
} else {
return null;
}
});
cljs.pprint.pprint_vector = (function cljs$pprint$pprint_vector(avec){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_28929_28932 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28930_28933 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count28931_28934 = (0);
var aseq_28935 = cljs.core.seq(avec);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count28931_28934 < cljs.core._STAR_print_length_STAR_)))){
if(aseq_28935){
cljs.pprint.write_out(cljs.core.first(aseq_28935));

if(cljs.core.next(aseq_28935)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var G__28936 = (length_count28931_28934 + (1));
var G__28937 = cljs.core.next(aseq_28935);
length_count28931_28934 = G__28936;
aseq_28935 = G__28937;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28930_28933;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28929_28932;
}}

return null;
});
cljs.pprint.pprint_array = (function (){var format_in__27753__auto__ = "~<[~;~@{~w~^, ~:_~}~;]~:>";
var cf__27754__auto__ = ((typeof format_in__27753__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27753__auto__) : cljs.pprint.cached_compile.call(null,format_in__27753__auto__)):format_in__27753__auto__);
return ((function (format_in__27753__auto__,cf__27754__auto__){
return (function() { 
var G__28938__delegate = function (args__27755__auto__){
var navigator__27756__auto__ = cljs.pprint.init_navigator(args__27755__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27754__auto__,navigator__27756__auto__);
};
var G__28938 = function (var_args){
var args__27755__auto__ = null;
if (arguments.length > 0) {
var G__28939__i = 0, G__28939__a = new Array(arguments.length -  0);
while (G__28939__i < G__28939__a.length) {G__28939__a[G__28939__i] = arguments[G__28939__i + 0]; ++G__28939__i;}
  args__27755__auto__ = new cljs.core.IndexedSeq(G__28939__a,0,null);
} 
return G__28938__delegate.call(this,args__27755__auto__);};
G__28938.cljs$lang$maxFixedArity = 0;
G__28938.cljs$lang$applyTo = (function (arglist__28940){
var args__27755__auto__ = cljs.core.seq(arglist__28940);
return G__28938__delegate(args__27755__auto__);
});
G__28938.cljs$core$IFn$_invoke$arity$variadic = G__28938__delegate;
return G__28938;
})()
;
;})(format_in__27753__auto__,cf__27754__auto__))
})();
cljs.pprint.pprint_map = (function cljs$pprint$pprint_map(amap){
var vec__28941 = ((!(cljs.core.record_QMARK_(amap)))?(function (){var fexpr__28944 = new cljs.core.Var(function(){return cljs.core.lift_ns;},new cljs.core.Symbol("cljs.core","lift-ns","cljs.core/lift-ns",463499081,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"lift-ns","lift-ns",602311926,null),"cljs/core.cljs",15,1,10104,10104,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null)], null)),"Returns [lifted-ns lifted-map] or nil if m can't be lifted.",(cljs.core.truth_(cljs.core.lift_ns)?cljs.core.lift_ns.cljs$lang$test:null)]));
return (fexpr__28944.cljs$core$IFn$_invoke$arity$1 ? fexpr__28944.cljs$core$IFn$_invoke$arity$1(amap) : fexpr__28944.call(null,amap));
})():null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28941,(0),null);
var lift_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28941,(1),null);
var amap__$1 = (function (){var or__3922__auto__ = lift_map;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return amap;
}
})();
var prefix = (cljs.core.truth_(ns)?["#:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"{"].join(''):"{");
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_28945_28950 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28946_28951 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,"}");

var length_count28947_28952 = (0);
var aseq_28953 = cljs.core.seq(amap__$1);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count28947_28952 < cljs.core._STAR_print_length_STAR_)))){
if(aseq_28953){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_28948_28954 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28949_28955 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);

cljs.pprint.write_out(cljs.core.ffirst(aseq_28953));

cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

cljs.pprint._STAR_current_length_STAR_ = (0);

cljs.pprint.write_out(cljs.core.fnext(cljs.core.first(aseq_28953)));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28949_28955;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28948_28954;
}}


if(cljs.core.next(aseq_28953)){
cljs.core._write(cljs.core._STAR_out_STAR_,", ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var G__28956 = (length_count28947_28952 + (1));
var G__28957 = cljs.core.next(aseq_28953);
length_count28947_28952 = G__28956;
aseq_28953 = G__28957;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28946_28951;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28945_28950;
}}

return null;
});
cljs.pprint.pprint_simple_default = (function cljs$pprint$pprint_simple_default(obj){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0)));
});
cljs.pprint.pprint_set = (function (){var format_in__27753__auto__ = "~<#{~;~@{~w~^ ~:_~}~;}~:>";
var cf__27754__auto__ = ((typeof format_in__27753__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27753__auto__) : cljs.pprint.cached_compile.call(null,format_in__27753__auto__)):format_in__27753__auto__);
return ((function (format_in__27753__auto__,cf__27754__auto__){
return (function() { 
var G__28958__delegate = function (args__27755__auto__){
var navigator__27756__auto__ = cljs.pprint.init_navigator(args__27755__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27754__auto__,navigator__27756__auto__);
};
var G__28958 = function (var_args){
var args__27755__auto__ = null;
if (arguments.length > 0) {
var G__28959__i = 0, G__28959__a = new Array(arguments.length -  0);
while (G__28959__i < G__28959__a.length) {G__28959__a[G__28959__i] = arguments[G__28959__i + 0]; ++G__28959__i;}
  args__27755__auto__ = new cljs.core.IndexedSeq(G__28959__a,0,null);
} 
return G__28958__delegate.call(this,args__27755__auto__);};
G__28958.cljs$lang$maxFixedArity = 0;
G__28958.cljs$lang$applyTo = (function (arglist__28960){
var args__27755__auto__ = cljs.core.seq(arglist__28960);
return G__28958__delegate(args__27755__auto__);
});
G__28958.cljs$core$IFn$_invoke$arity$variadic = G__28958__delegate;
return G__28958;
})()
;
;})(format_in__27753__auto__,cf__27754__auto__))
})();
cljs.pprint.type_map = new cljs.core.PersistentArrayMap(null, 2, ["core$future_call","Future","core$promise","Promise"], null);
/**
 * Map ugly type names to something simpler
 */
cljs.pprint.map_ref_type = (function cljs$pprint$map_ref_type(name){
var or__3922__auto__ = (function (){var temp__5457__auto__ = cljs.core.re_find(/^[^$]+\$[^$]+/,name);
if(cljs.core.truth_(temp__5457__auto__)){
var match = temp__5457__auto__;
return (cljs.pprint.type_map.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.type_map.cljs$core$IFn$_invoke$arity$1(match) : cljs.pprint.type_map.call(null,match));
} else {
return null;
}
})();
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return name;
}
});
cljs.pprint.pprint_ideref = (function cljs$pprint$pprint_ideref(o){
var prefix = ["#<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint.map_ref_type(cljs.core.type(o).name)),"@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.getUid(o)),": "].join('');
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_28961_28965 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28962_28966 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,">");

cljs.pprint.pprint_indent(new cljs.core.Keyword(null,"block","block",664686210),(- (cljs.core.count(prefix) - (2))));

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

cljs.pprint.write_out((((function (){var and__3911__auto__ = ((!((o == null)))?(((((o.cljs$lang$protocol_mask$partition1$ & (1))) || ((cljs.core.PROTOCOL_SENTINEL === o.cljs$core$IPending$))))?true:(((!o.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IPending,o):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IPending,o));
if(and__3911__auto__){
return !(cljs.core._realized_QMARK_(o));
} else {
return and__3911__auto__;
}
})())?new cljs.core.Keyword(null,"not-delivered","not-delivered",1599158697):cljs.core.deref(o)));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28962_28966;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28961_28965;
}}

return null;
});
cljs.pprint.pprint_pqueue = (function (){var format_in__27753__auto__ = "~<<-(~;~@{~w~^ ~_~}~;)-<~:>";
var cf__27754__auto__ = ((typeof format_in__27753__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27753__auto__) : cljs.pprint.cached_compile.call(null,format_in__27753__auto__)):format_in__27753__auto__);
return ((function (format_in__27753__auto__,cf__27754__auto__){
return (function() { 
var G__28967__delegate = function (args__27755__auto__){
var navigator__27756__auto__ = cljs.pprint.init_navigator(args__27755__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27754__auto__,navigator__27756__auto__);
};
var G__28967 = function (var_args){
var args__27755__auto__ = null;
if (arguments.length > 0) {
var G__28968__i = 0, G__28968__a = new Array(arguments.length -  0);
while (G__28968__i < G__28968__a.length) {G__28968__a[G__28968__i] = arguments[G__28968__i + 0]; ++G__28968__i;}
  args__27755__auto__ = new cljs.core.IndexedSeq(G__28968__a,0,null);
} 
return G__28967__delegate.call(this,args__27755__auto__);};
G__28967.cljs$lang$maxFixedArity = 0;
G__28967.cljs$lang$applyTo = (function (arglist__28969){
var args__27755__auto__ = cljs.core.seq(arglist__28969);
return G__28967__delegate(args__27755__auto__);
});
G__28967.cljs$core$IFn$_invoke$arity$variadic = G__28967__delegate;
return G__28967;
})()
;
;})(format_in__27753__auto__,cf__27754__auto__))
})();
cljs.pprint.type_dispatcher = (function cljs$pprint$type_dispatcher(obj){
if((obj instanceof cljs.core.PersistentQueue)){
return new cljs.core.Keyword(null,"queue","queue",1455835879);
} else {
if(((!((obj == null)))?(((((obj.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IDeref$))))?true:(((!obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj))){
return new cljs.core.Keyword(null,"deref","deref",-145586795);
} else {
if((obj instanceof cljs.core.Symbol)){
return new cljs.core.Keyword(null,"symbol","symbol",-1038572696);
} else {
if(cljs.core.seq_QMARK_(obj)){
return new cljs.core.Keyword(null,"list","list",765357683);
} else {
if(cljs.core.map_QMARK_(obj)){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if(cljs.core.vector_QMARK_(obj)){
return new cljs.core.Keyword(null,"vector","vector",1902966158);
} else {
if(cljs.core.set_QMARK_(obj)){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((obj == null)){
return null;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);

}
}
}
}
}
}
}
}
});
if(typeof cljs.pprint.simple_dispatch !== 'undefined'){
} else {
/**
 * The pretty print dispatch function for simple data structure format.
 */
cljs.pprint.simple_dispatch = (function (){var method_table__4382__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","simple-dispatch"),cljs.pprint.type_dispatcher,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
cljs.pprint.use_method(cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"list","list",765357683),cljs.pprint.pprint_list);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"vector","vector",1902966158),cljs.pprint.pprint_vector);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"map","map",1371690461),cljs.pprint.pprint_map);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"set","set",304602554),cljs.pprint.pprint_set);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,null,(function (){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)));
}));
cljs.pprint.use_method(cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch(cljs.pprint.simple_dispatch);
/**
 * Figure out which kind of brackets to use
 */
cljs.pprint.brackets = (function cljs$pprint$brackets(form){
if(cljs.core.vector_QMARK_(form)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","]"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null);
}
});
/**
 * Pretty print a single reference (import, use, etc.) from a namespace decl
 */
cljs.pprint.pprint_ns_reference = (function cljs$pprint$pprint_ns_reference(reference){
if(cljs.core.sequential_QMARK_(reference)){
var vec__28971 = cljs.pprint.brackets(reference);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28971,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28971,(1),null);
var vec__28974 = reference;
var seq__28975 = cljs.core.seq(vec__28974);
var first__28976 = cljs.core.first(seq__28975);
var seq__28975__$1 = cljs.core.next(seq__28975);
var keyw = first__28976;
var args = seq__28975__$1;
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_28977_28993 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28978_28994 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,start,null,end);

var fexpr__28979_28995 = (function (){var format_in__27753__auto__ = "~w~:i";
var cf__27754__auto__ = ((typeof format_in__27753__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27753__auto__) : cljs.pprint.cached_compile.call(null,format_in__27753__auto__)):format_in__27753__auto__);
return ((function (format_in__27753__auto__,cf__27754__auto__,_STAR_current_level_STAR_28977_28993,_STAR_current_length_STAR_28978_28994,vec__28971,start,end,vec__28974,seq__28975,first__28976,seq__28975__$1,keyw,args){
return (function() { 
var G__28996__delegate = function (args__27755__auto__){
var navigator__27756__auto__ = cljs.pprint.init_navigator(args__27755__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27754__auto__,navigator__27756__auto__);
};
var G__28996 = function (var_args){
var args__27755__auto__ = null;
if (arguments.length > 0) {
var G__28997__i = 0, G__28997__a = new Array(arguments.length -  0);
while (G__28997__i < G__28997__a.length) {G__28997__a[G__28997__i] = arguments[G__28997__i + 0]; ++G__28997__i;}
  args__27755__auto__ = new cljs.core.IndexedSeq(G__28997__a,0,null);
} 
return G__28996__delegate.call(this,args__27755__auto__);};
G__28996.cljs$lang$maxFixedArity = 0;
G__28996.cljs$lang$applyTo = (function (arglist__28998){
var args__27755__auto__ = cljs.core.seq(arglist__28998);
return G__28996__delegate(args__27755__auto__);
});
G__28996.cljs$core$IFn$_invoke$arity$variadic = G__28996__delegate;
return G__28996;
})()
;
;})(format_in__27753__auto__,cf__27754__auto__,_STAR_current_level_STAR_28977_28993,_STAR_current_length_STAR_28978_28994,vec__28971,start,end,vec__28974,seq__28975,first__28976,seq__28975__$1,keyw,args))
})();
(fexpr__28979_28995.cljs$core$IFn$_invoke$arity$1 ? fexpr__28979_28995.cljs$core$IFn$_invoke$arity$1(keyw) : fexpr__28979_28995.call(null,keyw));

var args_28999__$1 = args;
while(true){
if(cljs.core.seq(args_28999__$1)){
var fexpr__28980_29000 = (function (){var format_in__27753__auto__ = " ";
var cf__27754__auto__ = ((typeof format_in__27753__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27753__auto__) : cljs.pprint.cached_compile.call(null,format_in__27753__auto__)):format_in__27753__auto__);
return ((function (args_28999__$1,format_in__27753__auto__,cf__27754__auto__,_STAR_current_level_STAR_28977_28993,_STAR_current_length_STAR_28978_28994,vec__28971,start,end,vec__28974,seq__28975,first__28976,seq__28975__$1,keyw,args){
return (function() { 
var G__29001__delegate = function (args__27755__auto__){
var navigator__27756__auto__ = cljs.pprint.init_navigator(args__27755__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27754__auto__,navigator__27756__auto__);
};
var G__29001 = function (var_args){
var args__27755__auto__ = null;
if (arguments.length > 0) {
var G__29002__i = 0, G__29002__a = new Array(arguments.length -  0);
while (G__29002__i < G__29002__a.length) {G__29002__a[G__29002__i] = arguments[G__29002__i + 0]; ++G__29002__i;}
  args__27755__auto__ = new cljs.core.IndexedSeq(G__29002__a,0,null);
} 
return G__29001__delegate.call(this,args__27755__auto__);};
G__29001.cljs$lang$maxFixedArity = 0;
G__29001.cljs$lang$applyTo = (function (arglist__29003){
var args__27755__auto__ = cljs.core.seq(arglist__29003);
return G__29001__delegate(args__27755__auto__);
});
G__29001.cljs$core$IFn$_invoke$arity$variadic = G__29001__delegate;
return G__29001;
})()
;
;})(args_28999__$1,format_in__27753__auto__,cf__27754__auto__,_STAR_current_level_STAR_28977_28993,_STAR_current_length_STAR_28978_28994,vec__28971,start,end,vec__28974,seq__28975,first__28976,seq__28975__$1,keyw,args))
})();
(fexpr__28980_29000.cljs$core$IFn$_invoke$arity$0 ? fexpr__28980_29000.cljs$core$IFn$_invoke$arity$0() : fexpr__28980_29000.call(null));

var arg_29004 = cljs.core.first(args_28999__$1);
if(cljs.core.sequential_QMARK_(arg_29004)){
var vec__28981_29005 = cljs.pprint.brackets(arg_29004);
var start_29006__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28981_29005,(0),null);
var end_29007__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28981_29005,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_28984_29008 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28985_29009 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,start_29006__$1,null,end_29007__$1);

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(arg_29004),(3))) && ((cljs.core.second(arg_29004) instanceof cljs.core.Keyword)))){
var vec__28986_29010 = arg_29004;
var ns_29011 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28986_29010,(0),null);
var kw_29012 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28986_29010,(1),null);
var lis_29013 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28986_29010,(2),null);
var fexpr__28989_29014 = (function (){var format_in__27753__auto__ = "~w ~w ";
var cf__27754__auto__ = ((typeof format_in__27753__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27753__auto__) : cljs.pprint.cached_compile.call(null,format_in__27753__auto__)):format_in__27753__auto__);
return ((function (args_28999__$1,format_in__27753__auto__,cf__27754__auto__,vec__28986_29010,ns_29011,kw_29012,lis_29013,_STAR_current_level_STAR_28984_29008,_STAR_current_length_STAR_28985_29009,vec__28981_29005,start_29006__$1,end_29007__$1,arg_29004,_STAR_current_level_STAR_28977_28993,_STAR_current_length_STAR_28978_28994,vec__28971,start,end,vec__28974,seq__28975,first__28976,seq__28975__$1,keyw,args){
return (function() { 
var G__29015__delegate = function (args__27755__auto__){
var navigator__27756__auto__ = cljs.pprint.init_navigator(args__27755__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27754__auto__,navigator__27756__auto__);
};
var G__29015 = function (var_args){
var args__27755__auto__ = null;
if (arguments.length > 0) {
var G__29016__i = 0, G__29016__a = new Array(arguments.length -  0);
while (G__29016__i < G__29016__a.length) {G__29016__a[G__29016__i] = arguments[G__29016__i + 0]; ++G__29016__i;}
  args__27755__auto__ = new cljs.core.IndexedSeq(G__29016__a,0,null);
} 
return G__29015__delegate.call(this,args__27755__auto__);};
G__29015.cljs$lang$maxFixedArity = 0;
G__29015.cljs$lang$applyTo = (function (arglist__29017){
var args__27755__auto__ = cljs.core.seq(arglist__29017);
return G__29015__delegate(args__27755__auto__);
});
G__29015.cljs$core$IFn$_invoke$arity$variadic = G__29015__delegate;
return G__29015;
})()
;
;})(args_28999__$1,format_in__27753__auto__,cf__27754__auto__,vec__28986_29010,ns_29011,kw_29012,lis_29013,_STAR_current_level_STAR_28984_29008,_STAR_current_length_STAR_28985_29009,vec__28981_29005,start_29006__$1,end_29007__$1,arg_29004,_STAR_current_level_STAR_28977_28993,_STAR_current_length_STAR_28978_28994,vec__28971,start,end,vec__28974,seq__28975,first__28976,seq__28975__$1,keyw,args))
})();
(fexpr__28989_29014.cljs$core$IFn$_invoke$arity$2 ? fexpr__28989_29014.cljs$core$IFn$_invoke$arity$2(ns_29011,kw_29012) : fexpr__28989_29014.call(null,ns_29011,kw_29012));

if(cljs.core.sequential_QMARK_(lis_29013)){
var fexpr__28990_29018 = (function (){var format_in__27753__auto__ = ((cljs.core.vector_QMARK_(lis_29013))?"~<[~;~@{~w~^ ~:_~}~;]~:>":"~<(~;~@{~w~^ ~:_~}~;)~:>");
var cf__27754__auto__ = ((typeof format_in__27753__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27753__auto__) : cljs.pprint.cached_compile.call(null,format_in__27753__auto__)):format_in__27753__auto__);
return ((function (args_28999__$1,format_in__27753__auto__,cf__27754__auto__,vec__28986_29010,ns_29011,kw_29012,lis_29013,_STAR_current_level_STAR_28984_29008,_STAR_current_length_STAR_28985_29009,vec__28981_29005,start_29006__$1,end_29007__$1,arg_29004,_STAR_current_level_STAR_28977_28993,_STAR_current_length_STAR_28978_28994,vec__28971,start,end,vec__28974,seq__28975,first__28976,seq__28975__$1,keyw,args){
return (function() { 
var G__29019__delegate = function (args__27755__auto__){
var navigator__27756__auto__ = cljs.pprint.init_navigator(args__27755__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27754__auto__,navigator__27756__auto__);
};
var G__29019 = function (var_args){
var args__27755__auto__ = null;
if (arguments.length > 0) {
var G__29020__i = 0, G__29020__a = new Array(arguments.length -  0);
while (G__29020__i < G__29020__a.length) {G__29020__a[G__29020__i] = arguments[G__29020__i + 0]; ++G__29020__i;}
  args__27755__auto__ = new cljs.core.IndexedSeq(G__29020__a,0,null);
} 
return G__29019__delegate.call(this,args__27755__auto__);};
G__29019.cljs$lang$maxFixedArity = 0;
G__29019.cljs$lang$applyTo = (function (arglist__29021){
var args__27755__auto__ = cljs.core.seq(arglist__29021);
return G__29019__delegate(args__27755__auto__);
});
G__29019.cljs$core$IFn$_invoke$arity$variadic = G__29019__delegate;
return G__29019;
})()
;
;})(args_28999__$1,format_in__27753__auto__,cf__27754__auto__,vec__28986_29010,ns_29011,kw_29012,lis_29013,_STAR_current_level_STAR_28984_29008,_STAR_current_length_STAR_28985_29009,vec__28981_29005,start_29006__$1,end_29007__$1,arg_29004,_STAR_current_level_STAR_28977_28993,_STAR_current_length_STAR_28978_28994,vec__28971,start,end,vec__28974,seq__28975,first__28976,seq__28975__$1,keyw,args))
})();
(fexpr__28990_29018.cljs$core$IFn$_invoke$arity$1 ? fexpr__28990_29018.cljs$core$IFn$_invoke$arity$1(lis_29013) : fexpr__28990_29018.call(null,lis_29013));
} else {
cljs.pprint.write_out(lis_29013);
}
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var format_in__27753__auto__ = "~w ~:i~@{~w~^ ~:_~}";
var cf__27754__auto__ = ((typeof format_in__27753__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27753__auto__) : cljs.pprint.cached_compile.call(null,format_in__27753__auto__)):format_in__27753__auto__);
return ((function (args_28999__$1,format_in__27753__auto__,cf__27754__auto__,_STAR_current_level_STAR_28984_29008,_STAR_current_length_STAR_28985_29009,vec__28981_29005,start_29006__$1,end_29007__$1,arg_29004,_STAR_current_level_STAR_28977_28993,_STAR_current_length_STAR_28978_28994,vec__28971,start,end,vec__28974,seq__28975,first__28976,seq__28975__$1,keyw,args){
return (function() { 
var G__29022__delegate = function (args__27755__auto__){
var navigator__27756__auto__ = cljs.pprint.init_navigator(args__27755__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27754__auto__,navigator__27756__auto__);
};
var G__29022 = function (var_args){
var args__27755__auto__ = null;
if (arguments.length > 0) {
var G__29023__i = 0, G__29023__a = new Array(arguments.length -  0);
while (G__29023__i < G__29023__a.length) {G__29023__a[G__29023__i] = arguments[G__29023__i + 0]; ++G__29023__i;}
  args__27755__auto__ = new cljs.core.IndexedSeq(G__29023__a,0,null);
} 
return G__29022__delegate.call(this,args__27755__auto__);};
G__29022.cljs$lang$maxFixedArity = 0;
G__29022.cljs$lang$applyTo = (function (arglist__29024){
var args__27755__auto__ = cljs.core.seq(arglist__29024);
return G__29022__delegate(args__27755__auto__);
});
G__29022.cljs$core$IFn$_invoke$arity$variadic = G__29022__delegate;
return G__29022;
})()
;
;})(args_28999__$1,format_in__27753__auto__,cf__27754__auto__,_STAR_current_level_STAR_28984_29008,_STAR_current_length_STAR_28985_29009,vec__28981_29005,start_29006__$1,end_29007__$1,arg_29004,_STAR_current_level_STAR_28977_28993,_STAR_current_length_STAR_28978_28994,vec__28971,start,end,vec__28974,seq__28975,first__28976,seq__28975__$1,keyw,args))
})(),arg_29004);
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28985_29009;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28984_29008;
}}


if(cljs.core.next(args_28999__$1)){
var fexpr__28991_29025 = (function (){var format_in__27753__auto__ = "~_";
var cf__27754__auto__ = ((typeof format_in__27753__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27753__auto__) : cljs.pprint.cached_compile.call(null,format_in__27753__auto__)):format_in__27753__auto__);
return ((function (args_28999__$1,format_in__27753__auto__,cf__27754__auto__,vec__28981_29005,start_29006__$1,end_29007__$1,arg_29004,_STAR_current_level_STAR_28977_28993,_STAR_current_length_STAR_28978_28994,vec__28971,start,end,vec__28974,seq__28975,first__28976,seq__28975__$1,keyw,args){
return (function() { 
var G__29026__delegate = function (args__27755__auto__){
var navigator__27756__auto__ = cljs.pprint.init_navigator(args__27755__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27754__auto__,navigator__27756__auto__);
};
var G__29026 = function (var_args){
var args__27755__auto__ = null;
if (arguments.length > 0) {
var G__29027__i = 0, G__29027__a = new Array(arguments.length -  0);
while (G__29027__i < G__29027__a.length) {G__29027__a[G__29027__i] = arguments[G__29027__i + 0]; ++G__29027__i;}
  args__27755__auto__ = new cljs.core.IndexedSeq(G__29027__a,0,null);
} 
return G__29026__delegate.call(this,args__27755__auto__);};
G__29026.cljs$lang$maxFixedArity = 0;
G__29026.cljs$lang$applyTo = (function (arglist__29028){
var args__27755__auto__ = cljs.core.seq(arglist__29028);
return G__29026__delegate(args__27755__auto__);
});
G__29026.cljs$core$IFn$_invoke$arity$variadic = G__29026__delegate;
return G__29026;
})()
;
;})(args_28999__$1,format_in__27753__auto__,cf__27754__auto__,vec__28981_29005,start_29006__$1,end_29007__$1,arg_29004,_STAR_current_level_STAR_28977_28993,_STAR_current_length_STAR_28978_28994,vec__28971,start,end,vec__28974,seq__28975,first__28976,seq__28975__$1,keyw,args))
})();
(fexpr__28991_29025.cljs$core$IFn$_invoke$arity$0 ? fexpr__28991_29025.cljs$core$IFn$_invoke$arity$0() : fexpr__28991_29025.call(null));
} else {
}
} else {
cljs.pprint.write_out(arg_29004);

if(cljs.core.next(args_28999__$1)){
var fexpr__28992_29029 = (function (){var format_in__27753__auto__ = "~:_";
var cf__27754__auto__ = ((typeof format_in__27753__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27753__auto__) : cljs.pprint.cached_compile.call(null,format_in__27753__auto__)):format_in__27753__auto__);
return ((function (args_28999__$1,format_in__27753__auto__,cf__27754__auto__,arg_29004,_STAR_current_level_STAR_28977_28993,_STAR_current_length_STAR_28978_28994,vec__28971,start,end,vec__28974,seq__28975,first__28976,seq__28975__$1,keyw,args){
return (function() { 
var G__29030__delegate = function (args__27755__auto__){
var navigator__27756__auto__ = cljs.pprint.init_navigator(args__27755__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27754__auto__,navigator__27756__auto__);
};
var G__29030 = function (var_args){
var args__27755__auto__ = null;
if (arguments.length > 0) {
var G__29031__i = 0, G__29031__a = new Array(arguments.length -  0);
while (G__29031__i < G__29031__a.length) {G__29031__a[G__29031__i] = arguments[G__29031__i + 0]; ++G__29031__i;}
  args__27755__auto__ = new cljs.core.IndexedSeq(G__29031__a,0,null);
} 
return G__29030__delegate.call(this,args__27755__auto__);};
G__29030.cljs$lang$maxFixedArity = 0;
G__29030.cljs$lang$applyTo = (function (arglist__29032){
var args__27755__auto__ = cljs.core.seq(arglist__29032);
return G__29030__delegate(args__27755__auto__);
});
G__29030.cljs$core$IFn$_invoke$arity$variadic = G__29030__delegate;
return G__29030;
})()
;
;})(args_28999__$1,format_in__27753__auto__,cf__27754__auto__,arg_29004,_STAR_current_level_STAR_28977_28993,_STAR_current_length_STAR_28978_28994,vec__28971,start,end,vec__28974,seq__28975,first__28976,seq__28975__$1,keyw,args))
})();
(fexpr__28992_29029.cljs$core$IFn$_invoke$arity$0 ? fexpr__28992_29029.cljs$core$IFn$_invoke$arity$0() : fexpr__28992_29029.call(null));
} else {
}
}

var G__29033 = cljs.core.next(args_28999__$1);
args_28999__$1 = G__29033;
continue;
} else {
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28978_28994;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28977_28993;
}}

return null;
} else {
return cljs.pprint.write_out(reference);
}
});
/**
 * The pretty print dispatch chunk for the ns macro
 */
cljs.pprint.pprint_ns = (function cljs$pprint$pprint_ns(alis){
if(cljs.core.next(alis)){
var vec__29034 = alis;
var seq__29035 = cljs.core.seq(vec__29034);
var first__29036 = cljs.core.first(seq__29035);
var seq__29035__$1 = cljs.core.next(seq__29035);
var ns_sym = first__29036;
var first__29036__$1 = cljs.core.first(seq__29035__$1);
var seq__29035__$2 = cljs.core.next(seq__29035__$1);
var ns_name = first__29036__$1;
var stuff = seq__29035__$2;
var vec__29037 = ((typeof cljs.core.first(stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff),cljs.core.next(stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29037,(0),null);
var stuff__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29037,(1),null);
var vec__29040 = ((cljs.core.map_QMARK_(cljs.core.first(stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff__$1),cljs.core.next(stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29040,(0),null);
var references = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29040,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_29043_29050 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_29044_29051 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var fexpr__29045_29052 = (function (){var format_in__27753__auto__ = "~w ~1I~@_~w";
var cf__27754__auto__ = ((typeof format_in__27753__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27753__auto__) : cljs.pprint.cached_compile.call(null,format_in__27753__auto__)):format_in__27753__auto__);
return ((function (format_in__27753__auto__,cf__27754__auto__,_STAR_current_level_STAR_29043_29050,_STAR_current_length_STAR_29044_29051,vec__29034,seq__29035,first__29036,seq__29035__$1,ns_sym,first__29036__$1,seq__29035__$2,ns_name,stuff,vec__29037,doc_str,stuff__$1,vec__29040,attr_map,references){
return (function() { 
var G__29053__delegate = function (args__27755__auto__){
var navigator__27756__auto__ = cljs.pprint.init_navigator(args__27755__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27754__auto__,navigator__27756__auto__);
};
var G__29053 = function (var_args){
var args__27755__auto__ = null;
if (arguments.length > 0) {
var G__29054__i = 0, G__29054__a = new Array(arguments.length -  0);
while (G__29054__i < G__29054__a.length) {G__29054__a[G__29054__i] = arguments[G__29054__i + 0]; ++G__29054__i;}
  args__27755__auto__ = new cljs.core.IndexedSeq(G__29054__a,0,null);
} 
return G__29053__delegate.call(this,args__27755__auto__);};
G__29053.cljs$lang$maxFixedArity = 0;
G__29053.cljs$lang$applyTo = (function (arglist__29055){
var args__27755__auto__ = cljs.core.seq(arglist__29055);
return G__29053__delegate(args__27755__auto__);
});
G__29053.cljs$core$IFn$_invoke$arity$variadic = G__29053__delegate;
return G__29053;
})()
;
;})(format_in__27753__auto__,cf__27754__auto__,_STAR_current_level_STAR_29043_29050,_STAR_current_length_STAR_29044_29051,vec__29034,seq__29035,first__29036,seq__29035__$1,ns_sym,first__29036__$1,seq__29035__$2,ns_name,stuff,vec__29037,doc_str,stuff__$1,vec__29040,attr_map,references))
})();
(fexpr__29045_29052.cljs$core$IFn$_invoke$arity$2 ? fexpr__29045_29052.cljs$core$IFn$_invoke$arity$2(ns_sym,ns_name) : fexpr__29045_29052.call(null,ns_sym,ns_name));

if(cljs.core.truth_((function (){var or__3922__auto__ = doc_str;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = attr_map;
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return cljs.core.seq(references);
}
}
})())){
var fexpr__29046_29056 = (function (){var format_in__27753__auto__ = "~@:_";
var cf__27754__auto__ = ((typeof format_in__27753__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27753__auto__) : cljs.pprint.cached_compile.call(null,format_in__27753__auto__)):format_in__27753__auto__);
return ((function (format_in__27753__auto__,cf__27754__auto__,_STAR_current_level_STAR_29043_29050,_STAR_current_length_STAR_29044_29051,vec__29034,seq__29035,first__29036,seq__29035__$1,ns_sym,first__29036__$1,seq__29035__$2,ns_name,stuff,vec__29037,doc_str,stuff__$1,vec__29040,attr_map,references){
return (function() { 
var G__29057__delegate = function (args__27755__auto__){
var navigator__27756__auto__ = cljs.pprint.init_navigator(args__27755__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27754__auto__,navigator__27756__auto__);
};
var G__29057 = function (var_args){
var args__27755__auto__ = null;
if (arguments.length > 0) {
var G__29058__i = 0, G__29058__a = new Array(arguments.length -  0);
while (G__29058__i < G__29058__a.length) {G__29058__a[G__29058__i] = arguments[G__29058__i + 0]; ++G__29058__i;}
  args__27755__auto__ = new cljs.core.IndexedSeq(G__29058__a,0,null);
} 
return G__29057__delegate.call(this,args__27755__auto__);};
G__29057.cljs$lang$maxFixedArity = 0;
G__29057.cljs$lang$applyTo = (function (arglist__29059){
var args__27755__auto__ = cljs.core.seq(arglist__29059);
return G__29057__delegate(args__27755__auto__);
});
G__29057.cljs$core$IFn$_invoke$arity$variadic = G__29057__delegate;
return G__29057;
})()
;
;})(format_in__27753__auto__,cf__27754__auto__,_STAR_current_level_STAR_29043_29050,_STAR_current_length_STAR_29044_29051,vec__29034,seq__29035,first__29036,seq__29035__$1,ns_sym,first__29036__$1,seq__29035__$2,ns_name,stuff,vec__29037,doc_str,stuff__$1,vec__29040,attr_map,references))
})();
(fexpr__29046_29056.cljs$core$IFn$_invoke$arity$0 ? fexpr__29046_29056.cljs$core$IFn$_invoke$arity$0() : fexpr__29046_29056.call(null));
} else {
}

if(cljs.core.truth_(doc_str)){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\"~a\"~:[~;~:@_~]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([doc_str,(function (){var or__3922__auto__ = attr_map;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.seq(references);
}
})()], 0));
} else {
}

if(cljs.core.truth_(attr_map)){
var G__29048_29060 = attr_map;
var G__29049_29061 = cljs.core.seq(references);
var fexpr__29047_29062 = (function (){var format_in__27753__auto__ = "~w~:[~;~:@_~]";
var cf__27754__auto__ = ((typeof format_in__27753__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27753__auto__) : cljs.pprint.cached_compile.call(null,format_in__27753__auto__)):format_in__27753__auto__);
return ((function (format_in__27753__auto__,cf__27754__auto__,G__29048_29060,G__29049_29061,_STAR_current_level_STAR_29043_29050,_STAR_current_length_STAR_29044_29051,vec__29034,seq__29035,first__29036,seq__29035__$1,ns_sym,first__29036__$1,seq__29035__$2,ns_name,stuff,vec__29037,doc_str,stuff__$1,vec__29040,attr_map,references){
return (function() { 
var G__29063__delegate = function (args__27755__auto__){
var navigator__27756__auto__ = cljs.pprint.init_navigator(args__27755__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27754__auto__,navigator__27756__auto__);
};
var G__29063 = function (var_args){
var args__27755__auto__ = null;
if (arguments.length > 0) {
var G__29064__i = 0, G__29064__a = new Array(arguments.length -  0);
while (G__29064__i < G__29064__a.length) {G__29064__a[G__29064__i] = arguments[G__29064__i + 0]; ++G__29064__i;}
  args__27755__auto__ = new cljs.core.IndexedSeq(G__29064__a,0,null);
} 
return G__29063__delegate.call(this,args__27755__auto__);};
G__29063.cljs$lang$maxFixedArity = 0;
G__29063.cljs$lang$applyTo = (function (arglist__29065){
var args__27755__auto__ = cljs.core.seq(arglist__29065);
return G__29063__delegate(args__27755__auto__);
});
G__29063.cljs$core$IFn$_invoke$arity$variadic = G__29063__delegate;
return G__29063;
})()
;
;})(format_in__27753__auto__,cf__27754__auto__,G__29048_29060,G__29049_29061,_STAR_current_level_STAR_29043_29050,_STAR_current_length_STAR_29044_29051,vec__29034,seq__29035,first__29036,seq__29035__$1,ns_sym,first__29036__$1,seq__29035__$2,ns_name,stuff,vec__29037,doc_str,stuff__$1,vec__29040,attr_map,references))
})();
(fexpr__29047_29062.cljs$core$IFn$_invoke$arity$2 ? fexpr__29047_29062.cljs$core$IFn$_invoke$arity$2(G__29048_29060,G__29049_29061) : fexpr__29047_29062.call(null,G__29048_29060,G__29049_29061));
} else {
}

var references_29066__$1 = references;
while(true){
cljs.pprint.pprint_ns_reference(cljs.core.first(references_29066__$1));

var temp__5457__auto___29067 = cljs.core.next(references_29066__$1);
if(temp__5457__auto___29067){
var references_29068__$2 = temp__5457__auto___29067;
cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var G__29069 = references_29068__$2;
references_29066__$1 = G__29069;
continue;
} else {
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_29044_29051;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_29043_29050;
}}

return null;
} else {
return cljs.pprint.write_out(alis);
}
});
cljs.pprint.pprint_hold_first = (function (){var format_in__27753__auto__ = "~:<~w~^ ~@_~w~^ ~_~@{~w~^ ~_~}~:>";
var cf__27754__auto__ = ((typeof format_in__27753__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27753__auto__) : cljs.pprint.cached_compile.call(null,format_in__27753__auto__)):format_in__27753__auto__);
return ((function (format_in__27753__auto__,cf__27754__auto__){
return (function() { 
var G__29070__delegate = function (args__27755__auto__){
var navigator__27756__auto__ = cljs.pprint.init_navigator(args__27755__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27754__auto__,navigator__27756__auto__);
};
var G__29070 = function (var_args){
var args__27755__auto__ = null;
if (arguments.length > 0) {
var G__29071__i = 0, G__29071__a = new Array(arguments.length -  0);
while (G__29071__i < G__29071__a.length) {G__29071__a[G__29071__i] = arguments[G__29071__i + 0]; ++G__29071__i;}
  args__27755__auto__ = new cljs.core.IndexedSeq(G__29071__a,0,null);
} 
return G__29070__delegate.call(this,args__27755__auto__);};
G__29070.cljs$lang$maxFixedArity = 0;
G__29070.cljs$lang$applyTo = (function (arglist__29072){
var args__27755__auto__ = cljs.core.seq(arglist__29072);
return G__29070__delegate(args__27755__auto__);
});
G__29070.cljs$core$IFn$_invoke$arity$variadic = G__29070__delegate;
return G__29070;
})()
;
;})(format_in__27753__auto__,cf__27754__auto__))
})();
cljs.pprint.single_defn = (function cljs$pprint$single_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq(alis)){
if(cljs.core.truth_(has_doc_str_QMARK_)){
var fexpr__29073_29076 = (function (){var format_in__27753__auto__ = " ~_";
var cf__27754__auto__ = ((typeof format_in__27753__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27753__auto__) : cljs.pprint.cached_compile.call(null,format_in__27753__auto__)):format_in__27753__auto__);
return ((function (format_in__27753__auto__,cf__27754__auto__){
return (function() { 
var G__29077__delegate = function (args__27755__auto__){
var navigator__27756__auto__ = cljs.pprint.init_navigator(args__27755__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27754__auto__,navigator__27756__auto__);
};
var G__29077 = function (var_args){
var args__27755__auto__ = null;
if (arguments.length > 0) {
var G__29078__i = 0, G__29078__a = new Array(arguments.length -  0);
while (G__29078__i < G__29078__a.length) {G__29078__a[G__29078__i] = arguments[G__29078__i + 0]; ++G__29078__i;}
  args__27755__auto__ = new cljs.core.IndexedSeq(G__29078__a,0,null);
} 
return G__29077__delegate.call(this,args__27755__auto__);};
G__29077.cljs$lang$maxFixedArity = 0;
G__29077.cljs$lang$applyTo = (function (arglist__29079){
var args__27755__auto__ = cljs.core.seq(arglist__29079);
return G__29077__delegate(args__27755__auto__);
});
G__29077.cljs$core$IFn$_invoke$arity$variadic = G__29077__delegate;
return G__29077;
})()
;
;})(format_in__27753__auto__,cf__27754__auto__))
})();
(fexpr__29073_29076.cljs$core$IFn$_invoke$arity$0 ? fexpr__29073_29076.cljs$core$IFn$_invoke$arity$0() : fexpr__29073_29076.call(null));
} else {
var fexpr__29074_29080 = (function (){var format_in__27753__auto__ = " ~@_";
var cf__27754__auto__ = ((typeof format_in__27753__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27753__auto__) : cljs.pprint.cached_compile.call(null,format_in__27753__auto__)):format_in__27753__auto__);
return ((function (format_in__27753__auto__,cf__27754__auto__){
return (function() { 
var G__29081__delegate = function (args__27755__auto__){
var navigator__27756__auto__ = cljs.pprint.init_navigator(args__27755__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27754__auto__,navigator__27756__auto__);
};
var G__29081 = function (var_args){
var args__27755__auto__ = null;
if (arguments.length > 0) {
var G__29082__i = 0, G__29082__a = new Array(arguments.length -  0);
while (G__29082__i < G__29082__a.length) {G__29082__a[G__29082__i] = arguments[G__29082__i + 0]; ++G__29082__i;}
  args__27755__auto__ = new cljs.core.IndexedSeq(G__29082__a,0,null);
} 
return G__29081__delegate.call(this,args__27755__auto__);};
G__29081.cljs$lang$maxFixedArity = 0;
G__29081.cljs$lang$applyTo = (function (arglist__29083){
var args__27755__auto__ = cljs.core.seq(arglist__29083);
return G__29081__delegate(args__27755__auto__);
});
G__29081.cljs$core$IFn$_invoke$arity$variadic = G__29081__delegate;
return G__29081;
})()
;
;})(format_in__27753__auto__,cf__27754__auto__))
})();
(fexpr__29074_29080.cljs$core$IFn$_invoke$arity$0 ? fexpr__29074_29080.cljs$core$IFn$_invoke$arity$0() : fexpr__29074_29080.call(null));
}

var fexpr__29075 = (function (){var format_in__27753__auto__ = "~{~w~^ ~_~}";
var cf__27754__auto__ = ((typeof format_in__27753__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27753__auto__) : cljs.pprint.cached_compile.call(null,format_in__27753__auto__)):format_in__27753__auto__);
return ((function (format_in__27753__auto__,cf__27754__auto__){
return (function() { 
var G__29084__delegate = function (args__27755__auto__){
var navigator__27756__auto__ = cljs.pprint.init_navigator(args__27755__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27754__auto__,navigator__27756__auto__);
};
var G__29084 = function (var_args){
var args__27755__auto__ = null;
if (arguments.length > 0) {
var G__29085__i = 0, G__29085__a = new Array(arguments.length -  0);
while (G__29085__i < G__29085__a.length) {G__29085__a[G__29085__i] = arguments[G__29085__i + 0]; ++G__29085__i;}
  args__27755__auto__ = new cljs.core.IndexedSeq(G__29085__a,0,null);
} 
return G__29084__delegate.call(this,args__27755__auto__);};
G__29084.cljs$lang$maxFixedArity = 0;
G__29084.cljs$lang$applyTo = (function (arglist__29086){
var args__27755__auto__ = cljs.core.seq(arglist__29086);
return G__29084__delegate(args__27755__auto__);
});
G__29084.cljs$core$IFn$_invoke$arity$variadic = G__29084__delegate;
return G__29084;
})()
;
;})(format_in__27753__auto__,cf__27754__auto__))
})();
return (fexpr__29075.cljs$core$IFn$_invoke$arity$1 ? fexpr__29075.cljs$core$IFn$_invoke$arity$1(alis) : fexpr__29075.call(null,alis));
} else {
return null;
}
});
cljs.pprint.multi_defn = (function cljs$pprint$multi_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq(alis)){
var fexpr__29087 = (function (){var format_in__27753__auto__ = " ~_~{~w~^ ~_~}";
var cf__27754__auto__ = ((typeof format_in__27753__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27753__auto__) : cljs.pprint.cached_compile.call(null,format_in__27753__auto__)):format_in__27753__auto__);
return ((function (format_in__27753__auto__,cf__27754__auto__){
return (function() { 
var G__29088__delegate = function (args__27755__auto__){
var navigator__27756__auto__ = cljs.pprint.init_navigator(args__27755__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27754__auto__,navigator__27756__auto__);
};
var G__29088 = function (var_args){
var args__27755__auto__ = null;
if (arguments.length > 0) {
var G__29089__i = 0, G__29089__a = new Array(arguments.length -  0);
while (G__29089__i < G__29089__a.length) {G__29089__a[G__29089__i] = arguments[G__29089__i + 0]; ++G__29089__i;}
  args__27755__auto__ = new cljs.core.IndexedSeq(G__29089__a,0,null);
} 
return G__29088__delegate.call(this,args__27755__auto__);};
G__29088.cljs$lang$maxFixedArity = 0;
G__29088.cljs$lang$applyTo = (function (arglist__29090){
var args__27755__auto__ = cljs.core.seq(arglist__29090);
return G__29088__delegate(args__27755__auto__);
});
G__29088.cljs$core$IFn$_invoke$arity$variadic = G__29088__delegate;
return G__29088;
})()
;
;})(format_in__27753__auto__,cf__27754__auto__))
})();
return (fexpr__29087.cljs$core$IFn$_invoke$arity$1 ? fexpr__29087.cljs$core$IFn$_invoke$arity$1(alis) : fexpr__29087.call(null,alis));
} else {
return null;
}
});
cljs.pprint.pprint_defn = (function cljs$pprint$pprint_defn(alis){
if(cljs.core.next(alis)){
var vec__29091 = alis;
var seq__29092 = cljs.core.seq(vec__29091);
var first__29093 = cljs.core.first(seq__29092);
var seq__29092__$1 = cljs.core.next(seq__29092);
var defn_sym = first__29093;
var first__29093__$1 = cljs.core.first(seq__29092__$1);
var seq__29092__$2 = cljs.core.next(seq__29092__$1);
var defn_name = first__29093__$1;
var stuff = seq__29092__$2;
var vec__29094 = ((typeof cljs.core.first(stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff),cljs.core.next(stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29094,(0),null);
var stuff__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29094,(1),null);
var vec__29097 = ((cljs.core.map_QMARK_(cljs.core.first(stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff__$1),cljs.core.next(stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29097,(0),null);
var stuff__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29097,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_29100_29105 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_29101_29106 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var fexpr__29102_29107 = (function (){var format_in__27753__auto__ = "~w ~1I~@_~w";
var cf__27754__auto__ = ((typeof format_in__27753__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27753__auto__) : cljs.pprint.cached_compile.call(null,format_in__27753__auto__)):format_in__27753__auto__);
return ((function (format_in__27753__auto__,cf__27754__auto__,_STAR_current_level_STAR_29100_29105,_STAR_current_length_STAR_29101_29106,vec__29091,seq__29092,first__29093,seq__29092__$1,defn_sym,first__29093__$1,seq__29092__$2,defn_name,stuff,vec__29094,doc_str,stuff__$1,vec__29097,attr_map,stuff__$2){
return (function() { 
var G__29108__delegate = function (args__27755__auto__){
var navigator__27756__auto__ = cljs.pprint.init_navigator(args__27755__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27754__auto__,navigator__27756__auto__);
};
var G__29108 = function (var_args){
var args__27755__auto__ = null;
if (arguments.length > 0) {
var G__29109__i = 0, G__29109__a = new Array(arguments.length -  0);
while (G__29109__i < G__29109__a.length) {G__29109__a[G__29109__i] = arguments[G__29109__i + 0]; ++G__29109__i;}
  args__27755__auto__ = new cljs.core.IndexedSeq(G__29109__a,0,null);
} 
return G__29108__delegate.call(this,args__27755__auto__);};
G__29108.cljs$lang$maxFixedArity = 0;
G__29108.cljs$lang$applyTo = (function (arglist__29110){
var args__27755__auto__ = cljs.core.seq(arglist__29110);
return G__29108__delegate(args__27755__auto__);
});
G__29108.cljs$core$IFn$_invoke$arity$variadic = G__29108__delegate;
return G__29108;
})()
;
;})(format_in__27753__auto__,cf__27754__auto__,_STAR_current_level_STAR_29100_29105,_STAR_current_length_STAR_29101_29106,vec__29091,seq__29092,first__29093,seq__29092__$1,defn_sym,first__29093__$1,seq__29092__$2,defn_name,stuff,vec__29094,doc_str,stuff__$1,vec__29097,attr_map,stuff__$2))
})();
(fexpr__29102_29107.cljs$core$IFn$_invoke$arity$2 ? fexpr__29102_29107.cljs$core$IFn$_invoke$arity$2(defn_sym,defn_name) : fexpr__29102_29107.call(null,defn_sym,defn_name));

if(cljs.core.truth_(doc_str)){
var fexpr__29103_29111 = (function (){var format_in__27753__auto__ = " ~_~w";
var cf__27754__auto__ = ((typeof format_in__27753__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27753__auto__) : cljs.pprint.cached_compile.call(null,format_in__27753__auto__)):format_in__27753__auto__);
return ((function (format_in__27753__auto__,cf__27754__auto__,_STAR_current_level_STAR_29100_29105,_STAR_current_length_STAR_29101_29106,vec__29091,seq__29092,first__29093,seq__29092__$1,defn_sym,first__29093__$1,seq__29092__$2,defn_name,stuff,vec__29094,doc_str,stuff__$1,vec__29097,attr_map,stuff__$2){
return (function() { 
var G__29112__delegate = function (args__27755__auto__){
var navigator__27756__auto__ = cljs.pprint.init_navigator(args__27755__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27754__auto__,navigator__27756__auto__);
};
var G__29112 = function (var_args){
var args__27755__auto__ = null;
if (arguments.length > 0) {
var G__29113__i = 0, G__29113__a = new Array(arguments.length -  0);
while (G__29113__i < G__29113__a.length) {G__29113__a[G__29113__i] = arguments[G__29113__i + 0]; ++G__29113__i;}
  args__27755__auto__ = new cljs.core.IndexedSeq(G__29113__a,0,null);
} 
return G__29112__delegate.call(this,args__27755__auto__);};
G__29112.cljs$lang$maxFixedArity = 0;
G__29112.cljs$lang$applyTo = (function (arglist__29114){
var args__27755__auto__ = cljs.core.seq(arglist__29114);
return G__29112__delegate(args__27755__auto__);
});
G__29112.cljs$core$IFn$_invoke$arity$variadic = G__29112__delegate;
return G__29112;
})()
;
;})(format_in__27753__auto__,cf__27754__auto__,_STAR_current_level_STAR_29100_29105,_STAR_current_length_STAR_29101_29106,vec__29091,seq__29092,first__29093,seq__29092__$1,defn_sym,first__29093__$1,seq__29092__$2,defn_name,stuff,vec__29094,doc_str,stuff__$1,vec__29097,attr_map,stuff__$2))
})();
(fexpr__29103_29111.cljs$core$IFn$_invoke$arity$1 ? fexpr__29103_29111.cljs$core$IFn$_invoke$arity$1(doc_str) : fexpr__29103_29111.call(null,doc_str));
} else {
}

if(cljs.core.truth_(attr_map)){
var fexpr__29104_29115 = (function (){var format_in__27753__auto__ = " ~_~w";
var cf__27754__auto__ = ((typeof format_in__27753__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27753__auto__) : cljs.pprint.cached_compile.call(null,format_in__27753__auto__)):format_in__27753__auto__);
return ((function (format_in__27753__auto__,cf__27754__auto__,_STAR_current_level_STAR_29100_29105,_STAR_current_length_STAR_29101_29106,vec__29091,seq__29092,first__29093,seq__29092__$1,defn_sym,first__29093__$1,seq__29092__$2,defn_name,stuff,vec__29094,doc_str,stuff__$1,vec__29097,attr_map,stuff__$2){
return (function() { 
var G__29116__delegate = function (args__27755__auto__){
var navigator__27756__auto__ = cljs.pprint.init_navigator(args__27755__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27754__auto__,navigator__27756__auto__);
};
var G__29116 = function (var_args){
var args__27755__auto__ = null;
if (arguments.length > 0) {
var G__29117__i = 0, G__29117__a = new Array(arguments.length -  0);
while (G__29117__i < G__29117__a.length) {G__29117__a[G__29117__i] = arguments[G__29117__i + 0]; ++G__29117__i;}
  args__27755__auto__ = new cljs.core.IndexedSeq(G__29117__a,0,null);
} 
return G__29116__delegate.call(this,args__27755__auto__);};
G__29116.cljs$lang$maxFixedArity = 0;
G__29116.cljs$lang$applyTo = (function (arglist__29118){
var args__27755__auto__ = cljs.core.seq(arglist__29118);
return G__29116__delegate(args__27755__auto__);
});
G__29116.cljs$core$IFn$_invoke$arity$variadic = G__29116__delegate;
return G__29116;
})()
;
;})(format_in__27753__auto__,cf__27754__auto__,_STAR_current_level_STAR_29100_29105,_STAR_current_length_STAR_29101_29106,vec__29091,seq__29092,first__29093,seq__29092__$1,defn_sym,first__29093__$1,seq__29092__$2,defn_name,stuff,vec__29094,doc_str,stuff__$1,vec__29097,attr_map,stuff__$2))
})();
(fexpr__29104_29115.cljs$core$IFn$_invoke$arity$1 ? fexpr__29104_29115.cljs$core$IFn$_invoke$arity$1(attr_map) : fexpr__29104_29115.call(null,attr_map));
} else {
}

if(cljs.core.vector_QMARK_(cljs.core.first(stuff__$2))){
cljs.pprint.single_defn(stuff__$2,(function (){var or__3922__auto__ = doc_str;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return attr_map;
}
})());
} else {
cljs.pprint.multi_defn(stuff__$2,(function (){var or__3922__auto__ = doc_str;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return attr_map;
}
})());

}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_29101_29106;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_29100_29105;
}}

return null;
} else {
return (cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}
});
cljs.pprint.pprint_binding_form = (function cljs$pprint$pprint_binding_form(binding_vec){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_29119_29124 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_29120_29125 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count29121_29126 = (0);
var binding_29127 = binding_vec;
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count29121_29126 < cljs.core._STAR_print_length_STAR_)))){
if(cljs.core.seq(binding_29127)){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_29122_29128 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_29123_29129 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(binding_29127));

if(cljs.core.next(binding_29127)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"miser","miser",-556060186));

cljs.pprint.write_out(cljs.core.second(binding_29127));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_29123_29129;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_29122_29128;
}}


if(cljs.core.next(cljs.core.rest(binding_29127))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var G__29130 = (length_count29121_29126 + (1));
var G__29131 = cljs.core.next(cljs.core.rest(binding_29127));
length_count29121_29126 = G__29130;
binding_29127 = G__29131;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_29120_29125;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_29119_29124;
}}

return null;
});
cljs.pprint.pprint_let = (function cljs$pprint$pprint_let(alis){
var base_sym = cljs.core.first(alis);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_29132_29137 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_29133_29138 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

if(((cljs.core.next(alis)) && (cljs.core.vector_QMARK_(cljs.core.second(alis))))){
var fexpr__29134_29139 = (function (){var format_in__27753__auto__ = "~w ~1I~@_";
var cf__27754__auto__ = ((typeof format_in__27753__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27753__auto__) : cljs.pprint.cached_compile.call(null,format_in__27753__auto__)):format_in__27753__auto__);
return ((function (format_in__27753__auto__,cf__27754__auto__,_STAR_current_level_STAR_29132_29137,_STAR_current_length_STAR_29133_29138,base_sym){
return (function() { 
var G__29140__delegate = function (args__27755__auto__){
var navigator__27756__auto__ = cljs.pprint.init_navigator(args__27755__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27754__auto__,navigator__27756__auto__);
};
var G__29140 = function (var_args){
var args__27755__auto__ = null;
if (arguments.length > 0) {
var G__29141__i = 0, G__29141__a = new Array(arguments.length -  0);
while (G__29141__i < G__29141__a.length) {G__29141__a[G__29141__i] = arguments[G__29141__i + 0]; ++G__29141__i;}
  args__27755__auto__ = new cljs.core.IndexedSeq(G__29141__a,0,null);
} 
return G__29140__delegate.call(this,args__27755__auto__);};
G__29140.cljs$lang$maxFixedArity = 0;
G__29140.cljs$lang$applyTo = (function (arglist__29142){
var args__27755__auto__ = cljs.core.seq(arglist__29142);
return G__29140__delegate(args__27755__auto__);
});
G__29140.cljs$core$IFn$_invoke$arity$variadic = G__29140__delegate;
return G__29140;
})()
;
;})(format_in__27753__auto__,cf__27754__auto__,_STAR_current_level_STAR_29132_29137,_STAR_current_length_STAR_29133_29138,base_sym))
})();
(fexpr__29134_29139.cljs$core$IFn$_invoke$arity$1 ? fexpr__29134_29139.cljs$core$IFn$_invoke$arity$1(base_sym) : fexpr__29134_29139.call(null,base_sym));

cljs.pprint.pprint_binding_form(cljs.core.second(alis));

var G__29136_29143 = cljs.core.next(cljs.core.rest(alis));
var fexpr__29135_29144 = (function (){var format_in__27753__auto__ = " ~_~{~w~^ ~_~}";
var cf__27754__auto__ = ((typeof format_in__27753__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27753__auto__) : cljs.pprint.cached_compile.call(null,format_in__27753__auto__)):format_in__27753__auto__);
return ((function (format_in__27753__auto__,cf__27754__auto__,G__29136_29143,_STAR_current_level_STAR_29132_29137,_STAR_current_length_STAR_29133_29138,base_sym){
return (function() { 
var G__29145__delegate = function (args__27755__auto__){
var navigator__27756__auto__ = cljs.pprint.init_navigator(args__27755__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27754__auto__,navigator__27756__auto__);
};
var G__29145 = function (var_args){
var args__27755__auto__ = null;
if (arguments.length > 0) {
var G__29146__i = 0, G__29146__a = new Array(arguments.length -  0);
while (G__29146__i < G__29146__a.length) {G__29146__a[G__29146__i] = arguments[G__29146__i + 0]; ++G__29146__i;}
  args__27755__auto__ = new cljs.core.IndexedSeq(G__29146__a,0,null);
} 
return G__29145__delegate.call(this,args__27755__auto__);};
G__29145.cljs$lang$maxFixedArity = 0;
G__29145.cljs$lang$applyTo = (function (arglist__29147){
var args__27755__auto__ = cljs.core.seq(arglist__29147);
return G__29145__delegate(args__27755__auto__);
});
G__29145.cljs$core$IFn$_invoke$arity$variadic = G__29145__delegate;
return G__29145;
})()
;
;})(format_in__27753__auto__,cf__27754__auto__,G__29136_29143,_STAR_current_level_STAR_29132_29137,_STAR_current_length_STAR_29133_29138,base_sym))
})();
(fexpr__29135_29144.cljs$core$IFn$_invoke$arity$1 ? fexpr__29135_29144.cljs$core$IFn$_invoke$arity$1(G__29136_29143) : fexpr__29135_29144.call(null,G__29136_29143));
} else {
(cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_29133_29138;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_29132_29137;
}}

return null;
});
cljs.pprint.pprint_if = (function (){var format_in__27753__auto__ = "~:<~1I~w~^ ~@_~w~@{ ~_~w~}~:>";
var cf__27754__auto__ = ((typeof format_in__27753__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27753__auto__) : cljs.pprint.cached_compile.call(null,format_in__27753__auto__)):format_in__27753__auto__);
return ((function (format_in__27753__auto__,cf__27754__auto__){
return (function() { 
var G__29148__delegate = function (args__27755__auto__){
var navigator__27756__auto__ = cljs.pprint.init_navigator(args__27755__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27754__auto__,navigator__27756__auto__);
};
var G__29148 = function (var_args){
var args__27755__auto__ = null;
if (arguments.length > 0) {
var G__29149__i = 0, G__29149__a = new Array(arguments.length -  0);
while (G__29149__i < G__29149__a.length) {G__29149__a[G__29149__i] = arguments[G__29149__i + 0]; ++G__29149__i;}
  args__27755__auto__ = new cljs.core.IndexedSeq(G__29149__a,0,null);
} 
return G__29148__delegate.call(this,args__27755__auto__);};
G__29148.cljs$lang$maxFixedArity = 0;
G__29148.cljs$lang$applyTo = (function (arglist__29150){
var args__27755__auto__ = cljs.core.seq(arglist__29150);
return G__29148__delegate(args__27755__auto__);
});
G__29148.cljs$core$IFn$_invoke$arity$variadic = G__29148__delegate;
return G__29148;
})()
;
;})(format_in__27753__auto__,cf__27754__auto__))
})();
cljs.pprint.pprint_cond = (function cljs$pprint$pprint_cond(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_29151_29156 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_29152_29157 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(new cljs.core.Keyword(null,"block","block",664686210),(1));

cljs.pprint.write_out(cljs.core.first(alis));

if(cljs.core.next(alis)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var length_count29153_29158 = (0);
var alis_29159__$1 = cljs.core.next(alis);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count29153_29158 < cljs.core._STAR_print_length_STAR_)))){
if(alis_29159__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_29154_29160 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_29155_29161 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(alis_29159__$1));

if(cljs.core.next(alis_29159__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"miser","miser",-556060186));

cljs.pprint.write_out(cljs.core.second(alis_29159__$1));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_29155_29161;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_29154_29160;
}}


if(cljs.core.next(cljs.core.rest(alis_29159__$1))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var G__29162 = (length_count29153_29158 + (1));
var G__29163 = cljs.core.next(cljs.core.rest(alis_29159__$1));
length_count29153_29158 = G__29162;
alis_29159__$1 = G__29163;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_29152_29157;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_29151_29156;
}}

return null;
});
cljs.pprint.pprint_condp = (function cljs$pprint$pprint_condp(alis){
if((cljs.core.count(alis) > (3))){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_29164_29169 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_29165_29170 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(new cljs.core.Keyword(null,"block","block",664686210),(1));

cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var format_in__27753__auto__ = "~w ~@_~w ~@_~w ~_";
var cf__27754__auto__ = ((typeof format_in__27753__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27753__auto__) : cljs.pprint.cached_compile.call(null,format_in__27753__auto__)):format_in__27753__auto__);
return ((function (format_in__27753__auto__,cf__27754__auto__,_STAR_current_level_STAR_29164_29169,_STAR_current_length_STAR_29165_29170){
return (function() { 
var G__29171__delegate = function (args__27755__auto__){
var navigator__27756__auto__ = cljs.pprint.init_navigator(args__27755__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27754__auto__,navigator__27756__auto__);
};
var G__29171 = function (var_args){
var args__27755__auto__ = null;
if (arguments.length > 0) {
var G__29172__i = 0, G__29172__a = new Array(arguments.length -  0);
while (G__29172__i < G__29172__a.length) {G__29172__a[G__29172__i] = arguments[G__29172__i + 0]; ++G__29172__i;}
  args__27755__auto__ = new cljs.core.IndexedSeq(G__29172__a,0,null);
} 
return G__29171__delegate.call(this,args__27755__auto__);};
G__29171.cljs$lang$maxFixedArity = 0;
G__29171.cljs$lang$applyTo = (function (arglist__29173){
var args__27755__auto__ = cljs.core.seq(arglist__29173);
return G__29171__delegate(args__27755__auto__);
});
G__29171.cljs$core$IFn$_invoke$arity$variadic = G__29171__delegate;
return G__29171;
})()
;
;})(format_in__27753__auto__,cf__27754__auto__,_STAR_current_level_STAR_29164_29169,_STAR_current_length_STAR_29165_29170))
})(),alis);

var length_count29166_29174 = (0);
var alis_29175__$1 = cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),alis));
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count29166_29174 < cljs.core._STAR_print_length_STAR_)))){
if(alis_29175__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_29167_29176 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_29168_29177 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(alis_29175__$1));

if(cljs.core.next(alis_29175__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"miser","miser",-556060186));

cljs.pprint.write_out(cljs.core.second(alis_29175__$1));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_29168_29177;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_29167_29176;
}}


if(cljs.core.next(cljs.core.rest(alis_29175__$1))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var G__29178 = (length_count29166_29174 + (1));
var G__29179 = cljs.core.next(cljs.core.rest(alis_29175__$1));
length_count29166_29174 = G__29178;
alis_29175__$1 = G__29179;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_29165_29170;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_29164_29169;
}}

return null;
} else {
return (cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}
});
cljs.pprint._STAR_symbol_map_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.pprint.pprint_anon_func = (function cljs$pprint$pprint_anon_func(alis){
var args = cljs.core.second(alis);
var nlis = cljs.core.first(cljs.core.rest(cljs.core.rest(alis)));
if(cljs.core.vector_QMARK_(args)){
var _STAR_symbol_map_STAR_29182 = cljs.pprint._STAR_symbol_map_STAR_;
cljs.pprint._STAR_symbol_map_STAR_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(args)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(args),"%"]):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (_STAR_symbol_map_STAR_29182,args,nlis){
return (function (p1__29180_SHARP_,p2__29181_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__29180_SHARP_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("%"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__29181_SHARP_)].join('')],null));
});})(_STAR_symbol_map_STAR_29182,args,nlis))
,args,cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(cljs.core.count(args) + (1))))));

try{var fexpr__29183 = (function (){var format_in__27753__auto__ = "~<#(~;~@{~w~^ ~_~}~;)~:>";
var cf__27754__auto__ = ((typeof format_in__27753__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__27753__auto__) : cljs.pprint.cached_compile.call(null,format_in__27753__auto__)):format_in__27753__auto__);
return ((function (format_in__27753__auto__,cf__27754__auto__,_STAR_symbol_map_STAR_29182,args,nlis){
return (function() { 
var G__29184__delegate = function (args__27755__auto__){
var navigator__27756__auto__ = cljs.pprint.init_navigator(args__27755__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27754__auto__,navigator__27756__auto__);
};
var G__29184 = function (var_args){
var args__27755__auto__ = null;
if (arguments.length > 0) {
var G__29185__i = 0, G__29185__a = new Array(arguments.length -  0);
while (G__29185__i < G__29185__a.length) {G__29185__a[G__29185__i] = arguments[G__29185__i + 0]; ++G__29185__i;}
  args__27755__auto__ = new cljs.core.IndexedSeq(G__29185__a,0,null);
} 
return G__29184__delegate.call(this,args__27755__auto__);};
G__29184.cljs$lang$maxFixedArity = 0;
G__29184.cljs$lang$applyTo = (function (arglist__29186){
var args__27755__auto__ = cljs.core.seq(arglist__29186);
return G__29184__delegate(args__27755__auto__);
});
G__29184.cljs$core$IFn$_invoke$arity$variadic = G__29184__delegate;
return G__29184;
})()
;
;})(format_in__27753__auto__,cf__27754__auto__,_STAR_symbol_map_STAR_29182,args,nlis))
})();
return (fexpr__29183.cljs$core$IFn$_invoke$arity$1 ? fexpr__29183.cljs$core$IFn$_invoke$arity$1(nlis) : fexpr__29183.call(null,nlis));
}finally {cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR_29182;
}} else {
return (cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}
});
cljs.pprint.pprint_simple_code_list = (function cljs$pprint$pprint_simple_code_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_29187_29190 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_29188_29191 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(new cljs.core.Keyword(null,"block","block",664686210),(1));

var length_count29189_29192 = (0);
var alis_29193__$1 = cljs.core.seq(alis);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count29189_29192 < cljs.core._STAR_print_length_STAR_)))){
if(alis_29193__$1){
cljs.pprint.write_out(cljs.core.first(alis_29193__$1));

if(cljs.core.next(alis_29193__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var G__29194 = (length_count29189_29192 + (1));
var G__29195 = cljs.core.next(alis_29193__$1);
length_count29189_29192 = G__29194;
alis_29193__$1 = G__29195;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_29188_29191;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_29187_29190;
}}

return null;
});
cljs.pprint.two_forms = (function cljs$pprint$two_forms(amap){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__4292__auto__ = (function cljs$pprint$two_forms_$_iter__29196(s__29197){
return (new cljs.core.LazySeq(null,(function (){
var s__29197__$1 = s__29197;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__29197__$1);
if(temp__5457__auto__){
var s__29197__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29197__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__29197__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__29199 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__29198 = (0);
while(true){
if((i__29198 < size__4291__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__29198);
cljs.core.chunk_append(b__29199,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(x))),cljs.core.second(x)], null)], null));

var G__29200 = (i__29198 + (1));
i__29198 = G__29200;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29199),cljs$pprint$two_forms_$_iter__29196(cljs.core.chunk_rest(s__29197__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29199),null);
}
} else {
var x = cljs.core.first(s__29197__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(x))),cljs.core.second(x)], null)], null),cljs$pprint$two_forms_$_iter__29196(cljs.core.rest(s__29197__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__(amap);
})()], 0)));
});
cljs.pprint.add_core_ns = (function cljs$pprint$add_core_ns(amap){
var core = "clojure.core";
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (core){
return (function (p1__29201_SHARP_){
var vec__29202 = p1__29201_SHARP_;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29202,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29202,(1),null);
if(cljs.core.not((function (){var or__3922__auto__ = cljs.core.namespace(s);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.special_symbol_QMARK_(s);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(core,cljs.core.name(s)),f], null);
} else {
return p1__29201_SHARP_;
}
});})(core))
,amap));
});
cljs.pprint._STAR_code_table_STAR_ = cljs.pprint.two_forms(cljs.pprint.add_core_ns(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.Symbol(null,"when-first","when-first",821699168,null),new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"condp","condp",1054325175,null),new cljs.core.Symbol(null,"..","..",-300507420,null),new cljs.core.Symbol(null,"defmacro","defmacro",2054157304,null),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"loop","loop",1244978678,null),new cljs.core.Symbol(null,"struct","struct",325972931,null),new cljs.core.Symbol(null,"doseq","doseq",221164135,null),new cljs.core.Symbol(null,"if-not","if-not",-265415609,null),new cljs.core.Symbol(null,"when-not","when-not",-1223136340,null),new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"when","when",1064114221,null),new cljs.core.Symbol(null,"with-open","with-open",172119667,null),new cljs.core.Symbol(null,"with-local-vars","with-local-vars",837642072,null),new cljs.core.Symbol(null,"defonce","defonce",-1681484013,null),new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.Symbol(null,"ns","ns",2082130287,null),new cljs.core.Symbol(null,"dotimes","dotimes",-818708397,null),new cljs.core.Symbol(null,"cond","cond",1606708055,null),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"defn-","defn-",1097765044,null),new cljs.core.Symbol(null,"locking","locking",1542862874,null),new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Symbol(null,"struct-map","struct-map",-1387540878,null)],[cljs.pprint.pprint_hold_first,cljs.pprint.pprint_anon_func,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_condp,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_if,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_if,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_ns,cljs.pprint.pprint_let,cljs.pprint.pprint_cond,cljs.pprint.pprint_let,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first])));
cljs.pprint.pprint_code_list = (function cljs$pprint$pprint_code_list(alis){
if(cljs.core.not(cljs.pprint.pprint_reader_macro(alis))){
var temp__5455__auto__ = (function (){var G__29205 = cljs.core.first(alis);
return (cljs.pprint._STAR_code_table_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint._STAR_code_table_STAR_.cljs$core$IFn$_invoke$arity$1(G__29205) : cljs.pprint._STAR_code_table_STAR_.call(null,G__29205));
})();
if(cljs.core.truth_(temp__5455__auto__)){
var special_form = temp__5455__auto__;
return (special_form.cljs$core$IFn$_invoke$arity$1 ? special_form.cljs$core$IFn$_invoke$arity$1(alis) : special_form.call(null,alis));
} else {
return cljs.pprint.pprint_simple_code_list(alis);
}
} else {
return null;
}
});
cljs.pprint.pprint_code_symbol = (function cljs$pprint$pprint_code_symbol(sym){
var temp__5455__auto__ = (sym.cljs$core$IFn$_invoke$arity$1 ? sym.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_symbol_map_STAR_) : sym.call(null,cljs.pprint._STAR_symbol_map_STAR_));
if(cljs.core.truth_(temp__5455__auto__)){
var arg_num = temp__5455__auto__;
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg_num], 0));
} else {
if(cljs.core.truth_(cljs.pprint._STAR_print_suppress_namespaces_STAR_)){
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.name(sym)], 0));
} else {
return (cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(sym) : cljs.pprint.pr.call(null,sym));
}
}
});
if(typeof cljs.pprint.code_dispatch !== 'undefined'){
} else {
/**
 * The pretty print dispatch function for pretty printing Clojure code.
 */
cljs.pprint.code_dispatch = (function (){var method_table__4382__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","code-dispatch"),cljs.pprint.type_dispatcher,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"list","list",765357683),cljs.pprint.pprint_code_list);
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),cljs.pprint.pprint_code_symbol);
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"vector","vector",1902966158),cljs.pprint.pprint_vector);
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"map","map",1371690461),cljs.pprint.pprint_map);
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"set","set",304602554),cljs.pprint.pprint_set);
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.pprint.pprint_pqueue);
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"deref","deref",-145586795),cljs.pprint.pprint_ideref);
cljs.pprint.use_method(cljs.pprint.code_dispatch,null,cljs.pprint.pr);
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch(cljs.pprint.simple_dispatch);
cljs.pprint.add_padding = (function cljs$pprint$add_padding(width,s){
var padding = (function (){var x__4006__auto__ = (0);
var y__4007__auto__ = (width - cljs.core.count(s));
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(padding," ")),s);
});
/**
 * Prints a collection of maps in a textual table. Prints table headings
 * ks, and then a line of output for each row, corresponding to the keys
 * in ks. If ks are not specified, use the keys of the first item in rows.
 */
cljs.pprint.print_table = (function cljs$pprint$print_table(var_args){
var G__29210 = arguments.length;
switch (G__29210) {
case 2:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2 = (function (ks,rows){
var _STAR_print_newline_STAR_29211 = cljs.core._STAR_print_newline_STAR_;
try{if(cljs.core.seq(rows)){
var widths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR_29211){
return (function (k){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max,cljs.core.count([cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR_29211){
return (function (p1__29206_SHARP_){
return cljs.core.count([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__29206_SHARP_,k))].join(''));
});})(_STAR_print_newline_STAR_29211))
,rows));
});})(_STAR_print_newline_STAR_29211))
,ks);
var spacers = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (widths,_STAR_print_newline_STAR_29211){
return (function (p1__29207_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(p1__29207_SHARP_,"-"));
});})(widths,_STAR_print_newline_STAR_29211))
,widths);
var fmt_row = ((function (widths,spacers,_STAR_print_newline_STAR_29211){
return (function (leader,divider,trailer,row){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(leader),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(divider,(function (){var iter__4292__auto__ = ((function (widths,spacers,_STAR_print_newline_STAR_29211){
return (function cljs$pprint$iter__29212(s__29213){
return (new cljs.core.LazySeq(null,((function (widths,spacers,_STAR_print_newline_STAR_29211){
return (function (){
var s__29213__$1 = s__29213;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__29213__$1);
if(temp__5457__auto__){
var s__29213__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29213__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__29213__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__29215 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__29214 = (0);
while(true){
if((i__29214 < size__4291__auto__)){
var vec__29216 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__29214);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29216,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29216,(1),null);
cljs.core.chunk_append(b__29215,cljs.pprint.add_padding(width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')));

var G__29227 = (i__29214 + (1));
i__29214 = G__29227;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29215),cljs$pprint$iter__29212(cljs.core.chunk_rest(s__29213__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29215),null);
}
} else {
var vec__29219 = cljs.core.first(s__29213__$2);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29219,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29219,(1),null);
return cljs.core.cons(cljs.pprint.add_padding(width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')),cljs$pprint$iter__29212(cljs.core.rest(s__29213__$2)));
}
} else {
return null;
}
break;
}
});})(widths,spacers,_STAR_print_newline_STAR_29211))
,null,null));
});})(widths,spacers,_STAR_print_newline_STAR_29211))
;
return iter__4292__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (iter__4292__auto__,widths,spacers,_STAR_print_newline_STAR_29211){
return (function (p1__29208_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,p1__29208_SHARP_);
});})(iter__4292__auto__,widths,spacers,_STAR_print_newline_STAR_29211))
,ks),widths));
})()))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(trailer)].join('');
});})(widths,spacers,_STAR_print_newline_STAR_29211))
;
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",cljs.core.zipmap(ks,ks))], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("|-","-+-","-|",cljs.core.zipmap(ks,spacers))], 0));

var seq__29222 = cljs.core.seq(rows);
var chunk__29223 = null;
var count__29224 = (0);
var i__29225 = (0);
while(true){
if((i__29225 < count__29224)){
var row = chunk__29223.cljs$core$IIndexed$_nth$arity$2(null,i__29225);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",row)], 0));


var G__29228 = seq__29222;
var G__29229 = chunk__29223;
var G__29230 = count__29224;
var G__29231 = (i__29225 + (1));
seq__29222 = G__29228;
chunk__29223 = G__29229;
count__29224 = G__29230;
i__29225 = G__29231;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__29222);
if(temp__5457__auto__){
var seq__29222__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29222__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__29222__$1);
var G__29232 = cljs.core.chunk_rest(seq__29222__$1);
var G__29233 = c__4319__auto__;
var G__29234 = cljs.core.count(c__4319__auto__);
var G__29235 = (0);
seq__29222 = G__29232;
chunk__29223 = G__29233;
count__29224 = G__29234;
i__29225 = G__29235;
continue;
} else {
var row = cljs.core.first(seq__29222__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",row)], 0));


var G__29236 = cljs.core.next(seq__29222__$1);
var G__29237 = null;
var G__29238 = (0);
var G__29239 = (0);
seq__29222 = G__29236;
chunk__29223 = G__29237;
count__29224 = G__29238;
i__29225 = G__29239;
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
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_29211;
}});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1 = (function (rows){
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(cljs.core.first(rows)),rows);
});

cljs.pprint.print_table.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=cljs.pprint.js.map
