define([ //dependancies
	'jquery',
], function($) {


 // variables for the modules

	var exports = {
		init: function() {
			exports.scrollTo();

			return this;
			
		},

		scrollTo: function() {
			$(function() {
			    $('a.page-scroll').bind('click', function(event) {
			        var $anchor = $(this);
			        $('html, body').stop().animate({
			            scrollTop: $($anchor.attr('href')).offset().top
			        }, 1500, 'easeInOutExpo');
			        event.preventDefault();
			    });
			});		

			return this;
		}

		
	};

	return exports;

});