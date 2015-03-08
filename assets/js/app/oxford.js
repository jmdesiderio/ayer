define([
	'jquery',
	'app/toggle-expand'
	], function($, toggleExpand) {

	var bodyId = document.body.id;

	toggleExpand.init();

	var exports = {
		init: function() {
			console.log("test");
			return this;
		}
	};

	return exports;
});
