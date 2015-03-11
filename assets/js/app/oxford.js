define([
	'jquery',
	'app/toggle-expand',
	'app/main-nav',
	'app/scroll',
	'app/toggle-live'
	], function($, toggleExpand, mainNav, scroll, toggleLive) {

	var bodyId = document.body.id;

	var exports = {
		init: function() {

			mainNav.init();
			scroll.init();
			toggleLive.init();

		}
	};

	return exports;
});
