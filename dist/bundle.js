(()=>{"use strict";var e,t,n,r,o,a,s,i,c,d,l,u,p,f,m={426:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(81),o=n.n(r),a=n(645),s=n.n(a)()(o());s.push([e.id,'/* Global Styling & Resets */\n\n:root {\n    /* Font Families */\n    --ff-common: "Righteous", sans-serif;\n\n    /* Font Sizes */\n    --fs-base: 1rem;\n    --fs-nav: 0.64rem;\n    --fs-small: 0.8rem;\n    --fs-x-small: 0.512rem;\n\n    --fs-x-large-heading: 3.052rem;\n    --fs-large-heading: 2.441rem;\n    --fs-h1: 1.953rem;\n    --fs-h2: 1.563rem;\n    --fs-h3: 1.25rem;\n}\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\n* {\n    margin: 0;\n}\n\nhtml,\nbody {\n    height: 100%;\n    background-color: #475561;\n}\n\nbutton,\ninput,\ntextarea,\nselect {\n    font: inherit;\n}\n\nul {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n}',""]);const i=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&s[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},s=[],i=0;i<e.length;i++){var c=e[i],d=r.base?c[0]+r.base:c[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=n(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=o(f,r);r.byIndex=i,t.splice(i,0,{identifier:u,updater:m,references:1})}s.push(u)}return s}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<a.length;s++){var i=n(a[s]);t[i].references--}for(var c=r(e,o),d=0;d<a.length;d++){var l=n(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},h={};function v(e){var t=h[e];if(void 0!==t)return t.exports;var n=h[e]={id:e,exports:{}};return m[e](n,n.exports,v),n.exports}v.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return v.d(t,{a:t}),t},v.d=(e,t)=>{for(var n in t)v.o(t,n)&&!v.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},v.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e=v(379),t=v.n(e),n=v(795),r=v.n(n),o=v(569),a=v.n(o),s=v(565),i=v.n(s),c=v(216),d=v.n(c),l=v(589),u=v.n(l),p=v(426),(f={}).styleTagTransform=u(),f.setAttributes=i(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=d(),t()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals,function(){const e=document.querySelector(".content"),t=document.createElement("header");t.classList.add("header"),t.setAttribute("id","header");const n=document.createElement("h1");n.classList.add("header-text"),n.textContent="Mariano's Pizza";const r=document.createElement("ul");r.classList.add("header-nav");const o=document.createElement("li");o.setAttribute("class","nav-tab"),o.setAttribute("id","home"),o.textContent="home";const a=document.createElement("li");a.setAttribute("class","nav-tab"),a.setAttribute("id","menu"),a.textContent="menu";const s=document.createElement("li");s.setAttribute("class","nav-tab"),s.setAttribute("id","contact"),s.textContent="contact",r.appendChild(o),r.appendChild(a),r.appendChild(s),t.appendChild(n),t.appendChild(r),e.appendChild(t)}(),document.querySelector("content").innerHTML="test",function(){const e=document.querySelector(".content"),t=document.createElement("footer");t.classList.add("footer"),t.setAttribute("id","footer");const n=document.createElement("p");n.classList.add("footer-text"),n.textContent="Copyright &copy 2022 Kyle Griffey",t.appendChild(n),e.appendChild(t)}()})();