var tako = require('tako'),
	path = require('path'),
	app = tako();


app.route('/api/playlist').json([
		{ 
			id: 1, 
			name: 'Angels in the Alleyway',
			artwork : '/media/art/alleyway.png',
			artist: 'Merrick Christensen',
			source: '/media/alleyway.m4a'
		},
		{
			id: 2,
			name: 'Gobbledigook',
			artwork: '/media/art/gobbledigook.png',
			artist: 'Sigur Ros',
			source: '/media/gobbledigook.mp3'
		},
		{
			id: 3,
			name: 'Angels in the Alleyway (Remix)',
			artwork: '/media/art/alleyway.png',
			artist: 'Sonic Ether (Merrick Christensen)',
			source: '/media/alleyway-techno.mp3'
		},
		{
			id: 4,
			name: 'Seven Years',
			artwork: '/media/art/seven-years.png',
			artist: 'Saosin',
			source: '/media/seven-years.mp3'
		},
		{
			id: 5,
			name: 'Macklemore',
			artwork: '/media/art/falling.png',
			artist: 'Macklemore',
			source: '/media/falling.mp3'
		},
		{
			id: 6,
			name: 'Our Last Day Being Children',
			artist: 'Explosions in the Sky',
			artwork: '/media/art/our-last.png',
			source: '/media/our-last-day.mp3'
		}
	]);

// Home page
app.route('/').file(path.join(__dirname,'public/index.html'));

// Static files
app.route('/*').files(path.join(__dirname, 'public'));

app.httpServer.listen(3000);
