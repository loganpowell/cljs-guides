goog.provide('shadow.cljs.devtools.client.node');
goog.require('cljs.core');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.js.shim.module$ws');
goog.require('cljs.reader');
goog.require('goog.object');
if(typeof shadow.cljs.devtools.client.node.client_id !== 'undefined'){
} else {
shadow.cljs.devtools.client.node.client_id = cljs.core.random_uuid();
}
if(typeof shadow.cljs.devtools.client.node.ws_ref !== 'undefined'){
} else {
shadow.cljs.devtools.client.node.ws_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.node.ws_close = (function shadow$cljs$devtools$client$node$ws_close(){
var temp__5461__auto__ = cljs.core.deref(shadow.cljs.devtools.client.node.ws_ref);
if((temp__5461__auto__ == null)){
return null;
} else {
var tcp = temp__5461__auto__;
tcp.close();

return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.node.ws_ref,null);
}
});
shadow.cljs.devtools.client.node.ws_msg = (function shadow$cljs$devtools$client$node$ws_msg(msg){
var temp__5461__auto__ = cljs.core.deref(shadow.cljs.devtools.client.node.ws_ref);
if((temp__5461__auto__ == null)){
return null;
} else {
var ws = temp__5461__auto__;
return ws.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)),((function (ws,temp__5461__auto__){
return (function (err){
if(cljs.core.truth_(err)){
return console.error("REPL msg send failed",err);
} else {
return null;
}
});})(ws,temp__5461__auto__))
);
}
});
shadow.cljs.devtools.client.node.node_eval = (function shadow$cljs$devtools$client$node$node_eval(p__35727){
var map__35728 = p__35727;
var map__35728__$1 = ((((!((map__35728 == null)))?(((((map__35728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35728.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35728):map__35728);
var msg = map__35728__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35728__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var source_map_json = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35728__$1,new cljs.core.Keyword(null,"source-map-json","source-map-json",-299460036));
var result = SHADOW_NODE_EVAL(js,source_map_json);
return result;
});
shadow.cljs.devtools.client.node.is_loaded_QMARK_ = (function shadow$cljs$devtools$client$node$is_loaded_QMARK_(src){
return goog.object.get(SHADOW_IMPORTED,src) === true;
});
shadow.cljs.devtools.client.node.closure_import = (function shadow$cljs$devtools$client$node$closure_import(src){
if(typeof src === 'string'){
} else {
throw (new Error("Assert failed: (string? src)"));
}

return SHADOW_IMPORT(src);
});
shadow.cljs.devtools.client.node.repl_init = (function shadow$cljs$devtools$client$node$repl_init(p__35730){
var map__35731 = p__35730;
var map__35731__$1 = ((((!((map__35731 == null)))?(((((map__35731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35731.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35731):map__35731);
var msg = map__35731__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35731__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35731__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var map__35733 = repl_state;
var map__35733__$1 = ((((!((map__35733 == null)))?(((((map__35733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35733):map__35733);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35733__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var seq__35735_35745 = cljs.core.seq(repl_sources);
var chunk__35737_35746 = null;
var count__35738_35747 = (0);
var i__35739_35748 = (0);
while(true){
if((i__35739_35748 < count__35738_35747)){
var map__35741_35749 = chunk__35737_35746.cljs$core$IIndexed$_nth$arity$2(null,i__35739_35748);
var map__35741_35750__$1 = ((((!((map__35741_35749 == null)))?(((((map__35741_35749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35741_35749.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35741_35749):map__35741_35749);
var src_35751 = map__35741_35750__$1;
var output_name_35752 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35741_35750__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.not(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_35752))){
shadow.cljs.devtools.client.node.closure_import(output_name_35752);


var G__35753 = seq__35735_35745;
var G__35754 = chunk__35737_35746;
var G__35755 = count__35738_35747;
var G__35756 = (i__35739_35748 + (1));
seq__35735_35745 = G__35753;
chunk__35737_35746 = G__35754;
count__35738_35747 = G__35755;
i__35739_35748 = G__35756;
continue;
} else {
var G__35757 = seq__35735_35745;
var G__35758 = chunk__35737_35746;
var G__35759 = count__35738_35747;
var G__35760 = (i__35739_35748 + (1));
seq__35735_35745 = G__35757;
chunk__35737_35746 = G__35758;
count__35738_35747 = G__35759;
i__35739_35748 = G__35760;
continue;
}
} else {
var temp__5457__auto___35761 = cljs.core.seq(seq__35735_35745);
if(temp__5457__auto___35761){
var seq__35735_35762__$1 = temp__5457__auto___35761;
if(cljs.core.chunked_seq_QMARK_(seq__35735_35762__$1)){
var c__4319__auto___35763 = cljs.core.chunk_first(seq__35735_35762__$1);
var G__35764 = cljs.core.chunk_rest(seq__35735_35762__$1);
var G__35765 = c__4319__auto___35763;
var G__35766 = cljs.core.count(c__4319__auto___35763);
var G__35767 = (0);
seq__35735_35745 = G__35764;
chunk__35737_35746 = G__35765;
count__35738_35747 = G__35766;
i__35739_35748 = G__35767;
continue;
} else {
var map__35743_35768 = cljs.core.first(seq__35735_35762__$1);
var map__35743_35769__$1 = ((((!((map__35743_35768 == null)))?(((((map__35743_35768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35743_35768.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35743_35768):map__35743_35768);
var src_35770 = map__35743_35769__$1;
var output_name_35771 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35743_35769__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.not(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_35771))){
shadow.cljs.devtools.client.node.closure_import(output_name_35771);


var G__35772 = cljs.core.next(seq__35735_35762__$1);
var G__35773 = null;
var G__35774 = (0);
var G__35775 = (0);
seq__35735_35745 = G__35772;
chunk__35737_35746 = G__35773;
count__35738_35747 = G__35774;
i__35739_35748 = G__35775;
continue;
} else {
var G__35776 = cljs.core.next(seq__35735_35762__$1);
var G__35777 = null;
var G__35778 = (0);
var G__35779 = (0);
seq__35735_35745 = G__35776;
chunk__35737_35746 = G__35777;
count__35738_35747 = G__35778;
i__35739_35748 = G__35779;
continue;
}
}
} else {
}
}
break;
}

return shadow.cljs.devtools.client.node.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});
shadow.cljs.devtools.client.node.repl_invoke = (function shadow$cljs$devtools$client$node$repl_invoke(p__35780){
var map__35781 = p__35780;
var map__35781__$1 = ((((!((map__35781 == null)))?(((((map__35781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35781):map__35781);
var msg = map__35781__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35781__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var result = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shadow.cljs.devtools.client.env.repl_call(((function (map__35781,map__35781__$1,msg,id){
return (function (){
return shadow.cljs.devtools.client.node.node_eval(msg);
});})(map__35781,map__35781__$1,msg,id))
,shadow.cljs.devtools.client.env.repl_error),new cljs.core.Keyword(null,"id","id",-1388402092),id);
return shadow.cljs.devtools.client.node.ws_msg(result);
});
shadow.cljs.devtools.client.node.repl_set_ns = (function shadow$cljs$devtools$client$node$repl_set_ns(p__35783){
var map__35784 = p__35783;
var map__35784__$1 = ((((!((map__35784 == null)))?(((((map__35784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35784.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35784):map__35784);
var msg = map__35784__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35784__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.node.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});
shadow.cljs.devtools.client.node.repl_require = (function shadow$cljs$devtools$client$node$repl_require(p__35786){
var map__35787 = p__35786;
var map__35787__$1 = ((((!((map__35787 == null)))?(((((map__35787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35787):map__35787);
var msg = map__35787__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35787__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35787__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35787__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
try{var seq__35790_35798 = cljs.core.seq(sources);
var chunk__35791_35799 = null;
var count__35792_35800 = (0);
var i__35793_35801 = (0);
while(true){
if((i__35793_35801 < count__35792_35800)){
var map__35794_35802 = chunk__35791_35799.cljs$core$IIndexed$_nth$arity$2(null,i__35793_35801);
var map__35794_35803__$1 = ((((!((map__35794_35802 == null)))?(((((map__35794_35802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35794_35802.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35794_35802):map__35794_35802);
var src_35804 = map__35794_35803__$1;
var provides_35805 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35794_35803__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_35806 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35794_35803__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__3922__auto__ = cljs.core.not(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_35806));
if(or__3922__auto__){
return or__3922__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_35805);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_35806);
} else {
}


var G__35807 = seq__35790_35798;
var G__35808 = chunk__35791_35799;
var G__35809 = count__35792_35800;
var G__35810 = (i__35793_35801 + (1));
seq__35790_35798 = G__35807;
chunk__35791_35799 = G__35808;
count__35792_35800 = G__35809;
i__35793_35801 = G__35810;
continue;
} else {
var temp__5457__auto___35811 = cljs.core.seq(seq__35790_35798);
if(temp__5457__auto___35811){
var seq__35790_35812__$1 = temp__5457__auto___35811;
if(cljs.core.chunked_seq_QMARK_(seq__35790_35812__$1)){
var c__4319__auto___35813 = cljs.core.chunk_first(seq__35790_35812__$1);
var G__35814 = cljs.core.chunk_rest(seq__35790_35812__$1);
var G__35815 = c__4319__auto___35813;
var G__35816 = cljs.core.count(c__4319__auto___35813);
var G__35817 = (0);
seq__35790_35798 = G__35814;
chunk__35791_35799 = G__35815;
count__35792_35800 = G__35816;
i__35793_35801 = G__35817;
continue;
} else {
var map__35796_35818 = cljs.core.first(seq__35790_35812__$1);
var map__35796_35819__$1 = ((((!((map__35796_35818 == null)))?(((((map__35796_35818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35796_35818.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35796_35818):map__35796_35818);
var src_35820 = map__35796_35819__$1;
var provides_35821 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35796_35819__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_35822 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35796_35819__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__3922__auto__ = cljs.core.not(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_35822));
if(or__3922__auto__){
return or__3922__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_35821);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_35822);
} else {
}


var G__35823 = cljs.core.next(seq__35790_35812__$1);
var G__35824 = null;
var G__35825 = (0);
var G__35826 = (0);
seq__35790_35798 = G__35823;
chunk__35791_35799 = G__35824;
count__35792_35800 = G__35825;
i__35793_35801 = G__35826;
continue;
}
} else {
}
}
break;
}

return shadow.cljs.devtools.client.node.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e35789){var e = e35789;
console.error("repl/require failed",e);

return shadow.cljs.devtools.client.node.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}});
shadow.cljs.devtools.client.node.build_complete = (function shadow$cljs$devtools$client$node$build_complete(p__35827){
var map__35828 = p__35827;
var map__35828__$1 = ((((!((map__35828 == null)))?(((((map__35828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35828.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35828):map__35828);
var msg = map__35828__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35828__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35828__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__35830 = info;
var map__35830__$1 = ((((!((map__35830 == null)))?(((((map__35830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35830.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35830):map__35830);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35830__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35830__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4292__auto__ = ((function (map__35830,map__35830__$1,sources,compiled,map__35828,map__35828__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$node$build_complete_$_iter__35832(s__35833){
return (new cljs.core.LazySeq(null,((function (map__35830,map__35830__$1,sources,compiled,map__35828,map__35828__$1,msg,info,reload_info){
return (function (){
var s__35833__$1 = s__35833;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__35833__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var map__35838 = cljs.core.first(xs__6012__auto__);
var map__35838__$1 = ((((!((map__35838 == null)))?(((((map__35838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35838.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35838):map__35838);
var src = map__35838__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35838__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35838__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4288__auto__ = ((function (s__35833__$1,map__35838,map__35838__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__35830,map__35830__$1,sources,compiled,map__35828,map__35828__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$node$build_complete_$_iter__35832_$_iter__35834(s__35835){
return (new cljs.core.LazySeq(null,((function (s__35833__$1,map__35838,map__35838__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__35830,map__35830__$1,sources,compiled,map__35828,map__35828__$1,msg,info,reload_info){
return (function (){
var s__35835__$1 = s__35835;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__35835__$1);
if(temp__5457__auto____$1){
var s__35835__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35835__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__35835__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__35837 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__35836 = (0);
while(true){
if((i__35836 < size__4291__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__35836);
cljs.core.chunk_append(b__35837,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__35852 = (i__35836 + (1));
i__35836 = G__35852;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35837),shadow$cljs$devtools$client$node$build_complete_$_iter__35832_$_iter__35834(cljs.core.chunk_rest(s__35835__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35837),null);
}
} else {
var warning = cljs.core.first(s__35835__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$node$build_complete_$_iter__35832_$_iter__35834(cljs.core.rest(s__35835__$2)));
}
} else {
return null;
}
break;
}
});})(s__35833__$1,map__35838,map__35838__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__35830,map__35830__$1,sources,compiled,map__35828,map__35828__$1,msg,info,reload_info))
,null,null));
});})(s__35833__$1,map__35838,map__35838__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__35830,map__35830__$1,sources,compiled,map__35828,map__35828__$1,msg,info,reload_info))
;
var fs__4289__auto__ = cljs.core.seq(iterys__4288__auto__(warnings));
if(fs__4289__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4289__auto__,shadow$cljs$devtools$client$node$build_complete_$_iter__35832(cljs.core.rest(s__35833__$1)));
} else {
var G__35853 = cljs.core.rest(s__35833__$1);
s__35833__$1 = G__35853;
continue;
}
} else {
var G__35854 = cljs.core.rest(s__35833__$1);
s__35833__$1 = G__35854;
continue;
}
} else {
return null;
}
break;
}
});})(map__35830,map__35830__$1,sources,compiled,map__35828,map__35828__$1,msg,info,reload_info))
,null,null));
});})(map__35830,map__35830__$1,sources,compiled,map__35828,map__35828__$1,msg,info,reload_info))
;
return iter__4292__auto__(sources);
})()));
if(((shadow.cljs.devtools.client.env.autoload) && (((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))))){
var map__35840 = info;
var map__35840__$1 = ((((!((map__35840 == null)))?(((((map__35840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35840.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35840):map__35840);
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35840__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35840__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var files_to_require = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"output-name","output-name",-1769107767),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__35840,map__35840__$1,sources__$1,compiled__$1,map__35830,map__35830__$1,sources,compiled,warnings,map__35828,map__35828__$1,msg,info,reload_info){
return (function (p__35842){
var map__35843 = p__35842;
var map__35843__$1 = ((((!((map__35843 == null)))?(((((map__35843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35843.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35843):map__35843);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35843__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35843__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(compiled__$1,resource_id)) || (cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)));
});})(map__35840,map__35840__$1,sources__$1,compiled__$1,map__35830,map__35830__$1,sources,compiled,warnings,map__35828,map__35828__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__35840,map__35840__$1,sources__$1,compiled__$1,map__35830,map__35830__$1,sources,compiled,warnings,map__35828,map__35828__$1,msg,info,reload_info){
return (function (p__35845){
var map__35846 = p__35845;
var map__35846__$1 = ((((!((map__35846 == null)))?(((((map__35846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35846.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35846):map__35846);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35846__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__35840,map__35840__$1,sources__$1,compiled__$1,map__35830,map__35830__$1,sources,compiled,warnings,map__35828,map__35828__$1,msg,info,reload_info))
,sources__$1))));
if(cljs.core.seq(files_to_require)){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$2(msg,((function (map__35840,map__35840__$1,sources__$1,compiled__$1,files_to_require,map__35830,map__35830__$1,sources,compiled,warnings,map__35828,map__35828__$1,msg,info,reload_info){
return (function (){
var seq__35848 = cljs.core.seq(files_to_require);
var chunk__35849 = null;
var count__35850 = (0);
var i__35851 = (0);
while(true){
if((i__35851 < count__35850)){
var src = chunk__35849.cljs$core$IIndexed$_nth$arity$2(null,i__35851);
shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.node.closure_import(src);


var G__35855 = seq__35848;
var G__35856 = chunk__35849;
var G__35857 = count__35850;
var G__35858 = (i__35851 + (1));
seq__35848 = G__35855;
chunk__35849 = G__35856;
count__35850 = G__35857;
i__35851 = G__35858;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__35848);
if(temp__5457__auto__){
var seq__35848__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35848__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__35848__$1);
var G__35859 = cljs.core.chunk_rest(seq__35848__$1);
var G__35860 = c__4319__auto__;
var G__35861 = cljs.core.count(c__4319__auto__);
var G__35862 = (0);
seq__35848 = G__35859;
chunk__35849 = G__35860;
count__35850 = G__35861;
i__35851 = G__35862;
continue;
} else {
var src = cljs.core.first(seq__35848__$1);
shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.node.closure_import(src);


var G__35863 = cljs.core.next(seq__35848__$1);
var G__35864 = null;
var G__35865 = (0);
var G__35866 = (0);
seq__35848 = G__35863;
chunk__35849 = G__35864;
count__35850 = G__35865;
i__35851 = G__35866;
continue;
}
} else {
return null;
}
}
break;
}
});})(map__35840,map__35840__$1,sources__$1,compiled__$1,files_to_require,map__35830,map__35830__$1,sources,compiled,warnings,map__35828,map__35828__$1,msg,info,reload_info))
);
} else {
return null;
}
} else {
return null;
}
});
shadow.cljs.devtools.client.node.process_message = (function shadow$cljs$devtools$client$node$process_message(p__35867){
var map__35868 = p__35867;
var map__35868__$1 = ((((!((map__35868 == null)))?(((((map__35868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35868.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35868):map__35868);
var msg = map__35868__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35868__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__35870 = type;
var G__35870__$1 = (((G__35870 instanceof cljs.core.Keyword))?G__35870.fqn:null);
switch (G__35870__$1) {
case "repl/init":
return shadow.cljs.devtools.client.node.repl_init(msg);

break;
case "repl/invoke":
return shadow.cljs.devtools.client.node.repl_invoke(msg);

break;
case "repl/set-ns":
return shadow.cljs.devtools.client.node.repl_set_ns(msg);

break;
case "repl/require":
return shadow.cljs.devtools.client.node.repl_require(msg);

break;
case "build-start":
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

break;
case "build-complete":
return shadow.cljs.devtools.client.node.build_complete(msg);

break;
case "worker-shutdown":
return cljs.core.deref(shadow.cljs.devtools.client.node.ws_ref).terminate();

break;
default:
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl-unknown","repl-unknown",-1898463611),msg], null)], 0));

}
});
shadow.cljs.devtools.client.node.ws_connect = (function shadow$cljs$devtools$client$node$ws_connect(){
var url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"node","node",581201198));
var client = (new shadow.js.shim.module$ws(url,cljs.core.PersistentVector.EMPTY));
client.on("open",((function (url,client){
return (function (){
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.node.ws_ref,client);
});})(url,client))
);

client.on("unexpected-response",((function (url,client){
return (function (req,res){
var status = res.statusCode;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((406),status)){
return console.log("REPL connection rejected, probably stale JS connecting to new server.");
} else {
return console.log("REPL unexpected error",res.statusCode);
}
});})(url,client))
);

client.on("message",((function (url,client){
return (function (data,flags){
try{return shadow.cljs.devtools.client.env.process_ws_msg(data,shadow.cljs.devtools.client.node.process_message);
}catch (e35872){var e = e35872;
return console.error("failed to process message",data,e);
}});})(url,client))
);

client.on("close",((function (url,client){
return (function (){
return console.log("REPL client disconnected");
});})(url,client))
);

return client.on("error",((function (url,client){
return (function (err){
return console.log("REPL client error",err);
});})(url,client))
);
});
if(shadow.cljs.devtools.client.env.enabled){
shadow.cljs.devtools.client.node.ws_close();

shadow.cljs.devtools.client.node.ws_connect();
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.node.js.map
