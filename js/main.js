const headerMenu = document.getElementById("header");



window.onscroll = function () {
	scrollFunction()
	// scrollTopFunc()
}

// Header Sticky Add
function scrollFunction() {
	const sn = document.getElementById("sticky_nav");
	if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
		sn.style.background = '#fff'
		sn.style.position = 'fixed'
		sn.style.zIndex = "9999"
		sn.style.paddingTop = '10px'
		sn.style.paddingBottom = '10px'
		

	} else {
		sn.style.position = 'relative'
		sn.style.background = '#fff'
		sn.style.top = '0'
		sn.style.zIndex = "9999"
		sn.style.paddingTop = '15px'
		sn.style.paddingBottom = '15px'
	}
}



$ = jQuery.noConflict();

$(function () {
	// Owl Carousel
	var owl = $(".project-area");
	owl.owlCarousel({
		items: 4,
		margin: 20,
		loop: true,
		dots: true,
		nav: true,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
	});
});
$(function () {
	// Owl Carousel
	var owl = $(".testimonial-area");
	owl.owlCarousel({
		items: 2,
		margin: 20,
		loop: true,
		dots: true,
		nav: true,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 2
			},
			1200: {
				items: 2
			}
		}
	});
});

$(document).ready(function () {

	var counters = $(".count-text");
	var countersQuantity = counters.length;
	var counter = [];

	for (i = 0; i < countersQuantity; i++) {
		counter[i] = parseInt(counters[i].innerHTML);
	}

	var count = function (start, value, id) {
		var localStart = start;
		setInterval(function () {
			if (localStart < value) {
				localStart++;
				counters[id].innerHTML = localStart + "+";
			}
		}, 40);
	}

	for (j = 0; j < countersQuantity; j++) {
		count(0, counter[j], j);
	}
});





