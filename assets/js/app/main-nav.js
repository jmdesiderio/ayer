define([ //dependancies
	'jquery',
	'app/effects'
], function($, effects) {


	// variables for the modules
	var mainNav = $('#js-main-header'),
		hamburgerBtn = $('#js-hamburger-button'),
		header = $('#js-main-header'),
		splash = $('#js-splash-section');


	var exports;
	exports = {
		init: function () {
			exports.toggledNavCollapse();
			hamburgerBtn.on('click', function () {
				effects.toggleExpand(header);
			});

			return this;
		},

		toggledNavCollapse: function () {

			$(window).on('scroll', function () {
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
