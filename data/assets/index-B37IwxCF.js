(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function A(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=A(r);fetch(r.href,i)}})();var Ne,M,Gt,Z,mt,Qt,Jt,Oe,ke,pe,Xt,tt,Qe,Je,Ce={},Ie=[],MA=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,He=Array.isArray;function V(t,e){for(var A in e)t[A]=e[A];return t}function At(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function PA(t,e,A){var s,r,i,a={};for(i in e)i=="key"?s=e[i]:i=="ref"?r=e[i]:a[i]=e[i];if(arguments.length>2&&(a.children=arguments.length>3?Ne.call(arguments,2):A),typeof t=="function"&&t.defaultProps!=null)for(i in t.defaultProps)a[i]===void 0&&(a[i]=t.defaultProps[i]);return Me(t,a,s,r,null)}function Me(t,e,A,s,r){var i={type:t,props:e,key:A,ref:s,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:r??++Gt,__i:-1,__u:0};return r==null&&M.vnode!=null&&M.vnode(i),i}function N(t){return t.children}function Pe(t,e){this.props=t,this.context=e}function Ae(t,e){if(e==null)return t.__?Ae(t.__,t.__i+1):null;for(var A;e<t.__k.length;e++)if((A=t.__k[e])!=null&&A.__e!=null)return A.__e;return typeof t.type=="function"?Ae(t):null}function EA(t){if(t.__P&&t.__d){var e=t.__v,A=e.__e,s=[],r=[],i=V({},e);i.__v=e.__v+1,M.vnode&&M.vnode(i),rt(t.__P,i,e,t.__n,t.__P.namespaceURI,32&e.__u?[A]:null,s,A??Ae(e),!!(32&e.__u),r),i.__v=e.__v,i.__.__k[i.__i]=i,rA(s,i,r),e.__e=e.__=null,i.__e!=A&&Kt(i)}}function Kt(t){if((t=t.__)!=null&&t.__c!=null)return t.__e=t.__c.base=null,t.__k.some(function(e){if(e!=null&&e.__e!=null)return t.__e=t.__c.base=e.__e}),Kt(t)}function gt(t){(!t.__d&&(t.__d=!0)&&Z.push(t)&&!We.__r++||mt!=M.debounceRendering)&&((mt=M.debounceRendering)||Qt)(We)}function We(){try{for(var t,e=1;Z.length;)Z.length>e&&Z.sort(Jt),t=Z.shift(),e=Z.length,EA(t)}finally{Z.length=We.__r=0}}function eA(t,e,A,s,r,i,a,c,o,u,h){var f,l,p,_,y,w,d=s&&s.__k||Ie,m=e.length;for(o=TA(A,e,d,o,m),f=0;f<m;f++)(p=A.__k[f])!=null&&(l=p.__i!=-1&&d[p.__i]||Ce,p.__i=f,w=rt(t,p,l,r,i,a,c,o,u,h),_=p.__e,p.ref&&l.ref!=p.ref&&(l.ref&&st(l.ref,null,p),h.push(p.ref,p.__c||_,p)),y==null&&_!=null&&(y=_),4&p.__u?(o=tA(p,o,t),l.__e&&(l.__e=null)):typeof p.type=="function"&&w!==void 0?o=w:_&&(o=_.nextSibling),p.__u&=-7);return A.__e=y,o}function TA(t,e,A,s,r){var i,a,c,o,u,h=A.length,f=h,l=0;for(t.__k=new Array(r),i=0;i<r;i++)(a=e[i])!=null&&typeof a!="boolean"&&typeof a!="function"?(typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?a=t.__k[i]=Me(null,a,null,null,null):He(a)?a=t.__k[i]=Me(N,{children:a},null,null,null):a.constructor===void 0&&a.__b>0?a=t.__k[i]=Me(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):t.__k[i]=a,o=i+l,a.__=t,a.__b=t.__b+1,c=null,(u=a.__i=CA(a,A,o,f))!=-1&&(f--,(c=A[u])&&(c.__u|=2)),c==null||c.__v==null?(u==-1&&(r>h?l--:r<h&&l++),typeof a.type!="function"&&(a.__u|=4)):u!=o&&(u==o-1?l--:u==o+1?l++:(u>o?l--:l++,a.__u|=4))):t.__k[i]=null;if(f)for(i=0;i<h;i++)(c=A[i])!=null&&(2&c.__u)==0&&(c.__e==s&&(s=Ae(c)),nA(c,c));return s}function tA(t,e,A){var s,r;if(typeof t.type=="function"){for(s=t.__k,r=0;s&&r<s.length;r++)s[r]&&(s[r].__=t,e=tA(s[r],e,A));return e}t.__e!=e&&(e&&t.type&&!e.parentNode&&(e=Ae(t)),e=A.insertBefore(t.__e,e||null));do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function CA(t,e,A,s){var r,i,a,c=t.key,o=t.type,u=e[A],h=u!=null&&(2&u.__u)==0;if(u===null&&c==null||h&&c==u.key&&o==u.type)return A;if(s>(h?1:0)){for(r=A-1,i=A+1;r>=0||i<e.length;)if((u=e[a=r>=0?r--:i++])!=null&&(2&u.__u)==0&&c==u.key&&o==u.type)return a}return-1}function _t(t,e,A){e[0]=="-"?t.setProperty(e,A??""):t[e]=A==null?"":typeof A!="number"||MA.test(e)?A:A+"px"}function we(t,e,A,s,r){var i,a;e:if(e=="style")if(typeof A=="string")t.style.cssText=A;else{if(typeof s=="string"&&(t.style.cssText=s=""),s)for(e in s)A&&e in A||_t(t.style,e,"");if(A)for(e in A)s&&A[e]==s[e]||_t(t.style,e,A[e])}else if(e[0]=="o"&&e[1]=="n")i=e!=(e=e.replace(Xt,"$1")),a=e.toLowerCase(),e=a in t||e=="onFocusOut"||e=="onFocusIn"?a.slice(2):e.slice(2),t.l||(t.l={}),t.l[e+i]=A,A?s?A[pe]=s[pe]:(A[pe]=tt,t.addEventListener(e,i?Je:Qe,i)):t.removeEventListener(e,i?Je:Qe,i);else{if(r=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in t)try{t[e]=A??"";break e}catch{}typeof A=="function"||(A==null||A===!1&&e[4]!="-"?t.removeAttribute(e):t.setAttribute(e,e=="popover"&&A==1?"":A))}}function bt(t){return function(e){if(this.l){var A=this.l[e.type+t];if(e[ke]==null)e[ke]=tt++;else if(e[ke]<A[pe])return;return A(M.event?M.event(e):e)}}}function rt(t,e,A,s,r,i,a,c,o,u){var h,f,l,p,_,y,w,d,m,v,P,E,k,U,Y,R,C=e.type;if(e.constructor!==void 0)return null;128&A.__u&&(o=!!(32&A.__u),i=[c=e.__e=A.__e]),(h=M.__b)&&h(e);e:if(typeof C=="function"){f=a.length;try{if(m=e.props,v=C.prototype&&C.prototype.render,P=(h=C.contextType)&&s[h.__c],E=h?P?P.props.value:h.__:s,A.__c?d=(l=e.__c=A.__c).__=l.__E:(v?e.__c=l=new C(m,E):(e.__c=l=new Pe(m,E),l.constructor=C,l.render=WA),P&&P.sub(l),l.state||(l.state={}),l.__n=s,p=l.__d=!0,l.__h=[],l._sb=[]),v&&l.__s==null&&(l.__s=l.state),v&&C.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=V({},l.__s)),V(l.__s,C.getDerivedStateFromProps(m,l.__s))),_=l.props,y=l.state,l.__v=e,p)v&&C.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),v&&l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(v&&C.getDerivedStateFromProps==null&&m!==_&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(m,E),e.__v==A.__v||!l.__e&&l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(m,l.__s,E)===!1){e.__v!=A.__v&&(l.props=m,l.state=l.__s,l.__d=!1),e.__e=A.__e,e.__k=A.__k,e.__k.some(function(j){j&&(j.__=e)}),Ie.push.apply(l.__h,l._sb),l._sb=[],l.__h.length&&a.push(l),c=Ae(A);break e}l.componentWillUpdate!=null&&l.componentWillUpdate(m,l.__s,E),v&&l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(_,y,w)})}if(l.context=E,l.props=m,l.__P=t,l.__e=!1,k=M.__r,U=0,v)l.state=l.__s,l.__d=!1,k&&k(e),h=l.render(l.props,l.state,l.context),Ie.push.apply(l.__h,l._sb),l._sb=[];else do l.__d=!1,k&&k(e),h=l.render(l.props,l.state,l.context),l.state=l.__s;while(l.__d&&++U<25);l.state=l.__s,l.getChildContext!=null&&(s=V(V({},s),l.getChildContext())),v&&!p&&l.getSnapshotBeforeUpdate!=null&&(w=l.getSnapshotBeforeUpdate(_,y)),Y=h!=null&&h.type===N&&h.key==null?sA(h.props.children):h,c=eA(t,He(Y)?Y:[Y],e,A,s,r,i,a,c,o,u),l.base=e.__e,e.__u&=-161,l.__h.length&&a.push(l),d&&(l.__E=l.__=null)}catch(j){if(a.length=f,e.__v=null,o||i!=null){if(j.then){for(e.__u|=o?160:128;c&&c.nodeType==8&&c.nextSibling;)c=c.nextSibling;i!=null&&(i[i.indexOf(c)]=null),e.__e=c}else if(i!=null)for(R=i.length;R--;)At(i[R])}else e.__e=A.__e;e.__k==null&&(e.__k=A.__k||[]),j.then||AA(e),M.__e(j,e,A)}}else i==null&&e.__v==A.__v?(e.__k=A.__k,e.__e=A.__e):c=e.__e=IA(A.__e,e,A,s,r,i,a,o,u);return(h=M.diffed)&&h(e),128&e.__u?void 0:c}function AA(t){t&&(t.__c&&(t.__c.__e=!0),t.__k&&t.__k.some(AA))}function rA(t,e,A){for(var s=0;s<A.length;s++)st(A[s],A[++s],A[++s]);M.__c&&M.__c(e,t),t.some(function(r){try{t=r.__h,r.__h=[],t.some(function(i){i.call(r)})}catch(i){M.__e(i,r.__v)}})}function sA(t){return typeof t!="object"||t==null||t.__b>0?t:He(t)?t.map(sA):t.constructor!==void 0?null:V({},t)}function IA(t,e,A,s,r,i,a,c,o){var u,h,f,l,p,_,y,w=A.props||Ce,d=e.props,m=e.type;if(m=="svg"?r="http://www.w3.org/2000/svg":m=="math"?r="http://www.w3.org/1998/Math/MathML":r||(r="http://www.w3.org/1999/xhtml"),i!=null){for(u=0;u<i.length;u++)if((p=i[u])&&"setAttribute"in p==!!m&&(m?p.localName==m:p.nodeType==3)){t=p,i[u]=null;break}}if(t==null){if(m==null)return document.createTextNode(d);t=document.createElementNS(r,m,d.is&&d),c&&(M.__m&&M.__m(e,i),c=!1),i=null}if(m==null)w===d||c&&t.data==d||(t.data=d);else{if(i=m=="textarea"&&d.defaultValue!=null?null:i&&Ne.call(t.childNodes),!c&&i!=null)for(w={},u=0;u<t.attributes.length;u++)w[(p=t.attributes[u]).name]=p.value;for(u in w)p=w[u],u=="dangerouslySetInnerHTML"?f=p:u=="children"||u in d||u=="value"&&"defaultValue"in d||u=="checked"&&"defaultChecked"in d||we(t,u,null,p,r);for(u in d)p=d[u],u=="children"?l=p:u=="dangerouslySetInnerHTML"?h=p:u=="value"?_=p:u=="checked"?y=p:c&&typeof p!="function"||w[u]===p||we(t,u,p,w[u],r);if(h)c||f&&(h.__html==f.__html||h.__html==t.innerHTML)||(t.innerHTML=h.__html),e.__k=[];else if(f&&(t.innerHTML=""),eA(e.type=="template"?t.content:t,He(l)?l:[l],e,A,s,m=="foreignObject"?"http://www.w3.org/1999/xhtml":r,i,a,i?i[0]:A.__k&&Ae(A,0),c,o),i!=null)for(u=i.length;u--;)At(i[u]);c&&m!="textarea"||(u="value",m=="progress"&&_==null?t.removeAttribute("value"):_!=null&&(_!==t[u]||m=="progress"&&!_||m=="option"&&_!=w[u])&&we(t,u,_,w[u],r),u="checked",y!=null&&y!=t[u]&&we(t,u,y,w[u],r))}return t}function st(t,e,A){try{if(typeof t=="function"){var s=typeof t.__u=="function";s&&t.__u(),s&&e==null||(t.__u=t(e))}else t.current=e}catch(r){M.__e(r,A)}}function nA(t,e,A){var s,r;if(M.unmount&&M.unmount(t),(s=t.ref)&&(s.current&&s.current!=t.__e||st(s,null,e)),(s=t.__c)!=null){if(s.componentWillUnmount)try{s.componentWillUnmount()}catch(i){M.__e(i,e)}s.base=s.__P=s.__n=null}if(s=t.__k)for(r=0;r<s.length;r++)s[r]&&nA(s[r],e,A||typeof t.type!="function");A||At(t.__e),t.__c=t.__=t.__e=void 0}function WA(t,e,A){return this.constructor(t,A)}function DA(t,e,A){var s,r,i,a;e==document&&(e=document.documentElement),M.__&&M.__(t,e),r=(s=!1)?null:e.__k,i=[],a=[],rt(e,t=e.__k=PA(N,null,[t]),r||Ce,Ce,e.namespaceURI,r?null:e.firstChild?Ne.call(e.childNodes):null,i,r?r.__e:e.firstChild,s,a),rA(i,t,a),t.props.children=null}Ne=Ie.slice,M={__e:function(t,e,A,s){for(var r,i,a;e=e.__;)if((r=e.__c)&&!r.__)try{if((i=r.constructor)&&i.getDerivedStateFromError!=null&&(r.setState(i.getDerivedStateFromError(t)),a=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(t,s||{}),a=r.__d),a)return r.__E=r}catch(c){t=c}throw t}},Gt=0,Pe.prototype.setState=function(t,e){var A;A=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=V({},this.state),typeof t=="function"&&(t=t(V({},A),this.props)),t&&V(A,t),t!=null&&this.__v&&(e&&this._sb.push(e),gt(this))},Pe.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),gt(this))},Pe.prototype.render=N,Z=[],Qt=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Jt=function(t,e){return t.__v.__b-e.__v.__b},We.__r=0,Oe=Math.random().toString(8),ke="__d"+Oe,pe="__a"+Oe,Xt=/(PointerCapture)$|Capture$/i,tt=0,Qe=bt(!1),Je=bt(!0);var LA=0;function n(t,e,A,s,r,i){e||(e={});var a,c,o=e;if("ref"in o)for(c in o={},e)c=="ref"?a=e[c]:o[c]=e[c];var u={type:t,props:o,key:A,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--LA,__i:-1,__u:0,__source:r,__self:i};if(typeof t=="function"&&(a=t.defaultProps))for(c in a)o[c]===void 0&&(o[c]=a[c]);return M.vnode&&M.vnode(u),u}var ie,T,Ve,vt,_e=0,iA=[],I=M,yt=I.__b,wt=I.__r,xt=I.diffed,$t=I.__c,St=I.unmount,kt=I.__;function Re(t,e){I.__h&&I.__h(T,t,_e||e),_e=0;var A=T.__H||(T.__H={__:[],__h:[]});return t>=A.__.length&&A.__.push({}),A.__[t]}function b(t){return _e=1,NA(oA,t)}function NA(t,e,A){var s=Re(ie++,2);if(s.t=t,!s.__c&&(s.__=[oA(void 0,e),function(c){var o=s.__N?s.__N[0]:s.__[0],u=s.t(o,c);o!==u&&(s.__N=[u,s.__[1]],s.__c.setState({}))}],s.__c=T,!T.__f)){var r=function(c,o,u){if(!s.__c.__H)return!0;var h=!1,f=s.__c.props!==c;if(s.__c.__H.__.some(function(p){if(p.__N){h=!0;var _=p.__[0];p.__=p.__N,p.__N=void 0,_!==p.__[0]&&(f=!0)}}),i){var l=i.call(this,c,o,u);return h?l||f:l}return!h||f};T.__f=!0;var i=T.shouldComponentUpdate,a=T.componentWillUpdate;T.componentWillUpdate=function(c,o,u){if(this.__e){var h=i;i=void 0,r(c,o,u),i=h}a&&a.call(this,c,o,u)},T.shouldComponentUpdate=r}return s.__N||s.__}function B(t,e){var A=Re(ie++,3);!I.__s&&aA(A.__H,e)&&(A.__=t,A.u=e,T.__H.__h.push(A))}function fe(t){return _e=5,Ue(function(){return{current:t}},[])}function Ue(t,e){var A=Re(ie++,7);return aA(A.__H,e)&&(A.__=t(),A.__H=e,A.__h=t),A.__}function L(t,e){return _e=8,Ue(function(){return t},e)}function nt(){var t=Re(ie++,11);if(!t.__){for(var e=T.__v;e!==null&&!e.__m&&e.__!==null;)e=e.__;var A=e.__m||(e.__m=[0,0]);t.__="P"+A[0]+"-"+A[1]++}return t.__}function HA(){for(var t;t=iA.shift();){var e=t.__H;if(t.__P&&e)try{e.__h.some(Ee),e.__h.some(Xe),e.__h=[]}catch(A){e.__h=[],I.__e(A,t.__v)}}}I.__b=function(t){T=null,yt&&yt(t)},I.__=function(t,e){t&&e.__k&&e.__k.__m&&(t.__m=e.__k.__m),kt&&kt(t,e)},I.__r=function(t){wt&&wt(t),ie=0;var e=(T=t.__c).__H;e&&(Ve===T?(e.__h=[],T.__h=[],e.__.some(function(A){A.__N&&(A.__=A.__N),A.u=A.__N=void 0})):(e.__h.some(Ee),e.__h.some(Xe),e.__h=[],ie=0)),Ve=T},I.diffed=function(t){xt&&xt(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(iA.push(e)!==1&&vt===I.requestAnimationFrame||((vt=I.requestAnimationFrame)||RA)(HA)),e.__H.__.some(function(A){A.u&&(A.__H=A.u,A.u=void 0)})),Ve=T=null},I.__c=function(t,e){e.some(function(A){try{A.__h.some(Ee),A.__h=A.__h.filter(function(s){return!s.__||Xe(s)})}catch(s){e.some(function(r){r.__h&&(r.__h=[])}),e=[],I.__e(s,A.__v)}}),$t&&$t(t,e)},I.unmount=function(t){St&&St(t);var e,A=t.__c;A&&A.__H&&(A.__H.__.some(function(s){try{Ee(s)}catch(r){e=r}}),A.__H=void 0,e&&I.__e(e,A.__v))};var Mt=typeof requestAnimationFrame=="function";function RA(t){var e,A=function(){clearTimeout(s),Mt&&cancelAnimationFrame(e),setTimeout(t)},s=setTimeout(A,35);Mt&&(e=requestAnimationFrame(A))}function Ee(t){var e=T,A=t.__c;typeof A=="function"&&(t.__c=void 0,A()),T=e}function Xe(t){var e=T;t.__c=t.__(),T=e}function aA(t,e){return!t||t.length!==e.length||e.some(function(A,s){return A!==t[s]})}function oA(t,e){return typeof e=="function"?e(t):e}function UA({tabs:t,active:e,onSelect:A}){return n("nav",{class:"tab-bar",role:"tablist","aria-label":"Sections",children:t.map(s=>n("button",{type:"button",role:"tab",id:`tab-${s.id}`,"aria-selected":s.id===e,"aria-controls":`panel-${s.id}`,class:s.id===e?"active":void 0,onClick:()=>A(s.id),children:s.label},s.id))})}const g={mqtt:{hostMax:63,portMin:1,portMax:65535,loginMax:31,passwordMax:31,haDiscoveryPrefixMax:63,topicMax:63},modbus:{speeds:[1200,2400,4800,9600,19200,38400,57600,115200],addressMin:1,addressMax:254},rainwater:{topicMax:63,maxHeightMinExclusive:0,maxHeightMax:10,fillLevelStartPercent:10,maxFillLevelMax:100},electricity:{topicMax:63},meter:{valueMin:0,valueMax:4294967}},ye="Device returned an empty response. Check the device logs and try again.",Fe="Device returned an empty response.",lA="Could not reach the device. Check that you are connected to its network and try again.",xe={};function cA(){return{ok:!1,message:lA}}function FA(t){try{const e=JSON.parse(t);if(e&&typeof e=="object"&&"message"in e){const A=e.message;if(typeof A=="string"&&A)return A}}catch{}}async function dA(t){let e=`Request failed (HTTP ${t.status}).`;try{const A=await t.text();A&&(e=FA(A)??e)}catch{}return{ok:!1,status:t.status,message:e}}async function z(t,e){let A;try{A=await fetch(t,{headers:{Accept:"application/json"}})}catch{return cA()}if(!A.ok)return dA(A);let s;try{s=await A.text()}catch{return{ok:!1,status:A.status,message:lA}}if(!s.trim())return{ok:!1,status:A.status,message:e};try{return{ok:!0,data:JSON.parse(s)}}catch{return{ok:!1,status:A.status,message:e}}}async function uA(t,e){let A;try{A=await fetch(t,e)}catch{return cA()}if(!A.ok)return dA(A);let s="";try{s=await A.text()}catch{return{ok:!0,data:xe}}if(!s.trim())return{ok:!0,data:xe};try{const r=JSON.parse(s);return{ok:!0,data:r&&typeof r=="object"?r:xe}}catch{return{ok:!0,data:xe}}}function le(t,e){return uA(t,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:e.toString()})}function O(t,e,A,s=!1){if(typeof t!="string")throw new Error(`${e} is required.`);if(!s&&t.length===0)throw new Error(`${e} must not be empty.`);if(t.length>A)throw new Error(`${e} must be at most ${A} characters.`);return t}function re(t,e,A,s){if(typeof t!="number"||!Number.isFinite(t))throw new Error(`${e} must be a number.`);if(t<A||t>s)throw new Error(`${e} must be between ${A} and ${s}.`);return t}function BA(t,e){if(typeof t!="boolean")throw new Error(`${e} must be true or false.`);return t}function qA(t,e,A){if(typeof t!="number"||!Number.isFinite(t))throw new Error(`${e} must be a number.`);if(!A.includes(t))throw new Error(`${e} must be one of: ${A.join(", ")}.`);return t}function YA(){return z("/api/settings",ye)}function OA(){return z("/api/status",Fe)}function hA(){return z("/healthcheck/healty",Fe)}function VA(){return z("/healthcheck/ready",Fe)}function zA(){return z("/api/settings/modbus",ye)}function jA(){return z("/api/settings/rainwater",ye)}function ZA(){return z("/api/settings/electricity",ye)}function GA(){return z("/api/settings/meter",ye)}function QA(){return z("/api/controls",Fe)}function JA(t){const e=qA(t.modbusSpeed,"Modbus speed",g.modbus.speeds),A=re(t.addressQDY30A,"QDY30A address",g.modbus.addressMin,g.modbus.addressMax),s=re(t.addressWBMAI6,"WB-MAI6 address",g.modbus.addressMin,g.modbus.addressMax),r=new URLSearchParams;return r.set("modbusSpeed",String(e)),r.set("addressQDY30A",String(A)),r.set("addressWBMAI6",String(s)),le("/api/settings/modbus",r)}function XA(t){const e=O(t.rainwaterPitLevelTopic,"Pit level topic",g.rainwater.topicMax,!0),A=re(t.rainwaterPitMaxHeight,"Pit max height",g.rainwater.maxHeightMinExclusive,g.rainwater.maxHeightMax);if(A<=g.rainwater.maxHeightMinExclusive)throw new Error("Pit max height must be greater than 0.");const s=re(t.rainwaterPitMaxFillLevel,"Pit max fill level",g.rainwater.fillLevelStartPercent,g.rainwater.maxFillLevelMax);if(s<=g.rainwater.fillLevelStartPercent)throw new Error(`Pit max fill level must be greater than ${g.rainwater.fillLevelStartPercent}.`);const r=new URLSearchParams;return r.set("rainwaterPitLevelTopic",e),r.set("rainwaterPitMaxHeight",String(A)),r.set("rainwaterPitMaxFillLevel",String(s)),le("/api/settings/rainwater",r)}function KA(t){const e=O(t.electricityTopic,"Grid state topic",g.electricity.topicMax,!0),A=new URLSearchParams;return A.set("electricityTopic",e),le("/api/settings/electricity",A)}function er(t){const e=re(t.homeWaterInitialValue,"Home water initial value",g.meter.valueMin,g.meter.valueMax),A=re(t.yardWaterInitialValue,"Yard water initial value",g.meter.valueMin,g.meter.valueMax),s=new URLSearchParams;return s.set("homeWaterInitialValue",String(e)),s.set("yardWaterInitialValue",String(A)),le("/api/settings/meter",s)}function tr(t){const e=O(t.host,"MQTT host",g.mqtt.hostMax),A=re(t.port,"MQTT port",g.mqtt.portMin,g.mqtt.portMax),s=O(t.login,"MQTT login",g.mqtt.loginMax,!0),r=O(t.password,"MQTT password",g.mqtt.passwordMax,!0),i=O(t.haDiscoveryPrefix,"HA discovery prefix",g.mqtt.haDiscoveryPrefixMax),a=BA(t.mqttIsHADiscovery,"HA discovery flag"),c=O(t.stateTopic,"State topic",g.mqtt.topicMax),o=O(t.commandTopic,"Command topic",g.mqtt.topicMax),u=O(t.mqttTopicPrefix,"MQTT topic prefix",g.mqtt.topicMax),h=new URLSearchParams;return h.set("host",e),h.set("port",String(A)),h.set("login",s),h.set("password",r),h.set("haDiscoveryPrefix",i),h.set("mqttIsHADiscovery",a?"true":"false"),h.set("stateTopic",c),h.set("commandTopic",o),h.set("mqttTopicPrefix",u),le("/api/settings/mqtt",h)}function Ar(t,e){const A=new URLSearchParams;return A.set("id",t),A.set("value",e),le("/api/controls/set",A)}function rr(){return uA("/api/reboot",{method:"POST"})}function S({kind:t="info",message:e,onClose:A}){return n("div",{class:`banner banner-${t}`,role:"status",children:[n("span",{children:e}),A?n("button",{type:"button",class:"banner-close","aria-label":"Dismiss",onClick:A,children:"×"}):null]})}function sr(t){switch(t){case"primary":return"btn btn-primary";case"danger":return"btn btn-danger";default:return"btn"}}function W({children:t,variant:e="default",type:A="button",disabled:s,title:r,onClick:i}){return n("button",{type:A,class:sr(e),disabled:s,title:r,onClick:i,children:t})}function nr(t){return n(W,{...t,variant:"danger"})}function D({title:t,children:e,class:A}){return n("section",{class:A?`card ${A}`:"card",children:[t?n("h2",{children:t}):null,e]})}function ir({label:t,checked:e,onChange:A,disabled:s,help:r,name:i}){const a=nt();return n("div",{class:"checkbox-field",children:[n("label",{class:"checkbox-label",for:a,children:[n("input",{id:a,name:i,type:"checkbox",checked:e,disabled:s,onChange:o=>{A?.(o.currentTarget.checked)}}),n("span",{children:t})]}),r?n("span",{class:"field-help",children:r}):null]})}function H({label:t,value:e,onInput:A,type:s="text",name:r,placeholder:i,maxLength:a,min:c,max:o,step:u,error:h,help:f,disabled:l,required:p,autoComplete:_,inputMode:y}){const w=nt();return n("label",{class:"field",for:w,children:[n("span",{class:"field-label",children:t}),n("input",{id:w,name:r,type:s,value:e,placeholder:i,maxLength:a,min:c,max:o,step:u,disabled:l,required:p,autoComplete:_,inputMode:y,onInput:m=>{A?.(m.currentTarget.value)},"aria-invalid":h?!0:void 0}),f&&!h?n("span",{class:"field-help",children:f}):null,h?n("span",{class:"field-error",children:h}):null]})}function pA(){return n(S,{kind:"info",message:"Changes are saved to flash and take effect only after a reboot."})}function ar({label:t,value:e,onInput:A,maxLength:s,error:r,help:i,disabled:a,autoComplete:c}){const[o,u]=b(!1);return n("div",{class:"password-field",children:[n(H,{label:t,value:e,onInput:A,type:o?"text":"password",maxLength:s,error:r,help:i,disabled:a,autoComplete:c}),n("button",{type:"button",class:"btn reveal-toggle","aria-pressed":o,disabled:a,onClick:()=>u(h=>!h),children:o?"Hide":"Show"})]})}const or={host:"",port:"",login:"",password:"",haDiscoveryPrefix:"",mqttIsHADiscovery:!1,stateTopic:"",commandTopic:"",mqttTopicPrefix:""};function lr(t){const e={};t.host.trim().length===0?e.host="Host is required.":t.host.length>g.mqtt.hostMax&&(e.host=`At most ${g.mqtt.hostMax} characters.`);const A=Number(t.port);return t.port.trim()===""?e.port="Port is required.":(!Number.isInteger(A)||A<1||A>65535)&&(e.port="Port must be an integer between 1 and 65535."),t.login.length>g.mqtt.loginMax&&(e.login=`At most ${g.mqtt.loginMax} characters.`),t.password.length>g.mqtt.passwordMax&&(e.password=`At most ${g.mqtt.passwordMax} characters.`),t.haDiscoveryPrefix.trim().length===0?e.haDiscoveryPrefix="Discovery prefix is required.":t.haDiscoveryPrefix.length>g.mqtt.haDiscoveryPrefixMax&&(e.haDiscoveryPrefix=`At most ${g.mqtt.haDiscoveryPrefixMax} characters.`),t.stateTopic.trim().length===0?e.stateTopic="Required - the device crashes if the state topic is missing.":t.stateTopic.length>g.mqtt.topicMax&&(e.stateTopic=`At most ${g.mqtt.topicMax} characters.`),t.commandTopic.trim().length===0?e.commandTopic="Required - the device crashes if the command topic is missing.":t.commandTopic.length>g.mqtt.topicMax&&(e.commandTopic=`At most ${g.mqtt.topicMax} characters.`),t.mqttTopicPrefix.trim().length===0?e.mqttTopicPrefix="Topic prefix is required.":t.mqttTopicPrefix.length>g.mqtt.topicMax&&(e.mqttTopicPrefix=`At most ${g.mqtt.topicMax} characters.`),e}function cr(t){return Object.values(t).some(e=>!!e)}function dr(){const[t,e]=b(!1),[A,s]=b(null),[r,i]=b(or),[a,c]=b({}),[o,u]=b(!1),[h,f]=b(null),[l,p]=b(null),_=L(async()=>{s(null);const d=await YA();d.ok?i({host:d.data.mqttHost,port:String(d.data.mqttPort),login:d.data.mqttLogin,password:d.data.mqttPassword,haDiscoveryPrefix:d.data.mqttHADiscoveryPrefix,mqttIsHADiscovery:d.data.mqttIsHADiscovery,stateTopic:d.data.mqttStateTopic,commandTopic:d.data.mqttCommandTopic,mqttTopicPrefix:d.data.mqttTopicPrefix}):s(d.message),e(!0)},[]);B(()=>{_()},[_]);const y=d=>i(m=>({...m,...d})),w=L(async d=>{d.preventDefault();const m=lr(r);if(c(m),f(null),p(null),!cr(m)){u(!0);try{const v=await tr({host:r.host,port:Number(r.port),login:r.login,password:r.password,haDiscoveryPrefix:r.haDiscoveryPrefix,mqttIsHADiscovery:r.mqttIsHADiscovery,stateTopic:r.stateTopic,commandTopic:r.commandTopic,mqttTopicPrefix:r.mqttTopicPrefix});v.ok?f("MQTT settings saved to flash."):p(v.message)}catch(v){p(v instanceof Error?v.message:String(v))}finally{u(!1)}}},[r]);return t?n("div",{class:"stack",children:[n(pA,{}),A?n(N,{children:[n(S,{kind:"error",message:A}),n("div",{class:"form-actions",children:n(W,{onClick:()=>{_()},children:"Retry"})})]}):null,n(D,{title:"MQTT",children:n("form",{onSubmit:w,novalidate:!0,children:[n(H,{label:"Host",value:r.host,onInput:d=>y({host:d}),maxLength:g.mqtt.hostMax,error:a.host,autoComplete:"off",disabled:o}),n(H,{label:"Port",value:r.port,onInput:d=>y({port:d}),type:"number",min:1,max:65535,inputMode:"numeric",error:a.port,disabled:o}),n(H,{label:"Login",value:r.login,onInput:d=>y({login:d}),maxLength:g.mqtt.loginMax,error:a.login,autoComplete:"off",disabled:o}),n(ar,{label:"Password",value:r.password,onInput:d=>y({password:d}),maxLength:g.mqtt.passwordMax,error:a.password,autoComplete:"new-password",disabled:o}),n(H,{label:"HA discovery prefix",value:r.haDiscoveryPrefix,onInput:d=>y({haDiscoveryPrefix:d}),maxLength:g.mqtt.haDiscoveryPrefixMax,error:a.haDiscoveryPrefix,autoComplete:"off",disabled:o}),n(ir,{label:"Enable Home Assistant discovery",checked:r.mqttIsHADiscovery,onChange:d=>y({mqttIsHADiscovery:d}),disabled:o}),n(H,{label:"State topic",value:r.stateTopic,onInput:d=>y({stateTopic:d}),maxLength:g.mqtt.topicMax,error:a.stateTopic,help:"Must not be empty: the device crashes on a missing state topic.",autoComplete:"off",disabled:o}),n(H,{label:"Command topic",value:r.commandTopic,onInput:d=>y({commandTopic:d}),maxLength:g.mqtt.topicMax,error:a.commandTopic,help:"Must not be empty: the device crashes on a missing command topic.",autoComplete:"off",disabled:o}),n(H,{label:"Topic prefix",value:r.mqttTopicPrefix,onInput:d=>y({mqttTopicPrefix:d}),maxLength:g.mqtt.topicMax,error:a.mqttTopicPrefix,help:"Prefix used for Home Assistant discovery entities; must not be empty.",autoComplete:"off",disabled:o}),h?n(S,{kind:"success",message:h,onClose:()=>f(null)}):null,l?n(S,{kind:"error",message:l,onClose:()=>p(null)}):null,n("div",{class:"form-actions",children:n(W,{type:"submit",variant:"primary",disabled:o,children:o?"Saving…":"Save MQTT"})})]})})]}):n(D,{title:"Connections",children:n("p",{class:"muted",children:"Loading connection settings…"})})}const ur=`<?xml version="1.0" encoding="UTF-8"?>
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
`,hr=ur.replace(/^\s*<\?xml[\s\S]*?\?>/i,"").replace(/<script\b[\s\S]*?<\/script>/gi,"").replace(/<metadata\b[\s\S]*?<\/metadata>/gi,""),Pt=.37,pr=1.2,fr=62,fA=186,Et=fr+fA,mr={open:"ОТКРЫТ",closed:"ЗАКРЫТ",on:"ВКЛЮЧЕН",off:"ВЫКЛЮЧЕН",unknown:"НЕТ ДАННЫХ"},me={"valve-home-fill":"fillingBarrelValve","valve-bypass":"bypassValve","valve-street-fill":"rainwaterPitValve","pump-home":"homePumpStation","pump-street":"outdoorPumpStation"},gr={"valve-home-fill":"valve","valve-bypass":"valve","valve-street-fill":"valve","pump-home":"pump","pump-street":"pump"},_r=Object.keys(me);function F(t,e){return t.querySelector(`[id="${e}"]`)}function br(t,e,A){const s=F(t,e);s&&s.setAttribute("data-state",A);const r=F(t,`${e}-state`);r&&(r.textContent=mr[A])}function Tt(t,e,A){const s=F(t,`${e}-water`),r=F(t,`${e}-level`),i=F(t,e);if(A===null){s&&(s.setAttribute("y",String(Et)),s.setAttribute("height","0")),r&&(r.textContent="— %"),i&&i.setAttribute("data-state","unknown");return}const a=Math.max(0,Math.min(100,A)),c=fA*a/100;s&&(s.setAttribute("y",String(Et-c)),s.setAttribute("height",String(c))),r&&(r.textContent=`${Math.round(a)} %`),i&&i.setAttribute("data-state",a<15?"alarm":"ok")}function vr(t,e,A){const s=F(t,"sensor-city-pressure-value"),r=F(t,"sensor-city-pressure");if(e===null){s&&(s.textContent="— бар"),r&&r.setAttribute("data-state","unknown");return}s&&(s.textContent=`${e.toFixed(1)} бар`),r&&r.setAttribute("data-state",A?"alarm":"ok")}function Ct(t,e,A){const s=F(t,`${e}-flow`),r=F(t,`${e}-total`),i=F(t,e);if(A===null){s&&(s.textContent="— л/мин"),r&&(r.textContent="— м³"),i&&i.setAttribute("data-state","unknown");return}s&&(s.textContent="— л/мин"),r&&(r.textContent=`${A.toFixed(2)} м³`),i&&i.setAttribute("data-state","off")}function q(t,e,A){const s=F(t,e);s&&s.setAttribute("data-flow",A?"on":"off")}function yr(t,e){return t.devices.find(A=>A.id===me[e])??null}function ce(t,e){const A=t.sensors.find(s=>s.id===e);return A&&A.available?A.value:null}function de(t,e){const A=t.devices.find(s=>s.id===e);return A!==void 0&&A.available&&A.value}function wr({snapshot:t,disabled:e,pendingId:A,onToggle:s}){const r=fe(null),i=fe(null),a=fe({snapshot:t,disabled:e,pendingId:A,onToggle:s});a.current={snapshot:t,disabled:e,pendingId:A,onToggle:s},B(()=>{const o=i.current,u=r.current;if(u&&(e?u.setAttribute("data-disabled","true"):u.removeAttribute("data-disabled")),!o)return;for(const m of _r){const v=yr(t,m),P=!v||!v.available?"unknown":gr[m]==="valve"?v.value?"open":"closed":v.value?"on":"off";br(o,m,P);const E=F(o,m);E&&(A===me[m]?E.setAttribute("data-pending","true"):E.removeAttribute("data-pending"))}const h=ce(t,"barrelWaterLevel");Tt(o,"tank-home",h===null?null:(h-Pt)/(pr-Pt)*100);const f=ce(t,"rainwaterPitLevel");Tt(o,"tank-street",f);const l=ce(t,"supplierPressure");vr(o,l,t.emergencyMode),Ct(o,"meter-home",ce(t,"homeWaterConsumption")),Ct(o,"meter-street",ce(t,"yardWaterConsumption"));const p=de(t,"fillingBarrelValve"),_=de(t,"bypassValve"),y=de(t,"rainwaterPitValve"),w=de(t,"homePumpStation"),d=de(t,"outdoorPumpStation");q(o,"pipe-city",p||y),q(o,"pipe-trunk",p),q(o,"pipe-home-fill",p),q(o,"pipe-trunk-down",y),q(o,"pipe-street-fill",y),q(o,"pipe-bypass",_),q(o,"pipe-home-suction",w),q(o,"pipe-home-out",w||_),q(o,"pipe-street-suction",d),q(o,"pipe-street-out",d)},[t,A,e]);const c=L(o=>{if(!(o.target instanceof Element))return;const h=o.target.closest("g[id]")?.id;if(!h||!Object.prototype.hasOwnProperty.call(me,h))return;const f=a.current;if(f.disabled)return;const l=me[h],p=f.snapshot.devices.find(_=>_.id===l);!p||!p.available||f.pendingId===p.id||f.onToggle(p.id,p.value?"off":"on")},[]);return n("div",{class:"schematic-scroll",ref:r,onClick:c,children:[n("p",{class:"hint",children:"Tap a valve or pump on the schematic to toggle it."}),n("div",{ref:i,dangerouslySetInnerHTML:{__html:hr}})]})}const xr=5e3,$r={on:"Turn on",off:"Turn off",onBadge:"Enabled",offBadge:"Disabled"},Sr={on:"Open",off:"Close",onBadge:"Open",offBadge:"Closed"},kr={on:"Turn on",off:"Turn off",onBadge:"On",offBadge:"Off"};function Mr(t,e){if(!Number.isFinite(t))return String(t);const A=t.toFixed(e);return A.includes(".")?A.replace(/0+$/,"").replace(/\.$/,""):A}function Pr(t,e){return Mr(t,e==="m3"?3:2)}function ze({device:t,actions:e,disabled:A,onToggle:s}){const r=t.available?t.value?{label:e.onBadge,className:"badge badge-on"}:{label:e.offBadge,className:"badge badge-off"}:{label:"Unknown",className:"badge badge-off"};return n("li",{class:"valve-row",children:[n("div",{class:"row",children:[n("span",{children:t.name}),n("span",{class:r.className,children:r.label})]}),n("div",{class:"form-actions",children:[n(W,{variant:"primary",disabled:A,onClick:()=>s(t.id,"on"),children:e.on}),n(W,{disabled:A,onClick:()=>s(t.id,"off"),children:e.off})]})]})}function Er(){const[t,e]=b(null),[A,s]=b(!1),[r,i]=b(null),[a,c]=b(null),[o,u]=b(null),h=L(async()=>{const d=await QA();if(d.ok){const m=d.data;Array.isArray(m.devices)&&Array.isArray(m.sensors)&&typeof m.emergencyMode=="boolean"?(e(m),i(null)):i("Device returned an invalid controls response")}else i(d.message);s(!0)},[]);B(()=>{h();const d=window.setInterval(()=>{h()},xr);return()=>window.clearInterval(d)},[h]);const f=L(async(d,m)=>{c(null),u(d);try{const v=await Ar(d,m);v.ok||c(v.message)}catch(v){c(v instanceof Error?v.message:String(v))}finally{u(null),await new Promise(v=>window.setTimeout(v,300)),await h()}},[h]);if(!A)return n("div",{class:"stack",children:n(D,{title:"Controls",children:n("p",{class:"muted",children:"Loading controls…"})})});if(!t)return n("div",{class:"stack",children:[r?n(S,{kind:"error",message:r}):null,n("div",{class:"form-actions",children:n(W,{onClick:()=>{h()},children:"Retry"})})]});const l=t.devices.find(d=>d.kind==="auto")??null,p=t.devices.filter(d=>d.kind==="valve"),_=t.devices.filter(d=>d.kind==="pump"),y=r!==null,w=d=>y||!d.available||o===d.id;return n("div",{class:"stack",children:[l&&l.available&&l.value?n(S,{kind:"info",message:"Automation is enabled and may revert manual valve/pump changes shortly after you toggle them."}):null,r?n(N,{children:[n(S,{kind:"error",message:r}),n("div",{class:"form-actions",children:n(W,{onClick:()=>{h()},children:"Retry"})})]}):null,a?n(S,{kind:"error",message:a,onClose:()=>c(null)}):null,n(D,{title:"Water schematic",children:n(wr,{snapshot:t,disabled:y,pendingId:o,onToggle:f})}),n(D,{title:"Sensors",children:n("dl",{class:"kv",children:[t.sensors.map(d=>n(N,{children:[n("dt",{children:d.name}),n("dd",{children:d.available?n(N,{children:[Pr(d.value,d.unit)," ",n("span",{class:"unit",children:d.unit})]}):n("span",{class:"hint",children:"Unavailable"})})]},d.id)),n("dt",{children:"Emergency mode"}),n("dd",{children:n("span",{class:t.emergencyMode?"badge badge-danger":"badge badge-off",children:t.emergencyMode?"Active":"Off"})})]})}),n(D,{title:"Auto mode",children:l?n("ul",{class:"valve-list",children:n(ze,{device:l,actions:$r,disabled:w(l),onToggle:f})}):n("p",{class:"muted",children:"Auto mode is not reported by the device."})}),n(D,{title:"Valves",children:p.length===0?n("p",{class:"muted",children:"No valves reported by the device."}):n("ul",{class:"valve-list",children:p.map(d=>n(ze,{device:d,actions:Sr,disabled:w(d),onToggle:f},d.id))})}),n(D,{title:"Pumps",children:_.length===0?n("p",{class:"muted",children:"No pumps reported by the device."}):n("ul",{class:"valve-list",children:_.map(d=>n(ze,{device:d,actions:kr,disabled:w(d),onToggle:f},d.id))})})]})}const Tr={homeWaterInitialValue:"",yardWaterInitialValue:""};function It(t){if(t.trim()==="")return null;const e=Number(t);return Number.isFinite(e)?e:null}function Cr(t){return Object.values(t).some(e=>!!e)}function Wt(t){return/^-?\d*(\.\d{4,})$/.test(t.trim())}function Ir(t){const e={},A=It(t.homeWaterInitialValue);A===null||A<0?e.homeWaterInitialValue="Enter a value of 0 or more.":Wt(t.homeWaterInitialValue)&&(e.homeWaterInitialValue="At most 3 decimal places.");const s=It(t.yardWaterInitialValue);return s===null||s<0?e.yardWaterInitialValue="Enter a value of 0 or more.":Wt(t.yardWaterInitialValue)&&(e.yardWaterInitialValue="At most 3 decimal places."),e}function Wr(){const[t,e]=b(!1),[A,s]=b(null),[r,i]=b(Tr),[a,c]=b({}),[o,u]=b(null),[h,f]=b(null),[l,p]=b(null),[_,y]=b(null),[w,d]=b(null),m=L(async()=>{s(null);const k=await GA();k.ok?i({homeWaterInitialValue:String(k.data.homeWaterInitialValue),yardWaterInitialValue:String(k.data.yardWaterInitialValue)}):s(k.message),e(!0)},[]);B(()=>{m()},[m]);const v=L(async k=>{const U=Ir(r);c(U);const Y=k==="home"?f:y,R=k==="home"?p:d;if(Y(null),R(null),!Cr(U)){u(k);try{const C=await er({homeWaterInitialValue:Number(r.homeWaterInitialValue),yardWaterInitialValue:Number(r.yardWaterInitialValue)});C.ok?Y("Counter recalibrated to the entered reading."):R(C.message)}catch(C){R(C instanceof Error?C.message:String(C))}finally{u(null)}}},[r]);if(!t)return n("div",{class:"stack",children:n(D,{title:"Meters",children:n("p",{class:"muted",children:"Loading meter values…"})})});const P=o!==null,E=(k,U,Y)=>{const R=k==="home",C=R?"homeWaterInitialValue":"yardWaterInitialValue",j=r[C],SA=a[C],pt=R?h:_,ft=R?l:w;return n(D,{title:U,children:n("form",{novalidate:!0,onSubmit:Ye=>{Ye.preventDefault(),v(k)},children:[n(H,{label:Y,value:j,onInput:Ye=>i(kA=>({...kA,[C]:Ye})),type:"number",min:0,step:.001,inputMode:"decimal",error:SA,help:"Cumulative counter reading in m³ (up to 3 decimals).",disabled:P}),pt?n(S,{kind:"success",message:pt,onClose:()=>R?f(null):y(null)}):null,ft?n(S,{kind:"error",message:ft,onClose:()=>R?p(null):d(null)}):null,n("div",{class:"form-actions",children:n(W,{type:"submit",variant:"primary",disabled:P,children:o===k?"Saving…":"Save"})})]})})};return n("div",{class:"stack",children:[n(S,{kind:"info",message:"Setting an initial value recalibrates the pulse counter to that reading. It is persisted immediately and needs no reboot."}),A?n(N,{children:[n(S,{kind:"error",message:A}),n("div",{class:"form-actions",children:n(W,{onClick:()=>{m()},children:"Retry"})})]}):null,E("home","Home water","Home water counter"),E("yard","Yard water","Yard water counter")]})}function Dr(){const t=fe(null);return B(()=>{const e=document.createElement("edn-network-page");return t.current?.append(e),()=>e.remove()},[]),n("div",{ref:t})}function Lr({label:t,value:e,options:A,onChange:s,error:r,help:i,disabled:a,required:c,name:o}){const u=nt(),h=f=>{s?.(f.currentTarget.value)};return n("label",{class:"field",for:u,children:[n("span",{class:"field-label",children:t}),n("select",{id:u,name:o,value:String(e),disabled:a,required:c,onChange:h,"aria-invalid":r?!0:void 0,children:A.map(f=>n("option",{value:f.value,disabled:f.disabled,children:f.label},f.value))}),i&&!r?n("span",{class:"field-help",children:i}):null,r?n("span",{class:"field-error",children:r}):null]})}function De(t){if(t.trim()==="")return null;const e=Number(t);return Number.isFinite(e)?e:null}function it(t){return Object.values(t).some(e=>!!e)}function Dt(t){return/^-?\d*(\.\d{4,})$/.test(t.trim())}const Nr={modbusSpeed:"9600",addressQDY30A:"",addressWBMAI6:""};function Hr(t){const e=g.modbus.speeds.map(s=>({value:String(s),label:`${s} baud`})),A=De(t);return A!==null&&!g.modbus.speeds.includes(A)&&e.unshift({value:t,label:`${t} (current)`}),e}function Lt(t,e){const A=De(t);if(A===null||!Number.isInteger(A)||A<g.modbus.addressMin||A>g.modbus.addressMax)return`${e} must be an integer between ${g.modbus.addressMin} and ${g.modbus.addressMax}.`}function Rr(){const[t,e]=b(!1),[A,s]=b(null),[r,i]=b(Nr),[a,c]=b({}),[o,u]=b(!1),[h,f]=b(null),[l,p]=b(null),_=Ue(()=>Hr(r.modbusSpeed),[r.modbusSpeed]),y=L(async()=>{s(null);const m=await zA();m.ok?i({modbusSpeed:String(m.data.modbusSpeed),addressQDY30A:String(m.data.addressQDY30A),addressWBMAI6:String(m.data.addressWBMAI6)}):s(m.message),e(!0)},[]);B(()=>{y()},[y]);const w=m=>i(v=>({...v,...m})),d=L(async m=>{m.preventDefault();const v={addressQDY30A:Lt(r.addressQDY30A,"QDY30A address"),addressWBMAI6:Lt(r.addressWBMAI6,"WB-MAI6 address")};if(c(v),f(null),p(null),!it(v)){u(!0);try{const P=await JA({modbusSpeed:Number(r.modbusSpeed),addressQDY30A:Number(r.addressQDY30A),addressWBMAI6:Number(r.addressWBMAI6)});P.ok?f("Modbus settings saved to flash."):p(P.message)}catch(P){p(P instanceof Error?P.message:String(P))}finally{u(!1)}}},[r]);return t?n(D,{title:"Modbus",children:[A?n(N,{children:[n(S,{kind:"error",message:A}),n("div",{class:"form-actions",children:n(W,{onClick:()=>{y()},children:"Retry"})})]}):null,n("form",{onSubmit:d,novalidate:!0,children:[n(Lr,{label:"Bus speed",value:r.modbusSpeed,options:_,onChange:m=>w({modbusSpeed:m}),help:"Only the speeds supported by the firmware are listed.",disabled:o}),n(H,{label:"QDY30A address",value:r.addressQDY30A,onInput:m=>w({addressQDY30A:m}),type:"number",min:g.modbus.addressMin,max:g.modbus.addressMax,inputMode:"numeric",error:a.addressQDY30A,disabled:o}),n(H,{label:"WB-MAI6 address",value:r.addressWBMAI6,onInput:m=>w({addressWBMAI6:m}),type:"number",min:g.modbus.addressMin,max:g.modbus.addressMax,inputMode:"numeric",error:a.addressWBMAI6,disabled:o}),h?n(S,{kind:"success",message:h,onClose:()=>f(null)}):null,l?n(S,{kind:"error",message:l,onClose:()=>p(null)}):null,n("div",{class:"form-actions",children:n(W,{type:"submit",variant:"primary",disabled:o,children:o?"Saving…":"Save Modbus"})})]})]}):n(D,{title:"Modbus",children:n("p",{class:"muted",children:"Loading Modbus settings…"})})}const Ur={rainwaterPitLevelTopic:"",rainwaterPitMaxHeight:"",rainwaterPitMaxFillLevel:""};function Fr(){const[t,e]=b(!1),[A,s]=b(null),[r,i]=b(Ur),[a,c]=b({}),[o,u]=b(!1),[h,f]=b(null),[l,p]=b(null),_=L(async()=>{s(null);const d=await jA();d.ok?i({rainwaterPitLevelTopic:d.data.rainwaterPitLevelTopic,rainwaterPitMaxHeight:String(d.data.rainwaterPitMaxHeight),rainwaterPitMaxFillLevel:String(d.data.rainwaterPitMaxFillLevel)}):s(d.message),e(!0)},[]);B(()=>{_()},[_]);const y=d=>i(m=>({...m,...d})),w=L(async d=>{d.preventDefault();const m={};r.rainwaterPitLevelTopic.length>g.rainwater.topicMax&&(m.rainwaterPitLevelTopic=`At most ${g.rainwater.topicMax} characters.`);const v=De(r.rainwaterPitMaxHeight);v===null||v<=g.rainwater.maxHeightMinExclusive||v>g.rainwater.maxHeightMax?m.rainwaterPitMaxHeight=`Height must be greater than 0 and at most ${g.rainwater.maxHeightMax} m.`:Dt(r.rainwaterPitMaxHeight)&&(m.rainwaterPitMaxHeight="At most 3 decimal places.");const P=De(r.rainwaterPitMaxFillLevel);if(P===null||P<=g.rainwater.fillLevelStartPercent||P>g.rainwater.maxFillLevelMax?m.rainwaterPitMaxFillLevel=`Fill level must be greater than ${g.rainwater.fillLevelStartPercent} and at most ${g.rainwater.maxFillLevelMax}.`:Dt(r.rainwaterPitMaxFillLevel)&&(m.rainwaterPitMaxFillLevel="At most 3 decimal places."),c(m),f(null),p(null),!it(m)){u(!0);try{const E=await XA({rainwaterPitLevelTopic:r.rainwaterPitLevelTopic,rainwaterPitMaxHeight:Number(r.rainwaterPitMaxHeight),rainwaterPitMaxFillLevel:Number(r.rainwaterPitMaxFillLevel)});E.ok?f("Rainwater settings saved to flash."):p(E.message)}catch(E){p(E instanceof Error?E.message:String(E))}finally{u(!1)}}},[r]);return t?n(D,{title:"Rainwater pit",children:[A?n(N,{children:[n(S,{kind:"error",message:A}),n("div",{class:"form-actions",children:n(W,{onClick:()=>{_()},children:"Retry"})})]}):null,n("form",{onSubmit:w,novalidate:!0,children:[n(H,{label:"Pit level topic",value:r.rainwaterPitLevelTopic,onInput:d=>y({rainwaterPitLevelTopic:d}),maxLength:g.rainwater.topicMax,placeholder:"Leave empty to disable auto-filling",help:"MQTT topic that reports the pit level; empty disables auto-filling.",error:a.rainwaterPitLevelTopic,autoComplete:"off",disabled:o}),n(H,{label:"Pit max height",value:r.rainwaterPitMaxHeight,onInput:d=>y({rainwaterPitMaxHeight:d}),type:"number",min:g.rainwater.maxHeightMinExclusive,max:g.rainwater.maxHeightMax,step:.001,inputMode:"decimal",help:`Height of the pit in metres (greater than 0, at most ${g.rainwater.maxHeightMax}).`,error:a.rainwaterPitMaxHeight,disabled:o}),n(H,{label:"Pit max fill level",value:r.rainwaterPitMaxFillLevel,onInput:d=>y({rainwaterPitMaxFillLevel:d}),type:"number",min:g.rainwater.fillLevelStartPercent,max:g.rainwater.maxFillLevelMax,step:.001,inputMode:"decimal",help:`Percentage that stops filling; must be greater than ${g.rainwater.fillLevelStartPercent}% and at most ${g.rainwater.maxFillLevelMax}%.`,error:a.rainwaterPitMaxFillLevel,disabled:o}),h?n(S,{kind:"success",message:h,onClose:()=>f(null)}):null,l?n(S,{kind:"error",message:l,onClose:()=>p(null)}):null,n("div",{class:"form-actions",children:n(W,{type:"submit",variant:"primary",disabled:o,children:o?"Saving…":"Save rainwater"})})]})]}):n(D,{title:"Rainwater pit",children:n("p",{class:"muted",children:"Loading rainwater settings…"})})}const Br={electricityTopic:""};function qr(){const[t,e]=b(!1),[A,s]=b(null),[r,i]=b(Br),[a,c]=b({}),[o,u]=b(!1),[h,f]=b(null),[l,p]=b(null),_=L(async()=>{s(null);const d=await ZA();d.ok?i({electricityTopic:d.data.electricityTopic}):s(d.message),e(!0)},[]);B(()=>{_()},[_]);const y=d=>i(m=>({...m,...d})),w=L(async d=>{d.preventDefault();const m={};if(r.electricityTopic.length>g.electricity.topicMax&&(m.electricityTopic=`At most ${g.electricity.topicMax} characters.`),c(m),f(null),p(null),!it(m)){u(!0);try{const v=await KA({electricityTopic:r.electricityTopic});v.ok?f("Electricity settings saved to flash."):p(v.message)}catch(v){p(v instanceof Error?v.message:String(v))}finally{u(!1)}}},[r]);return t?n(D,{title:"Electricity",children:[A?n(N,{children:[n(S,{kind:"error",message:A}),n("div",{class:"form-actions",children:n(W,{onClick:()=>{_()},children:"Retry"})})]}):null,n("form",{onSubmit:w,children:[n(H,{label:"Grid state topic",value:r.electricityTopic,onInput:d=>y({electricityTopic:d}),maxLength:g.electricity.topicMax,placeholder:"finedog/electricity",help:"Finedog grid-state topic (NORMAL/GENERATOR/BATTERY/CRITICAL); empty disables electricity-aware automation. Applies after reboot.",error:a.electricityTopic,autoComplete:"off",disabled:o}),h?n(S,{kind:"success",message:h,onClose:()=>f(null)}):null,l?n(S,{kind:"error",message:l,onClose:()=>p(null)}):null,n("div",{class:"form-actions",children:n(W,{type:"submit",variant:"primary",disabled:o,children:o?"Saving…":"Save electricity"})})]})]}):n(D,{title:"Electricity",children:n("p",{class:"muted",children:"Loading electricity settings…"})})}function Yr(){return n("div",{class:"stack",children:[n(pA,{}),n(Rr,{}),n(Fr,{}),n(qr,{})]})}const je=2e3,Or=12e4;function Vr(){const[t,e]=b("idle"),A=fe(0);B(()=>{if(t!=="rebooting")return;let a=!1,c;const o=()=>{hA().then(u=>{if(!a){if(u.ok){e("ready");return}if(A.current+=1,A.current*je>=Or){e("timeout");return}c=window.setTimeout(o,je)}})};return c=window.setTimeout(o,je),()=>{a=!0,c!==void 0&&window.clearTimeout(c)}},[t]);const s=L(()=>{A.current=0,e("rebooting")},[]),r=L(()=>e("idle"),[]),i=L(()=>{A.current=0,e("rebooting")},[]);return Ue(()=>({phase:t,start:s,dismiss:r,retry:i}),[t,s,r,i])}function zr({flow:t}){return t.phase==="idle"?null:n("div",{class:"reboot-overlay",role:"alertdialog","aria-modal":"true","aria-label":"Device rebooting",children:n("div",{class:"reboot-dialog card",children:[n("h2",{children:"Device is rebooting"}),t.phase==="rebooting"?n(N,{children:[n("p",{children:"Waiting for the device to come back online. This usually takes 20–60 seconds."}),n("p",{class:"muted","aria-live":"polite",children:"Polling device health…"})]}):null,t.phase==="ready"?n(N,{children:[n(S,{kind:"success",message:"The device is back online."}),n("div",{class:"form-actions",children:n(W,{variant:"primary",onClick:()=>window.location.reload(),children:"Reload panel"})})]}):null,t.phase==="timeout"?n(N,{children:[n(S,{kind:"error",message:"No response after about two minutes. Check the power and network, then reload or keep waiting."}),n("div",{class:"form-actions",children:[n(W,{onClick:t.retry,children:"Keep waiting"}),n(W,{onClick:t.dismiss,children:"Dismiss"})]})]}):null]})})}const jr=1e4;function Zr(t){const e=Math.max(0,Math.floor(t)),A=Math.floor(e/86400),s=Math.floor(e%86400/3600),r=Math.floor(e%3600/60),i=e%60,a=[];return A&&a.push(`${A}d`),(A||s)&&a.push(`${s}h`),(A||s||r)&&a.push(`${r}m`),a.push(`${i}s`),a.join(" ")}function Gr(t){return Number.isFinite(t)?`${Math.round(t/1024)} KB (${Math.round(t)} bytes)`:String(t)}function Qr(){const[t,e]=b(null),[A,s]=b(null),[r,i]=b(!1),[a,c]=b(null),[o,u]=b(null),[h,f]=b(!0),[l,p]=b(null),[_,y]=b(!1),w=Vr(),d=L(async()=>{const k=await OA();k.ok?(e(k.data),s(null)):s(k.message),i(!0)},[]),m=L(async()=>{f(!0);const[k,U]=await Promise.all([hA(),VA()]);c(k),u(U),f(!1)},[]);B(()=>{d();const k=window.setInterval(()=>{d()},jr);return()=>window.clearInterval(k)},[d]),B(()=>{m()},[m]);const v=L(async()=>{if(!window.confirm("Reboot the device now? Water metering will be offline for about 20-60 seconds."))return;p(null),y(!0);const U=await rr();y(!1),U.ok?w.start():p(U.message)},[w.start]),P=h&&!a?n("p",{class:"muted",children:"Checking device health…"}):a?a.ok?n(S,{kind:a.data.healty?"success":"error",message:a.data.healty?"Healthcheck is OK.":"Healthcheck reports failure."}):n(S,{kind:"error",message:a.message}):null,E=o?o.ok?n(S,{kind:o.data.ready?"success":"info",message:o.data.ready?"All registered services are ready.":`Not ready: ${o.data.message}`}):o.status===500?n(S,{kind:"info",message:`Not ready: ${o.message}`}):n(S,{kind:"error",message:o.message}):null;return n("div",{class:"stack",children:[n(D,{title:"Device",children:[r?A?n(N,{children:[n(S,{kind:"error",message:A}),n("div",{class:"form-actions",children:n(W,{onClick:()=>{d()},children:"Retry"})})]}):t?n("dl",{class:"kv",children:[n("dt",{children:"Wi-Fi"}),n("dd",{children:n("span",{class:t.wifiStatus==="connected"?"badge badge-on":"badge badge-off",children:t.wifiStatus})}),n("dt",{children:"Free heap"}),n("dd",{children:Gr(t.freeHeap)}),n("dt",{children:"Uptime"}),n("dd",{children:Zr(t.uptime)}),n("dt",{children:"Last reset reason"}),n("dd",{children:t.lastResetReason})]}):null:n("p",{class:"muted",children:"Loading status…"}),n("p",{class:"muted mt",children:"Status refreshes automatically every 10 seconds."})]}),n(D,{title:"Health",children:[P,E,n("div",{class:"form-actions",children:n(W,{onClick:()=>{m()},disabled:h,children:h?"Checking…":"Refresh health"})})]}),n(D,{title:"Maintenance",children:[n("p",{class:"muted",children:"A reboot briefly interrupts water metering and MQTT reporting. Configuration changes saved on the other tabs only take effect after a reboot."}),l?n(S,{kind:"error",message:l,onClose:()=>p(null)}):null,n("div",{class:"form-actions",children:n(nr,{onClick:()=>{v()},disabled:_||w.phase!=="idle",children:"Reboot device"})})]}),n(zr,{flow:w})]})}const Jr=[{id:"status",label:"Status"},{id:"meters",label:"Meters"},{id:"controls",label:"Controls"},{id:"settings",label:"Settings"},{id:"connections",label:"MQTT"},{id:"network",label:"Network"}];function Xr(t){switch(t){case"status":return n(Qr,{});case"meters":return n(Wr,{});case"controls":return n(Er,{});case"settings":return n(Yr,{});case"connections":return n(dr,{});case"network":return n(Dr,{})}}function Kr(){const[t,e]=b("status");return n(N,{children:[n("header",{class:"app-header",children:[n("div",{class:"brand",children:[n("svg",{class:"brand-mark",viewBox:"0 0 24 24",width:"20",height:"20","aria-hidden":"true",focusable:"false",children:[n("path",{fill:"currentColor",d:"M12 23c4.4 0 7.5-2.7 7.5-6.7 0-2.3-1-4.3-2.3-6.1-.8 1.6-1.8 2.6-2.9 3.3.4-1.4.2-3.1-.7-5C12.7 6.1 11.3 4.3 10.4 2c-.3 2.3-1.4 4-2.7 5.5C6.4 9.1 4.5 11 4.5 15c0 4 3.1 8 7.5 8z"}),n("path",{fill:"currentColor",opacity:".45",d:"M12 21.2c-1.6 0-2.8-1.1-2.8-2.8 0-1.3.7-2.1 1.5-3 .3.7.8 1.1 1.4 1.4-.2-1.2.1-2.4 1-3.5.9 1.2 1.4 2.6 1.4 4 0 2.3-1.4 3.9-2.5 3.9z"})]}),n("h1",{children:"Neptunus"})]}),n("span",{class:"hint",children:"water metering & rainwater controller"})]}),n(UA,{tabs:Jr,active:t,onSelect:e}),n("main",{class:"tab-content",id:`panel-${t}`,role:"tabpanel","aria-labelledby":`tab-${t}`,children:Xr(t)})]})}function es(t){if(t&&typeof t=="object"&&"error"in t){let e=t.error;if(typeof e=="string"&&e.length>0)return e}}function mA(t={}){let e=t.baseUrl??"",A=t.headers??{};async function s(r,i){let a;try{a=await fetch(`${e}${r}`,{...i,headers:{Accept:"application/json",...i?.body===void 0?{}:{"Content-Type":"application/json"},...A}})}catch(h){return i?.signal?.aborted===!0||typeof h=="object"&&h&&h.name==="AbortError"?{ok:!1,message:"Request aborted."}:{ok:!1,message:"Network request failed. Check the device connection and try again."}}let c=await a.text().catch(()=>""),o,u=!1;if(c.length>0)try{o=JSON.parse(c),u=!0}catch{u=!1}if(!a.ok){let h=es(o);return{ok:!1,status:a.status,message:h??`Request failed with HTTP ${a.status}.`}}return u?{ok:!0,data:o}:{ok:!1,status:a.status,message:`Unexpected response from server (HTTP ${a.status}).`}}return{getSettings(r){return s("/api/network/settings",{signal:r})},saveSettings(r,i){return s("/api/network/settings",{method:"POST",body:JSON.stringify(r),signal:i})},getStatus(r){return s("/api/network/status",{signal:r})},wifiList(r){return s("/api/wifi/list",{signal:r})}}}var Te=globalThis,at=Te.ShadowRoot&&(Te.ShadyCSS===void 0||Te.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ot=Symbol(),Nt=new WeakMap,gA=class{constructor(t,e,A){if(this._$cssResult$=!0,A!==ot)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(at&&t===void 0){let A=e!==void 0&&e.length===1;A&&(t=Nt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),A&&Nt.set(e,t))}return t}toString(){return this.cssText}},ts=t=>new gA(typeof t=="string"?t:t+"",void 0,ot),lt=(t,...e)=>new gA(t.length===1?t[0]:e.reduce((A,s,r)=>A+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[r+1],t[0]),t,ot),As=(t,e)=>{if(at)t.adoptedStyleSheets=e.map(A=>A instanceof CSSStyleSheet?A:A.styleSheet);else for(let A of e){let s=document.createElement("style"),r=Te.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=A.cssText,t.appendChild(s)}},Ht=at?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let A="";for(let s of e.cssRules)A+=s.cssText;return ts(A)})(t):t,{is:rs,defineProperty:ss,getOwnPropertyDescriptor:ns,getOwnPropertyNames:is,getOwnPropertySymbols:as,getPrototypeOf:os}=Object,Be=globalThis,Rt=Be.trustedTypes,ls=Rt?Rt.emptyScript:"",cs=Be.reactiveElementPolyfillSupport,ge=(t,e)=>t,Ke={toAttribute(t,e){switch(e){case Boolean:t=t?ls:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let A=t;switch(e){case Boolean:A=t!==null;break;case Number:A=t===null?null:Number(t);break;case Object:case Array:try{A=JSON.parse(t)}catch{A=null}}return A}},_A=(t,e)=>!rs(t,e),Ut={attribute:!0,type:String,converter:Ke,reflect:!1,useDefault:!1,hasChanged:_A};Symbol.metadata??=Symbol("metadata"),Be.litPropertyMetadata??=new WeakMap;var ne=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Ut){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let A=Symbol(),s=this.getPropertyDescriptor(t,A,e);s!==void 0&&ss(this.prototype,t,s)}}static getPropertyDescriptor(t,e,A){let{get:s,set:r}=ns(this.prototype,t)??{get(){return this[e]},set(i){this[e]=i}};return{get:s,set(i){let a=s?.call(this);r?.call(this,i),this.requestUpdate(t,a,A)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ut}static _$Ei(){if(this.hasOwnProperty(ge("elementProperties")))return;let t=os(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(ge("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ge("properties"))){let e=this.properties,A=[...is(e),...as(e)];for(let s of A)this.createProperty(s,e[s])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[A,s]of e)this.elementProperties.set(A,s)}this._$Eh=new Map;for(let[e,A]of this.elementProperties){let s=this._$Eu(e,A);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let A=new Set(t.flat(1/0).reverse());for(let s of A)e.unshift(Ht(s))}else t!==void 0&&e.push(Ht(t));return e}static _$Eu(t,e){let A=e.attribute;return A===!1?void 0:typeof A=="string"?A:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let A of e.keys())this.hasOwnProperty(A)&&(t.set(A,this[A]),delete this[A]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return As(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,A){this._$AK(t,A)}_$ET(t,e){let A=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,A);if(s!==void 0&&A.reflect===!0){let r=(A.converter?.toAttribute===void 0?Ke:A.converter).toAttribute(e,A.type);this._$Em=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){let A=this.constructor,s=A._$Eh.get(t);if(s!==void 0&&this._$Em!==s){let r=A.getPropertyOptions(s),i=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute===void 0?Ke:r.converter;this._$Em=s;let a=i.fromAttribute(e,r.type);this[s]=a??this._$Ej?.get(s)??a,this._$Em=null}}requestUpdate(t,e,A,s=!1,r){if(t!==void 0){let i=this.constructor;if(s===!1&&(r=this[t]),A??=i.getPropertyOptions(t),!((A.hasChanged??_A)(r,e)||A.useDefault&&A.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,A))))return;this.C(t,e,A)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:A,reflect:s,wrapped:r},i){A&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,i??e??this[t]),r!==!0||i!==void 0)||(this._$AL.has(t)||(this.hasUpdated||A||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[s,r]of this._$Ep)this[s]=r;this._$Ep=void 0}let A=this.constructor.elementProperties;if(A.size>0)for(let[s,r]of A){let{wrapped:i}=r,a=this[s];i!==!0||this._$AL.has(s)||a===void 0||this.C(s,void 0,r,a)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(A=>A.hostUpdate?.()),this.update(e)):this._$EM()}catch(A){throw t=!1,this._$EM(),A}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};ne.elementStyles=[],ne.shadowRootOptions={mode:"open"},ne[ge("elementProperties")]=new Map,ne[ge("finalized")]=new Map,cs?.({ReactiveElement:ne}),(Be.reactiveElementVersions??=[]).push("2.1.2");var ct=globalThis,Ft=t=>t,Le=ct.trustedTypes,Bt=Le?Le.createPolicy("lit-html",{createHTML:t=>t}):void 0,bA="$lit$",G=`lit$${Math.random().toFixed(9).slice(2)}$`,vA="?"+G,ds=`<${vA}>`,se=document,be=()=>se.createComment(""),ve=t=>t===null||typeof t!="object"&&typeof t!="function",dt=Array.isArray,us=t=>dt(t)||typeof t?.[Symbol.iterator]=="function",Ze=`[ 	
\f\r]`,ue=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,qt=/-->/g,Yt=/>/g,Q=RegExp(`>|${Ze}(?:([^\\s"'>=/]+)(${Ze}*=${Ze}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ot=/'/g,Vt=/"/g,yA=/^(?:script|style|textarea|title)$/i,x=(t=>(e,...A)=>({_$litType$:t,strings:e,values:A}))(1),ae=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),zt=new WeakMap,J=se.createTreeWalker(se,129);function wA(t,e){if(!dt(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Bt===void 0?e:Bt.createHTML(e)}var hs=(t,e)=>{let A=t.length-1,s=[],r,i=e===2?"<svg>":e===3?"<math>":"",a=ue;for(let c=0;c<A;c++){let o=t[c],u,h,f=-1,l=0;for(;l<o.length&&(a.lastIndex=l,h=a.exec(o),h!==null);)l=a.lastIndex,a===ue?h[1]==="!--"?a=qt:h[1]===void 0?h[2]===void 0?h[3]!==void 0&&(a=Q):(yA.test(h[2])&&(r=RegExp("</"+h[2],"g")),a=Q):a=Yt:a===Q?h[0]===">"?(a=r??ue,f=-1):h[1]===void 0?f=-2:(f=a.lastIndex-h[2].length,u=h[1],a=h[3]===void 0?Q:h[3]==='"'?Vt:Ot):a===Vt||a===Ot?a=Q:a===qt||a===Yt?a=ue:(a=Q,r=void 0);let p=a===Q&&t[c+1].startsWith("/>")?" ":"";i+=a===ue?o+ds:f>=0?(s.push(u),o.slice(0,f)+bA+o.slice(f)+G+p):o+G+(f===-2?c:p)}return[wA(t,i+(t[A]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]},et=class xA{constructor({strings:e,_$litType$:A},s){let r;this.parts=[];let i=0,a=0,c=e.length-1,o=this.parts,[u,h]=hs(e,A);if(this.el=xA.createElement(u,s),J.currentNode=this.el.content,A===2||A===3){let f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(r=J.nextNode())!==null&&o.length<c;){if(r.nodeType===1){if(r.hasAttributes())for(let f of r.getAttributeNames())if(f.endsWith(bA)){let l=h[a++],p=r.getAttribute(f).split(G),_=/([.?@])?(.*)/.exec(l);o.push({type:1,index:i,name:_[2],strings:p,ctor:_[1]==="."?fs:_[1]==="?"?ms:_[1]==="@"?gs:qe}),r.removeAttribute(f)}else f.startsWith(G)&&(o.push({type:6,index:i}),r.removeAttribute(f));if(yA.test(r.tagName)){let f=r.textContent.split(G),l=f.length-1;if(l>0){r.textContent=Le?Le.emptyScript:"";for(let p=0;p<l;p++)r.append(f[p],be()),J.nextNode(),o.push({type:2,index:++i});r.append(f[l],be())}}}else if(r.nodeType===8)if(r.data===vA)o.push({type:2,index:i});else{let f=-1;for(;(f=r.data.indexOf(G,f+1))!==-1;)o.push({type:7,index:i}),f+=G.length-1}i++}}static createElement(e,A){let s=se.createElement("template");return s.innerHTML=e,s}};function oe(t,e,A=t,s){if(e===ae)return e;let r=s===void 0?A._$Cl:A._$Co?.[s],i=ve(e)?void 0:e._$litDirective$;return r?.constructor!==i&&(r?._$AO?.(!1),i===void 0?r=void 0:(r=new i(t),r._$AT(t,A,s)),s===void 0?A._$Cl=r:(A._$Co??=[])[s]=r),r!==void 0&&(e=oe(t,r._$AS(t,e.values),r,s)),e}var ps=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:A}=this._$AD,s=(t?.creationScope??se).importNode(e,!0);J.currentNode=s;let r=J.nextNode(),i=0,a=0,c=A[0];for(;c!==void 0;){if(i===c.index){let o;c.type===2?o=new ut(r,r.nextSibling,this,t):c.type===1?o=new c.ctor(r,c.name,c.strings,this,t):c.type===6&&(o=new _s(r,this,t)),this._$AV.push(o),c=A[++a]}i!==c?.index&&(r=J.nextNode(),i++)}return J.currentNode=se,s}p(t){let e=0;for(let A of this._$AV)A!==void 0&&(A.strings===void 0?A._$AI(t[e]):(A._$AI(t,A,e),e+=A.strings.length-2)),e++}},ut=class $A{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,A,s,r){this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=e,this._$AB=A,this._$AM=s,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,A=this._$AM;return A!==void 0&&e?.nodeType===11&&(e=A.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,A=this){e=oe(this,e,A),ve(e)?e===$||e==null||e===""?(this._$AH!==$&&this._$AR(),this._$AH=$):e!==this._$AH&&e!==ae&&this._(e):e._$litType$===void 0?e.nodeType===void 0?us(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==$&&ve(this._$AH)?this._$AA.nextSibling.data=e:this.T(se.createTextNode(e)),this._$AH=e}$(e){let{values:A,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=et.createElement(wA(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===r)this._$AH.p(A);else{let i=new ps(r,this),a=i.u(this.options);i.p(A),this.T(a),this._$AH=i}}_$AC(e){let A=zt.get(e.strings);return A===void 0&&zt.set(e.strings,A=new et(e)),A}k(e){dt(this._$AH)||(this._$AH=[],this._$AR());let A=this._$AH,s,r=0;for(let i of e)r===A.length?A.push(s=new $A(this.O(be()),this.O(be()),this,this.options)):s=A[r],s._$AI(i),r++;r<A.length&&(this._$AR(s&&s._$AB.nextSibling,r),A.length=r)}_$AR(e=this._$AA.nextSibling,A){for(this._$AP?.(!1,!0,A);e!==this._$AB;){let s=Ft(e).nextSibling;Ft(e).remove(),e=s}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},qe=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,A,s,r){this.type=1,this._$AH=$,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,A.length>2||A[0]!==""||A[1]!==""?(this._$AH=Array(A.length-1).fill(new String),this.strings=A):this._$AH=$}_$AI(t,e=this,A,s){let r=this.strings,i=!1;if(r===void 0)t=oe(this,t,e,0),i=!ve(t)||t!==this._$AH&&t!==ae,i&&(this._$AH=t);else{let a=t,c,o;for(t=r[0],c=0;c<r.length-1;c++)o=oe(this,a[A+c],e,c),o===ae&&(o=this._$AH[c]),i||=!ve(o)||o!==this._$AH[c],o===$?t=$:t!==$&&(t+=(o??"")+r[c+1]),this._$AH[c]=o}i&&!s&&this.j(t)}j(t){t===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},fs=class extends qe{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===$?void 0:t}},ms=class extends qe{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==$)}},gs=class extends qe{constructor(t,e,A,s,r){super(t,e,A,s,r),this.type=5}_$AI(t,e=this){if((t=oe(this,t,e,0)??$)===ae)return;let A=this._$AH,s=t===$&&A!==$||t.capture!==A.capture||t.once!==A.once||t.passive!==A.passive,r=t!==$&&(A===$||s);s&&this.element.removeEventListener(this.name,this,A),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},_s=class{constructor(t,e,A){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=A}get _$AU(){return this._$AM._$AU}_$AI(t){oe(this,t)}},bs=ct.litHtmlPolyfillSupport;bs?.(et,ut),(ct.litHtmlVersions??=[]).push("3.3.3");var vs=(t,e,A)=>{let s=A?.renderBefore??e,r=s._$litPart$;if(r===void 0){let i=A?.renderBefore??null;s._$litPart$=r=new ut(e.insertBefore(be(),i),i,void 0,A??{})}return r._$AI(t),r},ht=globalThis,X=class extends ne{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=vs(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ae}};X._$litElement$=!0,X.finalized=!0,ht.litElementHydrateSupport?.({LitElement:X});var ys=ht.litElementPolyfillSupport;ys?.({LitElement:X}),(ht.litElementVersions??=[]).push("4.2.2");var ws={ethernet:"Ethernet",wifi:"Wi-Fi",wifi_ap:"Wi-Fi AP"};function xs(t){return t===void 0||Number.isNaN(t)?"Unknown":t>=-55?"Excellent":t>=-67?"Good":t>=-75?"Fair":"Weak"}function $s(t){return t===1?"Full":t===0?"Half":`Unknown (${t})`}function Ss(t){let e=A=>String(A).padStart(2,"0");return`${e(t.getHours())}:${e(t.getMinutes())}:${e(t.getSeconds())}`}var K,ks=(K=class extends X{constructor(...e){super(...e),this.baseUrl="",this.pollIntervalMs=1e4,this.errorMessage="",this.loading=!1,this.refreshSeq=0,this.handleRetry=()=>{this.refresh()}}connectedCallback(){super.connectedCallback(),this.refresh(),this.startPolling()}disconnectedCallback(){super.disconnectedCallback(),this.stopPolling()}updated(e){e.has("pollIntervalMs")&&this.startPolling();let A=e.get("baseUrl");e.has("baseUrl")&&A!==void 0&&A!==this.baseUrl&&(this.client=void 0,this.refresh())}render(){let e=this.status;return x`
      <div class="card">
        <header class="head">
          ${e?x`<span class="badge badge-${e.mode}">${ws[e.mode]}</span>`:x`<span class="badge badge-unknown">Unknown</span>`}
          ${e?x`<span class="state ${e.connected?"state-up":"state-down"}">
                ${e.connected?"Connected":"Disconnected"}
              </span>`:$}
          ${this.loading?x`<span class="muted loading">Refreshing…</span>`:$}
        </header>

        ${e?.fallbackAP?x`<div class="banner banner-warn" role="alert">
              Fallback AP active — the device could not reach the configured network.
            </div>`:$}
        ${this.errorMessage?x`<div class="banner banner-error" role="alert">
              <span>${this.errorMessage}</span>
              <button type="button" @click=${this.handleRetry}>Retry</button>
            </div>`:$}
        ${e?this.renderSections(e):x`<p class="muted">Loading network status…</p>`}

        <footer class="muted foot">
          ${this.lastUpdated?x`Updated ${Ss(this.lastUpdated)}`:x`Waiting for data…`}
        </footer>
      </div>
    `}renderSections(e){switch(e.mode){case"wifi":return this.renderWifi(e);case"wifi_ap":return this.renderAp(e);case"ethernet":return this.renderEthernet(e)}}renderWifi(e){return x`
      <section>
        <h2>Wi-Fi</h2>
        <dl class="rows">
          ${this.row("SSID",e.ssid)}
          ${this.row("Signal",e.rssi===void 0?void 0:`${e.rssi} dBm (${xs(e.rssi)})`)}
          ${this.row("IP address",e.ip)} ${this.row("MAC address",e.mac)}
        </dl>
      </section>
    `}renderAp(e){let A=e.ap;return x`
      <section>
        <h2>Access point</h2>
        <dl class="rows">
          ${this.row("SSID",A?.ssid)} ${this.row("IP address",A?.ip)}
          ${this.row("Stations",A?.stations)}
        </dl>
      </section>
    `}renderEthernet(e){let A=e.eth;return x`
      <section>
        <h2>Ethernet</h2>
        <dl class="rows">
          ${this.row("IP address",A?.ip)} ${this.row("MAC address",A?.mac)}
          ${this.row("Link",A===void 0?void 0:A.linkUp?"Up":"Down")}
          ${this.row("Speed",A===void 0?void 0:`${A.speed} Mbps`)}
          ${this.row("Duplex",A===void 0?void 0:$s(A.duplex))}
        </dl>
      </section>
    `}row(e,A){return A===void 0||A===""?$:x`<dt>${e}</dt>
          <dd>${A}</dd>`}ensureClient(){return(!this.client||this.clientBaseUrl!==this.baseUrl)&&(this.client=mA({baseUrl:this.baseUrl}),this.clientBaseUrl=this.baseUrl),this.client}async refresh(){let e=++this.refreshSeq;this.loading=!0;let A=await this.ensureClient().getStatus();if(e===this.refreshSeq){if(this.loading=!1,A.ok){this.status=A.data,this.errorMessage="",this.lastUpdated=new Date;return}this.errorMessage=A.message,this.dispatchEvent(new CustomEvent("edn-error",{detail:{message:A.message},bubbles:!0,composed:!0}))}}startPolling(){this.stopPolling();let e=Number(this.pollIntervalMs);!Number.isFinite(e)||e<=0||(this.timerId=setInterval(()=>{typeof document<"u"&&document.hidden||this.refresh()},e))}stopPolling(){this.timerId!==void 0&&(clearInterval(this.timerId),this.timerId=void 0)}},K.properties={baseUrl:{type:String,attribute:"base-url"},pollIntervalMs:{type:Number,attribute:"poll-interval-ms"},status:{state:!0},errorMessage:{state:!0},lastUpdated:{state:!0},loading:{state:!0}},K.styles=lt`
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
  `,K);typeof customElements<"u"&&!customElements.get("edn-network-status")&&customElements.define("edn-network-status",ks);var $e=32,he=64,Ge=8,Ms=5e3,Ps=new TextEncoder;function Se(t){return Ps.encode(t).length}function jt(t){return t.isAPMode?"ap":"station"}var ee,Es=(ee=class extends X{constructor(...e){super(...e),this.baseUrl="",this.settings=null,this.loading=!1,this.submitting=!1,this.errorMessage="",this.successMessage="",this.draftMode="station",this.draftWifiSSID="",this.draftWifiPassword="",this.draftWifiPasswordDirty=!1,this.draftApSSID="",this.draftApHasPassword=!1,this.draftApPassword="",this.draftApPasswordDirty=!1,this.fieldErrors={},this.scanning=!1,this.scanResults=[],this.scanError="",this.loadToken=0,this.settingsBaseUrl=null,this.handleWifiSSIDInput=A=>{this.draftWifiSSID=A.target.value},this.handleWifiPasswordInput=A=>{this.draftWifiPassword=A.target.value,this.draftWifiPasswordDirty=!0},this.handleApSSIDInput=A=>{this.draftApSSID=A.target.value},this.handleApPasswordInput=A=>{this.draftApPassword=A.target.value,this.draftApPasswordDirty=!0},this.handleApHasPasswordChange=A=>{this.draftApHasPassword=A.target.checked,this.draftApHasPassword||(this.draftApPassword="",this.draftApPasswordDirty=!1,this.fieldErrors={...this.fieldErrors,wifiAPPassword:void 0})},this.handlePickSsid=A=>{this.draftMode!=="station"&&(this.draftMode="station"),this.draftWifiSSID=A,this.fieldErrors={...this.fieldErrors,wifiSSID:void 0}},this.handleSubmit=A=>{A.preventDefault(),this.handleSave()},this.handleRetry=()=>{this.load()}}connectedCallback(){super.connectedCallback(),this.load()}disconnectedCallback(){super.disconnectedCallback(),this.scanController?.abort(),this.scanController=void 0}updated(e){let A=e.get("baseUrl");e.has("baseUrl")&&A!==void 0&&A!==this.baseUrl&&(this.client=void 0,this.scanResults=[],this.scanError="",this.load())}render(){let e=this.settings;return x`
      <div class="card">
        <h1>Network settings</h1>
        ${this.errorMessage?x`<div class="banner banner-error" role="alert">
              <span>${this.errorMessage}</span>
              <button type="button" @click=${this.handleRetry}>Retry</button>
            </div>`:$}
        ${this.successMessage?x`<div class="banner banner-success" role="status">${this.successMessage}</div>`:$}
        ${e?x`${this.renderForm(e)} ${this.renderScan()}`:this.loading?x`<p class="status">Loading settings…</p>`:x`<p class="status">Settings unavailable.</p>`}
      </div>
    `}renderForm(e){return x`
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
          ${this.dirty?x`<span class="muted">Unsaved changes</span>`:$}
        </div>
      </form>
    `}renderStation(e){return x`
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
        ${e.hasWifiPassword?x`<p class="hint">Password saved •••• (leave blank to keep)</p>`:$}
        ${this.renderPasswordClearWarning("wifiPassword")}
        ${this.renderFieldError("wifiPassword")}
      </section>
    `}renderAccessPoint(e){return x`
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
        ${this.draftApHasPassword?x`
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
              ${e.hasWifiAPPassword?x`<p class="hint">Password saved •••• (leave blank to keep)</p>`:$}
              ${this.renderPasswordClearWarning("wifiAPPassword")}
              ${this.renderFieldError("wifiAPPassword")}
            `:$}
      </section>
    `}renderScan(){return x`
      <section class="group">
        <div class="scan-head">
          <h2>Wi-Fi scan</h2>
          <button type="button" @click=${this.handleScan} ?disabled=${this.scanning}>
            ${this.scanning?"Scanning…":"Scan"}
          </button>
        </div>
        ${this.scanError?x`<div class="banner banner-error" role="alert">${this.scanError}</div>`:$}
        ${this.scanResults.length>0?x`<ul class="networks">
              ${this.scanResults.map(e=>this.renderNetwork(e))}
            </ul>`:$}
      </section>
    `}renderNetwork(e){return x`
      <li>
        <button type="button" class="network" @click=${()=>this.handlePickSsid(e.ssid)}>
          <span class="ssid">${e.ssid}</span>
          <span class="meta">
            ${e.encrypted?x`<span class="lock" title="Encrypted" aria-label="Encrypted">🔒</span>`:$}
            ${e.rssi} dBm · Ch ${e.channel}
          </span>
        </button>
      </li>
    `}renderFieldError(e){let A=this.fieldErrors[e];return A?x`<p class="field-error" role="alert">${A}</p>`:$}renderPasswordClearWarning(e){return(e==="wifiPassword"?this.draftWifiPasswordDirty&&this.draftWifiPassword===""&&this.settings?.hasWifiPassword===!0:this.draftApPasswordDirty&&this.draftApPassword===""&&this.draftApHasPassword&&this.settings?.hasWifiAPPassword===!0)?x`<p class="clear-warning" role="alert">
          Warning: saving now will remove the stored password.
        </p>`:$}get dirty(){let e=this.settings;return e?this.draftMode!==jt(e)||this.draftWifiSSID!==e.wifiSSID||this.draftApSSID!==e.wifiAPSSID||this.draftApHasPassword!==e.wifiAPHasPassword||this.draftWifiPasswordDirty||this.draftApPasswordDirty:!1}ensureClient(){return(!this.client||this.clientBaseUrl!==this.baseUrl)&&(this.client=mA({baseUrl:this.baseUrl}),this.clientBaseUrl=this.baseUrl),this.client}async load(){let e=++this.loadToken;this.loading=!0;let A=await this.ensureClient().getSettings();if(e!==this.loadToken){this.settingsBaseUrl!==this.baseUrl&&(this.settings=null);return}if(this.loading=!1,A.ok){this.applyServerSettings(A.data),this.errorMessage="";return}this.settingsBaseUrl!==this.baseUrl&&(this.settings=null),this.errorMessage=A.message,this.emitError(A.message)}applyServerSettings(e){this.settings=e,this.settingsBaseUrl=this.baseUrl,this.draftMode=jt(e),this.draftWifiSSID=e.wifiSSID,this.draftApSSID=e.wifiAPSSID,this.draftApHasPassword=e.wifiAPHasPassword,this.draftWifiPassword="",this.draftWifiPasswordDirty=!1,this.draftApPassword="",this.draftApPasswordDirty=!1,this.fieldErrors={}}validate(){let e=this.settings,A={};if(!e)return A;let s=this.draftMode==="ap";if(Se(this.draftWifiSSID)>$e&&(A.wifiSSID=`Wi-Fi name must be ${$e} characters or fewer.`),Se(this.draftApSSID)>$e&&(A.wifiAPSSID=`Access point name must be ${$e} characters or fewer.`),s?this.draftApSSID.length===0&&(A.wifiAPSSID="Access point name is required in AP mode."):this.draftWifiSSID.length===0&&(A.wifiSSID="Wi-Fi name is required in station mode."),this.draftWifiPasswordDirty&&Se(this.draftWifiPassword)>he&&(A.wifiPassword=`Wi-Fi password must be ${he} characters or fewer.`),this.draftApHasPassword)if(this.draftApPasswordDirty){let r=Se(this.draftApPassword);(r<Ge||r>he)&&(A.wifiAPPassword=`Access point password must be ${Ge}–${he} characters.`)}else e.hasWifiAPPassword||(A.wifiAPPassword=`Enter an access point password (${Ge}–${he} characters).`);return A}buildPatch(){let e=this.settings,A={};if(!e)return A;let s=this.draftMode==="ap";return s!==e.isAPMode&&(A.isAPMode=s),this.draftWifiSSID!==e.wifiSSID&&(A.wifiSSID=this.draftWifiSSID),this.draftWifiPasswordDirty&&(A.wifiPassword=this.draftWifiPassword),this.draftApSSID!==e.wifiAPSSID&&(A.wifiAPSSID=this.draftApSSID),this.draftApHasPassword!==e.wifiAPHasPassword&&(A.wifiAPHasPassword=this.draftApHasPassword),this.draftApHasPassword&&this.draftApPasswordDirty&&(A.wifiAPPassword=this.draftApPassword),A}async handleSave(){if(this.submitting||!this.settings)return;let e=this.validate();if(this.fieldErrors=e,Object.keys(e).length>0)return;let A=this.buildPatch();if(Object.keys(A).length===0)return;this.submitting=!0,this.errorMessage="",this.successMessage="";let s=await this.ensureClient().saveSettings(A);if(this.submitting=!1,s.ok){this.applyServerSettings(s.data),this.successMessage="Settings saved.",this.dispatchEvent(new CustomEvent("edn-saved",{detail:s.data,bubbles:!0,composed:!0}));return}let r=s.status===void 0?"Could not confirm the save — the device may have applied the changes and reconnected. Check the status widget or retry.":s.message;this.errorMessage=r,this.emitError(r)}async handleScan(){if(this.scanning)return;this.scanning=!0,this.scanError="";let e=new AbortController;this.scanController=e;let A,s=new Promise(i=>{A=setTimeout(()=>{e.abort(),i({ok:!1,message:"Wi-Fi scan timed out after 5 seconds."})},Ms)}),r=await Promise.race([this.ensureClient().wifiList(e.signal),s]);if(A!==void 0&&clearTimeout(A),this.scanController===e&&(this.scanController=void 0),this.scanning=!1,r.ok){this.scanResults=[...r.data.networks].sort((i,a)=>a.rssi-i.rssi);return}r.message!=="Request aborted."&&(this.scanError=r.message,this.emitError(r.message))}emitError(e){this.dispatchEvent(new CustomEvent("edn-error",{detail:{message:e},bubbles:!0,composed:!0}))}setMode(e){this.draftMode!==e&&(this.draftMode=e,this.fieldErrors={})}},ee.properties={baseUrl:{type:String,attribute:"base-url"},settings:{state:!0},loading:{state:!0},submitting:{state:!0},errorMessage:{state:!0},successMessage:{state:!0},draftMode:{state:!0},draftWifiSSID:{state:!0},draftWifiPassword:{state:!0},draftWifiPasswordDirty:{state:!0},draftApSSID:{state:!0},draftApHasPassword:{state:!0},draftApPassword:{state:!0},draftApPasswordDirty:{state:!0},fieldErrors:{state:!0},scanning:{state:!0},scanResults:{state:!0},scanError:{state:!0}},ee.styles=lt`
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
  `,ee);typeof customElements<"u"&&!customElements.get("edn-network-settings")&&customElements.define("edn-network-settings",Es);var Ts=[{id:"status",label:"Status"},{id:"settings",label:"Network settings"}],te,Cs=(te=class extends X{constructor(...e){super(...e),this.baseUrl="",this.pollIntervalMs=1e4,this.activeTab="status"}render(){return x`
      <div class="tabs" role="tablist" aria-label="Network">
        ${Ts.map(e=>x`
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
    `}renderActive(){return this.activeTab==="settings"?x`<edn-network-settings base-url=${this.baseUrl}></edn-network-settings>`:x`
      <edn-network-status
        base-url=${this.baseUrl}
        poll-interval-ms=${this.pollIntervalMs}
      ></edn-network-status>
    `}selectTab(e){this.activeTab!==e&&(this.activeTab=e,this.dispatchEvent(new CustomEvent("edn-tab-change",{detail:{tab:e},bubbles:!0,composed:!0})))}},te.properties={baseUrl:{type:String,attribute:"base-url"},pollIntervalMs:{type:Number,attribute:"poll-interval-ms"},activeTab:{state:!0}},te.styles=lt`
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
  `,te);typeof customElements<"u"&&!customElements.get("edn-network-page")&&customElements.define("edn-network-page",Cs);const Zt=document.getElementById("app");Zt&&DA(n(Kr,{}),Zt);
