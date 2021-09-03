!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.jsbridge=t():e.jsbridge=t()}(window,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var u=t[n]={i:n,l:!1,exports:{}};return e[n].call(u.exports,u,u.exports,r),u.l=!0,u.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)r.d(n,u,function(t){return e[t]}.bind(null,u));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=5)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(r(6)),u=i(r(7));function i(e){return e&&e.__esModule?e:{default:e}}var o=i(r(1)).default.isWeex?u.default:n.default;t.default=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="";try{n="undefined"!=typeof weex?weex.config.env.externalUserAgent||"":window.__weex_config__.config.env.externalUserAgent||""}catch(e){}var u=navigator.userAgent,i=/weex/i.test(u),o=/iphone|ipad|ipod|ios/i.test(u),a=/android/i.test(u),f=o||a;t.default={isWeex:i,ua:u+" "+n,isIOS:o,isAndroid:a,isMobile:f,isPC:!f,isOKApp:/OKApp/i.test(u+" "+n)}},,,,function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u=s(r(0)),i=s(r(8)),o=s(r(9)),a=s(r(10)),f=s(r(11)),d=s(r(12)),c=s(r(13)),l=s(r(1));function s(e){return e&&e.__esModule?e:{default:e}}var v=n({},i.default,{navigation:o.default,clipboard:a.default,share:f.default,img:d.default,sense:c.default,env:l.default,executorType:u.default.type});t.default=v},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u=function(e){return e&&e.__esModule?e:{default:e}}(r(1));var i=0;function o(){return"jsbridge_cb_"+i++}var a={type:"web",execute:function(e){if(!u.default.isOKApp)return Promise.reject();var t=o(),r=o();return new Promise(function(i,o){window[t]=function(e){i(e),delete window[t]},window[r]=function(e){o(e),delete window[r]},u.default.isAndroid?prompt(JSON.stringify(n({},e,{success:t,fail:r}))):window.webkit.messageHandlers.JShandle.postMessage(n({},e,{success:t,fail:r}))})}};t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(r(1));var u={execute:function(e,t,r){r()}};if(n.default.isWeex)try{u=r(!function(){var e=new Error("Cannot find module '@weex-module/jsbridge'");throw e.code="MODULE_NOT_FOUND",e}())}catch(e){}var i={type:"weex",execute:function(e){return n.default.isOKApp?(e.success="success",e.fail="fail",new Promise(function(t,r){u.execute(e,function(e){t(e)},function(e){r(e)})})):Promise.reject()}};t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(r(0)),u=i(r(1));function i(e){return e&&e.__esModule?e:{default:e}}t.default={login:function(){return u.default.isOKApp?n.default.execute({uri:"window",method:"nativeLogin"}):new Promise(function(e){window.location.href="/account/login",e()})},getToken:function(){if(u.default.isWeex){return n.default.execute({uri:"request",method:"getToken"})}return new Promise(function(e){if(u.default.isOKApp)if(u.default.isAndroid){var t=window.native.getToken();e(t||"")}else window.iOS.callNative("getToken",function(t){e(t||"")});else e(localStorage.getItem("token"))})},getTK:function(){return n.default.execute({uri:"request",method:"getTK"})},getLocale:function(){var e=u.default.ua.match(/locale(=|\/)\S+/i);if(!e)return"";var t=e[0].replace(/locale(=|\/)/i,"").replace(/-/g,"_");return/^en.*/i.test(t)?"en_US":/^vi.*/i.test(t)?"vi_VN":/^es.*/i.test(t)?"es_ES":/^fr.*/i.test(t)?"fr_FR":/^ru.*/i.test(t)?"ru_RU":/^th.*/i.test(t)?"th_TH":/^zh/i.test(t)?/(tw|hk|hant)/i.test(t)?"zh_HK":"zh_CN":t},getStatusBarHeight:function(){var e=u.default.ua.match(/statusBarHeight\/(\S+)/i);return e?parseInt(e[1],10):0},getWeexConfig:function(e){var t={uri:"request",method:"getWeexConfig",data:{appName:e}};return n.default.execute(t)},getJSBridgeVersion:function(){var e=u.default.ua.match(/jsbridge\/(\S+)/i);return e?e[1]:null},getAppName:function(){var e=u.default.ua.match(/OKApp\/\((\S+)\//i);return e?e[1]:null},getAppVersion:function(){var e=u.default.ua.match(/OKApp\/\((\S+)\/(\S+)\)/i);return e?e[2]:null},getDeviceID:function(){return n.default.execute({uri:"request",method:"getDeviceID"})},getBrokerID:function(){var e=u.default.ua.match(/brokerId\/(\S+)/i);return e?e[1]:null},getBrokerDomain:function(){var e=u.default.ua.match(/brokerDomain\/(\S+)/i);return e?e[1]:null},getOkMeta:function(){var e=void 0;return(e="undefined"!=typeof weex?u.default.isWeex?weex.config.env.okMeta:window.okMeta:u.default.isWeex?window.__weex_config__.config.env.okMeta:window.okMeta)?"string"==typeof e?JSON.parse(""+e):e:{}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(r(0));t.default={close:function(){return n.default.execute({uri:"window",method:"close",data:!0})},nav:function(e){var t={uri:"window",method:"nav",data:e.location};return n.default.execute(t)},openBrowser:function(e){var t={uri:"window",method:"openBrowser",data:e.url};return n.default.execute(t)}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(r(0));t.default={copy:function(e){var t={uri:"request",method:"copy",data:e.text};return n.default.execute(t)}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(r(0));t.default={shareLink:function(e){var t={uri:"request",method:"share",data:e};return n.default.execute(t)},shareImg:function(e){var t={uri:"request",method:"shareImage",data:e};return n.default.execute(t)},shareBase64:function(e){var t={uri:"request",method:"shareImageBase64",data:e};return n.default.execute(t)},shareScreenshot:function(){return n.default.execute({uri:"request",method:"nativeShare"})},hideShareBtn:function(){return n.default.execute({uri:"request",method:"setting",data:{showShareButton:!1}})}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(r(0));t.default={createImageWithMark:function(e){var t={uri:"request",method:"createImageWithMark",data:e};return n.default.execute(t)},createQRCodeImage:function(e){var t={uri:"request",method:"createQRCodeImage",data:e};return n.default.execute(t)}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(r(0)),u=i(r(1));function i(e){return e&&e.__esModule?e:{default:e}}function o(e){if(u.default.isAndroid)return Promise.resolve(e);var t={uri:"request",method:"emitSenseData",data:e};return n.default.execute(t)}function a(e){var t={uri:"request",method:"verify",data:e};return n.default.execute(t)}t.default={init:o,verify:a,sense:function(e){return o(e).then(function(e){return a(e)})}}}]).default});