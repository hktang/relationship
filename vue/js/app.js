(function(e){function t(t){for(var r,o,i=t[0],c=t[1],s=t[2],l=0,f=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(f.length)f.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a={app:0},u=[];function i(e){return c.p+"js/"+({}[e]||e)+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-1066af5a":1,"chunk-7451afd3":1,"chunk-eed829b8":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+".css",a=c.p+r,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var s=u[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){s=f[i],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],p.parentNode.removeChild(p),n(u)},p.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="https://passer-by.com/relationship/vue/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var p=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},"050d":function(e,t,n){"use strict";var r=n("efab"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("551c"),n("8a81");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"wrapper"},[n("div",{staticClass:"inner"},[n("transition",{attrs:{name:"fade"}},[n("router-view")],1),n("Footer")],1)])])},a=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",["/help/"!=e.route["path"]?n("div",{staticClass:"mod-foot"},[n("div",{staticClass:"bd"},[n("ul",[n("li",{staticClass:"icon-call"},[n("router-link",{class:{active:"/"==e.route["path"]},attrs:{to:"/"}},[n("span",{staticClass:"name"},[e._v("称谓")])])],1),n("li",{staticClass:"icon-relation"},[n("router-link",{class:{active:"/chain/"==e.route["path"]},attrs:{to:"/chain/"}},[n("span",{staticClass:"name"},[e._v("关系")])])],1)])])]):e._e()])},i=[],c={name:"Footer",computed:{route:function(){return this.$route}}},s=c,l=(n("050d"),n("2877")),f=Object(l["a"])(s,u,i,!1,null,"b8510b20",null),p=f.exports,d={name:"App",components:{Footer:p},data:function(){return{}},computed:{route:function(){return this.$route}},methods:{},created:function(){}},h=d,v=(n("034f"),n("5c64"),Object(l["a"])(h,o,a,!1,null,null,null)),m=v.exports,b=n("8c4f");r["a"].use(b["a"]);var g=b["a"].prototype.push;b["a"].prototype.push=function(e){return g.call(this,e).catch((function(e){return e}))};var y=new b["a"]({routes:[{path:"/",name:"index",component:function(){return n.e("chunk-1066af5a").then(n.bind(null,"8b24"))}},{path:"/chain/",name:"chain",component:function(){return n.e("chunk-eed829b8").then(n.bind(null,"ad80"))}},{path:"/help/",name:"help",component:function(){return n.e("chunk-7451afd3").then(n.bind(null,"9fc0"))}}],scrollBehavior:function(e,t,n){return n||{x:0,y:0}}});r["a"].config.productionTip=!1,new r["a"]({router:y,render:function(e){return e(m)}}).$mount("#app")},"5c64":function(e,t,n){"use strict";var r=n("6ee5"),o=n.n(r);o.a},"64a9":function(e,t,n){},"6ee5":function(e,t,n){},efab:function(e,t,n){}});
//# sourceMappingURL=app.js.map