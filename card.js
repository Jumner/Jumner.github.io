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
		card.style.visibility = 'hidden';
		// card.style.transform = 'rotateX(180deg)'
		return card;
	}

	get html() {
		return this.element.outerHTML;
	}
}

let cards = [
	new card(
		'July 2013',
		'I taught myself Javascript because I wanted to make Minecraft Mods. I never did get around to it.'
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
		'Messed around with creating a simple chat bot. It was really a pile of if statements, but it taught me a lot.'
	),
	new card(
		'September 2014',
		'Built a simple website/game where you can click on website elements to make the disappear. This taught me how to use the DOM.'
	),
	new card(
		'August 2014',
		'Experimented with making 3d games. I quickly started using three.js and I had a lot of fun controlling 3d objects with code.'
	),
	new card(
		'February 2015',
		'Got a Raspberry pi and started learning the linux command line. I also started messing with dc circuits.'
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
		'Used Kerbal Space Program to write code to control virtual rockets. This taught me so much about control theory and 3d rotation.'
	),
	new card(
		'April 2017',
		'I created a simple website that stores a collection of little pages. It included stuff like prime number finders, pi calculators, etc...'
	),
	new card(
		'June 2017',
		'I built a platformer game using only Javascript and the HTML canvas. This game had physics, animations, and a level editor. I also got used to using github.'
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
		'After reading that Spacex uses c++ for a lot of their software, I decided to find out why. I found out I really like low level languages.'
	),
	new card(
		'April 2018',
		'I learned about ray tracing and was still hooked on making my own 3d renderer. I learned a alot of geometry before realizing that it was very difficult.'
	),
	new card(
		'May 2018',
		'Learned about how neural networks work and made a semi working network with a really strange structure. It did manage to complete the xor test.'
	),
	new card(
		'February 2019',
		'I wrote a program that turns off my computer at my bed time. This was because I had stayed up too late a few too many times.'
	),
	new card(
		'July 2019',
		"I made a program that connects to the google classroom api and checks for any pending assignments. If there are any, it closes distractions"
	),
	new card(
		'September 2019',
		'I got a chromebook and they added a built in Linux virtual machine. This is really where I learned how to use the Linux command line.'
	),
	new card(
		'October 2019',
		'I watched Ben Eaters 8 bit breadboard computer series. It opened my eyes to computer architecture and inspired me to make my own computer in Minecraft.'
	),
	new card(
		'December 2019',
		'I learned about the Unity game engine and messed around with making mods for games.'
	),
	new card(
		'February 2020',
		'I actually learned how rasterization works and learned how matrices can represent rotation and translation.'
	),
	new card(
		'February 2020',
		'Used what I had learned about 3d graphics to create a wireframe 3d engine in c++. I actually got it working and created the good old spinning cube.'
	),
	new card(
		'June 2020',
		"To challenge myself, I also created a simple 3d wireframe engine in a language called Turing. I wasn't sure that Turing was fast enough but it was."
	),
	new card(
		'October 2020',
		'Used a Raspberry Pi and a webcam to turn my highschool robotics robot autonomous using OpenCV. Unfortunately the Pi Zero was too slow to be practical.'
	),
	new card(
		'November 2020',
		'I learned about Linux customization. I always loved linux development but I never considered that it can look nicer than windows. I now use it for almost everything.'
	),
	new card(
		'December 2020',
		"I made a game with the unity game engine and though it was not super functional, it taught me a lot about programming when I don't have full control."
	),
	new card(
		'August 2021',
		'Started Cubic. Though I didn\'t know it at the time, this would be incredibly difficult, consume my life, and span over 2 years.'
	),
	new card(
		'September 2021',
		'Designed Cubic in Fusion360. This was a tough challenge as the cube is larger than my 3d printers print area.'
	),
	new card(
		'October 2021',
		'Started learning the Rust programming language. It is now by far my favorite language.'
	),
	new card(
		'October 2021',
		'Designed a printed circuit board based on the esp32 in just 1 week. Probably should have spent longer because I underspeced the power supply circuitry.'
	),
	new card(
		'October 2021',
		'Used an Electron like framework called Tauri to make a user interface for Cubic but I moved away from the esp32 so I had no wireless connectivity.'
	),
	new card(
		'November 2021',
		'I worked with a friend to make our school\' hackaton website in just one weekend. This was my first experience of collaborative development.'
	),
	new card(
		'November 2021',
		'Learned embedded programming using Rust and got PWM, I2C, and hardware interrupts working. Software interrupts got me stuck so I moved to arduino.'
	),
	new card(
		'November 2021',
		'Guided by the datasheet, I got my Cubic motors spinning with tachometer readings.'
	),
	new card(
		'Novmeber 2021',
		'Taught myself state space modelling and modelled my 3d inverted pendulum reaction wheel cube, Cubic.'
	),
	new card(
		'December 2021',
		'First assembled Cubic with nearly 100 3d printed parts. Then I characterized the motors so I could have consistent torque output.'
	),
	new card(
		'December 2021',
		'Learned about Kalman filters but discovered that the atmega328p does not have enough memory to hold the matrices.'
	),
	new card(
		'February 2022',
		'Made a simple todo app written in Rust to understand cli using clap.',
	),
	new card(
		'February 2022',
		'Tried to make an obsidian plugin that adds geogebra so I could have interactive applets in my notes. Storing the data was difficult and caused a big headache.'
	),
	new card(
		'April 2022',
		'Made a GPT-3 API wrapper in Rust. This allowed me to use the LLM and adjust its parameters from the comamnd line.',
	),
	new card(
		'April 2022',
		'Made a bot that solves that test tube pour sorting mobile game. Written in Rust, I am very proud of the algorithm I made. I also got used to testing.'
	),
	new card(
		'April 2022',
		'Wrote a CLI application to keep track of the programs that I need on my computer. It stores them and allows me to reinstall them from a script.'
	),
	new card(
		'June 2022',
		'Finally got Cubic balancing on one edge. The corner proved to be much more difficult.'
	),
	new card(
		'January 2023',
		'Competed in the Queen\'s Engineering Competition and wrote a discord bot that plays audiobooks and autotranscribes them.'
	),
	new card(
		'January 2023',
		'Wrote a discord bot with a friend that stores the courses for each engineering discipline. So the user picks their discipline and gets access to their courses.'
	),
	new card(
		'August 2023',
		'Wrote a TUI application in rust that does a type of brain game called dual-n-back. I learned a lot about the structuring of applications and TUI.'
	),
];
