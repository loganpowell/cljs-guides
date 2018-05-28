goog.provide('shadow.cljs.devtools.client.console');
goog.require('cljs.core');
goog.require('clojure.string');
shadow.cljs.devtools.client.console.push_all = (function shadow$cljs$devtools$client$console$push_all(arr,item){
if(cljs.core.vector_QMARK_(item)){
var seq__35009 = cljs.core.seq(item);
var chunk__35010 = null;
var count__35011 = (0);
var i__35012 = (0);
while(true){
if((i__35012 < count__35011)){
var it = chunk__35010.cljs$core$IIndexed$_nth$arity$2(null,i__35012);
arr.push(it);


var G__35013 = seq__35009;
var G__35014 = chunk__35010;
var G__35015 = count__35011;
var G__35016 = (i__35012 + (1));
seq__35009 = G__35013;
chunk__35010 = G__35014;
count__35011 = G__35015;
i__35012 = G__35016;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__35009);
if(temp__5457__auto__){
var seq__35009__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35009__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__35009__$1);
var G__35017 = cljs.core.chunk_rest(seq__35009__$1);
var G__35018 = c__4319__auto__;
var G__35019 = cljs.core.count(c__4319__auto__);
var G__35020 = (0);
seq__35009 = G__35017;
chunk__35010 = G__35018;
count__35011 = G__35019;
i__35012 = G__35020;
continue;
} else {
var it = cljs.core.first(seq__35009__$1);
arr.push(it);


var G__35021 = cljs.core.next(seq__35009__$1);
var G__35022 = null;
var G__35023 = (0);
var G__35024 = (0);
seq__35009 = G__35021;
chunk__35010 = G__35022;
count__35011 = G__35023;
i__35012 = G__35024;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return arr.push(item);
}
});
shadow.cljs.devtools.client.console.object_ref = (function shadow$cljs$devtools$client$console$object_ref(obj){
if(cljs.core.truth_(obj)){
return ["object",({"object": obj})];
} else {
return null;
}
});
shadow.cljs.devtools.client.console.map__GT_style = (function shadow$cljs$devtools$client$console$map__GT_style(m){
return ({"style": clojure.string.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35025){
var vec__35026 = p__35025;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35026,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35026,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),";"].join('');
}),m))});
});
shadow.cljs.devtools.client.console.clj__GT_jsonml = (function shadow$cljs$devtools$client$console$clj__GT_jsonml(struct){
if((struct == null)){
return null;
} else {
if(cljs.core.array_QMARK_(struct)){
return struct;
} else {
if(cljs.core.vector_QMARK_(struct)){
var vec__35029 = struct;
var seq__35030 = cljs.core.seq(vec__35029);
var first__35031 = cljs.core.first(seq__35030);
var seq__35030__$1 = cljs.core.next(seq__35030);
var tag = first__35031;
var first__35031__$1 = cljs.core.first(seq__35030__$1);
var seq__35030__$2 = cljs.core.next(seq__35030__$1);
var attrs = first__35031__$1;
var children = seq__35030__$2;
var js = [cljs.core.name(tag),shadow.cljs.devtools.client.console.map__GT_style(attrs)];
var seq__35037_35042 = cljs.core.seq(children);
var chunk__35038_35043 = null;
var count__35039_35044 = (0);
var i__35040_35045 = (0);
while(true){
if((i__35040_35045 < count__35039_35044)){
var child_35046 = chunk__35038_35043.cljs$core$IIndexed$_nth$arity$2(null,i__35040_35045);
shadow.cljs.devtools.client.console.push_all(js,(shadow.cljs.devtools.client.console.clj__GT_jsonml.cljs$core$IFn$_invoke$arity$1 ? shadow.cljs.devtools.client.console.clj__GT_jsonml.cljs$core$IFn$_invoke$arity$1(child_35046) : shadow.cljs.devtools.client.console.clj__GT_jsonml.call(null,child_35046)));


var G__35047 = seq__35037_35042;
var G__35048 = chunk__35038_35043;
var G__35049 = count__35039_35044;
var G__35050 = (i__35040_35045 + (1));
seq__35037_35042 = G__35047;
chunk__35038_35043 = G__35048;
count__35039_35044 = G__35049;
i__35040_35045 = G__35050;
continue;
} else {
var temp__5457__auto___35051 = cljs.core.seq(seq__35037_35042);
if(temp__5457__auto___35051){
var seq__35037_35058__$1 = temp__5457__auto___35051;
if(cljs.core.chunked_seq_QMARK_(seq__35037_35058__$1)){
var c__4319__auto___35059 = cljs.core.chunk_first(seq__35037_35058__$1);
var G__35060 = cljs.core.chunk_rest(seq__35037_35058__$1);
var G__35061 = c__4319__auto___35059;
var G__35062 = cljs.core.count(c__4319__auto___35059);
var G__35063 = (0);
seq__35037_35042 = G__35060;
chunk__35038_35043 = G__35061;
count__35039_35044 = G__35062;
i__35040_35045 = G__35063;
continue;
} else {
var child_35064 = cljs.core.first(seq__35037_35058__$1);
shadow.cljs.devtools.client.console.push_all(js,(shadow.cljs.devtools.client.console.clj__GT_jsonml.cljs$core$IFn$_invoke$arity$1 ? shadow.cljs.devtools.client.console.clj__GT_jsonml.cljs$core$IFn$_invoke$arity$1(child_35064) : shadow.cljs.devtools.client.console.clj__GT_jsonml.call(null,child_35064)));


var G__35065 = cljs.core.next(seq__35037_35058__$1);
var G__35066 = null;
var G__35067 = (0);
var G__35068 = (0);
seq__35037_35042 = G__35065;
chunk__35038_35043 = G__35066;
count__35039_35044 = G__35067;
i__35040_35045 = G__35068;
continue;
}
} else {
}
}
break;
}

return js;
} else {
if(typeof struct === 'string'){
return struct;
} else {
if(typeof struct === 'number'){
return struct;
} else {
if(cljs.core.seq_QMARK_(struct)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.console.clj__GT_jsonml),struct);
} else {
return shadow.cljs.devtools.client.console.object_ref(struct);

}
}
}
}
}
}
});

/**
* @constructor
*/
shadow.cljs.devtools.client.console.SeqFormatter = (function (){
});
shadow.cljs.devtools.client.console.SeqFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
});

shadow.cljs.devtools.client.console.SeqFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if(((cljs.core.sequential_QMARK_(obj)) || (cljs.core.set_QMARK_(obj)))){
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.PersistentArrayMap.EMPTY,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(obj)], 0)))," [count: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(obj)),"]"].join('')], null));
} else {
return null;
}
});

shadow.cljs.devtools.client.console.SeqFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return cljs.core.boolean$(cljs.core.seq(obj));
});

shadow.cljs.devtools.client.console.SeqFormatter.prototype.body = (function (s){
var self__ = this;
var this$ = this;
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null),(function (){var iter__4292__auto__ = ((function (this$){
return (function shadow$cljs$devtools$client$console$iter__35069(s__35070){
return (new cljs.core.LazySeq(null,((function (this$){
return (function (){
var s__35070__$1 = s__35070;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__35070__$1);
if(temp__5457__auto__){
var s__35070__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35070__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__35070__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__35072 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__35071 = (0);
while(true){
if((i__35071 < size__4291__auto__)){
var value = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__35071);
cljs.core.chunk_append(b__35072,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(value)], null));

var G__35082 = (i__35071 + (1));
i__35071 = G__35082;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35072),shadow$cljs$devtools$client$console$iter__35069(cljs.core.chunk_rest(s__35070__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35072),null);
}
} else {
var value = cljs.core.first(s__35070__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(value)], null),shadow$cljs$devtools$client$console$iter__35069(cljs.core.rest(s__35070__$2)));
}
} else {
return null;
}
break;
}
});})(this$))
,null,null));
});})(this$))
;
return iter__4292__auto__(s);
})()], null));
});

shadow.cljs.devtools.client.console.SeqFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

shadow.cljs.devtools.client.console.SeqFormatter.cljs$lang$type = true;

shadow.cljs.devtools.client.console.SeqFormatter.cljs$lang$ctorStr = "shadow.cljs.devtools.client.console/SeqFormatter";

shadow.cljs.devtools.client.console.SeqFormatter.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"shadow.cljs.devtools.client.console/SeqFormatter");
});

/**
 * Positional factory function for shadow.cljs.devtools.client.console/SeqFormatter.
 */
shadow.cljs.devtools.client.console.__GT_SeqFormatter = (function shadow$cljs$devtools$client$console$__GT_SeqFormatter(){
return (new shadow.cljs.devtools.client.console.SeqFormatter());
});


/**
* @constructor
*/
shadow.cljs.devtools.client.console.MapFormatter = (function (){
});
shadow.cljs.devtools.client.console.MapFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
});

shadow.cljs.devtools.client.console.MapFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if((((obj instanceof cljs.core.PersistentHashMap)) || ((obj instanceof cljs.core.PersistentArrayMap)) || (cljs.core.record_QMARK_(obj)))){
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.PersistentArrayMap.EMPTY,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(obj)], 0)))," [count: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(obj)),"]"].join('')], null));
} else {
return null;
}
});

shadow.cljs.devtools.client.console.MapFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return cljs.core.boolean$(cljs.core.seq(obj));
});

shadow.cljs.devtools.client.console.MapFormatter.prototype.body = (function (m){
var self__ = this;
var this$ = this;
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"14px"], null),(function (){var iter__4292__auto__ = ((function (this$){
return (function shadow$cljs$devtools$client$console$iter__35089(s__35090){
return (new cljs.core.LazySeq(null,((function (this$){
return (function (){
var s__35090__$1 = s__35090;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__35090__$1);
if(temp__5457__auto__){
var s__35090__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35090__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__35090__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__35092 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__35091 = (0);
while(true){
if((i__35091 < size__4291__auto__)){
var key = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__35091);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key);
cljs.core.chunk_append(b__35092,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"top"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(key)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(value)], null)], null));

var G__35097 = (i__35091 + (1));
i__35091 = G__35097;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35092),shadow$cljs$devtools$client$console$iter__35089(cljs.core.chunk_rest(s__35090__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35092),null);
}
} else {
var key = cljs.core.first(s__35090__$2);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"top"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(key)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(value)], null)], null),shadow$cljs$devtools$client$console$iter__35089(cljs.core.rest(s__35090__$2)));
}
} else {
return null;
}
break;
}
});})(this$))
,null,null));
});})(this$))
;
return iter__4292__auto__((function (){var k = cljs.core.keys(m);
try{return cljs.core.sort.cljs$core$IFn$_invoke$arity$1(k);
}catch (e35093){var e = e35093;
return k;
}})());
})()], null));
});

shadow.cljs.devtools.client.console.MapFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

shadow.cljs.devtools.client.console.MapFormatter.cljs$lang$type = true;

shadow.cljs.devtools.client.console.MapFormatter.cljs$lang$ctorStr = "shadow.cljs.devtools.client.console/MapFormatter";

shadow.cljs.devtools.client.console.MapFormatter.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"shadow.cljs.devtools.client.console/MapFormatter");
});

/**
 * Positional factory function for shadow.cljs.devtools.client.console/MapFormatter.
 */
shadow.cljs.devtools.client.console.__GT_MapFormatter = (function shadow$cljs$devtools$client$console$__GT_MapFormatter(){
return (new shadow.cljs.devtools.client.console.MapFormatter());
});

shadow.cljs.devtools.client.console.keyword_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"rgb(136, 19, 145)"], null);

/**
* @constructor
*/
shadow.cljs.devtools.client.console.KeywordFormatter = (function (){
});
shadow.cljs.devtools.client.console.KeywordFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
});

shadow.cljs.devtools.client.console.KeywordFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if((obj instanceof cljs.core.Keyword)){
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),shadow.cljs.devtools.client.console.keyword_style,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0))], null));
} else {
return null;
}
});

shadow.cljs.devtools.client.console.KeywordFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return false;
});

shadow.cljs.devtools.client.console.KeywordFormatter.prototype.body = (function (m){
var self__ = this;
var this$ = this;
return null;
});

shadow.cljs.devtools.client.console.KeywordFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

shadow.cljs.devtools.client.console.KeywordFormatter.cljs$lang$type = true;

shadow.cljs.devtools.client.console.KeywordFormatter.cljs$lang$ctorStr = "shadow.cljs.devtools.client.console/KeywordFormatter";

shadow.cljs.devtools.client.console.KeywordFormatter.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"shadow.cljs.devtools.client.console/KeywordFormatter");
});

/**
 * Positional factory function for shadow.cljs.devtools.client.console/KeywordFormatter.
 */
shadow.cljs.devtools.client.console.__GT_KeywordFormatter = (function shadow$cljs$devtools$client$console$__GT_KeywordFormatter(){
return (new shadow.cljs.devtools.client.console.KeywordFormatter());
});


/**
* @constructor
*/
shadow.cljs.devtools.client.console.SymbolFormatter = (function (){
});
shadow.cljs.devtools.client.console.SymbolFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
});

shadow.cljs.devtools.client.console.SymbolFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if((obj instanceof cljs.core.Symbol)){
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),shadow.cljs.devtools.client.console.keyword_style,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0))], null));
} else {
return null;
}
});

shadow.cljs.devtools.client.console.SymbolFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return false;
});

shadow.cljs.devtools.client.console.SymbolFormatter.prototype.body = (function (m){
var self__ = this;
var this$ = this;
return null;
});

shadow.cljs.devtools.client.console.SymbolFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

shadow.cljs.devtools.client.console.SymbolFormatter.cljs$lang$type = true;

shadow.cljs.devtools.client.console.SymbolFormatter.cljs$lang$ctorStr = "shadow.cljs.devtools.client.console/SymbolFormatter";

shadow.cljs.devtools.client.console.SymbolFormatter.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"shadow.cljs.devtools.client.console/SymbolFormatter");
});

/**
 * Positional factory function for shadow.cljs.devtools.client.console/SymbolFormatter.
 */
shadow.cljs.devtools.client.console.__GT_SymbolFormatter = (function shadow$cljs$devtools$client$console$__GT_SymbolFormatter(){
return (new shadow.cljs.devtools.client.console.SymbolFormatter());
});


/**
* @constructor
*/
shadow.cljs.devtools.client.console.DerefFormatter = (function (){
});
shadow.cljs.devtools.client.console.DerefFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
});

shadow.cljs.devtools.client.console.DerefFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if((((obj instanceof cljs.core.Atom)) || ((obj instanceof cljs.core.Volatile)))){
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),shadow.cljs.devtools.client.console.keyword_style,["@DEREF ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(obj)], 0)))].join('')], null));
} else {
return null;
}
});

shadow.cljs.devtools.client.console.DerefFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return true;
});

shadow.cljs.devtools.client.console.DerefFormatter.prototype.body = (function (v){
var self__ = this;
var this$ = this;
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"14px"], null),shadow.cljs.devtools.client.console.object_ref(cljs.core.deref(v))], null));
});

shadow.cljs.devtools.client.console.DerefFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

shadow.cljs.devtools.client.console.DerefFormatter.cljs$lang$type = true;

shadow.cljs.devtools.client.console.DerefFormatter.cljs$lang$ctorStr = "shadow.cljs.devtools.client.console/DerefFormatter";

shadow.cljs.devtools.client.console.DerefFormatter.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"shadow.cljs.devtools.client.console/DerefFormatter");
});

/**
 * Positional factory function for shadow.cljs.devtools.client.console/DerefFormatter.
 */
shadow.cljs.devtools.client.console.__GT_DerefFormatter = (function shadow$cljs$devtools$client$console$__GT_DerefFormatter(){
return (new shadow.cljs.devtools.client.console.DerefFormatter());
});

shadow.cljs.devtools.client.console.install_all_BANG_ = (function shadow$cljs$devtools$client$console$install_all_BANG_(){
var temp__5457__auto__ = goog.global.devtoolsFormatters;
if(cljs.core.truth_(temp__5457__auto__)){
var f = temp__5457__auto__;
var G__35121 = f;
G__35121.push((new shadow.cljs.devtools.client.console.KeywordFormatter()));

G__35121.push((new shadow.cljs.devtools.client.console.MapFormatter()));

G__35121.push((new shadow.cljs.devtools.client.console.SeqFormatter()));

G__35121.push((new shadow.cljs.devtools.client.console.SymbolFormatter()));

G__35121.push((new shadow.cljs.devtools.client.console.DerefFormatter()));

return G__35121;
} else {
return null;
}
});
shadow.cljs.devtools.client.console.remove_all_BANG_ = (function shadow$cljs$devtools$client$console$remove_all_BANG_(){
var all = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__35122_SHARP_){
return goog.object.get(p1__35122_SHARP_,"shadow$formatter");
}),cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1((function (){var or__3922__auto__ = goog.global.devtoolsFormatters;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return [];
}
})())));
return goog.object.set(goog.global,"devtoolsFormatters",all);
});
shadow.cljs.devtools.client.console.remove_all_BANG_();
shadow.cljs.devtools.client.console.install_all_BANG_();

//# sourceMappingURL=shadow.cljs.devtools.client.console.js.map
