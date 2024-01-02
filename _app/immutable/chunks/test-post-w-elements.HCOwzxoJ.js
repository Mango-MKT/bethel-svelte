import{n as S,s as U,r as X,c as Y}from"./scheduler.S4wXxuDW.js";import{S as F,i as J,g as w,s as E,m as I,h as x,j as C,y as j,c as H,n as N,f as g,k as v,l as z,a as T,A as y,D as R,o as V,H as Z,r as tt,E as et,u as st,v as nt,d as at,t as ot,w as lt}from"./index.1ziRMZKK.js";import{w as it}from"./index.vW5buh2y.js";/* empty css                                              */const K=typeof window<"u";let q=K?()=>window.performance.now():()=>Date.now(),Q=K?t=>requestAnimationFrame(t):S;const D=new Set;function W(t){D.forEach(e=>{e.c(t)||(D.delete(e),e.f())}),D.size!==0&&Q(W)}function rt(t){let e;return D.size===0&&Q(W),{promise:new Promise(s=>{D.add(e={c:t,f:s})}),abort(){D.delete(e)}}}function G(t){return Object.prototype.toString.call(t)==="[object Date]"}function O(t,e,s,c){if(typeof s=="number"||G(s)){const i=c-s,a=(s-e)/(t.dt||1/60),o=t.opts.stiffness*i,l=t.opts.damping*a,p=(o-l)*t.inv_mass,f=(a+p)*t.dt;return Math.abs(f)<t.opts.precision&&Math.abs(i)<t.opts.precision?c:(t.settled=!1,G(s)?new Date(s.getTime()+f):s+f)}else{if(Array.isArray(s))return s.map((i,a)=>O(t,e[a],s[a],c[a]));if(typeof s=="object"){const i={};for(const a in s)i[a]=O(t,e[a],s[a],c[a]);return i}else throw new Error(`Cannot spring ${typeof s} values`)}}function ct(t,e={}){const s=it(t),{stiffness:c=.15,damping:i=.8,precision:a=.01}=e;let o,l,p,f=t,_=t,r=1,k=0,n=!1;function u(M,b={}){_=M;const $=p={};return t==null||b.hard||h.stiffness>=1&&h.damping>=1?(n=!0,o=q(),f=M,s.set(t=_),Promise.resolve()):(b.soft&&(k=1/((b.soft===!0?.5:+b.soft)*60),r=0),l||(o=q(),n=!1,l=rt(m=>{if(n)return n=!1,l=null,!1;r=Math.min(r+k,1);const d={inv_mass:r,opts:h,settled:!0,dt:(m-o)*60/1e3},L=O(d,f,t,_);return o=m,f=t,s.set(t=L),d.settled&&(l=null),!d.settled})),new Promise(m=>{l.promise.then(()=>{$===p&&m()})}))}const h={set:u,update:(M,b)=>u(M(_,t),b),subscribe:s.subscribe,stiffness:c,damping:i,precision:a};return h}function pt(t){let e,s,c='<svg aria-hidden="true" viewBox="0 0 1 1" class="svelte-y96mxt"><path d="M0,0.5 L1,0.5" class="svelte-y96mxt"></path></svg>',i,a,o,l,p=Math.floor(t[1]+1)+"",f,_,r,k=Math.floor(t[1])+"",n,u,h,M='<svg aria-hidden="true" viewBox="0 0 1 1" class="svelte-y96mxt"><path d="M0,0.5 L1,0.5 M0.5,0 L0.5,1" class="svelte-y96mxt"></path></svg>',b,$;return{c(){e=w("div"),s=w("button"),s.innerHTML=c,i=E(),a=w("div"),o=w("div"),l=w("strong"),f=I(p),_=E(),r=w("strong"),n=I(k),u=E(),h=w("button"),h.innerHTML=M,this.h()},l(m){e=x(m,"DIV",{class:!0});var d=C(e);s=x(d,"BUTTON",{"aria-label":!0,class:!0,"data-svelte-h":!0}),j(s)!=="svelte-97ppyc"&&(s.innerHTML=c),i=H(d),a=x(d,"DIV",{class:!0});var L=C(a);o=x(L,"DIV",{class:!0,style:!0});var P=C(o);l=x(P,"STRONG",{class:!0,"aria-hidden":!0});var A=C(l);f=N(A,p),A.forEach(g),_=H(P),r=x(P,"STRONG",{class:!0});var B=C(r);n=N(B,k),B.forEach(g),P.forEach(g),L.forEach(g),u=H(d),h=x(d,"BUTTON",{"aria-label":!0,class:!0,"data-svelte-h":!0}),j(h)!=="svelte-irev0c"&&(h.innerHTML=M),d.forEach(g),this.h()},h(){v(s,"aria-label","Decrease the counter by one"),v(s,"class","svelte-y96mxt"),v(l,"class","hidden svelte-y96mxt"),v(l,"aria-hidden","true"),v(r,"class","svelte-y96mxt"),v(o,"class","counter-digits svelte-y96mxt"),z(o,"transform","translate(0, "+100*t[2]+"%)"),v(a,"class","counter-viewport svelte-y96mxt"),v(h,"aria-label","Increase the counter by one"),v(h,"class","svelte-y96mxt"),v(e,"class","counter svelte-y96mxt")},m(m,d){T(m,e,d),y(e,s),y(e,i),y(e,a),y(a,o),y(o,l),y(l,f),y(o,_),y(o,r),y(r,n),y(e,u),y(e,h),b||($=[R(s,"click",t[4]),R(h,"click",t[5])],b=!0)},p(m,[d]){d&2&&p!==(p=Math.floor(m[1]+1)+"")&&V(f,p),d&2&&k!==(k=Math.floor(m[1])+"")&&V(n,k),d&4&&z(o,"transform","translate(0, "+100*m[2]+"%)")},i:S,o:S,d(m){m&&g(e),b=!1,X($)}}}function ut(t,e){return(t%e+e)%e}function ft(t,e,s){let c,i,a=0;const o=ct();Y(t,o,f=>s(1,i=f));const l=()=>s(0,a-=1),p=()=>s(0,a+=1);return t.$$.update=()=>{t.$$.dirty&1&&o.set(a),t.$$.dirty&2&&s(2,c=ut(i,1))},[a,i,c,o,l,p]}class dt extends F{constructor(e){super(),J(this,e,ft,pt,U,{})}}function mt(t){let e,s="Markdown",c,i,a="Hey friends! 👋",o,l,p,f=`<code class="language-ts"><span class="token keyword">function</span> <span class="token function">greet</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hey </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>name<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">! 👋</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span></code>`,_,r,k;return r=new dt({}),{c(){e=w("h2"),e.textContent=s,c=E(),i=w("p"),i.textContent=a,o=E(),l=w("pre"),p=new Z(!1),_=E(),tt(r.$$.fragment),this.h()},l(n){e=x(n,"H2",{"data-svelte-h":!0}),j(e)!=="svelte-10nzexj"&&(e.textContent=s),c=H(n),i=x(n,"P",{"data-svelte-h":!0}),j(i)!=="svelte-atyp5e"&&(i.textContent=a),o=H(n),l=x(n,"PRE",{class:!0});var u=C(l);p=et(u,!1),u.forEach(g),_=H(n),st(r.$$.fragment,n),this.h()},h(){p.a=null,v(l,"class","language-ts")},m(n,u){T(n,e,u),T(n,c,u),T(n,i,u),T(n,o,u),T(n,l,u),p.m(f,l),T(n,_,u),nt(r,n,u),k=!0},p:S,i(n){k||(at(r.$$.fragment,n),k=!0)},o(n){ot(r.$$.fragment,n),k=!1},d(n){n&&(g(e),g(c),g(i),g(o),g(l),g(_)),lt(r,n)}}}const yt={title:"Test Post /w Elements",description:"Test post to show markdown, code block, components etc",date:"2023-4-14",categories:["sveltekit","svelte"],published:!0};class vt extends F{constructor(e){super(),J(this,e,null,mt,U,{})}}export{vt as default,yt as metadata};
