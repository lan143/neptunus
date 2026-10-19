(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=r(s);fetch(s.href,n)}})();var Ee,k,Ut,j,dt,Lt,Wt,We,be,de,qt,Je,ze,je,Pe={},Ae=[],mr=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Te=Array.isArray;function F(t,e){for(var r in e)t[r]=e[r];return t}function Ke(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function _r(t,e,r){var i,s,n,o={};for(n in e)n=="key"?i=e[n]:n=="ref"?s=e[n]:o[n]=e[n];if(arguments.length>2&&(o.children=arguments.length>3?Ee.call(arguments,2):r),typeof t=="function"&&t.defaultProps!=null)for(n in t.defaultProps)o[n]===void 0&&(o[n]=t.defaultProps[n]);return we(t,o,i,s,null)}function we(t,e,r,i,s){var n={type:t,props:e,key:r,ref:i,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:s??++Ut,__i:-1,__u:0};return s==null&&k.vnode!=null&&k.vnode(n),n}function N(t){return t.children}function ye(t,e){this.props=t,this.context=e}function ee(t,e){if(e==null)return t.__?ee(t.__,t.__i+1):null;for(var r;e<t.__k.length;e++)if((r=t.__k[e])!=null&&r.__e!=null)return r.__e;return typeof t.type=="function"?ee(t):null}function gr(t){if(t.__P&&t.__d){var e=t.__v,r=e.__e,i=[],s=[],n=F({},e);n.__v=e.__v+1,k.vnode&&k.vnode(n),Ge(t.__P,n,e,t.__n,t.__P.namespaceURI,32&e.__u?[r]:null,i,r??ee(e),!!(32&e.__u),s),n.__v=e.__v,n.__.__k[n.__i]=n,zt(i,n,s),e.__e=e.__=null,n.__e!=r&&Rt(n)}}function Rt(t){if((t=t.__)!=null&&t.__c!=null)return t.__e=t.__c.base=null,t.__k.some(function(e){if(e!=null&&e.__e!=null)return t.__e=t.__c.base=e.__e}),Rt(t)}function ct(t){(!t.__d&&(t.__d=!0)&&j.push(t)&&!xe.__r++||dt!=k.debounceRendering)&&((dt=k.debounceRendering)||Lt)(xe)}function xe(){try{for(var t,e=1;j.length;)j.length>e&&j.sort(Wt),t=j.shift(),e=j.length,gr(t)}finally{j.length=xe.__r=0}}function Ft(t,e,r,i,s,n,o,c,d,h,p){var m,l,f,b,w,y,u=i&&i.__k||Ae,_=e.length;for(d=vr(r,e,u,d,_),m=0;m<_;m++)(f=r.__k[m])!=null&&(l=f.__i!=-1&&u[f.__i]||Pe,f.__i=m,y=Ge(t,f,l,s,n,o,c,d,h,p),b=f.__e,f.ref&&l.ref!=f.ref&&(l.ref&&Ze(l.ref,null,f),p.push(f.ref,f.__c||b,f)),w==null&&b!=null&&(w=b),4&f.__u?(d=Ot(f,d,t),l.__e&&(l.__e=null)):typeof f.type=="function"&&y!==void 0?d=y:b&&(d=b.nextSibling),f.__u&=-7);return r.__e=w,d}function vr(t,e,r,i,s){var n,o,c,d,h,p=r.length,m=p,l=0;for(t.__k=new Array(s),n=0;n<s;n++)(o=e[n])!=null&&typeof o!="boolean"&&typeof o!="function"?(typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?o=t.__k[n]=we(null,o,null,null,null):Te(o)?o=t.__k[n]=we(N,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?o=t.__k[n]=we(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):t.__k[n]=o,d=n+l,o.__=t,o.__b=t.__b+1,c=null,(h=o.__i=br(o,r,d,m))!=-1&&(m--,(c=r[h])&&(c.__u|=2)),c==null||c.__v==null?(h==-1&&(s>p?l--:s<p&&l++),typeof o.type!="function"&&(o.__u|=4)):h!=d&&(h==d-1?l--:h==d+1?l++:(h>d?l--:l++,o.__u|=4))):t.__k[n]=null;if(m)for(n=0;n<p;n++)(c=r[n])!=null&&(2&c.__u)==0&&(c.__e==i&&(i=ee(c)),Vt(c,c));return i}function Ot(t,e,r){var i,s;if(typeof t.type=="function"){for(i=t.__k,s=0;i&&s<i.length;s++)i[s]&&(i[s].__=t,e=Ot(i[s],e,r));return e}t.__e!=e&&(e&&t.type&&!e.parentNode&&(e=ee(t)),e=r.insertBefore(t.__e,e||null));do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function br(t,e,r,i){var s,n,o,c=t.key,d=t.type,h=e[r],p=h!=null&&(2&h.__u)==0;if(h===null&&c==null||p&&c==h.key&&d==h.type)return r;if(i>(p?1:0)){for(s=r-1,n=r+1;s>=0||n<e.length;)if((h=e[o=s>=0?s--:n++])!=null&&(2&h.__u)==0&&c==h.key&&d==h.type)return o}return-1}function ut(t,e,r){e[0]=="-"?t.setProperty(e,r??""):t[e]=r==null?"":typeof r!="number"||mr.test(e)?r:r+"px"}function me(t,e,r,i,s){var n,o;e:if(e=="style")if(typeof r=="string")t.style.cssText=r;else{if(typeof i=="string"&&(t.style.cssText=i=""),i)for(e in i)r&&e in r||ut(t.style,e,"");if(r)for(e in r)i&&r[e]==i[e]||ut(t.style,e,r[e])}else if(e[0]=="o"&&e[1]=="n")n=e!=(e=e.replace(qt,"$1")),o=e.toLowerCase(),e=o in t||e=="onFocusOut"||e=="onFocusIn"?o.slice(2):e.slice(2),t.l||(t.l={}),t.l[e+n]=r,r?i?r[de]=i[de]:(r[de]=Je,t.addEventListener(e,n?je:ze,n)):t.removeEventListener(e,n?je:ze,n);else{if(s=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in t)try{t[e]=r??"";break e}catch{}typeof r=="function"||(r==null||r===!1&&e[4]!="-"?t.removeAttribute(e):t.setAttribute(e,e=="popover"&&r==1?"":r))}}function ht(t){return function(e){if(this.l){var r=this.l[e.type+t];if(e[be]==null)e[be]=Je++;else if(e[be]<r[de])return;return r(k.event?k.event(e):e)}}}function Ge(t,e,r,i,s,n,o,c,d,h){var p,m,l,f,b,w,y,u,_,S,E,I,A,q,R,W,T=e.type;if(e.constructor!==void 0)return null;128&r.__u&&(d=!!(32&r.__u),n=[c=e.__e=r.__e]),(p=k.__b)&&p(e);e:if(typeof T=="function"){m=o.length;try{if(_=e.props,S=T.prototype&&T.prototype.render,E=(p=T.contextType)&&i[p.__c],I=p?E?E.props.value:p.__:i,r.__c?u=(l=e.__c=r.__c).__=l.__E:(S?e.__c=l=new T(_,I):(e.__c=l=new ye(_,I),l.constructor=T,l.render=yr),E&&E.sub(l),l.state||(l.state={}),l.__n=i,f=l.__d=!0,l.__h=[],l._sb=[]),S&&l.__s==null&&(l.__s=l.state),S&&T.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=F({},l.__s)),F(l.__s,T.getDerivedStateFromProps(_,l.__s))),b=l.props,w=l.state,l.__v=e,f)S&&T.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),S&&l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(S&&T.getDerivedStateFromProps==null&&_!==b&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(_,I),e.__v==r.__v||!l.__e&&l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(_,l.__s,I)===!1){e.__v!=r.__v&&(l.props=_,l.state=l.__s,l.__d=!1),e.__e=r.__e,e.__k=r.__k,e.__k.some(function(B){B&&(B.__=e)}),Ae.push.apply(l.__h,l._sb),l._sb=[],l.__h.length&&o.push(l),c=ee(r);break e}l.componentWillUpdate!=null&&l.componentWillUpdate(_,l.__s,I),S&&l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(b,w,y)})}if(l.context=I,l.props=_,l.__P=t,l.__e=!1,A=k.__r,q=0,S)l.state=l.__s,l.__d=!1,A&&A(e),p=l.render(l.props,l.state,l.context),Ae.push.apply(l.__h,l._sb),l._sb=[];else do l.__d=!1,A&&A(e),p=l.render(l.props,l.state,l.context),l.state=l.__s;while(l.__d&&++q<25);l.state=l.__s,l.getChildContext!=null&&(i=F(F({},i),l.getChildContext())),S&&!f&&l.getSnapshotBeforeUpdate!=null&&(y=l.getSnapshotBeforeUpdate(b,w)),R=p!=null&&p.type===N&&p.key==null?jt(p.props.children):p,c=Ft(t,Te(R)?R:[R],e,r,i,s,n,o,c,d,h),l.base=e.__e,e.__u&=-161,l.__h.length&&o.push(l),u&&(l.__E=l.__=null)}catch(B){if(o.length=m,e.__v=null,d||n!=null){if(B.then){for(e.__u|=d?160:128;c&&c.nodeType==8&&c.nextSibling;)c=c.nextSibling;n!=null&&(n[n.indexOf(c)]=null),e.__e=c}else if(n!=null)for(W=n.length;W--;)Ke(n[W])}else e.__e=r.__e;e.__k==null&&(e.__k=r.__k||[]),B.then||Bt(e),k.__e(B,e,r)}}else n==null&&e.__v==r.__v?(e.__k=r.__k,e.__e=r.__e):c=e.__e=wr(r.__e,e,r,i,s,n,o,d,h);return(p=k.diffed)&&p(e),128&e.__u?void 0:c}function Bt(t){t&&(t.__c&&(t.__c.__e=!0),t.__k&&t.__k.some(Bt))}function zt(t,e,r){for(var i=0;i<r.length;i++)Ze(r[i],r[++i],r[++i]);k.__c&&k.__c(e,t),t.some(function(s){try{t=s.__h,s.__h=[],t.some(function(n){n.call(s)})}catch(n){k.__e(n,s.__v)}})}function jt(t){return typeof t!="object"||t==null||t.__b>0?t:Te(t)?t.map(jt):t.constructor!==void 0?null:F({},t)}function wr(t,e,r,i,s,n,o,c,d){var h,p,m,l,f,b,w,y=r.props||Pe,u=e.props,_=e.type;if(_=="svg"?s="http://www.w3.org/2000/svg":_=="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),n!=null){for(h=0;h<n.length;h++)if((f=n[h])&&"setAttribute"in f==!!_&&(_?f.localName==_:f.nodeType==3)){t=f,n[h]=null;break}}if(t==null){if(_==null)return document.createTextNode(u);t=document.createElementNS(s,_,u.is&&u),c&&(k.__m&&k.__m(e,n),c=!1),n=null}if(_==null)y===u||c&&t.data==u||(t.data=u);else{if(n=_=="textarea"&&u.defaultValue!=null?null:n&&Ee.call(t.childNodes),!c&&n!=null)for(y={},h=0;h<t.attributes.length;h++)y[(f=t.attributes[h]).name]=f.value;for(h in y)f=y[h],h=="dangerouslySetInnerHTML"?m=f:h=="children"||h in u||h=="value"&&"defaultValue"in u||h=="checked"&&"defaultChecked"in u||me(t,h,null,f,s);for(h in u)f=u[h],h=="children"?l=f:h=="dangerouslySetInnerHTML"?p=f:h=="value"?b=f:h=="checked"?w=f:c&&typeof f!="function"||y[h]===f||me(t,h,f,y[h],s);if(p)c||m&&(p.__html==m.__html||p.__html==t.innerHTML)||(t.innerHTML=p.__html),e.__k=[];else if(m&&(t.innerHTML=""),Ft(e.type=="template"?t.content:t,Te(l)?l:[l],e,r,i,_=="foreignObject"?"http://www.w3.org/1999/xhtml":s,n,o,n?n[0]:r.__k&&ee(r,0),c,d),n!=null)for(h=n.length;h--;)Ke(n[h]);c&&_!="textarea"||(h="value",_=="progress"&&b==null?t.removeAttribute("value"):b!=null&&(b!==t[h]||_=="progress"&&!b||_=="option"&&b!=y[h])&&me(t,h,b,y[h],s),h="checked",w!=null&&w!=t[h]&&me(t,h,w,y[h],s))}return t}function Ze(t,e,r){try{if(typeof t=="function"){var i=typeof t.__u=="function";i&&t.__u(),i&&e==null||(t.__u=t(e))}else t.current=e}catch(s){k.__e(s,r)}}function Vt(t,e,r){var i,s;if(k.unmount&&k.unmount(t),(i=t.ref)&&(i.current&&i.current!=t.__e||Ze(i,null,e)),(i=t.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(n){k.__e(n,e)}i.base=i.__P=i.__n=null}if(i=t.__k)for(s=0;s<i.length;s++)i[s]&&Vt(i[s],e,r||typeof t.type!="function");r||Ke(t.__e),t.__c=t.__=t.__e=void 0}function yr(t,e,r){return this.constructor(t,r)}function $r(t,e,r){var i,s,n,o;e==document&&(e=document.documentElement),k.__&&k.__(t,e),s=(i=!1)?null:e.__k,n=[],o=[],Ge(e,t=e.__k=_r(N,null,[t]),s||Pe,Pe,e.namespaceURI,s?null:e.firstChild?Ee.call(e.childNodes):null,n,s?s.__e:e.firstChild,i,o),zt(n,t,o),t.props.children=null}Ee=Ae.slice,k={__e:function(t,e,r,i){for(var s,n,o;e=e.__;)if((s=e.__c)&&!s.__)try{if((n=s.constructor)&&n.getDerivedStateFromError!=null&&(s.setState(n.getDerivedStateFromError(t)),o=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(t,i||{}),o=s.__d),o)return s.__E=s}catch(c){t=c}throw t}},Ut=0,ye.prototype.setState=function(t,e){var r;r=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=F({},this.state),typeof t=="function"&&(t=t(F({},r),this.props)),t&&F(r,t),t!=null&&this.__v&&(e&&this._sb.push(e),ct(this))},ye.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),ct(this))},ye.prototype.render=N,j=[],Lt=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Wt=function(t,e){return t.__v.__b-e.__v.__b},xe.__r=0,We=Math.random().toString(8),be="__d"+We,de="__a"+We,qt=/(PointerCapture)$|Capture$/i,Je=0,ze=ht(!1),je=ht(!0);var Sr=0;function a(t,e,r,i,s,n){e||(e={});var o,c,d=e;if("ref"in d)for(c in d={},e)c=="ref"?o=e[c]:d[c]=e[c];var h={type:t,props:d,key:r,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Sr,__i:-1,__u:0,__source:s,__self:n};if(typeof t=="function"&&(o=t.defaultProps))for(c in o)d[c]===void 0&&(d[c]=o[c]);return k.vnode&&k.vnode(h),h}var ie,M,qe,pt,ue=0,Qt=[],C=k,ft=C.__b,mt=C.__r,_t=C.diffed,gt=C.__c,vt=C.unmount,bt=C.__;function Ce(t,e){C.__h&&C.__h(M,t,ue||e),ue=0;var r=M.__H||(M.__H={__:[],__h:[]});return t>=r.__.length&&r.__.push({}),r.__[t]}function v(t){return ue=1,Pr(Kt,t)}function Pr(t,e,r){var i=Ce(ie++,2);if(i.t=t,!i.__c&&(i.__=[Kt(void 0,e),function(c){var d=i.__N?i.__N[0]:i.__[0],h=i.t(d,c);d!==h&&(i.__N=[h,i.__[1]],i.__c.setState({}))}],i.__c=M,!M.__f)){var s=function(c,d,h){if(!i.__c.__H)return!0;var p=!1,m=i.__c.props!==c;if(i.__c.__H.__.some(function(f){if(f.__N){p=!0;var b=f.__[0];f.__=f.__N,f.__N=void 0,b!==f.__[0]&&(m=!0)}}),n){var l=n.call(this,c,d,h);return p?l||m:l}return!p||m};M.__f=!0;var n=M.shouldComponentUpdate,o=M.componentWillUpdate;M.componentWillUpdate=function(c,d,h){if(this.__e){var p=n;n=void 0,s(c,d,h),n=p}o&&o.call(this,c,d,h)},M.shouldComponentUpdate=s}return i.__N||i.__}function O(t,e){var r=Ce(ie++,3);!C.__s&&Jt(r.__H,e)&&(r.__=t,r.u=e,M.__H.__h.push(r))}function Yt(t){return ue=5,Ie(function(){return{current:t}},[])}function Ie(t,e){var r=Ce(ie++,7);return Jt(r.__H,e)&&(r.__=t(),r.__H=e,r.__h=t),r.__}function U(t,e){return ue=8,Ie(function(){return t},e)}function Xe(){var t=Ce(ie++,11);if(!t.__){for(var e=M.__v;e!==null&&!e.__m&&e.__!==null;)e=e.__;var r=e.__m||(e.__m=[0,0]);t.__="P"+r[0]+"-"+r[1]++}return t.__}function Ar(){for(var t;t=Qt.shift();){var e=t.__H;if(t.__P&&e)try{e.__h.some($e),e.__h.some(Ve),e.__h=[]}catch(r){e.__h=[],C.__e(r,t.__v)}}}C.__b=function(t){M=null,ft&&ft(t)},C.__=function(t,e){t&&e.__k&&e.__k.__m&&(t.__m=e.__k.__m),bt&&bt(t,e)},C.__r=function(t){mt&&mt(t),ie=0;var e=(M=t.__c).__H;e&&(qe===M?(e.__h=[],M.__h=[],e.__.some(function(r){r.__N&&(r.__=r.__N),r.u=r.__N=void 0})):(e.__h.some($e),e.__h.some(Ve),e.__h=[],ie=0)),qe=M},C.diffed=function(t){_t&&_t(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(Qt.push(e)!==1&&pt===C.requestAnimationFrame||((pt=C.requestAnimationFrame)||xr)(Ar)),e.__H.__.some(function(r){r.u&&(r.__H=r.u,r.u=void 0)})),qe=M=null},C.__c=function(t,e){e.some(function(r){try{r.__h.some($e),r.__h=r.__h.filter(function(i){return!i.__||Ve(i)})}catch(i){e.some(function(s){s.__h&&(s.__h=[])}),e=[],C.__e(i,r.__v)}}),gt&&gt(t,e)},C.unmount=function(t){vt&&vt(t);var e,r=t.__c;r&&r.__H&&(r.__H.__.some(function(i){try{$e(i)}catch(s){e=s}}),r.__H=void 0,e&&C.__e(e,r.__v))};var wt=typeof requestAnimationFrame=="function";function xr(t){var e,r=function(){clearTimeout(i),wt&&cancelAnimationFrame(e),setTimeout(t)},i=setTimeout(r,35);wt&&(e=requestAnimationFrame(r))}function $e(t){var e=M,r=t.__c;typeof r=="function"&&(t.__c=void 0,r()),M=e}function Ve(t){var e=M;t.__c=t.__(),M=e}function Jt(t,e){return!t||t.length!==e.length||e.some(function(r,i){return r!==t[i]})}function Kt(t,e){return typeof e=="function"?e(t):e}function kr({tabs:t,active:e,onSelect:r}){return a("nav",{class:"tab-bar",role:"tablist","aria-label":"Sections",children:t.map(i=>a("button",{type:"button",role:"tab",id:`tab-${i.id}`,"aria-selected":i.id===e,"aria-controls":`panel-${i.id}`,class:i.id===e?"active":void 0,onClick:()=>r(i.id),children:i.label},i.id))})}const g={mqtt:{hostMax:63,portMin:1,portMax:65535,loginMax:31,passwordMax:31,haDiscoveryPrefixMax:63,topicMax:63},modbus:{speeds:[1200,2400,4800,9600,19200,38400,57600,115200],addressMin:1,addressMax:254},rainwater:{topicMax:63,maxHeightMinExclusive:0,maxHeightMax:10,fillLevelStartPercent:10,maxFillLevelMax:100},meter:{valueMin:0,valueMax:1e9}},De="Device returned an empty response. Check the device logs and try again.",He="Device returned an empty response.",Gt="Could not reach the device. Check that you are connected to its network and try again.",_e={};function Zt(){return{ok:!1,message:Gt}}function Mr(t){try{const e=JSON.parse(t);if(e&&typeof e=="object"&&"message"in e){const r=e.message;if(typeof r=="string"&&r)return r}}catch{}}async function Xt(t){let e=`Request failed (HTTP ${t.status}).`;try{const r=await t.text();r&&(e=Mr(r)??e)}catch{}return{ok:!1,status:t.status,message:e}}async function Q(t,e){let r;try{r=await fetch(t,{headers:{Accept:"application/json"}})}catch{return Zt()}if(!r.ok)return Xt(r);let i;try{i=await r.text()}catch{return{ok:!1,status:r.status,message:Gt}}if(!i.trim())return{ok:!1,status:r.status,message:e};try{return{ok:!0,data:JSON.parse(i)}}catch{return{ok:!1,status:r.status,message:e}}}async function er(t,e){let r;try{r=await fetch(t,e)}catch{return Zt()}if(!r.ok)return Xt(r);let i="";try{i=await r.text()}catch{return{ok:!0,data:_e}}if(!i.trim())return{ok:!0,data:_e};try{const s=JSON.parse(i);return{ok:!0,data:s&&typeof s=="object"?s:_e}}catch{return{ok:!0,data:_e}}}function fe(t,e){return er(t,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:e.toString()})}function z(t,e,r,i=!1){if(typeof t!="string")throw new Error(`${e} is required.`);if(!i&&t.length===0)throw new Error(`${e} must not be empty.`);if(t.length>r)throw new Error(`${e} must be at most ${r} characters.`);return t}function te(t,e,r,i){if(typeof t!="number"||!Number.isFinite(t))throw new Error(`${e} must be a number.`);if(t<r||t>i)throw new Error(`${e} must be between ${r} and ${i}.`);return t}function Er(t,e){if(typeof t!="boolean")throw new Error(`${e} must be true or false.`);return t}function Tr(t,e,r){if(typeof t!="number"||!Number.isFinite(t))throw new Error(`${e} must be a number.`);if(!r.includes(t))throw new Error(`${e} must be one of: ${r.join(", ")}.`);return t}function Cr(){return Q("/api/settings",De)}function Ir(){return Q("/api/status",He)}function tr(){return Q("/healthcheck/healty",He)}function Dr(){return Q("/healthcheck/ready",He)}function Hr(){return Q("/api/settings/modbus",De)}function Nr(){return Q("/api/settings/rainwater",De)}function Ur(){return Q("/api/settings/meter",De)}function Lr(){return Q("/api/controls",He)}function Wr(t){const e=Tr(t.modbusSpeed,"Modbus speed",g.modbus.speeds),r=te(t.addressQDY30A,"QDY30A address",g.modbus.addressMin,g.modbus.addressMax),i=te(t.addressWBMAI6,"WB-MAI6 address",g.modbus.addressMin,g.modbus.addressMax),s=new URLSearchParams;return s.set("modbusSpeed",String(e)),s.set("addressQDY30A",String(r)),s.set("addressWBMAI6",String(i)),fe("/api/settings/modbus",s)}function qr(t){const e=z(t.rainwaterPitLevelTopic,"Pit level topic",g.rainwater.topicMax,!0),r=te(t.rainwaterPitMaxHeight,"Pit max height",g.rainwater.maxHeightMinExclusive,g.rainwater.maxHeightMax);if(r<=g.rainwater.maxHeightMinExclusive)throw new Error("Pit max height must be greater than 0.");const i=te(t.rainwaterPitMaxFillLevel,"Pit max fill level",g.rainwater.fillLevelStartPercent,g.rainwater.maxFillLevelMax);if(i<=g.rainwater.fillLevelStartPercent)throw new Error(`Pit max fill level must be greater than ${g.rainwater.fillLevelStartPercent}.`);const s=new URLSearchParams;return s.set("rainwaterPitLevelTopic",e),s.set("rainwaterPitMaxHeight",String(r)),s.set("rainwaterPitMaxFillLevel",String(i)),fe("/api/settings/rainwater",s)}function Rr(t){const e=te(t.homeWaterInitialValue,"Home water initial value",g.meter.valueMin,g.meter.valueMax),r=te(t.yardWaterInitialValue,"Yard water initial value",g.meter.valueMin,g.meter.valueMax),i=new URLSearchParams;return i.set("homeWaterInitialValue",String(e)),i.set("yardWaterInitialValue",String(r)),fe("/api/settings/meter",i)}function Fr(t){const e=z(t.host,"MQTT host",g.mqtt.hostMax),r=te(t.port,"MQTT port",g.mqtt.portMin,g.mqtt.portMax),i=z(t.login,"MQTT login",g.mqtt.loginMax,!0),s=z(t.password,"MQTT password",g.mqtt.passwordMax,!0),n=z(t.haDiscoveryPrefix,"HA discovery prefix",g.mqtt.haDiscoveryPrefixMax),o=Er(t.mqttIsHADiscovery,"HA discovery flag"),c=z(t.stateTopic,"State topic",g.mqtt.topicMax),d=z(t.commandTopic,"Command topic",g.mqtt.topicMax),h=z(t.mqttTopicPrefix,"MQTT topic prefix",g.mqtt.topicMax),p=new URLSearchParams;return p.set("host",e),p.set("port",String(r)),p.set("login",i),p.set("password",s),p.set("haDiscoveryPrefix",n),p.set("mqttIsHADiscovery",o?"true":"false"),p.set("stateTopic",c),p.set("commandTopic",d),p.set("mqttTopicPrefix",h),fe("/api/settings/mqtt",p)}function Or(t,e){const r=new URLSearchParams;return r.set("id",t),r.set("value",e),fe("/api/controls/set",r)}function Br(){return er("/api/reboot",{method:"POST"})}function x({kind:t="info",message:e,onClose:r}){return a("div",{class:`banner banner-${t}`,role:"status",children:[a("span",{children:e}),r?a("button",{type:"button",class:"banner-close","aria-label":"Dismiss",onClick:r,children:"×"}):null]})}function zr(t){switch(t){case"primary":return"btn btn-primary";case"danger":return"btn btn-danger";default:return"btn"}}function D({children:t,variant:e="default",type:r="button",disabled:i,title:s,onClick:n}){return a("button",{type:r,class:zr(e),disabled:i,title:s,onClick:n,children:t})}function jr(t){return a(D,{...t,variant:"danger"})}function H({title:t,children:e,class:r}){return a("section",{class:r?`card ${r}`:"card",children:[t?a("h2",{children:t}):null,e]})}function Vr({label:t,checked:e,onChange:r,disabled:i,help:s,name:n}){const o=Xe();return a("div",{class:"checkbox-field",children:[a("label",{class:"checkbox-label",for:o,children:[a("input",{id:o,name:n,type:"checkbox",checked:e,disabled:i,onChange:d=>{r?.(d.currentTarget.checked)}}),a("span",{children:t})]}),s?a("span",{class:"field-help",children:s}):null]})}function L({label:t,value:e,onInput:r,type:i="text",name:s,placeholder:n,maxLength:o,min:c,max:d,step:h,error:p,help:m,disabled:l,required:f,autoComplete:b,inputMode:w}){const y=Xe();return a("label",{class:"field",for:y,children:[a("span",{class:"field-label",children:t}),a("input",{id:y,name:s,type:i,value:e,placeholder:n,maxLength:o,min:c,max:d,step:h,disabled:l,required:f,autoComplete:b,inputMode:w,onInput:_=>{r?.(_.currentTarget.value)},"aria-invalid":p?!0:void 0}),m&&!p?a("span",{class:"field-help",children:m}):null,p?a("span",{class:"field-error",children:p}):null]})}function rr(){return a(x,{kind:"info",message:"Changes are saved to flash and take effect only after a reboot."})}function Qr({label:t,value:e,onInput:r,maxLength:i,error:s,help:n,disabled:o,autoComplete:c}){const[d,h]=v(!1);return a("div",{class:"password-field",children:[a(L,{label:t,value:e,onInput:r,type:d?"text":"password",maxLength:i,error:s,help:n,disabled:o,autoComplete:c}),a("button",{type:"button",class:"btn reveal-toggle","aria-pressed":d,disabled:o,onClick:()=>h(p=>!p),children:d?"Hide":"Show"})]})}const Yr={host:"",port:"",login:"",password:"",haDiscoveryPrefix:"",mqttIsHADiscovery:!1,stateTopic:"",commandTopic:"",mqttTopicPrefix:""};function Jr(t){const e={};t.host.trim().length===0?e.host="Host is required.":t.host.length>g.mqtt.hostMax&&(e.host=`At most ${g.mqtt.hostMax} characters.`);const r=Number(t.port);return t.port.trim()===""?e.port="Port is required.":(!Number.isInteger(r)||r<1||r>65535)&&(e.port="Port must be an integer between 1 and 65535."),t.login.length>g.mqtt.loginMax&&(e.login=`At most ${g.mqtt.loginMax} characters.`),t.password.length>g.mqtt.passwordMax&&(e.password=`At most ${g.mqtt.passwordMax} characters.`),t.haDiscoveryPrefix.trim().length===0?e.haDiscoveryPrefix="Discovery prefix is required.":t.haDiscoveryPrefix.length>g.mqtt.haDiscoveryPrefixMax&&(e.haDiscoveryPrefix=`At most ${g.mqtt.haDiscoveryPrefixMax} characters.`),t.stateTopic.trim().length===0?e.stateTopic="Required - the device crashes if the state topic is missing.":t.stateTopic.length>g.mqtt.topicMax&&(e.stateTopic=`At most ${g.mqtt.topicMax} characters.`),t.commandTopic.trim().length===0?e.commandTopic="Required - the device crashes if the command topic is missing.":t.commandTopic.length>g.mqtt.topicMax&&(e.commandTopic=`At most ${g.mqtt.topicMax} characters.`),t.mqttTopicPrefix.trim().length===0?e.mqttTopicPrefix="Topic prefix is required.":t.mqttTopicPrefix.length>g.mqtt.topicMax&&(e.mqttTopicPrefix=`At most ${g.mqtt.topicMax} characters.`),e}function Kr(t){return Object.keys(t).length>0}function Gr(){const[t,e]=v(!1),[r,i]=v(null),[s,n]=v(Yr),[o,c]=v({}),[d,h]=v(!1),[p,m]=v(null),[l,f]=v(null),b=U(async()=>{i(null);const u=await Cr();u.ok?n({host:u.data.mqttHost,port:String(u.data.mqttPort),login:u.data.mqttLogin,password:u.data.mqttPassword,haDiscoveryPrefix:u.data.mqttHADiscoveryPrefix,mqttIsHADiscovery:u.data.mqttIsHADiscovery,stateTopic:u.data.mqttStateTopic,commandTopic:u.data.mqttCommandTopic,mqttTopicPrefix:u.data.mqttTopicPrefix}):i(u.message),e(!0)},[]);O(()=>{b()},[b]);const w=u=>n(_=>({..._,...u})),y=U(async u=>{u.preventDefault();const _=Jr(s);if(c(_),m(null),f(null),!Kr(_)){h(!0);try{const S=await Fr({host:s.host,port:Number(s.port),login:s.login,password:s.password,haDiscoveryPrefix:s.haDiscoveryPrefix,mqttIsHADiscovery:s.mqttIsHADiscovery,stateTopic:s.stateTopic,commandTopic:s.commandTopic,mqttTopicPrefix:s.mqttTopicPrefix});S.ok?m("MQTT settings saved to flash."):f(S.message)}catch(S){f(S instanceof Error?S.message:String(S))}finally{h(!1)}}},[s]);return t?a("div",{class:"stack",children:[a(rr,{}),r?a(N,{children:[a(x,{kind:"error",message:r}),a("div",{class:"form-actions",children:a(D,{onClick:()=>{b()},children:"Retry"})})]}):null,a(H,{title:"MQTT",children:a("form",{onSubmit:y,children:[a(L,{label:"Host",value:s.host,onInput:u=>w({host:u}),maxLength:g.mqtt.hostMax,error:o.host,autoComplete:"off",disabled:d}),a(L,{label:"Port",value:s.port,onInput:u=>w({port:u}),type:"number",min:1,max:65535,inputMode:"numeric",error:o.port,disabled:d}),a(L,{label:"Login",value:s.login,onInput:u=>w({login:u}),maxLength:g.mqtt.loginMax,error:o.login,autoComplete:"off",disabled:d}),a(Qr,{label:"Password",value:s.password,onInput:u=>w({password:u}),maxLength:g.mqtt.passwordMax,error:o.password,autoComplete:"new-password",disabled:d}),a(L,{label:"HA discovery prefix",value:s.haDiscoveryPrefix,onInput:u=>w({haDiscoveryPrefix:u}),maxLength:g.mqtt.haDiscoveryPrefixMax,error:o.haDiscoveryPrefix,autoComplete:"off",disabled:d}),a(Vr,{label:"Enable Home Assistant discovery",checked:s.mqttIsHADiscovery,onChange:u=>w({mqttIsHADiscovery:u}),disabled:d}),a(L,{label:"State topic",value:s.stateTopic,onInput:u=>w({stateTopic:u}),maxLength:g.mqtt.topicMax,error:o.stateTopic,help:"Must not be empty: the device crashes on a missing state topic.",autoComplete:"off",disabled:d}),a(L,{label:"Command topic",value:s.commandTopic,onInput:u=>w({commandTopic:u}),maxLength:g.mqtt.topicMax,error:o.commandTopic,help:"Must not be empty: the device crashes on a missing command topic.",autoComplete:"off",disabled:d}),a(L,{label:"Topic prefix",value:s.mqttTopicPrefix,onInput:u=>w({mqttTopicPrefix:u}),maxLength:g.mqtt.topicMax,error:o.mqttTopicPrefix,help:"Prefix used for Home Assistant discovery entities; must not be empty.",autoComplete:"off",disabled:d}),p?a(x,{kind:"success",message:p,onClose:()=>m(null)}):null,l?a(x,{kind:"error",message:l,onClose:()=>f(null)}):null,a("div",{class:"form-actions",children:a(D,{type:"submit",variant:"primary",disabled:d,children:d?"Saving…":"Save MQTT"})})]})})]}):a(H,{title:"Connections",children:a("p",{class:"muted",children:"Loading connection settings…"})})}const Zr=5e3,Xr={on:"Turn on",off:"Turn off",onBadge:"Enabled",offBadge:"Disabled"},es={on:"Open",off:"Close",onBadge:"Open",offBadge:"Closed"},ts={on:"Turn on",off:"Turn off",onBadge:"On",offBadge:"Off"};function rs(t,e){if(!Number.isFinite(t))return String(t);const r=t.toFixed(e);return r.includes(".")?r.replace(/0+$/,"").replace(/\.$/,""):r}function ss(t,e){return rs(t,e==="m3"?3:2)}function Re({device:t,actions:e,disabled:r,onToggle:i}){const s=t.available?t.value?{label:e.onBadge,className:"badge badge-on"}:{label:e.offBadge,className:"badge badge-off"}:{label:"Unknown",className:"badge badge-off"};return a("li",{class:"valve-row",children:[a("div",{class:"row",children:[a("span",{children:t.name}),a("span",{class:s.className,children:s.label})]}),a("div",{class:"form-actions",children:[a(D,{variant:"primary",disabled:r,onClick:()=>i(t.id,"on"),children:e.on}),a(D,{disabled:r,onClick:()=>i(t.id,"off"),children:e.off})]})]})}function is(){const[t,e]=v(null),[r,i]=v(!1),[s,n]=v(null),[o,c]=v(null),[d,h]=v(null),p=U(async()=>{const u=await Lr();if(u.ok){const _=u.data;Array.isArray(_.devices)&&Array.isArray(_.sensors)&&typeof _.emergencyMode=="boolean"?(e(_),n(null)):n("Device returned an invalid controls response")}else n(u.message);i(!0)},[]);O(()=>{p();const u=window.setInterval(()=>{p()},Zr);return()=>window.clearInterval(u)},[p]);const m=U(async(u,_)=>{c(null),h(u);try{const S=await Or(u,_);S.ok||c(S.message)}catch(S){c(S instanceof Error?S.message:String(S))}finally{h(null),await p()}},[p]);if(!r)return a("div",{class:"stack",children:a(H,{title:"Controls",children:a("p",{class:"muted",children:"Loading controls…"})})});if(!t)return a("div",{class:"stack",children:[s?a(x,{kind:"error",message:s}):null,a("div",{class:"form-actions",children:a(D,{onClick:()=>{p()},children:"Retry"})})]});const l=t.devices.find(u=>u.kind==="auto")??null,f=t.devices.filter(u=>u.kind==="valve"),b=t.devices.filter(u=>u.kind==="pump"),w=s!==null,y=u=>w||!u.available||d===u.id;return a("div",{class:"stack",children:[l&&l.available&&l.value?a(x,{kind:"info",message:"Automation is enabled and may revert manual valve/pump changes shortly after you toggle them."}):null,s?a(N,{children:[a(x,{kind:"error",message:s}),a("div",{class:"form-actions",children:a(D,{onClick:()=>{p()},children:"Retry"})})]}):null,o?a(x,{kind:"error",message:o,onClose:()=>c(null)}):null,a(H,{title:"Sensors",children:a("dl",{class:"kv",children:[t.sensors.map(u=>a(N,{children:[a("dt",{children:u.name}),a("dd",{children:u.available?a(N,{children:[ss(u.value,u.unit)," ",a("span",{class:"unit",children:u.unit})]}):a("span",{class:"hint",children:"Unavailable"})})]},u.id)),a("dt",{children:"Emergency mode"}),a("dd",{children:a("span",{class:t.emergencyMode?"badge badge-danger":"badge badge-off",children:t.emergencyMode?"Active":"Off"})})]})}),a(H,{title:"Auto mode",children:l?a("ul",{class:"valve-list",children:a(Re,{device:l,actions:Xr,disabled:y(l),onToggle:m})}):a("p",{class:"muted",children:"Auto mode is not reported by the device."})}),a(H,{title:"Valves",children:f.length===0?a("p",{class:"muted",children:"No valves reported by the device."}):a("ul",{class:"valve-list",children:f.map(u=>a(Re,{device:u,actions:es,disabled:y(u),onToggle:m},u.id))})}),a(H,{title:"Pumps",children:b.length===0?a("p",{class:"muted",children:"No pumps reported by the device."}):a("ul",{class:"valve-list",children:b.map(u=>a(Re,{device:u,actions:ts,disabled:y(u),onToggle:m},u.id))})})]})}const ns={homeWaterInitialValue:"",yardWaterInitialValue:""};function yt(t){if(t.trim()==="")return null;const e=Number(t);return Number.isFinite(e)?e:null}function as(t){return Object.keys(t).length>0}function os(t){const e={},r=yt(t.homeWaterInitialValue);(r===null||r<0)&&(e.homeWaterInitialValue="Enter a value of 0 or more.");const i=yt(t.yardWaterInitialValue);return(i===null||i<0)&&(e.yardWaterInitialValue="Enter a value of 0 or more."),e}function ls(){const[t,e]=v(!1),[r,i]=v(null),[s,n]=v(ns),[o,c]=v({}),[d,h]=v(null),[p,m]=v(null),[l,f]=v(null),[b,w]=v(null),[y,u]=v(null),_=U(async()=>{i(null);const A=await Ur();A.ok?n({homeWaterInitialValue:String(A.data.homeWaterInitialValue),yardWaterInitialValue:String(A.data.yardWaterInitialValue)}):i(A.message),e(!0)},[]);O(()=>{_()},[_]);const S=U(async A=>{const q=os(s);c(q);const R=A==="home"?m:w,W=A==="home"?f:u;if(R(null),W(null),!as(q)){h(A);try{const T=await Rr({homeWaterInitialValue:Number(s.homeWaterInitialValue),yardWaterInitialValue:Number(s.yardWaterInitialValue)});T.ok?R("Counter recalibrated to the entered reading."):W(T.message)}catch(T){W(T instanceof Error?T.message:String(T))}finally{h(null)}}},[s]);if(!t)return a("div",{class:"stack",children:a(H,{title:"Meters",children:a("p",{class:"muted",children:"Loading meter values…"})})});const E=d!==null,I=(A,q,R)=>{const W=A==="home",T=W?"homeWaterInitialValue":"yardWaterInitialValue",B=s[T],pr=o[T],ot=W?p:b,lt=W?l:y;return a(H,{title:q,children:a("form",{onSubmit:Le=>{Le.preventDefault(),S(A)},children:[a(L,{label:R,value:B,onInput:Le=>n(fr=>({...fr,[T]:Le})),type:"number",min:0,inputMode:"decimal",error:pr,help:"Cumulative counter value in litres.",disabled:E}),ot?a(x,{kind:"success",message:ot,onClose:()=>W?m(null):w(null)}):null,lt?a(x,{kind:"error",message:lt,onClose:()=>W?f(null):u(null)}):null,a("div",{class:"form-actions",children:a(D,{type:"submit",variant:"primary",disabled:E,children:d===A?"Saving…":"Save"})})]})})};return a("div",{class:"stack",children:[a(x,{kind:"info",message:"Setting an initial value recalibrates the pulse counter to that reading. It is persisted immediately and needs no reboot."}),r?a(N,{children:[a(x,{kind:"error",message:r}),a("div",{class:"form-actions",children:a(D,{onClick:()=>{_()},children:"Retry"})})]}):null,I("home","Home water","Home water counter"),I("yard","Yard water","Yard water counter")]})}function ds(){const t=Yt(null);return O(()=>{const e=document.createElement("edn-network-page");return t.current?.append(e),()=>e.remove()},[]),a("div",{ref:t})}function cs({label:t,value:e,options:r,onChange:i,error:s,help:n,disabled:o,required:c,name:d}){const h=Xe(),p=m=>{i?.(m.currentTarget.value)};return a("label",{class:"field",for:h,children:[a("span",{class:"field-label",children:t}),a("select",{id:h,name:d,value:String(e),disabled:o,required:c,onChange:p,"aria-invalid":s?!0:void 0,children:r.map(m=>a("option",{value:m.value,disabled:m.disabled,children:m.label},m.value))}),n&&!s?a("span",{class:"field-help",children:n}):null,s?a("span",{class:"field-error",children:s}):null]})}function ke(t){if(t.trim()==="")return null;const e=Number(t);return Number.isFinite(e)?e:null}function sr(t){return Object.keys(t).length>0}const us={modbusSpeed:"9600",addressQDY30A:"",addressWBMAI6:""};function hs(t){const e=g.modbus.speeds.map(i=>({value:String(i),label:`${i} baud`})),r=ke(t);return r!==null&&!g.modbus.speeds.includes(r)&&e.unshift({value:t,label:`${t} (current)`}),e}function $t(t,e){const r=ke(t);if(r===null||!Number.isInteger(r)||r<g.modbus.addressMin||r>g.modbus.addressMax)return`${e} must be an integer between ${g.modbus.addressMin} and ${g.modbus.addressMax}.`}function ps(){const[t,e]=v(!1),[r,i]=v(null),[s,n]=v(us),[o,c]=v({}),[d,h]=v(!1),[p,m]=v(null),[l,f]=v(null),b=Ie(()=>hs(s.modbusSpeed),[s.modbusSpeed]),w=U(async()=>{i(null);const _=await Hr();_.ok?n({modbusSpeed:String(_.data.modbusSpeed),addressQDY30A:String(_.data.addressQDY30A),addressWBMAI6:String(_.data.addressWBMAI6)}):i(_.message),e(!0)},[]);O(()=>{w()},[w]);const y=_=>n(S=>({...S,..._})),u=U(async _=>{_.preventDefault();const S={addressQDY30A:$t(s.addressQDY30A,"QDY30A address"),addressWBMAI6:$t(s.addressWBMAI6,"WB-MAI6 address")};if(c(S),m(null),f(null),!sr(S)){h(!0);try{const E=await Wr({modbusSpeed:Number(s.modbusSpeed),addressQDY30A:Number(s.addressQDY30A),addressWBMAI6:Number(s.addressWBMAI6)});E.ok?m("Modbus settings saved to flash."):f(E.message)}catch(E){f(E instanceof Error?E.message:String(E))}finally{h(!1)}}},[s]);return t?a(H,{title:"Modbus",children:[r?a(N,{children:[a(x,{kind:"error",message:r}),a("div",{class:"form-actions",children:a(D,{onClick:()=>{w()},children:"Retry"})})]}):null,a("form",{onSubmit:u,children:[a(cs,{label:"Bus speed",value:s.modbusSpeed,options:b,onChange:_=>y({modbusSpeed:_}),help:"Only the speeds supported by the firmware are listed.",disabled:d}),a(L,{label:"QDY30A address",value:s.addressQDY30A,onInput:_=>y({addressQDY30A:_}),type:"number",min:g.modbus.addressMin,max:g.modbus.addressMax,inputMode:"numeric",error:o.addressQDY30A,disabled:d}),a(L,{label:"WB-MAI6 address",value:s.addressWBMAI6,onInput:_=>y({addressWBMAI6:_}),type:"number",min:g.modbus.addressMin,max:g.modbus.addressMax,inputMode:"numeric",error:o.addressWBMAI6,disabled:d}),p?a(x,{kind:"success",message:p,onClose:()=>m(null)}):null,l?a(x,{kind:"error",message:l,onClose:()=>f(null)}):null,a("div",{class:"form-actions",children:a(D,{type:"submit",variant:"primary",disabled:d,children:d?"Saving…":"Save Modbus"})})]})]}):a(H,{title:"Modbus",children:a("p",{class:"muted",children:"Loading Modbus settings…"})})}const fs={rainwaterPitLevelTopic:"",rainwaterPitMaxHeight:"",rainwaterPitMaxFillLevel:""};function ms(){const[t,e]=v(!1),[r,i]=v(null),[s,n]=v(fs),[o,c]=v({}),[d,h]=v(!1),[p,m]=v(null),[l,f]=v(null),b=U(async()=>{i(null);const u=await Nr();u.ok?n({rainwaterPitLevelTopic:u.data.rainwaterPitLevelTopic,rainwaterPitMaxHeight:String(u.data.rainwaterPitMaxHeight),rainwaterPitMaxFillLevel:String(u.data.rainwaterPitMaxFillLevel)}):i(u.message),e(!0)},[]);O(()=>{b()},[b]);const w=u=>n(_=>({..._,...u})),y=U(async u=>{u.preventDefault();const _={};s.rainwaterPitLevelTopic.length>g.rainwater.topicMax&&(_.rainwaterPitLevelTopic=`At most ${g.rainwater.topicMax} characters.`);const S=ke(s.rainwaterPitMaxHeight);(S===null||S<=g.rainwater.maxHeightMinExclusive||S>g.rainwater.maxHeightMax)&&(_.rainwaterPitMaxHeight=`Height must be greater than 0 and at most ${g.rainwater.maxHeightMax} m.`);const E=ke(s.rainwaterPitMaxFillLevel);if((E===null||E<=g.rainwater.fillLevelStartPercent||E>g.rainwater.maxFillLevelMax)&&(_.rainwaterPitMaxFillLevel=`Fill level must be greater than ${g.rainwater.fillLevelStartPercent} and at most ${g.rainwater.maxFillLevelMax}.`),c(_),m(null),f(null),!sr(_)){h(!0);try{const I=await qr({rainwaterPitLevelTopic:s.rainwaterPitLevelTopic,rainwaterPitMaxHeight:Number(s.rainwaterPitMaxHeight),rainwaterPitMaxFillLevel:Number(s.rainwaterPitMaxFillLevel)});I.ok?m("Rainwater settings saved to flash."):f(I.message)}catch(I){f(I instanceof Error?I.message:String(I))}finally{h(!1)}}},[s]);return t?a(H,{title:"Rainwater pit",children:[r?a(N,{children:[a(x,{kind:"error",message:r}),a("div",{class:"form-actions",children:a(D,{onClick:()=>{b()},children:"Retry"})})]}):null,a("form",{onSubmit:y,children:[a(L,{label:"Pit level topic",value:s.rainwaterPitLevelTopic,onInput:u=>w({rainwaterPitLevelTopic:u}),maxLength:g.rainwater.topicMax,placeholder:"Leave empty to disable auto-filling",help:"MQTT topic that reports the pit level; empty disables auto-filling.",error:o.rainwaterPitLevelTopic,autoComplete:"off",disabled:d}),a(L,{label:"Pit max height",value:s.rainwaterPitMaxHeight,onInput:u=>w({rainwaterPitMaxHeight:u}),type:"number",min:g.rainwater.maxHeightMinExclusive,max:g.rainwater.maxHeightMax,step:.1,inputMode:"decimal",help:`Height of the pit in metres (greater than 0, at most ${g.rainwater.maxHeightMax}).`,error:o.rainwaterPitMaxHeight,disabled:d}),a(L,{label:"Pit max fill level",value:s.rainwaterPitMaxFillLevel,onInput:u=>w({rainwaterPitMaxFillLevel:u}),type:"number",min:g.rainwater.fillLevelStartPercent,max:g.rainwater.maxFillLevelMax,step:1,inputMode:"numeric",help:`Percentage that stops filling; must be greater than ${g.rainwater.fillLevelStartPercent}% and at most ${g.rainwater.maxFillLevelMax}%.`,error:o.rainwaterPitMaxFillLevel,disabled:d}),p?a(x,{kind:"success",message:p,onClose:()=>m(null)}):null,l?a(x,{kind:"error",message:l,onClose:()=>f(null)}):null,a("div",{class:"form-actions",children:a(D,{type:"submit",variant:"primary",disabled:d,children:d?"Saving…":"Save rainwater"})})]})]}):a(H,{title:"Rainwater pit",children:a("p",{class:"muted",children:"Loading rainwater settings…"})})}function _s(){return a("div",{class:"stack",children:[a(rr,{}),a(ps,{}),a(ms,{})]})}const Fe=2e3,gs=12e4;function vs(){const[t,e]=v("idle"),r=Yt(0);O(()=>{if(t!=="rebooting")return;let o=!1,c;const d=()=>{tr().then(h=>{if(!o){if(h.ok){e("ready");return}if(r.current+=1,r.current*Fe>=gs){e("timeout");return}c=window.setTimeout(d,Fe)}})};return c=window.setTimeout(d,Fe),()=>{o=!0,c!==void 0&&window.clearTimeout(c)}},[t]);const i=U(()=>{r.current=0,e("rebooting")},[]),s=U(()=>e("idle"),[]),n=U(()=>{r.current=0,e("rebooting")},[]);return Ie(()=>({phase:t,start:i,dismiss:s,retry:n}),[t,i,s,n])}function bs({flow:t}){return t.phase==="idle"?null:a("div",{class:"reboot-overlay",role:"alertdialog","aria-modal":"true","aria-label":"Device rebooting",children:a("div",{class:"reboot-dialog card",children:[a("h2",{children:"Device is rebooting"}),t.phase==="rebooting"?a(N,{children:[a("p",{children:"Waiting for the device to come back online. This usually takes 20–60 seconds."}),a("p",{class:"muted","aria-live":"polite",children:"Polling device health…"})]}):null,t.phase==="ready"?a(N,{children:[a(x,{kind:"success",message:"The device is back online."}),a("div",{class:"form-actions",children:a(D,{variant:"primary",onClick:()=>window.location.reload(),children:"Reload panel"})})]}):null,t.phase==="timeout"?a(N,{children:[a(x,{kind:"error",message:"No response after about two minutes. Check the power and network, then reload or keep waiting."}),a("div",{class:"form-actions",children:[a(D,{onClick:t.retry,children:"Keep waiting"}),a(D,{onClick:t.dismiss,children:"Dismiss"})]})]}):null]})})}const ws=1e4;function ys(t){const e=Math.max(0,Math.floor(t)),r=Math.floor(e/86400),i=Math.floor(e%86400/3600),s=Math.floor(e%3600/60),n=e%60,o=[];return r&&o.push(`${r}d`),(r||i)&&o.push(`${i}h`),(r||i||s)&&o.push(`${s}m`),o.push(`${n}s`),o.join(" ")}function $s(t){return Number.isFinite(t)?`${Math.round(t/1024)} KB (${Math.round(t)} bytes)`:String(t)}function Ss(){const[t,e]=v(null),[r,i]=v(null),[s,n]=v(!1),[o,c]=v(null),[d,h]=v(null),[p,m]=v(!0),[l,f]=v(null),[b,w]=v(!1),y=vs(),u=U(async()=>{const A=await Ir();A.ok?(e(A.data),i(null)):i(A.message),n(!0)},[]),_=U(async()=>{m(!0);const[A,q]=await Promise.all([tr(),Dr()]);c(A),h(q),m(!1)},[]);O(()=>{u();const A=window.setInterval(()=>{u()},ws);return()=>window.clearInterval(A)},[u]),O(()=>{_()},[_]);const S=U(async()=>{if(!window.confirm("Reboot the device now? Water metering will be offline for about 20-60 seconds."))return;f(null),w(!0);const q=await Br();w(!1),q.ok?y.start():f(q.message)},[y.start]),E=p&&!o?a("p",{class:"muted",children:"Checking device health…"}):o?o.ok?a(x,{kind:o.data.healty?"success":"error",message:o.data.healty?"Healthcheck is OK.":"Healthcheck reports failure."}):a(x,{kind:"error",message:o.message}):null,I=d?d.ok?a(x,{kind:d.data.ready?"success":"info",message:d.data.ready?"All registered services are ready.":`Not ready: ${d.data.message}`}):d.status===500?a(x,{kind:"info",message:`Not ready: ${d.message}`}):a(x,{kind:"error",message:d.message}):null;return a("div",{class:"stack",children:[a(H,{title:"Device",children:[s?r?a(N,{children:[a(x,{kind:"error",message:r}),a("div",{class:"form-actions",children:a(D,{onClick:()=>{u()},children:"Retry"})})]}):t?a("dl",{class:"kv",children:[a("dt",{children:"Wi-Fi"}),a("dd",{children:a("span",{class:t.wifiStatus==="connected"?"badge badge-on":"badge badge-off",children:t.wifiStatus})}),a("dt",{children:"Free heap"}),a("dd",{children:$s(t.freeHeap)}),a("dt",{children:"Uptime"}),a("dd",{children:ys(t.uptime)}),a("dt",{children:"Last reset reason"}),a("dd",{children:t.lastResetReason})]}):null:a("p",{class:"muted",children:"Loading status…"}),a("p",{class:"muted mt",children:"Status refreshes automatically every 10 seconds."})]}),a(H,{title:"Health",children:[E,I,a("div",{class:"form-actions",children:a(D,{onClick:()=>{_()},disabled:p,children:p?"Checking…":"Refresh health"})})]}),a(H,{title:"Maintenance",children:[a("p",{class:"muted",children:"A reboot briefly interrupts water metering and MQTT reporting. Configuration changes saved on the other tabs only take effect after a reboot."}),l?a(x,{kind:"error",message:l,onClose:()=>f(null)}):null,a("div",{class:"form-actions",children:a(jr,{onClick:()=>{S()},disabled:b||y.phase!=="idle",children:"Reboot device"})})]}),a(bs,{flow:y})]})}const Ps=[{id:"status",label:"Status"},{id:"meters",label:"Meters"},{id:"controls",label:"Controls"},{id:"settings",label:"Settings"},{id:"connections",label:"MQTT"},{id:"network",label:"Network"}];function As(t){switch(t){case"status":return a(Ss,{});case"meters":return a(ls,{});case"controls":return a(is,{});case"settings":return a(_s,{});case"connections":return a(Gr,{});case"network":return a(ds,{})}}function xs(){const[t,e]=v("status");return a(N,{children:[a("header",{class:"app-header",children:[a("div",{class:"brand",children:[a("svg",{class:"brand-mark",viewBox:"0 0 24 24",width:"20",height:"20","aria-hidden":"true",focusable:"false",children:[a("path",{fill:"currentColor",d:"M12 23c4.4 0 7.5-2.7 7.5-6.7 0-2.3-1-4.3-2.3-6.1-.8 1.6-1.8 2.6-2.9 3.3.4-1.4.2-3.1-.7-5C12.7 6.1 11.3 4.3 10.4 2c-.3 2.3-1.4 4-2.7 5.5C6.4 9.1 4.5 11 4.5 15c0 4 3.1 8 7.5 8z"}),a("path",{fill:"currentColor",opacity:".45",d:"M12 21.2c-1.6 0-2.8-1.1-2.8-2.8 0-1.3.7-2.1 1.5-3 .3.7.8 1.1 1.4 1.4-.2-1.2.1-2.4 1-3.5.9 1.2 1.4 2.6 1.4 4 0 2.3-1.4 3.9-2.5 3.9z"})]}),a("h1",{children:"Neptunus"})]}),a("span",{class:"hint",children:"water metering & rainwater controller"})]}),a(kr,{tabs:Ps,active:t,onSelect:e}),a("main",{class:"tab-content",id:`panel-${t}`,role:"tabpanel","aria-labelledby":`tab-${t}`,children:As(t)})]})}function ks(t){if(t&&typeof t=="object"&&"error"in t){let e=t.error;if(typeof e=="string"&&e.length>0)return e}}function ir(t={}){let e=t.baseUrl??"",r=t.headers??{};async function i(s,n){let o;try{o=await fetch(`${e}${s}`,{...n,headers:{Accept:"application/json",...n?.body===void 0?{}:{"Content-Type":"application/json"},...r}})}catch(p){return n?.signal?.aborted===!0||typeof p=="object"&&p&&p.name==="AbortError"?{ok:!1,message:"Request aborted."}:{ok:!1,message:"Network request failed. Check the device connection and try again."}}let c=await o.text().catch(()=>""),d,h=!1;if(c.length>0)try{d=JSON.parse(c),h=!0}catch{h=!1}if(!o.ok){let p=ks(d);return{ok:!1,status:o.status,message:p??`Request failed with HTTP ${o.status}.`}}return h?{ok:!0,data:d}:{ok:!1,status:o.status,message:`Unexpected response from server (HTTP ${o.status}).`}}return{getSettings(s){return i("/api/network/settings",{signal:s})},saveSettings(s,n){return i("/api/network/settings",{method:"POST",body:JSON.stringify(s),signal:n})},getStatus(s){return i("/api/network/status",{signal:s})},wifiList(s){return i("/api/wifi/list",{signal:s})}}}var Se=globalThis,et=Se.ShadowRoot&&(Se.ShadyCSS===void 0||Se.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,tt=Symbol(),St=new WeakMap,nr=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==tt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(et&&t===void 0){let r=e!==void 0&&e.length===1;r&&(t=St.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&St.set(e,t))}return t}toString(){return this.cssText}},Ms=t=>new nr(typeof t=="string"?t:t+"",void 0,tt),rt=(t,...e)=>new nr(t.length===1?t[0]:e.reduce((r,i,s)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]),t,tt),Es=(t,e)=>{if(et)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(let r of e){let i=document.createElement("style"),s=Se.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=r.cssText,t.appendChild(i)}},Pt=et?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(let i of e.cssRules)r+=i.cssText;return Ms(r)})(t):t,{is:Ts,defineProperty:Cs,getOwnPropertyDescriptor:Is,getOwnPropertyNames:Ds,getOwnPropertySymbols:Hs,getPrototypeOf:Ns}=Object,Ne=globalThis,At=Ne.trustedTypes,Us=At?At.emptyScript:"",Ls=Ne.reactiveElementPolyfillSupport,ce=(t,e)=>t,Qe={toAttribute(t,e){switch(e){case Boolean:t=t?Us:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},ar=(t,e)=>!Ts(t,e),xt={attribute:!0,type:String,converter:Qe,reflect:!1,useDefault:!1,hasChanged:ar};Symbol.metadata??=Symbol("metadata"),Ne.litPropertyMetadata??=new WeakMap;var se=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=xt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let r=Symbol(),i=this.getPropertyDescriptor(t,r,e);i!==void 0&&Cs(this.prototype,t,i)}}static getPropertyDescriptor(t,e,r){let{get:i,set:s}=Is(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:i,set(n){let o=i?.call(this);s?.call(this,n),this.requestUpdate(t,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??xt}static _$Ei(){if(this.hasOwnProperty(ce("elementProperties")))return;let t=Ns(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(ce("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ce("properties"))){let e=this.properties,r=[...Ds(e),...Hs(e)];for(let i of r)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[r,i]of e)this.elementProperties.set(r,i)}this._$Eh=new Map;for(let[e,r]of this.elementProperties){let i=this._$Eu(e,r);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let r=new Set(t.flat(1/0).reverse());for(let i of r)e.unshift(Pt(i))}else t!==void 0&&e.push(Pt(t));return e}static _$Eu(t,e){let r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Es(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ET(t,e){let r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(i!==void 0&&r.reflect===!0){let s=(r.converter?.toAttribute===void 0?Qe:r.converter).toAttribute(e,r.type);this._$Em=t,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(t,e){let r=this.constructor,i=r._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let s=r.getPropertyOptions(i),n=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute===void 0?Qe:s.converter;this._$Em=i;let o=n.fromAttribute(e,s.type);this[i]=o??this._$Ej?.get(i)??o,this._$Em=null}}requestUpdate(t,e,r,i=!1,s){if(t!==void 0){let n=this.constructor;if(i===!1&&(s=this[t]),r??=n.getPropertyOptions(t),!((r.hasChanged??ar)(s,e)||r.useDefault&&r.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,r))))return;this.C(t,e,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:r,reflect:i,wrapped:s},n){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),s!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[i,s]of r){let{wrapped:n}=s,o=this[i];n!==!0||this._$AL.has(i)||o===void 0||this.C(i,void 0,s,o)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(e)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};se.elementStyles=[],se.shadowRootOptions={mode:"open"},se[ce("elementProperties")]=new Map,se[ce("finalized")]=new Map,Ls?.({ReactiveElement:se}),(Ne.reactiveElementVersions??=[]).push("2.1.2");var st=globalThis,kt=t=>t,Me=st.trustedTypes,Mt=Me?Me.createPolicy("lit-html",{createHTML:t=>t}):void 0,or="$lit$",V=`lit$${Math.random().toFixed(9).slice(2)}$`,lr="?"+V,Ws=`<${lr}>`,re=document,he=()=>re.createComment(""),pe=t=>t===null||typeof t!="object"&&typeof t!="function",it=Array.isArray,qs=t=>it(t)||typeof t?.[Symbol.iterator]=="function",Oe=`[ 	
\f\r]`,oe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Et=/-->/g,Tt=/>/g,Y=RegExp(`>|${Oe}(?:([^\\s"'>=/]+)(${Oe}*=${Oe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ct=/'/g,It=/"/g,dr=/^(?:script|style|textarea|title)$/i,$=(t=>(e,...r)=>({_$litType$:t,strings:e,values:r}))(1),ne=Symbol.for("lit-noChange"),P=Symbol.for("lit-nothing"),Dt=new WeakMap,J=re.createTreeWalker(re,129);function cr(t,e){if(!it(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Mt===void 0?e:Mt.createHTML(e)}var Rs=(t,e)=>{let r=t.length-1,i=[],s,n=e===2?"<svg>":e===3?"<math>":"",o=oe;for(let c=0;c<r;c++){let d=t[c],h,p,m=-1,l=0;for(;l<d.length&&(o.lastIndex=l,p=o.exec(d),p!==null);)l=o.lastIndex,o===oe?p[1]==="!--"?o=Et:p[1]===void 0?p[2]===void 0?p[3]!==void 0&&(o=Y):(dr.test(p[2])&&(s=RegExp("</"+p[2],"g")),o=Y):o=Tt:o===Y?p[0]===">"?(o=s??oe,m=-1):p[1]===void 0?m=-2:(m=o.lastIndex-p[2].length,h=p[1],o=p[3]===void 0?Y:p[3]==='"'?It:Ct):o===It||o===Ct?o=Y:o===Et||o===Tt?o=oe:(o=Y,s=void 0);let f=o===Y&&t[c+1].startsWith("/>")?" ":"";n+=o===oe?d+Ws:m>=0?(i.push(h),d.slice(0,m)+or+d.slice(m)+V+f):d+V+(m===-2?c:f)}return[cr(t,n+(t[r]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]},Ye=class ur{constructor({strings:e,_$litType$:r},i){let s;this.parts=[];let n=0,o=0,c=e.length-1,d=this.parts,[h,p]=Rs(e,r);if(this.el=ur.createElement(h,i),J.currentNode=this.el.content,r===2||r===3){let m=this.el.content.firstChild;m.replaceWith(...m.childNodes)}for(;(s=J.nextNode())!==null&&d.length<c;){if(s.nodeType===1){if(s.hasAttributes())for(let m of s.getAttributeNames())if(m.endsWith(or)){let l=p[o++],f=s.getAttribute(m).split(V),b=/([.?@])?(.*)/.exec(l);d.push({type:1,index:n,name:b[2],strings:f,ctor:b[1]==="."?Os:b[1]==="?"?Bs:b[1]==="@"?zs:Ue}),s.removeAttribute(m)}else m.startsWith(V)&&(d.push({type:6,index:n}),s.removeAttribute(m));if(dr.test(s.tagName)){let m=s.textContent.split(V),l=m.length-1;if(l>0){s.textContent=Me?Me.emptyScript:"";for(let f=0;f<l;f++)s.append(m[f],he()),J.nextNode(),d.push({type:2,index:++n});s.append(m[l],he())}}}else if(s.nodeType===8)if(s.data===lr)d.push({type:2,index:n});else{let m=-1;for(;(m=s.data.indexOf(V,m+1))!==-1;)d.push({type:7,index:n}),m+=V.length-1}n++}}static createElement(e,r){let i=re.createElement("template");return i.innerHTML=e,i}};function ae(t,e,r=t,i){if(e===ne)return e;let s=i===void 0?r._$Cl:r._$Co?.[i],n=pe(e)?void 0:e._$litDirective$;return s?.constructor!==n&&(s?._$AO?.(!1),n===void 0?s=void 0:(s=new n(t),s._$AT(t,r,i)),i===void 0?r._$Cl=s:(r._$Co??=[])[i]=s),s!==void 0&&(e=ae(t,s._$AS(t,e.values),s,i)),e}var Fs=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:r}=this._$AD,i=(t?.creationScope??re).importNode(e,!0);J.currentNode=i;let s=J.nextNode(),n=0,o=0,c=r[0];for(;c!==void 0;){if(n===c.index){let d;c.type===2?d=new nt(s,s.nextSibling,this,t):c.type===1?d=new c.ctor(s,c.name,c.strings,this,t):c.type===6&&(d=new js(s,this,t)),this._$AV.push(d),c=r[++o]}n!==c?.index&&(s=J.nextNode(),n++)}return J.currentNode=re,i}p(t){let e=0;for(let r of this._$AV)r!==void 0&&(r.strings===void 0?r._$AI(t[e]):(r._$AI(t,r,e),e+=r.strings.length-2)),e++}},nt=class hr{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,r,i,s){this.type=2,this._$AH=P,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,r=this._$AM;return r!==void 0&&e?.nodeType===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=ae(this,e,r),pe(e)?e===P||e==null||e===""?(this._$AH!==P&&this._$AR(),this._$AH=P):e!==this._$AH&&e!==ne&&this._(e):e._$litType$===void 0?e.nodeType===void 0?qs(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==P&&pe(this._$AH)?this._$AA.nextSibling.data=e:this.T(re.createTextNode(e)),this._$AH=e}$(e){let{values:r,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Ye.createElement(cr(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(r);else{let n=new Fs(s,this),o=n.u(this.options);n.p(r),this.T(o),this._$AH=n}}_$AC(e){let r=Dt.get(e.strings);return r===void 0&&Dt.set(e.strings,r=new Ye(e)),r}k(e){it(this._$AH)||(this._$AH=[],this._$AR());let r=this._$AH,i,s=0;for(let n of e)s===r.length?r.push(i=new hr(this.O(he()),this.O(he()),this,this.options)):i=r[s],i._$AI(n),s++;s<r.length&&(this._$AR(i&&i._$AB.nextSibling,s),r.length=s)}_$AR(e=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);e!==this._$AB;){let i=kt(e).nextSibling;kt(e).remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Ue=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,i,s){this.type=1,this._$AH=P,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=P}_$AI(t,e=this,r,i){let s=this.strings,n=!1;if(s===void 0)t=ae(this,t,e,0),n=!pe(t)||t!==this._$AH&&t!==ne,n&&(this._$AH=t);else{let o=t,c,d;for(t=s[0],c=0;c<s.length-1;c++)d=ae(this,o[r+c],e,c),d===ne&&(d=this._$AH[c]),n||=!pe(d)||d!==this._$AH[c],d===P?t=P:t!==P&&(t+=(d??"")+s[c+1]),this._$AH[c]=d}n&&!i&&this.j(t)}j(t){t===P?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Os=class extends Ue{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===P?void 0:t}},Bs=class extends Ue{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==P)}},zs=class extends Ue{constructor(t,e,r,i,s){super(t,e,r,i,s),this.type=5}_$AI(t,e=this){if((t=ae(this,t,e,0)??P)===ne)return;let r=this._$AH,i=t===P&&r!==P||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==P&&(r===P||i);i&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},js=class{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){ae(this,t)}},Vs=st.litHtmlPolyfillSupport;Vs?.(Ye,nt),(st.litHtmlVersions??=[]).push("3.3.3");var Qs=(t,e,r)=>{let i=r?.renderBefore??e,s=i._$litPart$;if(s===void 0){let n=r?.renderBefore??null;i._$litPart$=s=new nt(e.insertBefore(he(),n),n,void 0,r??{})}return s._$AI(t),s},at=globalThis,K=class extends se{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Qs(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ne}};K._$litElement$=!0,K.finalized=!0,at.litElementHydrateSupport?.({LitElement:K});var Ys=at.litElementPolyfillSupport;Ys?.({LitElement:K}),(at.litElementVersions??=[]).push("4.2.2");var Js={ethernet:"Ethernet",wifi:"Wi-Fi",wifi_ap:"Wi-Fi AP"};function Ks(t){return t===void 0||Number.isNaN(t)?"Unknown":t>=-55?"Excellent":t>=-67?"Good":t>=-75?"Fair":"Weak"}function Gs(t){return t===1?"Full":t===0?"Half":`Unknown (${t})`}function Zs(t){let e=r=>String(r).padStart(2,"0");return`${e(t.getHours())}:${e(t.getMinutes())}:${e(t.getSeconds())}`}var G,Xs=(G=class extends K{constructor(...e){super(...e),this.baseUrl="",this.pollIntervalMs=1e4,this.errorMessage="",this.loading=!1,this.refreshSeq=0,this.handleRetry=()=>{this.refresh()}}connectedCallback(){super.connectedCallback(),this.refresh(),this.startPolling()}disconnectedCallback(){super.disconnectedCallback(),this.stopPolling()}updated(e){e.has("pollIntervalMs")&&this.startPolling();let r=e.get("baseUrl");e.has("baseUrl")&&r!==void 0&&r!==this.baseUrl&&(this.client=void 0,this.refresh())}render(){let e=this.status;return $`
      <div class="card">
        <header class="head">
          ${e?$`<span class="badge badge-${e.mode}">${Js[e.mode]}</span>`:$`<span class="badge badge-unknown">Unknown</span>`}
          ${e?$`<span class="state ${e.connected?"state-up":"state-down"}">
                ${e.connected?"Connected":"Disconnected"}
              </span>`:P}
          ${this.loading?$`<span class="muted loading">Refreshing…</span>`:P}
        </header>

        ${e?.fallbackAP?$`<div class="banner banner-warn" role="alert">
              Fallback AP active — the device could not reach the configured network.
            </div>`:P}
        ${this.errorMessage?$`<div class="banner banner-error" role="alert">
              <span>${this.errorMessage}</span>
              <button type="button" @click=${this.handleRetry}>Retry</button>
            </div>`:P}
        ${e?this.renderSections(e):$`<p class="muted">Loading network status…</p>`}

        <footer class="muted foot">
          ${this.lastUpdated?$`Updated ${Zs(this.lastUpdated)}`:$`Waiting for data…`}
        </footer>
      </div>
    `}renderSections(e){switch(e.mode){case"wifi":return this.renderWifi(e);case"wifi_ap":return this.renderAp(e);case"ethernet":return this.renderEthernet(e)}}renderWifi(e){return $`
      <section>
        <h2>Wi-Fi</h2>
        <dl class="rows">
          ${this.row("SSID",e.ssid)}
          ${this.row("Signal",e.rssi===void 0?void 0:`${e.rssi} dBm (${Ks(e.rssi)})`)}
          ${this.row("IP address",e.ip)} ${this.row("MAC address",e.mac)}
        </dl>
      </section>
    `}renderAp(e){let r=e.ap;return $`
      <section>
        <h2>Access point</h2>
        <dl class="rows">
          ${this.row("SSID",r?.ssid)} ${this.row("IP address",r?.ip)}
          ${this.row("Stations",r?.stations)}
        </dl>
      </section>
    `}renderEthernet(e){let r=e.eth;return $`
      <section>
        <h2>Ethernet</h2>
        <dl class="rows">
          ${this.row("IP address",r?.ip)} ${this.row("MAC address",r?.mac)}
          ${this.row("Link",r===void 0?void 0:r.linkUp?"Up":"Down")}
          ${this.row("Speed",r===void 0?void 0:`${r.speed} Mbps`)}
          ${this.row("Duplex",r===void 0?void 0:Gs(r.duplex))}
        </dl>
      </section>
    `}row(e,r){return r===void 0||r===""?P:$`<dt>${e}</dt>
          <dd>${r}</dd>`}ensureClient(){return(!this.client||this.clientBaseUrl!==this.baseUrl)&&(this.client=ir({baseUrl:this.baseUrl}),this.clientBaseUrl=this.baseUrl),this.client}async refresh(){let e=++this.refreshSeq;this.loading=!0;let r=await this.ensureClient().getStatus();if(e===this.refreshSeq){if(this.loading=!1,r.ok){this.status=r.data,this.errorMessage="",this.lastUpdated=new Date;return}this.errorMessage=r.message,this.dispatchEvent(new CustomEvent("edn-error",{detail:{message:r.message},bubbles:!0,composed:!0}))}}startPolling(){this.stopPolling();let e=Number(this.pollIntervalMs);!Number.isFinite(e)||e<=0||(this.timerId=setInterval(()=>{typeof document<"u"&&document.hidden||this.refresh()},e))}stopPolling(){this.timerId!==void 0&&(clearInterval(this.timerId),this.timerId=void 0)}},G.properties={baseUrl:{type:String,attribute:"base-url"},pollIntervalMs:{type:Number,attribute:"poll-interval-ms"},status:{state:!0},errorMessage:{state:!0},lastUpdated:{state:!0},loading:{state:!0}},G.styles=rt`
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
  `,G);typeof customElements<"u"&&!customElements.get("edn-network-status")&&customElements.define("edn-network-status",Xs);var ge=32,le=64,Be=8,ei=5e3,ti=new TextEncoder;function ve(t){return ti.encode(t).length}function Ht(t){return t.isAPMode?"ap":"station"}var Z,ri=(Z=class extends K{constructor(...e){super(...e),this.baseUrl="",this.settings=null,this.loading=!1,this.submitting=!1,this.errorMessage="",this.successMessage="",this.draftMode="station",this.draftWifiSSID="",this.draftWifiPassword="",this.draftWifiPasswordDirty=!1,this.draftApSSID="",this.draftApHasPassword=!1,this.draftApPassword="",this.draftApPasswordDirty=!1,this.fieldErrors={},this.scanning=!1,this.scanResults=[],this.scanError="",this.loadToken=0,this.settingsBaseUrl=null,this.handleWifiSSIDInput=r=>{this.draftWifiSSID=r.target.value},this.handleWifiPasswordInput=r=>{this.draftWifiPassword=r.target.value,this.draftWifiPasswordDirty=!0},this.handleApSSIDInput=r=>{this.draftApSSID=r.target.value},this.handleApPasswordInput=r=>{this.draftApPassword=r.target.value,this.draftApPasswordDirty=!0},this.handleApHasPasswordChange=r=>{this.draftApHasPassword=r.target.checked,this.draftApHasPassword||(this.draftApPassword="",this.draftApPasswordDirty=!1,this.fieldErrors={...this.fieldErrors,wifiAPPassword:void 0})},this.handlePickSsid=r=>{this.draftMode!=="station"&&(this.draftMode="station"),this.draftWifiSSID=r,this.fieldErrors={...this.fieldErrors,wifiSSID:void 0}},this.handleSubmit=r=>{r.preventDefault(),this.handleSave()},this.handleRetry=()=>{this.load()}}connectedCallback(){super.connectedCallback(),this.load()}disconnectedCallback(){super.disconnectedCallback(),this.scanController?.abort(),this.scanController=void 0}updated(e){let r=e.get("baseUrl");e.has("baseUrl")&&r!==void 0&&r!==this.baseUrl&&(this.client=void 0,this.scanResults=[],this.scanError="",this.load())}render(){let e=this.settings;return $`
      <div class="card">
        <h1>Network settings</h1>
        ${this.errorMessage?$`<div class="banner banner-error" role="alert">
              <span>${this.errorMessage}</span>
              <button type="button" @click=${this.handleRetry}>Retry</button>
            </div>`:P}
        ${this.successMessage?$`<div class="banner banner-success" role="status">${this.successMessage}</div>`:P}
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
          ${this.dirty?$`<span class="muted">Unsaved changes</span>`:P}
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
        ${e.hasWifiPassword?$`<p class="hint">Password saved •••• (leave blank to keep)</p>`:P}
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
              ${e.hasWifiAPPassword?$`<p class="hint">Password saved •••• (leave blank to keep)</p>`:P}
              ${this.renderPasswordClearWarning("wifiAPPassword")}
              ${this.renderFieldError("wifiAPPassword")}
            `:P}
      </section>
    `}renderScan(){return $`
      <section class="group">
        <div class="scan-head">
          <h2>Wi-Fi scan</h2>
          <button type="button" @click=${this.handleScan} ?disabled=${this.scanning}>
            ${this.scanning?"Scanning…":"Scan"}
          </button>
        </div>
        ${this.scanError?$`<div class="banner banner-error" role="alert">${this.scanError}</div>`:P}
        ${this.scanResults.length>0?$`<ul class="networks">
              ${this.scanResults.map(e=>this.renderNetwork(e))}
            </ul>`:P}
      </section>
    `}renderNetwork(e){return $`
      <li>
        <button type="button" class="network" @click=${()=>this.handlePickSsid(e.ssid)}>
          <span class="ssid">${e.ssid}</span>
          <span class="meta">
            ${e.encrypted?$`<span class="lock" title="Encrypted" aria-label="Encrypted">🔒</span>`:P}
            ${e.rssi} dBm · Ch ${e.channel}
          </span>
        </button>
      </li>
    `}renderFieldError(e){let r=this.fieldErrors[e];return r?$`<p class="field-error" role="alert">${r}</p>`:P}renderPasswordClearWarning(e){return(e==="wifiPassword"?this.draftWifiPasswordDirty&&this.draftWifiPassword===""&&this.settings?.hasWifiPassword===!0:this.draftApPasswordDirty&&this.draftApPassword===""&&this.draftApHasPassword&&this.settings?.hasWifiAPPassword===!0)?$`<p class="clear-warning" role="alert">
          Warning: saving now will remove the stored password.
        </p>`:P}get dirty(){let e=this.settings;return e?this.draftMode!==Ht(e)||this.draftWifiSSID!==e.wifiSSID||this.draftApSSID!==e.wifiAPSSID||this.draftApHasPassword!==e.wifiAPHasPassword||this.draftWifiPasswordDirty||this.draftApPasswordDirty:!1}ensureClient(){return(!this.client||this.clientBaseUrl!==this.baseUrl)&&(this.client=ir({baseUrl:this.baseUrl}),this.clientBaseUrl=this.baseUrl),this.client}async load(){let e=++this.loadToken;this.loading=!0;let r=await this.ensureClient().getSettings();if(e!==this.loadToken){this.settingsBaseUrl!==this.baseUrl&&(this.settings=null);return}if(this.loading=!1,r.ok){this.applyServerSettings(r.data),this.errorMessage="";return}this.settingsBaseUrl!==this.baseUrl&&(this.settings=null),this.errorMessage=r.message,this.emitError(r.message)}applyServerSettings(e){this.settings=e,this.settingsBaseUrl=this.baseUrl,this.draftMode=Ht(e),this.draftWifiSSID=e.wifiSSID,this.draftApSSID=e.wifiAPSSID,this.draftApHasPassword=e.wifiAPHasPassword,this.draftWifiPassword="",this.draftWifiPasswordDirty=!1,this.draftApPassword="",this.draftApPasswordDirty=!1,this.fieldErrors={}}validate(){let e=this.settings,r={};if(!e)return r;let i=this.draftMode==="ap";if(ve(this.draftWifiSSID)>ge&&(r.wifiSSID=`Wi-Fi name must be ${ge} characters or fewer.`),ve(this.draftApSSID)>ge&&(r.wifiAPSSID=`Access point name must be ${ge} characters or fewer.`),i?this.draftApSSID.length===0&&(r.wifiAPSSID="Access point name is required in AP mode."):this.draftWifiSSID.length===0&&(r.wifiSSID="Wi-Fi name is required in station mode."),this.draftWifiPasswordDirty&&ve(this.draftWifiPassword)>le&&(r.wifiPassword=`Wi-Fi password must be ${le} characters or fewer.`),this.draftApHasPassword)if(this.draftApPasswordDirty){let s=ve(this.draftApPassword);(s<Be||s>le)&&(r.wifiAPPassword=`Access point password must be ${Be}–${le} characters.`)}else e.hasWifiAPPassword||(r.wifiAPPassword=`Enter an access point password (${Be}–${le} characters).`);return r}buildPatch(){let e=this.settings,r={};if(!e)return r;let i=this.draftMode==="ap";return i!==e.isAPMode&&(r.isAPMode=i),this.draftWifiSSID!==e.wifiSSID&&(r.wifiSSID=this.draftWifiSSID),this.draftWifiPasswordDirty&&(r.wifiPassword=this.draftWifiPassword),this.draftApSSID!==e.wifiAPSSID&&(r.wifiAPSSID=this.draftApSSID),this.draftApHasPassword!==e.wifiAPHasPassword&&(r.wifiAPHasPassword=this.draftApHasPassword),this.draftApHasPassword&&this.draftApPasswordDirty&&(r.wifiAPPassword=this.draftApPassword),r}async handleSave(){if(this.submitting||!this.settings)return;let e=this.validate();if(this.fieldErrors=e,Object.keys(e).length>0)return;let r=this.buildPatch();if(Object.keys(r).length===0)return;this.submitting=!0,this.errorMessage="",this.successMessage="";let i=await this.ensureClient().saveSettings(r);if(this.submitting=!1,i.ok){this.applyServerSettings(i.data),this.successMessage="Settings saved.",this.dispatchEvent(new CustomEvent("edn-saved",{detail:i.data,bubbles:!0,composed:!0}));return}let s=i.status===void 0?"Could not confirm the save — the device may have applied the changes and reconnected. Check the status widget or retry.":i.message;this.errorMessage=s,this.emitError(s)}async handleScan(){if(this.scanning)return;this.scanning=!0,this.scanError="";let e=new AbortController;this.scanController=e;let r,i=new Promise(n=>{r=setTimeout(()=>{e.abort(),n({ok:!1,message:"Wi-Fi scan timed out after 5 seconds."})},ei)}),s=await Promise.race([this.ensureClient().wifiList(e.signal),i]);if(r!==void 0&&clearTimeout(r),this.scanController===e&&(this.scanController=void 0),this.scanning=!1,s.ok){this.scanResults=[...s.data.networks].sort((n,o)=>o.rssi-n.rssi);return}s.message!=="Request aborted."&&(this.scanError=s.message,this.emitError(s.message))}emitError(e){this.dispatchEvent(new CustomEvent("edn-error",{detail:{message:e},bubbles:!0,composed:!0}))}setMode(e){this.draftMode!==e&&(this.draftMode=e,this.fieldErrors={})}},Z.properties={baseUrl:{type:String,attribute:"base-url"},settings:{state:!0},loading:{state:!0},submitting:{state:!0},errorMessage:{state:!0},successMessage:{state:!0},draftMode:{state:!0},draftWifiSSID:{state:!0},draftWifiPassword:{state:!0},draftWifiPasswordDirty:{state:!0},draftApSSID:{state:!0},draftApHasPassword:{state:!0},draftApPassword:{state:!0},draftApPasswordDirty:{state:!0},fieldErrors:{state:!0},scanning:{state:!0},scanResults:{state:!0},scanError:{state:!0}},Z.styles=rt`
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
  `,Z);typeof customElements<"u"&&!customElements.get("edn-network-settings")&&customElements.define("edn-network-settings",ri);var si=[{id:"status",label:"Status"},{id:"settings",label:"Network settings"}],X,ii=(X=class extends K{constructor(...e){super(...e),this.baseUrl="",this.pollIntervalMs=1e4,this.activeTab="status"}render(){return $`
      <div class="tabs" role="tablist" aria-label="Network">
        ${si.map(e=>$`
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
    `}selectTab(e){this.activeTab!==e&&(this.activeTab=e,this.dispatchEvent(new CustomEvent("edn-tab-change",{detail:{tab:e},bubbles:!0,composed:!0})))}},X.properties={baseUrl:{type:String,attribute:"base-url"},pollIntervalMs:{type:Number,attribute:"poll-interval-ms"},activeTab:{state:!0}},X.styles=rt`
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
  `,X);typeof customElements<"u"&&!customElements.get("edn-network-page")&&customElements.define("edn-network-page",ii);const Nt=document.getElementById("app");Nt&&$r(a(xs,{}),Nt);
