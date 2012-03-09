define(['backbone', 'handlebars', 'text!app/templates/playlist.handlebars'], function(Backbone, Handlebars, template){
	var PlaylistView = Backbone.View.extend({
		
		className: 'playlist',
		
		template: Handlebars.compile(template),
		
		initialize: function(){
			this.collection.fetch();
			this.collection.on('reset', this.render, this);
		},
		
		render: function(){

			var html = this.template({songs: this.collection.toJSON()});
			this.$el.html(html);
			return this;
		}
	});

	return PlaylistView;
});