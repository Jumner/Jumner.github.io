class card {
	constructor(date, description) {
		this.date = date;
		this.description = description;
	}

	get element() {
		let card = document.createElement('div');
		card.className = 'project-card';
		let top = document.createElement('div');
		top.className = 'card-top';
		let bot = document.createElement('div');
		bot.className = 'card-bot';

		let date = document.createElement('p');
		date.className = 'project-date';
		date.innerHTML = this.date;
		top.appendChild(date);
		let desc = document.createElement('h1');
		desc.className = 'project-desc';
		desc.innerHTML = this.description;
		bot.appendChild(desc);
		card.appendChild(top);
		card.appendChild(bot);
		return card;
	}

	get html() {
		return this.element.outerHTML;
	}
}

let cards = [
	new card(
		'July 2013',
		'Learned my first programming language (Javascript) because I wanted to make Minecraft Mods. I never did get around to it.'
	),
	new card(
		'December 2013',
		'Learned how to use Javascript and the html canvas to make very basic games. It taught me a lot doing everything from scratch.'
	),
	new card(
		'December 2013',
		'My Grandfather makes his own websites and he helped me a lot when learning programming.'
	),
	new card(
		'June 2014',
		'Messed around with creating a simple text bot. It was really a pile of if statements, but I taught me a lot.'
	),
	new card(
		'September 2014',
		'Built a simple website/game where you can click on website elements to make the disappear. This taught me how to modify websites with code.'
	),
	new card(
		'August 2014',
		'Experimented with making 3d games. I quickly started using three.js and I had a lot of fun controlling 3d objects with code.'
	),
	new card(
		'February 2015',
		'Got a Raspberry pi and started learning the linux command line, and started messing with dc circuits.'
	),
	new card(
		'August 2015 ',
		'Built my first computer for myself after watching online videos and reading up on it. I learned a lot about how various components communicate.'
	),
	new card(
		'January 2016',
		'Learned C# because it could make applications, and I made a simple tic tac toe game with a computer opponent.'
	),
	new card(
		'December 2016',
		'Made a roulette simulator for a probability project in school. Helped me sharpen up my C# skills and get more used to datatypes.'
	),
	new card(
		'December 2016',
		'Found a mod that allowed me to write code to control virtual rockets. This taught me so much about control theory and 3d rotation.'
	),
	new card(
		'April 2017',
		'I created a simple website that stores a collection of little sites. It included stuff like prime number finders, pi calculators, etc...'
	),
	new card(
		'June 2017',
		'I built a platformer game using only Javascript and the html canvas. This game had physics, animations, and a level editor. I also got used to using github.'
	),
	new card(
		'September 2017',
		'Added bullet physics to my game which taught me about vectors and applying the pythagorean theorem to "everyday" problems.'
	),
	new card(
		'February 2018',
		'Made a rocket simulator to try and figure out the physics of the suicide burn. It was a lot of fun and taught me a lot about physics.'
	),
	new card(
		'February 2018',
		'After reading that Spacex uses c++ for their software, I thought that I would want to find out why. Turns out its really robust and my favorite language.'
	),
	new card(
		'April 2018',
		'I learned about ray tracing and was still hooked on making my own 3d. I did learn quite a bit about geometry before realizing that it was very difficult.'
	),
	new card(
		'May 2018',
		'Learned about how neural networks work and made a semi working network with a really strange structure. It did manage to complete the xor gate.'
	),
	new card(
		'February 2019',
		'I wrote a program that turns off my computer at my bed time. This was because I had stayed up too late a few too many times.'
	),
	new card(
		'July 2019',
		"I made a program that connects to the google classroom api and checks if there are any assignments that I hadn't completed. If there are any, it closes distractions"
	),
	new card(
		'September 2019',
		'I got a chromebook and they added a built in linux virtual machine. This is really where I learned how to use the linux command line.'
	),
	new card(
		'October 2019',
		'I watched a series on youtube about a guy who built a computer on breadboards. It really showed me how computers actually work.'
	),
	new card(
		'December 2019',
		'I learned about the unity game engine and messed around with making mods for games.'
	),
	new card(
		'February 2020',
		'I actually learned how rasterization works and learned how matrices can represent rotation and translation'
	),
	new card(
		'February 2020',
		'Used what I had learned about 3d graphics to create a wireframe 3d engine in c++. I actually got it working and created the good old spinning cube.'
	),
	new card(
		'June 2020',
		"To challenge myself, I also created a simple 3d wireframe engine in a dated language called Turing. I wasn't sure that Turing was fast enough but it was."
	),
	new card(
		'November 2020',
		'I learned how modular linux can be. I always loved development in linux and I never realized that it can look nicer than windows. I now use it for almost everything.'
	),
	new card(
		'December 2020',
		"I made a game with the unity game engine and though it was not super functional, it taught me a lot about learning to make games when I don't have full control."
	),
	new card(
		'May 2021',
		"I made an extension for a code editor called Vscode. It adds support for a language called Turing. It wasn't perfect, but it was about as close as I could get."
	),
];
