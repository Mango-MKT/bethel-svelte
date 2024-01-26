import{_ as be}from"../chunks/preload-helper.0HuHagjb.js";import{s as xe,n as Xt,r as ke,o as Oe}from"../chunks/scheduler.S4wXxuDW.js";import{S as Ce,i as We,g as v,s as C,H as Ht,m as ue,z as Te,h as m,f as x,c as W,j as T,x as H,B as Lt,n as fe,k as g,y as n,a as Tt,C as ht,o as pe}from"../chunks/index.pvnYnK1l.js";import{e as ve,u as ye,d as De}from"../chunks/each.kAFmOAx5.js";import{g as Ne,h as me}from"../chunks/he.7-07Z6OX.js";const Ee=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global,Ae=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));var Me=function(w){var a={};function r(i){if(a[i])return a[i].exports;var d=a[i]={i,l:!1,exports:{}};return w[i].call(d.exports,d,d.exports,r),d.l=!0,d.exports}return r.m=w,r.c=a,r.d=function(i,d,I){r.o(i,d)||Object.defineProperty(i,d,{configurable:!1,enumerable:!0,get:I})},r.r=function(i){Object.defineProperty(i,"__esModule",{value:!0})},r.n=function(i){var d=i&&i.__esModule?function(){return i.default}:function(){return i};return r.d(d,"a",d),d},r.o=function(i,d){return Object.prototype.hasOwnProperty.call(i,d)},r.p="/dist/",r(r.s=1)}([function(w,a,r){r.r(a);var i={equal:0,delete:1,insert:2,none:3,replace:4};class d{constructor(e,t,s){this.startInOld=e,this.startInNew=t,this.size=s}get endInOld(){return this.startInOld+this.size}get endInNew(){return this.startInNew+this.size}}class I{constructor(){this.blockSize=0,this.repeatingWordsAccuracy=0,this.ignoreWhitespaceDifferences=!1}}const p=/^\s*<\/?[^>]+>\s*$/,O=/<[^\s>]+/,k=/^(\s|&nbsp;)+$/,et=/[\w\#@]+/,y=["<img"];function V(c){return!y.some(e=>c!==null&&c.startsWith(e))&&p.test(c)}function Q(c,e,t){return["<",e,' class="',t,'">',c,"</",e,">"].join("")}function $(c){return c==="<"}function K(c){return c==="&"}function A(c){return c===";"}function D(c){return k.test(c)}function ut(c){return V(c)?function(e){return e=O.exec(e)[0]+(e.endsWith("/>")?"/>":">")}(c):c}function X(c){return et.test(c)}function U(c,e,t){return c.push(e),c.length>t&&c.shift(),c.length!==t?null:c.join("")}class bt{constructor(e,t,s,h,u,o,l){this.oldWords=e,this.newWords=t,this.startInOld=s,this.endInOld=h,this.startInNew=u,this.endInNew=o,this.options=l}indexNewWords(){this.wordIndices=new Map;let e=[];for(let t=this.startInNew;t<this.endInNew;t++){let s=U(e,this.normalizeForIndex(this.newWords[t]),this.options.blockSize);s!==null&&(this.wordIndices.has(s)?this.wordIndices.get(s).push(t):this.wordIndices.set(s,[t]))}}normalizeForIndex(e){return e=ut(e),this.options.IgnoreWhiteSpaceDifferences&&D(e)?" ":e}findMatch(){if(this.indexNewWords(),this.removeRepeatingWords(),this.wordIndices.length===0)return null;let e=this.startInOld,t=this.startInNew,s=0,h=new Map;const u=this.options.blockSize;let o=[];for(let l=this.startInOld;l<this.endInOld;l++){let M=U(o,this.normalizeForIndex(this.oldWords[l]),u);if(M===null)continue;let S=new Map;if(this.wordIndices.has(M)){for(let b of this.wordIndices.get(M)){let j=(h.has(b-1)?h.get(b-1):0)+1;S.set(b,j),j>s&&(e=l-j-u+2,t=b-j-u+2,s=j)}h=S}else h=S}return s!==0?new d(e,t,s+u-1):null}removeRepeatingWords(){let e=this.newWords.length+this.options.repeatingWordsAccuracy,t=Array.from(this.wordIndices.entries()).filter(s=>s[1].length>e).map(s=>s[0]);for(let s of t)this.wordIndices.delete(s)}}class _{constructor(e,t,s,h,u){this.action=e,this.startInOld=t,this.endInOld=s,this.startInNew=h,this.endInNew=u}}var f={character:0,tag:1,whitespace:2,entity:3};function R(c,e){let t={mode:f.character,currentWord:[],words:[]},s=function(M,S){let b=new Map;if(S===null)return b;for(let j of S){let F;for(;(F=j.exec(M))!==null;){if(b.has(F.index))throw new Error("One or more block expressions result in a text sequence that overlaps. Current expression: "+j.toString());b.set(F.index,F.index+F[0].length)}}return b}(c,e),h=!!s.size,u=!1,o=-1;for(let M=0;M<c.length;M++){var l=c[M];if(h&&(o===index&&(o=-1,u=!1),s.has(index)&&(u=!0,o=s.get(index)),u)){t.currentWord.push(l),t.mode=f.character;continue}switch(t.mode){case f.character:$(l)?N(t,"<",f.tag):K(l)?N(t,l,f.entity):D(l)?N(t,l,f.whitespace):X(l)&&(t.currentWord.length===0||X(t.currentWord[t.currentWord.length-1]))?t.currentWord.push(l):N(t,l,f.character);break;case f.tag:l===">"?(t.currentWord.push(l),t.words.push(t.currentWord.join("")),t.currentWord=[],t.mode=D(l)?f.whitespace:f.character):t.currentWord.push(l);break;case f.whitespace:$(l)?N(t,l,f.tag):K(l)?N(t,l,f.entity):D(l)?t.currentWord.push(l):N(t,l,f.character);break;case f.entity:if($(l))N(t,l,f.tag);else if(D(l))N(t,l,f.whitespace);else if(A(l)){let S=!0;if(t.currentWord.length!==0&&(t.currentWord.push(l),t.words.push(t.currentWord.join("")),t.words.length>2&&D(t.words[t.words.length-2])&&D(t.words[t.words.length-1]))){let b=t.words[t.words.length-2],j=t.words[t.words.length-1];t.words.splice(t.words.length-2,2),t.currentWord=[(b+j).split()],t.mode=f.whitespace,S=!1}S&&(t.currentWord=[],t.mode=f.character)}else X(l)?t.currentWord.push(l):N(t,l,f.character)}}return t.currentWord.length!==0&&t.words.push(t.currentWord.join("")),t.words}function N(c,e,t){c.currentWord.length!==0&&c.words.push(c.currentWord.join("")),c.currentWord=[e],c.mode=t}const E=4,L=new Map([["</strong>",0],["</em>",0],["</b>",0],["</i>",0],["</big>",0],["</small>",0],["</u>",0],["</sub>",0],["</strike>",0],["</s>",0]]),xt=/<((strong)|(b)|(i)|(em)|(big)|(small)|(u)|(sub)|(sup)|(strike)|(s))[\>\s]+/gi;class st{constructor(e,t){this.content=[],this.newText=t,this.oldText=e,this.specialTagDiffStack=[],this.newWords=[],this.oldWords=[],this.matchGranularity=0,this.blockExpressions=[],this.repeatingWordsAccuracy=1,this.ignoreWhiteSpaceDifferences=!1,this.orphanMatchThreshold=0}build(){if(this.oldText===this.newText)return this.newText;this.splitInputsIntoWords(),this.matchGranularity=Math.min(E,this.oldWords.length,this.newWords.length);let e=this.operations();for(let t of e)this.performOperation(t);return this.content.join("")}addBlockExpression(e){this.blockExpressions.push(e)}splitInputsIntoWords(){this.oldWords=R(this.oldText,this.blockExpressions),this.oldText=null,this.newWords=R(this.newText,this.blockExpressions),this.newText=null}performOperation(e){switch(e.action){case i.equal:this.processEqualOperation(e);break;case i.delete:this.processDeleteOperation(e,"diffdel");break;case i.insert:this.processInsertOperation(e,"diffins");break;case i.none:break;case i.replace:this.processReplaceOperation(e)}}processReplaceOperation(e){this.processDeleteOperation(e,"diffmod"),this.processInsertOperation(e,"diffmod")}processInsertOperation(e,t){let s=this.newWords.filter((h,u)=>u>=e.startInNew&&u<e.endInNew);this.insertTag("ins",t,s)}processDeleteOperation(e,t){let s=this.oldWords.filter((h,u)=>u>=e.startInOld&&u<e.endInOld);this.insertTag("del",t,s)}processEqualOperation(e){let t=this.newWords.filter((s,h)=>h>=e.startInNew&&h<e.endInNew);this.content.push(t.join(""))}insertTag(e,t,s){for(;s.length;){let h=this.extractConsecutiveWords(s,l=>!V(l)),u="",o=!1;if(h.length!==0){let l=Q(h.join(""),e,t);this.content.push(l)}else{if(xt.test(s[0])){if(this.specialTagDiffStack.push(s[0]),u='<ins class="mod">',e==="del")for(s.shift();s.length>0&&xt.test(s[0]);)s.shift()}else if(L.has(s[0])){let l=this.specialTagDiffStack.length===0?null:this.specialTagDiffStack.pop();if(l!==null&&l===s[0].replace(/\//g,"")&&(u="</ins>",o=!0),e==="del")for(s.shift();s.length>0&&L.has(s[0]);)s.shift()}if(s.length===0&&u.length===0)break;o?this.content.push(u+this.extractConsecutiveWords(s,V).join("")):this.content.push(this.extractConsecutiveWords(s,V).join("")+u)}}}extractConsecutiveWords(e,t){let s=null;for(let h=0;h<e.length;h++){let u=e[h];if(h===0&&u===" "&&(e[h]="&nbsp;"),!t(u)){s=h;break}}if(s!==null){let h=e.filter((u,o)=>o>=0&&o<s);return s>0&&e.splice(0,s),h}{let h=e.filter((u,o)=>o>=0&&o<e.length);return e.splice(0,e.length),h}}operations(){let e=0,t=0,s=[],h=this.matchingBlocks();h.push(new d(this.oldWords.length,this.newWords.length,0));let u=this.removeOrphans(h);for(let o of u){let l,M=e===o.startInOld,S=t===o.startInNew;(l=M||S?M&&!S?i.insert:M?i.none:i.delete:i.replace)!==i.none&&s.push(new _(l,e,o.startInOld,t,o.startInNew)),o.length!==0&&s.push(new _(i.equal,o.startInOld,o.endInOld,o.startInNew,o.endInNew)),e=o.endInOld,t=o.endInNew}return s}*removeOrphans(e){let t=null,s=null;for(let h of e){if(s===null){t=new d(0,0,0),s=h;continue}if(t.endInOld===s.startInOld&&t.endInNew===s.startInNew||s.endInOld===h.startInOld&&s.endInNew===h.startInNew){yield s,t=s,s=h;continue}let u=(M,S)=>M+S.length,o=this.oldWords.slice(t.endInOld,h.startInOld).reduce(u,0),l=this.newWords.slice(t.endInNew,h.startInNew).reduce(u,0);this.newWords.slice(s.startInNew,s.endInNew).reduce(u,0)>Math.max(o,l)*this.orphanMatchThreshold&&(yield s),t=s,s=h}yield s}matchingBlocks(){let e=[];return this.findMatchingBlocks(0,this.oldWords.length,0,this.newWords.length,e),e}findMatchingBlocks(e,t,s,h,u){let o=this.findMatch(e,t,s,h);o!==null&&(e<o.startInOld&&s<o.startInNew&&this.findMatchingBlocks(e,o.startInOld,s,o.startInNew,u),u.push(o),o.endInOld<t&&o.endInNew<h&&this.findMatchingBlocks(o.endInOld,t,o.endInNew,h,u))}findMatch(e,t,s,h){for(let u=this.matchGranularity;u>0;u--){let o=new I;o.blockSize=u,o.repeatingWordsAccuracy=this.repeatingWordsAccuracy,o.ignoreWhitespaceDifferences=this.ignoreWhiteSpaceDifferences;let l=new bt(this.oldWords,this.newWords,e,t,s,h,o).findMatch();if(l!==null)return l}return null}}st.execute=function(c,e){return new st(c,e).build()},a.default=st},function(w,a,r){w.exports=r(0)}]);const Se=Ne(Me),{document:Vt}=Ee;function ge(w,a,r){const i=w.slice();return i[18]=a[r],i}function we(w){let a,r="Save",i,d;return{c(){a=v("button"),a.textContent=r,this.h()},l(I){a=m(I,"BUTTON",{id:!0,class:!0,"data-svelte-h":!0}),H(a)!=="svelte-6ek94f"&&(a.textContent=r),this.h()},h(){g(a,"id","submit"),g(a,"class","save-btn")},m(I,p){Tt(I,a,p),i||(d=ht(a,"click",w[6]),i=!0)},p:Xt,d(I){I&&x(a),i=!1,d()}}}function Ie(w){let a,r=[],i=new Map,d=ve(w[3]);const I=p=>p[18].date;for(let p=0;p<d.length;p+=1){let O=ge(w,d,p),k=I(O);i.set(k,r[p]=_e(k,O))}return{c(){a=v("ul");for(let p=0;p<r.length;p+=1)r[p].c();this.h()},l(p){a=m(p,"UL",{class:!0});var O=T(a);for(let k=0;k<r.length;k+=1)r[k].l(O);O.forEach(x),this.h()},h(){g(a,"class","history-list")},m(p,O){Tt(p,a,O);for(let k=0;k<r.length;k+=1)r[k]&&r[k].m(a,null)},p(p,O){O&136&&(d=ve(p[3]),r=ye(r,O,I,1,p,d,i,a,De,_e,null,ge))},d(p){p&&x(a);for(let O=0;O<r.length;O+=1)r[O].d()}}}function _e(w,a){let r,i,d=`<span>${a[18].user}: ${a[7](a[18].date)} (${a[18].time})</span><br/><div class="h-content">${a[18].content}</div>`;return{key:w,first:null,c(){r=v("li"),i=new Ht(!1),this.h()},l(I){r=m(I,"LI",{});var p=T(r);i=Lt(p,!1),p.forEach(x),this.h()},h(){i.a=null,this.first=r},m(I,p){Tt(I,r,p),i.m(d,r)},p(I,p){a=I,p&8&&d!==(d=`<span>${a[18].user}: ${a[7](a[18].date)} (${a[18].time})</span><br/><div class="h-content">${a[18].content}</div>`)&&i.p(d)},d(I){I&&x(r)}}}function ze(w){let a,r,i,d,I,p="Quill - Text Editor",O,k,et='Website: <a href="https://quilljs.com/" target="_blank">QuillJS.com</a>',y,V,Q,$='<svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none"><circle opacity="0.5" cx="12" cy="9" r="3" stroke="#1C274C" stroke-width="1.5"></circle><circle cx="12" cy="12" r="10" stroke="#1C274C" stroke-width="1.5"></circle><path opacity="0.5" d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path></svg>',K,A,D,ut="Grant, Curtis",X,U,bt="Ortinez, Hernan",_,f,R="Tan, Jim",N,E,L,xt="-",st,c,e="+",t,s,h='<svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 21 21"><g fill="none" fill-rule="evenodd" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" transform="matrix(0 1 1 0 2.5 2.5)"><path d="m3.98652376 1.07807068c-2.38377179 1.38514556-3.98652376 3.96636605-3.98652376 6.92192932 0 4.418278 3.581722 8 8 8s8-3.581722 8-8-3.581722-8-8-8"></path><path d="m4 1v4h-4" transform="matrix(1 0 0 -1 0 6)"></path></g></svg>',u,o,l='<div class="editor"><div id="editor" class="svelte-8sxbeb"></div></div>',M,S,b,j,F,Yt="Live Data",Bt,ft,kt,qt,nt,rt,Zt="Changes Data",At,pt,Ot,Pt,it,ot,te="Saved Data",Ut,vt,Ct,Rt,Y,lt,ee="Show HTML",Ft,mt,Wt,yt,Gt,Z,at,se="Show Text Only (DOMParser runs on save)",Jt,gt,Dt,Qt,tt,dt,ne="Version History",$t,ct,Kt,re,B=w[1]&&we(w),q=w[3].length>0&&Ie(w);return{c(){a=v("meta"),r=v("link"),i=C(),d=v("main"),I=v("h1"),I.textContent=p,O=C(),k=v("p"),k.innerHTML=et,y=C(),V=v("div"),Q=v("div"),Q.innerHTML=$,K=C(),A=v("div"),D=v("button"),D.textContent=ut,X=C(),U=v("button"),U.textContent=bt,_=C(),f=v("button"),f.textContent=R,N=C(),E=v("div"),L=v("button"),L.textContent=xt,st=C(),c=v("button"),c.textContent=e,t=C(),s=v("button"),s.innerHTML=h,u=C(),o=v("div"),o.innerHTML=l,M=C(),B&&B.c(),S=C(),b=v("div"),j=v("div"),F=v("div"),F.textContent=Yt,Bt=C(),ft=v("div"),kt=new Ht(!1),qt=C(),nt=v("div"),rt=v("div"),rt.textContent=Zt,At=C(),pt=v("div"),Ot=new Ht(!1),Pt=C(),it=v("div"),ot=v("div"),ot.textContent=te,Ut=C(),vt=v("div"),Ct=new Ht(!1),Rt=C(),Y=v("div"),lt=v("div"),lt.textContent=ee,Ft=C(),mt=v("div"),Wt=v("pre"),yt=ue(w[1]),Gt=C(),Z=v("div"),at=v("div"),at.textContent=se,Jt=C(),gt=v("div"),Dt=ue(w[4]),Qt=C(),tt=v("div"),dt=v("div"),dt.textContent=ne,$t=C(),ct=v("div"),q&&q.c(),this.h()},l(z){const P=Te("svelte-vr7v2q",Vt.head);a=m(P,"META",{name:!0,content:!0}),r=m(P,"LINK",{href:!0,rel:!0}),P.forEach(x),i=W(z),d=m(z,"MAIN",{});var G=T(d);I=m(G,"H1",{class:!0,"data-svelte-h":!0}),H(I)!=="svelte-1cjacis"&&(I.textContent=p),O=W(G),k=m(G,"P",{class:!0,"data-svelte-h":!0}),H(k)!=="svelte-si434t"&&(k.innerHTML=et),y=W(G),V=m(G,"DIV",{class:!0});var wt=T(V);Q=m(wt,"DIV",{class:!0,"data-svelte-h":!0}),H(Q)!=="svelte-vfbusy"&&(Q.innerHTML=$),K=W(wt),A=m(wt,"DIV",{class:!0});var It=T(A);D=m(It,"BUTTON",{class:!0,"data-user":!0,"data-svelte-h":!0}),H(D)!=="svelte-tophf5"&&(D.textContent=ut),X=W(It),U=m(It,"BUTTON",{class:!0,"data-user":!0,"data-svelte-h":!0}),H(U)!=="svelte-mefizx"&&(U.textContent=bt),_=W(It),f=m(It,"BUTTON",{class:!0,"data-user":!0,"data-svelte-h":!0}),H(f)!=="svelte-1iu3jp1"&&(f.textContent=R),It.forEach(x),N=W(wt),E=m(wt,"DIV",{class:!0});var _t=T(E);L=m(_t,"BUTTON",{class:!0,"data-svelte-h":!0}),H(L)!=="svelte-1c2ih52"&&(L.textContent=xt),st=W(_t),c=m(_t,"BUTTON",{class:!0,"data-svelte-h":!0}),H(c)!=="svelte-1iq7h4e"&&(c.textContent=e),t=W(_t),s=m(_t,"BUTTON",{class:!0,"data-svelte-h":!0}),H(s)!=="svelte-rkvhn1"&&(s.innerHTML=h),_t.forEach(x),wt.forEach(x),u=W(G),o=m(G,"DIV",{class:!0,"data-svelte-h":!0}),H(o)!=="svelte-18sx1mg"&&(o.innerHTML=l),M=W(G),B&&B.l(G),S=W(G),b=m(G,"DIV",{class:!0});var J=T(b);j=m(J,"DIV",{});var Nt=T(j);F=m(Nt,"DIV",{class:!0,"data-svelte-h":!0}),H(F)!=="svelte-gtt1yf"&&(F.textContent=Yt),Bt=W(Nt),ft=m(Nt,"DIV",{class:!0});var ie=T(ft);kt=Lt(ie,!1),ie.forEach(x),Nt.forEach(x),qt=W(J),nt=m(J,"DIV",{});var Et=T(nt);rt=m(Et,"DIV",{class:!0,"data-svelte-h":!0}),H(rt)!=="svelte-10cachs"&&(rt.textContent=Zt),At=W(Et),pt=m(Et,"DIV",{class:!0});var oe=T(pt);Ot=Lt(oe,!1),oe.forEach(x),Et.forEach(x),Pt=W(J),it=m(J,"DIV",{});var Mt=T(it);ot=m(Mt,"DIV",{class:!0,"data-svelte-h":!0}),H(ot)!=="svelte-11op6d6"&&(ot.textContent=te),Ut=W(Mt),vt=m(Mt,"DIV",{class:!0});var le=T(vt);Ct=Lt(le,!1),le.forEach(x),Mt.forEach(x),Rt=W(J),Y=m(J,"DIV",{class:!0});var St=T(Y);lt=m(St,"DIV",{class:!0,"data-svelte-h":!0}),H(lt)!=="svelte-1edya4b"&&(lt.textContent=ee),Ft=W(St),mt=m(St,"DIV",{class:!0});var ae=T(mt);Wt=m(ae,"PRE",{});var de=T(Wt);yt=fe(de,w[1]),de.forEach(x),ae.forEach(x),St.forEach(x),Gt=W(J),Z=m(J,"DIV",{class:!0});var zt=T(Z);at=m(zt,"DIV",{class:!0,"data-svelte-h":!0}),H(at)!=="svelte-kdojxz"&&(at.textContent=se),Jt=W(zt),gt=m(zt,"DIV",{class:!0});var ce=T(gt);Dt=fe(ce,w[4]),ce.forEach(x),zt.forEach(x),Qt=W(J),tt=m(J,"DIV",{class:!0});var jt=T(tt);dt=m(jt,"DIV",{class:!0,"data-svelte-h":!0}),H(dt)!=="svelte-85vor5"&&(dt.textContent=ne),$t=W(jt),ct=m(jt,"DIV",{class:!0});var he=T(ct);q&&q.l(he),he.forEach(x),jt.forEach(x),J.forEach(x),G.forEach(x),this.h()},h(){Vt.title="Quill",g(a,"name","description"),g(a,"content","Quill"),g(r,"href","https://cdn.quilljs.com/1.3.6/quill.snow.css"),g(r,"rel","stylesheet"),g(I,"class","text-center"),g(k,"class","text-center"),g(Q,"class","user-icon"),g(D,"class","user-btn active"),g(D,"data-user","Grant, Curtis"),g(U,"class","user-btn"),g(U,"data-user","Ortinez, Hernan"),g(f,"class","user-btn"),g(f,"data-user","Tan, Jim"),g(A,"class","user-choices"),g(L,"class","zoom zoom-out"),g(c,"class","zoom zoom-in"),g(s,"class","zoom reset"),g(E,"class","user-text"),g(V,"class","user-wrap"),g(o,"class","editor-wrap"),g(F,"class","subtitle"),kt.a=null,g(ft,"class","results"),g(rt,"class","subtitle"),Ot.a=null,g(pt,"class","results"),g(ot,"class","subtitle"),Ct.a=null,g(vt,"class","results"),g(lt,"class","subtitle"),g(mt,"class","results"),g(Y,"class","renders"),g(at,"class","subtitle"),g(gt,"class","results"),g(Z,"class","renders"),g(dt,"class","subtitle"),g(ct,"class","results"),g(tt,"class","history"),g(b,"class","compare")},m(z,P){n(Vt.head,a),n(Vt.head,r),Tt(z,i,P),Tt(z,d,P),n(d,I),n(d,O),n(d,k),n(d,y),n(d,V),n(V,Q),n(V,K),n(V,A),n(A,D),n(A,X),n(A,U),n(A,_),n(A,f),n(V,N),n(V,E),n(E,L),n(E,st),n(E,c),n(E,t),n(E,s),n(d,u),n(d,o),n(d,M),B&&B.m(d,null),n(d,S),n(d,b),n(b,j),n(j,F),n(j,Bt),n(j,ft),kt.m(w[1],ft),n(b,qt),n(b,nt),n(nt,rt),n(nt,At),n(nt,pt),Ot.m(w[2],pt),n(b,Pt),n(b,it),n(it,ot),n(it,Ut),n(it,vt),Ct.m(w[0],vt),n(b,Rt),n(b,Y),n(Y,lt),n(Y,Ft),n(Y,mt),n(mt,Wt),n(Wt,yt),n(b,Gt),n(b,Z),n(Z,at),n(Z,Jt),n(Z,gt),n(gt,Dt),n(b,Qt),n(b,tt),n(tt,dt),n(tt,$t),n(tt,ct),q&&q.m(ct,null),Kt||(re=[ht(D,"click",w[5]),ht(U,"click",w[5]),ht(f,"click",w[5]),ht(L,"click",w[8]),ht(c,"click",w[9]),ht(s,"click",w[10])],Kt=!0)},p(z,[P]){z[1]?B?B.p(z,P):(B=we(z),B.c(),B.m(d,S)):B&&(B.d(1),B=null),P&2&&kt.p(z[1]),P&4&&Ot.p(z[2]),P&1&&Ct.p(z[0]),P&2&&pe(yt,z[1]),P&16&&pe(Dt,z[4]),z[3].length>0?q?q.p(z,P):(q=Ie(z),q.c(),q.m(ct,null)):q&&(q.d(1),q=null)},i:Xt,o:Xt,d(z){z&&(x(i),x(d)),x(a),x(r),B&&B.d(),q&&q.d(),Kt=!1,ke(re)}}}function je(w,a,r){let i,d="Grant, Curtis",I="",p="",O="",k=[],et="",y=100;Oe(async()=>{if($(),typeof window<"u"){const _=(await be(()=>import("../chunks/quill.v8tqF9Ai.js").then(R=>R.q),__vite__mapDeps([0,1]),import.meta.url)).default,f=localStorage.getItem("editorContent");requestAnimationFrame(()=>{i=new _("#editor",{theme:"snow",modules:{history:{delay:2e3,maxStack:500,userOnly:!0},toolbar:[[{header:[1,2,3,4,5,6,!1]}],["bold","italic","underline","strike","link"],[{list:"ordered"},{list:"bullet"}],[{indent:"-1"},{indent:"+1"}],[{script:"sub"},{script:"super"}],[{direction:"rtl"}],[{background:[]}],[{align:[]}],["clean"]]}}),f&&(r(0,I=f),i.root.innerHTML=I),i.on("text-change",function(R,N,E){E=="api"||E=="user"&&Q()})})}});function V(_,f){r(2,O=Se.execute(me.decode(_),me.decode(f)))}function Q(){i&&(r(1,p=i.root.innerHTML),V(I,p))}function $(){const _=localStorage.getItem("editorHistory");r(3,k=_?JSON.parse(_):[])}function K(_){d=_.currentTarget.dataset.user,document.querySelectorAll(".user-btn").forEach(f=>{f.classList.remove("active")}),_.currentTarget.classList.add("active")}const A=()=>{const _=new Date,f=_.toISOString(),R=_.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"}),N={date:f,time:R,user:d,content:p};k.unshift(N),r(3,k),i?(localStorage.setItem("editorContent",p),r(0,I=p)):console.warn("Editor is not initialized yet."),localStorage.setItem("editorHistory",JSON.stringify(k)),r(4,et=ut(p))},D=_=>new Date(_).toLocaleDateString(),ut=_=>{let f=new DOMParser().parseFromString(_,"text/html");const R=N=>{let E="";for(let L of N.childNodes)L.nodeType===Node.TEXT_NODE?E+=L.textContent+" ":L.nodeType===Node.ELEMENT_NODE&&(E+=R(L));return E};return R(f.body).trim()};return[I,p,O,k,et,K,A,D,()=>{y-=10,y<100&&(y=100);const _=document.getElementById("editor");_&&(_.style.fontSize=`${y}%`),console.log(y)},()=>{y+=10,y>400&&(y=400);const _=document.getElementById("editor");_&&(_.style.fontSize=`${y}%`),console.log(y)},()=>{y=100;const _=document.getElementById("editor");_&&(_.style.fontSize=`${y}%`),console.log(y)}]}class Pe extends Ce{constructor(a){super(),We(this,a,je,ze,xe,{})}}export{Pe as component,Ae as universal};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../chunks/quill.v8tqF9Ai.js","../chunks/he.7-07Z6OX.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}