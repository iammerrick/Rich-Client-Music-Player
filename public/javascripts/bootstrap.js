require.config({
    paths: {
        'underscore' : 'vendor/underscore',
        'backbone' : 'vendor/backbone',
        'jquery' : 'vendor/jquery',
        'handlebars' : 'vendor/handlebars',
        'text' : 'vendor/text'
    }
});

require(['app/player'], function(Player){
    new Player();
    Backbone.history.start();
});
