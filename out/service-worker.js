if(!self.define){let e,i={};const t=(t,s)=>(t=new URL(t+".js",s).href,i[t]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=i,document.head.appendChild(e)}else e=t,importScripts(t),i()})).then((()=>{let e=i[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(s,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let l={};const o=e=>t(e,r),u={module:{uri:r},exports:l,require:o};i[r]=Promise.all(s.map((e=>u[e]||o(e)))).then((e=>(n(...e),l)))}}define(["./workbox-460519b3"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"./static/js/main.5c0df497.js",revision:null},{url:"./static/js/runtime~main.js.7851d12d.js",revision:null},{url:"index.html",revision:"9539d16fd8f58e634613121ddee3b85d"},{url:"static/fonts/346e09.ttf",revision:null},{url:"static/imgs/4ff89a.jpg",revision:null},{url:"static/imgs/6d00b4.jpg",revision:null},{url:"static/js/Math.dac6ff45.chunk.js",revision:null}],{})}));
//# sourceMappingURL=service-worker.js.map
