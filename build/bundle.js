!function(t){var e={};function a(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=e,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(i,r,function(e){return t[e]}.bind(null,r));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=0)}([function(t,e,a){"use strict";a.r(e);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const i=new WeakMap,r=t=>"function"==typeof t&&i.has(t),n=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,s=(t,e,a=null)=>{let i=e;for(;i!==a;){const e=i.nextSibling;t.removeChild(i),i=e}},c={},o=`{{lit-${String(Math.random()).slice(2)}}}`,l=`\x3c!--${o}--\x3e`,h=new RegExp(`${o}|${l}`),p=(()=>{const t=document.createElement("div");return t.setAttribute("style","{{bad value}}"),"{{bad value}}"!==t.getAttribute("style")})();class d{constructor(t,e){this.parts=[],this.element=e;let a=-1,i=0;const r=[],n=e=>{const s=e.content,c=document.createTreeWalker(s,133,null,!1);let l,d;for(;c.nextNode();){a++,l=d;const e=d=c.currentNode;if(1===e.nodeType){if(e.hasAttributes()){const r=e.attributes;let n=0;for(let t=0;t<r.length;t++)r[t].value.indexOf(o)>=0&&n++;for(;n-- >0;){const r=t.strings[i],n=m.exec(r)[2],s=p&&"style"===n?"style$":/^[a-zA-Z-]*$/.test(n)?n:n.toLowerCase(),c=e.getAttribute(s).split(h);this.parts.push({type:"attribute",index:a,name:n,strings:c}),e.removeAttribute(s),i+=c.length-1}}"TEMPLATE"===e.tagName&&n(e)}else if(3===e.nodeType){const t=e.nodeValue;if(t.indexOf(o)<0)continue;const n=e.parentNode,s=t.split(h),c=s.length-1;i+=c;for(let t=0;t<c;t++)n.insertBefore(""===s[t]?v():document.createTextNode(s[t]),e),this.parts.push({type:"node",index:a++});n.insertBefore(""===s[c]?v():document.createTextNode(s[c]),e),r.push(e)}else if(8===e.nodeType)if(e.nodeValue===o){const t=e.parentNode,n=e.previousSibling;null===n||n!==l||n.nodeType!==Node.TEXT_NODE?t.insertBefore(v(),e):a--,this.parts.push({type:"node",index:a++}),r.push(e),null===e.nextSibling?t.insertBefore(v(),e):a--,d=l,i++}else{let t=-1;for(;-1!==(t=e.nodeValue.indexOf(o,t+1));)this.parts.push({type:"node",index:-1})}}};n(e);for(const t of r)t.parentNode.removeChild(t)}}const u=t=>-1!==t.index,v=()=>document.createComment(""),m=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class f{constructor(t,e,a){this._parts=[],this.template=t,this.processor=e,this.options=a}update(t){let e=0;for(const a of this._parts)void 0!==a&&a.setValue(t[e]),e++;for(const t of this._parts)void 0!==t&&t.commit()}_clone(){const t=n?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=this.template.parts;let a=0,i=0;const r=t=>{const n=document.createTreeWalker(t,133,null,!1);let s=n.nextNode();for(;a<e.length&&null!==s;){const t=e[a];if(u(t))if(i===t.index){if("node"===t.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(s),this._parts.push(t)}else this._parts.push(...this.processor.handleAttributeExpressions(s,t.name,t.strings,this.options));a++}else i++,"TEMPLATE"===s.nodeName&&r(s.content),s=n.nextNode();else this._parts.push(void 0),a++}};return r(t),n&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class _{constructor(t,e,a,i){this.strings=t,this.values=e,this.type=a,this.processor=i}getHTML(){const t=this.strings.length-1;let e="",a=!0;for(let i=0;i<t;i++){const t=this.strings[i];e+=t;const r=t.lastIndexOf(">");!(a=(r>-1||a)&&-1===t.indexOf("<",r+1))&&p&&(e=e.replace(m,(t,e,a,i)=>"style"===a?`${e}style$${i}`:t)),e+=a?l:o}return e+=this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const g=t=>null===t||!("object"==typeof t||"function"==typeof t);class y{constructor(t,e,a){this.dirty=!0,this.element=t,this.name=e,this.strings=a,this.parts=[];for(let t=0;t<a.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new b(this)}_getValue(){const t=this.strings,e=t.length-1;let a="";for(let i=0;i<e;i++){a+=t[i];const e=this.parts[i];if(void 0!==e){const t=e.value;if(null!=t&&(Array.isArray(t)||"string"!=typeof t&&t[Symbol.iterator]))for(const e of t)a+="string"==typeof e?e:String(e);else a+="string"==typeof t?t:String(t)}}return a+=t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class b{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===c||g(t)&&t===this.value||(this.value=t,r(t)||(this.committer.dirty=!0))}commit(){for(;r(this.value);){const t=this.value;this.value=c,t(this)}this.value!==c&&this.committer.commit()}}class z{constructor(t){this.value=void 0,this._pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(v()),this.endNode=t.appendChild(v())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t._insert(this.startNode=v()),t._insert(this.endNode=v())}insertAfterPart(t){t._insert(this.startNode=v()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this._pendingValue=t}commit(){for(;r(this._pendingValue);){const t=this._pendingValue;this._pendingValue=c,t(this)}const t=this._pendingValue;t!==c&&(g(t)?t!==this.value&&this._commitText(t):t instanceof _?this._commitTemplateResult(t):t instanceof Node?this._commitNode(t):Array.isArray(t)||t[Symbol.iterator]?this._commitIterable(t):void 0!==t.then?this._commitPromise(t):this._commitText(t))}_insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}_commitNode(t){this.value!==t&&(this.clear(),this._insert(t),this.value=t)}_commitText(t){const e=this.startNode.nextSibling;t=null==t?"":t,e===this.endNode.previousSibling&&e.nodeType===Node.TEXT_NODE?e.textContent=t:this._commitNode(document.createTextNode("string"==typeof t?t:String(t))),this.value=t}_commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value&&this.value.template===e)this.value.update(t.values);else{const a=new f(e,t.processor,this.options),i=a._clone();a.update(t.values),this._commitNode(i),this.value=a}}_commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let a,i=0;for(const r of t)void 0===(a=e[i])&&(a=new z(this.options),e.push(a),0===i?a.appendIntoPart(this):a.insertAfterPart(e[i-1])),a.setValue(r),a.commit(),i++;i<e.length&&(e.length=i,this.clear(a&&a.endNode))}_commitPromise(t){this.value=t,t.then(e=>{this.value===t&&(this.setValue(e),this.commit())})}clear(t=this.startNode){s(this.startNode.parentNode,t.nextSibling,this.endNode)}}class x{constructor(t,e,a){if(this.value=void 0,this._pendingValue=void 0,2!==a.length||""!==a[0]||""!==a[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=a}setValue(t){this._pendingValue=t}commit(){for(;r(this._pendingValue);){const t=this._pendingValue;this._pendingValue=c,t(this)}if(this._pendingValue===c)return;const t=!!this._pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=t,this._pendingValue=c}}class w extends y{constructor(t,e,a){super(t,e,a),this.single=2===a.length&&""===a[0]&&""===a[1]}_createPart(){return new C(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class C extends b{}let M=!1;try{const t={get capture(){return M=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class H{constructor(t,e,a){this.value=void 0,this._pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=a,this._boundHandleEvent=(t=>this.handleEvent(t))}setValue(t){this._pendingValue=t}commit(){for(;r(this._pendingValue);){const t=this._pendingValue;this._pendingValue=c,t(this)}if(this._pendingValue===c)return;const t=this._pendingValue,e=this.value,a=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),i=null!=t&&(null==e||a);a&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),this._options=S(t),i&&this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options),this.value=t,this._pendingValue=c}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const S=t=>t&&(M?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const P=new class{handleAttributeExpressions(t,e,a,i){const r=e[0];return"."===r?new w(t,e.slice(1),a).parts:"@"===r?[new H(t,e.slice(1),i.eventContext)]:"?"===r?[new x(t,e.slice(1),a)]:new y(t,e,a).parts}handleTextExpression(t){return new z(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function V(t){let e=L.get(t.type);void 0===e&&(e=new Map,L.set(t.type,e));let a=e.get(t.strings);return void 0===a&&(a=new d(t,t.getTemplateElement()),e.set(t.strings,a)),a}const L=new Map,E=new WeakMap,k=(t,...e)=>new _(t,e,"html",P),T=NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_COMMENT|NodeFilter.SHOW_TEXT;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function A(t,e){const{element:{content:a},parts:i}=t,r=document.createTreeWalker(a,T,null,!1);let n=O(i),s=i[n],c=-1,o=0;const l=[];let h=null;for(;r.nextNode();){c++;const t=r.currentNode;for(t.previousSibling===h&&(h=null),e.has(t)&&(l.push(t),null===h&&(h=t)),null!==h&&o++;void 0!==s&&s.index===c;)s.index=null!==h?-1:s.index-o,s=i[n=O(i,n)]}l.forEach(t=>t.parentNode.removeChild(t))}const N=t=>{let e=t.nodeType===Node.DOCUMENT_FRAGMENT_NODE?0:1;const a=document.createTreeWalker(t,T,null,!1);for(;a.nextNode();)e++;return e},O=(t,e=-1)=>{for(let a=e+1;a<t.length;a++){const e=t[a];if(u(e))return a}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const I=(t,e)=>`${t}--${e}`;let R=!0;void 0===window.ShadyCSS?R=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),R=!1);const D=["html","svg"],F=new Set,B=(t,e,a)=>{F.add(a);const i=t.querySelectorAll("style");if(0===i.length)return;const r=document.createElement("style");for(let t=0;t<i.length;t++){const e=i[t];e.parentNode.removeChild(e),r.textContent+=e.textContent}if((t=>{D.forEach(e=>{const a=L.get(I(e,t));void 0!==a&&a.forEach(t=>{const{element:{content:e}}=t,a=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{a.add(t)}),A(t,a)})})})(a),function(t,e,a=null){const{element:{content:i},parts:r}=t;if(null==a)return void i.appendChild(e);const n=document.createTreeWalker(i,T,null,!1);let s=O(r),c=0,o=-1;for(;n.nextNode();)for(o++,n.currentNode===a&&(c=N(e),a.parentNode.insertBefore(e,a));-1!==s&&r[s].index===o;){if(c>0){for(;-1!==s;)r[s].index+=c,s=O(r,s);return}s=O(r,s)}}(e,r,e.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(e.element,a),window.ShadyCSS.nativeShadow){const a=e.element.content.querySelector("style");t.insertBefore(a.cloneNode(!0),t.firstChild)}else{e.element.content.insertBefore(r,e.element.content.firstChild);const t=new Set;t.add(r),A(e,t)}},j=t=>null!==t,U=t=>t?"":null,K=(t,e)=>e!==t&&(e==e||t==t),q={attribute:!0,type:String,reflect:!1,hasChanged:K},$=new Promise(t=>t(!0)),Y=1,X=4,J=8;class W extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=$,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this._finalize();const t=[];for(const[e,a]of this._classProperties){const i=this._attributeNameForProperty(e,a);void 0!==i&&(this._attributeToPropertyMap.set(i,e),t.push(i))}return t}static createProperty(t,e=q){if(!this.hasOwnProperty("_classProperties")){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}if(this._classProperties.set(t,e),this.prototype.hasOwnProperty(t))return;const a="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[a]},set(i){const r=this[t];this[a]=i,this._requestPropertyUpdate(t,r,e)},configurable:!0,enumerable:!0})}static _finalize(){if(this.hasOwnProperty("_finalized")&&this._finalized)return;const t=Object.getPrototypeOf(this);"function"==typeof t._finalize&&t._finalize(),this._finalized=!0,this._attributeToPropertyMap=new Map;const e=this.properties,a=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const t of a)this.createProperty(t,e[t])}static _attributeNameForProperty(t,e){const a=void 0!==e&&e.attribute;return!1===a?void 0:"string"==typeof a?a:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,a=K){return a(t,e)}static _propertyValueFromAttribute(t,e){const a=e&&e.type;if(void 0===a)return t;const i=a===Boolean?j:"function"==typeof a?a:a.fromAttribute;return i?i(t):t}static _propertyValueToAttribute(t,e){if(void 0===e||void 0===e.reflect)return;return(e.type===Boolean?U:e.type&&e.type.toAttribute||String)(t)}initialize(){this.renderRoot=this.createRenderRoot(),this._saveInstanceProperties()}_saveInstanceProperties(){for(const[t]of this.constructor._classProperties)if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}}_applyInstanceProperties(){for(const[t,e]of this._instanceProperties)this[t]=e;this._instanceProperties=void 0}createRenderRoot(){return this.attachShadow({mode:"open"})}connectedCallback(){this._updateState&Y?void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this):this.requestUpdate()}disconnectedCallback(){}attributeChangedCallback(t,e,a){e!==a&&this._attributeToProperty(t,a)}_propertyToAttribute(t,e,a=q){const i=this.constructor,r=i._propertyValueToAttribute(e,a);if(void 0!==r){const e=i._attributeNameForProperty(t,a);void 0!==e&&(this._updateState=this._updateState|J,null===r?this.removeAttribute(e):this.setAttribute(e,r),this._updateState=this._updateState&~J)}}_attributeToProperty(t,e){if(!(this._updateState&J)){const a=this.constructor,i=a._attributeToPropertyMap.get(t);if(void 0!==i){const t=a._classProperties.get(i);this[i]=a._propertyValueFromAttribute(e,t)}}}requestUpdate(t,e){if(void 0!==t){const a=this.constructor._classProperties.get(t)||q;return this._requestPropertyUpdate(t,e,a)}return this._invalidate()}_requestPropertyUpdate(t,e,a){return this.constructor._valueHasChanged(this[t],e,a.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0===a.reflect&&(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,a)),this._invalidate()):this.updateComplete}async _invalidate(){if(!this._hasRequestedUpdate){let t;this._updateState=this._updateState|X;const e=this._updatePromise;this._updatePromise=new Promise(e=>t=e),await e,this._validate(),t(!this._hasRequestedUpdate)}return this.updateComplete}get _hasRequestedUpdate(){return this._updateState&X}_validate(){if(this._instanceProperties&&this._applyInstanceProperties(),this.shouldUpdate(this._changedProperties)){const t=this._changedProperties;this.update(t),this._markUpdated(),this._updateState&Y||(this._updateState=this._updateState|Y,this.firstUpdated(t)),this.updated(t)}else this._markUpdated()}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~X}get updateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){if(void 0!==this._reflectingProperties&&this._reflectingProperties.size>0){for(const[t,e]of this._reflectingProperties)this._propertyToAttribute(t,this[t],e);this._reflectingProperties=void 0}}updated(t){}firstUpdated(t){}}W._attributeToPropertyMap=new Map,W._finalized=!0,W._classProperties=new Map,W.properties={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
G((t,e)=>t.querySelector(e)),G((t,e)=>t.querySelectorAll(e));function G(t){return e=>(a,i)=>{Object.defineProperty(a,i,{get(){return t(this.renderRoot,e)},enumerable:!0,configurable:!0})}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class Z extends W{update(t){super.update(t);const e=this.render();e instanceof _&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this})}render(){}}Z.render=((t,e,a)=>{const i=a.scopeName,r=E.has(e);if(((t,e,a)=>{let i=E.get(e);void 0===i&&(s(e,e.firstChild),E.set(e,i=new z(Object.assign({templateFactory:V},a))),i.appendInto(e)),i.setValue(t),i.commit()})(t,e,Object.assign({templateFactory:(t=>e=>{const a=I(e.type,t);let i=L.get(a);void 0===i&&(i=new Map,L.set(a,i));let r=i.get(e.strings);if(void 0===r){const a=e.getTemplateElement();R&&window.ShadyCSS.prepareTemplateDom(a,t),r=new d(e,a),i.set(e.strings,r)}return r})(i)},a)),e instanceof ShadowRoot&&R&&t instanceof _){if(!F.has(i)){const t=E.get(e).value;B(e,t.template,i)}r||window.ShadyCSS.styleElement(e.host)}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Q=!(window.ShadyDOM&&window.ShadyDOM.inUse);let tt,et;function at(t){tt=(!t||!t.shimcssproperties)&&(Q||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(et=window.ShadyCSS.cssBuild),window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?tt=window.ShadyCSS.nativeCss:window.ShadyCSS?(at(window.ShadyCSS),window.ShadyCSS=void 0):at(window.WebComponents&&window.WebComponents.flags);const it=tt;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class rt{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function nt(t){return function t(e,a){let i=a.substring(e.start,e.end-1);e.parsedCssText=e.cssText=i.trim();if(e.parent){let t=e.previous?e.previous.end:e.parent.start;i=(i=(i=function(t){return t.replace(/\\([0-9a-f]{1,6})\s/gi,function(){let t=arguments[1],e=6-t.length;for(;e--;)t="0"+t;return"\\"+t})}(i=a.substring(t,e.start-1))).replace(ht.multipleSpaces," ")).substring(i.lastIndexOf(";")+1);let r=e.parsedSelector=e.selector=i.trim();e.atRule=0===r.indexOf(ut),e.atRule?0===r.indexOf(dt)?e.type=ct.MEDIA_RULE:r.match(ht.keyframesRule)&&(e.type=ct.KEYFRAMES_RULE,e.keyframesName=e.selector.split(ht.multipleSpaces).pop()):0===r.indexOf(pt)?e.type=ct.MIXIN_RULE:e.type=ct.STYLE_RULE}let r=e.rules;if(r)for(let e,i=0,n=r.length;i<n&&(e=r[i]);i++)t(e,a);return e}(function(t){let e=new rt;e.start=0,e.end=t.length;let a=e;for(let i=0,r=t.length;i<r;i++)if(t[i]===ot){a.rules||(a.rules=[]);let t=a,e=t.rules[t.rules.length-1]||null;(a=new rt).start=i+1,a.parent=t,a.previous=e,t.rules.push(a)}else t[i]===lt&&(a.end=i+1,a=a.parent||e);return e}(t=t.replace(ht.comments,"").replace(ht.port,"")),t)}function st(t,e,a=""){let i="";if(t.cssText||t.rules){let a=t.rules;if(a&&!function(t){let e=t[0];return Boolean(e)&&Boolean(e.selector)&&0===e.selector.indexOf(pt)}(a))for(let t,r=0,n=a.length;r<n&&(t=a[r]);r++)i=st(t,e,i);else(i=(i=e?t.cssText:function(t){return function(t){return t.replace(ht.mixinApply,"").replace(ht.varApply,"")}(t=function(t){return t.replace(ht.customProp,"").replace(ht.mixinProp,"")}(t))}(t.cssText)).trim())&&(i="  "+i+"\n")}return i&&(t.selector&&(a+=t.selector+" "+ot+"\n"),a+=i,t.selector&&(a+=lt+"\n\n")),a}const ct={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},ot="{",lt="}",ht={comments:/\/\*[^*]*\*+([^\/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},pt="--",dt="@media",ut="@",vt=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,mt=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,ft=/@media\s(.*)/,_t=new Set,gt="shady-unscoped";function yt(t){const e=t.textContent;if(!_t.has(e)){_t.add(e);const a=t.cloneNode(!0);document.head.appendChild(a)}}function bt(t){return t.hasAttribute(gt)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function zt(t,e){return t?("string"==typeof t&&(t=nt(t)),e&&wt(t,e),st(t,it)):""}function xt(t){return!t.__cssRules&&t.textContent&&(t.__cssRules=nt(t.textContent)),t.__cssRules||null}function wt(t,e,a,i){if(!t)return;let r=!1,n=t.type;if(i&&n===ct.MEDIA_RULE){let e=t.selector.match(ft);e&&(window.matchMedia(e[1]).matches||(r=!0))}n===ct.STYLE_RULE?e(t):a&&n===ct.KEYFRAMES_RULE?a(t):n===ct.MIXIN_RULE&&(r=!0);let s=t.rules;if(s&&!r)for(let t,r=0,n=s.length;r<n&&(t=s[r]);r++)wt(t,e,a,i)}function Ct(t,e){let a=0;for(let i=e,r=t.length;i<r;i++)if("("===t[i])a++;else if(")"===t[i]&&0==--a)return i;return-1}const Mt="css-build";function Ht(t){if(void 0!==et)return et;if(void 0===t.__cssBuild){const e=t.getAttribute(Mt);if(e)t.__cssBuild=e;else{const e=function(t){const e="template"===t.localName?t.content.firstChild:t.firstChild;if(e instanceof Comment){const t=e.textContent.trim().split(":");if(t[0]===Mt)return t[1]}return""}(t);""!==e&&function(t){const e="template"===t.localName?t.content.firstChild:t.firstChild;e.parentNode.removeChild(e)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/(t),t.__cssBuild=e}}return t.__cssBuild||""}function St(t){return""!==Ht(t)}function Pt(t,e){for(let a in e)null===a?t.style.removeProperty(a):t.style.setProperty(a,e[a])}function Vt(t,e){const a=window.getComputedStyle(t).getPropertyValue(e);return a?a.trim():""}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Lt=/;\s*/m,Et=/^\s*(initial)|(inherit)\s*$/,kt=/\s*!important/,Tt="_-_";class At{constructor(){this._map={}}set(t,e){t=t.trim(),this._map[t]={properties:e,dependants:{}}}get(t){return t=t.trim(),this._map[t]||null}}let Nt=null;class Ot{constructor(){this._currentElement=null,this._measureElement=null,this._map=new At}detectMixin(t){return function(t){const e=mt.test(t)||vt.test(t);return mt.lastIndex=0,vt.lastIndex=0,e}(t)}gatherStyles(t){const e=function(t){const e=[],a=t.querySelectorAll("style");for(let t=0;t<a.length;t++){const i=a[t];bt(i)?Q||(yt(i),i.parentNode.removeChild(i)):(e.push(i.textContent),i.parentNode.removeChild(i))}return e.join("").trim()}(t.content);if(e){const a=document.createElement("style");return a.textContent=e,t.content.insertBefore(a,t.content.firstChild),a}return null}transformTemplate(t,e){void 0===t._gatheredStyle&&(t._gatheredStyle=this.gatherStyles(t));const a=t._gatheredStyle;return a?this.transformStyle(a,e):null}transformStyle(t,e=""){let a=xt(t);return this.transformRules(a,e),t.textContent=zt(a),a}transformCustomStyle(t){let e=xt(t);return wt(e,t=>{":root"===t.selector&&(t.selector="html"),this.transformRule(t)}),t.textContent=zt(e),e}transformRules(t,e){this._currentElement=e,wt(t,t=>{this.transformRule(t)}),this._currentElement=null}transformRule(t){t.cssText=this.transformCssText(t.parsedCssText,t),":root"===t.selector&&(t.selector=":host > *")}transformCssText(t,e){return t=t.replace(vt,(t,a,i,r)=>this._produceCssProperties(t,a,i,r,e)),this._consumeCssProperties(t,e)}_getInitialValueForProperty(t){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(t)}_fallbacksFromPreviousRules(t){let e=t;for(;e.parent;)e=e.parent;const a={};let i=!1;return wt(e,e=>{(i=i||e===t)||e.selector===t.selector&&Object.assign(a,this._cssTextToMap(e.parsedCssText))}),a}_consumeCssProperties(t,e){let a=null;for(;a=mt.exec(t);){let i=a[0],r=a[1],n=a.index,s=n+i.indexOf("@apply"),c=n+i.length,o=t.slice(0,s),l=t.slice(c),h=e?this._fallbacksFromPreviousRules(e):{};Object.assign(h,this._cssTextToMap(o));let p=this._atApplyToCssProperties(r,h);t=`${o}${p}${l}`,mt.lastIndex=n+p.length}return t}_atApplyToCssProperties(t,e){t=t.replace(Lt,"");let a=[],i=this._map.get(t);if(i||(this._map.set(t,{}),i=this._map.get(t)),i){let r,n,s;this._currentElement&&(i.dependants[this._currentElement]=!0);const c=i.properties;for(r in c)s=e&&e[r],n=[r,": var(",t,Tt,r],s&&n.push(",",s.replace(kt,"")),n.push(")"),kt.test(c[r])&&n.push(" !important"),a.push(n.join(""))}return a.join("; ")}_replaceInitialOrInherit(t,e){let a=Et.exec(e);return a&&(e=a[1]?this._getInitialValueForProperty(t):"apply-shim-inherit"),e}_cssTextToMap(t,e=!1){let a,i,r=t.split(";"),n={};for(let t,s,c=0;c<r.length;c++)(t=r[c])&&(s=t.split(":")).length>1&&(a=s[0].trim(),i=s.slice(1).join(":"),e&&(i=this._replaceInitialOrInherit(a,i)),n[a]=i);return n}_invalidateMixinEntry(t){if(Nt)for(let e in t.dependants)e!==this._currentElement&&Nt(e)}_produceCssProperties(t,e,a,i,r){if(a&&function t(e,a){let i=e.indexOf("var(");if(-1===i)return a(e,"","","");let r=Ct(e,i+3),n=e.substring(i+4,r),s=e.substring(0,i),c=t(e.substring(r+1),a),o=n.indexOf(",");return-1===o?a(s,n.trim(),"",c):a(s,n.substring(0,o).trim(),n.substring(o+1).trim(),c)}(a,(t,e)=>{e&&this._map.get(e)&&(i=`@apply ${e};`)}),!i)return t;let n=this._consumeCssProperties(""+i,r),s=t.slice(0,t.indexOf("--")),c=this._cssTextToMap(n,!0),o=c,l=this._map.get(e),h=l&&l.properties;h?o=Object.assign(Object.create(h),c):this._map.set(e,o);let p,d,u=[],v=!1;for(p in o)void 0===(d=c[p])&&(d="initial"),!h||p in h||(v=!0),u.push(`${e}${Tt}${p}: ${d}`);return v&&this._invalidateMixinEntry(l),l&&(l.properties=o),a&&(s=`${t};${s}`),`${s}${u.join("; ")};`}}Ot.prototype.detectMixin=Ot.prototype.detectMixin,Ot.prototype.transformStyle=Ot.prototype.transformStyle,Ot.prototype.transformCustomStyle=Ot.prototype.transformCustomStyle,Ot.prototype.transformRules=Ot.prototype.transformRules,Ot.prototype.transformRule=Ot.prototype.transformRule,Ot.prototype.transformTemplate=Ot.prototype.transformTemplate,Ot.prototype._separator=Tt,Object.defineProperty(Ot.prototype,"invalidCallback",{get:()=>Nt,set(t){Nt=t}});var It=Ot;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var Rt={};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Dt="_applyShimCurrentVersion",Ft="_applyShimNextVersion",Bt="_applyShimValidatingVersion",jt=Promise.resolve();function Ut(t){let e=Rt[t];e&&function(t){t[Dt]=t[Dt]||0,t[Bt]=t[Bt]||0,t[Ft]=(t[Ft]||0)+1}(e)}function Kt(t){return t[Dt]===t[Ft]}function qt(t){return!Kt(t)&&t[Bt]===t[Ft]}function $t(t){t[Bt]=t[Ft],t._validating||(t._validating=!0,jt.then(function(){t[Dt]=t[Ft],t._validating=!1}))}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let Yt,Xt=null,Jt=window.HTMLImports&&window.HTMLImports.whenReady||null;function Wt(t){requestAnimationFrame(function(){Jt?Jt(t):(Xt||(Xt=new Promise(t=>{Yt=t}),"complete"===document.readyState?Yt():document.addEventListener("readystatechange",()=>{"complete"===document.readyState&&Yt()})),Xt.then(function(){t&&t()}))})}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Gt="__seenByShadyCSS",Zt="__shadyCSSCachedStyle";let Qt=null,te=null;class ee{constructor(){this.customStyles=[],this.enqueued=!1,Wt(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){!this.enqueued&&te&&(this.enqueued=!0,Wt(te))}addCustomStyle(t){t[Gt]||(t[Gt]=!0,this.customStyles.push(t),this.enqueueDocumentValidation())}getStyleForCustomStyle(t){if(t[Zt])return t[Zt];let e;return e=t.getStyle?t.getStyle():t}processStyles(){const t=this.customStyles;for(let e=0;e<t.length;e++){const a=t[e];if(a[Zt])continue;const i=this.getStyleForCustomStyle(a);if(i){const t=i.__appliedElement||i;Qt&&Qt(t),a[Zt]=t}}return t}}ee.prototype.addCustomStyle=ee.prototype.addCustomStyle,ee.prototype.getStyleForCustomStyle=ee.prototype.getStyleForCustomStyle,ee.prototype.processStyles=ee.prototype.processStyles,Object.defineProperties(ee.prototype,{transformCallback:{get:()=>Qt,set(t){Qt=t}},validateCallback:{get:()=>te,set(t){let e=!1;te||(e=!0),te=t,e&&this.enqueueDocumentValidation()}}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const ae=new It;class ie{constructor(){this.customStyleInterface=null,ae.invalidCallback=Ut}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=(t=>{ae.transformCustomStyle(t)}),this.customStyleInterface.validateCallback=(()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})}))}prepareTemplate(t,e){if(this.ensure(),St(t))return;Rt[e]=t;let a=ae.transformTemplate(t,e);t._styleAst=a}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let t=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let e=0;e<t.length;e++){let a=t[e],i=this.customStyleInterface.getStyleForCustomStyle(a);i&&ae.transformCustomStyle(i)}this.customStyleInterface.enqueued=!1}}styleSubtree(t,e){if(this.ensure(),e&&Pt(t,e),t.shadowRoot){this.styleElement(t);let e=t.shadowRoot.children||t.shadowRoot.childNodes;for(let t=0;t<e.length;t++)this.styleSubtree(e[t])}else{let e=t.children||t.childNodes;for(let t=0;t<e.length;t++)this.styleSubtree(e[t])}}styleElement(t){this.ensure();let{is:e}=function(t){let e=t.localName,a="",i="";return e?e.indexOf("-")>-1?a=e:(i=e,a=t.getAttribute&&t.getAttribute("is")||""):(a=t.is,i=t.extends),{is:a,typeExtension:i}}(t),a=Rt[e];if((!a||!St(a))&&a&&!Kt(a)){qt(a)||(this.prepareTemplate(a,e),$t(a));let i=t.shadowRoot;if(i){let t=i.querySelector("style");t&&(t.__cssRules=a._styleAst,t.textContent=zt(a._styleAst))}}}styleDocument(t){this.ensure(),this.styleSubtree(document.body,t)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const t=new ie;let e=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(e,a,i){t.flushCustomStyles(),t.prepareTemplate(e,a)},prepareTemplateStyles(t,e,a){window.ShadyCSS.prepareTemplate(t,e,a)},prepareTemplateDom(t,e){},styleSubtree(e,a){t.flushCustomStyles(),t.styleSubtree(e,a)},styleElement(e){t.flushCustomStyles(),t.styleElement(e)},styleDocument(e){t.flushCustomStyles(),t.styleDocument(e)},getComputedStyleValue:(t,e)=>Vt(t,e),flushCustomStyles(){t.flushCustomStyles()},nativeCss:it,nativeShadow:Q,cssBuild:et},e&&(window.ShadyCSS.CustomStyleInterface=e)}window.ShadyCSS.ApplyShim=ae,
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
window.JSCompiler_renameProperty=function(t,e){return t};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let re,ne,se=/(url\()([^)]*)(\))/g,ce=/(^\/)|(^#)|(^[\w-\d]*:)/;function oe(t,e){if(t&&ce.test(t))return t;if(void 0===re){re=!1;try{const t=new URL("b","http://a");t.pathname="c%20d",re="http://a/c%20d"===t.href}catch(t){}}return e||(e=document.baseURI||window.location.href),re?new URL(t,e).href:(ne||((ne=document.implementation.createHTMLDocument("temp")).base=ne.createElement("base"),ne.head.appendChild(ne.base),ne.anchor=ne.createElement("a"),ne.body.appendChild(ne.anchor)),ne.base.href=e,ne.anchor.href=t,ne.anchor.href||t)}function le(t,e){return t.replace(se,function(t,a,i,r){return a+"'"+oe(i.replace(/["']/g,""),e)+"'"+r})}function he(t){return t.substring(0,t.lastIndexOf("/")+1)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.ShadyDOM,Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss),window.customElements.polyfillWrapFlushCallback;let pe=he(document.baseURI||window.location.href);let de=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;let ue=!1;let ve=!1;let me=!1;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let fe=0;function _e(){}_e.prototype.__mixinApplications,_e.prototype.__mixinSet;const ge=function(t){let e=t.__mixinApplications;e||(e=new WeakMap,t.__mixinApplications=e);let a=fe++;return function(i){let r=i.__mixinSet;if(r&&r[a])return i;let n=e,s=n.get(i);s||(s=t(i),n.set(i,s));let c=Object.create(s.__mixinSet||r||null);return c[a]=!0,s.__mixinSet=c,s}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let ye={},be={};function ze(t,e){ye[t]=be[t.toLowerCase()]=e}function xe(t){return ye[t]||be[t.toLowerCase()]}class we extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,e){if(t){let a=xe(t);return a&&e?a.querySelector(e):a}return null}attributeChangedCallback(t,e,a,i){e!==a&&this.register()}get assetpath(){if(!this.__assetpath){const t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,e=oe(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=he(e)}return this.__assetpath}register(t){if(t=t||this.id){if(ve&&void 0!==xe(t))throw ze(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,ze(t,this),(e=this).querySelector("style")&&console.warn("dom-module %s has style outside template",e.id)}var e}}we.prototype.modules=ye,customElements.define("dom-module",we);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Ce="link[rel=import][type~=css]",Me="include",He="shady-unscoped";function Se(t){return we.import(t)}function Pe(t){const e=le((t.body?t.body:t).textContent,t.baseURI),a=document.createElement("style");return a.textContent=e,a}function Ve(t){const e=t.trim().split(/\s+/),a=[];for(let t=0;t<e.length;t++)a.push(...Le(e[t]));return a}function Le(t){const e=Se(t);if(!e)return console.warn("Could not find style data in module named",t),[];if(void 0===e._styles){const t=[];t.push(...ke(e));const a=e.querySelector("template");a&&t.push(...Ee(a,e.assetpath)),e._styles=t}return e._styles}function Ee(t,e){if(!t._styles){const a=[],i=t.content.querySelectorAll("style");for(let t=0;t<i.length;t++){let r=i[t],n=r.getAttribute(Me);n&&a.push(...Ve(n).filter(function(t,e,a){return a.indexOf(t)===e})),e&&(r.textContent=le(r.textContent,e)),a.push(r)}t._styles=a}return t._styles}function ke(t){const e=[],a=t.querySelectorAll(Ce);for(let t=0;t<a.length;t++){let i=a[t];if(i.import){const t=i.import,a=i.hasAttribute(He);if(a&&!t._unscopedStyle){const e=Pe(t);e.setAttribute(He,""),t._unscopedStyle=e}else t._style||(t._style=Pe(t));e.push(a?t._unscopedStyle:t._style)}}return e}function Te(t){let e=Se(t);if(e&&void 0===e._cssText){let t=Ae(e),a=e.querySelector("template");a&&(t+=function(t,e){let a="";const i=Ee(t,e);for(let t=0;t<i.length;t++){let e=i[t];e.parentNode&&e.parentNode.removeChild(e),a+=e.textContent}return a}(a,e.assetpath)),e._cssText=t||null}return e||console.warn("Could not find style data in module named",t),e&&e._cssText||""}function Ae(t){let e="",a=ke(t);for(let t=0;t<a.length;t++)e+=a[t].textContent;return e}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Ne(t){return t.indexOf(".")>=0}function Oe(t){let e=t.indexOf(".");return-1===e?t:t.slice(0,e)}function Ie(t,e){return 0===t.indexOf(e+".")}function Re(t,e){return 0===e.indexOf(t+".")}function De(t,e,a){return e+a.slice(t.length)}function Fe(t){if(Array.isArray(t)){let e=[];for(let a=0;a<t.length;a++){let i=t[a].toString().split(".");for(let t=0;t<i.length;t++)e.push(i[t])}return e.join(".")}return t}function Be(t){return Array.isArray(t)?Fe(t).split("."):t.toString().split(".")}function je(t,e,a){let i=t,r=Be(e);for(let t=0;t<r.length;t++){if(!i)return;i=i[r[t]]}return a&&(a.path=r.join(".")),i}function Ue(t,e,a){let i=t,r=Be(e),n=r[r.length-1];if(r.length>1){for(let t=0;t<r.length-1;t++){if(!(i=i[r[t]]))return}i[n]=a}else i[e]=a;return r.join(".")}const Ke={},qe=/-[a-z]/g,$e=/([A-Z])/g;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Ye(t){return Ke[t]||(Ke[t]=t.indexOf("-")<0?t:t.replace(qe,t=>t[1].toUpperCase()))}function Xe(t){return Ke[t]||(Ke[t]=t.replace($e,"-$1").toLowerCase())}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Je=0,We=0,Ge=[],Ze=0,Qe=document.createTextNode("");new window.MutationObserver(function(){const t=Ge.length;for(let e=0;e<t;e++){let t=Ge[e];if(t)try{t()}catch(t){setTimeout(()=>{throw t})}}Ge.splice(0,t),We+=t}).observe(Qe,{characterData:!0});const ta={after:t=>({run:e=>window.setTimeout(e,t),cancel(t){window.clearTimeout(t)}}),run:(t,e)=>window.setTimeout(t,e),cancel(t){window.clearTimeout(t)}},ea={run:t=>(Qe.textContent=Ze++,Ge.push(t),Je++),cancel(t){const e=t-We;if(e>=0){if(!Ge[e])throw new Error("invalid async handle: "+t);Ge[e]=null}}},aa=ea,ia=ge(t=>{return class extends t{static createProperties(t){const e=this.prototype;for(let a in t)a in e||e._createPropertyAccessor(a)}static attributeNameForProperty(t){return t.toLowerCase()}static typeForProperty(t){}_createPropertyAccessor(t,e){this._addPropertyToAttributeMap(t),this.hasOwnProperty("__dataHasAccessor")||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[t]||(this.__dataHasAccessor[t]=!0,this._definePropertyAccessor(t,e))}_addPropertyToAttributeMap(t){if(this.hasOwnProperty("__dataAttributes")||(this.__dataAttributes=Object.assign({},this.__dataAttributes)),!this.__dataAttributes[t]){const e=this.constructor.attributeNameForProperty(t);this.__dataAttributes[e]=t}}_definePropertyAccessor(t,e){Object.defineProperty(this,t,{get(){return this._getProperty(t)},set:e?function(){}:function(e){this._setProperty(t,e)}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let t in this.__dataHasAccessor)this.hasOwnProperty(t)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[t]=this[t],delete this[t])}_initializeInstanceProperties(t){Object.assign(this,t)}_setProperty(t,e){this._setPendingProperty(t,e)&&this._invalidateProperties()}_getProperty(t){return this.__data[t]}_setPendingProperty(t,e,a){let i=this.__data[t],r=this._shouldPropertyChange(t,e,i);return r&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),!this.__dataOld||t in this.__dataOld||(this.__dataOld[t]=i),this.__data[t]=e,this.__dataPending[t]=e),r}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,aa.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){const t=this.__data,e=this.__dataPending,a=this.__dataOld;this._shouldPropertiesChange(t,e,a)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(t,e,a))}_shouldPropertiesChange(t,e,a){return Boolean(e)}_propertiesChanged(t,e,a){}_shouldPropertyChange(t,e,a){return a!==e&&(a==a||e==e)}attributeChangedCallback(t,e,a,i){e!==a&&this._attributeToProperty(t,a),super.attributeChangedCallback&&super.attributeChangedCallback(t,e,a,i)}_attributeToProperty(t,e,a){if(!this.__serializing){const i=this.__dataAttributes,r=i&&i[t]||t;this[r]=this._deserializeValue(e,a||this.constructor.typeForProperty(r))}}_propertyToAttribute(t,e,a){this.__serializing=!0,a=arguments.length<3?this[t]:a,this._valueToNodeAttribute(this,a,e||this.constructor.attributeNameForProperty(t)),this.__serializing=!1}_valueToNodeAttribute(t,e,a){const i=this._serializeValue(e);void 0===i?t.removeAttribute(a):t.setAttribute(a,i)}_serializeValue(t){switch(typeof t){case"boolean":return t?"":void 0;default:return null!=t?t.toString():void 0}}_deserializeValue(t,e){switch(e){case Boolean:return null!==t;case Number:return Number(t);default:return t}}}}),ra={};let na=HTMLElement.prototype;for(;na;){let t=Object.getOwnPropertyNames(na);for(let e=0;e<t.length;e++)ra[t[e]]=!0;na=Object.getPrototypeOf(na)}const sa=ge(t=>{const e=ia(t);return class extends e{static createPropertiesForAttributes(){let t=this.observedAttributes;for(let e=0;e<t.length;e++)this.prototype._createPropertyAccessor(Ye(t[e]))}static attributeNameForProperty(t){return Xe(t)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(t){for(let e in t)this._setProperty(e,t[e])}_ensureAttribute(t,e){const a=this;a.hasAttribute(t)||this._valueToNodeAttribute(a,e,t)}_serializeValue(t){switch(typeof t){case"object":if(t instanceof Date)return t.toString();if(t)try{return JSON.stringify(t)}catch(t){return""}default:return super._serializeValue(t)}}_deserializeValue(t,e){let a;switch(e){case Object:try{a=JSON.parse(t)}catch(e){a=t}break;case Array:try{a=JSON.parse(t)}catch(e){a=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${t}`)}break;case Date:a=isNaN(t)?String(t):Number(t),a=new Date(a);break;default:a=super._deserializeValue(t,e)}return a}_definePropertyAccessor(t,e){!function(t,e){if(!ra[e]){let a=t[e];void 0!==a&&(t.__data?t._setPendingProperty(e,a):(t.__dataProto?t.hasOwnProperty(JSCompiler_renameProperty("__dataProto",t))||(t.__dataProto=Object.create(t.__dataProto)):t.__dataProto={},t.__dataProto[e]=a))}}(this,t),super._definePropertyAccessor(t,e)}_hasAccessor(t){return this.__dataHasAccessor&&this.__dataHasAccessor[t]}_isPropertyPending(t){return Boolean(this.__dataPending&&t in this.__dataPending)}}}),ca={"dom-if":!0,"dom-repeat":!0};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function oa(t){let e=t.getAttribute("is");if(e&&ca[e]){let a=t;for(a.removeAttribute("is"),t=a.ownerDocument.createElement(e),a.parentNode.replaceChild(t,a),t.appendChild(a);a.attributes.length;)t.setAttribute(a.attributes[0].name,a.attributes[0].value),a.removeAttribute(a.attributes[0].name)}return t}function la(t,e){let a=e.parentInfo&&la(t,e.parentInfo);if(!a)return t;for(let t=a.firstChild,i=0;t;t=t.nextSibling)if(e.parentIndex===i++)return t}function ha(t,e,a,i){i.id&&(e[i.id]=a)}function pa(t,e,a){if(a.events&&a.events.length)for(let i,r=0,n=a.events;r<n.length&&(i=n[r]);r++)t._addMethodEventListenerToNode(e,i.name,i.value,t)}function da(t,e,a){a.templateInfo&&(e._templateInfo=a.templateInfo)}const ua=ge(t=>{return class extends t{static _parseTemplate(t,e){if(!t._templateInfo){let a=t._templateInfo={};a.nodeInfoList=[],a.stripWhiteSpace=e&&e.stripWhiteSpace||t.hasAttribute("strip-whitespace"),this._parseTemplateContent(t,a,{parent:null})}return t._templateInfo}static _parseTemplateContent(t,e,a){return this._parseTemplateNode(t.content,e,a)}static _parseTemplateNode(t,e,a){let i,r=t;return"template"!=r.localName||r.hasAttribute("preserve-content")?"slot"===r.localName&&(e.hasInsertionPoint=!0):i=this._parseTemplateNestedTemplate(r,e,a)||i,r.firstChild&&(i=this._parseTemplateChildNodes(r,e,a)||i),r.hasAttributes&&r.hasAttributes()&&(i=this._parseTemplateNodeAttributes(r,e,a)||i),i}static _parseTemplateChildNodes(t,e,a){if("script"!==t.localName&&"style"!==t.localName)for(let i,r=t.firstChild,n=0;r;r=i){if("template"==r.localName&&(r=oa(r)),i=r.nextSibling,r.nodeType===Node.TEXT_NODE){let a=i;for(;a&&a.nodeType===Node.TEXT_NODE;)r.textContent+=a.textContent,i=a.nextSibling,t.removeChild(a),a=i;if(e.stripWhiteSpace&&!r.textContent.trim()){t.removeChild(r);continue}}let s={parentIndex:n,parentInfo:a};this._parseTemplateNode(r,e,s)&&(s.infoIndex=e.nodeInfoList.push(s)-1),r.parentNode&&n++}}static _parseTemplateNestedTemplate(t,e,a){let i=this._parseTemplate(t,e);return(i.content=t.content.ownerDocument.createDocumentFragment()).appendChild(t.content),a.templateInfo=i,!0}static _parseTemplateNodeAttributes(t,e,a){let i=!1,r=Array.from(t.attributes);for(let n,s=r.length-1;n=r[s];s--)i=this._parseTemplateNodeAttribute(t,e,a,n.name,n.value)||i;return i}static _parseTemplateNodeAttribute(t,e,a,i,r){return"on-"===i.slice(0,3)?(t.removeAttribute(i),a.events=a.events||[],a.events.push({name:i.slice(3),value:r}),!0):"id"===i&&(a.id=r,!0)}static _contentForTemplate(t){let e=t._templateInfo;return e&&e.content||t.content}_stampTemplate(t){t&&!t.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(t);let e=this.constructor._parseTemplate(t),a=e.nodeInfoList,i=e.content||t.content,r=document.importNode(i,!0);r.__noInsertionPoint=!e.hasInsertionPoint;let n=r.nodeList=new Array(a.length);r.$={};for(let t,e=0,i=a.length;e<i&&(t=a[e]);e++){let a=n[e]=la(r,t);ha(0,r.$,a,t),da(0,a,t),pa(this,a,t)}return r=r}_addMethodEventListenerToNode(t,e,a,i){let r=function(t,e,a){return t=t._methodHost||t,function(e){t[a]?t[a](e,e.detail):console.warn("listener method `"+a+"` not defined")}}(i=i||t,0,a);return this._addEventListenerToNode(t,e,r),r}_addEventListenerToNode(t,e,a){t.addEventListener(e,a)}_removeEventListenerFromNode(t,e,a){t.removeEventListener(e,a)}}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let va=0;const ma={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},fa=/[A-Z]/;let _a;function ga(t,e){let a=t[e];if(a){if(!t.hasOwnProperty(e)){a=t[e]=Object.create(t[e]);for(let t in a){let e=a[t],i=a[t]=Array(e.length);for(let t=0;t<e.length;t++)i[t]=e[t]}}}else a=t[e]={};return a}function ya(t,e,a,i,r,n){if(e){let s=!1,c=va++;for(let o in a)ba(t,e,c,o,a,i,r,n)&&(s=!0);return s}return!1}function ba(t,e,a,i,r,n,s,c){let o=!1,l=e[s?Oe(i):i];if(l)for(let e,h=0,p=l.length;h<p&&(e=l[h]);h++)e.info&&e.info.lastRun===a||s&&!za(i,e.trigger)||(e.info&&(e.info.lastRun=a),e.fn(t,i,r,n,e.info,s,c),o=!0);return o}function za(t,e){if(e){let a=e.name;return a==t||e.structured&&Ie(a,t)||e.wildcard&&Re(a,t)}return!0}function xa(t,e,a,i,r){let n="string"==typeof r.method?t[r.method]:r.method,s=r.property;n?n.call(t,t.__data[s],i[s]):r.dynamicFn||console.warn("observer method `"+r.method+"` not defined")}function wa(t,e,a){let i=Oe(e);if(i!==e){return Ca(t,Xe(i)+"-changed",a[e],e),!0}return!1}function Ca(t,e,a,i){let r={value:a,queueProperty:!0};i&&(r.path=i),t.dispatchEvent(new CustomEvent(e,{detail:r}))}function Ma(t,e,a,i,r,n){let s=(n?Oe(e):e)!=e?e:null,c=s?je(t,s):t.__data[e];s&&void 0===c&&(c=a[e]),Ca(t,r.eventName,c,s)}function Ha(t,e,a,i,r){let n=t.__data[e];de&&(n=de(n,r.attrName,"attribute",t)),t._propertyToAttribute(e,r.attrName,n)}function Sa(t,e,a,i,r){let n=Aa(t,e,a,i,r),s=r.methodInfo;t.__dataHasAccessor&&t.__dataHasAccessor[s]?t._setPendingProperty(s,n,!0):t[s]=n}function Pa(t,e,a,i,r,n,s){a.bindings=a.bindings||[];let c={kind:i,target:r,parts:n,literal:s,isCompound:1!==n.length};if(a.bindings.push(c),function(t){return Boolean(t.target)&&"attribute"!=t.kind&&"text"!=t.kind&&!t.isCompound&&"{"===t.parts[0].mode}(c)){let{event:t,negate:e}=c.parts[0];c.listenerEvent=t||Xe(r)+"-changed",c.listenerNegate=e}let o=e.nodeInfoList.length;for(let a=0;a<c.parts.length;a++){let i=c.parts[a];i.compoundIndex=a,Va(t,e,c,i,o)}}function Va(t,e,a,i,r){if(!i.literal)if("attribute"===a.kind&&"-"===a.target[0])console.warn("Cannot set attribute "+a.target+' because "-" is not a valid attribute starting character');else{let n=i.dependencies,s={index:r,binding:a,part:i,evaluator:t};for(let a=0;a<n.length;a++){let i=n[a];"string"==typeof i&&((i=Da(i)).wildcard=!0),t._addTemplatePropertyEffect(e,i.rootProperty,{fn:La,info:s,trigger:i})}}}function La(t,e,a,i,r,n,s){let c=s[r.index],o=r.binding,l=r.part;if(n&&l.source&&e.length>l.source.length&&"property"==o.kind&&!o.isCompound&&c.__isPropertyEffectsClient&&c.__dataHasAccessor&&c.__dataHasAccessor[o.target]){let i=a[e];e=De(l.source,o.target,e),c._setPendingPropertyOrPath(e,i,!1,!0)&&t._enqueueClient(c)}else{!function(t,e,a,i,r){r=function(t,e,a,i){if(a.isCompound){let r=t.__dataCompoundStorage[a.target];r[i.compoundIndex]=e,e=r.join("")}return"attribute"!==a.kind&&("textContent"!==a.target&&("value"!==a.target||"input"!==t.localName&&"textarea"!==t.localName)||(e=null==e?"":e)),e}(e,r,a,i),de&&(r=de(r,a.target,a.kind,e));if("attribute"==a.kind)t._valueToNodeAttribute(e,r,a.target);else{let i=a.target;e.__isPropertyEffectsClient&&e.__dataHasAccessor&&e.__dataHasAccessor[i]?e[ma.READ_ONLY]&&e[ma.READ_ONLY][i]||e._setPendingProperty(i,r)&&t._enqueueClient(e):t._setUnmanagedPropertyToNode(e,i,r)}}(t,c,o,l,r.evaluator._evaluateBinding(t,l,e,a,i,n))}}function Ea(t,e){if(e.isCompound){let a=t.__dataCompoundStorage||(t.__dataCompoundStorage={}),i=e.parts,r=new Array(i.length);for(let t=0;t<i.length;t++)r[t]=i[t].literal;let n=e.target;a[n]=r,e.literal&&"property"==e.kind&&(t[n]=e.literal)}}function ka(t,e,a){if(a.listenerEvent){let i=a.parts[0];t.addEventListener(a.listenerEvent,function(t){!function(t,e,a,i,r){let n,s=t.detail,c=s&&s.path;c?(i=De(a,i,c),n=s&&s.value):n=t.currentTarget[a],n=r?!n:n,e[ma.READ_ONLY]&&e[ma.READ_ONLY][i]||!e._setPendingPropertyOrPath(i,n,!0,Boolean(c))||s&&s.queueProperty||e._invalidateProperties()}(t,e,a.target,i.source,i.negate)})}}function Ta(t,e,a,i,r,n){n=e.static||n&&("object"!=typeof n||n[e.methodName]);let s={methodName:e.methodName,args:e.args,methodInfo:r,dynamicFn:n};for(let r,n=0;n<e.args.length&&(r=e.args[n]);n++)r.literal||t._addPropertyEffect(r.rootProperty,a,{fn:i,info:s,trigger:r});n&&t._addPropertyEffect(e.methodName,a,{fn:i,info:s})}function Aa(t,e,a,i,r){let n=t._methodHost||t,s=n[r.methodName];if(s){let i=t._marshalArgs(r.args,e,a);return s.apply(n,i)}r.dynamicFn||console.warn("method `"+r.methodName+"` not defined")}const Na=[],Oa=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})","g");function Ia(t){let e="";for(let a=0;a<t.length;a++){e+=t[a].literal||""}return e}function Ra(t){let e=t.match(/([^\s]+?)\(([\s\S]*)\)/);if(e){let t={methodName:e[1],static:!0,args:Na};if(e[2].trim()){return function(t,e){return e.args=t.map(function(t){let a=Da(t);return a.literal||(e.static=!1),a},this),e}(e[2].replace(/\\,/g,"&comma;").split(","),t)}return t}return null}function Da(t){let e=t.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),a={name:e,value:"",literal:!1},i=e[0];switch("-"===i&&(i=e[1]),i>="0"&&i<="9"&&(i="#"),i){case"'":case'"':a.value=e.slice(1,-1),a.literal=!0;break;case"#":a.value=Number(e),a.literal=!0}return a.literal||(a.rootProperty=Oe(e),a.structured=Ne(e),a.structured&&(a.wildcard=".*"==e.slice(-2),a.wildcard&&(a.name=e.slice(0,-2)))),a}function Fa(t,e,a,i){let r=a+".splices";t.notifyPath(r,{indexSplices:i}),t.notifyPath(a+".length",e.length),t.__data[r]={indexSplices:null}}function Ba(t,e,a,i,r,n){Fa(t,e,a,[{index:i,addedCount:r,removed:n,object:e,type:"splice"}])}const ja=ge(t=>{const e=ua(sa(t));class a extends e{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataCounter=0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo}get PROPERTY_EFFECT_TYPES(){return ma}_initializeProperties(){super._initializeProperties(),Ua.registerHost(this),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_initializeProtoProperties(t){this.__data=Object.create(t),this.__dataPending=Object.create(t),this.__dataOld={}}_initializeInstanceProperties(t){let e=this[ma.READ_ONLY];for(let a in t)e&&e[a]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[a]=this.__dataPending[a]=t[a])}_addPropertyEffect(t,e,a){this._createPropertyAccessor(t,e==ma.READ_ONLY);let i=ga(this,e)[t];i||(i=this[e][t]=[]),i.push(a)}_removePropertyEffect(t,e,a){let i=ga(this,e)[t],r=i.indexOf(a);r>=0&&i.splice(r,1)}_hasPropertyEffect(t,e){let a=this[e];return Boolean(a&&a[t])}_hasReadOnlyEffect(t){return this._hasPropertyEffect(t,ma.READ_ONLY)}_hasNotifyEffect(t){return this._hasPropertyEffect(t,ma.NOTIFY)}_hasReflectEffect(t){return this._hasPropertyEffect(t,ma.REFLECT)}_hasComputedEffect(t){return this._hasPropertyEffect(t,ma.COMPUTE)}_setPendingPropertyOrPath(t,e,a,i){if(i||Oe(Array.isArray(t)?t[0]:t)!==t){if(!i){let a=je(this,t);if(!(t=Ue(this,t,e))||!super._shouldPropertyChange(t,e,a))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(t,e,a))return function(t,e,a){let i=t.__dataLinkedPaths;if(i){let r;for(let n in i){let s=i[n];Re(n,e)?(r=De(n,s,e),t._setPendingPropertyOrPath(r,a,!0,!0)):Re(s,e)&&(r=De(s,n,e),t._setPendingPropertyOrPath(r,a,!0,!0))}}}(this,t,e),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[t])return this._setPendingProperty(t,e,a);this[t]=e}return!1}_setUnmanagedPropertyToNode(t,e,a){a===t[e]&&"object"!=typeof a||(t[e]=a)}_setPendingProperty(t,e,a){let i=this.__dataHasPaths&&Ne(t),r=i?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(t,e,r[t])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),t in this.__dataOld||(this.__dataOld[t]=this.__data[t]),i?this.__dataTemp[t]=e:this.__data[t]=e,this.__dataPending[t]=e,(i||this[ma.NOTIFY]&&this[ma.NOTIFY][t])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[t]=a),!0)}_setProperty(t,e){this._setPendingProperty(t,e,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(t){this.__dataPendingClients=this.__dataPendingClients||[],t!==this&&this.__dataPendingClients.push(t)}_flushProperties(){this.__dataCounter++,super._flushProperties(),this.__dataCounter--}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let t=this.__dataPendingClients;if(t){this.__dataPendingClients=null;for(let e=0;e<t.length;e++){let a=t[e];a.__dataEnabled?a.__dataPending&&a._flushProperties():a._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(t,e){for(let a in t)!e&&this[ma.READ_ONLY]&&this[ma.READ_ONLY][a]||this._setPendingPropertyOrPath(a,t[a],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(t,e,a){let i=this.__dataHasPaths;this.__dataHasPaths=!1,function(t,e,a,i){let r=t[ma.COMPUTE];if(r){let n=e;for(;ya(t,r,n,a,i);)Object.assign(a,t.__dataOld),Object.assign(e,t.__dataPending),n=t.__dataPending,t.__dataPending=null}}(this,e,a,i);let r=this.__dataToNotify;this.__dataToNotify=null,this._propagatePropertyChanges(e,a,i),this._flushClients(),ya(this,this[ma.REFLECT],e,a,i),ya(this,this[ma.OBSERVE],e,a,i),r&&function(t,e,a,i,r){let n,s,c=t[ma.NOTIFY],o=va++;for(let s in e)e[s]&&(c&&ba(t,c,o,s,a,i,r)?n=!0:r&&wa(t,s,a)&&(n=!0));n&&(s=t.__dataHost)&&s._invalidateProperties&&s._invalidateProperties()}(this,r,e,a,i),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(t,e,a){this[ma.PROPAGATE]&&ya(this,this[ma.PROPAGATE],t,e,a);let i=this.__templateInfo;for(;i;)ya(this,i.propertyEffects,t,e,a,i.nodeList),i=i.nextTemplateInfo}linkPaths(t,e){t=Fe(t),e=Fe(e),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[t]=e}unlinkPaths(t){t=Fe(t),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[t]}notifySplices(t,e){let a={path:""};Fa(this,je(this,t,a),a.path,e)}get(t,e){return je(e||this,t)}set(t,e,a){a?Ue(a,t,e):this[ma.READ_ONLY]&&this[ma.READ_ONLY][t]||this._setPendingPropertyOrPath(t,e,!0)&&this._invalidateProperties()}push(t,...e){let a={path:""},i=je(this,t,a),r=i.length,n=i.push(...e);return e.length&&Ba(this,i,a.path,r,e.length,[]),n}pop(t){let e={path:""},a=je(this,t,e),i=Boolean(a.length),r=a.pop();return i&&Ba(this,a,e.path,a.length,0,[r]),r}splice(t,e,a,...i){let r,n={path:""},s=je(this,t,n);return e<0?e=s.length-Math.floor(-e):e&&(e=Math.floor(e)),r=2===arguments.length?s.splice(e):s.splice(e,a,...i),(i.length||r.length)&&Ba(this,s,n.path,e,i.length,r),r}shift(t){let e={path:""},a=je(this,t,e),i=Boolean(a.length),r=a.shift();return i&&Ba(this,a,e.path,0,0,[r]),r}unshift(t,...e){let a={path:""},i=je(this,t,a),r=i.unshift(...e);return e.length&&Ba(this,i,a.path,0,e.length,[]),r}notifyPath(t,e){let a;if(1==arguments.length){let i={path:""};e=je(this,t,i),a=i.path}else a=Array.isArray(t)?Fe(t):t;this._setPendingPropertyOrPath(a,e,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(t,e){var a;this._addPropertyEffect(t,ma.READ_ONLY),e&&(this["_set"+(a=t,a[0].toUpperCase()+a.substring(1))]=function(e){this._setProperty(t,e)})}_createPropertyObserver(t,e,a){let i={property:t,method:e,dynamicFn:Boolean(a)};this._addPropertyEffect(t,ma.OBSERVE,{fn:xa,info:i,trigger:{name:t}}),a&&this._addPropertyEffect(e,ma.OBSERVE,{fn:xa,info:i,trigger:{name:e}})}_createMethodObserver(t,e){let a=Ra(t);if(!a)throw new Error("Malformed observer expression '"+t+"'");Ta(this,a,ma.OBSERVE,Aa,null,e)}_createNotifyingProperty(t){this._addPropertyEffect(t,ma.NOTIFY,{fn:Ma,info:{eventName:Xe(t)+"-changed",property:t}})}_createReflectedProperty(t){let e=this.constructor.attributeNameForProperty(t);"-"===e[0]?console.warn("Property "+t+" cannot be reflected to attribute "+e+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(t,ma.REFLECT,{fn:Ha,info:{attrName:e}})}_createComputedProperty(t,e,a){let i=Ra(e);if(!i)throw new Error("Malformed computed expression '"+e+"'");Ta(this,i,ma.COMPUTE,Sa,t,a)}_marshalArgs(t,e,a){const i=this.__data;let r=[];for(let n=0,s=t.length;n<s;n++){let s,c=t[n],o=c.name;if(c.literal?s=c.value:c.structured?void 0===(s=je(i,o))&&(s=a[o]):s=i[o],c.wildcard){let t=0===o.indexOf(e+"."),i=0===e.indexOf(o)&&!t;r[n]={path:i?e:o,value:i?a[e]:s,base:s}}else r[n]=s}return r}static addPropertyEffect(t,e,a){this.prototype._addPropertyEffect(t,e,a)}static createPropertyObserver(t,e,a){this.prototype._createPropertyObserver(t,e,a)}static createMethodObserver(t,e){this.prototype._createMethodObserver(t,e)}static createNotifyingProperty(t){this.prototype._createNotifyingProperty(t)}static createReadOnlyProperty(t,e){this.prototype._createReadOnlyProperty(t,e)}static createReflectedProperty(t){this.prototype._createReflectedProperty(t)}static createComputedProperty(t,e,a){this.prototype._createComputedProperty(t,e,a)}static bindTemplate(t){return this.prototype._bindTemplate(t)}_bindTemplate(t,e){let a=this.constructor._parseTemplate(t),i=this.__templateInfo==a;if(!i)for(let t in a.propertyEffects)this._createPropertyAccessor(t);if(e&&((a=Object.create(a)).wasPreBound=i,!i&&this.__templateInfo)){let t=this.__templateInfoLast||this.__templateInfo;return this.__templateInfoLast=t.nextTemplateInfo=a,a.previousTemplateInfo=t,a}return this.__templateInfo=a}static _addTemplatePropertyEffect(t,e,a){(t.hostProps=t.hostProps||{})[e]=!0;let i=t.propertyEffects=t.propertyEffects||{};(i[e]=i[e]||[]).push(a)}_stampTemplate(t){Ua.beginHosting(this);let e=super._stampTemplate(t);Ua.endHosting(this);let a=this._bindTemplate(t,!0);if(a.nodeList=e.nodeList,!a.wasPreBound){let t=a.childNodes=[];for(let a=e.firstChild;a;a=a.nextSibling)t.push(a)}return e.templateInfo=a,function(t,e){let{nodeList:a,nodeInfoList:i}=e;if(i.length)for(let e=0;e<i.length;e++){let r=i[e],n=a[e],s=r.bindings;if(s)for(let e=0;e<s.length;e++){let a=s[e];Ea(n,a),ka(n,t,a)}n.__dataHost=t}}(this,a),this.__dataReady&&ya(this,a.propertyEffects,this.__data,null,!1,a.nodeList),e}_removeBoundDom(t){let e=t.templateInfo;e.previousTemplateInfo&&(e.previousTemplateInfo.nextTemplateInfo=e.nextTemplateInfo),e.nextTemplateInfo&&(e.nextTemplateInfo.previousTemplateInfo=e.previousTemplateInfo),this.__templateInfoLast==e&&(this.__templateInfoLast=e.previousTemplateInfo),e.previousTemplateInfo=e.nextTemplateInfo=null;let a=e.childNodes;for(let t=0;t<a.length;t++){let e=a[t];e.parentNode.removeChild(e)}}static _parseTemplateNode(t,e,a){let i=super._parseTemplateNode(t,e,a);if(t.nodeType===Node.TEXT_NODE){let r=this._parseBindings(t.textContent,e);r&&(t.textContent=Ia(r)||" ",Pa(this,e,a,"text","textContent",r),i=!0)}return i}static _parseTemplateNodeAttribute(t,e,a,i,r){let n=this._parseBindings(r,e);if(n){let r=i,s="property";fa.test(i)?s="attribute":"$"==i[i.length-1]&&(i=i.slice(0,-1),s="attribute");let c=Ia(n);return c&&"attribute"==s&&t.setAttribute(i,c),"input"===t.localName&&"value"===r&&t.setAttribute(r,""),t.removeAttribute(r),"property"===s&&(i=Ye(i)),Pa(this,e,a,s,i,n,c),!0}return super._parseTemplateNodeAttribute(t,e,a,i,r)}static _parseTemplateNestedTemplate(t,e,a){let i=super._parseTemplateNestedTemplate(t,e,a),r=a.templateInfo.hostProps;for(let t in r){Pa(this,e,a,"property","_host_"+t,[{mode:"{",source:t,dependencies:[t]}])}return i}static _parseBindings(t,e){let a,i=[],r=0;for(;null!==(a=Oa.exec(t));){a.index>r&&i.push({literal:t.slice(r,a.index)});let n=a[1][0],s=Boolean(a[2]),c=a[3].trim(),o=!1,l="",h=-1;"{"==n&&(h=c.indexOf("::"))>0&&(l=c.substring(h+2),c=c.substring(0,h),o=!0);let p=Ra(c),d=[];if(p){let{args:t,methodName:a}=p;for(let e=0;e<t.length;e++){let a=t[e];a.literal||d.push(a)}let i=e.dynamicFns;(i&&i[a]||p.static)&&(d.push(a),p.dynamicFn=!0)}else d.push(c);i.push({source:c,mode:n,negate:s,customEvent:o,signature:p,dependencies:d,event:l}),r=Oa.lastIndex}if(r&&r<t.length){let e=t.substring(r);e&&i.push({literal:e})}return i.length?i:null}static _evaluateBinding(t,e,a,i,r,n){let s;return s=e.signature?Aa(t,a,i,0,e.signature):a!=e.source?je(t,e.source):n&&Ne(a)?je(t,a):t.__data[a],e.negate&&(s=!s),s}}return _a=a,a});const Ua=new class{constructor(){this.stack=[]}registerHost(t){this.stack.length&&this.stack[this.stack.length-1]._enqueueClient(t)}beginHosting(t){this.stack.push(t)}endHosting(t){let e=this.stack.length;e&&this.stack[e-1]==t&&this.stack.pop()}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ka=ge(t=>{const e=ia(t);function a(t){const e=Object.getPrototypeOf(t);return e.prototype instanceof r?e:null}function i(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",t))){let e=null;if(t.hasOwnProperty(JSCompiler_renameProperty("properties",t))){const a=t.properties;a&&(e=function(t){const e={};for(let a in t){const i=t[a];e[a]="function"==typeof i?{type:i}:i}return e}(a))}t.__ownProperties=e}return t.__ownProperties}class r extends e{static get observedAttributes(){const t=this._properties;return t?Object.keys(t).map(t=>this.attributeNameForProperty(t)):[]}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const t=a(this);t&&t.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const t=i(this);t&&this.createProperties(t)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const t=a(this);this.__properties=Object.assign({},t&&t._properties,i(this))}return this.__properties}static typeForProperty(t){const e=this._properties[t];return e&&e.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return r}),qa="3.0.5",$a=ge(t=>{const e=Ka(ja(t));function a(t,e,a,i){const r=e.content.querySelectorAll("style"),n=Ee(e),s=function(t){let e=Se(t);return e?ke(e):[]}(a),c=e.content.firstElementChild;for(let a=0;a<s.length;a++){let r=s[a];r.textContent=t._processStyleText(r.textContent,i),e.content.insertBefore(r,c)}let o=0;for(let e=0;e<n.length;e++){let a=n[e],s=r[o];s!==a?(a=a.cloneNode(!0),s.parentNode.insertBefore(a,s)):o++,a.textContent=t._processStyleText(a.textContent,i)}window.ShadyCSS&&window.ShadyCSS.prepareTemplate(e,a)}return class extends e{static get polymerElementVersion(){return qa}static _finalizeClass(){var t;super._finalizeClass(),this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&this.is&&(t=this.prototype,Ya.push(t));const e=((a=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",a))||(a.__ownObservers=a.hasOwnProperty(JSCompiler_renameProperty("observers",a))?a.observers:null),a.__ownObservers);var a;e&&this.createObservers(e,this._properties);let i=this.template;i&&("string"==typeof i?(console.error("template getter must return HTMLTemplateElement"),i=null):i=i.cloneNode(!0)),this.prototype._template=i}static createProperties(t){for(let n in t)e=this.prototype,a=n,i=t[n],r=t,i.computed&&(i.readOnly=!0),i.computed&&!e._hasReadOnlyEffect(a)&&e._createComputedProperty(a,i.computed,r),i.readOnly&&!e._hasReadOnlyEffect(a)&&e._createReadOnlyProperty(a,!i.computed),i.reflectToAttribute&&!e._hasReflectEffect(a)&&e._createReflectedProperty(a),i.notify&&!e._hasNotifyEffect(a)&&e._createNotifyingProperty(a),i.observer&&e._createPropertyObserver(a,i.observer,r[i.observer]),e._addPropertyToAttributeMap(a);var e,a,i,r}static createObservers(t,e){const a=this.prototype;for(let i=0;i<t.length;i++)a._createMethodObserver(t[i],e)}static get template(){return this.hasOwnProperty(JSCompiler_renameProperty("_template",this))||(this._template=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:function(t){let e=null;if(t&&(!ve||me)&&(e=we.import(t,"template"),ve&&!e))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${t}`);return e}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template),this._template}static set template(t){this._template=t}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const t=this.importMeta;if(t)this._importPath=he(t.url);else{const t=we.import(this.is);this._importPath=t&&t.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){0,this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=pe,this.importPath=this.constructor.importPath;let t=function(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",t))){t.__propertyDefaults=null;let e=t._properties;for(let a in e){let i=e[a];"value"in i&&(t.__propertyDefaults=t.__propertyDefaults||{},t.__propertyDefaults[a]=i)}}return t.__propertyDefaults}(this.constructor);if(t)for(let e in t){let a=t[e];if(!this.hasOwnProperty(e)){let t="function"==typeof a.value?a.value.call(this):a.value;this._hasAccessor(e)?this._setPendingProperty(e,t,!0):this[e]=t}}}static _processStyleText(t,e){return le(t,e)}static _finalizeTemplate(t){const e=this.prototype._template;if(e&&!e.__polymerFinalized){e.__polymerFinalized=!0;const i=this.importPath;a(this,e,t,i?oe(i):""),this.prototype._bindTemplate(e)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(t){if(this.attachShadow)return t?(this.shadowRoot||this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(t),this.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(t){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,t)}resolveUrl(t,e){return!e&&this.importPath&&(e=oe(this.importPath)),oe(t,e)}static _parseTemplateContent(t,e,a){return e.dynamicFns=e.dynamicFns||this._properties,super._parseTemplateContent(t,e,a)}}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ya=[];
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class Xa{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run(()=>{this._timer=null,this._callback()})}cancel(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(t,e,a){return t instanceof Xa?t.cancel():t=new Xa,t.setConfig(e,a),t}}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Ja="string"==typeof document.head.style.touchAction,Wa="__polymerGestures",Ga="__polymerGesturesHandled",Za="__polymerGesturesTouchAction",Qa=25,ti=5,ei=2500,ai=["mousedown","mousemove","mouseup","click"],ii=[0,1,4,2],ri=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(t){return!1}}();function ni(t){return ai.indexOf(t)>-1}let si=!1;function ci(t){if(!ni(t)&&"touchend"!==t)return Ja&&si&&ue?{passive:!0}:void 0}!function(){try{let t=Object.defineProperty({},"passive",{get(){si=!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(t){}}();let oi=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const li=[],hi={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},pi={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function di(t){let e=Array.prototype.slice.call(t.labels||[]);if(!e.length){e=[];let a=t.getRootNode();if(t.id){let i=a.querySelectorAll(`label[for = ${t.id}]`);for(let t=0;t<i.length;t++)e.push(i[t])}}return e}let ui=function(t){let e=t.sourceCapabilities;var a;if((!e||e.firesTouchEvents)&&(t[Ga]={skip:!0},"click"===t.type)){let e=!1,i=t.composedPath&&t.composedPath();if(i)for(let t=0;t<i.length;t++){if(i[t].nodeType===Node.ELEMENT_NODE)if("label"===i[t].localName)li.push(i[t]);else if(a=i[t],hi[a.localName]){let a=di(i[t]);for(let t=0;t<a.length;t++)e=e||li.indexOf(a[t])>-1}if(i[t]===fi.mouse.target)return}if(e)return;t.preventDefault(),t.stopPropagation()}};function vi(t){let e=oi?["click"]:ai;for(let a,i=0;i<e.length;i++)a=e[i],t?(li.length=0,document.addEventListener(a,ui,!0)):document.removeEventListener(a,ui,!0)}function mi(t){let e=t.type;if(!ni(e))return!1;if("mousemove"===e){let e=void 0===t.buttons?1:t.buttons;return t instanceof window.MouseEvent&&!ri&&(e=ii[t.which]||0),Boolean(1&e)}return 0===(void 0===t.button?0:t.button)}let fi={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function _i(t,e,a){t.movefn=e,t.upfn=a,document.addEventListener("mousemove",e),document.addEventListener("mouseup",a)}function gi(t){document.removeEventListener("mousemove",t.movefn),document.removeEventListener("mouseup",t.upfn),t.movefn=null,t.upfn=null}document.addEventListener("touchend",function(t){fi.mouse.mouseIgnoreJob||vi(!0),fi.mouse.target=t.composedPath()[0],fi.mouse.mouseIgnoreJob=Xa.debounce(fi.mouse.mouseIgnoreJob,ta.after(ei),function(){vi(),fi.mouse.target=null,fi.mouse.mouseIgnoreJob=null})},!!si&&{passive:!0});const yi={},bi=[];function zi(t){if(t.composedPath){const e=t.composedPath();return e.length>0?e[0]:t.target}return t.target}function xi(t){let e,a=t.type,i=t.currentTarget[Wa];if(!i)return;let r=i[a];if(r){if(!t[Ga]&&(t[Ga]={},"touch"===a.slice(0,5))){let e=(t=t).changedTouches[0];if("touchstart"===a&&1===t.touches.length&&(fi.touch.id=e.identifier),fi.touch.id!==e.identifier)return;Ja||"touchstart"!==a&&"touchmove"!==a||function(t){let e=t.changedTouches[0],a=t.type;if("touchstart"===a)fi.touch.x=e.clientX,fi.touch.y=e.clientY,fi.touch.scrollDecided=!1;else if("touchmove"===a){if(fi.touch.scrollDecided)return;fi.touch.scrollDecided=!0;let a=function(t){let e="auto",a=t.composedPath&&t.composedPath();if(a)for(let t,i=0;i<a.length;i++)if((t=a[i])[Za]){e=t[Za];break}return e}(t),i=!1,r=Math.abs(fi.touch.x-e.clientX),n=Math.abs(fi.touch.y-e.clientY);t.cancelable&&("none"===a?i=!0:"pan-x"===a?i=n>r:"pan-y"===a&&(i=r>n)),i?t.preventDefault():Pi("track")}}(t)}if(!(e=t[Ga]).skip){for(let a,i=0;i<bi.length;i++)r[(a=bi[i]).name]&&!e[a.name]&&a.flow&&a.flow.start.indexOf(t.type)>-1&&a.reset&&a.reset();for(let i,n=0;n<bi.length;n++)r[(i=bi[n]).name]&&!e[i.name]&&(e[i.name]=!0,i[a](t))}}}function wi(t,e,a){return!!yi[e]&&(function(t,e,a){let i=yi[e],r=i.deps,n=i.name,s=t[Wa];s||(t[Wa]=s={});for(let e,a,i=0;i<r.length;i++)e=r[i],oi&&ni(e)&&"click"!==e||((a=s[e])||(s[e]=a={_count:0}),0===a._count&&t.addEventListener(e,xi,ci(e)),a[n]=(a[n]||0)+1,a._count=(a._count||0)+1);t.addEventListener(e,a),i.touchAction&&Hi(t,i.touchAction)}(t,e,a),!0)}function Ci(t,e,a){return!!yi[e]&&(function(t,e,a){let i=yi[e],r=i.deps,n=i.name,s=t[Wa];if(s)for(let e,a,i=0;i<r.length;i++)e=r[i],(a=s[e])&&a[n]&&(a[n]=(a[n]||1)-1,a._count=(a._count||1)-1,0===a._count&&t.removeEventListener(e,xi,ci(e)));t.removeEventListener(e,a)}(t,e,a),!0)}function Mi(t){bi.push(t);for(let e=0;e<t.emits.length;e++)yi[t.emits[e]]=t}function Hi(t,e){Ja&&t instanceof HTMLElement&&ea.run(()=>{t.style.touchAction=e}),t[Za]=e}function Si(t,e,a){let i=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(i.detail=a,t.dispatchEvent(i),i.defaultPrevented){let t=a.preventer||a.sourceEvent;t&&t.preventDefault&&t.preventDefault()}}function Pi(t){let e=function(t){for(let e,a=0;a<bi.length;a++){e=bi[a];for(let a,i=0;i<e.emits.length;i++)if((a=e.emits[i])===t)return e}return null}(t);e.info&&(e.info.prevent=!0)}function Vi(t,e,a,i){e&&Si(e,t,{x:a.clientX,y:a.clientY,sourceEvent:a,preventer:i,prevent:function(t){return Pi(t)}})}function Li(t,e,a){if(t.prevent)return!1;if(t.started)return!0;let i=Math.abs(t.x-e),r=Math.abs(t.y-a);return i>=ti||r>=ti}function Ei(t,e,a){if(!e)return;let i,r=t.moves[t.moves.length-2],n=t.moves[t.moves.length-1],s=n.x-t.x,c=n.y-t.y,o=0;r&&(i=n.x-r.x,o=n.y-r.y),Si(e,"track",{state:t.state,x:a.clientX,y:a.clientY,dx:s,dy:c,ddx:i,ddy:o,sourceEvent:a,hover:function(){return function(t,e){let a=document.elementFromPoint(t,e),i=a;for(;i&&i.shadowRoot&&!window.ShadyDOM&&i!==(i=i.shadowRoot.elementFromPoint(t,e));)i&&(a=i);return a}(a.clientX,a.clientY)}})}function ki(t,e,a){let i=Math.abs(e.clientX-t.x),r=Math.abs(e.clientY-t.y),n=zi(a||e);!n||pi[n.localName]&&n.hasAttribute("disabled")||(isNaN(i)||isNaN(r)||i<=Qa&&r<=Qa||function(t){if("click"===t.type){if(0===t.detail)return!0;let e=zi(t);if(!e.nodeType||e.nodeType!==Node.ELEMENT_NODE)return!0;let a=e.getBoundingClientRect(),i=t.pageX,r=t.pageY;return!(i>=a.left&&i<=a.right&&r>=a.top&&r<=a.bottom)}return!1}(e))&&(t.prevent||Si(n,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:a}))}Mi({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){gi(this.info)},mousedown:function(t){if(!mi(t))return;let e=zi(t),a=this;_i(this.info,function(t){mi(t)||(Vi("up",e,t),gi(a.info))},function(t){mi(t)&&Vi("up",e,t),gi(a.info)}),Vi("down",e,t)},touchstart:function(t){Vi("down",zi(t),t.changedTouches[0],t)},touchend:function(t){Vi("up",zi(t),t.changedTouches[0],t)}}),Mi({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(t){this.moves.length>2&&this.moves.shift(),this.moves.push(t)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,gi(this.info)},mousedown:function(t){if(!mi(t))return;let e=zi(t),a=this,i=function(t){let i=t.clientX,r=t.clientY;Li(a.info,i,r)&&(a.info.state=a.info.started?"mouseup"===t.type?"end":"track":"start","start"===a.info.state&&Pi("tap"),a.info.addMove({x:i,y:r}),mi(t)||(a.info.state="end",gi(a.info)),e&&Ei(a.info,e,t),a.info.started=!0)};_i(this.info,i,function(t){a.info.started&&i(t),gi(a.info)}),this.info.x=t.clientX,this.info.y=t.clientY},touchstart:function(t){let e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove:function(t){let e=zi(t),a=t.changedTouches[0],i=a.clientX,r=a.clientY;Li(this.info,i,r)&&("start"===this.info.state&&Pi("tap"),this.info.addMove({x:i,y:r}),Ei(this.info,e,a),this.info.state="track",this.info.started=!0)},touchend:function(t){let e=zi(t),a=t.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:a.clientX,y:a.clientY}),Ei(this.info,e,a))}}),Mi({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(t){mi(t)&&(this.info.x=t.clientX,this.info.y=t.clientY)},click:function(t){mi(t)&&ki(this.info,t)},touchstart:function(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchend:function(t){ki(this.info,t.changedTouches[0],t)}});const Ti=ge(t=>{return class extends t{_addEventListenerToNode(t,e,a){wi(t,e,a)||super._addEventListenerToNode(t,e,a)}_removeEventListenerFromNode(t,e,a){Ci(t,e,a)||super._removeEventListenerFromNode(t,e,a)}}}),Ai=/:host\(:dir\((ltr|rtl)\)\)/g,Ni=':host([dir="$1"])',Oi=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,Ii=':host([dir="$2"]) $1',Ri=[];let Di=null,Fi="";function Bi(){Fi=document.documentElement.getAttribute("dir")}function ji(t){if(!t.__autoDirOptOut){t.setAttribute("dir",Fi)}}function Ui(){Bi(),Fi=document.documentElement.getAttribute("dir");for(let t=0;t<Ri.length;t++)ji(Ri[t])}const Ki=ge(t=>{Di||(Bi(),(Di=new MutationObserver(Ui)).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const e=sa(t);class a extends e{static _processStyleText(t,e){return t=super._processStyleText(t,e),t=this._replaceDirInCssText(t)}static _replaceDirInCssText(t){let e=t;return t!==(e=(e=e.replace(Ai,Ni)).replace(Oi,Ii))&&(this.__activateDir=!0),e}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){e.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(Di&&Di.takeRecords().length&&Ui(),Ri.push(this),ji(this))}disconnectedCallback(){if(e.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const t=Ri.indexOf(this);t>-1&&Ri.splice(t,1)}}}return a.__activateDir=!1,a});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function qi(){document.body.removeAttribute("unresolved")}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function $i(t,e,a){return{index:t,removed:e,addedCount:a}}"interactive"===document.readyState||"complete"===document.readyState?qi():window.addEventListener("DOMContentLoaded",qi);const Yi=0,Xi=1,Ji=2,Wi=3;function Gi(t,e,a,i,r,n){let s,c=0,o=0,l=Math.min(a-e,n-r);if(0==e&&0==r&&(c=function(t,e,a){for(let i=0;i<a;i++)if(!Qi(t[i],e[i]))return i;return a}(t,i,l)),a==t.length&&n==i.length&&(o=function(t,e,a){let i=t.length,r=e.length,n=0;for(;n<a&&Qi(t[--i],e[--r]);)n++;return n}(t,i,l-c)),r+=c,n-=o,(a-=o)-(e+=c)==0&&n-r==0)return[];if(e==a){for(s=$i(e,[],0);r<n;)s.removed.push(i[r++]);return[s]}if(r==n)return[$i(e,[],a-e)];let h=function(t){let e=t.length-1,a=t[0].length-1,i=t[e][a],r=[];for(;e>0||a>0;){if(0==e){r.push(Ji),a--;continue}if(0==a){r.push(Wi),e--;continue}let n,s=t[e-1][a-1],c=t[e-1][a],o=t[e][a-1];(n=c<o?c<s?c:s:o<s?o:s)==s?(s==i?r.push(Yi):(r.push(Xi),i=s),e--,a--):n==c?(r.push(Wi),e--,i=c):(r.push(Ji),a--,i=o)}return r.reverse(),r}(function(t,e,a,i,r,n){let s=n-r+1,c=a-e+1,o=new Array(s);for(let t=0;t<s;t++)o[t]=new Array(c),o[t][0]=t;for(let t=0;t<c;t++)o[0][t]=t;for(let a=1;a<s;a++)for(let n=1;n<c;n++)if(Qi(t[e+n-1],i[r+a-1]))o[a][n]=o[a-1][n-1];else{let t=o[a-1][n]+1,e=o[a][n-1]+1;o[a][n]=t<e?t:e}return o}(t,e,a,i,r,n));s=void 0;let p=[],d=e,u=r;for(let t=0;t<h.length;t++)switch(h[t]){case Yi:s&&(p.push(s),s=void 0),d++,u++;break;case Xi:s||(s=$i(d,[],0)),s.addedCount++,d++,s.removed.push(i[u]),u++;break;case Ji:s||(s=$i(d,[],0)),s.addedCount++,d++;break;case Wi:s||(s=$i(d,[],0)),s.removed.push(i[u]),u++}return s&&p.push(s),p}function Zi(t,e){return Gi(t,0,t.length,e,0,e.length)}function Qi(t,e){return t===e}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function tr(t){return"slot"===t.localName}class er{static getFlattenedNodes(t){return tr(t)?(t=t).assignedNodes({flatten:!0}):Array.from(t.childNodes).map(t=>tr(t)?(t=t).assignedNodes({flatten:!0}):[t]).reduce((t,e)=>t.concat(e),[])}constructor(t,e){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=t,this.callback=e,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=(()=>{this._schedule()}),this.connect(),this._schedule()}connect(){tr(this._target)?this._listenSlots([this._target]):this._target.children&&(this._listenSlots(this._target.children),window.ShadyDOM?this._shadyChildrenObserver=ShadyDOM.observeChildren(this._target,t=>{this._processMutations(t)}):(this._nativeChildrenObserver=new MutationObserver(t=>{this._processMutations(t)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){tr(this._target)?this._unlistenSlots([this._target]):this._target.children&&(this._unlistenSlots(this._target.children),window.ShadyDOM&&this._shadyChildrenObserver?(ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,ea.run(()=>this.flush()))}_processMutations(t){this._processSlotMutations(t),this.flush()}_processSlotMutations(t){if(t)for(let e=0;e<t.length;e++){let a=t[e];a.addedNodes&&this._listenSlots(a.addedNodes),a.removedNodes&&this._unlistenSlots(a.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let t={target:this._target,addedNodes:[],removedNodes:[]},e=this.constructor.getFlattenedNodes(this._target),a=Zi(e,this._effectiveNodes);for(let e,i=0;i<a.length&&(e=a[i]);i++)for(let a,i=0;i<e.removed.length&&(a=e.removed[i]);i++)t.removedNodes.push(a);for(let i,r=0;r<a.length&&(i=a[r]);r++)for(let a=i.index;a<i.index+i.addedCount;a++)t.addedNodes.push(e[a]);this._effectiveNodes=e;let i=!1;return(t.addedNodes.length||t.removedNodes.length)&&(i=!0,this.callback.call(this._target,t)),i}_listenSlots(t){for(let e=0;e<t.length;e++){let a=t[e];tr(a)&&a.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(t){for(let e=0;e<t.length;e++){let a=t[e];tr(a)&&a.removeEventListener("slotchange",this._boundSchedule)}}}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let ar=[];const ir=function(t){ar.push(t)};function rr(){const t=Boolean(ar.length);for(;ar.length;)try{ar.shift().flush()}catch(t){setTimeout(()=>{throw t})}return t}const nr=function(){let t,e;do{t=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),e=rr()}while(t||e)},sr=Element.prototype,cr=sr.matches||sr.matchesSelector||sr.mozMatchesSelector||sr.msMatchesSelector||sr.oMatchesSelector||sr.webkitMatchesSelector,or=function(t,e){return cr.call(t,e)};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class lr{constructor(t){this.node=t}observeNodes(t){return new er(this.node,t)}unobserveNodes(t){t.disconnect()}notifyObserver(){}deepContains(t){if(this.node.contains(t))return!0;let e=t,a=t.ownerDocument;for(;e&&e!==a&&e!==this.node;)e=e.parentNode||e.host;return e===this.node}getOwnerRoot(){return this.node.getRootNode()}getDistributedNodes(){return"slot"===this.node.localName?this.node.assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let t=[],e=this.node.assignedSlot;for(;e;)t.push(e),e=e.assignedSlot;return t}importNode(t,e){return(this.node instanceof Document?this.node:this.node.ownerDocument).importNode(t,e)}getEffectiveChildNodes(){return er.getFlattenedNodes(this.node)}queryDistributedElements(t){let e=this.getEffectiveChildNodes(),a=[];for(let i,r=0,n=e.length;r<n&&(i=e[r]);r++)i.nodeType===Node.ELEMENT_NODE&&or(i,t)&&a.push(i);return a}get activeElement(){let t=this.node;return void 0!==t._activeElement?t._activeElement:t.activeElement}}class hr{constructor(t){this.event=t}get rootTarget(){return this.event.composedPath()[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}lr.prototype.cloneNode,lr.prototype.appendChild,lr.prototype.insertBefore,lr.prototype.removeChild,lr.prototype.replaceChild,lr.prototype.setAttribute,lr.prototype.removeAttribute,lr.prototype.querySelector,lr.prototype.querySelectorAll,lr.prototype.parentNode,lr.prototype.firstChild,lr.prototype.lastChild,lr.prototype.nextSibling,lr.prototype.previousSibling,lr.prototype.firstElementChild,lr.prototype.lastElementChild,lr.prototype.nextElementSibling,lr.prototype.previousElementSibling,lr.prototype.childNodes,lr.prototype.children,lr.prototype.classList,lr.prototype.textContent,lr.prototype.innerHTML,function(t,e){for(let a=0;a<e.length;a++){let i=e[a];t[i]=function(){return this.node[i].apply(this.node,arguments)}}}(lr.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll"]),function(t,e){for(let a=0;a<e.length;a++){let i=e[a];Object.defineProperty(t,i,{get:function(){return this.node[i]},configurable:!0})}}(lr.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList"]),function(t,e){for(let a=0;a<e.length;a++){let i=e[a];Object.defineProperty(t,i,{get:function(){return this.node[i]},set:function(t){this.node[i]=t},configurable:!0})}}(lr.prototype,["textContent","innerHTML"]);const pr=function(t){if(!(t=t||document).__domApi){let e;e=t instanceof Event?new hr(t):new lr(t),t.__domApi=e}return t.__domApi};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let dr=window.ShadyCSS;const ur=ge(t=>{const e=Ki(Ti($a(t))),a={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class i extends e{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers,this._applyListeners()}static get importMeta(){return this.prototype.importMeta}created(){}connectedCallback(){super.connectedCallback(),this.isAttached=!0,this.attached()}attached(){}disconnectedCallback(){super.disconnectedCallback(),this.isAttached=!1,this.detached()}detached(){}attributeChangedCallback(t,e,a,i){e!==a&&(super.attributeChangedCallback(t,e,a,i),this.attributeChanged(t,e,a))}attributeChanged(t,e,a){}_initializeProperties(){let t=Object.getPrototypeOf(this);t.hasOwnProperty("__hasRegisterFinished")||(t.__hasRegisterFinished=!0,this._registered()),super._initializeProperties(),this.root=this,this.created()}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(t){return this._serializeValue(t)}deserialize(t,e){return this._deserializeValue(t,e)}reflectPropertyToAttribute(t,e,a){this._propertyToAttribute(t,e,a)}serializeValueToAttribute(t,e,a){this._valueToNodeAttribute(a||this,t,e)}extend(t,e){if(!t||!e)return t||e;let a=Object.getOwnPropertyNames(e);for(let i,r=0;r<a.length&&(i=a[r]);r++){let a=Object.getOwnPropertyDescriptor(e,i);a&&Object.defineProperty(t,i,a)}return t}mixin(t,e){for(let a in e)t[a]=e[a];return t}chainObject(t,e){return t&&e&&t!==e&&(t.__proto__=e),t}instanceTemplate(t){let e=this.constructor._contentForTemplate(t);return document.importNode(e,!0)}fire(t,e,a){a=a||{},e=null==e?{}:e;let i=new Event(t,{bubbles:void 0===a.bubbles||a.bubbles,cancelable:Boolean(a.cancelable),composed:void 0===a.composed||a.composed});return i.detail=e,(a.node||this).dispatchEvent(i),i}listen(t,e,a){t=t||this;let i=this.__boundListeners||(this.__boundListeners=new WeakMap),r=i.get(t);r||(r={},i.set(t,r));let n=e+a;r[n]||(r[n]=this._addMethodEventListenerToNode(t,e,a,this))}unlisten(t,e,a){t=t||this;let i=this.__boundListeners&&this.__boundListeners.get(t),r=e+a,n=i&&i[r];n&&(this._removeEventListenerFromNode(t,e,n),i[r]=null)}setScrollDirection(t,e){Hi(e||this,a[t]||"auto")}$$(t){return this.root.querySelector(t)}get domHost(){let t=this.getRootNode();return t instanceof DocumentFragment?t.host:t}distributeContent(){window.ShadyDOM&&this.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return pr(this).getEffectiveChildNodes()}queryDistributedElements(t){return pr(this).queryDistributedElements(t)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter(function(t){return t.nodeType===Node.ELEMENT_NODE})}getEffectiveTextContent(){let t=this.getEffectiveChildNodes(),e=[];for(let a,i=0;a=t[i];i++)a.nodeType!==Node.COMMENT_NODE&&e.push(a.textContent);return e.join("")}queryEffectiveChildren(t){let e=this.queryDistributedElements(t);return e&&e[0]}queryAllEffectiveChildren(t){return this.queryDistributedElements(t)}getContentChildNodes(t){let e=this.root.querySelector(t||"slot");return e?pr(e).getDistributedNodes():[]}getContentChildren(t){return this.getContentChildNodes(t).filter(function(t){return t.nodeType===Node.ELEMENT_NODE})}isLightDescendant(t){return this!==t&&this.contains(t)&&this.getRootNode()===t.getRootNode()}isLocalDescendant(t){return this.root===t.getRootNode()}scopeSubtree(t,e){}getComputedStyleValue(t){return dr.getComputedStyleValue(this,t)}debounce(t,e,a){return this._debouncers=this._debouncers||{},this._debouncers[t]=Xa.debounce(this._debouncers[t],a>0?ta.after(a):ea,e.bind(this))}isDebouncerActive(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];return!(!e||!e.isActive())}flushDebouncer(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];e&&e.flush()}cancelDebouncer(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];e&&e.cancel()}async(t,e){return e>0?ta.run(t.bind(this),e):~ea.run(t.bind(this))}cancelAsync(t){t<0?ea.cancel(~t):ta.cancel(t)}create(t,e){let a=document.createElement(t);if(e)if(a.setProperties)a.setProperties(e);else for(let t in e)a[t]=e[t];return a}elementMatches(t,e){return or(e||this,t)}toggleAttribute(t,e){let a=this;return 3===arguments.length&&(a=arguments[2]),1==arguments.length&&(e=!a.hasAttribute(t)),e?(a.setAttribute(t,""),!0):(a.removeAttribute(t),!1)}toggleClass(t,e,a){a=a||this,1==arguments.length&&(e=!a.classList.contains(t)),e?a.classList.add(t):a.classList.remove(t)}transform(t,e){(e=e||this).style.webkitTransform=t,e.style.transform=t}translate3d(t,e,a,i){i=i||this,this.transform("translate3d("+t+","+e+","+a+")",i)}arrayDelete(t,e){let a;if(Array.isArray(t)){if((a=t.indexOf(e))>=0)return t.splice(a,1)}else{if((a=je(this,t).indexOf(e))>=0)return this.splice(t,a,1)}return null}_logger(t,e){switch(Array.isArray(e)&&1===e.length&&Array.isArray(e[0])&&(e=e[0]),t){case"log":case"warn":case"error":console[t](...e)}}_log(...t){this._logger("log",t)}_warn(...t){this._logger("warn",t)}_error(...t){this._logger("error",t)}_logf(t,...e){return["[%s::%s]",this.is,t,...e]}}return i.prototype.is="",i});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let vr={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0};function mr(t,e){if(!t)return e=e;e=ur(e),Array.isArray(t)||(t=[t]);let a=e.prototype.behaviors;return e=function t(e,a){for(let i=0;i<e.length;i++){let r=e[i];r&&(a=Array.isArray(r)?t(r,a):fr(r,a))}return a}(t=function t(e,a,i){a=a||[];for(let r=e.length-1;r>=0;r--){let n=e[r];n?Array.isArray(n)?t(n,a):a.indexOf(n)<0&&(!i||i.indexOf(n)<0)&&a.unshift(n):console.warn("behavior is null, check for missing or 404 import")}return a}(t,null,a),e),a&&(t=a.concat(t)),e.prototype.behaviors=t,e}function fr(t,e){class a extends e{static get properties(){return t.properties}static get observers(){return t.observers}created(){super.created(),t.created&&t.created.call(this)}_registered(){super._registered(),t.beforeRegister&&t.beforeRegister.call(Object.getPrototypeOf(this)),t.registered&&t.registered.call(Object.getPrototypeOf(this))}_applyListeners(){if(super._applyListeners(),t.listeners)for(let e in t.listeners)this._addMethodEventListenerToNode(this,e,t.listeners[e])}_ensureAttributes(){if(t.hostAttributes)for(let e in t.hostAttributes)this._ensureAttribute(e,t.hostAttributes[e]);super._ensureAttributes()}ready(){super.ready(),t.ready&&t.ready.call(this)}attached(){super.attached(),t.attached&&t.attached.call(this)}detached(){super.detached(),t.detached&&t.detached.call(this)}attributeChanged(e,a,i){super.attributeChanged(e,a,i),t.attributeChanged&&t.attributeChanged.call(this,e,a,i)}}a.generatedFrom=t;for(let e in t)if(!(e in vr)){let i=Object.getOwnPropertyDescriptor(t,e);i&&Object.defineProperty(a.prototype,e,i)}return a}const _r=function(t){let e;return e="function"==typeof t?t:_r.Class(t),customElements.define(e.is,e),e};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function gr(t,e,a,i,r){let n;r&&(n="object"==typeof a&&null!==a)&&(i=t.__dataTemp[e]);let s=i!==a&&(i==i||a==a);return n&&s&&(t.__dataTemp[e]=a),s}_r.Class=function(t,e){t||console.warn("Polymer's Class function requires `info` argument");const a=t.behaviors?mr(t.behaviors,HTMLElement):ur(HTMLElement),i=fr(t,e?e(a):a);return i.is=t.is,i};const yr=ge(t=>{return class extends t{_shouldPropertyChange(t,e,a){return gr(this,t,e,a,!0)}}}),br=ge(t=>{return class extends t{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(t,e,a){return gr(this,t,e,a,this.mutableData)}}});yr._mutablePropertyChange=gr;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let zr=null;function xr(){return zr}xr.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:xr,writable:!0}});const wr=ja(xr),Cr=yr(wr);const Mr=ja(class{});class Hr extends Mr{constructor(t){super(),this._configureProperties(t),this.root=this._stampTemplate(this.__dataHost);let e=this.children=[];for(let t=this.root.firstChild;t;t=t.nextSibling)e.push(t),t.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let a=this.__templatizeOptions;(t&&a.instanceProps||!a.instanceProps)&&this._enableProperties()}_configureProperties(t){if(this.__templatizeOptions.forwardHostProp)for(let t in this.__hostProps)this._setPendingProperty(t,this.__dataHost["_host_"+t]);for(let e in t)this._setPendingProperty(e,t[e])}forwardHostProp(t,e){this._setPendingPropertyOrPath(t,e,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(t,e,a){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(t,e,t=>{t.model=this,a(t)});else{let i=this.__dataHost.__dataHost;i&&i._addEventListenerToNode(t,e,a)}}_showHideChildren(t){let e=this.children;for(let a=0;a<e.length;a++){let i=e[a];if(Boolean(t)!=Boolean(i.__hideTemplateChildren__))if(i.nodeType===Node.TEXT_NODE)t?(i.__polymerTextContent__=i.textContent,i.textContent=""):i.textContent=i.__polymerTextContent__;else if("slot"===i.localName)if(t)i.__polymerReplaced__=document.createComment("hidden-slot"),i.parentNode.replaceChild(i.__polymerReplaced__,i);else{const t=i.__polymerReplaced__;t&&t.parentNode.replaceChild(i,t)}else i.style&&(t?(i.__polymerDisplay__=i.style.display,i.style.display="none"):i.style.display=i.__polymerDisplay__);i.__hideTemplateChildren__=t,i._showHideChildren&&i._showHideChildren(t)}}_setUnmanagedPropertyToNode(t,e,a){t.__hideTemplateChildren__&&t.nodeType==Node.TEXT_NODE&&"textContent"==e?t.__polymerTextContent__=a:super._setUnmanagedPropertyToNode(t,e,a)}get parentModel(){let t=this.__parentModel;if(!t){let e;t=this;do{t=t.__dataHost.__dataHost}while((e=t.__templatizeOptions)&&!e.parentModel);this.__parentModel=t}return t}dispatchEvent(t){return!0}}Hr.prototype.__dataHost,Hr.prototype.__templatizeOptions,Hr.prototype._methodHost,Hr.prototype.__templatizeOwner,Hr.prototype.__hostProps;const Sr=yr(Hr);function Pr(t){let e=t.__dataHost;return e&&e._methodHost||e}function Vr(t,e,a){let i=a.mutableData?Sr:Hr,r=class extends i{};return r.prototype.__templatizeOptions=a,r.prototype._bindTemplate(t),function(t,e,a,i){let r=a.hostProps||{};for(let e in i.instanceProps){delete r[e];let a=i.notifyInstanceProp;a&&t.prototype._addPropertyEffect(e,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:kr(e,a)})}if(i.forwardHostProp&&e.__dataHost)for(let e in r)t.prototype._addPropertyEffect(e,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:function(t,e,a){t.__dataHost._setPendingPropertyOrPath("_host_"+e,a[e],!0,!0)}})}(r,t,e,a),r}function Lr(t,e,a){let i=a.forwardHostProp;if(i){let r=e.templatizeTemplateClass;if(!r){let t=a.mutableData?Cr:wr;r=e.templatizeTemplateClass=class extends t{};let n=e.hostProps;for(let t in n)r.prototype._addPropertyEffect("_host_"+t,r.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:Er(t,i)}),r.prototype._createNotifyingProperty("_host_"+t)}!function(t,e){zr=t,Object.setPrototypeOf(t,e.prototype),new e,zr=null}(t,r),t.__dataProto&&Object.assign(t.__data,t.__dataProto),t.__dataTemp={},t.__dataPending=null,t.__dataOld=null,t._enableProperties()}}function Er(t,e){return function(t,a,i){e.call(t.__templatizeOwner,a.substring("_host_".length),i[a])}}function kr(t,e){return function(t,a,i){e.call(t.__templatizeOwner,t,a,i[a])}}function Tr(t,e,a){if(ve&&!Pr(t))throw new Error("strictTemplatePolicy: template owner not trusted");if(a=a||{},t.__templatizeOwner)throw new Error("A <template> can only be templatized once");t.__templatizeOwner=e;let i=(e?e.constructor:Hr)._parseTemplate(t),r=i.templatizeInstanceClass;r||(r=Vr(t,i,a),i.templatizeInstanceClass=r),Lr(t,i,a);let n=class extends r{};return n.prototype._methodHost=Pr(t),n.prototype.__dataHost=t,n.prototype.__templatizeOwner=e,n.prototype.__hostProps=i.hostProps,n=n}function Ar(t,e){let a;for(;e;)if(a=e.__templatizeInstance){if(a.__dataHost==t)return a;e=a.__dataHost}else e=e.parentNode;return null}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Nr=Ti(br(ja(HTMLElement)));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/customElements.define("dom-bind",class extends Nr{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),ve)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(){this.mutableData=!0}connectedCallback(){this.style.display="none",this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){this.parentNode.insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let t=0;t<this.__children.length;t++)this.root.appendChild(this.__children[t])}render(){let t;if(!this.__children){if(!(t=t||this.querySelector("template"))){let e=new MutationObserver(()=>{if(!(t=this.querySelector("template")))throw new Error("dom-bind requires a <template> child");e.disconnect(),this.render()});return void e.observe(this,{childList:!0})}this.root=this._stampTemplate(t),this.$=this.root.$,this.__children=[];for(let t=this.root.firstChild;t;t=t.nextSibling)this.__children[this.__children.length]=t;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class Or{constructor(t){this.value=t.toString()}toString(){return this.value}}function Ir(t){if(t instanceof Or)return t.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${t}`)}const Rr=function(t,...e){const a=document.createElement("template");return a.innerHTML=e.reduce((e,a,i)=>e+function(t){if(t instanceof HTMLTemplateElement)return t.innerHTML;if(t instanceof Or)return Ir(t);throw new Error(`non-template value passed to Polymer's html function: ${t}`)}(a)+t[i+1],t[0]),a},Dr=$a(HTMLElement),Fr=br(Dr);class Br extends Fr{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!0,readOnly:!0},initialCount:{type:Number,observer:"__initializeChunking"},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__limit=1/0,this.__pool=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__lastChunkTime=null,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let t=0;t<this.__instances.length;t++)this.__detachInstance(t)}connectedCallback(){if(super.connectedCallback(),this.style.display="none",this.__isDetached){this.__isDetached=!1;let t=this.parentNode;for(let e=0;e<this.__instances.length;e++)this.__attachInstance(e,t)}}__ensureTemplatized(){if(!this.__ctor){let t=this.template=this.querySelector("template");if(!t){let t=new MutationObserver(()=>{if(!this.querySelector("template"))throw new Error("dom-repeat requires a <template> child");t.disconnect(),this.__render()});return t.observe(this,{childList:!0}),!1}let e={};e[this.as]=!0,e[this.indexAs]=!0,e[this.itemsIndexAs]=!0,this.__ctor=Tr(t,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:e,forwardHostProp:function(t,e){let a=this.__instances;for(let i,r=0;r<a.length&&(i=a[r]);r++)i.forwardHostProp(t,e)},notifyInstanceProp:function(t,e,a){if((i=this.as)===(r=e)||Ie(i,r)||Re(i,r)){let i=t[this.itemsIndexAs];e==this.as&&(this.items[i]=a);let r=De(this.as,"items."+i,e);this.notifyPath(r,a)}var i,r}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(t){if("string"==typeof t){let e=t,a=this.__getMethodHost();return function(){return a[e].apply(a,arguments)}}return t}__sortChanged(t){this.__sortFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__filterChanged(t){this.__filterFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(t){return Math.ceil(1e3/t)}__initializeChunking(){this.initialCount&&(this.__limit=this.initialCount,this.__chunkCount=this.initialCount,this.__lastChunkTime=performance.now())}__tryRenderChunk(){this.items&&this.__limit<this.items.length&&this.__debounceRender(this.__requestRenderChunk)}__requestRenderChunk(){requestAnimationFrame(()=>this.__renderChunk())}__renderChunk(){let t=performance.now(),e=this._targetFrameTime/(t-this.__lastChunkTime);this.__chunkCount=Math.round(this.__chunkCount*e)||1,this.__limit+=this.__chunkCount,this.__lastChunkTime=t,this.__debounceRender(this.__render)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__itemsChanged(t){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(t.path,t.value)||(this.__initializeChunking(),this.__debounceRender(this.__render))}__handleObservedPaths(t){if(this.__sortFn||this.__filterFn)if(t){if(this.__observePaths){let e=this.__observePaths;for(let a=0;a<e.length;a++)0===t.indexOf(e[a])&&this.__debounceRender(this.__render,this.delay)}}else this.__debounceRender(this.__render,this.delay)}__debounceRender(t,e=0){this.__renderDebouncer=Xa.debounce(this.__renderDebouncer,e>0?ta.after(e):ea,t.bind(this)),ir(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),nr()}__render(){this.__ensureTemplatized()&&(this.__applyFullRefresh(),this.__pool.length=0,this._setRenderedItemCount(this.__instances.length),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this.__tryRenderChunk())}__applyFullRefresh(){let t=this.items||[],e=new Array(t.length);for(let a=0;a<t.length;a++)e[a]=a;this.__filterFn&&(e=e.filter((e,a,i)=>this.__filterFn(t[e],a,i))),this.__sortFn&&e.sort((e,a)=>this.__sortFn(t[e],t[a]));const a=this.__itemsIdxToInstIdx={};let i=0;const r=Math.min(e.length,this.__limit);for(;i<r;i++){let r=this.__instances[i],n=e[i],s=t[n];a[n]=i,r?(r._setPendingProperty(this.as,s),r._setPendingProperty(this.indexAs,i),r._setPendingProperty(this.itemsIndexAs,n),r._flushProperties()):this.__insertInstance(s,i,n)}for(let t=this.__instances.length-1;t>=i;t--)this.__detachAndRemoveInstance(t)}__detachInstance(t){let e=this.__instances[t];for(let t=0;t<e.children.length;t++){let a=e.children[t];e.root.appendChild(a)}return e}__attachInstance(t,e){let a=this.__instances[t];e.insertBefore(a.root,this)}__detachAndRemoveInstance(t){let e=this.__detachInstance(t);e&&this.__pool.push(e),this.__instances.splice(t,1)}__stampInstance(t,e,a){let i={};return i[this.as]=t,i[this.indexAs]=e,i[this.itemsIndexAs]=a,new this.__ctor(i)}__insertInstance(t,e,a){let i=this.__pool.pop();i?(i._setPendingProperty(this.as,t),i._setPendingProperty(this.indexAs,e),i._setPendingProperty(this.itemsIndexAs,a),i._flushProperties()):i=this.__stampInstance(t,e,a);let r=this.__instances[e+1],n=r?r.children[0]:this;return this.parentNode.insertBefore(i.root,n),this.__instances[e]=i,i}_showHideChildren(t){for(let e=0;e<this.__instances.length;e++)this.__instances[e]._showHideChildren(t)}__handleItemPath(t,e){let a=t.slice(6),i=a.indexOf("."),r=i<0?a:a.substring(0,i);if(r==parseInt(r,10)){let t=i<0?"":a.substring(i+1);this.__handleObservedPaths(t);let n=this.__itemsIdxToInstIdx[r],s=this.__instances[n];if(s){let a=this.as+(t?"."+t:"");s._setPendingPropertyOrPath(a,e,!1,!0),s._flushProperties()}return!0}}itemForElement(t){let e=this.modelForElement(t);return e&&e[this.as]}indexForElement(t){let e=this.modelForElement(t);return e&&e[this.indexAs]}modelForElement(t){return Ar(this.template,t)}}customElements.define(Br.is,Br);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class jr extends Dr{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"}}}constructor(){super(),this.__renderDebouncer=null,this.__invalidProps=null,this.__instance=null,this._lastIf=!1,this.__ctor=null,this.__hideTemplateChildren__=!1}__debounceRender(){this.__renderDebouncer=Xa.debounce(this.__renderDebouncer,ea,()=>this.__render()),ir(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback(),this.parentNode&&(this.parentNode.nodeType!=Node.DOCUMENT_FRAGMENT_NODE||this.parentNode.host)||this.__teardownInstance()}connectedCallback(){super.connectedCallback(),this.style.display="none",this.if&&this.__debounceRender()}render(){nr()}__render(){if(this.if){if(!this.__ensureInstance())return;this._showHideChildren()}else this.restamp&&this.__teardownInstance();!this.restamp&&this.__instance&&this._showHideChildren(),this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__ensureInstance(){let t=this.parentNode;if(t){if(!this.__ctor){let t=this.querySelector("template");if(!t){let t=new MutationObserver(()=>{if(!this.querySelector("template"))throw new Error("dom-if requires a <template> child");t.disconnect(),this.__render()});return t.observe(this,{childList:!0}),!1}this.__ctor=Tr(t,this,{mutableData:!0,forwardHostProp:function(t,e){this.__instance&&(this.if?this.__instance.forwardHostProp(t,e):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[Oe(t)]=!0))}})}if(this.__instance){this.__syncHostProperties();let e=this.__instance.children;if(e&&e.length){if(this.previousSibling!==e[e.length-1])for(let a,i=0;i<e.length&&(a=e[i]);i++)t.insertBefore(a,this)}}else this.__instance=new this.__ctor,t.insertBefore(this.__instance.root,this)}return!0}__syncHostProperties(){let t=this.__invalidProps;if(t){for(let e in t)this.__instance._setPendingProperty(e,this.__dataHost[e]);this.__invalidProps=null,this.__instance._flushProperties()}}__teardownInstance(){if(this.__instance){let t=this.__instance.children;if(t&&t.length){let e=t[0].parentNode;if(e)for(let a,i=0;i<t.length&&(a=t[i]);i++)e.removeChild(a)}this.__instance=null,this.__invalidProps=null}}_showHideChildren(){let t=this.__hideTemplateChildren__||!this.if;this.__instance&&this.__instance._showHideChildren(t)}}customElements.define(jr.is,jr);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let Ur=ge(t=>{let e=$a(t);return class extends e{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(t,e){let a=e.path;if("items"==a){let a=e.base||[],i=this.__lastItems;if(t!==this.__lastMulti&&this.clearSelection(),i){let t=Zi(a,i);this.__applySplices(t)}this.__lastItems=a,this.__lastMulti=t}else if("items.splices"==e.path)this.__applySplices(e.value.indexSplices);else{let t=a.slice("items.".length),e=parseInt(t,10);t.indexOf(".")<0&&t==e&&this.__deselectChangedIdx(e)}}__applySplices(t){let e=this.__selectedMap;for(let a=0;a<t.length;a++){let i=t[a];e.forEach((t,a)=>{t<i.index||(t>=i.index+i.removed.length?e.set(a,t+i.addedCount-i.removed.length):e.set(a,-1))});for(let t=0;t<i.addedCount;t++){let a=i.index+t;e.has(this.items[a])&&e.set(this.items[a],a)}}this.__updateLinks();let a=0;e.forEach((t,i)=>{t<0?(this.multi?this.splice("selected",a,1):this.selected=this.selectedItem=null,e.delete(i)):a++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let t=0;this.__selectedMap.forEach(e=>{e>=0&&this.linkPaths("items."+e,"selected."+t++)})}else this.__selectedMap.forEach(t=>{this.linkPaths("selected","items."+t),this.linkPaths("selectedItem","items."+t)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(t){return this.__selectedMap.has(t)}isIndexSelected(t){return this.isSelected(this.items[t])}__deselectChangedIdx(t){let e=this.__selectedIndexForItemIndex(t);if(e>=0){let t=0;this.__selectedMap.forEach((a,i)=>{e==t++&&this.deselect(i)})}}__selectedIndexForItemIndex(t){let e=this.__dataLinkedPaths["items."+t];if(e)return parseInt(e.slice("selected.".length),10)}deselect(t){let e=this.__selectedMap.get(t);if(e>=0){let a;this.__selectedMap.delete(t),this.multi&&(a=this.__selectedIndexForItemIndex(e)),this.__updateLinks(),this.multi?this.splice("selected",a,1):this.selected=this.selectedItem=null}}deselectIndex(t){this.deselect(this.items[t])}select(t){this.selectIndex(this.items.indexOf(t))}selectIndex(t){let e=this.items[t];this.isSelected(e)?this.toggle&&this.deselectIndex(t):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(e,t),this.__updateLinks(),this.multi?this.push("selected",e):this.selected=this.selectedItem=e)}}})(Dr);class Kr extends Ur{static get is(){return"array-selector"}}customElements.define(Kr.is,Kr);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const qr=new ee;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(t,e,a){},prepareTemplateDom(t,e){},prepareTemplateStyles(t,e,a){},styleSubtree(t,e){qr.processStyles(),Pt(t,e)},styleElement(t){qr.processStyles()},styleDocument(t){qr.processStyles(),Pt(document.body,t)},getComputedStyleValue:(t,e)=>Vt(t,e),flushCustomStyles(){},nativeCss:it,nativeShadow:Q,cssBuild:et}),window.ShadyCSS.CustomStyleInterface=qr;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const $r="include",Yr=window.ShadyCSS.CustomStyleInterface;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let Xr;window.customElements.define("custom-style",class extends HTMLElement{constructor(){super(),this._style=null,Yr.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const t=this.querySelector("style");if(!t)return null;this._style=t;const e=t.getAttribute($r);return e&&(t.removeAttribute($r),t.textContent=function(t){let e=t.trim().split(/\s+/),a="";for(let t=0;t<e.length;t++)a+=Te(e[t]);return a}(e)+t.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}),Xr=yr._mutablePropertyChange;Boolean;const Jr=ur(HTMLElement).prototype,Wr=Rr`
<custom-style>
  <style is="custom-style">
    [hidden] {
      display: none !important;
    }
  </style>
</custom-style>
<custom-style>
  <style is="custom-style">
    html {

      --layout: {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      };

      --layout-inline: {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      };

      --layout-horizontal: {
        @apply --layout;

        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      };

      --layout-horizontal-reverse: {
        @apply --layout;

        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      };

      --layout-vertical: {
        @apply --layout;

        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      };

      --layout-vertical-reverse: {
        @apply --layout;

        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      };

      --layout-wrap: {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      };

      --layout-wrap-reverse: {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      };

      --layout-flex-auto: {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      };

      --layout-flex-none: {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      };

      --layout-flex: {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      };

      --layout-flex-2: {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      };

      --layout-flex-3: {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      };

      --layout-flex-4: {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      };

      --layout-flex-5: {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      };

      --layout-flex-6: {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      };

      --layout-flex-7: {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      };

      --layout-flex-8: {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      };

      --layout-flex-9: {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      };

      --layout-flex-10: {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      };

      --layout-flex-11: {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      };

      --layout-flex-12: {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      };

      /* alignment in cross axis */

      --layout-start: {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      };

      --layout-center: {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      };

      --layout-end: {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      };

      --layout-baseline: {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      };

      /* alignment in main axis */

      --layout-start-justified: {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      };

      --layout-center-justified: {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      };

      --layout-end-justified: {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      };

      --layout-around-justified: {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      };

      --layout-justified: {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      };

      --layout-center-center: {
        @apply --layout-center;
        @apply --layout-center-justified;
      };

      /* self alignment */

      --layout-self-start: {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      };

      --layout-self-center: {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      };

      --layout-self-end: {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      };

      --layout-self-stretch: {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      };

      --layout-self-baseline: {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      };

      /* multi-line alignment in main axis */

      --layout-start-aligned: {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      };

      --layout-end-aligned: {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      };

      --layout-center-aligned: {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      };

      --layout-between-aligned: {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      };

      --layout-around-aligned: {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      };

      /*******************************
                Other Layout
      *******************************/

      --layout-block: {
        display: block;
      };

      --layout-invisible: {
        visibility: hidden !important;
      };

      --layout-relative: {
        position: relative;
      };

      --layout-fit: {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-scroll: {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      };

      --layout-fullbleed: {
        margin: 0;
        height: 100vh;
      };

      /* fixed position */

      --layout-fixed-top: {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      };

      --layout-fixed-right: {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
      };

      --layout-fixed-bottom: {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-fixed-left: {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
      };

    }
  </style>
</custom-style>`;Wr.setAttribute("style","display: none;"),document.head.appendChild(Wr.content);var Gr=document.createElement("style");Gr.textContent="[hidden] { display: none !important; }",document.head.appendChild(Gr);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
class Zr{constructor(t){Zr[" "](t),this.type=t&&t.type||"default",this.key=t&&t.key,t&&"value"in t&&(this.value=t.value)}get value(){var t=this.type,e=this.key;if(t&&e)return Zr.types[t]&&Zr.types[t][e]}set value(t){var e=this.type,a=this.key;e&&a&&(e=Zr.types[e]=Zr.types[e]||{},null==t?delete e[a]:e[a]=t)}get list(){if(this.type){var t=Zr.types[this.type];return t?Object.keys(t).map(function(t){return Qr[this.type][t]},this):[]}}byKey(t){return this.key=t,this.value}}Zr[" "]=function(){},Zr.types={};var Qr=Zr.types;_r({is:"iron-meta",properties:{type:{type:String,value:"default"},key:{type:String},value:{type:String,notify:!0},self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:!0},__computeMeta:function(t,e,a){var i=new Zr({type:t,key:e});return void 0!==a&&a!==i.value?i.value=a:this.value!==i.value&&(this.value=i.value),i},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(t){t&&(this.value=this)},byKey:function(t){return new Zr({type:this.type,key:t}).value}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
_r({_template:Rr`
    <style>
      :host {
        @apply --layout-inline;
        @apply --layout-center-center;
        position: relative;

        vertical-align: middle;

        fill: var(--iron-icon-fill-color, currentcolor);
        stroke: var(--iron-icon-stroke-color, none);

        width: var(--iron-icon-width, 24px);
        height: var(--iron-icon-height, 24px);
        @apply --iron-icon;
      }

      :host([hidden]) {
        display: none;
      }
    </style>
`,is:"iron-icon",properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:Jr.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function(t){var e=(t||"").split(":");this._iconName=e.pop(),this._iconsetName=e.pop()||this._DEFAULT_ICONSET,this._updateIcon()},_srcChanged:function(t){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},_updateIcon:function(){this._usesIconset()?(this._img&&this._img.parentNode&&pr(this.root).removeChild(this._img),""===this._iconName?this._iconset&&this._iconset.removeIcon(this):this._iconsetName&&this._meta&&(this._iconset=this._meta.byKey(this._iconsetName),this._iconset?(this._iconset.applyIcon(this,this._iconName,this.theme),this.unlisten(window,"iron-iconset-added","_updateIcon")):this.listen(window,"iron-iconset-added","_updateIcon"))):(this._iconset&&this._iconset.removeIcon(this),this._img||(this._img=document.createElement("img"),this._img.style.width="100%",this._img.style.height="100%",this._img.draggable=!1),this._img.src=this.src,pr(this.root).appendChild(this._img))}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const tn=Rr`
<custom-style>
  <style is="custom-style">
    html {

      --shadow-transition: {
        transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
      };

      --shadow-none: {
        box-shadow: none;
      };

      /* from http://codepen.io/shyndman/pen/c5394ddf2e8b2a5c9185904b57421cdb */

      --shadow-elevation-2dp: {
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
                    0 1px 5px 0 rgba(0, 0, 0, 0.12),
                    0 3px 1px -2px rgba(0, 0, 0, 0.2);
      };

      --shadow-elevation-3dp: {
        box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14),
                    0 1px 8px 0 rgba(0, 0, 0, 0.12),
                    0 3px 3px -2px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-4dp: {
        box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
                    0 1px 10px 0 rgba(0, 0, 0, 0.12),
                    0 2px 4px -1px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-6dp: {
        box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
                    0 1px 18px 0 rgba(0, 0, 0, 0.12),
                    0 3px 5px -1px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-8dp: {
        box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
                    0 3px 14px 2px rgba(0, 0, 0, 0.12),
                    0 5px 5px -3px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-12dp: {
        box-shadow: 0 12px 16px 1px rgba(0, 0, 0, 0.14),
                    0 4px 22px 3px rgba(0, 0, 0, 0.12),
                    0 6px 7px -4px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-16dp: {
        box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
                    0  6px 30px 5px rgba(0, 0, 0, 0.12),
                    0  8px 10px -5px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-24dp: {
        box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14),
                    0 9px 46px 8px rgba(0, 0, 0, 0.12),
                    0 11px 15px -7px rgba(0, 0, 0, 0.4);
      };
    }
  </style>
</custom-style>`;tn.setAttribute("style","display: none;"),document.head.appendChild(tn.content);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const en=Rr`
<dom-module id="paper-material-styles">
  <template>
    <style>
      html {
        --paper-material: {
          display: block;
          position: relative;
        };
        --paper-material-elevation-1: {
          @apply --shadow-elevation-2dp;
        };
        --paper-material-elevation-2: {
          @apply --shadow-elevation-4dp;
        };
        --paper-material-elevation-3: {
          @apply --shadow-elevation-6dp;
        };
        --paper-material-elevation-4: {
          @apply --shadow-elevation-8dp;
        };
        --paper-material-elevation-5: {
          @apply --shadow-elevation-16dp;
        };
      }
      .paper-material {
        @apply --paper-material;
      }
      .paper-material[elevation="1"] {
        @apply --paper-material-elevation-1;
      }
      .paper-material[elevation="2"] {
        @apply --paper-material-elevation-2;
      }
      .paper-material[elevation="3"] {
        @apply --paper-material-elevation-3;
      }
      .paper-material[elevation="4"] {
        @apply --paper-material-elevation-4;
      }
      .paper-material[elevation="5"] {
        @apply --paper-material-elevation-5;
      }

      /* Duplicate the styles because of https://github.com/webcomponents/shadycss/issues/193 */
      :host {
        --paper-material: {
          display: block;
          position: relative;
        };
        --paper-material-elevation-1: {
          @apply --shadow-elevation-2dp;
        };
        --paper-material-elevation-2: {
          @apply --shadow-elevation-4dp;
        };
        --paper-material-elevation-3: {
          @apply --shadow-elevation-6dp;
        };
        --paper-material-elevation-4: {
          @apply --shadow-elevation-8dp;
        };
        --paper-material-elevation-5: {
          @apply --shadow-elevation-16dp;
        };
      }
      :host(.paper-material) {
        @apply --paper-material;
      }
      :host(.paper-material[elevation="1"]) {
        @apply --paper-material-elevation-1;
      }
      :host(.paper-material[elevation="2"]) {
        @apply --paper-material-elevation-2;
      }
      :host(.paper-material[elevation="3"]) {
        @apply --paper-material-elevation-3;
      }
      :host(.paper-material[elevation="4"]) {
        @apply --paper-material-elevation-4;
      }
      :host(.paper-material[elevation="5"]) {
        @apply --paper-material-elevation-5;
      }
    </style>
  </template>
</dom-module>`;en.setAttribute("style","display: none;"),document.head.appendChild(en.content);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const an=Rr`
<custom-style>
  <style is="custom-style">
    html {

      /* Material Design color palette for Google products */

      --google-red-100: #f4c7c3;
      --google-red-300: #e67c73;
      --google-red-500: #db4437;
      --google-red-700: #c53929;

      --google-blue-100: #c6dafc;
      --google-blue-300: #7baaf7;
      --google-blue-500: #4285f4;
      --google-blue-700: #3367d6;

      --google-green-100: #b7e1cd;
      --google-green-300: #57bb8a;
      --google-green-500: #0f9d58;
      --google-green-700: #0b8043;

      --google-yellow-100: #fce8b2;
      --google-yellow-300: #f7cb4d;
      --google-yellow-500: #f4b400;
      --google-yellow-700: #f09300;

      --google-grey-100: #f5f5f5;
      --google-grey-300: #e0e0e0;
      --google-grey-500: #9e9e9e;
      --google-grey-700: #616161;

      /* Material Design color palette from online spec document */

      --paper-red-50: #ffebee;
      --paper-red-100: #ffcdd2;
      --paper-red-200: #ef9a9a;
      --paper-red-300: #e57373;
      --paper-red-400: #ef5350;
      --paper-red-500: #f44336;
      --paper-red-600: #e53935;
      --paper-red-700: #d32f2f;
      --paper-red-800: #c62828;
      --paper-red-900: #b71c1c;
      --paper-red-a100: #ff8a80;
      --paper-red-a200: #ff5252;
      --paper-red-a400: #ff1744;
      --paper-red-a700: #d50000;

      --paper-pink-50: #fce4ec;
      --paper-pink-100: #f8bbd0;
      --paper-pink-200: #f48fb1;
      --paper-pink-300: #f06292;
      --paper-pink-400: #ec407a;
      --paper-pink-500: #e91e63;
      --paper-pink-600: #d81b60;
      --paper-pink-700: #c2185b;
      --paper-pink-800: #ad1457;
      --paper-pink-900: #880e4f;
      --paper-pink-a100: #ff80ab;
      --paper-pink-a200: #ff4081;
      --paper-pink-a400: #f50057;
      --paper-pink-a700: #c51162;

      --paper-purple-50: #f3e5f5;
      --paper-purple-100: #e1bee7;
      --paper-purple-200: #ce93d8;
      --paper-purple-300: #ba68c8;
      --paper-purple-400: #ab47bc;
      --paper-purple-500: #9c27b0;
      --paper-purple-600: #8e24aa;
      --paper-purple-700: #7b1fa2;
      --paper-purple-800: #6a1b9a;
      --paper-purple-900: #4a148c;
      --paper-purple-a100: #ea80fc;
      --paper-purple-a200: #e040fb;
      --paper-purple-a400: #d500f9;
      --paper-purple-a700: #aa00ff;

      --paper-deep-purple-50: #ede7f6;
      --paper-deep-purple-100: #d1c4e9;
      --paper-deep-purple-200: #b39ddb;
      --paper-deep-purple-300: #9575cd;
      --paper-deep-purple-400: #7e57c2;
      --paper-deep-purple-500: #673ab7;
      --paper-deep-purple-600: #5e35b1;
      --paper-deep-purple-700: #512da8;
      --paper-deep-purple-800: #4527a0;
      --paper-deep-purple-900: #311b92;
      --paper-deep-purple-a100: #b388ff;
      --paper-deep-purple-a200: #7c4dff;
      --paper-deep-purple-a400: #651fff;
      --paper-deep-purple-a700: #6200ea;

      --paper-indigo-50: #e8eaf6;
      --paper-indigo-100: #c5cae9;
      --paper-indigo-200: #9fa8da;
      --paper-indigo-300: #7986cb;
      --paper-indigo-400: #5c6bc0;
      --paper-indigo-500: #3f51b5;
      --paper-indigo-600: #3949ab;
      --paper-indigo-700: #303f9f;
      --paper-indigo-800: #283593;
      --paper-indigo-900: #1a237e;
      --paper-indigo-a100: #8c9eff;
      --paper-indigo-a200: #536dfe;
      --paper-indigo-a400: #3d5afe;
      --paper-indigo-a700: #304ffe;

      --paper-blue-50: #e3f2fd;
      --paper-blue-100: #bbdefb;
      --paper-blue-200: #90caf9;
      --paper-blue-300: #64b5f6;
      --paper-blue-400: #42a5f5;
      --paper-blue-500: #2196f3;
      --paper-blue-600: #1e88e5;
      --paper-blue-700: #1976d2;
      --paper-blue-800: #1565c0;
      --paper-blue-900: #0d47a1;
      --paper-blue-a100: #82b1ff;
      --paper-blue-a200: #448aff;
      --paper-blue-a400: #2979ff;
      --paper-blue-a700: #2962ff;

      --paper-light-blue-50: #e1f5fe;
      --paper-light-blue-100: #b3e5fc;
      --paper-light-blue-200: #81d4fa;
      --paper-light-blue-300: #4fc3f7;
      --paper-light-blue-400: #29b6f6;
      --paper-light-blue-500: #03a9f4;
      --paper-light-blue-600: #039be5;
      --paper-light-blue-700: #0288d1;
      --paper-light-blue-800: #0277bd;
      --paper-light-blue-900: #01579b;
      --paper-light-blue-a100: #80d8ff;
      --paper-light-blue-a200: #40c4ff;
      --paper-light-blue-a400: #00b0ff;
      --paper-light-blue-a700: #0091ea;

      --paper-cyan-50: #e0f7fa;
      --paper-cyan-100: #b2ebf2;
      --paper-cyan-200: #80deea;
      --paper-cyan-300: #4dd0e1;
      --paper-cyan-400: #26c6da;
      --paper-cyan-500: #00bcd4;
      --paper-cyan-600: #00acc1;
      --paper-cyan-700: #0097a7;
      --paper-cyan-800: #00838f;
      --paper-cyan-900: #006064;
      --paper-cyan-a100: #84ffff;
      --paper-cyan-a200: #18ffff;
      --paper-cyan-a400: #00e5ff;
      --paper-cyan-a700: #00b8d4;

      --paper-teal-50: #e0f2f1;
      --paper-teal-100: #b2dfdb;
      --paper-teal-200: #80cbc4;
      --paper-teal-300: #4db6ac;
      --paper-teal-400: #26a69a;
      --paper-teal-500: #009688;
      --paper-teal-600: #00897b;
      --paper-teal-700: #00796b;
      --paper-teal-800: #00695c;
      --paper-teal-900: #004d40;
      --paper-teal-a100: #a7ffeb;
      --paper-teal-a200: #64ffda;
      --paper-teal-a400: #1de9b6;
      --paper-teal-a700: #00bfa5;

      --paper-green-50: #e8f5e9;
      --paper-green-100: #c8e6c9;
      --paper-green-200: #a5d6a7;
      --paper-green-300: #81c784;
      --paper-green-400: #66bb6a;
      --paper-green-500: #4caf50;
      --paper-green-600: #43a047;
      --paper-green-700: #388e3c;
      --paper-green-800: #2e7d32;
      --paper-green-900: #1b5e20;
      --paper-green-a100: #b9f6ca;
      --paper-green-a200: #69f0ae;
      --paper-green-a400: #00e676;
      --paper-green-a700: #00c853;

      --paper-light-green-50: #f1f8e9;
      --paper-light-green-100: #dcedc8;
      --paper-light-green-200: #c5e1a5;
      --paper-light-green-300: #aed581;
      --paper-light-green-400: #9ccc65;
      --paper-light-green-500: #8bc34a;
      --paper-light-green-600: #7cb342;
      --paper-light-green-700: #689f38;
      --paper-light-green-800: #558b2f;
      --paper-light-green-900: #33691e;
      --paper-light-green-a100: #ccff90;
      --paper-light-green-a200: #b2ff59;
      --paper-light-green-a400: #76ff03;
      --paper-light-green-a700: #64dd17;

      --paper-lime-50: #f9fbe7;
      --paper-lime-100: #f0f4c3;
      --paper-lime-200: #e6ee9c;
      --paper-lime-300: #dce775;
      --paper-lime-400: #d4e157;
      --paper-lime-500: #cddc39;
      --paper-lime-600: #c0ca33;
      --paper-lime-700: #afb42b;
      --paper-lime-800: #9e9d24;
      --paper-lime-900: #827717;
      --paper-lime-a100: #f4ff81;
      --paper-lime-a200: #eeff41;
      --paper-lime-a400: #c6ff00;
      --paper-lime-a700: #aeea00;

      --paper-yellow-50: #fffde7;
      --paper-yellow-100: #fff9c4;
      --paper-yellow-200: #fff59d;
      --paper-yellow-300: #fff176;
      --paper-yellow-400: #ffee58;
      --paper-yellow-500: #ffeb3b;
      --paper-yellow-600: #fdd835;
      --paper-yellow-700: #fbc02d;
      --paper-yellow-800: #f9a825;
      --paper-yellow-900: #f57f17;
      --paper-yellow-a100: #ffff8d;
      --paper-yellow-a200: #ffff00;
      --paper-yellow-a400: #ffea00;
      --paper-yellow-a700: #ffd600;

      --paper-amber-50: #fff8e1;
      --paper-amber-100: #ffecb3;
      --paper-amber-200: #ffe082;
      --paper-amber-300: #ffd54f;
      --paper-amber-400: #ffca28;
      --paper-amber-500: #ffc107;
      --paper-amber-600: #ffb300;
      --paper-amber-700: #ffa000;
      --paper-amber-800: #ff8f00;
      --paper-amber-900: #ff6f00;
      --paper-amber-a100: #ffe57f;
      --paper-amber-a200: #ffd740;
      --paper-amber-a400: #ffc400;
      --paper-amber-a700: #ffab00;

      --paper-orange-50: #fff3e0;
      --paper-orange-100: #ffe0b2;
      --paper-orange-200: #ffcc80;
      --paper-orange-300: #ffb74d;
      --paper-orange-400: #ffa726;
      --paper-orange-500: #ff9800;
      --paper-orange-600: #fb8c00;
      --paper-orange-700: #f57c00;
      --paper-orange-800: #ef6c00;
      --paper-orange-900: #e65100;
      --paper-orange-a100: #ffd180;
      --paper-orange-a200: #ffab40;
      --paper-orange-a400: #ff9100;
      --paper-orange-a700: #ff6500;

      --paper-deep-orange-50: #fbe9e7;
      --paper-deep-orange-100: #ffccbc;
      --paper-deep-orange-200: #ffab91;
      --paper-deep-orange-300: #ff8a65;
      --paper-deep-orange-400: #ff7043;
      --paper-deep-orange-500: #ff5722;
      --paper-deep-orange-600: #f4511e;
      --paper-deep-orange-700: #e64a19;
      --paper-deep-orange-800: #d84315;
      --paper-deep-orange-900: #bf360c;
      --paper-deep-orange-a100: #ff9e80;
      --paper-deep-orange-a200: #ff6e40;
      --paper-deep-orange-a400: #ff3d00;
      --paper-deep-orange-a700: #dd2c00;

      --paper-brown-50: #efebe9;
      --paper-brown-100: #d7ccc8;
      --paper-brown-200: #bcaaa4;
      --paper-brown-300: #a1887f;
      --paper-brown-400: #8d6e63;
      --paper-brown-500: #795548;
      --paper-brown-600: #6d4c41;
      --paper-brown-700: #5d4037;
      --paper-brown-800: #4e342e;
      --paper-brown-900: #3e2723;

      --paper-grey-50: #fafafa;
      --paper-grey-100: #f5f5f5;
      --paper-grey-200: #eeeeee;
      --paper-grey-300: #e0e0e0;
      --paper-grey-400: #bdbdbd;
      --paper-grey-500: #9e9e9e;
      --paper-grey-600: #757575;
      --paper-grey-700: #616161;
      --paper-grey-800: #424242;
      --paper-grey-900: #212121;

      --paper-blue-grey-50: #eceff1;
      --paper-blue-grey-100: #cfd8dc;
      --paper-blue-grey-200: #b0bec5;
      --paper-blue-grey-300: #90a4ae;
      --paper-blue-grey-400: #78909c;
      --paper-blue-grey-500: #607d8b;
      --paper-blue-grey-600: #546e7a;
      --paper-blue-grey-700: #455a64;
      --paper-blue-grey-800: #37474f;
      --paper-blue-grey-900: #263238;

      /* opacity for dark text on a light background */
      --dark-divider-opacity: 0.12;
      --dark-disabled-opacity: 0.38; /* or hint text or icon */
      --dark-secondary-opacity: 0.54;
      --dark-primary-opacity: 0.87;

      /* opacity for light text on a dark background */
      --light-divider-opacity: 0.12;
      --light-disabled-opacity: 0.3; /* or hint text or icon */
      --light-secondary-opacity: 0.7;
      --light-primary-opacity: 1.0;

    }

  </style>
</custom-style>
`;an.setAttribute("style","display: none;"),document.head.appendChild(an.content);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const rn=Rr`
<custom-style>
  <style is="custom-style">
    html {
      /*
       * You can use these generic variables in your elements for easy theming.
       * For example, if all your elements use \`--primary-text-color\` as its main
       * color, then switching from a light to a dark theme is just a matter of
       * changing the value of \`--primary-text-color\` in your application.
       */
      --primary-text-color: var(--light-theme-text-color);
      --primary-background-color: var(--light-theme-background-color);
      --secondary-text-color: var(--light-theme-secondary-color);
      --disabled-text-color: var(--light-theme-disabled-color);
      --divider-color: var(--light-theme-divider-color);
      --error-color: var(--paper-deep-orange-a700);

      /*
       * Primary and accent colors. Also see color.js for more colors.
       */
      --primary-color: var(--paper-indigo-500);
      --light-primary-color: var(--paper-indigo-100);
      --dark-primary-color: var(--paper-indigo-700);

      --accent-color: var(--paper-pink-a200);
      --light-accent-color: var(--paper-pink-a100);
      --dark-accent-color: var(--paper-pink-a400);


      /*
       * Material Design Light background theme
       */
      --light-theme-background-color: #ffffff;
      --light-theme-base-color: #000000;
      --light-theme-text-color: var(--paper-grey-900);
      --light-theme-secondary-color: #737373;  /* for secondary text and icons */
      --light-theme-disabled-color: #9b9b9b;  /* disabled/hint text */
      --light-theme-divider-color: #dbdbdb;

      /*
       * Material Design Dark background theme
       */
      --dark-theme-background-color: var(--paper-grey-900);
      --dark-theme-base-color: #ffffff;
      --dark-theme-text-color: #ffffff;
      --dark-theme-secondary-color: #bcbcbc;  /* for secondary text and icons */
      --dark-theme-disabled-color: #646464;  /* disabled/hint text */
      --dark-theme-divider-color: #3c3c3c;

      /*
       * Deprecated values because of their confusing names.
       */
      --text-primary-color: var(--dark-theme-text-color);
      --default-primary-color: var(--primary-color);
    }
  </style>
</custom-style>`;rn.setAttribute("style","display: none;"),document.head.appendChild(rn.content);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const nn={properties:{focused:{type:Boolean,value:!1,notify:!0,readOnly:!0,reflectToAttribute:!0},disabled:{type:Boolean,value:!1,notify:!0,observer:"_disabledChanged",reflectToAttribute:!0},_oldTabIndex:{type:String},_boundFocusBlurHandler:{type:Function,value:function(){return this._focusBlurHandler.bind(this)}}},observers:["_changedControlState(focused, disabled)"],ready:function(){this.addEventListener("focus",this._boundFocusBlurHandler,!0),this.addEventListener("blur",this._boundFocusBlurHandler,!0)},_focusBlurHandler:function(t){this._setFocused("focus"===t.type)},_disabledChanged:function(t,e){this.setAttribute("aria-disabled",t?"true":"false"),this.style.pointerEvents=t?"none":"",t?(this._oldTabIndex=this.getAttribute("tabindex"),this._setFocused(!1),this.tabIndex=-1,this.blur()):void 0!==this._oldTabIndex&&(null===this._oldTabIndex?this.removeAttribute("tabindex"):this.setAttribute("tabindex",this._oldTabIndex))},_changedControlState:function(){this._controlStateChanged&&this._controlStateChanged()}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var sn={"U+0008":"backspace","U+0009":"tab","U+001B":"esc","U+0020":"space","U+007F":"del"},cn={8:"backspace",9:"tab",13:"enter",27:"esc",33:"pageup",34:"pagedown",35:"end",36:"home",32:"space",37:"left",38:"up",39:"right",40:"down",46:"del",106:"*"},on={shift:"shiftKey",ctrl:"ctrlKey",alt:"altKey",meta:"metaKey"},ln=/[a-z0-9*]/,hn=/U\+/,pn=/^arrow/,dn=/^space(bar)?/,un=/^escape$/;function vn(t,e){var a="";if(t){var i=t.toLowerCase();" "===i||dn.test(i)?a="space":un.test(i)?a="esc":1==i.length?e&&!ln.test(i)||(a=i):a=pn.test(i)?i.replace("arrow",""):"multiply"==i?"*":i}return a}function mn(t,e){return t.key?vn(t.key,e):t.detail&&t.detail.key?vn(t.detail.key,e):(a=t.keyIdentifier,i="",a&&(a in sn?i=sn[a]:hn.test(a)?(a=parseInt(a.replace("U+","0x"),16),i=String.fromCharCode(a).toLowerCase()):i=a.toLowerCase()),i||function(t){var e="";return Number(t)&&(e=t>=65&&t<=90?String.fromCharCode(32+t):t>=112&&t<=123?"f"+(t-112+1):t>=48&&t<=57?String(t-48):t>=96&&t<=105?String(t-96):cn[t]),e}(t.keyCode)||"");var a,i}function fn(t,e){return mn(e,t.hasModifiers)===t.key&&(!t.hasModifiers||!!e.shiftKey==!!t.shiftKey&&!!e.ctrlKey==!!t.ctrlKey&&!!e.altKey==!!t.altKey&&!!e.metaKey==!!t.metaKey)}function _n(t){return t.trim().split(" ").map(function(t){return function(t){return 1===t.length?{combo:t,key:t,event:"keydown"}:t.split("+").reduce(function(t,e){var a=e.split(":"),i=a[0],r=a[1];return i in on?(t[on[i]]=!0,t.hasModifiers=!0):(t.key=i,t.event=r||"keydown"),t},{combo:t.split(":").shift()})}(t)})}const gn={properties:{keyEventTarget:{type:Object,value:function(){return this}},stopKeyboardEventPropagation:{type:Boolean,value:!1},_boundKeyHandlers:{type:Array,value:function(){return[]}},_imperativeKeyBindings:{type:Object,value:function(){return{}}}},observers:["_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)"],keyBindings:{},registered:function(){this._prepKeyBindings()},attached:function(){this._listenKeyEventListeners()},detached:function(){this._unlistenKeyEventListeners()},addOwnKeyBinding:function(t,e){this._imperativeKeyBindings[t]=e,this._prepKeyBindings(),this._resetKeyEventListeners()},removeOwnKeyBindings:function(){this._imperativeKeyBindings={},this._prepKeyBindings(),this._resetKeyEventListeners()},keyboardEventMatchesKeys:function(t,e){for(var a=_n(e),i=0;i<a.length;++i)if(fn(a[i],t))return!0;return!1},_collectKeyBindings:function(){var t=this.behaviors.map(function(t){return t.keyBindings});return-1===t.indexOf(this.keyBindings)&&t.push(this.keyBindings),t},_prepKeyBindings:function(){for(var t in this._keyBindings={},this._collectKeyBindings().forEach(function(t){for(var e in t)this._addKeyBinding(e,t[e])},this),this._imperativeKeyBindings)this._addKeyBinding(t,this._imperativeKeyBindings[t]);for(var e in this._keyBindings)this._keyBindings[e].sort(function(t,e){var a=t[0].hasModifiers;return a===e[0].hasModifiers?0:a?-1:1})},_addKeyBinding:function(t,e){_n(t).forEach(function(t){this._keyBindings[t.event]=this._keyBindings[t.event]||[],this._keyBindings[t.event].push([t,e])},this)},_resetKeyEventListeners:function(){this._unlistenKeyEventListeners(),this.isAttached&&this._listenKeyEventListeners()},_listenKeyEventListeners:function(){this.keyEventTarget&&Object.keys(this._keyBindings).forEach(function(t){var e=this._keyBindings[t],a=this._onKeyBindingEvent.bind(this,e);this._boundKeyHandlers.push([this.keyEventTarget,t,a]),this.keyEventTarget.addEventListener(t,a)},this)},_unlistenKeyEventListeners:function(){for(var t,e,a,i;this._boundKeyHandlers.length;)e=(t=this._boundKeyHandlers.pop())[0],a=t[1],i=t[2],e.removeEventListener(a,i)},_onKeyBindingEvent:function(t,e){if(this.stopKeyboardEventPropagation&&e.stopPropagation(),!e.defaultPrevented)for(var a=0;a<t.length;a++){var i=t[a][0],r=t[a][1];if(fn(i,e)&&(this._triggerKeyHandler(i,r,e),e.defaultPrevented))return}},_triggerKeyHandler:function(t,e,a){var i=Object.create(t);i.keyboardEvent=a;var r=new CustomEvent(t.event,{detail:i,cancelable:!0});this[e].call(this,r),r.defaultPrevented&&a.preventDefault()}},yn={properties:{pressed:{type:Boolean,readOnly:!0,value:!1,reflectToAttribute:!0,observer:"_pressedChanged"},toggles:{type:Boolean,value:!1,reflectToAttribute:!0},active:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0},pointerDown:{type:Boolean,readOnly:!0,value:!1},receivedFocusFromKeyboard:{type:Boolean,readOnly:!0},ariaActiveAttribute:{type:String,value:"aria-pressed",observer:"_ariaActiveAttributeChanged"}},listeners:{down:"_downHandler",up:"_upHandler",tap:"_tapHandler"},observers:["_focusChanged(focused)","_activeChanged(active, ariaActiveAttribute)"],keyBindings:{"enter:keydown":"_asyncClick","space:keydown":"_spaceKeyDownHandler","space:keyup":"_spaceKeyUpHandler"},_mouseEventRe:/^mouse/,_tapHandler:function(){this.toggles?this._userActivate(!this.active):this.active=!1},_focusChanged:function(t){this._detectKeyboardFocus(t),t||this._setPressed(!1)},_detectKeyboardFocus:function(t){this._setReceivedFocusFromKeyboard(!this.pointerDown&&t)},_userActivate:function(t){this.active!==t&&(this.active=t,this.fire("change"))},_downHandler:function(t){this._setPointerDown(!0),this._setPressed(!0),this._setReceivedFocusFromKeyboard(!1)},_upHandler:function(){this._setPointerDown(!1),this._setPressed(!1)},_spaceKeyDownHandler:function(t){var e=t.detail.keyboardEvent,a=pr(e).localTarget;this.isLightDescendant(a)||(e.preventDefault(),e.stopImmediatePropagation(),this._setPressed(!0))},_spaceKeyUpHandler:function(t){var e=t.detail.keyboardEvent,a=pr(e).localTarget;this.isLightDescendant(a)||(this.pressed&&this._asyncClick(),this._setPressed(!1))},_asyncClick:function(){this.async(function(){this.click()},1)},_pressedChanged:function(t){this._changedButtonState()},_ariaActiveAttributeChanged:function(t,e){e&&e!=t&&this.hasAttribute(e)&&this.removeAttribute(e)},_activeChanged:function(t,e){this.toggles?this.setAttribute(this.ariaActiveAttribute,t?"true":"false"):this.removeAttribute(this.ariaActiveAttribute),this._changedButtonState()},_controlStateChanged:function(){this.disabled?this._setPressed(!1):this._changedButtonState()},_changedButtonState:function(){this._buttonStateChanged&&this._buttonStateChanged()}},bn=[gn,yn];
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
var zn={distance:function(t,e,a,i){var r=t-a,n=e-i;return Math.sqrt(r*r+n*n)},now:window.performance&&window.performance.now?window.performance.now.bind(window.performance):Date.now};function xn(t){this.element=t,this.width=this.boundingRect.width,this.height=this.boundingRect.height,this.size=Math.max(this.width,this.height)}function wn(t){this.element=t,this.color=window.getComputedStyle(t).color,this.wave=document.createElement("div"),this.waveContainer=document.createElement("div"),this.wave.style.backgroundColor=this.color,this.wave.classList.add("wave"),this.waveContainer.classList.add("wave-container"),pr(this.waveContainer).appendChild(this.wave),this.resetInteractionState()}xn.prototype={get boundingRect(){return this.element.getBoundingClientRect()},furthestCornerDistanceFrom:function(t,e){var a=zn.distance(t,e,0,0),i=zn.distance(t,e,this.width,0),r=zn.distance(t,e,0,this.height),n=zn.distance(t,e,this.width,this.height);return Math.max(a,i,r,n)}},wn.MAX_RADIUS=300,wn.prototype={get recenters(){return this.element.recenters},get center(){return this.element.center},get mouseDownElapsed(){var t;return this.mouseDownStart?(t=zn.now()-this.mouseDownStart,this.mouseUpStart&&(t-=this.mouseUpElapsed),t):0},get mouseUpElapsed(){return this.mouseUpStart?zn.now()-this.mouseUpStart:0},get mouseDownElapsedSeconds(){return this.mouseDownElapsed/1e3},get mouseUpElapsedSeconds(){return this.mouseUpElapsed/1e3},get mouseInteractionSeconds(){return this.mouseDownElapsedSeconds+this.mouseUpElapsedSeconds},get initialOpacity(){return this.element.initialOpacity},get opacityDecayVelocity(){return this.element.opacityDecayVelocity},get radius(){var t=this.containerMetrics.width*this.containerMetrics.width,e=this.containerMetrics.height*this.containerMetrics.height,a=1.1*Math.min(Math.sqrt(t+e),wn.MAX_RADIUS)+5,i=1.1-a/wn.MAX_RADIUS*.2,r=this.mouseInteractionSeconds/i,n=a*(1-Math.pow(80,-r));return Math.abs(n)},get opacity(){return this.mouseUpStart?Math.max(0,this.initialOpacity-this.mouseUpElapsedSeconds*this.opacityDecayVelocity):this.initialOpacity},get outerOpacity(){var t=.3*this.mouseUpElapsedSeconds,e=this.opacity;return Math.max(0,Math.min(t,e))},get isOpacityFullyDecayed(){return this.opacity<.01&&this.radius>=Math.min(this.maxRadius,wn.MAX_RADIUS)},get isRestingAtMaxRadius(){return this.opacity>=this.initialOpacity&&this.radius>=Math.min(this.maxRadius,wn.MAX_RADIUS)},get isAnimationComplete(){return this.mouseUpStart?this.isOpacityFullyDecayed:this.isRestingAtMaxRadius},get translationFraction(){return Math.min(1,this.radius/this.containerMetrics.size*2/Math.sqrt(2))},get xNow(){return this.xEnd?this.xStart+this.translationFraction*(this.xEnd-this.xStart):this.xStart},get yNow(){return this.yEnd?this.yStart+this.translationFraction*(this.yEnd-this.yStart):this.yStart},get isMouseDown(){return this.mouseDownStart&&!this.mouseUpStart},resetInteractionState:function(){this.maxRadius=0,this.mouseDownStart=0,this.mouseUpStart=0,this.xStart=0,this.yStart=0,this.xEnd=0,this.yEnd=0,this.slideDistance=0,this.containerMetrics=new xn(this.element)},draw:function(){var t,e,a;this.wave.style.opacity=this.opacity,t=this.radius/(this.containerMetrics.size/2),e=this.xNow-this.containerMetrics.width/2,a=this.yNow-this.containerMetrics.height/2,this.waveContainer.style.webkitTransform="translate("+e+"px, "+a+"px)",this.waveContainer.style.transform="translate3d("+e+"px, "+a+"px, 0)",this.wave.style.webkitTransform="scale("+t+","+t+")",this.wave.style.transform="scale3d("+t+","+t+",1)"},downAction:function(t){var e=this.containerMetrics.width/2,a=this.containerMetrics.height/2;this.resetInteractionState(),this.mouseDownStart=zn.now(),this.center?(this.xStart=e,this.yStart=a,this.slideDistance=zn.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)):(this.xStart=t?t.detail.x-this.containerMetrics.boundingRect.left:this.containerMetrics.width/2,this.yStart=t?t.detail.y-this.containerMetrics.boundingRect.top:this.containerMetrics.height/2),this.recenters&&(this.xEnd=e,this.yEnd=a,this.slideDistance=zn.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)),this.maxRadius=this.containerMetrics.furthestCornerDistanceFrom(this.xStart,this.yStart),this.waveContainer.style.top=(this.containerMetrics.height-this.containerMetrics.size)/2+"px",this.waveContainer.style.left=(this.containerMetrics.width-this.containerMetrics.size)/2+"px",this.waveContainer.style.width=this.containerMetrics.size+"px",this.waveContainer.style.height=this.containerMetrics.size+"px"},upAction:function(t){this.isMouseDown&&(this.mouseUpStart=zn.now())},remove:function(){pr(this.waveContainer.parentNode).removeChild(this.waveContainer)}},_r({_template:Rr`
    <style>
      :host {
        display: block;
        position: absolute;
        border-radius: inherit;
        overflow: hidden;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        /* See PolymerElements/paper-behaviors/issues/34. On non-Chrome browsers,
         * creating a node (with a position:absolute) in the middle of an event
         * handler "interrupts" that event handler (which happens when the
         * ripple is created on demand) */
        pointer-events: none;
      }

      :host([animating]) {
        /* This resolves a rendering issue in Chrome (as of 40) where the
           ripple is not properly clipped by its parent (which may have
           rounded corners). See: http://jsbin.com/temexa/4

           Note: We only apply this style conditionally. Otherwise, the browser
           will create a new compositing layer for every ripple element on the
           page, and that would be bad. */
        -webkit-transform: translate(0, 0);
        transform: translate3d(0, 0, 0);
      }

      #background,
      #waves,
      .wave-container,
      .wave {
        pointer-events: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      #background,
      .wave {
        opacity: 0;
      }

      #waves,
      .wave {
        overflow: hidden;
      }

      .wave-container,
      .wave {
        border-radius: 50%;
      }

      :host(.circle) #background,
      :host(.circle) #waves {
        border-radius: 50%;
      }

      :host(.circle) .wave-container {
        overflow: hidden;
      }
    </style>

    <div id="background"></div>
    <div id="waves"></div>
`,is:"paper-ripple",behaviors:[gn],properties:{initialOpacity:{type:Number,value:.25},opacityDecayVelocity:{type:Number,value:.8},recenters:{type:Boolean,value:!1},center:{type:Boolean,value:!1},ripples:{type:Array,value:function(){return[]}},animating:{type:Boolean,readOnly:!0,reflectToAttribute:!0,value:!1},holdDown:{type:Boolean,value:!1,observer:"_holdDownChanged"},noink:{type:Boolean,value:!1},_animating:{type:Boolean},_boundAnimate:{type:Function,value:function(){return this.animate.bind(this)}}},get target(){return this.keyEventTarget},keyBindings:{"enter:keydown":"_onEnterKeydown","space:keydown":"_onSpaceKeydown","space:keyup":"_onSpaceKeyup"},attached:function(){11==this.parentNode.nodeType?this.keyEventTarget=pr(this).getOwnerRoot().host:this.keyEventTarget=this.parentNode;var t=this.keyEventTarget;this.listen(t,"up","uiUpAction"),this.listen(t,"down","uiDownAction")},detached:function(){this.unlisten(this.keyEventTarget,"up","uiUpAction"),this.unlisten(this.keyEventTarget,"down","uiDownAction"),this.keyEventTarget=null},get shouldKeepAnimating(){for(var t=0;t<this.ripples.length;++t)if(!this.ripples[t].isAnimationComplete)return!0;return!1},simulatedRipple:function(){this.downAction(null),this.async(function(){this.upAction()},1)},uiDownAction:function(t){this.noink||this.downAction(t)},downAction:function(t){this.holdDown&&this.ripples.length>0||(this.addRipple().downAction(t),this._animating||(this._animating=!0,this.animate()))},uiUpAction:function(t){this.noink||this.upAction(t)},upAction:function(t){this.holdDown||(this.ripples.forEach(function(e){e.upAction(t)}),this._animating=!0,this.animate())},onAnimationComplete:function(){this._animating=!1,this.$.background.style.backgroundColor=null,this.fire("transitionend")},addRipple:function(){var t=new wn(this);return pr(this.$.waves).appendChild(t.waveContainer),this.$.background.style.backgroundColor=t.color,this.ripples.push(t),this._setAnimating(!0),t},removeRipple:function(t){var e=this.ripples.indexOf(t);e<0||(this.ripples.splice(e,1),t.remove(),this.ripples.length||this._setAnimating(!1))},animate:function(){if(this._animating){var t,e;for(t=0;t<this.ripples.length;++t)(e=this.ripples[t]).draw(),this.$.background.style.opacity=e.outerOpacity,e.isOpacityFullyDecayed&&!e.isRestingAtMaxRadius&&this.removeRipple(e);this.shouldKeepAnimating||0!==this.ripples.length?window.requestAnimationFrame(this._boundAnimate):this.onAnimationComplete()}},animateRipple:function(){return this.animate()},_onEnterKeydown:function(){this.uiDownAction(),this.async(this.uiUpAction,1)},_onSpaceKeydown:function(){this.uiDownAction()},_onSpaceKeyup:function(){this.uiUpAction()},_holdDownChanged:function(t,e){void 0!==e&&(t?this.downAction():this.upAction())}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const Cn=[bn,nn,{properties:{noink:{type:Boolean,observer:"_noinkChanged"},_rippleContainer:{type:Object}},_buttonStateChanged:function(){this.focused&&this.ensureRipple()},_downHandler:function(t){yn._downHandler.call(this,t),this.pressed&&this.ensureRipple(t)},ensureRipple:function(t){if(!this.hasRipple()){this._ripple=this._createRipple(),this._ripple.noink=this.noink;var e=this._rippleContainer||this.root;if(e&&pr(e).appendChild(this._ripple),t){var a=pr(this._rippleContainer||this),i=pr(t).rootTarget;a.deepContains(i)&&this._ripple.uiDownAction(t)}}},getRipple:function(){return this.ensureRipple(),this._ripple},hasRipple:function(){return Boolean(this._ripple)},_createRipple:function(){return document.createElement("paper-ripple")},_noinkChanged:function(t){this.hasRipple()&&(this._ripple.noink=t)}},{properties:{elevation:{type:Number,reflectToAttribute:!0,readOnly:!0}},observers:["_calculateElevation(focused, disabled, active, pressed, receivedFocusFromKeyboard)","_computeKeyboardClass(receivedFocusFromKeyboard)"],hostAttributes:{role:"button",tabindex:"0",animated:!0},_calculateElevation:function(){var t=1;this.disabled?t=0:this.active||this.pressed?t=4:this.receivedFocusFromKeyboard&&(t=3),this._setElevation(t)},_computeKeyboardClass:function(t){this.toggleClass("keyboard-focus",t)},_spaceKeyDownHandler:function(t){yn._spaceKeyDownHandler.call(this,t),this.hasRipple()&&this.getRipple().ripples.length<1&&this._ripple.uiDownAction()},_spaceKeyUpHandler:function(t){yn._spaceKeyUpHandler.call(this,t),this.hasRipple()&&this._ripple.uiUpAction()}}],Mn=Rr`
  <style include="paper-material-styles">
    :host {
      @apply --layout-vertical;
      @apply --layout-center-center;

      background: var(--paper-fab-background, var(--accent-color));
      border-radius: 50%;
      box-sizing: border-box;
      color: var(--text-primary-color);
      cursor: pointer;
      height: 56px;
      min-width: 0;
      outline: none;
      padding: 16px;
      position: relative;
      -moz-user-select: none;
      -ms-user-select: none;
      -webkit-user-select: none;
      user-select: none;
      width: 56px;
      z-index: 0;

      /* NOTE: Both values are needed, since some phones require the value \`transparent\`. */
      -webkit-tap-highlight-color: rgba(0,0,0,0);
      -webkit-tap-highlight-color: transparent;

      @apply --paper-fab;
    }

    [hidden] {
      display: none !important;
    }

    :host([mini]) {
      width: 40px;
      height: 40px;
      padding: 8px;

      @apply --paper-fab-mini;
    }

    :host([disabled]) {
      color: var(--paper-fab-disabled-text, var(--paper-grey-500));
      background: var(--paper-fab-disabled-background, var(--paper-grey-300));

      @apply --paper-fab-disabled;
    }

    iron-icon {
      @apply --paper-fab-iron-icon;
    }

    span {
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: center;

      @apply --paper-fab-label;
    }

    :host(.keyboard-focus) {
      background: var(--paper-fab-keyboard-focus-background, var(--paper-pink-900));
    }

    :host([elevation="1"]) {
      @apply --paper-material-elevation-1;
    }

    :host([elevation="2"]) {
      @apply --paper-material-elevation-2;
    }

    :host([elevation="3"]) {
      @apply --paper-material-elevation-3;
    }

    :host([elevation="4"]) {
      @apply --paper-material-elevation-4;
    }

    :host([elevation="5"]) {
      @apply --paper-material-elevation-5;
    }
  </style>

  <iron-icon id="icon" hidden\$="{{!_computeIsIconFab(icon, src)}}" src="[[src]]" icon="[[icon]]"></iron-icon>
  <span hidden\$="{{_computeIsIconFab(icon, src)}}">{{label}}</span>
`;
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Mn.setAttribute("strip-whitespace",""),_r({_template:Mn,is:"paper-fab",behaviors:[Cn],properties:{src:{type:String,value:""},icon:{type:String,value:""},mini:{type:Boolean,value:!1,reflectToAttribute:!0},label:{type:String,observer:"_labelChanged"}},_labelChanged:function(){this.setAttribute("aria-label",this.label)},_computeIsIconFab:function(t,e){return t.length>0||e.length>0}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
_r({is:"iron-iconset-svg",properties:{name:{type:String,observer:"_nameChanged"},size:{type:Number,value:24},rtlMirroring:{type:Boolean,value:!1},useGlobalRtlAttribute:{type:Boolean,value:!1}},created:function(){this._meta=new Zr({type:"iconset",key:null,value:null})},attached:function(){this.style.display="none"},getIconNames:function(){return this._icons=this._createIconMap(),Object.keys(this._icons).map(function(t){return this.name+":"+t},this)},applyIcon:function(t,e){this.removeIcon(t);var a=this._cloneIcon(e,this.rtlMirroring&&this._targetIsRTL(t));if(a){var i=pr(t.root||t);return i.insertBefore(a,i.childNodes[0]),t._svgIcon=a}return null},removeIcon:function(t){t._svgIcon&&(pr(t.root||t).removeChild(t._svgIcon),t._svgIcon=null)},_targetIsRTL:function(t){if(null==this.__targetIsRTL)if(this.useGlobalRtlAttribute){var e=document.body&&document.body.hasAttribute("dir")?document.body:document.documentElement;this.__targetIsRTL="rtl"===e.getAttribute("dir")}else t&&t.nodeType!==Node.ELEMENT_NODE&&(t=t.host),this.__targetIsRTL=t&&"rtl"===window.getComputedStyle(t).direction;return this.__targetIsRTL},_nameChanged:function(){this._meta.value=null,this._meta.key=this.name,this._meta.value=this,this.async(function(){this.fire("iron-iconset-added",this,{node:window})})},_createIconMap:function(){var t=Object.create(null);return pr(this).querySelectorAll("[id]").forEach(function(e){t[e.id]=e}),t},_cloneIcon:function(t,e){return this._icons=this._icons||this._createIconMap(),this._prepareSvgClone(this._icons[t],this.size,e)},_prepareSvgClone:function(t,e,a){if(t){var i=t.cloneNode(!0),r=document.createElementNS("http://www.w3.org/2000/svg","svg"),n=i.getAttribute("viewBox")||"0 0 "+e+" "+e,s="pointer-events: none; display: block; width: 100%; height: 100%;";return a&&i.hasAttribute("mirror-in-rtl")&&(s+="-webkit-transform:scale(-1,1);transform:scale(-1,1);transform-origin:center;"),r.setAttribute("viewBox",n),r.setAttribute("preserveAspectRatio","xMidYMid meet"),r.setAttribute("focusable","false"),r.style.cssText=s,r.appendChild(i).removeAttribute("id"),r}return null}});
/**
@license
Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const Hn=Rr`<iron-iconset-svg name="icons" size="24">
<svg><defs>
<g id="3d-rotation"><path d="M7.52 21.48C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32zm.89-6.52c-.19 0-.37-.03-.52-.08-.16-.06-.29-.13-.4-.24-.11-.1-.2-.22-.26-.37-.06-.14-.09-.3-.09-.47h-1.3c0 .36.07.68.21.95.14.27.33.5.56.69.24.18.51.32.82.41.3.1.62.15.96.15.37 0 .72-.05 1.03-.15.32-.1.6-.25.83-.44s.42-.43.55-.72c.13-.29.2-.61.2-.97 0-.19-.02-.38-.07-.56-.05-.18-.12-.35-.23-.51-.1-.16-.24-.3-.4-.43-.17-.13-.37-.23-.61-.31.2-.09.37-.2.52-.33.15-.13.27-.27.37-.42.1-.15.17-.3.22-.46.05-.16.07-.32.07-.48 0-.36-.06-.68-.18-.96-.12-.28-.29-.51-.51-.69-.2-.19-.47-.33-.77-.43C9.1 8.05 8.76 8 8.39 8c-.36 0-.69.05-1 .16-.3.11-.57.26-.79.45-.21.19-.38.41-.51.67-.12.26-.18.54-.18.85h1.3c0-.17.03-.32.09-.45s.14-.25.25-.34c.11-.09.23-.17.38-.22.15-.05.3-.08.48-.08.4 0 .7.1.89.31.19.2.29.49.29.86 0 .18-.03.34-.08.49-.05.15-.14.27-.25.37-.11.1-.25.18-.41.24-.16.06-.36.09-.58.09H7.5v1.03h.77c.22 0 .42.02.6.07s.33.13.45.23c.12.11.22.24.29.4.07.16.1.35.1.57 0 .41-.12.72-.35.93-.23.23-.55.33-.95.33zm8.55-5.92c-.32-.33-.7-.59-1.14-.77-.43-.18-.92-.27-1.46-.27H12v8h2.3c.55 0 1.06-.09 1.51-.27.45-.18.84-.43 1.16-.76.32-.33.57-.73.74-1.19.17-.47.26-.99.26-1.57v-.4c0-.58-.09-1.1-.26-1.57-.18-.47-.43-.87-.75-1.2zm-.39 3.16c0 .42-.05.79-.14 1.13-.1.33-.24.62-.43.85-.19.23-.43.41-.71.53-.29.12-.62.18-.99.18h-.91V9.12h.97c.72 0 1.27.23 1.64.69.38.46.57 1.12.57 1.99v.4zM12 0l-.66.03 3.81 3.81 1.33-1.33c3.27 1.55 5.61 4.72 5.96 8.48h1.5C23.44 4.84 18.29 0 12 0z"></path></g>
<g id="accessibility"><path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"></path></g>
<g id="accessible"><circle cx="12" cy="4" r="2"></circle><path d="M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.01 0-.01-.01-.02-.01H13c-.35-.2-.75-.3-1.19-.26C10.76 7.11 10 8.04 10 9.09V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.45c1.29 1.07 3.25 1.94 5 1.95zm-6.17 5c-.41 1.16-1.52 2-2.83 2-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V12.1c-2.28.46-4 2.48-4 4.9 0 2.76 2.24 5 5 5 2.42 0 4.44-1.72 4.9-4h-2.07z"></path></g>
<g id="account-balance"><path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z"></path></g>
<g id="account-balance-wallet"><path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></g>
<g id="account-box"><path d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"></path></g>
<g id="account-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path></g>
<g id="add"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></g>
<g id="add-alert"><path d="M10.01 21.01c0 1.1.89 1.99 1.99 1.99s1.99-.89 1.99-1.99h-3.98zm8.87-4.19V11c0-3.25-2.25-5.97-5.29-6.69v-.72C13.59 2.71 12.88 2 12 2s-1.59.71-1.59 1.59v.72C7.37 5.03 5.12 7.75 5.12 11v5.82L3 18.94V20h18v-1.06l-2.12-2.12zM16 13.01h-3v3h-2v-3H8V11h3V8h2v3h3v2.01z"></path></g>
<g id="add-box"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path></g>
<g id="add-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path></g>
<g id="add-circle-outline"><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="add-shopping-cart"><path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"></path></g>
<g id="alarm"><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path></g>
<g id="alarm-add"><path d="M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V9z"></path></g>
<g id="alarm-off"><path d="M12 6c3.87 0 7 3.13 7 7 0 .84-.16 1.65-.43 2.4l1.52 1.52c.58-1.19.91-2.51.91-3.92 0-4.97-4.03-9-9-9-1.41 0-2.73.33-3.92.91L9.6 6.43C10.35 6.16 11.16 6 12 6zm10-.28l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM2.92 2.29L1.65 3.57 2.98 4.9l-1.11.93 1.42 1.42 1.11-.94.8.8C3.83 8.69 3 10.75 3 13c0 4.97 4.02 9 9 9 2.25 0 4.31-.83 5.89-2.2l2.2 2.2 1.27-1.27L3.89 3.27l-.97-.98zm13.55 16.1C15.26 19.39 13.7 20 12 20c-3.87 0-7-3.13-7-7 0-1.7.61-3.26 1.61-4.47l9.86 9.86zM8.02 3.28L6.6 1.86l-.86.71 1.42 1.42.86-.71z"></path></g>
<g id="alarm-on"><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-1.46-5.47L8.41 12.4l-1.06 1.06 3.18 3.18 6-6-1.06-1.06-4.93 4.95z"></path></g>
<g id="all-out"><path d="M16.21 4.16l4 4v-4zm4 12l-4 4h4zm-12 4l-4-4v4zm-4-12l4-4h-4zm12.95-.95c-2.73-2.73-7.17-2.73-9.9 0s-2.73 7.17 0 9.9 7.17 2.73 9.9 0 2.73-7.16 0-9.9zm-1.1 8.8c-2.13 2.13-5.57 2.13-7.7 0s-2.13-5.57 0-7.7 5.57-2.13 7.7 0 2.13 5.57 0 7.7z"></path></g>
<g id="android"><path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"></path></g>
<g id="announcement"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z"></path></g>
<g id="apps"><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"></path></g>
<g id="archive"><path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z"></path></g>
<g id="arrow-back"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></g>
<g id="arrow-downward"><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></g>
<g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"></path></g>
<g id="arrow-drop-down-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 12l-4-4h8l-4 4z"></path></g>
<g id="arrow-drop-up"><path d="M7 14l5-5 5 5z"></path></g>
<g id="arrow-forward"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></g>
<g id="arrow-upward"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path></g>
<g id="aspect-ratio"><path d="M19 12h-2v3h-3v2h5v-5zM7 9h3V7H5v5h2V9zm14-6H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"></path></g>
<g id="assessment"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"></path></g>
<g id="assignment"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"></path></g>
<g id="assignment-ind"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z"></path></g>
<g id="assignment-late"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6 15h-2v-2h2v2zm0-4h-2V8h2v6zm-1-9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path></g>
<g id="assignment-return"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm4 12h-4v3l-5-5 5-5v3h4v4z"></path></g>
<g id="assignment-returned"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 15l-5-5h3V9h4v4h3l-5 5z"></path></g>
<g id="assignment-turned-in"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path></g>
<g id="attachment"><path d="M2 12.5C2 9.46 4.46 7 7.5 7H18c2.21 0 4 1.79 4 4s-1.79 4-4 4H9.5C8.12 15 7 13.88 7 12.5S8.12 10 9.5 10H17v2H9.41c-.55 0-.55 1 0 1H18c1.1 0 2-.9 2-2s-.9-2-2-2H7.5C5.57 9 4 10.57 4 12.5S5.57 16 7.5 16H17v2H7.5C4.46 18 2 15.54 2 12.5z"></path></g>
<g id="autorenew"><path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"></path></g>
<g id="backspace"><path d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 12.59L17.59 17 14 13.41 10.41 17 9 15.59 12.59 12 9 8.41 10.41 7 14 10.59 17.59 7 19 8.41 15.41 12 19 15.59z"></path></g>
<g id="backup"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"></path></g>
<g id="block"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z"></path></g>
<g id="book"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"></path></g>
<g id="bookmark"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"></path></g>
<g id="bookmark-border"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></path></g>
<g id="bug-report"><path d="M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5c-.49 0-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-6 8h-4v-2h4v2zm0-4h-4v-2h4v2z"></path></g>
<g id="build"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"></path></g>
<g id="cached"><path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"></path></g>
<g id="camera-enhance"><path d="M9 3L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-3.17L15 3H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-1l1.25-2.75L16 13l-2.75-1.25L12 9l-1.25 2.75L8 13l2.75 1.25z"></path></g>
<g id="cancel"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path></g>
<g id="card-giftcard"><path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"></path></g>
<g id="card-membership"><path d="M20 2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h4v5l4-2 4 2v-5h4c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2zm0 13H4v-2h16v2zm0-5H4V4h16v6z"></path></g>
<g id="card-travel"><path d="M20 6h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM9 4h6v2H9V4zm11 15H4v-2h16v2zm0-5H4V8h3v2h2V8h6v2h2V8h3v6z"></path></g>
<g id="change-history"><path d="M12 7.77L18.39 18H5.61L12 7.77M12 4L2 20h20L12 4z"></path></g>
<g id="check"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></g>
<g id="check-box"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></g>
<g id="check-box-outline-blank"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></g>
<g id="check-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></g>
<g id="chevron-left"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></g>
<g id="chevron-right"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></g>
<g id="chrome-reader-mode"><path d="M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15h-9V6h9v13z"></path></g>
<g id="class"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"></path></g>
<g id="clear"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></g>
<g id="close"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></g>
<g id="cloud"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"></path></g>
<g id="cloud-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14H8c-1.66 0-3-1.34-3-3s1.34-3 3-3l.14.01C8.58 8.28 10.13 7 12 7c2.21 0 4 1.79 4 4h.5c1.38 0 2.5 1.12 2.5 2.5S17.88 16 16.5 16z"></path></g>
<g id="cloud-done"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM10 17l-3.5-3.5 1.41-1.41L10 14.17 15.18 9l1.41 1.41L10 17z"></path></g>
<g id="cloud-download"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"></path></g>
<g id="cloud-off"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46C10.21 6.23 11.08 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3 0 1.13-.64 2.11-1.56 2.62l1.45 1.45C23.16 18.16 24 16.68 24 15c0-2.64-2.05-4.78-4.65-4.96zM3 5.27l2.75 2.74C2.56 8.15 0 10.77 0 14c0 3.31 2.69 6 6 6h11.73l2 2L21 20.73 4.27 4 3 5.27zM7.73 10l8 8H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.73z"></path></g>
<g id="cloud-queue"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z"></path></g>
<g id="cloud-upload"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"></path></g>
<g id="code"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"></path></g>
<g id="compare-arrows"><path d="M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z"></path></g>
<g id="content-copy"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"></path></g>
<g id="content-cut"><path d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z"></path></g>
<g id="content-paste"><path d="M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z"></path></g>
<g id="copyright"><path d="M10.08 10.86c.05-.33.16-.62.3-.87s.34-.46.59-.62c.24-.15.54-.22.91-.23.23.01.44.05.63.13.2.09.38.21.52.36s.25.33.34.53.13.42.14.64h1.79c-.02-.47-.11-.9-.28-1.29s-.4-.73-.7-1.01-.66-.5-1.08-.66-.88-.23-1.39-.23c-.65 0-1.22.11-1.7.34s-.88.53-1.2.92-.56.84-.71 1.36S8 11.29 8 11.87v.27c0 .58.08 1.12.23 1.64s.39.97.71 1.35.72.69 1.2.91 1.05.34 1.7.34c.47 0 .91-.08 1.32-.23s.77-.36 1.08-.63.56-.58.74-.94.29-.74.3-1.15h-1.79c-.01.21-.06.4-.15.58s-.21.33-.36.46-.32.23-.52.3c-.19.07-.39.09-.6.1-.36-.01-.66-.08-.89-.23-.25-.16-.45-.37-.59-.62s-.25-.55-.3-.88-.08-.67-.08-1v-.27c0-.35.03-.68.08-1.01zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="create"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></g>
<g id="create-new-folder"><path d="M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-1 8h-3v3h-2v-3h-3v-2h3V9h2v3h3v2z"></path></g>
<g id="credit-card"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path></g>
<g id="dashboard"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path></g>
<g id="date-range"><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"></path></g>
<g id="delete"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></g>
<g id="delete-forever"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"></path></g>
<g id="delete-sweep"><path d="M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zM14 5h-3l-1-1H6L5 5H2v2h12z"></path></g>
<g id="description"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"></path></g>
<g id="dns"><path d="M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></g>
<g id="done"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path></g>
<g id="done-all"><path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z"></path></g>
<g id="donut-large"><path d="M11 5.08V2c-5 .5-9 4.81-9 10s4 9.5 9 10v-3.08c-3-.48-6-3.4-6-6.92s3-6.44 6-6.92zM18.97 11H22c-.47-5-4-8.53-9-9v3.08C16 5.51 18.54 8 18.97 11zM13 18.92V22c5-.47 8.53-4 9-9h-3.03c-.43 3-2.97 5.49-5.97 5.92z"></path></g>
<g id="donut-small"><path d="M11 9.16V2c-5 .5-9 4.79-9 10s4 9.5 9 10v-7.16c-1-.41-2-1.52-2-2.84s1-2.43 2-2.84zM14.86 11H22c-.48-4.75-4-8.53-9-9v7.16c1 .3 1.52.98 1.86 1.84zM13 14.84V22c5-.47 8.52-4.25 9-9h-7.14c-.34.86-.86 1.54-1.86 1.84z"></path></g>
<g id="drafts"><path d="M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z"></path></g>
<g id="eject"><path d="M5 17h14v2H5zm7-12L5.33 15h13.34z"></path></g>
<g id="error"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></g>
<g id="error-outline"><path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="euro-symbol"><path d="M15 18.5c-2.51 0-4.68-1.42-5.76-3.5H15v-2H8.58c-.05-.33-.08-.66-.08-1s.03-.67.08-1H15V9H9.24C10.32 6.92 12.5 5.5 15 5.5c1.61 0 3.09.59 4.23 1.57L21 5.3C19.41 3.87 17.3 3 15 3c-3.92 0-7.24 2.51-8.48 6H3v2h3.06c-.04.33-.06.66-.06 1 0 .34.02.67.06 1H3v2h3.52c1.24 3.49 4.56 6 8.48 6 2.31 0 4.41-.87 6-2.3l-1.78-1.77c-1.13.98-2.6 1.57-4.22 1.57z"></path></g>
<g id="event"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"></path></g>
<g id="event-seat"><path d="M4 18v3h3v-3h10v3h3v-6H4zm15-8h3v3h-3zM2 10h3v3H2zm15 3H7V5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v8z"></path></g>
<g id="exit-to-app"><path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></g>
<g id="expand-less"><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path></g>
<g id="expand-more"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></g>
<g id="explore"><path d="M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z"></path></g>
<g id="extension"><path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"></path></g>
<g id="face"><path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"></path></g>
<g id="favorite"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></g>
<g id="favorite-border"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></g>
<g id="feedback"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"></path></g>
<g id="file-download"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></g>
<g id="file-upload"><path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"></path></g>
<g id="filter-list"><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"></path></g>
<g id="find-in-page"><path d="M20 19.59V8l-6-6H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c.45 0 .85-.15 1.19-.4l-4.43-4.43c-.8.52-1.74.83-2.76.83-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 1.02-.31 1.96-.83 2.75L20 19.59zM9 13c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z"></path></g>
<g id="find-replace"><path d="M11 6c1.38 0 2.63.56 3.54 1.46L12 10h6V4l-2.05 2.05C14.68 4.78 12.93 4 11 4c-3.53 0-6.43 2.61-6.92 6H6.1c.46-2.28 2.48-4 4.9-4zm5.64 9.14c.66-.9 1.12-1.97 1.28-3.14H15.9c-.46 2.28-2.48 4-4.9 4-1.38 0-2.63-.56-3.54-1.46L10 12H4v6l2.05-2.05C7.32 17.22 9.07 18 11 18c1.55 0 2.98-.51 4.14-1.36L20 21.49 21.49 20l-4.85-4.86z"></path></g>
<g id="fingerprint"><path d="M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2-.13-.24-.04-.55.2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67-.09.18-.26.28-.44.28zM3.5 9.72c-.1 0-.2-.03-.29-.09-.23-.16-.28-.47-.12-.7.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25.16.22.11.54-.12.7-.23.16-.54.11-.7-.12-.9-1.26-2.04-2.25-3.39-2.94-2.87-1.47-6.54-1.47-9.4.01-1.36.7-2.5 1.7-3.4 2.96-.08.14-.23.21-.39.21zm6.25 12.07c-.13 0-.26-.05-.35-.15-.87-.87-1.34-1.43-2.01-2.64-.69-1.23-1.05-2.73-1.05-4.34 0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39-2.57 0-4.66 1.97-4.66 4.39 0 1.44.32 2.77.93 3.85.64 1.15 1.08 1.64 1.85 2.42.19.2.19.51 0 .71-.11.1-.24.15-.37.15zm7.17-1.85c-1.19 0-2.24-.3-3.1-.89-1.49-1.01-2.38-2.65-2.38-4.39 0-.28.22-.5.5-.5s.5.22.5.5c0 1.41.72 2.74 1.94 3.56.71.48 1.54.71 2.54.71.24 0 .64-.03 1.04-.1.27-.05.53.13.58.41.05.27-.13.53-.41.58-.57.11-1.07.12-1.21.12zM14.91 22c-.04 0-.09-.01-.13-.02-1.59-.44-2.63-1.03-3.72-2.1-1.4-1.39-2.17-3.24-2.17-5.22 0-1.62 1.38-2.94 3.08-2.94 1.7 0 3.08 1.32 3.08 2.94 0 1.07.93 1.94 2.08 1.94s2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83-2.84 0-5.44 1.58-6.61 4.03-.39.81-.59 1.76-.59 2.8 0 .78.07 2.01.67 3.61.1.26-.03.55-.29.64-.26.1-.55-.04-.64-.29-.49-1.31-.73-2.61-.73-3.96 0-1.2.23-2.29.68-3.24 1.33-2.79 4.28-4.6 7.51-4.6 4.55 0 8.25 3.51 8.25 7.83 0 1.62-1.38 2.94-3.08 2.94s-3.08-1.32-3.08-2.94c0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51.95.94 1.86 1.46 3.27 1.85.27.07.42.35.35.61-.05.23-.26.38-.47.38z"></path></g>
<g id="first-page"><path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"></path></g>
<g id="flag"><path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"></path></g>
<g id="flight-land"><path d="M2.5 19h19v2h-19zm7.18-5.73l4.35 1.16 5.31 1.42c.8.21 1.62-.26 1.84-1.06.21-.8-.26-1.62-1.06-1.84l-5.31-1.42-2.76-9.02L10.12 2v8.28L5.15 8.95l-.93-2.32-1.45-.39v5.17l1.6.43 5.31 1.43z"></path></g>
<g id="flight-takeoff"><path d="M2.5 19h19v2h-19zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.43-1.93.51 4.14 7.17-4.97 1.33-1.97-1.54-1.45.39 1.82 3.16.77 1.33 1.6-.43 5.31-1.42 4.35-1.16L21 11.49c.81-.23 1.28-1.05 1.07-1.85z"></path></g>
<g id="flip-to-back"><path d="M9 7H7v2h2V7zm0 4H7v2h2v-2zm0-8c-1.11 0-2 .9-2 2h2V3zm4 12h-2v2h2v-2zm6-12v2h2c0-1.1-.9-2-2-2zm-6 0h-2v2h2V3zM9 17v-2H7c0 1.1.89 2 2 2zm10-4h2v-2h-2v2zm0-4h2V7h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zM5 7H3v12c0 1.1.89 2 2 2h12v-2H5V7zm10-2h2V3h-2v2zm0 12h2v-2h-2v2z"></path></g>
<g id="flip-to-front"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm2 4v-2H3c0 1.1.89 2 2 2zM3 9h2V7H3v2zm12 12h2v-2h-2v2zm4-18H9c-1.11 0-2 .9-2 2v10c0 1.1.89 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12H9V5h10v10zm-8 6h2v-2h-2v2zm-4 0h2v-2H7v2z"></path></g>
<g id="folder"><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"></path></g>
<g id="folder-open"><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"></path></g>
<g id="folder-shared"><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-5 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4 8h-8v-1c0-1.33 2.67-2 4-2s4 .67 4 2v1z"></path></g>
<g id="font-download"><path d="M9.93 13.5h4.14L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4.05 16.5l-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13h-2.09z"></path></g>
<g id="forward"><path d="M12 8V4l8 8-8 8v-4H4V8z"></path></g>
<g id="fullscreen"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"></path></g>
<g id="fullscreen-exit"><path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"></path></g>
<g id="g-translate"><path d="M20 5h-9.12L10 2H4c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h7l1 3h8c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zM7.17 14.59c-2.25 0-4.09-1.83-4.09-4.09s1.83-4.09 4.09-4.09c1.04 0 1.99.37 2.74 1.07l.07.06-1.23 1.18-.06-.05c-.29-.27-.78-.59-1.52-.59-1.31 0-2.38 1.09-2.38 2.42s1.07 2.42 2.38 2.42c1.37 0 1.96-.87 2.12-1.46H7.08V9.91h3.95l.01.07c.04.21.05.4.05.61 0 2.35-1.61 4-3.92 4zm6.03-1.71c.33.6.74 1.18 1.19 1.7l-.54.53-.65-2.23zm.77-.76h-.99l-.31-1.04h3.99s-.34 1.31-1.56 2.74c-.52-.62-.89-1.23-1.13-1.7zM21 20c0 .55-.45 1-1 1h-7l2-2-.81-2.77.92-.92L17.79 18l.73-.73-2.71-2.68c.9-1.03 1.6-2.25 1.92-3.51H19v-1.04h-3.64V9h-1.04v1.04h-1.96L11.18 6H20c.55 0 1 .45 1 1v13z"></path></g>
<g id="gavel"><path d="M1 21h12v2H1zM5.245 8.07l2.83-2.827 14.14 14.142-2.828 2.828zM12.317 1l5.657 5.656-2.83 2.83-5.654-5.66zM3.825 9.485l5.657 5.657-2.828 2.828-5.657-5.657z"></path></g>
<g id="gesture"><path d="M4.59 6.89c.7-.71 1.4-1.35 1.71-1.22.5.2 0 1.03-.3 1.52-.25.42-2.86 3.89-2.86 6.31 0 1.28.48 2.34 1.34 2.98.75.56 1.74.73 2.64.46 1.07-.31 1.95-1.4 3.06-2.77 1.21-1.49 2.83-3.44 4.08-3.44 1.63 0 1.65 1.01 1.76 1.79-3.78.64-5.38 3.67-5.38 5.37 0 1.7 1.44 3.09 3.21 3.09 1.63 0 4.29-1.33 4.69-6.1H21v-2.5h-2.47c-.15-1.65-1.09-4.2-4.03-4.2-2.25 0-4.18 1.91-4.94 2.84-.58.73-2.06 2.48-2.29 2.72-.25.3-.68.84-1.11.84-.45 0-.72-.83-.36-1.92.35-1.09 1.4-2.86 1.85-3.52.78-1.14 1.3-1.92 1.3-3.28C8.95 3.69 7.31 3 6.44 3 5.12 3 3.97 4 3.72 4.25c-.36.36-.66.66-.88.93l1.75 1.71zm9.29 11.66c-.31 0-.74-.26-.74-.72 0-.6.73-2.2 2.87-2.76-.3 2.69-1.43 3.48-2.13 3.48z"></path></g>
<g id="get-app"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></g>
<g id="gif"><path d="M11.5 9H13v6h-1.5zM9 9H6c-.6 0-1 .5-1 1v4c0 .5.4 1 1 1h3c.6 0 1-.5 1-1v-2H8.5v1.5h-2v-3H10V10c0-.5-.4-1-1-1zm10 1.5V9h-4.5v6H16v-2h2v-1.5h-2v-1z"></path></g>
<g id="grade"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></g>
<g id="group-work"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 17.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM9.5 8c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8zm6.5 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></g>
<g id="help"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path></g>
<g id="help-outline"><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"></path></g>
<g id="highlight-off"><path d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="history"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></path></g>
<g id="home"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></g>
<g id="hourglass-empty"><path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z"></path></g>
<g id="hourglass-full"><path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6z"></path></g>
<g id="http"><path d="M4.5 11h-2V9H1v6h1.5v-2.5h2V15H6V9H4.5v2zm2.5-.5h1.5V15H10v-4.5h1.5V9H7v1.5zm5.5 0H14V15h1.5v-4.5H17V9h-4.5v1.5zm9-1.5H18v6h1.5v-2h2c.8 0 1.5-.7 1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5zm0 2.5h-2v-1h2v1z"></path></g>
<g id="https"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path></g>
<g id="important-devices"><path d="M23 11.01L18 11c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-9c0-.55-.45-.99-1-.99zM23 20h-5v-7h5v7zM20 2H2C.89 2 0 2.89 0 4v12c0 1.1.89 2 2 2h7v2H7v2h8v-2h-2v-2h2v-2H2V4h18v5h2V4c0-1.11-.9-2-2-2zm-8.03 7L11 6l-.97 3H7l2.47 1.76-.94 2.91 2.47-1.8 2.47 1.8-.94-2.91L15 9h-3.03z"></path></g>
<g id="inbox"><path d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z"></path></g>
<g id="indeterminate-check-box"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"></path></g>
<g id="info"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path></g>
<g id="info-outline"><path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"></path></g>
<g id="input"><path d="M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14c0-1.11-.9-2-2-2zM11 16l4-4-4-4v3H1v2h10v3z"></path></g>
<g id="invert-colors"><path d="M17.66 7.93L12 2.27 6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31C7.9 20.8 9.95 21.58 12 21.58c2.05 0 4.1-.78 5.66-2.34 3.12-3.12 3.12-8.19 0-11.31zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59s.62-3.11 1.76-4.24L12 5.1v14.49z"></path></g>
<g id="label"><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z"></path></g>
<g id="label-outline"><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z"></path></g>
<g id="language"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path></g>
<g id="last-page"><path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"></path></g>
<g id="launch"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></g>
<g id="lightbulb-outline"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"></path></g>
<g id="line-style"><path d="M3 16h5v-2H3v2zm6.5 0h5v-2h-5v2zm6.5 0h5v-2h-5v2zM3 20h2v-2H3v2zm4 0h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM3 12h8v-2H3v2zm10 0h8v-2h-8v2zM3 4v4h18V4H3z"></path></g>
<g id="line-weight"><path d="M3 17h18v-2H3v2zm0 3h18v-1H3v1zm0-7h18v-3H3v3zm0-9v4h18V4H3z"></path></g>
<g id="link"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path></g>
<g id="list"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"></path></g>
<g id="lock"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path></g>
<g id="lock-open"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"></path></g>
<g id="lock-outline"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z"></path></g>
<g id="low-priority"><path d="M14 5h8v2h-8zm0 5.5h8v2h-8zm0 5.5h8v2h-8zM2 11.5C2 15.08 4.92 18 8.5 18H9v2l3-3-3-3v2h-.5C6.02 16 4 13.98 4 11.5S6.02 7 8.5 7H12V5H8.5C4.92 5 2 7.92 2 11.5z"></path></g>
<g id="loyalty"><path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7zm11.77 8.27L13 19.54l-4.27-4.27C8.28 14.81 8 14.19 8 13.5c0-1.38 1.12-2.5 2.5-2.5.69 0 1.32.28 1.77.74l.73.72.73-.73c.45-.45 1.08-.73 1.77-.73 1.38 0 2.5 1.12 2.5 2.5 0 .69-.28 1.32-.73 1.77z"></path></g>
<g id="mail"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></g>
<g id="markunread"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></g>
<g id="markunread-mailbox"><path d="M20 6H10v6H8V4h6V0H6v6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"></path></g>
<g id="menu"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></g>
<g id="more-horiz"><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="more-vert"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="motorcycle"><path d="M19.44 9.03L15.41 5H11v2h3.59l2 2H5c-2.8 0-5 2.2-5 5s2.2 5 5 5c2.46 0 4.45-1.69 4.9-4h1.65l2.77-2.77c-.21.54-.32 1.14-.32 1.77 0 2.8 2.2 5 5 5s5-2.2 5-5c0-2.65-1.97-4.77-4.56-4.97zM7.82 15C7.4 16.15 6.28 17 5 17c-1.63 0-3-1.37-3-3s1.37-3 3-3c1.28 0 2.4.85 2.82 2H5v2h2.82zM19 17c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"></path></g>
<g id="move-to-inbox"><path d="M19 3H4.99c-1.11 0-1.98.9-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10zm-3-5h-2V7h-4v3H8l4 4 4-4z"></path></g>
<g id="next-week"><path d="M20 7h-4V5c0-.55-.22-1.05-.59-1.41C15.05 3.22 14.55 3 14 3h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zm1 13.5l-1-1 3-3-3-3 1-1 4 4-4 4z"></path></g>
<g id="note-add"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z"></path></g>
<g id="offline-pin"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm5 16H7v-2h10v2zm-6.7-4L7 10.7l1.4-1.4 1.9 1.9 5.3-5.3L17 7.3 10.3 14z"></path></g>
<g id="opacity"><path d="M17.66 8L12 2.35 6.34 8C4.78 9.56 4 11.64 4 13.64s.78 4.11 2.34 5.67 3.61 2.35 5.66 2.35 4.1-.79 5.66-2.35S20 15.64 20 13.64 19.22 9.56 17.66 8zM6 14c.01-2 .62-3.27 1.76-4.4L12 5.27l4.24 4.38C17.38 10.77 17.99 12 18 14H6z"></path></g>
<g id="open-in-browser"><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z"></path></g>
<g id="open-in-new"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></g>
<g id="open-with"><path d="M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z"></path></g>
<g id="pageview"><path d="M11.5 9C10.12 9 9 10.12 9 11.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5S12.88 9 11.5 9zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-3.21 14.21l-2.91-2.91c-.69.44-1.51.7-2.39.7C9.01 16 7 13.99 7 11.5S9.01 7 11.5 7 16 9.01 16 11.5c0 .88-.26 1.69-.7 2.39l2.91 2.9-1.42 1.42z"></path></g>
<g id="pan-tool"><path d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"></path></g>
<g id="payment"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path></g>
<g id="perm-camera-mic"><path d="M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v-2.09c-2.83-.48-5-2.94-5-5.91h2c0 2.21 1.79 4 4 4s4-1.79 4-4h2c0 2.97-2.17 5.43-5 5.91V21h7c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-6 8c0 1.1-.9 2-2 2s-2-.9-2-2V9c0-1.1.9-2 2-2s2 .9 2 2v4z"></path></g>
<g id="perm-contact-calendar"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1z"></path></g>
<g id="perm-data-setting"><path d="M18.99 11.5c.34 0 .67.03 1 .07L20 0 0 20h11.56c-.04-.33-.07-.66-.07-1 0-4.14 3.36-7.5 7.5-7.5zm3.71 7.99c.02-.16.04-.32.04-.49 0-.17-.01-.33-.04-.49l1.06-.83c.09-.08.12-.21.06-.32l-1-1.73c-.06-.11-.19-.15-.31-.11l-1.24.5c-.26-.2-.54-.37-.85-.49l-.19-1.32c-.01-.12-.12-.21-.24-.21h-2c-.12 0-.23.09-.25.21l-.19 1.32c-.3.13-.59.29-.85.49l-1.24-.5c-.11-.04-.24 0-.31.11l-1 1.73c-.06.11-.04.24.06.32l1.06.83c-.02.16-.03.32-.03.49 0 .17.01.33.03.49l-1.06.83c-.09.08-.12.21-.06.32l1 1.73c.06.11.19.15.31.11l1.24-.5c.26.2.54.37.85.49l.19 1.32c.02.12.12.21.25.21h2c.12 0 .23-.09.25-.21l.19-1.32c.3-.13.59-.29.84-.49l1.25.5c.11.04.24 0 .31-.11l1-1.73c.06-.11.03-.24-.06-.32l-1.07-.83zm-3.71 1.01c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></g>
<g id="perm-device-information"><path d="M13 7h-2v2h2V7zm0 4h-2v6h2v-6zm4-9.99L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"></path></g>
<g id="perm-identity"><path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"></path></g>
<g id="perm-media"><path d="M2 6H0v5h.01L0 20c0 1.1.9 2 2 2h18v-2H2V6zm20-2h-8l-2-2H6c-1.1 0-1.99.9-1.99 2L4 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7 15l4.5-6 3.5 4.51 2.5-3.01L21 15H7z"></path></g>
<g id="perm-phone-msg"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM12 3v10l3-3h6V3h-9z"></path></g>
<g id="perm-scan-wifi"><path d="M12 3C6.95 3 3.15 4.85 0 7.23L12 22 24 7.25C20.85 4.87 17.05 3 12 3zm1 13h-2v-6h2v6zm-2-8V6h2v2h-2z"></path></g>
<g id="pets"><circle cx="4.5" cy="9.5" r="2.5"></circle><circle cx="9" cy="5.5" r="2.5"></circle><circle cx="15" cy="5.5" r="2.5"></circle><circle cx="19.5" cy="9.5" r="2.5"></circle><path d="M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z"></path></g>
<g id="picture-in-picture"><path d="M19 7h-8v6h8V7zm2-4H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2zm0 16.01H3V4.98h18v14.03z"></path></g>
<g id="picture-in-picture-alt"><path d="M19 11h-8v6h8v-6zm4 8V4.98C23 3.88 22.1 3 21 3H3c-1.1 0-2 .88-2 1.98V19c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zm-2 .02H3V4.97h18v14.05z"></path></g>
<g id="play-for-work"><path d="M11 5v5.59H7.5l4.5 4.5 4.5-4.5H13V5h-2zm-5 9c0 3.31 2.69 6 6 6s6-2.69 6-6h-2c0 2.21-1.79 4-4 4s-4-1.79-4-4H6z"></path></g>
<g id="polymer"><path d="M19 4h-4L7.11 16.63 4.5 12 9 4H5L.5 12 5 20h4l7.89-12.63L19.5 12 15 20h4l4.5-8z"></path></g>
<g id="power-settings-new"><path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"></path></g>
<g id="pregnant-woman"><path d="M9 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm7 9c-.01-1.34-.83-2.51-2-3 0-1.66-1.34-3-3-3s-3 1.34-3 3v7h2v5h3v-5h3v-4z"></path></g>
<g id="print"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"></path></g>
<g id="query-builder"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></g>
<g id="question-answer"><path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"></path></g>
<g id="radio-button-checked"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="radio-button-unchecked"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="receipt"><path d="M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20z"></path></g>
<g id="record-voice-over"><circle cx="9" cy="9" r="4"></circle><path d="M9 15c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm7.76-9.64l-1.68 1.69c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.07 0-7.27zM20.07 2l-1.63 1.63c2.77 3.02 2.77 7.56 0 10.74L20.07 16c3.9-3.89 3.91-9.95 0-14z"></path></g>
<g id="redeem"><path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"></path></g>
<g id="redo"><path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"></path></g>
<g id="refresh"><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"></path></g>
<g id="remove"><path d="M19 13H5v-2h14v2z"></path></g>
<g id="remove-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"></path></g>
<g id="remove-circle-outline"><path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="remove-shopping-cart"><path d="M22.73 22.73L2.77 2.77 2 2l-.73-.73L0 2.54l4.39 4.39 2.21 4.66-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h7.46l1.38 1.38c-.5.36-.83.95-.83 1.62 0 1.1.89 2 1.99 2 .67 0 1.26-.33 1.62-.84L21.46 24l1.27-1.27zM7.42 15c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h2.36l2 2H7.42zm8.13-2c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H6.54l9.01 9zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2z"></path></g>
<g id="reorder"><path d="M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z"></path></g>
<g id="reply"><path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"></path></g>
<g id="reply-all"><path d="M7 8V5l-7 7 7 7v-3l-4-4 4-4zm6 1V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"></path></g>
<g id="report"><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"></path></g>
<g id="report-problem"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></g>
<g id="restore"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></path></g>
<g id="restore-page"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-2 16c-2.05 0-3.81-1.24-4.58-3h1.71c.63.9 1.68 1.5 2.87 1.5 1.93 0 3.5-1.57 3.5-3.5S13.93 9.5 12 9.5c-1.35 0-2.52.78-3.1 1.9l1.6 1.6h-4V9l1.3 1.3C8.69 8.92 10.23 8 12 8c2.76 0 5 2.24 5 5s-2.24 5-5 5z"></path></g>
<g id="room"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></g>
<g id="rounded-corner"><path d="M19 19h2v2h-2v-2zm0-2h2v-2h-2v2zM3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm0-4h2V3H3v2zm4 0h2V3H7v2zm8 16h2v-2h-2v2zm-4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm-8 0h2v-2H7v2zm-4 0h2v-2H3v2zM21 8c0-2.76-2.24-5-5-5h-5v2h5c1.65 0 3 1.35 3 3v5h2V8z"></path></g>
<g id="rowing"><path d="M8.5 14.5L4 19l1.5 1.5L9 17h2l-2.5-2.5zM15 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 20.01L18 24l-2.99-3.01V19.5l-7.1-7.09c-.31.05-.61.07-.91.07v-2.16c1.66.03 3.61-.87 4.67-2.04l1.4-1.55c.19-.21.43-.38.69-.5.29-.14.62-.23.96-.23h.03C15.99 6.01 17 7.02 17 8.26v5.75c0 .84-.35 1.61-.92 2.16l-3.58-3.58v-2.27c-.63.52-1.43 1.02-2.29 1.39L16.5 18H18l3 3.01z"></path></g>
<g id="save"><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"></path></g>
<g id="schedule"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></g>
<g id="search"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></g>
<g id="select-all"><path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2zM7 17h10V7H7v10zm2-8h6v6H9V9z"></path></g>
<g id="send"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path></g>
<g id="settings"><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path></g>
<g id="settings-applications"><path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7-7H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-1.75 9c0 .23-.02.46-.05.68l1.48 1.16c.13.11.17.3.08.45l-1.4 2.42c-.09.15-.27.21-.43.15l-1.74-.7c-.36.28-.76.51-1.18.69l-.26 1.85c-.03.17-.18.3-.35.3h-2.8c-.17 0-.32-.13-.35-.29l-.26-1.85c-.43-.18-.82-.41-1.18-.69l-1.74.7c-.16.06-.34 0-.43-.15l-1.4-2.42c-.09-.15-.05-.34.08-.45l1.48-1.16c-.03-.23-.05-.46-.05-.69 0-.23.02-.46.05-.68l-1.48-1.16c-.13-.11-.17-.3-.08-.45l1.4-2.42c.09-.15.27-.21.43-.15l1.74.7c.36-.28.76-.51 1.18-.69l.26-1.85c.03-.17.18-.3.35-.3h2.8c.17 0 .32.13.35.29l.26 1.85c.43.18.82.41 1.18.69l1.74-.7c.16-.06.34 0 .43.15l1.4 2.42c.09.15.05.34-.08.45l-1.48 1.16c.03.23.05.46.05.69z"></path></g>
<g id="settings-backup-restore"><path d="M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-2-9c-4.97 0-9 4.03-9 9H0l4 4 4-4H5c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.51 0-2.91-.49-4.06-1.3l-1.42 1.44C8.04 20.3 9.94 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"></path></g>
<g id="settings-bluetooth"><path d="M11 24h2v-2h-2v2zm-4 0h2v-2H7v2zm8 0h2v-2h-2v2zm2.71-18.29L12 0h-1v7.59L6.41 3 5 4.41 10.59 10 5 15.59 6.41 17 11 12.41V20h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 3.83l1.88 1.88L13 7.59V3.83zm1.88 10.46L13 16.17v-3.76l1.88 1.88z"></path></g>
<g id="settings-brightness"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02zM8 16h2.5l1.5 1.5 1.5-1.5H16v-2.5l1.5-1.5-1.5-1.5V8h-2.5L12 6.5 10.5 8H8v2.5L6.5 12 8 13.5V16zm4-7c1.66 0 3 1.34 3 3s-1.34 3-3 3V9z"></path></g>
<g id="settings-cell"><path d="M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM16 .01L8 0C6.9 0 6 .9 6 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V2c0-1.1-.9-1.99-2-1.99zM16 16H8V4h8v12z"></path></g>
<g id="settings-ethernet"><path d="M7.77 6.76L6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12l4.35-5.24zM7 13h2v-2H7v2zm10-2h-2v2h2v-2zm-6 2h2v-2h-2v2zm6.77-7.52l-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12l-5.41-6.52z"></path></g>
<g id="settings-input-antenna"><path d="M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7zm1 9.29c.88-.39 1.5-1.26 1.5-2.29 0-1.38-1.12-2.5-2.5-2.5S9.5 10.62 9.5 12c0 1.02.62 1.9 1.5 2.29v3.3L7.59 21 9 22.41l3-3 3 3L16.41 21 13 17.59v-3.3zM12 1C5.93 1 1 5.93 1 12h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11z"></path></g>
<g id="settings-input-component"><path d="M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z"></path></g>
<g id="settings-input-composite"><path d="M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z"></path></g>
<g id="settings-input-hdmi"><path d="M18 7V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3H5v6l3 6v3h8v-3l3-6V7h-1zM8 4h8v3h-2V5h-1v2h-2V5h-1v2H8V4z"></path></g>
<g id="settings-input-svideo"><path d="M8 11.5c0-.83-.67-1.5-1.5-1.5S5 10.67 5 11.5 5.67 13 6.5 13 8 12.33 8 11.5zm7-5c0-.83-.67-1.5-1.5-1.5h-3C9.67 5 9 5.67 9 6.5S9.67 8 10.5 8h3c.83 0 1.5-.67 1.5-1.5zM8.5 15c-.83 0-1.5.67-1.5 1.5S7.67 18 8.5 18s1.5-.67 1.5-1.5S9.33 15 8.5 15zM12 1C5.93 1 1 5.93 1 12s4.93 11 11 11 11-4.93 11-11S18.07 1 12 1zm0 20c-4.96 0-9-4.04-9-9s4.04-9 9-9 9 4.04 9 9-4.04 9-9 9zm5.5-11c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-2 5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path></g>
<g id="settings-overscan"><path d="M12.01 5.5L10 8h4l-1.99-2.5zM18 10v4l2.5-1.99L18 10zM6 10l-2.5 2.01L6 14v-4zm8 6h-4l2.01 2.5L14 16zm7-13H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"></path></g>
<g id="settings-phone"><path d="M13 9h-2v2h2V9zm4 0h-2v2h2V9zm3 6.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 9v2h2V9h-2z"></path></g>
<g id="settings-power"><path d="M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm2-22h-2v10h2V2zm3.56 2.44l-1.45 1.45C16.84 6.94 18 8.83 18 11c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-2.17 1.16-4.06 2.88-5.12L7.44 4.44C5.36 5.88 4 8.28 4 11c0 4.42 3.58 8 8 8s8-3.58 8-8c0-2.72-1.36-5.12-3.44-6.56zM15 24h2v-2h-2v2z"></path></g>
<g id="settings-remote"><path d="M15 9H9c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V10c0-.55-.45-1-1-1zm-3 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM7.05 6.05l1.41 1.41C9.37 6.56 10.62 6 12 6s2.63.56 3.54 1.46l1.41-1.41C15.68 4.78 13.93 4 12 4s-3.68.78-4.95 2.05zM12 0C8.96 0 6.21 1.23 4.22 3.22l1.41 1.41C7.26 3.01 9.51 2 12 2s4.74 1.01 6.36 2.64l1.41-1.41C17.79 1.23 15.04 0 12 0z"></path></g>
<g id="settings-voice"><path d="M7 24h2v-2H7v2zm5-11c1.66 0 2.99-1.34 2.99-3L15 4c0-1.66-1.34-3-3-3S9 2.34 9 4v6c0 1.66 1.34 3 3 3zm-1 11h2v-2h-2v2zm4 0h2v-2h-2v2zm4-14h-1.7c0 3-2.54 5.1-5.3 5.1S6.7 13 6.7 10H5c0 3.41 2.72 6.23 6 6.72V20h2v-3.28c3.28-.49 6-3.31 6-6.72z"></path></g>
<g id="shop"><path d="M16 6V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H2v13c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6h-6zm-6-2h4v2h-4V4zM9 18V9l7.5 4L9 18z"></path></g>
<g id="shop-two"><path d="M3 9H1v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2H3V9zm15-4V3c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H5v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5h-5zm-6-2h4v2h-4V3zm0 12V8l5.5 3-5.5 4z"></path></g>
<g id="shopping-basket"><path d="M17.21 9l-4.38-6.56c-.19-.28-.51-.42-.83-.42-.32 0-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1h-4.79zM9 9l3-4.4L15 9H9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></g>
<g id="shopping-cart"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="sort"><path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"></path></g>
<g id="speaker-notes"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 14H6v-2h2v2zm0-3H6V9h2v2zm0-3H6V6h2v2zm7 6h-5v-2h5v2zm3-3h-8V9h8v2zm0-3h-8V6h8v2z"></path></g>
<g id="speaker-notes-off"><path d="M10.54 11l-.54-.54L7.54 8 6 6.46 2.38 2.84 1.27 1.73 0 3l2.01 2.01L2 22l4-4h9l5.73 5.73L22 22.46 17.54 18l-7-7zM8 14H6v-2h2v2zm-2-3V9l2 2H6zm14-9H4.08L10 7.92V6h8v2h-7.92l1 1H18v2h-4.92l6.99 6.99C21.14 17.95 22 17.08 22 16V4c0-1.1-.9-2-2-2z"></path></g>
<g id="spellcheck"><path d="M12.45 16h2.09L9.43 3H7.57L2.46 16h2.09l1.12-3h5.64l1.14 3zm-6.02-5L8.5 5.48 10.57 11H6.43zm15.16.59l-8.09 8.09L9.83 16l-1.41 1.41 5.09 5.09L23 13l-1.41-1.41z"></path></g>
<g id="star"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></g>
<g id="star-border"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path></g>
<g id="star-half"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path></g>
<g id="stars"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"></path></g>
<g id="store"><path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"></path></g>
<g id="subdirectory-arrow-left"><path d="M11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z"></path></g>
<g id="subdirectory-arrow-right"><path d="M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z"></path></g>
<g id="subject"><path d="M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z"></path></g>
<g id="supervisor-account"><path d="M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7C15.12 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5C7.34 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z"></path></g>
<g id="swap-horiz"><path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"></path></g>
<g id="swap-vert"><path d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z"></path></g>
<g id="swap-vertical-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM6.5 9L10 5.5 13.5 9H11v4H9V9H6.5zm11 6L14 18.5 10.5 15H13v-4h2v4h2.5z"></path></g>
<g id="system-update-alt"><path d="M12 16.5l4-4h-3v-9h-2v9H8l4 4zm9-13h-6v1.99h6v14.03H3V5.49h6V3.5H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2z"></path></g>
<g id="tab"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h10v4h8v10z"></path></g>
<g id="tab-unselected"><path d="M1 9h2V7H1v2zm0 4h2v-2H1v2zm0-8h2V3c-1.1 0-2 .9-2 2zm8 16h2v-2H9v2zm-8-4h2v-2H1v2zm2 4v-2H1c0 1.1.9 2 2 2zM21 3h-8v6h10V5c0-1.1-.9-2-2-2zm0 14h2v-2h-2v2zM9 5h2V3H9v2zM5 21h2v-2H5v2zM5 5h2V3H5v2zm16 16c1.1 0 2-.9 2-2h-2v2zm0-8h2v-2h-2v2zm-8 8h2v-2h-2v2zm4 0h2v-2h-2v2z"></path></g>
<g id="text-format"><path d="M5 17v2h14v-2H5zm4.5-4.2h5l.9 2.2h2.1L12.75 4h-1.5L6.5 15h2.1l.9-2.2zM12 5.98L13.87 11h-3.74L12 5.98z"></path></g>
<g id="theaters"><path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"></path></g>
<g id="thumb-down"><path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"></path></g>
<g id="thumb-up"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"></path></g>
<g id="thumbs-up-down"><path d="M12 6c0-.55-.45-1-1-1H5.82l.66-3.18.02-.23c0-.31-.13-.59-.33-.8L5.38 0 .44 4.94C.17 5.21 0 5.59 0 6v6.5c0 .83.67 1.5 1.5 1.5h6.75c.62 0 1.15-.38 1.38-.91l2.26-5.29c.07-.17.11-.36.11-.55V6zm10.5 4h-6.75c-.62 0-1.15.38-1.38.91l-2.26 5.29c-.07.17-.11.36-.11.55V18c0 .55.45 1 1 1h5.18l-.66 3.18-.02.24c0 .31.13.59.33.8l.79.78 4.94-4.94c.27-.27.44-.65.44-1.06v-6.5c0-.83-.67-1.5-1.5-1.5z"></path></g>
<g id="timeline"><path d="M23 8c0 1.1-.9 2-2 2-.18 0-.35-.02-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56C19.02 8.35 19 8.18 19 8c0-1.1.9-2 2-2s2 .9 2 2z"></path></g>
<g id="toc"><path d="M3 9h14V7H3v2zm0 4h14v-2H3v2zm0 4h14v-2H3v2zm16 0h2v-2h-2v2zm0-10v2h2V7h-2zm0 6h2v-2h-2v2z"></path></g>
<g id="today"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"></path></g>
<g id="toll"><path d="M15 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zM3 12c0-2.61 1.67-4.83 4-5.65V4.26C3.55 5.15 1 8.27 1 12s2.55 6.85 6 7.74v-2.09c-2.33-.82-4-3.04-4-5.65z"></path></g>
<g id="touch-app"><path d="M9 11.24V7.5C9 6.12 10.12 5 11.5 5S14 6.12 14 7.5v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63l-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6c0-.83-.67-1.5-1.5-1.5S10 6.67 10 7.5v10.74l-3.43-.72c-.08-.01-.15-.03-.24-.03-.31 0-.59.13-.79.33l-.79.8 4.94 4.94c.27.27.65.44 1.06.44h6.79c.75 0 1.33-.55 1.44-1.28l.75-5.27c.01-.07.02-.14.02-.2 0-.62-.38-1.16-.91-1.38z"></path></g>
<g id="track-changes"><path d="M19.07 4.93l-1.41 1.41C19.1 7.79 20 9.79 20 12c0 4.42-3.58 8-8 8s-8-3.58-8-8c0-4.08 3.05-7.44 7-7.93v2.02C8.16 6.57 6 9.03 6 12c0 3.31 2.69 6 6 6s6-2.69 6-6c0-1.66-.67-3.16-1.76-4.24l-1.41 1.41C15.55 9.9 16 10.9 16 12c0 2.21-1.79 4-4 4s-4-1.79-4-4c0-1.86 1.28-3.41 3-3.86v2.14c-.6.35-1 .98-1 1.72 0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.38-1-1.72V2h-1C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-2.76-1.12-5.26-2.93-7.07z"></path></g>
<g id="translate"><path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"></path></g>
<g id="trending-down"><path d="M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z"></path></g>
<g id="trending-flat"><path d="M22 12l-4-4v3H3v2h15v3z"></path></g>
<g id="trending-up"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"></path></g>
<g id="turned-in"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"></path></g>
<g id="turned-in-not"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></path></g>
<g id="unarchive"><path d="M20.55 5.22l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.15.55L3.46 5.22C3.17 5.57 3 6.01 3 6.5V19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.49-.17-.93-.45-1.28zM12 9.5l5.5 5.5H14v2h-4v-2H6.5L12 9.5zM5.12 5l.82-1h12l.93 1H5.12z"></path></g>
<g id="undo"><path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"></path></g>
<g id="unfold-less"><path d="M7.41 18.59L8.83 20 12 16.83 15.17 20l1.41-1.41L12 14l-4.59 4.59zm9.18-13.18L15.17 4 12 7.17 8.83 4 7.41 5.41 12 10l4.59-4.59z"></path></g>
<g id="unfold-more"><path d="M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z"></path></g>
<g id="update"><path d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79 2.73 2.71 7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58 3.51-3.47 9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z"></path></g>
<g id="verified-user"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path></g>
<g id="view-agenda"><path d="M20 13H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zm0-10H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z"></path></g>
<g id="view-array"><path d="M4 18h3V5H4v13zM18 5v13h3V5h-3zM8 18h9V5H8v13z"></path></g>
<g id="view-carousel"><path d="M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z"></path></g>
<g id="view-column"><path d="M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z"></path></g>
<g id="view-day"><path d="M2 21h19v-3H2v3zM20 8H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zM2 3v3h19V3H2z"></path></g>
<g id="view-headline"><path d="M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z"></path></g>
<g id="view-list"><path d="M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z"></path></g>
<g id="view-module"><path d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z"></path></g>
<g id="view-quilt"><path d="M10 18h5v-6h-5v6zm-6 0h5V5H4v13zm12 0h5v-6h-5v6zM10 5v6h11V5H10z"></path></g>
<g id="view-stream"><path d="M4 18h17v-6H4v6zM4 5v6h17V5H4z"></path></g>
<g id="view-week"><path d="M6 5H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm14 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-7 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z"></path></g>
<g id="visibility"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></g>
<g id="visibility-off"><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"></path></g>
<g id="warning"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></g>
<g id="watch-later"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"></path></g>
<g id="weekend"><path d="M21 10c-1.1 0-2 .9-2 2v3H5v-3c0-1.1-.9-2-2-2s-2 .9-2 2v5c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2zm-3-5H6c-1.1 0-2 .9-2 2v2.15c1.16.41 2 1.51 2 2.82V14h12v-2.03c0-1.3.84-2.4 2-2.82V7c0-1.1-.9-2-2-2z"></path></g>
<g id="work"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path></g>
<g id="youtube-searched-for"><path d="M17.01 14h-.8l-.27-.27c.98-1.14 1.57-2.61 1.57-4.23 0-3.59-2.91-6.5-6.5-6.5s-6.5 3-6.5 6.5H2l3.84 4 4.16-4H6.51C6.51 7 8.53 5 11.01 5s4.5 2.01 4.5 4.5c0 2.48-2.02 4.5-4.5 4.5-.65 0-1.26-.14-1.82-.38L7.71 15.1c.97.57 2.09.9 3.3.9 1.61 0 3.08-.59 4.22-1.57l.27.27v.79l5.01 4.99L22 19l-4.99-5z"></path></g>
<g id="zoom-in"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm2.5-4h-2v2H9v-2H7V9h2V7h1v2h2v1z"></path></g>
<g id="zoom-out"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"></path></g>
</defs></svg>
</iron-iconset-svg>`;document.head.appendChild(Hn.content);window.customElements.define("l2t-fab-footer",class extends Z{render(t){return k`
      <style>
        :host(:not([hidden])) {
          display: block;
          width: 100%;
        }

        :host([mini]) {
          --icon-size: 40;
        }

        :host {
          --cut-out-calc: calc(var(--icon-size, 54) / 54);
          padding-top: calc(28px * var(--cut-out-calc));
        }

        app-toolbar {
          display: flex;
          position: relative;
          height: var(--fab-footer-height, 42px);
          padding: 0;
          width: 100%;
        }

        app-toolbar::before {
          --cut-out-calc: calc(var(--icon-size, 54) / 54);
          position: absolute;
          display: block;
          content: '';
          z-index: 1;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--fab-footer-background, var(--primary-color));
          clip-path: polygon(0 0, calc(50% - 38px * var(--cut-out-calc)) 0, calc(50% - 37.49px * var(--cut-out-calc)) calc(.63px * var(--cut-out-calc)), calc(50% - 36.98px * var(--cut-out-calc)) calc(1.26px * var(--cut-out-calc)), calc(50% - 36.46px * var(--cut-out-calc)) calc(1.88px * var(--cut-out-calc)), calc(50% - 35.91px * var(--cut-out-calc)) calc(2.51px * var(--cut-out-calc)), calc(50% - 35.86px * var(--cut-out-calc)) calc(3.14px * var(--cut-out-calc)), calc(50% - 35.8px * var(--cut-out-calc)) calc(3.76px * var(--cut-out-calc)), calc(50% - 35.73px * var(--cut-out-calc)) calc(4.39px * var(--cut-out-calc)), calc(50% - 35.56px * var(--cut-out-calc)) calc(5.63px * var(--cut-out-calc)), calc(50% - 35.45px * var(--cut-out-calc)) calc(6.25px * var(--cut-out-calc)), calc(50% - 35.34px * var(--cut-out-calc)) calc(6.87px * var(--cut-out-calc)), calc(50% - 35.21px * var(--cut-out-calc)) calc(7.48px * var(--cut-out-calc)), calc(50% - 35.08px * var(--cut-out-calc)) calc(8.1px * var(--cut-out-calc)), calc(50% - 34.93px * var(--cut-out-calc)) calc(8.71px * var(--cut-out-calc)), calc(50% - 34.77px * var(--cut-out-calc)) calc(9.32px * var(--cut-out-calc)), calc(50% - 34.61px * var(--cut-out-calc)) calc(9.92px * var(--cut-out-calc)), calc(50% - 34.43px * var(--cut-out-calc)) calc(10.53px * var(--cut-out-calc)), calc(50% - 34.24px * var(--cut-out-calc)) calc(11.12px * var(--cut-out-calc)), calc(50% - 34.04px * var(--cut-out-calc)) calc(11.72px * var(--cut-out-calc)), calc(50% - 33.83px * var(--cut-out-calc)) calc(12.31px * var(--cut-out-calc)), calc(50% - 33.61px * var(--cut-out-calc)) calc(12.9px * var(--cut-out-calc)), calc(50% - 33.38px * var(--cut-out-calc)) calc(13.49px * var(--cut-out-calc)), calc(50% - 33.14px * var(--cut-out-calc)) calc(14.07px * var(--cut-out-calc)), calc(50% - 32.89px * var(--cut-out-calc)) calc(14.64px * var(--cut-out-calc)), calc(50% - 32.63px * var(--cut-out-calc)) calc(15.21px * var(--cut-out-calc)), calc(50% - 32.36px * var(--cut-out-calc)) calc(15.78px * var(--cut-out-calc)), calc(50% - 32.08px * var(--cut-out-calc)) calc(16.34px * var(--cut-out-calc)), calc(50% - 31.79px * var(--cut-out-calc)) calc(16.9px * var(--cut-out-calc)), calc(50% - 31.49px * var(--cut-out-calc)) calc(17.45px * var(--cut-out-calc)), calc(50% - 31.18px * var(--cut-out-calc)) calc(18px * var(--cut-out-calc)), calc(50% - 30.86px * var(--cut-out-calc)) calc(18.54px * var(--cut-out-calc)), calc(50% - 30.53px * var(--cut-out-calc)) calc(19.08px * var(--cut-out-calc)), calc(50% - 30.19px * var(--cut-out-calc)) calc(19.61px * var(--cut-out-calc)), calc(50% - 29.85px * var(--cut-out-calc)) calc(20.13px * var(--cut-out-calc)), calc(50% - 29.49px * var(--cut-out-calc)) calc(20.65px * var(--cut-out-calc)), calc(50% - 29.12px * var(--cut-out-calc)) calc(21.16px * var(--cut-out-calc)), calc(50% - 28.75px * var(--cut-out-calc)) calc(21.67px * var(--cut-out-calc)), calc(50% - 28.37px * var(--cut-out-calc)) calc(22.16px * var(--cut-out-calc)), calc(50% - 27.98px * var(--cut-out-calc)) calc(22.66px * var(--cut-out-calc)), calc(50% - 27.58px * var(--cut-out-calc)) calc(23.14px * var(--cut-out-calc)), calc(50% - 27.17px * var(--cut-out-calc)) calc(23.62px * var(--cut-out-calc)), calc(50% - 26.75px * var(--cut-out-calc)) calc(24.09px * var(--cut-out-calc)), calc(50% - 26.33px * var(--cut-out-calc)) calc(24.55px * var(--cut-out-calc)), calc(50% - 25.9px * var(--cut-out-calc)) calc(25.01px * var(--cut-out-calc)), calc(50% - 25.46px * var(--cut-out-calc)) calc(25.46px * var(--cut-out-calc)), calc(50% - 25.01px * var(--cut-out-calc)) calc(25.9px * var(--cut-out-calc)), calc(50% - 24.55px * var(--cut-out-calc)) calc(26.33px * var(--cut-out-calc)), calc(50% - 24.09px * var(--cut-out-calc)) calc(26.75px * var(--cut-out-calc)), calc(50% - 23.62px * var(--cut-out-calc)) calc(27.17px * var(--cut-out-calc)), calc(50% - 23.14px * var(--cut-out-calc)) calc(27.58px * var(--cut-out-calc)), calc(50% - 22.66px * var(--cut-out-calc)) calc(27.98px * var(--cut-out-calc)), calc(50% - 22.16px * var(--cut-out-calc)) calc(28.37px * var(--cut-out-calc)), calc(50% - 21.67px * var(--cut-out-calc)) calc(28.75px * var(--cut-out-calc)), calc(50% - 21.16px * var(--cut-out-calc)) calc(29.12px * var(--cut-out-calc)), calc(50% - 20.65px * var(--cut-out-calc)) calc(29.49px * var(--cut-out-calc)), calc(50% - 20.13px * var(--cut-out-calc)) calc(29.85px * var(--cut-out-calc)), calc(50% - 19.61px * var(--cut-out-calc)) calc(30.19px * var(--cut-out-calc)), calc(50% - 19.08px * var(--cut-out-calc)) calc(30.53px * var(--cut-out-calc)), calc(50% - 18.54px * var(--cut-out-calc)) calc(30.86px * var(--cut-out-calc)), calc(50% - 18px * var(--cut-out-calc)) calc(31.18px * var(--cut-out-calc)), calc(50% - 17.45px * var(--cut-out-calc)) calc(31.49px * var(--cut-out-calc)), calc(50% - 16.9px * var(--cut-out-calc)) calc(31.79px * var(--cut-out-calc)), calc(50% - 16.34px * var(--cut-out-calc)) calc(32.08px * var(--cut-out-calc)), calc(50% - 15.78px * var(--cut-out-calc)) calc(32.36px * var(--cut-out-calc)), calc(50% - 15.21px * var(--cut-out-calc)) calc(32.63px * var(--cut-out-calc)), calc(50% - 14.64px * var(--cut-out-calc)) calc(32.89px * var(--cut-out-calc)), calc(50% - 14.07px * var(--cut-out-calc)) calc(33.14px * var(--cut-out-calc)), calc(50% - 13.49px * var(--cut-out-calc)) calc(33.38px * var(--cut-out-calc)), calc(50% - 12.9px * var(--cut-out-calc)) calc(33.61px * var(--cut-out-calc)), calc(50% - 12.31px * var(--cut-out-calc)) calc(33.83px * var(--cut-out-calc)), calc(50% - 11.72px * var(--cut-out-calc)) calc(34.04px * var(--cut-out-calc)), calc(50% - 11.12px * var(--cut-out-calc)) calc(34.24px * var(--cut-out-calc)), calc(50% - 10.53px * var(--cut-out-calc)) calc(34.43px * var(--cut-out-calc)), calc(50% - 9.92px * var(--cut-out-calc)) calc(34.61px * var(--cut-out-calc)), calc(50% - 9.32px * var(--cut-out-calc)) calc(34.77px * var(--cut-out-calc)), calc(50% - 8.71px * var(--cut-out-calc)) calc(34.93px * var(--cut-out-calc)), calc(50% - 8.1px * var(--cut-out-calc)) calc(35.08px * var(--cut-out-calc)), calc(50% - 7.48px * var(--cut-out-calc)) calc(35.21px * var(--cut-out-calc)), calc(50% - 6.87px * var(--cut-out-calc)) calc(35.34px * var(--cut-out-calc)), calc(50% - 6.25px * var(--cut-out-calc)) calc(35.45px * var(--cut-out-calc)), calc(50% - 5.63px * var(--cut-out-calc)) calc(35.56px * var(--cut-out-calc)), calc(50% - 5.01px * var(--cut-out-calc)) calc(35.65px * var(--cut-out-calc)), calc(50% - 4.39px * var(--cut-out-calc)) calc(35.73px * var(--cut-out-calc)), calc(50% - 3.76px * var(--cut-out-calc)) calc(35.8px * var(--cut-out-calc)), calc(50% - 3.14px * var(--cut-out-calc)) calc(35.86px * var(--cut-out-calc)), calc(50% - 2.51px * var(--cut-out-calc)) calc(35.91px * var(--cut-out-calc)), calc(50% - 1.88px * var(--cut-out-calc)) calc(35.95px * var(--cut-out-calc)), calc(50% - 1.26px * var(--cut-out-calc)) calc(35.98px * var(--cut-out-calc)), calc(50% - 00.63px * var(--cut-out-calc)) calc(35.99px * var(--cut-out-calc)), 50% calc(36px * var(--cut-out-calc)), calc(50% + 00.63px * var(--cut-out-calc)) calc(35.99px * var(--cut-out-calc)), calc(50% + 1.26px * var(--cut-out-calc)) calc(35.98px * var(--cut-out-calc)), calc(50% + 1.88px * var(--cut-out-calc)) calc(35.95px * var(--cut-out-calc)), calc(50% + 2.51px * var(--cut-out-calc)) calc(35.91px * var(--cut-out-calc)), calc(50% + 3.14px * var(--cut-out-calc)) calc(35.86px * var(--cut-out-calc)), calc(50% + 3.76px * var(--cut-out-calc)) calc(35.8px * var(--cut-out-calc)), calc(50% + 4.39px * var(--cut-out-calc)) calc(35.73px * var(--cut-out-calc)), calc(50% + 5.01px * var(--cut-out-calc)) calc(35.65px * var(--cut-out-calc)), calc(50% + 5.63px * var(--cut-out-calc)) calc(35.56px * var(--cut-out-calc)), calc(50% + 6.25px * var(--cut-out-calc)) calc(35.45px * var(--cut-out-calc)), calc(50% + 6.87px * var(--cut-out-calc)) calc(35.34px * var(--cut-out-calc)), calc(50% + 7.48px * var(--cut-out-calc)) calc(35.21px * var(--cut-out-calc)), calc(50% + 8.1px * var(--cut-out-calc)) calc(35.08px * var(--cut-out-calc)), calc(50% + 8.71px * var(--cut-out-calc)) calc(34.93px * var(--cut-out-calc)), calc(50% + 9.32px * var(--cut-out-calc)) calc(34.77px * var(--cut-out-calc)), calc(50% + 9.92px * var(--cut-out-calc)) calc(34.61px * var(--cut-out-calc)), calc(50% + 10.53px * var(--cut-out-calc)) calc(34.43px * var(--cut-out-calc)), calc(50% + 11.12px * var(--cut-out-calc)) calc(34.24px * var(--cut-out-calc)), calc(50% + 11.72px * var(--cut-out-calc)) calc(34.04px * var(--cut-out-calc)), calc(50% + 12.31px * var(--cut-out-calc)) calc(33.83px * var(--cut-out-calc)), calc(50% + 12.9px * var(--cut-out-calc)) calc(33.61px * var(--cut-out-calc)), calc(50% + 13.49px * var(--cut-out-calc)) calc(33.38px * var(--cut-out-calc)), calc(50% + 14.07px * var(--cut-out-calc)) calc(33.14px * var(--cut-out-calc)), calc(50% + 14.64px * var(--cut-out-calc)) calc(32.89px * var(--cut-out-calc)), calc(50% + 15.21px * var(--cut-out-calc)) calc(32.63px * var(--cut-out-calc)), calc(50% + 15.78px * var(--cut-out-calc)) calc(32.36px * var(--cut-out-calc)), calc(50% + 16.34px * var(--cut-out-calc)) calc(32.08px * var(--cut-out-calc)), calc(50% + 16.9px * var(--cut-out-calc)) calc(31.79px * var(--cut-out-calc)), calc(50% + 17.45px * var(--cut-out-calc)) calc(31.49px * var(--cut-out-calc)), calc(50% + 18px * var(--cut-out-calc)) calc(31.18px * var(--cut-out-calc)), calc(50% + 18.54px * var(--cut-out-calc)) calc(30.86px * var(--cut-out-calc)), calc(50% + 19.08px * var(--cut-out-calc)) calc(30.53px * var(--cut-out-calc)), calc(50% + 19.61px * var(--cut-out-calc)) calc(30.19px * var(--cut-out-calc)), calc(50% + 20.13px * var(--cut-out-calc)) calc(29.85px * var(--cut-out-calc)), calc(50% + 20.65px * var(--cut-out-calc)) calc(29.49px * var(--cut-out-calc)), calc(50% + 21.16px * var(--cut-out-calc)) calc(29.12px * var(--cut-out-calc)), calc(50% + 21.67px * var(--cut-out-calc)) calc(28.75px * var(--cut-out-calc)), calc(50% + 22.16px * var(--cut-out-calc)) calc(28.37px * var(--cut-out-calc)), calc(50% + 22.66px * var(--cut-out-calc)) calc(27.98px * var(--cut-out-calc)), calc(50% + 23.14px * var(--cut-out-calc)) calc(27.58px * var(--cut-out-calc)), calc(50% + 23.62px * var(--cut-out-calc)) calc(27.17px * var(--cut-out-calc)), calc(50% + 24.09px * var(--cut-out-calc)) calc(26.75px * var(--cut-out-calc)), calc(50% + 24.55px * var(--cut-out-calc)) calc(26.33px * var(--cut-out-calc)), calc(50% + 25.01px * var(--cut-out-calc)) calc(25.9px * var(--cut-out-calc)), calc(50% + 25.46px * var(--cut-out-calc)) calc(25.46px * var(--cut-out-calc)), calc(50% + 25.9px * var(--cut-out-calc)) calc(25.01px * var(--cut-out-calc)), calc(50% + 26.33px * var(--cut-out-calc)) calc(24.55px * var(--cut-out-calc)), calc(50% + 26.75px * var(--cut-out-calc)) calc(24.09px * var(--cut-out-calc)), calc(50% + 27.17px * var(--cut-out-calc)) calc(23.62px * var(--cut-out-calc)), calc(50% + 27.58px * var(--cut-out-calc)) calc(23.14px * var(--cut-out-calc)), calc(50% + 27.98px * var(--cut-out-calc)) calc(22.66px * var(--cut-out-calc)), calc(50% + 28.37px * var(--cut-out-calc)) calc(22.16px * var(--cut-out-calc)), calc(50% + 28.75px * var(--cut-out-calc)) calc(21.67px * var(--cut-out-calc)), calc(50% + 29.12px * var(--cut-out-calc)) calc(21.16px * var(--cut-out-calc)), calc(50% + 29.49px * var(--cut-out-calc)) calc(20.65px * var(--cut-out-calc)), calc(50% + 29.85px * var(--cut-out-calc)) calc(20.13px * var(--cut-out-calc)), calc(50% + 30.19px * var(--cut-out-calc)) calc(19.61px * var(--cut-out-calc)), calc(50% + 30.53px * var(--cut-out-calc)) calc(19.08px * var(--cut-out-calc)), calc(50% + 30.86px * var(--cut-out-calc)) calc(18.54px * var(--cut-out-calc)), calc(50% + 31.18px * var(--cut-out-calc)) calc(18px * var(--cut-out-calc)), calc(50% + 31.49px * var(--cut-out-calc)) calc(17.45px * var(--cut-out-calc)), calc(50% + 31.79px * var(--cut-out-calc)) calc(16.9px * var(--cut-out-calc)), calc(50% + 32.08px * var(--cut-out-calc)) calc(16.34px * var(--cut-out-calc)), calc(50% + 32.36px * var(--cut-out-calc)) calc(15.78px * var(--cut-out-calc)), calc(50% + 32.63px * var(--cut-out-calc)) calc(15.21px * var(--cut-out-calc)), calc(50% + 32.89px * var(--cut-out-calc)) calc(14.64px * var(--cut-out-calc)), calc(50% + 33.14px * var(--cut-out-calc)) calc(14.07px * var(--cut-out-calc)), calc(50% + 33.38px * var(--cut-out-calc)) calc(13.49px * var(--cut-out-calc)), calc(50% + 33.61px * var(--cut-out-calc)) calc(12.9px * var(--cut-out-calc)), calc(50% + 33.83px * var(--cut-out-calc)) calc(12.31px * var(--cut-out-calc)), calc(50% + 34.04px * var(--cut-out-calc)) calc(11.72px * var(--cut-out-calc)), calc(50% + 34.24px * var(--cut-out-calc)) calc(11.12px * var(--cut-out-calc)), calc(50% + 34.43px * var(--cut-out-calc)) calc(10.53px * var(--cut-out-calc)), calc(50% + 34.61px * var(--cut-out-calc)) calc(9.92px * var(--cut-out-calc)), calc(50% + 34.77px * var(--cut-out-calc)) calc(9.32px * var(--cut-out-calc)), calc(50% + 34.93px * var(--cut-out-calc)) calc(8.71px * var(--cut-out-calc)), calc(50% + 35.08px * var(--cut-out-calc)) calc(8.1px * var(--cut-out-calc)), calc(50% + 35.21px * var(--cut-out-calc)) calc(7.48px * var(--cut-out-calc)), calc(50% + 35.34px * var(--cut-out-calc)) calc(6.87px * var(--cut-out-calc)), calc(50% + 35.45px * var(--cut-out-calc)) calc(6.25px * var(--cut-out-calc)), calc(50% + 35.56px * var(--cut-out-calc)) calc(5.63px * var(--cut-out-calc)), calc(50% + 35.65px * var(--cut-out-calc)) calc(5.01px * var(--cut-out-calc)), calc(50% + 35.73px * var(--cut-out-calc)) calc(4.39px * var(--cut-out-calc)), calc(50% + 35.8px * var(--cut-out-calc)) calc(3.76px * var(--cut-out-calc)), calc(50% + 35.86px * var(--cut-out-calc)) calc(3.14px * var(--cut-out-calc)), calc(50% + 35.91px * var(--cut-out-calc)) calc(2.51px * var(--cut-out-calc)), calc(50% + 36.46px * var(--cut-out-calc)) calc(1.88px * var(--cut-out-calc)), calc(50% + 36.98px * var(--cut-out-calc)) calc(1.26px * var(--cut-out-calc)), calc(50% + 37.49px * var(--cut-out-calc)) calc(.63px * var(--cut-out-calc)), calc(50% + 38px * var(--cut-out-calc)) 0, 100% 0, 100% 100%, 0 100%)
        }

        ::slotted(*) {
          z-index: 2;
          color: var(--fab-footer-color, var(--dark-theme-text-color));
        }

        paper-fab {
          position: absolute;
          transform: translate(-50%, -50%);
          left: 50%;
          top: 0;
          z-index: 9999;
        }
      </style>

      <app-toolbar>
        <slot></slot>
        <paper-fab 
          @tap=${t=>this._bubbleClick()}
          .src="${this.src}"
          .icon="${this.icon}"
          ?mini="${this.mini}"
          ?noink="${this.noink}"
          ?disabled="${this.disabled}"
          .label="${this.label}">
        </paper-fab>
      </app-toolbar>
    `}static get properties(){return{src:{type:String,value:""},icon:{type:String,value:""},disabled:{type:Boolean,value:!1,reflectToAttribute:!0},mini:{type:Boolean,value:!1,reflectToAttribute:!0},noink:{type:Boolean,value:!1,reflectToAttribute:!0},label:{type:String,observer:"_labelChanged"}}}_bubbleClick(){this.dispatchEvent(new CustomEvent("fab-tap"))}})}]);