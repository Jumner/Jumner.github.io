// My Javascript!
let pageColours = ['linear-gradient(-45deg, #1f261f, #95af95)'];

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

	// Position home text box
	let box = document.getElementById('hometext');
	let gap = box.style.marginLeft;
	box.style.marginTop = gap;
};
