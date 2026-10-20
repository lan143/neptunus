(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const A of i)if(A.type==="childList")for(const n of A.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(i){const A={};return i.integrity&&(A.integrity=i.integrity),i.referrerPolicy&&(A.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?A.credentials="include":i.crossOrigin==="anonymous"?A.credentials="omit":A.credentials="same-origin",A}function r(i){if(i.ep)return;i.ep=!0;const A=s(i);fetch(i.href,A)}})();var Ke,E,Hs,Q,jt,Bs,Fs,lt,Fe,Se,Os,xt,gt,bt,Ye={},Ze=[],Pr=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,et=Array.isArray;function Y(t,e){for(var s in e)t[s]=e[s];return t}function kt(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function Mr(t,e,s){var r,i,A,n={};for(A in e)A=="key"?r=e[A]:A=="ref"?i=e[A]:n[A]=e[A];if(arguments.length>2&&(n.children=arguments.length>3?Ke.call(arguments,2):s),typeof t=="function"&&t.defaultProps!=null)for(A in t.defaultProps)n[A]===void 0&&(n[A]=t.defaultProps[A]);return Oe(t,n,r,i,null)}function Oe(t,e,s,r,i){var A={type:t,props:e,key:s,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++Hs,__i:-1,__u:0};return i==null&&E.vnode!=null&&E.vnode(A),A}function U(t){return t.children}function ze(t,e){this.props=t,this.context=e}function oe(t,e){if(e==null)return t.__?oe(t.__,t.__i+1):null;for(var s;e<t.__k.length;e++)if((s=t.__k[e])!=null&&s.__e!=null)return s.__e;return typeof t.type=="function"?oe(t):null}function Tr(t){if(t.__P&&t.__d){var e=t.__v,s=e.__e,r=[],i=[],A=Y({},e);A.__v=e.__v+1,E.vnode&&E.vnode(A),St(t.__P,A,e,t.__n,t.__P.namespaceURI,32&e.__u?[s]:null,r,s??oe(e),!!(32&e.__u),i),A.__v=e.__v,A.__.__k[A.__i]=A,Ys(r,A,i),e.__e=e.__=null,A.__e!=s&&zs(A)}}function zs(t){if((t=t.__)!=null&&t.__c!=null)return t.__e=t.__c.base=null,t.__k.some(function(e){if(e!=null&&e.__e!=null)return t.__e=t.__c.base=e.__e}),zs(t)}function Vt(t){(!t.__d&&(t.__d=!0)&&Q.push(t)&&!Ge.__r++||jt!=E.debounceRendering)&&((jt=E.debounceRendering)||Bs)(Ge)}function Ge(){try{for(var t,e=1;Q.length;)Q.length>e&&Q.sort(Fs),t=Q.shift(),e=Q.length,Tr(t)}finally{Q.length=Ge.__r=0}}function qs(t,e,s,r,i,A,n,l,o,c,h){var p,d,f,b,y,w,u=r&&r.__k||Ze,m=e.length;for(o=Cr(s,e,u,o,m),p=0;p<m;p++)(f=s.__k[p])!=null&&(d=f.__i!=-1&&u[f.__i]||Ye,f.__i=p,w=St(t,f,d,i,A,n,l,o,c,h),b=f.__e,f.ref&&d.ref!=f.ref&&(d.ref&&Et(d.ref,null,f),h.push(f.ref,f.__c||b,f)),y==null&&b!=null&&(y=b),4&f.__u?(o=js(f,o,t),d.__e&&(d.__e=null)):typeof f.type=="function"&&w!==void 0?o=w:b&&(o=b.nextSibling),f.__u&=-7);return s.__e=y,o}function Cr(t,e,s,r,i){var A,n,l,o,c,h=s.length,p=h,d=0;for(t.__k=new Array(i),A=0;A<i;A++)(n=e[A])!=null&&typeof n!="boolean"&&typeof n!="function"?(typeof n=="string"||typeof n=="number"||typeof n=="bigint"||n.constructor==String?n=t.__k[A]=Oe(null,n,null,null,null):et(n)?n=t.__k[A]=Oe(U,{children:n},null,null,null):n.constructor===void 0&&n.__b>0?n=t.__k[A]=Oe(n.type,n.props,n.key,n.ref?n.ref:null,n.__v):t.__k[A]=n,o=A+d,n.__=t,n.__b=t.__b+1,l=null,(c=n.__i=Nr(n,s,o,p))!=-1&&(p--,(l=s[c])&&(l.__u|=2)),l==null||l.__v==null?(c==-1&&(i>h?d--:i<h&&d++),typeof n.type!="function"&&(n.__u|=4)):c!=o&&(c==o-1?d--:c==o+1?d++:(c>o?d--:d++,n.__u|=4))):t.__k[A]=null;if(p)for(A=0;A<h;A++)(l=s[A])!=null&&(2&l.__u)==0&&(l.__e==r&&(r=oe(l)),Gs(l,l));return r}function js(t,e,s){var r,i;if(typeof t.type=="function"){for(r=t.__k,i=0;r&&i<r.length;i++)r[i]&&(r[i].__=t,e=js(r[i],e,s));return e}t.__e!=e&&(e&&t.type&&!e.parentNode&&(e=oe(t)),e=s.insertBefore(t.__e,e||null));do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function Nr(t,e,s,r){var i,A,n,l=t.key,o=t.type,c=e[s],h=c!=null&&(2&c.__u)==0;if(c===null&&l==null||h&&l==c.key&&o==c.type)return s;if(r>(h?1:0)){for(i=s-1,A=s+1;i>=0||A<e.length;)if((c=e[n=i>=0?i--:A++])!=null&&(2&c.__u)==0&&l==c.key&&o==c.type)return n}return-1}function Yt(t,e,s){e[0]=="-"?t.setProperty(e,s??""):t[e]=s==null?"":typeof s!="number"||Pr.test(e)?s:s+"px"}function Ue(t,e,s,r,i){var A,n;e:if(e=="style")if(typeof s=="string")t.style.cssText=s;else{if(typeof r=="string"&&(t.style.cssText=r=""),r)for(e in r)s&&e in s||Yt(t.style,e,"");if(s)for(e in s)r&&s[e]==r[e]||Yt(t.style,e,s[e])}else if(e[0]=="o"&&e[1]=="n")A=e!=(e=e.replace(Os,"$1")),n=e.toLowerCase(),e=n in t||e=="onFocusOut"||e=="onFocusIn"?n.slice(2):e.slice(2),t.l||(t.l={}),t.l[e+A]=s,s?r?s[Se]=r[Se]:(s[Se]=xt,t.addEventListener(e,A?bt:gt,A)):t.removeEventListener(e,A?bt:gt,A);else{if(i=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in t)try{t[e]=s??"";break e}catch{}typeof s=="function"||(s==null||s===!1&&e[4]!="-"?t.removeAttribute(e):t.setAttribute(e,e=="popover"&&s==1?"":s))}}function Zt(t){return function(e){if(this.l){var s=this.l[e.type+t];if(e[Fe]==null)e[Fe]=xt++;else if(e[Fe]<s[Se])return;return s(E.event?E.event(e):e)}}}function St(t,e,s,r,i,A,n,l,o,c){var h,p,d,f,b,y,w,u,m,v,M,T,S,B,q,H,N=e.type;if(e.constructor!==void 0)return null;128&s.__u&&(o=!!(32&s.__u),A=[l=e.__e=s.__e]),(h=E.__b)&&h(e);e:if(typeof N=="function"){p=n.length;try{if(m=e.props,v=N.prototype&&N.prototype.render,M=(h=N.contextType)&&r[h.__c],T=h?M?M.props.value:h.__:r,s.__c?u=(d=e.__c=s.__c).__=d.__E:(v?e.__c=d=new N(m,T):(e.__c=d=new ze(m,T),d.constructor=N,d.render=Dr),M&&M.sub(d),d.state||(d.state={}),d.__n=r,f=d.__d=!0,d.__h=[],d._sb=[]),v&&d.__s==null&&(d.__s=d.state),v&&N.getDerivedStateFromProps!=null&&(d.__s==d.state&&(d.__s=Y({},d.__s)),Y(d.__s,N.getDerivedStateFromProps(m,d.__s))),b=d.props,y=d.state,d.__v=e,f)v&&N.getDerivedStateFromProps==null&&d.componentWillMount!=null&&d.componentWillMount(),v&&d.componentDidMount!=null&&d.__h.push(d.componentDidMount);else{if(v&&N.getDerivedStateFromProps==null&&m!==b&&d.componentWillReceiveProps!=null&&d.componentWillReceiveProps(m,T),e.__v==s.__v||!d.__e&&d.shouldComponentUpdate!=null&&d.shouldComponentUpdate(m,d.__s,T)===!1){e.__v!=s.__v&&(d.props=m,d.state=d.__s,d.__d=!1),e.__e=s.__e,e.__k=s.__k,e.__k.some(function(G){G&&(G.__=e)}),Ze.push.apply(d.__h,d._sb),d._sb=[],d.__h.length&&n.push(d),l=oe(s);break e}d.componentWillUpdate!=null&&d.componentWillUpdate(m,d.__s,T),v&&d.componentDidUpdate!=null&&d.__h.push(function(){d.componentDidUpdate(b,y,w)})}if(d.context=T,d.props=m,d.__P=t,d.__e=!1,S=E.__r,B=0,v)d.state=d.__s,d.__d=!1,S&&S(e),h=d.render(d.props,d.state,d.context),Ze.push.apply(d.__h,d._sb),d._sb=[];else do d.__d=!1,S&&S(e),h=d.render(d.props,d.state,d.context),d.state=d.__s;while(d.__d&&++B<25);d.state=d.__s,d.getChildContext!=null&&(r=Y(Y({},r),d.getChildContext())),v&&!f&&d.getSnapshotBeforeUpdate!=null&&(w=d.getSnapshotBeforeUpdate(b,y)),q=h!=null&&h.type===U&&h.key==null?Zs(h.props.children):h,l=qs(t,et(q)?q:[q],e,s,r,i,A,n,l,o,c),d.base=e.__e,e.__u&=-161,d.__h.length&&n.push(d),u&&(d.__E=d.__=null)}catch(G){if(n.length=p,e.__v=null,o||A!=null){if(G.then){for(e.__u|=o?160:128;l&&l.nodeType==8&&l.nextSibling;)l=l.nextSibling;A!=null&&(A[A.indexOf(l)]=null),e.__e=l}else if(A!=null)for(H=A.length;H--;)kt(A[H])}else e.__e=s.__e;e.__k==null&&(e.__k=s.__k||[]),G.then||Vs(e),E.__e(G,e,s)}}else A==null&&e.__v==s.__v?(e.__k=s.__k,e.__e=s.__e):l=e.__e=Ir(s.__e,e,s,r,i,A,n,o,c);return(h=E.diffed)&&h(e),128&e.__u?void 0:l}function Vs(t){t&&(t.__c&&(t.__c.__e=!0),t.__k&&t.__k.some(Vs))}function Ys(t,e,s){for(var r=0;r<s.length;r++)Et(s[r],s[++r],s[++r]);E.__c&&E.__c(e,t),t.some(function(i){try{t=i.__h,i.__h=[],t.some(function(A){A.call(i)})}catch(A){E.__e(A,i.__v)}})}function Zs(t){return typeof t!="object"||t==null||t.__b>0?t:et(t)?t.map(Zs):t.constructor!==void 0?null:Y({},t)}function Ir(t,e,s,r,i,A,n,l,o){var c,h,p,d,f,b,y,w=s.props||Ye,u=e.props,m=e.type;if(m=="svg"?i="http://www.w3.org/2000/svg":m=="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),A!=null){for(c=0;c<A.length;c++)if((f=A[c])&&"setAttribute"in f==!!m&&(m?f.localName==m:f.nodeType==3)){t=f,A[c]=null;break}}if(t==null){if(m==null)return document.createTextNode(u);t=document.createElementNS(i,m,u.is&&u),l&&(E.__m&&E.__m(e,A),l=!1),A=null}if(m==null)w===u||l&&t.data==u||(t.data=u);else{if(A=m=="textarea"&&u.defaultValue!=null?null:A&&Ke.call(t.childNodes),!l&&A!=null)for(w={},c=0;c<t.attributes.length;c++)w[(f=t.attributes[c]).name]=f.value;for(c in w)f=w[c],c=="dangerouslySetInnerHTML"?p=f:c=="children"||c in u||c=="value"&&"defaultValue"in u||c=="checked"&&"defaultChecked"in u||Ue(t,c,null,f,i);for(c in u)f=u[c],c=="children"?d=f:c=="dangerouslySetInnerHTML"?h=f:c=="value"?b=f:c=="checked"?y=f:l&&typeof f!="function"||w[c]===f||Ue(t,c,f,w[c],i);if(h)l||p&&(h.__html==p.__html||h.__html==t.innerHTML)||(t.innerHTML=h.__html),e.__k=[];else if(p&&(t.innerHTML=""),qs(e.type=="template"?t.content:t,et(d)?d:[d],e,s,r,m=="foreignObject"?"http://www.w3.org/1999/xhtml":i,A,n,A?A[0]:s.__k&&oe(s,0),l,o),A!=null)for(c=A.length;c--;)kt(A[c]);l&&m!="textarea"||(c="value",m=="progress"&&b==null?t.removeAttribute("value"):b!=null&&(b!==t[c]||m=="progress"&&!b||m=="option"&&b!=w[c])&&Ue(t,c,b,w[c],i),c="checked",y!=null&&y!=t[c]&&Ue(t,c,y,w[c],i))}return t}function Et(t,e,s){try{if(typeof t=="function"){var r=typeof t.__u=="function";r&&t.__u(),r&&e==null||(t.__u=t(e))}else t.current=e}catch(i){E.__e(i,s)}}function Gs(t,e,s){var r,i;if(E.unmount&&E.unmount(t),(r=t.ref)&&(r.current&&r.current!=t.__e||Et(r,null,e)),(r=t.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(A){E.__e(A,e)}r.base=r.__P=r.__n=null}if(r=t.__k)for(i=0;i<r.length;i++)r[i]&&Gs(r[i],e,s||typeof t.type!="function");s||kt(t.__e),t.__c=t.__=t.__e=void 0}function Dr(t,e,s){return this.constructor(t,s)}function Lr(t,e,s){var r,i,A,n;e==document&&(e=document.documentElement),E.__&&E.__(t,e),i=(r=!1)?null:e.__k,A=[],n=[],St(e,t=e.__k=Mr(U,null,[t]),i||Ye,Ye,e.namespaceURI,i?null:e.firstChild?Ke.call(e.childNodes):null,A,i?i.__e:e.firstChild,r,n),Ys(A,t,n),t.props.children=null}Ke=Ze.slice,E={__e:function(t,e,s,r){for(var i,A,n;e=e.__;)if((i=e.__c)&&!i.__)try{if((A=i.constructor)&&A.getDerivedStateFromError!=null&&(i.setState(A.getDerivedStateFromError(t)),n=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(t,r||{}),n=i.__d),n)return i.__E=i}catch(l){t=l}throw t}},Hs=0,ze.prototype.setState=function(t,e){var s;s=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Y({},this.state),typeof t=="function"&&(t=t(Y({},s),this.props)),t&&Y(s,t),t!=null&&this.__v&&(e&&this._sb.push(e),Vt(this))},ze.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),Vt(this))},ze.prototype.render=U,Q=[],Bs=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Fs=function(t,e){return t.__v.__b-e.__v.__b},Ge.__r=0,lt=Math.random().toString(8),Fe="__d"+lt,Se="__a"+lt,Os=/(PointerCapture)$|Capture$/i,xt=0,gt=Zt(!1),bt=Zt(!0);var Rr=0;function a(t,e,s,r,i,A){e||(e={});var n,l,o=e;if("ref"in o)for(l in o={},e)l=="ref"?n=e[l]:o[l]=e[l];var c={type:t,props:o,key:s,ref:n,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Rr,__i:-1,__u:0,__source:i,__self:A};if(typeof t=="function"&&(n=t.defaultProps))for(l in n)o[l]===void 0&&(o[l]=n[l]);return E.vnode&&E.vnode(c),c}var fe,C,dt,Gt,Ce=0,Qs=[],I=E,Qt=I.__b,Jt=I.__r,Xt=I.diffed,Kt=I.__c,es=I.unmount,ts=I.__;function tt(t,e){I.__h&&I.__h(C,t,Ce||e),Ce=0;var s=C.__H||(C.__H={__:[],__h:[]});return t>=s.__.length&&s.__.push({}),s.__[t]}function _(t){return Ce=1,Ur(Xs,t)}function Ur(t,e,s){var r=tt(fe++,2);if(r.t=t,!r.__c&&(r.__=[Xs(void 0,e),function(l){var o=r.__N?r.__N[0]:r.__[0],c=r.t(o,l);o!==c&&(r.__N=[c,r.__[1]],r.__c.setState({}))}],r.__c=C,!C.__f)){var i=function(l,o,c){if(!r.__c.__H)return!0;var h=!1,p=r.__c.props!==l;if(r.__c.__H.__.some(function(f){if(f.__N){h=!0;var b=f.__[0];f.__=f.__N,f.__N=void 0,b!==f.__[0]&&(p=!0)}}),A){var d=A.call(this,l,o,c);return h?d||p:d}return!h||p};C.__f=!0;var A=C.shouldComponentUpdate,n=C.componentWillUpdate;C.componentWillUpdate=function(l,o,c){if(this.__e){var h=A;A=void 0,i(l,o,c),A=h}n&&n.call(this,l,o,c)},C.shouldComponentUpdate=i}return r.__N||r.__}function O(t,e){var s=tt(fe++,3);!I.__s&&Js(s.__H,e)&&(s.__=t,s.u=e,C.__H.__h.push(s))}function pe(t){return Ce=5,st(function(){return{current:t}},[])}function st(t,e){var s=tt(fe++,7);return Js(s.__H,e)&&(s.__=t(),s.__H=e,s.__h=t),s.__}function R(t,e){return Ce=8,st(function(){return t},e)}function Pt(){var t=tt(fe++,11);if(!t.__){for(var e=C.__v;e!==null&&!e.__m&&e.__!==null;)e=e.__;var s=e.__m||(e.__m=[0,0]);t.__="P"+s[0]+"-"+s[1]++}return t.__}function Wr(){for(var t;t=Qs.shift();){var e=t.__H;if(t.__P&&e)try{e.__h.some(qe),e.__h.some(_t),e.__h=[]}catch(s){e.__h=[],I.__e(s,t.__v)}}}I.__b=function(t){C=null,Qt&&Qt(t)},I.__=function(t,e){t&&e.__k&&e.__k.__m&&(t.__m=e.__k.__m),ts&&ts(t,e)},I.__r=function(t){Jt&&Jt(t),fe=0;var e=(C=t.__c).__H;e&&(dt===C?(e.__h=[],C.__h=[],e.__.some(function(s){s.__N&&(s.__=s.__N),s.u=s.__N=void 0})):(e.__h.some(qe),e.__h.some(_t),e.__h=[],fe=0)),dt=C},I.diffed=function(t){Xt&&Xt(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(Qs.push(e)!==1&&Gt===I.requestAnimationFrame||((Gt=I.requestAnimationFrame)||Hr)(Wr)),e.__H.__.some(function(s){s.u&&(s.__H=s.u,s.u=void 0)})),dt=C=null},I.__c=function(t,e){e.some(function(s){try{s.__h.some(qe),s.__h=s.__h.filter(function(r){return!r.__||_t(r)})}catch(r){e.some(function(i){i.__h&&(i.__h=[])}),e=[],I.__e(r,s.__v)}}),Kt&&Kt(t,e)},I.unmount=function(t){es&&es(t);var e,s=t.__c;s&&s.__H&&(s.__H.__.some(function(r){try{qe(r)}catch(i){e=i}}),s.__H=void 0,e&&I.__e(e,s.__v))};var ss=typeof requestAnimationFrame=="function";function Hr(t){var e,s=function(){clearTimeout(r),ss&&cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(s,35);ss&&(e=requestAnimationFrame(s))}function qe(t){var e=C,s=t.__c;typeof s=="function"&&(t.__c=void 0,s()),C=e}function _t(t){var e=C;t.__c=t.__(),C=e}function Js(t,e){return!t||t.length!==e.length||e.some(function(s,r){return s!==t[r]})}function Xs(t,e){return typeof e=="function"?e(t):e}function Br({tabs:t,active:e,onSelect:s}){return a("nav",{class:"tab-bar",role:"tablist","aria-label":"Sections",children:t.map(r=>a("button",{type:"button",role:"tab",id:`tab-${r.id}`,"aria-selected":r.id===e,"aria-controls":`panel-${r.id}`,class:r.id===e?"active":void 0,onClick:()=>s(r.id),children:r.label},r.id))})}var Ks="Network request failed. Check the device connection and try again.",Fr={};function Or(t){if(t&&typeof t=="object"&&"message"in t){let e=t.message;if(typeof e=="string"&&e.length>0)return e}}function zr(t,e){return e?.aborted===!0||typeof t=="object"&&!!t&&t.name==="AbortError"}function er(t,e){return zr(t,e)?{ok:!1,message:"Request aborted."}:{ok:!1,message:Ks}}async function tr(t,e){let s=e;try{let r=await t.text();if(r.length>0)try{s=Or(JSON.parse(r))??s}catch{}}catch{}return{ok:!1,status:t.status,message:s}}async function rs(t,e,s,r,i,A){let n;try{n=await fetch(t,{headers:{Accept:e,...i},signal:A})}catch(o){return er(o,A)}if(!n.ok)return tr(n,n.status===404?r:`Request failed with HTTP ${n.status}.`);let l;try{l=new Uint8Array(await n.arrayBuffer())}catch{return{ok:!1,status:n.status,message:Ks}}return l.byteLength===0?{ok:!1,status:n.status,message:s}:{ok:!0,data:l}}async function is(t,e,s,r,i){if(e.byteLength===0)return{ok:!1,message:s};let A=new ArrayBuffer(e.byteLength);new Uint8Array(A).set(e);let n;try{n=await fetch(t,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/octet-stream",...r},body:A,signal:i})}catch(l){return er(l,i)}return n.ok?(await n.text().catch(()=>""),{ok:!0,data:Fr}):tr(n,`Upload failed with HTTP ${n.status}.`)}function qr(t={}){let e=t.baseUrl??"",s=t.backupPath??"/api/config/backup",r=t.configPath??"/api/config",i=t.headers??{},A=`${e}${s}`,n=`${e}${r}`;return{downloadBackup(l){return rs(A,"application/zip","Device returned an empty archive.","The device has no config files yet.",i,l)},downloadConfig(l){return rs(n,"application/octet-stream","Device returned an empty config file.","The device has no saved config yet (no config file on flash).",i,l)},uploadBackup(l,o){return is(A,l,"Cannot upload an empty archive.",i,o)},uploadConfig(l,o){return is(n,l,"Cannot upload an empty config file.",i,o)}}}var je=globalThis,Mt=je.ShadowRoot&&(je.ShadyCSS===void 0||je.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Tt=Symbol(),As=new WeakMap,sr=class{constructor(e,s,r){if(this._$cssResult$=!0,r!==Tt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=s}get styleSheet(){let e=this.o,s=this.t;if(Mt&&e===void 0){let r=s!==void 0&&s.length===1;r&&(e=As.get(s)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&As.set(s,e))}return e}toString(){return this.cssText}},jr=t=>new sr(typeof t=="string"?t:t+"",void 0,Tt),Vr=(t,...e)=>new sr(t.length===1?t[0]:e.reduce((s,r,i)=>s+(A=>{if(A._$cssResult$===!0)return A.cssText;if(typeof A=="number")return A;throw Error("Value passed to 'css' function must be a 'css' function result: "+A+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[i+1],t[0]),t,Tt),Yr=(t,e)=>{if(Mt)t.adoptedStyleSheets=e.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(let s of e){let r=document.createElement("style"),i=je.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=s.cssText,t.appendChild(r)}},ns=Mt?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let s="";for(let r of e.cssRules)s+=r.cssText;return jr(s)})(t):t,{is:Zr,defineProperty:Gr,getOwnPropertyDescriptor:Qr,getOwnPropertyNames:Jr,getOwnPropertySymbols:Xr,getPrototypeOf:Kr}=Object,rt=globalThis,as=rt.trustedTypes,ei=as?as.emptyScript:"",ti=rt.reactiveElementPolyfillSupport,Ee=(t,e)=>t,vt={toAttribute(t,e){switch(e){case Boolean:t=t?ei:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=t!==null;break;case Number:s=t===null?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch{s=null}}return s}},rr=(t,e)=>!Zr(t,e),os={attribute:!0,type:String,converter:vt,reflect:!1,useDefault:!1,hasChanged:rr};Symbol.metadata??=Symbol("metadata"),rt.litPropertyMetadata??=new WeakMap;var he=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,s=os){if(s.state&&(s.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((s=Object.create(s)).wrapped=!0),this.elementProperties.set(e,s),!s.noAccessor){let r=Symbol(),i=this.getPropertyDescriptor(e,r,s);i!==void 0&&Gr(this.prototype,e,i)}}static getPropertyDescriptor(e,s,r){let{get:i,set:A}=Qr(this.prototype,e)??{get(){return this[s]},set(n){this[s]=n}};return{get:i,set(n){let l=i?.call(this);A?.call(this,n),this.requestUpdate(e,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??os}static _$Ei(){if(this.hasOwnProperty(Ee("elementProperties")))return;let e=Kr(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Ee("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ee("properties"))){let s=this.properties,r=[...Jr(s),...Xr(s)];for(let i of r)this.createProperty(i,s[i])}let e=this[Symbol.metadata];if(e!==null){let s=litPropertyMetadata.get(e);if(s!==void 0)for(let[r,i]of s)this.elementProperties.set(r,i)}this._$Eh=new Map;for(let[s,r]of this.elementProperties){let i=this._$Eu(s,r);i!==void 0&&this._$Eh.set(i,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let s=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let i of r)s.unshift(ns(i))}else e!==void 0&&s.push(ns(e));return s}static _$Eu(e,s){let r=s.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,s=this.constructor.elementProperties;for(let r of s.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Yr(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,s,r){this._$AK(e,r)}_$ET(e,s){let r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(i!==void 0&&r.reflect===!0){let A=(r.converter?.toAttribute===void 0?vt:r.converter).toAttribute(s,r.type);this._$Em=e,A==null?this.removeAttribute(i):this.setAttribute(i,A),this._$Em=null}}_$AK(e,s){let r=this.constructor,i=r._$Eh.get(e);if(i!==void 0&&this._$Em!==i){let A=r.getPropertyOptions(i),n=typeof A.converter=="function"?{fromAttribute:A.converter}:A.converter?.fromAttribute===void 0?vt:A.converter;this._$Em=i;let l=n.fromAttribute(s,A.type);this[i]=l??this._$Ej?.get(i)??l,this._$Em=null}}requestUpdate(e,s,r,i=!1,A){if(e!==void 0){let n=this.constructor;if(i===!1&&(A=this[e]),r??=n.getPropertyOptions(e),!((r.hasChanged??rr)(A,s)||r.useDefault&&r.reflect&&A===this._$Ej?.get(e)&&!this.hasAttribute(n._$Eu(e,r))))return;this.C(e,s,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,s,{useDefault:r,reflect:i,wrapped:A},n){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??s??this[e]),A!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(s=void 0),this._$AL.set(e,s)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,A]of this._$Ep)this[i]=A;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[i,A]of r){let{wrapped:n}=A,l=this[i];n!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,A,l)}}let e=!1,s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(s)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(s)}willUpdate(e){}_$AE(e){this._$EO?.forEach(s=>s.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(s=>this._$ET(s,this[s])),this._$EM()}updated(e){}firstUpdated(e){}};he.elementStyles=[],he.shadowRootOptions={mode:"open"},he[Ee("elementProperties")]=new Map,he[Ee("finalized")]=new Map,ti?.({ReactiveElement:he}),(rt.reactiveElementVersions??=[]).push("2.1.2");var Ct=globalThis,ls=t=>t,Qe=Ct.trustedTypes,ds=Qe?Qe.createPolicy("lit-html",{createHTML:t=>t}):void 0,ir="$lit$",J=`lit$${Math.random().toFixed(9).slice(2)}$`,Ar="?"+J,si=`<${Ar}>`,le=document,Ne=()=>le.createComment(""),Ie=t=>t===null||typeof t!="object"&&typeof t!="function",Nt=Array.isArray,ri=t=>Nt(t)||typeof t?.[Symbol.iterator]=="function",ct=`[ 	
\f\r]`,ye=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,cs=/-->/g,hs=/>/g,K=RegExp(`>|${ct}(?:([^\\s"'>=/]+)(${ct}*=${ct}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),us=/'/g,ps=/"/g,nr=/^(?:script|style|textarea|title)$/i,j=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),me=Symbol.for("lit-noChange"),P=Symbol.for("lit-nothing"),fs=new WeakMap,te=le.createTreeWalker(le,129);function ar(t,e){if(!Nt(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return ds===void 0?e:ds.createHTML(e)}var ii=(t,e)=>{let s=t.length-1,r=[],i,A=e===2?"<svg>":e===3?"<math>":"",n=ye;for(let l=0;l<s;l++){let o=t[l],c,h,p=-1,d=0;for(;d<o.length&&(n.lastIndex=d,h=n.exec(o),h!==null);)d=n.lastIndex,n===ye?h[1]==="!--"?n=cs:h[1]===void 0?h[2]===void 0?h[3]!==void 0&&(n=K):(nr.test(h[2])&&(i=RegExp("</"+h[2],"g")),n=K):n=hs:n===K?h[0]===">"?(n=i??ye,p=-1):h[1]===void 0?p=-2:(p=n.lastIndex-h[2].length,c=h[1],n=h[3]===void 0?K:h[3]==='"'?ps:us):n===ps||n===us?n=K:n===cs||n===hs?n=ye:(n=K,i=void 0);let f=n===K&&t[l+1].startsWith("/>")?" ":"";A+=n===ye?o+si:p>=0?(r.push(c),o.slice(0,p)+ir+o.slice(p)+J+f):o+J+(p===-2?l:f)}return[ar(t,A+(t[s]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]},yt=class or{constructor({strings:e,_$litType$:s},r){let i;this.parts=[];let A=0,n=0,l=e.length-1,o=this.parts,[c,h]=ii(e,s);if(this.el=or.createElement(c,r),te.currentNode=this.el.content,s===2||s===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(i=te.nextNode())!==null&&o.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(let p of i.getAttributeNames())if(p.endsWith(ir)){let d=h[n++],f=i.getAttribute(p).split(J),b=/([.?@])?(.*)/.exec(d);o.push({type:1,index:A,name:b[2],strings:f,ctor:b[1]==="."?ni:b[1]==="?"?ai:b[1]==="@"?oi:it}),i.removeAttribute(p)}else p.startsWith(J)&&(o.push({type:6,index:A}),i.removeAttribute(p));if(nr.test(i.tagName)){let p=i.textContent.split(J),d=p.length-1;if(d>0){i.textContent=Qe?Qe.emptyScript:"";for(let f=0;f<d;f++)i.append(p[f],Ne()),te.nextNode(),o.push({type:2,index:++A});i.append(p[d],Ne())}}}else if(i.nodeType===8)if(i.data===Ar)o.push({type:2,index:A});else{let p=-1;for(;(p=i.data.indexOf(J,p+1))!==-1;)o.push({type:7,index:A}),p+=J.length-1}A++}}static createElement(e,s){let r=le.createElement("template");return r.innerHTML=e,r}};function ge(t,e,s=t,r){if(e===me)return e;let i=r===void 0?s._$Cl:s._$Co?.[r],A=Ie(e)?void 0:e._$litDirective$;return i?.constructor!==A&&(i?._$AO?.(!1),A===void 0?i=void 0:(i=new A(t),i._$AT(t,s,r)),r===void 0?s._$Cl=i:(s._$Co??=[])[r]=i),i!==void 0&&(e=ge(t,i._$AS(t,e.values),i,r)),e}var Ai=class{constructor(e,s){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:s},parts:r}=this._$AD,i=(e?.creationScope??le).importNode(s,!0);te.currentNode=i;let A=te.nextNode(),n=0,l=0,o=r[0];for(;o!==void 0;){if(n===o.index){let c;o.type===2?c=new It(A,A.nextSibling,this,e):o.type===1?c=new o.ctor(A,o.name,o.strings,this,e):o.type===6&&(c=new li(A,this,e)),this._$AV.push(c),o=r[++l]}n!==o?.index&&(A=te.nextNode(),n++)}return te.currentNode=le,i}p(e){let s=0;for(let r of this._$AV)r!==void 0&&(r.strings===void 0?r._$AI(e[s]):(r._$AI(e,r,s),s+=r.strings.length-2)),s++}},It=class lr{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,s,r,i){this.type=2,this._$AH=P,this._$AN=void 0,this._$AA=e,this._$AB=s,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,s=this._$AM;return s!==void 0&&e?.nodeType===11&&(e=s.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,s=this){e=ge(this,e,s),Ie(e)?e===P||e==null||e===""?(this._$AH!==P&&this._$AR(),this._$AH=P):e!==this._$AH&&e!==me&&this._(e):e._$litType$===void 0?e.nodeType===void 0?ri(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==P&&Ie(this._$AH)?this._$AA.nextSibling.data=e:this.T(le.createTextNode(e)),this._$AH=e}$(e){let{values:s,_$litType$:r}=e,i=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=yt.createElement(ar(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(s);else{let A=new Ai(i,this),n=A.u(this.options);A.p(s),this.T(n),this._$AH=A}}_$AC(e){let s=fs.get(e.strings);return s===void 0&&fs.set(e.strings,s=new yt(e)),s}k(e){Nt(this._$AH)||(this._$AH=[],this._$AR());let s=this._$AH,r,i=0;for(let A of e)i===s.length?s.push(r=new lr(this.O(Ne()),this.O(Ne()),this,this.options)):r=s[i],r._$AI(A),i++;i<s.length&&(this._$AR(r&&r._$AB.nextSibling,i),s.length=i)}_$AR(e=this._$AA.nextSibling,s){for(this._$AP?.(!1,!0,s);e!==this._$AB;){let r=ls(e).nextSibling;ls(e).remove(),e=r}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},it=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,s,r,i,A){this.type=1,this._$AH=P,this._$AN=void 0,this.element=e,this.name=s,this._$AM=i,this.options=A,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=P}_$AI(e,s=this,r,i){let A=this.strings,n=!1;if(A===void 0)e=ge(this,e,s,0),n=!Ie(e)||e!==this._$AH&&e!==me,n&&(this._$AH=e);else{let l=e,o,c;for(e=A[0],o=0;o<A.length-1;o++)c=ge(this,l[r+o],s,o),c===me&&(c=this._$AH[o]),n||=!Ie(c)||c!==this._$AH[o],c===P?e=P:e!==P&&(e+=(c??"")+A[o+1]),this._$AH[o]=c}n&&!i&&this.j(e)}j(e){e===P?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},ni=class extends it{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===P?void 0:e}},ai=class extends it{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==P)}},oi=class extends it{constructor(e,s,r,i,A){super(e,s,r,i,A),this.type=5}_$AI(e,s=this){if((e=ge(this,e,s,0)??P)===me)return;let r=this._$AH,i=e===P&&r!==P||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,A=e!==P&&(r===P||i);i&&this.element.removeEventListener(this.name,this,r),A&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},li=class{constructor(e,s,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=s,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){ge(this,e)}},di=Ct.litHtmlPolyfillSupport;di?.(yt,It),(Ct.litHtmlVersions??=[]).push("3.3.3");var ci=(t,e,s)=>{let r=s?.renderBefore??e,i=r._$litPart$;if(i===void 0){let A=s?.renderBefore??null;r._$litPart$=i=new It(e.insertBefore(Ne(),A),A,void 0,s??{})}return i._$AI(t),i},Dt=globalThis,Pe=class extends he{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ci(s,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return me}};Pe._$litElement$=!0,Pe.finalized=!0,Dt.litElementHydrateSupport?.({LitElement:Pe});var hi=Dt.litElementPolyfillSupport;hi?.({LitElement:Pe}),(Dt.litElementVersions??=[]).push("4.2.2");var ms=2e3,ui=12e4,gs="Unsupported file type. Choose a .zip full backup or a .bin config file.";function ht(t){let e=t.toLowerCase();return e.endsWith(".zip")?"archive":e.endsWith(".bin")?"config":null}function pi(t,e){if(typeof URL.createObjectURL!="function")return;let s=new ArrayBuffer(t.byteLength);new Uint8Array(s).set(t);let r=new Blob([s],{type:"application/octet-stream"}),i=URL.createObjectURL(r),A=document.createElement("a");A.href=i,A.download=e,document.body.appendChild(A),A.click(),A.remove(),window.setTimeout(()=>URL.revokeObjectURL(i),0)}var ie,fi=(ie=class extends Pe{constructor(...e){super(...e),this.baseUrl="",this.backupPath="/api/config/backup",this.configPath="/api/config",this.healthPath="/healthcheck/healty",this.deviceName="device",this.archiveFileName="config-backup.zip",this.binFileName="config.bin",this.maxUploadBytes=16384,this.zipNotes="",this.binNotes="",this.zipConfirmText="",this.binConfirmText="",this.downloading=!1,this.downloadNotice=null,this.selectedFile=null,this.fileError=null,this.uploading=!1,this.uploadError=null,this.phase="idle",this._attempts=0}disconnectedCallback(){this.clearPollTimer(),super.disconnectedCallback()}get busy(){return this.uploading||this.phase!=="idle"}get effectiveZipNotes(){return this.zipNotes||`Download a zip of everything stored on the ${this.deviceName}: ${this.binFileName} plus the device's persisted state files. Restoring this archive overwrites the stored config and state files. It contains Wi-Fi and MQTT credentials in plaintext, so keep it somewhere safe.`}get effectiveBinNotes(){return this.binNotes||`Download only ${this.binFileName}, the raw stored config. Restoring it replaces just that file. It contains Wi-Fi and MQTT credentials in plaintext, so keep it somewhere safe.`}get effectiveZipConfirmText(){return this.zipConfirmText||`Uploading this archive REPLACES ${this.binFileName} and the device's stored state files on the ${this.deviceName} AND REBOOTS IT. Validation is all-or-nothing: a rejected archive changes nothing. Continue?`}get effectiveBinConfirmText(){return this.binConfirmText||`Uploading REPLACES ${this.binFileName} on the ${this.deviceName} AND REBOOTS IT IMMEDIATELY. The device will be offline 20-60 seconds. Continue?`}render(){return j`
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
              @change=${e=>this.handleFileChange(e)}
            />
            ${this.fileError?j`<span class="field-error" role="alert">${this.fileError}</span>`:P}
          </label>
          ${this.selectedFile&&!this.fileError?j`<p class="muted">
                Selected: ${this.selectedFile.name} (${this.selectedFile.size}
                bytes)${ht(this.selectedFile.name)==="archive"?" — full backup (all files)":` — ${this.binFileName} only`}
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
    `}renderNotice(e){return e?j`<div
      class="banner banner-${e.kind}"
      role=${e.kind==="error"?"alert":"status"}
    >
      ${e.message}
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
    `}createClient(){return qr({baseUrl:this.baseUrl,backupPath:this.backupPath,configPath:this.configPath})}async handleDownload(e){if(!(this.downloading||this.phase!=="idle")){this.downloading=!0,this.downloadNotice=null;try{let s=this.createClient(),r=e==="archive"?await s.downloadBackup():await s.downloadConfig();if(!r.ok){this.downloadNotice={kind:"error",message:r.message};return}let i=e==="archive"?this.archiveFileName:this.binFileName;pi(r.data,i),this.downloadNotice={kind:"info",message:e==="archive"?`Full backup downloaded as ${i}.`:`Config downloaded as ${i}.`}}finally{this.downloading=!1}}}handleFileChange(e){let s=e.currentTarget,r=s.files&&s.files[0]?s.files[0]:null;this.selectedFile=r,this.uploadError=null,this.fileError=r?r.size===0?"The selected file is empty.":r.size>this.maxUploadBytes?`This does not look like a ${this.deviceName} backup file (max ${this.maxUploadBytes} bytes).`:ht(r.name)?null:gs:null}async handleUpload(){if(!this.selectedFile||this.fileError||this.busy)return;let e=ht(this.selectedFile.name);if(!e)this.uploadError=gs;else if(window.confirm(e==="archive"?this.effectiveZipConfirmText:this.effectiveBinConfirmText)){this.uploading=!0,this.uploadError=null;try{let s;try{s=new Uint8Array(await this.selectedFile.arrayBuffer())}catch{this.uploadError="Could not read the selected backup file.";return}let r=this.createClient(),i=e==="archive"?await r.uploadBackup(s):await r.uploadConfig(s);if(!i.ok){this.uploadError=i.message;return}if(this.clearSelection(),!this.isConnected)return;this.dispatchEvent(new CustomEvent("edc-restore-committed",{detail:{kind:e},bubbles:!0,composed:!0})),this.startReboot()}finally{this.uploading=!1}}}clearSelection(){this.selectedFile=null,this.fileError=null;let e=this.renderRoot.querySelector("#edc-restore-file");e&&(e.value="")}startReboot(){this._attempts=0,this.phase="rebooting",this.schedulePoll()}retryReboot(){this._attempts=0,this.phase="rebooting",this.schedulePoll()}dismissReboot(){this.clearPollTimer(),this.phase="idle"}schedulePoll(){this.clearPollTimer(),this._pollTimer=window.setTimeout(()=>{this._pollTimer=void 0,this.pollHealth()},ms)}clearPollTimer(){this._pollTimer!==void 0&&(window.clearTimeout(this._pollTimer),this._pollTimer=void 0)}async pollHealth(){if(this.phase!=="rebooting")return;let e=!1;try{let s=await fetch(`${this.baseUrl}${this.healthPath}`,{headers:{Accept:"application/json"}});if(s.ok){let r=await s.json();e=!!r&&typeof r=="object"&&r.healty===!0}}catch{e=!1}this.isConnected&&this.phase==="rebooting"&&(e?this.phase="ready":(this._attempts+=1,this._attempts*ms>=ui?this.phase="timeout":this.schedulePoll()))}},ie.properties={baseUrl:{type:String,attribute:"base-url"},backupPath:{type:String,attribute:"backup-path"},configPath:{type:String,attribute:"config-path"},healthPath:{type:String,attribute:"health-path"},deviceName:{type:String,attribute:"device-name"},archiveFileName:{type:String,attribute:"archive-file-name"},binFileName:{type:String,attribute:"bin-file-name"},maxUploadBytes:{type:Number,attribute:"max-upload-bytes"},zipNotes:{type:String,attribute:"zip-notes"},binNotes:{type:String,attribute:"bin-notes"},zipConfirmText:{type:String,attribute:"zip-confirm-text"},binConfirmText:{type:String,attribute:"bin-confirm-text"},downloading:{state:!0},downloadNotice:{state:!0},selectedFile:{state:!0},fileError:{state:!0},uploading:{state:!0},uploadError:{state:!0},phase:{state:!0}},ie.styles=Vr`
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
  `,ie);typeof customElements<"u"&&!customElements.get("edc-config-backup-page")&&customElements.define("edc-config-backup-page",fi);function mi(){const t=pe(null);return O(()=>{const e=document.createElement("edc-config-backup-page");return e.setAttribute("device-name","Neptunus"),e.setAttribute("archive-file-name","neptunus-config.zip"),e.setAttribute("bin-file-name","config.bin"),t.current?.append(e),()=>e.remove()},[]),a("div",{ref:t})}const g={mqtt:{hostMax:63,portMin:1,portMax:65535,loginMax:31,passwordMax:31,haDiscoveryPrefixMax:63,topicMax:63},modbus:{speeds:[1200,2400,4800,9600,19200,38400,57600,115200],addressMin:1,addressMax:254},rainwater:{topicMax:63,maxHeightMinExclusive:0,maxHeightMax:10,fillLevelStartPercent:10,maxFillLevelMax:100},electricity:{topicMax:63},meter:{valueMin:0,valueMax:4294967}},Re="Device returned an empty response. Check the device logs and try again.",At="Device returned an empty response.",dr="Could not reach the device. Check that you are connected to its network and try again.",We={};function cr(){return{ok:!1,message:dr}}function gi(t){try{const e=JSON.parse(t);if(e&&typeof e=="object"&&"message"in e){const s=e.message;if(typeof s=="string"&&s)return s}}catch{}}async function hr(t){let e=`Request failed (HTTP ${t.status}).`;try{const s=await t.text();s&&(e=gi(s)??e)}catch{}return{ok:!1,status:t.status,message:e}}async function Z(t,e){let s;try{s=await fetch(t,{headers:{Accept:"application/json"}})}catch{return cr()}if(!s.ok)return hr(s);let r;try{r=await s.text()}catch{return{ok:!1,status:s.status,message:dr}}if(!r.trim())return{ok:!1,status:s.status,message:e};try{return{ok:!0,data:JSON.parse(r)}}catch{return{ok:!1,status:s.status,message:e}}}async function ur(t,e){let s;try{s=await fetch(t,e)}catch{return cr()}if(!s.ok)return hr(s);let r="";try{r=await s.text()}catch{return{ok:!0,data:We}}if(!r.trim())return{ok:!0,data:We};try{const i=JSON.parse(r);return{ok:!0,data:i&&typeof i=="object"?i:We}}catch{return{ok:!0,data:We}}}function ve(t,e){return ur(t,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:e.toString()})}function V(t,e,s,r=!1){if(typeof t!="string")throw new Error(`${e} is required.`);if(!r&&t.length===0)throw new Error(`${e} must not be empty.`);if(t.length>s)throw new Error(`${e} must be at most ${s} characters.`);return t}function de(t,e,s,r){if(typeof t!="number"||!Number.isFinite(t))throw new Error(`${e} must be a number.`);if(t<s||t>r)throw new Error(`${e} must be between ${s} and ${r}.`);return t}function bi(t,e){if(typeof t!="boolean")throw new Error(`${e} must be true or false.`);return t}function _i(t,e,s){if(typeof t!="number"||!Number.isFinite(t))throw new Error(`${e} must be a number.`);if(!s.includes(t))throw new Error(`${e} must be one of: ${s.join(", ")}.`);return t}function vi(){return Z("/api/settings",Re)}function yi(){return Z("/api/status",At)}function pr(){return Z("/healthcheck/healty",At)}function wi(){return Z("/healthcheck/ready",At)}function $i(){return Z("/api/settings/modbus",Re)}function xi(){return Z("/api/settings/rainwater",Re)}function ki(){return Z("/api/settings/electricity",Re)}function Si(){return Z("/api/settings/meter",Re)}function Ei(){return Z("/api/controls",At)}function Pi(t){const e=_i(t.modbusSpeed,"Modbus speed",g.modbus.speeds),s=de(t.addressQDY30A,"QDY30A address",g.modbus.addressMin,g.modbus.addressMax),r=de(t.addressWBMAI6,"WB-MAI6 address",g.modbus.addressMin,g.modbus.addressMax),i=new URLSearchParams;return i.set("modbusSpeed",String(e)),i.set("addressQDY30A",String(s)),i.set("addressWBMAI6",String(r)),ve("/api/settings/modbus",i)}function Mi(t){const e=V(t.rainwaterPitLevelTopic,"Pit level topic",g.rainwater.topicMax,!0),s=de(t.rainwaterPitMaxHeight,"Pit max height",g.rainwater.maxHeightMinExclusive,g.rainwater.maxHeightMax);if(s<=g.rainwater.maxHeightMinExclusive)throw new Error("Pit max height must be greater than 0.");const r=de(t.rainwaterPitMaxFillLevel,"Pit max fill level",g.rainwater.fillLevelStartPercent,g.rainwater.maxFillLevelMax);if(r<=g.rainwater.fillLevelStartPercent)throw new Error(`Pit max fill level must be greater than ${g.rainwater.fillLevelStartPercent}.`);const i=new URLSearchParams;return i.set("rainwaterPitLevelTopic",e),i.set("rainwaterPitMaxHeight",String(s)),i.set("rainwaterPitMaxFillLevel",String(r)),ve("/api/settings/rainwater",i)}function Ti(t){const e=V(t.electricityTopic,"Grid state topic",g.electricity.topicMax,!0),s=new URLSearchParams;return s.set("electricityTopic",e),ve("/api/settings/electricity",s)}function Ci(t){const e=de(t.homeWaterInitialValue,"Home water initial value",g.meter.valueMin,g.meter.valueMax),s=de(t.yardWaterInitialValue,"Yard water initial value",g.meter.valueMin,g.meter.valueMax),r=new URLSearchParams;return r.set("homeWaterInitialValue",String(e)),r.set("yardWaterInitialValue",String(s)),ve("/api/settings/meter",r)}function Ni(t){const e=V(t.host,"MQTT host",g.mqtt.hostMax),s=de(t.port,"MQTT port",g.mqtt.portMin,g.mqtt.portMax),r=V(t.login,"MQTT login",g.mqtt.loginMax,!0),i=V(t.password,"MQTT password",g.mqtt.passwordMax,!0),A=V(t.haDiscoveryPrefix,"HA discovery prefix",g.mqtt.haDiscoveryPrefixMax),n=bi(t.mqttIsHADiscovery,"HA discovery flag"),l=V(t.stateTopic,"State topic",g.mqtt.topicMax),o=V(t.commandTopic,"Command topic",g.mqtt.topicMax),c=V(t.mqttTopicPrefix,"MQTT topic prefix",g.mqtt.topicMax),h=new URLSearchParams;return h.set("host",e),h.set("port",String(s)),h.set("login",r),h.set("password",i),h.set("haDiscoveryPrefix",A),h.set("mqttIsHADiscovery",n?"true":"false"),h.set("stateTopic",l),h.set("commandTopic",o),h.set("mqttTopicPrefix",c),ve("/api/settings/mqtt",h)}function Ii(t,e){const s=new URLSearchParams;return s.set("id",t),s.set("value",e),ve("/api/controls/set",s)}function Di(){return ur("/api/reboot",{method:"POST"})}function k({kind:t="info",message:e,onClose:s}){return a("div",{class:`banner banner-${t}`,role:"status",children:[a("span",{children:e}),s?a("button",{type:"button",class:"banner-close","aria-label":"Dismiss",onClick:s,children:"×"}):null]})}function Li(t){switch(t){case"primary":return"btn btn-primary";case"danger":return"btn btn-danger";default:return"btn"}}function D({children:t,variant:e="default",type:s="button",disabled:r,title:i,onClick:A}){return a("button",{type:s,class:Li(e),disabled:r,title:i,onClick:A,children:t})}function Ri(t){return a(D,{...t,variant:"danger"})}function L({title:t,children:e,class:s}){return a("section",{class:s?`card ${s}`:"card",children:[t?a("h2",{children:t}):null,e]})}function Ui({label:t,checked:e,onChange:s,disabled:r,help:i,name:A}){const n=Pt();return a("div",{class:"checkbox-field",children:[a("label",{class:"checkbox-label",for:n,children:[a("input",{id:n,name:A,type:"checkbox",checked:e,disabled:r,onChange:o=>{s?.(o.currentTarget.checked)}}),a("span",{children:t})]}),i?a("span",{class:"field-help",children:i}):null]})}function W({label:t,value:e,onInput:s,type:r="text",name:i,placeholder:A,maxLength:n,min:l,max:o,step:c,error:h,help:p,disabled:d,required:f,autoComplete:b,inputMode:y}){const w=Pt();return a("label",{class:"field",for:w,children:[a("span",{class:"field-label",children:t}),a("input",{id:w,name:i,type:r,value:e,placeholder:A,maxLength:n,min:l,max:o,step:c,disabled:d,required:f,autoComplete:b,inputMode:y,onInput:m=>{s?.(m.currentTarget.value)},"aria-invalid":h?!0:void 0}),p&&!h?a("span",{class:"field-help",children:p}):null,h?a("span",{class:"field-error",children:h}):null]})}function fr(){return a(k,{kind:"info",message:"Changes are saved to flash and take effect only after a reboot."})}function Wi({label:t,value:e,onInput:s,maxLength:r,error:i,help:A,disabled:n,autoComplete:l}){const[o,c]=_(!1);return a("div",{class:"password-field",children:[a(W,{label:t,value:e,onInput:s,type:o?"text":"password",maxLength:r,error:i,help:A,disabled:n,autoComplete:l}),a("button",{type:"button",class:"btn reveal-toggle","aria-pressed":o,disabled:n,onClick:()=>c(h=>!h),children:o?"Hide":"Show"})]})}const Hi={host:"",port:"",login:"",password:"",haDiscoveryPrefix:"",mqttIsHADiscovery:!1,stateTopic:"",commandTopic:"",mqttTopicPrefix:""};function Bi(t){const e={};t.host.trim().length===0?e.host="Host is required.":t.host.length>g.mqtt.hostMax&&(e.host=`At most ${g.mqtt.hostMax} characters.`);const s=Number(t.port);return t.port.trim()===""?e.port="Port is required.":(!Number.isInteger(s)||s<1||s>65535)&&(e.port="Port must be an integer between 1 and 65535."),t.login.length>g.mqtt.loginMax&&(e.login=`At most ${g.mqtt.loginMax} characters.`),t.password.length>g.mqtt.passwordMax&&(e.password=`At most ${g.mqtt.passwordMax} characters.`),t.haDiscoveryPrefix.trim().length===0?e.haDiscoveryPrefix="Discovery prefix is required.":t.haDiscoveryPrefix.length>g.mqtt.haDiscoveryPrefixMax&&(e.haDiscoveryPrefix=`At most ${g.mqtt.haDiscoveryPrefixMax} characters.`),t.stateTopic.trim().length===0?e.stateTopic="Required - the device crashes if the state topic is missing.":t.stateTopic.length>g.mqtt.topicMax&&(e.stateTopic=`At most ${g.mqtt.topicMax} characters.`),t.commandTopic.trim().length===0?e.commandTopic="Required - the device crashes if the command topic is missing.":t.commandTopic.length>g.mqtt.topicMax&&(e.commandTopic=`At most ${g.mqtt.topicMax} characters.`),t.mqttTopicPrefix.trim().length===0?e.mqttTopicPrefix="Topic prefix is required.":t.mqttTopicPrefix.length>g.mqtt.topicMax&&(e.mqttTopicPrefix=`At most ${g.mqtt.topicMax} characters.`),e}function Fi(t){return Object.values(t).some(e=>!!e)}function Oi(){const[t,e]=_(!1),[s,r]=_(null),[i,A]=_(Hi),[n,l]=_({}),[o,c]=_(!1),[h,p]=_(null),[d,f]=_(null),b=R(async()=>{r(null);const u=await vi();u.ok?A({host:u.data.mqttHost,port:String(u.data.mqttPort),login:u.data.mqttLogin,password:u.data.mqttPassword,haDiscoveryPrefix:u.data.mqttHADiscoveryPrefix,mqttIsHADiscovery:u.data.mqttIsHADiscovery,stateTopic:u.data.mqttStateTopic,commandTopic:u.data.mqttCommandTopic,mqttTopicPrefix:u.data.mqttTopicPrefix}):r(u.message),e(!0)},[]);O(()=>{b()},[b]);const y=u=>A(m=>({...m,...u})),w=R(async u=>{u.preventDefault();const m=Bi(i);if(l(m),p(null),f(null),!Fi(m)){c(!0);try{const v=await Ni({host:i.host,port:Number(i.port),login:i.login,password:i.password,haDiscoveryPrefix:i.haDiscoveryPrefix,mqttIsHADiscovery:i.mqttIsHADiscovery,stateTopic:i.stateTopic,commandTopic:i.commandTopic,mqttTopicPrefix:i.mqttTopicPrefix});v.ok?p("MQTT settings saved to flash."):f(v.message)}catch(v){f(v instanceof Error?v.message:String(v))}finally{c(!1)}}},[i]);return t?a("div",{class:"stack",children:[a(fr,{}),s?a(U,{children:[a(k,{kind:"error",message:s}),a("div",{class:"form-actions",children:a(D,{onClick:()=>{b()},children:"Retry"})})]}):null,a(L,{title:"MQTT",children:a("form",{onSubmit:w,novalidate:!0,children:[a(W,{label:"Host",value:i.host,onInput:u=>y({host:u}),maxLength:g.mqtt.hostMax,error:n.host,autoComplete:"off",disabled:o}),a(W,{label:"Port",value:i.port,onInput:u=>y({port:u}),type:"number",min:1,max:65535,inputMode:"numeric",error:n.port,disabled:o}),a(W,{label:"Login",value:i.login,onInput:u=>y({login:u}),maxLength:g.mqtt.loginMax,error:n.login,autoComplete:"off",disabled:o}),a(Wi,{label:"Password",value:i.password,onInput:u=>y({password:u}),maxLength:g.mqtt.passwordMax,error:n.password,autoComplete:"new-password",disabled:o}),a(W,{label:"HA discovery prefix",value:i.haDiscoveryPrefix,onInput:u=>y({haDiscoveryPrefix:u}),maxLength:g.mqtt.haDiscoveryPrefixMax,error:n.haDiscoveryPrefix,autoComplete:"off",disabled:o}),a(Ui,{label:"Enable Home Assistant discovery",checked:i.mqttIsHADiscovery,onChange:u=>y({mqttIsHADiscovery:u}),disabled:o}),a(W,{label:"State topic",value:i.stateTopic,onInput:u=>y({stateTopic:u}),maxLength:g.mqtt.topicMax,error:n.stateTopic,help:"Must not be empty: the device crashes on a missing state topic.",autoComplete:"off",disabled:o}),a(W,{label:"Command topic",value:i.commandTopic,onInput:u=>y({commandTopic:u}),maxLength:g.mqtt.topicMax,error:n.commandTopic,help:"Must not be empty: the device crashes on a missing command topic.",autoComplete:"off",disabled:o}),a(W,{label:"Topic prefix",value:i.mqttTopicPrefix,onInput:u=>y({mqttTopicPrefix:u}),maxLength:g.mqtt.topicMax,error:n.mqttTopicPrefix,help:"Prefix used for Home Assistant discovery entities; must not be empty.",autoComplete:"off",disabled:o}),h?a(k,{kind:"success",message:h,onClose:()=>p(null)}):null,d?a(k,{kind:"error",message:d,onClose:()=>f(null)}):null,a("div",{class:"form-actions",children:a(D,{type:"submit",variant:"primary",disabled:o,children:o?"Saving…":"Save MQTT"})})]})})]}):a(L,{title:"Connections",children:a("p",{class:"muted",children:"Loading connection settings…"})})}const zi=`<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1260 720" width="1260" height="720" font-family="'Segoe UI', Roboto, Arial, sans-serif" xmlns:c2pa="http://c2pa.org/manifest"><metadata><c2pa:manifest>AAAWgmp1bWIAAAAeanVtZGMycGEAEQAQgAAAqgA4m3EDYzJwYQAAABZcanVtYgAAAEdqdW1kYzJtYQARABCAAACqADibcQN1cm46YzJwYTpmYWY2YmMzNi1lMmNjLTQzNjQtOGU5Yi1kNTUwZDJlNTMwYzEAAAADl2p1bWIAAAApanVtZGMyYXMAEQAQgAAAqgA4m3EDYzJwYS5hc3NlcnRpb25zAAAAALxqdW1iAAAARGp1bWRjYm9yABEAEIAAAKoAOJtxE2MycGEuaW5ncmVkaWVudC52MwAAAAAYYzJzaJj6xFsPsFfyVxN7ZKzXzUcAAABwY2JvcqNpZGM6Zm9ybWF0bWltYWdlL3N2Zyt4bWxqaW5zdGFuY2VJRHgseG1wOmlpZDplYjNiNmY5MS03YzMzLTRkYzgtYmRjZS01M2FhYjQ0MjhiZTRscmVsYXRpb25zaGlwaHBhcmVudE9mAAAB4mp1bWIAAABBanVtZGNib3IAEQAQgAAAqgA4m3ETYzJwYS5hY3Rpb25zLnYyAAAAABhjMnNo2Ns3UliEmyhZulm4A3BDdgAAAZljYm9yomdhY3Rpb25zgqJmYWN0aW9ua2MycGEub3BlbmVkanBhcmFtZXRlcnOha2luZ3JlZGllbnRzgaJjdXJseC1zZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmluZ3JlZGllbnQudjNkaGFzaFgguIMOrntUWLFCvCafofKKCm6KcTZ/O5As7uQTNx++1YOkZmFjdGlvbngdY29tLmFudGhyb3BpYy5jbGF1ZGUucHJvdmlkZWRqcGFyYW1ldGVyc6F4H2NvbS5hbnRocm9waWMub3JpZ2luLWNvbmZpZGVuY2VndW5rbm93bmtkZXNjcmlwdGlvbnhmQ2xhdWRlIHByb3ZpZGVkIHRoaXMgZmlsZSBhdCB0aGUgcmVxdWVzdCBvZiBhIHVzZXIgYW5kIG1heSBoYXZlIGNyZWF0ZWQgb3IgbW9kaWZpZWQgdGhlIGZpbGUgY29udGVudHMubXNvZnR3YXJlQWdlbnShZG5hbWVmQ2xhdWRlcmFsbEFjdGlvbnNJbmNsdWRlZPUAAADIanVtYgAAAEBqdW1kY2JvcgARABCAAACqADibcRNjMnBhLmhhc2guZGF0YQAAAAAYYzJzaDX17LRAUxR9n465+PsGwzsAAACAY2JvcqVjYWxnZnNoYTI1NmNwYWRNAAAAAAAAAAAAAAAAAGRoYXNoWCCfBqF0+GbMxJHrffmrv8NdHuSuwans6g+NVV8299M1e2RuYW1lbmp1bWJmIG1hbmlmZXN0amV4Y2x1c2lvbnOBomVzdGFydBjzZmxlbmd0aBkeBAAAAj5qdW1iAAAAJ2p1bWRjMmNsABEAEIAAAKoAOJtxA2MycGEuY2xhaW0udjIAAAACD2Nib3KlY2FsZ2ZzaGEyNTZpc2lnbmF0dXJleE1zZWxmI2p1bWJmPS9jMnBhL3VybjpjMnBhOmZhZjZiYzM2LWUyY2MtNDM2NC04ZTliLWQ1NTBkMmU1MzBjMS9jMnBhLnNpZ25hdHVyZWppbnN0YW5jZUlEeCx4bXA6aWlkOmE4ZmY3Y2ZkLWY4M2QtNGEwMC1iMGI4LWVmZGJiMDJmMWU2NHJjcmVhdGVkX2Fzc2VydGlvbnODomN1cmx4LXNlbGYjanVtYmY9YzJwYS5hc3NlcnRpb25zL2MycGEuaW5ncmVkaWVudC52M2RoYXNoWCC4gw6ue1RYsUK8Jp+h8ooKbopxNn87kCzu5BM3H77Vg6JjdXJseCpzZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmFjdGlvbnMudjJkaGFzaFggeSHGQbNt3uTHB51kcvq9xlCX3bEEM3VA3n1E3IE29OKiY3VybHgpc2VsZiNqdW1iZj1jMnBhLmFzc2VydGlvbnMvYzJwYS5oYXNoLmRhdGFkaGFzaFggjTVXEkiyrbnwKxu7nDo4Bi8c+4SO058N86lV2Vb2H6Z0Y2xhaW1fZ2VuZXJhdG9yX2luZm+jZG5hbWVvQW50aHJvcGljIEZpbGVzZ3ZlcnNpb25lMS4wLjBrc3BlY1ZlcnNpb25lMi40LjAAABA4anVtYgAAAChqdW1kYzJjcwARABCAAACqADibcQNjMnBhLnNpZ25hdHVyZQAAABAIY2JvctKEWQISogEmGCFZAgowggIGMIIBjaADAgECAhRA5aAK7sI50L64g/oGQgU9Z1UTADAKBggqhkjOPQQDAzBJMRcwFQYDVQQKEw5BbnRocm9waWMsIFBCQzEuMCwGA1UEAxMlQW50aHJvcGljIENvbnRlbnQgQ3JlZGVudGlhbHMgUm9vdCBDQTAeFw0yNjA4MDcxODQzNTZaFw0yODA4MDYxOTQzNTZaMEQxFzAVBgNVBAoTDkFudGhyb3BpYywgUEJDMSkwJwYDVQQDEyBBbnRocm9waWMgQ2xhdWRlIENvbnRlbnQgU2lnbmluZzBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABJh6CmvLUBgFFNU0vUKlOVtE6djd17L5SuwX0LemFisBM3dkd/3cyjxFA3Qo5S46fX0/ihY0VZ7mfb9KF703t5OjWDBWMA4GA1UdDwEB/wQEAwIHgDAVBgNVHSUEDjAMBgorBgEEAYPoXgIBMAwGA1UdEwEB/wQCMAAwHwYDVR0jBBgwFoAUzlHiBIFOZFsj+OPEz5o+nMHXXMIwCgYIKoZIzj0EAwMDZwAwZAIwMXMdFJ4BetLLVY7ORuE9noqbbAZOZn/aArXyTwFAZfKrPzxF2vPoJNf1+UCdg1XGAjBwX1zd9WGqYkqmL5SFqw1QySjr1zJfpJM9+1rdDwSPLMOPOjKuiXjoU/pUUeG9RwmhY3BhZFkNngAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPZYQMppKeSnkAYxe4D5UJ7poqgFMxVoMVjxsHqGVocHjSv5FjYnRJVUh/sAjgKgVZf9SRFkC0fawtjD3KBSbaxAGPk=</c2pa:manifest></metadata>
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
  <path id="pipe-city"           class="pipe" data-flow="off" d="M20 360 L130 360"/>
  <path id="pipe-trunk"          class="pipe" data-flow="off" d="M130 360 L130 140"/>
  <path id="pipe-trunk-down"     class="pipe" data-flow="off" d="M130 360 L130 540"/>
  <path id="pipe-home-fill"      class="pipe" data-flow="off" d="M130 140 L330 140"/>
  <path id="pipe-bypass"         class="pipe" data-flow="off" d="M130 360 L800 360 L800 215"/>
  <path id="pipe-street-fill"    class="pipe" data-flow="off" d="M130 540 L330 540"/>
  <path id="pipe-home-suction"   class="pipe" data-flow="off" d="M510 215 L558 215"/>
  <path id="pipe-home-out"       class="pipe" data-flow="off" d="M602 215 L1130 215"/>
  <path id="pipe-street-suction" class="pipe" data-flow="off" d="M510 615 L558 615"/>
  <path id="pipe-street-out"     class="pipe" data-flow="off" d="M602 615 L1130 615"/>
  <circle cx="800" cy="215" r="5" fill="#94a3b8"/>
  <circle cx="130" cy="360" r="5" fill="#94a3b8"/>

  <!-- Подписи линий -->
  <text class="caption" x="20" y="386">ГОРОДСКАЯ</text>
  <text class="caption" x="20" y="401">СЕТЬ</text>
  <text class="caption" x="580" y="348" text-anchor="middle">БАЙПАС</text>
  <text class="caption" x="900" y="204">ДОМАШНЯЯ МАГИСТРАЛЬ</text>
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
    <circle class="instr" cx="700" cy="215" r="20"/>
    <text class="instr-text" x="700" y="219">FQ</text>
    <g class="box" transform="translate(640,258)">
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

    var api = {
      // Клапан/насос: state = open|closed|on|off|fault|unknown, text — своя надпись (необязательно)
      setState: function (id, state, text) {
        var g = $(id); if (!g) return;
        g.setAttribute('data-state', state);
        var t = $(id + '-state');
        if (t) t.textContent = (text !== undefined) ? text : (LABEL[state] || state);
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
      // Анимация потока в трубе: pipeId = 'pipe-...', on = true|false
      setFlow: function (pipeId, on) {
        var p = $(pipeId); if (p) p.setAttribute('data-flow', on ? 'on' : 'off');
      },
      // Демонстрация — вызвать из консоли: dashboard.demo()
      demo: function () {
        api.setPressure(3.4);
        api.setState('valve-home-fill', 'closed');
        api.setState('valve-bypass', 'closed');
        api.setState('valve-street-fill', 'open');
        api.setState('pump-home', 'on');
        api.setState('pump-street', 'off');
        api.setLevel('tank-home', 72);
        api.setLevel('tank-street', 38);
        api.setMeter('meter-home', 12.5, 1234.56);
        api.setMeter('meter-street', 0, 87.3);
        ['pipe-city', 'pipe-trunk-down', 'pipe-street-fill', 'pipe-home-suction', 'pipe-home-out']
          .forEach(function (id) { api.setFlow(id, true); });
      }
    };

    window.dashboard = api;
  })();
  ]]><\/script>
</svg>
`,qi=zi.replace(/^\s*<\?xml[\s\S]*?\?>/i,"").replace(/<script\b[\s\S]*?<\/script>/gi,"").replace(/<metadata\b[\s\S]*?<\/metadata>/gi,""),bs=.37,ji=1.2,Vi=62,mr=186,_s=Vi+mr,Yi={open:"ОТКРЫТ",closed:"ЗАКРЫТ",on:"ВКЛЮЧЕН",off:"ВЫКЛЮЧЕН",unknown:"НЕТ ДАННЫХ"},Me={"valve-home-fill":"fillingBarrelValve","valve-bypass":"bypassValve","valve-street-fill":"rainwaterPitValve","pump-home":"homePumpStation","pump-street":"outdoorPumpStation"},Zi={"valve-home-fill":"valve","valve-bypass":"valve","valve-street-fill":"valve","pump-home":"pump","pump-street":"pump"},Gi=Object.keys(Me);function F(t,e){return t.querySelector(`[id="${e}"]`)}function Qi(t,e,s){const r=F(t,e);r&&r.setAttribute("data-state",s);const i=F(t,`${e}-state`);i&&(i.textContent=Yi[s])}function vs(t,e,s){const r=F(t,`${e}-water`),i=F(t,`${e}-level`),A=F(t,e);if(s===null){r&&(r.setAttribute("y",String(_s)),r.setAttribute("height","0")),i&&(i.textContent="— %"),A&&A.setAttribute("data-state","unknown");return}const n=Math.max(0,Math.min(100,s)),l=mr*n/100;r&&(r.setAttribute("y",String(_s-l)),r.setAttribute("height",String(l))),i&&(i.textContent=`${Math.round(n)} %`),A&&A.setAttribute("data-state",n<15?"alarm":"ok")}function Ji(t,e,s){const r=F(t,"sensor-city-pressure-value"),i=F(t,"sensor-city-pressure");if(e===null){r&&(r.textContent="— бар"),i&&i.setAttribute("data-state","unknown");return}r&&(r.textContent=`${e.toFixed(1)} бар`),i&&i.setAttribute("data-state",s?"alarm":"ok")}function ys(t,e,s){const r=F(t,`${e}-flow`),i=F(t,`${e}-total`),A=F(t,e);if(s===null){r&&(r.textContent="— л/мин"),i&&(i.textContent="— м³"),A&&A.setAttribute("data-state","unknown");return}r&&(r.textContent="— л/мин"),i&&(i.textContent=`${s.toFixed(2)} м³`),A&&A.setAttribute("data-state","off")}function z(t,e,s){const r=F(t,e);r&&r.setAttribute("data-flow",s?"on":"off")}function Xi(t,e){return t.devices.find(s=>s.id===Me[e])??null}function we(t,e){const s=t.sensors.find(r=>r.id===e);return s&&s.available?s.value:null}function $e(t,e){const s=t.devices.find(r=>r.id===e);return s!==void 0&&s.available&&s.value}function Ki({snapshot:t,disabled:e,pendingId:s,onToggle:r}){const i=pe(null),A=pe(null),n=pe({snapshot:t,disabled:e,pendingId:s,onToggle:r});n.current={snapshot:t,disabled:e,pendingId:s,onToggle:r},O(()=>{const o=A.current,c=i.current;if(c&&(e?c.setAttribute("data-disabled","true"):c.removeAttribute("data-disabled")),!o)return;for(const m of Gi){const v=Xi(t,m),M=!v||!v.available?"unknown":Zi[m]==="valve"?v.value?"open":"closed":v.value?"on":"off";Qi(o,m,M);const T=F(o,m);T&&(s===Me[m]?T.setAttribute("data-pending","true"):T.removeAttribute("data-pending"))}const h=we(t,"barrelWaterLevel");vs(o,"tank-home",h===null?null:(h-bs)/(ji-bs)*100);const p=we(t,"rainwaterPitLevel");vs(o,"tank-street",p);const d=we(t,"supplierPressure");Ji(o,d,t.emergencyMode),ys(o,"meter-home",we(t,"homeWaterConsumption")),ys(o,"meter-street",we(t,"yardWaterConsumption"));const f=$e(t,"fillingBarrelValve"),b=$e(t,"bypassValve"),y=$e(t,"rainwaterPitValve"),w=$e(t,"homePumpStation"),u=$e(t,"outdoorPumpStation");z(o,"pipe-city",f||y),z(o,"pipe-trunk",f),z(o,"pipe-home-fill",f),z(o,"pipe-trunk-down",y),z(o,"pipe-street-fill",y),z(o,"pipe-bypass",b),z(o,"pipe-home-suction",w),z(o,"pipe-home-out",w||b),z(o,"pipe-street-suction",u),z(o,"pipe-street-out",u)},[t,s,e]);const l=R(o=>{if(!(o.target instanceof Element))return;const h=o.target.closest("g[id]")?.id;if(!h||!Object.prototype.hasOwnProperty.call(Me,h))return;const p=n.current;if(p.disabled)return;const d=Me[h],f=p.snapshot.devices.find(b=>b.id===d);!f||!f.available||p.pendingId===f.id||p.onToggle(f.id,f.value?"off":"on")},[]);return a("div",{class:"schematic-scroll",ref:i,onClick:l,children:[a("p",{class:"hint",children:"Tap a valve or pump on the schematic to toggle it."}),a("div",{ref:A,dangerouslySetInnerHTML:{__html:qi}})]})}const eA=5e3,tA={on:"Turn on",off:"Turn off",onBadge:"Enabled",offBadge:"Disabled"},sA={on:"Open",off:"Close",onBadge:"Open",offBadge:"Closed"},rA={on:"Turn on",off:"Turn off",onBadge:"On",offBadge:"Off"};function iA(t,e){if(!Number.isFinite(t))return String(t);const s=t.toFixed(e);return s.includes(".")?s.replace(/0+$/,"").replace(/\.$/,""):s}function AA(t,e){return iA(t,e==="m3"?3:2)}function ut({device:t,actions:e,disabled:s,onToggle:r}){const i=t.available?t.value?{label:e.onBadge,className:"badge badge-on"}:{label:e.offBadge,className:"badge badge-off"}:{label:"Unknown",className:"badge badge-off"};return a("li",{class:"valve-row",children:[a("div",{class:"row",children:[a("span",{children:t.name}),a("span",{class:i.className,children:i.label})]}),a("div",{class:"form-actions",children:[a(D,{variant:"primary",disabled:s,onClick:()=>r(t.id,"on"),children:e.on}),a(D,{disabled:s,onClick:()=>r(t.id,"off"),children:e.off})]})]})}function nA(){const[t,e]=_(null),[s,r]=_(!1),[i,A]=_(null),[n,l]=_(null),[o,c]=_(null),h=R(async()=>{const u=await Ei();if(u.ok){const m=u.data;Array.isArray(m.devices)&&Array.isArray(m.sensors)&&typeof m.emergencyMode=="boolean"?(e(m),A(null)):A("Device returned an invalid controls response")}else A(u.message);r(!0)},[]);O(()=>{h();const u=window.setInterval(()=>{h()},eA);return()=>window.clearInterval(u)},[h]);const p=R(async(u,m)=>{l(null),c(u);try{const v=await Ii(u,m);v.ok||l(v.message)}catch(v){l(v instanceof Error?v.message:String(v))}finally{c(null),await new Promise(v=>window.setTimeout(v,300)),await h()}},[h]);if(!s)return a("div",{class:"stack",children:a(L,{title:"Controls",children:a("p",{class:"muted",children:"Loading controls…"})})});if(!t)return a("div",{class:"stack",children:[i?a(k,{kind:"error",message:i}):null,a("div",{class:"form-actions",children:a(D,{onClick:()=>{h()},children:"Retry"})})]});const d=t.devices.find(u=>u.kind==="auto")??null,f=t.devices.filter(u=>u.kind==="valve"),b=t.devices.filter(u=>u.kind==="pump"),y=i!==null,w=u=>y||!u.available||o===u.id;return a("div",{class:"stack",children:[d&&d.available&&d.value?a(k,{kind:"info",message:"Automation is enabled and may revert manual valve/pump changes shortly after you toggle them."}):null,i?a(U,{children:[a(k,{kind:"error",message:i}),a("div",{class:"form-actions",children:a(D,{onClick:()=>{h()},children:"Retry"})})]}):null,n?a(k,{kind:"error",message:n,onClose:()=>l(null)}):null,a(L,{title:"Water schematic",children:a(Ki,{snapshot:t,disabled:y,pendingId:o,onToggle:p})}),a(L,{title:"Sensors",children:a("dl",{class:"kv",children:[t.sensors.map(u=>a(U,{children:[a("dt",{children:u.name}),a("dd",{children:u.available?a(U,{children:[AA(u.value,u.unit)," ",a("span",{class:"unit",children:u.unit})]}):a("span",{class:"hint",children:"Unavailable"})})]},u.id)),a("dt",{children:"Emergency mode"}),a("dd",{children:a("span",{class:t.emergencyMode?"badge badge-danger":"badge badge-off",children:t.emergencyMode?"Active":"Off"})})]})}),a(L,{title:"Auto mode",children:d?a("ul",{class:"valve-list",children:a(ut,{device:d,actions:tA,disabled:w(d),onToggle:p})}):a("p",{class:"muted",children:"Auto mode is not reported by the device."})}),a(L,{title:"Valves",children:f.length===0?a("p",{class:"muted",children:"No valves reported by the device."}):a("ul",{class:"valve-list",children:f.map(u=>a(ut,{device:u,actions:sA,disabled:w(u),onToggle:p},u.id))})}),a(L,{title:"Pumps",children:b.length===0?a("p",{class:"muted",children:"No pumps reported by the device."}):a("ul",{class:"valve-list",children:b.map(u=>a(ut,{device:u,actions:rA,disabled:w(u),onToggle:p},u.id))})})]})}const aA={homeWaterInitialValue:"",yardWaterInitialValue:""};function ws(t){if(t.trim()==="")return null;const e=Number(t);return Number.isFinite(e)?e:null}function oA(t){return Object.values(t).some(e=>!!e)}function $s(t){return/^-?\d*(\.\d{4,})$/.test(t.trim())}function lA(t){const e={},s=ws(t.homeWaterInitialValue);s===null||s<0?e.homeWaterInitialValue="Enter a value of 0 or more.":$s(t.homeWaterInitialValue)&&(e.homeWaterInitialValue="At most 3 decimal places.");const r=ws(t.yardWaterInitialValue);return r===null||r<0?e.yardWaterInitialValue="Enter a value of 0 or more.":$s(t.yardWaterInitialValue)&&(e.yardWaterInitialValue="At most 3 decimal places."),e}function dA(){const[t,e]=_(!1),[s,r]=_(null),[i,A]=_(aA),[n,l]=_({}),[o,c]=_(null),[h,p]=_(null),[d,f]=_(null),[b,y]=_(null),[w,u]=_(null),m=R(async()=>{r(null);const S=await Si();S.ok?A({homeWaterInitialValue:String(S.data.homeWaterInitialValue),yardWaterInitialValue:String(S.data.yardWaterInitialValue)}):r(S.message),e(!0)},[]);O(()=>{m()},[m]);const v=R(async S=>{const B=lA(i);l(B);const q=S==="home"?p:y,H=S==="home"?f:u;if(q(null),H(null),!oA(B)){c(S);try{const N=await Ci({homeWaterInitialValue:Number(i.homeWaterInitialValue),yardWaterInitialValue:Number(i.yardWaterInitialValue)});N.ok?q("Counter recalibrated to the entered reading."):H(N.message)}catch(N){H(N instanceof Error?N.message:String(N))}finally{c(null)}}},[i]);if(!t)return a("div",{class:"stack",children:a(L,{title:"Meters",children:a("p",{class:"muted",children:"Loading meter values…"})})});const M=o!==null,T=(S,B,q)=>{const H=S==="home",N=H?"homeWaterInitialValue":"yardWaterInitialValue",G=i[N],Sr=n[N],zt=H?h:b,qt=H?d:w;return a(L,{title:B,children:a("form",{novalidate:!0,onSubmit:ot=>{ot.preventDefault(),v(S)},children:[a(W,{label:q,value:G,onInput:ot=>A(Er=>({...Er,[N]:ot})),type:"number",min:0,step:.001,inputMode:"decimal",error:Sr,help:"Cumulative counter reading in m³ (up to 3 decimals).",disabled:M}),zt?a(k,{kind:"success",message:zt,onClose:()=>H?p(null):y(null)}):null,qt?a(k,{kind:"error",message:qt,onClose:()=>H?f(null):u(null)}):null,a("div",{class:"form-actions",children:a(D,{type:"submit",variant:"primary",disabled:M,children:o===S?"Saving…":"Save"})})]})})};return a("div",{class:"stack",children:[a(k,{kind:"info",message:"Setting an initial value recalibrates the pulse counter to that reading. It is persisted immediately and needs no reboot."}),s?a(U,{children:[a(k,{kind:"error",message:s}),a("div",{class:"form-actions",children:a(D,{onClick:()=>{m()},children:"Retry"})})]}):null,T("home","Home water","Home water counter"),T("yard","Yard water","Yard water counter")]})}function cA(){const t=pe(null);return O(()=>{const e=document.createElement("edn-network-page");return t.current?.append(e),()=>e.remove()},[]),a("div",{ref:t})}function hA({label:t,value:e,options:s,onChange:r,error:i,help:A,disabled:n,required:l,name:o}){const c=Pt(),h=p=>{r?.(p.currentTarget.value)};return a("label",{class:"field",for:c,children:[a("span",{class:"field-label",children:t}),a("select",{id:c,name:o,value:String(e),disabled:n,required:l,onChange:h,"aria-invalid":i?!0:void 0,children:s.map(p=>a("option",{value:p.value,disabled:p.disabled,children:p.label},p.value))}),A&&!i?a("span",{class:"field-help",children:A}):null,i?a("span",{class:"field-error",children:i}):null]})}function Je(t){if(t.trim()==="")return null;const e=Number(t);return Number.isFinite(e)?e:null}function Lt(t){return Object.values(t).some(e=>!!e)}function xs(t){return/^-?\d*(\.\d{4,})$/.test(t.trim())}const uA={modbusSpeed:"9600",addressQDY30A:"",addressWBMAI6:""};function pA(t){const e=g.modbus.speeds.map(r=>({value:String(r),label:`${r} baud`})),s=Je(t);return s!==null&&!g.modbus.speeds.includes(s)&&e.unshift({value:t,label:`${t} (current)`}),e}function ks(t,e){const s=Je(t);if(s===null||!Number.isInteger(s)||s<g.modbus.addressMin||s>g.modbus.addressMax)return`${e} must be an integer between ${g.modbus.addressMin} and ${g.modbus.addressMax}.`}function fA(){const[t,e]=_(!1),[s,r]=_(null),[i,A]=_(uA),[n,l]=_({}),[o,c]=_(!1),[h,p]=_(null),[d,f]=_(null),b=st(()=>pA(i.modbusSpeed),[i.modbusSpeed]),y=R(async()=>{r(null);const m=await $i();m.ok?A({modbusSpeed:String(m.data.modbusSpeed),addressQDY30A:String(m.data.addressQDY30A),addressWBMAI6:String(m.data.addressWBMAI6)}):r(m.message),e(!0)},[]);O(()=>{y()},[y]);const w=m=>A(v=>({...v,...m})),u=R(async m=>{m.preventDefault();const v={addressQDY30A:ks(i.addressQDY30A,"QDY30A address"),addressWBMAI6:ks(i.addressWBMAI6,"WB-MAI6 address")};if(l(v),p(null),f(null),!Lt(v)){c(!0);try{const M=await Pi({modbusSpeed:Number(i.modbusSpeed),addressQDY30A:Number(i.addressQDY30A),addressWBMAI6:Number(i.addressWBMAI6)});M.ok?p("Modbus settings saved to flash."):f(M.message)}catch(M){f(M instanceof Error?M.message:String(M))}finally{c(!1)}}},[i]);return t?a(L,{title:"Modbus",children:[s?a(U,{children:[a(k,{kind:"error",message:s}),a("div",{class:"form-actions",children:a(D,{onClick:()=>{y()},children:"Retry"})})]}):null,a("form",{onSubmit:u,novalidate:!0,children:[a(hA,{label:"Bus speed",value:i.modbusSpeed,options:b,onChange:m=>w({modbusSpeed:m}),help:"Only the speeds supported by the firmware are listed.",disabled:o}),a(W,{label:"QDY30A address",value:i.addressQDY30A,onInput:m=>w({addressQDY30A:m}),type:"number",min:g.modbus.addressMin,max:g.modbus.addressMax,inputMode:"numeric",error:n.addressQDY30A,disabled:o}),a(W,{label:"WB-MAI6 address",value:i.addressWBMAI6,onInput:m=>w({addressWBMAI6:m}),type:"number",min:g.modbus.addressMin,max:g.modbus.addressMax,inputMode:"numeric",error:n.addressWBMAI6,disabled:o}),h?a(k,{kind:"success",message:h,onClose:()=>p(null)}):null,d?a(k,{kind:"error",message:d,onClose:()=>f(null)}):null,a("div",{class:"form-actions",children:a(D,{type:"submit",variant:"primary",disabled:o,children:o?"Saving…":"Save Modbus"})})]})]}):a(L,{title:"Modbus",children:a("p",{class:"muted",children:"Loading Modbus settings…"})})}const mA={rainwaterPitLevelTopic:"",rainwaterPitMaxHeight:"",rainwaterPitMaxFillLevel:""};function gA(){const[t,e]=_(!1),[s,r]=_(null),[i,A]=_(mA),[n,l]=_({}),[o,c]=_(!1),[h,p]=_(null),[d,f]=_(null),b=R(async()=>{r(null);const u=await xi();u.ok?A({rainwaterPitLevelTopic:u.data.rainwaterPitLevelTopic,rainwaterPitMaxHeight:String(u.data.rainwaterPitMaxHeight),rainwaterPitMaxFillLevel:String(u.data.rainwaterPitMaxFillLevel)}):r(u.message),e(!0)},[]);O(()=>{b()},[b]);const y=u=>A(m=>({...m,...u})),w=R(async u=>{u.preventDefault();const m={};i.rainwaterPitLevelTopic.length>g.rainwater.topicMax&&(m.rainwaterPitLevelTopic=`At most ${g.rainwater.topicMax} characters.`);const v=Je(i.rainwaterPitMaxHeight);v===null||v<=g.rainwater.maxHeightMinExclusive||v>g.rainwater.maxHeightMax?m.rainwaterPitMaxHeight=`Height must be greater than 0 and at most ${g.rainwater.maxHeightMax} m.`:xs(i.rainwaterPitMaxHeight)&&(m.rainwaterPitMaxHeight="At most 3 decimal places.");const M=Je(i.rainwaterPitMaxFillLevel);if(M===null||M<=g.rainwater.fillLevelStartPercent||M>g.rainwater.maxFillLevelMax?m.rainwaterPitMaxFillLevel=`Fill level must be greater than ${g.rainwater.fillLevelStartPercent} and at most ${g.rainwater.maxFillLevelMax}.`:xs(i.rainwaterPitMaxFillLevel)&&(m.rainwaterPitMaxFillLevel="At most 3 decimal places."),l(m),p(null),f(null),!Lt(m)){c(!0);try{const T=await Mi({rainwaterPitLevelTopic:i.rainwaterPitLevelTopic,rainwaterPitMaxHeight:Number(i.rainwaterPitMaxHeight),rainwaterPitMaxFillLevel:Number(i.rainwaterPitMaxFillLevel)});T.ok?p("Rainwater settings saved to flash."):f(T.message)}catch(T){f(T instanceof Error?T.message:String(T))}finally{c(!1)}}},[i]);return t?a(L,{title:"Rainwater pit",children:[s?a(U,{children:[a(k,{kind:"error",message:s}),a("div",{class:"form-actions",children:a(D,{onClick:()=>{b()},children:"Retry"})})]}):null,a("form",{onSubmit:w,novalidate:!0,children:[a(W,{label:"Pit level topic",value:i.rainwaterPitLevelTopic,onInput:u=>y({rainwaterPitLevelTopic:u}),maxLength:g.rainwater.topicMax,placeholder:"Leave empty to disable auto-filling",help:"MQTT topic that reports the pit level; empty disables auto-filling.",error:n.rainwaterPitLevelTopic,autoComplete:"off",disabled:o}),a(W,{label:"Pit max height",value:i.rainwaterPitMaxHeight,onInput:u=>y({rainwaterPitMaxHeight:u}),type:"number",min:g.rainwater.maxHeightMinExclusive,max:g.rainwater.maxHeightMax,step:.001,inputMode:"decimal",help:`Height of the pit in metres (greater than 0, at most ${g.rainwater.maxHeightMax}).`,error:n.rainwaterPitMaxHeight,disabled:o}),a(W,{label:"Pit max fill level",value:i.rainwaterPitMaxFillLevel,onInput:u=>y({rainwaterPitMaxFillLevel:u}),type:"number",min:g.rainwater.fillLevelStartPercent,max:g.rainwater.maxFillLevelMax,step:.001,inputMode:"decimal",help:`Percentage that stops filling; must be greater than ${g.rainwater.fillLevelStartPercent}% and at most ${g.rainwater.maxFillLevelMax}%.`,error:n.rainwaterPitMaxFillLevel,disabled:o}),h?a(k,{kind:"success",message:h,onClose:()=>p(null)}):null,d?a(k,{kind:"error",message:d,onClose:()=>f(null)}):null,a("div",{class:"form-actions",children:a(D,{type:"submit",variant:"primary",disabled:o,children:o?"Saving…":"Save rainwater"})})]})]}):a(L,{title:"Rainwater pit",children:a("p",{class:"muted",children:"Loading rainwater settings…"})})}const bA={electricityTopic:""};function _A(){const[t,e]=_(!1),[s,r]=_(null),[i,A]=_(bA),[n,l]=_({}),[o,c]=_(!1),[h,p]=_(null),[d,f]=_(null),b=R(async()=>{r(null);const u=await ki();u.ok?A({electricityTopic:u.data.electricityTopic}):r(u.message),e(!0)},[]);O(()=>{b()},[b]);const y=u=>A(m=>({...m,...u})),w=R(async u=>{u.preventDefault();const m={};if(i.electricityTopic.length>g.electricity.topicMax&&(m.electricityTopic=`At most ${g.electricity.topicMax} characters.`),l(m),p(null),f(null),!Lt(m)){c(!0);try{const v=await Ti({electricityTopic:i.electricityTopic});v.ok?p("Electricity settings saved to flash."):f(v.message)}catch(v){f(v instanceof Error?v.message:String(v))}finally{c(!1)}}},[i]);return t?a(L,{title:"Electricity",children:[s?a(U,{children:[a(k,{kind:"error",message:s}),a("div",{class:"form-actions",children:a(D,{onClick:()=>{b()},children:"Retry"})})]}):null,a("form",{onSubmit:w,children:[a(W,{label:"Grid state topic",value:i.electricityTopic,onInput:u=>y({electricityTopic:u}),maxLength:g.electricity.topicMax,placeholder:"finedog/electricity",help:"Finedog grid-state topic (NORMAL/GENERATOR/BATTERY/CRITICAL); empty disables electricity-aware automation. Applies after reboot.",error:n.electricityTopic,autoComplete:"off",disabled:o}),h?a(k,{kind:"success",message:h,onClose:()=>p(null)}):null,d?a(k,{kind:"error",message:d,onClose:()=>f(null)}):null,a("div",{class:"form-actions",children:a(D,{type:"submit",variant:"primary",disabled:o,children:o?"Saving…":"Save electricity"})})]})]}):a(L,{title:"Electricity",children:a("p",{class:"muted",children:"Loading electricity settings…"})})}function vA(){return a("div",{class:"stack",children:[a(fr,{}),a(fA,{}),a(gA,{}),a(_A,{})]})}const pt=2e3,yA=12e4;function wA(){const[t,e]=_("idle"),s=pe(0);O(()=>{if(t!=="rebooting")return;let n=!1,l;const o=()=>{pr().then(c=>{if(!n){if(c.ok){e("ready");return}if(s.current+=1,s.current*pt>=yA){e("timeout");return}l=window.setTimeout(o,pt)}})};return l=window.setTimeout(o,pt),()=>{n=!0,l!==void 0&&window.clearTimeout(l)}},[t]);const r=R(()=>{s.current=0,e("rebooting")},[]),i=R(()=>e("idle"),[]),A=R(()=>{s.current=0,e("rebooting")},[]);return st(()=>({phase:t,start:r,dismiss:i,retry:A}),[t,r,i,A])}function $A({flow:t}){return t.phase==="idle"?null:a("div",{class:"reboot-overlay",role:"alertdialog","aria-modal":"true","aria-label":"Device rebooting",children:a("div",{class:"reboot-dialog card",children:[a("h2",{children:"Device is rebooting"}),t.phase==="rebooting"?a(U,{children:[a("p",{children:"Waiting for the device to come back online. This usually takes 20–60 seconds."}),a("p",{class:"muted","aria-live":"polite",children:"Polling device health…"})]}):null,t.phase==="ready"?a(U,{children:[a(k,{kind:"success",message:"The device is back online."}),a("div",{class:"form-actions",children:a(D,{variant:"primary",onClick:()=>window.location.reload(),children:"Reload panel"})})]}):null,t.phase==="timeout"?a(U,{children:[a(k,{kind:"error",message:"No response after about two minutes. Check the power and network, then reload or keep waiting."}),a("div",{class:"form-actions",children:[a(D,{onClick:t.retry,children:"Keep waiting"}),a(D,{onClick:t.dismiss,children:"Dismiss"})]})]}):null]})})}const xA=1e4;function kA(t){const e=Math.max(0,Math.floor(t)),s=Math.floor(e/86400),r=Math.floor(e%86400/3600),i=Math.floor(e%3600/60),A=e%60,n=[];return s&&n.push(`${s}d`),(s||r)&&n.push(`${r}h`),(s||r||i)&&n.push(`${i}m`),n.push(`${A}s`),n.join(" ")}function SA(t){return Number.isFinite(t)?`${Math.round(t/1024)} KB (${Math.round(t)} bytes)`:String(t)}function EA(){const[t,e]=_(null),[s,r]=_(null),[i,A]=_(!1),[n,l]=_(null),[o,c]=_(null),[h,p]=_(!0),[d,f]=_(null),[b,y]=_(!1),w=wA(),u=R(async()=>{const S=await yi();S.ok?(e(S.data),r(null)):r(S.message),A(!0)},[]),m=R(async()=>{p(!0);const[S,B]=await Promise.all([pr(),wi()]);l(S),c(B),p(!1)},[]);O(()=>{u();const S=window.setInterval(()=>{u()},xA);return()=>window.clearInterval(S)},[u]),O(()=>{m()},[m]);const v=R(async()=>{if(!window.confirm("Reboot the device now? Water metering will be offline for about 20-60 seconds."))return;f(null),y(!0);const B=await Di();y(!1),B.ok?w.start():f(B.message)},[w.start]),M=h&&!n?a("p",{class:"muted",children:"Checking device health…"}):n?n.ok?a(k,{kind:n.data.healty?"success":"error",message:n.data.healty?"Healthcheck is OK.":"Healthcheck reports failure."}):a(k,{kind:"error",message:n.message}):null,T=o?o.ok?a(k,{kind:o.data.ready?"success":"info",message:o.data.ready?"All registered services are ready.":`Not ready: ${o.data.message}`}):o.status===500?a(k,{kind:"info",message:`Not ready: ${o.message}`}):a(k,{kind:"error",message:o.message}):null;return a("div",{class:"stack",children:[a(L,{title:"Device",children:[i?s?a(U,{children:[a(k,{kind:"error",message:s}),a("div",{class:"form-actions",children:a(D,{onClick:()=>{u()},children:"Retry"})})]}):t?a("dl",{class:"kv",children:[a("dt",{children:"Wi-Fi"}),a("dd",{children:a("span",{class:t.wifiStatus==="connected"?"badge badge-on":"badge badge-off",children:t.wifiStatus})}),a("dt",{children:"Free heap"}),a("dd",{children:SA(t.freeHeap)}),a("dt",{children:"Uptime"}),a("dd",{children:kA(t.uptime)}),a("dt",{children:"Last reset reason"}),a("dd",{children:t.lastResetReason})]}):null:a("p",{class:"muted",children:"Loading status…"}),a("p",{class:"muted mt",children:"Status refreshes automatically every 10 seconds."})]}),a(L,{title:"Health",children:[M,T,a("div",{class:"form-actions",children:a(D,{onClick:()=>{m()},disabled:h,children:h?"Checking…":"Refresh health"})})]}),a(L,{title:"Maintenance",children:[a("p",{class:"muted",children:"A reboot briefly interrupts water metering and MQTT reporting. Configuration changes saved on the other tabs only take effect after a reboot."}),d?a(k,{kind:"error",message:d,onClose:()=>f(null)}):null,a("div",{class:"form-actions",children:a(Ri,{onClick:()=>{v()},disabled:b||w.phase!=="idle",children:"Reboot device"})})]}),a($A,{flow:w})]})}const PA=[{id:"status",label:"Status"},{id:"meters",label:"Meters"},{id:"controls",label:"Controls"},{id:"settings",label:"Settings"},{id:"connections",label:"MQTT"},{id:"network",label:"Network"},{id:"backup",label:"Backup"}];function MA(t){switch(t){case"status":return a(EA,{});case"meters":return a(dA,{});case"controls":return a(nA,{});case"settings":return a(vA,{});case"connections":return a(Oi,{});case"network":return a(cA,{});case"backup":return a(mi,{})}}function TA(){const[t,e]=_("status");return a(U,{children:[a("header",{class:"app-header",children:[a("div",{class:"brand",children:[a("svg",{class:"brand-mark",viewBox:"0 0 24 24",width:"20",height:"20","aria-hidden":"true",focusable:"false",children:[a("path",{fill:"currentColor",d:"M12 23c4.4 0 7.5-2.7 7.5-6.7 0-2.3-1-4.3-2.3-6.1-.8 1.6-1.8 2.6-2.9 3.3.4-1.4.2-3.1-.7-5C12.7 6.1 11.3 4.3 10.4 2c-.3 2.3-1.4 4-2.7 5.5C6.4 9.1 4.5 11 4.5 15c0 4 3.1 8 7.5 8z"}),a("path",{fill:"currentColor",opacity:".45",d:"M12 21.2c-1.6 0-2.8-1.1-2.8-2.8 0-1.3.7-2.1 1.5-3 .3.7.8 1.1 1.4 1.4-.2-1.2.1-2.4 1-3.5.9 1.2 1.4 2.6 1.4 4 0 2.3-1.4 3.9-2.5 3.9z"})]}),a("h1",{children:"Neptunus"})]}),a("span",{class:"hint",children:"water metering & rainwater controller"})]}),a(Br,{tabs:PA,active:t,onSelect:e}),a("main",{class:"tab-content",id:`panel-${t}`,role:"tabpanel","aria-labelledby":`tab-${t}`,children:MA(t)})]})}function CA(t){if(t&&typeof t=="object"&&"error"in t){let e=t.error;if(typeof e=="string"&&e.length>0)return e}}function gr(t={}){let e=t.baseUrl??"",s=t.headers??{};async function r(i,A){let n;try{n=await fetch(`${e}${i}`,{...A,headers:{Accept:"application/json",...A?.body===void 0?{}:{"Content-Type":"application/json"},...s}})}catch(h){return A?.signal?.aborted===!0||typeof h=="object"&&h&&h.name==="AbortError"?{ok:!1,message:"Request aborted."}:{ok:!1,message:"Network request failed. Check the device connection and try again."}}let l=await n.text().catch(()=>""),o,c=!1;if(l.length>0)try{o=JSON.parse(l),c=!0}catch{c=!1}if(!n.ok){let h=CA(o);return{ok:!1,status:n.status,message:h??`Request failed with HTTP ${n.status}.`}}return c?{ok:!0,data:o}:{ok:!1,status:n.status,message:`Unexpected response from server (HTTP ${n.status}).`}}return{getSettings(i){return r("/api/network/settings",{signal:i})},saveSettings(i,A){return r("/api/network/settings",{method:"POST",body:JSON.stringify(i),signal:A})},getStatus(i){return r("/api/network/status",{signal:i})},wifiList(i){return r("/api/wifi/list",{signal:i})}}}var Ve=globalThis,Rt=Ve.ShadowRoot&&(Ve.ShadyCSS===void 0||Ve.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ut=Symbol(),Ss=new WeakMap,br=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==Ut)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(Rt&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=Ss.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Ss.set(e,t))}return t}toString(){return this.cssText}},NA=t=>new br(typeof t=="string"?t:t+"",void 0,Ut),Wt=(t,...e)=>new br(t.length===1?t[0]:e.reduce((s,r,i)=>s+(A=>{if(A._$cssResult$===!0)return A.cssText;if(typeof A=="number")return A;throw Error("Value passed to 'css' function must be a 'css' function result: "+A+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[i+1],t[0]),t,Ut),IA=(t,e)=>{if(Rt)t.adoptedStyleSheets=e.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(let s of e){let r=document.createElement("style"),i=Ve.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=s.cssText,t.appendChild(r)}},Es=Rt?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let s="";for(let r of e.cssRules)s+=r.cssText;return NA(s)})(t):t,{is:DA,defineProperty:LA,getOwnPropertyDescriptor:RA,getOwnPropertyNames:UA,getOwnPropertySymbols:WA,getPrototypeOf:HA}=Object,nt=globalThis,Ps=nt.trustedTypes,BA=Ps?Ps.emptyScript:"",FA=nt.reactiveElementPolyfillSupport,Te=(t,e)=>t,wt={toAttribute(t,e){switch(e){case Boolean:t=t?BA:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=t!==null;break;case Number:s=t===null?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch{s=null}}return s}},_r=(t,e)=>!DA(t,e),Ms={attribute:!0,type:String,converter:wt,reflect:!1,useDefault:!1,hasChanged:_r};Symbol.metadata??=Symbol("metadata"),nt.litPropertyMetadata??=new WeakMap;var ue=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Ms){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),r=this.getPropertyDescriptor(t,s,e);r!==void 0&&LA(this.prototype,t,r)}}static getPropertyDescriptor(t,e,s){let{get:r,set:i}=RA(this.prototype,t)??{get(){return this[e]},set(A){this[e]=A}};return{get:r,set(A){let n=r?.call(this);i?.call(this,A),this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ms}static _$Ei(){if(this.hasOwnProperty(Te("elementProperties")))return;let t=HA(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Te("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Te("properties"))){let e=this.properties,s=[...UA(e),...WA(e)];for(let r of s)this.createProperty(r,e[r])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,r]of e)this.elementProperties.set(s,r)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let r=this._$Eu(e,s);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let r of s)e.unshift(Es(r))}else t!==void 0&&e.push(Es(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return IA(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){let s=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,s);if(r!==void 0&&s.reflect===!0){let i=(s.converter?.toAttribute===void 0?wt:s.converter).toAttribute(e,s.type);this._$Em=t,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(t,e){let s=this.constructor,r=s._$Eh.get(t);if(r!==void 0&&this._$Em!==r){let i=s.getPropertyOptions(r),A=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute===void 0?wt:i.converter;this._$Em=r;let n=A.fromAttribute(e,i.type);this[r]=n??this._$Ej?.get(r)??n,this._$Em=null}}requestUpdate(t,e,s,r=!1,i){if(t!==void 0){let A=this.constructor;if(r===!1&&(i=this[t]),s??=A.getPropertyOptions(t),!((s.hasChanged??_r)(i,e)||s.useDefault&&s.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(A._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:r,wrapped:i},A){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,A??e??this[t]),i!==!0||A!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),r===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[r,i]of this._$Ep)this[r]=i;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[r,i]of s){let{wrapped:A}=i,n=this[r];A!==!0||this._$AL.has(r)||n===void 0||this.C(r,void 0,i,n)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};ue.elementStyles=[],ue.shadowRootOptions={mode:"open"},ue[Te("elementProperties")]=new Map,ue[Te("finalized")]=new Map,FA?.({ReactiveElement:ue}),(nt.reactiveElementVersions??=[]).push("2.1.2");var Ht=globalThis,Ts=t=>t,Xe=Ht.trustedTypes,Cs=Xe?Xe.createPolicy("lit-html",{createHTML:t=>t}):void 0,vr="$lit$",X=`lit$${Math.random().toFixed(9).slice(2)}$`,yr="?"+X,OA=`<${yr}>`,ce=document,De=()=>ce.createComment(""),Le=t=>t===null||typeof t!="object"&&typeof t!="function",Bt=Array.isArray,zA=t=>Bt(t)||typeof t?.[Symbol.iterator]=="function",ft=`[ 	
\f\r]`,xe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ns=/-->/g,Is=/>/g,ee=RegExp(`>|${ft}(?:([^\\s"'>=/]+)(${ft}*=${ft}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ds=/'/g,Ls=/"/g,wr=/^(?:script|style|textarea|title)$/i,$=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),be=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),Rs=new WeakMap,se=ce.createTreeWalker(ce,129);function $r(t,e){if(!Bt(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Cs===void 0?e:Cs.createHTML(e)}var qA=(t,e)=>{let s=t.length-1,r=[],i,A=e===2?"<svg>":e===3?"<math>":"",n=xe;for(let l=0;l<s;l++){let o=t[l],c,h,p=-1,d=0;for(;d<o.length&&(n.lastIndex=d,h=n.exec(o),h!==null);)d=n.lastIndex,n===xe?h[1]==="!--"?n=Ns:h[1]===void 0?h[2]===void 0?h[3]!==void 0&&(n=ee):(wr.test(h[2])&&(i=RegExp("</"+h[2],"g")),n=ee):n=Is:n===ee?h[0]===">"?(n=i??xe,p=-1):h[1]===void 0?p=-2:(p=n.lastIndex-h[2].length,c=h[1],n=h[3]===void 0?ee:h[3]==='"'?Ls:Ds):n===Ls||n===Ds?n=ee:n===Ns||n===Is?n=xe:(n=ee,i=void 0);let f=n===ee&&t[l+1].startsWith("/>")?" ":"";A+=n===xe?o+OA:p>=0?(r.push(c),o.slice(0,p)+vr+o.slice(p)+X+f):o+X+(p===-2?l:f)}return[$r(t,A+(t[s]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]},$t=class xr{constructor({strings:e,_$litType$:s},r){let i;this.parts=[];let A=0,n=0,l=e.length-1,o=this.parts,[c,h]=qA(e,s);if(this.el=xr.createElement(c,r),se.currentNode=this.el.content,s===2||s===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(i=se.nextNode())!==null&&o.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(let p of i.getAttributeNames())if(p.endsWith(vr)){let d=h[n++],f=i.getAttribute(p).split(X),b=/([.?@])?(.*)/.exec(d);o.push({type:1,index:A,name:b[2],strings:f,ctor:b[1]==="."?VA:b[1]==="?"?YA:b[1]==="@"?ZA:at}),i.removeAttribute(p)}else p.startsWith(X)&&(o.push({type:6,index:A}),i.removeAttribute(p));if(wr.test(i.tagName)){let p=i.textContent.split(X),d=p.length-1;if(d>0){i.textContent=Xe?Xe.emptyScript:"";for(let f=0;f<d;f++)i.append(p[f],De()),se.nextNode(),o.push({type:2,index:++A});i.append(p[d],De())}}}else if(i.nodeType===8)if(i.data===yr)o.push({type:2,index:A});else{let p=-1;for(;(p=i.data.indexOf(X,p+1))!==-1;)o.push({type:7,index:A}),p+=X.length-1}A++}}static createElement(e,s){let r=ce.createElement("template");return r.innerHTML=e,r}};function _e(t,e,s=t,r){if(e===be)return e;let i=r===void 0?s._$Cl:s._$Co?.[r],A=Le(e)?void 0:e._$litDirective$;return i?.constructor!==A&&(i?._$AO?.(!1),A===void 0?i=void 0:(i=new A(t),i._$AT(t,s,r)),r===void 0?s._$Cl=i:(s._$Co??=[])[r]=i),i!==void 0&&(e=_e(t,i._$AS(t,e.values),i,r)),e}var jA=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:s}=this._$AD,r=(t?.creationScope??ce).importNode(e,!0);se.currentNode=r;let i=se.nextNode(),A=0,n=0,l=s[0];for(;l!==void 0;){if(A===l.index){let o;l.type===2?o=new Ft(i,i.nextSibling,this,t):l.type===1?o=new l.ctor(i,l.name,l.strings,this,t):l.type===6&&(o=new GA(i,this,t)),this._$AV.push(o),l=s[++n]}A!==l?.index&&(i=se.nextNode(),A++)}return se.currentNode=ce,r}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings===void 0?s._$AI(t[e]):(s._$AI(t,s,e),e+=s.strings.length-2)),e++}},Ft=class kr{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,s,r,i){this.type=2,this._$AH=x,this._$AN=void 0,this._$AA=e,this._$AB=s,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,s=this._$AM;return s!==void 0&&e?.nodeType===11&&(e=s.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,s=this){e=_e(this,e,s),Le(e)?e===x||e==null||e===""?(this._$AH!==x&&this._$AR(),this._$AH=x):e!==this._$AH&&e!==be&&this._(e):e._$litType$===void 0?e.nodeType===void 0?zA(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==x&&Le(this._$AH)?this._$AA.nextSibling.data=e:this.T(ce.createTextNode(e)),this._$AH=e}$(e){let{values:s,_$litType$:r}=e,i=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=$t.createElement($r(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(s);else{let A=new jA(i,this),n=A.u(this.options);A.p(s),this.T(n),this._$AH=A}}_$AC(e){let s=Rs.get(e.strings);return s===void 0&&Rs.set(e.strings,s=new $t(e)),s}k(e){Bt(this._$AH)||(this._$AH=[],this._$AR());let s=this._$AH,r,i=0;for(let A of e)i===s.length?s.push(r=new kr(this.O(De()),this.O(De()),this,this.options)):r=s[i],r._$AI(A),i++;i<s.length&&(this._$AR(r&&r._$AB.nextSibling,i),s.length=i)}_$AR(e=this._$AA.nextSibling,s){for(this._$AP?.(!1,!0,s);e!==this._$AB;){let r=Ts(e).nextSibling;Ts(e).remove(),e=r}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},at=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,r,i){this.type=1,this._$AH=x,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=i,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=x}_$AI(t,e=this,s,r){let i=this.strings,A=!1;if(i===void 0)t=_e(this,t,e,0),A=!Le(t)||t!==this._$AH&&t!==be,A&&(this._$AH=t);else{let n=t,l,o;for(t=i[0],l=0;l<i.length-1;l++)o=_e(this,n[s+l],e,l),o===be&&(o=this._$AH[l]),A||=!Le(o)||o!==this._$AH[l],o===x?t=x:t!==x&&(t+=(o??"")+i[l+1]),this._$AH[l]=o}A&&!r&&this.j(t)}j(t){t===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},VA=class extends at{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===x?void 0:t}},YA=class extends at{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==x)}},ZA=class extends at{constructor(t,e,s,r,i){super(t,e,s,r,i),this.type=5}_$AI(t,e=this){if((t=_e(this,t,e,0)??x)===be)return;let s=this._$AH,r=t===x&&s!==x||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,i=t!==x&&(s===x||r);r&&this.element.removeEventListener(this.name,this,s),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},GA=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){_e(this,t)}},QA=Ht.litHtmlPolyfillSupport;QA?.($t,Ft),(Ht.litHtmlVersions??=[]).push("3.3.3");var JA=(t,e,s)=>{let r=s?.renderBefore??e,i=r._$litPart$;if(i===void 0){let A=s?.renderBefore??null;r._$litPart$=i=new Ft(e.insertBefore(De(),A),A,void 0,s??{})}return i._$AI(t),i},Ot=globalThis,re=class extends ue{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=JA(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return be}};re._$litElement$=!0,re.finalized=!0,Ot.litElementHydrateSupport?.({LitElement:re});var XA=Ot.litElementPolyfillSupport;XA?.({LitElement:re}),(Ot.litElementVersions??=[]).push("4.2.2");var KA={ethernet:"Ethernet",wifi:"Wi-Fi",wifi_ap:"Wi-Fi AP"};function en(t){return t===void 0||Number.isNaN(t)?"Unknown":t>=-55?"Excellent":t>=-67?"Good":t>=-75?"Fair":"Weak"}function tn(t){return t===1?"Full":t===0?"Half":`Unknown (${t})`}function sn(t){let e=s=>String(s).padStart(2,"0");return`${e(t.getHours())}:${e(t.getMinutes())}:${e(t.getSeconds())}`}var Ae,rn=(Ae=class extends re{constructor(...e){super(...e),this.baseUrl="",this.pollIntervalMs=1e4,this.errorMessage="",this.loading=!1,this.refreshSeq=0,this.handleRetry=()=>{this.refresh()}}connectedCallback(){super.connectedCallback(),this.refresh(),this.startPolling()}disconnectedCallback(){super.disconnectedCallback(),this.stopPolling()}updated(e){e.has("pollIntervalMs")&&this.startPolling();let s=e.get("baseUrl");e.has("baseUrl")&&s!==void 0&&s!==this.baseUrl&&(this.client=void 0,this.refresh())}render(){let e=this.status;return $`
      <div class="card">
        <header class="head">
          ${e?$`<span class="badge badge-${e.mode}">${KA[e.mode]}</span>`:$`<span class="badge badge-unknown">Unknown</span>`}
          ${e?$`<span class="state ${e.connected?"state-up":"state-down"}">
                ${e.connected?"Connected":"Disconnected"}
              </span>`:x}
          ${this.loading?$`<span class="muted loading">Refreshing…</span>`:x}
        </header>

        ${e?.fallbackAP?$`<div class="banner banner-warn" role="alert">
              Fallback AP active — the device could not reach the configured network.
            </div>`:x}
        ${this.errorMessage?$`<div class="banner banner-error" role="alert">
              <span>${this.errorMessage}</span>
              <button type="button" @click=${this.handleRetry}>Retry</button>
            </div>`:x}
        ${e?this.renderSections(e):$`<p class="muted">Loading network status…</p>`}

        <footer class="muted foot">
          ${this.lastUpdated?$`Updated ${sn(this.lastUpdated)}`:$`Waiting for data…`}
        </footer>
      </div>
    `}renderSections(e){switch(e.mode){case"wifi":return this.renderWifi(e);case"wifi_ap":return this.renderAp(e);case"ethernet":return this.renderEthernet(e)}}renderWifi(e){return $`
      <section>
        <h2>Wi-Fi</h2>
        <dl class="rows">
          ${this.row("SSID",e.ssid)}
          ${this.row("Signal",e.rssi===void 0?void 0:`${e.rssi} dBm (${en(e.rssi)})`)}
          ${this.row("IP address",e.ip)} ${this.row("MAC address",e.mac)}
        </dl>
      </section>
    `}renderAp(e){let s=e.ap;return $`
      <section>
        <h2>Access point</h2>
        <dl class="rows">
          ${this.row("SSID",s?.ssid)} ${this.row("IP address",s?.ip)}
          ${this.row("Stations",s?.stations)}
        </dl>
      </section>
    `}renderEthernet(e){let s=e.eth;return $`
      <section>
        <h2>Ethernet</h2>
        <dl class="rows">
          ${this.row("IP address",s?.ip)} ${this.row("MAC address",s?.mac)}
          ${this.row("Link",s===void 0?void 0:s.linkUp?"Up":"Down")}
          ${this.row("Speed",s===void 0?void 0:`${s.speed} Mbps`)}
          ${this.row("Duplex",s===void 0?void 0:tn(s.duplex))}
        </dl>
      </section>
    `}row(e,s){return s===void 0||s===""?x:$`<dt>${e}</dt>
          <dd>${s}</dd>`}ensureClient(){return(!this.client||this.clientBaseUrl!==this.baseUrl)&&(this.client=gr({baseUrl:this.baseUrl}),this.clientBaseUrl=this.baseUrl),this.client}async refresh(){let e=++this.refreshSeq;this.loading=!0;let s=await this.ensureClient().getStatus();if(e===this.refreshSeq){if(this.loading=!1,s.ok){this.status=s.data,this.errorMessage="",this.lastUpdated=new Date;return}this.errorMessage=s.message,this.dispatchEvent(new CustomEvent("edn-error",{detail:{message:s.message},bubbles:!0,composed:!0}))}}startPolling(){this.stopPolling();let e=Number(this.pollIntervalMs);!Number.isFinite(e)||e<=0||(this.timerId=setInterval(()=>{typeof document<"u"&&document.hidden||this.refresh()},e))}stopPolling(){this.timerId!==void 0&&(clearInterval(this.timerId),this.timerId=void 0)}},Ae.properties={baseUrl:{type:String,attribute:"base-url"},pollIntervalMs:{type:Number,attribute:"poll-interval-ms"},status:{state:!0},errorMessage:{state:!0},lastUpdated:{state:!0},loading:{state:!0}},Ae.styles=Wt`
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
  `,Ae);typeof customElements<"u"&&!customElements.get("edn-network-status")&&customElements.define("edn-network-status",rn);var He=32,ke=64,mt=8,An=5e3,nn=new TextEncoder;function Be(t){return nn.encode(t).length}function Us(t){return t.isAPMode?"ap":"station"}var ne,an=(ne=class extends re{constructor(...e){super(...e),this.baseUrl="",this.settings=null,this.loading=!1,this.submitting=!1,this.errorMessage="",this.successMessage="",this.draftMode="station",this.draftWifiSSID="",this.draftWifiPassword="",this.draftWifiPasswordDirty=!1,this.draftApSSID="",this.draftApHasPassword=!1,this.draftApPassword="",this.draftApPasswordDirty=!1,this.fieldErrors={},this.scanning=!1,this.scanResults=[],this.scanError="",this.loadToken=0,this.settingsBaseUrl=null,this.handleWifiSSIDInput=s=>{this.draftWifiSSID=s.target.value},this.handleWifiPasswordInput=s=>{this.draftWifiPassword=s.target.value,this.draftWifiPasswordDirty=!0},this.handleApSSIDInput=s=>{this.draftApSSID=s.target.value},this.handleApPasswordInput=s=>{this.draftApPassword=s.target.value,this.draftApPasswordDirty=!0},this.handleApHasPasswordChange=s=>{this.draftApHasPassword=s.target.checked,this.draftApHasPassword||(this.draftApPassword="",this.draftApPasswordDirty=!1,this.fieldErrors={...this.fieldErrors,wifiAPPassword:void 0})},this.handlePickSsid=s=>{this.draftMode!=="station"&&(this.draftMode="station"),this.draftWifiSSID=s,this.fieldErrors={...this.fieldErrors,wifiSSID:void 0}},this.handleSubmit=s=>{s.preventDefault(),this.handleSave()},this.handleRetry=()=>{this.load()}}connectedCallback(){super.connectedCallback(),this.load()}disconnectedCallback(){super.disconnectedCallback(),this.scanController?.abort(),this.scanController=void 0}updated(e){let s=e.get("baseUrl");e.has("baseUrl")&&s!==void 0&&s!==this.baseUrl&&(this.client=void 0,this.scanResults=[],this.scanError="",this.load())}render(){let e=this.settings;return $`
      <div class="card">
        <h1>Network settings</h1>
        ${this.errorMessage?$`<div class="banner banner-error" role="alert">
              <span>${this.errorMessage}</span>
              <button type="button" @click=${this.handleRetry}>Retry</button>
            </div>`:x}
        ${this.successMessage?$`<div class="banner banner-success" role="status">${this.successMessage}</div>`:x}
        ${e?$`${this.renderForm(e)} ${this.renderScan()}`:this.loading?$`<p class="status">Loading settings…</p>`:$`<p class="status">Settings unavailable.</p>`}
      </div>
    `}renderForm(e){return $`
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

        ${this.draftMode==="station"?this.renderStation(e):this.renderAccessPoint(e)}

        <div class="actions">
          <button class="primary" type="submit" ?disabled=${this.submitting||!this.dirty}>
            ${this.submitting?"Saving…":"Save"}
          </button>
          ${this.dirty?$`<span class="muted">Unsaved changes</span>`:x}
        </div>
      </form>
    `}renderStation(e){return $`
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
            placeholder=${e.hasWifiPassword?"Leave blank to keep saved password":"No password set"}
            .value=${this.draftWifiPassword}
            @input=${this.handleWifiPasswordInput}
          />
        </label>
        ${e.hasWifiPassword?$`<p class="hint">Password saved •••• (leave blank to keep)</p>`:x}
        ${this.renderPasswordClearWarning("wifiPassword")}
        ${this.renderFieldError("wifiPassword")}
      </section>
    `}renderAccessPoint(e){return $`
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
                  placeholder=${e.hasWifiAPPassword?"Leave blank to keep saved password":"At least 8 characters"}
                  .value=${this.draftApPassword}
                  @input=${this.handleApPasswordInput}
                />
              </label>
              ${e.hasWifiAPPassword?$`<p class="hint">Password saved •••• (leave blank to keep)</p>`:x}
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
              ${this.scanResults.map(e=>this.renderNetwork(e))}
            </ul>`:x}
      </section>
    `}renderNetwork(e){return $`
      <li>
        <button type="button" class="network" @click=${()=>this.handlePickSsid(e.ssid)}>
          <span class="ssid">${e.ssid}</span>
          <span class="meta">
            ${e.encrypted?$`<span class="lock" title="Encrypted" aria-label="Encrypted">🔒</span>`:x}
            ${e.rssi} dBm · Ch ${e.channel}
          </span>
        </button>
      </li>
    `}renderFieldError(e){let s=this.fieldErrors[e];return s?$`<p class="field-error" role="alert">${s}</p>`:x}renderPasswordClearWarning(e){return(e==="wifiPassword"?this.draftWifiPasswordDirty&&this.draftWifiPassword===""&&this.settings?.hasWifiPassword===!0:this.draftApPasswordDirty&&this.draftApPassword===""&&this.draftApHasPassword&&this.settings?.hasWifiAPPassword===!0)?$`<p class="clear-warning" role="alert">
          Warning: saving now will remove the stored password.
        </p>`:x}get dirty(){let e=this.settings;return e?this.draftMode!==Us(e)||this.draftWifiSSID!==e.wifiSSID||this.draftApSSID!==e.wifiAPSSID||this.draftApHasPassword!==e.wifiAPHasPassword||this.draftWifiPasswordDirty||this.draftApPasswordDirty:!1}ensureClient(){return(!this.client||this.clientBaseUrl!==this.baseUrl)&&(this.client=gr({baseUrl:this.baseUrl}),this.clientBaseUrl=this.baseUrl),this.client}async load(){let e=++this.loadToken;this.loading=!0;let s=await this.ensureClient().getSettings();if(e!==this.loadToken){this.settingsBaseUrl!==this.baseUrl&&(this.settings=null);return}if(this.loading=!1,s.ok){this.applyServerSettings(s.data),this.errorMessage="";return}this.settingsBaseUrl!==this.baseUrl&&(this.settings=null),this.errorMessage=s.message,this.emitError(s.message)}applyServerSettings(e){this.settings=e,this.settingsBaseUrl=this.baseUrl,this.draftMode=Us(e),this.draftWifiSSID=e.wifiSSID,this.draftApSSID=e.wifiAPSSID,this.draftApHasPassword=e.wifiAPHasPassword,this.draftWifiPassword="",this.draftWifiPasswordDirty=!1,this.draftApPassword="",this.draftApPasswordDirty=!1,this.fieldErrors={}}validate(){let e=this.settings,s={};if(!e)return s;let r=this.draftMode==="ap";if(Be(this.draftWifiSSID)>He&&(s.wifiSSID=`Wi-Fi name must be ${He} characters or fewer.`),Be(this.draftApSSID)>He&&(s.wifiAPSSID=`Access point name must be ${He} characters or fewer.`),r?this.draftApSSID.length===0&&(s.wifiAPSSID="Access point name is required in AP mode."):this.draftWifiSSID.length===0&&(s.wifiSSID="Wi-Fi name is required in station mode."),this.draftWifiPasswordDirty&&Be(this.draftWifiPassword)>ke&&(s.wifiPassword=`Wi-Fi password must be ${ke} characters or fewer.`),this.draftApHasPassword)if(this.draftApPasswordDirty){let i=Be(this.draftApPassword);(i<mt||i>ke)&&(s.wifiAPPassword=`Access point password must be ${mt}–${ke} characters.`)}else e.hasWifiAPPassword||(s.wifiAPPassword=`Enter an access point password (${mt}–${ke} characters).`);return s}buildPatch(){let e=this.settings,s={};if(!e)return s;let r=this.draftMode==="ap";return r!==e.isAPMode&&(s.isAPMode=r),this.draftWifiSSID!==e.wifiSSID&&(s.wifiSSID=this.draftWifiSSID),this.draftWifiPasswordDirty&&(s.wifiPassword=this.draftWifiPassword),this.draftApSSID!==e.wifiAPSSID&&(s.wifiAPSSID=this.draftApSSID),this.draftApHasPassword!==e.wifiAPHasPassword&&(s.wifiAPHasPassword=this.draftApHasPassword),this.draftApHasPassword&&this.draftApPasswordDirty&&(s.wifiAPPassword=this.draftApPassword),s}async handleSave(){if(this.submitting||!this.settings)return;let e=this.validate();if(this.fieldErrors=e,Object.keys(e).length>0)return;let s=this.buildPatch();if(Object.keys(s).length===0)return;this.submitting=!0,this.errorMessage="",this.successMessage="";let r=await this.ensureClient().saveSettings(s);if(this.submitting=!1,r.ok){this.applyServerSettings(r.data),this.successMessage="Settings saved.",this.dispatchEvent(new CustomEvent("edn-saved",{detail:r.data,bubbles:!0,composed:!0}));return}let i=r.status===void 0?"Could not confirm the save — the device may have applied the changes and reconnected. Check the status widget or retry.":r.message;this.errorMessage=i,this.emitError(i)}async handleScan(){if(this.scanning)return;this.scanning=!0,this.scanError="";let e=new AbortController;this.scanController=e;let s,r=new Promise(A=>{s=setTimeout(()=>{e.abort(),A({ok:!1,message:"Wi-Fi scan timed out after 5 seconds."})},An)}),i=await Promise.race([this.ensureClient().wifiList(e.signal),r]);if(s!==void 0&&clearTimeout(s),this.scanController===e&&(this.scanController=void 0),this.scanning=!1,i.ok){this.scanResults=[...i.data.networks].sort((A,n)=>n.rssi-A.rssi);return}i.message!=="Request aborted."&&(this.scanError=i.message,this.emitError(i.message))}emitError(e){this.dispatchEvent(new CustomEvent("edn-error",{detail:{message:e},bubbles:!0,composed:!0}))}setMode(e){this.draftMode!==e&&(this.draftMode=e,this.fieldErrors={})}},ne.properties={baseUrl:{type:String,attribute:"base-url"},settings:{state:!0},loading:{state:!0},submitting:{state:!0},errorMessage:{state:!0},successMessage:{state:!0},draftMode:{state:!0},draftWifiSSID:{state:!0},draftWifiPassword:{state:!0},draftWifiPasswordDirty:{state:!0},draftApSSID:{state:!0},draftApHasPassword:{state:!0},draftApPassword:{state:!0},draftApPasswordDirty:{state:!0},fieldErrors:{state:!0},scanning:{state:!0},scanResults:{state:!0},scanError:{state:!0}},ne.styles=Wt`
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
  `,ne);typeof customElements<"u"&&!customElements.get("edn-network-settings")&&customElements.define("edn-network-settings",an);var on=[{id:"status",label:"Status"},{id:"settings",label:"Network settings"}],ae,ln=(ae=class extends re{constructor(...e){super(...e),this.baseUrl="",this.pollIntervalMs=1e4,this.activeTab="status"}render(){return $`
      <div class="tabs" role="tablist" aria-label="Network">
        ${on.map(e=>$`
            <button
              type="button"
              role="tab"
              id="tab-${e.id}"
              aria-controls="panel-${e.id}"
              aria-selected=${this.activeTab===e.id}
              @click=${()=>this.selectTab(e.id)}
            >
              ${e.label}
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
    `}selectTab(e){this.activeTab!==e&&(this.activeTab=e,this.dispatchEvent(new CustomEvent("edn-tab-change",{detail:{tab:e},bubbles:!0,composed:!0})))}},ae.properties={baseUrl:{type:String,attribute:"base-url"},pollIntervalMs:{type:Number,attribute:"poll-interval-ms"},activeTab:{state:!0}},ae.styles=Wt`
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
  `,ae);typeof customElements<"u"&&!customElements.get("edn-network-page")&&customElements.define("edn-network-page",ln);const Ws=document.getElementById("app");Ws&&Lr(a(TA,{}),Ws);
