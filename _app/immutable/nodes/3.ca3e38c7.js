import{_ as he}from"../chunks/preload-helper.cf010ec4.js";import{s as ce,a as b,f as p,l as m,c as L,g as u,h as D,R as F,m as c,d as v,j as pe,i as me,x as e,n as N,L as ue,p as _e}from"../chunks/scheduler.37626528.js";import{S as fe,i as de,b as ge,d as ye,m as ve,a as Ee,t as Ce,e as we}from"../chunks/index.3e0a838e.js";import{p as Ae}from"../chunks/stores.f18cbb28.js";import{p as Pe}from"../chunks/plugin_.d1fb2379.js";function be(){Le()||De()}function Le(){const t=window.localStorage.getItem("employees")??"";if(!t)return!1;const o=JSON.parse(t);return!(!Array.isArray(o)||o.length===0)}function De(){const o=JSON.stringify([{name:"Leanne Graham",isAdmin:!1},{name:"Ervin Howell",isAdmin:!1},{name:"Clementine Bauch",isAdmin:!1},{name:"Patricia Lebsack",isAdmin:!1},{name:"Chelsey Dietrich",isAdmin:!1},{name:"Mrs. Dennis Schulist",isAdmin:!1}]);window.localStorage.setItem("employees",o)}function Re(t){return be(),[]}class Se extends fe{constructor(o){super(),de(this,o,Re,null,ce,{})}}function He(t){var re,ae,oe;let o,r,n,f,A="you are viewing:",E,h,_,l,q,i,P,R,G,U,S,te="plugin:",z,x,I,d,K,M=((re=t[1])==null?void 0:re.name)+"",V,Q,O=((ae=t[1])==null?void 0:ae.path)+"",B,W,J=((oe=t[1])==null?void 0:oe.src)+"",j,X,Y,Z,$,H,ne="View's Content:",ee,C,se="",g;return o=new Se({}),{c(){ge(o.$$.fragment),r=b(),n=p("main"),f=p("p"),f.textContent=A,E=b(),h=p("p"),_=p("code"),l=p("pre"),q=m(" url: "),i=m(t[3]),P=m(`
path: `),R=m(t[2]),G=m(`
	`),U=b(),S=p("p"),S.textContent=te,z=b(),x=p("p"),I=p("code"),d=p("pre"),K=m(" name: "),V=m(M),Q=m(`
 path: `),B=m(O),W=m(`
  src: `),j=m(J),X=m(`
	`),Y=b(),Z=p("hr"),$=b(),H=p("h5"),H.textContent=ne,ee=b(),C=p("div"),C.innerHTML=se,this.h()},l(a){ye(o.$$.fragment,a),r=L(a),n=u(a,"MAIN",{class:!0});var s=D(n);f=u(s,"P",{"data-svelte-h":!0}),F(f)!=="svelte-13qelb8"&&(f.textContent=A),E=L(s),h=u(s,"P",{});var T=D(h);_=u(T,"CODE",{});var k=D(_);l=u(k,"PRE",{});var y=D(l);q=c(y," url: "),i=c(y,t[3]),P=c(y,`
path: `),R=c(y,t[2]),G=c(y,`
	`),y.forEach(v),k.forEach(v),T.forEach(v),U=L(s),S=u(s,"P",{"data-svelte-h":!0}),F(S)!=="svelte-1q6o76l"&&(S.textContent=te),z=L(s),x=u(s,"P",{});var le=D(x);I=u(le,"CODE",{});var ie=D(I);d=u(ie,"PRE",{});var w=D(d);K=c(w," name: "),V=c(w,M),Q=c(w,`
 path: `),B=c(w,O),W=c(w,`
  src: `),j=c(w,J),X=c(w,`
	`),w.forEach(v),ie.forEach(v),le.forEach(v),Y=L(s),Z=u(s,"HR",{}),$=L(s),H=u(s,"H5",{"data-svelte-h":!0}),F(H)!=="svelte-194y0gu"&&(H.textContent=ne),ee=L(s),C=u(s,"DIV",{id:!0,"data-svelte-h":!0}),F(C)!=="svelte-kvorbx"&&(C.innerHTML=se),s.forEach(v),this.h()},h(){pe(C,"id","view-root"),pe(n,"class","svelte-1ppqpoq")},m(a,s){ve(o,a,s),me(a,r,s),me(a,n,s),e(n,f),e(n,E),e(n,h),e(h,_),e(_,l),e(l,q),e(l,i),e(l,P),e(l,R),e(l,G),e(n,U),e(n,S),e(n,z),e(n,x),e(x,I),e(I,d),e(d,K),e(d,V),e(d,Q),e(d,B),e(d,W),e(d,j),e(d,X),e(n,Y),e(n,Z),e(n,$),e(n,H),e(n,ee),e(n,C),t[7](C),g=!0},p(a,[s]){var T,k,y;(!g||s&8)&&N(i,a[3]),(!g||s&4)&&N(R,a[2]),(!g||s&2)&&M!==(M=((T=a[1])==null?void 0:T.name)+"")&&N(V,M),(!g||s&2)&&O!==(O=((k=a[1])==null?void 0:k.path)+"")&&N(B,O),(!g||s&2)&&J!==(J=((y=a[1])==null?void 0:y.src)+"")&&N(j,J)},i(a){g||(Ee(o.$$.fragment,a),g=!0)},o(a){Ce(o.$$.fragment,a),g=!1},d(a){a&&(v(r),v(n)),we(o,a),t[7](null)}}}function qe(t,o,r){let n,f,A,E,h,_;ue(t,Pe,i=>r(5,h=i)),ue(t,Ae,i=>r(6,_=i));let l;function q(i){_e[i?"unshift":"push"](()=>{l=i,r(0,l),r(1,E),r(5,h),r(4,A),r(2,f),r(3,n),r(6,_)})}return t.$$.update=()=>{t.$$.dirty&64&&r(3,n=new URL(_.url)),t.$$.dirty&8&&r(2,f=n.pathname.split("/").filter(Boolean)),t.$$.dirty&4&&r(4,A=f[0]),t.$$.dirty&48&&r(1,E=h.get(A)),t.$$.dirty&3&&async function(i){if(!i||!l)return;r(0,l.innerHTML="",l);const P=await he(()=>import(i.src),[]),R=P.default;R(),console.log({level:"dev",message:"loading plugin",plugin:i,result:P,default:P.default})}(E)},[l,E,f,n,A,h,_,q]}class Te extends fe{constructor(o){super(),de(this,o,qe,He,ce,{})}}export{Te as component};
