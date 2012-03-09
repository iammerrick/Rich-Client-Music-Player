var tako = require('tako'),
	path = require('path'),
	app = tako();


app.route('/api/playlist').json([
		{ 
			id: 1, 
			name: 'Angels in the Alleyway',
			artwork : 'http://placehold.it/120x120',
			artist: 'Merrick Christensen'
		}
	]);

// Home page
app.route('/').file(path.join(__dirname,'public/index.html'));

// Static files
app.route('/*').files(path.join(__dirname, 'public'));

app.httpServer.listen(3000);