define([ //dependancies
	'jquery',
	'app/effects',
	'jquery.easing',
], function($, effects) {


 // variables for the modules
 	var top = $('#js-home-page'),
 		siteTitle = $('.js-site-title'),
 		header = $('#js-main-header');

	var exports = {
		init: function() {
			exports.scrollTo();

			siteTitle.on('click', function(event) {
				event.preventDefault();
				effects.scrollToTop(top, 0, 'easeInOutExpo');
			});

			return this;
			
		},

		scrollTo: function() {
			$(function() {
				$('a.page-scroll').bind('click', function(event) {
					event.preventDefault();
					var $anchor = $(this);
					$('html, body').stop().animate({
						scrollTop: $($anchor.attr('href')).offset().top
					}, 1500, 'easeInOutExpo');
					header.removeClass('is-expanded');
				});
			});		

			return this;
		}

		
	};

	return exports;

});
