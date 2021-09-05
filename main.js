// My Javascript!
// let pageColours = ['linear-gradient(-45deg, #1f261f, #95af95)', '#ffffff'];

Array.prototype.random = function () {
	// Python has corrupted me
	return this[Math.floor(Math.random() * this.length)];
};

window.onload = () => {
	// Wait for page to load
	let pages = document.getElementsByClassName('page'); // Grab all the pages
	for (let i = 0; i < pages.length; i++) {
		pages[i].style.height = window.innerHeight + 'px'; // Size all the of them
	}
	let mywork = document.getElementById('mywork');
	projects.forEach(project => {
		mywork.appendChild(project.element);
	});
	let contact = document.getElementById('contact');
	contact.style.height = Math.round(window.innerHeight / 2) + 'px';
	// Scroll handling
	let nav = document.getElementById('buttonContainer');
	window.onscroll = () => {
		let scroll = window.scrollY;
		if (scroll < 50) {
			nav.style.padding = 25 - 0.5 * scroll + 'px' + ' 0';
		} else {
			nav.style.padding = '0';
		}
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

	// Name hover thing
	let name = document.getElementById('name');
	let text = name.innerHTML;
	text = text
		.split('')
		.map(char => {
			return '<span>' + char + '</span>';
		})
		.join('');
	name.innerHTML = text;
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

function contactSubmit() {
	let inputs = ['fullname', 'contactinfo', 'message'];
	inputs = inputs.map(input => {
		let inp = document.getElementById(input);
		let value = inp.value;
		inp.value = '';
		return value; // Map the values onto the ids
	});
	console.log(inputs); // Well handle this later
}
