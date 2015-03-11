define([ //dependancies
	'jquery',
], function($) {


 // variables for the modules
 	var mainNav = $("#js-main-header");
	var hamburgerButton = $('.js-hamburger-button');


	var exports = {
		init: function() {
			exports.toggledNavCollapse();

			return this;
		},

		toggledNavCollapse: function() {

			$(window).on('scroll', function() {
				if (mainNav.offset().top > 50) {
					mainNav.addClass("main-nav-collapse");
				} else {
					mainNav.removeClass("main-nav-collapse");
				}
			});
			
			return this;
		}
	};

	return exports;

});