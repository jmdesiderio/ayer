define([ //dependancies
	'jquery',
], function($) {


 // variables for the modules
	var songKickButton = $('#js-songkick-button'),
		bandsInTownButton = $('#js-bandsintown-button'),
		songKickPane = $('#js-songkick'),
		bandsInTownPane = $('#js-bandsintown');

	


	var exports = {
		init: function() {
			exports.toggleLiveShows();

			return this;
		},

		toggleLiveShows: function() {

			songKickButton.on('click', function(event) {
				event.preventDefault();
				exports.toggleLiveClasses(true, false);
			});

			bandsInTownButton.on('click', function(event) {
				event.preventDefault();
				exports.toggleLiveClasses(false, true);
			});
			
			return this;
		},

		toggleLiveClasses: function(songKick, bandsInTown) {
			songKickButton.toggleClass("active", songKick);
			bandsInTownButton.toggleClass("active", bandsInTown);
			songKickPane.toggleClass("active", songKick);
			bandsInTownPane.toggleClass("active", bandsInTown);

			return this;
		}
	};

	return exports;

});
