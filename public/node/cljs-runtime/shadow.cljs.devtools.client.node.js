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
shadow.cljs.devtools.client.node.node_eval = (function shadow$cljs$devtools$client$node$node_eval(p__29296){
var map__29297 = p__29296;
var map__29297__$1 = ((((!((map__29297 == null)))?(((((map__29297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29297.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29297):map__29297);
var msg = map__29297__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29297__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var source_map_json = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29297__$1,new cljs.core.Keyword(null,"source-map-json","source-map-json",-299460036));
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
shadow.cljs.devtools.client.node.repl_init = (function shadow$cljs$devtools$client$node$repl_init(p__29299){
var map__29300 = p__29299;
var map__29300__$1 = ((((!((map__29300 == null)))?(((((map__29300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29300.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29300):map__29300);
var msg = map__29300__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29300__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29300__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var map__29302 = repl_state;
var map__29302__$1 = ((((!((map__29302 == null)))?(((((map__29302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29302):map__29302);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29302__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var seq__29304_29314 = cljs.core.seq(repl_sources);
var chunk__29306_29315 = null;
var count__29307_29316 = (0);
var i__29308_29317 = (0);
while(true){
if((i__29308_29317 < count__29307_29316)){
var map__29310_29318 = chunk__29306_29315.cljs$core$IIndexed$_nth$arity$2(null,i__29308_29317);
var map__29310_29319__$1 = ((((!((map__29310_29318 == null)))?(((((map__29310_29318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29310_29318.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29310_29318):map__29310_29318);
var src_29320 = map__29310_29319__$1;
var output_name_29321 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29310_29319__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.not(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_29321))){
shadow.cljs.devtools.client.node.closure_import(output_name_29321);


var G__29322 = seq__29304_29314;
var G__29323 = chunk__29306_29315;
var G__29324 = count__29307_29316;
var G__29325 = (i__29308_29317 + (1));
seq__29304_29314 = G__29322;
chunk__29306_29315 = G__29323;
count__29307_29316 = G__29324;
i__29308_29317 = G__29325;
continue;
} else {
var G__29326 = seq__29304_29314;
var G__29327 = chunk__29306_29315;
var G__29328 = count__29307_29316;
var G__29329 = (i__29308_29317 + (1));
seq__29304_29314 = G__29326;
chunk__29306_29315 = G__29327;
count__29307_29316 = G__29328;
i__29308_29317 = G__29329;
continue;
}
} else {
var temp__5457__auto___29330 = cljs.core.seq(seq__29304_29314);
if(temp__5457__auto___29330){
var seq__29304_29331__$1 = temp__5457__auto___29330;
if(cljs.core.chunked_seq_QMARK_(seq__29304_29331__$1)){
var c__4319__auto___29332 = cljs.core.chunk_first(seq__29304_29331__$1);
var G__29333 = cljs.core.chunk_rest(seq__29304_29331__$1);
var G__29334 = c__4319__auto___29332;
var G__29335 = cljs.core.count(c__4319__auto___29332);
var G__29336 = (0);
seq__29304_29314 = G__29333;
chunk__29306_29315 = G__29334;
count__29307_29316 = G__29335;
i__29308_29317 = G__29336;
continue;
} else {
var map__29312_29337 = cljs.core.first(seq__29304_29331__$1);
var map__29312_29338__$1 = ((((!((map__29312_29337 == null)))?(((((map__29312_29337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29312_29337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29312_29337):map__29312_29337);
var src_29339 = map__29312_29338__$1;
var output_name_29340 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29312_29338__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.not(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_29340))){
shadow.cljs.devtools.client.node.closure_import(output_name_29340);


var G__29341 = cljs.core.next(seq__29304_29331__$1);
var G__29342 = null;
var G__29343 = (0);
var G__29344 = (0);
seq__29304_29314 = G__29341;
chunk__29306_29315 = G__29342;
count__29307_29316 = G__29343;
i__29308_29317 = G__29344;
continue;
} else {
var G__29345 = cljs.core.next(seq__29304_29331__$1);
var G__29346 = null;
var G__29347 = (0);
var G__29348 = (0);
seq__29304_29314 = G__29345;
chunk__29306_29315 = G__29346;
count__29307_29316 = G__29347;
i__29308_29317 = G__29348;
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
shadow.cljs.devtools.client.node.repl_invoke = (function shadow$cljs$devtools$client$node$repl_invoke(p__29349){
var map__29350 = p__29349;
var map__29350__$1 = ((((!((map__29350 == null)))?(((((map__29350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29350):map__29350);
var msg = map__29350__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29350__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var result = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shadow.cljs.devtools.client.env.repl_call(((function (map__29350,map__29350__$1,msg,id){
return (function (){
return shadow.cljs.devtools.client.node.node_eval(msg);
});})(map__29350,map__29350__$1,msg,id))
,shadow.cljs.devtools.client.env.repl_error),new cljs.core.Keyword(null,"id","id",-1388402092),id);
return shadow.cljs.devtools.client.node.ws_msg(result);
});
shadow.cljs.devtools.client.node.repl_set_ns = (function shadow$cljs$devtools$client$node$repl_set_ns(p__29352){
var map__29353 = p__29352;
var map__29353__$1 = ((((!((map__29353 == null)))?(((((map__29353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29353):map__29353);
var msg = map__29353__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29353__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.node.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});
shadow.cljs.devtools.client.node.repl_require = (function shadow$cljs$devtools$client$node$repl_require(p__29355){
var map__29356 = p__29355;
var map__29356__$1 = ((((!((map__29356 == null)))?(((((map__29356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29356):map__29356);
var msg = map__29356__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29356__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29356__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29356__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
try{var seq__29359_29367 = cljs.core.seq(sources);
var chunk__29360_29368 = null;
var count__29361_29369 = (0);
var i__29362_29370 = (0);
while(true){
if((i__29362_29370 < count__29361_29369)){
var map__29363_29371 = chunk__29360_29368.cljs$core$IIndexed$_nth$arity$2(null,i__29362_29370);
var map__29363_29372__$1 = ((((!((map__29363_29371 == null)))?(((((map__29363_29371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29363_29371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29363_29371):map__29363_29371);
var src_29373 = map__29363_29372__$1;
var provides_29374 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29363_29372__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_29375 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29363_29372__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__3922__auto__ = cljs.core.not(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_29375));
if(or__3922__auto__){
return or__3922__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_29374);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_29375);
} else {
}


var G__29376 = seq__29359_29367;
var G__29377 = chunk__29360_29368;
var G__29378 = count__29361_29369;
var G__29379 = (i__29362_29370 + (1));
seq__29359_29367 = G__29376;
chunk__29360_29368 = G__29377;
count__29361_29369 = G__29378;
i__29362_29370 = G__29379;
continue;
} else {
var temp__5457__auto___29380 = cljs.core.seq(seq__29359_29367);
if(temp__5457__auto___29380){
var seq__29359_29381__$1 = temp__5457__auto___29380;
if(cljs.core.chunked_seq_QMARK_(seq__29359_29381__$1)){
var c__4319__auto___29382 = cljs.core.chunk_first(seq__29359_29381__$1);
var G__29383 = cljs.core.chunk_rest(seq__29359_29381__$1);
var G__29384 = c__4319__auto___29382;
var G__29385 = cljs.core.count(c__4319__auto___29382);
var G__29386 = (0);
seq__29359_29367 = G__29383;
chunk__29360_29368 = G__29384;
count__29361_29369 = G__29385;
i__29362_29370 = G__29386;
continue;
} else {
var map__29365_29387 = cljs.core.first(seq__29359_29381__$1);
var map__29365_29388__$1 = ((((!((map__29365_29387 == null)))?(((((map__29365_29387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29365_29387.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29365_29387):map__29365_29387);
var src_29389 = map__29365_29388__$1;
var provides_29390 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29365_29388__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_29391 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29365_29388__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__3922__auto__ = cljs.core.not(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_29391));
if(or__3922__auto__){
return or__3922__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_29390);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_29391);
} else {
}


var G__29392 = cljs.core.next(seq__29359_29381__$1);
var G__29393 = null;
var G__29394 = (0);
var G__29395 = (0);
seq__29359_29367 = G__29392;
chunk__29360_29368 = G__29393;
count__29361_29369 = G__29394;
i__29362_29370 = G__29395;
continue;
}
} else {
}
}
break;
}

return shadow.cljs.devtools.client.node.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e29358){var e = e29358;
console.error("repl/require failed",e);

return shadow.cljs.devtools.client.node.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}});
shadow.cljs.devtools.client.node.build_complete = (function shadow$cljs$devtools$client$node$build_complete(p__29396){
var map__29397 = p__29396;
var map__29397__$1 = ((((!((map__29397 == null)))?(((((map__29397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29397.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29397):map__29397);
var msg = map__29397__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29397__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29397__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__29399 = info;
var map__29399__$1 = ((((!((map__29399 == null)))?(((((map__29399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29399.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29399):map__29399);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29399__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29399__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4292__auto__ = ((function (map__29399,map__29399__$1,sources,compiled,map__29397,map__29397__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$node$build_complete_$_iter__29401(s__29402){
return (new cljs.core.LazySeq(null,((function (map__29399,map__29399__$1,sources,compiled,map__29397,map__29397__$1,msg,info,reload_info){
return (function (){
var s__29402__$1 = s__29402;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__29402__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var map__29407 = cljs.core.first(xs__6012__auto__);
var map__29407__$1 = ((((!((map__29407 == null)))?(((((map__29407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29407.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29407):map__29407);
var src = map__29407__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29407__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29407__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4288__auto__ = ((function (s__29402__$1,map__29407,map__29407__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__29399,map__29399__$1,sources,compiled,map__29397,map__29397__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$node$build_complete_$_iter__29401_$_iter__29403(s__29404){
return (new cljs.core.LazySeq(null,((function (s__29402__$1,map__29407,map__29407__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__29399,map__29399__$1,sources,compiled,map__29397,map__29397__$1,msg,info,reload_info){
return (function (){
var s__29404__$1 = s__29404;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__29404__$1);
if(temp__5457__auto____$1){
var s__29404__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__29404__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__29404__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__29406 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__29405 = (0);
while(true){
if((i__29405 < size__4291__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__29405);
cljs.core.chunk_append(b__29406,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__29421 = (i__29405 + (1));
i__29405 = G__29421;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29406),shadow$cljs$devtools$client$node$build_complete_$_iter__29401_$_iter__29403(cljs.core.chunk_rest(s__29404__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29406),null);
}
} else {
var warning = cljs.core.first(s__29404__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$node$build_complete_$_iter__29401_$_iter__29403(cljs.core.rest(s__29404__$2)));
}
} else {
return null;
}
break;
}
});})(s__29402__$1,map__29407,map__29407__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__29399,map__29399__$1,sources,compiled,map__29397,map__29397__$1,msg,info,reload_info))
,null,null));
});})(s__29402__$1,map__29407,map__29407__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__29399,map__29399__$1,sources,compiled,map__29397,map__29397__$1,msg,info,reload_info))
;
var fs__4289__auto__ = cljs.core.seq(iterys__4288__auto__(warnings));
if(fs__4289__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4289__auto__,shadow$cljs$devtools$client$node$build_complete_$_iter__29401(cljs.core.rest(s__29402__$1)));
} else {
var G__29422 = cljs.core.rest(s__29402__$1);
s__29402__$1 = G__29422;
continue;
}
} else {
var G__29423 = cljs.core.rest(s__29402__$1);
s__29402__$1 = G__29423;
continue;
}
} else {
return null;
}
break;
}
});})(map__29399,map__29399__$1,sources,compiled,map__29397,map__29397__$1,msg,info,reload_info))
,null,null));
});})(map__29399,map__29399__$1,sources,compiled,map__29397,map__29397__$1,msg,info,reload_info))
;
return iter__4292__auto__(sources);
})()));
if(((shadow.cljs.devtools.client.env.autoload) && (((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))))){
var map__29409 = info;
var map__29409__$1 = ((((!((map__29409 == null)))?(((((map__29409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29409.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29409):map__29409);
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29409__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29409__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var files_to_require = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"output-name","output-name",-1769107767),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__29409,map__29409__$1,sources__$1,compiled__$1,map__29399,map__29399__$1,sources,compiled,warnings,map__29397,map__29397__$1,msg,info,reload_info){
return (function (p__29411){
var map__29412 = p__29411;
var map__29412__$1 = ((((!((map__29412 == null)))?(((((map__29412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29412):map__29412);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29412__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29412__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(compiled__$1,resource_id)) || (cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)));
});})(map__29409,map__29409__$1,sources__$1,compiled__$1,map__29399,map__29399__$1,sources,compiled,warnings,map__29397,map__29397__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__29409,map__29409__$1,sources__$1,compiled__$1,map__29399,map__29399__$1,sources,compiled,warnings,map__29397,map__29397__$1,msg,info,reload_info){
return (function (p__29414){
var map__29415 = p__29414;
var map__29415__$1 = ((((!((map__29415 == null)))?(((((map__29415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29415.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29415):map__29415);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29415__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__29409,map__29409__$1,sources__$1,compiled__$1,map__29399,map__29399__$1,sources,compiled,warnings,map__29397,map__29397__$1,msg,info,reload_info))
,sources__$1))));
if(cljs.core.seq(files_to_require)){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$2(msg,((function (map__29409,map__29409__$1,sources__$1,compiled__$1,files_to_require,map__29399,map__29399__$1,sources,compiled,warnings,map__29397,map__29397__$1,msg,info,reload_info){
return (function (){
var seq__29417 = cljs.core.seq(files_to_require);
var chunk__29418 = null;
var count__29419 = (0);
var i__29420 = (0);
while(true){
if((i__29420 < count__29419)){
var src = chunk__29418.cljs$core$IIndexed$_nth$arity$2(null,i__29420);
shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.node.closure_import(src);


var G__29424 = seq__29417;
var G__29425 = chunk__29418;
var G__29426 = count__29419;
var G__29427 = (i__29420 + (1));
seq__29417 = G__29424;
chunk__29418 = G__29425;
count__29419 = G__29426;
i__29420 = G__29427;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__29417);
if(temp__5457__auto__){
var seq__29417__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29417__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__29417__$1);
var G__29428 = cljs.core.chunk_rest(seq__29417__$1);
var G__29429 = c__4319__auto__;
var G__29430 = cljs.core.count(c__4319__auto__);
var G__29431 = (0);
seq__29417 = G__29428;
chunk__29418 = G__29429;
count__29419 = G__29430;
i__29420 = G__29431;
continue;
} else {
var src = cljs.core.first(seq__29417__$1);
shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.node.closure_import(src);


var G__29432 = cljs.core.next(seq__29417__$1);
var G__29433 = null;
var G__29434 = (0);
var G__29435 = (0);
seq__29417 = G__29432;
chunk__29418 = G__29433;
count__29419 = G__29434;
i__29420 = G__29435;
continue;
}
} else {
return null;
}
}
break;
}
});})(map__29409,map__29409__$1,sources__$1,compiled__$1,files_to_require,map__29399,map__29399__$1,sources,compiled,warnings,map__29397,map__29397__$1,msg,info,reload_info))
);
} else {
return null;
}
} else {
return null;
}
});
shadow.cljs.devtools.client.node.process_message = (function shadow$cljs$devtools$client$node$process_message(p__29436){
var map__29437 = p__29436;
var map__29437__$1 = ((((!((map__29437 == null)))?(((((map__29437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29437.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29437):map__29437);
var msg = map__29437__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29437__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__29439 = type;
var G__29439__$1 = (((G__29439 instanceof cljs.core.Keyword))?G__29439.fqn:null);
switch (G__29439__$1) {
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
}catch (e29441){var e = e29441;
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
