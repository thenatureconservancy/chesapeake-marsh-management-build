(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f92628b"],{"785c":function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return L}));var s=r("a4ee"),o=(r("e06a"),r("4856")),i=(r("b423"),r("261a"),r("b48d"),r("478c"),r("76b7"),r("667b"),r("ff57"),r("da00"),r("f976"),r("5cdb")),n=r("b2b2"),a=r("e694"),u=r("e041"),p=r("59b2"),c=(r("b50f"),r("c120")),l=(r("cea0"),r("d386")),d=r("74e2"),b=r("a6a3"),y=r("ce50"),h=r("6d5f"),O=r("e92d"),f=r("f4cc"),j=r("dfa0"),m=r("88d1"),g=r("2edc"),v=r("3af1"),S=r("1219");const F=O["a"].getLogger("esri.layers.graphics.sources.GeoJSONSource");let I=class extends h["a"]{constructor(){super(...arguments),this.type="geojson",this.refresh=Object(f["f"])(async e=>{await this.load();const{extent:t,timeExtent:r}=await this._connection.invoke("refresh",e);return this.sourceJSON.extent=t,r&&(this.sourceJSON.timeInfo.timeExtent=[r.start,r.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}})}load(e){const t=Object(n["k"])(e)?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){var e;null!=(e=this._connection)&&e.close(),this._connection=null}applyEdits(e){return this.load().then(()=>this._applyEdits(e))}openPorts(){return this.load().then(()=>this._connection.openPorts())}queryFeatures(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t)).then(e=>g["default"].fromJSON(e))}queryFeaturesJSON(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t))}queryFeatureCount(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t))}queryObjectIds(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryObjectIds",e?e.toJSON():null,t))}queryExtent(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryExtent",e?e.toJSON():null,t)).then(e=>({count:e.count,extent:v["a"].fromJSON(e.extent)}))}querySnapping(e,t={}){return this.load(t).then(()=>this._connection.invoke("querySnapping",e,t))}_applyEdits(e){if(!this._connection)throw new y["a"]("geojson-layer-source:edit-failure","Memory source not loaded");const t=this.layer.objectIdField,r=[],s=[],o=[];if(e.addFeatures)for(const i of e.addFeatures)r.push(this._serializeFeature(i));if(e.deleteFeatures)for(const i of e.deleteFeatures)"objectId"in i&&null!=i.objectId?s.push(i.objectId):"attributes"in i&&null!=i.attributes[t]&&s.push(i.attributes[t]);if(e.updateFeatures)for(const i of e.updateFeatures)o.push(this._serializeFeature(i));return this._connection.invoke("applyEdits",{adds:r,updates:o,deletes:s}).then(({extent:e,timeExtent:t,featureEditResults:r})=>(this.sourceJSON.extent=e,t&&(this.sourceJSON.timeInfo.timeExtent=[t.start,t.end]),this._createEditsResult(r)))}_createEditsResult(e){return{addFeatureResults:e.addResults?e.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:e.updateResults?e.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:e.deleteResults?e.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}_createFeatureEditResult(e){const t=!0===e.success?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new y["a"]("geojson-layer-source:edit-failure",t.description,{code:t.code}):null}}_serializeFeature(e){const{attributes:t}=e,r=this._geometryForSerialization(e);return r?{geometry:r.toJSON(),attributes:t}:{attributes:t}}_geometryForSerialization(e){const{geometry:t}=e;return Object(n["j"])(t)?null:"mesh"===t.type||"extent"===t.type?S["a"].fromExtent(t.extent):t}async _startWorker(e){this._connection=await Object(j["b"])("GeoJSONSourceWorker",{strategy:Object(c["a"])("feature-layers-workers")?"dedicated":"local",signal:e});const{fields:t,spatialReference:r,hasZ:s,geometryType:o,objectIdField:i,url:n,timeInfo:a,customParameters:u}=this.layer,p="defaults"===this.layer.originOf("spatialReference"),l={url:n,customParameters:u,fields:t&&t.map(e=>e.toJSON()),geometryType:d["a"].toJSON(o),hasZ:s,objectIdField:i,timeInfo:a?a.toJSON():null,spatialReference:p?null:r&&r.toJSON()},b=await this._connection.invoke("load",l,{signal:e});for(const c of b.warnings)F.warn(c.message,{layer:this.layer,warning:c});b.featureErrors.length&&F.warn(`Encountered ${b.featureErrors.length} validation errors while loading features`,b.featureErrors),this.sourceJSON=b.layerDefinition,this.capabilities=Object(m["a"])(this.sourceJSON.hasZ,!0)}};Object(s["a"])([Object(p["b"])()],I.prototype,"capabilities",void 0),Object(s["a"])([Object(p["b"])()],I.prototype,"type",void 0),Object(s["a"])([Object(p["b"])({constructOnly:!0})],I.prototype,"layer",void 0),Object(s["a"])([Object(p["b"])()],I.prototype,"sourceJSON",void 0),I=Object(s["a"])([Object(l["a"])("esri.layers.graphics.sources.GeoJSONSource")],I);var x=r("997b"),E=r("8b28"),R=r("662d"),w=r("b911"),_=r("d9fd"),J=r("8e17"),N=r("5a62"),P=r("601a"),q=r("22f4"),k=r("05b7"),C=r("ace4"),T=r("a2b1"),D=r("a1f3"),Q=r("2feb"),G=r("c1da"),A=r("c246"),z=r("10eb"),M=r("69dd"),B=r("f51b"),$=r("5996");const U=Object(Q["a"])();let Z=class extends(Object(_["a"])(Object(E["a"])(Object(R["a"])(Object(x["a"])(Object(P["a"])(Object(N["a"])(Object(J["a"])(Object(w["a"])(Object(a["a"])(b["a"])))))))))){constructor(e){super(e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.editingEnabled=!1,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="GeoJSON",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new I({layer:this}),this.spatialReference=$["a"].WGS84,this.templates=null,this.title="GeoJSON",this.type="geojson",this.typeIdField=null,this.types=null}destroy(){var e;null==(e=this.source)||e.destroy()}load(e){return this.addResolvingPromise(this.source.load(e).then(()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo"],"service"),Object(G["k"])(this.renderer,this.fieldsIndex),Object(G["l"])(this.timeInfo,this.fieldsIndex)})),Promise.resolve(this)}get capabilities(){return this.source?this.source.capabilities:null}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}get isTable(){return this.loaded&&null==this.geometryType}get parsedUrl(){return this.url?Object(u["M"])(this.url):null}set renderer(e){Object(G["k"])(e,this.fieldsIndex),this._set("renderer",e)}set url(e){if(!e)return void this._set("url",e);const t=Object(u["M"])(e);this._set("url",t.path),t.query&&(this.customParameters={...this.customParameters,...t.query})}async applyEdits(e,t){const s=await r.e("chunk-2d0a4c1e").then(r.bind(null,"0899"));await this.load();const o=await s.applyEdits(this,this.source,e,t);return this.read({extent:this.source.sourceJSON.extent,timeInfo:this.source.sourceJSON.timeInfo},{origin:"service",ignoreDefaults:!0}),o}on(e,t){return super.on(e,t)}createPopupTemplate(e){return Object(B["a"])(this,e)}createQuery(){const e=new M["a"],t=this.get("capabilities.data");e.returnGeometry=!0,t&&t.supportsZ&&(e.returnZ=!0),e.outFields=["*"],e.where=this.definitionExpression||"1=1";const{timeOffset:r,timeExtent:s}=this;return e.timeExtent=null!=r&&null!=s?s.offset(-r.value,r.unit):s||null,e}getFieldDomain(e,t){let r,s=!1;const o=t&&t.feature,i=o&&o.attributes,n=this.typeIdField&&i&&i[this.typeIdField];return null!=n&&this.types&&(s=this.types.some(t=>t.id==n&&(r=t.domains&&t.domains[e],r&&"inherited"===r.type&&(r=this._getLayerDomain(e)),!0))),s||r||(r=this._getLayerDomain(e)),r}getField(e){return this.fieldsIndex.get(e)}queryFeatures(e,t){return this.load().then(()=>this.source.queryFeatures(M["a"].from(e)||this.createQuery(),t)).then(e=>{if(null!=e&&e.features)for(const t of e.features)t.layer=t.sourceLayer=this;return e})}queryObjectIds(e,t){return this.load().then(()=>this.source.queryObjectIds(M["a"].from(e)||this.createQuery(),t))}queryFeatureCount(e,t){return this.load().then(()=>this.source.queryFeatureCount(M["a"].from(e)||this.createQuery(),t))}queryExtent(e,t){return this.load().then(()=>this.source.queryExtent(M["a"].from(e)||this.createQuery(),t))}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh(this.customParameters);return Object(n["k"])(t)&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}_getLayerDomain(e){if(!this.fields)return null;let t=null;return this.fields.some(r=>(r.name===e&&(t=r.domain),!!t)),t}};Object(s["a"])([Object(p["b"])({readOnly:!0,json:{read:!1,write:!1}})],Z.prototype,"capabilities",null),Object(s["a"])([Object(p["b"])({type:String})],Z.prototype,"copyright",void 0),Object(s["a"])([Object(p["b"])({readOnly:!0})],Z.prototype,"createQueryVersion",null),Object(s["a"])([Object(p["b"])({readOnly:!0})],Z.prototype,"defaultPopupTemplate",null),Object(s["a"])([Object(p["b"])({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],Z.prototype,"definitionExpression",void 0),Object(s["a"])([Object(p["b"])({type:String})],Z.prototype,"displayField",void 0),Object(s["a"])([Object(p["b"])({type:Boolean})],Z.prototype,"editingEnabled",void 0),Object(s["a"])([Object(p["b"])(q["b"])],Z.prototype,"elevationInfo",void 0),Object(s["a"])([Object(p["b"])(k["a"])],Z.prototype,"featureReduction",void 0),Object(s["a"])([Object(p["b"])({type:[D["a"]],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],Z.prototype,"fields",void 0),Object(s["a"])([Object(p["b"])(U.fieldsIndex)],Z.prototype,"fieldsIndex",void 0),Object(s["a"])([Object(p["b"])({type:v["a"],json:{name:"extent"}})],Z.prototype,"fullExtent",void 0),Object(s["a"])([Object(p["b"])({type:["point","polygon","polyline","multipoint"],json:{read:{reader:d["a"].read}}})],Z.prototype,"geometryType",void 0),Object(s["a"])([Object(p["b"])({type:Boolean})],Z.prototype,"hasZ",void 0),Object(s["a"])([Object(p["b"])(q["c"])],Z.prototype,"id",void 0),Object(s["a"])([Object(p["b"])({type:Boolean,readOnly:!0})],Z.prototype,"isTable",null),Object(s["a"])([Object(p["b"])(q["d"])],Z.prototype,"labelsVisible",void 0),Object(s["a"])([Object(p["b"])({type:[A["a"]],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:z["a"]},write:!0}})],Z.prototype,"labelingInfo",void 0),Object(s["a"])([Object(p["b"])(q["e"])],Z.prototype,"legendEnabled",void 0),Object(s["a"])([Object(p["b"])({type:["show","hide"]})],Z.prototype,"listMode",void 0),Object(s["a"])([Object(p["b"])({type:String,json:{name:"layerDefinition.objectIdField",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"objectIdField"}}}})],Z.prototype,"objectIdField",void 0),Object(s["a"])([Object(p["b"])(q["i"])],Z.prototype,"opacity",void 0),Object(s["a"])([Object(p["b"])({type:["GeoJSON"]})],Z.prototype,"operationalLayerType",void 0),Object(s["a"])([Object(p["b"])({readOnly:!0})],Z.prototype,"parsedUrl",null),Object(s["a"])([Object(p["b"])(q["k"])],Z.prototype,"popupEnabled",void 0),Object(s["a"])([Object(p["b"])({type:o["a"],json:{name:"popupInfo",write:!0}})],Z.prototype,"popupTemplate",void 0),Object(s["a"])([Object(p["b"])({types:i["a"],json:{name:"layerDefinition.drawingInfo.renderer",write:!0,origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:i["b"]}}}})],Z.prototype,"renderer",null),Object(s["a"])([Object(p["b"])(q["n"])],Z.prototype,"screenSizePerspectiveEnabled",void 0),Object(s["a"])([Object(p["b"])({readOnly:!0})],Z.prototype,"source",void 0),Object(s["a"])([Object(p["b"])({type:$["a"]})],Z.prototype,"spatialReference",void 0),Object(s["a"])([Object(p["b"])({type:[C["a"]]})],Z.prototype,"templates",void 0),Object(s["a"])([Object(p["b"])()],Z.prototype,"title",void 0),Object(s["a"])([Object(p["b"])({json:{read:!1},readOnly:!0})],Z.prototype,"type",void 0),Object(s["a"])([Object(p["b"])({type:String,readOnly:!0})],Z.prototype,"typeIdField",void 0),Object(s["a"])([Object(p["b"])({type:[T["a"]]})],Z.prototype,"types",void 0),Object(s["a"])([Object(p["b"])(q["o"])],Z.prototype,"url",null),Z=Object(s["a"])([Object(l["a"])("esri.layers.GeoJSONLayer")],Z);const L=Z},"88d1":function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return c})),r.d(t,"c",(function(){return l})),r.d(t,"d",(function(){return a}));var s=r("c120"),o=r("7ffa"),i=r("a94c"),n=r("8246");function a(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?n["c"]:"esriGeometryPolyline"===e?n["e"]:n["d"]}}}const u=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let p=1;function c(e,t){if(Object(s["a"])("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let r=`this.${t} = null;`;for(const t in e)r+=`this${u.test(t)?"."+t:`["${t}"]`} = ${JSON.stringify(e[t])};`;const s=new Function(`\n      return class AttributesClass$${p++} {\n        constructor() {\n          ${r};\n        }\n      }\n    `)();return()=>new s}catch(r){return()=>({[t]:null,...e})}}function l(e={}){return[{name:"New Feature",description:"",prototype:{attributes:Object(o["a"])(e)}}]}function d(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0},query:i["a"],queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}},a94c:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));const s={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}}}]);
//# sourceMappingURL=chunk-1f92628b.c56ea458.js.map