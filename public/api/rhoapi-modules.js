// WARNING! THIS FILE IS GENERATED AUTOMATICALLY! DO NOT EDIT IT MANUALLY!
// Module jquery-2.0.2-rho-custom.min

/*! jQuery v2.0.2 -wrap,-css,-ajax/script,-ajax/jsonp,-effects,-offset,-dimensions,-deprecated | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/
(function(e,undefined){var t,n,r=typeof undefined,i=e.location,o=e.document,a=o.documentElement,s=e.jQuery,u=e.$,l={},c=[],f="2.0.2 -wrap,-css,-ajax/script,-ajax/jsonp,-effects,-offset,-dimensions,-deprecated",p=c.concat,d=c.push,h=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=f.trim,x=function(e,n){return new x.fn.init(e,n,t)},b=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,N=/^-ms-/,k=/-([\da-z])/gi,S=function(e,t){return t.toUpperCase()},E=function(){o.removeEventListener("DOMContentLoaded",E,!1),e.removeEventListener("load",E,!1),x.ready()};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,t,n){var r,i;if(!e)return this;if("string"==typeof e){if(r="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:T.exec(e),!r||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof x?t[0]:t,x.merge(this,x.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:o,!0)),C.test(r[1])&&x.isPlainObject(t))for(r in t)x.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return i=o.getElementById(r[2]),i&&i.parentNode&&(this.length=1,this[0]=i),this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?n.ready(e):(e.selector!==undefined&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return h.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(h.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:d,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[1]||{},s=2),"object"==typeof a||x.isFunction(a)||(a={}),u===s&&(a=this,--s);u>s;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],r=e[t],a!==r&&(l&&r&&(x.isPlainObject(r)||(i=x.isArray(r)))?(i?(i=!1,o=n&&x.isArray(n)?n:[]):o=n&&x.isPlainObject(n)?n:{},a[t]=x.extend(l,o,r)):r!==undefined&&(a[t]=r));return a},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=s),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){(e===!0?--x.readyWait:x.isReady)||(x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(o,[x]),x.fn.trigger&&x(o).trigger("ready").off("ready")))},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if("object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}return!0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:JSON.parse,parseXML:function(e){var t,n;if(!e||"string"!=typeof e)return null;try{n=new DOMParser,t=n.parseFromString(e,"text/xml")}catch(r){t=undefined}return(!t||t.getElementsByTagName("parsererror").length)&&x.error("Invalid XML: "+e),t},noop:function(){},globalEval:function(e){var t,n=eval;e=x.trim(e),e&&(1===e.indexOf("use strict")?(t=o.createElement("script"),t.text=e,o.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(N,"ms-").replace(k,S)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=D(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:function(e){return null==e?"":v.call(e)},makeArray:function(e,t){var n=t||[];return null!=e&&(D(Object(e))?x.merge(n,"string"==typeof e?[e]:e):d.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:g.call(t,e,n)},merge:function(e,t){var n=t.length,r=e.length,i=0;if("number"==typeof n)for(;n>i;i++)e[r++]=t[i];else while(t[i]!==undefined)e[r++]=t[i++];return e.length=r,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=D(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return p.apply([],s)},guid:1,proxy:function(e,t){var n,r,i;return"string"==typeof t&&(n=e[t],t=e,e=n),x.isFunction(e)?(r=h.call(arguments,2),i=function(){return e.apply(t||this,r.concat(h.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):undefined},access:function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x.type(n)){i=!0;for(s in n)x.access(e,t,s,n[s],!0,o,a)}else if(r!==undefined&&(i=!0,x.isFunction(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(x(e),n)})),t))for(;u>s;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},now:Date.now,swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),x.ready.promise=function(t){return n||(n=x.Deferred(),"complete"===o.readyState?setTimeout(x.ready):(o.addEventListener("DOMContentLoaded",E,!1),e.addEventListener("load",E,!1))),n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function D(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}t=x(o),function(e,undefined){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,m,y,v="sizzle"+-new Date,b=e.document,w=0,T=0,C=st(),N=st(),k=st(),S=!1,E=function(){return 0},D=typeof undefined,A=1<<31,j={}.hasOwnProperty,L=[],H=L.pop,q=L.push,O=L.push,M=L.slice,F=L.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",R="[\\x20\\t\\r\\n\\f]",$="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",B=$.replace("w","w#"),I="\\["+R+"*("+$+")"+R+"*(?:([*^$|!~]?=)"+R+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+B+")|)|)"+R+"*\\]",W=":("+$+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+I.replace(3,8)+")*)|.*)\\)|)",_=RegExp("^"+R+"+|((?:^|[^\\\\])(?:\\\\.)*)"+R+"+$","g"),X=RegExp("^"+R+"*,"+R+"*"),z=RegExp("^"+R+"*([>+~]|"+R+")"+R+"*"),U=RegExp(R+"*[+~]"),V=RegExp("="+R+"*([^\\]'\"]*)"+R+"*\\]","g"),G=RegExp(W),J=RegExp("^"+B+"$"),Q={ID:RegExp("^#("+$+")"),CLASS:RegExp("^\\.("+$+")"),TAG:RegExp("^("+$.replace("w","w*")+")"),ATTR:RegExp("^"+I),PSEUDO:RegExp("^"+W),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+R+"*(even|odd|(([+-]|)(\\d*)n|)"+R+"*(?:([+-]|)"+R+"*(\\d+)|))"+R+"*\\)|)","i"),bool:RegExp("^(?:"+P+")$","i"),needsContext:RegExp("^"+R+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+R+"*((?:-\\d)?\\d*)"+R+"*\\)|)(?=[^-]|$)","i")},Y=/^[^{]+\{\s*\[native \w/,K=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Z=/^(?:input|select|textarea|button)$/i,et=/^h\d$/i,tt=/'|\\/g,nt=RegExp("\\\\([\\da-f]{1,6}"+R+"?|("+R+")|.)","ig"),rt=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{O.apply(L=M.call(b.childNodes),b.childNodes),L[b.childNodes.length].nodeType}catch(it){O={apply:L.length?function(e,t){q.apply(e,M.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function ot(e,t,r,i){var o,a,s,u,l,p,g,m,x,w;if((t?t.ownerDocument||t:b)!==f&&c(t),t=t||f,r=r||[],!e||"string"!=typeof e)return r;if(1!==(u=t.nodeType)&&9!==u)return[];if(d&&!i){if(o=K.exec(e))if(s=o[1]){if(9===u){if(a=t.getElementById(s),!a||!a.parentNode)return r;if(a.id===s)return r.push(a),r}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&y(t,a)&&a.id===s)return r.push(a),r}else{if(o[2])return O.apply(r,t.getElementsByTagName(e)),r;if((s=o[3])&&n.getElementsByClassName&&t.getElementsByClassName)return O.apply(r,t.getElementsByClassName(s)),r}if(n.qsa&&(!h||!h.test(e))){if(m=g=v,x=t,w=9===u&&e,1===u&&"object"!==t.nodeName.toLowerCase()){p=vt(e),(g=t.getAttribute("id"))?m=g.replace(tt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",l=p.length;while(l--)p[l]=m+xt(p[l]);x=U.test(e)&&t.parentNode||t,w=p.join(",")}if(w)try{return O.apply(r,x.querySelectorAll(w)),r}catch(T){}finally{g||t.removeAttribute("id")}}}return Et(e.replace(_,"$1"),t,r,i)}function at(e){return Y.test(e+"")}function st(){var e=[];function t(n,r){return e.push(n+=" ")>i.cacheLength&&delete t[e.shift()],t[n]=r}return t}function ut(e){return e[v]=!0,e}function lt(e){var t=f.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ct(e,t,n){e=e.split("|");var r,o=e.length,a=n?null:t;while(o--)(r=i.attrHandle[e[o]])&&r!==t||(i.attrHandle[e[o]]=a)}function ft(e,t){var n=e.getAttributeNode(t);return n&&n.specified?n.value:e[t]===!0?t.toLowerCase():null}function pt(e,t){return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}function dt(e){return"input"===e.nodeName.toLowerCase()?e.defaultValue:undefined}function ht(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||A)-(~e.sourceIndex||A);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function gt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function mt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function yt(e){return ut(function(t){return t=+t,ut(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}a=ot.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},n=ot.support={},c=ot.setDocument=function(e){var t=e?e.ownerDocument||e:b,r=t.parentWindow;return t!==f&&9===t.nodeType&&t.documentElement?(f=t,p=t.documentElement,d=!a(t),r&&r.frameElement&&r.attachEvent("onbeforeunload",function(){c()}),n.attributes=lt(function(e){return e.innerHTML="<a href='#'></a>",ct("type|href|height|width",pt,"#"===e.firstChild.getAttribute("href")),ct(P,ft,null==e.getAttribute("disabled")),e.className="i",!e.getAttribute("className")}),n.input=lt(function(e){return e.innerHTML="<input>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")}),ct("value",dt,n.attributes&&n.input),n.getElementsByTagName=lt(function(e){return e.appendChild(t.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=lt(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),n.getById=lt(function(e){return p.appendChild(e).id=v,!t.getElementsByName||!t.getElementsByName(v).length}),n.getById?(i.find.ID=function(e,t){if(typeof t.getElementById!==D&&d){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){return e.getAttribute("id")===t}}):(delete i.find.ID,i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){var n=typeof e.getAttributeNode!==D&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=n.getElementsByTagName?function(e,t){return typeof t.getElementsByTagName!==D?t.getElementsByTagName(e):undefined}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.CLASS=n.getElementsByClassName&&function(e,t){return typeof t.getElementsByClassName!==D&&d?t.getElementsByClassName(e):undefined},g=[],h=[],(n.qsa=at(t.querySelectorAll))&&(lt(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||h.push("\\["+R+"*(?:value|"+P+")"),e.querySelectorAll(":checked").length||h.push(":checked")}),lt(function(e){var n=t.createElement("input");n.setAttribute("type","hidden"),e.appendChild(n).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&h.push("[*^$]="+R+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||h.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),h.push(",.*:")})),(n.matchesSelector=at(m=p.webkitMatchesSelector||p.mozMatchesSelector||p.oMatchesSelector||p.msMatchesSelector))&&lt(function(e){n.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",W)}),h=h.length&&RegExp(h.join("|")),g=g.length&&RegExp(g.join("|")),y=at(p.contains)||p.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},n.sortDetached=lt(function(e){return 1&e.compareDocumentPosition(t.createElement("div"))}),E=p.compareDocumentPosition?function(e,r){if(e===r)return S=!0,0;var i=r.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(r);return i?1&i||!n.sortDetached&&r.compareDocumentPosition(e)===i?e===t||y(b,e)?-1:r===t||y(b,r)?1:l?F.call(l,e)-F.call(l,r):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,n){var r,i=0,o=e.parentNode,a=n.parentNode,s=[e],u=[n];if(e===n)return S=!0,0;if(!o||!a)return e===t?-1:n===t?1:o?-1:a?1:l?F.call(l,e)-F.call(l,n):0;if(o===a)return ht(e,n);r=e;while(r=r.parentNode)s.unshift(r);r=n;while(r=r.parentNode)u.unshift(r);while(s[i]===u[i])i++;return i?ht(s[i],u[i]):s[i]===b?-1:u[i]===b?1:0},t):f},ot.matches=function(e,t){return ot(e,null,null,t)},ot.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&c(e),t=t.replace(V,"='$1']"),!(!n.matchesSelector||!d||g&&g.test(t)||h&&h.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(i){}return ot(t,f,null,[e]).length>0},ot.contains=function(e,t){return(e.ownerDocument||e)!==f&&c(e),y(e,t)},ot.attr=function(e,t){(e.ownerDocument||e)!==f&&c(e);var r=i.attrHandle[t.toLowerCase()],o=r&&j.call(i.attrHandle,t.toLowerCase())?r(e,t,!d):undefined;return o===undefined?n.attributes||!d?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null:o},ot.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},ot.uniqueSort=function(e){var t,r=[],i=0,o=0;if(S=!n.detectDuplicates,l=!n.sortStable&&e.slice(0),e.sort(E),S){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return e},o=ot.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=ot.selectors={cacheLength:50,createPseudo:ut,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(nt,rt),e[3]=(e[4]||e[5]||"").replace(nt,rt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ot.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ot.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==undefined?e[2]=e[4]:n&&G.test(n)&&(t=vt(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(nt,rt).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=C[e+" "];return t||(t=RegExp("(^|"+R+")"+e+"("+R+"|$)"))&&C(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==D&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=ot.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),x=!u&&!s;if(m){if(o){while(g){f=t;while(f=f[g])if(s?f.nodeName.toLowerCase()===y:1===f.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&x){c=m[v]||(m[v]={}),l=c[e]||[],d=l[0]===w&&l[1],p=l[0]===w&&l[2],f=d&&m.childNodes[d];while(f=++d&&f&&f[g]||(p=d=0)||h.pop())if(1===f.nodeType&&++p&&f===t){c[e]=[w,d,p];break}}else if(x&&(l=(t[v]||(t[v]={}))[e])&&l[0]===w)p=l[1];else while(f=++d&&f&&f[g]||(p=d=0)||h.pop())if((s?f.nodeName.toLowerCase()===y:1===f.nodeType)&&++p&&(x&&((f[v]||(f[v]={}))[e]=[w,p]),f===t))break;return p-=i,p===r||0===p%r&&p/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||ot.error("unsupported pseudo: "+e);return r[v]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ut(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=F.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ut(function(e){var t=[],n=[],r=s(e.replace(_,"$1"));return r[v]?ut(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ut(function(e){return function(t){return ot(e,t).length>0}}),contains:ut(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:ut(function(e){return J.test(e||"")||ot.error("unsupported lang: "+e),e=e.replace(nt,rt).toLowerCase(),function(t){var n;do if(n=d?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===p},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return et.test(e.nodeName)},input:function(e){return Z.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:yt(function(){return[0]}),last:yt(function(e,t){return[t-1]}),eq:yt(function(e,t,n){return[0>n?n+t:n]}),even:yt(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:yt(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:yt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:yt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}};for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[t]=gt(t);for(t in{submit:!0,reset:!0})i.pseudos[t]=mt(t);function vt(e,t){var n,r,o,a,s,u,l,c=N[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=i.preFilter;while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),u.push(o=[])),n=!1,(r=z.exec(s))&&(n=r.shift(),o.push({value:n,type:r[0].replace(_," ")}),s=s.slice(n.length));for(a in i.filter)!(r=Q[a].exec(s))||l[a]&&!(r=l[a](r))||(n=r.shift(),o.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?ot.error(e):N(e,u).slice(0)}function xt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function bt(e,t,n){var i=t.dir,o=n&&"parentNode"===i,a=T++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,s){var u,l,c,f=w+" "+a;if(s){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[v]||(t[v]={}),(l=c[i])&&l[0]===f){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[f],l[1]=e(t,n,s)||r,l[1]===!0)return!0}}function wt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function Tt(e,t,n,r,i){var o,a=[],s=0,u=e.length,l=null!=t;for(;u>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s));return a}function Ct(e,t,n,r,i,o){return r&&!r[v]&&(r=Ct(r)),i&&!i[v]&&(i=Ct(i,o)),ut(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||St(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:Tt(g,p,e,s,u),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,u),r){l=Tt(y,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(y[d[c]]=!(m[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(f=y[c])&&l.push(m[c]=f);i(null,y=[],l,u)}c=y.length;while(c--)(f=y[c])&&(l=i?F.call(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else y=Tt(y===a?y.splice(h,y.length):y),i?i(null,a,y,u):O.apply(a,y)})}function Nt(e){var t,n,r,o=e.length,a=i.relative[e[0].type],s=a||i.relative[" "],l=a?1:0,c=bt(function(e){return e===t},s,!0),f=bt(function(e){return F.call(t,e)>-1},s,!0),p=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):f(e,n,r))}];for(;o>l;l++)if(n=i.relative[e[l].type])p=[bt(wt(p),n)];else{if(n=i.filter[e[l].type].apply(null,e[l].matches),n[v]){for(r=++l;o>r;r++)if(i.relative[e[r].type])break;return Ct(l>1&&wt(p),l>1&&xt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(_,"$1"),n,r>l&&Nt(e.slice(l,r)),o>r&&Nt(e=e.slice(r)),o>r&&xt(e))}p.push(n)}return wt(p)}function kt(e,t){var n=0,o=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,x="0",b=s&&[],T=null!=d,C=u,N=s||a&&i.find.TAG("*",d&&l.parentNode||l),k=w+=null==C?1:Math.random()||.1;for(T&&(u=l!==f&&l,r=n);null!=(h=N[x]);x++){if(a&&h){g=0;while(m=e[g++])if(m(h,l,c)){p.push(h);break}T&&(w=k,r=++n)}o&&((h=!m&&h)&&v--,s&&b.push(h))}if(v+=x,o&&x!==v){g=0;while(m=t[g++])m(b,y,l,c);if(s){if(v>0)while(x--)b[x]||y[x]||(y[x]=H.call(p));y=Tt(y)}O.apply(p,y),T&&!s&&y.length>0&&v+t.length>1&&ot.uniqueSort(p)}return T&&(w=k,u=C),b};return o?ut(s):s}s=ot.compile=function(e,t){var n,r=[],i=[],o=k[e+" "];if(!o){t||(t=vt(e)),n=t.length;while(n--)o=Nt(t[n]),o[v]?r.push(o):i.push(o);o=k(e,kt(i,r))}return o};function St(e,t,n){var r=0,i=t.length;for(;i>r;r++)ot(e,t[r],n);return n}function Et(e,t,r,o){var a,u,l,c,f,p=vt(e);if(!o&&1===p.length){if(u=p[0]=p[0].slice(0),u.length>2&&"ID"===(l=u[0]).type&&n.getById&&9===t.nodeType&&d&&i.relative[u[1].type]){if(t=(i.find.ID(l.matches[0].replace(nt,rt),t)||[])[0],!t)return r;e=e.slice(u.shift().value.length)}a=Q.needsContext.test(e)?0:u.length;while(a--){if(l=u[a],i.relative[c=l.type])break;if((f=i.find[c])&&(o=f(l.matches[0].replace(nt,rt),U.test(u[0].type)&&t.parentNode||t))){if(u.splice(a,1),e=o.length&&xt(u),!e)return O.apply(r,o),r;break}}}return s(e,p)(o,t,!d,r,U.test(e)),r}i.pseudos.nth=i.pseudos.eq;function Dt(){}Dt.prototype=i.filters=i.pseudos,i.setFilters=new Dt,n.sortStable=v.split("").sort(E).join("")===v,c(),[0,0].sort(E),n.detectDuplicates=S,x.find=ot,x.expr=ot.selectors,x.expr[":"]=x.expr.pseudos,x.unique=ot.uniqueSort,x.text=ot.getText,x.isXMLDoc=ot.isXML,x.contains=ot.contains}(e);var A={};function j(e){var t=A[e]={};return x.each(e.match(w)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?A[e]||j(e):x.extend({},e);var t,n,r,i,o,a,s=[],u=!e.once&&[],l=function(f){for(t=e.memory&&f,n=!0,a=i||0,i=0,o=s.length,r=!0;s&&o>a;a++)if(s[a].apply(f[0],f[1])===!1&&e.stopOnFalse){t=!1;break}r=!1,s&&(u?u.length&&l(u.shift()):t?s=[]:c.disable())},c={add:function(){if(s){var n=s.length;(function a(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&c.has(n)||s.push(n):n&&n.length&&"string"!==r&&a(n)})})(arguments),r?o=s.length:t&&(i=n,l(t))}return this},remove:function(){return s&&x.each(arguments,function(e,t){var n;while((n=x.inArray(t,s,n))>-1)s.splice(n,1),r&&(o>=n&&o--,a>=n&&a--)}),this},has:function(e){return e?x.inArray(e,s)>-1:!(!s||!s.length)},empty:function(){return s=[],o=0,this},disable:function(){return s=u=t=undefined,this},disabled:function(){return!s},lock:function(){return u=undefined,t||c.disable(),this},locked:function(){return!u},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!s||n&&!u||(r?u.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!n}};return c},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=h.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?h.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,u,l;if(r>1)for(s=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,l,n)).fail(o.reject).progress(a(t,u,s)):--i;return i||o.resolveWith(l,n),o.promise()}}),x.support=function(t){var n=o.createElement("input"),r=o.createDocumentFragment(),i=o.createElement("div"),a=o.createElement("select"),s=a.appendChild(o.createElement("option"));return n.type?(n.type="checkbox",t.checkOn=""!==n.value,t.optSelected=s.selected,t.reliableMarginRight=!0,t.boxSizingReliable=!0,t.pixelPosition=!1,n.checked=!0,t.noCloneChecked=n.cloneNode(!0).checked,a.disabled=!0,t.optDisabled=!s.disabled,n=o.createElement("input"),n.value="t",n.type="radio",t.radioValue="t"===n.value,n.setAttribute("checked","t"),n.setAttribute("name","t"),r.appendChild(n),t.checkClone=r.cloneNode(!0).cloneNode(!0).lastChild.checked,t.focusinBubbles="onfocusin"in e,i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===i.style.backgroundClip,x(function(){var n,r,a="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",s=o.getElementsByTagName("body")[0];s&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",s.appendChild(n).appendChild(i),i.innerHTML="",i.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",x.swap(s,null!=s.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===i.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(i,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(i,null)||{width:"4px"}).width,r=i.appendChild(o.createElement("div")),r.style.cssText=i.style.cssText=a,r.style.marginRight=r.style.width="0",i.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),s.removeChild(n))}),t):t}({});var L,H,q=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,O=/([A-Z])/g;function M(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=x.expando+Math.random()}M.uid=1,M.accepts=function(e){return e.nodeType?1===e.nodeType||9===e.nodeType:!0},M.prototype={key:function(e){if(!M.accepts(e))return 0;var t={},n=e[this.expando];if(!n){n=M.uid++;try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(r){t[this.expando]=n,x.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var r,i=this.key(e),o=this.cache[i];if("string"==typeof t)o[t]=n;else if(x.isEmptyObject(o))x.extend(this.cache[i],t);else for(r in t)o[r]=t[r];return o},get:function(e,t){var n=this.cache[this.key(e)];return t===undefined?n:n[t]},access:function(e,t,n){return t===undefined||t&&"string"==typeof t&&n===undefined?this.get(e,t):(this.set(e,t,n),n!==undefined?n:t)},remove:function(e,t){var n,r,i,o=this.key(e),a=this.cache[o];if(t===undefined)this.cache[o]={};else{x.isArray(t)?r=t.concat(t.map(x.camelCase)):(i=x.camelCase(t),t in a?r=[t,i]:(r=i,r=r in a?[r]:r.match(w)||[])),n=r.length;while(n--)delete a[r[n]]}},hasData:function(e){return!x.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}},L=new M,H=new M,x.extend({acceptData:M.accepts,hasData:function(e){return L.hasData(e)||H.hasData(e)},data:function(e,t,n){return L.access(e,t,n)},removeData:function(e,t){L.remove(e,t)},_data:function(e,t,n){return H.access(e,t,n)},_removeData:function(e,t){H.remove(e,t)}}),x.fn.extend({data:function(e,t){var n,r,i=this[0],o=0,a=null;if(e===undefined){if(this.length&&(a=L.get(i),1===i.nodeType&&!H.get(i,"hasDataAttrs"))){for(n=i.attributes;n.length>o;o++)r=n[o].name,0===r.indexOf("data-")&&(r=x.camelCase(r.slice(5)),F(i,r,a[r]));H.set(i,"hasDataAttrs",!0)}return a}return"object"==typeof e?this.each(function(){L.set(this,e)}):x.access(this,function(t){var n,r=x.camelCase(e);if(i&&t===undefined){if(n=L.get(i,e),n!==undefined)return n;if(n=L.get(i,r),n!==undefined)return n;if(n=F(i,r,undefined),n!==undefined)return n}else this.each(function(){var n=L.get(this,r);L.set(this,r,t),-1!==e.indexOf("-")&&n!==undefined&&L.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){L.remove(this,e)})}});function F(e,t,n){var r;if(n===undefined&&1===e.nodeType)if(r="data-"+t.replace(O,"-$1").toLowerCase(),n=e.getAttribute(r),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:q.test(n)?JSON.parse(n):n}catch(i){}L.set(e,t,n)}else n=undefined;return n}x.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=H.get(e,t),n&&(!r||x.isArray(n)?r=H.access(e,t,x.makeArray(n)):r.push(n)),r||[]):undefined},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)
};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return H.get(e,n)||H.access(e,n,{empty:x.Callbacks("once memory").add(function(){H.remove(e,[t+"queue",n])})})}}),x.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),n>arguments.length?x.queue(this[0],e):t===undefined?this:this.each(function(){var n=x.queue(this,e,t);x._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=x.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=undefined),e=e||"fx";while(a--)n=H.get(o[a],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var P,R,$=/[\t\r\n\f]/g,B=/\r/g,I=/^(?:input|select|textarea|button)$/i;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[x.propFix[e]||e]})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,u="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace($," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,u=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace($," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,i="boolean"==typeof t;return x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,a=0,s=x(this),u=t,l=e.match(w)||[];while(o=l[a++])u=i?u:!s.hasClass(o),s[u?"addClass":"removeClass"](o)}else(n===r||"boolean"===n)&&(this.className&&H.set(this,"__className__",this.className),this.className=this.className||e===!1?"":H.get(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace($," ").indexOf(t)>=0)return!0;return!1},val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=x.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,x(this).val()):e,null==i?i="":"number"==typeof i?i+="":x.isArray(i)&&(i=x.map(i,function(e){return null==e?"":e+""})),t=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&t.set(this,i,"value")!==undefined||(this.value=i))});if(i)return t=x.valHooks[i.type]||x.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&(n=t.get(i,"value"))!==undefined?n:(n=i.value,"string"==typeof n?n.replace(B,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,u=0>i?s:o?i:0;for(;s>u;u++)if(n=r[u],!(!n.selected&&u!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;while(a--)r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,t,n){var i,o,a=e.nodeType;if(e&&3!==a&&8!==a&&2!==a)return typeof e.getAttribute===r?x.prop(e,t,n):(1===a&&x.isXMLDoc(e)||(t=t.toLowerCase(),i=x.attrHooks[t]||(x.expr.match.bool.test(t)?R:P)),n===undefined?i&&"get"in i&&null!==(o=i.get(e,t))?o:(o=x.find.attr(e,t),null==o?undefined:o):null!==n?i&&"set"in i&&(o=i.set(e,n,t))!==undefined?o:(e.setAttribute(t,n+""),n):(x.removeAttr(e,t),undefined))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var r,i,o,a=e.nodeType;if(e&&3!==a&&8!==a&&2!==a)return o=1!==a||!x.isXMLDoc(e),o&&(t=x.propFix[t]||t,i=x.propHooks[t]),n!==undefined?i&&"set"in i&&(r=i.set(e,n,t))!==undefined?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||I.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),R={set:function(e,t,n){return t===!1?x.removeAttr(e,n):e.setAttribute(n,n),n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,t){var n=x.expr.attrHandle[t]||x.find.attr;x.expr.attrHandle[t]=function(e,t,r){var i=x.expr.attrHandle[t],o=r?undefined:(x.expr.attrHandle[t]=undefined)!=n(e,t,r)?t.toLowerCase():null;return x.expr.attrHandle[t]=i,o}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,t){return x.isArray(t)?e.checked=x.inArray(x(e).val(),t)>=0:undefined}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var W=/^key/,_=/^(?:mouse|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,z=/^([^.]*)(?:\.(.+)|)$/;function U(){return!0}function V(){return!1}function G(){try{return o.activeElement}catch(e){}}x.event={global:{},add:function(e,t,n,i,o){var a,s,u,l,c,f,p,d,h,g,m,y=H.get(e);if(y){n.handler&&(a=n,n=a.handler,o=a.selector),n.guid||(n.guid=x.guid++),(l=y.events)||(l=y.events={}),(s=y.handle)||(s=y.handle=function(e){return typeof x===r||e&&x.event.triggered===e.type?undefined:x.event.dispatch.apply(s.elem,arguments)},s.elem=e),t=(t||"").match(w)||[""],c=t.length;while(c--)u=z.exec(t[c])||[],h=m=u[1],g=(u[2]||"").split(".").sort(),h&&(p=x.event.special[h]||{},h=(o?p.delegateType:p.bindType)||h,p=x.event.special[h]||{},f=x.extend({type:h,origType:m,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&x.expr.match.needsContext.test(o),namespace:g.join(".")},a),(d=l[h])||(d=l[h]=[],d.delegateCount=0,p.setup&&p.setup.call(e,i,g,s)!==!1||e.addEventListener&&e.addEventListener(h,s,!1)),p.add&&(p.add.call(e,f),f.handler.guid||(f.handler.guid=n.guid)),o?d.splice(d.delegateCount++,0,f):d.push(f),x.event.global[h]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,m=H.hasData(e)&&H.get(e);if(m&&(u=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(s=z.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=x.event.special[d]||{},d=(r?f.delegateType:f.bindType)||d,p=u[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&f.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete u[d])}else for(d in u)x.event.remove(e,d+t[l],n,r,!0);x.isEmptyObject(u)&&(delete m.handle,H.remove(e,"events"))}},trigger:function(t,n,r,i){var a,s,u,l,c,f,p,d=[r||o],h=y.call(t,"type")?t.type:t,g=y.call(t,"namespace")?t.namespace.split("."):[];if(s=u=r=r||o,3!==r.nodeType&&8!==r.nodeType&&!X.test(h+x.event.triggered)&&(h.indexOf(".")>=0&&(g=h.split("."),h=g.shift(),g.sort()),c=0>h.indexOf(":")&&"on"+h,t=t[x.expando]?t:new x.Event(h,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=g.join("."),t.namespace_re=t.namespace?RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=undefined,t.target||(t.target=r),n=null==n?[t]:x.makeArray(n,[t]),p=x.event.special[h]||{},i||!p.trigger||p.trigger.apply(r,n)!==!1)){if(!i&&!p.noBubble&&!x.isWindow(r)){for(l=p.delegateType||h,X.test(l+h)||(s=s.parentNode);s;s=s.parentNode)d.push(s),u=s;u===(r.ownerDocument||o)&&d.push(u.defaultView||u.parentWindow||e)}a=0;while((s=d[a++])&&!t.isPropagationStopped())t.type=a>1?l:p.bindType||h,f=(H.get(s,"events")||{})[t.type]&&H.get(s,"handle"),f&&f.apply(s,n),f=c&&s[c],f&&x.acceptData(s)&&f.apply&&f.apply(s,n)===!1&&t.preventDefault();return t.type=h,i||t.isDefaultPrevented()||p._default&&p._default.apply(d.pop(),n)!==!1||!x.acceptData(r)||c&&x.isFunction(r[h])&&!x.isWindow(r)&&(u=r[c],u&&(r[c]=null),x.event.triggered=h,r[h](),x.event.triggered=undefined,u&&(r[c]=u)),t.result}},dispatch:function(e){e=x.event.fix(e);var t,n,r,i,o,a=[],s=h.call(arguments),u=(H.get(this,"events")||{})[e.type]||[],l=x.event.special[e.type]||{};if(s[0]=e,e.delegateTarget=this,!l.preDispatch||l.preDispatch.call(this,e)!==!1){a=x.event.handlers.call(this,e,u),t=0;while((i=a[t++])&&!e.isPropagationStopped()){e.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(o.namespace))&&(e.handleObj=o,e.data=o.data,r=((x.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s),r!==undefined&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return l.postDispatch&&l.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,a=[],s=t.delegateCount,u=e.target;if(s&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!==this;u=u.parentNode||this)if(u.disabled!==!0||"click"!==e.type){for(r=[],n=0;s>n;n++)o=t[n],i=o.selector+" ",r[i]===undefined&&(r[i]=o.needsContext?x(i,this).index(u)>=0:x.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&a.push({elem:u,handlers:r})}return t.length>s&&a.push({elem:this,handlers:t.slice(s)}),a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,a=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||o,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||a===undefined||(e.which=1&a?1:2&a?3:4&a?2:0),e}},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,a=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=_.test(i)?this.mouseHooks:W.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(a),t=r.length;while(t--)n=r[t],e[n]=a[n];return e.target||(e.target=o),3===e.target.nodeType&&(e.target=e.target.parentNode),s.filter?s.filter(e,a):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==G()&&this.focus?(this.focus(),!1):undefined},delegateType:"focusin"},blur:{trigger:function(){return this===G()&&this.blur?(this.blur(),!1):undefined},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&x.nodeName(this,"input")?(this.click(),!1):undefined},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==undefined&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},x.Event=function(e,t){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.getPreventDefault&&e.getPreventDefault()?U:V):this.type=e,t&&x.extend(this,t),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,undefined):new x.Event(e,t)},x.Event.prototype={isDefaultPrevented:V,isPropagationStopped:V,isImmediatePropagationStopped:V,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=U,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=U,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=U,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,t,n,r,i){var o,a;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=undefined);for(a in e)this.on(a,t,n,e[a],i);return this}if(null==n&&null==r?(r=t,n=t=undefined):null==r&&("string"==typeof t?(r=n,n=undefined):(r=n,n=t,t=undefined)),r===!1)r=V;else if(!r)return this;return 1===i&&(o=r,r=function(e){return x().off(e),o.apply(this,arguments)},r.guid=o.guid||(o.guid=x.guid++)),this.each(function(){x.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,x(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(t===!1||"function"==typeof t)&&(n=t,t=undefined),n===!1&&(n=V),this.each(function(){x.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?x.event.trigger(e,t,n,!0):undefined}});var J=/^.[^:#\[\.,]*$/,Q=/^(?:parents|prev(?:Until|All))/,Y=x.expr.match.needsContext,K={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t=x(e,this),n=t.length;return this.filter(function(){var e=0;for(;n>e;e++)if(x.contains(this,t[e]))return!0})},not:function(e){return this.pushStack(et(this,e||[],!0))},filter:function(e){return this.pushStack(et(this,e||[],!1))},is:function(e){return!!et(this,"string"==typeof e&&Y.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],a=Y.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?g.call(x(e),this[0]):g.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function Z(e,t){while((e=e[t])&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return Z(e,"nextSibling")},prev:function(e){return Z(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return e.contentDocument||x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(K[e]||x.unique(i),Q.test(e)&&i.reverse()),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,t,n){var r=[],i=n!==undefined;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&x(e).is(n))break;r.push(e)}return r},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function et(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(J.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return g.call(t,e)>=0!==n})}var tt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,nt=/<([\w:]+)/,rt=/<|&#?\w+;/,it=/<(?:script|style|link)/i,ot=/^(?:checkbox|radio)$/i,at=/checked\s*(?:[^=]|=\s*.checked.)/i,st=/^$|\/(?:java|ecma)script/i,ut=/^true\/(.*)/,lt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ct={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ct.optgroup=ct.option,ct.tbody=ct.tfoot=ct.colgroup=ct.caption=ct.thead,ct.th=ct.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===undefined?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=ft(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=ft(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(mt(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&ht(mt(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++)1===e.nodeType&&(x.cleanData(mt(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var t=this[0]||{},n=0,r=this.length;if(e===undefined&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!it.test(e)&&!ct[(nt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(tt,"<$1></$2>");try{for(;r>n;n++)t=this[n]||{},1===t.nodeType&&(x.cleanData(mt(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=p.apply([],e);var r,i,o,a,s,u,l=0,c=this.length,f=this,d=c-1,h=e[0],g=x.isFunction(h);if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&at.test(h))return this.each(function(r){var i=f.eq(r);g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(r=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),i=r.firstChild,1===r.childNodes.length&&(r=i),i)){for(o=x.map(mt(r,"script"),pt),a=o.length;c>l;l++)s=r,l!==d&&(s=x.clone(s,!0,!0),a&&x.merge(o,mt(s,"script"))),t.call(this[l],s,l);if(a)for(u=o[o.length-1].ownerDocument,x.map(o,dt),l=0;a>l;l++)s=o[l],st.test(s.type||"")&&!H.access(s,"globalEval")&&x.contains(u,s)&&(s.src?x._evalUrl(s.src):x.globalEval(s.textContent.replace(lt,"")))}return this}}),x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=[],i=x(e),o=i.length-1,a=0;for(;o>=a;a++)n=a===o?this:this.clone(!0),x(i[a])[t](n),d.apply(r,n.get());return this.pushStack(r)}}),x.extend({clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=x.contains(e.ownerDocument,e);if(!(x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(a=mt(s),o=mt(e),r=0,i=o.length;i>r;r++)yt(o[r],a[r]);if(t)if(n)for(o=o||mt(e),a=a||mt(s),r=0,i=o.length;i>r;r++)gt(o[r],a[r]);else gt(e,s);return a=mt(s,"script"),a.length>0&&ht(a,!u&&mt(e,"script")),s},buildFragment:function(e,t,n,r){var i,o,a,s,u,l,c=0,f=e.length,p=t.createDocumentFragment(),d=[];for(;f>c;c++)if(i=e[c],i||0===i)if("object"===x.type(i))x.merge(d,i.nodeType?[i]:i);else if(rt.test(i)){o=o||p.appendChild(t.createElement("div")),a=(nt.exec(i)||["",""])[1].toLowerCase(),s=ct[a]||ct._default,o.innerHTML=s[1]+i.replace(tt,"<$1></$2>")+s[2],l=s[0];while(l--)o=o.firstChild;x.merge(d,o.childNodes),o=p.firstChild,o.textContent=""}else d.push(t.createTextNode(i));p.textContent="",c=0;while(i=d[c++])if((!r||-1===x.inArray(i,r))&&(u=x.contains(i.ownerDocument,i),o=mt(p.appendChild(i),"script"),u&&ht(o),n)){l=0;while(i=o[l++])st.test(i.type||"")&&n.push(i)}return p},cleanData:function(e){var t,n,r,i,o,a,s=x.event.special,u=0;for(;(n=e[u])!==undefined;u++){if(M.accepts(n)&&(o=n[H.expando],o&&(t=H.cache[o]))){if(r=Object.keys(t.events||{}),r.length)for(a=0;(i=r[a])!==undefined;a++)s[i]?x.event.remove(n,i):x.removeEvent(n,i,t.handle);H.cache[o]&&delete H.cache[o]}delete L.cache[n[L.expando]]}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}});function ft(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function pt(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function dt(e){var t=ut.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function ht(e,t){var n=e.length,r=0;for(;n>r;r++)H.set(e[r],"globalEval",!t||H.get(t[r],"globalEval"))}function gt(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(H.hasData(e)&&(o=H.access(e),a=H.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;r>n;n++)x.event.add(t,i,l[i][n])}L.hasData(e)&&(s=L.access(e),u=x.extend({},s),L.set(t,u))}}function mt(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return t===undefined||t&&x.nodeName(e,t)?x.merge([e],n):n}function yt(e,t){var n=t.nodeName.toLowerCase();"input"===n&&ot.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}var vt=/%20/g,xt=/\[\]$/,bt=/\r?\n/g,wt=/^(?:submit|button|image|reset|file)$/i,Tt=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&Tt.test(this.nodeName)&&!wt.test(e)&&(this.checked||!ot.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(bt,"\r\n")}}):{name:t.name,value:n.replace(bt,"\r\n")}}).get()}}),x.param=function(e,t){var n,r=[],i=function(e,t){t=x.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(t===undefined&&(t=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){i(this.name,this.value)});else for(n in e)Ct(n,e[n],t,i);return r.join("&").replace(vt,"+")};function Ct(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||xt.test(e)?r(e,i):Ct(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)Ct(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var Nt,kt,St=x.now(),Et=/\?/,Dt=/#.*$/,At=/([?&])_=[^&]*/,jt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Lt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ht=/^(?:GET|HEAD)$/,qt=/^\/\//,Ot=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Mt=x.fn.load,Ft={},Pt={},Rt="*/".concat("*");try{kt=i.href}catch($t){kt=o.createElement("a"),kt.href="",kt=kt.href}Nt=Ot.exec(kt.toLowerCase())||[];function Bt(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function It(e,t,n,r){var i={},o=e===Pt;function a(s){var u;return i[s]=!0,x.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):undefined:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function Wt(e,t){var n,r,i=x.ajaxSettings.flatOptions||{};for(n in t)t[n]!==undefined&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,t,n){if("string"!=typeof e&&Mt)return Mt.apply(this,arguments);var r,i,o,a=this,s=e.indexOf(" ");return s>=0&&(r=e.slice(s),e=e.slice(0,s)),x.isFunction(t)?(n=t,t=undefined):t&&"object"==typeof t&&(i="POST"),a.length>0&&x.ajax({url:e,type:i,dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?x("<div>").append(x.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){a.each(n,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:kt,type:"GET",isLocal:Lt.test(Nt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Rt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Wt(Wt(e,x.ajaxSettings),t):Wt(x.ajaxSettings,e)},ajaxPrefilter:Bt(Ft),ajaxTransport:Bt(Pt),ajax:function(e,t){"object"==typeof e&&(t=e,e=undefined),t=t||{};var n,r,i,o,a,s,u,l,c=x.ajaxSetup({},t),f=c.context||c,p=c.context&&(f.nodeType||f.jquery)?x(f):x.event,d=x.Deferred(),h=x.Callbacks("once memory"),g=c.statusCode||{},m={},y={},v=0,b="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(2===v){if(!o){o={};while(t=jt.exec(i))o[t[1].toLowerCase()]=t[2]}t=o[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===v?i:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return v||(e=y[n]=y[n]||e,m[e]=t),this},overrideMimeType:function(e){return v||(c.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>v)for(t in e)g[t]=[g[t],e[t]];else T.always(e[T.status]);return this},abort:function(e){var t=e||b;return n&&n.abort(t),N(0,t),this}};if(d.promise(T).complete=h.add,T.success=T.done,T.error=T.fail,c.url=((e||c.url||kt)+"").replace(Dt,"").replace(qt,Nt[1]+"//"),c.type=t.method||t.type||c.method||c.type,c.dataTypes=x.trim(c.dataType||"*").toLowerCase().match(w)||[""],null==c.crossDomain&&(s=Ot.exec(c.url.toLowerCase()),c.crossDomain=!(!s||s[1]===Nt[1]&&s[2]===Nt[2]&&(s[3]||("http:"===s[1]?"80":"443"))===(Nt[3]||("http:"===Nt[1]?"80":"443")))),c.data&&c.processData&&"string"!=typeof c.data&&(c.data=x.param(c.data,c.traditional)),It(Ft,c,t,T),2===v)return T;u=c.global,u&&0===x.active++&&x.event.trigger("ajaxStart"),c.type=c.type.toUpperCase(),c.hasContent=!Ht.test(c.type),r=c.url,c.hasContent||(c.data&&(r=c.url+=(Et.test(r)?"&":"?")+c.data,delete c.data),c.cache===!1&&(c.url=At.test(r)?r.replace(At,"$1_="+St++):r+(Et.test(r)?"&":"?")+"_="+St++)),c.ifModified&&(x.lastModified[r]&&T.setRequestHeader("If-Modified-Since",x.lastModified[r]),x.etag[r]&&T.setRequestHeader("If-None-Match",x.etag[r])),(c.data&&c.hasContent&&c.contentType!==!1||t.contentType)&&T.setRequestHeader("Content-Type",c.contentType),T.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+("*"!==c.dataTypes[0]?", "+Rt+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)T.setRequestHeader(l,c.headers[l]);if(c.beforeSend&&(c.beforeSend.call(f,T,c)===!1||2===v))return T.abort();b="abort";for(l in{success:1,error:1,complete:1})T[l](c[l]);if(n=It(Pt,c,t,T)){T.readyState=1,u&&p.trigger("ajaxSend",[T,c]),c.async&&c.timeout>0&&(a=setTimeout(function(){T.abort("timeout")},c.timeout));try{v=1,n.send(m,N)}catch(C){if(!(2>v))throw C;N(-1,C)}}else N(-1,"No Transport");function N(e,t,o,s){var l,m,y,b,w,C=t;2!==v&&(v=2,a&&clearTimeout(a),n=undefined,i=s||"",T.readyState=e>0?4:0,l=e>=200&&300>e||304===e,o&&(b=_t(c,T,o)),b=Xt(c,b,T,l),l?(c.ifModified&&(w=T.getResponseHeader("Last-Modified"),w&&(x.lastModified[r]=w),w=T.getResponseHeader("etag"),w&&(x.etag[r]=w)),204===e||"HEAD"===c.type?C="nocontent":304===e?C="notmodified":(C=b.state,m=b.data,y=b.error,l=!y)):(y=C,(e||!C)&&(C="error",0>e&&(e=0))),T.status=e,T.statusText=(t||C)+"",l?d.resolveWith(f,[m,C,T]):d.rejectWith(f,[T,C,y]),T.statusCode(g),g=undefined,u&&p.trigger(l?"ajaxSuccess":"ajaxError",[T,c,l?m:y]),h.fireWith(f,[T,C]),u&&(p.trigger("ajaxComplete",[T,c]),--x.active||x.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,t){return x.get(e,undefined,t,"script")}}),x.each(["get","post"],function(e,t){x[t]=function(e,n,r,i){return x.isFunction(n)&&(i=i||r,r=n,n=undefined),x.ajax({url:e,type:t,dataType:i,data:n,success:r})}});function _t(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),r===undefined&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);
break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}return o?(o!==u[0]&&u.unshift(o),n[o]):undefined}function Xt(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(a=l[u+" "+o]||l["* "+o],!a)for(i in l)if(s=i.split(" "),s[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){a===!0?a=l[i]:l[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(f){return{state:"parsererror",error:a?f:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}x.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var zt=x.ajaxSettings.xhr(),Ut={0:200,1223:204},Vt=0,Gt={};e.ActiveXObject&&x(e).on("unload",function(){for(var e in Gt)Gt[e]();Gt=undefined}),x.support.cors=!!zt&&"withCredentials"in zt,x.support.ajax=zt=!!zt,x.ajaxTransport(function(e){var t;return x.support.cors||zt&&!e.crossDomain?{send:function(n,r){var i,o,a=e.xhr();if(a.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)a[i]=e.xhrFields[i];e.mimeType&&a.overrideMimeType&&a.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(i in n)a.setRequestHeader(i,n[i]);t=function(e){return function(){t&&(delete Gt[o],t=a.onload=a.onerror=null,"abort"===e?a.abort():"error"===e?r(a.status||404,a.statusText):r(Ut[a.status]||a.status,a.statusText,"string"==typeof a.responseText?{text:a.responseText}:undefined,a.getAllResponseHeaders()))}},a.onload=t(),a.onerror=t("error"),t=Gt[o=Vt++]=t("abort"),a.send(e.hasContent&&e.data||null)},abort:function(){t&&t()}}:undefined}),"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}),"object"==typeof e&&"object"==typeof e.document&&(e.jQuery=e.$=x)})(window);// Module rhoapi

var Rho = Rho || (function ($) {
    'use strict';

    // === API configuration ========================================================

    var thisFileName = 'rhoapi.js';

    var RHO_ID_PARAM = '__rhoID';
    var RHO_CLASS_PARAM = '__rhoClass';
    var RHO_CALLBACK_PARAM = '__rhoCallback';

    var API_CONTROLLER_URL = '/system/js_api_entrypoint';
    //var API_CALLBACK_BASE_URL = '/system/js_api_entrypoint';
    var API_CALLBACK_BASE_URL = '';

    var NOT_INSTANCE_ID = '0';

    // === Core parts ============================================================

    var idCount = 0;
    var pendingCallbacks = {};

    function getVmID() {
        return window['__rhoJsVmID'] || null;
    }

    function defaultEmptyCallback() {
    }

    function nextId(tag) {
        if ('undefined' == typeof tag || !tag)
            tag = RHO_ID_PARAM;

        return (tag + '#' + idCount++);
    }

    function toBool(value) {
        if (value && 'string' == typeof value) {
            return (value.toLowerCase() == "true")
        }
        return false;
    }

    function prepareCallback(callback, /*opt*/ isPersistent, /*opt*/ id) {
        /*
        Rho.Log.info('prepareCallback.callback: type: ' + typeof callback,"JSC");
        Rho.Log.info('prepareCallback.callback: isPersistent: ' + isPersistent,"JSC");
        Rho.Log.info('prepareCallback.callback: id: ' + id,"JSC");
        */

        if ('string' == typeof callback)
            return callback;

        if ('function' != typeof callback)
            callback = defaultEmptyCallback;

        if ('undefined' == typeof id || !id)
            id = nextId();

        var data = {
            id: id,
            callback: callback,
            isPersistent: ('undefined' != typeof isPersistent) && isPersistent
        };

        pendingCallbacks[id] = data;

        /*
        var arr = [], p, i = 0;
        for (p in data) {
            arr[i++] = " " + p + " : " + data[p]+" ";
        }
        var str = arr.join(', ');

        Rho.Log.info('prepareCallback.callback: pendingCallbacks: {' + str + "}","JSC");
        */
        // store options for pending callback
        return API_CALLBACK_BASE_URL + id;
    }

    function scanForInstances(value) {
        for (var prop in value) {
            if (!value.hasOwnProperty(prop)) continue;
            if ('object' == typeof value[prop]) {
                value[prop] = createInstances(value[prop]);
            }
        }
        return value;
    }

    function createInstances(value) {
        if ('object' == typeof value) {
            if (value[RHO_ID_PARAM] && value[RHO_CLASS_PARAM]) {
                return objectForClass(value[RHO_CLASS_PARAM], value[RHO_ID_PARAM]);
            } else {
                return scanForInstances(value);
            }
        }
        return value;
    }

    function jsValue(result) {

        if ('undefined' == typeof result)
            throw 'Invalid API JSON response';

        if (null == result || 'object' != typeof result)
            return result;

        var value = $.extend(result instanceof Array ? [] : {}, result);

        return createInstances(value);
    }

    function namesToProps(names) {
        var namesObj = {};
        if ("string" == typeof names) {
            names = names.split(/[\s\,]/);
        }
        if (names instanceof Array) {
            for (var i = 0; i < names.length; i++) {
                if (0 < names[i].length)
                    namesObj[names[i]] = null;
            }
        } else if (names instanceof Object) {
            namesObj = names;
        }
        return namesObj;
    }

    function namesToArray(names) {
        var namesArray = [];
        if ("string" == typeof names) {
            names = names.split(/[\s\,]/);
        }
        if (names instanceof Array) {
            for (var i = 0; i < names.length; i++) {
                if (0 < names[i].length)
                    namesArray.push(names[i]);
            }
        } else if (names instanceof Object) {
            for (var name in names) {
                if (names.hasOwnProperty(name) && 0 < name.length)
                    namesArray.push(name);
            }
        }
        return namesArray;
    }

    var reqIdCount = 0;

    function wrapFunctions(key, value) {
        if ('function' != typeof value) return value;

        return RHO_CALLBACK_PARAM + ":" + prepareCallback(value, true);
    }

    function commonReq(params) {

        var valueCallback = null;

        if ("number" == typeof params.valueCallbackIndex) {
            if (params.valueCallbackIndex < params.args.length - 1)
                throw 'Generated API method error: wrong position for value callback argument!';

            if (params.valueCallbackIndex == params.args.length - 1)
                valueCallback = params.args.pop();

            if (valueCallback && "function" != typeof valueCallback)
                throw 'Value callback should be a function!';
        }

        var persistentCallback = null;
        var persistentCallbackOptParams = null;

        if ("number" == typeof params.persistentCallbackIndex) {
            if (params.persistentCallbackIndex < params.args.length - 2)
                throw 'Generated API method error: wrong position for persistent callback argument!';

            if (params.persistentCallbackIndex == params.args.length - 2) {
                persistentCallbackOptParams = params.args.pop();
                persistentCallback = params.args.pop();
            } else if (params.persistentCallbackIndex == params.args.length - 1) {
                persistentCallback = params.args.pop();
            }

            if (persistentCallback && 'function' != typeof persistentCallback)
                throw 'Persistent callback should be a function!';

            if (persistentCallbackOptParams && 'string' != typeof persistentCallbackOptParams)
                throw 'Persistent callback optional parameters should be a string!';

            var persistentCallbackOptParams = persistentCallbackOptParams || null;

            if (persistentCallback)
                persistentCallback = prepareCallback(persistentCallback, true);
        }

        var cmd = { 'method': params.method, 'params': params.args };

        cmd[RHO_CLASS_PARAM] = params.module;
        cmd[RHO_ID_PARAM] = params.instanceId || null;
        cmd['jsonrpc'] = '2.0';
        cmd['id'] = reqIdCount++;

        if (persistentCallback) {
            cmd[RHO_CALLBACK_PARAM] = {
                id: persistentCallback,
                vmID: getVmID(),
                optParams: persistentCallbackOptParams
            };
        }

        var cmdText = JSON.stringify(cmd, wrapFunctions);
        //console.log(cmdText);

        var result = null;
        var deferred = new $.Deferred(function (dfr) {

            function handleResult(rawResult) {
                result = jsValue(rawResult);
                dfr.resolve(result);
                if (valueCallback) {
                    valueCallback(result);
                }
            }

            function handleError(errObject) {
                dfr.reject(errObject.message, errObject.code);
                throw errObject.message;
            }

            Rho.platform.nativeApiCall(cmdText, null != valueCallback, function (result) {
                if (result['error'])
                    handleError(result['error']);
                else
                    handleResult(result['result']);
            });

        }).promise();

        return (null != valueCallback) ? deferred : result;
    }

    function apiReqFor(module) {
        return function (params) {
            params.args = Array.prototype.slice.call(params.args);
            if ('getProperties' == params.method && 0 < params.args.length) {
                params.args[0] = namesToArray(params.args[0]);
            }
            params.module = module;
            params.method = params.method;
            return commonReq(params);
        };
    }

    function extendSafely(destination, source, override) {
        var src = source;
        var dst = destination;
        var sourceIsFunc = false;

        if ('function' == typeof src) {
            if ('function' == typeof dst && !override)
                throw "Namespace definition conflict!";

            sourceIsFunc = true;
            src = destination;
            dst = source;
        }

        for (var prop in src) {
            if (!src.hasOwnProperty(prop)) continue;
            if (dst.hasOwnProperty(prop) && !override) continue;
            if ('prototype' == prop) {
                if(sourceIsFunc) continue;

                if('object' != typeof dst[prop])
                    dst[prop] = {};
                for (var subProp in src[prop]) {
                    if (!src[prop].hasOwnProperty(subProp)) continue;
                    dst[prop][subProp] = src[prop][subProp];
                }
                continue;
            }
            dst[prop] = src[prop];
        }
        return dst;
    }

    function namespace(nsPathStr, membersObj, override) {
        membersObj = membersObj || {};

        var ns = window;
        var parts = nsPathStr.split(/[\:\.]/);
        var nsLog = '';

        for (var i = 0; i < parts.length; i++) {
            var nsProp = parts[i];
            nsLog = nsLog + (i == 0 ? '' : '.') + nsProp;

            var subNs = ns[nsProp];
            if (!(subNs instanceof Object || 'undefined' == typeof subNs)) {
                throw "Namespace " + nsLog + " is already defined and it isn't an object!";
            }

            if (i == parts.length - 1) {
                if (ns[nsProp])
                    ns[nsProp] = extendSafely(ns[nsProp], membersObj, override);
                else
                    ns[nsProp] = membersObj;
            }
            ns[nsProp] = ns[nsProp] || {};
            ns = ns[nsProp];
        }
        return ns;
    }

    // === Property proxy support ====================================================

    var propsSupport = {
        ffHackKeywords: false,
        ffHackMethod: false,
        js185: false
    };

    (function propertySupportCheck() {
        propsSupport.ffHackKeywords = (function supported_firefoxHack_keywords() {
            var testObj = {};
            var okGet = false;
            var okSet = false;
            try {
                testObj = {
                    get propGet() {
                        okGet = true;
                        return okGet;
                    },
                    set propSet(val) {
                        okSet = val;
                    }
                };
                testObj.propSet = testObj.propGet;
            } catch (ex) {};
            return okGet && okSet;
        })();

        propsSupport.ffHackMethod = (function supported_firefoxHack_method() {
            var testObj = {};
            var okGet = false;
            var okSet = false;
            try {
                testObj.__defineGetter__('propGet', function () {
                    okGet = true;
                    return okGet;
                });
                testObj.__defineSetter__('propSet', function (val) {
                    okSet = val;
                });

                testObj.propSet = testObj.propGet;
            } catch (ex) {};
            return okGet && okSet;
        })();

        propsSupport.js185 = (function supported_js185_standard() {
            var testObj = {};
            var okGet = false;
            var okSet = false;
            try {
                Object.defineProperty(testObj, 'propGet', {
                    get: function () {
                        okGet = true;
                        return okGet;
                    }
                });
                Object.defineProperty(testObj, 'propSet', {
                    set: function (val) {
                        okSet = val;
                    }
                });
                testObj.propSet = testObj.propGet;
            } catch (ex) {};
            return okGet && okSet;
        })();
    })();
    // at this point we have property support level already detected

    // Here is default (fallback option) implementation of property using explicit accessors.
    // It will be used in case we have no any support for natural props syntax in a browser.
    // Usage sample: obj.setSomething(123), var abc = obj.getSomething()
    // ====================================================================================
    var createPropProxy_fallback = function (obj, propDescr, getter, setter) {
        var propName = propDescr.split(':')[0];

        function accessorName(accessor, propDescr) {
            var names = propDescr.split(':');
            var propName = names[0];
            var getterName = names[1];
            var setterName = names[2];

            if (('get' == accessor) && getterName)
                return getterName;

            if (('set' == accessor) && setterName)
                return setterName;

            return accessor + propName.charAt(0).toUpperCase() + propName.slice(1);
        }

        if (null != getter && 'function' == typeof getter) {
            obj[accessorName('get', propDescr)] = getter; 
        }
        if (null != setter && 'function' == typeof setter) {
            obj[accessorName('set', propDescr)] = setter; 
        }
    };

    var createPropProxy = createPropProxy_fallback;

    if (propsSupport.js185) {
        // the best case, js185 props are supported
        createPropProxy = function (obj, propDescr, getter, setter) {
            var propName = propDescr.split(':')[0];

            // TODO: implement enumeration of propProxy to extend target namespace with them.
            var js185PropDef = {configurable: true, enumerable: false /* true */};
            if (null != getter && 'function' == typeof getter) {
                js185PropDef['get'] = getter;
            }
            if (null != setter && 'function' == typeof setter) {
                js185PropDef['set'] = setter;
            }
            Object.defineProperty(obj, propName, js185PropDef);
        };
    } else if (propsSupport.ffHackMethod) {
        // backup option, props are supported with firefox hack
        createPropProxy = function (obj, propDescr, getter, setter) {
            var propName = propDescr.split(':')[0];

            obj.__defineGetter__(propName, getter);
            obj.__defineSetter__(propName, setter);
        };
    } else {
        // Sorry, no luck. We able provide just a default implementation with explicit accessors.
        // It is the best thing we can do in this case.
    }

    // ====================================================================================

    function propAccessReqFunc(apiReqFunc, propName, rw, idFunc, customFunc) {
        var isSet = ('w' == rw);

        var propNameParts = propName.split(':');

        propName = propNameParts[0];
        var methodGet = propName;
        var methodSet = propName + '=';

        if (2 < propNameParts.length)
            methodSet = propNameParts[2];

        if (1 < propNameParts.length)
            methodGet = propNameParts[1];

        return function () {
            try {
                if ('function' == typeof customFunc)
                    return customFunc.apply(this, arguments);
            } catch(ex) {
                throw "Custom accessor function exception: " + ex;
            }

            return apiReqFunc({
                instanceId: ('function' == typeof idFunc) ? idFunc.apply(this, []) : NOT_INSTANCE_ID,
                args: arguments,
                method: isSet ? methodSet : methodGet,
                valueCallbackIndex: (isSet ? 1 : 0)
            });
        };
    }

    var incompatibleProps = [];

    // Properties bulk definition.
    // Sample:
    //
    //    Rho.util.createPropsProxy(Application, {
    //        'publicFolder': 'r',
    //        'startURI': 'rw',
    //        'version': 'r',
    //        'title': 'rw'
    //    }, apiReq);
    //
    function createPropsProxy(obj, propDefs, apiReq, idFunc) {
        if (!(propDefs instanceof Array))
            throw 'Property definitions list should be Array instance';

        for (var i=0; i<propDefs.length; i++) {
            var propDef = propDefs[i];
            var propAccess = propDef['propAccess'];

            var getter = (0 <= propAccess.indexOf('r')) ? propAccessReqFunc(apiReq, propDef['propName'], 'r', idFunc, propDef['customGet']) : null;
            var setter = (0 <= propAccess.indexOf('w')) ? propAccessReqFunc(apiReq, propDef['propName'], 'w', idFunc, propDef['customSet']) : null;

            try {
                createPropProxy(obj, propDef['propName'], getter, setter);
            } catch (ex) {
                // we unable to create property with this name, so log it
                incompatibleProps.push(name);
            }
            // create explicit accessors
            createPropProxy_fallback(obj, propDef['propName'], getter, setter);
        }
    }

    // entity property support =======================================================

    function createRawPropsProxy(obj, propDefs, force_fallback ) {
        if (!(propDefs instanceof Array))
            throw 'Property definitions list should be Array instance';

        if (createPropProxy != createPropProxy_fallback || true == force_fallback) {
            for (var i=0; i<propDefs.length; i++) {
                var propDef = propDefs[i];

                try {
                    createPropProxy(obj, propDef['propName'], propDef['propGetter'], propDef['propSetter']);
                } catch (ex) {
                    // we unable to create property with this name, so log it
                    incompatibleProps.push(name);
                }
            }
        }
    }

    // === Method calls =========================================================

    function methodAccessReqFunc(nativeName, persistentCallbackIndex, valueCallbackIndex, apiReq, idFunc) {
        return function() {
            return apiReq({
                instanceId: ('function' == typeof idFunc) ? idFunc.apply(this, []) : NOT_INSTANCE_ID,
                args: arguments,
                method: nativeName,
                persistentCallbackIndex: persistentCallbackIndex,
                valueCallbackIndex: valueCallbackIndex
            });
        }
    }

    function createMethodsProxy(obj, methodDefs, apiReq, idFunc) {
        if (!(methodDefs instanceof Array))
            throw 'Property definitions list should be Array instance';
        
        for (var i=0; i<methodDefs.length; i++) {
            var methodDef = methodDefs[i];
            try {
                obj[methodDef['methodName']] = methodAccessReqFunc(
                    methodDef['nativeName'],
                    methodDef['persistentCallbackIndex'],
                    methodDef['valueCallbackIndex'],
                    apiReq, idFunc
                );
            } catch (ex) {
                // we unable to create property with this name, so log it..
                incompatibleProps.push(methodDef['methodName']);
            }
        }
    }

    function namespaceAlias(ns, parent, alias) {
        if (!parent) throw 'No parent namespace for alias!';
        if (parent[alias]) throw 'Alias definition conflict!';

        parent[alias] = ns;
    }

    // === Factory handling =========================================================

    function objectForClass(className, id) {
        var instObject = {};
        instObject[RHO_CLASS_PARAM] = className;
        instObject[RHO_ID_PARAM] = id;
        return new (namespace(className))(instObject);
    }

    // === Modules loading implementation ============================================

    function loadCSS(url) {
        $('<link>').attr('rel', 'stylesheet').attr('href', url).appendTo('head');
    }

    function loadScript(url) {
        $('<script>').attr('type', 'text/javascript').attr('src', url).appendTo('head');
    }

    var thisFileURL = $("script[src$='" + thisFileName + "']").attr('src');
    //
    function loadApiModule(moduleName) {
        loadScript(thisFileURL.replace(thisFileName, moduleName + '.js'));
    }

    //
    function loadApiModules(parts) {
        for (var i = 0; i < parts.length; i++) {
            loadApiModule(parts[i]);
        }
    }

    // === Callback handler ==========================================================

    function callbackHandler(callbackId, resultObj) {
        var cbId = decodeURIComponent(callbackId);
        //console.log('Rho.callback_handler: callback for: ' +cbId);
        //console.log('Rho.callback_handler: resultObj: ' +resultObj);

        var opts = pendingCallbacks[cbId];

        if ('object' == typeof opts && opts) {
            //console.log('Rho.callback_handler: callback found!');

            if ('function' == typeof opts.callback) {
                var result = null;
                var err = null;
                if (resultObj) {
                    err = resultObj['error'];
                    if (!err)
                        result = jsValue(resultObj['result']);
                }
                opts.callback(result, err);
            }

            if (!opts.isPersistent)
                delete pendingCallbacks[cbId];
        }
    };

    // === Native API call ===========================================================

    var apiPort = 'RHO_AJAX-->12345<--PORT_NUMBER'; // to be set at run or build time.
    var apiBaseUrl = 'http://127.0.0.1';
    var apiUrl = null;

    function apiControllerUrl() {
        // it has been already detected
        if (apiUrl)
            return apiUrl;

        // it may be hardcoded by developer in html this way:
        //
        //      window['__rho_ajaxBaseUrl'] = 'http://some_server:12345/some/root/path';
        //
        var baseUrl = window[Rho.util.flag.API_AJAX_URL];
        if (baseUrl)
            return (apiUrl = baseUrl);

        // it should be a default value for other protocols
        if (0 != window.location.protocol.indexOf('file'))
            return (apiUrl = API_CONTROLLER_URL);

        // in case of none of above we are going to detect it
        var portStr = apiPort.replace(/[\-<>A-Z_]*/g, '');
        var port = Number(portStr);

        if (0 < portStr.length && !isNaN(port))
            return (apiUrl = (apiBaseUrl.replace(/\/$/, '') +':'+ port + API_CONTROLLER_URL));

        throw 'Unknown API AJAX URL for application loaded with file:// protocol';
    }

    function nativeApiCall_ajax(cmdText, async, resultHandler) {
        $.ajax({
            async: async,
            type: 'post',
            url: apiControllerUrl(),
            data: cmdText,
            dataType: 'json',
            headers: {'Accept': 'text/plain'}
        }).done(function (data) {
            resultHandler(data);
        }).fail(function (xhr, status, message) {
            resultHandler({error: {message: message, code: xhr.statusCode()}});
        });
    }

    // === Old API support ===========================================================

    function importOldApiTo(namespace) {
        // move non-conflicting modules from old js api to this one
        if ('undefined' != typeof window.RhoOld) {
            if ('object' == typeof window.RhoOld) {
                for (var prop in window.RhoOld) {
                    if (window.RhoOld.hasOwnProperty(prop)
                        && 'undefined' != typeof window.RhoOld[prop]
                        && 'undefined' == typeof namespace[prop]) {

                        namespace[prop] = window.RhoOld[prop];
                    }
                }
            }
            //delete window.RhoOld;
            window.RhoOld = undefined;
        }
        return namespace;
    }

    // === Utility internal methods ==================================================

    var util = {
        flag: {
            API_AJAX_URL: '__rho_apiAjaxURL',
            USE_AJAX_BRIDGE: '__rho_useAjaxBridge',
            NATIVE_BRIDGE_TYPE: '__rho_nativeBridgeType'
        },
        loadApiModules: loadApiModules,
        namespace: namespace,
        namespaceAlias: namespaceAlias,
        apiReqFor: apiReqFor,
        namesToProps: namesToProps,
        namesToArray: namesToArray,
        createPropsProxy: createPropsProxy,
        createRawPropsProxy: createRawPropsProxy,
        createMethodsProxy: createMethodsProxy,
        methodAccessReqFunc: methodAccessReqFunc,
        incompatibleProps: incompatibleProps,
        rhoIdParam: function () { return RHO_ID_PARAM },
        rhoClassParam: function () { return RHO_CLASS_PARAM },
        nextId: nextId
    };

    var platform = {
        id: {
            AJAX: 'ajax',
            AUTO: 'auto',
            RHOSIMULATOR: 'rhosimulator',
            ANDROID: 'android',
            IPHONE:  'iphone',
            WP8: 'wp8',
            WM: 'wm',
            WIN32: 'win32'
        },
        nativeApiCall: nativeApiCall_ajax,
        nativeApiResult: function(){/* intentionally empty stub function */}
    }

    // === Public interface ==========================================================

    return importOldApiTo({
            jQuery: $,
            util: util,
            platform: platform,
            callbackHandler: callbackHandler
    });

})(jQuery.noConflict(true));

(function ($, rho, rhoPlatform, rhoUtil) {
    'use strict';

    /* ========================================================================
    You can force bridge type here, you can use it as:
        window[rhoUtil.flag.NATIVE_BRIDGE_TYPE] = rhoPlatform.id.ANDROID;

    Or this way:
        window[rhoUtil.flag.NATIVE_BRIDGE_TYPE] = 'android';

    Also, you can configure it right from your HTML file:
        window['__rho_nativeBridgeType'] = 'android';

    Just uncomment the line below and set appropriate value.
    ======================================================================== */
    //window[rhoUtil.flag.NATIVE_BRIDGE_TYPE] = rhoPlatform.id.AJAX;

    if (window[rhoUtil.flag.NATIVE_BRIDGE_TYPE] && window[rhoUtil.flag.NATIVE_BRIDGE_TYPE] == rhoPlatform.id.AJAX) return;

    var RHO_API_CALL_TAG = '__rhoNativeApiCall';
    var RHO_API_TAG = '__rhoNativeApi';

    var bridges = {};
    var addBridge = function(platformId, bridgeFactory) {
        bridges[platformId] = function() {
            var bridge = bridgeFactory();
            bridge.apiCall.platformId = platformId;
            return bridge;
        };
    };

    addBridge(rhoPlatform.id.ANDROID, function() {
        return {
            apiCall: function (cmdText, async, resultHandler) {
                var nativeApiResult = {};
                if (window[RHO_API_TAG] && 'function' == typeof window[RHO_API_TAG]['apiCall']) {
                    nativeApiResult = window[RHO_API_TAG].apiCall(cmdText, async);
                } else {
                    nativeApiResult = prompt(cmdText, RHO_API_CALL_TAG + ':prompt');
                }
                resultHandler(JSON.parse(nativeApiResult));
            }
        };
    });

    addBridge(rhoPlatform.id.IPHONE, function() {
        return window[RHO_API_TAG] || {
            apiCall: function (cmdText, async, resultHandler) {
                var headers = {};
                headers[RHO_API_CALL_TAG] = cmdText;
                $.ajax({
                    async: async,
                    type: 'head',
                    url: '/!'+RHO_API_TAG+'?' + (+new Date()),
                    dataType: 'json',
                    headers: headers
                }).done(function (data, status, jqXHR) {
                        resultHandler(JSON.parse(jqXHR.responseText));
                }).fail(function (xhr, status, message) {
                    resultHandler({error: {message: message, code: xhr.statusCode()}});
                });
            }
        };
    });

    addBridge(rhoPlatform.id.WP8, function() {
        var apiResult = undefined;
        rhoPlatform.nativeApiResult = function(result) { apiResult = result; };
        window['__rhoNativeApiResult'] = rhoPlatform.nativeApiResult;

        return {
            apiCall: function (cmdText, async, resultHandler) {
                window.external.notify(cmdText);
                resultHandler(JSON.parse(apiResult));
            }
        }
    });

    addBridge(rhoPlatform.id.WM, function() {
        var bridge = new WebkitBridge();
        return {
            apiCall: function (cmdText, async, resultHandler) {
                var apiResult = bridge.framework(cmdText);
                resultHandler(JSON.parse(apiResult));
            }
        }
    });

    addBridge(rhoPlatform.id.RHOSIMULATOR, function() {
        return {
            apiCall: function (cmdText, async, resultHandler) {
                var nativeApiResult = {};

                if (window[RHO_API_TAG] && 'function' == typeof window[RHO_API_TAG]['apiCall']) {
                    nativeApiResult = window[RHO_API_TAG].apiCall(cmdText, async);
                }
                resultHandler(JSON.parse(nativeApiResult));
            }
        };
    });

    addBridge(rhoPlatform.id.WIN32, function() {
        return {
            apiCall: function (cmdText, async, resultHandler) {
                var nativeApiResult = {};

                if (window[RHO_API_TAG] && 'function' == typeof window[RHO_API_TAG]['apiCall']) {
                    nativeApiResult = window[RHO_API_TAG].apiCall(cmdText, async);
                }
                resultHandler(JSON.parse(nativeApiResult));
            }
        };
    });

    // the order is important
    var bridgeMapping = [
        [/RhoSimulator/                    , bridges[rhoPlatform.id.RHOSIMULATOR]],
        [/Android/                         , bridges[rhoPlatform.id.ANDROID]     ],
        [/iPhone|iPod|iPad/                , bridges[rhoPlatform.id.IPHONE]      ],
        [/Windows\s+Phone/                 , bridges[rhoPlatform.id.WP8]         ],
        [/Windows\s+(?:Mobile|CE)|WM [0-9]/, bridges[rhoPlatform.id.WM]          ],
        [/Windows/                         , bridges[rhoPlatform.id.WIN32]       ]
    ];

    // use forced bridge type value
    var platformBridge = bridges[window[rhoUtil.flag.NATIVE_BRIDGE_TYPE]];


    // autodetect bridge type
    if (!platformBridge) {
        for (var i = 0; i < bridgeMapping.length; ++i) {
            if (bridgeMapping[i][0].test(navigator.userAgent)) {
                platformBridge = bridgeMapping[i][1];
                break;
            }
        }
    }

    if (platformBridge) {
        rhoPlatform.nativeApiCall = platformBridge().apiCall;
    } else {
        throw 'User-Agent [' + navigator.userAgent + '] does not match any known platform. Going to use AJAX bridge.';
    }

})(Rho.jQuery, Rho, Rho.platform, Rho.util);
// Module Rho.Application


(function ($, rho, rhoUtil) {
    'use strict';

    var moduleNS = 'Rho.Application';
    var apiReq = rhoUtil.apiReqFor(moduleNS);


    // === Application class definition ===

    function Application() {
        var id = null;
        this.getId = function () {return id;};

        if (1 == arguments.length && arguments[0][rhoUtil.rhoIdParam()]) {
            if (moduleNS != arguments[0][rhoUtil.rhoClassParam()]) {
                throw "Wrong class instantiation!";
            }
            id = arguments[0][rhoUtil.rhoIdParam()];
        } else {
            id = rhoUtil.nextId();
            // constructor methods are following:
            
        }
    };

    // === Application instance properties ===

    rhoUtil.createPropsProxy(Application.prototype, [
    ], apiReq, function(){ return this.getId(); });

    // === Application instance methods ===

    rhoUtil.createMethodsProxy(Application.prototype, [
    
    ], apiReq, function(){ return this.getId(); });

    

    rhoUtil.createRawPropsProxy(Application.prototype, [
    ]);

    // === Application constants ===

    
            Application.APP_EVENT_ACTIVATED = 'Activated'; 
    
            Application.APP_EVENT_CONFIGCONFLICT = 'ConfigConflict'; 
    
            Application.APP_EVENT_DBMIGRATESOURCE = 'DBMigrateSource'; 
    
            Application.APP_EVENT_DEACTIVATED = 'Deactivated'; 
    
            Application.APP_EVENT_SCREEN_OFF = 'ScreenOff'; 
    
            Application.APP_EVENT_SCREEN_ON = 'ScreenOn'; 
    
            Application.APP_EVENT_SYNCUSERCHANGED = 'SyncUserChanged'; 
    
            Application.APP_EVENT_UICREATED = 'UICreated'; 
    
            Application.APP_EVENT_UIDESTROYED = 'UIDestroyed'; 
    



    // === Application static properties ===

    rhoUtil.createPropsProxy(Application, [
        { propName: 'appBundleFolder', propAccess: 'r' }
      , { propName: 'appsBundleFolder', propAccess: 'r' }
      , { propName: 'bundleFolder', propAccess: 'r' }
      , { propName: 'userFolder', propAccess: 'r' }
      , { propName: 'configPath', propAccess: 'r' }
      , { propName: 'modelsManifestPath', propAccess: 'r' }
      , { propName: 'databaseBlobFolder', propAccess: 'r' }
      , { propName: 'publicFolder', propAccess: 'r' }
      , { propName: 'startURI', propAccess: 'rw' }
      , { propName: 'settingsPageURI', propAccess: 'rw' }
      , { propName: 'splash', propAccess: 'r' }
      , { propName: 'version', propAccess: 'r' }
      , { propName: 'title', propAccess: 'rw' }
      , { propName: 'appName', propAccess: 'r' }
      , { propName: 'locale', propAccess: 'r' }
      , { propName: 'country', propAccess: 'r' }
      , { propName: 'nativeMenu', propAccess: 'rw' }
      , { propName: 'defaultNativeMenu', propAccess: 'r' }
      , { propName: 'securityTokenNotPassed', propAccess: 'r' }
      , { propName: 'invalidSecurityTokenStartPath', propAccess: 'r' }
      , { propName: 'rhoPlatformVersion', propAccess: 'r' }
      , { propName: 'badLinkURI', propAccess: 'r' }
    ], apiReq);

    // === Application static methods ===

    rhoUtil.createMethodsProxy(Application, [
    
          // function(/* const rho::String& */ name, /* optional function */ oResult)
          { methodName: 'modelFolderPath', nativeName: 'modelFolderPath', valueCallbackIndex: 1 }
    
          // function(/* const rho::String& */ partitionName, /* optional function */ oResult)
        , { methodName: 'databaseFilePath', nativeName: 'databaseFilePath', valueCallbackIndex: 1 }
    
          // function(/* const rho::String& */ relativePath, /* optional function */ oResult)
        , { methodName: 'expandDatabaseBlobFilePath', nativeName: 'expandDatabaseBlobFilePath', valueCallbackIndex: 1 }
    
          // function(/* const rho::String& */ absolutePath, /* optional function */ oResult)
        , { methodName: 'relativeDatabaseBlobFilePath', nativeName: 'relativeDatabaseBlobFilePath', valueCallbackIndex: 1 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'quit', nativeName: 'quit', valueCallbackIndex: 0 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'minimize', nativeName: 'minimize', valueCallbackIndex: 0 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'restore', nativeName: 'restore', valueCallbackIndex: 0 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'setApplicationNotify', nativeName: 'setApplicationNotify', persistentCallbackIndex: 0, valueCallbackIndex: 2 }
    
    ], apiReq);

    // === Application default instance support ===
    

    rhoUtil.namespace(moduleNS, Application);

    

    

})(Rho.jQuery, Rho, Rho.util);
// Module Rho.Database


(function ($, rho, rhoUtil) {
    'use strict';

    var moduleNS = 'Rho.Database';
    var apiReq = rhoUtil.apiReqFor(moduleNS);


    // === Database class definition ===

    function Database() {
        var id = null;
        this.getId = function () {return id;};

        if (1 == arguments.length && arguments[0][rhoUtil.rhoIdParam()]) {
            if (moduleNS != arguments[0][rhoUtil.rhoClassParam()]) {
                throw "Wrong class instantiation!";
            }
            id = arguments[0][rhoUtil.rhoIdParam()];
        } else {
            id = rhoUtil.nextId();
            // constructor methods are following:
            
        }
    };

    // === Database instance properties ===

    rhoUtil.createPropsProxy(Database.prototype, [
    ], apiReq, function(){ return this.getId(); });

    // === Database instance methods ===

    rhoUtil.createMethodsProxy(Database.prototype, [
    
    ], apiReq, function(){ return this.getId(); });

    

    rhoUtil.createRawPropsProxy(Database.prototype, [
    ]);

    // === Database constants ===

    



    // === Database static properties ===

    rhoUtil.createPropsProxy(Database, [
    ], apiReq);

    // === Database static methods ===

    rhoUtil.createMethodsProxy(Database, [
    
    ], apiReq);

    // === Database default instance support ===
    

    rhoUtil.namespace(moduleNS, Database);

    

    

})(Rho.jQuery, Rho, Rho.util);
// Module Rho.Database.SQLite3


(function ($, rho, rhoUtil) {
    'use strict';

    var moduleNS = 'Rho.Database.SQLite3';
    var apiReq = rhoUtil.apiReqFor(moduleNS);


    // === SQLite3 class definition ===

    function SQLite3() {
        var id = null;
        this.getId = function () {return id;};

        if (1 == arguments.length && arguments[0][rhoUtil.rhoIdParam()]) {
            if (moduleNS != arguments[0][rhoUtil.rhoClassParam()]) {
                throw "Wrong class instantiation!";
            }
            id = arguments[0][rhoUtil.rhoIdParam()];
        } else {
            id = rhoUtil.nextId();
            // constructor methods are following:
            
                this.open.apply(this, arguments);
            
        }
    };

    // === SQLite3 instance properties ===

    rhoUtil.createPropsProxy(SQLite3.prototype, [
    ], apiReq, function(){ return this.getId(); });

    // === SQLite3 instance methods ===

    rhoUtil.createMethodsProxy(SQLite3.prototype, [
    
          // function(/* const rho::String& */ dbPath, /* const rho::String& */ dbPartition, /* optional function */ oResult)
          { methodName: 'open', nativeName: 'open', valueCallbackIndex: 2 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'close', nativeName: 'close', valueCallbackIndex: 0 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'startTransaction', nativeName: 'startTransaction', valueCallbackIndex: 0 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'commitTransaction', nativeName: 'commitTransaction', valueCallbackIndex: 0 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'rollbackTransaction', nativeName: 'rollbackTransaction', valueCallbackIndex: 0 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'lockDb', nativeName: 'lockDb', valueCallbackIndex: 0 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'unlockDb', nativeName: 'unlockDb', valueCallbackIndex: 0 }
    
          // function(/* const rho::Vector<rho::String>& */ include, /* const rho::Vector<rho::String>& */ exclude, /* optional function */ oResult)
        , { methodName: 'destroyTables', nativeName: 'destroyTables', valueCallbackIndex: 2 }
    
          // function(/* const rho::String& */ tableName, /* optional function */ oResult)
        , { methodName: 'isTableExist', nativeName: 'isTableExist', valueCallbackIndex: 1 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'isUiWaitForDb', nativeName: 'isUiWaitForDb', valueCallbackIndex: 0 }
    
          // function(/* const rho::String& */ sqlStmt, /* bool */ isBatch, /* const rho::Vector<rho::String>& */ args, /* optional function */ oResult)
        , { methodName: 'execute', nativeName: 'execute', valueCallbackIndex: 3 }
    
    ], apiReq, function(){ return this.getId(); });

    

    rhoUtil.createRawPropsProxy(SQLite3.prototype, [
    ]);

    // === SQLite3 constants ===

    



    // === SQLite3 static properties ===

    rhoUtil.createPropsProxy(SQLite3, [
    ], apiReq);

    // === SQLite3 static methods ===

    rhoUtil.createMethodsProxy(SQLite3, [
    
          // function(/* const rho::String& */ partition, /* int */ sourceID, /* const rho::String& */ attrName, /* optional function */ oResult)
          { methodName: 'isBlobAttr', nativeName: 'isBlobAttr', valueCallbackIndex: 3 }
    
    ], apiReq);

    // === SQLite3 default instance support ===
    

    rhoUtil.namespace(moduleNS, SQLite3);

    

    

})(Rho.jQuery, Rho, Rho.util);
// Module Rho.Intent


(function ($, rho, rhoUtil) {
    'use strict';

    var moduleNS = 'Rho.Intent';
    var apiReq = rhoUtil.apiReqFor(moduleNS);


    // === Intent class definition ===

    function Intent() {
        var id = null;
        this.getId = function () {return id;};

        if (1 == arguments.length && arguments[0][rhoUtil.rhoIdParam()]) {
            if (moduleNS != arguments[0][rhoUtil.rhoClassParam()]) {
                throw "Wrong class instantiation!";
            }
            id = arguments[0][rhoUtil.rhoIdParam()];
        } else {
            id = rhoUtil.nextId();
            // constructor methods are following:
            
        }
    };

    // === Intent instance properties ===

    rhoUtil.createPropsProxy(Intent.prototype, [
    ], apiReq, function(){ return this.getId(); });

    // === Intent instance methods ===

    rhoUtil.createMethodsProxy(Intent.prototype, [
    
    ], apiReq, function(){ return this.getId(); });

    

    rhoUtil.createRawPropsProxy(Intent.prototype, [
    ]);

    // === Intent constants ===

    
            Intent.BROADCAST = 'broadcast'; 
    
            Intent.START_ACTIVITY = 'startActivity'; 
    
            Intent.START_SERVICE = 'startService'; 
    



    // === Intent static properties ===

    rhoUtil.createPropsProxy(Intent, [
    ], apiReq);

    // === Intent static methods ===

    rhoUtil.createMethodsProxy(Intent, [
    
          // function(/* const rho::Hashtable<rho::String, rho::String>& */ params, /* optional function */ oResult)
          { methodName: 'send', nativeName: 'send', persistentCallbackIndex: 1, valueCallbackIndex: 3 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'startListening', nativeName: 'startListening', persistentCallbackIndex: 0, valueCallbackIndex: 2 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'stopListening', nativeName: 'stopListening', valueCallbackIndex: 0 }
    
    ], apiReq);

    // === Intent default instance support ===
    

    rhoUtil.namespace(moduleNS, Intent);

    

    

})(Rho.jQuery, Rho, Rho.util);
// Module Rho.Log


(function ($, rho, rhoUtil) {
    'use strict';

    var moduleNS = 'Rho.Log';
    var apiReq = rhoUtil.apiReqFor(moduleNS);


    // === Log class definition ===

    function Log() {
        var id = null;
        this.getId = function () {return id;};

        if (1 == arguments.length && arguments[0][rhoUtil.rhoIdParam()]) {
            if (moduleNS != arguments[0][rhoUtil.rhoClassParam()]) {
                throw "Wrong class instantiation!";
            }
            id = arguments[0][rhoUtil.rhoIdParam()];
        } else {
            id = rhoUtil.nextId();
            // constructor methods are following:
            
        }
    };

    // === Log instance properties ===

    rhoUtil.createPropsProxy(Log.prototype, [
    ], apiReq, function(){ return this.getId(); });

    // === Log instance methods ===

    rhoUtil.createMethodsProxy(Log.prototype, [
    
    ], apiReq, function(){ return this.getId(); });

    

    rhoUtil.createRawPropsProxy(Log.prototype, [
    ]);

    // === Log constants ===

    
            Log.DEST_FILE = 'file'; 
    
            Log.DEST_OUTPUT = 'stdio'; 
    
            Log.DEST_URI = 'uri'; 
    
            Log.LEVEL_ERROR = 3;
    
            Log.LEVEL_FATAL = 4;
    
            Log.LEVEL_INFO = 1;
    
            Log.LEVEL_TRACE = 0;
    
            Log.LEVEL_WARNING = 2;
    



    // === Log static properties ===

    rhoUtil.createPropsProxy(Log, [
        { propName: 'level', propAccess: 'rw' }
      , { propName: 'destination', propAccess: 'rw' }
      , { propName: 'includeCategories', propAccess: 'rw' }
      , { propName: 'excludeCategories', propAccess: 'rw' }
      , { propName: 'fileSize', propAccess: 'rw' }
      , { propName: 'filePath', propAccess: 'rw' }
      , { propName: 'memoryPeriod', propAccess: 'rw' }
      , { propName: 'netTrace', propAccess: 'rw' }
      , { propName: 'skipPost', propAccess: 'rw' }
      , { propName: 'excludeFilter', propAccess: 'rw' }
      , { propName: 'destinationURI', propAccess: 'rw' }
    ], apiReq);

    // === Log static methods ===

    rhoUtil.createMethodsProxy(Log, [
    
          // function(/* const rho::String& */ message, /* const rho::String& */ category, /* optional function */ oResult)
          { methodName: 'trace', nativeName: 'trace', valueCallbackIndex: 2 }
    
          // function(/* const rho::String& */ message, /* const rho::String& */ category, /* optional function */ oResult)
        , { methodName: 'info', nativeName: 'info', valueCallbackIndex: 2 }
    
          // function(/* const rho::String& */ message, /* const rho::String& */ category, /* optional function */ oResult)
        , { methodName: 'warning', nativeName: 'warning', valueCallbackIndex: 2 }
    
          // function(/* const rho::String& */ message, /* const rho::String& */ category, /* optional function */ oResult)
        , { methodName: 'error', nativeName: 'error', valueCallbackIndex: 2 }
    
          // function(/* const rho::String& */ message, /* const rho::String& */ category, /* optional function */ oResult)
        , { methodName: 'fatalError', nativeName: 'fatalError', valueCallbackIndex: 2 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'sendLogFile', nativeName: 'sendLogFile', persistentCallbackIndex: 0, valueCallbackIndex: 2 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'showLog', nativeName: 'showLog', valueCallbackIndex: 0 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'cleanLogFile', nativeName: 'cleanLogFile', valueCallbackIndex: 0 }
    
          // function(/* int */ limit, /* optional function */ oResult)
        , { methodName: 'readLogFile', nativeName: 'readLogFile', valueCallbackIndex: 1 }
    
    ], apiReq);

    // === Log default instance support ===
    

    rhoUtil.namespace(moduleNS, Log);

    

    

})(Rho.jQuery, Rho, Rho.util);
// Module Rho.NativeMenubar


(function ($, rho, rhoUtil) {
    'use strict';

    var moduleNS = 'Rho.NativeMenubar';
    var apiReq = rhoUtil.apiReqFor(moduleNS);


    // === NativeMenubar class definition ===

    function NativeMenubar() {
        var id = null;
        this.getId = function () {return id;};

        if (1 == arguments.length && arguments[0][rhoUtil.rhoIdParam()]) {
            if (moduleNS != arguments[0][rhoUtil.rhoClassParam()]) {
                throw "Wrong class instantiation!";
            }
            id = arguments[0][rhoUtil.rhoIdParam()];
        } else {
            id = rhoUtil.nextId();
            // constructor methods are following:
            
        }
    };

    // === NativeMenubar instance properties ===

    rhoUtil.createPropsProxy(NativeMenubar.prototype, [
    ], apiReq, function(){ return this.getId(); });

    // === NativeMenubar instance methods ===

    rhoUtil.createMethodsProxy(NativeMenubar.prototype, [
    
    ], apiReq, function(){ return this.getId(); });

    

    rhoUtil.createRawPropsProxy(NativeMenubar.prototype, [
    ]);

    // === NativeMenubar constants ===

    



    // === NativeMenubar static properties ===

    rhoUtil.createPropsProxy(NativeMenubar, [
        { propName: 'mainMenu', propAccess: 'rw' }
      , { propName: 'extraMenu', propAccess: 'rw' }
      , { propName: 'mainButton', propAccess: 'rw' }
      , { propName: 'extraButton', propAccess: 'rw' }
      , { propName: 'defaultMainMenu', propAccess: 'r' }
    ], apiReq);

    // === NativeMenubar static methods ===

    rhoUtil.createMethodsProxy(NativeMenubar, [
    
    ], apiReq);

    // === NativeMenubar default instance support ===
    

    rhoUtil.namespace(moduleNS, NativeMenubar);

    

    

})(Rho.jQuery, Rho, Rho.util);
// Module Rho.NativeTabbar


(function ($, rho, rhoUtil) {
    'use strict';

    var moduleNS = 'Rho.NativeTabbar';
    var apiReq = rhoUtil.apiReqFor(moduleNS);


    // === NativeTabbar class definition ===

    function NativeTabbar() {
        var id = null;
        this.getId = function () {return id;};

        if (1 == arguments.length && arguments[0][rhoUtil.rhoIdParam()]) {
            if (moduleNS != arguments[0][rhoUtil.rhoClassParam()]) {
                throw "Wrong class instantiation!";
            }
            id = arguments[0][rhoUtil.rhoIdParam()];
        } else {
            id = rhoUtil.nextId();
            // constructor methods are following:
            
        }
    };

    // === NativeTabbar instance properties ===

    rhoUtil.createPropsProxy(NativeTabbar.prototype, [
    ], apiReq, function(){ return this.getId(); });

    // === NativeTabbar instance methods ===

    rhoUtil.createMethodsProxy(NativeTabbar.prototype, [
    
    ], apiReq, function(){ return this.getId(); });

    

    rhoUtil.createRawPropsProxy(NativeTabbar.prototype, [
    ]);

    // === NativeTabbar constants ===

    
            NativeTabbar.ON_TAB_FOCUS = 'onTabFocus'; 
    
            NativeTabbar.ON_TAB_NEW_ERROR = 'onTabNewError'; 
    



    // === NativeTabbar static properties ===

    rhoUtil.createPropsProxy(NativeTabbar, [
    ], apiReq);

    // === NativeTabbar static methods ===

    rhoUtil.createMethodsProxy(NativeTabbar, [
    
          // function(/* const rho::Vector<rho::String>& */ tabElements, /* const rho::Hashtable<rho::String, rho::String>& */ tabBarProperties, /* optional function */ oResult)
          { methodName: 'create', nativeName: 'create', persistentCallbackIndex: 2, valueCallbackIndex: 4 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'currentTabIndex', nativeName: 'currentTabIndex', valueCallbackIndex: 0 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'remove', nativeName: 'remove', valueCallbackIndex: 0 }
    
          // function(/* int */ tabIndex, /* optional function */ oResult)
        , { methodName: 'removeTab', nativeName: 'removeTab', valueCallbackIndex: 1 }
    
          // function(/* int */ tabIndex, /* const rho::String& */ badge, /* optional function */ oResult)
        , { methodName: 'setTabBadge', nativeName: 'setTabBadge', valueCallbackIndex: 2 }
    
          // function(/* int */ tabIndex, /* optional function */ oResult)
        , { methodName: 'switchTab', nativeName: 'switchTab', valueCallbackIndex: 1 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'isCreated', nativeName: 'isCreated', valueCallbackIndex: 0 }
    
    ], apiReq);

    // === NativeTabbar default instance support ===
    

    rhoUtil.namespace(moduleNS, NativeTabbar);

    

    

})(Rho.jQuery, Rho, Rho.util);
// Module Rho.NativeToolbar


(function ($, rho, rhoUtil) {
    'use strict';

    var moduleNS = 'Rho.NativeToolbar';
    var apiReq = rhoUtil.apiReqFor(moduleNS);


    // === NativeToolbar class definition ===

    function NativeToolbar() {
        var id = null;
        this.getId = function () {return id;};

        if (1 == arguments.length && arguments[0][rhoUtil.rhoIdParam()]) {
            if (moduleNS != arguments[0][rhoUtil.rhoClassParam()]) {
                throw "Wrong class instantiation!";
            }
            id = arguments[0][rhoUtil.rhoIdParam()];
        } else {
            id = rhoUtil.nextId();
            // constructor methods are following:
            
        }
    };

    // === NativeToolbar instance properties ===

    rhoUtil.createPropsProxy(NativeToolbar.prototype, [
    ], apiReq, function(){ return this.getId(); });

    // === NativeToolbar instance methods ===

    rhoUtil.createMethodsProxy(NativeToolbar.prototype, [
    
    ], apiReq, function(){ return this.getId(); });

    

    rhoUtil.createRawPropsProxy(NativeToolbar.prototype, [
    ]);

    // === NativeToolbar constants ===

    
            NativeToolbar.BACK = 'back'; 
    
            NativeToolbar.CLOSE = 'close'; 
    
            NativeToolbar.EXIT = 'exit'; 
    
            NativeToolbar.FULLSCREEN = 'fullscreen'; 
    
            NativeToolbar.HOME = 'home'; 
    
            NativeToolbar.LOG = 'log'; 
    
            NativeToolbar.MINIMIZE = 'minimize'; 
    
            NativeToolbar.OPTIONS = 'options'; 
    
            NativeToolbar.REFRESH = 'refresh'; 
    
            NativeToolbar.SEPARATOR = 'separator'; 
    
            NativeToolbar.SIP = 'SIP'; 
    
            NativeToolbar.SYNC = 'sync'; 
    



    // === NativeToolbar static properties ===

    rhoUtil.createPropsProxy(NativeToolbar, [
    ], apiReq);

    // === NativeToolbar static methods ===

    rhoUtil.createMethodsProxy(NativeToolbar, [
    
          // function(/* const rho::Vector<rho::String>& */ toolbarElements, /* const rho::Hashtable<rho::String, rho::String>& */ toolBarProperties, /* optional function */ oResult)
          { methodName: 'create', nativeName: 'create', valueCallbackIndex: 2 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'remove', nativeName: 'remove', valueCallbackIndex: 0 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'isCreated', nativeName: 'isCreated', valueCallbackIndex: 0 }
    
    ], apiReq);

    // === NativeToolbar default instance support ===
    

    rhoUtil.namespace(moduleNS, NativeToolbar);

    

    

})(Rho.jQuery, Rho, Rho.util);
// Module Rho.Navbar


(function ($, rho, rhoUtil) {
    'use strict';

    var moduleNS = 'Rho.Navbar';
    var apiReq = rhoUtil.apiReqFor(moduleNS);


    // === Navbar class definition ===

    function Navbar() {
        var id = null;
        this.getId = function () {return id;};

        if (1 == arguments.length && arguments[0][rhoUtil.rhoIdParam()]) {
            if (moduleNS != arguments[0][rhoUtil.rhoClassParam()]) {
                throw "Wrong class instantiation!";
            }
            id = arguments[0][rhoUtil.rhoIdParam()];
        } else {
            id = rhoUtil.nextId();
            // constructor methods are following:
            
        }
    };

    // === Navbar instance properties ===

    rhoUtil.createPropsProxy(Navbar.prototype, [
    ], apiReq, function(){ return this.getId(); });

    // === Navbar instance methods ===

    rhoUtil.createMethodsProxy(Navbar.prototype, [
    
    ], apiReq, function(){ return this.getId(); });

    

    rhoUtil.createRawPropsProxy(Navbar.prototype, [
    ]);

    // === Navbar constants ===

    



    // === Navbar static properties ===

    rhoUtil.createPropsProxy(Navbar, [
    ], apiReq);

    // === Navbar static methods ===

    rhoUtil.createMethodsProxy(Navbar, [
    
          // function(/* const rho::Hashtable<rho::String, rho::String>& */ navBarProperties, /* optional function */ oResult)
          { methodName: 'create', nativeName: 'create', valueCallbackIndex: 1 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'remove', nativeName: 'remove', valueCallbackIndex: 0 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'started', nativeName: 'started', valueCallbackIndex: 0 }
    
    ], apiReq);

    // === Navbar default instance support ===
    

    rhoUtil.namespace(moduleNS, Navbar);

    

    

})(Rho.jQuery, Rho, Rho.util);
// Module Rho.Network


(function ($, rho, rhoUtil) {
    'use strict';

    var moduleNS = 'Rho.Network';
    var apiReq = rhoUtil.apiReqFor(moduleNS);


    // === Network class definition ===

    function Network() {
        var id = null;
        this.getId = function () {return id;};

        if (1 == arguments.length && arguments[0][rhoUtil.rhoIdParam()]) {
            if (moduleNS != arguments[0][rhoUtil.rhoClassParam()]) {
                throw "Wrong class instantiation!";
            }
            id = arguments[0][rhoUtil.rhoIdParam()];
        } else {
            id = rhoUtil.nextId();
            // constructor methods are following:
            
        }
    };

    // === Network instance properties ===

    rhoUtil.createPropsProxy(Network.prototype, [
    ], apiReq, function(){ return this.getId(); });

    // === Network instance methods ===

    rhoUtil.createMethodsProxy(Network.prototype, [
    
    ], apiReq, function(){ return this.getId(); });

    

    rhoUtil.createRawPropsProxy(Network.prototype, [
    ]);

    // === Network constants ===

    
            Network.AUTH_BASIC = 'basic'; 
    



    // === Network static properties ===

    rhoUtil.createPropsProxy(Network, [
        { propName: 'url', propAccess: 'rw' }
      , { propName: 'authType', propAccess: 'rw' }
      , { propName: 'authUser', propAccess: 'rw' }
      , { propName: 'authPassword', propAccess: 'rw' }
      , { propName: 'verifyPeerCertificate', propAccess: 'rw' }
      , { propName: 'httpVerb', propAccess: 'rw' }
      , { propName: 'headers', propAccess: 'rw' }
      , { propName: 'responseTimeout', propAccess: 'rw' }
    ], apiReq);

    // === Network static methods ===

    rhoUtil.createMethodsProxy(Network, [
    
          // function(/* optional function */ oResult)
          { methodName: 'cancel', nativeName: 'cancel', persistentCallbackIndex: 0, valueCallbackIndex: 2 }
    
          // function(/* const rho::Hashtable<rho::String, rho::String>& */ propertyMap, /* optional function */ oResult)
        , { methodName: 'downloadFile', nativeName: 'downloadFile', persistentCallbackIndex: 1, valueCallbackIndex: 3 }
    
          // function(/* const rho::Hashtable<rho::String, rho::String>& */ propertyMap, /* optional function */ oResult)
        , { methodName: 'get', nativeName: 'get', persistentCallbackIndex: 1, valueCallbackIndex: 3 }
    
          // function(/* const rho::Hashtable<rho::String, rho::String>& */ propertyMap, /* optional function */ oResult)
        , { methodName: 'post', nativeName: 'post', persistentCallbackIndex: 1, valueCallbackIndex: 3 }
    
          // function(/* const rho::Hashtable<rho::String, rho::String>& */ propertyMap, /* optional function */ oResult)
        , { methodName: 'uploadFile', nativeName: 'uploadFile', persistentCallbackIndex: 1, valueCallbackIndex: 3 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'hasNetwork', nativeName: 'hasNetwork', valueCallbackIndex: 0 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'hasWifiNetwork', nativeName: 'hasWifiNetwork', valueCallbackIndex: 0 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'hasCellNetwork', nativeName: 'hasCellNetwork', valueCallbackIndex: 0 }
    
          // function(/* int */ pollInterval, /* optional function */ oResult)
        , { methodName: 'startStatusNotify', nativeName: 'startStatusNotify', persistentCallbackIndex: 1, valueCallbackIndex: 3 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'stopStatusNotify', nativeName: 'stopStatusNotify', valueCallbackIndex: 0 }
    
          // function(/* const rho::Hashtable<rho::String, rho::String>& */ propertyMap, /* optional function */ oResult)
        , { methodName: 'detectConnection', nativeName: 'detectConnection', persistentCallbackIndex: 1, valueCallbackIndex: 3 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'stopDetectingConnection', nativeName: 'stopDetectingConnection', persistentCallbackIndex: 0, valueCallbackIndex: 2 }
    
          // function(/* const rho::String& */ connectionDestination, /* optional function */ oResult)
        , { methodName: 'connectWan', nativeName: 'connectWan', persistentCallbackIndex: 1, valueCallbackIndex: 3 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'disconnectWan', nativeName: 'disconnectWan', valueCallbackIndex: 0 }
    
    ], apiReq);

    // === Network default instance support ===
    

    rhoUtil.namespace(moduleNS, Network);

    

    

})(Rho.jQuery, Rho, Rho.util);
// Module Rho.NewORM


(function ($, rho, rhoUtil) {
    'use strict';

    var moduleNS = 'Rho.NewORM';
    var apiReq = rhoUtil.apiReqFor(moduleNS);


    // === NewORM class definition ===

    function NewORM() {
        var id = null;
        this.getId = function () {return id;};

        if (1 == arguments.length && arguments[0][rhoUtil.rhoIdParam()]) {
            if (moduleNS != arguments[0][rhoUtil.rhoClassParam()]) {
                throw "Wrong class instantiation!";
            }
            id = arguments[0][rhoUtil.rhoIdParam()];
        } else {
            id = rhoUtil.nextId();
            // constructor methods are following:
            
        }
    };

    // === NewORM instance properties ===

    rhoUtil.createPropsProxy(NewORM.prototype, [
    ], apiReq, function(){ return this.getId(); });

    // === NewORM instance methods ===

    rhoUtil.createMethodsProxy(NewORM.prototype, [
    
    ], apiReq, function(){ return this.getId(); });

    

    rhoUtil.createRawPropsProxy(NewORM.prototype, [
    ]);

    // === NewORM constants ===

    



    // === NewORM static properties ===

    rhoUtil.createPropsProxy(NewORM, [
    ], apiReq);

    // === NewORM static methods ===

    rhoUtil.createMethodsProxy(NewORM, [
    
          // function(/* optional function */ oResult)
          { methodName: 'useNewOrm', nativeName: 'useNewOrm', valueCallbackIndex: 0 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'getClientId', nativeName: 'getClientId', valueCallbackIndex: 0 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'haveLocalChanges', nativeName: 'haveLocalChanges', valueCallbackIndex: 0 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'databaseLocalReset', nativeName: 'databaseLocalReset', valueCallbackIndex: 0 }
    
          // function(/* bool */ resetLocalModels, /* optional function */ oResult)
        , { methodName: 'databaseClientReset', nativeName: 'databaseClientReset', valueCallbackIndex: 1 }
    
          // function(/* const rho::Vector<rho::String>& */ models, /* bool */ resetClientInfo, /* bool */ resetLocalModels, /* optional function */ oResult)
        , { methodName: 'databaseFullResetEx', nativeName: 'databaseFullResetEx', valueCallbackIndex: 3 }
    
          // function(/* bool */ resetClientInfo, /* bool */ resetLocalModels, /* optional function */ oResult)
        , { methodName: 'databaseFullReset', nativeName: 'databaseFullReset', valueCallbackIndex: 2 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'databaseFullResetAndLogout', nativeName: 'databaseFullResetAndLogout', valueCallbackIndex: 0 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'databaseFullclientResetAndLogout', nativeName: 'databaseFullclientResetAndLogout', valueCallbackIndex: 0 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'generateId', nativeName: 'generateId', valueCallbackIndex: 0 }
    
    ], apiReq);

    // === NewORM default instance support ===
    

    rhoUtil.namespace(moduleNS, NewORM);

    

    

})(Rho.jQuery, Rho, Rho.util);
// Module Rho.NewORMModel


(function ($, rho, rhoUtil) {
    'use strict';

    var moduleNS = 'Rho.NewORMModel';
    var apiReq = rhoUtil.apiReqFor(moduleNS);


    // === NewORMModel class definition ===

    function NewORMModel() {
        var id = null;
        this.getId = function () {return id;};

        if (1 == arguments.length && arguments[0][rhoUtil.rhoIdParam()]) {
            if (moduleNS != arguments[0][rhoUtil.rhoClassParam()]) {
                throw "Wrong class instantiation!";
            }
            id = arguments[0][rhoUtil.rhoIdParam()];
        } else {
            id = rhoUtil.nextId();
            // constructor methods are following:
            
                this.init.apply(this, arguments);
            
        }
    };

    // === NewORMModel instance properties ===

    rhoUtil.createPropsProxy(NewORMModel.prototype, [
        { propName: 'loaded', propAccess: 'rw' }
      , { propName: 'model_name', propAccess: 'rw' }
      , { propName: 'sync_type', propAccess: 'rw' }
      , { propName: 'sync_priority', propAccess: 'rw' }
      , { propName: 'partition', propAccess: 'rw' }
      , { propName: 'source_id', propAccess: 'rw' }
      , { propName: 'fixed_schema', propAccess: 'rw' }
      , { propName: 'freezed', propAccess: 'rw' }
      , { propName: 'associations', propAccess: 'rw' }
    ], apiReq, function(){ return this.getId(); });

    // === NewORMModel instance methods ===

    rhoUtil.createMethodsProxy(NewORMModel.prototype, [
    
          // function(/* const rho::String& */ modelName, /* optional function */ oResult)
          { methodName: 'init', nativeName: 'init', valueCallbackIndex: 1 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'initModel', nativeName: 'initModel', valueCallbackIndex: 0 }
    
          // function(/* const rho::String& */ propertyName, /* const rho::String& */ sourceName, /* optional function */ oResult)
        , { methodName: 'setBelongsTo', nativeName: 'setBelongsTo', valueCallbackIndex: 2 }
    
          // function(/* const rho::String& */ propertyName, /* optional function */ oResult)
        , { methodName: 'getBelongsTo', nativeName: 'getBelongsTo', valueCallbackIndex: 1 }
    
          // function(/* const rho::String& */ propertyName, /* const rho::String& */ propertyValue, /* optional function */ oResult)
        , { methodName: 'set', nativeName: 'set', valueCallbackIndex: 2 }
    
          // function(/* const rho::String& */ propertyName, /* optional function */ oResult)
        , { methodName: 'enable', nativeName: 'enable', valueCallbackIndex: 1 }
    
          // function(/* const rho::String& */ propertyName, /* const rho::String& */ propertyType, /* const rho::String& */ propOption, /* optional function */ oResult)
        , { methodName: 'setModelProperty', nativeName: 'setModelProperty', valueCallbackIndex: 3 }
    
          // function(/* const rho::String& */ propertyName, /* optional function */ oResult)
        , { methodName: 'getModelProperty', nativeName: 'getModelProperty', valueCallbackIndex: 1 }
    
          // function(/* const rho::String& */ indexName, /* const rho::Vector<rho::String>& */ indexCols, /* bool */ is_unique, /* optional function */ oResult)
        , { methodName: 'setSchemaIndex', nativeName: 'setSchemaIndex', valueCallbackIndex: 3 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'destroy', nativeName: 'destroy', valueCallbackIndex: 0 }
    
          // function(/* const rho::Hashtable<rho::String, rho::String>& */ attrs, /* optional function */ oResult)
        , { methodName: 'createObject', nativeName: 'createObject', valueCallbackIndex: 1 }
    
          // function(/* const rho::Hashtable<rho::String, rho::String>& */ attrs, /* optional function */ oResult)
        , { methodName: 'createInstance', nativeName: 'createInstance', valueCallbackIndex: 1 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'anyChangedObjects', nativeName: 'anyChangedObjects', valueCallbackIndex: 0 }
    
          // function(/* const rho::String& */ objId, /* optional function */ oResult)
        , { methodName: 'hasChanges', nativeName: 'hasChanges', valueCallbackIndex: 1 }
    
          // function(/* const rho::String& */ objId, /* optional function */ oResult)
        , { methodName: 'canModify', nativeName: 'canModify', valueCallbackIndex: 1 }
    
          // function(/* const rho::String& */ objId, /* const rho::Hashtable<rho::String, rho::String>& */ oldAttrs, /* const rho::Hashtable<rho::String, rho::String>& */ newAttrs, /* optional function */ oResult)
        , { methodName: 'updateObject', nativeName: 'updateObject', valueCallbackIndex: 3 }
    
          // function(/* const rho::String& */ objId, /* const rho::Hashtable<rho::String, rho::String>& */ attrs, /* optional function */ oResult)
        , { methodName: 'saveObject', nativeName: 'saveObject', valueCallbackIndex: 2 }
    
          // function(/* const rho::String& */ objId, /* optional function */ oResult)
        , { methodName: 'deleteObject', nativeName: 'deleteObject', valueCallbackIndex: 1 }
    
          // function(/* const rho::Hashtable<rho::String, rho::String>& */ strOptions, /* const rho::Vector<rho::String>& */ quests, /* optional function */ oResult)
        , { methodName: 'deleteObjects', nativeName: 'deleteObjects', valueCallbackIndex: 2 }
    
          // function(/* const rho::Hashtable<rho::String, rho::String>& */ conditions, /* const rho::Hashtable<rho::String, rho::String>& */ strOptions, /* optional function */ oResult)
        , { methodName: 'deleteObjectsPropertyBagByCondHash', nativeName: 'deleteObjectsPropertyBagByCondHash', valueCallbackIndex: 2 }
    
          // function(/* const rho::String& */ conditions, /* const rho::Vector<rho::String>& */ quests, /* const rho::Hashtable<rho::String, rho::String>& */ strOptions, /* optional function */ oResult)
        , { methodName: 'deleteObjectsPropertyBagByCondArray', nativeName: 'deleteObjectsPropertyBagByCondArray', valueCallbackIndex: 3 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'getCount', nativeName: 'getCount', valueCallbackIndex: 0 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'getBackendRefreshTime', nativeName: 'getBackendRefreshTime', valueCallbackIndex: 0 }
    
          // function(/* const rho::String& */ whatParam, /* const rho::Hashtable<rho::String, rho::String>& */ strOptions, /* const rho::Vector<rho::String>& */ quests, /* const rho::Vector<rho::String>& */ selectAttrs, /* const rho::Vector<rho::String>& */ orderAttrs, /* optional function */ oResult)
        , { methodName: 'findObjects', nativeName: 'findObjects', valueCallbackIndex: 5 }
    
          // function(/* const rho::String& */ whatParam, /* const rho::Hashtable<rho::String, rho::String>& */ conditions, /* const rho::Hashtable<rho::String, rho::String>& */ strOptions, /* const rho::Vector<rho::String>& */ selectAttrs, /* optional function */ oResult)
        , { methodName: 'findObjectsPropertyBagByCondHash', nativeName: 'findObjectsPropertyBagByCondHash', valueCallbackIndex: 4 }
    
          // function(/* const rho::String& */ whatParam, /* const rho::String& */ conditions, /* const rho::Vector<rho::String>& */ quests, /* const rho::Hashtable<rho::String, rho::String>& */ strOptions, /* const rho::Vector<rho::String>& */ selectAttrs, /* optional function */ oResult)
        , { methodName: 'findObjectsPropertyBagByCondArray', nativeName: 'findObjectsPropertyBagByCondArray', valueCallbackIndex: 5 }
    
          // function(/* const rho::String& */ sqlQuery, /* optional function */ oResult)
        , { methodName: 'find_by_sql', nativeName: 'find_by_sql', valueCallbackIndex: 1 }
    
          // function(/* const rho::String& */ attrName, /* optional function */ oResult)
        , { methodName: 'validateFreezedAttribute', nativeName: 'validateFreezedAttribute', valueCallbackIndex: 1 }
    
          // function(/* const rho::Hashtable<rho::String, rho::String>& */ attrHash, /* optional function */ oResult)
        , { methodName: 'validateFreezedAttributes', nativeName: 'validateFreezedAttributes', valueCallbackIndex: 1 }
    
          // function(/* const rho::String& */ attrKey, /* const rho::Vector<rho::String>& */ attrValues, /* const rho::String& */ valOp, /* const rho::String& */ valFunc, /* optional function */ oResult)
        , { methodName: 'buildComplexWhereCond', nativeName: 'buildComplexWhereCond', valueCallbackIndex: 4 }
    
          // function(/* const rho::String& */ whatArg, /* const rho::Hashtable<rho::String, rho::String>& */ hashArgs, /* optional function */ oResult)
        , { methodName: 'buildFindLimits', nativeName: 'buildFindLimits', valueCallbackIndex: 2 }
    
          // function(/* const rho::Vector<rho::String>& */ order_attrs, /* const rho::Vector<rho::String>& */ order_ops, /* optional function */ oResult)
        , { methodName: 'buildFindOrder', nativeName: 'buildFindOrder', valueCallbackIndex: 2 }
    
          // function(/* const rho::String& */ what, /* const rho::Vector<rho::String>& */ conditions, /* optional function */ oResult)
        , { methodName: 'buildSimpleWhereCond', nativeName: 'buildSimpleWhereCond', valueCallbackIndex: 2 }
    
          // function(/* const rho::String& */ objId, /* const rho::Hashtable<rho::String, rho::String>& */ attrHash, /* const rho::String& */ action, /* optional function */ oResult)
        , { methodName: 'onSyncDeleteError', nativeName: 'onSyncDeleteError', valueCallbackIndex: 3 }
    
          // function(/* const rho::String& */ objId, /* const rho::Hashtable<rho::String, rho::String>& */ attrHash, /* const rho::Hashtable<rho::String, rho::String>& */ rollbackHash, /* const rho::String& */ action, /* optional function */ oResult)
        , { methodName: 'onSyncUpdateError', nativeName: 'onSyncUpdateError', valueCallbackIndex: 4 }
    
          // function(/* const rho::Vector<rho::String>& */ objects, /* const rho::String& */ action, /* optional function */ oResult)
        , { methodName: 'onSyncCreateError', nativeName: 'onSyncCreateError', valueCallbackIndex: 2 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'pushChanges', nativeName: 'pushChanges', valueCallbackIndex: 0 }
    
          // function(/* const rho::String& */ propertyName, /* optional function */ oResult)
        , { methodName: 'getProperty', nativeName: 'getProperty', persistentCallbackIndex: 1, valueCallbackIndex: 3 }
    
          // function(/* const rho::Vector<rho::String>& */ arrayofNames, /* optional function */ oResult)
        , { methodName: 'getProperties', nativeName: 'getProperties', persistentCallbackIndex: 1, valueCallbackIndex: 3 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'getAllProperties', nativeName: 'getAllProperties', persistentCallbackIndex: 0, valueCallbackIndex: 2 }
    
          // function(/* const rho::String& */ propertyName, /* const rho::String& */ propertyValue, /* optional function */ oResult)
        , { methodName: 'setProperty', nativeName: 'setProperty', valueCallbackIndex: 2 }
    
          // function(/* const rho::Hashtable<rho::String, rho::String>& */ propertyMap, /* optional function */ oResult)
        , { methodName: 'setProperties', nativeName: 'setProperties', valueCallbackIndex: 1 }
    
    ], apiReq, function(){ return this.getId(); });

    

    rhoUtil.createRawPropsProxy(NewORMModel.prototype, [
    ]);

    // === NewORMModel constants ===

    



    // === NewORMModel static properties ===

    rhoUtil.createPropsProxy(NewORMModel, [
    ], apiReq);

    // === NewORMModel static methods ===

    rhoUtil.createMethodsProxy(NewORMModel, [
    
          // function(/* optional function */ oResult)
          { methodName: 'enumerate', nativeName: 'enumerate', valueCallbackIndex: 0 }
    
          // function(/* const rho::String& */ modelName, /* optional function */ oResult)
        , { methodName: 'getModel', nativeName: 'getModel', valueCallbackIndex: 1 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'clear', nativeName: 'clear', valueCallbackIndex: 0 }
    
    ], apiReq);

    // === NewORMModel default instance support ===
    

    rhoUtil.namespace(moduleNS, NewORMModel);

    

    

})(Rho.jQuery, Rho, Rho.util);
// Module Rho.Notification


(function ($, rho, rhoUtil) {
    'use strict';

    var moduleNS = 'Rho.Notification';
    var apiReq = rhoUtil.apiReqFor(moduleNS);


    // === Notification class definition ===

    function Notification() {
        var id = null;
        this.getId = function () {return id;};

        if (1 == arguments.length && arguments[0][rhoUtil.rhoIdParam()]) {
            if (moduleNS != arguments[0][rhoUtil.rhoClassParam()]) {
                throw "Wrong class instantiation!";
            }
            id = arguments[0][rhoUtil.rhoIdParam()];
        } else {
            id = rhoUtil.nextId();
            // constructor methods are following:
            
        }
    };

    // === Notification instance properties ===

    rhoUtil.createPropsProxy(Notification.prototype, [
    ], apiReq, function(){ return this.getId(); });

    // === Notification instance methods ===

    rhoUtil.createMethodsProxy(Notification.prototype, [
    
    ], apiReq, function(){ return this.getId(); });

    

    rhoUtil.createRawPropsProxy(Notification.prototype, [
    ]);

    // === Notification constants ===

    
            Notification.TYPE_DIALOG = 'dialog'; 
    
            Notification.TYPE_NOTIFICATION = 'notification'; 
    
            Notification.TYPE_NOTIFICATION_DIALOG = 'notificationDialog'; 
    
            Notification.TYPE_TOAST = 'toast'; 
    



    // === Notification static properties ===

    rhoUtil.createPropsProxy(Notification, [
    ], apiReq);

    // === Notification static methods ===

    rhoUtil.createMethodsProxy(Notification, [
    
          // function(/* const rho::Hashtable<rho::String, rho::String>& */ propertyMap, /* optional function */ oResult)
          { methodName: 'showPopup', nativeName: 'showPopup', persistentCallbackIndex: 1, valueCallbackIndex: 3 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'hidePopup', nativeName: 'hidePopup', valueCallbackIndex: 0 }
    
          // function(/* const rho::String& */ title, /* const rho::String& */ status_text, /* const rho::String& */ hide_button_label, /* optional function */ oResult)
        , { methodName: 'showStatus', nativeName: 'showStatus', valueCallbackIndex: 3 }
    
          // function(/* const rho::String& */ path, /* const rho::String& */ media_type, /* optional function */ oResult)
        , { methodName: 'playFile', nativeName: 'playFile', valueCallbackIndex: 2 }
    
          // function(/* const rho::Hashtable<rho::String, rho::String>& */ propertyMap, /* optional function */ oResult)
        , { methodName: 'beep', nativeName: 'beep', valueCallbackIndex: 1 }
    
          // function(/* int */ duration, /* optional function */ oResult)
        , { methodName: 'vibrate', nativeName: 'vibrate', valueCallbackIndex: 1 }
    
    ], apiReq);

    // === Notification default instance support ===
    

    rhoUtil.namespace(moduleNS, Notification);

    

    

})(Rho.jQuery, Rho, Rho.util);
// Module Rho.Push


(function ($, rho, rhoUtil) {
    'use strict';

    var moduleNS = 'Rho.Push';
    var apiReq = rhoUtil.apiReqFor(moduleNS);


    // === Push class definition ===

    function Push() {
        var id = null;
        this.getId = function () {return id;};

        if (1 == arguments.length && arguments[0][rhoUtil.rhoIdParam()]) {
            if (moduleNS != arguments[0][rhoUtil.rhoClassParam()]) {
                throw "Wrong class instantiation!";
            }
            id = arguments[0][rhoUtil.rhoIdParam()];
        } else {
            id = rhoUtil.nextId();
            // constructor methods are following:
            
        }
    };

    // === Push instance properties ===

    rhoUtil.createPropsProxy(Push.prototype, [
        { propName: 'type', propAccess: 'r' }
      , { propName: 'userNotifyMode', propAccess: 'rw' }
      , { propName: 'pushServer', propAccess: 'r' }
      , { propName: 'pushAppName', propAccess: 'r' }
    ], apiReq, function(){ return this.getId(); });

    // === Push instance methods ===

    rhoUtil.createMethodsProxy(Push.prototype, [
    
          // function(/* optional function */ oResult)
          { methodName: 'getDeviceId', nativeName: 'getDeviceId', persistentCallbackIndex: 0, valueCallbackIndex: 2 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'startNotifications', nativeName: 'startNotifications', persistentCallbackIndex: 0, valueCallbackIndex: 2 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'stopNotifications', nativeName: 'stopNotifications', valueCallbackIndex: 0 }
    
          // function(/* const rho::String& */ propertyName, /* optional function */ oResult)
        , { methodName: 'getProperty', nativeName: 'getProperty', persistentCallbackIndex: 1, valueCallbackIndex: 3 }
    
          // function(/* const rho::Vector<rho::String>& */ arrayofNames, /* optional function */ oResult)
        , { methodName: 'getProperties', nativeName: 'getProperties', persistentCallbackIndex: 1, valueCallbackIndex: 3 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'getAllProperties', nativeName: 'getAllProperties', persistentCallbackIndex: 0, valueCallbackIndex: 2 }
    
          // function(/* const rho::String& */ propertyName, /* const rho::String& */ propertyValue, /* optional function */ oResult)
        , { methodName: 'setProperty', nativeName: 'setProperty', valueCallbackIndex: 2 }
    
          // function(/* const rho::Hashtable<rho::String, rho::String>& */ propertyMap, /* optional function */ oResult)
        , { methodName: 'setProperties', nativeName: 'setProperties', valueCallbackIndex: 1 }
    
    ], apiReq, function(){ return this.getId(); });

    

    rhoUtil.createRawPropsProxy(Push.prototype, [
    ]);

    // === Push constants ===

    
            Push.PUSH_NOTIFY_ALERTS = 'alert'; 
    
            Push.PUSH_NOTIFY_NONE = 'none'; 
    
            Push.PUSH_NOTIFY_NOTIFICATIONS = 'notification'; 
    
            Push.PUSH_NOTIFY_NOTIFICATIONS_AND_ALERTS = 'backgroundNotifications'; 
    
            Push.PUSH_TYPE_NATIVE = 'native-push'; 
    
            Push.PUSH_TYPE_RHOCONNECT = 'rhoconnect-push'; 
    



    // === Push static properties ===

    rhoUtil.createPropsProxy(Push, [
    ], apiReq);

    // === Push static methods ===

    rhoUtil.createMethodsProxy(Push, [
    
          // function(/* optional function */ oResult)
          { methodName: 'enumerate', nativeName: 'enumerate', persistentCallbackIndex: 0, valueCallbackIndex: 2 }
    
    ], apiReq);

    // === Push default instance support ===
    

        rhoUtil.createPropsProxy(Push, [
            { propName: 'defaultInstance:getDefault:setDefault', propAccess: 'rw', customSet: function(obj) { if(!obj || 'function' != typeof obj.getId){ throw 'Default object should provide getId method!' }; Push.setDefaultID(obj.getId()); } }
          , { propName: 'defaultID:getDefaultID:setDefaultID', propAccess: 'rw' }
        ], apiReq);

        Push.getId = function() {
            return Push.getDefaultID();
        }

        // === Push default instance properties ===

        rhoUtil.createPropsProxy(Push, [
            { propName: 'type', propAccess: 'r' }
          , { propName: 'userNotifyMode', propAccess: 'rw' }
          , { propName: 'pushServer', propAccess: 'r' }
          , { propName: 'pushAppName', propAccess: 'r' }
        ], apiReq, function(){ return this.getId(); });

        // === Push default instance methods ===

        rhoUtil.createMethodsProxy(Push, [
        
              // function(/* optional function */ oResult)
              { methodName: 'getDeviceId', nativeName: 'getDeviceId', persistentCallbackIndex: 0, valueCallbackIndex: 2 }
        
              // function(/* optional function */ oResult)
            , { methodName: 'startNotifications', nativeName: 'startNotifications', persistentCallbackIndex: 0, valueCallbackIndex: 2 }
        
              // function(/* optional function */ oResult)
            , { methodName: 'stopNotifications', nativeName: 'stopNotifications', valueCallbackIndex: 0 }
        
              // function(/* const rho::String& */ propertyName, /* optional function */ oResult)
            , { methodName: 'getProperty', nativeName: 'getProperty', persistentCallbackIndex: 1, valueCallbackIndex: 3 }
        
              // function(/* const rho::Vector<rho::String>& */ arrayofNames, /* optional function */ oResult)
            , { methodName: 'getProperties', nativeName: 'getProperties', persistentCallbackIndex: 1, valueCallbackIndex: 3 }
        
              // function(/* optional function */ oResult)
            , { methodName: 'getAllProperties', nativeName: 'getAllProperties', persistentCallbackIndex: 0, valueCallbackIndex: 2 }
        
              // function(/* const rho::String& */ propertyName, /* const rho::String& */ propertyValue, /* optional function */ oResult)
            , { methodName: 'setProperty', nativeName: 'setProperty', valueCallbackIndex: 2 }
        
              // function(/* const rho::Hashtable<rho::String, rho::String>& */ propertyMap, /* optional function */ oResult)
            , { methodName: 'setProperties', nativeName: 'setProperties', valueCallbackIndex: 1 }
        
        ], apiReq, function(){ return this.getId(); });

        // will reuse already defined methods
        rhoUtil.createRawPropsProxy(Push, [
        ]);

    

    rhoUtil.namespace(moduleNS, Push);

    

    

})(Rho.jQuery, Rho, Rho.util);
// Module Rho.RhoFile


(function ($, rho, rhoUtil) {
    'use strict';

    var moduleNS = 'Rho.RhoFile';
    var apiReq = rhoUtil.apiReqFor(moduleNS);


    // === RhoFile class definition ===

    function RhoFile() {
        var id = null;
        this.getId = function () {return id;};

        if (1 == arguments.length && arguments[0][rhoUtil.rhoIdParam()]) {
            if (moduleNS != arguments[0][rhoUtil.rhoClassParam()]) {
                throw "Wrong class instantiation!";
            }
            id = arguments[0][rhoUtil.rhoIdParam()];
        } else {
            id = rhoUtil.nextId();
            // constructor methods are following:
            
                this.open.apply(this, arguments);
            
        }
    };

    // === RhoFile instance properties ===

    rhoUtil.createPropsProxy(RhoFile.prototype, [
    ], apiReq, function(){ return this.getId(); });

    // === RhoFile instance methods ===

    rhoUtil.createMethodsProxy(RhoFile.prototype, [
    
          // function(/* const rho::String& */ path, /* int */ mode, /* optional function */ oResult)
          { methodName: 'open', nativeName: 'open', valueCallbackIndex: 2 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'close', nativeName: 'close', valueCallbackIndex: 0 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'isOpened', nativeName: 'isOpened', valueCallbackIndex: 0 }
    
          // function(/* int */ size, /* optional function */ oResult)
        , { methodName: 'read', nativeName: 'read', valueCallbackIndex: 1 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'readAll', nativeName: 'readAll', valueCallbackIndex: 0 }
    
          // function(/* const rho::String& */ val, /* optional function */ oResult)
        , { methodName: 'write', nativeName: 'write', valueCallbackIndex: 1 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'flush', nativeName: 'flush', valueCallbackIndex: 0 }
    
          // function(/* int */ pos, /* optional function */ oResult)
        , { methodName: 'seek', nativeName: 'seek', valueCallbackIndex: 1 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'size', nativeName: 'size', valueCallbackIndex: 0 }
    
    ], apiReq, function(){ return this.getId(); });

    

    rhoUtil.createRawPropsProxy(RhoFile.prototype, [
    ]);

    // === RhoFile constants ===

    
            RhoFile.OPEN_FOR_APPEND = 1;
    
            RhoFile.OPEN_FOR_READ = 2;
    
            RhoFile.OPEN_FOR_READ_WRITE = 4;
    
            RhoFile.OPEN_FOR_WRITE = 3;
    



    // === RhoFile static properties ===

    rhoUtil.createPropsProxy(RhoFile, [
    ], apiReq);

    // === RhoFile static methods ===

    rhoUtil.createMethodsProxy(RhoFile, [
    
          // function(/* const rho::String& */ from, /* const rho::String& */ to, /* optional function */ oResult)
          { methodName: 'copy', nativeName: 'copy', valueCallbackIndex: 2 }
    
          // function(/* const rho::String& */ from, /* const rho::String& */ to, /* optional function */ oResult)
        , { methodName: 'rename', nativeName: 'rename', valueCallbackIndex: 2 }
    
          // function(/* const rho::String& */ path, /* optional function */ oResult)
        , { methodName: 'makeDir', nativeName: 'makeDir', valueCallbackIndex: 1 }
    
          // function(/* const rho::String& */ path, /* optional function */ oResult)
        , { methodName: 'exists', nativeName: 'exists', valueCallbackIndex: 1 }
    
          // function(/* const rho::String& */ path, /* optional function */ oResult)
        , { methodName: 'getFileSize', nativeName: 'getFileSize', valueCallbackIndex: 1 }
    
          // function(/* const rho::String& */ path, /* optional function */ oResult)
        , { methodName: 'isDir', nativeName: 'isDir', valueCallbackIndex: 1 }
    
          // function(/* const rho::String& */ path, /* optional function */ oResult)
        , { methodName: 'isFile', nativeName: 'isFile', valueCallbackIndex: 1 }
    
          // function(/* const rho::String& */ path, /* optional function */ oResult)
        , { methodName: 'deleteFile', nativeName: 'deleteFile', valueCallbackIndex: 1 }
    
          // function(/* const rho::String& */ path, /* optional function */ oResult)
        , { methodName: 'deleteDir', nativeName: 'deleteDir', valueCallbackIndex: 1 }
    
          // function(/* const rho::String& */ path, /* optional function */ oResult)
        , { methodName: 'makeDirs', nativeName: 'makeDirs', valueCallbackIndex: 1 }
    
          // function(/* const rho::String& */ path, /* bool */ leaveRoot, /* optional function */ oResult)
        , { methodName: 'deleteRecursive', nativeName: 'deleteRecursive', valueCallbackIndex: 2 }
    
          // function(/* const rho::String& */ path, /* optional function */ oResult)
        , { methodName: 'listDir', nativeName: 'listDir', valueCallbackIndex: 1 }
    
          // function(/* const rho::String& */ path, /* optional function */ oResult)
        , { methodName: 'basename', nativeName: 'basename', valueCallbackIndex: 1 }
    
          // function(/* const rho::String& */ path, /* optional function */ oResult)
        , { methodName: 'dirname', nativeName: 'dirname', valueCallbackIndex: 1 }
    
          // function(/* const rho::String& */ p1, /* const rho::String& */ p2, /* optional function */ oResult)
        , { methodName: 'join', nativeName: 'join', valueCallbackIndex: 2 }
    
          // function(/* const rho::String& */ path, /* optional function */ oResult)
        , { methodName: 'read', nativeName: 'read', valueCallbackIndex: 1 }
    
    ], apiReq);

    // === RhoFile default instance support ===
    

    rhoUtil.namespace(moduleNS, RhoFile);

    

    

})(Rho.jQuery, Rho, Rho.util);
// Module Rho.System


(function ($, rho, rhoUtil) {
    'use strict';

    var moduleNS = 'Rho.System';
    var apiReq = rhoUtil.apiReqFor(moduleNS);


    // === System class definition ===

    function System() {
        var id = null;
        this.getId = function () {return id;};

        if (1 == arguments.length && arguments[0][rhoUtil.rhoIdParam()]) {
            if (moduleNS != arguments[0][rhoUtil.rhoClassParam()]) {
                throw "Wrong class instantiation!";
            }
            id = arguments[0][rhoUtil.rhoIdParam()];
        } else {
            id = rhoUtil.nextId();
            // constructor methods are following:
            
        }
    };

    // === System instance properties ===

    rhoUtil.createPropsProxy(System.prototype, [
    ], apiReq, function(){ return this.getId(); });

    // === System instance methods ===

    rhoUtil.createMethodsProxy(System.prototype, [
    
    ], apiReq, function(){ return this.getId(); });

    

    rhoUtil.createRawPropsProxy(System.prototype, [
    ]);

    // === System constants ===

    
            System.KEYBOARD_AUTOMATIC = 'automatic'; 
    
            System.KEYBOARD_HIDDEN = 'hidden'; 
    
            System.KEYBOARD_SHOWN = 'shown'; 
    
            System.PLATFORM_ANDROID = 'ANDROID'; 
    
            System.PLATFORM_IOS = 'APPLE'; 
    
            System.PLATFORM_WINDOWS_DESKTOP = 'WINDOWS_DESKTOP'; 
    
            System.PLATFORM_WM_CE = 'WINDOWS'; 
    
            System.PLATFORM_WP8 = 'WP8'; 
    
            System.REGKEY_CLASSES_ROOT = 'HKCR'; 
    
            System.REGKEY_CURRENT_USER = 'HKCU'; 
    
            System.REGKEY_LOCAL_MACHINE = 'HKLM'; 
    
            System.REGKEY_USERS = 'HKU'; 
    
            System.REGTYPE_BINARY = 'Binary'; 
    
            System.REGTYPE_DWORD = 'DWORD'; 
    
            System.REGTYPE_MULTI_SZ = 'MultiSZ'; 
    
            System.REGTYPE_SZ = 'String'; 
    
            System.SCREEN_LANDSCAPE = 'landscape'; 
    
            System.SCREEN_PORTRAIT = 'portrait'; 
    



    // === System static properties ===

    rhoUtil.createPropsProxy(System, [
        { propName: 'main_window_closed', propAccess: 'r' }
      , { propName: 'platform', propAccess: 'r' }
      , { propName: 'hasCamera', propAccess: 'r' }
      , { propName: 'screenWidth', propAccess: 'r' }
      , { propName: 'screenHeight', propAccess: 'r' }
      , { propName: 'realScreenWidth', propAccess: 'r' }
      , { propName: 'realScreenHeight', propAccess: 'r' }
      , { propName: 'screenOrientation', propAccess: 'r' }
      , { propName: 'ppiX', propAccess: 'r' }
      , { propName: 'ppiY', propAccess: 'r' }
      , { propName: 'deviceOwnerEmail', propAccess: 'r' }
      , { propName: 'deviceOwnerName', propAccess: 'r' }
      , { propName: 'devicePushId', propAccess: 'r' }
      , { propName: 'phoneId', propAccess: 'r' }
      , { propName: 'deviceName', propAccess: 'r' }
      , { propName: 'osVersion', propAccess: 'r' }
      , { propName: 'locale', propAccess: 'r' }
      , { propName: 'country', propAccess: 'r' }
      , { propName: 'isEmulator', propAccess: 'r' }
      , { propName: 'isRhoSimulator', propAccess: 'r' }
      , { propName: 'hasCalendar', propAccess: 'r' }
      , { propName: 'isMotorolaDevice', propAccess: 'r' }
      , { propName: 'oemInfo', propAccess: 'r' }
      , { propName: 'uuid', propAccess: 'r' }
      , { propName: 'applicationIconBadge', propAccess: 'rw' }
      , { propName: 'httpProxyURI', propAccess: 'rw' }
      , { propName: 'lockWindowSize', propAccess: 'rw' }
      , { propName: 'keyboardState', propAccess: 'rw' }
      , { propName: 'localServerPort', propAccess: 'r' }
      , { propName: 'freeServerPort', propAccess: 'r' }
      , { propName: 'screenAutoRotate', propAccess: 'rw' }
      , { propName: 'hasTouchscreen', propAccess: 'r' }
      , { propName: 'webviewFramework', propAccess: 'r' }
      , { propName: 'screenSleeping', propAccess: 'rw' }
      , { propName: 'hasNetwork', propAccess: 'r' }
      , { propName: 'hasWifiNetwork', propAccess: 'r' }
      , { propName: 'hasCellNetwork', propAccess: 'r' }
      , { propName: 'hasSqlite', propAccess: 'r' }
    ], apiReq);

    // === System static methods ===

    rhoUtil.createMethodsProxy(System, [
    
          // function(/* const rho::String& */ applicationUrl, /* optional function */ oResult)
          { methodName: 'applicationInstall', nativeName: 'applicationInstall', valueCallbackIndex: 1 }
    
          // function(/* const rho::String& */ applicationName, /* optional function */ oResult)
        , { methodName: 'isApplicationInstalled', nativeName: 'isApplicationInstalled', valueCallbackIndex: 1 }
    
          // function(/* const rho::String& */ applicationName, /* optional function */ oResult)
        , { methodName: 'applicationUninstall', nativeName: 'applicationUninstall', valueCallbackIndex: 1 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'getStartParams', nativeName: 'getStartParams', valueCallbackIndex: 0 }
    
          // function(/* const rho::String& */ url, /* optional function */ oResult)
        , { methodName: 'openUrl', nativeName: 'openUrl', valueCallbackIndex: 1 }
    
          // function(/* const rho::String& */ localPathToZip, /* const rho::String& */ password, /* optional function */ oResult)
        , { methodName: 'unzipFile', nativeName: 'unzipFile', valueCallbackIndex: 2 }
    
          // function(/* const rho::String& */ localPathToZip, /* const rho::String& */ localPathToFile, /* const rho::String& */ password, /* optional function */ oResult)
        , { methodName: 'zipFile', nativeName: 'zipFile', valueCallbackIndex: 3 }
    
          // function(/* const rho::String& */ localPathToZip, /* const rho::String& */ basePath, /* const rho::Vector<rho::String>& */ filePathsToZip, /* const rho::String& */ password, /* optional function */ oResult)
        , { methodName: 'zipFiles', nativeName: 'zipFiles', valueCallbackIndex: 4 }
    
          // function(/* const rho::Hashtable<rho::String, rho::String>& */ propertyMap, /* optional function */ oResult)
        , { methodName: 'setRegistrySetting', nativeName: 'setRegistrySetting', valueCallbackIndex: 1 }
    
          // function(/* const rho::Hashtable<rho::String, rho::String>& */ propertyMap, /* optional function */ oResult)
        , { methodName: 'getRegistrySetting', nativeName: 'getRegistrySetting', valueCallbackIndex: 1 }
    
          // function(/* const rho::Hashtable<rho::String, rho::String>& */ propertyMap, /* optional function */ oResult)
        , { methodName: 'deleteRegistrySetting', nativeName: 'deleteRegistrySetting', valueCallbackIndex: 1 }
    
          // function(/* int */ x, /* int */ y, /* int */ width, /* int */ height, /* optional function */ oResult)
        , { methodName: 'setWindowFrame', nativeName: 'setWindowFrame', valueCallbackIndex: 4 }
    
          // function(/* int */ x, /* int */ y, /* optional function */ oResult)
        , { methodName: 'setWindowPosition', nativeName: 'setWindowPosition', valueCallbackIndex: 2 }
    
          // function(/* int */ width, /* int */ height, /* optional function */ oResult)
        , { methodName: 'setWindowSize', nativeName: 'setWindowSize', valueCallbackIndex: 2 }
    
          // function(/* const rho::String& */ pathToFile, /* bool */ doNotBackup, /* optional function */ oResult)
        , { methodName: 'setDoNotBackupAttribute', nativeName: 'setDoNotBackupAttribute', valueCallbackIndex: 2 }
    
          // function(/* const rho::String& */ appName, /* const rho::String& */ params, /* bool */ blockingCall, /* optional function */ oResult)
        , { methodName: 'runApplication', nativeName: 'runApplication', valueCallbackIndex: 3 }
    
          // function(/* const rho::String& */ propertyName, /* optional function */ oResult)
        , { methodName: 'getProperty', nativeName: 'getProperty', persistentCallbackIndex: 1, valueCallbackIndex: 3 }
    
          // function(/* const rho::Vector<rho::String>& */ arrayofNames, /* optional function */ oResult)
        , { methodName: 'getProperties', nativeName: 'getProperties', persistentCallbackIndex: 1, valueCallbackIndex: 3 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'getAllProperties', nativeName: 'getAllProperties', persistentCallbackIndex: 0, valueCallbackIndex: 2 }
    
          // function(/* const rho::String& */ propertyName, /* const rho::String& */ propertyValue, /* optional function */ oResult)
        , { methodName: 'setProperty', nativeName: 'setProperty', valueCallbackIndex: 2 }
    
          // function(/* const rho::Hashtable<rho::String, rho::String>& */ propertyMap, /* optional function */ oResult)
        , { methodName: 'setProperties', nativeName: 'setProperties', valueCallbackIndex: 1 }
    
    ], apiReq);

    // === System default instance support ===
    

    rhoUtil.namespace(moduleNS, System);

    

    

})(Rho.jQuery, Rho, Rho.util);
// Module Rho.System.Process


(function ($, rho, rhoUtil) {
    'use strict';

    var moduleNS = 'Rho.System.Process';
    var apiReq = rhoUtil.apiReqFor(moduleNS);


    // === Process class definition ===

    function Process() {
        var id = null;
        this.getId = function () {return id;};

        if (1 == arguments.length && arguments[0][rhoUtil.rhoIdParam()]) {
            if (moduleNS != arguments[0][rhoUtil.rhoClassParam()]) {
                throw "Wrong class instantiation!";
            }
            id = arguments[0][rhoUtil.rhoIdParam()];
        } else {
            id = rhoUtil.nextId();
            // constructor methods are following:
            
        }
    };

    // === Process instance properties ===

    rhoUtil.createPropsProxy(Process.prototype, [
    ], apiReq, function(){ return this.getId(); });

    // === Process instance methods ===

    rhoUtil.createMethodsProxy(Process.prototype, [
    
          // function(/* optional function */ oResult)
          { methodName: 'waitForApplication', nativeName: 'waitForApplication', valueCallbackIndex: 0 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'closeHandle', nativeName: 'closeHandle', valueCallbackIndex: 0 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'getProcessExitCode', nativeName: 'getProcessExitCode', valueCallbackIndex: 0 }
    
    ], apiReq, function(){ return this.getId(); });

    

    rhoUtil.createRawPropsProxy(Process.prototype, [
    ]);

    // === Process constants ===

    



    // === Process static properties ===

    rhoUtil.createPropsProxy(Process, [
    ], apiReq);

    // === Process static methods ===

    rhoUtil.createMethodsProxy(Process, [
    
          // function(/* const rho::String& */ appName, /* const rho::String& */ params, /* bool */ blockingCall, /* optional function */ oResult)
          { methodName: 'runApplication', nativeName: 'runApplication', valueCallbackIndex: 3 }
    
    ], apiReq);

    // === Process default instance support ===
    

    rhoUtil.namespace(moduleNS, Process);

    

    

})(Rho.jQuery, Rho, Rho.util);
// Module Rho.WebView


(function ($, rho, rhoUtil) {
    'use strict';

    var moduleNS = 'Rho.WebView';
    var apiReq = rhoUtil.apiReqFor(moduleNS);


    // === WebView class definition ===

    function WebView() {
        var id = null;
        this.getId = function () {return id;};

        if (1 == arguments.length && arguments[0][rhoUtil.rhoIdParam()]) {
            if (moduleNS != arguments[0][rhoUtil.rhoClassParam()]) {
                throw "Wrong class instantiation!";
            }
            id = arguments[0][rhoUtil.rhoIdParam()];
        } else {
            id = rhoUtil.nextId();
            // constructor methods are following:
            
        }
    };

    // === WebView instance properties ===

    rhoUtil.createPropsProxy(WebView.prototype, [
    ], apiReq, function(){ return this.getId(); });

    // === WebView instance methods ===

    rhoUtil.createMethodsProxy(WebView.prototype, [
    
    ], apiReq, function(){ return this.getId(); });

    

    rhoUtil.createRawPropsProxy(WebView.prototype, [
    ]);

    // === WebView constants ===

    
            WebView.SAVE_FORMAT_JPEG = 'jpeg'; 
    
            WebView.SCROLL_FINGER = 'FingerScroll'; 
    
            WebView.SCROLL_NONE = 'None'; 
    
            WebView.SCROLL_SCROLLBARS = 'Scrollbars'; 
    



    // === WebView static properties ===

    rhoUtil.createPropsProxy(WebView, [
        { propName: 'framework', propAccess: 'r' }
      , { propName: 'fullScreen', propAccess: 'rw' }
      , { propName: 'enableZoom', propAccess: 'r' }
      , { propName: 'enablePageLoadingIndication', propAccess: 'r' }
      , { propName: 'enableWebPlugins', propAccess: 'r' }
      , { propName: 'navigationTimeout', propAccess: 'rw' }
      , { propName: 'scrollTechnique', propAccess: 'r' }
      , { propName: 'fontFamily', propAccess: 'r' }
      , { propName: 'userAgent', propAccess: 'r' }
      , { propName: 'viewportEnabled', propAccess: 'r' }
      , { propName: 'viewportWidth', propAccess: 'r' }
      , { propName: 'cacheSize', propAccess: 'r' }
      , { propName: 'enableCache', propAccess: 'r' }
      , { propName: 'acceptLanguage', propAccess: 'rw' }
      , { propName: 'zoomPage', propAccess: 'rw' }
      , { propName: 'textZoomLevel', propAccess: 'rw' }
      , { propName: 'activeTab', propAccess: 'r' }
    ], apiReq);

    // === WebView static methods ===

    rhoUtil.createMethodsProxy(WebView, [
    
          // function(/* int */ tabIndex, /* optional function */ oResult)
          { methodName: 'refresh', nativeName: 'refresh', valueCallbackIndex: 1 }
    
          // function(/* const rho::String& */ url, /* int */ tabIndex, /* optional function */ oResult)
        , { methodName: 'navigate', nativeName: 'navigate', valueCallbackIndex: 2 }
    
          // function(/* int */ tabIndex, /* optional function */ oResult)
        , { methodName: 'navigateBack', nativeName: 'navigateBack', valueCallbackIndex: 1 }
    
          // function(/* int */ tabIndex, /* optional function */ oResult)
        , { methodName: 'currentLocation', nativeName: 'currentLocation', valueCallbackIndex: 1 }
    
          // function(/* int */ tabIndex, /* optional function */ oResult)
        , { methodName: 'currentURL', nativeName: 'currentURL', valueCallbackIndex: 1 }
    
          // function(/* const rho::String& */ javascriptText, /* int */ tabIndex, /* optional function */ oResult)
        , { methodName: 'executeJavascript', nativeName: 'executeJavascript', valueCallbackIndex: 2 }
    
          // function(/* const rho::String& */ url, /* const rho::String& */ cookie, /* optional function */ oResult)
        , { methodName: 'setCookie', nativeName: 'setCookie', valueCallbackIndex: 2 }
    
          // function(/* const rho::String& */ format, /* const rho::String& */ path, /* int */ tabIndex, /* optional function */ oResult)
        , { methodName: 'save', nativeName: 'save', valueCallbackIndex: 3 }
    
    ], apiReq);

    // === WebView default instance support ===
    

    rhoUtil.namespace(moduleNS, WebView);

    

    

})(Rho.jQuery, Rho, Rho.util);
// Module Rho.RhoConnectClient


(function ($, rho, rhoUtil) {
    'use strict';

    var moduleNS = 'Rho.RhoConnectClient';
    var apiReq = rhoUtil.apiReqFor(moduleNS);


    // === RhoConnectClient class definition ===

    function RhoConnectClient() {
        var id = null;
        this.getId = function () {return id;};

        if (1 == arguments.length && arguments[0][rhoUtil.rhoIdParam()]) {
            if (moduleNS != arguments[0][rhoUtil.rhoClassParam()]) {
                throw "Wrong class instantiation!";
            }
            id = arguments[0][rhoUtil.rhoIdParam()];
        } else {
            id = rhoUtil.nextId();
            // constructor methods are following:
            
        }
    };

    // === RhoConnectClient instance properties ===

    rhoUtil.createPropsProxy(RhoConnectClient.prototype, [
    ], apiReq, function(){ return this.getId(); });

    // === RhoConnectClient instance methods ===

    rhoUtil.createMethodsProxy(RhoConnectClient.prototype, [
    
    ], apiReq, function(){ return this.getId(); });

    

    rhoUtil.createRawPropsProxy(RhoConnectClient.prototype, [
    ]);

    // === RhoConnectClient constants ===

    



    // === RhoConnectClient static properties ===

    rhoUtil.createPropsProxy(RhoConnectClient, [
        { propName: 'userName', propAccess: 'r' }
      , { propName: 'pollInterval', propAccess: 'rw' }
      , { propName: 'syncServer', propAccess: 'rw' }
      , { propName: 'bulksyncState', propAccess: 'rw' }
      , { propName: 'pageSize', propAccess: 'rw' }
      , { propName: 'threadedMode', propAccess: 'rw' }
      , { propName: 'showStatusPopup', propAccess: 'rw' }
      , { propName: 'sslVerifyPeer', propAccess: 'rw' }
    ], apiReq);

    // === RhoConnectClient static methods ===

    rhoUtil.createMethodsProxy(RhoConnectClient, [
    
          // function(/* optional function */ oResult)
          { methodName: 'isLoggedIn', nativeName: 'isLoggedIn', valueCallbackIndex: 0 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'isSyncing', nativeName: 'isSyncing', valueCallbackIndex: 0 }
    
          // function(/* const rho::Hashtable<rho::String, rho::String>& */ args, /* optional function */ oResult)
        , { methodName: 'search', nativeName: 'search', persistentCallbackIndex: 1, valueCallbackIndex: 3 }
    
          // function(/* bool */ showStatusPopup, /* const rho::String& */ queryParams, /* bool */ syncOnlyChangedSources, /* optional function */ oResult)
        , { methodName: 'doSync', nativeName: 'doSync', valueCallbackIndex: 3 }
    
          // function(/* const rho::String& */ sourceName, /* bool */ showStatusPopup, /* const rho::String& */ queryParams, /* optional function */ oResult)
        , { methodName: 'doSyncSource', nativeName: 'doSyncSource', valueCallbackIndex: 3 }
    
          // function(/* const rho::String& */ login, /* const rho::String& */ password, /* optional function */ oResult)
        , { methodName: 'login', nativeName: 'login', persistentCallbackIndex: 2, valueCallbackIndex: 4 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'logout', nativeName: 'logout', valueCallbackIndex: 0 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'stopSync', nativeName: 'stopSync', valueCallbackIndex: 0 }
    
          // function(/* const rho::String& */ sourceName, /* optional function */ oResult)
        , { methodName: 'setNotification', nativeName: 'setNotification', persistentCallbackIndex: 1, valueCallbackIndex: 3 }
    
          // function(/* const rho::String& */ sourceName, /* optional function */ oResult)
        , { methodName: 'clearNotification', nativeName: 'clearNotification', valueCallbackIndex: 1 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'setObjectNotification', nativeName: 'setObjectNotification', persistentCallbackIndex: 0, valueCallbackIndex: 2 }
    
          // function(/* const rho::String& */ sourceName, /* const rho::String& */ object, /* optional function */ oResult)
        , { methodName: 'addObjectNotify', nativeName: 'addObjectNotify', valueCallbackIndex: 2 }
    
          // function(/* optional function */ oResult)
        , { methodName: 'cleanObjectNotify', nativeName: 'cleanObjectNotify', valueCallbackIndex: 0 }
    
          // function(/* const rho::String& */ sourceName, /* optional function */ oResult)
        , { methodName: 'getLastSyncObjectCount', nativeName: 'getLastSyncObjectCount', valueCallbackIndex: 1 }
    
          // function(/* const rho::String& */ sourceName, /* const rho::String& */ propertyName, /* const rho::String& */ propertyValue, /* optional function */ oResult)
        , { methodName: 'setSourceProperty', nativeName: 'setSourceProperty', valueCallbackIndex: 3 }
    
          // function(/* const rho::String& */ sourceName, /* const rho::String& */ propertyName, /* optional function */ oResult)
        , { methodName: 'getSourceProperty', nativeName: 'getSourceProperty', valueCallbackIndex: 2 }
    
    ], apiReq);

    // === RhoConnectClient default instance support ===
    

    rhoUtil.namespace(moduleNS, RhoConnectClient);

    

    

})(Rho.jQuery, Rho, Rho.util);
// Module Rho.Application

(function ($, rho, rhoUtil) {
    'use strict';

    var moduleNS = 'Rho.Application';
    var apiReq = rhoUtil.apiReqFor(moduleNS);
    var App = {};

    // At this moment we unable to extend target namespace with property proxies defined in a local namespace.
    // So defining (overwriting) them right in the target namespace.
    rhoUtil.createPropsProxy( Rho.Application, [
        { propName: 'defaultNativeMenu', propAccess: 'r', customGet: function(){
            return [
                {'label':'Home', 'action': 'home'},
                {'label':'Refresh', 'action': 'refresh'},
                {'label':'Sync', 'action': 'sync'},
                {'label':'Settings', 'action': 'options'},
                {'label':'Log', 'action': 'log'},
                {'label':'separator', 'action': ''},
                {'label':'Exit', 'action': 'close'}
            ];
        } }
    ], apiReq);

    function processApplicationEvent(event) {
        applicationEvent = event.applicationEvent;
        eventData = event.eventData;
        
        // UICreated
        if (applicationEvent == Rho.Application.APP_EVENT_UICREATED) {
            console.log("AppEvent: "+ applicationEvent);
            start_url = Rho.Application.startURI;
            if (!start_url){
                start_url = "";
            }
            if (Rho.System.platform != Rho.System.PLATFORM_WP8) {
              invalid_security_token_start_path = Rho.Application.invalidSecurityTokenStartPath;

              if (Rho.Application.securityTokenNotPassed) {
                if (invalid_security_token_start_path && invalid_security_token_start_path.length() > 0) {
                  start_url = invalid_security_token_start_path;
                } else {
                  // exit from application - old way
                  Rho.Log.fatalError('processApplicationEvent: security_token is not passed - application will closed','EROOR');
                  Rho.System.exit();
                }
              }
            }
            console.log("on_ui_created.navigate to start url: "+ start_url);
            Rho.WebView.navigate(start_url);
        }
        // UIDestroyed
        else if (applicationEvent==Rho.Application.APP_EVENT_UIDESTROYED) {
            console.log("AppEvent: "+ applicationEvent);
        }
        else if (applicationEvent==Rho.Application.APP_EVENT_CONFIGCONFLICT) {
            console.log("AppEvent: "+ applicationEvent);
        }
        //
        else if (applicationEvent==Rho.Application.APP_EVENT_DBMIGRATESOURCE) {
            console.log("AppEvent: "+ applicationEvent);
            console.log( "default on_migrate_source - do nothing; old_version :"+eventData.old_version+"; new_src : "+eventData.new_src);
            //if new_src['schema']
            //    db = ::Rho::RHO.get_src_db(new_src['name'])
            //    db.delete_table(new_src['name'])
            //    return false  #create new table
            //end
            return true
        }
        //
        else if (applicationEvent==Rho.Application.APP_EVENT_SYNCUSERCHANGED) {
            Rho.ORM.databaseFullReset(false, false)
            //::Rho::RHO.get_user_db().execute_sql("UPDATE client_info SET client_id=?", "")
        }
    }

    var App = {
        processApplicationEvent : function(event) {
            processApplicationEvent(event);
        }
    };

    rhoUtil.namespace(moduleNS, App, true);

    // function setAppEventsHandler()
    // {
    //     Rho.Application.setApplicationNotify(processApplicationEvent);
    // }

    // $(document).ready( setAppEventsHandler );

})(Rho.jQuery, Rho, Rho.util);
// Module Rho.Database


(function ($, rho, rhoUtil) {
    'use strict';

    var moduleNS = 'Rho.Database';

    var executeSql = function(db, sqlStmt, isBatch, args) {
        return (sqlStmt === undefined) ? [] : db.execute(sqlStmt, isBatch, args);
    };


    // === Database class definition ===

    function Database() {
        var id = null;
        this.getId = function () {return id;};

        if (1 == arguments.length && arguments[0][rhoUtil.rhoIdParam()]) {
            if (moduleNS != arguments[0][rhoUtil.rhoClassParam()]) {
                throw "Wrong class instantiation!";
            }
            id = arguments[0][rhoUtil.rhoIdParam()];
        } else {
            id = rhoUtil.nextId();
            // constructor methods are following:
            this.initialize.apply(this, arguments);
        }
    }

    // === Database instance members ===


    Database.prototype.initialize = function(dbPath,dbPartition) {
        this.dbPath = dbPath;
        this.db = new Rho.Database.SQLite3(dbPath, dbPartition);
    };


    Database.prototype.close = function() {
        if (this.db === null) {
            return false;
        }
        this.db.close();
        this.dbPath = null;
        this.db = null;
        return true;
    };

    Database.prototype.startTransaction = function() {
        this.db.startTransaction();
    };


    Database.prototype.commitTransaction = function() {
        this.db.commitTransaction();
    };


    Database.prototype.rollbackTransaction = function() {
        this.db.rollbackTransaction();
    };


    Database.prototype.lockDb = function() {
        this.db.lockDb();
    };


    Database.prototype.unlockDb = function() {
        this.db.unlockDb();
    };


    Database.prototype.isUiWaitForDb = function() {
        return this.db.isUiWaitForDb();
    };


    Database.prototype.executeSql = function(/* const rho::String& */ sqlStmt, /* const rho::Vector<rho::String>& */ args) {
        return executeSql(this.db, sqlStmt, false, args);
    };


    Database.prototype.executeBatchSql = function(/* const rho::String& */ sqlStmt) {
        return executeSql(this.db, sqlStmt, true, []);
    };


    Database.prototype.destroyTable = function(/* const rho::String& */ tableName) {
        this.db.destroyTables([tableName], []);
    };


    Database.prototype.destroyTables = function(/* const rho::Hashtable<rho::String, rho::String>& */ propertyMap) {
        this.db.destroyTables(propertyMap['include'], propertyMap['exclude']);
    };


    Database.prototype.isTableExist = function(/* const rho::String& */ tableName) {
        return this.db.isTableExist(tableName);
    };


    Database.prototype.setDoNotBackupAttribute = function(/* bool */ setFlag) {
        setFlag = (setFlag === undefined) ? true : setFlag;
        if (Rho.System.getProperty('platform') === 'APPLE') {
            Rho.System.setDoNotBackupAttribute(this.dbPath             , setFlag);
            Rho.System.setDoNotBackupAttribute(this.dbPath + '.version', setFlag);
        }
    };


    // === Database static members ===



    // === Database default instance support ===



    rhoUtil.namespace(moduleNS, Database, true);

})(Rho.jQuery, Rho, Rho.util);
// Module Rho.NewORMHelper

(function ($, rho, rhoUtil) {
    'use strict';

    // === Rho.NewORM wrapper members ===
    Rho.NewORM.addModel = function(modelname, modeldef){
        var model = new Rho.NewORMModel(modelname);
        modeldef(model);
        model.initModel();
        return model;
    };
    Rho.NewORM.getModel = function(modelname){
        return Rho.NewORMModel.getModel(modelname);
    };

    // === Rho.NewORMModel wrapper members ===
    Rho.NewORMModel.prototype._normalize_complex_conditions = function(conditions, op){
        console.log("MZV_DEBUG : _normalize_complex_conditions : " + JSON.stringify(conditions) + ", " + op);
        if(!conditions){
            return ['', []];
        };
        op = op || 'AND';
        if(Object.prototype.toString.call(conditions) === '[object Array]') {
            var quests = new Array();
            var sqlRes = '';
            for (var item in conditions) {
                if (sqlRes.length > 0) {
                    sqlRes += ' ' + op + ' ';
                };
                if(item.hasOwnProperty('conditions')) {
                    var subCond = this._normalize_complex_conditions(item.conditions, item.op);
                }
                else {
                    var subCond = this._normalize_hash_condition(item, 'AND');
                }
                sqlRes += '(' + subCond[0] + ')';
                quests = quests.concat(subCond[1]);
            }
            return [sqlRes, quests];
        }
        else {
            return this._normalize_hash_condition(conditions, op);
        };
    };

    Rho.NewORMModel.prototype._normalize_hash_condition = function(item, op){
        // Hash condition can be of two forms:
        // 1) {'key1':'value'1, 'key2':'value2' ... }, 'op':'OP1' => translates into : key1=value1 OP1 key2=value2
        // 2) or full form { 'op':'OP1', 'func':'FUNC1', 'attrib':'key1', 'value(s)':'value1' } => translates into FUNC1(key1) OP1 value1
        if(item.hasOwnProperty('attrib')) {
            var itemOp = "=";
            var itemFunc = "";
            var itemName = "";
            var itemValues = "";
            for (var propName in item) {
                switch (propName) {
                case 'op'  :
                    itemOp = item[propName];
                    break;
                case 'func':
                    itemFunc = item[propName];
                    break;
                case 'attrib':
                    itemName = item[propName];
                    break;
                case 'value':
                case 'values':
                    itemValues = item[propName];
                    break;
                };
            };
            if(itemValues instanceof String){
                itemValues = [itemValues];
            };

            subCond = this.buildComplexWhereCond(itemName, itemValues, itemOp, itemFunc);
            return [subCond[0], subCond.slice(1)];
        }
        else {
            console.log("MZV_DEBUG : _normalize_hash_conditions : " + JSON.stringify(item) + ", " + op);
            var sqlRes = "";
            var condQuests = new Array();
            for (var propName in item) {
                console.log("MZV_DEBUG : _breaking cond : " + propName + ", " + item[propName]);
                var subCond = this.buildComplexWhereCond(propName, [item[propName]], "=", '');
                console.log("MZV_DEBUG : _received back : " + JSON.stringify(subCond) + ", " + subCond[0] + ", " + JSON.stringify(subCond.slice(1)));
                if(sqlRes.length > 0) {
                    sqlRes += " " + op + " ";
                };
                sqlRes += subCond[0];
                condQuests = condQuests.concat(subCond.slice(1));
                console.log("MZV_DEBUG : _should be concat : " + sqlRes + ", " + JSON.stringify(condQuests));
            };
            console.log("MZV_DEBUG : _and in the end we have : " + sqlRes + ", " + JSON.stringify(condQuests));
            return [sqlRes, condQuests];
        };
    };


    Rho.NewORMModel.prototype._normalize_conditions = function(what, conditions, op){
        console.log("MZV_DEBUG : make_conditions : " + what + ", " + JSON.stringify(conditions) + ", " + op);
        if (!op) {
            var retV;
            if(!conditions) {
                retV = this.buildSimpleWhereCond(what, []);
                return [retV[0], retV.slice(1)];
            }
            else if(Object.prototype.toString.call(conditions) === '[object String]') {
                retV = this.buildSimpleWhereCond(what, [conditions]);
                return [retV[0], retV.slice(1)];
            }
            else if(Object.prototype.toString.call(conditions) === '[object Array]') {
                retV = this.buildSimpleWhereCond(what, conditions);
                return [retV[0], retV.slice(1)];
            } else {
                return this._normalize_complex_conditions(conditions, 'AND');
            };
        };
        return this._normalize_complex_conditions(conditions, op);
    };


    Rho.NewORMModel.prototype._normalize_args_for_find = function(what, options, normalized_string_args, normalized_vector_args){
        // 1) Normalize LIMITS
        var limitArgs = this.buildFindLimits(what, options);
        for (var property in limitArgs) {
            normalized_string_args[property] = limitArgs[property];
        }

        // 2) Normalize ORDER BY
        var order_dir = options.orderdir || [];
        var order_attr = options.order || [];
        if(Object.prototype.toString.call(order_dir) === '[object String]'){
            order_dir = [order_dir];
        };
        if(Object.prototype.toString.call(order_attr) === '[object String]'){
            order_attr = [order_attr];
        };
        normalized_vector_args.order = this.buildFindOrder(order_attr, order_dir);

        // 3) Normalize SELECT
        var select_arr = options.select || [];
        if(Object.prototype.toString.call(options.conditions) === '[object String]') {
            select_arr = [select_arr];
        };
        normalized_vector_args.select = select_arr;

        // 4) Build Where Conditions
        var condVal = this._normalize_conditions(what, options.conditions, options.op);
        console.log(" we have here : " + condVal[0] + ", " + JSON.stringify(condVal[1]));
        normalized_string_args.conditions = condVal[0] || "";
        normalized_vector_args.quests = condVal[1] || [];
    };

    Rho.NewORMModel.prototype.find = function(what, options){
        what = what || 'all';
        options = options || {};
        var _found;
        // first - check for Hash conditions PropertyBag
        if(this.fixed_schema) {
            var normalized_vector_args = {};
            var normalized_string_args = {};
            console.log("we have here fixed schema options as " + JSON.stringify(options));
            this._normalize_args_for_find(what, options, normalized_string_args, normalized_vector_args);
            console.log("we have here options before find as " + what + ", " + JSON.stringify(normalized_string_args) + ", " + JSON.stringify(normalized_vector_args));
            _found = this.findObjects(what, normalized_string_args,
                                    normalized_vector_args['quests'],
                                    normalized_vector_args['select'],
                                    normalized_vector_args['order']);
        } else { // property bag
            // only LIMIT is supported
            normalized_string_args = {};
            var limitArgs = this.buildFindLimits(what, options);
            for (var property in limitArgs) {
                normalized_string_args[property] = limitArgs[property];
            }
            // 3) Normalize SELECT
            var select_arr = options.select || [];
            if(Object.prototype.toString.call(options.conditions) === '[object String]') {
                select_arr = [select_arr];
            };
            normalized_string_args['op'] = options.op || 'AND';
            if(Object.prototype.toString.call(options.conditions) === '[object Object]'){
                _found = this.findObjectsPropertyBagByCondHash(what, options.conditions, normalized_string_args, select_arr);
            } else { // the only other supported case is simple string (WHERE sql) or array (WHERE sql + quests)
                options.conditions = options.conditions || [""];
                options.quests = [];
                if(Object.prototype.toString.call(options.conditions) === '[object Array]') {
                    options.quests = options.conditions.slice(1);
                    options.conditions = options.conditions[0];
                };
                console.log("we are here and " + what + ", " + JSON.stringify(options.conditions) + ", " + JSON.stringify(options.quests));
                _found = this.findObjectsPropertyBagByCondArray(what, options.conditions, options.quests, normalized_string_args, select_arr);
            };
        };

        console.log("we are here in find result and " + JSON.stringify(_found) + ", " + JSON.stringify(_found[0]));

        switch (what) {
            case 'all'  : return this._wrapORMInstances(_found);
            case 'count': return _found ;
            case 'first':
            default     : return this._wrapORMInstance(_found[0]);
        };
    };

    Rho.NewORMModel.prototype.findBySql = function(sqlQuery){
        var _found = this.find_by_sql(sqlQuery);
        return this._wrapORMInstances(_found);
    };

    Rho.NewORMModel.prototype.paginate = function(options){
        options['page'] = options['page'] || 0;
        options['per_page'] = options['per_page'] || 10;
        options['offset'] = options['page'] * options['per_page'];
        return this.find('all', options);
    };

    Rho.NewORMModel.prototype.delete_all = function(options){
        console.log("we are in before 2 delete_all");
        var conditions = options || {};
        options = {};
        options.conditions = conditions;

        if(this.fixed_schema) {
            console.log("we are in before 3 fixed_schema");
            var normalized_vector_args = {};
            var normalized_string_args = {};
            this._normalize_args_for_find("all", options, normalized_string_args, normalized_vector_args);
            console.log("we are in before 3.1 fixed_schema" + options + ", " + JSON.stringify(normalized_string_args) + JSON.stringify(normalized_vector_args));
            return this.deleteObjects(normalized_string_args,
                                      normalized_vector_args['quests']);
        } else { // property bag
            normalized_string_args = {};
            console.log("we are in before 2.1 propbag");
            var limitArgs = this.buildFindLimits("all", options);
            console.log("we are in before 2.2 propbag");
            for (var property in limitArgs) {
                normalized_string_args[property] = limitArgs[property];
            }
            normalized_string_args.op = options.op || 'AND';
            if(Object.prototype.toString.call(options.conditions) === '[object Object]'){
                console.log("we are in before 3 propbag " + options.conditions);
                return this.deleteObjectsPropertyBagByCondHash(options.conditions, normalized_string_args);
            } else { // the only other supported case is simple string (WHERE sql) or array (WHERE sql + quests)
                console.log("we are in before 4 propbag");
                conditions = options.conditions || [""];
                quests = [];
                if(Object.prototype.toString.call(options.conditions) === '[object Array]') {
                    quests = options.conditions.slice(1);
                    conditions = options.conditions[0];
                };
                console.log("we are here and " + JSON.stringify(conditions) + ", " + JSON.stringify(quests));
                return this.deleteObjectsPropertyBagByCondArray(conditions, quests, normalized_string_args);
            };
        };
    };
    Rho.NewORMModel.prototype.deleteAll = function(options){
        console.log("we are in before 1 deleteAll")
        return this.delete_all(options);
    };
    Rho.NewORMModel.prototype._wrapORMInstance = function(objInst){
        if(!objInst) {
            return undefined;
        }
        var _new_instance = new _ORMObjectInstance(this, objInst);
        return _new_instance;
    };
    Rho.NewORMModel.prototype._wrapORMInstances = function(_objects){
        var _model_instances = [];
        for (var i = 0; i < _objects.length; i++) {
            var _object_instance = new _ORMObjectInstance(this, _objects[i]);
            _model_instances.push(_object_instance);
        };
        return _model_instances;
    };
    Rho.NewORMModel.prototype.make = function(objHash){
        var _new_instance = new _ORMObjectInstance(this, this.createInstance(objHash));
        return _new_instance;
    };
    Rho.NewORMModel.prototype.count = function(){
        return this.getCount();
    };
    Rho.NewORMModel.prototype.create = function(objHash){
        var _new_instance = new _ORMObjectInstance(this, this.createObject(objHash));
        return _new_instance;
    };

    // === Rho.NewORMModel Object's wrapper methods ===
    var _ORMObjectInstance = function(model, obj){
        for (var attrname in obj) { this[attrname] = obj[attrname]; }
        this.source_id = model.source_id

        Object.defineProperty(this, '_klass_model', {
            value: function () {
                return model;
            },
            enumerable: false
        });
        Object.defineProperty(this, 'vars', {
            value: function () {
                var objAttrs = {};
                for (var attrname in this) { objAttrs[attrname] = this[attrname]; }
                return objAttrs;
            },
            enumerable: false
        });
        Object.defineProperty(this, 'get', {
            value: function (propname) {
                return this[propname];
            },
            enumerable: false
        });
        Object.defineProperty(this, 'has', {
            value: function (propname) {
                return this.hasOwnProperty(propname);
            },
            enumerable: false
        });
        Object.defineProperty(this, 'set', {
            value: function (propname, value) {
                this[propname] = value;
                return this;
            },
            enumerable: false
        });
        Object.defineProperty(this, 'updateAttributes', {
            value: function (newAttrs) {
                var updatedAttrs = this._klass_model().updateObject(this.object, this, newAttrs);
                for (var attrname in updatedAttrs) { this[attrname] = updatedAttrs[attrname]; }
                console.log("and after update we have : " + JSON.stringify(this));
                return this;
            },
            enumerable: false
        });
        Object.defineProperty(this, 'save', {
            value: function () {
                var updatedAttrs = this._klass_model().saveObject(this.object, this);
                for (var attrname in updatedAttrs) { this[attrname] = updatedAttrs[attrname]; }
                return this;
            },
            enumerable: false
        });
        Object.defineProperty(this, 'destroy', {
            value: function () {
                this._klass_model().deleteObject(this.object);
                return this;
            },
            enumerable: false
        });
    };

    Rho.NewORM.dbPartitions = {};
    Rho.NewORM.dbConnection = function (partition){
        //look for db connection, if not found create one
        var filepath = Rho.Application.databaseFilePath(partition);
        var partitions = Rho.NewORM.getDbPartitions();
        var db;
        if(partitions && partitions[partition]){
            db = partitions[partition];
        }
        else{
            db = new Rho.Database(filepath, partition);
            partitions[partition] = db;
        }
        return db;
    };
    Rho.NewORM.getDbPartitions = function() {
        return Rho.NewORM.dbPartitions;
    };
    Rho.NewORM.clear = function(){
        Rho.NewORMModel.clear();
    };

    // Global initialization
    console.log("Replacing Old Rho.ORM with new one!!!");
    Rho.ORM = Rho.NewORM;
    Rho.ORMHelper = Rho.NewORM;
    Rho.ORMModel = Rho.NewORMModel;
    Rho.ORM.dbConnection('local');
    Rho.ORM.dbConnection('user');
    Rho.ORM.dbConnection('app');


})(Rho.jQuery, Rho, Rho.util);

// Module rhoapi-native.all

