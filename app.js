var tako = require('tako'),
	path = require('path'),
	app = tako();


app.route('/api/playlist').json([
		{ 
			id: 1, 
			name: 'Angels in the Alleyway',
			artwork : 'http://placehold.it/120x120',
			artist: 'Merrick Christensen'
		},
		{
			id: 2,
			name: 'I Don\'t Feel It Anymore',
			artwork: 'http://placehold.it/120x120',
			artist: 'William Fitzsimmons'
		}
	]);

// Home page
app.route('/').file(path.join(__dirname,'public/index.html'));

// Static files
app.route('/*').files(path.join(__dirname, 'public'));

app.httpServer.listen(3000);