define(['backbone', 'app/collections/playlist', 'app/models/song'], function(Backbone, playlist, Song){
	var Player = Backbone.Model.extend({
		
		playlist: playlist,

		play: function(id){
			this.setCurrentSong(id);
		},

		getCurrentSong: function(){
			var song = this.playlist.get(this.get('currentSong'));
			
			if( ! song){
				song = new Song();
			}
			
			return song;
		},

		setCurrentSong: function(id){
			this.getCurrentSong().set({'selected' : false});
			this.playlist.get(id).set({'selected' : true });

			return this.set({'currentSong' : id});
		},

		next: function(){
			var index = this.getCurrentIndex(),
				max = this.playlist.length - 1;

			if( ! ~index){
				return this.setCurrentSong(this.playlist.at(0).get('id'));
			}
			
			index++;

			if(index > max){
				index = 0;
			}

			return this.setCurrentSong(this.playlist.at(index).get('id'));

		},
		
		previous: function(){
			var index = this.getCurrentIndex(),
				first = 0,
				last = this.playlist.length - 1;
			
			if( ! ~index){
				return this.setCurrentSong(this.playlist.last().get('id'));
			}

			index--;
			if(index < first){
				index = last;
			}

			return this.setCurrentSong(this.playlist.at(index).get('id'));

		},

		toggle: function(){
			var isPlaying = this.get('isPlaying');
			this.set({'isPlaying' : ! isPlaying});
		},

		getCurrentIndex: function(){
			var index = this.playlist.indexOf(this.getCurrentSong());
			return index;
		}
	});
	
	return Player;
});
