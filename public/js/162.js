"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[162],{9437:(e,t,r)=>{r.d(t,{B:()=>a});var a=window.route},3515:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(3645),n=r.n(a)()((function(e){return e[1]}));n.push([e.id,".bg-gray-100.svelte-1v1wz2p{background-color:#f7fafc;background-color:rgba(247,250,252,var(--tw-bg-opacity))}.border-gray-200.svelte-1v1wz2p{border-color:#edf2f7;border-color:rgba(237,242,247,var(--tw-border-opacity))}.text-gray-400.svelte-1v1wz2p{color:#cbd5e0;color:rgba(203,213,224,var(--tw-text-opacity))}.text-gray-500.svelte-1v1wz2p{color:#a0aec0;color:rgba(160,174,192,var(--tw-text-opacity))}.text-gray-600.svelte-1v1wz2p{color:#718096;color:rgba(113,128,150,var(--tw-text-opacity))}.text-gray-700.svelte-1v1wz2p{color:#4a5568;color:rgba(74,85,104,var(--tw-text-opacity))}.text-gray-900.svelte-1v1wz2p{color:#1a202c;color:rgba(26,32,44,var(--tw-text-opacity))}@media(prefers-color-scheme:dark){.dark\\:bg-gray-800.svelte-1v1wz2p{background-color:#2d3748;background-color:rgba(45,55,72,var(--tw-bg-opacity))}.dark\\:bg-gray-900.svelte-1v1wz2p{background-color:#1a202c;background-color:rgba(26,32,44,var(--tw-bg-opacity))}.dark\\:border-gray-700.svelte-1v1wz2p{border-color:#4a5568;border-color:rgba(74,85,104,var(--tw-border-opacity))}.dark\\:text-white.svelte-1v1wz2p{color:#fff;color:rgba(255,255,255,var(--tw-text-opacity))}.dark\\:text-gray-400.svelte-1v1wz2p{color:#cbd5e0;color:rgba(203,213,224,var(--tw-text-opacity))}}",""]);const o=n},3645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=e(t);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,a){"string"==typeof e&&(e=[[null,e,""]]);var n={};if(a)for(var o=0;o<this.length;o++){var s=this[o][0];null!=s&&(n[s]=!0)}for(var l=0;l<e.length;l++){var i=[].concat(e[l]);a&&n[i[0]]||(r&&(i[2]?i[2]="".concat(r," and ").concat(i[2]):i[2]=r),t.push(i))}},t}},3379:(e,t,r)=>{var a,n=function(){return void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a},o=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}(),s=[];function l(e){for(var t=-1,r=0;r<s.length;r++)if(s[r].identifier===e){t=r;break}return t}function i(e,t){for(var r={},a=[],n=0;n<e.length;n++){var o=e[n],i=t.base?o[0]+t.base:o[0],c=r[i]||0,d="".concat(i," ").concat(c);r[i]=c+1;var v=l(d),p={css:o[1],media:o[2],sourceMap:o[3]};-1!==v?(s[v].references++,s[v].updater(p)):s.push({identifier:d,updater:g(p,t),references:1}),a.push(d)}return a}function c(e){var t=document.createElement("style"),a=e.attributes||{};if(void 0===a.nonce){var n=r.nc;n&&(a.nonce=n)}if(Object.keys(a).forEach((function(e){t.setAttribute(e,a[e])})),"function"==typeof e.insert)e.insert(t);else{var s=o(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var d,v=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function p(e,t,r,a){var n=r?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(e.styleSheet)e.styleSheet.cssText=v(t,n);else{var o=document.createTextNode(n),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function u(e,t,r){var a=r.css,n=r.media,o=r.sourceMap;if(n?e.setAttribute("media",n):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var h=null,f=0;function g(e,t){var r,a,n;if(t.singleton){var o=f++;r=h||(h=c(t)),a=p.bind(null,r,o,!1),n=p.bind(null,r,o,!0)}else r=c(t),a=u.bind(null,r,t),n=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return a(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;a(e=t)}else n()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=n());var r=i(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var a=0;a<r.length;a++){var n=l(r[a]);s[n].references--}for(var o=i(e,t),c=0;c<r.length;c++){var d=l(r[c]);0===s[d].references&&(s[d].updater(),s.splice(d,1))}r=o}}}},9345:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(4234),n=r(8586);function o(e){let t,r,o,s,l;const i=e[2].default,c=(0,a.nuO)(i,e,e[1],null);return{c(){t=(0,a.bGB)("a"),c&&c.c(),(0,a.Ljt)(t,"href",e[0]),(0,a.Ljt)(t,"class","inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out")},m(e,i){(0,a.$Tr)(e,t,i),c&&c.m(t,null),o=!0,s||(l=(0,a.TVh)(r=n.II.call(null,t)),s=!0)},p(e,[r]){c&&c.p&&(!o||2&r)&&(0,a.kmG)(c,i,e,e[1],o?(0,a.u2N)(i,e[1],r,null):(0,a.VOJ)(e[1]),null),(!o||1&r)&&(0,a.Ljt)(t,"href",e[0])},i(e){o||((0,a.Ui)(c,e),o=!0)},o(e){(0,a.etI)(c,e),o=!1},d(e){e&&(0,a.ogt)(t),c&&c.d(e),s=!1,l()}}}function s(e,t,r){let{$$slots:a={},$$scope:n}=t,{href:o}=t;return e.$$set=e=>{"href"in e&&r(0,o=e.href),"$$scope"in e&&r(1,n=e.$$scope)},[o,n,a]}class l extends a.f_C{constructor(e){super(),(0,a.S1n)(this,e,s,o,a.N8,{href:0})}}const i=l},3162:(e,t,r)=>{r.r(t),r.d(t,{default:()=>y});var a=r(4234),n=r(8586),o=r(9437),s=r(9345),l=r(3379),i=r.n(l),c=r(3515),d={insert:"head",singleton:!1};i()(c.Z,d);c.Z.locals;function v(e){let t,r,n,o;const s=[u,p],l=[];function i(e,t){return e[4].props.auth.user?0:1}return r=i(e),n=l[r]=s[r](e),{c(){t=(0,a.bGB)("div"),n.c(),(0,a.Ljt)(t,"class","hidden fixed top-0 right-0 px-6 py-4 sm:block")},m(e,n){(0,a.$Tr)(e,t,n),l[r].m(t,null),o=!0},p(e,o){let c=r;r=i(e),r===c?l[r].p(e,o):((0,a.dvw)(),(0,a.etI)(l[c],1,1,(()=>{l[c]=null})),(0,a.gbL)(),n=l[r],n?n.p(e,o):(n=l[r]=s[r](e),n.c()),(0,a.Ui)(n,1),n.m(t,null))},i(e){o||((0,a.Ui)(n),o=!0)},o(e){(0,a.etI)(n),o=!1},d(e){e&&(0,a.ogt)(t),l[r].d()}}}function p(e){let t,r,n,l;t=new s.Z({props:{href:(0,o.B)("login"),class:"text-sm text-gray-700 underline",$$slots:{default:[h]},$$scope:{ctx:e}}});let i=e[1]&&f(e);return{c(){(0,a.YCL)(t.$$.fragment),r=(0,a.DhX)(),i&&i.c(),n=(0,a.cSb)()},m(e,o){(0,a.yef)(t,e,o),(0,a.$Tr)(e,r,o),i&&i.m(e,o),(0,a.$Tr)(e,n,o),l=!0},p(e,r){const o={};32&r&&(o.$$scope={dirty:r,ctx:e}),t.$set(o),e[1]?i?(i.p(e,r),2&r&&(0,a.Ui)(i,1)):(i=f(e),i.c(),(0,a.Ui)(i,1),i.m(n.parentNode,n)):i&&((0,a.dvw)(),(0,a.etI)(i,1,1,(()=>{i=null})),(0,a.gbL)())},i(e){l||((0,a.Ui)(t.$$.fragment,e),(0,a.Ui)(i),l=!0)},o(e){(0,a.etI)(t.$$.fragment,e),(0,a.etI)(i),l=!1},d(e){(0,a.vpE)(t,e),e&&(0,a.ogt)(r),i&&i.d(e),e&&(0,a.ogt)(n)}}}function u(e){let t,r;return t=new s.Z({props:{href:"/dashboard",class:"text-sm text-gray-700 underline",$$slots:{default:[m]},$$scope:{ctx:e}}}),{c(){(0,a.YCL)(t.$$.fragment)},m(e,n){(0,a.yef)(t,e,n),r=!0},p(e,r){const a={};32&r&&(a.$$scope={dirty:r,ctx:e}),t.$set(a)},i(e){r||((0,a.Ui)(t.$$.fragment,e),r=!0)},o(e){(0,a.etI)(t.$$.fragment,e),r=!1},d(e){(0,a.vpE)(t,e)}}}function h(e){let t;return{c(){t=(0,a.fLW)("Log in")},m(e,r){(0,a.$Tr)(e,t,r)},d(e){e&&(0,a.ogt)(t)}}}function f(e){let t,r;return t=new s.Z({props:{href:(0,o.B)("register"),class:"ml-4 text-sm text-gray-700 underline",$$slots:{default:[g]},$$scope:{ctx:e}}}),{c(){(0,a.YCL)(t.$$.fragment)},m(e,n){(0,a.yef)(t,e,n),r=!0},p(e,r){const a={};32&r&&(a.$$scope={dirty:r,ctx:e}),t.$set(a)},i(e){r||((0,a.Ui)(t.$$.fragment,e),r=!0)},o(e){(0,a.etI)(t.$$.fragment,e),r=!1},d(e){(0,a.vpE)(t,e)}}}function g(e){let t;return{c(){t=(0,a.fLW)("Register")},m(e,r){(0,a.$Tr)(e,t,r)},d(e){e&&(0,a.ogt)(t)}}}function m(e){let t;return{c(){t=(0,a.fLW)("Dashboard")},m(e,r){(0,a.$Tr)(e,t,r)},d(e){e&&(0,a.ogt)(t)}}}function w(e){let t,r,n,o,s,l,i,c,d,p,u,h,f,g,m,w,b,x,y={laravelVersion:e[2]}+"",k={phpVersion:e[3]}+"",z=e[0]&&v(e);return{c(){t=(0,a.DhX)(),r=(0,a.bGB)("div"),z&&z.c(),n=(0,a.DhX)(),o=(0,a.bGB)("div"),s=(0,a.bGB)("div"),s.innerHTML='<svg viewBox="0 0 651 192" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-16 w-auto text-gray-700 sm:h-20 svelte-1v1wz2p"><g clip-path="url(#clip0)" fill="#EF3B2D"><path d="M248.032 44.676h-16.466v100.23h47.394v-14.748h-30.928V44.676zM337.091 87.202c-2.101-3.341-5.083-5.965-8.949-7.875-3.865-1.909-7.756-2.864-11.669-2.864-5.062 0-9.69.931-13.89 2.792-4.201 1.861-7.804 4.417-10.811 7.661-3.007 3.246-5.347 6.993-7.016 11.239-1.672 4.249-2.506 8.713-2.506 13.389 0 4.774.834 9.26 2.506 13.459 1.669 4.202 4.009 7.925 7.016 11.169 3.007 3.246 6.609 5.799 10.811 7.66 4.199 1.861 8.828 2.792 13.89 2.792 3.913 0 7.804-.955 11.669-2.863 3.866-1.908 6.849-4.533 8.949-7.875v9.021h15.607V78.182h-15.607v9.02zm-1.431 32.503c-.955 2.578-2.291 4.821-4.009 6.73-1.719 1.91-3.795 3.437-6.229 4.582-2.435 1.146-5.133 1.718-8.091 1.718-2.96 0-5.633-.572-8.019-1.718-2.387-1.146-4.438-2.672-6.156-4.582-1.719-1.909-3.032-4.152-3.938-6.73-.909-2.577-1.36-5.298-1.36-8.161 0-2.864.451-5.585 1.36-8.162.905-2.577 2.219-4.819 3.938-6.729 1.718-1.908 3.77-3.437 6.156-4.582 2.386-1.146 5.059-1.718 8.019-1.718 2.958 0 5.656.572 8.091 1.718 2.434 1.146 4.51 2.674 6.229 4.582 1.718 1.91 3.054 4.152 4.009 6.729.953 2.577 1.432 5.298 1.432 8.162-.001 2.863-.479 5.584-1.432 8.161zM463.954 87.202c-2.101-3.341-5.083-5.965-8.949-7.875-3.865-1.909-7.756-2.864-11.669-2.864-5.062 0-9.69.931-13.89 2.792-4.201 1.861-7.804 4.417-10.811 7.661-3.007 3.246-5.347 6.993-7.016 11.239-1.672 4.249-2.506 8.713-2.506 13.389 0 4.774.834 9.26 2.506 13.459 1.669 4.202 4.009 7.925 7.016 11.169 3.007 3.246 6.609 5.799 10.811 7.66 4.199 1.861 8.828 2.792 13.89 2.792 3.913 0 7.804-.955 11.669-2.863 3.866-1.908 6.849-4.533 8.949-7.875v9.021h15.607V78.182h-15.607v9.02zm-1.432 32.503c-.955 2.578-2.291 4.821-4.009 6.73-1.719 1.91-3.795 3.437-6.229 4.582-2.435 1.146-5.133 1.718-8.091 1.718-2.96 0-5.633-.572-8.019-1.718-2.387-1.146-4.438-2.672-6.156-4.582-1.719-1.909-3.032-4.152-3.938-6.73-.909-2.577-1.36-5.298-1.36-8.161 0-2.864.451-5.585 1.36-8.162.905-2.577 2.219-4.819 3.938-6.729 1.718-1.908 3.77-3.437 6.156-4.582 2.386-1.146 5.059-1.718 8.019-1.718 2.958 0 5.656.572 8.091 1.718 2.434 1.146 4.51 2.674 6.229 4.582 1.718 1.91 3.054 4.152 4.009 6.729.953 2.577 1.432 5.298 1.432 8.162 0 2.863-.479 5.584-1.432 8.161zM650.772 44.676h-15.606v100.23h15.606V44.676zM365.013 144.906h15.607V93.538h26.776V78.182h-42.383v66.724zM542.133 78.182l-19.616 51.096-19.616-51.096h-15.808l25.617 66.724h19.614l25.617-66.724h-15.808zM591.98 76.466c-19.112 0-34.239 15.706-34.239 35.079 0 21.416 14.641 35.079 36.239 35.079 12.088 0 19.806-4.622 29.234-14.688l-10.544-8.158c-.006.008-7.958 10.449-19.832 10.449-13.802 0-19.612-11.127-19.612-16.884h51.777c2.72-22.043-11.772-40.877-33.023-40.877zm-18.713 29.28c.12-1.284 1.917-16.884 18.589-16.884 16.671 0 18.697 15.598 18.813 16.884h-37.402zM184.068 43.892c-.024-.088-.073-.165-.104-.25-.058-.157-.108-.316-.191-.46-.056-.097-.137-.176-.203-.265-.087-.117-.161-.242-.265-.345-.085-.086-.194-.148-.29-.223-.109-.085-.206-.182-.327-.252l-.002-.001-.002-.002-35.648-20.524a2.971 2.971 0 00-2.964 0l-35.647 20.522-.002.002-.002.001c-.121.07-.219.167-.327.252-.096.075-.205.138-.29.223-.103.103-.178.228-.265.345-.066.089-.147.169-.203.265-.083.144-.133.304-.191.46-.031.085-.08.162-.104.25-.067.249-.103.51-.103.776v38.979l-29.706 17.103V24.493a3 3 0 00-.103-.776c-.024-.088-.073-.165-.104-.25-.058-.157-.108-.316-.191-.46-.056-.097-.137-.176-.203-.265-.087-.117-.161-.242-.265-.345-.085-.086-.194-.148-.29-.223-.109-.085-.206-.182-.327-.252l-.002-.001-.002-.002L40.098 1.396a2.971 2.971 0 00-2.964 0L1.487 21.919l-.002.002-.002.001c-.121.07-.219.167-.327.252-.096.075-.205.138-.29.223-.103.103-.178.228-.265.345-.066.089-.147.169-.203.265-.083.144-.133.304-.191.46-.031.085-.08.162-.104.25-.067.249-.103.51-.103.776v122.09c0 1.063.568 2.044 1.489 2.575l71.293 41.045c.156.089.324.143.49.202.078.028.15.074.23.095a2.98 2.98 0 001.524 0c.069-.018.132-.059.2-.083.176-.061.354-.119.519-.214l71.293-41.045a2.971 2.971 0 001.489-2.575v-38.979l34.158-19.666a2.971 2.971 0 001.489-2.575V44.666a3.075 3.075 0 00-.106-.774zM74.255 143.167l-29.648-16.779 31.136-17.926.001-.001 34.164-19.669 29.674 17.084-21.772 12.428-43.555 24.863zm68.329-76.259v33.841l-12.475-7.182-17.231-9.92V49.806l12.475 7.182 17.231 9.92zm2.97-39.335l29.693 17.095-29.693 17.095-29.693-17.095 29.693-17.095zM54.06 114.089l-12.475 7.182V46.733l17.231-9.92 12.475-7.182v74.537l-17.231 9.921zM38.614 7.398l29.693 17.095-29.693 17.095L8.921 24.493 38.614 7.398zM5.938 29.632l12.475 7.182 17.231 9.92v79.676l.001.005-.001.006c0 .114.032.221.045.333.017.146.021.294.059.434l.002.007c.032.117.094.222.14.334.051.124.088.255.156.371a.036.036 0 00.004.009c.061.105.149.191.222.288.081.105.149.22.244.314l.008.01c.084.083.19.142.284.215.106.083.202.178.32.247l.013.005.011.008 34.139 19.321v34.175L5.939 144.867V29.632h-.001zm136.646 115.235l-65.352 37.625V148.31l48.399-27.628 16.953-9.677v33.862zm35.646-61.22l-29.706 17.102V66.908l17.231-9.92 12.475-7.182v33.841z"></path></g></svg>',l=(0,a.DhX)(),i=(0,a.bGB)("div"),i.innerHTML='<div class="grid grid-cols-1 md:grid-cols-2"><div class="p-6"><div class="flex items-center"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500 svelte-1v1wz2p"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg> \n                        <div class="ml-4 text-lg leading-7 font-semibold"><a href="https://laravel.com/docs" class="underline text-gray-900 dark:text-white svelte-1v1wz2p">Documentation</a></div></div> \n\n                    <div class="ml-12"><div class="mt-2 text-gray-600 dark:text-gray-400 text-sm svelte-1v1wz2p">Laravel has wonderful, thorough documentation covering every aspect of the framework. Whether you are new to the framework or have previous experience with Laravel, we recommend reading all of the documentation from beginning to end.</div></div></div> \n\n                <div class="p-6 border-t border-gray-200 dark:border-gray-700 md:border-t-0 md:border-l svelte-1v1wz2p"><div class="flex items-center"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500 svelte-1v1wz2p"><path d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg> \n                        <div class="ml-4 text-lg leading-7 font-semibold"><a href="https://laracasts.com" class="underline text-gray-900 dark:text-white svelte-1v1wz2p">Laracasts</a></div></div> \n\n                    <div class="ml-12"><div class="mt-2 text-gray-600 dark:text-gray-400 text-sm svelte-1v1wz2p">Laracasts offers thousands of video tutorials on Laravel, PHP, and JavaScript development. Check them out, see for yourself, and massively level up your development skills in the process.</div></div></div> \n\n                <div class="p-6 border-t border-gray-200 dark:border-gray-700 svelte-1v1wz2p"><div class="flex items-center"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500 svelte-1v1wz2p"><path d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg> \n                        <div class="ml-4 text-lg leading-7 font-semibold"><a href="https://laravel-news.com/" class="underline text-gray-900 dark:text-white svelte-1v1wz2p">Laravel News</a></div></div> \n\n                    <div class="ml-12"><div class="mt-2 text-gray-600 dark:text-gray-400 text-sm svelte-1v1wz2p">Laravel News is a community driven portal and newsletter aggregating all of the latest and most important news in the Laravel ecosystem, including new package releases and tutorials.</div></div></div> \n\n                <div class="p-6 border-t border-gray-200 dark:border-gray-700 md:border-l svelte-1v1wz2p"><div class="flex items-center"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500 svelte-1v1wz2p"><path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> \n                        <div class="ml-4 text-lg leading-7 font-semibold text-gray-900 dark:text-white svelte-1v1wz2p">Vibrant Ecosystem</div></div> \n\n                    <div class="ml-12"><div class="mt-2 text-gray-600 dark:text-gray-400 text-sm svelte-1v1wz2p">Laravel&#39;s robust library of first-party tools and libraries, such as <a href="https://forge.laravel.com" class="underline">Forge</a>, <a href="https://vapor.laravel.com" class="underline">Vapor</a>, <a href="https://nova.laravel.com" class="underline">Nova</a>, and <a href="https://envoyer.io" class="underline">Envoyer</a> help you take your projects to the next level.\n                            Pair them with powerful open source libraries like <a href="https://laravel.com/docs/billing" class="underline">Cashier</a>, <a href="https://laravel.com/docs/dusk" class="underline">Dusk</a>, <a href="https://laravel.com/docs/broadcasting" class="underline">Echo</a>, <a href="https://laravel.com/docs/horizon" class="underline">Horizon</a>,\n                            <a href="https://laravel.com/docs/sanctum" class="underline">Sanctum</a>, <a href="https://laravel.com/docs/telescope" class="underline">Telescope</a>, and more.</div></div></div></div>',c=(0,a.DhX)(),d=(0,a.bGB)("div"),p=(0,a.bGB)("div"),p.innerHTML='<div class="flex items-center"><svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" class="-mt-px w-5 h-5 text-gray-400 svelte-1v1wz2p"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg> \n\n                    <a href="https://laravel.bigcartel.com" class="ml-1 underline">Shop</a> \n\n                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="ml-4 -mt-px w-5 h-5 text-gray-400 svelte-1v1wz2p"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg> \n\n                    <a href="https://github.com/sponsors/taylorotwell" class="ml-1 underline">Sponsor</a></div>',u=(0,a.DhX)(),h=(0,a.bGB)("div"),f=(0,a.fLW)("Laravel v"),g=(0,a.fLW)(y),m=(0,a.fLW)(" (PHP v"),w=(0,a.fLW)(k),b=(0,a.fLW)(")"),document.title="Welcome",(0,a.Ljt)(s,"class","flex justify-center pt-8 sm:justify-start sm:pt-0"),(0,a.Ljt)(i,"class","mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow sm:rounded-lg svelte-1v1wz2p"),(0,a.Ljt)(p,"class","text-center text-sm text-gray-500 sm:text-left svelte-1v1wz2p"),(0,a.Ljt)(h,"class","ml-4 text-center text-sm text-gray-500 sm:text-right sm:ml-0 svelte-1v1wz2p"),(0,a.Ljt)(d,"class","flex justify-center mt-4 sm:items-center sm:justify-between"),(0,a.Ljt)(o,"class","max-w-6xl mx-auto sm:px-6 lg:px-8"),(0,a.Ljt)(r,"class","relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0 svelte-1v1wz2p")},m(e,v){(0,a.$Tr)(e,t,v),(0,a.$Tr)(e,r,v),z&&z.m(r,null),(0,a.R3I)(r,n),(0,a.R3I)(r,o),(0,a.R3I)(o,s),(0,a.R3I)(o,l),(0,a.R3I)(o,i),(0,a.R3I)(o,c),(0,a.R3I)(o,d),(0,a.R3I)(d,p),(0,a.R3I)(d,u),(0,a.R3I)(d,h),(0,a.R3I)(h,f),(0,a.R3I)(h,g),(0,a.R3I)(h,m),(0,a.R3I)(h,w),(0,a.R3I)(h,b),x=!0},p(e,[t]){e[0]?z?(z.p(e,t),1&t&&(0,a.Ui)(z,1)):(z=v(e),z.c(),(0,a.Ui)(z,1),z.m(r,n)):z&&((0,a.dvw)(),(0,a.etI)(z,1,1,(()=>{z=null})),(0,a.gbL)()),(!x||4&t)&&y!==(y={laravelVersion:e[2]}+"")&&(0,a.rTO)(g,y),(!x||8&t)&&k!==(k={phpVersion:e[3]}+"")&&(0,a.rTO)(w,k)},i(e){x||((0,a.Ui)(z),x=!0)},o(e){(0,a.etI)(z),x=!1},d(e){e&&(0,a.ogt)(t),e&&(0,a.ogt)(r),z&&z.d()}}}function b(e,t,r){let o;(0,a.FIv)(e,n.Md,(e=>r(4,o=e)));let{canLogin:s}=t,{canRegister:l}=t,{laravelVersion:i}=t,{phpVersion:c}=t;return e.$$set=e=>{"canLogin"in e&&r(0,s=e.canLogin),"canRegister"in e&&r(1,l=e.canRegister),"laravelVersion"in e&&r(2,i=e.laravelVersion),"phpVersion"in e&&r(3,c=e.phpVersion)},[s,l,i,c,o]}class x extends a.f_C{constructor(e){super(),(0,a.S1n)(this,e,b,w,a.N8,{canLogin:0,canRegister:1,laravelVersion:2,phpVersion:3})}}const y=x}}]);