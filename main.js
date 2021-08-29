// My Javascript!
window.onload = () => {
	// Wait for page to load
	let pages = document.getElementsByClassName('page'); // Grab all the pages
	for (let i = 0; i < pages.length; i++) {
		pages[i].style.height = window.innerHeight + 'px'; // Size all the of them
		pages[i].style.backgroundColor =
			'rgb(255,' + Math.floor((i * 255) / (pages.length - 1)) + ',0)';
	}
};
