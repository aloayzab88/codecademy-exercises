let resizeTimer;jQuery((function(){jQuery(window).on("resize",(function(){jQuery("body").addClass("u-resize-animation-stopper"),clearTimeout(resizeTimer),resizeTimer=setTimeout((function(){jQuery("body").removeClass("u-resize-animation-stopper")}),400)}))}));
//# sourceMappingURL=tools.stop-transition-on-resize.js.map
