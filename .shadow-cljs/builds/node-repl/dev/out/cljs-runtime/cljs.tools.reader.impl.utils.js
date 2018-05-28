goog.provide('cljs.tools.reader.impl.utils');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
cljs.tools.reader.impl.utils.char$ = (function cljs$tools$reader$impl$utils$char(x){
if((x == null)){
return null;
} else {
return cljs.core.char$(x);
}
});
cljs.tools.reader.impl.utils.ex_info_QMARK_ = (function cljs$tools$reader$impl$utils$ex_info_QMARK_(ex){
return (ex instanceof cljs.core.ExceptionInfo);
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
cljs.tools.reader.impl.utils.ReaderConditional = (function (splicing_QMARK_,form,__meta,__extmap,__hash){
this.splicing_QMARK_ = splicing_QMARK_;
this.form = form;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__12159__auto__,k__12160__auto__){
var self__ = this;
var this__12159__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__12159__auto____$1,k__12160__auto__,null);
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12161__auto__,k33225,else__12162__auto__){
var self__ = this;
var this__12161__auto____$1 = this;
var G__33229 = k33225;
var G__33229__$1 = (((G__33229 instanceof cljs.core.Keyword))?G__33229.fqn:null);
switch (G__33229__$1) {
case "splicing?":
return self__.splicing_QMARK_;

break;
case "form":
return self__.form;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33225,else__12162__auto__);

}
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__12173__auto__,writer__12174__auto__,opts__12175__auto__){
var self__ = this;
var this__12173__auto____$1 = this;
var pr_pair__12176__auto__ = ((function (this__12173__auto____$1){
return (function (keyval__12177__auto__){
return cljs.core.pr_sequential_writer(writer__12174__auto__,cljs.core.pr_writer,""," ","",opts__12175__auto__,keyval__12177__auto__);
});})(this__12173__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__12174__auto__,pr_pair__12176__auto__,"#cljs.tools.reader.impl.utils.ReaderConditional{",", ","}",opts__12175__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"splicing?","splicing?",-428596366),self__.splicing_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"form","form",-1624062471),self__.form],null))], null),self__.__extmap));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33224){
var self__ = this;
var G__33224__$1 = this;
return (new cljs.core.RecordIter((0),G__33224__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"splicing?","splicing?",-428596366),new cljs.core.Keyword(null,"form","form",-1624062471)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__12157__auto__){
var self__ = this;
var this__12157__auto____$1 = this;
return self__.__meta;
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__12154__auto__){
var self__ = this;
var this__12154__auto____$1 = this;
return (new cljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,self__.form,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__12163__auto__){
var self__ = this;
var this__12163__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__12155__auto__){
var self__ = this;
var this__12155__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__33230 = ((function (h__4030__auto__,this__12155__auto____$1){
return (function (coll__12156__auto__){
return (-209062840 ^ cljs.core.hash_unordered_coll(coll__12156__auto__));
});})(h__4030__auto__,this__12155__auto____$1))
;
return fexpr__33230(this__12155__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33226,other33227){
var self__ = this;
var this33226__$1 = this;
return ((!((other33227 == null))) && ((this33226__$1.constructor === other33227.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33226__$1.splicing_QMARK_,other33227.splicing_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33226__$1.form,other33227.form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33226__$1.__extmap,other33227.__extmap)));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__12168__auto__,k__12169__auto__){
var self__ = this;
var this__12168__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"splicing?","splicing?",-428596366),null,new cljs.core.Keyword(null,"form","form",-1624062471),null], null), null),k__12169__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__12168__auto____$1),self__.__meta),k__12169__auto__);
} else {
return (new cljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,self__.form,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__12169__auto__)),null));
}
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12166__auto__,k__12167__auto__,G__33224){
var self__ = this;
var this__12166__auto____$1 = this;
var pred__33231 = cljs.core.keyword_identical_QMARK_;
var expr__33232 = k__12167__auto__;
if(cljs.core.truth_((function (){var G__33234 = new cljs.core.Keyword(null,"splicing?","splicing?",-428596366);
var G__33235 = expr__33232;
return (pred__33231.cljs$core$IFn$_invoke$arity$2 ? pred__33231.cljs$core$IFn$_invoke$arity$2(G__33234,G__33235) : pred__33231.call(null,G__33234,G__33235));
})())){
return (new cljs.tools.reader.impl.utils.ReaderConditional(G__33224,self__.form,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33236 = new cljs.core.Keyword(null,"form","form",-1624062471);
var G__33237 = expr__33232;
return (pred__33231.cljs$core$IFn$_invoke$arity$2 ? pred__33231.cljs$core$IFn$_invoke$arity$2(G__33236,G__33237) : pred__33231.call(null,G__33236,G__33237));
})())){
return (new cljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,G__33224,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,self__.form,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__12167__auto__,G__33224),null));
}
}
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12171__auto__){
var self__ = this;
var this__12171__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"splicing?","splicing?",-428596366),self__.splicing_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"form","form",-1624062471),self__.form],null))], null),self__.__extmap));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__12158__auto__,G__33224){
var self__ = this;
var this__12158__auto____$1 = this;
return (new cljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,self__.form,G__33224,self__.__extmap,self__.__hash));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__12164__auto__,entry__12165__auto__){
var self__ = this;
var this__12164__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__12165__auto__)){
return cljs.core._assoc(this__12164__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12165__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12165__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__12164__auto____$1,entry__12165__auto__);
}
});

cljs.tools.reader.impl.utils.ReaderConditional.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"splicing?","splicing?",1211935161,null),new cljs.core.Symbol(null,"form","form",16469056,null)], null);
});

cljs.tools.reader.impl.utils.ReaderConditional.cljs$lang$type = true;

cljs.tools.reader.impl.utils.ReaderConditional.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"cljs.tools.reader.impl.utils/ReaderConditional",null,(1),null));
});

cljs.tools.reader.impl.utils.ReaderConditional.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"cljs.tools.reader.impl.utils/ReaderConditional");
});

/**
 * Positional factory function for cljs.tools.reader.impl.utils/ReaderConditional.
 */
cljs.tools.reader.impl.utils.__GT_ReaderConditional = (function cljs$tools$reader$impl$utils$__GT_ReaderConditional(splicing_QMARK_,form){
return (new cljs.tools.reader.impl.utils.ReaderConditional(splicing_QMARK_,form,null,null,null));
});

/**
 * Factory function for cljs.tools.reader.impl.utils/ReaderConditional, taking a map of keywords to field values.
 */
cljs.tools.reader.impl.utils.map__GT_ReaderConditional = (function cljs$tools$reader$impl$utils$map__GT_ReaderConditional(G__33228){
return (new cljs.tools.reader.impl.utils.ReaderConditional(new cljs.core.Keyword(null,"splicing?","splicing?",-428596366).cljs$core$IFn$_invoke$arity$1(G__33228),new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(G__33228),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33228,new cljs.core.Keyword(null,"splicing?","splicing?",-428596366),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"form","form",-1624062471)], 0))),null));
});

/**
 * Return true if the value is the data representation of a reader conditional
 */
cljs.tools.reader.impl.utils.reader_conditional_QMARK_ = (function cljs$tools$reader$impl$utils$reader_conditional_QMARK_(value){
return (value instanceof cljs.tools.reader.impl.utils.ReaderConditional);
});
/**
 * Construct a data representation of a reader conditional.
 *   If true, splicing? indicates read-cond-splicing.
 */
cljs.tools.reader.impl.utils.reader_conditional = (function cljs$tools$reader$impl$utils$reader_conditional(form,splicing_QMARK_){
return (new cljs.tools.reader.impl.utils.ReaderConditional(splicing_QMARK_,form,null,null,null));
});
cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
cljs.core._write(writer,["#?",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"splicing?","splicing?",-428596366).cljs$core$IFn$_invoke$arity$1(coll__$1))?"@":null))].join(''));

return cljs.core.pr_writer(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(coll__$1),writer,opts);
});
cljs.tools.reader.impl.utils.ws_rx = /[\s]/;
/**
 * Checks whether a given character is whitespace
 */
cljs.tools.reader.impl.utils.whitespace_QMARK_ = (function cljs$tools$reader$impl$utils$whitespace_QMARK_(ch){
if((ch == null)){
return null;
} else {
if((ch === ",")){
return true;
} else {
return cljs.tools.reader.impl.utils.ws_rx.test(ch);
}
}
});
/**
 * Checks whether a given character is numeric
 */
cljs.tools.reader.impl.utils.numeric_QMARK_ = (function cljs$tools$reader$impl$utils$numeric_QMARK_(ch){
if((ch == null)){
return null;
} else {
return goog.string.isNumeric(ch);
}
});
/**
 * Checks whether the character is a newline
 */
cljs.tools.reader.impl.utils.newline_QMARK_ = (function cljs$tools$reader$impl$utils$newline_QMARK_(c){
return ((("\n" === c)) || (("\n" === c)) || ((c == null)));
});
/**
 * Resolves syntactical sugar in metadata
 */
cljs.tools.reader.impl.utils.desugar_meta = (function cljs$tools$reader$impl$utils$desugar_meta(f){
if((f instanceof cljs.core.Keyword)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([f,true]);
} else {
if((f instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),f], null);
} else {
if(typeof f === 'string'){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),f], null);
} else {
return f;

}
}
}
});
cljs.tools.reader.impl.utils.last_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
cljs.tools.reader.impl.utils.next_id = (function cljs$tools$reader$impl$utils$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.tools.reader.impl.utils.last_id,cljs.core.inc);
});
cljs.tools.reader.impl.utils.namespace_keys = (function cljs$tools$reader$impl$utils$namespace_keys(ns,keys){
var iter__4292__auto__ = (function cljs$tools$reader$impl$utils$namespace_keys_$_iter__33239(s__33240){
return (new cljs.core.LazySeq(null,(function (){
var s__33240__$1 = s__33240;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__33240__$1);
if(temp__5457__auto__){
var s__33240__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33240__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__33240__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__33242 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__33241 = (0);
while(true){
if((i__33241 < size__4291__auto__)){
var key = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__33241);
cljs.core.chunk_append(b__33242,(((((key instanceof cljs.core.Symbol)) || ((key instanceof cljs.core.Keyword))))?(function (){var vec__33243 = (function (){var fexpr__33246 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace,cljs.core.name);
return (fexpr__33246.cljs$core$IFn$_invoke$arity$1 ? fexpr__33246.cljs$core$IFn$_invoke$arity$1(key) : fexpr__33246.call(null,key));
})();
var key_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33243,(0),null);
var key_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33243,(1),null);
var __GT_key = (((key instanceof cljs.core.Symbol))?cljs.core.symbol:cljs.core.keyword);
if((key_ns == null)){
return (__GT_key.cljs$core$IFn$_invoke$arity$2 ? __GT_key.cljs$core$IFn$_invoke$arity$2(ns,key_name) : __GT_key.call(null,ns,key_name));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("_",key_ns)){
return (__GT_key.cljs$core$IFn$_invoke$arity$1 ? __GT_key.cljs$core$IFn$_invoke$arity$1(key_name) : __GT_key.call(null,key_name));
} else {
return key;

}
}
})():key));

var G__33252 = (i__33241 + (1));
i__33241 = G__33252;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33242),cljs$tools$reader$impl$utils$namespace_keys_$_iter__33239(cljs.core.chunk_rest(s__33240__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33242),null);
}
} else {
var key = cljs.core.first(s__33240__$2);
return cljs.core.cons((((((key instanceof cljs.core.Symbol)) || ((key instanceof cljs.core.Keyword))))?(function (){var vec__33247 = (function (){var fexpr__33250 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace,cljs.core.name);
return (fexpr__33250.cljs$core$IFn$_invoke$arity$1 ? fexpr__33250.cljs$core$IFn$_invoke$arity$1(key) : fexpr__33250.call(null,key));
})();
var key_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33247,(0),null);
var key_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33247,(1),null);
var __GT_key = (((key instanceof cljs.core.Symbol))?cljs.core.symbol:cljs.core.keyword);
if((key_ns == null)){
return (__GT_key.cljs$core$IFn$_invoke$arity$2 ? __GT_key.cljs$core$IFn$_invoke$arity$2(ns,key_name) : __GT_key.call(null,ns,key_name));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("_",key_ns)){
return (__GT_key.cljs$core$IFn$_invoke$arity$1 ? __GT_key.cljs$core$IFn$_invoke$arity$1(key_name) : __GT_key.call(null,key_name));
} else {
return key;

}
}
})():key),cljs$tools$reader$impl$utils$namespace_keys_$_iter__33239(cljs.core.rest(s__33240__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__(keys);
});
cljs.tools.reader.impl.utils.second_SINGLEQUOTE_ = (function cljs$tools$reader$impl$utils$second_SINGLEQUOTE_(p__33254){
var vec__33255 = p__33254;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33255,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33255,(1),null);
if(cljs.core.truth_(a)){
return null;
} else {
return b;
}
});

//# sourceMappingURL=cljs.tools.reader.impl.utils.js.map
