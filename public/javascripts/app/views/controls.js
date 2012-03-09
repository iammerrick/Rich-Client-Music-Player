define(['backbone', 'handlebars', 'app/models/song', 'text!app/templates/controls.handlebars'], function(Backbone, Handlebars, Song, template){
	var ControlsView = Backbone.View.extend({

		template: Handlebars.compile(template),

		initialize: function(){
			_.bindAll(this, 'toggleSound');
			this.model.on('change:isPlaying', this.toggleSound);
		},
		
		events: {
			'click .buttons-next' : 'next',
			'click .buttons-previous' : 'previous',
			'click .buttons-play' : 'toggle'
		},

		render: function(){
			var html = this.template(this.model.getCurrentSong().toJSON());
			this.$el.html(html);

			this.$('.audio-player').get(0).play();
			
			return this;
		},
		
		next: function(){
			this.trigger('next');
		},
		
		previous: function(){
			this.trigger('previous');
		},
		
		toggle: function(){
			this.model.toggle();
		},

		toggleSound: function(){
			var player = this.$('.audio-player').get(0);
			
			if(this.model.get('isPlaying')){
				player.pause();
			} else {
				player.play();
			}
		}
	});

	return ControlsView;
});
