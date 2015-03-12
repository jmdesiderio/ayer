require.config({
	/* Base Url is libs folder for simpler references */
	baseUrl: './js/lib',

	paths: {
		'app': '../app',
		'jquery': 'jquery',
		'jquery.transit': 'jquery.transit',
		'jquery.easing': 'jquery.easing'
	},

	shim: {
		'jquery.transit': ['jquery'],
		'jquery.easing': ['jquery']
	},

	waitSeconds: 15
});

/* Grab the global modernizr object and wrap it in a define call */
define('modernizr', function() {
	"use strict";
	return window.Modernizr;
});

/* Main entry point */
require(['app/oxford'], function(Oxford) {
	return Oxford.init();
});
