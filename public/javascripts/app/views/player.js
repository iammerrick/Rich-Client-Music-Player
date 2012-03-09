define([
	'backbone', 
	'handlebars', 
	'app/views/controls', 
	'app/views/playlist', 
	'app/models/song',
	'app/collections/playlist'
	], 
	function(
		Backbone, 
		Handlebars, 
		ControlsView, 
		PlaylistView, 
		Song,
		playlist
	){
	var PlayerView = Backbone.View.extend({
		
		className: 'player-container',
		
		initialize: function(){
			this.controls = new ControlsView({
				model: new Song
			});
			
			this.playlist = new PlaylistView({
				collection: playlist
			});
			
			this.render();
		},
		
		render: function(){
			this.$el
				.empty()
				.append(this.controls.render().el)
				.append(this.playlist.render().el);
			return this;
		}
	});
	
	return PlayerView;
});