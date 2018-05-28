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

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12161__auto__,k26718,else__12162__auto__){
var self__ = this;
var this__12161__auto____$1 = this;
var G__26722 = k26718;
var G__26722__$1 = (((G__26722 instanceof cljs.core.Keyword))?G__26722.fqn:null);
switch (G__26722__$1) {
case "splicing?":
return self__.splicing_QMARK_;

break;
case "form":
return self__.form;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k26718,else__12162__auto__);

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

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26717){
var self__ = this;
var G__26717__$1 = this;
return (new cljs.core.RecordIter((0),G__26717__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"splicing?","splicing?",-428596366),new cljs.core.Keyword(null,"form","form",-1624062471)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4030__auto____$1 = (function (){var fexpr__26723 = ((function (h__4030__auto__,this__12155__auto____$1){
return (function (coll__12156__auto__){
return (-209062840 ^ cljs.core.hash_unordered_coll(coll__12156__auto__));
});})(h__4030__auto__,this__12155__auto____$1))
;
return fexpr__26723(this__12155__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this26719,other26720){
var self__ = this;
var this26719__$1 = this;
return ((!((other26720 == null))) && ((this26719__$1.constructor === other26720.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26719__$1.splicing_QMARK_,other26720.splicing_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26719__$1.form,other26720.form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26719__$1.__extmap,other26720.__extmap)));
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

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12166__auto__,k__12167__auto__,G__26717){
var self__ = this;
var this__12166__auto____$1 = this;
var pred__26724 = cljs.core.keyword_identical_QMARK_;
var expr__26725 = k__12167__auto__;
if(cljs.core.truth_((function (){var G__26727 = new cljs.core.Keyword(null,"splicing?","splicing?",-428596366);
var G__26728 = expr__26725;
return (pred__26724.cljs$core$IFn$_invoke$arity$2 ? pred__26724.cljs$core$IFn$_invoke$arity$2(G__26727,G__26728) : pred__26724.call(null,G__26727,G__26728));
})())){
return (new cljs.tools.reader.impl.utils.ReaderConditional(G__26717,self__.form,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26729 = new cljs.core.Keyword(null,"form","form",-1624062471);
var G__26730 = expr__26725;
return (pred__26724.cljs$core$IFn$_invoke$arity$2 ? pred__26724.cljs$core$IFn$_invoke$arity$2(G__26729,G__26730) : pred__26724.call(null,G__26729,G__26730));
})())){
return (new cljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,G__26717,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,self__.form,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__12167__auto__,G__26717),null));
}
}
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12171__auto__){
var self__ = this;
var this__12171__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"splicing?","splicing?",-428596366),self__.splicing_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"form","form",-1624062471),self__.form],null))], null),self__.__extmap));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__12158__auto__,G__26717){
var self__ = this;
var this__12158__auto____$1 = this;
return (new cljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,self__.form,G__26717,self__.__extmap,self__.__hash));
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
cljs.tools.reader.impl.utils.map__GT_ReaderConditional = (function cljs$tools$reader$impl$utils$map__GT_ReaderConditional(G__26721){
return (new cljs.tools.reader.impl.utils.ReaderConditional(new cljs.core.Keyword(null,"splicing?","splicing?",-428596366).cljs$core$IFn$_invoke$arity$1(G__26721),new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(G__26721),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__26721,new cljs.core.Keyword(null,"splicing?","splicing?",-428596366),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"form","form",-1624062471)], 0))),null));
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
var iter__4292__auto__ = (function cljs$tools$reader$impl$utils$namespace_keys_$_iter__26733(s__26734){
return (new cljs.core.LazySeq(null,(function (){
var s__26734__$1 = s__26734;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__26734__$1);
if(temp__5457__auto__){
var s__26734__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26734__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__26734__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__26736 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__26735 = (0);
while(true){
if((i__26735 < size__4291__auto__)){
var key = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__26735);
cljs.core.chunk_append(b__26736,(((((key instanceof cljs.core.Symbol)) || ((key instanceof cljs.core.Keyword))))?(function (){var vec__26737 = (function (){var fexpr__26740 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace,cljs.core.name);
return (fexpr__26740.cljs$core$IFn$_invoke$arity$1 ? fexpr__26740.cljs$core$IFn$_invoke$arity$1(key) : fexpr__26740.call(null,key));
})();
var key_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26737,(0),null);
var key_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26737,(1),null);
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

var G__26747 = (i__26735 + (1));
i__26735 = G__26747;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26736),cljs$tools$reader$impl$utils$namespace_keys_$_iter__26733(cljs.core.chunk_rest(s__26734__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26736),null);
}
} else {
var key = cljs.core.first(s__26734__$2);
return cljs.core.cons((((((key instanceof cljs.core.Symbol)) || ((key instanceof cljs.core.Keyword))))?(function (){var vec__26742 = (function (){var fexpr__26745 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace,cljs.core.name);
return (fexpr__26745.cljs$core$IFn$_invoke$arity$1 ? fexpr__26745.cljs$core$IFn$_invoke$arity$1(key) : fexpr__26745.call(null,key));
})();
var key_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26742,(0),null);
var key_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26742,(1),null);
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
})():key),cljs$tools$reader$impl$utils$namespace_keys_$_iter__26733(cljs.core.rest(s__26734__$2)));
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
cljs.tools.reader.impl.utils.second_SINGLEQUOTE_ = (function cljs$tools$reader$impl$utils$second_SINGLEQUOTE_(p__26748){
var vec__26750 = p__26748;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26750,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26750,(1),null);
if(cljs.core.truth_(a)){
return null;
} else {
return b;
}
});

//# sourceMappingURL=cljs.tools.reader.impl.utils.js.map
