(function ($) {
	"use strict";

	var windowOn = $(window);

	/*===========================================
		=            PreLoader Js         =
	=============================================*/

	$(window).on('load', function () {
		$(".preloader").fadeOut(500);
	});

	/*===========================================
		=            header-sticky          =
	=============================================*/
	windowOn.on('scroll', function () {
		var scroll = windowOn.scrollTop();
		if (scroll < 200) {
			$("#header-sticky").removeClass("header-sticky");
		} else {
			$("#header-sticky").addClass("header-sticky");
		}
	});

	if ($('.td-header-height').length > 0) {
		var headerHeight = document.querySelector(".td-header-height");      
		var setHeaderHeight = headerHeight.offsetHeight;	
		$(".td-header-height").each(function () {
			$(this).css({
				'height' : $(this).height()
			});
		});
	}

	/*===========================================
		=    		Mobile Menu			      =
	=============================================*/
	//SubMenu Dropdown Toggle
	if ($('.tdmenu__wrap li.menu-item-has-children ul').length) {
		$('.tdmenu__wrap .navigation li.menu-item-has-children').append('<div class="dropdown-btn"><span class="plus-line"></span></div>');
	}

	//Mobile Nav Hide Show
	if ($('.tdmobile__menu').length) {

		var mobileMenuContent = $('.tdmenu__wrap .tdmenu__main-menu').html();
		$('.tdmobile__menu .tdmobile__menu-box .tdmobile__menu-outer').append(mobileMenuContent);

		//Dropdown Button
		$('.tdmobile__menu li.menu-item-has-children .dropdown-btn').on('click', function () {
			$(this).toggleClass('open');
			$(this).prev('ul').slideToggle(300);
		});
		//Menu Toggle Btn
		$('.mobile-nav-toggler').on('click', function () {
			$('body').addClass('mobile-menu-visible');
		});

		//Menu Toggle Btn
		$('.tdmobile__menu-backdrop, .tdmobile__menu .close-btn').on('click', function () {
			$('body').removeClass('mobile-menu-visible');
		});
	};


	/*===========================================
		=           Scroll Up  	         =
	=============================================*/
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 245) {
			$("#sticky-header").removeClass("sticky-menu");
			$('.scroll-to-target').removeClass('open');
			$("#header-fixed-height").removeClass("active-height");

		} else {
			$("#sticky-header").addClass("sticky-menu");
			$('.scroll-to-target').addClass('open');
			$("#header-fixed-height").addClass("active-height");
		}
	});

	if ($('.scroll-to-target').length) {
		$(".scroll-to-target").on('click', function () {
			var target = $(this).attr('data-target');
			// animate
			$('html, body').animate({
			scrollTop: $(target).offset().top
			}, 0);

		});
	}

	/*===========================================
		=          Data Background    =
	=============================================*/
	$("[data-background]").each(function () {
		$(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
	});

	$("[data-bg-color]").each(function () {
		$(this).css("background-color", $(this).attr("data-bg-color"));
	});

	$("[data-width]").each(function () {
		$(this).css("width", $(this).attr("data-width") + "px");
	});

	/*=============================================
		=            Header Search            =
	=============================================*/
	$(".search-open-btn").on("click", function () {
		$(".search__popup").addClass("search-opened");
		$(".search-popup-overlay").addClass("search-popup-overlay-open");
	});
	$(".search-close-btn").on("click", function () {
		$(".search__popup").removeClass("search-opened");
		$(".search-popup-overlay").removeClass("search-popup-overlay-open");
	});

	/*=============================================
	=     Offcanvas Menu      =
	=============================================*/
	$(".menu-tigger").on("click", function () {
		$(".offCanvas__info, .offCanvas__overly").addClass("active");
		return false;
	});
	$(".menu-close, .offCanvas__overly").on("click", function () {
		$(".offCanvas__info, .offCanvas__overly").removeClass("active");
	});



	/*===========================================
		=       Odometer Active    =
	=============================================*/
	$('.odometer').appear(function (e) {
		var odo = $(".odometer");
		odo.each(function () {
			var countNumber = $(this).attr("data-count");
			$(this).html(countNumber);
		});
	});


	/*===========================================
		=        Magnific Popup    =
	=============================================*/
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});


	/*===========================================
		=        magnificPopup video view    =
	=============================================*/
	$('.popup-video').magnificPopup({
		type: 'iframe'
	});



	/*=============================================
		=       Nice Select Js      =
	=============================================*/
	$('.select').niceSelect();

	/*=============================================
		=      Wow Js     =
	=============================================*/
	new WOW().init();


	/*=============================================
		=       td-hero-text-slide-active	      =
	=============================================*/

	var td_hero_text_slide = new Swiper(".td-hero-text-slide-active", {
		loop: true,
		freemode: true,
		slidesPerView: 'auto',
		spaceBetween: 30,
		centeredSlides: true,
		allowTouchMove: false,
		speed: 10000,
		autoplay: {
		  delay: 1,
		  disableOnInteraction: true,
		},
	});

	/*=============================================
		=        td-project-slider-active 	       =
	=============================================*/
	var portfolio = new Swiper(".td-portfolio-slider-active", {
		slidesPerView: 1,
		speed:1000,
		spaceBetween: 24,
		loop: true,
		centeredSlides: true,
		observer: true,
		observeParents: true,
		autoplay: {
			delay: 4000,
		},
		breakpoints: {
			'1200': {
				slidesPerView: 2,
			},
			'991': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		navigation: {
			nextEl: ".td-portfolio-next",
			prevEl: ".td-portfolio-prev",
		},
	});

	/*=============================================
		=        Team Social Active 	       =
	=============================================*/
	$('.social-toggle-icon').on('click', function () {
		$(this).parent().find('ul').slideToggle(400);
		$(this).find('i').toggleClass('fa-times');
		return false;
	});

	/*=============================================
		=        td-instagram-slide	       =
	=============================================*/
	var swiper = new Swiper(".td-instagram-slide", {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		breakpoints: {
			'1200': {
				slidesPerView: 5,
			},
			'991': {
				slidesPerView: 5,
			},
			'768': {
				slidesPerView: 4,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});

	/*=============================================
		=        td-testimonial-thumb-active       =
	=============================================*/
	document.addEventListener('DOMContentLoaded', function () {
		var thumbs = new Swiper(".td-testimonial-thumb-active", {
			spaceBetween: 0,
			slidesPerView: 4,
			loop: false,
			allowTouchMove: false,
			slideToClickedSlide: true,
			watchSlidesProgress: true,
		});

		var slider = new Swiper(".td-testimonial-content-active", {
			spaceBetween: 0,
			slidesPerView: 1,
			loopedSlides: 6,
			loop: false,
			allowTouchMove: true,
			autoplay: {
				delay: 6000,
			},
			navigation: {
				nextEl: ".td-testimonial-next",
				prevEl: ".td-testimonial-prev",
			},
			thumbs: {
				swiper: thumbs
			}
		});
	});



	////////////////////////////////////////////////////
	// 05. td-testimonial-2-slider-active
	const progressBar = $(".shop-slider-progress-bar span");

	var gallery = new Swiper('.td-hero-2-zoom', {
		slidesPerView: 1,
		loop: true,
		autoplay: true,
		arrow: false,
		spaceBetween: 0,
		speed: 1400,
		pagination: {
			el: '#paginations',
			type: 'custom',
			renderCustom: function (swiper, current, total) {
				let zero = total > 9 ? '' : '0';
				let index = zero + current
				let all = zero + total
				let html = `<div class="shop-slider-pagination">
								<span>${index}</span>
								<span>${all}</span>
							</div>`;
				return html;
			}
		},

		autoplay: {
			delay: 2500,
			disableOnInteraction: false
		},
		on: {
			autoplayTimeLeft(s, time, progress) {
				progressBar.css({
					"transform": `scaleY(calc(1 - ${progress}))`
				})
			}
		}

	});

	/*=============================================
		=         Parallax Js       =
	=============================================*/
	if ($('.scene').length > 0) {
		$('.scene').parallax({
			scalarX: 5.0,
			scalarY: 5.0,
		});
	};
	if ($('.scene-y').length > 0) {
		$('.scene-y').parallax({
			scalarY: 5.0,
			scalarX: 0,
		});
	};



	/*=============================================
		=        td-instagram-slide	       =
	=============================================*/
	var swiper = new Swiper(".td-service-2-slide", {
		slidesPerView: 1,
		spaceBetween: 24,
		loop: true,
		breakpoints: {
			'1400': {
				slidesPerView: 5,
			},
			'1200': {
				slidesPerView: 4,
			},
			'991': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 3,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		navigation: {
			nextEl: ".td-portfolio-next",
			prevEl: ".td-portfolio-prev",
		},
	});


	/*=============================================
		=        td-project-slider-active 	       =
	=============================================*/
	var swiper = new Swiper(".td-portfolio-2-slider-active", {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		pagination: {
			el: ".td-portfolio-2-pagenation",
			clickable: true,
		},
		breakpoints: {
			'1200': {
				slidesPerView: 3,
			},
			'991': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});

	var td_testimonial_slide = new Swiper(".td-testimonial-2-slide-active", {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		navigation: {
			nextEl: ".td-testimonial-2-next",
			prevEl: ".td-testimonial-2-prev",
		},
	});

	/*=============================================
		=        td-blog-slider-active 	       =
	=============================================*/
	var swiper = new Swiper(".td-blog-2-slider-active", {
		slidesPerView: 1,
		spaceBetween: 24,
		loop: true,
		pagination: {
			el: ".td-blog-2-pagenation",
			clickable: true,
		},
		breakpoints: {
			'1200': {
				slidesPerView: 3,
			},
			'991': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});

	/*=============================================
		=        brand-slider 	       =
	=============================================*/
	var td_brand_slide = new Swiper(".td-brand-active", {
		loop: true,
		freemode: true,
		slidesPerView: 'auto',
		spaceBetween: 30,
		centeredSlides: true,
		allowTouchMove: false,
		speed: 4000,
		autoplay: {
		  delay: 1,
		  disableOnInteraction: true,
		},
	});

	var td_testimonial_3_slide = new Swiper(".td-testimonial-3-slide-active", {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		navigation: {
			nextEl: ".td-testimonial-3-next",
			prevEl: ".td-testimonial-3-prev",
		},
	});


	/* ------------- Gsap Js -------------*/

	/* Text Effect Animation */
	if ($(".text-anim").length) {
		let staggerAmount = 0.03,
		translateXValue = 20,
		delayValue = 0.1,
		easeType = "power2.out",
		animatedTextElements = document.querySelectorAll(".text-anim");

		animatedTextElements.forEach((element) => {
			let animationSplitText = new SplitText(element, { type: "chars, words" });
			gsap.from(animationSplitText.chars, {
				duration: 1,
				delay: delayValue,
				x: translateXValue,
				autoAlpha: 0,
				stagger: staggerAmount,
				ease: easeType,
				scrollTrigger: { trigger: element, start: "top 85%" },
			});
		});
	}

	/* td-text-revel-anim */
	const td_anim_reveal = document.querySelectorAll(".td-text-revel-anim");
	td_anim_reveal.forEach(areveal => {
		const getAttributeValue = (attr, defaultValue) => areveal.getAttribute(attr) || defaultValue;
		const duration_value = parseFloat(getAttributeValue("data-duration", 1));
		const onscroll_value = parseInt(getAttributeValue("data-on-scroll", 1));
		const stagger_value = parseFloat(getAttributeValue("data-stagger", 0.02));
		const data_delay = parseFloat(getAttributeValue("data-delay", 0.08));
		const ease_value = getAttributeValue("data-ease", "circ.out");

		areveal.split = new SplitText(areveal, { type: "lines,words,chars", linesClass: "td-revel-line" });
		const animationProps = {
			duration: duration_value,
			delay: data_delay,
			ease: ease_value,
			y: 40,
			stagger: stagger_value,
			opacity: 0,
		};

		if (onscroll_value === 1) {
			areveal.anim = gsap.from(areveal.split.chars, {
				scrollTrigger: {
					trigger: areveal,
					start: 'top 85%',
				},
				...animationProps,
			});
		} else {
			areveal.anim = gsap.from(areveal.split.chars, animationProps);
		}
	});

	/*  zoom in */
	$(".anim-zoomin").each(function() {

		$(this).wrap('<div class="anim-zoomin-wrap"></div>');

		$(".anim-zoomin-wrap").css({ "overflow": "hidden" })

		let $this = $(this);
		let $asiWrap = $this.parents(".anim-zoomin-wrap");

		let tp_ZoomIn = gsap.timeline({
			scrollTrigger: {
				trigger: $asiWrap,
				start: "top 100%",
				markers: false,
			}
		});
		tp_ZoomIn.from($this, { duration: 2, autoAlpha: 0, scale: 1.4, ease: Power2.easeOut, clearProps:"all" });

	});


	// td-title-anim
	if ($('.td-title-anim').length > 0) {
		let splitTitleLines = gsap.utils.toArray(".td-title-anim");
		splitTitleLines.forEach(splitTextLine => {
			const tl = gsap.timeline({
			scrollTrigger: {
				trigger: splitTextLine,
				start: 'top 90%',
				end: 'bottom 60%',
				scrub: false,
				markers: false,
				toggleActions: 'play none none none'
			}
			});

			const itemSplitted = new SplitText(splitTextLine, { type: "words, lines" });
			gsap.set(splitTextLine, { perspective: 300});
			itemSplitted.split({ type: "lines" })
			tl.from(itemSplitted.lines, { duration: 1, delay: 0.3, opacity: 0, rotationX: -50, force3D: true, transformOrigin: "top center -50", stagger: 0.2 });
		});	
	}


})(jQuery);


