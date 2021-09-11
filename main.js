// My Javascript!
// let pageColours = ['linear-gradient(-45deg, #1f261f, #95af95)', '#ffffff'];

function clamp(value, min, max) {
	return Math.min(Math.max(value, min), max);
}

Array.prototype.random = function () {
	// Python has corrupted me
	return this[Math.floor(Math.random() * this.length)];
};

window.onload = () => {
	// Wait for page to load
	const pages = [...document.getElementsByClassName('page')]; // Grab all the pages
	pages.forEach(page => {
		page.style.height = window.innerHeight + 'px'; // Size all the of them
	});
	const aboutMe = document.getElementById('aboutme');
	aboutMe.style.height = window.innerHeight * 2 + 'px';
	const mywork = document.getElementById('mywork');
	projects.forEach(project => {
		mywork.appendChild(project.element);
	});
	const contact = document.getElementById('contact');
	contact.style.height = Math.round(window.innerHeight / 2) + 'px';
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
				window.innerWidth / 2
			) + 'px';
		// Fade in text on scroll
		const aboutP = document.getElementById('aboutP');
		let percent =
			Math.max(scroll - aboutP.scrollHeight + window.innerHeight / 2, 0) /
			aboutP.clientHeight;
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
	}, 5000 + 15000 * Math.random());
}

function popup(success, header, text) {
	const popup = document.createElement('div');
	popup.className = success ? 'success' : 'fail';
	popup.id = 'popup';

	const button = document.createElement('div');
	button.className = 'button';
	button.innerHTML = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
	<g><path d="M500,10C229.7,10,10,229.7,10,500s219.7,490,490,490s490-219.7,490-490S770.3,10,500,10z M774.6,660.5c31.2,31.2,31.2,82.9,0,114.2c-16.2,16.2-36.6,23.7-57.1,23.7c-20.5,0-40.9-7.5-57.1-23.7L500,614.2L339.5,774.6c-16.2,16.2-36.6,23.7-57.1,23.7s-40.9-7.5-57.1-23.7c-31.2-31.2-31.2-82.9,0-114.2L385.8,500L225.4,339.5c-31.2-31.2-31.2-82.9,0-114.2c31.2-31.2,82.9-31.2,114.2,0L500,385.8l160.5-160.5c31.2-31.2,82.9-31.2,114.2,0c31.2,31.2,31.2,82.9,0,114.2L614.2,500L774.6,660.5z" fill="#1a201a"/></g>
	</svg>`;
	button.onclick = () => {
		popup.remove();
	};
	popup.appendChild(button);

	const textBox = document.createElement('div');
	textBox.id = 'popup-text';
	popup.appendChild(textBox);

	const head = document.createElement('h1');
	head.innerHTML = header;
	textBox.appendChild(head);

	const p = document.createElement('p');
	p.innerHTML = text;
	textBox.appendChild(p);

	document.body.appendChild(popup);
	setTimeout(() => {
		popup.remove();
	}, 10000);
}

function contactSubmit() {
	let inputs = ['fullname', 'contactinfo', 'message'];
	inputs = inputs.map(input => {
		let inp = document.getElementById(input);
		let value = inp.value;
		return value; // Map the values onto the ids
	});
	if (
		!inputs.reduce((acc, inp) => {
			// Wow I actually used reduce!
			return acc && inp;
		})
	) {
		// Empty inputs
		popup(false, 'Error', 'Please fill out all of the input boxes.');
	} else {
		// No errors were found
		popup(
			true,
			'Form Submitted!',
			"This message confirms that my server is running and that I've been notified. Thanks for reaching out 😁"
		);
	}
	console.log(inputs); // Well handle this later
}
