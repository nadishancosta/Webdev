!function(){var t={862:function(t,e,n){var o,i,r,s;function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}var c=n(687),u=c.parseContentForEvent,l=c.getLinkType;if(function(){"use strict";if("object"==("undefined"==typeof window?"undefined":a(window)))if("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)"isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}});else{var t=window.document,e=[];o.prototype.THROTTLE_TIMEOUT=100,o.prototype.POLL_INTERVAL=null,o.prototype.USE_MUTATION_OBSERVER=!0,o.prototype.observe=function(t){if(!this._observationTargets.some((function(e){return e.element==t}))){if(!t||1!=t.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:t,entry:null}),this._monitorIntersections(),this._checkForIntersections()}},o.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter((function(e){return e.element!=t})),this._observationTargets.length||(this._unmonitorIntersections(),this._unregisterInstance())},o.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorIntersections(),this._unregisterInstance()},o.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},o.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter((function(t,e,n){if("number"!=typeof t||isNaN(t)||t<0||t>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==n[e-1]}))},o.prototype._parseRootMargin=function(t){var e=(t||"0px").split(/\s+/).map((function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(e[1]),unit:e[2]}}));return e[1]=e[1]||e[0],e[2]=e[2]||e[0],e[3]=e[3]||e[1],e},o.prototype._monitorIntersections=function(){this._monitoringIntersections||(this._monitoringIntersections=!0,this.POLL_INTERVAL?this._monitoringInterval=setInterval(this._checkForIntersections,this.POLL_INTERVAL):(i(window,"resize",this._checkForIntersections,!0),i(t,"scroll",this._checkForIntersections,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in window&&(this._domObserver=new MutationObserver(this._checkForIntersections),this._domObserver.observe(t,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))))},o.prototype._unmonitorIntersections=function(){this._monitoringIntersections&&(this._monitoringIntersections=!1,clearInterval(this._monitoringInterval),this._monitoringInterval=null,r(window,"resize",this._checkForIntersections,!0),r(t,"scroll",this._checkForIntersections,!0),this._domObserver&&(this._domObserver.disconnect(),this._domObserver=null))},o.prototype._checkForIntersections=function(){var t=this._rootIsInDom(),e=t?this._getRootRect():{top:0,bottom:0,left:0,right:0,width:0,height:0};this._observationTargets.forEach((function(o){var i=o.element,r=s(i),a=this._rootContainsTarget(i),c=o.entry,u=t&&a&&this._computeTargetAndRootIntersection(i,e),l=o.entry=new n({time:window.performance&&performance.now&&performance.now(),target:i,boundingClientRect:r,rootBounds:e,intersectionRect:u});c?t&&a?this._hasCrossedThreshold(c,l)&&this._queuedEntries.push(l):c&&c.isIntersecting&&this._queuedEntries.push(l):this._queuedEntries.push(l)}),this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)},o.prototype._computeTargetAndRootIntersection=function(e,n){if("none"!=window.getComputedStyle(e).display){for(var o,i,r,a,c,l,d,h,f=s(e),b=u(e),p=!1;!p;){var v=null,m=1==b.nodeType?window.getComputedStyle(b):{};if("none"==m.display)return;if(b==this.root||b==t?(p=!0,v=n):b!=t.body&&b!=t.documentElement&&"visible"!=m.overflow&&(v=s(b)),v&&(o=v,i=f,r=Math.max(o.top,i.top),a=Math.min(o.bottom,i.bottom),c=Math.max(o.left,i.left),h=a-r,!(f=(d=(l=Math.min(o.right,i.right))-c)>=0&&h>=0&&{top:r,bottom:a,left:c,right:l,width:d,height:h})))break;b=u(b)}return f}},o.prototype._getRootRect=function(){var e;if(this.root)e=s(this.root);else{var n=t.documentElement,o=t.body;e={top:0,left:0,right:n.clientWidth||o.clientWidth,width:n.clientWidth||o.clientWidth,bottom:n.clientHeight||o.clientHeight,height:n.clientHeight||o.clientHeight}}return this._expandRectByRootMargin(e)},o.prototype._expandRectByRootMargin=function(t){var e=this._rootMarginValues.map((function(e,n){return"px"==e.unit?e.value:e.value*(n%2?t.width:t.height)/100})),n={top:t.top-e[0],right:t.right+e[1],bottom:t.bottom+e[2],left:t.left-e[3]};return n.width=n.right-n.left,n.height=n.bottom-n.top,n},o.prototype._hasCrossedThreshold=function(t,e){var n=t&&t.isIntersecting?t.intersectionRatio||0:-1,o=e.isIntersecting?e.intersectionRatio||0:-1;if(n!==o)for(var i=0;i<this.thresholds.length;i++){var r=this.thresholds[i];if(r==n||r==o||r<n!=r<o)return!0}},o.prototype._rootIsInDom=function(){return!this.root||c(t,this.root)},o.prototype._rootContainsTarget=function(e){return c(this.root||t,e)},o.prototype._registerInstance=function(){e.indexOf(this)<0&&e.push(this)},o.prototype._unregisterInstance=function(){var t=e.indexOf(this);-1!=t&&e.splice(t,1)},window.IntersectionObserver=o,window.IntersectionObserverEntry=n}function n(t){this.time=t.time,this.target=t.target,this.rootBounds=t.rootBounds,this.boundingClientRect=t.boundingClientRect,this.intersectionRect=t.intersectionRect||{top:0,bottom:0,left:0,right:0,width:0,height:0},this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,n=e.width*e.height,o=this.intersectionRect,i=o.width*o.height;this.intersectionRatio=n?Number((i/n).toFixed(4)):this.isIntersecting?1:0}function o(t,e){var n,o,i,r=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(r.root&&1!=r.root.nodeType)throw new Error("root must be an Element");this._checkForIntersections=(n=this._checkForIntersections.bind(this),o=this.THROTTLE_TIMEOUT,i=null,function(){i||(i=setTimeout((function(){n(),i=null}),o))}),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(r.rootMargin),this.thresholds=this._initThresholds(r.threshold),this.root=r.root||null,this.rootMargin=this._rootMarginValues.map((function(t){return t.value+t.unit})).join(" ")}function i(t,e,n,o){"function"==typeof t.addEventListener?t.addEventListener(e,n,o||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,n)}function r(t,e,n,o){"function"==typeof t.removeEventListener?t.removeEventListener(e,n,o||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,n)}function s(t){var e;try{e=t.getBoundingClientRect()}catch(t){}return e?(e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}),e):{top:0,bottom:0,left:0,right:0,width:0,height:0}}function c(t,e){for(var n=e;n;){if(n==t)return!0;n=u(n)}return!1}function u(t){var e=t.parentNode;return e&&11==e.nodeType&&e.host?e.host:e&&e.assignedSlot?e.assignedSlot.parentNode:e}}(),"function"!=typeof window.CustomEvent){var d=function(t,e){e=e||{bubbles:!1,cancelable:!1,detail:null};var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),n};d.prototype=window.Event.prototype,window.CustomEvent=d}o=function(){var t="data-bbc-uah-id";return function(e,n){var o={attributes:!0,attributeFilter:[t],attributeOldValue:!0,childList:!0,subtree:!0},i={attributes:!0,attributeFilter:["style"],attributeOldValue:!0,childList:!0,subtree:!0},r={};window.addEventListener("pageshow",(function(t){t.persisted&&(r={},f(document.body))}));var s=0;new MutationObserver(v).observe(document,o);var a=new IntersectionObserver((function(t){t.forEach((function(t){var e=l(t.target);t.intersectionRatio>=.5?e.timeoutId=setTimeout((function(){!function(t){var e;(e=t.element,"hidden"!==window.getComputedStyle(e).visibility)?(d(t.contentId),n(t.element)):new MutationObserver(v).observe(t.element,i)}(e)}),1e3):(clearTimeout(e.timeoutId),e.timeoutId=null)}))}),{threshold:[.5]});function c(t){var n=Array.prototype.slice.call(t.querySelectorAll(e));return t.matches(e)&&n.push(t),n}function u(t){return t.bbcUahId}function l(t){var e=u(t);if(e){var n=r[e];if(n)return n}return null}function d(t){var e=r[t];e&&(a.unobserve(e.element),e.timeoutId&&clearTimeout(e.timeoutId),delete r[t])}function h(e){if(!l(e)){var n=e.getAttribute(t);n||(n="uah_autoid_"+s,s++),function(t,e){!function(t,e){t.bbcUahId=e}(e,t),a.observe(e),r[t]={element:e,contentId:t,timeoutId:null}}(n,e)}}function f(t){c(t).forEach(h)}function b(t){c(t).map(u).forEach(d)}function p(t){return t instanceof Element||t instanceof HTMLDocument}function v(t){t.forEach((function(t){if("childList"===t.type)Array.prototype.slice.call(t.addedNodes).filter(p).forEach(f),Array.prototype.slice.call(t.removedNodes).filter(p).forEach(b);else if("attributes"===t.type){var e=t.target,n=t.target.getAttribute(t.attributeName),o=t.oldValue;if("style"===t.attributeName&&void 0!==t.target.dataset&&"true"===t.target.dataset.doNotTrack)return;"style"===t.attributeName&&(t.target.dataset.doNotTrack="true"),null!==n?null===o?function(t){var e=u(t);e&&d(e),h(t)}(e):function(t,e){d(e),h(t)}(e,o):d(o)}}))}f(document.body)}}.call((i={id:"detectview",exports:{},loaded:!1}).exports,n,i.exports,i),i.loaded=!0,void 0!==o||(o=i.exports),r=function(){return function t(e,n){return e.matches(n)?e:!!e.parentElement&&t(e.parentElement,n)}}.call((s={id:"getParentWithSelector",exports:{},loaded:!1}).exports,n,s.exports,s),s.loaded=!0,void 0!==r||(r=s.exports),Promise.resolve().then((function(){(function(t){t("[data-v-item],[data-bbc-context],[data-bbc-container]",(function(t){if(!t.hasAttribute("data-bbc-ignore-views")){var e=u(t);e.event=e.event||{},e.event.action="view";var n=new window.CustomEvent("bbc-user-event",{bubbles:!0,detail:e});t.dispatchEvent(n)}}))}).apply(null,[o])})).catch(n.oe),Promise.resolve().then((function(){(function(t){var e=function(t){return null===t.which?4===t.button:1===t.button},n=function(n){if(function(t){return 0===t.button}(n)||e(n)){var o=t(n.target,"[data-v-item]")||t(n.target,"[data-bbc-container]"),i=t(n.target,"a, button, input, select"),r=l(i);if("external"===r&&(o||(o=t(n.target,"a:not([data-bbc-notrack])")),o&&o.hasAttribute("istats-notrack")&&(o=!1)),o&&i){var s="A"===i.tagName,a=-1===["download","email"].indexOf(r),c=o.hasAttribute("data-bbc-client-routed")||i.hasAttribute("data-bbc-client-routed"),d=s&&a&&!c&&window.__detectview.clickManagementEnabled,h=u(o);h.originalEvent=n,h.isClick=!0,h.event=h.event||{},h.event.action="select",d&&(function(t,n,o){if(!(t.altKey||t.ctrlKey||t.metaKey||t.shiftKey||e(t)||n.target&&!n.target.match(/^_(self|parent|top)$/i))){t.preventDefault();var i=setTimeout((function(){window.location.href=n.href}),1500);window.addEventListener("pagehide",(function(t){this.clearTimeout(i)}))}}(n,i),h.elem=i);var f=new window.CustomEvent("bbc-user-click",{bubbles:!0,detail:h});i.dispatchEvent(f)}}};["click","auxclick"].forEach((function(t){document.body.addEventListener(t,n)})),window.__detectview=window.__detectview||{clickManagementEnabled:!1},window&&window.__reverb&&window.__reverb.__reverbLoadedPromise&&window.__reverb.__reverbLoadedPromise.then((function(){window.__detectview.clickManagementEnabled=!0})).catch((function(){}))}).apply(null,[r])})).catch(n.oe)},687:function(t){function e(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];return n.reduce((function(e,n){return e||t.getAttribute(n)}),void 0)}function n(t){if("A"===t.tagName&&t.getAttribute("href"))return t;for(var e=t.getElementsByTagName("a"),o=0;o<e.length;o++){var i=n(e[o]);if(i)return i}}function o(t){var e={internalUrl:/^(?:#(?:[^.]+\.)*)|(?:\/\/|https?:\/\/)?(?:[^.]+\.)*((bbc|bbci)(?:\.co\.uk|\.com))(:|\/|$)/i,downloadUrl:/.+\.(pdf|te?xt|rtf|docx?|xlsx?|pptx?|od[tpsgbf]|mp[234]|m4a|mpeg|exe|dmg|zip|tgz)$/i,email:/^mailto:/i};return t.href&&""!==t.href?e.email.test(t.href)?"email":e.internalUrl.test(t.href)||t.host===window.location.host?"internal":e.downloadUrl.test(t.href)?"download":"external":"none"}t.exports={getLinkType:o,parseContentForEvent:function(t){var i=n(t),r=i&&i.getAttribute("href"),s=JSON.parse(t.getAttribute("data-bbc-metadata"))||{};r&&"external"===o(i)&&!s.hasOwnProperty("EXT")&&(s.EXT=1);var a=JSON.parse(t.getAttribute("data-v-item"))||void 0;a&&(a.text||(a.text=t.innerText.trim().split("\n")[0]),a.link||(a.link=r));var c={container:e(t,"data-bbc-container","data-bbc-context"),label:e(t,"data-bbc-title","data-bbc-content-label")||t.innerText.trim().split("\n")[0],type:t.getAttribute("data-bbc-event-type")||void 0,source:t.getAttribute("data-bbc-source")||void 0,personalisation:JSON.parse(t.getAttribute("data-bbc-personalisation"))||{},metadata:s,result:t.getAttribute("data-bbc-result")||r||void 0,item:a,group:JSON.parse(t.getAttribute("data-v-group"))||void 0,user:JSON.parse(t.getAttribute("data-v-user"))||void 0,event:JSON.parse(t.getAttribute("data-v-event"))||void 0};for(var u in c)null!==c[u]&&void 0!==c[u]||delete c[u];return c}}}},e={};!function n(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={exports:{}};return t[o](r,r.exports,n),r.exports}(862)}();