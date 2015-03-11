define([ //dependancies
	'jquery',
], function($) {


 // variables for the modules
 	var songKickButton = $('#js-songkick-button');
	var bandsInTownButton = $('#js-bandsintown-button');
	var songKickPane = $('#js-songkick');
	var bandsInTownPane = $('#js-bandsintown');

	function toggleLiveClasses(songKick, bandsInTown) {
		songKickButton.toggleClass("active", songKick);
		bandsInTownButton.toggleClass("active", bandsInTown);
		songKickPane.toggleClass("active", songKick);
		bandsInTownPane.toggleClass("active", bandsInTown);
	}


	var exports = {
		init: function() {
			exports.toggleLiveShows();

			return this;
		},

		toggleLiveShows: function() {

			songKickButton.click(function(event) {
				event.preventDefault();
				toggleLiveClasses(true, false);
			});

			bandsInTownButton.click(function(event) {
				event.preventDefault();
				toggleLiveClasses(false, true);
			});
			
			return this;
		}
	};

	return exports;

});