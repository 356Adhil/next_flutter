/*! For license information please see main.6c62df33.js.LICENSE.txt */
(()=>{var e={36824:(e,t,r)=>{"use strict";r.d(t,{EH:()=>Et,Wv:()=>St,u:()=>It,bQ:()=>kt,LS:()=>Ct,sS:()=>Bt});var n={};r.r(n),r.d(n,{hasBrowserEnv:()=>ue,hasStandardBrowserEnv:()=>fe,hasStandardBrowserWebWorkerEnv:()=>he,navigator:()=>de,origin:()=>pe});const i=()=>{try{let e="";if(localStorage.getItem("user")){const t=JSON.parse(localStorage.getItem("user"));e=`${null===t||void 0===t?void 0:t.token} ${null===t||void 0===t?void 0:t.refreshToken} ${null===t||void 0===t?void 0:t.userId}`}return e}catch(e){return""}},a=e=>{try{if(localStorage.getItem("user")){console.log("Token Updated");const t=JSON.parse(localStorage.getItem("user"));t.token=e,localStorage.setItem("user",JSON.stringify(t))}}catch(t){return""}};function o(e,t){return function(){return e.apply(t,arguments)}}const{toString:s}=Object.prototype,{getPrototypeOf:l}=Object,c=(A=Object.create(null),e=>{const t=s.call(e);return A[t]||(A[t]=t.slice(8,-1).toLowerCase())});var A;const u=e=>(e=e.toLowerCase(),t=>c(t)===e),d=e=>t=>typeof t===e,{isArray:f}=Array,h=d("undefined");const p=u("ArrayBuffer");const g=d("string"),m=d("function"),v=d("number"),y=e=>null!==e&&"object"===typeof e,b=e=>{if("object"!==c(e))return!1;const t=l(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},w=u("Date"),x=u("File"),C=u("Blob"),B=u("FileList"),E=u("URLSearchParams"),[k,I,S,D]=["ReadableStream","Request","Response","Headers"].map(u);function Q(e,t){let r,n,{allOwnKeys:i=!1}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),f(e))for(r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else{const n=i?Object.getOwnPropertyNames(e):Object.keys(e),a=n.length;let o;for(r=0;r<a;r++)o=n[r],t.call(null,e[o],o,e)}}function _(e,t){t=t.toLowerCase();const r=Object.keys(e);let n,i=r.length;for(;i-- >0;)if(n=r[i],t===n.toLowerCase())return n;return null}const T="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:global,F=e=>!h(e)&&e!==T;const O=(M="undefined"!==typeof Uint8Array&&l(Uint8Array),e=>M&&e instanceof M);var M;const N=u("HTMLFormElement"),j=(e=>{let{hasOwnProperty:t}=e;return(e,r)=>t.call(e,r)})(Object.prototype),L=u("RegExp"),U=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};Q(r,((r,i)=>{let a;!1!==(a=t(r,i,e))&&(n[i]=a||r)})),Object.defineProperties(e,n)},R="abcdefghijklmnopqrstuvwxyz",P="0123456789",H={DIGIT:P,ALPHA:R,ALPHA_DIGIT:R+R.toUpperCase()+P};const z=u("AsyncFunction"),V=((e,t)=>{return e?setImmediate:t?(r=`axios@${Math.random()}`,n=[],T.addEventListener("message",(e=>{let{source:t,data:i}=e;t===T&&i===r&&n.length&&n.shift()()}),!1),e=>{n.push(e),T.postMessage(r,"*")}):e=>setTimeout(e);var r,n})("function"===typeof setImmediate,m(T.postMessage)),G="undefined"!==typeof queueMicrotask?queueMicrotask.bind(T):"undefined"!==typeof process&&process.nextTick||V,Y={isArray:f,isArrayBuffer:p,isBuffer:function(e){return null!==e&&!h(e)&&null!==e.constructor&&!h(e.constructor)&&m(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"===typeof FormData&&e instanceof FormData||m(e.append)&&("formdata"===(t=c(e))||"object"===t&&m(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&p(e.buffer),t},isString:g,isNumber:v,isBoolean:e=>!0===e||!1===e,isObject:y,isPlainObject:b,isReadableStream:k,isRequest:I,isResponse:S,isHeaders:D,isUndefined:h,isDate:w,isFile:x,isBlob:C,isRegExp:L,isFunction:m,isStream:e=>y(e)&&m(e.pipe),isURLSearchParams:E,isTypedArray:O,isFileList:B,forEach:Q,merge:function e(){const{caseless:t}=F(this)&&this||{},r={},n=(n,i)=>{const a=t&&_(r,i)||i;b(r[a])&&b(n)?r[a]=e(r[a],n):b(n)?r[a]=e({},n):f(n)?r[a]=n.slice():r[a]=n};for(let i=0,a=arguments.length;i<a;i++)arguments[i]&&Q(arguments[i],n);return r},extend:function(e,t,r){let{allOwnKeys:n}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return Q(t,((t,n)=>{r&&m(t)?e[n]=o(t,r):e[n]=t}),{allOwnKeys:n}),e},trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},toFlatObject:(e,t,r,n)=>{let i,a,o;const s={};if(t=t||{},null==e)return t;do{for(i=Object.getOwnPropertyNames(e),a=i.length;a-- >0;)o=i[a],n&&!n(o,e,t)||s[o]||(t[o]=e[o],s[o]=!0);e=!1!==r&&l(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},kindOf:c,kindOfTest:u,endsWith:(e,t,r)=>{e=String(e),(void 0===r||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return-1!==n&&n===r},toArray:e=>{if(!e)return null;if(f(e))return e;let t=e.length;if(!v(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},forEachEntry:(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let n;for(;(n=r.next())&&!n.done;){const r=n.value;t.call(e,r[0],r[1])}},matchAll:(e,t)=>{let r;const n=[];for(;null!==(r=e.exec(t));)n.push(r);return n},isHTMLForm:N,hasOwnProperty:j,hasOwnProp:j,reduceDescriptors:U,freezeMethods:e=>{U(e,((t,r)=>{if(m(e)&&-1!==["arguments","caller","callee"].indexOf(r))return!1;const n=e[r];m(n)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")}))}))},toObjectSet:(e,t)=>{const r={},n=e=>{e.forEach((e=>{r[e]=!0}))};return f(e)?n(e):n(String(e).split(t)),r},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,r){return t.toUpperCase()+r})),noop:()=>{},toFiniteNumber:(e,t)=>null!=e&&Number.isFinite(e=+e)?e:t,findKey:_,global:T,isContextDefined:F,ALPHABET:H,generateString:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:16,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:H.ALPHA_DIGIT,r="";const{length:n}=t;for(;e--;)r+=t[Math.random()*n|0];return r},isSpecCompliantForm:function(e){return!!(e&&m(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),r=(e,n)=>{if(y(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[n]=e;const i=f(e)?[]:{};return Q(e,((e,t)=>{const a=r(e,n+1);!h(a)&&(i[t]=a)})),t[n]=void 0,i}}return e};return r(e,0)},isAsyncFn:z,isThenable:e=>e&&(y(e)||m(e))&&m(e.then)&&m(e.catch),setImmediate:V,asap:G};function W(e,t,r,n,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),i&&(this.response=i,this.status=i.status?i.status:null)}Y.inherits(W,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:Y.toJSONObject(this.config),code:this.code,status:this.status}}});const K=W.prototype,q={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{q[e]={value:e}})),Object.defineProperties(W,q),Object.defineProperty(K,"isAxiosError",{value:!0}),W.from=(e,t,r,n,i,a)=>{const o=Object.create(K);return Y.toFlatObject(e,o,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),W.call(o,e.message,t,r,n,i),o.cause=e,o.name=e.name,a&&Object.assign(o,a),o};const Z=W;function J(e){return Y.isPlainObject(e)||Y.isArray(e)}function X(e){return Y.endsWith(e,"[]")?e.slice(0,-2):e}function $(e,t,r){return e?e.concat(t).map((function(e,t){return e=X(e),!r&&t?"["+e+"]":e})).join(r?".":""):t}const ee=Y.toFlatObject(Y,{},null,(function(e){return/^is[A-Z]/.test(e)}));const te=function(e,t,r){if(!Y.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const n=(r=Y.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!Y.isUndefined(t[e])}))).metaTokens,i=r.visitor||c,a=r.dots,o=r.indexes,s=(r.Blob||"undefined"!==typeof Blob&&Blob)&&Y.isSpecCompliantForm(t);if(!Y.isFunction(i))throw new TypeError("visitor must be a function");function l(e){if(null===e)return"";if(Y.isDate(e))return e.toISOString();if(!s&&Y.isBlob(e))throw new Z("Blob is not supported. Use a Buffer instead.");return Y.isArrayBuffer(e)||Y.isTypedArray(e)?s&&"function"===typeof Blob?new Blob([e]):Buffer.from(e):e}function c(e,r,i){let s=e;if(e&&!i&&"object"===typeof e)if(Y.endsWith(r,"{}"))r=n?r:r.slice(0,-2),e=JSON.stringify(e);else if(Y.isArray(e)&&function(e){return Y.isArray(e)&&!e.some(J)}(e)||(Y.isFileList(e)||Y.endsWith(r,"[]"))&&(s=Y.toArray(e)))return r=X(r),s.forEach((function(e,n){!Y.isUndefined(e)&&null!==e&&t.append(!0===o?$([r],n,a):null===o?r:r+"[]",l(e))})),!1;return!!J(e)||(t.append($(i,r,a),l(e)),!1)}const A=[],u=Object.assign(ee,{defaultVisitor:c,convertValue:l,isVisitable:J});if(!Y.isObject(e))throw new TypeError("data must be an object");return function e(r,n){if(!Y.isUndefined(r)){if(-1!==A.indexOf(r))throw Error("Circular reference detected in "+n.join("."));A.push(r),Y.forEach(r,(function(r,a){!0===(!(Y.isUndefined(r)||null===r)&&i.call(t,r,Y.isString(a)?a.trim():a,n,u))&&e(r,n?n.concat(a):[a])})),A.pop()}}(e),t};function re(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function ne(e,t){this._pairs=[],e&&te(e,this,t)}const ie=ne.prototype;ie.append=function(e,t){this._pairs.push([e,t])},ie.toString=function(e){const t=e?function(t){return e.call(this,t,re)}:re;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};const ae=ne;function oe(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function se(e,t,r){if(!t)return e;const n=r&&r.encode||oe,i=r&&r.serialize;let a;if(a=i?i(t,r):Y.isURLSearchParams(t)?t.toString():new ae(t,r).toString(n),a){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+a}return e}const le=class{constructor(){this.handlers=[]}use(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){Y.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},ce={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Ae={isBrowser:!0,classes:{URLSearchParams:"undefined"!==typeof URLSearchParams?URLSearchParams:ae,FormData:"undefined"!==typeof FormData?FormData:null,Blob:"undefined"!==typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]},ue="undefined"!==typeof window&&"undefined"!==typeof document,de="object"===typeof navigator&&navigator||void 0,fe=ue&&(!de||["ReactNative","NativeScript","NS"].indexOf(de.product)<0),he="undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"===typeof self.importScripts,pe=ue&&window.location.href||"http://localhost",ge={...n,...Ae};const me=function(e){function t(e,r,n,i){let a=e[i++];if("__proto__"===a)return!0;const o=Number.isFinite(+a),s=i>=e.length;if(a=!a&&Y.isArray(n)?n.length:a,s)return Y.hasOwnProp(n,a)?n[a]=[n[a],r]:n[a]=r,!o;n[a]&&Y.isObject(n[a])||(n[a]=[]);return t(e,r,n[a],i)&&Y.isArray(n[a])&&(n[a]=function(e){const t={},r=Object.keys(e);let n;const i=r.length;let a;for(n=0;n<i;n++)a=r[n],t[a]=e[a];return t}(n[a])),!o}if(Y.isFormData(e)&&Y.isFunction(e.entries)){const r={};return Y.forEachEntry(e,((e,n)=>{t(function(e){return Y.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),n,r,0)})),r}return null};const ve={transitional:ce,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const r=t.getContentType()||"",n=r.indexOf("application/json")>-1,i=Y.isObject(e);i&&Y.isHTMLForm(e)&&(e=new FormData(e));if(Y.isFormData(e))return n?JSON.stringify(me(e)):e;if(Y.isArrayBuffer(e)||Y.isBuffer(e)||Y.isStream(e)||Y.isFile(e)||Y.isBlob(e)||Y.isReadableStream(e))return e;if(Y.isArrayBufferView(e))return e.buffer;if(Y.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return te(e,new ge.classes.URLSearchParams,Object.assign({visitor:function(e,t,r,n){return ge.isNode&&Y.isBuffer(e)?(this.append(t,e.toString("base64")),!1):n.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((a=Y.isFileList(e))||r.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return te(a?{"files[]":e}:e,t&&new t,this.formSerializer)}}return i||n?(t.setContentType("application/json",!1),function(e,t,r){if(Y.isString(e))try{return(t||JSON.parse)(e),Y.trim(e)}catch(n){if("SyntaxError"!==n.name)throw n}return(r||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||ve.transitional,r=t&&t.forcedJSONParsing,n="json"===this.responseType;if(Y.isResponse(e)||Y.isReadableStream(e))return e;if(e&&Y.isString(e)&&(r&&!this.responseType||n)){const r=!(t&&t.silentJSONParsing)&&n;try{return JSON.parse(e)}catch(i){if(r){if("SyntaxError"===i.name)throw Z.from(i,Z.ERR_BAD_RESPONSE,this,null,this.response);throw i}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ge.classes.FormData,Blob:ge.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};Y.forEach(["delete","get","head","post","put","patch"],(e=>{ve.headers[e]={}}));const ye=ve,be=Y.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),we=Symbol("internals");function xe(e){return e&&String(e).trim().toLowerCase()}function Ce(e){return!1===e||null==e?e:Y.isArray(e)?e.map(Ce):String(e)}function Be(e,t,r,n,i){return Y.isFunction(n)?n.call(this,t,r):(i&&(t=r),Y.isString(t)?Y.isString(n)?-1!==t.indexOf(n):Y.isRegExp(n)?n.test(t):void 0:void 0)}class Ee{constructor(e){e&&this.set(e)}set(e,t,r){const n=this;function i(e,t,r){const i=xe(t);if(!i)throw new Error("header name must be a non-empty string");const a=Y.findKey(n,i);(!a||void 0===n[a]||!0===r||void 0===r&&!1!==n[a])&&(n[a||t]=Ce(e))}const a=(e,t)=>Y.forEach(e,((e,r)=>i(e,r,t)));if(Y.isPlainObject(e)||e instanceof this.constructor)a(e,t);else if(Y.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()))a((e=>{const t={};let r,n,i;return e&&e.split("\n").forEach((function(e){i=e.indexOf(":"),r=e.substring(0,i).trim().toLowerCase(),n=e.substring(i+1).trim(),!r||t[r]&&be[r]||("set-cookie"===r?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)})),t})(e),t);else if(Y.isHeaders(e))for(const[o,s]of e.entries())i(s,o,r);else null!=e&&i(t,e,r);return this}get(e,t){if(e=xe(e)){const r=Y.findKey(this,e);if(r){const e=this[r];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}(e);if(Y.isFunction(t))return t.call(this,e,r);if(Y.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=xe(e)){const r=Y.findKey(this,e);return!(!r||void 0===this[r]||t&&!Be(0,this[r],r,t))}return!1}delete(e,t){const r=this;let n=!1;function i(e){if(e=xe(e)){const i=Y.findKey(r,e);!i||t&&!Be(0,r[i],i,t)||(delete r[i],n=!0)}}return Y.isArray(e)?e.forEach(i):i(e),n}clear(e){const t=Object.keys(this);let r=t.length,n=!1;for(;r--;){const i=t[r];e&&!Be(0,this[i],i,e,!0)||(delete this[i],n=!0)}return n}normalize(e){const t=this,r={};return Y.forEach(this,((n,i)=>{const a=Y.findKey(r,i);if(a)return t[a]=Ce(n),void delete t[i];const o=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,r)=>t.toUpperCase()+r))}(i):String(i).trim();o!==i&&delete t[i],t[o]=Ce(n),r[o]=!0})),this}concat(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return this.constructor.concat(this,...t)}toJSON(e){const t=Object.create(null);return Y.forEach(this,((r,n)=>{null!=r&&!1!==r&&(t[n]=e&&Y.isArray(r)?r.join(", "):r)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((e=>{let[t,r]=e;return t+": "+r})).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e){const t=new this(e);for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return n.forEach((e=>t.set(e))),t}static accessor(e){const t=(this[we]=this[we]={accessors:{}}).accessors,r=this.prototype;function n(e){const n=xe(e);t[n]||(!function(e,t){const r=Y.toCamelCase(" "+t);["get","set","has"].forEach((n=>{Object.defineProperty(e,n+r,{value:function(e,r,i){return this[n].call(this,t,e,r,i)},configurable:!0})}))}(r,e),t[n]=!0)}return Y.isArray(e)?e.forEach(n):n(e),this}}Ee.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),Y.reduceDescriptors(Ee.prototype,((e,t)=>{let{value:r}=e,n=t[0].toUpperCase()+t.slice(1);return{get:()=>r,set(e){this[n]=e}}})),Y.freezeMethods(Ee);const ke=Ee;function Ie(e,t){const r=this||ye,n=t||r,i=ke.from(n.headers);let a=n.data;return Y.forEach(e,(function(e){a=e.call(r,a,i.normalize(),t?t.status:void 0)})),i.normalize(),a}function Se(e){return!(!e||!e.__CANCEL__)}function De(e,t,r){Z.call(this,null==e?"canceled":e,Z.ERR_CANCELED,t,r),this.name="CanceledError"}Y.inherits(De,Z,{__CANCEL__:!0});const Qe=De;function _e(e,t,r){const n=r.config.validateStatus;r.status&&n&&!n(r.status)?t(new Z("Request failed with status code "+r.status,[Z.ERR_BAD_REQUEST,Z.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r)):e(r)}const Te=function(e,t){e=e||10;const r=new Array(e),n=new Array(e);let i,a=0,o=0;return t=void 0!==t?t:1e3,function(s){const l=Date.now(),c=n[o];i||(i=l),r[a]=s,n[a]=l;let A=o,u=0;for(;A!==a;)u+=r[A++],A%=e;if(a=(a+1)%e,a===o&&(o=(o+1)%e),l-i<t)return;const d=c&&l-c;return d?Math.round(1e3*u/d):void 0}};const Fe=function(e,t){let r,n,i=0,a=1e3/t;const o=function(t){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Date.now();i=a,r=null,n&&(clearTimeout(n),n=null),e.apply(null,t)};return[function(){const e=Date.now(),t=e-i;for(var s=arguments.length,l=new Array(s),c=0;c<s;c++)l[c]=arguments[c];t>=a?o(l,e):(r=l,n||(n=setTimeout((()=>{n=null,o(r)}),a-t)))},()=>r&&o(r)]},Oe=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,n=0;const i=Te(50,250);return Fe((r=>{const a=r.loaded,o=r.lengthComputable?r.total:void 0,s=a-n,l=i(s);n=a;e({loaded:a,total:o,progress:o?a/o:void 0,bytes:s,rate:l||void 0,estimated:l&&o&&a<=o?(o-a)/l:void 0,event:r,lengthComputable:null!=o,[t?"download":"upload"]:!0})}),r)},Me=(e,t)=>{const r=null!=e;return[n=>t[0]({lengthComputable:r,total:e,loaded:n}),t[1]]},Ne=e=>function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return Y.asap((()=>e(...r)))},je=ge.hasStandardBrowserEnv?function(){const e=ge.navigator&&/(msie|trident)/i.test(ge.navigator.userAgent),t=document.createElement("a");let r;function n(r){let n=r;return e&&(t.setAttribute("href",n),n=t.href),t.setAttribute("href",n),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return r=n(window.location.href),function(e){const t=Y.isString(e)?n(e):e;return t.protocol===r.protocol&&t.host===r.host}}():function(){return!0},Le=ge.hasStandardBrowserEnv?{write(e,t,r,n,i,a){const o=[e+"="+encodeURIComponent(t)];Y.isNumber(r)&&o.push("expires="+new Date(r).toGMTString()),Y.isString(n)&&o.push("path="+n),Y.isString(i)&&o.push("domain="+i),!0===a&&o.push("secure"),document.cookie=o.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read:()=>null,remove(){}};function Ue(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const Re=e=>e instanceof ke?{...e}:e;function Pe(e,t){t=t||{};const r={};function n(e,t,r){return Y.isPlainObject(e)&&Y.isPlainObject(t)?Y.merge.call({caseless:r},e,t):Y.isPlainObject(t)?Y.merge({},t):Y.isArray(t)?t.slice():t}function i(e,t,r){return Y.isUndefined(t)?Y.isUndefined(e)?void 0:n(void 0,e,r):n(e,t,r)}function a(e,t){if(!Y.isUndefined(t))return n(void 0,t)}function o(e,t){return Y.isUndefined(t)?Y.isUndefined(e)?void 0:n(void 0,e):n(void 0,t)}function s(r,i,a){return a in t?n(r,i):a in e?n(void 0,r):void 0}const l={url:a,method:a,data:a,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:s,headers:(e,t)=>i(Re(e),Re(t),!0)};return Y.forEach(Object.keys(Object.assign({},e,t)),(function(n){const a=l[n]||i,o=a(e[n],t[n],n);Y.isUndefined(o)&&a!==s||(r[n]=o)})),r}const He=e=>{const t=Pe({},e);let r,{data:n,withXSRFToken:i,xsrfHeaderName:a,xsrfCookieName:o,headers:s,auth:l}=t;if(t.headers=s=ke.from(s),t.url=se(Ue(t.baseURL,t.url),e.params,e.paramsSerializer),l&&s.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):""))),Y.isFormData(n))if(ge.hasStandardBrowserEnv||ge.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if(!1!==(r=s.getContentType())){const[e,...t]=r?r.split(";").map((e=>e.trim())).filter(Boolean):[];s.setContentType([e||"multipart/form-data",...t].join("; "))}if(ge.hasStandardBrowserEnv&&(i&&Y.isFunction(i)&&(i=i(t)),i||!1!==i&&je(t.url))){const e=a&&o&&Le.read(o);e&&s.set(a,e)}return t},ze="undefined"!==typeof XMLHttpRequest&&function(e){return new Promise((function(t,r){const n=He(e);let i=n.data;const a=ke.from(n.headers).normalize();let o,s,l,c,A,{responseType:u,onUploadProgress:d,onDownloadProgress:f}=n;function h(){c&&c(),A&&A(),n.cancelToken&&n.cancelToken.unsubscribe(o),n.signal&&n.signal.removeEventListener("abort",o)}let p=new XMLHttpRequest;function g(){if(!p)return;const n=ke.from("getAllResponseHeaders"in p&&p.getAllResponseHeaders());_e((function(e){t(e),h()}),(function(e){r(e),h()}),{data:u&&"text"!==u&&"json"!==u?p.response:p.responseText,status:p.status,statusText:p.statusText,headers:n,config:e,request:p}),p=null}p.open(n.method.toUpperCase(),n.url,!0),p.timeout=n.timeout,"onloadend"in p?p.onloadend=g:p.onreadystatechange=function(){p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))&&setTimeout(g)},p.onabort=function(){p&&(r(new Z("Request aborted",Z.ECONNABORTED,e,p)),p=null)},p.onerror=function(){r(new Z("Network Error",Z.ERR_NETWORK,e,p)),p=null},p.ontimeout=function(){let t=n.timeout?"timeout of "+n.timeout+"ms exceeded":"timeout exceeded";const i=n.transitional||ce;n.timeoutErrorMessage&&(t=n.timeoutErrorMessage),r(new Z(t,i.clarifyTimeoutError?Z.ETIMEDOUT:Z.ECONNABORTED,e,p)),p=null},void 0===i&&a.setContentType(null),"setRequestHeader"in p&&Y.forEach(a.toJSON(),(function(e,t){p.setRequestHeader(t,e)})),Y.isUndefined(n.withCredentials)||(p.withCredentials=!!n.withCredentials),u&&"json"!==u&&(p.responseType=n.responseType),f&&([l,A]=Oe(f,!0),p.addEventListener("progress",l)),d&&p.upload&&([s,c]=Oe(d),p.upload.addEventListener("progress",s),p.upload.addEventListener("loadend",c)),(n.cancelToken||n.signal)&&(o=t=>{p&&(r(!t||t.type?new Qe(null,e,p):t),p.abort(),p=null)},n.cancelToken&&n.cancelToken.subscribe(o),n.signal&&(n.signal.aborted?o():n.signal.addEventListener("abort",o)));const m=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(n.url);m&&-1===ge.protocols.indexOf(m)?r(new Z("Unsupported protocol "+m+":",Z.ERR_BAD_REQUEST,e)):p.send(i||null)}))},Ve=(e,t)=>{const{length:r}=e=e?e.filter(Boolean):[];if(t||r){let r,n=new AbortController;const i=function(e){if(!r){r=!0,o();const t=e instanceof Error?e:this.reason;n.abort(t instanceof Z?t:new Qe(t instanceof Error?t.message:t))}};let a=t&&setTimeout((()=>{a=null,i(new Z(`timeout ${t} of ms exceeded`,Z.ETIMEDOUT))}),t);const o=()=>{e&&(a&&clearTimeout(a),a=null,e.forEach((e=>{e.unsubscribe?e.unsubscribe(i):e.removeEventListener("abort",i)})),e=null)};e.forEach((e=>e.addEventListener("abort",i)));const{signal:s}=n;return s.unsubscribe=()=>Y.asap(o),s}},Ge=function*(e,t){let r=e.byteLength;if(!t||r<t)return void(yield e);let n,i=0;for(;i<r;)n=i+t,yield e.slice(i,n),i=n},Ye=async function*(e){if(e[Symbol.asyncIterator])return void(yield*e);const t=e.getReader();try{for(;;){const{done:e,value:r}=await t.read();if(e)break;yield r}}finally{await t.cancel()}},We=(e,t,r,n)=>{const i=async function*(e,t){for await(const r of Ye(e))yield*Ge(r,t)}(e,t);let a,o=0,s=e=>{a||(a=!0,n&&n(e))};return new ReadableStream({async pull(e){try{const{done:t,value:n}=await i.next();if(t)return s(),void e.close();let a=n.byteLength;if(r){let e=o+=a;r(e)}e.enqueue(new Uint8Array(n))}catch(t){throw s(t),t}},cancel:e=>(s(e),i.return())},{highWaterMark:2})},Ke="function"===typeof fetch&&"function"===typeof Request&&"function"===typeof Response,qe=Ke&&"function"===typeof ReadableStream,Ze=Ke&&("function"===typeof TextEncoder?(Je=new TextEncoder,e=>Je.encode(e)):async e=>new Uint8Array(await new Response(e).arrayBuffer()));var Je;const Xe=function(e){try{for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return!!e(...r)}catch(i){return!1}},$e=qe&&Xe((()=>{let e=!1;const t=new Request(ge.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})),et=qe&&Xe((()=>Y.isReadableStream(new Response("").body))),tt={stream:et&&(e=>e.body)};var rt;Ke&&(rt=new Response,["text","arrayBuffer","blob","formData","stream"].forEach((e=>{!tt[e]&&(tt[e]=Y.isFunction(rt[e])?t=>t[e]():(t,r)=>{throw new Z(`Response type '${e}' is not supported`,Z.ERR_NOT_SUPPORT,r)})})));const nt=async(e,t)=>{const r=Y.toFiniteNumber(e.getContentLength());return null==r?(async e=>{if(null==e)return 0;if(Y.isBlob(e))return e.size;if(Y.isSpecCompliantForm(e)){const t=new Request(ge.origin,{method:"POST",body:e});return(await t.arrayBuffer()).byteLength}return Y.isArrayBufferView(e)||Y.isArrayBuffer(e)?e.byteLength:(Y.isURLSearchParams(e)&&(e+=""),Y.isString(e)?(await Ze(e)).byteLength:void 0)})(t):r},it={http:null,xhr:ze,fetch:Ke&&(async e=>{let{url:t,method:r,data:n,signal:i,cancelToken:a,timeout:o,onDownloadProgress:s,onUploadProgress:l,responseType:c,headers:A,withCredentials:u="same-origin",fetchOptions:d}=He(e);c=c?(c+"").toLowerCase():"text";let f,h=Ve([i,a&&a.toAbortSignal()],o);const p=h&&h.unsubscribe&&(()=>{h.unsubscribe()});let g;try{if(l&&$e&&"get"!==r&&"head"!==r&&0!==(g=await nt(A,n))){let e,r=new Request(t,{method:"POST",body:n,duplex:"half"});if(Y.isFormData(n)&&(e=r.headers.get("content-type"))&&A.setContentType(e),r.body){const[e,t]=Me(g,Oe(Ne(l)));n=We(r.body,65536,e,t)}}Y.isString(u)||(u=u?"include":"omit");const i="credentials"in Request.prototype;f=new Request(t,{...d,signal:h,method:r.toUpperCase(),headers:A.normalize().toJSON(),body:n,duplex:"half",credentials:i?u:void 0});let a=await fetch(f);const o=et&&("stream"===c||"response"===c);if(et&&(s||o&&p)){const e={};["status","statusText","headers"].forEach((t=>{e[t]=a[t]}));const t=Y.toFiniteNumber(a.headers.get("content-length")),[r,n]=s&&Me(t,Oe(Ne(s),!0))||[];a=new Response(We(a.body,65536,r,(()=>{n&&n(),p&&p()})),e)}c=c||"text";let m=await tt[Y.findKey(tt,c)||"text"](a,e);return!o&&p&&p(),await new Promise(((t,r)=>{_e(t,r,{data:m,headers:ke.from(a.headers),status:a.status,statusText:a.statusText,config:e,request:f})}))}catch(m){if(p&&p(),m&&"TypeError"===m.name&&/fetch/i.test(m.message))throw Object.assign(new Z("Network Error",Z.ERR_NETWORK,e,f),{cause:m.cause||m});throw Z.from(m,m&&m.code,e,f)}})};Y.forEach(it,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(r){}Object.defineProperty(e,"adapterName",{value:t})}}));const at=e=>`- ${e}`,ot=e=>Y.isFunction(e)||null===e||!1===e,st=e=>{e=Y.isArray(e)?e:[e];const{length:t}=e;let r,n;const i={};for(let a=0;a<t;a++){let t;if(r=e[a],n=r,!ot(r)&&(n=it[(t=String(r)).toLowerCase()],void 0===n))throw new Z(`Unknown adapter '${t}'`);if(n)break;i[t||"#"+a]=n}if(!n){const e=Object.entries(i).map((e=>{let[t,r]=e;return`adapter ${t} `+(!1===r?"is not supported by the environment":"is not available in the build")}));let r=t?e.length>1?"since :\n"+e.map(at).join("\n"):" "+at(e[0]):"as no adapter specified";throw new Z("There is no suitable adapter to dispatch the request "+r,"ERR_NOT_SUPPORT")}return n};function lt(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Qe(null,e)}function ct(e){lt(e),e.headers=ke.from(e.headers),e.data=Ie.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return st(e.adapter||ye.adapter)(e).then((function(t){return lt(e),t.data=Ie.call(e,e.transformResponse,t),t.headers=ke.from(t.headers),t}),(function(t){return Se(t)||(lt(e),t&&t.response&&(t.response.data=Ie.call(e,e.transformResponse,t.response),t.response.headers=ke.from(t.response.headers))),Promise.reject(t)}))}const At="1.7.7",ut={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{ut[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}}));const dt={};ut.transitional=function(e,t,r){function n(e,t){return"[Axios v1.7.7] Transitional option '"+e+"'"+t+(r?". "+r:"")}return(r,i,a)=>{if(!1===e)throw new Z(n(i," has been removed"+(t?" in "+t:"")),Z.ERR_DEPRECATED);return t&&!dt[i]&&(dt[i]=!0,console.warn(n(i," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,i,a)}};const ft={assertOptions:function(e,t,r){if("object"!==typeof e)throw new Z("options must be an object",Z.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let i=n.length;for(;i-- >0;){const a=n[i],o=t[a];if(o){const t=e[a],r=void 0===t||o(t,a,e);if(!0!==r)throw new Z("option "+a+" must be "+r,Z.ERR_BAD_OPTION_VALUE)}else if(!0!==r)throw new Z("Unknown option "+a,Z.ERR_BAD_OPTION)}},validators:ut},ht=ft.validators;class pt{constructor(e){this.defaults=e,this.interceptors={request:new le,response:new le}}async request(e,t){try{return await this._request(e,t)}catch(r){if(r instanceof Error){let e;Error.captureStackTrace?Error.captureStackTrace(e={}):e=new Error;const t=e.stack?e.stack.replace(/^.+\n/,""):"";try{r.stack?t&&!String(r.stack).endsWith(t.replace(/^.+\n.+\n/,""))&&(r.stack+="\n"+t):r.stack=t}catch(n){}}throw r}}_request(e,t){"string"===typeof e?(t=t||{}).url=e:t=e||{},t=Pe(this.defaults,t);const{transitional:r,paramsSerializer:n,headers:i}=t;void 0!==r&&ft.assertOptions(r,{silentJSONParsing:ht.transitional(ht.boolean),forcedJSONParsing:ht.transitional(ht.boolean),clarifyTimeoutError:ht.transitional(ht.boolean)},!1),null!=n&&(Y.isFunction(n)?t.paramsSerializer={serialize:n}:ft.assertOptions(n,{encode:ht.function,serialize:ht.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let a=i&&Y.merge(i.common,i[t.method]);i&&Y.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete i[e]})),t.headers=ke.concat(a,i);const o=[];let s=!0;this.interceptors.request.forEach((function(e){"function"===typeof e.runWhen&&!1===e.runWhen(t)||(s=s&&e.synchronous,o.unshift(e.fulfilled,e.rejected))}));const l=[];let c;this.interceptors.response.forEach((function(e){l.push(e.fulfilled,e.rejected)}));let A,u=0;if(!s){const e=[ct.bind(this),void 0];for(e.unshift.apply(e,o),e.push.apply(e,l),A=e.length,c=Promise.resolve(t);u<A;)c=c.then(e[u++],e[u++]);return c}A=o.length;let d=t;for(u=0;u<A;){const e=o[u++],t=o[u++];try{d=e(d)}catch(f){t.call(this,f);break}}try{c=ct.call(this,d)}catch(f){return Promise.reject(f)}for(u=0,A=l.length;u<A;)c=c.then(l[u++],l[u++]);return c}getUri(e){return se(Ue((e=Pe(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}Y.forEach(["delete","get","head","options"],(function(e){pt.prototype[e]=function(t,r){return this.request(Pe(r||{},{method:e,url:t,data:(r||{}).data}))}})),Y.forEach(["post","put","patch"],(function(e){function t(t){return function(r,n,i){return this.request(Pe(i||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}pt.prototype[e]=t(),pt.prototype[e+"Form"]=t(!0)}));const gt=pt;class mt{constructor(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const r=this;this.promise.then((e=>{if(!r._listeners)return;let t=r._listeners.length;for(;t-- >0;)r._listeners[t](e);r._listeners=null})),this.promise.then=e=>{let t;const n=new Promise((e=>{r.subscribe(e),t=e})).then(e);return n.cancel=function(){r.unsubscribe(t)},n},e((function(e,n,i){r.reason||(r.reason=new Qe(e,n,i),t(r.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new mt((function(t){e=t})),cancel:e}}}const vt=mt;const yt={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(yt).forEach((e=>{let[t,r]=e;yt[r]=t}));const bt=yt;const wt=function e(t){const r=new gt(t),n=o(gt.prototype.request,r);return Y.extend(n,gt.prototype,r,{allOwnKeys:!0}),Y.extend(n,r,null,{allOwnKeys:!0}),n.create=function(r){return e(Pe(t,r))},n}(ye);wt.Axios=gt,wt.CanceledError=Qe,wt.CancelToken=vt,wt.isCancel=Se,wt.VERSION=At,wt.toFormData=te,wt.AxiosError=Z,wt.Cancel=wt.CanceledError,wt.all=function(e){return Promise.all(e)},wt.spread=function(e){return function(t){return e.apply(null,t)}},wt.isAxiosError=function(e){return Y.isObject(e)&&!0===e.isAxiosError},wt.mergeConfig=Pe,wt.AxiosHeaders=ke,wt.formToJSON=e=>me(Y.isHTMLForm(e)?new FormData(e):e),wt.getAdapter=st,wt.HttpStatusCode=bt,wt.default=wt;const xt=wt,Ct=async(e,t,r,n)=>new Promise((async(r,n)=>{try{let n=i();const o=new FormData;let s=!1;Object.entries(e).forEach((e=>{let[t,r]=e;null!==r&&void 0!==r&&("object"===typeof r?r[0]instanceof File?(o.append(t,r[0]),s=!0):Array.isArray(r)?r.forEach(((e,r)=>{o.append(`${t}[${r}]`,e)})):o.append(t,r):o.append(t,r))}));const l=await xt.post(`https://backend-endpoint.eventhex.ai/api/v1/${t}`,o,{headers:{"Content-Type":s?"multipart/form-data":"application/json",Authorization:"Bearer "+n}});if("true"===l.headers.get("Token-Updated")){const e=l.headers.get("Authorization").split(" ")[1];a(e)}return 401===l.status?(localStorage.clear(),window.location.href="/",r({status:l.status,data:[]})):r({status:l.status,data:l.data})}catch(d){var o,s,l,c,A,u;console.log("error",d),r({status:null===d||void 0===d||null===(o=d.response)||void 0===o?void 0:o.status,customMessage:null!==(s=null===d||void 0===d||null===(l=d.response)||void 0===l||null===(c=l.data)||void 0===c?void 0:c.customMessage)&&void 0!==s?s:"Something went wrong!",data:null===d||void 0===d||null===(A=d.response)||void 0===A||null===(u=A.data)||void 0===u?void 0:u.response})}})),Bt=async(e,t,r,n)=>{console.log("PutData",e,{ulr:t});try{let r=i(),n=new FormData;const o="https://backend-endpoint.eventhex.ai/api/v1/";let s=!1;Object.entries(e).forEach((e=>{let[t,r]=e;"object"===typeof r?r[0]instanceof File?(s=!0,console.log(r[0]instanceof File),n.append(t,r[0])):Array.isArray(r)?r.forEach(((e,r)=>{n.append(`${t}[${r}]`,e)})):"value"in r?n.append(t,r._id):Object.entries(r).forEach((e=>{let[r,i]=e;n.append(`${t}[${r}]`,i)})):n.append(t,r)}));const l=await xt.put(`${o}${t}`,n,{headers:{"Content-Type":s?"multipart/form-data":"application/json",Authorization:"Bearer "+r}});if("true"===l.headers.get("Token-Updated")){const e=l.headers.get("Authorization").split(" ")[1];a(e)}if(401===l.status)try{return localStorage.clear(),window.location.href="/",{status:l.status,data:[]}}catch(A){console.log(A)}return{status:l.status,data:l.data}}catch(A){var o,s,l,c;return console.log(A),{status:null===(o=A.response)||void 0===o?void 0:o.status,customMessage:null!==(s=null===(l=A.response)||void 0===l||null===(c=l.data)||void 0===c?void 0:c.customMessage)&&void 0!==s?s:"Something went wrong!"}}},Et=async(e,t,r,n)=>{try{let r=i();const o=await xt.post(`https://backend-endpoint.eventhex.ai/api/v1/${t}`,e,{headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer "+r}});if("true"===o.headers.get("Token-Updated")){const e=o.headers.get("Authorization").split(" ")[1];a(e)}return 401===o.status&&(n("/"),n(0)),{status:o.status,data:o.data}}catch(A){var o,s,l,c;return console.log("error",A),{status:null!==(o=null===(s=A.response)||void 0===s?void 0:s.status)&&void 0!==o?o:A,data:(null===(l=A.response)||void 0===l||null===(c=l.data)||void 0===c?void 0:c.message)||"An error occurred while uploading."}}},kt=async(e,t,r,n)=>new Promise((async(r,n)=>{try{let n=new URLSearchParams;const o=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";for(let r in e)if(e.hasOwnProperty(r)){let i=t?`${t}[${r}]`:r;"object"===typeof e[r]&&null!==e[r]?o(e[r],i):n.append(i,e[r])}};o(e);let s=i();const l=t.includes("?"),c=`https://backend-endpoint.eventhex.ai/api/v1/${t}${l?"&":"?"}${n.toString()}`,A=await xt.get(c,{headers:{"Content-Type":"application/json",Authorization:"Bearer "+s}});if("true"===A.headers.get("Token-Updated")){const e=A.headers.get("Authorization").split(" ")[1];a(e)}if(401===A.status)try{localStorage.clear(),window.location.href="/"}catch(u){console.log(u)}r({status:A.status,data:A.data})}catch(u){var o,s,l,c,A;if(null!==(o=u.response)&&void 0!==o&&o.status)if(401===(null===(A=u.response)||void 0===A?void 0:A.status))try{localStorage.clear(),window.location.href="/"}catch(u){console.log(u)}r({status:null===(s=u.response)||void 0===s?void 0:s.status,data:null===(l=u.response)||void 0===l||null===(c=l.data)||void 0===c?void 0:c.message})}})),It=async(e,t,r,n)=>new Promise((async(r,n)=>{try{let n=new URLSearchParams;const o=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";for(let r in e)if(e.hasOwnProperty(r)){let i=t?`${t}[${r}]`:r;"object"===typeof e[r]&&null!==e[r]?o(e[r],i):n.append(i,e[r])}};o(e);let s=i();const l=t.includes("?"),c=`${t}${l?"&":"?"}${n.toString()}`,A=await xt.get(c,{headers:{"Content-Type":"application/json",Authorization:"Bearer "+s}});if("true"===A.headers.get("Token-Updated")){const e=A.headers.get("Authorization").split(" ")[1];a(e)}if(401===A.status)try{localStorage.clear(),window.location.href="/"}catch(u){console.log(u)}r({status:A.status,data:A.data})}catch(u){var o,s,l,c,A;if(null!==(o=u.response)&&void 0!==o&&o.status)if(401===(null===(A=u.response)||void 0===A?void 0:A.status))try{localStorage.clear(),window.location.href="/"}catch(u){console.log(u)}r({status:null===(s=u.response)||void 0===s?void 0:s.status,data:null===(l=u.response)||void 0===l||null===(c=l.data)||void 0===c?void 0:c.message})}})),St=async(e,t,r,n)=>new Promise((async(r,n)=>{try{let n=i(),o=Object.keys(e).map((t=>t+"="+e[t])).join("&");const s=await xt.delete(`https://backend-endpoint.eventhex.ai/api/v1/${t}?${o}`,{headers:{Authorization:"Bearer "+n}});if("true"===s.headers.get("Token-Updated")){const e=s.headers.get("Authorization").split(" ")[1];a(e)}if(401===s.status)try{localStorage.clear(),window.location.href="/"}catch(c){console.log(c)}r({status:s.status,data:s.data})}catch(c){var o,s,l;console.log("API Eror",c.message),r({status:c.response.status,customMessage:null!==(o=null===(s=c.response)||void 0===s||null===(l=s.data)||void 0===l?void 0:l.customMessage)&&void 0!==o?o:"Something went wrong!"})}}))},75374:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var n=r(65043),i=r(21159),a=r(86178),o=r.n(a),s=r(70579);const l=e=>{let{consent:t,autoUpdate:r=!1,liveData:a=!1,header:l,api:c,formType:A="post",formMode:u,formInput:d,formValues:f,submitHandler:h,isOpenHandler:p,isCreating:g,useCaptcha:m,css:v="",description:y="",button:b="Submit"}=e;const[w,x]=(0,n.useState)([]),[C,B]=(0,n.useState)([]),[E]=(0,n.useState)(d);return(0,n.useEffect)((()=>{const e={},t={};let r=new Date;d.forEach((n=>{if(t[n.name]="","checkbox"===n.type||"toggle"===n.type)e[n.name]=!!n.default&&JSON.parse(n.default);else if("datetime"===n.type||"time"===n.type)r=n.default?new Date(n.default):new Date,e[n.name]=r.toISOString();else if("image"===n.type||"file"===n.type)e[n.name]=[];else if("multiSelect"===n.type){var i;e[n.name]=(null===(i=n.default)||void 0===i?void 0:i.length)>0?n.default:[],n.defaultArray&&(e[n.name+"Array"]=n.defaultArray)}else if("mobilenumber"===n.type)e[n.name+"_Code"]=n.defaultArray,e[n.name+"_Code"]=n.defaultArray;else if("select"===n.type){var a,s;e[n.name]=(null===(a=n.default)||void 0===a||null===(s=a.toString())||void 0===s?void 0:s.length)>0?n.default:"",n.defaultArray&&(e[n.name+"Array"]=n.defaultArray)}else"date"===n.type?e[n.name]="empty"===n.default?"":o()(n.default).isValid()?o()(n.default).set({hour:12,minute:0,second:0,millisecond:0}).toISOString():o()(r).set({hour:12,minute:0,second:0,millisecond:0}).toISOString():"multiple"===n.type?(e[n.name]=[],t[n.name]=[],n.forms.forEach((r=>{e[n.name].push(r.reduce(((e,t)=>({...e,[t.name]:""})),{})),t[n.name].push(r.reduce(((e,t)=>({...e,[t.name]:""})),{}))}))):(e[n.name]=n.default,"select"===n.type&&(e[n.name]=""))})),t.captchaError="",t.agreementAccept="",f&&Object.keys(e).forEach((t=>{var r;f[t]&&(e[t]=null!==(r=f[t])&&void 0!==r?r:e[t])})),x(e),B(t)}),[d,f]),(null===E||void 0===E?void 0:E.length)>0&&Object.keys(w).length>0&&C&&(0,s.jsx)(i.A,{consent:t,liveData:a,autoUpdate:r,api:c,formMode:null!==u&&void 0!==u?u:E.length>4?"double":"single",formType:A,header:l,description:y,formInput:E,formValues:w,formErrors:C,submitHandler:h,isOpenHandler:p,useCaptcha:m,isOpen:g,button:b,css:v})}},87045:(e,t,r)=>{"use strict";r.d(t,{A:()=>c});var n=r(65043),i=r(64980),a=r(94574);const o=a.Ay.div`
  display: flex;
  justify-content: space-between;
`,s=a.Ay.div`
  display: flex;
  height: 38px;
  margin-right: 10px;
  border: 1px solid lightgray;
  border-radius: 10px;
  canvas {
    border-radius: 10px;
    cursor: pointer;
  }
`;var l=r(70579);const c=e=>{let{setCaptchaStatus:t,label:r,error:a}=e;const c=(0,n.useRef)(null),[A,u]=(0,n.useState)(""),[d,f]=(0,n.useState)("");function h(e){const t="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";let r="";for(let n=0;n<e;n++){r+=t[Math.floor(62*Math.random())]}return r}function p(e){const t=c.current,r=t.getContext("2d");r.fillStyle="#ffff",r.fillRect(0,0,t.width,t.height);const n=`bold ${Math.floor(20*Math.random())+20}px Arial`;r.font=n,r.fillStyle="black",r.textAlign="center",r.textBaseline="middle",r.fillText(e,t.width/2,t.height/2)}(0,n.useEffect)((()=>{const e=h(6);u(e),p(e)}),[]);const g=e=>{t(e===A),f(e)};return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(o,{children:[(0,l.jsx)(s,{children:(0,l.jsx)("canvas",{title:"Cick here to update the Captcha",onClick:()=>{const e=h(6);u(e),p(e),t(!1)},ref:c,width:150,height:50,style:{background:"transperant"}})}),(0,l.jsx)(i.A,{error:a,placeholder:r,id:1,label:r,value:d,type:"text",onChange:function(e,t){g(e.target.value)}})]})})}},66386:(e,t,r)=>{"use strict";r.d(t,{$3:()=>i,hE:()=>a});var n=r(94574);n.Ay.div`
  font-size: 14px;
  font-weight: bold;
  color: grey;
  display: flex;
  align-items: baseline;
  gap: 0px;
  flex-direction: column;
`,n.Ay.div`
  font-size: 15px;
  font-weight: bold;
  text-align: left;
  padding-left: 0px;
`,n.Ay.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 0;
  flex-direction: row;
  display: flex;
  gap: 5px;
  align-items: center;
  span {
    font-size: 12px;
    white-space: nowrap;
  }
  &.right {
    text-align: right;
  }
  svg {
    justify-content: center;
    align-items: center;
    margin: 5px;
    background: #e8e8e8;
    padding: 10px;
    border-radius: 10px;
  }
`,n.Ay.div`
  height: 30px;
  width: 1px;
  background-color: #dedbdb;
`;const i=n.Ay.div`
  width: 50%;
  background-color: rgb(222, 219, 219);
  margin: auto;
  display: flex;
  border-top: 1px solid rgb(222, 219, 219);
  margin-bottom: 10px;
  margin-top: 0;
  position: sticky;
  top: 0;
  &.horizontal {
    display: none;
  }
`,a=n.Ay.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%; /* Ensure title spans full width */
  position: relative;
  padding-right: 10px; /* Optional padding to prevent text overflow */
  margin-top:0px;
  padding: 10px 0;
  /* Full-width line under the Title */
  &::after {
    content: "";
    position: absolute;
    bottom: -5px; /* Adjust this to control spacing between text and the line */
    left: 0;
    right: 0; /* Ensures the line spans the full width */
    height: 1px; /* Thickness of the line */
    background-color: #dedbdb; /* Color of the line */
    margin-top:13px;
  }
`;n.Ay.div`
  display: flex;
  align-items: center; /* Vertically center the icon and title */
  gap: 5px; /* Space between the icon and title */
`,n.Ay.div`
  height: 24px;  /* Adjusted height */
  width: 24px;   /* Adjusted width */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top:10px;
  margin-left:20px;

  svg {
    width: 80%; /* Make the SVG fill the container */
    height: 80%;
  }
`},16921:(e,t,r)=>{"use strict";r.d(t,{A:()=>p});var n=r(65043),i=r(94574),a=r(46861),o=r(92823),s=r.n(o);const l=(0,i.Ay)(s())`
  background: white;
  border-radius: 12px;
  border: 1px solid #e2e4e9;
  transition: all 0.2s ease-out 0s;
  margin: 5px 2px;
  p {
  }
`;i.Ay.label`
  font-size: 14px;
  margin: 10px 4px;
  font-weight: 700;
  color: #757575;
  display: flex;
  justify-content: space-between;
`;var c=r(69135),A=r(8276),u=r(81775),d=r(70579);const f={toolbar:[[{size:[]}],["bold","italic","underline","strike","blockquote"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],[{align:[]}],["link","image"],["clean"]],clipboard:{matchVisual:!1}},h=["header","font","size","bold","italic","underline","strike","blockquote","list","bullet","indent","link","image","video","color","background","script","align","direction","code-block","formula","clean"],p=e=>{var t,r,i;const[o,s]=(0,n.useState)(!1),[A,p]=(0,n.useState)("");(0,n.useEffect)((()=>{p(e.value)}),[e.value]);const v=()=>{s(!o)};return(0,d.jsx)(g,{className:(null!==(t=e.customClass)&&void 0!==t?t:"full")+" "+e.dynamicClass+" "+(o&&"open")+((null===(r=e.value)||void 0===r?void 0:r.length)>0?" has":""),children:(0,d.jsxs)(y,{className:o&&"open",children:[o&&(0,d.jsx)(m,{onClick:()=>v(),children:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("span",{children:"Close Full screen"}),(0,d.jsx)(a.A0,{icon:"Close"})]})}),(0,d.jsx)(c.A,{required:e.required,label:null!==(i=e.label)&&void 0!==i?i:e.placeholder,error:e.error}),(0,d.jsx)(l,{theme:"snow",value:A,formats:h,modules:f,onChange:t=>{e.onChange(t,e.id,e.type)}}),(0,d.jsx)(u.A,{...e}),!o&&(0,d.jsx)(m,{onClick:()=>v(),children:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("span",{children:"Open Full Screen"}),(0,d.jsx)(a.A0,{icon:"enlarge"})]})})]})})},g=i.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  &.small {
    grid-column: span 1; /* 25% width */
  }

  &.half {
    grid-column: span 2; /* 50% width */
  }

  &.large {
    grid-column: span 3; /* 75% width */
  }
  &.full {
    grid-column: span 4; /* 100% width */
  }
  &.disabled {
    display: none;
  }
  p {
    text-align: initial;
    color: ${A.D.text.soft};
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.006em;
    text-align: left;
  }
  &.has p {
    color: ${A.D.text.main};
  }
  &.open {
    background-color: rgba(0, 0, 0, 0.2);
    padding: 25px 0;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 2000;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
    top: 0;
    bottom: 0;
    border-top: 1px solid rgb(224, 224, 227);
  }
`,m=i.Ay.div`
  background-color: transparent;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  align-items: center;
  align-self: end;
  cursor: pointer;
  z-index: 1;
  font-size: 14px;
  svg,
  i {
    margin-left: 10px;
  }
`,v=i.i7`  
  from {  
    transform: translateX(100%); 
    opacity: 0;
  }  
  to {  
    transform: translateX(0); 
    opacity: 1;
  }  
`,y=i.Ay.div`
  display: flex;
  flex-direction: column;
  display: flex;
  background-color: white;
  border-radius: 10px;
  /* max-height: 300px; */
  width: 100%;
  &.open {
    display: flex;
    flex-direction: column;
    display: flex;
    background-color: white;
    border-radius: 0px;
    width: 50%;
    min-width: 250px;
    animation: ${v} 1s ease-in-out;
    animation-duration: 0.2s;
    padding: 1em;
    left: auto;
    right: 0;
    top: 0;
    bottom: 0;
    height: 100vh;
    position: relative;
    overflow: auto;
    right: 0;
    left: auto;
    margin-left: auto;
  }
  @media (max-width: 768px) {
    width: 100%;
    position: relative;
    top: 0;
    padding: 0;
    &.open {
      width: 90%;
    }
  }
`},38520:(e,t,r)=>{"use strict";r.d(t,{$n:()=>B,e2:()=>x,Sc:()=>R,sk:()=>T,U$:()=>z,n9:()=>L,c9:()=>j,S$:()=>v,co:()=>y,K0:()=>I,S_:()=>b,aD:()=>w,R2:()=>H,HR:()=>V,KF:()=>k,E2:()=>S,DT:()=>M,l6:()=>E,cI:()=>C,DJ:()=>F,dO:()=>Q,nb:()=>D,ru:()=>G,fs:()=>N,fI:()=>_,Pu:()=>O,gX:()=>U,hE:()=>P});var n=r(94574),i=r(64980),a=r(83150),o=r(79456),s=r(46861),l=r(27029),c=r(8276);n.Ay.div`
  display: flex;
  gap: 10px;
  &.left {
    justify-content: flex-start;
  }
  &.right {
    justify-content: flex-end;
  }
  &.center {
    justify-content: center;
  }
`;const A=n.Ay.div`
  display: flex;
  flex-direction: row;
  position: sticky;
  top: 0;
  height: 40px;
  background: ${c.D.bg.weak};
  font-size: 14px;
  font-weight: 500;
  line-height: 16.94px;
  letter-spacing: -0.006em;
  text-align: left;
  border-radius: 10px;
  padding:4px;
  > label {
    padding: 6px 8px 4px 8px;
    gap: 6px;
    min-height: 26px;
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0.04em;
    text-align: left;
    color: ${c.D.text.soft};
  }
  &.custom {
    width: max-content;
    margin: 0px 0;
  }
  &.tab-menu {
    flex-direction: column;
    position: sticky;
    padding: 10px;
    height: auto;
    gap: 8px;
    background-color:transparent;
    border: 1px solid ${c.D.stroke.soft};
    align-self: baseline;
    margin-top: 15px;
    min-width: 350px;
  }
  &.left {
    margin: 0;
    margin-right: auto;
  }
  &.right {
    margin: 0;
    margin-left: auto;
  }
  &.center {
    margin: 0;
    margin-left: auto;
    margin-right: auto;
  }
`,u=n.Ay.button`
  padding: 10px 20px;
  background-color: transparent;
  gap: 10px;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 16.94px;
  letter-spacing: -0.006em;
  text-align: left;
  svg {
    width: 20px;
    height: 20px;
    padding: 2px;
  }
  &.true {
    background-color: #ccc;
    font-weight: 500;
    border: 0px solid #e2e4e9;
    background-color: ${c.D.bg.white};
    color: ${c.D.text.main};
    border-radius: 10px;
  }
  &.tab-menu {
    font-size: 14px;
    line-height: 16.94px;
    letter-spacing: -0.006em;
    text-align: center;
    border-width: 0px solid transparent;
    padding: 8px;
    margin: 0px;
  }
  &.tab-menu.true {
    background-color: ${c.D.bg.weak};
    color: ${c.D.text.main};
    
    svg {
      color: ${c.D.primary.base};
    }
  }
  border: none;
  font-size: 14px;
  margin-bottom: 0px;
  border-radius: 10px;
  &.nomargin {
    margin: 0;
  }
  cursor: pointer;
  /* &:first-child {
    border-radius: 10px 0 0 10px;
  }
  &:last-child {
    border-radius: 0 10px 10px 0;
  } */
`,d=n.Ay.div`
  border: 0;
  outline: none;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  min-height: 40px;
  height: 40px;
  border-radius: 10px;
  margin: 4px 0px;
  transition: all 1s ease 0s;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
  cursor: pointer;
  font-weight: bold;
  text-wrap: nowrap;
  padding: 0 15px;
  position: relative;
  border: 1px solid #e2e4e9;
  &.custom {
    margin: 0;
    margin-right: 0px;
  }
  &.left {
    margin: 0;
    margin-right: auto;
  }
  &.right {
    margin: 0;
    margin-left: auto;
  }
  &.center {
    margin: 0;
    margin-left: auto;
    margin-right: auto;
  }
  span {
    transition: all 1s ease 0s;
    background: white;
    color: black;
    padding: 0px;
    border-radius: 10px;
    top: 45px;
    z-index: 100;
    font-size: 12px;
  }
  background-color: ${e=>{let{active:t,enableBg:r}=e;return t?null!==r&&void 0!==r?r:"green":"white"}};
  color: ${e=>{let{active:t,enableColor:r}=e;return t?null!==r&&void 0!==r?r:"white":"grey"}};
  svg {
    font-size: 16px;
    /* transform: ${e=>{let{active:t}=e;return t?"scale(1.2)":"scale(1)"}}; */
  }

  &:hover span {
    display: flex;
    width: auto;
  }
`;var f=r(65043),h=r(82550),p=r(46193),g=r(87920),m=r(70579);const v=n.Ay.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  gap: 4px;
  padding: 0;
  margin-bottom: auto;
  &.custom {
    gap: 10px;
    display: flex;
    padding: 0px 0px 30px 0px;
    flex-wrap: wrap;
  }
  &.column {
    flex-direction: column;
    margin: 0 0px;
    padding-top: 5px;
    flex-wrap: nowrap;
  }
  &.tab-content {
    padding: 0 5px;
    margin: 0;
  }
  &.justify {
    justify-content: space-between;
    overflow: auto;
  }
  &.full {
    grid-column: span 4;
  }
  &.dashitem {
    padding: 16px;
    gap: 5px;
    /* height:388px; */
  }
  &.tiles {
    padding: 0;
    gap: 0;
  }
  &.popup {
    padding: 20px;
    gap: 5px;
  }
  &.form {
    background-color: #f6f8fa !important;
    gap: 20px;
    padding-bottom: 20px;
    /* padding-top: 10px; */
  }
  /* .title {
    font-size: 14px;
    font-weight: 700;
    color: #757575;
    svg {
      color: green;
      margin-right: 2px;
    }
  } */
  .title.has {
    font-weight: normal;
    font-size: 10px;
  }
  &.box {
    border: 1px solid #e2e4e9;
    padding: 0.5em 13px;
    border-radius: 10px;
    position: relative;
    div {
      flex-flow: wrap;
      row-gap: 10px;
      height: auto;
    }
  }
  &.row {
    flex-direction: row;
  }
  &.left {
    justify-content: flex-start;
  }
  &.right {
    justify-content: flex-end;
  }
  &.center {
    justify-content: center;
  }
  &.dashboard {
    display: grid;
    grid-template-columns: 1 1 1 1; /* Four equal columns (25% each) */
    gap: 16px; /* Space between items */
    flex-flow: wrap;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(1, 1fr);
  }
  &.top {
    margin-top: 15px;
  }
  &.bottom {
    margin-bottom: 15px;
  }
  &.small-max {
    width: 500px;
    gap: 0;
  }

  &.double {
    grid-column: span 2; /* 50% width */
    width: auto;
  }
  &.quarter {
    grid-column: span 1; /* 25% width */
    width: auto;
  }

  &.half {
    grid-column: span 2; /* 50% width */
    width: auto;
  }

  &.large {
    grid-column: span 3; /* 75% width */
    width: auto;
  }
  &.full {
    grid-column: span 4; /* 100% width */
  }
  &.form-builder-1 {
    min-width: 344px;
    max-width: 344px;
    background: white;
    border-right: 1px solid ${c.D.stroke.soft};
    position: absolute;
    top: 0px;
    bottom: 0;
    /* overflow: auto; */
  }
  &.form-builder-2 {
    width: calc(100% - 688px);
    flex-direction: column;
    position: fixed;
    top: 80px;
    padding: 20px;
    bottom: 0;
    left: 344px;
    right: 344px;
    overflow: auto;
    background: #f6f8fa;
  }
  &.form-builder-3 {
    min-width: 344px;
    max-width: 344px;
    flex-direction: column;
    background: white;
    border-left: 1px solid ${c.D.stroke.soft};
    position: absolute;
    top: 0px;
    right: 0;
    bottom: 0;
    overflow: auto;
  }
  &.form-builder-4 {
    width: calc(100% - 344px);
    flex-direction: column;
    position: fixed;
    top: 80px;
    padding: 20px;
    bottom: 0;
    left: 344px;
    right: 344px;
    overflow: auto;
    background: #f6f8fa;
  }
  &.single {
    grid-column: span 4; /* 50% width */
  }

  &.double {
    grid-column: span 2; /* 50% width */
  }
  &.small {
    grid-column: span 1; /* 25% width */
  }

  &.half {
    grid-column: span 2; /* 50% width */
  }

  &.large {
    grid-column: span 3; /* 75% width */
  }
`,y=n.Ay.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  &.column {
    flex-direction: column;
  }
  &.row {
    flex-direction: row;
  }
  gap: 15px;
  padding: 1em 2em 0.5em;
  margin-bottom: auto;
  &.left {
    justify-content: flex-start;
  }
  &.right {
    justify-content: flex-end;
  }
  &.center {
    justify-content: center;
  }
`,b=n.Ay.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  background: white;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);

    .overlay {
      opacity: 1;
    }
  }

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    display: block;
  }
`,w=n.Ay.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  padding: 16px;
  opacity: 0;
  transition: opacity 0.2s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`,x=n.Ay.div`
  display: flex;
  gap: 8px;
  align-items: center;
`,C=n.Ay.span`
  font-size: 0.875rem;
  font-weight: 500;
  background: rgba(255, 255, 255, 0.2);
  padding: 4px;
  margin: 0 8px 0 0;
  border-radius: 4px;
`,B=e=>{let{icon:t=null,align:r="",isDisabled:n=!1,value:a="Button",ClickEvent:o,type:s="primary"}=e;return(0,m.jsx)(i.A,{icon:t,customClass:`custom ${s} ${r}`,disabled:n,type:"button",name:"submit",value:a,onChange:o})},E=e=>{let{keyValue:t="",info:r,radioButton:n,error:a,defaultValue:o="",align:s="",apiType:l="JSON",selectApi:c=[{id:"1",value:"No Item Added"}],isDisabled:A=!1,value:u="",label:d="Select",onSelect:f=()=>{}}=e;return(0,m.jsx)(i.A,{info:r,radioButton:n,default:o,apiType:l,selectApi:c,customClass:`custom ${s}`,disabled:A,type:"select",error:a,label:d,name:"submit",value:u,onChange:f},t)},k=e=>{let{info:t,checkBox:r,error:n,defaultValue:a="",align:o="",apiType:s="JSON",selectApi:l=[{id:"1",value:"No Item Added"}],isDisabled:c=!1,value:A=[],label:u="Select",onSelect:d=()=>{}}=e;return(0,m.jsx)(i.A,{info:t,default:a,apiType:s,selectApi:l,customClass:`custom ${o}`,disabled:c,type:"multiSelect",checkboxDesign:r,error:n,label:u,name:"submit",value:A,onChange:e=>{const t=A,r=t.findIndex((t=>t===e.id));-1===r?t.push(e.id):t.splice(r,1),d(t)}})},I=e=>{let{align:t="",icon:r="filter",ClickEvent:n}=e;const i=(0,o.d4)((e=>e.themeColors));return(0,m.jsx)(a.dJ,{className:`align custom ${t}`,theme:i,onClick:n,children:(0,m.jsx)(s.A0,{icon:r})})},S=e=>{let{tabs:t}=e;const[r,n]=(0,f.useState)(null),i=(0,f.useCallback)((()=>{const e=t.filter((e=>[void 0,"subList","subTabs","subItem","custom","information","title","gallery"].includes(e.type))).map(((e,t)=>{var r,n,i;return{name:`${e.id}-${t}`,title:e.title,icon:e.icon,type:null!==(r=e.type)&&void 0!==r?r:"jsx",css:"information"===e.type?"info":"",content:e.content,element:null!==(n=e.tabs)&&void 0!==n&&n.length?null:e,tabs:null===(i=e.tabs)||void 0===i?void 0:i.filter((e=>["subList","subTabs","subItem","custom","information","title","gallery"].includes(e.type))).map(((e,r)=>{var n,i;return{name:`${e.id}-${t}-${r}`,title:e.title,type:e.type,icon:e.icon,css:"information"===e.type?"info":"",content:e.content,element:null!==(n=e.tabs)&&void 0!==n&&n.length?null:e,tabs:null===(i=e.tabs)||void 0===i?void 0:i.filter((e=>["subList","subTabs","subItem","custom","information","title","gallery"].includes(e.type))).map(((e,n)=>({name:`${e.id}-${t}-${r}-${n}`,title:e.title,type:e.type,icon:e.icon,css:"information"===e.type?"info":"",element:e,content:e.content})))}}))}}));n(e)}),[t]);return(0,f.useEffect)((()=>{i()}),[i]),r&&(0,m.jsx)(l.A,{className:"custom",tabs:r})},D=e=>{let{tabs:t,selectedTab:r,selectedChange:n=()=>{},direct:i=!1,showContentTab:a}=e;const[l,c]=(0,f.useState)(a?t.filter((e=>"Elements"===e.title)):t);(0,f.useEffect)((()=>{c(a?t.filter((e=>"Elements"===e.title)):t)}),[a,t]);const d=(0,o.d4)((e=>e.themeColors));return((null===l||void 0===l?void 0:l.length)>=1||(null===l||void 0===l?void 0:l.length)>0&&i)&&(0,m.jsx)(A,{className:"custom",children:null===l||void 0===l?void 0:l.map(((e,t)=>(0,m.jsxs)(u,{theme:d,className:r===e.key,onClick:()=>n(e.key),children:[e.icon?(0,m.jsx)(s.A0,{icon:e.icon}):"",e.title]},t)))})},Q=e=>{let{align:t,title:r,switchValue:n,switchChange:i=()=>{},icon:a="open-book"}=e;const l=(0,o.d4)((e=>e.themeColors));return(0,m.jsxs)(d,{className:`custom ${t}`,enableBg:l.theme,enableColor:l.theneForeground,active:n,onClick:()=>i(!n),children:[(0,m.jsx)(s.A0,{icon:a}),r?(0,m.jsx)("div",{children:r}):""]})},_=e=>{let{info:t,error:r,icon:n=null,align:a="",isDisabled:o=!1,value:s="",onChange:l=()=>{},label:c="primary"}=e;return(0,m.jsx)(i.A,{info:t,error:r,label:c,placeholder:c,icon:n,customClass:`custom ${a}`,disabled:o,type:"text",name:"submit",value:s,onChange:e=>l(e.target.value)})},T=e=>{let{info:t,error:r,icon:n=null,align:a="",isDisabled:o=!1,value:s="",onChange:l=()=>{},label:c="primary"}=e;return(0,m.jsx)(i.A,{info:t,error:r,label:c,placeholder:c,icon:n,customClass:`custom ${a}`,disabled:o,type:"color",name:"submit",value:s,onChange:e=>l(e.target.value)})},F=e=>{let{min:t,max:r,info:n,error:a,icon:o=null,align:s="",isDisabled:l=!1,value:c="",onChange:A=()=>{},label:u="primary"}=e;return(0,m.jsx)(i.A,{min:t,max:r,info:n,error:a,label:u,placeholder:u,icon:o,customClass:`custom ${s}`,disabled:l,type:"range",name:"submit",value:c,onChange:e=>A(e.target.value)})},O=e=>{let{success:t="",status:r=!1,info:n,error:a="",text:o="",icon:s=null,align:l="",placeholder:c="",isDisabled:A=!1,value:u="",onChange:d=()=>{},label:f="primary",onClick:h=()=>{},customClass:p="",footnote:g="",footnoteIcon:v=""}=e;return(0,m.jsx)(i.A,{text:o,success:t,status:r,info:n,error:a,label:f,placeholder:null!==c&&void 0!==c?c:f,icon:s,customClass:`custom ${p} ${l}`,disabled:A,type:"buttonInput",name:"submit",footnote:g,footnoteIcon:v,value:u,onClick:h,onChange:e=>d(e.target.value)})},M=e=>{let{addValue:t=1,info:r,error:n,icon:a=null,align:o="",isDisabled:s=!1,value:l="",onChange:c=()=>{},label:A="primary"}=e;return(0,m.jsx)(i.A,{addValue:t,info:r,error:n,label:A,placeholder:A,icon:a,customClass:`custom ${o}`,disabled:s,type:"number",name:"submit",value:l,onChange:e=>c(e.target.value)})},N=e=>{let{info:t,error:r,icon:n=null,align:a="",isDisabled:o=!1,value:s="",onChange:l=()=>{},label:c="primary"}=e;return(0,m.jsx)(i.A,{info:t,error:r,label:c,placeholder:c,icon:n,customClass:`custom ${a}`,disabled:o,type:"textarea",name:"submit",value:s,onChange:e=>l(e.target.value)})},j=e=>{let{info:t,error:r,icon:n=null,align:a="",isDisabled:o=!1,value:s="",onChange:l=()=>{},label:c="primary"}=e;return(0,m.jsx)(i.A,{info:t,error:r,label:c,placeholder:c,icon:n,customClass:`custom ${a}`,disabled:o,type:"datetime",name:"submit",value:s,onChange:e=>l(e.toISOString())})},L=e=>{let{info:t,error:r,icon:n=null,align:a="",isDisabled:o=!1,value:s="",onChange:l=()=>{},label:c="primary"}=e;return(0,m.jsx)(i.A,{info:t,error:r,label:c,placeholder:c,icon:n,customClass:`custom ${a}`,disabled:o,type:"date",name:"submit",value:s,onChange:e=>l(e.toISOString())})},U=e=>{let{info:t,error:r,icon:n=null,align:a="",isDisabled:o=!1,value:s="",onChange:l=()=>{},label:c="primary"}=e;return(0,m.jsx)(i.A,{info:t,error:r,label:c,placeholder:c,icon:n,customClass:`custom ${a}`,disabled:o,type:"time",name:"submit",value:s,onChange:e=>l(e.toISOString())})},R=e=>{let{info:t,customClass:r,error:n,icon:a=null,align:o="",isDisabled:s=!1,value:l=!1,onChange:c=()=>{},label:A="primary"}=e;return(0,m.jsx)(i.A,{info:t,error:n,label:A,placeholder:A,icon:a,customClass:`custom ${o} ${r}`,disabled:s,type:"checkbox",name:"submit",value:l,onChange:e=>c(e)})},P=e=>{let{info:t,title:r="primary",icon:n,line:a=!0}=e;return(0,m.jsx)(i.A,{info:t,line:a,dynamicClass:"custom",icon:n,title:r,type:"title"})},H=e=>{let{info:t,content:r="primary"}=e;return(0,m.jsx)(i.A,{info:t,dynamicClass:"custom",content:r,type:"info"})},z=e=>{let{title:t,value:r="",attribute:n={type:"text"}}=e;const[i]=(0,f.useState)((0,g._W)(n,r));return(0,m.jsxs)(p.Td,{className:"plain",children:[(0,m.jsx)(p.hE,{children:t}),(0,m.jsx)(p.sO,{children:i})]})},V=e=>{let{actions:t,setMessage:r,setLoaderBox:n,titleValue:i,showInfo:a=!1}=e;const o=(0,f.useCallback)((()=>{const e=t.filter((e=>"subList"===e.type||"subItem"===e.type)).map(((e,t)=>{var i,o;return{name:`${e.id}-${t}`,title:e.title,element:(0,m.jsx)(h.A,{showInfo:a,viewMode:null!==(i=e.type)&&void 0!==i?i:"subList",setMessage:r,setLoaderBox:n,parentReference:null===e||void 0===e||null===(o=e.params)||void 0===o?void 0:o.parentReference,referenceId:0,attributes:e.attributes,...e.params})}}));c(e)}),[r,n,t,a]),[s,c]=(0,f.useState)([]);return(0,f.useEffect)((()=>{o()}),[o]),s.length>0&&(0,m.jsx)(l.A,{className:"custom",tabs:s})},G=e=>{let{tabs:t,selectedTab:r,selectedChange:n=()=>{},direct:i=!1,showContentTab:a}=e;const[l,c]=(0,f.useState)(a?t.filter((e=>"Elements"===e.title)):t);(0,f.useEffect)((()=>{c(a?t.filter((e=>"Elements"===e.title)):t)}),[a,t]);const d=(0,o.d4)((e=>e.themeColors));return((null===l||void 0===l?void 0:l.length)>=1||(null===l||void 0===l?void 0:l.length)>0&&i)&&(0,m.jsxs)(A,{className:"custom tab-menu",children:[(0,m.jsx)("label",{children:"SELECT PLATFORM"}),null===l||void 0===l?void 0:l.map(((e,t)=>(0,m.jsxs)(u,{theme:d,className:`tab-menu ${r===e.key}`,onClick:()=>n(e.key),children:[e.icon?(0,m.jsx)(s.A0,{icon:e.icon}):"",e.title]},t)))]})}},64008:(e,t,r)=>{"use strict";r.d(t,{FW:()=>f,Hz:()=>h,Kw:()=>u,VY:()=>d,Y9:()=>c,YW:()=>l,hJ:()=>s,lV:()=>a,wi:()=>A});var n=r(94574),i=r(8276);const a=n.Ay.div`
  flex-direction: column;
  flex: 1;
  position: relative;
  &.popup {
    border: 1px solid rgb(224, 224, 227);
    padding: 1em;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  &.plain {
    border-radius: 10px;
    display: flex;
    gap: 10px;
    margin-top: 10px;
  }
  && {
    .embed & {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
  &.sub {
    flex: 100%;
    padding: 0;
    border: 0;
    border-radius: 0;
  }
  &.double {
    //display: grid;
    //grid-template-columns: 1fr 1fr; /* Two equal-width columns */
    //grid-gap: 10px; /* Adjust the gap between columns if desired */
    display: flex;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    flex-flow: wrap;
  }
  &.single {
    display: flex;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    flex-flow: column;
  }
  @media (max-width: 768px) {
    &.popup {
      border: 0;
    }
  }
`,o=n.i7`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,s=n.Ay.div`
  &.popup {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    padding: 25px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.2);
    overflow: auto;
    z-index: 1001;
  }
  &.plain {
    /* box-shadow: rgb(0 0 0 / 16%) 0px 5px 9px 0px; */
    padding: 20px;
    border-radius: 10px;
    background-color: white;
  }
  && {
    .embed & {
      box-shadow: none;
    }
  }
  @media (max-width: 768px) {
    &.popup {
      width: 100%;
      padding: 0;
      top: 0;
      bottom: 0;
      border-top: 1px solid rgb(224, 224, 227);
    }
    &.plain {
      width: 100%;
      max-width: 400px;
    }
  }
`,l=n.Ay.div`
  &.popup {
    display: flex;
    flex-direction: column;
    display: flex;
    background-color: white;
    border-radius: 10px;
    width: 700px;
    min-width: 200px;
    max-width: 70%;
    height: auto;
    animation: ${o} 1s ease-in-out;
    animation-duration: 0.2s;
    margin: auto;
    padding: 1em;
  }
  &.full {
    display: flex;
    flex-direction: column;
    display: flex;
    background-color: white;
    border-radius: 10px;
    width: 60%;
    min-width: 200px;
    max-width: 70%;
    height: auto;
    animation: ${o} 1s ease-in-out;
    animation-duration: 0.2s;
    margin: auto;
    padding: 1em;
  }
  &.single {
    min-width: 250px;
    width: 400px;
    max-width: 100%;
  }
  &.plain {
    min-width: 250px;
    width: 400px;
    max-width: 100%;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    &.popup {
      width: 100%;
      position: relative;
      top: 0;
      padding: 0;
      max-width: 100%;
    }
    &.plain {
    }
  }
`,c=n.Ay.div`
  text-align: left;
  padding: 0.5em 0 0.5em;
  font-weight: 500;
  font-size: 1.5em;
  &.popup {
    text-align: center;
  }
  &.plain {
    text-align: center;
  }
  bold {
    font-weight: 700;
  }
  @media (max-width: 768px) {
    &.popup {
      position: sticky;
      padding: 1em 0 1em;
    }
    font-size: 18px;
    top: 0;
    background: white;
    z-index: 1;
    border-bottom: 1px solid rgb(224, 224, 227);
    &.plain {
      text-align: center;
      border-bottom: 0px solid rgb(224, 224, 227);
    }
  }
`,A=n.Ay.div`
  display: flex;
  justify-content: flex-end;
  justify-content: center;
  margin-top: 10px;
  &.left {
    justify-content: left;
  }
  @media (max-width: 768px) {
    position: sticky;
    bottom: 0;
    background: white;
    padding-bottom: 10px;
    /* border-top: 1px solid rgb(224, 224, 227); */
  }
`,u=n.Ay.div`
  display: flex;
  gap: 4px;
  margin: 0;
  color: ${i.D.state.error};
  font-size: 12px;
  font-weight: 400;
  padding: 2px 0px 2px 0px;
  svg {
    height: 16px;
    width: 16px;
    padding: 1.5px;
  }
  &.info {
    right: 20px;
  }
  &.margin {
    right: 30px;
  }
  &.infomargin {
    right: 50px;
  }
  &.image {
    position: inherit;
    max-width: 100%;
    text-align: center;
    font-weight: normal;
  }
  &.success {
    color: green;
  }
  &.mixed {
    position: inherit;
    background: transparent;
    width: auto;
    max-width: 100%;
    white-space: pre-wrap;
    padding: 0px;
    /* border-left: 1px solid #d7d7d7; */
    /* margin: 7px 2px 0; */
    border-radius: 0;
    right: auto;
  }
`,d=n.Ay.div`
  flex: 1 1 100%;
  margin: 0px 0;
  display: flex;
  text-align: center;
  justify-content: center;
  margin-bottom: 40px;
  && {
    .popup & {
      margin: 0 0 10px;
      justify-content: center;
      text-align: justify;
      border: 1px solid rgb(224, 224, 227);
      border-radius: 10px;
      padding: 10px 20px;
      font-size: 14px;
      /* background-color: #e7f2f9; */
    }
  }

  @media (max-width: 768px) {
    && {
      .popup & {
        border: 0px solid rgb(224, 224, 227);
        background-color: #e7f2f9;
        border-radius: 10px;
        margin: 15px 15px 0px;
        padding: 10px;
      }
    }
  }
`,f=n.Ay.div`
  background: transparent;
  transition: 0.2s;
  &:hover {
    transform: scale(1.3);
  }
`,h=n.Ay.aside`
  position: relative;
  width: 100%;
  box-sizing: border-box;
  padding: 10px 10px;
  outline: none !important;
  width: 100%;
  border-radius: 10px;
  border: 0px solid Black;
  margin: 0 0px 10px 0;
  padding-left: 1em;
  font-weight: 700;
  box-shadow: none;
  -webkit-appearance: none;
  -webkit-transition: all 0.2s ease-out 0s;
  transition: all 0.2s ease-out 0s;
  color: #4f4f4f;
  background: #e7f2f9;
  text-align: center;
  transition: 0.5s;
  &.close {
    position: absolute;
    right: 10px;
    top: 15px;
    background: transparent;
    width: 25px;
    height: 20px;
    padding: 1px;
    color: black;
  }
  button {
    transition: 0.5s;
    background-color: transparent;
    border: 0;
    display: flex;
    flex-direction: column;
    margin: auto;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    svg {
      font-size: 20px;
      margin-bottom: 15px;
    }
  }
`},19787:(e,t,r)=>{"use strict";r.d(t,{DC:()=>s,LE:()=>a,i$:()=>o});var n=r(86178),i=r.n(n);const a=e=>i()(e).isValid()?i()(e).format("MMM DD, YYYY hh:mm A"):"--",o=e=>i()(e).isValid()?i()(e).format("MMM DD, YYYY"):"--",s=e=>i()(e).isValid()?i()(e).format("hh:mm A"):"--"},62727:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});r(65043);var n=r(8276),i=r(64008),a=r(46861),o=r(70579);const s=e=>{let{error:t,info:r,className:s="",icon:l="info"}=e;return(0,o.jsx)(o.Fragment,{children:(null===t||void 0===t?void 0:t.length)>0&&(0,o.jsxs)(i.Kw,{className:`${(null===r||void 0===r?void 0:r.length)>0?"info":""} ${n.t.formInputView} ${s}`,children:[l.length>0&&(0,o.jsx)(a.A0,{icon:l})," ",(0,o.jsx)("div",{children:t})]})})}},81775:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});r(65043);var n=r(17118),i=r(46861),a=r(70579);const o=e=>{let{footnote:t,footnoteIcon:r,className:o=""}=e;return(null===t||void 0===t?void 0:t.length)>0?(0,a.jsxs)(n.DH,{className:o,children:[(null===r||void 0===r?void 0:r.length)>0&&(0,a.jsx)(i.A0,{icon:r}),(0,a.jsxs)("span",{children:[" ",t]})]}):""}},8075:(e,t,r)=>{"use strict";r.d(t,{F:()=>o,z:()=>s});r(65043);var n=r(17118),i=r(46861),a=r(70579);const o=e=>{let{icon:t,title:r,description:o="",dynamicClass:s="",line:l=!0}=e;return(0,a.jsxs)(n.hl,{className:`sub title ${s} ${l?"line":""} ${l?"margin":""} `,children:[(null===r||void 0===r?void 0:r.length)>0&&(0,a.jsxs)("div",{children:[t?(0,a.jsx)(i.A0,{icon:t}):null,r]}),o.length>0&&(0,a.jsx)("p",{dangerouslySetInnerHTML:{__html:o}})]})},s=e=>{let{icon:t,title:r,description:o="",dynamicClass:s="",line:l=!0}=e;return(0,a.jsxs)(n.hl,{className:`title ${s} ${l?"line":""} ${l?"margin":""} `,children:[(null===r||void 0===r?void 0:r.length)>0&&(0,a.jsxs)("div",{children:[t?(0,a.jsx)(i.A0,{icon:t}):null,r]}),o.length>0&&(0,a.jsx)("p",{dangerouslySetInnerHTML:{__html:o}})]})}},64980:(e,t,r)=>{"use strict";r.d(t,{A:()=>ge});var n=r(65043),i=r(79456),a=r(36824),o=r(57658),s=r(46861),l=r(41137),c=r(15004),A=r(30791),u=r(87920),d=r(38520),f=r(41210),h=r(9667),p=r(17118),g=r(70579);const m=function(e){let{info:t,customClass:r=""}=e;const[i,a]=(0,n.useState)(!1),o=(0,n.useRef)(null);return(0,n.useEffect)((()=>{function e(e){o.current&&!o.current.contains(e.target)&&a(!1)}return document.addEventListener("click",e),()=>{document.removeEventListener("click",e)}}),[]),(null===t||void 0===t?void 0:t.length)>0?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(p.Jn,{className:r,onClick:()=>{a(!i)},ref:o,children:(0,g.jsx)(s.A0,{icon:"info"})}),i&&(0,g.jsx)(p.w4,{dangerouslySetInnerHTML:{__html:t}})]}):""};var v=r(69135),y=r(62727),b=r(81775),w=r(94574),x=r(8276);const C=w.Ay.label`
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  max-width: 600px;
  width: 100%;
  padding: 16px;
  background: white;
  border: 1px solid ${e=>e.$checked?x.D.primary.base:"#E9ECEF"};
  border-radius: 12px;
  cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
  transition: all 0.2s ease;
  opacity: ${e=>e.$disabled?.5:1};
  flex-grow: 1;
  flex-basis: 250px;
  max-width: 360px;
  &:hover {
    ${e=>!e.$disabled&&!e.$checked&&`\n      border-color: ${x.D.primary.base};\n    `}
  }

  &:focus-visible {
    outline: 1px solid ${x.D.primary.base};
    outline-offset: 2px;
  }
`,B=w.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: #f8f9fa;
  border-radius: 50%;

  svg {
    width: 25px;
    height: 25px;
    color: ${x.D.primary.base};
  }
`,E=w.Ay.div`
  flex: 1;
  min-width: 0;
  max-width: calc(100% - 20px);
  justify-content: left;
  text-align: left;
  gap: 5px;
  display: flex;
  flex-direction: column;
`,k=w.Ay.div`
  color: ${x.D.text.main};
  font-size: 14px;
  font-weight: 500;
  line-height: 16.94px;
  letter-spacing: -0.006em;
  text-align: left;
`,I=w.Ay.div`
  color: ${x.D.text.sub};
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
`,S=w.Ay.div`
    display: flex;
  right: 20px;
  top: 50%;
  width: 20px;
  height: 20px;
  border: 1px solid ${e=>e.$checked?"#4263EB":"#CED4DA"};
  border-radius: ${e=>"radio"===e.type?"50%":"4px"};
  background: ${e=>e.$checked?"#4263EB":"transparent"};
  transition: all 0.2s ease;

  align-items: center;
  justify-content: center;

  &.radio {
    border-radius: 50%;
  }

  &.radio::after {
    content: "";
    display: ${e=>e.$checked?"block":"none"};
    width: ${e=>"radio"===e.type?"12px":"14px"};
    height: ${e=>"radio"===e.type?"12px":"14px"};
    background: ${e=>"radio"===e.type?"white":"transparent"};
    border-radius: ${e=>"radio"===e.type?"50%":"0"};
  }

  svg {
    display: ${e=>e.$checked&&"checkbox"===e.type?"flex":"none"};
    color: white;
    width: 14px;
    height: 14px;
  }
`,D=w.Ay.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`,Q=e=>{var t;let{id:r,type:n="radio",name:i,value:a,checked:o=!1,onChange:l,option:c,disabled:A=!1}=e;return(0,g.jsxs)(C,{$checked:o,$disabled:A,onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),A||null===l||void 0===l||l(c,r,n))},tabIndex:A?-1:0,role:"radio"===n?"radio":"checkbox","aria-checked":o,"aria-disabled":A,children:[(0,g.jsx)(D,{type:n,name:i,value:a,checked:o,onChange:l,disabled:A,"aria-hidden":"true"}),c.icon&&(0,g.jsx)(B,{children:(0,g.jsx)(s.A0,{icon:c.icon})}),(0,g.jsxs)(E,{children:[(0,g.jsx)(k,{children:c.value}),(null===(t=c.description)||void 0===t?void 0:t.length)>0&&(0,g.jsx)(I,{children:c.description})]}),"toggle"===n?(0,g.jsx)(ge,{customClass:"auto",type:"toggle"}):(0,g.jsxs)(S,{$checked:o,type:n,className:n,children:["checkbox"===n&&o&&(0,g.jsx)(s.A0,{icon:"tick"})," "]})]})};var _=r(75374);const T=function(e){var t,r,p,w,x;const{addNew:C,setMessage:B,setLoaderBox:E}=e,[k,I]=(0,n.useState)(!1),[S,D]=(0,n.useState)(!1),[T,F]=(0,n.useState)({}),[O]=(0,n.useState)(e.default),[M]=(0,n.useState)(null!==(t=e.preFill)&&void 0!==t?t:[]),[N]=(0,n.useState)(null!==(r=e.filter)&&void 0!==r?r:{}),[j,L]=(0,n.useState)(e.value),[U,R]=(0,n.useState)(!1),[P,H]=(0,n.useState)(e.placeholder),[z,V]=(0,n.useState)([]),[G,Y]=(0,n.useState)([]),[W]=(0,n.useState)(e.radioButton?"radio":null!==(p=e.selectType)&&void 0!==p?p:"dropdown"),K=(0,i.d4)((t=>t.select[e.selectApi])),q=(0,i.wA)(),{t:Z}=(0,l.Bd)(),J=e=>{e.stopPropagation(),D(!S)},[X,$]=(0,n.useState)(""),[ee,te]=(0,n.useState)(""),re=t=>{if(t.stopPropagation(),e.apiSearch)ne(e.updateValue,!0,"",t.target.value.toString()),te(t.target.value);else{$(t.target.value);const e=z.filter((e=>{var r;return null===(r=e.value)||void 0===r?void 0:r.toLowerCase().includes(t.target.value.toString().toLowerCase())}));Y(e),""===t.target.value.toString()&&Y([])}},ne=(0,n.useCallback)((async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};if(arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&"API"===e.apiType){const i=t=>{V([...M,...t]),R(!0);try{const r=t.filter((e=>e.id===j))[0].value;H(r||e.placeholder)}catch{}};await(0,a.bQ)({...t,searchKey:r,limit:e.apiSearch?20:0,...n,...N},`${e.selectApi}`).then((t=>{200===t.status?(i(t.data),q((0,c.p)(t.data,e.selectApi))):(t.status,R(!1))})).catch((e=>{R(!1)}))}else if("API"===e.apiType){const r=t=>{V([...M,...t]),R(!0);try{const r=t.filter((e=>e.id===j))[0].value;H(r||e.placeholder)}catch{}};K?r(K):U||await(0,a.bQ)({...t,...N},`${e.selectApi}`).then((t=>{200===t.status?(r(e.selectApi),q((0,c.p)(t.data,e.selectApi))):(t.status,R(!1))})).catch((e=>{R(!1)}))}else if("CSV"===e.apiType){const t=e.selectApi.split(",").map((e=>({id:e.trim(),value:e.trim().charAt(0).toUpperCase()+e.trim().slice(1)})));V([...M,...t]),R(!0);try{const r=t.filter((e=>e.id===j))[0].value;H(r||e.placeholder)}catch{}}else if("JSON"===e.apiType){const t=e.selectApi;V([...M,...t]),R(!0);try{const r=t.filter((e=>e.id===j))[0].value;H(r||e.placeholder)}catch{}}}),[e.apiType,M,e.selectApi,N,e.placeholder,e.apiSearch,U,j,K,q]),[ie,ae]=(0,n.useState)({});(0,n.useEffect)((()=>{var t;let r={};null===(t=e.params)||void 0===t||t.forEach((e=>{r[e.name]=e.value}));const n=JSON.stringify(r)!==JSON.stringify(ie);Object.keys(r).length>0&&n?(ae(r),ne(r,!0)):ne(r)}),[e.selectApi,e.params,ne,ie]);const oe=(0,n.useRef)(null);(0,n.useEffect)((()=>{if(e.updateOn){if(!((e,t)=>{const r=Object.keys(null!==e&&void 0!==e?e:{}),n=Object.keys(null!==t&&void 0!==t?t:{});if(r.length!==n.length)return!1;for(let i of r)if(e[i]!==t[i])return!1;return!0})(T,e.updateValue)){var t;F(e.updateValue);let r={};null===(t=e.params)||void 0===t||t.forEach((t=>{var n,i;t.value||(t.value=null!==(n=null===(i=e.formValues)||void 0===i?void 0:i[t.name])&&void 0!==n?n:"");r[t.name]=t.value})),ne(e.updateValue,!0,e.updateOn,"",r)}}}),[e.updateValue,T,ne,e.updateOn,e.params,e.formValues]),(0,n.useEffect)((()=>{function t(t){oe.current&&!oe.current.contains(t.target)&&(e.listBox?(D(!0),R(!0)):D(!1))}return document.addEventListener("click",t),()=>{document.removeEventListener("click",t)}}),[e.listBox,e.customClass]);const se=(()=>{if(oe.current){const e=oe.current.getBoundingClientRect(),t=200,r=window.innerHeight-e.bottom,n=e.top;return r>=t?"down":n>=t?"up":"down"}return"down"})(),le=()=>{var t,r,i,a,l;return(0,g.jsxs)(o.aL,{theme:e.theme,className:`custom-select ${e.listBox?"list-box":""} ${S?"open":"close"} ${e.customClass} ${e.dynamicClass}`,children:[(0,g.jsx)(m,{customClass:"info-select",info:e.info}),(null===(t=e.showLabel)||void 0===t||t)&&(0,g.jsx)(v.A,{label:e.label,required:e.required,sublabel:e.sublabel,error:null!==(r=e.error)&&void 0!==r?r:""}),(0,g.jsxs)("button",{disabled:e.disabled,ref:oe,className:""+(null!==j&&(null===(i=e.value)||void 0===i?void 0:i.length)>0?"has":""),onClick:J,children:[0===(null===(a=e.value)||void 0===a?void 0:a.toString().length)?(0,g.jsx)("span",{children:Z(e.placeholder)}):(0,g.jsx)("span",{children:P}),!e.disabled&&(0,g.jsx)(s.k5,{className:"down"}),(0,g.jsx)("ul",{className:`options ${S?se:"hide"}`,children:(S&&U||U&&e.listBox)&&(0,g.jsxs)(g.Fragment,{children:[e.search&&!e.disableSearch&&z.length>8&&(0,g.jsx)(A.A,{active:!0,className:"select",title:"Search",theme:e.theme,placeholder:"Search",value:X,onChange:re},`search-inside${e.key}`),e.apiSearch&&(0,g.jsx)(A.A,{active:!0,className:"select "+e.customClass,title:"Search",theme:e.theme,placeholder:`Search ${e.placeholder}`,value:ee,onChange:re},"search-api-2"),z.length>0&&(X.length>0?G:z).map((t=>{var r,i,a;return(0,g.jsxs)("li",{value:t.id===j,className:t.id===j?"selected":"",onClick:r=>{var n;r.stopPropagation();null!==(n=e.listBox)&&void 0!==n&&n?(e.onSelect(t,e.id,e.type),H(t.value),L(t.id)):(J(r),j===t.id?(e.onSelect({id:O,value:e.placeholder},e.id,e.type),H(e.placeholder),L(O)):(e.onSelect(t,e.id,e.type),H(t.value),L(t.id)))},children:[(0,g.jsxs)("span",{children:[e.tags?(0,g.jsxs)(o.GY,{children:[e.iconImage&&(0,g.jsx)(o.t_,{onError:e=>{e.target.src=f.hz},src:"https://event-manager.syd1.cdn.digitaloceanspaces.com/"+(e.iconImage.collection.length>0?null!==(r=null===(i=t[e.iconImage.collection])||void 0===i?void 0:i[e.iconImage.item])&&void 0!==r?r:"":t[e.iconImage.item])}),(0,g.jsxs)(h.Yq,{children:[(0,g.jsx)(o.WA,{className:"title",children:e.displayValue?t[e.displayValue]:t.value}),(0,g.jsx)(o.LY,{children:e.tags.map((e=>{var r,i;return(0,g.jsx)(n.Fragment,{children:(0,g.jsx)(o.v_,{children:`${e.title.length?e.title+": ":""}${(0,u._W)(e,e.collection.length>0?null!==(r=null===(i=t[e.collection])||void 0===i?void 0:i[e.item])&&void 0!==r?r:"":t[e.item])}`})},e.item)}))})]})]}):e.displayValue?t[e.displayValue]:t.icon?(0,g.jsxs)(n.Fragment,{children:[(0,g.jsx)(s.A0,{icon:null!==(a=t.icon)&&void 0!==a?a:"info"}),(0,g.jsx)("span",{children:t.value})]}):t.value,e.viewButton&&(0,g.jsx)(o.$n,{onClick:r=>{var n;r.stopPropagation(),null===(n=e.viewButton)||void 0===n||n.callback(t)},children:"View Menu"})]}),t.id===j&&(0,g.jsx)(s.A0,{className:"tick",icon:"checked"})]},t.id)})),U&&0===z.length&&(0,g.jsx)("li",{onClick:()=>{var t;let r={};null===(t=e.params)||void 0===t||t.forEach((t=>{var n,i;t.value||(t.value=null!==(n=null===(i=e.formValues)||void 0===i?void 0:i[t.name])&&void 0!==n?n:"");r[t.name]=t.value})),ne(e.updateValue,!0,e.updateOn,"",r)},children:"No Data Found. Click here to Refresh Data!"}),C&&(null===(l=C.attributes)||void 0===l?void 0:l.length)>0&&(0,g.jsxs)("li",{onClick:()=>I(!0),children:[(0,g.jsx)(s.A0,{icon:"add"}),"Add New"]})]})})]}),(0,g.jsx)(b.A,{...e}),(0,g.jsx)(y.A,{error:e.error,info:e.info})]},e.key)};return C&&(null===(w=C.attributes)||void 0===w?void 0:w.length)>0&&!E?"setLoaderBox":(0,g.jsxs)(n.Fragment,{children:[(()=>{switch(W){case"radio":return(()=>{var t,r;return(0,g.jsxs)(d.S$,{ref:oe,className:`column box ${e.customClass} ${e.dynamicClass}`,children:[(0,g.jsx)(m,{info:e.info}),(null===(t=e.showLabel)||void 0===t||t)&&(0,g.jsx)(v.A,{label:e.label,required:e.required,sublabel:e.sublabel,error:null!==(r=e.error)&&void 0!==r?r:""}),(0,g.jsxs)(d.S$,{ref:oe,className:"left",children:[(0,g.jsx)(m,{info:e.info}),z.length>0?(X.length>0?G:z).map((t=>{const r=t.id.toString()===j.toString();return(0,g.jsx)(d.Sc,{isDisabled:e.disabled,align:"left",customClass:"round",label:e.displayValue?t[e.displayValue]:t.value,onChange:r=>{var n;null!==(n=e.listBox)&&void 0!==n&&n?(e.onSelect(t,e.id,e.type),H(t.value),L(t.id)):j===t.id?(e.onSelect({id:O,value:e.placeholder},e.id,e.type),H(e.placeholder),L(O)):(e.onSelect(t,e.id,e.type),H(t.value),L(t.id))},value:r},t.id)})):null]}),(0,g.jsx)(b.A,{...e}),(0,g.jsx)(y.A,{error:e.error,info:e.info})]})})();case"dropdown":default:return le();case"tabs":return(0,g.jsx)(o.tU,{className:"tabs",children:z.map((t=>(0,g.jsx)("div",{onClick:r=>{var n;null!==(n=e.listBox)&&void 0!==n&&n?(e.onSelect(t,e.id,e.type),H(t.value),L(t.id)):(J(r),j===t.id?(e.onSelect({id:O,value:e.placeholder},e.id,e.type),H(e.placeholder),L(O)):(e.onSelect(t,e.id,e.type),H(t.value),L(t.id)))},className:j===t.id?"active tab":"tab",children:t.value},t.id)))});case"card":return(()=>{var t;return(0,g.jsxs)(o.aL,{theme:e.theme,className:`custom-select ${S?"open":"close"} ${e.customClass}  ${e.dynamicClass}`,children:[(0,g.jsx)(m,{className:"info-select",info:e.info}),(0,g.jsx)(v.A,{label:e.label,required:e.required,sublabel:e.sublabel,error:null!==(t=e.error)&&void 0!==t?t:""}),(0,g.jsx)(o.CW,{children:z.length>0?(X.length>0?G:z).map((t=>{const r=t.id.toString()===(null===j||void 0===j?void 0:j.toString());return(0,g.jsx)(Q,{parentType:e.type,id:e.id,checked:r,type:"radio",onChange:()=>{j===t.id?(e.onSelect({id:O,value:e.placeholder},e.id,e.type),H(e.placeholder),L(O)):(e.onSelect(t,e.id,e.type),H(t.value),L(t.id))},option:t},t.id)})):null})]})})()}})(),k&&C&&(null===(x=C.attributes)||void 0===x?void 0:x.length)>0&&(0,g.jsx)(_.A,{useCaptcha:!1,useCheckbox:!1,customClass:"",description:"",formValues:{},formMode:"center",formType:"post",header:"Add New "+e.label,css:"",formInput:C.attributes,submitHandler:async t=>{(async t=>{var r;E(!0);let n={};null===(r=e.params)||void 0===r||r.forEach((t=>{var r,i;t.value||(t.value=null!==(r=null===(i=e.formValues)||void 0===i?void 0:i[t.name])&&void 0!==r?r:""),n[t.name]=t.value}));const i=Object.keys(t).reduce(((e,r)=>(r.includes("Array")||(e[r]=t[r]),e)),{});await(0,a.LS)({...n,...i},C.api).then((t=>{var r;if(200===t.status)(null===t||void 0===t||null===(r=t.data.customMessage)||void 0===r?void 0:r.length)>0?B({type:1,content:null===t||void 0===t?void 0:t.data.customMessage,proceed:"Okay",icon:"success"}):B({type:1,content:`The '${e.label}' saved successfully!`,proceed:"Okay",icon:"success"}),I(!1),ne(e.updateValue,!0,e.updateOn,"",n);else if(404===t.status){var i;(null===t||void 0===t||null===(i=t.data.customMessage)||void 0===i?void 0:i.length)>0?B({type:1,content:null===t||void 0===t?void 0:t.data.customMessage,proceed:"Okay",icon:"error"}):B({type:1,content:"User not found!",proceed:"Okay",icon:"error"})}else{var a;(null===(a=t.customMessage)||void 0===a?void 0:a.length)>0?B({type:1,content:t.customMessage,proceed:"Okay"}):B({type:1,content:"Something went wrong!",proceed:"Okay",icon:"error"})}E(!1)})).catch((e=>{console.log(e),B({type:1,content:e.message+"Something went wrong!",proceed:"Okay",icon:"success"}),E(!1)}))})(t)},button:"Submit",isOpenHandler:e=>{I(!1)},isOpen:!0,plainForm:!0},"add-new-"+e.name)]})},F=w.Ay.div`
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
`,O=w.Ay.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  &:disabled {
    background: ${x.D.bg.weak};
    color: ${x.D.text.sub};
    cursor: not-allowed;
    border: 0;
  }
`,M=w.Ay.span`
  position: relative;
  box-shadow: 0px 2px 2px 0px #1b1c1d1f;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  svg {
    color: ${e=>e.disabled?x.D.bg.sub:x.D.stroke.white};
    font-size: 10px;
  }
  background: ${x.D.bg.weak};
  border: ${e=>e.checked?(e.disabled,x.D.bg.sub):"1px solid "+x.D.stroke.soft};
  background-color: ${e=>e.checked?e.disabled?x.D.bg.sub:x.D.primary.base:e.disabled?x.D.bg.sub:x.D.bg.white};
  &.checkbox {
    min-width: 20px;
    min-height: 20px;
    border-radius: 7px;
    padding: 0px;
  }
  &.round {
    min-width: 20px;
    min-height: 20px;
    border-radius: 50%;
    border: ${e=>e.checked?"5px solid "+(e.disabled?x.D.stroke.sub:x.D.primary.base):"1px solid "+x.D.stroke.soft};
    background-color: ${e=>(e.checked,x.D.bg.white)};
    box-shadow: 0px 2px 2px 0px #1b1c1d1f;
    svg {
      display: none;
    }
  }
`,N=e=>{let{name:t,label:r,checked:n,onChange:i,theme:a,className:o="",disabled:l,required:c=!1,sublabel:A=""}=e;return(0,g.jsxs)(F,{children:[(0,g.jsx)(O,{disabled:l,type:"checkbox",checked:n,onChange:!l&&i}),(0,g.jsx)(M,{disabled:l,className:o,theme:a,checked:n,children:n&&(0,g.jsx)(s.A0,{icon:"checked"})}),(0,g.jsx)(v.A,{required:c,sublabel:A,label:r})]})},j=w.Ay.div`
  gap: 5px;
  display: flex;
  flex-direction: column;
  /* max-width: 350px; */
  &.disabled {
    display: none;
  }
  position: relative;
  width: 100%;
  &.half {
    width: 40%;
  }
  grid-column: span 4; /* 50% width */
  &.double {
    grid-column: span 2; /* 50% width */
    width: auto;
  }
  &.quarter {
    grid-column: span 1; /* 25% width */
    width: auto;
  }

  &.half {
    grid-column: span 2; /* 50% width */
    width: auto;
  }

  &.large {
    grid-column: span 3; /* 75% width */
    width: auto;
  }
  &.full {
    grid-column: span 4; /* 100% width */
    width: auto;
  }
  @media screen and (max-width: 768px) {
    &.half:nth-child(odd) {
      width: 100%;
      margin-left: 0px;
    }
    &.half:nth-child(even) {
      width: 100%;
      margin-right: 0px;
    }
    &.filter {
      width: calc(50% - 7px);
    }
  }
  && {
    /* Styles to apply when parent has class shrink */
    .nowrap & {
      margin-right: 10px;
      margin-left: 0;
    }
  }
  button {
    outline: none !important;
    width: 100%;
    box-sizing: border-box;
    padding: 10px 10px 10px 12px;
    outline: none !important;
    width: 100%;
    border-radius: 10px;
    border: 1px solid ${x.D.stroke.soft};
    height: 40px;
    font-weight: 400;
    transition: all 0.2s ease-out 0s;
    color: ${x.D.text.soft};
    background: ${x.D.bg.white};
    text-align: left;
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
  }
  &.filter button {
    min-height: 40px;
    height: 40px;
    margin: 4px 0;
    min-width: 150px;
    background: white;
  }
  &.filter {
    margin-right: 0.5em;
  }
  &.auto {
    margin-right: auto;
  }
  button label {
    display: none;
  }
  button label svg {
    color: green !important;
    transform: rotate(0deg) !important;
  }
  button.has {
    /* padding-top: 15px; */
    color: ${x.D.text.main};
  }

  button.has label {
    position: absolute;
    display: block;
    font-weight: normal;
    top: 5px;
    left: 13px;
    font-size: 10px;
  }
  button.has svg:first-child {
    margin-right: 5px;
  }
  &.filter button.has label {
    font-size: 10px;
    top: 10px;
  }
  &.filter .options {
    top: 50px;
  }
  &.open svg.down {
    transition: all 0.2s ease-out 0s;
    transform: rotate(180deg);
    color: black;
  }
  button svg {
    margin-left: auto;
    margin-right: 1em;
  }
  .options {
    opacity: 1;
    pointer-events: auto;
    -webkit-transform: scale(1) translateY(0);
    -ms-transform: scale(1) translateY(0);
    transform: scale(1) translateY(0);
    max-height: 250px;
    min-height: 70px;
    overflow-y: auto;
    min-width: 100%;
    background-color: white;
    border: 1px solid rgb(224, 224, 227);
    border-radius: 12px;
    list-style: none;
    padding: inherit;
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 1004;
    margin: 0px;
    top: calc(100% + 5px);
    padding: 0;
    left: 0;
    transition: all 1s ease-out 0s;
    &.up {
      bottom: calc(100% + 5px);
      top: auto;
    }
  }
  .options li.true {
    background: rgb(234, 234, 234);
    color: #0f0f0f;
    font-weight: bold;
    border: 1px solid rgb(224, 224, 227);
    justify-content: left;
    display: flex;
    align-items: center;
  }
  &.list .options {
    flex-direction: row;
    flex-wrap: wrap;
  }
  .options li {
    cursor: pointer;
    border: 1px solid rgb(224, 224, 227);
    padding: 5px 10px;
    margin: 0 00px;
    text-align: left;
  }
  .options li svg {
    color: ${e=>e.theme.lightSecForeground};
    margin-left: 10px;
    transform: rotate(0deg);
  }
  .options li:last-child {
    /* border-bottom: 0px solid rgb(224, 224, 227); */
  }
  .options li:hover {
    background: rgb(234, 234, 234);
    color: #0f0f0f;
  }
  button:disabled {
    background: ${x.D.bg.weak};
    color: ${x.D.text.sub};
    cursor: not-allowed;
    border: 0;
  }
`,L=(w.Ay.label`
  padding: 10px;
  font-weight: bold;
`,w.Ay.div`
  margin: 5px 5px 0;
  border-radius: 10px;
  font-size: 14px;
  width: -webkit-fill-available;
  &:nth-child(2) {
    margin-top: 0;
  }
  && {
    .list & {
      margin: 5px 5px 0px;
      border-radius: 10px;
      font-size: 14px;
      display: flex;
      flex-flow: wrap;
      gap: 0px 5px;
    }
  }
  li {
    border-radius: 10px;
    margin-bottom: 5px !important;
  }
`);var U=r(83150);const R=function(e){var t,r,f,h,p,w,x;const[C]=(0,n.useState)(e.radioButton?"checkbox":null!==(t=e.selectType)&&void 0!==t?t:"dropdown"),[B,E]=(0,n.useState)(!1),[k,I]=(0,n.useState)(null),[S,D]=(0,n.useState)("_"),[_,T]=(0,n.useState)(!1),[F,O]=(0,n.useState)(""),[M,N]=(0,n.useState)([]),[R,P]=(0,n.useState)([]),H=(0,i.d4)((t=>t.select[e.selectApi])),z=(0,i.wA)(),{t:V}=(0,l.Bd)(),G=()=>{E(!B)},[Y,W]=(0,n.useState)(""),K=(0,n.useCallback)((async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};const i=t=>{if(!k){const r=(e.value||[]).map((e=>{var r;const n=t.find((t=>t.id.toString()===(null===e||void 0===e?void 0:e.toString())));return n?{id:null!==(r=n.id)&&void 0!==r?r:"",value:n.value}:e?{id:null!==e&&void 0!==e?e:"",value:"Other"}:null})).filter(Boolean);I(r)}N(t),T(!0)};if(arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&"API"===e.apiType){const i=t=>{N(t),T(!0);try{var r;const n=null===(r=t.filter((e=>e.id===k))[0])||void 0===r?void 0:r.value;O(n||e.placeHolder)}catch(y){console.log(y)}};await(0,a.bQ)({...t,searchKey:r,limit:e.apiSearch?20:0,...n},`${e.selectApi}`).then((t=>{if(200===t.status){i(t.data);const r=(e.value||[]).map((e=>{var r;const n=t.data.find((t=>t.id.toString()===(null===e||void 0===e?void 0:e.toString())));return n?{id:null!==(r=n.id)&&void 0!==r?r:"",value:n.value}:e?{id:null!==e&&void 0!==e?e:"",value:"Other"}:null})).filter(Boolean);I(r),z((0,c.p)(t.data,e.selectApi))}else t.status,T(!1)})).catch((e=>{T(!1)}))}else if("API"===e.apiType){if(H)i(H);else if(!_)try{const r=await(0,a.bQ)({...t},e.selectApi);200===r.status?(i(r.data),z((0,c.p)(r.data,e.selectApi))):T(!1)}catch(y){T(!1)}}else if("CSV"===e.apiType){const t=e.selectApi.split(",").map((e=>({id:e.trim(),value:e.trim().charAt(0).toUpperCase()+e.trim().slice(1)})));N(t),T(!0)}else"JSON"===e.apiType&&(i(e.selectApi),N(e.selectApi),T(!0))}),[e.apiType,e.apiSearch,e.placeHolder,e.selectApi,k,e.value,_,H,z]);(0,n.useEffect)((()=>{if(e.updateOn){if(!((e,t)=>{const r=Object.keys(null!==e&&void 0!==e?e:{}),n=Object.keys(null!==t&&void 0!==t?t:{});if(r.length!==n.length)return!1;for(let i of r)if(e[i]!==t[i])return!1;return!0})(S,e.updateValue)){var t;D(e.updateValue);let r={};null===(t=e.params)||void 0===t||t.forEach((t=>{var n,i,a,o;(null===(n=t.dynamic)||void 0===n||n)&&(t.value=null!==(i=null!==(a=e.updateValue[t.name])&&void 0!==a?a:null===(o=e.formValues)||void 0===o?void 0:o[t.name])&&void 0!==i?i:t.value);r[t.name]=t.value,console.log({values:r})})),K(e.updateValue,!0,e.updateOn,"",r)}}}),[e.updateValue,S,K,e.updateOn,e.params,e.formValues]),(0,n.useEffect)((()=>{try{O(k.length>0?`${k[0].value}${k.length>1?" ("+(k.length-1)+" more)":""}`:e.label)}catch(y){O(e.label)}}),[k,e.label]),(0,n.useEffect)((()=>{var t;let r={};null===(t=e.params)||void 0===t||t.forEach((e=>{r[e.name]=e.value})),K(r)}),[e.selectApi,e.params,K]);const q=(0,n.useRef)(null);(0,n.useEffect)((()=>{function e(e){var t;null!==(t=q.current)&&void 0!==t&&t.contains(e.target)||E(!1)}return document.addEventListener("click",e),()=>{document.removeEventListener("click",e)}}),[]);const Z=(()=>{if(q.current){const e=q.current.getBoundingClientRect(),t=200,r=window.innerHeight-e.bottom,n=e.top;return r>=t?"down":n>=t?"up":"down"}return"down"})();return"checkbox"===C?(0,g.jsxs)(d.S$,{ref:q,className:`column box  ${e.customClass}`,children:[(0,g.jsx)(m,{info:e.info}),(0,g.jsxs)("div",{className:""+(null!==k&&0!==k.length?"has title":"title"),onClick:G,children:[0===(null===(r=e.value)||void 0===r?void 0:r.length)?"":(0,g.jsx)(s.Pz,{})," ",`${V(e.label)} ${e.required?" *":""}`]}),(0,g.jsx)(d.S$,{ref:q,className:"left",children:M.length>0?(Y.length>0?R:M).map((t=>{const r=null===k||void 0===k?void 0:k.findIndex((e=>e.id===t.id));return(0,g.jsx)(d.Sc,{isDisabled:e.disabled,align:"left",label:e.displayValue?t[e.displayValue]:t.value,onChange:r=>{e.onSelect(t,e.id,e.type);const n=k,i=n.findIndex((e=>e.id===t.id));-1===i?n.push(t):n.splice(i,1),I(n),O(n.length>0?`${n[0].value} ${n.length>1?" ("+(n.length-1)+" more)":""}`:e.label)},value:r>-1},t.id)})):null}),(0,g.jsx)(b.A,{...e}),(0,g.jsx)(y.A,{error:e.error,info:e.info})]}):"dropdown"===C?(0,g.jsxs)(j,{theme:e.theme,className:`custom-select ${B?"open":"close"} ${e.customClass}  ${e.dynamicClass}`,children:[(0,g.jsx)(m,{className:"info-select",info:e.info}),(0,g.jsx)(v.A,{label:e.label,required:e.required,sublabel:e.sublabel,error:null!==(f=e.error)&&void 0!==f?f:""}),(0,g.jsxs)("button",{disabled:e.disabled,ref:q,className:""+(null!==k&&(null===(h=e.value)||void 0===h?void 0:h.length)>0?"has":""),onClick:G,children:[`${0===(null===(p=e.value)||void 0===p?void 0:p.length)?V(e.placeholder):F}`,!e.disabled&&(0,g.jsx)(s.k5,{className:"down"}),B&&_&&(0,g.jsxs)("ul",{className:`options  ${B?Z:"hide"}`,children:[(null===(w=e.search)||void 0===w||w)&&M.length>10&&(0,g.jsx)(A.A,{active:!0,className:"select",title:"Search",theme:e.theme,placeholder:"Search",value:Y,onChange:e=>{W(e.target.value);const t=M.filter((t=>t.value.toLowerCase().includes(e.target.value.toString().toLowerCase())));P(t),""===e.target.value.toString()&&P([])}}),(null===k||void 0===k?void 0:k.length)>0?(0,g.jsx)(L,{children:null===k||void 0===k?void 0:k.map((t=>{var r;const n=null===k||void 0===k?void 0:k.findIndex((e=>e.id===t.id));return(0,g.jsxs)("li",{value:n>-1,className:`${n>-1}`,onClick:r=>{var n;r.stopPropagation(),e.onSelect(t,e.id,e.type);const i=k,a=i.findIndex((e=>e.id===t.id));-1===a?i.push(t):i.splice(a,1),I(i),O(i.length>0?`${i[0].value} ${null!==(n=i[1])&&void 0!==n&&n.value?", "+i[0].value:""} ${i.length>1?" ("+(i.length-1)+" more)":""}`:e.label)},children:[e.displayValue&&null!==(r=t[e.displayValue])&&void 0!==r?r:t.value," ",(0,g.jsx)(s.A0,{icon:"Close"})]},t.id)}))}):null,(0,g.jsx)(L,{children:M.length>0?(Y.length>0?R:M).map((t=>{var r,i;const a=null===k||void 0===k?void 0:k.findIndex((e=>e.id===t.id));return-1===a&&(0,g.jsxs)("li",{value:a>-1,className:`${a>-1}`,onClick:r=>{r.stopPropagation(),e.onSelect(t,e.id,e.type);const n=k,i=n.findIndex((e=>e.id===t.id));-1===i?n.push(t):n.splice(i,1),I(n),O(n.length>0?`${n[0].value} ${n.length>1?" ("+(n.length-1)+" more)":""}`:e.label)},children:[e.displayValue?t[e.displayValue]:t.value,e.tags&&(0,g.jsxs)(o.GY,{children:[e.iconImage&&(0,g.jsx)(o.t_,{src:"https://event-manager.syd1.cdn.digitaloceanspaces.com/"+(e.iconImage.collection.length>0?null!==(r=null===(i=t[e.iconImage.collection])||void 0===i?void 0:i[e.iconImage.item])&&void 0!==r?r:"":t[e.iconImage.item])}),(0,g.jsx)(o.ze,{children:e.tags.map((e=>{var r,i;return(0,g.jsxs)(n.Fragment,{children:[e.title.length>0&&(0,g.jsx)(o.v_,{children:`${e.title}`}),(0,g.jsx)(o.WA,{className:e.type,children:(0,u._W)(e,e.collection.length>0?null!==(r=null===(i=t[e.collection])||void 0===i?void 0:i[e.item])&&void 0!==r?r:"":t[e.item])})]},e.item)}))})]}),e.viewButton&&(0,g.jsx)(o.$n,{onClick:r=>{var n;null===(n=e.viewButton)||void 0===n||n.callback(t),r.stopPropagation()},children:"View Menu"})]},t.id)})):null})]})]}),B&&_&&0===(0===k.length&&M.length)&&(0,g.jsx)("ul",{className:"options",children:(0,g.jsx)("li",{onClick:()=>{K()},children:"No Data Found. Click here to Refresh Data!"})},0),(0,g.jsx)(b.A,{...e}),(0,g.jsx)(y.A,{error:e.error,info:e.info})]}):"card"===C?(0,g.jsxs)(j,{theme:e.theme,className:`custom-select ${B?"open":"close"} ${e.customClass}  ${e.dynamicClass}`,children:[(0,g.jsx)(m,{className:"info-select",info:e.info}),(0,g.jsx)(v.A,{label:e.label,required:e.required,sublabel:e.sublabel,error:null!==(x=e.error)&&void 0!==x?x:""}),(0,g.jsx)(o.CW,{children:M.length>0?(Y.length>0?R:M).map((t=>{const r=null===k||void 0===k?void 0:k.some((e=>e.id===t.id));return(0,g.jsx)(Q,{type:"checkbox",option:t,checked:r,onChange:()=>{e.onSelect(t,e.id,e.type);const r=k,n=r.findIndex((e=>e.id===t.id));-1===n?r.push(t):r.splice(n,1),I(r),O(r.length>0?`${r[0].value} ${r.length>1?" ("+(r.length-1)+" more)":""}`:e.label)}},t.id)})):(0,g.jsxs)(U.YQ,{className:"card",children:["No Data Found.",(0,g.jsx)("span",{onClick:()=>{K()},children:"Click here"}),"to Refresh Data!"]})})]}):null};var P=r(16921),H=r(86178),z=r.n(H),V=r(8075);const G=w.Ay.label`
  background-color: ${x.D.bg.soft}; /* Background color for OFF state */
  display: flex;
  width: 28px; /* Width of the toggle switch */
  height: 16px; /* Height of the toggle switch */
  position: relative;
  cursor: pointer;
  border-radius: 34px; /* Rounded edges */
  padding: 2px;
  transition: background-color 0.4s; /* Smooth transition for background color */
  margin-right: 8px;
  &.true {
    background-color: ${x.D.primary.base}; /* Background color for ON state */
  }
`,Y=w.Ay.div`
  display: flex;
`,W=w.Ay.span`
  cursor: pointer;
  width: 12px; /* Width of the slider/knob */
  height: 12px; /* Height of the slider/knob */
  border-radius: 56px; /* Circular shape */
  background: white; /* Color of the knob */
  display: flex;
  position: relative;
  transition: left 0.4s; /* Smooth transition for knob movement */

  box-shadow: 0px 2px 4px 0px #1b1c1d05; /* Shadow for depth */

  &.true {
    left: 12px; /* Position of the slider when ON */
  }

  &:before {
    content: "";
    position: absolute;
    background: rgb(226, 228, 233);
    width: 4px; /* Size of the inner dot */
    height: 4px;
    top: 4px; /* Positioning of the inner dot */
    left: 4px;
    border-radius: 50%; /* Circular shape for inner dot */
    transition: background 0.4s; /* Smooth transition for inner dot color */
  }

  &.true:before {
    background: ${x.D.primary.base}; /* Background color for inner dot when ON */
  }
`,K=e=>{let{on:t,handleToggle:r,label:n,description:i}=e;return(0,g.jsxs)(Y,{className:t?"true":"",children:[(0,g.jsx)(G,{onClick:()=>r(!t),className:t?"true":"",children:(0,g.jsx)(W,{className:t?"true":""})}),(0,g.jsx)(v.A,{className:"toggle",description:i,label:n})]})},q=e=>{var t,r,i,a,o;const[l,c]=(0,n.useState)((()=>{return e.PhoneNumberLength?e.countries.filter((t=>t.PhoneNumberLength===e.PhoneNumberLength)):null!==(t=null===(r=e.countries)||void 0===r?void 0:r[0])&&void 0!==t?t:{};var t,r})),[A,u]=(0,n.useState)(!1),{themeColors:d}=e,f=(0,n.useRef)(null),h=e=>{f.current&&!f.current.contains(e.target)&&u(!1)};(0,n.useEffect)((()=>(document.addEventListener("mousedown",h),()=>{document.removeEventListener("mousedown",h)})),[]);const w=isNaN(e.value)?null:e.value;return(0,g.jsxs)(p.A0,{className:`${null!==(t=e.dynamicClass)&&void 0!==t?t:""} ${null!==(r=e.customClass)&&void 0!==r?r:""}`,animation:e.animation,children:[(0,g.jsx)(m,{info:e.info}),(0,g.jsx)(v.A,{name:e.name,label:e.label,required:e.required,sublabel:e.sublabel,error:null!==(i=e.error)&&void 0!==i?i:""}),(0,g.jsxs)(p.O4,{ref:f,className:"country",onClick:()=>{u((e=>!e))},children:[(0,g.jsxs)("span",{children:[" ",`${l.flag} +${l.phoneCode}`]})," ",(0,g.jsx)(s.A0,{icon:"down1"}),A&&(0,g.jsx)("div",{className:"options",children:e.countries.map(((t,r)=>(0,g.jsxs)(n.Fragment,{children:[r>0&&(0,g.jsx)("div",{className:"line"}),(0,g.jsx)("div",{className:"option "+(t.phoneCode===l.phoneCode?"active":""),onClick:r=>{u((e=>!e)),c(t),e.onChange({target:{value:w}},e.id,e.type,e.sub,t),r.stopPropagation()},children:`${t.flag} +${t.phoneCode} - ${t.title}`})]},r)))})]}),(0,g.jsx)(p.pd,{disabled:null!==(a=e.disabled)&&void 0!==a&&a,onKeyDown:e=>{38!==e.keyCode&&40!==e.keyCode||(console.log("event","aborted"),e.preventDefault())},onWheel:e=>e.target.blur(),autoComplete:"on",theme:d,className:`input phone${null===(o=l.phoneCode)||void 0===o?void 0:o.toString().length} ${null===w||void 0===w||w.toString().length,""}`,placeholder:e.label,type:"number",value:w,onChange:t=>e.onChange(t,e.id,e.type,e.sub,l),min:0,max:Math.pow(10,l.PhoneNumberLength)-1,name:e.name}),(0,g.jsx)(y.A,{error:e.error,info:e.info}),(0,g.jsx)(b.A,{...e})]})};var Z=r(85369),J=r(6326),X=r(91185),$=r.n(X);function ee(e,t,r,n,i){void 0===i&&(i=0);var a=se(t.width,t.height,i),o=a.width,s=a.height;return{x:te(e.x,o,r.width,n),y:te(e.y,s,r.height,n)}}function te(e,t,r,n){var i=t*n/2-r/2;return le(e,-i,i)}function re(e,t){return Math.sqrt(Math.pow(e.y-t.y,2)+Math.pow(e.x-t.x,2))}function ne(e,t){return 180*Math.atan2(t.y-e.y,t.x-e.x)/Math.PI}function ie(e,t){return Math.min(e,Math.max(0,t))}function ae(e,t){return t}function oe(e,t){return{x:(t.x+e.x)/2,y:(t.y+e.y)/2}}function se(e,t,r){var n=r*Math.PI/180;return{width:Math.abs(Math.cos(n)*e)+Math.abs(Math.sin(n)*t),height:Math.abs(Math.sin(n)*e)+Math.abs(Math.cos(n)*t)}}function le(e,t,r){return Math.min(Math.max(e,t),r)}function ce(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.filter((function(e){return"string"===typeof e&&e.length>0})).join(" ").trim()}var Ae=function(e){function t(){var r=null!==e&&e.apply(this,arguments)||this;return r.imageRef=n.createRef(),r.videoRef=n.createRef(),r.containerPosition={x:0,y:0},r.containerRef=null,r.styleRef=null,r.containerRect=null,r.mediaSize={width:0,height:0,naturalWidth:0,naturalHeight:0},r.dragStartPosition={x:0,y:0},r.dragStartCrop={x:0,y:0},r.gestureZoomStart=0,r.gestureRotationStart=0,r.isTouching=!1,r.lastPinchDistance=0,r.lastPinchRotation=0,r.rafDragTimeout=null,r.rafPinchTimeout=null,r.wheelTimer=null,r.currentDoc="undefined"!==typeof document?document:null,r.currentWindow="undefined"!==typeof window?window:null,r.resizeObserver=null,r.state={cropSize:null,hasWheelJustStarted:!1,mediaObjectFit:void 0},r.initResizeObserver=function(){if("undefined"!==typeof window.ResizeObserver&&r.containerRef){var e=!0;r.resizeObserver=new window.ResizeObserver((function(t){e?e=!1:r.computeSizes()})),r.resizeObserver.observe(r.containerRef)}},r.preventZoomSafari=function(e){return e.preventDefault()},r.cleanEvents=function(){r.currentDoc&&(r.currentDoc.removeEventListener("mousemove",r.onMouseMove),r.currentDoc.removeEventListener("mouseup",r.onDragStopped),r.currentDoc.removeEventListener("touchmove",r.onTouchMove),r.currentDoc.removeEventListener("touchend",r.onDragStopped),r.currentDoc.removeEventListener("gesturemove",r.onGestureMove),r.currentDoc.removeEventListener("gestureend",r.onGestureEnd),r.currentDoc.removeEventListener("scroll",r.onScroll))},r.clearScrollEvent=function(){r.containerRef&&r.containerRef.removeEventListener("wheel",r.onWheel),r.wheelTimer&&clearTimeout(r.wheelTimer)},r.onMediaLoad=function(){var e=r.computeSizes();e&&(r.emitCropData(),r.setInitialCrop(e)),r.props.onMediaLoaded&&r.props.onMediaLoaded(r.mediaSize)},r.setInitialCrop=function(e){if(r.props.initialCroppedAreaPercentages){var t=function(e,t,r,n,i,a){var o=se(t.width,t.height,r),s=le(n.width/o.width*(100/e.width),i,a);return{crop:{x:s*o.width/2-n.width/2-o.width*s*(e.x/100),y:s*o.height/2-n.height/2-o.height*s*(e.y/100)},zoom:s}}(r.props.initialCroppedAreaPercentages,r.mediaSize,r.props.rotation,e,r.props.minZoom,r.props.maxZoom),n=t.crop,i=t.zoom;r.props.onCropChange(n),r.props.onZoomChange&&r.props.onZoomChange(i)}else if(r.props.initialCroppedAreaPixels){var a=function(e,t,r,n,i,a){void 0===r&&(r=0);var o=se(t.naturalWidth,t.naturalHeight,r),s=le(function(e,t,r){var n=function(e){return e.width>e.height?e.width/e.naturalWidth:e.height/e.naturalHeight}(t);return r.height>r.width?r.height/(e.height*n):r.width/(e.width*n)}(e,t,n),i,a),l=n.height>n.width?n.height/e.height:n.width/e.width;return{crop:{x:((o.width-e.width)/2-e.x)*l,y:((o.height-e.height)/2-e.y)*l},zoom:s}}(r.props.initialCroppedAreaPixels,r.mediaSize,r.props.rotation,e,r.props.minZoom,r.props.maxZoom);n=a.crop,i=a.zoom;r.props.onCropChange(n),r.props.onZoomChange&&r.props.onZoomChange(i)}},r.computeSizes=function(){var e,t,n,i,a,o,s=r.imageRef.current||r.videoRef.current;if(s&&r.containerRef){r.containerRect=r.containerRef.getBoundingClientRect(),r.saveContainerPosition();var l=r.containerRect.width/r.containerRect.height,c=(null===(e=r.imageRef.current)||void 0===e?void 0:e.naturalWidth)||(null===(t=r.videoRef.current)||void 0===t?void 0:t.videoWidth)||0,A=(null===(n=r.imageRef.current)||void 0===n?void 0:n.naturalHeight)||(null===(i=r.videoRef.current)||void 0===i?void 0:i.videoHeight)||0,u=c/A,d=void 0;if(s.offsetWidth<c||s.offsetHeight<A)switch(r.state.mediaObjectFit){default:case"contain":d=l>u?{width:r.containerRect.height*u,height:r.containerRect.height}:{width:r.containerRect.width,height:r.containerRect.width/u};break;case"horizontal-cover":d={width:r.containerRect.width,height:r.containerRect.width/u};break;case"vertical-cover":d={width:r.containerRect.height*u,height:r.containerRect.height}}else d={width:s.offsetWidth,height:s.offsetHeight};r.mediaSize=(0,J.Cl)((0,J.Cl)({},d),{naturalWidth:c,naturalHeight:A}),r.props.setMediaSize&&r.props.setMediaSize(r.mediaSize);var f=r.props.cropSize?r.props.cropSize:function(e,t,r,n,i,a){void 0===a&&(a=0);var o=se(e,t,a),s=o.width,l=o.height,c=Math.min(s,r),A=Math.min(l,n);return c>A*i?{width:A*i,height:A}:{width:c,height:c/i}}(r.mediaSize.width,r.mediaSize.height,r.containerRect.width,r.containerRect.height,r.props.aspect,r.props.rotation);return(null===(a=r.state.cropSize)||void 0===a?void 0:a.height)===f.height&&(null===(o=r.state.cropSize)||void 0===o?void 0:o.width)===f.width||r.props.onCropSizeChange&&r.props.onCropSizeChange(f),r.setState({cropSize:f},r.recomputeCropPosition),r.props.setCropSize&&r.props.setCropSize(f),f}},r.saveContainerPosition=function(){if(r.containerRef){var e=r.containerRef.getBoundingClientRect();r.containerPosition={x:e.left,y:e.top}}},r.onMouseDown=function(e){r.currentDoc&&(e.preventDefault(),r.currentDoc.addEventListener("mousemove",r.onMouseMove),r.currentDoc.addEventListener("mouseup",r.onDragStopped),r.saveContainerPosition(),r.onDragStart(t.getMousePoint(e)))},r.onMouseMove=function(e){return r.onDrag(t.getMousePoint(e))},r.onScroll=function(e){r.currentDoc&&(e.preventDefault(),r.saveContainerPosition())},r.onTouchStart=function(e){r.currentDoc&&(r.isTouching=!0,r.props.onTouchRequest&&!r.props.onTouchRequest(e)||(r.currentDoc.addEventListener("touchmove",r.onTouchMove,{passive:!1}),r.currentDoc.addEventListener("touchend",r.onDragStopped),r.saveContainerPosition(),2===e.touches.length?r.onPinchStart(e):1===e.touches.length&&r.onDragStart(t.getTouchPoint(e.touches[0]))))},r.onTouchMove=function(e){e.preventDefault(),2===e.touches.length?r.onPinchMove(e):1===e.touches.length&&r.onDrag(t.getTouchPoint(e.touches[0]))},r.onGestureStart=function(e){r.currentDoc&&(e.preventDefault(),r.currentDoc.addEventListener("gesturechange",r.onGestureMove),r.currentDoc.addEventListener("gestureend",r.onGestureEnd),r.gestureZoomStart=r.props.zoom,r.gestureRotationStart=r.props.rotation)},r.onGestureMove=function(e){if(e.preventDefault(),!r.isTouching){var n=t.getMousePoint(e),i=r.gestureZoomStart-1+e.scale;if(r.setNewZoom(i,n,{shouldUpdatePosition:!0}),r.props.onRotationChange){var a=r.gestureRotationStart+e.rotation;r.props.onRotationChange(a)}}},r.onGestureEnd=function(e){r.cleanEvents()},r.onDragStart=function(e){var t,n,i=e.x,a=e.y;r.dragStartPosition={x:i,y:a},r.dragStartCrop=(0,J.Cl)({},r.props.crop),null===(n=(t=r.props).onInteractionStart)||void 0===n||n.call(t)},r.onDrag=function(e){var t=e.x,n=e.y;r.currentWindow&&(r.rafDragTimeout&&r.currentWindow.cancelAnimationFrame(r.rafDragTimeout),r.rafDragTimeout=r.currentWindow.requestAnimationFrame((function(){if(r.state.cropSize&&void 0!==t&&void 0!==n){var e=t-r.dragStartPosition.x,i=n-r.dragStartPosition.y,a={x:r.dragStartCrop.x+e,y:r.dragStartCrop.y+i},o=r.props.restrictPosition?ee(a,r.mediaSize,r.state.cropSize,r.props.zoom,r.props.rotation):a;r.props.onCropChange(o)}})))},r.onDragStopped=function(){var e,t;r.isTouching=!1,r.cleanEvents(),r.emitCropData(),null===(t=(e=r.props).onInteractionEnd)||void 0===t||t.call(e)},r.onWheel=function(e){if(r.currentWindow&&(!r.props.onWheelRequest||r.props.onWheelRequest(e))){e.preventDefault();var n=t.getMousePoint(e),i=$()(e).pixelY,a=r.props.zoom-i*r.props.zoomSpeed/200;r.setNewZoom(a,n,{shouldUpdatePosition:!0}),r.state.hasWheelJustStarted||r.setState({hasWheelJustStarted:!0},(function(){var e,t;return null===(t=(e=r.props).onInteractionStart)||void 0===t?void 0:t.call(e)})),r.wheelTimer&&clearTimeout(r.wheelTimer),r.wheelTimer=r.currentWindow.setTimeout((function(){return r.setState({hasWheelJustStarted:!1},(function(){var e,t;return null===(t=(e=r.props).onInteractionEnd)||void 0===t?void 0:t.call(e)}))}),250)}},r.getPointOnContainer=function(e,t){var n=e.x,i=e.y;if(!r.containerRect)throw new Error("The Cropper is not mounted");return{x:r.containerRect.width/2-(n-t.x),y:r.containerRect.height/2-(i-t.y)}},r.getPointOnMedia=function(e){var t=e.x,n=e.y,i=r.props,a=i.crop,o=i.zoom;return{x:(t+a.x)/o,y:(n+a.y)/o}},r.setNewZoom=function(e,t,n){var i=(void 0===n?{}:n).shouldUpdatePosition,a=void 0===i||i;if(r.state.cropSize&&r.props.onZoomChange){var o=le(e,r.props.minZoom,r.props.maxZoom);if(a){var s=r.getPointOnContainer(t,r.containerPosition),l=r.getPointOnMedia(s),c={x:l.x*o-s.x,y:l.y*o-s.y},A=r.props.restrictPosition?ee(c,r.mediaSize,r.state.cropSize,o,r.props.rotation):c;r.props.onCropChange(A)}r.props.onZoomChange(o)}},r.getCropData=function(){return r.state.cropSize?function(e,t,r,n,i,a,o){void 0===a&&(a=0),void 0===o&&(o=!0);var s=o?ie:ae,l=se(t.width,t.height,a),c=se(t.naturalWidth,t.naturalHeight,a),A={x:s(100,((l.width-r.width/i)/2-e.x/i)/l.width*100),y:s(100,((l.height-r.height/i)/2-e.y/i)/l.height*100),width:s(100,r.width/l.width*100/i),height:s(100,r.height/l.height*100/i)},u=Math.round(s(c.width,A.width*c.width/100)),d=Math.round(s(c.height,A.height*c.height/100)),f=c.width>=c.height*n?{width:Math.round(d*n),height:d}:{width:u,height:Math.round(u/n)};return{croppedAreaPercentages:A,croppedAreaPixels:(0,J.Cl)((0,J.Cl)({},f),{x:Math.round(s(c.width-f.width,A.x*c.width/100)),y:Math.round(s(c.height-f.height,A.y*c.height/100))})}}(r.props.restrictPosition?ee(r.props.crop,r.mediaSize,r.state.cropSize,r.props.zoom,r.props.rotation):r.props.crop,r.mediaSize,r.state.cropSize,r.getAspect(),r.props.zoom,r.props.rotation,r.props.restrictPosition):null},r.emitCropData=function(){var e=r.getCropData();if(e){var t=e.croppedAreaPercentages,n=e.croppedAreaPixels;r.props.onCropComplete&&r.props.onCropComplete(t,n),r.props.onCropAreaChange&&r.props.onCropAreaChange(t,n)}},r.emitCropAreaChange=function(){var e=r.getCropData();if(e){var t=e.croppedAreaPercentages,n=e.croppedAreaPixels;r.props.onCropAreaChange&&r.props.onCropAreaChange(t,n)}},r.recomputeCropPosition=function(){if(r.state.cropSize){var e=r.props.restrictPosition?ee(r.props.crop,r.mediaSize,r.state.cropSize,r.props.zoom,r.props.rotation):r.props.crop;r.props.onCropChange(e),r.emitCropData()}},r}return(0,J.C6)(t,e),t.prototype.componentDidMount=function(){this.currentDoc&&this.currentWindow&&(this.containerRef&&(this.containerRef.ownerDocument&&(this.currentDoc=this.containerRef.ownerDocument),this.currentDoc.defaultView&&(this.currentWindow=this.currentDoc.defaultView),this.initResizeObserver(),"undefined"===typeof window.ResizeObserver&&this.currentWindow.addEventListener("resize",this.computeSizes),this.props.zoomWithScroll&&this.containerRef.addEventListener("wheel",this.onWheel,{passive:!1}),this.containerRef.addEventListener("gesturestart",this.onGestureStart)),this.currentDoc.addEventListener("scroll",this.onScroll),this.props.disableAutomaticStylesInjection||(this.styleRef=this.currentDoc.createElement("style"),this.styleRef.setAttribute("type","text/css"),this.props.nonce&&this.styleRef.setAttribute("nonce",this.props.nonce),this.styleRef.innerHTML=".reactEasyCrop_Container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  user-select: none;\n  touch-action: none;\n  cursor: move;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.reactEasyCrop_Image,\n.reactEasyCrop_Video {\n  will-change: transform; /* this improves performances and prevent painting issues on iOS Chrome */\n}\n\n.reactEasyCrop_Contain {\n  max-width: 100%;\n  max-height: 100%;\n  margin: auto;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.reactEasyCrop_Cover_Horizontal {\n  width: 100%;\n  height: auto;\n}\n.reactEasyCrop_Cover_Vertical {\n  width: auto;\n  height: 100%;\n}\n\n.reactEasyCrop_CropArea {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  box-sizing: border-box;\n  box-shadow: 0 0 0 9999em;\n  color: rgba(0, 0, 0, 0.5);\n  overflow: hidden;\n}\n\n.reactEasyCrop_CropAreaRound {\n  border-radius: 50%;\n}\n\n.reactEasyCrop_CropAreaGrid::before {\n  content: ' ';\n  box-sizing: border-box;\n  position: absolute;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  top: 0;\n  bottom: 0;\n  left: 33.33%;\n  right: 33.33%;\n  border-top: 0;\n  border-bottom: 0;\n}\n\n.reactEasyCrop_CropAreaGrid::after {\n  content: ' ';\n  box-sizing: border-box;\n  position: absolute;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  top: 33.33%;\n  bottom: 33.33%;\n  left: 0;\n  right: 0;\n  border-left: 0;\n  border-right: 0;\n}\n",this.currentDoc.head.appendChild(this.styleRef)),this.imageRef.current&&this.imageRef.current.complete&&this.onMediaLoad(),this.props.setImageRef&&this.props.setImageRef(this.imageRef),this.props.setVideoRef&&this.props.setVideoRef(this.videoRef))},t.prototype.componentWillUnmount=function(){var e,t;this.currentDoc&&this.currentWindow&&("undefined"===typeof window.ResizeObserver&&this.currentWindow.removeEventListener("resize",this.computeSizes),null===(e=this.resizeObserver)||void 0===e||e.disconnect(),this.containerRef&&this.containerRef.removeEventListener("gesturestart",this.preventZoomSafari),this.styleRef&&(null===(t=this.styleRef.parentNode)||void 0===t||t.removeChild(this.styleRef)),this.cleanEvents(),this.props.zoomWithScroll&&this.clearScrollEvent())},t.prototype.componentDidUpdate=function(e){var t,r,n,i,a,o,s,l,c;e.rotation!==this.props.rotation?(this.computeSizes(),this.recomputeCropPosition()):e.aspect!==this.props.aspect||e.objectFit!==this.props.objectFit?this.computeSizes():e.zoom!==this.props.zoom?this.recomputeCropPosition():(null===(t=e.cropSize)||void 0===t?void 0:t.height)!==(null===(r=this.props.cropSize)||void 0===r?void 0:r.height)||(null===(n=e.cropSize)||void 0===n?void 0:n.width)!==(null===(i=this.props.cropSize)||void 0===i?void 0:i.width)?this.computeSizes():(null===(a=e.crop)||void 0===a?void 0:a.x)===(null===(o=this.props.crop)||void 0===o?void 0:o.x)&&(null===(s=e.crop)||void 0===s?void 0:s.y)===(null===(l=this.props.crop)||void 0===l?void 0:l.y)||this.emitCropAreaChange(),e.zoomWithScroll!==this.props.zoomWithScroll&&this.containerRef&&(this.props.zoomWithScroll?this.containerRef.addEventListener("wheel",this.onWheel,{passive:!1}):this.clearScrollEvent()),e.video!==this.props.video&&(null===(c=this.videoRef.current)||void 0===c||c.load());var A=this.getObjectFit();A!==this.state.mediaObjectFit&&this.setState({mediaObjectFit:A},this.computeSizes)},t.prototype.getAspect=function(){var e=this.props,t=e.cropSize,r=e.aspect;return t?t.width/t.height:r},t.prototype.getObjectFit=function(){var e,t,r,n;if("cover"===this.props.objectFit){if((this.imageRef.current||this.videoRef.current)&&this.containerRef){this.containerRect=this.containerRef.getBoundingClientRect();var i=this.containerRect.width/this.containerRect.height;return((null===(e=this.imageRef.current)||void 0===e?void 0:e.naturalWidth)||(null===(t=this.videoRef.current)||void 0===t?void 0:t.videoWidth)||0)/((null===(r=this.imageRef.current)||void 0===r?void 0:r.naturalHeight)||(null===(n=this.videoRef.current)||void 0===n?void 0:n.videoHeight)||0)<i?"horizontal-cover":"vertical-cover"}return"horizontal-cover"}return this.props.objectFit},t.prototype.onPinchStart=function(e){var r=t.getTouchPoint(e.touches[0]),n=t.getTouchPoint(e.touches[1]);this.lastPinchDistance=re(r,n),this.lastPinchRotation=ne(r,n),this.onDragStart(oe(r,n))},t.prototype.onPinchMove=function(e){var r=this;if(this.currentDoc&&this.currentWindow){var n=t.getTouchPoint(e.touches[0]),i=t.getTouchPoint(e.touches[1]),a=oe(n,i);this.onDrag(a),this.rafPinchTimeout&&this.currentWindow.cancelAnimationFrame(this.rafPinchTimeout),this.rafPinchTimeout=this.currentWindow.requestAnimationFrame((function(){var e=re(n,i),t=r.props.zoom*(e/r.lastPinchDistance);r.setNewZoom(t,a,{shouldUpdatePosition:!1}),r.lastPinchDistance=e;var o=ne(n,i),s=r.props.rotation+(o-r.lastPinchRotation);r.props.onRotationChange&&r.props.onRotationChange(s),r.lastPinchRotation=o}))}},t.prototype.render=function(){var e,t=this,r=this.props,i=r.image,a=r.video,o=r.mediaProps,s=r.transform,l=r.crop,c=l.x,A=l.y,u=r.rotation,d=r.zoom,f=r.cropShape,h=r.showGrid,p=r.style,g=p.containerStyle,m=p.cropAreaStyle,v=p.mediaStyle,y=r.classes,b=y.containerClassName,w=y.cropAreaClassName,x=y.mediaClassName,C=null!==(e=this.state.mediaObjectFit)&&void 0!==e?e:this.getObjectFit();return n.createElement("div",{onMouseDown:this.onMouseDown,onTouchStart:this.onTouchStart,ref:function(e){return t.containerRef=e},"data-testid":"container",style:g,className:ce("reactEasyCrop_Container",b)},i?n.createElement("img",(0,J.Cl)({alt:"",className:ce("reactEasyCrop_Image","contain"===C&&"reactEasyCrop_Contain","horizontal-cover"===C&&"reactEasyCrop_Cover_Horizontal","vertical-cover"===C&&"reactEasyCrop_Cover_Vertical",x)},o,{src:i,ref:this.imageRef,style:(0,J.Cl)((0,J.Cl)({},v),{transform:s||"translate(".concat(c,"px, ").concat(A,"px) rotate(").concat(u,"deg) scale(").concat(d,")")}),onLoad:this.onMediaLoad})):a&&n.createElement("video",(0,J.Cl)({autoPlay:!0,playsInline:!0,loop:!0,muted:!0,className:ce("reactEasyCrop_Video","contain"===C&&"reactEasyCrop_Contain","horizontal-cover"===C&&"reactEasyCrop_Cover_Horizontal","vertical-cover"===C&&"reactEasyCrop_Cover_Vertical",x)},o,{ref:this.videoRef,onLoadedMetadata:this.onMediaLoad,style:(0,J.Cl)((0,J.Cl)({},v),{transform:s||"translate(".concat(c,"px, ").concat(A,"px) rotate(").concat(u,"deg) scale(").concat(d,")")}),controls:!1}),(Array.isArray(a)?a:[{src:a}]).map((function(e){return n.createElement("source",(0,J.Cl)({key:e.src},e))}))),this.state.cropSize&&n.createElement("div",{style:(0,J.Cl)((0,J.Cl)({},m),{width:this.state.cropSize.width,height:this.state.cropSize.height}),"data-testid":"cropper",className:ce("reactEasyCrop_CropArea","round"===f&&"reactEasyCrop_CropAreaRound",h&&"reactEasyCrop_CropAreaGrid",w)}))},t.defaultProps={zoom:1,rotation:0,aspect:4/3,maxZoom:3,minZoom:1,cropShape:"rect",objectFit:"contain",showGrid:!0,style:{},classes:{},mediaProps:{},zoomSpeed:1,restrictPosition:!0,zoomWithScroll:!0},t.getMousePoint=function(e){return{x:Number(e.clientX),y:Number(e.clientY)}},t.getTouchPoint=function(e){return{x:Number(e.clientX),y:Number(e.clientY)}},t}(n.Component);const ue=w.Ay.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
`,de=w.Ay.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 50px;
  position: absolute;
`,fe=w.Ay.div`
  margin-top: 16px; /* Space between cropper and buttons */
  display: flex;
  top: auto;
  height: 50px;
  left: 0;
  gap: 10px;
  right: 0;
  bottom: 0;
  position: absolute;
  background-color: rgb(3 3 3 / 51%);
  display: flex;
  justify-content: center;
  align-items: center;
`,he=e=>{let{image:t,onCropComplete:r,onClose:i,width:a=4,height:o=4}=e;const[s,l]=(0,n.useState)({x:0,y:0}),[c,A]=(0,n.useState)(1),[u,f]=(0,n.useState)(null),h=(0,n.useCallback)((e=>{l(e)}),[]),p=(0,n.useCallback)(((e,t)=>{f(t)}),[]);return(0,g.jsxs)(ue,{children:[(0,g.jsx)(de,{children:(0,g.jsx)(Ae,{style:{background:"white"},image:t,crop:s,zoom:c,aspect:a/o,onCropChange:h,onCropComplete:p,onZoomChange:A})}),(0,g.jsxs)(fe,{children:[(0,g.jsx)(d.$n,{type:"secondary",value:"Close",ClickEvent:i}),(0,g.jsx)(d.$n,{align:"landing",value:"Crop Image",ClickEvent:async()=>{if(u){const a=await(e=t,n=u,new Promise(((t,r)=>{const i=new Image;i.src=e,i.onload=()=>{const e=document.createElement("canvas"),a=e.getContext("2d");e.width=n.width,e.height=n.height,a.drawImage(i,n.x,n.y,n.width,n.height,0,0,n.width,n.height),e.toBlob((e=>{if(e){const r=new File([e],"croppedImage.png",{type:"image/png"});t(r)}else r(new Error("Canvas is empty"))}),"image/png")},i.onerror=e=>{r(e)}})));r(a),i()}var e,n}})]})]})},pe=e=>{var t,r,i,a,o,s,l,c,A,u;const[h,w]=(0,n.useState)(!1),[x,C]=(0,n.useState)(null),B=(0,n.useRef)(null);const E=(k=null!==(t=e.value)&&void 0!==t&&t[0]?e.value[0].size:0)<1024?k+" bytes":k<1048576?(k/1024).toFixed(2)+" KB":(k/1048576).toFixed(2)+" MB";var k;const I=()=>{B.current.click()},S=null!==(r=null===(i=e.formValues)||void 0===i?void 0:i["old_"+e.name])&&void 0!==r?r:"",D=()=>{w(!0)};return(0,g.jsxs)(p.YS,{className:`full ${null!==(a=e.dynamicClass)&&void 0!==a?a:""}`,children:[(0,g.jsx)(v.A,{name:e.name,className:`${null!==(o=e.dynamicClass)&&void 0!==o?o:""}`,label:e.label,required:e.required,sublabel:e.sublabel,error:null!==(s=e.error)&&void 0!==s?s:""}),(0,g.jsxs)("div",{children:[(0,g.jsxs)("div",{children:[S?(0,g.jsx)("img",{alt:"upload",className:"contain",onClick:e=>{D()},src:x||(S?"https://event-manager.syd1.cdn.digitaloceanspaces.com/"+S:"image"===e.type?f.hz:f.H9)}):(0,g.jsx)("img",{alt:"upload",className:"contain",onClick:e=>{D()},src:x||("image"===e.type?f.hz:f.H9)}),e.update&&"put"===e.formType&&(0,g.jsx)(d.K0,{ClickEvent:I,align:"imageedit",icon:"pen"})]}),(0,g.jsxs)("div",{children:[(0,g.jsx)(m,{info:e.info}),(0,g.jsx)(V.F,{dynamicClass:"custom",line:!1,description:(null===(l=e.value)||void 0===l?void 0:l.length)>0?`File size: ${E} <br /> Supported file types: ${"image"===e.type?"JPG, JPEG, PNG, GIF, WEBP":"Images and Documents"}`:"File size: Up to 5MB <br /> Supported file types: "+("image"===e.type?"JPG, JPEG, PNG, GIF, WEBP":"Images and Documents")}),(0,g.jsx)(b.A,{...e}),(0,g.jsx)(y.A,{error:e.error,info:e.info}),(0,g.jsxs)("div",{style:{display:"flex",gap:"10px",marginTop:"10px"},children:["image"===e.type&&x&&(0,g.jsx)(d.K0,{align:"normal",ClickEvent:D,icon:"crop"}),!e.disabled&&!S&&(0,g.jsx)(d.$n,{icon:"add",disabled:e.disabled,name:e.name,align:"secondary normargin",ClickEvent:I,value:"image"===e.type?(null===(c=e.value)||void 0===c?void 0:c.length)>0?"Change Photo":"Choose Photo":(null===(A=e.value)||void 0===A?void 0:A.length)>0?"Change File":"Choose File",type:"button"})]}),(0,g.jsx)(p.pd,{name:e.name,disabled:e.disabled,ref:B,style:{display:"none"},accept:"image"===e.type?"image/*":"",className:"input "+((null===(u=e.value)||void 0===u?void 0:u.length)>0?"shrink":""),placeholder:e.placeholder,type:"file",onChange:t=>{const r=t.target.files[0];if("image"===e.type&&r){const e=new FileReader;e.onload=e=>{C(e.target.result)},e.readAsDataURL(r)}e.onChange(t,e.id,e.type)}}),h&&"image"===e.type&&x&&(0,g.jsx)(he,{height:e.height,width:e.width,image:x,onCropComplete:t=>{C(URL.createObjectURL(t));const r={target:{files:[t]}};e.onChange(r,e.id,e.type)},onClose:()=>{w(!1)}})]})]})]})},ge=n.memo((e=>{var t,r,a,o,c,A,u,f,h,w,C,B,E,k,I,S,D,Q,_,F,O,M,j,L,U,H,G,Y,W,J,X,$,ee,te,re,ne,ie,ae,oe,se,le,ce,Ae,ue,de,fe,he,ge,me,ve,ye,be,we,xe,Ce,Be,Ee,ke,Ie,Se,De,Qe,_e,Te,Fe,Oe,Me,Ne,je,Le,Ue,Re,Pe,He,ze,Ve,Ge,Ye,We;const{t:Ke}=(0,l.Bd)(),qe=(0,n.useRef)(null);function Ze(e){if(!e)return null;const t=z()(e);return t.isValid()?t.toDate():null}(0,n.useEffect)((()=>{qe.current&&(qe.current.style.height="auto",qe.current.style.height=`${qe.current.scrollHeight+5}px`)}),[e.value]);const Je=Ze(e.minDate),Xe=Ze(e.maxDate),$e=(0,i.d4)((e=>e.themeColors));try{switch(e.type){case"text":case"password":case"email":return(0,g.jsxs)(p.A0,{className:`${null!==(t=e.customClass)&&void 0!==t?t:""} ${null!==(r=e.dynamicClass)&&void 0!==r?r:""} ${x.t.formInputView}`,animation:e.animation,children:[(0,g.jsx)(v.A,{name:e.name,label:e.label,required:e.required,sublabel:e.sublabel,error:null!==(a=e.error)&&void 0!==a?a:""}),(0,g.jsx)(m,{info:e.info}),(null===(o=e.icon)||void 0===o?void 0:o.length)>0&&(0,g.jsx)(s.A0,{icon:e.icon}),(0,g.jsx)(p.pd,{name:e.name,...e.maxLength>0?{maxLength:e.maxLength}:{},disabled:null!==(c=e.disabled)&&void 0!==c&&c,autoComplete:"on",theme:$e,className:`input ${(null===(A=e.value)||void 0===A?void 0:A.toString().length)>0?"shrink":""} ${(null===(u=e.icon)||void 0===u?void 0:u.length)>0?"has-icon":""}`,placeholder:Ke(e.placeholder),type:e.type,value:null!==(f=e.value)&&void 0!==f?f:"",onChange:t=>e.onChange(t,e.id,e.type,e.sub)}),(0,g.jsx)(y.A,{error:e.error,info:e.info}),(0,g.jsx)(b.A,{...e})]});case"range":return(0,g.jsxs)(p.A0,{className:`${null!==(h=e.customClass)&&void 0!==h?h:""} ${null!==(w=e.dynamicClass)&&void 0!==w?w:""} ${x.t.formInputView}`,animation:e.animation,children:[(0,g.jsx)(v.A,{name:e.name,label:e.label,required:e.required,sublabel:e.sublabel,error:null!==(C=e.error)&&void 0!==C?C:""}),(0,g.jsx)(m,{info:e.info}),(null===(B=e.icon)||void 0===B?void 0:B.length)>0&&(0,g.jsx)(s.A0,{icon:e.icon}),(0,g.jsx)(p.Ap,{name:e.name,...e.maxLength>0?{maxLength:e.maxLength}:{},disabled:null!==(E=e.disabled)&&void 0!==E&&E,autoComplete:"on",theme:$e,className:`input ${(null===(k=e.value)||void 0===k?void 0:k.toString().length)>0?"shrink":""} ${(null===(I=e.icon)||void 0===I?void 0:I.length)>0?"has-icon":""}`,placeholder:Ke(e.placeholder),type:e.type,value:null!==(S=e.value)&&void 0!==S?S:"",min:e.min,max:e.max,onChange:t=>e.onChange(t,e.id,e.type,e.sub)}),(0,g.jsx)(y.A,{error:e.error,info:e.info}),(0,g.jsx)(b.A,{...e})]});case"color":return(0,g.jsxs)(p.A0,{className:`${null!==(D=e.customClass)&&void 0!==D?D:""} ${null!==(Q=e.dynamicClass)&&void 0!==Q?Q:""} ${x.t.formInputView}`,animation:e.animation,children:[(0,g.jsx)(v.A,{name:e.name,label:e.label,required:e.required,sublabel:e.sublabel,error:null!==(_=e.error)&&void 0!==_?_:""}),(0,g.jsx)(m,{info:e.info}),(null===(F=e.icon)||void 0===F?void 0:F.length)>0&&(0,g.jsx)(s.A0,{icon:e.icon}),(0,g.jsx)(p.AN,{name:e.name,...e.maxLength>0?{maxLength:e.maxLength}:{},disabled:null!==(O=e.disabled)&&void 0!==O&&O,autoComplete:"on",theme:$e,className:`input ${(null===(M=e.value)||void 0===M?void 0:M.toString().length)>0?"shrink":""} ${(null===(j=e.icon)||void 0===j?void 0:j.length)>0?"has-icon":""}`,placeholder:Ke(e.placeholder),type:e.type,value:null!==(L=e.value)&&void 0!==L?L:"",min:e.min,max:e.max,onChange:t=>e.onChange(t,e.id,e.type,e.sub)}),(0,g.jsx)(y.A,{error:e.error,info:e.info}),(0,g.jsx)(b.A,{...e})]});case"buttonInput":return(0,g.jsxs)(p.A0,{className:`${null!==(U=e.customClass)&&void 0!==U?U:""} ${null!==(H=e.dynamicClass)&&void 0!==H?H:""} ${x.t.formInputView}`,animation:e.animation,children:[(0,g.jsx)(v.A,{name:e.name,label:e.label,required:e.required,sublabel:e.sublabel,error:null!==(G=e.error)&&void 0!==G?G:""}),(0,g.jsx)(m,{info:e.info}),(null===(Y=e.icon)||void 0===Y?void 0:Y.length)>0&&(0,g.jsx)(s.A0,{icon:e.icon}),(0,g.jsxs)(p.cl,{children:[(0,g.jsx)(p.pd,{name:e.name,...e.maxLength>0?{maxLength:e.maxLength}:{},disabled:null!==(W=e.disabled)&&void 0!==W&&W,autoComplete:"on",theme:$e,className:`input buttonText ${(null===(J=e.value)||void 0===J?void 0:J.toString().length)>0?"shrink":""} ${(null===(X=e.icon)||void 0===X?void 0:X.length)>0?"has-icon":""}`,placeholder:Ke(e.placeholder),type:"text",value:null!==($=e.value)&&void 0!==$?$:"",onChange:t=>e.onChange(t,e.id,e.type,e.sub)}),(0,g.jsx)(p.$n,{theme:$e,className:e.customClass+" buttonText "+(e.status?"active":""),disabled:e.disabled,type:e.type,onClick:e.onClick,children:(0,g.jsxs)("span",{children:[" ",e.text]})})]}),(0,g.jsx)(b.A,{...e}),(0,g.jsx)(y.A,{error:e.error,info:e.info}),(0,g.jsx)(y.A,{error:e.success,className:"success",icon:"success"})]});case"number":const n=isNaN(e.value)?"":e.value,i=e=>{38!==e.keyCode&&40!==e.keyCode||(console.log("event","aborted"),e.preventDefault())};return(0,g.jsxs)(p.A0,{className:`${null!==(ee=e.customClass)&&void 0!==ee?ee:""} ${null!==(te=e.dynamicClass)&&void 0!==te?te:""} ${null!==(re=e.customClass)&&void 0!==re?re:""}`,animation:e.animation,children:[(0,g.jsx)(v.A,{name:e.name,label:e.label,required:e.required,sublabel:e.sublabel,value:e.value,error:e.error}),(0,g.jsx)(m,{info:e.info}),(null===(ne=e.icon)||void 0===ne?void 0:ne.length)>0&&(0,g.jsx)(s.A0,{icon:e.icon}),(0,g.jsx)(p.pd,{disabled:null!==(ie=e.disabled)&&void 0!==ie&&ie,onKeyDown:i,onWheel:e=>e.target.blur(),autoComplete:"on",theme:$e,className:`number input ${(null===n||void 0===n?void 0:n.toString().length)>0?"shrink":""} ${(null===(ae=e.icon)||void 0===ae?void 0:ae.length)>0?"has-icon":""}`,placeholder:Ke(e.placeholder),type:e.type,value:n,onChange:t=>e.onChange(t,e.id,e.type,e.sub),min:0,maxLength:e.maximum,name:e.name}),(0,g.jsxs)(p.H2,{className:"control",children:[(0,g.jsx)(d.K0,{align:"plain",icon:"minus",ClickEvent:t=>{var r;return e.onChange({target:{value:parseFloat((n-(null!==(r=e.addValue)&&void 0!==r?r:1)).toFixed(1))}},e.id,e.type,e.sub)}}),(0,g.jsx)(d.K0,{align:"plain",icon:"add",ClickEvent:t=>{var r;return e.onChange({target:{value:parseFloat((n+(null!==(r=e.addValue)&&void 0!==r?r:1)).toFixed(1))}},e.id,e.type,e.sub)}})]}),(0,g.jsx)(y.A,{error:e.error,info:e.info}),(0,g.jsx)(b.A,{...e})]});case"mobilenumber":return(0,g.jsx)(q,{...e,themeColors:$e});case"time":let l="undefined"===typeof e.value||null===e.value?null:e.value.length>0?new Date(e.value):null;return(0,g.jsxs)(p.A0,{className:`${null!==(oe=e.customClass)&&void 0!==oe?oe:""} ${null!==(se=e.dynamicClass)&&void 0!==se?se:""}`,children:[(0,g.jsx)(v.A,{name:e.name,label:e.label,required:e.required,sublabel:e.sublabel,error:null!==(le=e.error)&&void 0!==le?le:""}),(0,g.jsx)(m,{info:e.info}),(0,g.jsx)(p.wH,{disabled:e.disabled,name:e.name,theme:$e,showTimeSelect:!0,showTimeSelectOnly:!0,timeIntervals:15,timeCaption:"Time",selected:l,dateFormat:"h:mm aa",className:"input "+(e.value.length>0?"shrink":""),placeholderText:Ke(e.label),type:e.type,onChange:t=>e.onChange(t,e.id,e.type)}),(0,g.jsx)(y.A,{error:e.error,info:e.info})," ",(0,g.jsx)(b.A,{...e})]});case"date":let z="undefined"===typeof e.value||null===e.value?null:e.value.length>0?new Date(e.value):null;return(0,g.jsxs)(p.A0,{className:`${null!==(ce=e.customClass)&&void 0!==ce?ce:""} ${null!==(Ae=e.dynamicClass)&&void 0!==Ae?Ae:""} ${null!==(ue=e.customClass)&&void 0!==ue?ue:""}`,children:[(0,g.jsx)(v.A,{name:e.name,label:e.label,required:e.required,sublabel:e.sublabel,error:null!==(de=e.error)&&void 0!==de?de:""})," ",(0,g.jsx)(m,{info:e.info}),(0,g.jsx)(p.wH,{disabled:e.disabled,name:e.name,showYearDropdown:!0,yearDropdownItemNumber:70,minDate:Je,maxDate:Xe,dateFormat:"yyyy-MM-dd",theme:$e,className:`input ${(null===(fe=e.value)||void 0===fe?void 0:fe.length)>0?"shrink":""}  ${(null===(he=e.icon)||void 0===he?void 0:he.length)>0?"has-icon":""}`,placeholderText:Ke(e.label),type:e.type,value:z,selected:z,onChange:t=>e.onChange(t,e.id,e.type)}),(null===(ge=e.icon)||void 0===ge?void 0:ge.length)>0&&(0,g.jsx)(s.A0,{icon:e.icon}),(0,g.jsx)(y.A,{error:e.error,info:e.info}),(0,g.jsx)(b.A,{...e})]});case"datetime":let Ze="undefined"===typeof e.value||null===e.value?null:e.value.length>0?new Date(e.value):null;return(0,g.jsxs)(p.A0,{className:`${null!==(me=e.customClass)&&void 0!==me?me:""} ${null!==(ve=e.dynamicClass)&&void 0!==ve?ve:""}`,children:[(0,g.jsx)(v.A,{name:e.name,label:e.label,required:e.required,sublabel:e.sublabel,error:null!==(ye=e.error)&&void 0!==ye?ye:""}),(0,g.jsx)(m,{info:e.info}),(0,g.jsx)(p.wH,{disabled:e.disabled,name:e.name,showYearDropdown:!0,yearDropdownItemNumber:70,minDate:Je,maxDate:Xe,theme:$e,showTimeSelect:!0,timeIntervals:1,className:`input ${(null===(be=e.value)||void 0===be?void 0:be.length)>0?"shrink":""}  ${(null===(we=e.icon)||void 0===we?void 0:we.length)>0?"has-icon":""}`,placeholderText:Ke(e.label),type:e.type,value:Ze,selected:Ze,dateFormat:"yyyy-MM-dd hh:mm a",onChange:t=>e.onChange(t,e.id,e.type)}),(null===(xe=e.icon)||void 0===xe?void 0:xe.length)>0&&(0,g.jsx)(s.A0,{icon:e.icon}),(0,g.jsx)(y.A,{error:e.error,info:e.info}),(0,g.jsx)(b.A,{...e})]});case"image":case"file":return(0,g.jsx)(pe,{...e});case"textarea":return(0,g.jsxs)(p.A0,{className:`${null!==(Ce=e.customClass)&&void 0!==Ce?Ce:""} textarea ${null!==(Be=e.dynamicClass)&&void 0!==Be?Be:""}`,children:[(0,g.jsx)(m,{info:e.info}),(0,g.jsx)(v.A,{label:e.label,required:e.required,sublabel:e.sublabel,error:null!==(Ee=e.error)&&void 0!==Ee?Ee:""}),(0,g.jsx)(p.fs,{disabled:e.disabled,name:e.name,ref:qe,theme:$e,className:`input ${(null===e||void 0===e||null===(ke=e.value)||void 0===ke?void 0:ke.length)>0?"shrink":""}  ${null!==(Ie=e.size)&&void 0!==Ie?Ie:""}`,placeholder:Ke(e.placeholder),value:e.value,onChange:t=>e.onChange(t,e.id)}),(0,g.jsx)(y.A,{error:e.error,info:e.info}),(0,g.jsx)(b.A,{...e})]});case"htmleditor":return(0,g.jsx)(P.A,{disabled:e.disabled,dynamicClass:`${null!==(Se=e.dynamicClass)&&void 0!==Se?Se:""}`,type:e.type,placeholder:e.placeholder,value:e.value,id:e.id,onChange:e.onChange,footnote:e.footnote,footnoteicon:e.footnoteicon},e.id);case"submit":return(0,g.jsx)(p.$n,{disabled:e.disabled,theme:$e,className:"submit "+e.css,type:e.type,onClick:e.onChange,children:e.value});case"button":case"content-card":return(0,g.jsxs)(p.$n,{disabled:e.disabled,theme:$e,className:e.customClass,type:e.type,onClick:e.onChange,children:[e.icon?(0,g.jsx)(s.A0,{icon:e.icon}):null,(0,g.jsxs)("span",{children:[" ",e.value]})]});case"linkbutton":return(0,g.jsxs)(p.$n,{disabled:e.disabled,theme:$e,className:"linkbutton "+(null!==(De=e.customClass)&&void 0!==De?De:""),type:e.type,onClick:e.onChange,children:[e.icon?(0,g.jsx)(s.A0,{icon:e.icon}):null,(0,g.jsxs)("span",{children:[" ",e.value]})]});case"widges":return(0,g.jsxs)(p.$n,{disabled:e.disabled,theme:$e,className:"widges",type:e.type,onClick:e.onChange,style:{border:e.isSelected?"2px solid #375DFB":"1px solid #ccc"},children:[e.icon?(0,g.jsx)(s.A0,{icon:e.icon}):null,(0,g.jsxs)("span",{style:{fontSize:"12px"},children:[" ",e.value]})]});case"badge-card":return(0,g.jsxs)(p.A0,{className:`${null!==(Qe=e.customClass)&&void 0!==Qe?Qe:""}  badge-card`,type:e.type,theme:$e,children:[(0,g.jsx)("div",{className:"icon-container circular",children:e.icon?(0,g.jsx)(s.A0,{icon:e.icon}):null}),(0,g.jsxs)("div",{className:"text-container",children:[null!==e&&void 0!==e&&e.label?(0,g.jsx)("span",{children:null===e||void 0===e?void 0:e.label}):null,null!==e&&void 0!==e&&e.footnote?(0,g.jsx)("p",{children:null===e||void 0===e?void 0:e.footnote}):null]}),(0,g.jsxs)("div",{className:"badge-radio",children:["radio"===e.buttonType?(0,g.jsx)("input",{type:"radio",name:"badgeType",className:"right-radio"}):(0,g.jsx)(Z.X6T,{className:"right-arrow"})," "]})]});case"close":return(0,g.jsx)(p.$n,{disabled:null!==(_e=e.disabled)&&void 0!==_e&&_e,theme:$e,className:"close "+e.className,type:e.type,onClick:e.onChange,children:e.value});case"checkbox":return(0,g.jsxs)(p.A0,{className:`checkbox ${null!==(Te=e.dynamicClass)&&void 0!==Te?Te:""} ${null!==(Fe=e.customClass)&&void 0!==Fe?Fe:""} `,children:[(0,g.jsx)(m,{info:e.info}),(0,g.jsx)(p.JU,{className:"checkbox",children:(0,g.jsx)(N,{disabled:e.disabled,name:e.name,theme:$e,label:Ke(e.placeholder),className:"checkbox "+e.customClass,type:e.type,checked:null!==(Oe=e.value)&&void 0!==Oe&&Oe,sublabel:e.sublabel,onChange:t=>{console.log(!1!==t.target.checked),e.onChange(!1!==t.target.checked,e.id,e.type)}})}),(0,g.jsx)(y.A,{error:e.error,info:e.info}),(0,g.jsx)(b.A,{...e,className:"checkbox"})]});case"toggle":return(0,g.jsxs)(p.A0,{className:`checkbox ${null!==(Me=e.dynamicClass)&&void 0!==Me?Me:""} ${null!==(Ne=e.customClass)&&void 0!==Ne?Ne:""} `,children:[(0,g.jsx)(m,{info:e.info}),(0,g.jsx)(K,{label:e.label,description:e.footnote,on:null!==(je=e.value)&&void 0!==je&&je,handleToggle:t=>{console.log(t),e.onChange(t,e.id,e.type)}}),(0,g.jsx)(y.A,{error:e.error,info:e.info})]});case"select":return(0,g.jsx)(T,{theme:$e,...e,name:e.id,selected:e.value,onSelect:e.onChange});case"multiSelect":return(0,g.jsx)(R,{theme:$e,...e,name:e.id,selected:e.value,onSelect:e.onChange});case"info":return(0,g.jsxs)(p.R2,{className:`${null!==(Le=e.customClass)&&void 0!==Le?Le:"full"}  ${e.dynamicClass}`,children:[(0,g.jsx)(s.A0,{icon:"info"})," ",(0,g.jsx)("span",{dangerouslySetInnerHTML:{__html:e.content}})]});case"html":return(0,g.jsx)(p.R2,{className:` ${e.dynamicClass}`,children:e.content});case"line":return(0,g.jsx)(p.N1,{className:`${e.dynamicClass}`});case"label":return(0,g.jsx)(v.A,{className:`${null!==(Ue=e.customClass)&&void 0!==Ue?Ue:""} ${null!==(Re=e.dynamicClass)&&void 0!==Re?Re:""}`,label:e.label,required:e.required,description:null!==(Pe=e.info)&&void 0!==Pe?Pe:null,sublabel:e.sublabel,error:null!==(He=e.error)&&void 0!==He?He:""});case"title":return(0,g.jsx)(V.F,{dynamicClass:`${null!==(ze=e.customClass)&&void 0!==ze?ze:""} ${null!==(Ve=e.dynamicClass)&&void 0!==Ve?Ve:""}`,margin:!1,line:null===(Ge=e.line)||void 0===Ge||Ge,icon:e.icon,title:e.title,description:e.info});case"hidden":return(0,g.jsx)(p.pd,{disabled:null!==(Ye=e.disabled)&&void 0!==Ye&&Ye,autoComplete:"on",theme:$e,className:"input "+((null===(We=e.value)||void 0===We?void 0:We.toString().length)>0?"shrink":""),placeholder:Ke(e.placeholder),type:e.type,value:e.value,onChange:t=>e.onChange(t,e.id,e.type,e.sub)});default:return(0,g.jsx)(g.Fragment,{})}}catch(et){return console.log(et),(0,g.jsx)(g.Fragment,{})}}))},69135:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});var n=r(65043),i=r(17118),a=r(70579);const o=e=>{let{type:t="percentage",name:r,label:o,required:s,sublabel:l="",error:c="",className:A="",percetage:u=!1,percetageValue:d="",leftContent:f="",rightContent:h="",description:p=""}=e;const g=null===c||void 0===c?void 0:c.length;return(null===o||void 0===o?void 0:o.toString().length)>0&&u?(0,a.jsxs)(n.Fragment,{children:[(0,a.jsxs)(i.JU,{htmlFor:r,className:`percentage ${A} ${g?"error":""}`,children:[(0,a.jsx)("span",{children:o}),(0,a.jsxs)("span",{children:[d,"%"]})]}),(0,a.jsx)(i.yP,{children:(0,a.jsx)("div",{style:{width:d+"%"}})}),(0,a.jsxs)(i.JU,{htmlFor:r,className:`percentage small ${A} ${g?"error":""}`,children:[(0,a.jsx)("span",{children:f}),(0,a.jsx)("span",{children:h})]})]}):(0,a.jsx)(n.Fragment,{children:(0,a.jsxs)(i.JU,{htmlFor:r,className:`${A} ${p?"has-desc":""} ${g?"error":""}`,children:[(0,a.jsxs)("div",{className:"label",children:[(0,a.jsx)("span",{children:o}),l&&(0,a.jsxs)("span",{className:"sublabel",children:["(",l,")"]})," ",s&&(0,a.jsx)("i",{children:"*"})]}),p&&(0,a.jsx)("div",{className:"description",children:p})]})})}},17118:(e,t,r)=>{"use strict";r.d(t,{yP:()=>f,$n:()=>m,Jn:()=>C,AN:()=>u,H2:()=>s,O4:()=>l,wH:()=>g,YS:()=>A,DH:()=>E,R2:()=>b,w4:()=>B,pd:()=>p,cl:()=>v,A0:()=>c,JU:()=>h,N1:()=>w,Ap:()=>d,hl:()=>x,fs:()=>y});var n=r(94574),i=r(31899),a=r.n(i),o=r(8276);const s=n.Ay.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 0;
  right: 0;
  top: 25px;
  padding: 0 5px;
  pointer-events: none;
`,l=n.Ay.div`
  display: flex;
  position: absolute;
  left: 1px;
  top: 21px;
  cursor: pointer;
  padding: 1px 10px;
  max-height: 40px;
  height: 40px;
  font-size: 14px;
  -webkit-box-align: center;
  align-items: center;
  border-radius: 10px 0 0px 10px;
  width: 90px;
  border-right: 1px solid rgb(226, 228, 233);
  justify-content: space-between;
  .options {
    position: absolute;
    top: 45px;
    z-index: 1001;
    background: white;
    border: 1px solid ${o.D.stroke.soft};
    transition: all 0.2s ease 0s;
    padding: 8px;
    width: max-content;
    text-align: justify;
    gap: 2px;
    display: flex;
    flex-direction: column;
    border-radius: 11px;
    left: 0;
    font-size: 14px;
    max-height: 200px;
    overflow: auto;
    .option {
      padding: 8px;
      transition: all 0.4s;
      border-radius: 12px;
      :hover {
        background: ${o.D.bg.weak};
        padding-left: 12px;
      }
    }
    .active {
      background: ${o.D.bg.weak};
      padding-left: 12px;
    }
    .line {
      /* border-bottom: 1px solid lightgray; */
    }
  }
`,c=n.Ay.div`
  position: relative;
  display: flex;
  animation: ${e=>e.animation};
  flex-direction: column;
  gap: 4px;
  /* max-width: 370px; */
  &.checkbox {
    width: 100%;
    flex: none;
    -webkit-box-align: left;
    align-items: left;
    display: flex;
    flex-direction: row;
    /* max-width: 350px; */
    flex-direction: column;
    gap: 10px;
    row-gap: 4px;
  }
  &.auto{
    width:auto;
  }
  .control {
    display: none;
  }
  &.short {
    width: 30px;
    min-width: auto;
  }
  &.control .control {
    display: flex;
  }
  &.control input {
    text-align: center;
  }
  &.disabled {
    display: none;
  }
  &.textarea {
    max-width: 100%;
  }
  &.direct input {
    /* background-color:transparent; */
    margin-bottom: 0;
    border-radius: 0;
  }
  grid-column: span 4; /* 50% width */
  &.double {
    grid-column: span 2; /* 50% width */
  }
  &.quarter {
    grid-column: span 1; /* 25% width */
  }

  &.half {
    grid-column: span 2; /* 50% width */
  }

  &.large {
    grid-column: span 3; /* 75% width */
  }
  &.full {
    grid-column: span 4; /* 100% width */
  }
  &.title {
    grid-column: span 4; /* 100% width */
  }
  &.control {
    max-width: 90px;
    grid-column: span 1; /* 100% width */
    input {
      height: 25px;
      border-radius: 5px;
      font-size: 12px;
    }
    label .label {
      font-size: 11px;
    }
    svg {
      color: ${o.D.stroke.sub};
      width: 10px;
      height: 10px;
    }
    .checkbox svg {
      color: ${o.D.stroke.white};
    }
  }
  && {
    /* Styles to apply when parent has class shrink */
    .popup & {
      &:nth-of-type(even) {
        margin-left: 5px;
      }
      &:nth-of-type(odd) {
        margin-right: 5px;
      }
      &.textarea {
        flex: calc(100% - 0px);
        margin-right: 0px;
      }
    }
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  > svg {
    position: absolute;
    top: 33px;
    left: 10px;
    width: 15px;
    height: 15px;
  }
  &.badge-card {
    display: flex;
    flex-direction: row;
    background-color: #fff;
    align-items: center;
    justify-content: space-around;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1rem;
    cursor: pointer;
    font-weight: 500;
    margin-top: 1rem;
    box-sizing: border-box;
    position: relative;

    .icon-container {
      display: flex;
      align-items: center;
      margin-right: 1rem;
      &.circular {
        // width: 40px;
        // height: 30px;
        padding: 5px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid lightgrey;
        margin-right: 0.75rem;
        margin-top: 4px;
      }
    }
    .badge-radio {
      padding: 8px;
    }
    .text-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-right: 1rem;
      span {
        display: block;
        font-size: 1rem;
        color: #333;
        margin: 0;
        padding: 0;
        text-indent: 0;
      }

      p {
        margin: 0;
        color: #666;
        font-size: 0.875rem;
        margin-top: 0.5rem;
        text-align: start;
        margin-left: 0;
        text-indent: 0;
      }
    }

    .right-radio {
      position: absolute;
      right: 1rem;
      top: 50%;
      transform: translateY(-50%);
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 2px solid lightgrey;
      background-color: white;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
      -webkit-appearance: none;
      cursor: pointer;
      outline: none;
    }

    .right-radio:checked {
      border-color: #375dfb;
      background-color: #fff;
    }

    .right-radio:checked::before {
      content: "";
      display: block;
      width: 13px;
      height: 13px;
      border-radius: 50%;
      background-color: #375dfb;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .right-radio:hover {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    }

    .right-arrow {
      position: absolute;
      right: 1rem;
      top: 50%;
      transform: translateY(-50%);
      font-size: 1rem; /* Adjust size as needed */
      color: #666; /* Adjust color as needed */
    }
  }
  @media (max-width: 768px) {
    flex: 100%;
    margin: 0px !important;
    &.checkbox {
      flex: 1 1 100%;
      margin: 0px 5px 15px !important;
    }
  }
  ${e=>e.children&&n.AH`
      & input:focus ~ .floating-label,
      textarea:focus ~ .floating-label,
      textarea:not(:focus):valid ~ .floating-label,
      input:not(:focus):valid ~ .floating-label,
      input[type="date"]:not(:focus):invalid ~ .floating-label,
      .filter input[type="date"]:not(:focus):invalid ~ .floating-label,
      input[type="datetime-local"]:not(:focus):invalid ~ .floating-label,
      .filter input[type="datetime-local"]:not(:focus):invalid ~ .floating-label {
        top: -1px;
        left: 13px;
        right: 6px;
        font-size: 11px;
        opacity: 1;
        text-align: left;
        height: 19px;
        padding: 3px 0;
      }
    `}
`,A=n.Ay.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 0px;
  color: ${o.D.text.soft};
  background: ${o.D.bg.white};
  font-weight: 400;
  gap: 20px;
  padding: 0px;
  &.small {
    grid-column: span 1; /* 25% width */
  }

  &.half {
    grid-column: span 2; /* 50% width */
  }

  &.large {
    grid-column: span 3; /* 75% width */
  }
  &.full {
    grid-column: span 4; /* 100% width */
  }
  &.title {
    grid-column: span 4; /* 100% width */
  }
  > div {
    display: flex;
    gap: 20px;
  }
  > div > div:first-child {
    img {
      width: auto;
      height: 50px;
      min-height: 50px;
      min-width: 50px;
      border-radius: 8px;
      object-fit: cover;
    }
  }
  > div > div:last-child {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  > div > div {
    position: relative;
  }
  > div > div:first-child button {
    position: absolute;
    right: -10px;
    top: -10px;
  }
  &.disabled {
    display: none;
  }
`,u=n.Ay.input`
  margin-top: 0;
  padding: 2px;
  height: 40px;
  border: 1px solid rgb(226 228 232);
  border-radius: 10px;
  width: 100%;
  background: white;
`,d=n.Ay.input`
  -webkit-appearance: none;
  width: 100%;
  height: 5px;
  background: #ddd;
  border-radius: 5px;
  outline: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    background: ${o.D.primary.base};
    border-radius: 50%;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 15px;
    height: 15px;
    background: #4caf50;
    border-radius: 50%;
    cursor: pointer;
  }
`,f=n.Ay.div`
  background-color: ${o.D.bg.soft};
  width: 100%;
  height: 5px;
  border-radius: 10px;
  div {
    background-color: ${o.D.primary.base};
    width: 100%;
    height: 5px;
    border-radius: 10px;
    transition: width 0.3s ease; /* Add transition for width */
  }
`,h=n.Ay.label`
  pointer-events: none;
  font-size: 10px;
  transition: all 0.1s ease;
  color: ${o.D.text.main};
  background-color: transparent;
  text-align: left;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  align-items: center;
  letter-spacing: -0.006em;
  gap: 4px;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  grid-column: span 4;
  .label {
    font-size: 14px;
    font-weight: 500;
    line-height: 16.94px;
    letter-spacing: -0.006em;
    text-align: left;
  }
  &.has-desc .label {
    font-size: 16px;
    font-weight: 500;
    line-height: 19.36px;
    letter-spacing: -0.011em;
    text-align: left;
  }
  .description {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.006em;
    text-align: left;
    color: ${o.D.text.sub};
  }
  &.toggle .description {
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    text-align: left;
  }
  &.disabled {
    display: none;
  }
  &.phone2 {
    left: 70px;
  }
  &.phone3 {
    left: 75px;
  }
  &.percentage {
    display: flex;
    justify-content: space-between;
  }
  .sublabel {
    font-weight: 400;
    color: ${o.D.text.sub};
    margin-left: 5px;
  }
  &.small {
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    text-align: right;
    color: ${o.D.text.sub};
  }
  &.double {
    grid-column: span 4; /* 100% width */
  }
  &.single {
    grid-column: span 2; /* 25% width */
  }
  i {
    font-weight: 400;
    color: ${o.D.primary.base};
    margin-left: 5px;
  }
  /* &.shrink {
    display: none;
    color: black;
    &.phone2 {
      left: 20px;
    }
    &.phone3 {
      left: 25px;
    }
  } */
  /* &.error {
    color: red;
    color: red;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 93%;
  } */
  &.checkbox {
    position: initial;
    pointer-events: initial;
    display: flex;
    align-items: baseline;
  }
  && {
    /* Styles to apply when parent has class shrink */
    .filter & {
      top: 10px;
      font-size: 10px;
    }
  }
`,p=(n.Ay.input`
  margin: 0;
  margin-right: 5px;
  & ~ .checkmark {
    background-color: #ccc;
  }

  &:checked ~ .checkmark {
    background-color: #2196f3;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }
  &:checked ~ .checkmark:after {
    display: block;
  }

  .container .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`,n.Ay.input`
  box-sizing: border-box;
  padding: 10px 10px 10px 12px;
  outline: none !important;
  width: 100%;
  border-radius: 10px;
  border: 1px solid ${o.D.stroke.soft};
  height: 40px;
  font-weight: 400;
  transition: all 0.2s ease-out 0s;
  color: ${o.D.text.soft};
  background: ${o.D.bg.white};
  font-size: 14px;
  &.phone2,
  &.phone1,
  &.phone3 {
    padding-left: 100px;
    color: black;
  }
  &.shrink {
    /* padding: 1.2em 13px 0; */
    color: ${o.D.text.main};
    &.phone2 {
      padding-left: 65px;
    }
    &.phone3 {
      padding-left: 80px;
    }
  }
  &.has-icon {
    padding-left: 30px;
  }
  &.buttonText {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right-width: 0;
  }
  appearance: none;
  &:disabled {
    background: ${o.D.bg.weak};
    color: ${o.D.text.sub};
    cursor: not-allowed;
    border: 0;
  }
  &.short {
    text-align: center;
  }
  &:focus {
    border: 1px solid ${o.D.stroke.strong};
    box-shadow: 0px 0px 0px 4px #e4e5e7;
  }
  &:focus ~ .country {
    border-color: ${o.D.stroke.strong};
  }
`),g=(0,n.Ay)(a())`
  box-sizing: border-box;
  padding: 10px 10px 10px 12px;
  outline: none !important;
  width: 100%;
  border-radius: 10px;
  border: 1px solid ${o.D.stroke.soft};
  height: 40px;
  font-weight: 400;
  transition: all 0.2s ease-out 0s;
  color: ${o.D.text.soft};
  background: ${o.D.bg.white};
  &.shrink {
    /* padding: 1.2em 13px 0px; */
    color: black;
  }
  &.has-icon {
    padding-left: 30px;
  }
  &:disabled {
    background: ${o.D.bg.weak};
    color: ${o.D.text.sub};
    cursor: not-allowed;
    border: 0;
  }
  && {
    /* Styles to apply when parent has class shrink */
    .filter & {
      padding: 1.4em 13px 0px;
      margin: 4px 0px 0px 0;
      background-color: white;
      height: 40px;
    }
  }
`,m=((0,n.Ay)(a())`
  box-sizing: border-box;
  padding: 10px 10px 10px 12px;
  outline: none !important;
  width: 100%;
  border-radius: 10px;
  border: 1px solid ${o.D.stroke.soft};
  height: 40px;
  font-weight: 400;
  transition: all 0.2s ease-out 0s;
  color: ${o.D.text.soft};
  background: ${o.D.bg.white};
  &.shrink {
    padding: 1.6em 13px 0;
    color: black;
  }
`,n.Ay.button`
  height: 40px;
  border-radius: 8px;
  background: ${o.D.bg.surface};
  color: ${o.D.text.white};
  font-size: 14px;
  font-weight: 500;
  padding: 0px 4px 0px 4px;
  gap: 8px;
  opacity: 0px;
  &.red {
    background: rgb(229, 49, 33) !important;
    color: white !important;
  }
  border: 1px solid #e2e4e9;
  transition: all 0.5s ease;
  margin-top: 10px;
  /* max-width: 370px; */
  padding: 10px 15px;
  width: 100%;
  border-color: ${e=>e.theme.border};
  cursor: pointer;
  border-width: 0;
  justify-content: center;
  &.close {
    background: ${o.D.bg.white};
    color: ${o.D.text.sub};
    border: 1px solid ${o.D.stroke.soft};
  }
  &.marginless {
    margin-top: 0;
  }
  &.theme {
    background: ${o.D.primary.base};
    color: ${o.D.text.white};
  }

  &.transparent {
    color: ${o.D.primary.base};
    background: ${o.D.text.white};
  }
  &.widges {
    background: ${o.D.bg.plain};
    color: ${o.D.text.sub};
    border: 1px solid ${o.D.stroke.soft};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0px;
    width: 90px;
    height: 72px;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;

    transition: background 0.3s, color 0.3s, border-color 0.3s;
    svg {
      width: 15px;
      height: 15px;
    }
    &:hover {
      background: ${o.D.bg.white};
      color: ${o.D.text.main};
      border-color: ${o.D.stroke.main};
    }
  }
  &.content-card {
  }
  &.custom {
    margin: 0;
    gap: 5px;
    display: flex;
    align-items: center;
    text-wrap: nowrap;
    width: fit-content;
  }
  &.left {
    margin: 0;
    margin-right: auto;
  }
  &.right {
    margin: 0;
    margin-left: auto;
  }
  &.center {
    margin: 0;
    margin-left: auto;
    margin-right: auto;
  }
  &.secondary {
    background: ${o.D.bg.white};
    color: ${o.D.text.sub};
    border: 1px solid ${o.D.stroke.soft};
  }
  &.error {
    background: ${o.D.bg.white};
    color: ${o.D.state.error};
    border: 1px solid ${o.D.state.error};
  }
  &.margin-top {
    margin-top: 10px;
  }
  &.full-width,
  &.embed {
    width: 100%;
    background: ${o.D.primary.base};
    color: ${o.D.text.white};
  }

  &.landing {
    color: ${e=>e.theme.themeForeground};
    background: ${e=>e.theme.themeBackground};
  }
  &.buttonText {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border: 1px solid ${o.D.stroke.soft};
  }
  &.buttonText.active {
    background-color: transparent;
    color: #df1c41;
  }
  &.linkbutton {
    background-color: transparent;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.006em;
    text-align: right;
    color: ${o.D.text.main};
    border-bottom: 1px solid;
    height: 30px;
    padding: 0;
    border-radius: 0;
    margin-top: 0;
  }
  &.no-line {
    border: none;
  }
  &:disabled {
    background-color: ${e=>e.theme.disabledBackground};
    color: ${e=>e.theme.disabledForeground};
    cursor: not-allowed;
  }
`),v=n.Ay.div`
  display: flex;
`,y=n.Ay.textarea`
  box-sizing: border-box;
  padding: 10px 10px 10px 12px;
  outline: none !important;
  width: 100%;
  border-radius: 10px;
  border: 1px solid ${o.D.stroke.soft};
  font-weight: 400;
  font-size: 14px;
  transition: all 0.2s ease-out 0s;
  color: ${o.D.text.soft};
  background: ${o.D.bg.white};
  resize: none;
  min-height: 70px;
  &:focus {
    border: 1px solid ${o.D.stroke.strong};
    box-shadow: 0px 0px 0px 4px #e4e5e7;
  }
  &.medium {
    height: 150px;
  }
  &.large {
    height: 230px;
  }
  &.shrink {
    /* padding: 1.5em 13px 0px; */
    color: black;
  }
  &:disabled {
    background: ${o.D.bg.weak};
    color: ${o.D.text.sub};
    cursor: not-allowed;
    border: 0;
  }
`,b=n.Ay.div`
  padding-left: 0px;
  font-size: 14px;
  width: 100%;
  margin: 5px;
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 5px;
  &.disabled {
    display: none;
  }
  &.title {
    font-size: 16px;
    padding: 5px;
    margin-bottom: 10px;
    border-bottom: 1px solid #d9d9d9;
  }
  svg {
    min-width: 14px;
    margin-right: 5px;
    margin-top: 2px;
    align-items: baseline;
    display: flex;
    align-self: baseline;
  }
  grid-column: span 4; /* 50% width */
  &.double {
    grid-column: span 2; /* 50% width */
  }
  &.quarter {
    grid-column: span 1; /* 25% width */
  }

  &.half {
    grid-column: span 2; /* 50% width */
  }

  &.large {
    grid-column: span 3; /* 75% width */
  }
  &.full {
    grid-column: span 4; /* 100% width */
  }
`,w=n.Ay.div`
  width: 100%;
  height: 1px;
  gap: 0px;
  opacity: 0px;
  background: ${o.D.stroke.soft};
  grid-column: span 4; /* 50% width */
`,x=n.Ay.div`
  margin-top: 0px;
  margin-bottom: 0px;
  font-weight: 600;
  width: 100%;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  align-self: flex-start;
  flex-direction: column;
  align-items: baseline;
  gap: 4px;
  font-size: 18px;
  text-align: left;
  margin-top: 10px;
  margin-bottom: 5px;
  &.disabled {
    display: none;
  }
  > div {
    gap: 10px;
    display: flex;
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: -0.015em;
    text-align: left;
  }
  &.sub > div {
    font-size: 16px;
    font-weight: 500;
    line-height: 19.36px;
    letter-spacing: -0.011em;
    text-align: left;
  }
  &::after {
    content: "";
    height: 1px;
    font-size: 20px;
    background: transparent;
    opacity: 0.6;
    width: 100%;
  }
  &.line::after {
    content: "";
    background: ${o.D.stroke.soft};
  }
  &.custom {
    margin: 0px 0px;
  }
  &.width70 {
    width: 70%;
  }
  &.title {
    grid-column: span 4; /* 100% width */
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.006em;
    text-align: left !important;
    color: ${o.D.text.sub};
    margin: 0;
  }
`,C=n.Ay.span`
  width: 10px;
  height: 10px;
  position: absolute;
  right: 15px;
  top: 0px;
  left: auto;
  z-index: 1;
  color: #868686;
  cursor: pointer;
  &.info-select {
    right: 45px;
  }
`,B=n.Ay.div`
  position: absolute;
  right: 0px;
  top: 20px;
  left: auto;
  z-index: 10;
  cursor: pointer;
  background: white;
  padding: 10px;
  border-radius: 5px;
  font-size: 12px;
  max-width: 100%;
  border: 1px solid #e2e4e9;
  text-align: left;
  &::before {
    content: "";
    position: absolute;
    top: -10px;
    right: 12px;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent white transparent;
  }
  bold {
    font-weight: bold;
  }
  i {
    font-style: italic;
  }
`,E=n.Ay.div`
  display: flex;

  color: ${o.D.text.sub};
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  &.checkbox {
    margin-left: 27px;
  }
  svg {
    width: 22px;
    margin-right: 5px;
    font-size: 12px;
  }
  &.consent {
    padding-left: 10px;
    margin-bottom: 15px;
    border-left: 1px solid lightgray;
  }
`},94988:(e,t,r)=>{"use strict";r.d(t,{A:()=>u});var n=r(65043),i=r(41137),a=r(79456),o=r(73216),s=r(99837),l=r(10793),c=r(35190),A=r(70579);const u=e=>t=>{const r=(0,o.Zp)(),u=(0,a.wA)(),{t:d}=(0,i.Bd)(),[f,h]=(0,n.useState)({type:1,content:d("sessionExpired"),okay:d("startOver"),onClose:()=>{r("/"),u((0,c.T8)())}}),[p,g]=(0,n.useState)(!1),[m,v]=(0,n.useState)(!1),y=(0,n.useCallback)((e=>{v(e)}),[]),b=()=>{h({...f,onClose:null}),g(!1)},w=(0,a.d4)((e=>e.login));return(0,n.useEffect)((()=>{w.data.token&&v(!1)}),[w]),w.data.token?(0,A.jsxs)(n.Fragment,{children:[(0,A.jsx)(e,{user:w.data,...t,setLoaderBox:y,setMessage:e=>{h(e),g(!0)}}),p&&(0,A.jsx)(l.A,{message:f,closeMessage:b,setLoaderBox:y,showMessage:p}),m&&(0,A.jsx)(s.A,{})]}):(0,A.jsx)(l.A,{message:f,closeMessage:b,setLoaderBox:y,showMessage:!0})}},26222:(e,t,r)=>{"use strict";r.d(t,{Ej:()=>A,J3:()=>a,dY:()=>c,i5:()=>u,mc:()=>s,n_:()=>l,z6:()=>o});var n=r(94574),i=r(8276);const a=n.Ay.div`
  display: flex;
  height: calc(100vh - 85px);
  overflow: hidden;
  &.center {
    justify-content: center;
    flex: 1;
    align-items: center;
  }
`,o=n.Ay.div`
  display: flex;
  flex-direction: column;
  flex-basis: auto;
  width: 20em;
  &.sticky {
    a span {
      display: flex;
    }
    .open span {
      display: flex;
    }
  }

  .menus {
    color: white;
    position: relative;
    display: inline-flex;
    flex-direction: column;
    background: white;
    background-color: ${e=>e.theme.background};
    order: 1;
    z-index: 1;
    padding: 20px 20px 16px 20px;
    /* box-shadow: rgb(237, 237, 237) 6px 0px 11px 3px; */
    border-right: 1px solid #e2e4e9;
    height: 100%;
    transition: all 0.2s ease-in;
    overflow-y: auto;
  }
  /* &.hover:hover {
     transition: all 0.2s ease 0s;
    .menus {
      width: 272px;
      
    }
    a span {
      display: initial;
    }
    .open span {
      display: initial;
    }
  } */
  &.submenu {
    width: 90px;

    a.main {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin: 0px;
      -webkit-box-pack: center;
      justify-content: center;
      text-align: center;
      padding: 0;
      padding: 7px 10px;
      height: auto;
      border-radius: 0;
    }
    a.main span {
      font-size: 10px;
      font-weight: 500;
      line-height: 16px;
    }
    svg {
      margin-right: auto !important;
      margin-left: auto !important;
      width: 14px;
      height: 14px;
    }
    .menus {
      padding: 0px;
      padding-top: 20px;
    }
    .menus > nav {
      display: flex;
      gap: 10px;
    }
    a::after {
      display: none !important;
    }
    a::before {
      display: none !important;
    }
    .header {
      padding: 0;
    }
  }
  @media screen and (max-width: 768px) {
    position: absolute;
    left: 0;
    right: 0;
    display: flex;
    visibility: collapse;
    min-height: 60%;
    max-height: 100%;
    z-index: 1001;
    box-shadow: none;
    &.active {
      visibility: visible;
    }
  }
`,s=n.Ay.div`
  display: flex;
  flex: 1 1 100%;
  overflow: auto;
  /* box-shadow: inset rgb(0 0 0 / 6%) 0px 0px 8px 7px; */
  max-width: 100%;
  width: 100%;
  &.noshadow {
    box-shadow: none;
    overflow: initial;
  }
  &.nopadding {
    padding: 0;
  }
  /* background: ${e=>e.theme.pageBackground}; */
  @media screen and (max-width: 768px) {
    /* padding-bottom: 20px; */
    display: block;
  }
`,l=(n.Ay.span`
  font-size: 10px;
  position: absolute;
  right: -2px;
  bottom: -4px;
  margin: 0px !important;
  background: ${e=>e.color};
  width: 10px;
  height: 10px;
  padding: 2px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  display: flex;
  svg {
    color: white;
  }
`,n.Ay.div`
  position: relative;
  background-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  width: 35px;
  height: 35px;
  border-radius: 50%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -15px;
  margin: auto;
  img {
    border: 5px solid white;
  }
`),c=n.Ay.div`
  position: fixed;
  right: 28px;
  top: 60px;
  border-radius: 10px;
  bottom: auto;
  border: 1px solid ${i.D.stroke.soft};
  padding: 0px;
  white-space: nowrap;
  z-index: 1001;
  background: white;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  align-items: flex-start;
  width: 300px;
  min-height: 200px;
  .main {
    font-size: 18px;
    margin-top: 30px;
    font-weight: 600;
    text-align: center;
  }
  .sub {
    font-size: 12px;
    text-align: center;
    margin-top: 0px;
  }
`,A=n.Ay.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: calc(100% - 20px);
  box-sizing: border-box;
  .banner {
    height: 100px;
    margin: 0px;
    /* background: ${e=>e.theme.gradient}; */
    background: -webkit-linear-gradient(302deg, ${i.D.primary.base}, rgb(90, 169, 230) 100%);
    position: relative;
    padding: 10px;
    border-radius: 12px;
    display: flex;
    justify-content: center;
  }
`,u=n.Ay.div`
  display: flex;
  border-radius: 12px;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
`,d=n.Ay.input`
  opacity: 0;
  width: 100%;
  height: 25px;
  cu span {
    box-shadow: 0 0 1px #2196f3;
  }
`;n.Ay.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #e7f2f9;
  transition: 0.4s;
  box-shadow: 0 0 1px #2196f3;
  border-radius: 34px;
  &:before {
    position: absolute;
    content: "";
    height: 24px;
    width: 24px;
    left: 4px;
    bottom: 3px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
    background-color: ${e=>{let{disable:t}=e;return t||"white"}};
  }

  ${d}:checked + &::before {
    transform: translateX(18px);
    background-color: ${e=>{let{enable:t}=e;return t||"green"}};
  }
`,n.Ay.label`
  position: relative;
  display: inline-block;
  border: 0;
  outline: none;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  min-height: 40px;
  height: 40px;
  width: 70px;
  border-radius: 10px;
  margin: 4px 0px;
  background: white;
  transition: all 1s ease 0s;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
  cursor: pointer;
  font-weight: bold;
  &.list {
    margin-right: 0;
  }
`,n.Ay.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: 0.1s;
  border-radius: 10px;
  color: ${e=>{let{disable:t,enable:r,checked:n}=e;return n?r||"green":t||"red"}};
  justify-content: center;
  background-color: ${e=>{let{checked:t}=e;return t?"rgb(204, 204, 204)":"white"}};
  align-items: center;
  display: flex;
  font-size: ${e=>{let{checked:t}=e;return t?"20px":"18px"}};
  svg {
    left: 4px;
    bottom: 3px;
    transition: 0.4s;
    border-radius: 50%;
  }
`},21159:(e,t,r)=>{"use strict";r.d(t,{A:()=>B});var n=r(65043),i=r(64980),a=r(74505),o=r(41137),s=r(46193),l=r(46861),c=r(79456),A=r(97152),u=r(13747),d=r(87045),f=r(86178),h=r.n(f),p=r(11238),g=r(83150),m=r(15004),v=r(36824),y=r(9667),b=r(37784),w=r(38520),x=r(17118),C=r(70579);const B=n.memo((e=>{var t,r,f,B,E,k,I,S,D,Q,_,T,F;const{t:O}=(0,o.Bd)(),{i18n:M}=(0,o.Bd)(),[N]=(0,n.useState)(M.language||"de"),[j,L]=(0,n.useState)(0),U=(0,c.wA)(),{setMessage:R,setLoaderBox:P,currentApi:H,audioCapture:z=!1}=e,[V,G]=(0,n.useState)([]),[Y,W]=(0,n.useState)(null),[K,q]=(0,n.useState)(0),[Z]=(0,n.useState)(null!==(t=e.formTabTheme)&&void 0!==t?t:"normal"),[J]=(0,n.useState)(e.formInput),[X,$]=(0,n.useState)(!0),[ee,te]=(0,n.useState)({}),{autoUpdate:re=!1,liveData:ne=!1}=e,[ie,ae]=(0,n.useState)(null),[oe,se]=(0,n.useState)(null),{formValues:le}=e;(0,n.useEffect)((()=>{ie||oe||(ae(JSON.parse(JSON.stringify(le))),se(JSON.parse(JSON.stringify(le))))}),[le,ie,oe]),(0,n.useEffect)((()=>{var t;const r=e.formInput.reduce(((t,r,n)=>{const i=e.noTabView?"Other":r.group||"Other";return("post"===e.formType&&r.add||"put"===e.formType&&r.update)&&(t[i]||(t[i]={key:i,selected:!1,inputs:[]}),t[i].inputs.push({...r,index:n})),t}),{});q(Object.keys(r).length),W(r),je(null===(t=Object.keys(r))||void 0===t?void 0:t[0])}),[e.formInput,e.formType,e.noTabView]);const[ce,Ae]=(0,n.useState)(!1),[ue,de]=(0,n.useState)(e.formErrors),fe=(0,c.d4)((e=>e.themeColors)),[he,pe]=(0,n.useState)(!1),[ge,me]=(0,n.useState)(!1),[ve,ye]=(0,n.useState)(null),be=(0,n.useRef)(null),we=(0,n.useRef)([]);(0,n.useEffect)((()=>()=>{be.current&&"recording"===be.current.state&&(be.current.stop(),console.log("Recording stopped due to page close/component unmount"))}),[]);const xe=()=>{pe(!1),be.current.stop(),be.current.stream.getTracks().forEach((e=>e.stop()));const e=new Blob(we.current,{type:"audio/ogg; codecs=opus"}),t=new FileReader;t.onloadend=()=>{const e=t.result,r=new File([e],"audio.ogg",{type:"audio/ogg",lastModified:(new Date).getTime()});console.log("Audio File size: ",r.size),ye(r)},t.readAsArrayBuffer(e),we.current=[]};(0,n.useEffect)((()=>{(async()=>{if(ve){me(!0);const t={title:e.header.replace("Add a","").trim(),audio:[ve],formValues:JSON.stringify([...J].reduce(((e,t)=>(t.add&&(e[t.name]=""),e)),{}))};ye(null);const r=await(0,v.LS)(t,"user/transcribeAudio");if(200===r.status){console.log(r.data.output);let e={...ie,...Object.keys(r.data.output).reduce(((e,t)=>{var n;return(null===(n=r.data.output[t])||void 0===n?void 0:n.length)>0&&(e[t]=r.data.output[t]),e}),{})};me(!1),ae(e)}else me(!1),console.error("Failed to upload audio")}})()}),[ve,ge,ie,e.header,J]);const Ce=(e,t,r,n,i,a)=>{const o={},s={...r},l={...t};let c=0;e.forEach((e=>{if("_id"!==e.name)if("greater"===e.validation){var t,r;const n=Be(e,"undefined"===typeof l[e.name]?"":l[e.name],"undefined"===typeof l[e.reference]?new Date:l[e.reference],l);s[e.name]=n.tempformError,c+=n.flag;const i=null!==(t=e.group)&&void 0!==t?t:"Other";o[i]=(null!==(r=o[i])&&void 0!==r?r:0)+n.flag}else{var n,i;const t=Be(e,"undefined"===typeof l[e.name]?"":l[e.name],null,l);s[e.name]=t.tempformError,c+=t.flag;const r=null!==(n=e.group)&&void 0!==n?n:"Other";o[r]=(null!==(i=o[r])&&void 0!==i?i:0)+t.flag}}));const A=((e,t)=>{let r=0,n="";return!1===e&&!0===t&&(n=O("required",{label:O("captcha")}),r+=1),{flag:r,tempformError:n}})(n,a);return s.captchaError=A.tempformError,c+=A.flag,de(s),$(c>0),te(o),0===c},Be=function(t,r){var n,i;let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new Date,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=0,l="";if(!t.update&&"put"===e.formType)return{flag:s,tempformError:l};if(!t.add&&"post"===e.formType)return{flag:s,tempformError:l};if("title"===t.type)return{flag:s,tempformError:l};if(!t.required&&0===(null!==(n=null===r||void 0===r?void 0:r.length)&&void 0!==n?n:0))return{flag:s,tempformError:l};if(t.condition){let e=!1;if(e=Array.isArray(t.condition.if)?t.condition.if.some((e=>e===o[t.condition.item])):o[t.condition.item]===t.condition.if,e){if("disabled"===t.condition.then)return{flag:s,tempformError:l}}else if("disabled"===t.condition.else)return{flag:s,tempformError:l}}switch(null===t||void 0===t?void 0:t.validation){case"email":var c;if(!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(r))l=(null!==(c=null===r||void 0===r?void 0:r.length)&&void 0!==c?c:0)>0?O("validContent",{label:O(t.label)}):"",s+=1;break;case"qt":/^\d{8}$|^$/.test(r)||(l=O("validContent",{label:O(t.label)}),s+=1);break;case"number":var A;if(!/^\d+$/.test(r)||isNaN(r)||null===r||"undefined"===typeof r)(null!==(A=null===r||void 0===r?void 0:r.length)&&void 0!==A?A:0)>0&&(l=O("validContent",{label:O(t.label)})),s+=1;break;case"mobileNumber":if(!new RegExp(`^[1-9]\\d{${(null!==(i=o.PhoneNumberLength)&&void 0!==i?i:10)-1}}$`).test(r)){var d,f;if((null!==(d=null===r||void 0===r?void 0:r.length)&&void 0!==d?d:0)>0)l=`Please provide a valid ${null!==(f=o.PhoneNumberLength)&&void 0!==f?f:10}-digit WhatsApp Number`;s+=1}break;case"cvv":/^[0-9]{3}$/.test(r)||(l=O("validContent",{label:O(t.label)}),s+=1);break;case"ccn":/^[0-9]{16}$/.test(r)||(l=O("validContent",{label:O(t.label)}),s+=1);let e=0;for(let t=0;t<(null!==(h=null===r||void 0===r?void 0:r.length)&&void 0!==h?h:0);t++){var h;let n=parseInt(r[t]);t%2===0&&(n*=2,n>9&&(n-=9)),e+=n}e%10!==0&&(l=O("validContent",{label:O(t.label)}),s+=1);break;case"expiry":(function(e){let t=parseInt(e.substring(0,2)),r=parseInt("20"+e.substring(3)),n=new Date,i=n.getFullYear(),a=n.getMonth()+1;if(r<i||r===i&&t<a)return!1;if(t<1||t>12)return!1;return!0})(r)||(l=O("validContent",{label:O(t.label)}),s+=1);break;case"true":!0!==r&&(l=O("validContent",{label:O(t.label)}),s+=1);break;case"fileNumber":/[A-Z0-9-]/.test(r)||(l=O("validContent",{label:O(t.label)}),s+=1);break;case"licensePlate":/^[A-Z]{3}[ -]?[A-Z0-9]{2}[ -]?[A-Z0-9]{3,5}$/i.test(r)||(l=O("validContent",{label:O(t.label)}),s+=1);break;case"url":/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i.test(r)||(l=O("validContent",{label:O(t.label)}),s+=1);break;case"name":var p;if(!/^[A-Za-z\s]+$/.test(r))(null!==(p=null===r||void 0===r?void 0:r.length)&&void 0!==p?p:0)>0&&(l="Only English characters and spaces are supported"),s+=1;break;case"slug":/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(r)||(l=O("validContent",{label:O(t.label)}),s+=1);break;case"greater":const n=new Date(a);new Date(r)<n&&(l=O("validContent",{label:O(t.label)}),s+=1);break;case"amount":/^\d+([.,]\d{1,2})?$/.test(r)||(l=O("validContent",{label:O(t.label)}),s+=1);break;case"datetime":case"time":var g;if(!/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(r))(null!==(g=null===r||void 0===r?void 0:r.length)&&void 0!==g?g:0)>0&&(l=O("validContent",{label:O(t.label)})),s+=1;break;case"password-match":const u=/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@.$!%*?&]{8,}$/;o.newPassword!==o.confirmPassword?(l="Passwords are not match!",s+=1):u.test(r)||(l=O("validContent",{label:O(t.label)}),s+=1);break;case"password":var m;if(!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$.!%*?&]{8,}$/.test(r))(null!==(m=null===r||void 0===r?void 0:r.length)&&void 0!==m?m:0)>0&&(l=O("validContent",{label:O(t.label)})),s+=1}const v=(0,u.e)(t,l,r,s,O);if(l=v.tempformError,s=v.flag,"image"!==t.type&&"file"!==t.type||"post"!==e.formType){if(("image"===t.type||"file"===t.type)&&"put"===e.formType)return{flag:s,tempformError:l};if("checkbox"===t.type||"toggle"===t.type)return{flag:s,tempformError:l};if("number"===t.type){var y;if(t.required&&0===(null!==(y=null===r||void 0===r?void 0:r.toString().length)&&void 0!==y?y:0))return s+=1,{flag:s,tempformError:l};if(!/^\d+$/.test(r)||isNaN(r)||null===r||"undefined"===typeof r)return l=O("required",{label:O(t.label)}),{flag:s,tempformError:l};if(null!==r&&void 0!==r&&r.toString().length>0){if(!/^\d+$/.test(r)||isNaN(r))return s+=1,{flag:s,tempformError:O("requiredMinimumNumber",{label:O(t.label)})};const e=null===r||void 0===r?void 0:r.toString().length;var b,w;if(void 0!==t.minimum&&e<t.minimum)return s+=1,{flag:s,tempformError:O("requiredMinimumNumber",{minimum:null!==(b=t.minimum)&&void 0!==b?b:0,label:O(t.label)})};if(void 0!==t.maximum&&e>t.maximum)return s+=1,{flag:s,tempformError:O("maxNumberLimit",{maximum:null!==(w=t.maximum)&&void 0!==w?w:2e3,label:O(t.label)})}}}else{var x,C,B,E,k;if(t.required&&0===(null!==(x=null===r||void 0===r?void 0:r.length)&&void 0!==x?x:0))s+=1;else if((null!==(C=t.minimum)&&void 0!==C?C:0)>(null!==(B=null===r||void 0===r?void 0:r.length)&&void 0!==B?B:0)){var I;l=O("requiredMinimum",{minimum:null!==(I=t.minimum)&&void 0!==I?I:0,label:O(t.label)}),s+=1}else if((null!==(E=t.maximum)&&void 0!==E?E:2e3)<(null!==(k=null===r||void 0===r?void 0:r.length)&&void 0!==k?k:0)){var S;l=O("maxLimit",{maximum:null!==(S=t.maximum)&&void 0!==S?S:2e3,label:O(t.label)}),s+=1}}}else{var D;if(0===(null!==(D=null===r||void 0===r?void 0:r.length)&&void 0!==D?D:0))s+=1;else if("image"===t.type){(Q=r[0],["image/jpeg","image/png","image/gif","image/webp","image/avif","image/tiff"].includes(Q.type))||(l=O("invalidImageFormat",{label:O(t.label)}),s+=1)}else{const e=(t.allowedFileTypes||[]).map((e=>e.toLowerCase())),n=t=>{const r=t.type.toLowerCase();return e.some((e=>{if(e.endsWith("/*")){const t=e.split("/")[0];return r.startsWith(t)}return r===e}))};n(r[0])||(l=O("fileType",{label:O(t.label)}),s+=1)}}var Q;return{flag:s,tempformError:l}};(0,n.useEffect)((()=>{}),[J]);const Ee=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"text",i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{};i=ke[e];const a=[...ke],o=J[r];let s="";if("checkbox"===n)s=t;else if("select"===n)s=t.id;else if("multiSelect"===n){const e=i[o.name],r=e.findIndex((e=>e===t.id));-1===r?e.push(t.id):e.splice(r,1),s=e}else"text"===n||"number"===n||"password"===n||"color"===n?s=t.target.value:"search"===n?s=JSON.stringify(t):"image"===n||"file"===n?s=t.target.files:"datetime"===n||"time"===n?s=t?t.toISOString():"":"date"===n?t?(t.setHours(14,0,0,0),s=t.toISOString()):s="":s=t.target.getAttribute("value");const l={...i,[o.name]:s};a[e]=l,Ie(a);let c=0;const A=[...V];return a.map(((t,r)=>{const n=Ce(J,t,A[r],!1,0,e);return A[r]=n.tempformErrors,c+=n.flags,!0})),G(A),L(c),$(c>0),c},[ke,Ie]=(0,n.useState)(null),Se=async e=>{var t;P(!0);const r=null===(t=e.target.files)||void 0===t?void 0:t[0];if(r){const e=new FileReader;e.onload=async e=>{const t=[],r=new Uint8Array(e.target.result),n=p.LF(r,{type:"array"}),i=n.SheetNames[0],a=n.Sheets[i],o=p.Wp.sheet_to_json(a),s={},l=await Promise.all(o.map((async(e,r)=>{const n={},i={};let a=new Date;return await Promise.all(J.map((async t=>{if(t.add){var r;const A=e[t.label];let u="";if("checkbox"===t.type){u=JSON.parse("false"===t.default||"true"===t.default?t.default:"false")}else if("multiSelect"===t.type)u=[];else if("text"===t.type)u="";else if("datetime"===t.type||"date"===t.type||"time"===t.type)"0"===t.default?(a.setUTCHours(0,0,0,0),u=a.toISOString()):"1"===t.default?(a.setUTCHours(23,59,0,0),u=a.toISOString()):u=a.toISOString(),t.add&&(u="empty"===t.default?"":a.toISOString());else if("image"===t.type||"file"===t.type)t.add&&(u=""),u="";else{var o,l;if(u=null!==(o=t.default)&&void 0!==o?o:"","select"===t.type)u=null!==(l=t.default)&&void 0!==l?l:""}var c;if(i[t.name]=null!==(r=u)&&void 0!==r?r:"",t.add)if(i[t.name]=null!==(c=null!==A&&void 0!==A?A:u)&&void 0!==c?c:"",n[t.name]="","API"===t.apiType){if(!s[t.selectApi]){const e=await(0,v.bQ)({},`${t.selectApi}`);s[t.selectApi]=e.data,200===e.status&&U((0,m.p)(e.data,t.selectApi))}const e=t.displayValue?t.displayValue:"locale"===t.showItem?N:"value",r=s[t.selectApi].find((t=>t[e]===A));r&&(i[t.name]=r.id)}}}))),t.push(n),i})));let c=0;l.forEach(((e,r)=>{const n=Ce(J,e,t[r],!1,0,r);t[r]=n.tempformErrors,c+=n.flags})),L(c),$(c>0),G(t),Ie(l),P(!1)},e.readAsArrayBuffer(r)}},De=()=>{const t=[],r={};J.forEach((e=>{e.add&&(r[e.label]="")})),t.push(r);const n=p.Wp.json_to_sheet(t),i=p.Wp.book_new();p.Wp.book_append_sheet(i,n,O("report")),p._h(i,e.shortName+"-template.xlsx")},Qe=async e=>{P(!0),await(0,v.EH)({data:JSON.stringify(ke)},`${H}/bulk-upload`).then((t=>{200===t.status?(Ie(t.data.alreadyExist),R({type:1,content:O("bulkUploadMessage",{exist:t.data.alreadyExist.length,added:t.data.added.length}),proceed:"Okay"}),0===t.data.alreadyExist.length&&Te(e)):(t.status,R({type:1,content:O(t.data),proceed:"Okay"})),P(!1)})).catch((e=>{alert(e),P(!1)}))},_e=function(t,r){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;const o=J[r],s={...ie};if(null===i){let r="";if("checkbox"===n||"toggle"===n||"htmleditor"===n)r=t;else if("select"===n){var l;r=t.id,!0===(null!==(l=o.arrayOut)&&void 0!==l&&l)&&"multiSelect"!==n&&(s[o.name+"Array"]=t)}else if("multiSelect"===n){var c;if(!0===(null!==(c=o.arrayOut)&&void 0!==c&&c)){let e=s[o.name+"Array"];e||(e=[]);const r=e.findIndex((e=>e.id===t.id));-1===r?e.push(t):e.splice(r,1),s[o.name+"Array"]=e}const e=s[o.name],n=e.findIndex((e=>e===t.id));-1===n?e.push(t.id):e.splice(n,1),r=e}else if("email"===n||"text"===n||"number"===n||"password"===n)r=t.target.value;else if("mobilenumber"===n){var A,u;const e=null!==(A=a.PhoneNumberLength)&&void 0!==A?A:10;r=null===(u=t.target.value)||void 0===u?void 0:u.slice(0,e)}else r="search"===n?JSON.stringify(t):"image"===n||"file"===n?t.target.files:"datetime"===n||"time"===n?t.toISOString():"date"===n?h()(t).set({hour:12,minute:0,second:0,millisecond:0}).toISOString():"textarea"===n?t:t.target.getAttribute("value");var d;if(o.maximum&&"string"===typeof r&&(r=r.slice(0,o.maximum)),"mobilenumber"===n||"number"===n)r=null===(d=r)||void 0===d?void 0:d.replace(/\D/g,"");if(o.format)switch(o.format){case"uppercase":r=r.toUpperCase();break;case"lowercase":r=r.toLowerCase();break;case"camelcase":r=r.replace(/\b\w/g,(e=>e.toUpperCase()));break;case"propercase":r=r.toLowerCase().replace(/(?:^|\s)\S/g,(e=>e.toUpperCase()))}let i={...s,[o.name]:r};var f;if("mobilenumber"===n&&(i={...s,[o.name]:r,phoneCode:a.phoneCode,PhoneNumberLength:a.PhoneNumberLength}),"select"===n)if(o.updateFields)null===(f=o.updateFields)||void 0===f||f.forEach((e=>{var r;i[e.id]=e.collection?null===(r=t[e.collection])||void 0===r?void 0:r[e.value]:t[e.value]}));"function"===typeof o.onChange&&(i=o.onChange(o.name,i)),ae(i),Ce(J,i,ue,ce,e.useCheckbox,e.useCaptcha)?re&&e.submitHandler(i,!0):re&&e.submitHandler(ne?i:null,!1)}else{const e=J[i.index],n=e.forms[i.multipleIndex][r],a={...s};a[e.name][i.multipleIndex][n.name]=t.target.value,ae(a),Ce(J,a,ue)}},Te=async t=>{t.preventDefault(),Ce(J,ie,ue,ce,e.useCheckbox,e.useCaptcha)&&await e.submitHandler(ie,J,oe)&&(se({...ie}),$(!0))},Fe=()=>{e.isOpenHandler(!1)},[Oe,Me]=(0,n.useState)(0),[Ne,je]=(0,n.useState)(),[Le]=(0,n.useState)(null!==(r=e.formMode)&&void 0!==r?r:"single");return J&&ie&&(0,C.jsx)(a.hJ,{className:`form-container ${null!==(f=e.css)&&void 0!==f?f:""}`,children:(0,C.jsxs)(a.YW,{className:`${null!==(B=e.css)&&void 0!==B?B:""} ${Le} ${e.bulkUpload?"bulk":""} ${e.formLayout}`,children:[(null===(E=e.header)||void 0===E?void 0:E.trim().length)>0&&(0,C.jsxs)(A.Y9,{className:`${null!==(k=e.css)&&void 0!==k?k:""} form`,children:[(0,C.jsxs)("div",{children:[(0,C.jsx)("span",{dangerouslySetInnerHTML:{__html:e.header?e.header:"Login"}}),"steps"===Z&&(0,C.jsx)(a.Vx,{children:Object.keys(Y).map(((e,t)=>{const r=Oe===t,i=0===ee[e]&&Oe>=t,o=r?"active":i?"done":"upcoming";return(0,C.jsxs)(n.Fragment,{children:[t>0&&(0,C.jsx)(l.A0,{icon:"arrowRight"}),(0,C.jsx)(a.hV,{className:o,children:i?(0,C.jsx)(l.A0,{icon:"tick"}):t+1}),(0,C.jsx)("span",{className:o,children:e})]},e)}))}),""===(null!==(I=e.css)&&void 0!==I?I:"")&&(0,C.jsx)(s.Jn,{theme:fe,onClick:Fe,children:(0,C.jsx)(l.A0,{icon:"Close"})})]}),(0,C.jsx)("span",{children:e.description})]}),e.bulkUpload?(0,C.jsxs)(a.lV,{className:"list bulk",action:"#",children:[(null===ke||void 0===ke?void 0:ke.length)>0&&(0,C.jsxs)(g.XR,{children:[(0,C.jsxs)(g.M3,{onClick:()=>De(),children:[(0,C.jsx)(l.OC,{}),(0,C.jsx)("span",{children:O("Download Template")})]}),(0,C.jsx)(g.HW,{type:"file",accept:".xlsx, .xls",onChange:Se})]}),(0,C.jsxs)(y.Yq,{className:" bulk",children:[(null===ke||void 0===ke?void 0:ke.length)>0?(0,C.jsx)(g.XI,{className:"small",children:null===ke||void 0===ke?void 0:ke.map(((t,r)=>(0,C.jsx)(g.Tr,{className:"no-border bulk",children:J&&J.map(((e,n)=>{var a,o;const s=t[e.name];return e.upload,!0===(null!==(a=e.add)&&void 0!==a&&a)&&"hidden"!==e.type?(0,C.jsxs)(g.Td,{className:"bulk",children:[(0,C.jsx)(i.A,{bulkUpload:!0,formValues:ie,updateValue:{},dynamicClass:"textarea",placeholder:e.placeholder,id:n,index:r,error:ue[e.name],value:s,...e,onChange:Ee},"input"+n),(null===(o=V[r])||void 0===o?void 0:o[e.name])&&(0,C.jsx)("p",{children:V[r][e.name]})]},n):null}))},`${e.shortName}-${r}-${r}`)))}):(0,C.jsx)(b.t7,{upload:Se,download:De,icon:e.icon,shortName:e.shortName}),j>0&&(0,C.jsx)(a.Kw,{style:{marginTop:"10px"},children:O("errorCount",{count:j})})]})]}):(0,C.jsxs)(a.Mx,{className:`${null!==(S=e.css)&&void 0!==S?S:""} ${K>1?"tabs":""} ${Z}`,children:[K>1&&("normal"===Z?(0,C.jsx)(w.ru,{selectedTab:Ne,selectedChange:e=>je(e),tabs:Object.keys(Y).map((e=>({key:e,icon:e,title:e})))}):null),(0,C.jsxs)(a.lV,{action:"#",onSubmit:e=>{e.preventDefault()},className:`${K>1?"SubPage":""} ${null!==(D=e.css)&&void 0!==D?D:""} ${Le} ${Z}`,children:[z&&!0===ge?(0,C.jsx)(a.mS,{children:"Filling your form.."}):z&&(0,C.jsxs)(a.mS,{className:`record-button ${he&&"recording"}`,children:[(0,C.jsx)("button",{id:"record-button",className:"record-button",onClick:he?xe:()=>{pe(!0),navigator.mediaDevices.getUserMedia({audio:!0}).then((e=>{be.current=new MediaRecorder(e),be.current.ondataavailable=e=>{we.current.push(e.data)},be.current.onstop=xe,be.current.start()}))},children:he?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(l.A0,{icon:"mic"})," Stop Recording"]}):(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(l.A0,{icon:"mic"})," Record Audio"]})}),he&&(0,C.jsxs)("p",{children:["Tell us about the",(0,C.jsx)("span",{dangerouslySetInnerHTML:{__html:e.header.replace("Add a","").trim()}}),"you want to add. For example,",(0,C.jsx)("span",{children:J.filter((e=>e.add&&!["select","multiSelect","file","image"].includes(e.type))).map((e=>e.label)).join(", ")}),". You can speak in any language."]}),(0,C.jsx)("span",{className:"info",children:"Tired of Typing? Just talk and AI will do the rest!"})]}),Object.keys(Y).map((t=>(Ne===t||K<=1)&&(0,C.jsx)(n.Fragment,{children:Y[t].inputs.map(((r,n)=>{var a;let o="",s=!1;if(r.condition){let e=!1;e=Array.isArray(r.condition.if)?r.condition.if.some((e=>e===ie[r.condition.item])):ie[r.condition.item]===r.condition.if,o=e?r.condition.then:r.condition.else}"put"===e.formType&&!r.update&&r.view&&(s=!0);let l={};"select"!==r.type&&"multiSelect"!==r.type||(Array.isArray(r.updateOn)?(l={},r.updateOn.forEach((e=>{l[e]=ie[e]}))):l={[r.updateOn]:ie[r.updateOn]});const c=[...null!==(a=r.params)&&void 0!==a?a:[],e.referenceId?{name:e.parentReference,value:e.referenceId}:{}];return"put"===e.formType&&(r.update||r.view)||"post"===e.formType&&r.add?(0,C.jsx)(i.A,{setMessage:R,setLoaderBox:P,formType:e.formType,disabled:s,dynamicClass:Le+" "+o,formValues:ie,updateValue:l,placeholder:r.placeHolder,id:r.index,error:ue[J[r.index].name],value:ie[J[r.index].name],...r,params:c,onChange:_e},`input-${t}-${r.index}`):null}))},t))),!0===e.useCaptcha&&(0,C.jsx)(d.A,{error:ue.captchaError,label:O("captcha"),setCaptchaStatus:t=>{Ae(t),Ce(J,ie,ue,t,e.useCheckbox,e.useCaptcha)}},"1")]})]}),e.consent&&(0,C.jsx)(x.DH,{className:"consent",children:e.consent}),(0,C.jsx)(n.Fragment,{children:!re&&(0,C.jsx)(a.wi,{className:`${e.formLayout} ${null!==(Q=e.formType)&&void 0!==Q?Q:""} ${null!==(_=e.css)&&void 0!==_?_:""} ${X?"disabled":""}`,children:"steps"===Z?(0,C.jsxs)(n.Fragment,{children:[""===(null!==(T=e.css)&&void 0!==T?T:"")&&(0,C.jsx)(i.A,{type:"close",value:"Cancel",onChange:Fe}),Oe>0&&(0,C.jsx)(i.A,{css:e.css,type:"submit",name:"submit",value:"Back",onChange:()=>{Me((e=>{const t=e-1;return je(Object.keys(Y)[t]),t}))}}),K>1&&Oe+1<K&&(0,C.jsx)(i.A,{css:e.css,disabled:!(Object.keys(ee).length>0)||ee[Object.keys(Y)[Oe]]>0,type:"submit",name:"submit",value:"Next",onChange:()=>{Me((e=>{const t=e+1;return je(Object.keys(Y)[t]),t}))}}),Oe+1===K&&(0,C.jsx)(i.A,{css:e.css,disabled:X,type:"submit",name:"submit",value:e.button?e.button:"Submit",onChange:e.bulkUpload?Qe:Te})]}):(0,C.jsxs)(n.Fragment,{children:[""===(null!==(F=e.css)&&void 0!==F?F:"")&&(0,C.jsx)(i.A,{type:"close",value:"Cancel",onChange:Fe}),"put"===e.formType.toLowerCase()&&!e.bulkUpload&&!X&&(0,C.jsx)(i.A,{type:"close",value:"Discard",onChange:()=>{ae(oe),$(!0)}}),(0,C.jsx)(i.A,{css:e.css,disabled:X,type:"submit",name:"submit",value:e.button?e.button:"Submit",onChange:e.bulkUpload?Qe:Te})]})})})]})},e.referenceId)}))},74505:(e,t,r)=>{"use strict";r.d(t,{Kw:()=>d,Mx:()=>a,Vx:()=>p,YW:()=>A,hJ:()=>s,hV:()=>h,lV:()=>o,mS:()=>f,wi:()=>u});var n=r(94574),i=r(8276);const a=n.Ay.div`
  display: block;
  width: 100%;
  bottom: 80px;
  top: 80px;
  position: absolute;
  overflow: auto;
  padding-bottom: 20px;
  &.tabs {
    display: flex;
    padding: 20px 0px 0 20px;
  }
  &.steps {
    display: flex;
    flex-direction: column;
    padding: 20px 30px;
  }
  &.plain {
    position: static;
    overflow: inherit;
    display: flex;
    padding: 0;
  }
  
  &.iframe {
    padding-bottom: 0px;
  }
  &.accordion {
    padding-bottom: 0;
  }
`,o=(n.Ay.div`
  padding: 20px;
  overflow: auto;
`,n.Ay.div`
  border: 0px solid rgb(224, 224, 227);
  padding: 0.5em 0px;
  border-left: 10px;
  border-right: 0;
  border-radius: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  /* height: 80px; */
  padding: 20px 24px;
  flex: 1;

  &.double {
    display: grid;
    grid-template-columns: 1 1 1 1; /* Four equal columns (25% each) */
    grid-template-columns: repeat(4, 1fr);
    gap: 16px; /* Space between items */
    flex-flow: wrap;
  }
  &.single {
    display: grid;
    grid-template-columns: 1 1; /* Four equal columns (25% each) */
    grid-template-columns: repeat(2, 1fr);
    gap: 16px; /* Space between items */
    flex-flow: wrap;
  }

  &.embed {
    padding: 20px 0px;
  }
  &.accordion {
    padding: 0;
  }
  &.checkout {
    padding: 0px 0px !important;
  }
  &.plain {
    padding: 0px 0px 20px;
  }
  &.horizontal {
    display: flex;
    margin: 0;
    padding: 0;
    justify-content: center;
  }

  &.settings {
    padding: 20px;
  }
  &.info {
    border: 1px solid ${i.D.stroke.soft};
    padding: 16px;
    border-radius: 16px;
  }
  &.SubPage {
    padding: 20px;
    overflow: auto;
    margin-top: 0;
    margin-bottom: auto;
    grid-auto-rows: min-content;
  }
  &.steps {
    padding: 0px;
    overflow: initial;
  }
  @media (max-width: 768px) {
    border: 0;
    &.double {
      display: flex;
    }
  }
`),s=n.Ay.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 0;
  display: flex;
  justify-content: right;
  align-items: flex-start;
  overflow: auto;
  z-index: 1001;
  background-color: #00000033;
  &.plain {
    position: initial;
    background: transparent;
    padding: 0px;
    width: 100%;
    justify-content: left;
    overflow: initial;
    align-items: baseline;
    margin: 0px;
    z-index: initial;
  }
  &.info {
    /* background-color: ${i.D.bg.soft}; */
    padding: 0px;
    margin-bottom: 20px;
    &.horizontal.info {
      margin: 0px;
      background-color: ${i.D.bg.white};
      border: 0;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
    top: 0;
    bottom: 0;
    /* border-top: 1px solid rgb(224, 224, 227); */
  }
`,l=n.i7`  
  from {  
    transform: translateX(100%); 
    opacity: 0;
  }  
  to {  
    transform: translateX(0); 
    opacity: 1;
  }  
`,c=n.i7`  
  from {  
    opacity: 0;  
    scale: 0.95;  
  }  
  to {  
    opacity: 1;  
    scale: 1;  
  }  
`,A=n.Ay.div`
  display: flex;
  flex-direction: column;
  display: flex;
  background-color: white;
  border-radius: 0px;
  width: 400px;
  min-width: 250px;
  animation: ${l} 1s ease-in-out;
  animation-duration: 0.2s;
  padding: 0em 0em 0em;
  left: auto;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100vh;
  position: relative;
  overflow: auto;
  &.double {
    width: 765px;
  }
  &.large {
    width: 1200px;
  }
  &.fullscreen {
    width: 100%;
  }
  &.plain {
    border: 0px solid rgb(224, 224, 227);
    height: auto;
    border-radius: 10px;
    width: 100%;
    justify-content: left;
    overflow: initial;
    animation: none;
  }
  &.info {
    border: 0px solid rgb(224, 224, 227);
    &.single {
      width: 400px;
    }
    &.double {
      width: 765px;
    }
    border-radius: 10px;
    justify-content: left;
    overflow: initial;
    animation: none;
  }
  &.bulk {
    max-width: 80%;
    width: 1800px;
  }
  &.center {
    margin: auto;
    border-radius: 12px;
    max-height: 90dvh;
    animation: ${c} 0.1s ease-in-out;
  }
  @media (max-width: 768px) {
    width: 100%;
    position: relative;
    top: 0;
    padding: 0;
    &.double {
      width: 100%;
    }
  }
`,u=(n.Ay.div`
  text-align: center;
  padding: 0.5em 0 1em;
  font-weight: 500;
  font-size: 1.3em;
  @media (max-width: 768px) {
    position: sticky;
    top: 0;
    background: white;
    z-index: 1;
    border-bottom: 1px solid rgb(224, 224, 227);
  }
`,n.Ay.div`
  display: flex;
  justify-content: flex-end;
  justify-content: space-between;
  padding: 10px 24px;
  border: 1px 0px 0px 0px;
  gap: 10px;
  bottom: 0;
  width: 100%;
  height: 80px;
  border-top: 1px solid ${i.D.stroke.soft};
  background-color: ${i.D.bg.white};
  z-index: 1;
  position: absolute;
  bottom: 0;
  &.plain {
    box-shadow: none;
    justify-content: left;
    border-top: 0px solid #e9e9e9;
    position: inherit;
    bottom: 0;
    padding: 0;
    &.put.disabled {
      display: none;
    }
  }
  &.info {
    border-radius: 12px;
  }
  &.checkout {
  }
  && {
    .embed & {
      justify-content: left;
      padding: 0;
    }
  }
  &.landing {
    position: inherit;
  }
  &.iframe {
    position: sticky;
    bottom: 0;
    padding-bottom: 10px !important;
    border-top: 1px solid ${i.D.stroke.soft};
    height: auto;
  }
  &.popup {
    left: 0;
    right: 0;
    position: sticky;
  }
  &.bottom {
    left: 0px;
    right: 0px;
    position: absolute;
    bottom: 0;
    top: auto;
  }
  &.center {
    width: auto;
    width: 100%;
    justify-content: end;
    button {
      width: auto;
    }
  }
  @media (max-width: 768px) {
    position: sticky;
    bottom: 0;
    background: white;
    &.plain {
      padding-bottom: 10px !important;
    }
  }
`),d=n.Ay.div`
  border-left: 1px solid lightgrey;
  padding-left: 10px;
  margin: 0 0;
  color: #fe7b7b;
  font-size: 12px;
  width: 100%;
  text-align: left;
  float: left;
`,f=(n.Ay.div`
  display: flex;
  &.single {
  }
  &.double {
  }
`,n.Ay.div`
  display: flex;
  width: 100%;
  text-align: center;
  -webkit-box-pack: center;
  justify-content: center;
  margin-bottom: 10px;
  border-bottom: 1px dashed lightgray;
  padding-bottom: 20px;
  padding-top: 20px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  button {
    cursor: pointer;
    background-color: white;
    border: 1px solid lightgray;
    padding: 10px;
    border-radius: 10px;
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
  }
  &.recording {
    button,
    svg {
      color: red;
      font-weight: bold;
    }
  }
  .info {
    font-size: 12px;
  }
  p {
    font-size: 14px;
    span {
      font-weight: bold;
    }
  }
`),h=n.Ay.div`
  /* Icon */

  /* Auto layout */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2px;
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  text-align: center;

  width: 20px;
  height: 20px;
  background: transparent;
  border: 1px solid ${i.D.stroke.soft};
  color: ${i.D.text.sub};
  &.active {
    background: #375dfb;
    color: ${i.D.text.white};
  }
  &.done {
    background: ${i.D.state.success};
    color: ${i.D.text.white};
  }
  svg {
    color: white;
  }
  border-radius: 50%;
`,p=n.Ay.div`
  display: flex;
  gap: 15px;
  padding: 10px 0;
  margin-bottom: 20px;
  align-items: center;
  position: sticky;
  top: -20px;
  background-color: white;
  z-index: 1;
  margin: auto;
  justify-content: center;
  span {
    color: ${i.D.text.sub};
    &.active {
      color: ${i.D.text.main};
    }
  }
  svg {
    font-size: 10px;
  }
  @media screen and (max-width: 768px) {
    gap: 7px;
    font-size: 11.2px;
    font-weight: 500;
    line-height: 13.56px;
    letter-spacing: -0.006em;
    text-align: left;
    -webkit-box-pack: justify;
    justify-content: space-between;
    max-width: 360px;
    position: sticky;
    top: 0;
    background: white;
    padding: 10px 0;
    margin-bottom: 0;
  }
`},87920:(e,t,r)=>{"use strict";r.d(t,{_W:()=>A,gH:()=>u,m5:()=>c});var n=r(4008),i=r(46861),a=r(19787),o=r(83150),s=r(41210),l=r(70579);function c(e){const t=Math.floor(e/60),r=Math.floor(e%60);return`${t.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}`}const A=function(e,t){var r,A;let u=arguments.length>2&&void 0!==arguments[2]&&arguments[2],d=arguments.length>3&&void 0!==arguments[3]&&arguments[3],f=arguments.length>4&&void 0!==arguments[4]?arguments[4]:()=>{},h="";if(e.hide)return"";switch(e.type){case"minute":h=c(parseFloat(null!==t&&void 0!==t?t:0));break;case"file":const g=(null===t||void 0===t?void 0:t.length)>10?t.split(".").pop().toLowerCase():"jpeg";h=(0,l.jsxs)("a",{onClick:e=>{const r=t?"https://event-manager.syd1.cdn.digitaloceanspaces.com/"+t:s.hz;e.preventDefault();const n=document.createElement("a");n.href=r,n.target="_blank",n.download="",document.body.appendChild(n),n.click(),document.body.removeChild(n)},href:t?"https://event-manager.syd1.cdn.digitaloceanspaces.com/"+t:s.hz,target:"_blank",rel:"noreferrer",children:["Download ",g]});break;case"image":const m=["jpg","jpeg","png","gif","bmp","svg"],v=(null===t||void 0===t?void 0:t.length)>0?"https://event-manager.syd1.cdn.digitaloceanspaces.com/"+t:s.hz,y=(null===t||void 0===t?void 0:t.length)>10?t.split(".").pop().toLowerCase():"jpeg";h=m.includes(y)?d?(0,l.jsx)(n._V,{onClick:e=>{f({src:e.target.src.replace("/thumbnail","")}),e.stopPropagation()},style:{width:50,height:50},source:v}):(0,l.jsx)(o.E9,{onClick:e=>{f({src:e.target.src.replace("/thumbnail","")}),e.stopPropagation()},src:v}):(0,l.jsxs)("a",{onClick:e=>{const r=t?"https://event-manager.syd1.cdn.digitaloceanspaces.com/"+t:s.hz,n=t.split(".").pop().toLowerCase();if(!m.includes(n)){e.preventDefault();const t=document.createElement("a");t.href=r,t.target="_blank",t.download="",document.body.appendChild(t),t.click(),document.body.removeChild(t)}},href:t?"https://event-manager.syd1.cdn.digitaloceanspaces.com/"+t:s.hz,target:m.includes(t.split(".").pop().toLowerCase())?"_self":"_blank",rel:"noreferrer",children:["Download ",y]});break;case"datetime":h=(0,a.LE)(t);break;case"multiSelect":case"select1":h="API"===e.apiType?t.map((t=>t[e.showItem].toString())).join(", "):t.map((t=>e.selectApi.find((e=>e.id===t)).value.toString())).join(", ");break;case"number":try{h=Number.isInteger(t||0)?(t||0).toString():(t||0).toFixed(2),h=t}catch(p){h=t}break;case"percentage":try{h=Number.isInteger(t||0)?(t||0).toString()+"%":(t||0).toFixed(2)+"%"}catch(p){console.log(p),h=t}break;case"date":h=(0,a.i$)(t);break;case"textarea":case"htmleditor":h=d?t:(0,l.jsx)("span",{dangerouslySetInnerHTML:{__html:null===t||void 0===t||null===(r=t.toString())||void 0===r?void 0:r.substring(0,200)}});break;case"checkbox":h=(0,l.jsx)(o.L5,{className:u&&"display",children:t?(0,l.jsx)(i.A0,{icon:"checked"}):(0,l.jsx)(i.A0,{icon:"Close"})});break;case"icon":h=(0,l.jsx)("i",{className:`fa-light ${t}`});break;default:switch(typeof t){case"undefined":h="--";break;case"object":h=null!==(A=null===t||void 0===t?void 0:t[e.showItem])&&void 0!==A?A:"--";break;case"boolean":h=t.toString();break;default:if("select"===e.type&&"JSON"===e.apiType){const r=e.selectApi.filter((e=>e.id.toString()===(null===t||void 0===t?void 0:t.toString()))).map((e=>h=e.value));h=null===r||void 0===r?void 0:r[0].toString().substring(0,200)}else h=null===t||void 0===t?void 0:t.toString().substring(0,200)}}return h},u=(e,t)=>{const r={},n=[];console.log(e,t);const i=(e,t)=>{if(e.size!==t.size)return!1;for(let r of e)if(!t.has(r))return!1;return!0};for(const o in t)if(t.hasOwnProperty(o)){const a=e[o],s=t[o];if(Array.isArray(a)&&Array.isArray(s)){const e=new Set(a),t=new Set(s);if(!i(e,t)){const i=`${o} [${Array.from(e).join(", ")}]->[${Array.from(t).join(", ")}]`;n.push(i),r[o]=s}}else if(a!==s){const e=`${o} ${a}->${s}`;n.push(e),r[o]=s}}const a=n.length>0?n.join("\n")+" are changed":"No changes detected";return console.log(a),{log:a,changedObject:r}}},81904:(e,t,r)=>{"use strict";r.d(t,{A:()=>u});r(65043);var n=r(94574),i=r(41210),a=r(70579);const o=n.Ay.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00000033;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,s=n.i7`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`,l=n.Ay.div`
  max-width: 90%;
  max-height: 90vh;
  display: flex;
  justify-content: center;
  animation: ${s} 0.3s ease-in-out;
`,c=n.Ay.img`
  max-width: 90%;
  border: 1px solid #e2e4e9;
  max-height: 90vh;
  object-fit: contain;
  background-color: white;
  border-radius: 12px;
`,A=n.Ay.div`
  cursor: pointer;
`,u=e=>{let{src:t,alt:r,onClose:n}=e;return(0,a.jsx)(A,{onClick:()=>{n()},children:(0,a.jsx)(o,{children:(0,a.jsx)(l,{children:(0,a.jsx)(c,{onError:e=>{e.target.src=i.hz},src:t,alt:r})})})})}},31066:(e,t,r)=>{"use strict";r.d(t,{A:()=>m});var n=r(65043),i=r(9667),a=r(8075),o=r(94574),s=r(8276);const l=o.Ay.div`
  border: 1px dashed ${s.D.stroke.soft};
  border-radius: 8px;
  padding: 40px;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  transition: background-color 0.2s;
  align-items: center;
  gap: 10px;

  svg {
    font-size: 30px;
  }
  &:hover {
    /* background-color: #edf2f7; */
  }
`,c=o.Ay.div`
  display: flex;
  flex-direction: column;
  div:first-child {
    font-size: 14px;
    font-weight: 500;
    line-height: 16.94px;
    letter-spacing: -0.006em;
    text-align: center;
    color: ${s.D.text.main};
  }
  div:last-child {
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    text-align: center;
    color: ${s.D.text.soft};
  }
`,A=(o.Ay.button`
  margin-top: 16px;
  padding: 10px 20px;
  font-size: 1rem;
  color: #ffffff;
  background-color: #3182ce;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: #2b6cb0;
  }
`,o.Ay.div`
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 16px;
`,o.Ay.div`
  /* border: 1px solid #e2e8f0; */
  border-radius: 0px;
  padding: 0px;
  background-color: #ffffff;
  /* box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1); */
  position: relative;
  height: 100px;
  width: 152px;
  cursor: pointer;
  &:hover {
    background: black;
  }
  img {
    height: 100px;
    object-fit: cover;
    width: 100%;
  }
  div {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    align-items: last baseline;
    gap: 10px;
    display: none;
    justify-content: flex-end;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    span {
      display: none;
      font-size: 14px;
      font-weight: 500;
      line-height: 16.94px;
      letter-spacing: -0.006em;
      text-align: left;
      color: white;
    }
    button {
      display: none !important;
    }
  }
  &:hover div {
    display: flex;
    background: #00000059;
    span,
    button {
      display: block !important;
    }
  }
`,o.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,o.Ay.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  border: 1px solid ${s.D.stroke.soft};
  padding: 16px 16px 16px 14px;
  border-radius: 12px;
  .info {
    flex-direction: column;
    display: flex;
    flex: 1;
    gap: 4px;
  }
  .buttons {
    display: flex;
  }
  .count {
    font-size: 14px;
    font-weight: 500;
    line-height: 16.94px;
    letter-spacing: -0.006em;
    text-align: left;
    color: ${s.D.text.main};
  }
  .status {
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    text-align: left;
    color: ${s.D.text.sub};
    display: flex;
    gap: 5px;
    align-items: center;
    span {
      display: flex;
      align-items: center;
      gap: 5px;
    }
    span::before {
      content: "•";
    }
    .green {
      color: ${s.D.state.success};
    }
    .red {
      color: ${s.D.state.error};
    }
  }
  .side .status {
    align-items: baseline;
    span::before {
      display: none;
    }
  }
`);o.Ay.div`
  position: absolute;
  bottom: 0;
  padding: 5px;
  div {
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0.04em;
    text-align: left;
  }
`,o.Ay.span`
  margin-left: 8px;
  color: ${e=>{switch(e.status){case"pending":return"orange";case"uploading":return"blue";case"uploaded":return"green";case"failed":return"red";default:return"black"}}};
`;var u=r(38520),d=r(46861),f=r(17118),h=r(36824),p=r(92073),g=r(70579);const m=e=>{let{openData:t,viewMode:r="",api:o,imageSettings:s,showTitle:m=!1}=e;const[v,y]=(0,n.useState)("");(0,n.useEffect)((()=>{const e=(0,p.A)();y(e)}),[]);const[b,w]=(0,n.useState)(o);(0,n.useEffect)((()=>{console.log({api:o},"changed"),w(o)}),[o]);const[x,C]=(0,n.useState)([]),[B,E]=(0,n.useState)(0),[k,I]=(0,n.useState)(0),[S,D]=(0,n.useState)(0),[Q,_]=(0,n.useState)(!1),[T,F]=(0,n.useState)(!1),[O,M]=(0,n.useState)("idle"),[N,j]=(0,n.useState)({uploadedMB:0,totalMB:0,uploadedCount:0,totalCount:0}),L=(0,n.useRef)(null);(0,n.useEffect)((()=>{j({uploadedMB:50,totalMB:100,uploadedCount:0,totalCount:20})}),[]);const U=(0,n.useCallback)((()=>{const e=x.filter((e=>"uploaded"===e.status)).length,t=x.filter((e=>"failed"===e.status)).length,r=x.filter((e=>"pending"===e.status||"waiting"===e.status)).length;console.log("Uploaded:",e,"Failed:",t,"Pending:",r,"image count",x.length),e===x.length&&x.length>0?(M("completed"),console.log("completed")):T?M("waiting"):r>0&&M("uploading")}),[x,T]);(0,n.useEffect)((()=>{U()}),[T,U]);const R=(0,n.useCallback)((async(e,r)=>{const n=new FormData;n.append(s.fileName,e.file),n.append("event",t.data._id);const i=e=>{C((t=>{const n=[...t];return n[r]={...n[r],status:e},n}))};try{return 200!==(await(0,h.EH)(n,b)).status?(console.warn("Uplaod Stoped! on: ",r),!1):(i("uploaded"),I(r),U(),!0)}catch(a){return console.error("Error:",a),i("failed"),U(),!1}}),[t.data._id,U,s,b]),P=e=>new Promise((t=>setTimeout(t,e))),H=(0,n.useCallback)((async()=>{_(!0),F(!1);for(let e=parseInt(k);e<x.length;e++)if("pending"===x[e].status){if(!await R(x[e],e))return F(!0),U(),void console.warn("Uplaod Breaked! on: ",k);await P(2e3)}_(!1),U()}),[x,R,U,k]);(0,n.useEffect)((()=>{x.length>0&&!Q&&H()}),[x,Q,H]);const z=e=>{const t=[];let r=S;const n=["image/jpeg","image/png"];[...e].forEach((e=>{n.includes(e.type)?(t.push({file:e,status:"pending"}),r+=e.size):console.warn(`${e.name} is not an image. Only JPEG and PNG formats are accepted.`)})),t.length>0&&(C((e=>[...e,...t])),E((e=>e+t.length)),D(r))},V=x.reduce(((e,t)=>"uploaded"===t.status?e+t.file.size:e),0),G=x.reduce(((e,t)=>"uploaded"===t.status?e+1:e),0),Y=V/1048576,W=S/1048576;return(0,g.jsxs)(i.JJ,{className:"data-layout "+r,children:[m&&(0,g.jsx)(a.F,{title:"Upload Photos",line:!1,description:"Upload your event snaps here"}),("uploading"===O||"waiting"===O||"completed"===O)&&(0,g.jsxs)(A,{viewMode:r,children:[(0,g.jsxs)("div",{className:"info",children:[(0,g.jsxs)("div",{className:"count",children:[G," of ",B," Photos Uploaded"]}),(0,g.jsxs)("div",{className:"status",children:[Y.toFixed(2)," MB of ",W.toFixed(2)," MB",T?(0,g.jsxs)("span",{className:"red",children:[(0,g.jsx)(d.A0,{icon:"progress"})," Waiting for connection"]}):"uploading"===O?(0,g.jsxs)("span",{children:[(0,g.jsx)(d.A0,{icon:"progress",rotate:!0})," Uploading"]}):"completed"===O&&(0,g.jsxs)("span",{className:"green",children:[(0,g.jsx)(d.A0,{icon:"success"})," Completed"]})]}),"completed"!==O&&(0,g.jsx)(f.yP,{children:(0,g.jsx)("div",{style:{width:G/B*100+"%"}})})]}),T&&(0,g.jsx)("div",{className:"buttons",children:(0,g.jsx)(u.$n,{value:"Retry",ClickEvent:()=>H(),type:"error",icon:"reload"})}),"completed"===O&&(0,g.jsx)("div",{className:"buttons",children:(0,g.jsx)(u.K0,{value:"Retry",ClickEvent:()=>H(),icon:"copy"})})]}),!Q&&(0,g.jsxs)(l,{onDragOver:e=>e.preventDefault(),onDrop:e=>{e.preventDefault(),z(e.dataTransfer.files)},onClick:()=>L.current.click(),children:[(0,g.jsx)(d.A0,{icon:"upload"}),(0,g.jsxs)(c,{children:[(0,g.jsx)("div",{children:"Choose a file or drag & drop it here."}),(0,g.jsxs)("div",{children:["JPEG & PNG formats, up to ",N.totalMB-N.uploadedMB," MB."]})]}),(0,g.jsx)(u.$n,{value:"Browse Images",type:"secondary"}),(0,g.jsx)("input",{ref:L,type:"file",id:"file-input",name:v,multiple:!0,onChange:e=>z(e.target.files),style:{display:"none"}})]})]})}},82550:(e,t,r)=>{"use strict";r.d(t,{A:()=>Et});var n=r(65043),i=r(83150),a=r(79456),o=r(9667),s=r(46861),l=r(73216),c=r(36824),A=r(79885),u=r(64980),d=r(97152),f=r(41137);const h=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return async n=>{n({type:"NEW_ACTION_LIST_LOADING",key:`${e}-${t}`}),await(0,c.bQ)({skip:r,limit:10},`${e}/${t}`).then((r=>{n({type:"NEW_ACTION_LIST",payload:{...r,isLoading:!1},key:`${e}-${t}`})})).catch((e=>{n({type:"NEW_ACTION_LIST",payload:e})}))}},p=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return async n=>{n({type:"ADDED_ACTION_LIST_LOADING",key:`${e}-${t}`}),await(0,c.bQ)({skip:r,limit:10},`${e}/${t}`).then((r=>{n({type:"ADDED_ACTION_LIST",payload:{...r,isLoading:!1},key:`${e}-${t}`})})).catch((e=>{n({type:"ADDED_ACTION_LIST",payload:e})}))}};var g=r(35190),m=r(70579);const v=e=>{var t,r,s,l;let{setMessage:A,setLoaderBox:v,data:y,item:b,onClose:w}=e;const{t:x}=(0,f.Bd)(),C=(0,a.d4)((e=>e.themeColors)),B=(0,a.wA)();(0,n.useEffect)((()=>{v(!1)}),[v]);const[E,k]=(0,n.useState)("added-list"),I=(0,a.d4)((e=>e.actionNewList[`${b.SelectionListApi}-${y._id}`]?e.actionNewList[`${b.SelectionListApi}-${y._id}`]:{data:null,isLoading:!1,error:null})),S=(0,a.d4)((e=>e.actionAddedList[`${b.crudApi}-${y._id}`]?e.actionAddedList[`${b.crudApi}-${y._id}`]:{data:null,isLoading:!1,error:null}));(0,n.useEffect)((()=>{v(I.isLoading||S.isLoading)}),[I,S,v]),(0,n.useEffect)((()=>{v(!0),B(p(b.crudApi,y._id)),B(h(b.SelectionListApi,y._id))}),[b,v,y,B]),(0,n.useEffect)((()=>{v(!1)}),[S,I,v]);return(0,m.jsx)(d.hJ,{children:(0,m.jsxs)(d.YW,{children:[(0,m.jsx)(d.Y9,{children:x(y.title?`${y.title} / ${b.title}`:b.title)}),(0,m.jsx)(d.lV,{children:(0,m.jsxs)(d.j,{children:[(0,m.jsxs)(d.tu,{children:[(0,m.jsx)(d.sB,{theme:C,className:"added-list"===E&&"active",onClick:()=>k("added-list"),children:x("addedList",{title:b.title})}),(0,m.jsx)(d.sB,{theme:C,className:"new-list"===E&&"active",onClick:()=>k("new-list"),children:x("newList",{title:b.title})})]}),(0,m.jsx)(d.oz,{active:"added-list"===E,children:(0,m.jsx)(o.Yq,{children:(0,m.jsx)(o.so,{children:(0,m.jsx)(i.XI,{children:(0,m.jsx)("tbody",{children:(null===(t=S.data)||void 0===t?void 0:t.data.length)>0?null===(r=S.data)||void 0===r?void 0:r.data.map((e=>{var t,r;return(0,m.jsxs)(i.Tr,{children:[(0,m.jsx)(i.Td,{children:null===(t=e[b.ref])||void 0===t||null===(r=t.title)||void 0===r?void 0:r.toString()}),(0,m.jsx)(i.Td,{className:"actions",children:(0,m.jsx)(i.$n,{className:"delete",onClick:()=>{(async e=>{v(!0),await(0,c.Wv)({},b.crudApi,e),B(p(b.crudApi,y._id))})(e._id)},children:"Delete"})})]},`actionAddedList-${e._id}`)})):(0,m.jsx)(i.Tr,{children:(0,m.jsx)(i.Td,{children:`No ${b.title} added!`})},"no-data")})})})})}),(0,m.jsx)(d.oz,{active:"new-list"===E,children:(0,m.jsx)(o.Yq,{children:(0,m.jsx)(o.so,{children:(0,m.jsx)(i.XI,{children:(0,m.jsx)("tbody",{children:(null===(s=I.data)||void 0===s?void 0:s.length)>0?null===(l=I.data)||void 0===l?void 0:l.map((e=>{var t;return(0,m.jsxs)(i.Tr,{children:[(0,m.jsx)(i.Td,{children:null===(t=e[b.displaySelect])||void 0===t?void 0:t.toString()}),(0,m.jsx)(i.Td,{className:"actions",children:(0,m.jsx)(i.$n,{className:"add",onClick:()=>{(async e=>{v(!0);const t={[b.id]:y._id,[b.ref]:e._id},r=await(0,c.LS)(t,b.crudApi,B);200===r.status?(B(p(b.crudApi,y._id)),B(h(b.SelectionListApi,y._id))):400===r.status?A({type:1,content:`The ${b.title} you are trying to add is already exist!`,proceed:"Okay"}):401===r.status?B((0,g.T8)()):A({type:1,content:r.data,proceed:"Okay"}),v(!1)})(e)},children:"Select"})})]},`actionNewList-${e._id}`)})):(0,m.jsx)(i.Tr,{children:(0,m.jsx)(i.Td,{children:`No ${b.title} remaning!`})},"no-data")})})})})})]})}),(0,m.jsx)(d.wi,{children:(0,m.jsx)(u.A,{type:"close",value:x("cancel"),onChange:()=>{w()}})})]})})};var y=r(99837),b=r(30791),w=r(87920),x=r(46193),C=r(8075);const B=e=>{var t,r,n,i,a,l,c,A,u,h,p,g,v,y,b,B;let{parents:E,themeColors:k,subAttributes:I,setLoaderBox:S,setMessage:D,closeModal:Q,itemTitle:_}=e;const[T]=(0,f.Bd)(),F=((null===(t=_.collection)||void 0===t?void 0:t.length)>0?null!==(r=null===I||void 0===I||null===(n=I.data)||void 0===n||null===(i=n[_.collection])||void 0===i?void 0:i[_.name])&&void 0!==r?r:"":null===I||void 0===I||null===(a=I.data)||void 0===a?void 0:a[_.name])||"Please update the itemTitle.",O=null!==(l=I.item.type)&&void 0!==l?l:"subList";return(0,m.jsx)(d.hJ,{children:(0,m.jsxs)(d.YW,{className:null!==(c=null===I||void 0===I||null===(A=I.item)||void 0===A||null===(u=A.params)||void 0===u?void 0:u.customClass)&&void 0!==c?c:"",children:[(0,m.jsxs)(d.Y9,{className:"custom",children:[(0,m.jsx)(C.z,{title:`${(0,w._W)(_,F)} / ${T(null===I||void 0===I||null===(h=I.item)||void 0===h?void 0:h.title)}`,line:!1,description:""}),(0,m.jsx)(x.Jn,{theme:k,onClick:Q,children:(0,m.jsx)(s.A0,{icon:"Close"})})]}),(0,m.jsx)(o.Yq,{theme:k,className:"popup-data padding",children:(0,m.jsx)(Et,{showTitle:!1,rowLimit:20,viewMode:O,setMessage:D,setLoaderBox:S,parents:{...E,[null===I||void 0===I||null===(p=I.item)||void 0===p||null===(g=p.params)||void 0===g?void 0:g.parentReference]:null===I||void 0===I||null===(v=I.data)||void 0===v?void 0:v._id},parentReference:null===I||void 0===I||null===(y=I.item)||void 0===y||null===(b=y.params)||void 0===b?void 0:b.parentReference,referenceId:null===I||void 0===I||null===(B=I.data)||void 0===B?void 0:B._id,attributes:I.item.attributes,...I.item.params})})]})})};var E=r(86178),k=r.n(E),I=r(86347),S=r(94574);const D=S.Ay.div`
  display: "flex";
  position: relative;
`,Q=(0,S.Ay)(I.Ur)`
  position: absolute;
  z-index: 1002;
  display: none !important;
  top: 50px;
  border-radius: 10px;
  &.true {
    display: flex !important;
  }
`,_=S.Ay.button`
  background: transparent;
  padding: 0 0.5em;
  font-size: 1em;
  margin-right: 0.5em;
  outline: none;
  border: 0px solid #ddd;
  border: 0px solid #ddd;
  cursor: pointer;
  height: 40px;
  margin-right: 10px;
  padding: 12px;
  background: ${e=>e.theme.background};
  border-radius: 12px;
  margin-top: 0px;
  cursor: pointer;
  font-weight: 700;
  font-size: 13.5px;
  &:hover {
    color: ${e=>e.theme.bgPrimary};
  }
`;var T={lessThanXSeconds:{standalone:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"},withPreposition:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"}},xSeconds:{standalone:{one:"1 Sekunde",other:"{{count}} Sekunden"},withPreposition:{one:"1 Sekunde",other:"{{count}} Sekunden"}},halfAMinute:{standalone:"halbe Minute",withPreposition:"halben Minute"},lessThanXMinutes:{standalone:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"},withPreposition:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"}},xMinutes:{standalone:{one:"1 Minute",other:"{{count}} Minuten"},withPreposition:{one:"1 Minute",other:"{{count}} Minuten"}},aboutXHours:{standalone:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"},withPreposition:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"}},xHours:{standalone:{one:"1 Stunde",other:"{{count}} Stunden"},withPreposition:{one:"1 Stunde",other:"{{count}} Stunden"}},xDays:{standalone:{one:"1 Tag",other:"{{count}} Tage"},withPreposition:{one:"1 Tag",other:"{{count}} Tagen"}},aboutXWeeks:{standalone:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"},withPreposition:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"}},xWeeks:{standalone:{one:"1 Woche",other:"{{count}} Wochen"},withPreposition:{one:"1 Woche",other:"{{count}} Wochen"}},aboutXMonths:{standalone:{one:"etwa 1 Monat",other:"etwa {{count}} Monate"},withPreposition:{one:"etwa 1 Monat",other:"etwa {{count}} Monaten"}},xMonths:{standalone:{one:"1 Monat",other:"{{count}} Monate"},withPreposition:{one:"1 Monat",other:"{{count}} Monaten"}},aboutXYears:{standalone:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahre"},withPreposition:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahren"}},xYears:{standalone:{one:"1 Jahr",other:"{{count}} Jahre"},withPreposition:{one:"1 Jahr",other:"{{count}} Jahren"}},overXYears:{standalone:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahre"},withPreposition:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahren"}},almostXYears:{standalone:{one:"fast 1 Jahr",other:"fast {{count}} Jahre"},withPreposition:{one:"fast 1 Jahr",other:"fast {{count}} Jahren"}}};const F=function(e,t,r){var n,i=null!==r&&void 0!==r&&r.addSuffix?T[e].withPreposition:T[e].standalone;return n="string"===typeof i?i:1===t?i.one:i.other.replace("{{count}}",String(t)),null!==r&&void 0!==r&&r.addSuffix?r.comparison&&r.comparison>0?"in "+n:"vor "+n:n};var O=r(15258);const M={date:(0,O.A)({formats:{full:"EEEE, do MMMM y",long:"do MMMM y",medium:"do MMM y",short:"dd.MM.y"},defaultWidth:"full"}),time:(0,O.A)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,O.A)({formats:{full:"{{date}} 'um' {{time}}",long:"{{date}} 'um' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})};var N={lastWeek:"'letzten' eeee 'um' p",yesterday:"'gestern um' p",today:"'heute um' p",tomorrow:"'morgen um' p",nextWeek:"eeee 'um' p",other:"P"};const j=function(e,t,r,n){return N[e]};var L=r(39344),U={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","M\xe4r","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],wide:["Januar","Februar","M\xe4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]},R={narrow:U.narrow,abbreviated:["Jan.","Feb.","M\xe4rz","Apr.","Mai","Juni","Juli","Aug.","Sep.","Okt.","Nov.","Dez."],wide:U.wide};const P={ordinalNumber:function(e){return Number(e)+"."},era:(0,L.A)({values:{narrow:["v.Chr.","n.Chr."],abbreviated:["v.Chr.","n.Chr."],wide:["vor Christus","nach Christus"]},defaultWidth:"wide"}),quarter:(0,L.A)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. Quartal","2. Quartal","3. Quartal","4. Quartal"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,L.A)({values:U,formattingValues:R,defaultWidth:"wide"}),day:(0,L.A)({values:{narrow:["S","M","D","M","D","F","S"],short:["So","Mo","Di","Mi","Do","Fr","Sa"],abbreviated:["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],wide:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"]},defaultWidth:"wide"}),dayPeriod:(0,L.A)({values:{narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachm.",evening:"Abend",night:"Nacht"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"}},defaultWidth:"wide",formattingValues:{narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachm.",evening:"abends",night:"nachts"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"}},defaultFormattingWidth:"wide"})};var H=r(84240);const z={code:"de",formatDistance:F,formatLong:M,formatRelative:j,localize:P,match:{ordinalNumber:(0,r(64734).A)({matchPattern:/^(\d+)(\.)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e)}}),era:(0,H.A)({matchPatterns:{narrow:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,abbreviated:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,wide:/^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^v/i,/^n/i]},defaultParseWidth:"any"}),quarter:(0,H.A)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? Quartal/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,H.A)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(j[a\xe4]n|feb|m\xe4r[z]?|apr|mai|jun[i]?|jul[i]?|aug|sep|okt|nov|dez)\.?/i,wide:/^(januar|februar|m\xe4rz|april|mai|juni|juli|august|september|oktober|november|dezember)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^j[a\xe4]/i,/^f/i,/^m\xe4r/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,H.A)({matchPatterns:{narrow:/^[smdmf]/i,short:/^(so|mo|di|mi|do|fr|sa)/i,abbreviated:/^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i,wide:/^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^so/i,/^mo/i,/^di/i,/^mi/i,/^do/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:(0,H.A)({matchPatterns:{narrow:/^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,abbreviated:/^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,wide:/^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i},defaultMatchWidth:"wide",parsePatterns:{any:{am:/^v/i,pm:/^n/i,midnight:/^Mitte/i,noon:/^Mitta/i,morning:/morgens/i,afternoon:/nachmittags/i,evening:/abends/i,night:/nachts/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:4}};const V=function(e){var t,r;const[i]=(0,f.Bd)(),a=i.language,o={...z,options:{...z.options,weekdays:["So","Mo","Di","Mi","Do","Fr","Sa"],months:["Januar","Februar","M\xe4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],relativeTime:{...z.options.relativeTime,future:"in %s",past:"vor %s",s:"wenigen Sekunden",m:"einer Minute",mm:"%d Minuten",h:"einer Stunde",hh:"%d Stunden",d:"einem Tag",dd:"%d Tagen",M:"einem Monat",MM:"%d Monaten",y:"einem Jahr",yy:"%d Jahren"}}},s=[{label:"Heute",range:()=>({startDate:new Date,endDate:new Date})},{label:"Gestern",range:()=>({startDate:new Date((new Date).setDate((new Date).getDate()-1)),endDate:new Date((new Date).setDate((new Date).getDate()-1))})},{label:"Diesen Monat",range:()=>({startDate:new Date((new Date).getFullYear(),(new Date).getMonth(),1),endDate:new Date})},{label:"Letzten Monat",range:()=>({startDate:new Date((new Date).getFullYear(),(new Date).getMonth()-1,1),endDate:new Date((new Date).getFullYear(),(new Date).getMonth(),0)})}],l=t=>{A(t);const r=t[0];null!==r&&void 0!==r&&r.startDate&&null!==r&&void 0!==r&&r.endDate&&(e.onChange(r),p(!1))},[c,A]=(0,n.useState)([{startDate:null,endDate:null,key:"selection"}]),u=null!==(t=c[0])&&void 0!==t&&t.startDate?k()(c[0].startDate).format("MMM D"):"From",d=null!==(r=c[0])&&void 0!==r&&r.endDate?k()(c[0].endDate).format("MMM D"):"To",[h,p]=(0,n.useState)(!1),g=(0,n.useRef)(null);return(0,n.useEffect)((()=>{function e(e){var t;null!==(t=g.current)&&void 0!==t&&t.contains(e.target)||p(!1)}return document.addEventListener("click",e),()=>{document.removeEventListener("click",e)}}),[]),(0,m.jsxs)(D,{ref:g,children:[(0,m.jsxs)(_,{theme:e.themeColors,onClick:()=>{(e=>{p(e)})(!h)},children:[u," - ",d]}),"de"===a?(0,m.jsx)(Q,{locale:o,className:h,ranges:c,staticRanges:s,showSelectionPreview:!1,showMonthAndYearPickers:!1,showDateDisplay:!1,months:1,onChange:e=>{l([e.selection])}}):(0,m.jsx)(Q,{className:h,ranges:c,showSelectionPreview:!1,showMonthAndYearPickers:!1,showDateDisplay:!1,months:1,onChange:e=>{l([e.selection])}})]})};var G=r(11238);S.Ay.div`
  display: flex;
`,S.Ay.div`
  font-weight: bold;
  display: flex;
  margin: 0;
  color: #1381c5;
  padding: 0.5em 1em;
  margin-bottom: 3.5em;
  border-bottom: 1px solid white;
  text-transform: uppercase;
  &:first-child {
    margin-top: 0;
  }
`,S.Ay.div`
  display: flex;
  padding: 0.5em 1em;
  &.between {
    justify-content: space-between;
  }
  svg {
    margin-top: 3px;
    margin-right: 10px;
  }
  &.red {
    color: red;
  }
`,S.Ay.div`
  display: flex;
  font-weight: 600;
  padding: 0.5em 1em;
  svg {
    margin-right: 10px;
  }
`,S.Ay.div`
  display: flex;
  flex: 1 1 25%;
  span {
    margin-left: 10px;
    cursor: pointer;
  }
  &.paid {
    color: green;
  }
  &.canceled {
    color: red;
  }
  &.open {
    color: yellow;
  }
  @media screen and (max-width: 768px) {
    &.hm {
      display: none;
    }
  }
`,S.Ay.span`
  position: relative;
`;const Y=S.Ay.div`
  position: absolute;
  top: 0;
  left: 19px;
  background-color: #fff;
  padding: 10px 15px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgb(0 0 0 / 20%);
  font-size: 14px;
  color: #333;
  white-space: nowrap;
  margin-bottom: 10px;
  cursor: initial;
  &.language {
    top: 27px;
    left: -80px;
    font-size: 18px;

    @media screen and (max-width: 768px) {
      font-size: 15px;
    }
  }
  &.actions {
    top: 50px;
    left: auto;
    right: 0;
    z-index: 1000;
    border-radius:12px;
    font-size: 18px;
    padding: 0px;
    @media screen and (max-width: 768px) {
      font-size: 15px;
    }
  }
  &.hide {
    display: none;
  }
`;var W=r(19787),K=r(13295),q=r(4008),Z=r(64008);const J=q.vv.create({page:{flexDirection:"column",backgroundColor:"#fff",padding:10},headerContainer:{marginBottom:10},scheduleContainer:{},recipeBlock:{},recipeTitle:{fontSize:18,textAlign:"center",marginBottom:10},table:{display:"table",width:"100%",borderStyle:"solid",borderColor:"#bfbfbf",borderWidth:1,borderRightWidth:0,borderBottomWidth:0},thead:{width:"100%"},tbody:{marginTop:2,width:"100%"},tr:{flexDirection:"row",justifyContent:"space-evenly",borderWidth:1,borderColor:"#bfbfbf",borderTopWidth:0},th:{padding:8,fontSize:12,fontWeight:"bold",textAlign:"left",flex:1,borderRightWidth:1,borderRightColor:"#bfbfbf"},td:{padding:8,fontSize:10,textAlign:"left",flex:1,borderRightWidth:1,borderRightColor:"#bfbfbf"},itemText:{textOverflow:"ellipsis"},header:{}}),X=e=>{let{orientation:t="protrait",style:r,themeColors:i,attributes:a,setLoaderBox:o,setMessage:s,closeModal:l,shortName:c,data:A=[]}=e;const[u]=(0,n.useState)(A.response),d=e=>{let{attributes:t,data:r,slNo:n}=e;return console.log(n,r),(0,m.jsx)(q.Ss,{style:J.tr,children:t.map(((e,t)=>{var n;if(null===(n=e.print)||void 0===n||n)try{var i,a;const t=(null===(i=e.collection)||void 0===i?void 0:i.length)>0&&(null===(a=e.showItem)||void 0===a?void 0:a.length)>0?r[e.collection][e.showItem]:r[e.name];return(0,m.jsx)(q.Ss,{style:J.td,children:(0,m.jsx)(q.EY,{style:J.itemText,children:(0,w._W)(e,t,!1,!0)})})}catch(o){return(0,m.jsx)(q.Ss,{style:J.td,children:(0,m.jsx)(q.EY,{style:J.itemText,children:"--"})})}return null}))})};console.log("Print data:",u,a);return(0,m.jsx)(Z.YW,{children:Array.isArray(u)&&u.length>0&&(0,m.jsx)(q.TO,{style:{display:"flex",width:"100%",height:"74vh"},children:(0,m.jsx)(q.yo,{author:"Tecnocorp Solutions",subject:c,title:c,children:(0,m.jsx)(q.YW,{size:"A4",orientation:t,style:J.page,children:(0,m.jsxs)(q.Ss,{style:J.headerContainer,children:[(0,m.jsx)(q.Ss,{style:[J.scheduleContainer,J.recipeBlock],children:(0,m.jsx)(q.EY,{style:J.recipeTitle,children:`Print Page : ${c}`})}),Array.isArray(u)&&(0,m.jsxs)(q.Ss,{style:J.table,children:[(0,m.jsx)(q.Ss,{style:J.thead,children:(0,m.jsx)(q.Ss,{style:J.tr,children:a.map((e=>{var t;return!0===(null===(t=e.print)||void 0===t||t)?(0,m.jsx)(q.Ss,{style:J.th,children:(0,m.jsx)(q.EY,{style:J.header,children:e.label})}):""}))})}),(0,m.jsx)(q.Ss,{style:J.tbody,children:(null===u||void 0===u?void 0:u.length)>0&&u.map(((e,t)=>(0,m.jsx)(d,{slNo:t,attributes:a,data:e})))})]})]})})})})})},$=e=>e||"gray",ee=S.Ay.span`
  border: 1px solid ${e=>$(e.color)};
  color: ${e=>$(e.color)};
  border-radius: 5px;
  margin-left: 5px;
  font-weight: 400;
  padding: 2px 5px;
  font-size: 10px !important;
`,te=e=>{let{highlight:t,data:r}=e;const n=()=>{var e,n;const i=(null===(e=t.collection)||void 0===e?void 0:e.length)>1?null===(n=r[t.collection])||void 0===n?void 0:n[t.name]:r[t.name];return i?(0,w._W)(t,i):null};return t&&n()?(0,m.jsx)(ee,{color:(()=>{var e,n;return(null===(e=t.colorCollection)||void 0===e?void 0:e.length)>1?null===(n=r[t.colorCollection])||void 0===n?void 0:n[t.colorName]:r[t.colorName]})(),children:n()}):null},re=e=>{let{item:t}=e;const[r,i]=(0,n.useState)("");return(0,m.jsx)(u.A,{customClass:"filter",placeholder:t.placeHolder,value:r,id:t.name,...t,onChange:e=>{i(e)}},"input0")};var ne=r(74505);const ie=S.Ay.table`
  border-collapse: collapse;
  width: 100%;
  margin: 0 auto;
  margin-bottom: auto;
  th {
    background-color: ${e=>e.theme.pageBackground};
  }
  tr:hover {
    background-color: ${e=>e.theme.pageBackground};
  }
  &.auto {
    width: auto;
  }
  &&.plain {
    tr {
      border: 1px solid;
    }
  }
`,ae=S.Ay.div`
  padding: 25px;
`,oe=S.Ay.th`
  text-align: left;
  padding: 15px 8px 10px;
  white-space: nowrap;
  color: #444;
  font-weight: bolder;
  border-radius: 0px;
  :first-child {
    border-top-left-radius: 12px;
  }
  :last-child {
    border-top-right-radius: 12px;
  }
  && {
    .plain & {
      background-color: transparent;
    }
  }

  &.actions {
    display: flex;
    justify-content: right;
    padding-right: 20px;
  }
`,se=S.Ay.tr`
  border-bottom: 1px solid #ccc;
  &:hover {
    background-color: #ddedeb;
    border-radius: 12px;
  }
`,le=S.Ay.td`
  text-align: left;
  padding: 8px;
  height: 30px;
  position: relative;
  &.no,
  &.name {
    border: 1px solid gray;
  }
  &.has {
    border: 2px solid black;
    cursor: pointer;
  }
  &.no,
  &.has {
    text-align: center;
  }
  &.no svg {
    fill: grey;
  }
  &.name {
    text-overflow: "no-wrap";
  }
  &.actions {
    display: flex;
    justify-content: right;
    overflow-wrap: normal;
  }
  &.right {
    text-align: right;
  }
`,ce=e=>{var t;let{key:r,style:i,themeColors:a,attributes:o,setLoaderBox:l,setMessage:c,closeModal:A,shortName:u,data:f=[]}=e;const[h,p]=(0,n.useState)(!1);(0,n.useEffect)((()=>{h||(p(!0),console.log(h))}),[h]);const g=e=>{let{attributes:t,data:r,slNo:n}=e;return(0,m.jsx)(se,{children:t.map(((e,t)=>{if(e.view)try{var n,i;const a=(null===(n=e.collection)||void 0===n?void 0:n.length)>0&&(null===(i=e.showItem)||void 0===i?void 0:i.length)>0?r[e.collection][e.showItem]:r[e.name];return(0,m.jsx)(le,{children:(0,w._W)(e,a)},t)}catch(a){return(0,m.jsx)(le,{children:"--"},t)}return null}))},`${u}-${n}`)};return(0,m.jsx)(d.hJ,{style:i,children:(0,m.jsxs)(d.YW,{className:"medium",children:[(0,m.jsxs)(d.Y9,{children:[(0,m.jsx)("div",{children:(0,m.jsx)("span",{children:`${u}`})}),(0,m.jsx)(x.Jn,{theme:a,onClick:A,children:(0,m.jsx)(s.A0,{icon:"Close"})})]}),(0,m.jsx)(ae,{children:(0,m.jsxs)(ie,{theme:a,children:[(0,m.jsx)("thead",{children:(0,m.jsx)(se,{children:o.map((e=>!0===e.view?(0,m.jsx)(oe,{children:e.label},u+e.name):""))})}),(0,m.jsx)("tbody",{children:(null===(t=f.response)||void 0===t?void 0:t.length)>0&&f.response.map(((e,t)=>(0,m.jsx)(g,{slNo:t,attributes:o,data:e},`${u}-${t}`)))})]})}),(0,m.jsx)(ne.wi,{})]})},r)};var Ae=r(71341),ue=r(81904),de=r(38520);const fe=S.Ay.div`
  cursor: pointer;
  width: 200px;
  height: 150px;
  border: 1px solid #e2e4e9;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  border-radius: 12px;
  img {
    left: 0;
    right: 0;
    top: 0;
    bottom: 0px;
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 12px;
  }
  .left {
    margin-bottom: auto;
    margin-top: 5px;
    padding: 0 10px 0 0;
  }
  .action {
    background-color: #ffffffc2;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    margin-top: 5px;
    padding: 5px;
    width: auto;
  }
  .align.custom {
    margin: 5px 0 auto auto;
  }
`,he=S.Ay.img`
  position: absolute;
  object-fit: cover;
`,pe=S.Ay.div`
  margin: 10px 0;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  padding: 5px 10px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  background-color: #ffffffc2;
`,ge=S.Ay.div`
  margin: 0;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  padding: 0px;
  display: flex;
  flex-direction: column;
`,me=S.Ay.div`
  font-size: 14px;
  padding: 0 10px;
`,ve=e=>{let{fileSource:t,alt:r,action:i,title:a="File Name",date:o=new Date}=e;const[l,c]=(0,n.useState)(!1),A=e=>e.slice(2+(e.lastIndexOf(".")-1>>>0)),u=(e=>{switch(e.toLowerCase()){case"pdf":return"PDF";case"doc":case"docx":return"Word Document";case"xls":case"xlsx":return"Excel Spreadsheet";case"png":case"jpg":case"jpeg":return"Image";default:return"Unknown"}})(A(t));return(0,m.jsxs)(fe,{children:["Image"===u?(0,m.jsx)(he,{src:"https://event-manager.syd1.cdn.digitaloceanspaces.com/"+t,alt:r}):null,(0,m.jsxs)(ge,{children:[(0,m.jsxs)(de.S$,{className:"left",children:[(0,m.jsxs)(de.S$,{className:"action",children:[" ",i]}),!l&&(0,m.jsx)(de.K0,{ClickEvent:()=>{c(!0),fetch("https://event-manager.syd1.cdn.digitaloceanspaces.com/"+t).then((e=>e.blob())).then((e=>{const r=URL.createObjectURL(e);console.log(r);const n=document.createElement("a");n.href=r,n.download=`${a}.${A(t)}`,document.body.appendChild(n),n.click(),document.body.removeChild(n),URL.revokeObjectURL(r),c(!1)})).catch((e=>{console.error("Download error:",e),c(!1)}))},icon:"download"})]}),o&&(0,m.jsx)(me,{children:a}),(0,m.jsxs)(pe,{children:[(0,m.jsxs)("span",{children:[(0,m.jsx)(s.A0,{icon:"add-file"}),` ${u}`]}),(0,m.jsx)("span",{children:o&&(0,W.i$)(o)})]})]})]})};var ye=r(8276);const be=S.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  position: sticky;
  /* bottom: 0; */
  background-color: ${ye.D.bg.white};
  padding: 10px 0;
`,we=S.Ay.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.006em;
  text-align: left;
`,xe=S.Ay.div`
  display: flex;
  align-items: center;
  gap: 8px;
  button {
    border: none;
    border-radius: 6px;
    background-color: ${ye.D.bg.white};
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;
    width: 32px;
    height: 32px;
    padding: 6px;
    gap: 6px;
    border: 1px 0px 0px 0px;
    opacity: 0.9;
    box-shadow: 0px 1px 2px 0px #e4e5e73d;
    border: 1px solid ${ye.D.stroke.soft};
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.006em;
    text-align: center;
    color: ${ye.D.text.main};

    &:disabled {
      background-color: ${ye.D.bg.weak};
      cursor: not-allowed;
    }
    &.plain {
      border: 0;
      background-color: transparent;
      box-shadow: none;
    }
    &:hover:not(:disabled) {
      background-color: ${ye.D.bg.weak};
    }
    svg {
      color: ${ye.D.icon.sub};
    }
  }
`,Ce=S.Ay.div`
  display: flex;
  align-items: center;

  label {
    margin-right: 10px;
  }

  select {
    padding: 5px;
    border-radius: 3px;
    border: 1px solid #ccc;
    background-color: white;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`,Be=e=>{let{totalRows:t,onClick:r,perPage:i}=e;const a=[...10!==i?[{id:i,value:`Default (${i})`}]:[],{id:10,value:"10 / page"},{id:25,value:"25 / page"},{id:50,value:"50 / page"},{id:100,value:"100 / page"},{id:250,value:"250 / page"}],[o,l]=(0,n.useState)(1),[c,A]=(0,n.useState)(i),u=Math.ceil(t/c),d=e=>{l(e),r((e-1)*c,c)},[f,h]=(0,n.useState)(1);return(0,m.jsxs)(be,{children:[(0,m.jsxs)(we,{children:[t," Recods \u2022 ",(0,m.jsx)("span",{children:"Page "}),o," of ",u]}),c<t&&(0,m.jsxs)(xe,{children:[u>2&&(0,m.jsx)("button",{className:"plain",onClick:()=>d(1),disabled:1===o,children:(0,m.jsx)(s.A0,{icon:"ArrowDoubleLeft"})}),u>1&&(0,m.jsx)("button",{className:"plain",onClick:()=>d(o-1),disabled:1===o,children:(0,m.jsx)(s.A0,{icon:"ArrowLeft"})}),(()=>{const e=[],t=Math.min(u-f+1,4);for(let r=f;r<f+t;r++)r<=u&&e.push((0,m.jsx)("button",{onClick:()=>d(r),disabled:r===o,children:r},r));return f+t<=u&&e.push((0,m.jsx)("button",{onClick:()=>{h(f+4)},children:"..."},"more")),f>1&&e.unshift((0,m.jsx)("button",{onClick:()=>{h(Math.max(f-4,1))},children:"..."},"prev")),e})(),u>1&&(0,m.jsx)("button",{className:"plain",onClick:()=>d(o+1),disabled:o===u,children:(0,m.jsx)(s.A0,{icon:"arrowRight"})}),u>2&&(0,m.jsx)("button",{className:"plain",onClick:()=>d(u),disabled:o===u,children:(0,m.jsx)(s.A0,{icon:"ArrowRightDoubleIcon"})})]}),(0,m.jsx)(Ce,{children:c&&(0,m.jsx)(de.l6,{align:"auto",value:c,label:"",defaultValue:c,onSelect:e=>{return t=e,console.log("Current Index:",t),A(t.id),l(1),void r((o-1)*t.id,t.id);var t},selectApi:a})})]})};var Ee=r(37784);const ke=S.Ay.div`
  border: 0px solid rgb(224, 224, 227);
  padding: 0.5em 0px;
  border-left: 10px;
  border-right: 0;
  border-radius: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 1em 1.5em;
  &.double {
    display: flex;
    grid-template-columns: 1fr 1fr;
    flex-flow: wrap;
  }
  &.plain {
    padding: 0px;
  }

  @media (max-width: 768px) {
    border: 0;
    &.double {
      display: flex;
    }
  }
`,Ie=S.Ay.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 0;
  display: flex;
  justify-content: right;
  align-items: flex-start;
  overflow: auto;
  z-index: 1001;
  background-color: #00000033;
  &.plain {
    position: initial;
    background: transparent;
    padding: 0px;
    width: 100%;
    justify-content: left;
    overflow: initial;
    align-items: baseline;
    margin: 0px;
    z-index: initial;
  }
  &.info {
    background-color: ${ye.D.bg.soft};
    padding: 24px;
    &.horizontal.info {
      margin: 0px;
      background-color: ${ye.D.bg.white};
      border: 0;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
    top: 0;
    bottom: 0;
    border-top: 1px solid rgb(224, 224, 227);
  }
`,Se=S.i7`  
  from {  
    transform: translateX(100%); 
    opacity: 0;
  }  
  to {  
    transform: translateX(0); 
    opacity: 1;
  }  
`,De=S.Ay.div`
  display: flex;
  flex-direction: column;
  display: flex;
  background-color: white;
  border-radius: 0px;
  width: 400px;
  min-width: 250px;
  animation: ${Se} 1s ease-in-out;
  animation-duration: 0.2s;
  padding: 0em 0em 0em;
  left: auto;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100vh;
  position: relative;
  overflow: auto;
  &.double {
    width: 765px;
  }
  &.fullscreen {
    width: 100%;
  }
  &.plain {
    border: 0px solid rgb(224, 224, 227);
    height: auto;
    border-radius: 10px;
    width: 100%;
    justify-content: left;
    overflow: initial;
    animation: none;
  }
  &.info {
    border: 0px solid rgb(224, 224, 227);
    &.single {
      width: 400px;
    }
    &.double {
      width: 765px;
    }
    border-radius: 10px;
    justify-content: left;
    overflow: initial;
    animation: none;
  }
  &.bulk {
    max-width: 80%;
    width: 1800px;
  }
  @media (max-width: 768px) {
    width: 100%;
    position: relative;
    top: 0;
    padding: 0;
    &.double {
      width: 100%;
    }
  }
`,Qe=(S.Ay.div`
  text-align: center;
  padding: 0.5em 0 1em;
  font-weight: 500;
  font-size: 1.3em;
  @media (max-width: 768px) {
    position: sticky;
    top: 0;
    background: white;
    z-index: 1;
    border-bottom: 1px solid rgb(224, 224, 227);
  }
`,S.Ay.div`
  display: flex;
  justify-content: flex-end;
  justify-content: space-between;
  padding: 20px 24px 20px 24px;
  border: 1px 0px 0px 0px;
  gap: 10px;
  bottom: 0;
  width: 100%;
  border-top: 1px solid ${ye.D.stroke.soft};
  background-color: ${ye.D.bg.white};
  z-index: 1;
  &.plain {
    box-shadow: none;
    justify-content: left;
    border-top: 1px solid #e9e9e9;
    position: sticky;
    bottom: 0;
    &.disabled {
      display: none;
    }
  }
  &.info {
    border-radius: 12px;
  }
  && {
    .embed & {
      justify-content: center;
    }
  }

  @media (max-width: 768px) {
    position: sticky;
    bottom: 0;
    background: white;
    padding-bottom: 10px;
  }
`),_e=S.Ay.div`
  border-left: 1px solid lightgrey;
  padding-left: 10px;
  margin: 0 0;
  color: #fe7b7b;
  font-size: 12px;
  width: 100%;
  text-align: left;
  float: left;
`;S.Ay.div`
  display: flex;
  &.single {
  }
  &.double {
  }
`,S.Ay.div`
  display: flex;
  width: 100%;
  text-align: center;
  -webkit-box-pack: center;
  justify-content: center;
  margin-bottom: 10px;
  border-bottom: 1px dashed lightgray;
  padding-bottom: 20px;
  padding-top: 20px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  button {
    cursor: pointer;
    background-color: white;
    border: 1px solid lightgray;
    padding: 10px;
    border-radius: 10px;
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
  }
  &.recording {
    button,
    svg {
      color: red;
      font-weight: bold;
    }
  }
  .info {
    font-size: 12px;
  }
  p {
    font-size: 14px;
    span {
      font-weight: bold;
    }
  }
`;var Te=r(13747),Fe=r(15004);const Oe=n.memo((e=>{var t,r,l,A,h,p,g;const{t:v}=(0,f.Bd)(),{i18n:b}=(0,f.Bd)(),[w]=(0,n.useState)(b.language||"de"),[C,B]=(0,n.useState)(0),E=(0,a.wA)(),{setMessage:k,currentApi:I}=e,[S,D]=(0,n.useState)(!1),[Q,_]=(0,n.useState)([]),[T]=(0,n.useState)(e.formInput),[F,O]=(0,n.useState)(!0),M=(0,a.d4)((e=>e.themeColors));(0,n.useEffect)((()=>{const e=T.filter((e=>"select"===e.type&&"API"===e.apiType));(async()=>{const t={};e.map((async e=>{const r=await(0,c.bQ)(e.selectApi);t[e.name]=r.response}))})()}),[T]);const N=function(t,r){var n,i;let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new Date,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=0,l="";if(!t.update&&"put"===e.formType)return{flag:s,tempformError:l};if(!t.add&&"post"===e.formType)return{flag:s,tempformError:l};if(!t.required&&0===(null!==(n=r.length)&&void 0!==n?n:0))return{flag:s,tempformError:l};if(t.condition){let e=!1;if(e=Array.isArray(t.condition.if)?t.condition.if.some((e=>e===o[t.condition.item])):o[t.condition.item]===t.condition.if,e){if("disabled"===t.condition.then)return{flag:s,tempformError:l}}else if("disabled"===t.condition.else)return{flag:s,tempformError:l}}switch(null===t||void 0===t?void 0:t.validation){case"email":var c;if(!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(r))l=(null!==(c=r.length)&&void 0!==c?c:0)>0?v("validContent",{label:v(t.label)}):"",s+=1;break;case"qt":/^\d{8}$|^$/.test(r)||(l=v("validContent",{label:v(t.label)}),s+=1);break;case"number":var A;if(!/^\d+$/.test(r)||isNaN(r)||null===r||"undefined"===typeof r)(null!==(A=r.length)&&void 0!==A?A:0)>0&&(l=v("validContent",{label:v(t.label)})),s+=1;break;case"mobileNumber":if(!new RegExp(`^[1-9]\\d{${(null!==(i=o.PhoneNumberLength)&&void 0!==i?i:10)-1}}$`).test(r)){var u,d;if((null!==(u=r.length)&&void 0!==u?u:0)>0)l=`Please provide a valid ${null!==(d=o.PhoneNumberLength)&&void 0!==d?d:10}-digit WhatsApp Number`;s+=1}break;case"cvv":/^[0-9]{3}$/.test(r)||(l=v("validContent",{label:v(t.label)}),s+=1);break;case"ccn":/^[0-9]{16}$/.test(r)||(l=v("validContent",{label:v(t.label)}),s+=1);let e=0;for(let t=0;t<(null!==(f=r.length)&&void 0!==f?f:0);t++){var f;let n=parseInt(r[t]);t%2===0&&(n*=2,n>9&&(n-=9)),e+=n}e%10!==0&&(l=v("validContent",{label:v(t.label)}),s+=1);break;case"expiry":(function(e){let t=parseInt(e.substring(0,2)),r=parseInt("20"+e.substring(3)),n=new Date,i=n.getFullYear(),a=n.getMonth()+1;if(r<i||r===i&&t<a)return!1;if(t<1||t>12)return!1;return!0})(r)||(l=v("validContent",{label:v(t.label)}),s+=1);break;case"true":!0!==r&&(l=v("validContent",{label:v(t.label)}),s+=1);break;case"fileNumber":/[A-Z0-9-]/.test(r)||(l=v("validContent",{label:v(t.label)}),s+=1);break;case"licensePlate":/^[A-Z]{3}[ -]?[A-Z0-9]{2}[ -]?[A-Z0-9]{3,5}$/i.test(r)||(l=v("validContent",{label:v(t.label)}),s+=1);break;case"url":/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i.test(r)||(l=v("validContent",{label:v(t.label)}),s+=1);break;case"name":var h;if(!/^[A-Za-z\s]+$/.test(r))(null!==(h=r.length)&&void 0!==h?h:0)>0&&(l="Only English characters and spaces are supported"),s+=1;break;case"slug":/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(r)||(l=v("validContent",{label:v(t.label)}),s+=1);break;case"greater":const n=new Date(a);new Date(r)<n&&(l=v("validContent",{label:v(t.label)}),s+=1);break;case"amount":/^\d+([.,]\d{1,2})?$/.test(r)||(l=v("validContent",{label:v(t.label)}),s+=1);break;case"datetime":case"time":var p;if(!/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(r))(null!==(p=r.length)&&void 0!==p?p:0)>0&&(l=v("validContent",{label:v(t.label)})),s+=1;break;case"password-match":const m=/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@.$!%*?&]{8,}$/;o.newPassword!==o.confirmPassword?(l="Passwords are not match!",s+=1):m.test(r)||(l=v("validContent",{label:v(t.label)}),s+=1);break;case"password":var g;if(!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$.!%*?&]{8,}$/.test(r))(null!==(g=r.length)&&void 0!==g?g:0)>0&&(l=v("validContent",{label:v(t.label)})),s+=1}const m=(0,Te.e)(t,l,r,s,v);if(l=m.tempformError,s=m.flag,"image"!==t.type&&"file"!==t.type||"post"!==e.formType){if(("image"===t.type||"file"===t.type)&&"put"===e.formType)return{flag:s,tempformError:l};var y,b,w,x,C;if(t.required&&0===(null!==(y=r.length)&&void 0!==y?y:0))l=v("required",{label:v(t.label)}),s+=1;else if((null!==(b=t.minimum)&&void 0!==b?b:0)>(null!==(w=r.length)&&void 0!==w?w:0)){var B;l=v("requiredMinimum",{minimum:null!==(B=t.minimum)&&void 0!==B?B:0,label:v(t.label)}),s+=1}else if((null!==(x=t.maximum)&&void 0!==x?x:2e3)<(null!==(C=r.length)&&void 0!==C?C:0)){var E;l=v("maxLimit",{maximum:null!==(E=t.maximum)&&void 0!==E?E:2e3,label:v(t.label)}),s+=1}}else{var k;0===(null!==(k=r.length)&&void 0!==k?k:0)&&(l=v("validImage",{label:v(t.label)}),s+=1)}return{flag:s,tempformError:l}};const[j,L]=(0,n.useState)(null),U=async e=>{var t;D(!0);const r=null===(t=e.target.files)||void 0===t?void 0:t[0];if(r){const e=new FileReader;e.onload=async e=>{const t=[],r=new Uint8Array(e.target.result),n=G.LF(r,{type:"array"}),i=n.SheetNames[0],a=n.Sheets[i],o=G.Wp.sheet_to_json(a),s={},l=await Promise.all(o.map((async(e,r)=>{const n={},i={};let a=new Date;return await Promise.all(T.map((async t=>{if(t.add){var r;const u=e[t.label];let d="";if("checkbox"===t.type){d=JSON.parse("false"===t.default||"true"===t.default?t.default:"false")}else if("multiSelect"===t.type)d=[];else if("text"===t.type)d="";else if("datetime"===t.type||"date"===t.type||"time"===t.type)"0"===t.default?(a.setUTCHours(0,0,0,0),d=a.toISOString()):"1"===t.default?(a.setUTCHours(23,59,0,0),d=a.toISOString()):d=a.toISOString(),t.add&&(d="empty"===t.default?"":a.toISOString());else if("image"===t.type||"file"===t.type)t.add&&(d=""),d="";else{var o,l;if(d=null!==(o=t.default)&&void 0!==o?o:"","select"===t.type)d=null!==(l=t.default)&&void 0!==l?l:""}var A;if(i[t.name]=null!==(r=d)&&void 0!==r?r:"",t.add)if(i[t.name]=null!==(A=null!==u&&void 0!==u?u:d)&&void 0!==A?A:"",n[t.name]="","API"===t.apiType){if(!s[t.selectApi]){const e=await(0,c.bQ)({},`${t.selectApi}`);s[t.selectApi]=e.data,200===e.status&&E((0,Fe.p)(e.data,t.selectApi))}const e=t.displayValue?t.displayValue:"locale"===t.showItem?w:"value",r=s[t.selectApi].find((t=>t[e]===u));r&&(i[t.name]=r.id)}}}))),t.push(n),i})));let A=0;l.forEach(((e,r)=>{const n=((e,t,r)=>{const n={...r};let i=0;return e.forEach((e=>{if("_id"!==e.name)if("multiple"===e.type)e.forms.forEach(((r,a)=>{r.forEach(((r,o)=>{const s=N(r,"undefined"===typeof t[e.name][a][r.name]?"":t[e.name][a][r.name],null,t);n[e.name][a][r.name]=s.tempformError,i+=s.flag}))}));else if("greater"===e.validation){const r=N(e,"undefined"===typeof t[e.name]?"":t[e.name],"undefined"===typeof t[e.reference]?new Date:t[e.reference],t);n[e.name]=r.tempformError,i+=r.flag}else{const r=N(e,"undefined"===typeof t[e.name]?"":t[e.name],null,t);n[e.name]=r.tempformError,i+=r.flag}})),O(i>0),0===i})(T,e,t[r]);t[r]=n.tempformErrors,A+=n.flags})),B(A),O(A>0),_(t),L(l),D(!1)},e.readAsArrayBuffer(r)}},R=()=>{const t=[],r={};T.forEach((e=>{e.add&&(r[e.label]="")})),t.push(r);const n=G.Wp.json_to_sheet(t),i=G.Wp.book_new();G.Wp.book_append_sheet(i,n,v("report")),G._h(i,e.shortName+"-template.xlsx")},P=()=>{e.isOpenHandler(!1)};return(0,m.jsx)(Ie,{className:`form-container ${null!==(t=e.css)&&void 0!==t?t:""}`,children:(0,m.jsxs)(De,{className:`${null!==(r=e.css)&&void 0!==r?r:""} ${null!==(l=e.formMode)&&void 0!==l?l:"single"} ${e.bulkUpload?"bulk":""}`,children:[(0,m.jsxs)(d.Y9,{className:`${null!==(A=e.css)&&void 0!==A?A:""} form`,children:[(0,m.jsx)("div",{children:(0,m.jsx)("span",{dangerouslySetInnerHTML:{__html:e.header?e.header:"Login"}})}),""===(null!==(h=e.css)&&void 0!==h?h:"")&&(0,m.jsx)(x.Jn,{theme:M,onClick:P,children:(0,m.jsx)(s.A0,{icon:"Close"})})]}),(0,m.jsxs)(ke,{className:"list bulk",action:"#",children:[(null===j||void 0===j?void 0:j.length)>0&&(0,m.jsxs)(i.XR,{children:[(0,m.jsxs)(i.M3,{onClick:()=>R(),children:[(0,m.jsx)(s.OC,{}),(0,m.jsx)("span",{children:v("Download Template")})]}),(0,m.jsx)(i.HW,{type:"file",accept:".xlsx, .xls",onChange:U})]}),(0,m.jsxs)(o.Yq,{className:" bulk",children:[(null===j||void 0===j?void 0:j.length)>0?(0,m.jsxs)(i.Qg,{className:"small",children:[(0,m.jsx)("thead",{children:(0,m.jsxs)("tr",{children:[(0,m.jsx)(i._q,{children:"Action"}),T&&T.map(((t,r)=>{var n;return!0===(null!==(n=t.add)&&void 0!==n&&n)?(0,m.jsx)(i._q,{children:v(t.label)},e.shortName+t.name+r):null}))]})}),(0,m.jsx)("tbody",{children:null===j||void 0===j?void 0:j.map(((t,r)=>(0,m.jsxs)(i.qR,{className:"no-border bulk",children:[(0,m.jsx)(i.Q1,{className:"bulk",children:(0,m.jsx)(de.K0,{icon:"edit"})}),T&&T.map(((e,n)=>{var a,o;const s=t[e.name];return e.upload,!0===(null!==(a=e.add)&&void 0!==a&&a)&&"hidden"!==e.type?(0,m.jsxs)(i.Q1,{className:"bulk",children:[s,(null===(o=Q[r])||void 0===o?void 0:o[e.name])&&(0,m.jsx)("p",{children:Q[r][e.name]})]},n):null}))]},`${e.shortName}-${r}-${r}`)))})]}):(0,m.jsx)(Ee.t7,{upload:U,download:R,icon:e.icon,shortName:e.shortName}),C>0&&(0,m.jsx)(_e,{style:{marginTop:"10px"},children:v("errorCount",{count:C})})]})]}),(0,m.jsxs)(Qe,{className:`${null!==(p=e.css)&&void 0!==p?p:""} ${F?"disabled":""}`,children:[""===(null!==(g=e.css)&&void 0!==g?g:"")&&(0,m.jsx)(u.A,{type:"close",value:"Cancel",onChange:P}),(0,m.jsx)(u.A,{disabled:F,type:"submit",name:"submit",value:e.button?e.button:"Uplaod Data",onChange:async t=>{D(!0);const r=JSON.stringify(j),n=new Blob([r],{type:"application/json"}),i=new File([n],"bulkUploadData.json",{type:"application/json"}),a=new FormData;a.append("file",i),console.log(e.parents),e.parents&&"object"===typeof e.parents&&!Array.isArray(e.parents)&&Object.keys(e.parents).forEach((t=>{a.append(t,e.parents[t])}));try{const e=await(0,c.EH)(a,`${I}/bulk-upload`);200===e.status?(L(e.data.alreadyExist),k({type:1,content:v("bulkUploadMessage",{exist:e.data.alreadyExist.length,added:e.data.newRegistrations.length}),proceed:"Okay"})):(e.status,k({type:1,content:v(e.data),proceed:"Okay"}))}catch(o){alert(o)}finally{D(!1)}}})]}),S&&(0,m.jsx)(y.A,{className:"absolute"})]})},e.referenceId)})),Me=Oe;var Ne=r(21159),je=r(41210),Le=r(31066);const Ue="greater",Re="greaterEqual",Pe="less",He="equals",ze="between",Ve="in",Ge="beforeDate",Ye="afterDate",We="sameDate",Ke="dateBetween",qe="contains",Ze="startsWith",Je="endsWith",Xe="matches",$e="isTrue",et="isFalse",tt="fractionGreater",rt="fractionLess",nt="fractionEquals",it=S.Ay.div`
  display: flex;
  width: 100%;
  margin-top: 5px;
  &.wrap {
    display: inline;
  }
`,at=S.Ay.div`
  padding: 2px 8px 2px 4px;
  gap: 2px;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  transition: all 0.2s ease-in-out;

  ${e=>{switch(e.size){case"small":return"\n          padding: 0.25rem 0.75rem;\n          font-size: 0.75rem;\n        ";case"large":return"\n          padding: 0.625rem 1.25rem;\n          font-size: 1rem;\n        ";default:return"\n          padding: 0.375rem 0.875rem;\n          font-size: 0.875rem;\n        "}}}

  &.red {
    background-color: #fee2e2;
    border-color: #fecaca;
    color: #991b1b;
    .icon {
      color: #ef4444;
    }
  }

  &.pink {
    background-color: #fce7f3;
    border-color: #fbcfe8;
    color: #831843;
    .icon {
      color: #ec4899;
    }
  }

  &.mint {
    background-color: #ecfdf5;
    border-color: #a7f3d0;
    color: #065f46;
    .icon {
      color: #10b981;
    }
  }

  &.mage {
    background-color: #ede9fe;
    border-color: #ddd6fe;
    color: #5b21b6;
    .icon {
      color: #8b5cf6;
    }
  }

  &.beige {
    background-color: #fffbeb;
    border-color: #fef3c7;
    color: #92400e;
    .icon {
      color: #f59e0b;
    }
  }

  &.gray {
    background-color: #f9fafb;
    border-color: #e5e7eb;
    color: #374151;
    .icon {
      color: #6b7280;
    }
  }
`,ot=S.Ay.span`
  display: inline-flex;
  margin-right: 0.375rem;

  ${e=>{switch(e.size){case"small":return"\n          svg {\n            width: 0.875rem;\n            height: 0.875rem;\n          }\n        ";case"large":return"\n          svg {\n            width: 1.25rem;\n            height: 1.25rem;\n          }\n        ";default:return"\n          svg {\n            width: 1rem;\n            height: 1rem;\n          }\n        "}}}
`,st=e=>{if(!e)return null;if(e instanceof Date)return e;if(k().isMoment(e))return e.toDate();const t=k()(e);return t.isValid()?t.toDate():null},lt=e=>"number"===typeof e?e:"string"===typeof e?Number(e):NaN,ct=e=>{if("boolean"===typeof e)return e;if("string"===typeof e){const t=e.toLowerCase();return"true"===t||"1"===t||"yes"===t}return Boolean(e)},At=e=>{if("object"===typeof e&&void 0!==e.numerator&&void 0!==e.denominator)return e.numerator/e.denominator;if("string"===typeof e){const t=e.split("/");if(2===t.length)return Number(t[0])/Number(t[1])}return NaN},ut={[Ue]:(e,t)=>{const r=lt(e),n=lt(t);return!isNaN(r)&&!isNaN(n)&&r>n},[Re]:(e,t)=>{const r=lt(e),n=lt(t);return!isNaN(r)&&!isNaN(n)&&r>=n},[Pe]:(e,t)=>{const r=lt(e),n=lt(t);return!isNaN(r)&&!isNaN(n)&&r<n},[He]:(e,t)=>e===t,[ze]:(e,t)=>{if("object"===typeof t&&"start"in t&&"end"in t){const r=lt(e),n=lt(t.start),i=lt(t.end);return!isNaN(r)&&!isNaN(n)&&!isNaN(i)&&r>=n&&r<=i}return!1},[Ve]:(e,t)=>Array.isArray(t)&&t.includes(e),[Ge]:(e,t)=>{const r=st(e),n=st(t);return!(!r||!n)&&k()(r).isBefore(n)},[Ye]:(e,t)=>{const r=st(e),n=st(t);return!(!r||!n)&&k()(r).isAfter(n)},[We]:(e,t)=>{const r=st(e),n=st(t);return!(!r||!n)&&k()(r).isSame(n,"day")},[Ke]:(e,t)=>{const r=st(e),n=st(t.start),i=st(t.end);return!!(r&&n&&i)&&k()(r).isBetween(n,i,"day","[]")},[qe]:(e,t)=>String(e).includes(String(t)),[Ze]:(e,t)=>String(e).startsWith(String(t)),[Je]:(e,t)=>String(e).endsWith(String(t)),[Xe]:(e,t)=>{try{return new RegExp(t).test(String(e))}catch(r){return!1}},[$e]:e=>!0===ct(e),[et]:e=>!1===ct(e),[tt]:(e,t)=>{const r=At(e),n=At(t);return!isNaN(r)&&!isNaN(n)&&r>n},[rt]:(e,t)=>{const r=At(e),n=At(t);return!isNaN(r)&&!isNaN(n)&&r<n},[nt]:(e,t)=>{const r=At(e),n=At(t);return!isNaN(r)&&!isNaN(n)&&Math.abs(r-n)<Number.EPSILON}},dt=(e,t)=>{let r="currentDate"===e.when?new Date:t[e.when];const n=((e,t)=>{if("object"===typeof e&&null!==e){if("start"in e&&"end"in e)return{start:t[e.start]||e.start,end:t[e.end]||e.end};if("field"in e&&"multiplier"in e){const r=lt(t[e.field]);return isNaN(r)?NaN:Math.floor(r*e.multiplier)}return e}return t.hasOwnProperty(e)?t[e]:e})(e.compare,t);switch(e.type){case"date":case"number":case"string":case"fraction":default:return ut[e.condition](r,n);case"boolean":return ut[e.condition](r)}},ft=e=>{let{statusLabels:t,values:r,nextLine:n=!0,size:i="medium",dateFormat:a="MMM DD, YYYY hh:mm A"}=e;const o=t.find((e=>dt(e,r)));if(!o)return null;const l=(0,m.jsx)(s.A0,{icon:o.icon.toLowerCase()}),c=o.label.replace(/{{\s*([^}]+)\s*}}/g,((e,t)=>{const n=r[t];return i=n,k()(i).isValid()?function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD";return e?k()(e).format(t):""}(n,a):"number"===typeof n?n.toString():n||"";var i}));return(0,m.jsx)(it,{className:n?"":"wrap",children:(0,m.jsxs)(at,{className:o.color,size:i,children:[(0,m.jsx)(ot,{size:i,className:"icon",children:l}),c]})})},ht=S.Ay.div`
  display: flex;
  gap: 20px;
  padding: 0px;
  border: 1px solid ${ye.D.stroke.soft};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  box-shadow: 0px 1px 2px 0px #e4e5e73d;
  gap: 20px;
  border-radius: 16px;
  padding: 16px;
  flex-wrap: wrap;
`,pt=S.Ay.div`
  flex: 1;
  background: white;
  padding: 0px;
  display: flex;
  align-items: center;
  min-width: 200px;
  border-right: 1px solid ${ye.D.stroke.soft};
  &:last-child {
    border-right: none;
  }
`,gt=S.Ay.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,mt=S.Ay.div`
  background: #eef4ff;
  padding: 16px;
  border-radius: 50%;
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 24px;
    height: 24px;
    color: #4f46e5;
  }
`,vt=S.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,yt=S.Ay.span`
  font-size: 11px;
  font-weight: 500;
  line-height: 12px;
  letter-spacing: 0.02em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: ${ye.D.text.soft};
`,bt=S.Ay.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 19.36px;
  letter-spacing: -0.011em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: ${ye.D.text.main};
`,wt=e=>{let{labels:t,data:r}=e;return(0,m.jsx)(ht,{children:t.map(((e,t)=>{var n;const i=r[e.key];return(0,m.jsx)(pt,{children:(0,m.jsxs)(gt,{children:[(null===(n=e.icon)||void 0===n?void 0:n.length)>0&&(0,m.jsx)(mt,{children:(0,m.jsx)(s.A0,{icon:e.icon})}),(0,m.jsxs)(vt,{children:[(0,m.jsx)(yt,{children:e.title}),(0,m.jsxs)(bt,{children:[null===i||void 0===i?void 0:i.count,(null===i||void 0===i?void 0:i.total)&&` / ${i.total}`,(null===i||void 0===i?void 0:i.suffix)&&i.suffix]})]})]})},e.key||t)}))})};wt.defaultProps={labels:[{key:"check-in",title:"NO OF CHECK-IN",icon:"check-in"},{key:"pending",title:"PENDING",icon:"pending"},{key:"check-in-rate",title:"CHECK-IN RATE",icon:"check-in-rate"},{key:"no-show",title:"NO-SHOW RATE",icon:"no-show"}],data:{}};const xt=wt,Ct=n.memo((e=>"table"===e.viewMode?(0,m.jsx)(i.Q1,{...e}):(0,m.jsx)(i.Td,{...e}))),Bt=n.memo((e=>"table"===e.viewMode?(0,m.jsx)(i.qR,{...e}):(0,m.jsx)(i.Tr,{...e}))),Et=n.memo((e=>{var t,r,d,f,h,p,g,E,I,S,D,Q,_,T,F;let{formTabTheme:O="normal",imageSettings:M={fileName:"file",image:"file",thumbnail:"compressed",endpoind:"https://event-hex-saas.s3.amazonaws.com/"},labels:N=[],showTitle:j=!0,showFilters:L=!0,showPagination:U=!0,showHeaderRow:R=!0,overflow:P="scroll",name:H="",rowLimit:z=10,isSingle:q=!1,icon:Z,addLabel:J=null,popupMode:$="medium",showInfo:ee=!0,showInfoType:ne="open",customProfileSource:ie=!1,orientation:ae="portrait",profileImage:oe,fileSource:se="",displayColumn:le="single",printPrivilege:fe=!1,formMode:he="single",formLayout:pe="",parentReference:ge="_id",referenceId:me=0,actions:ye=[],api:be,formView:we="normal",setMessage:xe,attributes:Ce=[],exportPrivilege:ke=!1,addPrivilege:Ie=!1,delPrivilege:Se=!1,updatePrivilege:De=!1,clonePrivilege:Qe=!1,shortName:_e="Item",itemTitle:Te={type:"text",name:"title"},highlight:Fe=null,datefilter:Oe=!1,preFilter:Ue={},viewMode:Re="list",popupMenu:Pe="horizontal",bulkUplaod:He=!1,addtionalButtons:ze=[],parents:Ve={},itemDescription:Ge={type:"datetime",name:"createdAt"},lastUpdateDate:Ye=null,fillType:We="API",preData:Ke=[],onFilter:qe=()=>{},headerStyle:Ze="",openPage:Je=!0,showFilter:Xe=!1}=e;const[$e]=(0,n.useState)(Ke),[et]=(0,n.useState)(We),tt=(0,a.d4)((e=>e.pages)),rt=(0,a.d4)((e=>e.pagesLoading)),[nt,it]=(0,n.useState)(!0),[at,ot]=(0,n.useState)(!1),[st,lt]=(0,n.useState)(null),[ct]=(0,n.useState)(ye.filter((e=>"button"===e.type))),[At,ut]=(0,n.useState)(""),[dt,ht]=(0,n.useState)(),[pt,gt]=(0,n.useState)({});(0,n.useEffect)((()=>{ut(H+"-"+me)}),[H,me]),(0,n.useEffect)((()=>{var e;const t=tt[`${be}-${At}`],r=null!==(e=rt[`${be}-${At}`])&&void 0!==e&&e;Zt(r),t&&lt(t),at||t||r||(ot(!0),it(!1))}),[tt,be,rt,at,me,At]);const[mt,vt]=(0,n.useState)(!1),[yt,bt]=(0,n.useState)(!1),[wt]=(0,n.useState)(`${be}`),[Et,kt]=(0,n.useState)(null),[It,St]=(0,n.useState)(0),[Dt,Qt]=(0,n.useState)(z),[_t,Tt]=(0,n.useState)(1),[Ft,Ot]=(0,n.useState)(!1),[Mt,Nt]=(0,n.useState)(null!==Xe&&void 0!==Xe&&Xe),[jt,Lt]=(0,n.useState)(0),[Ut,Rt]=(0,n.useState)({}),[Pt,Ht]=(0,n.useState)({}),[zt]=(0,n.useState)(0),Vt=(0,a.d4)((e=>e.themeColors)),Gt=(0,a.d4)((e=>e.selectedMenu)),Yt=(0,a.wA)(),Wt=(0,l.Zp)(),[Kt,qt]=(0,n.useState)(!1),Zt=e=>{qt(e)};function Jt(e){if(null===e||void 0===e)return"0.0MB";if(e<1024)return`${parseFloat(e).toFixed(2)}MB`;const t=e/1024;return t>=1?`${t.toFixed(2)}GB`:`${parseFloat(e).toFixed(2)}MB`}const[Xt,$t]=(0,n.useState)(!1),[er,tr]=(0,n.useState)(""),[rr,nr]=(0,n.useState)([]),[ir,ar]=(0,n.useState)([]),[or,sr]=(0,n.useState)({}),[lr,cr]=(0,n.useState)(""),[Ar,ur]=(0,n.useState)({}),[dr,fr]=(0,n.useState)((()=>{})),[hr,pr]=(0,n.useState)(!1),[gr,mr]=(0,n.useState)(0!==me?{[ge]:me,...Ue,...Ve}:{...Ue,...Ve});(0,n.useEffect)((()=>{(async()=>{if(Ce.length>0){const e={addValues:{},updateValues:{},viewValues:{},errorValues:{},filterValues:{},sortView:{},inlineSelect:{}};let t=new Date;const r=Ce.map((async r=>{var n,i;if("checkbox"===r.type||"toggle"===r.type){let t=JSON.parse("false"===r.default||"true"===r.default?r.default:"false");r.add&&(e.addValues[r.name]=t),e.updateValues[r.name]=t}else if("datetime"===r.type||"date"===r.type||"time"===r.type){e.addValues[r.name]=t.toISOString(),r.add&&(e.addValues[r.name]="empty"===r.default?"":k()(r.default).isValid()?k()(r.default).toISOString():t.toISOString()),"date"===r.type&&r.filter}else if("image"===r.type||"file"===r.type)r.add&&(e.addValues[r.name]=[]),r.update&&(e.updateValues[r.name]=[]);else if("multiSelect"===r.type)r.add&&(e.addValues[r.name]=Array.isArray(r.default)?r.default:[]),r.update&&(e.updateValues[r.name]=[]);else{var a;if(r.add&&(e.addValues[r.name]=r.default),e.updateValues[r.name]=r.default,"select"===r.type)if(e.filterValues[r.name]=null!==(a=r.filterDefault)&&void 0!==a?a:"",r.inlineAction&&!e.inlineSelect[r.name]){const t=await(0,c.bQ)({},r.selectApi);e.inlineSelect[r.name]=t.data,console.log(r.selectApi)}}null!==(n=r.sort)&&void 0!==n&&n&&(e.sortView[r.name]=null!==(i=e.defaultSort)&&void 0!==i?i:"");e.errorValues[r.name]="",e.filterValues.searchkey=""}));await Promise.all(r),0!==me&&(e.filterValues[ge]=me),gt(e.inlineSelect),ht(e.sortView),nr(Ce),sr(e.addValues),ar(e.errorValues),ur(e.updateValues),mr((t=>({...e.filterValues,...t}))),$t(!0)}})()}),[Ce,Yt,tr,er,nr,sr,ur,mr,ge,me,ht]),(0,n.useEffect)((()=>{0===It&&null!==st&&void 0!==st&&st.count&&(Lt(st.filterCount),Rt(st.counts))}),[st,It]),(0,n.useEffect)((()=>{Xt&&!nt&&(it(!0),Yt((0,A.K)(wt,It,{...gr,sorting:dt},Dt,At,$e,et)))}),[Xt,wt,nt,It,Yt,gr,dt,Dt,At,$e,et]),(0,n.useEffect)((()=>{const e=Math.ceil((It+1)/Dt);e!==_t&&Tt(e)}),[jt,It,Dt,_t]);const vr=(0,n.useCallback)((e=>{try{Yt((0,A.K)(wt,e,{...gr,sorting:dt},Dt,At,$e,et))}catch(t){console.error("Error dispatching addPageObject:",t)}}),[Yt,wt,gr,Dt,At,$e,dt,et]),yr=function(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};try{if(e)Yt((0,A.K)(wt,It,{...gr,sorting:dt},Dt,At,$e,et));else{const e={...st},n=[...e.response],i=n[t];n[t]={...i,...r},e.response=n,lt(e)}}catch(n){console.log("error",n)}},[br,wr]=(0,n.useState)(Ye);(0,n.useEffect)((()=>{wr(Ye)}),[Ye]),(0,n.useEffect)((()=>{br&&vr(0)}),[br,vr]);const[xr,Cr]=(0,n.useState)(!1),[Br]=(0,n.useState)(!1),[Er,kr]=(0,n.useState)(!1),[Ir,Sr]=(0,n.useState)([]),[Dr,Qr]=(0,n.useState)({}),[_r,Tr]=(0,n.useState)(!1),[Fr,Or]=(0,n.useState)(!1),Mr=(e,t)=>{Or((e=>e?(fr((()=>t)),Wt({},"",window.location.pathname),!1):(window.location.hash="add",!0)))},[Nr,jr]=(0,n.useState)(!1),Lr=(e,t)=>(rr.forEach((r=>{var n,i,a,o;let s=(null===(n=r.collection)||void 0===n?void 0:n.length)>0&&(null===(i=r.showItem)||void 0===i?void 0:i.length)>0?null===(a=e[r.collection])||void 0===a?void 0:a[r.showItem]:null!==(o=e[r.name])&&void 0!==o?o:"";var l,c,A;r.showSubItem&&(s=(null===(l=r.collection)||void 0===l?void 0:l.length)>0&&(null===(c=r.showItem)||void 0===c?void 0:c.length)>0?null!==(A=e[r.collection][r.showItem][r.showSubItem])&&void 0!==A?A:"":e[r.name]);if(r.update||r.view)if("checkbox"===r.type||"toggle"===r.type){var u;let n="true"===(null===(u=e[r.name])||void 0===u?void 0:u.toString());t[r.name]=n}else if("number"===r.type)t[r.name]=t[r.name]=parseFloat(e[r.name]);else if("select"===r.type){var d;t[r.name]="undefined"===typeof s?"":"string"===typeof s||"number"===typeof s||"boolean"===typeof s?s:null!==(d=e[r.name])&&void 0!==d&&d._id?e[r.name]._id:""}else if("multiSelect"===r.type)try{"API"===r.apiType?t[r.name]=e[r.name].map((e=>e._id)):t[r.name]=e[r.name].map((e=>e))}catch(f){t[r.name]=[]}else"image"===r.type?(t["old_"+r.name]=e[r.name]?e[r.name]:"",t[r.name]=[]):t[r.name]=s||""})),t._id=e._id,t),Ur=function(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(Zt(!0),Nr)cr(""),Wt({},"",window.location.pathname),jr(!1);else if(n)Gr({id:e._id,_title:r,clone:!0});else{fr((()=>t));let a={};cr(e._id),Lr(e,a),a._id=e._id,a.clone=n,a._title=r,ur(a),i||jr(!0),window.location.hash="edit"}Zt(!1)},Rr=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";await(0,c.Wv)({id:t},wt,Yt,Wt).then((t=>{var r;if(200===t.status)(null===(r=t.customMessage)||void 0===r?void 0:r.length)>0?xe({type:1,content:t.customMessage,proceed:"Okay",icon:"success"}):xe({type:1,content:`The '${e.title?e.title:_e}' deleted successfully!`,proceed:"Okay",icon:"deleted"}),Lt((e=>e-1)),Or(!1),vr(It);else if(404===t.status){var n;(null===(n=t.customMessage)||void 0===n?void 0:n.length)>0?xe({type:1,content:t.customMessage,proceed:"Okay",icon:"error"}):xe({type:1,content:"User not found!",proceed:"Okay",icon:"error"})}else{var i;(null===(i=t.customMessage)||void 0===i?void 0:i.length)>0?xe({type:1,content:t.customMessage,proceed:"Okay"}):xe({type:1,content:"Something went wrong!",proceed:"Okay",icon:"error"})}Zt(!1)})).catch((e=>{xe({type:1,content:e.message+"Something went wrong!",proceed:"Okay",icon:"error"}),Zt(!1)}))},[Pr,Hr]=(0,n.useState)([]),zr=(e,t)=>{Hr({item:e,data:t})},Vr=async e=>{Zt(!0);const t=0===me?{...e}:{...e,[ge]:me},r=Object.keys(t).reduce(((e,r)=>(r.includes("Array")||(e[r]=t[r]),e)),{});await(0,c.LS)({...Ve,...r},wt).then((e=>{var t;if(200===e.status)(null===e||void 0===e||null===(t=e.data.customMessage)||void 0===t?void 0:t.length)>0?xe({type:1,content:null===e||void 0===e?void 0:e.data.customMessage,proceed:"Okay",icon:"success"}):xe({type:1,content:`The '${_e}' saved successfully!`,proceed:"Okay",icon:"success"}),Or(!1),St(0),vr(0);else if(404===e.status){var r;(null===e||void 0===e||null===(r=e.data.customMessage)||void 0===r?void 0:r.length)>0?xe({type:1,content:null===e||void 0===e?void 0:e.data.customMessage,proceed:"Okay",icon:"error"}):xe({type:1,content:"User not found!",proceed:"Okay",icon:"error"})}else{var n;console.log(e),(null===(n=e.customMessage)||void 0===n?void 0:n.length)>0?xe({type:1,content:e.customMessage,proceed:"Okay"}):xe({type:1,content:"Something went wrong!",proceed:"Okay",icon:"error"})}Zt(!1)})).catch((e=>{console.log(e),xe({type:1,content:e.message+"Something went wrong!",proceed:"Okay",icon:"success"}),Zt(!1)}))};(0,n.useEffect)((()=>{var e;if(null!==st&&void 0!==st&&null!==(e=st.data)&&void 0!==e&&e.response){var t;const e=null===st||void 0===st||null===(t=st.data)||void 0===t?void 0:t.response.find((e=>e._id===lr));e&&(console.log("data","Udpated"),Qr((t=>({...t,data:e}))),kt((t=>({...t,data:e}))))}}),[st,Nr,lr,Qr,kt]);const Gr=async(e,t,r)=>{Zt(!0);let n=!1;const i={...(0,w.gH)(r,e).changedObject,id:e._id};try{const t=await(0,c.sS)(i,`${wt}`);if(200===t.status){var a,o;if((null===t||void 0===t||null===(a=t.data.customMessage)||void 0===a?void 0:a.length)>0)xe({type:1,content:null===t||void 0===t?void 0:t.data.customMessage,proceed:"Okay",icon:"success"}),n=!0;else xe({type:1,content:`The '${null!==(o=e._title)&&void 0!==o?o:_e}' ${e.clone?"cloned":"updated"} successfully!`,proceed:"Okay",icon:"success"});vr(It),jr(!1)}else if(404===t.status){var s;(null===t||void 0===t||null===(s=t.data.customMessage)||void 0===s?void 0:s.length)>0?xe({type:1,content:null===t||void 0===t?void 0:t.data.customMessage,proceed:"Okay",icon:"error"}):xe({type:1,content:"User not found!",proceed:"Okay",icon:"error"})}else{var l;console.log("Error",t),(null===(l=t.customMessage)||void 0===l?void 0:l.length)>0?xe({type:1,content:t.customMessage,proceed:"Okay"}):xe({type:1,content:"Something went wrong!",proceed:"Okay",icon:"error"})}}catch(A){alert(A)}finally{Zt(!1)}return n},Yr=(0,n.useCallback)((function(e,t,r){if(arguments.length>3&&void 0!==arguments[3]&&arguments[3])qe({[t]:"select"===r?e.id:"date"===r?null===e||void 0===e?void 0:e.toISOString():""});else{const n={...gr,[t]:"select"===r?e.id:"date"===r?null===e||void 0===e?void 0:e.toISOString():""};mr(n),it(!1)}}),[gr,qe]),Wr=()=>{Hr([])},Kr=(0,n.useCallback)((()=>{const e=[],t=_e.toLowerCase();if(Ie&&e.push("add"),De&&e.push("edit"),Se&&e.push("delete"),Qe&&e.push("clone"),ke&&e.push("export"),0===e.length)return"";const r=e.slice(0,3);let n=`You can ${r.join(", ")}`;e.length>3&&(n+=", or take additional actions on ");let i=t;return r.length>1&&!t.endsWith("s")&&(i+="s"),n+=` ${i}`,n}),[_e,Ie,De,Se,Qe,ke]),qr=n.memo((e=>{var t,r,a,o,l,A,d,f,h;let{attributes:p,data:g,slNo:v,selectRef:y,inlineSelectData:b={}}=e;const x=(0,n.useRef)(null);y.current[v]=x;const B=null!==(t=(null===(r=Te.collection)||void 0===r?void 0:r.length)>0?g[Te.collection]?g[Te.collection][Te.name]:"NIl":g[Te.name])&&void 0!==t?t:_e,E="list"!==Re&&"subList"!==Re&&"table"!==Re&&"files"!==Re,k=(0,m.jsxs)(n.Fragment,{children:[ye.map(((e,t)=>"toggle"===e.element?(0,m.jsxs)(i.AT,{children:[(0,m.jsx)(i.lz,{type:"checkbox",checked:g[e.id],onChange:async t=>{Zt(!0),await(0,c.LS)({status:t.target.checked},`${e.api}/${g._id}`,Yt,Wt).then((e=>{if(200===e.status){var t,r;if(null!==(t=e.data)&&void 0!==t&&t.message)xe({type:1,content:null===(r=e.data)||void 0===r?void 0:r.message,proceed:"Okay",icon:"success"});vr()}else e.status,vr(),xe({type:1,content:"Something Went Wrong!",proceed:"Okay",icon:"error"})})).catch((e=>{alert(e)}))}}),(0,m.jsx)(i.WU,{})]},`${e.id}-${g._id}`):"action"===e.element&&(0,m.jsxs)(i.$n,{theme:Vt,onClick:t=>{t.stopPropagation(),"callback"===e.type?e.callback(e,g,yr,v):"call"===e.type?window.location.href=`tel:${g.mobileNumber}`:"subList"===e.type||"subItem"===e.type?(kt({item:e,data:g}),vt(!0)):zr(e,g)},className:"edit menu callBack button",children:[(0,m.jsx)(s.A0,{icon:e.icon}),(0,m.jsx)("span",{children:e.title})]},`custom-${e.id+"-"+t}-${g._id}`))),De&&(0,m.jsxs)(i.Kc,{theme:Vt,onClick:e=>{e.stopPropagation(),Ur(g,dr,B)},children:[(0,m.jsx)(s.A0,{icon:"edit"}),(0,m.jsx)("span",{children:"Edit"})]}),Se&&(0,m.jsxs)(i.Kc,{theme:Vt,onClick:e=>{var t,r;e.stopPropagation(),xe({type:2,content:`Do you want to delete '${(0,w._W)({type:null!==(t=Te.type)&&void 0!==t?t:"text"},B)?(0,w._W)({type:null!==(r=Te.type)&&void 0!==r?r:"text"},B):"Item"}'?`,proceed:"Delete",onProceed:async()=>(await Rr(g,g._id),!1),data:g})},children:[(0,m.jsx)(s.A0,{icon:"delete"}),(0,m.jsx)("span",{children:"Delete"})]}),E&&(0,m.jsx)(i.Kc,{theme:Vt,onClick:e=>{e.stopPropagation(),vr(It)},children:(0,m.jsx)(s.A0,{icon:"reload"})}),(null===ct||void 0===ct?void 0:ct.length)>0&&(0,m.jsxs)(i.TK,{ref:x,onClick:e=>{rn(g._id),e.stopPropagation()},children:[(0,m.jsx)(i.Kc,{theme:Vt,className:tn===g._id?"active":"",children:(0,m.jsx)(s.A0,{icon:"dots"})}),(0,m.jsx)(Y,{className:tn===g._id?"actions":"actions hide",children:(0,m.jsxs)(i.En,{children:[Qe&&(0,m.jsxs)(i.$n,{theme:Vt,onClick:e=>{var t,r;e.stopPropagation(),cr(g._id),xe({type:2,content:`Do you want to clone '${(0,w._W)({type:null!==(t=Te.type)&&void 0!==t?t:"text"},B)?(0,w._W)({type:null!==(r=Te.type)&&void 0!==r?r:"text"},B):"Item"}'?`,proceed:"Clone",onProceed:async()=>{await Gr({cloneId:g._id,_title:B,clone:!0})},data:g})},className:"edit menu",children:[(0,m.jsx)(s.A0,{icon:"clone"}),(0,m.jsx)("span",{children:"Clone"})]},`clone-${g._id}`),ct.map(((e,t)=>"button"===e.type&&(0,m.jsxs)(i.$n,{theme:Vt,style:{color:e.color},onClick:t=>{t.stopPropagation(),"callback"===e.type?e.callback(e,g,yr,v):"call"===e.type?window.location.href=`tel:${g.mobileNumber}`:"subList"===e.type||"subItem"===e.type?(kt({item:e,data:g}),vt(!0)):zr(e,g)},className:"edit menu",children:[(0,m.jsx)(s.A0,{icon:e.icon}),(0,m.jsx)("span",{children:e.title})]},`custom-${e.id+"-"+t}-${g._id}`)))]})})]})]},`actions-${_e}-${g._id}`);let I=!0;switch(Re){case"table":return(0,m.jsxs)(i.qR,{onClick:()=>{E||Je&&(window.location.hash="",Ur(g,dr,B,!1,!0),Qr({actions:ye,attributes:p,data:g}),kt({actions:ye,attributes:p,data:g}),Cr(!0))},style:{zIndex:(null===st||void 0===st||null===(a=st.response)||void 0===a?void 0:a.length)-v},children:[p.map(((e,t)=>{var r;if(e.view&&null!==(r=e.tag)&&void 0!==r&&r)try{var a,o,s,l,A,d,f,h,p,y,x,C,B;let r=(null===(a=e.collection)||void 0===a?void 0:a.length)>0&&(null===(o=e.showItem)||void 0===o?void 0:o.length)>0?g[e.collection][e.showItem]:g[e.name];var E,k,S;if(e.showSubItem)r=(null===(E=e.collection)||void 0===E?void 0:E.length)>0&&(null===(k=e.showItem)||void 0===k?void 0:k.length)>0?null!==(S=g[e.collection][e.showItem][e.showSubItem])&&void 0!==S?S:"":g[e.name];let Q="";var D;if(e.condition&&(Q=g[e.condition.item]===e.condition.if?e.condition.then:e.condition.else),"mobilenumber"===e.type)r=(null!==(D="+"+g.phoneCode)&&void 0!==D?D:"")+""+r;const _=(0,w._W)(e,r),T=(0,m.jsx)(i.Q1,{className:I,onClick:()=>{!0===e.editable&&alert("yes")},children:"disabled"===Q?e.inlineAction?"":"--":e.inlineAction?(0,n.createElement)(u.A,{...e,formType:"put",disabled:!1,dynamicClass:he+" control table "+(null!==(s=null===(l=e.condition)||void 0===l?void 0:l.then)&&void 0!==s?s:""),formValues:g,updateValue:"select"!==e.type&&"multiSelect"!==e.type||!Array.isArray(e.updateOn)?{[e.updateOn]:g[e.updateOn]}:e.updateOn.reduce(((e,t)=>(e[t]=g[t],e)),{}),placeholder:e.placeholder,key:`input-${g._id}-${e.index}${b[e.name]?"1":"2"}-${Q}`,id:e.index,error:"",value:g[e.name],selectApi:null!==(A=b[e.name])&&void 0!==A?A:[],apiType:"JSON",disableSearch:!0,params:[...null!==(d=e.params)&&void 0!==d?d:[],me?{name:ge,value:me}:{}],onChange:async t=>{let r=null;if(r="select"===e.type?{id:g._id,[e.name]:t.id}:{id:g._id,[e.name]:t},r){200===(await(0,c.sS)(r,be)).status&&yr(!1,v,r)}}}):(0,m.jsx)(n.Fragment,{children:e.image?(0,m.jsxs)(i.aZ,{children:[(0,m.jsx)("img",{onError:e=>{e.target.src=je.hz},src:"https://event-manager.syd1.cdn.digitaloceanspaces.com/"+((null===(f=e.image.collection)||void 0===f?void 0:f.length)>0?null===(h=g[e.image.collection])||void 0===h?void 0:h[e.image.field]:g[e.image.field]),alt:e.name}),(0,m.jsxs)("div",{children:[_&&(0,m.jsx)("div",{children:_}),e.description&&(0,m.jsx)("div",{children:(0,w._W)(e.description,(null===(p=e.description.collection)||void 0===p?void 0:p.length)>0?null===(y=g[e.description.collection])||void 0===y?void 0:y[e.description.field]:g[e.description.field])})]})]}):(0,m.jsxs)(n.Fragment,{children:[_&&(0,m.jsx)("span",{children:(0,w._W)(e,r)}),e.statusLabel&&(0,m.jsx)(ft,{statusLabels:e.statusLabel.conditions,nextLine:e.statusLabel.nextLine,values:g,size:null!==(x=e.statusLabel.size)&&void 0!==x?x:"small"}),e.description&&(0,m.jsx)(i.Ql,{children:(0,w._W)(e.description,(null===(C=e.description.collection)||void 0===C?void 0:C.length)>0?null===(B=g[e.description.collection])||void 0===B?void 0:B[e.description.field]:g[e.description.field])})]})})},t);return I=!1,T}catch(Q){const e=(0,m.jsx)(i.Q1,{className:I,children:"--"},t);return I=!1,e}return null})),(0,m.jsx)(i.Q1,{style:{zIndex:(null===st||void 0===st||null===(o=st.response)||void 0===o?void 0:o.length)-v,border:0},className:"actions",children:(0,m.jsxs)("div",{children:[(0,m.jsx)("div",{className:"buttons",children:ye.map(((e,t)=>{let r=!0;var n;e.condition&&(r=(null===(n=g[e.condition.item])||void 0===n?void 0:n.toString())===e.condition.if.toString()?e.condition.then:e.condition.else);return"callback"===e.type&&r&&(0,m.jsxs)(i.Kc,{theme:Vt,style:{color:e.color},onClick:t=>{t.stopPropagation(),e.callback(e,g,yr,v)},className:"edit menu callBack",children:[(0,m.jsx)(s.A0,{icon:e.icon}),(0,m.jsx)("span",{children:e.title})]},`custom-${e.id+"-"+t}-${g._id}`)}))}),k]})},`actions-${_e}-${g._id}`)]},`${_e}-${v}`);case"files":return(0,m.jsx)(ve,{fileSource:g[se]||"",title:B,date:null!==(l=g.date)&&void 0!==l?l:"",onClick:()=>{E||(Ur(g,dr,B,!1,!0),Cr(!0),window.location.hash="",Qr({actions:ye,attributes:p,data:g}),kt({actions:ye,attributes:p,data:g}))},viewMode:Re,theme:Vt,action:k},`row-${_e}-${null!==(A=g._id)&&void 0!==A?A:v}`);case"gallery":return(0,m.jsxs)(de.S_,{onClick:()=>{bt({src:`${M.endpoind}${g[M.image]}`})},children:[(0,m.jsx)("img",{alt:g.key,src:`${M.endpoind}${g[M.thumbnail]}`}),(0,m.jsxs)(de.aD,{className:"overlay",children:[(0,m.jsx)(de.cI,{children:Jt(g.compressedSize)}),(0,m.jsx)(de.e2,{children:Se&&(0,m.jsx)(de.K0,{icon:"delete",theme:Vt,align:"error small",ClickEvent:e=>{var t,r;e.stopPropagation(),xe({type:2,content:`Do you want to delete '${(0,w._W)({type:null!==(t=Te.type)&&void 0!==t?t:"text"},B)?(0,w._W)({type:null!==(r=Te.type)&&void 0!==r?r:"text"},B):"Item"}'?`,proceed:"Delete",onProceed:async()=>(await Rr(g,g._id),!1),data:g})}})})]})]});default:return(0,m.jsxs)(Bt,{onClick:()=>{E||(Ur(g,dr,B,!1,!0),Cr(!0),window.location.hash="",Qr({actions:ye,attributes:p,data:g}),kt({actions:ye,attributes:p,data:g}))},viewMode:Re,theme:Vt,className:E?"single":"",children:[oe&&(0,m.jsx)(i.ph,{children:(0,m.jsx)("img",{src:g[oe]?(ie?"":"https://event-manager.syd1.cdn.digitaloceanspaces.com/")+g[oe]:je.hz,onError:e=>{e.target.src=je.hz},onClick:e=>{e.stopPropagation(),bt({src:e.target.src.replace("/thumbnail","")})},alt:"Profile"})}),(0,m.jsxs)(i.nh,{children:[!E&&(0,m.jsxs)(i.pR,{className:E?"nowrap":"nowrap ",children:[(0,m.jsx)(Ct,{children:(0,m.jsxs)(i.p3,{onClick:()=>{Ur(g,dr,B,!1,!0),Cr(!0),window.location.hash="",Qr({actions:ye,attributes:p,data:g}),kt({actions:ye,attributes:p,data:g})},children:[!oe&&(0,m.jsx)(s.A0,{icon:null!==Z&&void 0!==Z?Z:Gt.icon}),(0,m.jsx)("span",{children:` ${(0,w._W)({type:null!==(f=Te.type)&&void 0!==f?f:"text"},B)}`}),(0,m.jsx)(te,{data:g,highlight:Fe})]})},`row-head-${v}`),(0,m.jsx)(i.Td,{style:{zIndex:(null===st||void 0===st||null===(h=st.response)||void 0===h?void 0:h.length)-v},className:"actions",children:(0,m.jsxs)("div",{children:[" ",k]})},`actions-${_e}-${g._id}`)]}),E?(0,m.jsxs)(n.Fragment,{children:[j&&(0,m.jsx)(C.z,{dynamicClass:Ze,title:_e,line:!1,description:`Manage ${_e} here.`}),(0,m.jsx)(Ne.A,{parentReference:ge,referenceId:me,formMode:he,api:be,formType:"put",updateId:lr,header:"",formInput:rr,formErrors:ir,formValues:Lr(g,{}),submitHandler:Gr,isOpenHandler:Ur,isOpen:Nr,profileImage:oe,parentName:_e,parentIcon:Z,setMessage:xe,setLoaderBox:Zt,css:"plain"})]}):(0,m.jsx)(i.pR,{children:p.sort(((e,t)=>t.highlight===e.highlight?0:t.highlight?1:-1)).map(((e,t)=>{var r;if(e.view&&null!==(r=e.tag)&&void 0!==r&&r)try{var n,a,o,l,c;let r=(null===(n=e.collection)||void 0===n?void 0:n.length)>0&&(null===(a=e.showItem)||void 0===a?void 0:a.length)>0?g[e.collection][e.showItem]:g[e.name];var A,u,d;if(e.showSubItem)r=(null===(A=e.collection)||void 0===A?void 0:A.length)>0&&(null===(u=e.showItem)||void 0===u?void 0:u.length)>0?null!==(d=g[e.collection][e.showItem][e.showSubItem])&&void 0!==d?d:"":g[e.name];const f=(null===(o=e.collection)||void 0===o?void 0:o.length)>0&&(null===(l=e.color)||void 0===l?void 0:l.length)>0?g[e.collection][e.color]:"initial";let h="";return e.condition&&(h=g[e.condition.item]===e.condition.if?e.condition.then:e.condition.else),"image"===e.type?"":(0,m.jsxs)(i.Td,{className:"custom "+h,children:["triple"===le?void 0!==e.itemLabel&&null!==e.itemLabel?""===e.itemLabel?"":(0,m.jsx)(i.hE,{children:e.itemLabel}):(0,m.jsx)(i.hE,{children:e.label}):"",(0,m.jsxs)(i.sO,{className:e.highlight?"highlight":"",onClick:()=>{if(!0===e.editable){const r={...Pt};r[`${t}-${e.name}`]=!r[`${t}-${e.name}`]||!r[`${t}-${e.name}`],Ht(r)}},style:{color:f},children:[(null===(c=e.icon)||void 0===c?void 0:c.length)>0&&(0,m.jsx)(s.A0,{icon:e.icon}),(0,m.jsx)("span",{children:(0,w._W)(e,r)})]}),Pt[`${t}-${e.name}`]?(0,m.jsx)(re,{item:e}):""]},t)}catch(f){let r="";return e.condition&&(r=g[e.condition.item]===e.condition.if?e.condition.then:e.condition.else),(0,m.jsxs)(i.Td,{className:"custom "+r,children:[(0,m.jsx)(i.hE,{children:e.label}),(0,m.jsxs)(i.sO,{children:["--"," "]})]},t)}return null}))}),ye.length>0&&(0,m.jsx)(i.pR,{className:"actions",children:ye.map(((e,t)=>{let r=!0;var n,a,o;e.condition&&(r=(null===(n=g[e.condition.item])||void 0===n?void 0:n.toString())===(null===(a=e.condition)||void 0===a||null===(o=a.if)||void 0===o?void 0:o.toString())?e.condition.then:e.condition.else);return"callback"===e.type&&r&&(0,m.jsxs)(i.Kc,{theme:Vt,onClick:t=>{t.stopPropagation(),e.callback(e,g,yr,v)},className:"edit menu callBack",children:[(0,m.jsx)(s.A0,{icon:e.icon}),(0,m.jsx)("span",{children:e.title})]},`custom-${e.id+"-"+t}-${g._id}`)}))})]})]},`row-${_e}-${null!==(d=g._id)&&void 0!==d?d:v}`)}})),Zr=()=>{vt(!1),Cr(!1),window.location.hash="",kr(!1),Sr([])},[Jr,Xr]=(0,n.useState)(""),$r=(0,n.useRef)(),en=(0,n.useRef)([]),[tn,rn]=(0,n.useState)("");(0,n.useEffect)((()=>{const e=e=>{0===en.current.filter((t=>t.current&&t.current.contains(e.target))).length&&rn("")};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[]);const nn=async()=>{Zt(!0),await(0,c.bQ)({...gr,skip:0,limit:0},be).then((e=>{const t=e.data.response;if(t){const e=[];t.forEach((t=>{const r={};Ce.forEach((e=>{var n,i;const a=e.label;if(null===(n=e.export)||void 0===n||n)try{var o,s,l;let n=(null===(o=e.collection)||void 0===o?void 0:o.length)>0&&(null===(s=e.showItem)||void 0===s?void 0:s.length)>0?null!==(l=t[e.collection][e.showItem])&&void 0!==l?l:"":t[e.name];var c,A,u;if(e.showSubItem)n=(null===(c=e.collection)||void 0===c?void 0:c.length)>0&&(null===(A=e.showItem)||void 0===A?void 0:A.length)>0?null!==(u=t[e.collection][e.showItem][e.showSubItem])&&void 0!==u?u:"":t[e.name];switch(e.type){case"text":case"number":case"password":case"email":return r[a]=n;case"mobilenumber":return r[a]=(null!==(i="+"+t.phoneCode)&&void 0!==i?i:"")+n;case"minute":return r[a]=(0,w.m5)(parseFloat(n));case"datetime":return r[a]=(0,W.LE)(n);case"date":return r[a]=(0,W.i$)(n);case"checkbox":return console.log({itemValue:n}),r[a]=n.toString();case"select":if("JSON"===e.apiType){const n=e.selectApi.filter((r=>{var n;return r.id.toString()===(null===(n=t[e.name])||void 0===n?void 0:n.toString())})).map(((e,t)=>e.value));return r[a]=null===n||void 0===n?void 0:n[0]}return"CSV"===e.apiType?r[a]=n:r[a]=null!==(d=n)&&void 0!==d?d:"Nil";var d;case"multiSelect":return"API"===e.apiType?r[a]=n.map((t=>t[e.showItem].toString())).join(", "):r[a]=n.map((t=>e.selectApi.find((e=>e.id===t)).value.toString())).join(", ");default:switch(typeof n){case"undefined":return r[a]="Not Found";case"object":return r[a]=n;case"boolean":return r[a]=n.toString();default:return"select"===e.type&&"JSON"===e.apiType?e.selectApi.filter((e=>{var t;return e.id.toString()===(null===(t=n)||void 0===t?void 0:t.toString())})).map((e=>r[a]=e.value)):r[a]=null===(f=n)||void 0===f?void 0:f.toString().substring(0,200);var f}}}catch(h){r[a]="--"}})),e.push(r)}));const r=G.Wp.json_to_sheet(e),n=G.Wp.book_new();G.Wp.book_append_sheet(n,r,null===_e||void 0===_e?void 0:_e.substring(0,25)),G._h(n,_e+"-data.xlsx"),Zt(!1)}})).catch((e=>{Zt(!1)}))};(0,n.useEffect)((()=>()=>{clearTimeout($r.current)}),[]);let an=!0;const on=Math.ceil(jt/Dt);(0,n.useEffect)((()=>{Oe&&pr(!0),rr.map(((e,t)=>{var r,n,i;switch(e.type){case"select":return!0===(null===(r=e.filter)||void 0===r||r)&&"tabs"!==(null!==(n=e.filterType)&&void 0!==n?n:"")&&pr(!0),!0;case"date":return!0===(null!==(i=e.filter)&&void 0!==i&&i)&&pr(!0),!0;default:return!0}}))}),[rr,pr,Oe]);const sn=n.memo((e=>{var t;let{users:r,selectRef:n,attributes:i,shortName:a,inlineSelectData:o}=e;return(null===r||void 0===r||null===(t=r.response)||void 0===t?void 0:t.length)>0?r.response.map(((e,t)=>(0,m.jsx)(qr,{selectRef:n,slNo:t,attributes:i,inlineSelectData:o,data:e},`${a}-${t}`))):null}),((e,t)=>e.users===t.users&&e.attributes===t.attributes&&e.shortName===t.shortName&&e.inlineSelectData===t.inlineSelectData)),ln=(0,m.jsx)(sn,{users:st,selectRef:en,attributes:Ce,shortName:_e,inlineSelectData:pt});return 0===Ce.length?(0,m.jsxs)("p",{children:["No attributes found for ",_e,". Please ensure that the data is correctly loaded."]}):q?(null===st||void 0===st||null===(t=st.response)||void 0===t?void 0:t.length)>0&&(0,m.jsx)(o.Yq,{theme:Vt,className:"data-layout "+Re,children:(0,m.jsx)(K.A,{isSingle:q,parentName:_e,parentIcon:Z,popupMode:$,showInfo:ee,popupMenu:Pe,selectedMenuItem:Gt,formMode:he,closeModal:Zr,themeColors:Vt,isEditingHandler:Ur,updateValue:dr,setMessage:xe,setLoaderBox:Zt,itemTitle:Te,openData:{actions:ye,attributes:Ce,data:null===st||void 0===st?void 0:st.response[0]},updatePrivilege:De})}):"list"===Re||"subList"===Re||"table"===Re||"files"===Re||"gallery"===Re?(0,m.jsxs)(o.Yq,{theme:Vt,className:"data-layout "+Re,children:[j&&(0,m.jsx)(C.z,{dynamicClass:Ze,title:_e,line:!1,description:jt>0?Kr():""}),0!==jt||hr?(0,m.jsxs)(n.Fragment,{children:[N.length>0&&(0,m.jsx)(xt,{labels:N,data:Ut}),(0,m.jsxs)(i.XR,{className:Re,theme:Vt,children:[L&&(0,m.jsxs)(n.Fragment,{children:[(null===(r=rr.filter((e=>{var t;return"tabs"===(null!==(t=e.filterType)&&void 0!==t?t:"")})))||void 0===r?void 0:r.length)>0&&(0,m.jsx)(i.Cu,{className:"show-filter",children:rr.filter((e=>{var t;return"tabs"===(null!==(t=e.filterType)&&void 0!==t?t:"")})).map(((e,t)=>(0,m.jsx)(u.A,{setLoaderBox:Zt,updateValue:{},customClass:"filter",placeholder:e.placeHolder,value:gr[e.name],id:e.name,...e,filter:{...Ue,...Ve},onChange:(t,r,n)=>{var i;return Yr(t,r,n,null!==(i=e.parentFilter)&&void 0!==i&&i)},showLabel:!1,required:!1,selectType:e.filterType},"input"+t+zt)))}),(0,m.jsxs)(i.S6,{children:[hr&&(0,m.jsx)(i.dJ,{className:Mt?"active":"",theme:Vt,onClick:()=>{Nt(!Mt)},children:(0,m.jsx)(s.A0,{icon:"filter"})}),(0,m.jsx)(i.dJ,{theme:Vt,onClick:()=>{vr(It)},children:(0,m.jsx)(s.A0,{icon:"reload"})}),ke&&(0,m.jsx)(i.dJ,{theme:Vt,onClick:e=>{e.stopPropagation(),xe({type:2,content:"Do you want export this page to excel?",proceed:"Export Now",onProceed:async()=>(await(async()=>{try{await nn()}catch(e){alert(e)}})(),!0),data:It})},children:(0,m.jsx)(s.A0,{icon:"excel"})}),fe&&(0,m.jsx)(i.dJ,{theme:Vt,onClick:e=>{e.stopPropagation(),xe({type:2,content:"Do you want print?",proceed:"Print Now",onProceed:async()=>(await(async()=>{try{Zt(!0),await(0,c.bQ)({...gr,skip:0,limit:0},be,Yt,Wt).then((e=>{Sr(e.data),Zt(!1),kr(!0)})).catch((e=>{Zt(!1)}))}catch(e){alert(e)}})(),!1),data:It})},children:(0,m.jsx)(s.A0,{icon:"print"})}),(0,m.jsx)(b.A,{title:"Search",theme:Vt,placeholder:"Search",value:Jr,onChange:e=>{clearTimeout($r.current),Xr(e.target.value),$r.current=setTimeout((()=>{St(0),mr({...gr,searchkey:e.target.value}),it(!1)}),400)}})]})]}),jt>0&&(ze.length>0||Ie||He)&&(0,m.jsxs)(i.S6,{children:[ze.map((e=>(0,m.jsxs)(i.M3,{theme:Vt,onClick:()=>e.onClick(me),children:[(0,m.jsx)(s.A0,{icon:e.icon}),(0,m.jsx)("span",{children:e.label})]}))),!!Ie&&(0,m.jsxs)(i.M3,{theme:Vt,onClick:()=>Mr(0,vr),children:[null!==J&&void 0!==J&&J.icon?(0,m.jsx)(s.A0,{icon:J.icon}):(0,m.jsx)(s.RE,{}),(0,m.jsx)("span",{children:null!==(d=null===J||void 0===J?void 0:J.label)&&void 0!==d?d:_e})]}),!!He&&(0,m.jsxs)(i.M3,{onClick:()=>Tr((e=>!e)),children:[(0,m.jsx)(s.JM,{}),(0,m.jsxs)("span",{children:["Bulk Upload ",_e]})]})]})]}),(0,m.jsxs)(i.Cu,{className:""+(Mt?"show-filter":""),children:[Oe&&(0,m.jsx)(V,{onChange:e=>{const t=new Date(null===e||void 0===e?void 0:e.startDate);t.setHours(0,0,0,0);const r=new Date(null===e||void 0===e?void 0:e.endDate);r.setHours(23,59,59,999);const n={...gr,startDate:t.toISOString(),endDate:r.toISOString()};mr(n)},themeColors:Vt}),rr.map(((e,t)=>{var r,n,i,a;let o={};var s;"select"!==e.type&&"multiSelect"!==e.type||!0!==(null===(r=e.filter)||void 0===r||r)||(Array.isArray(e.updateOn)?(o={},null===(s=e.updateOn)||void 0===s||s.forEach((e=>{o[e]=gr[e]}))):o={[e.updateOn]:gr[e.updateOn]});switch(e.type){case"select":return!0===(null===(n=e.filter)||void 0===n||n)&&"tabs"!==(null!==(i=e.filterType)&&void 0!==i?i:"")&&(0,m.jsx)(u.A,{setLoaderBox:Zt,updateValue:o,customClass:"filter",placeholder:e.placeHolder,value:gr[e.name],id:e.name,...e,filter:{...Ue,...Ve},onChange:(t,r,n)=>{var i;return Yr(t,r,n,null!==(i=e.parentFilter)&&void 0!==i&&i)},showLabel:!1,required:!1,selectType:e.filterType},"input"+t+zt);case"date":return!0===(null!==(a=e.filter)&&void 0!==a&&a)&&(0,m.jsx)(u.A,{updateValue:o,customClass:"",placeholder:e.placeHolder,value:gr[e.name],id:e.name,...e,onChange:Yr,showLabel:!1,required:!1},"input"+t+zt);default:return null}}))]}),(0,m.jsx)(i.eK,{className:`${Pe} ${$} ${P}`,children:(0,m.jsx)(i.ey,{children:"table"===Re?(0,m.jsxs)(i.nS,{children:[(0,m.jsxs)(i.Qg,{theme:Vt,children:[R&&(0,m.jsx)("thead",{children:(0,m.jsxs)("tr",{children:[Ce.map((e=>{var t;if(e.view&&null!==(t=e.tag)&&void 0!==t&&t){var r;const t=(0,m.jsx)(i._q,{className:an,children:(0,m.jsxs)("div",{children:[(0,m.jsx)("span",{children:e.label})," ",e.sort&&(0,m.jsx)(de.K0,{ClickEvent:()=>{ht((t=>({...t,[e.name]:"asc"===t[e.name]?"desc":"desc"===t[e.name]?"":"asc"}))),it(!1)},icon:"sort",align:`plain sort ${null!==(r=null===dt||void 0===dt?void 0:dt[e.name])&&void 0!==r?r:""}`})]})},_e+e.name);return an=!1,t}return null})),(0,m.jsx)(i._q,{},"actions")]})}),(0,m.jsx)("tbody",{children:ln})]}),!st&&!(null!==st&&void 0!==st&&st.response)&&(0,m.jsx)(Ee.Ay,{setShowBulkUplad:Tr,bulkUplaod:He,shortName:_e,icon:Z,addPrivilege:Ie,isCreatingHandler:Mr,refreshView:vr,className:`white-list ${le}`}),0===(null===st||void 0===st||null===(f=st.response)||void 0===f?void 0:f.length)&&(0,m.jsx)(Ee.Ay,{setShowBulkUplad:Tr,bulkUplaod:He,shortName:_e,icon:Z,addPrivilege:Ie,isCreatingHandler:Mr,refreshView:vr,className:`white-list ${le}`})]}):(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(i.XI,{className:`${Re} ${le} ${jt>0?"":"no-data"}`,children:[(null===st||void 0===st||null===(h=st.response)||void 0===h?void 0:h.length)>0&&st.response.map(((e,t)=>(0,m.jsx)(qr,{slNo:t,attributes:Ce,selectRef:en,data:e},`${_e}-${t}`))),!st&&!(null!==st&&void 0!==st&&st.response)&&(0,m.jsx)(Ee.Ay,{setShowBulkUplad:Tr,bulkUplaod:He,shortName:_e,icon:Z,addPrivilege:Ie,isCreatingHandler:Mr,refreshView:vr,className:`white-list ${le}`}),0===(null===st||void 0===st||null===(p=st.response)||void 0===p?void 0:p.length)&&(0,m.jsx)(Ee.Ay,{setShowBulkUplad:Tr,bulkUplaod:He,shortName:_e,icon:Z,addPrivilege:Ie,isCreatingHandler:Mr,refreshView:vr,className:`white-list ${le}`})]})})})})]}):(0,m.jsx)(Ee.Ay,{setShowBulkUplad:Tr,bulkUplaod:He,shortName:_e,icon:Z,addPrivilege:Ie,addLabel:J,isCreatingHandler:Mr,refreshView:vr,className:"white-list"}),jt>z&&U&&(0,m.jsx)(Be,{onClick:(e,t)=>{Qt(t),St(e),it(!1)},totalRows:jt,perPage:z,currentIndex:It}),Fr?"gallery"===Re?(0,m.jsx)(Ae.A,{customClass:"side",popupData:(0,m.jsx)(Le.A,{viewMode:"side",imageSettings:M,api:`${be}`,openData:{api:`${be}`,data:{_id:me,...Ve}}}),themeColors:Vt,closeModal:()=>{yr(!0),Or(!1)},itemTitle:{name:"title",type:"text",collection:""},openData:{data:{key:"print_preparation",title:null!==(g=null===J||void 0===J?void 0:J.label)&&void 0!==g?g:_e}}}):(0,m.jsx)(Ne.A,{setMessage:xe,setLoaderBox:Zt,formTabTheme:O,formLayout:pe,parentReference:ge,referenceId:me,formMode:he,api:be,formType:"post",header:`Add a ${_e||"Form"}`,formInput:rr,formValues:or,formErrors:ir,submitHandler:Vr,isOpenHandler:Mr,isOpen:Fr}):null,Pr.data&&(0,m.jsx)(v,{setMessage:xe,setLoaderBox:Zt,onClose:Wr,...Pr}),xr&&Ar&&(0,m.jsx)(K.A,{showInfoType:ne,parentReference:ge,referenceId:me,editData:{parentReference:ge,referenceId:me,formMode:he,api:be,formType:"put",updateId:lr,header:`${_e} details`,formInput:rr,formErrors:ir,formValues:Ar,submitHandler:Gr,isOpenHandler:Ur,isOpen:Nr,profileImage:oe,parentName:_e,parentIcon:Z,setMessage:xe,setLoaderBox:Zt},popupMode:$,showInfo:ee,popupMenu:Pe,parents:{...Ve,[ge]:null===Dr||void 0===Dr||null===(E=Dr.data)||void 0===E?void 0:E._id},selectedMenuItem:Gt,formMode:he,closeModal:Zr,themeColors:Vt,isEditingHandler:Ur,updateValue:dr,setMessage:xe,setLoaderBox:Zt,itemTitle:Te,itemDescription:Ge,parentName:_e,openData:Dr,updatePrivilege:De,profileImage:oe}),Nr&&(0,m.jsx)(Ne.A,{setMessage:xe,setLoaderBox:Zt,parentReference:ge,referenceId:me,formMode:he,api:be,formType:"put",updateId:lr,header:`${!1===Ar.clone?`${_e}: `:`Clone ${_e}: `}  <span style="font-weight:bold">'${Ar._title}'</span>`,formInput:rr,formErrors:ir,formValues:Ar,submitHandler:Gr,isOpenHandler:Ur,isOpen:Nr}),Br&&(0,m.jsx)(ce,{formMode:he,closeModal:Zr,themeColors:Vt,setMessage:xe,setLoaderBox:Zt,itemTitle:Te,openData:Dr}),mt&&(null===Et||void 0===Et||null===(I=Et.item)||void 0===I||null===(S=I.attributes)||void 0===S?void 0:S.length)>0&&(0,m.jsx)(B,{themeColors:Vt,formMode:he,closeModal:Zr,setMessage:xe,setLoaderBox:Zt,itemTitle:Te,subAttributes:Et}),Er&&(0,m.jsx)(Ae.A,{customClass:"print",popupData:(0,m.jsx)(X,{orientation:ae,data:Ir,themeColors:Vt,formMode:he,closeModal:()=>kr(!1),setMessage:xe,setLoaderBox:Zt,shortName:_e,attributes:Ce},_e),themeColors:Vt,closeModal:()=>kr(!1),itemTitle:{name:"title",type:"text",collection:""},openData:{data:{key:"print_preparation",title:"Print "+_e}}}),yt&&(0,m.jsx)(ue.A,{onClose:()=>bt(null),src:yt.src}),Kt&&(0,m.jsx)(y.A,{list:"absolute"}),He&&_r&&(0,m.jsx)(Me,{bulkUpload:!0,delPrivilege:Se,deleteHandler:Rr,setMessage:xe,setLoaderBox:Zt,formMode:"single",formView:we,api:be,icon:Z,formType:"put",updateId:lr,header:"Bulk Upload "+_e,formInput:rr,formErrors:ir,formValues:Ar,shortName:_e,parents:{[ge]:me,...Ve},currentApi:wt,submitHandler:()=>{vr(It),jr(!1),Tr(!1)},isOpenHandler:()=>Tr(!1),isOpen:Nr}),Ft&&(0,m.jsx)(Ae.A,{popupData:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(x.j,{className:"page",children:[(0,m.jsx)("div",{className:"head",children:"Items Per Page"}),[10,25,50,100,250].map((e=>(0,m.jsx)(i.nk,{theme:Vt,className:"nomargin "+(Dt===e),onClick:()=>{Qt(e),it(!1)},children:e},`per-${e}`)))]}),(0,m.jsxs)(x.j,{className:"page",children:[(0,m.jsxs)("div",{className:"head",children:["Pages: ",on," | Current Page: ",_t]}),Array.from({length:on},((e,t)=>t+1)).map((e=>(0,m.jsx)(i.nk,{className:"nomargin "+(_t===e),onClick:()=>{St((e-1)*Dt),it(!1)},children:e},`page-${e}`)))]})]}),themeColors:Vt,closeModal:()=>Ot(!1),itemTitle:{name:"title",type:"text",collection:""},openData:{data:{_id:"",title:"Pagination Setup!"}},customClass:"small"})]}):(0,m.jsxs)(o.Yq,{className:"data-layout ",children:[0===(null===st||void 0===st||null===(D=st.response)||void 0===D?void 0:D.length)&&(0,m.jsxs)(i.XR,{children:[(0,m.jsx)(i.S6,{}),!!Ie&&0===(null===st||void 0===st||null===(Q=st.response)||void 0===Q?void 0:Q.length)&&(0,m.jsxs)(i.M3,{theme:Vt,onClick:()=>Mr(0,vr),children:[(0,m.jsx)(s.RE,{}),_e]})]}),(0,m.jsx)(i.XI,{className:0===(null===st||void 0===st||null===(_=st.response)||void 0===_?void 0:_.length)?"norecord":"record",children:(null===st||void 0===st||null===(T=st.response)||void 0===T?void 0:T.length)>0&&(0,m.jsx)(qr,{slNo:0,attributes:Ce,data:null===st||void 0===st?void 0:st.response[0],selectRef:en},`${_e}-0`)}),!st&&!(null!==st&&void 0!==st&&st.response)&&(0,m.jsx)(Ee.Ay,{bulkUplaod:He,shortName:_e,icon:Z,addPrivilege:Ie,isCreatingHandler:Mr,refreshView:vr,className:`white-list ${le}`}),0===(null===st||void 0===st||null===(F=st.response)||void 0===F?void 0:F.length)&&(0,m.jsx)(Ee.Ay,{bulkUplaod:He,shortName:_e,icon:Z,addPrivilege:Ie,isCreatingHandler:Mr,refreshView:vr,className:`white-list ${le}`}),Fr&&(0,m.jsx)(Ne.A,{setMessage:xe,setLoaderBox:Zt,parentReference:ge,referenceId:me,api:be,formMode:he,formType:"post",header:`Add a ${_e||"Form"}`,formInput:rr,formValues:or,formErrors:ir,submitHandler:Vr,isOpenHandler:Mr,isOpen:Fr}),Nr&&(0,m.jsx)(Ne.A,{setMessage:xe,setLoaderBox:Zt,parentReference:ge,referenceId:me,formMode:he,api:be,formType:"put",updateId:lr,header:`${!1===Ar.clone?`Update ${_e}: `:`Clone ${_e}: `} <span style="font-weight:bold">'${Ar._title}' </span>`,formInput:rr,formErrors:ir,formValues:Ar,submitHandler:Gr,isOpenHandler:Ur,isOpen:Nr}),Pr.data&&(0,m.jsx)(v,{setMessage:xe,setLoaderBox:Zt,onClose:Wr,...Pr}),xr&&(0,m.jsx)(K.A,{parentReference:ge,popupMenu:Pe,data:Dr,actions:ye}),Kt&&(0,m.jsx)(y.A,{list:"absolute1"})]})}))},97152:(e,t,r)=>{"use strict";r.d(t,{$P:()=>A,Y9:()=>u,YW:()=>c,hJ:()=>s,j:()=>f,lV:()=>a,oz:()=>p,sB:()=>g,tu:()=>h,wi:()=>d});var n=r(94574),i=r(8276);const a=n.Ay.div`
  border: 1px solid rgb(224, 224, 227);
  padding: 1em;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    border: 0;
  }
`,o=n.i7`  
  from {  
    transform: translateX(100%); 
    opacity: 0;
  }  
  to {  
    transform: translateX(0); 
    opacity: 1;
  }  
`,s=n.Ay.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 25px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  z-index: 1001;
  background-color: #00000033;
  &.plain {
    position: inherit;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
    top: 0;
    bottom: 0;
    border-top: 1px solid rgb(224, 224, 227);
  }
`,l=n.i7`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`,c=n.Ay.div`
  display: flex;
  flex-direction: column;
  display: flex;
  border-radius: 10px;
  width: 30%;
  min-width: 250px;
  max-width: 100%;
  height: auto;
  overflow: auto;
  animation: ${o} 0.3s ease-in-out;
  margin: 5vh auto auto auto;
  padding: 0em 0;
  background-color: white;
  max-height: 90%;
  box-shadow: 0px 0px 3px 1px rgb(181 181 181 / 45%);
  inset: 0px 0px 0px auto;
  &.side {
    display: flex;
    flex-direction: column;
    display: flex;
    background-color: white;
    border-radius: 0px;
    width: 30%;
    min-width: 400px;
    animation: ${l} 1s ease-in-out;
    animation-duration: 0.2s;
    padding: 0em 0em 0em;
    max-height: 100%;
    left: auto;
    right: 0;
    top: 0;
    bottom: 0;
    height: 100vh;
    margin: inherit;
    position: relative;
    overflow: auto;
  }
  &.print {
    width: 70%;
  }
  &.medium {
    width: 70%;
    min-width: 250px;
    max-width: 100%;
    min-width: 250px;
    max-width: 100%;
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    max-height: 100%;
    border-radius: 0;
  }
  &.medium.iframe {
    width: 800px;
    min-width: 250px;
    max-width: 100%;
  }
  &.filter {
    right: 0px;
    position: absolute;
    top: 0;
    bottom: 0;
    max-height: 100%;
    margin: 0;
    border-radius: 0;
    animation: ${l} 0.3s ease-in-out;
    box-shadow: rgb(237, 237, 237) -2px -1px 11px 3px;
  }
  &.large {
    width: 80%;
    min-width: 250px;
    max-width: 100%;
    min-width: 250px;
    max-width: 100%;
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    max-height: 100%;
    border-radius: 0;
  }
  &.small {
    width: 30%;
    min-width: 250px;
    max-width: 100%;
    min-width: 250px;
    max-width: 100%;
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    max-height: 100%;
    border-radius: 0;
  }
  &.full-page {
    position: fixed;
    top: 0;
    bottom: 0;
    height: 100vh;
    max-height: 100vh;
    margin: 0;
    width: 100%;
    border-radius: 0;
  }
  &.plain {
    position: inherit;
  }
  &.full-page > .popup-data > .vertical-menu > .vertical-menu > .vertical-menu > .data-layout > {
    .horizontal.medium {
      /* max-height: calc(69vh); */
      /* min-height: calc(100% - 221px); */
    }
  }
  &.medium > .popup-data > .horizontal > .horizontal > .horizontal > .data-layout > .noshadow > .data-layout > {
    .horizontal.medium {
      max-height: calc(45vh);
      min-height: calc(45vh);
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    position: relative;
    top: 0;
    padding: 0;
    &.medium {
      width: 100%;
      min-width: 250px;
      max-width: 100%;
      padding: 0px;
    }
    &.small {
      width: 90%;
    }
  }
`,A=(n.Ay.div``,n.Ay.div`
  display: flex;
  border-bottom: 1px solid ${i.D.stroke.soft};
  padding: 16px 32px 16px 32px;
  width: calc(100% - 80px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  > div {
    display: flex;
    gap: 14px;
    align-items: center;
    > svg {
      width: 30px;
      font-size: 30px;
    }
    > div:first-child {
      /* margin-left: 10px; */
    }
    > div:last-child {
      display: flex;
      flex-direction: column;
      gap: 2px;

      > span:first-child {
        font-size: 18px;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: -0.015em;
        text-align: left;
      }
      > span:last-child {
        color: #525866;
        font-weight: normal;
        font-size: 14px;
      }
    }
  }
  &.custom {
    > div {
      display: flex;
      gap: 14px;
      align-items: baseline;
    }
  }
`),u=n.Ay.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 24px 20px 24px;
  position: absolute;
  height: 80px;
  width: 100%;
  top: 0px;
  top: 0;
  background-color: ${i.D.bg.white};
  z-index: 1;
  border-bottom: 1px solid ${i.D.stroke.soft};
  &.head-hide {
    display: none;
  }
  &.embed {
    padding: 0;
    flex-direction: column;
    gap: 4px;
    width: 100%;
  }
  &.checkout {
    padding-bottom: 5px !important;
    margin-bottom: 20px;
    height: auto;
  }
  & > div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;

    > span {
      font-size: 18px;
      font-weight: 500;
      line-height: 19.36px;
      letter-spacing: -0.011em;
      text-align: left;
    }
  }
  &.custom > div {
    display: flex;
    gap: 14px;
    align-items: baseline;
  }
  &.embed > div > span {
    font-size: 16px;
    text-align: left;
    align-items: baseline;
    flex-direction: column;
    font-size: 16px;
    font-weight: 500;
    line-height: 19.36px;
    letter-spacing: -0.011em;
    text-align: left;
  }
  > span {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.006em;
    text-align: left;
  }
  span > bold {
    font-weight: 700;
  }
  > span svg {
    margin-right: 5px;
    font-size: 12px;
  }
  > span svg:first-child {
    margin-right: 5px;
    font-size: 16px;
  }
  .small {
    font-size: 12px;
  }
  &.plain {
    /* padding: 10px 0; */
    box-shadow: none;
    /* border-bottom: 1px solid #e9e9e9; */
    position: inherit;
    padding: 0 0 15px 0;
    height: auto;
  }
  &.parent {
    padding: 0;
    border-bottom: 0;
  }
  && {
    .filter & {
      padding: 5px 10px;
    }
  }
  &.form {
    /* padding: 0.5em 0.5em; */
  }
  &.small {
    padding: 5px;
    padding: 5px;
    /* border-bottom: 1px solid rgb(243, 243, 243); */
    margin-bottom: 10px;
  }
  &.small button {
    background-color: rgb(243, 243, 243);
    height: 30px;
    padding: 5px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &.small > span {
    font-size: 12px;
  }
  &.horizontal {
    border-bottom: 1px solid ${i.D.stroke.soft};
    .header-data {
      border: 0;
    }
  }
  /* border-bottom: 1px solid rgb(204, 204, 204); */
  @media (max-width: 768px) {
    position: sticky;
    top: 0;
    background: white;
    z-index: 1;
    border-bottom: 1px solid rgb(224, 224, 227);
    padding: 1em 1.5em;
    > span {
      display: block;
    }
  }
`,d=n.Ay.div`
  display: flex;
  justify-content: flex-end;
  justify-content: center;
  @media (max-width: 768px) {
    position: sticky;
    bottom: 0;
    background: white;
    padding-bottom: 10px;
    border-top: 1px solid rgb(224, 224, 227);
  }
`,f=(n.Ay.div`
  border-left: 1px solid lightgrey;
  padding-left: 10px;
  margin: 0 0;
  color: #fe7b7b;
  font-size: 12px;
  width: 100%;
  text-align: left;
  float: left;
`,n.Ay.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 100%;
`),h=n.Ay.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 0;
  align-items: flex-end;
  height: 60px;
`,p=n.Ay.div`
  padding: 0px;
  background-color: white;
  display: none;
  box-shadow: rgb(0 0 0 / 16%) 0px 1px 4px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  ${e=>e.active&&"\n    display: flex;\n  "}
`,g=n.Ay.div`
  cursor: pointer;
  padding: 10px;
  flex: 1 1 50%;
  background-color: #ddedeb;
  color: #77998e;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 30px;
  &:first-child {
    border-top-left-radius: 10px;
  }
  &:last-child {
    border-top-right-radius: 10px;
  }
  &.active {
    background-color: #ffffff;
    color: #77998e;
    height: 40px;
    box-shadow: rgb(0 0 0 / 16%) 0px 1px 4px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    font-weight: 600;
    font-size: 16px;
    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
`;n.Ay.div`
  display: flex;
  flex: auto;
  flex-direction: column;
  flex: 1 1 100%;
  box-shadow: rgb(0 0 0 / 16%) 0px 1px 4px;
  padding: 0;
  margin-bottom: 1em;
  margin: 1em;
  border-radius: 10px;
  background: #f3f8fb;
  padding-bottom: 10px;
`,n.Ay.div`
  display: flex;
  flex: auto;
  flex-direction: column;
  flex: 1 1 100%;
  padding: 1em;
  margin-bottom: 1em;
`},37784:(e,t,r)=>{"use strict";r.d(t,{Ay:()=>g,GI:()=>p,t7:()=>h});var n=r(94574),i=r(46861),a=r(83150),o=r(8276),s=r(70579);const l=n.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 64px 0px 10px 0px;
  text-align: center;
  border-radius: 8px;
  width: Fixed (293px) px;
  height: Hug (264px) px;
  gap: 24px;
  opacity: 0px;
  &.triple {
    grid-column: span 3;
  }
  @media screen and (max-width: 768px) {
    &.hm {
      display: none;
    }
  }
`,c=n.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  opacity: 0px;
`,A=n.Ay.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.015em;
  text-align: center;
  margin-top: 20px;
`,u=n.Ay.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.006em;
  text-align: center;
  color: ${o.D.text.sub};
  margin-bottom: 8px;
`,d=n.Ay.div`
  border-radius: 50%;
  width: 148px;
  height: 148px;
  gap: 0px;
  opacity: 0px;
  border: 0;
  background-color: #f6f8fa;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  > svg:first-child {
    font-size: 80px;
    color: #868c98;
  }
  > svg:nth-child(2) {
    position: absolute;
    top: 5px;
    left: 70%;
  }
  > svg:nth-child(3) {
    position: absolute;
    bottom: 0;
    left: 25%;
  }
`,f=n.Ay.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  button:nth-child(2) {
    background: ${o.D.bg.white};
    color: ${o.D.text.sub};
    border: 1px solid ${o.D.stroke.soft};
  }
`,h=e=>{let{icon:t,download:r,upload:n}=e;return(0,s.jsxs)(l,{children:[(0,s.jsxs)(d,{children:[(0,s.jsx)(i.A0,{icon:t}),(0,s.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M14.8889 8.19449C14.8889 8.19449 7.69444 8.21894 7.69444 15.3889C7.69444 8.21894 0.5 8.19449 0.5 8.19449C0.5 8.19449 7.69444 8.16995 7.69444 1C7.69444 8.16995 14.8889 8.19449 14.8889 8.19449Z",stroke:"#868C98",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,s.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M14.8889 8.19449C14.8889 8.19449 7.69444 8.21894 7.69444 15.3889C7.69444 8.21894 0.5 8.19449 0.5 8.19449C0.5 8.19449 7.69444 8.16995 7.69444 1C7.69444 8.16995 14.8889 8.19449 14.8889 8.19449Z",stroke:"#868C98",strokeLinecap:"round",strokeLinejoin:"round"})})]}),(0,s.jsxs)(c,{children:[(0,s.jsx)(A,{children:"No file added!"}),(0,s.jsx)(u,{children:"Upload an Excel (.xlsx, .xls files are supported) file, Download template for valid upload!"}),(0,s.jsxs)(f,{children:[(0,s.jsx)(a.HW,{type:"file",accept:".xlsx, .xls",onChange:n}),(0,s.jsxs)(a.M3,{onClick:r,children:[(0,s.jsx)(i.A0,{icon:"download"}),(0,s.jsx)("span",{children:"Download Template"})]})]})]})]})},p=e=>{let{title:t,icon:r,description:n="",className:a}=e;return(0,s.jsxs)(l,{className:a,children:[(0,s.jsxs)(d,{children:[(0,s.jsx)(i.A0,{icon:r}),(0,s.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M14.8889 8.19449C14.8889 8.19449 7.69444 8.21894 7.69444 15.3889C7.69444 8.21894 0.5 8.19449 0.5 8.19449C0.5 8.19449 7.69444 8.16995 7.69444 1C7.69444 8.16995 14.8889 8.19449 14.8889 8.19449Z",stroke:"#868C98",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,s.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M14.8889 8.19449C14.8889 8.19449 7.69444 8.21894 7.69444 15.3889C7.69444 8.21894 0.5 8.19449 0.5 8.19449C0.5 8.19449 7.69444 8.16995 7.69444 1C7.69444 8.16995 14.8889 8.19449 14.8889 8.19449Z",stroke:"#868C98",strokeLinecap:"round",strokeLinejoin:"round"})})]}),(0,s.jsxs)(c,{children:[(0,s.jsx)(A,{children:t}),(null===n||void 0===n?void 0:n.length)>0&&(0,s.jsx)(u,{children:n})]})]})},g=e=>{let{shortName:t,icon:r="",addPrivilege:n,isCreatingHandler:o,refreshView:h,bulkUplaod:p,setShowBulkUplad:g,className:m=""}=e;return(0,s.jsxs)(l,{className:m,children:[(0,s.jsxs)(d,{children:[(0,s.jsx)(i.A0,{icon:r}),(0,s.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M14.8889 8.19449C14.8889 8.19449 7.69444 8.21894 7.69444 15.3889C7.69444 8.21894 0.5 8.19449 0.5 8.19449C0.5 8.19449 7.69444 8.16995 7.69444 1C7.69444 8.16995 14.8889 8.19449 14.8889 8.19449Z",stroke:"#868C98",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,s.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M14.8889 8.19449C14.8889 8.19449 7.69444 8.21894 7.69444 15.3889C7.69444 8.21894 0.5 8.19449 0.5 8.19449C0.5 8.19449 7.69444 8.16995 7.69444 1C7.69444 8.16995 14.8889 8.19449 14.8889 8.19449Z",stroke:"#868C98",strokeLinecap:"round",strokeLinejoin:"round"})})]}),(0,s.jsxs)(c,{children:[(0,s.jsxs)(A,{children:["No ",t," added"]}),(0,s.jsxs)(u,{children:["Add a new ",t.toLowerCase()," to get started!"]}),(0,s.jsxs)(f,{children:[!!n&&(0,s.jsxs)(a.M3,{className:"small",onClick:()=>o(!0,h),children:[(0,s.jsx)(i.A0,{icon:"add"}),(0,s.jsxs)("span",{children:["Add New ",t]})]}),!!p&&(0,s.jsxs)(a.M3,{onClick:()=>g((e=>!e)),children:[(0,s.jsx)(i.A0,{icon:"upload"}),(0,s.jsxs)("span",{children:["Bulk Upload ",t]})]})]})]})]})}},13295:(e,t,r)=>{"use strict";r.d(t,{A:()=>m,O:()=>g});var n=r(97152),i=r(87920),a=r(46861),o=r(46193),s=r(27029),l=r(65043),c=r(9667),A=r(83150),u=r(81904),d=r(38520),f=r(41210),h=r(8075),p=r(70579);const g=e=>{let{attributes:t,data:r,formMode:n,popupMenu:s}=e;const[c,A]=(0,l.useState)(!1);return(0,p.jsxs)(o.$F,{className:s,children:[(0,p.jsx)(o.pR,{className:n,children:t.map(((e,t)=>{if(e.view)try{var n,s,l;const c=(null===(n=e.collection)||void 0===n?void 0:n.length)>0&&(null===(s=e.showItem)||void 0===s?void 0:s.length)>0?r[e.collection][e.showItem]:r[e.name];return(0,p.jsxs)(o.Td,{className:e.type,children:[(0,p.jsxs)(o.hE,{children:[(null===(l=e.icon)||void 0===l?void 0:l.length)>0&&(0,p.jsx)(a.A0,{icon:e.icon}),e.label]}),"image"===e.type?(0,p.jsx)(o.sO,{children:(0,i._W)(e,c,!0,!1,(e=>{A(e)}))}):(0,p.jsxs)(o.sO,{children:[(0,i._W)(e,c,!0)," "]})]},t)}catch(c){return(0,p.jsxs)(o.Td,{children:[(0,p.jsx)(o.hE,{children:e.label}),(0,p.jsxs)(o.sO,{children:["--"," "]})]},t)}return"title"===e.type?(0,p.jsx)(o.Td,{className:"span",children:(0,p.jsx)(d.hE,{line:!1,icon:e.icon,title:e.title})},t):null}))}),c&&(0,p.jsx)(u.A,{onClose:()=>A(null),src:c.src})]})},m=e=>{var t,r,u,g,m,v,y,b,w,x;let{itemDescription:C={type:"",name:""},showInfoType:B="view",editData:E,customProfileSource:k,profileImage:I,isSingle:S=!1,popupMode:D="medium",showInfo:Q,popupMenu:_,formMode:T,selectedMenuItem:F,viewMode:O,themeColors:M,openData:N,setLoaderBox:j,setMessage:L,closeModal:U,itemTitle:R,updatePrivilege:P,isEditingHandler:H,udpateView:z,parentName:V,parentIcon:G,parents:Y={},parentReference:W}=e;const K=((null===(t=R.collection)||void 0===t?void 0:t.length)>0?null!==(r=null===N||void 0===N||null===(u=N.data)||void 0===u||null===(g=u[R.collection])||void 0===g?void 0:g[R.name])&&void 0!==r?r:"":null===N||void 0===N||null===(m=N.data)||void 0===m?void 0:m[R.name])||"Please update the itemTitle.",q=((null===(v=C.collection)||void 0===v?void 0:v.length)>0?null!==(y=null===N||void 0===N||null===(b=N.data)||void 0===b||null===(w=b[C.collection])||void 0===w?void 0:w[C.name])&&void 0!==y?y:"":null===N||void 0===N||null===(x=N.data)||void 0===x?void 0:x[C.name])||"",Z=(0,l.useCallback)((()=>{const e=N.actions.filter((e=>["subList","subTabs","subItem","custom","information","title","gallery"].includes(e.type))).map(((e,t)=>{var r,n,i;return{name:`${e.id}-${t}`,title:e.title,icon:e.icon,type:e.type,css:"information"===e.type?"info":"",content:e.content,element:null!==(r=e.tabs)&&void 0!==r&&r.length?null:e,dynamicTabs:null!==(n=e.dynamicTabs)&&void 0!==n?n:null,tabs:null===(i=e.tabs)||void 0===i?void 0:i.filter((e=>["subList","subTabs","subItem","custom","information","title","gallery"].includes(e.type))).map(((e,r)=>{var n,i,a;return{name:`${e.id}-${t}-${r}`,title:e.title,type:e.type,icon:e.icon,css:"information"===e.type?"info":"",content:e.content,element:null!==(n=e.tabs)&&void 0!==n&&n.length?null:e,dynamicTabs:null!==(i=e.dynamicTabs)&&void 0!==i?i:null,tabs:null===(a=e.tabs)||void 0===a?void 0:a.filter((e=>["subList","subTabs","subItem","custom","information","title","gallery"].includes(e.type))).map(((e,n)=>({name:`${e.id}-${t}-${r}-${n}`,title:e.title,type:e.type,icon:e.icon,css:"information"===e.type?"info":"",element:e,content:e.content})))}}))}}));Q&&e.unshift({name:`information-${N.data._id}`,title:`${V} Details`,icon:"info",css:"info",type:"edit"===B?"edit":"details",element:E,content:{titleValue:K,updatePrivilege:P,isEditingHandler:H,udpateView:z,formMode:T}}),X(e)}),[T,H,K,z,P,Q,B,E,V,N]),[J,X]=(0,l.useState)([]);return(0,l.useEffect)((()=>{Z()}),[Z]),(0,p.jsx)(n.hJ,{className:S?"plain":"",children:(0,p.jsxs)(n.YW,{className:`${S?"plain":""} ${null!==D&&void 0!==D?D:"medium"} popup-child`,children:[!S&&(0,p.jsxs)(n.Y9,{className:`parent ${_}`,children:[(0,p.jsx)(o.gu,{src:f.cI,alt:"logo"}),(0,p.jsxs)(n.$P,{className:"header-data",children:[(0,p.jsxs)("div",{children:[I?(0,p.jsx)(A.ph,{className:"full",children:(0,p.jsx)("img",{src:null!==N&&void 0!==N&&N.data[I]?(k?"":"https://event-manager.syd1.cdn.digitaloceanspaces.com/")+(null===N||void 0===N?void 0:N.data[I]):f.hz,onError:e=>{e.target.src=f.hz},alt:"Profile"})}):(0,p.jsx)(a.A0,{icon:null!==G&&void 0!==G?G:F.icon}),(0,p.jsx)(h.z,{title:(0,i._W)(R,K),line:!1,description:(0,i._W)(C,q)})]}),(0,p.jsx)(d.K0,{icon:"back",theme:M,ClickEvent:U})]})]}),(0,p.jsx)(c.Yq,{theme:M,className:"popup-data",children:J.length>0&&(0,p.jsx)(s.A,{parentReference:W,setLoaderBox:j,setMessage:L,parents:Y,editData:E,openData:N,popupMenu:_,tabs:J})})]})})}},46193:(e,t,r)=>{"use strict";r.d(t,{$F:()=>d,Jn:()=>a,Td:()=>s,gu:()=>o,hE:()=>c,j:()=>f,p3:()=>A,pR:()=>l,sO:()=>u});var n=r(94574),i=r(8276);const a=n.Ay.button`
  background: transparent;
  padding: 0 0.5em;
  font-size: initial;
  margin-right: 0.5em;
  outline: none;
  border: 0px solid #ddd;
  cursor: pointer;
  height: 30px;
  width: 30px;
  margin-right: 0px;
  padding: 6px;
  background: ${e=>e.theme.secBackground};
  border-radius: 50%;
  margin-top: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    color: ${e=>e.theme.bgPrimary};
  }
`,o=n.Ay.img`
  margin-bottom: 0px;
  height: 80px;
  width: 80px;
  padding: 20px;
  object-fit: contain;
  object-position: center center;
  -webkit-box-align: center;
  align-items: center;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  border-right: 1px solid rgb(226, 228, 233);
  @media screen and (max-width: 768px) {
    padding-left: 0;
    padding-top: 0;
    margin-bottom: 0;
  }
`,s=n.Ay.div`
  text-align: left;
  margin: 0px;
  padding: 5px 0;
  position: relative;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${i.D.stroke.soft};
  gap: 10px;
  &.no,
  &.name {
    border: 1px solid gray;
  }
  &.has {
    border: 2px solid black;
    cursor: pointer;
  }
  &.no,
  &.has {
    text-align: center;
  }
  &.no svg {
    fill: grey;
  }
  &.name {
    text-overflow: "no-wrap";
  }
  &.actions {
    display: flex;
    justify-content: right;
    overflow-wrap: normal;
    margin-left: auto;
    margin-right: 5px;
    padding: 0;
  }
  &.textarea,
  &.htmleditor {
    flex-direction: column;
    justify-content: left;
    text-align: left;
    span {
      text-align: left;
    }
    p {
      text-align: left;
    }
  }
  &.right {
    text-align: right;
  }
  &:last-child {
    border-bottom: 0 !important;
  }
  &.span {
    grid-column: 1 / span 2;
    padding: 0px 0px;
    border-bottom: 0;
  }
  &.single {
    margin: 15px 20px 5px;
    padding: 10px 0;
    border-bottom: 1px solid lightgrey;
  }
  &.plain {
    padding: 2px 0px;
    margin: 0;
  }
  .double & {
    &:nth-child(odd) {
      /* border-right: 1px solid #ccc; */
    }
    &:last-child {
      border-bottom: 0 !important;
    }

    &:last-child,
    &:nth-last-child(2):nth-child(odd) {
      /* Apply styles to second-to-last child in last row (odd index) */
      border-bottom: 0 !important;
      /* Add any additional styles here */
    }
    &:first-child,
    &:nth-child(2) {
      /* border-top: 1px solid #d9d9d9; */
    }
  }
  @media (max-width: 768px) {
    margin: 5px 1px 5px 0px;
    &:nth-child(odd) {
      border-right: 0px solid #ccc !important;
    }
    &:last-child:nth-child(odd) {
      border-bottom: 0px solid #d9d9d9 !important;
    }
  }
`,l=n.Ay.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  &.double {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5px 20px;
  }
  @media (max-width: 768px) {
    &.double {
      display: flex;
    }
  }
`,c=n.Ay.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.006em;
  text-align: left;
  display: flex;
  gap: 5px;
  align-items: center;
  color: ${i.D.text.sub};
`,A=n.Ay.span`
  font-weight: bold;
  width: "100%";
  display: flex;
  align-items: "center";
  padding: 5px 15px 5px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  span > svg {
    margin-right: 10px;
  }
  /* margin: 10px 20px 5px; */
  margin: 0px 0px 5px 0px;
  padding: 0px 0px 10px;
  border-bottom: 1px solid lightgrey;
  @media (max-width: 768px) {
    margin: 0px 0px 5px 0px;
  }
`,u=(n.Ay.span`
  margin: 10px 5px;
  display: flex;
  align-items: center;
  color: ${e=>e.theme.theme};
  font-size: 18px;
`,n.Ay.span`
  font-size: 14px;
  font-weight: 500;
  line-height: 16.94px;
  letter-spacing: -0.006em;
  text-align: right;
  img {
    width: auto;
    max-height: 90%;
  }
`),d=n.Ay.div`
  margin: 0px;
  &.horizontal {
    margin: 0 0px;
  }
`,f=n.Ay.div`
  border-radius: 12px;
  background-color: white;
  margin: 1.65em 1.5em 0px;
  /* box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px 2px; */
  @media (max-width: 768px) {
    margin: 15px 15px 30px;
  }
  && {
    .vertical-menu & {
      margin: 0 0px 0px 0;
      max-height: calc(100vh - 115px);
      /* overflow: auto; */

      @media (max-width: 768px) {
        padding: 5px 15px 0px;
        margin-top: 5px;
      }
    }
  }
  .head {
    width: 100%;
    background-color: rgb(75, 75, 75);
    color: white;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
  }
  &.page {
    justify-content: left;
    display: flex;
    flex-flow: wrap;
    gap: 5px;
    padding: 10px;
    background-color: transparent;
  }
`},83150:(e,t,r)=>{"use strict";r.d(t,{$n:()=>f,AT:()=>y,Cu:()=>v,E9:()=>x,En:()=>E,HW:()=>U,Kc:()=>B,L5:()=>I,M3:()=>p,Q1:()=>T,Qg:()=>D,Ql:()=>F,S6:()=>g,TK:()=>k,Td:()=>l,Tr:()=>s,WU:()=>C,XI:()=>a,XR:()=>h,YQ:()=>w,_q:()=>Q,aZ:()=>O,dJ:()=>m,eK:()=>M,ey:()=>N,hE:()=>A,lz:()=>b,nS:()=>S,nh:()=>L,nk:()=>j,p3:()=>u,pR:()=>c,ph:()=>o,qR:()=>_,sO:()=>d});var n=r(94574),i=r(8276);const a=n.Ay.div`
  border-collapse: collapse;
  display: flex;
  flex-direction: column;
  row-gap: 0px;
  margin-top: 0;
  border-top: 0px solid #d9d9d9;
  width: 100%;
  width: -webkit-fill-available;
  padding: 0;
  gap: 24px;
  &.record {
    border-top: 0px solid #d9d9d9;
    padding: 0px 0px;
  }
  &.files {
    padding: 10px 4px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 20px;
  }
  &.gallery {
    margin-top: 16px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(152px, 1fr));
    gap: 20px;
  }
  &.norecord {
    padding: 5px 0px;
  }
  &.double {
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-bottom: 0px solid #d9d9d9;
    column-gap: 20px;
    row-gap: 20px;
  }
  &.triple {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    border-bottom: 0px solid #d9d9d9;
    column-gap: 20px;
    row-gap: 20px;
    > div {
      display: flex;
      flex-direction: column;
      gap: 10px;
      position: relative;
      > div {
        background-color: transparent;
        max-width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        > img {
          max-width: 60%;
          object-fit: contain;
          object-position: left;
          width: min-content;
          border-radius: 12px;
        }
        > div:nth-child(1) {
          width: 100%;
          display: flex;
          flex-direction: column-reverse;
          > div:nth-child(2) {
            position: absolute;
            top: 10px;
            right: 10px;
            height: max-content;
            display: flex;
            flex: revert;
          }
        }
        > div:nth-child(2) {
          display: flex;
          flex-direction: column;
          gap: 10px;
          > div {
            display: flex;
            flex-direction: column;
            gap: 5px;
            > span::after {
              display: none;
            }
          }
        }
      }
    }
  }
  &.no-data {
    grid-template-columns: auto;
  }
  @media (max-width: 768px) {
    &.double {
      grid-template-columns: auto;
    }
    &.triple {
      grid-template-columns: auto;
    }
  }
  &.auto {
    width: auto;
  }
`,o=n.Ay.div`
  min-width: 50px;
  max-width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 12px;
  background: #ececec;
  font-size: 10px;
  margin-right: 10px;
  transition: all 0.1s ease-in 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  &.full {
    max-width: 48px;
    max-height: 48px;
    background-color: transparent;
    img {
      object-fit: contain;
      object-position: left;
    }
  }
  :hover {
    /* height: 62px; */
  }
`,s=(n.Ay.th`
  text-align: left;
  padding: 15px 8px 10px;
  background-color: #ddedeb;
  white-space: nowrap;
  color: #444;
  font-weight: bolder;
  border-radius: 0px;
  :first-child {
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
  }
  :last-child {
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
  }
  &.actions > div {
    gap: 10px;
    display: flex;
    justify-content: right;
    gap: 10px;
    padding-right: 20px;
  }
`,n.Ay.div`
  box-sizing: border-box;

  /* Auto layout */
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  padding: 16px;
  gap: 8px;
  background: #ffffff;
  border: 1px solid #e2e4e9;
  /* regular-shadow/x-small */
  box-shadow: 0px 1px 2px rgba(228, 229, 231, 0.24);
  border-radius: 12px;

  cursor: pointer;
  && {
    /* .popup-child & {
      box-shadow: rgb(167 167 167 / 26%) 0px 0px 12px 0px;
    } */
  }
  && {
    .show-filter & {
      /* margin: 0em 2em 0 10px; */
    }
  }
  &:hover h4 {
    color: ${e=>e.theme.themeForegound};
  }
  /* padding: 5px 26px; */
  padding-bottom: 12px;
  &:first-child {
    /* border-top: 1px solid ${e=>e.theme.border};
    border-top-right-radius: 0px;
    border-top-left-radius: 0px; */
  }
  &:last-child {
    /* border-bottom: 1px solid ${e=>e.theme.border};
    border-bottom-right-radius: 12px;
    border-bottom-left-radius: 12px; */
  }
  .double.table & {
    border-radius: 0px;
    &:first-child {
      border-top-left-radius: 12px;
      border-bottom-left-radius: 12px;
    }
    &:nth-child(2) {
      border-top-right-radius: 12px;
      border-bottom-right-radius: 12px;
    }
    &:nth-child(odd) {
      border-right: 0px solid ${e=>e.theme.border};
      margin-right: 0;
    }
    &:nth-child(even) {
      margin-left: 0;
    }
    &:last-child {
      border-bottom: 0;
    }

    &:nth-last-child(2):nth-child(odd) {
      /* Apply styles to second-to-last child in last row (odd index) */
      border-bottom: 0;
      border-bottom-left-radius: 12px;

      /* Add any additional styles here */
    }
    &:nth-last-child(1):nth-child(even) {
      border-bottom-right-radius: 12px;
    }
    &:nth-last-child(2):nth-child(even) {
      border-bottom-right-radius: 12px;
    }
    &:nth-last-child(1):nth-child(odd) {
      border-bottom-left-radius: 12px;
    }
    &:last-child {
      border-bottom-right-radius: 12px;
    }
  }
  /* &:hover {
    transform: scale(1.005);
    transition: all 0.4s;
    border-radius:12px !important;
    z-index: 1000;
  } */
  &.bulk {
    flex-flow: wrap;
    gap: 10px;
  }
  @media screen and (max-width: 768px) {
    padding: 1em 1em 0.5em;
    margin: 0em 0em 0px;

    .double.table & {
      border-radius: 0;
      &:nth-last-child(2):nth-child(odd) {
        /* Apply styles to second-to-last child in last row (odd index) */
        border-bottom: 1px solid ${e=>e.theme.border};
        border-bottom-left-radius: 0px;

        /* Add any additional styles here */
      }
      &:nth-child(2) {
        border-top-right-radius: 0px;
      }
      &:nth-last-child(1):nth-child(even) {
        border-bottom-right-radius: 0px;
      }
      &:nth-last-child(2):nth-child(even) {
        border-bottom-right-radius: 0px;
      }
      &:nth-last-child(1):nth-child(odd) {
        border-bottom-left-radius: 0px;
      }
      &:nth-child(odd) {
        border-right: 0px solid ${e=>e.theme.border};
        margin: 0em 1em 0px !important;
      }
      &:nth-child(even) {
        margin: 0em 1em 0px !important;
      }
      &:first-child {
        border-top: 0px solid ${e=>e.theme.border};
        border-top-right-radius: 12px;
        border-top-left-radius: 12px;
      }
      &:last-child {
        border-bottom: 0px solid ${e=>e.theme.border};
        border-bottom-right-radius: 12px;
        border-bottom-left-radius: 12px;
      }
    }
  }
  /* box-shadow: rgb(167 167 167 / 26%) 0px 0px 12px 0px; */
  &:hover {
    /* background-color: #ddedeb; */
    box-shadow: 0px 4px 12px 0px rgba(${e=>e.theme.theme}, 1);

    /* border: 1px solid ${e=>e.theme.border}; */
  }
  &.single {
    padding: 0;
    margin: 0;
    margin: 0px 2px 30px;
    box-shadow: none; //rgba(0, 0, 0, 0.1) 0px 0px 8px 2px !important;
    margin-bottom: 20px;
    border: 0;
    @media (max-width: 768px) {
      margin: 5px 10px 9px 20px !important;
    }
    && {
      .popup-data & {
        margin: 0;
        margin-bottom: 20px;
      }
    }
  }
  &.single:hover {
    /* background-color: initial; */
    box-shadow: none;
    h4 {
      color: initial;
    }
  }
`),l=n.Ay.div`
  text-align: left;
  padding: 5px 5px 0;
  position: relative;
  font-size: 14px;
  &.disabled {
    display: none;
  }
  &.custom {
    padding: 0px 5px 5px;
  }
  &.no,
  &.name {
    border: 1px solid gray;
  }
  &.has {
    border: 2px solid black;
    cursor: pointer;
  }
  &.no,
  &.has {
    text-align: center;
  }
  &.no svg {
    fill: grey;
  }
  &.name {
    text-overflow: "no-wrap";
  }
  &.actions {
    margin-left: auto;
    display: flex;
    gap: 5px;
    align-items: center;
  }
  &.actions > div {
    display: flex;
    justify-content: right;
    overflow-wrap: normal;
    margin-left: auto;
    margin-right: 5px;
    padding: 0;
    display: flex;
    justify-content: right;
    overflow-wrap: normal;
    margin-left: auto;
    margin-right: 0px;
    padding: 0px 0px 0px 5px;
    position: sticky;
    right: 0;
    bottom: 0;
    gap: 10px;
    background: #ffffffe0;
    align-items: center;
  }
  &.right {
    text-align: right;
  }
  :last-child span:last-child::after {
    display: none;
  }
  &.bulk {
    min-width: 24%;
    max-width: 24%;
  }
`,c=n.Ay.div`
  display: flex;
  flex-flow: wrap;
  gap: 10px;
  &.small {
    font-size: 13px;
  }
  &.single {
    margin: 0px 0px 5px;
    padding: 10px 0;
    border-bottom: 1px solid lightgrey;
  }
  &.actions {
    display: flex;
    justify-content: right;
    margin: 5px;
  }
  @media (max-width: 768px) {
    &.nowrap {
      flex-flow: initial;
      margin-bottom: 5px;
    }
    &.actions {
      display: flex;
      justify-content: left;
      margin-top: 5px;
    }
  }
`,A=n.Ay.span`
  margin-right: 5px;
  margin-bottom: 5px;
  color: #838894;
  font-size: 13px;
  &:after {
    content: " :";
  }
`,u=n.Ay.h4`
  font-weight: bold;
  width: "100%";
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;

  &.single span,
  &.single {
    font-size: 16px;
    color: ${e=>e.theme.theme};
    svg {
      color: ${e=>e.theme.theme};
    }
  }
  span {
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: -0.015em;
    text-align: left;
  }
  cursor: pointer;
  svg {
    margin-right: 10px;
  }
`,d=n.Ay.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  &.highlight {
    padding: 4px 12px 4px 12px;
    gap: 0px;
    border-radius: 999px;
    border: 1px;
    background: #cbf5e5;
  }
  span {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.006em;
    text-align: left;
  }
  p {
    text-align: center;
    white-space: pre-line;
    display: contents;
  }
  /* &:after {
    content: " |";
    margin-left: 5px;
    color: #bcbcbc;
  } */
  svg {
    margin-right: 5px;
  }
`,f=n.Ay.button`
  color: ${e=>e.theme.pageForeground};
  border: none;
  padding: 6px 12px;
  margin-right: 8px;
  cursor: pointer;
  font-size: 14px;
  white-space: nowrap;
  &.add {
    background-color: #4caf50;
  }
  &.menu {
    padding: 10px;
    margin-right: 0;
    text-align: left;
  }
  &.menu:last-child {
    margin-bottom: 0px;
  }
  &.edit {
    background-color: ${e=>e.theme.pageBackground};
  }
  &.delete {
    background-color: red;
    color: white;
  }
  &:hover {
    transform: scale(1.01);
    transition: 0.2s ease-in-out;
  }
  svg {
    fill: white;
    margin-right: 5px;
    height: 0.9em;
  }
  &.button {
    background: #ffffff;
    border: 1px solid #e2e4e9;
    /* button-shadow/stroke/important */
    box-shadow: 0px 1px 2px rgba(82, 88, 102, 0.06);
    border-radius: 8px;
  }
  @media (max-width: 768px) {
    svg {
      margin-left: 0px;
    }
  }
`,h=(n.Ay.div`
  padding: 1em 0em;
  @media screen and (max-width: 768px) {
    padding: 1em 1em 0.5em;
  }
  text-align: right;
  justify-content: flex-end;
  display: flex;
  text-wrap: nowrap;
  align-items: center;
  position: sticky;
  bottom: 0;
  background: white;
  z-index: 1001;
`,n.Ay.button`
  border: 0;
  border: 1px solid #e2e4e9;
  outline: none;
  cursor: pointer;
  font-weight: bold;
  text-wrap: nowrap;
  position: relative;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  transition: all 1s ease 0s;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
  padding: 0 15px;
  min-height: 40px;
  height: 40px;
  width: 50px;
  border-radius: 10px;
  margin: 4px 0px;
  background-color: ${e=>e.theme.pageBackground};
  &:hover {
    color: ${e=>e.theme.bgPrimary};
  }
`,n.Ay.button`
  border: 0;
  outline: none;
  cursor: pointer;
  font-weight: bold;
  text-wrap: nowrap;
  position: relative;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  &.button {
    border-left: 1px solid lightgray;
    border-radius: 0;
    padding: 0px 10px;
    background-color: #ffffff00;
  }
  &.button:last-child {
    margin-left: 10px;
  }
  svg {
    margin-left: 5px;
  }
  &:hover {
    color: ${e=>e.theme.bgPrimary};
  }
`,n.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0em;
  z-index: 100;
  /* height: 50px; */
  position: sticky;
  top: 0;
  background-color: white;
  svg {
    background-color: transparent;
  }
  && {
    .subList & {
      top: -25px;
    }
    .table & {
      top: -25px;
    }
    .files & {
      top: -25px;
    }
    .gallery & {
      top: -25px;
    }
  }
  @media (max-width: 768px) {
    padding: 0;
    /* margin-top: 60px; */
    && {
      .popup-data & {
        margin-top: 10px;
      }
    }
  }
`),p=n.Ay.button`
  padding: 12px;
  border-radius: 8px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  background: ${i.D.primary.base};
  color: ${i.D.text.white};
  outline: 0px;
  border: 0px solid rgb(221, 221, 221);
  margin: 0px;
  cursor: pointer;
  padding: 12px;
  margin-right: 0em;
  outline: none;
  /* box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px 2px; */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 5px;
  span {
    max-width: 200px;
    text-overflow: ellipsis;
    overflow: hidden;
    height: 16px;
    white-space: nowrap;
  }
  &.skip {
    border: 0px solid #8b8989;
    padding: 5px 20px;
    height: 35px;
    justify-content: center;
    align-items: center;
    display: flex;
    background-color: ${e=>e.theme.pageBackground};
  }
  &.small {
    padding: 10px;
    gap: 8px;
    border-radius: 8px;
    display: flex;
  }
  &.skip svg {
    margin: 0px;
  }
  &.add {
  }
  && {
    /* .popup-child & {
      color: ${e=>e.theme.secForeground};
      background: ${e=>e.theme.secBackground};
    } */
  }
  &:hover {
    color: ${e=>e.theme.themeForeground};
    background-color: ${e=>e.theme.theme};
  }
  & > svg {
    /* margin-right: 10px; */
  }
  @media (max-width: 768px) {
    margin-right: 0px;
    justify-content: center;
    align-items: center;
    span {
      display: none;
    }
    & > svg {
      margin-right: 0px;
    }
  }
`,g=n.Ay.div`
  flex-direction: row;
  display: flex;
  gap: 10px;
  &.menu {
    width: 100%;
    margin-bottom: 5px;
    position: sticky;
    top: 0;
    padding-bottom: 5px;
    background: white;
    flex-wrap: wrap;
    column-gap: 5px;
    margin: -10px;
    padding: 3px 10px 0px;
    padding-bottom: 0;
    margin-bottom: 15px;
  }
  &.gap {
    gap: 10px;
  }
  .filter {
    margin-right: 0;
  }
`,m=n.Ay.button`
  background: transparent;
  font-size: initial;
  outline: none;
  border: 1px solid #e2e4e9;
  cursor: pointer;
  width: 32px;
  height: 32px;
  padding: 6px;
  gap: 6px;
  border-radius: 8px;
  background: ${e=>e.theme.background};
  color: ${e=>e.theme.foreground};
  cursor: pointer;
  transition: 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 15px;
    height: 15px;
  }
  &.single {
    padding: 0 0.5em;
    margin-top: 0;
    height: auto;
  }
  &.custom {
    margin: 0;
  }
  &.error {
    color: ${i.D.state.error};
    border-color: transparent;
  }
  :hover {
    color: black;
  }
  &.desc svg {
    color: red;
  }
  &.asc svg {
    color: green;
  }
  &.left {
    margin: 0;
    margin-right: auto;
  }
  &.right {
    margin: 0;
    margin-left: auto;
  }
  &.center {
    margin: 0;
    margin-left: auto;
    margin-right: auto;
  }
  &.small {
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border-radius: 4px;
    svg {
      font-size: 15px;
    }
  }
  &.plain {
    width: 18px;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border-radius: 4px;
    border: none;
    background: transparent;
    pointer-events: all;
    svg {
      font-size: 15px;
    }
  }
  &.inner-long {
    width: auto;
    text-wrap: nowrap;
    margin-left: 0;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    gap: 10px;
    height: auto;
    margin: 0;
    width: auto;
    padding: 7px 15px;
    font-size: 12px;
    margin-right: 0;
    margin-left: auto;
  }
  &:hover {
    color: ${e=>e.theme.theme};
    svg {
      transition: 0.2s ease-in-out;
      transform: scale(1.1);
    }
  }
  &.active {
    color: ${e=>e.theme.theme};
    svg {
      transition: 0.2s ease-in-out;
      transform: scale(1.1);
    }
  }
  &.error:hover {
    color: ${i.D.state.error};
    border-color: transparent;
  }
  &.open {
    color: green;
  }
  &.imageedit {
    background-color: transparent;
    width: 21px;
    height: 21px;
    background: var(--state-information, #375dfb);
    color: white;
    border-radius: 50%;
    border: 3px solid;
    top: -10px;
    right: -10px;
    svg {
      font-size: 12px;
      z-index: 10;
      top: 0;
      margin-top: 3px;
      position: inherit;
      width: 9px;
      height: 9px;
    }
  }
  &.normal {
    height: 40px;
    width: 40px;
  }
  && {
    /* .popup-child & {
      color: ${e=>e.theme.secForeground};
      background: ${e=>e.theme.secBackground};
    } */
  }
`,v=n.Ay.div`
  /* display: flex;
  margin: 0;
  flex-flow: wrap;
  justify-content: center;
  align-items: baseline;
  gap: 10px; */
  display: none;
  /* margin-left: auto; */
  &.center {
    margin-left: auto;
  }

  &.show-filter {
    display: flex;
    border-right: 0px solid lightgrey;
    padding: 0px 10px 0px 0px;
    border-radius: 0px;
    max-width: 100%;
    width: auto;
    top: 0px;
    gap: 10px;
    align-self: baseline;
    /* position: sticky; */
    top: 65px;
  }

  @media (max-width: 768px) {
    flex-flow: wrap;
    max-width: 100%;
    margin-bottom: 10px;
    && {
      .show-filter & {
        position: absolute;
        background-color: lightgray;
        z-index: 1001;
        width: 200px;
        margin: 0px 1em;
        padding: 10px;
        border-radius: 10px;
        top: auto;
      }
    }
  }
`,y=n.Ay.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 30px;
  margin-right: 10px;
`,b=n.Ay.input`
  opacity: 0;
  width: 0;
  height: 0;
  span {
    box-shadow: 0 0 1px #2196f3;
  }
`,w=n.Ay.div`
  margin: 10px;
  width: -webkit-fill-available;
  /* border: 1px solid #ddedeb; */
  justify-content: center;
  display: flex;
  align-items: center;
  height: 100px;
  flex-direction: column;
  border: 1px solid #e2e4e9;
  &.small {
    height: auto;
  }
  &.noborder {
    border: 0;
    height: auto;
  }
  &.noshadow {
    box-shadow: none;
  }
  &.margin {
    margin: 30px 30px 0;
    border-radius: 10px;
  }
  &.white-list {
    margin: 0em 2px 0px;
    border-radius: 10px;
  }
  &.card {
    height: auto;
    border: 1px solid rgb(226, 228, 233);
    border-radius: 12px;
    margin: 0;
    text-align: left;
    justify-content: left;
    padding: 10px;
    font-size: 12px;
    display: flex;
    flex-direction: row;
  }
  @media screen and (max-width: 768px) {
    &.white-list {
      margin: 0em 1em 0px;
      border-radius: 10px;
    }
  }
  &.white {
    border-radius: 10px;
    padding: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: inherit;
    gap: 10px;
    margin: 5px 0;
  }
  svg {
    margin: auto;
    font-size: 30px;
  }
  button {
    padding: 10px;
    font-size: 12px;
  }
  button svg {
    font-size: 15px;
  }
`,x=n.Ay.img`
  height: 50px;
  object-fit: cover;
  width: 100px;
  &.contain {
    object-fit: contain;
  }
`,C=n.Ay.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #e7f2f9;
  transition: 0.4s;
  box-shadow: 0 0 1px #2196f3;
  border-radius: 34px;
  &:before {
    position: absolute;
    content: "";
    height: 24px;
    width: 24px;
    left: 4px;
    bottom: 3px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
    background-color: red;
  }

  ${b}:checked + &::before {
    transform: translateX(18px);
    background-color: green;
  }
`,B=n.Ay.div`
  display: flex;
  height: 30px;
  /* width: 30px; */
  border-radius: 0px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  right: 0;
  margin-top: 0px;
  margin-bottom: 0px;
  gap: 5px;
  padding: 0 5px;
  &.callBack {
    margin-right: 0px;
    width: auto;
    border-radius: 10px;
    padding: 5px 10px;
    /* border: 1px solid rgb(221, 221, 221); */
    border: 1px solid #e2e4e9;
    font-size: 12px;
    height: max-content;
    line-height: 14px;
    svg {
      /* margin-right: 5px; */
      width: 15px;
    }
  }
  @media screen and (max-width: 768px) {
    /* span {
      display: none;
    } */
  }
  &.active,
  &:hover {
    /* color: white;
    background-color: ${e=>e.theme.theme}; */
    border-bottom: 1px solid;
  }
`,E=n.Ay.div`
  display: flex;
  margin-left: auto;
  flex-direction: column;
  border-radius: 10px;
  div {
    margin: 0px 0px 5px 0;
    margin-right: 10px;
    text-decoration: none;
    cursor: pointer;
    opacity: 0.5;
  }

  div:last-child {
    margin-right: 0px;
  }
  div.active {
    margin-right: 10px;
    text-decoration: none;
    cursor: pointer;
    opacity: 1;
  }
  @media screen and (max-width: 768px) {
    div {
      color: black;
    }
    div.active {
      color: #198ad6;
    }
  }
`,k=n.Ay.div`
  display: flex;
`,I=n.Ay.span`
  padding-top: 5px;
  &.display {
    padding-top: 0px;
    border: 1px solid;
    display: flex;
    height: 15px;
    width: 15px;
    font-size: 12px;
    justify-content: center;
    align-items: center;
  }
`,S=n.Ay.div`
  margin: 3px 3px 3px;
  padding: 0em 0em 0em;
  background-color: white;
  border-radius: 10px;
  width: -webkit-fill-available;
  background: white;
  && {
    .show-filter & {
      margin: 0em 2em 0 10px;
    }
  }
  @media screen and (max-width: 768px) {
    margin: 0em 1em 0px;
    height: calc(100vh - 180px);
  }
`,D=n.Ay.table`
  border-collapse: collapse;
  width: 100%;
  margin: 0 auto;
  margin-bottom: auto;
  thead > tr {
    /* background-color: white; */
    border: 0px;
    background-color: ${i.D.bg.weak};
    z-index: 100;
    gap: 0px;
    border-radius: 8px;
    opacity: 0px;
  }
  th {
    background-color: ${i.D.bg.weak};
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.006em;
    text-align: left;
    padding: 8px 12px 8px 12px;
    border: 0px 1px 0px 0px;
  }
  &.small th {
    padding: 4px 10px;
    line-height: 14px;
  }
  tr:hover {
    color: ${e=>e.theme.theme};
    /* border: 0; */
  }
  &.auto {
    width: auto;
  }
  &&.plain {
    tr {
      border: 1px solid;
    }
  }
`,Q=n.Ay.th`
  text-align: left;
  padding: 20px 8px 15px;
  top: 0;
  z-index: 30;
  background: white;
  font-weight: bolder;
  border-radius: 0px;
  color: #626262;
  :first-child {
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
  }
  :last-child {
    border-top-right-radius: 12px;
    border-right: 0px solid rgb(238 238 238);
  }
  div {
    display: flex;
    gap: 10px;
  }
  && {
    .plain & {
      background-color: transparent;
    }
  }
  &.true {
    position: sticky;
    left: 0px;
    z-index: 10;
  }
  &.bulk {
    max-width: 200px;
  }
  &.actions {
    display: flex;
    justify-content: right;
    padding-right: 20px;
  }
`,_=n.Ay.tr`
  border-bottom: 1px solid rgb(241 241 241);
  cursor: pointer;
  /* &:hover {
    background-color: #eaeaea;
    border-radius: 12px;
  } */

  &:last-child td:first-child {
    border-bottom-left-radius: 12px;
  }
  &:last-child td:last-child {
    border-bottom-right-radius: 12px;
  }
  &:last-child {
    border-bottom: 0;
  }
  &.bulk {
    max-width: 150px;
  }
`,T=(n.Ay.td`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10001;
  background: white;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 10px;
`,n.Ay.td`
  padding: 12px 10px 12px 10px;
  gap: 10px;
  opacity: 0px;
  font-size: 14px;
  font-weight: normal;
  letter-spacing: -0.006em;
  text-align: left;
  color: ${i.D.text.main};
  position: relative;
  &.true {
    position: sticky;
    left: 0px;
    background: white;
    z-index: 1;
  }
  &.no,
  &.name {
    border: 1px solid gray;
  }
  &.has {
    border: 2px solid black;
    cursor: pointer;
  }
  &.no,
  &.has {
    text-align: center;
  }
  &.no svg {
    fill: grey;
  }
  &.name {
    text-overflow: "no-wrap";
  }
  &.actions {
    justify-content: right;
    overflow-wrap: normal;
    position: sticky;
    right: 0px;
    background: white;
    border-left: 1px solid;
    box-shadow: 0px 2px 2px 0px #1b1c1d1f;
    padding: 0;
  }
  &.actions > div {
    display: flex;
    justify-content: right;
    overflow-wrap: normal;
    position: sticky;
    right: 0px;
    background: white;
    gap: 10px;
    .buttons {
      display: flex;
      flex-direction: column;
      gap: 5px;
      align-self: center;
      margin: 5px;
    }
  }
  &.right {
    text-align: right;
  }
  &.bulk {
    padding: 4px 10px;
    line-height: 14px;
  }
  > span {
    margin-right: 10px;
  }
`),F=n.Ay.div`
  display: flex;
  margin-top: 4px;
`,O=n.Ay.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 0px 0;
  align-items: center;
  img {
    max-width: 40px;
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 4px;
    border-radius: 50%;
  }

  div {
    flex: 1;
    gap: 4px;
    display: flex;
    flex-direction: column;
    div:first-child {
      font-weight: 500;
      margin-bottom: 0px;
    }

    div:last-child {
      font-size: 0.9em;
      color: ${i.D.text.sub};
    }
  }

  @media (max-width: 768px) {
    img {
      max-width: 80px;
    }
  }
`,M=(n.Ay.tbody``,n.Ay.div`
  display: flex;
  max-width: 100%;
  overflow: auto;
  &.initial {
    overflow: initial;
  }
  /* display: flex;
  max-height: calc(100vh);
  min-height: calc(100vh - 330px); */
  /* && {
    .popup-child & {
      &.horizontal.medium {
        max-height: calc(45vh);
        min-height: calc(45vh);
      }
    }
  } */
  @media screen and (max-width: 768px) {
    min-height: auto;
  }
  /* overflow: auto; */
`),N=n.Ay.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 100%;
`,j=n.Ay.button`
  padding: 10px 5px;
  background-color: white;
  font-weight: bold;
  border: none;
  font-size: 14px;
  margin-bottom: 0px;
  cursor: pointer;
  border-radius: 10px;
  min-width: 40px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px 2px;
  &.true {
    background-color: ${e=>e.theme.theme};
    color: ${e=>e.theme.themeForeground};
    font-weight: normal;
  }
`,L=n.Ay.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 8px;
`,U=(n.Ay.div`
  padding: 1em;
  margin: 0em 2em 0px;
  width: calc(100% - 2em);
  background-color: white;
  border-radius: 10px;
  padding-bottom: 0em;
`,n.Ay.div`
  display: flex;
  flex: 1 1 100%;
  max-width: 100%;
  width: calc(100% - 0em);
  padding-bottom: 1em;
  flex-direction: column;
  min-height: calc(100vh - 14em);
  max-height: calc(100vh - 14em);
  .sub-page & {
    position: inherit;
    height: auto;
    flex-direction: column;
    min-height: 250px;
    max-height: calc(100vh - 12em);
  }
  .popup-child & {
    position: inherit;
    height: auto;
    flex-direction: column;
    min-height: 250px;
    max-height: calc(100vh - 20em);
  }
  .profile & {
    position: inherit;
    height: auto;
    flex-direction: column;
    min-height: 250px;
    max-height: calc(100vh - 20em);
  }
  && {
    .tab & {
      min-height: calc(100vh - 20em);
      max-height: calc(100vh - 20em);
    }
  }
  @media screen and (max-width: 768px) {
    min-height: calc(100% - 12em);
    max-height: calc(100% - 12em);
    min-height: inherit;
    position: fixed;
    top: 120px;
    left: 20px;
    right: 20px;
    width: auto;
    overflow: auto;
    && {
      .tab & {
        position: absolute;
        margin-top: 20px;
        height: calc(100% - 190px);
      }
      .sub-page & {
        position: inherit;
        height: auto;
        flex-direction: column;
        min-height: auto;
        max-height: calc(100vh - 12em);
        left: 0;
        top: 0;
        margin-top: 50px;
      }
    }
  }
`,n.Ay.input`
  background: ${i.D.bg.soft};
  padding: 4px 5px;
  border-radius: 10px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  outline: 0px;
  border: 0px;
  margin: 0px;
  cursor: pointer;
  padding: 10px;
  outline: none;
  border: 0px solid #ddd;
  cursor: pointer;
  outline: none;
  border: 0px solid #ddd;
  cursor: pointer;
  &.red {
    background-color: red;
    color: white;
  }
  &.green {
    background-color: green;
    color: white;
  }
  &:hover {
    color: ${e=>e.theme.bgPrimary};
    transform: scale(1.03);
  }
  & > svg {
    margin-right: 10px;
  }
  &.more > svg {
    margin-right: 0px;
  }
  &.more {
    position: relative;
  }
  &.more:hover div {
    display: flex !important;
    position: absolute;
    right: 0;
    top: 0px;
    z-index: 2005;
    white-space: nowrap;
    background-color: #f3f8fb;
    border-radius: 10px;
  }
  @media (max-width: 768px) {
    justify-content: center;
    white-space: nowrap;
    span {
      display: none;
    }
    svg {
      margin-right: 5px;
    }
  }
`)},99837:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var n=r(94574),i=r(70579);const a=e=>{var t;return(0,i.jsx)(l,{className:null!==(t=e.list)&&void 0!==t?t:"false",children:(0,i.jsxs)(c,{children:[(0,i.jsx)(A,{}),e.message&&(0,i.jsx)(o,{children:e.message})]})})},o=n.Ay.div`
  margin-top: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: #08225f;
`,s=n.i7`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,l=n.Ay.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 25px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(255 255 255 / 78%);
  backdrop-filter: blur(1px);
  overflow: auto;
  z-index: 1001;
  &.true {
    background-color: red;
  }
  &.absolute {
    position: absolute;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
    top: 0;
    bottom: 0;
    border-top: 1px solid rgb(224, 224, 227);
  }
`,c=n.Ay.div`
  display: flex;
  flex-direction: column;
  display: flex;
  border-radius: 10px;
  height: 100vh;
  animation-duration: 0.2s;
  margin: auto;
  padding: 1em;
  margin-top: 200px;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    position: relative;
    top: 0;
    padding: 0;
    justify-content: center;
    align-items: center;
  }
`,A=n.Ay.div`
  text-align: center;
  width: 30px;
  height: 30px;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #08225f;
  border-radius: 50%;
  animation: ${s} 1.5s linear infinite;
`},10793:(e,t,r)=>{"use strict";r.d(t,{A:()=>c});var n=r(41137),i=r(64980),a=r(50835),o=r(65043),s=r(46861),l=r(70579);const c=e=>{var t,r;console.log(e);const c=async()=>{try{"function"===typeof e.message.onClose?await e.message.onClose().then((t=>{(null===t||void 0===t||t)&&e.closeMessage()})):e.closeMessage()}catch(t){console.error("Error in onClose:",t)}};(0,o.useEffect)((()=>{if(1===e.message.type){const t=setTimeout((()=>{"function"===typeof e.message.onClose&&e.message.onClose(),e.closeMessage()}),6e3);return()=>clearTimeout(t)}}),[e]);const{t:A}=(0,n.Bd)();return(0,l.jsx)(a.hJ,{className:`${e.showMessage?"":"hidden"} ${1===e.message.type?"notification":"confirmation"}`,children:(0,l.jsxs)(a.YW,{className:1===e.message.type?"notification":"confirmation",children:[(0,l.jsxs)(a.UC,{className:`${1===e.message.type?"notification":"confirmation"} ${null!==(t=e.message.icon)&&void 0!==t?t:"info"}`,children:[1===e.message.type&&(0,l.jsx)(s.A0,{icon:null!==(r=e.message.icon)&&void 0!==r?r:"info"}),(0,l.jsx)("div",{dangerouslySetInnerHTML:{__html:e.message.content}})]}),2===e.message.type?(0,l.jsxs)(a.wi,{children:[(0,l.jsx)(i.A,{type:"close",value:2===e.message.type?e.message.okay?e.message.okay:A("cancel"):e.message.okay?e.message.okay:"Okay",onChange:c}),(0,l.jsx)(i.A,{type:"submit",name:"submit",value:e.message.proceed?e.message.proceed:"Proceed",onChange:async()=>{try{var t,r,n;if("function"===typeof e.message.onProceed)await e.message.onProceed(null===(t=e.message)||void 0===t?void 0:t.data,null===(r=e.message)||void 0===r||null===(n=r.data)||void 0===n?void 0:n._id).then((t=>{(null===t||void 0===t||t)&&e.closeMessage()}));else e.closeMessage()}catch(i){console.error("Error in onProceed:",i)}}})]}):(0,l.jsx)(a.wi,{className:1===e.message.type?"notification":"confirmation",children:(0,l.jsx)(i.A,{type:"submit",name:"submit",value:e.message.okay?e.message.okay:"Okay",onChange:c})})]})})}},50835:(e,t,r)=>{"use strict";r.d(t,{UC:()=>l,YW:()=>s,hJ:()=>o,wi:()=>a});var n=r(94574);const i=n.i7`
  from {
    scale: 0;
  }
  to {
    scale: 1;
  }
`,a=n.Ay.div`
  display: flex;
  justify-content: flex-end;
  justify-content: center;
  gap: 20px;
  width:auto;
  padding: 0 20px;
  &.notification {
    display: none;
  }
  @media (max-width: 768px) {
    position: sticky;
    bottom: 0;
    z-index: 1;
    padding-bottom: 10px;
    border-top: 1px solid rgb(224, 224, 227);
  }
`,o=n.Ay.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 25px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1001;
  &.hidden {
    display: none;
  }
  &.side {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    padding: 0;
    display: flex;
    justify-content: right;
    align-items: flex-start;
    overflow: auto;
    z-index: 1001;
    background-color: #00000033;
  }
  &.filter {
    width: 300px;
    left: auto;
    right: 0;
    background-color: transparent;
    .popup-data {
      border-radius: 0px;
      padding: 10px;
    }
  }
  &.notification {
    top: auto;
    left: auto;
    bottom: 20px;
    right: 20px;
    overflow: inherit;
    padding: 0px 0;
    background: white;
    backdrop-filter: none;
    box-shadow: rgb(0 0 0 / 6%) 0px 0px 8px 7px;
    border-radius: 12px;
    max-width: 40%;
  }
  &.hide {
    display: none;
  }
  &.full-page {
    padding: 0;
    border-radius: 0;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
    top: 0;
    bottom: 0;
    border-top: 1px solid rgb(224, 224, 227);
    &.notification {
      max-width: 90%;
      bottom: 90px;
      font-size: 12px;
    }
  }
`,s=n.Ay.div`
  display: flex;
  flex-direction: column;
  display: flex;
  background-color: white;
  border-radius: 10px;
  width: 30%;
  min-width: 250px;
  max-width: 100%;
  height: auto;
  animation: ${i} 1s ease-in-out;
  animation-duration: 0.2s;
  margin: auto;
  padding: 1em;
  &.notification {
    min-width: auto;
    width: auto;
  }
  @media (max-width: 768px) {
    width: 100%;
    position: relative;
    top: 0;
    padding: 0;
    margin: 10px;
  }
`,l=n.Ay.div`
  text-align: center;
  margin-top: 10px;
  padding-bottom: 10px;
  font-size: 18px;
  margin-bottom: 10px;
  padding: 20px 22px;
  min-height: 40px;
  svg {
    margin-right: 10px;
  }
  &.success {
    color: green;
  }
  &.error {
    color: red;
  }
  &.deleted {
    color: green;
  }
  &.notification {
    min-height: auto;
    font-size: 15px;
    padding: 0;
    text-align: left;
    align-items: center;
    display: flex;
    div {
      text-align: left;
    }
  }
`},71341:(e,t,r)=>{"use strict";r.d(t,{A:()=>d});var n=r(65043),i=r(46861),a=r(9667),o=r(8075),s=r(87920),l=r(97152),c=r(46193),A=r(50835),u=r(70579);const d=n.memo((e=>{let{themeColors:t,closeModal:r,itemTitle:d,description:f="",popupData:h,customClass:p,openData:g}=e;const m=(0,n.useMemo)((()=>{var e,t,r,n,i;return null!==(e=(null===(t=d.collection)||void 0===t?void 0:t.length)>0?null===g||void 0===g||null===(r=g.data)||void 0===r||null===(n=r[d.collection])||void 0===n?void 0:n[d.name]:null===g||void 0===g||null===(i=g.data)||void 0===i?void 0:i[d.name])&&void 0!==e?e:"Please update the itemTitle."}),[d,g]);return(0,u.jsx)(A.hJ,{className:`${null!==p&&void 0!==p?p:"medium"}`,children:(0,u.jsxs)(l.YW,{className:`${null!==p&&void 0!==p?p:"medium"} popup-child`,children:[(0,u.jsxs)(l.Y9,{className:"custom",children:[(0,u.jsx)(o.z,{title:(0,s._W)(d,m),line:!1,description:f}),(0,u.jsx)(c.Jn,{theme:t,onClick:r,children:(0,u.jsx)(i.A0,{icon:"Close"})})]}),(0,u.jsx)(a.Yq,{theme:t,className:`${null!==p&&void 0!==p?p:"medium"} popup-data`,children:h})]})},g.data._id)}),((e,t)=>e.themeColors===t.themeColors&&e.itemTitle===t.itemTitle&&e.description===t.description&&e.customClass===t.customClass&&e.openData.data._id===t.openData.data._id))},30791:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});r(65043);const n=r(94574).Ay.div`
  position: relative;
  animation: ease-in-out;
  animation-duration: 0.2s;
  margin-bottom: 0px;
  margin-top: 0px;

  &.select {
    top: 0;
    z-index: 1;
    display: inherit;
    position: sticky;
    top: 5px;
  }
  input {
    box-sizing: border-box;
    outline: none !important;
    border: 1px solid #e2e4e9;
    height: 32px;
    margin: 0px 0;
    padding: 0px;
    transition: all 0.2s ease-out 0s;
    border-radius: 8px;
    width: 32px;
    padding-left: 30px;
    &:focus {
      width: 200px;
      border-radius: 10px;
      padding-left: 32px;
    }
  }

  &.sticky {
    position: sticky;
  }
  && {
    .options & {
      input {
        border: 0px solid gainsboro;
        border: 1px solid #e2e4e9;
        height: 40px;
        margin: 0px 0px 0px 0px;
        padding: 15px 10px 15px 40px;
        border-radius: 10px;
        width: 100%;
      }
      svg {
        top: 12px;
      }
    }
  }
  &.active input {
    width: 200px;
    max-width: 100%;
    border-radius: 10px;
    color: ${e=>e.theme.foreground};
    padding-left: 32px;
  }

  svg {
    position: absolute;
    left: 8px;
    top: 8px;
    pointer-events: none;
    background-color: white;
  }
  &.menu {
    margin-left: 0;
    border: 0;
    border-bottom: 1px solid rgb(239, 237, 237);
    position: sticky;
    top: 0px;
    z-index: 1;
    margin-bottom: 0;
    box-shadow: none !important;
    margin: 20px;
  }
  &.menu input {
    width: 100% !important;
    padding-left: 55px;
    border-radius: 0;
    box-shadow: none;
  }
  &.menu svg {
    left: 20px;
  }
  &.select {
    margin: 0px 0 10px 0px;
  }
`;var i=r(46861),a=r(70579);const o=function(e){let{className:t="",theme:r,placeholder:o,value:s,onChange:l,active:c=!1}=e;return(0,a.jsxs)(n,{theme:r,className:(s.length>0||c?"active ":" ")+t,children:[(0,a.jsx)(i.A0,{icon:"search"}),(0,a.jsx)("input",{onClick:e=>e.stopPropagation(),name:"search-1",type:"text",autoComplete:"false",placeholder:o,value:s,onChange:l})]})}},57658:(e,t,r)=>{"use strict";r.d(t,{$n:()=>f,CW:()=>h,GY:()=>A,LY:()=>c,WA:()=>l,aL:()=>o,tU:()=>a,t_:()=>d,v_:()=>s,ze:()=>u});var n=r(94574),i=r(8276);const a=n.Ay.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex: 1 1 100%;
  padding: 4px;
  border-radius: 10px;
  background: ${i.D.bg.weak};
  row-gap:6px;
  .tab {
    font-size: 14px;
    font-weight: 500;
    line-height: 16.94px;
    letter-spacing: -0.006em;
    height: 25px;
    text-align: center;
    padding: 4px 6px;
    min-width: 6px;
    border-radius: 6px;
    border: 1px;
    min-width:100px;
    color: ${i.D.text.soft};
    cursor: pointer;
    &.active {
      color: ${i.D.text.main};
      background: ${i.D.bg.white};
    }
  }
`,o=n.Ay.div`
  position: relative;
  width: 100%;
  gap: 4px;
  display: flex;
  flex-direction: column;
  /* max-width: 350px; */
  &.half {
    width: 40%;
  }
  &.small button {
    width: 80px;
    margin: 0;
  }
  grid-column: span 4; /* 50% width */
  &.double {
    grid-column: span 2; /* 50% width */
    width: auto;
  }
  &.quarter {
    grid-column: span 1; /* 25% width */
    width: auto;
  }

  &.half {
    grid-column: span 2; /* 50% width */
    width: auto;
  }

  &.large {
    grid-column: span 3; /* 75% width */
    width: auto;
  }
  &.full {
    grid-column: span 4; /* 100% width */
  }
  &.control {
    max-width: 90px;
    grid-column: span 1; /* 100% width */
    flex: auto;
    .options li {
      padding: 2px;
    }

    button {
      min-width: 90px !important;
      min-height: 25px !important;
      height: 25px;
      border-radius: 5px;
      font-size: 12px;
      svg {
        display: none;
      }
      > svg {
        display: block;
        margin-right: 0em;
      }
      span {
        max-width: 90px;
        white-space: normal;
      }
    }
    label .label {
      font-size: 11px;
    }
  }
  &.table {
    max-width: 150px;
    width: 150px;
  }
  .select {
    display: none;
  }
  &.list-box button {
    display: none;
  }
  &.list-box {
    max-height: none;
    height: auto;
  }
  &.auto {
    width: auto;
    min-width: 200px;
  }
  &.list-box .options {
    display: block;
    position: inherit;
    top: 0px;
    height: calc(100vh - 120px);
    max-height: inherit;
    padding-top: 0;
    margin-top: 0;
  }
  &.disabled {
    display: none;
  }
  &.half:nth-child(even) {
    /* width: calc(50% - 5px);
    margin-right: 5px; */
  }
  flex: calc(50% - 10px);

  && {
    /* Styles to apply when parent has class shrink */
    .nowrap & {
      margin-right: 10px;
      margin-left: 0;
    }
  }
  button {
    outline: none !important;
    width: 100%;
    -webkit-transition: all 0.2s ease-out 0s;
    transition: all 0.2s ease-out 0s;
    text-align: left;
    display: flex;
    align-items: center;
    cursor: pointer;
    margin: 0 0px 0px 0;
    white-space: nowrap;
    /* overflow: hidden; */
    text-overflow: ellipsis;
    position: relative;
    box-sizing: border-box;
    padding: 10px 10px 10px 12px;
    outline: none !important;
    width: 100%;
    border-radius: 10px;
    border: 1px solid ${i.D.stroke.soft};
    height: 40px;
    font-weight: 400;
    transition: all 0.2s ease-out 0s;
    color: ${i.D.text.soft};
    background: ${i.D.bg.white};
    position: relative;
    font-size: 14px;
    span {
      white-space: nowrap;
      max-width: calc(100% - 30px);
      text-overflow: ellipsis;
      overflow: hidden;
    }
    svg {
      margin-right: 0;
    }
  }
  &.custom {
    /* max-width: 200px; */
    display: flex;
  }

  &.left {
    margin: 0;
    margin-right: auto;
  }
  &.right {
    margin: 0;
    margin-left: auto;
  }
  &.center {
    margin: 0;
    margin-left: auto;
    margin-right: auto;
  }
  &.custom button {
    min-height: 40px;
    min-width: 150px;
    font-weight: normal;
    background: ${e=>e.theme.background};
  }
  &.filter button {
    min-height: 40px;
    height: 40px;
    margin: 0px 0;
    min-width: 150px;
    background: ${e=>e.theme.background};
  }
  &.small button {
    height: 25px;
    min-height: 25px;
    margin: 4px 0px;
    min-width: 125px;
    padding: 5px 0 5px 5px;
    background: ${e=>e.theme.background};
    box-shadow: none;
    border: 1px solid #dedede;
    border-radius: 5px;
  }
  &.form {
    max-width: 100%;
    display: flex;
    button {
      font-weight: 700;
    }
  }
  &.filter {
    margin: 0px;
    flex: 1 1 250px; /* flex-grow, flex-shrink, flex-basis */
    max-width: 250px; /* Maximum width for flexibility */
  }
  &.small {
    margin: 0px;
    flex: inherit;
    width: initial;
    margin-left: auto;
  }
  &.single {
    margin-right: 0em;
  }
  button label {
    display: none;
  }
  button label svg {
    color: green !important;
    transform: rotate(0deg) !important;
  }
  button.has {
    /* padding-top: 15px; */
    color: ${i.D.text.main};
  }

  &.small button.has {
    padding-top: 5px;
  }
  &.small button.has label {
    display: none;
  }
  button.has label {
    position: absolute;
    display: block;
    font-weight: normal;
    top: 5px;
    left: 13px;
    font-size: 10px;
  }
  button.has svg:first-child {
    margin-right: 5px;
  }
  &.filter button.has label {
    font-size: 10px;
    top: 5px;
  }
  &.filter .options {
    top: 50px;
    /* position: initial; */
    margin: 0;
  }
  &.single .options {
    top: 47px;
    position: absolute;
    margin: 0px;
  }
  &.control .options {
    border-radius: 5px;
    top: 30px;
    position: absolute;
    margin: 0px;
  }
  &.open svg.down {
    transition: all 0.2s ease-out 0s;
    transform: rotate(180deg);
    color: black;
  }
  &.open .options {
    //border: 1px solid rgb(224, 224, 227);
    border: 1px solid #e2e4e9;
    z-index: 1004;
  }
  &.open .select {
    display: inherit;
  }
  button svg {
    margin-left: auto;
    margin-right: 1em;
  }
  .options {
    opacity: 1;
    pointer-events: auto;
    -webkit-transform: scale(1) translateY(0);
    -ms-transform: scale(1) translateY(0);
    transform: scale(1) translateY(0);
    max-height: 250px;
    overflow-y: auto;
    min-width: 100%;
    background-color: white;
    border-color: rgb(224, 224, 227);
    border-radius: 12px;
    list-style: none;
    padding: inherit;
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 1004;
    margin: 0;
    left: 0;
    top: calc(100% + 10px);
    transition: all 1s ease-out 0s;
    padding: 0;
    box-shadow: 0px 16px 40px -8px #585c5f29;
    padding: 8px;
    gap: 4px;
    border-radius: 16px;
    opacity: 0px;
    &.up {
      bottom: calc(100% + 10px);
      top: auto;
    }
  }
  .options.hide {
    display: none;
  }
  &.open > button {
    border: 1px solid ${i.D.stroke.strong};
    box-shadow: 0px 0px 0px 4px #e4e5e7;
  }
  .options li {
    cursor: pointer;
    /* border-bottom: 1px solid rgb(224, 224, 227); */
    padding: 8px;
    gap: 8px;
    border-radius: 8px;
    color: ${i.D.text.main};
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.006em;
    text-align: left;
    transition: all 0.1s ease;
    position: relative;
    > svg {
      position: absolute;
      right: 0px;
      top: 10px;
    }
  }
  .options li.selected {
    /* background: ${e=>e.theme.themeLight};
    color: ${e=>e.theme.theme}; */
    font-weight: bold;
    cursor: pointer;
    background: ${i.D.bg.weak};
    color: ${i.D.bg.main};
    padding-left: 12px;
  }

  .options li svg {
    color: ${e=>e.theme.lightSecForeground};
    margin-left: 0px;
    transform: rotate(0deg);
    width: 15px;
    height: 15px;
  }
  .options li:last-child {
    border-bottom: 0px solid rgb(224, 224, 227);
  }
  .options li:hover {
    /* background: ${e=>e.theme.themeLight};
    color: ${e=>e.theme.theme}; */
    transform: scale(1.005);

    cursor: pointer;
    background: ${i.D.bg.weak};
    padding-left: 12px;
    transition: all 0.4s;
  }
  &.small .options {
    top: 32px;
    border-radius: 5px;

    li {
      font-size: 14px;
      padding: 5px;
    }
  }
  button:disabled {
    background: ${i.D.bg.weak};
    color: ${i.D.text.sub};
    cursor: not-allowed;
    border: 0;
  }
  @media screen and (max-width: 768px) {
    &.half:nth-child(odd) {
      width: 100%;
      margin-left: 0px;
    }
    &.half:nth-child(even) {
      width: 100%;
      margin-right: 0px;
    }
    &.filter {
      flex: 1 1 100%; /* flex-grow, flex-shrink, flex-basis */
      max-width: 200px; /* Maximum width for flexibility */
    }
  }
`,s=(n.Ay.span`
  margin-top: 5px;
  display: flex;
  flex-wrap: wrap;
`,n.Ay.span`
  display: flex;
  margin-right: 5px;
  margin-bottom: 5px;
  color: rgb(131, 136, 148);
  /* &:after {
    content: " :";
  } */
`),l=n.Ay.span`
  padding: 0px;
  border-radius: 10px;
  font-weight: 500;
  margin-right: 10px;
  &.image {
    padding: 0;
  }
  &.title {
    font-weight: bold;
    font-size: 14px;
  }
`,c=n.Ay.div`
  display: flex;
  margin-top: 5px;
  flex-wrap: wrap;
`,A=n.Ay.div`
  display: flex;
  font-size: 14px;
  flex-direction: row;
  margin-top: 10px;
  text-wrap: wrap;
  cursor: pointer;
  &.column {
    flex-direction: column;
    row-gap: 5px;
  }
`,u=n.Ay.div`
  display: flex;
  font-size: 14px;
  flex-wrap: wrap;
`,d=n.Ay.img`
  min-width: 50px;
  max-width: 50px;
  min-height: 50px;
  max-height: 50px;
  border-radius: 12px;
  object-fit: cover;
  margin-right: 10px;
  display: flex;
  align-items: center;
  border: 1px solid lightgray;
`,f=n.Ay.div`
  border: none;
  padding: 6px 6px;
  margin-right: 8px;
  cursor: pointer;
  font-size: 14px;
  /* white-space: nowrap; */
  border: 1px solid lightgray;
  margin-top: 10px;
  width: fit-content;
  border-radius: 10px;
  &:hover {
    background: white;
  }
`,h=n.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`},27029:(e,t,r)=>{"use strict";r.d(t,{A:()=>U});var n=r(65043),i=r(94574),a=r(8276);const o=i.Ay.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 100%;
  &.vertical-menu {
    flex-direction: row;
    align-items: flex-start;
    position: relative;
    min-height: 73vh;
  }
  &.horizontal {
    > .horizontal .tab {
      margin: 1em 0.5em 0px;
      max-height: 100%;
    }
    > .menu > div {
      box-shadow: none;
      border-radius: 12px;
      width: inherit !important;
      padding: 0px 20px 20px;
      margin-top:0;
      /* white-space: nowrap !important; */
      &::after {
      }
    }
  }
  @media (max-width: 768px) {
    padding: 0;
    &.vertical-menu {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`,s=i.Ay.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 0;
  align-items: flex-end;
  justify-content: flex-start;
  overflow: auto;
  margin: 0px;
  display: flex;
  justify-content: space-around;
  margin-bottom: 0;
  align-items: flex-end;
  justify-content: flex-start;
  overflow: auto;
  margin: 0px;
  gap: 15px;
  padding: 20px;
  border-right: 1px solid #e2e4e9;
  /* box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px 2px; */
  &.vertical-menu {
    /* padding: 20px 0px 20px;
    margin: 0px 0px 0px; */
    /* box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px 2px; */
    border-radius: 0px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    min-width: 15em;
    height: 100%;
    max-width: 15em;
  }
  &.custom {
    margin: 0;
  }
  &.sub-menu {
    max-width: 80px;
    min-width: 80px;
    padding: 0;
  }
  &.horizontal {
    width: auto;
    max-width: 100%;
    display: flex;
    align-items: flex-end;
    -webkit-box-pack: start;
    justify-content: flex-start;
    overflow: auto;
    margin: 0px;
    gap: 10px;
    padding: 5px;
    border-right: 0px;
    /* background: ${a.D.bg.weak}; */
    padding: 15px 20px 0.5em;
    border-radius: 0px;
  }

  @media (max-width: 768px) {
    margin: 0px 0px;
    &.vertical-menu {
      margin: 0px;
      flex-direction: row;
      flex-direction: row;
      height: 50px;
      max-width: 100%;
      padding: 0;
      gap: 15px;
      box-shadow: rgba(0, 0, 0, 0.07) 0px 2px 7px 0px;
      padding: 0px 10px 0 20px;
    }
  }
`,l=i.Ay.div`
  flex: auto;
  width: 100%;
  margin-bottom: 30px;
  
  &.vertical-menu {
    display: flex;
    width: calc(100% - 240px);
    max-width: calc(100% - 240px);
    /* padding: 25px 25px 0; */
    height: 100%;
    left: 260px;
    overflow: auto;
    margin-bottom: 0;
    bottom: 0;
    top: 0;
    &.menu {
      width: calc(100% - 100px);
      max-width: calc(100% - 80px);
      max-height: calc(100vh - 80px);
    }
  }
  @media (max-width: 768px) {
    &.vertical-menu {
      width: calc(100%);
      max-width: calc(100%);
      padding: 0;
    }
  }
`,c=i.Ay.div`
  padding: 0px;
  /* border-top: 1px solid #d0d0d0; */
  display: none;
  /* box-shadow: rgb(0 0 0 / 16%) 0px 1px 4px; */
  border-radius: 10px;
  padding: 25px 25px 20px;
  flex-direction: column;
  max-width: 100%;
  overflow: auto;
  &.info {
    /* margin: -25px; */
    border: 0;
  }
  &.custom {
    margin: 10px 0px 0px;
    padding: 0px;
  }
  &.vertical-menu {
    flex: auto;
  }
  &.horizontal {
    > .data-layout {
      padding:0em 10px !important
    }
    &.info {
      margin: 0px;
      border: 0;
    }
    > .form-container {
      background-color: white;
      padding: 5px;
    }
  }
  ${e=>e.active&&"\n    display: flex;\n  "}
  @media (max-width: 768px) {
    &.vertical-menu {
      flex: auto;
      width: 100%;
    }
  }
`,A=i.Ay.div`
  border-left: 2px solid ${a.D.primary.base};
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  margin-bottom: 5px;
  padding-left: 20px;
  margin-left: 20px;
`,u=i.Ay.div`
  display: flex;
  min-height: 28px;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.006em;
  align-items: center;
  cursor: pointer;
  svg {
    width: 15px;
  }
  &:hover {
    color: ${a.D.primary.base};
  }
  &.active {
    color: ${a.D.primary.base};
  }
`,d=i.Ay.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.04em;
  text-align: left;
  padding: 4px;
  color: ${a.D.text.soft};
  margin-top: 16px;
  &:first-child {
    margin-top: 0;
  }
`,f=i.Ay.div`
  cursor: pointer;
  padding: 10px 0px;
  width: 100%;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  padding: 9px 10px;
  gap: 10px;
  font-weight: normal !important;
  align-items: center;
  display: flex;
  color: #525866;
  font-size: 14px;
  &.active::after {
    content: "";
    display: block;
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px; /* Adjust size as needed */
    height: 20px; /* Adjust size as needed */
    background: white;
    border-radius: 50%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    transition: all 0.15s ease-in-out 0s;
  }

  &.active::before {
    content: "";
    position: absolute;
    right: 22px; /* Adjust to center within the circle */
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
    width: 6px;
    height: 6px;
    border-top: 2px solid black;
    border-right: 2px solid black;
    z-index: 1;
    transition: all 0.15s ease-in-out 0s;
  }
  &.submenu.active::before {
    transform: translateY(-60%) rotate(135deg);
  }
  &.horizontal.active::after {
    left: auto;
    right: 10px;
  }
  &.horizontal.active::before {
    left: auto;
    right: 17px;
    transform: translateY(-50%) rotate(135deg);
  }
  svg {
    width: 20px;
  }
  :hover {
    color: black;
    background-color: #f6f8fa;
    /* font-weight: 500 !important; */
    svg {
      color: ${e=>e.theme.theme};
    }
  }
  &:first-child {
    border-radius: 10px;
  }
  &:last-child {
    border-radius: 10px;
  }
  &.active {
    background-color: #f6f8fa;
    color: black;
    /* font-weight: 500 !important; */
    svg {
      color: ${e=>e.theme.theme};
    }
    /* font-weight: bold; */
    position: relative;
    @media (max-width: 768px) {
      font-size: 14px;
    }
    /* padding-right: 22px; */
  }
  &.horizontal.active {
    padding-right: 4%;
  }
  @media (max-width: 768px) {
    flex-direction: row;
  }
`,h=i.Ay.div`
  cursor: pointer;
  padding: 10px 0px;
  width: 100%;
  background-color: rgb(255, 255, 255);
  border-radius: 0px;
  padding: 12px 10px;
  gap: 10px;
  font-weight: normal !important;
  align-items: center;
  display: flex;
  color: #525866;
  flex-direction: column;
  font-size: 10px;
  text-align: center;
  svg {
    width: 20px;
    height: 20px;
  }
  :hover {
    color: black;
    background-color: #f6f8fa;
    font-weight: 500 !important;
    svg {
      color: ${e=>e.theme.theme};
    }
  }

  &:first-child {
    border-radius: 0px;
  }
  &:last-child {
    border-radius: 0px;
  }
  &.active {
    background-color: #f6f8fa;
    color: black;
    font-weight: 500 !important;
    svg {
      color: ${e=>e.theme.theme};
    }
    font-weight: bold;
    position: relative;
    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
  &.horizontal {
    flex-direction: row;
    padding: 12px 10px;
    min-height: 50px;
    border-radius: 12px;
    width: auto;
    background: ${a.D.bg.white};
    color: ${a.D.text.main};
    font-size: 14px;
    font-size: 14px;
    font-weight: 500 !important;
    line-height: 20px;
    letter-spacing: -0.006em;
    text-align: left;
    color: ${a.D.text.soft};
    border:1px solid ${a.D.bg.weak};
    &.active {
      background: ${a.D.bg.weak};
      color: ${a.D.primary.base};
      font-weight: 500 !important;
      box-shadow: 0px 2px 4px 0px #1b1c1d05;
    }
  }
  @media (max-width: 768px) {
    flex-direction: row;
  }
`;i.Ay.div`
  cursor: pointer;
  padding: 10px 0px;
  flex: 1 1 50%;
  background-color: rgb(255, 255, 255);
  color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: bold;
  flex: inherit;
  gap: 10px;
  /* min-width: 60px;  */
  white-space: nowrap;
  border-radius: 10px;
  border: 1px solid #e2e4e9;
  transition: all 0.1s ease-in;

  :hover {
    /* transition: padding 0s ease-in; */
    /* font-weight: bold; */
    /* padding: 5px 13.1px; */
  }
  &:first-child {
    border-radius: 10px;
  }
  &:last-child {
    border-radius: 10px;
  }
  &.active {
    /* background-color: ${e=>e.theme.pageForeground}; */
    background-color: #f6f8fa;
    color: ${e=>e.theme.theme};
    font-weight: bold;
    position: relative;
    &.active::after {
      border: 0px solid rgb(129, 2, 129);
      content: "";
      display: block;
      height: 2px;
      width: 100%;
      bottom: 0px;
      left: 0;
      background: rgb(129, 2, 129);
      transition: all 0.15s ease-in-out 0s;
      position: absolute;
      @media (max-width: 768px) {
        bottom: 1px;
        width: 100%;
        height: 2px;
        border-radius: 10px;
      }
    }
    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
  && {
    .vertical-menu & {
      width: -webkit-fill-available;
      justify-content: left;
      text-align: left;
      box-shadow: none;
      padding: 8px 13px !important;
      white-space: pre-wrap;
      border-radius: 12px !important;
      margin-right: 10px;
      svg {
        min-width: 20px;
      }
      &.active::after {
        content: "";
        display: block;
        position: absolute;
        right: 15px;
        left: auto;
        top: 50%;
        transform: translateY(-50%) rotate(45deg);
        width: 6px;
        background-color: transparent;
        height: 6px;
        border-top: 1px solid black;
        border-right: 1px solid black;
        transition: all 0.15s ease-in-out 0s;
        @media (max-width: 768px) {
          width: 100%;
          height: 2px;
          margin-left: 0;
        }
      }
    }
  }
  && {
    .vertical-menu & {
      padding: 10px 0px;
      &.active {
        box-shadow: none;
      }
      border-radius: 0;
    }
  }
  @media (max-width: 768px) {
    white-space: nowrap;
    flex: none;
    && {
      .vertical-menu & {
        width: auto;
        height: 100%;
      }
    }
  }
`;var p=r(41137),g=r(79456),m=r(46861),v=r(66386),y=r(82550),b=r(21159),w=r(31066),x=r(9667),C=r(70579);const B=n.memo((e=>{const t=e.content,r=(0,g.d4)((e=>e.themeColors)),[i]=(0,n.useState)(e);return(0,C.jsx)(x.Yq,{theme:r,className:"data-layout "+e.viewMode,children:i&&(0,C.jsx)(t,{...i,themeColors:r})})}));var E=r(43046);const k=(0,n.lazy)((()=>r.e(8210).then(r.bind(r,8210)))),I=(0,n.lazy)((()=>r.e(9655).then(r.bind(r,89655)))),S=(0,n.lazy)((()=>Promise.all([r.e(9867),r.e(9504)]).then(r.bind(r,59504)))),D=(0,n.lazy)((()=>r.e(9194).then(r.bind(r,59194)))),Q=(0,n.lazy)((()=>r.e(1011).then(r.bind(r,41011)))),_=(0,n.lazy)((()=>r.e(1121).then(r.bind(r,91121)))),T=(0,n.lazy)((()=>r.e(9929).then(r.bind(r,49929)))),F=(0,n.lazy)((()=>r.e(2628).then(r.bind(r,92628)))),O=(e,t)=>{if(t)return t;switch(e.page){case"attendee":case"registration":return k;case"dashboard":return S;case"approval":return I;case"regdata":return D;case"domain":return Q;case"emailCampaign":return _;case"whatsappCampaign":return T;case"qrCode":return F;default:return E.default}};var M=r(13295),N=r(83150),j=r(46193),L=r(36824);const U=e=>{var t;let{tabs:r=[],className:i="",popupMenu:a="horizontal",editData:x,setMessage:E,setLoaderBox:k,openData:I,parentReference:S,parents:D,item:Q}=e;const[_]=(0,p.Bd)(),T=(0,g.d4)((e=>e.themeColors)),[F,U]=(0,n.useState)(null===(t=r[0])||void 0===t?void 0:t.name),[R,P]=(0,n.useState)(null),[H,z]=(0,n.useState)(null),[V,G]=(0,n.useState)({}),[Y,W]=(0,n.useState)(null),[K,q]=(0,n.useState)(r);(0,n.useEffect)((()=>{var e;null===F&&U(null===(e=K[0])||void 0===e?void 0:e.name)}),[K,F]);const Z=(e,t,r,n,i,s)=>{var l,c,A,u,d,f,h;const{element:p,type:g,content:v}=e;return g?"custom"===g?(0,C.jsx)(B,{openData:i,...p,themeColors:T,setLoaderBox:n,setMessage:r,content:null!==v&&void 0!==v?v:O(e.element,v)},e.name):"information"===g?(0,C.jsx)(b.A,{...t,css:"plain head-hide info",noTabView:!0}):"gallery"===g?(0,C.jsx)(w.A,{showTitle:p.showTitle,imageSettings:p.imageSettings,api:`${p.api}`,openData:i},e.name):"edit"===g?(0,C.jsx)(b.A,{...t,css:"plain head-hide info"}):"details"===g?(0,C.jsxs)(o,{className:"tab",children:[(0,C.jsxs)(j.p3,{className:"sticky",children:[(0,C.jsx)("div",{children:v.titleValue}),(0,C.jsx)("div",{children:v.updatePrivilege&&(0,C.jsx)(N.Kc,{theme:T,onClick:e=>{e.stopPropagation(),v.isEditingHandler(null===i||void 0===i?void 0:i.data,v.udpateView,v.titleValue)},children:(0,C.jsx)(m.A0,{icon:"edit"})})})]}),(0,C.jsx)(M.O,{popupMenu:a,formMode:v.formMode,attributes:i.attributes,data:i.data})]}):"jsx"===g?v:(null===p||void 0===p?void 0:p.attributes)&&(0,C.jsx)(y.A,{name:e.name,headerStyle:"sub",icon:null!==(l=p.icon)&&void 0!==l?l:"",showInfo:null===(c=p.showInfo)||void 0===c||c,viewMode:null!==(A=p.type)&&void 0!==A?A:"subList",setMessage:r,setLoaderBox:n,parentReference:null===p||void 0===p||null===(u=p.params)||void 0===u?void 0:u.parentReference,referenceId:null===i||void 0===i||null===(d=i.data)||void 0===d?void 0:d._id,attributes:p.attributes,...p.params,parents:{...s,[null===p||void 0===p||null===(f=p.params)||void 0===f?void 0:f.parentReference]:null===i||void 0===i||null===(h=i.data)||void 0===h?void 0:h._id}}):null};return(0,C.jsxs)(o,{className:a,children:[K.length>0&&(0,C.jsxs)(s,{className:`sub-menu ${i} ${a}`,children:[(0,C.jsx)(v.$3,{className:a}),K.map(((e,t)=>(0,C.jsxs)(h,{theme:T,className:`${e.name} ${F===e.name&&"active"}  ${a}`,onClick:()=>{(0,n.startTransition)((()=>{var t;if(U(e.name),G((t=>({...t,[e.name]:!0}))),(null===(t=e.tabs)||void 0===t?void 0:t.length)>0){const t=e.tabs.findIndex((e=>"title"!==e.type));G((r=>({...r,[e.tabs[t].name]:!0}))),W(e.tabs),P(e.tabs[t].name)}else P(null),W(null),z(null)}))},children:[(0,C.jsx)(m.A0,{icon:e.icon}),_(e.title)]},`${e.name}-${t}`)))]}),(null===Y||void 0===Y?void 0:Y.length)>0&&(0,C.jsx)(s,{className:`menu ${i} ${a}`,children:Y.map(((e,t)=>{var r,i,o;return"title"===e.type?(0,C.jsxs)(d,{children:[e.icon&&(0,C.jsx)(m.A0,{icon:e.icon}),_(e.title)]},`${e.name}-title`):(0,C.jsxs)(n.Fragment,{children:[(0,C.jsxs)(f,{theme:T,className:`${(null===(r=e.tabs)||void 0===r?void 0:r.length)>0?"submenu":""} ${R===e.name?"active":""} ${a}`,onClick:async()=>{(0,n.startTransition)((async()=>{var r;if(P(e.name),G((t=>({...t,[e.name]:!0}))),!e.dynamicTabs||e.tabs&&0!==e.tabs.length)(null===(r=e.tabs)||void 0===r?void 0:r.length)>0?z(e.tabs[0].name):z(null);else try{var n;const r=await(0,L.bQ)({[S]:null===I||void 0===I||null===(n=I.data)||void 0===n?void 0:n._id},e.dynamicTabs.api);if(200===r.status){var i;const n=null===(i=r.data)||void 0===i?void 0:i.map(((r,n)=>({name:`${r.id}-${t}-${n}`,title:r.value,type:"subList",icon:"",css:"",element:{...e.dynamicTabs.template,params:{...e.dynamicTabs.template.params,shortName:r.value,preFilter:{instance:r.id}}},content:e.dynamicTabs.template.content})));q((t=>t.map((t=>{var r;return(null===(r=t.tabs)||void 0===r?void 0:r.length)>0?{...t,tabs:t.tabs.map((t=>t.dynamicTabs&&t.name===e.name?{...t,tabs:n}:t))}:t})))),W((t=>t.map((t=>t.name===e.name?{...t,tabs:n}:t)))),(null===n||void 0===n?void 0:n.length)>0?z(n[0].name):z(null)}}catch(a){console.error("Error fetching dynamic tabs:",a)}}))},children:[e.icon&&(0,C.jsx)(m.A0,{icon:e.icon}),_(e.title)," ",null===e||void 0===e?void 0:e.length]},`${e.name}-${t}`),(null===(i=e.tabs)||void 0===i?void 0:i.length)>0&&e.name===R&&(0,C.jsx)(A,{children:null===(o=e.tabs)||void 0===o?void 0:o.map(((e,t)=>((e,t)=>{var r;return(0,C.jsxs)(u,{theme:T,className:`${H===e.name&&"active"} ${a}`,onClick:()=>{(0,n.startTransition)((()=>{z(e.name),G((t=>({...t,[e.name]:!0})))}))},children:[e.icon&&(0,C.jsx)(m.A0,{icon:e.icon}),(0,C.jsx)("span",{children:_(null!==(r=e.title)&&void 0!==r?r:e.value)})]},`${e.name}-${t}`)})(e,t)))})]},`${e.name}-${t}`)}))}),(0,C.jsx)(l,{className:`${a} ${Y?"sub-menu":"menu"}`,children:K.map(((e,t)=>{var r,o;return(0,C.jsxs)(n.Fragment,{children:[(0,C.jsx)(c,{className:`${i} ${a} ${null!==(r=e.css)&&void 0!==r?r:""}`,theme:T,active:null===R&&F===e.name,children:(!0===V[e.name]||0===t)&&Z(e,x,E,k,I,D)}),null===(o=e.tabs)||void 0===o?void 0:o.map(((t,r)=>{var o,s;return(0,C.jsxs)(n.Fragment,{children:[(0,C.jsx)(c,{className:`${i} ${a} ${null!==(o=t.css)&&void 0!==o?o:""}`,theme:T,active:null===H&&R===t.name,children:(!0===V[t.name]||!0===V[e.name]&&0===r)&&Z(t,x,E,k,I,D)},`${t.name}-sub-tab-content`),null===(s=t.tabs)||void 0===s?void 0:s.map(((e,r)=>{var o;return(0,C.jsx)(n.Fragment,{children:(0,C.jsx)(c,{className:`${i} ${a} ${null!==(o=e.css)&&void 0!==o?o:""}`,theme:T,active:H===e.name,children:(!0===V[e.name]||!0===V[t.name]&&0===r)&&Z(e,x,E,k,I,D)},`${e.name}-${r}-sub-sub-tab-content-data`)},`${e.name}-${r}-sub-sub-tab-content`)}))]},`${t.name}-${r}-tab-content`)}))]},`${e.name}-tab-content-${t}`)}))})]})}},83945:(e,t,r)=>{"use strict";r.d(t,{mq:()=>a,iT:()=>n,B4:()=>i});const n=r.p+"static/media/calicut.0e264c4473e8f06c731d.jpeg",i=r.p+"static/media/malappuram.4f5fa3cd1bbfcfd3aa1b.jpeg",a=(r.p,r.p,r.p+"static/media/bannerimage.682a8fcde468b46e8ebd.png")},8276:(e,t,r)=>{"use strict";var n,i,a;r.d(t,{D:()=>s,t:()=>o});const o={title:null!==(n={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API:"https://backend-endpoint.eventhex.ai/api/v1/",REACT_APP_CDN:"https://event-manager.syd1.cdn.digitaloceanspaces.com/"}.REACT_APP_TITLE)&&void 0!==n?n:"",shortTitle:null!==(i={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API:"https://backend-endpoint.eventhex.ai/api/v1/",REACT_APP_CDN:"https://event-manager.syd1.cdn.digitaloceanspaces.com/"}.REACT_APP_SHORT_TITLE)&&void 0!==i?i:"",description:null!==(a={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API:"https://backend-endpoint.eventhex.ai/api/v1/",REACT_APP_CDN:"https://event-manager.syd1.cdn.digitaloceanspaces.com/"}.REACT_APP_DESCRIPTION)&&void 0!==a?a:"",privileges:{admin:"6459f25d7f6e9664fbd7486f",event:"65a8b8bec6ecb90dd2d5a1f1",franchiseAdmin:"6493e7bf0fba44683fd8f51c"},formInputView:"mixed",theme:{theme:"#375DFB",themeLight:"#f7f7ff",pageBackground:"white",background:"white",foreground:"#4f4f4f",border:"#E2E4E9",secBackground:"white",secForeground:"#757575",lightBackground:"White",lightForeground:"Black",lightBorder:"Black",lightSecBackground:"White",lightSecForeground:"black",foregroundInvert:"white",backgroundInvert:"black;",borderThinkness:"0px",themeBackground:"#375DFB",themeForeground:"white",disabledBackground:"rgba(156, 156, 156, 0.41)",disabledForeground:"white",gradient:"-webkit-linear-gradient(302deg, rgb(129, 2, 129), rgb(90, 169, 230) 100%)"}},s={primary:{darkest:"#050505",dark:"#253EA7",base:"#375DFB",light:"#C2D6FF",lightest:"#EBF1FF"},bg:{strong:"#0A0D14",surface:"#161922",soft:"#E2E4E9",weak:"#F6F8FA",white:"#FFFFFF",plain:"#f6f8fa"},text:{main:"#0A0D14",sub:"#525866",soft:"#868C98",disabled:"#CDD0D5",white:"#FFFFFF"},stroke:{strong:"#0A0D14",sub:"#868C98",soft:"#E2E4E9",disabled:"#F6F8FA",white:"#FFFFFF"},icon:{strong:"#0A0D14",sub:"#525866",soft:"#868C98",disabled:"#CDD0D5",white:"#FFFFFF"},state:{success:"#4CAF50",warning:"#FF9800",error:"#F44336",information:"#2196F3",away:"#F2AE40",neutral:"#9E9E9E",verified:"#673AB7"}}},13747:(e,t,r)=>{"use strict";r.d(t,{e:()=>n});const n=(e,t,r,n,i)=>{var a,o;switch(e.validation){case"email1":console.log(e.validation);/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(r)||(t="Please provide a valid email Id",n+=1);break;case"phoneNumber":var s;if(!new RegExp(`^[1-9]\\d{${(null!==(a=e.maximum)&&void 0!==a?a:10)-1}}$`).test(r))t=`Please provide a valid ${null!==(s=e.maximum)&&void 0!==s?s:10}-digit WhatsApp Number`,n+=1;break;case"numeric":if(0===(null!==(o=e.numericLength)&&void 0!==o?o:0)){/^\d+$/.test(r)||(t=i("validContent",{label:i(e.label)}),n+=1)}else if(e.numericLength>0){new RegExp(`^\\d{${e.numericLength}}$`).test(r)||(t=`Please enter a number that ${e.numericLength} length`,n+=1)}}return{flag:n,tempformError:t}}},81978:(e,t,r)=>{"use strict";r.d(t,{hm:()=>rr});r(65043);var n=r(94574),i=r(70579);const a=n.Ay.svg`
  height: 1em;
`,o=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 448 512",children:(0,i.jsx)("path",{fill:"currentColor",d:"M112 0c-8.8 0-16 7.2-16 16v4c0 17.6 8.3 34.2 22.4 44.8l32 24c6 4.5 9.6 11.6 9.6 19.2v4c0 8.8 7.2 16 16 16s16-7.2 16-16v-4c0-17.6-8.3-34.2-22.4-44.8l-32-24c-6-4.5-9.6-11.6-9.6-19.2V16c0-8.8-7.2-16-16-16zM256 352H192c-88.4 0-160-71.6-160-160H416c0 88.4-71.6 160-160 160zM32 160c-17.7 0-32 14.3-32 32c0 80.5 49.5 149.4 119.7 177.9l-7.4 16.2c-5.2-1.4-10.7-2.1-16.4-2.1c-35.3 0-64 28.7-64 64s28.7 64 64 64c29.8 0 54.9-20.4 62-48H335.9l17.6 38.6c3.7 8 13.1 11.6 21.2 7.9s11.6-13.1 7.9-21.2L328.3 369.9C398.5 341.4 448 272.5 448 192c0-17.7-14.3-32-32-32H32zM140.4 401.9l10.2-22.4c13.4 2.9 27.2 4.5 41.5 4.5h64c14.2 0 28.1-1.5 41.5-4.5L321.3 432H158c-3-11.7-9.2-22-17.6-30.1zM64 448a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM224 16c0-8.8-7.2-16-16-16s-16 7.2-16 16v4c0 17.6 8.3 34.2 22.4 44.8l32 24c6 4.5 9.6 11.6 9.6 19.2v4c0 8.8 7.2 16 16 16s16-7.2 16-16v-4c0-17.6-8.3-34.2-22.4-44.8l-32-24c-6-4.5-9.6-11.6-9.6-19.2V16z"})}),s=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 512 512",children:(0,i.jsx)("path",{fill:"currentColor",d:"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"})}),l=()=>(0,i.jsx)(a,{className:"svg-inline--fa fa-arrow-right-from-bracket","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"arrow-right-from-bracket",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512","data-fa-i2svg":"",children:(0,i.jsx)("path",{fill:"currentColor",d:"M505 273c9.4-9.4 9.4-24.6 0-33.9L377 111c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l87 87L184 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l246.1 0-87 87c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0L505 273zM168 80c13.3 0 24-10.7 24-24s-10.7-24-24-24L88 32C39.4 32 0 71.4 0 120L0 392c0 48.6 39.4 88 88 88l80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-80 0c-22.1 0-40-17.9-40-40l0-272c0-22.1 17.9-40 40-40l80 0z"})}),c=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 14 17",fill:"currentColor",children:(0,i.jsx)("path",{d:"M7 16.796L2.227 12.023C1.28301 11.079 0.64014 9.87626 0.379696 8.56689C0.119253 7.25752 0.25293 5.90032 0.763824 4.66693C1.27472 3.43353 2.13988 2.37933 3.24991 1.63764C4.35994 0.895939 5.66498 0.500061 7 0.500061C8.33502 0.500061 9.64006 0.895939 10.7501 1.63764C11.8601 2.37933 12.7253 3.43353 13.2362 4.66693C13.7471 5.90032 13.8808 7.25752 13.6203 8.56689C13.3599 9.87626 12.717 11.079 11.773 12.023L7 16.796ZM10.7125 10.9625C11.4467 10.2283 11.9466 9.29279 12.1492 8.27441C12.3517 7.25602 12.2477 6.20045 11.8503 5.24117C11.4529 4.28189 10.78 3.46198 9.91669 2.88513C9.05334 2.30827 8.03833 2.00038 7 2.00038C5.96167 2.00038 4.94666 2.30827 4.08331 2.88513C3.21997 3.46198 2.54706 4.28189 2.14969 5.24117C1.75231 6.20045 1.64831 7.25602 1.85084 8.27441C2.05337 9.29279 2.55333 10.2283 3.2875 10.9625L7 14.675L10.7125 10.9625ZM7 8.75C6.60218 8.75 6.22065 8.59197 5.93934 8.31066C5.65804 8.02936 5.5 7.64783 5.5 7.25C5.5 6.85218 5.65804 6.47065 5.93934 6.18934C6.22065 5.90804 6.60218 5.75 7 5.75C7.39783 5.75 7.77936 5.90804 8.06066 6.18934C8.34197 6.47065 8.5 6.85218 8.5 7.25C8.5 7.64783 8.34197 8.02936 8.06066 8.31066C7.77936 8.59197 7.39783 8.75 7 8.75Z",fill:"currentColor"})}),A=()=>(0,i.jsx)(a,{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M11.75 2.25H14.75C14.9489 2.25 15.1397 2.32902 15.2803 2.46967C15.421 2.61032 15.5 2.80109 15.5 3V15C15.5 15.1989 15.421 15.3897 15.2803 15.5303C15.1397 15.671 14.9489 15.75 14.75 15.75H1.25C1.05109 15.75 0.860322 15.671 0.71967 15.5303C0.579018 15.3897 0.5 15.1989 0.5 15V3C0.5 2.80109 0.579018 2.61032 0.71967 2.46967C0.860322 2.32902 1.05109 2.25 1.25 2.25H4.25V0.75H5.75V2.25H10.25V0.75H11.75V2.25ZM14 6.75V3.75H11.75V5.25H10.25V3.75H5.75V5.25H4.25V3.75H2V6.75H14ZM14 8.25H2V14.25H14V8.25ZM3.5 9.75H7.25V12.75H3.5V9.75Z",fill:"currentColor"})}),u=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",children:(0,i.jsx)("path",{fill:"currentColor",d:"M256 32c53 0 96 43 96 96c0 8.8 7.2 16 16 16s16-7.2 16-16C384 57.3 326.7 0 256 0S128 57.3 128 128c0 8.8 7.2 16 16 16s16-7.2 16-16c0-53 43-96 96-96zM80.4 161.5c-14.1-1.6-27.5 6.2-33.1 19.2l-32 74.7C5.4 278.2 18.7 304.4 43 310l159.2 36.7c18.9 4.4 38.6-3.1 49.9-18.9L320 232.9l67.9 95.1c11.3 15.8 31 23.2 49.9 18.9L597 310c24.3-5.6 37.6-31.8 27.8-54.7l-32-74.7c-5.6-13-19-20.8-33.1-19.2L320 189.2 80.4 161.5zm-3.7 31.8l214.5 24.8-65.1 91.2c-3.8 5.3-10.3 7.7-16.6 6.3L50.2 278.9c-4.9-1.1-7.5-6.4-5.6-10.9l32-74.7zM544 348.7v61.8c0 7.3-5 13.7-12.1 15.5L336 475V336c0-8.8-7.2-16-16-16s-16 7.2-16 16V475L108.1 426C101 424.3 96 417.9 96 410.5V348.7l-32-9.1v71c0 22 15 41.2 36.4 46.6l208 52c7.6 1.9 15.6 1.9 23.3 0l208-52c21.4-5.3 36.4-24.5 36.4-46.6v-71l-32 9.1zM348.8 218.1l214.5-24.8 32 74.7c2 4.6-.7 9.8-5.6 10.9L430.6 315.6c-6.3 1.5-12.9-1-16.6-6.3l-65.1-91.2zm146.4-181c2.8-8.4-1.7-17.4-10.1-20.2s-17.4 1.7-20.2 10.1l-32 96c-2.8 8.4 1.7 17.4 10.1 20.2s17.4-1.7 20.2-10.1l32-96z"})}),d=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",children:(0,i.jsx)("path",{fill:"currentColor",d:"M592 32H304c-8.8 0-16 7.2-16 16v80H256V48c0-26.5 21.5-48 48-48H592c26.5 0 48 21.5 48 48V464c0 26.5-21.5 48-48 48H381.3c1.8-5 2.7-10.4 2.7-16V480H592c8.8 0 16-7.2 16-16V48c0-8.8-7.2-16-16-16zM555.3 316.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L496 302.6V432c0 8.8-7.2 16-16 16s-16-7.2-16-16V302.6l-36.7 36.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l64-64c6.2-6.2 16.4-6.2 22.6 0l64 64zM352 192H32l0 64H64 320h32V192zM0 256V192c0-17.7 14.3-32 32-32H352c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32V480c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32l0-192c-17.7 0-32-14.3-32-32zm64 32V480H320V288H64zm80 32h96c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"})}),f=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:(0,i.jsx)("path",{fill:"currentColor",d:"M317.9 422.7C296.4 465.6 272.7 480 256 480c-7.9 0-17.3-3.2-27.3-11l-6.9 18.6c-2.9 7.8-7.7 14.7-13.9 19.9c15.6 3 31.6 4.5 48.1 4.5c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256c0 16.4 1.5 32.5 4.5 48.1c5.3-6.2 12.1-11 19.9-13.9l9.6-3.5c-1.4-10-2.1-20.2-2.1-30.6c0-22.2 3.2-43.7 9.3-64H132c-2.5 19.2-3.9 39.3-4 60l32.2-11.9c.5-16.7 1.9-32.8 4.1-48.1H347.7c2.8 20.2 4.3 41.7 4.3 64s-1.5 43.8-4.3 64H283.6l-11.8 32H342c-5.9 27-14.2 50.9-24.1 70.7zM194.1 89.3C215.6 46.4 239.3 32 256 32s40.4 14.4 61.9 57.3c9.9 19.8 18.2 43.7 24.1 70.7H170c5.9-27 14.2-50.9 24.1-70.7zM384 256c0-22.1-1.4-43.5-4-64h90.8c6 20.3 9.3 41.8 9.3 64s-3.2 43.7-9.3 64H380c2.6-20.5 4-41.9 4-64zm-9.3-96c-9.6-47.6-26.2-88-47.2-116.3c57.8 19.5 105 61.8 130.9 116.3H374.7zM53.6 160c25.9-54.5 73.1-96.9 130.9-116.3c-21 28.3-37.5 68.8-47.2 116.3H53.6zM374.7 352h83.8c-25.9 54.5-73.1 96.9-130.9 116.3c21-28.3 37.6-68.8 47.2-116.3zM271 261.5c2.2-5.9 .7-12.4-3.7-16.8s-11-5.9-16.8-3.7l-215 79.2c-6.2 2.3-10.3 8.1-10.5 14.7s3.8 12.6 9.9 15.1l74 30.5L4.7 484.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L131.5 403.1l30.5 74c2.5 6.1 8.5 10 15.1 9.9s12.4-4.3 14.7-10.5l79.2-215zM143.3 360L85.1 336 229 283 176 426.9l-24-58.2c-1.6-3.9-4.8-7.1-8.7-8.7z"})}),h=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:(0,i.jsx)("path",{fill:"currentColor",d:"M64 32H288c17.7 0 32 14.3 32 32v64h32V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64V288c0 35.3 28.7 64 64 64h64V320H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32zM288 96c0-17.7-14.3-32-32-32H96C78.3 64 64 78.3 64 96V256c0 17.7 14.3 32 32 32h32V256H96V96H256v32h32V96zm-64 96H448c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32zm-64 32V448c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V224c0-35.3-28.7-64-64-64H224c-35.3 0-64 28.7-64 64z"})}),p=()=>(0,i.jsx)(a,{viewBox:"0 0 14 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M3.25 2V0.5H10.75V2H13.0052C13.4163 2 13.75 2.33375 13.75 2.74475V14.7552C13.7498 14.9527 13.6713 15.142 13.5316 15.2816C13.392 15.4213 13.2027 15.4998 13.0052 15.5H0.99475C0.797291 15.4998 0.607976 15.4213 0.468351 15.2816C0.328727 15.142 0.250199 14.9527 0.25 14.7552V2.74475C0.25 2.33375 0.58375 2 0.99475 2H3.25ZM3.25 3.5H1.75V14H12.25V3.5H10.75V5H3.25V3.5ZM4.75 2V3.5H9.25V2H4.75Z",fill:"currentColor"})}),g=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",children:(0,i.jsx)("path",{fill:"currentColor",d:"M208 0c8.8 0 16 7.2 16 16V64H416V16c0-8.8 7.2-16 16-16s16 7.2 16 16V64h32c35.3 0 64 28.7 64 64v32 32H528 512 128 112 96V160 128c0-35.3 28.7-64 64-64h32V16c0-8.8 7.2-16 16-16zm39.4 512c5.4-9.4 8.6-20.3 8.6-32H384c0 11.7 3.1 22.6 8.6 32H247.4zM480 96H160c-17.7 0-32 14.3-32 32v32H512V128c0-17.7-14.3-32-32-32zm48 256a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm0-128a80 80 0 1 1 0 160 80 80 0 1 1 0-160zM480 448c-17.7 0-32 14.3-32 32H608c0-17.7-14.3-32-32-32H480zm-64 32c0-35.3 28.7-64 64-64h48 48c35.3 0 64 28.7 64 64c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32zM160 304a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM32 304a80 80 0 1 1 160 0A80 80 0 1 1 32 304zm0 176H192c0-17.7-14.3-32-32-32H64c-17.7 0-32 14.3-32 32zm32-64h48 48c35.3 0 64 28.7 64 64c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32c0-35.3 28.7-64 64-64z"})}),m=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 576 512",children:(0,i.jsx)("path",{d:"M64 64C28.7 64 0 92.7 0 128l0 66c0 7.3 4.9 13.7 12 15.5c20.7 5.3 36 24.1 36 46.5s-15.3 41.2-36 46.5C4.9 304.3 0 310.7 0 318l0 66c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-66c0-7.3-4.9-13.7-12-15.5c-20.7-5.3-36-24.1-36-46.5s15.3-41.2 36-46.5c7.1-1.8 12-8.2 12-15.5l0-66c0-35.3-28.7-64-64-64L64 64zM32 128c0-17.7 14.3-32 32-32l448 0c17.7 0 32 14.3 32 32l0 54.7c-28.2 12.3-48 40.5-48 73.3s19.8 61 48 73.3l0 54.7c0 17.7-14.3 32-32 32L64 416c-17.7 0-32-14.3-32-32l0-54.7C60.2 317 80 288.8 80 256s-19.8-61-48-73.3L32 128zm128 64l256 0 0 128-256 0 0-128zm-32 0l0 128c0 17.7 14.3 32 32 32l256 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32l-256 0c-17.7 0-32 14.3-32 32z"})}),v=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",children:(0,i.jsx)("path",{fill:"currentColor",d:"M608 64v79.5c-23.7 11.8-40 36.2-40 64.5s16.3 52.7 40 64.5V352H128V64H608zm32 72V64 32H608 128 96V64 352v32h32H608h32V352 280 248c-22.1 0-40-17.9-40-40s17.9-40 40-40V136zm-144-8a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm0 64a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm16 48a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm-16 80a16 16 0 1 0 0-32 16 16 0 1 0 0 32zM32 112V96H0v16V464v16H16 528h16V448H528 32V112z"})}),y=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:(0,i.jsx)("path",{fill:"currentColor",d:"M272 32c8.8 0 16 7.2 16 16V80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16H272zM80 0C53.5 0 32 21.5 32 48V80c0 26.5 21.5 48 48 48h80v32H87.5c-31.8 0-58.9 23.4-63.4 54.9L.6 379.5c-.4 3-.6 6-.6 9V448c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V388.5c0-3-.2-6.1-.6-9L487.8 214.9c-4.5-31.5-31.5-54.9-63.4-54.9H192V128h80c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H80zM32 448V416H480v32c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32zM456.2 219.5L479.7 384H32.3L55.8 219.5C58.1 203.7 71.6 192 87.5 192h337c15.9 0 29.4 11.7 31.7 27.5zM112 232a24 24 0 1 0 0 48 24 24 0 1 0 0-48zm72 24a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm-24 56a24 24 0 1 0 0 48 24 24 0 1 0 0-48zm120-56a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm-24 56a24 24 0 1 0 0 48 24 24 0 1 0 0-48zm120-56a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm-24 56a24 24 0 1 0 0 48 24 24 0 1 0 0-48z"})}),b=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:(0,i.jsx)("path",{fill:"currentColor",d:"M128 16c0-8.8-7.2-16-16-16s-16 7.2-16 16V64H64C28.7 64 0 92.7 0 128v32 32V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 160 128c0-35.3-28.7-64-64-64H352V16c0-8.8-7.2-16-16-16s-16 7.2-16 16V64H128V16zM32 192H416V448c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V192zM64 96H384c17.7 0 32 14.3 32 32v32H32V128c0-17.7 14.3-32 32-32zM245.5 231.5c-8.8-17.8-34.2-17.8-43 0l-22 44.6-49.2 7.2c-19.7 2.9-27.5 27.1-13.3 40.9l35.6 34.7-8.4 49c-3.4 19.6 17.2 34.6 34.8 25.3l44-23.2 44 23.2c17.6 9.3 38.2-5.7 34.8-25.3l-8.4-49 35.6-34.7c14.2-13.9 6.4-38.1-13.3-40.9l-49.2-7.2-22-44.6zm-40.1 66.3L224 260.2l18.6 37.6 3.7 7.5 8.3 1.2 41.5 6-30 29.3-6 5.9 1.4 8.3 7.1 41.4-37.1-19.5-7.4-3.9-7.4 3.9-37.1 19.5 7.1-41.4 1.4-8.3-6-5.9-30-29.3 41.5-6 8.3-1.2 3.7-7.5z"})}),w=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:(0,i.jsx)("path",{fill:"currentColor",d:"M128 16c0-8.8-7.2-16-16-16s-16 7.2-16 16V64H64C28.7 64 0 92.7 0 128v32 32V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 160 128c0-35.3-28.7-64-64-64H352V16c0-8.8-7.2-16-16-16s-16 7.2-16 16V64H128V16zM32 192H416V448c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V192zM64 96H384c17.7 0 32 14.3 32 32v32H32V128c0-17.7 14.3-32 32-32zM331.3 283.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L208 361.4l-52.7-52.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l64 64c6.2 6.2 16.4 6.2 22.6 0l112-112z"})}),x=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",children:(0,i.jsx)("path",{fill:"currentColor",d:"M480 192v.7c5.3-.5 10.6-.7 16-.7s10.7 .2 16 .7V192c0-35.3-28.7-64-64-64L64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64l330.8 0c-12.9-9.1-24.5-19.9-34.6-32L64 480c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32zM448 64L64 64c-8.8 0-16 7.2-16 16s7.2 16 16 16l384 0c8.8 0 16-7.2 16-16s-7.2-16-16-16zM400 0H112c-8.8 0-16 7.2-16 16s7.2 16 16 16l288 0c8.8 0 16-7.2 16-16s-7.2-16-16-16zM384 368a112 112 0 1 1 224 0 112 112 0 1 1 -224 0zm256 0a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zM512 304c0-8.8-7.2-16-16-16s-16 7.2-16 16v48H432c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v48c0 8.8 7.2 16 16 16s16-7.2 16-16V384h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H512V304z"})}),C=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:(0,i.jsx)("path",{fill:"currentColor",d:"M256 0c8.8 0 16 7.2 16 16V240H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H272V496c0 8.8-7.2 16-16 16s-16-7.2-16-16V272H16c-8.8 0-16-7.2-16-16s7.2-16 16-16H240V16c0-8.8 7.2-16 16-16zm88 96h40V56 48c0-8.8 7.2-16 16-16s16 7.2 16 16v8V96h40 8c8.8 0 16 7.2 16 16s-7.2 16-16 16h-8H416v40 8c0 8.8-7.2 16-16 16s-16-7.2-16-16v-8V128H344h-8c-8.8 0-16-7.2-16-16s7.2-16 16-16h8zM53.1 341.1c6.2-6.2 16.4-6.2 22.6 0L112 377.4l36.3-36.3c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L134.6 400l36.3 36.3c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L112 422.6 75.7 458.9c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L89.4 400 53.1 363.7c-6.2-6.2-6.2-16.4 0-22.6zM48 96H176c8.8 0 16 7.2 16 16s-7.2 16-16 16H48c-8.8 0-16-7.2-16-16s7.2-16 16-16zM336 352H464c8.8 0 16 7.2 16 16s-7.2 16-16 16H336c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H464c8.8 0 16 7.2 16 16s-7.2 16-16 16H336c-8.8 0-16-7.2-16-16s7.2-16 16-16z"})}),B=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:(0,i.jsx)("path",{fill:"currentColor",d:"M160 64c-17.7 0-32 14.3-32 32V416c0 11.7-3.1 22.6-8.6 32H432c26.5 0 48-21.5 48-48V96c0-17.7-14.3-32-32-32H160zM64 480c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64v32c-17.7 0-32 14.3-32 32V416c0 17.7 14.3 32 32 32s32-14.3 32-32V96c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V400c0 44.2-35.8 80-80 80H64zM384 112c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H400c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H400c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H400c-8.8 0-16-7.2-16-16zM160 304c0-8.8 7.2-16 16-16H432c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16H432c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16zm32-144H320V128H192v96zM160 120c0-13.3 10.7-24 24-24H328c13.3 0 24 10.7 24 24V232c0 13.3-10.7 24-24 24H184c-13.3 0-24-10.7-24-24V120z"})}),E=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:(0,i.jsx)("path",{fill:"currentColor",d:"M192 416c0-17.7-14.3-32-32-32H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32H448c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H309.3c-6.9 0-13.7 2.2-19.2 6.4L192 464V416zM64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h64 32v32 48c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM316.3 147.7c4.9 4.9 4.9 12.9 0 17.8l-8.1 8.1-17.8-17.8 8.1-8.1c4.9-4.9 12.9-4.9 17.8 0zM207.1 239.1l60.7-60.7 17.8 17.8L224.8 257c-2.1 2.1-4.6 3.5-7.4 4.2L198 266l4.9-19.5c.7-2.8 2.2-5.4 4.2-7.4zM275.8 125l-91.4 91.5c-6.1 6.2-10.5 13.9-12.6 22.3l-11.3 45.3c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l45.3-11.3c8.4-2.1 16.2-6.5 22.3-12.6l91.4-91.5c17.4-17.4 17.4-45.6 0-63c-17.4-17.4-45.7-17.4-63.1 0z"})}),k=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",children:(0,i.jsx)("path",{fill:"currentColor",d:"M64 64C46.3 64 32 78.3 32 96V416c0 17.7 14.3 32 32 32H512c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32H64zM0 96C0 60.7 28.7 32 64 32H512c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM112 256H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm256 0h96c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zM112 352h96c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm160 0H464c8.8 0 16 7.2 16 16s-7.2 16-16 16H272c-8.8 0-16-7.2-16-16s7.2-16 16-16z"})}),I=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",children:(0,i.jsx)("path",{fill:"currentColor",d:"M146.2 40.7l-6.9 25.1c-1.4 5.2-5.4 9.4-10.6 11c-14.6 4.6-27.9 12.4-39 22.5c-4 3.7-9.6 5.1-14.9 3.7L49.7 96.4c-2.2 3.1-4.3 6.3-6.3 9.6l-2.4 4.2c-1.8 3.3-3.5 6.6-5 10l18.3 18.5c3.8 3.9 5.4 9.4 4.2 14.7C56.8 160.7 56 168.2 56 176s.8 15.3 2.4 22.5c1.2 5.3-.4 10.8-4.2 14.7L35.9 231.8c1.5 3.4 3.2 6.7 5 10l2.5 4.3c2 3.3 4.1 6.5 6.3 9.6L74.9 249c5.3-1.4 10.9 0 14.9 3.7c11.1 10.2 24.3 17.9 39 22.5c5.2 1.6 9.2 5.8 10.6 11l6.9 25.1c4.5 .5 9.1 .7 13.8 .7s9.2-.2 13.8-.7l6.9-25.1c1.4-5.2 5.4-9.4 10.6-11c14.6-4.6 27.9-12.4 39-22.5c4-3.7 9.6-5.1 14.9-3.7l25.2 6.6c2.2-3 4.2-6.1 6.1-9.3l2.8-4.8c1.7-3.2 3.4-6.4 4.8-9.7l-18.3-18.5c-3.8-3.9-5.4-9.4-4.2-14.7c1.6-7.2 2.4-14.8 2.4-22.6s-.8-15.3-2.4-22.6c-1.2-5.3 .4-10.8 4.2-14.7l18.3-18.5c-1.5-3.3-3.1-6.5-4.8-9.7l-2.8-4.8c-1.9-3.2-4-6.3-6.1-9.3L245.1 103c-5.3 1.4-10.9 0-14.9-3.7c-11.1-10.2-24.3-17.9-39-22.5c-5.2-1.6-9.2-5.8-10.6-11l-6.9-25.1c-4.5-.5-9.1-.7-13.8-.7s-9.2 .2-13.8 .7zM130.8 10.5C140.3 8.9 150.1 8 160 8s19.7 .9 29.1 2.5c6.1 1.1 11 5.6 12.7 11.5l7.5 27.2c13.1 5.1 25.1 12.1 35.9 20.7l27.3-7.1c6-1.6 12.3 .5 16.3 5.2c5.6 6.7 10.7 13.8 15.2 21.3l.2 .3 0 0 2.9 5.1 .2 .3 0 0c4.1 7.5 7.7 15.4 10.7 23.6c2.1 5.8 .7 12.3-3.6 16.7l-19.8 20.1c1 6.8 1.6 13.7 1.6 20.7s-.5 13.9-1.6 20.7l19.8 20.1c4.3 4.4 5.8 10.9 3.6 16.7c-3 8.2-6.6 16-10.7 23.6l-.2 .3 0 0-3 5.1-.2 .3 0 0c-4.5 7.5-9.6 14.6-15.2 21.3c-4 4.7-10.3 6.8-16.3 5.2l-27.3-7.1c-10.7 8.6-22.8 15.6-35.8 20.7L201.8 330c-1.6 6-6.6 10.5-12.7 11.5c-9.5 1.7-19.2 2.5-29.1 2.5s-19.7-.9-29.2-2.5c-6.1-1.1-11-5.6-12.7-11.5l-7.5-27.2c-13.1-5.1-25.1-12.1-35.8-20.7l-27.3 7.1c-6 1.6-12.3-.5-16.3-5.2c-5.7-6.8-10.9-14-15.4-21.6l-.1-.2 0 0-2.6-4.5-.1-.2 0 0c-4.2-7.6-7.9-15.6-10.9-23.9c-2.1-5.8-.7-12.3 3.6-16.7l19.8-20.1C24.5 189.9 24 183 24 176s.5-13.9 1.6-20.7L5.7 135.2c-4.3-4.4-5.8-10.9-3.6-16.7c3-8.3 6.7-16.3 10.9-23.9l.1-.2 0 0 2.6-4.5 .1-.2 0 0C20.4 82 25.6 74.8 31.3 68c4-4.7 10.3-6.8 16.3-5.2l27.3 7.1c10.7-8.6 22.8-15.6 35.8-20.7L118.2 22c1.6-6 6.6-10.5 12.7-11.5zM104 176a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm56 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM328.7 365.8l25.1 6.9c5.2 1.4 9.4 5.4 11 10.6c4.6 14.6 12.4 27.9 22.5 39c3.7 4 5.1 9.6 3.7 14.9l-6.6 25.2c3.1 2.2 6.3 4.3 9.6 6.3l4.2 2.4c3.3 1.8 6.6 3.5 10 5l18.5-18.3c3.9-3.8 9.4-5.4 14.7-4.2c7.2 1.6 14.8 2.4 22.5 2.4s15.3-.8 22.5-2.4c5.3-1.2 10.8 .4 14.7 4.2l18.5 18.3c3.4-1.5 6.7-3.2 10-5l4.3-2.5c3.3-2 6.5-4.1 9.6-6.3L537 437.1c-1.4-5.3 0-10.9 3.7-14.9c10.2-11.1 17.9-24.3 22.5-39c1.6-5.2 5.8-9.2 11-10.6l25.1-6.9c.5-4.5 .7-9.1 .7-13.8s-.2-9.2-.7-13.8l-25.1-6.9c-5.2-1.4-9.4-5.4-11-10.6c-4.6-14.7-12.4-27.9-22.5-39c-3.7-4-5.1-9.6-3.7-14.9l6.6-25.2c-3-2.2-6.1-4.2-9.3-6.1l-4.8-2.8c-3.2-1.7-6.4-3.4-9.7-4.8l-18.5 18.3c-3.9 3.8-9.4 5.4-14.7 4.2c-7.2-1.6-14.8-2.4-22.6-2.4s-15.3 .8-22.6 2.4c-5.3 1.2-10.8-.4-14.7-4.2l-18.5-18.3c-3.3 1.5-6.5 3.1-9.7 4.8l-4.8 2.8c-3.2 1.9-6.3 4-9.3 6.1l6.6 25.2c1.4 5.3 0 10.9-3.7 14.9c-10.2 11.1-17.9 24.3-22.5 39c-1.6 5.2-5.8 9.2-11 10.6l-25.1 6.9c-.5 4.5-.7 9.1-.7 13.8s.2 9.2 .7 13.8zm-30.2 15.4c-1.7-9.5-2.5-19.2-2.5-29.2s.9-19.7 2.5-29.1c1.1-6.1 5.6-11 11.5-12.7l27.2-7.5c5.1-13.1 12.1-25.1 20.7-35.9l-7.1-27.3c-1.6-6 .5-12.3 5.2-16.3c6.7-5.6 13.8-10.7 21.3-15.2l.3-.2 0 0 5.1-2.9 .3-.2 0 0c7.5-4.1 15.4-7.7 23.6-10.7c5.8-2.1 12.3-.7 16.7 3.6l20.1 19.8c6.8-1 13.7-1.6 20.7-1.6s13.9 .5 20.7 1.6l20.1-19.8c4.4-4.3 10.9-5.8 16.7-3.6c8.2 3 16 6.6 23.6 10.7l.3 .2 0 0 5.1 3 .3 .2 0 0c7.5 4.5 14.6 9.6 21.3 15.2c4.7 4 6.7 10.3 5.2 16.3l-7.1 27.3c8.6 10.7 15.6 22.8 20.7 35.8l27.2 7.5c6 1.6 10.5 6.6 11.5 12.7c1.7 9.5 2.5 19.2 2.5 29.1s-.9 19.7-2.5 29.2c-1.1 6.1-5.6 11-11.5 12.7l-27.2 7.5c-5.1 13.1-12.1 25.1-20.7 35.8l7.1 27.3c1.6 6-.5 12.3-5.2 16.3c-6.8 5.7-14 10.9-21.6 15.4l-.2 .1 0 0-4.5 2.6-.2 .1 0 0c-7.6 4.2-15.6 7.9-23.9 10.9c-5.8 2.1-12.3 .7-16.7-3.6l-20.1-19.8c-6.8 1-13.7 1.6-20.7 1.6s-13.9-.5-20.7-1.6l-20.1 19.8c-4.4 4.3-10.9 5.8-16.7 3.6c-8.3-3-16.3-6.7-23.9-10.9l-.2-.1 0 0-4.5-2.6-.2-.1 0 0c-7.6-4.6-14.9-9.8-21.6-15.4c-4.7-4-6.8-10.3-5.2-16.3l7.1-27.3c-8.6-10.7-15.6-22.8-20.7-35.8L310 393.8c-6-1.6-10.5-6.6-11.5-12.7zM464 408a56 56 0 1 1 0-112 56 56 0 1 1 0 112zm24-56a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z"})}),S=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 14 18",fill:"none",className:"your-custom-class-name",children:(0,i.jsx)("path",{fill:"currentColor",d:"M7.00001 2.25C6.40327 2.25 5.83098 2.48705 5.40902 2.90901C4.98706 3.33097 4.75001 3.90326 4.75001 4.5V7.5C4.75001 8.09674 4.98706 8.66903 5.40902 9.09099C5.83098 9.51295 6.40327 9.75 7.00001 9.75C7.59675 9.75 8.16904 9.51295 8.591 9.09099C9.01296 8.66903 9.25001 8.09674 9.25001 7.5V4.5C9.25001 3.90326 9.01296 3.33097 8.591 2.90901C8.16904 2.48705 7.59675 2.25 7.00001 2.25ZM7.00001 0.75C7.49247 0.75 7.9801 0.846997 8.43507 1.03545C8.89004 1.22391 9.30344 1.50013 9.65166 1.84835C9.99988 2.19657 10.2761 2.60997 10.4646 3.06494C10.653 3.51991 10.75 4.00754 10.75 4.5V7.5C10.75 8.49456 10.3549 9.44839 9.65166 10.1517C8.9484 10.8549 7.99457 11.25 7.00001 11.25C6.00545 11.25 5.05162 10.8549 4.34836 10.1517C3.6451 9.44839 3.25001 8.49456 3.25001 7.5V4.5C3.25001 3.50544 3.6451 2.55161 4.34836 1.84835C5.05162 1.14509 6.00545 0.75 7.00001 0.75ZM0.29126 8.25H1.80251C1.98423 9.49859 2.60941 10.64 3.56368 11.4655C4.51796 12.2909 5.73752 12.7452 6.99926 12.7452C8.261 12.7452 9.48056 12.2909 10.4348 11.4655C11.3891 10.64 12.0143 9.49859 12.196 8.25H13.708C13.5375 9.77153 12.855 11.19 11.7724 12.2727C10.6899 13.3553 9.27152 14.038 7.75001 14.2087V17.25H6.25001V14.2087C4.72836 14.0382 3.30985 13.3556 2.22714 12.2729C1.14444 11.1902 0.461819 9.77165 0.29126 8.25Z"})}),D=()=>(0,i.jsx)(a,{viewBox:"0 0 14 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M15.75 12.25H17.25V13.75H0.75V12.25H2.25V1C2.25 0.801088 2.32902 0.610322 2.46967 0.46967C2.61032 0.329018 2.80109 0.25 3 0.25H10.5C10.6989 0.25 10.8897 0.329018 11.0303 0.46967C11.171 0.610322 11.25 0.801088 11.25 1V12.25H14.25V6.25H12.75V4.75H15C15.1989 4.75 15.3897 4.82902 15.5303 4.96967C15.671 5.11032 15.75 5.30109 15.75 5.5V12.25ZM3.75 1.75V12.25H9.75V1.75H3.75ZM5.25 6.25H8.25V7.75H5.25V6.25ZM5.25 3.25H8.25V4.75H5.25V3.25Z",fill:"currentColor"})}),Q=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:(0,i.jsx)("path",{d:"M40 64c-4.4 0-8 3.6-8 8l0 48c0 4.4 3.6 8 8 8l48 0c4.4 0 8-3.6 8-8l0-48c0-4.4-3.6-8-8-8L40 64zM16 72c0-13.3 10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 48c0 13.3-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24l0-48zM176 88l320 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-320 0c-4.4 0-8-3.6-8-8s3.6-8 8-8zm0 160l320 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-320 0c-4.4 0-8-3.6-8-8s3.6-8 8-8zm0 160l320 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-320 0c-4.4 0-8-3.6-8-8s3.6-8 8-8zM88 224l-48 0c-4.4 0-8 3.6-8 8l0 48c0 4.4 3.6 8 8 8l48 0c4.4 0 8-3.6 8-8l0-48c0-4.4-3.6-8-8-8zM40 208l48 0c13.3 0 24 10.7 24 24l0 48c0 13.3-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24l0-48c0-13.3 10.7-24 24-24zm0 176c-4.4 0-8 3.6-8 8l0 48c0 4.4 3.6 8 8 8l48 0c4.4 0 8-3.6 8-8l0-48c0-4.4-3.6-8-8-8l-48 0zm-24 8c0-13.3 10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 48c0 13.3-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24l0-48z"})}),_=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:(0,i.jsx)("path",{d:"M16 96c0-26.5 21.5-48 48-48l384 0c26.5 0 48 21.5 48 48l0 64L16 160l0-64zm232 80l0 128L16 304l0-128 232 0zm16 0l232 0 0 128-232 0 0-128zM248 320l0 144L64 464c-26.5 0-48-21.5-48-48l0-96 232 0zm16 144l0-144 232 0 0 96c0 26.5-21.5 48-48 48l-184 0zM0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416z"})}),T=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:(0,i.jsx)("path",{fill:"currentColor",d:"M32 112H64V80H32v32zM0 72C0 58.7 10.7 48 24 48H72c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24H64v96h64v-8c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24H152c-13.3 0-24-10.7-24-24v-8H64V384c0 8.8 7.2 16 16 16h48v-8c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24H152c-13.3 0-24-10.7-24-24v-8H80c-26.5 0-48-21.5-48-48V256 144H24c-13.3 0-24-10.7-24-24V72zM160 96c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16zM288 256c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H304c-8.8 0-16-7.2-16-16zm0 160c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H304c-8.8 0-16-7.2-16-16zM160 432h32V400H160v32zm0-192v32h32V240H160z"})}),F=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:(0,i.jsx)("path",{fill:"currentColor",d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"})}),O=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:(0,i.jsx)("path",{fill:"currentColor",d:"M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"})}),M=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:(0,i.jsx)("path",{fill:"currentColor",d:"M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"})}),N=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:(0,i.jsx)("path",{fill:"currentColor",d:"M298.9 267a48.4 48.4 0 0 0 -24.4-6.2q-19.8 0-33.4 13.3t-13.6 33.4q0 21.2 13.3 34.6t33.4 13.4q20.5 0 34.1-13.8T322 307.5A47.1 47.1 0 0 0 315.9 284 44.1 44.1 0 0 0 298.9 267zM0 32V480H448V32zM374.7 405.3h-53.1V381.4h-.7q-15.8 26.2-55.8 26.2-27.6 0-48.9-13.1a88.3 88.3 0 0 1 -32.9-35.8q-11.6-22.7-11.6-50.9 0-27.6 11.8-50.2a89.9 89.9 0 0 1 32.9-35.8q21.2-13.1 47.7-13.1a80.9 80.9 0 0 1 29.7 5.2q13.3 5.2 25 17V153l55.8-12.1z"})}),j=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:(0,i.jsx)("path",{fill:"currentColor",d:"M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"})}),L=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",children:(0,i.jsx)("path",{fill:"currentColor",d:"M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"})}),U=()=>(0,i.jsx)(a,{style:{filter:"grayscale(1)"},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 375.16 375.16",id:"sharechat",children:(0,i.jsx)("g",{"data-name":"Layer 2",children:(0,i.jsxs)("g",{"data-name":"Layer 1",children:[(0,i.jsx)("path",{fill:"#494949",d:"M 375.23,187.61 C 375.23,135.16 299.43,48.44 234.92,14.38 217.79,5.36 201.5,0 187.61,0 170.83,0 150.46,7.76 129.52,20.45 109.07,32.78 88,49.85 69,68.88 49.76,88.13 32.55,109.42 20.14,130.08 7.73,150.74 0,170.9 0,187.54 c 0,66.35 121.27,187.62 187.61,187.62 16.78,0 37,-7.76 58,-20.38 20.44,-12.34 41.6,-29.47 60.7,-48.51 19.1,-19.04 36.38,-40.47 48.72,-61 12.51,-20.85 20.2,-41.02 20.2,-57.66 z"}),(0,i.jsx)("path",{fill:"#40c9ff",d:"M 249.16,126.06 A 706.84,706.84 0 0 0 187.82,68.6 C 169.82,53.8 151.3,40.54 132.76,30.04 113.51,41.67 93.63,57.74 75.65,75.72 l 111.89,111.89 z"}),(0,i.jsx)("path",{fill:"#9661ba",d:"M 232.24,24.25 C 216.1,15.72 200.73,10.72 187.61,10.72 c -15.86,0 -35,7.33 -54.78,19.32 18.54,10.43 37.09,23.76 55.07,38.56 z"}),(0,i.jsx)("path",{fill:"#ffa233",d:"M 245.92,245.92 187.61,187.61 75.72,75.72 C 57.53,93.84 41.32,114 29.61,133.47 67.05,198.19 138.26,263 188.11,303.73 Z"}),(0,i.jsx)("path",{fill:"#ff5a7e",d:"m 242.25,345.26 c -4.51,-3.17 -25.94,-18.54 -54.14,-41.6 C 138.26,263 67.05,198.19 29.61,133.47 17.91,153 10.72,172 10.72,187.61 c 0,62.54 114.36,176.9 176.89,176.9 15.8,0 34.9,-7.33 54.64,-19.25 z"}),(0,i.jsx)("path",{fill:"#ffd91d",d:"M 364.51,187.61 C 364.51,138.19 293.02,56.4 232.24,24.25 L 187.9,68.6 a 707.26,707.26 0 0 1 61.26,57.46 l -61.55,61.55 58.31,58.31 -57.81,57.81 c 28.27,23.06 49.63,38.36 54.14,41.6 19.32,-11.63 39.2,-27.78 57.25,-45.76 18.05,-17.98 34.27,-38.14 46,-57.6 11.82,-19.67 19.01,-38.63 19.01,-54.36 z"})]})})}),R=()=>(0,i.jsx)(a,{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:(0,i.jsx)("path",{d:"M331.5 235.7c2.2 .9 4.2 1.9 6.3 2.8c29.2 14.1 50.6 35.2 61.8 61.4c15.7 36.5 17.2 95.8-30.3 143.2c-36.2 36.2-80.3 52.5-142.6 53h-.3c-70.2-.5-124.1-24.1-160.4-70.2c-32.3-41-48.9-98.1-49.5-169.6V256v-.2C17 184.3 33.6 127.2 65.9 86.2C102.2 40.1 156.2 16.5 226.4 16h.3c70.3 .5 124.9 24 162.3 69.9c18.4 22.7 32 50 40.6 81.7l-40.4 10.8c-7.1-25.8-17.8-47.8-32.2-65.4c-29.2-35.8-73-54.2-130.5-54.6c-57 .5-100.1 18.8-128.2 54.4C72.1 146.1 58.5 194.3 58 256c.5 61.7 14.1 109.9 40.3 143.3c28 35.6 71.2 53.9 128.2 54.4c51.4-.4 85.4-12.6 113.7-40.9c32.3-32.2 31.7-71.8 21.4-95.9c-6.1-14.2-17.1-26-31.9-34.9c-3.7 26.9-11.8 48.3-24.7 64.8c-17.1 21.8-41.4 33.6-72.7 35.3c-23.6 1.3-46.3-4.4-63.9-16c-20.8-13.8-33-34.8-34.3-59.3c-2.5-48.3 35.7-83 95.2-86.4c21.1-1.2 40.9-.3 59.2 2.8c-2.4-14.8-7.3-26.6-14.6-35.2c-10-11.7-25.6-17.7-46.2-17.8H227c-16.6 0-39 4.6-53.3 26.3l-34.4-23.6c19.2-29.1 50.3-45.1 87.8-45.1h.8c62.6 .4 99.9 39.5 103.7 107.7l-.2 .2zm-156 68.8c1.3 25.1 28.4 36.8 54.6 35.3c25.6-1.4 54.6-11.4 59.5-73.2c-13.2-2.9-27.8-4.4-43.4-4.4c-4.8 0-9.6 .1-14.4 .4c-42.9 2.4-57.2 23.2-56.2 41.8l-.1 .1z"})}),P=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 384 512",children:(0,i.jsx)("path",{d:"M0 64C0 46.3 14.3 32 32 32H80 96 224c70.7 0 128 57.3 128 128c0 31.3-11.3 60.1-30 82.3c37.1 22.4 62 63.1 62 109.7c0 70.7-57.3 128-128 128H96 80 32c-17.7 0-32-14.3-32-32s14.3-32 32-32H48V256 96H32C14.3 96 0 81.7 0 64zM224 224c35.3 0 64-28.7 64-64s-28.7-64-64-64H112V224H224zM112 288V416H256c35.3 0 64-28.7 64-64s-28.7-64-64-64H224 112z"})}),H=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 384 512",children:(0,i.jsx)("path",{d:"M128 64c0-17.7 14.3-32 32-32H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H293.3L160 416h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H90.7L224 96H160c-17.7 0-32-14.3-32-32z"})}),z=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 448 512",children:(0,i.jsx)("path",{d:"M16 64c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H128V224c0 53 43 96 96 96s96-43 96-96V96H304c-17.7 0-32-14.3-32-32s14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H384V224c0 88.4-71.6 160-160 160s-160-71.6-160-160V96H48C30.3 96 16 81.7 16 64zM0 448c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32z"})}),V=()=>(0,i.jsx)(a,{viewBox:"0 0 576 512",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",strokeWidth:"45",stroke:"currentColor",children:(0,i.jsx)("path",{d:"M0 256C0 167.6 71.6 96 160 96h80c8.8 0 16 7.2 16 16s-7.2 16-16 16H160C89.3 128 32 185.3 32 256s57.3 128 128 128h80c8.8 0 16 7.2 16 16s-7.2 16-16 16H160C71.6 416 0 344.4 0 256zm576 0c0 88.4-71.6 160-160 160H336c-8.8 0-16-7.2-16-16s7.2-16 16-16h80c70.7 0 128-57.3 128-128s-57.3-128-128-128H336c-8.8 0-16-7.2-16-16s7.2-16 16-16h80c88.4 0 160 71.6 160 160zM152 240H424c8.8 0 16 7.2 16 16s-7.2 16-16 16H152c-8.8 0-16-7.2-16-16s7.2-16 16-16z"})}),G=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 640 512",children:(0,i.jsx)("path",{d:"M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L355.7 253.5 400.2 96H503L497 120.2c-4.3 17.1 6.1 34.5 23.3 38.8s34.5-6.1 38.8-23.3l11-44.1C577.6 61.3 554.7 32 523.5 32H376.1h-.3H204.5c-22 0-41.2 15-46.6 36.4l-6.3 25.2L38.8 5.1zm168 131.7c.1-.3 .2-.7 .3-1L217 96H333.7L301.3 210.8l-94.5-74.1zM327.3 353.9L272.9 311 243.3 416H192c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c17.7 0 32-14.3 32-32s-14.3-32-32-32H309.8l17.6-62.1z"})}),Y=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 512 512",children:(0,i.jsx)("path",{d:"M448 80c8.8 0 16 7.2 16 16V415.8l-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3V96c0-8.8 7.2-16 16-16H448zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"})}),W=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 448 512",children:(0,i.jsx)("path",{d:"M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z"})}),K=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 576 512",children:(0,i.jsx)("path",{d:"M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"})}),q=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 128 512",children:(0,i.jsx)("path",{d:"M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"})}),Z=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 448 512",children:(0,i.jsx)("path",{d:"M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM192 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H160c17.7 0 32 14.3 32 32z"})}),J=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 448 512",children:(0,i.jsx)("path",{d:"M288 64c0 17.7-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32H256c17.7 0 32 14.3 32 32zm0 256c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H256c17.7 0 32 14.3 32 32zM0 192c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"})}),X=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 512 512",children:(0,i.jsx)("path",{d:"M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"})}),$=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 448 512",children:(0,i.jsx)("path",{d:"M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"})}),ee=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 512 512",children:(0,i.jsx)("path",{d:"M256 464a208 208 0 1 1 0-416 208 208 0 1 1 0 416zM256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241L239 345c9.4 9.4 24.6 9.4 33.9 0L377 241c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-87 87-87-87c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z"})}),te=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 384 512",children:(0,i.jsx)("path",{d:"M48 448V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zM216 408V305.9l31 31c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-72-72c-9.4-9.4-24.6-9.4-33.9 0l-72 72c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l31-31V408c0 13.3 10.7 24 24 24s24-10.7 24-24z"})}),re=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 512 512",children:(0,i.jsx)("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"})}),ne=()=>(0,i.jsxs)(a,{viewBox:"0 0 48 49",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsxs)("g",{"clip-path":"url(#clip0_4_44)",children:[(0,i.jsx)("path",{opacity:"0.4",d:"M9.03295 9.84473C8.24899 9.84473 7.49713 10.1562 6.94279 10.7105C6.38845 11.2648 6.07702 12.0167 6.07702 12.8007C6.07702 13.5846 6.38845 14.3365 6.94279 14.8908C7.49713 15.4452 8.24899 15.7566 9.03295 15.7566C9.81691 15.7566 10.5688 15.4452 11.1231 14.8908C11.6775 14.3365 11.9889 13.5846 11.9889 12.8007C11.9889 12.0167 11.6775 11.2648 11.1231 10.7105C10.5688 10.1562 9.81691 9.84473 9.03295 9.84473ZM41.5482 45.3159C44.8089 45.3159 47.46 42.6648 47.46 39.404V21.6684H0.165161V39.404C0.165161 42.6648 2.81626 45.3159 6.07702 45.3159H41.5482Z",fill:"#937FFE"}),(0,i.jsx)("path",{d:"M0.165161 9.84448C0.165161 6.58372 2.81626 3.93262 6.07702 3.93262H41.5482C44.8089 3.93262 47.46 6.58372 47.46 9.84448V21.6682H0.165161V9.84448ZM6.07702 12.8004C6.07702 13.5844 6.38845 14.3362 6.94279 14.8906C7.49713 15.4449 8.24899 15.7563 9.03295 15.7563C9.81691 15.7563 10.5688 15.4449 11.1231 14.8906C11.6775 14.3362 11.9889 13.5844 11.9889 12.8004C11.9889 12.0164 11.6775 11.2646 11.1231 10.7102C10.5688 10.1559 9.81691 9.84448 9.03295 9.84448C8.24899 9.84448 7.49713 10.1559 6.94279 10.7102C6.38845 11.2646 6.07702 12.0164 6.07702 12.8004ZM17.1618 10.5835C15.9332 10.5835 14.9448 11.5718 14.9448 12.8004C14.9448 14.029 15.9332 15.0174 17.1618 15.0174H39.3312C40.5598 15.0174 41.5482 14.029 41.5482 12.8004C41.5482 11.5718 40.5598 10.5835 39.3312 10.5835H17.1618Z",fill:"#937FFE"})]}),(0,i.jsx)("defs",{children:(0,i.jsx)("clipPath",{id:"clip0_4_44",children:(0,i.jsx)("rect",{width:"47.2949",height:"47.2949",fill:"white",transform:"translate(0.165161 0.977051)"})})})]}),ie=()=>(0,i.jsxs)(a,{viewBox:"0 0 52 36",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsxs)("g",{"clip-path":"url(#clip0_7_142)",children:[(0,i.jsx)("path",{d:"M51.8269 31.5668C51.4978 32.214 50.9823 32.3895 50.3241 32.3895C34.2436 32.3785 18.1741 32.3785 2.09353 32.3785C0.919851 32.3785 0.590782 32.0166 0.590782 30.7222C0.590782 30.1189 0.579813 29.5156 0.590782 28.9123C0.61272 28.2103 0.963727 27.8045 1.58896 27.7167C1.77543 27.6948 1.95094 27.6838 2.13741 27.6838C18.185 27.6838 34.2217 27.6838 50.2693 27.6729C50.9274 27.6729 51.4868 27.8045 51.8159 28.4955C51.8269 29.5266 51.8269 30.5467 51.8269 31.5668Z",fill:"#937FFE"}),(0,i.jsx)("path",{d:"M51.7391 6.57134C51.5088 7.24045 51.092 7.45983 50.5325 7.44886C45.1906 7.43789 39.8378 7.43789 34.4959 7.43789C33.6184 7.43789 33.3003 7.043 33.2893 5.93514C33.2893 5.33184 33.2783 4.72855 33.2893 4.13622C33.3112 3.21483 33.6622 2.75413 34.3862 2.75413C39.8049 2.74316 45.2235 2.75413 50.6422 2.74316C51.1578 2.74316 51.5197 3.02836 51.7391 3.60971C51.7391 4.60789 51.7391 5.5951 51.7391 6.57134Z",fill:"#937FFE"}),(0,i.jsx)("path",{opacity:"0.4",d:"M51.7391 18.2864C51.4759 18.9665 51.0371 19.153 50.4667 19.153C45.1687 19.142 39.8597 19.142 34.5617 19.142C33.6184 19.142 33.2893 18.7361 33.2783 17.5405C33.2783 16.9372 33.2674 16.3339 33.2893 15.7416C33.3222 14.8751 33.6732 14.4582 34.3643 14.4582C39.7939 14.4582 45.2236 14.4582 50.6642 14.4473C51.2017 14.4473 51.5307 14.7434 51.7501 15.3248C51.7391 16.312 51.7391 17.2992 51.7391 18.2864Z",fill:"#937FFE"}),(0,i.jsx)("path",{d:"M11.2087 6.86771C11.2087 8.30465 10.046 9.46736 8.6091 9.46736C7.17216 9.46736 6.02042 8.30465 6.02042 6.86771C6.02042 5.43078 7.18313 4.26807 8.62006 4.26807C10.057 4.26807 11.2087 5.44175 11.2087 6.86771Z",fill:"#937FFE"}),(0,i.jsx)("path",{d:"M11.2087 6.86771C11.2087 8.30465 10.046 9.46736 8.6091 9.46736C7.17216 9.46736 6.02042 8.30465 6.02042 6.86771C6.02042 5.43078 7.18313 4.26807 8.62006 4.26807C10.057 4.26807 11.2087 5.44175 11.2087 6.86771Z",fill:"#937FFE"}),(0,i.jsx)("path",{opacity:"0.4",d:"M25.0516 0.012207H4.28733C2.37873 0.012207 0.821136 1.50399 0.821136 3.33581V19.9757C0.821136 21.8076 2.37873 23.3103 4.28733 23.3103H25.0516C26.9602 23.3103 28.5178 21.8185 28.5178 19.9757V3.33581C28.5178 1.50399 26.9712 0.012207 25.0516 0.012207ZM25.9182 19.9757L25.6439 19.6357L18.2838 10.4766C18.0424 10.1695 17.6585 9.99398 17.2527 9.99398C16.8468 9.99398 16.4739 10.1695 16.2216 10.4766L11.7353 16.0598L10.0899 13.8441C9.84861 13.515 9.45372 13.3176 9.0369 13.3176C8.60911 13.3176 8.2252 13.515 7.98388 13.8441L3.6621 19.6796L3.42078 19.9977V3.33581C3.42078 2.87511 3.81567 2.50217 4.28733 2.50217H25.0516C25.5233 2.50217 25.9182 2.87511 25.9182 3.33581V19.9757Z",fill:"#937FFE"}),(0,i.jsx)("path",{d:"M11.2087 7.49271C11.2087 8.92965 10.046 10.0924 8.6091 10.0924C7.17216 10.0924 6.02042 8.92965 6.02042 7.49271C6.02042 6.05578 7.18313 4.89307 8.62006 4.89307C10.057 4.89307 11.2087 6.05578 11.2087 7.49271Z",fill:"#937FFE"})]}),(0,i.jsx)("defs",{children:(0,i.jsx)("clipPath",{id:"clip0_7_142",children:(0,i.jsx)("rect",{width:"51.2361",height:"35.4711",fill:"white",transform:"translate(0.59079 0.012207)"})})})]}),ae=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 576 512",children:(0,i.jsx)("path",{d:"M16 512c-8.8 0-16-7.2-16-16s7.2-16 16-16H32V438.4c0-49.4 22.8-96 61.8-126.3L165.9 256 93.8 199.9C54.8 169.6 32 122.9 32 73.6V32H16C7.2 32 0 24.8 0 16S7.2 0 16 0H48 336h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H352V73.6c0 49.4-22.8 96-61.8 126.3L218.1 256l52.8 41.1c-4.5 10.3-8.1 21.1-10.6 32.3L192 276.3l-78.6 61.1C82.2 361.6 64 398.9 64 438.4V480H296.2c10 12.1 21.7 22.9 34.6 32H48 16zM192 235.7l78.6-61.1c31.2-24.3 49.4-61.5 49.4-101V32H64V73.6c0 39.5 18.2 76.8 49.4 101L192 235.7zM432 480a112 112 0 1 0 0-224 112 112 0 1 0 0 224zm0-256a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm0 64c8.8 0 16 7.2 16 16v48h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H432c-8.8 0-16-7.2-16-16V304c0-8.8 7.2-16 16-16z"})}),oe=()=>(0,i.jsx)(a,{viewBox:"0 0 28 10",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M1.72826 9.55086C1.26417 9.55086 0.873089 9.39113 0.555006 9.07166C0.236923 8.75216 0.0778809 8.35934 0.0778809 7.8932C0.0778809 7.42703 0.236923 7.03664 0.555006 6.72203C0.873089 6.40742 1.26417 6.25011 1.72826 6.25011H15.625C16.0891 6.25011 16.4802 6.40986 16.7983 6.72936C17.1163 7.04884 17.2754 7.44166 17.2754 7.90782C17.2754 8.37396 17.1163 8.76434 16.7983 9.07895C16.4802 9.39356 16.0891 9.55086 15.625 9.55086H1.72826ZM1.72826 3.75011C1.26417 3.75011 0.873089 3.59036 0.555006 3.27086C0.236923 2.95139 0.0778809 2.55857 0.0778809 2.09241C0.0778809 1.62627 0.236923 1.23196 0.555006 0.90949C0.873089 0.587018 1.26417 0.425781 1.72826 0.425781H26.2718C26.7358 0.425781 27.1309 0.589461 27.4568 0.916822C27.7827 1.24416 27.9457 1.64089 27.9457 2.10703C27.9457 2.5732 27.7827 2.96359 27.4568 3.2782C27.1309 3.59281 26.7358 3.75011 26.2718 3.75011H1.72826Z",fill:"#927EFE"})}),se=()=>(0,i.jsx)(a,{viewBox:"0 0 25 28",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M11.0054 27.9851C10.4901 27.9851 10.0561 27.8075 9.7032 27.4524C9.35034 27.0972 9.17391 26.6574 9.17391 26.1331V16.9899H8.06274C5.80266 16.8695 3.89505 15.9962 2.33991 14.3698C0.784772 12.7435 0.00720215 10.792 0.00720215 8.51537C0.00720215 6.14453 0.834466 4.13121 2.48899 2.47541C4.14352 0.819602 6.15061 -0.00830078 8.51024 -0.00830078H22.8231C23.3357 -0.00830078 23.7725 0.172838 24.1335 0.535116C24.4946 0.897366 24.6752 1.33567 24.6752 1.85003C24.6752 2.36439 24.4946 2.79801 24.1335 3.15087C23.7725 3.50373 23.3357 3.68016 22.8231 3.68016H20.1944V26.1331C20.1944 26.6574 20.0133 27.0972 19.651 27.4524C19.2888 27.8075 18.8505 27.9851 18.3361 27.9851C17.8218 27.9851 17.3881 27.8075 17.0353 27.4524C16.6824 27.0972 16.506 26.6574 16.506 26.1331V3.68016H12.8466V26.1331C12.8466 26.6574 12.6686 27.0972 12.3125 27.4524C11.9563 27.8075 11.5207 27.9851 11.0054 27.9851Z",fill:"#927EFE"})}),le=()=>(0,i.jsx)(a,{viewBox:"0 0 34 35",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M17 25.3494C19.213 25.3494 21.0903 24.5785 22.632 23.0369C24.1736 21.4952 24.9444 19.6179 24.9444 17.4049C24.9444 15.192 24.1736 13.3147 22.632 11.773C21.0903 10.2314 19.213 9.46053 17 9.46053C14.787 9.46053 12.9097 10.2314 11.3681 11.773C9.82643 13.3147 9.0556 15.192 9.0556 17.4049C9.0556 19.6179 9.82643 21.4952 11.3681 23.0369C12.9097 24.5785 14.787 25.3494 17 25.3494ZM17 34.0716C14.713 34.0716 12.5556 33.6341 10.5278 32.7591C8.50002 31.8841 6.7315 30.692 5.22222 29.1827C3.71297 27.6735 2.52084 25.9049 1.64584 23.8772C0.770844 21.8494 0.333344 19.692 0.333344 17.4049C0.333344 15.0994 0.770844 12.9327 1.64584 10.9049C2.52084 8.87717 3.71297 7.11328 5.22222 5.61328C6.7315 4.11328 8.50002 2.92578 10.5278 2.05078C12.5556 1.17578 14.713 0.738281 17 0.738281C19.3056 0.738281 21.4722 1.17578 23.5 2.05078C25.5278 2.92578 27.2917 4.11328 28.7917 5.61328C30.2917 7.11328 31.4792 8.87717 32.3542 10.9049C33.2292 12.9327 33.6667 15.0994 33.6667 17.4049C33.6667 19.692 33.2292 21.8494 32.3542 23.8772C31.4792 25.9049 30.2917 27.6735 28.7917 29.1827C27.2917 30.692 25.5278 31.8841 23.5 32.7591C21.4722 33.6341 19.3056 34.0716 17 34.0716ZM17 31.2939C20.8704 31.2939 24.1528 29.942 26.8473 27.2383C29.5417 24.5346 30.8889 21.2568 30.8889 17.4049C30.8889 13.5346 29.5417 10.2522 26.8473 7.5577C24.1528 4.86325 20.8704 3.51603 17 3.51603C13.1481 3.51603 9.87037 4.86325 7.16668 7.5577C4.46295 10.2522 3.11109 13.5346 3.11109 17.4049C3.11109 21.2568 4.46295 24.5346 7.16668 27.2383C9.87037 29.942 13.1481 31.2939 17 31.2939Z",fill:"currentColor"})}),ce=()=>(0,i.jsx)(a,{viewBox:"0 0 34 34",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M17 21.8335L23.2778 15.528H10.6945L17 21.8335ZM17 33.6668C14.713 33.6668 12.5556 33.2293 10.5278 32.3543C8.50002 31.4793 6.7315 30.2872 5.22222 28.778C3.71297 27.2687 2.52084 25.5002 1.64584 23.4724C0.770844 21.4446 0.333344 19.2872 0.333344 17.0002C0.333344 14.6946 0.770844 12.5279 1.64584 10.5002C2.52084 8.47239 3.71297 6.7085 5.22222 5.2085C6.7315 3.7085 8.50002 2.521 10.5278 1.646C12.5556 0.770996 14.713 0.333496 17 0.333496C19.3056 0.333496 21.4722 0.770996 23.5 1.646C25.5278 2.521 27.2917 3.7085 28.7917 5.2085C30.2917 6.7085 31.4792 8.47239 32.3542 10.5002C33.2292 12.5279 33.6667 14.6946 33.6667 17.0002C33.6667 19.2872 33.2292 21.4446 32.3542 23.4724C31.4792 25.5002 30.2917 27.2687 28.7917 28.778C27.2917 30.2872 25.5278 31.4793 23.5 32.3543C21.4722 33.2293 19.3056 33.6668 17 33.6668ZM17 30.8891C20.8704 30.8891 24.1528 29.5372 26.8473 26.8335C29.5417 24.1298 30.8889 20.852 30.8889 17.0002C30.8889 13.1298 29.5417 9.84739 26.8473 7.15291C24.1528 4.45847 20.8704 3.11125 17 3.11125C13.1481 3.11125 9.87037 4.45847 7.16668 7.15291C4.46295 9.84739 3.11109 13.1298 3.11109 17.0002C3.11109 20.852 4.46295 24.1298 7.16668 26.8335C9.87037 29.5372 13.1481 30.8891 17 30.8891Z",fill:"currentColor"})}),Ae=()=>(0,i.jsx)(a,{viewBox:"0 0 38 28",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M9.55555 27.6062C7.12038 27.6062 5.0301 26.7404 3.28471 25.009C1.53935 23.2775 0.666672 21.1941 0.666672 18.759C0.666672 16.5923 1.3426 14.6756 2.69446 13.009C4.0463 11.3423 5.7963 10.3191 7.94446 9.93949C8.5463 7.29136 9.87963 5.13395 11.9445 3.46729C14.0093 1.80062 16.3796 0.967285 19.0555 0.967285C22.2315 0.967285 24.9051 2.09923 27.0764 4.36312C29.2477 6.62701 30.3333 9.35617 30.3333 12.5506V13.2173C32.3056 13.2543 33.9653 13.9603 35.3125 15.3353C36.6597 16.7103 37.3333 18.4025 37.3333 20.4117C37.3333 22.3839 36.6273 24.0761 35.2153 25.4881C33.8032 26.9001 32.1111 27.6062 30.1389 27.6062H20.3889C19.6389 27.6062 18.9884 27.3307 18.4375 26.7798C17.8866 26.2289 17.6111 25.5784 17.6111 24.8284V14.8006L14.4167 17.9672L12.4445 15.995L19 9.43949L25.5555 15.995L23.5833 17.9672L20.3889 14.8006V24.8284H30.1389C31.3611 24.8284 32.4028 24.3979 33.2639 23.5367C34.125 22.6756 34.5556 21.634 34.5556 20.4117C34.5556 19.1895 34.125 18.1478 33.2639 17.2867C32.4028 16.4256 31.3611 15.995 30.1389 15.995H27.5555V12.5506C27.5555 10.134 26.7245 8.06219 25.0625 6.33533C23.4005 4.60847 21.3611 3.74504 18.9445 3.74504C16.5278 3.74504 14.4838 4.60847 12.8125 6.33533C11.1412 8.06219 10.3055 10.134 10.3055 12.5506H9.50001C7.81481 12.5506 6.38426 13.1432 5.20834 14.3284C4.03239 15.5136 3.44442 16.9673 3.44442 18.6895C3.44442 20.3747 4.04099 21.8191 5.23413 23.0228C6.42724 24.2265 7.86771 24.8284 9.55555 24.8284H14.8334V27.6062H9.55555Z",fill:"#927EFE"})}),ue=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor",children:(0,i.jsx)("path",{d:"M11.75 2.25H14.75C14.9489 2.25 15.1397 2.32902 15.2803 2.46967C15.421 2.61032 15.5 2.80109 15.5 3V15C15.5 15.1989 15.421 15.3897 15.2803 15.5303C15.1397 15.671 14.9489 15.75 14.75 15.75H1.25C1.05109 15.75 0.860322 15.671 0.71967 15.5303C0.579018 15.3897 0.5 15.1989 0.5 15V3C0.5 2.80109 0.579018 2.61032 0.71967 2.46967C0.860322 2.32902 1.05109 2.25 1.25 2.25H4.25V0.75H5.75V2.25H10.25V0.75H11.75V2.25ZM10.25 3.75H5.75V5.25H4.25V3.75H2V6.75H14V3.75H11.75V5.25H10.25V3.75ZM14 8.25H2V14.25H14V8.25Z"})}),de=()=>(0,i.jsx)(a,{viewBox:"0 0 34 34",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M18.4722 16.4446V9.69458C18.4722 9.29644 18.3403 8.96543 18.0764 8.70154C17.8125 8.43765 17.4815 8.30571 17.0833 8.30571C16.6852 8.30571 16.3542 8.43765 16.0903 8.70154C15.8264 8.96543 15.6945 9.29644 15.6945 9.69458V16.9863C15.6945 17.1715 15.7269 17.3451 15.7917 17.5071C15.8565 17.6691 15.9537 17.8242 16.0833 17.9724L21.9167 23.9446C22.1852 24.2317 22.5232 24.3705 22.9306 24.3613C23.338 24.352 23.6759 24.2131 23.9445 23.9446C24.213 23.6761 24.3472 23.3428 24.3472 22.9446C24.3472 22.5465 24.213 22.2132 23.9445 21.9446L18.4722 16.4446ZM17 33.6668C14.713 33.6668 12.5556 33.2293 10.5278 32.3543C8.50001 31.4793 6.73148 30.2872 5.2222 28.778C3.71295 27.2687 2.52083 25.5002 1.64583 23.4724C0.770828 21.4446 0.333328 19.2872 0.333328 17.0002C0.333328 14.7131 0.770828 12.5557 1.64583 10.528C2.52083 8.50018 3.71295 6.73165 5.2222 5.22237C6.73148 3.71312 8.50001 2.521 10.5278 1.646C12.5556 0.770996 14.713 0.333496 17 0.333496C19.287 0.333496 21.4444 0.770996 23.4722 1.646C25.5 2.521 27.2685 3.71312 28.7778 5.22237C30.287 6.73165 31.4792 8.50018 32.3542 10.528C33.2292 12.5557 33.6667 14.7131 33.6667 17.0002C33.6667 19.2872 33.2292 21.4446 32.3542 23.4724C31.4792 25.5002 30.287 27.2687 28.7778 28.778C27.2685 30.2872 25.5 31.4793 23.4722 32.3543C21.4444 33.2293 19.287 33.6668 17 33.6668ZM17 30.8891C20.8241 30.8891 24.0949 29.5303 26.8125 26.8127C29.5301 24.0951 30.8889 20.8242 30.8889 17.0002C30.8889 13.1761 29.5301 9.90525 26.8125 7.18766C24.0949 4.47005 20.8241 3.11125 17 3.11125C13.1759 3.11125 9.90508 4.47005 7.1875 7.18766C4.46988 9.90525 3.11108 13.1761 3.11108 17.0002C3.11108 20.8242 4.46988 24.0951 7.1875 26.8127C9.90508 29.5303 13.1759 30.8891 17 30.8891Z",fill:"currentColor"})}),fe=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 448 512",children:(0,i.jsx)("path",{d:"M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"})}),he=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 448 512",children:(0,i.jsx)("path",{d:"M384 48c8.8 0 16 7.2 16 16V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H384zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM80 112v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H96c-8.8 0-16 7.2-16 16zM96 352c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H96zm80-224c0 13.3 10.7 24 24 24H344c13.3 0 24-10.7 24-24s-10.7-24-24-24H200c-13.3 0-24 10.7-24 24zm32 128c0 13.3 10.7 24 24 24H344c13.3 0 24-10.7 24-24s-10.7-24-24-24H232c-13.3 0-24 10.7-24 24zM176 384c0 13.3 10.7 24 24 24H344c13.3 0 24-10.7 24-24s-10.7-24-24-24H200c-13.3 0-24 10.7-24 24zm-4.7-140.7c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L112 257.4 99.3 244.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l24 24c6.2 6.2 16.4 6.2 22.6 0l48-48z"})}),pe=()=>(0,i.jsx)(a,{viewBox:"0 0 14 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M1.25 0.75H14.75C14.9489 0.75 15.1397 0.829018 15.2803 0.96967C15.421 1.11032 15.5 1.30109 15.5 1.5V12.5C15.5 12.6989 15.421 12.8897 15.2803 13.0303C15.1397 13.171 14.9489 13.25 14.75 13.25H1.25C1.05109 13.25 0.860322 13.171 0.71967 13.0303C0.579018 12.8897 0.5 12.6989 0.5 12.5V1.5C0.5 1.30109 0.579018 1.11032 0.71967 0.96967C0.860322 0.829018 1.05109 0.75 1.25 0.75ZM14 3.9285L8.054 9.2535L2 3.912V11.75H14V3.9285ZM2.38325 2.25L8.04575 7.2465L13.6265 2.25H2.38325Z",fill:"currentColor"})}),ge=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 448 512",children:(0,i.jsx)("path",{d:"M144 128v64H304V128c0-44.2-35.8-80-80-80s-80 35.8-80 80zM96 192V128C96 57.3 153.3 0 224 0s128 57.3 128 128v64h32c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H96zM48 256V448c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V256c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16z"})}),me=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 640 512",children:(0,i.jsx)("path",{d:"M576 112c8.8 0 16 7.2 16 16V384c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V128c0-8.8 7.2-16 16-16H576zM64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H576c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm40 120c0 13.3 10.7 24 24 24h8v96H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H184V184c0-13.3-10.7-24-24-24H128c-13.3 0-24 10.7-24 24zm190.6 30.4c5.7-8 17.5-8.6 24-1.2c5.2 5.9 5 14.7-.3 20.5l-72 78c-6.5 7-8.2 17.2-4.3 25.9s12.5 14.4 22 14.4h88c13.3 0 24-10.7 24-24s-10.7-24-24-24H318.8l34.8-37.7c22-23.8 22.4-60.3 1.1-84.7c-26.9-30.7-75.4-28.4-99.2 4.9l-11.1 15.6c-7.7 10.8-5.2 25.8 5.6 33.5s25.8 5.2 33.5-5.6l11.1-15.6z"})}),ve=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 640 512",children:(0,i.jsx)("path",{d:"M48 128V80H168l0 352H120c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H216l0-352H336v48c0 13.3 10.7 24 24 24s24-10.7 24-24V72c0-22.1-17.9-40-40-40H40C17.9 32 0 49.9 0 72v56c0 13.3 10.7 24 24 24s24-10.7 24-24zM360 296V272h96l0 160H424c-13.3 0-24 10.7-24 24s10.7 24 24 24H536c13.3 0 24-10.7 24-24s-10.7-24-24-24H504l0-160h88v24c0 13.3 10.7 24 24 24s24-10.7 24-24V264c0-22.1-17.9-40-40-40H352c-22.1 0-40 17.9-40 40v32c0 13.3 10.7 24 24 24s24-10.7 24-24z"})}),ye=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 576 512",children:(0,i.jsx)("path",{d:"M128 0c13.3 0 24 10.7 24 24V64H296V24c0-13.3 10.7-24 24-24s24 10.7 24 24V64h40c35.3 0 64 28.7 64 64v16 48H432 400 288 48V448c0 8.8 7.2 16 16 16H284.5c12.3 18.8 28 35.1 46.3 48H64c-35.3 0-64-28.7-64-64V192 144 128C0 92.7 28.7 64 64 64h40V24c0-13.3 10.7-24 24-24zM288 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-80c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H448V304c0-8.8-7.2-16-16-16z"})}),be=()=>(0,i.jsx)(a,{viewBox:"0 0 12 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M1.375 8.75H12.625V1.25H1.375V8.75ZM0.125 0.625C0.125 0.279825 0.404825 0 0.75 0H13.25C13.5952 0 13.875 0.279825 13.875 0.625V9.375C13.875 9.72019 13.5952 10 13.25 10H0.75C0.404825 10 0.125 9.72019 0.125 9.375V0.625ZM5.125 3.75C5.125 3.40482 4.84517 3.125 4.5 3.125C4.15483 3.125 3.875 3.40482 3.875 3.75C3.875 4.09519 4.15483 4.375 4.5 4.375C4.84517 4.375 5.125 4.09519 5.125 3.75ZM6.375 3.75C6.375 4.78556 5.53553 5.625 4.5 5.625C3.46447 5.625 2.625 4.78556 2.625 3.75C2.625 2.71447 3.46447 1.875 4.5 1.875C5.53553 1.875 6.375 2.71447 6.375 3.75ZM4.50112 7.5C3.89689 7.5 3.35087 7.74419 2.95433 8.14069L2.07045 7.25681C2.69183 6.63544 3.55206 6.25 4.50112 6.25C5.45019 6.25 6.31044 6.63544 6.93181 7.25681L6.04794 8.14069C5.65138 7.74419 5.10536 7.5 4.50112 7.5ZM9.62944 6.69194L12.1294 4.19194L11.2456 3.30806L9.1875 5.36613L8.06694 4.24556L7.18306 5.12944L8.74556 6.69194L9.1875 7.13387L9.62944 6.69194Z",fill:"currentColor"})}),we=()=>(0,i.jsx)(a,{viewBox:"0 0 512 512",fill:"currentColor",xmlns:"hhttp://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M480 448c0 17.7-14.3 32-32 32H224v16c0 5.5-1 10.9-2.7 16H448c35.3 0 64-28.7 64-64V163.9c0-12.7-5.1-24.9-14.1-33.9L382.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64v71.1l.1-.1c1.5-.7 4-2 6.6-3c8.2-3.4 16.9-4.6 25.3-4V64c0-17.7 14.3-32 32-32H320V144c0 26.5 21.5 48 48 48H480V448zm-.5-288H368c-8.8 0-16-7.2-16-16V32.5c2.8 .7 5.4 2.1 7.4 4.2L475.3 152.6c2.1 2.1 3.5 4.6 4.2 7.4zM249.8 288c0-.8 .2-2.4 3.5-10.4c6.3-15.4 1.6-33.1-11.6-43.2c-6.9-5.3-7.8-6.6-8.2-7.3s-1-2.1-2.2-10.7c-2.2-16.5-15.2-29.4-31.6-31.6c-8.6-1.2-10-1.8-10.7-2.2s-2-1.3-7.3-8.2c-10.2-13.1-27.9-17.9-43.2-11.6c-8 3.3-9.6 3.5-10.4 3.5s-2.4-.2-10.4-3.5c-15.4-6.3-33.1-1.6-43.2 11.6c-5.3 6.9-6.6 7.8-7.3 8.2s-2.1 1-10.7 2.2C39.9 187 27 199.9 24.7 216.4c-1.2 8.6-1.8 10-2.2 10.7s-1.3 2-8.2 7.3C1.2 244.5-3.5 262.2 2.8 277.6c3.3 8 3.5 9.6 3.5 10.4h0c0 .8-.2 2.4-3.5 10.4c-6.3 15.4-1.6 33.1 11.6 43.2c6.9 5.3 7.8 6.6 8.2 7.3s1 2.1 2.2 10.7C27 376.1 39.9 389 56.4 391.3c3.7 .5 6.1 .9 7.6 1.2V496c0 5.9 3.2 11.3 8.5 14.1s11.5 2.5 16.4-.8L128 483.2l39.1 26.1c4.9 3.3 11.2 3.6 16.4 .8s8.5-8.2 8.5-14.1V392.5c1.6-.3 3.9-.7 7.6-1.2c16.5-2.2 29.4-15.2 31.6-31.6c1.2-8.6 1.8-10 2.2-10.7s1.3-2 8.2-7.3c13.1-10.2 17.9-27.9 11.6-43.2c-3.3-8-3.5-9.6-3.5-10.4h0zM96 466.1V415.2c7.1 1.5 14.6 .9 21.6-2c8-3.3 9.6-3.5 10.4-3.5s2.4 .2 10.4 3.5c7 2.9 14.5 3.4 21.6 2v50.9l-23.1-15.4c-5.4-3.6-12.4-3.6-17.8 0L96 466.1zM38.2 288h0c0-8.1-2.9-15.4-5.8-22.5c-.8-2.1-.2-4.4 1.6-5.8c6.1-4.7 12.3-9.6 16.3-16.6s5.2-14.8 6.2-22.4c.3-2.2 2-3.9 4.2-4.2c7.7-1 15.4-2.2 22.4-6.2s11.8-10.2 16.6-16.3c1.4-1.8 3.7-2.4 5.8-1.6c7.1 2.9 14.4 5.8 22.5 5.8s15.4-2.9 22.5-5.8c2.1-.8 4.4-.2 5.8 1.6c4.7 6.1 9.6 12.3 16.6 16.3s14.8 5.2 22.4 6.2c2.2 .3 3.9 2 4.2 4.2c1 7.7 2.2 15.4 6.2 22.4s10.2 11.8 16.3 16.6c1.8 1.4 2.4 3.7 1.6 5.8c-2.9 7.1-5.8 14.4-5.8 22.5h0c0 8.1 2.9 15.4 5.8 22.5c.8 2.1 .2 4.4-1.6 5.8c-6.1 4.7-12.3 9.6-16.3 16.6s-5.2 14.8-6.2 22.4c-.3 2.2-2 3.9-4.2 4.2c-7.7 1-15.4 2.2-22.4 6.2s-11.8 10.2-16.6 16.3c-1.4 1.8-3.7 2.4-5.8 1.6c-7.1-2.9-14.4-5.8-22.5-5.8s-15.4 2.9-22.5 5.8c-2.1 .8-4.4 .2-5.8-1.6c-4.7-6.1-9.6-12.3-16.6-16.3s-14.8-5.2-22.4-6.2c-2.2-.3-3.9-2-4.2-4.2c-1-7.7-2.2-15.4-6.2-22.4s-10.2-11.8-16.3-16.6c-1.8-1.4-2.4-3.7-1.6-5.8c2.9-7.1 5.8-14.4 5.8-22.5z",fill:"currentColor"})}),xe=()=>(0,i.jsx)(a,{viewBox:"0 0 448 512",fill:"currentColor",xmlns:"hhttp://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M64 64C46.3 64 32 78.3 32 96V416c0 17.7 14.3 32 32 32H384c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm136.7 73.8c6.5-24.6 28.7-41.8 54.2-41.8H248c35.5 0 64 29 64 64.3c0 24-13.4 46.2-34.9 57.2L240 268.3V288c0 8.8-7.2 16-16 16s-16-7.2-16-16V258.5c0-6 3.4-11.5 8.7-14.3l45.8-23.4c10.7-5.4 17.5-16.6 17.5-28.7c0-17.8-14.4-32.3-32-32.3H190.9c-10.9 0-20.5 7.4-23.2 17.9l-.2 .7c-2.2 8.5-11 13.7-19.5 11.4s-13.7-11-11.4-19.5l.2-.7zM200 352a24 24 0 1 1 48 0 24 24 0 1 1\xa0-48\xa00z",fill:"currentColor"})}),Ce=()=>(0,i.jsx)(a,{viewBox:"00 0 576 512",fill:"currentColor",xmlns:"hhttp://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M64 96c-17.7 0-32 14.3-32 32V384c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H64zM0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64v47.2V336.8 384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM519.4 411.3L416 354.4V317.9l118.8 65.4c.9 .5 1.9 .8 3 .8c3.4 0 6.2-2.8 6.2-6.2V134.2c0-3.4-2.8-6.2-6.2-6.2c-1 0-2.1 .3-3 .8L416 194.1V157.6l103.4-56.9c5.6-3.1 12-4.7 18.4-4.7c21.1 0 38.2 17.1 38.2 38.2V377.8c0 21.1-17.1 38.2-38.2 38.2c-6.4 0-12.8-1.6-18.4-4.7z",fill:"currentColor"})}),Be=()=>(0,i.jsx)(a,{fill:"currentColor",height:"21px",version:"1.1",viewBox:"0 0 14 21",children:(0,i.jsx)("g",{fill:"currentColor",fillRule:"evenodd",id:"Page-1",stroke:"none",strokeWidth:"1",children:(0,i.jsx)("g",{fill:"currentColor",id:"Icons-AV",transform:"translate(-3.000000, -43.000000)",children:(0,i.jsx)("g",{id:"mic",transform:"translate(3.000000, 43.500000)",children:(0,i.jsx)("path",{d:"M7,12 C8.7,12 10,10.7 10,9 L10,3 C10,1.3 8.7,0 7,0 C5.3,0 4,1.3 4,3 L4,9 C4,10.7 5.3,12 7,12 L7,12 Z M12.3,9 C12.3,12 9.8,14.1 7,14.1 C4.2,14.1 1.7,12 1.7,9 L0,9 C0,12.4 2.7,15.2 6,15.7 L6,19 L8,19 L8,15.7 C11.3,15.2 14,12.4 14,9 L12.3,9 L12.3,9 Z",id:"Shape"})})})})}),Ee=()=>(0,i.jsx)(a,{viewBox:"0 0 12 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M3.5 2C3.5 2.69036 2.94036 3.25 2.25 3.25C1.55964 3.25 1 2.69036 1 2C1 1.30964 1.55964 0.75 2.25 0.75C2.94036 0.75 3.5 1.30964 3.5 2ZM1.625 9.5V13.25H0.375V5.75C0.375 4.71447 1.21447 3.875 2.25 3.875C2.76287 3.875 3.22764 4.08091 3.56616 4.41458L5.05019 5.81606L6.49569 4.37056L7.37956 5.25444L5.07506 7.55894L4.125 6.66169V13.25H2.875V9.5H1.625ZM2.25 5.125C1.90482 5.125 1.625 5.40483 1.625 5.75V8.25H2.875V5.75C2.875 5.40483 2.59518 5.125 2.25 5.125ZM10.375 2.625H4.75V1.375H11C11.3452 1.375 11.625 1.65482 11.625 2V8.875C11.625 9.22019 11.3452 9.5 11 9.5H8.85987L10.6246 13.25H9.24306L7.47838 9.5H4.75V8.25H10.375V2.625Z",fill:"currentColor"})}),ke=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12 14",fill:"currentColor",children:(0,i.jsx)("path",{d:"M3.5 2C3.5 2.69036 2.94036 3.25 2.25 3.25C1.55964 3.25 1 2.69036 1 2C1 1.30964 1.55964 0.75 2.25 0.75C2.94036 0.75 3.5 1.30964 3.5 2ZM1.625 9.5V13.25H0.375V5.75C0.375 4.71447 1.21447 3.875 2.25 3.875C2.76287 3.875 3.22764 4.08091 3.56616 4.41458L5.05019 5.81606L6.49569 4.37056L7.37956 5.25444L5.07506 7.55894L4.125 6.66169V13.25H2.875V9.5H1.625ZM2.25 5.125C1.90482 5.125 1.625 5.40483 1.625 5.75V8.25H2.875V5.75C2.875 5.40483 2.59518 5.125 2.25 5.125ZM10.375 2.625H4.75V1.375H11C11.3452 1.375 11.625 1.65482 11.625 2V8.875C11.625 9.22019 11.3452 9.5 11 9.5H8.85987L10.6246 13.25H9.24306L7.47838 9.5H4.75V8.25H10.375V2.625Z"})}),Ie=()=>(0,i.jsx)(a,{viewBox:"0 0 16 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M0.5 1C0.5 0.801088 0.579018 0.610322 0.71967 0.46967C0.860322 0.329018 1.05109 0.25 1.25 0.25H14.75C14.9489 0.25 15.1397 0.329018 15.2803 0.46967C15.421 0.610322 15.5 0.801088 15.5 1V5.125C15.0027 5.125 14.5258 5.32254 14.1742 5.67417C13.8225 6.02581 13.625 6.50272 13.625 7C13.625 7.49728 13.8225 7.97419 14.1742 8.32582C14.5258 8.67746 15.0027 8.875 15.5 8.875V13C15.5 13.1989 15.421 13.3897 15.2803 13.5303C15.1397 13.671 14.9489 13.75 14.75 13.75H1.25C1.05109 13.75 0.860322 13.671 0.71967 13.5303C0.579018 13.3897 0.5 13.1989 0.5 13V1ZM5.06375 12.25C5.14105 12.0303 5.28466 11.8399 5.47476 11.7053C5.66485 11.5706 5.89205 11.4983 6.125 11.4983C6.35795 11.4983 6.58515 11.5706 6.77524 11.7053C6.96534 11.8399 7.10895 12.0303 7.18625 12.25H14V10.024C13.4366 9.74478 12.9624 9.31371 12.6309 8.77941C12.2993 8.2451 12.1237 7.6288 12.1237 7C12.1237 6.3712 12.2993 5.7549 12.6309 5.22059C12.9624 4.68629 13.4366 4.25522 14 3.976V1.75H7.18625C7.10895 1.96975 6.96534 2.16008 6.77524 2.29472C6.58515 2.42936 6.35795 2.50167 6.125 2.50167C5.89205 2.50167 5.66485 2.42936 5.47476 2.29472C5.28466 2.16008 5.14105 1.96975 5.06375 1.75H2V12.25H5.06375ZM6.125 6.25C5.82663 6.25 5.54048 6.13147 5.3295 5.9205C5.11853 5.70952 5 5.42337 5 5.125C5 4.82663 5.11853 4.54048 5.3295 4.3295C5.54048 4.11853 5.82663 4 6.125 4C6.42337 4 6.70952 4.11853 6.9205 4.3295C7.13147 4.54048 7.25 4.82663 7.25 5.125C7.25 5.42337 7.13147 5.70952 6.9205 5.9205C6.70952 6.13147 6.42337 6.25 6.125 6.25ZM6.125 10C5.82663 10 5.54048 9.88147 5.3295 9.6705C5.11853 9.45952 5 9.17337 5 8.875C5 8.57663 5.11853 8.29048 5.3295 8.0795C5.54048 7.86853 5.82663 7.75 6.125 7.75C6.42337 7.75 6.70952 7.86853 6.9205 8.0795C7.13147 8.29048 7.25 8.57663 7.25 8.875C7.25 9.17337 7.13147 9.45952 6.9205 9.6705C6.70952 9.88147 6.42337 10 6.125 10Z",fill:"currentColor"})}),Se=()=>(0,i.jsx)(a,{viewBox:"0 0 14 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M8 15.5C3.85775 15.5 0.5 12.1423 0.5 8C0.5 3.85775 3.85775 0.5 8 0.5C12.1423 0.5 15.5 3.85775 15.5 8C15.5 12.1423 12.1423 15.5 8 15.5ZM8 14C9.5913 14 11.1174 13.3679 12.2426 12.2426C13.3679 11.1174 14 9.5913 14 8C14 6.4087 13.3679 4.88258 12.2426 3.75736C11.1174 2.63214 9.5913 2 8 2C6.4087 2 4.88258 2.63214 3.75736 3.75736C2.63214 4.88258 2 6.4087 2 8C2 9.5913 2.63214 11.1174 3.75736 12.2426C4.88258 13.3679 6.4087 14 8 14ZM5.375 9.5H9.5C9.59946 9.5 9.69484 9.46049 9.76517 9.39017C9.83549 9.31984 9.875 9.22446 9.875 9.125C9.875 9.02554 9.83549 8.93016 9.76517 8.85983C9.69484 8.78951 9.59946 8.75 9.5 8.75H6.5C6.00272 8.75 5.52581 8.55246 5.17417 8.20083C4.82254 7.84919 4.625 7.37228 4.625 6.875C4.625 6.37772 4.82254 5.90081 5.17417 5.54917C5.52581 5.19754 6.00272 5 6.5 5H7.25V3.5H8.75V5H10.625V6.5H6.5C6.40054 6.5 6.30516 6.53951 6.23483 6.60983C6.16451 6.68016 6.125 6.77554 6.125 6.875C6.125 6.97446 6.16451 7.06984 6.23483 7.14017C6.30516 7.21049 6.40054 7.25 6.5 7.25H9.5C9.99728 7.25 10.4742 7.44754 10.8258 7.79917C11.1775 8.15081 11.375 8.62772 11.375 9.125C11.375 9.62228 11.1775 10.0992 10.8258 10.4508C10.4742 10.8025 9.99728 11 9.5 11H8.75V12.5H7.25V11H5.375V9.5Z",fill:"currentColor"})}),De=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"none",children:(0,i.jsx)("path",{fill:"currentColor",d:"M11.75 2.25H14.75C14.9489 2.25 15.1397 2.32902 15.2803 2.46967C15.421 2.61032 15.5 2.80109 15.5 3V15C15.5 15.1989 15.421 15.3897 15.2803 15.5303C15.1397 15.671 14.9489 15.75 14.75 15.75H1.25C1.05109 15.75 0.860322 15.671 0.71967 15.5303C0.579018 15.3897 0.5 15.1989 0.5 15V3C0.5 2.80109 0.579018 2.61032 0.71967 2.46967C0.860322 2.32902 1.05109 2.25 1.25 2.25H4.25V0.75H5.75V2.25H10.25V0.75H11.75V2.25ZM2 6.75V14.25H14V6.75H2ZM3.5 9.75H7.25V12.75H3.5V9.75Z"})}),Qe=()=>(0,i.jsx)(a,{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M4.75 7V16H15.25V7H4.75ZM4.75 5.5H15.25V4H4.75V5.5ZM16 17.5H4C3.80109 17.5 3.61032 17.421 3.46967 17.2803C3.32902 17.1397 3.25 16.9489 3.25 16.75V3.25C3.25 3.05109 3.32902 2.86032 3.46967 2.71967C3.61032 2.57902 3.80109 2.5 4 2.5H16C16.1989 2.5 16.3897 2.57902 16.5303 2.71967C16.671 2.86032 16.75 3.05109 16.75 3.25V16.75C16.75 16.9489 16.671 17.1397 16.5303 17.2803C16.3897 17.421 16.1989 17.5 16 17.5ZM6.25 8.5H9.25V11.5H6.25V8.5ZM6.25 13H13.75V14.5H6.25V13ZM10.75 9.25H13.75V10.75H10.75V9.25Z",fill:"currentColor"})}),_e=()=>(0,i.jsx)(a,{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M14.75 7.7345V14.75C14.75 14.9489 14.671 15.1397 14.5303 15.2803C14.3897 15.421 14.1989 15.5 14 15.5H2C1.80109 15.5 1.61033 15.421 1.46967 15.2803C1.32902 15.1397 1.25 14.9489 1.25 14.75V7.7345C0.76574 7.18697 0.498918 6.48096 0.500003 5.75V1.25C0.500003 1.05109 0.579021 0.860322 0.719673 0.71967C0.860325 0.579018 1.05109 0.5 1.25 0.5H14.75C14.9489 0.5 15.1397 0.579018 15.2803 0.71967C15.421 0.860322 15.5 1.05109 15.5 1.25V5.75C15.5 6.5105 15.2165 7.205 14.75 7.7345ZM13.25 8.6555C12.7136 8.79329 12.1496 8.78021 11.6202 8.61768C11.0908 8.45516 10.6167 8.14952 10.25 7.7345C9.96877 8.05406 9.6226 8.30995 9.23459 8.48506C8.84659 8.66018 8.42569 8.75051 8 8.75C7.57431 8.75051 7.15342 8.66018 6.76541 8.48506C6.37741 8.30995 6.03124 8.05406 5.75 7.7345C5.38424 8.1507 4.9101 8.45718 4.38042 8.6198C3.85073 8.78241 3.2863 8.79477 2.75 8.6555V14H13.25V8.6555ZM9.5 5.75C9.5 5.55109 9.57902 5.36032 9.71967 5.21967C9.86033 5.07902 10.0511 5 10.25 5C10.4489 5 10.6397 5.07902 10.7803 5.21967C10.921 5.36032 11 5.55109 11 5.75C11 6.14782 11.158 6.52936 11.4393 6.81066C11.7206 7.09196 12.1022 7.25 12.5 7.25C12.8978 7.25 13.2794 7.09196 13.5607 6.81066C13.842 6.52936 14 6.14782 14 5.75V2H2V5.75C2 6.14782 2.15804 6.52936 2.43934 6.81066C2.72065 7.09196 3.10218 7.25 3.5 7.25C3.89783 7.25 4.27936 7.09196 4.56066 6.81066C4.84197 6.52936 5 6.14782 5 5.75C5 5.55109 5.07902 5.36032 5.21967 5.21967C5.36033 5.07902 5.55109 5 5.75 5C5.94892 5 6.13968 5.07902 6.28033 5.21967C6.42099 5.36032 6.5 5.55109 6.5 5.75C6.5 6.14782 6.65804 6.52936 6.93934 6.81066C7.22065 7.09196 7.60218 7.25 8 7.25C8.39783 7.25 8.77936 7.09196 9.06066 6.81066C9.34197 6.52936 9.5 6.14782 9.5 5.75Z",fill:"currentColor"})}),Te=()=>(0,i.jsx)(a,{viewBox:"0 0 17 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M7.25 0.40725C7.4975 0.3855 7.74725 0.375 8 0.375C12.7633 0.375 16.625 4.23675 16.625 9C16.625 9.25275 16.6145 9.5025 16.5928 9.75H15.4633C15.0868 13.5398 11.8888 16.5 8 16.5C3.85775 16.5 0.5 13.1423 0.5 9C0.5 5.11125 3.46025 1.91325 7.25 1.5375V0.4065V0.40725ZM7.25 9.75V3.0465C5.73703 3.23901 4.35414 4.0004 3.38239 5.17591C2.41064 6.35143 1.92296 7.85285 2.01847 9.37502C2.11397 10.8972 2.7855 12.3259 3.89656 13.3707C5.00762 14.4155 6.47484 14.9981 8 15C9.46146 15 10.8727 14.4666 11.9688 13.5C13.0649 12.5334 13.7707 11.2 13.9535 9.75H7.25ZM15.086 8.25C14.9141 6.62843 14.1913 5.11485 13.0382 3.96179C11.8852 2.80874 10.3716 2.08594 8.75 1.914V8.25H15.086Z",fill:"currentColor"})}),Fe=()=>(0,i.jsx)(a,{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M16.75 10.9315V16H17.5V17.5H2.5V16H3.25V10.9315C2.78828 10.6233 2.40978 10.2059 2.14811 9.71632C1.88645 9.22674 1.74969 8.68012 1.75 8.125C1.75 7.50475 1.918 6.907 2.22475 6.39775L4.25875 2.875C4.32457 2.76099 4.41925 2.66631 4.53326 2.60049C4.64727 2.53466 4.7766 2.5 4.90825 2.5H15.0925C15.2241 2.5 15.3535 2.53466 15.4675 2.60049C15.5815 2.66631 15.6762 2.76099 15.742 2.875L17.7685 6.3865C18.2159 7.12965 18.3597 8.01665 18.1701 8.8631C17.9804 9.70956 17.4718 10.4504 16.75 10.9315ZM15.25 11.479C14.7343 11.5368 14.2123 11.4749 13.7244 11.298C13.2366 11.1211 12.7962 10.834 12.4375 10.459C12.1227 10.7883 11.7443 11.0504 11.3254 11.2294C10.9065 11.4085 10.4556 11.5008 10 11.5008C9.54451 11.501 9.0937 11.4089 8.67477 11.2301C8.25584 11.0513 7.87747 10.7895 7.5625 10.4605C7.20372 10.8353 6.76328 11.1223 6.27547 11.2991C5.78765 11.4759 5.26562 11.5377 4.75 11.4797V16H15.25V11.4797V11.479ZM5.34175 4L3.517 7.15975C3.33968 7.59786 3.33436 8.08677 3.5021 8.52864C3.66984 8.9705 3.99826 9.33272 4.42164 9.5428C4.84501 9.75287 5.33211 9.79531 5.78544 9.66161C6.23876 9.52792 6.62488 9.22795 6.8665 8.82175C7.11775 8.194 8.0065 8.194 8.2585 8.82175C8.39747 9.17006 8.6377 9.4687 8.94814 9.67908C9.25859 9.88946 9.62499 10.0019 10 10.0019C10.375 10.0019 10.7414 9.88946 11.0519 9.67908C11.3623 9.4687 11.6025 9.17006 11.7415 8.82175C11.9928 8.194 12.8815 8.194 13.1335 8.82175C13.2308 9.06134 13.3767 9.2782 13.5619 9.45871C13.747 9.63921 13.9676 9.77946 14.2096 9.87064C14.4515 9.96182 14.7098 10.0019 14.968 9.98851C15.2263 9.97508 15.479 9.90837 15.7102 9.79257C15.9414 9.67677 16.1462 9.5144 16.3117 9.31565C16.4771 9.1169 16.5997 8.88607 16.6716 8.63768C16.7435 8.38929 16.7633 8.1287 16.7297 7.87229C16.6961 7.61588 16.6098 7.3692 16.4762 7.14775L14.6575 4H5.3425H5.34175Z",fill:"currentColor"})}),Oe=()=>(0,i.jsx)(a,{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M6.25 0H13.75V1.5H6.25V0ZM6.25 3H10.75V4.5H6.25V3ZM6.25 7.5H13.75V9H6.25V7.5ZM6.25 10.5H10.75V12H6.25V10.5ZM0.25 0H4.75V4.5H0.25V0ZM1.75 1.5V3H3.25V1.5H1.75ZM0.25 7.5H4.75V12H0.25V7.5ZM1.75 9V10.5H3.25V9H1.75Z",fill:"currentColor"})}),Me=()=>(0,i.jsx)(a,{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M2.5 17.5C2.5 15.9087 3.13214 14.3826 4.25736 13.2574C5.38258 12.1321 6.9087 11.5 8.5 11.5C10.0913 11.5 11.6174 12.1321 12.7426 13.2574C13.8679 14.3826 14.5 15.9087 14.5 17.5H13C13 16.3065 12.5259 15.1619 11.682 14.318C10.8381 13.4741 9.69347 13 8.5 13C7.30653 13 6.16193 13.4741 5.31802 14.318C4.47411 15.1619 4 16.3065 4 17.5H2.5ZM8.5 10.75C6.01375 10.75 4 8.73625 4 6.25C4 3.76375 6.01375 1.75 8.5 1.75C10.9862 1.75 13 3.76375 13 6.25C13 8.73625 10.9862 10.75 8.5 10.75ZM8.5 9.25C10.1575 9.25 11.5 7.9075 11.5 6.25C11.5 4.5925 10.1575 3.25 8.5 3.25C6.8425 3.25 5.5 4.5925 5.5 6.25C5.5 7.9075 6.8425 9.25 8.5 9.25ZM14.713 12.0273C15.767 12.5019 16.6615 13.2709 17.2889 14.2418C17.9164 15.2126 18.2501 16.344 18.25 17.5H16.75C16.7502 16.633 16.4999 15.7844 16.0293 15.0562C15.5587 14.328 14.8878 13.7512 14.0972 13.3953L14.7123 12.0273H14.713ZM14.197 3.55975C14.9526 3.87122 15.5987 4.40015 16.0533 5.07942C16.5078 5.75869 16.7503 6.55768 16.75 7.375C16.7503 8.40425 16.3658 9.39642 15.6719 10.1566C14.978 10.9168 14.025 11.3901 13 11.4835V9.97375C13.5557 9.89416 14.0713 9.63851 14.471 9.24434C14.8707 8.85017 15.1335 8.33824 15.2209 7.7837C15.3082 7.22916 15.2155 6.66122 14.9563 6.16327C14.6971 5.66531 14.2851 5.26356 13.7808 5.017L14.197 3.55975Z",fill:"currentColor"})}),Ne=()=>(0,i.jsx)(a,{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M4.75 3.25V15.25H16.75V16.75H3.25V3.25H4.75ZM15.955 5.455L17.545 7.045L13 11.5915L10.75 9.3415L7.795 12.2965L6.205 10.705L10.75 6.16L13 8.41L15.955 5.455Z",fill:"currentColor"})}),je=()=>(0,i.jsx)(a,{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M8.125 13.125C8.125 13.125 12.5 13.75 14.375 15.625H15C15.3452 15.625 15.625 15.3452 15.625 15V11.2106C16.1641 11.0719 16.5625 10.5824 16.5625 10C16.5625 9.41756 16.1641 8.92812 15.625 8.78937V5C15.625 4.65483 15.3452 4.375 15 4.375H14.375C12.5 6.25 8.125 6.875 8.125 6.875H5.625C4.93464 6.875 4.375 7.43464 4.375 8.125V11.875C4.375 12.5654 4.93464 13.125 5.625 13.125H6.25L6.875 16.25H8.125V13.125ZM9.375 7.91325C9.80206 7.82162 10.3297 7.69496 10.8996 7.52733C11.9484 7.21884 13.2812 6.73289 14.375 5.98411V14.0159C13.2812 13.2671 11.9484 12.7812 10.8996 12.4727C10.3297 12.3051 9.80206 12.1784 9.375 12.0868V7.91325ZM5.625 8.125H8.125V11.875H5.625V8.125Z",fill:"#868C98"})}),Le=()=>(0,i.jsx)(a,{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M10 9.25C10.9946 9.25 11.9484 9.64509 12.6517 10.3483C13.3549 11.0516 13.75 12.0054 13.75 13V17.5H12.25V13C12.25 12.4261 12.0308 11.8739 11.637 11.4563C11.2433 11.0387 10.7049 10.7874 10.132 10.7537L10 10.75C9.42609 10.75 8.87386 10.9692 8.4563 11.363C8.03874 11.7567 7.78742 12.2951 7.75375 12.868L7.75 13V17.5H6.25V13C6.25 12.0054 6.64509 11.0516 7.34835 10.3483C8.05161 9.64509 9.00544 9.25 10 9.25ZM5.125 11.5C5.33425 11.5 5.5375 11.5247 5.7325 11.5705C5.60427 11.9523 5.52833 12.3496 5.50675 12.7517L5.5 13V13.0645C5.41379 13.0337 5.32412 13.0135 5.233 13.0045L5.125 13C4.84534 13 4.57571 13.1042 4.36869 13.2922C4.16166 13.4802 4.0321 13.7386 4.00525 14.017L4 14.125V17.5H2.5V14.125C2.5 13.4288 2.77656 12.7611 3.26884 12.2688C3.76113 11.7766 4.42881 11.5 5.125 11.5ZM14.875 11.5C15.5712 11.5 16.2389 11.7766 16.7312 12.2688C17.2234 12.7611 17.5 13.4288 17.5 14.125V17.5H16V14.125C16 13.8453 15.8958 13.5757 15.7078 13.3687C15.5198 13.1617 15.2614 13.0321 14.983 13.0052L14.875 13C14.7437 13 14.6178 13.0225 14.5 13.0637V13C14.5 12.5005 14.419 12.0205 14.2682 11.572C14.4625 11.5247 14.6657 11.5 14.875 11.5ZM5.125 7C5.62228 7 6.09919 7.19754 6.45083 7.54917C6.80246 7.90081 7 8.37772 7 8.875C7 9.37228 6.80246 9.84919 6.45083 10.2008C6.09919 10.5525 5.62228 10.75 5.125 10.75C4.62772 10.75 4.15081 10.5525 3.79917 10.2008C3.44754 9.84919 3.25 9.37228 3.25 8.875C3.25 8.37772 3.44754 7.90081 3.79917 7.54917C4.15081 7.19754 4.62772 7 5.125 7ZM14.875 7C15.3723 7 15.8492 7.19754 16.2008 7.54917C16.5525 7.90081 16.75 8.37772 16.75 8.875C16.75 9.37228 16.5525 9.84919 16.2008 10.2008C15.8492 10.5525 15.3723 10.75 14.875 10.75C14.3777 10.75 13.9008 10.5525 13.5492 10.2008C13.1975 9.84919 13 9.37228 13 8.875C13 8.37772 13.1975 7.90081 13.5492 7.54917C13.9008 7.19754 14.3777 7 14.875 7ZM5.125 8.5C5.02554 8.5 4.93016 8.53951 4.85984 8.60983C4.78951 8.68016 4.75 8.77554 4.75 8.875C4.75 8.97446 4.78951 9.06984 4.85984 9.14017C4.93016 9.21049 5.02554 9.25 5.125 9.25C5.22446 9.25 5.31984 9.21049 5.39016 9.14017C5.46049 9.06984 5.5 8.97446 5.5 8.875C5.5 8.77554 5.46049 8.68016 5.39016 8.60983C5.31984 8.53951 5.22446 8.5 5.125 8.5ZM14.875 8.5C14.7755 8.5 14.6802 8.53951 14.6098 8.60983C14.5395 8.68016 14.5 8.77554 14.5 8.875C14.5 8.97446 14.5395 9.06984 14.6098 9.14017C14.6802 9.21049 14.7755 9.25 14.875 9.25C14.9745 9.25 15.0698 9.21049 15.1402 9.14017C15.2105 9.06984 15.25 8.97446 15.25 8.875C15.25 8.77554 15.2105 8.68016 15.1402 8.60983C15.0698 8.53951 14.9745 8.5 14.875 8.5ZM10 2.5C10.7956 2.5 11.5587 2.81607 12.1213 3.37868C12.6839 3.94129 13 4.70435 13 5.5C13 6.29565 12.6839 7.05871 12.1213 7.62132C11.5587 8.18393 10.7956 8.5 10 8.5C9.20435 8.5 8.44129 8.18393 7.87868 7.62132C7.31607 7.05871 7 6.29565 7 5.5C7 4.70435 7.31607 3.94129 7.87868 3.37868C8.44129 2.81607 9.20435 2.5 10 2.5ZM10 4C9.60218 4 9.22064 4.15804 8.93934 4.43934C8.65804 4.72064 8.5 5.10218 8.5 5.5C8.5 5.89782 8.65804 6.27936 8.93934 6.56066C9.22064 6.84196 9.60218 7 10 7C10.3978 7 10.7794 6.84196 11.0607 6.56066C11.342 6.27936 11.5 5.89782 11.5 5.5C11.5 5.10218 11.342 4.72064 11.0607 4.43934C10.7794 4.15804 10.3978 4 10 4Z",fill:"currentColor"})}),Ue=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 17 17",fill:"currentColor",children:(0,i.jsx)("path",{d:"M0.5 16.5C0.5 14.9087 1.13214 13.3826 2.25736 12.2574C3.38258 11.1321 4.9087 10.5 6.5 10.5C8.0913 10.5 9.61742 11.1321 10.7426 12.2574C11.8679 13.3826 12.5 14.9087 12.5 16.5H11C11 15.3065 10.5259 14.1619 9.68198 13.318C8.83807 12.4741 7.69347 12 6.5 12C5.30653 12 4.16193 12.4741 3.31802 13.318C2.47411 14.1619 2 15.3065 2 16.5H0.5ZM6.5 9.75C4.01375 9.75 2 7.73625 2 5.25C2 2.76375 4.01375 0.75 6.5 0.75C8.98625 0.75 11 2.76375 11 5.25C11 7.73625 8.98625 9.75 6.5 9.75ZM6.5 8.25C8.1575 8.25 9.5 6.9075 9.5 5.25C9.5 3.5925 8.1575 2.25 6.5 2.25C4.8425 2.25 3.5 3.5925 3.5 5.25C3.5 6.9075 4.8425 8.25 6.5 8.25ZM12.713 11.0273C13.767 11.5019 14.6615 12.2709 15.2889 13.2418C15.9164 14.2126 16.2501 15.344 16.25 16.5H14.75C14.7502 15.633 14.4999 14.7844 14.0293 14.0562C13.5587 13.328 12.8878 12.7512 12.0972 12.3953L12.7123 11.0273H12.713ZM12.197 2.55975C12.9526 2.87122 13.5987 3.40015 14.0533 4.07942C14.5078 4.75869 14.7503 5.55768 14.75 6.375C14.7503 7.40425 14.3658 8.39642 13.6719 9.15662C12.978 9.91682 12.025 10.3901 11 10.4835V8.97375C11.5557 8.89416 12.0713 8.63851 12.471 8.24434C12.8707 7.85017 13.1335 7.33824 13.2209 6.7837C13.3082 6.22916 13.2155 5.66122 12.9563 5.16327C12.6971 4.66531 12.2851 4.26356 11.7808 4.017L12.197 2.55975V2.55975Z"})}),Re=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 14 15",fill:"currentColor",children:(0,i.jsx)("path",{d:"M9.25 0.75C9.664 0.75 10 1.086 10 1.5V4.5C10 4.914 9.664 5.25 9.25 5.25H7.75V6.75H10.75C11.164 6.75 11.5 7.086 11.5 7.5V9.75H13C13.414 9.75 13.75 10.086 13.75 10.5V13.5C13.75 13.914 13.414 14.25 13 14.25H8.5C8.086 14.25 7.75 13.914 7.75 13.5V10.5C7.75 10.086 8.086 9.75 8.5 9.75H10V8.25H4V9.75H5.5C5.914 9.75 6.25 10.086 6.25 10.5V13.5C6.25 13.914 5.914 14.25 5.5 14.25H1C0.586 14.25 0.25 13.914 0.25 13.5V10.5C0.25 10.086 0.586 9.75 1 9.75H2.5V7.5C2.5 7.086 2.836 6.75 3.25 6.75H6.25V5.25H4.75C4.336 5.25 4 4.914 4 4.5V1.5C4 1.086 4.336 0.75 4.75 0.75H9.25ZM4.75 11.25H1.75V12.75H4.75V11.25ZM12.25 11.25H9.25V12.75H12.25V11.25ZM8.5 2.25H5.5V3.75H8.5V2.25Z"})}),Pe=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 14 14",fill:"currentColor",children:(0,i.jsx)("path",{d:"M10.0836 5.10309C9.76625 2.64726 7.66719 0.75 5.125 0.75C2.36357 0.75 0.125 2.98857 0.125 5.75C0.125 6.93275 0.535669 8.01956 1.22219 8.87569C1.72719 9.50544 2.00021 10.2033 2.00016 10.9413L2 13.25H7.625L7.62563 11.375H8.875C9.56537 11.375 10.125 10.8154 10.125 10.125V8.29438L11.3496 7.76981C11.5641 7.67794 11.5828 7.46044 11.4901 7.31481L10.0836 5.10309ZM1.375 5.75C1.375 3.67893 3.05393 2 5.125 2C7.01519 2 8.60406 3.40713 8.84381 5.26324L8.8795 5.53914L9.84356 7.05506L8.875 7.46994V10.125H6.37606L6.37544 12H3.25008L3.25016 10.9414C3.25022 9.917 2.88103 8.94625 2.19736 8.09369C1.66761 7.43306 1.375 6.61556 1.375 5.75ZM12.7209 10.814L11.6808 10.1206C12.2772 9.22763 12.625 8.15444 12.625 7.00006C12.625 5.84563 12.2772 4.77244 11.6808 3.87951L12.7209 3.18607C13.45 4.27741 13.875 5.58909 13.875 7.00006C13.875 8.411 13.45 9.72262 12.7209 10.814Z"})}),He=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",children:(0,i.jsx)("path",{fill:"currentColor",d:"M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM272 120l0 23c13.5 1 26.6 4.6 39.6 8.3c1.5 .4 3.1 .9 4.6 1.3c8.5 2.4 13.5 11.2 11.2 19.7s-11.2 13.5-19.7 11.2c-2.4-.7-4.8-1.4-7.2-2.1c-7.5-2.2-15.2-4.4-22.9-5.5c-19.1-2.8-36.6-.4-49.3 5.1c-12.9 5.6-18.6 13.1-19.8 19.5c-1.8 9.8 2.1 16.5 10.2 21.7c10.6 6.8 26.5 11.3 45.8 16.8l.3 .1c17.7 5 38.9 11.1 54.3 21.7c19 13 27.8 33.8 23.6 56.5c-4 21.6-18.9 36-37.8 43.6c-9.9 4-21.1 6.3-33.1 6.9l0 24.2c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-25.9c-8.1-1.3-21.8-5.2-32.4-8.4c-6.9-2.1-13.8-4.3-20.7-6.5c-8.4-2.8-12.9-11.8-10.2-20.2s11.8-12.9 20.2-10.2c6.6 2.2 13.2 4.3 19.9 6.3c11.2 3.4 22.7 6.6 28.1 7.4c19.8 2.9 36.5 1.3 48-3.4c11.2-4.5 16.8-11.3 18.3-19.7c1.9-10.5-1.5-18.4-10.2-24.4c-12-8.2-26.8-12.3-40.9-16.2c-2.3-.6-4.7-1.3-6.9-1.9c-17.1-4.8-37-10.5-51.7-19.9c-8.1-5.2-15.7-12.1-20.5-21.7c-4.9-9.8-6.2-20.8-4-32.8c3.8-20.7 20-35.1 38.6-43.1c7.4-3.2 15.6-5.6 24.3-7.1l0-24.5c0-8.8 7.2-16 16-16s16 7.2 16 16z"})}),ze=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor",children:(0,i.jsx)("path",{d:"M14.75 7.7345V14.75C14.75 14.9489 14.671 15.1397 14.5303 15.2803C14.3897 15.421 14.1989 15.5 14 15.5H2C1.80109 15.5 1.61033 15.421 1.46967 15.2803C1.32902 15.1397 1.25 14.9489 1.25 14.75V7.7345C0.76574 7.18697 0.498918 6.48096 0.500003 5.75V1.25C0.500003 1.05109 0.579021 0.860322 0.719673 0.71967C0.860325 0.579018 1.05109 0.5 1.25 0.5H14.75C14.9489 0.5 15.1397 0.579018 15.2803 0.71967C15.421 0.860322 15.5 1.05109 15.5 1.25V5.75C15.5 6.5105 15.2165 7.205 14.75 7.7345ZM13.25 8.6555C12.7136 8.79329 12.1496 8.78021 11.6202 8.61768C11.0908 8.45516 10.6167 8.14952 10.25 7.7345C9.96877 8.05406 9.6226 8.30995 9.23459 8.48506C8.84659 8.66018 8.42569 8.75051 8 8.75C7.57431 8.75051 7.15342 8.66018 6.76541 8.48506C6.37741 8.30995 6.03124 8.05406 5.75 7.7345C5.38424 8.1507 4.9101 8.45718 4.38042 8.6198C3.85073 8.78241 3.2863 8.79477 2.75 8.6555V14H13.25V8.6555V8.6555ZM9.5 5.75C9.5 5.55109 9.57902 5.36032 9.71967 5.21967C9.86033 5.07902 10.0511 5 10.25 5C10.4489 5 10.6397 5.07902 10.7803 5.21967C10.921 5.36032 11 5.55109 11 5.75C11 6.14782 11.158 6.52936 11.4393 6.81066C11.7206 7.09196 12.1022 7.25 12.5 7.25C12.8978 7.25 13.2794 7.09196 13.5607 6.81066C13.842 6.52936 14 6.14782 14 5.75V2H2V5.75C2 6.14782 2.15804 6.52936 2.43934 6.81066C2.72065 7.09196 3.10218 7.25 3.5 7.25C3.89783 7.25 4.27936 7.09196 4.56066 6.81066C4.84197 6.52936 5 6.14782 5 5.75C5 5.55109 5.07902 5.36032 5.21967 5.21967C5.36033 5.07902 5.55109 5 5.75 5C5.94892 5 6.13968 5.07902 6.28033 5.21967C6.42099 5.36032 6.5 5.55109 6.5 5.75C6.5 6.14782 6.65804 6.52936 6.93934 6.81066C7.22065 7.09196 7.60218 7.25 8 7.25C8.39783 7.25 8.77936 7.09196 9.06066 6.81066C9.34197 6.52936 9.5 6.14782 9.5 5.75Z"})}),Ve=()=>(0,i.jsx)(a,{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M4.75 9.325L6.25 7.825L10.375 11.95L13 9.325L15.25 11.575V4.75H4.75V9.325ZM4 3.25H16C16.1989 3.25 16.3897 3.32902 16.5303 3.46967C16.671 3.61032 16.75 3.80109 16.75 4V16C16.75 16.1989 16.671 16.3897 16.5303 16.5303C16.3897 16.671 16.1989 16.75 16 16.75H4C3.80109 16.75 3.61032 16.671 3.46967 16.5303C3.32902 16.3897 3.25 16.1989 3.25 16V4C3.25 3.80109 3.32902 3.61032 3.46967 3.46967C3.61032 3.32902 3.80109 3.25 4 3.25ZM12.625 8.5C12.3266 8.5 12.0405 8.38147 11.8295 8.1705C11.6185 7.95952 11.5 7.67337 11.5 7.375C11.5 7.07663 11.6185 6.79048 11.8295 6.5795C12.0405 6.36853 12.3266 6.25 12.625 6.25C12.9234 6.25 13.2095 6.36853 13.4205 6.5795C13.6315 6.79048 13.75 7.07663 13.75 7.375C13.75 7.67337 13.6315 7.95952 13.4205 8.1705C13.2095 8.38147 12.9234 8.5 12.625 8.5Z",fill:"currentColor"})}),Ge=()=>(0,i.jsx)(a,{viewBox:"0 0 18 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M9.00116 13.695L3.71141 16.656L4.89266 10.71L0.441406 6.594L6.46166 5.88L9.00116 0.375L11.5407 5.88L17.5609 6.594L13.1097 10.71L14.2909 16.656L9.00116 13.695ZM9.00116 11.976L12.1864 13.7587L11.4747 10.179L14.1544 7.70025L10.5297 7.2705L9.00116 3.95625L7.47266 7.27125L3.84791 7.70025L6.52766 10.179L5.81591 13.7587L9.00116 11.976Z",fill:"currentColor"})}),Ye=()=>(0,i.jsx)(a,{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/Svg",children:(0,i.jsx)("path",{d:"M8 0.5C12.1423 0.5 15.5 3.85775 15.5 8C15.5 12.1423 12.1423 15.5 8 15.5C3.85775 15.5 0.5 12.1423 0.5 8H2C2 11.3135 4.6865 14 8 14C11.3135 14 14 11.3135 14 8C14 4.6865 11.3135 2 8 2C6.152 2 4.499 2.8355 3.39875 4.14875L5 5.75H0.5V1.25L2.33525 3.0845C3.71 1.502 5.738 0.5 8 0.5ZM8.75 4.25V7.68875L11.1823 10.121L10.121 11.1823L7.25 8.30975V4.25H8.75Z",fill:"currentColor"})}),We=()=>(0,i.jsx)(a,{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/Svg",children:(0,i.jsx)("path",{d:"M16.75 3.25C16.9489 3.25 17.1397 3.32902 17.2803 3.46967C17.421 3.61032 17.5 3.80109 17.5 4V8.125C17.0027 8.125 16.5258 8.32254 16.1742 8.67417C15.8225 9.02581 15.625 9.50272 15.625 10C15.625 10.4973 15.8225 10.9742 16.1742 11.3258C16.5258 11.6775 17.0027 11.875 17.5 11.875V16C17.5 16.1989 17.421 16.3897 17.2803 16.5303C17.1397 16.671 16.9489 16.75 16.75 16.75H3.25C3.05109 16.75 2.86032 16.671 2.71967 16.5303C2.57902 16.3897 2.5 16.1989 2.5 16V11.875C2.99728 11.875 3.47419 11.6775 3.82583 11.3258C4.17746 10.9742 4.375 10.4973 4.375 10C4.375 9.50272 4.17746 9.02581 3.82583 8.67417C3.47419 8.32254 2.99728 8.125 2.5 8.125V4C2.5 3.80109 2.57902 3.61032 2.71967 3.46967C2.86032 3.32902 3.05109 3.25 3.25 3.25H16.75ZM16 4.75H4V6.976L4.117 7.03675C4.62574 7.31428 5.05445 7.71814 5.36183 8.20943C5.66921 8.70071 5.8449 9.26286 5.872 9.84175L5.875 10C5.87509 10.6062 5.71189 11.2012 5.40254 11.7225C5.09319 12.2438 4.64912 12.6721 4.117 12.9625L4 13.024V15.25H16V13.0233L15.883 12.9633C15.3743 12.6857 14.9456 12.2819 14.6382 11.7906C14.3308 11.2993 14.1551 10.7371 14.128 10.1583L14.125 10C14.125 8.722 14.8352 7.60975 15.883 7.0375L16 6.97525V4.75ZM13 7.75V12.25H7V7.75H13Z",fill:"currentColor"})}),Ke=()=>(0,i.jsx)(a,{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/Svg",children:(0,i.jsx)("path",{d:"M9.25 1.40725C9.4975 1.3855 9.74725 1.375 10 1.375C14.7633 1.375 18.625 5.23675 18.625 10C18.625 10.2528 18.6145 10.5025 18.5928 10.75H17.4633C17.0868 14.5398 13.8888 17.5 10 17.5C5.85775 17.5 2.5 14.1423 2.5 10C2.5 6.11125 5.46025 2.91325 9.25 2.5375V1.4065V1.40725ZM9.25 10.75V4.0465C7.73703 4.23901 6.35414 5.0004 5.38239 6.17591C4.41064 7.35143 3.92296 8.85285 4.01847 10.375C4.11397 11.8972 4.7855 13.3259 5.89656 14.3707C7.00762 15.4155 8.47484 15.9981 10 16C11.4615 16 12.8727 15.4666 13.9688 14.5C15.0649 13.5334 15.7707 12.2 15.9535 10.75H9.25ZM17.086 9.25C16.9141 7.62843 16.1913 6.11485 15.0382 4.96179C13.8852 3.80874 12.3716 3.08594 10.75 2.914V9.25H17.086Z",fill:"currentColor"})}),qe=()=>(0,i.jsx)(a,{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/Svg",children:(0,i.jsx)("path",{d:"M3.25 10H6.25V16.75H3.25V10ZM13.75 7H16.75V16.75H13.75V7ZM8.5 2.5H11.5V16.75H8.5V2.5Z",fill:"currentColor"})}),Ze=()=>(0,i.jsx)(a,{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/Svg",children:(0,i.jsx)("path",{d:"M16.75 3.25C16.9489 3.25 17.1397 3.32902 17.2803 3.46967C17.421 3.61032 17.5 3.80109 17.5 4V8.125C17.0027 8.125 16.5258 8.32254 16.1742 8.67417C15.8225 9.02581 15.625 9.50272 15.625 10C15.625 10.4973 15.8225 10.9742 16.1742 11.3258C16.5258 11.6775 17.0027 11.875 17.5 11.875V16C17.5 16.1989 17.421 16.3897 17.2803 16.5303C17.1397 16.671 16.9489 16.75 16.75 16.75H3.25C3.05109 16.75 2.86032 16.671 2.71967 16.5303C2.57902 16.3897 2.5 16.1989 2.5 16V11.875C2.99728 11.875 3.47419 11.6775 3.82583 11.3258C4.17746 10.9742 4.375 10.4973 4.375 10C4.375 9.50272 4.17746 9.02581 3.82583 8.67417C3.47419 8.32254 2.99728 8.125 2.5 8.125V4C2.5 3.80109 2.57902 3.61032 2.71967 3.46967C2.86032 3.32902 3.05109 3.25 3.25 3.25H16.75ZM16 4.75H4V6.976L4.117 7.03675C4.62574 7.31428 5.05445 7.71814 5.36183 8.20943C5.66921 8.70071 5.8449 9.26286 5.872 9.84175L5.875 10C5.87509 10.6062 5.71189 11.2012 5.40254 11.7225C5.09319 12.2438 4.64912 12.6721 4.117 12.9625L4 13.024V15.25H16V13.0233L15.883 12.9633C15.3743 12.6857 14.9456 12.2819 14.6382 11.7906C14.3308 11.2993 14.1551 10.7371 14.128 10.1583L14.125 10C14.125 8.722 14.8352 7.60975 15.883 7.0375L16 6.97525V4.75ZM13 7.75V12.25H7V7.75H13Z",fill:"currentColor"})}),Je=()=>(0,i.jsx)(a,{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/Svg",children:(0,i.jsx)("path",{d:"M12.7739 10.6522L11.7134 9.59017L12.7739 8.52967C13.1246 8.18201 13.4032 7.7685 13.5937 7.31287C13.7842 6.85725 13.8828 6.36849 13.8839 5.87465C13.885 5.38081 13.7885 4.89162 13.6 4.43517C13.4115 3.97871 13.1348 3.56398 12.7856 3.21479C12.4364 2.86559 12.0216 2.5888 11.5652 2.40032C11.1087 2.21183 10.6195 2.11536 10.1257 2.11645C9.63186 2.11753 9.1431 2.21614 8.68748 2.40662C8.23185 2.5971 7.81834 2.8757 7.47067 3.22642L6.41017 4.28767L5.34892 3.22717L6.41092 2.16667C7.39554 1.18206 8.73097 0.628906 10.1234 0.628906C11.5159 0.628906 12.8513 1.18206 13.8359 2.16667C14.8205 3.15129 15.3737 4.48672 15.3737 5.87917C15.3737 7.27163 14.8205 8.60706 13.8359 9.59167L12.7747 10.6522H12.7739ZM10.6529 12.7732L9.59167 13.8337C8.60706 14.8183 7.27163 15.3714 5.87917 15.3714C4.48672 15.3714 3.15129 14.8183 2.16667 13.8337C1.18206 12.8491 0.628906 11.5136 0.628906 10.1212C0.628906 8.72872 1.18206 7.39329 2.16667 6.40867L3.22792 5.34817L4.28842 6.41017L3.22792 7.47067C2.8772 7.81834 2.5986 8.23185 2.40812 8.68748C2.21764 9.1431 2.11903 9.63186 2.11795 10.1257C2.11686 10.6195 2.21333 11.1087 2.40182 11.5652C2.5903 12.0216 2.86709 12.4364 3.21629 12.7856C3.56548 13.1348 3.98021 13.4115 4.43667 13.6C4.89312 13.7885 5.38231 13.885 5.87615 13.8839C6.36999 13.8828 6.85875 13.7842 7.31437 13.5937C7.77 13.4032 8.18351 13.1246 8.53117 12.7739L9.59167 11.7134L10.6529 12.7739V12.7732ZM10.1219 4.81792L11.1832 5.87917L5.87992 11.1817L4.81867 10.1212L10.1219 4.81867V4.81792Z",fill:"currentColor"})}),Xe=()=>(0,i.jsx)(a,{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/Svg",children:(0,i.jsx)("path",{d:"M8 0.75L15.125 4.875V13.125L8 17.25L0.875 13.125V4.875L8 0.75ZM8 2.48325L2.375 5.73975V12.2603L8 15.5167L13.625 12.2603V5.73975L8 2.48325ZM8 12C7.20435 12 6.44129 11.6839 5.87868 11.1213C5.31607 10.5587 5 9.79565 5 9C5 8.20435 5.31607 7.44129 5.87868 6.87868C6.44129 6.31607 7.20435 6 8 6C8.79565 6 9.55871 6.31607 10.1213 6.87868C10.6839 7.44129 11 8.20435 11 9C11 9.79565 10.6839 10.5587 10.1213 11.1213C9.55871 11.6839 8.79565 12 8 12ZM8 10.5C8.39782 10.5 8.77936 10.342 9.06066 10.0607C9.34196 9.77936 9.5 9.39782 9.5 9C9.5 8.60218 9.34196 8.22064 9.06066 7.93934C8.77936 7.65804 8.39782 7.5 8 7.5C7.60218 7.5 7.22064 7.65804 6.93934 7.93934C6.65804 8.22064 6.5 8.60218 6.5 9C6.5 9.39782 6.65804 9.77936 6.93934 10.0607C7.22064 10.342 7.60218 10.5 8 10.5Z",fill:"currentColor"})}),$e=()=>(0,i.jsx)(a,{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M10.001 3.25C14.045 3.25 17.4095 6.16 18.1152 10C17.4102 13.84 14.045 16.75 10.001 16.75C5.95697 16.75 2.59247 13.84 1.88672 10C2.59172 6.16 5.95697 3.25 10.001 3.25ZM10.001 15.25C11.5306 15.2497 13.0148 14.7301 14.2106 13.7764C15.4065 12.8226 16.2431 11.4912 16.5837 10C16.2419 8.50998 15.4047 7.18 14.2089 6.22752C13.0132 5.27504 11.5297 4.7564 10.001 4.7564C8.47224 4.7564 6.98874 5.27504 5.793 6.22752C4.59727 7.18 3.76004 8.50998 3.41822 10C3.75879 11.4912 4.59547 12.8226 5.79133 13.7764C6.98718 14.7301 8.47137 15.2497 10.001 15.25ZM10.001 13.375C9.10586 13.375 8.24742 13.0194 7.61448 12.3865C6.98155 11.7535 6.62597 10.8951 6.62597 10C6.62597 9.10489 6.98155 8.24645 7.61448 7.61351C8.24742 6.98058 9.10586 6.625 10.001 6.625C10.8961 6.625 11.7545 6.98058 12.3875 7.61351C13.0204 8.24645 13.376 9.10489 13.376 10C13.376 10.8951 13.0204 11.7535 12.3875 12.3865C11.7545 13.0194 10.8961 13.375 10.001 13.375ZM10.001 11.875C10.4983 11.875 10.9752 11.6775 11.3268 11.3258C11.6784 10.9742 11.876 10.4973 11.876 10C11.876 9.50272 11.6784 9.02581 11.3268 8.67417C10.9752 8.32254 10.4983 8.125 10.001 8.125C9.50369 8.125 9.02677 8.32254 8.67514 8.67417C8.32351 9.02581 8.12597 9.50272 8.12597 10C8.12597 10.4973 8.32351 10.9742 8.67514 11.3258C9.02677 11.6775 9.50369 11.875 10.001 11.875Z",fill:"currentColor"})}),et=()=>(0,i.jsx)(a,{viewBox:"0 0 16 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M7.75 9.5H6.25C5.0197 9.49953 3.81267 9.83536 2.75941 10.4712C1.70614 11.107 0.846701 12.0186 0.274001 13.1075C0.257903 12.9054 0.249897 12.7027 0.250001 12.5C0.250001 8.35775 3.60775 5 7.75 5V0.875L15.625 7.25L7.75 13.625V9.5ZM6.25 8H9.25V10.481L13.2408 7.25L9.25 4.019V6.5H7.75C6.88769 6.49903 6.03535 6.68436 5.25129 7.04332C4.46724 7.40227 3.76999 7.92637 3.20725 8.57975C4.17574 8.19591 5.20822 7.99919 6.25 8Z",fill:"currentColor"})}),tt=()=>(0,i.jsx)(a,{viewBox:"0 0 18 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M4.43976 12.8705L4.98276 13.1877C5.89846 13.7218 6.93995 14.0022 8.00001 14C9.1867 14 10.3467 13.6481 11.3334 12.9888C12.3201 12.3295 13.0892 11.3925 13.5433 10.2961C13.9974 9.19974 14.1162 7.99334 13.8847 6.82946C13.6532 5.66557 13.0818 4.59647 12.2427 3.75736C11.4035 2.91824 10.3344 2.3468 9.17055 2.11529C8.00667 1.88378 6.80027 2.0026 5.70391 2.45672C4.60755 2.91085 3.67048 3.67988 3.01119 4.66658C2.3519 5.65327 2.00001 6.81331 2.00001 8C2.00001 9.077 2.28276 10.1097 2.81301 11.018L3.12951 11.561L2.63976 13.3617L4.43976 12.8705ZM0.50301 15.5L1.51701 11.774C0.848863 10.6286 0.497832 9.32599 0.50001 8C0.50001 3.85775 3.85776 0.5 8.00001 0.5C12.1423 0.5 15.5 3.85775 15.5 8C15.5 12.1423 12.1423 15.5 8.00001 15.5C6.67459 15.5021 5.3725 15.1514 4.22751 14.4838L0.50301 15.5ZM5.29326 4.481C5.39376 4.4735 5.49501 4.4735 5.59551 4.478C5.63601 4.481 5.67651 4.4855 5.71701 4.49C5.83626 4.5035 5.96751 4.57625 6.01176 4.67675C6.23526 5.18375 6.45276 5.6945 6.66276 6.20675C6.70926 6.32075 6.68151 6.467 6.59301 6.6095C6.53214 6.70586 6.46631 6.79898 6.39576 6.8885C6.31101 6.99725 6.12876 7.19675 6.12876 7.19675C6.12876 7.19675 6.05451 7.28525 6.08301 7.3955C6.09351 7.4375 6.12801 7.49825 6.15951 7.54925L6.20376 7.6205C6.39576 7.94075 6.65376 8.2655 6.96876 8.5715C7.05876 8.6585 7.14651 8.74775 7.24101 8.831C7.59201 9.14075 7.98951 9.3935 8.41851 9.581L8.42226 9.5825C8.48601 9.61025 8.51826 9.62525 8.61126 9.665C8.65776 9.6845 8.70576 9.70175 8.75451 9.7145C8.80489 9.72733 8.85794 9.72491 8.90694 9.70756C8.95595 9.6902 8.99869 9.65868 9.02976 9.617C9.57276 8.95925 9.62226 8.9165 9.62676 8.9165V8.918C9.66448 8.88282 9.7093 8.85611 9.7582 8.83968C9.8071 8.82325 9.85894 8.81748 9.91026 8.82275C9.95526 8.82575 10.001 8.834 10.043 8.85275C10.4413 9.035 11.093 9.31925 11.093 9.31925L11.5295 9.515C11.603 9.55025 11.6698 9.6335 11.672 9.71375C11.675 9.764 11.6795 9.845 11.6623 9.9935C11.6383 10.1877 11.5798 10.421 11.5213 10.5433C11.4812 10.6267 11.428 10.7031 11.3638 10.7697C11.2881 10.8492 11.2052 10.9215 11.1163 10.9858C11.0855 11.0089 11.0542 11.0314 11.0225 11.0532C10.9292 11.1124 10.8334 11.1675 10.7353 11.2183C10.5422 11.3208 10.3289 11.3797 10.1105 11.3907C9.97176 11.3982 9.83301 11.4087 9.69351 11.4012C9.68751 11.4012 9.26751 11.336 9.26751 11.336C8.2012 11.0555 7.21505 10.5301 6.38751 9.8015C6.21801 9.65225 6.06126 9.49175 5.90076 9.332C5.23326 8.66825 4.72926 7.952 4.42326 7.2755C4.26664 6.94347 4.18203 6.58205 4.17501 6.215C4.17192 5.75964 4.32077 5.31625 4.59801 4.955C4.65276 4.8845 4.70451 4.811 4.79376 4.72625C4.88901 4.63625 4.94901 4.58825 5.01426 4.55525C5.10102 4.51177 5.19566 4.48626 5.29251 4.48025L5.29326 4.481Z",fill:"currentColor"})}),rt=()=>(0,i.jsx)(a,{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M4.43976 12.8705L4.98276 13.1877C5.89846 13.7218 6.93995 14.0022 8.00001 14C9.1867 14 10.3467 13.6481 11.3334 12.9888C12.3201 12.3295 13.0892 11.3925 13.5433 10.2961C13.9974 9.19974 14.1162 7.99334 13.8847 6.82946C13.6532 5.66557 13.0818 4.59647 12.2427 3.75736C11.4035 2.91824 10.3344 2.3468 9.17055 2.11529C8.00667 1.88378 6.80027 2.0026 5.70391 2.45672C4.60755 2.91085 3.67048 3.67988 3.01119 4.66658C2.3519 5.65327 2.00001 6.81331 2.00001 8C2.00001 9.077 2.28276 10.1097 2.81301 11.018L3.12951 11.561L2.63976 13.3617L4.43976 12.8705ZM0.50301 15.5L1.51701 11.774C0.848863 10.6286 0.497832 9.32599 0.50001 8C0.50001 3.85775 3.85776 0.5 8.00001 0.5C12.1423 0.5 15.5 3.85775 15.5 8C15.5 12.1423 12.1423 15.5 8.00001 15.5C6.67459 15.5021 5.3725 15.1514 4.22751 14.4838L0.50301 15.5ZM5.29326 4.481C5.39376 4.4735 5.49501 4.4735 5.59551 4.478C5.63601 4.481 5.67651 4.4855 5.71701 4.49C5.83626 4.5035 5.96751 4.57625 6.01176 4.67675C6.23526 5.18375 6.45276 5.6945 6.66276 6.20675C6.70926 6.32075 6.68151 6.467 6.59301 6.6095C6.53214 6.70586 6.46631 6.79898 6.39576 6.8885C6.31101 6.99725 6.12876 7.19675 6.12876 7.19675C6.12876 7.19675 6.05451 7.28525 6.08301 7.3955C6.09351 7.4375 6.12801 7.49825 6.15951 7.54925L6.20376 7.6205C6.39576 7.94075 6.65376 8.2655 6.96876 8.5715C7.05876 8.6585 7.14651 8.74775 7.24101 8.831C7.59201 9.14075 7.98951 9.3935 8.41851 9.581L8.42226 9.5825C8.48601 9.61025 8.51826 9.62525 8.61126 9.665C8.65776 9.6845 8.70576 9.70175 8.75451 9.7145C8.80489 9.72733 8.85794 9.72491 8.90694 9.70756C8.95595 9.6902 8.99869 9.65868 9.02976 9.617C9.57276 8.95925 9.62226 8.9165 9.62676 8.9165V8.918C9.66448 8.88282 9.7093 8.85611 9.7582 8.83968C9.8071 8.82325 9.85894 8.81748 9.91026 8.82275C9.95526 8.82575 10.001 8.834 10.043 8.85275C10.4413 9.035 11.093 9.31925 11.093 9.31925L11.5295 9.515C11.603 9.55025 11.6698 9.6335 11.672 9.71375C11.675 9.764 11.6795 9.845 11.6623 9.9935C11.6383 10.1877 11.5798 10.421 11.5213 10.5433C11.4812 10.6267 11.428 10.7031 11.3638 10.7697C11.2881 10.8492 11.2052 10.9215 11.1163 10.9858C11.0855 11.0089 11.0542 11.0314 11.0225 11.0532C10.9292 11.1124 10.8334 11.1675 10.7353 11.2183C10.5422 11.3208 10.3289 11.3797 10.1105 11.3907C9.97176 11.3982 9.83301 11.4087 9.69351 11.4012C9.68751 11.4012 9.26751 11.336 9.26751 11.336C8.2012 11.0555 7.21505 10.5301 6.38751 9.8015C6.21801 9.65225 6.06126 9.49175 5.90076 9.332C5.23326 8.66825 4.72926 7.952 4.42326 7.2755C4.26664 6.94347 4.18203 6.58205 4.17501 6.215C4.17192 5.75964 4.32077 5.31625 4.59801 4.955C4.65276 4.8845 4.70451 4.811 4.79376 4.72625C4.88901 4.63625 4.94901 4.58825 5.01426 4.55525C5.10102 4.51177 5.19566 4.48626 5.29251 4.48025L5.29326 4.481Z",fill:"currentColor"})}),nt=()=>(0,i.jsx)(a,{viewBox:"0 0 16 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M3.84125 12.25L0.5 14.875V1C0.5 0.801088 0.579018 0.610322 0.71967 0.46967C0.860322 0.329018 1.05109 0.25 1.25 0.25H14.75C14.9489 0.25 15.1397 0.329018 15.2803 0.46967C15.421 0.610322 15.5 0.801088 15.5 1V11.5C15.5 11.6989 15.421 11.8897 15.2803 12.0303C15.1397 12.171 14.9489 12.25 14.75 12.25H3.84125ZM3.32225 10.75H14V1.75H2V11.7887L3.32225 10.75ZM7.25 5.5H8.75V7H7.25V5.5ZM4.25 5.5H5.75V7H4.25V5.5ZM10.25 5.5H11.75V7H10.25V5.5Z",fill:"#868C98"})}),it=()=>(0,i.jsx)(a,{viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M6.25 6.25V3.25C6.25 3.05109 6.32902 2.86032 6.46967 2.71967C6.61032 2.57902 6.80109 2.5 7 2.5H16.75C16.9489 2.5 17.1397 2.57902 17.2803 2.71967C17.421 2.86032 17.5 3.05109 17.5 3.25V13C17.5 13.1989 17.421 13.3897 17.2803 13.5303C17.1397 13.671 16.9489 13.75 16.75 13.75H13.75V16.7448C13.75 17.1617 13.4133 17.5 12.9948 17.5H3.25525C3.15604 17.5001 3.05779 17.4806 2.96611 17.4427C2.87444 17.4048 2.79114 17.3492 2.72099 17.279C2.65084 17.2089 2.59521 17.1256 2.55729 17.0339C2.51937 16.9422 2.4999 16.844 2.5 16.7448L2.50225 7.00525C2.50225 6.58825 2.839 6.25 3.2575 6.25H6.25ZM7.75 6.25H12.9948C13.4118 6.25 13.75 6.58675 13.75 7.00525V12.25H16V4H7.75V6.25ZM7.37725 14.5L11.6193 10.2573L10.5588 9.19675L7.37725 12.379L5.785 10.7875L4.7245 11.848L7.37725 14.5Z",fill:"currentColor"})}),at=()=>(0,i.jsx)(a,{viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M10 17.5C5.85775 17.5 2.5 14.1422 2.5 10C2.5 5.85775 5.85775 2.5 10 2.5C14.1422 2.5 17.5 5.85775 17.5 10C17.5 14.1422 14.1422 17.5 10 17.5ZM8.2825 15.7502C7.54256 14.1807 7.1139 12.4827 7.02025 10.75H4.0465C4.19244 11.9042 4.67044 12.9911 5.42243 13.8788C6.17441 14.7664 7.16801 15.4166 8.2825 15.7502ZM8.5225 10.75C8.63575 12.5792 9.1585 14.2975 10 15.814C10.8642 14.2574 11.3691 12.5271 11.4775 10.75H8.5225ZM15.9535 10.75H12.9797C12.8861 12.4827 12.4574 14.1807 11.7175 15.7502C12.832 15.4166 13.8256 14.7664 14.5776 13.8788C15.3296 12.9911 15.8076 11.9042 15.9535 10.75ZM4.0465 9.25H7.02025C7.1139 7.51734 7.54256 5.81926 8.2825 4.24975C7.16801 4.58341 6.17441 5.23356 5.42243 6.12122C4.67044 7.00888 4.19244 8.09583 4.0465 9.25ZM8.52325 9.25H11.4767C11.3686 7.47295 10.864 5.74265 10 4.186C9.13576 5.74259 8.63092 7.47289 8.5225 9.25H8.52325ZM11.7175 4.24975C12.4574 5.81926 12.8861 7.51734 12.9797 9.25H15.9535C15.8076 8.09583 15.3296 7.00888 14.5776 6.12122C13.8256 5.23356 12.832 4.58341 11.7175 4.24975Z",fill:"currentColor"})}),ot=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",children:(0,i.jsx)("path",{d:"M13.3 2C10.9-.1 7.6-.6 4.7 .7S0 4.9 0 8L0 504c0 3.1 1.8 6 4.7 7.3s6.2 .8 8.6-1.3L71.6 459l50.7 50.7c3 3 7.8 3.1 10.9 .4L192 458.6 250.7 510c3.2 2.8 7.9 2.6 10.9-.4L312.4 459 370.7 510c2.4 2.1 5.7 2.6 8.6 1.3s4.7-4.1 4.7-7.3L384 8c0-3.1-1.8-6-4.7-7.3s-6.2-.8-8.6 1.3L312.4 53.1 261.7 2.3c-3-3-7.8-3.1-10.9-.4L192.4 53.1 141.7 2.3c-3-3-7.8-3.1-10.9-.4L72 53.4 13.3 2zM16 486.4L16 25.6 66.7 70c3 2.6 7.5 2.6 10.5 0l58.4-51.1 50.7 50.7c3 3 7.8 3.1 10.9 .4l58.4-51.1 50.7 50.7c3 3 7.8 3.1 10.9 .4L368 25.6l0 460.7L317.3 442c-3.2-2.8-7.9-2.6-10.9 .4L255.6 493 197.3 442c-3-2.6-7.5-2.6-10.5 0L128.4 493 77.7 442.3c-3-3-7.8-3.1-10.9-.4L16 486.4zM96 152c-4.4 0-8 3.6-8 8s3.6 8 8 8l192 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L96 152zM88 352c0 4.4 3.6 8 8 8l192 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L96 344c-4.4 0-8 3.6-8 8zm8-104c-4.4 0-8 3.6-8 8s3.6 8 8 8l192 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L96 248z",fill:"currentColor"})}),st=()=>(0,i.jsx)(a,{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M8.00575 2C7.83583 2.48182 7.74934 2.98909 7.75 3.5H1.75V14H12.25V8C12.7609 8.00066 13.2682 7.91417 13.75 7.74425V14.75C13.75 14.9489 13.671 15.1397 13.5303 15.2803C13.3897 15.421 13.1989 15.5 13 15.5H1C0.801088 15.5 0.610322 15.421 0.46967 15.2803C0.329018 15.1397 0.25 14.9489 0.25 14.75V2.75C0.25 2.55109 0.329018 2.36032 0.46967 2.21967C0.610322 2.07902 0.801088 2 1 2H8.00575ZM12.25 5C12.6478 5 13.0294 4.84196 13.3107 4.56066C13.592 4.27936 13.75 3.89782 13.75 3.5C13.75 3.10218 13.592 2.72064 13.3107 2.43934C13.0294 2.15804 12.6478 2 12.25 2C11.8522 2 11.4706 2.15804 11.1893 2.43934C10.908 2.72064 10.75 3.10218 10.75 3.5C10.75 3.89782 10.908 4.27936 11.1893 4.56066C11.4706 4.84196 11.8522 5 12.25 5ZM12.25 6.5C11.4544 6.5 10.6913 6.18393 10.1287 5.62132C9.56607 5.05871 9.25 4.29565 9.25 3.5C9.25 2.70435 9.56607 1.94129 10.1287 1.37868C10.6913 0.816071 11.4544 0.5 12.25 0.5C13.0456 0.5 13.8087 0.816071 14.3713 1.37868C14.9339 1.94129 15.25 2.70435 15.25 3.5C15.25 4.29565 14.9339 5.05871 14.3713 5.62132C13.8087 6.18393 13.0456 6.5 12.25 6.5Z",fill:"currentColor"})}),lt=()=>(0,i.jsx)(a,{viewBox:"0 0 14 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M0.25 0.25H7.2865C7.42575 0.250074 7.56222 0.288912 7.68064 0.362164C7.79907 0.435416 7.89476 0.540189 7.957 0.66475L8.5 1.75H13C13.1989 1.75 13.3897 1.82902 13.5303 1.96967C13.671 2.11032 13.75 2.30109 13.75 2.5V10.75C13.75 10.9489 13.671 11.1397 13.5303 11.2803C13.3897 11.421 13.1989 11.5 13 11.5H8.2135C8.07425 11.4999 7.93778 11.4611 7.81936 11.3878C7.70093 11.3146 7.60524 11.2098 7.543 11.0853L7 10H1.75V14.5H0.25V0.25Z",fill:"#525866"})}),ct=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:(0,i.jsx)("path",{fill:"currentColor",d:"M256 464c7.4 0 27-7.2 47.6-48.4c8.8-17.7 16.4-39.2 22-63.6l-139.2 0c5.6 24.4 13.2 45.9 22 63.6C229 456.8 248.6 464 256 464zM178.5 304l155 0c1.6-15.3 2.5-31.4 2.5-48s-.9-32.7-2.5-48l-155 0c-1.6 15.3-2.5 31.4-2.5 48s.9 32.7 2.5 48zm7.9-144l139.2 0c-5.6-24.4-13.2-45.9-22-63.6C283 55.2 263.4 48 256 48s-27 7.2-47.6 48.4c-8.8 17.7-16.4 39.2-22 63.6zm195.3 48c1.5 15.5 2.2 31.6 2.2 48s-.8 32.5-2.2 48l76.7 0c3.6-15.4 5.6-31.5 5.6-48s-1.9-32.6-5.6-48l-76.7 0zm58.8-48c-21.4-41.1-56.1-74.1-98.4-93.4c14.1 25.6 25.3 57.5 32.6 93.4l65.9 0zm-303.3 0c7.3-35.9 18.5-67.7 32.6-93.4c-42.3 19.3-77 52.3-98.4 93.4l65.9 0zM53.6 208c-3.6 15.4-5.6 31.5-5.6 48s1.9 32.6 5.6 48l76.7 0c-1.5-15.5-2.2-31.6-2.2-48s.8-32.5 2.2-48l-76.7 0zM342.1 445.4c42.3-19.3 77-52.3 98.4-93.4l-65.9 0c-7.3 35.9-18.5 67.7-32.6 93.4zm-172.2 0c-14.1-25.6-25.3-57.5-32.6-93.4l-65.9 0c21.4 41.1 56.1 74.1 98.4 93.4zM256 512A256 256 0 1 1 256 0a256 256 0 1 1 0 512z"})}),At=()=>(0,i.jsx)(a,{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{fill:"currentColor",d:"M13 15.5H1C0.801088 15.5 0.610322 15.421 0.46967 15.2803C0.329018 15.1397 0.25 14.9489 0.25 14.75V1.25C0.25 1.05109 0.329018 0.860322 0.46967 0.71967C0.610322 0.579018 0.801088 0.5 1 0.5H13C13.1989 0.5 13.3897 0.579018 13.5303 0.71967C13.671 0.860322 13.75 1.05109 13.75 1.25V14.75C13.75 14.9489 13.671 15.1397 13.5303 15.2803C13.3897 15.421 13.1989 15.5 13 15.5ZM12.25 14V2H1.75V14H12.25ZM4 5.75H10V7.25H4V5.75ZM4 8.75H10V10.25H4V8.75Z"})}),ut=()=>(0,i.jsx)(a,{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{fill:"currentColor",d:"M0.5 7.75H5V13.75H0.5V7.75ZM11 4H15.5V13.75H11V4ZM5.75 0.25H10.25V13.75H5.75V0.25ZM2 9.25V12.25H3.5V9.25H2ZM7.25 1.75V12.25H8.75V1.75H7.25ZM12.5 5.5V12.25H14V5.5H12.5Z"})}),dt=()=>(0,i.jsx)(a,{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{fill:"currentColor",d:"M3.50054 1.25V3.125H1.62554V1.25H3.50054ZM0.375538 0V4.375H4.75055V0H0.375538ZM6.62555 0H11.6255V1.25H6.62555V0ZM6.62555 4.375H11.6255V5.625H6.62555V4.375ZM6.62555 8.75H11.6255V10H6.62555V8.75ZM5.19249 7.62944L4.30859 6.74556L2.25054 8.80363L1.12997 7.68306L0.246094 8.56694L2.25054 10.5714L5.19249 7.62944Z"})}),ft=()=>(0,i.jsx)(a,{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{fill:"currentColor",d:"M7.5 10.689V12.2565C6.82119 12.0165 6.09471 11.9429 5.38155 12.0418C4.6684 12.1408 3.9894 12.4094 3.40157 12.8252C2.81375 13.2409 2.33426 13.7916 2.00337 14.4311C1.67249 15.0705 1.49986 15.78 1.5 16.5L1.93842e-07 16.4993C-0.000232586 15.5834 0.209191 14.6797 0.612224 13.8573C1.01526 13.0349 1.6012 12.3157 2.32516 11.7548C3.04912 11.1939 3.89188 10.8061 4.78887 10.6212C5.68585 10.4364 6.61325 10.4593 7.5 10.6883V10.689ZM6 9.75C3.51375 9.75 1.5 7.73625 1.5 5.25C1.5 2.76375 3.51375 0.75 6 0.75C8.48625 0.75 10.5 2.76375 10.5 5.25C10.5 7.73625 8.48625 9.75 6 9.75ZM6 8.25C7.6575 8.25 9 6.9075 9 5.25C9 3.5925 7.6575 2.25 6 2.25C4.3425 2.25 3 3.5925 3 5.25C3 6.9075 4.3425 8.25 6 8.25ZM10.3448 14.9355L12.996 12.2843L14.0573 13.3448L10.3448 17.0573L7.69275 14.4053L8.754 13.3448L10.344 14.9355H10.3448Z"})}),ht=()=>(0,i.jsx)(a,{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{fill:"currentColor",d:"M6 13.25V12H1.625V2H7.875V4.5H10.375V7.625H11.6249V3.875L8.5 0.75H0.999063C0.654681 0.75 0.375 1.02753 0.375 1.36988V12.6301C0.375 12.9654 0.652975 13.25 0.995875 13.25H6ZM11.9598 12.7008L10.6339 11.3749L11.9598 10.0491L11.0759 9.16525L9.75006 10.4911L8.42425 9.16525L7.54038 10.0491L8.86619 11.3749L7.54038 12.7008L8.42425 13.5846L9.75006 12.2588L11.0759 13.5846L11.9598 12.7008Z"})}),pt=()=>(0,i.jsx)("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{fill:"currentColor",d:"M4.125 9.125C4.125 9.125 8.5 9.75 10.375 11.625H11C11.3452 11.625 11.625 11.3452 11.625 11V7.21063C12.1641 7.07188 12.5625 6.58244 12.5625 6C12.5625 5.41756 12.1641 4.92812 11.625 4.78937V1C11.625 0.654825 11.3452 0.375 11 0.375H10.375C8.5 2.25 4.125 2.875 4.125 2.875H1.625C0.934644 2.875 0.375 3.43464 0.375 4.125V7.875C0.375 8.56538 0.934644 9.125 1.625 9.125H2.25L2.875 12.25H4.125V9.125ZM5.375 3.91325C5.80206 3.82162 6.32969 3.69496 6.89956 3.52733C7.94844 3.21884 9.28125 2.73289 10.375 1.98411V10.0159C9.28125 9.26713 7.94844 8.78119 6.89956 8.47269C6.32969 8.30506 5.80206 8.17838 5.375 8.08675V3.91325ZM1.625 4.125H4.125V7.875H1.625V4.125Z"})}),gt=()=>(0,i.jsx)(a,{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M14.4141 10.315V12.967C14.4141 13.1569 14.3422 13.3397 14.2128 13.4786C14.0833 13.6176 13.906 13.7022 13.7166 13.7155C13.3888 13.738 13.1211 13.75 12.9141 13.75C6.28631 13.75 0.914062 8.37775 0.914062 1.75C0.914062 1.543 0.925313 1.27525 0.948563 0.9475C0.961854 0.758083 1.0465 0.580758 1.18542 0.451307C1.32433 0.321855 1.50718 0.249914 1.69706 0.25H4.34906C4.44209 0.249906 4.53183 0.284394 4.60086 0.346765C4.66988 0.409136 4.71326 0.494937 4.72256 0.5875C4.73981 0.76 4.75556 0.89725 4.77056 1.0015C4.91961 2.04169 5.22506 3.05337 5.67656 4.00225C5.74781 4.15225 5.70131 4.3315 5.56631 4.4275L3.94781 5.584C4.9374 7.88984 6.77497 9.72741 9.08081 10.717L10.2358 9.1015C10.283 9.0355 10.3519 8.98816 10.4304 8.96774C10.509 8.94732 10.5922 8.95511 10.6656 8.98975C11.6143 9.4404 12.6257 9.74509 13.6656 9.8935C13.7698 9.9085 13.9071 9.925 14.0781 9.9415C14.1705 9.95098 14.2561 9.99443 14.3183 10.0634C14.3805 10.1324 14.4149 10.2221 14.4148 10.315H14.4141Z",fill:"currentColor"})}),mt=()=>(0,i.jsx)("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M14.4141 10.315V12.967C14.4141 13.1569 14.3422 13.3397 14.2128 13.4786C14.0833 13.6176 13.906 13.7022 13.7166 13.7155C13.3888 13.738 13.1211 13.75 12.9141 13.75C6.28631 13.75 0.914062 8.37775 0.914062 1.75C0.914062 1.543 0.925313 1.27525 0.948563 0.9475C0.961854 0.758083 1.0465 0.580758 1.18542 0.451307C1.32433 0.321855 1.50718 0.249914 1.69706 0.25H4.34906C4.44209 0.249906 4.53183 0.284394 4.60086 0.346765C4.66988 0.409136 4.71326 0.494937 4.72256 0.5875C4.73981 0.76 4.75556 0.89725 4.77056 1.0015C4.91961 2.04169 5.22506 3.05337 5.67656 4.00225C5.74781 4.15225 5.70131 4.3315 5.56631 4.4275L3.94781 5.584C4.9374 7.88984 6.77497 9.72741 9.08081 10.717L10.2358 9.1015C10.283 9.0355 10.3519 8.98816 10.4304 8.96774C10.509 8.94732 10.5922 8.95511 10.6656 8.98975C11.6143 9.4404 12.6257 9.74509 13.6656 9.8935C13.7698 9.9085 13.9071 9.925 14.0781 9.9415C14.1705 9.95098 14.2561 9.99443 14.3183 10.0634C14.3805 10.1324 14.4149 10.2221 14.4148 10.315H14.4141Z",fill:"currentColor"})}),vt=()=>(0,i.jsx)(a,{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M3.50206 8.5L3.81706 5.5H0.664062V4H3.97531L4.36906 0.25H5.87731L5.48356 4H8.47531L8.86906 0.25H10.3773L9.98356 4H12.6641V5.5H9.82606L9.51106 8.5H12.6641V10H9.35281L8.95906 13.75H7.45081L7.84456 10H4.85281L4.45906 13.75H2.95081L3.34456 10H0.664062V8.5H3.50206ZM5.01031 8.5H8.00281L8.31781 5.5H5.32531L5.01031 8.5Z",fill:"currentColor"})}),yt=()=>(0,i.jsx)(a,{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M11.625 0H0.375V1.25H11.625V0ZM11.625 4.375H3.5V5.625H11.625V4.375ZM11.625 8.75H3.5V10H11.625V8.75ZM1.625 4.375H0.375V10H1.625V4.375Z",fill:"currentColor"})}),bt=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:(0,i.jsx)("path",{d:"M437.7 106.3c3.1 3.1 3.1 8.2 0 11.3l-272 272c-3.1 3.1-8.2 3.1-11.3 0l-144-144c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0L160 372.7 426.3 106.3c3.1-3.1 8.2-3.1 11.3 0z",fill:"currentColor"})}),wt=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",children:(0,i.jsx)("path",{d:"M338.1 413.4c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L203.3 256 349.4 109.9c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L192 244.7 45.9 98.6c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3L180.7 256 34.6 402.1c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L192 267.3 338.1 413.4z",fill:"currentColor"})}),xt=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",children:(0,i.jsx)("path",{d:"M410.7 .5c-4.2-1.5-8.7 .7-10.2 4.9l-176 496c-1.5 4.2 .7 8.7 4.9 10.2s8.7-.7 10.2-4.9l176-496c1.5-4.2-.7-8.7-4.9-10.2zm71.5 122.1c-3 3.2-2.9 8.3 .3 11.3L612.3 256 482.5 378.2c-3.2 3-3.4 8.1-.3 11.3s8.1 3.4 11.3 .3l136-128c1.6-1.5 2.5-3.6 2.5-5.8s-.9-4.3-2.5-5.8l-136-128c-3.2-3-8.3-2.9-11.3 .3zm-324.3 0c-3-3.2-8.1-3.4-11.3-.3l-136 128C8.9 251.7 8 253.8 8 256s.9 4.3 2.5 5.8l136 128c3.2 3 8.3 2.9 11.3-.3s2.9-8.3-.3-11.3L27.7 256 157.5 133.8c3.2-3 3.4-8.1 .3-11.3z",fill:"currentColor"})}),Ct=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:(0,i.jsx)("path",{d:"M0 256c0-4.4 3.6-8 8-8l304 0c4.4 0 8 3.6 8 8s-3.6 8-8 8L8 264c-4.4 0-8-3.6-8-8z",fill:"currentColor"})}),Bt=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:(0,i.jsx)("path",{d:"M331.3 75.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L160 201.4 91.3 132.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l80 80c6.2 6.2 16.4 6.2 22.6 0l160-160zm112 112c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L160 425.4 27.3 292.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l144 144c6.2 6.2 16.4 6.2 22.6 0l272-272z",fill:"currentColor"})}),Et=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:(0,i.jsx)("path",{width:"20",height:"20",d:"M384 192a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm0-64a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM224 192a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm0-64a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM48 176a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm64 0a48 48 0 1 1 -96 0 48 48 0 1 1 96 0zM384 352a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm0-64a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM208 336a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm64 0a48 48 0 1 1 -96 0 48 48 0 1 1 96 0zM64 352a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm0-64a48 48 0 1 1 0 96 48 48 0 1 1 0-96z",fill:"currentColor"})}),kt=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:(0,i.jsx)("path",{fill:"currentColor",d:"M495.4 240L272 240l0-223.4c0-9 7-16.6 16-16.6C411.7 0 512 100.3 512 224c0 9-7.6 16-16.6 16zM190.2 37.2c18.1-3.8 33.8 11 33.8 29.5L224 288l221.3 0c18.5 0 33.3 15.7 29.5 33.8C451.9 430.5 355.5 512 240 512C107.5 512 0 404.6 0 272C0 156.5 81.5 60.1 190.2 37.2z"})}),It=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",children:(0,i.jsx)("path",{fill:"currentColor",d:"M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"})}),St=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",children:(0,i.jsx)("path",{width:"20",height:"20",d:"M160 64l352 0c17.7 0 32 14.3 32 32l0 105.4L486.6 144c-12.5-12.5-32.8-12.5-45.3 0L304 281.4 230.6 208c-12.5-12.5-32.8-12.5-45.3 0L128 265.4 128 96c0-17.7 14.3-32 32-32zM576 96c0-35.3-28.7-64-64-64L160 32c-35.3 0-64 28.7-64 64l0 208 0 16c0 35.3 28.7 64 64 64l80 0c0 0 0 0 0 0l272 0c35.3 0 64-28.7 64-64l0-80c0 0 0 0 0-.1l0-144zM464 166.6l80 80 0 73.4c0 17.7-14.3 32-32 32l-233.4 0 36.7-36.7L464 166.6zM281.4 304l-48 48L160 352c-17.7 0-32-14.3-32-32l0-9.4 80-80L281.4 304zM32 112c0-8.8-7.2-16-16-16s-16 7.2-16 16L0 352c0 70.7 57.3 128 128 128l336 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-336 0c-53 0-96-43-96-96l0-240zm232 48a24 24 0 1 0 0-48 24 24 0 1 0 0 48z",fill:"currentColor"})}),Dt=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:(0,i.jsx)("path",{d:"M0 416c0 8.8 7.2 16 16 16l65.6 0c7.4 36.5 39.7 64 78.4 64s71-27.5 78.4-64L496 432c8.8 0 16-7.2 16-16s-7.2-16-16-16l-257.6 0c-7.4-36.5-39.7-64-78.4-64s-71 27.5-78.4 64L16 400c-8.8 0-16 7.2-16 16zm112 0a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM304 256a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm48-80c-38.7 0-71 27.5-78.4 64L16 240c-8.8 0-16 7.2-16 16s7.2 16 16 16l257.6 0c7.4 36.5 39.7 64 78.4 64s71-27.5 78.4-64l65.6 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-65.6 0c-7.4-36.5-39.7-64-78.4-64zM192 144a48 48 0 1 1 0-96 48 48 0 1 1 0 96zm78.4-64C263 43.5 230.7 16 192 16s-71 27.5-78.4 64L16 80C7.2 80 0 87.2 0 96s7.2 16 16 16l97.6 0c7.4 36.5 39.7 64 78.4 64s71-27.5 78.4-64L496 112c8.8 0 16-7.2 16-16s-7.2-16-16-16L270.4 80z",width:"20",height:"20",fill:"currentColor"})}),Qt=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:(0,i.jsx)("path",{d:"M16 17.5H4C3.80109 17.5 3.61032 17.421 3.46967 17.2803C3.32902 17.1397 3.25 16.9489 3.25 16.75V3.25C3.25 3.05109 3.32902 2.86032 3.46967 2.71967C3.61032 2.57902 3.80109 2.5 4 2.5H16C16.1989 2.5 16.3897 2.57902 16.5303 2.71967C16.671 2.86032 16.75 3.05109 16.75 3.25V16.75C16.75 16.9489 16.671 17.1397 16.5303 17.2803C16.3897 17.421 16.1989 17.5 16 17.5ZM15.25 16V4H4.75V16H15.25ZM7 7.75H13V9.25H7V7.75ZM7 10.75H13V12.25H7V10.75Z",width:"20",height:"20",fill:"currentColor"})}),_t=()=>(0,i.jsx)(a,{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M2.5 10.75H7V16.75H2.5V10.75ZM13 7H17.5V16.75H13V7ZM7.75 3.25H12.25V16.75H7.75V3.25ZM4 12.25V15.25H5.5V12.25H4ZM9.25 4.75V15.25H10.75V4.75H9.25ZM14.5 8.5V15.25H16V8.5H14.5Z",width:"20",height:"20",fill:"currentColor"})}),Tt=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",children:(0,i.jsx)("path",{fill:"currentColor",d:"M544 224c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80zm0-128c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zM320 256c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm0-192c44.2 0 80 35.8 80 80s-35.8 80-80 80-80-35.8-80-80 35.8-80 80-80zm192 268c-33.7 0-64.2 13.2-86.7 34.6-14.1-29.8-44.3-50.6-79.3-50.6h-52c-35 0-65.2 20.8-79.3 50.6-22.5-21.4-53-34.6-86.7-34.6C57.3 332 0 389.3 0 460v12c0 22.1 17.9 40 40 40h560c22.1 0 40-17.9 40-40v-12c0-70.7-57.3-128-128-128zm96 140c0 4.4-3.6 8-8 8H40c-4.4 0-8-3.6-8-8v-12c0-53 43-96 96-96s96 43 96 96v12h96v-12c0-53 43-96 96-96s96 43 96 96v12z"})}),Ft=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",children:(0,i.jsx)("path",{fill:"currentColor",d:"M624 176h-16V96c0-35.3-28.7-64-64-64H96c-35.3 0-64 28.7-64 64v80H16c-8.8 0-16 7.2-16 16v192c0 8.8 7.2 16 16 16h16v16c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64v-16h16c8.8 0 16-7.2 16-16V192c0-8.8-7.2-16-16-16zm-464 32c0-17.7 14.3-32 32-32h256c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V208zm432 224c0 17.6-14.4 32-32 32H80c-17.6 0-32-14.4-32-32v-16h80v16c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64v-16h80v16zm16-48H32V208h80v192c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V208h80v176z"})}),Ot=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",children:(0,i.jsx)("path",{fill:"currentColor",d:"M320 32c44.2 0 80 35.8 80 80s-35.8 80-80 80-80-35.8-80-80 35.8-80 80-80zm0 128c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5-48 48-48zm208 16h-16V96c0-35.3-28.7-64-64-64H192c-35.3 0-64 28.7-64 64v80h-16c-8.8 0-16 7.2-16 16v192c0 8.8 7.2 16 16 16h432c8.8 0 16-7.2 16-16V192c0-8.8-7.2-16-16-16zM160 432V208h320v224H160z"})}),Mt=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",children:(0,i.jsx)("path",{fill:"currentColor",d:"M384 32c17.7 0 32 14.3 32 32l0 128 32 0 0-128c0-35.3-28.7-64-64-64L320 0 256 0 192 0c-35.3 0-64 28.7-64 64l0 128 32 0 0-128c0-17.7 14.3-32 32-32l32 0 0 56c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-56 32 0zM256 32l64 0 0 56c0 4.4-3.6 8-8 8l-48 0c-4.4 0-8-3.6-8-8l0-56zm71.6 480L512 512c35.3 0 64-28.7 64-64l0-160c0-35.3-28.7-64-64-64l-64 0-64 0-56.4 0c8.3 9.2 14.8 20.1 19 32l5.5 0 0 31.9c0 0 0 0 0 .1l0 24c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-56 32 0c17.7 0 32 14.3 32 32l0 160c0 17.7-14.3 32-32 32l-165.5 0c-4.2 11.9-10.7 22.8-19 32zM384 256l64 0 0 56c0 4.4-3.6 8-8 8l-48 0c-4.4 0-8-3.6-8-8l0-56zm-128 0c17.7 0 32 14.3 32 32l0 160c0 17.7-14.3 32-32 32L64 480c-17.7 0-32-14.3-32-32l0-160c0-17.7 14.3-32 32-32l32 0 0 56c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-56 32 0zM128 312l0-56 64 0 0 56c0 4.4-3.6 8-8 8l-48 0c-4.4 0-8-3.6-8-8zm128-88l-32 0-32 0-64 0-32 0-32 0c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-160c0-35.3-28.7-64-64-64z"})}),Nt=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",children:(0,i.jsx)("path",{fill:"currentColor",d:"M225.7 34c-1.1 1-1.9 2.3-2.4 3.8L209.6 85.5c-3.5 12.1-12.2 21.1-22.5 26.1c-7.6 3.6-14.8 7.8-21.7 12.5c-9.4 6.5-21.7 9.5-33.9 6.5l-48.2-12c-1.5-.4-3-.3-4.4 .2c-5.4 6.9-10.4 14.2-15 21.8l-4.2 7.3c-4.2 7.5-7.9 15.3-11.2 23.4c.3 1.5 1 2.9 2.1 4L85.2 211c8.7 9 12.2 21.1 11.3 32.5c-.3 4.1-.5 8.3-.5 12.5s.2 8.4 .5 12.5c.9 11.4-2.6 23.5-11.3 32.5L50.7 336.8c-1.1 1.1-1.8 2.5-2.1 4c3.3 8 7 15.8 11.2 23.4l4.2 7.3c4.6 7.6 9.6 14.8 15 21.8c1.4 .5 2.9 .5 4.4 .2l48.2-12c12.2-3 24.4 0 33.9 6.5c6.9 4.7 14.1 8.9 21.7 12.5c10.3 4.9 19.1 14 22.5 26.1l13.7 47.7c.4 1.5 1.3 2.8 2.4 3.8c9.9 1.3 20 2 30.3 2s20.4-.7 30.3-2c1.1-1 1.9-2.3 2.4-3.8l13.7-47.7c3.5-12.1 12.2-21.1 22.5-26.1c7.6-3.6 14.8-7.8 21.7-12.5c9.4-6.5 21.7-9.5 33.9-6.5l48.2 12c1.5 .4 3 .3 4.4-.2c5.4-6.9 10.4-14.2 14.9-21.8l4.2-7.3c4.2-7.5 7.9-15.3 11.2-23.4c-.3-1.5-1-2.9-2.1-4L426.8 301c-8.7-9-12.2-21.1-11.3-32.5c.3-4.1 .5-8.3 .5-12.5s-.2-8.4-.5-12.5c-.9-11.4 2.6-23.5 11.3-32.5l34.5-35.7c1.1-1.1 1.8-2.5 2.1-4c-3.3-8-7-15.8-11.2-23.3l-4.3-7.4c-4.6-7.6-9.5-14.8-14.9-21.8c-1.4-.5-2.9-.5-4.4-.2l-48.2 12c-12.2 3-24.4 0-33.9-6.5c-6.9-4.7-14.1-8.9-21.7-12.5c-10.3-4.9-19.1-14-22.5-26.1L288.7 37.8c-.4-1.5-1.3-2.8-2.4-3.8c-9.9-1.3-20-2-30.3-2s-20.4 .7-30.3 2zM217.6 2.9C230.1 1 243 0 256 0s25.9 1 38.4 2.9c1.7 .3 3.4 .8 5 1.6c9.5 4.9 16.9 13.6 20 24.5l13.7 47.7c.6 2.2 2.5 4.5 5.6 6c9.1 4.3 17.8 9.4 26 15c2.8 1.9 5.8 2.4 8 1.8l48.2-12c10.9-2.7 22.1-.7 31.1 5.1c1.5 .9 2.8 2.1 3.9 3.5c7.1 8.9 13.6 18.2 19.5 28l.2 .3L480 132l.1 .3c5.4 9.7 10.2 19.9 14.3 30.4c.6 1.6 1 3.3 1.1 5c.5 10.8-3.3 21.6-11.2 29.8l-34.5 35.7c-1.6 1.7-2.7 4.4-2.4 7.8c.4 5 .6 10 .6 15s-.2 10.1-.6 15c-.3 3.4 .8 6.2 2.4 7.8l34.5 35.7c7.9 8.2 11.7 19 11.2 29.8c-.1 1.7-.5 3.4-1.1 5c-4.1 10.5-8.9 20.6-14.3 30.4l-.1 .3-4.4 7.6-.2 .3c-5.9 9.8-12.4 19.2-19.5 28c-1.1 1.4-2.4 2.6-3.9 3.5c-9 5.7-20.2 7.8-31.1 5.1l-48.2-12c-2.2-.6-5.2-.1-8 1.8c-8.2 5.7-16.9 10.7-26 15c-3.1 1.5-4.9 3.8-5.6 6L319.4 483c-3.1 10.8-10.5 19.5-20 24.5c-1.6 .8-3.2 1.4-5 1.6C281.9 511 269 512 256 512s-25.9-1-38.4-2.9c-1.7-.3-3.4-.8-5-1.6c-9.5-4.9-16.9-13.6-20-24.5l-13.7-47.7c-.6-2.2-2.5-4.5-5.6-6c-9.1-4.3-17.8-9.4-26-15c-2.8-1.9-5.8-2.4-8-1.8l-48.2 12c-10.9 2.7-22.1 .7-31.1-5.1c-1.5-.9-2.8-2.1-3.9-3.5C49 407 42.4 397.6 36.5 387.8l-.1-.3L32 380l-.1-.3c-5.4-9.8-10.2-19.9-14.3-30.4c-.6-1.6-1-3.3-1.1-5c-.5-10.8 3.3-21.6 11.2-29.8l34.5-35.7c1.6-1.7 2.7-4.4 2.4-7.8c-.4-5-.6-10-.6-15s.2-10.1 .6-15c.3-3.4-.8-6.2-2.4-7.8L27.7 197.4c-7.9-8.2-11.7-19-11.2-29.8c.1-1.7 .5-3.4 1.1-5c4.1-10.5 8.9-20.6 14.3-30.4l.1-.3 4.4-7.6 .1-.3C42.4 114.3 49 105 56.1 96.1c1.1-1.4 2.4-2.6 3.9-3.5c9-5.7 20.2-7.8 31.1-5.1l48.2 12c2.2 .6 5.2 .1 8-1.8c8.2-5.7 16.9-10.7 26-15c3.1-1.5 4.9-3.8 5.6-6L192.6 29c3.1-10.8 10.5-19.5 20-24.5c1.6-.8 3.2-1.4 5-1.6zm70.2 159.8l-32 192c-1.5 8.7-9.7 14.6-18.4 13.2s-14.6-9.7-13.2-18.4l32-192c1.5-8.7 9.7-14.6 18.4-13.2s14.6 9.7 13.2 18.4zM187.3 227.3L158.6 256l28.7 28.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6l40-40c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6zm160-22.6l40 40c6.2 6.2 6.2 16.4 0 22.6l-40 40c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L353.4 256l-28.7-28.7c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0z"})}),jt=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",children:(0,i.jsx)("path",{fill:"currentColor",d:"M480 32l0 96-32 0-32 0-32 0 0-96 96 0zM384 160l32 0 0 160c0 44.2-35.8 80-80 80l-70.6 0 57.4-52.2-21.5-23.7-88 80-13 11.8 13 11.8 88 80 21.5-23.7L265.4 432l70.6 0c61.9 0 112-50.1 112-112l0-160 32 0 32 0 0-32 0-96 0-32L480 0 384 0 352 0l0 32 0 96 0 32 32 0zM210.8 4.2L189.2 27.8 246.6 80 176 80C114.1 80 64 130.1 64 192l0 160-32 0L0 352l0 32 0 96 0 32 32 0 96 0 32 0 0-32 0-96 0-32-32 0-32 0 0-160c0-44.2 35.8-80 80-80l70.6 0-57.4 52.2 21.5 23.7 88-80 13-11.8-13-11.8-88-80zM64 384s0 0 0 0l32 0s0 0 0 0l32 0 0 96-96 0 0-96 32 0z"})}),Lt=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",children:(0,i.jsx)("path",{fill:"currentColor",d:"M32 240c0-91.4 93.8-176 224-176s224 84.6 224 176s-93.8 176-224 176c-32 0-63-5.9-93.5-16.2c-9.9-3.3-20.7-1.8-29.2 4.2c-15.4 10.7-31.4 20-48.4 27.4L91.2 446l-6.4-14.7c-10.5 4.6-21.5 8.6-32.7 11.5c.5-.9 1.1-1.8 1.6-2.6C68 416.5 76.3 391 79.4 363.9c1-9.2-2.1-17.7-7.4-23.9c-24.5-29.4-40-62.9-40-100zM256 32C114.5 32 0 125.2 0 240c0 46.6 19.6 87.1 47.4 120.5c0 .1 .1 .1 .1 .2c-2.6 22.6-9.5 43.5-21.3 63.1c-6.5 10.8-13.5 20.8-21.7 29c-4.5 4.6-5.9 11.5-3.4 17.4s8.3 9.8 14.8 9.8c28.7 0 57.6-8.9 81.6-19.3c19.2-8.4 37.1-18.7 53.9-30.5c.2-.1 .5-.2 .7-.1C185.5 441.3 220 448 256 448c141.5 0 256-93.2 256-208S397.5 32 256 32zm60.3 147.7c4.9 4.9 4.9 12.9 0 17.8l-8.1 8.1-17.8-17.8 8.1-8.1c4.9-4.9 12.9-4.9 17.8 0zM207.1 271.1l60.7-60.7 17.8 17.8L224.8 289c-2.1 2.1-4.6 3.5-7.4 4.2L198 298l4.9-19.5c.7-2.8 2.2-5.4 4.2-7.4zM275.8 157l-91.4 91.5c-6.1 6.2-10.5 13.9-12.6 22.3l-11.3 45.3c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l45.3-11.3c8.4-2.1 16.2-6.5 22.3-12.6l91.4-91.5c17.4-17.4 17.4-45.6 0-63c-17.4-17.4-45.7-17.4-63.1 0z"})}),Ut=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",children:(0,i.jsx)("path",{fill:"currentColor",d:"M64 128a64 64 0 1 0 128 0A64 64 0 1 0 64 128zm64 96a96 96 0 1 1 0-192 96 96 0 1 1 0 192zM64 384a64 64 0 1 0 128 0A64 64 0 1 0 64 384zm64 96a96 96 0 1 1 0-192 96 96 0 1 1 0 192zM384 192a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm96-64a96 96 0 1 1 -192 0 96 96 0 1 1 192 0zM384 272c8.8 0 16 7.2 16 16l0 80 80 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-80 0 0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80-80 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l80 0 0-80c0-8.8 7.2-16 16-16z"})}),Rt=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",children:(0,i.jsx)("path",{fill:"currentColor",d:"M266.2 4.7C273 1.6 280.5 0 288 0s15 1.6 21.8 4.7l217.4 97.5c10.2 4.6 16.8 14.7 16.8 25.9s-6.6 21.3-16.8 25.9L309.8 251.3c-6.9 3.1-14.3 4.7-21.8 4.7s-15-1.6-21.8-4.7L48.8 153.9C38.6 149.3 32 139.2 32 128s6.6-21.3 16.8-25.9L266.2 4.7zM288 32c-3 0-6 .6-8.8 1.9L69.3 128l210 94.1c2.8 1.2 5.7 1.9 8.8 1.9s6-.6 8.8-1.9l210-94.1-210-94.1C294 32.6 291 32 288 32zM48.8 358.1l45.9-20.6 39.1 17.5L69.3 384l210 94.1c2.8 1.2 5.7 1.9 8.8 1.9s6-.6 8.8-1.9l210-94.1-64.5-28.9 39.1-17.5 45.9 20.6c10.2 4.6 16.8 14.7 16.8 25.9s-6.6 21.3-16.8 25.9L309.8 507.3c-6.9 3.1-14.3 4.7-21.8 4.7s-15-1.6-21.8-4.7L48.8 409.9C38.6 405.3 32 395.2 32 384s6.6-21.3 16.8-25.9zM94.7 209.5l39.1 17.5L69.3 256l210 94.1c2.8 1.2 5.7 1.9 8.8 1.9s6-.6 8.8-1.9l210-94.1-64.5-28.9 39.1-17.5 45.9 20.6c10.2 4.6 16.8 14.7 16.8 25.9s-6.6 21.3-16.8 25.9L309.8 379.3c-6.9 3.1-14.3 4.7-21.8 4.7s-15-1.6-21.8-4.7L48.8 281.9C38.6 277.3 32 267.2 32 256s6.6-21.3 16.8-25.9l45.9-20.6z"})}),Pt=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",children:(0,i.jsx)("path",{fill:"currentColor",d:"M352 480L32 480 32 32l160 0 0 144 0 16 16 0 144 0 0 288zM224 37.3L346.7 160 224 160l0-122.7zM232 0L32 0 0 0 0 32 0 480l0 32 32 0 320 0 32 0 0-32 0-328L232 0zm8 256l-96 0 0-32-64 0 0 64 32 0 0 96-32 0 0 64 64 0 0-32 96 0 0 32 64 0 0-64-32 0 0-96 32 0 0-64-64 0 0 32zm0 128l-96 0 0-96 96 0 0 96z"})}),Ht=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",children:(0,i.jsx)("path",{fill:"currentColor",d:"M352 480L32 480 32 32l160 0 0 144 0 16 16 0 144 0 0 288zM224 37.3L346.7 160 224 160l0-122.7zM232 0L32 0 0 0 0 32 0 480l0 32 32 0 320 0 32 0 0-32 0-328L232 0zM176 432l32 0 0-16 0-64 64 0 16 0 0-32-16 0-64 0 0-64 0-16-32 0 0 16 0 64-64 0-16 0 0 32 16 0 64 0 0 64 0 16z"})}),zt=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:(0,i.jsx)("path",{fill:"currentColor",d:"M32 48c0-8.8-7.2-16-16-16S0 39.2 0 48L0 400c0 44.2 35.8 80 80 80l416 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L80 448c-26.5 0-48-21.5-48-48L32 48zm288 96c0 8.8 7.2 16 16 16l89.4 0L320 265.4l-84.7-84.7c-6.2-6.2-16.4-6.2-22.6 0l-112 112c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L224 214.6l84.7 84.7c6.2 6.2 16.4 6.2 22.6 0L448 182.6l0 89.4c0 8.8 7.2 16 16 16s16-7.2 16-16l0-128c0-8.8-7.2-16-16-16l-128 0c-8.8 0-16 7.2-16 16z"})}),Vt=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:(0,i.jsx)("path",{fill:"currentColor",d:"M448 44.2c0-36.2-44.2-53.8-69-27.5L355.1 41.9c-47.8 50.4-113 80.7-182.4 84.5L143.6 128 64 128c-35.3 0-64 28.7-64 64l0 96c0 35.3 28.7 64 64 64l0 104c0 30.9 25.1 56 56 56l16 0c30.9 0 56-25.1 56-56l0-100.6c62.1 7.9 119.8 37 163.1 82.8L379 463.3c24.9 26.2 69 8.6 69-27.5l0-391.5zM160 352.9L160 456c0 13.3-10.7 24-24 24l-16 0c-13.3 0-24-10.7-24-24l0-104 47.6 0 16.4 .9zM402.2 38.7c5-5.3 13.8-1.7 13.8 5.5l0 391.5c0 7.2-8.8 10.8-13.8 5.5l-23.8-25.1C336.5 372 282.7 341.6 224 328.5l0-177.1c58.7-13.1 112.5-43.4 154.4-87.6l23.8-25.1zM192 156.9l0 166.3c-5.8-.7-11.6-1.1-17.5-1.5L144.9 320l-.4 0-.4 0-80 0c-17.7 0-32-14.3-32-32l0-96c0-17.7 14.3-32 32-32l80 0 .4 0 .4 0 29.7-1.6c5.8-.3 11.7-.8 17.5-1.5zM496 192c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64c0-8.8-7.2-16-16-16z"})}),Gt=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:(0,i.jsx)("path",{fill:"currentColor",d:"M204.1 32c12.7 0 24.9 5.1 33.9 14.1L410.7 218.7c25 25 25 65.5 0 90.5L277.3 442.7c-25 25-65.5 25-90.5 0L14.1 270.1c-9-9-14.1-21.2-14.1-33.9L0 80C0 53.5 21.5 32 48 32l156.1 0zM36.7 247.4L209.4 420.1c12.5 12.5 32.8 12.5 45.3 0L388.1 286.6c12.5-12.5 12.5-32.8 0-45.3L215.4 68.7c-3-3-7.1-4.7-11.3-4.7L48 64c-8.8 0-16 7.2-16 16l0 156.1c0 4.2 1.7 8.3 4.7 11.3zM308.4 36.9c6.1-6.4 16.2-6.6 22.6-.5l141.3 135c52.8 50.4 52.8 134.7 0 185.1l-124.6 119c-6.4 6.1-16.5 5.9-22.6-.5s-5.9-16.5 .5-22.6l124.6-119c39.6-37.8 39.6-101 0-138.8L308.9 59.6c-6.4-6.1-6.6-16.2-.5-22.6zM104 112a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"})}),Yt=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:(0,i.jsx)("path",{fill:"currentColor",d:"M288 64l-64 0 0 64 64 0 0-64zM224 32l64 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32zM98.7 234.7l32 55.4 55.4-32-32-55.4-55.4 32zM71 250.7c-8.8-15.3-3.6-34.9 11.7-43.7l55.4-32c15.3-8.8 34.9-3.6 43.7 11.7l32 55.4c8.8 15.3 3.6 34.9-11.7 43.7l-55.4 32c-15.3 8.8-34.9 3.6-43.7-11.7L71 250.7zM352 224l-64 0 0 64 64 0 0-64zm-96 0c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-64zm96 224l64 0 0-64-64 0 0 64zm-32-64c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-64zm-64 0l-64 0 0 64 64 0 0-64zm-64-32l64 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32zM32 384l0 64 64 0 0-64-64 0zM0 384c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-64z"})}),Wt=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",children:(0,i.jsx)("path",{fill:"currentColor",d:"M534.5 86.6L369.9 251.3 324.6 206 489.3 41.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3zM347.3 273.9l-36.6 36.6-36.1 36.1s0 0 0 0l-4.6 4.6L224.6 306l40.7-40.7s0 0 0 0L302 228.6l45.3 45.3zM176 320c6.9 0 13.5 .9 19.9 2.5l57.7 57.7c1.6 6.3 2.5 13 2.5 19.9c0 44.2-35.8 80-80 80L36.8 480C58 480 74.3 468.5 84 455.1c9.5-13.1 14.2-30 12.5-46.7c-.3-2.7-.4-5.5-.4-8.3c0-44.2 35.8-80 80-80zm110.3 60.2L557.2 109.3c25-25 25-65.5 0-90.5s-65.5-25-90.5 0l-271 271c-6.4-1.1-13-1.7-19.7-1.7c-61.9 0-112 50.1-112 112c0 3.9 .2 7.8 .6 11.6C66.4 429.1 54.4 448 36.8 448L32 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0c61.9 0 112-50.1 112-112c0-6.8-.6-13.4-1.7-19.8zM170.8 17C148.9-4.9 113.5-4.9 91.6 17L49 59.6c-21.9 21.9-21.9 57.3 0 79.2L166.5 256.3c3.1-.2 6.3-.3 9.5-.3c2.7 0 5.3 .1 7.9 .2l13.9-13.9L149 193.6 225.6 117l48.8 48.8L297 143.2 170.8 17zM410.1 301.6l50.8 50.8c7.6 7.6 13.1 16.9 16.1 27.2l27.3 92.8-92.8-27.3c-10.3-3-19.6-8.6-27.2-16.1l-50.8-50.8-13.8 13.8c.1 2.7 .2 5.4 .2 8.1c0 3.2-.1 6.4-.3 9.5l42 42c11.4 11.4 25.4 19.7 40.8 24.2l121 35.6c5.6 1.7 11.7 .1 15.8-4s5.7-10.2 4-15.8l-35.6-121c-4.5-15.4-12.9-29.4-24.2-40.8l-50.8-50.8-22.6 22.6zM114.2 39.6c9.4-9.4 24.6-9.4 33.9 0L203 94.4 126.4 171 71.6 116.2c-9.4-9.4-9.4-24.6 0-33.9l42.6-42.6z"})}),Kt=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",children:(0,i.jsx)("path",{fill:"currentColor",d:"M458.3 34.9c3.1-3.1 8.2-3.1 11.3 0l39.4 39.4c3.1 3.1 3.1 8.2 0 11.3L388.7 206.1l-50.7-50.7L458.3 34.9zM66.9 426.3L315.3 177.9l50.7 50.7L117.7 477.1c-3.1 3.1-8.2 3.1-11.3 0L66.9 437.7c-3.1-3.1-3.1-8.2 0-11.3zM435.7 12.3L44.3 403.7c-15.6 15.6-15.6 40.9 0 56.6l39.4 39.4c15.6 15.6 40.9 15.6 56.6 0L531.7 108.3c15.6-15.6 15.6-40.9 0-56.6L492.3 12.3c-15.6-15.6-40.9-15.6-56.6 0zM128 80c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 48-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48 48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0 0-48zM464 320c-8.8 0-16 7.2-16 16l0 48-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48 48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0 0-48c0-8.8-7.2-16-16-16zM252.2 16c0-6.7-5.4-12.2-12.2-12.2s-12.2 5.4-12.2 12.2l0 19.8-19.8 0c-6.7 0-12.2 5.4-12.2 12.2s5.4 12.2 12.2 12.2l19.8 0 0 19.8c0 6.7 5.4 12.2 12.2 12.2s12.2-5.4 12.2-12.2l0-19.8 19.8 0c6.7 0 12.2-5.4 12.2-12.2s-5.4-12.2-12.2-12.2l-19.8 0 0-19.8z"})}),qt=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",children:(0,i.jsx)("path",{fill:"currentColor",d:"M608 32L192 32l0 68c-10.2-2.6-21-4-32-4l0-64 0-32 32 0L608 0l32 0 0 32 0 352 0 32-32 0-283.4 0L315 384l293 0 0-352zM400 112l16 0 96 0 16 0 0 16 0 96 0 16-32 0 0-16 0-57.4L395.3 267.3 384 278.6l-11.3-11.3-80-80L281.4 176 304 153.4l11.3 11.3L384 233.4 473.4 144 416 144l-16 0 0-32zM160 288a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm0-160a96 96 0 1 1 0 192 96 96 0 1 1 0-192zM71.8 384L43 480l234 0-28.8-96L71.8 384zM272 352l38.4 128 9.6 32-33.4 0L33.4 512 0 512l9.6-32L48 352l224 0z"})}),Zt=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",children:(0,i.jsx)("path",{d:"M256 256.8l0 63.6C248.5 284 215.3 256 176 256c-44.2 0-80 35.8-80 80s35.8 80 80 80c39.3 0 72.5-28 80-64.4l0 63.6c-20.7 20.3-49.1 32.8-80 32.8c-61.9 0-112-50.1-112-112s50.1-112 112-112c30.9 0 59.3 12.5 80 32.8zM261.5 480c4.2 11.9 10.7 22.8 19 32L64 512c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L280.4 0c-8.3 9.2-14.8 20.1-19 32L64 32C46.3 32 32 46.3 32 64l0 384c0 17.7 14.3 32 32 32l197.5 0zM176 160a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0-96a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM152 336a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM352 32c-17.7 0-32 14.3-32 32l0 384c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32l0-384c0-17.7-14.3-32-32-32L352 32zM288 64c0-35.3 28.7-64 64-64L576 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64l-224 0c-35.3 0-64-28.7-64-64l0-384zm176 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0-96a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm0 352a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-192a112 112 0 1 1 0 224 112 112 0 1 1 0-224zM440 336a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"})}),Jt=()=>(0,i.jsx)(a,{width:"13",height:"13",viewBox:"0 0 13 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M4.125 9.125C4.125 9.125 8.5 9.75 10.375 11.625H11C11.3452 11.625 11.625 11.3452 11.625 11V7.21063C12.1641 7.07188 12.5625 6.58244 12.5625 6C12.5625 5.41756 12.1641 4.92812 11.625 4.78937V1C11.625 0.654825 11.3452 0.375 11 0.375H10.375C8.5 2.25 4.125 2.875 4.125 2.875H1.625C0.934644 2.875 0.375 3.43464 0.375 4.125V7.875C0.375 8.56538 0.934644 9.125 1.625 9.125H2.25L2.875 12.25H4.125V9.125ZM5.375 3.91325C5.80206 3.82162 6.32969 3.69496 6.89956 3.52733C7.94844 3.21884 9.28125 2.73289 10.375 1.98411V10.0159C9.28125 9.26713 7.94844 8.78119 6.89956 8.47269C6.32969 8.30506 5.80206 8.17838 5.375 8.08675V3.91325ZM1.625 4.125H4.125V7.875H1.625V4.125Z",fill:"currentColor"})}),Xt=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:(0,i.jsx)("path",{fill:"currentColor",d:"M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"})}),$t=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:(0,i.jsx)("path",{fill:"currentColor",d:"M32 32c17.7 0 32 14.3 32 32V400c0 8.8 7.2 16 16 16H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-44.2 0-80-35.8-80-80V64c0-17.7 14.3-32 32-32zM160 224c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V256c0-17.7 14.3-32 32-32zm128-64V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V160c0-17.7 14.3-32 32-32s32 14.3 32 32zm64 32c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32zM480 96V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V96c0-17.7 14.3-32 32-32s32 14.3 32 32z"})}),er=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:(0,i.jsx)("path",{fill:"currentColor",d:"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"})}),tr=()=>(0,i.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:(0,i.jsx)("path",{fill:"currentColor",d:"M256 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L306.7 128l-96 96H164.7L45.5 104.8c-9.1-9.1-22.9-11.8-34.9-6.9S0 115.1 0 128V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V128c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9L338.1 224H384c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H288v32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32s14.3-32 32-32h64V352H256c-17.7 0-32-14.3-32-32V256c0-17.7 14.3-32 32-32h45.9l96-96L275.8 5.1C266.7-3 260-8 256-8z"})}),rr=e=>{let{icon:t}=e;switch(t&&"string"===typeof t?t.trim():""){case"check-in":case"checkin":return(0,i.jsx)(Bt,{});case"pending":return(0,i.jsx)(Xt,{});case"check-in-rate":return(0,i.jsx)($t,{});case"no-show":return(0,i.jsx)(er,{});case"pie-chart":return(0,i.jsx)(tr,{});case"marketing":return(0,i.jsx)(Jt,{});case"speaker-category":return(0,i.jsx)(Zt,{});case"participant-category":return(0,i.jsx)(qt,{});case"elements":return(0,i.jsx)(Kt,{});case"section-theme":return(0,i.jsx)(Wt,{});case"core-module":return(0,i.jsx)(Yt,{});case"campaign":return(0,i.jsx)(Vt,{});case"graph-type":return(0,i.jsx)(zt,{});case"template-data":return(0,i.jsx)(Ht,{});case"template":return(0,i.jsx)(Pt,{});case"master-data":return(0,i.jsx)(Rt,{});case"addOns":return(0,i.jsx)(Ut,{});case"addon-price":return(0,i.jsx)(Gt,{});case"feedback":return(0,i.jsx)(Lt,{});case"app-setting":return(0,i.jsx)(Nt,{});case"app-version":return(0,i.jsx)(jt,{});case"mobile-modules":return(0,i.jsx)(Mt,{});case"modules":return(0,i.jsx)(_t,{});case"in-person":return(0,i.jsx)(Tt,{});case"virtual":return(0,i.jsx)(Ft,{});case"hybrid":return(0,i.jsx)(Ot,{});case"add-ons":return(0,i.jsx)(Qt,{});case"mobile-settings":return(0,i.jsx)(Dt,{});case"banner":return(0,i.jsx)(St,{});case"Other":return(0,i.jsx)(Et,{});case"text":return(0,i.jsx)(mt,{});case"mobilenumber":return(0,i.jsx)(gt,{});case"number":return(0,i.jsx)(vt,{});case"textarea":return(0,i.jsx)(yt,{});case"submit":return(0,i.jsx)(bt,{});case"close":return(0,i.jsx)(wt,{});case"html":return(0,i.jsx)(xt,{});case"line":return(0,i.jsx)(Ct,{});case"announcements":return(0,i.jsx)(pt,{});case"missed-registrations":return(0,i.jsx)(ht,{});case"attendees":case"attendance":return(0,i.jsx)(ft,{});case"registration-approval":return(0,i.jsx)(dt,{});case"sales-summary":return(0,i.jsx)(ut,{});case"orders":return(0,i.jsx)(At,{});case"other":return(0,i.jsx)(lt,{});case"event-category":return(0,i.jsx)(st,{});case"product-category":return(0,i.jsx)(ot,{});case"country":return(0,i.jsx)(at,{});case"addon-product":return(0,i.jsx)(it,{});case"message":return(0,i.jsx)(nt,{});case"social-share":case"Social Share":return(0,i.jsx)(et,{});case"whatsapp":case"WhatsApp Configuration":case"Whatsapp Authentication":return(0,i.jsx)(rt,{});case"display":case"Display Ads":return(0,i.jsx)(Xe,{});case"photo-view-access":case"Photo Viewing Access":return(0,i.jsx)($e,{});case"whatsapp-auth":case"Whatsapp Authentications":return(0,i.jsx)(tt,{});case"url":return(0,i.jsx)(Je,{});case"qr":case"partners-spotlight":return(0,i.jsx)(Ze,{});case"attendee":return(0,i.jsx)(qe,{});case"photo-usage":return(0,i.jsx)(Ke,{});case"photo-attendee":return(0,i.jsx)(We,{});case"upload-history":return(0,i.jsx)(Ye,{});case"event-highlights":case"Event Highlights":return(0,i.jsx)(Ge,{});case"manage-photos":return(0,i.jsx)(Ve,{});case"preparation":return(0,i.jsx)(o,{});case"team":return(0,i.jsx)(Le,{});case"exhibitor-settings":return(0,i.jsx)(je,{});case"exhibitor-summary":return(0,i.jsx)(Ne,{});case"booth-member":return(0,i.jsx)(Me,{});case"exhibitor-category":return(0,i.jsx)(Oe,{});case"exhibitor":return(0,i.jsx)(Fe,{});case"reports":return(0,i.jsx)(Te,{});case"exhibitors":return(0,i.jsx)(_e,{});case"website":return(0,i.jsx)(Qe,{});case"configure":return(0,i.jsx)(De,{});case"payment":case"Payment Configuration":return(0,i.jsx)(Se,{});case"coupon":return(0,i.jsx)(Ie,{});case"session":case"session-type":return(0,i.jsx)(ke,{});case"form-builder":return(0,i.jsx)(Ee,{});case"mic":return(0,i.jsx)(Be,{});case"dailymotion":return(0,i.jsx)(N,{});case"sharechat":return(0,i.jsx)(U,{});case"threads":return(0,i.jsx)(R,{});case"linkedin":return(0,i.jsx)(j,{});case"youtube":return(0,i.jsx)(L,{});case"instagram":return(0,i.jsx)(F,{});case"x":return(0,i.jsx)(O,{});case"facebook":return(0,i.jsx)(M,{});case"logout":return(0,i.jsx)(l,{});case"location":return(0,i.jsx)(c,{});case"event":return(0,i.jsx)(A,{});case"package":return(0,i.jsx)(u,{});case"franchise-package":return(0,i.jsx)(d,{});case"whitelisted-Domains":return(0,i.jsx)(f,{});case"instance":return(0,i.jsx)(h,{});case"registration":return(0,i.jsx)(p,{});case"event-admin":return(0,i.jsx)(g,{});case"ticket":return(0,i.jsx)(m,{});case"ticket-form-data":return(0,i.jsx)(v,{});case"ticket-registration":return(0,i.jsx)(y,{});case"event-mode":return(0,i.jsx)(b,{});case"event-type":return(0,i.jsx)(w,{});case"gallery":return(0,i.jsx)(x,{});case"count":return(0,i.jsx)(C,{});case"news":return(0,i.jsx)(B,{});case"testimonial":return(0,i.jsx)(E,{});case"about-us":return(0,i.jsx)(k,{});case"landingPageConfig":return(0,i.jsx)(I,{});case"speakers":return(0,i.jsx)(S,{});case"sponsors":return(0,i.jsx)(D,{});case"sponsor-list":return(0,i.jsx)(Q,{});case"sponsor-category":return(0,i.jsx)(_,{});case"features":case"keyfeatures":return(0,i.jsx)(T,{});case"bold":return(0,i.jsx)(P,{});case"italic":return(0,i.jsx)(H,{});case"underline":return(0,i.jsx)(z,{});case"link":return(0,i.jsx)(V,{});case"textSlash":return(0,i.jsx)(G,{});case"image":return(0,i.jsx)(Y,{});case"copy":return(0,i.jsx)(W,{});case"star":return(0,i.jsx)(K,{});case"more":return(0,i.jsx)(q,{});case"short":return(0,i.jsx)(Z,{});case"paragraph":return(0,i.jsx)(J,{});case"multipleChoice":return(0,i.jsx)(X,{});case"dropDown":return(0,i.jsx)(ee,{});case"checkBox":return(0,i.jsx)($,{});case"fileUpload":case"file":return(0,i.jsx)(te,{});case"circlePlus":return(0,i.jsx)(re,{});case"heroSection":return(0,i.jsx)(ne,{});case"AboutUs":return(0,i.jsx)(ie,{});case"count-down":return(0,i.jsx)(ae,{});case"ShortAnswer":return(0,i.jsx)(oe,{});case"Paragraphs":return(0,i.jsx)(se,{});case"MultipleChoices":return(0,i.jsx)(le,{});case"DropDown":return(0,i.jsx)(ce,{});case"FileUpload":return(0,i.jsx)(Ae,{});case"date":return(0,i.jsx)(ue,{});case"Time":case"time":return(0,i.jsx)(de,{});case"Select":return(0,i.jsx)(fe,{});case"MultiSelect":return(0,i.jsx)(he,{});case"email":case"Email Configuration":return(0,i.jsx)(pe,{});case"password":return(0,i.jsx)(ge,{});case"Number":return(0,i.jsx)(me,{});case"Text":return(0,i.jsx)(ve,{});case"DateTime":case"datetime":return(0,i.jsx)(ye,{});case"badge":return(0,i.jsx)(be,{});case"Certificate":return(0,i.jsx)(we,{});case"Faq":return(0,i.jsx)(xe,{});case"Video":return(0,i.jsx)(Ce,{});case"user-group":return(0,i.jsx)(Ue,{});case"network-wired":return(0,i.jsx)(Re,{});case"speaker":return(0,i.jsx)(Pe,{});case"currency":return(0,i.jsx)(He,{});case"House":return(0,i.jsx)(ze,{});case"globe":return(0,i.jsx)(ct,{});case"fillpiechart":return(0,i.jsx)(kt,{});case"filleye":return(0,i.jsx)(It,{});default:return(0,i.jsx)(s,{})}}},86158:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});r(65043);var n=r(8289),i=r(94574),a=r(70579);const o=i.Ay.div`
  height: auto;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  .inner {
    position: absolute;
    color: white;
    display: flex;
    flex-direction: column;
    margin-left: 0;
    justify-content: center;
    text-align: center;
    h1 {
      font-size: 40px;
      margin: 10px;
    }
    p {
      font-size: 25px;
      margin: 10px;
    }
  }
  @media (max-width: 768px) {
    .inner {
      position: absolute;
      color: white;
      display: flex;
      flex-direction: column;
      margin-left: 0;
      justify-content: center;
      text-align: center;
      h1 {
        font-size: 30px;
        margin: 0px;
        padding:10px 10px;
      }
      p {
        font-size: 15px;
        margin: 0px;
      }
    }
  }
`,s=i.Ay.img`
  width: 100vw;
  display: block;
  object-fit: contain;
  &.curved {
    width: 100%;
    display: block;
    object-fit: contain;
    overflow-clip-margin: content-box;
    overflow: clip;
    border-radius: 20px;
    // margin: 10px;
  }
  &.banner {
    width: 100%;
    display: block;
    object-fit: contain;
    overflow-clip-margin: content-box;
    overflow: clip;
    // margin: 10px;
  }
  @media (max-width: 768px) {
    &.banner {
      width: 100%;
      display: block;
      object-fit: cover;
    }
  }
`,l=e=>{let{id:t,event:r,theme:i,title:l,description:c,button:A}=e;const u=window.matchMedia("(max-width: 600px)").matches;switch(i){default:case"theme1":return(0,a.jsx)(n.w,{children:(0,a.jsxs)(o,{children:[(0,a.jsx)(s,{onError:e=>e.target.src="https://event-manager.syd1.cdn.digitaloceanspaces.com/"+r.banner,className:"banner",src:u?"https://event-manager.syd1.cdn.digitaloceanspaces.com/"+r.mobBanner:"https://event-manager.syd1.cdn.digitaloceanspaces.com/"+r.banner,alt:"frame"}),l&&(0,a.jsxs)("div",{className:"inner",children:[l&&(0,a.jsxs)("h1",{children:[" ",l]}),c&&(0,a.jsxs)("p",{children:[" ",c]})]})]})});case"theme2":return(0,a.jsx)(n.w,{id:t,children:(0,a.jsxs)(o,{children:[(0,a.jsx)(s,{onError:e=>e.target.src="https://event-manager.syd1.cdn.digitaloceanspaces.com/"+r.banner,className:"curved",src:u?"https://event-manager.syd1.cdn.digitaloceanspaces.com/"+r.mobBanner:"https://event-manager.syd1.cdn.digitaloceanspaces.com/"+r.banner,alt:"frame"}),l&&(0,a.jsxs)("div",{className:"inner",children:[l&&(0,a.jsxs)("h1",{children:[" ",l]}),c&&(0,a.jsxs)("p",{children:[" ",c]})]})]})})}}},99566:(e,t,r)=>{"use strict";r.d(t,{A:()=>x});r(65043);var n=r(94574),i=r(8289),a=r(86178),o=r.n(a),s=r(73216),l=r(46861);const c=r.p+"static/media/global.0979a08348071f25aeaa.jpg",A=r.p+"static/media/indian-region.5161791a562c13bf39a8.jpg",u=r.p+"static/media/new-inter.ef88fed5da8448e22808.jpg";var d=r(70579);const f=n.Ay.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  background-color: #000000;
  &.new {
    background-color: #1e1d1d;
  }
  // padding-top: 20px;
  padding: 0 50px;
  @media (max-width: 768px) {
    text-align: center;
    padding: 0 10px;
  }
`,h=n.Ay.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 30px 0;
  align-items: flex-start;
  font-weight: normal;
  .footer-logo {
    width: 300px;
    height: auto;
    img {
      max-height: 75px;
      max-width: 100%;
      filter: invert(1) grayscale(1);
    }
  }
  .social-icons {
    display: flex;
    gap: 40px;
    color: white;
    font-size: 25px;
    flex-wrap: wrap;
    justify-content: space-between;
    a {
      color: white;
      cursor: pointer;
    }
  }
  .footer-links {
    display: flex;
    flex-direction: column;
    max-width: 20%;
    font-weight: normal;
  }
  .footer-address {
    max-width: 20%;
    color: white;
    font-weight: normal;
  }

  .footer-links p,
  .footer-address p {
    margin: 5px 0;
    color: #fff;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    .footer-links {
      justify-content: center;
      align-items: center;
      gap: 10px;
      margin-bottom: 50px;
    }
    .footer-address,
    .footer-links {
      max-width: 100%;
      margin: 20px auto;
    }
    .social-icons {
      margin: auto;
    }
    .footer-logo {
      max-width: 100%;
      height: auto;
      justify-content: center;
      display: flex;
      flex-direction: column;
      text-align: center;
      width: 100%;
      padding: 10px;
      img {
        max-width: 100%;
        width: auto;
        filter: invert(1) grayscale(1);
        margin: auto;
        margin-bottom: 30px;
        max-height: 75px;
      }

      p {
        padding: 10px;
        margin: auto;
      }
    }
  }
`,p=n.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 350px;
  &.theme2 {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    width: auto;
    &.theme2 {
      align-items: center;
      justify-content: center;
    }
  }
`,g=n.Ay.input`
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 5px 0 0 5px;
  font-size: 16px;
  outline: none;
  background-color: #505050;
  color: white;
  &.theme2 {
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    border-radius: 5px;
  }
`,m=n.Ay.div`
  width: 100%;
  margin: 20px 0;
  border-bottom: 1px solid #474646;
`,v=n.Ay.div`
  flex: 1;
  color: #fff;
  &.theme2 {
    margin-top: 20px;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }
  @media (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`,y=n.Ay.button`
  padding: 10px 20px;
  border: none;
  border-radius: 0 5px 5px 0;
  background-color: #fff;
  color: #000000;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  outline: none;
  @media (max-width: 768px) {
    border-radius: 5px;
    margin-top: 10px;
  }
  &:hover {
    background-color: #979798;
  }
`,b=n.Ay.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  color: white;
  width: 100%;
`,w=n.Ay.div`
  display: flex;
  flex-direction: column; /* Ensure column direction for alignment */
  align-items: center; /* Center items vertically */
  justify-content: center; /* Center items horizontally */
  text-align: center; /* Ensure text-align center for all text elements */

  h4 {
    margin-bottom: 5px;
    font-size: 28px;
    font-weight: 300;
    max-width: 50%;
  }

  p {
    font-size: 12px;
    font-weight: 300;

    span {
      font-weight: 400;
      font-size: 14px;
    }

    &.new {
      margin-top: 40px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column; /* Ensure column direction for alignment */
    align-items: center; /* Center items vertically */
    justify-content: center; /* Center items horizontally */
    text-align: center; /* Ensure text-align center for all text elements */

    h4{
      text-align: center; /* Center individual text elements */
      max-width:50%;
    }
      p{
       text-align: center;
       max-width:80%;
      }
  }
`,x=e=>{var t,r,n,a,x;let{id:C,event:B,theme:E,additionalMenus:k=[]}=e;const I=[{platform:"facebook",icon:"facebook"},{platform:"whatsapp",icon:"whatsapp"},{platform:"insta",icon:"instagram"},{platform:"xSocial",icon:"x"},{platform:"dailymotion",icon:"dailymotion"},{platform:"linkedin",icon:"linkedin"},{platform:"youtube",icon:"youtube"},{platform:"sharechat",icon:"sharechat"},{platform:"threads",icon:"threads"}],S=(0,s.Zp)();switch(E){default:case"theme1":return(0,d.jsx)(f,{id:C,children:(0,d.jsxs)(i.m,{className:"column footer",children:[(0,d.jsxs)(h,{children:[(0,d.jsxs)("div",{className:"footer-logo",children:[(0,d.jsx)("img",{src:"https://event-manager.syd1.cdn.digitaloceanspaces.com/"+(null===B||void 0===B?void 0:B.footerLogo),alt:"Logo"}),B.description&&(0,d.jsx)("p",{style:{color:"white",fontSize:"small"},className:"timer-texts",children:B.description}),B.contactNumber&&(0,d.jsx)("p",{style:{color:"white",fontSize:"small"},className:"timer-texts",children:B.contactNumber}),B.alternateContactNumber&&(0,d.jsx)("p",{style:{color:"white",fontSize:"small"},className:"timer-texts",children:B.alternateContactNumber}),B.emailId&&(0,d.jsx)("p",{style:{color:"white",fontSize:"small"},className:"timer-texts",children:B.emailId}),B.website&&(0,d.jsx)("p",{style:{color:"white",fontSize:"small"},className:"timer-texts",children:B.website})]}),(0,d.jsx)("div",{className:"footer-links",children:k.filter((e=>"both"===e.placement||"footer"===e.placement)).map(((e,t)=>(0,d.jsx)("p",{onClick:()=>{var t;"External Url"!==(t=e).targetType?S("/"+t.slug):"Home"===t.targetType?S(""):(t.url.startsWith("http://")||t.url.startsWith("https://"))&&window.open(t.url,"_blank")},children:e.title},t+20)))}),(null===(t=B.OfficeAddress)||void 0===t?void 0:t.length)>3&&(0,d.jsx)("div",{dangerouslySetInnerHTML:{__html:B.OfficeAddress},className:"footer-address"}),(null===(r=B.corporateOfficeAddress)||void 0===r?void 0:r.length)>3&&(0,d.jsx)("div",{dangerouslySetInnerHTML:{__html:B.corporateOfficeAddress},className:"footer-address"})]}),(0,d.jsx)(m,{}),(0,d.jsxs)(h,{children:[(0,d.jsxs)(v,{children:["\xa9",o()().format("y")," ",null===(n=B.franchise)||void 0===n?void 0:n.name,". All rights reserved | Developed by ",(0,d.jsx)("a",{href:"https://datahex.co",children:"DataHex"})]}),(0,d.jsx)("div",{className:"social-icons",children:I.map((e=>{let{platform:t,icon:r}=e;return B[t]&&B[t].length>1&&(0,d.jsx)("a",{href:B[t],children:(0,d.jsx)(l.A0,{icon:r})},t)}))})]})]})});case"theme4":return(0,d.jsx)(f,{id:C,className:"new",children:(0,d.jsxs)(i.m,{className:"column footer",children:[(0,d.jsxs)(b,{children:[(0,d.jsx)(w,{className:"mobile-view",children:(0,d.jsx)("h4",{children:"For More Information"})}),(0,d.jsxs)(w,{style:{marginTop:"40px"},children:[" ",(0,d.jsxs)("p",{className:"new",children:[(0,d.jsx)("span",{children:"Shri. Abdullakutty AP"}),(0,d.jsx)("br",{}),"Event Convener",(0,d.jsx)("br",{}),"Ph: +91 96056 23333"]})]}),(0,d.jsxs)(w,{style:{marginTop:"40px"},children:["",(0,d.jsxs)("p",{className:"new",children:[(0,d.jsx)("span",{children:"Dr. Aji Abdulla"}),(0,d.jsx)("br",{}),"Conference Organising Secretary",(0,d.jsx)("br",{}),"Ph: +91 94473 82438"]})]}),(0,d.jsxs)(w,{style:{marginTop:"40px"},children:["",(0,d.jsxs)("p",{className:"new",children:[(0,d.jsx)("span",{children:" Mr. Manoj Joseph"}),(0,d.jsx)("br",{}),"International Business Forum Secretary",(0,d.jsx)("br",{}),"Ph: +971 50301 44999"]})]})]}),(0,d.jsx)(m,{}),(0,d.jsxs)(b,{children:[(0,d.jsx)(w,{children:(0,d.jsx)("img",{alt:"forth",src:c,width:250,height:150})}),(0,d.jsx)(w,{children:(0,d.jsx)("img",{alt:"fifth",src:A,width:250,height:150})}),(0,d.jsx)(w,{children:(0,d.jsx)("img",{alt:"sixth",src:u,width:250,height:150})})]}),(0,d.jsx)(m,{}),(0,d.jsxs)(h,{children:[(0,d.jsxs)(v,{children:["\xa9",o()().format("y")," ",null===(a=B.franchise)||void 0===a?void 0:a.name,". All rights reserved | Developed by ",(0,d.jsx)("a",{href:"https://datahex.co",children:"DataHex"})]}),(0,d.jsx)("div",{className:"social-icons",children:I.map((e=>{let{platform:t,icon:r}=e;return B[t]&&B[t].length>1&&(0,d.jsx)("a",{href:B[t],children:(0,d.jsx)(l.A0,{icon:r})},t)}))})]})]})});case"theme2":return(0,d.jsx)(f,{id:C,children:(0,d.jsxs)(i.m,{className:"column footer",children:[(0,d.jsxs)(h,{children:[(0,d.jsxs)("div",{className:"footer-logo",children:[(0,d.jsx)("img",{src:"https://event-manager.syd1.cdn.digitaloceanspaces.com/"+B.franchise.logo,alt:"Logo"}),(0,d.jsxs)(v,{className:E,children:["\xa9",o()().format("y")," ",null===(x=B.franchise)||void 0===x?void 0:x.name,". All rights reserved | Developed by Datahex"]})]}),(0,d.jsxs)("div",{className:"footer-links",children:[(0,d.jsx)("h3",{style:{color:"#fff"},children:"Company"}),(0,d.jsx)("p",{children:"About Us"}),(0,d.jsx)("p",{children:" Contact us"}),(0,d.jsx)("p",{children:"Pricing"}),(0,d.jsx)("p",{children:"Testimonials"})]}),(0,d.jsxs)("div",{className:"footer-links",children:[(0,d.jsx)("h3",{style:{color:"#fff"},children:"Support"}),(0,d.jsx)("p",{children:"Help Center"}),(0,d.jsx)("p",{children:"Legal"}),(0,d.jsx)("p",{children:"Privacy and Policy"}),(0,d.jsx)("p",{children:"Terms & Conditions"})]}),(0,d.jsxs)(p,{className:E,children:[(0,d.jsx)("p",{style:{color:"#fff"},children:"Stay upto date"}),(0,d.jsx)(g,{type:"email",className:"email-input theme2",placeholder:"Your email address"})]})]}),(0,d.jsx)(h,{children:(0,d.jsx)("div",{className:"social-icons",children:I.map((e=>{let{platform:t,icon:r}=e;return B[t]&&B[t].length>1&&(0,d.jsx)("a",{href:B[t],children:(0,d.jsx)(l.A0,{icon:r})},t)}))})})]})});case"theme3":return(0,d.jsxs)(f,{id:C,className:E,children:[(0,d.jsx)("h1",{style:{color:"#fff"},children:"Subscribe to get latest news"}),(0,d.jsxs)(p,{children:[(0,d.jsx)(g,{type:"email",className:"email-input",placeholder:"Type your email here"}),(0,d.jsx)(y,{type:"submit",className:"subscribe-button",children:"Subscribe"})]}),(0,d.jsxs)(i.m,{className:"column footer",children:[(0,d.jsxs)(h,{children:[(0,d.jsxs)("div",{className:"footer-logo",children:[(0,d.jsx)("img",{src:"https://event-manager.syd1.cdn.digitaloceanspaces.com/"+B.franchise.logo,alt:"Logo"}),(0,d.jsx)("p",{style:{color:"white",fontSize:"small"},className:"timer-texts",children:B.description})]}),(0,d.jsxs)("div",{className:"footer-links",children:[(0,d.jsx)("p",{children:"About Us"}),(0,d.jsx)("p",{children:"Events"}),(0,d.jsx)("p",{children:"Album"}),(0,d.jsx)("p",{children:"Update"})]}),(0,d.jsxs)("div",{className:"footer-links",children:[(0,d.jsx)("p",{children:"Contact Us"}),(0,d.jsx)("p",{children:"Speakers"}),(0,d.jsx)("p",{children:"Privacy and Policy"}),(0,d.jsx)("p",{children:"Terms & Conditions"})]})]}),(0,d.jsx)(m,{}),(0,d.jsxs)(h,{children:[(0,d.jsxs)(v,{children:["\xa9",o()().format("y")," ",". All rights reserved |Developed by"," ",(0,d.jsx)("a",{href:"https://datahex.co",children:"DataHex"})]}),(0,d.jsx)("div",{className:"social-icons",children:I.map((e=>{let{platform:t,icon:r}=e;return B[t]&&B[t].length>1&&(0,d.jsx)("a",{href:B[t],children:(0,d.jsx)(l.A0,{icon:r})},t)}))})]})]})]})}}},14850:(e,t,r)=>{"use strict";r.d(t,{A:()=>St});var n=r(65043),i=r(94574),a=r(8289),o=r(35475);const s=r.p+"static/media/img1.46143e4dc10678d2eec6.png",l=r.p+"static/media/img2.95cea2b5e7a777ccf521.png",c=r.p+"static/media/img3.ed0f538c73fbce2bc447.png",A=r.p+"static/media/Rectangle.d06ca5883bf03167b761.png";var u=r(46861),d=r(70579);const f=i.Ay.div`
  display: block;
  width: 50%;
  &.theme2 {
    padding: 0 30px;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 30px;
    margin: auto;
    &.theme2 {
      padding: 30px 30px;
      p {
        line-height: normal;
        margin-top: 20px;
      }
    }
  }
`,h=i.Ay.div`
  flex: 0.7;
  background-image: url(${e=>e.src});
  background-size: cover;
  display: flex;
  img {
    width: 100%;
    height: auto;
    max-height: 350px;
    padding: 0px 0px 0px 0px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    margin: auto;
    object-fit: contain;
    max-width: 100%;
  }
  &.full-image img {
    object-fit: contain;
    max-height: fit-content;
  }
  &.theme4 img {
    padding: 0px;
    max-width: 500px;
    height: 100%;
    margin-top: 0;
  }
  @media (max-width: 768px) {
    background-position: right;
  }
`,p=i.Ay.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  width: 90%;
  align-items: baseline;
  margin: auto;
  gap: 30px;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
    font-size: 20px;
  }
`,g=i.Ay.h2`
  font-size: 35px;
  color: white;
  padding: 0px;
  padding-bottom: 10px;
  font-family: Sora;
  font-size: 45px;
  font-weight: 500;
  line-height: 48px;
  text-align: left;
  &.new {
    color: black;
  }
  &.theme4 {
    width: 250px;
    font-size: 38px;
    font-weight: 500;
    line-height: 38px;
  }
  @media (max-width: 768px) {
    font-size: 25px;
    text-align: center;
    line-height: normal;
    margin-top: 40px;
    margin-bottom: 0;
    &.theme4 {
      margin: auto;
      font-size: 32px;
    }
  }
`,m=i.Ay.p`
  color: white;
  max-width: 90%;
  font-family: Sora;
  font-size: 22px;
  font-weight: 300;
  line-height: 32px;
  text-align: left;
  &.new {
    color: black;
    font-size: 14px;
    line-height: 20px;
  }
  &.theme4 {
    line-height: 30px;
    font-size: 18px;
    font-weight: lighter;
  }
  @media (max-width: 768px) {
    font-size: 17px;
    text-align: center;
    margin: auto;
    &.theme4 {
      margin: auto;
      font-size: 15px;
      margin-top: 20px;
    }
  }
`,v=(0,i.Ay)(o.N_)`
  border-radius: 8px;
  text-decoration: none;
  color: white;
  border: 1px solid;
  padding: 10px 20px;
  margin-top: 23px;
  display: inline-block;
  @media (max-width: 768px) {
    margin: auto auto 50px;
    justify-content: center;
    display: flex;
    width: max-content;
    margin-top: 50px;
  }
`,y=i.Ay.button`
  background: ${e=>e.event.themeColor};
  color: ${e=>e.event.themeTextColor};
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 20px;
  font-size: 18px;
  cursor: pointer;
  &.grab {
    border: 1px solid;
    background: transparent;
    margin: auto;
    position: relative;
    ::after {
      content: "";
      position: absolute;
      width: 50px;
      left: -50px;
      height: 1px;
      background: white;
      top: 50%;
    }
    ::before {
      content: "";
      position: absolute;
      width: 50px;
      right: -50px;
      height: 1px;
      background: white;
      top: 50%;
    }
  }
`,b=i.Ay.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: -150px;
  margin-bottom: 50px;

  &.normal {
    margin-top: 0px;
    margin-bottom: 50px;
  }
  svg {
    width: 250px;
  }
  img {
    width: 300px;
    max-width: 27%;
  }
  @media (max-width: 768px) {
    flex-direction: row;
    width: 100%;
    overflow: auto;
    white-space: nowrap;
    display: flex;
    justify-content: flex-start;
    padding-left: 50px;
    padding-right: 50px;
    svg {
      width: 100%;
      min-width: 250px;
      justify-content: flex-start;
      align-items: baseline;
    }
    img {
      width: 100%;
      min-width: 250px;
      justify-content: flex-start;
      align-items: baseline;
    }
  }
`,w=i.Ay.div`
  height: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`,x=i.Ay.div`
  width: 45%;
  background-color: white;

  @media (max-width: 768px) {
    width: 70%;
  }
`,C=i.Ay.div`
  width: 55%;
  background-color: #8f1837;
  padding: 80px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 40px;
  }
`,B=i.Ay.div`
  width: 300px;
  height: auto;
  margin-left: 100px;
  max-width: 100%;

  @media (max-width: 768px) {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
`,E=i.Ay.div`
  padding: 30px;
  width: 350px;
  height: auto;
  color: #fff;

  @media (max-width: 768px) {
    width: 80%;
    margin: 0 auto;
  }
`,k=i.Ay.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  margin-top: 20px;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`,I=i.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 5px; /* Adjust gap between lines */
`,S=i.Ay.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px; /* Adjust gap between icon and text */
`,D=i.Ay.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 10px; /* Adjust font size as needed */
  margin: 0; /* Remove default margin */
  padding: 0; /* Ensure no padding */

  @media (max-width: 768px) {
    font-size: 10px;
  }
`,Q=i.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
`,_=i.Ay.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  width: 100%;
  height: 100%;
  margin-bottom: 50px;
  @media (max-width: 768px) {
    max-width: 100%;
    &.mobile-column {
      flex-direction: column;
    }
  }
`,T=e=>{let{event:t,sectionTheme:r,id:i,config:o}=e;const T=window.matchMedia("(max-width: 600px)").matches,F="https://event-manager.syd1.cdn.digitaloceanspaces.com/"+o.image,O="https://event-manager.syd1.cdn.digitaloceanspaces.com/"+o.backgroundImage;switch(r){default:case"theme6":return(0,d.jsx)(a.w,{id:i,style:{display:"flex",justifyContent:"center",alignItems:"center",height:"400px"},children:(0,d.jsx)(w,{id:i,style:{backgroundImage:`url(${O})`,backgroundSize:"cover",backgroundPosition:"center",width:"100%",height:"100%",margin:"auto",padding:"20px",marginTop:"40px",marginBottom:"80px"},children:(0,d.jsxs)(_,{className:"mobile-column",children:[(0,d.jsxs)(f,{children:[(0,d.jsx)(g,{className:"new",children:o.title}),(0,d.jsx)(m,{className:"new",dangerouslySetInnerHTML:{__html:o.description}})]}),(0,d.jsx)(h,{className:"new",children:(0,d.jsx)("img",{alt:"about-us",src:F})})]})})});case"theme7":return(0,d.jsx)(a.w,{id:i,children:(0,d.jsxs)(w,{id:i,children:[(0,d.jsx)(x,{children:(0,d.jsx)(B,{children:(0,d.jsx)("img",{src:A,width:"250px",height:"350px",alt:"Group "})})}),(0,d.jsx)(C,{children:(0,d.jsxs)(E,{children:[(0,d.jsx)("p",{style:{fontSize:"24px"},children:"A Business Networking Event to expand your Horizon"}),(0,d.jsxs)(I,{children:[(0,d.jsxs)(S,{children:[(0,d.jsx)(Q,{children:(0,d.jsx)(u.A0,{icon:"date"})}),(0,d.jsx)(D,{children:"03 Aug 2024 | 5 PM to 9 PM"})]}),(0,d.jsxs)(S,{children:[(0,d.jsx)(Q,{children:(0,d.jsx)(u.A0,{icon:"location"})}),(0,d.jsx)(D,{children:"Hyatt Regency, Trivandrum"})]})]}),(0,d.jsx)(k,{style:{fontSize:10},children:"Bringing together Malayali business community from Middle East Region, America region, Europe Region & India Region"})]})})]})});case"theme1":return(0,d.jsx)(a.w,{className:"padding-both",background:`linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url(${O}) center center/cover no-repeat;`,id:i,children:(0,d.jsxs)(a.m,{className:"mobile-column",children:[(0,d.jsxs)(f,{children:[(0,d.jsx)(g,{children:o.title}),(0,d.jsx)(m,{dangerouslySetInnerHTML:{__html:o.description}}),(0,d.jsx)(y,{event:t,children:"Read more"})]}),(0,d.jsx)(h,{})]})});case"theme2":return(0,d.jsx)(a.w,{className:"padding-large",background:o.backgroundImage?`url(${O}) center top/cover no-repeat;`:"black;",id:i,children:(0,d.jsxs)(a.m,{className:"mobile-column reverse",children:[(0,d.jsxs)(f,{className:"theme2",children:[(0,d.jsx)(g,{children:o.title}),(0,d.jsx)(m,{dangerouslySetInnerHTML:{__html:o.description}})]}),(0,d.jsx)(h,{children:(0,d.jsx)("img",{alt:"about-us",src:F})})]})});case"theme5":return(0,d.jsxs)(a.w,{className:"padding-large",background:o.backgroundImage?`url(${O}) center top/cover no-repeat;`:"black;",id:i,children:[(0,d.jsx)(a.m,{className:"mobile-column reverse",children:(0,d.jsxs)(p,{className:"mobile-column",children:[(0,d.jsx)(g,{children:o.title}),(0,d.jsx)(m,{dangerouslySetInnerHTML:{__html:o.description}})]})}),(0,d.jsx)(a.m,{children:(0,d.jsx)(a.w,{children:(0,d.jsxs)(b,{className:"normal",children:[(0,d.jsx)("img",{alt:"",src:s}),(0,d.jsx)("img",{alt:"",src:l}),(0,d.jsx)("img",{alt:"",src:c})]})})}),(0,d.jsx)(a.m,{children:(0,d.jsx)(y,{onClick:()=>window.location.href="/events",className:"grab",event:t,children:"Grab Your Seats"})})]});case"theme3":return(0,d.jsx)(a.w,{className:"padding",background:"black;",id:i,children:(0,d.jsxs)(a.m,{className:"reverse mobile-column",children:[(0,d.jsxs)(f,{className:"theme2",children:[(0,d.jsx)(g,{children:o.title}),(0,d.jsx)(m,{dangerouslySetInnerHTML:{__html:o.description}})]}),(0,d.jsx)(h,{children:(0,d.jsx)("img",{alt:"about-us",src:F})})]})});case"fullBackground":return(0,d.jsx)(n.Fragment,{children:(0,d.jsx)(a.w,{className:"",background:"transparent;",id:i,children:(0,d.jsx)("img",{alt:"about-us",src:T?O:F})})});case"theme4":return(0,d.jsxs)(n.Fragment,{children:[(0,d.jsx)(a.w,{className:"padding",background:o.backgroundImage?`url(${O}) center top/cover no-repeat;`:"black;",style:{backgroundSize:"cover",backgroundRepeat:"no-repeat",zIndex:"inherit",position:"relative",zindex:1,backgroundPosition:"top",marginTop:"0px",paddingTop:"150px",paddingBottom:"200px"},id:i,children:(0,d.jsxs)(a.m,{className:"mobile-column",children:[(0,d.jsxs)(f,{className:"theme4",children:[(0,d.jsx)(g,{className:"theme4",children:o.title}),(0,d.jsx)(m,{className:"theme4",dangerouslySetInnerHTML:{__html:o.description}}),(0,d.jsx)(v,{to:"/events",children:"Events"})]}),(0,d.jsx)(h,{className:"full-image theme4",children:(0,d.jsx)("img",{alt:"about-us",src:F})})]})}),(0,d.jsx)(a.w,{children:(0,d.jsxs)(b,{children:[(0,d.jsxs)("svg",{width:"271",height:"465",viewBox:"0 0 271 465",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,d.jsx)("path",{d:"M254.983 16V393.913L16 444.822V16H254.983Z",fill:"#1F9548"}),(0,d.jsx)("path",{d:"M254.983 16V393.913L16 444.822V16H254.983Z",fill:"#1F9548"}),(0,d.jsx)("path",{d:"M135.373 89.1674C120.718 89.1674 108.189 87.2731 96.6066 83.4845C86.2057 79.9327 78.4051 75.4337 70.6044 71.1715C63.2766 67.1461 56.4215 63.3575 48.1481 60.5161C38.6928 57.4379 28.5283 55.7803 16 55.7803V34.4695C30.6557 34.4695 43.184 36.3638 54.7668 40.1524C65.1676 43.7042 72.9683 48.2031 80.7689 52.4653C88.0968 56.4907 94.7155 60.2793 103.225 63.1207C112.681 66.199 122.845 67.8565 135.373 67.8565C147.665 67.8565 158.066 66.4358 167.521 63.1207C175.795 60.2793 182.65 56.4907 189.978 52.4653C197.778 48.2031 205.815 43.7042 215.98 40.1524C227.563 36.3638 240.327 34.4695 254.747 34.4695V55.7803C242.455 55.7803 232.054 57.2011 222.599 60.5161C214.325 63.3575 207.47 67.1461 200.142 71.1715C192.342 75.4337 184.305 79.9327 174.14 83.4845C162.794 87.2731 150.029 89.1674 135.373 89.1674Z",fill:"#EFD157"}),(0,d.jsx)("path",{d:"M135.373 128.711C120.718 128.711 108.189 126.817 96.6066 123.028C86.2057 119.476 78.4051 114.977 70.6044 110.715C63.2766 106.69 56.4215 102.901 48.1481 100.06C38.6928 96.9813 28.5283 95.3238 16 95.3238V74.0129C30.6557 74.0129 43.184 75.9072 54.7668 79.6958C65.1676 83.2476 72.9683 87.7466 80.7689 92.0088C88.0968 96.0342 94.7155 99.8228 103.225 102.664C112.681 105.742 122.845 107.4 135.373 107.4C147.665 107.4 158.066 105.979 167.521 102.664C175.795 99.8228 182.65 96.0342 189.978 92.0088C197.778 87.7466 205.815 83.2476 215.98 79.6958C227.563 75.9072 240.327 74.0129 254.747 74.0129V95.3238C242.455 95.3238 232.054 96.7445 222.599 100.06C214.325 102.901 207.47 106.69 200.142 110.715C192.342 114.977 184.305 119.476 174.14 123.028C162.794 126.817 150.029 128.711 135.373 128.711Z",fill:"#EFD157"}),(0,d.jsx)("path",{opacity:"0.65",d:"M16 8H8V16V444.822V454.706L17.6668 452.646L256.65 401.737L262.983 400.388V393.913V16V8H254.983H16Z",stroke:"url(#paint0_linear_355_1736)",strokeWidth:"16"}),(0,d.jsx)("path",{d:"M52.784 284.104V281.868H58.088C59.1107 281.868 59.8993 281.582 60.454 281.01C61.026 280.421 61.312 279.641 61.312 278.67C61.312 277.682 61.0347 276.911 60.48 276.356C59.9253 275.784 59.128 275.498 58.088 275.498H52.784V273.834H57.724C58.9373 273.834 60.0033 273.981 60.922 274.276C61.858 274.571 62.586 275.065 63.106 275.758C63.6433 276.434 63.912 277.361 63.912 278.54V278.904C63.912 280.013 63.6867 280.958 63.236 281.738C62.7853 282.501 62.1007 283.09 61.182 283.506C60.2633 283.905 59.1107 284.104 57.724 284.104H52.784ZM50.756 284.104V264.916H53.304V284.104H50.756ZM52.784 275.03V273.366H57.386C58.4607 273.366 59.2493 273.08 59.752 272.508C60.272 271.919 60.532 271.173 60.532 270.272C60.532 269.353 60.272 268.608 59.752 268.036C59.2493 267.447 58.4607 267.152 57.386 267.152H52.784V264.916H56.944C59.024 264.916 60.5753 265.358 61.598 266.242C62.6207 267.109 63.132 268.365 63.132 270.012V270.376C63.132 271.537 62.872 272.465 62.352 273.158C61.832 273.834 61.104 274.319 60.168 274.614C59.2493 274.891 58.1747 275.03 56.944 275.03H52.784ZM72.8739 284.416C71.2272 284.416 69.9619 283.879 69.0779 282.804C68.1939 281.729 67.7519 280.178 67.7519 278.15V270.09H70.2479V278.644C70.2479 279.736 70.5425 280.594 71.1319 281.218C71.7212 281.825 72.5185 282.128 73.5239 282.128C74.5639 282.128 75.4132 281.799 76.0719 281.14C76.7305 280.464 77.0599 279.545 77.0599 278.384V270.09H79.5559V284H77.5799V278.046H77.8919C77.8919 279.415 77.7099 280.577 77.3459 281.53C76.9819 282.466 76.4359 283.185 75.7079 283.688C74.9972 284.173 74.0872 284.416 72.9779 284.416H72.8739ZM88.94 284.416C87.12 284.416 85.7074 284.026 84.702 283.246C83.714 282.466 83.2027 281.4 83.168 280.048H85.508C85.5427 280.585 85.8114 281.097 86.314 281.582C86.834 282.05 87.7094 282.284 88.94 282.284C90.0494 282.284 90.8987 282.067 91.488 281.634C92.0774 281.183 92.372 280.637 92.372 279.996C92.372 279.424 92.1554 278.982 91.722 278.67C91.2887 278.341 90.5867 278.124 89.616 278.02L88.108 277.864C86.7907 277.725 85.716 277.335 84.884 276.694C84.052 276.035 83.636 275.117 83.636 273.938C83.636 273.054 83.8614 272.3 84.312 271.676C84.7627 271.035 85.3867 270.549 86.184 270.22C86.9814 269.873 87.9 269.7 88.94 269.7C90.5 269.7 91.7654 270.047 92.736 270.74C93.7067 271.433 94.2094 272.465 94.244 273.834H91.904C91.8867 273.279 91.6267 272.811 91.124 272.43C90.6387 272.031 89.9107 271.832 88.94 271.832C87.9694 271.832 87.2327 272.031 86.73 272.43C86.2274 272.829 85.976 273.331 85.976 273.938C85.976 274.458 86.1494 274.874 86.496 275.186C86.86 275.498 87.4494 275.697 88.264 275.784L89.772 275.94C91.2627 276.096 92.4587 276.512 93.36 277.188C94.2614 277.847 94.712 278.783 94.712 279.996C94.712 280.863 94.4607 281.634 93.958 282.31C93.4727 282.969 92.7967 283.489 91.93 283.87C91.0634 284.234 90.0667 284.416 88.94 284.416ZM99.0055 284V270.116H101.502V284H99.0055ZM96.8735 272.092V270.116H101.502V272.092H96.8735ZM99.7075 267.88C99.1528 267.88 98.7368 267.733 98.4595 267.438C98.1995 267.143 98.0695 266.771 98.0695 266.32C98.0695 265.869 98.1995 265.497 98.4595 265.202C98.7368 264.907 99.1528 264.76 99.7075 264.76C100.262 264.76 100.67 264.907 100.93 265.202C101.207 265.497 101.346 265.869 101.346 266.32C101.346 266.771 101.207 267.143 100.93 267.438C100.67 267.733 100.262 267.88 99.7075 267.88ZM106.328 284V270.116H108.304V276.07H107.992C107.992 274.701 108.174 273.548 108.538 272.612C108.919 271.659 109.491 270.939 110.254 270.454C111.016 269.951 111.978 269.7 113.14 269.7H113.244C114.994 269.7 116.286 270.246 117.118 271.338C117.967 272.43 118.392 274.007 118.392 276.07V284H115.896V275.55C115.896 274.475 115.592 273.617 114.986 272.976C114.379 272.317 113.547 271.988 112.49 271.988C111.398 271.988 110.514 272.326 109.838 273.002C109.162 273.678 108.824 274.579 108.824 275.706V284H106.328ZM128.86 284.468C127.647 284.468 126.598 284.26 125.714 283.844C124.83 283.428 124.111 282.882 123.556 282.206C123.002 281.513 122.586 280.741 122.308 279.892C122.048 279.043 121.918 278.176 121.918 277.292V276.824C121.918 275.923 122.048 275.047 122.308 274.198C122.586 273.349 123.002 272.586 123.556 271.91C124.111 271.217 124.813 270.671 125.662 270.272C126.529 269.856 127.543 269.648 128.704 269.648C130.212 269.648 131.452 269.977 132.422 270.636C133.41 271.277 134.138 272.109 134.606 273.132C135.092 274.155 135.334 275.247 135.334 276.408V277.526H123.01V275.654H133.514L132.942 276.668C132.942 275.68 132.786 274.831 132.474 274.12C132.162 273.392 131.694 272.829 131.07 272.43C130.446 272.031 129.658 271.832 128.704 271.832C127.716 271.832 126.893 272.057 126.234 272.508C125.593 272.959 125.108 273.574 124.778 274.354C124.466 275.134 124.31 276.035 124.31 277.058C124.31 278.046 124.466 278.939 124.778 279.736C125.108 280.516 125.61 281.14 126.286 281.608C126.962 282.059 127.82 282.284 128.86 282.284C129.952 282.284 130.836 282.041 131.512 281.556C132.206 281.071 132.622 280.507 132.76 279.866H135.1C134.91 280.819 134.528 281.643 133.956 282.336C133.384 283.029 132.665 283.558 131.798 283.922C130.932 284.286 129.952 284.468 128.86 284.468ZM143.428 284.416C141.608 284.416 140.196 284.026 139.19 283.246C138.202 282.466 137.691 281.4 137.656 280.048H139.996C140.031 280.585 140.3 281.097 140.802 281.582C141.322 282.05 142.198 282.284 143.428 282.284C144.538 282.284 145.387 282.067 145.976 281.634C146.566 281.183 146.86 280.637 146.86 279.996C146.86 279.424 146.644 278.982 146.21 278.67C145.777 278.341 145.075 278.124 144.104 278.02L142.596 277.864C141.279 277.725 140.204 277.335 139.372 276.694C138.54 276.035 138.124 275.117 138.124 273.938C138.124 273.054 138.35 272.3 138.8 271.676C139.251 271.035 139.875 270.549 140.672 270.22C141.47 269.873 142.388 269.7 143.428 269.7C144.988 269.7 146.254 270.047 147.224 270.74C148.195 271.433 148.698 272.465 148.732 273.834H146.392C146.375 273.279 146.115 272.811 145.612 272.43C145.127 272.031 144.399 271.832 143.428 271.832C142.458 271.832 141.721 272.031 141.218 272.43C140.716 272.829 140.464 273.331 140.464 273.938C140.464 274.458 140.638 274.874 140.984 275.186C141.348 275.498 141.938 275.697 142.752 275.784L144.26 275.94C145.751 276.096 146.947 276.512 147.848 277.188C148.75 277.847 149.2 278.783 149.2 279.996C149.2 280.863 148.949 281.634 148.446 282.31C147.961 282.969 147.285 283.489 146.418 283.87C145.552 284.234 144.555 284.416 143.428 284.416ZM157.368 284.416C155.548 284.416 154.135 284.026 153.13 283.246C152.142 282.466 151.63 281.4 151.596 280.048H153.936C153.97 280.585 154.239 281.097 154.742 281.582C155.262 282.05 156.137 282.284 157.368 282.284C158.477 282.284 159.326 282.067 159.916 281.634C160.505 281.183 160.8 280.637 160.8 279.996C160.8 279.424 160.583 278.982 160.15 278.67C159.716 278.341 159.014 278.124 158.044 278.02L156.536 277.864C155.218 277.725 154.144 277.335 153.312 276.694C152.48 276.035 152.064 275.117 152.064 273.938C152.064 273.054 152.289 272.3 152.74 271.676C153.19 271.035 153.814 270.549 154.612 270.22C155.409 269.873 156.328 269.7 157.368 269.7C158.928 269.7 160.193 270.047 161.164 270.74C162.134 271.433 162.637 272.465 162.672 273.834H160.332C160.314 273.279 160.054 272.811 159.552 272.43C159.066 272.031 158.338 271.832 157.368 271.832C156.397 271.832 155.66 272.031 155.158 272.43C154.655 272.829 154.404 273.331 154.404 273.938C154.404 274.458 154.577 274.874 154.924 275.186C155.288 275.498 155.877 275.697 156.692 275.784L158.2 275.94C159.69 276.096 160.886 276.512 161.788 277.188C162.689 277.847 163.14 278.783 163.14 279.996C163.14 280.863 162.888 281.634 162.386 282.31C161.9 282.969 161.224 283.489 160.358 283.87C159.491 284.234 158.494 284.416 157.368 284.416ZM52.784 312.104V309.764H57.516C58.66 309.764 59.674 309.582 60.558 309.218C61.4593 308.837 62.222 308.317 62.846 307.658C63.4873 306.999 63.9727 306.228 64.302 305.344C64.6313 304.46 64.796 303.507 64.796 302.484C64.796 301.409 64.6313 300.439 64.302 299.572C63.9727 298.688 63.4873 297.925 62.846 297.284C62.222 296.625 61.4593 296.123 60.558 295.776C59.674 295.429 58.66 295.256 57.516 295.256H52.784V292.916H57.256C58.972 292.916 60.4627 293.185 61.728 293.722C62.9933 294.242 64.042 294.953 64.874 295.854C65.7233 296.738 66.356 297.735 66.772 298.844C67.188 299.936 67.396 301.054 67.396 302.198V302.77C67.396 303.879 67.188 304.989 66.772 306.098C66.356 307.207 65.7233 308.213 64.874 309.114C64.042 310.015 62.9933 310.743 61.728 311.298C60.4627 311.835 58.972 312.104 57.256 312.104H52.784ZM50.756 312.104V292.916H53.304V312.104H50.756ZM76.8604 312.468C75.6471 312.468 74.5984 312.26 73.7144 311.844C72.8304 311.428 72.1111 310.882 71.5564 310.206C71.0017 309.513 70.5857 308.741 70.3084 307.892C70.0484 307.043 69.9184 306.176 69.9184 305.292V304.824C69.9184 303.923 70.0484 303.047 70.3084 302.198C70.5857 301.349 71.0017 300.586 71.5564 299.91C72.1111 299.217 72.8131 298.671 73.6624 298.272C74.5291 297.856 75.5431 297.648 76.7044 297.648C78.2124 297.648 79.4517 297.977 80.4224 298.636C81.4104 299.277 82.1384 300.109 82.6064 301.132C83.0917 302.155 83.3344 303.247 83.3344 304.408V305.526H71.0104V303.654H81.5144L80.9424 304.668C80.9424 303.68 80.7864 302.831 80.4744 302.12C80.1624 301.392 79.6944 300.829 79.0704 300.43C78.4464 300.031 77.6577 299.832 76.7044 299.832C75.7164 299.832 74.8931 300.057 74.2344 300.508C73.5931 300.959 73.1077 301.574 72.7784 302.354C72.4664 303.134 72.3104 304.035 72.3104 305.058C72.3104 306.046 72.4664 306.939 72.7784 307.736C73.1077 308.516 73.6104 309.14 74.2864 309.608C74.9624 310.059 75.8204 310.284 76.8604 310.284C77.9524 310.284 78.8364 310.041 79.5124 309.556C80.2057 309.071 80.6217 308.507 80.7604 307.866H83.1004C82.9097 308.819 82.5284 309.643 81.9564 310.336C81.3844 311.029 80.6651 311.558 79.7984 311.922C78.9317 312.286 77.9524 312.468 76.8604 312.468ZM87.0343 312V293.02H89.5303V312H87.0343ZM85.1103 294.996V293.02H89.5303V294.996H85.1103ZM100.22 312.468C99.0064 312.468 97.9578 312.26 97.0738 311.844C96.1898 311.428 95.4704 310.882 94.9158 310.206C94.3611 309.513 93.9451 308.741 93.6678 307.892C93.4078 307.043 93.2778 306.176 93.2778 305.292V304.824C93.2778 303.923 93.4078 303.047 93.6678 302.198C93.9451 301.349 94.3611 300.586 94.9158 299.91C95.4704 299.217 96.1724 298.671 97.0218 298.272C97.8884 297.856 98.9024 297.648 100.064 297.648C101.572 297.648 102.811 297.977 103.782 298.636C104.77 299.277 105.498 300.109 105.966 301.132C106.451 302.155 106.694 303.247 106.694 304.408V305.526H94.3698V303.654H104.874L104.302 304.668C104.302 303.68 104.146 302.831 103.834 302.12C103.522 301.392 103.054 300.829 102.43 300.43C101.806 300.031 101.017 299.832 100.064 299.832C99.0758 299.832 98.2524 300.057 97.5938 300.508C96.9524 300.959 96.4671 301.574 96.1378 302.354C95.8258 303.134 95.6698 304.035 95.6698 305.058C95.6698 306.046 95.8258 306.939 96.1378 307.736C96.4671 308.516 96.9698 309.14 97.6458 309.608C98.3218 310.059 99.1798 310.284 100.22 310.284C101.312 310.284 102.196 310.041 102.872 309.556C103.565 309.071 103.981 308.507 104.12 307.866H106.46C106.269 308.819 105.888 309.643 105.316 310.336C104.744 311.029 104.024 311.558 103.158 311.922C102.291 312.286 101.312 312.468 100.22 312.468ZM115.49 317.408C114.848 317.408 114.198 317.382 113.54 317.33C112.898 317.278 112.283 317.209 111.694 317.122V315.016C112.318 315.103 112.968 315.172 113.644 315.224C114.337 315.293 114.987 315.328 115.594 315.328C116.859 315.328 117.864 315.155 118.61 314.808C119.372 314.479 119.918 313.95 120.248 313.222C120.594 312.511 120.768 311.593 120.768 310.466V307.814L121.6 305.838C121.548 307.242 121.253 308.412 120.716 309.348C120.178 310.267 119.476 310.96 118.61 311.428C117.76 311.879 116.816 312.104 115.776 312.104C114.805 312.104 113.912 311.922 113.098 311.558C112.3 311.177 111.607 310.657 111.018 309.998C110.446 309.339 109.995 308.585 109.666 307.736C109.354 306.869 109.198 305.959 109.198 305.006V304.538C109.198 303.567 109.362 302.666 109.692 301.834C110.021 300.985 110.48 300.248 111.07 299.624C111.659 299 112.361 298.515 113.176 298.168C114.008 297.821 114.918 297.648 115.906 297.648C117.067 297.648 118.09 297.899 118.974 298.402C119.858 298.887 120.551 299.607 121.054 300.56C121.574 301.496 121.86 302.649 121.912 304.018L121.184 304.044V298.116H123.16V310.362C123.16 312.026 122.9 313.369 122.38 314.392C121.877 315.432 121.062 316.195 119.936 316.68C118.826 317.165 117.344 317.408 115.49 317.408ZM116.244 309.816C117.076 309.816 117.83 309.634 118.506 309.27C119.199 308.906 119.745 308.386 120.144 307.71C120.56 307.017 120.768 306.193 120.768 305.24V304.044C120.768 303.108 120.551 302.319 120.118 301.678C119.702 301.037 119.156 300.551 118.48 300.222C117.804 299.893 117.067 299.728 116.27 299.728C115.368 299.728 114.571 299.936 113.878 300.352C113.184 300.768 112.647 301.357 112.266 302.12C111.884 302.865 111.694 303.749 111.694 304.772C111.694 305.795 111.884 306.687 112.266 307.45C112.664 308.213 113.202 308.802 113.878 309.218C114.571 309.617 115.36 309.816 116.244 309.816ZM136.181 312V307.84H135.765V303.03C135.765 302.077 135.513 301.357 135.011 300.872C134.525 300.387 133.806 300.144 132.853 300.144C132.315 300.144 131.761 300.153 131.189 300.17C130.617 300.187 130.071 300.205 129.551 300.222C129.031 300.239 128.58 300.265 128.199 300.3V298.116C128.58 298.081 128.979 298.055 129.395 298.038C129.828 298.003 130.27 297.986 130.721 297.986C131.171 297.969 131.605 297.96 132.021 297.96C133.442 297.96 134.603 298.133 135.505 298.48C136.406 298.809 137.073 299.355 137.507 300.118C137.94 300.881 138.157 301.912 138.157 303.212V312H136.181ZM131.631 312.364C130.591 312.364 129.689 312.191 128.927 311.844C128.181 311.48 127.601 310.96 127.185 310.284C126.786 309.608 126.587 308.793 126.587 307.84C126.587 306.852 126.803 306.029 127.237 305.37C127.687 304.711 128.337 304.217 129.187 303.888C130.036 303.541 131.059 303.368 132.255 303.368H136.025V305.24H132.151C131.145 305.24 130.374 305.483 129.837 305.968C129.299 306.453 129.031 307.077 129.031 307.84C129.031 308.603 129.299 309.218 129.837 309.686C130.374 310.154 131.145 310.388 132.151 310.388C132.74 310.388 133.303 310.284 133.841 310.076C134.378 309.851 134.82 309.487 135.167 308.984C135.531 308.464 135.73 307.753 135.765 306.852L136.441 307.84C136.354 308.828 136.111 309.66 135.713 310.336C135.331 310.995 134.794 311.497 134.101 311.844C133.425 312.191 132.601 312.364 131.631 312.364ZM148.146 312.156C147.106 312.156 146.204 312.009 145.442 311.714C144.696 311.419 144.116 310.917 143.7 310.206C143.301 309.478 143.102 308.499 143.102 307.268V293.904H145.494V307.58C145.494 308.325 145.693 308.906 146.092 309.322C146.508 309.721 147.088 309.92 147.834 309.92H150.278V312.156H148.146ZM140.71 299.988V298.116H150.278V299.988H140.71ZM159.608 312.468C158.395 312.468 157.346 312.26 156.462 311.844C155.578 311.428 154.859 310.882 154.304 310.206C153.75 309.513 153.334 308.741 153.056 307.892C152.796 307.043 152.666 306.176 152.666 305.292V304.824C152.666 303.923 152.796 303.047 153.056 302.198C153.334 301.349 153.75 300.586 154.304 299.91C154.859 299.217 155.561 298.671 156.41 298.272C157.277 297.856 158.291 297.648 159.452 297.648C160.96 297.648 162.2 297.977 163.17 298.636C164.158 299.277 164.886 300.109 165.354 301.132C165.84 302.155 166.082 303.247 166.082 304.408V305.526H153.758V303.654H164.262L163.69 304.668C163.69 303.68 163.534 302.831 163.222 302.12C162.91 301.392 162.442 300.829 161.818 300.43C161.194 300.031 160.406 299.832 159.452 299.832C158.464 299.832 157.641 300.057 156.982 300.508C156.341 300.959 155.856 301.574 155.526 302.354C155.214 303.134 155.058 304.035 155.058 305.058C155.058 306.046 155.214 306.939 155.526 307.736C155.856 308.516 156.358 309.14 157.034 309.608C157.71 310.059 158.568 310.284 159.608 310.284C160.7 310.284 161.584 310.041 162.26 309.556C162.954 309.071 163.37 308.507 163.508 307.866H165.848C165.658 308.819 165.276 309.643 164.704 310.336C164.132 311.029 163.413 311.558 162.546 311.922C161.68 312.286 160.7 312.468 159.608 312.468ZM174.176 312.416C172.356 312.416 170.944 312.026 169.938 311.246C168.95 310.466 168.439 309.4 168.404 308.048H170.744C170.779 308.585 171.048 309.097 171.55 309.582C172.07 310.05 172.946 310.284 174.176 310.284C175.286 310.284 176.135 310.067 176.724 309.634C177.314 309.183 177.608 308.637 177.608 307.996C177.608 307.424 177.392 306.982 176.958 306.67C176.525 306.341 175.823 306.124 174.852 306.02L173.344 305.864C172.027 305.725 170.952 305.335 170.12 304.694C169.288 304.035 168.872 303.117 168.872 301.938C168.872 301.054 169.098 300.3 169.548 299.676C169.999 299.035 170.623 298.549 171.42 298.22C172.218 297.873 173.136 297.7 174.176 297.7C175.736 297.7 177.002 298.047 177.972 298.74C178.943 299.433 179.446 300.465 179.48 301.834H177.14C177.123 301.279 176.863 300.811 176.36 300.43C175.875 300.031 175.147 299.832 174.176 299.832C173.206 299.832 172.469 300.031 171.966 300.43C171.464 300.829 171.212 301.331 171.212 301.938C171.212 302.458 171.386 302.874 171.732 303.186C172.096 303.498 172.686 303.697 173.5 303.784L175.008 303.94C176.499 304.096 177.695 304.512 178.596 305.188C179.498 305.847 179.948 306.783 179.948 307.996C179.948 308.863 179.697 309.634 179.194 310.31C178.709 310.969 178.033 311.489 177.166 311.87C176.3 312.234 175.303 312.416 174.176 312.416ZM61.962 340L54.136 331.654C53.3387 330.787 52.7147 330.042 52.264 329.418C51.8307 328.794 51.5187 328.205 51.328 327.65C51.1547 327.095 51.068 326.497 51.068 325.856C51.068 324.729 51.276 323.793 51.692 323.048C52.1253 322.303 52.8013 321.748 53.72 321.384C54.6387 321.003 55.826 320.812 57.282 320.812C57.854 320.812 58.4953 320.838 59.206 320.89C59.9167 320.942 60.5493 321.003 61.104 321.072V323.256C60.7573 323.221 60.3067 323.187 59.752 323.152C59.1973 323.1 58.6513 323.065 58.114 323.048C57.5767 323.013 57.1347 322.996 56.788 322.996C55.5573 322.996 54.6907 323.247 54.188 323.75C53.7027 324.235 53.46 324.955 53.46 325.908C53.46 326.671 53.6333 327.373 53.98 328.014C54.344 328.655 54.9073 329.383 55.67 330.198L64.9 340H61.962ZM55.514 340.468C54.1793 340.468 53.0093 340.217 52.004 339.714C50.9987 339.211 50.2187 338.527 49.664 337.66C49.1093 336.793 48.832 335.831 48.832 334.774V334.384C48.832 333.136 49.1787 332.035 49.872 331.082C50.5827 330.111 51.458 329.331 52.498 328.742L53.798 330.484C53.0353 330.865 52.4113 331.429 51.926 332.174C51.458 332.902 51.224 333.708 51.224 334.592C51.224 335.407 51.4147 336.091 51.796 336.646C52.1947 337.201 52.7147 337.625 53.356 337.92C54.0147 338.197 54.734 338.336 55.514 338.336C56.7273 338.336 57.776 337.998 58.66 337.322C59.544 336.629 60.22 335.615 60.688 334.28C61.1733 332.928 61.416 331.255 61.416 329.262H63.652C63.652 330.995 63.47 332.555 63.106 333.942C62.7593 335.311 62.2393 336.481 61.546 337.452C60.8527 338.423 59.9947 339.168 58.972 339.688C57.9667 340.208 56.814 340.468 55.514 340.468ZM58.4 329.6V327.624H65.212V329.6H58.4ZM80.7344 340.468C79.1571 340.468 77.8137 340.208 76.7044 339.688C75.5951 339.168 74.7457 338.449 74.1564 337.53C73.5671 336.611 73.2724 335.571 73.2724 334.41H75.8204C75.8204 334.982 75.9677 335.554 76.2624 336.126C76.5744 336.698 77.0857 337.175 77.7964 337.556C78.5244 337.937 79.5037 338.128 80.7344 338.128C81.8784 338.128 82.8144 337.963 83.5424 337.634C84.2704 337.287 84.8077 336.845 85.1544 336.308C85.5011 335.753 85.6744 335.155 85.6744 334.514C85.6744 333.734 85.3364 333.093 84.6604 332.59C83.9844 332.07 82.9964 331.749 81.6964 331.628L79.5904 331.446C77.9091 331.307 76.5657 330.787 75.5604 329.886C74.5551 328.985 74.0524 327.797 74.0524 326.324C74.0524 325.163 74.3297 324.149 74.8844 323.282C75.4564 322.415 76.2451 321.739 77.2504 321.254C78.2557 320.751 79.4257 320.5 80.7604 320.5C82.0777 320.5 83.2391 320.743 84.2444 321.228C85.2497 321.713 86.0297 322.398 86.5844 323.282C87.1564 324.149 87.4424 325.189 87.4424 326.402H84.8944C84.8944 325.795 84.7471 325.223 84.4524 324.686C84.1751 324.149 83.7331 323.707 83.1264 323.36C82.5197 323.013 81.7311 322.84 80.7604 322.84C79.8244 322.84 79.0444 323.005 78.4204 323.334C77.8137 323.663 77.3544 324.097 77.0424 324.634C76.7477 325.154 76.6004 325.717 76.6004 326.324C76.6004 327.017 76.8691 327.633 77.4064 328.17C77.9437 328.707 78.7411 329.019 79.7984 329.106L81.9044 329.288C83.2044 329.392 84.3224 329.669 85.2584 330.12C86.2117 330.553 86.9397 331.143 87.4424 331.888C87.9624 332.616 88.2224 333.491 88.2224 334.514C88.2224 335.675 87.9104 336.707 87.2864 337.608C86.6624 338.509 85.7871 339.211 84.6604 339.714C83.5337 340.217 82.2251 340.468 80.7344 340.468ZM92.1342 345.2V326.116H94.1102V332.122L93.6422 332.07C93.7289 330.579 94.0409 329.366 94.5782 328.43C95.1329 327.477 95.8522 326.775 96.7362 326.324C97.6202 325.873 98.5822 325.648 99.6222 325.648C100.628 325.648 101.538 325.839 102.352 326.22C103.184 326.601 103.895 327.121 104.484 327.78C105.074 328.439 105.524 329.201 105.836 330.068C106.148 330.935 106.304 331.853 106.304 332.824V333.292C106.304 334.263 106.14 335.181 105.81 336.048C105.481 336.915 105.013 337.677 104.406 338.336C103.817 338.995 103.106 339.515 102.274 339.896C101.46 340.277 100.558 340.468 99.5702 340.468C98.5822 340.468 97.6375 340.251 96.7362 339.818C95.8349 339.385 95.0895 338.683 94.5002 337.712C93.9109 336.741 93.5729 335.467 93.4862 333.89L94.6302 335.97V345.2H92.1342ZM99.1802 338.284C100.116 338.284 100.931 338.067 101.624 337.634C102.318 337.183 102.855 336.568 103.236 335.788C103.618 334.991 103.808 334.081 103.808 333.058C103.808 332.018 103.618 331.108 103.236 330.328C102.855 329.548 102.318 328.941 101.624 328.508C100.931 328.057 100.116 327.832 99.1802 327.832C98.3482 327.832 97.5769 328.023 96.8662 328.404C96.1555 328.768 95.5835 329.305 95.1502 330.016C94.7342 330.709 94.5262 331.55 94.5262 332.538V333.734C94.5262 334.687 94.7429 335.502 95.1762 336.178C95.6095 336.854 96.1815 337.374 96.8922 337.738C97.6029 338.102 98.3655 338.284 99.1802 338.284ZM115.962 340.468C114.749 340.468 113.7 340.26 112.816 339.844C111.932 339.428 111.213 338.882 110.658 338.206C110.103 337.513 109.687 336.741 109.41 335.892C109.15 335.043 109.02 334.176 109.02 333.292V332.824C109.02 331.923 109.15 331.047 109.41 330.198C109.687 329.349 110.103 328.586 110.658 327.91C111.213 327.217 111.915 326.671 112.764 326.272C113.631 325.856 114.645 325.648 115.806 325.648C117.314 325.648 118.553 325.977 119.524 326.636C120.512 327.277 121.24 328.109 121.708 329.132C122.193 330.155 122.436 331.247 122.436 332.408V333.526H110.112V331.654H120.616L120.044 332.668C120.044 331.68 119.888 330.831 119.576 330.12C119.264 329.392 118.796 328.829 118.172 328.43C117.548 328.031 116.759 327.832 115.806 327.832C114.818 327.832 113.995 328.057 113.336 328.508C112.695 328.959 112.209 329.574 111.88 330.354C111.568 331.134 111.412 332.035 111.412 333.058C111.412 334.046 111.568 334.939 111.88 335.736C112.209 336.516 112.712 337.14 113.388 337.608C114.064 338.059 114.922 338.284 115.962 338.284C117.054 338.284 117.938 338.041 118.614 337.556C119.307 337.071 119.723 336.507 119.862 335.866H122.202C122.011 336.819 121.63 337.643 121.058 338.336C120.486 339.029 119.767 339.558 118.9 339.922C118.033 340.286 117.054 340.468 115.962 340.468ZM134.378 340V335.84H133.962V331.03C133.962 330.077 133.711 329.357 133.208 328.872C132.723 328.387 132.003 328.144 131.05 328.144C130.513 328.144 129.958 328.153 129.386 328.17C128.814 328.187 128.268 328.205 127.748 328.222C127.228 328.239 126.777 328.265 126.396 328.3V326.116C126.777 326.081 127.176 326.055 127.592 326.038C128.025 326.003 128.467 325.986 128.918 325.986C129.369 325.969 129.802 325.96 130.218 325.96C131.639 325.96 132.801 326.133 133.702 326.48C134.603 326.809 135.271 327.355 135.704 328.118C136.137 328.881 136.354 329.912 136.354 331.212V340H134.378ZM129.828 340.364C128.788 340.364 127.887 340.191 127.124 339.844C126.379 339.48 125.798 338.96 125.382 338.284C124.983 337.608 124.784 336.793 124.784 335.84C124.784 334.852 125.001 334.029 125.434 333.37C125.885 332.711 126.535 332.217 127.384 331.888C128.233 331.541 129.256 331.368 130.452 331.368H134.222V333.24H130.348C129.343 333.24 128.571 333.483 128.034 333.968C127.497 334.453 127.228 335.077 127.228 335.84C127.228 336.603 127.497 337.218 128.034 337.686C128.571 338.154 129.343 338.388 130.348 338.388C130.937 338.388 131.501 338.284 132.038 338.076C132.575 337.851 133.017 337.487 133.364 336.984C133.728 336.464 133.927 335.753 133.962 334.852L134.638 335.84C134.551 336.828 134.309 337.66 133.91 338.336C133.529 338.995 132.991 339.497 132.298 339.844C131.622 340.191 130.799 340.364 129.828 340.364ZM150.503 340L145.277 333.526H142.989L149.359 326.116H151.985L146.213 332.798L146.395 331.472L153.389 340H150.503ZM140.935 340V321.02H143.431V340H140.935ZM161.437 340.468C160.223 340.468 159.175 340.26 158.291 339.844C157.407 339.428 156.687 338.882 156.133 338.206C155.578 337.513 155.162 336.741 154.885 335.892C154.625 335.043 154.495 334.176 154.495 333.292V332.824C154.495 331.923 154.625 331.047 154.885 330.198C155.162 329.349 155.578 328.586 156.133 327.91C156.687 327.217 157.389 326.671 158.239 326.272C159.105 325.856 160.119 325.648 161.281 325.648C162.789 325.648 164.028 325.977 164.999 326.636C165.987 327.277 166.715 328.109 167.183 329.132C167.668 330.155 167.911 331.247 167.911 332.408V333.526H155.587V331.654H166.091L165.519 332.668C165.519 331.68 165.363 330.831 165.051 330.12C164.739 329.392 164.271 328.829 163.647 328.43C163.023 328.031 162.234 327.832 161.281 327.832C160.293 327.832 159.469 328.057 158.811 328.508C158.169 328.959 157.684 329.574 157.355 330.354C157.043 331.134 156.887 332.035 156.887 333.058C156.887 334.046 157.043 334.939 157.355 335.736C157.684 336.516 158.187 337.14 158.863 337.608C159.539 338.059 160.397 338.284 161.437 338.284C162.529 338.284 163.413 338.041 164.089 337.556C164.782 337.071 165.198 336.507 165.337 335.866H167.677C167.486 336.819 167.105 337.643 166.533 338.336C165.961 339.029 165.241 339.558 164.375 339.922C163.508 340.286 162.529 340.468 161.437 340.468ZM171.455 340V326.116H173.431V331.836H173.327C173.327 329.808 173.769 328.326 174.653 327.39C175.554 326.437 176.897 325.96 178.683 325.96H179.151V328.196H178.267C176.88 328.196 175.814 328.569 175.069 329.314C174.323 330.042 173.951 331.099 173.951 332.486V340H171.455ZM186.669 340.416C184.849 340.416 183.436 340.026 182.431 339.246C181.443 338.466 180.931 337.4 180.897 336.048H183.237C183.271 336.585 183.54 337.097 184.043 337.582C184.563 338.05 185.438 338.284 186.669 338.284C187.778 338.284 188.627 338.067 189.217 337.634C189.806 337.183 190.101 336.637 190.101 335.996C190.101 335.424 189.884 334.982 189.451 334.67C189.017 334.341 188.315 334.124 187.345 334.02L185.837 333.864C184.519 333.725 183.445 333.335 182.613 332.694C181.781 332.035 181.365 331.117 181.365 329.938C181.365 329.054 181.59 328.3 182.041 327.676C182.491 327.035 183.115 326.549 183.913 326.22C184.71 325.873 185.629 325.7 186.669 325.7C188.229 325.7 189.494 326.047 190.465 326.74C191.435 327.433 191.938 328.465 191.973 329.834H189.633C189.615 329.279 189.355 328.811 188.853 328.43C188.367 328.031 187.639 327.832 186.669 327.832C185.698 327.832 184.961 328.031 184.459 328.43C183.956 328.829 183.705 329.331 183.705 329.938C183.705 330.458 183.878 330.874 184.225 331.186C184.589 331.498 185.178 331.697 185.993 331.784L187.501 331.94C188.991 332.096 190.187 332.512 191.089 333.188C191.99 333.847 192.441 334.783 192.441 335.996C192.441 336.863 192.189 337.634 191.687 338.31C191.201 338.969 190.525 339.489 189.659 339.87C188.792 340.234 187.795 340.416 186.669 340.416Z",fill:"white"}),(0,d.jsx)("path",{d:"M56.32 226V179.776L59.488 182.224H45.592V173.44H66.472V226H56.32ZM83.9539 226L103.61 182.8L102.962 181.864H76.3219V173.44H114.626V181.216L94.6819 226H83.9539ZM76.3219 190.288V173.44H84.6019V190.288H76.3219ZM157.013 226L137.789 201.448H130.373L153.197 173.44H164.933L144.341 198.64L144.053 193.6L169.469 226H157.013ZM122.957 226V173.44H133.181V226H122.957ZM185.851 219.016V183.448H194.635V219.016H185.851ZM172.819 205.264V197.2H207.667V205.264H172.819Z",fill:"white"}),(0,d.jsx)("defs",{children:(0,d.jsxs)("linearGradient",{id:"paint0_linear_355_1736",x1:"-13",y1:"16",x2:"201",y2:"500",gradientUnits:"userSpaceOnUse",children:[(0,d.jsx)("stop",{stopColor:"#E1DEDE"}),(0,d.jsx)("stop",{offset:"0.485",stopColor:"#747474"}),(0,d.jsx)("stop",{offset:"1",stopColor:"#E1DEDE"})]})})]}),(0,d.jsxs)("svg",{width:"272",height:"465",viewBox:"0 0 272 465",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,d.jsx)("path",{d:"M255.966 16V393.913L16.983 444.822V16H255.966Z",fill:"#EFD157"}),(0,d.jsx)("mask",{id:"mask0_372_2419",style:{maskType:"alpha"},maskUnits:"userSpaceOnUse",x:"16",y:"16",width:"240",height:"429",children:(0,d.jsx)("path",{d:"M255.966 16V393.913L16.983 444.822V16H255.966Z",fill:"#1F9548"})}),(0,d.jsxs)("g",{mask:"url(#mask0_372_2419)",children:[(0,d.jsx)("path",{d:"M133.368 131C117.727 131 102.317 128.01 88.0561 121.8C74.2555 115.819 61.835 107.539 51.0245 96.7285C40.444 86.1481 31.9337 73.7275 26.1834 59.927C20.2032 45.6663 16.983 30.2557 16.983 14.615C16.983 -1.02567 19.9732 -16.4363 26.1834 -30.6969C32.1637 -44.4975 40.444 -56.9181 51.2545 -67.7285C61.835 -78.539 74.2555 -87.0494 88.0561 -92.7996C102.317 -98.7799 117.727 -102 133.368 -102C149.009 -102 164.419 -99.0099 178.68 -92.7996C192.481 -86.8193 204.901 -78.539 215.712 -67.7285C226.292 -56.9181 234.802 -44.4975 240.783 -30.6969C246.763 -16.4363 249.983 -1.02567 249.983 14.615C249.983 30.2557 246.993 45.6663 240.783 59.927C234.802 73.7275 226.522 86.1481 215.712 96.9585C204.901 107.769 192.481 116.049 178.68 122.03C164.419 128.01 149.239 131 133.368 131ZM133.368 -89.3495C119.337 -89.3495 105.767 -86.5893 92.8863 -81.2991C80.4658 -76.0089 69.4253 -68.6486 59.7649 -58.9882C50.3345 -49.3277 42.7441 -38.2873 37.4539 -25.8667C31.9337 -12.9862 29.1736 0.584404 29.1736 14.615C29.1736 28.6456 31.9337 42.2162 37.4539 55.0967C42.7441 67.5173 50.1045 78.5577 59.7649 88.2182C69.4253 97.8786 80.4658 105.239 92.8863 110.529C105.767 116.049 119.337 118.579 133.368 118.579C147.399 118.579 160.969 115.819 173.85 110.529C186.27 105.239 197.311 97.8786 206.971 88.2182C216.632 78.5577 223.992 67.5173 229.282 55.0967C234.802 42.2162 237.562 28.6456 237.562 14.615C237.562 0.584404 234.802 -12.9862 229.282 -25.8667C223.992 -38.2873 216.632 -49.3277 206.971 -58.9882C197.541 -68.4186 186.27 -76.0089 173.85 -81.2991C161.199 -86.5893 147.399 -89.3495 133.368 -89.3495Z",fill:"#1B7266"}),(0,d.jsx)("path",{d:"M133.368 103.169C121.408 103.169 109.907 100.869 98.8665 96.2685C88.2861 91.8983 78.8557 85.458 70.8053 77.1777C62.755 69.1273 56.3147 59.4669 51.7145 49.1165C47.1143 38.076 44.8142 26.5755 44.8142 14.615C44.8142 2.65449 47.1143 -8.846 51.7145 -19.8865C56.0847 -30.4669 62.525 -39.8973 70.8053 -47.9477C78.8557 -55.998 88.5161 -62.4383 98.8665 -67.0385C109.907 -71.6387 121.408 -73.9388 133.368 -73.9388C145.329 -73.9388 156.829 -71.6387 167.87 -67.0385C178.45 -62.6683 187.88 -56.228 195.931 -47.9477C203.981 -39.8973 210.421 -30.2369 215.022 -19.8865C219.622 -8.846 221.922 2.65449 221.922 14.615C221.922 26.5755 219.622 38.076 215.022 49.1165C210.651 59.6969 204.211 69.1273 195.931 77.1777C187.88 85.228 178.22 91.6683 167.87 96.2685C157.059 100.639 145.329 103.169 133.368 103.169ZM133.368 -61.5183C113.127 -61.5183 94.0363 -53.6979 79.5457 -39.2073C65.2851 -24.9467 57.2348 -5.85587 57.2348 14.615C57.2348 35.0859 65.2851 53.9467 79.7757 68.2073C94.0363 82.4679 113.127 90.5182 133.598 90.5182C153.839 90.5182 172.93 82.6979 187.42 68.2073C201.681 53.9467 209.731 34.8559 209.731 14.385C209.731 -6.08589 201.681 -24.9467 187.19 -39.2073C172.93 -53.6979 153.839 -61.5183 133.368 -61.5183Z",fill:"#1B7266"}),(0,d.jsx)("path",{d:"M133.368 75.1076C117.267 75.1076 101.857 68.8973 90.3562 57.3969C78.8557 45.8963 72.6454 30.7157 72.6454 14.385C72.6454 -1.7157 78.8557 -17.1264 90.3562 -28.6269C101.857 -40.1273 117.037 -46.3376 133.368 -46.3376C149.469 -46.3376 164.879 -40.1273 176.38 -28.6269C187.88 -17.1264 194.091 -1.94571 194.091 14.385C194.091 30.4857 187.88 45.8963 176.38 57.3969C164.879 68.8973 149.699 75.1076 133.368 75.1076ZM133.368 -33.6871C120.487 -33.6871 108.527 -28.6269 99.3266 -19.6565C90.1262 -10.4561 85.296 1.50443 85.296 14.385C85.296 27.2655 90.3562 39.2261 99.3266 48.4265C108.527 57.6268 120.487 62.457 133.368 62.457C146.249 62.457 158.209 57.3968 167.409 48.4265C176.61 39.2261 181.44 27.2655 181.44 14.385C181.44 1.50443 176.38 -10.4561 167.409 -19.6565C158.439 -28.6269 146.249 -33.6871 133.368 -33.6871Z",fill:"#1B7266"}),(0,d.jsx)("path",{d:"M133.368 47.2764C115.197 47.2764 100.477 32.5558 100.477 14.385C100.477 -3.78579 115.197 -18.5064 133.368 -18.5064C151.539 -18.5064 166.259 -3.78579 166.259 14.385C166.259 32.5558 151.539 47.2764 133.368 47.2764ZM133.368 -5.62586C122.328 -5.62586 113.127 3.34452 113.127 14.615C113.127 25.6555 122.098 34.8559 133.368 34.8559C144.408 34.8559 153.609 25.8855 153.609 14.615C153.609 3.34452 144.639 -5.62586 133.368 -5.62586Z",fill:"#1B7266"})]}),(0,d.jsx)("path",{opacity:"0.65",d:"M16.983 8H8.98303V16V444.822V454.706L18.6498 452.646L257.633 401.737L263.966 400.388V393.913V16V8H255.966H16.983Z",stroke:"url(#paint0_linear_372_2419)",strokeWidth:"16"}),(0,d.jsx)("path",{d:"M53.767 280.104V277.868H59.071C60.0937 277.868 60.8824 277.582 61.437 277.01C62.009 276.421 62.295 275.641 62.295 274.67C62.295 273.682 62.0177 272.911 61.463 272.356C60.9084 271.784 60.111 271.498 59.071 271.498H53.767V269.834H58.707C59.9204 269.834 60.9864 269.981 61.905 270.276C62.841 270.571 63.569 271.065 64.089 271.758C64.6264 272.434 64.895 273.361 64.895 274.54V274.904C64.895 276.013 64.6697 276.958 64.219 277.738C63.7684 278.501 63.0837 279.09 62.165 279.506C61.2464 279.905 60.0937 280.104 58.707 280.104H53.767ZM51.739 280.104V260.916H54.287V280.104H51.739ZM53.767 271.03V269.366H58.369C59.4437 269.366 60.2324 269.08 60.735 268.508C61.255 267.919 61.515 267.173 61.515 266.272C61.515 265.353 61.255 264.608 60.735 264.036C60.2324 263.447 59.4437 263.152 58.369 263.152H53.767V260.916H57.927C60.007 260.916 61.5584 261.358 62.581 262.242C63.6037 263.109 64.115 264.365 64.115 266.012V266.376C64.115 267.537 63.855 268.465 63.335 269.158C62.815 269.834 62.087 270.319 61.151 270.614C60.2324 270.891 59.1577 271.03 57.927 271.03H53.767ZM69.0469 280V266.116H71.0229V271.836H70.9189C70.9189 269.808 71.3609 268.326 72.2449 267.39C73.1462 266.437 74.4896 265.96 76.2749 265.96H76.7429V268.196H75.8589C74.4722 268.196 73.4062 268.569 72.6609 269.314C71.9156 270.042 71.5429 271.099 71.5429 272.486V280H69.0469ZM88.0582 280V275.84H87.6422V271.03C87.6422 270.077 87.3909 269.357 86.8882 268.872C86.4029 268.387 85.6835 268.144 84.7302 268.144C84.1929 268.144 83.6382 268.153 83.0662 268.17C82.4942 268.187 81.9482 268.205 81.4282 268.222C80.9082 268.239 80.4575 268.265 80.0762 268.3V266.116C80.4575 266.081 80.8562 266.055 81.2722 266.038C81.7055 266.003 82.1475 265.986 82.5982 265.986C83.0489 265.969 83.4822 265.96 83.8982 265.96C85.3195 265.96 86.4809 266.133 87.3822 266.48C88.2835 266.809 88.9509 267.355 89.3842 268.118C89.8175 268.881 90.0342 269.912 90.0342 271.212V280H88.0582ZM83.5082 280.364C82.4682 280.364 81.5669 280.191 80.8042 279.844C80.0589 279.48 79.4782 278.96 79.0622 278.284C78.6635 277.608 78.4642 276.793 78.4642 275.84C78.4642 274.852 78.6809 274.029 79.1142 273.37C79.5649 272.711 80.2149 272.217 81.0642 271.888C81.9135 271.541 82.9362 271.368 84.1322 271.368H87.9022V273.24H84.0282C83.0229 273.24 82.2515 273.483 81.7142 273.968C81.1769 274.453 80.9082 275.077 80.9082 275.84C80.9082 276.603 81.1769 277.218 81.7142 277.686C82.2515 278.154 83.0229 278.388 84.0282 278.388C84.6175 278.388 85.1809 278.284 85.7182 278.076C86.2555 277.851 86.6975 277.487 87.0442 276.984C87.4082 276.464 87.6075 275.753 87.6422 274.852L88.3182 275.84C88.2315 276.828 87.9889 277.66 87.5902 278.336C87.2089 278.995 86.6715 279.497 85.9782 279.844C85.3022 280.191 84.4789 280.364 83.5082 280.364ZM94.6153 280V266.116H96.5913V272.07H96.2793C96.2793 270.701 96.4613 269.548 96.8253 268.612C97.2066 267.659 97.7786 266.939 98.5413 266.454C99.3039 265.951 100.266 265.7 101.427 265.7H101.531C103.282 265.7 104.573 266.246 105.405 267.338C106.255 268.43 106.679 270.007 106.679 272.07V280H104.183V271.55C104.183 270.475 103.88 269.617 103.273 268.976C102.667 268.317 101.835 267.988 100.777 267.988C99.6853 267.988 98.8013 268.326 98.1253 269.002C97.4493 269.678 97.1113 270.579 97.1113 271.706V280H94.6153ZM117.044 280.468C116.056 280.468 115.146 280.286 114.314 279.922C113.482 279.558 112.754 279.047 112.13 278.388C111.523 277.729 111.047 276.967 110.7 276.1C110.371 275.233 110.206 274.297 110.206 273.292V272.824C110.206 271.836 110.371 270.909 110.7 270.042C111.029 269.175 111.489 268.413 112.078 267.754C112.685 267.095 113.395 266.584 114.21 266.22C115.042 265.839 115.961 265.648 116.966 265.648C118.023 265.648 118.985 265.873 119.852 266.324C120.719 266.757 121.429 267.442 121.984 268.378C122.539 269.314 122.851 270.527 122.92 272.018L121.88 270.354V261.02H124.376V280H122.4V273.838H123.128C123.059 275.415 122.729 276.698 122.14 277.686C121.551 278.657 120.805 279.367 119.904 279.818C119.02 280.251 118.067 280.468 117.044 280.468ZM117.382 278.284C118.231 278.284 119.003 278.093 119.696 277.712C120.389 277.331 120.944 276.785 121.36 276.074C121.776 275.346 121.984 274.497 121.984 273.526V272.33C121.984 271.377 121.767 270.571 121.334 269.912C120.918 269.236 120.355 268.725 119.644 268.378C118.951 268.014 118.188 267.832 117.356 267.832C116.437 267.832 115.623 268.049 114.912 268.482C114.219 268.915 113.673 269.522 113.274 270.302C112.893 271.082 112.702 272.001 112.702 273.058C112.702 274.115 112.901 275.043 113.3 275.84C113.699 276.62 114.253 277.227 114.964 277.66C115.675 278.076 116.481 278.284 117.382 278.284ZM133.722 280.416C131.902 280.416 130.489 280.026 129.484 279.246C128.496 278.466 127.985 277.4 127.95 276.048H130.29C130.325 276.585 130.593 277.097 131.096 277.582C131.616 278.05 132.491 278.284 133.722 278.284C134.831 278.284 135.681 278.067 136.27 277.634C136.859 277.183 137.154 276.637 137.154 275.996C137.154 275.424 136.937 274.982 136.504 274.67C136.071 274.341 135.369 274.124 134.398 274.02L132.89 273.864C131.573 273.725 130.498 273.335 129.666 272.694C128.834 272.035 128.418 271.117 128.418 269.938C128.418 269.054 128.643 268.3 129.094 267.676C129.545 267.035 130.169 266.549 130.966 266.22C131.763 265.873 132.682 265.7 133.722 265.7C135.282 265.7 136.547 266.047 137.518 266.74C138.489 267.433 138.991 268.465 139.026 269.834H136.686C136.669 269.279 136.409 268.811 135.906 268.43C135.421 268.031 134.693 267.832 133.722 267.832C132.751 267.832 132.015 268.031 131.512 268.43C131.009 268.829 130.758 269.331 130.758 269.938C130.758 270.458 130.931 270.874 131.278 271.186C131.642 271.498 132.231 271.697 133.046 271.784L134.554 271.94C136.045 272.096 137.241 272.512 138.142 273.188C139.043 273.847 139.494 274.783 139.494 275.996C139.494 276.863 139.243 277.634 138.74 278.31C138.255 278.969 137.579 279.489 136.712 279.87C135.845 280.234 134.849 280.416 133.722 280.416ZM143.143 284.082L141.141 283.328L143.559 276.62L145.613 277.4L143.143 284.082ZM57.901 312.468C56.3237 312.468 54.9804 312.208 53.871 311.688C52.7617 311.168 51.9124 310.449 51.323 309.53C50.7337 308.611 50.439 307.571 50.439 306.41H52.987C52.987 306.982 53.1344 307.554 53.429 308.126C53.741 308.698 54.2524 309.175 54.963 309.556C55.691 309.937 56.6704 310.128 57.901 310.128C59.045 310.128 59.981 309.963 60.709 309.634C61.437 309.287 61.9744 308.845 62.321 308.308C62.6677 307.753 62.841 307.155 62.841 306.514C62.841 305.734 62.503 305.093 61.827 304.59C61.151 304.07 60.163 303.749 58.863 303.628L56.757 303.446C55.0757 303.307 53.7324 302.787 52.727 301.886C51.7217 300.985 51.219 299.797 51.219 298.324C51.219 297.163 51.4964 296.149 52.051 295.282C52.623 294.415 53.4117 293.739 54.417 293.254C55.4224 292.751 56.5924 292.5 57.927 292.5C59.2444 292.5 60.4057 292.743 61.411 293.228C62.4164 293.713 63.1964 294.398 63.751 295.282C64.323 296.149 64.609 297.189 64.609 298.402H62.061C62.061 297.795 61.9137 297.223 61.619 296.686C61.3417 296.149 60.8997 295.707 60.293 295.36C59.6864 295.013 58.8977 294.84 57.927 294.84C56.991 294.84 56.211 295.005 55.587 295.334C54.9804 295.663 54.521 296.097 54.209 296.634C53.9144 297.154 53.767 297.717 53.767 298.324C53.767 299.017 54.0357 299.633 54.573 300.17C55.1104 300.707 55.9077 301.019 56.965 301.106L59.071 301.288C60.371 301.392 61.489 301.669 62.425 302.12C63.3784 302.553 64.1064 303.143 64.609 303.888C65.129 304.616 65.389 305.491 65.389 306.514C65.389 307.675 65.077 308.707 64.453 309.608C63.829 310.509 62.9537 311.211 61.827 311.714C60.7004 312.217 59.3917 312.468 57.901 312.468ZM69.3008 317.2V298.116H71.2768V304.122L70.8088 304.07C70.8955 302.579 71.2075 301.366 71.7448 300.43C72.2995 299.477 73.0188 298.775 73.9028 298.324C74.7868 297.873 75.7488 297.648 76.7888 297.648C77.7941 297.648 78.7041 297.839 79.5188 298.22C80.3508 298.601 81.0615 299.121 81.6508 299.78C82.2401 300.439 82.6908 301.201 83.0028 302.068C83.3148 302.935 83.4708 303.853 83.4708 304.824V305.292C83.4708 306.263 83.3061 307.181 82.9768 308.048C82.6475 308.915 82.1795 309.677 81.5728 310.336C80.9835 310.995 80.2728 311.515 79.4408 311.896C78.6261 312.277 77.7248 312.468 76.7368 312.468C75.7488 312.468 74.8041 312.251 73.9028 311.818C73.0015 311.385 72.2561 310.683 71.6668 309.712C71.0775 308.741 70.7395 307.467 70.6528 305.89L71.7968 307.97V317.2H69.3008ZM76.3468 310.284C77.2828 310.284 78.0975 310.067 78.7908 309.634C79.4841 309.183 80.0215 308.568 80.4028 307.788C80.7841 306.991 80.9748 306.081 80.9748 305.058C80.9748 304.018 80.7841 303.108 80.4028 302.328C80.0215 301.548 79.4841 300.941 78.7908 300.508C78.0975 300.057 77.2828 299.832 76.3468 299.832C75.5148 299.832 74.7435 300.023 74.0328 300.404C73.3221 300.768 72.7501 301.305 72.3168 302.016C71.9008 302.709 71.6928 303.55 71.6928 304.538V305.734C71.6928 306.687 71.9095 307.502 72.3428 308.178C72.7761 308.854 73.3481 309.374 74.0588 309.738C74.7695 310.102 75.5321 310.284 76.3468 310.284ZM93.6226 312.468C92.4093 312.468 91.3433 312.26 90.4246 311.844C89.5059 311.428 88.7259 310.882 88.0846 310.206C87.4606 309.513 86.9839 308.741 86.6546 307.892C86.3426 307.043 86.1866 306.176 86.1866 305.292V304.824C86.1866 303.94 86.3513 303.073 86.6806 302.224C87.0099 301.357 87.4953 300.586 88.1366 299.91C88.7779 299.217 89.5579 298.671 90.4766 298.272C91.3953 297.856 92.4439 297.648 93.6226 297.648C94.8013 297.648 95.8499 297.856 96.7686 298.272C97.6873 298.671 98.4673 299.217 99.1086 299.91C99.7499 300.586 100.235 301.357 100.565 302.224C100.894 303.073 101.059 303.94 101.059 304.824V305.292C101.059 306.176 100.894 307.043 100.565 307.892C100.253 308.741 99.7759 309.513 99.1346 310.206C98.5106 310.882 97.7393 311.428 96.8206 311.844C95.9019 312.26 94.8359 312.468 93.6226 312.468ZM93.6226 310.232C94.6626 310.232 95.5466 310.007 96.2746 309.556C97.0199 309.088 97.5833 308.464 97.9646 307.684C98.3633 306.904 98.5626 306.029 98.5626 305.058C98.5626 304.07 98.3633 303.186 97.9646 302.406C97.5659 301.626 96.9939 301.011 96.2486 300.56C95.5206 300.109 94.6453 299.884 93.6226 299.884C92.6173 299.884 91.7419 300.109 90.9966 300.56C90.2513 301.011 89.6793 301.626 89.2806 302.406C88.8819 303.186 88.6826 304.07 88.6826 305.058C88.6826 306.029 88.8733 306.904 89.2546 307.684C89.6533 308.464 90.2166 309.088 90.9446 309.556C91.6899 310.007 92.5826 310.232 93.6226 310.232ZM104.797 312V298.116H106.773V304.07H106.461C106.461 302.701 106.643 301.548 107.007 300.612C107.388 299.659 107.96 298.939 108.723 298.454C109.486 297.951 110.448 297.7 111.609 297.7H111.713C113.464 297.7 114.755 298.246 115.587 299.338C116.436 300.43 116.861 302.007 116.861 304.07V312H114.365V303.55C114.365 302.475 114.062 301.617 113.455 300.976C112.848 300.317 112.016 299.988 110.959 299.988C109.867 299.988 108.983 300.326 108.307 301.002C107.631 301.678 107.293 302.579 107.293 303.706V312H104.797ZM125.978 312.416C124.158 312.416 122.745 312.026 121.74 311.246C120.752 310.466 120.24 309.4 120.206 308.048H122.546C122.58 308.585 122.849 309.097 123.352 309.582C123.872 310.05 124.747 310.284 125.978 310.284C127.087 310.284 127.936 310.067 128.526 309.634C129.115 309.183 129.41 308.637 129.41 307.996C129.41 307.424 129.193 306.982 128.76 306.67C128.326 306.341 127.624 306.124 126.654 306.02L125.146 305.864C123.828 305.725 122.754 305.335 121.922 304.694C121.09 304.035 120.674 303.117 120.674 301.938C120.674 301.054 120.899 300.3 121.35 299.676C121.8 299.035 122.424 298.549 123.222 298.22C124.019 297.873 124.938 297.7 125.978 297.7C127.538 297.7 128.803 298.047 129.774 298.74C130.744 299.433 131.247 300.465 131.282 301.834H128.942C128.924 301.279 128.664 300.811 128.162 300.43C127.676 300.031 126.948 299.832 125.978 299.832C125.007 299.832 124.27 300.031 123.768 300.43C123.265 300.829 123.014 301.331 123.014 301.938C123.014 302.458 123.187 302.874 123.534 303.186C123.898 303.498 124.487 303.697 125.302 303.784L126.81 303.94C128.3 304.096 129.496 304.512 130.398 305.188C131.299 305.847 131.75 306.783 131.75 307.996C131.75 308.863 131.498 309.634 130.996 310.31C130.51 310.969 129.834 311.489 128.968 311.87C128.101 312.234 127.104 312.416 125.978 312.416ZM141.763 312.468C140.55 312.468 139.484 312.26 138.565 311.844C137.647 311.428 136.867 310.882 136.225 310.206C135.601 309.513 135.125 308.741 134.795 307.892C134.483 307.043 134.327 306.176 134.327 305.292V304.824C134.327 303.94 134.492 303.073 134.821 302.224C135.151 301.357 135.636 300.586 136.277 299.91C136.919 299.217 137.699 298.671 138.617 298.272C139.536 297.856 140.585 297.648 141.763 297.648C142.942 297.648 143.991 297.856 144.909 298.272C145.828 298.671 146.608 299.217 147.249 299.91C147.891 300.586 148.376 301.357 148.705 302.224C149.035 303.073 149.199 303.94 149.199 304.824V305.292C149.199 306.176 149.035 307.043 148.705 307.892C148.393 308.741 147.917 309.513 147.275 310.206C146.651 310.882 145.88 311.428 144.961 311.844C144.043 312.26 142.977 312.468 141.763 312.468ZM141.763 310.232C142.803 310.232 143.687 310.007 144.415 309.556C145.161 309.088 145.724 308.464 146.105 307.684C146.504 306.904 146.703 306.029 146.703 305.058C146.703 304.07 146.504 303.186 146.105 302.406C145.707 301.626 145.135 301.011 144.389 300.56C143.661 300.109 142.786 299.884 141.763 299.884C140.758 299.884 139.883 300.109 139.137 300.56C138.392 301.011 137.82 301.626 137.421 302.406C137.023 303.186 136.823 304.07 136.823 305.058C136.823 306.029 137.014 306.904 137.395 307.684C137.794 308.464 138.357 309.088 139.085 309.556C139.831 310.007 140.723 310.232 141.763 310.232ZM152.938 312V298.116H154.914V303.836H154.81C154.81 301.808 155.252 300.326 156.136 299.39C157.037 298.437 158.38 297.96 160.166 297.96H160.634V300.196H159.75C158.363 300.196 157.297 300.569 156.552 301.314C155.806 302.042 155.434 303.099 155.434 304.486V312H152.938ZM168.152 312.416C166.332 312.416 164.919 312.026 163.914 311.246C162.926 310.466 162.414 309.4 162.38 308.048H164.72C164.754 308.585 165.023 309.097 165.526 309.582C166.046 310.05 166.921 310.284 168.152 310.284C169.261 310.284 170.11 310.067 170.7 309.634C171.289 309.183 171.584 308.637 171.584 307.996C171.584 307.424 171.367 306.982 170.934 306.67C170.5 306.341 169.798 306.124 168.828 306.02L167.32 305.864C166.002 305.725 164.928 305.335 164.096 304.694C163.264 304.035 162.848 303.117 162.848 301.938C162.848 301.054 163.073 300.3 163.524 299.676C163.974 299.035 164.598 298.549 165.396 298.22C166.193 297.873 167.112 297.7 168.152 297.7C169.712 297.7 170.977 298.047 171.948 298.74C172.918 299.433 173.421 300.465 173.456 301.834H171.116C171.098 301.279 170.838 300.811 170.336 300.43C169.85 300.031 169.122 299.832 168.152 299.832C167.181 299.832 166.444 300.031 165.942 300.43C165.439 300.829 165.188 301.331 165.188 301.938C165.188 302.458 165.361 302.874 165.708 303.186C166.072 303.498 166.661 303.697 167.476 303.784L168.984 303.94C170.474 304.096 171.67 304.512 172.572 305.188C173.473 305.847 173.924 306.783 173.924 307.996C173.924 308.863 173.672 309.634 173.17 310.31C172.684 310.969 172.008 311.489 171.142 311.87C170.275 312.234 169.278 312.416 168.152 312.416ZM195.027 312L187.201 303.654C186.404 302.787 185.78 302.042 185.329 301.418C184.896 300.794 184.584 300.205 184.393 299.65C184.22 299.095 184.133 298.497 184.133 297.856C184.133 296.729 184.341 295.793 184.757 295.048C185.19 294.303 185.866 293.748 186.785 293.384C187.704 293.003 188.891 292.812 190.347 292.812C190.919 292.812 191.56 292.838 192.271 292.89C192.982 292.942 193.614 293.003 194.169 293.072V295.256C193.822 295.221 193.372 295.187 192.817 295.152C192.262 295.1 191.716 295.065 191.179 295.048C190.642 295.013 190.2 294.996 189.853 294.996C188.622 294.996 187.756 295.247 187.253 295.75C186.768 296.235 186.525 296.955 186.525 297.908C186.525 298.671 186.698 299.373 187.045 300.014C187.409 300.655 187.972 301.383 188.735 302.198L197.965 312H195.027ZM188.579 312.468C187.244 312.468 186.074 312.217 185.069 311.714C184.064 311.211 183.284 310.527 182.729 309.66C182.174 308.793 181.897 307.831 181.897 306.774V306.384C181.897 305.136 182.244 304.035 182.937 303.082C183.648 302.111 184.523 301.331 185.563 300.742L186.863 302.484C186.1 302.865 185.476 303.429 184.991 304.174C184.523 304.902 184.289 305.708 184.289 306.592C184.289 307.407 184.48 308.091 184.861 308.646C185.26 309.201 185.78 309.625 186.421 309.92C187.08 310.197 187.799 310.336 188.579 310.336C189.792 310.336 190.841 309.998 191.725 309.322C192.609 308.629 193.285 307.615 193.753 306.28C194.238 304.928 194.481 303.255 194.481 301.262H196.717C196.717 302.995 196.535 304.555 196.171 305.942C195.824 307.311 195.304 308.481 194.611 309.452C193.918 310.423 193.06 311.168 192.037 311.688C191.032 312.208 189.879 312.468 188.579 312.468ZM191.465 301.6V299.624H198.277V301.6H191.465ZM49.711 344L56.549 325.02H60.865L67.911 344H65.285L58.915 326.684L60.163 327.308H57.095L58.421 326.684L52.259 344H49.711ZM53.793 338.332L54.651 336.044H62.841L63.699 338.332H53.793ZM75.5266 344.416C73.7066 344.416 72.2939 344.026 71.2886 343.246C70.3006 342.466 69.7893 341.4 69.7546 340.048H72.0946C72.1293 340.585 72.3979 341.097 72.9006 341.582C73.4206 342.05 74.2959 342.284 75.5266 342.284C76.6359 342.284 77.4853 342.067 78.0746 341.634C78.6639 341.183 78.9586 340.637 78.9586 339.996C78.9586 339.424 78.7419 338.982 78.3086 338.67C77.8753 338.341 77.1733 338.124 76.2026 338.02L74.6946 337.864C73.3773 337.725 72.3026 337.335 71.4706 336.694C70.6386 336.035 70.2226 335.117 70.2226 333.938C70.2226 333.054 70.4479 332.3 70.8986 331.676C71.3493 331.035 71.9733 330.549 72.7706 330.22C73.5679 329.873 74.4866 329.7 75.5266 329.7C77.0866 329.7 78.3519 330.047 79.3226 330.74C80.2933 331.433 80.7959 332.465 80.8306 333.834H78.4906C78.4733 333.279 78.2133 332.811 77.7106 332.43C77.2253 332.031 76.4973 331.832 75.5266 331.832C74.5559 331.832 73.8193 332.031 73.3166 332.43C72.8139 332.829 72.5626 333.331 72.5626 333.938C72.5626 334.458 72.7359 334.874 73.0826 335.186C73.4466 335.498 74.0359 335.697 74.8506 335.784L76.3586 335.94C77.8493 336.096 79.0453 336.512 79.9466 337.188C80.8479 337.847 81.2986 338.783 81.2986 339.996C81.2986 340.863 81.0473 341.634 80.5446 342.31C80.0593 342.969 79.3833 343.489 78.5166 343.87C77.6499 344.234 76.6533 344.416 75.5266 344.416ZM89.466 344.416C87.646 344.416 86.2334 344.026 85.228 343.246C84.24 342.466 83.7287 341.4 83.694 340.048H86.034C86.0687 340.585 86.3374 341.097 86.84 341.582C87.36 342.05 88.2354 342.284 89.466 342.284C90.5754 342.284 91.4247 342.067 92.014 341.634C92.6034 341.183 92.898 340.637 92.898 339.996C92.898 339.424 92.6814 338.982 92.248 338.67C91.8147 338.341 91.1127 338.124 90.142 338.02L88.634 337.864C87.3167 337.725 86.242 337.335 85.41 336.694C84.578 336.035 84.162 335.117 84.162 333.938C84.162 333.054 84.3874 332.3 84.838 331.676C85.2887 331.035 85.9127 330.549 86.71 330.22C87.5074 329.873 88.426 329.7 89.466 329.7C91.026 329.7 92.2914 330.047 93.262 330.74C94.2327 331.433 94.7354 332.465 94.77 333.834H92.43C92.4127 333.279 92.1527 332.811 91.65 332.43C91.1647 332.031 90.4367 331.832 89.466 331.832C88.4954 331.832 87.7587 332.031 87.256 332.43C86.7534 332.829 86.502 333.331 86.502 333.938C86.502 334.458 86.6754 334.874 87.022 335.186C87.386 335.498 87.9754 335.697 88.79 335.784L90.298 335.94C91.7887 336.096 92.9847 336.512 93.886 337.188C94.7874 337.847 95.238 338.783 95.238 339.996C95.238 340.863 94.9867 341.634 94.484 342.31C93.9987 342.969 93.3227 343.489 92.456 343.87C91.5894 344.234 90.5927 344.416 89.466 344.416ZM105.252 344.468C104.038 344.468 102.972 344.26 102.054 343.844C101.135 343.428 100.355 342.882 99.7135 342.206C99.0895 341.513 98.6128 340.741 98.2835 339.892C97.9715 339.043 97.8155 338.176 97.8155 337.292V336.824C97.8155 335.94 97.9802 335.073 98.3095 334.224C98.6388 333.357 99.1242 332.586 99.7655 331.91C100.407 331.217 101.187 330.671 102.106 330.272C103.024 329.856 104.073 329.648 105.252 329.648C106.43 329.648 107.479 329.856 108.398 330.272C109.316 330.671 110.096 331.217 110.738 331.91C111.379 332.586 111.864 333.357 112.194 334.224C112.523 335.073 112.688 335.94 112.688 336.824V337.292C112.688 338.176 112.523 339.043 112.194 339.892C111.882 340.741 111.405 341.513 110.764 342.206C110.14 342.882 109.368 343.428 108.45 343.844C107.531 344.26 106.465 344.468 105.252 344.468ZM105.252 342.232C106.292 342.232 107.176 342.007 107.904 341.556C108.649 341.088 109.212 340.464 109.594 339.684C109.992 338.904 110.192 338.029 110.192 337.058C110.192 336.07 109.992 335.186 109.594 334.406C109.195 333.626 108.623 333.011 107.878 332.56C107.15 332.109 106.274 331.884 105.252 331.884C104.246 331.884 103.371 332.109 102.626 332.56C101.88 333.011 101.308 333.626 100.91 334.406C100.511 335.186 100.312 336.07 100.312 337.058C100.312 338.029 100.502 338.904 100.884 339.684C101.282 340.464 101.846 341.088 102.574 341.556C103.319 342.007 104.212 342.232 105.252 342.232ZM122.38 344.468C121.184 344.468 120.144 344.26 119.26 343.844C118.393 343.428 117.674 342.873 117.102 342.18C116.53 341.469 116.096 340.689 115.802 339.84C115.524 338.991 115.386 338.141 115.386 337.292V336.824C115.386 335.94 115.524 335.073 115.802 334.224C116.096 333.375 116.53 332.612 117.102 331.936C117.691 331.243 118.419 330.688 119.286 330.272C120.152 329.856 121.166 329.648 122.328 329.648C123.489 329.648 124.529 329.865 125.448 330.298C126.384 330.731 127.129 331.347 127.684 332.144C128.256 332.924 128.576 333.851 128.646 334.926H126.254C126.132 334.059 125.734 333.34 125.058 332.768C124.382 332.179 123.472 331.884 122.328 331.884C121.34 331.884 120.516 332.109 119.858 332.56C119.199 333.011 118.705 333.626 118.376 334.406C118.046 335.186 117.882 336.07 117.882 337.058C117.882 338.011 118.046 338.887 118.376 339.684C118.705 340.464 119.199 341.088 119.858 341.556C120.534 342.007 121.374 342.232 122.38 342.232C123.16 342.232 123.836 342.093 124.408 341.816C124.98 341.539 125.439 341.166 125.786 340.698C126.132 340.23 126.34 339.701 126.41 339.112H128.802C128.75 340.204 128.429 341.149 127.84 341.946C127.268 342.743 126.505 343.367 125.552 343.818C124.616 344.251 123.558 344.468 122.38 344.468ZM132.869 344V330.116H135.365V344H132.869ZM130.737 332.092V330.116H135.365V332.092H130.737ZM133.571 327.88C133.017 327.88 132.601 327.733 132.323 327.438C132.063 327.143 131.933 326.771 131.933 326.32C131.933 325.869 132.063 325.497 132.323 325.202C132.601 324.907 133.017 324.76 133.571 324.76C134.126 324.76 134.533 324.907 134.793 325.202C135.071 325.497 135.209 325.869 135.209 326.32C135.209 326.771 135.071 327.143 134.793 327.438C134.533 327.733 134.126 327.88 133.571 327.88ZM148.589 344V339.84H148.173V335.03C148.173 334.077 147.922 333.357 147.419 332.872C146.934 332.387 146.215 332.144 145.261 332.144C144.724 332.144 144.169 332.153 143.597 332.17C143.025 332.187 142.479 332.205 141.959 332.222C141.439 332.239 140.989 332.265 140.607 332.3V330.116C140.989 330.081 141.387 330.055 141.803 330.038C142.237 330.003 142.679 329.986 143.129 329.986C143.58 329.969 144.013 329.96 144.429 329.96C145.851 329.96 147.012 330.133 147.913 330.48C148.815 330.809 149.482 331.355 149.915 332.118C150.349 332.881 150.565 333.912 150.565 335.212V344H148.589ZM144.039 344.364C142.999 344.364 142.098 344.191 141.335 343.844C140.59 343.48 140.009 342.96 139.593 342.284C139.195 341.608 138.995 340.793 138.995 339.84C138.995 338.852 139.212 338.029 139.645 337.37C140.096 336.711 140.746 336.217 141.595 335.888C142.445 335.541 143.467 335.368 144.663 335.368H148.433V337.24H144.559C143.554 337.24 142.783 337.483 142.245 337.968C141.708 338.453 141.439 339.077 141.439 339.84C141.439 340.603 141.708 341.218 142.245 341.686C142.783 342.154 143.554 342.388 144.559 342.388C145.149 342.388 145.712 342.284 146.249 342.076C146.787 341.851 147.229 341.487 147.575 340.984C147.939 340.464 148.139 339.753 148.173 338.852L148.849 339.84C148.763 340.828 148.52 341.66 148.121 342.336C147.74 342.995 147.203 343.497 146.509 343.844C145.833 344.191 145.01 344.364 144.039 344.364ZM160.555 344.156C159.515 344.156 158.613 344.009 157.851 343.714C157.105 343.419 156.525 342.917 156.109 342.206C155.71 341.478 155.511 340.499 155.511 339.268V325.904H157.903V339.58C157.903 340.325 158.102 340.906 158.501 341.322C158.917 341.721 159.497 341.92 160.243 341.92H162.687V344.156H160.555ZM153.119 331.988V330.116H162.687V331.988H153.119ZM172.017 344.468C170.804 344.468 169.755 344.26 168.871 343.844C167.987 343.428 167.268 342.882 166.713 342.206C166.159 341.513 165.743 340.741 165.465 339.892C165.205 339.043 165.075 338.176 165.075 337.292V336.824C165.075 335.923 165.205 335.047 165.465 334.198C165.743 333.349 166.159 332.586 166.713 331.91C167.268 331.217 167.97 330.671 168.819 330.272C169.686 329.856 170.7 329.648 171.861 329.648C173.369 329.648 174.609 329.977 175.579 330.636C176.567 331.277 177.295 332.109 177.763 333.132C178.249 334.155 178.491 335.247 178.491 336.408V337.526H166.167V335.654H176.671L176.099 336.668C176.099 335.68 175.943 334.831 175.631 334.12C175.319 333.392 174.851 332.829 174.227 332.43C173.603 332.031 172.815 331.832 171.861 331.832C170.873 331.832 170.05 332.057 169.391 332.508C168.75 332.959 168.265 333.574 167.935 334.354C167.623 335.134 167.467 336.035 167.467 337.058C167.467 338.046 167.623 338.939 167.935 339.736C168.265 340.516 168.767 341.14 169.443 341.608C170.119 342.059 170.977 342.284 172.017 342.284C173.109 342.284 173.993 342.041 174.669 341.556C175.363 341.071 175.779 340.507 175.917 339.866H178.257C178.067 340.819 177.685 341.643 177.113 342.336C176.541 343.029 175.822 343.558 174.955 343.922C174.089 344.286 173.109 344.468 172.017 344.468ZM186.585 344.416C184.765 344.416 183.353 344.026 182.347 343.246C181.359 342.466 180.848 341.4 180.813 340.048H183.153C183.188 340.585 183.457 341.097 183.959 341.582C184.479 342.05 185.355 342.284 186.585 342.284C187.695 342.284 188.544 342.067 189.133 341.634C189.723 341.183 190.017 340.637 190.017 339.996C190.017 339.424 189.801 338.982 189.367 338.67C188.934 338.341 188.232 338.124 187.261 338.02L185.753 337.864C184.436 337.725 183.361 337.335 182.529 336.694C181.697 336.035 181.281 335.117 181.281 333.938C181.281 333.054 181.507 332.3 181.957 331.676C182.408 331.035 183.032 330.549 183.829 330.22C184.627 329.873 185.545 329.7 186.585 329.7C188.145 329.7 189.411 330.047 190.381 330.74C191.352 331.433 191.855 332.465 191.889 333.834H189.549C189.532 333.279 189.272 332.811 188.769 332.43C188.284 332.031 187.556 331.832 186.585 331.832C185.615 331.832 184.878 332.031 184.375 332.43C183.873 332.829 183.621 333.331 183.621 333.938C183.621 334.458 183.795 334.874 184.141 335.186C184.505 335.498 185.095 335.697 185.909 335.784L187.417 335.94C188.908 336.096 190.104 336.512 191.005 337.188C191.907 337.847 192.357 338.783 192.357 339.996C192.357 340.863 192.106 341.634 191.603 342.31C191.118 342.969 190.442 343.489 189.575 343.87C188.709 344.234 187.712 344.416 186.585 344.416Z",fill:"#1B7266"}),(0,d.jsx)("path",{d:"M59.167 172.335C63.055 172.335 66.343 173.007 69.031 174.351C71.767 175.647 73.975 177.447 75.655 179.751C77.335 182.055 78.559 184.743 79.327 187.815C80.095 190.839 80.479 194.055 80.479 197.463V200.631C80.479 209.223 78.295 215.751 73.927 220.215C69.607 224.631 63.247 226.839 54.847 226.839C53.023 226.839 51.319 226.791 49.735 226.695C48.151 226.599 46.567 226.455 44.983 226.263V217.695C46.567 217.887 48.175 218.031 49.807 218.127C51.487 218.223 53.287 218.271 55.207 218.271C59.239 218.271 62.407 217.575 64.711 216.183C67.015 214.791 68.647 212.751 69.607 210.063C70.615 207.375 71.119 204.039 71.119 200.055V195.375L73.423 192.063C73.375 195.759 72.631 198.831 71.191 201.279C69.799 203.679 67.855 205.503 65.359 206.751C62.863 207.951 60.007 208.551 56.791 208.551C53.047 208.551 49.855 207.807 47.215 206.319C44.575 204.831 42.535 202.767 41.095 200.127C39.703 197.487 39.007 194.415 39.007 190.911C39.007 187.263 39.823 184.047 41.455 181.263C43.087 178.431 45.391 176.247 48.367 174.711C51.391 173.127 54.991 172.335 59.167 172.335ZM59.383 180.903C57.127 180.903 55.207 181.335 53.623 182.199C52.039 183.015 50.839 184.167 50.023 185.655C49.207 187.143 48.799 188.847 48.799 190.767C48.799 192.735 49.183 194.463 49.951 195.951C50.767 197.439 51.943 198.591 53.479 199.407C55.015 200.223 56.863 200.631 59.023 200.631C61.087 200.631 62.959 200.271 64.639 199.551C66.367 198.783 67.711 197.679 68.671 196.239C69.679 194.751 70.183 192.927 70.183 190.767C70.183 188.895 69.775 187.215 68.959 185.727C68.191 184.239 66.991 183.063 65.359 182.199C63.775 181.335 61.783 180.903 59.383 180.903ZM107.748 227.775C103.62 227.775 100.116 227.103 97.2359 225.759C94.3559 224.367 92.0039 222.495 90.1799 220.143C88.3559 217.743 87.0119 215.007 86.1479 211.935C85.3319 208.815 84.9239 205.551 84.9239 202.143V198.111C84.9239 193.263 85.7399 188.895 87.3719 185.007C89.0039 181.119 91.4999 178.047 94.8599 175.791C98.2199 173.487 102.516 172.335 107.748 172.335C112.932 172.335 117.204 173.487 120.564 175.791C123.924 178.047 126.396 181.119 127.98 185.007C129.612 188.895 130.428 193.263 130.428 198.111V202.143C130.428 205.551 129.996 208.815 129.132 211.935C128.316 215.007 126.996 217.743 125.172 220.143C123.396 222.495 121.068 224.367 118.188 225.759C115.308 227.103 111.828 227.775 107.748 227.775ZM107.748 218.415C112.02 218.415 115.164 216.951 117.18 214.023C119.196 211.047 120.204 206.439 120.204 200.199C120.204 193.575 119.172 188.847 117.108 186.015C115.044 183.135 111.924 181.695 107.748 181.695C103.524 181.695 100.356 183.135 98.2439 186.015C96.1799 188.847 95.1479 193.527 95.1479 200.055C95.1479 206.343 96.1799 210.975 98.2439 213.951C100.308 216.927 103.476 218.415 107.748 218.415ZM157.85 227.775C153.722 227.775 150.218 227.103 147.338 225.759C144.458 224.367 142.106 222.495 140.282 220.143C138.458 217.743 137.114 215.007 136.25 211.935C135.434 208.815 135.026 205.551 135.026 202.143V198.111C135.026 193.263 135.842 188.895 137.474 185.007C139.106 181.119 141.602 178.047 144.962 175.791C148.322 173.487 152.618 172.335 157.85 172.335C163.034 172.335 167.306 173.487 170.666 175.791C174.026 178.047 176.498 181.119 178.082 185.007C179.714 188.895 180.53 193.263 180.53 198.111V202.143C180.53 205.551 180.098 208.815 179.234 211.935C178.418 215.007 177.098 217.743 175.274 220.143C173.498 222.495 171.17 224.367 168.29 225.759C165.41 227.103 161.93 227.775 157.85 227.775ZM157.85 218.415C162.122 218.415 165.266 216.951 167.282 214.023C169.298 211.047 170.306 206.439 170.306 200.199C170.306 193.575 169.274 188.847 167.21 186.015C165.146 183.135 162.026 181.695 157.85 181.695C153.626 181.695 150.458 183.135 148.346 186.015C146.282 188.847 145.25 193.527 145.25 200.055C145.25 206.343 146.282 210.975 148.346 213.951C150.41 216.927 153.578 218.415 157.85 218.415ZM197.656 219.423V183.855H206.44V219.423H197.656ZM184.624 205.671V197.607H219.472V205.671H184.624Z",fill:"#1B7266"}),(0,d.jsx)("defs",{children:(0,d.jsxs)("linearGradient",{id:"paint0_linear_372_2419",x1:"-12.017",y1:"16",x2:"201.983",y2:"500",gradientUnits:"userSpaceOnUse",children:[(0,d.jsx)("stop",{stopColor:"#E1DEDE"}),(0,d.jsx)("stop",{offset:"0.485",stopColor:"#747474"}),(0,d.jsx)("stop",{offset:"1",stopColor:"#E1DEDE"})]})})]}),(0,d.jsxs)("svg",{width:"272",height:"465",viewBox:"0 0 272 465",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,d.jsx)("path",{d:"M255.949 16V393.913L16.9661 444.822V16H255.949Z",fill:"#1B7266"}),(0,d.jsxs)("g",{clipPath:"url(#clip0_372_2426)",children:[(0,d.jsx)("path",{d:"M130.509 143.805C104.59 142.443 79.0606 131.935 59.1826 112.086L36.9661 90.0973L59.1826 67.9135C78.8657 48.0648 104.395 37.5567 130.314 36.1946C103.031 39.1135 81.7889 62.0757 81.7889 90.0973C81.7889 117.924 103.226 141.081 130.509 143.805Z",fill:"#EFD157"}),(0,d.jsx)("path",{d:"M234.966 90.0973L212.75 112.086C193.066 131.935 167.342 142.443 141.423 143.805C168.706 141.081 189.948 118.119 189.948 90.0973C189.948 62.0756 168.706 39.1135 141.423 36.3892C167.537 37.5567 193.066 48.0648 212.75 67.9135L234.966 90.0973Z",fill:"#EFD157"}),(0,d.jsx)("path",{d:"M190.143 90.0973C190.143 118.119 168.901 141.081 141.618 143.805C139.864 144 137.915 144 136.161 144C134.212 144 132.458 144 130.704 143.805C103.226 141.081 81.7889 117.924 81.7889 90.0973C81.7889 62.0757 103.031 39.1135 130.315 36.1946C132.263 36 134.017 36 135.966 36C137.915 36 139.669 36 141.618 36.1946C168.706 39.1135 190.143 62.0757 190.143 90.0973Z",fill:"#1B7266"})]}),(0,d.jsx)("path",{opacity:"0.65",d:"M16.9661 8H8.96606V16V444.822V454.706L18.6329 452.646L257.616 401.737L263.949 400.388V393.913V16V8H255.949H16.9661Z",stroke:"url(#paint0_linear_372_2426)",strokeWidth:"16"}),(0,d.jsx)("path",{d:"M56.1161 290L49.5381 271.02H52.1641L58.0661 288.336L56.8181 287.712H59.9381L58.6121 288.336L64.0461 271.02H66.5941L60.4841 290H56.1161ZM70.0868 290V276.116H72.5828V290H70.0868ZM67.9548 278.092V276.116H72.5828V278.092H67.9548ZM70.7888 273.88C70.2341 273.88 69.8181 273.733 69.5408 273.438C69.2808 273.143 69.1508 272.771 69.1508 272.32C69.1508 271.869 69.2808 271.497 69.5408 271.202C69.8181 270.907 70.2341 270.76 70.7888 270.76C71.3435 270.76 71.7508 270.907 72.0108 271.202C72.2881 271.497 72.4268 271.869 72.4268 272.32C72.4268 272.771 72.2881 273.143 72.0108 273.438C71.7508 273.733 71.3435 273.88 70.7888 273.88ZM81.9588 290.416C80.1388 290.416 78.7262 290.026 77.7208 289.246C76.7328 288.466 76.2215 287.4 76.1868 286.048H78.5268C78.5615 286.585 78.8302 287.097 79.3328 287.582C79.8528 288.05 80.7282 288.284 81.9588 288.284C83.0682 288.284 83.9175 288.067 84.5068 287.634C85.0962 287.183 85.3908 286.637 85.3908 285.996C85.3908 285.424 85.1742 284.982 84.7408 284.67C84.3075 284.341 83.6055 284.124 82.6348 284.02L81.1268 283.864C79.8095 283.725 78.7348 283.335 77.9028 282.694C77.0708 282.035 76.6548 281.117 76.6548 279.938C76.6548 279.054 76.8802 278.3 77.3308 277.676C77.7815 277.035 78.4055 276.549 79.2028 276.22C80.0002 275.873 80.9188 275.7 81.9588 275.7C83.5188 275.7 84.7842 276.047 85.7548 276.74C86.7255 277.433 87.2282 278.465 87.2628 279.834H84.9228C84.9055 279.279 84.6455 278.811 84.1428 278.43C83.6575 278.031 82.9295 277.832 81.9588 277.832C80.9882 277.832 80.2515 278.031 79.7488 278.43C79.2462 278.829 78.9948 279.331 78.9948 279.938C78.9948 280.458 79.1682 280.874 79.5148 281.186C79.8788 281.498 80.4682 281.697 81.2828 281.784L82.7908 281.94C84.2815 282.096 85.4775 282.512 86.3788 283.188C87.2802 283.847 87.7308 284.783 87.7308 285.996C87.7308 286.863 87.4795 287.634 86.9768 288.31C86.4915 288.969 85.8155 289.489 84.9488 289.87C84.0822 290.234 83.0855 290.416 81.9588 290.416ZM92.0243 290V276.116H94.5203V290H92.0243ZM89.8923 278.092V276.116H94.5203V278.092H89.8923ZM92.7263 273.88C92.1716 273.88 91.7556 273.733 91.4783 273.438C91.2183 273.143 91.0883 272.771 91.0883 272.32C91.0883 271.869 91.2183 271.497 91.4783 271.202C91.7556 270.907 92.1716 270.76 92.7263 270.76C93.281 270.76 93.6883 270.907 93.9483 271.202C94.2256 271.497 94.3643 271.869 94.3643 272.32C94.3643 272.771 94.2256 273.143 93.9483 273.438C93.6883 273.733 93.281 273.88 92.7263 273.88ZM104.754 290.156C103.714 290.156 102.813 290.009 102.05 289.714C101.305 289.419 100.724 288.917 100.308 288.206C99.9097 287.478 99.7103 286.499 99.7103 285.268V271.904H102.102V285.58C102.102 286.325 102.302 286.906 102.7 287.322C103.116 287.721 103.697 287.92 104.442 287.92H106.886V290.156H104.754ZM97.3183 277.988V276.116H106.886V277.988H97.3183ZM116.711 290.468C115.498 290.468 114.432 290.26 113.513 289.844C112.594 289.428 111.814 288.882 111.173 288.206C110.549 287.513 110.072 286.741 109.743 285.892C109.431 285.043 109.275 284.176 109.275 283.292V282.824C109.275 281.94 109.44 281.073 109.769 280.224C110.098 279.357 110.584 278.586 111.225 277.91C111.866 277.217 112.646 276.671 113.565 276.272C114.484 275.856 115.532 275.648 116.711 275.648C117.89 275.648 118.938 275.856 119.857 276.272C120.776 276.671 121.556 277.217 122.197 277.91C122.838 278.586 123.324 279.357 123.653 280.224C123.982 281.073 124.147 281.94 124.147 282.824V283.292C124.147 284.176 123.982 285.043 123.653 285.892C123.341 286.741 122.864 287.513 122.223 288.206C121.599 288.882 120.828 289.428 119.909 289.844C118.99 290.26 117.924 290.468 116.711 290.468ZM116.711 288.232C117.751 288.232 118.635 288.007 119.363 287.556C120.108 287.088 120.672 286.464 121.053 285.684C121.452 284.904 121.651 284.029 121.651 283.058C121.651 282.07 121.452 281.186 121.053 280.406C120.654 279.626 120.082 279.011 119.337 278.56C118.609 278.109 117.734 277.884 116.711 277.884C115.706 277.884 114.83 278.109 114.085 278.56C113.34 279.011 112.768 279.626 112.369 280.406C111.97 281.186 111.771 282.07 111.771 283.058C111.771 284.029 111.962 284.904 112.343 285.684C112.742 286.464 113.305 287.088 114.033 287.556C114.778 288.007 115.671 288.232 116.711 288.232ZM127.885 290V276.116H129.861V281.836H129.757C129.757 279.808 130.199 278.326 131.083 277.39C131.985 276.437 133.328 275.96 135.113 275.96H135.581V278.196H134.697C133.311 278.196 132.245 278.569 131.499 279.314C130.754 280.042 130.381 281.099 130.381 282.486V290H127.885ZM143.099 290.416C141.279 290.416 139.867 290.026 138.861 289.246C137.873 288.466 137.362 287.4 137.327 286.048H139.667C139.702 286.585 139.971 287.097 140.473 287.582C140.993 288.05 141.869 288.284 143.099 288.284C144.209 288.284 145.058 288.067 145.647 287.634C146.237 287.183 146.531 286.637 146.531 285.996C146.531 285.424 146.315 284.982 145.881 284.67C145.448 284.341 144.746 284.124 143.775 284.02L142.267 283.864C140.95 283.725 139.875 283.335 139.043 282.694C138.211 282.035 137.795 281.117 137.795 279.938C137.795 279.054 138.021 278.3 138.471 277.676C138.922 277.035 139.546 276.549 140.343 276.22C141.141 275.873 142.059 275.7 143.099 275.7C144.659 275.7 145.925 276.047 146.895 276.74C147.866 277.433 148.369 278.465 148.403 279.834H146.063C146.046 279.279 145.786 278.811 145.283 278.43C144.798 278.031 144.07 277.832 143.099 277.832C142.129 277.832 141.392 278.031 140.889 278.43C140.387 278.829 140.135 279.331 140.135 279.938C140.135 280.458 140.309 280.874 140.655 281.186C141.019 281.498 141.609 281.697 142.423 281.784L143.931 281.94C145.422 282.096 146.618 282.512 147.519 283.188C148.421 283.847 148.871 284.783 148.871 285.996C148.871 286.863 148.62 287.634 148.117 288.31C147.632 288.969 146.956 289.489 146.089 289.87C145.223 290.234 144.226 290.416 143.099 290.416ZM169.975 290L162.149 281.654C161.352 280.787 160.728 280.042 160.277 279.418C159.844 278.794 159.532 278.205 159.341 277.65C159.168 277.095 159.081 276.497 159.081 275.856C159.081 274.729 159.289 273.793 159.705 273.048C160.138 272.303 160.814 271.748 161.733 271.384C162.652 271.003 163.839 270.812 165.295 270.812C165.867 270.812 166.508 270.838 167.219 270.89C167.93 270.942 168.562 271.003 169.117 271.072V273.256C168.77 273.221 168.32 273.187 167.765 273.152C167.21 273.1 166.664 273.065 166.127 273.048C165.59 273.013 165.148 272.996 164.801 272.996C163.57 272.996 162.704 273.247 162.201 273.75C161.716 274.235 161.473 274.955 161.473 275.908C161.473 276.671 161.646 277.373 161.993 278.014C162.357 278.655 162.92 279.383 163.683 280.198L172.913 290H169.975ZM163.527 290.468C162.192 290.468 161.022 290.217 160.017 289.714C159.012 289.211 158.232 288.527 157.677 287.66C157.122 286.793 156.845 285.831 156.845 284.774V284.384C156.845 283.136 157.192 282.035 157.885 281.082C158.596 280.111 159.471 279.331 160.511 278.742L161.811 280.484C161.048 280.865 160.424 281.429 159.939 282.174C159.471 282.902 159.237 283.708 159.237 284.592C159.237 285.407 159.428 286.091 159.809 286.646C160.208 287.201 160.728 287.625 161.369 287.92C162.028 288.197 162.747 288.336 163.527 288.336C164.74 288.336 165.789 287.998 166.673 287.322C167.557 286.629 168.233 285.615 168.701 284.28C169.186 282.928 169.429 281.255 169.429 279.262H171.665C171.665 280.995 171.483 282.555 171.119 283.942C170.772 285.311 170.252 286.481 169.559 287.452C168.866 288.423 168.008 289.168 166.985 289.688C165.98 290.208 164.827 290.468 163.527 290.468ZM166.413 279.6V277.624H173.225V279.6H166.413ZM49.6941 323L56.5321 304.02H60.8481L67.8941 323H65.2681L58.8981 305.684L60.1461 306.308H57.0781L58.4041 305.684L52.2421 323H49.6941ZM53.7761 317.332L54.6341 315.044H62.8241L63.6821 317.332H53.7761ZM75.6681 323.416C74.0214 323.416 72.7561 322.879 71.8721 321.804C70.9881 320.729 70.5461 319.178 70.5461 317.15V309.09H73.0421V317.644C73.0421 318.736 73.3367 319.594 73.9261 320.218C74.5154 320.825 75.3127 321.128 76.3181 321.128C77.3581 321.128 78.2074 320.799 78.8661 320.14C79.5247 319.464 79.8541 318.545 79.8541 317.384V309.09H82.3501V323H80.3741V317.046H80.6861C80.6861 318.415 80.5041 319.577 80.1401 320.53C79.7761 321.466 79.2301 322.185 78.5021 322.688C77.7914 323.173 76.8814 323.416 75.7721 323.416H75.6681ZM92.9822 323.468C91.9942 323.468 91.0842 323.286 90.2522 322.922C89.4202 322.558 88.6922 322.047 88.0682 321.388C87.4616 320.729 86.9849 319.967 86.6382 319.1C86.3089 318.233 86.1442 317.297 86.1442 316.292V315.824C86.1442 314.836 86.3089 313.909 86.6382 313.042C86.9676 312.175 87.4269 311.413 88.0162 310.754C88.6229 310.095 89.3336 309.584 90.1482 309.22C90.9802 308.839 91.8989 308.648 92.9042 308.648C93.9616 308.648 94.9236 308.873 95.7902 309.324C96.6569 309.757 97.3676 310.442 97.9222 311.378C98.4769 312.314 98.7889 313.527 98.8582 315.018L97.8182 313.354V304.02H100.314V323H98.3382V316.838H99.0662C98.9969 318.415 98.6676 319.698 98.0782 320.686C97.4889 321.657 96.7436 322.367 95.8422 322.818C94.9582 323.251 94.0049 323.468 92.9822 323.468ZM93.3202 321.284C94.1696 321.284 94.9409 321.093 95.6342 320.712C96.3276 320.331 96.8822 319.785 97.2982 319.074C97.7142 318.346 97.9222 317.497 97.9222 316.526V315.33C97.9222 314.377 97.7056 313.571 97.2722 312.912C96.8562 312.236 96.2929 311.725 95.5822 311.378C94.8889 311.014 94.1262 310.832 93.2942 310.832C92.3756 310.832 91.5609 311.049 90.8502 311.482C90.1569 311.915 89.6109 312.522 89.2122 313.302C88.8309 314.082 88.6402 315.001 88.6402 316.058C88.6402 317.115 88.8396 318.043 89.2382 318.84C89.6369 319.62 90.1916 320.227 90.9022 320.66C91.6129 321.076 92.4189 321.284 93.3202 321.284ZM105.786 323V309.116H108.282V323H105.786ZM103.654 311.092V309.116H108.282V311.092H103.654ZM106.488 306.88C105.933 306.88 105.517 306.733 105.24 306.438C104.98 306.143 104.85 305.771 104.85 305.32C104.85 304.869 104.98 304.497 105.24 304.202C105.517 303.907 105.933 303.76 106.488 303.76C107.043 303.76 107.45 303.907 107.71 304.202C107.987 304.497 108.126 304.869 108.126 305.32C108.126 305.771 107.987 306.143 107.71 306.438C107.45 306.733 107.043 306.88 106.488 306.88ZM119.01 323.468C117.797 323.468 116.748 323.26 115.864 322.844C114.98 322.428 114.261 321.882 113.706 321.206C113.151 320.513 112.735 319.741 112.458 318.892C112.198 318.043 112.068 317.176 112.068 316.292V315.824C112.068 314.923 112.198 314.047 112.458 313.198C112.735 312.349 113.151 311.586 113.706 310.91C114.261 310.217 114.963 309.671 115.812 309.272C116.679 308.856 117.693 308.648 118.854 308.648C120.362 308.648 121.601 308.977 122.572 309.636C123.56 310.277 124.288 311.109 124.756 312.132C125.241 313.155 125.484 314.247 125.484 315.408V316.526H113.16V314.654H123.664L123.092 315.668C123.092 314.68 122.936 313.831 122.624 313.12C122.312 312.392 121.844 311.829 121.22 311.43C120.596 311.031 119.807 310.832 118.854 310.832C117.866 310.832 117.043 311.057 116.384 311.508C115.743 311.959 115.257 312.574 114.928 313.354C114.616 314.134 114.46 315.035 114.46 316.058C114.46 317.046 114.616 317.939 114.928 318.736C115.257 319.516 115.76 320.14 116.436 320.608C117.112 321.059 117.97 321.284 119.01 321.284C120.102 321.284 120.986 321.041 121.662 320.556C122.355 320.071 122.771 319.507 122.91 318.866H125.25C125.059 319.819 124.678 320.643 124.106 321.336C123.534 322.029 122.815 322.558 121.948 322.922C121.081 323.286 120.102 323.468 119.01 323.468ZM129.028 323V309.116H131.004V315.07H130.692C130.692 313.701 130.874 312.548 131.238 311.612C131.619 310.659 132.191 309.939 132.954 309.454C133.717 308.951 134.679 308.7 135.84 308.7H135.944C137.695 308.7 138.986 309.246 139.818 310.338C140.667 311.43 141.092 313.007 141.092 315.07V323H138.596V314.55C138.596 313.475 138.293 312.617 137.686 311.976C137.079 311.317 136.247 310.988 135.19 310.988C134.098 310.988 133.214 311.326 132.538 312.002C131.862 312.678 131.524 313.579 131.524 314.706V323H129.028ZM151.613 323.468C150.417 323.468 149.377 323.26 148.493 322.844C147.626 322.428 146.907 321.873 146.335 321.18C145.763 320.469 145.33 319.689 145.035 318.84C144.758 317.991 144.619 317.141 144.619 316.292V315.824C144.619 314.94 144.758 314.073 145.035 313.224C145.33 312.375 145.763 311.612 146.335 310.936C146.924 310.243 147.652 309.688 148.519 309.272C149.386 308.856 150.4 308.648 151.561 308.648C152.722 308.648 153.762 308.865 154.681 309.298C155.617 309.731 156.362 310.347 156.917 311.144C157.489 311.924 157.81 312.851 157.879 313.926H155.487C155.366 313.059 154.967 312.34 154.291 311.768C153.615 311.179 152.705 310.884 151.561 310.884C150.573 310.884 149.75 311.109 149.091 311.56C148.432 312.011 147.938 312.626 147.609 313.406C147.28 314.186 147.115 315.07 147.115 316.058C147.115 317.011 147.28 317.887 147.609 318.684C147.938 319.464 148.432 320.088 149.091 320.556C149.767 321.007 150.608 321.232 151.613 321.232C152.393 321.232 153.069 321.093 153.641 320.816C154.213 320.539 154.672 320.166 155.019 319.698C155.366 319.23 155.574 318.701 155.643 318.112H158.035C157.983 319.204 157.662 320.149 157.073 320.946C156.501 321.743 155.738 322.367 154.785 322.818C153.849 323.251 152.792 323.468 151.613 323.468ZM167.328 323.468C166.115 323.468 165.066 323.26 164.182 322.844C163.298 322.428 162.579 321.882 162.024 321.206C161.47 320.513 161.054 319.741 160.776 318.892C160.516 318.043 160.386 317.176 160.386 316.292V315.824C160.386 314.923 160.516 314.047 160.776 313.198C161.054 312.349 161.47 311.586 162.024 310.91C162.579 310.217 163.281 309.671 164.13 309.272C164.997 308.856 166.011 308.648 167.172 308.648C168.68 308.648 169.92 308.977 170.89 309.636C171.878 310.277 172.606 311.109 173.074 312.132C173.56 313.155 173.802 314.247 173.802 315.408V316.526H161.478V314.654H171.982L171.41 315.668C171.41 314.68 171.254 313.831 170.942 313.12C170.63 312.392 170.162 311.829 169.538 311.43C168.914 311.031 168.126 310.832 167.172 310.832C166.184 310.832 165.361 311.057 164.702 311.508C164.061 311.959 163.576 312.574 163.246 313.354C162.934 314.134 162.778 315.035 162.778 316.058C162.778 317.046 162.934 317.939 163.246 318.736C163.576 319.516 164.078 320.14 164.754 320.608C165.43 321.059 166.288 321.284 167.328 321.284C168.42 321.284 169.304 321.041 169.98 320.556C170.674 320.071 171.09 319.507 171.228 318.866H173.568C173.378 319.819 172.996 320.643 172.424 321.336C171.852 322.029 171.133 322.558 170.266 322.922C169.4 323.286 168.42 323.468 167.328 323.468Z",fill:"white"}),(0,d.jsx)("path",{d:"M48.2861 236V189.776L51.4541 192.224H37.5581V183.44H58.4381V236H48.2861ZM69.656 236V224.48H80.888V236H69.656ZM98.2079 236V189.776L101.376 192.224H87.4799V183.44H108.36V236H98.2079ZM121.954 236V183.44H135.922L149.098 214.832H150.394L163.498 183.44H177.682V236H167.53V191.144L168.826 191.288L154.642 225.272H144.202L129.946 191.288L131.314 191.144V236H121.954ZM201.161 229.016V193.448H209.945V229.016H201.161ZM188.129 215.264V207.2H222.977V215.264H188.129Z",fill:"white"}),(0,d.jsxs)("defs",{children:[(0,d.jsxs)("linearGradient",{id:"paint0_linear_372_2426",x1:"-12.0339",y1:"16",x2:"201.966",y2:"500",gradientUnits:"userSpaceOnUse",children:[(0,d.jsx)("stop",{stopColor:"#E1DEDE"}),(0,d.jsx)("stop",{offset:"0.485",stopColor:"#747474"}),(0,d.jsx)("stop",{offset:"1",stopColor:"#E1DEDE"})]}),(0,d.jsx)("clipPath",{id:"clip0_372_2426",children:(0,d.jsx)("rect",{width:"198",height:"108",fill:"white",transform:"translate(36.9661 36)"})})]})]})]})})]})}};var F=r(86158);const O=i.Ay.div`
  width: 100%;
  height: auto;
  background-color: ${e=>e.event.themeColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  padding: 10px 50px;
  text-align: center;
  .aligned-text {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    font-weight: 100;
    font-size: 14px;
  }
  .custom-button {
    background-color: ${e=>e.event.themeColor};
    border: 1px solid ${e=>e.event.themeColor};
    color: white;
    margin-top: 10px;
    border-radius: 20px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }
  .custom-button:hover {
    background-color: white;
    color: ${e=>e.event.themeColor};
  }
  @media (max-width: 768px) {
    .aligned-text {
      font-size: 12px;
    }
  }
`,M=i.Ay.div`
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #000;
  padding: 10px 50px;
  text-align: center;
  .aligned-textNew {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    font-weight: 100;
    font-size: 18px;
  }
  .custom-button {
    background-color: ${e=>e.event.themeColor};
    border: 1px solid ${e=>e.event.themeColor};
    color: white;
    margin-top: 10px;
    border-radius: 20px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }
  .custom-button:hover {
    background-color: white;
    color: ${e=>e.event.themeColor};
  }
  @media (max-width: 768px) {
    .aligned-text {
      font-size: 12px;
    }
      width:100%;
  }
`,N=i.Ay.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border: 0px solid;
    background: none;
    width: 100px;
    height: 100px;
    &.theme1 {
      flex-direction: row;
      width: 400px;
      background: #fff;
    }
    &.theme3 {
      flex-direction: row;
      width: 400px;
    }
  }
  .theme2,
  .theme1 {
    background: #fff;
    border-radius: 10px;
  }
  .theme3 {
    border-radius: 10px;
    background: linear-gradient(
      to top,
      ${e=>e.event.themeColor},
      ${e=>e.event.secondaryColor}
    );
  }
  .theme4 {
    background: #fff;
  }
  .countTimer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: 500;
  }
  .colon {
    display: flex;
    align-self: center;
    font-size: 20px;
    color: #fff;
    height: 10px;
    width: 10px;
  }
  div span:first-child {
    font-size: 40px;
    color: ${e=>e.event.themeColor};
  }
  div span:last-child {
    font-size: 14px;
    color: gray;
  }

  @media (max-width: 768px) {
    gap: 5px;
    width: 80%;
    div {
      padding: 10px;
      width: 20px;
      height: 60px;
    }
    div span:first-child {
      font-size: 20px;
    }
    div span:last-child {
      font-size: 10px;
      color: gray;
    }
  }
`,j=i.Ay.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border: 0px solid;
    background: none;
    width: 100px;
    height: 100px;
    &.theme1 {
      flex-direction: row;
      width: 400px;
      background: #fff;
    }
    &.theme3 {
      flex-direction: row;
      width: 400px;
    }
  }
  .theme2,
  .theme1 {
    background: #fff;
    border-radius: 10px;
  }
  .theme3 {
    border-radius: 10px;
    background: linear-gradient(
      to top,
      ${e=>e.event.themeColor},
      ${e=>e.event.secondaryColor}
    );
  }
  .theme4 {
    background: #fff;
  }
  .countTimer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: 800;
  }
  .colon {
    display: flex;
    align-self: center;
    font-size: 20px;
    color: #fff;
    height: 10px;
    width: 10px;
  }
  div span:first-child {
    font-size: 40px;
    color: #8f1837;
  }
  div span:last-child {
    font-size: 14px;
    color: gray;
  }

  @media (max-width: 768px) {
    gap: 5px;
    width: 80%;
    div {
      padding: 10px;
      width: 30px;
      height: 60px;
    }
    div span:first-child {
      font-size: 28px;
    }
    div span:last-child {
      font-size: 12px;
      color: gray;
    }
  }
`,L=e=>{var t,r,i,o,s,l,c,A,u,f,h,p,g,m,v,y,b,w,x,C;let{id:B,targetDate:E,event:k,theme:I,config:S}=e;const D=()=>{const e=+new Date(E)-+new Date;let t={};return e>0&&(t={days:Math.floor(e/864e5),hours:Math.floor(e/36e5%24),minutes:Math.floor(e/1e3/60%60),seconds:Math.floor(e/1e3%60)}),t},[Q,_]=(0,n.useState)(D());switch((0,n.useEffect)((()=>{const e=setTimeout((()=>{_(D())}),1e3);return()=>clearTimeout(e)})),I){default:case"theme5":return(0,d.jsx)(a.w,{id:B,className:"padding-top",style:{display:"flex",alignItems:"center"},children:(0,d.jsxs)(M,{event:k,children:[(0,d.jsx)("span",{className:"aligned-textNew",children:S.description}),(0,d.jsx)(j,{event:k,children:(0,d.jsxs)("div",{className:"theme1",children:[(0,d.jsxs)("div",{className:"countTimer",children:[(0,d.jsx)("span",{children:null!==(t=Q.days)&&void 0!==t?t:0})," ",(0,d.jsx)("span",{children:"days"})]}),(0,d.jsx)("div",{style:{color:"#000"},children:":"}),(0,d.jsxs)("div",{className:"countTimer",children:[(0,d.jsx)("span",{children:null!==(r=Q.hours)&&void 0!==r?r:0})," ",(0,d.jsx)("span",{children:"hours"})]}),(0,d.jsx)("div",{style:{color:"#000"},children:":"}),(0,d.jsxs)("div",{className:"countTimer",children:[(0,d.jsx)("span",{children:null!==(i=Q.minutes)&&void 0!==i?i:0})," ",(0,d.jsx)("span",{children:"minutes"})]}),(0,d.jsx)("div",{style:{color:"#000"},children:":"}),(0,d.jsxs)("div",{className:"countTimer",children:[(0,d.jsx)("span",{children:null!==(o=Q.seconds)&&void 0!==o?o:0})," ",(0,d.jsx)("span",{children:"seconds"})]})]})})]})});case"theme1":return(0,d.jsx)(a.w,{id:B,children:(0,d.jsxs)(O,{event:k,children:[(0,d.jsx)("h2",{children:S.title}),(0,d.jsx)("span",{className:"aligned-text",children:S.description}),(0,d.jsx)(N,{event:k,children:(0,d.jsxs)("div",{className:"theme1",children:[(0,d.jsxs)("div",{className:"countTimer",children:[(0,d.jsx)("span",{children:null!==(s=Q.days)&&void 0!==s?s:0})," ",(0,d.jsx)("span",{children:"days"})]}),(0,d.jsx)("div",{style:{color:"#000"},children:":"}),(0,d.jsxs)("div",{className:"countTimer",children:[(0,d.jsx)("span",{children:null!==(l=Q.hours)&&void 0!==l?l:0})," ",(0,d.jsx)("span",{children:"hours"})]}),(0,d.jsx)("div",{style:{color:"#000"},children:":"}),(0,d.jsxs)("div",{className:"countTimer",children:[(0,d.jsx)("span",{children:null!==(c=Q.minutes)&&void 0!==c?c:0})," ",(0,d.jsx)("span",{children:"minutes"})]}),(0,d.jsx)("div",{style:{color:"#000"},children:":"}),(0,d.jsxs)("div",{className:"countTimer",children:[(0,d.jsx)("span",{children:null!==(A=Q.seconds)&&void 0!==A?A:0})," ",(0,d.jsx)("span",{children:"seconds"})]})]})})]})});case"theme2":return(0,d.jsx)(a.w,{id:B,children:(0,d.jsxs)(O,{event:k,children:[(0,d.jsx)("h2",{children:S.title}),(0,d.jsx)("span",{className:"aligned-text",children:S.description}),(0,d.jsxs)(N,{className:I,event:k,children:[(0,d.jsxs)("div",{className:I,children:[(0,d.jsx)("span",{style:{width:"40px"},children:null!==(u=Q.days)&&void 0!==u?u:0})," ",(0,d.jsx)("span",{children:"days"})]}),(0,d.jsx)("div",{className:"colon",children:":"}),(0,d.jsxs)("div",{className:I,children:[(0,d.jsx)("span",{style:{width:"40px"},children:null!==(f=Q.hours)&&void 0!==f?f:0})," ",(0,d.jsx)("span",{children:"hours"})]}),(0,d.jsx)("div",{className:"colon",children:":"}),(0,d.jsxs)("div",{className:I,children:[(0,d.jsx)("span",{style:{width:"40px"},children:null!==(h=Q.minutes)&&void 0!==h?h:0})," ",(0,d.jsx)("span",{children:"minutes"})]}),(0,d.jsx)("div",{className:"colon",children:":"}),(0,d.jsxs)("div",{className:I,children:[(0,d.jsx)("span",{style:{width:"40px"},children:null!==(p=Q.seconds)&&void 0!==p?p:0})," ",(0,d.jsx)("span",{children:"seconds"})]})]})]})});case"theme3":return(0,d.jsx)(a.w,{id:B,children:(0,d.jsxs)(O,{event:k,style:{background:"#000"},children:[(0,d.jsx)("h2",{children:S.title}),(0,d.jsx)("span",{className:"aligned-text",children:S.description}),(0,d.jsx)(N,{event:k,className:I,children:(0,d.jsxs)("div",{className:I,children:[(0,d.jsxs)("div",{className:"countTimer",children:[(0,d.jsx)("span",{style:{color:"#fff"},children:null!==(g=Q.days)&&void 0!==g?g:0})," ",(0,d.jsx)("span",{children:"days"})]}),(0,d.jsx)("div",{style:{color:"gray"},children:":"}),(0,d.jsxs)("div",{className:"countTimer",children:[(0,d.jsx)("span",{style:{color:"#fff"},children:null!==(m=Q.hours)&&void 0!==m?m:0})," ",(0,d.jsx)("span",{children:"hours"})]}),(0,d.jsx)("div",{style:{color:"gray"},children:":"}),(0,d.jsxs)("div",{className:"countTimer",children:[(0,d.jsx)("span",{style:{color:"#fff"},children:null!==(v=Q.minutes)&&void 0!==v?v:0})," ",(0,d.jsx)("span",{children:"minutes"})]}),(0,d.jsx)("div",{style:{color:"gray"},children:":"}),(0,d.jsxs)("div",{className:"countTimer",children:[(0,d.jsx)("span",{style:{color:"#fff"},children:null!==(y=Q.seconds)&&void 0!==y?y:0})," ",(0,d.jsx)("span",{children:"seconds"})]})]})})]})});case"theme4":return(0,d.jsx)(a.w,{id:B,children:(0,d.jsxs)(O,{event:k,children:[(0,d.jsx)("h2",{children:S.title}),(0,d.jsx)("span",{className:"aligned-text",children:S.description}),(0,d.jsxs)(N,{className:I,event:k,children:[(0,d.jsxs)("div",{className:I,style:{borderRadius:"10px 0 0 10px"},children:[(0,d.jsx)("span",{children:null!==(b=Q.days)&&void 0!==b?b:0})," ",(0,d.jsx)("span",{children:"days"})]}),(0,d.jsxs)("div",{className:I,children:[(0,d.jsx)("span",{children:null!==(w=Q.hours)&&void 0!==w?w:0})," ",(0,d.jsx)("span",{children:"hours"})]}),(0,d.jsxs)("div",{className:I,children:[(0,d.jsx)("span",{children:null!==(x=Q.minutes)&&void 0!==x?x:0})," ",(0,d.jsx)("span",{children:"minutes"})]}),(0,d.jsxs)("div",{className:I,style:{borderRadius:"0 10px 10px 0"},children:[(0,d.jsx)("span",{children:null!==(C=Q.seconds)&&void 0!==C?C:0})," ",(0,d.jsx)("span",{children:"seconds"})]})]}),(0,d.jsx)("button",{class:"custom-button",children:"Register Now \u2192"})]})})}},U=i.Ay.div`
  display: flex;
  text-align: center;
  width: 100%;
  justify-content: center;
  gap: 50px;
  &.theme1 {
    gap: 0;
    margin-right: 0px;
  }
  .count-box {
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20%;
    border: 1px solid #000;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
    gap: 10%;
    border-radius: 20px;
    position: absolute;
    top: 56%;
    left: 50%;
    transform: translate(-50%);
    z-index: 1;
    background-color: #fff;
  }
  @media (max-width: 768px) {
    overflow: auto;
    align-items: center;
    justify-content: center;
    gap: 3%;
    padding: 10px;
    .count-box {
      width: 90%;
      gap:0;
      padding-left: 20px;
      top: 81%;
      left: 50%;
      height: 12%;
    }
  }
  &.theme2,
  &.theme3 {
    padding-left: 10px;
  }
  &.theme4 {
    padding-left: 10px;
    padding-right: 10px;
  }
`,R=i.Ay.div`
  height: 180px;
  border-radius: 50%;
  border: 1px solid transparent;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  margin-bottom: 5px;
  color: ${e=>e.event.themeColor};
  font-size: 24px;
  margin-right: 20px;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: none;
  position: relative;
  &.theme3 {
    width: 180px;
    margin-right: 20px;
    background: linear-gradient(to right, #000, #000) padding-box,
      linear-gradient(to right, ${e=>e.event.secondaryColor}, #000)
        border-box;
  }
  &.theme2 {
    width: 180px;
    margin-right: 20px;
    border: 1px solid ${e=>e.event.themeColor};
  }
  &.theme2::after {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: ${e=>e.event.themeColor};
    border-radius: 50%;
    top: 20%;
    left: 90%;
    transform: translate(-50%, -50%);
  }

  &.theme2:nth-child(2)::after {
    top: 40%;
    left: 99%;
    transform: translate(-50%, -50%);
  }

  &.theme2:nth-child(3)::after {
    top: 60%;
    left: 99%;
    transform: translate(-50%, -50%);
  }

  &.theme2:nth-child(4)::after {
    top: 80%;
    left: 90%;
    transform: translate(-50%, -50%);
  }
  &.theme1 {
    border: 0;
    margin-right: 0px;
    width: 220px;
    gap: 10px;
  }
  &.theme1::after {
    content: "";
    width: 2px;
    height: 50%;
    border: 0;
    background: lightgrey;
    border-radius: 0;
    position: absolute;
    right: 0;
  }
  &.theme4::after {
    content: "";
    width: 2px;
    height: 70px;
    border: 0;
    background: lightgrey;
    border-radius: 0;
    position: absolute;
    right: -35px;
  }
  &:first-child.theme1 {
    border: 0;
    border-radius: 0;
  }
  &:last-child.theme1::after {
    display: none;
  }
  &:last-child.theme4::after {
    display: none;
  }
  h2 {
    margin: 0;
    color: black;
  }
  p {
    font-size: 18px;
    margin: 0;
    color: ${e=>e.event.themeColor};
  }
  @media (max-width: 768px) {
    flex: none;
    width: 100px;
    height: 100px;
    &.theme4::after {
      right: -20px;
      height: 30px;
    }
    &:first-child {
      margin-left: 10px;
    }
    &.theme1 {
      border: 0;
      margin-right: 0px;
      width: 25%;
      flex-wrap: wrap;
      gap: 10px;
    }
    &.theme2,
    &.theme3,
    &.theme4 {
      width: 70px;
      height: 70px;
    }
    h2 {
      margin: 0;
      font-size: 20px;
    }
    p {
      font-size: 12px;
      margin: 0;
    }
  }
`,P=[{name:"Sessions",count:23},{name:"Guests",count:50},{name:"Delegates",count:"10k"},{name:"Stages",count:7}],H=e=>{let{id:t,counts:r,event:n,theme:i}=e;switch(i){case"theme1":default:return(0,d.jsx)(a.w,{id:t,children:(0,d.jsx)(U,{children:P&&P.map(((e,t)=>(0,d.jsx)(R,{className:"theme1",event:n,children:(0,d.jsxs)("div",{children:[(0,d.jsxs)("h2",{children:[e.count,"+"]}),(0,d.jsx)("p",{children:e.name})]},t)},t)))})});case"theme2":return(0,d.jsx)(a.w,{id:t,children:(0,d.jsx)(a.m,{children:(0,d.jsx)(U,{className:i,children:P&&P.map(((e,t)=>(0,d.jsx)(R,{className:i,event:n,children:(0,d.jsxs)("div",{children:[(0,d.jsxs)("h2",{children:[e.count,"+"]}),(0,d.jsx)("p",{children:e.name})]},t)},t)))})})});case"theme3":return(0,d.jsx)(a.w,{id:t,style:{backgroundColor:"black"},children:(0,d.jsx)(a.m,{children:(0,d.jsx)(U,{className:i,children:P&&P.map(((e,t)=>(0,d.jsx)(R,{className:i,event:n,children:(0,d.jsxs)("div",{children:[(0,d.jsxs)("h2",{style:{color:"#fff"},children:[e.count,"+"]}),(0,d.jsx)("p",{children:e.name})]},t)},t)))})})})}};var z=r(99566),V=r(96816);const G=r.p+"static/media/default_food.202d86fc46080ff71b83.jpg",Y=i.Ay.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  @media (max-width: 768px) {
    h1 {
      text-align:center;
    }
  }
`,W=i.Ay.div`
display:flex;
flex-direction:row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`,K=i.Ay.div`
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  &.theme1 {
  width:100%;
  flex-wrap:wrap;
  }
  .news-image {
    width: 1100px;
    height: 300px;
    border-radius: 10px;
  }
  .news-image-2 {
    width: 250px;
    height: 220px;
    border-radius: 10px;
  }
  .news-box {
    width: 250px;
    margin-top: 20px;
    &.theme4{
      margin-top:0;
      align-self:center;
    }
  }
  .latest-box{
    display:flex;
    flex-direction:row;
    margin-top:20px;
    width:100%;
  }
  .dot {
    width: 10px;
    height: 10px;
    background-color: ${e=>e.event.themeColor};
    border-radius: 50%;
    display: inline-block;
    margin-right: 5px;
  }
  .name-text {
    font-weight: 400;
    text-align:left;
  }
  .time {
    font-size: 12px;
    font-weight: 200;
  }
  &.theme4 {
    gap: 40px;
    overflow: auto;
    align-items:center;
    flex-wrap: ${e=>"Vertical"===e.deskTopScrolling?"wrap":"nowrap"};
  align-items: ${e=>"Vertical"===e.deskTopScrolling?"center":"flex-start"};
  justify-content: ${e=>"Vertical"===e.deskTopScrolling?"center":"flex-start"};
  }
  @media (max-width: 768px) {
    // flex-direction: column;
    flex-wrap:wrap;
    justify-content:space-between;
    padding-left:10px;
    padding-right:10px;
    &.theme4 {
      flex-wrap: ${e=>"Vertical"===e.mobileScrolling?"wrap":"nowrap"};
      align-items: ${e=>"Vertical"===e.mobileScrolling?"center":"flex-start"};
      justify-content: ${e=>"Vertical"===e.mobileScrolling?"center":"flex-start"};
    }
    .news-image {
      width: 100%;
      height: 200px;
    }
    .latest-box{
      flex-direction:column;
    }
  }
`,q=i.Ay.div`
  text-align: center;
  margin: 0 auto 0;
  padding: 10px;
  gap: 10px;
  display: flex;
  button {
    background: lightgray;
    border-radius: 5px;
    cursor: pointer;
    border: 0;
    height: 5px;
  }
  button.active {
    width: 30px;
    background: ${e=>{var t;return null===(t=e.event)||void 0===t?void 0:t.themeColor}};
  }
`,Z=i.Ay.div`
  margin-left: 20px;
  width: 100%;
  height: auto;
  font-weight: 400;
  .latest-info {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .latest-info p {
    font-size: 14px;
  }
  .latest-btn {
    background-color: ${e=>e.event.themeColor} !important;
    width: 70px;
    height: 30px;
    border: none;
    border-radius: 5px;
    color: #fff;
    margin-right: 10px;
  }
  .news-text {
    display:flex;
    margin-right: 30px;
    color: #555555;
  }
  @media (max-width: 768px) {
    margin-left: 0;
  }
`,J=i.Ay.div`
display: flex;
border: 1px solid #ccc;
border-radius: 8px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
overflow: hidden;
width: 600px;
height: 230px;
padding: 15px;
margin-bottom: 40px;
&.theme3 {
  background: linear-gradient(to top, ${e=>e.event.themeColor}, ${e=>e.event.secondaryColor});
}
.news-image img {
  width: 100%;
  height: 100%;
  display: block;
}
.news-content {
  flex: 2;
  text-align: left;
  margin-left: 20px;
  &.theme3 {
    color:#fff;
  }
}
.chip {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${e=>e.event.themeColor} !important;
  width: 72px;
  height: 21px;
  border-radius: 5px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  font-size: 14px;
}
.chip-new {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 95%;
  height: 30px;
  margin-bottom: 10px;
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight:300;
}
.chip-new img {
  width: 20px;
  height: auto;
  border-radius: 50%;
}
.profile-name,
.calendar,
.clock {
  margin-right: 8px;
  margin-left: 8px;
}
  .divider {
    margin-right: 4px;
  } 
  .news-text {
    font-family: Arial, Helvetica, sans-serif;
    color: #555555;
    font-weight: 100;
    font-size: 11px;
    height: auto;
    &.theme3 {
      color:#fff;
    }   
}
@media (max-width: 768px) {
width:100%;
.chip-new img {
 display:none;
}
.chip-new {
 display:none;
}
}
`,X=i.Ay.hr`
border-left: 1px solid rgb(164, 162, 162);
margin-right:40px;
margin-left: 40px;
@media (max-width: 768px) {
display:none;
}
`,$=i.Ay.div`
display: flex;
overflow: hidden;
width: 450px;
height: 120px;
margin-bottom: 8px;
.news-image img {
  width: 100%;
  height: 100%;
  display: block;
}
.news-content {
  flex: 2;
  text-align: left;
  margin-left: 20px;
}
.chip {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${e=>e.event.themeColor} !important;
  width: 72px;
  height: 21px;
  border-radius: 5px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  font-size: 14px;
}
.chip-new {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 95%;
  height: 30px;
  margin-bottom: 10px;
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight:300;
}
.chip-new img {
  width: 20px;
  height: auto;
  border-radius: 50%;
}
.profile-name,
.calendar,
.clock {
  margin-right: 8px;
  margin-left: 8px;
}
  .divider {
    margin-right: 4px;
  } 
  .news-text {
    font-family: Arial, Helvetica, sans-serif;
    color: #555555;
    font-weight: 100;
    font-size: 11px;
    height: auto;   
}
@media (max-width: 768px) {
  width:100%;
  }
`,ee=[{name:"Set Video Playback Speed with Javascript",photo:G,type:"Lifestyle",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",author:"Jessica kohli",date:"02-Dec-2023",time:3,authorImage:G},{name:"Set Video Playback Speed with Javascript",photo:G,type:"Lifestyle",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",author:"Jessica kohli",date:"02-Dec-2023",time:3,authorImage:G}],te=[{name:"Set Video Playback Speed with Javascript",photo:G,type:"Travel",description:"Did you come here for something in particular or just general bike rashing",author:"Jessica kohli",date:"02-Dec-2023",time:3,authorImage:G},{name:"Set Video Playback Speed with Javascript",photo:G,type:"Lifestyle",description:"Did you come here for something in particular or just general bike rashing",author:"Jessica kohli",date:"02-Dec-2023",time:3,authorImage:G},{name:"Set Video Playback Speed with Javascript",photo:G,type:"Travel",description:"Did you come here for something in particular or just general bike rashing",author:"Jessica kohli",date:"02-Dec-2023",time:3,authorImage:G},{name:"Set Video Playback Speed with Javascript",photo:G,type:"Travel",description:"Did you come here for something in particular or just general bike rashing",author:"Jessica kohli",date:"02-Dec-2023",time:3,authorImage:G},{name:"Set Video Playback Speed with Javascript",photo:G,type:"Travel",description:"Did you come here for something in particular or just general bike rashing",author:"Jessica kohli",date:"02-Dec-2023",time:3,authorImage:G},{name:"Set Video Playback Speed with Javascript",photo:G,type:"Lifestyle",description:"Did you come here for something in particular or just general bike rashing",author:"Jessica kohli",date:"02-Dec-2023",time:3,authorImage:G},{name:"Set Video Playback Speed with Javascript",photo:G,type:"Travel",description:"Did you come here for something in particular or just general bike rashing",author:"Jessica kohli",date:"02-Dec-2023",time:3,authorImage:G},{name:"Set Video Playback Speed with Javascript",photo:G,type:"Travel",description:"Did you come here for something in particular or just general bike rashing",author:"Jessica kohli",date:"02-Dec-2023",time:3,authorImage:G}],re=e=>{let{id:t,news:r=[],event:i,theme:o,config:s}=e;const l=window.matchMedia("(max-width: 800px)").matches,c=l?Math.ceil(te.length/2):Math.ceil(te.length/4),[A,u]=(0,n.useState)(0),f=e=>{u(e);const t=document.getElementById("newsItem");if(t){const r=l?20:0;t.scrollTo({left:0===e?0:e*window.outerWidth-r,behavior:"smooth"})}};switch(o){case"theme1":default:return(0,d.jsx)(a.w,{id:t,children:(0,d.jsx)(a.m,{className:"column",children:(0,d.jsxs)(Y,{children:[(0,d.jsx)("h1",{style:{fontWeight:400},children:s.title}),(0,d.jsx)(K,{event:i,className:"theme1",children:ee&&ee.map(((e,t)=>(0,d.jsxs)("div",{className:"latest-box",children:[(0,d.jsx)("img",{src:e.photo,alt:e.name,className:"news-image"}),(0,d.jsxs)(Z,{event:i,children:[(0,d.jsx)("h3",{children:e.name}),(0,d.jsxs)("div",{class:"latest-info",children:[(0,d.jsx)("button",{class:"latest-btn",children:"Latest"}),(0,d.jsxs)("p",{class:"timer-texts",children:[e.time," MINUTES AGO"]})]}),(0,d.jsx)("div",{class:"news-text",children:(0,d.jsx)("p",{class:"timer-texts",children:e.description})})]})]})))}),(0,d.jsx)(K,{event:i,className:"theme1",children:te&&te.map(((e,t)=>(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{class:"news-box",children:[(0,d.jsx)("img",{src:e.photo,alt:e.name,className:"news-image-2"}),(0,d.jsx)("p",{class:"name-text",children:e.name}),(0,d.jsxs)("div",{children:[(0,d.jsx)("span",{class:"dot"}),(0,d.jsxs)("span",{class:"time",children:[e.time," minutes ago"]})]})]})})))})]})})});case"theme2":return(0,d.jsxs)(a.w,{id:t,className:"padding-sides",children:[(0,d.jsx)("h1",{style:{fontWeight:400},children:s.title}),(0,d.jsxs)(W,{children:[(0,d.jsx)("div",{class:"column",children:ee&&ee.map(((e,t)=>(0,d.jsxs)(J,{event:i,children:[(0,d.jsx)("div",{class:"news-image",children:(0,d.jsx)("img",{src:e.photo,alt:e.name})}),(0,d.jsxs)("div",{class:"news-content",children:[(0,d.jsx)("div",{class:"chip",children:"Travel"}),(0,d.jsx)("h3",{children:"Set Video Plackback Speed With Javascript"}),(0,d.jsxs)("div",{class:"chip-new",children:[(0,d.jsx)("img",{src:e.photo,alt:e.name}),(0,d.jsx)("span",{class:"profile-name",children:"John Doe"}),(0,d.jsx)("span",{class:"divider",children:"|"}),(0,d.jsxs)("span",{class:"calendar",children:[(0,d.jsx)("i",{class:"fas fa-calendar-alt"}),"29 Feb 2024"]}),(0,d.jsx)("span",{class:"divider",children:"|"}),(0,d.jsxs)("span",{class:"clock",children:[(0,d.jsx)("i",{class:"fas fa-clock"}),"3 Min. to read"]})]}),(0,d.jsx)("div",{class:"news-text",children:"Did you come here for something in particular or just general Riker bashing."})]})]})))}),(0,d.jsx)(X,{}),(0,d.jsx)("div",{class:"column",children:te&&te.map(((e,t)=>(0,d.jsxs)($,{event:i,children:[(0,d.jsx)("div",{class:"news-image",children:(0,d.jsx)("img",{src:e.photo,alt:e.name})}),(0,d.jsxs)("div",{class:"news-content",children:[(0,d.jsx)("div",{class:"chip",children:"Lifestyle"}),(0,d.jsx)("h5",{children:"Set Video Plackback Speed With Javascript"}),(0,d.jsxs)("div",{class:"chip-new",children:[(0,d.jsx)("span",{class:"profile-name",children:"John Doe"}),(0,d.jsx)("span",{class:"divider",children:"|"}),(0,d.jsxs)("span",{class:"clock",children:[(0,d.jsx)("i",{class:"fas fa-clock"})," 3 Min. to read"]})]})]})]})))})]})]});case"theme3":return(0,d.jsxs)(a.w,{id:t,className:"padding-sides",style:{backgroundColor:"black"},children:[(0,d.jsx)("h1",{style:{fontWeight:400,color:"#fff"},children:s.title}),(0,d.jsxs)(W,{children:[(0,d.jsx)("div",{class:"column",children:ee&&ee.map(((e,t)=>(0,d.jsxs)(J,{event:i,className:o,children:[(0,d.jsx)("div",{class:"news-image",children:(0,d.jsx)("img",{src:e.photo,alt:e.name})}),(0,d.jsxs)("div",{class:"news-content theme3",children:[(0,d.jsx)("div",{class:"chip",children:"Travel"}),(0,d.jsx)("h3",{children:"Set Video Plackback Speed With Javascript"}),(0,d.jsxs)("div",{class:"chip-new",children:[(0,d.jsx)("img",{src:e.photo,alt:e.name}),(0,d.jsx)("span",{class:"profile-name",children:"John Doe"}),(0,d.jsx)("span",{class:"divider",children:"|"}),(0,d.jsxs)("span",{class:"calendar",children:[(0,d.jsx)("i",{class:"fas fa-calendar-alt"}),"29 Feb 2024"]}),(0,d.jsx)("span",{class:"divider",children:"|"}),(0,d.jsxs)("span",{class:"clock",children:[(0,d.jsx)("i",{class:"fas fa-clock"}),"3 Min. to read"]})]}),(0,d.jsx)("div",{class:"news-text theme3",children:"Did you come here for something in particular or just general Riker bashing."})]})]})))}),(0,d.jsx)(X,{}),(0,d.jsx)("div",{class:"column",children:te&&te.map(((e,t)=>(0,d.jsxs)($,{event:i,children:[(0,d.jsx)("div",{class:"news-image",children:(0,d.jsx)("img",{src:e.photo,alt:e.name})}),(0,d.jsxs)("div",{class:"news-content",children:[(0,d.jsx)("div",{class:"chip",children:"Lifestyle"}),(0,d.jsx)("p",{style:{color:"#fff"},children:"Set Video Plackback Speed With Javascript"}),(0,d.jsxs)("div",{class:"chip-new",style:{color:"#fff"},children:[(0,d.jsx)("span",{class:"profile-name",children:"John Doe"}),(0,d.jsx)("span",{class:"divider",children:"|"}),(0,d.jsxs)("span",{class:"clock",children:[(0,d.jsx)("i",{class:"fas fa-clock"})," 3 Min. to read"]})]})]})]})))})]})]});case"theme4":return(0,d.jsxs)(a.w,{id:t,className:"padding-sides center",children:[(0,d.jsx)("h1",{style:{fontWeight:400},children:s.title}),(0,d.jsx)(a.m,{className:"column",children:(0,d.jsx)(K,{event:i,id:"newsItem",className:o,deskTopScrolling:s.deskTopScrolling,mobileScrolling:s.mobileScrolling,children:te&&te.map(((e,t)=>(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{class:"news-box theme4",id:`newsItem-${t}`,children:[(0,d.jsx)("img",{src:e.photo,alt:e.name,className:"news-image-2"}),(0,d.jsx)("p",{class:"name-text",children:e.name}),(0,d.jsxs)("div",{children:[(0,d.jsx)("span",{class:"dot"}),(0,d.jsxs)("span",{class:"time",children:[e.time," minutes ago"]})]})]},t)})))})}),"Horizontal"===s.deskTopScrolling&&!l&&(0,d.jsx)(a.m,{className:"column",children:(0,d.jsx)(q,{event:i,children:Array.from({length:c},((e,t)=>(0,d.jsx)("button",{className:A===t?"active":"",onClick:()=>f(t)},t)))})}),"Horizontal"===s.mobileScrolling&&l&&(0,d.jsx)(a.m,{className:"column",children:(0,d.jsx)(q,{event:i,children:Array.from({length:c},((e,t)=>(0,d.jsx)("button",{className:A===t?"active":"",onClick:()=>f(t)},t)))})})]})}},ne=(e,t)=>{let r=parseInt(e.slice(1),16),n=(r>>16)+t,i=(r>>8&255)+t,a=(255&r)+t;return n=Math.min(Math.max(0,n),255),i=Math.min(Math.max(0,i),255),a=Math.min(Math.max(0,a),255),`#${(i|a<<8|n<<16).toString(16).padStart(6,"0")}`},ie=i.Ay.div`
  display: flex;
  gap: 40px;
  overflow: auto;
  align-items: center;
  padding: 20px 50px 20px calc(50% - 560px);
  &.theme4 {
    padding: 20px 50px 0px calc(50% - 560px);
  }
  flex-wrap: ${e=>"Vertical"===e.deskTopScrolling?"wrap":"nowrap"};
  align-items: ${e=>"Vertical"===e.deskTopScrolling?"center":"flex-start"};
  justify-content: ${e=>"Vertical"===e.deskTopScrolling?"center":"flex-start"};
  @media (max-width: 768px) {
    flex-wrap: ${e=>"Vertical"===e.mobileScrolling?"wrap":"nowrap"};
    align-items: ${e=>"Vertical"===e.mobileScrolling?"center":"flex-start"};
    justify-content: ${e=>"Vertical"===e.mobileScrolling?"center":"flex-start"};
    // display: ${e=>"Vertical"===e.direction?"grid":"flex"};
    // grid-template-columns: repeat(${e=>"Vertical"===e.direction?"2":"1"}, 1fr);
    //   gap: ${e=>(e.mobileScrolling,"40px")};
    padding-left: ${e=>"Vertical"===e.mobileScrolling?"60px":"20px"};
  }
`,ae=i.Ay.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 50px 10px 50px;
  width: 100%;
  &.theme4 {
    flex-direction: column;
  }
  h1 {
    font-weight: 400;
  }
  .speaker-text {
    width: 80%;
  }
  .custom-text-speaker {
    font-family: Arial, Helvetica, sans-serif;
    color: #717171;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    &.theme3 {
      color: #ffffff;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    h1 {
      width: 100%;
      padding: 0 10px;
      text-align: center;
      margin: 0px;
    }
    .speaker {
      margin: 0px 0 10px;
    }
  }
`,oe=i.Ay.div`
  .speaker-card {
    transition: transform 0.3s;
    cursor: pointer;
    min-width: 250px;
    height: 350px;
    position: relative;
    &.theme3 {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      width: 250px;
      height: 300px;
      overflow: hidden;
      border: 1px solid #fff;
      border-radius: 20px;
      background: ${e=>e.event.themeColor};
      border: 1px solid transparent;
    }
    &.theme4 {
      height: 300px;
      margin-top: 10px;
    }
  }
  .speaker-card::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 4));
    z-index: 1;
  }
  .speaker-card.theme2::after {
    background: none;
  }
  .speaker-card.theme4::after {
    background: none;
  }
  .new {
    background-color: ${e=>e.event.themeColor} !important;
    float: right;
    position: absolute;
    &.theme1 {
      height: 75px;
      width: 75px;
      right: -17px;
      top: -15px;
    }
    &.theme2 {
      height: 100%;
      width: 100%;
      right: 0px;
      top: 0px;
      border-top-left-radius: 30%;
      border-top-right-radius: 30%;
      border-bottom-left-radius: 30%;
      border-bottom-right-radius: 30%;
    }
  }
  .speaker-image {
    display: block;
    object-fit: cover;
    filter: grayscale(1);
    position: absolute;
    &.theme1 {
      width: 250px;
      height: 350px;
    }
    &.theme2 {
      width: 230px;
      height: 330px;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -59%);
      border-top-left-radius: 30%;
      border-top-right-radius: 30%;
      border-bottom-left-radius: 30%;
      border-bottom-right-radius: 30%;
    }
    &.theme3 {
      top: 0;
      left: 0;
      width: 100%;
      height: 70%;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
    }
    &.theme4 {
      top: 38%;
      left: 50%;
      transform: translate(-50%, -59%);
      max-width: 94%;
      max-height: 75%;
      border-radius: 50%;
      overflow: hidden;
      outline: 2px dashed ${e=>e.event.themeColor};
      display: block;
      padding: 5px;
    }
  }
  .quote {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    width: 200px;
    color: #fff;
    padding: 0;
    &.theme1 {
    }
    span {
      font-size: 12px;
    }
    p {
      font-size: 16px;
      font-weight: 500;
    }
    &.theme2 {
      bottom: 0px;
      left: 50%;
      width: 80%;
      height: 80px;
      background-color: #222226;
      border-radius: 20px;
      border-top: 8px solid ${e=>e.event.themeColor};
    }
    &.theme4 {
      color: #000;
      height: 70px;
    }
  }
`,se=i.Ay.div`
  text-align: center;
  margin: 0 auto 0;
  padding: 10px;
  gap: 10px;
  display: flex;
  button {
    background: lightgray;
    border-radius: 5px;
    cursor: pointer;
    border: 0;
    height: 5px;
  }
  button.active {
    width: 30px;
    background: ${e=>{var t;return null===(t=e.event)||void 0===t?void 0:t.themeColor}};
  }
`,le=[{name:"Name A",photo:G,designation:"CEO, Company A"},{name:"Name B",photo:G,designation:"CTO, Company B"},{name:"Name C",photo:G,designation:"CTO, Company C"},{name:"Name D",photo:G,designation:"CTO, Company D"},{name:"Name E",photo:G,designation:"CTO, Company E"},{name:"Name F",photo:G,designation:"CTO, Company F"}],ce=e=>{let{id:t,speakers:r=[],event:i,theme:o,config:s}=e;const l=window.matchMedia("(max-width: 800px)").matches,c=l?Math.ceil(le.length/2):Math.ceil(le.length/4),[A,u]=(0,n.useState)(0),f=e=>{u(e);const t=document.getElementById("speakerItem");if(t){const r=l?20:0;t.scrollTo({left:0===e?0:e*window.outerWidth-r,behavior:"smooth"})}};switch(o){case"theme1":default:return(0,d.jsxs)(a.w,{className:o,background:ne(i.themeColor,230),id:t,children:[(0,d.jsx)(a.m,{children:(0,d.jsxs)(ae,{children:[(0,d.jsx)("h1",{children:s.title}),(0,d.jsx)("div",{className:"speaker-text",children:(0,d.jsx)("p",{className:"custom-text-speaker",children:s.description})})]})}),(0,d.jsx)(ie,{id:"speakerItem",deskTopScrolling:s.deskTopScrolling,mobileScrolling:s.mobileScrolling,children:le&&le.map(((e,t)=>(0,d.jsx)(oe,{event:i,id:`speakerItem-${t}`,children:(0,d.jsxs)("div",{className:"speaker-card theme1",children:[(0,d.jsx)("div",{className:"new theme1"}),(0,d.jsx)("img",{src:"https://event-manager.syd1.cdn.digitaloceanspaces.com/"+i.image,alt:e.name,className:"speaker-image theme1"}),(0,d.jsxs)("div",{className:"quote theme1",children:[(0,d.jsx)("p",{children:e.name}),(0,d.jsx)("span",{className:"text",dangerouslySetInnerHTML:{__html:e.designation}})]})]})},t)))}),"Horizontal"===s.deskTopScrolling&&!l&&(0,d.jsx)(a.m,{className:"column",children:(0,d.jsx)(se,{event:i,children:Array.from({length:c},((e,t)=>(0,d.jsx)("button",{className:A===t?"active":"",onClick:()=>f(t)},t)))})}),"Horizontal"===s.mobileScrolling&&l&&(0,d.jsx)(a.m,{className:"column",children:(0,d.jsx)(se,{event:i,children:Array.from({length:c},((e,t)=>(0,d.jsx)("button",{className:A===t?"active":"",onClick:()=>f(t)},t)))})})]});case"theme2":return(0,d.jsxs)(a.w,{className:o,background:ne(i.themeColor,230),id:t,children:[(0,d.jsx)(a.m,{children:(0,d.jsxs)(ae,{children:[(0,d.jsx)("h1",{children:s.title}),(0,d.jsx)("div",{className:"speaker-text",children:(0,d.jsx)("p",{className:"custom-text-speaker",children:s.description})})]})}),(0,d.jsx)(ie,{id:"speakerItem",deskTopScrolling:s.deskTopScrolling,mobileScrolling:s.mobileScrolling,children:le&&le.map(((e,t)=>(0,d.jsx)(oe,{event:i,id:`speakerItem-${t}`,children:(0,d.jsxs)("div",{className:"speaker-card theme2",children:[(0,d.jsx)("div",{className:"new theme2"}),(0,d.jsx)("img",{src:e.photo,alt:e.name,className:"speaker-image theme2"}),(0,d.jsxs)("div",{className:"quote theme2",children:[(0,d.jsx)("p",{children:e.name}),(0,d.jsx)("span",{className:"text",dangerouslySetInnerHTML:{__html:e.designation}})]})]})},t)))}),"Horizontal"===s.deskTopScrolling&&!l&&(0,d.jsx)(a.m,{className:"column",children:(0,d.jsx)(se,{event:i,children:Array.from({length:c},((e,t)=>(0,d.jsx)("button",{className:A===t?"active":"",onClick:()=>f(t)},t)))})}),"Horizontal"===s.mobileScrolling&&l&&(0,d.jsx)(a.m,{className:"column",children:(0,d.jsx)(se,{event:i,children:Array.from({length:c},((e,t)=>(0,d.jsx)("button",{className:A===t?"active":"",onClick:()=>f(t)},t)))})})]});case"theme3":return(0,d.jsxs)(a.w,{className:o,background:ne(i.themeColor,230),id:t,style:{backgroundColor:"black"},children:[(0,d.jsx)(a.m,{children:(0,d.jsxs)(ae,{children:[(0,d.jsx)("h1",{style:{color:i.themeColor},children:s.title}),(0,d.jsx)("div",{className:"speaker-text",children:(0,d.jsx)("p",{className:"custom-text-speaker theme3",children:s.description})})]})}),(0,d.jsx)(ie,{id:"speakerItem",deskTopScrolling:s.deskTopScrolling,mobileScrolling:s.mobileScrolling,children:le&&le.map(((e,t)=>(0,d.jsx)(oe,{event:i,id:`speakerItem-${t}`,children:(0,d.jsxs)("div",{className:"speaker-card theme3",children:[(0,d.jsx)("img",{src:e.photo,alt:e.name,className:"speaker-image theme3"}),(0,d.jsxs)("div",{className:"quote",children:[(0,d.jsx)("p",{children:e.name}),(0,d.jsx)("span",{className:"text",dangerouslySetInnerHTML:{__html:e.designation}})]})]})},t)))}),"Horizontal"===s.deskTopScrolling&&!l&&(0,d.jsx)(a.m,{className:"column",children:(0,d.jsx)(se,{event:i,children:Array.from({length:c},((e,t)=>(0,d.jsx)("button",{className:A===t?"active":"",onClick:()=>f(t)},t)))})}),"Horizontal"===s.mobileScrolling&&l&&(0,d.jsx)(a.m,{className:"column",children:(0,d.jsx)(se,{event:i,children:Array.from({length:c},((e,t)=>(0,d.jsx)("button",{className:A===t?"active":"",onClick:()=>f(t)},t)))})})]});case"theme4":return(0,d.jsxs)(a.w,{className:o,id:t,children:[(0,d.jsx)(a.m,{children:(0,d.jsxs)(ae,{className:o,children:[(0,d.jsx)("h1",{children:s.title}),(0,d.jsx)("div",{className:"speaker-text",children:(0,d.jsx)("p",{className:"custom-text-speaker",children:s.description})})]})}),(0,d.jsx)(ie,{id:"speakerItem",deskTopScrolling:s.deskTopScrolling,mobileScrolling:s.mobileScrolling,children:le&&le.map(((e,t)=>(0,d.jsx)(oe,{event:i,id:`speakerItem-${t}`,children:(0,d.jsxs)("div",{className:"speaker-card theme4",children:[(0,d.jsx)("img",{src:e.photo,alt:e.name,className:"speaker-image theme4"}),(0,d.jsxs)("div",{className:"quote theme4",children:[(0,d.jsx)("p",{children:e.name}),(0,d.jsx)("span",{className:"text",dangerouslySetInnerHTML:{__html:e.designation}})]})]})},t)))}),"Horizontal"===s.deskTopScrolling&&!l&&(0,d.jsx)(a.m,{className:"column",children:(0,d.jsx)(se,{event:i,children:Array.from({length:c},((e,t)=>(0,d.jsx)("button",{className:A===t?"active":"",onClick:()=>f(t)},t)))})}),"Horizontal"===s.mobileScrolling&&l&&(0,d.jsx)(a.m,{className:"column",children:(0,d.jsx)(se,{event:i,children:Array.from({length:c},((e,t)=>(0,d.jsx)("button",{className:A===t?"active":"",onClick:()=>f(t)},t)))})})]})}},Ae=i.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    font-weight:400;
  }
`,ue=i.Ay.div`
  display: flex;
  overflow: hidden;
  align-items: center;
  gap: 40px;
  width: 100%;
  &.theme4 {
    padding-top:60px;
  }
  flex-wrap: ${e=>"Vertical"===e.deskTopScrolling?"wrap":"nowrap"};
  align-items: ${e=>"Vertical"===e.deskTopScrolling?"center":"flex-start"};
  justify-content: ${e=>"Vertical"===e.deskTopScrolling?"center":"flex-start"};
  @media (max-width: 768px) {
    flex-wrap: ${e=>"Vertical"===e.mobileScrolling?"wrap":"nowrap"};
    align-items: ${e=>"Vertical"===e.mobileScrolling?"center":"flex-start"};
    justify-content: ${e=>"Vertical"===e.mobileScrolling?"center":"flex-start"};
  //  display: ${e=>"Vertical"===e.direction?"grid":"flex"};
  //   grid-template-columns: repeat(
  //     ${e=>"Vertical"===e.direction?"2":"1"},
  //     1fr
  //   );
  //    gap: ${e=>(e.direction,"40px")};
   padding-left: ${e=>"Vertical"===e.direction?"300px":"20px"};
   &.theme4 {
    padding-left: ${e=>"Vertical"===e.mobileScrolling?"0":"20px"};
   }
  }
`,de=i.Ay.div`
  .test-card {
    display: flex;
    border: 1px solid #ccc;
    width: 300px;
    border-bottom-right-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
    overflow: hidden;
    margin-bottom: 20px;
    &.theme2 {
      box-shadow: 0 4px 8px rgba(177, 176, 176, 0.4);
      height: auto;
      width: 200px;
      flex-direction: column;
      text-align: left;
      position: relative;
      border-bottom-right-radius: 0;
    }
    &.theme2::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 25%;
      height: 100%;
      border-top: 4px solid ${e=>e.event.themeColor};
    }
    &.theme3 {
      border-radius: 12px;
      height: 280px;
      width: 230px;
      flex-direction: column;
      justify-content: space-between;
      text-align: left;
      position: relative;
      background: linear-gradient(
            to right,
            ${e=>e.event.themeColor},
            ${e=>e.event.secondaryColor}
          )
          padding-box,
        linear-gradient(to right, #453f91, #5f5e5e) border-box;
      border: 1px solid transparent;
    }
    &.theme4 {
      border-radius:10px;
      height: 230px;
      width: 320px;
      flex-direction: column;
      justify-content: space-between;
      text-align: left;
      position: relative;
      background:#fff;
      overflow: visible;
      box-shadow: 0 4px 8px rgba(177, 176, 176, 0.4);
      padding:10px;
    }
    &.theme4::after {
      content: "";
      position: absolute;
      bottom: 0;
      right: 0;
      width: 0;
      height: 0;
      border-left: 40px solid transparent;
      border-bottom: 40px solid ${e=>e.event.themeColor};
      border-radius: 4px;
    }
  }
  .theme4-img {
    max-width: 30%;
    height: auto;
    position: absolute;
    top: -25%;
    left: 50%;
    transform: translate(-50%);
    z-index: 1;
    border-radius: 50%;
    padding: 4px;
  }
  .testimonial-image {
    display: flex;
    flex: 1;
    position: relative;
    overflow: hidden;
  }
  .testimonial-image img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  .testimonial-image::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 2));
    z-index: 1;
  }
  .testimonial-content {
    flex: 2;
    padding: 20px;
    text-align: left;
  }
  .testimonial-content .designation {
    color: #666;
    font-size: 12px;
  }
  .testimonial-content .name {
    font-weight: bold;
    margin-top: 20px;
    text-transform: capitalize;
    font-size: 14px;
  }
  .testimonial-text {
    font-family: Arial, Helvetica, sans-serif;
    color: #555555;
    font-weight: 300;
    font-size: 14px;
    &.theme3 {
      color: #fff;
      font-size: 12px;
    }
  }
  .quote {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
  }
  .name-chip {
    display: flex;
    align-items: center;
    &.theme2 {
      width: 100%;
      height: 65px;
      background-color: ${e=>e.event.themeColor};
      flex-direction: row;
      font-size: 12px;
      color: #fff;
    }
    &.theme3 {
      width: 100%;
      height: 65px;
      background-color: #fff;
      border-radius: 10px;
      color: #000000;
      flex-direction: row;
      font-size: 12px;
    }
    &.theme4 {
      flex-direction: column;
      justify-content: center;
      margin-top: 50px;
      margin-bottom: 20px;
      font-size: 14px;
    }
  }
  .name-chip img {
    width: 55px;
    height: auto;
    border-radius: 50%;
    padding: 10px;
  }
  .column {
    display: flex;
    flex-direction: column;
  }
  .tests {
    color: #fff;
    padding: 10px;
  }
  .name-head {
    font-weight: bold;
    text-transform: capitalize;
    font-size: 14px;
  }
  .test-padding {
    padding: 10px;
  }
`,fe=i.Ay.div`
  text-align: center;
  margin: 0 auto 0;
  padding: 10px;
  gap: 10px;
  display: flex;
  button {
    background: lightgray;
    border-radius: 5px;
    cursor: pointer;
    border: 0;
    height: 5px;
  }
  button.active {
    width: 30px;
    background: ${e=>{var t;return null===(t=e.event)||void 0===t?void 0:t.themeColor}};
  }
`,he=[{name:"Name A",photo:G,designation:"CEO, Company A"},{name:"Name B",photo:G,designation:"CTO, Company B"},{name:"Name C",photo:G,designation:"CTO, Company C"},{name:"Name D",photo:G,designation:"CTO, Company D"},{name:"Name E",photo:G,designation:"CTO, Company E"},{name:"Name F",photo:G,designation:"CTO, Company F"}],pe=e=>{let{id:t,theme:r,event:i,config:o}=e;const s=window.matchMedia("(max-width: 800px)").matches,l=s?Math.ceil(he.length/1):Math.ceil(he.length/4),[c,A]=(0,n.useState)(0),u=e=>{A(e);const t=document.getElementById("testimonialItem");if(t){const r=s?20:0;t.scrollTo({left:0===e?0:e*window.outerWidth-r,behavior:"smooth"})}};switch(r){case"theme1":default:return(0,d.jsxs)(a.w,{id:t,className:"padding-sides",children:[(0,d.jsxs)(Ae,{children:[(0,d.jsx)("h2",{children:o.title}),(0,d.jsx)(ue,{id:"testimonialItem",deskTopScrolling:o.deskTopScrolling,mobileScrolling:o.mobileScrolling,children:he&&he.map(((e,t)=>(0,d.jsx)(de,{id:`testimonialItem-${t}`,event:i,children:(0,d.jsxs)("div",{className:"test-card",children:[(0,d.jsxs)("div",{class:"testimonial-image",children:[(0,d.jsx)("img",{src:e.photo,alt:e.name}),(0,d.jsx)("div",{class:"quote"})]}),(0,d.jsxs)("div",{class:"testimonial-content",children:[(0,d.jsx)("div",{class:"testimonial-text",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."}),(0,d.jsx)("div",{class:"name",children:e.name}),(0,d.jsx)("div",{class:"designation",children:e.designation})]})]})},t)))})]}),"Horizontal"===o.deskTopScrolling&&!s&&(0,d.jsx)(a.m,{className:"column",children:(0,d.jsx)(fe,{event:i,children:Array.from({length:l},((e,t)=>(0,d.jsx)("button",{className:c===t?"active":"",onClick:()=>u(t)},t)))})}),"Horizontal"===o.mobileScrolling&&s&&(0,d.jsx)(a.m,{className:"column",children:(0,d.jsx)(fe,{event:i,children:Array.from({length:l},((e,t)=>(0,d.jsx)("button",{className:c===t?"active":"",onClick:()=>u(t)},t)))})})]});case"theme2":return(0,d.jsxs)(a.w,{id:t,className:"padding-sides",children:[(0,d.jsxs)(Ae,{children:[(0,d.jsx)("h2",{children:o.title}),(0,d.jsx)(ue,{id:"testimonialItem",deskTopScrolling:o.deskTopScrolling,mobileScrolling:o.mobileScrolling,children:he&&he.map(((e,t)=>(0,d.jsx)(de,{id:`testimonialItem-${t}`,event:i,children:(0,d.jsxs)("div",{className:"test-card theme2",children:[(0,d.jsxs)("div",{className:"test-padding",children:[(0,d.jsx)("h4",{children:'"Lovely Healthier Alternative"'}),(0,d.jsx)("p",{class:"testimonial-text",children:"Choosing a healthier alternative is not only a mindful decision but also a loving gesture towards oneself. Embracing healthier alternatives means nourishing our bodies with choices that promote vitality and well-being."})]}),(0,d.jsxs)("div",{class:"name-chip theme2",children:[(0,d.jsx)("img",{src:e.photo,alt:e.name}),(0,d.jsxs)("div",{class:"column",children:[(0,d.jsx)("span",{class:"name-head",children:e.name}),(0,d.jsx)("span",{children:e.designation})]})]})]})},t)))})]}),"Horizontal"===o.deskTopScrolling&&!s&&(0,d.jsx)(a.m,{className:"column",children:(0,d.jsx)(fe,{event:i,children:Array.from({length:l},((e,t)=>(0,d.jsx)("button",{className:c===t?"active":"",onClick:()=>u(t)},t)))})}),"Horizontal"===o.mobileScrolling&&s&&(0,d.jsx)(a.m,{className:"column",children:(0,d.jsx)(fe,{event:i,children:Array.from({length:l},((e,t)=>(0,d.jsx)("button",{className:c===t?"active":"",onClick:()=>u(t)},t)))})})]});case"theme3":return(0,d.jsxs)(a.w,{id:t,className:"padding-sides",style:{backgroundColor:"black"},children:[(0,d.jsxs)(Ae,{children:[(0,d.jsx)("h2",{style:{color:"#fff"},children:o.title}),(0,d.jsx)(ue,{id:"testimonialItem",deskTopScrolling:o.deskTopScrolling,mobileScrolling:o.mobileScrolling,children:he&&he.map(((e,t)=>(0,d.jsx)(de,{id:`testimonialItem-${t}`,event:i,children:(0,d.jsxs)("div",{class:"test-card theme3",children:[(0,d.jsxs)("div",{class:"tests",children:[(0,d.jsx)("h4",{children:'"Lovely Healthier Alternative"'}),(0,d.jsx)("p",{class:"testimonial-text theme3",children:"Choosing a healthier alternative is not only a mindful decision but also a loving gesture towards oneself. Embracing healthier alternatives means nourishing our bodies with choices that promote vitality and well-being."})]}),(0,d.jsxs)("div",{class:"name-chip theme3",children:[(0,d.jsx)("img",{src:e.photo,alt:e.name}),(0,d.jsxs)("div",{class:"column",children:[(0,d.jsx)("span",{class:"name-head",children:e.name}),(0,d.jsx)("span",{children:e.designation})]})]})]})},t)))})]}),"Horizontal"===o.deskTopScrolling&&!s&&(0,d.jsx)(a.m,{className:"column",children:(0,d.jsx)(fe,{event:i,children:Array.from({length:l},((e,t)=>(0,d.jsx)("button",{className:c===t?"active":"",onClick:()=>u(t)},t)))})}),"Horizontal"===o.mobileScrolling&&s&&(0,d.jsx)(a.m,{className:"column",children:(0,d.jsx)(fe,{event:i,children:Array.from({length:l},((e,t)=>(0,d.jsx)("button",{className:c===t?"active":"",onClick:()=>u(t)},t)))})})]});case"theme4":return(0,d.jsxs)(a.w,{id:t,className:"padding-sides",children:[(0,d.jsxs)(Ae,{children:[(0,d.jsx)("h2",{children:o.title}),(0,d.jsx)(ue,{id:"testimonialItem",deskTopScrolling:o.deskTopScrolling,mobileScrolling:o.mobileScrolling,className:r,children:he&&he.map(((e,t)=>(0,d.jsx)(de,{id:`testimonialItem-${t}`,event:i,children:(0,d.jsxs)("div",{class:"test-card theme4",children:[(0,d.jsxs)("div",{class:"name-chip theme4",children:[(0,d.jsx)("span",{class:"name-head",children:e.name}),(0,d.jsx)("span",{children:e.designation})]}),(0,d.jsx)("p",{class:"testimonial-text",children:"Choosing a healthier alternative is not only a mindful decision but also a loving gesture towards oneself. Embracing healthier alternatives means nourishing our bodies with choices that promote vitality and well-being."}),(0,d.jsx)("img",{src:e.photo,alt:e.name,className:"theme4-img"})]})},t)))})]}),"Horizontal"===o.deskTopScrolling&&!s&&(0,d.jsx)(a.m,{className:"column",children:(0,d.jsx)(fe,{event:i,children:Array.from({length:l},((e,t)=>(0,d.jsx)("button",{className:c===t?"active":"",onClick:()=>u(t)},t)))})}),"Horizontal"===o.mobileScrolling&&s&&(0,d.jsx)(a.m,{className:"column",children:(0,d.jsx)(fe,{event:i,children:Array.from({length:l},((e,t)=>(0,d.jsx)("button",{className:c===t?"active":"",onClick:()=>u(t)},t)))})})]})}};var ge=r(30809);const me=i.Ay.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: left;
  gap: 30px;
  overflow: auto;
  align-items: stretch;
  padding-left: calc((100% - 1200px) / 2);
  &.Vertical {
    flex-wrap: wrap;
    justify-content: center;
    padding-left: inherit;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
  }
  @media (max-width: 768px) {
    align-items: stretch;
    padding-left: 20px;
    padding-right: 20px;
    &.Vertical {
      padding: 0;
    }
  }
`,ve=i.Ay.div`
  flex: 0 0 calc(23% - 30px);
  max-width: calc(23% - 30px);
  min-width: calc(23% - 30px);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 12.63157844543457px 25.26315689086914px 0px #0000001a;
  padding: 40px 20px;
  border-radius: 12px;
  margin: 30px 0;
  &*{
    align-items: initial;
  }
  &:first-child {
    margin-left: 10px;
  }
  &:last-child {
    margin-right: 10px;
  }

  img {
    max-width: 100%;
    width: 70px;
    height: 70px;
    object-fit: cover;
  }

  h2 {
    margin-top: 20px;
    margin-bottom: 0px;
    font-size: 20px;
    font-weight: bold;
    color: ${e=>{var t;return null===(t=e.event)||void 0===t?void 0:t.themeColor}};
  }

  p {
    font-size: 12px;
    font-weight: thin;
    margin-top: 10px;
    color: grey;
  }
  @media (max-width: 768px) {
    flex: 0 0 45%;
    min-width: 45%;
    max-width: 45%;
    margin: 10px 0;
    padding: 40px 20px;
    &.vertical {
      flex: 0 0 calc(100% - 30px);
      max-width: calc(100% - 30px);
      min-width: calc(100% - 30px);
    }
    img {
      max-width: 100%;
      width: 70px;
      height: 70px;
      object-fit: cover;
    }
  }
`,ye=i.Ay.h1`
  text-align: center;
  margin: 20px auto 30px;
  padding: 10px;
  font-size: 35px;
  font-weight: 500;
  line-height: 48px;
  text-align: left;

  @media (max-width: 768px) {
    margin: 20px auto 30px;
    max-width: 70%;
    font-size: 25px;
    text-align: center;
    line-height: normal;
    margin-top: 0px;
    margin-bottom: 0px;
  }
`,be=i.Ay.div`
  text-align: center;
  margin: 20px auto 10px;
  padding: 10px;
  gap: 10px;
  display: flex;
  button {
    background: lightgray;
    border-radius: 5px;
    cursor: pointer;
    border: 0;
    height: 5px;
  }
  button.active {
    width: 30px;
    background: ${e=>{var t;return null===(t=e.event)||void 0===t?void 0:t.themeColor}};
  }
`,we=i.Ay.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  width: 90%;
  align-items: baseline;
  margin: auto;
  gap: 30px;
  margin-bottom: 30px;
  &.theme2 {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      padding: 0;
      margin: 0;
    }
    p {
      margin: 0;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`,xe=i.Ay.p`
  font-size: 17px;
  line-height: 26px;
  max-width: 90%;
  line-height: 30px;
  font-size: 18px;
  font-weight: lighter;
  @media (max-width: 768px) {
    font-size: 17px;
    text-align: center;
    margin: auto;
  }
`,Ce=e=>{let{id:t,items:r=[],sectionTheme:i,event:o,theme:s,title:l,description:c,deskTopScrolling:A="vertical",mobileScrolling:u="vertical",config:f}=e;const h=window.matchMedia("(max-width: 600px)").matches,p=h?Math.ceil(r.length/2):Math.ceil(r.length/4),[g,m]=(0,n.useState)(0);return(0,d.jsxs)(a.w,{id:t,className:"padding",children:[(0,d.jsx)(a.m,{className:"column",children:(0,d.jsxs)(we,{className:`mobile-column ${i}`,children:[(0,d.jsx)(ye,{children:f.title}),(0,d.jsx)(xe,{dangerouslySetInnerHTML:{__html:f.description}})]})}),(0,d.jsx)(me,{id:"countItem",className:`${i} ${h?f.mobileScrolling:f.deskTopScrolling}`,children:r.map(((e,t)=>(0,d.jsxs)(ve,{id:`countItem-${t}`,className:`${i} ${A}`,event:o,children:[(0,d.jsx)("img",{src:"https://event-manager.syd1.cdn.digitaloceanspaces.com/"+e.icon,alt:e.title}),(0,d.jsx)("h2",{children:e.title}),"theme1"===f.sectionTheme&&(0,d.jsx)("p",{children:e.description})]},t)))}),(0,d.jsx)(a.m,{className:`column ${A}`,children:(0,d.jsx)(be,{event:o,children:Array.from({length:p},((e,t)=>(0,d.jsx)("button",{className:g===t?"active":"",onClick:()=>(e=>{m(e);const t=document.getElementById("countItem");if(t){const r=h?20:0;t.scrollTo({left:0===e?0:e*window.outerWidth-r,behavior:"smooth"})}})(t)},t)))})})]})};var Be=r(36824);const Ee=i.Ay.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 30px;
  @media (max-width: 768px) {
    align-items: baseline;
    padding: 10px;
  }
`,ke=i.Ay.div`
  flex: 0 0 33%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 60px;

  @media (max-width: 768px) {
    flex: 0 0 50%;
    max-width:50%;
     min-width:50%;
    padding: 10px 30px;
    &.full {
      padding:20px;
      h1 {
        margin: 10px;
      }
    }
  }

  img {
    max-width: 100%;
    width: 100px;
    height: 100px;
    object-fit: cover;
  }

  h2 {
    margin-top: 20px;
    margin-bottom: 0px;
    font-size: 20px;
    font-weight: bold;
  }

  p {
    font-size: 12px;
    font-weight: thin;
    margin-top: 10px;
    color: grey;
  }
`,Ie=i.Ay.h1`
  text-align: center;
  margin: 20px auto 70px;
  padding: 10px;
`,Se=e=>{let{id:t,items:r=[],event:n,theme:i,title:o,description:s,config:l}=e;return(0,d.jsx)(a.w,{background:ne(n.themeColor,230),id:t,className:"padding",children:(0,d.jsx)(a.m,{className:"column",children:(0,d.jsxs)(Ee,{className:i,children:[(0,d.jsx)(ke,{className:"full",children:(0,d.jsx)(Ie,{children:l.title})}),r.map(((e,t)=>(0,d.jsxs)(ke,{className:i,event:n,children:[(0,d.jsx)("img",{src:"https://event-manager.syd1.cdn.digitaloceanspaces.com/"+e.icon,alt:e.title}),(0,d.jsx)("h2",{children:e.title}),(0,d.jsx)("p",{children:e.description})]},t)))]})})})},De=i.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    width: 100%;
    padding: 30px;
  }
`,Qe=i.Ay.h2`
  font-size: 35px;
  color: white;
  padding: 0px;
`,_e=i.Ay.span`
  font-size: 14px;
  color: white;
  padding: 0px;
  font-weight:200;
`,Te=i.Ay.div`
  width: 100%;
  margin-top:20px;
`,Fe=i.Ay.div`
  color: white;
  margin-bottom: 20px;
`,Oe=i.Ay.div`
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
`,Me=i.Ay.span`
  font-size: 18px;
  margin-right: 10px;
  color:grey;
`,Ne=i.Ay.hr`
  border: none;
  border-top: 1px solid #666;
  margin-top: 5px;
`,je=i.Ay.span`
  font-size: 20px;
  transition: transform 0.3s;
  transform: ${e=>e.isOpen?"rotate(180deg)":"rotate(0deg)"};
`,Le=i.Ay.div`
  padding: 10px;
  display: ${e=>e.isOpen?"block":"none"};
  font-size:12px;
  font-weight:200;
`,Ue=e=>{let{items:t}=e;const[r,i]=(0,n.useState)(null);return(0,d.jsx)(Te,{children:t.map(((e,n)=>(0,d.jsxs)(Fe,{children:[(0,d.jsxs)(Oe,{onClick:()=>(e=>{i(r===e?null:e)})(n),children:[(0,d.jsxs)("div",{children:[(0,d.jsx)(Me,{children:(n+1).toString().padStart(2,"0")}),(0,d.jsx)("span",{children:e.question})]}),(0,d.jsx)(je,{isOpen:r===n})]}),(0,d.jsx)(Le,{isOpen:r===n,children:e.answer}),n!==t.length-1&&(0,d.jsx)(Ne,{})]},n)))})},Re=e=>{let{event:t,theme:r,id:n,config:i}=e;const o=[{question:"What is Lorem Ipsum?",answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},{question:"Why do we use it?",answer:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."},{question:"Where does it come from?",answer:"Contrary to popular belief, Lorem Ipsum is not simply random text."}];return(0,d.jsx)(a.w,{className:"padding-both",style:{backgroundColor:"black"},id:n,children:(0,d.jsx)(a.m,{className:"column",children:(0,d.jsxs)(De,{children:[(0,d.jsx)(Qe,{children:i.title}),(0,d.jsx)(_e,{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"}),(0,d.jsx)(Ue,{items:o})]})})})};var Pe=r(1043),He=r.n(Pe);const ze=i.Ay.h1`
  display:flex;
  justify-content:center;
  align-items:center;
  font-weight: 600;
`,Ve=i.Ay.div`
display:flex;
align-items:center;
justify-content:center;
height:300px;
width:500px;
box-shadow: -10px 10px 20px rgba(0, 0, 0, 0.4);
margin-top:30px;
margin-bottom:30px;
@media (max-width: 768px) {
  width:100%;
}
`,Ge=e=>{let{id:t,event:r,theme:n,config:i}=e;return(0,d.jsxs)(a.w,{id:t,className:"padding-both",style:{alignItems:"center"},children:[(0,d.jsx)(ze,{children:i.title}),(0,d.jsx)(Ve,{children:(0,d.jsx)(He(),{url:"https://www.youtube.com/watch?v=B0WdX8MijGg",controls:!0,width:"100%",height:"100%"})})]})},Ye=n.memo((e=>{let{fontName:t}=e;return(0,n.useEffect)((()=>{const e=`https://fonts.googleapis.com/css2?family=${t}:wght@100..800&display=swap`,r=document.createElement("link");r.rel="stylesheet",r.href=e,document.head.appendChild(r);const n=`  \n      * {  \n        font-family: "${t}", sans-serif;  \n        box-sizing: border-box;  \n      }  \n    `,i=document.createElement("style");return i.appendChild(document.createTextNode(n)),document.head.appendChild(i),()=>{document.head.removeChild(r),document.head.removeChild(i)}}),[t]),null})),We=i.Ay.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start; /* Start from left */
  gap: 0px; /* Adjust as needed */
  @media (max-width: 768px) {
    flex-wrap: nowrap;
    width: 100%;
    overflow: auto;
  }
  @media (max-width: 768px) {
    gap: 10px;
    div {
      min-width: 50%;
      padding: 20px;
      font-size: 30px;
      line-height: normal;
    }
    img {
      min-width: 70%;
    }
  }
`,Ke=i.Ay.div`
  width: 33.33%;
  font-size: 35px;
  font-weight: normal;
  padding: 20px 40px 0 0;
  font-size: 40px;
  font-weight: 500;
  line-height: 48px;
  span {
    color: ${e=>{var t;return null===(t=e.event)||void 0===t?void 0:t.themeColor}};
  }
`,qe=i.Ay.img`
  flex: 0 0 calc(33.33%); /* Three images in a row, adjust gap */
  max-width: calc(33.33%); /* Ensure images don't exceed one-third of container width */
  height: auto; /* Maintain aspect ratio */
  margin-bottom: 0px; /* Adjust as needed */
  height: 250px;
  object-fit: cover;
`,Ze=e=>{let{id:t,items:r=[],event:n,sectionTheme:i,theme:o="theme1",config:s}=e;switch(o){case"theme1":default:return(0,d.jsx)(a.w,{className:i+" padding",background:ne(n.themeColor,230),id:t,children:(0,d.jsx)(a.m,{className:"column",children:(0,d.jsxs)(We,{id:"speakerItem",deskTopScrolling:s.deskTopScrolling,mobileScrolling:s.mobileScrolling,children:[(0,d.jsx)(Ke,{event:n,dangerouslySetInnerHTML:{__html:s.title}}),r&&r.map(((e,t)=>(0,d.jsx)(qe,{event:n,id:`speakerItem-${t}`,src:"https://event-manager.syd1.cdn.digitaloceanspaces.com/"+e.image,alt:e.name,className:"speaker-image theme1"},t)))]})})});case"theme2":return(0,d.jsx)(a.w,{})}};var Je=r(86178),Xe=r.n(Je),$e=r(73216),et=r(91838);const tt=r.p+"static/media/events-background.9ba0d1c3eee08cf249d0.png",rt=i.Ay.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  width: 70%;
  align-items: baseline;
  margin: auto;
  gap: 30px;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 90%;
    text-align: center;
    margin: auto;
    padding: 0;
    justify-content: center;
    align-items: center;
    h2 {
      color: white;
      padding: 0px;
      width: 250px;
      font-size: 38px;
      font-weight: 500;
      line-height: 38px;
      margin: 0;
      margin-top: 40px;
    }
    p {
      width: 100%;
      margin: 0;
      margin-bottom: 20px;
      font-size: 15px;
      line-height: 22px;
    }
  }
`,nt=i.Ay.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  .item {
    display: flex;
    margin-bottom: 20px;
    width: 100%;
    background-color: white;
    > div:first-child {
      width: 150px;
      background: #1a7266;
      color: white;
      padding: 10px;
      line-height: 27.43px;
      margin-left: 20px;
      text-align: center;
      align-items: center;
      display: flex;
      justify-content: center;
      display: flex;
      flex-direction: column;
    }
    > div:nth-child(2) {
      width: 60%;
      padding: 20px;
      div:first-child {
        font-size: 25px;
        font-weight: 500;
        line-height: 48px;
        text-align: left;
        color: ${e=>e.event.themeColor};
      }
      button {
        display: none;
      }
    }
    > div:nth-child(3) {
      width: calc(40% - 150px);
      text-align: center;
      align-items: center;
      display: flex;
      justify-content: right;
      padding: 20px;
    }
  }
  @media (max-width: 768px) {
    .item {
      font-size: inherit;
      width: 90%;
      margin: auto;
      margin-bottom: 10px;
      > div:first-child {
        font-size: 12px;
        margin-left: 0;
      }
      > div:nth-child(2) {
        font-size: 12px;
        width: 100%;
        padding: 10px;
        line-height: 18px;
        div:first-child {
          font-size: 16px;
          line-height: 18px;
        }
        div:last-child {
          margin-top: 10px;
        }
        button {
          display: flex;
          font-size: 12px;
          margin-top: 10px;
        }
      }
      > div:nth-child(3) {
        font-size: inherit;
        display: none;
      }
    }
  }
`,it=i.Ay.h2`
  font-size: 35px;
  color: white;
  padding: 0px;
  &.black {
    color: black;
  }
  width: 250px;
  font-size: 38px;
  font-weight: 500;
  line-height: 38px;
`,at=i.Ay.p`
  font-size: 17px;
  line-height: 26px;
  color: white;
  &.black {
    color: black;
  }
  max-width: 90%;
  line-height: 30px;
  font-size: 18px;
  font-weight: lighter;
`,ot=i.Ay.button`
  background: ${e=>e.event.secondaryColor};
  color: ${e=>e.event.secondaryTextColor};
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 18px;
  margin-top: 10px;
  cursor: pointer;
`,st=i.Ay.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  font-weight: lighter;
  margin-top: 10px;
  margin-bottom: 30px;
  div {
    border: 1px solid lightgray;
    padding: 10px 20px;
    border-radius: 12px;
    color: white;
    &.active {
      background: #e4cd59;
      color: black;
    }
  }
  @media (max-width: 768px) {
    margin-left: 20px;
    white-space: nowrap;
    overflow: auto;
    width: calc(100% - 20px);
  }
`,lt=i.Ay.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: left;
  gap: 30px;
  overflow: auto;
  align-items: stretch;
  padding-left: calc((100% - 1200px) / 2);
  &.Vertical {
    flex-wrap: wrap;
    justify-content: center;
    padding-left: inherit;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
  }
  @media (max-width: 768px) {
    align-items: stretch;
    padding-left: 20px;
    padding-right: 20px;
    &.Vertical {
      padding: 0;
    }
  }
`,ct=i.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,At=i.Ay.div`
  position: relative;
  bottom: 80px;
  display: flex;
  .action {
    background-color: transparent;
    outline: none;
    border: none;
    padding: 15px 20px;
    min-width: 101px;
    cursor: pointer;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    gap: 10px;
    border-radius: 9px;
    margin-top: 0;
    font-size: 25px;
    color: white;
  }
`,ut=i.Ay.div`
  flex: 0 0 calc(23% - 30px);
  max-width: calc(23% - 30px);
  min-width: calc(23% - 30px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 12.63157844543457px 25.26315689086914px 0px #0000001a;
  padding: 40px 20px;
  border-radius: 12px;
  margin: 30px 0;
  justify-content: space-between;
  &:first-child {
    margin-left: 10px;
  }
  &:last-child {
    margin-right: 10px;
  }
  .action {
    background-color: ${e=>{var t;return null===e||void 0===e||null===(t=e.event)||void 0===t?void 0:t.secondaryColor}};
    color: ${e=>{var t;return null===e||void 0===e||null===(t=e.event)||void 0===t?void 0:t.secondaryTextColor}};
    outline: none;
    border: none;
    padding: 15px 20px;
    min-width: 100px;
    cursor: pointer;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    gap: 10px;
    border-radius: 9px;
    margin-top: 10px;
  }
  .action.disabled {
    opacity: 0.5;
    cursor: initial;
  }
  > img {
    max-width: 100%;
    width: 70px;
    height: 70px;
    object-fit: cover;
  }

  > h2 {
    margin-top: 20px;
    margin-bottom: 0px;
    font-size: 20px;
    font-weight: bold;
    color: ${e=>{var t;return null===e||void 0===e||null===(t=e.event)||void 0===t?void 0:t.themeColor}};
  }

  > p {
    font-size: 12px;
    font-weight: thin;
    margin-top: 10px;
    color: grey;
  }
  &.theme3 {
    width: 100%;
    flex: 100%;
    max-width: 100%;
    > img {
      max-width: 100%;
      width: auto;
      height: 70px;
      object-fit: cover;
    }
  }

  @media (max-width: 768px) {
    flex: 0 0 45%;
    min-width: 45%;
    max-width: 45%;
    margin: 10px 0;
    padding: 40px 20px;
    &.vertical {
      flex: 0 0 calc(100% - 30px);
      max-width: calc(100% - 30px);
      min-width: calc(100% - 30px);
    }
    > img {
      max-width: 100%;
      width: 70px;
      height: 70px;
      object-fit: cover;
    }
    &.theme3 {
      width: 100%;
      flex: 100%;
      max-width: 100%;
      > img {
        width: auto;
      }
    }
  }
`,dt=i.Ay.div`
  text-align: center;
  margin: 20px auto 10px;
  padding: 10px;
  gap: 10px;
  display: flex;
  button {
    background: lightgray;
    border-radius: 5px;
    cursor: pointer;
    border: 0;
    height: 5px;
  }
  button.active {
    width: 30px;
    background: ${e=>{var t;return null===(t=e.event)||void 0===t?void 0:t.themeColor}};
  }
`,ft=i.Ay.h1`
  text-align: center;
  margin: 20px auto 30px;
  padding: 10px;
  font-size: 35px;
  font-weight: 500;
  line-height: 48px;
  text-align: left;

  @media (max-width: 768px) {
    margin: 20px auto 30px;
    max-width: 70%;
    font-size: 25px;
    text-align: center;
    line-height: normal;
    margin-top: 0px;
    margin-bottom: 0px;
  }
`,ht=i.Ay.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  width: 90%;
  align-items: baseline;
  margin: auto;
  gap: 30px;
  margin-bottom: 30px;
  &.theme1 {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      padding: 0;
      margin: 0;
    }
    p {
      margin: 0;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`,pt=i.Ay.p`
  font-size: 17px;
  line-height: 26px;
  max-width: 90%;
  line-height: 30px;
  font-size: 18px;
  font-weight: lighter;
  @media (max-width: 768px) {
    font-size: 17px;
    text-align: center;
    margin: auto;
  }
`,gt=i.Ay.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0px; /* Adjust the gap between the tickets */
  padding: 20px;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`,mt=i.Ay.img`
  width: 250px; /* Adjust the width of the ticket image */
  height: auto; /* Maintain the aspect ratio */
  @media (max-width: 768px) {
    width: 100%; /* Adjust width for smaller screens */
  }
`,vt=i.Ay.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0px; // Adjust as needed
  gap: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`,yt=i.Ay.div`
  height: auto; /* Maintain the aspect ratio */
  margin: 10px 20px 30px;
  /* Target all p elements inside the Heading */
  p {
    margin: 0.2rem 0;
    font-weight: normal;
  }

  /* Target the first p element */
  & > p:first-child {
    font-size: 2rem;
  }

  /* Target the second p element */
  & > p:nth-child(2) {
    font-size: 2.5rem;
  }

  @media (max-width: 768px) {
    width: 90%; /* Adjust width for smaller screens */
    margin: 20px;
    & > p:first-child {
      font-size: 1.5rem;
    }

    /* Target the second p element */
    & > p:nth-child(2) {
      font-size: 2rem;
    }
  }
`,bt=e=>{let{event:t,sectionTheme:r,items:i=[],id:o,config:s,deskTopScrolling:l="vertical",mobileScrolling:c="vertical",setLoaderBox:A,user:f}=e;const h="https://event-manager.syd1.cdn.digitaloceanspaces.com/"+s.backgroundImage,[p,g]=(0,n.useState)(null),[m,v]=(0,n.useState)(i),[y,b]=(0,n.useState)({}),w=window.matchMedia("(max-width: 600px)").matches,x=w?Math.ceil(i.length/2):Math.ceil(i.length/4),[C,B]=(0,n.useState)(0),E=e=>{B(e);const t=document.getElementById("countItem");if(t){const r=w?20:0;t.scrollTo({left:0===e?0:e*window.outerWidth-r,behavior:"smooth"})}};(0,n.useEffect)((()=>{if((null===i||void 0===i?void 0:i.length)>0&&0===Object.keys(y).length){const e=(e=>{const t={};return e.forEach((e=>{const r=new Date(e.startDate).toLocaleDateString();t[r]||(t[r]=[]),t[r].push(e)})),t})(i);b(e)}}),[i,y]),(0,n.useEffect)((()=>{g(y[Object.keys(y)[0]])}),[y]);const k=(0,$e.Zp)(),I=()=>{const e=[];for(let r=0;r<i.length;r+=s.numberOfItemToShow){const n=i.slice(r,r+s.numberOfItemToShow),a=(0,d.jsx)(vt,{children:n.map(((e,n)=>(0,d.jsxs)(ct,{style:{position:"relative"},children:[(0,d.jsx)(mt,{src:"https://event-manager.syd1.cdn.digitaloceanspaces.com/"+e.thumbnail,alt:e.title}),(0,d.jsx)(At,{id:`countItem-${r+n}`,children:e.enableRegistration?(0,d.jsx)(et.c,{setLoaderBox:A,item:e,event:t,itemsList:m,userToken:f,setItemsList:e=>{v(e)}}):(0,d.jsxs)("button",{className:"action disabled",children:["Coming Soon",(0,d.jsx)(u.A0,{icon:"time"})]})})]},e._id)))},`row-${r}`);e.push(a)}return e};switch(r){case"theme2":return(0,d.jsxs)(a.w,{id:o,className:"padding",style:{backgroundImage:`linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url(${tt})`,backgroundSize:"cover",backgroundPosition:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",color:"white"},children:[(0,d.jsx)(yt,{dangerouslySetInnerHTML:{__html:s.title}}),(0,d.jsx)(gt,{children:I()}),t&&"Go Global Summit"===(null===t||void 0===t?void 0:t.title)&&(0,d.jsxs)("div",{className:"ul-event-box",children:[(0,d.jsx)("div",{children:"Add-Ons"}),(0,d.jsxs)("ul",{className:"ul-event",children:[(0,d.jsx)("li",{children:"Diamond, Gold, and Silver attendees will get exclusive add-ons like two exclusive email newsletters pre and post-event news to the global database of the World Malayalee Council."}),(0,d.jsx)("li",{children:"Four social media posts and one video post (content to be provided) on the World Malayalee Council's platforms."}),(0,d.jsx)("li",{children:"PR and media"})]})]})]});case"theme4":case"theme3":return(0,d.jsxs)(a.w,{id:o,className:"padding",children:[(0,d.jsx)(a.m,{className:"column",children:(0,d.jsxs)(ht,{className:`mobile-column ${r}`,children:[(0,d.jsx)(ft,{className:"black",children:s.title}),(0,d.jsx)(pt,{className:"black",dangerouslySetInnerHTML:{__html:s.description}})]})}),(0,d.jsx)(lt,{id:"countItem",className:`${r} ${w?s.mobileScrolling:s.deskTopScrolling}`,children:i.length>0&&i.map(((e,n)=>(0,d.jsxs)(ut,{id:`countItem-${n}`,className:`${r} ${l}`,event:t,children:[(0,d.jsx)("img",{src:"https://event-manager.syd1.cdn.digitaloceanspaces.com/"+e.thumbnail,alt:e.title}),(0,d.jsx)("h2",{children:e.title}),(0,d.jsx)("div",{children:e.enableRegistration?(0,d.jsx)(et.c,{setLoaderBox:A,item:e,event:t,itemsList:m,userToken:f,setItemsList:e=>{v(e)}}):(0,d.jsxs)("button",{className:"action disabled",children:["Coming Soon",(0,d.jsx)(u.A0,{icon:"time"})]})})]},n)))}),(0,d.jsx)(a.m,{className:`column ${l}`,children:(0,d.jsx)(dt,{event:t,children:Array.from({length:x},((e,t)=>(0,d.jsx)("button",{className:C===t?"active":"",onClick:()=>E(t)},t)))})})]});default:return(0,d.jsx)(a.w,{className:"padding-large",background:`url(${h}) top center/cover no-repeat;`,id:o,children:(0,d.jsxs)(a.m,{className:"column",children:[(0,d.jsxs)(rt,{className:"mobile-column",children:[(0,d.jsx)(it,{children:s.title}),(0,d.jsx)(at,{dangerouslySetInnerHTML:{__html:s.description}})]}),(0,d.jsx)(st,{event:t,children:Object.keys(y).map(((e,t)=>(0,d.jsx)("div",{onClick:()=>g(y[e]),className:p===y[e]?"active":"",children:`Day ${t+1}`},`tab-${t}`)))}),(0,d.jsx)(nt,{event:t,children:null===p||void 0===p?void 0:p.map(((e,r)=>(0,d.jsxs)("div",{className:"item",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{children:`${Xe()(e.startDate).format("h:mmA")}`}),(0,d.jsx)("div",{children:" - to - "})," ",(0,d.jsx)("div",{children:`${Xe()(e.endDate).format("h:mmA")}`})," "]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{children:e.title}),(0,d.jsx)("div",{children:`${Xe()(e.startDate).format("MMM DD ddd, ")} ${e.venue}`}),(0,d.jsx)(ot,{onClick:()=>{var t;return k("events/"+((null===(t=e.slug)||void 0===t?void 0:t.length)>2?e.slug:`${e._id}`))},event:t,children:"Free Register"})]}),(0,d.jsx)("div",{children:(0,d.jsx)(ot,{onClick:()=>{var t;return k("events/"+((null===(t=e.slug)||void 0===t?void 0:t.length)>2?e.slug:`${e._id}`))},event:t,children:"Free Register"})})]},`item-${r}`)))})]})})}};var wt=r(48818);const xt=i.Ay.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  margin: 10px 0 60px;
`,Ct=i.Ay.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 20px;
  width: 100%;
  justify-content: center;
`,Bt=i.Ay.img`
  max-width: 100%;
  max-height: 70px;
  width: auto;
  height: auto;
  object-fit: contain;
  margin-bottom: 10px;
  margin: 0px 10px;
  @media (max-width: 768px) {
  }
`,Et=e=>{let{title:t,sectionTheme:r,event:i,theme:o,items:s=[],config:l,id:c}=e;const A=e=>e.map((e=>({...e,sort:Math.random()}))).sort(((e,t)=>e.sort-t.sort)).map((e=>{let{sort:t,...r}=e;return r})),[u,f]=(0,n.useState)(A([...s])),[h,p]=(0,n.useState)(A([...s]));return(0,n.useEffect)((()=>{s.length>0&&(f(A([...s])),p(A([...s])))}),[s]),"marquee"===r?(0,d.jsxs)(a.w,{id:c,className:"padding",children:[(0,d.jsx)(xt,{children:t}),(null===u||void 0===u?void 0:u.length)>0&&(0,d.jsx)(wt.A,{speed:60,autoFill:!0,pauseOnClick:!0,children:null===u||void 0===u?void 0:u.map(((e,t)=>(0,d.jsx)(Bt,{src:"https://event-manager.syd1.cdn.digitaloceanspaces.com/"+e.logo,alt:e.title},"1"+t)))}),(null===h||void 0===h?void 0:h.length)>0&&(0,d.jsx)(wt.A,{speed:60,style:{marginTop:"30px"},autoFill:!0,pauseOnClick:!0,children:h.map(((e,t)=>(0,d.jsx)(Bt,{src:"https://event-manager.syd1.cdn.digitaloceanspaces.com/"+e.logo,alt:e.title},"2"+t)))})]}):(0,d.jsxs)(a.w,{id:c,className:"padding",children:[(0,d.jsx)(xt,{children:t}),(0,d.jsx)(Ct,{children:s.map(((e,t)=>(0,d.jsx)(Bt,{src:"https://event-manager.syd1.cdn.digitaloceanspaces.com/"+e.logo,alt:e.title},t)))})]})};var kt=r(78244);const It=e=>{let{setLoaderBox:t,event:r,ticket:n}=e;return n&&(0,d.jsx)(kt.A,{setLoaderBox:t,ticket:n,single:!0,registserHandler:e=>{document.body.style.overflow=""},event:r})},St=e=>{var t;let{data:r,config:i,theme:a,desktopScrolling:o,additionalMenus:s=[],setLoaderBox:l}=e;const[c,A]=(0,n.useState)(!1),[u,f]=(0,n.useState)([...i,...!0===r.event.footer?[{sequence:8,title:"",showInMenu:!1,type:"footer",theme:r.event.footerTheme}]:[]]),[h,p]=(0,n.useState)(!1);(0,n.useEffect)((()=>{h||(async()=>{p(!0);const e=await(0,Be.bQ)({event:r.event._id},"event/landing-page");f([...e.data,...!0===r.event.footer?[{sequence:"--",title:"",showInMenu:!1,type:"footer",theme:r.event.footerTheme}]:[]])})()}),[r,h]);const[g,m]=(0,n.useState)(null!==(t=JSON.parse(localStorage.getItem("--token")))&&void 0!==t?t:null);return(0,d.jsxs)("div",{style:{width:"100%"},className:"landing",children:[(0,d.jsx)(Ye,{fontName:"Sora"}),r.event.header&&(0,d.jsx)(V.A,{theme:!0,event:r.event,additionalMenus:s,registserHandler:()=>{A(!0)},setLoaderBox:l,user:g,menuItems:u.filter((e=>e.showInMenu)).map(((e,t)=>({title:e.menuTitle,icon:e.type,onClick:()=>(e=>{const t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth",block:"start"})})(`section-${e.sequence}`)})))}),u.map(((e,t)=>{var n,c,A,u,f;const h=(p=e._id,i.find((e=>e._id===p)));var p;switch(e.type){case"banner":return(0,d.jsx)(F.A,{id:`section-${e.sequence}`,event:r.event,theme:a},t);case"singleform":return(0,d.jsx)(It,{event:r.event,ticket:e.ticket,setLoaderBox:l},t);case"counts":return(0,d.jsx)(H,{counts:e.counts,event:r.event,id:`section-${e.sequence}`,theme:a},t);case"about":return(0,d.jsx)(T,{sectionTheme:null!==(n=e.theme)&&void 0!==n?n:"theme4",image:e.image,event:r.event,title:e.title,description:e.description,id:`section-${e.sequence}`,theme:a,config:h},t);case"events":return(0,d.jsx)(bt,{sectionTheme:null!==(c=e.theme)&&void 0!==c?c:"theme4",items:e.items,image:e.image,event:r.event,title:e.title,description:e.description,id:`section-${e.sequence}`,theme:a,config:h,user:g,setLoaderBox:l},t);case"speakers":return(0,d.jsx)(ce,{config:h,event:r.event,speakers:e.items,id:`section-${e.sequence}`,theme:a},t);case"gallery":return(0,d.jsx)(Ze,{config:h,event:r.event,items:e.items,id:`section-${e.sequence}`,theme:a},t);case"features":return(0,d.jsx)(Ce,{sectionTheme:null!==(A=e.theme)&&void 0!==A?A:"theme4",config:h,event:r.event,title:e.title,description:e.description,items:e.items,id:`section-${e.sequence}`,theme:a},t);case"keyfeatures":return(0,d.jsx)(Se,{config:h,event:r.event,title:e.title,description:e.description,items:e.items,id:`section-${e.sequence}`,theme:a},t);case"countdown":return(0,d.jsx)(L,{event:r.event,config:h,targetDate:e.items,id:`section-${e.sequence}`,theme:a},t);case"newsupdates":return(0,d.jsx)(re,{config:h,event:r.event,id:`section-${e.sequence}`,desktopScrolling:o,theme:a},t);case"testimonial":return(0,d.jsx)(pe,{config:h,event:r.event,id:`section-${e.sequence}`,theme:a},t);case"faq":return(0,d.jsx)(Re,{config:h,event:r.event,id:`section-${e.sequence}`,theme:a,desktopScrolling:o},t);case"video":return(0,d.jsx)(Ge,{config:h,event:r.event,id:`section-${e.sequence}`,theme:a,desktopScrolling:o},t);case"footer":return(0,d.jsx)(z.A,{additionalMenus:s,event:r.event,id:`section-${e.sequence}`,theme:null===r||void 0===r||null===(u=r.event)||void 0===u?void 0:u.footerTheme},t);case"sponsors":return(0,d.jsx)(Et,{sectionTheme:null!==(f=e.theme)&&void 0!==f?f:"marquee",title:e.title,description:e.description,items:e.items,event:r.event,config:h,id:`section-${e.sequence}`,theme:a},t);default:return null}})),c&&(0,d.jsx)(ge.A,{setLoaderBox:l,registserHandler:()=>{var e;A(!1),document.body.style.overflow="",m(null!==(e=JSON.parse(localStorage.getItem("--token")))&&void 0!==e?e:null)},event:r.event})]})}},96816:(e,t,r)=>{"use strict";r.d(t,{A:()=>Q});var n=r(65043),i=r(94574),a=r(8289),o=r(46861),s=r(86158),l=r(73216),c=r(83945),A=r(36824),u=r(75374),d=r(71341),f=r(70579);const h=i.Ay.div`
  position: fixed;
  z-index: 1001;
  top: 0;
  right: 0;
  background: white;
  left: 0;
  bottom: 0;
  overflow: auto;
  background-image: repeating-radial-gradient(circle at 0 0, transparent 0, #e5e5f7 6px), repeating-linear-gradient(#b4b4b455, #b4b4b4);
  &.Horizontal {
    display: flex;
    flex-direction: column-reverse;
    height: 100vh;
    @media (max-width: 768px) {
      height: auto;
      overflow: auto;
    }
  }
`,p=i.Ay.div`
  width: 100%;
  height: 250px;
  background-color: #f5f7fa;
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;
  img {
    align-items: center;
    object-fit: cover;
    object-position: top;
    z-index: 0;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    width: 100%;
  }
  div {
    background: linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0)) center center / cover no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    right: 0;
    bottom: 0;
    width: 100%;
  }
  &.Horizontal {
    width: 50%;
    right: 0px;
    left: auto;
    height: 100vh;
    position: inherit;
    div {
      background: transparent;
    }
    img {
      height: 100%;
      border-radius: 0;
    }
  }
  @media (max-width: 768px) {
    img {
      position: inherit;
    }
    &.Horizontal {
      width: 100%;
    }
  }
`,g=i.Ay.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  margin-top: -50px;
  position: relative;
  z-index: 3;
  &.Horizontal {
    width: 50%;
    margin: auto auto auto 0;
    position: initial;
    /* height: 100vh; */
    overflow: auto;
    display: flex;
    align-self: center;
  }
  @media (max-width: 768px) {
    &.Horizontal {
      width: 100%;
      height: auto;
      overflow: hidden;
    }
  }
`,m=i.Ay.div`
  padding: 0px 20px 0px;
  background: ${e=>{var t;return null===(t=e.event)||void 0===t?void 0:t.themeColor}};
  color: ${e=>{var t;return null===(t=e.event)||void 0===t?void 0:t.themeTextColor}};
  align-items: center;
  display: flex;
  color: white;
  border-radius: 11px 11px 0px 0px;
  height: 50px;
  font-size: 16px;
  gap: 10px;
  align-items: center;
  h2 {
    margin: 0;
    font-size: 18px;
    color: white;
  }
  div {
    cursor: pointer;
    align-items: center;
    display: flex;
    gap: 5px;
  }
  @media screen and (max-width: 768px) {
    height: auto;
    padding: 10px 20px;
    h2 {
      font-size: 15px;
    }
  }
`,v=i.Ay.div`
  width: fit-content;
  max-width: 600px; /* Adjust as needed */
  padding: 0px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: auto;
  border-radius: 12px;
  margin: auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`,y=i.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  width: 40%;
  margin-bottom: 60px;
  margin-top: 60px;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
  margin: auto;
  position: relative;
  padding-bottom: 10px;

  img {
    max-width: 100%;
  }
  &.embed {
    margin: 0px auto;
    padding: 10px 25px 25px;
    width: 400px;
    &.Horizontal {
      max-height: 95vh;
      align-items: flex-start;
      justify-content: flex-start;
      overflow: auto;
    }
  }
  @media screen and (max-width: 1200px) and (min-width: 768px) {
    max-width: 768px;
  }
  @media screen and (max-width: 768px) {
    flex: 1 1 100%;
    width: auto;
    padding: 10px;
    margin: 0px auto;
    &.embed {
      margin: 0px auto;
      padding: 10px 25px 25px;
      width: 100%;
      &.Horizontal {
        /* max-height: inherit;
        min-height: auto !important;
        overflow: auto;
        display: flex;
        justify-content: flex-start; */
        max-height: 90vh;
      }
    }
  }
`,b=i.Ay.div`
  margin: 5px 10px 0px;
  color: rgb(254, 123, 123);
  font-size: 12px;
  width: 100%;
  border-top: 1px solid lightgrey;
  text-align: center;
  padding: 10px;
`,w=i.Ay.div`
  margin: 10px 0 0 0;
  font-size: 16px;
  width: 100%;
  text-align: left;
  padding: 0;
`,x=e=>{let{setLoaderBox:t,event:r,registserHandler:i}=e;const[a,s]=(0,n.useState)(!1),[l,c]=(0,n.useState)(!1),[x,C]=(0,n.useState)(null),[B,E]=(0,n.useState)(0),[k,I]=(0,n.useState)("");(0,n.useEffect)((()=>{(async()=>{const e=r.countries[0],t=[{type:"text",placeholder:"Type Your Name",name:"firstName",validation:"",default:"",label:"Type Your Name",minimum:3,maximum:40,required:!0,add:!0},{type:"select",placeholder:"Emirates",name:"yourPlace",customClass:"full",validation:"",default:"",label:"Emirates",minimum:0,maximum:50,required:!0,apiType:"CSV",selectApi:"Dubai,Sharjah,Abu Dhabi,Ajman,Fujairah,Ras Al khaimah,Umm Al Quwain",add:!0},{type:"mobilenumber",placeholder:"Contact Number",name:"contactNumber",validation:"mobileNumber",info:"This number will be your unique indentification number",default:"",label:"Contact Number",minimum:0,countries:r.countries,required:!0,add:!0},{type:"email",placeholder:"Email ID",name:"emailId",customClass:"full",validation:"email",info:"We will use this Email-ID for further email communication!",default:"",label:"Email ID",minimum:0,maximum:50,required:!!r.collectEmailId,add:!0},{type:"info",content:"Provide your Qticket confirmation code or physical ticket number in the box below.",name:"qTicketNumber",customClass:"full",required:!1,add:!0},{type:"text",placeholder:"Ticket No. / Confirmation Code",name:"qTicketNumber",customClass:"full",validation:"",default:"",label:"Ticket No. / Confirmation Code",minimum:5,maximum:50,required:!0,add:!0},{type:"html",content:(0,f.jsxs)("div",{children:["By submitting this form you are agreeing",(0,f.jsx)("span",{onClick:()=>c(!1),children:"Rules and Regulations."})]}),name:"agrement",customClass:"full",validation:"qt",default:"",label:"Your Qtickets Ticket Confirmation Code",minimum:5,maximum:50,required:!1,add:!0},{type:"hidden",placeholder:"PhoneNumberLength",name:"PhoneNumberLength",validation:"",default:e.PhoneNumberLength,label:"PhoneNumberLength",minimum:1,maximum:40,required:!1,add:!0},{type:"hidden",placeholder:"phoneCode",name:"phoneCode",default:e.phoneCode,validation:"",label:"phoneCode",minimum:1,maximum:40,required:!1,add:!0}];C(t),E((e=>e+1))})()}),[r.loginPage,r.countries,r.collectEmailId]);return(0,f.jsxs)(h,{className:`${r.loginPage}`,event:r,children:[(0,f.jsxs)(p,{className:`${r.loginPage}`,children:[(0,f.jsx)("img",{src:"https://event-manager.syd1.cdn.digitaloceanspaces.com/"+r.regBanner,alt:"frame"}),(0,f.jsx)("div",{})]}),(0,f.jsx)(g,{className:`${r.loginPage}`,children:(0,f.jsxs)(v,{children:[(0,f.jsxs)(m,{event:r,children:[(0,f.jsx)("div",{onClick:()=>i(),children:(0,f.jsx)(o.A0,{icon:"previous"})}),(0,f.jsx)("h2",{children:x?"Back to Home":"Form is Loading.."})]}),a?(0,f.jsx)(y,{className:`${r.loginPage}  embed`,children:(0,f.jsx)(w,{dangerouslySetInnerHTML:{__html:k}})}):x&&(0,f.jsxs)(y,{className:`${r.loginPage}  embed`,children:[!a&&(null===x||void 0===x?void 0:x.length)>0&&(0,f.jsx)(u.A,{useCaptcha:!1,useCheckbox:!1,customClass:"embed",description:"",formValues:{},formMode:"single",formType:"post",header:"Win A Car,<br><bold>Registration</bold>",formInput:x,submitHandler:async e=>{t(!0);const n={event:r._id,franchise:r.franchise._id,...e};await(0,A.LS)(n,"authentication/luckydraw").then((e=>{200===e.status?(s(!0),I(e.data.response.onsuccessfullMessage)):400===e.status&&I(e.customMessage),t(!1)}))},button:"Register Now",isOpenHandler:(e,t)=>{},css:"plain embed",isOpen:!0,plainForm:!0},`type-${B}`),!a&&(null===k||void 0===k?void 0:k.length)>0&&(0,f.jsx)(b,{children:k}),a&&(null===k||void 0===k?void 0:k.length)>0&&(0,f.jsx)(w,{children:k})]})]})}),l&&(0,f.jsx)(d.A,{popupData:(0,f.jsxs)("div",{style:{padding:"15px 25px"},children:[(0,f.jsxs)("div",{class:"section",children:[(0,f.jsx)("div",{class:"section-title",children:"Eligibility"}),(0,f.jsxs)("ul",{children:[(0,f.jsxs)("li",{children:[(0,f.jsx)("strong",{children:"Event Participation:"})," Only individuals who purchase a ticket for COME ON KERALA 2024 are eligible to enter the raffle draw."]}),(0,f.jsxs)("li",{children:[(0,f.jsx)("strong",{children:"Residency Requirement:"})," The raffle is open to residents of India & UAE."]}),(0,f.jsxs)("li",{children:[(0,f.jsx)("strong",{children:"Age Restriction:"})," Participants must be at least 18 years old to enter the raffle draw."]})]})]}),(0,f.jsxs)("div",{class:"section",children:[(0,f.jsx)("div",{class:"section-title",children:"Entry Process"}),(0,f.jsxs)("ul",{children:[(0,f.jsxs)("li",{children:[(0,f.jsx)("strong",{children:"Ticket Purchase:"})," Purchase a ticket for the event."]}),(0,f.jsxs)("li",{children:[(0,f.jsx)("strong",{children:"Entry Form:"})," Enter the QTicket Confirmation Code. If you have the hard copy ticket, kindly enter the ticket number printed on the ticket."]}),(0,f.jsx)("li",{children:"Complete the raffle entry form by entering Name, Email & Contact Number and submit."}),(0,f.jsxs)("li",{children:[(0,f.jsx)("strong",{children:"One Entry per Ticket:"})," Each ticket grants one entry into the raffle draw. Multiple entries per person are allowed if multiple tickets are purchased."]})]})]}),(0,f.jsxs)("div",{class:"section",children:[(0,f.jsx)("div",{class:"section-title",children:"Draw and Prize Details"}),(0,f.jsxs)("ul",{children:[(0,f.jsxs)("li",{children:[(0,f.jsx)("strong",{children:"Prize:"})," The prize for the raffle draw is a car, which will be available to the winner in Kerala, India."]}),(0,f.jsxs)("li",{children:[(0,f.jsx)("strong",{children:"Draw Date:"})," The raffle draw will take place on 9th June 2024 at Sharjah Expo Center, Sharjah, UAE."]}),(0,f.jsxs)("li",{children:[(0,f.jsx)("strong",{children:"Winner Announcement:"})," The winner will be announced at the event."]}),(0,f.jsxs)("li",{children:[(0,f.jsx)("strong",{children:"Presence Requirement:"})," The winner should be physically present during the announcement of the raffle. If the winner is not present at that time, the next winner will be selected by running a new raffle at the same time."]})]})]}),(0,f.jsxs)("div",{class:"section",children:[(0,f.jsx)("div",{class:"section-title",children:"Terms and Conditions"}),(0,f.jsxs)("ul",{children:[(0,f.jsxs)("li",{children:[(0,f.jsx)("strong",{children:"Non-transferable:"})," The raffle entry and the prize are non-transferable and cannot be exchanged for cash or other items."]}),(0,f.jsxs)("li",{children:[(0,f.jsx)("strong",{children:"Documentation:"})," The winner must provide valid identification and proof of ticket purchase to claim the prize."]}),(0,f.jsxs)("li",{children:[(0,f.jsx)("strong",{children:"Tax and Duties:"})," Any taxes, duties, or additional costs associated with receiving the prize in Kerala will be the responsibility of the winner."]}),(0,f.jsxs)("li",{children:[(0,f.jsx)("strong",{children:"Compliance:"})," By entering the raffle, participants agree to comply with these rules and the decisions of the organizers, which are final and binding in all respects."]})]})]}),(0,f.jsxs)("div",{class:"section",children:[(0,f.jsx)("div",{class:"section-title",children:"Disqualification"}),(0,f.jsxs)("ul",{children:[(0,f.jsxs)("li",{children:[(0,f.jsx)("strong",{children:"False Information:"})," Providing false information on the entry form will result in disqualification."]}),(0,f.jsxs)("li",{children:[(0,f.jsx)("strong",{children:"Multiple Entries:"})," Providing multiple entries with the same ticket number will result in automatic disqualification by the system."]}),(0,f.jsxs)("li",{children:[(0,f.jsx)("strong",{children:"Failure to Claim:"})," If the winner does not claim the prize within 10 days of the announcement, a new winner will be selected by an online draw."]})]})]}),(0,f.jsxs)("div",{class:"section",children:[(0,f.jsx)("div",{class:"section-title",children:"General"}),(0,f.jsxs)("ul",{children:[(0,f.jsxs)("li",{children:[(0,f.jsx)("strong",{children:"Organizer Rights:"})," The event organizers reserve the right to amend these rules or cancel the raffle at any time without prior notice."]}),(0,f.jsxs)("li",{children:[(0,f.jsx)("strong",{children:"Publicity:"})," The winner agrees to the use of their name and image for promotional purposes without additional compensation."]})]})]})]}),themeColors:r,closeModal:e=>{c(!1)},itemTitle:{name:"title",type:"text",collection:""},openData:{data:{_id:"",title:"Raffle Draw - Rules and Regulations"}},customClass:"medium iframe"})]})},C=i.Ay.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 0;
  @media (max-width: 768px) {
    padding: 10px 30px;
  }
  @media (max-width: 408px) {
    padding: 10px 10px;
  }
`,B=i.Ay.div`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;

  button {
    display: none;
  }
  img {
    max-width: 150px;
    height: auto;
    margin-right: 10px;
    max-height: 75px;
  }
  &.background img {
    max-width: 200px;
    max-height: 80px;
  }
  @media (max-width: 768px) {
    img {
      width: 75px;
    }
    button {
      width: 50px;
      height: 50px;
      outline: none;
      border: none;
      background-color: #eeeeee;
      font-size: 33px;
      display: flex;
      color: black;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
    }
  }
`,E=i.Ay.div`
  overflow: hidden;
  svg {
    display: none;
  }
  button {
    float: left;
    display: block;
    color: grey;
    text-align: center;
    padding: 14px 20px;
    text-decoration: none;
    font-weight: 400;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: transparent;
    border: 0;

    &.active {
      border-bottom: 2px solid ${e=>e.event.themeColor};
      color: ${e=>e.event.themeColor};
    }
  }
  &.theme-2 button {
    font-size: 18px;
    font-weight: 400;
    line-height: 30.26px;
    text-align: left;
    color: black;
    position: relative;
    &.active {
      border-bottom: 0px solid ${e=>e.event.themeColor};
      /* color: ${e=>e.event.themeColor}; */
    }
    span {
      z-index: 1001;
      position: relative;
    }
  }
  &.theme-2 button.active::before,
  &.theme-2 button:hover::before {
    content: "";
    position: absolute;
    left: 12px;
    top: 18px;
    bottom: 50%;
    height: 22px;
    width: 22px;
    border-radius: 50%;
    border: 0px;
    background: ${e=>e.event.themeColor};
    border: 0;
    color: black !important;
  }
  .register {
    display: none;
  }
  &.Navbar {
    display: flex;
    top: 75px;
    bottom: auto;
    svg {
      display: none;
    }
    div {
      flex-direction: column;
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    position: fixed;
    bottom: 0;
    left: 1px;
    right: 1px;
    border-radius: 0;
    display: flex;
    z-index: 1;
    justify-content: center;
    .register {
      display: flex;
      background: ${e=>e.event.secondaryColor};
      color: ${e=>e.event.secondaryTextColor};
      width: 78px;
      font-weight: bold;
      animation: blink 1s infinite;
    }

    &.Navbar.active {
      display: flex;
    }
    @keyframes blink {
      50% {
        opacity: 0.6;
      }
    }
    div {
      background: ${e=>e.event.themeColor};
      color: ${e=>e.event.themeTextColor};
      justify-content: center;
      border-radius: 10px;
      display: flex;
      margin: 10px;
      gap: 15px;
      padding: 0 15px;
    }
    svg {
      display: initial;
      font-size: 16px;
    }
    button {
      color: ${e=>e.event.themeTextColor};
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: auto;
      overflow: hidden;
      flex-direction: column;
      display: flex;
      gap: 10px;
      font-size: 10px;
      padding: 15px 10px;
      &.active {
        border-bottom: 2px solid ${e=>e.event.themeTextColor};
        color: ${e=>e.event.themeTextColor};
        font-weight: bold;
      }
    }
    &.Navbar {
      position: absolute;
      display: none;
      div {
        padding: 15px;
      }
      button {
        display: flex;
        flex-direction: row;
        color: white;
        font-size: 16px;
        border-bottom: 1px solid #ffffff2b;
      }
      button:last-child {
        border: 0;
      }
      .register {
        width: 100%;
        border-radius: 8px;
      }
    }
  }
`,k=i.Ay.button`
  background: ${e=>e.event.secondaryColor};
  color: ${e=>e.event.secondaryTextColor};
  border-radius: 5px;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 10px;
  font-size: 14px;
  &.float {
    position: fixed;
    right: 20px;
    bottom: 20px;
    animation: blink 1s infinite;
    z-index: 1;
  }

  @keyframes blink {
    50% {
      opacity: 0.4;
    }
  }
  @media (max-width: 768px) {
    &.float {
      position: inherit;
      right: 20px;
      bottom: 20px;
    }
  }
`,I=i.Ay.img`
  margin: auto;
  object-fit: contain;
  margin-bottom: 0;
  margin-top: 20vh;
  width: 61%;
  max-height: 40vh;
  @media (max-width: 768px) {
    width: 90%;
    max-height: 60vh;
    max-width: 500px;
  }
  @media (max-width: 768px) {
    width: 90%;
    max-height: 60vh;
  }
`,S=i.Ay.div`
  display: flex;
  justify-content: center;
  width: fit-content;
  margin: auto;
  gap: 10px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`,D=i.Ay.button`
  background: ${e=>e.event.secondaryColor};
  color: ${e=>e.event.themeTextColor};
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 20px;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.1);
  }
  &.grab {
    border: 0px solid;
    margin: auto auto 0px;
    position: relative;
    /* transform: rotate(350deg); */
    margin-top: 0;
    &.green {
      background: ${e=>e.event.themeColor};
      /* margin-top: 10px; */
    }
    @media (max-width: 768px) {
      &.green {
        /* margin-bottom: 120px; */
      }
    }
    ::after {
      //content: "";
      position: absolute;
      width: 50px;
      left: -50px;
      height: 2px;
      background: ${e=>e.event.themeColor};
      top: 50%;
    }
    ::before {
      // content: "";
      position: absolute;
      width: 50px;
      right: -50px;
      height: 2px;
      background: ${e=>e.event.themeColor};

      top: 50%;
    }
  }
  &.green {
    ::after {
      background: ${e=>e.event.secondaryColor};
    }
    ::before {
      background: ${e=>e.event.secondaryColor};
    }
  }
`,Q=e=>{var t;let{menuItems:r,id:i,event:A,registserHandler:u,user:d,theme:h,title:p,description:g,additionalMenus:m=[],setLoaderBox:v}=e;const[y,b]=(0,n.useState)(null),[w,Q]=(0,n.useState)(""),_=(0,l.Zp)(),[T,F]=(0,n.useState)(!1),[O,M]=(0,n.useState)(!1);(0,n.useEffect)((()=>{const e=()=>{window.scrollY>200?null!==d&&void 0!==d&&d.token||F(!0):F(!1)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[null===d||void 0===d?void 0:d.token]);const N=window.matchMedia("(max-width: 768px)").matches,{bannerType:j,mobileMenuType:L,desktopMenuStyle:U,headerTheme:R}=A;return(0,f.jsxs)(a.w,{className:""+("background"===j?"bg-image":""),background:""+("background"===j?"url(https://event-manager.syd1.cdn.digitaloceanspaces.com/"+(N?A.mobBanner:A.banner)+")":"#ffffff;"),id:i,children:["none"!==R&&(0,f.jsx)(a.m,{children:(0,f.jsxs)(C,{children:[(0,f.jsxs)(B,{className:j,children:[(0,f.jsx)("button",{onClick:()=>{Q((e=>"active"===e?"":"active"))},children:w?(0,f.jsx)(o.A0,{icon:"close"}):(0,f.jsx)(o.A0,{icon:"menu"})}),(0,f.jsx)("img",{onClick:()=>window.location.href="/",src:"https://event-manager.syd1.cdn.digitaloceanspaces.com/"+A.logo,alt:A.title})]}),(0,f.jsx)(E,{event:A,className:`${j} ${L} ${U} ${w}`,children:(0,f.jsxs)("div",{children:[r.map(((e,t)=>{var n;return(0,f.jsxs)("button",{onClick:()=>(e=>{b(e),r[e].onClick()})(t),className:y===t?"active":"",children:[(null===(n=e.icon)||void 0===n?void 0:n.length)>0&&(0,f.jsx)(o.A0,{icon:e.icon}),(0,f.jsx)("span",{children:e.title})]},t)})),m.filter((e=>"both"===e.placement||"header"===e.placement)).map(((e,t)=>{var r;return(0,f.jsxs)("button",{onClick:()=>((e,t)=>{b(e),"External Url"!==t.targetType?_("/"+t.slug):"Home"===t.targetType?_(""):(t.url.startsWith("http://")||t.url.startsWith("https://"))&&window.open(t.url,"_blank")})(t+20,e),className:y===t+20?"active":"",children:[(null===(r=e.icon)||void 0===r?void 0:r.length)>0&&(0,f.jsx)(o.A0,{icon:e.icon}),(0,f.jsx)("span",{children:e.title})]},t+20)})),!(null!==d&&void 0!==d&&d.token)&&"6646477f39a2cf9006ed031f"!==A._id&&(0,f.jsxs)("button",{className:"more register",onClick:()=>u(),children:[(0,f.jsx)(o.A0,{icon:"ticket-registration"}),"Register"]}),r.length>3&&(0,f.jsxs)("button",{className:"more",children:[(0,f.jsx)(o.A0,{icon:"menu"}),(0,f.jsx)("span",{children:"More"})]})]})}),null!==d&&void 0!==d&&d.token?"6646477f39a2cf9006ed031f"!==A._id&&(0,f.jsx)(k,{className:T?"float":"",onClick:()=>{"Sub Events"===A.homePage?(localStorage.clear(),window.location.reload()):u()},event:A,children:"Sub Events"===A.homePage?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(o.A0,{icon:"logout"}),"Logout"]}):"6646477f39a2cf9006ed031f"!==A._id&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(o.A0,{icon:"edit"}),d.fullName]})}):"6646477f39a2cf9006ed031f"!==A._id&&null]})}),"background"===j&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("iframe",{title:"lottie",src:"https://lottie.host/embed/935ddf81-0079-49a4-8d91-86261d332a97/EII3ZQny6u.json"}),(0,f.jsx)(I,{alt:"lottie",src:c.mq}),(0,f.jsxs)(S,{children:[(0,f.jsx)(D,{onClick:()=>window.location.href="/book-tickets",className:"grab",event:A,children:"Grab Your Seats"}),(0,f.jsx)(D,{onClick:()=>M((e=>!e)),className:"grab green",event:A,children:"Win A Car"})]})]}),"normal"===j&&(0,f.jsx)(s.A,{id:"section-0",event:A,theme:null!==(t=A.bannerTheme)&&void 0!==t?t:"theme1",title:p,description:g,button:"Grab Your Seat"},0),O&&(0,f.jsx)(x,{setLoaderBox:v,registserHandler:e=>{M(!1),document.body.style.overflow=""},event:A})]})}},78244:(e,t,r)=>{"use strict";r.d(t,{A:()=>b});var n=r(65043),i=r(94574),a=r(46861),o=r(36824),s=r(75374),l=r(86178),c=r.n(l),A=r(70579);const u=i.Ay.div`
  position: fixed;
  z-index: 1001;
  top: 0;
  right: 0;
  background: white;
  left: 0;
  bottom: 0;
  background-image: repeating-radial-gradient(circle at 0 0, transparent 0, #e5e5f7 6px), repeating-linear-gradient(#b4b4b455, #b4b4b4);
  &.Horizontal {
    display: flex;
    @media (max-width: 768px) {
      height: auto;
      overflow: auto;
    }
  }
  &.Vertical {
    background: #00000075;
  }
  ~ body {
    overflow: hidden;
  }
`,d=i.Ay.div`
  position: fixed;
  left: auto;
  bottom: 0;
  top: 0;
  right: right;
  width: 40%;
  overflow: auto;

  img {
    align-items: center;
    object-fit: cover;
    object-position: top;
    z-index: 0;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    width: 100%;
  }
  &.Vertical img {
    display: none;
  }
  div {
    background: linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0)) center center / cover no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    right: 0;
    bottom: 0;
    width: 100%;
  }
  &.Horizontal {
    width: 40%;
    right: 0px;
    left: auto;
    height: 100vh;
    position: inherit;
    div {
      background: transparent;
    }
    img {
      height: 100%;
      border-radius: 0;
    }
  }
  &.single {
    width: calc(100% - 500px);
  }
  &.Vertical {
    max-width: 100%;
    width: 100%;
  }
  @media (max-width: 768px) {
    img {
      position: inherit;
    }
    &.Horizontal {
      width: 100%;
    }
  }
`,f=i.Ay.div`
  position: fixed;
  left: 0;
  bottom: 0;
  top: 0;
  right: auto;
  width: 60%;
  overflow: auto;
  padding: 30px;
  min-width: 850px;
  max-width: 60%;
  z-index: 1;
  &.Horizontal {
    width: 60%;
    position: initial;
    /* height: 100vh; */
    /* overflow: auto; */
    display: flex;
  }
  &.single {
    width: 500px;
    min-width: 500px;
  }
  &.Vertical {
    max-width: 100%;
    width: 100%;
  }
  @media (max-width: 768px) {
    &.Horizontal {
      width: 100%;
      height: auto;
      overflow: hidden;
    }
  }
`,h=i.Ay.div`
  text-align: left;
  padding: 10px 0 0 0;
  span > bold {
    font-weight: 700;
  }
  span > span {
    font-size: 17px;
  }
  > span {
    font-size: 1.5em;
    text-align: left;
    -webkit-box-align: baseline;
    align-items: baseline;
    font-weight: normal;
    flex-direction: column;
    color: black;
  }
  i {
    border: 1px dashed;
    padding: 0px 5px;
    margin-left: 5px;
    font-style: normal;
    cursor: pointer;
  }
  svg {
    margin: 0;
    font-size: 2px;
    border-radius: 50%;
    width: 13px;
    height: 13px;
  }
`,p=i.Ay.div`
  padding: 0px 20px 0px;
  background: ${e=>{var t;return null===(t=e.event)||void 0===t?void 0:t.themeColor}};
  color: ${e=>{var t;return null===(t=e.event)||void 0===t?void 0:t.themeTextColor}};
  align-items: center;
  display: flex;
  color: white;
  border-radius: 11px 11px 0px 0px;
  height: 50px;
  font-size: 16px;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  h2 {
    margin: 0;
    font-size: 18px;
    color: white;
  }
  div {
    cursor: pointer;
    align-items: center;
    display: flex;
    gap: 5px;
  }
  @media screen and (max-width: 768px) {
    height: auto;
    padding: 10px 20px;
    border-radius: 0px;
    h2 {
      font-size: 15px;
    }
  }
`,g=i.Ay.div`
  width: fit-content;
  max-width: 800px; /* Adjust as needed */
  padding: 0px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: auto;
  border-radius: 12px;
  margin: auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: auto;
    border-radius: 0;
  }
`,m=i.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  width: 40%;
  margin-bottom: 60px;
  margin-top: 60px;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
  margin: auto;
  position: relative;
  padding-bottom: 10px;
  color: black;
  img {
    max-width: 100%;
  }
  &.embed {
    margin: 0px auto;
    padding: 10px 25px 25px;
    width: 400px;
    &.Horizontal {
      align-items: flex-start;
      justify-content: flex-start;
      /* overflow: auto; */
    }
    &.double {
      width: 650px;
    }
  }
  @media screen and (max-width: 1200px) and (min-width: 768px) {
    max-width: 768px;
  }
  @media screen and (max-width: 768px) {
    flex: 1 1 100%;
    width: auto;
    padding: 10px;
    margin: 0px auto;
    &.embed {
      margin: 0px auto;
      padding: 10px 25px 25px;
      width: 100%;
      &.Horizontal {
        /* max-height: inherit;
        min-height: auto !important;
        overflow: auto;
        display: flex;
        justify-content: flex-start; */
        /* max-height: 90vh; */
      }
      &.double {
        max-width: 100%;
      }
    }
  }
`,v=i.Ay.div`
  margin: 5px 10px 0px;
  color: rgb(254, 123, 123);
  font-size: 12px;
  width: 100%;
  border-top: 1px solid lightgrey;
  text-align: center;
  padding: 10px;
`,y=i.Ay.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  padding: 0px;
  height: calc(100dvh - 50px);
  svg {
    font-size: 25px;
    color: green;
  }
  &.red svg {
    color: red;
  }

  h2 {
    font-size: 20px;
    margin: 10px 0 0;
    text-align: center;
  }
  h3 {
    font-size: 15px;
    margin: 10px 0 20px;
    font-weight: normal;
    text-align: center;
  }
`,b=e=>{var t,r,i;let{setLoaderBox:l,event:b,registserHandler:w,ticket:x,single:C=!1}=e;const[B,E]=(0,n.useState)(!1),[k,I]=(0,n.useState)(null),[S,D]=(0,n.useState)(0),[Q,_]=(0,n.useState)(0),[T,F]=(0,n.useState)(null),[O,M]=(0,n.useState)(""),[N,j]=(0,n.useState)(!1),[L]=(0,n.useState)(null!==(t=x.formMode)&&void 0!==t?t:(null===k||void 0===k?void 0:k.length)>6?"double":"single");(0,n.useEffect)((()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow=""})),[]),(0,n.useEffect)((()=>{k&&0!==(null===k||void 0===k?void 0:k.length)||(async()=>{const e=await(0,o.LS)({direct:!0,ticket:x._id},"authentication/ticket-direct-data");if(200===e.status){const{primaryFields:t,secondaryFields:r}=e.data.configs,n=[...[..."Form"===x.type?[]:t,...r].map((e=>(e.conditionEnabled&&(e.condition={item:e.conditionWhenField,if:e.conditionCheckMatch.includes(",")?e.conditionCheckMatch.split(","):[e.conditionCheckMatch],then:"enabled"===e.conditionIfMatch?"enabled":"disabled",else:"enabled"===e.conditionIfMatch?"disabled":"enabled"}),"select"===e.type&&(e.search=!0),"mobilenumber"===e.type&&(e.countries=b.countries),"multiSelect"===e.type&&("CSV"===e.apiType&&(e.selectApi=e.selectApi.toString().split(",").map((e=>({id:e,value:e}))),e.apiType="JSON"),e.default=""),e)))];I(n),D((e=>e+1))}})()}),[b.loginPage,k,b.countries,x,b.collectEmailId]);const U=(()=>{const e=c()();return x.numberOfTicketsToBeSold<=x.bookingCount?{message:"All tickets have been sold out! Thank you for your interest.",icon:"sold"}:"Closed"===x.status?{message:"Registration is temporarily closed. Please check back later.",icon:"lock"}:"Sold Out"===x.status?{message:"All tickets have been sold out! Thank you for your interest.",icon:"ticket-off"}:e.isBefore(x.saleStartDate)?{message:"Registration has not started yet. Registration will start soon",icon:"clock"}:e.isAfter(x.saleEndDate)?{message:"Registration period has ended. Sales closed on "+c()(x.saleEndDate).format("MMMM Do YYYY, h:mm A"),icon:"clock"}:null})();return U?(0,A.jsxs)(u,{className:"Vertical",event:b,children:[(0,A.jsxs)(d,{className:`Vertical  ${L}`,children:[(0,A.jsx)("img",{src:"https://event-manager.syd1.cdn.digitaloceanspaces.com/"+(null!==(r=x.banner)&&void 0!==r?r:b.regBanner),alt:"frame"}),(0,A.jsx)("div",{})]}),(0,A.jsx)(f,{className:`Vertical ${L}`,children:(0,A.jsxs)(g,{children:[C?(0,A.jsxs)(p,{event:b,children:[(0,A.jsx)("h2",{children:k?x.title:"Loading.."})," "]}):(0,A.jsxs)(p,{event:b,children:[(0,A.jsx)("h2",{children:k?x.title:"Loading!"}),(0,A.jsx)("div",{onClick:()=>w(),children:(0,A.jsx)(a.A0,{icon:"close "})})]}),(0,A.jsx)(m,{className:`Vertical  embed  ${L}`,children:(0,A.jsxs)(y,{className:"red",children:[(0,A.jsx)(a.A0,{icon:"error"}),(0,A.jsx)("h2",{children:U.message})]})})]})})]}):(0,A.jsxs)(u,{className:"Vertical",event:b,children:[(0,A.jsxs)(d,{className:`Vertical  ${L}`,children:[(0,A.jsx)("img",{src:"https://event-manager.syd1.cdn.digitaloceanspaces.com/"+(null!==(i=x.banner)&&void 0!==i?i:b.regBanner),alt:"frame"}),(0,A.jsx)("div",{})]}),(0,A.jsx)(f,{className:`Vertical ${L}`,children:(0,A.jsxs)(g,{children:[C?(0,A.jsxs)(p,{event:b,children:[(0,A.jsx)("h2",{children:k?x.title:"Loading.."})," "]}):(0,A.jsxs)(p,{event:b,children:[(0,A.jsx)("h2",{children:k?x.title:"Loading!"}),(0,A.jsx)("div",{onClick:()=>w(),children:(0,A.jsx)(a.A0,{icon:"close "})})]}),B?(0,A.jsx)(m,{className:`Vertical  embed ${L}`,children:(0,A.jsx)(y,{dangerouslySetInnerHTML:{__html:O}})}):k&&(0,A.jsxs)(m,{className:`Vertical  embed  ${L}`,children:[!B&&(null===k||void 0===k?void 0:k.length)>0&&(0,A.jsxs)(n.Fragment,{children:[(0,A.jsx)(h,{children:(0,A.jsx)("span",{children:x.enablePayment&&(T?(0,A.jsxs)("p",{style:{fontSize:"14px",fontStyle:"italic"},children:["Congratulations! The coupon discount of ",T.discountValue,"% has been applied. You need to pay ",(0,A.jsx)("strong",{style:{fontWeight:"bold"},children:T.discountAmount})," (",x.currency,") to complete this registration! -"," ",(0,A.jsxs)("i",{children:[T.couponCode,(0,A.jsx)("span",{onClick:()=>F(null),children:(0,A.jsx)(a.A0,{icon:"delete"})})]})]}):(0,A.jsxs)("p",{style:{fontSize:"14px",fontStyle:"italic",lineHeight:"20px"},children:["You need to pay ",(0,A.jsx)("strong",{style:{fontWeight:"bold"},children:x.paymentAmount})," (",x.currency,") to complete this registration!",(null===x||void 0===x?void 0:x.enableCoupenCode)&&(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)("br",{}),"Do you have a coupon code?",(0,A.jsx)("i",{onClick:()=>{M(""),j(!0)},children:"Apply Here"})]})]}))})}),(0,A.jsx)(s.A,{useCaptcha:!1,useCheckbox:!1,customClass:"embed",description:"",formValues:{},formMode:L,formType:"post",header:" ",formInput:k,submitHandler:async e=>{l(!0);const t={authenticationType:b.authenticationType,event:b._id,ticket:x._id,franchise:b.franchise._id,domain:window.location.hostname,...null!==T&&void 0!==T&&T.couponId?{couponId:null===T||void 0===T?void 0:T.couponId}:{},...e};await(0,o.LS)(t,"authentication/direct").then((e=>{if(200===e.status)if("payment"===e.data.status){console.log(e.response);const r=e.data.order;if(r.razorpayOrderId){const e={key:r.key,amount:r.amount,currency:r.currency,name:r.company.title,description:"Event Registration",order_id:r.razorpayOrderId,image:"https://event-manager.syd1.cdn.digitaloceanspaces.com/"+r.company.logo,handler:async function(e){l(!0);const n=await(0,o.LS)({...t,...e,domain:window.location.hostname,reference:r.reference},"authentication/direct");200===n.status?(E(!0),M(n.data.response.onsuccessfullMessage)):400===n.status&&M(n.customMessage),l(!1)},prefill:{name:t.firstName,email:t.emailId,contact:t.authenticationId},notes:{address:""},theme:{color:r.company.color}},n=new window.Razorpay(e);n.on("payment.failed",(function(e){M("If your payment was successful but you haven't received confirmation, don't worry! Our team will process it within one hour. If you have concerns, contact our support team after one hour."),console.error("Payment failed:",e.error)})),n.open()}}else"success"===e.data.status?(E(!0),M(e.data.response.onsuccessfullMessage)):e.data.status;else 400===e.status&&M(e.customMessage);l(!1)}))},button:x.enablePayment?"Pay & Register":"Register Now",isOpenHandler:(e,t)=>{},css:"plain embed head-hide landing",isOpen:!0,plainForm:!0},`type-${S}`)]}),!B&&(null===O||void 0===O?void 0:O.length)>0&&(0,A.jsx)(v,{children:O}),B&&(null===O||void 0===O?void 0:O.length)>0&&(0,A.jsx)(y,{children:O}),x&&N&&(null===x||void 0===x?void 0:x.enableCoupenCode)&&!T&&(0,A.jsx)(y,{children:(0,A.jsx)(s.A,{useCaptcha:!1,useCheckbox:!1,customClass:"embed",description:"",formValues:{},formMode:"single",formType:"post",header:'<span style="font-size:14px;">Do you have a Coupon Code?</span>',formInput:[{type:"text",placeholder:"Coupon Code",name:"couponCode",format:"uppercase",default:"",label:"Coupon Code",minimum:3,info:"Enter your you Coupon code recived from the team!",maximum:15,required:!0,add:!0},...O.length>0?[{type:"html",content:(0,A.jsx)(v,{children:O}),name:"eror",customClass:"full",required:!1,add:!0}]:[]],submitHandler:async e=>{l(!0);const t={ticketId:x._id,...e};await(0,o.LS)(t,"authentication/verify-coupen").then((t=>{200===t.status?(F({...t.data,couponCode:e.couponCode}),M("")):(M(t.customMessage),_((e=>e+1))),l(!1)}))},button:"Apply",isOpenHandler:()=>{j(!1),M("")},css:"landing",isOpen:!0,plainForm:!1},`coupen-${Q}`)})]})]})})]})}},91838:(e,t,r)=>{"use strict";r.d(t,{c:()=>s});var n=r(65043),i=r(46861),a=r(78244),o=r(70579);const s=e=>{let{setLoaderBox:t,setMessage:r,item:s,event:l,userToken:c}=e;const[A,u]=(0,n.useState)(!1);return(0,o.jsxs)(n.Fragment,{children:[(0,o.jsxs)("button",{className:"action",onClick:async e=>{e.preventDefault(),u(!0)},children:["Register ",(0,o.jsx)(i.A0,{icon:"open"})]}),A&&(0,o.jsx)(a.A,{setLoaderBox:t,ticket:s,registserHandler:e=>{u(!1),document.body.style.overflow=""},event:l})]})}},30809:(e,t,r)=>{"use strict";r.d(t,{A:()=>M});var n=r(65043),i=r(94574),a=r(41137),o=r(46861),s=r(55427),l=r(36824),c=r(99837),A=r(86178),u=r.n(A),d=r(75374),f=r(57658),h=r(55316),p=r(93245),g=r(83945),m=r(64980),v=r(70579);const y=i.Ay.div`
  z-index: 1001;
  top: 0;
  right: 0;
  background: white;
  left: 0;
  bottom: 0;
  padding: 0px;
  display: flex;
  flex-direction: column;
  min-width: 250px;
  width: 400px;
  max-width: 100%;
  .center {
    margin: auto;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`,b=i.Ay.div`
  text-align: left;
  padding: 0.5em 0 0.5em;
  font-weight: 500;
  font-size: 1.5em;
  line-height: 100%;
  bold {
    font-weight: 700;
  }
  p {
    font-size: 15px;
    margin: 5px 0;
    span {
      text-decoration: underline;
      cursor: pointer;
    }
  }
  &.popup {
    text-align: center;
  }

  b {
    font-weight: 700;
  }

  @media (max-width: 768px) {
    &.popup {
      position: sticky;
      padding: 1em 0 1em;
    }

    font-size: 18px;
    top: 0;
    background: white;
    z-index: 1;
    border-bottom: 1px solid rgb(224, 224, 227);
  }
`,w=i.Ay.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`,x=i.Ay.div`
  display: flex;
  position: absolute;
  top: ${e=>e.top||"auto"};
  bottom: ${e=>e.bottom||"auto"};
  font-size: ${e=>e.xfontSize||"inherit"};
  left: ${e=>e.left||"auto"};
  right: ${e=>e.right||"auto"};
  align-items: ${e=>"center"===e.align?"center":"auto"};
  text-align: ${e=>"center"===e.align?"center":"auto"};
  justify-content: ${e=>"center"===e.align?"center":"auto"};
  font-weight: ${e=>e.xfontWeight||"normal"};
  &.BackgroundImage {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &.BackgroundGradient {
  }
  &.Text {
  }
  &.Image {
  }
  &.Qr {
    svg {
      position: absolute;
      height: 60px;
      width: 60px;
      background: white;
      border: 0px solid white;
      border-radius: 0px;
    }
  }
`,C=i.Ay.div`
  display: flex;
  position: relative;
`,B=i.Ay.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  text-align: left;
  padding: 10px;
  background-color: white;
  border: 1px solid;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.1);
  gap: 5px;
  display: flex;
  flex-direction: column;
  div:first-child {
    font-weight: bold;
  }
  div {
    display: flex;
    gap: 5px;
    align-items: center;
  }
  &:hover {
    transform: scale(1.02);
    cursor: pointer;
    transition: opacity 1s ease, transform 1s ease;
  }
`,E=e=>{var t,r,i,a;let{handleResend:s,handleSubmit:A,theme:E}=e;const[k]=(0,n.useState)(null!==(t=JSON.parse(localStorage.getItem("--token")))&&void 0!==t?t:null),[I,S]=(0,n.useState)(null),[D,Q]=(0,n.useState)(null),[_,T]=(0,n.useState)(!1),[F,O]=(0,n.useState)({}),[M,N]=(0,n.useState)(""),[j,L]=(0,n.useState)(!1),[U,R]=(0,n.useState)(null),[P,H]=(0,n.useState)(null);(0,n.useEffect)((()=>{k&&!I&&(async()=>{const e={token:k.token,userid:k.u};L(!0);const t=await(0,l.LS)(e,"authentication/tickets");if(200===t.status)S(t.data.response),O(null);else if(400===t.status){var r;S(null),T(!0),Q(null),N(null!==(r=t.data.onsuccessfullMessage)&&void 0!==r?r:"Congratulations!"),O(t.data)}else 401===t.status&&(localStorage.clear(),window.location.reload());L(!1)})()}),[k,I]);const z=e=>u()(e).format("D-MMM-YY hh :mm A"),V=(0,n.useRef)(null);return k&&(0,v.jsxs)(y,{onSubmit:e=>{e.preventDefault()},action:"#",method:"POST",className:"plain",children:[(0,v.jsxs)(b,{children:[(0,v.jsxs)("bold",{children:["Hi ",k.fullName,","]})," ",(0,v.jsx)("br",{}),!_&&(D?(0,v.jsx)("p",{children:(0,v.jsxs)("span",{onClick:()=>Q(null),children:[(0,v.jsx)(o.A0,{icon:"edit"})," Change Ticket"]})}):(0,v.jsx)("p",{children:"Please book your seat ASAP!"}))]}),(0,v.jsx)(w,{children:D?null:(null===I||void 0===I?void 0:I.length)>0?null===I||void 0===I?void 0:I.map((e=>(0,v.jsxs)(B,{onClick:async()=>{const t=await(0,l.LS)({token:k.token,userid:k.u,ticket:e._id},"authentication/ticket-data");if(200===t.status)Q(e),T(!1),R(t.data.response),H({submitHandler:async t=>{L(!0);const r={...t,token:k.token,userid:k.u,ticket:e._id},n=await(0,l.LS)(r,"authentication/ticket-form-data");var i;if(200===n.status)console.log(n),T(!0),N(null!==(i=n.data.response.onsuccessfullMessage)&&void 0!==i?i:"Congratulations!"),O(n.data.response);else if(400===n.status){var a;S(null),T(!0),Q(null),N(null!==(a=n.customMessage+"<br/>"+n.data.onsuccessfullMessage)&&void 0!==a?a:"Congratulations!"),O(n.data)}L(!1)},submit:"Register Now",api:"authentication/ticket-form-data",header:`Register for ${e.title}`,description:""});else if(400===t.status){var r;T(!0),Q(e),N(null!==(r=t.customMessage)&&void 0!==r?r:"Congratulations!")}},children:[(0,v.jsx)("div",{style:{fontSize:"18px"},children:e.title}),(0,v.jsxs)("div",{children:[(0,v.jsx)(o.A0,{icon:"location"}),(0,v.jsxs)("span",{children:[" ",e.venue]})]}),(0,v.jsxs)("div",{style:{fontSize:"13px"},children:[(0,v.jsx)(o.A0,{icon:"time"}),(0,v.jsxs)("span",{children:[z(e.startDate)," - ",z(e.endDate)]})]})]},e._id))):_?null:(0,v.jsx)("div",{children:"No tickets found!"})}),D&&!_&&(U.length>0?(0,v.jsx)(d.A,{useCaptcha:P.useCaptcha,useCheckbox:!1,customClass:null!==(r=P.customClass)&&void 0!==r?r:"",description:P.description,formValues:{},formMode:null!==(i=P.customClass)&&void 0!==i?i:"",formType:"post",header:P.header,formInput:U,submitHandler:P.submitHandler,button:P.submit,isOpenHandler:e=>{H(null)},css:"plain",isOpen:!0,plainForm:!0},P.header):(0,v.jsx)(m.A,{onChange:P.submitHandler,value:"Register Now",type:"submit"})),(0,v.jsxs)(w,{style:{paddingTop:"10px"},children:[(0,v.jsx)("div",{children:M}),F&&(0,v.jsxs)(n.Fragment,{children:[(0,v.jsx)("div",{style:{display:"flex",justifyContent:"center",marginBottom:0,marginTop:20},children:(0,v.jsx)(C,{ref:V,style:{width:"300px",height:"390px"},children:(0,v.jsx)(n.Fragment,{children:null===F||void 0===F||null===(a=F.idCardData)||void 0===a?void 0:a.map(((e,t)=>{switch(e.layerType){case"BackgroundImage":return(0,v.jsx)(x,{className:"BackgroundImage",top:"0px",left:"0px",bottom:"0px",right:"0px",children:(0,v.jsx)("img",{src:"MSP Ground. Malappuram"===F.venue?g.B4:g.iT,alt:"BG"})});case"Text":return(0,v.jsx)(x,{xfontSize:e.fontSize,xfontWeight:e.fontStyle,className:"Text",top:e.top,left:e.left,bottom:e.bottom,right:e.right,align:e.align,children:F[e.source]},t);case"Qr":return(0,v.jsx)(x,{className:"Qr",top:e.top,left:e.left,bottom:e.bottom,right:e.right,align:e.align,children:(0,v.jsx)(p.Ay,{value:F.registrationId})},t);default:return null}}))})})}),(0,v.jsx)("div",{style:{display:"flex",justifyContent:"center",marginBottom:10,marginTop:10},children:(0,v.jsx)(f.$n,{onClick:()=>{h.$E(V.current).then((e=>{const t=document.createElement("a");t.href=e,t.download="IDCARD.png",t.click()}))},style:{padding:"10px 20px",backgroundColor:E.themeColor,color:E.themeTextColor,outline:"none",borderRadius:5,margin:"20px 0px 0px 0px"},children:"Download ID Card"})})]})]}),j&&(0,v.jsx)(c.A,{})]})};var k=r(73216);const I=i.Ay.div`
  position: fixed;
  z-index: 1001;
  top: 0;
  right: 0;
  background: white;
  left: 0;
  bottom: 0;
  overflow: auto;
  background-image: repeating-radial-gradient(circle at 0 0, transparent 0, #e5e5f7 6px), repeating-linear-gradient(#b4b4b455, #b4b4b4);
  &.Horizontal {
    display: flex;
    flex-direction: column-reverse;
    height: 100vh;
    @media (max-width: 768px) {
      height: auto;
      overflow: auto;
    }
  }
`,S=i.Ay.div`
  width: 100%;
  height: 250px;
  background-color: #f5f7fa;
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;
  img {
    align-items: center;
    object-fit: cover;
    object-position: top;
    z-index: 0;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    width: 100%;
  }
  div {
    background: linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0)) center center / cover no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    right: 0;
    bottom: 0;
    width: 100%;
  }
  &.Horizontal {
    width: 50%;
    right: 0px;
    left: auto;
    height: 100vh;
    position: inherit;
    div {
      background: transparent;
    }
    img {
      height: 100%;
    }
  }
  @media (max-width: 768px) {
    img {
      position: inherit;
    }
    &.Horizontal {
      width: 100%;
    }
  }
`,D=i.Ay.div`
  display: flex;
  border-top: 1px solid lightgray;
  padding-top: 10px;
  width: 100%;
  text-align: center;
  justify-content: center;
  font-size: 18px;
  span {
    color: ${e=>{var t;return null===(t=e.event)||void 0===t?void 0:t.themeColor}};
    margin-left: 5px;
    cursor: pointer;
    font-weight: bold;
  }
`,Q=i.Ay.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  margin-top: -50px;
  position: relative;
  z-index: 3;
  &.Horizontal {
    width: 50%;
    margin: 0px;
    position: initial;
    margin-top: 100px;
    height: 100vh;
    margin-bottom: auto;
    overflow: auto;
  }
  @media (max-width: 768px) {
    &.Horizontal {
      width: 100%;
      height: auto;
      overflow: hidden;
    }
  }
`,_=i.Ay.div`
  padding: 0px 20px 0px;
  background: ${e=>{var t;return null===(t=e.event)||void 0===t?void 0:t.themeColor}};
  color: ${e=>{var t;return null===(t=e.event)||void 0===t?void 0:t.themeTextColor}};
  align-items: center;
  display: flex;
  color: white;
  border-radius: 11px 11px 0px 0px;
  height: 50px;
  font-size: 16px;
  gap: 10px;
  align-items: center;
  h2 {
    margin: 0;
    font-size: 18px;
    color: white;
  }
  div {
    cursor: pointer;
    align-items: center;
    display: flex;
    gap: 5px;
  }
  @media screen and (max-width: 768px) {
    height: auto;
    padding: 10px 20px;
    h2 {
      font-size: 15px;
    }
  }
`,T=i.Ay.div`
  width: fit-content;
  max-width: 600px; /* Adjust as needed */
  padding: 0px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: auto;
  border-radius: 12px;
  margin-bottom: 40px;
  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`,F=i.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  width: 40%;
  margin-bottom: 60px;
  margin-top: 60px;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
  margin: auto;
  position: relative;
  padding-bottom: 10px;

  img {
    max-width: 100%;
  }
  &.embed {
    margin: 0px auto;
    padding: 10px 25px 25px;
    width: 400px;
    &.Horizontal {
      max-height: 68vh;
      align-items: flex-start;
      justify-content: flex-start;
      overflow: auto;
    }
  }
  @media screen and (max-width: 1200px) and (min-width: 768px) {
    max-width: 768px;
  }
  @media screen and (max-width: 768px) {
    flex: 1 1 100%;
    width: auto;
    padding: 10px;
    margin: 0px auto;
    &.embed {
      margin: 0px auto;
      padding: 10px 25px 25px;
      width: 100%;
      &.Horizontal {
        /* max-height: inherit;
        min-height: auto !important;
        overflow: auto;
        display: flex;
        justify-content: flex-start; */
        max-height: 78vh;
      }
    }
  }
`,O=i.Ay.div`
  margin: 5px 10px 0px;
  color: rgb(254, 123, 123);
  font-size: 12px;
  width: 100%;
  border-top: 1px solid lightgrey;
  text-align: center;
  padding: 10px;
`,M=e=>{var t,r;let{setLoaderBox:i,event:A,registserHandler:u,item:f}=e;const{t:h}=(0,a.Bd)(),[p,g]=(0,n.useState)(!1),[m,y]=(0,n.useState)(null),[b,w]=(0,n.useState)(!1),[x,C]=(0,n.useState)(!1),[B,M]=(0,n.useState)(null!==(t=JSON.parse(localStorage.getItem("--token")))&&void 0!==t?t:null),[N,j]=(0,n.useState)(""),[L,U]=(0,n.useState)(!1),[R,P]=(0,n.useState)(null!==(r=A.countries[0])&&void 0!==r?r:null),[H,z]=(0,n.useState)(null),[V,G]=(0,n.useState)(0),[Y,W]=(0,n.useState)(!1),[K,q]=(0,n.useState)("");(0,n.useEffect)((()=>{console.log(R);const e=[{type:"mobilenumber",placeholder:"WhatsApp Number",name:"authenticationId",validation:"mobileNumber",info:"This number will be your unique indentification number",default:"",label:"Digit WhatsApp Number",minimum:0,countries:A.countries,required:!0,add:!0}],t="Vertical"===A.loginPage?[{type:"text",placeholder:"First Name",name:"firstName",validation:"name",default:"",label:"First Name",minimum:3,maximum:40,required:!0,add:!0},{type:"text",placeholder:"Last Name",name:"lastName",validation:"name",default:"",label:"Last Name",minimum:1,maximum:40,required:!0,add:!0},{type:"number",placeholder:`${R.PhoneNumberLength} Digit WhatsApp Number (Without +${R.phoneCode})`,name:"authenticationId",validation:"phoneNumber",info:"Enter an active whatsapp number to receive authenication OTP",default:"",label:`${R.PhoneNumberLength} Digit WhatsApp Number (Without +${R.phoneCode})`,minimum:0,maximum:R.PhoneNumberLength,country:R.title,required:!0,add:!0}]:[{type:"text",placeholder:"Your Name",name:"firstName",validation:"name",default:"",label:"Your Name",minimum:3,maximum:40,required:!0,add:!0},{type:"hidden",placeholder:"Last Name",name:"lastName",validation:"name",default:"",label:"Last Name",minimum:1,maximum:40,required:!1,add:!0},{type:"mobilenumber",placeholder:"WhatsApp Number",name:"authenticationId",validation:"mobileNumber",customClass:"full",info:"This number will be your unique indentification number",default:"",label:"Digit WhatsApp Number",minimum:0,countries:A.countries,required:!0,add:!0},{type:"email",placeholder:"Email ID",name:"emailId",customClass:"full",validation:"email",info:"We will use this Email-ID for further email communication!",default:"",label:"Email ID",minimum:0,maximum:50,required:!!A.collectEmailId,add:!0}];z(Y?e:t),G((e=>e+1))}),[R,A.loginPage,Y,A.collectEmailId,A.countries]);const Z=e=>{W(e)},J=(0,k.zy)(),X=(0,k.Zp)(),$=async e=>{i(!0);const t={authenticationType:A.authenticationType,event:A._id,franchise:A.franchise._id,isLogin:Y,...e};(0,l.LS)(t,"authentication/add").then((r=>{200===r.status?(y(t),g(!0),j(e.authenticationId),localStorage.setItem("--reg",JSON.stringify({e:A._id,u:r.data.user}))):400===r.status&&q(r.customMessage),i(!1)}))};(0,n.useEffect)((()=>{null!==B&&void 0!==B&&B.token&&w(!0)}),[B]);return(0,v.jsxs)(I,{className:`${A.loginPage}`,event:A,children:[(0,v.jsxs)(S,{className:`${A.loginPage}`,children:[(0,v.jsx)("img",{src:"https://event-manager.syd1.cdn.digitaloceanspaces.com/"+A.regBanner,alt:"frame"}),(0,v.jsx)("div",{})]}),(0,v.jsx)(Q,{className:`${A.loginPage}`,children:(0,v.jsxs)(T,{children:[b?(0,v.jsxs)(_,{event:A,children:[(0,v.jsx)("div",{onClick:()=>u(),children:(0,v.jsx)(o.A0,{icon:"previous"})}),(0,v.jsx)("h2",{children:B.fullName}),(0,v.jsxs)("div",{style:{marginLeft:"auto"},onClick:()=>{localStorage.clear(),window.location.reload()},children:[(0,v.jsx)(o.A0,{icon:"logout"})," Logout"]})]}):(0,v.jsxs)(_,{event:A,children:[(0,v.jsx)("div",{onClick:()=>u(),children:(0,v.jsx)(o.A0,{icon:"previous"})}),(0,v.jsx)("h2",{children:"Back to Home"})]}),b?(0,v.jsx)(F,{className:`${A.loginPage}  embed`,children:(0,v.jsx)(E,{theme:A,user:B})}):R&&(0,v.jsxs)(F,{className:`${A.loginPage}  embed`,children:[(0,v.jsx)("div",{children:A.countries.length>5&&A.countries.map((e=>(0,v.jsx)("button",{className:e._id===R._id?"active":"",onClick:()=>{P(e)},children:e.title},e._id)))}),(null===H||void 0===H?void 0:H.length)>0&&(0,v.jsx)(d.A,{useCaptcha:!1,useCheckbox:!1,customClass:"embed",description:"",formValues:{},formMode:"double",formType:"post",header:h("Vertical"===A.loginPage?Y?"<bold>Login With OTP,</bold> Reserve Your Seat!":"<bold>Register Now,</bold> Manage Your Events!":Y?"<bold>Login With OTP,</bold> Manage Your Tickets!":"<bold>Register Now,</bold> Book Your Events!"),formInput:H,submitHandler:$,button:"Get OTP",isOpenHandler:(e,t)=>{},css:"plain embed",isOpen:!0,plainForm:!0},`type-${Y}${V}`),(null===K||void 0===K?void 0:K.length)>0&&(0,v.jsx)(O,{children:K}),Y?(0,v.jsxs)(D,{event:A,onClick:()=>Z(!1),children:["Don't have an account? ",(0,v.jsx)("span",{children:"Sign Up"})]}):(0,v.jsxs)(D,{event:A,onClick:()=>Z(!0),children:["Already registered? ",(0,v.jsx)("span",{children:"Login"})]}),p&&N&&(0,v.jsx)(s.A,{country:R,event:A,resendOtp:async()=>{$(m)},setIsLoading:e=>{C(e)},error:L,authenticationId:N,handleSubmit:async e=>{i(!0);const t=JSON.parse(localStorage.getItem("--reg"));(0,l.LS)({...t,...e},"authentication/verify").then((e=>{200===e.status&&(!0===e.data.success?e.data.sessionToken&&(localStorage.setItem("--token",JSON.stringify({...t,fullName:e.data.fullName,token:e.data.sessionToken,referenceNumber:e.data.referenceNumber})),"Sub Events"===A.homePage?(console.log(J.pathname),"/events"===J.pathname?window.location.reload():"/"===J.pathname?X("/events"):window.location.reload()):(M({...t,fullName:e.data.fullName,token:e.data.sessionToken}),w(!0),U(""))):(i(!1),U("You have entered an invalid OTP!"))),i(!1)}))}})]})]})}),x&&(0,v.jsx)(c.A,{})]})}},55427:(e,t,r)=>{"use strict";r.d(t,{A:()=>g});var n=r(65043),i=r(64980),a=r(94574),o=r(8276),s=r(97152),l=r(74505),c=r(62727),A=r(70579);const u=a.Ay.div`
  z-index: 1001;
  top: 0;
  right: 0;
  background: white;
  left: 0;
  bottom: 0;
  overflow: auto;
  padding: 0px;
  align-items: baseline;
  display: flex;
  flex-direction: column;
  gap: 24px;
  .center {
    margin: auto;
  }
  label {
    margin: auto;
    display: flex;
    text-align: center;
    justify-content: center;
    font-size: 20px;
    margin-bottom: 0;
  }
`,d=a.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,f=a.Ay.div`
  display: flex;
  margin: 0px auto;
  justify-content: center;
  gap: 10px;
`,h=a.Ay.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 4px;
  > div {
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.006em;
    text-align: center;
    color: ${o.D.text.sub};
  }
`,p=a.Ay.input`
  width: 85px;
  height: 65px;
  font-size: 20px;
  text-align: center;
  border: none;
  border: 1px solid ${o.D.stroke.soft};
  outline: none;
  border-radius: 10px;
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: -0.015em;
`,g=e=>{let{handleSubmit:t,authenticationId:r,error:a,resendOtp:o,event:g,country:m,onEdit:v}=e;const[y,b]=(0,n.useState)(["","","",""]),[w,x]=(0,n.useState)(60),[C,B]=(0,n.useState)(!1),[E,k]=(0,n.useState)(!1);(0,n.useEffect)((()=>{let e;return w>0?e=setInterval((()=>{x((e=>e-1))}),1e3):clearInterval(e),E&&0===w&&(x(90),k(!1)),()=>clearInterval(e)}),[w,E]);return(0,A.jsxs)(u,{onSubmit:e=>{e.preventDefault()},action:"#",method:"POST",className:"plain embed",children:[(0,A.jsxs)(s.Y9,{className:"embed form",children:[(0,A.jsxs)("div",{children:[(0,A.jsx)("span",{children:"Verify your account"}),(0,A.jsx)(i.A,{customClass:"no-line",icon:"edit",type:"linkbutton",value:"Edit",onChange:v})]}),(0,A.jsx)("span",{children:"We\u2019ve sent a code to "+("+"+m.phoneCode+r)})]}),(0,A.jsxs)(d,{children:[(0,A.jsx)(f,{children:y.map(((e,t)=>(0,A.jsx)(p,{placeholder:"-",id:`otp-${t}`,type:"text",maxLength:"1",value:e,onChange:e=>((e,t)=>{const r=[...y];r[e]=t,e<3&&document.getElementById(`otp-${e+1}`).focus(),b(r);const n=r.every((e=>""!==e));B(n)})(t,e.target.value),onKeyDown:e=>((e,t)=>{if("Backspace"===e.key&&t>0&&!y[t]){const e=[...y];e[t-1]="",b(e),document.getElementById("otp-"+(t-1)).focus()}})(e,t)},t)))}),(0,A.jsx)(c.A,{error:a})]}),(0,A.jsx)(l.wi,{className:"plain embed",children:(0,A.jsx)(i.A,{disabled:!C,css:"embed",type:"submit",name:"submit",value:"Submit OTP",onChange:()=>t({otp:y.join("")})})}),0===w&&(0,A.jsxs)(h,{children:[(0,A.jsx)("div",{children:"Experiencing issues receiving the code?"}),(0,A.jsx)(i.A,{disabled:w>0,type:"linkbutton",value:w>0?`Resend OTP (${w}s)`:"Resend OTP",onChange:()=>{k(!0),o()}})]})]})}},8289:(e,t,r)=>{"use strict";r.d(t,{m:()=>i,w:()=>a});var n=r(94574);const i=n.Ay.div`
  padding: 10px 0px;
  background: ${e=>e.theme.background};
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  &.vertical {
    display: none;
  }
  &.column {
    flex-direction: column;
  }
  &.row {
    flex-direction: row;
  }
  &.reverse {
    flex-direction: row-reverse;
    gap: 50px;
  }
  &.overriding {
    padding: 0;
  }
  @media (max-width: 1250px) and (min-width: 768px) {
    max-width: calc(100% - 50px);
  }
  @media (max-width: 768px) {
    max-width: 100%;
    &.mobile-column {
      flex-direction: column;
    }
    &.footer {
      padding-bottom: 50px;
    }
  }
`,a=n.Ay.div`
  width: 100%;
  background: ${e=>e.background};
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: relative;
  .ul-event-box {
    max-width: 800px;
    padding: 23px 33px;
    background-color: #ffffffe3;
    border-radius: 10px;
    display: flex;
    gap: 30px;
  }
  .ul-event-box div {
    background-color: rgb(143, 24, 55);
    border-radius: 10px;
    margin-bottom: 10px;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    transform: rotate(180deg);
    padding: 10px;
    font-size: 13px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  ul.ul-event {
    margin: 0;
    padding: 0;
    color: black;
    text-align: left;
    font-size: 13px;
    list-style-type: none; /* Remove default bullets */
  }

  ul.ul-event li {
    margin-bottom: 10px;
    position: relative;
    padding-left: 25px; /* Make space for the icon */
  }

  ul.ul-event li::before {
    content: "»"; /* Use the » character as the icon */
    position: absolute;
    left: 0;
    color: #000; /* You can change the color of the icon */
    font-size: 15px; /* Adjust size as needed */
    line-height: 1;
  }
  .bg {
    position: absolute;
    border: none;
    left: 0;
    right: 0;
    top: -200px;
    height: 562px;
    width: 100%;
    object-fit: cover;
    object-position: top;
  }
  > iframe {
    position: absolute;
    border: none;
    left: 50%;
    right: 50%;
    top: 20%;
    height: 362px;
  }
  &.bg-image {
    height: 90vh;
    min-height: 680px;
    background-size: cover;
    background-position: center;
    overflow: hidden;
  }
  &.center {
    align-items: center;
    justify-content: center;
  }
  &.padding {
    padding: 50px 0;
  }
  &.padding-large {
    padding: 100px 0;
  }
  &.padding-sides {
    padding: 10px 60px;
  }
  &.padding-both {
    padding: 30px 60px;
  }
  &.padding-top {
    padding-top: 60px;
  }
  @media (max-width: 768px) {
    background-position: right;
    .ul-event-box {
      max-width: 90%;
      padding: 23px 33px;
      background-color: #ffffffe3;
      border-radius: 10px;
      flex-direction: column;
      font-size:14px;
    }
    .ul-event-box div {
      -webkit-writing-mode: inherit;
      text-orientation: mixed;
      transform: inherit;
    }
    &.padding-large {
      padding: 20px 0;
    }
    &.padding-sides {
      padding: 10px 10px;
    }
    &.bg-image {
      height: 80vh;
      max-height: 80vh;
      background-size: cover;
    }
    > iframe {
      position: absolute;
      border: none;
      left: 33%;
      right: 0;
      top: 28%;
      height: 159px;
    }
  }
`},43046:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var n=r(65043),i=r(94988),a=r(26222),o=r(79456),s=r(10793),l=r(35190),c=r(73216),A=r(41137),u=r(70579);const d=(0,i.A)((e=>{const t=(0,o.d4)((e=>e.login)),{t:r}=(0,A.Bd)(),i=(0,c.Zp)(),d=(0,o.wA)();(0,n.useEffect)((()=>{document.title="404 - EventHex Portal"}),[]);const[f,h]=(0,n.useState)({type:1,content:r("sessionExpired"),okay:r("startOver"),onClose:()=>{i("/"),d((0,l.T8)())}});return t.data.token?(0,u.jsx)(a.J3,{className:"center"}):(0,u.jsx)(s.A,{meessage:f,closeMessage:()=>{h({...f,onClose:null})},setLoaderBox:()=>{},showMessage:!0})}))},64527:(e,t,r)=>{"use strict";r.d(t,{A:()=>d});var n=r(65043),i=r(99837),a=r(10793),o=r(83150),s=r(36824),l=r(73216);var c=r(79456),A=r(41210),u=r(70579);const d=e=>t=>r=>{var d,f,h;const{id:p,slug:g}=(0,l.g)(),[m,v]=(0,n.useState)({type:1,content:"Message!",okay:"Start Over"}),y=(0,c.d4)((e=>e.themeColors)),[b,w]=(0,n.useState)(!1),[x,C]=(0,n.useState)(!0),[B,E]=(0,n.useState)(null),[k,I]=(0,n.useState)(!1),[S,D]=(0,n.useState)(null),[Q,_]=(0,n.useState)(!1),[T]=(0,n.useState)(null!==(d=JSON.parse(localStorage.getItem("--token")))&&void 0!==d?d:null),F=(0,c.wA)(),O=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;C(e),_(t)};return(0,n.useEffect)((()=>{k||(async()=>{if(I(!0),null===B){var e,r,n,i,a,o,l,c,u,d,f;let B=window.location.hostname;"localhost"===B&&""!==window.location.port&&(B+=`:${window.location.port}`);const I=window.location.href.includes("app.eventhex.ai")||window.location.href.includes("admin.eventhex.co")||window.location.href.includes("localhost"),Q=I?{data:{success:!0,message:"Domain is whitelisted",isWhitelisted:!0,response:{_id:"65f44d2fc067bedb82145f6e",domain:B,event:{_id:"66ca1b63a336dc65471c3a15",title:"Eventhex Admin Panel",__v:0,franchise:{_id:"659fd2669308e8d4d1ffdeea"},logo:A.wm},status:!0,createdAt:"2024-03-15T13:29:19.953Z",updatedAt:"2024-03-15T13:29:19.953Z",__v:0,route:"admin"},configs:[]}}:await(0,s.bQ)(p?{event:p,slug:g,...T}:{domain:B,slug:g,...T},t);E(null===(e=Q.data)||void 0===e?void 0:e.isWhitelisted);const _=I?A.cI:"https://event-manager.syd1.cdn.digitaloceanspaces.com/"+(null===(r=Q.data.response)||void 0===r||null===(n=r.event)||void 0===n?void 0:n.logo);if(null!==(i=Q.data.response)&&void 0!==i&&null!==(a=i.event)&&void 0!==a&&a.logo){const e=document.querySelector("link[rel~='icon']")||document.createElement("link");e.rel="icon",e.href=_,document.head.appendChild(e)}if("event"===(null===(o=Q.data)||void 0===o||null===(l=o.response)||void 0===l?void 0:l.route)||"checkout"===(null===(c=Q.data)||void 0===c||null===(u=c.response)||void 0===u?void 0:u.route)){var h,m,v,b,w,x;const e={...y,theme:Q.data.response.event.themeColor,themeBackground:Q.data.response.event.themeColor,themeForeground:Q.data.response.event.themeTextColor,secondaryColor:Q.data.response.event.secondaryColor,secondaryTextColor:Q.data.response.event.secondaryTextColor};document.title=`${null===(h=Q.data.response)||void 0===h||null===(m=h.event)||void 0===m?void 0:m.title}`;const t=document.createElement("meta");if(t.name="description",t.content=null===(v=Q.data.response)||void 0===v||null===(b=v.event)||void 0===b?void 0:b.description,document.head.appendChild(t),!p&&F((e=>({type:"THEME",payload:e}))(e)),null!==(w=Q.data.response)&&void 0!==w&&null!==(x=w.event)&&void 0!==x&&x.trackingCode){var k,S;const e=null===(k=Q.data.response)||void 0===k||null===(S=k.event)||void 0===S?void 0:S.trackingCode,t=document.createElement("script");t.innerHTML=` (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','${e}'); `,document.head.appendChild(t);const r=document.createElement("script");r.src=`https://www.googletagmanager.com/ns.html?id='${e}`,r.async=!0,document.head.appendChild(r)}}else null===(d=Q.data)||void 0===d||null===(f=d.response)||void 0===f||f.route;D(Q),C(!1)}})()}),[p,B,k,y,F,g,T]),!0===B?(0,u.jsxs)(n.Fragment,{children:[(0,u.jsx)(e,{...r,theme:y,id:null!==p&&void 0!==p?p:"",slug:g,data:S.data.response,isWhitelisted:S.data.isWhitelisted,config:null!==(f=S.data.configs)&&void 0!==f?f:[],additionalMenus:null!==(h=S.data.additionalMenusList)&&void 0!==h?h:[],setLoaderBox:O,setMessage:e=>{v(e),w(!0)}}),b&&(0,u.jsx)(a.A,{message:m,closeMessage:()=>{v({...m,onClose:null}),w(!1)},setLoaderBox:O,showMessage:b}),x&&(0,u.jsx)(i.A,{message:Q})]}):null===B?(0,u.jsx)(i.A,{}):(0,u.jsx)(o.YQ,{style:{margin:"auto",display:"flex",height:"100vh",flexDirection:"column",gap:"10px"},className:"noshadow white-list",children:"Page Not Found!"})}},60714:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});var n=r(65043),i=r(99837),a=r(10793),o=r(70579);const s=e=>t=>{const[r,s]=(0,n.useState)({type:1,content:"Message!",okay:"Start Over"}),[l,c]=(0,n.useState)(!1),[A,u]=(0,n.useState)(!1),d=e=>{u(e)};return(0,o.jsxs)(n.Fragment,{children:[(0,o.jsx)(e,{...t,setLoaderBox:d,setMessage:e=>{s(e),c(!0)}}),l&&(0,o.jsx)(a.A,{message:r,closeMessage:()=>{s({...r,onClose:null}),c(!1)},setLoaderBox:d,showMessage:l}),A&&(0,o.jsx)(i.A,{})]})}},24858:(e,t,r)=>{"use strict";r.d(t,{A:()=>T});var n=r(65043),i=r(73216),a=r(64980),o=r(41137),s=r(64008),l=r(87045),c=r(46861),A=r(13747),u=r(70579);const d=e=>{var t;const{t:r}=(0,o.Bd)(),[i,d]=(0,n.useState)(e.formInput),[f,h]=(0,n.useState)(!0),[p,g]=(0,n.useState)(null),[m,v]=(0,n.useState)(null),[y,b]=(0,n.useState)(!1),[w,x]=(0,n.useState)(!1);(0,n.useEffect)((()=>{const t={},r={};let n=new Date;e.formInput.forEach((e=>{if(r[e.name]="","checkbox"===e.type){let r=JSON.parse("false");t[e.name]=r}else if("datetime"===e.type||"time"===e.type)n=e.default?new Date(e.default):new Date,t[e.name]=n.toISOString();else if("image"===e.type||"file"===e.type)t[e.name]=[];else if("multiSelect"===e.type){var i;t[e.name]=(null===(i=e.default)||void 0===i?void 0:i.length)>0?e.default:[]}else if("select"===e.type){var a,o;t[e.name]=(null===(a=e.default)||void 0===a||null===(o=a.toString())||void 0===o?void 0:o.length)>0?e.default:"",console.log("select",e.name,t[e.name])}else"date"===e.type?(n=e.default?new Date(e.default):new Date,t[e.name]=n.toISOString()):"multiple"===e.type?(t[e.name]=[],r[e.name]=[],e.forms.forEach((n=>{t[e.name].push(n.reduce(((e,t)=>({...e,[t.name]:""})),{})),r[e.name].push(n.reduce(((e,t)=>({...e,[t.name]:""})),{}))}))):(t[e.name]=e.default,"select"===e.type&&(t[e.name]=""))})),r.captchaError="",r.agreementAccept="",e.formValues&&Object.keys(t).forEach((r=>{e.formValues[r]&&(t[r]=e.formValues[r])})),g(t),v(r)}),[e.formInput,e.formValues]);const C=(e,t,r,n,i,a,o)=>{const s={...r};let l=0;e.forEach((e=>{if("_id"!==e.name)if("multiple"===e.type)e.forms.forEach(((r,n)=>{r.forEach(((r,i)=>{const a=B(r,"undefined"===typeof t[e.name][n][r.name]?"":t[e.name][n][r.name],t);s[e.name][n][r.name]=a.tempformError,l+=a.flag}))}));else{const r=B(e,"undefined"===typeof t[e.name]?"":t[e.name],t);s[e.name]=r.tempformError,l+=r.flag}}));const c=E(n,i);s.captchaError=c.tempformError,l+=c.flag;const A=k(a,o);return s.captchaError=A.tempformError,l+=A.flag,v(s),h(l>0),0===l},B=(t,n,i)=>{let a=0,o="";if(!t.update&&"put"===e.formType)return{flag:a,tempformError:o};if(!t.required&&0===n.length)return{flag:a,tempformError:o};if(t.condition)if(i[t.condition.item]===t.condition.if){if("disabled"===t.condition.then)return{flag:a,tempformError:o}}else if("disabled"===t.condition.else)return{flag:a,tempformError:o};switch(t.validation){case"email":/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(n)||(o=r("validContent",{label:r(t.label)}),a+=1);break;case"fileNumber":/[A-Z0-9-]/.test(n)||(o=r("validContent",{label:r(t.label)}),a+=1);break;case"licensePlate":/^[A-Z]{3}[ -]?[A-Z0-9]{2}[ -]?[A-Z0-9]{3,6}$/i.test(n)||(o=r("validContent",{label:r(t.label)}),a+=1);break;case"amount":/^\d+([.,]\d{1,2})?$/.test(n)||(o=r("validContent",{label:r(t.label)}),a+=1);break;case"datetime":case"time":/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})$/.test(n)||(o=r("validContent",{label:r(t.label)}),a+=1)}const s=(0,A.e)(t,o,n,a,r);if(o=s.tempformError,a=s.flag,"date"===t.type||"datetime"===t.type){if(t.greater){new Date(i[t.greater])>new Date(n)&&(o=r("validContent",{label:r(t.label)}),a+=1)}if(t.less){new Date(i[t.less])<new Date(n)&&(o=r("validContent",{label:r(t.label)}),a+=1)}}return"image"===t.type||"file"===t.type?0===n.length&&(o=r("validContent",{label:r(t.label)}),a+=1):t.required&&0===(null===n||void 0===n?void 0:n.length)?(o=r("required",{label:r(t.label)}),a+=1):t.minimum>(null===n||void 0===n?void 0:n.length)?(o=r("requiredMinimum",{minimum:t.minimum,label:r(t.label)}),a+=1):t.maximum<(null===n||void 0===n?void 0:n.length)&&(o=r("maxLimit",{maximum:t.maximum,label:r(t.label)}),a+=1),{flag:a,tempformError:o}};(0,n.useEffect)((()=>{}),[i]);const E=(e,t)=>{let n=0,i="";return!1===e&&!0===t&&(i=r("required",{label:r("captcha")}),n+=1),{flag:n,tempformError:i}},k=(e,t)=>{let n=0,i="";return!0!==e&&!0===t&&(i=r("required",{label:r("agreement")}),n+=1),{flag:n,tempformError:i}},I=function(t,r){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},s={};const l=i[r];if(null===a){let r="";if("checkbox"===n)r=t;else if("select"===n)l.updateCondition&&l.updateCondition.forEach((e=>{var t;s[e.item]=null!==(t=o[e.value])&&void 0!==t?t:""})),r=t.id;else if("multiSelect"===n){const e=p[l.name],n=e.findIndex((e=>e===t.id));-1===n?e.push(t.id):e.splice(n,1),r=e}else r="image"===n||"file"===n?t.target.files:"datetime"===n||"time"===n||"date"===n?t.toISOString():"licensePlate"===l.validation?t.target.value.toString().toUpperCase().replace(/[^a-zA-Z0-9\xc4\xd6\xdc\xdf\- ]/g,""):t.target.value;const a={...p,...s,[l.name]:r};g(a),C(i,a,m,y,e.useCaptcha,w,e.useCheckbox)}else{const n=i[a.index],o=n.forms[a.multipleIndex][r],s={...p};s[n.name][a.multipleIndex][o.name]=t.target.value,g(s),C(i,s,m,y,e.useCaptcha,w,e.useCheckbox)}},S=t=>{t.preventDefault(),e.setMessage?e.setMessage({type:2,content:r("sure"),proceed:"Save",onProceed:()=>{console.log("button triggered"),D()}}):C(i,p,m,y,e.useCaptcha,w,e.useCheckbox)&&e.submitHandler(p,i)},D=(t,r)=>{console.log("yes"),C(i,p,m,y,e.useCaptcha,w,e.useCheckbox)&&e.submitHandler(p,i)};return(0,u.jsx)(s.hJ,{className:e.plainForm?"plain":"popup",children:(0,u.jsxs)(s.YW,{className:`${e.plainForm?"plain":"popup"} ${e.customClass?e.customClass:""}`,children:[e.header?(0,u.jsx)(s.Y9,{className:e.plainForm?"plain":"popup",dangerouslySetInnerHTML:{__html:e.header}}):"",e.description&&(0,u.jsx)(s.VY,{dangerouslySetInnerHTML:{__html:e.description}}),p&&(0,u.jsxs)(s.lV,{onSubmit:e=>{e.preventDefault(),alert("yes")},action:"#",method:"POST",className:`${null!==(t=e.css)&&void 0!==t?t:""}  ${e.plainForm?"plain":"popup"}`,children:[i&&i.map(((t,o)=>{let l="";t.condition&&(l=p[t.condition.item]===t.condition.if?t.condition.then:t.condition.else);let A={};var f;"select"!==t.type&&"multiSelect"!==t.type||(Array.isArray(t.updateOn)?(A={},null===(f=t.updateOn)||void 0===f||f.forEach((e=>{A[e]=p[e]}))):A={[t.updateOn]:p[t.updateOn]});return"put"===e.formType&&t.update||"post"===e.formType?"multiple"===t.type&&t.forms?(0,u.jsxs)(n.Fragment,{children:[t.forms.map(((t,r)=>{var n;return(0,u.jsxs)(s.lV,{className:`${null!==(n=e.css)&&void 0!==n?n:""} ${e.plainForm?"plain sub":"popup sub"}`,children:[t.map(((e,t)=>(0,u.jsx)(a.A,{animation:"sub",placeholder:e.placeHolder,sub:{index:o,multipleIndex:r},id:t,error:m[i[o].name][r][e.name],value:p[i[o].name][r][e.name],...e,onChange:I},"input"+t))),r>0&&(0,u.jsx)(s.Hz,{className:"close",children:(0,u.jsx)("button",{onClick:()=>((t,r)=>{const n=i,a={...p},o={...m};n[t].forms.splice(r,1),a[n[t].name].splice(r,1),o[n[t].name].splice(r,1),g(a),v(o),d(n),C(i,p,m,y,e.useCaptcha,w,e.useCheckbox)})(o,r),children:(0,u.jsx)(s.FW,{children:(0,u.jsx)(c.US,{})})})})]},"input"+r)})),t.forms.length<t.maximum&&(0,u.jsx)(s.Hz,{children:(0,u.jsxs)("button",{onClick:()=>(t=>{const r=i,n={...p},a={...m};r[t].forms.push(r[t].forms[0]);const o={...n[r[t].name][0]};for(const[e]of Object.entries(o))o[e]="";a[r[t].name].push({...o}),n[r[t].name].push({...o}),g(n),v(a),d(r),C(i,p,m,y,e.useCaptcha,w,e.useCheckbox)})(o),children:[(0,u.jsx)(s.FW,{children:"+"}),r("Add New Payment Request")]})})]},"input"+o):(0,u.jsx)(a.A,{dynamicClass:l,animation:"sub-1",updateValue:A,placeholder:t.placeHolder,id:o,error:m[i[o].name],value:p[i[o].name],...t,onChange:I},"input"+o):""})),!0===e.useCaptcha&&(0,u.jsx)(l.A,{error:m.captchaError,label:r("captcha"),setCaptchaStatus:t=>{b(t),C(i,p,m,t,e.useCaptcha,w,e.useCheckbox)}},"1"),!0===e.enterSubmit&&(0,u.jsx)("div",{style:{display:"none"},children:(0,u.jsx)(a.A,{disabled:f,type:"submit",name:"submit",value:r(e.button?e.button:"submit"),onChange:S})}),!0===e.useCheckbox&&(0,u.jsx)(a.A,{type:"checkbox",placeholder:"acceptAgreement",id:1,value:w,onChange:t=>{x(t),C(i,p,m,y,e.useCaptcha,t,e.useCheckbox)}},"acceptAgreement")]}),(0,u.jsxs)(s.wi,{className:e.buttonStyle?e.buttonStyle:"center",children:[!e.plainForm&&(0,u.jsx)(a.A,{type:"close",value:r("cancel"),onChange:()=>{e.isOpenHandler(!1)}}),(0,u.jsx)(a.A,{disabled:f,type:"submit",name:"submit",css:"theme",value:r(e.button?e.button:"submit"),onChange:S})]})]})})};var f=r(35475),h=r(94574);const p=h.Ay.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  padding: 0em 1em;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  /* background-color: #141414;
  color: white; */
  @media screen and (max-width: 768px) {
    position: fixed;
    padding: 0em 0.7em;
    height: 40px;
    bottom: 0;
    margin: initial;
  }
`,g=h.Ay.div`
  display: flex;
  margin-right: auto;
  @media screen and (max-width: 768px) {
    margin-right: inherit;
  }
`,m=(h.Ay.div`
  display: flex;
  div {
    margin-right: 10px;
    text-decoration: none;
    cursor: pointer;
    opacity: 0.5;
  }

  div:last-child {
    margin-right: 0px;
  }
  div.active {
    margin-right: 10px;
    text-decoration: none;
    cursor: pointer;
    opacity: 1;
  }
  @media screen and (max-width: 768px) {
    div {
      color: black;
    }
    div.active {
      color: #198ad6;
    }
  }
`,h.Ay.nav`
  display: flex;
  margin-left: auto;
  a {
    color: white;
    margin-right: 10px;
    text-decoration: none;
  }
  a:last-child {
    margin-right: 0px;
  }
  @media screen and (max-width: 768px) {
    margin-left: inherit;
  }
`);var v=r(9667),y=r(8276);const b=e=>{let{fixed:t=!0}=e;const{t:r}=(0,o.Bd)(),n=(new Date).getFullYear(),i=window.location.origin;return(0,u.jsx)(p,{className:t&&"fixed",children:(0,u.jsxs)(v.so,{className:"container",children:[(0,u.jsxs)(g,{children:["\xa9",n," ",y.t.title]}),(0,u.jsxs)(m,{children:[(0,u.jsx)(f.N_,{to:`${i}/privacy`,children:r("privacy")}),(0,u.jsx)(f.N_,{to:`${i}/imprint`,children:r("imprint")})]})]})})},w=h.Ay.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 50px);
  padding-bottom: 50px;
  /* background-color: #f3f8fb; */
  &.center {
    text-align: center;
    justify-content: center;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding-bottom: 10px;
  }
`,x=h.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  margin-bottom: 60px;
  margin-top: 60px;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
  margin: auto;
  margin: 40px auto;
  img {
    max-width: 100%;
  }
  @media screen and (max-width: 1200px) and (min-width: 768px) {
    max-width: 768px;
  }
  @media screen and (max-width: 768px) {
    flex: 1 1 100%;
    width: auto;
    padding: 10px;
    margin: 0px auto;
  }
`;h.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 100%;
    max-height: 64vh;
    object-fit: cover;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    &.hm {
      display: none;
    }
  }
`,h.Ay.div`
  display: flex;
  padding: 10px;
  box-shadow: rgb(0 0 0 / 16%) 0px 5px 9px 0px;
  background-color: white;
  img {
    height: 30px;
  }
`;var C=r(79456);const B=h.Ay.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  z-index: 1;
  padding: 0em 0.5em;
  position: sticky;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  /* box-shadow: rgb(0 0 0 / 16%) 0px 5px 9px 0px; */
  /* background-color: white; */
  img {
    margin-right: auto;
    /* height: 35px; */
    max-height: 50px;
    padding: 5px;
  }
  @media screen and (max-width: 768px) {
    position: sticky;
  }
`,E=(h.Ay.div`
  display: flex;
  margin-right: auto;
  @media screen and (max-width: 768px) {
    margin-right: inherit;
  }
`,h.Ay.div`
  flex-direction: revert;
  display: flex;
  justify-content: center;
  align-items: center;
`),k=(h.Ay.div`
  border: 1px solid;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  width: 25px;
  cursor: pointer;
  text-transform: uppercase;
`,h.Ay.div`
  display: flex;
  margin-left: auto;
  flex-direction: column;
  div {
    margin-right: 10px;
    text-decoration: none;
    cursor: pointer;
    opacity: 0.5;
  }

  div:last-child {
    margin-right: 0px;
  }
  div.active {
    margin-right: 10px;
    text-decoration: none;
    cursor: pointer;
    opacity: 1;
  }
  @media screen and (max-width: 768px) {
    div {
      color: black;
    }
    div.active {
      color: #198ad6;
    }
  }
`,h.Ay.nav`
  display: flex;
  flex: auto;
  margin-right: 20px;
  a {
    color: black;
    margin-right: 10px;
    text-decoration: none;
  }
  a:last-child {
    margin-right: 0px;
  }
  @media screen and (max-width: 768px) {
    a {
      color: black;
    }
    &.hm {
      display: none;
    }
    margin-left: inherit;
  }
`);var I=r(41210);const S=()=>(0,u.jsx)(B,{children:(0,u.jsxs)(v.so,{className:"container header",children:[(0,u.jsx)("img",{src:I.wm,alt:"logo"}),(0,u.jsx)(E,{children:(0,u.jsx)(k,{className:"hm"})})]})});var D=r(35190),Q=r(60714);const _=r.p+"static/media/login.3125f7237e313fc6d47a3f6b15ecf9d7.svg",T=(0,Q.A)((e=>{(0,n.useEffect)((()=>{document.title="EventHex System"}),[]);const t=(0,i.Zp)(),r=(0,C.wA)(),a=(0,C.d4)((e=>e.login)),{t:s}=(0,o.Bd)(),{setLoaderBox:l}=e;(0,n.useEffect)((()=>{var n,i,o,c;null!==(n=a.data)&&void 0!==n&&n.token&&t(null!==(i=null===(o=a.data)||void 0===o||null===(c=o.menu[0])||void 0===c?void 0:c.path)&&void 0!==i?i:"dashboard");l(a.isLoading),null!==a.error&&(e.setMessage({type:1,content:s(a.error),proceed:"Okay"}),r((0,D.dy)()))}),[a,t,l,s,e,r]);return(0,u.jsxs)(w,{children:[(0,u.jsx)(S,{}),(0,u.jsx)(v.so,{className:"login",children:(0,u.jsxs)(x,{children:[(0,u.jsx)("img",{src:_,alt:"user"}),(0,u.jsx)(d,{useCaptcha:!1,formType:"post",header:"Login to your account",description:"Enter your details to login.",formInput:[{type:"text",placeholder:"Enter your email",name:"email",validation:"email",default:"",label:"Email",minimum:5,maximum:40,required:!0,icon:"email"},{type:"password",placeholder:"Enter your password",name:"password",validation:"password",info:"At least one uppercase letter (A-Z) \n At least one lowercase letter (a-z) \n At least one digit (0-9) \n At least one special character (@, $, !, %, *, ?, &) \n Minimum length of 8 characters",default:"",label:"Password",minimum:0,maximum:16,required:!0,icon:"password"}],submitHandler:async e=>{r((0,D.Mx)(e))},button:s("validate"),isOpenHandler:(e,t)=>{},isOpen:!0,plainForm:!0})]})}),(0,u.jsx)(b,{})]})}))},9667:(e,t,r)=>{"use strict";r.d(t,{JJ:()=>s,Yq:()=>o,so:()=>a});var n=r(35475),i=r(94574);const a=i.Ay.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex: 1 1 100%;
  &.custom {
    margin: 20px 10px 10px 30px;
    position: "relative";
    column-gap: 20px;
  }
  &.diret {
    justify-content: "space-between";
  }
  &.diet {
    margin: 0px 0px 0;
  }
  &.menu {
    margin: 20px 0 0px 0;
    padding-bottom: 30px;
    position: relative;
    height: 90%;
  }
  &.shadow {
    box-shadow: rgb(0 0 0 / 16%) 0px 1px 4px;
  }
  &.header {
    overflow: initial;
    padding: 10px 0;
  }
  &.gap {
    gap: 10px;
  }
  &.filter {
    gap: 10px;
  }
  &.close {
    display: none;
  }
  &.filter {
    gap: 0;
    column-gap: 10px;
    flex-wrap: wrap;
  }
  && {
    .second & {
      justify-content: left;
      display: flex;
      align-items: baseline;
      img {
        margin-right: 10px;
      }
    }
  }
  &.booking-container {
    height: calc(100vh - 200px);
    overflow: auto;
  }
  &.center {
    margin: 50px auto;
    background-color: white;
    min-height: 120px;
    border-radius: 10px;
    flex-direction: column;
    justify-content: flex-start;
  }
  &.container {
    justify-content: center;
    max-width: 1200px;
    width: 100%;
    margin: auto;
  }
  &.login {
    height: calc(100vh);
    align-items: center;
    padding: 0;
  }

  &.left {
    justify-content: left;
  }
  h1 {
    font-size: 1.3em;
    margin: 50px 10px;
    text-align: center;
  }
  @media screen and (max-width: 1200px) and (min-width: 768px) {
    overflow: auto;
    &.container {
      justify-content: center;
      max-width: 768px;
      width: 100%;
    }
  }
  @media screen and (max-width: 768px) {
    overflow: auto;
    flex-wrap: wrap;
    &.booking-container {
      height: auto;
      overflow: initial;
    }
    &.container {
      margin: initial;
    }
    &.login {
      align-items: center;
      padding: 10px 10px;
    }
    h1 {
      font-size: 1em;
      margin: 15px 15px 10px;
      font-size: 20px;
      text-align: center;
    }
    &.center {
      margin: 20px 10px;
    }
  }
`,o=i.Ay.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 100%;
  /* background-color: ${e=>e.theme.pageBackground}; */
  &.quarter {
    width: 300px;
    flex: 1 1 300px;
    min-width: 300px;
    position: sticky;
    top: 0px;
  }
  &.order {
    margin-top: 20px;
  }
  &.bulk {
    overflow: auto;
    width: 100%;
    padding: 20px;
  }
  &.mealSelection {
    padding-right: 30px;
    position: absolute;
    right: 0;
    top: 0;
    max-width: 400px;
    width: 400px;
    flex: 1 1 400px;
    bottom: 5px;
    top: 0;
    overflow: scroll;
  }
  &.user-details {
    padding-right: 30px;
    max-width: 400px;
    width: 400px;
    flex: 1 1 400px;
    overflow: scroll;
    padding: 0px 30px;
    position: relative;
    position: sticky;
    top: 0;
    max-height: calc(100vh - 100px);
    display: grid;
  }
  &.menu-schedule {
    position: relative;
    max-width: calc(100% - 450px);
    width: calc(100% - 450px);
    flex: 1 1 calc(100% - 450px);
    padding: 0px 30px;
    max-height: calc(100vh - 100px);
    overflow: auto;
    @media screen and (max-width: 768px) {
      max-width: calc(100%);
      width: calc(100%);
      flex: 1 1 calc(100%);
    }
  }
  &.menu {
    max-width: calc(100% - 450px);
    width: calc(100% - 450px);
    position: absolute;
    left: 0;
    flex: 1 1 calc(100% - 450px);
    overflow: scroll;
    bottom: 5px;
    top: 0;
    padding-bottom: 20px;
  }
  &.true {
    max-width: calc(100% - 0px);
    width: calc(100% - 0px);
    flex: 1 1 calc(100% - 0px);
  }
  &.content {
    flex: 1 calc(100% - 15em);
    max-width: 100%;
    /* height: 100vh;  */
    flex: 1;
  }
  &.hidemenu {
    flex: 1 1 calc(100%);
    max-width: calc(100%);
  }
  &.popup-data {
    overflow: auto;
    padding: 0em 0 0;
    /* border-radius: 12px; */
    min-height: 100px;
    display: flex;
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 80px;
  }
  &.popup-data.small {
    overflow: auto;
    padding: 0em 0 0;
    border-radius: 12px;
  }
  &.marginright {
    margin-right: 15px;
  }
  > p {
    text-align: center;
  }
  &.center p {
    margin: 0;
    margin-bottom: 50px;
  }
  .map-container {
    width: 100%;
    height: 100vh;
    border-radius: 10px 0 0 0;
    border-top: 1px solid #bdbdbd !important;
    border-left: 1px solid #bdbdbd !important;
  }
  &.menu-header {
    margin-left: 30px;
    margin-right: 30px;
    flex: 0;
    margin-bottom: 10px;
    flex-direction: row;
    justify-content: space-between;
    margin-right: 10px;
    padding: 5px 0;
    top: 0;
    position: sticky;
    background-color: white;
    z-index: 1000;
  }
  &.order-page {
    margin-left: 30px;
    margin-right: 30px;
    flex: 0;
    margin-bottom: 10px;
    flex-direction: row;
    justify-content: space-between;
    margin-right: 30px;
  }
  h2 {
    font-size: 1.8em;
  }
  &.center {
    margin: auto;
    width: 400px;
    background-color: white;
    min-height: 120px;
    border-radius: 10px;
    flex: none;
  }
  && {
    .payment & {
      margin-right: 0px;
    }
    .second & {
      background-color: transparent;
    }
    .vertical-menu & {
      padding: 0px 0px 0 0;
      &.menu-schedule {
        padding: 0 10px;
        margin-right: 1px;
      }
      &.user-details {
        padding: 0 10px;
        margin-right: 0px;
      }
    }
  }
  &.full {
    flex: 1 1 calc(100vh - 100px);
    margin-right: inherit;
  }
  &.center h2 {
    justify-content: center;
    text-align: center;
    margin: 2em 0em 1em;
  }
  &.features {
    background-color: white;
    padding-bottom: 50px;
  }
  &.second {
    background-color: rgb(241, 246, 248);
  }
  &.second.center {
    background-color: rgb(241, 246, 248);
  }
  &.white {
    background-color: white;
    align-items: center;
    justify-content: center;
    display: flex;
    padding-bottom: 70px;
    flex-basis: auto;
    h1 {
      max-width: 80%;
      font-size: 25px;
    }
    a {
      background: rgb(19, 129, 197);
      border-radius: 12px;
      color: white;
      transition: all 0.5s ease 0s;
      margin-top: 10px;
      max-width: 400px;
      padding: 15px 20px;
      min-width: 155px;
      border-color: black;
      border-style: solid;
      cursor: pointer;
      border-width: 0px;
      text-align: center;
      text-decoration: none;
    }
  }
  .data-layout {
    padding: 1.65em 2em 0;
    gap: 24px;
    padding: 20px 32px 20px 32px;
  }
  &.booking {
    flex: 1 1 500px;
    height: calc(100vh - 200px);
    overflow: auto;
    position: relative;
  }
  &.width60 {
    flex: 1 1 60%;
  }
  &.width40 {
    flex: 1 1 40%;
  }
  &.subList {
    border-radius: 12px;
  }
  &.print {
    padding: 0;
  }
  &.data-layout {
    display: flex;
    flex-direction: column;
    /* max-height: calc(100vh - 84px); */
    max-width: 100%;
    gap: 24px;
    height: fit-content;
    position: relative;
  }
  && {
    .custom &.data-layout {
      padding: 0em 0em;
    }
  }
  &.padding{
    padding: 20px 32px !important;
  }
  @media screen and (max-width: 768px) {
    max-width: 100%;
    margin-right: 0px;
    .map-container {
      height: 400px;
      margin-bottom: 30px;
    }
    &.booking {
      height: auto;
      overflow: initial;
    }
    &.map {
      height: auto;
    }
    &.white {
      background-color: white;
      align-items: center;
      justify-content: center;
      display: flex;
      padding-bottom: 20px;
      flex-basis: auto;
      h1 {
        max-width: 80%;
        font-size: 17px;
      }
    }
    &.center {
      margin: auto;
      width: 250px;
      background-color: white;
      min-height: 120px;
      border-radius: 10px;
      flex: none;
    }
    &.content {
      /* flex: 1 1 calc(100% - 0em);
      max-width: calc(100% - 0em);
      height: 100vh; */
      position: fixed;
      top: 0;
      bottom: 50px;
      &.has-menu {
        top: 50px;
      }
    }
    &.data-layout {
      padding: 1em 1em 0px;
      /* max-height: calc(100vh - 113px); */
    }
  }
`,s=i.Ay.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 100%;
  padding: 0;
  &.data-layout {
    padding: 0 !important;
  }
  &.side {
    padding: 1em 1.5em !important;
  }
`;i.Ay.div`
  display: flex;
  flex-direction: row;
`,i.Ay.div`
  display: flex;
  flex-direction: column;
  &.hide {
    display: none;
  }
  p {
    text-align: left;
  }
`,(0,i.Ay)(n.N_)`
  margin: 5px;
  text-decoration: none;
  background-color: #1381c5;
  color: white;
  padding: 5px 15px;
  border-radius: 10px;
  align-items: center;
  display: flex;
  justify-content: center;
  &:first-child {
    margin-left: 0;
  }
  svg {
    margin-right: 10px;
    color: white;
  }
`,i.Ay.div`
  width: 33%;
  text-align: center;
  padding: 40px;
  h4 {
    color: #006dbf;
  }
  p {
    color: #7f7f7f;
    font-size: 16px;
  }
  img {
    height: 70px;
  }
  && {
    .second & {
      width: 50%;
      text-align: left;
      h4 {
        color: inherit;
        margin: 0;
      }
      p {
        text-align: left;
      }
    }
  }
  @media screen and (max-width: 768px) {
    width: calc(100% - 100px);
    margin: 10px;
    h4 {
      color: #006dbf;
      font-size: 26px;
    }
    p {
      color: #7f7f7f;
      font-size: 16px;
    }
  }
`,i.Ay.div`
  position: absolute;
  left: 20px;
  right: 5px;
  top: auto;
  bottom: 0;
  background-color: white;
  min-height: 50%;
  box-shadow: rgb(0 0 0 / 16%) 0px 0px 2px 0px;
  border-radius: 10px 10px 0 0;
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
    cursor: pointer;
  }
  button {
    font-weight: bold;
    margin: auto;
    width: 100%;
    border-radius: 10px;
  }
`},46861:(e,t,r)=>{"use strict";r.d(t,{A0:()=>Ge,BK:()=>oe,JM:()=>b,OC:()=>c,Pz:()=>y,RE:()=>k,US:()=>f,k5:()=>w,o4:()=>h});r(65043);var n=r(94574),i=r(81978),a=r(70579);const o=n.Ay.svg`
  height: 1em;
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  &.rotate-icon {
    animation: rotate 2s linear infinite; /* Adjust the duration and easing as necessary */
  }
  padding: 20px 24px;
  height: 80px;
  display: flex;
  border-bottom: 1px solid rgb(226, 228, 233);
  @media (max-width: 768px) {
    padding: 0px 1em;
  }
`,Te=De.Ay.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  border: 1px solid rgb(217, 217, 217);
  flex-direction: column;
  border-radius: 18px;
  height: 35px;
  padding-left: 10px;
  padding: 4px 8px 4px 0px;
  gap: 6px;
  border-radius: 10px;
  border: 1;
  opacity: 0px;

  position: relative;
  cursor: pointer;
  flex-direction: row;
  i {
    margin-right: 5px;
    font-style: normal;
    color: #555555;
    font-size: 14px;
    font-weight: 500;
    line-height: 16.94px;
    letter-spacing: -0.006em;
    text-align: left;
    color: ${Qe.D.text.main};
  }
  img {
    width: 100%;
    height: 100%;
    margin: 0px;
    object-fit: cover;
    border-radius: 50%;
  }
  > span {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    padding: 3px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h6 {
    text-align: center;
    padding: 0;
    margin: 0;
    margin-bottom: 10px;
    font-size: 15px;
  }
  > .ProfileBar {
    position: absolute;
  }
  @media (max-width: 768px) {
    padding: 15px 0px 15px 15px;
    height: 10px;
    &.vertical {
      flex-direction: column;
    }
  }
`,Fe=De.Ay.img`
  height: 36px;
  max-width: 90%;
  object-fit: contain;
  width: fit-content;
  padding-left: 0em;
  padding-top: 0em;
  margin-bottom: 0px;
  transition: all 0.2s ease 0s;
  @media screen and (max-width: 768px) {
    padding-left: 0;
    padding-top: 0;
    margin-bottom: 0;
  }
`,Oe=(De.Ay.div`
  display: flex;
  flex: 1 1 15em;
  display: flex;
  justify-content: left;
  align-items: center;
  padding-left: 10px;
  @media screen and (max-width: 768px) {
    justify-content: right;
    padding-right: 15px;
    justify-content: space-between;
  }
`,De.Ay.div`
  flex: 1 1 calc(100% - 15em);
  display: flex;
  justify-content: left;
  align-items: center;
  padding-right: 0px;
  @media screen and (max-width: 768px) {
    &.hm {
      display: none;
    }
  }
`),Me=(De.Ay.div`
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0px;
  margin-right: 10px;
  &.navicon {
    display: none;
  }
  @media screen and (max-width: 768px) {
    margin-right: 10px;
    &.navicon {
      display: flex;
      margin-right: 0;
      padding-left: 5px;
    }
    display: flex;
    padding-left: 15px;
    font-size: 25px;

    &.navicon::after {
      content: "";
      width: 1px;
      height: 20px;
      margin-right: 0px;
      margin-left: 13px;
      background: lightgrey;
    }
  }
`,De.Ay.div`
  margin-right: auto;
  font-weight: bold;
  svg {
    margin-right: 10px;
  }
  @media screen and (max-width: 768px) {
    img {
      height: 45px;
    }
  }
`),Ne=(De.Ay.div`
  margin-right: 1em;
`,De.Ay.div`
  color: black;
  cursor: pointer;
  display: flex;
  padding: 10px;
  font-size: 12px;
  justify-content: center;
  align-items: center;
  background: rgb(228, 228, 228);
  border-radius: 12px;
  a {
    text-decoration: none;
    color: black;
  }
  svg {
    margin-right: 10px;
  }
  &:hover {
    background-color: ${e=>e.theme.theme};
    color: white;
  }
  @media screen and (max-width: 768px) {
    border-radius: 4px;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    height: 25px;
    cursor: pointer;
    text-transform: uppercase;
  }
`);De.Ay.div`
  margin-right: 2px;
  margin-top: 5px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  display: none;
  color: black;
  a {
    text-decoration: none;
  }
  svg {
    margin-right: 10px;
  }
  @media screen and (max-width: 768px) {
    margin-left: auto;
    display: flex;
    border: 1px solid;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25px;
    width: 25px;
    cursor: pointer;
    text-transform: uppercase;
    svg {
      margin: auto;
    }
  }
`;var je=r(41210);function Le(){let e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return(0,f.jsx)("span",{className:"pic",children:(0,f.jsx)("img",{src:(null===e||void 0===e?void 0:e.length)>5?`https://event-manager.syd1.cdn.digitaloceanspaces.com/${e}`:je.gU,alt:"P"})})}var Ue=r(46861),Re=r(35190);const Pe=e=>{var t,r,i,o;let{data:s,setLoaderBox:l,setMessage:c,close:A}=e;const u=s.user,d=(0,a.d4)((e=>e.themeColors)),h=(0,n.Zp)(),p=(0,a.wA)();return(0,f.jsxs)(Ie.dY,{className:"ProfileBar",children:[(0,f.jsxs)(Ie.Ej,{theme:d,children:[(0,f.jsx)("div",{className:"banner",children:(0,f.jsx)(Ie.n_,{children:Le(null!==(t=null!==(r=null===u||void 0===u?void 0:u.fullName)&&void 0!==r?r:u.username)&&void 0!==t?t:"",!0,null!==(i=u.photo)&&void 0!==i?i:"")})}),(0,f.jsx)("span",{className:"main",children:null!==(o=u.fullName)&&void 0!==o?o:u.username}),(0,f.jsx)("span",{className:"sub",children:u.email})]}),(0,f.jsxs)(Ie.i5,{children:[(0,f.jsxs)(Ne,{theme:d,onClick:()=>{h("/profile-settings")},children:[(0,f.jsx)(Ue.A0,{icon:"settings"}),"Settings"]}),(0,f.jsxs)(Ne,{theme:d,onClick:()=>{p((0,Re.T8)()),h("/")},children:[(0,f.jsx)(Ue.o4,{}),"Signout"]})]})]})},He=t=>{var r,n,i,a,o,s,l,c;const[A,u]=(0,e.useState)(!1),d=(0,e.useRef)(null),h=e=>{d.current&&!d.current.contains(e.target)&&u(!1)};(0,e.useEffect)((()=>(document.addEventListener("click",h),()=>{document.removeEventListener("click",h)})),[]);return(0,f.jsx)(_e,{children:(0,f.jsxs)(Oe,{children:[(0,f.jsx)(Me,{children:(0,f.jsx)(Fe,{src:je.wm,alt:"logo"})}),(0,f.jsxs)(Te,{ref:d,onClick:()=>{u(!A)},children:[Le(null!==(r=null!==(n=null===(i=t.user.user)||void 0===i?void 0:i.fullName)&&void 0!==n?n:null===(a=t.user.user)||void 0===a?void 0:a.username)&&void 0!==r?r:"",null,null!==(o=t.user.user.photo)&&void 0!==o?o:""),(0,f.jsx)("i",{children:null!==(s=null===(l=t.user.user)||void 0===l?void 0:l.fullName)&&void 0!==s?s:null===(c=t.user.user)||void 0===c?void 0:c.username}),(0,f.jsx)(Ue.A0,{icon:"down-small"}),A&&(0,f.jsx)("div",{className:"ProfileBar",onClick:e=>e.stopPropagation(),children:(0,f.jsx)(Pe,{close:()=>u(!1),setLoaderBox:t.setLoaderBox,setMessage:t.setMessage,data:t.user})})]})]})})},ze=De.Ay.footer`
  display: flex;
  align-items: flex-end;
  margin-top: auto;
  padding: 0;
`,Ve=(De.Ay.nav`
  display: flex;
  flex-direction: column;
  color: ${e=>e.theme.secForeground};

  a {
    text-decoration: none;
    padding: 0.5em 1em;
    color: ${e=>e.theme.secForeground};
    text-transform: uppercase;
    height: 30px;
    display: flex;
    justify-content: left;
    align-items: center;
  }
  a:hover {
    background: rgb(2, 0, 36);
    background: linear-gradient(
      102deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(25, 138, 214, 1) 0%,
      rgba(8, 34, 95, 0) 83%
    );
    box-shadow: rgb(0 0 0 / 16%) -1px 0px 4px;
  }
  a svg {
    margin-right: 10px;
  }
`,()=>(0,f.jsx)(ze,{})),Ge=(De.Ay.div`
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #e2e4e9;
  margin-bottom: 20px;
  padding: 20px;
  margin: 20px;
  &.hd {
    justify-content: space-between;
    align-items: center;
  }
  @media (min-width: 768px) {
    &.hd {
      display: none;
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`,De.Ay.nav`
  padding-top: 0em;
  display: flex;
  flex-direction: column;
  color: gray;
  padding-bottom: 1em;
  /* overflow-y: auto; */
  font-weight: 500;
  padding: 5px 0;
  gap: 4px;
  a.main,
  .open {
    text-decoration: none;
    color: gray;
    height: 35px;
    display: flex;
    justify-content: left;
    align-items: center;
    transition: all 0.02s;
    position: relative;
    margin: 0px;
    border-radius: 8px;
    font-size: 14px;
    gap: 8px;
    min-height: 36px;
    transition: all 0.2s ease-in;
  }
  && {
    .down {
      a.main span,
      .open span {
        padding-right: 1em;
      }
    }
  }

  a.open {
    cursor: unset;
  }
  a.main.active,
  a.main:hover {
    background: #f6f8fa;
    color: ${e=>e.theme.theme};
    /* box-shadow: rgba(0, 0, 0, 0.16) -1px 0px 4px; */
    font-weight: normal;
    span {
      color: black;
    }
    opacity: 1;
  }
  a.main.active:after {
    content: "";
    display: block;
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
    width: 6px;
    height: 6px;
    border-top: 1px solid black;
    border-right: 1px solid black;
    transition: all 0.02s;
  }
  a.main.active::before {
    content: "";
    display: block;
    position: absolute;
    left: 0px;
    background: ${e=>e.theme.theme};
    width: 5px;
    height: 20px;
    border-radius: 0 10px 10px 0;
    transition: all 0.02s;
  }
  .down a.main.active:first-child,
  .down a.main:hover:first-child {
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }
  .down a.main.active:last-child,
  .down a.main:hover:last-child {
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }
  a.main svg,
  .open svg {
    transition: all 0.02s;
    /* width: 20px; */
    margin-left: 14px;
    transition: all 0.2s ease-in;
  }
  a.main.active svg,
  a.main:hover svg {
    transform: scale(1.1);
  }
  @media (max-width: 768px) {
    /* box-shadow: 1px -1px 11px 0 rgba(0, 0, 0, 0.07); */
    border-top: 1px solid ${Qe.D.stroke.soft};
    position: fixed;
    bottom: 0;
    z-index: 1001;
    background: white;
    left: 0;
    right: 0;
    height: 50px;
    display: flex;
    flex-direction: row;
    padding: 0;
    overflow: auto;
    .menu-item {
      padding: 0;
      margin: 0;
      height: 49px;
      width: 20%;
      display: flex;
      align-items: center;
    }
    a.main svg,
    .open svg {
      transition: all 0.02s;
      margin-right: 0px;
      width: 30px;
      margin-left: inherit;
    }
    a.main,
    .open {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 5px;
      padding: 0;
      width: 70px;
      overflow: hidden;
      height: 50px;
      border-radius: 0;
      svg {
      }
      span {
        padding: 0;
        overflow: hidden;
        font-size: 10px;
        white-space: nowrap;
        text-align: center;
        max-width: 95%;
        text-overflow: ellipsis;
      }
    }
    a.main.active:after {
      content: "";
      display: none;
    }
    a.main.active::before {
      content: "";
      display: block;
      position: absolute;
      left: 0px;
      top: 0;
      right: 0;
      background: ${e=>e.theme.theme};
      width: 100%;
      height: 2px;
      border-radius: 0 10px 10px 0;
      transition: all 0.02s;
    }
  }
`),Ye=De.Ay.div`
  padding: 10px;
  font-size: 12px;
  -webkit-box-align: center;
  align-items: center;
  display: flex;
  padding-top: 20px;
  @media (max-width: 768px) {
    padding: 10px 1em;
    font-weight: bold;
  }
`,We=De.Ay.nav`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  width: calc(20em - 90px);
  border-right: 1px solid #e2e4e9;
  height: 100%;
  padding: 10px;
  gap: 4px;
  a {
    padding: 10px;
    text-decoration: none;
    display: flex;
    gap: 10px;
    text-decoration: none;
    display: flex;
    justify-content: left;
    align-items: center;
    transition: all 0.02s;
    position: relative;
    border-radius: 10px;
    color: black;
    color: gray;
    font-size: 14px;
  }
  a:hover,
  a.active {
    background: #f6f8fa;
    svg {
      color: ${e=>e.theme.theme};
      font-weight: bold;
    }
    span {
      padding-right: 15px;
      color: black;
    }
  }
  a.active:after {
    content: "";
    display: block;
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px; /* Adjust size as needed */
    height: 20px; /* Adjust size as needed */
    background: white;
    border-radius: 50%;
    /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); */
    transition: all 0.02s;
    @media (max-width: 768px) {
      height: 1px;
      width: 100%;
      bottom: 0;
      top: auto;
      background-color: ${Qe.D.stroke.strong};
      border-radius: 0;
      right: 0;
      left: 0;
    }
  }
  a.active::before {
    content: "";
    position: absolute;
    right: 22px; /* Adjust to center within the circle */
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
    width: 6px;
    height: 6px;
    border-top: 2px solid black;
    border-right: 2px solid black;
    z-index: 1;
    transition: all 0.02s;
  }
  @media (max-width: 768px) {
    z-index: 100;
    left: 0;
    right: 0;
    top: 0;
    width: 100%;
    background: white;
    display: flex;
    flex-direction: initial;
    padding: 0;
    box-shadow: none;
    width: 100%;
    overflow: auto;
    gap: 15px;
    height: 50px;
    padding-right: 0px;
    :before {
      content: "";
      display: block;
      border-radius: 3px;
      background: #dbdbdb;
      transition: all 0.02;
      height: 1px;
      margin-left: 0;
      position: absolute;
      margin-top: 1px;
      left: 10px;
      right: 10px;
      display: none;
    }
    a {
      width: auto;
      white-space: nowrap;
      padding: 10px 0.5em;
      color: #9797bc;
      height: 50px;
    }
    a span {
      padding-right: 5px !important;
      color: black;
    }

    a:hover,
    a.active {
      color: ${e=>e.theme.theme};
      /* font-weight: bold; */
      opacity: 1;
      background: transparent;
      box-shadow: none;
    }
    a.active::before {
      display: none;
    }
  }
`,Ke=(De.Ay.nav`
  margin-left: 1em;
  margin-right: 1em;
  padding-left: 0em;
  border: 1px solid #f2e5e5;
  border-radius: 12px;
  box-shadow: rgb(0 0 0 / 8%) 0px 0px 10px 2px;
  &.close {
    display: none;
  }
  a {
    border-bottom: 1px solid rgb(241 241 241);
  }
  a:last-child {
    border-bottom: 0;
  }
`,De.Ay.div`
  cursor: pointer;
  transition: all 0.02s;
  svg:last-child {
    margin-left: auto;
  }
  &.active svg:last-child {
    transform: rotate(180deg) scale(1.1);
    font-weight: bold;
    opacity: 1;
  }
`,De.Ay.div`
  z-index: 100;
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  width: 100%;
  background: white;

  flex-direction: initial;
  padding: 0px;
  overflow: auto;
  flex-direction: column;
  /* box-shadow: 0px 2px 7px 0 rgba(0, 0, 0, 0.07); */
  border-right: 1px solid #e2e4e9;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    border: 0px solid #e2e4e9;
    border-bottom: 1px solid ${Qe.D.stroke.soft};
  }
`),qe=t=>{const r=(0,a.d4)((e=>e.themeColors)),n=(0,a.d4)((e=>e.selectedMenu)),[o]=(0,e.useState)(t.user.menu),d=(0,a.wA)();return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(Ge,{theme:r,children:null===o||void 0===o?void 0:o.map((e=>{var r,a,o;return(0,f.jsx)("div",{className:"menu-item",children:e.submenus.length>0&&(null===(r=e.showInMenu)||void 0===r||r)?(0,f.jsxs)(i.N_,{onClick:()=>{d(u(e)),d(c(e._id)),e.submenus[0]&&(d(s(!1)),d(c(e.submenus[0]._id)),d(A(e.submenus[0])),d(l(e.submenus[0].label)))},className:""+(e._id===n._id||n.menu===e._id?"main active":"main"),to:null===(a=e.submenus[0])||void 0===a?void 0:a.path,children:[(0,f.jsx)(Ue.A0,{icon:e.icon}),t.isMobile?(0,f.jsx)("span",{children:e.label.substring(0,-1!==e.label.indexOf(" ")?e.label.indexOf(" "):e.label.length)}):(0,f.jsx)("span",{children:e.label})]}):null===(o=e.showInMenu)||void 0===o||o?(0,f.jsxs)(i.N_,{onClick:()=>{d(s(!1)),d(u(null)),d(A(e)),d(l(e.label))},className:e._id===n._id?"main active":"main",to:e.path,children:[(0,f.jsx)(Ue.A0,{icon:e.icon}),t.isMobile?(0,f.jsx)("span",{children:e.label.substring(0,-1!==e.label.indexOf(" ")?e.label.indexOf(" "):e.label.length)}):(0,f.jsx)("span",{children:e.label})]}):null},e._id)}))})})},Ze=De.Ay.div`
  position: fixed;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgb(0 0 0 / 12%);
  z-index: 2000;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  p {
    background-color: red;
    margin: auto;
    color: white;
    padding: 10px;
    border-radius: 5px;
  }
`,Je=()=>{const[t,r]=(0,e.useState)(window.navigator.onLine);return(0,e.useEffect)((()=>{const e=()=>{r(!0)},t=()=>{r(!1)};return window.addEventListener("online",e),window.addEventListener("offline",t),()=>{window.removeEventListener("online",e),window.removeEventListener("offline",t)}}),[]),!t&&(0,f.jsx)(Ze,{children:(0,f.jsx)("p",{children:"No internet connection. Please check your connection."})})};var Xe=r(24858),$e=r(83150),et=r(64527),tt=r(93245),rt=r(57658),nt=r(55316),it=r(38520);const at=De.Ay.div`
  display: flex;
  position: absolute;
  top: ${e=>e.top||"auto"};
  bottom: ${e=>e.bottom||"auto"};
  font-size: ${e=>e.xfontSize||"inherit"};
  left: ${e=>e.left||"auto"};
  right: ${e=>e.right||"auto"};
  align-items: ${e=>"center"===e.align?"center":"auto"};
  text-align: ${e=>"center"===e.align?"center":"auto"};
  justify-content: ${e=>"center"===e.align?"center":"auto"};
  font-weight: ${e=>e.xfontWeight||"normal"};
  color: ${e=>e.color||""};
  width: ${e=>e.xWidth||"auto"};
  height: ${e=>e.xHeight||"auto"};
  &.BackgroundImage {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &.BackgroundGradient {
  }
  &.Text {
    overflow: hidden;
    max-width: -webkit-fill-available;
    /* margin-right: 10px; */
    /* white-space: nowrap; */
  }
  &.Image {
  }
  &.Qr {
    svg {
      position: absolute;
      height: 100px;
      width: 100px;
      background: white;
      border: 0px solid white;
      border-radius: 0px;
    }
  }
`,ot=De.Ay.div`
  display: flex;
  position: relative;
`,st=De.Ay.div`
  display: flex;
  overflow: auto;
  width: 400px;
  max-width: 95%;
  -webkit-box-pack: justify;
  justify-content: space-between;
  margin: auto;
  background: #dfdfdf;
  padding: 5px 10px;
  align-items: center;
  border-radius: 10px;
  font-weight: 600;
  min-height: 50px;
  div {
    display: flex;
    gap: 5px;
  }
  &.plain {
    background-color: transparent;
    border-bottom: 1px solid #dfdfdf;
    margin-bottom: 20px;
    margin-top: 10px;
    font-weight: bold;
    font-size: 20px;
    border-radius: 0;
  }
`,lt=De.Ay.div`
  display: flex;
  position: relative;
  width: 400px;
  max-width: 95%;
  -webkit-box-pack: justify;
  justify-content: space-between;
  margin: auto auto 30px;
  flex-direction: column;
  border: 1px solid #dfdfdf;
  border-radius: 10px;
  margin-top: 10px;
  padding-bottom: 20px;
`,ct=t=>{let{config:r,bookedData:n,theme:i}=t;const a=(0,e.useRef)([]),o=(e,t)=>{a.current[e]&&nt.$E(a.current[e],{foreignObjectRendering:!1}).then((e=>{const r=document.createElement("a");r.href=e,r.download=`IDCARD-${t}.png`,r.click()})).catch((e=>{console.error("Failed to generate image",e)}))},[s]=(0,e.useState)([]);return(0,f.jsxs)(e.Fragment,{children:[(0,f.jsx)("div",{style:{textAlign:"center",fontWeight:"bold",padding:"20px",display:"none",justifyContent:"center",marginBottom:10,marginTop:0},children:"The ID card for Main Event!"}),(0,f.jsx)("div",{style:{display:"none",overflow:"auto",justifyContent:"center",marginBottom:0,marginTop:20},children:(0,f.jsx)(ot,{ref:e=>a.current[0]=e,style:{width:"350px",height:"390px",margin:"auto"},children:(0,f.jsx)(e.Fragment,{children:null===s||void 0===s?void 0:s.map(((e,t)=>{switch(e.layerType){case"BackgroundImage":return(0,f.jsx)(at,{className:"BackgroundImage",top:"0px",left:"0px",bottom:"0px",right:"0px",children:(0,f.jsx)("img",{src:"card",alt:"BG"})});case"Text":return(0,f.jsx)(at,{xfontSize:e.fontSize,xfontWeight:e.fontStyle,className:"Text",top:e.top,left:e.left,bottom:e.bottom,right:e.right,align:e.textAlignment.toLowerCase(),color:e.color,xHeight:e.height,xWidth:e.width,children:n[e.source]},t);case"Qr":return(0,f.jsx)(at,{className:"Qr",top:e.top,left:e.left,bottom:e.bottom,right:e.right,align:e.textAlignment.toLowerCase(),children:(0,f.jsx)(tt.Ay,{value:n[e.source]})},t);default:return null}}))})})}),(0,f.jsx)("div",{style:{textAlign:"center",display:"none",justifyContent:"center",marginBottom:10,marginTop:10},children:(0,f.jsx)(rt.$n,{onClick:()=>o(0,n.firstName),style:{padding:"10px 20px",backgroundColor:i.themeColor,color:i.themeTextColor,outline:"none",borderRadius:5,margin:"20px 0px 0px 0px"},children:"Download ID Card/Coupon"})}),(0,f.jsxs)(st,{className:"plain",children:["The ID Cards/Coupon for ",n.event]}),n.idCards.length>0?n.idCards.map(((t,r)=>{var n;return(0,f.jsxs)(e.Fragment,{children:[(0,f.jsxs)(st,{children:[(0,f.jsx)("span",{children:t.ticket})," ",(0,f.jsx)("div",{children:(0,f.jsx)(it.K0,{ClickEvent:()=>o(r+1,t.fullName),icon:"download"})})]}),(0,f.jsx)(lt,{children:(0,f.jsx)("div",{style:{display:"flex",overflow:"auto",justifyContent:"center",marginBottom:0,marginTop:20},children:(0,f.jsx)(ot,{ref:e=>a.current[r+1]=e,style:{width:`${t.width}px`,height:`${t.height}px`,margin:"auto"},children:(0,f.jsx)(e.Fragment,{children:null===(n=t.certificateData)||void 0===n?void 0:n.map(((e,r)=>{var n;switch(e.layerType){case"BackgroundImage":return(0,f.jsx)(at,{className:"BackgroundImage",top:"0px",left:"0px",bottom:"0px",right:"0px",children:(0,f.jsx)("img",{src:`https://event-manager.syd1.cdn.digitaloceanspaces.com/${e.source}`,alt:"BG"})},`bg-${r}`);case"Text":return(0,f.jsx)(at,{xfontSize:e.fontSize,xfontWeight:e.fontStyle,className:"Text",top:e.top,left:e.left,bottom:e.bottom,color:null!==(n=e.color)&&void 0!==n?n:"white",right:e.right,align:e.textAlignment.toLowerCase(),xHeight:e.height,xWidth:e.width,children:t[e.source]},`text-${r}`);case"Qr":return(0,f.jsx)(at,{className:"Qr",top:e.top,left:e.left,bottom:e.bottom,right:e.right,align:e.textAlignment.toLowerCase(),children:(0,f.jsx)(tt.Ay,{value:t._id})},`qr-${r}`);default:return null}}))})})})})]},r)})):null,(0,f.jsx)("div",{style:{textAlign:"center",fontWeight:"bold",padding:"20px",display:"flex",justifyContent:"center",marginBottom:10,marginTop:0},children:n.idCards.length>0?"Note: Please show this ID Card/Coupon as per the request!":(0,f.jsxs)("span",{children:["No Registration found for ",n.event," ",(0,f.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:`${window.location.origin}`,children:"Click here to Register"})]})})]})},At=(0,et.A)((t=>{let{isWhitelisted:r,data:n,config:i,additionalMenus:a,theme:o,id:s,setLoaderBox:l,setMessage:c}=t;return""!==s?i&&n&&(0,f.jsx)(ct,{config:i,bookedData:n,theme:o}):(0,f.jsx)(e.Fragment,{children:null===r?(0,f.jsx)(d.A,{}):r?"admin"===n.route?(0,f.jsx)(Xe.A,{setMessage:c,setLoaderBox:l}):(0,f.jsx)(ct,{config:i,bookedData:n,theme:o}):(0,f.jsx)($e.YQ,{style:{margin:"auto",display:"flex",height:"100vh",flexDirection:"column",gap:"10px"},className:"noshadow white-list",children:"The link is not found!"})})}))("whitelisted-domains/id-card");var ut=r(94988);const dt=De.Ay.div`
  background: -webkit-linear-gradient(302deg, ${Qe.D.primary.base}, rgb(90, 169, 230) 100%);
  border-radius: 12px;
  color: white;
  margin: 20px 20px 0;
  .data {
    display: flex;
    justify-content: left;
    -webkit-box-align: center;
    align-items: center;
    padding: 10px 10px;
    gap: 10px;
  }
  .pic img {
    width: 80px !important;
    float: left;
    height: 80px !important;
    background-repeat: inherit;
    text-align: center;
    background-position: center;
    margin: auto;
    border-radius: 50%;
    border: 3px solid white;
    background-size: cover;
    margin: 10px;
    object-fit: cover;
    object-position: center;
  }
  h2 {
    width: 100%;
    float: left;
    margin: auto;
    font-weight: 600;
    font-size: 20px;
  }
  h3 {
    width: 100%;
    float: left;
    font-size: 13px;
    font-weight: normal;
    margin: auto;
    margin-top: 5px;
  }
`;var ft=r(36824),ht=r(75374),pt=r(8075);const gt=e=>(0,f.jsxs)(it.S$,{className:" column",children:[(0,f.jsx)(pt.z,{title:"Reset Your Password"}),(0,f.jsx)(ht.A,{useCaptcha:!1,useCheckbox:!1,customClass:"",description:"",formValues:{},formMode:"",formType:"post",header:"Reset Your Password",css:"plain embed head-hide",formInput:[{type:"password",placeholder:"Old Password",name:"oldPassword",validation:"",info:"At least one uppercase letter (A-Z) \n At least one lowercase letter (a-z) \n At least one digit (0-9) \n At least one special character (@, $, !, %, *, ?, &) \n Minimum length of 8 characters",default:"",label:"Old Password",minimum:0,maximum:16,required:!0,add:!0},{type:"password",placeholder:"New Passoword",name:"newPassword",validation:"password-match",info:"At least one uppercase letter (A-Z) \n At least one lowercase letter (a-z) \n At least one digit (0-9) \n At least one special character (@, $, !, %, *, ?, &) \n Minimum length of 8 characters",default:"",label:"New Passoword",minimum:0,maximum:16,required:!0,add:!0},{type:"password",placeholder:"Confirm Passoword",name:"confirmPassword",validation:"password-match",info:"At least one uppercase letter (A-Z) \n At least one lowercase letter (a-z) \n At least one digit (0-9) \n At least one special character (@, $, !, %, *, ?, &) \n Minimum length of 8 characters",default:"",label:"Confirm Passoword",minimum:0,maximum:16,required:!0,add:!0}],submitHandler:async e=>{(await(0,ft.LS)(e,"user/update-password")).status},button:"Reset Password",isOpenHandler:e=>{},isOpen:!0,plainForm:!1},"change-password")]});var mt=r(71341);const vt=e=>{var t,r,n,i;return[{name:"a-unique-name-for-tab-1",title:"Profile",content:(0,f.jsxs)(it.S$,{className:"column",children:[(0,f.jsx)(pt.z,{title:"Personal Details"}),(0,f.jsx)(it.U$,{title:"Name",value:null!==(t=e.fullName)&&void 0!==t?t:"Not Found"}),(0,f.jsx)(it.U$,{title:"Email",value:null!==(r=e.email)&&void 0!==r?r:"No Found"}),(0,f.jsx)(it.U$,{title:"Franchise",value:null!==(n=e.franchise)&&void 0!==n?n:"No Found"}),(0,f.jsx)(it.U$,{title:"Your Role",value:null!==(i=e.userType.role)&&void 0!==i?i:"No Found"})]}),icon:"user"}]},yt=(0,ut.A)((t=>{var r,i,o,s,l,c;const A=(0,a.d4)((e=>e.themeColors)),u=(0,a.d4)((e=>e.login)),[d,h]=(0,e.useState)(null),p=(0,n.Zp)();return(0,e.useEffect)((()=>{document.title=`Profile - ${Qe.t.title}`,h(u.data.user)}),[u]),d&&(0,f.jsx)(mt.A,{popupData:(0,f.jsxs)(it.S$,{className:"custom column",children:[(0,f.jsx)(dt,{theme:A,children:(0,f.jsxs)("div",{className:"data",children:[Le(null!==(r=null!==(i=null===d||void 0===d?void 0:d.fullName)&&void 0!==i?i:null===d||void 0===d?void 0:d.username)&&void 0!==r?r:"",null,null!==(o=d.photo)&&void 0!==o?o:""),(0,f.jsxs)("div",{className:"address",children:[(0,f.jsx)("h2",{children:null!==(s=d.fullName)&&void 0!==s?s:"No Found"}),(0,f.jsx)("h3",{children:null!==(l=d.email)&&void 0!==l?l:"No Found"}),(0,f.jsx)("h3",{children:null!==(c=d.userType.role)&&void 0!==c?c:"No Found"})]})]})}),(0,f.jsx)(it.E2,{tabs:[...vt(d),{name:"a-unique-name-for-tab-2",title:"Security Settings",content:(0,f.jsx)(gt,{}),icon:"password"}]})]}),themeColors:A,closeModal:()=>p(-1),itemTitle:{name:"title",type:"text",collection:""},openData:{data:{_id:"print_preparation",title:"Profile Settings"}},customClass:"full-page"})})),bt=()=>[(0,f.jsx)(n.qh,{path:"/my-id-card/:event/:slug",element:(0,f.jsx)(At,{})},"id-card"),(0,f.jsx)(n.qh,{path:"/profile-settings",element:(0,f.jsx)(yt,{})},"profile")];var wt=r(14850),xt=r(96816),Ct=r(30809),Bt=r(8289),Et=r(86178),kt=r.n(Et),It=r(91838);const St=De.Ay.div`
  display: flex;
  justify-content: left;
  gap: 30px;
  align-items: stretch;
  flex-wrap: wrap;
  width: 100%;
  &.vertical {
    flex-wrap: wrap;
    justify-content: center;
    padding-left: inherit;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
  }
  @media (max-width: 768px) {
    align-items: stretch;
    padding-left: 20px;
    padding-right: 20px;
    &.vertical {
      padding: 0;
    }
  }
`,Dt=De.Ay.div`
  position: relative;
  color: inherit; /* Use the default text color */
  text-decoration: none; /* Remove underline */
  width: calc(50% - 15px); /* Adjusted for the gap */
  margin-right: 0px; /* Spacing between the divs */
  margin-bottom: 10px; /* Spacing between rows */
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 12.63157844543457px 25.26315689086914px 0px #0000001a;
  padding: 0;
  border-radius: 12px;
  margin: 10px 0;
  background-color: white;
  img {
    max-width: 100%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-bottom-left-radius: 12px;
    border-top-left-radius: 12px;
  }

  > h2 {
    margin-top: 20px;
    margin-bottom: 0px;
    font-size: 20px;
    font-weight: bold;
    color: ${e=>{var t;return null===(t=e.event)||void 0===t?void 0:t.themeColor}};
  }

  > div > p {
    font-size: 12px;
    font-weight: thin;
    margin-top: 10px;
    color: grey;
  }
  @media (max-width: 768px) {
    flex: 0 0 100%;
    min-width: 100%;
    max-width: 100%;
    margin: 0px 0;
    padding: 0px;
    &.vertical {
      flex: 0 0 calc(100% - 30px);
      max-width: calc(100% - 30px);
      min-width: calc(100% - 30px);
    }
    img {
      max-width: 100%;
      object-fit: cover;
      border-bottom-left-radius: 12px;
      border-top-left-radius: 12px;
    }
  }
`,Qt=(0,De.Ay)(i.N_)`
  font-weight: normal;
  text-decoration: none;
  font-size: 14px;
`,_t=De.Ay.div`
  text-align: left;
  margin: 20px auto 0px;
  padding: 0px;
  width: 100%;
  div {
    font-size: 30px;
  }
  p {
    font-weight: lighter;
  }
  @media (max-width: 768px) {
    margin: auto;
    max-width: 70%;
    text-align: center;
  }
`,Tt=De.Ay.div`
  flex: 40%;
  position: relative;
  height: 360px;
  border-bottom-left-radius: 12px;
  border-top-left-radius: 12px;
  svg {
    position: absolute;
    right: -10px;
    height: 200p;
    top: 0;
    bottom: 0;
  }
`,Ft=De.Ay.div`
  flex: 1 1 60%;
  padding: 20px;
  justify-content: flex-start;
  display: flex;
  flex-direction: column;
  align-items: self-start;
  text-align: left;
  align-self: flex-start;
  cursor: initial;
  height: 100%;
  > h4 {
    background-color: #e3e3e3;
    padding: 5px 10px;
    border-radius: 8px;
    font-weight: lighter;
    font-size: 14px;
  }
  > h2,
  .h2 {
    color: ${e=>e.event.themeColor};
    margin-top: 10px;
    font-size: 20px;
    font-weight: bold;
  }
  > div {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    margin-top: auto;
  }
  p {
    margin-top: 10px;
    font-size: 15px;
    font-weight: lighter;
  }
  .action {
    background-color: ${e=>e.event.secondaryColor};
    color: ${e=>e.event.secondaryTextColor};
    outline: none;
    border: none;
    padding: 15px 20px;
    min-width: 100px;
    cursor: pointer;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    gap: 10px;
    border-radius: 9px;
  }

  .remove {
    background-color: gray;
  }
  h3 {
    border-width: 1px 0px 1px 0px;
    border-style: solid;
    padding: 10px 0;
    border-color: lightgrey;
    font-weight: lighter;
    font-size: 15px;
    width: 100%;
  }
  @media (max-width: 768px) {
    h2 {
      font-size: 17px;
    }
    p {
      font-size: 12px;
    }
    h3 {
      font-size: 10px;
    }
    > div {
      flex-direction: column;
    }
  }
`,Ot=De.Ay.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  font-weight: lighter;
  margin-top: 10px;
  div {
    border: 1px solid lightgray;
    padding: 10px 20px;
    border-radius: 12px;
    &.active {
      background-color: ${e=>e.event.themeColor};
      color: ${e=>e.event.themeTextColor};
    }
  }
  @media (max-width: 768px) {
    margin-left: 20px;
    white-space: nowrap;
    overflow: auto;
    width: calc(100% - 20px);
  }
`,Mt=t=>{var r,n;let{id:i,items:a=[],event:o,theme:s,title:l="Ongoing Events",setLoaderBox:c}=t;const[A,u]=(0,e.useState)("All"),[d]=(0,e.useState)(["All","Registered","Not Registered"]),[h,p]=(0,e.useState)(null!==(r=JSON.parse(localStorage.getItem("--token")))&&void 0!==r?r:null),[g,m]=(0,e.useState)(!1),[v,y]=(0,e.useState)(a);return(0,f.jsxs)(Bt.w,{id:i,className:"padding",children:[(0,f.jsxs)(Bt.m,{className:"column",children:[(0,f.jsxs)(_t,{children:[(0,f.jsxs)("div",{children:[l," "]}),(0,f.jsx)("p",{children:`Total ${null!==(n=a.length)&&void 0!==n?n:0} ongoing Events `})]}),(0,f.jsx)(Ot,{event:o,children:d.map(((e,t)=>(0,f.jsx)("div",{onClick:()=>u(e),className:A===e?"active":"",children:e},t)))})]}),(0,f.jsx)(Bt.m,{id:"countItem",className:`${s} `,children:(0,f.jsxs)(St,{children:[v.filter((e=>"Registered"===A?e.registered:"Not Registered"!==A||!e.registered)).map(((e,t)=>{var r,n,i;return(0,f.jsxs)(Dt,{id:`countItem-${t}`,className:`${s} `,event:o,children:[(0,f.jsxs)(Tt,{children:[(0,f.jsx)("img",{onError:e=>e.target.src="https://event-manager.syd1.cdn.digitaloceanspaces.com/"+o.banner,src:"https://event-manager.syd1.cdn.digitaloceanspaces.com/"+e.thumbnail,alt:e.title}),(0,f.jsxs)("svg",{width:"17",height:"359",viewBox:"0 0 17 359",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,f.jsx)("circle",{cx:"8.20225",cy:"8.20225",r:"8.20225",fill:"white"}),(0,f.jsx)("circle",{cx:"8.20225",cy:"29.6068",r:"8.20225",fill:"white"}),(0,f.jsx)("circle",{cx:"8.20225",cy:"51.0112",r:"8.20225",fill:"white"}),(0,f.jsx)("circle",{cx:"8.20225",cy:"72.4157",r:"8.20225",fill:"white"}),(0,f.jsx)("circle",{cx:"8.20225",cy:"93.8202",r:"8.20225",fill:"white"}),(0,f.jsx)("circle",{cx:"8.20225",cy:"115.225",r:"8.20225",fill:"white"}),(0,f.jsx)("circle",{cx:"8.20225",cy:"136.629",r:"8.20225",fill:"white"}),(0,f.jsx)("circle",{cx:"8.20225",cy:"158.034",r:"8.20225",fill:"white"}),(0,f.jsx)("circle",{cx:"8.20225",cy:"179.438",r:"8.20225",fill:"white"}),(0,f.jsx)("circle",{cx:"8.20225",cy:"200.843",r:"8.20225",fill:"white"}),(0,f.jsx)("circle",{cx:"8.20225",cy:"222.247",r:"8.20225",fill:"white"}),(0,f.jsx)("circle",{cx:"8.20225",cy:"243.652",r:"8.20225",fill:"white"}),(0,f.jsx)("circle",{cx:"8.20225",cy:"265.056",r:"8.20225",fill:"white"}),(0,f.jsx)("circle",{cx:"8.20225",cy:"286.461",r:"8.20225",fill:"white"}),(0,f.jsx)("circle",{cx:"8.20225",cy:"307.865",r:"8.20225",fill:"white"}),(0,f.jsx)("circle",{cx:"8.20225",cy:"329.27",r:"8.20225",fill:"white"}),(0,f.jsx)("circle",{cx:"8.20225",cy:"350.674",r:"8.20225",fill:"white"})]})]}),(0,f.jsxs)(Ft,{event:o,children:[(null===(r=e.tag)||void 0===r?void 0:r.length)>0&&(0,f.jsx)("h4",{children:e.tag}),(0,f.jsx)(Qt,{to:(null===(n=e.slug)||void 0===n?void 0:n.length)>2?e.slug:`${e._id}`,className:"h2",children:e.title}),(0,f.jsx)("p",{children:e.shortDescription}),(0,f.jsx)("h3",{children:`${kt()(e.startDate).format("MMM DD ddd | h:mmA")} - ${kt()(e.endDate).format("h:mmA")}`}),(0,f.jsxs)("div",{children:[(0,f.jsxs)(Qt,{to:(null===(i=e.slug)||void 0===i?void 0:i.length)>2?e.slug:`${e._id}`,className:"action remove",children:["Details ",(0,f.jsx)(Ue.A0,{icon:"info"})]}),(0,f.jsx)(It.c,{setLoaderBox:c,item:e,event:o,itemsList:v,userToken:h,setItemsList:e=>{y(e)}})]})]})]},t)})),g&&(0,f.jsx)(Ct.A,{setLoaderBox:c,registserHandler:()=>{var e;m(!1),document.body.style.overflow="",p(null!==(e=JSON.parse(localStorage.getItem("--token")))&&void 0!==e?e:null)},event:o})]})})]})};var Nt=r(99566);const jt=t=>{var r;let{data:n,config:i,theme:a,additionalMenus:o,setLoaderBox:s}=t;const[l,c]=(0,e.useState)(!1),[A]=(0,e.useState)([...i,{sequence:8,title:"",showInMenu:!1,type:"footer"}]),[u,d]=(0,e.useState)(null!==(r=JSON.parse(localStorage.getItem("--token")))&&void 0!==r?r:null);return(0,f.jsxs)("div",{style:{width:"100%"},className:"landing",children:[(0,f.jsx)(xt.A,{theme:!0,event:{...n.event,mobBanner:n.event.subPageBanner,banner:n.event.subPageBanner,bannerType:"normal"},registserHandler:()=>{c(!0)},additionalMenus:o,title:u?(0,f.jsxs)("span",{children:["Hello ",u.fullName]}):'"Participate in the Biggest Cultural Activities"',description:u?"You can manage your events here!":"All the events you can participate!",user:u,menuItems:A.filter((e=>e.showInMenu)).map(((e,t)=>({title:e.menuTitle,icon:e.type,onClick:()=>(e=>{const t=document.getElementById(e);console.log("ss",t),t&&t.scrollIntoView({behavior:"smooth",block:"start"})})(`section-${e.sequence}`)})))}),(0,f.jsx)(Mt,{setLoaderBox:s,event:n.event,theme:"theme1",items:i}),(0,f.jsx)(Nt.A,{additionalMenus:o,event:n.event,id:"section-0",theme:a},0),l&&(0,f.jsx)(Ct.A,{setLoaderBox:s,registserHandler:()=>{var e;c(!1),document.body.style.overflow="",d(null!==(e=JSON.parse(localStorage.getItem("--token")))&&void 0!==e?e:null)},event:n.event})]})},Lt=(0,et.A)((t=>{let{isWhitelisted:r,data:n,config:i,additionalMenus:a,theme:o,id:s,setLoaderBox:l}=t;return s?i&&n&&(0,f.jsx)(wt.A,{theme:o,setLoaderBox:l,config:i,data:n}):(0,f.jsx)(e.Fragment,{children:null===r?(0,f.jsx)(d.A,{}):r?"admin"===n.route?(0,f.jsx)($e.YQ,{style:{margin:"auto",display:"flex",height:"100vh",flexDirection:"column",gap:"10px"},className:"noshadow white-list",children:"Page not found!"}):(0,f.jsx)(jt,{setLoaderBox:l,additionalMenus:a,theme:o,config:i,data:n}):(0,f.jsxs)($e.YQ,{style:{margin:"auto",display:"flex",height:"100vh",flexDirection:"column",gap:"10px"},className:"noshadow white-list",children:[(0,f.jsx)("img",{src:je.wm,alt:"EventHex.co"}),"The domain ",window.location.hostname," is not connfigured!"]})})}))("whitelisted-domains/events"),Ut=De.Ay.div`
  width: 100%;
`,Rt=De.Ay.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  gap: 50px;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
    gap: 20px;
    margin-top: 0px;
  }
`,Pt=De.Ay.div`
  flex: 0 0 60%;
  margin-right: 20px;
  img {
    width: 100%;
    max-height: 200px;
    object-fit: cover;
  }
  h2 {
    font-size: 30px;
    font-weight: normal;
  }
  h3 {
    font-size: 15px;
    display: flex;
    gap: 10px;
    svg {
      color: ${e=>e.event.secondaryColor};
    }
  }
  p {
    font-weight: normal;
  }
  @media (max-width: 768px) {
    flex: auto;
  }
`,Ht=De.Ay.div`
  flex: 0 0 30%;
`,zt=De.Ay.div`
  flex: 100%;
  position: relative;
  width: 100%;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  svg {
    position: absolute;
    width: 100%;
    top: auto;
    bottom: -5px;
    left: 0;
    right: 0;
  }
`,Vt=De.Ay.div`
  flex: 1 1 100%;
  padding: 20px;
  justify-content: flex-start;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  align-self: flex-start;
  margin: auto;
  > h4 {
    background-color: #e3e3e3;
    padding: 5px 10px;
    border-radius: 8px;
    font-weight: lighter;
    font-size: 14px;
    margin: 0;
    text-align: center;
  }
  > h2 {
    color: ${e=>e.event.themeColor};
    margin-top: 10px;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
  }
  > p {
    margin-top: 10px;
    font-size: 15px;
    font-weight: lighter;
    text-align: center;
  }
  > .action {
    background-color: ${e=>e.event.secondaryColor};
    color: ${e=>e.event.secondaryTextColor};
    outline: none;
    border: none;
    padding: 15px 20px;
    min-width: 100px;
    cursor: pointer;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    gap: 10px;
    border-radius: 9px;
  }

  .remove {
    background-color: gray;
  }
  > h3 {
    border-width: 1px 0px 1px 0px;
    border-style: solid;
    padding: 10px 0;
    border-color: lightgrey;
    font-weight: lighter;
    font-size: 15px;
    width: 100%;
    text-align: center;
  }
  @media (max-width: 768px) {
    h2 {
      font-size: 17px;
    }
    &.float > .action {
      position: fixed;
      bottom: 20px;
    }
    p {
      font-size: 12px;
    }
    h3 {
      font-size: 10px;
    }
  }
`,Gt=De.Ay.div`
  strong {
    font-size: inherit;
    /* Add any other styles for strong elements */
  }
  h1 {
    font-size: inherit;
  }
  h2 {
    font-size: inherit;
  }
  h3 {
    font-size: inherit;
  }
  h4 {
    font-size: inherit;
  }
  h5 {
    font-size: inherit;
  }
  h6 {
    font-size: inherit;
  }
  p {
    font-size: inherit;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 0.5rem;
    }
  }

  ol {
    font-size: inherit;
  }

  a {
    color: blue;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  div {
    /* Add any styles for div elements */
  }
`,Yt=De.Ay.div`
  position: relative;
  color: inherit; /* Use the default text color */
  text-decoration: none; /* Remove underline */
  width: 100%; /* Adjusted for the gap */
  margin-right: 0px; /* Spacing between the divs */
  margin-bottom: 10px; /* Spacing between rows */
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 12.63157844543457px 25.26315689086914px 0px #0000001a;
  padding: 0;
  border-radius: 12px;
  margin: 10px 0;
  background-color: white;

  img {
    max-width: 100%;
    width: 100%;
    height: 275px;
    object-fit: cover;
    border-bottom-left-radius: 12px;
    border-top-left-radius: 12px;
    object-position: top;
  }

  > h2 {
    margin-top: 20px;
    margin-bottom: 0px;
    font-size: 20px;
    font-weight: bold;
    color: ${e=>{var t;return null===(t=e.event)||void 0===t?void 0:t.themeColor}};
  }

  > div > p {
    font-size: 12px;
    font-weight: thin;
    margin-top: 10px;
    color: grey;
  }
  @media (max-width: 768px) {
    flex: 0 0 100%;
    min-width: 100%;
    max-width: 100%;
    margin: 0px 0;
    padding: 0px;
    &.vertical {
      flex: 0 0 calc(100% - 30px);
      max-width: calc(100% - 30px);
      min-width: calc(100% - 30px);
    }
    img {
      max-width: 100%;
      object-fit: cover;
      border-bottom-left-radius: 12px;
      border-top-left-radius: 12px;
    }
  }
`,Wt=t=>{var r,n,i,a,o;let{data:s,event:l,config:c,theme:A,additionalMenus:u,setLoaderBox:d}=t;const[h,p]=(0,e.useState)(!1),[g,m]=(0,e.useState)([c]),[v]=(0,e.useState)([{sequence:8,title:"",showInMenu:!1,type:"footer"}]),[y,b]=(0,e.useState)(null!==(r=JSON.parse(localStorage.getItem("--token")))&&void 0!==r?r:null);return c&&(0,f.jsxs)(Ut,{className:"landing",children:[(0,f.jsx)(xt.A,{theme:!0,event:{...s.event,mobBanner:null!==(n=null===c||void 0===c?void 0:c.banner)&&void 0!==n?n:s.event.banner,banner:null!==(i=null===c||void 0===c?void 0:c.banner)&&void 0!==i?i:s.event.banner,bannerType:"normal"},registserHandler:()=>{p(!0)},additionalMenus:u,bannerType:"background",text:"All Events",user:y,menuItems:v.filter((e=>e.showInMenu)).map(((e,t)=>({title:e.menuTitle,icon:e.type,onClick:()=>(e=>{const t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth",block:"start"})})(`section-${e.sequence}`)})))}),(0,f.jsx)(Bt.m,{className:"mobile-column",children:(null===c||void 0===c?void 0:c.title)&&(0,f.jsxs)(Rt,{children:[(0,f.jsxs)(Pt,{event:s.event,children:[(0,f.jsx)("h2",{children:c.title}),(0,f.jsxs)("h3",{children:[(0,f.jsx)(Ue.A0,{icon:"date"})," ",`${kt()(c.startDate).format("MMM DD ddd | h:mmA")} - ${kt()(c.endDate).format("h:mmA")}`]}),(0,f.jsxs)("h3",{children:[(0,f.jsx)(Ue.A0,{icon:"location"})," ",c.venue]}),(0,f.jsx)("p",{children:c.description}),(0,f.jsx)(Gt,{dangerouslySetInnerHTML:{__html:c.content}})]}),(0,f.jsx)(Ht,{children:(0,f.jsxs)(Yt,{to:(null===(a=c.slug)||void 0===a?void 0:a.length)>2?c.slug:`${c._id}`,id:"countItem-0",className:`${A} `,event:l,children:[(0,f.jsxs)(zt,{children:[(0,f.jsx)("img",{onError:e=>e.target.src="https://event-manager.syd1.cdn.digitaloceanspaces.com/"+s.event.banner,src:"https://event-manager.syd1.cdn.digitaloceanspaces.com/"+(null!==(o=c.thumbnail)&&void 0!==o?o:s.event.banner),alt:c.title}),(0,f.jsxs)("svg",{width:"359",height:"17",viewBox:"0 0 359 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,f.jsx)("path",{d:"M350.672 16.4045C346.142 16.4045 342.469 12.7322 342.469 8.20226C342.469 3.67229 346.142 1.47719e-05 350.672 1.49699e-05C355.202 1.51679e-05 358.874 3.67229 358.874 8.20226C358.874 12.7322 355.202 16.4045 350.672 16.4045Z",fill:"white"}),(0,f.jsx)("path",{d:"M329.267 16.4045C324.737 16.4045 321.065 12.7322 321.065 8.20226C321.065 3.67228 324.737 1.38363e-05 329.267 1.40343e-05C333.797 1.42323e-05 337.469 3.67229 337.469 8.20226C337.469 12.7322 333.797 16.4045 329.267 16.4045Z",fill:"white"}),(0,f.jsx)("path",{d:"M307.863 16.4045C303.333 16.4045 299.66 12.7322 299.66 8.20226C299.66 3.67228 303.333 1.29007e-05 307.863 1.30987e-05C312.393 1.32967e-05 316.065 3.67228 316.065 8.20226C316.065 12.7322 312.393 16.4045 307.863 16.4045Z",fill:"white"}),(0,f.jsx)("path",{d:"M286.458 16.4045C281.928 16.4045 278.256 12.7322 278.256 8.20226C278.256 3.67228 281.928 1.1965e-05 286.458 1.21631e-05C290.988 1.23611e-05 294.66 3.67228 294.66 8.20226C294.66 12.7322 290.988 16.4045 286.458 16.4045Z",fill:"white"}),(0,f.jsx)("path",{d:"M265.054 16.4045C260.524 16.4045 256.851 12.7322 256.851 8.20226C256.851 3.67228 260.524 1.10294e-05 265.054 1.12274e-05C269.584 1.14255e-05 273.256 3.67228 273.256 8.20226C273.256 12.7322 269.584 16.4045 265.054 16.4045Z",fill:"white"}),(0,f.jsx)("path",{d:"M243.649 16.4045C239.119 16.4045 235.447 12.7322 235.447 8.20226C235.447 3.67228 239.119 1.00938e-05 243.649 1.02918e-05C248.179 1.04898e-05 251.851 3.67228 251.851 8.20226C251.851 12.7322 248.179 16.4045 243.649 16.4045Z",fill:"white"}),(0,f.jsx)("path",{d:"M222.245 16.4045C217.715 16.4045 214.042 12.7322 214.042 8.20226C214.042 3.67228 217.715 9.15819e-06 222.245 9.3562e-06C226.775 9.55421e-06 230.447 3.67228 230.447 8.20226C230.447 12.7322 226.775 16.4045 222.245 16.4045Z",fill:"white"}),(0,f.jsx)("path",{d:"M200.84 16.4045C196.31 16.4045 192.638 12.7322 192.638 8.20226C192.638 3.67228 196.31 8.22257e-06 200.84 8.42058e-06C205.37 8.61859e-06 209.042 3.67228 209.042 8.20226C209.042 12.7322 205.37 16.4045 200.84 16.4045Z",fill:"white"}),(0,f.jsx)("path",{d:"M179.436 16.4045C174.906 16.4045 171.233 12.7322 171.233 8.20225C171.233 3.67228 174.906 7.28695e-06 179.436 7.48496e-06C183.966 7.68297e-06 187.638 3.67228 187.638 8.20226C187.638 12.7322 183.966 16.4045 179.436 16.4045Z",fill:"white"}),(0,f.jsx)("path",{d:"M158.031 16.4045C153.501 16.4045 149.829 12.7322 149.829 8.20225C149.829 3.67228 153.501 6.35133e-06 158.031 6.54934e-06C162.561 6.74735e-06 166.233 3.67228 166.233 8.20225C166.233 12.7322 162.561 16.4045 158.031 16.4045Z",fill:"white"}),(0,f.jsx)("path",{d:"M136.627 16.4045C132.097 16.4045 128.424 12.7322 128.424 8.20225C128.424 3.67228 132.097 5.41571e-06 136.627 5.61372e-06C141.157 5.81173e-06 144.829 3.67228 144.829 8.20225C144.829 12.7322 141.157 16.4045 136.627 16.4045Z",fill:"white"}),(0,f.jsx)("path",{d:"M115.222 16.4045C110.692 16.4045 107.02 12.7322 107.02 8.20225C107.02 3.67228 110.692 4.48009e-06 115.222 4.6781e-06C119.752 4.87611e-06 123.424 3.67228 123.424 8.20225C123.424 12.7322 119.752 16.4045 115.222 16.4045Z",fill:"white"}),(0,f.jsx)("path",{d:"M93.8177 16.4045C89.2878 16.4045 85.6155 12.7322 85.6155 8.20225C85.6155 3.67228 89.2878 3.54447e-06 93.8177 3.74248e-06C98.3477 3.94049e-06 102.02 3.67228 102.02 8.20225C102.02 12.7322 98.3477 16.4045 93.8177 16.4045Z",fill:"white"}),(0,f.jsx)("path",{d:"M72.4132 16.4045C67.8833 16.4045 64.211 12.7322 64.211 8.20225C64.211 3.67227 67.8833 2.60885e-06 72.4132 2.80686e-06C76.9432 3.00487e-06 80.6155 3.67227 80.6155 8.20225C80.6155 12.7322 76.9432 16.4045 72.4132 16.4045Z",fill:"white"}),(0,f.jsx)("path",{d:"M51.0088 16.4045C46.4788 16.4045 42.8065 12.7322 42.8065 8.20225C42.8065 3.67227 46.4788 1.67323e-06 51.0088 1.87124e-06C55.5387 2.06925e-06 59.211 3.67227 59.211 8.20225C59.211 12.7322 55.5387 16.4045 51.0088 16.4045Z",fill:"white"}),(0,f.jsx)("path",{d:"M29.6043 16.4045C25.0743 16.4045 21.402 12.7322 21.402 8.20225C21.402 3.67227 25.0743 7.37608e-07 29.6043 9.35619e-07C34.1343 1.13363e-06 37.8065 3.67227 37.8065 8.20225C37.8065 12.7322 34.1343 16.4045 29.6043 16.4045Z",fill:"white"}),(0,f.jsx)("path",{d:"M8.19981 16.4045C3.66983 16.4045 -0.0024416 12.7322 -0.00244141 8.20225C-0.00244121 3.67227 3.66983 -1.98012e-07 8.19981 0C12.7298 1.98012e-07 16.4021 3.67227 16.4021 8.20225C16.4021 12.7322 12.7298 16.4045 8.19981 16.4045Z",fill:"white"})]})]}),(0,f.jsxs)(Vt,{className:"float",event:s.event,children:[(0,f.jsx)("h4",{children:c.tag}),(0,f.jsx)("h2",{children:c.title}),(0,f.jsx)("p",{children:c.shortDescription}),(0,f.jsx)("h3",{children:`${kt()(c.startDate).format("MMM DD ddd | h:mmA")} - ${kt()(c.endDate).format("h:mmA")}`}),(0,f.jsx)(It.c,{customClass:"float",userToken:y,setLoaderBox:d,item:g[0],event:s.event,itemsList:g,setItemsList:e=>{m(e)}})]})]},0)})]})}),(0,f.jsx)(Nt.A,{additionalMenus:u,event:s.event,id:"section-0",theme:A},0),h&&(0,f.jsx)(Ct.A,{setLoaderBox:d,registserHandler:()=>{var e;p(!1),document.body.style.overflow="",b(null!==(e=JSON.parse(localStorage.getItem("--token")))&&void 0!==e?e:null)},event:s.event})]})},Kt=(0,et.A)((t=>{let{isWhitelisted:r,data:n,config:i,additionalMenus:a,theme:o,slug:s,setLoaderBox:l}=t;return s?i&&n&&(0,f.jsx)(Wt,{setLoaderBox:l,additionalMenus:a,theme:o,config:i,data:n}):(0,f.jsx)(e.Fragment,{children:null===r?(0,f.jsx)(d.A,{}):r?"admin"===n.route?(0,f.jsx)($e.YQ,{style:{margin:"auto",display:"flex",height:"100vh",flexDirection:"column",gap:"10px"},className:"noshadow white-list",children:"Page not found!"}):(0,f.jsx)(d.A,{}):(0,f.jsx)($e.YQ,{style:{margin:"auto",display:"flex",height:"100vh",flexDirection:"column",gap:"10px"},className:"noshadow white-list",children:"Page Not Found!"})})}))("whitelisted-domains/event-details"),qt=De.Ay.div`
  display: flex;
  background: ${e=>e.background};
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
  color: lightgray;
`,Zt=De.Ay.h1`
  margin-bottom: 20px;
  color: lightgray;
`,Jt=De.i7`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`,Xt=De.Ay.div`
  margin: 20px 0;
  animation: ${Jt} 1s infinite; /* Apply the swaling animation */
  text-align: center;
  color: lightgray;
  max-width: 85%;
  .counter {
    font-size: 50px;
  }
  h1 {
    font-size: 60px;
    border: 10px solid lightgray;
    padding: 10px 30px;
  }
  h2 {
    font-size: 100px;
    border: 10px solid lightgray;
    padding: 10px 30px;
    min-width: 500px;
    text-align: center;
  }
  svg:last-child {
    margin-left: 10px;
  }
`,$t=De.Ay.button`
  padding: 10px 20px;
  font-size: 1em;
`,er=t=>{var r;let{eventData:n}=t;const[i,a]=(0,e.useState)(0),[o,s]=(0,e.useState)(""),[l,c]=(0,e.useState)(!1),[A,u]=(0,e.useState)([]),[d,h]=(0,e.useState)(0),[p,g]=(0,e.useState)(0),{event:m}=n;return(0,e.useEffect)((()=>{let e,t,r=Math.floor(200*Math.random())+400;if(l){const n=Math.floor(100*Math.random())+50;e=setInterval((()=>{a(Math.floor(Math.random()*d)+1)}),n);const i=Math.floor(2e3*Math.random())+9e3;let o=0;g(o),setTimeout((()=>{clearInterval(e),a(null);const n=()=>{const e=A[o];o+=1,o<A.length&&(g(o),s(e),c(!0),r+=Math.floor(100*Math.random()),t=setTimeout(n,r))};n();const i=Math.floor(2e3*Math.random())+35e3;setTimeout((()=>{clearTimeout(t),c(!1)}),i)}),i)}return()=>{clearInterval(e),clearTimeout(t)}}),[l,A,d]),(0,f.jsxs)(qt,{background:"url(https://event-manager.syd1.cdn.digitaloceanspaces.com/"+m.luckyDrawBackground+")",children:[(0,f.jsx)(Zt,{children:null===i&&o&&!l?"Lucky Draw Winner is!":l?i?"Taking Random 30 participants..":"Let's count down for the Winner..":"Lucky Draw Spin!"}),null!==i&&(0,f.jsx)(Xt,{children:(0,f.jsx)("h2",{style:{fontSize:"100px"},children:String(i).padStart(6,"0")})}),null===i&&o&&(0,f.jsxs)(Xt,{children:[(0,f.jsx)("h1",{children:o.firstName?o.firstName.toUpperCase():o.authentication.fullName.toUpperCase()}),(0,f.jsxs)("h3",{children:[(0,f.jsx)(Ue.A0,{icon:"call"}),` ${null!==(r=null===o||void 0===o?void 0:o.contactNumber)&&void 0!==r?r:` ${null===o||void 0===o?void 0:o.authentication.phoneCode}${null===o||void 0===o?void 0:o.authentication.authenticationId}`}`,(null===o||void 0===o?void 0:o.yourPlace)&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(Ue.A0,{icon:"location"})," "+o.yourPlace]})]}),l?(0,f.jsx)("h3",{className:"counter",children:A.length-p}):(null===o||void 0===o?void 0:o.qTicketNumber)&&(0,f.jsx)("div",{children:(0,f.jsx)("h3",{children:`Ticket Number: ${null===o||void 0===o?void 0:o.qTicketNumber}`})})]}),(0,f.jsx)($t,{onClick:()=>(async()=>{try{const e=await(0,ft.LS)({},`lucky-draw/random-users/${m._id}`);s(null),u(e.data.data),h(e.data.totalUsers),c(!0)}catch(e){console.error("Error fetching data:",e)}})(),disabled:l,children:"Start Spin"})]})},tr=(0,et.A)((t=>{let{isWhitelisted:r,data:n,config:i,additionalMenus:a,theme:o,id:s,setLoaderBox:l,setMessage:c}=t;return""!==s?i&&n&&(0,f.jsx)(ct,{bookedData:n,theme:o}):(0,f.jsx)(e.Fragment,{children:null===r?(0,f.jsx)(d.A,{}):r?"admin"===n.route?(0,f.jsx)(Xe.A,{setMessage:c,setLoaderBox:l}):(0,f.jsx)(er,{eventData:n,theme:o}):(0,f.jsx)($e.YQ,{style:{margin:"auto",display:"flex",height:"100vh",flexDirection:"column",gap:"10px"},className:"noshadow white-list",children:"The link is not found!"})})}))("whitelisted-domains/check-domain"),rr=De.Ay.div`
  position: fixed;
  z-index: 1001;
  top: 0;
  right: 0;
  background: white;
  left: 0;
  bottom: 0;
  overflow: auto;
  background-image: repeating-radial-gradient(circle at 0 0, transparent 0, #e5e5f7 6px), repeating-linear-gradient(#b4b4b455, #b4b4b4);
  &.Horizontal {
    display: flex;
    flex-direction: column-reverse;
    height: 100vh;
    @media (max-width: 768px) {
      height: auto;
      overflow: auto;
    }
  }
`,nr=De.Ay.div`
  width: 100%;
  height: 250px;
  background-color: #f5f7fa;
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;
  img {
    align-items: center;
    object-fit: cover;
    object-position: top;
    z-index: 0;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    width: 100%;
  }
  div {
    background: linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0)) center center / cover no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    right: 0;
    bottom: 0;
    width: 100%;
  }
  &.Horizontal {
    width: 50%;
    right: 0px;
    left: auto;
    height: 100vh;
    position: inherit;
    div {
      background: transparent;
    }
    img {
      height: 100%;
      border-radius: 0;
    }
  }
  @media (max-width: 768px) {
    img {
      position: inherit;
    }
    &.Horizontal {
      width: 100%;
    }
  }
`,ir=De.Ay.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  margin-top: -50px;
  position: relative;
  z-index: 3;
  &.Horizontal {
    width: 50%;
    margin: auto auto auto 0;
    position: initial;
    /* height: 100vh; */
    overflow: auto;
    display: flex;
    align-self: center;
  }
  @media (max-width: 768px) {
    &.Horizontal {
      width: 100%;
      height: auto;
      overflow: hidden;
    }
  }
`,ar=De.Ay.div`
  padding: 0px 20px 0px;
  background: ${e=>{var t;return null===(t=e.event)||void 0===t?void 0:t.themeColor}};
  color: ${e=>{var t;return null===(t=e.event)||void 0===t?void 0:t.themeTextColor}};
  align-items: center;
  display: flex;
  color: white;
  border-radius: 11px 11px 0px 0px;
  height: 50px;
  font-size: 16px;
  gap: 10px;
  align-items: center;
  h2 {
    margin: 0;
    font-size: 18px;
    color: white;
  }
  div {
    cursor: pointer;
    align-items: center;
    display: flex;
    gap: 5px;
  }
  @media screen and (max-width: 768px) {
    height: auto;
    padding: 10px 20px;
    h2 {
      font-size: 15px;
    }
  }
`,or=De.Ay.div`
  width: fit-content;
  max-width: 800px; /* Adjust as needed */
  padding: 0px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: auto;
  border-radius: 12px;
  margin: auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`,sr=De.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  width: 40%;
  margin-bottom: 60px;
  margin-top: 60px;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
  margin: auto;
  position: relative;
  padding-bottom: 10px;

  img {
    max-width: 100%;
  }
  &.embed {
    margin: 0px auto;
    padding: 10px 25px 25px;
    width: 400px;
    &.Horizontal {
      max-height: 95vh;
      align-items: flex-start;
      justify-content: flex-start;
      overflow: auto;
    }
    &.double {
      width: 650px;
    }
  }
  @media screen and (max-width: 1200px) and (min-width: 768px) {
    max-width: 768px;
  }
  @media screen and (max-width: 768px) {
    flex: 1 1 100%;
    width: auto;
    padding: 10px;
    margin: 0px auto;
    &.embed {
      margin: 0px auto;
      padding: 10px 25px 25px;
      width: 100%;
      &.Horizontal {
        /* max-height: inherit;
        min-height: auto !important;
        overflow: auto;
        display: flex;
        justify-content: flex-start; */
        max-height: 90vh;
      }
    }
  }
`,lr=De.Ay.div`
  margin: 5px 10px 0px;
  color: rgb(254, 123, 123);
  font-size: 12px;
  width: 100%;
  border-top: 1px solid lightgrey;
  text-align: center;
  padding: 10px;
`,cr=De.Ay.div`
  margin: 10px 0 0 0;
  font-size: 16px;
  width: 100%;
  text-align: left;
  padding: 0;
`;function Ar(t){let{event:r,setLoaderBox:n}=t;const[i]=(0,e.useState)([{type:"text",placeholder:"Registration No",name:"registrationNo",validation:"",info:"This number will be your unique indentification number",default:"",label:"Registration No",minimum:0,countries:r.countries,required:!0,add:!0}]),[a,o]=(0,e.useState)(""),[s,l]=(0,e.useState)(""),[c,A]=(0,e.useState)(""),[u,d]=(0,e.useState)("");return(0,f.jsxs)(rr,{className:`${r.loginPage}`,event:r,children:[(0,f.jsxs)(nr,{className:`${r.loginPage}`,children:[(0,f.jsx)("img",{src:"https://event-manager.syd1.cdn.digitaloceanspaces.com/"+r.regBanner,alt:"frame"}),(0,f.jsx)("div",{})]}),(0,f.jsx)(ir,{className:`${r.loginPage}`,children:(0,f.jsxs)(or,{children:[(0,f.jsxs)(ar,{event:r,children:[(0,f.jsx)("h2",{children:i?"Token Registration":"Form is Loading.."})," "]}),(0,f.jsxs)(sr,{className:`${r.loginPage}  embed single`,children:[(null===a||void 0===a?void 0:a.length)>0&&s?(0,f.jsxs)(cr,{style:{border:"1px solid #ccc",padding:"16px",borderRadius:"8px",maxWidth:"400px",margin:"0 auto"},children:[(0,f.jsxs)("p",{children:["Name: ",(0,f.jsx)("b",{children:c})]}),(0,f.jsxs)("p",{children:["Grade: ",(0,f.jsx)("b",{children:u})]}),(0,f.jsxs)("p",{style:{fontSize:"24px",fontWeight:"bold"},children:["Token: ",s]}),(0,f.jsx)("div",{style:{fontWeight:"lighter"},children:a})]}):(0,f.jsx)(ht.A,{useCaptcha:!1,useCheckbox:!1,customClass:"embed",description:"",formValues:{},formMode:"single",formType:"post",header:`Get Token,<br><bold>${r.title}</bold>`,formInput:i,submitHandler:async e=>{n(!0);const t={event:r._id,...e};await(0,ft.LS)(t,"ticket-registration/token").then((e=>{console.log({res:e}),200===e.status?(o(e.data.message),l(e.data.token),A(e.data.ticketReg.authentication.fullName),d(e.data.ticketReg.formData.grade)):400!==e.status&&500!==e.status&&404!==e.status||o(e.customMessage),n(!1)}))},button:"Register Now",isOpenHandler:(e,t)=>{},css:"plain embed",isOpen:!0,plainForm:!0},"type-0"),(null===a||void 0===a?void 0:a.length)>0&&!s&&(0,f.jsx)(lr,{children:a})]})]})})]})}const ur=(0,r(60714).A)((e=>{let{theme:t,setLoaderBox:r,setMessage:n}=e;const i=window.location.hostname;return["mudra.mediaoneonline.com","admin.local","mudra.eventhex.co"].includes(i)&&(0,f.jsx)(Ar,{event:{_id:"66473bfe73bd3a8b0dd66843",title:"MediaOne A+ Mudra Awards",logo:"eventhex/uploads/event/logo-1718863695683.png",banner:"eventhex/uploads/event/banner-1718978534554.jpeg",mobBanner:"eventhex/uploads/event/mobBanner-1718978534566.jpeg",regBanner:"eventhex/uploads/event/regBanner-1718978534574.jpeg",themeColor:"rgb(136 13 138)",themeTextColor:"white",secondaryColor:"#783696",secondaryTextColor:"white"},theme:t,setMessage:n,setLoaderBox:r})}));var dr=r(92073),fr=r(65239),hr=r.n(fr);const pr=De.Ay.div`
  width: fit-content;
  max-width: 800px; /* Adjust as needed */
  padding: 0px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: auto;
  border-radius: 12px;
  margin: auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: auto;
    border-radius: 0;
  }
`,gr=De.Ay.div`
  position: fixed;
  z-index: 1001;
  top: 0;
  right: 0;
  background: white;
  left: 0;
  bottom: 0;
  background-image: repeating-radial-gradient(circle at 0 0, transparent 0, #e5e5f7 6px), repeating-linear-gradient(#b4b4b455, #b4b4b4);
  .close {
    display: none !important;
  }
  &.Horizontal {
    display: flex;
    @media (max-width: 768px) {
      height: auto;
      overflow: auto;
      .close {
        display: flex !important;
      }
    }
  }
  &.Vertical {
    background: #00000075;
  }
  ~ body {
    overflow: hidden;
  }
`,mr=De.Ay.div`
  position: fixed;
  left: 0;
  bottom: 0;
  top: 0;
  right: auto;
  width: 40%;
  overflow: auto;
  padding: 30px;
  min-width: 450px;
  max-width: 60%;
  z-index: 1;
  &.Horizontal {
    width: 40%;
    position: initial;
    /* height: 100vh; */
    /* overflow: auto; */
    display: flex;
  }
  &.single {
    width: 500px;
    min-width: 500px;
  }
  &.Vertical {
    max-width: 100%;
    width: 100%;
  }
  @media (max-width: 768px) {
    &.Horizontal {
      width: 100%;
      height: auto;
      overflow: hidden;
    }
  }
`,vr=De.Ay.div`
  width: ${e=>{let{width:t}=e;return t||700}}px;
  height: ${e=>{let{height:t}=e;return t||400}}px;
  background-color: #f5f5f5;
  /* background-image: url(${e=>{let{backgroundImageUrl:t}=e;return t||"none"}}); */
  background-size: cover;
  background-position: center;
  /* border: 1px solid #ccc; */
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  position: relative;
  margin: 0 auto 40px;
  margin-top: 20px;
`,yr=De.Ay.div`
  position: fixed;
  left: auto;
  bottom: 0;
  top: 0;
  right: right;
  width: 60%;
  overflow: auto;
  align-items: center;
  display: flex;
  &.Horizontal {
    width: 60%;
    right: 0px;
    left: auto;
    height: 100vh;
    position: inherit;
  }
  &.single {
    width: calc(100% - 500px);
  }
  &.Vertical {
    max-width: 100%;
    width: 100%;
  }
  @media (max-width: 768px) {
    &.Horizontal {
      width: 100%;
    }
    &.preview {
      position: fixed;
      inset: 0;
      z-index: 100;
      left: auto;
      right: auto;
      overflow: auto;
      backdrop-filter: blur(10px);
    }
  }
`,br=De.Ay.div`
  padding: 0px 20px 0px;
  background: ${e=>{var t;return null===(t=e.event)||void 0===t?void 0:t.themeColor}};
  color: ${e=>{var t;return null===(t=e.event)||void 0===t?void 0:t.themeTextColor}};
  align-items: center;
  display: flex;
  color: white;
  border-radius: 11px 11px 0px 0px;
  height: 50px;
  font-size: 16px;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  h2 {
    margin: 0;
    font-size: 18px;
    color: white;
  }
  div {
    cursor: pointer;
    align-items: center;
    display: flex;
    gap: 5px;
  }
  @media screen and (max-width: 768px) {
    height: auto;
    padding: 10px 20px;
    border-radius: 0px;
    h2 {
      font-size: 15px;
    }
  }
`,wr=De.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  width: 40%;
  margin-bottom: 60px;
  margin-top: 60px;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
  margin: auto;
  position: relative;
  padding-bottom: 10px;
  color: black;
  img {
    max-width: 100%;
  }
  &.embed {
    margin: 0px auto;
    padding: 10px 25px 25px;
    width: 400px;
    &.Horizontal {
      align-items: flex-start;
      justify-content: flex-start;
      /* overflow: auto; */
    }
    &.double {
      width: 650px;
    }
  }
  @media screen and (max-width: 1200px) and (min-width: 768px) {
    max-width: 768px;
  }
  @media screen and (max-width: 768px) {
    flex: 1 1 100%;
    width: auto;
    padding: 10px;
    margin: 0px auto;
    &.embed {
      margin: 0px auto;
      padding: 10px 25px 25px;
      width: 100%;
      &.Horizontal {
        /* max-height: inherit;
        min-height: auto !important;
        overflow: auto;
        display: flex;
        justify-content: flex-start; */
        /* max-height: 90vh; */
      }
      &.double {
        max-width: 100%;
      }
    }
  }
`,xr=De.Ay.div`
  text-align: left;
  padding: 10px 0 0 0;
  span > bold {
    font-weight: 700;
  }
  span > span {
    font-size: 17px;
  }
  > span {
    font-size: 1.5em;
    text-align: left;
    -webkit-box-align: baseline;
    align-items: baseline;
    font-weight: normal;
    flex-direction: column;
    color: black;
  }
  i {
    border: 1px dashed;
    padding: 0px 5px;
    margin-left: 5px;
    font-style: normal;
    cursor: pointer;
  }
  svg {
    margin: 0;
    font-size: 2px;
    border-radius: 50%;
    width: 13px;
    height: 13px;
  }
`,Cr=De.Ay.div`
  color: ${e=>{let{color:t}=e;return t||"#000"}};
  font-size: ${e=>{let{fontSize:t}=e;return t||"16px"}};
  font-weight: ${e=>{let{fontWeight:t}=e;return t||"normal"}};
  font-style: ${e=>{let{fontStyle:t}=e;return t||"normal"}};
  text-align: ${e=>{let{textAlign:t}=e;return t||"left"}};
  align-content: ${e=>{let{alignContent:t}=e;return t||"center"}};
  line-height: ${e=>{let{lineHeight:t,fontSize:r}=e;return t||r}}px;
  position: absolute;
  top: ${e=>{let{element:t,scale:r}=e;return t.positionY*r*.1||0}}px;
  left: ${e=>{let{element:t,scale:r}=e;return t.positionX*r*.1||0}}px;
  width: ${e=>{let{element:t,scale:r}=e;return t.width*r*.1||0}}px;
  height: ${e=>{let{element:t,scale:r}=e;return t.height*r*.1||0}}px;
  word-wrap: break-word;
  outline: none;
`,Br=De.Ay.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${e=>{let{borderRadius:t}=e;return t||0}}px;
  border: ${e=>{let{borderWidth:t,borderColor:r}=e;return t?`${t}px solid ${r}`:"none"}};
  outline: none;
  position: absolute;
  top: ${e=>{let{element:t,scale:r}=e;return t.positionY*r*.1||0}}px;
  left: ${e=>{let{element:t,scale:r}=e;return t.positionX*r*.1||0}}px;
  width: ${e=>{let{element:t,scale:r}=e;return t.width*r*.1||0}}px;
  height: ${e=>{let{element:t,scale:r}=e;return t.height*r*.1||0}}px;
`,Er=t=>{let{data:r,config:n,setLoaderBox:i}=t;const[a,o]=(0,e.useState)(null),[s,l]=(0,e.useState)({}),[c,A]=(0,e.useState)({}),[u,d]=(0,e.useState)([]),[h,p]=(0,e.useState)(!1),[g,m]=(0,e.useState)(!1),[v,y]=(0,e.useState)(10),[b,w]=(0,e.useState)(500),[x,C]=(0,e.useState)(window.innerWidth),[B,E]=(0,e.useState)("");(0,e.useEffect)((()=>{const e=(0,dr.A)();E(e)}),[]),(0,e.useEffect)((()=>{const e=()=>{C(window.innerWidth)};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]),(0,e.useEffect)((()=>{(()=>{if(b<=x);else{const e=(b-x)/b*100;y(9.5-Math.round(100*e)/100/10)}})()}),[b,x]),(0,e.useEffect)((()=>{if((null===n||void 0===n?void 0:n.length)>0){const e=n[0],t=JSON.parse(e.imageBulderData);w(e.layoutWidth);const r=t.map((e=>"image"===e.type?{type:"image",placeholder:e.label,name:`image-${e.id}`,validation:"",default:"false",tag:!0,label:e.label,required:!0,view:!0,add:!0,update:!0,height:e.height,width:e.width}:"text"===e.type?{type:"text",placeholder:e.label,name:`text-${e.id}`,validation:"",default:"",label:e.label,tag:!0,required:!0,view:!0,add:!0,update:!0}:null));d(r.filter((e=>null!==e))),o(e)}}),[n]);const k=async()=>{try{const e=document.querySelector(".Poster"),t=e.querySelector('div[style*="position: absolute"]'),r=t.style.display;t.style.display="none";const n=await hr()(e,{scale:2,useCORS:!0,allowTaint:!0,backgroundColor:null,logging:!1,onclone:e=>{const t=e.querySelector(".Poster");t&&(t.style.transform="scale(1)")}});t.style.display=r,n.toBlob((e=>{if(!e)return void console.error("Canvas to Blob conversion failed");const t=URL.createObjectURL(e),r=document.createElement("a");r.href=t,r.download="poster.png",document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(t)}),"image/png",1)}catch(e){console.error("Error generating poster:",e)}};return(0,f.jsxs)(gr,{className:`${r.loginPage}`,event:r,children:[(0,f.jsx)(yr,{className:`${r.loginPage} ${g?"preview":""}`,children:a&&(0,f.jsxs)(vr,{className:"Poster",width:a.layoutWidth*v*.1,height:a.layoutHeight*v*.1,children:[(0,f.jsx)("img",{style:{position:"absolute",width:a.layoutWidth*v*.1+"px"},alt:"background",src:"https://event-manager.syd1.cdn.digitaloceanspaces.com/"+a.backgroundImage,onLoad:()=>{console.log("Background image loaded")}}),JSON.parse(a.imageBulderData).map((t=>{var r;return(0,f.jsxs)(e.Fragment,{children:["text"===t.type&&(0,f.jsx)(Cr,{scale:v,element:t,color:t.color,fontSize:t.fontSize*v*.1+"px",fontWeight:t.fontWeight,fontStyle:t.fontStyle,textAlign:t.textAlign,alignContent:t.alignContent,lineHeight:t.lineHeight*v*.1,children:(null===s||void 0===s?void 0:s["text-"+t.id])||t.label}),"image"===t.type&&(0,f.jsx)(Br,{onError:e=>{e.target.src=je.hz},scale:v,src:null!==(r=null===c||void 0===c?void 0:c["image-"+t.id+"preview"])&&void 0!==r?r:je.hz,alt:"Element Image",borderRadius:t.borderRadius*v*.1,borderWidth:t.borderWidth*v*.1,borderColor:t.borderColor,element:t})]},t.id)})),(0,f.jsxs)("div",{style:{display:"flex",gap:"10px",justifyContent:"center",position:"absolute",top:a.layoutHeight*v*.1+15,width:a.layoutWidth*v*.1},children:[(0,f.jsx)(it.$n,{icon:"edit",align:"close",value:"Edit",ClickEvent:()=>m(!1)}),(0,f.jsx)(it.$n,{icon:"download",align:"landing",isDisabled:!h,value:"Download Poster",ClickEvent:k})]})]})}),(0,f.jsx)(mr,{className:`${r.loginPage}`,children:(0,f.jsxs)(pr,{children:[(0,f.jsx)(br,{event:r,children:(0,f.jsx)("h2",{children:"Generate your poster!"})}),(0,f.jsx)(wr,{className:`${r.loginPage}  embed `,children:a&&(0,f.jsxs)(e.Fragment,{children:[(0,f.jsx)(xr,{children:(0,f.jsxs)("span",{children:[(0,f.jsx)("strong",{children:a.title}),", ",(0,f.jsx)("br",{}),(0,f.jsx)("p",{style:{fontSize:"14px",fontStyle:"italic"},children:"Please update necessary field and download your support poster"})]})}),(0,f.jsx)(ht.A,{autoUpdate:!0,liveData:!0,useCaptcha:!1,useCheckbox:!1,customClass:"embed",description:"",formValues:{},formMode:"single",formType:"post",header:" ",formInput:u,submitHandler:(e,t)=>{p(t),l((t=>({...t,...e}))),Object.entries(e).forEach((t=>{let[r,n]=t;if(console.log(r),r.startsWith("image-")){var i;const t=null===(i=e[r])||void 0===i?void 0:i[0];if(t){const e=new FileReader;e.onload=e=>{A((t=>({...t,[`${r}preview`]:e.target.result})))},e.readAsDataURL(t)}else console.log("nofile",{data:e})}}))},button:"Download Poster",isOpenHandler:()=>{},css:"plain embed head-hide landing",isOpen:!0,plainForm:!0},`type-${a.id}`),(0,f.jsxs)("div",{className:"close",style:{display:"flex",gap:"10px"},children:[(0,f.jsx)(it.$n,{icon:"download",type:"close",align:"close",value:"Preview",ClickEvent:()=>m(!0)}),(0,f.jsx)(it.$n,{icon:"download",align:"landing",isDisabled:!h,value:"Download Poster",ClickEvent:k})]})]})})]})})]})},kr=(0,et.A)((t=>{let{isWhitelisted:r,data:n,config:i,additionalMenus:a,theme:o,id:s,setLoaderBox:l,setMessage:c}=t;return""!==s?i&&n&&(0,f.jsx)(Er,{config:i,setLoaderBox:l,data:n.event,theme:o}):(0,f.jsx)(e.Fragment,{children:null===r?(0,f.jsx)(d.A,{}):r?"admin"===n.route?(0,f.jsx)(Xe.A,{setMessage:c,setLoaderBox:l}):(0,f.jsx)(Er,{setLoaderBox:l,config:i,data:n.event,theme:o}):(0,f.jsx)($e.YQ,{style:{margin:"auto",display:"flex",height:"100vh",flexDirection:"column",gap:"10px"},className:"noshadow white-list",children:"The link is not found!"})})}))("whitelisted-domains/campaign"),Ir=De.Ay.div`
  overflow: auto;
  height: 100dvh;
`,Sr=De.Ay.img`
  max-width: 100%;
  height: 150px;
  object-fit: cover;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px, rgba(0, 0, 0, 0) 0px 0px, rgba(0, 0, 0, 0.25) 0px -1px 20px -12px;
  border-radius: 12px;
  margin-top: 20px;
  border: 1px solid lightgray;
`,Dr=De.Ay.div`
  text-align: left;
  padding: 10px 0 0 0;
  position: sticky;
  top: 0;
  background: white;
  z-index: 1001;
  span > bold {
    font-weight: 700;
  }
  span > span {
    font-size: 17px;
  }
  > span {
    font-size: 1.5em;
    text-align: left;
    -webkit-box-align: baseline;
    align-items: baseline;
    font-weight: normal;
    flex-direction: column;
    color: black;
  }
  i {
    border: 1px dashed;
    padding: 0px 5px;
    margin-left: 5px;
    font-style: normal;
    cursor: pointer;
  }
  svg {
    margin: 0;
    font-size: 2px;
    border-radius: 50%;
    width: 13px;
    height: 13px;
  }
  border-bottom: 1px solid ${Qe.D.stroke.soft};
  margin-bottom: 20px;
  width: 100%;
  padding-bottom: 10px;
`,Qr=De.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  width: 40%;
  margin-bottom: 60px;
  margin-top: 60px;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
  margin: auto;
  position: relative;
  padding-bottom: 10px;
  color: black;
  img {
    max-width: 100%;
  }
  &.embed {
    margin: 0px auto;
    padding: 10px 25px 25px;
    width: 400px;
    &.Horizontal {
      align-items: flex-start;
      justify-content: flex-start;
      /* overflow: auto; */
    }
    &.double {
      width: 650px;
    }
  }
  @media screen and (max-width: 1200px) and (min-width: 768px) {
    max-width: 768px;
  }
  @media screen and (max-width: 768px) {
    flex: 1 1 100%;
    width: auto;
    padding: 10px;
    margin: 0px auto;
    &.embed {
      margin: 0px auto;
      padding: 10px 25px 25px;
      width: 100%;
      &.Horizontal {
        /* max-height: inherit;
        min-height: auto !important;
        overflow: auto;
        display: flex;
        justify-content: flex-start; */
        /* max-height: 90vh; */
      }
      &.double {
        max-width: 100%;
      }
    }
  }
`,_r=De.Ay.div`
  margin: 5px 0px 0px;
  color: rgb(254, 123, 123);
  font-size: 12px;
  width: 100%;
  border-top: 1px solid lightgrey;
  text-align: center;
  padding: 10px;
  z-index: 1000;
`,Tr=De.Ay.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  padding: 0px;
  height: calc(100dvh - 50px);
  svg {
    font-size: 25px;
    color: green;
  }
  &.red svg {
    color: red;
  }

  h2 {
    font-size: 20px;
    margin: 10px 0 0;
    text-align: center;
  }
  h3 {
    font-size: 15px;
    margin: 10px 0 20px;
    font-weight: normal;
    text-align: center;
  }
`,Fr=(0,et.A)((t=>{var r;let{setMessage:n,setLoaderBox:i,data:a,config:o,single:s=!0}=t;const{event:l}=a,{countries:c,primaryFields:A,secondaryFields:u,ticket:d}=o,[h,p]=(0,e.useState)(!1),[g,m]=(0,e.useState)(null),[v,y]=(0,e.useState)(0),[b,w]=(0,e.useState)(0),[x,C]=(0,e.useState)(null),[B,E]=(0,e.useState)(""),[k,I]=(0,e.useState)(!1),[S]=(0,e.useState)(null!==(r=d.formMode)&&void 0!==r?r:(null===g||void 0===g?void 0:g.length)>6?"double":"single");(0,e.useEffect)((()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow=""})),[]),(0,e.useEffect)((()=>{g&&0!==(null===g||void 0===g?void 0:g.length)||(async()=>{const e=[...[..."Form"===d.type?[]:A,...u].map((e=>(e.conditionEnabled&&(e.condition={item:e.conditionWhenField,if:e.conditionCheckMatch.includes(",")?e.conditionCheckMatch.split(","):[e.conditionCheckMatch],then:"enabled"===e.conditionIfMatch?"enabled":"disabled",else:"enabled"===e.conditionIfMatch?"disabled":"enabled"}),"select"===e.type&&(e.search=!0),"mobilenumber"===e.type&&(e.countries=c),"multiSelect"===e.type&&("CSV"===e.apiType&&(e.selectApi=e.selectApi.toString().split(",").map((e=>({id:e,value:e}))),e.apiType="JSON"),e.default=""),e)))];m(e),y((e=>e+1))})()}),[l.loginPage,g,c,d,A,u,l.collectEmailId]);const D=(()=>{const e=kt()();return d.numberOfTicketsToBeSold<=d.bookingCount?{message:"All tickets have been sold out! Thank you for your interest.",icon:"sold"}:"Closed"===d.status?{message:"Registration is temporarily closed. Please check back later.",icon:"lock"}:"Sold Out"===d.status?{message:"All tickets have been sold out! Thank you for your interest.",icon:"ticket-off"}:e.isBefore(d.saleStartDate)?{message:"Registration has not started yet. Registration will start soon",icon:"clock"}:e.isAfter(d.saleEndDate)?{message:"Registration period has ended. Sales closed on "+kt()(d.saleEndDate).format("MMMM Do YYYY, h:mm A"),icon:"clock"}:null})();return D?(0,f.jsx)(Qr,{className:`${l.loginPage} embed ${S}`,children:(0,f.jsxs)(Tr,{className:"red",children:[(0,f.jsx)(Ue.A0,{icon:"error"}),(0,f.jsx)("h2",{children:D.message})]})}):(0,f.jsx)(Ir,{children:h?(0,f.jsx)(Qr,{className:`${l.loginPage}  embed ${S}`,children:(0,f.jsxs)(Tr,{children:[(0,f.jsx)(Ue.BK,{}),(0,f.jsx)("h2",{children:"You\u2019ve Registered Successfully!"}),(0,f.jsx)("h3",{dangerouslySetInnerHTML:{__html:B}})]})}):g&&(0,f.jsxs)(Qr,{className:`${l.loginPage}  embed  ${S}`,children:[!h&&(null===g||void 0===g?void 0:g.length)>0&&(0,f.jsxs)(e.Fragment,{children:[d.banner&&(0,f.jsx)(Sr,{src:"https://event-manager.syd1.cdn.digitaloceanspaces.com/"+d.banner,alt:"banner"}),(0,f.jsx)(Dr,{children:(0,f.jsxs)("span",{children:[(0,f.jsx)("strong",{children:d.title}),s?null:(0,f.jsxs)(f.Fragment,{children:[", ",(0,f.jsx)("br",{}),(0,f.jsx)("span",{children:"Registration Form"})]}),d.enablePayment&&(x?(0,f.jsxs)("p",{style:{fontSize:"14px",fontStyle:"italic"},children:["Congratulations! The coupon discount of ",x.discountValue,"% has been applied. You need to pay ",(0,f.jsx)("strong",{style:{fontWeight:"bold"},children:x.discountAmount})," (",d.currency,") to complete this registration! -"," ",(0,f.jsxs)("i",{children:[x.couponCode,(0,f.jsx)("span",{onClick:()=>C(null),children:(0,f.jsx)(Ue.A0,{icon:"delete"})})]})]}):(0,f.jsxs)("p",{style:{fontSize:"14px",fontStyle:"italic",lineHeight:"20px"},children:["You need to pay ",(0,f.jsx)("strong",{style:{fontWeight:"bold"},children:d.paymentAmount})," (",d.currency,") to complete this registration!",(null===d||void 0===d?void 0:d.enableCoupenCode)&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("br",{}),"Do you have a coupon code?",(0,f.jsx)("i",{onClick:()=>{I(!0)},children:"Apply Here"})]})]}))]})}),(0,f.jsx)(ht.A,{useCaptcha:!1,useCheckbox:!1,customClass:"embed iframe",description:"",formValues:{},formMode:S,formType:"post",header:" ",formInput:g,submitHandler:async e=>{i(!0);const t={authenticationType:l.enableAuthentication?l.authenticationType:"none",event:l._id,ticket:d._id,franchise:l.franchise._id,domain:window.location.hostname,...null!==x&&void 0!==x&&x.couponId?{couponId:null===x||void 0===x?void 0:x.couponId}:{},...e};await(0,ft.LS)(t,"authentication/direct").then((e=>{if(200===e.status)if("payment"===e.data.status){console.log(e.response);const r=e.data.order;if(r.razorpayOrderId){const e={key:r.key,amount:r.amount,currency:r.currency,name:r.company.title,description:"Event Registration",order_id:r.razorpayOrderId,image:"https://event-manager.syd1.cdn.digitaloceanspaces.com/"+r.company.logo,handler:async function(e){i(!0);const a=await(0,ft.LS)({...t,...e,domain:window.location.hostname,reference:r.reference},"authentication/direct");200===a.status?(p(!0),E(a.data.response.onsuccessfullMessage)):400===a.status&&n({content:a.customMessage}),i(!1)},prefill:{name:t.firstName,email:t.emailId,contact:t.authenticationId},notes:{address:""},theme:{color:r.company.color}},a=new window.Razorpay(e);a.on("payment.failed",(function(e){n({content:"If your payment was successful but you haven't received confirmation, don't worry! Our team will process it within one hour. If you have concerns, contact our support team after one hour."}),console.error("Payment failed:",e.error)})),a.open()}}else"success"===e.data.status?(p(!0),E(e.data.response.onsuccessfullMessage)):e.data.status;else 400===e.status&&n({content:e.customMessage});i(!1)}))},button:d.enablePayment?"Pay & Register":"Register Now",isOpenHandler:(e,t)=>{},css:"plain embed head-hide landing iframe",isOpen:!0,plainForm:!0,consent:d.consent?d.consentLetter:""},`type-${v}`)]}),!h&&(null===B||void 0===B?void 0:B.length)>0&&(0,f.jsx)(_r,{children:B}),h&&(null===B||void 0===B?void 0:B.length)>0&&(0,f.jsxs)(Tr,{children:[(0,f.jsx)(Ue.BK,{}),(0,f.jsx)("h2",{children:"You\u2019ve Registered Successfully!"}),(0,f.jsx)("h3",{children:B})]}),d&&k&&(null===d||void 0===d?void 0:d.enableCoupenCode)&&!x&&(0,f.jsx)(Tr,{children:(0,f.jsx)(ht.A,{useCaptcha:!1,useCheckbox:!1,customClass:"embed",description:"",formValues:{},formMode:"single",formType:"post",header:'<span style="font-size:14px;">Do you have a Coupon Code?</span>',formInput:[{type:"text",placeholder:"Coupon Code",name:"couponCode",format:"uppercase",default:"",label:"Coupon Code",minimum:3,info:"Enter your you Coupon code recived from the team!",maximum:15,required:!0,add:!0},...B.length>0?[{type:"html",content:(0,f.jsx)(_r,{children:B}),name:"eror",customClass:"full",required:!1,add:!0}]:[]],submitHandler:async e=>{i(!0);const t={ticketId:d._id,...e};await(0,ft.LS)(t,"authentication/verify-coupen").then((t=>{200===t.status?C({...t.data,couponCode:e.couponCode}):(n({content:t.customMessage}),w((e=>e+1))),i(!1)}))},button:"Apply",isOpenHandler:()=>{I(!1)},css:"landing",isOpen:!0,plainForm:!1},`coupen-${b}`)})]})})}))("whitelisted-domains/ticket-details"),Or=()=>[(0,f.jsx)(n.qh,{path:"/events",element:(0,f.jsx)(Lt,{})},"events"),(0,f.jsx)(n.qh,{path:"/embed/:slug",element:(0,f.jsx)(Fr,{})},"embed"),(0,f.jsx)(n.qh,{path:"/lucky-draw",element:(0,f.jsx)(tr,{})},"lucky-draw"),(0,f.jsx)(n.qh,{path:"/events/:slug",element:(0,f.jsx)(Kt,{})},"event-details"),(0,f.jsx)(n.qh,{path:"/my-id-card/:event/:slug",element:(0,f.jsx)(At,{})},"id-card"),(0,f.jsx)(n.qh,{path:"/campaign/:slug",element:(0,f.jsx)(kr,{})},"campaign"),(0,f.jsx)(n.qh,{path:"/get-token",element:(0,f.jsx)(ur,{})},"get-tokent")];var Mr=r(79885);const Nr=()=>{const[t,r]=(0,e.useState)(!1),i=(0,a.wA)(),o=(0,n.g)(),[s]=(0,e.useState)(o["*"]),l=(0,a.d4)((e=>e.pages)),[c,A]=(0,e.useState)(null);(0,e.useEffect)((()=>{var e,t;const r=null!==(e=l[`whitelisted-domains/page-details?slug=${s}`])&&void 0!==e?e:{data:null,isLoading:!0,error:null};if(null!==(t=r.data)&&void 0!==t&&t.configs)if("External Url"===r.data.configs.targetType)window.location.href=r.data.configs.url;else{var n,i,a,o,c,u,d,f,h,p;A(r.data),document.title=`${r.data.configs.title} - ${null===(n=r.data)||void 0===n||null===(i=n.response.event)||void 0===i?void 0:i.title}`;const e=document.createElement("meta");e.name="description",e.content=null===(a=r.data)||void 0===a||null===(o=a.response.event)||void 0===o?void 0:o.description,document.head.appendChild(e);const t="https://event-manager.syd1.cdn.digitaloceanspaces.com/"+(null===(c=r.data)||void 0===c||null===(u=c.response.event)||void 0===u?void 0:u.logo);if(null!==(d=r.data)&&void 0!==d&&null!==(f=d.response.event)&&void 0!==f&&f.logo){const e=document.querySelector("link[rel~='icon']")||document.createElement("link");e.rel="icon",e.href=t,document.head.appendChild(e)}if(null!==(h=r.data.response)&&void 0!==h&&null!==(p=h.event)&&void 0!==p&&p.trackingCode){var g,m;const e=null===(g=r.data.response)||void 0===g||null===(m=g.event)||void 0===m?void 0:m.trackingCode,t=document.createElement("script");t.innerHTML=` (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','${e}'); `,document.head.appendChild(t);const n=document.createElement("script");n.src=`https://www.googletagmanager.com/ns.html?id='${e}`,n.async=!0,document.head.appendChild(n)}}}),[l,s]);const u=(0,e.useRef)(null);return(0,e.useEffect)((()=>{i((0,Mr.K)(`whitelisted-domains/page-details?slug=${s}`,0,{domain:window.location.hostname},0))}),[i,s]),c?null!==c&&void 0!==c&&c.isWhitelisted?"IFrame"===c.configs.targetType?(0,f.jsxs)(e.Fragment,{children:[(0,f.jsx)("iframe",{ref:u,onLoad:()=>r(!1),style:{display:"flex",height:"100vh",width:"100%",overflow:"auto"},title:"QTicket",src:c.configs.url,frameBorder:"0"}),t&&(0,f.jsx)(d.A,{})]}):(0,f.jsx)("div",{children:c.configs.pageData}):(0,f.jsx)($e.YQ,{style:{margin:"auto",display:"flex",height:"100vh",flexDirection:"column",gap:"10px"},className:"noshadow white-list",children:"Something Went Wrong!"}):(0,f.jsx)(d.A,{})},jr=()=>{var t,r,o,c,u,d,h;const p=(0,a.d4)((e=>e.login)),g=(0,a.d4)((e=>e.menuStatus)),m=(0,a.d4)((e=>e.selectedMenu)),v=(0,a.d4)((e=>e.selectedSubMenu)),y=(0,a.wA)(),b=(0,a.d4)((e=>e.themeColors)),[w,x]=(0,e.useState)(window.matchMedia("(max-width: 600px)").matches),[C,B]=(0,e.useState)(!1),E=(0,e.useCallback)((()=>{x(window.matchMedia("(max-width: 600px)").matches)}),[]);(0,e.useEffect)((()=>{const e=window.matchMedia("(max-width: 600px)");return e.addEventListener("change",E),E(),()=>{e.removeEventListener("change",E)}}),[E]),(0,e.useEffect)((()=>{C||B(!0)}),[C]);const k=(0,e.useCallback)((function(e){var t,r,i,a,o,s,l,c;let A=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const u=null!==(t=e.privilege)&&void 0!==t?t:A?e.menuRoles[0]:e.subMenuRoles[0];return(0,f.jsx)(n.qh,{path:e.path,element:(0,f.jsx)(Ee,{setKey:e._id,user:p.data,addPrivilege:null!==(r=u.add)&&void 0!==r&&r,delPrivilege:null!==(i=u.delete)&&void 0!==i&&i,updatePrivilege:null!==(a=u.update)&&void 0!==a&&a,exportPrivilege:null!==(o=u.export)&&void 0!==o&&o,clonePrivilege:null!==(s=u.clone)&&void 0!==s&&s,hideMenu:null!==(l=u.hideMenu)&&void 0!==l&&l,hideHeader:null!==(c=u.hideHeader)&&void 0!==c&&c,userType:u.userType,page:e.element})},e._id)}),[p.data]),I=(0,e.useMemo)((()=>{var t;return null!==p&&void 0!==p&&null!==(t=p.data)&&void 0!==t&&t.menu?p.data.menu.map((t=>{var r;return(null===(r=t.submenus)||void 0===r?void 0:r.length)>0?(0,f.jsxs)(e.Fragment,{children:[k(t),t.submenus.map((e=>k(e,!1)))]},t._id):k(t)})):null}),[p.data.menu,k]);return p.data.token?(0,f.jsxs)(i.Kd,{children:[!w&&!(null!==(t=m.hideHeader)&&void 0!==t&&t)&&(0,f.jsx)(He,{isMobile:w,user:p.data}),(0,f.jsxs)(Ie.J3,{children:[w?(0,f.jsx)(qe,{isMobile:w,user:p.data}):!(null!==(r=m.hideMenu)&&void 0!==r&&r)&&(0,f.jsx)(Ie.z6,{theme:b,className:`${g&&"active"} ${(null===v||void 0===v||null===(o=v.submenus)||void 0===o?void 0:o.length)>0?"submenu":""} ${(null===v||void 0===v||null===(c=v.submenus)||void 0===c?void 0:c.length)>0?"":"sticky"}`,children:(0,f.jsxs)("div",{className:"menus",children:[(0,f.jsx)(qe,{subMenu:(null===v||void 0===v||null===(u=v.submenus)||void 0===u?void 0:u.length)>0,isMobile:w,user:p.data}),(0,f.jsx)(Ve,{})]})}),(null===v||void 0===v||null===(d=v.submenus)||void 0===d?void 0:d.length)>0?w?(0,f.jsx)(Ke,{children:(0,f.jsxs)(We,{theme:b,children:[(0,f.jsx)(Ye,{children:v.label}),v.submenus.map((e=>(0,f.jsxs)(i.N_,{onClick:()=>{y(s(!1)),y(A(e)),y(l(e.label))},className:e._id===m._id?"main active":"main",to:e.path,children:[(0,f.jsx)(Ue.A0,{icon:e.icon})," ",(0,f.jsxs)("span",{children:[e.label," "]})]},e._id)))]})}):(0,f.jsxs)(We,{theme:b,children:[(0,f.jsx)(Ye,{children:v.label}),v.submenus.map((e=>(0,f.jsxs)(i.N_,{onClick:()=>{y(s(!1)),y(A(e)),y(l(e.label))},className:e._id===m._id?"main active":"main",to:e.path,children:[(0,f.jsx)(Ue.A0,{icon:e.icon})," ",(0,f.jsxs)("span",{children:[e.label," "]})]},e._id)))]}):null,(0,f.jsx)(Se.Yq,{className:`content ${(null===v||void 0===v||null===(h=v.submenus)||void 0===h?void 0:h.length)>0?"has-menu":""} ${m.hideMenu&&"hidemenu"}`,children:(0,f.jsx)(Ie.mc,{className:"nopadding",theme:b,children:(0,f.jsxs)(n.BV,{children:[(0,f.jsx)(n.qh,{path:"/",element:(0,f.jsx)(Ee,{page:"login"})}),I,(0,f.jsx)(e.Fragment,{children:bt()}),(0,f.jsx)(n.qh,{path:"*",element:(0,f.jsx)(ke.default,{})})]})})}),(0,f.jsx)(Je,{})]})]}):(0,f.jsx)(i.Kd,{children:(0,f.jsxs)(n.BV,{children:[(0,f.jsx)(n.qh,{path:"/",element:(0,f.jsx)(Ee,{page:"login"})}),(0,f.jsx)(e.Fragment,{children:Or()}),(0,f.jsx)(n.qh,{path:"*",element:(0,f.jsx)(Nr,{})})]})})},Lr=e.memo(jr);var Ur=r(41137),Rr=r(82284),Pr=r(23029),Hr=r(92901),zr=r(9417),Vr=r(15361),Gr=r(56822),Yr=r(53954),Wr=r(64467),Kr=r(96369);var qr=r(78394),Zr=r(76562);function Jr(e){return(0,Kr.A)(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,qr.A)(e)||(0,Zr.A)()}function Xr(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function $r(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Xr(Object(r),!0).forEach((function(t){(0,Wr.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Xr(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var en={type:"logger",log:function(e){this.output("log",e)},warn:function(e){this.output("warn",e)},error:function(e){this.output("error",e)},output:function(e,t){console&&console[e]&&console[e].apply(console,t)}},tn=new(function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(0,Pr.A)(this,e),this.init(t,r)}return(0,Hr.A)(e,[{key:"init",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.prefix=t.prefix||"i18next:",this.logger=e||en,this.options=t,this.debug=t.debug}},{key:"setDebug",value:function(e){this.debug=e}},{key:"log",value:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return this.forward(t,"log","",!0)}},{key:"warn",value:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return this.forward(t,"warn","",!0)}},{key:"error",value:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return this.forward(t,"error","")}},{key:"deprecate",value:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return this.forward(t,"warn","WARNING DEPRECATED: ",!0)}},{key:"forward",value:function(e,t,r,n){return n&&!this.debug?null:("string"===typeof e[0]&&(e[0]="".concat(r).concat(this.prefix," ").concat(e[0])),this.logger[t](e))}},{key:"create",value:function(t){return new e(this.logger,$r($r({},{prefix:"".concat(this.prefix,":").concat(t,":")}),this.options))}},{key:"clone",value:function(t){return(t=t||this.options).prefix=t.prefix||this.prefix,new e(this.logger,t)}}]),e}()),rn=function(){function e(){(0,Pr.A)(this,e),this.observers={}}return(0,Hr.A)(e,[{key:"on",value:function(e,t){var r=this;return e.split(" ").forEach((function(e){r.observers[e]=r.observers[e]||[],r.observers[e].push(t)})),this}},{key:"off",value:function(e,t){this.observers[e]&&(t?this.observers[e]=this.observers[e].filter((function(e){return e!==t})):delete this.observers[e])}},{key:"emit",value:function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];this.observers[e]&&[].concat(this.observers[e]).forEach((function(e){e.apply(void 0,r)}));this.observers["*"]&&[].concat(this.observers["*"]).forEach((function(t){t.apply(t,[e].concat(r))}))}}]),e}();function nn(){var e,t,r=new Promise((function(r,n){e=r,t=n}));return r.resolve=e,r.reject=t,r}function an(e){return null==e?"":""+e}function on(e,t,r){function n(e){return e&&e.indexOf("###")>-1?e.replace(/###/g,"."):e}function i(){return!e||"string"===typeof e}for(var a="string"!==typeof t?[].concat(t):t.split(".");a.length>1;){if(i())return{};var o=n(a.shift());!e[o]&&r&&(e[o]=new r),e=Object.prototype.hasOwnProperty.call(e,o)?e[o]:{}}return i()?{}:{obj:e,k:n(a.shift())}}function sn(e,t,r){var n=on(e,t,Object);n.obj[n.k]=r}function ln(e,t){var r=on(e,t),n=r.obj,i=r.k;if(n)return n[i]}function cn(e,t,r){for(var n in t)"__proto__"!==n&&"constructor"!==n&&(n in e?"string"===typeof e[n]||e[n]instanceof String||"string"===typeof t[n]||t[n]instanceof String?r&&(e[n]=t[n]):cn(e[n],t[n],r):e[n]=t[n]);return e}function An(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var un={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function dn(e){return"string"===typeof e?e.replace(/[&<>"'\/]/g,(function(e){return un[e]})):e}var fn="undefined"!==typeof window&&window.navigator&&"undefined"===typeof window.navigator.userAgentData&&window.navigator.userAgent&&window.navigator.userAgent.indexOf("MSIE")>-1,hn=[" ",",","?","!",";"];function pn(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".";if(e){if(e[t])return e[t];for(var n=t.split(r),i=e,a=0;a<n.length;++a){if(!i)return;if("string"===typeof i[n[a]]&&a+1<n.length)return;if(void 0===i[n[a]]){for(var o=2,s=n.slice(a,a+o).join(r),l=i[s];void 0===l&&n.length>a+o;)o++,l=i[s=n.slice(a,a+o).join(r)];if(void 0===l)return;if(null===l)return null;if(t.endsWith(s)){if("string"===typeof l)return l;if(s&&"string"===typeof l[s])return l[s]}var c=n.slice(a+o).join(r);return c?pn(l,c,r):void 0}i=i[n[a]]}return i}}function gn(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function mn(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?gn(Object(r),!0).forEach((function(t){(0,Wr.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):gn(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function vn(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,Yr.A)(e);if(t){var i=(0,Yr.A)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,Gr.A)(this,r)}}var yn=function(e){(0,Vr.A)(r,e);var t=vn(r);function r(e){var n,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{ns:["translation"],defaultNS:"translation"};return(0,Pr.A)(this,r),n=t.call(this),fn&&rn.call((0,zr.A)(n)),n.data=e||{},n.options=i,void 0===n.options.keySeparator&&(n.options.keySeparator="."),void 0===n.options.ignoreJSONStructure&&(n.options.ignoreJSONStructure=!0),n}return(0,Hr.A)(r,[{key:"addNamespaces",value:function(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}},{key:"removeNamespaces",value:function(e){var t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}},{key:"getResource",value:function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=void 0!==n.keySeparator?n.keySeparator:this.options.keySeparator,a=void 0!==n.ignoreJSONStructure?n.ignoreJSONStructure:this.options.ignoreJSONStructure,o=[e,t];r&&"string"!==typeof r&&(o=o.concat(r)),r&&"string"===typeof r&&(o=o.concat(i?r.split(i):r)),e.indexOf(".")>-1&&(o=e.split("."));var s=ln(this.data,o);return s||!a||"string"!==typeof r?s:pn(this.data&&this.data[e]&&this.data[e][t],r,i)}},{key:"addResource",value:function(e,t,r,n){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{silent:!1},a=void 0!==i.keySeparator?i.keySeparator:this.options.keySeparator,o=[e,t];r&&(o=o.concat(a?r.split(a):r)),e.indexOf(".")>-1&&(n=t,t=(o=e.split("."))[1]),this.addNamespaces(t),sn(this.data,o,n),i.silent||this.emit("added",e,t,r,n)}},{key:"addResources",value:function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{silent:!1};for(var i in r)"string"!==typeof r[i]&&"[object Array]"!==Object.prototype.toString.apply(r[i])||this.addResource(e,t,i,r[i],{silent:!0});n.silent||this.emit("added",e,t,r)}},{key:"addResourceBundle",value:function(e,t,r,n,i){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{silent:!1},o=[e,t];e.indexOf(".")>-1&&(n=r,r=t,t=(o=e.split("."))[1]),this.addNamespaces(t);var s=ln(this.data,o)||{};n?cn(s,r,i):s=mn(mn({},s),r),sn(this.data,o,s),a.silent||this.emit("added",e,t,r)}},{key:"removeResourceBundle",value:function(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}},{key:"hasResourceBundle",value:function(e,t){return void 0!==this.getResource(e,t)}},{key:"getResourceBundle",value:function(e,t){return t||(t=this.options.defaultNS),"v1"===this.options.compatibilityAPI?mn(mn({},{}),this.getResource(e,t)):this.getResource(e,t)}},{key:"getDataByLanguage",value:function(e){return this.data[e]}},{key:"hasLanguageSomeTranslations",value:function(e){var t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find((function(e){return t[e]&&Object.keys(t[e]).length>0}))}},{key:"toJSON",value:function(){return this.data}}]),r}(rn),bn={processors:{},addPostProcessor:function(e){this.processors[e.name]=e},handle:function(e,t,r,n,i){var a=this;return e.forEach((function(e){a.processors[e]&&(t=a.processors[e].process(t,r,n,i))})),t}};function wn(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function xn(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?wn(Object(r),!0).forEach((function(t){(0,Wr.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):wn(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Cn(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,Yr.A)(e);if(t){var i=(0,Yr.A)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,Gr.A)(this,r)}}var Bn={},En=function(e){(0,Vr.A)(r,e);var t=Cn(r);function r(e){var n,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,Pr.A)(this,r),n=t.call(this),fn&&rn.call((0,zr.A)(n)),function(e,t,r){e.forEach((function(e){t[e]&&(r[e]=t[e])}))}(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,(0,zr.A)(n)),n.options=i,void 0===n.options.keySeparator&&(n.options.keySeparator="."),n.logger=tn.create("translator"),n}return(0,Hr.A)(r,[{key:"changeLanguage",value:function(e){e&&(this.language=e)}},{key:"exists",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{interpolation:{}};if(void 0===e||null===e)return!1;var r=this.resolve(e,t);return r&&void 0!==r.res}},{key:"extractFromKey",value:function(e,t){var r=void 0!==t.nsSeparator?t.nsSeparator:this.options.nsSeparator;void 0===r&&(r=":");var n=void 0!==t.keySeparator?t.keySeparator:this.options.keySeparator,i=t.ns||this.options.defaultNS||[],a=r&&e.indexOf(r)>-1,o=!this.options.userDefinedKeySeparator&&!t.keySeparator&&!this.options.userDefinedNsSeparator&&!t.nsSeparator&&!function(e,t,r){t=t||"",r=r||"";var n=hn.filter((function(e){return t.indexOf(e)<0&&r.indexOf(e)<0}));if(0===n.length)return!0;var i=new RegExp("(".concat(n.map((function(e){return"?"===e?"\\?":e})).join("|"),")")),a=!i.test(e);if(!a){var o=e.indexOf(r);o>0&&!i.test(e.substring(0,o))&&(a=!0)}return a}(e,r,n);if(a&&!o){var s=e.match(this.interpolator.nestingRegexp);if(s&&s.length>0)return{key:e,namespaces:i};var l=e.split(r);(r!==n||r===n&&this.options.ns.indexOf(l[0])>-1)&&(i=l.shift()),e=l.join(n)}return"string"===typeof i&&(i=[i]),{key:e,namespaces:i}}},{key:"translate",value:function(e,t,n){var i=this;if("object"!==(0,Rr.A)(t)&&this.options.overloadTranslationOptionHandler&&(t=this.options.overloadTranslationOptionHandler(arguments)),"object"===(0,Rr.A)(t)&&(t=xn({},t)),t||(t={}),void 0===e||null===e)return"";Array.isArray(e)||(e=[String(e)]);var a=void 0!==t.returnDetails?t.returnDetails:this.options.returnDetails,o=void 0!==t.keySeparator?t.keySeparator:this.options.keySeparator,s=this.extractFromKey(e[e.length-1],t),l=s.key,c=s.namespaces,A=c[c.length-1],u=t.lng||this.language,d=t.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(u&&"cimode"===u.toLowerCase()){if(d){var f=t.nsSeparator||this.options.nsSeparator;return a?{res:"".concat(A).concat(f).concat(l),usedKey:l,exactUsedKey:l,usedLng:u,usedNS:A}:"".concat(A).concat(f).concat(l)}return a?{res:l,usedKey:l,exactUsedKey:l,usedLng:u,usedNS:A}:l}var h=this.resolve(e,t),p=h&&h.res,g=h&&h.usedKey||l,m=h&&h.exactUsedKey||l,v=Object.prototype.toString.apply(p),y=void 0!==t.joinArrays?t.joinArrays:this.options.joinArrays,b=!this.i18nFormat||this.i18nFormat.handleAsObject;if(b&&p&&("string"!==typeof p&&"boolean"!==typeof p&&"number"!==typeof p)&&["[object Number]","[object Function]","[object RegExp]"].indexOf(v)<0&&("string"!==typeof y||"[object Array]"!==v)){if(!t.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");var w=this.options.returnedObjectHandler?this.options.returnedObjectHandler(g,p,xn(xn({},t),{},{ns:c})):"key '".concat(l," (").concat(this.language,")' returned an object instead of string.");return a?(h.res=w,h):w}if(o){var x="[object Array]"===v,C=x?[]:{},B=x?m:g;for(var E in p)if(Object.prototype.hasOwnProperty.call(p,E)){var k="".concat(B).concat(o).concat(E);C[E]=this.translate(k,xn(xn({},t),{joinArrays:!1,ns:c})),C[E]===k&&(C[E]=p[E])}p=C}}else if(b&&"string"===typeof y&&"[object Array]"===v)(p=p.join(y))&&(p=this.extendTranslation(p,e,t,n));else{var I=!1,S=!1,D=void 0!==t.count&&"string"!==typeof t.count,Q=r.hasDefaultValue(t),_=D?this.pluralResolver.getSuffix(u,t.count,t):"",T=t["defaultValue".concat(_)]||t.defaultValue;!this.isValidLookup(p)&&Q&&(I=!0,p=T),this.isValidLookup(p)||(S=!0,p=l);var F=(t.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&S?void 0:p,O=Q&&T!==p&&this.options.updateMissing;if(S||I||O){if(this.logger.log(O?"updateKey":"missingKey",u,A,l,O?T:p),o){var M=this.resolve(l,xn(xn({},t),{},{keySeparator:!1}));M&&M.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}var N=[],j=this.languageUtils.getFallbackCodes(this.options.fallbackLng,t.lng||this.language);if("fallback"===this.options.saveMissingTo&&j&&j[0])for(var L=0;L<j.length;L++)N.push(j[L]);else"all"===this.options.saveMissingTo?N=this.languageUtils.toResolveHierarchy(t.lng||this.language):N.push(t.lng||this.language);var U=function(e,r,n){var a=Q&&n!==p?n:F;i.options.missingKeyHandler?i.options.missingKeyHandler(e,A,r,a,O,t):i.backendConnector&&i.backendConnector.saveMissing&&i.backendConnector.saveMissing(e,A,r,a,O,t),i.emit("missingKey",e,A,r,p)};this.options.saveMissing&&(this.options.saveMissingPlurals&&D?N.forEach((function(e){i.pluralResolver.getSuffixes(e,t).forEach((function(r){U([e],l+r,t["defaultValue".concat(r)]||T)}))})):U(N,l,T))}p=this.extendTranslation(p,e,t,h,n),S&&p===l&&this.options.appendNamespaceToMissingKey&&(p="".concat(A,":").concat(l)),(S||I)&&this.options.parseMissingKeyHandler&&(p="v1"!==this.options.compatibilityAPI?this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?"".concat(A,":").concat(l):l,I?p:void 0):this.options.parseMissingKeyHandler(p))}return a?(h.res=p,h):p}},{key:"extendTranslation",value:function(e,t,r,n,i){var a=this;if(this.i18nFormat&&this.i18nFormat.parse)e=this.i18nFormat.parse(e,xn(xn({},this.options.interpolation.defaultVariables),r),n.usedLng,n.usedNS,n.usedKey,{resolved:n});else if(!r.skipInterpolation){r.interpolation&&this.interpolator.init(xn(xn({},r),{interpolation:xn(xn({},this.options.interpolation),r.interpolation)}));var o,s="string"===typeof e&&(r&&r.interpolation&&void 0!==r.interpolation.skipOnVariables?r.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);if(s){var l=e.match(this.interpolator.nestingRegexp);o=l&&l.length}var c=r.replace&&"string"!==typeof r.replace?r.replace:r;if(this.options.interpolation.defaultVariables&&(c=xn(xn({},this.options.interpolation.defaultVariables),c)),e=this.interpolator.interpolate(e,c,r.lng||this.language,r),s){var A=e.match(this.interpolator.nestingRegexp);o<(A&&A.length)&&(r.nest=!1)}!r.lng&&"v1"!==this.options.compatibilityAPI&&n&&n.res&&(r.lng=n.usedLng),!1!==r.nest&&(e=this.interpolator.nest(e,(function(){for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return i&&i[0]===n[0]&&!r.context?(a.logger.warn("It seems you are nesting recursively key: ".concat(n[0]," in key: ").concat(t[0])),null):a.translate.apply(a,n.concat([t]))}),r)),r.interpolation&&this.interpolator.reset()}var u=r.postProcess||this.options.postProcess,d="string"===typeof u?[u]:u;return void 0!==e&&null!==e&&d&&d.length&&!1!==r.applyPostProcessor&&(e=bn.handle(d,e,t,this.options&&this.options.postProcessPassResolved?xn({i18nResolved:n},r):r,this)),e}},{key:"resolve",value:function(e){var t,r,n,i,a,o=this,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"string"===typeof e&&(e=[e]),e.forEach((function(e){if(!o.isValidLookup(t)){var l=o.extractFromKey(e,s),c=l.key;r=c;var A=l.namespaces;o.options.fallbackNS&&(A=A.concat(o.options.fallbackNS));var u=void 0!==s.count&&"string"!==typeof s.count,d=u&&!s.ordinal&&0===s.count&&o.pluralResolver.shouldUseIntlApi(),f=void 0!==s.context&&("string"===typeof s.context||"number"===typeof s.context)&&""!==s.context,h=s.lngs?s.lngs:o.languageUtils.toResolveHierarchy(s.lng||o.language,s.fallbackLng);A.forEach((function(e){o.isValidLookup(t)||(a=e,!Bn["".concat(h[0],"-").concat(e)]&&o.utils&&o.utils.hasLoadedNamespace&&!o.utils.hasLoadedNamespace(a)&&(Bn["".concat(h[0],"-").concat(e)]=!0,o.logger.warn('key "'.concat(r,'" for languages "').concat(h.join(", "),'" won\'t get resolved as namespace "').concat(a,'" was not yet loaded'),"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),h.forEach((function(r){if(!o.isValidLookup(t)){i=r;var a,l=[c];if(o.i18nFormat&&o.i18nFormat.addLookupKeys)o.i18nFormat.addLookupKeys(l,c,r,e,s);else{var A;u&&(A=o.pluralResolver.getSuffix(r,s.count,s));var h="".concat(o.options.pluralSeparator,"zero");if(u&&(l.push(c+A),d&&l.push(c+h)),f){var p="".concat(c).concat(o.options.contextSeparator).concat(s.context);l.push(p),u&&(l.push(p+A),d&&l.push(p+h))}}for(;a=l.pop();)o.isValidLookup(t)||(n=a,t=o.getResource(r,e,a,s))}})))}))}})),{res:t,usedKey:r,exactUsedKey:n,usedLng:i,usedNS:a}}},{key:"isValidLookup",value:function(e){return void 0!==e&&!(!this.options.returnNull&&null===e)&&!(!this.options.returnEmptyString&&""===e)}},{key:"getResource",value:function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(e,t,r,n):this.resourceStore.getResource(e,t,r,n)}}],[{key:"hasDefaultValue",value:function(e){var t="defaultValue";for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&t===r.substring(0,12)&&void 0!==e[r])return!0;return!1}}]),r}(rn);function kn(e){return e.charAt(0).toUpperCase()+e.slice(1)}var In=function(){function e(t){(0,Pr.A)(this,e),this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=tn.create("languageUtils")}return(0,Hr.A)(e,[{key:"getScriptPartFromCode",value:function(e){if(!e||e.indexOf("-")<0)return null;var t=e.split("-");return 2===t.length?null:(t.pop(),"x"===t[t.length-1].toLowerCase()?null:this.formatLanguageCode(t.join("-")))}},{key:"getLanguagePartFromCode",value:function(e){if(!e||e.indexOf("-")<0)return e;var t=e.split("-");return this.formatLanguageCode(t[0])}},{key:"formatLanguageCode",value:function(e){if("string"===typeof e&&e.indexOf("-")>-1){var t=["hans","hant","latn","cyrl","cans","mong","arab"],r=e.split("-");return this.options.lowerCaseLng?r=r.map((function(e){return e.toLowerCase()})):2===r.length?(r[0]=r[0].toLowerCase(),r[1]=r[1].toUpperCase(),t.indexOf(r[1].toLowerCase())>-1&&(r[1]=kn(r[1].toLowerCase()))):3===r.length&&(r[0]=r[0].toLowerCase(),2===r[1].length&&(r[1]=r[1].toUpperCase()),"sgn"!==r[0]&&2===r[2].length&&(r[2]=r[2].toUpperCase()),t.indexOf(r[1].toLowerCase())>-1&&(r[1]=kn(r[1].toLowerCase())),t.indexOf(r[2].toLowerCase())>-1&&(r[2]=kn(r[2].toLowerCase()))),r.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}},{key:"isSupportedCode",value:function(e){return("languageOnly"===this.options.load||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}},{key:"getBestMatchFromCodes",value:function(e){var t,r=this;return e?(e.forEach((function(e){if(!t){var n=r.formatLanguageCode(e);r.options.supportedLngs&&!r.isSupportedCode(n)||(t=n)}})),!t&&this.options.supportedLngs&&e.forEach((function(e){if(!t){var n=r.getLanguagePartFromCode(e);if(r.isSupportedCode(n))return t=n;t=r.options.supportedLngs.find((function(e){return e===n?e:e.indexOf("-")<0&&n.indexOf("-")<0?void 0:0===e.indexOf(n)?e:void 0}))}})),t||(t=this.getFallbackCodes(this.options.fallbackLng)[0]),t):null}},{key:"getFallbackCodes",value:function(e,t){if(!e)return[];if("function"===typeof e&&(e=e(t)),"string"===typeof e&&(e=[e]),"[object Array]"===Object.prototype.toString.apply(e))return e;if(!t)return e.default||[];var r=e[t];return r||(r=e[this.getScriptPartFromCode(t)]),r||(r=e[this.formatLanguageCode(t)]),r||(r=e[this.getLanguagePartFromCode(t)]),r||(r=e.default),r||[]}},{key:"toResolveHierarchy",value:function(e,t){var r=this,n=this.getFallbackCodes(t||this.options.fallbackLng||[],e),i=[],a=function(e){e&&(r.isSupportedCode(e)?i.push(e):r.logger.warn("rejecting language code not found in supportedLngs: ".concat(e)))};return"string"===typeof e&&e.indexOf("-")>-1?("languageOnly"!==this.options.load&&a(this.formatLanguageCode(e)),"languageOnly"!==this.options.load&&"currentOnly"!==this.options.load&&a(this.getScriptPartFromCode(e)),"currentOnly"!==this.options.load&&a(this.getLanguagePartFromCode(e))):"string"===typeof e&&a(this.formatLanguageCode(e)),n.forEach((function(e){i.indexOf(e)<0&&a(r.formatLanguageCode(e))})),i}}]),e}(),Sn=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],Dn={1:function(e){return Number(e>1)},2:function(e){return Number(1!=e)},3:function(e){return 0},4:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)},5:function(e){return Number(0==e?0:1==e?1:2==e?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5)},6:function(e){return Number(1==e?0:e>=2&&e<=4?1:2)},7:function(e){return Number(1==e?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)},8:function(e){return Number(1==e?0:2==e?1:8!=e&&11!=e?2:3)},9:function(e){return Number(e>=2)},10:function(e){return Number(1==e?0:2==e?1:e<7?2:e<11?3:4)},11:function(e){return Number(1==e||11==e?0:2==e||12==e?1:e>2&&e<20?2:3)},12:function(e){return Number(e%10!=1||e%100==11)},13:function(e){return Number(0!==e)},14:function(e){return Number(1==e?0:2==e?1:3==e?2:3)},15:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&(e%100<10||e%100>=20)?1:2)},16:function(e){return Number(e%10==1&&e%100!=11?0:0!==e?1:2)},17:function(e){return Number(1==e||e%10==1&&e%100!=11?0:1)},18:function(e){return Number(0==e?0:1==e?1:2)},19:function(e){return Number(1==e?0:0==e||e%100>1&&e%100<11?1:e%100>10&&e%100<20?2:3)},20:function(e){return Number(1==e?0:0==e||e%100>0&&e%100<20?1:2)},21:function(e){return Number(e%100==1?1:e%100==2?2:e%100==3||e%100==4?3:0)},22:function(e){return Number(1==e?0:2==e?1:(e<0||e>10)&&e%10==0?2:3)}},Qn=["v1","v2","v3"],_n={zero:0,one:1,two:2,few:3,many:4,other:5};var Tn=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(0,Pr.A)(this,e),this.languageUtils=t,this.options=r,this.logger=tn.create("pluralResolver"),this.options.compatibilityJSON&&"v4"!==this.options.compatibilityJSON||"undefined"!==typeof Intl&&Intl.PluralRules||(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=function(){var e={};return Sn.forEach((function(t){t.lngs.forEach((function(r){e[r]={numbers:t.nr,plurals:Dn[t.fc]}}))})),e}()}return(0,Hr.A)(e,[{key:"addRule",value:function(e,t){this.rules[e]=t}},{key:"getRule",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this.shouldUseIntlApi())try{return new Intl.PluralRules(e,{type:t.ordinal?"ordinal":"cardinal"})}catch(r){return}return this.rules[e]||this.rules[this.languageUtils.getLanguagePartFromCode(e)]}},{key:"needsPlural",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=this.getRule(e,t);return this.shouldUseIntlApi()?r&&r.resolvedOptions().pluralCategories.length>1:r&&r.numbers.length>1}},{key:"getPluralFormsOfKey",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.getSuffixes(e,r).map((function(e){return"".concat(t).concat(e)}))}},{key:"getSuffixes",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this.getRule(e,r);return n?this.shouldUseIntlApi()?n.resolvedOptions().pluralCategories.sort((function(e,t){return _n[e]-_n[t]})).map((function(e){return"".concat(t.options.prepend).concat(e)})):n.numbers.map((function(n){return t.getSuffix(e,n,r)})):[]}},{key:"getSuffix",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=this.getRule(e,r);return n?this.shouldUseIntlApi()?"".concat(this.options.prepend).concat(n.select(t)):this.getSuffixRetroCompatible(n,t):(this.logger.warn("no plural rule found for: ".concat(e)),"")}},{key:"getSuffixRetroCompatible",value:function(e,t){var r=this,n=e.noAbs?e.plurals(t):e.plurals(Math.abs(t)),i=e.numbers[n];this.options.simplifyPluralSuffix&&2===e.numbers.length&&1===e.numbers[0]&&(2===i?i="plural":1===i&&(i=""));var a=function(){return r.options.prepend&&i.toString()?r.options.prepend+i.toString():i.toString()};return"v1"===this.options.compatibilityJSON?1===i?"":"number"===typeof i?"_plural_".concat(i.toString()):a():"v2"===this.options.compatibilityJSON||this.options.simplifyPluralSuffix&&2===e.numbers.length&&1===e.numbers[0]?a():this.options.prepend&&n.toString()?this.options.prepend+n.toString():n.toString()}},{key:"shouldUseIntlApi",value:function(){return!Qn.includes(this.options.compatibilityJSON)}}]),e}();function Fn(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function On(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Fn(Object(r),!0).forEach((function(t){(0,Wr.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Fn(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Mn(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:".",i=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],a=function(e,t,r){var n=ln(e,r);return void 0!==n?n:ln(t,r)}(e,t,r);return!a&&i&&"string"===typeof r&&void 0===(a=pn(e,r,n))&&(a=pn(t,r,n)),a}var Nn=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,Pr.A)(this,e),this.logger=tn.create("interpolator"),this.options=t,this.format=t.interpolation&&t.interpolation.format||function(e){return e},this.init(t)}return(0,Hr.A)(e,[{key:"init",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});var t=e.interpolation;this.escape=void 0!==t.escape?t.escape:dn,this.escapeValue=void 0===t.escapeValue||t.escapeValue,this.useRawValueToEscape=void 0!==t.useRawValueToEscape&&t.useRawValueToEscape,this.prefix=t.prefix?An(t.prefix):t.prefixEscaped||"{{",this.suffix=t.suffix?An(t.suffix):t.suffixEscaped||"}}",this.formatSeparator=t.formatSeparator?t.formatSeparator:t.formatSeparator||",",this.unescapePrefix=t.unescapeSuffix?"":t.unescapePrefix||"-",this.unescapeSuffix=this.unescapePrefix?"":t.unescapeSuffix||"",this.nestingPrefix=t.nestingPrefix?An(t.nestingPrefix):t.nestingPrefixEscaped||An("$t("),this.nestingSuffix=t.nestingSuffix?An(t.nestingSuffix):t.nestingSuffixEscaped||An(")"),this.nestingOptionsSeparator=t.nestingOptionsSeparator?t.nestingOptionsSeparator:t.nestingOptionsSeparator||",",this.maxReplaces=t.maxReplaces?t.maxReplaces:1e3,this.alwaysFormat=void 0!==t.alwaysFormat&&t.alwaysFormat,this.resetRegExp()}},{key:"reset",value:function(){this.options&&this.init(this.options)}},{key:"resetRegExp",value:function(){var e="".concat(this.prefix,"(.+?)").concat(this.suffix);this.regexp=new RegExp(e,"g");var t="".concat(this.prefix).concat(this.unescapePrefix,"(.+?)").concat(this.unescapeSuffix).concat(this.suffix);this.regexpUnescape=new RegExp(t,"g");var r="".concat(this.nestingPrefix,"(.+?)").concat(this.nestingSuffix);this.nestingRegexp=new RegExp(r,"g")}},{key:"interpolate",value:function(e,t,r,n){var i,a,o,s=this,l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{};function c(e){return e.replace(/\$/g,"$$$$")}var A=function(e){if(e.indexOf(s.formatSeparator)<0){var i=Mn(t,l,e,s.options.keySeparator,s.options.ignoreJSONStructure);return s.alwaysFormat?s.format(i,void 0,r,On(On(On({},n),t),{},{interpolationkey:e})):i}var a=e.split(s.formatSeparator),o=a.shift().trim(),c=a.join(s.formatSeparator).trim();return s.format(Mn(t,l,o,s.options.keySeparator,s.options.ignoreJSONStructure),c,r,On(On(On({},n),t),{},{interpolationkey:o}))};this.resetRegExp();var u=n&&n.missingInterpolationHandler||this.options.missingInterpolationHandler,d=n&&n.interpolation&&void 0!==n.interpolation.skipOnVariables?n.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:function(e){return c(e)}},{regex:this.regexp,safeValue:function(e){return s.escapeValue?c(s.escape(e)):c(e)}}].forEach((function(t){for(o=0;i=t.regex.exec(e);){var r=i[1].trim();if(void 0===(a=A(r)))if("function"===typeof u){var l=u(e,i,n);a="string"===typeof l?l:""}else if(n&&Object.prototype.hasOwnProperty.call(n,r))a="";else{if(d){a=i[0];continue}s.logger.warn("missed to pass in variable ".concat(r," for interpolating ").concat(e)),a=""}else"string"===typeof a||s.useRawValueToEscape||(a=an(a));var c=t.safeValue(a);if(e=e.replace(i[0],c),d?(t.regex.lastIndex+=a.length,t.regex.lastIndex-=i[0].length):t.regex.lastIndex=0,++o>=s.maxReplaces)break}})),e}},{key:"nest",value:function(e,t){var r,n,i,a=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};function s(e,t){var r=this.nestingOptionsSeparator;if(e.indexOf(r)<0)return e;var n=e.split(new RegExp("".concat(r,"[ ]*{"))),a="{".concat(n[1]);e=n[0];var o=(a=this.interpolate(a,i)).match(/'/g),s=a.match(/"/g);(o&&o.length%2===0&&!s||s.length%2!==0)&&(a=a.replace(/'/g,'"'));try{i=JSON.parse(a),t&&(i=On(On({},t),i))}catch(l){return this.logger.warn("failed parsing options string in nesting for key ".concat(e),l),"".concat(e).concat(r).concat(a)}return delete i.defaultValue,e}for(;r=this.nestingRegexp.exec(e);){var l=[];(i=(i=On({},o)).replace&&"string"!==typeof i.replace?i.replace:i).applyPostProcessor=!1,delete i.defaultValue;var c=!1;if(-1!==r[0].indexOf(this.formatSeparator)&&!/{.*}/.test(r[1])){var A=r[1].split(this.formatSeparator).map((function(e){return e.trim()}));r[1]=A.shift(),l=A,c=!0}if((n=t(s.call(this,r[1].trim(),i),i))&&r[0]===e&&"string"!==typeof n)return n;"string"!==typeof n&&(n=an(n)),n||(this.logger.warn("missed to resolve ".concat(r[1]," for nesting ").concat(e)),n=""),c&&(n=l.reduce((function(e,t){return a.format(e,t,o.lng,On(On({},o),{},{interpolationkey:r[1].trim()}))}),n.trim())),e=e.replace(r[0],n),this.regexp.lastIndex=0}return e}}]),e}();function jn(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Ln(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?jn(Object(r),!0).forEach((function(t){(0,Wr.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):jn(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Un(e){var t={};return function(r,n,i){var a=n+JSON.stringify(i),o=t[a];return o||(o=e(n,i),t[a]=o),o(r)}}var Rn=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,Pr.A)(this,e),this.logger=tn.create("formatter"),this.options=t,this.formats={number:Un((function(e,t){var r=new Intl.NumberFormat(e,Ln({},t));return function(e){return r.format(e)}})),currency:Un((function(e,t){var r=new Intl.NumberFormat(e,Ln(Ln({},t),{},{style:"currency"}));return function(e){return r.format(e)}})),datetime:Un((function(e,t){var r=new Intl.DateTimeFormat(e,Ln({},t));return function(e){return r.format(e)}})),relativetime:Un((function(e,t){var r=new Intl.RelativeTimeFormat(e,Ln({},t));return function(e){return r.format(e,t.range||"day")}})),list:Un((function(e,t){var r=new Intl.ListFormat(e,Ln({},t));return function(e){return r.format(e)}}))},this.init(t)}return(0,Hr.A)(e,[{key:"init",value:function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{interpolation:{}}).interpolation;this.formatSeparator=t.formatSeparator?t.formatSeparator:t.formatSeparator||","}},{key:"add",value:function(e,t){this.formats[e.toLowerCase().trim()]=t}},{key:"addCached",value:function(e,t){this.formats[e.toLowerCase().trim()]=Un(t)}},{key:"format",value:function(e,t,r){var n=this,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return t.split(this.formatSeparator).reduce((function(e,t){var a=function(e){var t=e.toLowerCase().trim(),r={};if(e.indexOf("(")>-1){var n=e.split("(");t=n[0].toLowerCase().trim();var i=n[1].substring(0,n[1].length-1);"currency"===t&&i.indexOf(":")<0?r.currency||(r.currency=i.trim()):"relativetime"===t&&i.indexOf(":")<0?r.range||(r.range=i.trim()):i.split(";").forEach((function(e){if(e){var t=Jr(e.split(":")),n=t[0],i=t.slice(1).join(":").trim().replace(/^'+|'+$/g,"");r[n.trim()]||(r[n.trim()]=i),"false"===i&&(r[n.trim()]=!1),"true"===i&&(r[n.trim()]=!0),isNaN(i)||(r[n.trim()]=parseInt(i,10))}}))}return{formatName:t,formatOptions:r}}(t),o=a.formatName,s=a.formatOptions;if(n.formats[o]){var l=e;try{var c=i&&i.formatParams&&i.formatParams[i.interpolationkey]||{},A=c.locale||c.lng||i.locale||i.lng||r;l=n.formats[o](e,A,Ln(Ln(Ln({},s),i),c))}catch(u){n.logger.warn(u)}return l}return n.logger.warn("there was no format function for ".concat(o)),e}),e)}}]),e}();function Pn(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Hn(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Pn(Object(r),!0).forEach((function(t){(0,Wr.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Pn(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function zn(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,Yr.A)(e);if(t){var i=(0,Yr.A)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,Gr.A)(this,r)}}var Vn=function(e){(0,Vr.A)(r,e);var t=zn(r);function r(e,n,i){var a,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return(0,Pr.A)(this,r),a=t.call(this),fn&&rn.call((0,zr.A)(a)),a.backend=e,a.store=n,a.services=i,a.languageUtils=i.languageUtils,a.options=o,a.logger=tn.create("backendConnector"),a.waitingReads=[],a.maxParallelReads=o.maxParallelReads||10,a.readingCalls=0,a.maxRetries=o.maxRetries>=0?o.maxRetries:5,a.retryTimeout=o.retryTimeout>=1?o.retryTimeout:350,a.state={},a.queue=[],a.backend&&a.backend.init&&a.backend.init(i,o.backend,o),a}return(0,Hr.A)(r,[{key:"queueLoad",value:function(e,t,r,n){var i=this,a={},o={},s={},l={};return e.forEach((function(e){var n=!0;t.forEach((function(t){var s="".concat(e,"|").concat(t);!r.reload&&i.store.hasResourceBundle(e,t)?i.state[s]=2:i.state[s]<0||(1===i.state[s]?void 0===o[s]&&(o[s]=!0):(i.state[s]=1,n=!1,void 0===o[s]&&(o[s]=!0),void 0===a[s]&&(a[s]=!0),void 0===l[t]&&(l[t]=!0)))})),n||(s[e]=!0)})),(Object.keys(a).length||Object.keys(o).length)&&this.queue.push({pending:o,pendingCount:Object.keys(o).length,loaded:{},errors:[],callback:n}),{toLoad:Object.keys(a),pending:Object.keys(o),toLoadLanguages:Object.keys(s),toLoadNamespaces:Object.keys(l)}}},{key:"loaded",value:function(e,t,r){var n=e.split("|"),i=n[0],a=n[1];t&&this.emit("failedLoading",i,a,t),r&&this.store.addResourceBundle(i,a,r),this.state[e]=t?-1:2;var o={};this.queue.forEach((function(r){!function(e,t,r,n){var i=on(e,t,Object),a=i.obj,o=i.k;a[o]=a[o]||[],n&&(a[o]=a[o].concat(r)),n||a[o].push(r)}(r.loaded,[i],a),function(e,t){void 0!==e.pending[t]&&(delete e.pending[t],e.pendingCount--)}(r,e),t&&r.errors.push(t),0!==r.pendingCount||r.done||(Object.keys(r.loaded).forEach((function(e){o[e]||(o[e]={});var t=r.loaded[e];t.length&&t.forEach((function(t){void 0===o[e][t]&&(o[e][t]=!0)}))})),r.done=!0,r.errors.length?r.callback(r.errors):r.callback())})),this.emit("loaded",o),this.queue=this.queue.filter((function(e){return!e.done}))}},{key:"read",value:function(e,t,r){var n=this,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:this.retryTimeout,o=arguments.length>5?arguments[5]:void 0;if(!e.length)return o(null,{});if(this.readingCalls>=this.maxParallelReads)this.waitingReads.push({lng:e,ns:t,fcName:r,tried:i,wait:a,callback:o});else{this.readingCalls++;var s=function(s,l){if(n.readingCalls--,n.waitingReads.length>0){var c=n.waitingReads.shift();n.read(c.lng,c.ns,c.fcName,c.tried,c.wait,c.callback)}s&&l&&i<n.maxRetries?setTimeout((function(){n.read.call(n,e,t,r,i+1,2*a,o)}),a):o(s,l)},l=this.backend[r].bind(this.backend);if(2!==l.length)return l(e,t,s);try{var c=l(e,t);c&&"function"===typeof c.then?c.then((function(e){return s(null,e)})).catch(s):s(null,c)}catch(A){s(A)}}}},{key:"prepareLoading",value:function(e,t){var r=this,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),i&&i();"string"===typeof e&&(e=this.languageUtils.toResolveHierarchy(e)),"string"===typeof t&&(t=[t]);var a=this.queueLoad(e,t,n,i);if(!a.toLoad.length)return a.pending.length||i(),null;a.toLoad.forEach((function(e){r.loadOne(e)}))}},{key:"load",value:function(e,t,r){this.prepareLoading(e,t,{},r)}},{key:"reload",value:function(e,t,r){this.prepareLoading(e,t,{reload:!0},r)}},{key:"loadOne",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=e.split("|"),i=n[0],a=n[1];this.read(i,a,"read",void 0,void 0,(function(n,o){n&&t.logger.warn("".concat(r,"loading namespace ").concat(a," for language ").concat(i," failed"),n),!n&&o&&t.logger.log("".concat(r,"loaded namespace ").concat(a," for language ").concat(i),o),t.loaded(e,n,o)}))}},{key:"saveMissing",value:function(e,t,r,n,i){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:function(){};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(t))this.logger.warn('did not save key "'.concat(r,'" as the namespace "').concat(t,'" was not yet loaded'),"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");else if(void 0!==r&&null!==r&&""!==r){if(this.backend&&this.backend.create){var s=Hn(Hn({},a),{},{isUpdate:i}),l=this.backend.create.bind(this.backend);if(l.length<6)try{var c;(c=5===l.length?l(e,t,r,n,s):l(e,t,r,n))&&"function"===typeof c.then?c.then((function(e){return o(null,e)})).catch(o):o(null,c)}catch(A){o(A)}else l(e,t,r,n,o,s)}e&&e[0]&&this.store.addResource(e[0],t,r,n)}}}]),r}(rn);function Gn(){return{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!0,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(e){var t={};if("object"===(0,Rr.A)(e[1])&&(t=e[1]),"string"===typeof e[1]&&(t.defaultValue=e[1]),"string"===typeof e[2]&&(t.tDescription=e[2]),"object"===(0,Rr.A)(e[2])||"object"===(0,Rr.A)(e[3])){var r=e[3]||e[2];Object.keys(r).forEach((function(e){t[e]=r[e]}))}return t},interpolation:{escapeValue:!0,format:function(e,t,r,n){return e},prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}}function Yn(e){return"string"===typeof e.ns&&(e.ns=[e.ns]),"string"===typeof e.fallbackLng&&(e.fallbackLng=[e.fallbackLng]),"string"===typeof e.fallbackNS&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&e.supportedLngs.indexOf("cimode")<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),e}function Wn(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Kn(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Wn(Object(r),!0).forEach((function(t){(0,Wr.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Wn(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function qn(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,Yr.A)(e);if(t){var i=(0,Yr.A)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,Gr.A)(this,r)}}function Zn(){}var Jn=function(e){(0,Vr.A)(r,e);var t=qn(r);function r(){var e,n,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;if((0,Pr.A)(this,r),e=t.call(this),fn&&rn.call((0,zr.A)(e)),e.options=Yn(i),e.services={},e.logger=tn,e.modules={external:[]},n=(0,zr.A)(e),Object.getOwnPropertyNames(Object.getPrototypeOf(n)).forEach((function(e){"function"===typeof n[e]&&(n[e]=n[e].bind(n))})),a&&!e.isInitialized&&!i.isClone){if(!e.options.initImmediate)return e.init(i,a),(0,Gr.A)(e,(0,zr.A)(e));setTimeout((function(){e.init(i,a)}),0)}return e}return(0,Hr.A)(r,[{key:"init",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;"function"===typeof t&&(r=t,t={}),!t.defaultNS&&!1!==t.defaultNS&&t.ns&&("string"===typeof t.ns?t.defaultNS=t.ns:t.ns.indexOf("translation")<0&&(t.defaultNS=t.ns[0]));var n=Gn();function i(e){return e?"function"===typeof e?new e:e:null}if(this.options=Kn(Kn(Kn({},n),this.options),Yn(t)),"v1"!==this.options.compatibilityAPI&&(this.options.interpolation=Kn(Kn({},n.interpolation),this.options.interpolation)),void 0!==t.keySeparator&&(this.options.userDefinedKeySeparator=t.keySeparator),void 0!==t.nsSeparator&&(this.options.userDefinedNsSeparator=t.nsSeparator),!this.options.isClone){var a;this.modules.logger?tn.init(i(this.modules.logger),this.options):tn.init(null,this.options),this.modules.formatter?a=this.modules.formatter:"undefined"!==typeof Intl&&(a=Rn);var o=new In(this.options);this.store=new yn(this.options.resources,this.options);var s=this.services;s.logger=tn,s.resourceStore=this.store,s.languageUtils=o,s.pluralResolver=new Tn(o,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),!a||this.options.interpolation.format&&this.options.interpolation.format!==n.interpolation.format||(s.formatter=i(a),s.formatter.init(s,this.options),this.options.interpolation.format=s.formatter.format.bind(s.formatter)),s.interpolator=new Nn(this.options),s.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},s.backendConnector=new Vn(i(this.modules.backend),s.resourceStore,s,this.options),s.backendConnector.on("*",(function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];e.emit.apply(e,[t].concat(n))})),this.modules.languageDetector&&(s.languageDetector=i(this.modules.languageDetector),s.languageDetector.init&&s.languageDetector.init(s,this.options.detection,this.options)),this.modules.i18nFormat&&(s.i18nFormat=i(this.modules.i18nFormat),s.i18nFormat.init&&s.i18nFormat.init(this)),this.translator=new En(this.services,this.options),this.translator.on("*",(function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];e.emit.apply(e,[t].concat(n))})),this.modules.external.forEach((function(t){t.init&&t.init(e)}))}if(this.format=this.options.interpolation.format,r||(r=Zn),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){var l=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);l.length>0&&"dev"!==l[0]&&(this.options.lng=l[0])}this.services.languageDetector||this.options.lng||this.logger.warn("init: no languageDetector is used and no lng is defined");["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach((function(t){e[t]=function(){var r;return(r=e.store)[t].apply(r,arguments)}}));["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach((function(t){e[t]=function(){var r;return(r=e.store)[t].apply(r,arguments),e}}));var c=nn(),A=function(){var t=function(t,n){e.isInitialized&&!e.initializedStoreOnce&&e.logger.warn("init: i18next is already initialized. You should call init just once!"),e.isInitialized=!0,e.options.isClone||e.logger.log("initialized",e.options),e.emit("initialized",e.options),c.resolve(n),r(t,n)};if(e.languages&&"v1"!==e.options.compatibilityAPI&&!e.isInitialized)return t(null,e.t.bind(e));e.changeLanguage(e.options.lng,t)};return this.options.resources||!this.options.initImmediate?A():setTimeout(A,0),c}},{key:"loadResources",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Zn,n="string"===typeof e?e:this.language;if("function"===typeof e&&(r=e),!this.options.resources||this.options.partialBundledLanguages){if(n&&"cimode"===n.toLowerCase())return r();var i=[],a=function(e){e&&t.services.languageUtils.toResolveHierarchy(e).forEach((function(e){i.indexOf(e)<0&&i.push(e)}))};if(n)a(n);else this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((function(e){return a(e)}));this.options.preload&&this.options.preload.forEach((function(e){return a(e)})),this.services.backendConnector.load(i,this.options.ns,(function(e){e||t.resolvedLanguage||!t.language||t.setResolvedLanguage(t.language),r(e)}))}else r(null)}},{key:"reloadResources",value:function(e,t,r){var n=nn();return e||(e=this.languages),t||(t=this.options.ns),r||(r=Zn),this.services.backendConnector.reload(e,t,(function(e){n.resolve(),r(e)})),n}},{key:"use",value:function(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return"backend"===e.type&&(this.modules.backend=e),("logger"===e.type||e.log&&e.warn&&e.error)&&(this.modules.logger=e),"languageDetector"===e.type&&(this.modules.languageDetector=e),"i18nFormat"===e.type&&(this.modules.i18nFormat=e),"postProcessor"===e.type&&bn.addPostProcessor(e),"formatter"===e.type&&(this.modules.formatter=e),"3rdParty"===e.type&&this.modules.external.push(e),this}},{key:"setResolvedLanguage",value:function(e){if(e&&this.languages&&!(["cimode","dev"].indexOf(e)>-1))for(var t=0;t<this.languages.length;t++){var r=this.languages[t];if(!(["cimode","dev"].indexOf(r)>-1)&&this.store.hasLanguageSomeTranslations(r)){this.resolvedLanguage=r;break}}}},{key:"changeLanguage",value:function(e,t){var r=this;this.isLanguageChangingTo=e;var n=nn();this.emit("languageChanging",e);var i=function(e){r.language=e,r.languages=r.services.languageUtils.toResolveHierarchy(e),r.resolvedLanguage=void 0,r.setResolvedLanguage(e)},a=function(a){e||a||!r.services.languageDetector||(a=[]);var o="string"===typeof a?a:r.services.languageUtils.getBestMatchFromCodes(a);o&&(r.language||i(o),r.translator.language||r.translator.changeLanguage(o),r.services.languageDetector&&r.services.languageDetector.cacheUserLanguage&&r.services.languageDetector.cacheUserLanguage(o)),r.loadResources(o,(function(e){!function(e,a){a?(i(a),r.translator.changeLanguage(a),r.isLanguageChangingTo=void 0,r.emit("languageChanged",a),r.logger.log("languageChanged",a)):r.isLanguageChangingTo=void 0,n.resolve((function(){return r.t.apply(r,arguments)})),t&&t(e,(function(){return r.t.apply(r,arguments)}))}(e,o)}))};return e||!this.services.languageDetector||this.services.languageDetector.async?!e&&this.services.languageDetector&&this.services.languageDetector.async?0===this.services.languageDetector.detect.length?this.services.languageDetector.detect().then(a):this.services.languageDetector.detect(a):a(e):a(this.services.languageDetector.detect()),n}},{key:"getFixedT",value:function(e,t,r){var n=this,i=function e(t,i){var a;if("object"!==(0,Rr.A)(i)){for(var o=arguments.length,s=new Array(o>2?o-2:0),l=2;l<o;l++)s[l-2]=arguments[l];a=n.options.overloadTranslationOptionHandler([t,i].concat(s))}else a=Kn({},i);a.lng=a.lng||e.lng,a.lngs=a.lngs||e.lngs,a.ns=a.ns||e.ns,a.keyPrefix=a.keyPrefix||r||e.keyPrefix;var c,A=n.options.keySeparator||".";return c=a.keyPrefix&&Array.isArray(t)?t.map((function(e){return"".concat(a.keyPrefix).concat(A).concat(e)})):a.keyPrefix?"".concat(a.keyPrefix).concat(A).concat(t):t,n.t(c,a)};return"string"===typeof e?i.lng=e:i.lngs=e,i.ns=t,i.keyPrefix=r,i}},{key:"t",value:function(){var e;return this.translator&&(e=this.translator).translate.apply(e,arguments)}},{key:"exists",value:function(){var e;return this.translator&&(e=this.translator).exists.apply(e,arguments)}},{key:"setDefaultNamespace",value:function(e){this.options.defaultNS=e}},{key:"hasLoadedNamespace",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;var n=r.lng||this.resolvedLanguage||this.languages[0],i=!!this.options&&this.options.fallbackLng,a=this.languages[this.languages.length-1];if("cimode"===n.toLowerCase())return!0;var o=function(e,r){var n=t.services.backendConnector.state["".concat(e,"|").concat(r)];return-1===n||2===n};if(r.precheck){var s=r.precheck(this,o);if(void 0!==s)return s}return!!this.hasResourceBundle(n,e)||(!(this.services.backendConnector.backend&&(!this.options.resources||this.options.partialBundledLanguages))||!(!o(n,e)||i&&!o(a,e)))}},{key:"loadNamespaces",value:function(e,t){var r=this,n=nn();return this.options.ns?("string"===typeof e&&(e=[e]),e.forEach((function(e){r.options.ns.indexOf(e)<0&&r.options.ns.push(e)})),this.loadResources((function(e){n.resolve(),t&&t(e)})),n):(t&&t(),Promise.resolve())}},{key:"loadLanguages",value:function(e,t){var r=nn();"string"===typeof e&&(e=[e]);var n=this.options.preload||[],i=e.filter((function(e){return n.indexOf(e)<0}));return i.length?(this.options.preload=n.concat(i),this.loadResources((function(e){r.resolve(),t&&t(e)})),r):(t&&t(),Promise.resolve())}},{key:"dir",value:function(e){if(e||(e=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!e)return"rtl";var t=this.services&&this.services.languageUtils||new In(Gn());return["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"].indexOf(t.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}},{key:"cloneInstance",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Zn,i=Kn(Kn(Kn({},this.options),t),{isClone:!0}),a=new r(i);void 0===t.debug&&void 0===t.prefix||(a.logger=a.logger.clone(t));return["store","services","language"].forEach((function(t){a[t]=e[t]})),a.services=Kn({},this.services),a.services.utils={hasLoadedNamespace:a.hasLoadedNamespace.bind(a)},a.translator=new En(a.services,a.options),a.translator.on("*",(function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];a.emit.apply(a,[e].concat(r))})),a.init(i,n),a.translator.options=a.options,a.translator.backendConnector.services.utils={hasLoadedNamespace:a.hasLoadedNamespace.bind(a)},a}},{key:"toJSON",value:function(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}]),r}(rn);(0,Wr.A)(Jn,"createInstance",(function(){return new Jn(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},arguments.length>1?arguments[1]:void 0)}));var Xn=Jn.createInstance();Xn.createInstance=Jn.createInstance;Xn.createInstance,Xn.dir,Xn.init,Xn.loadResources,Xn.reloadResources,Xn.use,Xn.changeLanguage,Xn.getFixedT,Xn.t,Xn.exists,Xn.setDefaultNamespace,Xn.hasLoadedNamespace,Xn.loadNamespaces,Xn.loadLanguages;const $n=function(){return(0,f.jsx)(Ur.xC,{i18n:Xn,children:(0,f.jsx)(Lr,{})})},ei=e=>{e&&e instanceof Function&&r.e(6453).then(r.bind(r,46453)).then((t=>{let{getCLS:r,getFID:n,getFCP:i,getLCP:a,getTTFB:o}=t;r(e),n(e),i(e),a(e),o(e)}))};function ti(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ri(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ti(Object(r),!0).forEach((function(t){(0,Wr.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ti(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ni(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var ii="function"===typeof Symbol&&Symbol.observable||"@@observable",ai=function(){return Math.random().toString(36).substring(7).split("").join(".")},oi={INIT:"@@redux/INIT"+ai(),REPLACE:"@@redux/REPLACE"+ai(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+ai()}};function si(e){if("object"!==typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}var li=function e(t,r,n){var i;if("function"===typeof r&&"function"===typeof n||"function"===typeof n&&"function"===typeof arguments[3])throw new Error(ni(0));if("function"===typeof r&&"undefined"===typeof n&&(n=r,r=void 0),"undefined"!==typeof n){if("function"!==typeof n)throw new Error(ni(1));return n(e)(t,r)}if("function"!==typeof t)throw new Error(ni(2));var a=t,o=r,s=[],l=s,c=!1;function A(){l===s&&(l=s.slice())}function u(){if(c)throw new Error(ni(3));return o}function d(e){if("function"!==typeof e)throw new Error(ni(4));if(c)throw new Error(ni(5));var t=!0;return A(),l.push(e),function(){if(t){if(c)throw new Error(ni(6));t=!1,A();var r=l.indexOf(e);l.splice(r,1),s=null}}}function f(e){if(!si(e))throw new Error(ni(7));if("undefined"===typeof e.type)throw new Error(ni(8));if(c)throw new Error(ni(9));try{c=!0,o=a(o,e)}finally{c=!1}for(var t=s=l,r=0;r<t.length;r++){(0,t[r])()}return e}return f({type:oi.INIT}),(i={dispatch:f,subscribe:d,getState:u,replaceReducer:function(e){if("function"!==typeof e)throw new Error(ni(10));a=e,f({type:oi.REPLACE})}})[ii]=function(){var e,t=d;return(e={subscribe:function(e){if("object"!==typeof e||null===e)throw new Error(ni(11));function r(){e.next&&e.next(u())}return r(),{unsubscribe:t(r)}}})[ii]=function(){return this},e},i};function ci(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}const Ai=null!==localStorage.getItem("_theme")?JSON.parse(localStorage.getItem("_theme")):Qe.t.theme;function ui(e){return function(t){var r=t.dispatch,n=t.getState;return function(t){return function(i){return"function"===typeof i?i(r,n,e):t(i)}}}}var di=ui();di.withExtraArgument=ui;const fi=di,hi=null!==localStorage.getItem("menuStatus")?JSON.parse(localStorage.getItem("menuStatus")):{},pi=null!==localStorage.getItem("selectedMenu")?JSON.parse(localStorage.getItem("selectedMenu")):{_id:0},gi=null!==localStorage.getItem("selectedSubMenu")?JSON.parse(localStorage.getItem("selectedSubMenu")):{_id:0};const mi={data:null!==localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):{},isLoading:!1,error:null};const vi={data:null,isLoading:!0,error:null},yi={data:{},isLoading:!0,error:null};const bi={};const wi={},xi={};const Ci={};const Bi={};const Ei=li(function(e){for(var t=Object.keys(e),r={},n=0;n<t.length;n++){var i=t[n];0,"function"===typeof e[i]&&(r[i]=e[i])}var a,o=Object.keys(r);try{!function(e){Object.keys(e).forEach((function(t){var r=e[t];if("undefined"===typeof r(void 0,{type:oi.INIT}))throw new Error(ni(12));if("undefined"===typeof r(void 0,{type:oi.PROBE_UNKNOWN_ACTION()}))throw new Error(ni(13))}))}(r)}catch(s){a=s}return function(e,t){if(void 0===e&&(e={}),a)throw a;for(var n=!1,i={},s=0;s<o.length;s++){var l=o[s],c=r[l],A=e[l],u=c(A,t);if("undefined"===typeof u){t&&t.type;throw new Error(ni(14))}i[l]=u,n=n||u!==A}return(n=n||o.length!==Object.keys(e).length)?i:e}}({themeColors:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ai,t=arguments.length>1?arguments[1]:void 0;return"THEME"===t.type?(localStorage.setItem("_theme",JSON.stringify(t.payload)),t.payload):e},login:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:mi,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_USER_LOGIN_SUCCESS":return localStorage.setItem("user",JSON.stringify(t.payload)),{...e,data:t.payload,isLoading:!1,error:null};case"FETCH_USER_LOGIN_ERROR":return{...e,error:t.payload,isLoading:!1};case"FETCH_USER_LOGIN_LOADING":return{...e,isLoading:!0,error:null};case"CLEAR_USER_LOGIN":return localStorage.clear(),window.location.href="/",{...mi,data:JSON.stringify({})};case"CLEAR_USER_LOGIN_SESSION":return localStorage.clear(),{...mi,data:JSON.stringify({})};default:return e}},users:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:vi,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_USERS_SUCCESS":return{...e,data:t.payload,isLoading:!1};case"FETCH_USERS_ERROR":return{...e,error:t.payload,isLoading:!1};default:return e}},user:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:yi,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_USER_SUCCESS":return{...e,data:t.payload,isLoading:!1};case"FETCH_USER_ERROR":return{...e,error:t.payload,isLoading:!1};default:return e}},menuStatus:function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;return"MENU_STATUS"===t.type?t.payload:e},currentMenu:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return"CURRENT_MENU"===t.type?t.payload:e},openedMenu:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:hi,t=arguments.length>1?arguments[1]:void 0;if("OPENED_MENU"===t.type){const{payload:r}=t,n={...e};return n.hasOwnProperty(r)?n[r]=!n[r]:n[r]=!0,localStorage.setItem("menuStatus",JSON.stringify(n)),n}return e},select:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:bi,t=arguments.length>1?arguments[1]:void 0;if("ADD_SELECT_OBJECT"===t.type){if(t.payload)return{...e,[t.api]:t.payload};{const{[t.api]:r,...n}=e;return n}}return e},pages:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:wi,t=arguments.length>1?arguments[1]:void 0;return"ADD_PAGE_OBJECT"===t.type?{...e,[t.key]:t.payload}:e},actionNewList:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Bi,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW_ACTION_LIST":return{...e,[t.key]:t.payload};case"NEW_ACTION_LIST_LOADING":return{...e,[t.key]:{isLoading:!0}};default:return e}},actionAddedList:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ci,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADDED_ACTION_LIST":return{...e,[t.key]:t.payload};case"ADDED_ACTION_LIST_LOADING":return{...e,[t.key]:{isLoading:!0}};default:return e}},selectedMenu:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pi,t=arguments.length>1?arguments[1]:void 0;return"SELECTED_MENU"===t.type?(localStorage.setItem("selectedMenu",JSON.stringify(t.payload)),t.payload):e},selectedSubMenu:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:gi,t=arguments.length>1?arguments[1]:void 0;return"SELECTED_SUBMENU"===t.type?(localStorage.setItem("selectedSubMenu",JSON.stringify(t.payload)),t.payload):e},pagesLoading:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xi,t=arguments.length>1?arguments[1]:void 0;return"ADD_PAGE_OBJECT_LOADING"===t.type?{...e,[t.key]:t.payload}:e}}),function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return function(){var r=e.apply(void 0,arguments),n=function(){throw new Error(ni(15))},i={getState:r.getState,dispatch:function(){return n.apply(void 0,arguments)}},a=t.map((function(e){return e(i)}));return n=ci.apply(void 0,a)(r.dispatch),ri(ri({},r),{},{dispatch:n})}}}(fi));Xn.use(Ur.r9).init({fallbackLng:"en",lng:null!==localStorage.getItem("_lang")?localStorage.getItem("_lang"):"en",resources:{en:{translation:r(44174)},de:{translation:r(95894)},es:{translation:r(46725)}}});t.createRoot(document.getElementById("root")).render((0,f.jsx)(e.StrictMode,{children:(0,f.jsx)(a.Kq,{store:Ei,children:(0,f.jsx)($n,{})})})),ei()})()})();
//# sourceMappingURL=main.6c62df33.js.map