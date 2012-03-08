var tako = require('tako'),
	path = require('path'),
	app = tako();


app.route('/api/songs').json([
		{ name: 'Angels in the Alleyway' }
	]);

// Home page
app.route('/').file(path.join(__dirname,'public/index.html'));

// Static files
app.route('/*').files(path.join(__dirname, 'public'));

app.httpServer.listen(3000);