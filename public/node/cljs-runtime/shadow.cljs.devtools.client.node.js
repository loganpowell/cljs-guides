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
shadow.cljs.devtools.client.node.node_eval = (function shadow$cljs$devtools$client$node$node_eval(p__29397){
var map__29398 = p__29397;
var map__29398__$1 = ((((!((map__29398 == null)))?(((((map__29398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29398):map__29398);
var msg = map__29398__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29398__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var source_map_json = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29398__$1,new cljs.core.Keyword(null,"source-map-json","source-map-json",-299460036));
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
shadow.cljs.devtools.client.node.repl_init = (function shadow$cljs$devtools$client$node$repl_init(p__29400){
var map__29401 = p__29400;
var map__29401__$1 = ((((!((map__29401 == null)))?(((((map__29401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29401):map__29401);
var msg = map__29401__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29401__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29401__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var map__29403 = repl_state;
var map__29403__$1 = ((((!((map__29403 == null)))?(((((map__29403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29403.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29403):map__29403);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29403__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var seq__29405_29415 = cljs.core.seq(repl_sources);
var chunk__29407_29416 = null;
var count__29408_29417 = (0);
var i__29409_29418 = (0);
while(true){
if((i__29409_29418 < count__29408_29417)){
var map__29411_29419 = chunk__29407_29416.cljs$core$IIndexed$_nth$arity$2(null,i__29409_29418);
var map__29411_29420__$1 = ((((!((map__29411_29419 == null)))?(((((map__29411_29419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29411_29419.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29411_29419):map__29411_29419);
var src_29421 = map__29411_29420__$1;
var output_name_29422 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29411_29420__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.not(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_29422))){
shadow.cljs.devtools.client.node.closure_import(output_name_29422);


var G__29423 = seq__29405_29415;
var G__29424 = chunk__29407_29416;
var G__29425 = count__29408_29417;
var G__29426 = (i__29409_29418 + (1));
seq__29405_29415 = G__29423;
chunk__29407_29416 = G__29424;
count__29408_29417 = G__29425;
i__29409_29418 = G__29426;
continue;
} else {
var G__29427 = seq__29405_29415;
var G__29428 = chunk__29407_29416;
var G__29429 = count__29408_29417;
var G__29430 = (i__29409_29418 + (1));
seq__29405_29415 = G__29427;
chunk__29407_29416 = G__29428;
count__29408_29417 = G__29429;
i__29409_29418 = G__29430;
continue;
}
} else {
var temp__5457__auto___29431 = cljs.core.seq(seq__29405_29415);
if(temp__5457__auto___29431){
var seq__29405_29432__$1 = temp__5457__auto___29431;
if(cljs.core.chunked_seq_QMARK_(seq__29405_29432__$1)){
var c__4319__auto___29433 = cljs.core.chunk_first(seq__29405_29432__$1);
var G__29434 = cljs.core.chunk_rest(seq__29405_29432__$1);
var G__29435 = c__4319__auto___29433;
var G__29436 = cljs.core.count(c__4319__auto___29433);
var G__29437 = (0);
seq__29405_29415 = G__29434;
chunk__29407_29416 = G__29435;
count__29408_29417 = G__29436;
i__29409_29418 = G__29437;
continue;
} else {
var map__29413_29438 = cljs.core.first(seq__29405_29432__$1);
var map__29413_29439__$1 = ((((!((map__29413_29438 == null)))?(((((map__29413_29438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29413_29438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29413_29438):map__29413_29438);
var src_29440 = map__29413_29439__$1;
var output_name_29441 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29413_29439__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.not(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_29441))){
shadow.cljs.devtools.client.node.closure_import(output_name_29441);


var G__29442 = cljs.core.next(seq__29405_29432__$1);
var G__29443 = null;
var G__29444 = (0);
var G__29445 = (0);
seq__29405_29415 = G__29442;
chunk__29407_29416 = G__29443;
count__29408_29417 = G__29444;
i__29409_29418 = G__29445;
continue;
} else {
var G__29446 = cljs.core.next(seq__29405_29432__$1);
var G__29447 = null;
var G__29448 = (0);
var G__29449 = (0);
seq__29405_29415 = G__29446;
chunk__29407_29416 = G__29447;
count__29408_29417 = G__29448;
i__29409_29418 = G__29449;
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
shadow.cljs.devtools.client.node.repl_invoke = (function shadow$cljs$devtools$client$node$repl_invoke(p__29450){
var map__29451 = p__29450;
var map__29451__$1 = ((((!((map__29451 == null)))?(((((map__29451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29451.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29451):map__29451);
var msg = map__29451__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29451__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var result = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shadow.cljs.devtools.client.env.repl_call(((function (map__29451,map__29451__$1,msg,id){
return (function (){
return shadow.cljs.devtools.client.node.node_eval(msg);
});})(map__29451,map__29451__$1,msg,id))
,shadow.cljs.devtools.client.env.repl_error),new cljs.core.Keyword(null,"id","id",-1388402092),id);
return shadow.cljs.devtools.client.node.ws_msg(result);
});
shadow.cljs.devtools.client.node.repl_set_ns = (function shadow$cljs$devtools$client$node$repl_set_ns(p__29453){
var map__29454 = p__29453;
var map__29454__$1 = ((((!((map__29454 == null)))?(((((map__29454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29454.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29454):map__29454);
var msg = map__29454__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29454__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.node.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});
shadow.cljs.devtools.client.node.repl_require = (function shadow$cljs$devtools$client$node$repl_require(p__29456){
var map__29457 = p__29456;
var map__29457__$1 = ((((!((map__29457 == null)))?(((((map__29457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29457.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29457):map__29457);
var msg = map__29457__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29457__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29457__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29457__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
try{var seq__29460_29468 = cljs.core.seq(sources);
var chunk__29461_29469 = null;
var count__29462_29470 = (0);
var i__29463_29471 = (0);
while(true){
if((i__29463_29471 < count__29462_29470)){
var map__29464_29472 = chunk__29461_29469.cljs$core$IIndexed$_nth$arity$2(null,i__29463_29471);
var map__29464_29473__$1 = ((((!((map__29464_29472 == null)))?(((((map__29464_29472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29464_29472.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29464_29472):map__29464_29472);
var src_29474 = map__29464_29473__$1;
var provides_29475 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29464_29473__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_29476 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29464_29473__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__3922__auto__ = cljs.core.not(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_29476));
if(or__3922__auto__){
return or__3922__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_29475);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_29476);
} else {
}


var G__29477 = seq__29460_29468;
var G__29478 = chunk__29461_29469;
var G__29479 = count__29462_29470;
var G__29480 = (i__29463_29471 + (1));
seq__29460_29468 = G__29477;
chunk__29461_29469 = G__29478;
count__29462_29470 = G__29479;
i__29463_29471 = G__29480;
continue;
} else {
var temp__5457__auto___29481 = cljs.core.seq(seq__29460_29468);
if(temp__5457__auto___29481){
var seq__29460_29482__$1 = temp__5457__auto___29481;
if(cljs.core.chunked_seq_QMARK_(seq__29460_29482__$1)){
var c__4319__auto___29483 = cljs.core.chunk_first(seq__29460_29482__$1);
var G__29484 = cljs.core.chunk_rest(seq__29460_29482__$1);
var G__29485 = c__4319__auto___29483;
var G__29486 = cljs.core.count(c__4319__auto___29483);
var G__29487 = (0);
seq__29460_29468 = G__29484;
chunk__29461_29469 = G__29485;
count__29462_29470 = G__29486;
i__29463_29471 = G__29487;
continue;
} else {
var map__29466_29488 = cljs.core.first(seq__29460_29482__$1);
var map__29466_29489__$1 = ((((!((map__29466_29488 == null)))?(((((map__29466_29488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29466_29488.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29466_29488):map__29466_29488);
var src_29490 = map__29466_29489__$1;
var provides_29491 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29466_29489__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_29492 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29466_29489__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__3922__auto__ = cljs.core.not(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_29492));
if(or__3922__auto__){
return or__3922__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_29491);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_29492);
} else {
}


var G__29493 = cljs.core.next(seq__29460_29482__$1);
var G__29494 = null;
var G__29495 = (0);
var G__29496 = (0);
seq__29460_29468 = G__29493;
chunk__29461_29469 = G__29494;
count__29462_29470 = G__29495;
i__29463_29471 = G__29496;
continue;
}
} else {
}
}
break;
}

return shadow.cljs.devtools.client.node.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e29459){var e = e29459;
console.error("repl/require failed",e);

return shadow.cljs.devtools.client.node.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}});
shadow.cljs.devtools.client.node.build_complete = (function shadow$cljs$devtools$client$node$build_complete(p__29497){
var map__29498 = p__29497;
var map__29498__$1 = ((((!((map__29498 == null)))?(((((map__29498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29498.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29498):map__29498);
var msg = map__29498__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29498__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29498__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__29500 = info;
var map__29500__$1 = ((((!((map__29500 == null)))?(((((map__29500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29500.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29500):map__29500);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29500__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29500__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4292__auto__ = ((function (map__29500,map__29500__$1,sources,compiled,map__29498,map__29498__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$node$build_complete_$_iter__29502(s__29503){
return (new cljs.core.LazySeq(null,((function (map__29500,map__29500__$1,sources,compiled,map__29498,map__29498__$1,msg,info,reload_info){
return (function (){
var s__29503__$1 = s__29503;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__29503__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var map__29508 = cljs.core.first(xs__6012__auto__);
var map__29508__$1 = ((((!((map__29508 == null)))?(((((map__29508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29508.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29508):map__29508);
var src = map__29508__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29508__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29508__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4288__auto__ = ((function (s__29503__$1,map__29508,map__29508__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__29500,map__29500__$1,sources,compiled,map__29498,map__29498__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$node$build_complete_$_iter__29502_$_iter__29504(s__29505){
return (new cljs.core.LazySeq(null,((function (s__29503__$1,map__29508,map__29508__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__29500,map__29500__$1,sources,compiled,map__29498,map__29498__$1,msg,info,reload_info){
return (function (){
var s__29505__$1 = s__29505;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__29505__$1);
if(temp__5457__auto____$1){
var s__29505__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__29505__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__29505__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__29507 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__29506 = (0);
while(true){
if((i__29506 < size__4291__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__29506);
cljs.core.chunk_append(b__29507,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__29522 = (i__29506 + (1));
i__29506 = G__29522;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29507),shadow$cljs$devtools$client$node$build_complete_$_iter__29502_$_iter__29504(cljs.core.chunk_rest(s__29505__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29507),null);
}
} else {
var warning = cljs.core.first(s__29505__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$node$build_complete_$_iter__29502_$_iter__29504(cljs.core.rest(s__29505__$2)));
}
} else {
return null;
}
break;
}
});})(s__29503__$1,map__29508,map__29508__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__29500,map__29500__$1,sources,compiled,map__29498,map__29498__$1,msg,info,reload_info))
,null,null));
});})(s__29503__$1,map__29508,map__29508__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__29500,map__29500__$1,sources,compiled,map__29498,map__29498__$1,msg,info,reload_info))
;
var fs__4289__auto__ = cljs.core.seq(iterys__4288__auto__(warnings));
if(fs__4289__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4289__auto__,shadow$cljs$devtools$client$node$build_complete_$_iter__29502(cljs.core.rest(s__29503__$1)));
} else {
var G__29523 = cljs.core.rest(s__29503__$1);
s__29503__$1 = G__29523;
continue;
}
} else {
var G__29524 = cljs.core.rest(s__29503__$1);
s__29503__$1 = G__29524;
continue;
}
} else {
return null;
}
break;
}
});})(map__29500,map__29500__$1,sources,compiled,map__29498,map__29498__$1,msg,info,reload_info))
,null,null));
});})(map__29500,map__29500__$1,sources,compiled,map__29498,map__29498__$1,msg,info,reload_info))
;
return iter__4292__auto__(sources);
})()));
if(((shadow.cljs.devtools.client.env.autoload) && (((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))))){
var map__29510 = info;
var map__29510__$1 = ((((!((map__29510 == null)))?(((((map__29510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29510.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29510):map__29510);
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29510__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29510__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var files_to_require = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"output-name","output-name",-1769107767),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__29510,map__29510__$1,sources__$1,compiled__$1,map__29500,map__29500__$1,sources,compiled,warnings,map__29498,map__29498__$1,msg,info,reload_info){
return (function (p__29512){
var map__29513 = p__29512;
var map__29513__$1 = ((((!((map__29513 == null)))?(((((map__29513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29513):map__29513);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29513__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29513__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(compiled__$1,resource_id)) || (cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)));
});})(map__29510,map__29510__$1,sources__$1,compiled__$1,map__29500,map__29500__$1,sources,compiled,warnings,map__29498,map__29498__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__29510,map__29510__$1,sources__$1,compiled__$1,map__29500,map__29500__$1,sources,compiled,warnings,map__29498,map__29498__$1,msg,info,reload_info){
return (function (p__29515){
var map__29516 = p__29515;
var map__29516__$1 = ((((!((map__29516 == null)))?(((((map__29516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29516):map__29516);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29516__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__29510,map__29510__$1,sources__$1,compiled__$1,map__29500,map__29500__$1,sources,compiled,warnings,map__29498,map__29498__$1,msg,info,reload_info))
,sources__$1))));
if(cljs.core.seq(files_to_require)){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$2(msg,((function (map__29510,map__29510__$1,sources__$1,compiled__$1,files_to_require,map__29500,map__29500__$1,sources,compiled,warnings,map__29498,map__29498__$1,msg,info,reload_info){
return (function (){
var seq__29518 = cljs.core.seq(files_to_require);
var chunk__29519 = null;
var count__29520 = (0);
var i__29521 = (0);
while(true){
if((i__29521 < count__29520)){
var src = chunk__29519.cljs$core$IIndexed$_nth$arity$2(null,i__29521);
shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.node.closure_import(src);


var G__29525 = seq__29518;
var G__29526 = chunk__29519;
var G__29527 = count__29520;
var G__29528 = (i__29521 + (1));
seq__29518 = G__29525;
chunk__29519 = G__29526;
count__29520 = G__29527;
i__29521 = G__29528;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__29518);
if(temp__5457__auto__){
var seq__29518__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29518__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__29518__$1);
var G__29529 = cljs.core.chunk_rest(seq__29518__$1);
var G__29530 = c__4319__auto__;
var G__29531 = cljs.core.count(c__4319__auto__);
var G__29532 = (0);
seq__29518 = G__29529;
chunk__29519 = G__29530;
count__29520 = G__29531;
i__29521 = G__29532;
continue;
} else {
var src = cljs.core.first(seq__29518__$1);
shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.node.closure_import(src);


var G__29533 = cljs.core.next(seq__29518__$1);
var G__29534 = null;
var G__29535 = (0);
var G__29536 = (0);
seq__29518 = G__29533;
chunk__29519 = G__29534;
count__29520 = G__29535;
i__29521 = G__29536;
continue;
}
} else {
return null;
}
}
break;
}
});})(map__29510,map__29510__$1,sources__$1,compiled__$1,files_to_require,map__29500,map__29500__$1,sources,compiled,warnings,map__29498,map__29498__$1,msg,info,reload_info))
);
} else {
return null;
}
} else {
return null;
}
});
shadow.cljs.devtools.client.node.process_message = (function shadow$cljs$devtools$client$node$process_message(p__29537){
var map__29538 = p__29537;
var map__29538__$1 = ((((!((map__29538 == null)))?(((((map__29538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29538.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29538):map__29538);
var msg = map__29538__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29538__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__29540 = type;
var G__29540__$1 = (((G__29540 instanceof cljs.core.Keyword))?G__29540.fqn:null);
switch (G__29540__$1) {
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
}catch (e29542){var e = e29542;
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
