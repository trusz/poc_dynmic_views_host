import{_ as _e}from"../chunks/preload-helper.3685c970.js";import{s as fe,a as P,f as p,l as m,c as L,g as c,h as D,R as F,m as u,d as y,j as pe,i as me,x as e,n as N,L as ce,p as ge}from"../chunks/scheduler.37626528.js";import{S as de,i as he,b as ve,d as ye,m as Ee,a as Ce,t as we,e as Ae}from"../chunks/index.3e0a838e.js";import{p as be}from"../chunks/stores.9585d013.js";import{b as ue,a as Pe}from"../chunks/paths.45505698.js";import{p as Le}from"../chunks/plugin_.b1c245f2.js";function De(){Re()||Se()}function Re(){const t=window.localStorage.getItem("employees")??"";if(!t)return!1;const o=JSON.parse(t);return!(!Array.isArray(o)||o.length===0)}function Se(){const o=JSON.stringify([{name:"Leanne Graham",isAdmin:!1},{name:"Ervin Howell",isAdmin:!1},{name:"Clementine Bauch",isAdmin:!1},{name:"Patricia Lebsack",isAdmin:!1},{name:"Chelsey Dietrich",isAdmin:!1},{name:"Mrs. Dennis Schulist",isAdmin:!1}]);window.localStorage.setItem("employees",o)}function He(t){return De(),[]}class qe extends de{constructor(o){super(),he(this,o,He,null,fe,{})}}function xe(t){var ae,re,oe;let o,a,n,f,A="you are viewing:",E,h,_,l,q,i,b,R,G,U,S,te="plugin:",z,x,I,d,K,M=((ae=t[1])==null?void 0:ae.name)+"",V,Q,O=((re=t[1])==null?void 0:re.path)+"",B,W,J=((oe=t[1])==null?void 0:oe.src)+"",j,X,Y,Z,$,H,ne="View's Content:",ee,C,se="",g;return o=new qe({}),{c(){ve(o.$$.fragment),a=P(),n=p("main"),f=p("p"),f.textContent=A,E=P(),h=p("p"),_=p("code"),l=p("pre"),q=m(" url: "),i=m(t[3]),b=m(`
path: `),R=m(t[2]),G=m(`
	`),U=P(),S=p("p"),S.textContent=te,z=P(),x=p("p"),I=p("code"),d=p("pre"),K=m(" name: "),V=m(M),Q=m(`
 path: `),B=m(O),W=m(`
  src: `),j=m(J),X=m(`
	`),Y=P(),Z=p("hr"),$=P(),H=p("h5"),H.textContent=ne,ee=P(),C=p("div"),C.innerHTML=se,this.h()},l(r){ye(o.$$.fragment,r),a=L(r),n=c(r,"MAIN",{class:!0});var s=D(n);f=c(s,"P",{"data-svelte-h":!0}),F(f)!=="svelte-13qelb8"&&(f.textContent=A),E=L(s),h=c(s,"P",{});var T=D(h);_=c(T,"CODE",{});var k=D(_);l=c(k,"PRE",{});var v=D(l);q=u(v," url: "),i=u(v,t[3]),b=u(v,`
path: `),R=u(v,t[2]),G=u(v,`
	`),v.forEach(y),k.forEach(y),T.forEach(y),U=L(s),S=c(s,"P",{"data-svelte-h":!0}),F(S)!=="svelte-1q6o76l"&&(S.textContent=te),z=L(s),x=c(s,"P",{});var le=D(x);I=c(le,"CODE",{});var ie=D(I);d=c(ie,"PRE",{});var w=D(d);K=u(w," name: "),V=u(w,M),Q=u(w,`
 path: `),B=u(w,O),W=u(w,`
  src: `),j=u(w,J),X=u(w,`
	`),w.forEach(y),ie.forEach(y),le.forEach(y),Y=L(s),Z=c(s,"HR",{}),$=L(s),H=c(s,"H5",{"data-svelte-h":!0}),F(H)!=="svelte-194y0gu"&&(H.textContent=ne),ee=L(s),C=c(s,"DIV",{id:!0,"data-svelte-h":!0}),F(C)!=="svelte-kvorbx"&&(C.innerHTML=se),s.forEach(y),this.h()},h(){pe(C,"id","view-root"),pe(n,"class","svelte-1ppqpoq")},m(r,s){Ee(o,r,s),me(r,a,s),me(r,n,s),e(n,f),e(n,E),e(n,h),e(h,_),e(_,l),e(l,q),e(l,i),e(l,b),e(l,R),e(l,G),e(n,U),e(n,S),e(n,z),e(n,x),e(x,I),e(I,d),e(d,K),e(d,V),e(d,Q),e(d,B),e(d,W),e(d,j),e(d,X),e(n,Y),e(n,Z),e(n,$),e(n,H),e(n,ee),e(n,C),t[7](C),g=!0},p(r,[s]){var T,k,v;(!g||s&8)&&N(i,r[3]),(!g||s&4)&&N(R,r[2]),(!g||s&2)&&M!==(M=((T=r[1])==null?void 0:T.name)+"")&&N(V,M),(!g||s&2)&&O!==(O=((k=r[1])==null?void 0:k.path)+"")&&N(B,O),(!g||s&2)&&J!==(J=((v=r[1])==null?void 0:v.src)+"")&&N(j,J)},i(r){g||(Ce(o.$$.fragment,r),g=!0)},o(r){we(o.$$.fragment,r),g=!1},d(r){r&&(y(a),y(n)),Ae(o,r),t[7](null)}}}function Ie(t,o,a){let n,f,A,E,h,_;ce(t,Le,i=>a(5,h=i)),ce(t,be,i=>a(6,_=i));let l;function q(i){ge[i?"unshift":"push"](()=>{l=i,a(0,l),a(1,E),a(5,h),a(4,A),a(2,f),a(3,n),a(6,_)})}return t.$$.update=()=>{t.$$.dirty&64&&a(3,n=new URL(_.url)),t.$$.dirty&8&&a(2,f=n.pathname.replace(ue,"").split("/").filter(Boolean)),t.$$.dirty&4&&a(4,A=f[0]),t.$$.dirty&48&&a(1,E=h.get(A)),t.$$.dirty&3&&async function(i){if(!i||!l)return;a(0,l.innerHTML="",l);const b=await _e(()=>import(i.src),[]),R=b.default;R(),console.log({level:"dev",message:"loading plugin",plugin:i,result:b,default:b.default})}(E)},console.log({level:"dev",assets:Pe,base:ue}),[l,E,f,n,A,h,_,q]}class Ve extends de{constructor(o){super(),he(this,o,Ie,xe,fe,{})}}export{Ve as component};
