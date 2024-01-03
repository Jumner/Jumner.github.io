let flipped = false;
class project {
	constructor(name, explanation, challenges, url, href = '') {
		this.name = name;
		this.explanation = explanation;
		this.challenges = challenges;
		this.flipped = flipped;
		this.url = url;
		this.href = href;
		flipped = !flipped;
	}

	get element() {
		let project = document.createElement('div');
		project.className = 'work-item';

		let wrapper = document.createElement('div');
		wrapper.className = 'wrapper';
		if (this.flipped) wrapper.className += ' flipped'; // Flip every other one
		project.appendChild(wrapper);

		wrapper.onclick = () => {
			if (this.href) window.open(this.href, '_blank');
		};

		wrapper.onmouseenter = () => {
			wrapper.classList.add('hover');
		};

		wrapper.onmouseleave = () => {
			wrapper.classList.remove('hover');
		};

		let content = document.createElement('div');
		content.className = 'content';

		let contentWrapper = document.createElement('div');
		contentWrapper.className = 'content-wrapper';
		content.appendChild(contentWrapper);

		let infoWrapper = document.createElement('div');
		infoWrapper.className = 'info-wrapper';
		contentWrapper.appendChild(infoWrapper);

		let name = document.createElement('h1');
		name.innerHTML = this.name;
		infoWrapper.appendChild(name);

		let explanation = document.createElement('p');
		explanation.innerHTML = this.explanation;
		infoWrapper.appendChild(explanation);

		let challengeWrapper = document.createElement('div');
		challengeWrapper.className = 'challenge-wrapper';
		contentWrapper.appendChild(challengeWrapper);

		let challengeHeader = document.createElement('h1');
		challengeHeader.innerHTML = "Here's what I learned";
		challengeWrapper.appendChild(challengeHeader);

		let challenges = document.createElement('ul');
		this.challenges.forEach(challenge => {
			let challengeDom = document.createElement('li');
			challengeDom.innerHTML = challenge;
			challenges.appendChild(challengeDom);
		});
		challengeWrapper.appendChild(challenges);

		let space = document.createElement('div');
		space.className = 'space';
		space.innerHTML = this.url;

		wrapper.appendChild(content);
		wrapper.appendChild(space);

		return project;
	}
}

let projects = [
	new project(
		'Queen\'s Autdrive',
		'I\'m the controls lead for Queen\'s Autodrive. Autodrive is an engineering competition to convert a Chevrolet Bolt into an SAE level-4 autonomous vehicle. As one of 10 teams selected to compete, I am very honoured to lead the controls aspect of this project. Collaboratively working hands on in a project of this scale has taught me an incredible amount about real engineering.',
		['Large scale project management and collaborative engineering.', 'How to lead a team of engineers to efficiently acheive a goal.', 'Controller verification with software in the loop (SIL).', 'A wide variety of Mathworks tools including Matlab, Simulink, Roadrunner.', 'Integrating complex and interconnected Simulink systems with ROS2.'],
		'<div class="space-wrapper" style="background-image: url(\'https://autodrive.engineering.queensu.ca/images/about-img-three.png\')">',
		'https://autodrive.engineering.queensu.ca/'
	),
	new project(
		'Cubic',
		'Inspired but Cubli, I designed, build and programmed a cube that can balance itself using 3 reaction wheels. After over 2 years of work (with a lot of breaks), I finally got it balancing on the corner. This project is what convinced me to go into Mechatronics engineering and pursue controls. I learned an incredible amount about classical and modern controls even though I only ended up using PID. This project was a rolercoaster of emotions and I can\'t wait to take up another project of this scale.',
		['Embedded C++ programming (with Arduino), embedded Rust programming (hal).', 'Communication Protocols (Spi, I2C, Serial), using sensors and actuators.', 'The application of control, stability analysis, state estimation, linear optimal control, and PID tuning.', 'Design and manufacturing of complex assemblies with hundreds of parts.', 'Project management, planning, and extreme perseverance.'],
		'<div class="space-wrapper" style="background-image: url(\'https://user-images.githubusercontent.com/69999075/175431668-324ac41d-5c04-4bda-bd9f-c9cc0a512682.jpg\')">',
		'https://github.com/Jumner/cubicFirmware'
	),
	new project(
		'Turing Vscode',
		'An extension for the code editor Vscode which adds support for the Turing programming language. Turing is a rarely used, educational programming language. However, my high school used it for computer engineering. One day, frustrated with the built in editor, I just wanted to add syntax highlighting so I could use VsCode. I got a bit carried away and got as close to full support as possible without writing my own language server.',
		[
			'How to make VsCode extensions! The documentation was really good and super clear. Made it a breeze to get up and runner.',
			'How Language Server Protocols (LSP) work. I always took it for granted but not anymore.',
			'The dangers of scope creep and its repercusions on a project. This project started with a tiny scope which grew orders of magnitude. This resulted in terrible code that could use a lot of refractoring. In hindsight, I should have just bit the bullet and written a language server.',
		],
		'<div class="space-wrapper" style="background-image: url(\'img/Example.gif\')">',
		'https://github.com/Jumner/TuringVscode'
	),
	new project(
		'My portfolio website',
		'The website that you are looking at right now! I spent a long time making it look good and convey a message that I was happy with. I made this whole site with no framework, just HTML, CSS, and JavaScript. Though I am not a front end developer, I really enjoyed it, especially making the animations from scratch. This was mainly a way to freshen up my web development skills and create a good place to put my projects.',
		[
			'Using planning to make it look good. My sites usually look terrible but I put a lot of time and planning into this one and I\'m very pleased with how it turned out.',
			'I have a really long history of programming. It was really hard to track down all my failed projects. A lot of looking at old pictures, github repos, and emails with my Grandpa.',
			'I learned a lot of tips and tricks of making a website. For example, I get why sites use so many divs. It\'s much easier to position things when you surround everything in 20 divs!',
		],
		'<iframe src="index.html" style="border:none;" width="100%" height="100%" title="My website IN my website!"></iframe>'
	),
];
