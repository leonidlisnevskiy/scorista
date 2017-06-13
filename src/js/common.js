console.log('common');


$(document).ready(function() {
	//custom scrollbar
	$(".nano").nanoScroller({
		stop: false,
		flash: true,
		flashDelay: 2500,
		iOSNativeScrolling: true,
		alwaysVisible: true
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