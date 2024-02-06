var Q=Object.defineProperty;var X=(t,e,n)=>e in t?Q(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var h=(t,e,n)=>(X(t,typeof e!="symbol"?e+"":e,n),n);import{n as v,r as b,i as L,d as D,e as Y,f as B,g as Z,h as tt,j as et,k as nt,l as I,m as it,p as st,q as rt}from"./scheduler.X6C0vhOP.js";const z=typeof window<"u";let lt=z?()=>window.performance.now():()=>Date.now(),M=z?t=>requestAnimationFrame(t):v;const x=new Set;function G(t){x.forEach(e=>{e.c(t)||(x.delete(e),e.f())}),x.size!==0&&M(G)}function at(t){let e;return x.size===0&&M(G),{promise:new Promise(n=>{x.add(e={c:t,f:n})}),abort(){x.delete(e)}}}let S=!1;function ot(){S=!0}function ct(){S=!1}function ft(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function ut(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const a=[];for(let o=0;o<e.length;o++){const u=e[o];u.claim_order!==void 0&&a.push(u)}e=a}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let a=0;a<e.length;a++){const o=e[a].claim_order,u=(s>0&&e[n[s]].claim_order<=o?s+1:ft(1,s,d=>e[n[d]].claim_order,o))-1;i[a]=n[u]+1;const f=u+1;n[f]=a,s=Math.max(f,s)}const l=[],r=[];let c=e.length-1;for(let a=n[s]+1;a!=0;a=i[a-1]){for(l.push(e[a-1]);c>=a;c--)r.push(e[c]);c--}for(;c>=0;c--)r.push(e[c]);l.reverse(),r.sort((a,o)=>a.claim_order-o.claim_order);for(let a=0,o=0;a<r.length;a++){for(;o<l.length&&r[a].claim_order>=l[o].claim_order;)o++;const u=o<l.length?l[o]:null;t.insertBefore(r[a],u)}}function dt(t,e){t.appendChild(e)}function F(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function _t(t){const e=P("style");return e.textContent="/* empty */",ht(F(t),e),e.sheet}function ht(t,e){return dt(t.head||t,e),e.sheet}function mt(t,e){if(S){for(ut(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function pt(t,e,n){t.insertBefore(e,n||null)}function $t(t,e,n){S&&!n?mt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function E(t){t.parentNode&&t.parentNode.removeChild(t)}function Rt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function P(t){return document.createElement(t)}function J(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function R(t){return document.createTextNode(t)}function jt(){return R(" ")}function Bt(){return R("")}function It(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Ot(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function kt(t){return t.dataset.svelteH}function yt(t){return Array.from(t.childNodes)}function U(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function V(t,e,n,i,s=!1){U(t);const l=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const c=t[r];if(e(c)){const a=n(c);return a===void 0?t.splice(r,1):t[r]=a,s||(t.claim_info.last_index=r),c}}for(let r=t.claim_info.last_index-1;r>=0;r--){const c=t[r];if(e(c)){const a=n(c);return a===void 0?t.splice(r,1):t[r]=a,s?a===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,c}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function W(t,e,n,i){return V(t,s=>s.nodeName===e,s=>{const l=[];for(let r=0;r<s.attributes.length;r++){const c=s.attributes[r];n[c.name]||l.push(c.name)}l.forEach(r=>s.removeAttribute(r))},()=>i(e))}function qt(t,e,n){return W(t,e,n,P)}function zt(t,e,n){return W(t,e,n,J)}function gt(t,e){return V(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>R(e),!0)}function Gt(t){return gt(t," ")}function O(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return-1}function Ft(t,e){const n=O(t,"HTML_TAG_START",0),i=O(t,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new H(e);U(t);const s=t.splice(n,i-n+1);E(s[0]),E(s[s.length-1]);const l=s.slice(1,s.length-1);if(l.length===0)return new H(e);for(const r of l)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new H(e,l)}function Jt(t,e){e=""+e,t.data!==e&&(t.data=e)}function Ut(t,e){t.value=e??""}function Vt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function xt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function Wt(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const l=s.textContent.trim();l===`HEAD_${t}_END`?(i-=1,n.push(s)):l===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class wt{constructor(e=!1){h(this,"is_svg",!1);h(this,"e");h(this,"n");h(this,"t");h(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=J(n.nodeName):this.e=P(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)pt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(E)}}class H extends wt{constructor(n=!1,i){super(n);h(this,"l");this.e=this.n=null,this.l=i}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let i=0;i<this.n.length;i+=1)$t(this.t,this.n[i],n)}}function Kt(t,e){return new t(e)}const T=new Map;let A=0;function vt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Et(t,e){const n={stylesheet:_t(e),rules:{}};return T.set(t,n),n}function Nt(t,e,n,i,s,l,r,c=0){const a=16.666/i;let o=`{
`;for(let p=0;p<=1;p+=a){const g=e+(n-e)*l(p);o+=p*100+`%{${r(g,1-g)}}
`}const u=o+`100% {${r(n,1-n)}}
}`,f=`__svelte_${vt(u)}_${c}`,d=F(t),{stylesheet:_,rules:m}=T.get(d)||Et(d,t);m[f]||(m[f]=!0,_.insertRule(`@keyframes ${f} ${u}`,_.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${f} ${i}ms linear ${s}ms 1 both`,A+=1,f}function k(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),A-=s,A||Tt())}function Tt(){M(()=>{A||(T.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&E(e)}),T.clear())})}let w;function At(){return w||(w=Promise.resolve(),w.then(()=>{w=null})),w}function q(t,e,n){t.dispatchEvent(xt(`${e?"intro":"outro"}${n}`))}const N=new Set;let $;function Qt(){$={r:0,c:[],p:$}}function Xt(){$.r||b($.c),$=$.p}function bt(t,e){t&&t.i&&(N.delete(t),t.i(e))}function Yt(t,e,n,i){if(t&&t.o){if(N.has(t))return;N.add(t),$.c.push(()=>{N.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const St={duration:0};function Zt(t,e,n){const i={direction:"in"};let s=e(t,n,i),l=!1,r,c,a=0;function o(){r&&k(t,r)}function u(){const{delay:d=0,duration:_=300,easing:m=Y,tick:y=v,css:p}=s||St;p&&(r=Nt(t,0,1,_,d,m,p,a++)),y(0,1);const g=lt()+d,K=g+_;c&&c.abort(),l=!0,D(()=>q(t,!0,"start")),c=at(C=>{if(l){if(C>=K)return y(1,0),q(t,!0,"end"),o(),l=!1;if(C>=g){const j=m((C-g)/_);y(j,1-j)}}return l})}let f=!1;return{start(){f||(f=!0,k(t),L(s)?(s=s(i),At().then(u)):u())},invalidate(){f=!1},end(){l&&(o(),l=!1)}}}function te(t){t&&t.c()}function ee(t,e){t&&t.l(e)}function Ct(t,e,n){const{fragment:i,after_update:s}=t.$$;i&&i.m(e,n),D(()=>{const l=t.$$.on_mount.map(it).filter(L);t.$$.on_destroy?t.$$.on_destroy.push(...l):b(l),t.$$.on_mount=[]}),s.forEach(D)}function Ht(t,e){const n=t.$$;n.fragment!==null&&(et(n.after_update),b(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Dt(t,e){t.$$.dirty[0]===-1&&(st.push(t),rt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ne(t,e,n,i,s,l,r=null,c=[-1]){const a=nt;I(t);const o=t.$$={fragment:null,ctx:[],props:l,update:v,not_equal:s,bound:B(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:B(),dirty:c,skip_bound:!1,root:e.target||a.$$.root};r&&r(o.root);let u=!1;if(o.ctx=n?n(t,e.props||{},(f,d,..._)=>{const m=_.length?_[0]:d;return o.ctx&&s(o.ctx[f],o.ctx[f]=m)&&(!o.skip_bound&&o.bound[f]&&o.bound[f](m),u&&Dt(t,f)),d}):[],o.update(),u=!0,b(o.before_update),o.fragment=i?i(o.ctx):!1,e.target){if(e.hydrate){ot();const f=yt(e.target);o.fragment&&o.fragment.l(f),f.forEach(E)}else o.fragment&&o.fragment.c();e.intro&&bt(t.$$.fragment),Ct(t,e.target,e.anchor),ct(),Z()}I(a)}class ie{constructor(){h(this,"$$");h(this,"$$set")}$destroy(){Ht(this,1),this.$destroy=v}$on(e,n){if(!L(n))return v;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!tt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Lt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Lt);export{te as A,ee as B,Ct as C,Ht as D,lt as E,at as F,Zt as G,H,J as I,zt as J,ie as S,yt as a,gt as b,qt as c,E as d,P as e,Gt as f,$t as g,mt as h,ne as i,Jt as j,Wt as k,Ft as l,Ot as m,bt as n,kt as o,Rt as p,Vt as q,Ut as r,jt as s,R as t,It as u,Bt as v,Yt as w,Xt as x,Qt as y,Kt as z};
