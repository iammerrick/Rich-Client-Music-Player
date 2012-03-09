define(['backbone', 'handlebars', 'text!app/templates/playlist.handlebars'], function(Backbone, Handlebars, template){
	var PlaylistView = Backbone.View.extend({
		
		className: 'playlist',
		
		template: Handlebars.compile(template),
		
		events: {
			'click a' : 'selectSong'
		},
		
		initialize: function(){
			this.collection.fetch();
			this.collection.on('reset', this.render, this);
			this.collection.on('change', this.render, this);
		},
		
		render: function(){
			var html = this.template({songs: this.collection.toJSON()});
			this.$el.html(html);

			this.delegateEvents(this.events); // Why do I have to do this here?

			return this;
		},
		
		selectSong: function(e){
			var id = this.$(e.target).data('id');
			this.trigger('select', id);
		}
	});

	return PlaylistView;
});