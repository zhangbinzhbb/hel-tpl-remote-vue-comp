!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("LEAH_Vue")):"function"==typeof define&&define.amd?define(["LEAH_Vue"],e):"object"==typeof exports?exports["hel-tpl-remote-vue-comps"]=e(require("LEAH_Vue")):t["hel-tpl-remote-vue-comps"]=e(t.LEAH_Vue)}(window,(function(t){return function(t){function e(e){for(var r,n,i=e[0],a=e[1],u=0,p=[];u<i.length;u++)n=i[u],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&p.push(o[n][0]),o[n]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r]);for(c&&c(e);p.length;)p.shift()()}var r={},n={"app~e2e93592":0},o={"app~e2e93592":0};function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[];n[t]?e.push(n[t]):0!==n[t]&&{"chunk-4926f535":1}[t]&&e.push(n[t]=new Promise((function(e,r){for(var o="css/"+({}[t]||t)+"."+{"chunk-4926f535":"c4df890f"}[t]+".css",a=i.p+o,u=document.getElementsByTagName("link"),p=0;p<u.length;p++){var c=(f=u[p]).getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(c===o||c===a))return e()}var l=document.getElementsByTagName("style");for(p=0;p<l.length;p++){var f;if((c=(f=l[p]).getAttribute("data-href"))===o||c===a)return e()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=e,s.onerror=function(e){var o=e&&e.target&&e.target.src||a,i=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete n[t],s.parentNode.removeChild(s),r(i)},s.href=a,document.getElementsByTagName("head")[0].appendChild(s)})).then((function(){n[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var a=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=a);var u,p=document.createElement("script");p.charset="utf-8",p.timeout=120,i.nc&&p.setAttribute("nonce",i.nc),p.src=function(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-4926f535":"66ba0509"}[t]+".js"}(t);var c=new Error;u=function(e){p.onerror=p.onload=null,clearTimeout(l);var r=o[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",c.name="ChunkLoadError",c.type=n,c.request=i,r[1](c)}o[t]=void 0}};var l=setTimeout((function(){u({type:"timeout",target:p})}),12e4);p.onerror=p.onload=u,document.head.appendChild(p)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="https://github.com/zhangbinzhbb/hel-tpl-remote-vue-comp/as_v1/v1.0.0/",i.oe=function(t){throw console.error(t),t};var a=window["helJsonp_hel-tpl-remote-vue-comps_1676700320639"]=window["helJsonp_hel-tpl-remote-vue-comps_1676700320639"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var p=0;p<a.length;p++)e(a[p]);var c=u;return i(i.s=0)}({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);var n=r("8bbf");var o=r("7796");n.config&&(n.config.productionTip=!1),async function(){const t=await r.e("chunk-4926f535").then(r.bind(null,"6c72"));Object(o.libReady)("hel-tpl-remote-vue-comps",t.default),Object(o.isSubApp)()||await r.e("chunk-4926f535").then(r.bind(null,"a581"))}().catch(console.error)},7796:function(t,e,r){!function(t,e){"use strict";var r=function(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}(e),n=function(){return(n=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */function o(t){return t||"unpkg"}function i(t,e){var i=n({},e||{});return i.platform=o(),r.default.getVerLib(t,i)}function a(t,n){var i,a=!0,u="";n&&("string"==typeof n?u=n:(u=n.platform||"",a=null===(i=n.asProxy)||void 0===i||i));var p=function(t,r){var n=r||(null===e.getAppPlatform||void 0===e.getAppPlatform?void 0:e.getAppPlatform(t)),o=e.getSharedCache(n).appName2Lib;return o[t]||(o[t]={}),o[t]}(t,u||o());return"function"==typeof Proxy&&a&&(p=function(t,r){return new Proxy(r,{get:function(r,n){var o=String(n);return e.log("[[getLibProxy]] call lib [".concat(t,"] method [").concat(o,"]")),r[o]}})}(t,p)),r.default.log("[[ exposeLib ]] libName, libObj",t,p),p}function u(t,e,i){var a=function(t){var e={allowDup:!1,platform:o()};return n(n({},e),t||{})}(i);r.default.libReady(t,e,a)}function p(){return!r.default.isSubApp()}r.default.log("hel-lib-proxy ver ".concat("3.10.2"));var c=r.default.isSubApp,l={libReady:u,exposeLib:a,getLib:i,isSubApp:c,isMasterApp:p};t.default=l,t.exposeLib=a,t.getLib=i,t.isMasterApp=p,t.isSubApp=c,t.libReady=u,Object.defineProperty(t,"__esModule",{value:!0})}(e,r("cfe4"))},"8bbf":function(e,r){e.exports=t},c8ba:function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},cfe4:function(t,e,r){"use strict";r.r(e),function(t){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e,r){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,u=[],p=!0,c=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;p=!1}else for(;!(p=(n=i.call(r)).done)&&(u.push(n.value),u.length!==e);p=!0);}catch(t){c=!0,o=t}finally{try{if(!p&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw o}}return u}}(t,e)||u(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t){return function(t){if(Array.isArray(t))return p(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||u(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){if(t){if("string"==typeof t)return p(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?p(t,e):void 0}}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}r.d(e,"DEFAULT_ONLINE_VER",(function(){return Q})),r.d(e,"allowLog",(function(){return Z})),r.d(e,"default",(function(){return Ct})),r.d(e,"getAppMeta",(function(){return mt})),r.d(e,"getAppPlatform",(function(){return Et})),r.d(e,"getAppStyleStr",(function(){return Pt})),r.d(e,"getGlobalThis",(function(){return et})),r.d(e,"getHelDebug",(function(){return tt})),r.d(e,"getHelEventBus",(function(){return nt})),r.d(e,"getPlatform",(function(){return W})),r.d(e,"getPlatformConfig",(function(){return ft})),r.d(e,"getPlatformHost",(function(){return pt})),r.d(e,"getSharedCache",(function(){return ot})),r.d(e,"getVerApp",(function(){return dt})),r.d(e,"getVerExtraCssList",(function(){return bt})),r.d(e,"getVerLib",(function(){return ht})),r.d(e,"getVerLoadStatus",(function(){return St})),r.d(e,"getVerStyleStrStatus",(function(){return _t})),r.d(e,"getVersion",(function(){return Ot})),r.d(e,"helEvents",(function(){return Y})),r.d(e,"helLoadStatus",(function(){return $})),r.d(e,"initPlatformConfig",(function(){return lt})),r.d(e,"isSubApp",(function(){return J})),r.d(e,"libReady",(function(){return ut})),r.d(e,"log",(function(){return X})),r.d(e,"setAppMeta",(function(){return vt})),r.d(e,"setAppPlatform",(function(){return Nt})),r.d(e,"setAppStyleStr",(function(){return wt})),r.d(e,"setEmitApp",(function(){return st})),r.d(e,"setEmitLib",(function(){return gt})),r.d(e,"setGlobalThis",(function(){return rt})),r.d(e,"setVerExtraCssList",(function(){return yt})),r.d(e,"setVerLoadStatus",(function(){return At})),r.d(e,"setVerStyleStrStatus",(function(){return Lt})),r.d(e,"setVersion",(function(){return Vt})),r.d(e,"tryGetAppName",(function(){return at})),r.d(e,"tryGetVersion",(function(){return it})),r.d(e,"trySetMasterAppLoadedSignal",(function(){return z}));var c={NOT_LOAD:0,LOADING:1,LOADED:2},l=["ht","tps",":/","/foo","tpri","nt.q","q.c","om/"].join("");function f(t){return"unpkg"===t?"https://unpkg.com":function(t){return"".concat(l).concat(t)}()}var s=null;function d(){if(s)return s;try{if("undefined"!=typeof window)return window;if("undefined"!=typeof self)return self;if(void 0!==t)return t;throw new Error("opps")}catch(t){throw new Error("unable to locate global object")}}function m(){return d()}var v,g,h=m().__HEL_MICRO_DEBUG__;function y(){return h}function b(t,e){return e.includes(",")?e.split(",").some((function(e){return t.includes(e)})):t.includes(e)}function A(){return 0!==L()}function S(t){y().logMode=t}function L(){return y().logMode}function _(t){y().logFilter=t}function N(){return y().logFilter}if(h?void 0===h.logMode&&(h.logMode=0,h.logFilter=""):(h={logMode:0,logFilter:"",isInit:!1},m().__HEL_MICRO_DEBUG__=h),!y().isInit){y().isInit=!0;var E=(v=function(){try{var t,e;return(null===(t=d().top)||void 0===t||null===(e=t.location)||void 0===e?void 0:e.search)||""}catch(t){var r,n;return(null===(r=d())||void 0===r||null===(n=r.location)||void 0===n?void 0:n.search)||""}}(),g={},v&&v.startsWith("?")?(v.substring(1).split("&").forEach((function(t){var e=i(t.split("="),2),r=e[0],n=e[1];g[r]=n})),g):g),O=E.hellog,V=E.hellogf;"1"==O?S(1):"2"==O&&S(2),V&&_(V)}var P="  %c--\x3e HEL LOG:",w="color:#ad4e00;font-weight:600";function C(){if(A()){for(var t=1===L()?console.log:console.trace||console.log,e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];var o=r[0],i=r.slice(1);if("string"==typeof o){var u=N(),p=["".concat(P," ").concat(o),w].concat(a(i));return u?void(b(o,u)&&t.apply(void 0,a(p))):void t.apply(void 0,a(p))}t.apply(void 0,[P,w].concat(r))}}function j(){var t="";try{throw new Error("getJsRunLocation")}catch(r){var e=r.stack.split("\n");t=e[e.length-1]||""}return t}function x(t,e,r,n){M(t,e)[r]=n}function M(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=t[e];return n||(n=r,t[e]=n),n}var I=m().__HEL_MICRO_SHARED__;function D(t){return{isConfigOverwrite:!1,isInnerConfigOverwrite:!1,platform:t,initPack:"out",apiMode:"jsonp",apiPrefix:"",apiSuffix:"",strictMatchVer:!0,apiPathOfApp:"/openapi/v1/app/info",apiPathOfAppVersion:"",getSubAppAndItsVersionFn:null,onFetchMetaFailed:null,userLsKey:"",getUserName:null,appName2Comp:{},appName2Lib:{},appName2isLibAssigned:{},appName2EmitApp:{},appName2verLoadStatus:{},appName2verEmitLib:{},appName2verEmitApp:{},appName2verStyleStr:{},appName2verStyleFetched:{},appName2verExtraCssList:{},appName2verAppVersion:{},appName2app:{},appName2appVersion:{},appName2styleStr:{},appGroupName2firstVer:{}}}function k(){return I}function F(){return k().cacheRoot.platform||"unpkg"}function G(t){var e=t||F(),r=T(),n=r.caches[e];if(!n){var o=D(t);r.caches[e]=o,n=o}return n}function T(){return k().cacheRoot}var R=!1,H=!1;function B(){if(!0!==H){H=!0;var t=d();void 0===t.__MASTER_APP_LOADED__&&(t.__MASTER_APP_LOADED__=!0,R=!0)}}C("hel-micro-core ver ".concat("3.10.0")),B(),function(){if(I){var t=I.cacheRoot;M(t,"appGroupName2platform");var e=t.caches;Object.keys(e).forEach((function(t){var r=e[t];M(r,"appGroupName2firstVer"),M(r,"appName2verExtraCssList")}))}else I=function(){var t,e={},r=D("hel"),n=D("unpkg"),i={platform:"unpkg",appName2platform:{},appGroupName2platform:{},caches:(t={},o(t,"hel",r),o(t,"unpkg",n),t)};return{createFeature:j(),eventBus:{on:function(t,r){var n=e[t];if(!n){var o=[];e[t]=o,n=o}n.push(r)},emit:function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];var i=e[t];if(i){var a=i.slice();a.forEach((function(t){return t.apply(void 0,n)}))}},off:function(t,r){var n=e[t];if(n)for(var o=0,i=n.length;o<i;o++){if(n[o]===r){n.splice(o,1);break}}}},cacheRoot:i,unpkgCache:n,helCache:r,dev:{setLogMode:S,setLogFilter:_}}}(),m().__HEL_MICRO_SHARED__=I}();var U=function(t,e,r,n){var o=n||{},i=o.versionId;x(ot(o.platform)[r],t,i||Q,e)},q=function(t,e,r){var n,o=r||{},i=o.versionId,a=ot(o.platform)[e],u=i||Q;return(null===(n=a[t])||void 0===n?void 0:n[u])||c.NOT_LOAD},K=function(t,e,r){if(!t[Q]){var n=mt(e,r),o=t[null==n?void 0:n.online_version];o&&(t[Q]=o)}},J=function(){return!R},z=B,W=F,Y={SUB_APP_LOADED:"subAppLoaded",SUB_LIB_LOADED:"SubLibLoaded",STYLE_STR_FETCHED:"StyleStrFetched"},$=c,Q="__default_online_ver__",X=C,Z=A,tt=y,et=d,rt=function(t){s=t};function nt(){return k().eventBus}function ot(t){return G(t)}function it(t,e){var r=j();C("[[ core:tryGetVersion ]] may include source > ".concat(r));var n=ot(e).appGroupName2firstVer[t]||"";if(r.includes("https://")||r.includes("http://")){var o=i(r.split("//"),2)[1].split("/");if(n){if("unpkg"===e&&o.some((function(t){return t.includes(n)})))return n;if(o.includes(n))return n;if("static"===o[1]&&"js"===o[2]||"js"===o[1])return n}return"unpkg"===e?o[1].split("@")[1]||n:o[2]||n}return n}function at(t,e){return t===Q?e||"":t.includes("_")?t.substring(0,t.length-15):e||""}function ut(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.platform||Et(t),o=it(t,n),i=at(o,t),a=mt(i,n);a&&a.__fromCust&&(o=a.online_version,i=a.name);var u={platform:n,appName:i,appGroupName:t,versionId:o,appProperties:e,Comp:function(){},lifecycle:{}};gt(i,u,{appGroupName:t,platform:n});var p=nt();p.emit(Y.SUB_LIB_LOADED,u)}function pt(t){var e=t||W(),r=ot(e).apiPrefix;return r||f(e)}function ct(t){return{apiMode:t.apiMode,apiPrefix:t.apiPrefix,apiSuffix:t.apiSuffix,apiPathOfApp:t.apiPathOfApp,apiPathOfAppVersion:t.apiPathOfAppVersion,getSubAppAndItsVersionFn:t.getSubAppAndItsVersionFn,onFetchMetaFailed:t.onFetchMetaFailed,strictMatchVer:t.strictMatchVer,getUserName:t.getUserName,userLsKey:t.userLsKey,platform:t.platform}}function lt(t,e){var r,n,o=G(e),i=ct(t);o.isConfigOverwrite||(o.isConfigOverwrite=!0,r=o,n=i,Object.keys(n).forEach((function(t){var e=n[t];[null,void 0,""].includes(e)||(r[t]=e)})))}function ft(t){return ct(G(t))}function st(t,e){X("[[ core:setEmitApp ]] appName,emitApp:",t,e);var r=e.versionId,n=ot(e.platform),o=n.appName2verEmitApp,i=n.appName2Comp,a=n.appName2EmitApp;M(o,t)[Q]||(i[t]=e.Comp,a[t]=e,x(o,t,Q,e)),r&&x(o,t,r,e)}function dt(t,e){var r,n=e||{},o=n.versionId,i=n.platform,a=ot(i),u=a.appName2verEmitApp,p=a.appName2Comp,c=a.strictMatchVer,l=a.appName2EmitApp,f=null!==(r=n.strictMatchVer)&&void 0!==r?r:c,s=M(u,t);K(s,t,i);var d=s[o||Q],m=p[t],v=m?{Comp:m}:null,g=f?null:l[t]||v,h=d||g||null;return X("[[ core:getVerApp ]] appName,options,result",t,n,h),h}function mt(t,e){return ot(e).appName2app[t]}function vt(t,e){ot(e).appName2app[t.name]=t}function gt(t,e,r){var o=(r||{}).appGroupName,i=e.versionId,a=e.appProperties,u=e.platform||r.platform,p=ot(u),c=p.appName2verEmitLib,l=p.appName2Lib,f=p.appName2isLibAssigned,s=mt(t,u),d=function(t){var e=l[t];e?"object"===n(e)&&0===Object.keys(e).length&&Object.assign(e,a):l[t]=a,f[t]=!0};d(t),o?d(o):s&&d(s.app_group_name),X("[[ core:setEmitLib ]] appMeta:",s),M(c,t)[Q]||x(c,t,Q,a),i&&x(c,t,i,a)}function ht(t,e){var r,n=e||{},o=n.versionId,i=ot(n.platform),a=i.appName2verEmitLib,u=i.appName2Lib,p=i.strictMatchVer,c=i.appName2isLibAssigned,l=null!==(r=n.strictMatchVer)&&void 0!==r?r:p,f=M(a,t);K(f,t);var s=f[o||Q],d=c[t]?u[t]:null,m=s||(l?null:d)||null;return X("[[ core:getVerLib ]] appName,options,result:",t,n,m),m}function yt(t,e,r){var n=r||{},o=n.versionId,i=ot(n.platform).appName2verExtraCssList;X("[[ core:setVerExtraCssList ]] cssList:",e),M(i,t)[Q]||x(i,t,Q,e),o&&x(i,t,o,e)}function bt(t,e){var r=e||{},n=r.versionId,o=M(ot(r.platform).appName2verExtraCssList,t),i=o[n]||o[Q]||[];return X("[[ core:getVerExtraCssList ]] options,cssList:",r,i),i}function At(t,e,r){U(t,e,"appName2verLoadStatus",r)}function St(t,e){return q(t,"appName2verLoadStatus",e)}function Lt(t,e,r){U(t,e,"appName2verStyleFetched",r)}function _t(t,e){return q(t,"appName2verStyleFetched",e)}function Nt(t,e){return T().appGroupName2platform[t]=e,Et(t)}function Et(t){return T().appGroupName2platform[t]||F()}function Ot(t,e){var r,n=e||{},o=n.platform,i=n.versionId,a=ot(o),u=a.appName2verAppVersion,p=a.appName2appVersion[t]||null;return i&&(null===(r=u[t])||void 0===r?void 0:r[i])||p}function Vt(t,e,r){var n=(r||{}).platform,o=ot(n),i=o.appName2verAppVersion,a=o.appGroupName2firstVer,u=o.appName2appVersion,p=e.sub_app_version;if(p){var c=mt(t,n);M(i,t)[Q]||(x(i,t,Q,e),u[t]=e),x(i,t,p,e),a[c.app_group_name]=p}}function Pt(t,e){var r,n=e||{},o=n.platform,i=n.versionId,a=ot(o),u=a.appName2verStyleStr,p=a.appName2styleStr[t]||"";return i?(null===(r=u[t])||void 0===r?void 0:r[i])||p||"":p}function wt(t,e,r){var n=r||{},o=n.platform,i=n.versionId,a=ot(o),u=a.appName2verStyleStr,p=a.appName2verStyleFetched,c=a.appName2styleStr;i?(x(u,t,i,e),x(p,t,i,$.LOADED)):c[t]=e}var Ct={DEFAULT_ONLINE_VER:Q,helLoadStatus:c,helEvents:Y,isSubApp:J,trySetMasterAppLoadedSignal:B,getHelEventBus:nt,getHelDebug:y,getSharedCache:ot,getPlatform:F,getPlatformHost:pt,getPlatformConfig:ft,getAppPlatform:Et,setAppPlatform:Nt,getVerApp:dt,setEmitApp:st,getVerLib:ht,setEmitLib:gt,getAppMeta:mt,setAppMeta:vt,getVersion:Ot,setVersion:Vt,getAppStyleStr:Pt,setAppStyleStr:wt,getVerLoadStatus:St,setVerLoadStatus:At,getVerStyleStrStatus:_t,setVerStyleStrStatus:Lt,getVerExtraCssList:bt,setVerExtraCssList:yt,tryGetVersion:it,tryGetAppName:at,initPlatformConfig:lt,libReady:ut,log:C,allowLog:A,getGlobalThis:d,setGlobalThis:rt}}.call(this,r("c8ba"))}})}));
//# sourceMappingURL=app~e2e93592.efc7f93f.js.map