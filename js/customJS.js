// Required jQuery for tooltip
$(function () {
	$('[data-toggle="tooltip"]').tooltip();
});

// changes background for nav when scrolled
$(window).scroll(function () {
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});
