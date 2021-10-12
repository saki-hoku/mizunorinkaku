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

const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
for (let i = 0; i < smoothScrollTrigger.length; i++){
	smoothScrollTrigger[i].addEventListener('click', (e) => {
		e.preventDefault();
		let href = smoothScrollTrigger[i].getAttribute('href');
		let targetElement = document.getElementById(href.replace('#', ''));
		const rect = targetElement.getBoundingClientRect().top;
		const offset = window.pageYOffset;
		const gap = 60;
		const target = rect + offset - gap;
		window.scrollTo({
			top: target,
			behavior: 'smooth',
		});
	});
}