// My Javascript!
// let pageColours = ['linear-gradient(-45deg, #1f261f, #95af95)', '#ffffff'];

function inIframe() {
	// Straight from stackoverflow 🙃
	try {
		return window.self !== window.top;
	} catch (e) {
		return true;
	}
}

function clamp(value, min, max) {
	return Math.min(Math.max(value, min), max);
}

Array.prototype.random = function () {
	// Python has corrupted me
	return this[Math.floor(Math.random() * this.length)];
};

function handleProjects() {
	let container = document.getElementById('projects');
	if (!container) return;
	container.innerHTML = '';
	let cells = [];
	let width = Math.floor(window.innerWidth / 250);
	let aspect = window.innerWidth / window.innerHeight;
	width =  Math.max(Math.min(width,(aspect < 1) ? 2 : 3), 2);
	height = Math.round(1.1 * width / aspect); // Finally got this nice
	height = Math.max(Math.min(height,3), 1);
	for (let y = 0; y < height; y++) {
		let row = document.createElement('div');
		row.className = 'project-row';
		container.appendChild(row);
		for (let x = 0; x < width; x++) {
			let cell = document.createElement('div');
			cell.className = 'project-cell';
			cell.appendChild(cards.random().element); // Longest is index 27
			cell.firstElementChild.style.visibility = 'visible'; // Hidden by default for flip animation
			cell.on = true;
			flip(cell); // enables flipping
			cell.onmouseenter = e => {
				e.target.on = false;
				clearTimeout(e.target.timeout); // Clear the flip timeout so they don't build up.
			};
			cell.onmouseleave = e => {
				e.target.on = true;
				flip(e.target); // Make sure it starts flipping again.
			};
			row.appendChild(cell);
			cells.push(cell);
		}
	}
}


function resize() {
	// Set font size
	document.documentElement.style.fontSize =
		10 * Math.pow((window.innerWidth + window.innerHeight) / 3000, 0.8) + 'px';
	if (window.innerHeight > window.innerWidth) {
		// Mobile sucks lmao
		// Don't make me use the nuclear option
		// document.documentElement.style.fontSize = '2.5px';
	}
	handleProjects();
}

window.onresize = () => {
	resize();
};

function loadPage() {
	console.log("loaded");
	const animationStyle = document.createElement('style');
	document.head.appendChild(animationStyle);
	// Wait for page to load
	resize(); // Set stuff based on window size
	if (inIframe()) {
		// Site in iframe
		const pageContainer = document.getElementById('pageContainer');
		[...pageContainer.children].forEach((child, i) => {
			if (i !== 0) child.remove();
		});
		return; // Nothing else is needed 😄
	}
	const mywork = document.getElementById('mywork');
	projects.forEach(project => {
		mywork.appendChild(project.element);
	});
	// Scroll handling
	const nav = document.getElementById('buttonContainer');
	const homeText = document.getElementById('hometext');
	const aboutme = document.getElementsByClassName('abouth1');
	window.onscroll = () => {
		const scroll = window.scrollY;
		if (scroll < 50) {
			nav.style.padding = 25 - 0.5 * scroll + 'px' + ' 0';
		} else {
			nav.style.padding = '0';
		}
		// Fade out text on scroll
		homeText.style.opacity = 1 - clamp((3 * scroll) / window.innerHeight, 0, 1);
		// Bring in about header on scroll
		aboutme[0].style.right =
			clamp(
				Math.pow(Math.max(500 - scroll + aboutme[0].scrollHeight, 0), 1.2),
				0,
				window.innerWidth / 2 + 100
			) + 'px';
		// Fade in text on scroll
		const aboutP = document.getElementById('aboutP');
		let percent =
			Math.max(
				scroll + window.innerHeight / 2 - aboutP.getBoundingClientRect().y,
				0
			) /
			(window.innerHeight / 1.3);
		percent = 100 - 100 * clamp(percent, 0, 1);
		aboutP.style.backgroundImage = `linear-gradient(
			to top,
			rgba(0, 0, 0, 0),
			rgba(0, 0, 0, 0) ${Math.pow(percent, 1.07)}%,
			#1a201a ${Math.pow(percent, 1.4)}%
		)`;
		// Hr lengthen effect
		const aboutHr = document.getElementById('aboutHr');
		percent =
			clamp(
				54 +
					(-34 * (window.innerHeight - aboutHr.getBoundingClientRect().y)) /
						(window.innerHeight / 3),
				20,
				50
			) + '%';
		aboutHr.style.left = percent;
		aboutHr.style.right = percent;
		// Project h1 fade
		const projectH1 = document.getElementById('aboutProjectH1');
		const projectP = document.getElementById('aboutProjectP');
		let getPercent = (val) => {
			let percent = val * window.innerHeight - scroll;
			percent = Math.pow(Math.max(percent, 0), 1.2);
			percent = clamp(percent, 0, window.innerHeight / 2);
			return percent;
		}
		let h1Percent = getPercent(1.4);
		let pPercent = getPercent(1.45);
		projectH1.style.top = h1Percent + 'px';
		projectP.style.top = pPercent + 'px';
		// Projects slide in
		const rows = [...document.getElementsByClassName('project-row')];
		percent =
			(window.innerHeight - rows[0].getBoundingClientRect().y) /
			(window.innerHeight / 1.5);
		percent = Math.max(
			window.innerWidth / 2 - (percent * window.innerWidth) / 2,
			0
		);
		percent = clamp(
			Math.pow(percent, 1.15),
			0,
			window.innerWidth / 2 + rows[0].getBoundingClientRect().width / 2
		);
		rows.forEach((row, i) => {
			const sign = i % 2 === 0 ? -1 : 1;
			row.style.left = (percent) * sign + 'px';
		});
		// My work header and text
		const workHead = document.getElementById('work-header');
		percent =
			100 -
			(100 * (window.innerHeight - workHead.getBoundingClientRect().y)) /
				(window.innerHeight / 1.5);
		percent = Math.max(percent, 0);
		percent = clamp(Math.pow(percent, 0.9), 0, 100);
		[...workHead.children].forEach(child => {
			child.style.backgroundImage = `linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,0) ${percent}%, #1a201a ${
				percent + 5
			}%)`;
		});
		// Work cards effect
		const cards = [...document.getElementsByClassName('work-item')];
		cards.forEach(card => {
			let percent =
				(window.innerHeight - card.getBoundingClientRect().y) /
				(window.innerHeight / 3);
			percent = clamp(Math.pow(Math.max(percent, 0), 1.2), 0, 1);
			card.style.opacity = percent;
		});
		// contact page effects
		const text = document.getElementById('soc');
		const contact = document.getElementById('contact');
		percent =
			(window.innerHeight - text.getBoundingClientRect().y - contact.getBoundingClientRect().height/3) /
			(window.innerHeight / 5);
		percent = clamp(Math.pow(Math.max(percent, 0), 1.3), 0, 1);
		animationStyle.innerHTML = `div#textwrapper > div.contact.soc::before {height: ${Math.floor(
			70 * percent
		)}%;}`;

		const socials = [...document.getElementsByClassName('socials')].filter(
			element => {
				return element.tagName === 'svg';
			}
		);
		socials.forEach((social, i) => {
			social.style.opacity = percent + i / 4;
		});
	};

	// Date handling
	let years = document.getElementById('timecoding');
	let now = new Date();
	let start = new Date('July 1, 2013'); // Not an exact date but I learned in the summer and have emails with my awesome grandpa from early 2014
	let diff = (now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
	years.innerHTML = Math.floor(diff);
	// Uni year handling
	let uniyear = document.getElementById('uniyear');
	start = new Date('September 1 2022');
	diff = (now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
	let yearNames = ['first', 'second', 'third', 'on internship before my fourth', 'fourth'];
	uniyear.innerHTML = yearNames[Math.floor(diff)];
	
	// Project handling
	handleProjects(); // Fn so it can be ran on resize

	// Link socials
	const socials = ['https://github.com/Jumner', 'https://www.linkedin.com/in/justin-frank-497aa521b/'];
	const socialSvg = [...document.getElementsByClassName('socials')]; // This is awesome
	socialSvg.forEach((svg, i) => {
		svg.outerHTML = `<a href="${socials[i]}" class="socials" target="_blank">${svg.outerHTML}</a>`;
	});

	// Copy phone number
	let data = [
		...document.getElementsByClassName('phone'),
	];
	data.forEach(element => {
		element.onclick = () => {
			if (element.classList.contains('copied')) {
				return; // Prevents oldText from being overwritten
			}
			navigator.clipboard.writeText(element.innerHTML);
			element.classList.add('copied');
			const oldText = element.innerHTML;
			element.innerHTML = 'Text Copied';
			setTimeout(() => {
				element.innerHTML = oldText;
				element.classList.remove('copied');
			}, 1500);
		};
	});
}
loadPage();

function flip(cell) {
	cell.timeout = setTimeout(() => {
		if (!cell.on) return; // Make sure it wont flip if being hovered
		cell.style.transform = 'rotateX(90deg)';
		let oldHtml = cell.innerHTML;
		cell.appendChild(
			cards
				.filter(card => {
					return oldHtml !== card.html; // filter out the same card so no repeats
				})
				.random().element
		);
		setTimeout(() => {
			cell.removeChild(cell.firstElementChild);
			cell.firstElementChild.style.visibility = 'visible';
			flip(cell);
			cell.style.transform = 'rotateX(0deg)';
		}, 500);
	}, 10000 + 10000 * Math.random());
}

function setTopRightBottomLeft(element, value) {
	element.style.top = value;
	element.style.right = value;
	element.style.bottom = value;
	element.style.left = value;
}
