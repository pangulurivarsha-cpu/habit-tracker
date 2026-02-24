function fT(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function pT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var S_={exports:{}},gc={},x_={exports:{}},oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ba=Symbol.for("react.element"),mT=Symbol.for("react.portal"),gT=Symbol.for("react.fragment"),yT=Symbol.for("react.strict_mode"),vT=Symbol.for("react.profiler"),_T=Symbol.for("react.provider"),wT=Symbol.for("react.context"),ET=Symbol.for("react.forward_ref"),IT=Symbol.for("react.suspense"),TT=Symbol.for("react.memo"),ST=Symbol.for("react.lazy"),hg=Symbol.iterator;function xT(t){return t===null||typeof t!="object"?null:(t=hg&&t[hg]||t["@@iterator"],typeof t=="function"?t:null)}var C_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A_=Object.assign,k_={};function ro(t,e,n){this.props=t,this.context=e,this.refs=k_,this.updater=n||C_}ro.prototype.isReactComponent={};ro.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ro.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function P_(){}P_.prototype=ro.prototype;function Uf(t,e,n){this.props=t,this.context=e,this.refs=k_,this.updater=n||C_}var zf=Uf.prototype=new P_;zf.constructor=Uf;A_(zf,ro.prototype);zf.isPureReactComponent=!0;var dg=Array.isArray,R_=Object.prototype.hasOwnProperty,Bf={current:null},b_={key:!0,ref:!0,__self:!0,__source:!0};function N_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)R_.call(e,r)&&!b_.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ba,type:t,key:s,ref:o,props:i,_owner:Bf.current}}function CT(t,e){return{$$typeof:Ba,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function $f(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ba}function AT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var fg=/\/+/g;function wh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?AT(""+t.key):e.toString(36)}function Zl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ba:case mT:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+wh(o,0):r,dg(i)?(n="",t!=null&&(n=t.replace(fg,"$&/")+"/"),Zl(i,e,n,"",function(c){return c})):i!=null&&($f(i)&&(i=CT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(fg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",dg(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+wh(s,l);o+=Zl(s,e,n,u,i)}else if(u=xT(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+wh(s,l++),o+=Zl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Cl(t,e,n){if(t==null)return t;var r=[],i=0;return Zl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function kT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var It={current:null},eu={transition:null},PT={ReactCurrentDispatcher:It,ReactCurrentBatchConfig:eu,ReactCurrentOwner:Bf};function D_(){throw Error("act(...) is not supported in production builds of React.")}oe.Children={map:Cl,forEach:function(t,e,n){Cl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Cl(t,function(){e++}),e},toArray:function(t){return Cl(t,function(e){return e})||[]},only:function(t){if(!$f(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};oe.Component=ro;oe.Fragment=gT;oe.Profiler=vT;oe.PureComponent=Uf;oe.StrictMode=yT;oe.Suspense=IT;oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=PT;oe.act=D_;oe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=A_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Bf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)R_.call(e,u)&&!b_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Ba,type:t.type,key:i,ref:s,props:r,_owner:o}};oe.createContext=function(t){return t={$$typeof:wT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:_T,_context:t},t.Consumer=t};oe.createElement=N_;oe.createFactory=function(t){var e=N_.bind(null,t);return e.type=t,e};oe.createRef=function(){return{current:null}};oe.forwardRef=function(t){return{$$typeof:ET,render:t}};oe.isValidElement=$f;oe.lazy=function(t){return{$$typeof:ST,_payload:{_status:-1,_result:t},_init:kT}};oe.memo=function(t,e){return{$$typeof:TT,type:t,compare:e===void 0?null:e}};oe.startTransition=function(t){var e=eu.transition;eu.transition={};try{t()}finally{eu.transition=e}};oe.unstable_act=D_;oe.useCallback=function(t,e){return It.current.useCallback(t,e)};oe.useContext=function(t){return It.current.useContext(t)};oe.useDebugValue=function(){};oe.useDeferredValue=function(t){return It.current.useDeferredValue(t)};oe.useEffect=function(t,e){return It.current.useEffect(t,e)};oe.useId=function(){return It.current.useId()};oe.useImperativeHandle=function(t,e,n){return It.current.useImperativeHandle(t,e,n)};oe.useInsertionEffect=function(t,e){return It.current.useInsertionEffect(t,e)};oe.useLayoutEffect=function(t,e){return It.current.useLayoutEffect(t,e)};oe.useMemo=function(t,e){return It.current.useMemo(t,e)};oe.useReducer=function(t,e,n){return It.current.useReducer(t,e,n)};oe.useRef=function(t){return It.current.useRef(t)};oe.useState=function(t){return It.current.useState(t)};oe.useSyncExternalStore=function(t,e,n){return It.current.useSyncExternalStore(t,e,n)};oe.useTransition=function(){return It.current.useTransition()};oe.version="18.3.1";x_.exports=oe;var M=x_.exports;const RT=pT(M),bT=fT({__proto__:null,default:RT},[M]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var NT=M,DT=Symbol.for("react.element"),MT=Symbol.for("react.fragment"),VT=Object.prototype.hasOwnProperty,OT=NT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,LT={key:!0,ref:!0,__self:!0,__source:!0};function M_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)VT.call(e,r)&&!LT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:DT,type:t,key:s,ref:o,props:i,_owner:OT.current}}gc.Fragment=MT;gc.jsx=M_;gc.jsxs=M_;S_.exports=gc;var d=S_.exports,V_={exports:{}},$t={},O_={exports:{}},L_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,Y){var te=$.length;$.push(Y);e:for(;0<te;){var G=te-1>>>1,re=$[G];if(0<i(re,Y))$[G]=Y,$[te]=re,te=G;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var Y=$[0],te=$.pop();if(te!==Y){$[0]=te;e:for(var G=0,re=$.length,De=re>>>1;G<De;){var ke=2*(G+1)-1,Mt=$[ke],Je=ke+1,St=$[Je];if(0>i(Mt,te))Je<re&&0>i(St,Mt)?($[G]=St,$[Je]=te,G=Je):($[G]=Mt,$[ke]=te,G=ke);else if(Je<re&&0>i(St,te))$[G]=St,$[Je]=te,G=Je;else break e}}return Y}function i($,Y){var te=$.sortIndex-Y.sortIndex;return te!==0?te:$.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],p=1,m=null,g=3,I=!1,C=!1,P=!1,b=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x($){for(var Y=n(c);Y!==null;){if(Y.callback===null)r(c);else if(Y.startTime<=$)r(c),Y.sortIndex=Y.expirationTime,e(u,Y);else break;Y=n(c)}}function V($){if(P=!1,x($),!C)if(n(u)!==null)C=!0,X(L);else{var Y=n(c);Y!==null&&st(V,Y.startTime-$)}}function L($,Y){C=!1,P&&(P=!1,E(v),v=-1),I=!0;var te=g;try{for(x(Y),m=n(u);m!==null&&(!(m.expirationTime>Y)||$&&!k());){var G=m.callback;if(typeof G=="function"){m.callback=null,g=m.priorityLevel;var re=G(m.expirationTime<=Y);Y=t.unstable_now(),typeof re=="function"?m.callback=re:m===n(u)&&r(u),x(Y)}else r(u);m=n(u)}if(m!==null)var De=!0;else{var ke=n(c);ke!==null&&st(V,ke.startTime-Y),De=!1}return De}finally{m=null,g=te,I=!1}}var U=!1,w=null,v=-1,T=5,A=-1;function k(){return!(t.unstable_now()-A<T)}function N(){if(w!==null){var $=t.unstable_now();A=$;var Y=!0;try{Y=w(!0,$)}finally{Y?S():(U=!1,w=null)}}else U=!1}var S;if(typeof _=="function")S=function(){_(N)};else if(typeof MessageChannel<"u"){var ye=new MessageChannel,Ue=ye.port2;ye.port1.onmessage=N,S=function(){Ue.postMessage(null)}}else S=function(){b(N,0)};function X($){w=$,U||(U=!0,S())}function st($,Y){v=b(function(){$(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){C||I||(C=!0,X(L))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(g){case 1:case 2:case 3:var Y=3;break;default:Y=g}var te=g;g=Y;try{return $()}finally{g=te}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,Y){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var te=g;g=$;try{return Y()}finally{g=te}},t.unstable_scheduleCallback=function($,Y,te){var G=t.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?G+te:G):te=G,$){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=te+re,$={id:p++,callback:Y,priorityLevel:$,startTime:te,expirationTime:re,sortIndex:-1},te>G?($.sortIndex=te,e(c,$),n(u)===null&&$===n(c)&&(P?(E(v),v=-1):P=!0,st(V,te-G))):($.sortIndex=re,e(u,$),C||I||(C=!0,X(L))),$},t.unstable_shouldYield=k,t.unstable_wrapCallback=function($){var Y=g;return function(){var te=g;g=Y;try{return $.apply(this,arguments)}finally{g=te}}}})(L_);O_.exports=L_;var jT=O_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var FT=M,Bt=jT;function z(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var j_=new Set,pa={};function Fi(t,e){$s(t,e),$s(t+"Capture",e)}function $s(t,e){for(pa[t]=e,t=0;t<e.length;t++)j_.add(e[t])}var Qn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),dd=Object.prototype.hasOwnProperty,UT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,pg={},mg={};function zT(t){return dd.call(mg,t)?!0:dd.call(pg,t)?!1:UT.test(t)?mg[t]=!0:(pg[t]=!0,!1)}function BT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function $T(t,e,n,r){if(e===null||typeof e>"u"||BT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Tt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ct={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ct[t]=new Tt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ct[e]=new Tt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ct[t]=new Tt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ct[t]=new Tt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ct[t]=new Tt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ct[t]=new Tt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ct[t]=new Tt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ct[t]=new Tt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ct[t]=new Tt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Wf=/[\-:]([a-z])/g;function Hf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Wf,Hf);ct[e]=new Tt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Wf,Hf);ct[e]=new Tt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Wf,Hf);ct[e]=new Tt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ct[t]=new Tt(t,1,!1,t.toLowerCase(),null,!1,!1)});ct.xlinkHref=new Tt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ct[t]=new Tt(t,1,!1,t.toLowerCase(),null,!0,!0)});function qf(t,e,n,r){var i=ct.hasOwnProperty(e)?ct[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&($T(e,n,i,r)&&(n=null),r||i===null?zT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var ir=FT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Al=Symbol.for("react.element"),ys=Symbol.for("react.portal"),vs=Symbol.for("react.fragment"),Kf=Symbol.for("react.strict_mode"),fd=Symbol.for("react.profiler"),F_=Symbol.for("react.provider"),U_=Symbol.for("react.context"),Gf=Symbol.for("react.forward_ref"),pd=Symbol.for("react.suspense"),md=Symbol.for("react.suspense_list"),Qf=Symbol.for("react.memo"),mr=Symbol.for("react.lazy"),z_=Symbol.for("react.offscreen"),gg=Symbol.iterator;function Do(t){return t===null||typeof t!="object"?null:(t=gg&&t[gg]||t["@@iterator"],typeof t=="function"?t:null)}var be=Object.assign,Eh;function Bo(t){if(Eh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Eh=e&&e[1]||""}return`
`+Eh+t}var Ih=!1;function Th(t,e){if(!t||Ih)return"";Ih=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Ih=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Bo(t):""}function WT(t){switch(t.tag){case 5:return Bo(t.type);case 16:return Bo("Lazy");case 13:return Bo("Suspense");case 19:return Bo("SuspenseList");case 0:case 2:case 15:return t=Th(t.type,!1),t;case 11:return t=Th(t.type.render,!1),t;case 1:return t=Th(t.type,!0),t;default:return""}}function gd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case vs:return"Fragment";case ys:return"Portal";case fd:return"Profiler";case Kf:return"StrictMode";case pd:return"Suspense";case md:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case U_:return(t.displayName||"Context")+".Consumer";case F_:return(t._context.displayName||"Context")+".Provider";case Gf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Qf:return e=t.displayName||null,e!==null?e:gd(t.type)||"Memo";case mr:e=t._payload,t=t._init;try{return gd(t(e))}catch{}}return null}function HT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return gd(e);case 8:return e===Kf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Fr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function B_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function qT(t){var e=B_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function kl(t){t._valueTracker||(t._valueTracker=qT(t))}function $_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=B_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Eu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function yd(t,e){var n=e.checked;return be({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function yg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Fr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function W_(t,e){e=e.checked,e!=null&&qf(t,"checked",e,!1)}function vd(t,e){W_(t,e);var n=Fr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?_d(t,e.type,n):e.hasOwnProperty("defaultValue")&&_d(t,e.type,Fr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function vg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function _d(t,e,n){(e!=="number"||Eu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var $o=Array.isArray;function Rs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Fr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function wd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(z(91));return be({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function _g(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(z(92));if($o(n)){if(1<n.length)throw Error(z(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Fr(n)}}function H_(t,e){var n=Fr(e.value),r=Fr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function wg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function q_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ed(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?q_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Pl,K_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Pl=Pl||document.createElement("div"),Pl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Pl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ma(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Zo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},KT=["Webkit","ms","Moz","O"];Object.keys(Zo).forEach(function(t){KT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Zo[e]=Zo[t]})});function G_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Zo.hasOwnProperty(t)&&Zo[t]?(""+e).trim():e+"px"}function Q_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=G_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var GT=be({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Id(t,e){if(e){if(GT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(z(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(z(62))}}function Td(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sd=null;function Yf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var xd=null,bs=null,Ns=null;function Eg(t){if(t=Ha(t)){if(typeof xd!="function")throw Error(z(280));var e=t.stateNode;e&&(e=Ec(e),xd(t.stateNode,t.type,e))}}function Y_(t){bs?Ns?Ns.push(t):Ns=[t]:bs=t}function J_(){if(bs){var t=bs,e=Ns;if(Ns=bs=null,Eg(t),e)for(t=0;t<e.length;t++)Eg(e[t])}}function X_(t,e){return t(e)}function Z_(){}var Sh=!1;function e0(t,e,n){if(Sh)return t(e,n);Sh=!0;try{return X_(t,e,n)}finally{Sh=!1,(bs!==null||Ns!==null)&&(Z_(),J_())}}function ga(t,e){var n=t.stateNode;if(n===null)return null;var r=Ec(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(z(231,e,typeof n));return n}var Cd=!1;if(Qn)try{var Mo={};Object.defineProperty(Mo,"passive",{get:function(){Cd=!0}}),window.addEventListener("test",Mo,Mo),window.removeEventListener("test",Mo,Mo)}catch{Cd=!1}function QT(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(p){this.onError(p)}}var ea=!1,Iu=null,Tu=!1,Ad=null,YT={onError:function(t){ea=!0,Iu=t}};function JT(t,e,n,r,i,s,o,l,u){ea=!1,Iu=null,QT.apply(YT,arguments)}function XT(t,e,n,r,i,s,o,l,u){if(JT.apply(this,arguments),ea){if(ea){var c=Iu;ea=!1,Iu=null}else throw Error(z(198));Tu||(Tu=!0,Ad=c)}}function Ui(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function t0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ig(t){if(Ui(t)!==t)throw Error(z(188))}function ZT(t){var e=t.alternate;if(!e){if(e=Ui(t),e===null)throw Error(z(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ig(i),t;if(s===r)return Ig(i),e;s=s.sibling}throw Error(z(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?t:e}function n0(t){return t=ZT(t),t!==null?r0(t):null}function r0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=r0(t);if(e!==null)return e;t=t.sibling}return null}var i0=Bt.unstable_scheduleCallback,Tg=Bt.unstable_cancelCallback,eS=Bt.unstable_shouldYield,tS=Bt.unstable_requestPaint,Fe=Bt.unstable_now,nS=Bt.unstable_getCurrentPriorityLevel,Jf=Bt.unstable_ImmediatePriority,s0=Bt.unstable_UserBlockingPriority,Su=Bt.unstable_NormalPriority,rS=Bt.unstable_LowPriority,o0=Bt.unstable_IdlePriority,yc=null,kn=null;function iS(t){if(kn&&typeof kn.onCommitFiberRoot=="function")try{kn.onCommitFiberRoot(yc,t,void 0,(t.current.flags&128)===128)}catch{}}var hn=Math.clz32?Math.clz32:aS,sS=Math.log,oS=Math.LN2;function aS(t){return t>>>=0,t===0?32:31-(sS(t)/oS|0)|0}var Rl=64,bl=4194304;function Wo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function xu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Wo(l):(s&=o,s!==0&&(r=Wo(s)))}else o=n&~i,o!==0?r=Wo(o):s!==0&&(r=Wo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-hn(e),i=1<<n,r|=t[n],e&=~i;return r}function lS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function uS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-hn(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=lS(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function kd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function a0(){var t=Rl;return Rl<<=1,!(Rl&4194240)&&(Rl=64),t}function xh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function $a(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-hn(e),t[e]=n}function cS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-hn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Xf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-hn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ge=0;function l0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var u0,Zf,c0,h0,d0,Pd=!1,Nl=[],Ar=null,kr=null,Pr=null,ya=new Map,va=new Map,yr=[],hS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sg(t,e){switch(t){case"focusin":case"focusout":Ar=null;break;case"dragenter":case"dragleave":kr=null;break;case"mouseover":case"mouseout":Pr=null;break;case"pointerover":case"pointerout":ya.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":va.delete(e.pointerId)}}function Vo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ha(e),e!==null&&Zf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function dS(t,e,n,r,i){switch(e){case"focusin":return Ar=Vo(Ar,t,e,n,r,i),!0;case"dragenter":return kr=Vo(kr,t,e,n,r,i),!0;case"mouseover":return Pr=Vo(Pr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ya.set(s,Vo(ya.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,va.set(s,Vo(va.get(s)||null,t,e,n,r,i)),!0}return!1}function f0(t){var e=mi(t.target);if(e!==null){var n=Ui(e);if(n!==null){if(e=n.tag,e===13){if(e=t0(n),e!==null){t.blockedOn=e,d0(t.priority,function(){c0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function tu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Rd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Sd=r,n.target.dispatchEvent(r),Sd=null}else return e=Ha(n),e!==null&&Zf(e),t.blockedOn=n,!1;e.shift()}return!0}function xg(t,e,n){tu(t)&&n.delete(e)}function fS(){Pd=!1,Ar!==null&&tu(Ar)&&(Ar=null),kr!==null&&tu(kr)&&(kr=null),Pr!==null&&tu(Pr)&&(Pr=null),ya.forEach(xg),va.forEach(xg)}function Oo(t,e){t.blockedOn===e&&(t.blockedOn=null,Pd||(Pd=!0,Bt.unstable_scheduleCallback(Bt.unstable_NormalPriority,fS)))}function _a(t){function e(i){return Oo(i,t)}if(0<Nl.length){Oo(Nl[0],t);for(var n=1;n<Nl.length;n++){var r=Nl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Ar!==null&&Oo(Ar,t),kr!==null&&Oo(kr,t),Pr!==null&&Oo(Pr,t),ya.forEach(e),va.forEach(e),n=0;n<yr.length;n++)r=yr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<yr.length&&(n=yr[0],n.blockedOn===null);)f0(n),n.blockedOn===null&&yr.shift()}var Ds=ir.ReactCurrentBatchConfig,Cu=!0;function pS(t,e,n,r){var i=ge,s=Ds.transition;Ds.transition=null;try{ge=1,ep(t,e,n,r)}finally{ge=i,Ds.transition=s}}function mS(t,e,n,r){var i=ge,s=Ds.transition;Ds.transition=null;try{ge=4,ep(t,e,n,r)}finally{ge=i,Ds.transition=s}}function ep(t,e,n,r){if(Cu){var i=Rd(t,e,n,r);if(i===null)Vh(t,e,r,Au,n),Sg(t,r);else if(dS(i,t,e,n,r))r.stopPropagation();else if(Sg(t,r),e&4&&-1<hS.indexOf(t)){for(;i!==null;){var s=Ha(i);if(s!==null&&u0(s),s=Rd(t,e,n,r),s===null&&Vh(t,e,r,Au,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Vh(t,e,r,null,n)}}var Au=null;function Rd(t,e,n,r){if(Au=null,t=Yf(r),t=mi(t),t!==null)if(e=Ui(t),e===null)t=null;else if(n=e.tag,n===13){if(t=t0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Au=t,null}function p0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(nS()){case Jf:return 1;case s0:return 4;case Su:case rS:return 16;case o0:return 536870912;default:return 16}default:return 16}}var Tr=null,tp=null,nu=null;function m0(){if(nu)return nu;var t,e=tp,n=e.length,r,i="value"in Tr?Tr.value:Tr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return nu=i.slice(t,1<r?1-r:void 0)}function ru(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Dl(){return!0}function Cg(){return!1}function Wt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Dl:Cg,this.isPropagationStopped=Cg,this}return be(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Dl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Dl)},persist:function(){},isPersistent:Dl}),e}var io={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},np=Wt(io),Wa=be({},io,{view:0,detail:0}),gS=Wt(Wa),Ch,Ah,Lo,vc=be({},Wa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Lo&&(Lo&&t.type==="mousemove"?(Ch=t.screenX-Lo.screenX,Ah=t.screenY-Lo.screenY):Ah=Ch=0,Lo=t),Ch)},movementY:function(t){return"movementY"in t?t.movementY:Ah}}),Ag=Wt(vc),yS=be({},vc,{dataTransfer:0}),vS=Wt(yS),_S=be({},Wa,{relatedTarget:0}),kh=Wt(_S),wS=be({},io,{animationName:0,elapsedTime:0,pseudoElement:0}),ES=Wt(wS),IS=be({},io,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),TS=Wt(IS),SS=be({},io,{data:0}),kg=Wt(SS),xS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},CS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},AS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=AS[t])?!!e[t]:!1}function rp(){return kS}var PS=be({},Wa,{key:function(t){if(t.key){var e=xS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ru(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?CS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rp,charCode:function(t){return t.type==="keypress"?ru(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ru(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),RS=Wt(PS),bS=be({},vc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pg=Wt(bS),NS=be({},Wa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rp}),DS=Wt(NS),MS=be({},io,{propertyName:0,elapsedTime:0,pseudoElement:0}),VS=Wt(MS),OS=be({},vc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),LS=Wt(OS),jS=[9,13,27,32],ip=Qn&&"CompositionEvent"in window,ta=null;Qn&&"documentMode"in document&&(ta=document.documentMode);var FS=Qn&&"TextEvent"in window&&!ta,g0=Qn&&(!ip||ta&&8<ta&&11>=ta),Rg=" ",bg=!1;function y0(t,e){switch(t){case"keyup":return jS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function v0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var _s=!1;function US(t,e){switch(t){case"compositionend":return v0(e);case"keypress":return e.which!==32?null:(bg=!0,Rg);case"textInput":return t=e.data,t===Rg&&bg?null:t;default:return null}}function zS(t,e){if(_s)return t==="compositionend"||!ip&&y0(t,e)?(t=m0(),nu=tp=Tr=null,_s=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return g0&&e.locale!=="ko"?null:e.data;default:return null}}var BS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ng(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!BS[t.type]:e==="textarea"}function _0(t,e,n,r){Y_(r),e=ku(e,"onChange"),0<e.length&&(n=new np("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var na=null,wa=null;function $S(t){R0(t,0)}function _c(t){var e=Is(t);if($_(e))return t}function WS(t,e){if(t==="change")return e}var w0=!1;if(Qn){var Ph;if(Qn){var Rh="oninput"in document;if(!Rh){var Dg=document.createElement("div");Dg.setAttribute("oninput","return;"),Rh=typeof Dg.oninput=="function"}Ph=Rh}else Ph=!1;w0=Ph&&(!document.documentMode||9<document.documentMode)}function Mg(){na&&(na.detachEvent("onpropertychange",E0),wa=na=null)}function E0(t){if(t.propertyName==="value"&&_c(wa)){var e=[];_0(e,wa,t,Yf(t)),e0($S,e)}}function HS(t,e,n){t==="focusin"?(Mg(),na=e,wa=n,na.attachEvent("onpropertychange",E0)):t==="focusout"&&Mg()}function qS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return _c(wa)}function KS(t,e){if(t==="click")return _c(e)}function GS(t,e){if(t==="input"||t==="change")return _c(e)}function QS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var pn=typeof Object.is=="function"?Object.is:QS;function Ea(t,e){if(pn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!dd.call(e,i)||!pn(t[i],e[i]))return!1}return!0}function Vg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Og(t,e){var n=Vg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Vg(n)}}function I0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?I0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function T0(){for(var t=window,e=Eu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Eu(t.document)}return e}function sp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function YS(t){var e=T0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&I0(n.ownerDocument.documentElement,n)){if(r!==null&&sp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Og(n,s);var o=Og(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var JS=Qn&&"documentMode"in document&&11>=document.documentMode,ws=null,bd=null,ra=null,Nd=!1;function Lg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Nd||ws==null||ws!==Eu(r)||(r=ws,"selectionStart"in r&&sp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ra&&Ea(ra,r)||(ra=r,r=ku(bd,"onSelect"),0<r.length&&(e=new np("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ws)))}function Ml(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Es={animationend:Ml("Animation","AnimationEnd"),animationiteration:Ml("Animation","AnimationIteration"),animationstart:Ml("Animation","AnimationStart"),transitionend:Ml("Transition","TransitionEnd")},bh={},S0={};Qn&&(S0=document.createElement("div").style,"AnimationEvent"in window||(delete Es.animationend.animation,delete Es.animationiteration.animation,delete Es.animationstart.animation),"TransitionEvent"in window||delete Es.transitionend.transition);function wc(t){if(bh[t])return bh[t];if(!Es[t])return t;var e=Es[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in S0)return bh[t]=e[n];return t}var x0=wc("animationend"),C0=wc("animationiteration"),A0=wc("animationstart"),k0=wc("transitionend"),P0=new Map,jg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gr(t,e){P0.set(t,e),Fi(e,[t])}for(var Nh=0;Nh<jg.length;Nh++){var Dh=jg[Nh],XS=Dh.toLowerCase(),ZS=Dh[0].toUpperCase()+Dh.slice(1);Gr(XS,"on"+ZS)}Gr(x0,"onAnimationEnd");Gr(C0,"onAnimationIteration");Gr(A0,"onAnimationStart");Gr("dblclick","onDoubleClick");Gr("focusin","onFocus");Gr("focusout","onBlur");Gr(k0,"onTransitionEnd");$s("onMouseEnter",["mouseout","mouseover"]);$s("onMouseLeave",["mouseout","mouseover"]);$s("onPointerEnter",["pointerout","pointerover"]);$s("onPointerLeave",["pointerout","pointerover"]);Fi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ex=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ho));function Fg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,XT(r,e,void 0,t),t.currentTarget=null}function R0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Fg(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Fg(i,l,c),s=u}}}if(Tu)throw t=Ad,Tu=!1,Ad=null,t}function Ie(t,e){var n=e[Ld];n===void 0&&(n=e[Ld]=new Set);var r=t+"__bubble";n.has(r)||(b0(e,t,2,!1),n.add(r))}function Mh(t,e,n){var r=0;e&&(r|=4),b0(n,t,r,e)}var Vl="_reactListening"+Math.random().toString(36).slice(2);function Ia(t){if(!t[Vl]){t[Vl]=!0,j_.forEach(function(n){n!=="selectionchange"&&(ex.has(n)||Mh(n,!1,t),Mh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Vl]||(e[Vl]=!0,Mh("selectionchange",!1,e))}}function b0(t,e,n,r){switch(p0(e)){case 1:var i=pS;break;case 4:i=mS;break;default:i=ep}n=i.bind(null,e,n,t),i=void 0,!Cd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Vh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=mi(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}e0(function(){var c=s,p=Yf(n),m=[];e:{var g=P0.get(t);if(g!==void 0){var I=np,C=t;switch(t){case"keypress":if(ru(n)===0)break e;case"keydown":case"keyup":I=RS;break;case"focusin":C="focus",I=kh;break;case"focusout":C="blur",I=kh;break;case"beforeblur":case"afterblur":I=kh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=Ag;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=vS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=DS;break;case x0:case C0:case A0:I=ES;break;case k0:I=VS;break;case"scroll":I=gS;break;case"wheel":I=LS;break;case"copy":case"cut":case"paste":I=TS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=Pg}var P=(e&4)!==0,b=!P&&t==="scroll",E=P?g!==null?g+"Capture":null:g;P=[];for(var _=c,x;_!==null;){x=_;var V=x.stateNode;if(x.tag===5&&V!==null&&(x=V,E!==null&&(V=ga(_,E),V!=null&&P.push(Ta(_,V,x)))),b)break;_=_.return}0<P.length&&(g=new I(g,C,null,n,p),m.push({event:g,listeners:P}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",I=t==="mouseout"||t==="pointerout",g&&n!==Sd&&(C=n.relatedTarget||n.fromElement)&&(mi(C)||C[Yn]))break e;if((I||g)&&(g=p.window===p?p:(g=p.ownerDocument)?g.defaultView||g.parentWindow:window,I?(C=n.relatedTarget||n.toElement,I=c,C=C?mi(C):null,C!==null&&(b=Ui(C),C!==b||C.tag!==5&&C.tag!==6)&&(C=null)):(I=null,C=c),I!==C)){if(P=Ag,V="onMouseLeave",E="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(P=Pg,V="onPointerLeave",E="onPointerEnter",_="pointer"),b=I==null?g:Is(I),x=C==null?g:Is(C),g=new P(V,_+"leave",I,n,p),g.target=b,g.relatedTarget=x,V=null,mi(p)===c&&(P=new P(E,_+"enter",C,n,p),P.target=x,P.relatedTarget=b,V=P),b=V,I&&C)t:{for(P=I,E=C,_=0,x=P;x;x=cs(x))_++;for(x=0,V=E;V;V=cs(V))x++;for(;0<_-x;)P=cs(P),_--;for(;0<x-_;)E=cs(E),x--;for(;_--;){if(P===E||E!==null&&P===E.alternate)break t;P=cs(P),E=cs(E)}P=null}else P=null;I!==null&&Ug(m,g,I,P,!1),C!==null&&b!==null&&Ug(m,b,C,P,!0)}}e:{if(g=c?Is(c):window,I=g.nodeName&&g.nodeName.toLowerCase(),I==="select"||I==="input"&&g.type==="file")var L=WS;else if(Ng(g))if(w0)L=GS;else{L=qS;var U=HS}else(I=g.nodeName)&&I.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(L=KS);if(L&&(L=L(t,c))){_0(m,L,n,p);break e}U&&U(t,g,c),t==="focusout"&&(U=g._wrapperState)&&U.controlled&&g.type==="number"&&_d(g,"number",g.value)}switch(U=c?Is(c):window,t){case"focusin":(Ng(U)||U.contentEditable==="true")&&(ws=U,bd=c,ra=null);break;case"focusout":ra=bd=ws=null;break;case"mousedown":Nd=!0;break;case"contextmenu":case"mouseup":case"dragend":Nd=!1,Lg(m,n,p);break;case"selectionchange":if(JS)break;case"keydown":case"keyup":Lg(m,n,p)}var w;if(ip)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else _s?y0(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(g0&&n.locale!=="ko"&&(_s||v!=="onCompositionStart"?v==="onCompositionEnd"&&_s&&(w=m0()):(Tr=p,tp="value"in Tr?Tr.value:Tr.textContent,_s=!0)),U=ku(c,v),0<U.length&&(v=new kg(v,t,null,n,p),m.push({event:v,listeners:U}),w?v.data=w:(w=v0(n),w!==null&&(v.data=w)))),(w=FS?US(t,n):zS(t,n))&&(c=ku(c,"onBeforeInput"),0<c.length&&(p=new kg("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:c}),p.data=w))}R0(m,e)})}function Ta(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ku(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ga(t,n),s!=null&&r.unshift(Ta(t,s,i)),s=ga(t,e),s!=null&&r.push(Ta(t,s,i))),t=t.return}return r}function cs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ug(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=ga(n,s),u!=null&&o.unshift(Ta(n,u,l))):i||(u=ga(n,s),u!=null&&o.push(Ta(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var tx=/\r\n?/g,nx=/\u0000|\uFFFD/g;function zg(t){return(typeof t=="string"?t:""+t).replace(tx,`
`).replace(nx,"")}function Ol(t,e,n){if(e=zg(e),zg(t)!==e&&n)throw Error(z(425))}function Pu(){}var Dd=null,Md=null;function Vd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Od=typeof setTimeout=="function"?setTimeout:void 0,rx=typeof clearTimeout=="function"?clearTimeout:void 0,Bg=typeof Promise=="function"?Promise:void 0,ix=typeof queueMicrotask=="function"?queueMicrotask:typeof Bg<"u"?function(t){return Bg.resolve(null).then(t).catch(sx)}:Od;function sx(t){setTimeout(function(){throw t})}function Oh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),_a(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);_a(e)}function Rr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function $g(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var so=Math.random().toString(36).slice(2),Cn="__reactFiber$"+so,Sa="__reactProps$"+so,Yn="__reactContainer$"+so,Ld="__reactEvents$"+so,ox="__reactListeners$"+so,ax="__reactHandles$"+so;function mi(t){var e=t[Cn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Yn]||n[Cn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=$g(t);t!==null;){if(n=t[Cn])return n;t=$g(t)}return e}t=n,n=t.parentNode}return null}function Ha(t){return t=t[Cn]||t[Yn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Is(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(z(33))}function Ec(t){return t[Sa]||null}var jd=[],Ts=-1;function Qr(t){return{current:t}}function Se(t){0>Ts||(t.current=jd[Ts],jd[Ts]=null,Ts--)}function we(t,e){Ts++,jd[Ts]=t.current,t.current=e}var Ur={},yt=Qr(Ur),bt=Qr(!1),Ci=Ur;function Ws(t,e){var n=t.type.contextTypes;if(!n)return Ur;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Nt(t){return t=t.childContextTypes,t!=null}function Ru(){Se(bt),Se(yt)}function Wg(t,e,n){if(yt.current!==Ur)throw Error(z(168));we(yt,e),we(bt,n)}function N0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(z(108,HT(t)||"Unknown",i));return be({},n,r)}function bu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ur,Ci=yt.current,we(yt,t),we(bt,bt.current),!0}function Hg(t,e,n){var r=t.stateNode;if(!r)throw Error(z(169));n?(t=N0(t,e,Ci),r.__reactInternalMemoizedMergedChildContext=t,Se(bt),Se(yt),we(yt,t)):Se(bt),we(bt,n)}var zn=null,Ic=!1,Lh=!1;function D0(t){zn===null?zn=[t]:zn.push(t)}function lx(t){Ic=!0,D0(t)}function Yr(){if(!Lh&&zn!==null){Lh=!0;var t=0,e=ge;try{var n=zn;for(ge=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}zn=null,Ic=!1}catch(i){throw zn!==null&&(zn=zn.slice(t+1)),i0(Jf,Yr),i}finally{ge=e,Lh=!1}}return null}var Ss=[],xs=0,Nu=null,Du=0,Kt=[],Gt=0,Ai=null,Bn=1,$n="";function di(t,e){Ss[xs++]=Du,Ss[xs++]=Nu,Nu=t,Du=e}function M0(t,e,n){Kt[Gt++]=Bn,Kt[Gt++]=$n,Kt[Gt++]=Ai,Ai=t;var r=Bn;t=$n;var i=32-hn(r)-1;r&=~(1<<i),n+=1;var s=32-hn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Bn=1<<32-hn(e)+i|n<<i|r,$n=s+t}else Bn=1<<s|n<<i|r,$n=t}function op(t){t.return!==null&&(di(t,1),M0(t,1,0))}function ap(t){for(;t===Nu;)Nu=Ss[--xs],Ss[xs]=null,Du=Ss[--xs],Ss[xs]=null;for(;t===Ai;)Ai=Kt[--Gt],Kt[Gt]=null,$n=Kt[--Gt],Kt[Gt]=null,Bn=Kt[--Gt],Kt[Gt]=null}var Ft=null,Lt=null,Ae=!1,un=null;function V0(t,e){var n=Jt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function qg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ft=t,Lt=Rr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ft=t,Lt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ai!==null?{id:Bn,overflow:$n}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Jt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ft=t,Lt=null,!0):!1;default:return!1}}function Fd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ud(t){if(Ae){var e=Lt;if(e){var n=e;if(!qg(t,e)){if(Fd(t))throw Error(z(418));e=Rr(n.nextSibling);var r=Ft;e&&qg(t,e)?V0(r,n):(t.flags=t.flags&-4097|2,Ae=!1,Ft=t)}}else{if(Fd(t))throw Error(z(418));t.flags=t.flags&-4097|2,Ae=!1,Ft=t}}}function Kg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ft=t}function Ll(t){if(t!==Ft)return!1;if(!Ae)return Kg(t),Ae=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Vd(t.type,t.memoizedProps)),e&&(e=Lt)){if(Fd(t))throw O0(),Error(z(418));for(;e;)V0(t,e),e=Rr(e.nextSibling)}if(Kg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(z(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Lt=Rr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Lt=null}}else Lt=Ft?Rr(t.stateNode.nextSibling):null;return!0}function O0(){for(var t=Lt;t;)t=Rr(t.nextSibling)}function Hs(){Lt=Ft=null,Ae=!1}function lp(t){un===null?un=[t]:un.push(t)}var ux=ir.ReactCurrentBatchConfig;function jo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,t))}return t}function jl(t,e){throw t=Object.prototype.toString.call(e),Error(z(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Gg(t){var e=t._init;return e(t._payload)}function L0(t){function e(E,_){if(t){var x=E.deletions;x===null?(E.deletions=[_],E.flags|=16):x.push(_)}}function n(E,_){if(!t)return null;for(;_!==null;)e(E,_),_=_.sibling;return null}function r(E,_){for(E=new Map;_!==null;)_.key!==null?E.set(_.key,_):E.set(_.index,_),_=_.sibling;return E}function i(E,_){return E=Mr(E,_),E.index=0,E.sibling=null,E}function s(E,_,x){return E.index=x,t?(x=E.alternate,x!==null?(x=x.index,x<_?(E.flags|=2,_):x):(E.flags|=2,_)):(E.flags|=1048576,_)}function o(E){return t&&E.alternate===null&&(E.flags|=2),E}function l(E,_,x,V){return _===null||_.tag!==6?(_=Wh(x,E.mode,V),_.return=E,_):(_=i(_,x),_.return=E,_)}function u(E,_,x,V){var L=x.type;return L===vs?p(E,_,x.props.children,V,x.key):_!==null&&(_.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===mr&&Gg(L)===_.type)?(V=i(_,x.props),V.ref=jo(E,_,x),V.return=E,V):(V=cu(x.type,x.key,x.props,null,E.mode,V),V.ref=jo(E,_,x),V.return=E,V)}function c(E,_,x,V){return _===null||_.tag!==4||_.stateNode.containerInfo!==x.containerInfo||_.stateNode.implementation!==x.implementation?(_=Hh(x,E.mode,V),_.return=E,_):(_=i(_,x.children||[]),_.return=E,_)}function p(E,_,x,V,L){return _===null||_.tag!==7?(_=Ei(x,E.mode,V,L),_.return=E,_):(_=i(_,x),_.return=E,_)}function m(E,_,x){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Wh(""+_,E.mode,x),_.return=E,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Al:return x=cu(_.type,_.key,_.props,null,E.mode,x),x.ref=jo(E,null,_),x.return=E,x;case ys:return _=Hh(_,E.mode,x),_.return=E,_;case mr:var V=_._init;return m(E,V(_._payload),x)}if($o(_)||Do(_))return _=Ei(_,E.mode,x,null),_.return=E,_;jl(E,_)}return null}function g(E,_,x,V){var L=_!==null?_.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return L!==null?null:l(E,_,""+x,V);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Al:return x.key===L?u(E,_,x,V):null;case ys:return x.key===L?c(E,_,x,V):null;case mr:return L=x._init,g(E,_,L(x._payload),V)}if($o(x)||Do(x))return L!==null?null:p(E,_,x,V,null);jl(E,x)}return null}function I(E,_,x,V,L){if(typeof V=="string"&&V!==""||typeof V=="number")return E=E.get(x)||null,l(_,E,""+V,L);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case Al:return E=E.get(V.key===null?x:V.key)||null,u(_,E,V,L);case ys:return E=E.get(V.key===null?x:V.key)||null,c(_,E,V,L);case mr:var U=V._init;return I(E,_,x,U(V._payload),L)}if($o(V)||Do(V))return E=E.get(x)||null,p(_,E,V,L,null);jl(_,V)}return null}function C(E,_,x,V){for(var L=null,U=null,w=_,v=_=0,T=null;w!==null&&v<x.length;v++){w.index>v?(T=w,w=null):T=w.sibling;var A=g(E,w,x[v],V);if(A===null){w===null&&(w=T);break}t&&w&&A.alternate===null&&e(E,w),_=s(A,_,v),U===null?L=A:U.sibling=A,U=A,w=T}if(v===x.length)return n(E,w),Ae&&di(E,v),L;if(w===null){for(;v<x.length;v++)w=m(E,x[v],V),w!==null&&(_=s(w,_,v),U===null?L=w:U.sibling=w,U=w);return Ae&&di(E,v),L}for(w=r(E,w);v<x.length;v++)T=I(w,E,v,x[v],V),T!==null&&(t&&T.alternate!==null&&w.delete(T.key===null?v:T.key),_=s(T,_,v),U===null?L=T:U.sibling=T,U=T);return t&&w.forEach(function(k){return e(E,k)}),Ae&&di(E,v),L}function P(E,_,x,V){var L=Do(x);if(typeof L!="function")throw Error(z(150));if(x=L.call(x),x==null)throw Error(z(151));for(var U=L=null,w=_,v=_=0,T=null,A=x.next();w!==null&&!A.done;v++,A=x.next()){w.index>v?(T=w,w=null):T=w.sibling;var k=g(E,w,A.value,V);if(k===null){w===null&&(w=T);break}t&&w&&k.alternate===null&&e(E,w),_=s(k,_,v),U===null?L=k:U.sibling=k,U=k,w=T}if(A.done)return n(E,w),Ae&&di(E,v),L;if(w===null){for(;!A.done;v++,A=x.next())A=m(E,A.value,V),A!==null&&(_=s(A,_,v),U===null?L=A:U.sibling=A,U=A);return Ae&&di(E,v),L}for(w=r(E,w);!A.done;v++,A=x.next())A=I(w,E,v,A.value,V),A!==null&&(t&&A.alternate!==null&&w.delete(A.key===null?v:A.key),_=s(A,_,v),U===null?L=A:U.sibling=A,U=A);return t&&w.forEach(function(N){return e(E,N)}),Ae&&di(E,v),L}function b(E,_,x,V){if(typeof x=="object"&&x!==null&&x.type===vs&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Al:e:{for(var L=x.key,U=_;U!==null;){if(U.key===L){if(L=x.type,L===vs){if(U.tag===7){n(E,U.sibling),_=i(U,x.props.children),_.return=E,E=_;break e}}else if(U.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===mr&&Gg(L)===U.type){n(E,U.sibling),_=i(U,x.props),_.ref=jo(E,U,x),_.return=E,E=_;break e}n(E,U);break}else e(E,U);U=U.sibling}x.type===vs?(_=Ei(x.props.children,E.mode,V,x.key),_.return=E,E=_):(V=cu(x.type,x.key,x.props,null,E.mode,V),V.ref=jo(E,_,x),V.return=E,E=V)}return o(E);case ys:e:{for(U=x.key;_!==null;){if(_.key===U)if(_.tag===4&&_.stateNode.containerInfo===x.containerInfo&&_.stateNode.implementation===x.implementation){n(E,_.sibling),_=i(_,x.children||[]),_.return=E,E=_;break e}else{n(E,_);break}else e(E,_);_=_.sibling}_=Hh(x,E.mode,V),_.return=E,E=_}return o(E);case mr:return U=x._init,b(E,_,U(x._payload),V)}if($o(x))return C(E,_,x,V);if(Do(x))return P(E,_,x,V);jl(E,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,_!==null&&_.tag===6?(n(E,_.sibling),_=i(_,x),_.return=E,E=_):(n(E,_),_=Wh(x,E.mode,V),_.return=E,E=_),o(E)):n(E,_)}return b}var qs=L0(!0),j0=L0(!1),Mu=Qr(null),Vu=null,Cs=null,up=null;function cp(){up=Cs=Vu=null}function hp(t){var e=Mu.current;Se(Mu),t._currentValue=e}function zd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ms(t,e){Vu=t,up=Cs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Rt=!0),t.firstContext=null)}function tn(t){var e=t._currentValue;if(up!==t)if(t={context:t,memoizedValue:e,next:null},Cs===null){if(Vu===null)throw Error(z(308));Cs=t,Vu.dependencies={lanes:0,firstContext:t}}else Cs=Cs.next=t;return e}var gi=null;function dp(t){gi===null?gi=[t]:gi.push(t)}function F0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,dp(e)):(n.next=i.next,i.next=n),e.interleaved=n,Jn(t,r)}function Jn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var gr=!1;function fp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function U0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function qn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function br(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,fe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Jn(t,n)}return i=r.interleaved,i===null?(e.next=e,dp(r)):(e.next=i.next,i.next=e),r.interleaved=e,Jn(t,n)}function iu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Xf(t,n)}}function Qg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ou(t,e,n,r){var i=t.updateQueue;gr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var p=t.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==o&&(l===null?p.firstBaseUpdate=c:l.next=c,p.lastBaseUpdate=u))}if(s!==null){var m=i.baseState;o=0,p=c=u=null,l=s;do{var g=l.lane,I=l.eventTime;if((r&g)===g){p!==null&&(p=p.next={eventTime:I,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var C=t,P=l;switch(g=e,I=n,P.tag){case 1:if(C=P.payload,typeof C=="function"){m=C.call(I,m,g);break e}m=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=P.payload,g=typeof C=="function"?C.call(I,m,g):C,g==null)break e;m=be({},m,g);break e;case 2:gr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else I={eventTime:I,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(c=p=I,u=m):p=p.next=I,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(p===null&&(u=m),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=p,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Pi|=o,t.lanes=o,t.memoizedState=m}}function Yg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(z(191,i));i.call(r)}}}var qa={},Pn=Qr(qa),xa=Qr(qa),Ca=Qr(qa);function yi(t){if(t===qa)throw Error(z(174));return t}function pp(t,e){switch(we(Ca,e),we(xa,t),we(Pn,qa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ed(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ed(e,t)}Se(Pn),we(Pn,e)}function Ks(){Se(Pn),Se(xa),Se(Ca)}function z0(t){yi(Ca.current);var e=yi(Pn.current),n=Ed(e,t.type);e!==n&&(we(xa,t),we(Pn,n))}function mp(t){xa.current===t&&(Se(Pn),Se(xa))}var Pe=Qr(0);function Lu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var jh=[];function gp(){for(var t=0;t<jh.length;t++)jh[t]._workInProgressVersionPrimary=null;jh.length=0}var su=ir.ReactCurrentDispatcher,Fh=ir.ReactCurrentBatchConfig,ki=0,Re=null,Ge=null,rt=null,ju=!1,ia=!1,Aa=0,cx=0;function dt(){throw Error(z(321))}function yp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!pn(t[n],e[n]))return!1;return!0}function vp(t,e,n,r,i,s){if(ki=s,Re=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,su.current=t===null||t.memoizedState===null?px:mx,t=n(r,i),ia){s=0;do{if(ia=!1,Aa=0,25<=s)throw Error(z(301));s+=1,rt=Ge=null,e.updateQueue=null,su.current=gx,t=n(r,i)}while(ia)}if(su.current=Fu,e=Ge!==null&&Ge.next!==null,ki=0,rt=Ge=Re=null,ju=!1,e)throw Error(z(300));return t}function _p(){var t=Aa!==0;return Aa=0,t}function Sn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rt===null?Re.memoizedState=rt=t:rt=rt.next=t,rt}function nn(){if(Ge===null){var t=Re.alternate;t=t!==null?t.memoizedState:null}else t=Ge.next;var e=rt===null?Re.memoizedState:rt.next;if(e!==null)rt=e,Ge=t;else{if(t===null)throw Error(z(310));Ge=t,t={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},rt===null?Re.memoizedState=rt=t:rt=rt.next=t}return rt}function ka(t,e){return typeof e=="function"?e(t):e}function Uh(t){var e=nn(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=Ge,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var p=c.lane;if((ki&p)===p)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var m={lane:p,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,Re.lanes|=p,Pi|=p}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,pn(r,e.memoizedState)||(Rt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Re.lanes|=s,Pi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function zh(t){var e=nn(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);pn(s,e.memoizedState)||(Rt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function B0(){}function $0(t,e){var n=Re,r=nn(),i=e(),s=!pn(r.memoizedState,i);if(s&&(r.memoizedState=i,Rt=!0),r=r.queue,wp(q0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||rt!==null&&rt.memoizedState.tag&1){if(n.flags|=2048,Pa(9,H0.bind(null,n,r,i,e),void 0,null),it===null)throw Error(z(349));ki&30||W0(n,e,i)}return i}function W0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Re.updateQueue,e===null?(e={lastEffect:null,stores:null},Re.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function H0(t,e,n,r){e.value=n,e.getSnapshot=r,K0(e)&&G0(t)}function q0(t,e,n){return n(function(){K0(e)&&G0(t)})}function K0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!pn(t,n)}catch{return!0}}function G0(t){var e=Jn(t,1);e!==null&&dn(e,t,1,-1)}function Jg(t){var e=Sn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ka,lastRenderedState:t},e.queue=t,t=t.dispatch=fx.bind(null,Re,t),[e.memoizedState,t]}function Pa(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Re.updateQueue,e===null?(e={lastEffect:null,stores:null},Re.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Q0(){return nn().memoizedState}function ou(t,e,n,r){var i=Sn();Re.flags|=t,i.memoizedState=Pa(1|e,n,void 0,r===void 0?null:r)}function Tc(t,e,n,r){var i=nn();r=r===void 0?null:r;var s=void 0;if(Ge!==null){var o=Ge.memoizedState;if(s=o.destroy,r!==null&&yp(r,o.deps)){i.memoizedState=Pa(e,n,s,r);return}}Re.flags|=t,i.memoizedState=Pa(1|e,n,s,r)}function Xg(t,e){return ou(8390656,8,t,e)}function wp(t,e){return Tc(2048,8,t,e)}function Y0(t,e){return Tc(4,2,t,e)}function J0(t,e){return Tc(4,4,t,e)}function X0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Z0(t,e,n){return n=n!=null?n.concat([t]):null,Tc(4,4,X0.bind(null,e,t),n)}function Ep(){}function ew(t,e){var n=nn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&yp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function tw(t,e){var n=nn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&yp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function nw(t,e,n){return ki&21?(pn(n,e)||(n=a0(),Re.lanes|=n,Pi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Rt=!0),t.memoizedState=n)}function hx(t,e){var n=ge;ge=n!==0&&4>n?n:4,t(!0);var r=Fh.transition;Fh.transition={};try{t(!1),e()}finally{ge=n,Fh.transition=r}}function rw(){return nn().memoizedState}function dx(t,e,n){var r=Dr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},iw(t))sw(e,n);else if(n=F0(t,e,n,r),n!==null){var i=wt();dn(n,t,r,i),ow(n,e,r)}}function fx(t,e,n){var r=Dr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(iw(t))sw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,pn(l,o)){var u=e.interleaved;u===null?(i.next=i,dp(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=F0(t,e,i,r),n!==null&&(i=wt(),dn(n,t,r,i),ow(n,e,r))}}function iw(t){var e=t.alternate;return t===Re||e!==null&&e===Re}function sw(t,e){ia=ju=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function ow(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Xf(t,n)}}var Fu={readContext:tn,useCallback:dt,useContext:dt,useEffect:dt,useImperativeHandle:dt,useInsertionEffect:dt,useLayoutEffect:dt,useMemo:dt,useReducer:dt,useRef:dt,useState:dt,useDebugValue:dt,useDeferredValue:dt,useTransition:dt,useMutableSource:dt,useSyncExternalStore:dt,useId:dt,unstable_isNewReconciler:!1},px={readContext:tn,useCallback:function(t,e){return Sn().memoizedState=[t,e===void 0?null:e],t},useContext:tn,useEffect:Xg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ou(4194308,4,X0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ou(4194308,4,t,e)},useInsertionEffect:function(t,e){return ou(4,2,t,e)},useMemo:function(t,e){var n=Sn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Sn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=dx.bind(null,Re,t),[r.memoizedState,t]},useRef:function(t){var e=Sn();return t={current:t},e.memoizedState=t},useState:Jg,useDebugValue:Ep,useDeferredValue:function(t){return Sn().memoizedState=t},useTransition:function(){var t=Jg(!1),e=t[0];return t=hx.bind(null,t[1]),Sn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Re,i=Sn();if(Ae){if(n===void 0)throw Error(z(407));n=n()}else{if(n=e(),it===null)throw Error(z(349));ki&30||W0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Xg(q0.bind(null,r,s,t),[t]),r.flags|=2048,Pa(9,H0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Sn(),e=it.identifierPrefix;if(Ae){var n=$n,r=Bn;n=(r&~(1<<32-hn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Aa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=cx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},mx={readContext:tn,useCallback:ew,useContext:tn,useEffect:wp,useImperativeHandle:Z0,useInsertionEffect:Y0,useLayoutEffect:J0,useMemo:tw,useReducer:Uh,useRef:Q0,useState:function(){return Uh(ka)},useDebugValue:Ep,useDeferredValue:function(t){var e=nn();return nw(e,Ge.memoizedState,t)},useTransition:function(){var t=Uh(ka)[0],e=nn().memoizedState;return[t,e]},useMutableSource:B0,useSyncExternalStore:$0,useId:rw,unstable_isNewReconciler:!1},gx={readContext:tn,useCallback:ew,useContext:tn,useEffect:wp,useImperativeHandle:Z0,useInsertionEffect:Y0,useLayoutEffect:J0,useMemo:tw,useReducer:zh,useRef:Q0,useState:function(){return zh(ka)},useDebugValue:Ep,useDeferredValue:function(t){var e=nn();return Ge===null?e.memoizedState=t:nw(e,Ge.memoizedState,t)},useTransition:function(){var t=zh(ka)[0],e=nn().memoizedState;return[t,e]},useMutableSource:B0,useSyncExternalStore:$0,useId:rw,unstable_isNewReconciler:!1};function an(t,e){if(t&&t.defaultProps){e=be({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Bd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:be({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Sc={isMounted:function(t){return(t=t._reactInternals)?Ui(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=wt(),i=Dr(t),s=qn(r,i);s.payload=e,n!=null&&(s.callback=n),e=br(t,s,i),e!==null&&(dn(e,t,i,r),iu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=wt(),i=Dr(t),s=qn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=br(t,s,i),e!==null&&(dn(e,t,i,r),iu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=wt(),r=Dr(t),i=qn(n,r);i.tag=2,e!=null&&(i.callback=e),e=br(t,i,r),e!==null&&(dn(e,t,r,n),iu(e,t,r))}};function Zg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ea(n,r)||!Ea(i,s):!0}function aw(t,e,n){var r=!1,i=Ur,s=e.contextType;return typeof s=="object"&&s!==null?s=tn(s):(i=Nt(e)?Ci:yt.current,r=e.contextTypes,s=(r=r!=null)?Ws(t,i):Ur),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Sc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function ey(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Sc.enqueueReplaceState(e,e.state,null)}function $d(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},fp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=tn(s):(s=Nt(e)?Ci:yt.current,i.context=Ws(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Bd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Sc.enqueueReplaceState(i,i.state,null),Ou(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Gs(t,e){try{var n="",r=e;do n+=WT(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Bh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Wd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var yx=typeof WeakMap=="function"?WeakMap:Map;function lw(t,e,n){n=qn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){zu||(zu=!0,ef=r),Wd(t,e)},n}function uw(t,e,n){n=qn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Wd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Wd(t,e),typeof r!="function"&&(Nr===null?Nr=new Set([this]):Nr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function ty(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new yx;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=bx.bind(null,t,e,n),e.then(t,t))}function ny(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ry(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=qn(-1,1),e.tag=2,br(n,e,1))),n.lanes|=1),t)}var vx=ir.ReactCurrentOwner,Rt=!1;function _t(t,e,n,r){e.child=t===null?j0(e,null,n,r):qs(e,t.child,n,r)}function iy(t,e,n,r,i){n=n.render;var s=e.ref;return Ms(e,i),r=vp(t,e,n,r,s,i),n=_p(),t!==null&&!Rt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Xn(t,e,i)):(Ae&&n&&op(e),e.flags|=1,_t(t,e,r,i),e.child)}function sy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Pp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,cw(t,e,s,r,i)):(t=cu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ea,n(o,r)&&t.ref===e.ref)return Xn(t,e,i)}return e.flags|=1,t=Mr(s,r),t.ref=e.ref,t.return=e,e.child=t}function cw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ea(s,r)&&t.ref===e.ref)if(Rt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Rt=!0);else return e.lanes=t.lanes,Xn(t,e,i)}return Hd(t,e,n,r,i)}function hw(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},we(ks,Ot),Ot|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,we(ks,Ot),Ot|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,we(ks,Ot),Ot|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,we(ks,Ot),Ot|=r;return _t(t,e,i,n),e.child}function dw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Hd(t,e,n,r,i){var s=Nt(n)?Ci:yt.current;return s=Ws(e,s),Ms(e,i),n=vp(t,e,n,r,s,i),r=_p(),t!==null&&!Rt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Xn(t,e,i)):(Ae&&r&&op(e),e.flags|=1,_t(t,e,n,i),e.child)}function oy(t,e,n,r,i){if(Nt(n)){var s=!0;bu(e)}else s=!1;if(Ms(e,i),e.stateNode===null)au(t,e),aw(e,n,r),$d(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=tn(c):(c=Nt(n)?Ci:yt.current,c=Ws(e,c));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&ey(e,o,r,c),gr=!1;var g=e.memoizedState;o.state=g,Ou(e,r,o,i),u=e.memoizedState,l!==r||g!==u||bt.current||gr?(typeof p=="function"&&(Bd(e,n,p,r),u=e.memoizedState),(l=gr||Zg(e,n,l,r,g,u,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,U0(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:an(e.type,l),o.props=c,m=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=tn(u):(u=Nt(n)?Ci:yt.current,u=Ws(e,u));var I=n.getDerivedStateFromProps;(p=typeof I=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||g!==u)&&ey(e,o,r,u),gr=!1,g=e.memoizedState,o.state=g,Ou(e,r,o,i);var C=e.memoizedState;l!==m||g!==C||bt.current||gr?(typeof I=="function"&&(Bd(e,n,I,r),C=e.memoizedState),(c=gr||Zg(e,n,c,r,g,C,u)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,C,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,C,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=C),o.props=r,o.state=C,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return qd(t,e,n,r,s,i)}function qd(t,e,n,r,i,s){dw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Hg(e,n,!1),Xn(t,e,s);r=e.stateNode,vx.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=qs(e,t.child,null,s),e.child=qs(e,null,l,s)):_t(t,e,l,s),e.memoizedState=r.state,i&&Hg(e,n,!0),e.child}function fw(t){var e=t.stateNode;e.pendingContext?Wg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Wg(t,e.context,!1),pp(t,e.containerInfo)}function ay(t,e,n,r,i){return Hs(),lp(i),e.flags|=256,_t(t,e,n,r),e.child}var Kd={dehydrated:null,treeContext:null,retryLane:0};function Gd(t){return{baseLanes:t,cachePool:null,transitions:null}}function pw(t,e,n){var r=e.pendingProps,i=Pe.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),we(Pe,i&1),t===null)return Ud(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ac(o,r,0,null),t=Ei(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Gd(n),e.memoizedState=Kd,t):Ip(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return _x(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Mr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Mr(l,s):(s=Ei(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Gd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Kd,r}return s=t.child,t=s.sibling,r=Mr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Ip(t,e){return e=Ac({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Fl(t,e,n,r){return r!==null&&lp(r),qs(e,t.child,null,n),t=Ip(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function _x(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Bh(Error(z(422))),Fl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ac({mode:"visible",children:r.children},i,0,null),s=Ei(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&qs(e,t.child,null,o),e.child.memoizedState=Gd(o),e.memoizedState=Kd,s);if(!(e.mode&1))return Fl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(z(419)),r=Bh(s,r,void 0),Fl(t,e,o,r)}if(l=(o&t.childLanes)!==0,Rt||l){if(r=it,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Jn(t,i),dn(r,t,i,-1))}return kp(),r=Bh(Error(z(421))),Fl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Nx.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Lt=Rr(i.nextSibling),Ft=e,Ae=!0,un=null,t!==null&&(Kt[Gt++]=Bn,Kt[Gt++]=$n,Kt[Gt++]=Ai,Bn=t.id,$n=t.overflow,Ai=e),e=Ip(e,r.children),e.flags|=4096,e)}function ly(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),zd(t.return,e,n)}function $h(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function mw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(_t(t,e,r.children,n),r=Pe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ly(t,n,e);else if(t.tag===19)ly(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(we(Pe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Lu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),$h(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Lu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}$h(e,!0,n,null,s);break;case"together":$h(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function au(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Xn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Pi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(z(153));if(e.child!==null){for(t=e.child,n=Mr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Mr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function wx(t,e,n){switch(e.tag){case 3:fw(e),Hs();break;case 5:z0(e);break;case 1:Nt(e.type)&&bu(e);break;case 4:pp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;we(Mu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(we(Pe,Pe.current&1),e.flags|=128,null):n&e.child.childLanes?pw(t,e,n):(we(Pe,Pe.current&1),t=Xn(t,e,n),t!==null?t.sibling:null);we(Pe,Pe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return mw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),we(Pe,Pe.current),r)break;return null;case 22:case 23:return e.lanes=0,hw(t,e,n)}return Xn(t,e,n)}var gw,Qd,yw,vw;gw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Qd=function(){};yw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,yi(Pn.current);var s=null;switch(n){case"input":i=yd(t,i),r=yd(t,r),s=[];break;case"select":i=be({},i,{value:void 0}),r=be({},r,{value:void 0}),s=[];break;case"textarea":i=wd(t,i),r=wd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Pu)}Id(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(pa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(pa.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Ie("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};vw=function(t,e,n,r){n!==r&&(e.flags|=4)};function Fo(t,e){if(!Ae)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ft(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Ex(t,e,n){var r=e.pendingProps;switch(ap(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ft(e),null;case 1:return Nt(e.type)&&Ru(),ft(e),null;case 3:return r=e.stateNode,Ks(),Se(bt),Se(yt),gp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ll(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,un!==null&&(rf(un),un=null))),Qd(t,e),ft(e),null;case 5:mp(e);var i=yi(Ca.current);if(n=e.type,t!==null&&e.stateNode!=null)yw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(z(166));return ft(e),null}if(t=yi(Pn.current),Ll(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Cn]=e,r[Sa]=s,t=(e.mode&1)!==0,n){case"dialog":Ie("cancel",r),Ie("close",r);break;case"iframe":case"object":case"embed":Ie("load",r);break;case"video":case"audio":for(i=0;i<Ho.length;i++)Ie(Ho[i],r);break;case"source":Ie("error",r);break;case"img":case"image":case"link":Ie("error",r),Ie("load",r);break;case"details":Ie("toggle",r);break;case"input":yg(r,s),Ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ie("invalid",r);break;case"textarea":_g(r,s),Ie("invalid",r)}Id(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Ol(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Ol(r.textContent,l,t),i=["children",""+l]):pa.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Ie("scroll",r)}switch(n){case"input":kl(r),vg(r,s,!0);break;case"textarea":kl(r),wg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Pu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=q_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Cn]=e,t[Sa]=r,gw(t,e,!1,!1),e.stateNode=t;e:{switch(o=Td(n,r),n){case"dialog":Ie("cancel",t),Ie("close",t),i=r;break;case"iframe":case"object":case"embed":Ie("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ho.length;i++)Ie(Ho[i],t);i=r;break;case"source":Ie("error",t),i=r;break;case"img":case"image":case"link":Ie("error",t),Ie("load",t),i=r;break;case"details":Ie("toggle",t),i=r;break;case"input":yg(t,r),i=yd(t,r),Ie("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=be({},r,{value:void 0}),Ie("invalid",t);break;case"textarea":_g(t,r),i=wd(t,r),Ie("invalid",t);break;default:i=r}Id(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Q_(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&K_(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ma(t,u):typeof u=="number"&&ma(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(pa.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Ie("scroll",t):u!=null&&qf(t,s,u,o))}switch(n){case"input":kl(t),vg(t,r,!1);break;case"textarea":kl(t),wg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Fr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Rs(t,!!r.multiple,s,!1):r.defaultValue!=null&&Rs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Pu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ft(e),null;case 6:if(t&&e.stateNode!=null)vw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(z(166));if(n=yi(Ca.current),yi(Pn.current),Ll(e)){if(r=e.stateNode,n=e.memoizedProps,r[Cn]=e,(s=r.nodeValue!==n)&&(t=Ft,t!==null))switch(t.tag){case 3:Ol(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ol(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Cn]=e,e.stateNode=r}return ft(e),null;case 13:if(Se(Pe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ae&&Lt!==null&&e.mode&1&&!(e.flags&128))O0(),Hs(),e.flags|=98560,s=!1;else if(s=Ll(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(z(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(z(317));s[Cn]=e}else Hs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ft(e),s=!1}else un!==null&&(rf(un),un=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Pe.current&1?Qe===0&&(Qe=3):kp())),e.updateQueue!==null&&(e.flags|=4),ft(e),null);case 4:return Ks(),Qd(t,e),t===null&&Ia(e.stateNode.containerInfo),ft(e),null;case 10:return hp(e.type._context),ft(e),null;case 17:return Nt(e.type)&&Ru(),ft(e),null;case 19:if(Se(Pe),s=e.memoizedState,s===null)return ft(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Fo(s,!1);else{if(Qe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Lu(t),o!==null){for(e.flags|=128,Fo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return we(Pe,Pe.current&1|2),e.child}t=t.sibling}s.tail!==null&&Fe()>Qs&&(e.flags|=128,r=!0,Fo(s,!1),e.lanes=4194304)}else{if(!r)if(t=Lu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Fo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ae)return ft(e),null}else 2*Fe()-s.renderingStartTime>Qs&&n!==1073741824&&(e.flags|=128,r=!0,Fo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Fe(),e.sibling=null,n=Pe.current,we(Pe,r?n&1|2:n&1),e):(ft(e),null);case 22:case 23:return Ap(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ot&1073741824&&(ft(e),e.subtreeFlags&6&&(e.flags|=8192)):ft(e),null;case 24:return null;case 25:return null}throw Error(z(156,e.tag))}function Ix(t,e){switch(ap(e),e.tag){case 1:return Nt(e.type)&&Ru(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ks(),Se(bt),Se(yt),gp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return mp(e),null;case 13:if(Se(Pe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(z(340));Hs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Se(Pe),null;case 4:return Ks(),null;case 10:return hp(e.type._context),null;case 22:case 23:return Ap(),null;case 24:return null;default:return null}}var Ul=!1,mt=!1,Tx=typeof WeakSet=="function"?WeakSet:Set,K=null;function As(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ve(t,e,r)}else n.current=null}function Yd(t,e,n){try{n()}catch(r){Ve(t,e,r)}}var uy=!1;function Sx(t,e){if(Dd=Cu,t=T0(),sp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,p=0,m=t,g=null;t:for(;;){for(var I;m!==n||i!==0&&m.nodeType!==3||(l=o+i),m!==s||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(I=m.firstChild)!==null;)g=m,m=I;for(;;){if(m===t)break t;if(g===n&&++c===i&&(l=o),g===s&&++p===r&&(u=o),(I=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=I}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Md={focusedElem:t,selectionRange:n},Cu=!1,K=e;K!==null;)if(e=K,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,K=t;else for(;K!==null;){e=K;try{var C=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var P=C.memoizedProps,b=C.memoizedState,E=e.stateNode,_=E.getSnapshotBeforeUpdate(e.elementType===e.type?P:an(e.type,P),b);E.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(V){Ve(e,e.return,V)}if(t=e.sibling,t!==null){t.return=e.return,K=t;break}K=e.return}return C=uy,uy=!1,C}function sa(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Yd(e,n,s)}i=i.next}while(i!==r)}}function xc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Jd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function _w(t){var e=t.alternate;e!==null&&(t.alternate=null,_w(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Cn],delete e[Sa],delete e[Ld],delete e[ox],delete e[ax])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ww(t){return t.tag===5||t.tag===3||t.tag===4}function cy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ww(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Xd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Pu));else if(r!==4&&(t=t.child,t!==null))for(Xd(t,e,n),t=t.sibling;t!==null;)Xd(t,e,n),t=t.sibling}function Zd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Zd(t,e,n),t=t.sibling;t!==null;)Zd(t,e,n),t=t.sibling}var ot=null,ln=!1;function fr(t,e,n){for(n=n.child;n!==null;)Ew(t,e,n),n=n.sibling}function Ew(t,e,n){if(kn&&typeof kn.onCommitFiberUnmount=="function")try{kn.onCommitFiberUnmount(yc,n)}catch{}switch(n.tag){case 5:mt||As(n,e);case 6:var r=ot,i=ln;ot=null,fr(t,e,n),ot=r,ln=i,ot!==null&&(ln?(t=ot,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ot.removeChild(n.stateNode));break;case 18:ot!==null&&(ln?(t=ot,n=n.stateNode,t.nodeType===8?Oh(t.parentNode,n):t.nodeType===1&&Oh(t,n),_a(t)):Oh(ot,n.stateNode));break;case 4:r=ot,i=ln,ot=n.stateNode.containerInfo,ln=!0,fr(t,e,n),ot=r,ln=i;break;case 0:case 11:case 14:case 15:if(!mt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Yd(n,e,o),i=i.next}while(i!==r)}fr(t,e,n);break;case 1:if(!mt&&(As(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ve(n,e,l)}fr(t,e,n);break;case 21:fr(t,e,n);break;case 22:n.mode&1?(mt=(r=mt)||n.memoizedState!==null,fr(t,e,n),mt=r):fr(t,e,n);break;default:fr(t,e,n)}}function hy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Tx),e.forEach(function(r){var i=Dx.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function on(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:ot=l.stateNode,ln=!1;break e;case 3:ot=l.stateNode.containerInfo,ln=!0;break e;case 4:ot=l.stateNode.containerInfo,ln=!0;break e}l=l.return}if(ot===null)throw Error(z(160));Ew(s,o,i),ot=null,ln=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Ve(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Iw(e,t),e=e.sibling}function Iw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(on(e,t),Tn(t),r&4){try{sa(3,t,t.return),xc(3,t)}catch(P){Ve(t,t.return,P)}try{sa(5,t,t.return)}catch(P){Ve(t,t.return,P)}}break;case 1:on(e,t),Tn(t),r&512&&n!==null&&As(n,n.return);break;case 5:if(on(e,t),Tn(t),r&512&&n!==null&&As(n,n.return),t.flags&32){var i=t.stateNode;try{ma(i,"")}catch(P){Ve(t,t.return,P)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&W_(i,s),Td(l,o);var c=Td(l,s);for(o=0;o<u.length;o+=2){var p=u[o],m=u[o+1];p==="style"?Q_(i,m):p==="dangerouslySetInnerHTML"?K_(i,m):p==="children"?ma(i,m):qf(i,p,m,c)}switch(l){case"input":vd(i,s);break;case"textarea":H_(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var I=s.value;I!=null?Rs(i,!!s.multiple,I,!1):g!==!!s.multiple&&(s.defaultValue!=null?Rs(i,!!s.multiple,s.defaultValue,!0):Rs(i,!!s.multiple,s.multiple?[]:"",!1))}i[Sa]=s}catch(P){Ve(t,t.return,P)}}break;case 6:if(on(e,t),Tn(t),r&4){if(t.stateNode===null)throw Error(z(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(P){Ve(t,t.return,P)}}break;case 3:if(on(e,t),Tn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{_a(e.containerInfo)}catch(P){Ve(t,t.return,P)}break;case 4:on(e,t),Tn(t);break;case 13:on(e,t),Tn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(xp=Fe())),r&4&&hy(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(mt=(c=mt)||p,on(e,t),mt=c):on(e,t),Tn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!p&&t.mode&1)for(K=t,p=t.child;p!==null;){for(m=K=p;K!==null;){switch(g=K,I=g.child,g.tag){case 0:case 11:case 14:case 15:sa(4,g,g.return);break;case 1:As(g,g.return);var C=g.stateNode;if(typeof C.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,C.props=e.memoizedProps,C.state=e.memoizedState,C.componentWillUnmount()}catch(P){Ve(r,n,P)}}break;case 5:As(g,g.return);break;case 22:if(g.memoizedState!==null){fy(m);continue}}I!==null?(I.return=g,K=I):fy(m)}p=p.sibling}e:for(p=null,m=t;;){if(m.tag===5){if(p===null){p=m;try{i=m.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=G_("display",o))}catch(P){Ve(t,t.return,P)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(P){Ve(t,t.return,P)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:on(e,t),Tn(t),r&4&&hy(t);break;case 21:break;default:on(e,t),Tn(t)}}function Tn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(ww(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ma(i,""),r.flags&=-33);var s=cy(t);Zd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=cy(t);Xd(t,l,o);break;default:throw Error(z(161))}}catch(u){Ve(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function xx(t,e,n){K=t,Tw(t)}function Tw(t,e,n){for(var r=(t.mode&1)!==0;K!==null;){var i=K,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ul;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||mt;l=Ul;var c=mt;if(Ul=o,(mt=u)&&!c)for(K=i;K!==null;)o=K,u=o.child,o.tag===22&&o.memoizedState!==null?py(i):u!==null?(u.return=o,K=u):py(i);for(;s!==null;)K=s,Tw(s),s=s.sibling;K=i,Ul=l,mt=c}dy(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,K=s):dy(t)}}function dy(t){for(;K!==null;){var e=K;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:mt||xc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!mt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:an(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Yg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Yg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var p=c.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&_a(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}mt||e.flags&512&&Jd(e)}catch(g){Ve(e,e.return,g)}}if(e===t){K=null;break}if(n=e.sibling,n!==null){n.return=e.return,K=n;break}K=e.return}}function fy(t){for(;K!==null;){var e=K;if(e===t){K=null;break}var n=e.sibling;if(n!==null){n.return=e.return,K=n;break}K=e.return}}function py(t){for(;K!==null;){var e=K;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{xc(4,e)}catch(u){Ve(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ve(e,i,u)}}var s=e.return;try{Jd(e)}catch(u){Ve(e,s,u)}break;case 5:var o=e.return;try{Jd(e)}catch(u){Ve(e,o,u)}}}catch(u){Ve(e,e.return,u)}if(e===t){K=null;break}var l=e.sibling;if(l!==null){l.return=e.return,K=l;break}K=e.return}}var Cx=Math.ceil,Uu=ir.ReactCurrentDispatcher,Tp=ir.ReactCurrentOwner,Xt=ir.ReactCurrentBatchConfig,fe=0,it=null,Be=null,ut=0,Ot=0,ks=Qr(0),Qe=0,Ra=null,Pi=0,Cc=0,Sp=0,oa=null,kt=null,xp=0,Qs=1/0,Un=null,zu=!1,ef=null,Nr=null,zl=!1,Sr=null,Bu=0,aa=0,tf=null,lu=-1,uu=0;function wt(){return fe&6?Fe():lu!==-1?lu:lu=Fe()}function Dr(t){return t.mode&1?fe&2&&ut!==0?ut&-ut:ux.transition!==null?(uu===0&&(uu=a0()),uu):(t=ge,t!==0||(t=window.event,t=t===void 0?16:p0(t.type)),t):1}function dn(t,e,n,r){if(50<aa)throw aa=0,tf=null,Error(z(185));$a(t,n,r),(!(fe&2)||t!==it)&&(t===it&&(!(fe&2)&&(Cc|=n),Qe===4&&vr(t,ut)),Dt(t,r),n===1&&fe===0&&!(e.mode&1)&&(Qs=Fe()+500,Ic&&Yr()))}function Dt(t,e){var n=t.callbackNode;uS(t,e);var r=xu(t,t===it?ut:0);if(r===0)n!==null&&Tg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Tg(n),e===1)t.tag===0?lx(my.bind(null,t)):D0(my.bind(null,t)),ix(function(){!(fe&6)&&Yr()}),n=null;else{switch(l0(r)){case 1:n=Jf;break;case 4:n=s0;break;case 16:n=Su;break;case 536870912:n=o0;break;default:n=Su}n=bw(n,Sw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Sw(t,e){if(lu=-1,uu=0,fe&6)throw Error(z(327));var n=t.callbackNode;if(Vs()&&t.callbackNode!==n)return null;var r=xu(t,t===it?ut:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=$u(t,r);else{e=r;var i=fe;fe|=2;var s=Cw();(it!==t||ut!==e)&&(Un=null,Qs=Fe()+500,wi(t,e));do try{Px();break}catch(l){xw(t,l)}while(!0);cp(),Uu.current=s,fe=i,Be!==null?e=0:(it=null,ut=0,e=Qe)}if(e!==0){if(e===2&&(i=kd(t),i!==0&&(r=i,e=nf(t,i))),e===1)throw n=Ra,wi(t,0),vr(t,r),Dt(t,Fe()),n;if(e===6)vr(t,r);else{if(i=t.current.alternate,!(r&30)&&!Ax(i)&&(e=$u(t,r),e===2&&(s=kd(t),s!==0&&(r=s,e=nf(t,s))),e===1))throw n=Ra,wi(t,0),vr(t,r),Dt(t,Fe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(z(345));case 2:fi(t,kt,Un);break;case 3:if(vr(t,r),(r&130023424)===r&&(e=xp+500-Fe(),10<e)){if(xu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){wt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Od(fi.bind(null,t,kt,Un),e);break}fi(t,kt,Un);break;case 4:if(vr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-hn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Cx(r/1960))-r,10<r){t.timeoutHandle=Od(fi.bind(null,t,kt,Un),r);break}fi(t,kt,Un);break;case 5:fi(t,kt,Un);break;default:throw Error(z(329))}}}return Dt(t,Fe()),t.callbackNode===n?Sw.bind(null,t):null}function nf(t,e){var n=oa;return t.current.memoizedState.isDehydrated&&(wi(t,e).flags|=256),t=$u(t,e),t!==2&&(e=kt,kt=n,e!==null&&rf(e)),t}function rf(t){kt===null?kt=t:kt.push.apply(kt,t)}function Ax(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!pn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function vr(t,e){for(e&=~Sp,e&=~Cc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-hn(e),r=1<<n;t[n]=-1,e&=~r}}function my(t){if(fe&6)throw Error(z(327));Vs();var e=xu(t,0);if(!(e&1))return Dt(t,Fe()),null;var n=$u(t,e);if(t.tag!==0&&n===2){var r=kd(t);r!==0&&(e=r,n=nf(t,r))}if(n===1)throw n=Ra,wi(t,0),vr(t,e),Dt(t,Fe()),n;if(n===6)throw Error(z(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,fi(t,kt,Un),Dt(t,Fe()),null}function Cp(t,e){var n=fe;fe|=1;try{return t(e)}finally{fe=n,fe===0&&(Qs=Fe()+500,Ic&&Yr())}}function Ri(t){Sr!==null&&Sr.tag===0&&!(fe&6)&&Vs();var e=fe;fe|=1;var n=Xt.transition,r=ge;try{if(Xt.transition=null,ge=1,t)return t()}finally{ge=r,Xt.transition=n,fe=e,!(fe&6)&&Yr()}}function Ap(){Ot=ks.current,Se(ks)}function wi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,rx(n)),Be!==null)for(n=Be.return;n!==null;){var r=n;switch(ap(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ru();break;case 3:Ks(),Se(bt),Se(yt),gp();break;case 5:mp(r);break;case 4:Ks();break;case 13:Se(Pe);break;case 19:Se(Pe);break;case 10:hp(r.type._context);break;case 22:case 23:Ap()}n=n.return}if(it=t,Be=t=Mr(t.current,null),ut=Ot=e,Qe=0,Ra=null,Sp=Cc=Pi=0,kt=oa=null,gi!==null){for(e=0;e<gi.length;e++)if(n=gi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}gi=null}return t}function xw(t,e){do{var n=Be;try{if(cp(),su.current=Fu,ju){for(var r=Re.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ju=!1}if(ki=0,rt=Ge=Re=null,ia=!1,Aa=0,Tp.current=null,n===null||n.return===null){Qe=1,Ra=e,Be=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=ut,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,p=l,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var g=p.alternate;g?(p.updateQueue=g.updateQueue,p.memoizedState=g.memoizedState,p.lanes=g.lanes):(p.updateQueue=null,p.memoizedState=null)}var I=ny(o);if(I!==null){I.flags&=-257,ry(I,o,l,s,e),I.mode&1&&ty(s,c,e),e=I,u=c;var C=e.updateQueue;if(C===null){var P=new Set;P.add(u),e.updateQueue=P}else C.add(u);break e}else{if(!(e&1)){ty(s,c,e),kp();break e}u=Error(z(426))}}else if(Ae&&l.mode&1){var b=ny(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),ry(b,o,l,s,e),lp(Gs(u,l));break e}}s=u=Gs(u,l),Qe!==4&&(Qe=2),oa===null?oa=[s]:oa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var E=lw(s,u,e);Qg(s,E);break e;case 1:l=u;var _=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Nr===null||!Nr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var V=uw(s,l,e);Qg(s,V);break e}}s=s.return}while(s!==null)}kw(n)}catch(L){e=L,Be===n&&n!==null&&(Be=n=n.return);continue}break}while(!0)}function Cw(){var t=Uu.current;return Uu.current=Fu,t===null?Fu:t}function kp(){(Qe===0||Qe===3||Qe===2)&&(Qe=4),it===null||!(Pi&268435455)&&!(Cc&268435455)||vr(it,ut)}function $u(t,e){var n=fe;fe|=2;var r=Cw();(it!==t||ut!==e)&&(Un=null,wi(t,e));do try{kx();break}catch(i){xw(t,i)}while(!0);if(cp(),fe=n,Uu.current=r,Be!==null)throw Error(z(261));return it=null,ut=0,Qe}function kx(){for(;Be!==null;)Aw(Be)}function Px(){for(;Be!==null&&!eS();)Aw(Be)}function Aw(t){var e=Rw(t.alternate,t,Ot);t.memoizedProps=t.pendingProps,e===null?kw(t):Be=e,Tp.current=null}function kw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Ix(n,e),n!==null){n.flags&=32767,Be=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Qe=6,Be=null;return}}else if(n=Ex(n,e,Ot),n!==null){Be=n;return}if(e=e.sibling,e!==null){Be=e;return}Be=e=t}while(e!==null);Qe===0&&(Qe=5)}function fi(t,e,n){var r=ge,i=Xt.transition;try{Xt.transition=null,ge=1,Rx(t,e,n,r)}finally{Xt.transition=i,ge=r}return null}function Rx(t,e,n,r){do Vs();while(Sr!==null);if(fe&6)throw Error(z(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(z(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(cS(t,s),t===it&&(Be=it=null,ut=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||zl||(zl=!0,bw(Su,function(){return Vs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Xt.transition,Xt.transition=null;var o=ge;ge=1;var l=fe;fe|=4,Tp.current=null,Sx(t,n),Iw(n,t),YS(Md),Cu=!!Dd,Md=Dd=null,t.current=n,xx(n),tS(),fe=l,ge=o,Xt.transition=s}else t.current=n;if(zl&&(zl=!1,Sr=t,Bu=i),s=t.pendingLanes,s===0&&(Nr=null),iS(n.stateNode),Dt(t,Fe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(zu)throw zu=!1,t=ef,ef=null,t;return Bu&1&&t.tag!==0&&Vs(),s=t.pendingLanes,s&1?t===tf?aa++:(aa=0,tf=t):aa=0,Yr(),null}function Vs(){if(Sr!==null){var t=l0(Bu),e=Xt.transition,n=ge;try{if(Xt.transition=null,ge=16>t?16:t,Sr===null)var r=!1;else{if(t=Sr,Sr=null,Bu=0,fe&6)throw Error(z(331));var i=fe;for(fe|=4,K=t.current;K!==null;){var s=K,o=s.child;if(K.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(K=c;K!==null;){var p=K;switch(p.tag){case 0:case 11:case 15:sa(8,p,s)}var m=p.child;if(m!==null)m.return=p,K=m;else for(;K!==null;){p=K;var g=p.sibling,I=p.return;if(_w(p),p===c){K=null;break}if(g!==null){g.return=I,K=g;break}K=I}}}var C=s.alternate;if(C!==null){var P=C.child;if(P!==null){C.child=null;do{var b=P.sibling;P.sibling=null,P=b}while(P!==null)}}K=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,K=o;else e:for(;K!==null;){if(s=K,s.flags&2048)switch(s.tag){case 0:case 11:case 15:sa(9,s,s.return)}var E=s.sibling;if(E!==null){E.return=s.return,K=E;break e}K=s.return}}var _=t.current;for(K=_;K!==null;){o=K;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,K=x;else e:for(o=_;K!==null;){if(l=K,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:xc(9,l)}}catch(L){Ve(l,l.return,L)}if(l===o){K=null;break e}var V=l.sibling;if(V!==null){V.return=l.return,K=V;break e}K=l.return}}if(fe=i,Yr(),kn&&typeof kn.onPostCommitFiberRoot=="function")try{kn.onPostCommitFiberRoot(yc,t)}catch{}r=!0}return r}finally{ge=n,Xt.transition=e}}return!1}function gy(t,e,n){e=Gs(n,e),e=lw(t,e,1),t=br(t,e,1),e=wt(),t!==null&&($a(t,1,e),Dt(t,e))}function Ve(t,e,n){if(t.tag===3)gy(t,t,n);else for(;e!==null;){if(e.tag===3){gy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Nr===null||!Nr.has(r))){t=Gs(n,t),t=uw(e,t,1),e=br(e,t,1),t=wt(),e!==null&&($a(e,1,t),Dt(e,t));break}}e=e.return}}function bx(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=wt(),t.pingedLanes|=t.suspendedLanes&n,it===t&&(ut&n)===n&&(Qe===4||Qe===3&&(ut&130023424)===ut&&500>Fe()-xp?wi(t,0):Sp|=n),Dt(t,e)}function Pw(t,e){e===0&&(t.mode&1?(e=bl,bl<<=1,!(bl&130023424)&&(bl=4194304)):e=1);var n=wt();t=Jn(t,e),t!==null&&($a(t,e,n),Dt(t,n))}function Nx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Pw(t,n)}function Dx(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(e),Pw(t,n)}var Rw;Rw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||bt.current)Rt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Rt=!1,wx(t,e,n);Rt=!!(t.flags&131072)}else Rt=!1,Ae&&e.flags&1048576&&M0(e,Du,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;au(t,e),t=e.pendingProps;var i=Ws(e,yt.current);Ms(e,n),i=vp(null,e,r,t,i,n);var s=_p();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Nt(r)?(s=!0,bu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,fp(e),i.updater=Sc,e.stateNode=i,i._reactInternals=e,$d(e,r,t,n),e=qd(null,e,r,!0,s,n)):(e.tag=0,Ae&&s&&op(e),_t(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(au(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Vx(r),t=an(r,t),i){case 0:e=Hd(null,e,r,t,n);break e;case 1:e=oy(null,e,r,t,n);break e;case 11:e=iy(null,e,r,t,n);break e;case 14:e=sy(null,e,r,an(r.type,t),n);break e}throw Error(z(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:an(r,i),Hd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:an(r,i),oy(t,e,r,i,n);case 3:e:{if(fw(e),t===null)throw Error(z(387));r=e.pendingProps,s=e.memoizedState,i=s.element,U0(t,e),Ou(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Gs(Error(z(423)),e),e=ay(t,e,r,n,i);break e}else if(r!==i){i=Gs(Error(z(424)),e),e=ay(t,e,r,n,i);break e}else for(Lt=Rr(e.stateNode.containerInfo.firstChild),Ft=e,Ae=!0,un=null,n=j0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Hs(),r===i){e=Xn(t,e,n);break e}_t(t,e,r,n)}e=e.child}return e;case 5:return z0(e),t===null&&Ud(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Vd(r,i)?o=null:s!==null&&Vd(r,s)&&(e.flags|=32),dw(t,e),_t(t,e,o,n),e.child;case 6:return t===null&&Ud(e),null;case 13:return pw(t,e,n);case 4:return pp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=qs(e,null,r,n):_t(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:an(r,i),iy(t,e,r,i,n);case 7:return _t(t,e,e.pendingProps,n),e.child;case 8:return _t(t,e,e.pendingProps.children,n),e.child;case 12:return _t(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,we(Mu,r._currentValue),r._currentValue=o,s!==null)if(pn(s.value,o)){if(s.children===i.children&&!bt.current){e=Xn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=qn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var p=c.pending;p===null?u.next=u:(u.next=p.next,p.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),zd(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(z(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),zd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}_t(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ms(e,n),i=tn(i),r=r(i),e.flags|=1,_t(t,e,r,n),e.child;case 14:return r=e.type,i=an(r,e.pendingProps),i=an(r.type,i),sy(t,e,r,i,n);case 15:return cw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:an(r,i),au(t,e),e.tag=1,Nt(r)?(t=!0,bu(e)):t=!1,Ms(e,n),aw(e,r,i),$d(e,r,i,n),qd(null,e,r,!0,t,n);case 19:return mw(t,e,n);case 22:return hw(t,e,n)}throw Error(z(156,e.tag))};function bw(t,e){return i0(t,e)}function Mx(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jt(t,e,n,r){return new Mx(t,e,n,r)}function Pp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Vx(t){if(typeof t=="function")return Pp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Gf)return 11;if(t===Qf)return 14}return 2}function Mr(t,e){var n=t.alternate;return n===null?(n=Jt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function cu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Pp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case vs:return Ei(n.children,i,s,e);case Kf:o=8,i|=8;break;case fd:return t=Jt(12,n,e,i|2),t.elementType=fd,t.lanes=s,t;case pd:return t=Jt(13,n,e,i),t.elementType=pd,t.lanes=s,t;case md:return t=Jt(19,n,e,i),t.elementType=md,t.lanes=s,t;case z_:return Ac(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case F_:o=10;break e;case U_:o=9;break e;case Gf:o=11;break e;case Qf:o=14;break e;case mr:o=16,r=null;break e}throw Error(z(130,t==null?t:typeof t,""))}return e=Jt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ei(t,e,n,r){return t=Jt(7,t,r,e),t.lanes=n,t}function Ac(t,e,n,r){return t=Jt(22,t,r,e),t.elementType=z_,t.lanes=n,t.stateNode={isHidden:!1},t}function Wh(t,e,n){return t=Jt(6,t,null,e),t.lanes=n,t}function Hh(t,e,n){return e=Jt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ox(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xh(0),this.expirationTimes=xh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Rp(t,e,n,r,i,s,o,l,u){return t=new Ox(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Jt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fp(s),t}function Lx(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ys,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Nw(t){if(!t)return Ur;t=t._reactInternals;e:{if(Ui(t)!==t||t.tag!==1)throw Error(z(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Nt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(z(171))}if(t.tag===1){var n=t.type;if(Nt(n))return N0(t,n,e)}return e}function Dw(t,e,n,r,i,s,o,l,u){return t=Rp(n,r,!0,t,i,s,o,l,u),t.context=Nw(null),n=t.current,r=wt(),i=Dr(n),s=qn(r,i),s.callback=e??null,br(n,s,i),t.current.lanes=i,$a(t,i,r),Dt(t,r),t}function kc(t,e,n,r){var i=e.current,s=wt(),o=Dr(i);return n=Nw(n),e.context===null?e.context=n:e.pendingContext=n,e=qn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=br(i,e,o),t!==null&&(dn(t,i,o,s),iu(t,i,o)),o}function Wu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function yy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function bp(t,e){yy(t,e),(t=t.alternate)&&yy(t,e)}function jx(){return null}var Mw=typeof reportError=="function"?reportError:function(t){console.error(t)};function Np(t){this._internalRoot=t}Pc.prototype.render=Np.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(z(409));kc(t,e,null,null)};Pc.prototype.unmount=Np.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ri(function(){kc(null,t,null,null)}),e[Yn]=null}};function Pc(t){this._internalRoot=t}Pc.prototype.unstable_scheduleHydration=function(t){if(t){var e=h0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<yr.length&&e!==0&&e<yr[n].priority;n++);yr.splice(n,0,t),n===0&&f0(t)}};function Dp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Rc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function vy(){}function Fx(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Wu(o);s.call(c)}}var o=Dw(e,r,t,0,null,!1,!1,"",vy);return t._reactRootContainer=o,t[Yn]=o.current,Ia(t.nodeType===8?t.parentNode:t),Ri(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Wu(u);l.call(c)}}var u=Rp(t,0,!1,null,null,!1,!1,"",vy);return t._reactRootContainer=u,t[Yn]=u.current,Ia(t.nodeType===8?t.parentNode:t),Ri(function(){kc(e,u,n,r)}),u}function bc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Wu(o);l.call(u)}}kc(e,o,t,i)}else o=Fx(n,e,t,i,r);return Wu(o)}u0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Wo(e.pendingLanes);n!==0&&(Xf(e,n|1),Dt(e,Fe()),!(fe&6)&&(Qs=Fe()+500,Yr()))}break;case 13:Ri(function(){var r=Jn(t,1);if(r!==null){var i=wt();dn(r,t,1,i)}}),bp(t,1)}};Zf=function(t){if(t.tag===13){var e=Jn(t,134217728);if(e!==null){var n=wt();dn(e,t,134217728,n)}bp(t,134217728)}};c0=function(t){if(t.tag===13){var e=Dr(t),n=Jn(t,e);if(n!==null){var r=wt();dn(n,t,e,r)}bp(t,e)}};h0=function(){return ge};d0=function(t,e){var n=ge;try{return ge=t,e()}finally{ge=n}};xd=function(t,e,n){switch(e){case"input":if(vd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ec(r);if(!i)throw Error(z(90));$_(r),vd(r,i)}}}break;case"textarea":H_(t,n);break;case"select":e=n.value,e!=null&&Rs(t,!!n.multiple,e,!1)}};X_=Cp;Z_=Ri;var Ux={usingClientEntryPoint:!1,Events:[Ha,Is,Ec,Y_,J_,Cp]},Uo={findFiberByHostInstance:mi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},zx={bundleType:Uo.bundleType,version:Uo.version,rendererPackageName:Uo.rendererPackageName,rendererConfig:Uo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ir.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=n0(t),t===null?null:t.stateNode},findFiberByHostInstance:Uo.findFiberByHostInstance||jx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bl.isDisabled&&Bl.supportsFiber)try{yc=Bl.inject(zx),kn=Bl}catch{}}$t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ux;$t.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Dp(e))throw Error(z(200));return Lx(t,e,null,n)};$t.createRoot=function(t,e){if(!Dp(t))throw Error(z(299));var n=!1,r="",i=Mw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Rp(t,1,!1,null,null,n,!1,r,i),t[Yn]=e.current,Ia(t.nodeType===8?t.parentNode:t),new Np(e)};$t.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(z(188)):(t=Object.keys(t).join(","),Error(z(268,t)));return t=n0(e),t=t===null?null:t.stateNode,t};$t.flushSync=function(t){return Ri(t)};$t.hydrate=function(t,e,n){if(!Rc(e))throw Error(z(200));return bc(null,t,e,!0,n)};$t.hydrateRoot=function(t,e,n){if(!Dp(t))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Mw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Dw(e,null,t,1,n??null,i,!1,s,o),t[Yn]=e.current,Ia(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Pc(e)};$t.render=function(t,e,n){if(!Rc(e))throw Error(z(200));return bc(null,t,e,!1,n)};$t.unmountComponentAtNode=function(t){if(!Rc(t))throw Error(z(40));return t._reactRootContainer?(Ri(function(){bc(null,null,t,!1,function(){t._reactRootContainer=null,t[Yn]=null})}),!0):!1};$t.unstable_batchedUpdates=Cp;$t.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Rc(n))throw Error(z(200));if(t==null||t._reactInternals===void 0)throw Error(z(38));return bc(t,e,n,!1,r)};$t.version="18.3.1-next-f1338f8080-20240426";function Vw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vw)}catch(t){console.error(t)}}Vw(),V_.exports=$t;var Bx=V_.exports,Ow,_y=Bx;Ow=_y.createRoot,_y.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ba(){return ba=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ba.apply(this,arguments)}var xr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(xr||(xr={}));const wy="popstate";function $x(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return sf("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Lw(i)}return Hx(e,n,null,t)}function He(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Mp(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Wx(){return Math.random().toString(36).substr(2,8)}function Ey(t,e){return{usr:t.state,key:t.key,idx:e}}function sf(t,e,n,r){return n===void 0&&(n=null),ba({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?oo(e):e,{state:n,key:e&&e.key||r||Wx()})}function Lw(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function oo(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Hx(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=xr.Pop,u=null,c=p();c==null&&(c=0,o.replaceState(ba({},o.state,{idx:c}),""));function p(){return(o.state||{idx:null}).idx}function m(){l=xr.Pop;let b=p(),E=b==null?null:b-c;c=b,u&&u({action:l,location:P.location,delta:E})}function g(b,E){l=xr.Push;let _=sf(P.location,b,E);c=p()+1;let x=Ey(_,c),V=P.createHref(_);try{o.pushState(x,"",V)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;i.location.assign(V)}s&&u&&u({action:l,location:P.location,delta:1})}function I(b,E){l=xr.Replace;let _=sf(P.location,b,E);c=p();let x=Ey(_,c),V=P.createHref(_);o.replaceState(x,"",V),s&&u&&u({action:l,location:P.location,delta:0})}function C(b){let E=i.location.origin!=="null"?i.location.origin:i.location.href,_=typeof b=="string"?b:Lw(b);return _=_.replace(/ $/,"%20"),He(E,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,E)}let P={get action(){return l},get location(){return t(i,o)},listen(b){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(wy,m),u=b,()=>{i.removeEventListener(wy,m),u=null}},createHref(b){return e(i,b)},createURL:C,encodeLocation(b){let E=C(b);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:g,replace:I,go(b){return o.go(b)}};return P}var Iy;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Iy||(Iy={}));function qx(t,e,n){return n===void 0&&(n="/"),Kx(t,e,n)}function Kx(t,e,n,r){let i=typeof e=="string"?oo(e):e,s=Uw(i.pathname||"/",n);if(s==null)return null;let o=jw(t);Gx(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=oC(s);l=rC(o[u],c)}return l}function jw(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(He(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Ii([r,u.relativePath]),p=n.concat(u);s.children&&s.children.length>0&&(He(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),jw(s.children,e,p,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:tC(c,s.index),routesMeta:p})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of Fw(s.path))i(s,o,u)}),e}function Fw(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Fw(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function Gx(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:nC(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Qx=/^:[\w-]+$/,Yx=3,Jx=2,Xx=1,Zx=10,eC=-2,Ty=t=>t==="*";function tC(t,e){let n=t.split("/"),r=n.length;return n.some(Ty)&&(r+=eC),e&&(r+=Jx),n.filter(i=>!Ty(i)).reduce((i,s)=>i+(Qx.test(s)?Yx:s===""?Xx:Zx),r)}function nC(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function rC(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,p=s==="/"?e:e.slice(s.length)||"/",m=iC({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},p),g=u.route;if(!m)return null;Object.assign(i,m.params),o.push({params:i,pathname:Ii([s,m.pathname]),pathnameBase:hC(Ii([s,m.pathnameBase])),route:g}),m.pathnameBase!=="/"&&(s=Ii([s,m.pathnameBase]))}return o}function iC(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=sC(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,p,m)=>{let{paramName:g,isOptional:I}=p;if(g==="*"){let P=l[m]||"";o=s.slice(0,s.length-P.length).replace(/(.)\/+$/,"$1")}const C=l[m];return I&&!C?c[g]=void 0:c[g]=(C||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function sC(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Mp(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function oC(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Mp(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Uw(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const aC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,lC=t=>aC.test(t);function uC(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?oo(t):t,s;if(n)if(lC(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Mp(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=Sy(n.substring(1),"/"):s=Sy(n,e)}else s=e;return{pathname:s,search:dC(r),hash:fC(i)}}function Sy(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function qh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function cC(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function zw(t,e){let n=cC(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Bw(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=oo(t):(i=ba({},t),He(!i.pathname||!i.pathname.includes("?"),qh("?","pathname","search",i)),He(!i.pathname||!i.pathname.includes("#"),qh("#","pathname","hash",i)),He(!i.search||!i.search.includes("#"),qh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let m=e.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),m-=1;i.pathname=g.join("/")}l=m>=0?e[m]:"/"}let u=uC(i,l),c=o&&o!=="/"&&o.endsWith("/"),p=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||p)&&(u.pathname+="/"),u}const Ii=t=>t.join("/").replace(/\/\/+/g,"/"),hC=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),dC=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,fC=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function pC(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const $w=["post","put","patch","delete"];new Set($w);const mC=["get",...$w];new Set(mC);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Na(){return Na=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Na.apply(this,arguments)}const Vp=M.createContext(null),gC=M.createContext(null),Ka=M.createContext(null),Nc=M.createContext(null),Jr=M.createContext({outlet:null,matches:[],isDataRoute:!1}),Ww=M.createContext(null);function Ga(){return M.useContext(Nc)!=null}function ao(){return Ga()||He(!1),M.useContext(Nc).location}function Hw(t){M.useContext(Ka).static||M.useLayoutEffect(t)}function lo(){let{isDataRoute:t}=M.useContext(Jr);return t?RC():yC()}function yC(){Ga()||He(!1);let t=M.useContext(Vp),{basename:e,future:n,navigator:r}=M.useContext(Ka),{matches:i}=M.useContext(Jr),{pathname:s}=ao(),o=JSON.stringify(zw(i,n.v7_relativeSplatPath)),l=M.useRef(!1);return Hw(()=>{l.current=!0}),M.useCallback(function(c,p){if(p===void 0&&(p={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let m=Bw(c,JSON.parse(o),s,p.relative==="path");t==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:Ii([e,m.pathname])),(p.replace?r.replace:r.push)(m,p.state,p)},[e,r,o,s,t])}function vC(){let{matches:t}=M.useContext(Jr),e=t[t.length-1];return e?e.params:{}}function _C(t,e){return wC(t,e)}function wC(t,e,n,r){Ga()||He(!1);let{navigator:i}=M.useContext(Ka),{matches:s}=M.useContext(Jr),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=ao(),p;if(e){var m;let b=typeof e=="string"?oo(e):e;u==="/"||(m=b.pathname)!=null&&m.startsWith(u)||He(!1),p=b}else p=c;let g=p.pathname||"/",I=g;if(u!=="/"){let b=u.replace(/^\//,"").split("/");I="/"+g.replace(/^\//,"").split("/").slice(b.length).join("/")}let C=qx(t,{pathname:I}),P=xC(C&&C.map(b=>Object.assign({},b,{params:Object.assign({},l,b.params),pathname:Ii([u,i.encodeLocation?i.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?u:Ii([u,i.encodeLocation?i.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),s,n,r);return e&&P?M.createElement(Nc.Provider,{value:{location:Na({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:xr.Pop}},P):P}function EC(){let t=PC(),e=pC(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},e),n?M.createElement("pre",{style:i},n):null,null)}const IC=M.createElement(EC,null);class TC extends M.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?M.createElement(Jr.Provider,{value:this.props.routeContext},M.createElement(Ww.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function SC(t){let{routeContext:e,match:n,children:r}=t,i=M.useContext(Vp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),M.createElement(Jr.Provider,{value:e},r)}function xC(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let p=o.findIndex(m=>m.route.id&&(l==null?void 0:l[m.route.id])!==void 0);p>=0||He(!1),o=o.slice(0,Math.min(o.length,p+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let p=0;p<o.length;p++){let m=o[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(c=p),m.route.id){let{loaderData:g,errors:I}=n,C=m.route.loader&&g[m.route.id]===void 0&&(!I||I[m.route.id]===void 0);if(m.route.lazy||C){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((p,m,g)=>{let I,C=!1,P=null,b=null;n&&(I=l&&m.route.id?l[m.route.id]:void 0,P=m.route.errorElement||IC,u&&(c<0&&g===0?(bC("route-fallback"),C=!0,b=null):c===g&&(C=!0,b=m.route.hydrateFallbackElement||null)));let E=e.concat(o.slice(0,g+1)),_=()=>{let x;return I?x=P:C?x=b:m.route.Component?x=M.createElement(m.route.Component,null):m.route.element?x=m.route.element:x=p,M.createElement(SC,{match:m,routeContext:{outlet:p,matches:E,isDataRoute:n!=null},children:x})};return n&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?M.createElement(TC,{location:n.location,revalidation:n.revalidation,component:P,error:I,children:_(),routeContext:{outlet:null,matches:E,isDataRoute:!0}}):_()},null)}var qw=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(qw||{}),Kw=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Kw||{});function CC(t){let e=M.useContext(Vp);return e||He(!1),e}function AC(t){let e=M.useContext(gC);return e||He(!1),e}function kC(t){let e=M.useContext(Jr);return e||He(!1),e}function Gw(t){let e=kC(),n=e.matches[e.matches.length-1];return n.route.id||He(!1),n.route.id}function PC(){var t;let e=M.useContext(Ww),n=AC(),r=Gw();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function RC(){let{router:t}=CC(qw.UseNavigateStable),e=Gw(Kw.UseNavigateStable),n=M.useRef(!1);return Hw(()=>{n.current=!0}),M.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Na({fromRouteId:e},s)))},[t,e])}const xy={};function bC(t,e,n){xy[t]||(xy[t]=!0)}function NC(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Cy(t){let{to:e,replace:n,state:r,relative:i}=t;Ga()||He(!1);let{future:s,static:o}=M.useContext(Ka),{matches:l}=M.useContext(Jr),{pathname:u}=ao(),c=lo(),p=Bw(e,zw(l,s.v7_relativeSplatPath),u,i==="path"),m=JSON.stringify(p);return M.useEffect(()=>c(JSON.parse(m),{replace:n,state:r,relative:i}),[c,m,i,n,r]),null}function Fn(t){He(!1)}function DC(t){let{basename:e="/",children:n=null,location:r,navigationType:i=xr.Pop,navigator:s,static:o=!1,future:l}=t;Ga()&&He(!1);let u=e.replace(/^\/*/,"/"),c=M.useMemo(()=>({basename:u,navigator:s,static:o,future:Na({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=oo(r));let{pathname:p="/",search:m="",hash:g="",state:I=null,key:C="default"}=r,P=M.useMemo(()=>{let b=Uw(p,u);return b==null?null:{location:{pathname:b,search:m,hash:g,state:I,key:C},navigationType:i}},[u,p,m,g,I,C,i]);return P==null?null:M.createElement(Ka.Provider,{value:c},M.createElement(Nc.Provider,{children:n,value:P}))}function MC(t){let{children:e,location:n}=t;return _C(of(e),n)}new Promise(()=>{});function of(t,e){e===void 0&&(e=[]);let n=[];return M.Children.forEach(t,(r,i)=>{if(!M.isValidElement(r))return;let s=[...e,i];if(r.type===M.Fragment){n.push.apply(n,of(r.props.children,s));return}r.type!==Fn&&He(!1),!r.props.index||!r.props.children||He(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=of(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const VC="6";try{window.__reactRouterVersion=VC}catch{}const OC="startTransition",Ay=bT[OC];function LC(t){let{basename:e,children:n,future:r,window:i}=t,s=M.useRef();s.current==null&&(s.current=$x({window:i,v5Compat:!0}));let o=s.current,[l,u]=M.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},p=M.useCallback(m=>{c&&Ay?Ay(()=>u(m)):u(m)},[u,c]);return M.useLayoutEffect(()=>o.listen(p),[o,p]),M.useEffect(()=>NC(r),[r]),M.createElement(DC,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}var ky;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(ky||(ky={}));var Py;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Py||(Py={}));/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var jC={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FC=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he=(t,e)=>{const n=M.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:l="",children:u,...c},p)=>M.createElement("svg",{ref:p,...jC,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:["lucide",`lucide-${FC(t)}`,l].join(" "),...c},[...e.map(([m,g])=>M.createElement(m,g)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qw=he("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kh=he("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UC=he("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hu=he("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zC=he("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=he("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yw=he("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qu=he("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BC=he("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jw=he("EllipsisVertical",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $C=he("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WC=he("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ku=he("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xw=he("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HC=he("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zw=he("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=he("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qC=he("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KC=he("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=he("Mountain",[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z",key:"otkl63"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gu=he("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const af=he("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GC=he("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QC=he("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lf=he("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YC=he("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JC=he("Smile",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $l=he("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=he("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=he("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uf=he("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=he("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cf=he("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ti=he("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=he("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),XC=()=>{};var Vy={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ZC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},t1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,p=s>>2,m=(s&3)<<4|l>>4;let g=(l&15)<<2|c>>6,I=c&63;u||(I=64,o||(g=64)),r.push(n[p],n[m],n[g],n[I])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(e1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ZC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||m==null)throw new eA;const g=s<<2|l>>4;if(r.push(g),c!==64){const I=l<<4&240|c>>2;if(r.push(I),m!==64){const C=c<<6&192|m;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class eA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const tA=function(t){const e=e1(t);return t1.encodeByteArray(e,!0)},n1=function(t){return tA(t).replace(/\./g,"")},r1=function(t){try{return t1.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rA=()=>nA().__FIREBASE_DEFAULTS__,iA=()=>{if(typeof process>"u"||typeof Vy>"u")return;const t=Vy.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},sA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&r1(t[1]);return e&&JSON.parse(e)},Dc=()=>{try{return XC()||rA()||iA()||sA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},oA=t=>{var e,n;return(n=(e=Dc())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},i1=()=>{var t;return(t=Dc())==null?void 0:t.config},s1=t=>{var e;return(e=Dc())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uo(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function o1(t){return(await fetch(t,{credentials:"include"})).ok}const la={};function lA(){const t={prod:[],emulator:[]};for(const e of Object.keys(la))la[e]?t.emulator.push(e):t.prod.push(e);return t}function uA(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Oy=!1;function cA(t,e){if(typeof window>"u"||typeof document>"u"||!uo(window.location.host)||la[t]===e||la[t]||Oy)return;la[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",s=lA().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function u(g,I){g.setAttribute("width","24"),g.setAttribute("id",I),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function c(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{Oy=!0,o()},g}function p(g,I){g.setAttribute("id",I),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function m(){const g=uA(r),I=n("text"),C=document.getElementById(I)||document.createElement("span"),P=n("learnmore"),b=document.getElementById(P)||document.createElement("a"),E=n("preprendIcon"),_=document.getElementById(E)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const x=g.element;l(x),p(b,P);const V=c();u(_,E),x.append(_,C,b,V),document.body.appendChild(x)}s?(C.innerText="Preview backend disconnected.",_.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(_.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",I)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(vt())}function dA(){var e;const t=(e=Dc())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function fA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function a1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function pA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mA(){const t=vt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function gA(){return!dA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function l1(){try{return typeof indexedDB=="object"}catch{return!1}}function u1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}function yA(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vA="FirebaseError";class vn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=vA,Object.setPrototypeOf(this,vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zi.prototype.create)}}class zi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?_A(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new vn(i,l,r)}}function _A(t,e){return t.replace(wA,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const wA=/\{\$([^}]+)}/g;function EA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function zr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Ly(s)&&Ly(o)){if(!zr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ly(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function qo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ko(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function IA(t,e){const n=new TA(t,e);return n.subscribe.bind(n)}class TA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");SA(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Yh),i.error===void 0&&(i.error=Yh),i.complete===void 0&&(i.complete=Yh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function SA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Yh(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xA=1e3,CA=2,AA=4*60*60*1e3,kA=.5;function jy(t,e=xA,n=CA){const r=e*Math.pow(n,t),i=Math.round(kA*r*(Math.random()-.5)*2);return Math.min(AA,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(t){return t&&t._delegate?t._delegate:t}class mn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new aA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(bA(e))try{this.getOrInitializeService({instanceIdentifier:pi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=pi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=pi){return this.instances.has(e)}getOptions(e=pi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:RA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=pi){return this.component?this.component.multipleInstances?e:pi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function RA(t){return t===pi?void 0:t}function bA(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new PA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const DA={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},MA=ae.INFO,VA={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},OA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=VA[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Mc{constructor(e){this.name=e,this._logLevel=MA,this._logHandler=OA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?DA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const LA=(t,e)=>e.some(n=>t instanceof n);let Fy,Uy;function jA(){return Fy||(Fy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function FA(){return Uy||(Uy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const c1=new WeakMap,hf=new WeakMap,h1=new WeakMap,Jh=new WeakMap,Op=new WeakMap;function UA(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Vr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&c1.set(n,t)}).catch(()=>{}),Op.set(e,t),e}function zA(t){if(hf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});hf.set(t,e)}let df={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return hf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||h1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Vr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function BA(t){df=t(df)}function $A(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Xh(this),e,...n);return h1.set(r,e.sort?e.sort():[e]),Vr(r)}:FA().includes(t)?function(...e){return t.apply(Xh(this),e),Vr(c1.get(this))}:function(...e){return Vr(t.apply(Xh(this),e))}}function WA(t){return typeof t=="function"?$A(t):(t instanceof IDBTransaction&&zA(t),LA(t,jA())?new Proxy(t,df):t)}function Vr(t){if(t instanceof IDBRequest)return UA(t);if(Jh.has(t))return Jh.get(t);const e=WA(t);return e!==t&&(Jh.set(t,e),Op.set(e,t)),e}const Xh=t=>Op.get(t);function d1(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Vr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Vr(o.result),u.oldVersion,u.newVersion,Vr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const HA=["get","getKey","getAll","getAllKeys","count"],qA=["put","add","delete","clear"],Zh=new Map;function zy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Zh.get(e))return Zh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=qA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||HA.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return Zh.set(e,s),s}BA(t=>({...t,get:(e,n,r)=>zy(e,n)||t.get(e,n,r),has:(e,n)=>!!zy(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(GA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function GA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ff="@firebase/app",By="0.14.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn=new Mc("@firebase/app"),QA="@firebase/app-compat",YA="@firebase/analytics-compat",JA="@firebase/analytics",XA="@firebase/app-check-compat",ZA="@firebase/app-check",ek="@firebase/auth",tk="@firebase/auth-compat",nk="@firebase/database",rk="@firebase/data-connect",ik="@firebase/database-compat",sk="@firebase/functions",ok="@firebase/functions-compat",ak="@firebase/installations",lk="@firebase/installations-compat",uk="@firebase/messaging",ck="@firebase/messaging-compat",hk="@firebase/performance",dk="@firebase/performance-compat",fk="@firebase/remote-config",pk="@firebase/remote-config-compat",mk="@firebase/storage",gk="@firebase/storage-compat",yk="@firebase/firestore",vk="@firebase/ai",_k="@firebase/firestore-compat",wk="firebase",Ek="12.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pf="[DEFAULT]",Ik={[ff]:"fire-core",[QA]:"fire-core-compat",[JA]:"fire-analytics",[YA]:"fire-analytics-compat",[ZA]:"fire-app-check",[XA]:"fire-app-check-compat",[ek]:"fire-auth",[tk]:"fire-auth-compat",[nk]:"fire-rtdb",[rk]:"fire-data-connect",[ik]:"fire-rtdb-compat",[sk]:"fire-fn",[ok]:"fire-fn-compat",[ak]:"fire-iid",[lk]:"fire-iid-compat",[uk]:"fire-fcm",[ck]:"fire-fcm-compat",[hk]:"fire-perf",[dk]:"fire-perf-compat",[fk]:"fire-rc",[pk]:"fire-rc-compat",[mk]:"fire-gcs",[gk]:"fire-gcs-compat",[yk]:"fire-fst",[_k]:"fire-fst-compat",[vk]:"fire-vertex","fire-js":"fire-js",[wk]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu=new Map,Tk=new Map,mf=new Map;function $y(t,e){try{t.container.addComponent(e)}catch(n){Zn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Vn(t){const e=t.name;if(mf.has(e))return Zn.debug(`There were multiple attempts to register component ${e}.`),!1;mf.set(e,t);for(const n of Qu.values())$y(n,t);for(const n of Tk.values())$y(n,t);return!0}function Bi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Qt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Or=new zi("app","Firebase",Sk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xk{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new mn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Or.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co=Ek;function f1(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:pf,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw Or.create("bad-app-name",{appName:String(i)});if(n||(n=i1()),!n)throw Or.create("no-options");const s=Qu.get(i);if(s){if(zr(n,s.options)&&zr(r,s.config))return s;throw Or.create("duplicate-app",{appName:i})}const o=new NA(i);for(const u of mf.values())o.addComponent(u);const l=new xk(n,r,o);return Qu.set(i,l),l}function p1(t=pf){const e=Qu.get(t);if(!e&&t===pf&&i1())return f1();if(!e)throw Or.create("no-app",{appName:t});return e}function Zt(t,e,n){let r=Ik[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Zn.warn(o.join(" "));return}Vn(new mn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ck="firebase-heartbeat-database",Ak=1,Da="firebase-heartbeat-store";let ed=null;function m1(){return ed||(ed=d1(Ck,Ak,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Da)}catch(n){console.warn(n)}}}}).catch(t=>{throw Or.create("idb-open",{originalErrorMessage:t.message})})),ed}async function kk(t){try{const n=(await m1()).transaction(Da),r=await n.objectStore(Da).get(g1(t));return await n.done,r}catch(e){if(e instanceof vn)Zn.warn(e.message);else{const n=Or.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Zn.warn(n.message)}}}async function Wy(t,e){try{const r=(await m1()).transaction(Da,"readwrite");await r.objectStore(Da).put(e,g1(t)),await r.done}catch(n){if(n instanceof vn)Zn.warn(n.message);else{const r=Or.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Zn.warn(r.message)}}}function g1(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pk=1024,Rk=30;class bk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Dk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Hy();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>Rk){const o=Mk(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Zn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Hy(),{heartbeatsToSend:r,unsentEntries:i}=Nk(this._heartbeatsCache.heartbeats),s=n1(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Zn.warn(n),""}}}function Hy(){return new Date().toISOString().substring(0,10)}function Nk(t,e=Pk){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),qy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),qy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Dk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return l1()?u1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await kk(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Wy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Wy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function qy(t){return n1(JSON.stringify({version:2,heartbeats:t})).length}function Mk(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vk(t){Vn(new mn("platform-logger",e=>new KA(e),"PRIVATE")),Vn(new mn("heartbeat",e=>new bk(e),"PRIVATE")),Zt(ff,By,t),Zt(ff,By,"esm2020"),Zt("fire-js","")}Vk("");var Ok="firebase",Lk="12.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zt(Ok,Lk,"app");function y1(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const jk=y1,v1=new zi("auth","Firebase",y1());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yu=new Mc("@firebase/auth");function Fk(t,...e){Yu.logLevel<=ae.WARN&&Yu.warn(`Auth (${co}): ${t}`,...e)}function hu(t,...e){Yu.logLevel<=ae.ERROR&&Yu.error(`Auth (${co}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(t,...e){throw Lp(t,...e)}function Rn(t,...e){return Lp(t,...e)}function _1(t,e,n){const r={...jk(),[e]:n};return new zi("auth","Firebase",r).create(e,{appName:t.name})}function Kn(t){return _1(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Lp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return v1.create(t,...e)}function Z(t,e,...n){if(!t)throw Lp(e,...n)}function Wn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw hu(e),new Error(e)}function er(t,e){t||Wn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gf(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function Uk(){return Ky()==="http:"||Ky()==="https:"}function Ky(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Uk()||a1()||"connection"in navigator)?navigator.onLine:!0}function Bk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e,n){this.shortDelay=e,this.longDelay=n,er(n>e,"Short delay should be less than long delay!"),this.isMobile=hA()||pA()}get(){return zk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jp(t,e){er(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Wn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Wn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Wn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $k={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wk=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Hk=new Ya(3e4,6e4);function Xr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Ln(t,e,n,r,i={}){return E1(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Qa({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...s};return fA()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&uo(t.emulatorConfig.host)&&(c.credentials="include"),w1.fetch()(await I1(t,t.config.apiHost,n,l),c)})}async function E1(t,e,n){t._canInitEmulator=!1;const r={...$k,...e};try{const i=new Kk(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Wl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Wl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Wl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Wl(t,"user-disabled",o);const p=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw _1(t,p,c);gn(t,p)}}catch(i){if(i instanceof vn)throw i;gn(t,"network-request-failed",{message:String(i)})}}async function Ja(t,e,n,r,i={}){const s=await Ln(t,e,n,r,i);return"mfaPendingCredential"in s&&gn(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function I1(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?jp(t.config,i):`${t.config.apiScheme}://${i}`;return Wk.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function qk(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Kk{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Rn(this.auth,"network-request-failed")),Hk.get())})}}function Wl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Rn(t,e,r);return i.customData._tokenResponse=n,i}function Gy(t){return t!==void 0&&t.enterprise!==void 0}class Gk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return qk(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Qk(t,e){return Ln(t,"GET","/v2/recaptchaConfig",Xr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yk(t,e){return Ln(t,"POST","/v1/accounts:delete",e)}async function Ju(t,e){return Ln(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ua(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Jk(t,e=!1){const n=xe(t),r=await n.getIdToken(e),i=Fp(r);Z(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ua(td(i.auth_time)),issuedAtTime:ua(td(i.iat)),expirationTime:ua(td(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function td(t){return Number(t)*1e3}function Fp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return hu("JWT malformed, contained fewer than 3 sections"),null;try{const i=r1(n);return i?JSON.parse(i):(hu("Failed to decode base64 JWT payload"),null)}catch(i){return hu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Qy(t){const e=Fp(t);return Z(e,"internal-error"),Z(typeof e.exp<"u","internal-error"),Z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof vn&&Xk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Xk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ua(this.lastLoginAt),this.creationTime=ua(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xu(t){var m;const e=t.auth,n=await t.getIdToken(),r=await bi(t,Ju(e,{idToken:n}));Z(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(m=i.providerUserInfo)!=null&&m.length?T1(i.providerUserInfo):[],o=t2(t.providerData,s),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new yf(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,p)}async function e2(t){const e=xe(t);await Xu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function t2(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function T1(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n2(t,e){const n=await E1(t,{},async()=>{const r=Qa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await I1(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&uo(t.emulatorConfig.host)&&(u.credentials="include"),w1.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function r2(t,e){return Ln(t,"POST","/v2/accounts:revokeToken",Xr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Z(e.idToken,"internal-error"),Z(typeof e.idToken<"u","internal-error"),Z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Qy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Z(e.length!==0,"internal-error");const n=Qy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await n2(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Os;return r&&(Z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Z(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Z(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Os,this.toJSON())}_performRefresh(){return Wn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(t,e){Z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class cn{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new Zk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new yf(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await bi(this,this.stsTokenManager.getToken(this.auth,e));return Z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Jk(this,e)}reload(){return e2(this)}_assign(e){this!==e&&(Z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new cn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Xu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Qt(this.auth.app))return Promise.reject(Kn(this.auth));const e=await this.getIdToken();return await bi(this,Yk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,p=n.lastLoginAt??void 0,{uid:m,emailVerified:g,isAnonymous:I,providerData:C,stsTokenManager:P}=n;Z(m&&P,e,"internal-error");const b=Os.fromJSON(this.name,P);Z(typeof m=="string",e,"internal-error"),pr(r,e.name),pr(i,e.name),Z(typeof g=="boolean",e,"internal-error"),Z(typeof I=="boolean",e,"internal-error"),pr(s,e.name),pr(o,e.name),pr(l,e.name),pr(u,e.name),pr(c,e.name),pr(p,e.name);const E=new cn({uid:m,auth:e,email:i,emailVerified:g,displayName:r,isAnonymous:I,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:b,createdAt:c,lastLoginAt:p});return C&&Array.isArray(C)&&(E.providerData=C.map(_=>({..._}))),u&&(E._redirectEventId=u),E}static async _fromIdTokenResponse(e,n,r=!1){const i=new Os;i.updateFromServerResponse(n);const s=new cn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Xu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Z(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?T1(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Os;l.updateFromIdToken(r);const u=new cn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new yf(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yy=new Map;function Hn(t){er(t instanceof Function,"Expected a class definition");let e=Yy.get(t);return e?(er(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Yy.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}S1.type="NONE";const Jy=S1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function du(t,e,n){return`firebase:${t}:${e}:${n}`}class Ls{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=du(this.userKey,i.apiKey,s),this.fullPersistenceKey=du("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ju(this.auth,{idToken:e}).catch(()=>{});return n?cn._fromGetAccountInfoResponse(this.auth,n,e):null}return cn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ls(Hn(Jy),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Hn(Jy);const o=du(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const p=await c._get(o);if(p){let m;if(typeof p=="string"){const g=await Ju(e,{idToken:p}).catch(()=>{});if(!g)break;m=await cn._fromGetAccountInfoResponse(e,g,p)}else m=cn._fromJSON(e,p);c!==s&&(l=m),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Ls(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Ls(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(k1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(x1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(R1(e))return"Blackberry";if(b1(e))return"Webos";if(C1(e))return"Safari";if((e.includes("chrome/")||A1(e))&&!e.includes("edge/"))return"Chrome";if(P1(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function x1(t=vt()){return/firefox\//i.test(t)}function C1(t=vt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function A1(t=vt()){return/crios\//i.test(t)}function k1(t=vt()){return/iemobile/i.test(t)}function P1(t=vt()){return/android/i.test(t)}function R1(t=vt()){return/blackberry/i.test(t)}function b1(t=vt()){return/webos/i.test(t)}function Up(t=vt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function i2(t=vt()){var e;return Up(t)&&!!((e=window.navigator)!=null&&e.standalone)}function s2(){return mA()&&document.documentMode===10}function N1(t=vt()){return Up(t)||P1(t)||b1(t)||R1(t)||/windows phone/i.test(t)||k1(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D1(t,e=[]){let n;switch(t){case"Browser":n=Xy(vt());break;case"Worker":n=`${Xy(vt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${co}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a2(t,e={}){return Ln(t,"GET","/v2/passwordPolicy",Xr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l2=6;class u2{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??l2,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c2{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Zy(this),this.idTokenSubscription=new Zy(this),this.beforeStateQueue=new o2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=v1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Hn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Ls.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ju(this,{idToken:e}),r=await cn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(Qt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Xu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Bk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Qt(this.app))return Promise.reject(Kn(this));const n=e?xe(e):null;return n&&Z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Qt(this.app)?Promise.reject(Kn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Qt(this.app)?Promise.reject(Kn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Hn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await a2(this),n=new u2(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new zi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await r2(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Hn(e)||this._popupRedirectResolver;Z(n,this,"argument-error"),this.redirectPersistenceManager=await Ls.create(this,[Hn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Z(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=D1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Qt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&Fk(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function $i(t){return xe(t)}class Zy{constructor(e){this.auth=e,this.observer=null,this.addObserver=IA(n=>this.observer=n)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function h2(t){Vc=t}function M1(t){return Vc.loadJS(t)}function d2(){return Vc.recaptchaEnterpriseScript}function f2(){return Vc.gapiScript}function p2(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class m2{constructor(){this.enterprise=new g2}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class g2{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const y2="recaptcha-enterprise",V1="NO_RECAPTCHA";class v2{constructor(e){this.type=y2,this.auth=$i(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{Qk(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new Gk(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;Gy(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(V1)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new m2().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Gy(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=d2();u.length!==0&&(u+=l),M1(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function ev(t,e,n,r=!1,i=!1){const s=new v2(t);let o;if(i)o=V1;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function vf(t,e,n,r,i){var s;if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await ev(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await ev(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _2(t,e){const n=Bi(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(zr(s,e??{}))return i;gn(i,"already-initialized")}return n.initialize({options:e})}function w2(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Hn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function E2(t,e,n){const r=$i(t);Z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=O1(e),{host:o,port:l}=I2(e),u=l===null?"":`:${l}`,c={url:`${s}//${o}${u}/`},p=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){Z(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Z(zr(c,r.config.emulator)&&zr(p,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=p,r.settings.appVerificationDisabledForTesting=!0,uo(o)?(o1(`${s}//${o}${u}`),cA("Auth",!0)):T2()}function O1(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function I2(t){const e=O1(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:tv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:tv(o)}}}function tv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function T2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Wn("not implemented")}_getIdTokenResponse(e){return Wn("not implemented")}_linkToIdToken(e,n){return Wn("not implemented")}_getReauthenticationResolver(e){return Wn("not implemented")}}async function S2(t,e){return Ln(t,"POST","/v1/accounts:update",e)}async function x2(t,e){return Ln(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C2(t,e){return Ja(t,"POST","/v1/accounts:signInWithPassword",Xr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A2(t,e){return Ja(t,"POST","/v1/accounts:signInWithEmailLink",Xr(t,e))}async function k2(t,e){return Ja(t,"POST","/v1/accounts:signInWithEmailLink",Xr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma extends zp{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ma(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ma(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return vf(e,n,"signInWithPassword",C2);case"emailLink":return A2(e,{email:this._email,oobCode:this._password});default:gn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return vf(e,r,"signUpPassword",x2);case"emailLink":return k2(e,{idToken:n,email:this._email,oobCode:this._password});default:gn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function js(t,e){return Ja(t,"POST","/v1/accounts:signInWithIdp",Xr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P2="http://localhost";class Ni extends zp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ni(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):gn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new Ni(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return js(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,js(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,js(e,n)}buildRequest(){const e={requestUri:P2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Qa(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R2(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function b2(t){const e=qo(Ko(t)).link,n=e?qo(Ko(e)).deep_link_id:null,r=qo(Ko(t)).deep_link_id;return(r?qo(Ko(r)).link:null)||r||n||e||t}class Bp{constructor(e){const n=qo(Ko(e)),r=n.apiKey??null,i=n.oobCode??null,s=R2(n.mode??null);Z(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=b2(e);try{return new Bp(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(){this.providerId=Wi.PROVIDER_ID}static credential(e,n){return Ma._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Bp.parseLink(n);return Z(r,"argument-error"),Ma._fromEmailAndCode(e,r.code,r.tenantId)}}Wi.PROVIDER_ID="password";Wi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Wi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L1{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa extends L1{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r extends Xa{constructor(){super("facebook.com")}static credential(e){return Ni._fromParams({providerId:_r.PROVIDER_ID,signInMethod:_r.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _r.credentialFromTaggedObject(e)}static credentialFromError(e){return _r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _r.credential(e.oauthAccessToken)}catch{return null}}}_r.FACEBOOK_SIGN_IN_METHOD="facebook.com";_r.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr extends Xa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ni._fromParams({providerId:wr.PROVIDER_ID,signInMethod:wr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return wr.credentialFromTaggedObject(e)}static credentialFromError(e){return wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return wr.credential(n,r)}catch{return null}}}wr.GOOGLE_SIGN_IN_METHOD="google.com";wr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er extends Xa{constructor(){super("github.com")}static credential(e){return Ni._fromParams({providerId:Er.PROVIDER_ID,signInMethod:Er.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Er.credentialFromTaggedObject(e)}static credentialFromError(e){return Er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Er.credential(e.oauthAccessToken)}catch{return null}}}Er.GITHUB_SIGN_IN_METHOD="github.com";Er.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir extends Xa{constructor(){super("twitter.com")}static credential(e,n){return Ni._fromParams({providerId:Ir.PROVIDER_ID,signInMethod:Ir.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ir.credentialFromTaggedObject(e)}static credentialFromError(e){return Ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ir.credential(n,r)}catch{return null}}}Ir.TWITTER_SIGN_IN_METHOD="twitter.com";Ir.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N2(t,e){return Ja(t,"POST","/v1/accounts:signUp",Xr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await cn._fromIdTokenResponse(e,r,i),o=nv(r);return new Di({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=nv(r);return new Di({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function nv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu extends vn{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Zu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Zu(e,n,r,i)}}function j1(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Zu._fromErrorAndOperation(t,s,e,r):s})}async function D2(t,e,n=!1){const r=await bi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Di._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F1(t,e,n=!1){const{auth:r}=t;if(Qt(r.app))return Promise.reject(Kn(r));const i="reauthenticate";try{const s=await bi(t,j1(r,i,e,t),n);Z(s.idToken,r,"internal-error");const o=Fp(s.idToken);Z(o,r,"internal-error");const{sub:l}=o;return Z(t.uid===l,r,"user-mismatch"),Di._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&gn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U1(t,e,n=!1){if(Qt(t.app))return Promise.reject(Kn(t));const r="signIn",i=await j1(t,r,e),s=await Di._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function M2(t,e){return U1($i(t),e)}async function V2(t,e){return F1(xe(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z1(t){const e=$i(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function O2(t,e,n){if(Qt(t.app))return Promise.reject(Kn(t));const r=$i(t),o=await vf(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",N2).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&z1(t),u}),l=await Di._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function L2(t,e,n){return Qt(t.app)?Promise.reject(Kn(t)):M2(xe(t),Wi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&z1(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j2(t,e){return Ln(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B1(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=xe(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await bi(r,j2(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function F2(t,e){return U2(xe(t),null,e)}async function U2(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};n&&(s.password=n);const o=await bi(t,S2(r,s));await t._updateTokensIfNecessary(o,!0)}function z2(t,e,n,r){return xe(t).onIdTokenChanged(e,n,r)}function B2(t,e,n){return xe(t).beforeAuthStateChanged(e,n)}function $2(t,e,n,r){return xe(t).onAuthStateChanged(e,n,r)}function W2(t){return xe(t).signOut()}const ec="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ec,"1"),this.storage.removeItem(ec),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H2=1e3,q2=10;class W1 extends $1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=N1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);s2()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,q2):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},H2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}W1.type="LOCAL";const K2=W1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H1 extends $1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}H1.type="SESSION";const q1=H1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Oc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await G2(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Oc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $p(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=$p("",20);i.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const g=m;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(p),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(){return window}function Y2(t){bn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K1(){return typeof bn().WorkerGlobalScope<"u"&&typeof bn().importScripts=="function"}async function J2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function X2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function Z2(){return K1()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G1="firebaseLocalStorageDb",eP=1,tc="firebaseLocalStorage",Q1="fbase_key";class Za{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Lc(t,e){return t.transaction([tc],e?"readwrite":"readonly").objectStore(tc)}function tP(){const t=indexedDB.deleteDatabase(G1);return new Za(t).toPromise()}function _f(){const t=indexedDB.open(G1,eP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(tc,{keyPath:Q1})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(tc)?e(r):(r.close(),await tP(),e(await _f()))})})}async function rv(t,e,n){const r=Lc(t,!0).put({[Q1]:e,value:n});return new Za(r).toPromise()}async function nP(t,e){const n=Lc(t,!1).get(e),r=await new Za(n).toPromise();return r===void 0?null:r.value}function iv(t,e){const n=Lc(t,!0).delete(e);return new Za(n).toPromise()}const rP=800,iP=3;class Y1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _f(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>iP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return K1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Oc._getInstance(Z2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await J2(),!this.activeServiceWorker)return;this.sender=new Q2(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||X2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _f();return await rv(e,ec,"1"),await iv(e,ec),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>rv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>nP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>iv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Lc(i,!1).getAll();return new Za(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),rP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Y1.type="LOCAL";const sP=Y1;new Ya(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oP(t,e){return e?Hn(e):(Z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp extends zp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return js(e,this._buildIdpRequest())}_linkToIdToken(e,n){return js(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return js(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function aP(t){return U1(t.auth,new Wp(t),t.bypassAuthState)}function lP(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),F1(n,new Wp(t),t.bypassAuthState)}async function uP(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),D2(n,new Wp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return aP;case"linkViaPopup":case"linkViaRedirect":return uP;case"reauthViaPopup":case"reauthViaRedirect":return lP;default:gn(this.auth,"internal-error")}}resolve(e){er(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){er(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cP=new Ya(2e3,1e4);class Ps extends J1{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ps.currentPopupAction&&Ps.currentPopupAction.cancel(),Ps.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Z(e,this.auth,"internal-error"),e}async onExecution(){er(this.filter.length===1,"Popup operations only handle one event");const e=$p();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Rn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Rn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ps.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Rn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,cP.get())};e()}}Ps.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hP="pendingRedirect",fu=new Map;class dP extends J1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=fu.get(this.auth._key());if(!e){try{const r=await fP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}fu.set(this.auth._key(),e)}return this.bypassAuthState||fu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function fP(t,e){const n=gP(e),r=mP(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function pP(t,e){fu.set(t._key(),e)}function mP(t){return Hn(t._redirectPersistence)}function gP(t){return du(hP,t.config.apiKey,t.name)}async function yP(t,e,n=!1){if(Qt(t.app))return Promise.reject(Kn(t));const r=$i(t),i=oP(r,e),o=await new dP(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vP=10*60*1e3;class _P{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!wP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!X1(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Rn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=vP&&this.cachedEventUids.clear(),this.cachedEventUids.has(sv(e))}saveEventToCache(e){this.cachedEventUids.add(sv(e)),this.lastProcessedEventTime=Date.now()}}function sv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function X1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function wP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return X1(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EP(t,e={}){return Ln(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,TP=/^https?/;async function SP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await EP(t);for(const n of e)try{if(xP(n))return}catch{}gn(t,"unauthorized-domain")}function xP(t){const e=gf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!TP.test(n))return!1;if(IP.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CP=new Ya(3e4,6e4);function ov(){const t=bn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function AP(t){return new Promise((e,n)=>{var i,s,o;function r(){ov(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ov(),n(Rn(t,"network-request-failed"))},timeout:CP.get()})}if((s=(i=bn().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=bn().gapi)!=null&&o.load)r();else{const l=p2("iframefcb");return bn()[l]=()=>{gapi.load?r():n(Rn(t,"network-request-failed"))},M1(`${f2()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw pu=null,e})}let pu=null;function kP(t){return pu=pu||AP(t),pu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PP=new Ya(5e3,15e3),RP="__/auth/iframe",bP="emulator/auth/iframe",NP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},DP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function MP(t){const e=t.config;Z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?jp(e,bP):`https://${t.config.authDomain}/${RP}`,r={apiKey:e.apiKey,appName:t.name,v:co},i=DP.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Qa(r).slice(1)}`}async function VP(t){const e=await kP(t),n=bn().gapi;return Z(n,t,"internal-error"),e.open({where:document.body,url:MP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:NP,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Rn(t,"network-request-failed"),l=bn().setTimeout(()=>{s(o)},PP.get());function u(){bn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},LP=500,jP=600,FP="_blank",UP="http://localhost";class av{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function zP(t,e,n,r=LP,i=jP){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...OP,width:r.toString(),height:i.toString(),top:s,left:o},c=vt().toLowerCase();n&&(l=A1(c)?FP:n),x1(c)&&(e=e||UP,u.scrollbars="yes");const p=Object.entries(u).reduce((g,[I,C])=>`${g}${I}=${C},`,"");if(i2(c)&&l!=="_self")return BP(e||"",l),new av(null);const m=window.open(e||"",l,p);Z(m,t,"popup-blocked");try{m.focus()}catch{}return new av(m)}function BP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $P="__/auth/handler",WP="emulator/auth/handler",HP=encodeURIComponent("fac");async function lv(t,e,n,r,i,s){Z(t.config.authDomain,t,"auth-domain-config-required"),Z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:co,eventId:i};if(e instanceof L1){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",EA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,m]of Object.entries({}))o[p]=m}if(e instanceof Xa){const p=e.getScopes().filter(m=>m!=="");p.length>0&&(o.scopes=p.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const u=await t._getAppCheckToken(),c=u?`#${HP}=${encodeURIComponent(u)}`:"";return`${qP(t)}?${Qa(l).slice(1)}${c}`}function qP({config:t}){return t.emulator?jp(t,WP):`https://${t.authDomain}/${$P}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nd="webStorageSupport";class KP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=q1,this._completeRedirectFn=yP,this._overrideRedirectResult=pP}async _openPopup(e,n,r,i){var o;er((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await lv(e,n,r,gf(),i);return zP(e,s,$p())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await lv(e,n,r,gf(),i);return Y2(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(er(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await VP(e),r=new _P(e);return n.register("authEvent",i=>(Z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(nd,{type:nd},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[nd];s!==void 0&&n(!!s),gn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=SP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return N1()||C1()||Up()}}const GP=KP;var uv="@firebase/auth",cv="1.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function JP(t){Vn(new mn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:D1(t)},c=new c2(r,i,s,u);return w2(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Vn(new mn("auth-internal",e=>{const n=$i(e.getProvider("auth").getImmediate());return(r=>new QP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Zt(uv,cv,YP(t)),Zt(uv,cv,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XP=5*60,ZP=s1("authIdTokenMaxAge")||XP;let hv=null;const eR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ZP)return;const i=n==null?void 0:n.token;hv!==i&&(hv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function tR(t=p1()){const e=Bi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=_2(t,{popupRedirectResolver:GP,persistence:[sP,K2,q1]}),r=s1("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=eR(s.toString());B2(n,o,()=>o(n.currentUser)),z2(n,l=>o(l))}}const i=oA("auth");return i&&E2(n,`http://${i}`),n}function nR(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}h2({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Rn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",nR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});JP("Browser");var dv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Lr,Z1;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,v){function T(){}T.prototype=v.prototype,w.F=v.prototype,w.prototype=new T,w.prototype.constructor=w,w.D=function(A,k,N){for(var S=Array(arguments.length-2),ye=2;ye<arguments.length;ye++)S[ye-2]=arguments[ye];return v.prototype[k].apply(A,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,v,T){T||(T=0);const A=Array(16);if(typeof v=="string")for(var k=0;k<16;++k)A[k]=v.charCodeAt(T++)|v.charCodeAt(T++)<<8|v.charCodeAt(T++)<<16|v.charCodeAt(T++)<<24;else for(k=0;k<16;++k)A[k]=v[T++]|v[T++]<<8|v[T++]<<16|v[T++]<<24;v=w.g[0],T=w.g[1],k=w.g[2];let N=w.g[3],S;S=v+(N^T&(k^N))+A[0]+3614090360&4294967295,v=T+(S<<7&4294967295|S>>>25),S=N+(k^v&(T^k))+A[1]+3905402710&4294967295,N=v+(S<<12&4294967295|S>>>20),S=k+(T^N&(v^T))+A[2]+606105819&4294967295,k=N+(S<<17&4294967295|S>>>15),S=T+(v^k&(N^v))+A[3]+3250441966&4294967295,T=k+(S<<22&4294967295|S>>>10),S=v+(N^T&(k^N))+A[4]+4118548399&4294967295,v=T+(S<<7&4294967295|S>>>25),S=N+(k^v&(T^k))+A[5]+1200080426&4294967295,N=v+(S<<12&4294967295|S>>>20),S=k+(T^N&(v^T))+A[6]+2821735955&4294967295,k=N+(S<<17&4294967295|S>>>15),S=T+(v^k&(N^v))+A[7]+4249261313&4294967295,T=k+(S<<22&4294967295|S>>>10),S=v+(N^T&(k^N))+A[8]+1770035416&4294967295,v=T+(S<<7&4294967295|S>>>25),S=N+(k^v&(T^k))+A[9]+2336552879&4294967295,N=v+(S<<12&4294967295|S>>>20),S=k+(T^N&(v^T))+A[10]+4294925233&4294967295,k=N+(S<<17&4294967295|S>>>15),S=T+(v^k&(N^v))+A[11]+2304563134&4294967295,T=k+(S<<22&4294967295|S>>>10),S=v+(N^T&(k^N))+A[12]+1804603682&4294967295,v=T+(S<<7&4294967295|S>>>25),S=N+(k^v&(T^k))+A[13]+4254626195&4294967295,N=v+(S<<12&4294967295|S>>>20),S=k+(T^N&(v^T))+A[14]+2792965006&4294967295,k=N+(S<<17&4294967295|S>>>15),S=T+(v^k&(N^v))+A[15]+1236535329&4294967295,T=k+(S<<22&4294967295|S>>>10),S=v+(k^N&(T^k))+A[1]+4129170786&4294967295,v=T+(S<<5&4294967295|S>>>27),S=N+(T^k&(v^T))+A[6]+3225465664&4294967295,N=v+(S<<9&4294967295|S>>>23),S=k+(v^T&(N^v))+A[11]+643717713&4294967295,k=N+(S<<14&4294967295|S>>>18),S=T+(N^v&(k^N))+A[0]+3921069994&4294967295,T=k+(S<<20&4294967295|S>>>12),S=v+(k^N&(T^k))+A[5]+3593408605&4294967295,v=T+(S<<5&4294967295|S>>>27),S=N+(T^k&(v^T))+A[10]+38016083&4294967295,N=v+(S<<9&4294967295|S>>>23),S=k+(v^T&(N^v))+A[15]+3634488961&4294967295,k=N+(S<<14&4294967295|S>>>18),S=T+(N^v&(k^N))+A[4]+3889429448&4294967295,T=k+(S<<20&4294967295|S>>>12),S=v+(k^N&(T^k))+A[9]+568446438&4294967295,v=T+(S<<5&4294967295|S>>>27),S=N+(T^k&(v^T))+A[14]+3275163606&4294967295,N=v+(S<<9&4294967295|S>>>23),S=k+(v^T&(N^v))+A[3]+4107603335&4294967295,k=N+(S<<14&4294967295|S>>>18),S=T+(N^v&(k^N))+A[8]+1163531501&4294967295,T=k+(S<<20&4294967295|S>>>12),S=v+(k^N&(T^k))+A[13]+2850285829&4294967295,v=T+(S<<5&4294967295|S>>>27),S=N+(T^k&(v^T))+A[2]+4243563512&4294967295,N=v+(S<<9&4294967295|S>>>23),S=k+(v^T&(N^v))+A[7]+1735328473&4294967295,k=N+(S<<14&4294967295|S>>>18),S=T+(N^v&(k^N))+A[12]+2368359562&4294967295,T=k+(S<<20&4294967295|S>>>12),S=v+(T^k^N)+A[5]+4294588738&4294967295,v=T+(S<<4&4294967295|S>>>28),S=N+(v^T^k)+A[8]+2272392833&4294967295,N=v+(S<<11&4294967295|S>>>21),S=k+(N^v^T)+A[11]+1839030562&4294967295,k=N+(S<<16&4294967295|S>>>16),S=T+(k^N^v)+A[14]+4259657740&4294967295,T=k+(S<<23&4294967295|S>>>9),S=v+(T^k^N)+A[1]+2763975236&4294967295,v=T+(S<<4&4294967295|S>>>28),S=N+(v^T^k)+A[4]+1272893353&4294967295,N=v+(S<<11&4294967295|S>>>21),S=k+(N^v^T)+A[7]+4139469664&4294967295,k=N+(S<<16&4294967295|S>>>16),S=T+(k^N^v)+A[10]+3200236656&4294967295,T=k+(S<<23&4294967295|S>>>9),S=v+(T^k^N)+A[13]+681279174&4294967295,v=T+(S<<4&4294967295|S>>>28),S=N+(v^T^k)+A[0]+3936430074&4294967295,N=v+(S<<11&4294967295|S>>>21),S=k+(N^v^T)+A[3]+3572445317&4294967295,k=N+(S<<16&4294967295|S>>>16),S=T+(k^N^v)+A[6]+76029189&4294967295,T=k+(S<<23&4294967295|S>>>9),S=v+(T^k^N)+A[9]+3654602809&4294967295,v=T+(S<<4&4294967295|S>>>28),S=N+(v^T^k)+A[12]+3873151461&4294967295,N=v+(S<<11&4294967295|S>>>21),S=k+(N^v^T)+A[15]+530742520&4294967295,k=N+(S<<16&4294967295|S>>>16),S=T+(k^N^v)+A[2]+3299628645&4294967295,T=k+(S<<23&4294967295|S>>>9),S=v+(k^(T|~N))+A[0]+4096336452&4294967295,v=T+(S<<6&4294967295|S>>>26),S=N+(T^(v|~k))+A[7]+1126891415&4294967295,N=v+(S<<10&4294967295|S>>>22),S=k+(v^(N|~T))+A[14]+2878612391&4294967295,k=N+(S<<15&4294967295|S>>>17),S=T+(N^(k|~v))+A[5]+4237533241&4294967295,T=k+(S<<21&4294967295|S>>>11),S=v+(k^(T|~N))+A[12]+1700485571&4294967295,v=T+(S<<6&4294967295|S>>>26),S=N+(T^(v|~k))+A[3]+2399980690&4294967295,N=v+(S<<10&4294967295|S>>>22),S=k+(v^(N|~T))+A[10]+4293915773&4294967295,k=N+(S<<15&4294967295|S>>>17),S=T+(N^(k|~v))+A[1]+2240044497&4294967295,T=k+(S<<21&4294967295|S>>>11),S=v+(k^(T|~N))+A[8]+1873313359&4294967295,v=T+(S<<6&4294967295|S>>>26),S=N+(T^(v|~k))+A[15]+4264355552&4294967295,N=v+(S<<10&4294967295|S>>>22),S=k+(v^(N|~T))+A[6]+2734768916&4294967295,k=N+(S<<15&4294967295|S>>>17),S=T+(N^(k|~v))+A[13]+1309151649&4294967295,T=k+(S<<21&4294967295|S>>>11),S=v+(k^(T|~N))+A[4]+4149444226&4294967295,v=T+(S<<6&4294967295|S>>>26),S=N+(T^(v|~k))+A[11]+3174756917&4294967295,N=v+(S<<10&4294967295|S>>>22),S=k+(v^(N|~T))+A[2]+718787259&4294967295,k=N+(S<<15&4294967295|S>>>17),S=T+(N^(k|~v))+A[9]+3951481745&4294967295,w.g[0]=w.g[0]+v&4294967295,w.g[1]=w.g[1]+(k+(S<<21&4294967295|S>>>11))&4294967295,w.g[2]=w.g[2]+k&4294967295,w.g[3]=w.g[3]+N&4294967295}r.prototype.v=function(w,v){v===void 0&&(v=w.length);const T=v-this.blockSize,A=this.C;let k=this.h,N=0;for(;N<v;){if(k==0)for(;N<=T;)i(this,w,N),N+=this.blockSize;if(typeof w=="string"){for(;N<v;)if(A[k++]=w.charCodeAt(N++),k==this.blockSize){i(this,A),k=0;break}}else for(;N<v;)if(A[k++]=w[N++],k==this.blockSize){i(this,A),k=0;break}}this.h=k,this.o+=v},r.prototype.A=function(){var w=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);w[0]=128;for(var v=1;v<w.length-8;++v)w[v]=0;v=this.o*8;for(var T=w.length-8;T<w.length;++T)w[T]=v&255,v/=256;for(this.v(w),w=Array(16),v=0,T=0;T<4;++T)for(let A=0;A<32;A+=8)w[v++]=this.g[T]>>>A&255;return w};function s(w,v){var T=l;return Object.prototype.hasOwnProperty.call(T,w)?T[w]:T[w]=v(w)}function o(w,v){this.h=v;const T=[];let A=!0;for(let k=w.length-1;k>=0;k--){const N=w[k]|0;A&&N==v||(T[k]=N,A=!1)}this.g=T}var l={};function u(w){return-128<=w&&w<128?s(w,function(v){return new o([v|0],v<0?-1:0)}):new o([w|0],w<0?-1:0)}function c(w){if(isNaN(w)||!isFinite(w))return m;if(w<0)return b(c(-w));const v=[];let T=1;for(let A=0;w>=T;A++)v[A]=w/T|0,T*=4294967296;return new o(v,0)}function p(w,v){if(w.length==0)throw Error("number format error: empty string");if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(w.charAt(0)=="-")return b(p(w.substring(1),v));if(w.indexOf("-")>=0)throw Error('number format error: interior "-" character');const T=c(Math.pow(v,8));let A=m;for(let N=0;N<w.length;N+=8){var k=Math.min(8,w.length-N);const S=parseInt(w.substring(N,N+k),v);k<8?(k=c(Math.pow(v,k)),A=A.j(k).add(c(S))):(A=A.j(T),A=A.add(c(S)))}return A}var m=u(0),g=u(1),I=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-b(this).m();let w=0,v=1;for(let T=0;T<this.g.length;T++){const A=this.i(T);w+=(A>=0?A:4294967296+A)*v,v*=4294967296}return w},t.toString=function(w){if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(C(this))return"0";if(P(this))return"-"+b(this).toString(w);const v=c(Math.pow(w,6));var T=this;let A="";for(;;){const k=V(T,v).g;T=E(T,k.j(v));let N=((T.g.length>0?T.g[0]:T.h)>>>0).toString(w);if(T=k,C(T))return N+A;for(;N.length<6;)N="0"+N;A=N+A}},t.i=function(w){return w<0?0:w<this.g.length?this.g[w]:this.h};function C(w){if(w.h!=0)return!1;for(let v=0;v<w.g.length;v++)if(w.g[v]!=0)return!1;return!0}function P(w){return w.h==-1}t.l=function(w){return w=E(this,w),P(w)?-1:C(w)?0:1};function b(w){const v=w.g.length,T=[];for(let A=0;A<v;A++)T[A]=~w.g[A];return new o(T,~w.h).add(g)}t.abs=function(){return P(this)?b(this):this},t.add=function(w){const v=Math.max(this.g.length,w.g.length),T=[];let A=0;for(let k=0;k<=v;k++){let N=A+(this.i(k)&65535)+(w.i(k)&65535),S=(N>>>16)+(this.i(k)>>>16)+(w.i(k)>>>16);A=S>>>16,N&=65535,S&=65535,T[k]=S<<16|N}return new o(T,T[T.length-1]&-2147483648?-1:0)};function E(w,v){return w.add(b(v))}t.j=function(w){if(C(this)||C(w))return m;if(P(this))return P(w)?b(this).j(b(w)):b(b(this).j(w));if(P(w))return b(this.j(b(w)));if(this.l(I)<0&&w.l(I)<0)return c(this.m()*w.m());const v=this.g.length+w.g.length,T=[];for(var A=0;A<2*v;A++)T[A]=0;for(A=0;A<this.g.length;A++)for(let k=0;k<w.g.length;k++){const N=this.i(A)>>>16,S=this.i(A)&65535,ye=w.i(k)>>>16,Ue=w.i(k)&65535;T[2*A+2*k]+=S*Ue,_(T,2*A+2*k),T[2*A+2*k+1]+=N*Ue,_(T,2*A+2*k+1),T[2*A+2*k+1]+=S*ye,_(T,2*A+2*k+1),T[2*A+2*k+2]+=N*ye,_(T,2*A+2*k+2)}for(w=0;w<v;w++)T[w]=T[2*w+1]<<16|T[2*w];for(w=v;w<2*v;w++)T[w]=0;return new o(T,0)};function _(w,v){for(;(w[v]&65535)!=w[v];)w[v+1]+=w[v]>>>16,w[v]&=65535,v++}function x(w,v){this.g=w,this.h=v}function V(w,v){if(C(v))throw Error("division by zero");if(C(w))return new x(m,m);if(P(w))return v=V(b(w),v),new x(b(v.g),b(v.h));if(P(v))return v=V(w,b(v)),new x(b(v.g),v.h);if(w.g.length>30){if(P(w)||P(v))throw Error("slowDivide_ only works with positive integers.");for(var T=g,A=v;A.l(w)<=0;)T=L(T),A=L(A);var k=U(T,1),N=U(A,1);for(A=U(A,2),T=U(T,2);!C(A);){var S=N.add(A);S.l(w)<=0&&(k=k.add(T),N=S),A=U(A,1),T=U(T,1)}return v=E(w,k.j(v)),new x(k,v)}for(k=m;w.l(v)>=0;){for(T=Math.max(1,Math.floor(w.m()/v.m())),A=Math.ceil(Math.log(T)/Math.LN2),A=A<=48?1:Math.pow(2,A-48),N=c(T),S=N.j(v);P(S)||S.l(w)>0;)T-=A,N=c(T),S=N.j(v);C(N)&&(N=g),k=k.add(N),w=E(w,S)}return new x(k,w)}t.B=function(w){return V(this,w).h},t.and=function(w){const v=Math.max(this.g.length,w.g.length),T=[];for(let A=0;A<v;A++)T[A]=this.i(A)&w.i(A);return new o(T,this.h&w.h)},t.or=function(w){const v=Math.max(this.g.length,w.g.length),T=[];for(let A=0;A<v;A++)T[A]=this.i(A)|w.i(A);return new o(T,this.h|w.h)},t.xor=function(w){const v=Math.max(this.g.length,w.g.length),T=[];for(let A=0;A<v;A++)T[A]=this.i(A)^w.i(A);return new o(T,this.h^w.h)};function L(w){const v=w.g.length+1,T=[];for(let A=0;A<v;A++)T[A]=w.i(A)<<1|w.i(A-1)>>>31;return new o(T,w.h)}function U(w,v){const T=v>>5;v%=32;const A=w.g.length-T,k=[];for(let N=0;N<A;N++)k[N]=v>0?w.i(N+T)>>>v|w.i(N+T+1)<<32-v:w.i(N+T);return new o(k,w.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Z1=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=p,Lr=o}).apply(typeof dv<"u"?dv:typeof self<"u"?self:typeof window<"u"?window:{});var Hl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var eE,Go,tE,mu,wf,nE,rE,iE;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Hl=="object"&&Hl];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var f=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var D=a[y];if(!(D in f))break e;f=f[D]}a=a[a.length-1],y=f[a],h=h(y),h!=y&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(h){var f=[],y;for(y in h)Object.prototype.hasOwnProperty.call(h,y)&&f.push([y,h[y]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function u(a,h,f){return a.call.apply(a.bind,arguments)}function c(a,h,f){return c=u,c.apply(null,arguments)}function p(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var y=f.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function m(a,h){function f(){}f.prototype=h.prototype,a.Z=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Ob=function(y,D,O){for(var B=Array(arguments.length-2),se=2;se<arguments.length;se++)B[se-2]=arguments[se];return h.prototype[D].apply(y,B)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function I(a){const h=a.length;if(h>0){const f=Array(h);for(let y=0;y<h;y++)f[y]=a[y];return f}return[]}function C(a,h){for(let y=1;y<arguments.length;y++){const D=arguments[y];var f=typeof D;if(f=f!="object"?f:D?Array.isArray(D)?"array":f:"null",f=="array"||f=="object"&&typeof D.length=="number"){f=a.length||0;const O=D.length||0;a.length=f+O;for(let B=0;B<O;B++)a[f+B]=D[B]}else a.push(D)}}class P{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function b(a){o.setTimeout(()=>{throw a},0)}function E(){var a=w;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class _{constructor(){this.h=this.g=null}add(h,f){const y=x.get();y.set(h,f),this.h?this.h.next=y:this.g=y,this.h=y}}var x=new P(()=>new V,a=>a.reset());class V{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let L,U=!1,w=new _,v=()=>{const a=Promise.resolve(void 0);L=()=>{a.then(T)}};function T(){for(var a;a=E();){try{a.h.call(a.g)}catch(f){b(f)}var h=x;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}U=!1}function A(){this.u=this.u,this.C=this.C}A.prototype.u=!1,A.prototype.dispose=function(){this.u||(this.u=!0,this.N())},A.prototype[Symbol.dispose]=function(){this.dispose()},A.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function k(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}k.prototype.h=function(){this.defaultPrevented=!0};var N=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};o.addEventListener("test",f,h),o.removeEventListener("test",f,h)}catch{}return a}();function S(a){return/^[\s\xa0]*$/.test(a)}function ye(a,h){k.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}m(ye,k),ye.prototype.init=function(a,h){const f=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&ye.Z.h.call(this)},ye.prototype.h=function(){ye.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ue="closure_listenable_"+(Math.random()*1e6|0),X=0;function st(a,h,f,y,D){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!y,this.ha=D,this.key=++X,this.da=this.fa=!1}function $(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Y(a,h,f){for(const y in a)h.call(f,a[y],y,a)}function te(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function G(a){const h={};for(const f in a)h[f]=a[f];return h}const re="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function De(a,h){let f,y;for(let D=1;D<arguments.length;D++){y=arguments[D];for(f in y)a[f]=y[f];for(let O=0;O<re.length;O++)f=re[O],Object.prototype.hasOwnProperty.call(y,f)&&(a[f]=y[f])}}function ke(a){this.src=a,this.g={},this.h=0}ke.prototype.add=function(a,h,f,y,D){const O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);const B=Je(a,h,y,D);return B>-1?(h=a[B],f||(h.fa=!1)):(h=new st(h,this.src,O,!!y,D),h.fa=f,a.push(h)),h};function Mt(a,h){const f=h.type;if(f in a.g){var y=a.g[f],D=Array.prototype.indexOf.call(y,h,void 0),O;(O=D>=0)&&Array.prototype.splice.call(y,D,1),O&&($(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function Je(a,h,f,y){for(let D=0;D<a.length;++D){const O=a[D];if(!O.da&&O.listener==h&&O.capture==!!f&&O.ha==y)return D}return-1}var St="closure_lm_"+(Math.random()*1e6|0),al={};function sh(a,h,f,y,D){if(Array.isArray(h)){for(let O=0;O<h.length;O++)sh(a,h[O],f,y,D);return null}return f=sr(f),a&&a[Ue]?a.J(h,f,l(y)?!!y.capture:!1,D):Qi(a,h,f,!1,y,D)}function Qi(a,h,f,y,D,O){if(!h)throw Error("Invalid event type");const B=l(D)?!!D.capture:!!D;let se=Ji(a);if(se||(a[St]=se=new ke(a)),f=se.add(h,f,y,B,O),f.proxy)return f;if(y=Yi(),f.proxy=y,y.src=a,y.listener=f,a.addEventListener)N||(D=B),D===void 0&&(D=!1),a.addEventListener(h.toString(),y,D);else if(a.attachEvent)a.attachEvent(go(h.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Yi(){function a(f){return h.call(a.src,a.listener,f)}const h=ul;return a}function ll(a,h,f,y,D){if(Array.isArray(h))for(var O=0;O<h.length;O++)ll(a,h[O],f,y,D);else y=l(y)?!!y.capture:!!y,f=sr(f),a&&a[Ue]?(a=a.i,O=String(h).toString(),O in a.g&&(h=a.g[O],f=Je(h,f,y,D),f>-1&&($(h[f]),Array.prototype.splice.call(h,f,1),h.length==0&&(delete a.g[O],a.h--)))):a&&(a=Ji(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Je(h,f,y,D)),(f=a>-1?h[a]:null)&&jn(f))}function jn(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[Ue])Mt(h.i,a);else{var f=a.type,y=a.proxy;h.removeEventListener?h.removeEventListener(f,y,a.capture):h.detachEvent?h.detachEvent(go(f),y):h.addListener&&h.removeListener&&h.removeListener(y),(f=Ji(h))?(Mt(f,a),f.h==0&&(f.src=null,h[St]=null)):$(a)}}}function go(a){return a in al?al[a]:al[a]="on"+a}function ul(a,h){if(a.da)a=!0;else{h=new ye(h,this);const f=a.listener,y=a.ha||a.src;a.fa&&jn(a),a=f.call(y,h)}return a}function Ji(a){return a=a[St],a instanceof ke?a:null}var yo="__closure_events_fn_"+(Math.random()*1e9>>>0);function sr(a){return typeof a=="function"?a:(a[yo]||(a[yo]=function(h){return a.handleEvent(h)}),a[yo])}function Xe(){A.call(this),this.i=new ke(this),this.M=this,this.G=null}m(Xe,A),Xe.prototype[Ue]=!0,Xe.prototype.removeEventListener=function(a,h,f,y){ll(this,a,h,f,y)};function Le(a,h){var f,y=a.G;if(y)for(f=[];y;y=y.G)f.push(y);if(a=a.M,y=h.type||h,typeof h=="string")h=new k(h,a);else if(h instanceof k)h.target=h.target||a;else{var D=h;h=new k(y,a),De(h,D)}D=!0;let O,B;if(f)for(B=f.length-1;B>=0;B--)O=h.g=f[B],D=Xi(O,y,!0,h)&&D;if(O=h.g=a,D=Xi(O,y,!0,h)&&D,D=Xi(O,y,!1,h)&&D,f)for(B=0;B<f.length;B++)O=h.g=f[B],D=Xi(O,y,!1,h)&&D}Xe.prototype.N=function(){if(Xe.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const f=a.g[h];for(let y=0;y<f.length;y++)$(f[y]);delete a.g[h],a.h--}}this.G=null},Xe.prototype.J=function(a,h,f,y){return this.i.add(String(a),h,!1,f,y)},Xe.prototype.K=function(a,h,f,y){return this.i.add(String(a),h,!0,f,y)};function Xi(a,h,f,y){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let D=!0;for(let O=0;O<h.length;++O){const B=h[O];if(B&&!B.da&&B.capture==f){const se=B.listener,Ke=B.ha||B.src;B.fa&&Mt(a.i,B),D=se.call(Ke,y)!==!1&&D}}return D&&!y.defaultPrevented}function Vm(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function cl(a){a.g=Vm(()=>{a.g=null,a.i&&(a.i=!1,cl(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class oh extends A{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:cl(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Zi(a){A.call(this),this.h=a,this.g={}}m(Zi,A);var ti=[];function Ht(a){Y(a.g,function(h,f){this.g.hasOwnProperty(f)&&jn(h)},a),a.g={}}Zi.prototype.N=function(){Zi.Z.N.call(this),Ht(this)},Zi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ni=o.JSON.stringify,es=o.JSON.parse,qt=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function ri(){}function ii(){}var si={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function vo(){k.call(this,"d")}m(vo,k);function hl(){k.call(this,"c")}m(hl,k);var Ze={},ts=null;function ns(){return ts=ts||new Xe}Ze.Ia="serverreachability";function rn(a){k.call(this,Ze.Ia,a)}m(rn,k);function rs(a){const h=ns();Le(h,new rn(h))}Ze.STAT_EVENT="statevent";function _o(a,h){k.call(this,Ze.STAT_EVENT,a),this.stat=h}m(_o,k);function qe(a){const h=ns();Le(h,new _o(h,a))}Ze.Ja="timingevent";function sn(a,h){k.call(this,Ze.Ja,a),this.size=h}m(sn,k);function oi(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function ai(){this.g=!0}ai.prototype.ua=function(){this.g=!1};function ah(a,h,f,y,D,O){a.info(function(){if(a.g)if(O){var B="",se=O.split("&");for(let ve=0;ve<se.length;ve++){var Ke=se[ve].split("=");if(Ke.length>1){const tt=Ke[0];Ke=Ke[1];const In=tt.split("_");B=In.length>=2&&In[1]=="type"?B+(tt+"="+Ke+"&"):B+(tt+"=redacted&")}}}else B=null;else B=O;return"XMLHTTP REQ ("+y+") [attempt "+D+"]: "+h+`
`+f+`
`+B})}function lh(a,h,f,y,D,O,B){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+D+"]: "+h+`
`+f+`
`+O+" "+B})}function or(a,h,f,y){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+ch(a,f)+(y?" "+y:"")})}function uh(a,h){a.info(function(){return"TIMEOUT: "+h})}ai.prototype.info=function(){};function ch(a,h){if(!a.g)return h;if(!h)return null;try{const O=JSON.parse(h);if(O){for(a=0;a<O.length;a++)if(Array.isArray(O[a])){var f=O[a];if(!(f.length<2)){var y=f[1];if(Array.isArray(y)&&!(y.length<1)){var D=y[0];if(D!="noop"&&D!="stop"&&D!="close")for(let B=1;B<y.length;B++)y[B]=""}}}}return ni(O)}catch{return h}}var is={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},dl={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},fl;function ss(){}m(ss,ri),ss.prototype.g=function(){return new XMLHttpRequest},fl=new ss;function li(a){return encodeURIComponent(String(a))}function pl(a){var h=1;a=a.split(":");const f=[];for(;h>0&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function _n(a,h,f,y){this.j=a,this.i=h,this.l=f,this.S=y||1,this.V=new Zi(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new os}function os(){this.i=null,this.g="",this.h=!1}var wo={},as={};function Eo(a,h,f){a.M=1,a.A=vl(En(h)),a.u=f,a.R=!0,ml(a,null)}function ml(a,h){a.F=Date.now(),J(a),a.B=En(a.A);var f=a.B,y=a.S;Array.isArray(y)||(y=[String(y)]),$m(f.i,"t",y),a.C=0,f=a.j.L,a.h=new os,a.g=ag(a.j,f?h:null,!a.u),a.P>0&&(a.O=new oh(c(a.Y,a,a.g),a.P)),h=a.V,f=a.g,y=a.ba;var D="readystatechange";Array.isArray(D)||(D&&(ti[0]=D.toString()),D=ti);for(let O=0;O<D.length;O++){const B=sh(f,D[O],y||h.handleEvent,!1,h.h||h);if(!B)break;h.g[B.key]=B}h=a.J?G(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),rs(),ah(a.i,a.v,a.B,a.l,a.S,a.u)}_n.prototype.ba=function(a){a=a.target;const h=this.O;h&&cr(a)==3?h.j():this.Y(a)},_n.prototype.Y=function(a){try{if(a==this.g)e:{const se=cr(this.g),Ke=this.g.ya(),ve=this.g.ca();if(!(se<3)&&(se!=3||this.g&&(this.h.h||this.g.la()||Ym(this.g)))){this.K||se!=4||Ke==7||(Ke==8||ve<=0?rs(3):rs(2)),pe(this);var h=this.g.ca();this.X=h;var f=gl(this);if(this.o=h==200,lh(this.i,this.v,this.B,this.l,this.S,se,h),this.o){if(this.U&&!this.L){t:{if(this.g){var y,D=this.g;if((y=D.g?D.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(y)){var O=y;break t}}O=null}if(a=O)or(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,wn(this,a);else{this.o=!1,this.m=3,qe(12),Ce(this),et(this);break e}}if(this.R){a=!0;let tt;for(;!this.K&&this.C<f.length;)if(tt=W(this,f),tt==as){se==4&&(this.m=4,qe(14),a=!1),or(this.i,this.l,null,"[Incomplete Response]");break}else if(tt==wo){this.m=4,qe(15),or(this.i,this.l,f,"[Invalid Chunk]"),a=!1;break}else or(this.i,this.l,tt,null),wn(this,tt);if(R(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),se!=4||f.length!=0||this.h.h||(this.m=1,qe(16),a=!1),this.o=this.o&&a,!a)or(this.i,this.l,f,"[Invalid Chunked Response]"),Ce(this),et(this);else if(f.length>0&&!this.W){this.W=!0;var B=this.j;B.g==this&&B.aa&&!B.P&&(B.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),vh(B),B.P=!0,qe(11))}}else or(this.i,this.l,f,null),wn(this,f);se==4&&Ce(this),this.o&&!this.K&&(se==4?rg(this.j,this):(this.o=!1,J(this)))}else hT(this.g),h==400&&f.indexOf("Unknown SID")>0?(this.m=3,qe(12)):(this.m=0,qe(13)),Ce(this),et(this)}}}catch{}finally{}};function gl(a){if(!R(a))return a.g.la();const h=Ym(a.g);if(h==="")return"";let f="";const y=h.length,D=cr(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Ce(a),et(a),"";a.h.i=new o.TextDecoder}for(let O=0;O<y;O++)a.h.h=!0,f+=a.h.i.decode(h[O],{stream:!(D&&O==y-1)});return h.length=0,a.h.g+=f,a.C=0,a.h.g}function R(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function W(a,h){var f=a.C,y=h.indexOf(`
`,f);return y==-1?as:(f=Number(h.substring(f,y)),isNaN(f)?wo:(y+=1,y+f>h.length?as:(h=h.slice(y,y+f),a.C=y+f,h)))}_n.prototype.cancel=function(){this.K=!0,Ce(this)};function J(a){a.T=Date.now()+a.H,ce(a,a.H)}function ce(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=oi(c(a.aa,a),h)}function pe(a){a.D&&(o.clearTimeout(a.D),a.D=null)}_n.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(uh(this.i,this.B),this.M!=2&&(rs(),qe(17)),Ce(this),this.m=2,et(this)):ce(this,this.T-a)};function et(a){a.j.I==0||a.K||rg(a.j,a)}function Ce(a){pe(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,Ht(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function wn(a,h){try{var f=a.j;if(f.I!=0&&(f.g==a||hh(f.h,a))){if(!a.L&&hh(f.h,a)&&f.I==3){try{var y=f.Ba.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var D=y;if(D[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<a.F)Tl(f),El(f);else break e;yh(f),qe(18)}}else f.xa=D[1],0<f.xa-f.K&&D[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=oi(c(f.Va,f),6e3));To(f.h)<=1&&f.ta&&(f.ta=void 0)}else ci(f,11)}else if((a.L||f.g==a)&&Tl(f),!S(h))for(D=f.Ba.g.parse(h),h=0;h<D.length;h++){let ve=D[h];const tt=ve[0];if(!(tt<=f.K))if(f.K=tt,ve=ve[1],f.I==2)if(ve[0]=="c"){f.M=ve[1],f.ba=ve[2];const In=ve[3];In!=null&&(f.ka=In,f.j.info("VER="+f.ka));const hi=ve[4];hi!=null&&(f.za=hi,f.j.info("SVER="+f.za));const hr=ve[5];hr!=null&&typeof hr=="number"&&hr>0&&(y=1.5*hr,f.O=y,f.j.info("backChannelRequestTimeoutMs_="+y)),y=f;const dr=a.g;if(dr){const xl=dr.g?dr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(xl){var O=y.h;O.g||xl.indexOf("spdy")==-1&&xl.indexOf("quic")==-1&&xl.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(dh(O,O.h),O.h=null))}if(y.G){const _h=dr.g?dr.g.getResponseHeader("X-HTTP-Session-Id"):null;_h&&(y.wa=_h,Ee(y.J,y.G,_h))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-a.F,f.j.info("Handshake RTT: "+f.T+"ms")),y=f;var B=a;if(y.na=og(y,y.L?y.ba:null,y.W),B.L){Om(y.h,B);var se=B,Ke=y.O;Ke&&(se.H=Ke),se.D&&(pe(se),J(se)),y.g=B}else tg(y);f.i.length>0&&Il(f)}else ve[0]!="stop"&&ve[0]!="close"||ci(f,7);else f.I==3&&(ve[0]=="stop"||ve[0]=="close"?ve[0]=="stop"?ci(f,7):gh(f):ve[0]!="noop"&&f.l&&f.l.qa(ve),f.A=0)}}rs(4)}catch{}}var ar=class{constructor(a,h){this.g=a,this.map=h}};function yl(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Io(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function To(a){return a.h?1:a.g?a.g.size:0}function hh(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function dh(a,h){a.g?a.g.add(h):a.h=h}function Om(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}yl.prototype.cancel=function(){if(this.i=Lm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Lm(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.G);return h}return I(a.i)}var jm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ZI(a,h){if(a){a=a.split("&");for(let f=0;f<a.length;f++){const y=a[f].indexOf("=");let D,O=null;y>=0?(D=a[f].substring(0,y),O=a[f].substring(y+1)):D=a[f],h(D,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function lr(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof lr?(this.l=a.l,So(this,a.j),this.o=a.o,this.g=a.g,xo(this,a.u),this.h=a.h,fh(this,Wm(a.i)),this.m=a.m):a&&(h=String(a).match(jm))?(this.l=!1,So(this,h[1]||"",!0),this.o=Co(h[2]||""),this.g=Co(h[3]||"",!0),xo(this,h[4]),this.h=Co(h[5]||"",!0),fh(this,h[6]||"",!0),this.m=Co(h[7]||"")):(this.l=!1,this.i=new ko(null,this.l))}lr.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(Ao(h,Fm,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Ao(h,Fm,!0),"@"),a.push(li(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&a.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Ao(f,f.charAt(0)=="/"?nT:tT,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Ao(f,iT)),a.join("")},lr.prototype.resolve=function(a){const h=En(this);let f=!!a.j;f?So(h,a.j):f=!!a.o,f?h.o=a.o:f=!!a.g,f?h.g=a.g:f=a.u!=null;var y=a.h;if(f)xo(h,a.u);else if(f=!!a.h){if(y.charAt(0)!="/")if(this.g&&!this.h)y="/"+y;else{var D=h.h.lastIndexOf("/");D!=-1&&(y=h.h.slice(0,D+1)+y)}if(D=y,D==".."||D==".")y="";else if(D.indexOf("./")!=-1||D.indexOf("/.")!=-1){y=D.lastIndexOf("/",0)==0,D=D.split("/");const O=[];for(let B=0;B<D.length;){const se=D[B++];se=="."?y&&B==D.length&&O.push(""):se==".."?((O.length>1||O.length==1&&O[0]!="")&&O.pop(),y&&B==D.length&&O.push("")):(O.push(se),y=!0)}y=O.join("/")}else y=D}return f?h.h=y:f=a.i.toString()!=="",f?fh(h,Wm(a.i)):f=!!a.m,f&&(h.m=a.m),h};function En(a){return new lr(a)}function So(a,h,f){a.j=f?Co(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function xo(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function fh(a,h,f){h instanceof ko?(a.i=h,sT(a.i,a.l)):(f||(h=Ao(h,rT)),a.i=new ko(h,a.l))}function Ee(a,h,f){a.i.set(h,f)}function vl(a){return Ee(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Co(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ao(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,eT),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function eT(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Fm=/[#\/\?@]/g,tT=/[#\?:]/g,nT=/[#\?]/g,rT=/[#\?@]/g,iT=/#/g;function ko(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function ui(a){a.g||(a.g=new Map,a.h=0,a.i&&ZI(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=ko.prototype,t.add=function(a,h){ui(this),this.i=null,a=ls(this,a);let f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function Um(a,h){ui(a),h=ls(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function zm(a,h){return ui(a),h=ls(a,h),a.g.has(h)}t.forEach=function(a,h){ui(this),this.g.forEach(function(f,y){f.forEach(function(D){a.call(h,D,y,this)},this)},this)};function Bm(a,h){ui(a);let f=[];if(typeof h=="string")zm(a,h)&&(f=f.concat(a.g.get(ls(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)f=f.concat(a[h]);return f}t.set=function(a,h){return ui(this),this.i=null,a=ls(this,a),zm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=Bm(this,a),a.length>0?String(a[0]):h):h};function $m(a,h,f){Um(a,h),f.length>0&&(a.i=null,a.g.set(ls(a,h),I(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let y=0;y<h.length;y++){var f=h[y];const D=li(f);f=Bm(this,f);for(let O=0;O<f.length;O++){let B=D;f[O]!==""&&(B+="="+li(f[O])),a.push(B)}}return this.i=a.join("&")};function Wm(a){const h=new ko;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function ls(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function sT(a,h){h&&!a.j&&(ui(a),a.i=null,a.g.forEach(function(f,y){const D=y.toLowerCase();y!=D&&(Um(this,y),$m(this,D,f))},a)),a.j=h}function oT(a,h){const f=new ai;if(o.Image){const y=new Image;y.onload=p(ur,f,"TestLoadImage: loaded",!0,h,y),y.onerror=p(ur,f,"TestLoadImage: error",!1,h,y),y.onabort=p(ur,f,"TestLoadImage: abort",!1,h,y),y.ontimeout=p(ur,f,"TestLoadImage: timeout",!1,h,y),o.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else h(!1)}function aT(a,h){const f=new ai,y=new AbortController,D=setTimeout(()=>{y.abort(),ur(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:y.signal}).then(O=>{clearTimeout(D),O.ok?ur(f,"TestPingServer: ok",!0,h):ur(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(D),ur(f,"TestPingServer: error",!1,h)})}function ur(a,h,f,y,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),y(f)}catch{}}function lT(){this.g=new qt}function ph(a){this.i=a.Sb||null,this.h=a.ab||!1}m(ph,ri),ph.prototype.g=function(){return new _l(this.i,this.h)};function _l(a,h){Xe.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(_l,Xe),t=_l.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,Ro(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Po(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ro(this)),this.g&&(this.readyState=3,Ro(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Hm(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Hm(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Po(this):Ro(this),this.readyState==3&&Hm(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Po(this))},t.Na=function(a){this.g&&(this.response=a,Po(this))},t.ga=function(){this.g&&Po(this)};function Po(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Ro(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Ro(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(_l.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function qm(a){let h="";return Y(a,function(f,y){h+=y,h+=":",h+=f,h+=`\r
`}),h}function mh(a,h,f){e:{for(y in f){var y=!1;break e}y=!0}y||(f=qm(f),typeof a=="string"?f!=null&&li(f):Ee(a,h,f))}function Me(a){Xe.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(Me,Xe);var uT=/^https?$/i,cT=["POST","PUT"];t=Me.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,f,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():fl.g(),this.g.onreadystatechange=g(c(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(O){Km(this,O);return}if(a=f||"",f=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var D in y)f.set(D,y[D]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const O of y.keys())f.set(O,y.get(O));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(f.keys()).find(O=>O.toLowerCase()=="content-type"),D=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(cT,h,void 0)>=0)||y||D||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,B]of f)this.g.setRequestHeader(O,B);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(O){Km(this,O)}};function Km(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,Gm(a),wl(a)}function Gm(a){a.A||(a.A=!0,Le(a,"complete"),Le(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,Le(this,"complete"),Le(this,"abort"),wl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),wl(this,!0)),Me.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Qm(this):this.Xa())},t.Xa=function(){Qm(this)};function Qm(a){if(a.h&&typeof s<"u"){if(a.v&&cr(a)==4)setTimeout(a.Ca.bind(a),0);else if(Le(a,"readystatechange"),cr(a)==4){a.h=!1;try{const O=a.ca();e:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var y;if(y=O===0){let B=String(a.D).match(jm)[1]||null;!B&&o.self&&o.self.location&&(B=o.self.location.protocol.slice(0,-1)),y=!uT.test(B?B.toLowerCase():"")}f=y}if(f)Le(a,"complete"),Le(a,"success");else{a.o=6;try{var D=cr(a)>2?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.ca()+"]",Gm(a)}}finally{wl(a)}}}}function wl(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const f=a.g;a.g=null,h||Le(a,"ready");try{f.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function cr(a){return a.g?a.g.readyState:0}t.ca=function(){try{return cr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),es(h)}};function Ym(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function hT(a){const h={};a=(a.g&&cr(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(S(a[y]))continue;var f=pl(a[y]);const D=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const O=h[D]||[];h[D]=O,O.push(f)}te(h,function(y){return y.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function bo(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function Jm(a){this.za=0,this.i=[],this.j=new ai,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=bo("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=bo("baseRetryDelayMs",5e3,a),this.Za=bo("retryDelaySeedMs",1e4,a),this.Ta=bo("forwardChannelMaxRetries",2,a),this.va=bo("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new yl(a&&a.concurrentRequestLimit),this.Ba=new lT,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Jm.prototype,t.ka=8,t.I=1,t.connect=function(a,h,f,y){qe(0),this.W=a,this.H=h||{},f&&y!==void 0&&(this.H.OSID=f,this.H.OAID=y),this.F=this.X,this.J=og(this,null,this.W),Il(this)};function gh(a){if(Xm(a),a.I==3){var h=a.V++,f=En(a.J);if(Ee(f,"SID",a.M),Ee(f,"RID",h),Ee(f,"TYPE","terminate"),No(a,f),h=new _n(a,a.j,h),h.M=2,h.A=vl(En(f)),f=!1,o.navigator&&o.navigator.sendBeacon)try{f=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!f&&o.Image&&(new Image().src=h.A,f=!0),f||(h.g=ag(h.j,null),h.g.ea(h.A)),h.F=Date.now(),J(h)}sg(a)}function El(a){a.g&&(vh(a),a.g.cancel(),a.g=null)}function Xm(a){El(a),a.v&&(o.clearTimeout(a.v),a.v=null),Tl(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Il(a){if(!Io(a.h)&&!a.m){a.m=!0;var h=a.Ea;L||v(),U||(L(),U=!0),w.add(h,a),a.D=0}}function dT(a,h){return To(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=oi(c(a.Ea,a,h),ig(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const D=new _n(this,this.j,a);let O=this.o;if(this.U&&(O?(O=G(O),De(O,this.U)):O=this.U),this.u!==null||this.R||(D.J=O,O=null),this.S)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var y=this.i[f];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,h>4096){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=eg(this,D,h),f=En(this.J),Ee(f,"RID",a),Ee(f,"CVER",22),this.G&&Ee(f,"X-HTTP-Session-Id",this.G),No(this,f),O&&(this.R?h="headers="+li(qm(O))+"&"+h:this.u&&mh(f,this.u,O)),dh(this.h,D),this.Ra&&Ee(f,"TYPE","init"),this.S?(Ee(f,"$req",h),Ee(f,"SID","null"),D.U=!0,Eo(D,f,null)):Eo(D,f,h),this.I=2}}else this.I==3&&(a?Zm(this,a):this.i.length==0||Io(this.h)||Zm(this))};function Zm(a,h){var f;h?f=h.l:f=a.V++;const y=En(a.J);Ee(y,"SID",a.M),Ee(y,"RID",f),Ee(y,"AID",a.K),No(a,y),a.u&&a.o&&mh(y,a.u,a.o),f=new _n(a,a.j,f,a.D+1),a.u===null&&(f.J=a.o),h&&(a.i=h.G.concat(a.i)),h=eg(a,f,1e3),f.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),dh(a.h,f),Eo(f,y,h)}function No(a,h){a.H&&Y(a.H,function(f,y){Ee(h,y,f)}),a.l&&Y({},function(f,y){Ee(h,y,f)})}function eg(a,h,f){f=Math.min(a.i.length,f);const y=a.l?c(a.l.Ka,a.l,a):null;e:{var D=a.i;let se=-1;for(;;){const Ke=["count="+f];se==-1?f>0?(se=D[0].g,Ke.push("ofs="+se)):se=0:Ke.push("ofs="+se);let ve=!0;for(let tt=0;tt<f;tt++){var O=D[tt].g;const In=D[tt].map;if(O-=se,O<0)se=Math.max(0,D[tt].g-100),ve=!1;else try{O="req"+O+"_"||"";try{var B=In instanceof Map?In:Object.entries(In);for(const[hi,hr]of B){let dr=hr;l(hr)&&(dr=ni(hr)),Ke.push(O+hi+"="+encodeURIComponent(dr))}}catch(hi){throw Ke.push(O+"type="+encodeURIComponent("_badmap")),hi}}catch{y&&y(In)}}if(ve){B=Ke.join("&");break e}}B=void 0}return a=a.i.splice(0,f),h.G=a,B}function tg(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;L||v(),U||(L(),U=!0),w.add(h,a),a.A=0}}function yh(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=oi(c(a.Da,a),ig(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,ng(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=oi(c(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,qe(10),El(this),ng(this))};function vh(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function ng(a){a.g=new _n(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=En(a.na);Ee(h,"RID","rpc"),Ee(h,"SID",a.M),Ee(h,"AID",a.K),Ee(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&Ee(h,"TO",a.ia),Ee(h,"TYPE","xmlhttp"),No(a,h),a.u&&a.o&&mh(h,a.u,a.o),a.O&&(a.g.H=a.O);var f=a.g;a=a.ba,f.M=1,f.A=vl(En(h)),f.u=null,f.R=!0,ml(f,a)}t.Va=function(){this.C!=null&&(this.C=null,El(this),yh(this),qe(19))};function Tl(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function rg(a,h){var f=null;if(a.g==h){Tl(a),vh(a),a.g=null;var y=2}else if(hh(a.h,h))f=h.G,Om(a.h,h),y=1;else return;if(a.I!=0){if(h.o)if(y==1){f=h.u?h.u.length:0,h=Date.now()-h.F;var D=a.D;y=ns(),Le(y,new sn(y,f)),Il(a)}else tg(a);else if(D=h.m,D==3||D==0&&h.X>0||!(y==1&&dT(a,h)||y==2&&yh(a)))switch(f&&f.length>0&&(h=a.h,h.i=h.i.concat(f)),D){case 1:ci(a,5);break;case 4:ci(a,10);break;case 3:ci(a,6);break;default:ci(a,2)}}}function ig(a,h){let f=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(f*=2),f*h}function ci(a,h){if(a.j.info("Error code "+h),h==2){var f=c(a.bb,a),y=a.Ua;const D=!y;y=new lr(y||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||So(y,"https"),vl(y),D?oT(y.toString(),f):aT(y.toString(),f)}else qe(2);a.I=0,a.l&&a.l.pa(h),sg(a),Xm(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),qe(2)):(this.j.info("Failed to ping google.com"),qe(1))};function sg(a){if(a.I=0,a.ja=[],a.l){const h=Lm(a.h);(h.length!=0||a.i.length!=0)&&(C(a.ja,h),C(a.ja,a.i),a.h.i.length=0,I(a.i),a.i.length=0),a.l.oa()}}function og(a,h,f){var y=f instanceof lr?En(f):new lr(f);if(y.g!="")h&&(y.g=h+"."+y.g),xo(y,y.u);else{var D=o.location;y=D.protocol,h=h?h+"."+D.hostname:D.hostname,D=+D.port;const O=new lr(null);y&&So(O,y),h&&(O.g=h),D&&xo(O,D),f&&(O.h=f),y=O}return f=a.G,h=a.wa,f&&h&&Ee(y,f,h),Ee(y,"VER",a.ka),No(a,y),y}function ag(a,h,f){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new Me(new ph({ab:f})):new Me(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function lg(){}t=lg.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Sl(){}Sl.prototype.g=function(a,h){return new Vt(a,h)};function Vt(a,h){Xe.call(this),this.g=new Jm(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!S(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!S(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new us(this)}m(Vt,Xe),Vt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Vt.prototype.close=function(){gh(this.g)},Vt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.v&&(f={},f.__data__=ni(a),a=f);h.i.push(new ar(h.Ya++,a)),h.I==3&&Il(h)},Vt.prototype.N=function(){this.g.l=null,delete this.j,gh(this.g),delete this.g,Vt.Z.N.call(this)};function ug(a){vo.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}m(ug,vo);function cg(){hl.call(this),this.status=1}m(cg,hl);function us(a){this.g=a}m(us,lg),us.prototype.ra=function(){Le(this.g,"a")},us.prototype.qa=function(a){Le(this.g,new ug(a))},us.prototype.pa=function(a){Le(this.g,new cg)},us.prototype.oa=function(){Le(this.g,"b")},Sl.prototype.createWebChannel=Sl.prototype.g,Vt.prototype.send=Vt.prototype.o,Vt.prototype.open=Vt.prototype.m,Vt.prototype.close=Vt.prototype.close,iE=function(){return new Sl},rE=function(){return ns()},nE=Ze,wf={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},is.NO_ERROR=0,is.TIMEOUT=8,is.HTTP_ERROR=6,mu=is,dl.COMPLETE="complete",tE=dl,ii.EventType=si,si.OPEN="a",si.CLOSE="b",si.ERROR="c",si.MESSAGE="d",Xe.prototype.listen=Xe.prototype.J,Go=ii,Me.prototype.listenOnce=Me.prototype.K,Me.prototype.getLastError=Me.prototype.Ha,Me.prototype.getLastErrorCode=Me.prototype.ya,Me.prototype.getStatus=Me.prototype.ca,Me.prototype.getResponseJson=Me.prototype.La,Me.prototype.getResponseText=Me.prototype.la,Me.prototype.send=Me.prototype.ea,Me.prototype.setWithCredentials=Me.prototype.Fa,eE=Me}).apply(typeof Hl<"u"?Hl:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ct.UNAUTHENTICATED=new Ct(null),Ct.GOOGLE_CREDENTIALS=new Ct("google-credentials-uid"),Ct.FIRST_PARTY=new Ct("first-party-uid"),Ct.MOCK_USER=new Ct("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ho="12.9.0";function rR(t){ho=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi=new Mc("@firebase/firestore");function ds(){return Mi.logLevel}function q(t,...e){if(Mi.logLevel<=ae.DEBUG){const n=e.map(Hp);Mi.debug(`Firestore (${ho}): ${t}`,...n)}}function tr(t,...e){if(Mi.logLevel<=ae.ERROR){const n=e.map(Hp);Mi.error(`Firestore (${ho}): ${t}`,...n)}}function Ys(t,...e){if(Mi.logLevel<=ae.WARN){const n=e.map(Hp);Mi.warn(`Firestore (${ho}): ${t}`,...n)}}function Hp(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,sE(t,r,n)}function sE(t,e,n){let r=`FIRESTORE (${ho}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw tr(r),new Error(r)}function me(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||sE(e,i,r)}function ie(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends vn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class sR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ct.UNAUTHENTICATED))}shutdown(){}}class oR{constructor(e){this.t=e,this.currentUser=Ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){me(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Gn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Gn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Gn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(me(typeof r.accessToken=="string",31837,{l:r}),new iR(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return me(e===null||typeof e=="string",2055,{h:e}),new Ct(e)}}class aR{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Ct.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class lR{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new aR(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class fv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class uR{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Qt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){me(this.o===void 0,3512);const r=s=>{s.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new fv(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(me(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new fv(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=cR(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function le(t,e){return t<e?-1:t>e?1:0}function Ef(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return rd(i)===rd(s)?le(i,s):rd(i)?1:-1}return le(t.length,e.length)}const hR=55296,dR=57343;function rd(t){const e=t.charCodeAt(0);return e>=hR&&e<=dR}function Js(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pv="__name__";class xn{constructor(e,n,r){n===void 0?n=0:n>e.length&&ee(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ee(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return xn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof xn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=xn.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return le(e.length,n.length)}static compareSegments(e,n){const r=xn.isNumericId(e),i=xn.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?xn.extractNumericId(e).compare(xn.extractNumericId(n)):Ef(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Lr.fromString(e.substring(4,e.length-2))}}class _e extends xn{construct(e,n,r){return new _e(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new _e(n)}static emptyPath(){return new _e([])}}const fR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class lt extends xn{construct(e,n,r){return new lt(e,n,r)}static isValidIdentifier(e){return fR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),lt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===pv}static keyField(){return new lt([pv])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new H(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new H(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new H(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new H(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new lt(n)}static emptyPath(){return new lt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(_e.fromString(e))}static fromName(e){return new Q(_e.fromString(e).popFirst(5))}static empty(){return new Q(_e.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&_e.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return _e.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new _e(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oE(t,e,n){if(!n)throw new H(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function pR(t,e,n,r){if(e===!0&&r===!0)throw new H(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function mv(t){if(!Q.isDocumentKey(t))throw new H(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function gv(t){if(Q.isDocumentKey(t))throw new H(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function aE(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function jc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ee(12329,{type:typeof t})}function Ut(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=jc(t);throw new H(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(t,e){const n={typeString:t};return e&&(n.value=e),n}function el(t,e){if(!aE(t))throw new H(j.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new H(j.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yv=-62135596800,vv=1e6;class Te{static now(){return Te.fromMillis(Date.now())}static fromDate(e){return Te.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*vv);return new Te(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<yv)throw new H(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/vv}_compareTo(e){return this.seconds===e.seconds?le(this.nanoseconds,e.nanoseconds):le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Te._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(el(e,Te._jsonSchema))return new Te(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-yv;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Te._jsonSchemaVersion="firestore/timestamp/1.0",Te._jsonSchema={type:We("string",Te._jsonSchemaVersion),seconds:We("number"),nanoseconds:We("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{static fromTimestamp(e){return new ne(e)}static min(){return new ne(new Te(0,0))}static max(){return new ne(new Te(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Va=-1;function mR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ne.fromTimestamp(r===1e9?new Te(n+1,0):new Te(n,r));return new Br(i,Q.empty(),e)}function gR(t){return new Br(t.readTime,t.key,Va)}class Br{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Br(ne.min(),Q.empty(),Va)}static max(){return new Br(ne.max(),Q.empty(),Va)}}function yR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Q.comparator(t.documentKey,e.documentKey),n!==0?n:le(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _R{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fo(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==vR)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ee(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(i=>i?F.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new F((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(p=>{o[c]=p,++l,l===s&&r(o)},p=>i(p))}})}static doWhile(e,n){return new F((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function wR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function po(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Fc.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp=-1;function Uc(t){return t==null}function nc(t){return t===0&&1/t==-1/0}function ER(t){return typeof t=="number"&&Number.isInteger(t)&&!nc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lE="";function IR(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=_v(e)),e=TR(t.get(n),e);return _v(e)}function TR(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case lE:n+="";break;default:n+=s}}return n}function _v(t){return t+lE+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Zr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function uE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,n){this.comparator=e,this.root=n||at.EMPTY}insert(e,n){return new Ne(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,at.BLACK,null,null))}remove(e){return new Ne(this.comparator,this.root.remove(e,this.comparator).copy(null,null,at.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ql(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ql(this.root,e,this.comparator,!1)}getReverseIterator(){return new ql(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ql(this.root,e,this.comparator,!0)}}class ql{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class at{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??at.RED,this.left=i??at.EMPTY,this.right=s??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new at(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return at.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ee(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ee(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ee(27949);return e+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw ee(57766)}get value(){throw ee(16141)}get color(){throw ee(16727)}get left(){throw ee(29726)}get right(){throw ee(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new at(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.comparator=e,this.data=new Ne(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ev(this.data.getIterator())}getIteratorFrom(e){return new Ev(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ye)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ye(this.comparator);return n.data=e,n}}class Ev{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.fields=e,e.sort(lt.comparator)}static empty(){return new jt([])}unionWith(e){let n=new Ye(lt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new jt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Js(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new cE("Invalid base64 string: "+s):s}}(e);return new ht(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new ht(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const SR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function $r(t){if(me(!!t,39018),typeof t=="string"){let e=0;const n=SR.exec(t);if(me(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:je(t.seconds),nanos:je(t.nanos)}}function je(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Wr(t){return typeof t=="string"?ht.fromBase64String(t):ht.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hE="server_timestamp",dE="__type__",fE="__previous_value__",pE="__local_write_time__";function Gp(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[dE])==null?void 0:r.stringValue)===hE}function zc(t){const e=t.mapValue.fields[fE];return Gp(e)?zc(e):e}function Oa(t){const e=$r(t.mapValue.fields[pE].timestampValue);return new Te(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR{constructor(e,n,r,i,s,o,l,u,c,p,m){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=p,this.apiKey=m}}const rc="(default)";class La{constructor(e,n){this.projectId=e,this.database=n||rc}static empty(){return new La("","")}get isDefaultDatabase(){return this.database===rc}isEqual(e){return e instanceof La&&e.projectId===this.projectId&&e.database===this.database}}function CR(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new H(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new La(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mE="__type__",AR="__max__",Kl={mapValue:{}},gE="__vector__",ic="value";function Hr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Gp(t)?4:PR(t)?9007199254740991:kR(t)?10:11:ee(28295,{value:t})}function On(t,e){if(t===e)return!0;const n=Hr(t);if(n!==Hr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Oa(t).isEqual(Oa(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=$r(i.timestampValue),l=$r(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Wr(i.bytesValue).isEqual(Wr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return je(i.geoPointValue.latitude)===je(s.geoPointValue.latitude)&&je(i.geoPointValue.longitude)===je(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return je(i.integerValue)===je(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=je(i.doubleValue),l=je(s.doubleValue);return o===l?nc(o)===nc(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Js(t.arrayValue.values||[],e.arrayValue.values||[],On);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(wv(o)!==wv(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!On(o[u],l[u])))return!1;return!0}(t,e);default:return ee(52216,{left:t})}}function ja(t,e){return(t.values||[]).find(n=>On(n,e))!==void 0}function Xs(t,e){if(t===e)return 0;const n=Hr(t),r=Hr(e);if(n!==r)return le(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return le(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=je(s.integerValue||s.doubleValue),u=je(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Iv(t.timestampValue,e.timestampValue);case 4:return Iv(Oa(t),Oa(e));case 5:return Ef(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Wr(s),u=Wr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const p=le(l[c],u[c]);if(p!==0)return p}return le(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=le(je(s.latitude),je(o.latitude));return l!==0?l:le(je(s.longitude),je(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Tv(t.arrayValue,e.arrayValue);case 10:return function(s,o){var g,I,C,P;const l=s.fields||{},u=o.fields||{},c=(g=l[ic])==null?void 0:g.arrayValue,p=(I=u[ic])==null?void 0:I.arrayValue,m=le(((C=c==null?void 0:c.values)==null?void 0:C.length)||0,((P=p==null?void 0:p.values)==null?void 0:P.length)||0);return m!==0?m:Tv(c,p)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Kl.mapValue&&o===Kl.mapValue)return 0;if(s===Kl.mapValue)return 1;if(o===Kl.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},p=Object.keys(c);u.sort(),p.sort();for(let m=0;m<u.length&&m<p.length;++m){const g=Ef(u[m],p[m]);if(g!==0)return g;const I=Xs(l[u[m]],c[p[m]]);if(I!==0)return I}return le(u.length,p.length)}(t.mapValue,e.mapValue);default:throw ee(23264,{he:n})}}function Iv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return le(t,e);const n=$r(t),r=$r(e),i=le(n.seconds,r.seconds);return i!==0?i:le(n.nanos,r.nanos)}function Tv(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Xs(n[i],r[i]);if(s)return s}return le(n.length,r.length)}function Zs(t){return If(t)}function If(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=$r(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Wr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=If(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${If(n.fields[o])}`;return i+"}"}(t.mapValue):ee(61005,{value:t})}function gu(t){switch(Hr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=zc(t);return e?16+gu(e):16;case 5:return 2*t.stringValue.length;case 6:return Wr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+gu(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return Zr(r.fields,(s,o)=>{i+=s.length+gu(o)}),i}(t.mapValue);default:throw ee(13486,{value:t})}}function Sv(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Tf(t){return!!t&&"integerValue"in t}function Qp(t){return!!t&&"arrayValue"in t}function xv(t){return!!t&&"nullValue"in t}function Cv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function yu(t){return!!t&&"mapValue"in t}function kR(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[mE])==null?void 0:r.stringValue)===gE}function ca(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Zr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ca(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ca(t.arrayValue.values[n]);return e}return{...t}}function PR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===AR}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.value=e}static empty(){return new Pt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!yu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ca(n)}setAll(e){let n=lt.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=ca(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());yu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return On(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];yu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Zr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Pt(ca(this.value))}}function yE(t){const e=[];return Zr(t.fields,(n,r)=>{const i=new lt([n]);if(yu(r)){const s=yE(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new jt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new gt(e,0,ne.min(),ne.min(),ne.min(),Pt.empty(),0)}static newFoundDocument(e,n,r,i){return new gt(e,1,n,ne.min(),r,i,0)}static newNoDocument(e,n){return new gt(e,2,n,ne.min(),ne.min(),Pt.empty(),0)}static newUnknownDocument(e,n){return new gt(e,3,n,ne.min(),ne.min(),Pt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ne.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Pt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ne.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof gt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e,n){this.position=e,this.inclusive=n}}function Av(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=Q.comparator(Q.fromName(o.referenceValue),n.key):r=Xs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function kv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!On(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e,n="asc"){this.field=e,this.dir=n}}function RR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{}class $e extends vE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new NR(e,n,r):n==="array-contains"?new VR(e,r):n==="in"?new OR(e,r):n==="not-in"?new LR(e,r):n==="array-contains-any"?new jR(e,r):new $e(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new DR(e,r):new MR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Xs(n,this.value)):n!==null&&Hr(this.value)===Hr(n)&&this.matchesComparison(Xs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class yn extends vE{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new yn(e,n)}matches(e){return _E(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function _E(t){return t.op==="and"}function wE(t){return bR(t)&&_E(t)}function bR(t){for(const e of t.filters)if(e instanceof yn)return!1;return!0}function Sf(t){if(t instanceof $e)return t.field.canonicalString()+t.op.toString()+Zs(t.value);if(wE(t))return t.filters.map(e=>Sf(e)).join(",");{const e=t.filters.map(n=>Sf(n)).join(",");return`${t.op}(${e})`}}function EE(t,e){return t instanceof $e?function(r,i){return i instanceof $e&&r.op===i.op&&r.field.isEqual(i.field)&&On(r.value,i.value)}(t,e):t instanceof yn?function(r,i){return i instanceof yn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&EE(o,i.filters[l]),!0):!1}(t,e):void ee(19439)}function IE(t){return t instanceof $e?function(n){return`${n.field.canonicalString()} ${n.op} ${Zs(n.value)}`}(t):t instanceof yn?function(n){return n.op.toString()+" {"+n.getFilters().map(IE).join(" ,")+"}"}(t):"Filter"}class NR extends $e{constructor(e,n,r){super(e,n,r),this.key=Q.fromName(r.referenceValue)}matches(e){const n=Q.comparator(e.key,this.key);return this.matchesComparison(n)}}class DR extends $e{constructor(e,n){super(e,"in",n),this.keys=TE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class MR extends $e{constructor(e,n){super(e,"not-in",n),this.keys=TE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function TE(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>Q.fromName(r.referenceValue))}class VR extends $e{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Qp(n)&&ja(n.arrayValue,this.value)}}class OR extends $e{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ja(this.value.arrayValue,n)}}class LR extends $e{constructor(e,n){super(e,"not-in",n)}matches(e){if(ja(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!ja(this.value.arrayValue,n)}}class jR extends $e{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Qp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ja(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function Pv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new FR(t,e,n,r,i,s,o)}function Yp(t){const e=ie(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Sf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Uc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Zs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Zs(r)).join(",")),e.Te=n}return e.Te}function Jp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!RR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!EE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!kv(t.startAt,e.startAt)&&kv(t.endAt,e.endAt)}function xf(t){return Q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function UR(t,e,n,r,i,s,o,l){return new tl(t,e,n,r,i,s,o,l)}function Bc(t){return new tl(t)}function Rv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function zR(t){return Q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function SE(t){return t.collectionGroup!==null}function ha(t){const e=ie(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ye(lt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new oc(s,r))}),n.has(lt.keyField().canonicalString())||e.Ie.push(new oc(lt.keyField(),r))}return e.Ie}function Nn(t){const e=ie(t);return e.Ee||(e.Ee=BR(e,ha(t))),e.Ee}function BR(t,e){if(t.limitType==="F")return Pv(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new oc(i.field,s)});const n=t.endAt?new sc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new sc(t.startAt.position,t.startAt.inclusive):null;return Pv(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Cf(t,e){const n=t.filters.concat([e]);return new tl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Af(t,e,n){return new tl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function $c(t,e){return Jp(Nn(t),Nn(e))&&t.limitType===e.limitType}function xE(t){return`${Yp(Nn(t))}|lt:${t.limitType}`}function fs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>IE(i)).join(", ")}]`),Uc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Zs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Zs(i)).join(",")),`Target(${r})`}(Nn(t))}; limitType=${t.limitType})`}function Wc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of ha(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=Av(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,ha(r),i)||r.endAt&&!function(o,l,u){const c=Av(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,ha(r),i))}(t,e)}function $R(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function CE(t){return(e,n)=>{let r=!1;for(const i of ha(t)){const s=WR(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function WR(t,e,n){const r=t.field.isKeyField()?Q.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?Xs(u,c):ee(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ee(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Zr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return uE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HR=new Ne(Q.comparator);function nr(){return HR}const AE=new Ne(Q.comparator);function Qo(...t){let e=AE;for(const n of t)e=e.insert(n.key,n);return e}function kE(t){let e=AE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function vi(){return da()}function PE(){return da()}function da(){return new Hi(t=>t.toString(),(t,e)=>t.isEqual(e))}const qR=new Ne(Q.comparator),KR=new Ye(Q.comparator);function ue(...t){let e=KR;for(const n of t)e=e.add(n);return e}const GR=new Ye(le);function QR(){return GR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xp(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:nc(e)?"-0":e}}function RE(t){return{integerValue:""+t}}function YR(t,e){return ER(e)?RE(e):Xp(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(){this._=void 0}}function JR(t,e,n){return t instanceof Fa?function(i,s){const o={fields:{[dE]:{stringValue:hE},[pE]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Gp(s)&&(s=zc(s)),s&&(o.fields[fE]=s),{mapValue:o}}(n,e):t instanceof Ua?NE(t,e):t instanceof za?DE(t,e):function(i,s){const o=bE(i,s),l=bv(o)+bv(i.Ae);return Tf(o)&&Tf(i.Ae)?RE(l):Xp(i.serializer,l)}(t,e)}function XR(t,e,n){return t instanceof Ua?NE(t,e):t instanceof za?DE(t,e):n}function bE(t,e){return t instanceof ac?function(r){return Tf(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Fa extends Hc{}class Ua extends Hc{constructor(e){super(),this.elements=e}}function NE(t,e){const n=ME(e);for(const r of t.elements)n.some(i=>On(i,r))||n.push(r);return{arrayValue:{values:n}}}class za extends Hc{constructor(e){super(),this.elements=e}}function DE(t,e){let n=ME(e);for(const r of t.elements)n=n.filter(i=>!On(i,r));return{arrayValue:{values:n}}}class ac extends Hc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function bv(t){return je(t.integerValue||t.doubleValue)}function ME(t){return Qp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZR{constructor(e,n){this.field=e,this.transform=n}}function eb(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ua&&i instanceof Ua||r instanceof za&&i instanceof za?Js(r.elements,i.elements,On):r instanceof ac&&i instanceof ac?On(r.Ae,i.Ae):r instanceof Fa&&i instanceof Fa}(t.transform,e.transform)}class tb{constructor(e,n){this.version=e,this.transformResults=n}}class en{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new en}static exists(e){return new en(void 0,e)}static updateTime(e){return new en(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function vu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class qc{}function VE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Zp(t.key,en.none()):new nl(t.key,t.data,en.none());{const n=t.data,r=Pt.empty();let i=new Ye(lt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ei(t.key,r,new jt(i.toArray()),en.none())}}function nb(t,e,n){t instanceof nl?function(i,s,o){const l=i.value.clone(),u=Dv(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof ei?function(i,s,o){if(!vu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Dv(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(OE(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function fa(t,e,n,r){return t instanceof nl?function(s,o,l,u){if(!vu(s.precondition,o))return l;const c=s.value.clone(),p=Mv(s.fieldTransforms,u,o);return c.setAll(p),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof ei?function(s,o,l,u){if(!vu(s.precondition,o))return l;const c=Mv(s.fieldTransforms,u,o),p=o.data;return p.setAll(OE(s)),p.setAll(c),o.convertToFoundDocument(o.version,p).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,o,l){return vu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function rb(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=bE(r.transform,i||null);s!=null&&(n===null&&(n=Pt.empty()),n.set(r.field,s))}return n||null}function Nv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Js(r,i,(s,o)=>eb(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class nl extends qc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ei extends qc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function OE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Dv(t,e,n){const r=new Map;me(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,XR(o,l,n[i]))}return r}function Mv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,JR(s,o,e))}return r}class Zp extends qc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ib extends qc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&nb(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=fa(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=fa(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=PE();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=VE(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(ne.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ue())}isEqual(e){return this.batchId===e.batchId&&Js(this.mutations,e.mutations,(n,r)=>Nv(n,r))&&Js(this.baseMutations,e.baseMutations,(n,r)=>Nv(n,r))}}class em{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){me(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return qR}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new em(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ze,de;function lb(t){switch(t){case j.OK:return ee(64938);case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0;default:return ee(15467,{code:t})}}function LE(t){if(t===void 0)return tr("GRPC error has no .code"),j.UNKNOWN;switch(t){case ze.OK:return j.OK;case ze.CANCELLED:return j.CANCELLED;case ze.UNKNOWN:return j.UNKNOWN;case ze.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case ze.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case ze.INTERNAL:return j.INTERNAL;case ze.UNAVAILABLE:return j.UNAVAILABLE;case ze.UNAUTHENTICATED:return j.UNAUTHENTICATED;case ze.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case ze.NOT_FOUND:return j.NOT_FOUND;case ze.ALREADY_EXISTS:return j.ALREADY_EXISTS;case ze.PERMISSION_DENIED:return j.PERMISSION_DENIED;case ze.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case ze.ABORTED:return j.ABORTED;case ze.OUT_OF_RANGE:return j.OUT_OF_RANGE;case ze.UNIMPLEMENTED:return j.UNIMPLEMENTED;case ze.DATA_LOSS:return j.DATA_LOSS;default:return ee(39323,{code:t})}}(de=ze||(ze={}))[de.OK=0]="OK",de[de.CANCELLED=1]="CANCELLED",de[de.UNKNOWN=2]="UNKNOWN",de[de.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",de[de.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",de[de.NOT_FOUND=5]="NOT_FOUND",de[de.ALREADY_EXISTS=6]="ALREADY_EXISTS",de[de.PERMISSION_DENIED=7]="PERMISSION_DENIED",de[de.UNAUTHENTICATED=16]="UNAUTHENTICATED",de[de.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",de[de.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",de[de.ABORTED=10]="ABORTED",de[de.OUT_OF_RANGE=11]="OUT_OF_RANGE",de[de.UNIMPLEMENTED=12]="UNIMPLEMENTED",de[de.INTERNAL=13]="INTERNAL",de[de.UNAVAILABLE=14]="UNAVAILABLE",de[de.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ub(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cb=new Lr([4294967295,4294967295],0);function Vv(t){const e=ub().encode(t),n=new Z1;return n.update(e),new Uint8Array(n.digest())}function Ov(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Lr([n,r],0),new Lr([i,s],0)]}class tm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Yo(`Invalid padding: ${n}`);if(r<0)throw new Yo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Yo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Yo(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Lr.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(Lr.fromNumber(r)));return i.compare(cb)===1&&(i=new Lr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Vv(e),[r,i]=Ov(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new tm(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=Vv(e),[r,i]=Ov(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.be(o)}}be(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Yo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,rl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Kc(ne.min(),i,new Ne(le),nr(),ue())}}class rl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new rl(r,n,ue(),ue(),ue())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(e,n,r,i){this.Se=e,this.removedTargetIds=n,this.key=r,this.De=i}}class jE{constructor(e,n){this.targetId=e,this.Ce=n}}class FE{constructor(e,n,r=ht.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Lv{constructor(){this.ve=0,this.Fe=jv(),this.Me=ht.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ue(),n=ue(),r=ue();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ee(38017,{changeType:s})}}),new rl(this.Me,this.xe,e,n,r)}Ke(){this.Oe=!1,this.Fe=jv()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,me(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class hb{constructor(e){this.Ge=e,this.ze=new Map,this.je=nr(),this.He=Gl(),this.Je=Gl(),this.Ze=new Ne(le)}Xe(e){for(const n of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:ee(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(xf(s))if(r===0){const o=new Q(s.path);this.et(n,o,gt.newNoDocument(o,ne.min()))}else me(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Wr(r).toUint8Array()}catch(u){if(u instanceof cE)return Ys("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new tm(o,i,s)}catch(u){return Ys(u instanceof Yo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const l=this.ot(o);if(l){if(s.current&&xf(l.target)){const u=new Q(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,gt.newNoDocument(u,e))}s.Be&&(n.set(o,s.ke()),s.Ke())}});let r=ue();this.Je.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new Kc(e,n,this.Ze,this.je,r);return this.je=nr(),this.He=Gl(),this.Je=Gl(),this.Ze=new Ne(le),i}Ye(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,r),this.je=this.je.insert(n.key,n),this.He=this.He.insert(n.key,this.It(n.key).add(e)),this.Je=this.Je.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,n)?i.qe(n,1):i.Ue(n),this.Je=this.Je.insert(n,this.Rt(n).delete(e)),this.Je=this.Je.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new Lv,this.ze.set(e,n)),n}Rt(e){let n=this.Je.get(e);return n||(n=new Ye(le),this.Je=this.Je.insert(e,n)),n}It(e){let n=this.He.get(e);return n||(n=new Ye(le),this.He=this.He.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Lv),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Gl(){return new Ne(Q.comparator)}function jv(){return new Ne(Q.comparator)}const db={asc:"ASCENDING",desc:"DESCENDING"},fb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},pb={and:"AND",or:"OR"};class mb{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function kf(t,e){return t.useProto3Json||Uc(e)?e:{value:e}}function lc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function UE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function gb(t,e){return lc(t,e.toTimestamp())}function Dn(t){return me(!!t,49232),ne.fromTimestamp(function(n){const r=$r(n);return new Te(r.seconds,r.nanos)}(t))}function nm(t,e){return Pf(t,e).canonicalString()}function Pf(t,e){const n=function(i){return new _e(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function zE(t){const e=_e.fromString(t);return me(qE(e),10190,{key:e.toString()}),e}function Rf(t,e){return nm(t.databaseId,e.path)}function id(t,e){const n=zE(e);if(n.get(1)!==t.databaseId.projectId)throw new H(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Q($E(n))}function BE(t,e){return nm(t.databaseId,e)}function yb(t){const e=zE(t);return e.length===4?_e.emptyPath():$E(e)}function bf(t){return new _e(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function $E(t){return me(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Fv(t,e,n){return{name:Rf(t,e),fields:n.value.mapValue.fields}}function vb(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ee(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,p){return c.useProto3Json?(me(p===void 0||typeof p=="string",58123),ht.fromBase64String(p||"")):(me(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),ht.fromUint8Array(p||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const p=c.code===void 0?j.UNKNOWN:LE(c.code);return new H(p,c.message||"")}(o);n=new FE(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=id(t,r.document.name),s=Dn(r.document.updateTime),o=r.document.createTime?Dn(r.document.createTime):ne.min(),l=new Pt({mapValue:{fields:r.document.fields}}),u=gt.newFoundDocument(i,s,o,l),c=r.targetIds||[],p=r.removedTargetIds||[];n=new _u(c,p,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=id(t,r.document),s=r.readTime?Dn(r.readTime):ne.min(),o=gt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new _u([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=id(t,r.document),s=r.removedTargetIds||[];n=new _u([],s,i,null)}else{if(!("filter"in e))return ee(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new ab(i,s),l=r.targetId;n=new jE(l,o)}}return n}function _b(t,e){let n;if(e instanceof nl)n={update:Fv(t,e.key,e.value)};else if(e instanceof Zp)n={delete:Rf(t,e.key)};else if(e instanceof ei)n={update:Fv(t,e.key,e.data),updateMask:kb(e.fieldMask)};else{if(!(e instanceof ib))return ee(16599,{dt:e.type});n={verify:Rf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Fa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ua)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof za)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ac)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw ee(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:gb(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ee(27497)}(t,e.precondition)),n}function wb(t,e){return t&&t.length>0?(me(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?Dn(i.updateTime):Dn(s);return o.isEqual(ne.min())&&(o=Dn(s)),new tb(o,i.transformResults||[])}(n,e))):[]}function Eb(t,e){return{documents:[BE(t,e.path)]}}function Ib(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=BE(t,i);const s=function(c){if(c.length!==0)return HE(yn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(p=>function(g){return{field:ps(g.field),direction:xb(g.dir)}}(p))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=kf(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:i}}function Tb(t){let e=yb(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){me(r===1,65062);const p=n.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let s=[];n.where&&(s=function(m){const g=WE(m);return g instanceof yn&&wE(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(C){return new oc(ms(C.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,Uc(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(m){const g=!!m.before,I=m.values||[];return new sc(I,g)}(n.startAt));let c=null;return n.endAt&&(c=function(m){const g=!m.before,I=m.values||[];return new sc(I,g)}(n.endAt)),UR(e,i,o,s,l,"F",u,c)}function Sb(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ee(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function WE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ms(n.unaryFilter.field);return $e.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ms(n.unaryFilter.field);return $e.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ms(n.unaryFilter.field);return $e.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ms(n.unaryFilter.field);return $e.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ee(61313);default:return ee(60726)}}(t):t.fieldFilter!==void 0?function(n){return $e.create(ms(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ee(58110);default:return ee(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return yn.create(n.compositeFilter.filters.map(r=>WE(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ee(1026)}}(n.compositeFilter.op))}(t):ee(30097,{filter:t})}function xb(t){return db[t]}function Cb(t){return fb[t]}function Ab(t){return pb[t]}function ps(t){return{fieldPath:t.canonicalString()}}function ms(t){return lt.fromServerFormat(t.fieldPath)}function HE(t){return t instanceof $e?function(n){if(n.op==="=="){if(Cv(n.value))return{unaryFilter:{field:ps(n.field),op:"IS_NAN"}};if(xv(n.value))return{unaryFilter:{field:ps(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Cv(n.value))return{unaryFilter:{field:ps(n.field),op:"IS_NOT_NAN"}};if(xv(n.value))return{unaryFilter:{field:ps(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ps(n.field),op:Cb(n.op),value:n.value}}}(t):t instanceof yn?function(n){const r=n.getFilters().map(i=>HE(i));return r.length===1?r[0]:{compositeFilter:{op:Ab(n.op),filters:r}}}(t):ee(54877,{filter:t})}function kb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function qE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function KE(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e,n,r,i,s=ne.min(),o=ne.min(),l=ht.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Cr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Cr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb{constructor(e){this.yt=e}}function Rb(t){const e=Tb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Af(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{constructor(){this.Sn=new Nb}addToCollectionParentIndex(e,n){return this.Sn.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.Sn.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(Br.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(Br.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class Nb{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ye(_e.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ye(_e.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},GE=41943040;class At{static withCacheSize(e){return new At(e,At.DEFAULT_COLLECTION_PERCENTILE,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */At.DEFAULT_COLLECTION_PERCENTILE=10,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,At.DEFAULT=new At(GE,At.DEFAULT_COLLECTION_PERCENTILE,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),At.DISABLED=new At(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new eo(0)}static ar(){return new eo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zv="LruGarbageCollector",QE=1048576;function Bv([t,e],[n,r]){const i=le(t,n);return i===0?le(e,r):i}class Db{constructor(e){this.Pr=e,this.buffer=new Ye(Bv),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Bv(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class Mb{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){q(zv,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){po(n)?q(zv,"Ignoring IndexedDB error during garbage collection: ",n):await fo(n)}await this.Ar(3e5)})}}class Vb{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return F.resolve(Fc.ce);const r=new Db(n);return this.Vr.forEachTarget(e,i=>r.Er(i.sequenceNumber)).next(()=>this.Vr.mr(e,i=>r.Er(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(q("LruGarbageCollector","Garbage collection skipped; disabled"),F.resolve(Uv)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(q("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Uv):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,i,s,o,l,u,c;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,o=Date.now(),this.nthSequenceNumber(e,i))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,n))).next(m=>(s=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(c=Date.now(),ds()<=ae.DEBUG&&q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-p}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(c-u)+`ms
Total Duration: ${c-p}ms`),F.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m})))}}function Ob(t,e){return new Vb(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(){this.changes=new Hi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,gt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&fa(r.mutation,i,jt.empty(),Te.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ue()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ue()){const i=vi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Qo();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=vi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ue()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=nr();const o=da(),l=function(){return da()}();return n.forEach((u,c)=>{const p=r.get(c.key);i.has(c.key)&&(p===void 0||p.mutation instanceof ei)?s=s.insert(c.key,c):p!==void 0?(o.set(c.key,p.mutation.getFieldMask()),fa(p.mutation,c,p.mutation.getFieldMask(),Te.now())):o.set(c.key,jt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,p)=>o.set(c,p)),n.forEach((c,p)=>l.set(c,new jb(p,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,n){const r=da();let i=new Ne((o,l)=>o-l),s=ue();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let p=r.get(u)||jt.empty();p=l.applyToLocalView(c,p),r.set(u,p);const m=(i.get(l.batchId)||ue()).add(u);i=i.insert(l.batchId,m)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,p=u.value,m=PE();p.forEach(g=>{if(!s.has(g)){const I=VE(n.get(g),r.get(g));I!==null&&m.set(g,I),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,m))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return zR(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):SE(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):F.resolve(vi());let l=Va,u=s;return o.next(c=>F.forEach(c,(p,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(p)?F.resolve():this.remoteDocumentCache.getEntry(e,p).next(g=>{u=u.insert(p,g)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ue())).next(p=>({batchId:l,changes:kE(p)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Q(n)).next(r=>{let i=Qo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Qo();return this.indexManager.getCollectionParents(e,s).next(l=>F.forEach(l,u=>{const c=function(m,g){return new tl(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(p=>{p.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const p=c.getKey();o.get(p)===null&&(o=o.insert(p,gt.newInvalidDocument(p)))});let l=Qo();return o.forEach((u,c)=>{const p=s.get(u);p!==void 0&&fa(p.mutation,c,jt.empty(),Te.now()),Wc(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return F.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Dn(i.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(i){return{name:i.name,query:Rb(i.bundledQuery),readTime:Dn(i.readTime)}}(n)),F.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zb{constructor(){this.overlays=new Ne(Q.comparator),this.Lr=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=vi();return F.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.bt(e,n,s)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Lr.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const i=vi(),s=n.length+1,o=new Q(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return F.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ne((c,p)=>c-p);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let p=s.get(c.largestBatchId);p===null&&(p=vi(),s=s.insert(c.largestBatchId,p)),p.set(c.getKey(),c)}}const l=vi(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,p)=>l.set(c,p)),!(l.size()>=i)););return F.resolve(l)}bt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Lr.get(i.largestBatchId).delete(r.key);this.Lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new ob(n,r));let s=this.Lr.get(n);s===void 0&&(s=ue(),this.Lr.set(n,s)),this.Lr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(){this.sessionToken=ht.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(){this.kr=new Ye(nt.Kr),this.qr=new Ye(nt.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new nt(e,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new nt(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new Q(new _e([])),r=new nt(n,e),i=new nt(n,e+1),s=[];return this.qr.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new Q(new _e([])),r=new nt(n,e),i=new nt(n,e+1);let s=ue();return this.qr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new nt(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class nt{constructor(e,n){this.key=e,this.Hr=n}static Kr(e,n){return Q.comparator(e.key,n.key)||le(e.Hr,n.Hr)}static Ur(e,n){return le(e.Hr,n.Hr)||Q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Jr=new Ye(nt.Kr)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new sb(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Jr=this.Jr.add(new nt(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Xr(r),s=i<0?0:i;return F.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?Kp:this.Yn-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new nt(n,0),i=new nt(n,Number.POSITIVE_INFINITY),s=[];return this.Jr.forEachInRange([r,i],o=>{const l=this.Zr(o.Hr);s.push(l)}),F.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ye(le);return n.forEach(i=>{const s=new nt(i,0),o=new nt(i,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([s,o],l=>{r=r.add(l.Hr)})}),F.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;Q.isDocumentKey(s)||(s=s.child(""));const o=new nt(new Q(s),0);let l=new Ye(le);return this.Jr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.Hr)),!0)},o),F.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){me(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return F.forEach(n.mutations,i=>{const s=new nt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Jr=r})}nr(e){}containsKey(e,n){const r=new nt(n,0),i=this.Jr.firstAfterOrEqual(r);return F.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{constructor(e){this.ti=e,this.docs=function(){return new Ne(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():gt.newInvalidDocument(n))}getEntries(e,n){let r=nr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():gt.newInvalidDocument(i))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=nr();const o=n.path,l=new Q(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:p}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||yR(gR(p),r)<=0||(i.has(p.key)||Wc(n,p))&&(s=s.insert(p.key,p.mutableCopy()))}return F.resolve(s)}getAllFromCollectionGroup(e,n,r,i){ee(9500)}ni(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Hb(this)}getSize(e){return F.resolve(this.size)}}class Hb extends Lb{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(e){this.persistence=e,this.ri=new Hi(n=>Yp(n),Jp),this.lastRemoteSnapshotVersion=ne.min(),this.highestTargetId=0,this.ii=0,this.si=new rm,this.targetCount=0,this.oi=eo._r()}forEachTarget(e,n){return this.ri.forEach((r,i)=>n(i)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),F.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new eo(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.lr(n),F.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),F.waitFor(s).next(()=>i)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),F.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{constructor(e,n){this._i={},this.overlays={},this.ai=new Fc(0),this.ui=!1,this.ui=!0,this.ci=new Bb,this.referenceDelegate=e(this),this.li=new qb(this),this.indexManager=new bb,this.remoteDocumentCache=function(i){return new Wb(i)}(r=>this.referenceDelegate.hi(r)),this.serializer=new Pb(n),this.Pi=new Ub(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new zb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new $b(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const i=new Kb(this.ai.next());return this.referenceDelegate.Ti(),r(i).next(s=>this.referenceDelegate.Ii(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ei(e,n){return F.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class Kb extends _R{constructor(e){super(),this.currentSequenceNumber=e}}class im{constructor(e){this.persistence=e,this.Ri=new rm,this.Ai=null}static Vi(e){return new im(e)}get di(){if(this.Ai)return this.Ai;throw ee(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),F.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(i=>this.di.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.di.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.di,r=>{const i=Q.fromPath(r);return this.mi(e,i).next(s=>{s||n.removeEntry(i,ne.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return F.or([()=>F.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class uc{constructor(e,n){this.persistence=e,this.fi=new Hi(r=>IR(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=Ob(this,n)}static Vi(e,n){return new uc(e,n)}Ti(){}Ii(e){return F.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return F.forEach(this.fi,(r,i)=>this.wr(e,r,i).next(s=>s?F.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ni(e,o=>this.wr(e,o,n).next(l=>{l||(r++,s.removeEntry(o,ne.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),F.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),F.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),F.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),F.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=gu(e.data.value)),n}wr(e,n,r){return F.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.fi.get(n);return F.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=i}static Es(e,n){let r=ue(),i=ue();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new sm(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return gA()?8:wR(vt())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.gs(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ps(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Gb;return this.ys(e,n,o).next(l=>{if(s.result=l,this.As)return this.ws(e,n,o,l.size)})}).next(()=>s.result)}ws(e,n,r,i){return r.documentReadCount<this.Vs?(ds()<=ae.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",fs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),F.resolve()):(ds()<=ae.DEBUG&&q("QueryEngine","Query:",fs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(ds()<=ae.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",fs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Nn(n))):F.resolve())}gs(e,n){if(Rv(n))return F.resolve(null);let r=Nn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Af(n,null,"F"),r=Nn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ue(...s);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.bs(n,l);return this.Ss(n,c,o,u.readTime)?this.gs(e,Af(n,null,"F")):this.Ds(e,c,n,u)}))})))}ps(e,n,r,i){return Rv(n)||i.isEqual(ne.min())?F.resolve(null):this.fs.getDocuments(e,r).next(s=>{const o=this.bs(n,s);return this.Ss(n,o,r,i)?F.resolve(null):(ds()<=ae.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),fs(n)),this.Ds(e,o,n,mR(i,Va)).next(l=>l))})}bs(e,n){let r=new Ye(CE(e));return n.forEach((i,s)=>{Wc(e,s)&&(r=r.add(s))}),r}Ss(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ys(e,n,r){return ds()<=ae.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",fs(n)),this.fs.getDocumentsMatchingQuery(e,n,Br.min(),r)}Ds(e,n,r,i){return this.fs.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const om="LocalStore",Yb=3e8;class Jb{constructor(e,n,r,i){this.persistence=e,this.Cs=n,this.serializer=i,this.vs=new Ne(le),this.Fs=new Hi(s=>Yp(s),Jp),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Fb(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function Xb(t,e,n,r){return new Jb(t,e,n,r)}async function JE(t,e){const n=ie(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ue();for(const c of i){o.push(c.batchId);for(const p of c.mutations)u=u.add(p.key)}for(const c of s){l.push(c.batchId);for(const p of c.mutations)u=u.add(p.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ns:c,removedBatchIds:o,addedBatchIds:l}))})})}function Zb(t,e){const n=ie(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,p){const m=c.batch,g=m.keys();let I=F.resolve();return g.forEach(C=>{I=I.next(()=>p.getEntry(u,C)).next(P=>{const b=c.docVersions.get(C);me(b!==null,48541),P.version.compareTo(b)<0&&(m.applyToRemoteDocument(P,c),P.isValidDocument()&&(P.setReadTime(c.commitVersion),p.addEntry(P)))})}),I.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ue();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function XE(t){const e=ie(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function eN(t,e){const n=ie(t),r=e.snapshotVersion;let i=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});i=n.vs;const l=[];e.targetChanges.forEach((p,m)=>{const g=i.get(m);if(!g)return;l.push(n.li.removeMatchingKeys(s,p.removedDocuments,m).next(()=>n.li.addMatchingKeys(s,p.addedDocuments,m)));let I=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?I=I.withResumeToken(ht.EMPTY_BYTE_STRING,ne.min()).withLastLimboFreeSnapshotVersion(ne.min()):p.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(p.resumeToken,r)),i=i.insert(m,I),function(P,b,E){return P.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=Yb?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(g,I,p)&&l.push(n.li.updateTargetData(s,I))});let u=nr(),c=ue();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,p))}),l.push(tN(s,o,e.documentUpdates).next(p=>{u=p.Bs,c=p.Ls})),!r.isEqual(ne.min())){const p=n.li.getLastRemoteSnapshotVersion(s).next(m=>n.li.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(p)}return F.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.vs=i,s))}function tN(t,e,n){let r=ue(),i=ue();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=nr();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(ne.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):q(om,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Bs:o,Ls:i}})}function nN(t,e){const n=ie(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Kp),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function rN(t,e){const n=ie(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.li.getTargetData(r,e).next(s=>s?(i=s,F.resolve(i)):n.li.allocateTargetId(r).next(o=>(i=new Cr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.vs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function Nf(t,e,n){const r=ie(t),i=r.vs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!po(o))throw o;q(om,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(i.target)}function $v(t,e,n){const r=ie(t);let i=ne.min(),s=ue();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,p){const m=ie(u),g=m.Fs.get(p);return g!==void 0?F.resolve(m.vs.get(g)):m.li.getTargetData(c,p)}(r,o,Nn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?i:ne.min(),n?s:ue())).next(l=>(iN(r,$R(e),l),{documents:l,ks:s})))}function iN(t,e,n){let r=t.Ms.get(e)||ne.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ms.set(e,r)}class Wv{constructor(){this.activeTargetIds=QR()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class sN{constructor(){this.vo=new Wv,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Wv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oN{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hv="ConnectivityMonitor";class qv{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){q(Hv,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){q(Hv,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ql=null;function Df(){return Ql===null?Ql=function(){return 268435456+Math.round(2147483648*Math.random())}():Ql++,"0x"+Ql.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sd="RestConnection",aN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class lN{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.$o=this.databaseId.database===rc?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,n,r,i,s){const o=Df(),l=this.Qo(e,n.toUriEncodedString());q(sd,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,i,s);const{host:c}=new URL(l),p=uo(c);return this.zo(e,l,u,r,p).then(m=>(q(sd,`Received RPC '${e}' ${o}: `,m),m),m=>{throw Ys(sd,`RPC '${e}' ${o} failed with error: `,m,"url: ",l,"request:",r),m})}jo(e,n,r,i,s,o){return this.Wo(e,n,r,i,s)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ho}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Qo(e,n){const r=aN[e];let i=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uN{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt="WebChannelConnection",zo=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(i){setTimeout(()=>{throw i},0)}})};class Fs extends lN{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Fs.c_){const e=rE();zo(e,nE.STAT_EVENT,n=>{n.stat===wf.PROXY?q(pt,"STAT_EVENT: detected buffering proxy"):n.stat===wf.NOPROXY&&q(pt,"STAT_EVENT: detected no buffering proxy")}),Fs.c_=!0}}zo(e,n,r,i,s){const o=Df();return new Promise((l,u)=>{const c=new eE;c.setWithCredentials(!0),c.listenOnce(tE.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case mu.NO_ERROR:const m=c.getResponseJson();q(pt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),l(m);break;case mu.TIMEOUT:q(pt,`RPC '${e}' ${o} timed out`),u(new H(j.DEADLINE_EXCEEDED,"Request time out"));break;case mu.HTTP_ERROR:const g=c.getStatus();if(q(pt,`RPC '${e}' ${o} failed with status:`,g,"response text:",c.getResponseText()),g>0){let I=c.getResponseJson();Array.isArray(I)&&(I=I[0]);const C=I==null?void 0:I.error;if(C&&C.status&&C.message){const P=function(E){const _=E.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(_)>=0?_:j.UNKNOWN}(C.status);u(new H(P,C.message))}else u(new H(j.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new H(j.UNAVAILABLE,"Connection failed."));break;default:ee(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{q(pt,`RPC '${e}' ${o} completed.`)}});const p=JSON.stringify(i);q(pt,`RPC '${e}' ${o} sending request:`,i),c.send(n,"POST",p,r,15)})}T_(e,n,r){const i=Df(),s=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");q(pt,`Creating RPC '${e}' stream ${i}: ${c}`,l);const p=o.createWebChannel(c,l);this.I_(p);let m=!1,g=!1;const I=new uN({Ho:C=>{g?q(pt,`Not sending because RPC '${e}' stream ${i} is closed:`,C):(m||(q(pt,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),q(pt,`RPC '${e}' stream ${i} sending:`,C),p.send(C))},Jo:()=>p.close()});return zo(p,Go.EventType.OPEN,()=>{g||(q(pt,`RPC '${e}' stream ${i} transport opened.`),I.i_())}),zo(p,Go.EventType.CLOSE,()=>{g||(g=!0,q(pt,`RPC '${e}' stream ${i} transport closed`),I.o_(),this.E_(p))}),zo(p,Go.EventType.ERROR,C=>{g||(g=!0,Ys(pt,`RPC '${e}' stream ${i} transport errored. Name:`,C.name,"Message:",C.message),I.o_(new H(j.UNAVAILABLE,"The operation could not be completed")))}),zo(p,Go.EventType.MESSAGE,C=>{var P;if(!g){const b=C.data[0];me(!!b,16349);const E=b,_=(E==null?void 0:E.error)||((P=E[0])==null?void 0:P.error);if(_){q(pt,`RPC '${e}' stream ${i} received error:`,_);const x=_.status;let V=function(w){const v=ze[w];if(v!==void 0)return LE(v)}(x),L=_.message;x==="NOT_FOUND"&&L.includes("database")&&L.includes("does not exist")&&L.includes(this.databaseId.database)&&Ys(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),V===void 0&&(V=j.INTERNAL,L="Unknown error status: "+x+" with message "+_.message),g=!0,I.o_(new H(V,L)),p.close()}else q(pt,`RPC '${e}' stream ${i} received:`,b),I.__(b)}}),Fs.u_(),setTimeout(()=>{I.s_()},0),I}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return iE()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cN(t){return new Fs(t)}function od(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gc(t){return new mb(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Fs.c_=!1;class ZE{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=i,this.V_=s,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kv="PersistentStream";class eI{constructor(e,n,r,i,s,o,l,u){this.Ci=e,this.b_=r,this.S_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new ZE(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(tr(n.toString()),tr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new H(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.H_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return q(Kv,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(q(Kv,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class hN extends eI{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=vb(this.serializer,e),r=function(s){if(!("targetChange"in s))return ne.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ne.min():o.readTime?Dn(o.readTime):ne.min()}(e);return this.listener.J_(n,r)}Z_(e){const n={};n.database=bf(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=xf(u)?{documents:Eb(s,u)}:{query:Ib(s,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=UE(s,o.resumeToken);const c=kf(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(ne.min())>0){l.readTime=lc(s,o.snapshotVersion.toTimestamp());const c=kf(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=Sb(this.serializer,e);r&&(n.labels=r),this.K_(n)}X_(e){const n={};n.database=bf(this.serializer),n.removeTarget=e,this.K_(n)}}class dN extends eI{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}H_(e){return me(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,me(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){me(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=wb(e.writeResults,e.commitTime),r=Dn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=bf(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>_b(this.serializer,r))};this.K_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fN{}class pN extends fN{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new H(j.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,Pf(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new H(j.UNKNOWN,s.toString())})}jo(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,Pf(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new H(j.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function mN(t,e,n,r){return new pN(t,e,n,r)}class gN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(tr(n),this.aa=!1):q("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vi="RemoteStore";class yN{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=s,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{qi(this)&&(q(Vi,"Restarting streams for network reachability change."),await async function(u){const c=ie(u);c.Ea.add(4),await il(c),c.Va.set("Unknown"),c.Ea.delete(4),await Qc(c)}(this))})}),this.Va=new gN(r,i)}}async function Qc(t){if(qi(t))for(const e of t.Ra)await e(!0)}async function il(t){for(const e of t.Ra)await e(!1)}function tI(t,e){const n=ie(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),cm(n)?um(n):mo(n).O_()&&lm(n,e))}function am(t,e){const n=ie(t),r=mo(n);n.Ia.delete(e),r.O_()&&nI(n,e),n.Ia.size===0&&(r.O_()?r.L_():qi(n)&&n.Va.set("Unknown"))}function lm(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ne.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}mo(t).Z_(e)}function nI(t,e){t.da.$e(e),mo(t).X_(e)}function um(t){t.da=new hb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),mo(t).start(),t.Va.ua()}function cm(t){return qi(t)&&!mo(t).x_()&&t.Ia.size>0}function qi(t){return ie(t).Ea.size===0}function rI(t){t.da=void 0}async function vN(t){t.Va.set("Online")}async function _N(t){t.Ia.forEach((e,n)=>{lm(t,e)})}async function wN(t,e){rI(t),cm(t)?(t.Va.ha(e),um(t)):t.Va.set("Unknown")}async function EN(t,e,n){if(t.Va.set("Online"),e instanceof FE&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ia.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ia.delete(l),i.da.removeTarget(l))}(t,e)}catch(r){q(Vi,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await cc(t,r)}else if(e instanceof _u?t.da.Xe(e):e instanceof jE?t.da.st(e):t.da.tt(e),!n.isEqual(ne.min()))try{const r=await XE(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.da.Tt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const p=s.Ia.get(c);p&&s.Ia.set(c,p.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const p=s.Ia.get(u);if(!p)return;s.Ia.set(u,p.withResumeToken(ht.EMPTY_BYTE_STRING,p.snapshotVersion)),nI(s,u);const m=new Cr(p.target,u,c,p.sequenceNumber);lm(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){q(Vi,"Failed to raise snapshot:",r),await cc(t,r)}}async function cc(t,e,n){if(!po(e))throw e;t.Ea.add(1),await il(t),t.Va.set("Offline"),n||(n=()=>XE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q(Vi,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Qc(t)})}function iI(t,e){return e().catch(n=>cc(t,n,e))}async function Yc(t){const e=ie(t),n=qr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Kp;for(;IN(e);)try{const i=await nN(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,TN(e,i)}catch(i){await cc(e,i)}sI(e)&&oI(e)}function IN(t){return qi(t)&&t.Ta.length<10}function TN(t,e){t.Ta.push(e);const n=qr(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function sI(t){return qi(t)&&!qr(t).x_()&&t.Ta.length>0}function oI(t){qr(t).start()}async function SN(t){qr(t).ra()}async function xN(t){const e=qr(t);for(const n of t.Ta)e.ea(n.mutations)}async function CN(t,e,n){const r=t.Ta.shift(),i=em.from(r,e,n);await iI(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Yc(t)}async function AN(t,e){e&&qr(t).Y_&&await async function(r,i){if(function(o){return lb(o)&&o!==j.ABORTED}(i.code)){const s=r.Ta.shift();qr(r).B_(),await iI(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Yc(r)}}(t,e),sI(t)&&oI(t)}async function Gv(t,e){const n=ie(t);n.asyncQueue.verifyOperationInProgress(),q(Vi,"RemoteStore received new credentials");const r=qi(n);n.Ea.add(3),await il(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Qc(n)}async function kN(t,e){const n=ie(t);e?(n.Ea.delete(2),await Qc(n)):e||(n.Ea.add(2),await il(n),n.Va.set("Unknown"))}function mo(t){return t.ma||(t.ma=function(n,r,i){const s=ie(n);return s.sa(),new hN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:vN.bind(null,t),Yo:_N.bind(null,t),t_:wN.bind(null,t),J_:EN.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),cm(t)?um(t):t.Va.set("Unknown")):(await t.ma.stop(),rI(t))})),t.ma}function qr(t){return t.fa||(t.fa=function(n,r,i){const s=ie(n);return s.sa(),new dN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:SN.bind(null,t),t_:AN.bind(null,t),ta:xN.bind(null,t),na:CN.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await Yc(t)):(await t.fa.stop(),t.Ta.length>0&&(q(Vi,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Gn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new hm(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function dm(t,e){if(tr("AsyncQueue",`${e}: ${t}`),po(t))return new H(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{static emptySet(e){return new Us(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||Q.comparator(n.key,r.key):(n,r)=>Q.comparator(n.key,r.key),this.keyedMap=Qo(),this.sortedSet=new Ne(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Us)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Us;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv{constructor(){this.ga=new Ne(Q.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):ee(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class to{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new to(e,n,Us.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&$c(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PN{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some(e=>e.Da())}}class RN{constructor(){this.queries=Yv(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=ie(n),s=i.queries;i.queries=Yv(),s.forEach((o,l)=>{for(const u of l.ba)u.onError(r)})})(this,new H(j.ABORTED,"Firestore shutting down"))}}function Yv(){return new Hi(t=>xE(t),$c)}async function fm(t,e){const n=ie(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.Sa()&&e.Da()&&(r=2):(s=new PN,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=dm(o,`Initialization of query '${fs(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.ba.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&mm(n)}async function pm(t,e){const n=ie(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.ba.indexOf(e);o>=0&&(s.ba.splice(o,1),s.ba.length===0?i=e.Da()?0:1:!s.Sa()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function bN(t,e){const n=ie(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.ba)l.Fa(i)&&(r=!0);o.wa=i}}r&&mm(n)}function NN(t,e,n){const r=ie(t),i=r.queries.get(e);if(i)for(const s of i.ba)s.onError(n);r.queries.delete(e)}function mm(t){t.Ca.forEach(e=>{e.next()})}var Mf,Jv;(Jv=Mf||(Mf={})).Ma="default",Jv.Cache="cache";class gm{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new to(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.Ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=to.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Mf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(e){this.key=e}}class lI{constructor(e){this.key=e}}class DN{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=ue(),this.mutatedKeys=ue(),this.eu=CE(e),this.tu=new Us(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new Qv,i=n?n.tu:this.tu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((p,m)=>{const g=i.get(p),I=Wc(this.query,m)?m:null,C=!!g&&this.mutatedKeys.has(g.key),P=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let b=!1;g&&I?g.data.isEqual(I.data)?C!==P&&(r.track({type:3,doc:I}),b=!0):this.su(g,I)||(r.track({type:2,doc:I}),b=!0,(u&&this.eu(I,u)>0||c&&this.eu(I,c)<0)&&(l=!0)):!g&&I?(r.track({type:0,doc:I}),b=!0):g&&!I&&(r.track({type:1,doc:g}),b=!0,(u||c)&&(l=!0)),b&&(I?(o=o.add(I),s=P?s.add(p):s.delete(p)):(o=o.delete(p),s=s.delete(p)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const p=this.query.limitType==="F"?o.last():o.first();o=o.delete(p.key),s=s.delete(p.key),r.track({type:1,doc:p})}return{tu:o,iu:r,Ss:l,mutatedKeys:s}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((p,m)=>function(I,C){const P=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee(20277,{Vt:b})}};return P(I)-P(C)}(p.type,m.type)||this.eu(p.doc,m.doc)),this.ou(r),i=i??!1;const l=n&&!i?this._u():[],u=this.Ya.size===0&&this.current&&!i?1:0,c=u!==this.Xa;return this.Xa=u,o.length!==0||c?{snapshot:new to(this.query,e.tu,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Qv,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=ue(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new lI(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new aI(r))}),n}cu(e){this.Za=e.ks,this.Ya=ue();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return to.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const ym="SyncEngine";class MN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class VN{constructor(e){this.key=e,this.hu=!1}}class ON{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Hi(l=>xE(l),$c),this.Iu=new Map,this.Eu=new Set,this.Ru=new Ne(Q.comparator),this.Au=new Map,this.Vu=new rm,this.du={},this.mu=new Map,this.fu=eo.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function LN(t,e,n=!0){const r=pI(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await uI(r,e,n,!0),i}async function jN(t,e){const n=pI(t);await uI(n,e,!0,!1)}async function uI(t,e,n,r){const i=await rN(t.localStore,Nn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await FN(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&tI(t.remoteStore,i),l}async function FN(t,e,n,r,i){t.pu=(m,g,I)=>async function(P,b,E,_){let x=b.view.ru(E);x.Ss&&(x=await $v(P.localStore,b.query,!1).then(({documents:w})=>b.view.ru(w,x)));const V=_&&_.targetChanges.get(b.targetId),L=_&&_.targetMismatches.get(b.targetId)!=null,U=b.view.applyChanges(x,P.isPrimaryClient,V,L);return Zv(P,b.targetId,U.au),U.snapshot}(t,m,g,I);const s=await $v(t.localStore,e,!0),o=new DN(e,s.ks),l=o.ru(s.documents),u=rl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);Zv(t,n,c.au);const p=new MN(e,n,o);return t.Tu.set(e,p),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),c.snapshot}async function UN(t,e,n){const r=ie(t),i=r.Tu.get(e),s=r.Iu.get(i.targetId);if(s.length>1)return r.Iu.set(i.targetId,s.filter(o=>!$c(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Nf(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&am(r.remoteStore,i.targetId),Vf(r,i.targetId)}).catch(fo)):(Vf(r,i.targetId),await Nf(r.localStore,i.targetId,!0))}async function zN(t,e){const n=ie(t),r=n.Tu.get(e),i=n.Iu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),am(n.remoteStore,r.targetId))}async function BN(t,e,n){const r=QN(t);try{const i=await function(o,l){const u=ie(o),c=Te.now(),p=l.reduce((I,C)=>I.add(C.key),ue());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",I=>{let C=nr(),P=ue();return u.xs.getEntries(I,p).next(b=>{C=b,C.forEach((E,_)=>{_.isValidDocument()||(P=P.add(E))})}).next(()=>u.localDocuments.getOverlayedDocuments(I,C)).next(b=>{m=b;const E=[];for(const _ of l){const x=rb(_,m.get(_.key).overlayedDocument);x!=null&&E.push(new ei(_.key,x,yE(x.value.mapValue),en.exists(!0)))}return u.mutationQueue.addMutationBatch(I,c,E,l)}).next(b=>{g=b;const E=b.applyToLocalDocumentSet(m,P);return u.documentOverlayCache.saveOverlays(I,b.batchId,E)})}).then(()=>({batchId:g.batchId,changes:kE(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.du[o.currentUser.toKey()];c||(c=new Ne(le)),c=c.insert(l,u),o.du[o.currentUser.toKey()]=c}(r,i.batchId,n),await sl(r,i.changes),await Yc(r.remoteStore)}catch(i){const s=dm(i,"Failed to persist write");n.reject(s)}}async function cI(t,e){const n=ie(t);try{const r=await eN(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Au.get(s);o&&(me(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?me(o.hu,14607):i.removedDocuments.size>0&&(me(o.hu,42227),o.hu=!1))}),await sl(n,r,e)}catch(r){await fo(r)}}function Xv(t,e,n){const r=ie(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=ie(o);u.onlineState=l;let c=!1;u.queries.forEach((p,m)=>{for(const g of m.ba)g.va(l)&&(c=!0)}),c&&mm(u)}(r.eventManager,e),i.length&&r.Pu.J_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function $N(t,e,n){const r=ie(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new Ne(Q.comparator);o=o.insert(s,gt.newNoDocument(s,ne.min()));const l=ue().add(s),u=new Kc(ne.min(),new Map,new Ne(le),o,l);await cI(r,u),r.Ru=r.Ru.remove(s),r.Au.delete(e),vm(r)}else await Nf(r.localStore,e,!1).then(()=>Vf(r,e,n)).catch(fo)}async function WN(t,e){const n=ie(t),r=e.batch.batchId;try{const i=await Zb(n.localStore,e);dI(n,r,null),hI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await sl(n,i)}catch(i){await fo(i)}}async function HN(t,e,n){const r=ie(t);try{const i=await function(o,l){const u=ie(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let p;return u.mutationQueue.lookupMutationBatch(c,l).next(m=>(me(m!==null,37113),p=m.keys(),u.mutationQueue.removeMutationBatch(c,m))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,p,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,p)).next(()=>u.localDocuments.getDocuments(c,p))})}(r.localStore,e);dI(r,e,n),hI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await sl(r,i)}catch(i){await fo(i)}}function hI(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function dI(t,e,n){const r=ie(t);let i=r.du[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.du[r.currentUser.toKey()]=i}}function Vf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(r=>{t.Vu.containsKey(r)||fI(t,r)})}function fI(t,e){t.Eu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(am(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),vm(t))}function Zv(t,e,n){for(const r of n)r instanceof aI?(t.Vu.addReference(r.key,e),qN(t,r)):r instanceof lI?(q(ym,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||fI(t,r.key)):ee(19791,{wu:r})}function qN(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Eu.has(r)||(q(ym,"New document in limbo: "+n),t.Eu.add(r),vm(t))}function vm(t){for(;t.Eu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new Q(_e.fromString(e)),r=t.fu.next();t.Au.set(r,new VN(n)),t.Ru=t.Ru.insert(n,r),tI(t.remoteStore,new Cr(Nn(Bc(n.path)),r,"TargetPurposeLimboResolution",Fc.ce))}}async function sl(t,e,n){const r=ie(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(c=>{var p;if((c||n)&&r.isPrimaryClient){const m=c?!c.fromCache:(p=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:p.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(c){i.push(c);const m=sm.Es(u.targetId,c);s.push(m)}}))}),await Promise.all(o),r.Pu.J_(i),await async function(u,c){const p=ie(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>F.forEach(c,g=>F.forEach(g.Ts,I=>p.persistence.referenceDelegate.addReference(m,g.targetId,I)).next(()=>F.forEach(g.Is,I=>p.persistence.referenceDelegate.removeReference(m,g.targetId,I)))))}catch(m){if(!po(m))throw m;q(om,"Failed to update sequence numbers: "+m)}for(const m of c){const g=m.targetId;if(!m.fromCache){const I=p.vs.get(g),C=I.snapshotVersion,P=I.withLastLimboFreeSnapshotVersion(C);p.vs=p.vs.insert(g,P)}}}(r.localStore,s))}async function KN(t,e){const n=ie(t);if(!n.currentUser.isEqual(e)){q(ym,"User change. New user:",e.toKey());const r=await JE(n.localStore,e);n.currentUser=e,function(s,o){s.mu.forEach(l=>{l.forEach(u=>{u.reject(new H(j.CANCELLED,o))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await sl(n,r.Ns)}}function GN(t,e){const n=ie(t),r=n.Au.get(e);if(r&&r.hu)return ue().add(r.key);{let i=ue();const s=n.Iu.get(e);if(!s)return i;for(const o of s){const l=n.Tu.get(o);i=i.unionWith(l.view.nu)}return i}}function pI(t){const e=ie(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=cI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=GN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=$N.bind(null,e),e.Pu.J_=bN.bind(null,e.eventManager),e.Pu.yu=NN.bind(null,e.eventManager),e}function QN(t){const e=ie(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=WN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=HN.bind(null,e),e}class hc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Gc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return Xb(this.persistence,new Qb,e.initialUser,this.serializer)}Cu(e){return new YE(im.Vi,this.serializer)}Du(e){return new sN}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}hc.provider={build:()=>new hc};class YN extends hc{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){me(this.persistence.referenceDelegate instanceof uc,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Mb(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?At.withCacheSize(this.cacheSizeBytes):At.DEFAULT;return new YE(r=>uc.Vi(r,n),this.serializer)}}class Of{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Xv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=KN.bind(null,this.syncEngine),await kN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new RN}()}createDatastore(e){const n=Gc(e.databaseInfo.databaseId),r=cN(e.databaseInfo);return mN(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new yN(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Xv(this.syncEngine,n,0),function(){return qv.v()?new qv:new oN}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,p){const m=new ON(i,s,o,l,u,c);return p&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ie(i);q(Vi,"RemoteStore shutting down."),s.Ea.add(5),await il(s),s.Aa.shutdown(),s.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Of.provider={build:()=>new Of};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):tr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr="FirestoreClient";class JN{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=i,this.user=Ct.UNAUTHENTICATED,this.clientId=qp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{q(Kr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(q(Kr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Gn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=dm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ad(t,e){t.asyncQueue.verifyOperationInProgress(),q(Kr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await JE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function e_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await XN(t);q(Kr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Gv(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Gv(e.remoteStore,i)),t._onlineComponents=e}async function XN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q(Kr,"Using user provided OfflineComponentProvider");try{await ad(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===j.FAILED_PRECONDITION||i.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Ys("Error using user provided cache. Falling back to memory cache: "+n),await ad(t,new hc)}}else q(Kr,"Using default OfflineComponentProvider"),await ad(t,new YN(void 0));return t._offlineComponents}async function mI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q(Kr,"Using user provided OnlineComponentProvider"),await e_(t,t._uninitializedComponentsProvider._online)):(q(Kr,"Using default OnlineComponentProvider"),await e_(t,new Of))),t._onlineComponents}function ZN(t){return mI(t).then(e=>e.syncEngine)}async function dc(t){const e=await mI(t),n=e.eventManager;return n.onListen=LN.bind(null,e.syncEngine),n.onUnlisten=UN.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=jN.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=zN.bind(null,e.syncEngine),n}function e5(t,e,n,r){const i=new _m(r),s=new gm(e,i,n);return t.asyncQueue.enqueueAndForget(async()=>fm(await dc(t),s)),()=>{i.Nu(),t.asyncQueue.enqueueAndForget(async()=>pm(await dc(t),s))}}function t5(t,e,n={}){const r=new Gn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const p=new _m({next:g=>{p.Nu(),o.enqueueAndForget(()=>pm(s,m));const I=g.docs.has(l);!I&&g.fromCache?c.reject(new H(j.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&g.fromCache&&u&&u.source==="server"?c.reject(new H(j.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(g)},error:g=>c.reject(g)}),m=new gm(Bc(l.path),p,{includeMetadataChanges:!0,Ka:!0});return fm(s,m)}(await dc(t),t.asyncQueue,e,n,r)),r.promise}function n5(t,e,n={}){const r=new Gn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const p=new _m({next:g=>{p.Nu(),o.enqueueAndForget(()=>pm(s,m)),g.fromCache&&u.source==="server"?c.reject(new H(j.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(g)},error:g=>c.reject(g)}),m=new gm(l,p,{includeMetadataChanges:!0,Ka:!0});return fm(s,m)}(await dc(t),t.asyncQueue,e,n,r)),r.promise}function r5(t,e){const n=new Gn;return t.asyncQueue.enqueueAndForget(async()=>BN(await ZN(t),e,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i5="ComponentProvider",t_=new Map;function s5(t,e,n,r,i){return new xR(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,gI(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o5="firestore.googleapis.com",n_=!0;class r_{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new H(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=o5,this.ssl=n_}else this.host=e.host,this.ssl=e.ssl??n_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=GE;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<QE)throw new H(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}pR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=gI(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new H(j.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new H(j.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new H(j.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class wm{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new r_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new H(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new H(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new r_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new sR;switch(r.type){case"firstParty":return new lR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=t_.get(n);r&&(q(i5,"Removing Datastore"),t_.delete(n),r.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ki(this.firestore,e,this._query)}}class Oe{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new jr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Oe(this.firestore,e,this._key)}toJSON(){return{type:Oe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(el(n,Oe._jsonSchema))return new Oe(e,r||null,new Q(_e.fromString(n.referencePath)))}}Oe._jsonSchemaVersion="firestore/documentReference/1.0",Oe._jsonSchema={type:We("string",Oe._jsonSchemaVersion),referencePath:We("string")};class jr extends Ki{constructor(e,n,r){super(e,n,Bc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Oe(this.firestore,null,new Q(e))}withConverter(e){return new jr(this.firestore,e,this._path)}}function Jo(t,e,...n){if(t=xe(t),oE("collection","path",e),t instanceof wm){const r=_e.fromString(e,...n);return gv(r),new jr(t,null,r)}{if(!(t instanceof Oe||t instanceof jr))throw new H(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(_e.fromString(e,...n));return gv(r),new jr(t.firestore,null,r)}}function An(t,e,...n){if(t=xe(t),arguments.length===1&&(e=qp.newId()),oE("doc","path",e),t instanceof wm){const r=_e.fromString(e,...n);return mv(r),new Oe(t,null,new Q(r))}{if(!(t instanceof Oe||t instanceof jr))throw new H(j.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(_e.fromString(e,...n));return mv(r),new Oe(t.firestore,t instanceof jr?t.converter:null,new Q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_="AsyncQueue";class s_{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new ZE(this,"async_queue_retry"),this._c=()=>{const r=od();r&&q(i_,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=od();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=od();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Gn;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!po(e))throw e;q(i_,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,tr("INTERNAL UNHANDLED ERROR: ",o_(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=hm.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&ee(47125,{Pc:o_(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function o_(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class rr extends wm{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new s_,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new s_(e),this._firestoreClient=void 0,await e}}}function a5(t,e,n){n||(n=rc);const r=Bi(t,"firestore");if(r.isInitialized(n)){const i=r.getImmediate({identifier:n}),s=r.getOptions(n);if(zr(s,e))return i;throw new H(j.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new H(j.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<QE)throw new H(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return e.host&&uo(e.host)&&o1(e.host),r.initialize({options:e,instanceIdentifier:n})}function Jc(t){if(t._terminated)throw new H(j.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||l5(t),t._firestoreClient}function l5(t){var r,i,s,o;const e=t._freezeSettings(),n=s5(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(i=t._app)==null?void 0:i.options.apiKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new JN(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Yt(ht.fromBase64String(e))}catch(n){throw new H(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Yt(ht.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Yt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(el(e,Yt._jsonSchema))return Yt.fromBase64String(e.bytes)}}Yt._jsonSchemaVersion="firestore/bytes/1.0",Yt._jsonSchema={type:We("string",Yt._jsonSchemaVersion),bytes:We("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new lt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return le(this._lat,e._lat)||le(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Mn._jsonSchemaVersion}}static fromJSON(e){if(el(e,Mn._jsonSchema))return new Mn(e.latitude,e.longitude)}}Mn._jsonSchemaVersion="firestore/geoPoint/1.0",Mn._jsonSchema={type:We("string",Mn._jsonSchemaVersion),latitude:We("number"),longitude:We("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:fn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(el(e,fn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new fn(e.vectorValues);throw new H(j.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}fn._jsonSchemaVersion="firestore/vectorValue/1.0",fn._jsonSchema={type:We("string",fn._jsonSchemaVersion),vectorValues:We("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u5=/^__.*__$/;class c5{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ei(e,this.data,this.fieldMask,n,this.fieldTransforms):new nl(e,this.data,n,this.fieldTransforms)}}class yI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ei(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function vI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee(40011,{dataSource:t})}}class Im{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.validatePath(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new Im({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return fc(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(vI(this.dataSource)&&u5.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class h5{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Gc(e)}createContext(e,n,r,i=!1){return new Im({dataSource:e,methodName:n,targetDoc:r,path:lt.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Zc(t){const e=t._freezeSettings(),n=Gc(t._databaseId);return new h5(t._databaseId,!!e.ignoreUndefinedProperties,n)}function _I(t,e,n,r,i,s={}){const o=t.createContext(s.merge||s.mergeFields?2:0,e,n,i);Sm("Data must be an object, but it was:",o,r);const l=wI(r,o);let u,c;if(s.merge)u=new jt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const p=[];for(const m of s.mergeFields){const g=no(e,m,n);if(!o.contains(g))throw new H(j.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);TI(p,g)||p.push(g)}u=new jt(p),c=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,c=o.fieldTransforms;return new c5(new Pt(l),u,c)}class eh extends Xc{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof eh}}class Tm extends Xc{_toFieldTransform(e){return new ZR(e.path,new Fa)}isEqual(e){return e instanceof Tm}}function d5(t,e,n,r){const i=t.createContext(1,e,n);Sm("Data must be an object, but it was:",i,r);const s=[],o=Pt.empty();Zr(r,(u,c)=>{const p=II(e,u,n);c=xe(c);const m=i.childContextForFieldPath(p);if(c instanceof eh)s.push(p);else{const g=ol(c,m);g!=null&&(s.push(p),o.set(p,g))}});const l=new jt(s);return new yI(o,l,i.fieldTransforms)}function f5(t,e,n,r,i,s){const o=t.createContext(1,e,n),l=[no(e,r,n)],u=[i];if(s.length%2!=0)throw new H(j.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)l.push(no(e,s[g])),u.push(s[g+1]);const c=[],p=Pt.empty();for(let g=l.length-1;g>=0;--g)if(!TI(c,l[g])){const I=l[g];let C=u[g];C=xe(C);const P=o.childContextForFieldPath(I);if(C instanceof eh)c.push(I);else{const b=ol(C,P);b!=null&&(c.push(I),p.set(I,b))}}const m=new jt(c);return new yI(p,m,o.fieldTransforms)}function p5(t,e,n,r=!1){return ol(n,t.createContext(r?4:3,e))}function ol(t,e){if(EI(t=xe(t)))return Sm("Unsupported field value:",e,t),wI(t,e);if(t instanceof Xc)return function(r,i){if(!vI(i.dataSource))throw i.createError(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.createError(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=ol(l,i.childContextForArray(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=xe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return YR(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Te.fromDate(r);return{timestampValue:lc(i.serializer,s)}}if(r instanceof Te){const s=new Te(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:lc(i.serializer,s)}}if(r instanceof Mn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Yt)return{bytesValue:UE(i.serializer,r._byteString)};if(r instanceof Oe){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.createError(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:nm(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof fn)return function(o,l){const u=o instanceof fn?o.toArray():o;return{mapValue:{fields:{[mE]:{stringValue:gE},[ic]:{arrayValue:{values:u.map(p=>{if(typeof p!="number")throw l.createError("VectorValues must only contain numeric values.");return Xp(l.serializer,p)})}}}}}}(r,i);if(KE(r))return r._toProto(i.serializer);throw i.createError(`Unsupported field value: ${jc(r)}`)}(t,e)}function wI(t,e){const n={};return uE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Zr(t,(r,i)=>{const s=ol(i,e.childContextForField(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function EI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Te||t instanceof Mn||t instanceof Yt||t instanceof Oe||t instanceof Xc||t instanceof fn||KE(t))}function Sm(t,e,n){if(!EI(n)||!aE(n)){const r=jc(n);throw r==="an object"?e.createError(t+" a custom object"):e.createError(t+" "+r)}}function no(t,e,n){if((e=xe(e))instanceof Em)return e._internalPath;if(typeof e=="string")return II(t,e);throw fc("Field path arguments must be of type string or ",t,!1,void 0,n)}const m5=new RegExp("[~\\*/\\[\\]]");function II(t,e,n){if(e.search(m5)>=0)throw fc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Em(...e.split("."))._internalPath}catch{throw fc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function fc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new H(j.INVALID_ARGUMENT,l+t+u)}function TI(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g5{convertValue(e,n="none"){switch(Hr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return je(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Wr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ee(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Zr(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[ic].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>je(o.doubleValue));return new fn(n)}convertGeoPoint(e){return new Mn(je(e.latitude),je(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=zc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Oa(e));default:return null}}convertTimestamp(e){const n=$r(e);return new Te(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=_e.fromString(e);me(qE(r),9688,{name:e});const i=new La(r.get(1),r.get(3)),s=new Q(r.popFirst(5));return i.isEqual(n)||tr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm extends g5{constructor(e){super(),this.firestore=e}convertBytes(e){return new Yt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Oe(this.firestore,null,n)}}function y5(){return new Tm("serverTimestamp")}const a_="@firebase/firestore",l_="4.11.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u_(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Oe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new v5(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(no("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class v5 extends SI{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xI(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new H(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Cm{}class _5 extends Cm{}function Lf(t,e,...n){let r=[];e instanceof Cm&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Am).length,l=s.filter(u=>u instanceof th).length;if(o>1||o>0&&l>0)throw new H(j.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class th extends _5{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new th(e,n,r)}_apply(e){const n=this._parse(e);return CI(e._query,n),new Ki(e.firestore,e.converter,Cf(e._query,n))}_parse(e){const n=Zc(e.firestore);return function(s,o,l,u,c,p,m){let g;if(c.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new H(j.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){h_(m,p);const C=[];for(const P of m)C.push(c_(u,s,P));g={arrayValue:{values:C}}}else g=c_(u,s,m)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||h_(m,p),g=p5(l,o,m,p==="in"||p==="not-in");return $e.create(c,p,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function jf(t,e,n){const r=e,i=no("where",t);return th._create(i,r,n)}class Am extends Cm{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Am(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:yn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)CI(o,u),o=Cf(o,u)}(e._query,n),new Ki(e.firestore,e.converter,Cf(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function c_(t,e,n){if(typeof(n=xe(n))=="string"){if(n==="")throw new H(j.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!SE(e)&&n.indexOf("/")!==-1)throw new H(j.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(_e.fromString(n));if(!Q.isDocumentKey(r))throw new H(j.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Sv(t,new Q(r))}if(n instanceof Oe)return Sv(t,n._key);throw new H(j.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${jc(n)}.`)}function h_(t,e){if(!Array.isArray(t)||t.length===0)throw new H(j.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function CI(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new H(j.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new H(j.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function AI(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Xo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Si extends SI{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new wu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(no("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new H(j.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Si._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Si._jsonSchemaVersion="firestore/documentSnapshot/1.0",Si._jsonSchema={type:We("string",Si._jsonSchemaVersion),bundleSource:We("string","DocumentSnapshot"),bundleName:We("string"),bundle:We("string")};class wu extends Si{data(e={}){return super.data(e)}}class xi{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Xo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new wu(this._firestore,this._userDataWriter,r.key,r,new Xo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new wu(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Xo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new wu(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Xo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,p=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),p=o.indexOf(l.doc.key)),{type:w5(l.type),doc:u,oldIndex:c,newIndex:p}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new H(j.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=xi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=qp.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function w5(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee(61501,{type:t})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xi._jsonSchemaVersion="firestore/querySnapshot/1.0",xi._jsonSchema={type:We("string",xi._jsonSchemaVersion),bundleSource:We("string","QuerySnapshot"),bundleName:We("string"),bundle:We("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E5(t){t=Ut(t,Oe);const e=Ut(t.firestore,rr),n=Jc(e);return t5(n,t._key).then(r=>kI(e,t,r))}function I5(t){t=Ut(t,Ki);const e=Ut(t.firestore,rr),n=Jc(e),r=new xm(e);return xI(t._query),n5(n,t._query).then(i=>new xi(e,r,t,i))}function zs(t,e,n){t=Ut(t,Oe);const r=Ut(t.firestore,rr),i=AI(t.converter,e,n),s=Zc(r);return nh(r,[_I(s,"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,en.none())])}function d_(t,e,n,...r){t=Ut(t,Oe);const i=Ut(t.firestore,rr),s=Zc(i);let o;return o=typeof(e=xe(e))=="string"||e instanceof Em?f5(s,"updateDoc",t._key,e,n,r):d5(s,"updateDoc",t._key,e),nh(i,[o.toMutation(t._key,en.exists(!0))])}function T5(t){return nh(Ut(t.firestore,rr),[new Zp(t._key,en.none())])}function f_(t,e){const n=Ut(t.firestore,rr),r=An(t),i=AI(t.converter,e),s=Zc(t.firestore);return nh(n,[_I(s,"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,en.exists(!1))]).then(()=>r)}function ld(t,...e){var c,p,m;t=xe(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||u_(e[r])||(n=e[r++]);const i={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(u_(e[r])){const g=e[r];e[r]=(c=g.next)==null?void 0:c.bind(g),e[r+1]=(p=g.error)==null?void 0:p.bind(g),e[r+2]=(m=g.complete)==null?void 0:m.bind(g)}let s,o,l;if(t instanceof Oe)o=Ut(t.firestore,rr),l=Bc(t._key.path),s={next:g=>{e[r]&&e[r](kI(o,t,g))},error:e[r+1],complete:e[r+2]};else{const g=Ut(t,Ki);o=Ut(g.firestore,rr),l=g._query;const I=new xm(o);s={next:C=>{e[r]&&e[r](new xi(o,I,g,C))},error:e[r+1],complete:e[r+2]},xI(t._query)}const u=Jc(o);return e5(u,l,i,s)}function nh(t,e){const n=Jc(t);return r5(n,e)}function kI(t,e,n){const r=n.docs.get(e._key),i=new xm(t);return new Si(t,i,e._key,r,new Xo(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){rR(co),Vn(new mn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new rr(new oR(r.getProvider("auth-internal")),new uR(o,r.getProvider("app-check-internal")),CR(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Zt(a_,l_,e),Zt(a_,l_,"esm2020")})();const PI="@firebase/installations",km="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RI=1e4,bI=`w:${km}`,NI="FIS_v2",S5="https://firebaseinstallations.googleapis.com/v1",x5=60*60*1e3,C5="installations",A5="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k5={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Oi=new zi(C5,A5,k5);function DI(t){return t instanceof vn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MI({projectId:t}){return`${S5}/projects/${t}/installations`}function VI(t){return{token:t.token,requestStatus:2,expiresIn:R5(t.expiresIn),creationTime:Date.now()}}async function OI(t,e){const r=(await e.json()).error;return Oi.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function LI({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function P5(t,{refreshToken:e}){const n=LI(t);return n.append("Authorization",b5(e)),n}async function jI(t){const e=await t();return e.status>=500&&e.status<600?t():e}function R5(t){return Number(t.replace("s","000"))}function b5(t){return`${NI} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N5({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=MI(t),i=LI(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:NI,appId:t.appId,sdkVersion:bI},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await jI(()=>fetch(r,l));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:VI(c.authToken)}}else throw await OI("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FI(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D5(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M5=/^[cdef][\w-]{21}$/,Ff="";function V5(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=O5(t);return M5.test(n)?n:Ff}catch{return Ff}}function O5(t){return D5(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rh(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UI=new Map;function zI(t,e){const n=rh(t);BI(n,e),L5(n,e)}function BI(t,e){const n=UI.get(t);if(n)for(const r of n)r(e)}function L5(t,e){const n=j5();n&&n.postMessage({key:t,fid:e}),F5()}let _i=null;function j5(){return!_i&&"BroadcastChannel"in self&&(_i=new BroadcastChannel("[Firebase] FID Change"),_i.onmessage=t=>{BI(t.data.key,t.data.fid)}),_i}function F5(){UI.size===0&&_i&&(_i.close(),_i=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U5="firebase-installations-database",z5=1,Li="firebase-installations-store";let ud=null;function Pm(){return ud||(ud=d1(U5,z5,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Li)}}})),ud}async function pc(t,e){const n=rh(t),i=(await Pm()).transaction(Li,"readwrite"),s=i.objectStore(Li),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&zI(t,e.fid),e}async function $I(t){const e=rh(t),r=(await Pm()).transaction(Li,"readwrite");await r.objectStore(Li).delete(e),await r.done}async function ih(t,e){const n=rh(t),i=(await Pm()).transaction(Li,"readwrite"),s=i.objectStore(Li),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&zI(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rm(t){let e;const n=await ih(t.appConfig,r=>{const i=B5(r),s=$5(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Ff?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function B5(t){const e=t||{fid:V5(),registrationStatus:0};return WI(e)}function $5(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Oi.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=W5(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:H5(t)}:{installationEntry:e}}async function W5(t,e){try{const n=await N5(t,e);return pc(t.appConfig,n)}catch(n){throw DI(n)&&n.customData.serverCode===409?await $I(t.appConfig):await pc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function H5(t){let e=await p_(t.appConfig);for(;e.registrationStatus===1;)await FI(100),e=await p_(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Rm(t);return r||n}return e}function p_(t){return ih(t,e=>{if(!e)throw Oi.create("installation-not-found");return WI(e)})}function WI(t){return q5(t)?{fid:t.fid,registrationStatus:0}:t}function q5(t){return t.registrationStatus===1&&t.registrationTime+RI<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K5({appConfig:t,heartbeatServiceProvider:e},n){const r=G5(t,n),i=P5(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:bI,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await jI(()=>fetch(r,l));if(u.ok){const c=await u.json();return VI(c)}else throw await OI("Generate Auth Token",u)}function G5(t,{fid:e}){return`${MI(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bm(t,e=!1){let n;const r=await ih(t.appConfig,s=>{if(!HI(s))throw Oi.create("not-registered");const o=s.authToken;if(!e&&J5(o))return s;if(o.requestStatus===1)return n=Q5(t,e),s;{if(!navigator.onLine)throw Oi.create("app-offline");const l=Z5(s);return n=Y5(t,l),l}});return n?await n:r.authToken}async function Q5(t,e){let n=await m_(t.appConfig);for(;n.authToken.requestStatus===1;)await FI(100),n=await m_(t.appConfig);const r=n.authToken;return r.requestStatus===0?bm(t,e):r}function m_(t){return ih(t,e=>{if(!HI(e))throw Oi.create("not-registered");const n=e.authToken;return eD(n)?{...e,authToken:{requestStatus:0}}:e})}async function Y5(t,e){try{const n=await K5(t,e),r={...e,authToken:n};return await pc(t.appConfig,r),n}catch(n){if(DI(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await $I(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await pc(t.appConfig,r)}throw n}}function HI(t){return t!==void 0&&t.registrationStatus===2}function J5(t){return t.requestStatus===2&&!X5(t)}function X5(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+x5}function Z5(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function eD(t){return t.requestStatus===1&&t.requestTime+RI<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tD(t){const e=t,{installationEntry:n,registrationPromise:r}=await Rm(e);return r?r.catch(console.error):bm(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nD(t,e=!1){const n=t;return await rD(n),(await bm(n,e)).token}async function rD(t){const{registrationPromise:e}=await Rm(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iD(t){if(!t||!t.options)throw cd("App Configuration");if(!t.name)throw cd("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw cd(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function cd(t){return Oi.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI="installations",sD="installations-internal",oD=t=>{const e=t.getProvider("app").getImmediate(),n=iD(e),r=Bi(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},aD=t=>{const e=t.getProvider("app").getImmediate(),n=Bi(e,qI).getImmediate();return{getId:()=>tD(n),getToken:i=>nD(n,i)}};function lD(){Vn(new mn(qI,oD,"PUBLIC")),Vn(new mn(sD,aD,"PRIVATE"))}lD();Zt(PI,km);Zt(PI,km,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mc="analytics",uD="firebase_id",cD="origin",hD=60*1e3,dD="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Nm="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et=new Mc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fD={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},zt=new zi("analytics","Analytics",fD);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pD(t){if(!t.startsWith(Nm)){const e=zt.create("invalid-gtag-resource",{gtagURL:t});return Et.warn(e.message),""}return t}function KI(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function mD(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function gD(t,e){const n=mD("firebase-js-sdk-policy",{createScriptURL:pD}),r=document.createElement("script"),i=`${Nm}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function yD(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function vD(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await KI(n)).find(c=>c.measurementId===i);u&&await e[u.appId]}}catch(l){Et.error(l)}t("config",i,s)}async function _D(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await KI(n);for(const u of o){const c=l.find(m=>m.measurementId===u),p=c&&e[c.appId];if(p)s.push(p);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Et.error(s)}}function wD(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[l,u]=o;await _D(t,e,n,l,u)}else if(s==="config"){const[l,u]=o;await vD(t,e,n,r,l,u)}else if(s==="consent"){const[l,u]=o;t("consent",l,u)}else if(s==="get"){const[l,u,c]=o;t("get",l,u,c)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){Et.error(l)}}return i}function ED(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=wD(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function ID(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Nm)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TD=30,SD=1e3;class xD{constructor(e={},n=SD){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const GI=new xD;function CD(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function AD(t){var o;const{appId:e,apiKey:n}=t,r={method:"GET",headers:CD(n)},i=dD.replace("{app-id}",e),s=await fetch(i,r);if(s.status!==200&&s.status!==304){let l="";try{const u=await s.json();(o=u.error)!=null&&o.message&&(l=u.error.message)}catch{}throw zt.create("config-fetch-failed",{httpStatus:s.status,responseMessage:l})}return s.json()}async function kD(t,e=GI,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw zt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw zt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new bD;return setTimeout(async()=>{l.abort()},hD),QI({appId:r,apiKey:i,measurementId:s},o,l,e)}async function QI(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=GI){var l;const{appId:s,measurementId:o}=t;try{await PD(r,e)}catch(u){if(o)return Et.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:s,measurementId:o};throw u}try{const u=await AD(t);return i.deleteThrottleMetadata(s),u}catch(u){const c=u;if(!RD(c)){if(i.deleteThrottleMetadata(s),o)return Et.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:s,measurementId:o};throw u}const p=Number((l=c==null?void 0:c.customData)==null?void 0:l.httpStatus)===503?jy(n,i.intervalMillis,TD):jy(n,i.intervalMillis),m={throttleEndTimeMillis:Date.now()+p,backoffCount:n+1};return i.setThrottleMetadata(s,m),Et.debug(`Calling attemptFetch again in ${p} millis`),QI(t,m,r,i)}}function PD(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(zt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function RD(t){if(!(t instanceof vn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class bD{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function ND(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o={...r,send_to:s};t("event",n,o)}}async function DD(t,e,n,r){if(r&&r.global){const i={};for(const s of Object.keys(n))i[`user_properties.${s}`]=n[s];return t("set",i),Promise.resolve()}else{const i=await e;t("config",i,{update:!0,user_properties:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MD(){if(l1())try{await u1()}catch(t){return Et.warn(zt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Et.warn(zt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function VD(t,e,n,r,i,s,o){const l=kD(t);l.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&Et.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>Et.error(g)),e.push(l);const u=MD().then(g=>{if(g)return r.getId()}),[c,p]=await Promise.all([l,u]);ID(s)||gD(s,c.measurementId),i("js",new Date);const m=(o==null?void 0:o.config)??{};return m[cD]="firebase",m.update=!0,p!=null&&(m[uD]=p),i("config",c.measurementId,m),c.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OD{constructor(e){this.app=e}_delete(){return delete Bs[this.app.options.appId],Promise.resolve()}}let Bs={},g_=[];const y_={};let hd="dataLayer",LD="gtag",v_,Dm,__=!1;function jD(){const t=[];if(a1()&&t.push("This is a browser extension environment."),yA()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=zt.create("invalid-analytics-context",{errorInfo:e});Et.warn(n.message)}}function FD(t,e,n){jD();const r=t.options.appId;if(!r)throw zt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Et.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw zt.create("no-api-key");if(Bs[r]!=null)throw zt.create("already-exists",{id:r});if(!__){yD(hd);const{wrappedGtag:s,gtagCore:o}=ED(Bs,g_,y_,hd,LD);Dm=s,v_=o,__=!0}return Bs[r]=VD(t,g_,y_,e,v_,hd,n),new OD(t)}function UD(t=p1()){t=xe(t);const e=Bi(t,mc);return e.isInitialized()?e.getImmediate():zD(t)}function zD(t,e={}){const n=Bi(t,mc);if(n.isInitialized()){const i=n.getImmediate();if(zr(e,n.getOptions()))return i;throw zt.create("already-initialized")}return n.initialize({options:e})}function BD(t,e,n){t=xe(t),DD(Dm,Bs[t.app.options.appId],e,n).catch(r=>Et.error(r))}function $D(t,e,n,r){t=xe(t),ND(Dm,Bs[t.app.options.appId],e,n,r).catch(i=>Et.error(i))}const w_="@firebase/analytics",E_="0.10.19";function WD(){Vn(new mn(mc,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return FD(r,i,n)},"PUBLIC")),Vn(new mn("analytics-internal",t,"PRIVATE")),Zt(w_,E_),Zt(w_,E_,"esm2020");function t(e){try{const n=e.getProvider(mc).getImmediate();return{logEvent:(r,i,s)=>$D(n,r,i,s),setUserProperties:(r,i)=>BD(n,r,i)}}catch(n){throw zt.create("interop-component-reg-failed",{reason:n})}}}WD();const YI={apiKey:"AIzaSyD2ersdQ6Itbf29wY6M40--vbjhyr3-_s8",authDomain:"habit-tracker-live-11405.firebaseapp.com",projectId:"habit-tracker-live-11405",storageBucket:"habit-tracker-live-11405.firebasestorage.app",messagingSenderId:"1077952110107",appId:"1:1077952110107:web:857e160ae8afbd9f7362be"},Mm=f1(YI),ji=tR(Mm),xt=a5(Mm,{experimentalForceLongPolling:!0});UD(Mm);console.log("✅ Firebase switch to NEW project:",YI.projectId);const HD=()=>{const{login:t}=Gi(),[e,n]=M.useState("login"),[r,i]=M.useState(""),[s,o]=M.useState(""),[l,u]=M.useState(""),[c,p]=M.useState(""),[m,g]=M.useState(""),[I,C]=M.useState(""),[P,b]=M.useState(""),[E,_]=M.useState(""),x=async w=>{w.preventDefault();try{let v=r;if(/^[+]?[0-9]{10,15}$/.test(r.trim())){console.log("Mobile number detected:",r.trim());const A=V(r.trim());if(A)console.log("Found email in localStorage:",A),v=A;else try{const k=Jo(xt,"users"),N=Lf(k,jf("mobile","==",r.trim())),S=await I5(N);if(console.log("Query results:",S.size,"documents found"),S.empty){alert("No account found with this mobile number");return}const Ue=S.docs[0].data();if(console.log("Found user data:",Ue),v=Ue.email,!v){alert("Account found but no email associated. Please contact support.");return}}catch(k){console.error("Firestore lookup failed:",k.message),alert("Cannot verify mobile number. Firestore is unavailable. Try logging in with email instead.");return}}await L2(ji,v,s)}catch(v){console.error("Login error:",v),alert(v.message||"Login failed")}},V=w=>{for(let v=0;v<localStorage.length;v++){const T=localStorage.key(v);if(T&&T.startsWith("mobile_")&&localStorage.getItem(T)===w)return T.substring(7)}return null},L=async w=>{if(w.preventDefault(),I!==P){alert("Passwords do not match");return}try{const T=(await O2(ji,m,I)).user;await B1(T,{displayName:l}),c&&(localStorage.setItem(`mobile_${m}`,c),console.log("Mobile saved to localStorage:",c));try{await zs(An(xt,"users",T.uid),{id:T.uid,name:l,email:m,mobile:c,hiddenSports:[],created_at:new Date().toISOString()}),console.log("Data saved to Firestore")}catch(A){console.warn("Firestore save failed (using localStorage fallback):",A.message)}}catch(v){console.error("Signup error:",v),alert(v.message||"Signup failed")}},U=w=>{w.preventDefault(),E.trim()&&(alert(`Password reset link sent to ${E}`),n("login"))};return e==="forgotPassword"?d.jsx("div",{className:"login-container",children:d.jsxs("div",{className:"login-card",children:[d.jsx("h2",{className:"login-title",children:"Reset Password"}),d.jsxs("form",{className:"form-group",onSubmit:U,children:[d.jsx("div",{className:"login-subtitle",children:"Enter your email address to receive a password reset link."}),d.jsx("input",{type:"email",className:"styled-input",placeholder:"Email ID",value:E,onChange:w=>_(w.target.value)}),d.jsxs("button",{type:"submit",className:"login-btn",style:{width:"100%",justifyContent:"center"},children:["Send Link ",d.jsx(Kh,{size:16})]})]}),d.jsx("div",{className:"switch-text",onClick:()=>n("login"),children:"Back to Login"})]})}):e==="signup"?d.jsx("div",{className:"login-container",children:d.jsxs("div",{className:"login-card",children:[d.jsx("h2",{className:"login-title",children:"Sign Up"}),d.jsxs("form",{className:"form-group",onSubmit:L,children:[d.jsx("input",{type:"text",className:"styled-input",placeholder:"Full Name",value:l,onChange:w=>u(w.target.value)}),d.jsx("input",{type:"tel",className:"styled-input",placeholder:"Mobile Number",value:c,onChange:w=>p(w.target.value)}),d.jsx("input",{type:"email",className:"styled-input",placeholder:"Email ID",value:m,onChange:w=>g(w.target.value)}),d.jsx("input",{type:"password",className:"styled-input",placeholder:"Password",value:I,onChange:w=>C(w.target.value)}),d.jsx("input",{type:"password",className:"styled-input",placeholder:"Confirm Password",value:P,onChange:w=>b(w.target.value)}),d.jsxs("button",{type:"submit",className:"create-account-btn",children:["Create Account ",d.jsx(Kh,{size:16})]})]}),d.jsx("div",{className:"already-have-account",onClick:()=>n("login"),children:"Already have an account? Sign In"})]})}):d.jsx("div",{className:"login-container",children:d.jsxs("div",{className:"login-card",children:[d.jsx("h2",{className:"login-title",children:"Login"}),d.jsxs("form",{className:"form-group",onSubmit:x,children:[d.jsx("input",{type:"text",className:"styled-input",placeholder:"Email/Mobile Number",value:r,onChange:w=>i(w.target.value)}),d.jsx("input",{type:"password",className:"styled-input",placeholder:"password",value:s,onChange:w=>o(w.target.value)}),d.jsx("div",{className:"forgot-password",onClick:()=>n("forgotPassword"),children:"Forgot Password?"}),d.jsxs("button",{type:"submit",className:"login-btn",children:["Login ",d.jsx(Kh,{size:16})]})]}),d.jsx("div",{className:"switch-text",onClick:()=>n("signup"),children:"Don't have account? sign up"})]})})},Yl={tennis:"https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&q=80",badminton:"https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&q=80",basketball:"https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&q=80",gym:"https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80",workout:"https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80",yoga:"https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80",volleyball:"https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&q=80",cricket:"https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80",baseball:"https://images.unsplash.com/photo-1508344928928-7165b67de128?auto=format&fit=crop&q=80",boxing:"https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&q=80",martialarts:"https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&q=80",pilates:"https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80",dance:"https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80",cycling:"https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80",zumba:"https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80"},gs=t=>t?t.toLowerCase().replace(/\b\w/g,e=>e.toUpperCase()):"",qD=t=>{const e=t.toLowerCase().replace(/[^a-z0-9]/g,"");if(Yl[e])return Yl[e];const n=Object.keys(Yl).find(i=>e.includes(i));if(n)return Yl[n];const r=e.length>0?e.charCodeAt(0):1;return`https://loremflickr.com/800/600/${e},sport/all?lock=${r}`},KD=[{id:"tennis",name:"Tennis"},{id:"badminton",name:"Badminton"},{id:"pickleball",name:"Pickleball"},{id:"basketball",name:"Basket Ball"}],GD=()=>{const{user:t}=Gi(),{activities:e,addActivity:n,deleteActivity:r,updateActivityImage:i}=r4(),s=lo(),[o,l]=M.useState(!1),[u,c]=M.useState(""),[p,m]=M.useState(null),[g,I]=M.useState(!1),[C,P]=M.useState(!1),[b,E]=M.useState(null),[_,x]=M.useState(""),V=M.useRef(null);M.useEffect(()=>{const G=re=>{V.current&&!V.current.contains(re.target)&&m(null)};return document.addEventListener("mousedown",G),()=>document.removeEventListener("mousedown",G)},[]);const L=G=>{s(`/activity/${encodeURIComponent(G.name)}`)},U=async G=>{G.preventDefault(),u.trim()&&(await n(u.trim()),c(""),I(!0),setTimeout(()=>{l(!1),I(!1)},500))},w=G=>{E(G),x(G.imgUrl||""),P(!0),m(null)},v=async()=>{b&&_&&(await i(b.id,_),P(!1),E(null),x(""))},T=async(G,re)=>{G.stopPropagation(),window.confirm(`Delete ${re.name}?`)&&(await r(re),m(null))},A=(t==null?void 0:t.hiddenSports)||[],N=[...KD.filter(G=>!A.includes(G.id)),...e],S=new Date,ye=S.getHours();let Ue="Good morning";ye>=12&&ye<17?Ue="Good afternoon":ye>=17&&(Ue="Good evening");const X=S.getDate(),st=S.toLocaleString("default",{month:"short"}),$=S.getFullYear(),te=`${(G=>{const re=["th","st","nd","rd"],De=G%100;return G+(re[(De-20)%10]||re[De]||re[0])})(X)} ${st} ${$}`;return d.jsxs("div",{className:"dashboard-container",children:[d.jsx("header",{className:"dashboard-header animate-fade-in",style:{marginBottom:"32px"},children:d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"end"},children:[d.jsxs("div",{children:[d.jsx("div",{style:{fontSize:"1.1rem",color:"var(--text-muted)",marginBottom:"4px",fontWeight:500},children:te}),d.jsxs("h1",{className:"greeting-text",style:{fontSize:"2rem",fontWeight:700,margin:0},children:[Ue,", ",d.jsx("span",{className:"text-gradient",children:(t==null?void 0:t.name)||"User"})]})]}),d.jsxs("button",{className:"btn btn-primary desktop-only",onClick:()=>l(!0),style:{display:window.innerWidth>768?"inline-flex":"none"},children:[d.jsx(lf,{size:20})," Add Activity"]})]})}),d.jsxs("div",{className:"section-title",style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"20px"},children:[d.jsx("h3",{style:{fontSize:"1.25rem",color:"white"},children:"Your Activities"}),d.jsx("span",{onClick:()=>l(!0),style:{color:"var(--primary-400)",cursor:"pointer",fontSize:"0.9rem",display:window.innerWidth<=768?"block":"none"},children:"+ Add New"})]}),d.jsxs("div",{className:"grid-responsive animate-slide-up",children:[N.map((G,re)=>d.jsxs("div",{className:"activity-card card",style:{position:"relative",padding:0,overflow:"hidden",cursor:"pointer",height:"200px",border:"1px solid var(--border-subtle)"},onClick:()=>L(G),children:[d.jsx("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundImage:`url(${qD(G.name)})`,backgroundSize:"cover",backgroundPosition:"center",zIndex:0}}),d.jsx("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",background:"linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2))",zIndex:1}}),d.jsx("div",{style:{position:"relative",zIndex:2,padding:"20px",height:"100%",display:"flex",flexDirection:"column",justifyContent:"flex-end"},children:d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[d.jsx("span",{style:{fontSize:"1.25rem",fontWeight:600,color:"white"},children:gs(G.name)}),d.jsx("div",{className:"icon-btn",onClick:De=>{De.stopPropagation(),m(p===G.id?null:G.id)},style:{color:"rgba(255,255,255,0.7)"},children:d.jsx(Jw,{size:18})})]})}),p===G.id&&d.jsxs("div",{style:{position:"absolute",top:"10px",right:"10px",background:"var(--slate-800)",border:"1px solid var(--border-subtle)",borderRadius:"8px",padding:"8px",zIndex:10,boxShadow:"0 4px 12px rgba(0,0,0,0.3)",width:"120px"},ref:V,className:"fade-in",children:[d.jsx("div",{onClick:De=>{De.stopPropagation(),w(G)},style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px",color:"var(--text-main)",fontSize:"0.85rem",cursor:"pointer",marginBottom:"4px"},children:d.jsx("span",{children:"🖼️ Edit Image"})}),d.jsxs("div",{onClick:De=>T(De,G),style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px",color:"#ef4444",fontSize:"0.85rem",cursor:"pointer"},children:[d.jsx(uf,{size:14})," Delete"]})]})]},G.id||re)),d.jsxs("div",{className:"card activity-card",onClick:()=>l(!0),style:{height:"200px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",border:"2px dashed var(--border-subtle)",background:"transparent",cursor:"pointer",color:"var(--text-muted)",gap:"12px"},children:[d.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"50%",background:"rgba(255,255,255,0.05)",display:"flex",alignItems:"center",justifyContent:"center"},children:d.jsx(lf,{size:20})}),d.jsx("span",{children:"Add New Activity"})]})]}),o&&d.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",background:"rgba(0,0,0,0.6)",backdropFilter:"blur(4px)",zIndex:1e3,display:"flex",alignItems:"center",justifyContent:"center",padding:"20px"},onClick:()=>l(!1),children:d.jsxs("div",{className:"card animate-scale-in",style:{width:"100%",maxWidth:"400px",background:"var(--slate-900)"},onClick:G=>G.stopPropagation(),children:[d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"20px"},children:[d.jsx("h3",{children:"New Activity"}),d.jsx(Ti,{size:20,onClick:()=>l(!1),style:{cursor:"pointer",color:"white"}})]}),d.jsxs("form",{onSubmit:U,children:[d.jsx("input",{autoFocus:!0,className:"input",placeholder:"Activity Name (e.g., Yoga)",value:u,onChange:G=>c(G.target.value),style:{marginBottom:"20px"}}),d.jsx("button",{type:"submit",className:"btn btn-primary",style:{width:"100%"},children:"Create Activity"})]})]})}),C&&d.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",background:"rgba(0,0,0,0.6)",backdropFilter:"blur(4px)",zIndex:1e3,display:"flex",alignItems:"center",justifyContent:"center",padding:"20px"},onClick:()=>P(!1),children:d.jsxs("div",{className:"card animate-scale-in",style:{width:"100%",maxWidth:"400px",background:"var(--slate-900)"},onClick:G=>G.stopPropagation(),children:[d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"20px"},children:[d.jsx("h3",{children:"Edit Image"}),d.jsx(Ti,{size:20,onClick:()=>P(!1),style:{cursor:"pointer",color:"white"}})]}),d.jsxs("div",{style:{marginBottom:"16px"},children:[d.jsx("img",{src:_||"https://via.placeholder.com/400x200?text=No+Image",alt:"Preview",style:{width:"100%",height:"150px",objectFit:"cover",borderRadius:"8px",marginBottom:"12px",border:"1px solid var(--border-subtle)"}}),d.jsx("input",{autoFocus:!0,className:"input",placeholder:"Paste new image URL...",value:_,onChange:G=>x(G.target.value)})]}),d.jsxs("div",{style:{display:"flex",gap:"10px"},children:[d.jsx("button",{onClick:()=>P(!1),className:"btn btn-secondary",style:{flex:1},children:"Cancel"}),d.jsx("button",{onClick:v,className:"btn btn-primary",style:{flex:1},children:"Save Image"})]})]})}),g&&d.jsx("div",{style:{position:"fixed",bottom:"90px",left:"50%",transform:"translateX(-50%)",background:"var(--accent-500)",color:"white",padding:"12px 24px",borderRadius:"50px",fontWeight:500,boxShadow:"0 10px 25px -5px rgba(16, 185, 129, 0.4)",animation:"fadeIn 0.3s ease-out",zIndex:2e3,display:"flex",alignItems:"center",gap:"8px"},children:d.jsx("span",{children:"✨ Activity Added!"})})]})},hs=[{id:1,title:"The Absent-Minded Professor",author:"Modern Tales",category:"Comedy",summary:"A professor forgets he's in class and starts cooking breakfast.",lesson:"Stay present and focused on what you're doing.",content:"Professor Jenkins walked into his lecture hall, set down his briefcase, and promptly pulled out a frying pan and eggs. The students watched in amazement as he cracked eggs into the pan before realizing he wasn't in his kitchen. The entire class erupted in laughter. From that day on, he always checked which room he entered!"},{id:2,title:"The Talking Parrot",author:"Comedy Classics",category:"Comedy",summary:"A parrot embarrasses its owner at a dinner party.",lesson:"Be careful what you say around others - they might repeat it!",content:"Mrs. Smith's parrot had picked up every complaint she'd ever made about her neighbors. At the dinner party with those same neighbors, the parrot cheerfully announced, 'Mrs. Johnson's casserole tastes like cardboard!' Mortified, Mrs. Smith learned to watch her words from that day forward."},{id:3,title:"The Wrong House",author:"Funny Stories",category:"Comedy",summary:"A man walks into the wrong house and makes himself at home.",lesson:"Always double-check before assuming.",content:"Tom came home tired, walked in, made a sandwich, and sat on the couch. Only when a stranger walked in did he realize he was in the wrong house - his neighbor's identical layout had confused him. After profuse apologies and shared laughter, Tom always checked the house number!"},{id:4,title:"The Elevator Mishap",author:"Office Tales",category:"Comedy",summary:"Colleagues get stuck in an elevator and reveal secrets.",lesson:"Honesty and communication prevent awkward situations.",content:"When five coworkers got stuck in an elevator for two hours, they started sharing secrets to pass time. By the time they were rescued, they'd learned Tom had a crush on Sarah, Sarah was leaving the company, and their boss wore a toupee. Monday morning was never the same!"},{id:5,title:"The GPS Disaster",author:"Travel Tales",category:"Comedy",summary:"Blind faith in GPS leads to an unexpected adventure.",lesson:"Technology is helpful but use common sense too.",content:"Following GPS directions blindly, the Johnson family ended up driving into a lake. Well, almost - they stopped just in time when their car's front wheels touched water. 'Recalculating,' said the GPS calmly. They decided to trust maps from then on!"},{id:10,title:"The Missing Diamond",author:"Detective Stories",category:"Crime",summary:"A diamond vanishes from a locked room.",lesson:"The simplest explanation is often correct.",content:"When Lady Crawford's diamond disappeared from her locked safe, the detective interrogated everyone. The butler, the maid, the gardener - all had alibis. Then the detective noticed Lady Crawford's cat playing with something shiny. The 'thief' was a curious feline who'd snuck in through the window!"},{id:11,title:"The Perfect Alibi",author:"Mystery Writers",category:"Crime",summary:"A suspect has a perfect alibi that's too good to be true.",lesson:"Truth always emerges; lies unravel.",content:"Mr. Black claimed he was at the movies when the robbery occurred, with ticket stubs and witnesses. But the detective noticed his shoes were muddy - and it had rained at the crime scene, not near the theater. Confronted with evidence, Mr. Black confessed. His 'perfect' alibi crumbled."},{id:12,title:"The Anonymous Tip",author:"Crime Chronicles",category:"Crime",summary:"An anonymous tip solves a cold case.",lesson:"Sometimes help comes from unexpected places.",content:"A five-year-old burglary case was suddenly solved when an anonymous letter arrived at the police station with details only the thief would know. The letter writer? The thief's guilty conscience after becoming a parent. He served his time and started a new life."},{id:20,title:"The Last Train",author:"Suspense Stories",category:"Thriller",summary:"A woman realizes someone is following her on an empty train.",lesson:"Trust your instincts and stay alert.",content:"Sarah was the only passenger in the last train car - or so she thought. A shadow moved behind her. Heart racing, she moved to the next car. The shadow followed. At the next stop, she ran to the conductor. It was just another passenger trying to return her dropped wallet!"},{id:21,title:"The Locked Room",author:"Suspense Masters",category:"Thriller",summary:"A person wakes up in a locked room with no memory.",lesson:"Stay calm and think clearly in crisis.",content:"Michael woke up in an unfamiliar room with no windows. Panic set in until he noticed a note: 'Surprise! Your surprise birthday party is outside. Find the key and come out!' His friends had gone too far with the surprise, but his analytical thinking got him out."},{id:30,title:"Coffee Shop Love",author:"Romance Tales",category:"Romance",summary:"Two strangers keep ordering each other's drinks by mistake.",lesson:"Sometimes mistakes lead to beautiful beginnings.",content:"Every Monday, Emma ordered a caramel latte and Jake ordered black coffee. For three weeks, the barista mixed up their orders. Instead of complaining, they started leaving notes on the cups. By week four, they were dating. Their wedding featured a coffee bar."},{id:31,title:"The Love Letter",author:"Classic Romance",category:"Romance",summary:"An old love letter is found and reunites lost lovers.",lesson:"True love is worth fighting for, even after time passes.",content:"While renovating her grandmother's house, Lisa found a love letter from 1960, never sent. She tracked down the writer, now 80, who had never married. He had loved her grandmother but thought she'd rejected him. Lisa reunited them - they married at 80 and 78."},{id:40,title:"The Tortoise and the Hare",author:"Aesop",category:"Classic",summary:"Slow and steady wins the race.",lesson:"Consistency beats talent when talent doesn't work hard.",content:"A hare mocked a tortoise for being slow. The tortoise challenged him to a race. The hare sprinted ahead and took a nap, confident he'd win. The tortoise kept going, passed the sleeping hare, and won. The hare learned that overconfidence leads to failure."},{id:41,title:"The Boy Who Cried Wolf",author:"Aesop",category:"Classic",summary:"A boy lies about a wolf until no one believes him.",lesson:"Honesty builds trust; lying destroys it.",content:"A shepherd boy repeatedly tricked villagers by crying 'Wolf!' for fun. They came running each time, only to find him laughing. When a real wolf appeared and he cried for help, no one came. He learned that lies have serious consequences."},{id:50,title:"The Hidden Temple",author:"Adventure Tales",category:"Adventure",summary:"Explorers discover a lost temple in the jungle.",lesson:"Preparation and teamwork overcome any obstacle.",content:"Dr. Martinez's team spent years searching for the Temple of the Sun. When they finally found it hidden behind a waterfall, they discovered ancient puzzles guarding the entrance. Working together, using their different skills, they solved each puzzle and uncovered historical treasures."},{id:51,title:"Mountain Rescue",author:"Survival Stories",category:"Adventure",summary:"A hiker gets lost but uses survival skills to endure.",lesson:"Knowledge and courage save lives.",content:"When Sarah got separated from her hiking group in a snowstorm, she remembered her training. She built a shelter, rationed her food, and signaled for help. After three days, rescuers found her safe. Her preparation had saved her life."},{id:60,title:"The Vanishing Paintings",author:"Mystery House",category:"Mystery",summary:"Valuable paintings disappear from a museum one by one.",lesson:"Patience and observation reveal hidden truths.",content:"Each week, a painting vanished from the museum despite heavy security. The detective noticed the cleaning lady worked nights and followed her. He discovered she wasn't stealing - she was the original artist, reclaiming her work sold without permission decades ago. They reached an agreement."},{id:61,title:"The Secret Library",author:"Mystery Tales",category:"Mystery",summary:"Students discover a hidden library with mysterious books.",lesson:"Curiosity leads to knowledge and discovery.",content:"Behind a bookshelf in the old school, three students found a secret library filled with journals from students who attended 100 years ago. They learned about history directly from those who lived it, and preserved the library for future generations to discover."},{id:70,title:"The Magic Paintbrush",author:"Fantasy Worlds",category:"Fantasy",summary:"A paintbrush brings whatever it paints to life.",lesson:"Great power requires great responsibility.",content:"Young Ming found a paintbrush that made his paintings real. At first, he painted toys and treats. But when he painted a dragon for fun, it caused chaos! Ming learned to use his gift wisely, painting helpful things like food for the hungry and homes for the homeless."},{id:71,title:"The Time Gardener",author:"Fantasy Chronicles",category:"Fantasy",summary:"A gardener can make plants grow through different time periods.",lesson:"Patience and nurturing create lasting beauty.",content:"Elena discovered she could speed up or slow down plant growth with her touch. Instead of growing everything instantly, she learned that slow, careful growth created stronger, more beautiful plants. She taught others that rushing natural processes often backfires."}],Jl=5,QD=()=>{const[t,e]=M.useState(null),[n,r]=M.useState("All"),[i,s]=M.useState(1),o=["All",...new Set(hs.map(C=>C.category))],l=n==="All"?hs:hs.filter(C=>C.category===n),u=Math.ceil(l.length/Jl),c=(i-1)*Jl,p=l.slice(c,c+Jl),m=C=>{r(C),s(1)},g=C=>{s(Math.max(1,Math.min(C,u))),window.scrollTo({top:0,behavior:"smooth"})},I=()=>{const C=[];let b=Math.max(1,i-Math.floor(2.5)),E=Math.min(u,b+5-1);E-b<4&&(b=Math.max(1,E-5+1));for(let _=b;_<=E;_++)C.push(d.jsx("button",{onClick:()=>g(_),style:{padding:"8px 12px",borderRadius:"8px",border:i===_?"2px solid #64ffda":"1px solid rgba(100, 255, 218, 0.3)",background:i===_?"rgba(100, 255, 218, 0.1)":"transparent",color:i===_?"#64ffda":"rgba(255, 255, 255, 0.7)",cursor:"pointer",fontSize:"14px",fontWeight:600,minWidth:"40px"},children:_},_));return C};return t?d.jsxs("div",{className:"page-container animate-fade-in",children:[d.jsx("button",{onClick:()=>e(null),style:{background:"rgba(100, 255, 218, 0.1)",border:"1px solid #64ffda",color:"#64ffda",padding:"10px 20px",borderRadius:"10px",cursor:"pointer",marginBottom:"20px",fontSize:"14px",fontWeight:600},children:"← Back to Stories"}),d.jsxs("div",{className:"glass",style:{padding:"30px"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"15px",marginBottom:"20px",paddingBottom:"20px",borderBottom:"2px solid rgba(100, 255, 218, 0.2)"},children:[t.category==="Romance"?d.jsx(Ku,{size:40,color:"#ff6b9d",fill:"#ff6b9d"}):d.jsx(Hu,{size:40,color:"#64ffda"}),d.jsxs("div",{children:[d.jsx("h1",{style:{fontSize:"28px",fontWeight:700,margin:"0 0 5px 0",background:t.category==="Romance"?"linear-gradient(135deg, #ff6b9d 0%, #c471ed 100%)":"linear-gradient(135deg, #64ffda 0%, #38b6ff 100%)",backgroundClip:"text",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:t.title}),d.jsxs("p",{style:{fontSize:"14px",color:"rgba(255, 255, 255, 0.6)",margin:0},children:[t.author," • ",t.category]})]})]}),d.jsxs("div",{style:{background:t.category==="Romance"?"rgba(255, 107, 157, 0.05)":"rgba(100, 255, 218, 0.05)",padding:"20px",borderRadius:"12px",borderLeft:`4px solid ${t.category==="Romance"?"#ff6b9d":"#64ffda"}`,marginBottom:"25px"},children:[d.jsx("h3",{style:{fontSize:"16px",color:t.category==="Romance"?"#ff6b9d":"#64ffda",marginTop:0},children:"Moral of the Story"}),d.jsx("p",{style:{fontSize:"15px",color:"rgba(255, 255, 255, 0.9)",margin:0,lineHeight:"1.6"},children:t.lesson})]}),d.jsx("div",{style:{fontSize:"16px",lineHeight:"1.8",color:"rgba(255, 255, 255, 0.85)",textAlign:"justify"},children:t.content})]})]}):d.jsxs("div",{className:"page-container animate-fade-in",children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"15px",marginBottom:"20px"},children:[d.jsx(Hu,{size:32,color:"#64ffda"}),d.jsx("h2",{style:{fontSize:"28px",fontWeight:700,margin:0,background:"linear-gradient(135deg, #64ffda 0%, #38b6ff 100%)",backgroundClip:"text",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"Story Library"})]}),d.jsxs("p",{style:{fontSize:"16px",color:"rgba(255, 255, 255, 0.7)",marginBottom:"20px"},children:[hs.length," stories across multiple genres"]}),d.jsx("div",{style:{display:"flex",gap:"10px",marginBottom:"25px",flexWrap:"wrap"},children:o.map(C=>d.jsxs("button",{onClick:()=>m(C),style:{padding:"8px 16px",borderRadius:"20px",border:n===C?"2px solid #64ffda":"1px solid rgba(100, 255, 218, 0.3)",background:n===C?"rgba(100, 255, 218, 0.1)":"transparent",color:n===C?"#64ffda":"rgba(255, 255, 255, 0.7)",cursor:"pointer",fontSize:"14px",fontWeight:600,transition:"all 0.2s ease"},children:[C," (",C==="All"?hs.length:hs.filter(P=>P.category===C).length,")"]},C))}),d.jsxs("p",{style:{fontSize:"14px",color:"rgba(255, 255, 255, 0.6)",marginBottom:"20px"},children:["Showing ",c+1,"-",Math.min(c+Jl,l.length)," of ",l.length," stories (Page ",i," of ",u,")"]}),d.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"15px",marginBottom:"30px"},children:p.map(C=>d.jsx("div",{className:"glass",style:{padding:"20px",cursor:"pointer",transition:"all 0.3s ease",border:`1px solid ${C.category==="Romance"?"rgba(255, 107, 157, 0.1)":"rgba(100, 255, 218, 0.1)"}`},onClick:()=>e(C),onMouseEnter:P=>{P.currentTarget.style.borderColor=C.category==="Romance"?"#ff6b9d":"#64ffda",P.currentTarget.style.transform="translateX(5px)"},onMouseLeave:P=>{P.currentTarget.style.borderColor=C.category==="Romance"?"rgba(255, 107, 157, 0.1)":"rgba(100, 255, 218, 0.1)",P.currentTarget.style.transform="translateX(0)"},children:d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[d.jsxs("div",{style:{flex:1},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"8px"},children:[d.jsx("h3",{style:{fontSize:"20px",fontWeight:600,color:C.category==="Romance"?"#ff6b9d":"#64ffda",margin:0},children:C.title}),C.category==="Romance"&&d.jsx(Ku,{size:18,color:"#ff6b9d",fill:"#ff6b9d"})]}),d.jsxs("p",{style:{fontSize:"13px",color:"rgba(255, 255, 255, 0.5)",margin:"0 0 10px 0"},children:[C.author," • ",C.category]}),d.jsx("p",{style:{fontSize:"15px",color:"rgba(255, 255, 255, 0.8)",margin:0,lineHeight:"1.5"},children:C.summary})]}),d.jsx(qu,{size:24,color:"rgba(255, 255, 255, 0.4)"})]})},C.id))}),u>1&&d.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",gap:"10px",marginTop:"30px",flexWrap:"wrap"},children:[d.jsxs("button",{onClick:()=>g(i-1),disabled:i===1,style:{padding:"8px 16px",borderRadius:"8px",border:"1px solid rgba(100, 255, 218, 0.3)",background:i===1?"rgba(255, 255, 255, 0.05)":"transparent",color:i===1?"rgba(255, 255, 255, 0.3)":"#64ffda",cursor:i===1?"not-allowed":"pointer",fontSize:"14px",fontWeight:600,display:"flex",alignItems:"center",gap:"5px"},children:[d.jsx(Yw,{size:16})," Previous"]}),I(),d.jsxs("button",{onClick:()=>g(i+1),disabled:i===u,style:{padding:"8px 16px",borderRadius:"8px",border:"1px solid rgba(100, 255, 218, 0.3)",background:i===u?"rgba(255, 255, 255, 0.05)":"transparent",color:i===u?"rgba(255, 255, 255, 0.3)":"#64ffda",cursor:i===u?"not-allowed":"pointer",fontSize:"14px",fontWeight:600,display:"flex",alignItems:"center",gap:"5px"},children:["Next ",d.jsx(qu,{size:16})]})]})]})},YD=()=>{const{user:t,setUser:e}=Gi(),n=lo(),r=M.useRef(null),[i,s]=M.useState(!1),[o,l]=M.useState(!1),[u,c]=M.useState(!1),[p,m]=M.useState(""),[g,I]=M.useState(""),[C,P]=M.useState(localStorage.getItem("profileImage")||null),[b,E]=M.useState(""),[_,x]=M.useState(""),[V,L]=M.useState("");t!=null&&t.name,t==null||t.mobile,t==null||t.email;const U=X=>{var $;const st=($=X.target.files)==null?void 0:$[0];if(st){const Y=new FileReader;Y.onload=te=>{var re;const G=(re=te.target)==null?void 0:re.result;P(G),localStorage.setItem("profileImage",G)},Y.readAsDataURL(st)}},w=()=>{P(null),localStorage.removeItem("profileImage")},v=()=>{m(S),l(!0)},T=async()=>{try{const X=p.trim(),st=ji.currentUser;st&&await B1(st,{displayName:X||"User"}),t!=null&&t.id&&await d_(An(xt,"users",t.id),{name:X||"User"});const $={...t,name:X||"User"};e($),localStorage.setItem("currentUser",JSON.stringify($)),console.log("✅ Name saved successfully:",X||"User"),l(!1)}catch(X){console.error("Error saving name:",X),alert("❌ Failed to save name: "+X.message),l(!1)}},A=()=>{I(ye),c(!0)},k=async()=>{if(g.trim())try{t!=null&&t.id&&await d_(An(xt,"users",t.id),{mobile:g.trim()});const X={...t,mobile:g.trim()};e(X),localStorage.setItem("currentUser",JSON.stringify(X)),localStorage.setItem("userMobile",g.trim()),localStorage.setItem(`mobile_${t.email}`,g.trim()),console.log("✅ Mobile saved successfully:",g.trim()),c(!1)}catch(X){console.error("Error saving mobile:",X),alert("❌ Failed to save mobile: "+X.message),c(!1)}else c(!1)},N=async()=>{if(!_||_!==V){alert("Passwords do not match or are empty.");return}if(!b){alert("Please enter your current password to confirm changes.");return}try{const X=ji.currentUser;if(X&&X.email){const st=Wi.credential(X.email,b);await V2(X,st),await F2(X,_),alert("Password updated successfully!"),s(!1),x(""),L(""),E("")}else alert("User session not found. Please log in again.")}catch(X){console.error("Password update error:",X),X.code==="auth/wrong-password"?alert("Incorrect current password."):alert(X.message||"Failed to update password")}},S=(t==null?void 0:t.name)||"User",ye=(t==null?void 0:t.mobile)||"",Ue=(t==null?void 0:t.email)||"";return d.jsxs("div",{className:"page-container animate-fade-in",children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:"30px"},children:[d.jsx("button",{onClick:()=>{i?s(!1):n("/")},style:{background:"none",border:"none",color:"white",cursor:"pointer",padding:"10px"},children:d.jsx(Qw,{size:24})}),d.jsx("h2",{style:{marginLeft:"10px",fontSize:"20px",fontWeight:600},children:i?"Change Password":"Profile"})]}),i?d.jsxs("div",{className:"glass animate-slide-up",style:{padding:"30px 20px",display:"flex",flexDirection:"column",gap:"20px"},children:[d.jsxs("div",{style:{textAlign:"center",marginBottom:"20px"},children:[d.jsx("div",{style:{background:"rgba(100, 255, 218, 0.1)",width:"60px",height:"60px",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",margin:"0 auto 15px auto"},children:d.jsx(by,{size:30,color:"#64ffda"})}),d.jsx("h3",{style:{fontSize:"18px",fontWeight:500},children:"Create New Password"}),d.jsx("p",{style:{fontSize:"14px",color:"rgba(255,255,255,0.6)"},children:"Your new password must be different from previous used passwords."})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{style:{fontSize:"14px",color:"rgba(255,255,255,0.7)",marginLeft:"5px"},children:"Current Password"}),d.jsx("input",{type:"password",style:{background:"rgba(0,0,0,0.3)",border:"1px solid rgba(255,255,255,0.1)",padding:"16px",borderRadius:"12px",color:"white",outline:"none",width:"100%"},placeholder:"Enter current password",value:b,onChange:X=>E(X.target.value)})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{style:{fontSize:"14px",color:"rgba(255,255,255,0.7)",marginLeft:"5px"},children:"New Password"}),d.jsx("input",{type:"password",style:{background:"rgba(0,0,0,0.3)",border:"1px solid rgba(255,255,255,0.1)",padding:"16px",borderRadius:"12px",color:"white",outline:"none",width:"100%"},placeholder:"Enter new password",value:_,onChange:X=>x(X.target.value)})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{style:{fontSize:"14px",color:"rgba(255,255,255,0.7)",marginLeft:"5px"},children:"Confirm Password"}),d.jsx("input",{type:"password",style:{background:"rgba(0,0,0,0.3)",border:"1px solid rgba(255,255,255,0.1)",padding:"16px",borderRadius:"12px",color:"white",outline:"none",width:"100%"},placeholder:"Confirm new password",value:V,onChange:X=>L(X.target.value)})]}),d.jsx("button",{onClick:N,style:{marginTop:"20px",background:"#64ffda",color:"#0c1a2c",border:"none",padding:"16px",borderRadius:"12px",fontSize:"16px",fontWeight:600,cursor:"pointer",width:"100%"},children:"Update Password"}),d.jsx("button",{onClick:()=>s(!1),style:{background:"transparent",color:"rgba(255,255,255,0.6)",border:"none",padding:"10px",fontSize:"14px",cursor:"pointer",marginTop:"5px"},children:"Cancel"})]}):d.jsxs(d.Fragment,{children:[d.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",marginBottom:"40px"},children:[d.jsxs("div",{style:{width:"120px",height:"120px",borderRadius:"50%",background:C?"transparent":"linear-gradient(135deg, #64ffda 0%, #38b6ff 100%)",display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"15px",position:"relative",boxShadow:"0 10px 40px rgba(0,0,0,0.4)",overflow:"hidden",border:"3px solid rgba(100, 255, 218, 0.2)"},children:[C?d.jsx("img",{src:C,alt:"Profile",style:{width:"100%",height:"100%",objectFit:"cover"}}):d.jsx(cf,{size:60,color:"#0c1a2c"}),d.jsx("input",{type:"file",ref:r,onChange:U,accept:"image/*",style:{display:"none"}}),d.jsx("div",{onClick:()=>{var X;return(X=r.current)==null?void 0:X.click()},style:{position:"absolute",bottom:"0",right:"0",backgroundColor:"var(--primary-600)",borderRadius:"50%",padding:"8px",border:"3px solid var(--bg-main)",cursor:"pointer",transition:"all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",zIndex:10},className:"hover:scale-110 active:scale-95",children:d.jsx(zC,{size:16,color:"white"})}),C&&d.jsx("div",{onClick:w,style:{position:"absolute",top:"0",right:"0",backgroundColor:"var(--slate-700)",borderRadius:"50%",padding:"6px",border:"3px solid var(--bg-main)",cursor:"pointer",transition:"all 0.2s ease",boxShadow:"0 2px 5px rgba(0,0,0,0.2)",zIndex:10},children:d.jsx(Ti,{size:12,color:"var(--slate-300)"})})]}),d.jsx("h3",{style:{fontSize:"24px",fontWeight:600,marginBottom:"5px"},children:S}),d.jsx("span",{style:{color:"rgba(255,255,255,0.5)",fontSize:"14px"},children:"Tap camera to change photo"})]}),d.jsxs("div",{className:"glass",style:{padding:"20px",display:"flex",flexDirection:"column",gap:"20px"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"15px",padding:"10px 0",borderBottom:"1px solid rgba(255,255,255,0.1)"},children:[d.jsx("div",{style:{padding:"10px",background:"rgba(255,255,255,0.05)",borderRadius:"12px"},children:d.jsx(cf,{size:20,color:"#64ffda"})}),d.jsxs("div",{style:{flex:1},children:[d.jsx("div",{style:{fontSize:"12px",color:"rgba(255,255,255,0.5)"},children:"Full Name"}),o?d.jsx("input",{type:"text",value:p,onChange:X=>m(X.target.value),style:{background:"rgba(100,255,218,0.1)",border:"1px solid #64ffda",borderRadius:"8px",padding:"8px",color:"white",fontSize:"16px",width:"100%",marginTop:"5px"},autoFocus:!0}):d.jsx("div",{style:{fontSize:"16px",fontWeight:500},children:S})]}),o?d.jsxs("div",{style:{display:"flex",gap:"8px"},children:[d.jsx("button",{onClick:T,style:{background:"#64ffda",border:"none",borderRadius:"6px",padding:"6px",cursor:"pointer"},children:d.jsx(Ry,{size:16,color:"#0c1a2c"})}),d.jsx("button",{onClick:()=>l(!1),style:{background:"rgba(255,107,107,0.3)",border:"none",borderRadius:"6px",padding:"6px",cursor:"pointer"},children:d.jsx(Ti,{size:16,color:"white"})})]}):d.jsx("button",{onClick:v,style:{background:"rgba(100,255,218,0.1)",border:"none",borderRadius:"6px",padding:"6px",cursor:"pointer"},children:d.jsx(af,{size:16,color:"#64ffda"})})]}),d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"15px",padding:"10px 0",borderBottom:"1px solid rgba(255,255,255,0.1)"},children:[d.jsx("div",{style:{padding:"10px",background:"rgba(255,255,255,0.05)",borderRadius:"12px"},children:d.jsx(GC,{size:20,color:"#64ffda"})}),d.jsxs("div",{style:{flex:1},children:[d.jsx("div",{style:{fontSize:"12px",color:"rgba(255,255,255,0.5)"},children:"Mobile Number"}),u?d.jsx("input",{type:"tel",value:g,onChange:X=>I(X.target.value),style:{background:"rgba(100,255,218,0.1)",border:"1px solid #64ffda",borderRadius:"8px",padding:"8px",color:"white",fontSize:"16px",width:"100%",marginTop:"5px"},autoFocus:!0}):d.jsx("div",{style:{fontSize:"16px",fontWeight:500},children:ye||"Not provided"})]}),u?d.jsxs("div",{style:{display:"flex",gap:"8px"},children:[d.jsx("button",{onClick:k,style:{background:"#64ffda",border:"none",borderRadius:"6px",padding:"6px",cursor:"pointer"},children:d.jsx(Ry,{size:16,color:"#0c1a2c"})}),d.jsx("button",{onClick:()=>c(!1),style:{background:"rgba(255,107,107,0.3)",border:"none",borderRadius:"6px",padding:"6px",cursor:"pointer"},children:d.jsx(Ti,{size:16,color:"white"})})]}):d.jsx("button",{onClick:A,style:{background:"rgba(100,255,218,0.1)",border:"none",borderRadius:"6px",padding:"6px",cursor:"pointer"},children:d.jsx(af,{size:16,color:"#64ffda"})})]}),d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"15px",padding:"10px 0"},children:[d.jsx("div",{style:{padding:"10px",background:"rgba(255,255,255,0.05)",borderRadius:"12px"},children:d.jsx(KC,{size:20,color:"#64ffda"})}),d.jsxs("div",{children:[d.jsx("div",{style:{fontSize:"12px",color:"rgba(255,255,255,0.5)"},children:"Email"}),d.jsx("div",{style:{fontSize:"16px",fontWeight:500},children:Ue||"Not provided"})]})]})]}),d.jsxs("div",{className:"glass",style:{marginTop:"20px",padding:"15px",display:"flex",alignItems:"center",justifyContent:"space-between",cursor:"pointer"},onClick:()=>s(!0),children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"15px"},children:[d.jsx("div",{style:{padding:"10px",background:"rgba(255,255,255,0.05)",borderRadius:"12px"},children:d.jsx(by,{size:20,color:"#64ffda"})}),d.jsx("span",{style:{fontSize:"16px",fontWeight:500},children:"Change Password"})]}),d.jsx(qu,{size:20,color:"rgba(255,255,255,0.5)"})]})]})]})},I_=[{title:"Keep Going!",message:"Every small step you take is building the person you want to become.",subtitle:"Stay consistent, stay motivated, and remember: you're doing amazing! ❤️",icon:Ku,color:"#ff6b9d"},{title:"You've Got This!",message:"Success is the sum of small efforts repeated day in and day out.",subtitle:"Don't give up now. Your future self will thank you! 💪",icon:Dy,color:"#64ffda"},{title:"Believe in Yourself!",message:"The only person you are destined to become is the person you decide to be.",subtitle:"Your determination today creates your reality tomorrow! ✨",icon:$l,color:"#feca57"},{title:"Progress Over Perfection!",message:"You don't have to be great to start, but you have to start to be great.",subtitle:"Every expert was once a beginner. Keep pushing forward! 🚀",icon:Ny,color:"#54a0ff"},{title:"Stay Strong!",message:"Difficult roads often lead to beautiful destinations.",subtitle:"The struggle you're in today is developing the strength you need for tomorrow! 💎",icon:My,color:"#ff9ff3"},{title:"You're Unstoppable!",message:"Success doesn't come from what you do occasionally. It comes from what you do consistently.",subtitle:"Your habits shape your future. Keep building! 🏆",icon:WC,color:"#ff6b6b"},{title:"Dream Big!",message:"The future belongs to those who believe in the beauty of their dreams.",subtitle:"Chase your dreams with courage and determination! 🌟",icon:$l,color:"#feca57"},{title:"Keep Pushing!",message:"It's not about perfect. It's about effort. And when you implement that effort every day, that's where transformation happens.",subtitle:"Your effort today is an investment in your tomorrow! 📈",icon:Qh,color:"#48dbfb"},{title:"Never Give Up!",message:"Fall seven times, stand up eight.",subtitle:"Resilience is your superpower. Use it! ⚡",icon:Qh,color:"#ff9f43"},{title:"You're Making Progress!",message:"Don't watch the clock; do what it does. Keep going.",subtitle:"Time + consistency = Success. You're on the right path! ⏰",icon:Gh,color:"#f368e0"},{title:"Embrace the Journey!",message:"The secret of getting ahead is getting started.",subtitle:"You've already begun. That's the hardest part! 🎯",icon:Dy,color:"#1dd1a1"},{title:"Stay Focused!",message:"Your limitation—it's only your imagination.",subtitle:"Break through mental barriers and achieve greatness! 🧠",icon:Gh,color:"#feca57"},{title:"You're Capable!",message:"Great things never come from comfort zones.",subtitle:"Embrace the challenge. You're stronger than you think! 💪",icon:My,color:"#5f27cd"},{title:"Shine Bright!",message:"Stars can't shine without darkness.",subtitle:"Your challenges are making you brilliant! ⭐",icon:$l,color:"#feca57"},{title:"One Day at a Time!",message:"Little by little, a little becomes a lot.",subtitle:"Small daily improvements lead to stunning results! 🌱",icon:Ny,color:"#10ac84"},{title:"Trust the Process!",message:"The only way to do great work is to love what you do.",subtitle:"Find joy in the journey, not just the destination! 😊",icon:JC,color:"#ff9f43"},{title:"You're Incredible!",message:"Success is not final, failure is not fatal: it is the courage to continue that counts.",subtitle:"Your courage defines you. Keep moving forward! 🦁",icon:UC,color:"#ff6b6b"},{title:"Make It Happen!",message:"Don't wait for opportunity. Create it.",subtitle:"You have the power to design your own destiny! 🎨",icon:Qh,color:"#2e86de"},{title:"Stay Positive!",message:"Positive thinking will let you do everything better than negative thinking will.",subtitle:"Your mindset determines your success! 🌈",icon:Gh,color:"#ff9ff3"},{title:"You're Amazing!",message:"Believe you can and you're halfway there.",subtitle:"Self-belief is your greatest asset. Use it wisely! 🌟",icon:$l,color:"#feca57"}],JD=()=>{const[t,e]=M.useState(0),[n,r]=M.useState(!1),i=()=>{r(!0),setTimeout(()=>{let u;do u=Math.floor(Math.random()*I_.length);while(u===t);e(u),r(!1)},300)},s=I_[t],o=s.icon||Ku,l=s.color||"#ff6b9d";return d.jsxs("div",{className:"page-container animate-fade-in",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"80vh",textAlign:"center",padding:"40px 20px",cursor:"pointer"},onClick:i,children:[d.jsx("div",{style:{animation:"heartbeat 1.5s ease-in-out infinite",marginBottom:"30px",transition:"transform 0.3s ease",transform:n?"scale(0.8)":"scale(1)"},children:d.jsx(o,{size:120,color:l,fill:l,style:{filter:`drop-shadow(0 0 20px ${l}80)`}})}),d.jsxs("div",{style:{transition:"opacity 0.3s ease",opacity:n?.3:1},children:[d.jsx("h1",{style:{fontSize:"32px",fontWeight:700,background:`linear-gradient(135deg, ${l} 0%, #ffffff 100%)`,backgroundClip:"text",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginBottom:"20px"},children:s.title}),d.jsx("p",{style:{fontSize:"18px",color:"rgba(255, 255, 255, 0.8)",maxWidth:"500px",lineHeight:"1.6",marginBottom:"15px"},children:s.message}),d.jsx("p",{style:{fontSize:"16px",color:"rgba(255, 255, 255, 0.6)",maxWidth:"450px",lineHeight:"1.6"},children:s.subtitle})]}),d.jsx("p",{style:{fontSize:"13px",color:"rgba(255, 255, 255, 0.4)",marginTop:"30px",fontStyle:"italic"},children:"Click anywhere for a new message ✨"}),d.jsx("style",{children:`
                    @keyframes heartbeat {
                        0%, 100% {
                            transform: scale(1);
                        }
                        25% {
                            transform: scale(1.1);
                        }
                        50% {
                            transform: scale(1);
                        }
                        75% {
                            transform: scale(1.15);
                        }
                    }
                `})]})},Xl=5,T_=[{id:1,title:"Saami Saami",artist:"Mounika Reddy",year:2021,language:"Telugu",youtubeId:"KeChg8J7wH0"},{id:2,title:"Butta Bomma",artist:"Armaan Malik",year:2020,language:"Telugu",youtubeId:"OTUXhz1ZhoY"},{id:3,title:"Inkem Inkem Kaavaale",artist:"Sid Sriram",year:2018,language:"Telugu",youtubeId:"KMjYNKED0U0"},{id:4,title:"Rowdy Baby",artist:"Dhanush, Dhee",year:2018,language:"Telugu",youtubeId:"x6Q7c9RyMzk"},{id:5,title:"Vachinde",artist:"Madhu Priya",year:2018,language:"Telugu",youtubeId:"NEnKGNJE7lk"},{id:6,title:"Ramuloo Ramulaa",artist:"Anurag Kulkarni",year:2020,language:"Telugu",youtubeId:"CZgcoYvuWF8"},{id:7,title:"Oo Antava",artist:"Indravathi Chauhan",year:2021,language:"Telugu",youtubeId:"0sfMlJEujBg"},{id:8,title:"Mind Block",artist:"Tanishk Bagchi",year:2019,language:"Telugu",youtubeId:"VCaAdWoBRPE"},{id:9,title:"Srivalli",artist:"Javed Ali",year:2021,language:"Telugu",youtubeId:"BddP6PYo2gs"},{id:10,title:"Rang De",artist:"Haricharan",year:2021,language:"Telugu",youtubeId:"w6HHcuadtT8"},{id:11,title:"Kesariya",artist:"Arijit Singh",year:2022,language:"Hindi",youtubeId:"zIlWzlW2lrY"},{id:12,title:"Chaleya",artist:"Arijit Singh & Shilpa Rao",year:2023,language:"Hindi",youtubeId:"HOmC1_aXh1k"},{id:13,title:"Tum Hi Ho",artist:"Arijit Singh",year:2017,language:"Hindi",youtubeId:"Umqb9KENgmk"},{id:14,title:"Apna Bana Le",artist:"Arijit Singh",year:2022,language:"Hindi",youtubeId:"qwhO_1KV6Pk"},{id:15,title:"Deva Deva",artist:"Arijit Singh & Jonita Gandhi",year:2022,language:"Hindi",youtubeId:"Z_vvEYbA6WA"},{id:16,title:"Vaathi Coming",artist:"Gana Balachandar",year:2020,language:"Malayalam",youtubeId:"KZ5pz4_zRPU"},{id:17,title:"Kannana Kanne",artist:"Sid Sriram",year:2020,language:"Malayalam",youtubeId:"NGAsdSrkIaI"},{id:18,title:"Marakkavillaye",artist:"Vineeth Sreenivasan",year:2021,language:"Malayalam",youtubeId:"9l6VUCGlZ8c"},{id:19,title:"Parayathe",artist:"Yazin Nizar",year:2022,language:"Malayalam",youtubeId:"BqU-JHO26gs"},{id:20,title:"Nenjinile",artist:"Srinisha Jayaseelan",year:2019,language:"Malayalam",youtubeId:"67BO_-xOW2c"},{id:21,title:"Hombisilu",artist:"Sonu Nigam",year:2018,language:"Kannada",youtubeId:"_1kpxFOOQPk"},{id:22,title:"Jogaiah Thambi",artist:"Armaan Malik",year:2019,language:"Kannada",youtubeId:"mJKPeTIVoAc"},{id:23,title:"Yeneno Yeneno",artist:"Vijay Prakash",year:2021,language:"Kannada",youtubeId:"4lB_TQ0GWCU"},{id:24,title:"Ee Bhoomi Aa Bhoomi",artist:"Anirudh Ravichander",year:2022,language:"Kannada",youtubeId:"vb3-kkFjz2M"},{id:25,title:"Saahore Baahubali",artist:"Daler Mehndi",year:2017,language:"Kannada",youtubeId:"jkl9EJ62w5A"},{id:26,title:"Kannad Gothilla",artist:"Nakash Aziz",year:2019,language:"Kannada",youtubeId:"nNrwwgaRbmw"},{id:27,title:"Ale Ale",artist:"Armaan Malik",year:2020,language:"Kannada",youtubeId:"sBGnr5l-KoI"},{id:28,title:"Ninna Danigaagi",artist:"Sonu Nigam",year:2021,language:"Kannada",youtubeId:"V8kbj7yRv8Q"},{id:29,title:"Blinding Lights",artist:"The Weeknd",year:2020,language:"English",youtubeId:"4NRXx6U8ABQ"},{id:30,title:"Shape of You",artist:"Ed Sheeran",year:2017,language:"English",youtubeId:"JGwWNGJdvx8"},{id:31,title:"Levitating",artist:"Dua Lipa",year:2020,language:"English",youtubeId:"TUVcZfQe-Kw"},{id:32,title:"Anti-Hero",artist:"Taylor Swift",year:2022,language:"English",youtubeId:"b1kbLwvqugk"},{id:33,title:"As It Was",artist:"Harry Styles",year:2022,language:"English",youtubeId:"H5v3kku4y6Q"},{id:34,title:"Believer",artist:"Imagine Dragons",year:2017,language:"English",youtubeId:"7wtfhZwyrcc"},{id:35,title:"High Hopes",artist:"Panic! At The Disco",year:2018,language:"English",youtubeId:"IPXIgEAGe4U"}],XD=()=>{const[t,e]=M.useState("All"),[n,r]=M.useState(""),[i,s]=M.useState(1),o=["All","Telugu","Hindi","Malayalam","Kannada","English"];let l=T_;t!=="All"&&(l=l.filter(I=>I.language===t)),n&&(l=l.filter(I=>I.title.toLowerCase().includes(n.toLowerCase())||I.artist.toLowerCase().includes(n.toLowerCase())));const u=Math.ceil(l.length/Xl),c=(i-1)*Xl,p=l.slice(c,c+Xl),m=I=>{e(I),s(1)},g=I=>{s(Math.max(1,Math.min(I,u))),window.scrollTo({top:0,behavior:"smooth"})};return d.jsxs("div",{className:"page-container animate-fade-in",children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"15px",marginBottom:"20px"},children:[d.jsx(Gu,{size:32,color:"#64ffda"}),d.jsx("h2",{style:{fontSize:"28px",fontWeight:700,margin:0,background:"linear-gradient(135deg, #64ffda 0%, #38b6ff 100%)",backgroundClip:"text",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"Music Library"})]}),d.jsxs("p",{style:{fontSize:"16px",color:"rgba(255, 255, 255, 0.7)",marginBottom:"25px"},children:[T_.length," curated songs • Telugu, Hindi, Malayalam, English"]}),d.jsx("div",{style:{marginBottom:"20px"},children:d.jsxs("div",{style:{display:"flex",alignItems:"center",background:"rgba(255, 255, 255, 0.05)",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"12px",padding:"12px 16px",gap:"10px"},children:[d.jsx(YC,{size:20,color:"rgba(255, 255, 255, 0.5)"}),d.jsx("input",{value:n,onChange:I=>{r(I.target.value),s(1)},placeholder:"Search songs or artists...",style:{background:"transparent",border:"none",color:"white",fontSize:"15px",outline:"none",width:"100%"}})]})}),d.jsxs("div",{style:{marginBottom:"25px"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"12px"},children:[d.jsx($C,{size:18,color:"#64ffda"}),d.jsx("span",{style:{fontSize:"15px",color:"#64ffda",fontWeight:700},children:"Language"})]}),d.jsx("div",{style:{display:"flex",gap:"10px",flexWrap:"wrap"},children:o.map(I=>d.jsx("button",{onClick:()=>m(I),style:{padding:"8px 18px",borderRadius:"12px",border:t===I?"2px solid #64ffda":"1px solid rgba(100, 255, 218, 0.3)",background:t===I?"linear-gradient(135deg, rgba(100, 255, 218, 0.2) 0%, rgba(56, 182, 255, 0.2) 100%)":"rgba(255, 255, 255, 0.05)",color:t===I?"#64ffda":"rgba(255, 255, 255, 0.7)",cursor:"pointer",fontSize:"14px",fontWeight:600,transition:"all 0.3s ease",boxShadow:t===I?"0 4px 12px rgba(100, 255, 218, 0.25)":"none"},onMouseEnter:C=>{t!==I&&(C.currentTarget.style.background="rgba(100, 255, 218, 0.1)",C.currentTarget.style.borderColor="#64ffda")},onMouseLeave:C=>{t!==I&&(C.currentTarget.style.background="rgba(255, 255, 255, 0.05)",C.currentTarget.style.borderColor="rgba(100, 255, 218, 0.3)")},children:I},I))})]}),d.jsxs("p",{style:{fontSize:"14px",color:"rgba(255, 255, 255, 0.6)",marginBottom:"20px"},children:["Showing ",c+1,"-",Math.min(c+Xl,l.length)," of ",l.length," songs (Page ",i," of ",u,")"]}),d.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"15px",marginBottom:"30px"},children:p.map(I=>d.jsxs("div",{className:"glass",style:{padding:"15px",transition:"all 0.3s ease",border:"1px solid rgba(100, 255, 218, 0.1)"},onMouseEnter:C=>{C.currentTarget.style.borderColor="#64ffda",C.currentTarget.style.transform="translateY(-3px)"},onMouseLeave:C=>{C.currentTarget.style.borderColor="rgba(100, 255, 218, 0.1)",C.currentTarget.style.transform="translateY(0)"},children:[d.jsx("div",{style:{width:"100%",height:"150px",borderRadius:"8px",background:`url(https://img.youtube.com/vi/${I.youtubeId}/mqdefault.jpg) center/cover`,marginBottom:"12px",display:"flex",alignItems:"center",justifyContent:"center"},children:d.jsx("a",{href:`https://www.youtube.com/watch?v=${I.youtubeId}`,target:"_blank",rel:"noopener noreferrer",style:{background:"rgba(100, 255, 218, 0.9)",borderRadius:"50%",padding:"12px",display:"flex",transition:"transform 0.2s ease"},onMouseEnter:C=>C.currentTarget.style.transform="scale(1.1)",onMouseLeave:C=>C.currentTarget.style.transform="scale(1)",children:d.jsx(QC,{size:24,color:"#0c1a2c",fill:"#0c1a2c"})})}),d.jsx("h3",{style:{fontSize:"16px",fontWeight:600,color:"#64ffda",margin:"0 0 5px 0",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:I.title}),d.jsx("p",{style:{fontSize:"14px",color:"rgba(255, 255, 255, 0.7)",margin:"0 0 8px 0"},children:I.artist}),d.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[d.jsx("span",{style:{fontSize:"11px",padding:"3px 8px",borderRadius:"10px",background:"rgba(100, 255, 218, 0.1)",color:"#64ffda"},children:I.genre}),d.jsx("span",{style:{fontSize:"11px",padding:"3px 8px",borderRadius:"10px",background:"rgba(255, 255, 255, 0.05)",color:"rgba(255, 255, 255, 0.6)"},children:I.year}),d.jsx("span",{style:{fontSize:"11px",padding:"3px 8px",borderRadius:"10px",background:"rgba(255, 255, 255, 0.05)",color:"rgba(255, 255, 255, 0.6)"},children:I.language})]})]},I.id))}),u>1&&d.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",gap:"10px",marginTop:"30px"},children:[d.jsxs("button",{onClick:()=>g(i-1),disabled:i===1,style:{padding:"8px 16px",borderRadius:"8px",border:"1px solid rgba(100, 255, 218, 0.3)",background:i===1?"rgba(255, 255, 255, 0.05)":"transparent",color:i===1?"rgba(255, 255, 255, 0.3)":"#64ffda",cursor:i===1?"not-allowed":"pointer",fontSize:"14px",fontWeight:600,display:"flex",alignItems:"center",gap:"5px"},children:[d.jsx(Yw,{size:16})," Previous"]}),d.jsxs("span",{style:{color:"#64ffda",fontSize:"14px",fontWeight:600},children:["Page ",i," of ",u]}),d.jsxs("button",{onClick:()=>g(i+1),disabled:i===u,style:{padding:"8px 16px",borderRadius:"8px",border:"1px solid rgba(100, 255, 218, 0.3)",background:i===u?"rgba(255, 255, 255, 0.05)":"transparent",color:i===u?"rgba(255, 255, 255, 0.3)":"#64ffda",cursor:i===u?"not-allowed":"pointer",fontSize:"14px",fontWeight:600,display:"flex",alignItems:"center",gap:"5px"},children:["Next ",d.jsx(qu,{size:16})]})]}),l.length===0&&d.jsxs("div",{style:{textAlign:"center",padding:"60px 20px",color:"rgba(255, 255, 255, 0.5)"},children:[d.jsx(Gu,{size:48,color:"rgba(255, 255, 255, 0.3)",style:{marginBottom:"15px"}}),d.jsx("p",{style:{fontSize:"16px"},children:"No songs found matching your filters"})]})]})},ZD=()=>(M.useEffect(()=>{const e=setTimeout(async()=>{const n=ji.currentUser;if(n)try{const r=An(xt,"users",n.uid),i=await E5(r);if(i.exists()){const s=i.data();(!s.id||!s.hasOwnProperty("hiddenSports"))&&(console.log("Migrating user data for:",n.uid),await zs(r,{id:n.uid,name:s.name||n.displayName||"User",email:s.email||n.email,mobile:s.mobile||"",hiddenSports:s.hiddenSports||[],created_at:s.created_at||new Date().toISOString()},{merge:!0}),console.log("User data migration completed"))}else console.log("Creating user document for:",n.uid),await zs(r,{id:n.uid,name:n.displayName||"User",email:n.email,mobile:"",hiddenSports:[],created_at:new Date().toISOString()})}catch(r){console.error("User data migration error:",r)}},1e3);return()=>clearTimeout(e)},[]),null),e4=()=>{var gl;const{activityName:t}=vC(),e=lo(),[n,r]=M.useState({}),[i,s]=M.useState(!1),[o,l]=M.useState(!1),[u,c]=M.useState(""),[p,m]=M.useState("week"),[g,I]=M.useState("5:00 am to 10:00 am, 4:00 pm to 6:00 pm"),[C,P]=M.useState("5"),[b,E]=M.useState("00"),[_,x]=M.useState("AM"),[V,L]=M.useState("10"),[U,w]=M.useState("00"),[v,T]=M.useState("AM"),[A,k]=M.useState("4"),[N,S]=M.useState("00"),[ye,Ue]=M.useState("PM"),[X,st]=M.useState("6"),[$,Y]=M.useState("00"),[te,G]=M.useState("PM"),[re,De]=M.useState(""),[ke,Mt]=M.useState(!1),[Je,St]=M.useState(""),[al,sh]=M.useState(null),[Qi,Yi]=M.useState(null),[ll,jn]=M.useState(!1),[go,ul]=M.useState(null),Ji=new Date().getFullYear(),yo=new Date().getMonth(),[sr,Xe]=M.useState(Ji),[Le,Xi]=M.useState(yo),[Vm,cl]=M.useState(0),[oh,Zi]=M.useState(0),ti=M.useRef(null),[Ht,ni]=M.useState("all"),[es,qt]=M.useState(""),[ri,ii]=M.useState(null),si=Array.from({length:54},(R,W)=>Ji-3+W),vo=["January","February","March","April","May","June","July","August","September","October","November","December"],Ze=((R,W)=>`${R}-${String(W+1).padStart(2,"0")}`)(sr,Le);M.useEffect(()=>{const R=localStorage.getItem(`activity_${t}_participantsByMonth`);R&&r(JSON.parse(R));const W=localStorage.getItem(`activity_${t}_timings`);W&&I(W)},[t]),M.useEffect(()=>{const R=()=>{Qi&&Yi(null)};return document.addEventListener("click",R),()=>document.removeEventListener("click",R)},[Qi]);const ts=(R,W)=>{const J={...n,[R]:W};r(J),localStorage.setItem(`activity_${t}_participantsByMonth`,JSON.stringify(J))},ns=R=>{let W=0;return Object.values(n).forEach(J=>{const ce=J.find(pe=>R.id&&pe.id?R.id===pe.id:pe.name.toLowerCase()===R.name.toLowerCase());ce&&ce.attendance&&(W+=Object.values(ce.attendance).filter(Boolean).length)}),W},rn=R=>{const W=ns(R),J=parseInt(R.classes)||0;return J>0?J-W:W},_o=(n[Ze]||[]).filter(R=>{const W=R.classes?rn(R):1,J=Object.keys(R.attendance||{}).some(ce=>ce.startsWith(Ze)&&R.attendance[ce]===!0);return!(parseInt(R.classes)>0&&W<=0&&!J)}),qe=[];Object.keys(n).forEach(R=>{R<Ze&&n[R].forEach(W=>{if((parseInt(W.classes)||0)>0){const ce=_o.some(et=>et.id===W.id||et.name.toLowerCase()===W.name.toLowerCase()),pe=qe.some(et=>et.id===W.id||et.name.toLowerCase()===W.name.toLowerCase());!ce&&!pe&&rn(W)>0&&qe.push({...W,attendance:{}})}})});const sn=[..._o,...qe];M.useEffect(()=>{if(!sn.length)return;const R=sn.filter(W=>W.classes||W.paymentDate||W.paidStatus||Object.keys(W.attendance||{}).length>0);R.length!==sn.length&&(console.log("Cleaning up incomplete participants..."),ts(Ze,R))},[sn.length,Ze]);const oi=(R,W)=>{if(!W)return"#";const J=encodeURIComponent(`${R} - ${t} Class Payment`),ce=encodeURIComponent(`Payment due/made for ${t} classes.`),pe=new Date(W),et=pe.toISOString().replace(/-|:|\.\d\d\d/g,""),Ce=pe.toISOString().replace(/-|:|\.\d\d\d/g,"");return`https://www.google.com/calendar/render?action=TEMPLATE&text=${J}&details=${ce}&dates=${et}/${Ce}`},ai=R=>{const W=sn.map(J=>J.id===R?{...J,paidStatus:!J.paidStatus}:J);ts(Ze,W)},ah=()=>{const R=`${C}:${b} ${_.toLowerCase()} to ${V}:${U} ${v.toLowerCase()}, ${A}:${N} ${ye.toLowerCase()} to ${X}:${$} ${te.toLowerCase()}`;I(R),localStorage.setItem(`activity_${t}_timings`,R),l(!1)},lh=()=>{c(""),De(""),Mt(!1),St(""),qt(""),s(!0)},or=()=>{if(qt(""),!u.trim()){qt("Name is required.");return}if(!re||parseInt(re)<0){qt("No. of Classes must be 0 or greater.");return}if(ke&&!Je){qt("Payment Date is required when status is Paid.");return}const R={...n},J={id:Date.now(),name:gs(u.trim()),classes:re,paidStatus:ke,paymentDate:Je,attendance:{}},ce=R[Ze]||[];R[Ze]=[...ce,J],r(R),localStorage.setItem(`activity_${t}_participantsByMonth`,JSON.stringify(R)),c(""),De(""),Mt(!1),St(""),s(!1)},uh=R=>{ii(R)},ch=()=>{if(!ri)return;const R=ri,W={...n};Object.keys(W).forEach(J=>{J>=Ze&&(W[J]=W[J].filter(ce=>ce.id!==R))}),r(W),localStorage.setItem(`activity_${t}_participantsByMonth`,JSON.stringify(W)),ii(null)},is=()=>{if(qt(""),!go)return;if(!u.trim()){qt("Name is required.");return}if(!re||parseInt(re)<0){qt("No. of Classes must be 0 or greater.");return}if(ke&&!Je){qt("Payment Date is required when status is Paid.");return}const R={...n};Object.keys(R).forEach(W=>{R[W]=R[W].map(J=>J.id===go.id?{...J,name:gs(u.trim()),classes:re,paidStatus:ke,paymentDate:Je}:J)}),r(R),localStorage.setItem(`activity_${t}_participantsByMonth`,JSON.stringify(R)),jn(!1),ul(null)},dl=R=>{ul(R),c(R.name),De(R.classes),Mt(R.paidStatus),St(R.paymentDate||""),qt(""),jn(!0),Yi(null)},fl=(R,W)=>{const J=sn.map(ce=>{if(ce.id===R){const pe={...ce.attendance};return pe[W]=!pe[W],{...ce,attendance:pe}}return ce});ts(Ze,J)},ss=R=>{const W=R.target.scrollLeft;cl(W),document.querySelectorAll(".calendar-scroll-wrapper").forEach(J=>{J!==R.target&&(J.scrollLeft=W)}),ti.current&&ti.current!==R.target&&(ti.current.scrollLeft=W)},li=()=>{const R=new Date(sr,Le,1),W=new Date(sr,Le+1,0),J=R.getDay(),ce=[];for(let pe=0;pe<J;pe++)ce.push(null);for(let pe=1;pe<=W.getDate();pe++)ce.push(new Date(sr,Le,pe));return ce},pl=()=>{const R=new Date;R.setHours(0,0,0,0);const W=R.getDay(),J=[];for(let ce=0;ce<7;ce++){const pe=new Date(R.getTime());pe.setDate(R.getDate()-W+ce),J.push(pe)}return J},_n=p==="week"?pl():li(),os=[...sn].sort((R,W)=>{const J=parseInt(R.classes)||0,ce=parseInt(W.classes)||0,pe=J>0?rn(R):1,et=ce>0?rn(W):1,Ce=J>0&&pe<=0,wn=ce>0&&et<=0;return Ce&&!wn?1:!Ce&&wn?-1:0}),wo=os.length,as=os.filter(R=>(parseInt(R.classes)||0)===0||rn(R)>0).length,Eo=wo-as,ml=os.filter(R=>{if(Ht==="all")return!0;const J=(parseInt(R.classes)||0)===0||rn(R)>0;return Ht==="active"?J:Ht==="completed"?!J:!0});return d.jsxs("div",{className:"activity-detail",children:[d.jsxs("div",{className:"mobile-frame",children:[d.jsxs("div",{className:"activity-header",children:[d.jsxs("button",{onClick:()=>e(-1),className:"back-btn",children:[d.jsx(Qw,{size:20}),"Back"]}),d.jsxs("div",{className:"activity-info",children:[d.jsx("h1",{children:gs(t)}),d.jsxs("div",{className:"timings-display",children:[d.jsxs("span",{children:["Timings: ",g]}),d.jsx("button",{onClick:()=>l(!0),className:"edit-timings-btn",children:d.jsx(BC,{size:14})})]})]})]}),d.jsxs("div",{className:"month-year-selector",children:[d.jsxs("div",{className:"selector-group",children:[d.jsx("label",{children:"Month:"}),d.jsx("select",{value:Le,onChange:R=>Xi(parseInt(R.target.value)),children:vo.map((R,W)=>d.jsx("option",{value:W,children:R},W))})]}),d.jsxs("div",{className:"selector-group",children:[d.jsx("label",{children:"Year:"}),d.jsx("select",{value:sr,onChange:R=>Xe(parseInt(R.target.value)),children:si.map(R=>d.jsx("option",{value:R,children:R},R))})]})]}),d.jsxs("div",{className:"activity-content-compact",children:[d.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px 16px",background:"rgba(0,0,0,0.2)",borderBottom:"1px solid var(--border-subtle)",fontSize:"0.9rem",overflowX:"auto",whiteSpace:"nowrap"},children:d.jsxs("div",{style:{display:"flex",gap:"15px"},children:[d.jsxs("span",{onClick:()=>ni("all"),style:{color:Ht==="all"?"var(--primary-400)":"var(--text-main)",cursor:"pointer",fontWeight:Ht==="all"?600:400},children:["Total Users: ",wo]}),d.jsx("span",{style:{color:"var(--border-subtle)"},children:"|"}),d.jsxs("span",{onClick:()=>ni("active"),style:{color:Ht==="active"?"var(--primary-400)":"var(--text-main)",cursor:"pointer",fontWeight:Ht==="active"?600:400},children:["Active: ",as]}),d.jsx("span",{style:{color:"var(--border-subtle)"},children:"|"}),d.jsxs("span",{onClick:()=>ni("completed"),style:{color:Ht==="completed"?"var(--primary-400)":"var(--text-main)",cursor:"pointer",fontWeight:Ht==="completed"?600:400},children:["Completed: ",Eo]})]})}),d.jsxs("div",{className:"compact-grid-header",children:[d.jsx("div",{className:"header-names",children:"Names"}),d.jsx("div",{className:"header-calendar",children:d.jsx("div",{className:"calendar-title",children:"Calendar"})}),d.jsx("div",{className:"header-total",children:d.jsxs("div",{className:"total-header-flex",children:[d.jsx("span",{children:"Total"}),d.jsxs("div",{className:"toggle-switch",children:[d.jsx("button",{className:p==="month"?"active":"",onClick:()=>{m("month"),setCurrentPage(1)},children:"Month"}),d.jsx("button",{className:p==="week"?"active":"",onClick:()=>{m("week"),setCurrentPage(1)},children:"Week"})]})]})})]}),ml.map((R,W)=>{const J=p==="week"?pl():_n,ce=parseInt(R.classes)||0,pe=rn(R),et=ce>0&&pe<=0;return d.jsxs("div",{className:`participant-row ${et?"completed-participant":""}`,children:[d.jsxs("div",{className:"participant-name",children:[d.jsxs("div",{className:"name-container",children:[d.jsx("span",{className:"name-text",children:gs(R.name)}),d.jsxs("div",{className:"inline-details",children:[d.jsx("button",{className:`status-badge ${R.paidStatus?"paid":"unpaid"}`,onClick:()=>ai(R.id),title:R.paidStatus?"Paid - Click to toggle":"Unpaid - Click to toggle",children:R.paidStatus?"Paid":"Unpaid"}),R.paymentDate&&d.jsx("a",{href:oi(R.name,R.paymentDate),target:"_blank",rel:"noreferrer",className:"date-badge",title:"Add to Google Calendar",children:(()=>{const[Ce,wn,ar]=R.paymentDate.split("-");return new Date(Ce,wn-1,ar).toLocaleDateString(void 0,{month:"short",day:"numeric"})})()})]})]}),d.jsxs("div",{className:"participant-actions-menu",children:[d.jsx("button",{onClick:Ce=>{Ce.stopPropagation(),Yi(Qi===R.id?null:R.id)},className:"action-menu-btn",title:"Options",children:d.jsx(Jw,{size:16})}),Qi===R.id&&d.jsxs("div",{className:"action-dropdown",onClick:Ce=>Ce.stopPropagation(),children:[d.jsxs("button",{onClick:()=>dl(R),children:[d.jsx(af,{size:14})," Edit Details"]}),d.jsxs("button",{onClick:()=>{Yi(null),uh(R.id)},className:"delete-action",children:[d.jsx(uf,{size:14})," Delete"]})]})]})]}),d.jsx("div",{className:"calendar-scroll-wrapper",onScroll:ss,children:d.jsxs("div",{className:"calendar-inner",children:[W===0&&d.jsxs("div",{className:"days-header-inline",children:[d.jsx("span",{children:"S"}),d.jsx("span",{children:"M"}),d.jsx("span",{children:"T"}),d.jsx("span",{children:"W"}),d.jsx("span",{children:"T"}),d.jsx("span",{children:"F"}),d.jsx("span",{children:"S"})]}),d.jsx("div",{className:"participant-calendar",children:J.map((Ce,wn)=>{if(!Ce)return d.jsx("div",{className:"checkbox-cell empty"},`empty-${wn}`);const ar=`${Ce.getFullYear()}-${String(Ce.getMonth()+1).padStart(2,"0")}-${String(Ce.getDate()).padStart(2,"0")}`,yl=R.attendance[ar]||!1,Io=R.paymentDate===ar,To=!R.classes||parseInt(R.classes)<=0;return d.jsxs("label",{className:`checkbox-cell ${Io?"payment-date-highlight":""} ${To?"disabled-cell":""}`,title:Io?"Payment Date":"",children:[d.jsx("span",{className:"date-num",children:Ce.getDate()}),d.jsx("input",{type:"checkbox",disabled:To,checked:yl,onChange:()=>fl(R.id,ar)})]},ar)})})]})}),d.jsx("div",{className:"participant-total",children:rn(R)})]},R.id)}),d.jsxs("div",{className:"master-scroll-container",children:[d.jsx("div",{className:"scroll-spacer-left"}),d.jsx("div",{className:"master-scrollbar",onScroll:ss,ref:ti,children:d.jsx("div",{style:{width:`${oh}px`,height:"1px"}})}),d.jsx("div",{className:"scroll-spacer-right"})]}),d.jsx("div",{className:"add-name-row",children:d.jsxs("button",{onClick:lh,className:"add-name-btn-compact",children:[d.jsx(lf,{size:16}),"Add Names"]})})]})]}),i&&d.jsx("div",{className:"modal-overlay",onClick:()=>s(!1),children:d.jsxs("div",{className:"modal-content",onClick:R=>R.stopPropagation(),children:[d.jsxs("div",{className:"modal-header",children:[d.jsx("h2",{children:"Add Participant"}),d.jsx("button",{onClick:()=>s(!1),className:"close-btn",children:d.jsx(Ti,{size:24})})]}),d.jsxs("div",{className:"modal-body",children:[es&&d.jsx("div",{className:"modal-error-text",style:{color:"var(--red-400)",marginBottom:"16px",fontSize:"0.9rem",padding:"8px 12px",background:"rgba(239, 68, 68, 0.1)",borderRadius:"6px",border:"1px solid rgba(239, 68, 68, 0.2)"},children:es}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Name"}),d.jsx("input",{type:"text",value:u,onChange:R=>c(R.target.value),placeholder:"Enter name",className:"modal-input",autoFocus:!0})]}),d.jsxs("div",{className:"form-row",children:[d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"No. of Classes"}),d.jsx("input",{type:"number",value:re,onChange:R=>De(R.target.value),placeholder:"0",className:"modal-input"})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Details"}),d.jsx("div",{className:"toggle-wrapper",onClick:()=>Mt(!ke),children:d.jsx("div",{className:`status-toggle ${ke?"active":""}`,children:ke?"Paid":"Unpaid"})})]})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Payment Date"}),d.jsxs("div",{className:"date-input-wrapper",children:[d.jsx("input",{type:"date",value:Je,onChange:R=>St(R.target.value),className:"modal-input"}),d.jsx("span",{className:"calendar-icon-indicator",children:"📅"})]})]})]}),d.jsxs("div",{className:"modal-footer",children:[d.jsx("button",{onClick:()=>s(!1),className:"cancel-btn",children:"Cancel"}),d.jsx("button",{onClick:or,className:"confirm-btn",children:"Add"})]})]})}),ll&&d.jsx("div",{className:"modal-overlay",onClick:()=>jn(!1),children:d.jsxs("div",{className:"modal-content",onClick:R=>R.stopPropagation(),children:[d.jsxs("div",{className:"modal-header",children:[d.jsx("h2",{children:"Edit Participant"}),d.jsx("button",{onClick:()=>jn(!1),className:"close-btn",children:d.jsx(Ti,{size:24})})]}),d.jsxs("div",{className:"modal-body",children:[es&&d.jsx("div",{className:"modal-error-text",style:{color:"var(--red-400)",marginBottom:"16px",fontSize:"0.9rem",padding:"8px 12px",background:"rgba(239, 68, 68, 0.1)",borderRadius:"6px",border:"1px solid rgba(239, 68, 68, 0.2)"},children:es}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Name"}),d.jsx("input",{type:"text",value:u,onChange:R=>c(R.target.value),placeholder:"Enter name",className:"modal-input"})]}),d.jsxs("div",{className:"form-row",children:[d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"No. of Classes"}),d.jsx("input",{type:"number",value:re,onChange:R=>De(R.target.value),placeholder:"0",className:"modal-input"})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Details"}),d.jsx("div",{className:"toggle-wrapper",onClick:()=>Mt(!ke),children:d.jsx("div",{className:`status-toggle ${ke?"active":""}`,children:ke?"Paid":"Unpaid"})})]})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Payment Date"}),d.jsxs("div",{className:"date-input-wrapper",children:[d.jsx("input",{type:"date",value:Je,onChange:R=>St(R.target.value),className:"modal-input"}),d.jsx("span",{className:"calendar-icon-indicator",children:"📅"})]})]})]}),d.jsxs("div",{className:"modal-footer",children:[d.jsx("button",{onClick:()=>jn(!1),className:"cancel-btn",children:"Cancel"}),d.jsx("button",{onClick:is,className:"confirm-btn",children:"Save"})]})]})}),o&&d.jsx("div",{className:"modal-overlay",onClick:()=>l(!1),children:d.jsxs("div",{className:"modal-content timings-modal",onClick:R=>R.stopPropagation(),children:[d.jsx("h3",{children:"Edit Activity Timings"}),d.jsxs("p",{className:"modal-description",children:["Set the schedule for ",t]}),d.jsxs("div",{className:"time-range-group",children:[d.jsx("label",{children:"First Session:"}),d.jsxs("div",{className:"time-pickers",children:[d.jsx("select",{value:C,onChange:R=>P(R.target.value),children:Array.from({length:12},(R,W)=>W+1).map(R=>d.jsx("option",{value:R,children:R},R))}),d.jsx("span",{children:":"}),d.jsx("select",{value:b,onChange:R=>E(R.target.value),children:["00","15","30","45"].map(R=>d.jsx("option",{value:R,children:R},R))}),d.jsxs("select",{value:_,onChange:R=>x(R.target.value),children:[d.jsx("option",{value:"AM",children:"AM"}),d.jsx("option",{value:"PM",children:"PM"})]}),d.jsx("span",{children:"to"}),d.jsx("select",{value:V,onChange:R=>L(R.target.value),children:Array.from({length:12},(R,W)=>W+1).map(R=>d.jsx("option",{value:R,children:R},R))}),d.jsx("span",{children:":"}),d.jsx("select",{value:U,onChange:R=>w(R.target.value),children:["00","15","30","45"].map(R=>d.jsx("option",{value:R,children:R},R))}),d.jsxs("select",{value:v,onChange:R=>T(R.target.value),children:[d.jsx("option",{value:"AM",children:"AM"}),d.jsx("option",{value:"PM",children:"PM"})]})]})]}),d.jsxs("div",{className:"time-range-group",children:[d.jsx("label",{children:"Second Session:"}),d.jsxs("div",{className:"time-pickers",children:[d.jsx("select",{value:A,onChange:R=>k(R.target.value),children:Array.from({length:12},(R,W)=>W+1).map(R=>d.jsx("option",{value:R,children:R},R))}),d.jsx("span",{children:":"}),d.jsx("select",{value:N,onChange:R=>S(R.target.value),children:["00","15","30","45"].map(R=>d.jsx("option",{value:R,children:R},R))}),d.jsxs("select",{value:ye,onChange:R=>Ue(R.target.value),children:[d.jsx("option",{value:"AM",children:"AM"}),d.jsx("option",{value:"PM",children:"PM"})]}),d.jsx("span",{children:"to"}),d.jsx("select",{value:X,onChange:R=>st(R.target.value),children:Array.from({length:12},(R,W)=>W+1).map(R=>d.jsx("option",{value:R,children:R},R))}),d.jsx("span",{children:":"}),d.jsx("select",{value:$,onChange:R=>Y(R.target.value),children:["00","15","30","45"].map(R=>d.jsx("option",{value:R,children:R},R))}),d.jsxs("select",{value:te,onChange:R=>G(R.target.value),children:[d.jsx("option",{value:"AM",children:"AM"}),d.jsx("option",{value:"PM",children:"PM"})]})]})]}),d.jsxs("div",{className:"modal-actions",children:[d.jsx("button",{onClick:()=>l(!1),className:"cancel-btn",children:"Cancel"}),d.jsx("button",{onClick:ah,className:"confirm-btn",children:"Save Timings"})]})]})}),ri&&d.jsx("div",{className:"modal-overlay",onClick:()=>ii(null),children:d.jsxs("div",{className:"modal-content delete-modal",onClick:R=>R.stopPropagation(),style:{maxWidth:"350px"},children:[d.jsx("div",{className:"modal-header",style:{borderBottom:"none",paddingBottom:"0"},children:d.jsxs("h2",{style:{color:"var(--text-main)",display:"flex",alignItems:"center",gap:"8px"},children:[d.jsx(uf,{size:20,color:"var(--red-400)"})," Delete User?"]})}),d.jsx("div",{className:"modal-body",style:{paddingTop:"16px"},children:d.jsxs("p",{style:{color:"var(--text-muted)",fontSize:"0.95rem",lineHeight:"1.5"},children:["Are you sure you want to permanently delete ",d.jsx("strong",{children:gs(((gl=sn.find(R=>R.id===ri))==null?void 0:gl.name)||"this person")})," from your tracking? This action cannot be undone."]})}),d.jsxs("div",{className:"modal-footer",style:{borderTop:"none",paddingTop:"8px",gap:"12px"},children:[d.jsx("button",{onClick:()=>ii(null),className:"cancel-btn",children:"Cancel"}),d.jsx("button",{onClick:ch,className:"confirm-btn",style:{background:"var(--red-500)"},children:"Delete"})]})]})})]})},t4=()=>{var s;const t=lo(),e=ao(),{user:n,logout:r}=Gi(),i=({icon:o,label:l,path:u,danger:c=!1,action:p})=>{const m=e.pathname===u;return d.jsxs("div",{onClick:()=>p?p():t(u),style:{display:"flex",alignItems:"center",gap:"12px",padding:"12px 16px",borderRadius:"var(--radius-lg)",cursor:"pointer",color:c?"#ef4444":m?"white":"var(--text-muted)",background:m?"var(--primary-600)":"transparent",transition:"all 0.2s ease",marginBottom:"4px"},onMouseEnter:g=>{m||(g.currentTarget.style.background="rgba(255,255,255,0.05)")},onMouseLeave:g=>{m||(g.currentTarget.style.background="transparent")},children:[d.jsx(o,{size:20}),d.jsx("span",{style:{fontWeight:500,fontSize:"0.95rem"},children:l})]})};return d.jsxs("aside",{style:{width:"260px",background:"var(--slate-900)",borderRight:"1px solid var(--border-subtle)",height:"100vh",display:"flex",flexDirection:"column",padding:"24px",position:"sticky",top:0},className:"desktop-sidebar",children:[d.jsxs("div",{style:{marginBottom:"40px",padding:"0 12px",display:"flex",alignItems:"center",gap:"8px"},children:[d.jsx("div",{style:{width:"32px",height:"32px",background:"var(--primary-500)",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center"},children:d.jsx(HC,{size:18,color:"white"})}),d.jsx("h2",{style:{fontSize:"1.25rem",color:"white"},children:"HabitFlow"})]}),d.jsxs("nav",{style:{flex:1},children:[d.jsx("div",{style:{fontSize:"0.75rem",textTransform:"uppercase",color:"var(--slate-500)",fontWeight:600,padding:"0 12px 12px"},children:"Menu"}),d.jsx(i,{icon:Xw,label:"Dashboard",path:"/"}),d.jsx(i,{icon:Hu,label:"Stories",path:"/tracker"}),d.jsx(i,{icon:Gu,label:"Music",path:"/music"}),d.jsx(i,{icon:Zw,label:"Inspiration",path:"/heart"})]}),d.jsxs("div",{style:{paddingBottom:"20px"},children:[d.jsx("div",{style:{margin:"0 0 16px 0",height:"1px",background:"var(--border-subtle)"}}),d.jsxs("div",{onClick:()=>t("/profile"),style:{display:"flex",alignItems:"center",gap:"12px",padding:"12px",borderRadius:"12px",cursor:"pointer",transition:"all 0.2s ease",background:e.pathname==="/profile"?"var(--primary-600)":"transparent",marginBottom:"8px"},onMouseEnter:o=>{e.pathname!=="/profile"&&(o.currentTarget.style.background="rgba(255,255,255,0.05)")},onMouseLeave:o=>{e.pathname!=="/profile"&&(o.currentTarget.style.background="transparent")},children:[d.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"50%",background:"var(--primary-800)",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:"bold",fontSize:"1.rem"},children:((s=n==null?void 0:n.name)==null?void 0:s[0])||"U"}),d.jsxs("div",{style:{overflow:"hidden",flex:1},children:[d.jsx("div",{style:{fontSize:"0.95rem",color:"white",fontWeight:600,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:(n==null?void 0:n.name)||"User"}),d.jsx("div",{style:{fontSize:"0.75rem",color:"var(--text-muted)"},children:"View Profile"})]})]}),d.jsx(i,{icon:qC,label:"Sign Out",path:"#",danger:!0,action:r})]})]})},n4=()=>{const t=lo(),e=ao(),{logout:n}=Gi(),[r,i]=M.useState(!1),s=M.useRef(null);M.useEffect(()=>{const u=c=>{s.current&&!s.current.contains(c.target)&&i(!1)};return document.addEventListener("mousedown",u),()=>document.removeEventListener("mousedown",u)},[]);const o={cursor:"pointer",padding:"8px",color:"var(--text-muted)",transition:"all 0.2s"},l={...o,color:"var(--primary-400)",transform:"translateY(-2px)"};return d.jsxs("div",{style:{position:"fixed",bottom:"20px",left:"50%",transform:"translateX(-50%)",width:"90%",maxWidth:"400px",background:"var(--glass-bg)",backdropFilter:"blur(12px)",borderRadius:"var(--radius-xl)",border:"1px solid var(--glass-border)",display:"flex",justifyContent:"space-around",padding:"12px 16px",alignItems:"center",boxShadow:"var(--glass-shadow)",zIndex:100},className:"mobile-nav",children:[d.jsx(Xw,{size:24,style:e.pathname==="/"?l:o,onClick:()=>t("/")}),d.jsx(Gu,{size:24,style:e.pathname==="/music"?l:o,onClick:()=>t("/music")}),d.jsx(Zw,{size:24,style:e.pathname==="/heart"?l:o,onClick:()=>t("/heart")}),d.jsx(Hu,{size:24,style:e.pathname==="/tracker"?l:o,onClick:()=>t("/tracker")}),d.jsxs("div",{style:{position:"relative"},ref:s,children:[r&&d.jsxs("div",{style:{position:"absolute",bottom:"50px",right:"-10px",width:"140px",background:"var(--slate-800)",border:"1px solid var(--border-subtle)",borderRadius:"var(--radius-lg)",zIndex:101,padding:"8px",display:"flex",flexDirection:"column",gap:"4px",boxShadow:"0 10px 25px -5px rgba(0, 0, 0, 0.5)",animation:"fadeIn 0.2s ease-out"},children:[d.jsx("div",{style:{padding:"10px",color:"var(--text-main)",cursor:"pointer",borderRadius:"4px",fontSize:"14px"},onClick:()=>{i(!1),t("/profile")},onMouseEnter:u=>u.target.style.background="rgba(255,255,255,0.05)",onMouseLeave:u=>u.target.style.background="transparent",children:"Profile"}),d.jsx("div",{style:{height:"1px",background:"var(--border-subtle)",margin:"2px 0"}}),d.jsx("div",{style:{padding:"10px",color:"var(--accent-400)",cursor:"pointer",borderRadius:"4px",fontSize:"14px"},onClick:()=>{i(!1),n()},onMouseEnter:u=>u.target.style.background="rgba(255,255,255,0.05)",onMouseLeave:u=>u.target.style.background="transparent",children:"Sign Out"})]}),d.jsx(cf,{size:24,style:r||e.pathname==="/profile"?l:o,onClick:()=>i(!r)})]})]})},JI=M.createContext(null),XI=M.createContext(null),Gi=()=>M.useContext(JI),r4=()=>M.useContext(XI),i4=({children:t})=>{const{user:e}=Gi();return ao().pathname==="/login"?d.jsx("div",{className:"full-screen-login",children:t}):e?d.jsxs(d.Fragment,{children:[d.jsx(t4,{}),d.jsx("main",{className:"main-content",children:t}),d.jsx(n4,{})]}):d.jsx(d.Fragment,{children:t})};function s4(){const[t,e]=M.useState(null),[n,r]=M.useState([]),[i,s]=M.useState([]),[o,l]=M.useState(!0);M.useEffect(()=>{const P=$2(ji,async b=>{if(b){const E={id:b.uid,name:b.displayName||"User",email:b.email,mobile:"Loading...",hiddenSports:[]};e(E),l(!1),console.log("🔑 User authenticated with ID:",b.uid);const _=An(xt,"users",b.uid),x=ld(_,V=>{if(V.exists()){const L=V.data();e({id:b.uid,name:L.name||b.displayName||"User",email:L.email||b.email,mobile:L.mobile||"",hiddenSports:L.hiddenSports||[]}),console.log("✅ User data synced from Firestore")}else console.warn("⚠️ User document not found in Firestore yet, using basic data"),e(E)},V=>{console.error("User snapshot error:",V.message);const L=localStorage.getItem(`mobile_${b.email}`);e({...E,mobile:L||"Loading..."})});E._unsubscribe=x}else e(E=>(E&&E._unsubscribe&&E._unsubscribe(),null)),l(!1)});return()=>P()},[]),M.useEffect(()=>{if(!(t!=null&&t.id)){r([]),s([]);return}const P=`activities_${t.id}`,b=localStorage.getItem(P);if(b)try{const L=JSON.parse(b);console.log("📦 Loaded",L.length,"activities from localStorage"),s(L)}catch(L){console.error("Error parsing localStorage activities:",L)}const E=Lf(Jo(xt,"habits"),jf("user_id","==",t.id)),_=ld(E,L=>{r(L.docs.map(U=>({id:U.id,...U.data()})))}),x=Lf(Jo(xt,"activities"),jf("user_id","==",t.id)),V=ld(x,L=>{const U=L.docs.map(w=>({id:w.id,...w.data()}));U.length>0&&(console.log("📋 Synced",U.length,"activities from Firestore"),s(U),localStorage.setItem(P,JSON.stringify(U)))},L=>{console.warn("⚠️ Firestore sync failed, using localStorage:",L.message)});return()=>{_(),V()}},[t==null?void 0:t.id]);const u=()=>{},c=async()=>{try{await W2(ji)}catch(P){console.error("Logout error:",P)}},p=async P=>{if(t)try{await f_(Jo(xt,"habits"),{...P,user_id:t.id,checks:{},created_at:new Date().toISOString()})}catch(b){console.error("Error adding habit:",b)}},m=async(P,b)=>{if(!t)return;const E=An(xt,"habits",P),_=n.find(V=>V.id===P);if(!_)return;const x={..._.checks};x[b]?delete x[b]:x[b]=!0;try{await zs(E,{checks:x},{merge:!0})}catch(V){console.error("Error toggling check:",V)}},g=async(P,b=null)=>{if(!t){console.error("❌ Cannot add activity: user not logged in");return}console.log("➕ Adding activity:",P,"for user ID:",t.id);let E;b&&b.trim()?E=b.trim():E=`https://loremflickr.com/800/600/${P.toLowerCase().replace(/[^a-z0-9\s]/g,"").trim().replace(/\s+/g,",")},sport/all`;try{console.log("💾 Saving to Firestore...");const _=await f_(Jo(xt,"activities"),{name:P,user_id:t.id,created_at:y5(),imgUrl:E});console.log("✅ Activity saved to Firestore! ID:",_.id);const x=`activities_${t.id}`,V={id:_.id,name:P,user_id:t.id,created_at:new Date().toISOString(),imgUrl:E},L=localStorage.getItem(x),U=L?JSON.parse(L):[];U.push(V),localStorage.setItem(x,JSON.stringify(U)),console.log("✅ Activity also backed up to localStorage")}catch(_){console.error("❌ Firestore save failed:",_.message),console.log("⚠️ Falling back to localStorage...");const x=`activities_${t.id}`,L={id:`activity_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,name:P,user_id:t.id,created_at:new Date().toISOString(),imgUrl:E};try{const U=localStorage.getItem(x),w=U?JSON.parse(U):[];w.push(L),localStorage.setItem(x,JSON.stringify(w)),s(w),console.log("✅ Activity saved to localStorage (Firestore unavailable)"),alert("⚠️ Activity saved locally. Firestore is unavailable: "+_.message)}catch(U){console.error("❌ Both Firestore and localStorage failed!"),alert("Failed to save activity: "+U.message)}}},I=async(P,b)=>{if(!t||!b)return;s(_=>_.map(x=>x.id===P?{...x,imgUrl:b}:x));const E=`activities_${t.id}`;try{const _=localStorage.getItem(E);if(_){const V=JSON.parse(_).map(L=>L.id===P?{...L,imgUrl:b}:L);localStorage.setItem(E,JSON.stringify(V))}}catch(_){console.error("Error updating localStorage image:",_)}try{const _=An(xt,"activities",P);await zs(_,{imgUrl:b},{merge:!0}),console.log("✅ Image updated in Firestore")}catch(_){console.error("Error updating image in Firestore:",_)}},C=async P=>{if(!t)return;if(["tennis","badminton","pickleball","basketball"].includes(P.id))try{const E=[...t.hiddenSports||[],P.id];await zs(An(xt,"users",t.id),{hiddenSports:E},{merge:!0}),e(_=>({..._,hiddenSports:E}))}catch(E){console.error("Error hiding activity:",E)}else{const E=`activities_${t.id}`;try{const _=localStorage.getItem(E);if(_){const V=JSON.parse(_).filter(L=>L.id!==P.id);localStorage.setItem(E,JSON.stringify(V)),s(V),console.log("✅ Activity deleted from localStorage")}}catch(_){console.error("Error deleting from localStorage:",_)}try{await T5(An(xt,"activities",P.id)),console.log("✅ Activity also deleted from Firestore")}catch(_){console.warn("⚠️ Firestore delete failed (activity still deleted locally):",_.message)}}};return o?d.jsx("div",{className:"page-container",style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",color:"white"},children:"Loading..."}):d.jsx(JI.Provider,{value:{user:t,setUser:e,login:u,logout:c},children:d.jsx(XI.Provider,{value:{habits:n,addHabit:p,toggleCheck:m,activities:i,addActivity:g,deleteActivity:C,updateActivityImage:I},children:d.jsx(LC,{children:d.jsx(o4,{})})})})}function o4(){const{user:t}=Gi();return t?d.jsxs(i4,{children:[d.jsx(ZD,{}),d.jsxs(MC,{children:[d.jsx(Fn,{path:"/login",element:d.jsx(Cy,{to:"/",replace:!0})}),d.jsx(Fn,{path:"/",element:d.jsx(GD,{})}),d.jsx(Fn,{path:"/activity/:activityName",element:d.jsx(e4,{})}),d.jsx(Fn,{path:"/tracker",element:d.jsx(QD,{})}),d.jsx(Fn,{path:"/music",element:d.jsx(XD,{})}),d.jsx(Fn,{path:"/profile",element:d.jsx(YD,{})}),d.jsx(Fn,{path:"/heart",element:d.jsx(JD,{})}),d.jsx(Fn,{path:"*",element:d.jsx(Cy,{to:"/",replace:!0})})]})]}):d.jsx(HD,{})}Ow(document.getElementById("root")).render(d.jsx(M.StrictMode,{children:d.jsx(s4,{})}));
