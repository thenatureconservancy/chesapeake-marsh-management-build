(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-990faa72"],{"0218":function(t,e,n){"use strict";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.82
 */
function i(t){return t.map(t=>{let e="";for(let n=0;n<t;n++)e+=(65536*(1+Math.random())|0).toString(16).substring(1);return e}).join("-")}n.d(e,"a",(function(){return a}));const a=()=>i([2,1,1,1,3])},"291a":function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return f})),n.d(e,"c",(function(){return b})),n.d(e,"d",(function(){return p})),n.d(e,"e",(function(){return o}));var i=n("d780");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.82
 */const a="calciteInternalLabelClick",o="calciteInternalLabelConnected",c="calciteInternaLabelDisconnected",r="calcite-label",l=new WeakMap,s=new WeakMap,u=new WeakMap,d=new Set,h=t=>{const{id:e}=t,n=e&&Object(i["e"])(t,{selector:`${r}[for="${e}"]`});if(n)return n;const a=Object(i["f"])(t,r);return!a||m(a,t)?null:a};function m(t,e){let n;const i="custom-element-ancestor-check",a=i=>{i.stopImmediatePropagation();const a=i.composedPath();n=a.slice(a.indexOf(e),a.indexOf(t))};t.addEventListener(i,a,{once:!0}),e.dispatchEvent(new CustomEvent(i,{composed:!0,bubbles:!0})),t.removeEventListener(i,a);const o=n.filter(n=>n!==e&&n!==t).filter(t=>{var e;return null===(e=t.tagName)||void 0===e?void 0:e.includes("-")});return o.length>0}function f(t){const e=h(t.el);if(l.has(e)||!e&&d.has(t))return;const n=g.bind(t);if(e){t.labelEl=e;const i=v.bind(t);l.set(t.labelEl,i),t.labelEl.addEventListener(a,i),d.delete(t),document.removeEventListener(o,s.get(t)),u.set(t,n),document.addEventListener(c,n)}else d.has(t)||(n(),document.removeEventListener(c,u.get(t)))}function b(t){if(d.delete(t),document.removeEventListener(o,s.get(t)),document.removeEventListener(c,u.get(t)),s.delete(t),u.delete(t),!t.labelEl)return;const e=l.get(t.labelEl);t.labelEl.removeEventListener(a,e),l.delete(t.labelEl)}function p(t){var e,n;return t.label||(null===(n=null===(e=t.labelEl)||void 0===e?void 0:e.textContent)||void 0===n?void 0:n.trim())||""}function v(t){if(this.disabled)return;const e=this.el.contains(t.detail.sourceEvent.target);e||this.onLabelClick(t)}function k(){d.has(this)&&f(this)}function g(){d.add(this);const t=s.get(this)||k.bind(this);s.set(this,t),document.addEventListener(o,t)}},"6d3d":function(t,e,n){"use strict";n.d(e,"a",(function(){return p})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return m})),n.d(e,"d",(function(){return u}));var i=n("d780"),a=n("3105");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.82
 */
const o="hidden-form-input";function c(t){return"checked"in t}const r=new WeakMap,l=new WeakSet;function s(t,e){const n="calciteInternalFormComponentRegister";let i=!1;return t.addEventListener(n,t=>{i=t.composedPath().some(t=>l.has(t)),t.stopPropagation()},{once:!0}),e.dispatchEvent(new CustomEvent(n,{bubbles:!0,composed:!0})),i}function u(t){var e;null===(e=t.formEl)||void 0===e||e.requestSubmit()}function d(t){const{el:e,value:n}=t,a=Object(i["f"])(e,"form");if(!a||s(a,e))return;t.formEl=a,t.defaultValue=n,c(t)&&(t.defaultChecked=t.checked);const o=(t.onFormReset||h).bind(t);a.addEventListener("reset",o),r.set(t.el,o),l.add(e)}function h(){c(this)?this.checked=this.defaultChecked:this.value=this.defaultValue}function m(t){const{el:e,formEl:n}=t;if(!n)return;const i=r.get(e);n.removeEventListener("reset",i),r.delete(e),t.formEl=null,l.delete(e)}function f(t){const{el:e,formEl:n,name:i,value:a}=t,{ownerDocument:c}=e,r=e.querySelectorAll(`input[slot="${o}"]`);if(!n||!i)return void r.forEach(t=>t.remove());const l=Array.isArray(a)?a:[a],s=[],u=new Set;let d;r.forEach(e=>{const n=l.find(t=>t==e.value);null!=n?(u.add(n),b(t,e,n)):s.push(e)}),l.forEach(e=>{if(u.has(e))return;let n=s.pop();n||(n=c.createElement("input"),n.slot=o),d||(d=c.createDocumentFragment()),d.append(n),b(t,n,e)}),d&&e.append(d),s.forEach(t=>t.remove())}function b(t,e,n){var i;const{defaultValue:a,disabled:o,name:r,required:l}=t;e.defaultValue=a,e.disabled=o,e.name=r,e.required=l,e.tabIndex=-1,c(t)?(e.defaultChecked=t.defaultChecked,e.value=t.checked?n||"on":"",o||t.checked||(e.disabled=!0)):e.value=n||"",null===(i=t.syncHiddenFormInput)||void 0===i||i.call(t,e)}const p=({component:t})=>(f(t),Object(a["h"])("slot",{name:o}))},"8cd7":function(t,e,n){"use strict";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.82
 */
function i(){}function a(t,e=!1){if(t.disabled)return t.el.setAttribute("tabindex","-1"),t.el.setAttribute("aria-disabled","true"),t.el.contains(document.activeElement)&&document.activeElement.blur(),void(t.el.click=i);t.el.click=HTMLElement.prototype.click,"function"===typeof e?t.el.setAttribute("tabindex",e.call(t)?"0":"-1"):!0===e?t.el.setAttribute("tabindex","0"):!1===e&&t.el.removeAttribute("tabindex"),t.el.removeAttribute("aria-disabled")}n.d(e,"a",(function(){return a}))},d780:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return l})),n.d(e,"d",(function(){return k})),n.d(e,"e",(function(){return m})),n.d(e,"f",(function(){return f})),n.d(e,"g",(function(){return p})),n.d(e,"h",(function(){return s})),n.d(e,"i",(function(){return h})),n.d(e,"j",(function(){return x})),n.d(e,"k",(function(){return E}));n("0218");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.82
 */const i="calcite-theme-auto",a="calcite-theme-dark",o="calcite-theme-light",c={autoTheme:i,darkTheme:a,lightTheme:o,rtl:"calcite--rtl"},r={loading:"Loading"};function l(t){const e="dir",n=`[${e}]`,i=f(t,n);return i?i.getAttribute(e):"ltr"}function s(t,e,n){const i=`[${e}]`,a=t.closest(i);return a?a.getAttribute(e):n}function u(t){return t.getRootNode()}function d(t){return t.host||null}function h(t,e){function n(t,i){if(!t)return i;t.assignedSlot&&(t=t.assignedSlot);const a=u(t),o=Array.from(a.querySelectorAll(e)),c=o.filter(t=>!i.includes(t));i=[...i,...c];const r=d(a);return r?n(r,i):i}return n(t,[])}function m(t,{selector:e,id:n}){function i(t){if(!t)return null;t.assignedSlot&&(t=t.assignedSlot);const a=u(t),o=n?"getElementById"in a?a.getElementById(n):null:e?a.querySelector(e):null,c=d(a);return o||(c?i(c):null)}return i(t)}function f(t,e){function n(t){return t?t.closest(e)||n(d(u(t))):null}return n(t)}function b(t){return"function"===typeof(null===t||void 0===t?void 0:t.setFocus)}async function p(t){if(t)return b(t)?t.setFocus():t.focus()}const v=":not([slot])";function k(t,e,n){e&&!Array.isArray(e)&&"string"!==typeof e&&(n=e,e=null);const i=e?Array.isArray(e)?e.map(t=>`[slot="${t}"]`).join(","):`[slot="${e}"]`:v;return(null===n||void 0===n?void 0:n.all)?w(t,i,n):y(t,i,n)}function g(t,e){return t?Array.from(t.children||[]).filter(t=>null===t||void 0===t?void 0:t.matches(e)):[]}function w(t,e,n){let i=e===v?g(t,v):Array.from(t.querySelectorAll(e));i=n&&!1===n.direct?i:i.filter(e=>e.parentElement===t),i=(null===n||void 0===n?void 0:n.matches)?i.filter(t=>null===t||void 0===t?void 0:t.matches(n.matches)):i;const a=null===n||void 0===n?void 0:n.selector;return a?i.map(t=>Array.from(t.querySelectorAll(a))).reduce((t,e)=>[...t,...e],[]).filter(t=>!!t):i}function y(t,e,n){let i=e===v?g(t,v)[0]||null:t.querySelector(e);i=n&&!1===n.direct||(null===i||void 0===i?void 0:i.parentElement)===t?i:null,i=(null===n||void 0===n?void 0:n.matches)?(null===i||void 0===i?void 0:i.matches(n.matches))?i:null:i;const a=null===n||void 0===n?void 0:n.selector;return a?null===i||void 0===i?void 0:i.querySelector(a):i}function x(t,e,n){return"string"===typeof e&&""!==e?e:""===e?t[n]:void 0}function E(t){return(!!t).toString()}},fef7:function(t,e,n){"use strict";n.r(e),n.d(e,"CalciteCheckbox",(function(){return h})),n.d(e,"defineCustomElement",(function(){return m}));var i=n("3105"),a=n("0218"),o=n("6d3d"),c=n("291a"),r=n("8cd7"),l=n("d780");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.82
 */
const s="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([scale=s]){--calcite-checkbox-size:0.75rem}:host([scale=m]){--calcite-checkbox-size:var(--calcite-font-size--1)}:host([scale=l]){--calcite-checkbox-size:1rem}:host{position:relative;display:-ms-inline-flexbox;display:inline-flex;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}:host .check-svg{pointer-events:none;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;overflow:hidden;background-color:var(--calcite-ui-foreground-1);fill:currentColor;stroke:currentColor;stroke-width:1;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);width:var(--calcite-checkbox-size);height:var(--calcite-checkbox-size);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-border-input);box-shadow:inset 0 0 0 1px var(--calcite-ui-border-input);color:var(--calcite-ui-background)}:host([checked]) .check-svg,:host([indeterminate]) .check-svg{background-color:var(--calcite-ui-brand);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-brand);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand)}:host([hovered]) .toggle .check-svg,:host .toggle:hover .check-svg{-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-brand);box-shadow:inset 0 0 0 2px var(--calcite-ui-brand)}:host .toggle:focus .check-svg,:host .toggle:active .check-svg{-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-brand), 0 0 0 2px var(--calcite-ui-foreground-1), 0 0 0 4px var(--calcite-ui-brand);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand), 0 0 0 2px var(--calcite-ui-foreground-1), 0 0 0 4px var(--calcite-ui-brand);-webkit-transition:var(--calcite-animation-timing);transition:var(--calcite-animation-timing)}.toggle:focus-visible{outline:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}::slotted(input[slot=hidden-form-input]){bottom:0 !important;left:0 !important;margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;right:0 !important;top:0 !important;-webkit-transform:none !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}",u=Object(i["i"])(class extends i["c"]{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalCheckboxBlur=Object(i["e"])(this,"calciteInternalCheckboxBlur",7),this.calciteCheckboxChange=Object(i["e"])(this,"calciteCheckboxChange",7),this.calciteInternalCheckboxFocus=Object(i["e"])(this,"calciteInternalCheckboxFocus",7),this.checked=!1,this.disabled=!1,this.hovered=!1,this.indeterminate=!1,this.required=!1,this.scale="m",this.checkedPath="M5.5 12L2 8.689l.637-.636L5.5 10.727l8.022-7.87.637.637z",this.indeterminatePath="M13 8v1H3V8z",this.getPath=()=>this.indeterminate?this.indeterminatePath:this.checked?this.checkedPath:"",this.toggle=()=>{this.disabled||(this.checked=!this.checked,this.setFocus(),this.indeterminate=!1,this.calciteCheckboxChange.emit())},this.keyDownHandler=t=>{" "!==t.key&&"Enter"!==t.key||(this.toggle(),t.preventDefault())},this.clickHandler=()=>{this.toggle()},this.onToggleBlur=()=>{this.calciteInternalCheckboxBlur.emit(!1)},this.onToggleFocus=()=>{this.calciteInternalCheckboxFocus.emit(!0)},this.onLabelClick=()=>{this.toggle()}}async setFocus(){var t;null===(t=this.toggleEl)||void 0===t||t.focus()}connectedCallback(){this.guid=this.el.id||"calcite-checkbox-"+Object(a["a"])(),Object(c["b"])(this),Object(o["b"])(this)}disconnectedCallback(){Object(c["c"])(this),Object(o["c"])(this)}componentDidRender(){Object(r["a"])(this)}render(){return Object(i["h"])(i["d"],{onClick:this.clickHandler,onKeyDown:this.keyDownHandler},Object(i["h"])("div",{"aria-checked":Object(l["k"])(this.checked),"aria-label":Object(c["d"])(this),class:"toggle",onBlur:this.onToggleBlur,onFocus:this.onToggleFocus,ref:t=>this.toggleEl=t,role:"checkbox",tabIndex:this.disabled?void 0:0},Object(i["h"])("svg",{class:"check-svg",viewBox:"0 0 16 16"},Object(i["h"])("path",{d:this.getPath()})),Object(i["h"])("slot",null)),Object(i["h"])(o["a"],{component:this}))}get el(){return this}static get style(){return s}},[1,"calcite-checkbox",{checked:[1540],disabled:[516],guid:[1537],hovered:[1540],indeterminate:[1540],label:[1],name:[520],required:[516],scale:[513],value:[8],setFocus:[64]}]);function d(){if("undefined"===typeof customElements)return;const t=["calcite-checkbox"];t.forEach(t=>{switch(t){case"calcite-checkbox":customElements.get(t)||customElements.define(t,u);break}})}d();
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.82
 */
const h=u,m=d}}]);
//# sourceMappingURL=chunk-990faa72.20729c70.js.map