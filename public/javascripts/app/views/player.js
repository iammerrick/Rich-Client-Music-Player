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
			
			this.listen();
		},
		
		listen: function(){
			this.playlist.on('select', this.play, this);
			this.controls.on('next', this.next, this);
			this.controls.on('previous', this.previous, this);
			this.controls.on('toggle', this.toggle, this);
		},
		
		play: function(id){
			if(this.index !== undefined){
				playlist.get(this.index).set({selected: false});
			}
			
			this.index = id;
			
			playlist.get(this.index).set({selected: true});
			
			this.controls.play(playlist.get(id));
		},
		
		next: function(){
			console.log('next')
		},
		
		previous: function(){
			console.log('previous')
		},
		
		toggle: function(){
			console.log('toggle')
		},
		
		render: function(){
			this.$el
				.empty()
				.append(this.controls.render().el)
				.append(this.playlist.el);
			return this;
		}
	});
	
	return PlayerView;
});