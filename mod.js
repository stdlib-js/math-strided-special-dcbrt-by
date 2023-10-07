// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function f(r){return"string"==typeof r}var l=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,y=String.prototype.replace,p=/e\+(\d)$/,h=/e-(\d)$/,g=/^(\d+)$/,m=/^(\d+)e/,w=/\.0$/,b=/\.0*e/,v=/(\..*[^0])0*e/;function d(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":l(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=y.call(n,v,"$1e"),n=y.call(n,b,"e"),n=y.call(n,w,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=y.call(n,p,"e+0$1"),n=y.call(n,h,"e-0$1"),r.alternate&&(n=y.call(n,g,"$1."),n=y.call(n,m,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):c.call(n)}function E(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function A(r,e,t){var n=e-r.length;return n<0?r:r=t?r+E(n):E(n)+r}var _=String.fromCharCode,T=isNaN,x=Array.isArray;function j(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function k(r){var e,t,n,o,a,l,c,s,y;if(!x(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(l="",c=1,s=0;s<r.length;s++)if(f(n=r[s]))l+=n;else{if(e=void 0!==n.precision,!(n=j(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,y=0;y<t.length;y++)switch(o=t.charAt(y)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,T(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,T(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!T(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=T(a)?String(n.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=d(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=A(n.arg,n.width,n.padRight)),l+=n.arg||"",c+=1}return l}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function L(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function I(r){var e,t,n,i;for(t=[],i=0,n=V.exec(r);n;)(e=r.slice(i,V.lastIndex-n[0].length)).length&&t.push(e),t.push(L(n)),i=V.lastIndex,n=V.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function R(r){return"string"==typeof r}function S(r){var e,t,n;if(!R(r))throw new TypeError(S("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=I(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return k.apply(null,t)}var B,C=Object.prototype,O=C.toString,F=C.__defineGetter__,M=C.__defineSetter__,U=C.__lookupGetter__,N=C.__lookupSetter__;B=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===O.call(r))throw new TypeError(S("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===O.call(t))throw new TypeError(S("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(U.call(r,e)||N.call(r,e)?(n=r.__proto__,r.__proto__=C,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&F&&F.call(r,e,t.get),a&&M&&M.call(r,e,t.set),r};var P=B;function Y(r,e,t){P(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function W(r){return"function"==typeof r.get&&"function"==typeof r.set}var G={complex128:function(r,e){return r.get(e)},complex64:function(r,e){return r.get(e)},default:function(r,e){return r.get(e)}};function $(r){var e=G[r];return"function"==typeof e?e:G.default}var H={complex128:function(r,e,t){r.set(t,e)},complex64:function(r,e,t){r.set(t,e)},default:function(r,e,t){r.set(t,e)}};function Z(r){var e=H[r];return"function"==typeof e?e:H.default}var X={float64:function(r,e){return r[e]},float32:function(r,e){return r[e]},int32:function(r,e){return r[e]},int16:function(r,e){return r[e]},int8:function(r,e){return r[e]},uint32:function(r,e){return r[e]},uint16:function(r,e){return r[e]},uint8:function(r,e){return r[e]},uint8c:function(r,e){return r[e]},generic:function(r,e){return r[e]},default:function(r,e){return r[e]}};function J(r){var e=X[r];return"function"==typeof e?e:X.default}var z={float64:function(r,e,t){r[e]=t},float32:function(r,e,t){r[e]=t},int32:function(r,e,t){r[e]=t},int16:function(r,e,t){r[e]=t},int8:function(r,e,t){r[e]=t},uint32:function(r,e,t){r[e]=t},uint16:function(r,e,t){r[e]=t},uint8:function(r,e,t){r[e]=t},uint8c:function(r,e,t){r[e]=t},generic:function(r,e,t){r[e]=t},default:function(r,e,t){r[e]=t}};function q(r){var e=z[r];return"function"==typeof e?e:z.default}var D="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function K(){return D&&"symbol"==typeof Symbol.toStringTag}var Q=Object.prototype.toString;var rr=Object.prototype.hasOwnProperty;function er(r,e){return null!=r&&rr.call(r,e)}var tr="function"==typeof Symbol?Symbol:void 0,nr="function"==typeof tr?tr.toStringTag:"";var ir=K()?function(r){var e,t,n;if(null==r)return Q.call(r);t=r[nr],e=er(r,nr);try{r[nr]=void 0}catch(e){return Q.call(r)}return n=Q.call(r),e?r[nr]=t:delete r[nr],n}:function(r){return Q.call(r)};var or=Array.isArray?Array.isArray:function(r){return"[object Array]"===ir(r)};function ar(r){return null!==r&&"object"==typeof r}function ur(r){return ar(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))}function fr(){return/^\s*function\s*([^(]*)/i}Y(ar,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(S("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!or(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(ar));var lr=/^\s*function\s*([^(]*)/i;function cr(r){var e,t,n;if(("Object"===(t=ir(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=lr.exec(n.toString()))return e[1]}return ur(r)?"Buffer":t}Y(fr,"REGEXP",lr);var sr={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"},yr="function"==typeof Float64Array;var pr="function"==typeof Float64Array?Float64Array:null;var hr,gr="function"==typeof Float64Array?Float64Array:void 0;hr=function(){var r,e,t;if("function"!=typeof pr)return!1;try{e=new pr([1,3.14,-3.14,NaN]),t=e,r=(yr&&t instanceof Float64Array||"[object Float64Array]"===ir(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?gr:function(){throw new Error("not implemented")};var mr=hr,wr="function"==typeof Float32Array;var br=Number.POSITIVE_INFINITY,vr="function"==typeof Float32Array?Float32Array:null;var dr,Er="function"==typeof Float32Array?Float32Array:void 0;dr=function(){var r,e,t;if("function"!=typeof vr)return!1;try{e=new vr([1,3.14,-3.14,5e40]),t=e,r=(wr&&t instanceof Float32Array||"[object Float32Array]"===ir(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===br}catch(e){r=!1}return r}()?Er:function(){throw new Error("not implemented")};var Ar=dr,_r="function"==typeof Uint32Array;var Tr="function"==typeof Uint32Array?Uint32Array:null;var xr,jr="function"==typeof Uint32Array?Uint32Array:void 0;xr=function(){var r,e,t;if("function"!=typeof Tr)return!1;try{e=new Tr(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(_r&&t instanceof Uint32Array||"[object Uint32Array]"===ir(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?jr:function(){throw new Error("not implemented")};var kr=xr,Vr="function"==typeof Int32Array;var Lr="function"==typeof Int32Array?Int32Array:null;var Ir,Rr="function"==typeof Int32Array?Int32Array:void 0;Ir=function(){var r,e,t;if("function"!=typeof Lr)return!1;try{e=new Lr([1,3.14,-3.14,2147483648]),t=e,r=(Vr&&t instanceof Int32Array||"[object Int32Array]"===ir(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-2147483648===e[3]}catch(e){r=!1}return r}()?Rr:function(){throw new Error("not implemented")};var Sr=Ir,Br="function"==typeof Uint16Array;var Cr="function"==typeof Uint16Array?Uint16Array:null;var Or,Fr="function"==typeof Uint16Array?Uint16Array:void 0;Or=function(){var r,e,t;if("function"!=typeof Cr)return!1;try{e=new Cr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(Br&&t instanceof Uint16Array||"[object Uint16Array]"===ir(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Fr:function(){throw new Error("not implemented")};var Mr=Or,Ur="function"==typeof Int16Array;var Nr="function"==typeof Int16Array?Int16Array:null;var Pr,Yr="function"==typeof Int16Array?Int16Array:void 0;Pr=function(){var r,e,t;if("function"!=typeof Nr)return!1;try{e=new Nr([1,3.14,-3.14,32768]),t=e,r=(Ur&&t instanceof Int16Array||"[object Int16Array]"===ir(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-32768===e[3]}catch(e){r=!1}return r}()?Yr:function(){throw new Error("not implemented")};var Wr=Pr,Gr="function"==typeof Uint8Array;var $r="function"==typeof Uint8Array?Uint8Array:null;var Hr,Zr="function"==typeof Uint8Array?Uint8Array:void 0;Hr=function(){var r,e,t;if("function"!=typeof $r)return!1;try{e=new $r(e=[1,3.14,-3.14,256,257]),t=e,r=(Gr&&t instanceof Uint8Array||"[object Uint8Array]"===ir(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Zr:function(){throw new Error("not implemented")};var Xr=Hr,Jr="function"==typeof Uint8ClampedArray;var zr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var qr,Dr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;qr=function(){var r,e,t;if("function"!=typeof zr)return!1;try{e=new zr([-1,0,1,3.14,4.99,255,256]),t=e,r=(Jr&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===ir(t))&&0===e[0]&&0===e[1]&&1===e[2]&&3===e[3]&&5===e[4]&&255===e[5]&&255===e[6]}catch(e){r=!1}return r}()?Dr:function(){throw new Error("not implemented")};var Kr=qr,Qr="function"==typeof Int8Array;var re="function"==typeof Int8Array?Int8Array:null;var ee,te="function"==typeof Int8Array?Int8Array:void 0;ee=function(){var r,e,t;if("function"!=typeof re)return!1;try{e=new re([1,3.14,-3.14,128]),t=e,r=(Qr&&t instanceof Int8Array||"[object Int8Array]"===ir(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-128===e[3]}catch(e){r=!1}return r}()?te:function(){throw new Error("not implemented")};var ne=ee;function ie(r){return"number"==typeof r}var oe=Number,ae=oe.prototype.toString;var ue=K();function fe(r){return"object"==typeof r&&(r instanceof oe||(ue?function(r){try{return ae.call(r),!0}catch(r){return!1}}(r):"[object Number]"===ir(r)))}function le(r){return ie(r)||fe(r)}Y(le,"isPrimitive",ie),Y(le,"isObject",fe);var ce=oe.NEGATIVE_INFINITY,se=Math.floor;function ye(r){return se(r)===r}function pe(r){return r<br&&r>ce&&ye(r)}function he(r){return ie(r)&&pe(r)}function ge(r){return fe(r)&&pe(r.valueOf())}function me(r){return he(r)||ge(r)}function we(r){return he(r)&&r>=0}function be(r){return ge(r)&&r.valueOf()>=0}function ve(r){return we(r)||be(r)}Y(me,"isPrimitive",he),Y(me,"isObject",ge),Y(ve,"isPrimitive",we),Y(ve,"isObject",be);function de(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&ye(r.length)&&r.length>=0&&r.length<=4294967295}function Ee(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&ye(r.length)&&r.length>=0&&r.length<=9007199254740991}var Ae="function"==typeof ArrayBuffer;function _e(r){return Ae&&r instanceof ArrayBuffer||"[object ArrayBuffer]"===ir(r)}function Te(r){return"object"==typeof r&&null!==r&&!or(r)}var xe=/./;function je(r){return"boolean"==typeof r}var ke=Boolean,Ve=Boolean.prototype.toString;var Le=K();function Ie(r){return"object"==typeof r&&(r instanceof ke||(Le?function(r){try{return Ve.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===ir(r)))}function Re(r){return je(r)||Ie(r)}function Se(){return new Function("return this;")()}Y(Re,"isPrimitive",je),Y(Re,"isObject",Ie);var Be="object"==typeof self?self:null,Ce="object"==typeof window?window:null,Oe="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Fe="object"==typeof Oe?Oe:null,Me="object"==typeof globalThis?globalThis:null;var Ue=function(r){if(arguments.length){if(!je(r))throw new TypeError(S("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Se()}if(Me)return Me;if(Be)return Be;if(Ce)return Ce;if(Fe)return Fe;throw new Error("unexpected error. Unable to resolve global object.")}(),Ne=Ue.document&&Ue.document.childNodes,Pe=Int8Array;var Ye="function"==typeof xe||"object"==typeof Pe||"function"==typeof Ne?function(r){return cr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?cr(r).toLowerCase():e};function We(r){return"function"===Ye(r)}function Ge(r,e){if(!(this instanceof Ge))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!ie(r))throw new TypeError(S("invalid argument. Real component must be a number. Value: `%s`.",r));if(!ie(e))throw new TypeError(S("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return P(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),P(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}Y(Ge,"BYTES_PER_ELEMENT",8),Y(Ge.prototype,"BYTES_PER_ELEMENT",8),Y(Ge.prototype,"byteLength",16),Y(Ge.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),Y(Ge.prototype,"toJSON",(function(){var r={type:"Complex128"};return r.re=this.re,r.im=this.im,r}));var $e="function"==typeof Math.fround?Math.fround:null,He=new Ar(1);var Ze="function"==typeof $e?$e:function(r){return He[0]=r,He[0]};function Xe(r,e){if(!(this instanceof Xe))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!ie(r))throw new TypeError(S("invalid argument. Real component must be a number. Value: `%s`.",r));if(!ie(e))throw new TypeError(S("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return P(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Ze(r)}),P(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Ze(e)}),this}function Je(r){return r instanceof Ge||r instanceof Xe||"object"==typeof r&&null!==r&&"number"==typeof r.re&&"number"==typeof r.im}function ze(r){return ye(r/2)}function qe(){return"function"==typeof tr&&"symbol"==typeof tr("foo")&&er(tr,"iterator")&&"symbol"==typeof tr.iterator}Y(Xe,"BYTES_PER_ELEMENT",4),Y(Xe.prototype,"BYTES_PER_ELEMENT",4),Y(Xe.prototype,"byteLength",8),Y(Xe.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),Y(Xe.prototype,"toJSON",(function(){var r={type:"Complex64"};return r.re=this.re,r.im=this.im,r}));var De=qe()?Symbol.iterator:null;function Ke(r,e,t){P(r,e,{configurable:!1,enumerable:!1,get:t})}function Qe(r){return r.re}function rt(r){return r.im}function et(r,e){return new Ar(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}function tt(r,e){return new mr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}function nt(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(de(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!Je(n))return new TypeError(S("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));e.push(Qe(n),rt(n))}return e}function it(r,e,t){var n,i,o,a;for(n=[],a=-1;!(i=r.next()).done;)if(a+=1,de(o=e.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Je(o))return new TypeError(S("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(Qe(o),rt(o))}return n}function ot(r,e){var t,n,i,o;for(t=e.length,o=0,i=0;i<t;i++){if(!Je(n=e[i]))return null;r[o]=Qe(n),r[o+1]=rt(n),o+=2}return r}var at=2*Ar.BYTES_PER_ELEMENT,ut=qe();function ft(r){return r instanceof yt||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function lt(r){return r===yt||"Complex128Array"===r.name}function ct(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===at}function st(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===2*at}function yt(){var r,e,t,n;if(e=arguments.length,!(this instanceof yt))return 0===e?new yt:1===e?new yt(arguments[0]):2===e?new yt(arguments[0],arguments[1]):new yt(arguments[0],arguments[1],arguments[2]);if(0===e)t=new Ar(0);else if(1===e)if(we(arguments[0]))t=new Ar(2*arguments[0]);else if(Ee(arguments[0]))if((n=(t=arguments[0]).length)&&or(t)&&Je(t[0])){if(null===(t=ot(new Ar(2*n),t))){if(!ze(n))throw new RangeError(S("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new Ar(arguments[0])}}else{if(ct(t))t=et(t,0);else if(st(t))t=tt(t,0);else if(!ze(n))throw new RangeError(S("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new Ar(t)}else if(_e(arguments[0])){if(!ye((t=arguments[0]).byteLength/at))throw new RangeError(S("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",at,t.byteLength));t=new Ar(t)}else{if(!Te(arguments[0]))throw new TypeError(S("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===ut)throw new TypeError(S("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!We(t[De]))throw new TypeError(S("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!We((t=t[De]()).next))throw new TypeError(S("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=nt(t))instanceof Error)throw t;t=new Ar(t)}else{if(!_e(t=arguments[0]))throw new TypeError(S("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!we(r=arguments[1]))throw new TypeError(S("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!ye(r/at))throw new RangeError(S("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",at,r));if(2===e){if(!ye((n=t.byteLength-r)/at))throw new RangeError(S("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",at,n));t=new Ar(t,r)}else{if(!we(n=arguments[2]))throw new TypeError(S("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*at>t.byteLength-r)throw new RangeError(S("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*at));t=new Ar(t,r,2*n)}}return Y(this,"_buffer",t),Y(this,"_length",t.length/2),this}function pt(r){return r.re}function ht(r){return r.im}function gt(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(de(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!Je(n))return new TypeError(S("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));e.push(pt(n),ht(n))}return e}function mt(r,e,t){var n,i,o,a;for(n=[],a=-1;!(i=r.next()).done;)if(a+=1,de(o=e.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Je(o))return new TypeError(S("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(pt(o),ht(o))}return n}function wt(r,e){var t,n,i,o;for(t=e.length,o=0,i=0;i<t;i++){if(!Je(n=e[i]))return null;r[o]=pt(n),r[o+1]=ht(n),o+=2}return r}Y(yt,"BYTES_PER_ELEMENT",at),Y(yt,"name","Complex64Array"),Y(yt,"from",(function(r){var e,t,n,i,o,a,u,f,l,c,s,y;if(!We(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!lt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!We(n=arguments[1]))throw new TypeError(S("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(e=arguments[2])}if(ft(r)){if(f=r.length,n){for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Je(c=n.call(e,r.get(s),s)))o[y]=Qe(c),o[y+1]=rt(c);else{if(!(de(c)&&c.length>=2))throw new TypeError(S("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(r)}if(Ee(r)){if(n){for(f=r.length,u=r.get&&r.set?$("default"):J("default"),s=0;s<f;s++)if(!Je(u(r,s))){l=!0;break}if(l){if(!ze(f))throw new RangeError(S("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,f));for(o=(i=new this(f/2))._buffer,s=0;s<f;s++)o[s]=n.call(e,u(r,s),s);return i}for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Je(c=n.call(e,u(r,s),s)))o[y]=Qe(c),o[y+1]=rt(c);else{if(!(de(c)&&c.length>=2))throw new TypeError(S("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(r)}if(Te(r)&&ut&&We(r[De])){if(!We((o=r[De]()).next))throw new TypeError(S("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r));if((a=n?it(o,n,e):nt(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,s=0;s<f;s++)o[s]=a[s];return i}throw new TypeError(S("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r))})),Y(yt,"of",(function(){var r,e;if(!We(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!lt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),Ke(yt.prototype,"buffer",(function(){return this._buffer.buffer})),Ke(yt.prototype,"byteLength",(function(){return this._buffer.byteLength})),Ke(yt.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),Y(yt.prototype,"BYTES_PER_ELEMENT",yt.BYTES_PER_ELEMENT),Y(yt.prototype,"copyWithin",(function(r,e){if(!ft(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),Y(yt.prototype,"entries",(function(){var r,e,t,n,i,o,a;if(!ft(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,o=-1,a=-2,Y(t={},"next",(function(){var e;if(o+=1,i||o>=n)return{done:!0};return e=new Xe(r[a+=2],r[a+1]),{value:[o,e],done:!1}})),Y(t,"return",(function(r){if(i=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),De&&Y(t,De,(function(){return e.entries()})),t})),Y(yt.prototype,"get",(function(r){var e;if(!ft(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!we(r))throw new TypeError(S("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));if(!(r>=this._length))return new Xe((e=this._buffer)[r*=2],e[r+1])})),Ke(yt.prototype,"length",(function(){return this._length})),Y(yt.prototype,"set",(function(r){var e,t,n,i,o,a,u,f,l;if(!ft(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!we(t=arguments[1]))throw new TypeError(S("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Je(r)){if(t>=this._length)throw new RangeError(S("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=Qe(r),void(n[t+1]=rt(r))}if(ft(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*at,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new Ar(e.length),f=0;f<e.length;f++)i[f]=e[f];e=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!Ee(r))throw new TypeError(S("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",r));for(a=r.length,f=0;f<a;f++)if(!Je(r[f])){o=!0;break}if(o){if(!ze(a))throw new RangeError(S("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*at,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new Ar(a),f=0;f<a;f++)i[f]=e[f];e=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=Qe(u),n[t+1]=rt(u),t+=2}}));var bt=2*mr.BYTES_PER_ELEMENT,vt=qe();function dt(r){return r instanceof Tt||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function Et(r){return r===Tt||"Complex64Array"===r.name}function At(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===bt/2}function _t(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===bt}function Tt(){var r,e,t,n;if(e=arguments.length,!(this instanceof Tt))return 0===e?new Tt:1===e?new Tt(arguments[0]):2===e?new Tt(arguments[0],arguments[1]):new Tt(arguments[0],arguments[1],arguments[2]);if(0===e)t=new mr(0);else if(1===e)if(we(arguments[0]))t=new mr(2*arguments[0]);else if(Ee(arguments[0]))if((n=(t=arguments[0]).length)&&or(t)&&Je(t[0])){if(null===(t=wt(new mr(2*n),t))){if(!ze(n))throw new RangeError(S("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new mr(arguments[0])}}else{if(At(t))t=et(t,0);else if(_t(t))t=tt(t,0);else if(!ze(n))throw new RangeError(S("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new mr(t)}else if(_e(arguments[0])){if(!ye((t=arguments[0]).byteLength/bt))throw new RangeError(S("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",bt,t.byteLength));t=new mr(t)}else{if(!Te(arguments[0]))throw new TypeError(S("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===vt)throw new TypeError(S("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!We(t[De]))throw new TypeError(S("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!We((t=t[De]()).next))throw new TypeError(S("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=gt(t))instanceof Error)throw t;t=new mr(t)}else{if(!_e(t=arguments[0]))throw new TypeError(S("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!we(r=arguments[1]))throw new TypeError(S("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!ye(r/bt))throw new RangeError(S("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",bt,r));if(2===e){if(!ye((n=t.byteLength-r)/bt))throw new RangeError(S("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",bt,n));t=new mr(t,r)}else{if(!we(n=arguments[2]))throw new TypeError(S("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*bt>t.byteLength-r)throw new RangeError(S("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*bt));t=new mr(t,r,2*n)}}return Y(this,"_buffer",t),Y(this,"_length",t.length/2),this}Y(Tt,"BYTES_PER_ELEMENT",bt),Y(Tt,"name","Complex128Array"),Y(Tt,"from",(function(r){var e,t,n,i,o,a,u,f,l,c,s,y;if(!We(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Et(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!We(n=arguments[1]))throw new TypeError(S("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(e=arguments[2])}if(dt(r)){if(f=r.length,n){for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Je(c=n.call(e,r.get(s),s)))o[y]=pt(c),o[y+1]=ht(c);else{if(!(de(c)&&c.length>=2))throw new TypeError(S("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(r)}if(Ee(r)){if(n){for(f=r.length,u=r.get&&r.set?$("default"):J("default"),s=0;s<f;s++)if(!Je(u(r,s))){l=!0;break}if(l){if(!ze(f))throw new RangeError(S("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",f));for(o=(i=new this(f/2))._buffer,s=0;s<f;s++)o[s]=n.call(e,u(r,s),s);return i}for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Je(c=n.call(e,u(r,s),s)))o[y]=pt(c),o[y+1]=ht(c);else{if(!(de(c)&&c.length>=2))throw new TypeError(S("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(r)}if(Te(r)&&vt&&We(r[De])){if(!We((o=r[De]()).next))throw new TypeError(S("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r));if((a=n?mt(o,n,e):gt(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,s=0;s<f;s++)o[s]=a[s];return i}throw new TypeError(S("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r))})),Y(Tt,"of",(function(){var r,e;if(!We(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Et(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),Ke(Tt.prototype,"buffer",(function(){return this._buffer.buffer})),Ke(Tt.prototype,"byteLength",(function(){return this._buffer.byteLength})),Ke(Tt.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),Y(Tt.prototype,"BYTES_PER_ELEMENT",Tt.BYTES_PER_ELEMENT),Y(Tt.prototype,"copyWithin",(function(r,e){if(!dt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),Y(Tt.prototype,"entries",(function(){var r,e,t,n,i,o,a;if(!dt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,o=-1,a=-2,Y(t={},"next",(function(){var e;if(o+=1,i||o>=n)return{done:!0};return e=new Ge(r[a+=2],r[a+1]),{value:[o,e],done:!1}})),Y(t,"return",(function(r){if(i=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),De&&Y(t,De,(function(){return e.entries()})),t})),Y(Tt.prototype,"get",(function(r){var e;if(!dt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!we(r))throw new TypeError(S("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));if(!(r>=this._length))return new Ge((e=this._buffer)[r*=2],e[r+1])})),Ke(Tt.prototype,"length",(function(){return this._length})),Y(Tt.prototype,"set",(function(r){var e,t,n,i,o,a,u,f,l;if(!dt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!we(t=arguments[1]))throw new TypeError(S("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Je(r)){if(t>=this._length)throw new RangeError(S("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=pt(r),void(n[t+1]=ht(r))}if(dt(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*bt,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new mr(e.length),f=0;f<e.length;f++)i[f]=e[f];e=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!Ee(r))throw new TypeError(S("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",r));for(a=r.length,f=0;f<a;f++)if(!Je(r[f])){o=!0;break}if(o){if(!ze(a))throw new RangeError(S("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*bt,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new mr(a),f=0;f<a;f++)i[f]=e[f];e=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=pt(u),n[t+1]=ht(u),t+=2}}));var xt=[mr,Ar,Sr,kr,Wr,Mr,ne,Xr,Kr,yt,Tt],jt=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"],kt=jt.length;function Vt(r){var e;if(or(r))return"generic";if(ur(r))return null;for(e=0;e<kt;e++)if(r instanceof xt[e])return jt[e];return sr[cr(r)]||null}function Lt(r,e,t,n,i,o,a,u){var f,l;return W(e)&&(f=$(Vt(e))),W(n)&&(l=Z(Vt(n))),f||l?function(r,e,t,n,i,o,a,u,f,l){var c,s,y,p;if(r<=0)return i;for(c=t<0?(1-r)*t:0,s=o<0?(1-r)*o:0,p=0;p<r;p++)void 0!==(y=f.call(l,n(e,c),p,[c,s],[e,i]))&&a(i,s,u(y)),c+=t,s+=o;return i}(r,e,t,f=f||J(Vt(e)),n,i,l=l||q(Vt(n)),o,a,u):function(r,e,t,n,i,o,a,u){var f,l,c,s;if(r<=0)return n;for(f=t<0?(1-r)*t:0,l=i<0?(1-r)*i:0,s=0;s<r;s++)void 0!==(c=a.call(u,e[f],s,[f,l],[e,n]))&&(n[l]=o(c)),f+=t,l+=i;return n}(r,e,t,n,i,o,a,u)}function It(r,e,t,n,i,o,a,u,f,l){var c,s;return W(e)&&(c=$(Vt(e))),W(i)&&(s=Z(Vt(i))),c||s?function(r,e,t,n,i,o,a,u,f,l,c,s){var y,p,h,g;if(r<=0)return o;for(y=n,p=u,g=0;g<r;g++)void 0!==(h=c.call(s,i(e,y),g,[y,p],[e,o]))&&f(o,p,l(h)),y+=t,p+=a;return o}(r,e,t,n,c=c||J(Vt(e)),i,o,a,s=s||q(Vt(i)),u,f,l):function(r,e,t,n,i,o,a,u,f,l){var c,s,y,p;if(r<=0)return i;for(c=n,s=a,p=0;p<r;p++)void 0!==(y=f.call(l,e[c],p,[c,s],[e,i]))&&(i[s]=u(y)),c+=t,s+=o;return i}(r,e,t,n,i,o,a,u,f,l)}Y(Lt,"ndarray",It);var Rt,St={uint16:Mr,uint8:Xr};(Rt=new St.uint16(1))[0]=4660;var Bt=52===new St.uint8(Rt.buffer)[0],Ct=!0===Bt?1:0,Ot=new mr(1),Ft=new kr(Ot.buffer);function Mt(r){return Ot[0]=r,Ft[Ct]}var Ut,Nt,Pt=!0===Bt?1:0,Yt=new mr(1),Wt=new kr(Yt.buffer);!0===Bt?(Ut=1,Nt=0):(Ut=0,Nt=1);var Gt,$t,Ht={HIGH:Ut,LOW:Nt},Zt=new mr(1),Xt=new kr(Zt.buffer),Jt=Ht.HIGH,zt=Ht.LOW;function qt(r,e){return Xt[Jt]=r,Xt[zt]=e,Zt[0]}!0===Bt?(Gt=1,$t=0):(Gt=0,$t=1);var Dt={HIGH:Gt,LOW:$t},Kt=new mr(1),Qt=new kr(Kt.buffer),rn=Dt.HIGH,en=Dt.LOW;function tn(r,e,t,n){return Kt[0]=r,e[n]=Qt[rn],e[n+t]=Qt[en],e}function nn(r){return tn(r,[0,0],1,0)}Y(nn,"assign",tn);var on=Mt(22250738585072014e-324),an=[0,0];function un(r){var e,t,n,i;return 0===r||function(r){return r!=r}(r)||function(r){return r===br||r===ce}(r)?r:(e=(2147483648&(t=Mt(r)>>>0))>>>0,i=(t&=2147483647)<on?qt(e|696219795+(((2147483647&Mt(i=0x40000000000000*r))>>>0)/3>>>0)>>>0,0):function(r,e){return Yt[0]=r,Wt[Pt]=e>>>0,Yt[0]}(i=0,e|715094163+(t/3>>>0)>>>0),i*=function(r){return 0===r?1.87595182427177:1.87595182427177+r*(r*(1.6214297201053545+r*(.14599619288661245*r-.758397934778766))-1.8849797954337717)}(n=i*i*(i/r)),nn.assign(i,an,1,0),2147483648&an[1]?(an[0]+=1,an[1]&=2147483647):an[1]|=2147483648,i=qt(4294967295&an[0],3221225472&an[1]),i+=i*(n=((n=r/(i*i))-i)/(i+i+n)))}function fn(r,e,t,n,i,o,a){return Lt(r,e,t,n,i,un,o,a)}function ln(r,e,t,n,i,o,a,u,f){return It(r,e,t,n,i,o,a,un,u,f)}Y(fn,"ndarray",ln);export{fn as default,ln as ndarray};
//# sourceMappingURL=mod.js.map
