const http = require('http');
const server = http.createServer((req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	// res.writeHead(420); // For reporting issues
	res.end('good!');
	req.on('data', data => {
		console.log(JSON.parse(data.toString()));
	});
});
const port = 8080;
server.listen(8080, 'localhost', () => {
	console.log(`Listening on port ${port}`);
});
