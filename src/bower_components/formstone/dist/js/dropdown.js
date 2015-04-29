/*! formstone v0.5.9 [dropdown.js] 2015-04-28 | MIT License | formstone.it */

!function(a,b){"use strict";function c(){H=b.$body}function d(c){c.multiple=this.prop("multiple"),c.disabled=this.is(":disabled"),c.multiple?c.links=!1:c.external&&(c.links=!0);var d=this.find(":selected").not(":disabled"),e=d.text(),f=this.find("option").index(d);c.multiple||""===c.label?c.label="":(d=this.prepend('<option value="" class="'+B.item_placeholder+'" selected>'+c.label+"</option>"),e=c.label,f=0);var g=this.find("option, optgroup"),h=g.filter("option");c.tabIndex=this[0].tabIndex,this[0].tabIndex=-1;var k=[B.base,c.customClass];c.mobile||b.isMobile?k.push(B.mobile):c.cover&&k.push(B.cover),c.multiple&&k.push(B.multiple),c.disabled&&k.push(B.disabled);var l='<div class="'+k.join(" ")+'" tabindex="'+c.tabIndex+'"></div>',m="";c.multiple||(m+='<button type="button" class="'+B.selected+'">',m+=a("<span></span>").text(x(e,c.trim)).html(),m+="</button>"),m+='<div class="'+B.options+'">',m+="</div>",this.wrap(l).after(m),c.$dropdown=this.parent(A.base),c.$allOptions=g,c.$options=h,c.$selected=c.$dropdown.find(A.selected),c.$wrapper=c.$dropdown.find(A.options),c.$placeholder=c.$dropdown.find(A.placeholder),c.index=-1,c.guid=E++,c.closed=!0,c.keyDownGUID=C.keyDown+c.guid,c.clickGUID=C.click+c.guid,i(c),c.multiple||t(f,c),c.$selected.touch({tap:!0}).on(C.tap,c,j),c.$dropdown.on(C.click,A.item,c,o).on(C.close,c,n),this.on(C.change,c,p),b.isMobile||(c.$dropdown.on(C.focus,c,q).on(C.blur,c,r),this.on(C.focus,c,function(a){a.data.$dropdown.trigger(C.raw.focus)}))}function e(a){a.$dropdown.hasClass(B.open)&&a.$selected.trigger(C.click),a.$el[0].tabIndex=a.tabIndex,a.$dropdown.off(C.namespace),a.$options.off(C.namespace),a.$placeholder.remove(),a.$selected.remove(),a.$wrapper.remove(),a.$el.off(C.namespace).show().unwrap()}function f(a,b){if("undefined"!=typeof b){var c=a.$items.index(a.$items.filter("[data-value="+b+"]"));a.$items.eq(c).addClass(B.item_disabled),a.$options.eq(c).prop("disabled",!0)}else a.$dropdown.hasClass(B.open)&&a.$selected.trigger(C.click),a.$dropdown.addClass(B.disabled),a.$el.prop("disabled",!0),a.disabled=!0}function g(a,b){if("undefined"!=typeof b){var c=a.$items.index(a.$items.filter("[data-value="+b+"]"));a.$items.eq(c).removeClass(B.item_disabled),a.$options.eq(c).prop("disabled",!1)}else a.$dropdown.removeClass(B.disabled),a.$el.prop("disabled",!1),a.disabled=!1}function h(a){var b=a.index;a.$allOptions=a.$el.find("option, optgroup"),a.$options=a.$allOptions.filter("option"),a.index=-1,b=a.$options.index(a.$options.filter(":selected")),i(a),a.multiple||t(b,a)}function i(b){for(var c="",d=0,e=0,f=b.$allOptions.length;f>e;e++){var g=b.$allOptions.eq(e),h=[];if("OPTGROUP"===g[0].tagName)h.push(B.group),g.is(":disabled")&&h.push(B.disabled),c+='<span class="'+h.join(" ")+'">'+g.attr("label")+"</span>";else{var i=g.val();g.attr("value")||g.attr("value",i),h.push(B.item),g.hasClass(B.item_placeholder)&&h.push(B.item_placeholder),g.is(":selected")&&h.push(B.item_selected),g.is(":disabled")&&h.push(B.item_disabled),c+='<button type="button" class="'+h.join(" ")+'" ',c+='data-value="'+i+'">',c+=a("<span></span>").text(x(g.text(),b.trim)).html(),c+="</button>",d++}}b.$items=b.$wrapper.html(c).find(A.item)}function j(a){D.killEvent(a);var c=a.data;if(!c.disabled)if(c.mobile||!b.isMobile||b.isFirefoxMobile)c.closed?k(c):l(c);else{var d=c.$el[0];if(G.createEvent){var e=G.createEvent("MouseEvents");e.initMouseEvent("mousedown",!1,!0,F,0,0,0,0,0,!1,!1,!1,!1,0,null),d.dispatchEvent(e)}else d.fireEvent&&d.fireEvent("onmousedown")}}function k(b){if(b.closed){a(A.base).not(b.$dropdown).trigger(C.close,[b]);{var c=b.$dropdown.offset(),d=H.outerHeight(),e=b.$wrapper.outerHeight(!0);b.index>=0?b.$items.eq(b.index).position():{left:0,top:0}}c.top+e>d&&b.$dropdown.addClass(B.bottom),H.on(b.clickGUID,":not("+A.options+")",b,m),b.$dropdown.addClass(B.open),u(b),b.closed=!1}}function l(a){a&&!a.closed&&(H.off(a.clickGUID),a.$dropdown.removeClass([B.open,B.bottom].join(" ")),a.closed=!0)}function m(b){D.killEvent(b);var c=b.data;c&&0===a(b.currentTarget).parents(A.base).length&&l(c)}function n(a){var b=a.data;b&&l(b)}function o(b){D.killEvent(b);var c=a(this),d=b.data;if(!d.disabled){if(d.$wrapper.is(":visible")){var e=d.$items.index(c);e!==d.index&&(t(e,d),v(d))}d.multiple||l(d)}}function p(b,c){var d=a(this),e=b.data;if(!c&&!e.multiple){var f=e.$options.index(e.$options.filter("[value='"+y(d.val())+"']"));t(f,e),v(e)}}function q(a){D.killEvent(a);var b=a.data;b.disabled||b.multiple||b.$dropdown.addClass(B.focus).on(b.keyDownGUID,b,s)}function r(a){D.killEvent(a);var b=a.data;b.$dropdown.removeClass(B.focus).off(b.keyDownGUID),b.multiple||l(b)}function s(c){var d=c.data;if(13===c.keyCode)d.closed||(l(d),t(d.index,d)),v(d);else if(!(9===c.keyCode||c.metaKey||c.altKey||c.ctrlKey||c.shiftKey)){D.killEvent(c);var e=d.$items.length-1,f=d.index<0?0:d.index;if(a.inArray(c.keyCode,b.isFirefox?[38,40,37,39]:[38,40])>-1)f+=38===c.keyCode||b.isFirefox&&37===c.keyCode?-1:1,0>f&&(f=0),f>e&&(f=e);else{var g,h,i=String.fromCharCode(c.keyCode).toUpperCase();for(h=d.index+1;e>=h;h++)if(g=d.$options.eq(h).text().charAt(0).toUpperCase(),g===i){f=h;break}if(0>f||f===d.index)for(h=0;e>=h;h++)if(g=d.$options.eq(h).text().charAt(0).toUpperCase(),g===i){f=h;break}}f>=0&&(t(f,d),u(d))}}function t(a,b){var c=b.$items.eq(a),d=b.$options.eq(a),e=c.hasClass(B.item_selected),f=c.hasClass(B.item_disabled);if(!f)if(b.multiple)e?(d.prop("selected",null),c.removeClass(B.item_selected)):(d.prop("selected",!0),c.addClass(B.item_selected));else if(a>-1&&a<b.$items.length){var g=d.data("label")||c.html();b.$selected.html(g).removeClass(A.item_placeholder),b.$items.filter(A.item_selected).removeClass(B.item_selected),b.$el[0].selectedIndex=a,c.addClass(B.item_selected),b.index=a}else""!==b.label&&b.$selected.html(b.label)}function u(a){var b=a.$items.eq(a.index),c=a.index>=0&&!b.hasClass(A.item_placeholder)?b.position():{left:0,top:0};a.$wrapper.scrollTop(a.$wrapper.scrollTop()+c.top)}function v(a){a.links?w(a):a.$el.trigger(C.raw.change,[!0])}function w(a){var b=a.$el.val();a.external?F.open(b):F.location.href=b}function x(a,b){return 0===b?a:a.length>b?a.substring(0,b)+"...":a}function y(a){return"string"==typeof a?a.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g,"\\$1"):a}var z=b.Plugin("dropdown",{widget:!0,defaults:{cover:!1,customClass:"",label:"",external:!1,links:!1,mobile:!1,trim:0},methods:{_setup:c,_construct:d,_destruct:e,disable:f,enable:g,update:h,open:k,close:l},classes:["cover","bottom","multiple","mobile","open","disabled","focus","selected","options","group","item","item_disabled","item_selected","item_placeholder"],events:{tap:"tap",close:"close"}}),A=z.classes,B=A.raw,C=z.events,D=z.functions,E=0,F=b.window,G=(b.$window,b.document),H=null}(jQuery,Formstone);