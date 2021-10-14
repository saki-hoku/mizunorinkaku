// スライドショー
var swiper = new Swiper(".mySwiper", {
	loop: true,
	effect: "fade",
	speed: 1000,
	autoplay: {
		delay: 4000
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev"
	},
	pagination: {
		el: ".swiper-pagination"
	}
});

// スムーススクロール
$(function () {
  $('a.js-scroll[href^="#"]').click(function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
　　 var speed = 400;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });
});