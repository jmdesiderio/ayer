define([ //dependancies
	'jquery',
], function($) {


 // variables for the modules
 	var mainNav = $("#js-main-nav");
	var hamburgerButton = $('.js-hamburger-button');


	var exports = {
		init: function() {

			return this;
		},

		toggledNavCollapse: function() {

			$(window).on('scroll', function() {
				if (mainNav.offset().top > 50) {
					mainNav.addClass("top-nav-collapse");
				} else {
					mainNav.removeClass("top-nav-collapse");
				}
			});
			
			return this;
		}
	};

	return exports;

});