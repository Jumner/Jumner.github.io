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
		project.style.height = Math.round(window.innerHeight * 0.75) + 'px';

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
		'My portfolio website',
		'The website that you are looking at right now! I spent a long time making it look good and convey a message that I was happy with. This project has a lot of front end development and a bit of backend development to handle the form in the contact me section. This was mainly a way to freshen up my web development skills and create a good place to put my work.',
		[
			'I often struggle at the actual design aspect as you might know from my old website. I spent a lot of time laying this one out and learning the actual techniques to make this one as good as I can.',
			'It might sound pretty trivial, but I had to put a year and month on every computer related event in my life. A lot of looking at old pictures, emails, and accounts.',
			'I learned a lot of tips and tricks of making a website. I always wondered why many websites use so many divs. Now I know, the way that things are positioned on the page is much easier when you surround everything in 20 divs!',
		],
		'<iframe src="index.html" style="border:none;" width="100%" height="100%" title="My website IN my website!"></iframe>'
	),
	new project(
		'Turing Vscode',
		'An extension to a popular code editor that adds support for a educational programming language that is rarely used. Because of my situation, I was forced to use a text editor to write code in this language. One day I had enough with the auto-detected language making half of the text green. I set out to just colour the text properly. I got a bit carried away and got really close to full language support. You can even run your code straight from the text editor!',
		[
			'There is always an element of surprise when adding functionality to someone elses program.<br/ >The documentation was extremely clear and painless',
			'The extension aut-completes built in functions. The problem is that there are hundreds of them, and a lot of them are just duplicates under other names. It was a long and tedious process to copy paste every function with its definition and write a unique explanation. I had to learn how ever function in the entire language works.',
			'This is a unique project because it started with a very small scope, but as I worked on it, I discovered that adding just a few more features would be really easy. And soon enough I was making it auto-complete user defined variables.',
		],
		'<div class="space-wrapper" style="background-image: url(\'img/Example.gif\')">',
		'https://github.com/Jumner/TuringVscode'
	),
	new project(
		'Do Work',
		'Because my high school used google classroom, I wrote a program that connects to the google api and grabs all my unsubmitted school projects. If there are any, It closes all unproductive programs on my computer. The only problem is that my high school switched to a new worse program. I might re-do this project as brightspace does have its own api.',
		[
			'One problem is that the google api for google classroom was not very clear for what I needed it for. There are a lot of steps in the process of grabbing the projects. You have to filter through all courses past and present, then sort everything for assignments, sort for ones with due dates, then check if they are submitted. A lot of places to get stuck.',
			'This was my first real experience with api. I spent many late nights trying to get it to work, and it was very satisfying to see it work.',
			'I also learned how to close programs with code. It might sound simple, but you have to write a program that filters through individual threads and checks what program they are associated with.',
		],
		'<div class="space-wrapper" style="background-image: url(\'img/white.jpeg\')">'
	),
];
