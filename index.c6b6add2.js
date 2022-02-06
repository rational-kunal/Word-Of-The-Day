const n="div.quick-def-box div.word-header div.word-and-pronunciation h1",e="div.quick-def-box div.word-attributes span.main-attr",t="div.quick-def-box div.word-attributes span.word-syllables",r="div.wod-article-container div.wod-definition-container p",a="div.wod-article-container div.wod-definition-container div.wotd-examples div.left-content-box p",i=async()=>{try{return await(async()=>{const i=await fetch("https://www.merriam-webster.com/word-of-the-day"),o=await i.text();let u=(new DOMParser).parseFromString(o,"text/html");const s=n=>u.querySelector(n).innerHTML;return{word:s(n),attribute:s(e),syllables:s(t),meaning:s(r),example:s(a),date:(new Date).toDateString()}})()}catch{return}},o={word:"Offline",attribute:"Error",syllables:"💭",meaning:"You are currently offline.",example:"",date:""},u=()=>void 0!==window.chrome&&void 0!==window.chrome.storage?window.chrome.storage.local:{get:(n,e)=>e(o),set:n=>{}};var s={getRecentWordOfTheDay:async()=>new Promise((n=>{u().get(["RECENT_WORD_OF_THE_DAY_KEY"],(e=>{void 0===e.RECENT_WORD_OF_THE_DAY_KEY?n(o):n(e.RECENT_WORD_OF_THE_DAY_KEY)}))})),setRecentWordOfTheDay:async n=>{u().set({RECENT_WORD_OF_THE_DAY_KEY:n})}};const c=n=>document.getElementById(n),l=()=>{};var d={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},f={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},p=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],h={CSS:{},springs:{}};function m(n,e,t){return Math.min(Math.max(n,e),t)}function g(n,e){return n.indexOf(e)>-1}function v(n,e){return n.apply(null,e)}var y={arr:function(n){return Array.isArray(n)},obj:function(n){return g(Object.prototype.toString.call(n),"Object")},pth:function(n){return y.obj(n)&&n.hasOwnProperty("totalLength")},svg:function(n){return n instanceof SVGElement},inp:function(n){return n instanceof HTMLInputElement},dom:function(n){return n.nodeType||y.svg(n)},str:function(n){return"string"==typeof n},fnc:function(n){return"function"==typeof n},und:function(n){return void 0===n},nil:function(n){return y.und(n)||null===n},hex:function(n){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(n)},rgb:function(n){return/^rgb/.test(n)},hsl:function(n){return/^hsl/.test(n)},col:function(n){return y.hex(n)||y.rgb(n)||y.hsl(n)},key:function(n){return!d.hasOwnProperty(n)&&!f.hasOwnProperty(n)&&"targets"!==n&&"keyframes"!==n}};function w(n){var e=/\(([^)]+)\)/.exec(n);return e?e[1].split(",").map((function(n){return parseFloat(n)})):[]}function b(n,e){var t=w(n),r=m(y.und(t[0])?1:t[0],.1,100),a=m(y.und(t[1])?100:t[1],.1,100),i=m(y.und(t[2])?10:t[2],.1,100),o=m(y.und(t[3])?0:t[3],.1,100),u=Math.sqrt(a/r),s=i/(2*Math.sqrt(a*r)),c=s<1?u*Math.sqrt(1-s*s):0,l=s<1?(s*u-o)/c:-o+u;function d(n){var t=e?e*n/1e3:n;return t=s<1?Math.exp(-t*s*u)*(1*Math.cos(c*t)+l*Math.sin(c*t)):(1+l*t)*Math.exp(-t*u),0===n||1===n?n:1-t}return e?d:function(){var e=h.springs[n];if(e)return e;for(var t=1/6,r=0,a=0;;)if(1===d(r+=t)){if(++a>=16)break}else a=0;var i=r*t*1e3;return h.springs[n]=i,i}}function x(n){return void 0===n&&(n=10),function(e){return Math.ceil(m(e,1e-6,1)*n)*(1/n)}}var E,M,C=function(){var n=.1;function e(n,e){return 1-3*e+3*n}function t(n,e){return 3*e-6*n}function r(n){return 3*n}function a(n,a,i){return((e(a,i)*n+t(a,i))*n+r(a))*n}function i(n,a,i){return 3*e(a,i)*n*n+2*t(a,i)*n+r(a)}return function(e,t,r,o){if(0<=e&&e<=1&&0<=r&&r<=1){var u=new Float32Array(11);if(e!==t||r!==o)for(var s=0;s<11;++s)u[s]=a(s*n,e,r);return function(n){return e===t&&r===o||0===n||1===n?n:a(c(n),t,o)}}function c(t){for(var o=0,s=1;10!==s&&u[s]<=t;++s)o+=n;--s;var c=o+(t-u[s])/(u[s+1]-u[s])*n,l=i(c,e,r);return l>=.001?function(n,e,t,r){for(var o=0;o<4;++o){var u=i(e,t,r);if(0===u)return e;e-=(a(e,t,r)-n)/u}return e}(t,c,e,r):0===l?c:function(n,e,t,r,i){var o,u,s=0;do{(o=a(u=e+(t-e)/2,r,i)-n)>0?t=u:e=u}while(Math.abs(o)>1e-7&&++s<10);return u}(t,o,o+n,e,r)}}}(),O=(E={linear:function(){return function(n){return n}}},M={Sine:function(){return function(n){return 1-Math.cos(n*Math.PI/2)}},Circ:function(){return function(n){return 1-Math.sqrt(1-n*n)}},Back:function(){return function(n){return n*n*(3*n-2)}},Bounce:function(){return function(n){for(var e,t=4;n<((e=Math.pow(2,--t))-1)/11;);return 1/Math.pow(4,3-t)-7.5625*Math.pow((3*e-2)/22-n,2)}},Elastic:function(n,e){void 0===n&&(n=1),void 0===e&&(e=.5);var t=m(n,1,10),r=m(e,.1,2);return function(n){return 0===n||1===n?n:-t*Math.pow(2,10*(n-1))*Math.sin((n-1-r/(2*Math.PI)*Math.asin(1/t))*(2*Math.PI)/r)}}},["Quad","Cubic","Quart","Quint","Expo"].forEach((function(n,e){M[n]=function(){return function(n){return Math.pow(n,e+2)}}})),Object.keys(M).forEach((function(n){var e=M[n];E["easeIn"+n]=e,E["easeOut"+n]=function(n,t){return function(r){return 1-e(n,t)(1-r)}},E["easeInOut"+n]=function(n,t){return function(r){return r<.5?e(n,t)(2*r)/2:1-e(n,t)(-2*r+2)/2}},E["easeOutIn"+n]=function(n,t){return function(r){return r<.5?(1-e(n,t)(1-2*r))/2:(e(n,t)(2*r-1)+1)/2}}})),E);function T(n,e){if(y.fnc(n))return n;var t=n.split("(")[0],r=O[t],a=w(n);switch(t){case"spring":return b(n,e);case"cubicBezier":return v(C,a);case"steps":return v(x,a);default:return v(r,a)}}function D(n){try{return document.querySelectorAll(n)}catch(n){return}}function k(n,e){for(var t=n.length,r=arguments.length>=2?arguments[1]:void 0,a=[],i=0;i<t;i++)if(i in n){var o=n[i];e.call(r,o,i,n)&&a.push(o)}return a}function P(n){return n.reduce((function(n,e){return n.concat(y.arr(e)?P(e):e)}),[])}function L(n){return y.arr(n)?n:(y.str(n)&&(n=D(n)||n),n instanceof NodeList||n instanceof HTMLCollection?[].slice.call(n):[n])}function I(n,e){return n.some((function(n){return n===e}))}function A(n){var e={};for(var t in n)e[t]=n[t];return e}function _(n,e){var t=A(n);for(var r in n)t[r]=e.hasOwnProperty(r)?e[r]:n[r];return t}function B(n,e){var t=A(n);for(var r in e)t[r]=y.und(n[r])?e[r]:n[r];return t}function F(n){return y.rgb(n)?(t=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e=n))?"rgba("+t[1]+",1)":e:y.hex(n)?function(n){var e=n.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(n,e,t,r){return e+e+t+t+r+r})),t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return"rgba("+parseInt(t[1],16)+","+parseInt(t[2],16)+","+parseInt(t[3],16)+",1)"}(n):y.hsl(n)?function(n){var e,t,r,a=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(n)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(n),i=parseInt(a[1],10)/360,o=parseInt(a[2],10)/100,u=parseInt(a[3],10)/100,s=a[4]||1;function c(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+6*(e-n)*t:t<.5?e:t<2/3?n+(e-n)*(2/3-t)*6:n}if(0==o)e=t=r=u;else{var l=u<.5?u*(1+o):u+o-u*o,d=2*u-l;e=c(d,l,i+1/3),t=c(d,l,i),r=c(d,l,i-1/3)}return"rgba("+255*e+","+255*t+","+255*r+","+s+")"}(n):void 0;var e,t}function S(n){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(n);if(e)return e[1]}function N(n,e){return y.fnc(n)?n(e.target,e.id,e.total):n}function H(n,e){return n.getAttribute(e)}function Y(n,e,t){if(I([t,"deg","rad","turn"],S(e)))return e;var r=h.CSS[e+t];if(!y.und(r))return r;var a=document.createElement(n.tagName),i=n.parentNode&&n.parentNode!==document?n.parentNode:document.body;i.appendChild(a),a.style.position="absolute",a.style.width=100+t;var o=100/a.offsetWidth;i.removeChild(a);var u=o*parseFloat(e);return h.CSS[e+t]=u,u}function W(n,e,t){if(e in n.style){var r=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),a=n.style[e]||getComputedStyle(n).getPropertyValue(r)||"0";return t?Y(n,a,t):a}}function q(n,e){return y.dom(n)&&!y.inp(n)&&(!y.nil(H(n,e))||y.svg(n)&&n[e])?"attribute":y.dom(n)&&I(p,e)?"transform":y.dom(n)&&"transform"!==e&&W(n,e)?"css":null!=n[e]?"object":void 0}function R(n){if(y.dom(n)){for(var e,t=n.style.transform||"",r=/(\w+)\(([^)]*)\)/g,a=new Map;e=r.exec(t);)a.set(e[1],e[2]);return a}}function j(n,e,t,r){var a=g(e,"scale")?1:0+function(n){return g(n,"translate")||"perspective"===n?"px":g(n,"rotate")||g(n,"skew")?"deg":void 0}(e),i=R(n).get(e)||a;return t&&(t.transforms.list.set(e,i),t.transforms.last=e),r?Y(n,i,r):i}function V(n,e,t,r){switch(q(n,e)){case"transform":return j(n,e,r,t);case"css":return W(n,e,t);case"attribute":return H(n,e);default:return n[e]||0}}function $(n,e){var t=/^(\*=|\+=|-=)/.exec(n);if(!t)return n;var r=S(n)||0,a=parseFloat(e),i=parseFloat(n.replace(t[0],""));switch(t[0][0]){case"+":return a+i+r;case"-":return a-i+r;case"*":return a*i+r}}function Q(n,e){if(y.col(n))return F(n);if(/\s/g.test(n))return n;var t=S(n),r=t?n.substr(0,n.length-t.length):n;return e?r+e:r}function K(n,e){return Math.sqrt(Math.pow(e.x-n.x,2)+Math.pow(e.y-n.y,2))}function X(n){for(var e,t=n.points,r=0,a=0;a<t.numberOfItems;a++){var i=t.getItem(a);a>0&&(r+=K(e,i)),e=i}return r}function Z(n){if(n.getTotalLength)return n.getTotalLength();switch(n.tagName.toLowerCase()){case"circle":return function(n){return 2*Math.PI*H(n,"r")}(n);case"rect":return function(n){return 2*H(n,"width")+2*H(n,"height")}(n);case"line":return function(n){return K({x:H(n,"x1"),y:H(n,"y1")},{x:H(n,"x2"),y:H(n,"y2")})}(n);case"polyline":return X(n);case"polygon":return function(n){var e=n.points;return X(n)+K(e.getItem(e.numberOfItems-1),e.getItem(0))}(n)}}function G(n,e){var t=e||{},r=t.el||function(n){for(var e=n.parentNode;y.svg(e)&&y.svg(e.parentNode);)e=e.parentNode;return e}(n),a=r.getBoundingClientRect(),i=H(r,"viewBox"),o=a.width,u=a.height,s=t.viewBox||(i?i.split(" "):[0,0,o,u]);return{el:r,viewBox:s,x:s[0]/1,y:s[1]/1,w:o,h:u,vW:s[2],vH:s[3]}}function z(n,e,t){function r(t){void 0===t&&(t=0);var r=e+t>=1?e+t:0;return n.el.getPointAtLength(r)}var a=G(n.el,n.svg),i=r(),o=r(-1),u=r(1),s=t?1:a.w/a.vW,c=t?1:a.h/a.vH;switch(n.property){case"x":return(i.x-a.x)*s;case"y":return(i.y-a.y)*c;case"angle":return 180*Math.atan2(u.y-o.y,u.x-o.x)/Math.PI}}function J(n,e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=Q(y.pth(n)?n.totalLength:n,e)+"";return{original:r,numbers:r.match(t)?r.match(t).map(Number):[0],strings:y.str(n)||e?r.split(t):[]}}function U(n){return k(n?P(y.arr(n)?n.map(L):L(n)):[],(function(n,e,t){return t.indexOf(n)===e}))}function nn(n){var e=U(n);return e.map((function(n,t){return{target:n,id:t,total:e.length,transforms:{list:R(n)}}}))}function en(n,e){var t=A(e);if(/^spring/.test(t.easing)&&(t.duration=b(t.easing)),y.arr(n)){var r=n.length;2===r&&!y.obj(n[0])?n={value:n}:y.fnc(e.duration)||(t.duration=e.duration/r)}var a=y.arr(n)?n:[n];return a.map((function(n,t){var r=y.obj(n)&&!y.pth(n)?n:{value:n};return y.und(r.delay)&&(r.delay=t?0:e.delay),y.und(r.endDelay)&&(r.endDelay=t===a.length-1?e.endDelay:0),r})).map((function(n){return B(n,t)}))}function tn(n,e){var t=[],r=e.keyframes;for(var a in r&&(e=B(function(n){for(var e=k(P(n.map((function(n){return Object.keys(n)}))),(function(n){return y.key(n)})).reduce((function(n,e){return n.indexOf(e)<0&&n.push(e),n}),[]),t={},r=function(r){var a=e[r];t[a]=n.map((function(n){var e={};for(var t in n)y.key(t)?t==a&&(e.value=n[t]):e[t]=n[t];return e}))},a=0;a<e.length;a++)r(a);return t}(r),e)),e)y.key(a)&&t.push({name:a,tweens:en(e[a],n)});return t}function rn(n,e){var t;return n.tweens.map((function(r){var a=function(n,e){var t={};for(var r in n){var a=N(n[r],e);y.arr(a)&&1===(a=a.map((function(n){return N(n,e)}))).length&&(a=a[0]),t[r]=a}return t.duration=parseFloat(t.duration),t.delay=parseFloat(t.delay),t}(r,e),i=a.value,o=y.arr(i)?i[1]:i,u=S(o),s=V(e.target,n.name,u,e),c=t?t.to.original:s,l=y.arr(i)?i[0]:c,d=S(l)||S(s),f=u||d;return y.und(o)&&(o=c),a.from=J(l,f),a.to=J($(o,l),f),a.start=t?t.end:0,a.end=a.start+a.delay+a.duration+a.endDelay,a.easing=T(a.easing,a.duration),a.isPath=y.pth(i),a.isPathTargetInsideSVG=a.isPath&&y.svg(e.target),a.isColor=y.col(a.from.original),a.isColor&&(a.round=1),t=a,a}))}var an={css:function(n,e,t){return n.style[e]=t},attribute:function(n,e,t){return n.setAttribute(e,t)},object:function(n,e,t){return n[e]=t},transform:function(n,e,t,r,a){if(r.list.set(e,t),e===r.last||a){var i="";r.list.forEach((function(n,e){i+=e+"("+n+") "})),n.style.transform=i}}};function on(n,e){nn(n).forEach((function(n){for(var t in e){var r=N(e[t],n),a=n.target,i=S(r),o=V(a,t,i,n),u=$(Q(r,i||S(o)),o),s=q(a,t);an[s](a,t,u,n.transforms,!0)}}))}function un(n,e){return k(P(n.map((function(n){return e.map((function(e){return function(n,e){var t=q(n.target,e.name);if(t){var r=rn(e,n),a=r[r.length-1];return{type:t,property:e.name,animatable:n,tweens:r,duration:a.end,delay:r[0].delay,endDelay:a.endDelay}}}(n,e)}))}))),(function(n){return!y.und(n)}))}function sn(n,e){var t=n.length,r=function(n){return n.timelineOffset?n.timelineOffset:0},a={};return a.duration=t?Math.max.apply(Math,n.map((function(n){return r(n)+n.duration}))):e.duration,a.delay=t?Math.min.apply(Math,n.map((function(n){return r(n)+n.delay}))):e.delay,a.endDelay=t?a.duration-Math.max.apply(Math,n.map((function(n){return r(n)+n.duration-n.endDelay}))):e.endDelay,a}var cn=0;var ln=[],dn=function(){var n;function e(t){for(var r=ln.length,a=0;a<r;){var i=ln[a];i.paused?(ln.splice(a,1),r--):(i.tick(t),a++)}n=a>0?requestAnimationFrame(e):void 0}return"undefined"!=typeof document&&document.addEventListener("visibilitychange",(function(){pn.suspendWhenDocumentHidden&&(fn()?n=cancelAnimationFrame(n):(ln.forEach((function(n){return n._onDocumentVisibility()})),dn()))})),function(){n||fn()&&pn.suspendWhenDocumentHidden||!(ln.length>0)||(n=requestAnimationFrame(e))}}();function fn(){return!!document&&document.hidden}function pn(n){void 0===n&&(n={});var e,t=0,r=0,a=0,i=0,o=null;function u(n){var e=window.Promise&&new Promise((function(n){return o=n}));return n.finished=e,e}var s=function(n){var e=_(d,n),t=_(f,n),r=tn(t,n),a=nn(n.targets),i=un(a,r),o=sn(i,t),u=cn;return cn++,B(e,{id:u,children:[],animatables:a,animations:i,duration:o.duration,delay:o.delay,endDelay:o.endDelay})}(n);u(s);function c(){var n=s.direction;"alternate"!==n&&(s.direction="normal"!==n?"normal":"reverse"),s.reversed=!s.reversed,e.forEach((function(n){return n.reversed=s.reversed}))}function l(n){return s.reversed?s.duration-n:n}function p(){t=0,r=l(s.currentTime)*(1/pn.speed)}function h(n,e){e&&e.seek(n-e.timelineOffset)}function g(n){for(var e=0,t=s.animations,r=t.length;e<r;){var a=t[e],i=a.animatable,o=a.tweens,u=o.length-1,c=o[u];u&&(c=k(o,(function(e){return n<e.end}))[0]||c);for(var l=m(n-c.start-c.delay,0,c.duration)/c.duration,d=isNaN(l)?1:c.easing(l),f=c.to.strings,p=c.round,h=[],g=c.to.numbers.length,v=void 0,y=0;y<g;y++){var w=void 0,b=c.to.numbers[y],x=c.from.numbers[y]||0;w=c.isPath?z(c.value,d*b,c.isPathTargetInsideSVG):x+d*(b-x),p&&(c.isColor&&y>2||(w=Math.round(w*p)/p)),h.push(w)}var E=f.length;if(E){v=f[0];for(var M=0;M<E;M++){f[M];var C=f[M+1],O=h[M];isNaN(O)||(v+=C?O+C:O+" ")}}else v=h[0];an[a.type](i.target,a.property,v,i.transforms),a.currentValue=v,e++}}function v(n){s[n]&&!s.passThrough&&s[n](s)}function y(n){var d=s.duration,f=s.delay,p=d-s.endDelay,y=l(n);s.progress=m(y/d*100,0,100),s.reversePlayback=y<s.currentTime,e&&function(n){if(s.reversePlayback)for(var t=i;t--;)h(n,e[t]);else for(var r=0;r<i;r++)h(n,e[r])}(y),!s.began&&s.currentTime>0&&(s.began=!0,v("begin")),!s.loopBegan&&s.currentTime>0&&(s.loopBegan=!0,v("loopBegin")),y<=f&&0!==s.currentTime&&g(0),(y>=p&&s.currentTime!==d||!d)&&g(d),y>f&&y<p?(s.changeBegan||(s.changeBegan=!0,s.changeCompleted=!1,v("changeBegin")),v("change"),g(y)):s.changeBegan&&(s.changeCompleted=!0,s.changeBegan=!1,v("changeComplete")),s.currentTime=m(y,0,d),s.began&&v("update"),n>=d&&(r=0,s.remaining&&!0!==s.remaining&&s.remaining--,s.remaining?(t=a,v("loopComplete"),s.loopBegan=!1,"alternate"===s.direction&&c()):(s.paused=!0,s.completed||(s.completed=!0,v("loopComplete"),v("complete"),!s.passThrough&&"Promise"in window&&(o(),u(s)))))}return s.reset=function(){var n=s.direction;s.passThrough=!1,s.currentTime=0,s.progress=0,s.paused=!0,s.began=!1,s.loopBegan=!1,s.changeBegan=!1,s.completed=!1,s.changeCompleted=!1,s.reversePlayback=!1,s.reversed="reverse"===n,s.remaining=s.loop,e=s.children;for(var t=i=e.length;t--;)s.children[t].reset();(s.reversed&&!0!==s.loop||"alternate"===n&&1===s.loop)&&s.remaining++,g(s.reversed?s.duration:0)},s._onDocumentVisibility=p,s.set=function(n,e){return on(n,e),s},s.tick=function(n){a=n,t||(t=a),y((a+(r-t))*pn.speed)},s.seek=function(n){y(l(n))},s.pause=function(){s.paused=!0,p()},s.play=function(){s.paused&&(s.completed&&s.reset(),s.paused=!1,ln.push(s),p(),dn())},s.reverse=function(){c(),s.completed=!s.reversed,p()},s.restart=function(){s.reset(),s.play()},s.remove=function(n){mn(U(n),s)},s.reset(),s.autoplay&&s.play(),s}function hn(n,e){for(var t=e.length;t--;)I(n,e[t].animatable.target)&&e.splice(t,1)}function mn(n,e){var t=e.animations,r=e.children;hn(n,t);for(var a=r.length;a--;){var i=r[a],o=i.animations;hn(n,o),o.length||i.children.length||r.splice(a,1)}t.length||r.length||e.pause()}pn.version="3.2.1",pn.speed=1,pn.suspendWhenDocumentHidden=!0,pn.running=ln,pn.remove=function(n){for(var e=U(n),t=ln.length;t--;){mn(e,ln[t])}},pn.get=V,pn.set=on,pn.convertPx=Y,pn.path=function(n,e){var t=y.str(n)?D(n)[0]:n,r=e||100;return function(n){return{property:n,el:t,svg:G(t),totalLength:Z(t)*(r/100)}}},pn.setDashoffset=function(n){var e=Z(n);return n.setAttribute("stroke-dasharray",e),e},pn.stagger=function(n,e){void 0===e&&(e={});var t=e.direction||"normal",r=e.easing?T(e.easing):null,a=e.grid,i=e.axis,o=e.from||0,u="first"===o,s="center"===o,c="last"===o,l=y.arr(n),d=l?parseFloat(n[0]):parseFloat(n),f=l?parseFloat(n[1]):0,p=S(l?n[1]:n)||0,h=e.start||0+(l?d:0),m=[],g=0;return function(n,e,v){if(u&&(o=0),s&&(o=(v-1)/2),c&&(o=v-1),!m.length){for(var y=0;y<v;y++){if(a){var w=s?(a[0]-1)/2:o%a[0],b=s?(a[1]-1)/2:Math.floor(o/a[0]),x=w-y%a[0],E=b-Math.floor(y/a[0]),M=Math.sqrt(x*x+E*E);"x"===i&&(M=-x),"y"===i&&(M=-E),m.push(M)}else m.push(Math.abs(o-y));g=Math.max.apply(Math,m)}r&&(m=m.map((function(n){return r(n/g)*g}))),"reverse"===t&&(m=m.map((function(n){return i?n<0?-1*n:-n:Math.abs(g-n)})))}return h+(l?(f-d)/g:d)*(Math.round(100*m[e])/100)+p}},pn.timeline=function(n){void 0===n&&(n={});var e=pn(n);return e.duration=0,e.add=function(t,r){var a=ln.indexOf(e),i=e.children;function o(n){n.passThrough=!0}a>-1&&ln.splice(a,1);for(var u=0;u<i.length;u++)o(i[u]);var s=B(t,_(f,n));s.targets=s.targets||n.targets;var c=e.duration;s.autoplay=!1,s.direction=e.direction,s.timelineOffset=y.und(r)?c:$(r,c),o(e),e.seek(s.timelineOffset);var l=pn(s);o(l),i.push(l);var d=sn(i,n);return e.delay=d.delay,e.endDelay=d.endDelay,e.duration=d.duration,e.seek(0),e.reset(),e.autoplay&&e.play(),e},e},pn.easing=T,pn.penner=O,pn.random=function(n,e){return Math.floor(Math.random()*(e-n+1))+n};var gn=pn;const vn=new class{loaderEl=c("loader");mainContainerEl=c("main");bodyEl=c("body");wordCardEl=c("word-card");exampleCardEl=c("example-card");loadingAnimation=null;isContentPreloaded=!1;animationTimeline=gn.timeline();initiateLoaderOnScreen(n=!1){this.isContentPreloaded=n,this.animationTimeline.add({targets:this.loaderEl,width:"100px",height:"100px",scale:n?17.5:1})}startLoading(){this.isContentPreloaded||(this.loadingAnimation=gn({targets:this.loaderEl,scale:[1,1.8,1],loop:!0,easing:"easeInOutQuad"}))}stopThenHideLoading(){"none"!==this.loaderEl.style.display&&(null!==this.loadingAnimation&&(this.loadingAnimation.pause(),this.loadingAnimation=null),this.animationTimeline.add({targets:this.loaderEl,duration:this.isContentPreloaded?0:750,scale:17.5,complete:()=>{this.hideLoader()}}))}hideLoader(){this.loaderEl.style.display="none",this.bodyEl.style.background="#ff3b3f"}initiateMainComponent(){gn({targets:this.wordCardEl,opacity:[0,1],translateY:["100px",0],begin:()=>{this.mainContainerEl.style.display="grid"},duration:750}),gn({targets:this.exampleCardEl,opacity:[0,.5],translateY:["20px",0],duration:750,delay:250})}addEventListenerOnMainComponent(){const n=n=>{gn({targets:this.bodyEl,backgroundColor:n?"#1a0001":"#ff3b3f",easing:"easeInOutQuint",duration:750}),gn({targets:this.exampleCardEl,opacity:n?1:.5}),gn({targets:c("word-main"),color:n?"#1a0001":"#ff3b3f",easing:"easeInOutQuint"})};this.wordCardEl.addEventListener("mouseenter",(()=>n(!0))),this.wordCardEl.addEventListener("mouseleave",(()=>n(!1))),this.exampleCardEl.addEventListener("mouseenter",(()=>n(!0))),this.exampleCardEl.addEventListener("mouseleave",(()=>n(!1)))}};async function yn(){(async n=>{const e=(new Date).toDateString()!==n.date;c("word-date").innerText=e?n.date:"Archived",c("word-main").innerText=n.word,c("word-attr").innerText=n.attribute,c("word-syllables").innerText=n.syllables,c("word-meaning").innerHTML=n.meaning,c("word-example").innerHTML=n.example})(await(async(n=l)=>{const e=await s.getRecentWordOfTheDay(),t=(new Date).toDateString();if(e.date===t)return n(!0),e;n(!1);const r=await i()??e;return s.setRecentWordOfTheDay(r),r})((n=>{vn.initiateLoaderOnScreen(n),vn.startLoading()}))),vn.stopThenHideLoading(),vn.initiateMainComponent()}window.onload=async()=>{await yn()};
//# sourceMappingURL=index.c6b6add2.js.map
