(function () {
	"use strict";
	// ScrollUp Button
	let scrollUp = $(".scrollUp");
	$(window).scroll(function () {
		if ($(window).scrollTop() >= 1000) {
			scrollUp.fadeIn()
		} else {
			scrollUp.fadeOut()
		}
	});
	scrollUp.click(function (e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});
	// Trigger WoW.js
	if ($(window).width() >= 992) {
		new WOW().init();
	}
	// Start Navbar
	$(".nav-link").click(function () {
		$(this).parent().addClass("active").siblings().removeClass("active");
	});

	// Navbar Dropdown Menu
	if ($(window).width() >= 992) {
		$(".navbar .navbar-nav .slideDownMenu").hover(
			function (e) {
				$(this).find(".dropdown-menu").slideDown();
				e.stopPropagation();
			},
			function (e) {
				$(this).find(".dropdown-menu").slideUp();
				e.stopPropagation();
			}
		);
	}

	if ($(window).width() <= 991) {
		$(".navbar .navbar-nav .slideDownMenu").click(function (e) {
			$(this).find(".dropdown-menu").slideToggle();
			e.stopPropagation();
		});
	}

	// Change Navbar Height With Scroll
	$(window).scroll(function () {
		let scroll = $(window).scrollTop(),
			navbar = $(".navbar");
		if (scroll >= 110) {
			navbar.addClass("sticky");
		} else {
			navbar.removeClass("sticky");
		}
	});

	// Start Navbar Toggler
	$(".navbar .navbar-toggler").on("click", function () {
		$(this).toggleClass("clicked");
	});

	$("#navButton").click(function () {
		$(this).toggleClass("close");
		$(".homePage").toggleClass("body-overlay");
		$(".navbar").toggleClass("body-overlay");
		$("#navLeft").toggleClass("navbar-open");
	});

	// Smoothly Scroll To Section
	$(".nav-link").click(function (e) {
		e.preventDefault();
		$("html, body").animate({
				scrollTop: $("#" + $(this).data("scroll")).offset().top,
			},
			1000
		);
	});

	// Synchronize class active wirh links
	$(window).scroll(function () {
		var scrollTop = $(window).scrollTop();
		$(".smoothscroll").each(function () {
			if (scrollTop >= $(this).offset().top - 140) {
				var sectionId = $(this).attr("id");
				$('.nav-link[data-scroll="' + sectionId + '"]')
					.parent()
					.addClass("active")
					.siblings()
					.removeClass("active");
			}
		});
		$(".noActive").each(function () {
			if ($(window).scrollTop() >= $(this).offset().top - 140) {
				$(".deactive").parent().removeClass("active");
			}
		});
	});

	// Video PopUp
	$(".videoPopup").magnificPopup({
		type: "iframe",
	});

	// Services Carousel
	$(".services .owl-carousel").owlCarousel({
		loop: false,
		margin: 30,
		nav: false,
		responsive: {
			0: {
				items: 1,
				mouseDrag: true,
			},
			992: {
				items: 1,
				mouseDrag: true,
				touchDrag: true,
				pullDrag: false,
			},
			1000: {
				items: 3,
				mouseDrag: false,
				touchDrag: false,
				pullDrag: false,
			},
		},
	});
	// Our Offers Carousel
	$(".our-offers .owl-carousel").owlCarousel({
		loop: false,
		nav: false,
		responsive: {
			0: {
				items: 1,
			},
			992: {
				items: 1,
			},
			1000: {
				items: 6,
				mouseDrag: false,
				touchDrag: false,
				pullDrag: false,
			},
		},
	});
	// Our Staff Carousel
	$(".our-staff .owl-carousel").owlCarousel({
		loop: false,
		nav: false,
		responsive: {
			0: {
				items: 1,
			},
			992: {
				items: 1,
			},
			1000: {
				items: 6,
				mouseDrag: false,
				touchDrag: false,
				pullDrag: false,
			},
		},
	});

	// Start Testimonials Carousel
	$(".testimonials .owl-carousel").owlCarousel({
		loop: true,
		nav: false,
		autoplay: true,
		autoplayHoverPause: true,
		smartSpeed: 1000,
		dotsSpeed: 1000,
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 1,
			},
			992: {
				items: 2,
			},
			1999: {
				items: 2,
			},
			1200: {
				items: 3,
			},
		},
	});

	// About Us CounterUp
	$(window).scroll(function () {
		var scrollTop = $(window).scrollTop(),
			sectionOffset = $("#numbersOffset").offset().top - 600;
		if (scrollTop >= sectionOffset) {
			$(".counterUp").countTo({
				speed: 7000,
				refreshInterval: 50,
				formatter: function (value, options) {
					return value
						.toFixed(options.decimals)
						.toString()
						.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
				},
			});
			$(".about-us .numbers .count-wrapper .number > span").removeClass(
				"counterUp"
			);
		}
	});
	$(window).on("load", function (event) {
		$(".lds-ring").fadeOut();
	});
})();