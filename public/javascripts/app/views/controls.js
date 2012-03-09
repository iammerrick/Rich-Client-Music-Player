define(['backbone', 'handlebars', 'app/models/song', 'text!app/templates/controls.handlebars'], function(Backbone, Handlebars, Song, template){
	var ControlsView = Backbone.View.extend({

		template: Handlebars.compile(template),

		render: function(){
			var html = this.template(this.model.toJSON());
			this.$el.html(html);
			return this;
		}
	});

	return ControlsView;
});