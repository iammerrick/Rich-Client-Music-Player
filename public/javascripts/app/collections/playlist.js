define(['backbone', 'app/models/song'], function(Backbone, Song){
	var Playlist = Backbone.Collection.extend({

		model: Song,

		url: '/api/playlist'
		
	});
	
	return new Playlist();
});