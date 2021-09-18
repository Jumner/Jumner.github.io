const http = require('http');

const discord = require('discord.js');
const { token } = require('./secret.json');
const client = new discord.Client({
	intents: ['GUILDS', 'GUILD_MESSAGES'],
});
client.on('ready', () => {
	console.log('Discord bot running');
	client.channels.cache.get('888195849119727707').send('Just came online!');
});
client.login(token);

const server = http.createServer((req, res) => {
	res.writeHead(200, {
		'Access-Control-Allow-Origin': '*',
		// 'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
		'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
		'Content-Type': 'application/json',
	});
	// res.writeHead(420); // For reporting issues
	res.end('good!');
	req.on('data', data => {
		// Time to handle the data
		data = JSON.parse(data.toString());
		console.log(data);
		// Send a message
		client.channels.cache.get('888195849119727707').send(
			`Message from form\n
				Name:               ${data.Name}
				Contact info:    ${data.Info}
				Message:          ${data.Message}`
		);
	});
});
const port = 8080;
server.listen(8080, 'localhost', () => {
	console.log(`Listening on port ${port}`);
});
