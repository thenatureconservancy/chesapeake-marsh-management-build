(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a1580416"],{"0959":function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return o}));var i=n("c120"),a=n("b2b2"),s=n("ce76"),r=n("e9ba");class o{async createIndex(t,e){const n=new Array;if(!t.vertexAttributes||!t.vertexAttributes.position)return new s["a"];const i=this._createMeshData(t),r=Object(a["k"])(e)?await e.invoke("createIndexThread",i,{transferList:n}):this.createIndexThread(i).result;return this._createPooledRBush().fromJSON(r)}createIndexThread(t){const e=new Float64Array(t.position),n=this._createPooledRBush();return t.components?this._createIndexComponentsThread(n,e,t.components.map(t=>new Uint32Array(t))):this._createIndexAllThread(n,e)}_createIndexAllThread(t,e){const n=new Array(e.length/9);let i=0;for(let a=0;a<e.length;a+=9)n[i++]=h(e,a+0,a+3,a+6);return t.load(n),{result:t.toJSON()}}_createIndexComponentsThread(t,e,n){let i=0;for(const r of n)i+=r.length/3;const a=new Array(i);let s=0;for(const r of n)for(let t=0;t<r.length;t+=3)a[s++]=h(e,3*r[t+0],3*r[t+1],3*r[t+2]);return t.load(a),{result:t.toJSON()}}_createMeshData(t){const e=(t.transform?Object(r["b"])({position:t.vertexAttributes.position,normal:null,tangent:null},t.transform,t.spatialReference).position:t.vertexAttributes.position).buffer;return!t.components||t.components.some(t=>!t.faces)?{position:e}:{position:e,components:t.components.map(t=>t.faces)}}_createPooledRBush(){return new s["a"](9,Object(i["a"])("esri-csp-restrictions")?t=>t:[".minX",".minY",".maxX",".maxY"])}}function h(t,e,n,i){return{minX:Math.min(t[e+0],t[n+0],t[i+0]),maxX:Math.max(t[e+0],t[n+0],t[i+0]),minY:Math.min(t[e+1],t[n+1],t[i+1]),maxY:Math.max(t[e+1],t[n+1],t[i+1]),p0:[t[e+0],t[e+1],t[e+2]],p1:[t[n+0],t[n+1],t[n+2]],p2:[t[i+0],t[i+1],t[i+2]]}}},ce76:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n("b50f"),a=n("b2b2"),s=n("8a44"),r=n("4637");class o{constructor(t=9,e){this.compareMinX=m,this.compareMinY=u,this._toBBox=t=>t,this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),e&&("function"==typeof e?this._toBBox=e:this._initFormat(e)),this.clear()}destroy(){this.clear(),X.prune(),Y.prune(),B.prune(),b.prune()}all(t){this._all(this.data,t)}search(t,e){let n=this.data;const i=this._toBBox;if(g(t,n))for(X.clear();n;){for(let a=0,s=n.children.length;a<s;a++){const s=n.children[a],r=n.leaf?i(s):s;g(t,r)&&(n.leaf?e(s):_(t,r)?this._all(s,e):X.push(s))}n=X.pop()}}collides(t){let e=this.data;const n=this._toBBox;if(!g(t,e))return!1;for(X.clear();e;){for(let i=0,a=e.children.length;i<a;i++){const a=e.children[i],s=e.leaf?n(a):a;if(g(t,s)){if(e.leaf||_(t,s))return!0;X.push(a)}}e=X.pop()}return!1}load(t){if(!t.length)return this;if(t.length<this._minEntries){for(let e=0,n=t.length;e<n;e++)this.insert(t[e]);return this}let e=this._build(t.slice(0,t.length),0,t.length-1,0);if(this.data.children.length)if(this.data.height===e.height)this._splitRoot(this.data,e);else{if(this.data.height<e.height){const t=this.data;this.data=e,e=t}this._insert(e,this.data.height-e.height-1,!0)}else this.data=e;return this}insert(t){return t&&this._insert(t,this.data.height-1),this}clear(){return this.data=new O([]),this}remove(t){if(!t)return this;let e,n=this.data,s=null,r=0,o=!1;const h=this._toBBox(t);for(B.clear(),b.clear();n||B.length>0;){var l;if(n||(n=Object(a["c"])(B.pop()),s=B.data[B.length-1],r=null!=(l=b.pop())?l:0,o=!0),n.leaf&&(e=Object(i["e"])(n.children,t,n.children.length,n.indexHint),-1!==e))return n.children.splice(e,1),B.push(n),this._condense(B),this;o||n.leaf||!_(n,h)?s?(r++,n=s.children[r],o=!1):n=null:(B.push(n),b.push(r),r=0,s=n,n=n.children[0])}return this}toJSON(){return this.data}fromJSON(t){return this.data=t,this}_all(t,e){let n=t;for(Y.clear();n;){var i;if(!0===n.leaf)for(const t of n.children)e(t);else Y.pushArray(n.children);n=null!=(i=Y.pop())?i:null}}_build(t,e,n,i){const a=n-e+1;let s=this._maxEntries;if(a<=s){const i=new O(t.slice(e,n+1));return h(i,this._toBBox),i}i||(i=Math.ceil(Math.log(a)/Math.log(s)),s=Math.ceil(a/s**(i-1)));const r=new j([]);r.height=i;const o=Math.ceil(a/s),l=o*Math.ceil(Math.sqrt(s));M(t,e,n,l,this.compareMinX);for(let h=e;h<=n;h+=l){const e=Math.min(h+l-1,n);M(t,h,e,o,this.compareMinY);for(let n=h;n<=e;n+=o){const a=Math.min(n+o-1,e);r.children.push(this._build(t,n,a,i-1))}}return h(r,this._toBBox),r}_chooseSubtree(t,e,n,i){for(;i.push(e),!0!==e.leaf&&i.length-1!==n;){let n,i=1/0,a=1/0;for(let s=0,r=e.children.length;s<r;s++){const r=e.children[s],o=d(r),h=x(t,r)-o;h<a?(a=h,i=o<i?o:i,n=r):h===a&&o<i&&(i=o,n=r)}e=n||e.children[0]}return e}_insert(t,e,n){const i=this._toBBox,a=n?t:i(t);B.clear();const s=this._chooseSubtree(a,this.data,e,B);for(s.children.push(t),c(s,a);e>=0&&B.data[e].children.length>this._maxEntries;)this._split(B,e),e--;this._adjustParentBBoxes(a,B,e)}_split(t,e){const n=t.data[e],i=n.children.length,a=this._minEntries;this._chooseSplitAxis(n,a,i);const s=this._chooseSplitIndex(n,a,i);if(!s)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const r=n.children.splice(s,n.children.length-s),o=n.leaf?new O(r):new j(r);o.height=n.height,h(n,this._toBBox),h(o,this._toBBox),e?t.data[e-1].children.push(o):this._splitRoot(n,o)}_splitRoot(t,e){this.data=new j([t,e]),this.data.height=t.height+1,h(this.data,this._toBBox)}_chooseSplitIndex(t,e,n){let i,a,s;i=a=1/0;for(let r=e;r<=n-e;r++){const e=l(t,0,r,this._toBBox),o=l(t,r,n,this._toBBox),h=p(e,o),c=d(e)+d(o);h<i?(i=h,s=r,a=c<a?c:a):h===i&&c<a&&(a=c,s=r)}return s}_chooseSplitAxis(t,e,n){const i=t.leaf?this.compareMinX:m,a=t.leaf?this.compareMinY:u;this._allDistMargin(t,e,n,i)<this._allDistMargin(t,e,n,a)&&t.children.sort(i)}_allDistMargin(t,e,n,i){t.children.sort(i);const a=this._toBBox,s=l(t,0,e,a),r=l(t,n-e,n,a);let o=f(s)+f(r);for(let h=e;h<n-e;h++){const e=t.children[h];c(s,t.leaf?a(e):e),o+=f(s)}for(let h=n-e-1;h>=e;h--){const e=t.children[h];c(r,t.leaf?a(e):e),o+=f(r)}return o}_adjustParentBBoxes(t,e,n){for(let i=n;i>=0;i--)c(e.data[i],t)}_condense(t){for(let e=t.length-1;e>=0;e--){const n=t.data[e];if(0===n.children.length)if(e>0){const a=t.data[e-1],s=a.children;s.splice(Object(i["e"])(s,n,s.length,a.indexHint),1)}else this.clear();else h(n,this._toBBox)}}_initFormat(t){const e=["return a"," - b",";"];this.compareMinX=new Function("a","b",e.join(t[0])),this.compareMinY=new Function("a","b",e.join(t[1])),this._toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}function h(t,e){l(t,0,t.children.length,e,t)}function l(t,e,n,i,a){a||(a=new O([])),a.minX=1/0,a.minY=1/0,a.maxX=-1/0,a.maxY=-1/0;for(let s,r=e;r<n;r++)s=t.children[r],c(a,t.leaf?i(s):s);return a}function c(t,e){t.minX=Math.min(t.minX,e.minX),t.minY=Math.min(t.minY,e.minY),t.maxX=Math.max(t.maxX,e.maxX),t.maxY=Math.max(t.maxY,e.maxY)}function m(t,e){return t.minX-e.minX}function u(t,e){return t.minY-e.minY}function d(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function f(t){return t.maxX-t.minX+(t.maxY-t.minY)}function x(t,e){return(Math.max(e.maxX,t.maxX)-Math.min(e.minX,t.minX))*(Math.max(e.maxY,t.maxY)-Math.min(e.minY,t.minY))}function p(t,e){const n=Math.max(t.minX,e.minX),i=Math.max(t.minY,e.minY),a=Math.min(t.maxX,e.maxX),s=Math.min(t.maxY,e.maxY);return Math.max(0,a-n)*Math.max(0,s-i)}function _(t,e){return t.minX<=e.minX&&t.minY<=e.minY&&e.maxX<=t.maxX&&e.maxY<=t.maxY}function g(t,e){return e.minX<=t.maxX&&e.minY<=t.maxY&&e.maxX>=t.minX&&e.maxY>=t.minY}function M(t,e,n,i,s){const o=[e,n];for(;o.length;){const e=Object(a["c"])(o.pop()),n=Object(a["c"])(o.pop());if(e-n<=i)continue;const h=n+Math.ceil((e-n)/i/2)*i;Object(r["a"])(t,h,n,e,s),o.push(n,h,h,e)}}const X=new s["a"],Y=new s["a"],B=new s["a"],b=new s["a"]({deallocator:void 0});class w{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class A extends w{constructor(){super(...arguments),this.height=1,this.indexHint=new i["a"]}}class O extends A{constructor(t){super(),this.children=t,this.leaf=!0}}class j extends A{constructor(t){super(),this.children=t,this.leaf=!1}}}}]);
//# sourceMappingURL=chunk-a1580416.67d636e3.js.map