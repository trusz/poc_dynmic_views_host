import{w as u}from"./index.4457f1a3.js";var _;const v=((_=globalThis.__sveltekit_1ytt2gt)==null?void 0:_.base)??"";var g;const k=((g=globalThis.__sveltekit_1ytt2gt)==null?void 0:g.assets)??v,m="1690966699786",A="sveltekit:snapshot",R="sveltekit:scroll",T="sveltekit:index",f={tap:1,hover:2,viewport:3,eager:4,off:-1};function I(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}function S(){return{x:pageXOffset,y:pageYOffset}}function c(t,e){return t.getAttribute(`data-sveltekit-${e}`)}const d={...f,"":f.hover};function h(t){let e=t.assignedSlot??t.parentNode;return(e==null?void 0:e.nodeType)===11&&(e=e.host),e}function x(t,e){for(;t&&t!==e;){if(t.nodeName.toUpperCase()==="A"&&t.hasAttribute("href"))return t;t=h(t)}}function O(t,e){let n;try{n=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI)}catch{}const o=t instanceof SVGAElement?t.target.baseVal:t.target,r=!n||!!o||y(n,e)||(t.getAttribute("rel")||"").split(/\s+/).includes("external"),l=(n==null?void 0:n.origin)===location.origin&&t.hasAttribute("download");return{url:n,external:r,target:o,download:l}}function U(t){let e=null,n=null,o=null,r=null,l=null,a=null,s=t;for(;s&&s!==document.documentElement;)o===null&&(o=c(s,"preload-code")),r===null&&(r=c(s,"preload-data")),e===null&&(e=c(s,"keepfocus")),n===null&&(n=c(s,"noscroll")),l===null&&(l=c(s,"reload")),a===null&&(a=c(s,"replacestate")),s=h(s);function i(b){switch(b){case"":case"true":return!0;case"off":case"false":return!1;default:return null}}return{preload_code:d[o??"off"],preload_data:d[r??"off"],keep_focus:i(e),noscroll:i(n),reload:i(l),replace_state:i(a)}}function p(t){const e=u(t);let n=!0;function o(){n=!0,e.update(a=>a)}function r(a){n=!1,e.set(a)}function l(a){let s;return e.subscribe(i=>{(s===void 0||n&&i!==s)&&a(s=i)})}return{notify:o,set:r,subscribe:l}}function w(){const{set:t,subscribe:e}=u(!1);let n;async function o(){clearTimeout(n);try{const r=await fetch(`${k}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!r.ok)return!1;const a=(await r.json()).version!==m;return a&&(t(!0),clearTimeout(n)),a}catch{return!1}}return{subscribe:e,check:o}}function y(t,e){return t.origin!==location.origin||!t.pathname.startsWith(e)}function L(t){t.client}const N={url:p({}),page:p({}),navigating:u(null),updated:w()};export{T as I,f as P,R as S,A as a,O as b,U as c,N as d,v as e,x as f,I as g,L as h,y as i,S as s};
