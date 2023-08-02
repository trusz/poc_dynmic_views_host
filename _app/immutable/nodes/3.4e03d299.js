import{_ as _e}from"../chunks/preload-helper.3685c970.js";import{s as fe,a as b,f as p,l as m,c as L,g as c,h as D,R as F,m as u,d as y,j as pe,i as me,x as e,n as N,L as ce,p as ge}from"../chunks/scheduler.37626528.js";import{S as de,i as he,b as ve,d as ye,m as Ee,a as Ce,t as we,e as Ae}from"../chunks/index.3e0a838e.js";import{p as Pe}from"../chunks/stores.a0d69a6b.js";import{e as ue,j as be}from"../chunks/singletons.518e150e.js";import{p as Le}from"../chunks/plugin_.1996b81f.js";function De(){Re()||Se()}function Re(){const t=window.localStorage.getItem("employees")??"";if(!t)return!1;const o=JSON.parse(t);return!(!Array.isArray(o)||o.length===0)}function Se(){const o=JSON.stringify([{name:"Leanne Graham",isAdmin:!1},{name:"Ervin Howell",isAdmin:!1},{name:"Clementine Bauch",isAdmin:!1},{name:"Patricia Lebsack",isAdmin:!1},{name:"Chelsey Dietrich",isAdmin:!1},{name:"Mrs. Dennis Schulist",isAdmin:!1}]);window.localStorage.setItem("employees",o)}function He(t){return De(),[]}class qe extends de{constructor(o){super(),he(this,o,He,null,fe,{})}}function xe(t){var re,ae,oe;let o,r,n,f,A="you are viewing:",E,h,_,l,q,i,P,R,G,U,S,te="plugin:",z,x,I,d,K,M=((re=t[1])==null?void 0:re.name)+"",V,Q,O=((ae=t[1])==null?void 0:ae.path)+"",j,W,J=((oe=t[1])==null?void 0:oe.src)+"",B,X,Y,Z,$,H,ne="View's Content:",ee,C,se="",g;return o=new qe({}),{c(){ve(o.$$.fragment),r=b(),n=p("main"),f=p("p"),f.textContent=A,E=b(),h=p("p"),_=p("code"),l=p("pre"),q=m(" url: "),i=m(t[3]),P=m(`
path: `),R=m(t[2]),G=m(`
	`),U=b(),S=p("p"),S.textContent=te,z=b(),x=p("p"),I=p("code"),d=p("pre"),K=m(" name: "),V=m(M),Q=m(`
 path: `),j=m(O),W=m(`
  src: `),B=m(J),X=m(`
	`),Y=b(),Z=p("hr"),$=b(),H=p("h5"),H.textContent=ne,ee=b(),C=p("div"),C.innerHTML=se,this.h()},l(a){ye(o.$$.fragment,a),r=L(a),n=c(a,"MAIN",{class:!0});var s=D(n);f=c(s,"P",{"data-svelte-h":!0}),F(f)!=="svelte-13qelb8"&&(f.textContent=A),E=L(s),h=c(s,"P",{});var T=D(h);_=c(T,"CODE",{});var k=D(_);l=c(k,"PRE",{});var v=D(l);q=u(v," url: "),i=u(v,t[3]),P=u(v,`
path: `),R=u(v,t[2]),G=u(v,`
	`),v.forEach(y),k.forEach(y),T.forEach(y),U=L(s),S=c(s,"P",{"data-svelte-h":!0}),F(S)!=="svelte-1q6o76l"&&(S.textContent=te),z=L(s),x=c(s,"P",{});var le=D(x);I=c(le,"CODE",{});var ie=D(I);d=c(ie,"PRE",{});var w=D(d);K=u(w," name: "),V=u(w,M),Q=u(w,`
 path: `),j=u(w,O),W=u(w,`
  src: `),B=u(w,J),X=u(w,`
	`),w.forEach(y),ie.forEach(y),le.forEach(y),Y=L(s),Z=c(s,"HR",{}),$=L(s),H=c(s,"H5",{"data-svelte-h":!0}),F(H)!=="svelte-194y0gu"&&(H.textContent=ne),ee=L(s),C=c(s,"DIV",{id:!0,"data-svelte-h":!0}),F(C)!=="svelte-kvorbx"&&(C.innerHTML=se),s.forEach(y),this.h()},h(){pe(C,"id","view-root"),pe(n,"class","svelte-1ppqpoq")},m(a,s){Ee(o,a,s),me(a,r,s),me(a,n,s),e(n,f),e(n,E),e(n,h),e(h,_),e(_,l),e(l,q),e(l,i),e(l,P),e(l,R),e(l,G),e(n,U),e(n,S),e(n,z),e(n,x),e(x,I),e(I,d),e(d,K),e(d,V),e(d,Q),e(d,j),e(d,W),e(d,B),e(d,X),e(n,Y),e(n,Z),e(n,$),e(n,H),e(n,ee),e(n,C),t[7](C),g=!0},p(a,[s]){var T,k,v;(!g||s&8)&&N(i,a[3]),(!g||s&4)&&N(R,a[2]),(!g||s&2)&&M!==(M=((T=a[1])==null?void 0:T.name)+"")&&N(V,M),(!g||s&2)&&O!==(O=((k=a[1])==null?void 0:k.path)+"")&&N(j,O),(!g||s&2)&&J!==(J=((v=a[1])==null?void 0:v.src)+"")&&N(B,J)},i(a){g||(Ce(o.$$.fragment,a),g=!0)},o(a){we(o.$$.fragment,a),g=!1},d(a){a&&(y(r),y(n)),Ae(o,a),t[7](null)}}}function Ie(t,o,r){let n,f,A,E,h,_;ce(t,Le,i=>r(5,h=i)),ce(t,Pe,i=>r(6,_=i));let l;function q(i){ge[i?"unshift":"push"](()=>{l=i,r(0,l),r(1,E),r(5,h),r(4,A),r(2,f),r(3,n),r(6,_)})}return t.$$.update=()=>{t.$$.dirty&64&&r(3,n=new URL(_.url)),t.$$.dirty&8&&r(2,f=n.pathname.replace(ue,"").split("/").filter(Boolean)),t.$$.dirty&4&&r(4,A=f[0]),t.$$.dirty&48&&r(1,E=h.get(A)),t.$$.dirty&3&&async function(i){if(!i||!l)return;r(0,l.innerHTML="",l);const P=await _e(()=>import(i.src),[]),R=P.default;R(),console.log({level:"dev",message:"loading plugin",plugin:i,result:P,default:P.default})}(E)},console.log({level:"dev",assets:be,base:ue}),[l,E,f,n,A,h,_,q]}class Ve extends de{constructor(o){super(),he(this,o,Ie,xe,fe,{})}}export{Ve as component};
