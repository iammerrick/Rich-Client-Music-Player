define(['backbone', 'app/models/song'], function(Song){
	var Playlist = Backbone.Collection.extend({
		model: Song
	});
	
	return Playlist;
});