(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const A of i)if(A.type==="childList")for(const n of A.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(i){const A={};return i.integrity&&(A.integrity=i.integrity),i.referrerPolicy&&(A.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?A.credentials="include":i.crossOrigin==="anonymous"?A.credentials="omit":A.credentials="same-origin",A}function r(i){if(i.ep)return;i.ep=!0;const A=s(i);fetch(i.href,A)}})();var Kt,E,Us,Q,qe,Hs,Fs,le,Bt,St,Bs,$e,me,ge,Yt={},Zt=[],Er=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,te=Array.isArray;function Y(e,t){for(var s in t)e[s]=t[s];return e}function xe(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function Pr(e,t,s){var r,i,A,n={};for(A in t)A=="key"?r=t[A]:A=="ref"?i=t[A]:n[A]=t[A];if(arguments.length>2&&(n.children=arguments.length>3?Kt.call(arguments,2):s),typeof e=="function"&&e.defaultProps!=null)for(A in e.defaultProps)n[A]===void 0&&(n[A]=e.defaultProps[A]);return Ot(e,n,r,i,null)}function Ot(e,t,s,r,i){var A={type:e,props:t,key:s,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++Us,__i:-1,__u:0};return i==null&&E.vnode!=null&&E.vnode(A),A}function U(e){return e.children}function zt(e,t){this.props=e,this.context=t}function ot(e,t){if(t==null)return e.__?ot(e.__,e.__i+1):null;for(var s;t<e.__k.length;t++)if((s=e.__k[t])!=null&&s.__e!=null)return s.__e;return typeof e.type=="function"?ot(e):null}function Mr(e){if(e.__P&&e.__d){var t=e.__v,s=t.__e,r=[],i=[],A=Y({},t);A.__v=t.__v+1,E.vnode&&E.vnode(A),ke(e.__P,A,t,e.__n,e.__P.namespaceURI,32&t.__u?[s]:null,r,s??ot(t),!!(32&t.__u),i),A.__v=t.__v,A.__.__k[A.__i]=A,Vs(r,A,i),t.__e=t.__=null,A.__e!=s&&Os(A)}}function Os(e){if((e=e.__)!=null&&e.__c!=null)return e.__e=e.__c.base=null,e.__k.some(function(t){if(t!=null&&t.__e!=null)return e.__e=e.__c.base=t.__e}),Os(e)}function je(e){(!e.__d&&(e.__d=!0)&&Q.push(e)&&!Gt.__r++||qe!=E.debounceRendering)&&((qe=E.debounceRendering)||Hs)(Gt)}function Gt(){try{for(var e,t=1;Q.length;)Q.length>t&&Q.sort(Fs),e=Q.shift(),t=Q.length,Mr(e)}finally{Q.length=Gt.__r=0}}function zs(e,t,s,r,i,A,n,l,o,c,h){var u,d,p,b,_,y,f=r&&r.__k||Zt,m=t.length;for(o=Tr(s,t,f,o,m),u=0;u<m;u++)(p=s.__k[u])!=null&&(d=p.__i!=-1&&f[p.__i]||Yt,p.__i=u,y=ke(e,p,d,i,A,n,l,o,c,h),b=p.__e,p.ref&&d.ref!=p.ref&&(d.ref&&Se(d.ref,null,p),h.push(p.ref,p.__c||b,p)),_==null&&b!=null&&(_=b),4&p.__u?(o=qs(p,o,e),d.__e&&(d.__e=null)):typeof p.type=="function"&&y!==void 0?o=y:b&&(o=b.nextSibling),p.__u&=-7);return s.__e=_,o}function Tr(e,t,s,r,i){var A,n,l,o,c,h=s.length,u=h,d=0;for(e.__k=new Array(i),A=0;A<i;A++)(n=t[A])!=null&&typeof n!="boolean"&&typeof n!="function"?(typeof n=="string"||typeof n=="number"||typeof n=="bigint"||n.constructor==String?n=e.__k[A]=Ot(null,n,null,null,null):te(n)?n=e.__k[A]=Ot(U,{children:n},null,null,null):n.constructor===void 0&&n.__b>0?n=e.__k[A]=Ot(n.type,n.props,n.key,n.ref?n.ref:null,n.__v):e.__k[A]=n,o=A+d,n.__=e,n.__b=e.__b+1,l=null,(c=n.__i=Cr(n,s,o,u))!=-1&&(u--,(l=s[c])&&(l.__u|=2)),l==null||l.__v==null?(c==-1&&(i>h?d--:i<h&&d++),typeof n.type!="function"&&(n.__u|=4)):c!=o&&(c==o-1?d--:c==o+1?d++:(c>o?d--:d++,n.__u|=4))):e.__k[A]=null;if(u)for(A=0;A<h;A++)(l=s[A])!=null&&(2&l.__u)==0&&(l.__e==r&&(r=ot(l)),Zs(l,l));return r}function qs(e,t,s){var r,i;if(typeof e.type=="function"){for(r=e.__k,i=0;r&&i<r.length;i++)r[i]&&(r[i].__=e,t=qs(r[i],t,s));return t}e.__e!=t&&(t&&e.type&&!t.parentNode&&(t=ot(e)),t=s.insertBefore(e.__e,t||null));do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function Cr(e,t,s,r){var i,A,n,l=e.key,o=e.type,c=t[s],h=c!=null&&(2&c.__u)==0;if(c===null&&l==null||h&&l==c.key&&o==c.type)return s;if(r>(h?1:0)){for(i=s-1,A=s+1;i>=0||A<t.length;)if((c=t[n=i>=0?i--:A++])!=null&&(2&c.__u)==0&&l==c.key&&o==c.type)return n}return-1}function Ve(e,t,s){t[0]=="-"?e.setProperty(t,s??""):e[t]=s==null?"":typeof s!="number"||Er.test(t)?s:s+"px"}function Wt(e,t,s,r,i){var A,n;t:if(t=="style")if(typeof s=="string")e.style.cssText=s;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)s&&t in s||Ve(e.style,t,"");if(s)for(t in s)r&&s[t]==r[t]||Ve(e.style,t,s[t])}else if(t[0]=="o"&&t[1]=="n")A=t!=(t=t.replace(Bs,"$1")),n=t.toLowerCase(),t=n in e||t=="onFocusOut"||t=="onFocusIn"?n.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+A]=s,s?r?s[St]=r[St]:(s[St]=$e,e.addEventListener(t,A?ge:me,A)):e.removeEventListener(t,A?ge:me,A);else{if(i=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=s??"";break t}catch{}typeof s=="function"||(s==null||s===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&s==1?"":s))}}function Ye(e){return function(t){if(this.l){var s=this.l[t.type+e];if(t[Bt]==null)t[Bt]=$e++;else if(t[Bt]<s[St])return;return s(E.event?E.event(t):t)}}}function ke(e,t,s,r,i,A,n,l,o,c){var h,u,d,p,b,_,y,f,m,w,M,T,S,F,q,H,I=t.type;if(t.constructor!==void 0)return null;128&s.__u&&(o=!!(32&s.__u),A=[l=t.__e=s.__e]),(h=E.__b)&&h(t);t:if(typeof I=="function"){u=n.length;try{if(m=t.props,w=I.prototype&&I.prototype.render,M=(h=I.contextType)&&r[h.__c],T=h?M?M.props.value:h.__:r,s.__c?f=(d=t.__c=s.__c).__=d.__E:(w?t.__c=d=new I(m,T):(t.__c=d=new zt(m,T),d.constructor=I,d.render=Nr),M&&M.sub(d),d.state||(d.state={}),d.__n=r,p=d.__d=!0,d.__h=[],d._sb=[]),w&&d.__s==null&&(d.__s=d.state),w&&I.getDerivedStateFromProps!=null&&(d.__s==d.state&&(d.__s=Y({},d.__s)),Y(d.__s,I.getDerivedStateFromProps(m,d.__s))),b=d.props,_=d.state,d.__v=t,p)w&&I.getDerivedStateFromProps==null&&d.componentWillMount!=null&&d.componentWillMount(),w&&d.componentDidMount!=null&&d.__h.push(d.componentDidMount);else{if(w&&I.getDerivedStateFromProps==null&&m!==b&&d.componentWillReceiveProps!=null&&d.componentWillReceiveProps(m,T),t.__v==s.__v||!d.__e&&d.shouldComponentUpdate!=null&&d.shouldComponentUpdate(m,d.__s,T)===!1){t.__v!=s.__v&&(d.props=m,d.state=d.__s,d.__d=!1),t.__e=s.__e,t.__k=s.__k,t.__k.some(function(G){G&&(G.__=t)}),Zt.push.apply(d.__h,d._sb),d._sb=[],d.__h.length&&n.push(d),l=ot(s);break t}d.componentWillUpdate!=null&&d.componentWillUpdate(m,d.__s,T),w&&d.componentDidUpdate!=null&&d.__h.push(function(){d.componentDidUpdate(b,_,y)})}if(d.context=T,d.props=m,d.__P=e,d.__e=!1,S=E.__r,F=0,w)d.state=d.__s,d.__d=!1,S&&S(t),h=d.render(d.props,d.state,d.context),Zt.push.apply(d.__h,d._sb),d._sb=[];else do d.__d=!1,S&&S(t),h=d.render(d.props,d.state,d.context),d.state=d.__s;while(d.__d&&++F<25);d.state=d.__s,d.getChildContext!=null&&(r=Y(Y({},r),d.getChildContext())),w&&!p&&d.getSnapshotBeforeUpdate!=null&&(y=d.getSnapshotBeforeUpdate(b,_)),q=h!=null&&h.type===U&&h.key==null?Ys(h.props.children):h,l=zs(e,te(q)?q:[q],t,s,r,i,A,n,l,o,c),d.base=t.__e,t.__u&=-161,d.__h.length&&n.push(d),f&&(d.__E=d.__=null)}catch(G){if(n.length=u,t.__v=null,o||A!=null){if(G.then){for(t.__u|=o?160:128;l&&l.nodeType==8&&l.nextSibling;)l=l.nextSibling;A!=null&&(A[A.indexOf(l)]=null),t.__e=l}else if(A!=null)for(H=A.length;H--;)xe(A[H])}else t.__e=s.__e;t.__k==null&&(t.__k=s.__k||[]),G.then||js(t),E.__e(G,t,s)}}else A==null&&t.__v==s.__v?(t.__k=s.__k,t.__e=s.__e):l=t.__e=Ir(s.__e,t,s,r,i,A,n,o,c);return(h=E.diffed)&&h(t),128&t.__u?void 0:l}function js(e){e&&(e.__c&&(e.__c.__e=!0),e.__k&&e.__k.some(js))}function Vs(e,t,s){for(var r=0;r<s.length;r++)Se(s[r],s[++r],s[++r]);E.__c&&E.__c(t,e),e.some(function(i){try{e=i.__h,i.__h=[],e.some(function(A){A.call(i)})}catch(A){E.__e(A,i.__v)}})}function Ys(e){return typeof e!="object"||e==null||e.__b>0?e:te(e)?e.map(Ys):e.constructor!==void 0?null:Y({},e)}function Ir(e,t,s,r,i,A,n,l,o){var c,h,u,d,p,b,_,y=s.props||Yt,f=t.props,m=t.type;if(m=="svg"?i="http://www.w3.org/2000/svg":m=="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),A!=null){for(c=0;c<A.length;c++)if((p=A[c])&&"setAttribute"in p==!!m&&(m?p.localName==m:p.nodeType==3)){e=p,A[c]=null;break}}if(e==null){if(m==null)return document.createTextNode(f);e=document.createElementNS(i,m,f.is&&f),l&&(E.__m&&E.__m(t,A),l=!1),A=null}if(m==null)y===f||l&&e.data==f||(e.data=f);else{if(A=m=="textarea"&&f.defaultValue!=null?null:A&&Kt.call(e.childNodes),!l&&A!=null)for(y={},c=0;c<e.attributes.length;c++)y[(p=e.attributes[c]).name]=p.value;for(c in y)p=y[c],c=="dangerouslySetInnerHTML"?u=p:c=="children"||c in f||c=="value"&&"defaultValue"in f||c=="checked"&&"defaultChecked"in f||Wt(e,c,null,p,i);for(c in f)p=f[c],c=="children"?d=p:c=="dangerouslySetInnerHTML"?h=p:c=="value"?b=p:c=="checked"?_=p:l&&typeof p!="function"||y[c]===p||Wt(e,c,p,y[c],i);if(h)l||u&&(h.__html==u.__html||h.__html==e.innerHTML)||(e.innerHTML=h.__html),t.__k=[];else if(u&&(e.innerHTML=""),zs(t.type=="template"?e.content:e,te(d)?d:[d],t,s,r,m=="foreignObject"?"http://www.w3.org/1999/xhtml":i,A,n,A?A[0]:s.__k&&ot(s,0),l,o),A!=null)for(c=A.length;c--;)xe(A[c]);l&&m!="textarea"||(c="value",m=="progress"&&b==null?e.removeAttribute("value"):b!=null&&(b!==e[c]||m=="progress"&&!b||m=="option"&&b!=y[c])&&Wt(e,c,b,y[c],i),c="checked",_!=null&&_!=e[c]&&Wt(e,c,_,y[c],i))}return e}function Se(e,t,s){try{if(typeof e=="function"){var r=typeof e.__u=="function";r&&e.__u(),r&&t==null||(e.__u=e(t))}else e.current=t}catch(i){E.__e(i,s)}}function Zs(e,t,s){var r,i;if(E.unmount&&E.unmount(e),(r=e.ref)&&(r.current&&r.current!=e.__e||Se(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(A){E.__e(A,t)}r.base=r.__P=r.__n=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&Zs(r[i],t,s||typeof e.type!="function");s||xe(e.__e),e.__c=e.__=e.__e=void 0}function Nr(e,t,s){return this.constructor(e,s)}function Dr(e,t,s){var r,i,A,n;t==document&&(t=document.documentElement),E.__&&E.__(e,t),i=(r=!1)?null:t.__k,A=[],n=[],ke(t,e=t.__k=Pr(U,null,[e]),i||Yt,Yt,t.namespaceURI,i?null:t.firstChild?Kt.call(t.childNodes):null,A,i?i.__e:t.firstChild,r,n),Vs(A,e,n),e.props.children=null}Kt=Zt.slice,E={__e:function(e,t,s,r){for(var i,A,n;t=t.__;)if((i=t.__c)&&!i.__)try{if((A=i.constructor)&&A.getDerivedStateFromError!=null&&(i.setState(A.getDerivedStateFromError(e)),n=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,r||{}),n=i.__d),n)return i.__E=i}catch(l){e=l}throw e}},Us=0,zt.prototype.setState=function(e,t){var s;s=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Y({},this.state),typeof e=="function"&&(e=e(Y({},s),this.props)),e&&Y(s,e),e!=null&&this.__v&&(t&&this._sb.push(t),je(this))},zt.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),je(this))},zt.prototype.render=U,Q=[],Hs=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Fs=function(e,t){return e.__v.__b-t.__v.__b},Gt.__r=0,le=Math.random().toString(8),Bt="__d"+le,St="__a"+le,Bs=/(PointerCapture)$|Capture$/i,$e=0,me=Ye(!1),ge=Ye(!0);var Lr=0;function a(e,t,s,r,i,A){t||(t={});var n,l,o=t;if("ref"in o)for(l in o={},t)l=="ref"?n=t[l]:o[l]=t[l];var c={type:e,props:o,key:s,ref:n,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Lr,__i:-1,__u:0,__source:i,__self:A};if(typeof e=="function"&&(n=e.defaultProps))for(l in n)o[l]===void 0&&(o[l]=n[l]);return E.vnode&&E.vnode(c),c}var ft,C,de,Ze,Ct=0,Gs=[],N=E,Ge=N.__b,Qe=N.__r,Je=N.diffed,Xe=N.__c,Ke=N.unmount,ts=N.__;function ee(e,t){N.__h&&N.__h(C,e,Ct||t),Ct=0;var s=C.__H||(C.__H={__:[],__h:[]});return e>=s.__.length&&s.__.push({}),s.__[e]}function v(e){return Ct=1,Rr(Js,e)}function Rr(e,t,s){var r=ee(ft++,2);if(r.t=e,!r.__c&&(r.__=[Js(void 0,t),function(l){var o=r.__N?r.__N[0]:r.__[0],c=r.t(o,l);o!==c&&(r.__N=[c,r.__[1]],r.__c.setState({}))}],r.__c=C,!C.__f)){var i=function(l,o,c){if(!r.__c.__H)return!0;var h=!1,u=r.__c.props!==l;if(r.__c.__H.__.some(function(p){if(p.__N){h=!0;var b=p.__[0];p.__=p.__N,p.__N=void 0,b!==p.__[0]&&(u=!0)}}),A){var d=A.call(this,l,o,c);return h?d||u:d}return!h||u};C.__f=!0;var A=C.shouldComponentUpdate,n=C.componentWillUpdate;C.componentWillUpdate=function(l,o,c){if(this.__e){var h=A;A=void 0,i(l,o,c),A=h}n&&n.call(this,l,o,c)},C.shouldComponentUpdate=i}return r.__N||r.__}function O(e,t){var s=ee(ft++,3);!N.__s&&Qs(s.__H,t)&&(s.__=e,s.u=t,C.__H.__h.push(s))}function pt(e){return Ct=5,se(function(){return{current:e}},[])}function se(e,t){var s=ee(ft++,7);return Qs(s.__H,t)&&(s.__=e(),s.__H=t,s.__h=e),s.__}function L(e,t){return Ct=8,se(function(){return e},t)}function Ee(){var e=ee(ft++,11);if(!e.__){for(var t=C.__v;t!==null&&!t.__m&&t.__!==null;)t=t.__;var s=t.__m||(t.__m=[0,0]);e.__="P"+s[0]+"-"+s[1]++}return e.__}function Wr(){for(var e;e=Gs.shift();){var t=e.__H;if(e.__P&&t)try{t.__h.some(qt),t.__h.some(be),t.__h=[]}catch(s){t.__h=[],N.__e(s,e.__v)}}}N.__b=function(e){C=null,Ge&&Ge(e)},N.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),ts&&ts(e,t)},N.__r=function(e){Qe&&Qe(e),ft=0;var t=(C=e.__c).__H;t&&(de===C?(t.__h=[],C.__h=[],t.__.some(function(s){s.__N&&(s.__=s.__N),s.u=s.__N=void 0})):(t.__h.some(qt),t.__h.some(be),t.__h=[],ft=0)),de=C},N.diffed=function(e){Je&&Je(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Gs.push(t)!==1&&Ze===N.requestAnimationFrame||((Ze=N.requestAnimationFrame)||Ur)(Wr)),t.__H.__.some(function(s){s.u&&(s.__H=s.u,s.u=void 0)})),de=C=null},N.__c=function(e,t){t.some(function(s){try{s.__h.some(qt),s.__h=s.__h.filter(function(r){return!r.__||be(r)})}catch(r){t.some(function(i){i.__h&&(i.__h=[])}),t=[],N.__e(r,s.__v)}}),Xe&&Xe(e,t)},N.unmount=function(e){Ke&&Ke(e);var t,s=e.__c;s&&s.__H&&(s.__H.__.some(function(r){try{qt(r)}catch(i){t=i}}),s.__H=void 0,t&&N.__e(t,s.__v))};var es=typeof requestAnimationFrame=="function";function Ur(e){var t,s=function(){clearTimeout(r),es&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(s,35);es&&(t=requestAnimationFrame(s))}function qt(e){var t=C,s=e.__c;typeof s=="function"&&(e.__c=void 0,s()),C=t}function be(e){var t=C;e.__c=e.__(),C=t}function Qs(e,t){return!e||e.length!==t.length||t.some(function(s,r){return s!==e[r]})}function Js(e,t){return typeof t=="function"?t(e):t}function Hr({tabs:e,active:t,onSelect:s}){return a("nav",{class:"tab-bar",role:"tablist","aria-label":"Sections",children:e.map(r=>a("button",{type:"button",role:"tab",id:`tab-${r.id}`,"aria-selected":r.id===t,"aria-controls":`panel-${r.id}`,class:r.id===t?"active":void 0,onClick:()=>s(r.id),children:r.label},r.id))})}var Xs="Network request failed. Check the device connection and try again.",Fr={};function Br(e){if(e&&typeof e=="object"&&"message"in e){let t=e.message;if(typeof t=="string"&&t.length>0)return t}}function Or(e,t){return t?.aborted===!0||typeof e=="object"&&!!e&&e.name==="AbortError"}function Ks(e,t){return Or(e,t)?{ok:!1,message:"Request aborted."}:{ok:!1,message:Xs}}async function tr(e,t){let s=t;try{let r=await e.text();if(r.length>0)try{s=Br(JSON.parse(r))??s}catch{}}catch{}return{ok:!1,status:e.status,message:s}}async function ss(e,t,s,r,i,A){let n;try{n=await fetch(e,{headers:{Accept:t,...i},signal:A})}catch(o){return Ks(o,A)}if(!n.ok)return tr(n,n.status===404?r:`Request failed with HTTP ${n.status}.`);let l;try{l=new Uint8Array(await n.arrayBuffer())}catch{return{ok:!1,status:n.status,message:Xs}}return l.byteLength===0?{ok:!1,status:n.status,message:s}:{ok:!0,data:l}}async function rs(e,t,s,r,i){if(t.byteLength===0)return{ok:!1,message:s};let A=new ArrayBuffer(t.byteLength);new Uint8Array(A).set(t);let n;try{n=await fetch(e,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/octet-stream",...r},body:A,signal:i})}catch(l){return Ks(l,i)}return n.ok?(await n.text().catch(()=>""),{ok:!0,data:Fr}):tr(n,`Upload failed with HTTP ${n.status}.`)}function zr(e={}){let t=e.baseUrl??"",s=e.backupPath??"/api/config/backup",r=e.configPath??"/api/config",i=e.headers??{},A=`${t}${s}`,n=`${t}${r}`;return{downloadBackup(l){return ss(A,"application/zip","Device returned an empty archive.","The device has no config files yet.",i,l)},downloadConfig(l){return ss(n,"application/octet-stream","Device returned an empty config file.","The device has no saved config yet (no config file on flash).",i,l)},uploadBackup(l,o){return rs(A,l,"Cannot upload an empty archive.",i,o)},uploadConfig(l,o){return rs(n,l,"Cannot upload an empty config file.",i,o)}}}var jt=globalThis,Pe=jt.ShadowRoot&&(jt.ShadyCSS===void 0||jt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Me=Symbol(),is=new WeakMap,er=class{constructor(t,s,r){if(this._$cssResult$=!0,r!==Me)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=s}get styleSheet(){let t=this.o,s=this.t;if(Pe&&t===void 0){let r=s!==void 0&&s.length===1;r&&(t=is.get(s)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&is.set(s,t))}return t}toString(){return this.cssText}},qr=e=>new er(typeof e=="string"?e:e+"",void 0,Me),jr=(e,...t)=>new er(e.length===1?e[0]:t.reduce((s,r,i)=>s+(A=>{if(A._$cssResult$===!0)return A.cssText;if(typeof A=="number")return A;throw Error("Value passed to 'css' function must be a 'css' function result: "+A+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[i+1],e[0]),e,Me),Vr=(e,t)=>{if(Pe)e.adoptedStyleSheets=t.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(let s of t){let r=document.createElement("style"),i=jt.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=s.cssText,e.appendChild(r)}},As=Pe?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let s="";for(let r of t.cssRules)s+=r.cssText;return qr(s)})(e):e,{is:Yr,defineProperty:Zr,getOwnPropertyDescriptor:Gr,getOwnPropertyNames:Qr,getOwnPropertySymbols:Jr,getPrototypeOf:Xr}=Object,re=globalThis,ns=re.trustedTypes,Kr=ns?ns.emptyScript:"",ti=re.reactiveElementPolyfillSupport,Et=(e,t)=>e,_e={toAttribute(e,t){switch(t){case Boolean:e=e?Kr:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=e!==null;break;case Number:s=e===null?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch{s=null}}return s}},sr=(e,t)=>!Yr(e,t),as={attribute:!0,type:String,converter:_e,reflect:!1,useDefault:!1,hasChanged:sr};Symbol.metadata??=Symbol("metadata"),re.litPropertyMetadata??=new WeakMap;var ht=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=as){if(s.state&&(s.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((s=Object.create(s)).wrapped=!0),this.elementProperties.set(t,s),!s.noAccessor){let r=Symbol(),i=this.getPropertyDescriptor(t,r,s);i!==void 0&&Zr(this.prototype,t,i)}}static getPropertyDescriptor(t,s,r){let{get:i,set:A}=Gr(this.prototype,t)??{get(){return this[s]},set(n){this[s]=n}};return{get:i,set(n){let l=i?.call(this);A?.call(this,n),this.requestUpdate(t,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??as}static _$Ei(){if(this.hasOwnProperty(Et("elementProperties")))return;let t=Xr(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Et("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Et("properties"))){let s=this.properties,r=[...Qr(s),...Jr(s)];for(let i of r)this.createProperty(i,s[i])}let t=this[Symbol.metadata];if(t!==null){let s=litPropertyMetadata.get(t);if(s!==void 0)for(let[r,i]of s)this.elementProperties.set(r,i)}this._$Eh=new Map;for(let[s,r]of this.elementProperties){let i=this._$Eu(s,r);i!==void 0&&this._$Eh.set(i,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let s=[];if(Array.isArray(t)){let r=new Set(t.flat(1/0).reverse());for(let i of r)s.unshift(As(i))}else t!==void 0&&s.push(As(t));return s}static _$Eu(t,s){let r=s.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,s=this.constructor.elementProperties;for(let r of s.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Vr(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,s,r){this._$AK(t,r)}_$ET(t,s){let r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(i!==void 0&&r.reflect===!0){let A=(r.converter?.toAttribute===void 0?_e:r.converter).toAttribute(s,r.type);this._$Em=t,A==null?this.removeAttribute(i):this.setAttribute(i,A),this._$Em=null}}_$AK(t,s){let r=this.constructor,i=r._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let A=r.getPropertyOptions(i),n=typeof A.converter=="function"?{fromAttribute:A.converter}:A.converter?.fromAttribute===void 0?_e:A.converter;this._$Em=i;let l=n.fromAttribute(s,A.type);this[i]=l??this._$Ej?.get(i)??l,this._$Em=null}}requestUpdate(t,s,r,i=!1,A){if(t!==void 0){let n=this.constructor;if(i===!1&&(A=this[t]),r??=n.getPropertyOptions(t),!((r.hasChanged??sr)(A,s)||r.useDefault&&r.reflect&&A===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,r))))return;this.C(t,s,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,s,{useDefault:r,reflect:i,wrapped:A},n){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??s??this[t]),A!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(s=void 0),this._$AL.set(t,s)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,A]of this._$Ep)this[i]=A;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[i,A]of r){let{wrapped:n}=A,l=this[i];n!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,A,l)}}let t=!1,s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(s)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(s)}willUpdate(t){}_$AE(t){this._$EO?.forEach(s=>s.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(s=>this._$ET(s,this[s])),this._$EM()}updated(t){}firstUpdated(t){}};ht.elementStyles=[],ht.shadowRootOptions={mode:"open"},ht[Et("elementProperties")]=new Map,ht[Et("finalized")]=new Map,ti?.({ReactiveElement:ht}),(re.reactiveElementVersions??=[]).push("2.1.2");var Te=globalThis,os=e=>e,Qt=Te.trustedTypes,ls=Qt?Qt.createPolicy("lit-html",{createHTML:e=>e}):void 0,rr="$lit$",J=`lit$${Math.random().toFixed(9).slice(2)}$`,ir="?"+J,ei=`<${ir}>`,lt=document,It=()=>lt.createComment(""),Nt=e=>e===null||typeof e!="object"&&typeof e!="function",Ce=Array.isArray,si=e=>Ce(e)||typeof e?.[Symbol.iterator]=="function",ce=`[ 	
\f\r]`,yt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ds=/-->/g,cs=/>/g,K=RegExp(`>|${ce}(?:([^\\s"'>=/]+)(${ce}*=${ce}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),hs=/'/g,us=/"/g,Ar=/^(?:script|style|textarea|title)$/i,j=(e=>(t,...s)=>({_$litType$:e,strings:t,values:s}))(1),mt=Symbol.for("lit-noChange"),P=Symbol.for("lit-nothing"),ps=new WeakMap,et=lt.createTreeWalker(lt,129);function nr(e,t){if(!Ce(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return ls===void 0?t:ls.createHTML(t)}var ri=(e,t)=>{let s=e.length-1,r=[],i,A=t===2?"<svg>":t===3?"<math>":"",n=yt;for(let l=0;l<s;l++){let o=e[l],c,h,u=-1,d=0;for(;d<o.length&&(n.lastIndex=d,h=n.exec(o),h!==null);)d=n.lastIndex,n===yt?h[1]==="!--"?n=ds:h[1]===void 0?h[2]===void 0?h[3]!==void 0&&(n=K):(Ar.test(h[2])&&(i=RegExp("</"+h[2],"g")),n=K):n=cs:n===K?h[0]===">"?(n=i??yt,u=-1):h[1]===void 0?u=-2:(u=n.lastIndex-h[2].length,c=h[1],n=h[3]===void 0?K:h[3]==='"'?us:hs):n===us||n===hs?n=K:n===ds||n===cs?n=yt:(n=K,i=void 0);let p=n===K&&e[l+1].startsWith("/>")?" ":"";A+=n===yt?o+ei:u>=0?(r.push(c),o.slice(0,u)+rr+o.slice(u)+J+p):o+J+(u===-2?l:p)}return[nr(e,A+(e[s]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]},ve=class ar{constructor({strings:t,_$litType$:s},r){let i;this.parts=[];let A=0,n=0,l=t.length-1,o=this.parts,[c,h]=ri(t,s);if(this.el=ar.createElement(c,r),et.currentNode=this.el.content,s===2||s===3){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(i=et.nextNode())!==null&&o.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(let u of i.getAttributeNames())if(u.endsWith(rr)){let d=h[n++],p=i.getAttribute(u).split(J),b=/([.?@])?(.*)/.exec(d);o.push({type:1,index:A,name:b[2],strings:p,ctor:b[1]==="."?Ai:b[1]==="?"?ni:b[1]==="@"?ai:ie}),i.removeAttribute(u)}else u.startsWith(J)&&(o.push({type:6,index:A}),i.removeAttribute(u));if(Ar.test(i.tagName)){let u=i.textContent.split(J),d=u.length-1;if(d>0){i.textContent=Qt?Qt.emptyScript:"";for(let p=0;p<d;p++)i.append(u[p],It()),et.nextNode(),o.push({type:2,index:++A});i.append(u[d],It())}}}else if(i.nodeType===8)if(i.data===ir)o.push({type:2,index:A});else{let u=-1;for(;(u=i.data.indexOf(J,u+1))!==-1;)o.push({type:7,index:A}),u+=J.length-1}A++}}static createElement(t,s){let r=lt.createElement("template");return r.innerHTML=t,r}};function gt(e,t,s=e,r){if(t===mt)return t;let i=r===void 0?s._$Cl:s._$Co?.[r],A=Nt(t)?void 0:t._$litDirective$;return i?.constructor!==A&&(i?._$AO?.(!1),A===void 0?i=void 0:(i=new A(e),i._$AT(e,s,r)),r===void 0?s._$Cl=i:(s._$Co??=[])[r]=i),i!==void 0&&(t=gt(e,i._$AS(e,t.values),i,r)),t}var ii=class{constructor(t,s){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:s},parts:r}=this._$AD,i=(t?.creationScope??lt).importNode(s,!0);et.currentNode=i;let A=et.nextNode(),n=0,l=0,o=r[0];for(;o!==void 0;){if(n===o.index){let c;o.type===2?c=new Ie(A,A.nextSibling,this,t):o.type===1?c=new o.ctor(A,o.name,o.strings,this,t):o.type===6&&(c=new oi(A,this,t)),this._$AV.push(c),o=r[++l]}n!==o?.index&&(A=et.nextNode(),n++)}return et.currentNode=lt,i}p(t){let s=0;for(let r of this._$AV)r!==void 0&&(r.strings===void 0?r._$AI(t[s]):(r._$AI(t,r,s),s+=r.strings.length-2)),s++}},Ie=class or{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,s,r,i){this.type=2,this._$AH=P,this._$AN=void 0,this._$AA=t,this._$AB=s,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,s=this._$AM;return s!==void 0&&t?.nodeType===11&&(t=s.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,s=this){t=gt(this,t,s),Nt(t)?t===P||t==null||t===""?(this._$AH!==P&&this._$AR(),this._$AH=P):t!==this._$AH&&t!==mt&&this._(t):t._$litType$===void 0?t.nodeType===void 0?si(t)?this.k(t):this._(t):this.T(t):this.$(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==P&&Nt(this._$AH)?this._$AA.nextSibling.data=t:this.T(lt.createTextNode(t)),this._$AH=t}$(t){let{values:s,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=ve.createElement(nr(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(s);else{let A=new ii(i,this),n=A.u(this.options);A.p(s),this.T(n),this._$AH=A}}_$AC(t){let s=ps.get(t.strings);return s===void 0&&ps.set(t.strings,s=new ve(t)),s}k(t){Ce(this._$AH)||(this._$AH=[],this._$AR());let s=this._$AH,r,i=0;for(let A of t)i===s.length?s.push(r=new or(this.O(It()),this.O(It()),this,this.options)):r=s[i],r._$AI(A),i++;i<s.length&&(this._$AR(r&&r._$AB.nextSibling,i),s.length=i)}_$AR(t=this._$AA.nextSibling,s){for(this._$AP?.(!1,!0,s);t!==this._$AB;){let r=os(t).nextSibling;os(t).remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},ie=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,s,r,i,A){this.type=1,this._$AH=P,this._$AN=void 0,this.element=t,this.name=s,this._$AM=i,this.options=A,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=P}_$AI(t,s=this,r,i){let A=this.strings,n=!1;if(A===void 0)t=gt(this,t,s,0),n=!Nt(t)||t!==this._$AH&&t!==mt,n&&(this._$AH=t);else{let l=t,o,c;for(t=A[0],o=0;o<A.length-1;o++)c=gt(this,l[r+o],s,o),c===mt&&(c=this._$AH[o]),n||=!Nt(c)||c!==this._$AH[o],c===P?t=P:t!==P&&(t+=(c??"")+A[o+1]),this._$AH[o]=c}n&&!i&&this.j(t)}j(t){t===P?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Ai=class extends ie{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===P?void 0:t}},ni=class extends ie{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==P)}},ai=class extends ie{constructor(t,s,r,i,A){super(t,s,r,i,A),this.type=5}_$AI(t,s=this){if((t=gt(this,t,s,0)??P)===mt)return;let r=this._$AH,i=t===P&&r!==P||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,A=t!==P&&(r===P||i);i&&this.element.removeEventListener(this.name,this,r),A&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},oi=class{constructor(t,s,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=s,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){gt(this,t)}},li=Te.litHtmlPolyfillSupport;li?.(ve,Ie),(Te.litHtmlVersions??=[]).push("3.3.3");var di=(e,t,s)=>{let r=s?.renderBefore??t,i=r._$litPart$;if(i===void 0){let A=s?.renderBefore??null;r._$litPart$=i=new Ie(t.insertBefore(It(),A),A,void 0,s??{})}return i._$AI(e),i},Ne=globalThis,Pt=class extends ht{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=di(s,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return mt}};Pt._$litElement$=!0,Pt.finalized=!0,Ne.litElementHydrateSupport?.({LitElement:Pt});var ci=Ne.litElementPolyfillSupport;ci?.({LitElement:Pt}),(Ne.litElementVersions??=[]).push("4.2.2");var fs=2e3,hi=12e4,ms="Unsupported file type. Choose a .zip full backup or a .bin config file.";function he(e){let t=e.toLowerCase();return t.endsWith(".zip")?"archive":t.endsWith(".bin")?"config":null}function ui(e,t){if(typeof URL.createObjectURL!="function")return;let s=new ArrayBuffer(e.byteLength);new Uint8Array(s).set(e);let r=new Blob([s],{type:"application/octet-stream"}),i=URL.createObjectURL(r),A=document.createElement("a");A.href=i,A.download=t,document.body.appendChild(A),A.click(),A.remove(),window.setTimeout(()=>URL.revokeObjectURL(i),0)}var it,pi=(it=class extends Pt{constructor(...t){super(...t),this.baseUrl="",this.backupPath="/api/config/backup",this.configPath="/api/config",this.healthPath="/healthcheck/healty",this.deviceName="device",this.archiveFileName="config-backup.zip",this.binFileName="config.bin",this.maxUploadBytes=16384,this.zipNotes="",this.binNotes="",this.zipConfirmText="",this.binConfirmText="",this.downloading=!1,this.downloadNotice=null,this.selectedFile=null,this.fileError=null,this.uploading=!1,this.uploadError=null,this.phase="idle",this._attempts=0}disconnectedCallback(){this.clearPollTimer(),super.disconnectedCallback()}get busy(){return this.uploading||this.phase!=="idle"}get effectiveZipNotes(){return this.zipNotes||`Download a zip of everything stored on the ${this.deviceName}: ${this.binFileName} plus the device's persisted state files. Restoring this archive overwrites the stored config and state files. It contains Wi-Fi and MQTT credentials in plaintext, so keep it somewhere safe.`}get effectiveBinNotes(){return this.binNotes||`Download only ${this.binFileName}, the raw stored config. Restoring it replaces just that file. It contains Wi-Fi and MQTT credentials in plaintext, so keep it somewhere safe.`}get effectiveZipConfirmText(){return this.zipConfirmText||`Uploading this archive REPLACES ${this.binFileName} and the device's stored state files on the ${this.deviceName} AND REBOOTS IT. Validation is all-or-nothing: a rejected archive changes nothing. Continue?`}get effectiveBinConfirmText(){return this.binConfirmText||`Uploading REPLACES ${this.binFileName} on the ${this.deviceName} AND REBOOTS IT IMMEDIATELY. The device will be offline 20-60 seconds. Continue?`}render(){return j`
      <div class="stack">
        <section class="card" aria-labelledby="edc-download-heading">
          <h2 id="edc-download-heading">Download backup</h2>
          ${this.renderNotice(this.downloadNotice)}
          <div class="download-row">
            <div class="download-copy">
              <strong>Full backup (.zip)</strong>
              <p class="muted">${this.effectiveZipNotes}</p>
            </div>
            <button
              type="button"
              class="primary"
              data-action="download-backup"
              ?disabled=${this.downloading||this.phase!=="idle"}
              @click=${()=>{this.handleDownload("archive")}}
            >
              ${this.downloading?"Downloading…":"Download full backup (.zip)"}
            </button>
          </div>
          <div class="download-row">
            <div class="download-copy">
              <strong>${this.binFileName} only</strong>
              <p class="muted">${this.effectiveBinNotes}</p>
            </div>
            <button
              type="button"
              data-action="download-config"
              ?disabled=${this.downloading||this.phase!=="idle"}
              @click=${()=>{this.handleDownload("config")}}
            >
              Download ${this.binFileName} only
            </button>
          </div>
        </section>

        <section class="card" aria-labelledby="edc-restore-heading">
          <h2 id="edc-restore-heading">Restore from file</h2>
          <p class="muted">
            Restore a previously downloaded .zip full backup, or a single .bin
            config file. The device validates size, version and CRC and, for a
            full archive, commits all members atomically before rebooting. A
            rejected file changes nothing.
          </p>
          <label class="field" for="edc-restore-file">
            <span class="field-label">Backup file</span>
            <input
              id="edc-restore-file"
              type="file"
              accept=".zip,.bin,application/octet-stream"
              ?disabled=${this.busy}
              @change=${t=>this.handleFileChange(t)}
            />
            ${this.fileError?j`<span class="field-error" role="alert">${this.fileError}</span>`:P}
          </label>
          ${this.selectedFile&&!this.fileError?j`<p class="muted">
                Selected: ${this.selectedFile.name} (${this.selectedFile.size}
                bytes)${he(this.selectedFile.name)==="archive"?" — full backup (all files)":` — ${this.binFileName} only`}
              </p>`:P}
          ${this.uploadError?j`<div class="banner banner-error" role="alert">
                ${this.uploadError}
              </div>`:P}
          <div class="form-actions">
            <button
              type="button"
              class="danger"
              data-action="upload"
              ?disabled=${!this.selectedFile||!!this.fileError||this.busy}
              @click=${()=>{this.handleUpload()}}
            >
              ${this.uploading?"Uploading…":"Upload & reboot device"}
            </button>
          </div>
        </section>
      </div>
      ${this.renderRebootOverlay()}
    `}renderNotice(t){return t?j`<div
      class="banner banner-${t.kind}"
      role=${t.kind==="error"?"alert":"status"}
    >
      ${t.message}
    </div>`:P}renderRebootOverlay(){return this.phase==="idle"?P:j`
      <div
        class="reboot-overlay"
        role="alertdialog"
        aria-modal="true"
        aria-label="Device rebooting"
      >
        <div class="reboot-dialog">
          <h2>Device is rebooting</h2>
          ${this.phase==="rebooting"?j`
                <p>
                  Waiting for the ${this.deviceName} to come back online. This
                  usually takes 20–60 seconds.
                </p>
                <p class="muted" aria-live="polite">
                  Polling device health…
                </p>
                <div class="spinner" aria-hidden="true"></div>
              `:P}
          ${this.phase==="ready"?j`
                <div class="banner banner-success" role="status">
                  The ${this.deviceName} is back online.
                </div>
                <div class="form-actions">
                  <button type="button" @click=${()=>this.dismissReboot()}>
                    Dismiss
                  </button>
                </div>
              `:P}
          ${this.phase==="timeout"?j`
                <div class="banner banner-error" role="alert">
                  No response after about two minutes. Check the power and
                  network, then keep waiting or dismiss.
                </div>
                <div class="form-actions">
                  <button type="button" @click=${()=>this.retryReboot()}>
                    Keep waiting
                  </button>
                  <button type="button" @click=${()=>this.dismissReboot()}>
                    Dismiss
                  </button>
                </div>
              `:P}
        </div>
      </div>
    `}createClient(){return zr({baseUrl:this.baseUrl,backupPath:this.backupPath,configPath:this.configPath})}async handleDownload(t){if(!(this.downloading||this.phase!=="idle")){this.downloading=!0,this.downloadNotice=null;try{let s=this.createClient(),r=t==="archive"?await s.downloadBackup():await s.downloadConfig();if(!r.ok){this.downloadNotice={kind:"error",message:r.message};return}let i=t==="archive"?this.archiveFileName:this.binFileName;ui(r.data,i),this.downloadNotice={kind:"info",message:t==="archive"?`Full backup downloaded as ${i}.`:`Config downloaded as ${i}.`}}finally{this.downloading=!1}}}handleFileChange(t){let s=t.currentTarget,r=s.files&&s.files[0]?s.files[0]:null;this.selectedFile=r,this.uploadError=null,this.fileError=r?r.size===0?"The selected file is empty.":r.size>this.maxUploadBytes?`This does not look like a ${this.deviceName} backup file (max ${this.maxUploadBytes} bytes).`:he(r.name)?null:ms:null}async handleUpload(){if(!this.selectedFile||this.fileError||this.busy)return;let t=he(this.selectedFile.name);if(!t)this.uploadError=ms;else if(window.confirm(t==="archive"?this.effectiveZipConfirmText:this.effectiveBinConfirmText)){this.uploading=!0,this.uploadError=null;try{let s;try{s=new Uint8Array(await this.selectedFile.arrayBuffer())}catch{this.uploadError="Could not read the selected backup file.";return}let r=this.createClient(),i=t==="archive"?await r.uploadBackup(s):await r.uploadConfig(s);if(!i.ok){this.uploadError=i.message;return}if(this.clearSelection(),!this.isConnected)return;this.dispatchEvent(new CustomEvent("edc-restore-committed",{detail:{kind:t},bubbles:!0,composed:!0})),this.startReboot()}finally{this.uploading=!1}}}clearSelection(){this.selectedFile=null,this.fileError=null;let t=this.renderRoot.querySelector("#edc-restore-file");t&&(t.value="")}startReboot(){this._attempts=0,this.phase="rebooting",this.schedulePoll()}retryReboot(){this._attempts=0,this.phase="rebooting",this.schedulePoll()}dismissReboot(){this.clearPollTimer(),this.phase="idle"}schedulePoll(){this.clearPollTimer(),this._pollTimer=window.setTimeout(()=>{this._pollTimer=void 0,this.pollHealth()},fs)}clearPollTimer(){this._pollTimer!==void 0&&(window.clearTimeout(this._pollTimer),this._pollTimer=void 0)}async pollHealth(){if(this.phase!=="rebooting")return;let t=!1;try{let s=await fetch(`${this.baseUrl}${this.healthPath}`,{headers:{Accept:"application/json"}});if(s.ok){let r=await s.json();t=!!r&&typeof r=="object"&&r.healty===!0}}catch{t=!1}this.isConnected&&this.phase==="rebooting"&&(t?this.phase="ready":(this._attempts+=1,this._attempts*fs>=hi?this.phase="timeout":this.schedulePoll()))}},it.properties={baseUrl:{type:String,attribute:"base-url"},backupPath:{type:String,attribute:"backup-path"},configPath:{type:String,attribute:"config-path"},healthPath:{type:String,attribute:"health-path"},deviceName:{type:String,attribute:"device-name"},archiveFileName:{type:String,attribute:"archive-file-name"},binFileName:{type:String,attribute:"bin-file-name"},maxUploadBytes:{type:Number,attribute:"max-upload-bytes"},zipNotes:{type:String,attribute:"zip-notes"},binNotes:{type:String,attribute:"bin-notes"},zipConfirmText:{type:String,attribute:"zip-confirm-text"},binConfirmText:{type:String,attribute:"bin-confirm-text"},downloading:{state:!0},downloadNotice:{state:!0},selectedFile:{state:!0},fileError:{state:!0},uploading:{state:!0},uploadError:{state:!0},phase:{state:!0}},it.styles=jr`
    :host {
      display: block;
      font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
      color: #1f2430;
      --_accent: var(--edc-accent, #2563eb);
      --_danger: var(--edc-danger, #dc2626);
      --_muted: var(--edc-muted, #6b7280);
      --_border: #e2e5ea;
      --_surface: #ffffff;
    }

    .stack {
      display: grid;
      gap: 1rem;
      max-width: 34rem;
    }

    .card {
      background: var(--_surface);
      border: 1px solid var(--_border);
      border-radius: 10px;
      padding: 1rem 1.25rem;
      box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
    }

    h2 {
      font-size: 1rem;
      margin: 0 0 0.5rem;
    }

    p {
      margin: 0 0 0.75rem;
      font-size: 0.875rem;
      line-height: 1.45;
    }

    .muted {
      color: var(--_muted);
    }

    .form-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .download-row {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 1rem;
      padding: 0.75rem 0;
      border-top: 1px solid var(--_border);
    }

    .download-row:first-of-type {
      border-top: 0;
      padding-top: 0;
    }

    .download-row:last-of-type {
      padding-bottom: 0;
    }

    .download-copy {
      min-width: 0;
    }

    .download-copy p {
      margin-bottom: 0;
    }

    .download-copy strong {
      display: block;
      font-size: 0.85rem;
      margin-bottom: 0.2rem;
    }

    button {
      font: inherit;
      font-size: 0.85rem;
      padding: 0.45rem 0.85rem;
      border-radius: 8px;
      border: 1px solid var(--_border);
      background: var(--_surface);
      color: inherit;
      cursor: pointer;
    }

    button:hover:not(:disabled) {
      border-color: var(--_accent);
    }

    button.primary {
      background: var(--_accent);
      border-color: var(--_accent);
      color: #ffffff;
    }

    button.danger {
      background: var(--_danger);
      border-color: var(--_danger);
      color: #ffffff;
    }

    button:disabled {
      cursor: not-allowed;
      opacity: 0.55;
    }

    .field {
      display: grid;
      gap: 0.35rem;
      margin-bottom: 0.75rem;
    }

    .field-label {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      color: var(--_muted);
    }

    input[type='file'] {
      font: inherit;
      font-size: 0.85rem;
      max-width: 100%;
    }

    .field-error {
      color: var(--_danger);
      font-size: 0.8rem;
    }

    .banner {
      margin: 0 0 0.75rem;
      padding: 0.5rem 0.75rem;
      border-radius: 8px;
      font-size: 0.85rem;
    }

    .banner-error {
      background: #fef2f2;
      border: 1px solid #fecaca;
      color: var(--_danger);
    }

    .banner-info {
      background: #eff6ff;
      border: 1px solid #bfdbfe;
      color: #1d4ed8;
    }

    .banner-success {
      background: #f0fdf4;
      border: 1px solid #bbf7d0;
      color: #15803d;
    }

    .reboot-overlay {
      position: fixed;
      inset: 0;
      z-index: 50;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
      background: rgba(15, 23, 42, 0.55);
    }

    .reboot-dialog {
      width: min(26rem, 100%);
      background: var(--_surface);
      border-radius: 12px;
      padding: 1.25rem;
      box-shadow: 0 20px 50px rgba(15, 23, 42, 0.35);
    }

    .spinner {
      width: 1.5rem;
      height: 1.5rem;
      border: 3px solid var(--_border);
      border-top-color: var(--_accent);
      border-radius: 50%;
      animation: edc-spin 0.9s linear infinite;
    }

    @keyframes edc-spin {
      to {
        transform: rotate(360deg);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .spinner {
        animation: none;
      }
    }
  `,it);typeof customElements<"u"&&!customElements.get("edc-config-backup-page")&&customElements.define("edc-config-backup-page",pi);function fi(){const e=pt(null);return O(()=>{const t=document.createElement("edc-config-backup-page");return t.setAttribute("device-name","Neptunus"),t.setAttribute("archive-file-name","neptunus-config.zip"),t.setAttribute("bin-file-name","config.bin"),e.current?.append(t),()=>t.remove()},[]),a("div",{ref:e})}const g={mqtt:{hostMax:63,portMin:1,portMax:65535,loginMax:31,passwordMax:31,haDiscoveryPrefixMax:63,topicMax:63},modbus:{speeds:[1200,2400,4800,9600,19200,38400,57600,115200],addressMin:1,addressMax:254},rainwater:{topicMax:63,maxHeightMinExclusive:0,maxHeightMax:10,fillLevelStartPercent:10,maxFillLevelMax:100},electricity:{topicMax:63},meter:{valueMin:0,valueMax:4294967}},Rt="Device returned an empty response. Check the device logs and try again.",Ae="Device returned an empty response.",lr="Could not reach the device. Check that you are connected to its network and try again.",Ut={};function dr(){return{ok:!1,message:lr}}function mi(e){try{const t=JSON.parse(e);if(t&&typeof t=="object"&&"message"in t){const s=t.message;if(typeof s=="string"&&s)return s}}catch{}}async function cr(e){let t=`Request failed (HTTP ${e.status}).`;try{const s=await e.text();s&&(t=mi(s)??t)}catch{}return{ok:!1,status:e.status,message:t}}async function Z(e,t){let s;try{s=await fetch(e,{headers:{Accept:"application/json"}})}catch{return dr()}if(!s.ok)return cr(s);let r;try{r=await s.text()}catch{return{ok:!1,status:s.status,message:lr}}if(!r.trim())return{ok:!1,status:s.status,message:t};try{return{ok:!0,data:JSON.parse(r)}}catch{return{ok:!1,status:s.status,message:t}}}async function hr(e,t){let s;try{s=await fetch(e,t)}catch{return dr()}if(!s.ok)return cr(s);let r="";try{r=await s.text()}catch{return{ok:!0,data:Ut}}if(!r.trim())return{ok:!0,data:Ut};try{const i=JSON.parse(r);return{ok:!0,data:i&&typeof i=="object"?i:Ut}}catch{return{ok:!0,data:Ut}}}function vt(e,t){return hr(e,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:t.toString()})}function V(e,t,s,r=!1){if(typeof e!="string")throw new Error(`${t} is required.`);if(!r&&e.length===0)throw new Error(`${t} must not be empty.`);if(e.length>s)throw new Error(`${t} must be at most ${s} characters.`);return e}function dt(e,t,s,r){if(typeof e!="number"||!Number.isFinite(e))throw new Error(`${t} must be a number.`);if(e<s||e>r)throw new Error(`${t} must be between ${s} and ${r}.`);return e}function gi(e,t){if(typeof e!="boolean")throw new Error(`${t} must be true or false.`);return e}function bi(e,t,s){if(typeof e!="number"||!Number.isFinite(e))throw new Error(`${t} must be a number.`);if(!s.includes(e))throw new Error(`${t} must be one of: ${s.join(", ")}.`);return e}function _i(){return Z("/api/settings",Rt)}function vi(){return Z("/api/status",Ae)}function ur(){return Z("/healthcheck/healty",Ae)}function yi(){return Z("/healthcheck/ready",Ae)}function wi(){return Z("/api/settings/modbus",Rt)}function $i(){return Z("/api/settings/rainwater",Rt)}function xi(){return Z("/api/settings/electricity",Rt)}function ki(){return Z("/api/settings/meter",Rt)}function Si(){return Z("/api/controls",Ae)}function Ei(e){const t=bi(e.modbusSpeed,"Modbus speed",g.modbus.speeds),s=dt(e.addressQDY30A,"QDY30A address",g.modbus.addressMin,g.modbus.addressMax),r=dt(e.addressWBMAI6,"WB-MAI6 address",g.modbus.addressMin,g.modbus.addressMax),i=new URLSearchParams;return i.set("modbusSpeed",String(t)),i.set("addressQDY30A",String(s)),i.set("addressWBMAI6",String(r)),vt("/api/settings/modbus",i)}function Pi(e){const t=V(e.rainwaterPitLevelTopic,"Pit level topic",g.rainwater.topicMax,!0),s=dt(e.rainwaterPitMaxHeight,"Pit max height",g.rainwater.maxHeightMinExclusive,g.rainwater.maxHeightMax);if(s<=g.rainwater.maxHeightMinExclusive)throw new Error("Pit max height must be greater than 0.");const r=dt(e.rainwaterPitMaxFillLevel,"Pit max fill level",g.rainwater.fillLevelStartPercent,g.rainwater.maxFillLevelMax);if(r<=g.rainwater.fillLevelStartPercent)throw new Error(`Pit max fill level must be greater than ${g.rainwater.fillLevelStartPercent}.`);const i=new URLSearchParams;return i.set("rainwaterPitLevelTopic",t),i.set("rainwaterPitMaxHeight",String(s)),i.set("rainwaterPitMaxFillLevel",String(r)),vt("/api/settings/rainwater",i)}function Mi(e){const t=V(e.electricityTopic,"Grid state topic",g.electricity.topicMax,!0),s=new URLSearchParams;return s.set("electricityTopic",t),vt("/api/settings/electricity",s)}function Ti(e){const t=dt(e.homeWaterInitialValue,"Home water initial value",g.meter.valueMin,g.meter.valueMax),s=dt(e.yardWaterInitialValue,"Yard water initial value",g.meter.valueMin,g.meter.valueMax),r=new URLSearchParams;return r.set("homeWaterInitialValue",String(t)),r.set("yardWaterInitialValue",String(s)),vt("/api/settings/meter",r)}function Ci(e){const t=V(e.host,"MQTT host",g.mqtt.hostMax),s=dt(e.port,"MQTT port",g.mqtt.portMin,g.mqtt.portMax),r=V(e.login,"MQTT login",g.mqtt.loginMax,!0),i=V(e.password,"MQTT password",g.mqtt.passwordMax,!0),A=V(e.haDiscoveryPrefix,"HA discovery prefix",g.mqtt.haDiscoveryPrefixMax),n=gi(e.mqttIsHADiscovery,"HA discovery flag"),l=V(e.stateTopic,"State topic",g.mqtt.topicMax),o=V(e.commandTopic,"Command topic",g.mqtt.topicMax),c=V(e.mqttTopicPrefix,"MQTT topic prefix",g.mqtt.topicMax),h=new URLSearchParams;return h.set("host",t),h.set("port",String(s)),h.set("login",r),h.set("password",i),h.set("haDiscoveryPrefix",A),h.set("mqttIsHADiscovery",n?"true":"false"),h.set("stateTopic",l),h.set("commandTopic",o),h.set("mqttTopicPrefix",c),vt("/api/settings/mqtt",h)}function Ii(e,t){const s=new URLSearchParams;return s.set("id",e),s.set("value",t),vt("/api/controls/set",s)}function Ni(){return hr("/api/reboot",{method:"POST"})}function k({kind:e="info",message:t,onClose:s}){return a("div",{class:`banner banner-${e}`,role:"status",children:[a("span",{children:t}),s?a("button",{type:"button",class:"banner-close","aria-label":"Dismiss",onClick:s,children:"×"}):null]})}function Di(e){switch(e){case"primary":return"btn btn-primary";case"danger":return"btn btn-danger";default:return"btn"}}function D({children:e,variant:t="default",type:s="button",disabled:r,title:i,onClick:A}){return a("button",{type:s,class:Di(t),disabled:r,title:i,onClick:A,children:e})}function Li(e){return a(D,{...e,variant:"danger"})}function R({title:e,children:t,class:s}){return a("section",{class:s?`card ${s}`:"card",children:[e?a("h2",{children:e}):null,t]})}function Ri({label:e,checked:t,onChange:s,disabled:r,help:i,name:A}){const n=Ee();return a("div",{class:"checkbox-field",children:[a("label",{class:"checkbox-label",for:n,children:[a("input",{id:n,name:A,type:"checkbox",checked:t,disabled:r,onChange:o=>{s?.(o.currentTarget.checked)}}),a("span",{children:e})]}),i?a("span",{class:"field-help",children:i}):null]})}function W({label:e,value:t,onInput:s,type:r="text",name:i,placeholder:A,maxLength:n,min:l,max:o,step:c,error:h,help:u,disabled:d,required:p,autoComplete:b,inputMode:_}){const y=Ee();return a("label",{class:"field",for:y,children:[a("span",{class:"field-label",children:e}),a("input",{id:y,name:i,type:r,value:t,placeholder:A,maxLength:n,min:l,max:o,step:c,disabled:d,required:p,autoComplete:b,inputMode:_,onInput:m=>{s?.(m.currentTarget.value)},"aria-invalid":h?!0:void 0}),u&&!h?a("span",{class:"field-help",children:u}):null,h?a("span",{class:"field-error",children:h}):null]})}function pr(){return a(k,{kind:"info",message:"Changes are saved to flash and take effect only after a reboot."})}function Wi({label:e,value:t,onInput:s,maxLength:r,error:i,help:A,disabled:n,autoComplete:l}){const[o,c]=v(!1);return a("div",{class:"password-field",children:[a(W,{label:e,value:t,onInput:s,type:o?"text":"password",maxLength:r,error:i,help:A,disabled:n,autoComplete:l}),a("button",{type:"button",class:"btn reveal-toggle","aria-pressed":o,disabled:n,onClick:()=>c(h=>!h),children:o?"Hide":"Show"})]})}const Ui={host:"",port:"",login:"",password:"",haDiscoveryPrefix:"",mqttIsHADiscovery:!1,stateTopic:"",commandTopic:"",mqttTopicPrefix:""};function Hi(e){const t={};e.host.trim().length===0?t.host="Host is required.":e.host.length>g.mqtt.hostMax&&(t.host=`At most ${g.mqtt.hostMax} characters.`);const s=Number(e.port);return e.port.trim()===""?t.port="Port is required.":(!Number.isInteger(s)||s<1||s>65535)&&(t.port="Port must be an integer between 1 and 65535."),e.login.length>g.mqtt.loginMax&&(t.login=`At most ${g.mqtt.loginMax} characters.`),e.password.length>g.mqtt.passwordMax&&(t.password=`At most ${g.mqtt.passwordMax} characters.`),e.haDiscoveryPrefix.trim().length===0?t.haDiscoveryPrefix="Discovery prefix is required.":e.haDiscoveryPrefix.length>g.mqtt.haDiscoveryPrefixMax&&(t.haDiscoveryPrefix=`At most ${g.mqtt.haDiscoveryPrefixMax} characters.`),e.stateTopic.trim().length===0?t.stateTopic="Required - the device crashes if the state topic is missing.":e.stateTopic.length>g.mqtt.topicMax&&(t.stateTopic=`At most ${g.mqtt.topicMax} characters.`),e.commandTopic.trim().length===0?t.commandTopic="Required - the device crashes if the command topic is missing.":e.commandTopic.length>g.mqtt.topicMax&&(t.commandTopic=`At most ${g.mqtt.topicMax} characters.`),e.mqttTopicPrefix.trim().length===0?t.mqttTopicPrefix="Topic prefix is required.":e.mqttTopicPrefix.length>g.mqtt.topicMax&&(t.mqttTopicPrefix=`At most ${g.mqtt.topicMax} characters.`),t}function Fi(e){return Object.values(e).some(t=>!!t)}function Bi(){const[e,t]=v(!1),[s,r]=v(null),[i,A]=v(Ui),[n,l]=v({}),[o,c]=v(!1),[h,u]=v(null),[d,p]=v(null),b=L(async()=>{r(null);const f=await _i();f.ok?A({host:f.data.mqttHost,port:String(f.data.mqttPort),login:f.data.mqttLogin,password:f.data.mqttPassword,haDiscoveryPrefix:f.data.mqttHADiscoveryPrefix,mqttIsHADiscovery:f.data.mqttIsHADiscovery,stateTopic:f.data.mqttStateTopic,commandTopic:f.data.mqttCommandTopic,mqttTopicPrefix:f.data.mqttTopicPrefix}):r(f.message),t(!0)},[]);O(()=>{b()},[b]);const _=f=>A(m=>({...m,...f})),y=L(async f=>{f.preventDefault();const m=Hi(i);if(l(m),u(null),p(null),!Fi(m)){c(!0);try{const w=await Ci({host:i.host,port:Number(i.port),login:i.login,password:i.password,haDiscoveryPrefix:i.haDiscoveryPrefix,mqttIsHADiscovery:i.mqttIsHADiscovery,stateTopic:i.stateTopic,commandTopic:i.commandTopic,mqttTopicPrefix:i.mqttTopicPrefix});w.ok?u("MQTT settings saved to flash."):p(w.message)}catch(w){p(w instanceof Error?w.message:String(w))}finally{c(!1)}}},[i]);return e?a("div",{class:"stack",children:[a(pr,{}),s?a(U,{children:[a(k,{kind:"error",message:s}),a("div",{class:"form-actions",children:a(D,{onClick:()=>{b()},children:"Retry"})})]}):null,a(R,{title:"MQTT",children:a("form",{onSubmit:y,novalidate:!0,children:[a(W,{label:"Host",value:i.host,onInput:f=>_({host:f}),maxLength:g.mqtt.hostMax,error:n.host,autoComplete:"off",disabled:o}),a(W,{label:"Port",value:i.port,onInput:f=>_({port:f}),type:"number",min:1,max:65535,inputMode:"numeric",error:n.port,disabled:o}),a(W,{label:"Login",value:i.login,onInput:f=>_({login:f}),maxLength:g.mqtt.loginMax,error:n.login,autoComplete:"off",disabled:o}),a(Wi,{label:"Password",value:i.password,onInput:f=>_({password:f}),maxLength:g.mqtt.passwordMax,error:n.password,autoComplete:"new-password",disabled:o}),a(W,{label:"HA discovery prefix",value:i.haDiscoveryPrefix,onInput:f=>_({haDiscoveryPrefix:f}),maxLength:g.mqtt.haDiscoveryPrefixMax,error:n.haDiscoveryPrefix,autoComplete:"off",disabled:o}),a(Ri,{label:"Enable Home Assistant discovery",checked:i.mqttIsHADiscovery,onChange:f=>_({mqttIsHADiscovery:f}),disabled:o}),a(W,{label:"State topic",value:i.stateTopic,onInput:f=>_({stateTopic:f}),maxLength:g.mqtt.topicMax,error:n.stateTopic,help:"Must not be empty: the device crashes on a missing state topic.",autoComplete:"off",disabled:o}),a(W,{label:"Command topic",value:i.commandTopic,onInput:f=>_({commandTopic:f}),maxLength:g.mqtt.topicMax,error:n.commandTopic,help:"Must not be empty: the device crashes on a missing command topic.",autoComplete:"off",disabled:o}),a(W,{label:"Topic prefix",value:i.mqttTopicPrefix,onInput:f=>_({mqttTopicPrefix:f}),maxLength:g.mqtt.topicMax,error:n.mqttTopicPrefix,help:"Prefix used for Home Assistant discovery entities; must not be empty.",autoComplete:"off",disabled:o}),h?a(k,{kind:"success",message:h,onClose:()=>u(null)}):null,d?a(k,{kind:"error",message:d,onClose:()=>p(null)}):null,a("div",{class:"form-actions",children:a(D,{type:"submit",variant:"primary",disabled:o,children:o?"Saving…":"Save MQTT"})})]})})]}):a(R,{title:"Connections",children:a("p",{class:"muted",children:"Loading connection settings…"})})}const Oi=`<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1260 720" width="1260" height="720" font-family="'Segoe UI', Roboto, Arial, sans-serif" xmlns:c2pa="http://c2pa.org/manifest"><metadata><c2pa:manifest>AAAWgmp1bWIAAAAeanVtZGMycGEAEQAQgAAAqgA4m3EDYzJwYQAAABZcanVtYgAAAEdqdW1kYzJtYQARABCAAACqADibcQN1cm46YzJwYTo4NzM4MWY5Mi1kYzJkLTQ3MzktOTYwNi05NjU3ZmVhOWU4MTkAAAADl2p1bWIAAAApanVtZGMyYXMAEQAQgAAAqgA4m3EDYzJwYS5hc3NlcnRpb25zAAAAALxqdW1iAAAARGp1bWRjYm9yABEAEIAAAKoAOJtxE2MycGEuaW5ncmVkaWVudC52MwAAAAAYYzJzaP893+K7/K5r8hGrHeiTx0gAAABwY2JvcqNpZGM6Zm9ybWF0bWltYWdlL3N2Zyt4bWxqaW5zdGFuY2VJRHgseG1wOmlpZDoyZGFjMGFhMS04NTQ3LTQ2OTctYmEyMi00OGFjM2U2YmJjZGNscmVsYXRpb25zaGlwaHBhcmVudE9mAAAB4mp1bWIAAABBanVtZGNib3IAEQAQgAAAqgA4m3ETYzJwYS5hY3Rpb25zLnYyAAAAABhjMnNoap6E1UXqGrl6HoESDnJrYwAAAZljYm9yomdhY3Rpb25zgqJmYWN0aW9ua2MycGEub3BlbmVkanBhcmFtZXRlcnOha2luZ3JlZGllbnRzgaJjdXJseC1zZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmluZ3JlZGllbnQudjNkaGFzaFgghxsyDOogBpI03zD7PvqQrTEbjYaoZM6IeHAaI4FV27KkZmFjdGlvbngdY29tLmFudGhyb3BpYy5jbGF1ZGUucHJvdmlkZWRqcGFyYW1ldGVyc6F4H2NvbS5hbnRocm9waWMub3JpZ2luLWNvbmZpZGVuY2VndW5rbm93bmtkZXNjcmlwdGlvbnhmQ2xhdWRlIHByb3ZpZGVkIHRoaXMgZmlsZSBhdCB0aGUgcmVxdWVzdCBvZiBhIHVzZXIgYW5kIG1heSBoYXZlIGNyZWF0ZWQgb3IgbW9kaWZpZWQgdGhlIGZpbGUgY29udGVudHMubXNvZnR3YXJlQWdlbnShZG5hbWVmQ2xhdWRlcmFsbEFjdGlvbnNJbmNsdWRlZPUAAADIanVtYgAAAEBqdW1kY2JvcgARABCAAACqADibcRNjMnBhLmhhc2guZGF0YQAAAAAYYzJzaMUMrqmCfy1hh5Fa2cMdhi0AAACAY2JvcqVjYWxnZnNoYTI1NmNwYWRNAAAAAAAAAAAAAAAAAGRoYXNoWCBY/EMPgTu4zcDFCu0j7APVjDpc5h2Yr3KJhEnAGLqJn2RuYW1lbmp1bWJmIG1hbmlmZXN0amV4Y2x1c2lvbnOBomVzdGFydBjzZmxlbmd0aBkeBAAAAj5qdW1iAAAAJ2p1bWRjMmNsABEAEIAAAKoAOJtxA2MycGEuY2xhaW0udjIAAAACD2Nib3KlY2FsZ2ZzaGEyNTZpc2lnbmF0dXJleE1zZWxmI2p1bWJmPS9jMnBhL3VybjpjMnBhOjg3MzgxZjkyLWRjMmQtNDczOS05NjA2LTk2NTdmZWE5ZTgxOS9jMnBhLnNpZ25hdHVyZWppbnN0YW5jZUlEeCx4bXA6aWlkOjZlMTBlMDcxLTU0NzQtNGNhMi1iMzhjLTNjMWFjM2FlZTAyNHJjcmVhdGVkX2Fzc2VydGlvbnODomN1cmx4LXNlbGYjanVtYmY9YzJwYS5hc3NlcnRpb25zL2MycGEuaW5ncmVkaWVudC52M2RoYXNoWCCHGzIM6iAGkjTfMPs++pCtMRuNhqhkzoh4cBojgVXbsqJjdXJseCpzZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmFjdGlvbnMudjJkaGFzaFgg1ysUPTFr3RVsNN/Bz8Udz6RjT8cXrUz6SZt3Dz04bgmiY3VybHgpc2VsZiNqdW1iZj1jMnBhLmFzc2VydGlvbnMvYzJwYS5oYXNoLmRhdGFkaGFzaFggY8QcLyhVJBP/cLWMRYPEHn8AdvBTXYM9VQoaDKr2zLx0Y2xhaW1fZ2VuZXJhdG9yX2luZm+jZG5hbWVvQW50aHJvcGljIEZpbGVzZ3ZlcnNpb25lMS4wLjBrc3BlY1ZlcnNpb25lMi40LjAAABA4anVtYgAAAChqdW1kYzJjcwARABCAAACqADibcQNjMnBhLnNpZ25hdHVyZQAAABAIY2JvctKEWQISogEmGCFZAgowggIGMIIBjaADAgECAhRA5aAK7sI50L64g/oGQgU9Z1UTADAKBggqhkjOPQQDAzBJMRcwFQYDVQQKEw5BbnRocm9waWMsIFBCQzEuMCwGA1UEAxMlQW50aHJvcGljIENvbnRlbnQgQ3JlZGVudGlhbHMgUm9vdCBDQTAeFw0yNjA4MDcxODQzNTZaFw0yODA4MDYxOTQzNTZaMEQxFzAVBgNVBAoTDkFudGhyb3BpYywgUEJDMSkwJwYDVQQDEyBBbnRocm9waWMgQ2xhdWRlIENvbnRlbnQgU2lnbmluZzBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABJh6CmvLUBgFFNU0vUKlOVtE6djd17L5SuwX0LemFisBM3dkd/3cyjxFA3Qo5S46fX0/ihY0VZ7mfb9KF703t5OjWDBWMA4GA1UdDwEB/wQEAwIHgDAVBgNVHSUEDjAMBgorBgEEAYPoXgIBMAwGA1UdEwEB/wQCMAAwHwYDVR0jBBgwFoAUzlHiBIFOZFsj+OPEz5o+nMHXXMIwCgYIKoZIzj0EAwMDZwAwZAIwMXMdFJ4BetLLVY7ORuE9noqbbAZOZn/aArXyTwFAZfKrPzxF2vPoJNf1+UCdg1XGAjBwX1zd9WGqYkqmL5SFqw1QySjr1zJfpJM9+1rdDwSPLMOPOjKuiXjoU/pUUeG9RwmhY3BhZFkNngAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPZYQEx6iEyGUmjIrWV7RfhGQVIbsyhbIqLxBfqhF0YEFVe3rO0O25L1mgXXtoyDJG1SgM3OiqVxhbwAH3uZbG7ayW4=</c2pa:manifest></metadata>
  <title>Водоснабжение — схема автоматизации</title>

  <style>
    .bg { fill: #0b1220; }
    .title { fill: #e2e8f0; font-size: 20px; font-weight: 700; }
    .caption { fill: #94a3b8; font-size: 12px; font-weight: 600; letter-spacing: .5px; }
    .tank-title { fill: #cbd5e1; font-size: 12px; font-weight: 700; }

    /* Трубы */
    .pipe { fill: none; stroke: #334155; stroke-width: 6; stroke-linejoin: round; }
    .pipe[data-flow="on"] { stroke: #38bdf8; stroke-dasharray: 14 8; animation: flow .8s linear infinite; }
    @keyframes flow { to { stroke-dashoffset: -22; } }

    /* Клапаны (ISO-символ: два треугольника + соленоидный привод) */
    .valve .valve-body { fill: #64748b; stroke: #e2e8f0; stroke-width: 1.5; stroke-linejoin: round; }
    .valve[data-state="open"]   .valve-body { fill: #22c55e; }
    .valve[data-state="closed"] .valve-body { fill: #ef4444; }
    .valve .stem { stroke: #94a3b8; stroke-width: 2; }
    .valve .actuator { fill: #1e293b; stroke: #94a3b8; stroke-width: 1.5; }

    /* Насосы (круг + треугольник к нагнетанию) */
    .pump .pump-body { fill: #1e293b; stroke: #e2e8f0; stroke-width: 2; }
    .pump .pump-arrow { fill: none; stroke: #e2e8f0; stroke-width: 2; stroke-linejoin: round; }
    .pump[data-state="on"]    .pump-body { fill: #16a34a; }
    .pump[data-state="fault"] .pump-body { fill: #dc2626; }

    /* КИП: контрольно-измерительные «пузыри» */
    .instr { fill: #0b1220; stroke: #e2e8f0; stroke-width: 2; }
    .instr-text { fill: #e2e8f0; font-size: 11px; font-weight: 700; text-anchor: middle; }
    .lead { stroke: #94a3b8; stroke-width: 2; }

    /* Ёмкости */
    .tank-body { fill: #0f1a2e; stroke: #94a3b8; stroke-width: 3; }
    .water { fill: #1d78c1; fill-opacity: .85; }
    .tank[data-state="alarm"] .water { fill: #c2410c; }
    .tick { stroke: #94a3b8; stroke-width: 1; }
    .tick-text { fill: #94a3b8; font-size: 9px; }

    /* Текстовые боксы состояния/значений */
    .box rect { fill: #111c33; stroke: #334155; stroke-width: 1.5; }
    .box-label { fill: #94a3b8; font-size: 10px; text-anchor: middle; }
    .box-value { fill: #94a3b8; font-size: 13px; font-weight: 700; text-anchor: middle;
                 font-family: ui-monospace, Consolas, 'Courier New', monospace; }
    [data-state="open"]  .box-value, [data-state="on"] .box-value, [data-state="ok"] .box-value { fill: #4ade80; }
    [data-state="closed"] .box-value, [data-state="fault"] .box-value, [data-state="alarm"] .box-value { fill: #f87171; }
    [data-state="off"] .box-value { fill: #cbd5e1; }
    .box-value.num { fill: #7dd3fc; }
    [data-state="alarm"] .box-value.num { fill: #f87171; }

    .legend-text { fill: #94a3b8; font-size: 11px; }
  </style>

  <rect class="bg" width="1260" height="720"/>
  <text class="title" x="20" y="30">Водоснабжение · схема автоматизации</text>

  <!-- ===================== ТРУБЫ ===================== -->
  <path id="pipe-city"           class="pipe" data-flow="on" data-locked="true" d="M20 360 L130 360"/>
  <path id="pipe-trunk"          class="pipe" data-flow="off" d="M130 360 L130 140"/>
  <path id="pipe-trunk-down"     class="pipe" data-flow="off" d="M130 360 L130 540"/>
  <path id="pipe-home-fill"      class="pipe" data-flow="off" d="M130 140 L330 140"/>
  <path id="pipe-bypass"         class="pipe" data-flow="off" d="M130 360 L800 360 L800 215"/>
  <path id="pipe-street-fill"    class="pipe" data-flow="off" d="M130 540 L330 540"/>
  <path id="pipe-home-suction"   class="pipe" data-flow="off" d="M510 215 L558 215"/>
  <path id="pipe-home-pump-out"  class="pipe" data-flow="off" d="M602 215 L800 215"/>
  <path id="pipe-home-main"      class="pipe" data-flow="off" d="M800 215 L1130 215"/>
  <path id="pipe-street-suction" class="pipe" data-flow="off" d="M510 615 L558 615"/>
  <path id="pipe-street-out"     class="pipe" data-flow="off" d="M602 615 L1130 615"/>
  <circle cx="800" cy="215" r="5" fill="#94a3b8"/>
  <circle cx="130" cy="360" r="5" fill="#94a3b8"/>

  <!-- Подписи линий -->
  <text class="caption" x="20" y="386">ГОРОДСКАЯ</text>
  <text class="caption" x="20" y="401">СЕТЬ</text>
  <text class="caption" x="580" y="348" text-anchor="middle">БАЙПАС</text>
  <text class="caption" x="815" y="204">ДОМ. МАГИСТРАЛЬ</text>
  <text class="caption" x="900" y="604">УЛИЧНЫЙ ВОДОПРОВОД</text>
  <polygon points="1130,205 1150,215 1130,225" fill="#94a3b8"/>
  <text class="caption" x="1158" y="220">В ДОМ</text>
  <polygon points="1130,605 1150,615 1130,625" fill="#94a3b8"/>
  <text class="caption" x="1158" y="620">НА УЛИЦУ</text>

  <!-- ===================== ДАТЧИК ДАВЛЕНИЯ PT1 ===================== -->
  <g id="sensor-city-pressure" class="sensor" data-state="unknown">
    <line class="lead" x1="70" y1="360" x2="70" y2="328"/>
    <circle class="instr" cx="70" cy="310" r="18"/>
    <text class="instr-text" x="70" y="314">PT</text>
    <g class="box" transform="translate(20,235)">
      <rect width="100" height="44" rx="5"/>
      <text class="box-label" x="50" y="15">PT1 Давление</text>
      <text id="sensor-city-pressure-value" class="box-value num" x="50" y="35">— бар</text>
    </g>
  </g>

  <!-- ===================== ЁМКОСТЬ 1: ДОМАШНИЙ РЕЗЕРВ ===================== -->
  <g id="tank-home" class="tank" data-state="unknown">
    <text class="tank-title" x="330" y="50">ЁМКОСТЬ 1 · ДОМАШНИЙ РЕЗЕРВ</text>
    <clipPath id="clip-tank-home"><rect x="332" y="62" width="176" height="186" rx="5"/></clipPath>
    <rect class="tank-body" x="330" y="60" width="180" height="190" rx="6"/>
    <rect id="tank-home-water" class="water" x="332" y="248" width="176" height="0" clip-path="url(#clip-tank-home)"/>
    <line class="tick" x1="332" y1="201.5" x2="344" y2="201.5"/><text class="tick-text" x="348" y="204.5">25%</text>
    <line class="tick" x1="332" y1="155"   x2="344" y2="155"/>  <text class="tick-text" x="348" y="158">50%</text>
    <line class="tick" x1="332" y1="108.5" x2="344" y2="108.5"/><text class="tick-text" x="348" y="111.5">75%</text>
    <line class="lead" x1="510" y1="100" x2="534" y2="100"/>
    <circle class="instr" cx="552" cy="100" r="18"/>
    <text class="instr-text" x="552" y="104">LT</text>
    <g class="box" transform="translate(345,262)">
      <rect width="150" height="40" rx="5"/>
      <text class="box-label" x="75" y="14">LT1 Уровень воды</text>
      <text id="tank-home-level" class="box-value num" x="75" y="32">— %</text>
    </g>
  </g>

  <!-- ===================== ЁМКОСТЬ 2: УЛИЦА ===================== -->
  <g id="tank-street" class="tank" data-state="unknown" transform="translate(0,400)">
    <text class="tank-title" x="330" y="50">ЁМКОСТЬ 2 · УЛИЧНЫЙ ВОДОПРОВОД</text>
    <clipPath id="clip-tank-street"><rect x="332" y="62" width="176" height="186" rx="5"/></clipPath>
    <rect class="tank-body" x="330" y="60" width="180" height="190" rx="6"/>
    <rect id="tank-street-water" class="water" x="332" y="248" width="176" height="0" clip-path="url(#clip-tank-street)"/>
    <line class="tick" x1="332" y1="201.5" x2="344" y2="201.5"/><text class="tick-text" x="348" y="204.5">25%</text>
    <line class="tick" x1="332" y1="155"   x2="344" y2="155"/>  <text class="tick-text" x="348" y="158">50%</text>
    <line class="tick" x1="332" y1="108.5" x2="344" y2="108.5"/><text class="tick-text" x="348" y="111.5">75%</text>
    <line class="lead" x1="510" y1="100" x2="534" y2="100"/>
    <circle class="instr" cx="552" cy="100" r="18"/>
    <text class="instr-text" x="552" y="104">LT</text>
    <g class="box" transform="translate(345,262)">
      <rect width="150" height="40" rx="5"/>
      <text class="box-label" x="75" y="14">LT2 Уровень воды</text>
      <text id="tank-street-level" class="box-value num" x="75" y="32">— %</text>
    </g>
  </g>

  <!-- ===================== КЛАПАН V1: город → домашний резерв ===================== -->
  <g id="valve-home-fill" class="valve" data-state="unknown">
    <g transform="translate(230,140)">
      <line class="stem" x1="0" y1="0" x2="0" y2="-22"/>
      <rect class="actuator" x="-10" y="-32" width="20" height="10" rx="2"/>
      <path class="valve-body" d="M-15,-11 L15,11 L15,-11 L-15,11 Z"/>
    </g>
    <g class="box" transform="translate(172,60)">
      <rect width="116" height="40" rx="5"/>
      <text class="box-label" x="58" y="14">V1 Набор резерва</text>
      <text id="valve-home-fill-state" class="box-value" x="58" y="32">НЕТ ДАННЫХ</text>
    </g>
  </g>

  <!-- ===================== КЛАПАН V2: байпас ===================== -->
  <g id="valve-bypass" class="valve" data-state="unknown">
    <g transform="translate(440,360)">
      <line class="stem" x1="0" y1="0" x2="0" y2="22"/>
      <rect class="actuator" x="-10" y="22" width="20" height="10" rx="2"/>
      <path class="valve-body" d="M-15,-11 L15,11 L15,-11 L-15,11 Z"/>
    </g>
    <g class="box" transform="translate(382,398)">
      <rect width="116" height="40" rx="5"/>
      <text class="box-label" x="58" y="14">V2 Байпас</text>
      <text id="valve-bypass-state" class="box-value" x="58" y="32">НЕТ ДАННЫХ</text>
    </g>
  </g>

  <!-- ===================== КЛАПАН V3: город → уличная ёмкость ===================== -->
  <g id="valve-street-fill" class="valve" data-state="unknown">
    <g transform="translate(230,540)">
      <line class="stem" x1="0" y1="0" x2="0" y2="-22"/>
      <rect class="actuator" x="-10" y="-32" width="20" height="10" rx="2"/>
      <path class="valve-body" d="M-15,-11 L15,11 L15,-11 L-15,11 Z"/>
    </g>
    <g class="box" transform="translate(172,460)">
      <rect width="116" height="40" rx="5"/>
      <text class="box-label" x="58" y="14">V3 Набор улицы</text>
      <text id="valve-street-fill-state" class="box-value" x="58" y="32">НЕТ ДАННЫХ</text>
    </g>
  </g>

  <!-- ===================== НАСОС P1 (дом) ===================== -->
  <g id="pump-home" class="pump" data-state="unknown">
    <g transform="translate(580,215)">
      <circle class="pump-body" r="22"/>
      <polygon class="pump-arrow" points="0,-22 22,0 0,22"/>
    </g>
    <g class="box" transform="translate(532,258)">
      <rect width="96" height="40" rx="5"/>
      <text class="box-label" x="48" y="14">P1 Насос (дом)</text>
      <text id="pump-home-state" class="box-value" x="48" y="32">НЕТ ДАННЫХ</text>
    </g>
  </g>

  <!-- ===================== НАСОС P2 (улица) ===================== -->
  <g id="pump-street" class="pump" data-state="unknown">
    <g transform="translate(580,615)">
      <circle class="pump-body" r="22"/>
      <polygon class="pump-arrow" points="0,-22 22,0 0,22"/>
    </g>
    <g class="box" transform="translate(532,545)">
      <rect width="96" height="40" rx="5"/>
      <text class="box-label" x="48" y="14">P2 Насос (улица)</text>
      <text id="pump-street-state" class="box-value" x="48" y="32">НЕТ ДАННЫХ</text>
    </g>
  </g>

  <!-- ===================== СЧЁТЧИК FQ1 (дом) ===================== -->
  <g id="meter-home" class="meter" data-state="unknown">
    <circle class="instr" cx="950" cy="215" r="20"/>
    <text class="instr-text" x="950" y="219">FQ</text>
    <g class="box" transform="translate(890,258)">
      <rect width="120" height="56" rx="5"/>
      <text class="box-label" x="60" y="14">FQ1 Счётчик (дом)</text>
      <text id="meter-home-flow"  class="box-value num" x="60" y="33">— л/мин</text>
      <text id="meter-home-total" class="box-value num" x="60" y="50">— м³</text>
    </g>
  </g>

  <!-- ===================== СЧЁТЧИК FQ2 (улица) ===================== -->
  <g id="meter-street" class="meter" data-state="unknown">
    <circle class="instr" cx="700" cy="615" r="20"/>
    <text class="instr-text" x="700" y="619">FQ</text>
    <g class="box" transform="translate(640,535)">
      <rect width="120" height="56" rx="5"/>
      <text class="box-label" x="60" y="14">FQ2 Счётчик (улица)</text>
      <text id="meter-street-flow"  class="box-value num" x="60" y="33">— л/мин</text>
      <text id="meter-street-total" class="box-value num" x="60" y="50">— м³</text>
    </g>
  </g>

  <!-- ===================== ЛЕГЕНДА ===================== -->
  <g transform="translate(760,672)">
    <rect x="0" y="-9" width="12" height="12" fill="#22c55e"/><text class="legend-text" x="18" y="2">открыт / вкл</text>
    <rect x="115" y="-9" width="12" height="12" fill="#ef4444"/><text class="legend-text" x="133" y="2">закрыт / авария</text>
    <rect x="248" y="-9" width="12" height="12" fill="#64748b"/><text class="legend-text" x="266" y="2">нет данных</text>
    <line x1="350" y1="-3" x2="380" y2="-3" stroke="#38bdf8" stroke-width="4" stroke-dasharray="8 5"/><text class="legend-text" x="388" y="2">поток</text>
  </g>

  <!-- ===================== JS API ===================== -->
  <script type="text/javascript"><![CDATA[
  (function () {
    var $ = function (id) { return document.getElementById(id); };

    var LABEL = {
      open: 'ОТКРЫТ', closed: 'ЗАКРЫТ',
      on: 'ВКЛЮЧЕН', off: 'ВЫКЛЮЧЕН', fault: 'АВАРИЯ',
      unknown: 'НЕТ ДАННЫХ'
    };
    var WATER_TOP = 62, WATER_H = 186;   // область воды внутри ёмкости
    var ACTIVE = { open: 1, on: 1 };

    function isActive(id) {
      var g = $(id);
      return !!g && ACTIVE[g.getAttribute('data-state')] === 1;
    }
    // Трубы с data-locked="true" (городской ввод) всегда остаются в своём состоянии
    function flow(pipeId, on) {
      var p = $(pipeId);
      if (p && p.getAttribute('data-locked') !== 'true') p.setAttribute('data-flow', on ? 'on' : 'off');
    }

    var api = {
      // true: анимация труб пересчитывается сама при каждом setState клапана/насоса
      autoFlow: true,

      // Клапан/насос: state = open|closed|on|off|fault|unknown, text — своя надпись (необязательно)
      setState: function (id, state, text) {
        var g = $(id); if (!g) return;
        g.setAttribute('data-state', state);
        var t = $(id + '-state');
        if (t) t.textContent = (text !== undefined) ? text : (LABEL[state] || state);
        if (api.autoFlow) api.updateFlows();
      },
      // Любой текстовый бокс по id
      setText: function (id, text) {
        var t = $(id); if (t) t.textContent = text;
      },
      // Ёмкость: tankId = 'tank-home' | 'tank-street', pct = 0..100
      setLevel: function (tankId, pct, text) {
        pct = Math.max(0, Math.min(100, +pct));
        var w = $(tankId + '-water');
        if (w) {
          var h = WATER_H * pct / 100;
          w.setAttribute('y', WATER_TOP + WATER_H - h);
          w.setAttribute('height', h);
        }
        api.setText(tankId + '-level', (text !== undefined) ? text : Math.round(pct) + ' %');
        var g = $(tankId); if (g) g.setAttribute('data-state', pct < 15 ? 'alarm' : 'ok');
      },
      // Давление городской сети, бар
      setPressure: function (bar, alarm) {
        api.setText('sensor-city-pressure-value', (+bar).toFixed(1) + ' бар');
        var g = $('sensor-city-pressure');
        if (g) g.setAttribute('data-state', alarm ? 'alarm' : 'ok');
      },
      // Счётчик: meterId = 'meter-home' | 'meter-street'
      setMeter: function (meterId, flowLpm, totalM3) {
        if (flowLpm !== null && flowLpm !== undefined) api.setText(meterId + '-flow', (+flowLpm).toFixed(1) + ' л/мин');
        if (totalM3 !== null && totalM3 !== undefined) api.setText(meterId + '-total', (+totalM3).toFixed(2) + ' м³');
        var g = $(meterId); if (g) g.setAttribute('data-state', flowLpm > 0 ? 'on' : 'off');
      },
      // Ручное управление анимацией одной трубы (если autoFlow = false)
      setFlow: function (pipeId, on) { flow(pipeId, on); },

      // Пересчёт анимации труб по состоянию клапанов и насосов
      updateFlows: function () {
        var v1 = isActive('valve-home-fill'),    // город -> домашняя ёмкость
            v2 = isActive('valve-bypass'),       // байпас
            v3 = isActive('valve-street-fill'),  // город -> уличная ёмкость
            p1 = isActive('pump-home'),
            p2 = isActive('pump-street');

        // городской ввод (pipe-city) — постоянно включён (data-locked)
        flow('pipe-trunk',          v1);
        flow('pipe-home-fill',      v1);
        flow('pipe-trunk-down',     v3);
        flow('pipe-street-fill',    v3);
        flow('pipe-bypass',         v2);
        flow('pipe-home-suction',   p1);
        flow('pipe-home-pump-out',  p1);
        flow('pipe-home-main',      p1 || v2);   // после слияния насоса и байпаса, через счётчик
        flow('pipe-street-suction', p2);
        flow('pipe-street-out',     p2);
      },

      // Демонстрация — вызвать из консоли: dashboard.demo()
      demo: function () {
        api.setPressure(3.4);
        api.setLevel('tank-home', 72);
        api.setLevel('tank-street', 38);
        api.setMeter('meter-home', 12.5, 1234.56);
        api.setMeter('meter-street', 0, 87.3);
        api.setState('valve-home-fill', 'closed');
        api.setState('valve-street-fill', 'open');
        api.setState('pump-street', 'off');
        api.setState('pump-home', 'on');
        api.setState('valve-bypass', 'closed');
      }
    };

    window.dashboard = api;
    api.updateFlows();
  })();
  ]]><\/script>
</svg>
`,zi=Oi.replace(/^\s*<\?xml[\s\S]*?\?>/i,"").replace(/<script\b[\s\S]*?<\/script>/gi,"").replace(/<metadata\b[\s\S]*?<\/metadata>/gi,""),gs=.37,qi=1.2,ji=62,fr=186,bs=ji+fr,Vi={open:"ОТКРЫТ",closed:"ЗАКРЫТ",on:"ВКЛЮЧЕН",off:"ВЫКЛЮЧЕН",unknown:"НЕТ ДАННЫХ"},Mt={"valve-home-fill":"fillingBarrelValve","valve-bypass":"bypassValve","valve-street-fill":"rainwaterPitValve","pump-home":"homePumpStation","pump-street":"outdoorPumpStation"},Yi={"valve-home-fill":"valve","valve-bypass":"valve","valve-street-fill":"valve","pump-home":"pump","pump-street":"pump"},Zi=Object.keys(Mt);function B(e,t){return e.querySelector(`[id="${t}"]`)}function Gi(e,t,s){const r=B(e,t);r&&r.setAttribute("data-state",s);const i=B(e,`${t}-state`);i&&(i.textContent=Vi[s])}function _s(e,t,s){const r=B(e,`${t}-water`),i=B(e,`${t}-level`),A=B(e,t);if(s===null){r&&(r.setAttribute("y",String(bs)),r.setAttribute("height","0")),i&&(i.textContent="— %"),A&&A.setAttribute("data-state","unknown");return}const n=Math.max(0,Math.min(100,s)),l=fr*n/100;r&&(r.setAttribute("y",String(bs-l)),r.setAttribute("height",String(l))),i&&(i.textContent=`${Math.round(n)} %`),A&&A.setAttribute("data-state",n<15?"alarm":"ok")}function Qi(e,t,s){const r=B(e,"sensor-city-pressure-value"),i=B(e,"sensor-city-pressure");if(t===null){r&&(r.textContent="— бар"),i&&i.setAttribute("data-state","unknown");return}r&&(r.textContent=`${t.toFixed(1)} бар`),i&&i.setAttribute("data-state",s?"alarm":"ok")}function vs(e,t,s){const r=B(e,`${t}-flow`),i=B(e,`${t}-total`),A=B(e,t);if(s===null){r&&(r.textContent="— л/мин"),i&&(i.textContent="— м³"),A&&A.setAttribute("data-state","unknown");return}r&&(r.textContent="— л/мин"),i&&(i.textContent=`${s.toFixed(2)} м³`),A&&A.setAttribute("data-state","off")}function z(e,t,s){const r=B(e,t);r&&r.getAttribute("data-locked")!=="true"&&r.setAttribute("data-flow",s?"on":"off")}function Ji(e,t){return e.devices.find(s=>s.id===Mt[t])??null}function wt(e,t){const s=e.sensors.find(r=>r.id===t);return s&&s.available?s.value:null}function $t(e,t){const s=e.devices.find(r=>r.id===t);return s!==void 0&&s.available&&s.value}function Xi({snapshot:e,disabled:t,pendingId:s,onToggle:r}){const i=pt(null),A=pt(null),n=pt({snapshot:e,disabled:t,pendingId:s,onToggle:r});n.current={snapshot:e,disabled:t,pendingId:s,onToggle:r},O(()=>{const o=A.current,c=i.current;if(c&&(t?c.setAttribute("data-disabled","true"):c.removeAttribute("data-disabled")),!o)return;for(const m of Zi){const w=Ji(e,m),M=!w||!w.available?"unknown":Yi[m]==="valve"?w.value?"open":"closed":w.value?"on":"off";Gi(o,m,M);const T=B(o,m);T&&(s===Mt[m]?T.setAttribute("data-pending","true"):T.removeAttribute("data-pending"))}const h=wt(e,"barrelWaterLevel");_s(o,"tank-home",h===null?null:(h-gs)/(qi-gs)*100);const u=wt(e,"rainwaterPitLevel");_s(o,"tank-street",u);const d=wt(e,"supplierPressure");Qi(o,d,e.emergencyMode),vs(o,"meter-home",wt(e,"homeWaterConsumption")),vs(o,"meter-street",wt(e,"yardWaterConsumption"));const p=$t(e,"fillingBarrelValve"),b=$t(e,"bypassValve"),_=$t(e,"rainwaterPitValve"),y=$t(e,"homePumpStation"),f=$t(e,"outdoorPumpStation");z(o,"pipe-trunk",p),z(o,"pipe-home-fill",p),z(o,"pipe-trunk-down",_),z(o,"pipe-street-fill",_),z(o,"pipe-bypass",b),z(o,"pipe-home-suction",y),z(o,"pipe-home-pump-out",y),z(o,"pipe-home-main",y||b),z(o,"pipe-street-suction",f),z(o,"pipe-street-out",f)},[e,s,t]);const l=L(o=>{if(!(o.target instanceof Element))return;const h=o.target.closest("g[id]")?.id;if(!h||!Object.prototype.hasOwnProperty.call(Mt,h))return;const u=n.current;if(u.disabled)return;const d=Mt[h],p=u.snapshot.devices.find(b=>b.id===d);!p||!p.available||u.pendingId===p.id||u.onToggle(p.id,p.value?"off":"on")},[]);return a("div",{class:"schematic-scroll",ref:i,onClick:l,children:[a("p",{class:"hint",children:"Tap a valve or pump on the schematic to toggle it."}),a("div",{ref:A,dangerouslySetInnerHTML:{__html:zi}})]})}const Ki=5e3,tA={on:"Turn on",off:"Turn off",onBadge:"Enabled",offBadge:"Disabled"};function eA({device:e,actions:t,disabled:s,onToggle:r}){const i=e.available?e.value?{label:t.onBadge,className:"badge badge-on"}:{label:t.offBadge,className:"badge badge-off"}:{label:"Unknown",className:"badge badge-off"};return a("li",{class:"valve-row",children:[a("div",{class:"row",children:[a("span",{children:e.name}),a("span",{class:i.className,children:i.label})]}),a("div",{class:"form-actions",children:[a(D,{variant:"primary",disabled:s,onClick:()=>r(e.id,"on"),children:t.on}),a(D,{disabled:s,onClick:()=>r(e.id,"off"),children:t.off})]})]})}function sA(){const[e,t]=v(null),[s,r]=v(!1),[i,A]=v(null),[n,l]=v(null),[o,c]=v(null),h=L(async()=>{const _=await Si();if(_.ok){const y=_.data;Array.isArray(y.devices)&&Array.isArray(y.sensors)&&typeof y.emergencyMode=="boolean"?(t(y),A(null)):A("Device returned an invalid controls response")}else A(_.message);r(!0)},[]);O(()=>{h();const _=window.setInterval(()=>{h()},Ki);return()=>window.clearInterval(_)},[h]);const u=L(async(_,y)=>{l(null),c(_);try{const f=await Ii(_,y);f.ok||l(f.message)}catch(f){l(f instanceof Error?f.message:String(f))}finally{c(null),await new Promise(f=>window.setTimeout(f,300)),await h()}},[h]);if(!s)return a("div",{class:"stack",children:a(R,{title:"Controls",children:a("p",{class:"muted",children:"Loading controls…"})})});if(!e)return a("div",{class:"stack",children:[i?a(k,{kind:"error",message:i}):null,a("div",{class:"form-actions",children:a(D,{onClick:()=>{h()},children:"Retry"})})]});const d=e.devices.find(_=>_.kind==="auto")??null,p=i!==null,b=_=>p||!_.available||o===_.id;return a("div",{class:"stack",children:[d&&d.available&&d.value?a(k,{kind:"info",message:"Automation is enabled and may revert manual valve/pump changes shortly after you toggle them."}):null,i?a(U,{children:[a(k,{kind:"error",message:i}),a("div",{class:"form-actions",children:a(D,{onClick:()=>{h()},children:"Retry"})})]}):null,n?a(k,{kind:"error",message:n,onClose:()=>l(null)}):null,a(R,{title:"Auto mode",children:d?a("ul",{class:"valve-list",children:a(eA,{device:d,actions:tA,disabled:b(d),onToggle:u})}):a("p",{class:"muted",children:"Auto mode is not reported by the device."})}),a(R,{title:"Water schematic",children:a(Xi,{snapshot:e,disabled:p,pendingId:o,onToggle:u})})]})}const rA={homeWaterInitialValue:"",yardWaterInitialValue:""};function ys(e){if(e.trim()==="")return null;const t=Number(e);return Number.isFinite(t)?t:null}function iA(e){return Object.values(e).some(t=>!!t)}function ws(e){return/^-?\d*(\.\d{4,})$/.test(e.trim())}function AA(e){const t={},s=ys(e.homeWaterInitialValue);s===null||s<0?t.homeWaterInitialValue="Enter a value of 0 or more.":ws(e.homeWaterInitialValue)&&(t.homeWaterInitialValue="At most 3 decimal places.");const r=ys(e.yardWaterInitialValue);return r===null||r<0?t.yardWaterInitialValue="Enter a value of 0 or more.":ws(e.yardWaterInitialValue)&&(t.yardWaterInitialValue="At most 3 decimal places."),t}function nA(){const[e,t]=v(!1),[s,r]=v(null),[i,A]=v(rA),[n,l]=v({}),[o,c]=v(null),[h,u]=v(null),[d,p]=v(null),[b,_]=v(null),[y,f]=v(null),m=L(async()=>{r(null);const S=await ki();S.ok?A({homeWaterInitialValue:String(S.data.homeWaterInitialValue),yardWaterInitialValue:String(S.data.yardWaterInitialValue)}):r(S.message),t(!0)},[]);O(()=>{m()},[m]);const w=L(async S=>{const F=AA(i);l(F);const q=S==="home"?u:_,H=S==="home"?p:f;if(q(null),H(null),!iA(F)){c(S);try{const I=await Ti({homeWaterInitialValue:Number(i.homeWaterInitialValue),yardWaterInitialValue:Number(i.yardWaterInitialValue)});I.ok?q("Counter recalibrated to the entered reading."):H(I.message)}catch(I){H(I instanceof Error?I.message:String(I))}finally{c(null)}}},[i]);if(!e)return a("div",{class:"stack",children:a(R,{title:"Meters",children:a("p",{class:"muted",children:"Loading meter values…"})})});const M=o!==null,T=(S,F,q)=>{const H=S==="home",I=H?"homeWaterInitialValue":"yardWaterInitialValue",G=i[I],kr=n[I],Oe=H?h:b,ze=H?d:y;return a(R,{title:F,children:a("form",{novalidate:!0,onSubmit:oe=>{oe.preventDefault(),w(S)},children:[a(W,{label:q,value:G,onInput:oe=>A(Sr=>({...Sr,[I]:oe})),type:"number",min:0,step:.001,inputMode:"decimal",error:kr,help:"Cumulative counter reading in m³ (up to 3 decimals).",disabled:M}),Oe?a(k,{kind:"success",message:Oe,onClose:()=>H?u(null):_(null)}):null,ze?a(k,{kind:"error",message:ze,onClose:()=>H?p(null):f(null)}):null,a("div",{class:"form-actions",children:a(D,{type:"submit",variant:"primary",disabled:M,children:o===S?"Saving…":"Save"})})]})})};return a("div",{class:"stack",children:[a(k,{kind:"info",message:"Setting an initial value recalibrates the pulse counter to that reading. It is persisted immediately and needs no reboot."}),s?a(U,{children:[a(k,{kind:"error",message:s}),a("div",{class:"form-actions",children:a(D,{onClick:()=>{m()},children:"Retry"})})]}):null,T("home","Home water","Home water counter"),T("yard","Yard water","Yard water counter")]})}function aA(){const e=pt(null);return O(()=>{const t=document.createElement("edn-network-page");return e.current?.append(t),()=>t.remove()},[]),a("div",{ref:e})}function oA({label:e,value:t,options:s,onChange:r,error:i,help:A,disabled:n,required:l,name:o}){const c=Ee(),h=u=>{r?.(u.currentTarget.value)};return a("label",{class:"field",for:c,children:[a("span",{class:"field-label",children:e}),a("select",{id:c,name:o,value:String(t),disabled:n,required:l,onChange:h,"aria-invalid":i?!0:void 0,children:s.map(u=>a("option",{value:u.value,disabled:u.disabled,children:u.label},u.value))}),A&&!i?a("span",{class:"field-help",children:A}):null,i?a("span",{class:"field-error",children:i}):null]})}function Jt(e){if(e.trim()==="")return null;const t=Number(e);return Number.isFinite(t)?t:null}function De(e){return Object.values(e).some(t=>!!t)}function $s(e){return/^-?\d*(\.\d{4,})$/.test(e.trim())}const lA={modbusSpeed:"9600",addressQDY30A:"",addressWBMAI6:""};function dA(e){const t=g.modbus.speeds.map(r=>({value:String(r),label:`${r} baud`})),s=Jt(e);return s!==null&&!g.modbus.speeds.includes(s)&&t.unshift({value:e,label:`${e} (current)`}),t}function xs(e,t){const s=Jt(e);if(s===null||!Number.isInteger(s)||s<g.modbus.addressMin||s>g.modbus.addressMax)return`${t} must be an integer between ${g.modbus.addressMin} and ${g.modbus.addressMax}.`}function cA(){const[e,t]=v(!1),[s,r]=v(null),[i,A]=v(lA),[n,l]=v({}),[o,c]=v(!1),[h,u]=v(null),[d,p]=v(null),b=se(()=>dA(i.modbusSpeed),[i.modbusSpeed]),_=L(async()=>{r(null);const m=await wi();m.ok?A({modbusSpeed:String(m.data.modbusSpeed),addressQDY30A:String(m.data.addressQDY30A),addressWBMAI6:String(m.data.addressWBMAI6)}):r(m.message),t(!0)},[]);O(()=>{_()},[_]);const y=m=>A(w=>({...w,...m})),f=L(async m=>{m.preventDefault();const w={addressQDY30A:xs(i.addressQDY30A,"QDY30A address"),addressWBMAI6:xs(i.addressWBMAI6,"WB-MAI6 address")};if(l(w),u(null),p(null),!De(w)){c(!0);try{const M=await Ei({modbusSpeed:Number(i.modbusSpeed),addressQDY30A:Number(i.addressQDY30A),addressWBMAI6:Number(i.addressWBMAI6)});M.ok?u("Modbus settings saved to flash."):p(M.message)}catch(M){p(M instanceof Error?M.message:String(M))}finally{c(!1)}}},[i]);return e?a(R,{title:"Modbus",children:[s?a(U,{children:[a(k,{kind:"error",message:s}),a("div",{class:"form-actions",children:a(D,{onClick:()=>{_()},children:"Retry"})})]}):null,a("form",{onSubmit:f,novalidate:!0,children:[a(oA,{label:"Bus speed",value:i.modbusSpeed,options:b,onChange:m=>y({modbusSpeed:m}),help:"Only the speeds supported by the firmware are listed.",disabled:o}),a(W,{label:"QDY30A address",value:i.addressQDY30A,onInput:m=>y({addressQDY30A:m}),type:"number",min:g.modbus.addressMin,max:g.modbus.addressMax,inputMode:"numeric",error:n.addressQDY30A,disabled:o}),a(W,{label:"WB-MAI6 address",value:i.addressWBMAI6,onInput:m=>y({addressWBMAI6:m}),type:"number",min:g.modbus.addressMin,max:g.modbus.addressMax,inputMode:"numeric",error:n.addressWBMAI6,disabled:o}),h?a(k,{kind:"success",message:h,onClose:()=>u(null)}):null,d?a(k,{kind:"error",message:d,onClose:()=>p(null)}):null,a("div",{class:"form-actions",children:a(D,{type:"submit",variant:"primary",disabled:o,children:o?"Saving…":"Save Modbus"})})]})]}):a(R,{title:"Modbus",children:a("p",{class:"muted",children:"Loading Modbus settings…"})})}const hA={rainwaterPitLevelTopic:"",rainwaterPitMaxHeight:"",rainwaterPitMaxFillLevel:""};function uA(){const[e,t]=v(!1),[s,r]=v(null),[i,A]=v(hA),[n,l]=v({}),[o,c]=v(!1),[h,u]=v(null),[d,p]=v(null),b=L(async()=>{r(null);const f=await $i();f.ok?A({rainwaterPitLevelTopic:f.data.rainwaterPitLevelTopic,rainwaterPitMaxHeight:String(f.data.rainwaterPitMaxHeight),rainwaterPitMaxFillLevel:String(f.data.rainwaterPitMaxFillLevel)}):r(f.message),t(!0)},[]);O(()=>{b()},[b]);const _=f=>A(m=>({...m,...f})),y=L(async f=>{f.preventDefault();const m={};i.rainwaterPitLevelTopic.length>g.rainwater.topicMax&&(m.rainwaterPitLevelTopic=`At most ${g.rainwater.topicMax} characters.`);const w=Jt(i.rainwaterPitMaxHeight);w===null||w<=g.rainwater.maxHeightMinExclusive||w>g.rainwater.maxHeightMax?m.rainwaterPitMaxHeight=`Height must be greater than 0 and at most ${g.rainwater.maxHeightMax} m.`:$s(i.rainwaterPitMaxHeight)&&(m.rainwaterPitMaxHeight="At most 3 decimal places.");const M=Jt(i.rainwaterPitMaxFillLevel);if(M===null||M<=g.rainwater.fillLevelStartPercent||M>g.rainwater.maxFillLevelMax?m.rainwaterPitMaxFillLevel=`Fill level must be greater than ${g.rainwater.fillLevelStartPercent} and at most ${g.rainwater.maxFillLevelMax}.`:$s(i.rainwaterPitMaxFillLevel)&&(m.rainwaterPitMaxFillLevel="At most 3 decimal places."),l(m),u(null),p(null),!De(m)){c(!0);try{const T=await Pi({rainwaterPitLevelTopic:i.rainwaterPitLevelTopic,rainwaterPitMaxHeight:Number(i.rainwaterPitMaxHeight),rainwaterPitMaxFillLevel:Number(i.rainwaterPitMaxFillLevel)});T.ok?u("Rainwater settings saved to flash."):p(T.message)}catch(T){p(T instanceof Error?T.message:String(T))}finally{c(!1)}}},[i]);return e?a(R,{title:"Rainwater pit",children:[s?a(U,{children:[a(k,{kind:"error",message:s}),a("div",{class:"form-actions",children:a(D,{onClick:()=>{b()},children:"Retry"})})]}):null,a("form",{onSubmit:y,novalidate:!0,children:[a(W,{label:"Pit level topic",value:i.rainwaterPitLevelTopic,onInput:f=>_({rainwaterPitLevelTopic:f}),maxLength:g.rainwater.topicMax,placeholder:"Leave empty to disable auto-filling",help:"MQTT topic that reports the pit level; empty disables auto-filling.",error:n.rainwaterPitLevelTopic,autoComplete:"off",disabled:o}),a(W,{label:"Pit max height",value:i.rainwaterPitMaxHeight,onInput:f=>_({rainwaterPitMaxHeight:f}),type:"number",min:g.rainwater.maxHeightMinExclusive,max:g.rainwater.maxHeightMax,step:.001,inputMode:"decimal",help:`Height of the pit in metres (greater than 0, at most ${g.rainwater.maxHeightMax}).`,error:n.rainwaterPitMaxHeight,disabled:o}),a(W,{label:"Pit max fill level",value:i.rainwaterPitMaxFillLevel,onInput:f=>_({rainwaterPitMaxFillLevel:f}),type:"number",min:g.rainwater.fillLevelStartPercent,max:g.rainwater.maxFillLevelMax,step:.001,inputMode:"decimal",help:`Percentage that stops filling; must be greater than ${g.rainwater.fillLevelStartPercent}% and at most ${g.rainwater.maxFillLevelMax}%.`,error:n.rainwaterPitMaxFillLevel,disabled:o}),h?a(k,{kind:"success",message:h,onClose:()=>u(null)}):null,d?a(k,{kind:"error",message:d,onClose:()=>p(null)}):null,a("div",{class:"form-actions",children:a(D,{type:"submit",variant:"primary",disabled:o,children:o?"Saving…":"Save rainwater"})})]})]}):a(R,{title:"Rainwater pit",children:a("p",{class:"muted",children:"Loading rainwater settings…"})})}const pA={electricityTopic:""};function fA(){const[e,t]=v(!1),[s,r]=v(null),[i,A]=v(pA),[n,l]=v({}),[o,c]=v(!1),[h,u]=v(null),[d,p]=v(null),b=L(async()=>{r(null);const f=await xi();f.ok?A({electricityTopic:f.data.electricityTopic}):r(f.message),t(!0)},[]);O(()=>{b()},[b]);const _=f=>A(m=>({...m,...f})),y=L(async f=>{f.preventDefault();const m={};if(i.electricityTopic.length>g.electricity.topicMax&&(m.electricityTopic=`At most ${g.electricity.topicMax} characters.`),l(m),u(null),p(null),!De(m)){c(!0);try{const w=await Mi({electricityTopic:i.electricityTopic});w.ok?u("Electricity settings saved to flash."):p(w.message)}catch(w){p(w instanceof Error?w.message:String(w))}finally{c(!1)}}},[i]);return e?a(R,{title:"Electricity",children:[s?a(U,{children:[a(k,{kind:"error",message:s}),a("div",{class:"form-actions",children:a(D,{onClick:()=>{b()},children:"Retry"})})]}):null,a("form",{onSubmit:y,children:[a(W,{label:"Grid state topic",value:i.electricityTopic,onInput:f=>_({electricityTopic:f}),maxLength:g.electricity.topicMax,placeholder:"finedog/electricity",help:"Finedog grid-state topic (NORMAL/GENERATOR/BATTERY/CRITICAL); empty disables electricity-aware automation. Applies after reboot.",error:n.electricityTopic,autoComplete:"off",disabled:o}),h?a(k,{kind:"success",message:h,onClose:()=>u(null)}):null,d?a(k,{kind:"error",message:d,onClose:()=>p(null)}):null,a("div",{class:"form-actions",children:a(D,{type:"submit",variant:"primary",disabled:o,children:o?"Saving…":"Save electricity"})})]})]}):a(R,{title:"Electricity",children:a("p",{class:"muted",children:"Loading electricity settings…"})})}function mA(){return a("div",{class:"stack",children:[a(pr,{}),a(cA,{}),a(uA,{}),a(fA,{})]})}const ue=2e3,gA=12e4;function bA(){const[e,t]=v("idle"),s=pt(0);O(()=>{if(e!=="rebooting")return;let n=!1,l;const o=()=>{ur().then(c=>{if(!n){if(c.ok){t("ready");return}if(s.current+=1,s.current*ue>=gA){t("timeout");return}l=window.setTimeout(o,ue)}})};return l=window.setTimeout(o,ue),()=>{n=!0,l!==void 0&&window.clearTimeout(l)}},[e]);const r=L(()=>{s.current=0,t("rebooting")},[]),i=L(()=>t("idle"),[]),A=L(()=>{s.current=0,t("rebooting")},[]);return se(()=>({phase:e,start:r,dismiss:i,retry:A}),[e,r,i,A])}function _A({flow:e}){return e.phase==="idle"?null:a("div",{class:"reboot-overlay",role:"alertdialog","aria-modal":"true","aria-label":"Device rebooting",children:a("div",{class:"reboot-dialog card",children:[a("h2",{children:"Device is rebooting"}),e.phase==="rebooting"?a(U,{children:[a("p",{children:"Waiting for the device to come back online. This usually takes 20–60 seconds."}),a("p",{class:"muted","aria-live":"polite",children:"Polling device health…"})]}):null,e.phase==="ready"?a(U,{children:[a(k,{kind:"success",message:"The device is back online."}),a("div",{class:"form-actions",children:a(D,{variant:"primary",onClick:()=>window.location.reload(),children:"Reload panel"})})]}):null,e.phase==="timeout"?a(U,{children:[a(k,{kind:"error",message:"No response after about two minutes. Check the power and network, then reload or keep waiting."}),a("div",{class:"form-actions",children:[a(D,{onClick:e.retry,children:"Keep waiting"}),a(D,{onClick:e.dismiss,children:"Dismiss"})]})]}):null]})})}const vA=1e4;function yA(e){const t=Math.max(0,Math.floor(e)),s=Math.floor(t/86400),r=Math.floor(t%86400/3600),i=Math.floor(t%3600/60),A=t%60,n=[];return s&&n.push(`${s}d`),(s||r)&&n.push(`${r}h`),(s||r||i)&&n.push(`${i}m`),n.push(`${A}s`),n.join(" ")}function wA(e){return Number.isFinite(e)?`${Math.round(e/1024)} KB (${Math.round(e)} bytes)`:String(e)}function $A(){const[e,t]=v(null),[s,r]=v(null),[i,A]=v(!1),[n,l]=v(null),[o,c]=v(null),[h,u]=v(!0),[d,p]=v(null),[b,_]=v(!1),y=bA(),f=L(async()=>{const S=await vi();S.ok?(t(S.data),r(null)):r(S.message),A(!0)},[]),m=L(async()=>{u(!0);const[S,F]=await Promise.all([ur(),yi()]);l(S),c(F),u(!1)},[]);O(()=>{f();const S=window.setInterval(()=>{f()},vA);return()=>window.clearInterval(S)},[f]),O(()=>{m()},[m]);const w=L(async()=>{if(!window.confirm("Reboot the device now? Water metering will be offline for about 20-60 seconds."))return;p(null),_(!0);const F=await Ni();_(!1),F.ok?y.start():p(F.message)},[y.start]),M=h&&!n?a("p",{class:"muted",children:"Checking device health…"}):n?n.ok?a(k,{kind:n.data.healty?"success":"error",message:n.data.healty?"Healthcheck is OK.":"Healthcheck reports failure."}):a(k,{kind:"error",message:n.message}):null,T=o?o.ok?a(k,{kind:o.data.ready?"success":"info",message:o.data.ready?"All registered services are ready.":`Not ready: ${o.data.message}`}):o.status===500?a(k,{kind:"info",message:`Not ready: ${o.message}`}):a(k,{kind:"error",message:o.message}):null;return a("div",{class:"stack",children:[a(R,{title:"Device",children:[i?s?a(U,{children:[a(k,{kind:"error",message:s}),a("div",{class:"form-actions",children:a(D,{onClick:()=>{f()},children:"Retry"})})]}):e?a("dl",{class:"kv",children:[a("dt",{children:"Wi-Fi"}),a("dd",{children:a("span",{class:e.wifiStatus==="connected"?"badge badge-on":"badge badge-off",children:e.wifiStatus})}),a("dt",{children:"Free heap"}),a("dd",{children:wA(e.freeHeap)}),a("dt",{children:"Uptime"}),a("dd",{children:yA(e.uptime)}),a("dt",{children:"Last reset reason"}),a("dd",{children:e.lastResetReason})]}):null:a("p",{class:"muted",children:"Loading status…"}),a("p",{class:"muted mt",children:"Status refreshes automatically every 10 seconds."})]}),a(R,{title:"Health",children:[M,T,a("div",{class:"form-actions",children:a(D,{onClick:()=>{m()},disabled:h,children:h?"Checking…":"Refresh health"})})]}),a(R,{title:"Maintenance",children:[a("p",{class:"muted",children:"A reboot briefly interrupts water metering and MQTT reporting. Configuration changes saved on the other tabs only take effect after a reboot."}),d?a(k,{kind:"error",message:d,onClose:()=>p(null)}):null,a("div",{class:"form-actions",children:a(Li,{onClick:()=>{w()},disabled:b||y.phase!=="idle",children:"Reboot device"})})]}),a(_A,{flow:y})]})}const xA=[{id:"status",label:"Status"},{id:"meters",label:"Meters"},{id:"controls",label:"Controls"},{id:"settings",label:"Settings"},{id:"connections",label:"MQTT"},{id:"network",label:"Network"},{id:"backup",label:"Backup"}];function kA(e){switch(e){case"status":return a($A,{});case"meters":return a(nA,{});case"controls":return a(sA,{});case"settings":return a(mA,{});case"connections":return a(Bi,{});case"network":return a(aA,{});case"backup":return a(fi,{})}}function SA(){const[e,t]=v("status");return a(U,{children:[a("header",{class:"app-header",children:[a("div",{class:"brand",children:[a("svg",{class:"brand-mark",viewBox:"0 0 24 24",width:"20",height:"20","aria-hidden":"true",focusable:"false",children:[a("path",{fill:"currentColor",d:"M12 23c4.4 0 7.5-2.7 7.5-6.7 0-2.3-1-4.3-2.3-6.1-.8 1.6-1.8 2.6-2.9 3.3.4-1.4.2-3.1-.7-5C12.7 6.1 11.3 4.3 10.4 2c-.3 2.3-1.4 4-2.7 5.5C6.4 9.1 4.5 11 4.5 15c0 4 3.1 8 7.5 8z"}),a("path",{fill:"currentColor",opacity:".45",d:"M12 21.2c-1.6 0-2.8-1.1-2.8-2.8 0-1.3.7-2.1 1.5-3 .3.7.8 1.1 1.4 1.4-.2-1.2.1-2.4 1-3.5.9 1.2 1.4 2.6 1.4 4 0 2.3-1.4 3.9-2.5 3.9z"})]}),a("h1",{children:"Neptunus"})]}),a("span",{class:"hint",children:"water metering & rainwater controller"})]}),a(Hr,{tabs:xA,active:e,onSelect:t}),a("main",{class:"tab-content",id:`panel-${e}`,role:"tabpanel","aria-labelledby":`tab-${e}`,children:kA(e)})]})}function EA(e){if(e&&typeof e=="object"&&"error"in e){let t=e.error;if(typeof t=="string"&&t.length>0)return t}}function mr(e={}){let t=e.baseUrl??"",s=e.headers??{};async function r(i,A){let n;try{n=await fetch(`${t}${i}`,{...A,headers:{Accept:"application/json",...A?.body===void 0?{}:{"Content-Type":"application/json"},...s}})}catch(h){return A?.signal?.aborted===!0||typeof h=="object"&&h&&h.name==="AbortError"?{ok:!1,message:"Request aborted."}:{ok:!1,message:"Network request failed. Check the device connection and try again."}}let l=await n.text().catch(()=>""),o,c=!1;if(l.length>0)try{o=JSON.parse(l),c=!0}catch{c=!1}if(!n.ok){let h=EA(o);return{ok:!1,status:n.status,message:h??`Request failed with HTTP ${n.status}.`}}return c?{ok:!0,data:o}:{ok:!1,status:n.status,message:`Unexpected response from server (HTTP ${n.status}).`}}return{getSettings(i){return r("/api/network/settings",{signal:i})},saveSettings(i,A){return r("/api/network/settings",{method:"POST",body:JSON.stringify(i),signal:A})},getStatus(i){return r("/api/network/status",{signal:i})},wifiList(i){return r("/api/wifi/list",{signal:i})}}}var Vt=globalThis,Le=Vt.ShadowRoot&&(Vt.ShadyCSS===void 0||Vt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Re=Symbol(),ks=new WeakMap,gr=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==Re)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Le&&e===void 0){let s=t!==void 0&&t.length===1;s&&(e=ks.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&ks.set(t,e))}return e}toString(){return this.cssText}},PA=e=>new gr(typeof e=="string"?e:e+"",void 0,Re),We=(e,...t)=>new gr(e.length===1?e[0]:t.reduce((s,r,i)=>s+(A=>{if(A._$cssResult$===!0)return A.cssText;if(typeof A=="number")return A;throw Error("Value passed to 'css' function must be a 'css' function result: "+A+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[i+1],e[0]),e,Re),MA=(e,t)=>{if(Le)e.adoptedStyleSheets=t.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(let s of t){let r=document.createElement("style"),i=Vt.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=s.cssText,e.appendChild(r)}},Ss=Le?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let s="";for(let r of t.cssRules)s+=r.cssText;return PA(s)})(e):e,{is:TA,defineProperty:CA,getOwnPropertyDescriptor:IA,getOwnPropertyNames:NA,getOwnPropertySymbols:DA,getPrototypeOf:LA}=Object,ne=globalThis,Es=ne.trustedTypes,RA=Es?Es.emptyScript:"",WA=ne.reactiveElementPolyfillSupport,Tt=(e,t)=>e,ye={toAttribute(e,t){switch(t){case Boolean:e=e?RA:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=e!==null;break;case Number:s=e===null?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch{s=null}}return s}},br=(e,t)=>!TA(e,t),Ps={attribute:!0,type:String,converter:ye,reflect:!1,useDefault:!1,hasChanged:br};Symbol.metadata??=Symbol("metadata"),ne.litPropertyMetadata??=new WeakMap;var ut=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ps){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let s=Symbol(),r=this.getPropertyDescriptor(e,s,t);r!==void 0&&CA(this.prototype,e,r)}}static getPropertyDescriptor(e,t,s){let{get:r,set:i}=IA(this.prototype,e)??{get(){return this[t]},set(A){this[t]=A}};return{get:r,set(A){let n=r?.call(this);i?.call(this,A),this.requestUpdate(e,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ps}static _$Ei(){if(this.hasOwnProperty(Tt("elementProperties")))return;let e=LA(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Tt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Tt("properties"))){let t=this.properties,s=[...NA(t),...DA(t)];for(let r of s)this.createProperty(r,t[r])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[s,r]of t)this.elementProperties.set(s,r)}this._$Eh=new Map;for(let[t,s]of this.elementProperties){let r=this._$Eu(t,s);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let s=new Set(e.flat(1/0).reverse());for(let r of s)t.unshift(Ss(r))}else e!==void 0&&t.push(Ss(e));return t}static _$Eu(e,t){let s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return MA(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){let s=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,s);if(r!==void 0&&s.reflect===!0){let i=(s.converter?.toAttribute===void 0?ye:s.converter).toAttribute(t,s.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let s=this.constructor,r=s._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let i=s.getPropertyOptions(r),A=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute===void 0?ye:i.converter;this._$Em=r;let n=A.fromAttribute(t,i.type);this[r]=n??this._$Ej?.get(r)??n,this._$Em=null}}requestUpdate(e,t,s,r=!1,i){if(e!==void 0){let A=this.constructor;if(r===!1&&(i=this[e]),s??=A.getPropertyOptions(e),!((s.hasChanged??br)(i,t)||s.useDefault&&s.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(A._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:r,wrapped:i},A){s&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,A??t??this[e]),i!==!0||A!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[r,i]of this._$Ep)this[r]=i;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[r,i]of s){let{wrapped:A}=i,n=this[r];A!==!0||this._$AL.has(r)||n===void 0||this.C(r,void 0,i,n)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(t)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};ut.elementStyles=[],ut.shadowRootOptions={mode:"open"},ut[Tt("elementProperties")]=new Map,ut[Tt("finalized")]=new Map,WA?.({ReactiveElement:ut}),(ne.reactiveElementVersions??=[]).push("2.1.2");var Ue=globalThis,Ms=e=>e,Xt=Ue.trustedTypes,Ts=Xt?Xt.createPolicy("lit-html",{createHTML:e=>e}):void 0,_r="$lit$",X=`lit$${Math.random().toFixed(9).slice(2)}$`,vr="?"+X,UA=`<${vr}>`,ct=document,Dt=()=>ct.createComment(""),Lt=e=>e===null||typeof e!="object"&&typeof e!="function",He=Array.isArray,HA=e=>He(e)||typeof e?.[Symbol.iterator]=="function",pe=`[ 	
\f\r]`,xt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Cs=/-->/g,Is=/>/g,tt=RegExp(`>|${pe}(?:([^\\s"'>=/]+)(${pe}*=${pe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ns=/'/g,Ds=/"/g,yr=/^(?:script|style|textarea|title)$/i,$=(e=>(t,...s)=>({_$litType$:e,strings:t,values:s}))(1),bt=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),Ls=new WeakMap,st=ct.createTreeWalker(ct,129);function wr(e,t){if(!He(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ts===void 0?t:Ts.createHTML(t)}var FA=(e,t)=>{let s=e.length-1,r=[],i,A=t===2?"<svg>":t===3?"<math>":"",n=xt;for(let l=0;l<s;l++){let o=e[l],c,h,u=-1,d=0;for(;d<o.length&&(n.lastIndex=d,h=n.exec(o),h!==null);)d=n.lastIndex,n===xt?h[1]==="!--"?n=Cs:h[1]===void 0?h[2]===void 0?h[3]!==void 0&&(n=tt):(yr.test(h[2])&&(i=RegExp("</"+h[2],"g")),n=tt):n=Is:n===tt?h[0]===">"?(n=i??xt,u=-1):h[1]===void 0?u=-2:(u=n.lastIndex-h[2].length,c=h[1],n=h[3]===void 0?tt:h[3]==='"'?Ds:Ns):n===Ds||n===Ns?n=tt:n===Cs||n===Is?n=xt:(n=tt,i=void 0);let p=n===tt&&e[l+1].startsWith("/>")?" ":"";A+=n===xt?o+UA:u>=0?(r.push(c),o.slice(0,u)+_r+o.slice(u)+X+p):o+X+(u===-2?l:p)}return[wr(e,A+(e[s]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]},we=class $r{constructor({strings:t,_$litType$:s},r){let i;this.parts=[];let A=0,n=0,l=t.length-1,o=this.parts,[c,h]=FA(t,s);if(this.el=$r.createElement(c,r),st.currentNode=this.el.content,s===2||s===3){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(i=st.nextNode())!==null&&o.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(let u of i.getAttributeNames())if(u.endsWith(_r)){let d=h[n++],p=i.getAttribute(u).split(X),b=/([.?@])?(.*)/.exec(d);o.push({type:1,index:A,name:b[2],strings:p,ctor:b[1]==="."?OA:b[1]==="?"?zA:b[1]==="@"?qA:ae}),i.removeAttribute(u)}else u.startsWith(X)&&(o.push({type:6,index:A}),i.removeAttribute(u));if(yr.test(i.tagName)){let u=i.textContent.split(X),d=u.length-1;if(d>0){i.textContent=Xt?Xt.emptyScript:"";for(let p=0;p<d;p++)i.append(u[p],Dt()),st.nextNode(),o.push({type:2,index:++A});i.append(u[d],Dt())}}}else if(i.nodeType===8)if(i.data===vr)o.push({type:2,index:A});else{let u=-1;for(;(u=i.data.indexOf(X,u+1))!==-1;)o.push({type:7,index:A}),u+=X.length-1}A++}}static createElement(t,s){let r=ct.createElement("template");return r.innerHTML=t,r}};function _t(e,t,s=e,r){if(t===bt)return t;let i=r===void 0?s._$Cl:s._$Co?.[r],A=Lt(t)?void 0:t._$litDirective$;return i?.constructor!==A&&(i?._$AO?.(!1),A===void 0?i=void 0:(i=new A(e),i._$AT(e,s,r)),r===void 0?s._$Cl=i:(s._$Co??=[])[r]=i),i!==void 0&&(t=_t(e,i._$AS(e,t.values),i,r)),t}var BA=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:s}=this._$AD,r=(e?.creationScope??ct).importNode(t,!0);st.currentNode=r;let i=st.nextNode(),A=0,n=0,l=s[0];for(;l!==void 0;){if(A===l.index){let o;l.type===2?o=new Fe(i,i.nextSibling,this,e):l.type===1?o=new l.ctor(i,l.name,l.strings,this,e):l.type===6&&(o=new jA(i,this,e)),this._$AV.push(o),l=s[++n]}A!==l?.index&&(i=st.nextNode(),A++)}return st.currentNode=ct,r}p(e){let t=0;for(let s of this._$AV)s!==void 0&&(s.strings===void 0?s._$AI(e[t]):(s._$AI(e,s,t),t+=s.strings.length-2)),t++}},Fe=class xr{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,s,r,i){this.type=2,this._$AH=x,this._$AN=void 0,this._$AA=t,this._$AB=s,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,s=this._$AM;return s!==void 0&&t?.nodeType===11&&(t=s.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,s=this){t=_t(this,t,s),Lt(t)?t===x||t==null||t===""?(this._$AH!==x&&this._$AR(),this._$AH=x):t!==this._$AH&&t!==bt&&this._(t):t._$litType$===void 0?t.nodeType===void 0?HA(t)?this.k(t):this._(t):this.T(t):this.$(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==x&&Lt(this._$AH)?this._$AA.nextSibling.data=t:this.T(ct.createTextNode(t)),this._$AH=t}$(t){let{values:s,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=we.createElement(wr(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(s);else{let A=new BA(i,this),n=A.u(this.options);A.p(s),this.T(n),this._$AH=A}}_$AC(t){let s=Ls.get(t.strings);return s===void 0&&Ls.set(t.strings,s=new we(t)),s}k(t){He(this._$AH)||(this._$AH=[],this._$AR());let s=this._$AH,r,i=0;for(let A of t)i===s.length?s.push(r=new xr(this.O(Dt()),this.O(Dt()),this,this.options)):r=s[i],r._$AI(A),i++;i<s.length&&(this._$AR(r&&r._$AB.nextSibling,i),s.length=i)}_$AR(t=this._$AA.nextSibling,s){for(this._$AP?.(!1,!0,s);t!==this._$AB;){let r=Ms(t).nextSibling;Ms(t).remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},ae=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,r,i){this.type=1,this._$AH=x,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=x}_$AI(e,t=this,s,r){let i=this.strings,A=!1;if(i===void 0)e=_t(this,e,t,0),A=!Lt(e)||e!==this._$AH&&e!==bt,A&&(this._$AH=e);else{let n=e,l,o;for(e=i[0],l=0;l<i.length-1;l++)o=_t(this,n[s+l],t,l),o===bt&&(o=this._$AH[l]),A||=!Lt(o)||o!==this._$AH[l],o===x?e=x:e!==x&&(e+=(o??"")+i[l+1]),this._$AH[l]=o}A&&!r&&this.j(e)}j(e){e===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},OA=class extends ae{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===x?void 0:e}},zA=class extends ae{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==x)}},qA=class extends ae{constructor(e,t,s,r,i){super(e,t,s,r,i),this.type=5}_$AI(e,t=this){if((e=_t(this,e,t,0)??x)===bt)return;let s=this._$AH,r=e===x&&s!==x||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,i=e!==x&&(s===x||r);r&&this.element.removeEventListener(this.name,this,s),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},jA=class{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){_t(this,e)}},VA=Ue.litHtmlPolyfillSupport;VA?.(we,Fe),(Ue.litHtmlVersions??=[]).push("3.3.3");var YA=(e,t,s)=>{let r=s?.renderBefore??t,i=r._$litPart$;if(i===void 0){let A=s?.renderBefore??null;r._$litPart$=i=new Fe(t.insertBefore(Dt(),A),A,void 0,s??{})}return i._$AI(e),i},Be=globalThis,rt=class extends ut{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=YA(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return bt}};rt._$litElement$=!0,rt.finalized=!0,Be.litElementHydrateSupport?.({LitElement:rt});var ZA=Be.litElementPolyfillSupport;ZA?.({LitElement:rt}),(Be.litElementVersions??=[]).push("4.2.2");var GA={ethernet:"Ethernet",wifi:"Wi-Fi",wifi_ap:"Wi-Fi AP"};function QA(e){return e===void 0||Number.isNaN(e)?"Unknown":e>=-55?"Excellent":e>=-67?"Good":e>=-75?"Fair":"Weak"}function JA(e){return e===1?"Full":e===0?"Half":`Unknown (${e})`}function XA(e){let t=s=>String(s).padStart(2,"0");return`${t(e.getHours())}:${t(e.getMinutes())}:${t(e.getSeconds())}`}var At,KA=(At=class extends rt{constructor(...t){super(...t),this.baseUrl="",this.pollIntervalMs=1e4,this.errorMessage="",this.loading=!1,this.refreshSeq=0,this.handleRetry=()=>{this.refresh()}}connectedCallback(){super.connectedCallback(),this.refresh(),this.startPolling()}disconnectedCallback(){super.disconnectedCallback(),this.stopPolling()}updated(t){t.has("pollIntervalMs")&&this.startPolling();let s=t.get("baseUrl");t.has("baseUrl")&&s!==void 0&&s!==this.baseUrl&&(this.client=void 0,this.refresh())}render(){let t=this.status;return $`
      <div class="card">
        <header class="head">
          ${t?$`<span class="badge badge-${t.mode}">${GA[t.mode]}</span>`:$`<span class="badge badge-unknown">Unknown</span>`}
          ${t?$`<span class="state ${t.connected?"state-up":"state-down"}">
                ${t.connected?"Connected":"Disconnected"}
              </span>`:x}
          ${this.loading?$`<span class="muted loading">Refreshing…</span>`:x}
        </header>

        ${t?.fallbackAP?$`<div class="banner banner-warn" role="alert">
              Fallback AP active — the device could not reach the configured network.
            </div>`:x}
        ${this.errorMessage?$`<div class="banner banner-error" role="alert">
              <span>${this.errorMessage}</span>
              <button type="button" @click=${this.handleRetry}>Retry</button>
            </div>`:x}
        ${t?this.renderSections(t):$`<p class="muted">Loading network status…</p>`}

        <footer class="muted foot">
          ${this.lastUpdated?$`Updated ${XA(this.lastUpdated)}`:$`Waiting for data…`}
        </footer>
      </div>
    `}renderSections(t){switch(t.mode){case"wifi":return this.renderWifi(t);case"wifi_ap":return this.renderAp(t);case"ethernet":return this.renderEthernet(t)}}renderWifi(t){return $`
      <section>
        <h2>Wi-Fi</h2>
        <dl class="rows">
          ${this.row("SSID",t.ssid)}
          ${this.row("Signal",t.rssi===void 0?void 0:`${t.rssi} dBm (${QA(t.rssi)})`)}
          ${this.row("IP address",t.ip)} ${this.row("MAC address",t.mac)}
        </dl>
      </section>
    `}renderAp(t){let s=t.ap;return $`
      <section>
        <h2>Access point</h2>
        <dl class="rows">
          ${this.row("SSID",s?.ssid)} ${this.row("IP address",s?.ip)}
          ${this.row("Stations",s?.stations)}
        </dl>
      </section>
    `}renderEthernet(t){let s=t.eth;return $`
      <section>
        <h2>Ethernet</h2>
        <dl class="rows">
          ${this.row("IP address",s?.ip)} ${this.row("MAC address",s?.mac)}
          ${this.row("Link",s===void 0?void 0:s.linkUp?"Up":"Down")}
          ${this.row("Speed",s===void 0?void 0:`${s.speed} Mbps`)}
          ${this.row("Duplex",s===void 0?void 0:JA(s.duplex))}
        </dl>
      </section>
    `}row(t,s){return s===void 0||s===""?x:$`<dt>${t}</dt>
          <dd>${s}</dd>`}ensureClient(){return(!this.client||this.clientBaseUrl!==this.baseUrl)&&(this.client=mr({baseUrl:this.baseUrl}),this.clientBaseUrl=this.baseUrl),this.client}async refresh(){let t=++this.refreshSeq;this.loading=!0;let s=await this.ensureClient().getStatus();if(t===this.refreshSeq){if(this.loading=!1,s.ok){this.status=s.data,this.errorMessage="",this.lastUpdated=new Date;return}this.errorMessage=s.message,this.dispatchEvent(new CustomEvent("edn-error",{detail:{message:s.message},bubbles:!0,composed:!0}))}}startPolling(){this.stopPolling();let t=Number(this.pollIntervalMs);!Number.isFinite(t)||t<=0||(this.timerId=setInterval(()=>{typeof document<"u"&&document.hidden||this.refresh()},t))}stopPolling(){this.timerId!==void 0&&(clearInterval(this.timerId),this.timerId=void 0)}},At.properties={baseUrl:{type:String,attribute:"base-url"},pollIntervalMs:{type:Number,attribute:"poll-interval-ms"},status:{state:!0},errorMessage:{state:!0},lastUpdated:{state:!0},loading:{state:!0}},At.styles=We`
    :host {
      display: block;
      font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
      color: #1f2430;
      --_accent: var(--edn-accent, #2563eb);
      --_danger: var(--edn-danger, #dc2626);
      --_muted: var(--edn-muted, #6b7280);
      --_border: #e2e5ea;
      --_surface: #ffffff;
    }

    .card {
      background: var(--_surface);
      border: 1px solid var(--_border);
      border-radius: 10px;
      padding: 1rem 1.25rem;
      max-width: 28rem;
      box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
    }

    .head {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      flex-wrap: wrap;
    }

    .badge {
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.03em;
      padding: 0.15rem 0.5rem;
      border-radius: 999px;
      background: #eef2ff;
      color: var(--_accent);
    }

    .badge-ethernet {
      background: #e0f2fe;
      color: #0369a1;
    }

    .badge-wifi_ap {
      background: #fef3c7;
      color: #b45309;
    }

    .badge-unknown {
      background: #f3f4f6;
      color: var(--_muted);
    }

    .state {
      font-size: 0.85rem;
      font-weight: 600;
    }

    .state-up {
      color: #15803d;
    }

    .state-down {
      color: var(--_muted);
    }

    .loading {
      font-size: 0.8rem;
      margin-left: auto;
    }

    .banner {
      margin-top: 0.75rem;
      padding: 0.5rem 0.75rem;
      border-radius: 8px;
      font-size: 0.85rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      justify-content: space-between;
    }

    .banner-warn {
      background: #fffbeb;
      border: 1px solid #fde68a;
      color: #92400e;
    }

    .banner-error {
      background: #fef2f2;
      border: 1px solid #fecaca;
      color: var(--_danger);
    }

    section {
      margin-top: 1rem;
    }

    h2 {
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      color: var(--_muted);
      margin: 0 0 0.5rem;
    }

    .rows {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 0.35rem 0.75rem;
      margin: 0;
    }

    dt {
      color: var(--_muted);
      font-size: 0.85rem;
    }

    dd {
      margin: 0;
      font-size: 0.9rem;
      word-break: break-word;
    }

    .muted {
      color: var(--_muted);
    }

    .foot {
      margin-top: 1rem;
      font-size: 0.75rem;
    }

    button {
      font: inherit;
      font-size: 0.8rem;
      padding: 0.25rem 0.6rem;
      border-radius: 6px;
      border: 1px solid currentColor;
      background: transparent;
      color: var(--_accent);
      cursor: pointer;
    }

    button:hover {
      background: rgba(37, 99, 235, 0.08);
    }
  `,At);typeof customElements<"u"&&!customElements.get("edn-network-status")&&customElements.define("edn-network-status",KA);var Ht=32,kt=64,fe=8,tn=5e3,en=new TextEncoder;function Ft(e){return en.encode(e).length}function Rs(e){return e.isAPMode?"ap":"station"}var nt,sn=(nt=class extends rt{constructor(...t){super(...t),this.baseUrl="",this.settings=null,this.loading=!1,this.submitting=!1,this.errorMessage="",this.successMessage="",this.draftMode="station",this.draftWifiSSID="",this.draftWifiPassword="",this.draftWifiPasswordDirty=!1,this.draftApSSID="",this.draftApHasPassword=!1,this.draftApPassword="",this.draftApPasswordDirty=!1,this.fieldErrors={},this.scanning=!1,this.scanResults=[],this.scanError="",this.loadToken=0,this.settingsBaseUrl=null,this.handleWifiSSIDInput=s=>{this.draftWifiSSID=s.target.value},this.handleWifiPasswordInput=s=>{this.draftWifiPassword=s.target.value,this.draftWifiPasswordDirty=!0},this.handleApSSIDInput=s=>{this.draftApSSID=s.target.value},this.handleApPasswordInput=s=>{this.draftApPassword=s.target.value,this.draftApPasswordDirty=!0},this.handleApHasPasswordChange=s=>{this.draftApHasPassword=s.target.checked,this.draftApHasPassword||(this.draftApPassword="",this.draftApPasswordDirty=!1,this.fieldErrors={...this.fieldErrors,wifiAPPassword:void 0})},this.handlePickSsid=s=>{this.draftMode!=="station"&&(this.draftMode="station"),this.draftWifiSSID=s,this.fieldErrors={...this.fieldErrors,wifiSSID:void 0}},this.handleSubmit=s=>{s.preventDefault(),this.handleSave()},this.handleRetry=()=>{this.load()}}connectedCallback(){super.connectedCallback(),this.load()}disconnectedCallback(){super.disconnectedCallback(),this.scanController?.abort(),this.scanController=void 0}updated(t){let s=t.get("baseUrl");t.has("baseUrl")&&s!==void 0&&s!==this.baseUrl&&(this.client=void 0,this.scanResults=[],this.scanError="",this.load())}render(){let t=this.settings;return $`
      <div class="card">
        <h1>Network settings</h1>
        ${this.errorMessage?$`<div class="banner banner-error" role="alert">
              <span>${this.errorMessage}</span>
              <button type="button" @click=${this.handleRetry}>Retry</button>
            </div>`:x}
        ${this.successMessage?$`<div class="banner banner-success" role="status">${this.successMessage}</div>`:x}
        ${t?$`${this.renderForm(t)} ${this.renderScan()}`:this.loading?$`<p class="status">Loading settings…</p>`:$`<p class="status">Settings unavailable.</p>`}
      </div>
    `}renderForm(t){return $`
      <form @submit=${this.handleSubmit}>
        <fieldset>
          <legend>Mode</legend>
          <div class="segmented" role="group" aria-label="Network mode">
            <button
              type="button"
              class="seg ${this.draftMode==="station"?"active":""}"
              aria-pressed=${this.draftMode==="station"}
              @click=${()=>this.setMode("station")}
            >
              Station
            </button>
            <button
              type="button"
              class="seg ${this.draftMode==="ap"?"active":""}"
              aria-pressed=${this.draftMode==="ap"}
              @click=${()=>this.setMode("ap")}
            >
              Access Point
            </button>
          </div>
        </fieldset>

        ${this.draftMode==="station"?this.renderStation(t):this.renderAccessPoint(t)}

        <div class="actions">
          <button class="primary" type="submit" ?disabled=${this.submitting||!this.dirty}>
            ${this.submitting?"Saving…":"Save"}
          </button>
          ${this.dirty?$`<span class="muted">Unsaved changes</span>`:x}
        </div>
      </form>
    `}renderStation(t){return $`
      <section class="group">
        <h2>Station</h2>
        <label>
          Wi-Fi name
          <input
            name="wifiSSID"
            type="text"
            autocomplete="off"
            .value=${this.draftWifiSSID}
            @input=${this.handleWifiSSIDInput}
          />
        </label>
        ${this.renderFieldError("wifiSSID")}
        <label>
          Wi-Fi password
          <input
            name="wifiPassword"
            type="password"
            autocomplete="new-password"
            placeholder=${t.hasWifiPassword?"Leave blank to keep saved password":"No password set"}
            .value=${this.draftWifiPassword}
            @input=${this.handleWifiPasswordInput}
          />
        </label>
        ${t.hasWifiPassword?$`<p class="hint">Password saved •••• (leave blank to keep)</p>`:x}
        ${this.renderPasswordClearWarning("wifiPassword")}
        ${this.renderFieldError("wifiPassword")}
      </section>
    `}renderAccessPoint(t){return $`
      <section class="group">
        <h2>Access point</h2>
        <label>
          Access point name
          <input
            name="wifiAPSSID"
            type="text"
            autocomplete="off"
            .value=${this.draftApSSID}
            @input=${this.handleApSSIDInput}
          />
        </label>
        ${this.renderFieldError("wifiAPSSID")}
        <label class="check">
          <input
            type="checkbox"
            .checked=${this.draftApHasPassword}
            @change=${this.handleApHasPasswordChange}
          />
          Require password
        </label>
        ${this.draftApHasPassword?$`
              <label>
                Access point password
                <input
                  name="wifiAPPassword"
                  type="password"
                  autocomplete="new-password"
                  placeholder=${t.hasWifiAPPassword?"Leave blank to keep saved password":"At least 8 characters"}
                  .value=${this.draftApPassword}
                  @input=${this.handleApPasswordInput}
                />
              </label>
              ${t.hasWifiAPPassword?$`<p class="hint">Password saved •••• (leave blank to keep)</p>`:x}
              ${this.renderPasswordClearWarning("wifiAPPassword")}
              ${this.renderFieldError("wifiAPPassword")}
            `:x}
      </section>
    `}renderScan(){return $`
      <section class="group">
        <div class="scan-head">
          <h2>Wi-Fi scan</h2>
          <button type="button" @click=${this.handleScan} ?disabled=${this.scanning}>
            ${this.scanning?"Scanning…":"Scan"}
          </button>
        </div>
        ${this.scanError?$`<div class="banner banner-error" role="alert">${this.scanError}</div>`:x}
        ${this.scanResults.length>0?$`<ul class="networks">
              ${this.scanResults.map(t=>this.renderNetwork(t))}
            </ul>`:x}
      </section>
    `}renderNetwork(t){return $`
      <li>
        <button type="button" class="network" @click=${()=>this.handlePickSsid(t.ssid)}>
          <span class="ssid">${t.ssid}</span>
          <span class="meta">
            ${t.encrypted?$`<span class="lock" title="Encrypted" aria-label="Encrypted">🔒</span>`:x}
            ${t.rssi} dBm · Ch ${t.channel}
          </span>
        </button>
      </li>
    `}renderFieldError(t){let s=this.fieldErrors[t];return s?$`<p class="field-error" role="alert">${s}</p>`:x}renderPasswordClearWarning(t){return(t==="wifiPassword"?this.draftWifiPasswordDirty&&this.draftWifiPassword===""&&this.settings?.hasWifiPassword===!0:this.draftApPasswordDirty&&this.draftApPassword===""&&this.draftApHasPassword&&this.settings?.hasWifiAPPassword===!0)?$`<p class="clear-warning" role="alert">
          Warning: saving now will remove the stored password.
        </p>`:x}get dirty(){let t=this.settings;return t?this.draftMode!==Rs(t)||this.draftWifiSSID!==t.wifiSSID||this.draftApSSID!==t.wifiAPSSID||this.draftApHasPassword!==t.wifiAPHasPassword||this.draftWifiPasswordDirty||this.draftApPasswordDirty:!1}ensureClient(){return(!this.client||this.clientBaseUrl!==this.baseUrl)&&(this.client=mr({baseUrl:this.baseUrl}),this.clientBaseUrl=this.baseUrl),this.client}async load(){let t=++this.loadToken;this.loading=!0;let s=await this.ensureClient().getSettings();if(t!==this.loadToken){this.settingsBaseUrl!==this.baseUrl&&(this.settings=null);return}if(this.loading=!1,s.ok){this.applyServerSettings(s.data),this.errorMessage="";return}this.settingsBaseUrl!==this.baseUrl&&(this.settings=null),this.errorMessage=s.message,this.emitError(s.message)}applyServerSettings(t){this.settings=t,this.settingsBaseUrl=this.baseUrl,this.draftMode=Rs(t),this.draftWifiSSID=t.wifiSSID,this.draftApSSID=t.wifiAPSSID,this.draftApHasPassword=t.wifiAPHasPassword,this.draftWifiPassword="",this.draftWifiPasswordDirty=!1,this.draftApPassword="",this.draftApPasswordDirty=!1,this.fieldErrors={}}validate(){let t=this.settings,s={};if(!t)return s;let r=this.draftMode==="ap";if(Ft(this.draftWifiSSID)>Ht&&(s.wifiSSID=`Wi-Fi name must be ${Ht} characters or fewer.`),Ft(this.draftApSSID)>Ht&&(s.wifiAPSSID=`Access point name must be ${Ht} characters or fewer.`),r?this.draftApSSID.length===0&&(s.wifiAPSSID="Access point name is required in AP mode."):this.draftWifiSSID.length===0&&(s.wifiSSID="Wi-Fi name is required in station mode."),this.draftWifiPasswordDirty&&Ft(this.draftWifiPassword)>kt&&(s.wifiPassword=`Wi-Fi password must be ${kt} characters or fewer.`),this.draftApHasPassword)if(this.draftApPasswordDirty){let i=Ft(this.draftApPassword);(i<fe||i>kt)&&(s.wifiAPPassword=`Access point password must be ${fe}–${kt} characters.`)}else t.hasWifiAPPassword||(s.wifiAPPassword=`Enter an access point password (${fe}–${kt} characters).`);return s}buildPatch(){let t=this.settings,s={};if(!t)return s;let r=this.draftMode==="ap";return r!==t.isAPMode&&(s.isAPMode=r),this.draftWifiSSID!==t.wifiSSID&&(s.wifiSSID=this.draftWifiSSID),this.draftWifiPasswordDirty&&(s.wifiPassword=this.draftWifiPassword),this.draftApSSID!==t.wifiAPSSID&&(s.wifiAPSSID=this.draftApSSID),this.draftApHasPassword!==t.wifiAPHasPassword&&(s.wifiAPHasPassword=this.draftApHasPassword),this.draftApHasPassword&&this.draftApPasswordDirty&&(s.wifiAPPassword=this.draftApPassword),s}async handleSave(){if(this.submitting||!this.settings)return;let t=this.validate();if(this.fieldErrors=t,Object.keys(t).length>0)return;let s=this.buildPatch();if(Object.keys(s).length===0)return;this.submitting=!0,this.errorMessage="",this.successMessage="";let r=await this.ensureClient().saveSettings(s);if(this.submitting=!1,r.ok){this.applyServerSettings(r.data),this.successMessage="Settings saved.",this.dispatchEvent(new CustomEvent("edn-saved",{detail:r.data,bubbles:!0,composed:!0}));return}let i=r.status===void 0?"Could not confirm the save — the device may have applied the changes and reconnected. Check the status widget or retry.":r.message;this.errorMessage=i,this.emitError(i)}async handleScan(){if(this.scanning)return;this.scanning=!0,this.scanError="";let t=new AbortController;this.scanController=t;let s,r=new Promise(A=>{s=setTimeout(()=>{t.abort(),A({ok:!1,message:"Wi-Fi scan timed out after 5 seconds."})},tn)}),i=await Promise.race([this.ensureClient().wifiList(t.signal),r]);if(s!==void 0&&clearTimeout(s),this.scanController===t&&(this.scanController=void 0),this.scanning=!1,i.ok){this.scanResults=[...i.data.networks].sort((A,n)=>n.rssi-A.rssi);return}i.message!=="Request aborted."&&(this.scanError=i.message,this.emitError(i.message))}emitError(t){this.dispatchEvent(new CustomEvent("edn-error",{detail:{message:t},bubbles:!0,composed:!0}))}setMode(t){this.draftMode!==t&&(this.draftMode=t,this.fieldErrors={})}},nt.properties={baseUrl:{type:String,attribute:"base-url"},settings:{state:!0},loading:{state:!0},submitting:{state:!0},errorMessage:{state:!0},successMessage:{state:!0},draftMode:{state:!0},draftWifiSSID:{state:!0},draftWifiPassword:{state:!0},draftWifiPasswordDirty:{state:!0},draftApSSID:{state:!0},draftApHasPassword:{state:!0},draftApPassword:{state:!0},draftApPasswordDirty:{state:!0},fieldErrors:{state:!0},scanning:{state:!0},scanResults:{state:!0},scanError:{state:!0}},nt.styles=We`
    :host {
      display: block;
      font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
      color: #1f2430;
      --_accent: var(--edn-accent, #2563eb);
      --_danger: var(--edn-danger, #dc2626);
      --_muted: var(--edn-muted, #6b7280);
      --_border: #e2e5ea;
      --_surface: #ffffff;
    }

    .card {
      background: var(--_surface);
      border: 1px solid var(--_border);
      border-radius: 10px;
      padding: 1rem 1.25rem;
      max-width: 30rem;
      box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
    }

    h1 {
      font-size: 1rem;
      margin: 0 0 0.75rem;
    }

    h2 {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      color: var(--_muted);
      margin: 0 0 0.5rem;
    }

    .banner {
      margin: 0 0 0.75rem;
      padding: 0.5rem 0.75rem;
      border-radius: 8px;
      font-size: 0.85rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      justify-content: space-between;
    }

    .banner-error {
      background: #fef2f2;
      border: 1px solid #fecaca;
      color: var(--_danger);
    }

    .banner-success {
      background: #f0fdf4;
      border: 1px solid #bbf7d0;
      color: #15803d;
    }

    fieldset {
      border: 0;
      padding: 0;
      margin: 0 0 0.75rem;
    }

    legend {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      color: var(--_muted);
      margin-bottom: 0.35rem;
    }

    .segmented {
      display: inline-flex;
      border: 1px solid var(--_border);
      border-radius: 8px;
      overflow: hidden;
    }

    .seg {
      font: inherit;
      font-size: 0.85rem;
      padding: 0.35rem 0.85rem;
      border: 0;
      background: transparent;
      color: var(--_muted);
      cursor: pointer;
    }

    .seg.active {
      background: var(--_accent);
      color: #ffffff;
    }

    .group {
      border-top: 1px solid var(--_border);
      padding-top: 0.75rem;
      margin-bottom: 0.75rem;
    }

    label {
      display: block;
      font-size: 0.85rem;
      margin-bottom: 0.6rem;
    }

    input[type='text'],
    input[type='password'] {
      display: block;
      width: 100%;
      box-sizing: border-box;
      margin-top: 0.25rem;
      font: inherit;
      font-size: 0.9rem;
      padding: 0.4rem 0.55rem;
      border: 1px solid var(--_border);
      border-radius: 6px;
      background: #fff;
      color: inherit;
    }

    input[type='text']:focus,
    input[type='password']:focus {
      outline: 2px solid color-mix(in srgb, var(--_accent) 45%, transparent);
      outline-offset: 1px;
      border-color: var(--_accent);
    }

    .check {
      display: flex;
      align-items: center;
      gap: 0.45rem;
      font-size: 0.85rem;
    }

    .hint {
      font-size: 0.78rem;
      color: var(--_muted);
      margin: -0.3rem 0 0.5rem;
    }

    .field-error {
      font-size: 0.78rem;
      color: var(--_danger);
      margin: -0.3rem 0 0.6rem;
    }

    .clear-warning {
      font-size: 0.78rem;
      color: var(--_danger);
      margin: -0.3rem 0 0.6rem;
    }

    .actions {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      border-top: 1px solid var(--_border);
      padding-top: 0.75rem;
    }

    button {
      font: inherit;
      font-size: 0.8rem;
      padding: 0.3rem 0.7rem;
      border-radius: 6px;
      border: 1px solid currentColor;
      background: transparent;
      color: var(--_accent);
      cursor: pointer;
    }

    button:hover:not(:disabled) {
      background: rgba(37, 99, 235, 0.08);
    }

    button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .primary {
      background: var(--_accent);
      border-color: var(--_accent);
      color: #ffffff;
    }

    .primary:hover:not(:disabled) {
      background: color-mix(in srgb, var(--_accent) 88%, #000);
    }

    .scan-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;
    }

    .scan-head h2 {
      margin: 0;
    }

    ul.networks {
      list-style: none;
      margin: 0.5rem 0 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
    }

    .network {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;
      width: 100%;
      text-align: left;
      border: 1px solid var(--_border);
      border-radius: 6px;
      padding: 0.35rem 0.55rem;
      color: inherit;
    }

    .network .ssid {
      font-size: 0.85rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .network .meta {
      font-size: 0.75rem;
      color: var(--_muted);
      white-space: nowrap;
    }

    .lock {
      color: var(--_muted);
    }

    .muted {
      color: var(--_muted);
    }

    .status {
      font-size: 0.85rem;
      color: var(--_muted);
    }
  `,nt);typeof customElements<"u"&&!customElements.get("edn-network-settings")&&customElements.define("edn-network-settings",sn);var rn=[{id:"status",label:"Status"},{id:"settings",label:"Network settings"}],at,An=(at=class extends rt{constructor(...t){super(...t),this.baseUrl="",this.pollIntervalMs=1e4,this.activeTab="status"}render(){return $`
      <div class="tabs" role="tablist" aria-label="Network">
        ${rn.map(t=>$`
            <button
              type="button"
              role="tab"
              id="tab-${t.id}"
              aria-controls="panel-${t.id}"
              aria-selected=${this.activeTab===t.id}
              @click=${()=>this.selectTab(t.id)}
            >
              ${t.label}
            </button>
          `)}
      </div>
      <div class="panel" id="panel-${this.activeTab}" role="tabpanel">
        ${this.renderActive()}
      </div>
    `}renderActive(){return this.activeTab==="settings"?$`<edn-network-settings base-url=${this.baseUrl}></edn-network-settings>`:$`
      <edn-network-status
        base-url=${this.baseUrl}
        poll-interval-ms=${this.pollIntervalMs}
      ></edn-network-status>
    `}selectTab(t){this.activeTab!==t&&(this.activeTab=t,this.dispatchEvent(new CustomEvent("edn-tab-change",{detail:{tab:t},bubbles:!0,composed:!0})))}},at.properties={baseUrl:{type:String,attribute:"base-url"},pollIntervalMs:{type:Number,attribute:"poll-interval-ms"},activeTab:{state:!0}},at.styles=We`
    :host {
      display: block;
      font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
      color: #1f2430;
      --_accent: var(--edn-accent, #2563eb);
      --_border: #e2e5ea;
    }

    .tabs {
      display: flex;
      gap: 0.25rem;
      border-bottom: 1px solid var(--_border);
      max-width: 30rem;
    }

    [role='tab'] {
      font: inherit;
      font-size: 0.85rem;
      padding: 0.45rem 0.8rem;
      border: 0;
      border-bottom: 2px solid transparent;
      background: transparent;
      color: var(--edn-muted, #6b7280);
      cursor: pointer;
      margin-bottom: -1px;
    }

    [role='tab'][aria-selected='true'] {
      color: var(--_accent);
      border-bottom-color: var(--_accent);
      font-weight: 600;
    }

    .panel {
      margin-top: 1rem;
    }
  `,at);typeof customElements<"u"&&!customElements.get("edn-network-page")&&customElements.define("edn-network-page",An);const Ws=document.getElementById("app");Ws&&Dr(a(SA,{}),Ws);
