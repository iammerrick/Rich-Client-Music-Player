define(['jquery', 'backbone', 'app/views/player', 'app/collections/playlist'], function($, Backbone, PlayerView, playlist){

    var Player = Backbone.Router.extend({

        routes : {
            '' : 'index'
        },
        
        index: function(){
            new PlayerView({
                collection: playlist
            });
        }

    });

    return Player;
});
