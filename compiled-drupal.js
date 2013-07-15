window.Modernizr=function(b,k,p){var h={},m=k.documentElement,a=k.createElement("modernizr"),a=a.style,c={},d=[],f=d.slice,e,g=function(a,d,b,f){var c,n=k.createElement("div"),e=k.body,q=e?e:k.createElement("body");if(parseInt(b,10))for(;b--;)c=k.createElement("div"),c.id=f?f[b]:"modernizr"+(b+1),n.appendChild(c);b=['&#173;<style id="smodernizr">',a,"</style>"].join("");n.id="modernizr";(e?n:q).innerHTML+=b;q.appendChild(n);e||(q.style.background="",m.appendChild(q));a=d(n,a);!e?q.parentNode.removeChild(q):
n.parentNode.removeChild(n);return!!a},s={}.hasOwnProperty,t;t="undefined"!==typeof s&&"undefined"!==typeof s.call?function(a,d){return s.call(a,d)}:function(a,d){return d in a&&"undefined"===typeof a.constructor.prototype[d]};Function.prototype.bind||(Function.prototype.bind=function(a){var d=this;if("function"!=typeof d)throw new TypeError;var b=f.call(arguments,1),c=function(){if(this instanceof c){var e=function(){};e.prototype=d.prototype;var e=new e,n=d.apply(e,b.concat(f.call(arguments)));
return Object(n)===n?n:e}return d.apply(a,b.concat(f.call(arguments)))};return c});for(var u in c)t(c,u)&&(e=u.toLowerCase(),h[e]=c[u](),d.push((h[e]?"":"no-")+e));h.addTest=function(a,d){if("object"==typeof a)for(var b in a)t(a,b)&&h.addTest(b,a[b]);else{a=a.toLowerCase();if(h[a]!==p)return h;d="function"==typeof d?d():d;enableClasses&&(m.className+=" "+(d?"":"no-")+a);h[a]=d}return h};a.cssText="";a=null;h._version="2.6.1";h.mq=function(a){var d=b.matchMedia||b.msMatchMedia;if(d)return d(a).matches;
var f;g("@media "+a+" { #modernizr { position: absolute; } }",function(a){f="absolute"==(b.getComputedStyle?getComputedStyle(a,null):a.currentStyle).position});return f};h.testStyles=g;return h}(this,this.document);(function(b,k,p){var h={version:"2.0.3",tipLocation:"bottom",nubPosition:"auto",scroll:!0,scrollSpeed:300,timer:0,autoStart:!1,startTimerOnClick:!0,startOffset:0,nextButton:!0,tipAnimation:"fade",pauseAfter:[],tipAnimationFadeSpeed:300,cookieMonster:!1,cookieName:"joyride",cookieDomain:!1,cookiePath:!1,localStorage:!1,localStorageKey:"joyride",tipContainer:"body",modal:!1,expose:!1,postExposeCallback:b.noop,preRideCallback:b.noop,postRideCallback:b.noop,preStepCallback:b.noop,postStepCallback:b.noop,
template:{link:'<a href="#close" class="joyride-close-tip">X</a>',timer:'<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>',tip:'<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>',wrapper:'<div class="joyride-content-wrapper" role="dialog"></div>',button:'<a href="#" class="joyride-next-tip"></a>',modal:'<div class="joyride-modal-bg"></div>',expose:'<div class="joyride-expose-wrapper"></div>',exposeCover:'<div class="joyride-expose-cover"></div>'}},
m=m||!1,a={},c={init:function(d){return this.each(function(){if(b.isEmptyObject(a)){a=b.extend(!0,h,d);a.document=k.document;a.$document=b(a.document);a.$window=b(k);a.$content_el=b(this);a.$body=b(a.tipContainer);a.body_offset=b(a.tipContainer).position();a.$tip_content=b("> li",a.$content_el);a.paused=!1;a.attempts=0;a.tipLocationPatterns={top:["bottom"],bottom:[],left:["right","top","bottom"],right:["left","top","bottom"]};c.jquery_check();b.isFunction(b.cookie)||(a.cookieMonster=!1);if((!a.cookieMonster||
!b.cookie(a.cookieName))&&(!a.localStorage||!c.support_localstorage()||!localStorage.getItem(a.localStorageKey)))a.$tip_content.each(function(a){c.create({$li:b(this),index:a})}),a.autoStart&&(!a.startTimerOnClick&&0<a.timer?(c.show("init"),c.startTimer()):c.show("init"));a.$document.on("click.joyride",".joyride-next-tip, .joyride-modal-bg",function(d){d.preventDefault();1>a.$li.next().length?c.end():0<a.timer?(clearTimeout(a.automate),c.hide(),c.show(),c.startTimer()):(c.hide(),c.show())});a.$document.on("click.joyride",
".joyride-close-tip",function(a){a.preventDefault();c.end()});a.$window.bind("resize.joyride",function(d){a.$li&&(a.exposed&&0<a.exposed.length&&b(a.exposed).each(function(){var a=b(this);c.un_expose(a);c.expose(a)}),c.is_phone()?c.pos_phone():c.pos_default())})}else c.restart()})},resume:function(){c.set_li();c.show()},nextTip:function(){1>a.$li.next().length?c.end():0<a.timer?(clearTimeout(a.automate),c.hide(),c.show(),c.startTimer()):(c.hide(),c.show())},tip_template:function(d){var f,e,g;d.tip_class=
d.tip_class||"";f=b(a.template.tip).addClass(d.tip_class);e=b.trim(b(d.li).html())+c.button_text(d.button_text)+a.template.link+c.timer_instance(d.index);g=b(a.template.wrapper);d.li.attr("data-aria-labelledby")&&g.attr("aria-labelledby",d.li.attr("data-aria-labelledby"));d.li.attr("data-aria-describedby")&&g.attr("aria-describedby",d.li.attr("data-aria-describedby"));f.append(g);f.first().attr("data-index",d.index);b(".joyride-content-wrapper",f).append(e);return f[0]},timer_instance:function(d){return 0===
d&&a.startTimerOnClick&&0<a.timer||0===a.timer?"":c.outerHTML(b(a.template.timer)[0])},button_text:function(d){a.nextButton?(d=b.trim(d)||"Next",d=c.outerHTML(b(a.template.button).append(d)[0])):d="";return d},create:function(d){var f=d.$li.attr("data-button")||d.$li.attr("data-text"),e=d.$li.attr("class");d=b(c.tip_template({tip_class:e,index:d.index,button_text:f,li:d.$li}));b(a.tipContainer).append(d)},show:function(d){var f={},e=[],g=0,e=null;if(a.$li===p||-1===b.inArray(a.$li.index(),a.pauseAfter))if(a.paused?
a.paused=!1:c.set_li(d),a.attempts=0,a.$li.length&&0<a.$target.length){d&&(a.preRideCallback(a.$li.index(),a.$next_tip),a.modal&&c.show_modal());a.preStepCallback(a.$li.index(),a.$next_tip);e=(a.$li.data("options")||":").split(";");g=e.length;for(d=g-1;0<=d;d--)g=e[d].split(":"),2===g.length&&(f[b.trim(g[0])]=b.trim(g[1]));a.tipSettings=b.extend({},a,f);a.tipSettings.tipLocationPattern=a.tipLocationPatterns[a.tipSettings.tipLocation];a.modal&&a.expose&&c.expose();!/body/i.test(a.$target.selector)&&
a.scroll&&c.scroll_to();c.is_phone()?c.pos_phone(!0):c.pos_default(!0);e=b(".joyride-timer-indicator",a.$next_tip);/pop/i.test(a.tipAnimation)?(e.outerWidth(0),0<a.timer?(a.$next_tip.show(),e.animate({width:b(".joyride-timer-indicator-wrap",a.$next_tip).outerWidth()},a.timer)):a.$next_tip.show()):/fade/i.test(a.tipAnimation)&&(e.outerWidth(0),0<a.timer?(a.$next_tip.fadeIn(a.tipAnimationFadeSpeed),a.$next_tip.show(),e.animate({width:b(".joyride-timer-indicator-wrap",a.$next_tip).outerWidth()},a.timer)):
a.$next_tip.fadeIn(a.tipAnimationFadeSpeed));a.$current_tip=a.$next_tip;b(".joyride-next-tip",a.$current_tip).focus();c.tabbable(a.$current_tip)}else a.$li&&1>a.$target.length?c.show():c.end();else a.paused=!0},is_phone:function(){return m?m.mq("only screen and (max-width: 767px)"):767>a.$window.width()?!0:!1},support_localstorage:function(){return m?m.localstorage:!!k.localStorage},hide:function(){a.modal&&a.expose&&c.un_expose();a.modal||b(".joyride-modal-bg").hide();a.$current_tip.hide();a.postStepCallback(a.$li.index(),
a.$current_tip)},set_li:function(d){d?(a.$li=a.$tip_content.eq(a.startOffset),c.set_next_tip(),a.$current_tip=a.$next_tip):(a.$li=a.$li.next(),c.set_next_tip());c.set_target()},set_next_tip:function(){a.$next_tip=b(".joyride-tip-guide[data-index="+a.$li.index()+"]")},set_target:function(){var d=a.$li.attr("data-class"),c=a.$li.attr("data-id");a.$target=c?b(a.document.getElementById(c)):d?b("."+d).filter(":visible").first():b("body")},scroll_to:function(){var d;d=a.$window.height()/2;d=Math.ceil(a.$target.offset().top-
d+a.$next_tip.outerHeight());b("html, body").stop().animate({scrollTop:d},a.scrollSpeed)},paused:function(){return-1===b.inArray(a.$li.index()+1,a.pauseAfter)?!0:!1},destroy:function(){b.isEmptyObject(a)||a.$document.off(".joyride");b(k).off(".joyride");b(".joyride-close-tip, .joyride-next-tip, .joyride-modal-bg").off(".joyride");b(".joyride-tip-guide, .joyride-modal-bg").remove();clearTimeout(a.automate);a={}},restart:function(){a.autoStart?(c.hide(),a.$li=p,c.show("init")):(!a.startTimerOnClick&&
0<a.timer?(c.show("init"),c.startTimer()):c.show("init"),a.autoStart=!0)},pos_default:function(d){Math.ceil(a.$window.height()/2);a.$next_tip.offset();var f=b(".joyride-nub",a.$next_tip),e=Math.ceil(f.outerWidth()/2),g=Math.ceil(f.outerHeight()/2);if(d=d||!1)a.$next_tip.css("visibility","hidden"),a.$next_tip.show();/body/i.test(a.$target.selector)?a.$li.length&&c.pos_modal(f):(c.bottom()?(a.$next_tip.css({top:a.$target.offset().top+g+a.$target.outerHeight(),left:a.$target.offset().left}),/right/i.test(a.tipSettings.nubPosition)&&
a.$next_tip.css("left",a.$target.offset().left-a.$next_tip.outerWidth()+a.$target.outerWidth()),c.nub_position(f,a.tipSettings.nubPosition,"top")):c.top()?(a.$next_tip.css({top:a.$target.offset().top-a.$next_tip.outerHeight()-g,left:a.$target.offset().left}),c.nub_position(f,a.tipSettings.nubPosition,"bottom")):c.right()?(a.$next_tip.css({top:a.$target.offset().top,left:a.$target.outerWidth()+a.$target.offset().left+e}),c.nub_position(f,a.tipSettings.nubPosition,"left")):c.left()&&(a.$next_tip.css({top:a.$target.offset().top,
left:a.$target.offset().left-a.$next_tip.outerWidth()-e}),c.nub_position(f,a.tipSettings.nubPosition,"right")),!c.visible(c.corners(a.$next_tip))&&a.attempts<a.tipSettings.tipLocationPattern.length&&(f.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"),a.tipSettings.tipLocation=a.tipSettings.tipLocationPattern[a.attempts],a.attempts++,c.pos_default(!0)));d&&(a.$next_tip.hide(),a.$next_tip.css("visibility","visible"))},pos_phone:function(d){var f=a.$next_tip.outerHeight();
a.$next_tip.offset();var e=a.$target.outerHeight(),g=b(".joyride-nub",a.$next_tip),h=Math.ceil(g.outerHeight()/2);d=d||!1;g.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left");d&&(a.$next_tip.css("visibility","hidden"),a.$next_tip.show());/body/i.test(a.$target.selector)?a.$li.length&&c.pos_modal(g):c.top()?(a.$next_tip.offset({top:a.$target.offset().top-f-h}),g.addClass("bottom")):(a.$next_tip.offset({top:a.$target.offset().top+e+h}),g.addClass("top"));d&&(a.$next_tip.hide(),
a.$next_tip.css("visibility","visible"))},pos_modal:function(a){c.center();a.hide();c.show_modal()},show_modal:function(){1>b(".joyride-modal-bg").length&&b("body").append(a.template.modal).show();/pop/i.test(a.tipAnimation)?b(".joyride-modal-bg").show():b(".joyride-modal-bg").fadeIn(a.tipAnimationFadeSpeed)},expose:function(){var d,f,e,g,h="expose-"+Math.floor(1E4*Math.random());if(0<arguments.length&&arguments[0]instanceof b)e=arguments[0];else if(a.$target&&!/body/i.test(a.$target.selector))e=
a.$target;else return!1;if(1>e.length)return k.console&&console.error("element not valid",e),!1;d=b(a.template.expose);a.$body.append(d);d.css({top:e.offset().top,left:e.offset().left,width:e.outerWidth(!0),height:e.outerHeight(!0)});f=b(a.template.exposeCover);g={zIndex:e.css("z-index"),position:e.css("position")};e.css("z-index",1*d.css("z-index")+1);"static"==g.position&&e.css("position","relative");e.data("expose-css",g);f.css({top:e.offset().top,left:e.offset().left,width:e.outerWidth(!0),height:e.outerHeight(!0)});
a.$body.append(f);d.addClass(h);f.addClass(h);a.tipSettings.exposeClass&&(d.addClass(a.tipSettings.exposeClass),f.addClass(a.tipSettings.exposeClass));e.data("expose",h);a.postExposeCallback(a.$li.index(),a.$next_tip,e);c.add_exposed(e)},un_expose:function(){var d,f,e;e=!1;if(0<arguments.length&&arguments[0]instanceof b)f=arguments[0];else if(a.$target&&!/body/i.test(a.$target.selector))f=a.$target;else return!1;if(1>f.length)return k.console&&console.error("element not valid",f),!1;d=f.data("expose");
d=b("."+d);1<arguments.length&&(e=arguments[1]);!0===e?b(".joyride-expose-wrapper,.joyride-expose-cover").remove():d.remove();e=f.data("expose-css");"auto"==e.zIndex?f.css("z-index",""):f.css("z-index",e.zIndex);e.position!=f.css("position")&&("static"==e.position?f.css("position",""):f.css("position",e.position));f.removeData("expose");f.removeData("expose-z-index");c.remove_exposed(f)},add_exposed:function(d){a.exposed=a.exposed||[];d instanceof b?a.exposed.push(d[0]):"string"==typeof d&&a.exposed.push(d)},
remove_exposed:function(d){var c;d instanceof b?c=d[0]:"string"==typeof d&&(c=d);a.exposed=a.exposed||[];for(d=0;d<a.exposed.length;d++)if(a.exposed[d]==c){a.exposed.splice(d,1);break}},center:function(){var d=a.$window;a.$next_tip.css({top:(d.height()-a.$next_tip.outerHeight())/2+d.scrollTop(),left:(d.width()-a.$next_tip.outerWidth())/2+d.scrollLeft()});return!0},bottom:function(){return/bottom/i.test(a.tipSettings.tipLocation)},top:function(){return/top/i.test(a.tipSettings.tipLocation)},right:function(){return/right/i.test(a.tipSettings.tipLocation)},
left:function(){return/left/i.test(a.tipSettings.tipLocation)},corners:function(d){var b=a.$window,c=b.height()/2,c=Math.ceil(a.$target.offset().top-c+a.$next_tip.outerHeight()),g=b.width()+b.scrollLeft(),h=b.height()+c,k=b.height()+b.scrollTop(),m=b.scrollTop();c<m&&(m=0>c?0:c);h>k&&(k=h);return[d.offset().top<m,g<d.offset().left+d.outerWidth(),k<d.offset().top+d.outerHeight(),b.scrollLeft()>d.offset().left]},visible:function(a){for(var b=a.length;b--;)if(a[b])return!1;return!0},nub_position:function(a,
b,c){"auto"===b?a.addClass(c):a.addClass(b)},startTimer:function(){a.$li.length?a.automate=setTimeout(function(){c.hide();c.show();c.startTimer()},a.timer):clearTimeout(a.automate)},end:function(){a.cookieMonster&&b.cookie(a.cookieName,"ridden",{expires:365,domain:a.cookieDomain,path:a.cookiePath});a.localStorage&&localStorage.setItem(a.localStorageKey,!0);0<a.timer&&clearTimeout(a.automate);a.modal&&a.expose&&c.un_expose();b(".joyride-modal-bg").hide();a.$current_tip.hide();a.postStepCallback(a.$li.index(),
a.$current_tip);a.postRideCallback(a.$li.index(),a.$current_tip)},jquery_check:function(){return!b.isFunction(b.fn.on)?(b.fn.on=function(a,b,c){return this.delegate(b,a,c)},b.fn.off=function(a,b,c){return this.undelegate(b,a,c)},!1):!0},outerHTML:function(a){return a.outerHTML||(new XMLSerializer).serializeToString(a)},version:function(){return a.version},tabbable:function(a){b(a).on("keydown",function(f){if(!f.isDefaultPrevented()&&f.keyCode&&27===f.keyCode)f.preventDefault(),c.end();else if(9===
f.keyCode){var e=b(a).find(":tabbable"),g=e.filter(":first"),e=e.filter(":last");f.target===e[0]&&!f.shiftKey?(g.focus(1),f.preventDefault()):f.target===g[0]&&f.shiftKey&&(e.focus(1),f.preventDefault())}})}};b.fn.joyride=function(a){if(c[a])return c[a].apply(this,Array.prototype.slice.call(arguments,1));if("object"===typeof a||!a)return c.init.apply(this,arguments);b.error("Method "+a+" does not exist on jQuery.joyride")}})(jQuery,this);window.Walkhub||(window.Walkhub={});
(function(b){function k(a,b){function d(b,c){c?c.source.postMessage(JSON.stringify(b),c.origin):a.postMessage(JSON.stringify(b),f)}function c(a){g&&d({type:"log",log:a,key:g})}var e={},f=b,g,h=!1;this.pause=function(){h=!0};this.resume=function(){h=!1};window.addEventListener("message",function(b){if(!h){var l=JSON.parse(b.data);l&&l.type&&"ping"==l.type?(c(["Ping received, sending pong",b.origin]),b.source.postMessage(JSON.stringify({type:"pong",tag:"proxy"}),b.origin)):g?a==b.source?l.proxy_key&&
e[l.proxy_key]&&(d(l,e[l.proxy_key]),c(["Proxying data to the client",l])):(l.proxy_key||(l.proxy_key=Math.random().toString(),e[l.proxy_key]={source:b.source,origin:b.origin},d({type:"setProxy",proxy_key:l.proxy_key},e[l.proxy_key]),c(["Client connected",l.proxy_key])),d(l),c(["Proxying data to the server",l])):l&&(l.type&&"connect_ok"==l.type)&&(f=l.origin,g=l.key,c("Proxy connected"))}});d({type:"connect",origin:window.location.origin,tag:"proxy"});c("Proxy starting.")}function p(a,b){function d(b){b.key=
b.key||h;b.tag=b.tag||"client";k&&(b.proxy_key=k);a.postMessage(JSON.stringify(b),f);console.log(["Client data",b])}function c(){if(a.closed){var b=function(){console.log("Cancel walkthrough")};Walkhub.showExitDialog("Walkhub window is closed.",{"Cancel walkthrough":b},b)}else setTimeout(c,t)}var e={},f=b,g,h,k,m=this;this.stateChanged=null;this.send=function(a,b,c,w){if(!f)return!1;var n=Math.random().toString();e[n]={success:c,error:w};d({type:"request",ticket:n,URL:g+"api/v2/"+a,data:b});return!0};
this.log=function(a){d({type:"log",log:a})};var p={connect_ok:function(a){h||(k||(f=a.origin),g=a.baseurl,h=a.key,d({type:"getState"}))},success:function(a){e[a.ticket]&&(e[a.ticket].success(a.data),delete e[a.ticket])},error:function(a){e[a.ticket]&&(e[a.ticket].error(a.status,a.error),delete e[a.ticket])},state:function(a){m.stateChanged&&m.stateChanged(a.state)},setProxy:function(a){k=a.proxy_key}};window.addEventListener("message",function(a){var b=JSON.parse(a.data),d=b&&b.type&&p[b.type];d&&
(console.log(a),d(b,a.source))});this.updateState=function(a){d({type:"setState",state:a})};this.finish=function(){d({type:"finished"})};this.start=function(){a&&f&&d({type:"connect",origin:window.location.origin,url:window.location.href});c()}}function h(a){function b(d){e=null;a.updateState(c);g=null;a.send("walkhub-walkthrough/"+c.walkthrough,null,function(b){e=b;a.log(["Walkthrough loaded",e]);d&&d(b)},f)}function d(b){g=null;a.send("walkhub-step/"+c.step,null,function(d){var e=["arg1","arg2",
"highlight","description"],f;for(f in c.parameters)for(var l in e)l=e[l],d[l]&&(d[l]=d[l].replace("["+f+"]",c.parameters[f]));g=d;a.log(["Step loaded",g]);b&&b(d)},f)}var c={walkthrough:null,step:null,completed:!1,stepIndex:0,parameters:{}},e=null,g=null,h=this;this.initStep=function(){a.log("Step initialization started.");c.completed=!1;a.updateState(c);Walkhub.execute(g,!1,function(){c.completed=!0;a.updateState(c);a.log("Step completed")});r[g.pureCommand].auto&&(a.log("Automatically executing step."),
h.nextStep())};this.finish=function(){c.walkthrough=null;c.step=null;c.completed=!1;c.stepIndex=0;g=e=null;a.updateState(c);a.finish()};this.nextStep=function(){!c.completed&&g&&(a.log("Executing incomplete step."),Walkhub.execute(g,!0));e.steps.length==c.stepIndex?(a.log("Last step"),h.finish()):(a.log("Loading next step"),c.step=e.steps[c.stepIndex],c.stepIndex++,a.updateState(c),d(function(){a.log("Next step loaded, initalizing.");h.initStep()}))};this.updateCurrentStep=function(b,d){console.log(["Updating step",
b]);a.send("walkhub-step/"+c.step,b,function(a){console.log(["Updated data",a]);b=a;d(a)},function(){alert("Updating step failed")})};a.stateChanged=function(e){c=e;a.log(["New state",c]);c.walkthrough&&b(function(){c.step?(a.log("Loading step"),d(function(){h.initStep()})):(a.log("Empty step"),h.nextStep())})};a.start()}function m(a,c){b("<iframe />").attr("src","walkhub-"+a+"://localhost/?"+encodeURIComponent(c)).hide().appendTo(b("body"))}function a(){m("stepcompleted")}function c(a){if(!a)return null;
var c={identifier:function(a){var b=c.id(a);0==b.length&&(b=c.name(a));return b},id:function(a){return b("#"+a)},name:function(a){return b("[name="+a+"]")},dom:function(a){},xpath:function(a){a=document.evaluate(a,document,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null);return b(a)},link:function(a){a=a.replace("(","\\(").replace(")","\\)");return b('a:contains("'+a+'")')},css:function(a){return b(a)},ui:function(a){}},d;for(d in c)if(0===a.indexOf(d+"="))return c[d](a.substr(d.length+1));return b(a)}
function d(a){var b={label:function(a){return a}},c;for(c in b)if(0===a.indexOf(c+"="))return b[c](a.substr(c.length+1));return a}function f(){console.log(arguments)}function e(a,c,d,e,f){var h="px-walkhub-"+u++;v&&(v.joyride("end"),v.joyride("destroy"));a&&a.addClass(h);a=b('<p><span class="step-title-UNIQ">TITLE</span><br /><span class="step-description-UNIQ">DESCRIPTION</span></p>'.replace("TITLE",c.title||"").replace("DESCRIPTION",c.description||"").replace(/UNIQ/g,h));var k={nextButton:!0,cookieMonster:!1,
autoStart:!0,preStepCallback:function(){b("div.joyride-tip-guide").css("z-index",s);b(".joyride-next-tip").unbind("click").bind("click",function(a){a.preventDefault();walkthrough.nextStep()}).html("Next");c.canEdit&&b("<a />").attr("href","#").addClass("joyride-normal-tip").html("Edit").click(function(a){a.preventDefault();g(c,function(){b(".joyride-next-tip, .joyride-normal-tip").show()},function(a){b("span.step-title-"+h).html(a.title);b("span.step-description-"+h).html(a.description)});b(".joyride-next-tip, .joyride-normal-tip").hide()}).appendTo(b(".joyride-content-wrapper"));
f&&f()}};e&&(k=b.extend(k,e));v=b("<ol />").append(b("<li />").append(a).attr("data-class",d?"":h)).hide().appendTo(b("body")).joyride(k)}function g(a,c,d){var e=b("<form><fieldset></fieldset></form>"),f=b("fieldset",e);b("<label />").attr("for","title").html("Title").appendTo(f);b("<input />").attr("type","textfield").attr("name","title").attr("id","title").val(a.titleRaw).appendTo(f);b("<label />").attr("for","description").html("Description").appendTo(f);b("<textarea />").val(a.descriptionRaw).attr("name",
"description").attr("id","description").appendTo(f);b("<input />").attr("type","submit").val("Save").appendTo(f);e.submit(function(f){f.preventDefault();a.titleRaw=b("input#title",e).val();a.descriptionRaw=b("textarea#description",e).val();c();e.remove();window.walkthrough.updateCurrentStep(a,d)});e.appendTo(b(".joyride-content-wrapper"))}var s=2147483647,t=500;window.console||(window.console={log:function(a){m("log",a)}});var u=0,v=null,r={click:{init:function(b,d){c(b.arg1).unbind("click.walkthough").bind("click.walkhub",
d||a)},execute:function(a){c(a.arg1).get(0).click()}},type:{init:function(b,d){c(b.arg1).unbind("change.walkhub").bind("change.walkhub",d||a)},execute:function(a){c(a.arg1).val(a.arg2).change()}},select:{init:function(b,d){c(b.arg1).unbind("change.walkhub").bind("change.walkhub",d||a)},execute:function(a){c(a.arg1).val(d(a.arg2)).change()}},open:{init:function(a,b){},execute:function(a){window.location=a.arg1},auto:!0}};window.client=null;window.walkthrough=null;window.proxy=null;b(function(){function a(b,
c){var d=JSON.stringify({type:"ping",origin:window.location.origin});b.postMessage(d,c)}var b;b=Walkhub.Origin?Walkhub.Origin():window.location.hash.substr(1);window.addEventListener("message",function(a){!window.client&&"pong"===JSON.parse(a.data).type&&(window.client=new p(a.source,a.origin),window.proxy=new k(a.source,a.origin),window.walkthrough=new h(window.client),window.removeEventListener("message",this))});window.opener&&a(window.opener,b);window.parent&&window.parent!=window&&(a(window.parent,
window.location.origin),a(window.parent,b))});Walkhub.showExitDialog=function(a,c,d){var f={nextButton:!1};d&&(f.postRideCallback=d);e(null,{description:a},!0,f,function(){for(var a in c)(function(){var d=c[a],e=b("<a />").attr("href","#").addClass("joyride-next-tip").html(a).click(function(a){a.preventDefault();d()});b(".joyride-content-wrapper").append(e)})()})};Walkhub.execute=function(a,b,d){setTimeout(function(){r[a.pureCommand]&&(r[a.pureCommand].init(a,d),(a.highlight||r[a.pureCommand].auto)&&
!b?e(c(a.highlight),a,!1):r[a.pureCommand].execute(a))},0)};Walkhub.modal=function(a,b){setTimeout(function(){e(null,a,!0)},0)}})(jQuery);
