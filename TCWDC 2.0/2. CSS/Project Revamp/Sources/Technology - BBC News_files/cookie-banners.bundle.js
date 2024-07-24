/*! For license information please see cookie-banners.bundle.js.LICENSE.txt */
!function(){var e={229:function(e,o,t){var n=t(102)("jsonp");e.exports=function(e,o,t){"function"==typeof o&&(t=o,o={}),o||(o={});var i,s,a=o.prefix||"__jp",u=o.name||a+r++,l=o.param||"callback",d=null!=o.timeout?o.timeout:6e4,m=encodeURIComponent,f=document.getElementsByTagName("script")[0]||document.head;function p(){i.parentNode&&i.parentNode.removeChild(i),window[u]=c,s&&clearTimeout(s)}return d&&(s=setTimeout((function(){p(),t&&t(new Error("Timeout"))}),d)),window[u]=function(e){n("jsonp got",e),p(),t&&t(null,e)},e=(e+=(~e.indexOf("?")?"&":"?")+l+"="+m(u)).replace("?&","?"),n('jsonp req "%s"',e),(i=document.createElement("script")).src=e,f.parentNode.insertBefore(i,f),function(){window[u]&&p()}};var r=0;function c(){}},102:function(e,o,t){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function r(){var e;try{e=o.storage.debug}catch(e){}return!e&&"undefined"!=typeof process&&"env"in process&&(e=process.env.DEBUG),e}(o=e.exports=t(79)).log=function(){return"object"===("undefined"==typeof console?"undefined":n(console))&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},o.formatArgs=function(e){var t=this.useColors;if(e[0]=(t?"%c":"")+this.namespace+(t?" %c":" ")+e[0]+(t?"%c ":" ")+"+"+o.humanize(this.diff),t){var n="color: "+this.color;e.splice(1,0,n,"color: inherit");var r=0,c=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(r++,"%c"===e&&(c=r))})),e.splice(c,0,n)}},o.save=function(e){try{null==e?o.storage.removeItem("debug"):o.storage.debug=e}catch(e){}},o.load=r,o.useColors=function(){return!("undefined"==typeof window||!window.process||"renderer"!==window.process.type)||("undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))},o.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),o.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],o.formatters.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}},o.enable(r())},79:function(e,o,t){var n;function r(e){function t(){if(t.enabled){var e=t,r=+new Date,c=r-(n||r);e.diff=c,e.prev=n,e.curr=r,n=r;for(var i=new Array(arguments.length),s=0;s<i.length;s++)i[s]=arguments[s];i[0]=o.coerce(i[0]),"string"!=typeof i[0]&&i.unshift("%O");var a=0;i[0]=i[0].replace(/%([a-zA-Z%])/g,(function(t,n){if("%%"===t)return t;a++;var r=o.formatters[n];if("function"==typeof r){var c=i[a];t=r.call(e,c),i.splice(a,1),a--}return t})),o.formatArgs.call(e,i);var u=t.log||o.log||console.log.bind(console);u.apply(e,i)}}return t.namespace=e,t.enabled=o.enabled(e),t.useColors=o.useColors(),t.color=function(e){var t,n=0;for(t in e)n=(n<<5)-n+e.charCodeAt(t),n|=0;return o.colors[Math.abs(n)%o.colors.length]}(e),"function"==typeof o.init&&o.init(t),t}(o=e.exports=r.debug=r.default=r).coerce=function(e){return e instanceof Error?e.stack||e.message:e},o.disable=function(){o.enable("")},o.enable=function(e){o.save(e),o.names=[],o.skips=[];for(var t=("string"==typeof e?e:"").split(/[\s,]+/),n=t.length,r=0;r<n;r++)t[r]&&("-"===(e=t[r].replace(/\*/g,".*?"))[0]?o.skips.push(new RegExp("^"+e.substr(1)+"$")):o.names.push(new RegExp("^"+e+"$")))},o.enabled=function(e){var t,n;for(t=0,n=o.skips.length;t<n;t++)if(o.skips[t].test(e))return!1;for(t=0,n=o.names.length;t<n;t++)if(o.names[t].test(e))return!0;return!1},o.humanize=t(282),o.names=[],o.skips=[],o.formatters={}},282:function(e){function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}var t=1e3,n=60*t,r=60*n,c=24*r;function i(e,o,t){if(!(e<o))return e<1.5*o?Math.floor(e/o)+" "+t:Math.ceil(e/o)+" "+t+"s"}e.exports=function(e,s){s=s||{};var a,u=o(e);if("string"===u&&e.length>0)return function(e){if(!((e=String(e)).length>100)){var o=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(o){var i=parseFloat(o[1]);switch((o[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*i;case"days":case"day":case"d":return i*c;case"hours":case"hour":case"hrs":case"hr":case"h":return i*r;case"minutes":case"minute":case"mins":case"min":case"m":return i*n;case"seconds":case"second":case"secs":case"sec":case"s":return i*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return i;default:return}}}}(e);if("number"===u&&!1===isNaN(e))return s.long?i(a=e,c,"day")||i(a,r,"hour")||i(a,n,"minute")||i(a,t,"second")||a+" ms":function(e){return e>=c?Math.round(e/c)+"d":e>=r?Math.round(e/r)+"h":e>=n?Math.round(e/n)+"m":e>=t?Math.round(e/t)+"s":e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}}},o={};function t(n){var r=o[n];if(void 0!==r)return r.exports;var c=o[n]={exports:{}};return e[n](c,c.exports,t),c.exports}!function(){"use strict";var e={},o="https:"===document.location.protocol;e.IMPLICIT_FLAG="0",e.EXPLICIT_FLAG="1",e.EXPLICIT_FLAG_EU="2",e.POLICY_REFRESH_DATE_MILLIS=new Date(2015,4,21,0,0,0,0).getTime(),e.PRIVACY_COOKIE_NAME="ckns_privacy",e.EXPLICIT_COOKIE_NAME="ckns_explicit",e.POLICY_COOKIE_NAME="ckns_policy",e.CURRENT_PRIVACY_POLICY="july2019";var n={"www.int.bbc.co.uk":"https://www.test.bbc.co.uk/cookieoven","www.int.bbc.com":"https://www.int.bbc.com/cookieoven","www.test.bbc.co.uk":"https://www.test.bbc.co.uk/cookieoven","www.test.bbc.com":"https://www.test.bbc.com/cookieoven","navigation.int.api.bbc.co.uk":"https://www.test.bbc.co.uk/cookieoven","navigation.test.api.bbc.co.uk":"https://www.test.bbc.co.uk/cookieoven","navigation.int.api.bbc.com":"https://www.test.bbc.com/cookieoven","navigation.test.api.bbc.com":"https://www.test.bbc.com/cookieoven","cookies.test.api.bbc.co.uk":"https://www.test.bbc.co.uk/cookieoven"},r=["AT","AX","BE","BG","BL","CY","CZ","DE","DK","EE","ES","EU","FI","FR","GB","GF","GG","GI","GP","GR","HR","HU","IE","IM","IS","IT","JE","LI","LT","LU","LV","MF","MT","MQ","NL","NO","PL","PM","PT","RE","RO","SE","SI","SK","YT"],c={ads:!1,personalisation:!1,performance:!1,necessary:!0},i={},s={personalisation:"ckps_.+|X-AB-iplayer-.+|ACTVTYMKR|BBC_EXAMPLE_COOKIE|BBCIplayer|BBCiPlayerM|BBCIplayerSession|BBCMediaselector|BBCPostcoder|bbctravel|CGISESSID|ed|food-view|forceDesktop|h4|IMRID|locserv|MyLang|myloc|NTABS|ttduserPrefs|V5|BBCScienceDiscoveryPlaylist_.+|bitratePref|correctAnswerCount|genreCookie|highestQuestionScore|incorrectAnswerCount|longestStreak|MSCSProfile|programmes-oap-expanded|quickestAnswer|score|servicePanel|slowestAnswer|totalTimeForAllFormatted|v|BBCwords|score|correctAnswerCount|highestQuestionScore|hploc|BGUID|BBCWEACITY|mstouch|myway|BBCNewsCustomisation|cbbc_anim|cbeebies_snd|bbcsr_usersx|cbeebies_rd|BBC-Latest_Blogs|zh-enc|pref_loc|m|bbcEmp.+|recs-.+|_lvd2|_lvs2|tick|_fcap_CAM1|_rcc2|xbc|__tbc|__adblocker|blaize_.+",performance:"ckpf_.+|optimizely.*|BBCLiveStatsClick|id|_em_.+|cookies_enabled|mbox|mbox-admin|mc_.+|omniture_unique|s_.+|sc_.+|adpolicyAdDisplayFrequency|ns_session|ns_cookietest|ns_ux|NO-SA|tr_pr1|gvsurvey|bbcsurvey|si_v|obuid|mm_.+|mmid|mmcore.+|mmpa.+|dtCookie|dtPC|rxVisitor|rxvt|dtSa|dtLatC|__gads|__pc_.+",ads:"ckad_.+|rsi_segs|c",necessary:"optimizelyEndUserId|ckns_.+|blq\\.dPref|idrxvr|s1|atidvisitor|atuserid|sa_labels|_cb_ls|_cb_svref|_chartbeat2|_chartbeat5|_chartbeat4|_cb|_cb_cp|SSO2-UID|BBC-H2-User|rmRpDetectReal|bbcComSurvey|IDENTITY_ENV|IDENTITY|IDENTITY-HTTPS|IDENTITY_SESSION|BBCCOMMENTSMODULESESSID|bbcBump.+|IVOTE_VOTE_HISTORY|pulse|BBCPG|BBCPGstat|ecos\\.dt|_sm_au_[c|d]|AMAuthCookie|AM_REDIRECT_BACK_SERVER_URL|AWSELB|(devN|uatN|n)ightfall(Session|Refresh)Token|amlbcookie|i00|FCCDCF"};function a(e,o){o&&o(new Error(e))}e.isEU=function(e){return!!e&&-1!==r.indexOf(e.toUpperCase())},e.cookieOvenRequest=function(e,o,t){try{e.open("GET",o,!0),e.send()}catch(e){t&&t(e)}},e.cookieOvenClient=function(o,t,n,r){if("withCredentials"in new XMLHttpRequest){var c=[e.POLICY_COOKIE_NAME,e.EXPLICIT_COOKIE_NAME];try{if(!n)throw new Error("Cannot make request to cross domain cookie service when domain is not set.");if(c.indexOf(o)<=-1)throw new Error("Cookie name is not in the whitelist accepted by the cross domain cookie service.");var i={com:"co.uk","co.uk":"com"}[n.match(/(co.uk|com)/)[0]],s=function(e){var o=new XMLHttpRequest;return o.withCredentials=!0,o.onload=function(){e&&e(null,o.status)},o.onerror=function(t){a("Request to cross domain cookie service encountered an error with code"+o.status+". "+t,e)},o.onabort=function(){a("Request to cross domain cookie service was aborted.",e)},o.ontimeout=function(){a("Request to cross domain cookie service timed out.",e)},o}(r),u=function(e,o,t){return window.orbitData.partialCookieOvenUrl+"."+e+"/"+o+"/"+t}(i,o,t);e.cookieOvenRequest(s,u,r)}catch(e){r&&r(e)}}else r(new Error("Cannot make request to cross domain cookie service as this browser does not support XmlHttpRequest with credentials."))},e.set=function(o,t,n,r){var c,i;if(void 0!==t){i=h(c=w(o),t,n);var s=n&&n.crossDomainEnabled;e.isAllowed(c)&&s&&e.cookieOvenClient(o,t,n.domain,r)}else c=function(e){var o=(""+e).match(/^([^=]+)(?==)/);return o&&o.length?o[0]:""}(o),i=o;e.isAllowed(c)&&(document.cookie=i)},e.setPolicy=function(o){var t,r,c="?policy="+(o.ads?1:0)+(o.personalisation?1:0)+(o.performance?1:0),i=(t=window.location.host,n[t]||"https://www.".concat(e._getCurrentDomain(),"/cookieoven"));return fetch("".concat(i).concat(c),{credentials:"include"}),r="bbc.co.uk"===e._getCurrentDomain().match(/(bbc.co.uk|bbc.com)/)[0]?i.replace(".bbc.co.uk",".bbc.com"):i.replace(".bbc.com",".bbc.co.uk"),fetch("".concat(r).concat(c),{credentials:"include"})},e.isAllowed=function(o){return!(o&&o.match&&o.match(/^ckns_cookietest[0-9]*/))&&function(e){var o=JSON.stringify(e);if(void 0!==i[o])return i[o];var t="";for(var n in e)e.hasOwnProperty(n)&&s[n]&&!0===e[n]&&(t+=(t?"|":"")+s[n]);return i[o]=new RegExp("^("+(t||".*")+")$","i"),i[o]}(e.readPolicy()).test(o)},e.readPolicy=function(e){var o=f();return e?o[e]:o},e.analyticsPolicyString=function(){var e=f();return"ad"+ +e.ads+"ps"+ +e.personalisation+"pf"+ +e.performance},e.get=function(e){return e?decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null:document.cookie},e.isCookiePolicySet=function(){return null!==e.get(e.POLICY_COOKIE_NAME)},e.setImplicitPolicy=function(e){"gb"===e||"eu"===e?b({ads:!1,personalisation:!1,performance:!1,necessary:!0},!1):"row"===e&&b({ads:!0,personalisation:!0,performance:!0,necessary:!0},!1)},e.setDefaultCookiesSingleDomain=function(){b(c,!1)},e.setDefaultCookiesCrossDomain=function(){b(c,!0)},e.copyPolicyCookiesCrossDomain=function(o){b(e.readPolicy(),!0,o)},e.setCookiePolicyCrossDomain=function(e){b(e,!0)};var u=null;function l(e,o){if(void 0===e)return null;var t={};t.expires=new Date(0),o&&(t.domain=o.domain,t.path=o.path),document.cookie=h(e,"removed",t)}function d(e){var o=window.location.hostname.split(".");for(o.length,l(e),m(e);o.length&&-1==="|co.uk|com|".indexOf("|"+o.join(".")+"|");){if(o.length){var t=o.join(".");l(e,{domain:t}),m(e,t)}o.shift()}}function m(e,o){var t=window.location.pathname.split("/");for(l(e,o);t.length;){var n=t.join("/");""===n&&(n="/"),l(e,{domain:o,path:n}),l(e,{domain:"."+o,path:n}),t.pop()}}function f(){var o=new RegExp("(?:^|; ?)"+e.POLICY_COOKIE_NAME+"=(\\d)(\\d)(\\d)($|;)"),t=document.cookie.match(o);return t?{ads:!!+t[1],personalisation:!!+t[2],performance:!!+t[3],necessary:!0}:c}function p(){var e=new Date;return e.setYear(e.getFullYear()+1),e}function b(t,n,r){var c=p(),i=""+(t.ads?1:0)+(t.personalisation?1:0)+(t.performance?1:0),s=e._getCurrentDomain();e.set(e.POLICY_COOKIE_NAME,i,{domain:s,path:"/",expires:c,crossDomainEnabled:n,sameSite:"None",secure:o},r);var a=new Date(c.getTime());return a.setMonth(a.getMonth()+1),e.set("ckns_policy_exp",c.getTime(),{domain:s,path:"/",expires:a,sameSite:"None",secure:o}),t}function y(t,n,r){var c=p(),i=""+t,s=e._getCurrentDomain();return e.set(e.EXPLICIT_COOKIE_NAME,i,{domain:s,path:"/",expires:c,crossDomainEnabled:n,sameSite:"None",secure:o},r),t}function w(e){return(e=e.replace(/[^#$&+\^`|]/g,encodeURIComponent)).replace(/\(/g,"%28").replace(/\)/g,"%29")}function h(e,t,n){n&&n.domain&&n.domain;var r=e+"="+(t=(t+"").replace(/[^!#$&-+\--:<-\[\]-~]/g,encodeURIComponent));return r+=(n=n||{}).path?";path="+n.path:"",r+=n.domain?";domain="+n.domain:"",r+=n.expires?";expires="+n.expires.toUTCString():"",(r+=";sameSite="+n.sameSite||0)+(n.secure||o?";secure":"")}e._setPolicy=function(o,t){var n=e.readPolicy();n[o]=!!t,u=null===u?e.setPolicy(n):u.then((function(){return e.setPolicy(n)}))},e.isCookieExplicitSet=function(){return null!==e.get(e.EXPLICIT_COOKIE_NAME)},e.copyExplicitCookiesCrossDomain=function(o){y(e.get(e.EXPLICIT_COOKIE_NAME),!0,o)},e.setCookieExplicitCrossDomain=function(e){y(e,!0)},e.cookiesEnabled=function(){try{document.cookie="cookietest=1";var e=-1!==document.cookie.indexOf("cookietest=");return document.cookie="cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT",e}catch(e){return!1}},e.delete=function(e,o){l(e=w(e),o)},e.del=e.delete,e._crunch=function(){d("");for(var e=document.cookie.split(";"),o=0;o<e.length;o++){var t=e[o].split("=")[0].trim();this.isAllowed(t)||d(t)}},e._getCurrentDomain=function(){try{return window.location.hostname.toLowerCase().match(/.*(bbc\.co\.uk|bbc\.com)\/*/)[1]}catch(e){return}},e._getPolicy=e.readPolicy,function(e,o){var t=!1,n=!0,r=e.document,c=r.documentElement,i=r.addEventListener,s=i?"addEventListener":"attachEvent",a=i?"removeEventListener":"detachEvent",u=i?"":"on",l=function n(c){"readystatechange"===c.type&&"complete"!=r.readyState||(("load"===c.type?e:r)[a](u+c.type,n,!1),!t&&(t=!0)&&o.call(e,c.type||c))};if("complete"===r.readyState)o.call(e,"lazy");else{if(!i&&c.doScroll){try{n=!e.frameElement}catch(e){}n&&function e(){try{c.doScroll("left")}catch(o){return void setTimeout(e,50)}l("poll")}()}r[s](u+"DOMContentLoaded",l,!1),r[s](u+"readystatechange",l,!1),e[s](u+"load",l,!1)}}(window,(function(){e._crunch()})),window.addEventListener?window.addEventListener("beforeunload",(function(){e._crunch()}),!1):window.attachEvent?window.attachEvent("onbeforeunload",(function(){e._crunch()})):window.onbeforeunload=function(){e._crunch()};var v=e;Promise.resolve().then((function(){var e=[t(229)];(function(e){var o,t=["usingthebbc."];function n(e,o){var t="https:"===document.location.protocol,n=new Date;return n.setYear(n.getFullYear()+1),v.set(e,o,{domain:v._getCurrentDomain(),path:"/",expires:n,sameSite:"None",secure:t})}function r(e){var o=v.get(v.EXPLICIT_COOKIE_NAME);if(null===o)return!1;if("gb"===e||"row"===e)return o>=v.EXPLICIT_FLAG;if("eu"===e)return o===v.EXPLICIT_FLAG_EU;throw new Error("region not recognised: "+e)}function c(e,o,t){o.style.display="none",t.style.display="none",e.className=""}function i(e,o,n,c,i){if(!r(c)){var s="eu"===c,a=function(e){for(var o=t,n=0;n<o.length;n++)if(e.search(o[n])>-1)return"full-screen";return"full-screen full-screen-bottom"}(i);o.style.display="none",n.style.display="inline-block",n.style.width="100%",e.className=s?a:""}}function s(e,t){var n=document.getElementById("cookiePrompt"),r=document.getElementById("bbcprivacy"),s=document.getElementById("bbccookies");document.getElementById("bbcprivacy-continue-button").addEventListener("click",(function(){c(n,r,s),i(n,r,s,e,t)})),document.getElementById("bbccookies-continue-button").addEventListener("click",(function(){c(n,r,s),v.setPolicy({ads:!0,personalisation:!0,performance:!0,necessary:!0})}));var a,u=document.getElementById("bbccookies-settings").getElementsByTagName("a")[0];u.addEventListener("click",(a=!1,function(e){a||(e.preventDefault(),v.setPolicy({ads:!1,personalisation:!1,performance:!1,necessary:!0}).then((function(){a=!0,u.click()})))})),i(n,r,s,e,t);var l=!1;null!=o&&o!==v.CURRENT_PRIVACY_POLICY&&(l=!0),l?function(e,o,t){o.style.display="inline-block",o.style.width="100%",t.style.display="none",e.className=""}(n,r,s):i(n,r,s,e,t)}function a(o,t,n,r){var c=function(e){var o="en";return"string"==typeof e&&e.length>=2&&(o=e.trim().substring(0,2).toLowerCase()),-1!==["en","cy","gd","ga"].indexOf(o)?o:"en"}(o),i=window.COOKIES_STATIC_HOST+"bbccookies.min.css",s=window.COOKIES_STATIC_HOST+c+".min.js";window.bbcpage.loadCSS(i).then(function(){e(s,{name:"cookiePrompt"},(function(e,o){var c,i,s=o.replace(/<<bbcUrlPrefix>>/g,(c="https://bbc.com",(i=window.location.host.match(/(bbc(?:\.co\.uk))(:\d+)?(\/.*)?$/i))&&"bbc.co.uk"===i[1]&&(c=c.replace("bbc.com","bbc.co.uk")),c));document.getElementById("cookiePrompt").innerHTML=s;for(var a=document.querySelectorAll("[data-region-filter]"),u=0;u<a.length;u++){var l=a[u];l.getAttribute("data-region-filter")!==n&&(l.style.display="none")}t(n,r)}))}.bind(this))}Promise.all([window.bbcuser.isUKCombined(),window.bbcuser.getCountry(),window.bbcpage.getLanguage(),window.bbcpage.getName()]).then((function(e){var t,c=e[0],i=e[1],u=e[2],l=e[3],d=v.isEU(i);if(r(t=c?"gb":d?"eu":"row")||(n(v.EXPLICIT_COOKIE_NAME,v.IMPLICIT_FLAG),v.setImplicitPolicy(t)),"gb"===t||"eu"===t){var m=v.get(v.PRIVACY_COOKIE_NAME)===v.CURRENT_PRIVACY_POLICY;o=v.get(v.PRIVACY_COOKIE_NAME),m&&r(t)||a(u,s,t,l),n(v.PRIVACY_COOKIE_NAME,v.CURRENT_PRIVACY_POLICY)}})).catch((function(){a("en",s,"gb","")}))}).apply(null,e)})).catch(t.oe)}()}();
//# sourceMappingURL=cookie-banners.bundle.js.map