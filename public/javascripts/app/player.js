define(['jquery', 'backbone', 'app/views/player'], function($, Backbone, PlayerView){
    var Player = Backbone.Router.extend({

        routes : {
            '' : 'index'
        },
        
        index: function(){
            $(document.body).html(new PlayerView().render().el);
        }

    });

    return Player;
});
