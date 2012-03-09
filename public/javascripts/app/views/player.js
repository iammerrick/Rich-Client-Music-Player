define(['backbone', 'handlebars', 'text!app/templates/player.handlebars'], function(Backbone, Handlebars, template){
	var PlayerView = Backbone.View.extend({
		
		template: Handlebars.compile(template),
		
		render: function(){
			this.$el.html(this.template());
		}
	});
	
	return PlayerView;
});