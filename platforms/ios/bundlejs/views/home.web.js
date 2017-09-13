// { "framework": "Vue"} 

!function(t){function e(a){if(n[a])return n[a].exports;var i=n[a]={i:a,l:!1,exports:{}};return t[a].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,a){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:a})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=127)}([function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var a={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(a[o]=!0)}for(i=0;i<e.length;i++){var r=e[i];"number"==typeof r[0]&&a[r[0]]||(n&&!r[2]?r[2]=n:n&&(r[2]="("+r[2]+") and ("+n+")"),t.push(r))}},t}},function(t,e,n){function a(t){for(var e=0;e<t.length;e++){var n=t[e],a=d[n.id];if(a){a.refs++;for(var i=0;i<a.parts.length;i++)a.parts[i](n.parts[i]);for(;i<n.parts.length;i++)a.parts.push(o(n.parts[i]));a.parts.length>n.parts.length&&(a.parts.length=n.parts.length)}else{for(var r=[],i=0;i<n.parts.length;i++)r.push(o(n.parts[i]));d[n.id]={id:n.id,refs:1,parts:r}}}}function i(){var t=document.createElement("style");return t.type="text/css",p.appendChild(t),t}function o(t){var e,n,a=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(a){if(x)return g;a.parentNode.removeChild(a)}if(h){var o=f++;a=u||(u=i()),e=r.bind(null,a,o,!1),n=r.bind(null,a,o,!0)}else a=i(),e=s.bind(null,a),n=function(){a.parentNode.removeChild(a)};return e(t),function(a){if(a){if(a.css===t.css&&a.media===t.media&&a.sourceMap===t.sourceMap)return;e(t=a)}else n()}}function r(t,e,n,a){var i=n?"":a.css;if(t.styleSheet)t.styleSheet.cssText=v(e,i);else{var o=document.createTextNode(i),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(o,r[e]):t.appendChild(o)}}function s(t,e){var n=e.css,a=e.media,i=e.sourceMap;if(a&&t.setAttribute("media",a),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=n(3),d={},p=c&&(document.head||document.getElementsByTagName("head")[0]),u=null,f=0,x=!1,g=function(){},h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){x=n;var i=l(t,e);return a(i),function(e){for(var n=[],o=0;o<i.length;o++){var r=i[o],s=d[r.id];s.refs--,n.push(s)}e?(i=l(t,e),a(i)):i=[];for(var o=0;o<n.length;o++){var s=n[o];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete d[s.id]}}}};var v=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e,n,a,i){var o,r=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(o=t,r=t.default);var c="function"==typeof r?r.options:r;e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns),a&&(c._scopeId=a);var l;if(i?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},c._ssrRegister=l):n&&(l=n),l){var d=c.functional,p=d?c.render:c.beforeCreate;d?c.render=function(t,e){return l.call(e),p(t,e)}:c.beforeCreate=p?[].concat(p,l):[l]}return{esModule:o,exports:r,options:c}}},function(t,e){t.exports=function(t,e){for(var n=[],a={},i=0;i<e.length;i++){var o=e[i],r=o[0],s=o[1],c=o[2],l=o[3],d={id:t+":"+i,css:s,media:c,sourceMap:l};a[r]?a[r].parts.push(d):n.push(a[r]={id:r,parts:[d]})}return n}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={initIconFont:function(){weex.requireModule("dom").addRule("fontFace",{fontFamily:"iconfont",src:"url('http://at.alicdn.com/t/font_404010_jgmnakd1zizr529.ttf')"})},setBundleUrl:function(t,e){var n=t,a="",i="",o=void 0,r=n.indexOf("your_current_IP")>=0||n.indexOf("file://assets/")>=0,s=n.indexOf("file:///")>=0&&n.indexOf("WeexDemo.app")>0;if(r)o="file://assets/dist";else if(s)o=n.substring(0,n.lastIndexOf("/")+1);else{var c=/\/\/([^\/]+?)\//.exec(n),l=/\/\/[^\/]+\/([^\/]+)\//.exec(n);c&&c.length>=2&&(a=c[1]),l&&l.length>=2&&(i=l[1]),o="http://"+a+"/"}return("undefined"==typeof navigator||"Mozilla"!==navigator.appCodeName&&"Gecko"!==navigator.product?o+(i?i+"/":""):"web"===i||"dist"===i?"./index.html?page=/dist/":"./index.html?page=")+e},getUrlSearch:function(t,e){var n=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),a=t.slice(t.indexOf("?")+1).match(n);if(null!=a)try{return decodeURIComponent(a[2])}catch(t){return null}return null}};e.default=a},function(t,e,n){"use strict";function a(t){s||n(9)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(6),o=n.n(i),r=n(8),s=!1,c=n(2),l=a,d=c(o.a,r.a,l,"data-v-7e69b8b7",null);d.options.__file="src/components/refresh.vue",d.esModule&&Object.keys(d.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),d.options.functional&&console.error("[vue-loader] refresh.vue: functional components are not supported with templates, they should use render functions."),e.default=d.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=weex.requireModule("animation"),i=weex.requireModule("modal");e.default={props:[],data:function(){return{refreshing:!1,loadingAR:[{ref:"lTxt1",p:[-77,-75],delay:0},{ref:"lTxt2",p:[-47,-81],delay:50},{ref:"lTxt3",p:[-15,-88],delay:100},{ref:"lTxt4",p:[12,-90],delay:150},{ref:"lTxt5",p:[-5,-49],delay:200},{ref:"lTxt6",p:[25,-55],delay:250},{ref:"lTxt7",p:[55,-61],delay:300},{ref:"lTxt8",p:[85,-61],delay:350}]}},methods:{loadingAni:function(){for(var t=0;t<this.loadingAR.length;t++)this.shake(this.$refs[this.loadingAR[t].ref],this.loadingAR[t].p[0],this.loadingAR[t].p[1],3,1,200,this.loadingAR[t].delay)},loadingAniDown:function(){for(var t=0;t<this.loadingAR.length;t++)this.shake(this.$refs[this.loadingAR[t].ref],0,0,0,0,200)},shake:function(t,e,n,i,o,r,s){a.transition(t,{styles:{transform:"translate("+(e-0)+"px,"+(n-i*o)+"px)"},duration:500|r,timingFunction:"ease-out",delay:0|s},function(){this.refreshing&&this.shake(t,e,n,i,-1*o)}.bind(this))},onrefresh:function(t){var e=this;i.toast({message:"refresh",duration:1}),this.loadingAni(),this.refreshing=!0,setTimeout(function(){e.refreshing=!1,e.loadingAniDown()},1300)},onpullingdown:function(t){}}}},function(t,e,n){e=t.exports=n(0)(),e.push([t.i,'\n.u-refresh[data-v-7e69b8b7]{\n    height: 170px;\n    width: 750px;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: center;\n}\n.loading-bg[data-v-7e69b8b7]{\n    position: absolute;\n    left: 250px;\n    margin-top: 40px;\n    width: 250px;\n    height: 120px;\n}\n.l-txt-box[data-v-7e69b8b7]{\n    height: 106px;\n    width: 200px;\n    overflow: hidden;\n}\n.l-txt[data-v-7e69b8b7]{\n    height: 30px;\n    width: 30px;\n    font-size: 25px;\n    position: absolute;\n    top: 105px;\n    left: 87px;\n    color:#666;\n}\n.box[data-v-7e69b8b7]{margin-top:50px;width:100px;height:70px;transform-style:preserve-3d; transform:rotateX(-10deg) scale(0.7) ;perspective:300px;\n}\n.t[data-v-7e69b8b7]{position:absolute;width:100px;height:70px;background-color:#e6d7c9;\n}\n.top-1[data-v-7e69b8b7]{ height:100px;transform:rotateX(90deg) rotateY(20deg);left:-50px; background: none;\n}\n.g1[data-v-7e69b8b7]{width: 50%;height: 100%;background:#e6d7c9;\n}\n.top-2[data-v-7e69b8b7]{ height:100px;transform:rotateX(90deg) rotateY(160deg);left:50px; background: none;\n}\n.bottom[data-v-7e69b8b7]{ height:100px;transform:rotateX(-90deg) translateZ(70px);background-color: #dbc8b8;\n}\n.left[data-v-7e69b8b7]{transform:rotateY(-90deg) translateZ(50px) translateY(50px);background-color: #dbc8b8;\n}\n.right[data-v-7e69b8b7]{transform:rotateY(90deg) translateZ(50px) translateY(50px);background-color: #dbc8b8;\n}\n.back[data-v-7e69b8b7]{transform:rotateY(180deg) translateZ(50px) translateY(50px); background-color: #cdb69e;\n}\n.front[data-v-7e69b8b7]{transform:translateZ(50px) translateY(50px);\n}\n.box-txt[data-v-7e69b8b7]{text-align:center;line-height:70px;font-size:30px;font-family: "\\6977\\4F53","\\6977\\4F53_GB2312";color:#a49a6f;\n}\n\n',""])},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("refresh",{staticClass:"u-refresh",attrs:{display:t.refreshing?"show":"hide"},on:{refresh:t.onrefresh,pullingdown:t.onpullingdown}},[n("image",{staticClass:"loading-bg",attrs:{resize:"contain",src:"http://doc.zwwill.com/yanxuan/imgs/yxbox-bg.png?v5"}}),t._v(" "),n("div",{staticClass:"l-txt-box"},[n("text",{ref:"lTxt1",staticClass:"l-txt l-txt-1"},[t._v("好")]),t._v(" "),n("text",{ref:"lTxt2",staticClass:"l-txt l-txt-2"},[t._v("的")]),t._v(" "),n("text",{ref:"lTxt3",staticClass:"l-txt l-txt-3"},[t._v("生")]),t._v(" "),n("text",{ref:"lTxt4",staticClass:"l-txt l-txt-4"},[t._v("活")]),t._v(" "),n("text",{ref:"lTxt5",staticClass:"l-txt l-txt-5"},[t._v("没")]),t._v(" "),n("text",{ref:"lTxt6",staticClass:"l-txt l-txt-6"},[t._v("那")]),t._v(" "),n("text",{ref:"lTxt7",staticClass:"l-txt l-txt-7"},[t._v("么")]),t._v(" "),n("text",{ref:"lTxt8",staticClass:"l-txt l-txt-8"},[t._v("贵")])])])},i=[];a._withStripped=!0;var o={render:a,staticRenderFns:i};e.a=o},function(t,e,n){var a=n(7);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(1)("5a6e010e",a,!1)},function(t,e,n){"use strict";function a(t){s||n(26)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(14),o=n.n(i),r=n(22),s=!1,c=n(2),l=a,d=c(o.a,r.a,l,"data-v-5c3d98b8",null);d.options.__file="src/components/Block1.vue",d.esModule&&Object.keys(d.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),d.options.functional&&console.error("[vue-loader] Block1.vue: functional components are not supported with templates, they should use render functions."),e.default=d.exports},function(t,e,n){"use strict";function a(t){s||n(27)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(15),o=n.n(i),r=n(23),s=!1,c=n(2),l=a,d=c(o.a,r.a,l,"data-v-5c59c7ba",null);d.options.__file="src/components/Block3.vue",d.esModule&&Object.keys(d.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),d.options.functional&&console.error("[vue-loader] Block3.vue: functional components are not supported with templates, they should use render functions."),e.default=d.exports},function(t,e,n){"use strict";function a(t){s||n(29)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(16),o=n.n(i),r=n(25),s=!1,c=n(2),l=a,d=c(o.a,r.a,l,"data-v-eff83cfe",null);d.options.__file="src/components/Header.vue",d.esModule&&Object.keys(d.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),d.options.functional&&console.error("[vue-loader] Header.vue: functional components are not supported with templates, they should use render functions."),e.default=d.exports},,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(4),i=function(t){return t&&t.__esModule?t:{default:t}}(a),o=weex.requireModule("navigator");e.default={props:["title","items"],data:function(){return{}},methods:{jumpWeb:function(t){if(t){var e=this.$getConfig().bundleUrl;o.push({url:i.default.setBundleUrl(e,"page/web.js?weburl="+t),animated:"true"})}}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(4),i=function(t){return t&&t.__esModule?t:{default:t}}(a),o=weex.requireModule("navigator");e.default={props:["newGoods","hotGoods","head","hasMore","goods"],data:function(){return{}},methods:{jumpWeb:function(t){t||(t="http%3A%2F%2Fm.you.163.com%2Fitem%2Fdetail%3Fid%3D1009024%23%2F%3F_k%3Dfakdg7");var e=this.$getConfig().bundleUrl;o.push({url:i.default.setBundleUrl(e,"page/web.js?weburl="+t),animated:"true"})}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}},created:function(){},methods:{}}},,function(t,e,n){e=t.exports=n(0)(),e.push([t.i,"\n.iconfont[data-v-5c3d98b8] {\n    font-family:iconfont;\n}\n.wrapper[data-v-5c3d98b8]{\n    background-color: #fff;\n    padding-bottom: 6px;\n}\n.tlt[data-v-5c3d98b8]{\n    text-align: center;\n    font-size: 30px;\n    margin-top: 30px;\n    margin-bottom: 26px;\n    color:#333;\n}\n.box[data-v-5c3d98b8]{\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    width: 750px;\n}\n.box-item[data-v-5c3d98b8]{\n    width: 350px;\n    height: 226px;\n    margin: 5px;\n    padding: 20px;\n    background-color: #efefef;\n}\n.i-name[data-v-5c3d98b8]{\n    position: relative;\n    color:#333;\n    font-size: 28px;\n    width: 300px;\n}\n.i-price[data-v-5c3d98b8]{\n    position: relative;\n    margin-top: 10px;\n    display: flex;\n    flex-direction: row;\n}\n.i-price-n[data-v-5c3d98b8]{\n    color:#333;\n    font-size: 36px;\n}\n.i-price-t[data-v-5c3d98b8]{\n    color:#333;\n    font-size: 24px;\n    margin-top: 12px;\n}\n.i-state[data-v-5c3d98b8]{\n    position: relative;\n    font-size: 20px;\n    color:#b8a989;\n    width: 70px;\n    margin-top: 10px;\n    padding: 5px;\n    line-height: 20px;\n    text-align: center;\n    border-width: 1px;\n    border-color: #b8a989;\n    border-radius: 4px;\n}\n.i-image[data-v-5c3d98b8]{\n    position: absolute;\n    top:0;\n    left: 0;\n    width: 350px;\n    height: 226px;\n}\n",""])},function(t,e,n){e=t.exports=n(0)(),e.push([t.i,"\n.iconfont[data-v-5c59c7ba] {\n    font-family:iconfont;\n}\n.wrapper[data-v-5c59c7ba]{\n    background-color: #fff;\n    padding-bottom: 10px;\n    padding-top: 26px;\n    width: 750px;\n}\n.tlt[data-v-5c59c7ba]{\n    text-align: center;\n    color:#333;\n    width: 750px;\n    padding: 10px;\n    font-size: 30px;\n}\n.gb-box[data-v-5c59c7ba]{\n    padding: 16px;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: space-between;\n}\n.i-gd[data-v-5c59c7ba]{\n    width: 350px;\n    height: 510px;\n    margin-bottom: 20px;\n}\n.gd-img[data-v-5c59c7ba]{\n    width: 350px;\n    height: 350px;\n    background-color: #f4f4f4;\n}\n.gd-tlt[data-v-5c59c7ba]{\n    font-size: 28px;\n    color:#333;\n    width: 350px;\n    margin-top: 15px;\n    overflow: hidden;\n    lines:1;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n}\n.gd-info[data-v-5c59c7ba]{\n    display: block;\n    font-size: 28px;\n    width: 350px;\n    height: 65px;\n    padding-left: 10px;\n    padding-right: 10px;\n    padding-top: 15px;\n    padding-bottom: 15px;\n    color:#9F8A60;\n    background-color: #F1ECE2;\n    overflow: hidden;\n    lines:1;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n}\n.gd-price[data-v-5c59c7ba]{\n    font-size: 28px;\n    width: 350px;\n    margin-top: 10px;\n    color:#b4282d;\n    overflow: hidden;\n    lines:1;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n}\n",""])},,function(t,e,n){e=t.exports=n(0)(),e.push([t.i,"\n.iconfont[data-v-eff83cfe] {\n    font-family:iconfont;\n}\n.wrapper[data-v-eff83cfe]{\n    position: fixed;\n    top: 0;\n    left: 0;right: 0;\n    height: 114px;\n    padding-top: 44px;\n    display:flex;\n    flex-wrap: nowrap;\n    flex-direction: row;\n    justify-content: space-around;\n    z-index: 101;\n    background-color: #fafafa;\n    opacity: .99;\n}\n.scan[data-v-eff83cfe],.notice[data-v-eff83cfe]{\n    height: 80px;\n    width: 96px\n}\n.ic[data-v-eff83cfe],.txt[data-v-eff83cfe],.search[data-v-eff83cfe]{\n    text-align: center;\n    color:#666;\n    font-weight: 300;\n}\n.ic[data-v-eff83cfe]{\n    font-size: 32px;\n}\n.txt[data-v-eff83cfe]{\n    font-size: 18px;\n}\n.search[data-v-eff83cfe] {\n    flex: 1;\n    height: 60px;\n    font-size: 26px;\n    padding-top: 13px;\n    background-color: #ededed;\n    border-radius: 8px;\n}\n",""])},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("text",{staticClass:"tlt iconfont"},[t._v(t._s(t.title)+" ")]),t._v(" "),n("div",{staticClass:"box"},t._l(t.items,function(e){return n("div",{staticClass:"box-item",on:{click:function(n){t.jumpWeb(e.url)}}},[n("image",{staticClass:"i-image",attrs:{resize:"cover",src:e.bg}}),t._v(" "),n("text",{staticClass:"i-name"},[t._v(t._s(e.name))]),t._v(" "),n("div",{staticClass:"i-price"},[n("text",{staticClass:"i-price-n"},[t._v(t._s(e.price))]),n("text",{staticClass:"i-price-t"},[t._v("元起")])]),t._v(" "),e.state?n("text",{staticClass:"i-state"},[t._v(t._s(e.state))]):t._e()])}))])},i=[];a._withStripped=!0;var o={render:a,staticRenderFns:i};e.a=o},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("text",{staticClass:"tlt"},[t._v("猜你喜欢")]),t._v(" "),n("div",{staticClass:"gb-box"},t._l(t.goods,function(e){return n("div",{staticClass:"i-gd",on:{click:function(n){t.jumpWeb(e.url)}}},[n("image",{staticClass:"gd-img",attrs:{resize:"cover",src:e.img}}),t._v(" "),n("text",{staticClass:"gd-info"},[t._v(t._s(e.info))]),t._v(" "),n("text",{staticClass:"gd-tlt"},[t._v(t._s(e.tlt))]),t._v(" "),n("text",{staticClass:"gd-price"},[t._v("¥"+t._s(e.price))])])}))])},i=[];a._withStripped=!0;var o={render:a,staticRenderFns:i};e.a=o},,function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("div",{staticClass:"scan"},[n("text",{staticClass:"ic iconfont"},[t._v("")]),t._v(" "),n("text",{staticClass:"txt"},[t._v("扫一扫")])]),t._v(" "),n("text",{staticClass:"search iconfont"},[t._v(" 搜索商品，共8888款好物")]),t._v(" "),n("div",{staticClass:"notice"},[n("text",{staticClass:"ic iconfont"},[t._v("")]),t._v(" "),n("text",{staticClass:"txt"},[t._v("消息")])])])},i=[];a._withStripped=!0;var o={render:a,staticRenderFns:i};e.a=o},function(t,e,n){var a=n(18);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(1)("42956db8",a,!1)},function(t,e,n){var a=n(19);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(1)("422ea971",a,!1)},,function(t,e,n){var a=n(21);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(1)("37c7a166",a,!1)},function(t,e,n){"use strict";function a(t){s||n(60)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(37),o=n.n(i),r=n(53),s=!1,c=n(2),l=a,d=c(o.a,r.a,l,"data-v-5c4bb039",null);d.options.__file="src/components/Block2.vue",d.esModule&&Object.keys(d.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),d.options.functional&&console.error("[vue-loader] Block2.vue: functional components are not supported with templates, they should use render functions."),e.default=d.exports},,,,function(t,e,n){"use strict";function a(t){s||n(58)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(41),o=n.n(i),r=n(51),s=!1,c=n(2),l=a,d=c(o.a,r.a,l,"data-v-2f614198",null);d.options.__file="src/components/YXSlider.vue",d.esModule&&Object.keys(d.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),d.options.functional&&console.error("[vue-loader] YXSlider.vue: functional components are not supported with templates, they should use render functions."),e.default=d.exports},,function(t,e,n){"use strict";function a(t){s||n(59)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(43),o=n.n(i),r=n(52),s=!1,c=n(2),l=a,d=c(o.a,r.a,l,"data-v-4ff4337c",null);d.options.__file="src/components/topChannel.vue",d.esModule&&Object.keys(d.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),d.options.functional&&console.error("[vue-loader] topChannel.vue: functional components are not supported with templates, they should use render functions."),e.default=d.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(4),i=function(t){return t&&t.__esModule?t:{default:t}}(a),o=weex.requireModule("navigator");e.default={props:["newGoods","hotGoods","head","hasMore","goods"],data:function(){return{}},methods:{jumpWeb:function(t){if(t){var e=this.$getConfig().bundleUrl;o.push({url:i.default.setBundleUrl(e,"page/web.js?weburl="+t),animated:"true"})}}}}},,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["imageList"],data:function(){return{}},methods:{onchange:function(t){}}}},,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=(weex.requireModule("dom"),weex.requireModule("animation"));weex.requireModule("modal");e.default={data:function(){return{jLPosition:"left:30px;width:82px;"}},mounted:function(){},methods:{initJLine:function(){this.$refs.actJC},chooseChannel:function(t){var e=t.target,n=e.offsetLeft||0,i=e.offsetWidth||0;i<=0||a.transition(this.$refs.jcLine,{styles:{left:n+30+"px",width:i-60+"px"},duration:300,timingFunction:"ease",delay:0},function(){})}}}},function(t,e,n){e=t.exports=n(0)(),e.push([t.i,"\n.iconfont[data-v-2f614198] {\n    font-family:iconfont;\n}\n.image[data-v-2f614198] {\n    width: 750px;\n    height: 430px;\n}\n.slider[data-v-2f614198] {\n    width: 750px;\n    height: 430px;\n}\n.frame[data-v-2f614198] {\n    width: 750px;\n    height: 430px;\n    position: relative;\n}\n.indicator[data-v-2f614198] {\n    width: 750px;\n    height: 40px;\n    item-color: white;\n    item-selected-color: #b4282d;\n    item-size: 12px;\n    position: absolute;\n    bottom: 10px;\n    right: 0px;\n}\n",""])},function(t,e,n){e=t.exports=n(0)(),e.push([t.i,"\n.iconfont[data-v-4ff4337c] {\n    font-family:iconfont;\n}\n.wrapper[data-v-4ff4337c]{\n    position: fixed;\n    top: 114px;\n    left: 0;right: 0;\n    height: 54px;\n    z-index: 10;\n    background-color: #fafafa;\n    border-bottom-width: 1px;\n    border-bottom-color: #d9d9d9;\n}\n.scroller[data-v-4ff4337c]{\n    height: 54px;\n}\n.i-c[data-v-4ff4337c]{\n    padding-top:10px;\n    padding-left: 45px;\n    padding-right: 45px;\n    padding-bottom:6px;\n    font-size: 26px;\n    color:#333;\n}\n.c-act[data-v-4ff4337c]{\n    color:#b4282d;\n}\n.j-uline[data-v-4ff4337c]{\n    position: absolute;\n    left: 30px;\n    bottom: 0;\n    width: 82px;\n    height: 4px;\n    background-color: #b4282d;\n}\n.more[data-v-4ff4337c]{\n    position: absolute;\n    top:0;\n    right:0;\n    height: 52px;\n    width: 100px;\n    background-color: #fafafa;\n    text-align: center;\n    padding-top: 10px;\n    opacity: 0.96;\n    box-shadow:-6px -4px 4px #fafafa;\n}\n",""])},function(t,e,n){e=t.exports=n(0)(),e.push([t.i,"\n.iconfont[data-v-5c4bb039] {\n    font-family:iconfont;\n}\n.wrapper[data-v-5c4bb039]{\n    background-color: #fff;\n    padding-bottom: 6px;\n}\n.tlt-box[data-v-5c4bb039]{\n    height: 260px;\n    width: 750px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.tlt[data-v-5c4bb039]{\n    margin-top: 76px;\n    text-align: center;\n    font-size: 34px;\n    color:#8BA0B6;\n}\n.tlt-hot[data-v-5c4bb039]{\n    color:#B4A078;\n}\n.btn-all[data-v-5c4bb039]{\n    text-align: center;\n    font-size: 26px;\n    width: 220px;\n    padding: 10px;\n    margin-top: 20px;\n    color:#8BA0B6;\n    border-radius: 4px;\n    background-color: #D8E5F1;\n}\n.btn-hot[data-v-5c4bb039]{\n    color:#B4A078;\n    background-color: #F4E9CB;\n}\n.tlt-image[data-v-5c4bb039]{\n    position: absolute;\n    top:0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n}\n.box[data-v-5c4bb039]{\n    width: 750px;\n    height: 500px;\n    padding-top: 30px;\n    padding-bottom: 30px;\n    padding-left: 15px;\n    padding-right: 15px;\n}\n.i-good[data-v-5c4bb039]{\n    padding-left: 15px;\n    padding-right: 15px;\n}\n.gd-img[data-v-5c4bb039]{\n    height: 286px;\n    width: 286px;\n    background-color: #f4f4f4;\n}\n.gd-tlt[data-v-5c4bb039]{\n    font-size: 28px;\n    color:#333;\n    width: 286px;\n    margin-top: 16px;\n    overflow: hidden;\n    lines:1;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n}\n.gd-info[data-v-5c4bb039]{\n    display: block;\n    font-size: 24px;\n    width: 286px;\n    margin-top: 8px;\n    color:#7f7f7f;\n    overflow: hidden;\n    lines:1;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n}\n.gd-price[data-v-5c4bb039]{\n    font-size: 28px;\n    width: 286px;\n    margin-top: 16px;\n    color:#b4282d;\n    overflow: hidden;\n    lines:1;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n}\n.gd-more[data-v-5c4bb039]{\n    height: 286px;\n    width: 286px;\n    font-size: 28px;\n    line-height: 40px;\n    border-width: 6px;\n    padding-top: 120px;\n    padding-bottom: 120px;\n    border-color: #f4f4f4;\n    text-align: center;\n}\n",""])},,,,,function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("slider",{staticClass:"slider",attrs:{"auto-play":"true",interval:"5000"},on:{change:t.onchange}},[t._l(t.imageList,function(t){return n("div",{staticClass:"frame"},[n("image",{staticClass:"image",attrs:{resize:"cover",src:t.src}})])}),t._v(" "),n("indicator",{staticClass:"indicator"})],2)},i=[];a._withStripped=!0;var o={render:a,staticRenderFns:i};e.a=o},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("scroller",{staticClass:"scroller",attrs:{"scroll-direction":"horizontal","flex-direction":"row",loadmoreoffset:"750px","show-scrollbar":"false"},on:{click:t.chooseChannel}},[n("div",{ref:"jcLine",staticClass:"j-uline",style:t.jLPosition}),t._v(" "),n("text",{ref:"actJC",staticClass:"i-c c-act",attrs:{jact:"true"}},[t._v("推荐")]),t._v(" "),n("text",{staticClass:"i-c",attrs:{jact:"true"}},[t._v("限时购")]),t._v(" "),n("text",{staticClass:"i-c",attrs:{jact:"true"}},[t._v("新品")]),t._v(" "),n("text",{staticClass:"i-c",attrs:{jact:"true"}},[t._v("居家")]),t._v(" "),n("text",{staticClass:"i-c",attrs:{jact:"true"}},[t._v("餐厨")]),t._v(" "),n("text",{staticClass:"i-c",attrs:{jact:"true"}},[t._v("配件")]),t._v(" "),n("text",{staticClass:"i-c",attrs:{jact:"true"}},[t._v("服装")]),t._v(" "),n("text",{staticClass:"i-c",attrs:{jact:"true"}},[t._v("电器")]),t._v(" "),n("text",{staticClass:"i-c",attrs:{jact:"true"}},[t._v("洗护")]),t._v(" "),n("text",{staticClass:"i-c",attrs:{jact:"true"}},[t._v("杂货")]),t._v(" "),n("text",{staticClass:"i-c",attrs:{jact:"true"}},[t._v("饮食")]),t._v(" "),n("text",{staticClass:"i-c",attrs:{jact:"true"}},[t._v("婴童")]),t._v(" "),n("text",{staticClass:"i-c",attrs:{jact:"true"}},[t._v("志趣")])]),t._v(" "),n("text",{staticClass:"more iconfont"},[t._v("")])],1)},i=[];a._withStripped=!0;var o={render:a,staticRenderFns:i};e.a=o},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[t.newGoods?n("div",{staticClass:"tlt-box"},[n("image",{staticClass:"tlt-image",attrs:{resize:"cover",src:"http://doc.zwwill.com/yanxuan/imgs/bg-new.png"}}),t._v(" "),n("text",{staticClass:"tlt tlt-new"},[t._v(t._s(t.head.tlt))]),t._v(" "),n("text",{staticClass:"btn-all btn-new",on:{click:function(e){t.jumpWeb(t.head.url)}}},[t._v("查看全部 >")])]):t.hotGoods?n("div",{staticClass:"tlt-box"},[n("image",{staticClass:"tlt-image",attrs:{resize:"cover",src:"http://doc.zwwill.com/yanxuan/imgs/bg-hot.png"}}),t._v(" "),n("text",{staticClass:"tlt tlt-hot"},[t._v(t._s(t.head.tlt))]),t._v(" "),n("text",{staticClass:"btn-all btn-hot",on:{click:function(e){t.jumpWeb(t.head.url)}}},[t._v("查看全部 >")])]):t._e(),t._v(" "),n("scroller",{staticClass:"box",attrs:{"scroll-direction":"horizontal","flex-direction":"row","show-scrollbar":"false"}},[t._l(t.goods,function(e){return n("div",{staticClass:"i-good"},[n("image",{staticClass:"gd-img",attrs:{resize:"cover",src:e.img}}),t._v(" "),n("text",{staticClass:"gd-tlt"},[t._v(t._s(e.tlt))]),t._v(" "),n("text",{staticClass:"gd-info"},[t._v(t._s(e.info))]),t._v(" "),n("text",{staticClass:"gd-price"},[t._v("¥"+t._s(e.price))])])}),t._v(" "),t.hasMore?n("div",{staticClass:"i-good"},[n("text",{staticClass:"gd-more"},[t._v("查看全部")])]):t._e()],2)],1)},i=[];a._withStripped=!0;var o={render:a,staticRenderFns:i};e.a=o},,,,,function(t,e,n){var a=n(44);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(1)("2aabd791",a,!1)},function(t,e,n){var a=n(45);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(1)("0fedcefc",a,!1)},function(t,e,n){var a=n(46);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(1)("fe82a3b2",a,!1)},,,,,,,function(t,e,n){"use strict";function a(t){s||n(93)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(73),o=n.n(i),r=n(86),s=!1,c=n(2),l=a,d=c(o.a,r.a,l,"data-v-6c1c39b5",null);d.options.__file="src/views/home.vue",d.esModule&&Object.keys(d.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),d.options.functional&&console.error("[vue-loader] home.vue: functional components are not supported with templates, they should use render functions."),e.default=d.exports},,,,,,function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(4),o=a(i),r=n(12),s=a(r),c=n(5),l=a(c),d=n(36),p=a(d),u=n(34),f=a(u),x=n(10),g=a(x),h=n(30),v=a(h),b=n(11),m=a(b),_=weex.requireModule("navigator");e.default={components:{"home-header":s.default,refresher:l.default,"top-channel":p.default,"yx-slider":f.default,"block-1":g.default,"block-2":v.default,"block-3":m.default},data:function(){return{YXBanners:[{title:"",src:"http://doc.zwwill.com/yanxuan/imgs/banner-1.jpg"},{title:"",src:"http://doc.zwwill.com/yanxuan/imgs/banner-2.jpg"},{title:"",src:"http://doc.zwwill.com/yanxuan/imgs/banner-3.jpg"},{title:"",src:"http://doc.zwwill.com/yanxuan/imgs/banner-4.jpg"},{title:"",src:"http://doc.zwwill.com/yanxuan/imgs/banner-5.jpg"},{title:"",src:"http://doc.zwwill.com/yanxuan/imgs/banner-6.jpg"}],block1:{title:"品牌制造商直供",items:[{name:"新秀丽制造商",price:"59",state:"上新",bg:"http://doc.zwwill.com/yanxuan/imgs/ppbg-1.jpg",url:"http%3A%2F%2Fm.you.163.com%2Fitem%2Fmanufacturer%3FtagId%3D1001037%26page%3D1%26size%3D100"},{name:"MUJI制造商",price:"12.9",state:"上新",bg:"http://doc.zwwill.com/yanxuan/imgs/ppbg-2.jpg",url:"http%3A%2F%2Fm.you.163.com%2Fitem%2Fmanufacturer%3FtagId%3D1001000%26page%3D1%26size%3D100"},{name:"CK制造商",price:"29",state:"上新",bg:"http://doc.zwwill.com/yanxuan/imgs/ppbg-3.jpg",url:"http%3A%2F%2Fm.you.163.com%2Fitem%2Fmanufacturer%3FtagId%3D1026000%26page%3D1%26size%3D100"},{name:"Adidas制造商",price:"29",bg:"http://yanxuan.nosdn.127.net/75523d4274d85825ece16370cdb1693f.jpg",url:"http%3A%2F%2Fm.you.163.com%2Fitem%2Fmanufacturer%3FtagId%3D1001003%26page%3D1%26size%3D100"}]},head1:{tlt:"周一周四 · 新品发布",tltBg:"http://doc.zwwill.com/yanxuan/imgs/bg-new.png",url:"http://m.you.163.com/item/newItem"},goods1:[{tlt:"切尔西牛皮女靴",img:"http://yanxuan.nosdn.127.net/0e9ddf1a0ed5af78e8ec12cb9489df17.png?imageView&quality=85&thumbnail=330x330",info:"经典牛皮切尔西，时尚帅气",price:"289"},{tlt:"小馒头 多色双肩包",img:"http://yanxuan.nosdn.127.net/455eee1712358dbcb2e33d54ab287808.png?imageView&quality=85&thumbnail=330x330",info:"奶油色泽，小巧减龄",price:"79"},{tlt:"全棉色织磨毛四件套",img:"http://yanxuan.nosdn.127.net/3e1c00ce7b49a78e645538a8c45cabcb.png?imageView&quality=85&thumbnail=330x330",info:"优雅色织，温暖磨毛",price:"299"},{tlt:"日式和风声波式电动牙刷",img:"http://yanxuan.nosdn.127.net/e5474a8f4fd5748079e2ba2ead806b51.png?imageView&quality=85&thumbnail=330x330",info:"进口刷毛，专利技术",price:"119"},{tlt:"多功能商务双肩包",img:"http://yanxuan.nosdn.127.net/795884dc6d995eca9a091a6358e3634d.png?imageView&quality=85&thumbnail=330x330",info:"17个功能分区，内置分层收纳",price:"334"},{tlt:"黑凤梨 20寸PC膜拉链登机箱",img:"http://yanxuan.nosdn.127.net/3108aaae80416b1cf27c3d7cc5661cea.png?imageView&quality=85&thumbnail=330x330",info:"热卖9万只，网易人手1只",price:"185"}],head2:{tlt:"人气推荐 · 好物精选",tltBg:"http://doc.zwwill.com/yanxuan/imgs/bg-hot.png",url:"http://m.you.163.com/item/recommend"},goods2:[{tlt:"日式蓬软太鼓抱枕",img:"http://yanxuan.nosdn.127.net/ad953e16ad8c33b714e7af941ce8cd56.png?imageView&quality=85&thumbnail=330x330",info:"萌趣太鼓造型 软糯轻柔回弹",price:"29"},{tlt:"可水洗抗菌防螨丝羽绒枕",img:"http://yanxuan.nosdn.127.net/a6c9e142fd008b3734c690a71a78ae5b.png?imageView&quality=85&thumbnail=330x330",info:"进口防螨布，热销50万件",price:"99"},{tlt:"双宫茧桑蚕丝被 空调被",img:"http://yanxuan.nosdn.127.net/6b341648f59d0c3eb48fa81e1d2de06e.png?imageView&quality=85&thumbnail=330x330",info:"一级桑蚕丝，吸湿透气柔软",price:"479"},{tlt:"怀抱休闲椅组合（皮款）",img:"http://yanxuan.nosdn.127.net/b5289125e9b55cf72e9a9623d006415e.png?imageView&quality=85&thumbnail=330x330",info:"葛优躺神器皮款",price:"3999"},{tlt:"欧式哑光餐具套装",img:"http://yanxuan.nosdn.127.net/431e86c88b4a6c9f065d1d8abea6b603.png?imageView&quality=85&thumbnail=330x330",info:"德化白瓷，坚实耐用",price:"189"},{tlt:"清新两用杯",img:"http://yanxuan.nosdn.127.net/431f5d142e3dd9946dc8e38c2aa3cd34.png?imageView&quality=85&thumbnail=330x330",info:"办公杯优选 轻松饮茶",price:"52"},{tlt:"两带式男/女款拖鞋",img:"http://yanxuan.nosdn.127.net/7d1c130c7d80edf824e4218c6829b7c8.png?imageView&quality=85&thumbnail=330x330",info:"鞋杯随脚型而变，舒适呵护",price:"69.9"}],goods3:[{tlt:"日式和风敞口保温杯",img:"http://yanxuan.nosdn.127.net/3aa67fee1c7d046a09f4ce878f4485ac.png?imageView&quality=85&thumbnail=330x330",info:"真空隔热，保温保冷",price:"32"},{tlt:"切尔西牛皮女靴",img:"http://yanxuan.nosdn.127.net/0e9ddf1a0ed5af78e8ec12cb9489df17.png?imageView&quality=85&thumbnail=330x330",info:"经典牛皮切尔西，时尚帅气",price:"289"},{tlt:"小馒头 多色双肩包",img:"http://yanxuan.nosdn.127.net/455eee1712358dbcb2e33d54ab287808.png?imageView&quality=85&thumbnail=330x330",info:"奶油色泽，小巧减龄",price:"79"},{tlt:"全棉色织磨毛四件套",img:"http://yanxuan.nosdn.127.net/3e1c00ce7b49a78e645538a8c45cabcb.png?imageView&quality=85&thumbnail=330x330",info:"优雅色织，温暖磨毛",price:"299"},{tlt:"日式和风声波式电动牙刷",img:"http://yanxuan.nosdn.127.net/e5474a8f4fd5748079e2ba2ead806b51.png?imageView&quality=85&thumbnail=330x330",info:"进口刷毛，专利技术",price:"119"},{tlt:"多功能商务双肩包",img:"http://yanxuan.nosdn.127.net/795884dc6d995eca9a091a6358e3634d.png?imageView&quality=85&thumbnail=330x330",info:"17个功能分区，内置分层收纳",price:"334"},{tlt:"黑凤梨 20寸PC膜拉链登机箱",img:"http://yanxuan.nosdn.127.net/3108aaae80416b1cf27c3d7cc5661cea.png?imageView&quality=85&thumbnail=330x330",info:"热卖9万只，网易人手1只",price:"185"},{tlt:"日式蓬软太鼓抱枕",img:"http://yanxuan.nosdn.127.net/ad953e16ad8c33b714e7af941ce8cd56.png?imageView&quality=85&thumbnail=330x330",info:"萌趣太鼓造型 软糯轻柔回弹",price:"29"},{tlt:"可水洗抗菌防螨丝羽绒枕",img:"http://yanxuan.nosdn.127.net/a6c9e142fd008b3734c690a71a78ae5b.png?imageView&quality=85&thumbnail=330x330",info:"进口防螨布，热销50万件",price:"99"},{tlt:"双宫茧桑蚕丝被 空调被",img:"http://yanxuan.nosdn.127.net/6b341648f59d0c3eb48fa81e1d2de06e.png?imageView&quality=85&thumbnail=330x330",info:"一级桑蚕丝，吸湿透气柔软",price:"479"},{tlt:"怀抱休闲椅组合（皮款）",img:"http://yanxuan.nosdn.127.net/b5289125e9b55cf72e9a9623d006415e.png?imageView&quality=85&thumbnail=330x330",info:"葛优躺神器皮款",price:"3999"},{tlt:"欧式哑光餐具套装",img:"http://yanxuan.nosdn.127.net/431e86c88b4a6c9f065d1d8abea6b603.png?imageView&quality=85&thumbnail=330x330",info:"德化白瓷，坚实耐用",price:"189"},{tlt:"清新两用杯",img:"http://yanxuan.nosdn.127.net/431f5d142e3dd9946dc8e38c2aa3cd34.png?imageView&quality=85&thumbnail=330x330",info:"办公杯优选 轻松饮茶",price:"52"},{tlt:"两带式男/女款拖鞋",img:"http://yanxuan.nosdn.127.net/7d1c130c7d80edf824e4218c6829b7c8.png?imageView&quality=85&thumbnail=330x330",info:"鞋杯随脚型而变，舒适呵护",price:"69.9"}]}},created:function(){o.default.initIconFont()},methods:{jumpWeb:function(t){var e=this.$getConfig().bundleUrl;_.push({url:o.default.setBundleUrl(e,"page/web.js?weburl="+t),animated:"true"})},test:function(){modal.toast({message:"test",duration:.3})}}}},,,,,,,function(t,e,n){e=t.exports=n(0)(),e.push([t.i,"\n.iconfont[data-v-6c1c39b5] {\n    font-family:iconfont;\n}\n.wrapper[data-v-6c1c39b5]{\n}\n.main-list[data-v-6c1c39b5]{\n    position: fixed;\n    top: 168px;\n    bottom: 90px;\n    left: 0;\n    right: 0;\n    /*margin-top: 167px;*/\n    /*margin-bottom: 90px;*/\n}\n.cell-button[data-v-6c1c39b5]{\n    padding-bottom: 18px;\n}\n.slogan[data-v-6c1c39b5]{\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    background-color: #fff;\n}\n.i-slg[data-v-6c1c39b5]{\n    height: 66px;\n    font-size: 26px;\n    padding-top: 16px;\n    flex: 1;\n    text-align: center;\n    color: #b4282d;\n}\n\n",""])},,,,,,function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("home-header"),t._v(" "),n("top-channel"),t._v(" "),n("scroller",{staticClass:"main-list"},[n("refresher"),t._v(" "),n("div",{staticClass:"cell-button",on:{click:function(e){t.jumpWeb("https://m.you.163.com/act/pub/DxDpYNfbBd.html")}}},[n("yx-slider",{attrs:{imageList:t.YXBanners}}),t._v(" "),n("div",{staticClass:"slogan"},[n("text",{staticClass:"i-slg iconfont"},[t._v(" 网易自营品牌")]),t._v(" "),n("text",{staticClass:"i-slg iconfont"},[t._v(" 30天无忧退货")]),t._v(" "),n("text",{staticClass:"i-slg iconfont"},[t._v(" 48小时快速退款")])])],1),t._v(" "),n("div",{staticClass:"cell-button"},[n("block-1",{attrs:{title:t.block1.title,items:t.block1.items}})],1),t._v(" "),n("div",{staticClass:"cell-button"},[n("block-2",{attrs:{hasMore:"true",newGoods:"true",head:t.head1,goods:t.goods1}})],1),t._v(" "),n("div",{staticClass:"cell-button"},[n("block-2",{attrs:{hasMore:"true",hotGoods:"true",head:t.head2,goods:t.goods2}})],1),t._v(" "),n("div",{staticClass:"cell-button"},[n("block-3",{attrs:{goods:t.goods3}})],1)],1)],1)},i=[];a._withStripped=!0;var o={render:a,staticRenderFns:i};e.a=o},,,,,,,function(t,e,n){var a=n(80);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(1)("0cb465e5",a,!1)},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";var a=n(67);a.el="#root",new Vue(a)}]);