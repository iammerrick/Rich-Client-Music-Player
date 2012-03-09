define(['backbone', 'handlebars', 'app/models/song', 'text!app/templates/controls.handlebars'], function(Backbone, Handlebars, Song, template){
	var ControlsView = Backbone.View.extend({

		template: Handlebars.compile(template),
		
		events: {
			'click .buttons-next' : 'next',
			'click .buttons-previous' : 'previous',
			'click .buttons-play' : 'toggle'
		},

		render: function(){
			var html = this.template(this.model.toJSON());
			this.$el.html(html);
			
			this.delegateEvents(this.events);
			
			return this;
		},
		
		play: function(song){
			this.model = song;
			this.render();
		},
		
		next: function(){
			this.trigger('next');
		},
		
		previous: function(){
			this.trigger('previous');
		},
		
		toggle: function(){
			this.trigger('toggle');
		}
	});

	return ControlsView;
});