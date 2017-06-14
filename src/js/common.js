console.log('common');


$(document).ready(function() {



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
		fillBackgroundColor: '#fed818'
	});

	$('#js-status-fameless2').LineProgressbar({
		percentage:50,
		radius: '0',
		height: '40px',
		fillBackgroundColor: '#fed818'
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

	//animate scroll
	$('.js-scroll-to').on("click", function(e){
		e.preventDefault();
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 1000);
	});

	// modal window
	window.popup = {
		open: function() {
			$('.js-popup').addClass('is-active');
			$('body').addClass('is-open-modal');
		},
		close: function() {
			$('.js-popup').removeClass('is-active');
			$('body').removeClass('is-open-modal');
		}
	};

	$(document).on('click', function(e) {
		if (!$('.js-popup').hasClass('is-active')) return;
		if ($(e.target).closest('.js-popup-container').length) return;
		if ($(e.target).closest('.js-popup-open').length) return;
		$('.js-popup').removeClass('is-active');
		$('body').removeClass('is-open-modal');
	})


	// transparent input, etx
	$('input').each(function(){
		var placeholder = $(this).attr('placeholder');

		$(this).focus(function(){
			$(this).attr('placeholder', '');
		});
		$(this).blur(function(){
			$(this).attr('placeholder', placeholder);
		});
	});
});