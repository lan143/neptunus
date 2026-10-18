(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=r(s);fetch(s.href,n)}})();var ke,A,Wt,z,lt,Ut,Nt,Ne,be,de,Lt,Qe,Oe,Be,Se={},xe=[],fr=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Ee=Array.isArray;function F(t,e){for(var r in e)t[r]=e[r];return t}function Ye(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function mr(t,e,r){var i,s,n,a={};for(n in e)n=="key"?i=e[n]:n=="ref"?s=e[n]:a[n]=e[n];if(arguments.length>2&&(a.children=arguments.length>3?ke.call(arguments,2):r),typeof t=="function"&&t.defaultProps!=null)for(n in t.defaultProps)a[n]===void 0&&(a[n]=t.defaultProps[n]);return ve(t,a,i,s,null)}function ve(t,e,r,i,s){var n={type:t,props:e,key:r,ref:i,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:s??++Wt,__i:-1,__u:0};return s==null&&A.vnode!=null&&A.vnode(n),n}function N(t){return t.children}function we(t,e){this.props=t,this.context=e}function X(t,e){if(e==null)return t.__?X(t.__,t.__i+1):null;for(var r;e<t.__k.length;e++)if((r=t.__k[e])!=null&&r.__e!=null)return r.__e;return typeof t.type=="function"?X(t):null}function _r(t){if(t.__P&&t.__d){var e=t.__v,r=e.__e,i=[],s=[],n=F({},e);n.__v=e.__v+1,A.vnode&&A.vnode(n),Je(t.__P,n,e,t.__n,t.__P.namespaceURI,32&e.__u?[r]:null,i,r??X(e),!!(32&e.__u),s),n.__v=e.__v,n.__.__k[n.__i]=n,Bt(i,n,s),e.__e=e.__=null,n.__e!=r&&qt(n)}}function qt(t){if((t=t.__)!=null&&t.__c!=null)return t.__e=t.__c.base=null,t.__k.some(function(e){if(e!=null&&e.__e!=null)return t.__e=t.__c.base=e.__e}),qt(t)}function dt(t){(!t.__d&&(t.__d=!0)&&z.push(t)&&!Pe.__r++||lt!=A.debounceRendering)&&((lt=A.debounceRendering)||Ut)(Pe)}function Pe(){try{for(var t,e=1;z.length;)z.length>e&&z.sort(Nt),t=z.shift(),e=z.length,_r(t)}finally{z.length=Pe.__r=0}}function Rt(t,e,r,i,s,n,a,c,d,u,h){var m,l,p,b,w,$,f=i&&i.__k||xe,g=e.length;for(d=gr(r,e,f,d,g),m=0;m<g;m++)(p=r.__k[m])!=null&&(l=p.__i!=-1&&f[p.__i]||Se,p.__i=m,$=Je(t,p,l,s,n,a,c,d,u,h),b=p.__e,p.ref&&l.ref!=p.ref&&(l.ref&&Ke(l.ref,null,p),h.push(p.ref,p.__c||b,p)),w==null&&b!=null&&(w=b),4&p.__u?(d=Ft(p,d,t),l.__e&&(l.__e=null)):typeof p.type=="function"&&$!==void 0?d=$:b&&(d=b.nextSibling),p.__u&=-7);return r.__e=w,d}function gr(t,e,r,i,s){var n,a,c,d,u,h=r.length,m=h,l=0;for(t.__k=new Array(s),n=0;n<s;n++)(a=e[n])!=null&&typeof a!="boolean"&&typeof a!="function"?(typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?a=t.__k[n]=ve(null,a,null,null,null):Ee(a)?a=t.__k[n]=ve(N,{children:a},null,null,null):a.constructor===void 0&&a.__b>0?a=t.__k[n]=ve(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):t.__k[n]=a,d=n+l,a.__=t,a.__b=t.__b+1,c=null,(u=a.__i=br(a,r,d,m))!=-1&&(m--,(c=r[u])&&(c.__u|=2)),c==null||c.__v==null?(u==-1&&(s>h?l--:s<h&&l++),typeof a.type!="function"&&(a.__u|=4)):u!=d&&(u==d-1?l--:u==d+1?l++:(u>d?l--:l++,a.__u|=4))):t.__k[n]=null;if(m)for(n=0;n<h;n++)(c=r[n])!=null&&(2&c.__u)==0&&(c.__e==i&&(i=X(c)),jt(c,c));return i}function Ft(t,e,r){var i,s;if(typeof t.type=="function"){for(i=t.__k,s=0;i&&s<i.length;s++)i[s]&&(i[s].__=t,e=Ft(i[s],e,r));return e}t.__e!=e&&(e&&t.type&&!e.parentNode&&(e=X(t)),e=r.insertBefore(t.__e,e||null));do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function br(t,e,r,i){var s,n,a,c=t.key,d=t.type,u=e[r],h=u!=null&&(2&u.__u)==0;if(u===null&&c==null||h&&c==u.key&&d==u.type)return r;if(i>(h?1:0)){for(s=r-1,n=r+1;s>=0||n<e.length;)if((u=e[a=s>=0?s--:n++])!=null&&(2&u.__u)==0&&c==u.key&&d==u.type)return a}return-1}function ct(t,e,r){e[0]=="-"?t.setProperty(e,r??""):t[e]=r==null?"":typeof r!="number"||fr.test(e)?r:r+"px"}function fe(t,e,r,i,s){var n,a;e:if(e=="style")if(typeof r=="string")t.style.cssText=r;else{if(typeof i=="string"&&(t.style.cssText=i=""),i)for(e in i)r&&e in r||ct(t.style,e,"");if(r)for(e in r)i&&r[e]==i[e]||ct(t.style,e,r[e])}else if(e[0]=="o"&&e[1]=="n")n=e!=(e=e.replace(Lt,"$1")),a=e.toLowerCase(),e=a in t||e=="onFocusOut"||e=="onFocusIn"?a.slice(2):e.slice(2),t.l||(t.l={}),t.l[e+n]=r,r?i?r[de]=i[de]:(r[de]=Qe,t.addEventListener(e,n?Be:Oe,n)):t.removeEventListener(e,n?Be:Oe,n);else{if(s=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in t)try{t[e]=r??"";break e}catch{}typeof r=="function"||(r==null||r===!1&&e[4]!="-"?t.removeAttribute(e):t.setAttribute(e,e=="popover"&&r==1?"":r))}}function ut(t){return function(e){if(this.l){var r=this.l[e.type+t];if(e[be]==null)e[be]=Qe++;else if(e[be]<r[de])return;return r(A.event?A.event(e):e)}}}function Je(t,e,r,i,s,n,a,c,d,u){var h,m,l,p,b,w,$,f,g,x,E,I,P,L,R,U,T=e.type;if(e.constructor!==void 0)return null;128&r.__u&&(d=!!(32&r.__u),n=[c=e.__e=r.__e]),(h=A.__b)&&h(e);e:if(typeof T=="function"){m=a.length;try{if(g=e.props,x=T.prototype&&T.prototype.render,E=(h=T.contextType)&&i[h.__c],I=h?E?E.props.value:h.__:i,r.__c?f=(l=e.__c=r.__c).__=l.__E:(x?e.__c=l=new T(g,I):(e.__c=l=new we(g,I),l.constructor=T,l.render=wr),E&&E.sub(l),l.state||(l.state={}),l.__n=i,p=l.__d=!0,l.__h=[],l._sb=[]),x&&l.__s==null&&(l.__s=l.state),x&&T.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=F({},l.__s)),F(l.__s,T.getDerivedStateFromProps(g,l.__s))),b=l.props,w=l.state,l.__v=e,p)x&&T.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),x&&l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(x&&T.getDerivedStateFromProps==null&&g!==b&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(g,I),e.__v==r.__v||!l.__e&&l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(g,l.__s,I)===!1){e.__v!=r.__v&&(l.props=g,l.state=l.__s,l.__d=!1),e.__e=r.__e,e.__k=r.__k,e.__k.some(function(O){O&&(O.__=e)}),xe.push.apply(l.__h,l._sb),l._sb=[],l.__h.length&&a.push(l),c=X(r);break e}l.componentWillUpdate!=null&&l.componentWillUpdate(g,l.__s,I),x&&l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(b,w,$)})}if(l.context=I,l.props=g,l.__P=t,l.__e=!1,P=A.__r,L=0,x)l.state=l.__s,l.__d=!1,P&&P(e),h=l.render(l.props,l.state,l.context),xe.push.apply(l.__h,l._sb),l._sb=[];else do l.__d=!1,P&&P(e),h=l.render(l.props,l.state,l.context),l.state=l.__s;while(l.__d&&++L<25);l.state=l.__s,l.getChildContext!=null&&(i=F(F({},i),l.getChildContext())),x&&!p&&l.getSnapshotBeforeUpdate!=null&&($=l.getSnapshotBeforeUpdate(b,w)),R=h!=null&&h.type===N&&h.key==null?zt(h.props.children):h,c=Rt(t,Ee(R)?R:[R],e,r,i,s,n,a,c,d,u),l.base=e.__e,e.__u&=-161,l.__h.length&&a.push(l),f&&(l.__E=l.__=null)}catch(O){if(a.length=m,e.__v=null,d||n!=null){if(O.then){for(e.__u|=d?160:128;c&&c.nodeType==8&&c.nextSibling;)c=c.nextSibling;n!=null&&(n[n.indexOf(c)]=null),e.__e=c}else if(n!=null)for(U=n.length;U--;)Ye(n[U])}else e.__e=r.__e;e.__k==null&&(e.__k=r.__k||[]),O.then||Ot(e),A.__e(O,e,r)}}else n==null&&e.__v==r.__v?(e.__k=r.__k,e.__e=r.__e):c=e.__e=vr(r.__e,e,r,i,s,n,a,d,u);return(h=A.diffed)&&h(e),128&e.__u?void 0:c}function Ot(t){t&&(t.__c&&(t.__c.__e=!0),t.__k&&t.__k.some(Ot))}function Bt(t,e,r){for(var i=0;i<r.length;i++)Ke(r[i],r[++i],r[++i]);A.__c&&A.__c(e,t),t.some(function(s){try{t=s.__h,s.__h=[],t.some(function(n){n.call(s)})}catch(n){A.__e(n,s.__v)}})}function zt(t){return typeof t!="object"||t==null||t.__b>0?t:Ee(t)?t.map(zt):t.constructor!==void 0?null:F({},t)}function vr(t,e,r,i,s,n,a,c,d){var u,h,m,l,p,b,w,$=r.props||Se,f=e.props,g=e.type;if(g=="svg"?s="http://www.w3.org/2000/svg":g=="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),n!=null){for(u=0;u<n.length;u++)if((p=n[u])&&"setAttribute"in p==!!g&&(g?p.localName==g:p.nodeType==3)){t=p,n[u]=null;break}}if(t==null){if(g==null)return document.createTextNode(f);t=document.createElementNS(s,g,f.is&&f),c&&(A.__m&&A.__m(e,n),c=!1),n=null}if(g==null)$===f||c&&t.data==f||(t.data=f);else{if(n=g=="textarea"&&f.defaultValue!=null?null:n&&ke.call(t.childNodes),!c&&n!=null)for($={},u=0;u<t.attributes.length;u++)$[(p=t.attributes[u]).name]=p.value;for(u in $)p=$[u],u=="dangerouslySetInnerHTML"?m=p:u=="children"||u in f||u=="value"&&"defaultValue"in f||u=="checked"&&"defaultChecked"in f||fe(t,u,null,p,s);for(u in f)p=f[u],u=="children"?l=p:u=="dangerouslySetInnerHTML"?h=p:u=="value"?b=p:u=="checked"?w=p:c&&typeof p!="function"||$[u]===p||fe(t,u,p,$[u],s);if(h)c||m&&(h.__html==m.__html||h.__html==t.innerHTML)||(t.innerHTML=h.__html),e.__k=[];else if(m&&(t.innerHTML=""),Rt(e.type=="template"?t.content:t,Ee(l)?l:[l],e,r,i,g=="foreignObject"?"http://www.w3.org/1999/xhtml":s,n,a,n?n[0]:r.__k&&X(r,0),c,d),n!=null)for(u=n.length;u--;)Ye(n[u]);c&&g!="textarea"||(u="value",g=="progress"&&b==null?t.removeAttribute("value"):b!=null&&(b!==t[u]||g=="progress"&&!b||g=="option"&&b!=$[u])&&fe(t,u,b,$[u],s),u="checked",w!=null&&w!=t[u]&&fe(t,u,w,$[u],s))}return t}function Ke(t,e,r){try{if(typeof t=="function"){var i=typeof t.__u=="function";i&&t.__u(),i&&e==null||(t.__u=t(e))}else t.current=e}catch(s){A.__e(s,r)}}function jt(t,e,r){var i,s;if(A.unmount&&A.unmount(t),(i=t.ref)&&(i.current&&i.current!=t.__e||Ke(i,null,e)),(i=t.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(n){A.__e(n,e)}i.base=i.__P=i.__n=null}if(i=t.__k)for(s=0;s<i.length;s++)i[s]&&jt(i[s],e,r||typeof t.type!="function");r||Ye(t.__e),t.__c=t.__=t.__e=void 0}function wr(t,e,r){return this.constructor(t,r)}function yr(t,e,r){var i,s,n,a;e==document&&(e=document.documentElement),A.__&&A.__(t,e),s=(i=!1)?null:e.__k,n=[],a=[],Je(e,t=e.__k=mr(N,null,[t]),s||Se,Se,e.namespaceURI,s?null:e.firstChild?ke.call(e.childNodes):null,n,s?s.__e:e.firstChild,i,a),Bt(n,t,a),t.props.children=null}ke=xe.slice,A={__e:function(t,e,r,i){for(var s,n,a;e=e.__;)if((s=e.__c)&&!s.__)try{if((n=s.constructor)&&n.getDerivedStateFromError!=null&&(s.setState(n.getDerivedStateFromError(t)),a=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(t,i||{}),a=s.__d),a)return s.__E=s}catch(c){t=c}throw t}},Wt=0,we.prototype.setState=function(t,e){var r;r=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=F({},this.state),typeof t=="function"&&(t=t(F({},r),this.props)),t&&F(r,t),t!=null&&this.__v&&(e&&this._sb.push(e),dt(this))},we.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),dt(this))},we.prototype.render=N,z=[],Ut=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Nt=function(t,e){return t.__v.__b-e.__v.__b},Pe.__r=0,Ne=Math.random().toString(8),be="__d"+Ne,de="__a"+Ne,Lt=/(PointerCapture)$|Capture$/i,Qe=0,Oe=ut(!1),Be=ut(!0);var $r=0;function o(t,e,r,i,s,n){e||(e={});var a,c,d=e;if("ref"in d)for(c in d={},e)c=="ref"?a=e[c]:d[c]=e[c];var u={type:t,props:d,key:r,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--$r,__i:-1,__u:0,__source:s,__self:n};if(typeof t=="function"&&(a=t.defaultProps))for(c in a)d[c]===void 0&&(d[c]=a[c]);return A.vnode&&A.vnode(u),u}var ie,k,Le,ht,ue=0,Vt=[],C=A,pt=C.__b,ft=C.__r,mt=C.diffed,_t=C.__c,gt=C.unmount,bt=C.__;function Te(t,e){C.__h&&C.__h(k,t,ue||e),ue=0;var r=k.__H||(k.__H={__:[],__h:[]});return t>=r.__.length&&r.__.push({}),r.__[t]}function v(t){return ue=1,Sr(Jt,t)}function Sr(t,e,r){var i=Te(ie++,2);if(i.t=t,!i.__c&&(i.__=[Jt(void 0,e),function(c){var d=i.__N?i.__N[0]:i.__[0],u=i.t(d,c);d!==u&&(i.__N=[u,i.__[1]],i.__c.setState({}))}],i.__c=k,!k.__f)){var s=function(c,d,u){if(!i.__c.__H)return!0;var h=!1,m=i.__c.props!==c;if(i.__c.__H.__.some(function(p){if(p.__N){h=!0;var b=p.__[0];p.__=p.__N,p.__N=void 0,b!==p.__[0]&&(m=!0)}}),n){var l=n.call(this,c,d,u);return h?l||m:l}return!h||m};k.__f=!0;var n=k.shouldComponentUpdate,a=k.componentWillUpdate;k.componentWillUpdate=function(c,d,u){if(this.__e){var h=n;n=void 0,s(c,d,u),n=h}a&&a.call(this,c,d,u)},k.shouldComponentUpdate=s}return i.__N||i.__}function V(t,e){var r=Te(ie++,3);!C.__s&&Yt(r.__H,e)&&(r.__=t,r.u=e,k.__H.__h.push(r))}function Qt(t){return ue=5,Ce(function(){return{current:t}},[])}function Ce(t,e){var r=Te(ie++,7);return Yt(r.__H,e)&&(r.__=t(),r.__H=e,r.__h=t),r.__}function H(t,e){return ue=8,Ce(function(){return t},e)}function Ge(){var t=Te(ie++,11);if(!t.__){for(var e=k.__v;e!==null&&!e.__m&&e.__!==null;)e=e.__;var r=e.__m||(e.__m=[0,0]);t.__="P"+r[0]+"-"+r[1]++}return t.__}function xr(){for(var t;t=Vt.shift();){var e=t.__H;if(t.__P&&e)try{e.__h.some(ye),e.__h.some(ze),e.__h=[]}catch(r){e.__h=[],C.__e(r,t.__v)}}}C.__b=function(t){k=null,pt&&pt(t)},C.__=function(t,e){t&&e.__k&&e.__k.__m&&(t.__m=e.__k.__m),bt&&bt(t,e)},C.__r=function(t){ft&&ft(t),ie=0;var e=(k=t.__c).__H;e&&(Le===k?(e.__h=[],k.__h=[],e.__.some(function(r){r.__N&&(r.__=r.__N),r.u=r.__N=void 0})):(e.__h.some(ye),e.__h.some(ze),e.__h=[],ie=0)),Le=k},C.diffed=function(t){mt&&mt(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(Vt.push(e)!==1&&ht===C.requestAnimationFrame||((ht=C.requestAnimationFrame)||Pr)(xr)),e.__H.__.some(function(r){r.u&&(r.__H=r.u,r.u=void 0)})),Le=k=null},C.__c=function(t,e){e.some(function(r){try{r.__h.some(ye),r.__h=r.__h.filter(function(i){return!i.__||ze(i)})}catch(i){e.some(function(s){s.__h&&(s.__h=[])}),e=[],C.__e(i,r.__v)}}),_t&&_t(t,e)},C.unmount=function(t){gt&&gt(t);var e,r=t.__c;r&&r.__H&&(r.__H.__.some(function(i){try{ye(i)}catch(s){e=s}}),r.__H=void 0,e&&C.__e(e,r.__v))};var vt=typeof requestAnimationFrame=="function";function Pr(t){var e,r=function(){clearTimeout(i),vt&&cancelAnimationFrame(e),setTimeout(t)},i=setTimeout(r,35);vt&&(e=requestAnimationFrame(r))}function ye(t){var e=k,r=t.__c;typeof r=="function"&&(t.__c=void 0,r()),k=e}function ze(t){var e=k;t.__c=t.__(),k=e}function Yt(t,e){return!t||t.length!==e.length||e.some(function(r,i){return r!==t[i]})}function Jt(t,e){return typeof e=="function"?e(t):e}function Ar({tabs:t,active:e,onSelect:r}){return o("nav",{class:"tab-bar",role:"tablist","aria-label":"Sections",children:t.map(i=>o("button",{type:"button",role:"tab",id:`tab-${i.id}`,"aria-selected":i.id===e,"aria-controls":`panel-${i.id}`,class:i.id===e?"active":void 0,onClick:()=>r(i.id),children:i.label},i.id))})}const _={mqtt:{hostMax:63,portMin:1,portMax:65535,loginMax:31,passwordMax:31,haDiscoveryPrefixMax:63,topicMax:63},modbus:{speeds:[1200,2400,4800,9600,19200,38400,57600,115200],addressMin:1,addressMax:254},rainwater:{topicMax:63,maxHeightMinExclusive:0,maxHeightMax:10,fillLevelStartPercent:10,maxFillLevelMax:100},meter:{valueMin:0,valueMax:1e9}},Ie="Device returned an empty response. Check the device logs and try again.",Ze="Device returned an empty response.",Kt="Could not reach the device. Check that you are connected to its network and try again.",me={};function Gt(){return{ok:!1,message:Kt}}function Mr(t){try{const e=JSON.parse(t);if(e&&typeof e=="object"&&"message"in e){const r=e.message;if(typeof r=="string"&&r)return r}}catch{}}async function Zt(t){let e=`Request failed (HTTP ${t.status}).`;try{const r=await t.text();r&&(e=Mr(r)??e)}catch{}return{ok:!1,status:t.status,message:e}}async function re(t,e){let r;try{r=await fetch(t,{headers:{Accept:"application/json"}})}catch{return Gt()}if(!r.ok)return Zt(r);let i;try{i=await r.text()}catch{return{ok:!1,status:r.status,message:Kt}}if(!i.trim())return{ok:!1,status:r.status,message:e};try{return{ok:!0,data:JSON.parse(i)}}catch{return{ok:!1,status:r.status,message:e}}}async function Xt(t,e){let r;try{r=await fetch(t,e)}catch{return Gt()}if(!r.ok)return Zt(r);let i="";try{i=await r.text()}catch{return{ok:!0,data:me}}if(!i.trim())return{ok:!0,data:me};try{const s=JSON.parse(i);return{ok:!0,data:s&&typeof s=="object"?s:me}}catch{return{ok:!0,data:me}}}function De(t,e){return Xt(t,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:e.toString()})}function B(t,e,r,i=!1){if(typeof t!="string")throw new Error(`${e} is required.`);if(!i&&t.length===0)throw new Error(`${e} must not be empty.`);if(t.length>r)throw new Error(`${e} must be at most ${r} characters.`);return t}function ee(t,e,r,i){if(typeof t!="number"||!Number.isFinite(t))throw new Error(`${e} must be a number.`);if(t<r||t>i)throw new Error(`${e} must be between ${r} and ${i}.`);return t}function kr(t,e){if(typeof t!="boolean")throw new Error(`${e} must be true or false.`);return t}function Er(t,e,r){if(typeof t!="number"||!Number.isFinite(t))throw new Error(`${e} must be a number.`);if(!r.includes(t))throw new Error(`${e} must be one of: ${r.join(", ")}.`);return t}function Tr(){return re("/api/settings",Ie)}function Cr(){return re("/api/status",Ze)}function er(){return re("/healthcheck/healty",Ze)}function Ir(){return re("/healthcheck/ready",Ze)}function Dr(){return re("/api/settings/modbus",Ie)}function Hr(){return re("/api/settings/rainwater",Ie)}function Wr(){return re("/api/settings/meter",Ie)}function Ur(t){const e=Er(t.modbusSpeed,"Modbus speed",_.modbus.speeds),r=ee(t.addressQDY30A,"QDY30A address",_.modbus.addressMin,_.modbus.addressMax),i=ee(t.addressWBMAI6,"WB-MAI6 address",_.modbus.addressMin,_.modbus.addressMax),s=new URLSearchParams;return s.set("modbusSpeed",String(e)),s.set("addressQDY30A",String(r)),s.set("addressWBMAI6",String(i)),De("/api/settings/modbus",s)}function Nr(t){const e=B(t.rainwaterPitLevelTopic,"Pit level topic",_.rainwater.topicMax,!0),r=ee(t.rainwaterPitMaxHeight,"Pit max height",_.rainwater.maxHeightMinExclusive,_.rainwater.maxHeightMax);if(r<=_.rainwater.maxHeightMinExclusive)throw new Error("Pit max height must be greater than 0.");const i=ee(t.rainwaterPitMaxFillLevel,"Pit max fill level",_.rainwater.fillLevelStartPercent,_.rainwater.maxFillLevelMax);if(i<=_.rainwater.fillLevelStartPercent)throw new Error(`Pit max fill level must be greater than ${_.rainwater.fillLevelStartPercent}.`);const s=new URLSearchParams;return s.set("rainwaterPitLevelTopic",e),s.set("rainwaterPitMaxHeight",String(r)),s.set("rainwaterPitMaxFillLevel",String(i)),De("/api/settings/rainwater",s)}function Lr(t){const e=ee(t.homeWaterInitialValue,"Home water initial value",_.meter.valueMin,_.meter.valueMax),r=ee(t.yardWaterInitialValue,"Yard water initial value",_.meter.valueMin,_.meter.valueMax),i=new URLSearchParams;return i.set("homeWaterInitialValue",String(e)),i.set("yardWaterInitialValue",String(r)),De("/api/settings/meter",i)}function qr(t){const e=B(t.host,"MQTT host",_.mqtt.hostMax),r=ee(t.port,"MQTT port",_.mqtt.portMin,_.mqtt.portMax),i=B(t.login,"MQTT login",_.mqtt.loginMax,!0),s=B(t.password,"MQTT password",_.mqtt.passwordMax,!0),n=B(t.haDiscoveryPrefix,"HA discovery prefix",_.mqtt.haDiscoveryPrefixMax),a=kr(t.mqttIsHADiscovery,"HA discovery flag"),c=B(t.stateTopic,"State topic",_.mqtt.topicMax),d=B(t.commandTopic,"Command topic",_.mqtt.topicMax),u=B(t.mqttTopicPrefix,"MQTT topic prefix",_.mqtt.topicMax),h=new URLSearchParams;return h.set("host",e),h.set("port",String(r)),h.set("login",i),h.set("password",s),h.set("haDiscoveryPrefix",n),h.set("mqttIsHADiscovery",a?"true":"false"),h.set("stateTopic",c),h.set("commandTopic",d),h.set("mqttTopicPrefix",u),De("/api/settings/mqtt",h)}function Rr(){return Xt("/api/reboot",{method:"POST"})}function M({kind:t="info",message:e,onClose:r}){return o("div",{class:`banner banner-${t}`,role:"status",children:[o("span",{children:e}),r?o("button",{type:"button",class:"banner-close","aria-label":"Dismiss",onClick:r,children:"×"}):null]})}function Fr(t){switch(t){case"primary":return"btn btn-primary";case"danger":return"btn btn-danger";default:return"btn"}}function W({children:t,variant:e="default",type:r="button",disabled:i,title:s,onClick:n}){return o("button",{type:r,class:Fr(e),disabled:i,title:s,onClick:n,children:t})}function Or(t){return o(W,{...t,variant:"danger"})}function q({title:t,children:e,class:r}){return o("section",{class:r?`card ${r}`:"card",children:[t?o("h2",{children:t}):null,e]})}function Br({label:t,checked:e,onChange:r,disabled:i,help:s,name:n}){const a=Ge();return o("div",{class:"checkbox-field",children:[o("label",{class:"checkbox-label",for:a,children:[o("input",{id:a,name:n,type:"checkbox",checked:e,disabled:i,onChange:d=>{r?.(d.currentTarget.checked)}}),o("span",{children:t})]}),s?o("span",{class:"field-help",children:s}):null]})}function D({label:t,value:e,onInput:r,type:i="text",name:s,placeholder:n,maxLength:a,min:c,max:d,step:u,error:h,help:m,disabled:l,required:p,autoComplete:b,inputMode:w}){const $=Ge();return o("label",{class:"field",for:$,children:[o("span",{class:"field-label",children:t}),o("input",{id:$,name:s,type:i,value:e,placeholder:n,maxLength:a,min:c,max:d,step:u,disabled:l,required:p,autoComplete:b,inputMode:w,onInput:g=>{r?.(g.currentTarget.value)},"aria-invalid":h?!0:void 0}),m&&!h?o("span",{class:"field-help",children:m}):null,h?o("span",{class:"field-error",children:h}):null]})}function tr(){return o(M,{kind:"info",message:"Changes are saved to flash and take effect only after a reboot."})}function zr({label:t,value:e,onInput:r,maxLength:i,error:s,help:n,disabled:a,autoComplete:c}){const[d,u]=v(!1);return o("div",{class:"password-field",children:[o(D,{label:t,value:e,onInput:r,type:d?"text":"password",maxLength:i,error:s,help:n,disabled:a,autoComplete:c}),o("button",{type:"button",class:"btn reveal-toggle","aria-pressed":d,disabled:a,onClick:()=>u(h=>!h),children:d?"Hide":"Show"})]})}const jr={host:"",port:"",login:"",password:"",haDiscoveryPrefix:"",mqttIsHADiscovery:!1,stateTopic:"",commandTopic:"",mqttTopicPrefix:""};function Vr(t){const e={};t.host.trim().length===0?e.host="Host is required.":t.host.length>_.mqtt.hostMax&&(e.host=`At most ${_.mqtt.hostMax} characters.`);const r=Number(t.port);return t.port.trim()===""?e.port="Port is required.":(!Number.isInteger(r)||r<1||r>65535)&&(e.port="Port must be an integer between 1 and 65535."),t.login.length>_.mqtt.loginMax&&(e.login=`At most ${_.mqtt.loginMax} characters.`),t.password.length>_.mqtt.passwordMax&&(e.password=`At most ${_.mqtt.passwordMax} characters.`),t.haDiscoveryPrefix.trim().length===0?e.haDiscoveryPrefix="Discovery prefix is required.":t.haDiscoveryPrefix.length>_.mqtt.haDiscoveryPrefixMax&&(e.haDiscoveryPrefix=`At most ${_.mqtt.haDiscoveryPrefixMax} characters.`),t.stateTopic.trim().length===0?e.stateTopic="Required - the device crashes if the state topic is missing.":t.stateTopic.length>_.mqtt.topicMax&&(e.stateTopic=`At most ${_.mqtt.topicMax} characters.`),t.commandTopic.trim().length===0?e.commandTopic="Required - the device crashes if the command topic is missing.":t.commandTopic.length>_.mqtt.topicMax&&(e.commandTopic=`At most ${_.mqtt.topicMax} characters.`),t.mqttTopicPrefix.trim().length===0?e.mqttTopicPrefix="Topic prefix is required.":t.mqttTopicPrefix.length>_.mqtt.topicMax&&(e.mqttTopicPrefix=`At most ${_.mqtt.topicMax} characters.`),e}function Qr(t){return Object.keys(t).length>0}function Yr(){const[t,e]=v(!1),[r,i]=v(null),[s,n]=v(jr),[a,c]=v({}),[d,u]=v(!1),[h,m]=v(null),[l,p]=v(null),b=H(async()=>{i(null);const f=await Tr();f.ok?n({host:f.data.mqttHost,port:String(f.data.mqttPort),login:f.data.mqttLogin,password:f.data.mqttPassword,haDiscoveryPrefix:f.data.mqttHADiscoveryPrefix,mqttIsHADiscovery:f.data.mqttIsHADiscovery,stateTopic:f.data.mqttStateTopic,commandTopic:f.data.mqttCommandTopic,mqttTopicPrefix:f.data.mqttTopicPrefix}):i(f.message),e(!0)},[]);V(()=>{b()},[b]);const w=f=>n(g=>({...g,...f})),$=H(async f=>{f.preventDefault();const g=Vr(s);if(c(g),m(null),p(null),!Qr(g)){u(!0);try{const x=await qr({host:s.host,port:Number(s.port),login:s.login,password:s.password,haDiscoveryPrefix:s.haDiscoveryPrefix,mqttIsHADiscovery:s.mqttIsHADiscovery,stateTopic:s.stateTopic,commandTopic:s.commandTopic,mqttTopicPrefix:s.mqttTopicPrefix});x.ok?m("MQTT settings saved to flash."):p(x.message)}catch(x){p(x instanceof Error?x.message:String(x))}finally{u(!1)}}},[s]);return t?o("div",{class:"stack",children:[o(tr,{}),r?o(N,{children:[o(M,{kind:"error",message:r}),o("div",{class:"form-actions",children:o(W,{onClick:()=>{b()},children:"Retry"})})]}):null,o(q,{title:"MQTT",children:o("form",{onSubmit:$,children:[o(D,{label:"Host",value:s.host,onInput:f=>w({host:f}),maxLength:_.mqtt.hostMax,error:a.host,autoComplete:"off",disabled:d}),o(D,{label:"Port",value:s.port,onInput:f=>w({port:f}),type:"number",min:1,max:65535,inputMode:"numeric",error:a.port,disabled:d}),o(D,{label:"Login",value:s.login,onInput:f=>w({login:f}),maxLength:_.mqtt.loginMax,error:a.login,autoComplete:"off",disabled:d}),o(zr,{label:"Password",value:s.password,onInput:f=>w({password:f}),maxLength:_.mqtt.passwordMax,error:a.password,autoComplete:"new-password",disabled:d}),o(D,{label:"HA discovery prefix",value:s.haDiscoveryPrefix,onInput:f=>w({haDiscoveryPrefix:f}),maxLength:_.mqtt.haDiscoveryPrefixMax,error:a.haDiscoveryPrefix,autoComplete:"off",disabled:d}),o(Br,{label:"Enable Home Assistant discovery",checked:s.mqttIsHADiscovery,onChange:f=>w({mqttIsHADiscovery:f}),disabled:d}),o(D,{label:"State topic",value:s.stateTopic,onInput:f=>w({stateTopic:f}),maxLength:_.mqtt.topicMax,error:a.stateTopic,help:"Must not be empty: the device crashes on a missing state topic.",autoComplete:"off",disabled:d}),o(D,{label:"Command topic",value:s.commandTopic,onInput:f=>w({commandTopic:f}),maxLength:_.mqtt.topicMax,error:a.commandTopic,help:"Must not be empty: the device crashes on a missing command topic.",autoComplete:"off",disabled:d}),o(D,{label:"Topic prefix",value:s.mqttTopicPrefix,onInput:f=>w({mqttTopicPrefix:f}),maxLength:_.mqtt.topicMax,error:a.mqttTopicPrefix,help:"Prefix used for Home Assistant discovery entities; must not be empty.",autoComplete:"off",disabled:d}),h?o(M,{kind:"success",message:h,onClose:()=>m(null)}):null,l?o(M,{kind:"error",message:l,onClose:()=>p(null)}):null,o("div",{class:"form-actions",children:o(W,{type:"submit",variant:"primary",disabled:d,children:d?"Saving…":"Save MQTT"})})]})})]}):o(q,{title:"Connections",children:o("p",{class:"muted",children:"Loading connection settings…"})})}const Jr={homeWaterInitialValue:"",yardWaterInitialValue:""};function wt(t){if(t.trim()==="")return null;const e=Number(t);return Number.isFinite(e)?e:null}function Kr(t){return Object.keys(t).length>0}function Gr(t){const e={},r=wt(t.homeWaterInitialValue);(r===null||r<0)&&(e.homeWaterInitialValue="Enter a value of 0 or more.");const i=wt(t.yardWaterInitialValue);return(i===null||i<0)&&(e.yardWaterInitialValue="Enter a value of 0 or more."),e}function Zr(){const[t,e]=v(!1),[r,i]=v(null),[s,n]=v(Jr),[a,c]=v({}),[d,u]=v(null),[h,m]=v(null),[l,p]=v(null),[b,w]=v(null),[$,f]=v(null),g=H(async()=>{i(null);const P=await Wr();P.ok?n({homeWaterInitialValue:String(P.data.homeWaterInitialValue),yardWaterInitialValue:String(P.data.yardWaterInitialValue)}):i(P.message),e(!0)},[]);V(()=>{g()},[g]);const x=H(async P=>{const L=Gr(s);c(L);const R=P==="home"?m:w,U=P==="home"?p:f;if(R(null),U(null),!Kr(L)){u(P);try{const T=await Lr({homeWaterInitialValue:Number(s.homeWaterInitialValue),yardWaterInitialValue:Number(s.yardWaterInitialValue)});T.ok?R("Counter recalibrated to the entered reading."):U(T.message)}catch(T){U(T instanceof Error?T.message:String(T))}finally{u(null)}}},[s]);if(!t)return o("div",{class:"stack",children:o(q,{title:"Meters",children:o("p",{class:"muted",children:"Loading meter values…"})})});const E=d!==null,I=(P,L,R)=>{const U=P==="home",T=U?"homeWaterInitialValue":"yardWaterInitialValue",O=s[T],hr=a[T],at=U?h:b,ot=U?l:$;return o(q,{title:L,children:o("form",{onSubmit:Ue=>{Ue.preventDefault(),x(P)},children:[o(D,{label:R,value:O,onInput:Ue=>n(pr=>({...pr,[T]:Ue})),type:"number",min:0,inputMode:"decimal",error:hr,help:"Cumulative counter value in litres.",disabled:E}),at?o(M,{kind:"success",message:at,onClose:()=>U?m(null):w(null)}):null,ot?o(M,{kind:"error",message:ot,onClose:()=>U?p(null):f(null)}):null,o("div",{class:"form-actions",children:o(W,{type:"submit",variant:"primary",disabled:E,children:d===P?"Saving…":"Save"})})]})})};return o("div",{class:"stack",children:[o(M,{kind:"info",message:"Setting an initial value recalibrates the pulse counter to that reading. It is persisted immediately and needs no reboot."}),r?o(N,{children:[o(M,{kind:"error",message:r}),o("div",{class:"form-actions",children:o(W,{onClick:()=>{g()},children:"Retry"})})]}):null,I("home","Home water","Home water counter"),I("yard","Yard water","Yard water counter")]})}function Xr(){const t=Qt(null);return V(()=>{const e=document.createElement("edn-network-page");return t.current?.append(e),()=>e.remove()},[]),o("div",{ref:t})}function es({label:t,value:e,options:r,onChange:i,error:s,help:n,disabled:a,required:c,name:d}){const u=Ge(),h=m=>{i?.(m.currentTarget.value)};return o("label",{class:"field",for:u,children:[o("span",{class:"field-label",children:t}),o("select",{id:u,name:d,value:String(e),disabled:a,required:c,onChange:h,"aria-invalid":s?!0:void 0,children:r.map(m=>o("option",{value:m.value,disabled:m.disabled,children:m.label},m.value))}),n&&!s?o("span",{class:"field-help",children:n}):null,s?o("span",{class:"field-error",children:s}):null]})}function Ae(t){if(t.trim()==="")return null;const e=Number(t);return Number.isFinite(e)?e:null}function rr(t){return Object.keys(t).length>0}const ts={modbusSpeed:"9600",addressQDY30A:"",addressWBMAI6:""};function rs(t){const e=_.modbus.speeds.map(i=>({value:String(i),label:`${i} baud`})),r=Ae(t);return r!==null&&!_.modbus.speeds.includes(r)&&e.unshift({value:t,label:`${t} (current)`}),e}function yt(t,e){const r=Ae(t);if(r===null||!Number.isInteger(r)||r<_.modbus.addressMin||r>_.modbus.addressMax)return`${e} must be an integer between ${_.modbus.addressMin} and ${_.modbus.addressMax}.`}function ss(){const[t,e]=v(!1),[r,i]=v(null),[s,n]=v(ts),[a,c]=v({}),[d,u]=v(!1),[h,m]=v(null),[l,p]=v(null),b=Ce(()=>rs(s.modbusSpeed),[s.modbusSpeed]),w=H(async()=>{i(null);const g=await Dr();g.ok?n({modbusSpeed:String(g.data.modbusSpeed),addressQDY30A:String(g.data.addressQDY30A),addressWBMAI6:String(g.data.addressWBMAI6)}):i(g.message),e(!0)},[]);V(()=>{w()},[w]);const $=g=>n(x=>({...x,...g})),f=H(async g=>{g.preventDefault();const x={addressQDY30A:yt(s.addressQDY30A,"QDY30A address"),addressWBMAI6:yt(s.addressWBMAI6,"WB-MAI6 address")};if(c(x),m(null),p(null),!rr(x)){u(!0);try{const E=await Ur({modbusSpeed:Number(s.modbusSpeed),addressQDY30A:Number(s.addressQDY30A),addressWBMAI6:Number(s.addressWBMAI6)});E.ok?m("Modbus settings saved to flash."):p(E.message)}catch(E){p(E instanceof Error?E.message:String(E))}finally{u(!1)}}},[s]);return t?o(q,{title:"Modbus",children:[r?o(N,{children:[o(M,{kind:"error",message:r}),o("div",{class:"form-actions",children:o(W,{onClick:()=>{w()},children:"Retry"})})]}):null,o("form",{onSubmit:f,children:[o(es,{label:"Bus speed",value:s.modbusSpeed,options:b,onChange:g=>$({modbusSpeed:g}),help:"Only the speeds supported by the firmware are listed.",disabled:d}),o(D,{label:"QDY30A address",value:s.addressQDY30A,onInput:g=>$({addressQDY30A:g}),type:"number",min:_.modbus.addressMin,max:_.modbus.addressMax,inputMode:"numeric",error:a.addressQDY30A,disabled:d}),o(D,{label:"WB-MAI6 address",value:s.addressWBMAI6,onInput:g=>$({addressWBMAI6:g}),type:"number",min:_.modbus.addressMin,max:_.modbus.addressMax,inputMode:"numeric",error:a.addressWBMAI6,disabled:d}),h?o(M,{kind:"success",message:h,onClose:()=>m(null)}):null,l?o(M,{kind:"error",message:l,onClose:()=>p(null)}):null,o("div",{class:"form-actions",children:o(W,{type:"submit",variant:"primary",disabled:d,children:d?"Saving…":"Save Modbus"})})]})]}):o(q,{title:"Modbus",children:o("p",{class:"muted",children:"Loading Modbus settings…"})})}const is={rainwaterPitLevelTopic:"",rainwaterPitMaxHeight:"",rainwaterPitMaxFillLevel:""};function ns(){const[t,e]=v(!1),[r,i]=v(null),[s,n]=v(is),[a,c]=v({}),[d,u]=v(!1),[h,m]=v(null),[l,p]=v(null),b=H(async()=>{i(null);const f=await Hr();f.ok?n({rainwaterPitLevelTopic:f.data.rainwaterPitLevelTopic,rainwaterPitMaxHeight:String(f.data.rainwaterPitMaxHeight),rainwaterPitMaxFillLevel:String(f.data.rainwaterPitMaxFillLevel)}):i(f.message),e(!0)},[]);V(()=>{b()},[b]);const w=f=>n(g=>({...g,...f})),$=H(async f=>{f.preventDefault();const g={};s.rainwaterPitLevelTopic.length>_.rainwater.topicMax&&(g.rainwaterPitLevelTopic=`At most ${_.rainwater.topicMax} characters.`);const x=Ae(s.rainwaterPitMaxHeight);(x===null||x<=_.rainwater.maxHeightMinExclusive||x>_.rainwater.maxHeightMax)&&(g.rainwaterPitMaxHeight=`Height must be greater than 0 and at most ${_.rainwater.maxHeightMax} m.`);const E=Ae(s.rainwaterPitMaxFillLevel);if((E===null||E<=_.rainwater.fillLevelStartPercent||E>_.rainwater.maxFillLevelMax)&&(g.rainwaterPitMaxFillLevel=`Fill level must be greater than ${_.rainwater.fillLevelStartPercent} and at most ${_.rainwater.maxFillLevelMax}.`),c(g),m(null),p(null),!rr(g)){u(!0);try{const I=await Nr({rainwaterPitLevelTopic:s.rainwaterPitLevelTopic,rainwaterPitMaxHeight:Number(s.rainwaterPitMaxHeight),rainwaterPitMaxFillLevel:Number(s.rainwaterPitMaxFillLevel)});I.ok?m("Rainwater settings saved to flash."):p(I.message)}catch(I){p(I instanceof Error?I.message:String(I))}finally{u(!1)}}},[s]);return t?o(q,{title:"Rainwater pit",children:[r?o(N,{children:[o(M,{kind:"error",message:r}),o("div",{class:"form-actions",children:o(W,{onClick:()=>{b()},children:"Retry"})})]}):null,o("form",{onSubmit:$,children:[o(D,{label:"Pit level topic",value:s.rainwaterPitLevelTopic,onInput:f=>w({rainwaterPitLevelTopic:f}),maxLength:_.rainwater.topicMax,placeholder:"Leave empty to disable auto-filling",help:"MQTT topic that reports the pit level; empty disables auto-filling.",error:a.rainwaterPitLevelTopic,autoComplete:"off",disabled:d}),o(D,{label:"Pit max height",value:s.rainwaterPitMaxHeight,onInput:f=>w({rainwaterPitMaxHeight:f}),type:"number",min:_.rainwater.maxHeightMinExclusive,max:_.rainwater.maxHeightMax,step:.1,inputMode:"decimal",help:`Height of the pit in metres (greater than 0, at most ${_.rainwater.maxHeightMax}).`,error:a.rainwaterPitMaxHeight,disabled:d}),o(D,{label:"Pit max fill level",value:s.rainwaterPitMaxFillLevel,onInput:f=>w({rainwaterPitMaxFillLevel:f}),type:"number",min:_.rainwater.fillLevelStartPercent,max:_.rainwater.maxFillLevelMax,step:1,inputMode:"numeric",help:`Percentage that stops filling; must be greater than ${_.rainwater.fillLevelStartPercent}% and at most ${_.rainwater.maxFillLevelMax}%.`,error:a.rainwaterPitMaxFillLevel,disabled:d}),h?o(M,{kind:"success",message:h,onClose:()=>m(null)}):null,l?o(M,{kind:"error",message:l,onClose:()=>p(null)}):null,o("div",{class:"form-actions",children:o(W,{type:"submit",variant:"primary",disabled:d,children:d?"Saving…":"Save rainwater"})})]})]}):o(q,{title:"Rainwater pit",children:o("p",{class:"muted",children:"Loading rainwater settings…"})})}function as(){return o("div",{class:"stack",children:[o(tr,{}),o(ss,{}),o(ns,{})]})}const qe=2e3,os=12e4;function ls(){const[t,e]=v("idle"),r=Qt(0);V(()=>{if(t!=="rebooting")return;let a=!1,c;const d=()=>{er().then(u=>{if(!a){if(u.ok){e("ready");return}if(r.current+=1,r.current*qe>=os){e("timeout");return}c=window.setTimeout(d,qe)}})};return c=window.setTimeout(d,qe),()=>{a=!0,c!==void 0&&window.clearTimeout(c)}},[t]);const i=H(()=>{r.current=0,e("rebooting")},[]),s=H(()=>e("idle"),[]),n=H(()=>{r.current=0,e("rebooting")},[]);return Ce(()=>({phase:t,start:i,dismiss:s,retry:n}),[t,i,s,n])}function ds({flow:t}){return t.phase==="idle"?null:o("div",{class:"reboot-overlay",role:"alertdialog","aria-modal":"true","aria-label":"Device rebooting",children:o("div",{class:"reboot-dialog card",children:[o("h2",{children:"Device is rebooting"}),t.phase==="rebooting"?o(N,{children:[o("p",{children:"Waiting for the device to come back online. This usually takes 20–60 seconds."}),o("p",{class:"muted","aria-live":"polite",children:"Polling device health…"})]}):null,t.phase==="ready"?o(N,{children:[o(M,{kind:"success",message:"The device is back online."}),o("div",{class:"form-actions",children:o(W,{variant:"primary",onClick:()=>window.location.reload(),children:"Reload panel"})})]}):null,t.phase==="timeout"?o(N,{children:[o(M,{kind:"error",message:"No response after about two minutes. Check the power and network, then reload or keep waiting."}),o("div",{class:"form-actions",children:[o(W,{onClick:t.retry,children:"Keep waiting"}),o(W,{onClick:t.dismiss,children:"Dismiss"})]})]}):null]})})}const cs=1e4;function us(t){const e=Math.max(0,Math.floor(t)),r=Math.floor(e/86400),i=Math.floor(e%86400/3600),s=Math.floor(e%3600/60),n=e%60,a=[];return r&&a.push(`${r}d`),(r||i)&&a.push(`${i}h`),(r||i||s)&&a.push(`${s}m`),a.push(`${n}s`),a.join(" ")}function hs(t){return Number.isFinite(t)?`${Math.round(t/1024)} KB (${Math.round(t)} bytes)`:String(t)}function ps(){const[t,e]=v(null),[r,i]=v(null),[s,n]=v(!1),[a,c]=v(null),[d,u]=v(null),[h,m]=v(!0),[l,p]=v(null),[b,w]=v(!1),$=ls(),f=H(async()=>{const P=await Cr();P.ok?(e(P.data),i(null)):i(P.message),n(!0)},[]),g=H(async()=>{m(!0);const[P,L]=await Promise.all([er(),Ir()]);c(P),u(L),m(!1)},[]);V(()=>{f();const P=window.setInterval(()=>{f()},cs);return()=>window.clearInterval(P)},[f]),V(()=>{g()},[g]);const x=H(async()=>{if(!window.confirm("Reboot the device now? Water metering will be offline for about 20-60 seconds."))return;p(null),w(!0);const L=await Rr();w(!1),L.ok?$.start():p(L.message)},[$.start]),E=h&&!a?o("p",{class:"muted",children:"Checking device health…"}):a?a.ok?o(M,{kind:a.data.healty?"success":"error",message:a.data.healty?"Healthcheck is OK.":"Healthcheck reports failure."}):o(M,{kind:"error",message:a.message}):null,I=d?d.ok?o(M,{kind:d.data.ready?"success":"info",message:d.data.ready?"All registered services are ready.":`Not ready: ${d.data.message}`}):d.status===500?o(M,{kind:"info",message:`Not ready: ${d.message}`}):o(M,{kind:"error",message:d.message}):null;return o("div",{class:"stack",children:[o(q,{title:"Device",children:[s?r?o(N,{children:[o(M,{kind:"error",message:r}),o("div",{class:"form-actions",children:o(W,{onClick:()=>{f()},children:"Retry"})})]}):t?o("dl",{class:"kv",children:[o("dt",{children:"Wi-Fi"}),o("dd",{children:o("span",{class:t.wifiStatus==="connected"?"badge badge-on":"badge badge-off",children:t.wifiStatus})}),o("dt",{children:"Free heap"}),o("dd",{children:hs(t.freeHeap)}),o("dt",{children:"Uptime"}),o("dd",{children:us(t.uptime)}),o("dt",{children:"Last reset reason"}),o("dd",{children:t.lastResetReason})]}):null:o("p",{class:"muted",children:"Loading status…"}),o("p",{class:"muted mt",children:"Status refreshes automatically every 10 seconds."})]}),o(q,{title:"Health",children:[E,I,o("div",{class:"form-actions",children:o(W,{onClick:()=>{g()},disabled:h,children:h?"Checking…":"Refresh health"})})]}),o(q,{title:"Maintenance",children:[o("p",{class:"muted",children:"A reboot briefly interrupts water metering and MQTT reporting. Configuration changes saved on the other tabs only take effect after a reboot."}),l?o(M,{kind:"error",message:l,onClose:()=>p(null)}):null,o("div",{class:"form-actions",children:o(Or,{onClick:()=>{x()},disabled:b||$.phase!=="idle",children:"Reboot device"})})]}),o(ds,{flow:$})]})}const fs=[{id:"status",label:"Status"},{id:"meters",label:"Meters"},{id:"settings",label:"Settings"},{id:"connections",label:"MQTT"},{id:"network",label:"Network"}];function ms(t){switch(t){case"status":return o(ps,{});case"meters":return o(Zr,{});case"settings":return o(as,{});case"connections":return o(Yr,{});case"network":return o(Xr,{})}}function _s(){const[t,e]=v("status");return o(N,{children:[o("header",{class:"app-header",children:[o("div",{class:"brand",children:[o("svg",{class:"brand-mark",viewBox:"0 0 24 24",width:"20",height:"20","aria-hidden":"true",focusable:"false",children:[o("path",{fill:"currentColor",d:"M12 23c4.4 0 7.5-2.7 7.5-6.7 0-2.3-1-4.3-2.3-6.1-.8 1.6-1.8 2.6-2.9 3.3.4-1.4.2-3.1-.7-5C12.7 6.1 11.3 4.3 10.4 2c-.3 2.3-1.4 4-2.7 5.5C6.4 9.1 4.5 11 4.5 15c0 4 3.1 8 7.5 8z"}),o("path",{fill:"currentColor",opacity:".45",d:"M12 21.2c-1.6 0-2.8-1.1-2.8-2.8 0-1.3.7-2.1 1.5-3 .3.7.8 1.1 1.4 1.4-.2-1.2.1-2.4 1-3.5.9 1.2 1.4 2.6 1.4 4 0 2.3-1.4 3.9-2.5 3.9z"})]}),o("h1",{children:"Neptunus"})]}),o("span",{class:"hint",children:"water metering & rainwater controller"})]}),o(Ar,{tabs:fs,active:t,onSelect:e}),o("main",{class:"tab-content",id:`panel-${t}`,role:"tabpanel","aria-labelledby":`tab-${t}`,children:ms(t)})]})}function gs(t){if(t&&typeof t=="object"&&"error"in t){let e=t.error;if(typeof e=="string"&&e.length>0)return e}}function sr(t={}){let e=t.baseUrl??"",r=t.headers??{};async function i(s,n){let a;try{a=await fetch(`${e}${s}`,{...n,headers:{Accept:"application/json",...n?.body===void 0?{}:{"Content-Type":"application/json"},...r}})}catch(h){return n?.signal?.aborted===!0||typeof h=="object"&&h&&h.name==="AbortError"?{ok:!1,message:"Request aborted."}:{ok:!1,message:"Network request failed. Check the device connection and try again."}}let c=await a.text().catch(()=>""),d,u=!1;if(c.length>0)try{d=JSON.parse(c),u=!0}catch{u=!1}if(!a.ok){let h=gs(d);return{ok:!1,status:a.status,message:h??`Request failed with HTTP ${a.status}.`}}return u?{ok:!0,data:d}:{ok:!1,status:a.status,message:`Unexpected response from server (HTTP ${a.status}).`}}return{getSettings(s){return i("/api/network/settings",{signal:s})},saveSettings(s,n){return i("/api/network/settings",{method:"POST",body:JSON.stringify(s),signal:n})},getStatus(s){return i("/api/network/status",{signal:s})},wifiList(s){return i("/api/wifi/list",{signal:s})}}}var $e=globalThis,Xe=$e.ShadowRoot&&($e.ShadyCSS===void 0||$e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,et=Symbol(),$t=new WeakMap,ir=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==et)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(Xe&&t===void 0){let r=e!==void 0&&e.length===1;r&&(t=$t.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&$t.set(e,t))}return t}toString(){return this.cssText}},bs=t=>new ir(typeof t=="string"?t:t+"",void 0,et),tt=(t,...e)=>new ir(t.length===1?t[0]:e.reduce((r,i,s)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]),t,et),vs=(t,e)=>{if(Xe)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(let r of e){let i=document.createElement("style"),s=$e.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=r.cssText,t.appendChild(i)}},St=Xe?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(let i of e.cssRules)r+=i.cssText;return bs(r)})(t):t,{is:ws,defineProperty:ys,getOwnPropertyDescriptor:$s,getOwnPropertyNames:Ss,getOwnPropertySymbols:xs,getPrototypeOf:Ps}=Object,He=globalThis,xt=He.trustedTypes,As=xt?xt.emptyScript:"",Ms=He.reactiveElementPolyfillSupport,ce=(t,e)=>t,je={toAttribute(t,e){switch(e){case Boolean:t=t?As:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},nr=(t,e)=>!ws(t,e),Pt={attribute:!0,type:String,converter:je,reflect:!1,useDefault:!1,hasChanged:nr};Symbol.metadata??=Symbol("metadata"),He.litPropertyMetadata??=new WeakMap;var se=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Pt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let r=Symbol(),i=this.getPropertyDescriptor(t,r,e);i!==void 0&&ys(this.prototype,t,i)}}static getPropertyDescriptor(t,e,r){let{get:i,set:s}=$s(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:i,set(n){let a=i?.call(this);s?.call(this,n),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Pt}static _$Ei(){if(this.hasOwnProperty(ce("elementProperties")))return;let t=Ps(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(ce("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ce("properties"))){let e=this.properties,r=[...Ss(e),...xs(e)];for(let i of r)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[r,i]of e)this.elementProperties.set(r,i)}this._$Eh=new Map;for(let[e,r]of this.elementProperties){let i=this._$Eu(e,r);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let r=new Set(t.flat(1/0).reverse());for(let i of r)e.unshift(St(i))}else t!==void 0&&e.push(St(t));return e}static _$Eu(t,e){let r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return vs(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ET(t,e){let r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(i!==void 0&&r.reflect===!0){let s=(r.converter?.toAttribute===void 0?je:r.converter).toAttribute(e,r.type);this._$Em=t,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(t,e){let r=this.constructor,i=r._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let s=r.getPropertyOptions(i),n=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute===void 0?je:s.converter;this._$Em=i;let a=n.fromAttribute(e,s.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(t,e,r,i=!1,s){if(t!==void 0){let n=this.constructor;if(i===!1&&(s=this[t]),r??=n.getPropertyOptions(t),!((r.hasChanged??nr)(s,e)||r.useDefault&&r.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,r))))return;this.C(t,e,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:r,reflect:i,wrapped:s},n){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),s!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[i,s]of r){let{wrapped:n}=s,a=this[i];n!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,s,a)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(e)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};se.elementStyles=[],se.shadowRootOptions={mode:"open"},se[ce("elementProperties")]=new Map,se[ce("finalized")]=new Map,Ms?.({ReactiveElement:se}),(He.reactiveElementVersions??=[]).push("2.1.2");var rt=globalThis,At=t=>t,Me=rt.trustedTypes,Mt=Me?Me.createPolicy("lit-html",{createHTML:t=>t}):void 0,ar="$lit$",j=`lit$${Math.random().toFixed(9).slice(2)}$`,or="?"+j,ks=`<${or}>`,te=document,he=()=>te.createComment(""),pe=t=>t===null||typeof t!="object"&&typeof t!="function",st=Array.isArray,Es=t=>st(t)||typeof t?.[Symbol.iterator]=="function",Re=`[ 	
\f\r]`,oe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,kt=/-->/g,Et=/>/g,Q=RegExp(`>|${Re}(?:([^\\s"'>=/]+)(${Re}*=${Re}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Tt=/'/g,Ct=/"/g,lr=/^(?:script|style|textarea|title)$/i,y=(t=>(e,...r)=>({_$litType$:t,strings:e,values:r}))(1),ne=Symbol.for("lit-noChange"),S=Symbol.for("lit-nothing"),It=new WeakMap,Y=te.createTreeWalker(te,129);function dr(t,e){if(!st(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Mt===void 0?e:Mt.createHTML(e)}var Ts=(t,e)=>{let r=t.length-1,i=[],s,n=e===2?"<svg>":e===3?"<math>":"",a=oe;for(let c=0;c<r;c++){let d=t[c],u,h,m=-1,l=0;for(;l<d.length&&(a.lastIndex=l,h=a.exec(d),h!==null);)l=a.lastIndex,a===oe?h[1]==="!--"?a=kt:h[1]===void 0?h[2]===void 0?h[3]!==void 0&&(a=Q):(lr.test(h[2])&&(s=RegExp("</"+h[2],"g")),a=Q):a=Et:a===Q?h[0]===">"?(a=s??oe,m=-1):h[1]===void 0?m=-2:(m=a.lastIndex-h[2].length,u=h[1],a=h[3]===void 0?Q:h[3]==='"'?Ct:Tt):a===Ct||a===Tt?a=Q:a===kt||a===Et?a=oe:(a=Q,s=void 0);let p=a===Q&&t[c+1].startsWith("/>")?" ":"";n+=a===oe?d+ks:m>=0?(i.push(u),d.slice(0,m)+ar+d.slice(m)+j+p):d+j+(m===-2?c:p)}return[dr(t,n+(t[r]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]},Ve=class cr{constructor({strings:e,_$litType$:r},i){let s;this.parts=[];let n=0,a=0,c=e.length-1,d=this.parts,[u,h]=Ts(e,r);if(this.el=cr.createElement(u,i),Y.currentNode=this.el.content,r===2||r===3){let m=this.el.content.firstChild;m.replaceWith(...m.childNodes)}for(;(s=Y.nextNode())!==null&&d.length<c;){if(s.nodeType===1){if(s.hasAttributes())for(let m of s.getAttributeNames())if(m.endsWith(ar)){let l=h[a++],p=s.getAttribute(m).split(j),b=/([.?@])?(.*)/.exec(l);d.push({type:1,index:n,name:b[2],strings:p,ctor:b[1]==="."?Is:b[1]==="?"?Ds:b[1]==="@"?Hs:We}),s.removeAttribute(m)}else m.startsWith(j)&&(d.push({type:6,index:n}),s.removeAttribute(m));if(lr.test(s.tagName)){let m=s.textContent.split(j),l=m.length-1;if(l>0){s.textContent=Me?Me.emptyScript:"";for(let p=0;p<l;p++)s.append(m[p],he()),Y.nextNode(),d.push({type:2,index:++n});s.append(m[l],he())}}}else if(s.nodeType===8)if(s.data===or)d.push({type:2,index:n});else{let m=-1;for(;(m=s.data.indexOf(j,m+1))!==-1;)d.push({type:7,index:n}),m+=j.length-1}n++}}static createElement(e,r){let i=te.createElement("template");return i.innerHTML=e,i}};function ae(t,e,r=t,i){if(e===ne)return e;let s=i===void 0?r._$Cl:r._$Co?.[i],n=pe(e)?void 0:e._$litDirective$;return s?.constructor!==n&&(s?._$AO?.(!1),n===void 0?s=void 0:(s=new n(t),s._$AT(t,r,i)),i===void 0?r._$Cl=s:(r._$Co??=[])[i]=s),s!==void 0&&(e=ae(t,s._$AS(t,e.values),s,i)),e}var Cs=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:r}=this._$AD,i=(t?.creationScope??te).importNode(e,!0);Y.currentNode=i;let s=Y.nextNode(),n=0,a=0,c=r[0];for(;c!==void 0;){if(n===c.index){let d;c.type===2?d=new it(s,s.nextSibling,this,t):c.type===1?d=new c.ctor(s,c.name,c.strings,this,t):c.type===6&&(d=new Ws(s,this,t)),this._$AV.push(d),c=r[++a]}n!==c?.index&&(s=Y.nextNode(),n++)}return Y.currentNode=te,i}p(t){let e=0;for(let r of this._$AV)r!==void 0&&(r.strings===void 0?r._$AI(t[e]):(r._$AI(t,r,e),e+=r.strings.length-2)),e++}},it=class ur{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,r,i,s){this.type=2,this._$AH=S,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,r=this._$AM;return r!==void 0&&e?.nodeType===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=ae(this,e,r),pe(e)?e===S||e==null||e===""?(this._$AH!==S&&this._$AR(),this._$AH=S):e!==this._$AH&&e!==ne&&this._(e):e._$litType$===void 0?e.nodeType===void 0?Es(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==S&&pe(this._$AH)?this._$AA.nextSibling.data=e:this.T(te.createTextNode(e)),this._$AH=e}$(e){let{values:r,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Ve.createElement(dr(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(r);else{let n=new Cs(s,this),a=n.u(this.options);n.p(r),this.T(a),this._$AH=n}}_$AC(e){let r=It.get(e.strings);return r===void 0&&It.set(e.strings,r=new Ve(e)),r}k(e){st(this._$AH)||(this._$AH=[],this._$AR());let r=this._$AH,i,s=0;for(let n of e)s===r.length?r.push(i=new ur(this.O(he()),this.O(he()),this,this.options)):i=r[s],i._$AI(n),s++;s<r.length&&(this._$AR(i&&i._$AB.nextSibling,s),r.length=s)}_$AR(e=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);e!==this._$AB;){let i=At(e).nextSibling;At(e).remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},We=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,i,s){this.type=1,this._$AH=S,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=S}_$AI(t,e=this,r,i){let s=this.strings,n=!1;if(s===void 0)t=ae(this,t,e,0),n=!pe(t)||t!==this._$AH&&t!==ne,n&&(this._$AH=t);else{let a=t,c,d;for(t=s[0],c=0;c<s.length-1;c++)d=ae(this,a[r+c],e,c),d===ne&&(d=this._$AH[c]),n||=!pe(d)||d!==this._$AH[c],d===S?t=S:t!==S&&(t+=(d??"")+s[c+1]),this._$AH[c]=d}n&&!i&&this.j(t)}j(t){t===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Is=class extends We{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===S?void 0:t}},Ds=class extends We{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==S)}},Hs=class extends We{constructor(t,e,r,i,s){super(t,e,r,i,s),this.type=5}_$AI(t,e=this){if((t=ae(this,t,e,0)??S)===ne)return;let r=this._$AH,i=t===S&&r!==S||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==S&&(r===S||i);i&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Ws=class{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){ae(this,t)}},Us=rt.litHtmlPolyfillSupport;Us?.(Ve,it),(rt.litHtmlVersions??=[]).push("3.3.3");var Ns=(t,e,r)=>{let i=r?.renderBefore??e,s=i._$litPart$;if(s===void 0){let n=r?.renderBefore??null;i._$litPart$=s=new it(e.insertBefore(he(),n),n,void 0,r??{})}return s._$AI(t),s},nt=globalThis,J=class extends se{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ns(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ne}};J._$litElement$=!0,J.finalized=!0,nt.litElementHydrateSupport?.({LitElement:J});var Ls=nt.litElementPolyfillSupport;Ls?.({LitElement:J}),(nt.litElementVersions??=[]).push("4.2.2");var qs={ethernet:"Ethernet",wifi:"Wi-Fi",wifi_ap:"Wi-Fi AP"};function Rs(t){return t===void 0||Number.isNaN(t)?"Unknown":t>=-55?"Excellent":t>=-67?"Good":t>=-75?"Fair":"Weak"}function Fs(t){return t===1?"Full":t===0?"Half":`Unknown (${t})`}function Os(t){let e=r=>String(r).padStart(2,"0");return`${e(t.getHours())}:${e(t.getMinutes())}:${e(t.getSeconds())}`}var K,Bs=(K=class extends J{constructor(...e){super(...e),this.baseUrl="",this.pollIntervalMs=1e4,this.errorMessage="",this.loading=!1,this.refreshSeq=0,this.handleRetry=()=>{this.refresh()}}connectedCallback(){super.connectedCallback(),this.refresh(),this.startPolling()}disconnectedCallback(){super.disconnectedCallback(),this.stopPolling()}updated(e){e.has("pollIntervalMs")&&this.startPolling();let r=e.get("baseUrl");e.has("baseUrl")&&r!==void 0&&r!==this.baseUrl&&(this.client=void 0,this.refresh())}render(){let e=this.status;return y`
      <div class="card">
        <header class="head">
          ${e?y`<span class="badge badge-${e.mode}">${qs[e.mode]}</span>`:y`<span class="badge badge-unknown">Unknown</span>`}
          ${e?y`<span class="state ${e.connected?"state-up":"state-down"}">
                ${e.connected?"Connected":"Disconnected"}
              </span>`:S}
          ${this.loading?y`<span class="muted loading">Refreshing…</span>`:S}
        </header>

        ${e?.fallbackAP?y`<div class="banner banner-warn" role="alert">
              Fallback AP active — the device could not reach the configured network.
            </div>`:S}
        ${this.errorMessage?y`<div class="banner banner-error" role="alert">
              <span>${this.errorMessage}</span>
              <button type="button" @click=${this.handleRetry}>Retry</button>
            </div>`:S}
        ${e?this.renderSections(e):y`<p class="muted">Loading network status…</p>`}

        <footer class="muted foot">
          ${this.lastUpdated?y`Updated ${Os(this.lastUpdated)}`:y`Waiting for data…`}
        </footer>
      </div>
    `}renderSections(e){switch(e.mode){case"wifi":return this.renderWifi(e);case"wifi_ap":return this.renderAp(e);case"ethernet":return this.renderEthernet(e)}}renderWifi(e){return y`
      <section>
        <h2>Wi-Fi</h2>
        <dl class="rows">
          ${this.row("SSID",e.ssid)}
          ${this.row("Signal",e.rssi===void 0?void 0:`${e.rssi} dBm (${Rs(e.rssi)})`)}
          ${this.row("IP address",e.ip)} ${this.row("MAC address",e.mac)}
        </dl>
      </section>
    `}renderAp(e){let r=e.ap;return y`
      <section>
        <h2>Access point</h2>
        <dl class="rows">
          ${this.row("SSID",r?.ssid)} ${this.row("IP address",r?.ip)}
          ${this.row("Stations",r?.stations)}
        </dl>
      </section>
    `}renderEthernet(e){let r=e.eth;return y`
      <section>
        <h2>Ethernet</h2>
        <dl class="rows">
          ${this.row("IP address",r?.ip)} ${this.row("MAC address",r?.mac)}
          ${this.row("Link",r===void 0?void 0:r.linkUp?"Up":"Down")}
          ${this.row("Speed",r===void 0?void 0:`${r.speed} Mbps`)}
          ${this.row("Duplex",r===void 0?void 0:Fs(r.duplex))}
        </dl>
      </section>
    `}row(e,r){return r===void 0||r===""?S:y`<dt>${e}</dt>
          <dd>${r}</dd>`}ensureClient(){return(!this.client||this.clientBaseUrl!==this.baseUrl)&&(this.client=sr({baseUrl:this.baseUrl}),this.clientBaseUrl=this.baseUrl),this.client}async refresh(){let e=++this.refreshSeq;this.loading=!0;let r=await this.ensureClient().getStatus();if(e===this.refreshSeq){if(this.loading=!1,r.ok){this.status=r.data,this.errorMessage="",this.lastUpdated=new Date;return}this.errorMessage=r.message,this.dispatchEvent(new CustomEvent("edn-error",{detail:{message:r.message},bubbles:!0,composed:!0}))}}startPolling(){this.stopPolling();let e=Number(this.pollIntervalMs);!Number.isFinite(e)||e<=0||(this.timerId=setInterval(()=>{typeof document<"u"&&document.hidden||this.refresh()},e))}stopPolling(){this.timerId!==void 0&&(clearInterval(this.timerId),this.timerId=void 0)}},K.properties={baseUrl:{type:String,attribute:"base-url"},pollIntervalMs:{type:Number,attribute:"poll-interval-ms"},status:{state:!0},errorMessage:{state:!0},lastUpdated:{state:!0},loading:{state:!0}},K.styles=tt`
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
  `,K);typeof customElements<"u"&&!customElements.get("edn-network-status")&&customElements.define("edn-network-status",Bs);var _e=32,le=64,Fe=8,zs=5e3,js=new TextEncoder;function ge(t){return js.encode(t).length}function Dt(t){return t.isAPMode?"ap":"station"}var G,Vs=(G=class extends J{constructor(...e){super(...e),this.baseUrl="",this.settings=null,this.loading=!1,this.submitting=!1,this.errorMessage="",this.successMessage="",this.draftMode="station",this.draftWifiSSID="",this.draftWifiPassword="",this.draftWifiPasswordDirty=!1,this.draftApSSID="",this.draftApHasPassword=!1,this.draftApPassword="",this.draftApPasswordDirty=!1,this.fieldErrors={},this.scanning=!1,this.scanResults=[],this.scanError="",this.loadToken=0,this.settingsBaseUrl=null,this.handleWifiSSIDInput=r=>{this.draftWifiSSID=r.target.value},this.handleWifiPasswordInput=r=>{this.draftWifiPassword=r.target.value,this.draftWifiPasswordDirty=!0},this.handleApSSIDInput=r=>{this.draftApSSID=r.target.value},this.handleApPasswordInput=r=>{this.draftApPassword=r.target.value,this.draftApPasswordDirty=!0},this.handleApHasPasswordChange=r=>{this.draftApHasPassword=r.target.checked,this.draftApHasPassword||(this.draftApPassword="",this.draftApPasswordDirty=!1,this.fieldErrors={...this.fieldErrors,wifiAPPassword:void 0})},this.handlePickSsid=r=>{this.draftMode!=="station"&&(this.draftMode="station"),this.draftWifiSSID=r,this.fieldErrors={...this.fieldErrors,wifiSSID:void 0}},this.handleSubmit=r=>{r.preventDefault(),this.handleSave()},this.handleRetry=()=>{this.load()}}connectedCallback(){super.connectedCallback(),this.load()}disconnectedCallback(){super.disconnectedCallback(),this.scanController?.abort(),this.scanController=void 0}updated(e){let r=e.get("baseUrl");e.has("baseUrl")&&r!==void 0&&r!==this.baseUrl&&(this.client=void 0,this.scanResults=[],this.scanError="",this.load())}render(){let e=this.settings;return y`
      <div class="card">
        <h1>Network settings</h1>
        ${this.errorMessage?y`<div class="banner banner-error" role="alert">
              <span>${this.errorMessage}</span>
              <button type="button" @click=${this.handleRetry}>Retry</button>
            </div>`:S}
        ${this.successMessage?y`<div class="banner banner-success" role="status">${this.successMessage}</div>`:S}
        ${e?y`${this.renderForm(e)} ${this.renderScan()}`:this.loading?y`<p class="status">Loading settings…</p>`:y`<p class="status">Settings unavailable.</p>`}
      </div>
    `}renderForm(e){return y`
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
          ${this.dirty?y`<span class="muted">Unsaved changes</span>`:S}
        </div>
      </form>
    `}renderStation(e){return y`
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
        ${e.hasWifiPassword?y`<p class="hint">Password saved •••• (leave blank to keep)</p>`:S}
        ${this.renderPasswordClearWarning("wifiPassword")}
        ${this.renderFieldError("wifiPassword")}
      </section>
    `}renderAccessPoint(e){return y`
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
        ${this.draftApHasPassword?y`
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
              ${e.hasWifiAPPassword?y`<p class="hint">Password saved •••• (leave blank to keep)</p>`:S}
              ${this.renderPasswordClearWarning("wifiAPPassword")}
              ${this.renderFieldError("wifiAPPassword")}
            `:S}
      </section>
    `}renderScan(){return y`
      <section class="group">
        <div class="scan-head">
          <h2>Wi-Fi scan</h2>
          <button type="button" @click=${this.handleScan} ?disabled=${this.scanning}>
            ${this.scanning?"Scanning…":"Scan"}
          </button>
        </div>
        ${this.scanError?y`<div class="banner banner-error" role="alert">${this.scanError}</div>`:S}
        ${this.scanResults.length>0?y`<ul class="networks">
              ${this.scanResults.map(e=>this.renderNetwork(e))}
            </ul>`:S}
      </section>
    `}renderNetwork(e){return y`
      <li>
        <button type="button" class="network" @click=${()=>this.handlePickSsid(e.ssid)}>
          <span class="ssid">${e.ssid}</span>
          <span class="meta">
            ${e.encrypted?y`<span class="lock" title="Encrypted" aria-label="Encrypted">🔒</span>`:S}
            ${e.rssi} dBm · Ch ${e.channel}
          </span>
        </button>
      </li>
    `}renderFieldError(e){let r=this.fieldErrors[e];return r?y`<p class="field-error" role="alert">${r}</p>`:S}renderPasswordClearWarning(e){return(e==="wifiPassword"?this.draftWifiPasswordDirty&&this.draftWifiPassword===""&&this.settings?.hasWifiPassword===!0:this.draftApPasswordDirty&&this.draftApPassword===""&&this.draftApHasPassword&&this.settings?.hasWifiAPPassword===!0)?y`<p class="clear-warning" role="alert">
          Warning: saving now will remove the stored password.
        </p>`:S}get dirty(){let e=this.settings;return e?this.draftMode!==Dt(e)||this.draftWifiSSID!==e.wifiSSID||this.draftApSSID!==e.wifiAPSSID||this.draftApHasPassword!==e.wifiAPHasPassword||this.draftWifiPasswordDirty||this.draftApPasswordDirty:!1}ensureClient(){return(!this.client||this.clientBaseUrl!==this.baseUrl)&&(this.client=sr({baseUrl:this.baseUrl}),this.clientBaseUrl=this.baseUrl),this.client}async load(){let e=++this.loadToken;this.loading=!0;let r=await this.ensureClient().getSettings();if(e!==this.loadToken){this.settingsBaseUrl!==this.baseUrl&&(this.settings=null);return}if(this.loading=!1,r.ok){this.applyServerSettings(r.data),this.errorMessage="";return}this.settingsBaseUrl!==this.baseUrl&&(this.settings=null),this.errorMessage=r.message,this.emitError(r.message)}applyServerSettings(e){this.settings=e,this.settingsBaseUrl=this.baseUrl,this.draftMode=Dt(e),this.draftWifiSSID=e.wifiSSID,this.draftApSSID=e.wifiAPSSID,this.draftApHasPassword=e.wifiAPHasPassword,this.draftWifiPassword="",this.draftWifiPasswordDirty=!1,this.draftApPassword="",this.draftApPasswordDirty=!1,this.fieldErrors={}}validate(){let e=this.settings,r={};if(!e)return r;let i=this.draftMode==="ap";if(ge(this.draftWifiSSID)>_e&&(r.wifiSSID=`Wi-Fi name must be ${_e} characters or fewer.`),ge(this.draftApSSID)>_e&&(r.wifiAPSSID=`Access point name must be ${_e} characters or fewer.`),i?this.draftApSSID.length===0&&(r.wifiAPSSID="Access point name is required in AP mode."):this.draftWifiSSID.length===0&&(r.wifiSSID="Wi-Fi name is required in station mode."),this.draftWifiPasswordDirty&&ge(this.draftWifiPassword)>le&&(r.wifiPassword=`Wi-Fi password must be ${le} characters or fewer.`),this.draftApHasPassword)if(this.draftApPasswordDirty){let s=ge(this.draftApPassword);(s<Fe||s>le)&&(r.wifiAPPassword=`Access point password must be ${Fe}–${le} characters.`)}else e.hasWifiAPPassword||(r.wifiAPPassword=`Enter an access point password (${Fe}–${le} characters).`);return r}buildPatch(){let e=this.settings,r={};if(!e)return r;let i=this.draftMode==="ap";return i!==e.isAPMode&&(r.isAPMode=i),this.draftWifiSSID!==e.wifiSSID&&(r.wifiSSID=this.draftWifiSSID),this.draftWifiPasswordDirty&&(r.wifiPassword=this.draftWifiPassword),this.draftApSSID!==e.wifiAPSSID&&(r.wifiAPSSID=this.draftApSSID),this.draftApHasPassword!==e.wifiAPHasPassword&&(r.wifiAPHasPassword=this.draftApHasPassword),this.draftApHasPassword&&this.draftApPasswordDirty&&(r.wifiAPPassword=this.draftApPassword),r}async handleSave(){if(this.submitting||!this.settings)return;let e=this.validate();if(this.fieldErrors=e,Object.keys(e).length>0)return;let r=this.buildPatch();if(Object.keys(r).length===0)return;this.submitting=!0,this.errorMessage="",this.successMessage="";let i=await this.ensureClient().saveSettings(r);if(this.submitting=!1,i.ok){this.applyServerSettings(i.data),this.successMessage="Settings saved.",this.dispatchEvent(new CustomEvent("edn-saved",{detail:i.data,bubbles:!0,composed:!0}));return}let s=i.status===void 0?"Could not confirm the save — the device may have applied the changes and reconnected. Check the status widget or retry.":i.message;this.errorMessage=s,this.emitError(s)}async handleScan(){if(this.scanning)return;this.scanning=!0,this.scanError="";let e=new AbortController;this.scanController=e;let r,i=new Promise(n=>{r=setTimeout(()=>{e.abort(),n({ok:!1,message:"Wi-Fi scan timed out after 5 seconds."})},zs)}),s=await Promise.race([this.ensureClient().wifiList(e.signal),i]);if(r!==void 0&&clearTimeout(r),this.scanController===e&&(this.scanController=void 0),this.scanning=!1,s.ok){this.scanResults=[...s.data.networks].sort((n,a)=>a.rssi-n.rssi);return}s.message!=="Request aborted."&&(this.scanError=s.message,this.emitError(s.message))}emitError(e){this.dispatchEvent(new CustomEvent("edn-error",{detail:{message:e},bubbles:!0,composed:!0}))}setMode(e){this.draftMode!==e&&(this.draftMode=e,this.fieldErrors={})}},G.properties={baseUrl:{type:String,attribute:"base-url"},settings:{state:!0},loading:{state:!0},submitting:{state:!0},errorMessage:{state:!0},successMessage:{state:!0},draftMode:{state:!0},draftWifiSSID:{state:!0},draftWifiPassword:{state:!0},draftWifiPasswordDirty:{state:!0},draftApSSID:{state:!0},draftApHasPassword:{state:!0},draftApPassword:{state:!0},draftApPasswordDirty:{state:!0},fieldErrors:{state:!0},scanning:{state:!0},scanResults:{state:!0},scanError:{state:!0}},G.styles=tt`
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
  `,G);typeof customElements<"u"&&!customElements.get("edn-network-settings")&&customElements.define("edn-network-settings",Vs);var Qs=[{id:"status",label:"Status"},{id:"settings",label:"Network settings"}],Z,Ys=(Z=class extends J{constructor(...e){super(...e),this.baseUrl="",this.pollIntervalMs=1e4,this.activeTab="status"}render(){return y`
      <div class="tabs" role="tablist" aria-label="Network">
        ${Qs.map(e=>y`
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
    `}renderActive(){return this.activeTab==="settings"?y`<edn-network-settings base-url=${this.baseUrl}></edn-network-settings>`:y`
      <edn-network-status
        base-url=${this.baseUrl}
        poll-interval-ms=${this.pollIntervalMs}
      ></edn-network-status>
    `}selectTab(e){this.activeTab!==e&&(this.activeTab=e,this.dispatchEvent(new CustomEvent("edn-tab-change",{detail:{tab:e},bubbles:!0,composed:!0})))}},Z.properties={baseUrl:{type:String,attribute:"base-url"},pollIntervalMs:{type:Number,attribute:"poll-interval-ms"},activeTab:{state:!0}},Z.styles=tt`
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
  `,Z);typeof customElements<"u"&&!customElements.get("edn-network-page")&&customElements.define("edn-network-page",Ys);const Ht=document.getElementById("app");Ht&&yr(o(_s,{}),Ht);
