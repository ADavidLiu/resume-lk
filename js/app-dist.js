"use strict";function _classCallCheck(s,e){if(!(s instanceof e))throw new TypeError("Cannot call a class as a function")}var Header=function s(){var e=this;_classCallCheck(this,s),this.scrollHandler=function(){50<=e.$DOM.window.scrollTop()?e.$DOM.header.addClass(e.selectors.header+"--scrolled"):e.$DOM.header.removeClass(e.selectors.header+"--scrolled")},this.toggleNav=function(){e.$DOM.btn.toggleClass(e.selectors.btn+"--active"),e.$DOM.header.toggleClass(e.selectors.header+"--active"),e.$DOM.nav.stop().slideToggle("fast")},this.selectors={window:window,header:"header",btn:"header__btn",nav:"header__nav"},this.$DOM={window:$(this.selectors.window),header:$("."+this.selectors.header),btn:$("."+this.selectors.btn),nav:$("."+this.selectors.nav)},this.$DOM.window.scroll(this.scrollHandler),this.$DOM.btn.click(this.toggleNav)},ScrollManager=function s(e){var l=this;_classCallCheck(this,s),this.scroll=function(s){s.preventDefault();var e=$(s.currentTarget).attr("data-scroll-to"),r=$('[data-scroll-target="'+e+'"]'),t=0;l.$window.width()<768?(t=$(".header__content-controls").innerHeight()+60,l._$header.toggleNav()):t=$(".header").innerHeight(),$.scrollTo(r,500,{offset:{top:-t}})},this._$header=e,this.$window=$(window),this.$trigger=$("[data-scroll-to]"),this.$trigger.click(this.scroll)};$(document).ready(function(){var s=new Header;new ScrollManager(s);$(".templates__slider").not(".templates__slider--small").slick({mobileFirst:!0,slidesToScroll:1,slidesToShow:1,arrows:!0,dots:!1,prevArrow:"<div class='slider__arrow slider__arrow--prev'><i class='fas fa-chevron-left'></i></div>",nextArrow:"<div class='slider__arrow slider__arrow--next'><i class='fas fa-chevron-right'></i></div>",autoplay:!0,autoplaySpeed:4e3,responsive:[{breakpoint:768,settings:{slidesToShow:2}},{breakpoint:992,settings:{slidesToShow:3}},{breakpoint:1200,settings:{slidesToShow:4}}]}),$(".templates__slider--small").slick({mobileFirst:!0,slidesToScroll:1,slidesToShow:1,arrows:!0,dots:!1,prevArrow:"<div class='slider__arrow slider__arrow--small slider__arrow--prev'><i class='fas fa-chevron-left'></i></div>",nextArrow:"<div class='slider__arrow slider__arrow--small slider__arrow--next'><i class='fas fa-chevron-right'></i></div>",autoplay:!0,autoplaySpeed:4e3,responsive:[{breakpoint:768,settings:{slidesToShow:2}}]}),$(".testimonials__slider").slick({mobileFirst:!0,slidesToScroll:1,slidesToShow:1,dots:!0,arrows:!1,adaptiveHeight:!0,customPaging:function(){return""},responsive:[{breakpoint:768,settings:{slidesToShow:2}},{breakpoint:992,settings:{slidesToShow:3}}]})});
//# sourceMappingURL=app-dist.js.map