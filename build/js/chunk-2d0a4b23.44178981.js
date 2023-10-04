(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a4b23"],{"0816":function(e,t,n){"use strict";n.r(t),n.d(t,"registerFunctions",(function(){return R}));var a=n("5dfc"),r=n("0f90"),i=n("5eb8"),s=n("94dc"),l=n("e335"),o=n("a6ac"),c=n("a9e6"),u=n("89da"),f=n("2cad"),d=n("9c2d"),b=n("5db9"),m=n("60fd"),p=n("18df"),y=n("3802"),O=n("96af"),h=n("853c"),g=n("07c7"),w=n("92a7"),j=n("f4cc"),F=n("66a2"),I=n("5bd5"),E=n("a1f3");function D(e,t,n,a){if(1===a.length){if(Object(u["N"])(a[0]))return Object(w["a"])(e,a[0],-1);if(Object(u["P"])(a[0]))return Object(w["a"])(e,a[0].toArray(),-1)}return Object(w["a"])(e,a,-1)}async function N(e,t,n){const a=e.getVariables();if(a.length>0){const r=[];for(let e=0;e<a.length;e++){const i={name:a[e]};r.push(await t.evaluateIdentifier(n,i))}const i={};for(let e=0;e<a.length;e++)i[a[e]]=r[e];return e.parameters=i,e}return e}function A(e,t,n=null){for(const a in e)if(a.toLowerCase()===t.toLowerCase())return e[a];return n}function S(e){if(null===e)return null;const t={type:A(e,"type",""),name:A(e,"name","")};if("range"===t.type)t.range=A(e,"range",[]);else{t.codedValues=[];for(const n of A(e,"codedValues",[]))t.codedValues.push({name:A(n,"name",""),code:A(n,"code",null)})}return t}function x(e){if(null===e)return null;const t={},n=A(e,"wkt",null);null!==n&&(t.wkt=n);const a=A(e,"wkid",null);return null!==a&&(t.wkid=a),t}function T(e){if(null===e)return null;const t={hasZ:A(e,"hasz",!1),hasM:A(e,"hasm",!1)},n=A(e,"spatialreference",null);n&&(t.spatialReference=x(n));const a=A(e,"x",null);if(null!==a)return t.x=a,t.y=A(e,"y",null),t;const r=A(e,"rings",null);if(null!==r)return t.rings=r,t;const i=A(e,"paths",null);if(null!==i)return t.paths=i,t;const s=A(e,"points",null);if(null!==s)return t.points=s,t;for(const l of["xmin","xmax","ymin","ymax","zmin","zmax","mmin","mmax"]){const n=A(e,l,null);null!==n&&(t[l]=n)}return t}function $(e,t){for(const n of t)if(n===e)return!0;return!1}function C(e){return!!e.layerDefinition&&!!e.featureSet&&!1!==$(e.layerDefinition.geometryType,["","esriGeometryPoint","esriGeometryPolyline","esriGeometryPolygon","esriGeometryMultipoint","esriGeometryEnvelope"])&&null!==e.layerDefinition.objectIdField&&""!==e.layerDefinition.objectIdField&&!1!==Object(u["N"])(e.layerDefinition.fields)&&!1!==Object(u["N"])(e.featureSet.features)}function R(e){"async"===e.mode&&(e.functions.getuser=function(t,n){return e.standardFunctionAsync(t,n,async(e,n,i)=>{Object(u["R"])(i,1,2);let s=Object(u["d"])(i[1],""),o=!0===s;if(s=!0===s||!1===s?"":Object(u["J"])(s),i[0]instanceof a["a"]){let e=null;t.services&&t.services.portal&&(e=t.services.portal),e=Object(l["getPortal"])(i[0],e);const n=await Object(l["lookupUser"])(e,s,o);if(n){const e=JSON.parse(JSON.stringify(n));for(const t of["lastLogin","created","modified"])void 0!==e[t]&&null!==e[t]&&(e[t]=new Date(e[t]));return r["a"].convertObjectToArcadeDictionary(e)}return null}let c=null;if(Object(u["ab"])(i[0])&&(c=i[0]),c){if(o=!1,s)return null;await c.load();const e=await c.getOwningSystemUrl();if(!e){if(!s){const e=await c.getIdentityUser();return e?r["a"].convertObjectToArcadeDictionary({username:e}):null}return null}let n=null;t.services&&t.services.portal&&(n=t.services.portal),n=Object(l["getPortal"])(new a["a"](e),n);const i=await Object(l["lookupUser"])(n,s,o);if(i){const e=JSON.parse(JSON.stringify(i));for(const t of["lastLogin","created","modified"])void 0!==e[t]&&null!==e[t]&&(e[t]=new Date(e[t]));return r["a"].convertObjectToArcadeDictionary(e)}return null}throw new Error("Invalid Parameter")})},e.signatures.push({name:"getuser",min:"1",max:"2"}),e.functions.featuresetbyid=function(t,n){return e.standardFunctionAsync(t,n,(e,t,n)=>{if(Object(u["R"])(n,2,4),n[0]instanceof s["a"]){const e=Object(u["J"])(n[1]);let t=Object(u["d"])(n[2],null);const a=Object(u["I"])(Object(u["d"])(n[3],!0));if(null===t&&(t=["*"]),!1===Object(u["N"])(t))throw new Error("Invalid Parameter");return n[0].featureSetById(e,a,t)}throw new Error("Invalid Parameter")})},e.signatures.push({name:"featuresetbyid",min:"2",max:"4"}),e.functions.getfeatureset=function(t,n){return e.standardFunctionAsync(t,n,(e,n,a)=>{if(Object(u["R"])(a,1,2),Object(u["U"])(a[0])){let e=Object(u["d"])(a[1],"datasource");return null===e&&(e="datasource"),e=Object(u["J"])(e).toLowerCase(),Object(l["convertToFeatureSet"])(a[0].fullSchema(),e,t.lrucache,t.interceptor,t.spatialReference)}throw new Error("Invalid Parameter")})},e.signatures.push({name:"getfeatureset",min:"1",max:"2"}),e.functions.featuresetbyportalitem=function(t,n){return e.standardFunctionAsync(t,n,(e,n,r)=>{if(Object(u["R"])(r,2,5),null===r[0])throw new Error("Portal is required");if(r[0]instanceof a["a"]){const e=Object(u["J"])(r[1]),n=Object(u["J"])(r[2]);let a=Object(u["d"])(r[3],null);const i=Object(u["I"])(Object(u["d"])(r[4],!0));if(null===a&&(a=["*"]),!1===Object(u["N"])(a))throw new Error("Invalid Parameter");let s=null;return t.services&&t.services.portal&&(s=t.services.portal),s=Object(l["getPortal"])(r[0],s),Object(l["constructFeatureSetFromPortalItem"])(e,n,t.spatialReference,a,i,s,t.lrucache,t.interceptor)}if(!1===Object(u["D"])(r[0]))throw new Error("Portal is required");const i=Object(u["J"])(r[0]),s=Object(u["J"])(r[1]);let o=Object(u["d"])(r[2],null);const c=Object(u["I"])(Object(u["d"])(r[3],!0));if(null===o&&(o=["*"]),!1===Object(u["N"])(o))throw new Error("Invalid Parameter");if(t.services&&t.services.portal)return Object(l["constructFeatureSetFromPortalItem"])(i,s,t.spatialReference,o,c,t.services.portal,t.lrucache,t.interceptor);throw new Error("Portal is required")})},e.signatures.push({name:"featuresetbyportalitem",min:"2",max:"5"}),e.functions.featuresetbyname=function(t,n){return e.standardFunctionAsync(t,n,(e,t,n)=>{if(Object(u["R"])(n,2,4),n[0]instanceof s["a"]){const e=Object(u["J"])(n[1]);let t=Object(u["d"])(n[2],null);const a=Object(u["I"])(Object(u["d"])(n[3],!0));if(null===t&&(t=["*"]),!1===Object(u["N"])(t))throw new Error("Invalid Parameter");return n[0].featureSetByName(e,a,t)}throw new Error("Invalid Parameter")})},e.signatures.push({name:"featuresetbyname",min:"2",max:"4"}),e.functions.featureset=function(t,n){return e.standardFunction(t,n,(e,n,a)=>{Object(u["R"])(a,1,1);let i=a[0];const s={layerDefinition:{geometryType:"",objectIdField:"",globalIdField:"",typeIdField:"",fields:[]},featureSet:{geometryType:"",features:[]}};if(Object(u["D"])(i))i=JSON.parse(i),void 0!==i.layerDefinition?(s.layerDefinition=i.layerDefinition,s.featureSet=i.featureSet,i.layerDefinition.spatialReference&&(s.layerDefinition.spatialReference=i.layerDefinition.spatialReference)):(s.featureSet.features=i.features,s.featureSet.geometryType=i.geometryType,s.layerDefinition.geometryType=s.featureSet.geometryType,s.layerDefinition.objectIdField=i.objectIdFieldName,s.layerDefinition.typeIdField=i.typeIdFieldName,s.layerDefinition.globalIdField=i.globalIdFieldName,s.layerDefinition.fields=i.fields,i.spatialReference&&(s.layerDefinition.spatialReference=i.spatialReference));else{if(!(a[0]instanceof r["a"]))throw new Error("Invalid Parameter");{i=JSON.parse(a[0].castToText());const e=A(i,"layerdefinition");if(null!==e){s.layerDefinition.geometryType=A(e,"geometrytype",""),s.featureSet.geometryType=s.layerDefinition.geometryType,s.layerDefinition.globalIdField=A(e,"globalidfield",""),s.layerDefinition.objectIdField=A(e,"objectidfield",""),s.layerDefinition.typeIdField=A(e,"typeidfield","");const t=A(e,"spatialreference",null);t&&(s.layerDefinition.spatialReference=x(t));for(const a of A(e,"fields",[])){const e={name:A(a,"name",""),alias:A(a,"alias",""),type:A(a,"type",""),nullable:A(a,"nullable",!0),editable:A(a,"editable",!0),length:A(a,"length",null),domain:S(A(a,"domain"))};s.layerDefinition.fields.push(e)}const n=A(i,"featureset",null);if(n){const e={};for(const t of s.layerDefinition.fields)e[t.name.toLowerCase()]=t.name;for(const t of A(n,"features",[])){const n={},a=A(t,"attributes",{});for(const t in a)n[e[t.toLowerCase()]]=a[t];s.featureSet.features.push({attributes:n,geometry:T(A(t,"geometry",null))})}}}else{s.layerDefinition.geometryType=A(i,"geometrytype",""),s.featureSet.geometryType=s.layerDefinition.geometryType,s.layerDefinition.objectIdField=A(i,"objectidfieldname",""),s.layerDefinition.typeIdField=A(i,"typeidfieldname","");const e=A(i,"spatialreference",null);e&&(s.layerDefinition.spatialReference=x(e));for(const n of A(i,"fields",[])){const e={name:A(n,"name",""),alias:A(n,"alias",""),type:A(n,"type",""),nullable:A(n,"nullable",!0),editable:A(n,"editable",!0),length:A(n,"length",null),domain:S(A(n,"domain"))};s.layerDefinition.fields.push(e)}const t={};for(const n of s.layerDefinition.fields)t[n.name.toLowerCase()]=n.name;for(const n of A(i,"features",[])){const e={},a=A(n,"attributes",{});for(const n in a)e[t[n.toLowerCase()]]=a[n];s.featureSet.features.push({attributes:e,geometry:T(A(n,"geometry",null))})}}}}if(!1===C(s))throw new Error("Invalid Parameter");return y["a"].create(s,t.spatialReference)})},e.signatures.push({name:"featureset",min:"1",max:"1"}),e.functions.filter=function(t,n){return e.standardFunctionAsync(t,n,async(n,a,r)=>{if(Object(u["R"])(r,2,2),Object(u["N"])(r[0])||Object(u["P"])(r[0])){const n=[];let a=r[0];a instanceof c["a"]&&(a=a.toArray());let i=null;if(r[1]instanceof o["a"])i=e.arcadeCustomFunctionHandler(r[1]);else if(r[1]instanceof u["o"])i=(...e)=>r[1].fn(t,{preparsed:!0,arguments:e});else{if(!(r[1]instanceof u["t"]))throw new Error("Invalid Parameter");i=(...e)=>{if(e.length!==r[1].paramCount)throw new Error("Invalid parameters");return r[1].fn(...e)}}for(const e of a){const t=i(e);Object(j["l"])(t)?!0===await t&&n.push(e):!0===t&&n.push(e)}return n}if(Object(u["ab"])(r[0])){const n=await r[0].load(),a=F["WhereClause"].create(r[1],n.getFieldsIndex()),i=a.getVariables();if(i.length>0){const n=[];for(let a=0;a<i.length;a++){const r={name:i[a]};n.push(await e.evaluateIdentifier(t,r))}const s={};for(let e=0;e<i.length;e++)s[i[e]]=n[e];return a.parameters=s,new d["a"]({parentfeatureset:r[0],whereclause:a})}return new d["a"]({parentfeatureset:r[0],whereclause:a})}throw new Error("Filter cannot accept this parameter type")})},e.signatures.push({name:"filter",min:"2",max:"2"}),e.functions.orderby=function(t,n){return e.standardFunctionAsync(t,n,async(e,t,n)=>{if(Object(u["R"])(n,2,2),Object(u["ab"])(n[0])){const e=new O["a"](n[1]);return new b["a"]({parentfeatureset:n[0],orderbyclause:e})}throw new Error("Order cannot accept this parameter type")})},e.signatures.push({name:"orderby",min:"2",max:"2"}),e.functions.top=function(t,n){return e.standardFunctionAsync(t,n,async(e,t,n)=>{if(Object(u["R"])(n,2,2),Object(u["ab"])(n[0]))return new m["a"]({parentfeatureset:n[0],topnum:n[1]});if(Object(u["N"])(n[0]))return Object(u["H"])(n[1])>=n[0].length?n[0].slice(0):n[0].slice(0,Object(u["H"])(n[1]));if(Object(u["P"])(n[0]))return Object(u["H"])(n[1])>=n[0].length()?n[0].slice(0):n[0].slice(0,Object(u["H"])(n[1]));throw new Error("Top cannot accept this parameter type")})},e.signatures.push({name:"top",min:"2",max:"2"}),e.functions.first=function(t,n){return e.standardFunctionAsync(t,n,async(e,t,n)=>{if(Object(u["R"])(n,1,1),Object(u["ab"])(n[0])){const t=await n[0].first(e.abortSignal);if(null!==t){const e=i["a"].createFromGraphicLikeObject(t.geometry,t.attributes,n[0]);return e._underlyingGraphic=t,e}return t}return Object(u["N"])(n[0])?0===n[0].length?null:n[0][0]:Object(u["P"])(n[0])?0===n[0].length()?null:n[0].get(0):null})},e.signatures.push({name:"first",min:"1",max:"1"}),e.functions.attachments=function(t,n){return e.standardFunctionAsync(t,n,async(e,n,a)=>{Object(u["R"])(a,1,2);const i={minsize:-1,maxsize:-1,types:null,returnMetadata:!1};if(a.length>1)if(a[1]instanceof r["a"]){if(a[1].hasField("minsize")&&(i.minsize=Object(u["H"])(a[1].field("minsize"))),a[1].hasField("metadata")&&(i.returnMetadata=Object(u["I"])(a[1].field("metadata"))),a[1].hasField("maxsize")&&(i.maxsize=Object(u["H"])(a[1].field("maxsize"))),a[1].hasField("types")){const e=Object(u["z"])(a[1].field("types"),!1);e.length>0&&(i.types=e)}}else if(null!==a[1])throw new Error("Invalid Parameter");if(Object(u["U"])(a[0])){let e=a[0]._layer;return e instanceof I["default"]&&(e=Object(l["constructFeatureSet"])(e,t.spatialReference,["*"],!0,t.lrucache,t.interceptor)),null===e||!1===Object(u["ab"])(e)?[]:(await e.load(),e.queryAttachments(a[0].field(e.objectIdField),i.minsize,i.maxsize,i.types,i.returnMetadata))}if(null===a[0])return[];throw new Error("Invalid Parameter")})},e.signatures.push({name:"attachments",min:"1",max:"2"}),e.functions.featuresetbyrelationshipname=function(t,n){return e.standardFunctionAsync(t,n,async(e,n,a)=>{Object(u["R"])(a,2,4);const r=a[0],i=Object(u["J"])(a[1]);let s=Object(u["d"])(a[2],null);const o=Object(u["I"])(Object(u["d"])(a[3],!0));if(null===s&&(s=["*"]),!1===Object(u["N"])(s))throw new Error("Invalid Parameter");if(null===a[0])return null;if(!Object(u["U"])(a[0]))throw new Error("Invalid Parameter");let c=r._layer;if(c instanceof I["default"]&&(c=Object(l["constructFeatureSet"])(c,t.spatialReference,["*"],!0,t.lrucache,t.interceptor)),null===c)return null;if(!1===Object(u["ab"])(c))return null;c=await c.load();const f=c.relationshipMetaData().filter(e=>e.name===i);if(0===f.length)return null;if(void 0!==f[0].relationshipTableId&&null!==f[0].relationshipTableId&&f[0].relationshipTableId>-1)return Object(l["constructFeatureSetFromRelationship"])(c,f[0],r.field(c.objectIdField),c.spatialReference,s,o,t.lrucache,t.interceptor);let d=c.serviceUrl();if(!d)return null;d="/"===d.charAt(d.length-1)?d+f[0].relatedTableId.toString():d+"/"+f[0].relatedTableId.toString();const b=await Object(l["constructFeatureSetFromUrl"])(d,c.spatialReference,s,o,t.lrucache,t.interceptor);await b.load();let m=b.relationshipMetaData();if(m=m.filter(e=>e.id===f[0].id),!1===r.hasField(f[0].keyField)||null===r.field(f[0].keyField)){const e=await c.getFeatureByObjectId(r.field(c.objectIdField),[f[0].keyField]);if(e){const t=F["WhereClause"].create(m[0].keyField+"= @id",b.getFieldsIndex());return t.parameters={id:e.attributes[f[0].keyField]},b.filter(t)}return new p["a"]({parentfeatureset:b})}const y=F["WhereClause"].create(m[0].keyField+"= @id",b.getFieldsIndex());return y.parameters={id:r.field(f[0].keyField)},b.filter(y)})},e.signatures.push({name:"featuresetbyrelationshipname",min:"2",max:"4"}),e.functions.featuresetbyassociation=function(t,n){return e.standardFunctionAsync(t,n,async(e,n,a)=>{Object(u["R"])(a,2,3);const r=a[0],i=Object(u["J"])(Object(u["d"])(a[1],"")).toLowerCase(),s=Object(u["D"])(a[2])?Object(u["J"])(a[2]):null;if(null===a[0])return null;if(!Object(u["U"])(a[0]))throw new Error("Invalid Parameter");let o=r._layer;if(o instanceof I["default"]&&(o=Object(l["constructFeatureSet"])(o,t.spatialReference,["*"],!0,t.lrucache,t.interceptor)),null===o)return null;if(!1===Object(u["ab"])(o))return null;await o.load();const c=o.serviceUrl(),d=await Object(l["constructAssociationMetaDataFeatureSetFromUrl"])(c,t.spatialReference);let b=null,m=null,p=!1;if(null!==s&&""!==s&&void 0!==s){for(const e of d.terminals)e.terminalName===s&&(m=e.terminalId);null===m&&(p=!0)}const y=d.associations.getFieldsIndex(),O=y.get("TOGLOBALID").name,g=y.get("FROMGLOBALID").name,w=y.get("TOTERMINALID").name,j=y.get("FROMTERMINALID").name,D=y.get("FROMNETWORKSOURCEID").name,N=y.get("TONETWORKSOURCEID").name,A=y.get("ASSOCIATIONTYPE").name,S=y.get("ISCONTENTVISIBLE").name,x=y.get("OBJECTID").name;for(const t of o.fields)if("global-id"===t.type){b=r.field(t.name);break}let T=null,$=new f["d"](new E["a"]({name:"percentalong",alias:"percentalong",type:"double"}),F["WhereClause"].create("0",d.associations.getFieldsIndex())),C=new f["d"](new E["a"]({name:"side",alias:"side",type:"string"}),F["WhereClause"].create("''",d.associations.getFieldsIndex()));const R="globalid",L="globalId",v={};for(const t in d.lkp)v[t]=d.lkp[t].sourceId;const P=new f["e"](new E["a"]({name:"classname",alias:"classname",type:"string"}),null,v);let W="";switch(i){case"midspan":{W=`((${O}='${b}') OR ( ${g}='${b}')) AND (${A} IN (5))`,P.codefield=F["WhereClause"].create(`CASE WHEN (${O}='${b}') THEN ${D} ELSE ${N} END`,d.associations.getFieldsIndex());const e=Object(h["c"])(f["a"].findField(d.associations.fields,g));e.name=R,e.alias=R,T=new f["d"](e,F["WhereClause"].create(`CASE WHEN (${g}='${b}') THEN ${O} ELSE ${g} END`,d.associations.getFieldsIndex())),$=d.unVersion>=4?new f["c"](f["a"].findField(d.associations.fields,y.get("PERCENTALONG").name)):new f["d"](new E["a"]({name:"percentalong",alias:"percentalong",type:"double"}),F["WhereClause"].create("0",d.associations.getFieldsIndex()));break}case"junctionedge":{W=`((${O}='${b}') OR ( ${g}='${b}')) AND (${A} IN (4,6))`,P.codefield=F["WhereClause"].create(`CASE WHEN (${O}='${b}') THEN ${D} ELSE ${N} END`,d.associations.getFieldsIndex());const e=Object(h["c"])(f["a"].findField(d.associations.fields,g));e.name=R,e.alias=R,T=new f["d"](e,F["WhereClause"].create(`CASE WHEN (${g}='${b}') THEN ${O} ELSE ${g} END`,d.associations.getFieldsIndex())),C=new f["d"](new E["a"]({name:"side",alias:"side",type:"string"}),F["WhereClause"].create(`CASE WHEN (${A}=4) THEN 'from' ELSE 'to' END`,d.associations.getFieldsIndex()));break}case"connected":{let e=O+"='@T'",t=g+"='@T'";null!==m&&(e+=` AND ${w}=@A`,t+=` AND ${j}=@A`),W="(("+e+") OR ("+t+"))",W=Object(u["n"])(W,"@T",b),e=Object(u["n"])(e,"@T",b),null!==m&&(e=Object(u["n"])(e,"@A",m.toString()),W=Object(u["n"])(W,"@A",m.toString())),P.codefield=F["WhereClause"].create("CASE WHEN "+e+` THEN ${D} ELSE ${N} END`,d.associations.getFieldsIndex());const n=Object(h["c"])(f["a"].findField(d.associations.fields,g));n.name=R,n.alias=R,T=new f["d"](n,F["WhereClause"].create("CASE WHEN "+e+` THEN ${g} ELSE ${O} END`,d.associations.getFieldsIndex()));break}case"container":W=`${O}='${b}' AND ${A} = 2`,null!==m&&(W+=` AND ${w} = `+m.toString()),P.codefield=D,W="( "+W+" )",T=new f["b"](f["a"].findField(d.associations.fields,g),R,R);case"content":W=`(${g}='${b}' AND ${A} = 2)`,null!==m&&(W+=` AND ${j} = `+m.toString()),P.codefield=N,W="( "+W+" )",T=new f["b"](f["a"].findField(d.associations.fields,O),R,R);break;case"structure":W=`(${O}='${b}' AND ${A} = 3)`,null!==m&&(W+=` AND ${w} = `+m.toString()),P.codefield=D,W="( "+W+" )",T=new f["b"](f["a"].findField(d.associations.fields,g),R,L);break;case"attached":W=`(${g}='${b}' AND ${A} = 3)`,null!==m&&(W+=` AND ${j} = `+m.toString()),P.codefield=N,W="( "+W+" )",T=new f["b"](f["a"].findField(d.associations.fields,O),R,L);break;default:throw new Error("Invalid Parameter")}return p&&(W="1 <> 1"),new f["a"]({parentfeatureset:d.associations,adaptedFields:[new f["c"](f["a"].findField(d.associations.fields,x)),new f["c"](f["a"].findField(d.associations.fields,S)),T,C,P,$],extraFilter:W?F["WhereClause"].create(W,d.associations.getFieldsIndex()):null})})},e.signatures.push({name:"featuresetbyassociation",min:"2",max:"6"}),e.functions.groupby=function(t,n){return e.standardFunctionAsync(t,n,async(n,a,i)=>{if(Object(u["R"])(i,3,3),!Object(u["ab"])(i[0]))throw new Error("Illegal Value: GroupBy");const s=await i[0].load(),l=[],o=[];let c=!1,f=[];if(Object(u["D"])(i[1]))f.push(i[1]);else if(i[1]instanceof r["a"])f.push(i[1]);else if(Object(u["N"])(i[1]))f=i[1];else{if(!Object(u["P"])(i[1]))throw new Error("Illegal Value: GroupBy");f=i[1].toArray()}for(const e of f)if(Object(u["D"])(e)){const t=F["WhereClause"].create(Object(u["J"])(e),s.getFieldsIndex()),n=!0===Object(g["c"])(t)?Object(u["J"])(e):"%%%%FIELDNAME";l.push({name:n,expression:t}),"%%%%FIELDNAME"===n&&(c=!0)}else{if(!(e instanceof r["a"]))throw new Error("Illegal Value: GroupBy");{const t=e.hasField("name")?e.field("name"):"%%%%FIELDNAME",n=e.hasField("expression")?e.field("expression"):"";if("%%%%FIELDNAME"===t&&(c=!0),!t)throw new Error("Illegal Value: GroupBy");l.push({name:t,expression:F["WhereClause"].create(n||t,s.getFieldsIndex())})}}if(f=[],Object(u["D"])(i[2]))f.push(i[2]);else if(Object(u["N"])(i[2]))f=i[2];else if(Object(u["P"])(i[2]))f=i[2].toArray();else{if(!(i[2]instanceof r["a"]))throw new Error("Illegal Value: GroupBy");f.push(i[2])}for(const e of f){if(!(e instanceof r["a"]))throw new Error("Illegal Value: GroupBy");{const t=e.hasField("name")?e.field("name"):"",n=e.hasField("statistic")?e.field("statistic"):"",a=e.hasField("expression")?e.field("expression"):"";if(!t||!n||!a)throw new Error("Illegal Value: GroupBy");o.push({name:t,statistic:n.toLowerCase(),expression:F["WhereClause"].create(a,s.getFieldsIndex())})}}if(c){const e={};for(const n of s.fields)e[n.name.toLowerCase()]=1;for(const n of l)"%%%%FIELDNAME"!==n.name&&(e[n.name.toLowerCase()]=1);for(const n of o)"%%%%FIELDNAME"!==n.name&&(e[n.name.toLowerCase()]=1);let t=0;for(const n of l)if("%%%%FIELDNAME"===n.name){for(;1===e["field_"+t.toString()];)t++;e["field_"+t.toString()]=1,n.name="FIELD_"+t.toString()}}for(const r of l)await N(r.expression,e,t);for(const r of o)await N(r.expression,e,t);return i[0].groupby(l,o)})},e.signatures.push({name:"groupby",min:"3",max:"3"}),e.functions.distinct=function(t,n){return e.standardFunctionAsync(t,n,async(n,a,i)=>{if(Object(u["ab"])(i[0])){Object(u["R"])(i,2,2);const n=await i[0].load(),a=[];let s=[];if(Object(u["D"])(i[1]))s.push(i[1]);else if(i[1]instanceof r["a"])s.push(i[1]);else if(Object(u["N"])(i[1]))s=i[1];else{if(!Object(u["P"])(i[1]))throw new Error("Illegal Value: GroupBy");s=i[1].toArray()}let l=!1;for(const e of s)if(Object(u["D"])(e)){const t=F["WhereClause"].create(Object(u["J"])(e),n.getFieldsIndex()),r=!0===Object(g["c"])(t)?Object(u["J"])(e):"%%%%FIELDNAME";a.push({name:r,expression:t}),"%%%%FIELDNAME"===r&&(l=!0)}else{if(!(e instanceof r["a"]))throw new Error("Illegal Value: GroupBy");{const t=e.hasField("name")?e.field("name"):"%%%%FIELDNAME",r=e.hasField("expression")?e.field("expression"):"";if("%%%%FIELDNAME"===t&&(l=!0),!t)throw new Error("Illegal Value: GroupBy");a.push({name:t,expression:F["WhereClause"].create(r||t,n.getFieldsIndex())})}}if(l){const e={};for(const a of n.fields)e[a.name.toLowerCase()]=1;for(const n of a)"%%%%FIELDNAME"!==n.name&&(e[n.name.toLowerCase()]=1);let t=0;for(const n of a)if("%%%%FIELDNAME"===n.name){for(;1===e["field_"+t.toString()];)t++;e["field_"+t.toString()]=1,n.name="FIELD_"+t.toString()}}for(const r of a)await N(r.expression,e,t);return i[0].groupby(a,[])}return D("distinct",n,a,i)})})}}}]);
//# sourceMappingURL=chunk-2d0a4b23.44178981.js.map