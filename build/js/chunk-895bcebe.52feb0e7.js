(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-895bcebe","chunk-2d22611c"],{2698:function(e,t,r){"use strict";function o(e){return e&&"getAtOrigin"in e&&"originOf"in e}r.d(t,"a",(function(){return o}))},"5d34":function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return u})),r.d(t,"c",(function(){return c})),r.d(t,"d",(function(){return b}));var o=r("a4ee"),a=r("6a0e"),s=r("59b2"),n=(r("b50f"),r("c120"),r("cea0"),r("448d")),i=r("d386");let c=class extends a["a"]{constructor(){super(...arguments),this.nodesPerPage=null,this.rootIndex=0,this.lodSelectionMetricType=null}};Object(o["a"])([Object(s["b"])({type:Number})],c.prototype,"nodesPerPage",void 0),Object(o["a"])([Object(s["b"])({type:Number})],c.prototype,"rootIndex",void 0),Object(o["a"])([Object(s["b"])({type:String})],c.prototype,"lodSelectionMetricType",void 0),c=Object(o["a"])([Object(i["a"])("esri.layer.support.I3SNodePageDefinition")],c);let l=class extends a["a"]{constructor(){super(...arguments),this.factor=1}};Object(o["a"])([Object(s["b"])({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],l.prototype,"id",void 0),Object(o["a"])([Object(s["b"])({type:Number})],l.prototype,"factor",void 0),l=Object(o["a"])([Object(i["a"])("esri.layer.support.I3SMaterialTexture")],l);let p=class extends a["a"]{constructor(){super(...arguments),this.baseColorFactor=[1,1,1,1],this.baseColorTexture=null,this.metallicRoughnessTexture=null,this.metallicFactor=1,this.roughnessFactor=1}};Object(o["a"])([Object(s["b"])({type:[Number]})],p.prototype,"baseColorFactor",void 0),Object(o["a"])([Object(s["b"])({type:l})],p.prototype,"baseColorTexture",void 0),Object(o["a"])([Object(s["b"])({type:l})],p.prototype,"metallicRoughnessTexture",void 0),Object(o["a"])([Object(s["b"])({type:Number})],p.prototype,"metallicFactor",void 0),Object(o["a"])([Object(s["b"])({type:Number})],p.prototype,"roughnessFactor",void 0),p=Object(o["a"])([Object(i["a"])("esri.layer.support.I3SMaterialPBRMetallicRoughness")],p);let u=class extends a["a"]{constructor(){super(...arguments),this.alphaMode="opaque",this.alphaCutoff=.25,this.doubleSided=!1,this.cullFace="none",this.normalTexture=null,this.occlusionTexture=null,this.emissiveTexture=null,this.emissiveFactor=null,this.pbrMetallicRoughness=null}};Object(o["a"])([Object(n["a"])({opaque:"opaque",mask:"mask",blend:"blend"})],u.prototype,"alphaMode",void 0),Object(o["a"])([Object(s["b"])({type:Number})],u.prototype,"alphaCutoff",void 0),Object(o["a"])([Object(s["b"])({type:Boolean})],u.prototype,"doubleSided",void 0),Object(o["a"])([Object(n["a"])({none:"none",back:"back",front:"front"})],u.prototype,"cullFace",void 0),Object(o["a"])([Object(s["b"])({type:l})],u.prototype,"normalTexture",void 0),Object(o["a"])([Object(s["b"])({type:l})],u.prototype,"occlusionTexture",void 0),Object(o["a"])([Object(s["b"])({type:l})],u.prototype,"emissiveTexture",void 0),Object(o["a"])([Object(s["b"])({type:[Number]})],u.prototype,"emissiveFactor",void 0),Object(o["a"])([Object(s["b"])({type:p})],u.prototype,"pbrMetallicRoughness",void 0),u=Object(o["a"])([Object(i["a"])("esri.layer.support.I3SMaterialDefinition")],u);let d=class extends a["a"]{};Object(o["a"])([Object(s["b"])({type:String,json:{read:{source:["name","index"],reader:(e,t)=>null!=e?e:""+t.index}}})],d.prototype,"name",void 0),Object(o["a"])([Object(n["a"])({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2",ktx2:"ktx2",basis:"basis"})],d.prototype,"format",void 0),d=Object(o["a"])([Object(i["a"])("esri.layer.support.I3STextureFormat")],d);let b=class extends a["a"]{constructor(){super(...arguments),this.atlas=!1}};Object(o["a"])([Object(s["b"])({type:[d]})],b.prototype,"formats",void 0),Object(o["a"])([Object(s["b"])({type:Boolean})],b.prototype,"atlas",void 0),b=Object(o["a"])([Object(i["a"])("esri.layer.support.I3STextureSetDefinition")],b);let h=class extends a["a"]{};Object(o["a"])([Object(n["a"])({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],h.prototype,"type",void 0),Object(o["a"])([Object(s["b"])({type:Number})],h.prototype,"component",void 0),h=Object(o["a"])([Object(i["a"])("esri.layer.support.I3SGeometryAttribute")],h);let y=class extends a["a"]{};Object(o["a"])([Object(n["a"])({draco:"draco"})],y.prototype,"encoding",void 0),Object(o["a"])([Object(s["b"])({type:[String]})],y.prototype,"attributes",void 0),y=Object(o["a"])([Object(i["a"])("esri.layer.support.I3SGeometryCompressedAttributes")],y);let f=class extends a["a"]{constructor(){super(...arguments),this.offset=0}};Object(o["a"])([Object(s["b"])({type:Number})],f.prototype,"offset",void 0),Object(o["a"])([Object(s["b"])({type:h})],f.prototype,"position",void 0),Object(o["a"])([Object(s["b"])({type:h})],f.prototype,"normal",void 0),Object(o["a"])([Object(s["b"])({type:h})],f.prototype,"uv0",void 0),Object(o["a"])([Object(s["b"])({type:h})],f.prototype,"color",void 0),Object(o["a"])([Object(s["b"])({type:h})],f.prototype,"uvRegion",void 0),Object(o["a"])([Object(s["b"])({type:h})],f.prototype,"featureId",void 0),Object(o["a"])([Object(s["b"])({type:h})],f.prototype,"faceRange",void 0),Object(o["a"])([Object(s["b"])({type:y})],f.prototype,"compressedAttributes",void 0),f=Object(o["a"])([Object(i["a"])("esri.layer.support.I3SGeometryBuffer")],f);let m=class extends a["a"]{};Object(o["a"])([Object(n["a"])({triangle:"triangle"})],m.prototype,"topology",void 0),Object(o["a"])([Object(s["b"])()],m.prototype,"geometryBuffers",void 0),m=Object(o["a"])([Object(i["a"])("esri.layer.support.I3SGeometryDefinition")],m)},"6e36":function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var o=r("2eab"),a=r("ce50"),s=r("b2b2");async function n(e,t,r,n,i,c){let l=null;if(Object(s["k"])(r)){const t=e+"/nodepages/",a=t+Math.floor(r.rootIndex/r.nodesPerPage);try{return{type:"page",rootPage:(await Object(o["default"])(a,{query:{f:"json",token:n},responseType:"json",signal:c})).data,rootIndex:r.rootIndex,pageSize:r.nodesPerPage,lodMetric:r.lodSelectionMetricType,urlPrefix:t}}catch(d){Object(s["k"])(i)&&i.warn("#fetchIndexInfo()","Failed to load root node page. Falling back to node documents.",a,d),l=d}}if(!t)return null;const p=e+"/nodes/",u=p+(t&&t.split("/").pop());try{return{type:"node",rootNode:(await Object(o["default"])(u,{query:{f:"json",token:n},responseType:"json",signal:c})).data,urlPrefix:p}}catch(d){throw new a["a"]("sceneservice:root-node-missing","Root node missing.",{pageError:l,nodeError:d,url:u})}}},"7eab":function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));const o={analytics:{supportsCacheHint:!1},attachment:{supportsContentType:!1,supportsExifInfo:!1,supportsKeywords:!1,supportsName:!1,supportsSize:!1,supportsCacheHint:!1,supportsResize:!1},data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},query:{maxRecordCount:0,maxRecordCountFactor:0,standardMaxRecordCount:0,supportsCacheHint:!1,supportsCentroid:!1,supportsCompactGeometry:!1,supportsDefaultSpatialReference:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsSqlExpression:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsStatistics:!1,tileMaxRecordCount:0}}},"96ae":function(e,t,r){"use strict";r.d(t,"a",(function(){return k})),r.d(t,"b",(function(){return A}));var o=r("a4ee"),a=r("2eab"),s=r("ce50"),n=(r("c120"),r("e92d")),i=r("b2b2"),c=r("f4cc"),l=r("e041"),p=r("59b2"),u=(r("b50f"),r("cea0"),r("afcf")),d=r("d386"),b=r("09db"),h=r("ca81"),y=r("3af1"),f=r("e64d"),m=r("5996"),O=r("54b4"),j=r("22f4"),v=r("6e36"),g=r("0224"),S=r("a7e1"),w=r("792b"),I=r("8eed"),x=r("e6a6");async function R(e,t,r){if(!t||!t.resources)return;const o=t.portalItem===e.portalItem?new Set(e.paths):new Set;e.paths.length=0,e.portalItem=t.portalItem;const a=new Set(t.resources.toKeep.map(e=>e.resource.path)),n=new Set,i=[];a.forEach(t=>{o.delete(t),e.paths.push(t)});for(const s of t.resources.toUpdate)if(o.delete(s.resource.path),a.has(s.resource.path)||n.has(s.resource.path)){const{resource:t,content:o,finish:a,error:n}=s,c=Object(x["getSiblingOfSameTypeI"])(t,Object(I["a"])());e.paths.push(c.path),i.push(_({resource:c,content:o,finish:a,error:n},r))}else e.paths.push(s.resource.path),i.push(P(s,r)),n.add(s.resource.path);for(const s of t.resources.toAdd)i.push(_(s,r)),e.paths.push(s.resource.path);if(o.forEach(e=>{const r=t.portalItem.resourceFromPath(e);i.push(r.portalItem.removeResource(r).catch(()=>{}))}),0===i.length)return;const l=await Object(c["g"])(i);Object(c["p"])(r);const p=l.filter(e=>"error"in e).map(e=>e.error);if(p.length>0)throw new s["a"]("save:resources","Failed to save one or more resources",{errors:p})}async function _(e,t){const r=await Object(w["c"])(e.resource.portalItem.addResource(e.resource,e.content,t));if(!0!==r.ok)throw e.error&&e.error(r.error),r.error;e.finish&&e.finish(e.resource)}async function P(e,t){const r=await Object(w["c"])(e.resource.update(e.content,t));if(!0!==r.ok)throw e.error(r.error),r.error;e.finish(e.resource)}const T=n["a"].getLogger("esri.layers.mixins.SceneService"),A=e=>{let t=class extends e{constructor(){super(...arguments),this.spatialReference=null,this.fullExtent=null,this.heightModelInfo=null,this.minScale=0,this.maxScale=0,this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.copyright=null,this.sublayerTitleMode="item-title",this.title=null,this.layerId=null,this.indexInfo=null,this._debouncedSaveOperations=Object(c["f"])(async(e,t,r)=>{switch(e){case k.SAVE:return this._save(t);case k.SAVE_AS:return this._saveAs(r,t)}})}readSpatialReference(e,t){return this._readSpatialReference(t)}_readSpatialReference(e){if(null!=e.spatialReference)return m["a"].fromJSON(e.spatialReference);{const t=e.store,r=t.indexCRS||t.geographicCRS,o=r&&parseInt(r.substring(r.lastIndexOf("/")+1,r.length),10);return null!=o?new m["a"](o):null}}readFullExtent(e,t,r){if(null!=e&&"object"==typeof e){const o=null==e.spatialReference?{...e,spatialReference:this._readSpatialReference(t)}:e;return y["a"].fromJSON(o,r)}const o=t.store,a=this._readSpatialReference(t);return null==a||null==o||null==o.extent||!Array.isArray(o.extent)||o.extent.some(e=>e<U)?null:new y["a"]({xmin:o.extent[0],ymin:o.extent[1],xmax:o.extent[2],ymax:o.extent[3],spatialReference:a})}parseVersionString(e){const t={major:Number.NaN,minor:Number.NaN,versionString:e},r=e.split(".");return r.length>=2&&(t.major=parseInt(r[0],10),t.minor=parseInt(r[1],10)),t}readVersion(e,t){const r=t.store,o=null!=r.version?r.version.toString():"";return this.parseVersionString(o)}readTitlePortalItem(e){return"item-title"!==this.sublayerTitleMode?void 0:e}readTitleService(e,t){const r=this.portalItem&&this.portalItem.title;if("item-title"===this.sublayerTitleMode)return Object(O["i"])(this.url,t.name);let o=t.name;if(!o&&this.url){const e=Object(O["e"])(this.url);Object(i["k"])(e)&&(o=e.title)}return"item-title-and-service-name"===this.sublayerTitleMode&&r&&(o=r+" - "+o),Object(O["a"])(o)}set url(e){const t=Object(O["h"])({layer:this,url:e,nonStandardUrlAllowed:!1,logger:T});this._set("url",t.url),null!=t.layerId&&this._set("layerId",t.layerId)}writeUrl(e,t,r,o){Object(O["j"])(this,e,"layers",t,o)}get parsedUrl(){const e=this._get("url");if(!e)return null;const t=Object(l["M"])(e);return null!=this.layerId&&(t.path=`${t.path}/layers/${this.layerId}`),t}async _fetchIndexAndUpdateExtent(e,t){this.indexInfo=Object(v["a"])(this.parsedUrl.path,this.rootNode,e,this.apiKey,T,t),null==this.fullExtent||this.fullExtent.hasZ||this._updateExtent(await this.indexInfo)}_updateExtent(e){if("page"===(null==e?void 0:e.type)){var t,r;const o=e.rootIndex%e.pageSize,a=null==(t=e.rootPage)||null==(r=t.nodes)?void 0:r[o];if(null==a||null==a.obb||null==a.obb.center||null==a.obb.halfSize)throw new s["a"]("sceneservice:invalid-node-page","Invalid node page.");if(a.obb.center[0]<U||null==this.fullExtent||this.fullExtent.hasZ)return;const n=a.obb.halfSize,i=a.obb.center[2],c=Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);this.fullExtent.zmin=i-c,this.fullExtent.zmax=i+c}else if("node"===(null==e?void 0:e.type)){var o;const t=null==(o=e.rootNode)?void 0:o.mbs;if(!Array.isArray(t)||4!==t.length||t[0]<U)return;const r=t[2],a=t[3];this.fullExtent.zmin=r-a,this.fullExtent.zmax=r+a}}async _fetchService(e){if(null==this.url)throw new s["a"]("sceneservice:url-not-set","Scene service can not be loaded without valid portal item or url");if(null==this.layerId&&/SceneServer\/*$/i.test(this.url)){const t=await this._fetchFirstLayerId(e);null!=t&&(this.layerId=t)}return this._fetchServiceLayer(e)}async _fetchFirstLayerId(e){const t=await Object(a["default"])(this.url,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});if(t.data&&Array.isArray(t.data.layers)&&t.data.layers.length>0)return t.data.layers[0].id}async _fetchServiceLayer(e){const t=await Object(a["default"])(this.parsedUrl.path,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});t.ssl&&(this.url=this.url.replace(/^http:/i,"https:"));let r=!1;if(t.data.layerType&&"Voxel"===t.data.layerType&&(r=!0),r)return this._fetchVoxelServiceLayer();const o=t.data;this.read(o,{origin:"service",url:this.parsedUrl}),this.validateLayer(o)}async _fetchVoxelServiceLayer(e){const t=(await Object(a["default"])(this.parsedUrl.path+"/layer",{query:{f:"json",token:this.apiKey},responseType:"json",signal:e})).data;this.read(t,{origin:"service",url:this.parsedUrl}),this.validateLayer(t)}async _ensureLoadBeforeSave(){await this.load(),"beforeSave"in this&&"function"==typeof this.beforeSave&&await this.beforeSave()}validateLayer(e){}_updateTypeKeywords(e,t,r){e.typeKeywords||(e.typeKeywords=[]);const o=t.getTypeKeywords();for(const a of o)e.typeKeywords.push(a);e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter((e,t,r)=>r.indexOf(e)===t),r===N.newItem&&(e.typeKeywords=e.typeKeywords.filter(e=>"Hosted Service"!==e)))}async _saveAs(e,t){const r={...M,...t};let o=S["default"].from(e);o||(T.error("_saveAs(): requires a portal item parameter"),await Promise.reject(new s["a"]("sceneservice:portal-item-required","_saveAs() requires a portal item to save to"))),o.id&&(o=o.clone(),o.id=null);const a=o.portal||g["a"].getDefault();await this._ensureLoadBeforeSave(),o.type=E,o.portal=a;const n={origin:"portal-item",url:null,messages:[],portal:a,portalItem:o,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},i={layers:[this.write({},n)]};return await Promise.all(n.resources.pendingOperations),await this._validateAgainstJSONSchema(i,n,r),o.url=this.url,o.title||(o.title=this.title),this._updateTypeKeywords(o,r,N.newItem),await a._signIn(),await a.user.addItem({item:o,folder:r&&r.folder,data:i}),await R(this.resourceReferences,n,null),this.portalItem=o,Object(h["a"])(n),n.portalItem=o,o}async _save(e){const t={...M,...e};this.portalItem||(T.error("_save(): requires the .portalItem property to be set"),await Promise.reject(new s["a"]("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService"))),this.portalItem.type!==E&&(T.error("_save(): Non-matching portal item type. Got "+this.portalItem.type+", expected "+E),await Promise.reject(new s["a"]("sceneservice:portal-item-wrong-type",`Portal item needs to have type "${E}"`))),await this._ensureLoadBeforeSave();const r={origin:"portal-item",url:this.portalItem.itemUrl&&Object(l["M"])(this.portalItem.itemUrl),messages:[],portal:this.portalItem.portal||g["a"].getDefault(),portalItem:this.portalItem,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},o={layers:[this.write({},r)]};return await Promise.all(r.resources.pendingOperations),await this._validateAgainstJSONSchema(o,r,t),this.portalItem.url=this.url,this.portalItem.title||(this.portalItem.title=this.title),this._updateTypeKeywords(this.portalItem,t,N.existingItem),await this.portalItem.update({data:o}),await R(this.resourceReferences,r,null),Object(h["a"])(r),this.portalItem}async _validateAgainstJSONSchema(e,t,o){let a=t.messages.filter(e=>"error"===e.type).map(e=>new s["a"](e.name,e.message,e.details));if(o&&o.validationOptions.ignoreUnsupported&&(a=a.filter(e=>"layer:unsupported"!==e.name&&"symbol:unsupported"!==e.name&&"symbol-layer:unsupported"!==e.name&&"property:unsupported"!==e.name&&"url:unsupported"!==e.name&&"scenemodification:unsupported"!==e.name)),o.validationOptions.enabled||F){const t=(await r.e("chunk-2d209409").then(r.bind(null,"a7eb"))).validate(e,o.portalItemLayerType);if(t.length>0){const e="Layer item did not validate:\n"+t.join("\n");if(T.error("_validateAgainstJSONSchema(): "+e),"throw"===o.validationOptions.failPolicy){const e=t.map(e=>new s["a"]("sceneservice:schema-validation",e)).concat(a);throw new s["a"]("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{combined:e})}}}if(a.length>0)throw new s["a"]("sceneservice:save","Failed to save SceneService due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:a})}};return Object(o["a"])([Object(p["b"])(j["c"])],t.prototype,"id",void 0),Object(o["a"])([Object(p["b"])({type:m["a"]})],t.prototype,"spatialReference",void 0),Object(o["a"])([Object(u["a"])("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readSpatialReference",null),Object(o["a"])([Object(p["b"])({type:y["a"]})],t.prototype,"fullExtent",void 0),Object(o["a"])([Object(u["a"])("fullExtent",["fullExtent","store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readFullExtent",null),Object(o["a"])([Object(p["b"])({readOnly:!0,type:f["a"]})],t.prototype,"heightModelInfo",void 0),Object(o["a"])([Object(p["b"])({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],t.prototype,"minScale",void 0),Object(o["a"])([Object(p["b"])({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],t.prototype,"maxScale",void 0),Object(o["a"])([Object(p["b"])({readOnly:!0})],t.prototype,"version",void 0),Object(o["a"])([Object(u["a"])("version",["store.version"])],t.prototype,"readVersion",null),Object(o["a"])([Object(p["b"])({type:String,json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),Object(o["a"])([Object(p["b"])({type:String,json:{read:!1}})],t.prototype,"sublayerTitleMode",void 0),Object(o["a"])([Object(p["b"])({type:String})],t.prototype,"title",void 0),Object(o["a"])([Object(u["a"])("portal-item","title")],t.prototype,"readTitlePortalItem",null),Object(o["a"])([Object(u["a"])("service","title",["name"])],t.prototype,"readTitleService",null),Object(o["a"])([Object(p["b"])({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],t.prototype,"layerId",void 0),Object(o["a"])([Object(p["b"])(j["o"])],t.prototype,"url",null),Object(o["a"])([Object(b["a"])("url")],t.prototype,"writeUrl",null),Object(o["a"])([Object(p["b"])()],t.prototype,"parsedUrl",null),Object(o["a"])([Object(p["b"])({readOnly:!0})],t.prototype,"store",void 0),Object(o["a"])([Object(p["b"])({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],t.prototype,"rootNode",void 0),t=Object(o["a"])([Object(d["a"])("esri.layers.mixins.SceneService")],t),t},U=-1e38,F=!1;var N;!function(e){e[e.existingItem=0]="existingItem",e[e.newItem=1]="newItem"}(N||(N={}));const E="Scene Service",M={getTypeKeywords:()=>[],portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}};var k;!function(e){e[e.SAVE=0]="SAVE",e[e.SAVE_AS=1]="SAVE_AS"}(k||(k={}))},9980:function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var o=r("f7be"),a=r("2eab"),s=r("b2b2"),n=r("f4cc"),i=r("5bd5"),c=r("0224"),l=r("a7e1");class p{constructor(e,t,r,o){this.parsedUrl=e,this.portalItem=t,this.apiKey=r,this.signal=o,this.rootDocument=null;const a=this.parsedUrl.path.match(/^(.*)\/SceneServer\/layers\/([\d]*)\/?$/i);a&&(this.urlParts={root:a[1],layerId:parseInt(a[2],10)})}async fetch(){var e;if(!this.urlParts)return null;const t=null!=(e=this.portalItem)?e:await this._portalItemFromServiceItemId();if(Object(s["j"])(t))return this._loadFromUrl();const r=await this._findAndLoadRelatedPortalItem(t);return Object(s["j"])(r)?null:this._loadFeatureLayerFromPortalItem(r)}async fetchPortalItem(){var e;if(!this.urlParts)return null;const t=null!=(e=this.portalItem)?e:await this._portalItemFromServiceItemId();return Object(s["j"])(t)?null:this._findAndLoadRelatedPortalItem(t)}async _fetchRootDocument(){if(Object(s["k"])(this.rootDocument))return this.rootDocument;if(Object(s["j"])(this.urlParts))return this.rootDocument={},{};const e={query:{f:"json",token:this.apiKey},responseType:"json",signal:this.signal},t=this.urlParts.root+"/SceneServer";try{const r=await Object(a["default"])(t,e);this.rootDocument=r.data}catch{this.rootDocument={}}return this.rootDocument}async _fetchServiceOwningPortalUrl(){const e=null==o["b"]?void 0:o["b"].findServerInfo(this.parsedUrl.path);if(null!=e&&e.owningSystemUrl)return e.owningSystemUrl;const t=this.parsedUrl.path.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const e=(await Object(a["default"])(t,{query:{f:"json"},responseType:"json",signal:this.signal})).data.owningSystemUrl;if(e)return e}catch(r){Object(n["o"])(r)}return null}async _findAndLoadRelatedPortalItem(e){try{return(await e.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:this.signal})).find(e=>"Feature Service"===e.type)||null}catch(t){return Object(n["o"])(t),null}}async _loadFeatureLayerFromPortalItem(e){await e.load({signal:this.signal});const t=await this._findMatchingAssociatedSublayerUrl(e.url);return new i["default"]({url:t,portalItem:e}).load({signal:this.signal})}async _loadFromUrl(){const e=await this._findMatchingAssociatedSublayerUrl(this.urlParts.root+"/FeatureServer");return new i["default"]({url:e}).load({signal:this.signal})}async _findMatchingAssociatedSublayerUrl(e){const t=e.replace(/^(.*FeatureServer)(\/[\d]*\/?)?$/i,"$1"),r={query:{f:"json"},responseType:"json",authMode:"no-prompt",signal:this.signal},o=this.urlParts.layerId,s=this._fetchRootDocument(),n=Object(a["default"])(t,r),[i,c]=await Promise.all([n,s]),l=c&&c.layers,p=i.data&&i.data.layers;if(!Array.isArray(p))throw new Error("expected layers array");if(Array.isArray(l)){for(let a=0;a<Math.min(l.length,p.length);a++)if(l[a].id===o)return`${t}/${p[a].id}`}else if(o<p.length)return`${t}/${p[o].id}`;throw new Error("could not find matching associated sublayer")}async _portalItemFromServiceItemId(){const e=(await this._fetchRootDocument()).serviceItemId;if(!e)return null;const t=new l["default"]({id:e,apiKey:this.apiKey}),r=await this._fetchServiceOwningPortalUrl();Object(s["k"])(r)&&(t.portal=new c["a"]({url:r}));try{return t.load({signal:this.signal})}catch(o){return Object(n["o"])(o),null}}}},ca81:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var o=r("2698");function a(e){e&&e.writtenProperties&&e.writtenProperties.forEach(({target:e,propName:t,newOrigin:r})=>{Object(o["a"])(e)&&r&&e.originOf(t)!==r&&e.updateOrigin(t,r)})}},e6a6:function(e,t,r){"use strict";r.r(t),r.d(t,"addOrUpdateResource",(function(){return c})),r.d(t,"contentToBlob",(function(){return h})),r.d(t,"fetchResources",(function(){return i})),r.d(t,"getSiblingOfSameType",(function(){return y})),r.d(t,"getSiblingOfSameTypeI",(function(){return f})),r.d(t,"removeAllResources",(function(){return p})),r.d(t,"removeResource",(function(){return l})),r.d(t,"splitPrefixFileNameAndExtension",(function(){return d}));var o=r("2eab"),a=r("ce50"),s=r("b2b2"),n=r("e041");async function i(e,t={},r){await e.load(r);const o=Object(n["B"])(e.itemUrl,"resources"),{start:a=1,num:i=10,sortOrder:c="asc",sortField:l="created"}=t,p={query:{start:a,num:i,sortOrder:c,sortField:l,token:e.apiKey},signal:Object(s["i"])(r,"signal")},u=await e.portal._request(o,p);return{total:u.total,nextStart:u.nextStart,resources:u.resources.map(({created:t,size:r,resource:o})=>({created:new Date(t),size:r,resource:e.resourceFromPath(o)}))}}async function c(e,t,r,o){if(!e.hasPath())throw new a["a"](`portal-item-resource-${t}:invalid-path`,"Resource does not have a valid path");const i=e.portalItem;await i.load(o);const c=Object(n["B"])(i.userItemUrl,"add"===t?"addResources":"updateResources"),[l,p]=u(e.path),d=await h(r),b=new FormData;return l&&"."!==l&&b.append("resourcesPrefix",l),b.append("fileName",p),b.append("file",d,p),b.append("f","json"),Object(s["k"])(o)&&o.access&&b.append("access",o.access),await i.portal._request(c,{method:"post",body:b,signal:Object(s["i"])(o,"signal")}),e}async function l(e,t,r){if(!t.hasPath())throw new a["a"]("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(r);const o=Object(n["B"])(e.userItemUrl,"removeResources");await e.portal._request(o,{method:"post",query:{resource:t.path},signal:Object(s["i"])(r,"signal")}),t.portalItem=null}async function p(e,t){await e.load(t);const r=Object(n["B"])(e.userItemUrl,"removeResources");return e.portal._request(r,{method:"post",query:{deleteAll:!0},signal:Object(s["i"])(t,"signal")})}function u(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function d(e){const[t,r]=b(e),[o,a]=u(t);return[o,a,r]}function b(e){const t=Object(n["p"])(e);return Object(s["j"])(t)?[e,""]:[e.slice(0,e.length-t.length-1),"."+t]}async function h(e){return e instanceof Blob?e:(await Object(o["default"])(e.url,{responseType:"blob"})).data}function y(e,t){if(!e.hasPath())return null;const[r,,o]=d(e.path);return e.portalItem.resourceFromPath(Object(n["B"])(r,t+o))}function f(e,t){if(!e.hasPath())return null;const[r,,o]=d(e.path);return e.portalItem.resourceFromPath(Object(n["B"])(r,t+o))}}}]);
//# sourceMappingURL=chunk-895bcebe.52feb0e7.js.map