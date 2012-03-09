define([
	'backbone', 
	'handlebars', 
	'app/views/controls', 
	'app/views/playlist', 
	'app/models/player'
	], 
	function(
		Backbone, 
		Handlebars, 
		ControlsView, 
		PlaylistView, 
		Player
	){
	var PlayerView = Backbone.View.extend({
		
		className: 'player-container',
		
		initialize: function(){
			
			this.model = new Player();

			// No song send in a mock.
			this.controls = new ControlsView({
				model: this.model
			});
			
			this.playlist = new PlaylistView({
				collection: this.model.playlist
			});
			
			this.model.on('change:currentSong', this.updateControls,this);

			this.listen();
		},
		
		listen: function(){
			this.playlist.on('select', this.play, this);
			this.controls.on('next', this.next, this);
			this.controls.on('previous', this.previous, this);
			this.controls.on('toggle', this.toggle, this);
		},
		
		play: function(id){
			this.model.play(id);	
		},
		
		next: function(){
			this.model.next();
		},
		
		previous: function(){
			this.model.previous();
		},
		
		toggle: function(){
			this.model.toggle();
		},
		
		render: function(){
			this.$el
				.empty()
				.append(this.controls.render().el)
				.append(this.playlist.el);
			return this;
		},

		updateControls: function(){
			this.controls.render();
		}
	});
	
	return PlayerView;
});
