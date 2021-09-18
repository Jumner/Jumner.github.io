// const http = require('http');
const app = require('express')();
const cors = require('cors');

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

// Server
app.use(
	cors({
		origin: '*',
	})
);
app.use((req, res) => {
	res.write('Response!'); // Response
	res.end();
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

app.listen(8080, () => {
	console.log('Listening on port 8080');
});
