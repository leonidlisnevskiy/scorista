console.log('common');

$body = $("body");
$window = $(window);

$window.scroll(function() {
	if ( $window.scrollTop() > 0) {
		$body.addClass("is-fixed");
	} else{
		$body.removeClass("is-fixed");
	}
});


$(document).ready(function() {

	var connectSlider = document.getElementById('js-range');

	noUiSlider.create(connectSlider, {
		start: 280,
		margin: 0,
		padding: 0,
		tooltips: [ true ],
		connect: [true, false],
		range: {
			'min': 0,
			'max': 1000
		}
	});


$(".js-dropdown").click(function(e) {
	e.preventDefault();
	$(".js-dropdown-content").toggleClass("is-open");
});

$(".js-open-map").click(function(e) {
	e.preventDefault();
	$(".js-map").toggleClass("is-active");
});

$(".js-close-map").click(function(e) {
	e.preventDefault();
	$(".js-map").removeClass("is-active");
});


$(".js-open-table").click(function(e) {
	e.preventDefault();
	$(".js-table").toggleClass("is-active");
});

$(".js-close-table").click(function(e) {
	e.preventDefault();
	$(".js-table").removeClass("is-active");
});


$(".js-btn-nav").click(function() {
	$body.toggleClass("is-open");
});

$('#js-status-good').LineProgressbar({
	percentage:30,
	radius: '0',
	height: '40px',
	fillBackgroundColor: 'rgba(68,171,65,.4)'
});

$('#js-status-good2').LineProgressbar({
	percentage:30,
	radius: '0',
	height: '40px',
	fillBackgroundColor: 'rgba(68,171,65,.4)'
});

$('#js-status-fameless').LineProgressbar({
	percentage:50,
	radius: '0',
	height: '40px',
	fillBackgroundColor: 'rgba(254, 216, 24, .4)'
});

$('#js-status-fameless2').LineProgressbar({
	percentage:50,
	radius: '0',
	height: '40px',
	fillBackgroundColor: 'rgba(254, 216, 24, .4)'
});

$('#js-status-bad').LineProgressbar({
	percentage:20,
	radius: '0',
	height: '40px',
	fillBackgroundColor: '#fc8085'
});

$('#js-status-bad2').LineProgressbar({
	percentage:20,
	radius: '0',
	height: '40px',
	fillBackgroundColor: '#fc8085'
});

	//custom scrollbar
	$(".nano").nanoScroller({
		stop: false,
		flash: false,
		iOSNativeScrolling: true,
		alwaysVisible: false
	});

	$(".js-show").click(function(e){
		e.preventDefault();
		$(".js-hidden").toggleClass("is-visible");
		$(".js-show-container").toggleClass("is-open");
	});

});