!function(e){function t(r){if(n[r])return n[r].exports;var s=n[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t,n){"use strict";function r(e,t,n){if(n=n||!0,!e)return"";var s="";if(/string|number|boolean/.test(void 0===e?"undefined":l(e)))return s+="&"+t+"="+(n?encodeURIComponent(e):e);for(var i in e){var o=t?t+"["+i+"]":i;s+=r(e[i],o,n)}return s}function s(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),n=window.location.search.substr(1).match(t);return null!=n?decodeURI(n[2]):null}function i(e){return e?(e^16*Math.random()>>e/4).toString(16):([1e7]+1e3+4e3+8e3+1e11).replace(/[018]/g,i)}function o(e){return JSON.parse(JSON.stringify(e))}function a(){if(BOTHUB.debug)for(var e in arguments)console.log(arguments[e])}function c(e,t){var n=document.createElement("script"),r="jsonp_callback_bh"+Math.round(1e5*Math.random());window[r]=function(e){document.body.removeChild(n),t&&t(e)},n.src=e+(e.indexOf("?")>=0?"&":"?")+"callback="+r,document.body.appendChild(n)}function u(e,t,n){var r=new XMLHttpRequest;return r.open(e,t),"POST"===e&&r.setRequestHeader("Content-Type","application/json"),r.send("GET"===e?null:JSON.stringify(n)),r}function d(){var e=s("custom_user_id")||localStorage.getItem("bothub_custom_user_id")||"";return e||(e=i(),localStorage.setItem("bothub_custom_user_id",e),e)}function p(e){var t=s(e)||localStorage.getItem(e)||"";return t&&localStorage.setItem(e,t),t}function g(){return"bh_eid_"+i()}function _(e){e=e||!1;var t=localStorage.getItem("bothub_user_ref");return!e&&t||(t=location.host.replace(/\./g,"_")+"_"+i(),localStorage.setItem("bothub_user_ref",t)),t}function f(e){var t=e.replace("fb","bothub"),n=window[t];return n?(n.setAttribute("class",e),n):document.getElementsByClassName(e)[0]}function h(e){if(!window["facebook-jssdk"]){-1===["zh_CN","zh_TW","en_US"].indexOf(e.language)&&(e.language="zh_CN"),a("start load facebook sdk...");var t=document.createElement("script");t.id="facebook-jssdk",t.src="https://connect.facebook.net/"+e.language+"/"+(e.debug?"sdk/debug":"sdk")+".js",document.body.appendChild(t)}}t.__esModule=!0;var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.urlEncode=r,t.getUrlParam=s,t.uuid=i,t.copy=o,t.log=a,t.jsonp=c,t.getCustomUserId=d,t.getFacebookUserId=p,t.getEventId=g,t.getUserRef=_,t.getPlugin=f,t.loadFacebookSdk=h;t.Http={get:function(e,t){return u("GET",e,t)},post:function(e,t){return u("POST",e,t)}}},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function initFacebook(bothub){var fbAsyncInitPrev=window.fbAsyncInit;window.fbAsyncInit=function(){(0,_utils.log)("facebook sdk loaded."),FB.init({appId:bothub.Messenger.messenger_app_id,xfbml:!0,version:"v2.6"}),FB.Event.subscribe("messenger_checkbox",bothub.Plugin.checkboxListener),FB.Event.subscribe("send_to_messenger",bothub.Plugin.sendToMessengerListener),window.bhAsyncInit&&window.bhAsyncInit(),fbAsyncInitPrev&&(eval("window.oldCb = "+fbAsyncInitPrev.toString().replace("xfbml","fbml")),window.oldCb())},window.FB&&window.fbAsyncInit(),(0,_utils.loadFacebookSdk)(BOTHUB)}var _bothub=__webpack_require__(2),_bothub2=_interopRequireDefault(_bothub),_utils=__webpack_require__(0);if(__webpack_require__(6),!BOTHUB._isins)if(window.BOTHUB=new _bothub2.default(BOTHUB),BOTHUB.platforms.indexOf("facebook")>-1)initFacebook(BOTHUB);else{var fbAsyncInitPrev=window.fbAsyncInit;window.fbAsyncInit=function(){window.bhAsyncInit&&window.bhAsyncInit(),fbAsyncInitPrev&&fbAsyncInitPrev()}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=n(3),o=r(i),a=n(4),c=r(a),u=n(5),d=r(u),p=n(0);e.exports=function e(t){s(this,e);var n=t.fb_user_id_key||"fb_user_id",r=(0,p.getFacebookUserId)(n);this.debug=t.debug||!1,this._isins=!0,this.page_id=t.facebook_page_id,this.custom_user_id=(0,p.getCustomUserId)(),this.fb_user_id=r,this.api_server=t.api_server||"https://t.bothub.ai/",this.platforms=t.platforms||["facebook","bothub"],this.entrance=t.entrance||{},this.ecommerce=t.ecommerce||{},this.language=t.language||"zh_CN",this.Messenger={origin:location.protocol+"//"+location.host,page_id:t.facebook_page_id,messenger_app_id:t.messenger_app_id||"985673201550272",user_ref:(0,p.getUserRef)(),fb_user_id:r,allow_login:!0},this.Marketing=new o.default(this),this.platforms.indexOf("facebook")>-1&&(this.ECommerce=new c.default(this),this.Plugin=new d.default(this),this.Plugin.initMessengerCheckbox(),this.Plugin.initSendToMessenger(),this.Plugin.initMessageUs(),this.Plugin.initCustomerChat())}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var s=n(0);e.exports=function(){function e(t){r(this,e),this.parent=t}return e.prototype.logEvent=function(e,t,n){if(e){t||(t=null),n instanceof Object||(n={});var r=this.parent.Messenger,i={id:(0,s.getEventId)(),ev:e,params:(0,s.copy)(n)};if(this.parent.entrance.fb_messenger_checkbox_ref&&(i=Object.assign(i,this.parent.entrance.fb_messenger_checkbox_ref)),i.custom_user_id=this.parent.custom_user_id,i.user_agent=window.navigator&&window.navigator.userAgent,this.parent.fb_user_id&&(n.fb_user_id=this.parent.fb_user_id,i.fb_user_id=this.parent.fb_user_id),i.user_id||i.fb_user_id||i.custom_user_id){n.user_ref=(0,s.getUserRef)(),n.ref=JSON.stringify(i);var o={app_id:r.messenger_app_id,page_id:r.page_id,user_ref:n.user_ref,ref:n.ref};if(this.parent.platforms.indexOf("facebook")>=0){var a=(0,s.copy)(n);delete a.user_ref,delete a.ref,"fb_mobile_purchase"===e?FB.AppEvents.logPurchase(t,n[FB.AppEvents.ParameterNames.CURRENCY],a):(FB.AppEvents.logEvent("MessengerCheckboxUserConfirmation",null,o),FB.AppEvents.logEvent(e,t,a),(0,s.log)("FB.AppEvents.logEvent",{eventName:e,valueToSum:t,analyticsParams:a}))}else if(this.parent.platforms.indexOf("bothub")>=0){delete o.user_ref,window.query={cd:o};var c=(0,s.urlEncode)({cd:o});(0,s.jsonp)(this.parent.api_server+"analytics/events?action=store"+c)}}}},e.prototype.logAddedToCartEvent=function(e,t,n,r){var s={},i=FB.AppEvents.ParameterNames;s[i.CONTENT_ID]=e,s[i.CONTENT_TYPE]=t,s[i.CURRENCY]=n,this.logEvent(FB.AppEvents.EventNames.ADDED_TO_CART,r,s)},e.prototype.logAddedToWishlistEvent=function(e,t,n,r){var s={},i=FB.AppEvents.ParameterNames;s[i.CONTENT_ID]=e,s[i.CONTENT_TYPE]=t,s[i.CURRENCY]=n,this.logEvent(FB.AppEvents.EventNames.ADDED_TO_WISHLIST,r,s)},e.prototype.logInitiatedCheckoutEvent=function(e,t,n,r,s,i){var o={},a=FB.AppEvents.ParameterNames;o[a.CONTENT_ID]=e,o[a.CONTENT_TYPE]=t,o[a.NUM_ITEMS]=n,o[a.PAYMENT_INFO_AVAILABLE]=r?1:0,o[a.CURRENCY]=s,this.logEvent(FB.AppEvents.EventNames.INITIATED_CHECKOUT,i,o)},e.prototype.logPurchaseEvent=function(e,t,n,r){var s={},i=FB.AppEvents.ParameterNames;s[i.CONTENT_ID]=e,s[i.CURRENCY]=t,s[i.CONTENT_TYPE]=r,s.value_to_sum=n,this.logEvent("fb_mobile_purchase",n,s)},e}()},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var s=n(0);e.exports=function(){function e(t){r(this,e),this.parent=t,this.ecommerce=this.parent.ecommerce,this.plugin={messenger_checkbox:{receipt:"",receipt_id:"",sent:!1},send_to_messenger:{receipt:"",receipt_id:"",feed:"",feed_id:"",sent:!1}},Object.assign(this.plugin.messenger_checkbox,this.ecommerce.messenger_checkbox),Object.assign(this.plugin.send_to_messenger,this.ecommerce.send_to_messenger)}return e.prototype.getReceiptId=function(e){return this.plugin[e].receipt_id?this.plugin[e].receipt_id:(this.plugin[e].receipt_id=(0,s.uuid)(),this.plugin[e].receipt_id)},e.prototype.getFeedId=function(e){return this.plugin[e].feed_id?this.plugin[e].feed_id:(this.plugin[e].feed_id=(0,s.uuid)(),this.plugin[e].feed_id)},e.prototype.sendToMessenger=function(e){var t=this.plugin[e],n=this.parent.page_id;if(!t.sent)return t.receipt?(t.receipt={ev:"bh_receipt",receipt_id:t.receipt_id,page_id:n,data:t.receipt},s.Http.post(this.parent.api_server+"tr/",t.receipt),void(t.sent=!0)):void(t.feed&&(t.feed={ev:"bh_feed",feed_id:t.feed_id,page_id:n,data:t.feed},s.Http.post(this.parent.api_server+"tr/",t.feed),t.sent=!0))},e.prototype.resetMessengerCheckboxReceipt=function(e){var t=(0,s.getPlugin)("fb-messenger-checkbox");t&&(t.removeAttribute("fb-iframe-plugin-query"),this.plugin.messenger_checkbox.receipt=e,this.plugin.messenger_checkbox.receipt_id="",BOTHUB.Plugin.initMessengerCheckbox(),window.FB.XFBML.parse(),this.plugin.messenger_checkbox.sent=!1)},e.prototype.resetSendToMessengerReceipt=function(e){var t="bh_receipt"===e.ev?"receipt":"feed",n=(0,s.getPlugin)("fb-send-to-messenger");n&&(n.removeAttribute("fb-iframe-plugin-query"),this.plugin.send_to_messenger[t]=e,this.plugin.send_to_messenger[t+"_id"]="",BOTHUB.Plugin.initSendToMessenger(),window.FB.XFBML.parse(),this.plugin.send_to_messenger.sent=!1)},e.prototype.resetSendToMessengerFeed=function(e){this.plugin.send_to_messenger.receipt="",this.plugin.send_to_messenger.receipt_id="",this.resetSendToMessengerReceipt(e)},e}()},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var s=n(0);e.exports=function(){function e(t){r(this,e),this.parent=t,this.messenger_checkbox=(0,s.getPlugin)("fb-messenger-checkbox"),this.send_to_messenger=(0,s.getPlugin)("fb-send-to-messenger"),this.messageus=(0,s.getPlugin)("fb-messengermessageus"),this.customerchat=(0,s.getPlugin)("fb-customerchat")}return e.prototype.checkboxListener=function(e){if((0,s.log)("messenger_checkbox event:",e),"rendered"===e.event)(0,s.log)("Messenger plugin was rendered"),BOTHUB.ECommerce.sendToMessenger("messenger_checkbox");else if("checkbox"===e.event){var t=e.state;(0,s.log)("Checkbox state: "+t)}else"not_you"===e.event?(0,s.log)("User clicked not you"):"hidden"===e.event&&(0,s.log)("Messenger plugin was hidden")},e.prototype.sendToMessengerListener=function(e){(0,s.log)("send_to_messenger event:",e),"rendered"===e.event?((0,s.log)("Send to messenger plugin was rendered"),BOTHUB.ECommerce.sendToMessenger("send_to_messenger")):"clicked"===e.event?(0,s.log)("User clicked send to messenger"):"not_you"===e.event?(0,s.log)("User clicked not you"):"hidden"===e.event&&(0,s.log)("Send to messenger plugin was hidden")},e.prototype.initMessengerCheckbox=function(){if(this.messenger_checkbox){this.parent.entrance.fb_messenger_checkbox_ref=this.parent.entrance.fb_messenger_checkbox_ref||{},this.parent.ECommerce.plugin.messenger_checkbox.receipt&&Object.assign(this.parent.entrance.fb_messenger_checkbox_ref,{receipt_id:this.parent.ECommerce.getReceiptId("messenger_checkbox")}),this.parent.Messenger.user_ref=(0,s.getUserRef)(!0);for(var e in this.parent.Messenger)this.messenger_checkbox.setAttribute(e,this.parent.Messenger[e])}else this.parent.Messenger.user_ref=(0,s.getUserRef)()},e.prototype.initSendToMessenger=function(){if(this.send_to_messenger){this.send_to_messenger.setAttribute("messenger_app_id",this.parent.Messenger.messenger_app_id),this.send_to_messenger.setAttribute("page_id",this.parent.Messenger.page_id);var e=this.parent.entrance.fb_send_to_messenger_data_ref||{};e.length&&(e=JSON.parse(atob(e.replace("base64:",""))),delete e.receipt_id,delete e.feed_id),this.parent.ECommerce.plugin.send_to_messenger.receipt&&(e.receipt_id=this.parent.ECommerce.getReceiptId("send_to_messenger")),!e.receipt_id&&this.parent.ECommerce.plugin.send_to_messenger.feed&&(e.feed_id=this.parent.ECommerce.getFeedId("send_to_messenger")),e="base64:"+btoa(JSON.stringify(e)),"base64:e30="!==e&&this.send_to_messenger.setAttribute("data-ref",e)}},e.prototype.initMessageUs=function(){this.messageus&&(this.messageus.setAttribute("messenger_app_id",this.parent.Messenger.messenger_app_id),this.messageus.setAttribute("page_id",this.parent.Messenger.page_id))},e.prototype.initCustomerChat=function(){this.customerchat&&(this.customerchat.setAttribute("page_id",this.parent.Messenger.page_id),this.parent.entrance.fb_customerchat_ref&&this.customerchat.setAttribute("ref",this.parent.entrance.fb_customerchat_ref))},e}()},function(e,t,n){"use strict";var r=arguments;if(!window.atob){var s=n(7);window.atob=s.atob,window.btoa=s.btoa}Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:function(e){if(void 0===e||null===e)throw new TypeError("Cannot convert first argument to object");for(var t=Object(e),n=1;n<r.length;n++){var s=r[n];if(void 0!==s&&null!==s){s=Object(s);for(var i=Object.keys(Object(s)),o=0,a=i.length;o<a;o++){var c=i[o],u=Object.getOwnPropertyDescriptor(s,c);void 0!==u&&u.enumerable&&(t[c]=s[c])}}}return t}})},function(e,t,n){"use strict";var r=n(8),s=n(9);e.exports={atob:r,btoa:s}},function(e,t,n){"use strict";function r(e){if(e=String(e),e=e.replace(/[ \t\n\f\r]/g,""),e.length%4==0&&/==?$/.test(e)&&(e=e.replace(/==?$/,"")),e.length%4==1||!/^[+\/0-9A-Za-z]*$/.test(e))return null;for(var t="",n=0,r=0,i=0;i<e.length;i++)n<<=6,n|=s(e[i]),24==(r+=6)&&(t+=String.fromCharCode((16711680&n)>>16),t+=String.fromCharCode((65280&n)>>8),t+=String.fromCharCode(255&n),n=r=0);return 12==r?(n>>=4,t+=String.fromCharCode(n)):18==r&&(n>>=2,t+=String.fromCharCode((65280&n)>>8),t+=String.fromCharCode(255&n)),t}function s(e){return/[A-Z]/.test(e)?e.charCodeAt(0)-"A".charCodeAt(0):/[a-z]/.test(e)?e.charCodeAt(0)-"a".charCodeAt(0)+26:/[0-9]/.test(e)?e.charCodeAt(0)-"0".charCodeAt(0)+52:"+"==e?62:"/"==e?63:void 0}e.exports=r},function(e,t,n){"use strict";function r(e){var t;for(e=String(e),t=0;t<e.length;t++)if(e.charCodeAt(t)>255)return null;var n="";for(t=0;t<e.length;t+=3){var r=[void 0,void 0,void 0,void 0];r[0]=e.charCodeAt(t)>>2,r[1]=(3&e.charCodeAt(t))<<4,e.length>t+1&&(r[1]|=e.charCodeAt(t+1)>>4,r[2]=(15&e.charCodeAt(t+1))<<2),e.length>t+2&&(r[2]|=e.charCodeAt(t+2)>>6,r[3]=63&e.charCodeAt(t+2));for(var i=0;i<r.length;i++)void 0===r[i]?n+="=":n+=s(r[i])}return n}function s(e){return e<26?String.fromCharCode(e+"A".charCodeAt(0)):e<52?String.fromCharCode(e-26+"a".charCodeAt(0)):e<62?String.fromCharCode(e-52+"0".charCodeAt(0)):62==e?"+":63==e?"/":void 0}e.exports=r}]);