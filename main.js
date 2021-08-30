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

	// Timeline handling
	let tlCanvas = document.getElementById('timeline');
	let size = { x: tlCanvas.clientWidth, y: tlCanvas.clientHeight };
	tlCanvas.width = size.x;
	tlCanvas.style.width = size.x + 'px';
	tlCanvas.height = size.y;
	tlCanvas.style.height = size.y + 'px';
	let ctx = tlCanvas.getContext('2d');
	ctx.imageSmoothingEnabled = false;

	ctx.fillRect(0, 0, 100, 100);
	console.log(size);

	// Date handling
	let years = document.getElementById('timecoding');
	let now = new Date();
	let start = new Date('July 1, 2013'); // Not an exact date but I learned in the summer and have emails with my awesome grandpa from early 2014
	let diff = (now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
	years.innerHTML = Math.floor(diff);
};
