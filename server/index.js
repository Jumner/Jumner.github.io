const http = require('http');
const server = http.createServer((req, res) => {
	res.writeHead(200);
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5500');
	res.end('good!');
	console.log(req);
});
server.listen(8080);
console.log('Listening on port 8080');
