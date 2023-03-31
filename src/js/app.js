import * as flsFunctions from "./modules/functions.js";
import Swiper from 'swiper';
import {
	Navigation,
	EffectFade
} from 'swiper';
import tabs from './modules/tabs.js';
import burger from './modules/burger.js';
import select from './modules/select.js';
import nums from './modules/nums.js';
import faq from './modules/faq.js';
import smoothScroll from './modules/smooth-scroll.js';
import modal from './modules/modal.js';
import modalHyst from './modules/modal-hyst.js';
import quiz from './modules/quiz.js';
import AOS from 'aos';

flsFunctions.isWebp();

AOS.init({
	// Global settings:
	disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
	startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
	initClassName: 'aos-init', // class applied after initialization
	animatedClassName: 'aos-animate', // class applied on animation
	useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
	disableMutationObserver: false, // disables automatic mutations' detections (advanced)
	debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
	throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


	// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
	offset: 120, // offset (in px) from the original trigger point
	delay: 0, // values from 0 to 3000, with step 50ms
	duration: 800, // values from 0 to 3000, with step 50ms
	easing: 'ease', // default easing for AOS animations
	once: false, // whether animation should happen only once - while scrolling down
	mirror: false, // whether elements should animate out while scrolling past them
	anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

const swiper = new Swiper('.banners-slider', {
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next1',
		prevEl: '.swiper-button-prev1'
	},
	modules: [Navigation, EffectFade],
	autoHeight: true,
	speed: 500,
	slidesPerView: 1,
	effect: 'fade'
});

const swiper2 = new Swiper('.news-slider', {
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next2',
		prevEl: '.swiper-button-prev2'
	},
	modules: [Navigation],
	autoHeight: true,
	speed: 500,
	slidesPerView: 1,
	spaceBetween: 20,
	breakpoints: {
		950: {
			slidesPerView: 2
		}
	}
});

const swiper3 = new Swiper('.partners-slider', {
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next3',
		prevEl: '.swiper-button-prev3'
	},
	modules: [Navigation],
	autoHeight: true,
	speed: 500,
	slidesPerView: 2,
	breakpoints: {
		900: {
			slidesPerView: 5
		},
		400: {
			slidesPerView: 3
		}
	}
});

const swiper4 = new Swiper('.good-slider', {
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next4',
		prevEl: '.swiper-button-prev4'
	},
	modules: [Navigation],
	autoHeight: true,
	speed: 500,
	spaceBetween: 15,
	slidesPerView: 1,
	breakpoints: {
		1000: {
			slidesPerView: 4
		},
		650: {
			slidesPerView: 3
		},
		400: {
			slidesPerView: 2
		}
	}
});

const swiperBlog = new Swiper(".slider-blog", {
	modules: [Navigation],
	loop: true,
	speed: 800,
	spaceBetween: 10,
	slidesPerView: 4,
	navigation: {
		nextEl: '.slider-blog .button-next',
		prevEl: '.slider-blog .button-prev'
	},
	breakpoints: {
		1000: {
			slidesPerView: 4,
		},
		750: {
			slidesPerView: 3,
		},
		600: {
			slidesPerView: 2
		},
		320: {
			slidesPerView: 1.3
		}
	}
});


for (const mobileSlider of document.querySelectorAll('.mobile-slider')) {
	if (mobileSlider) {
	  (function () {
		"use strict";

		const breakpoint = window.matchMedia("(max-width:600px)");
		let slider;

		const enableSwiper = function () {
			slider = new Swiper(mobileSlider, {
				modules: [Navigation],
				speed: 800,
				loop: true,
				spaceBetween: 6,
				slidesPerView: 4,
				observer: true,
                observeParents: true,
				navigation: {
					nextEl: '.articles-like-slider .button-next',
					prevEl: '.articles-like-slider .button-prev'
				},
				breakpoints: {
					1000: {
						slidesPerView: 4,
					},
					750: {
						slidesPerView: 3,
					},
					600: {
						slidesPerView: 2
					},
					320: {
						slidesPerView: 1.5
					}
				}
			});
		};

		const breakpointChecker = function () {
			if (breakpoint.matches === true) {
				if (slider !== undefined) slider.destroy(true, true);

				return;
			} else if (breakpoint.matches === false) {
				return enableSwiper();
			}
		};

		breakpoint.addListener(breakpointChecker);
		breakpointChecker();
	  })();
	}

  }




const blogItem = document.querySelectorAll('.blog__item');

blogItem.forEach(item => {
	item.addEventListener('click', (e) => {
		console.log(e.target);
		e.target.classList.toggle('active');
	})
})

const textBlockBtns = document.querySelectorAll('.text-block__btn'),
	textBlockText = document.querySelector('.text-block__text');

textBlockBtns.forEach(item => {
	item.addEventListener('click', (e) => {
		e.preventDefault();

		textBlockText.classList.toggle('active');
		textBlockBtns.forEach(item => item.classList.toggle('active'));
	});
})

