// My Javascript!
// let pageColours = ['linear-gradient(-45deg, #1f261f, #95af95)', '#ffffff'];
let pageColours = ['#ffffff', '#ffffff', '#ffffff'];

window.onload = () => {
	// Wait for page to load
	let pages = document.getElementsByClassName('page'); // Grab all the pages
	for (let i = 0; i < pages.length; i++) {
		pages[i].style.height = window.innerHeight + 'px'; // Size all the of them
		if (pageColours[i]) {
			pages[i].style.background = pageColours[i];
		} else {
			pages[i].style.backgroundColor =
				'rgb(255,' + Math.floor((i * 255) / (pages.length - 1)) + ',0)';
		}
	}
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
	for (let y = 0; y < 3; y++) {
		let row = document.createElement('div');
		row.className = 'project-row';
		container.appendChild(row);
		for (let x = 0; x < 3; x++) {
			let cell = document.createElement('div');
			let card = document.createElement('div');
			cell.className = 'project-cell';
			card.className = 'project-card';
			cell.style.backgroundColor = 'rgb(255,' + 25 * (x * 3 + y) + ',0)';
			cell.on = true;
			cell.appendChild(card);
			flip(cell);
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
};

function flip(cell) {
	cell.timeout = setTimeout(() => {
		if (!cell.on) return;
		cell.children[0].innerHTML += 'f';
		flip(cell);
	}, 3000 + 5000 * Math.random());
}
