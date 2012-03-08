define(['jquery', 'backbone'], function($, Backbone){

    var Player = Backbone.Router.extend({

        routes : {
            '' : 'index'
        },
        
        index: function(){
            console.log('run');
        }
        

    });

    return Player;
});
