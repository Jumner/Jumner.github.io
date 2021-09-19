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

function resize() {
	// Set font size
	const area = window.innerWidth * window.innerHeight;
	document.documentElement.style.fontSize =
		Math.round(10 * Math.sqrt(area / 1787520)) + 'px'; // Set default font size (sorry accessability)
}

window.onresize = () => {
	resize();
};

window.onload = () => {
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
		percent = 1.5 * window.innerHeight - scroll;
		percent = Math.pow(Math.max(percent, 0), 1.2);
		percent = clamp(percent, 0, window.innerHeight / 2);
		projectH1.style.top = percent + 'px';
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
			const sign = 2 * i - 1;
			row.style.left = percent * sign + 'px';
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
		// // contact page effects
		const text = document.getElementById('soc');
		percent =
			(window.innerHeight - text.getBoundingClientRect().y) /
			(window.innerHeight / 3);
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

	// Project handling
	let container = document.getElementById('projects');
	let cells = [];
	for (let y = 0; y < 2; y++) {
		let row = document.createElement('div');
		row.className = 'project-row';
		container.appendChild(row);
		for (let x = 0; x < 3; x++) {
			let cell = document.createElement('div');
			cell.className = 'project-cell';
			cell.appendChild(cards.random().element);
			cell.on = true;
			flip(cell); // enables flipping
			cell.onmouseenter = e => {
				e.target.on = false;
				clearTimeout(e.target.timeout);
			};
			cell.onmouseleave = e => {
				e.target.on = true;
				flip(e.target);
			};
			row.appendChild(cell);
			cells.push(cell);
		}
	}

	// Link socials
	const socials = ['https://github.com/Jumner', '', ''];
	const socialSvg = [...document.getElementsByClassName('socials')]; // This is awesome
	socialSvg.forEach((svg, i) => {
		svg.outerHTML = `<a href="${socials[i]}" class="socials" target="_blank">${svg.outerHTML}</a>`;
	});

	// Copy email and phone number
	let data = [
		...document.getElementsByClassName('email'),
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
};

function flip(cell) {
	cell.timeout = setTimeout(() => {
		if (!cell.on) return; // Make sure it wont flip if being hovered
		cell.style.transform = 'rotateX(90deg)';
		setTimeout(() => {
			let oldHtml = cell.innerHTML;
			cell.innerHTML = ''; // Clear past card
			cell.appendChild(
				cards
					.filter(card => {
						return oldHtml !== card.html; // filter out the same card so no repeats
					})
					.random().element
			);
			flip(cell);
			cell.style.transform = '';
		}, 500);
	}, 10000 + 10000 * Math.random());
}
