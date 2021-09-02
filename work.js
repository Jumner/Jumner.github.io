class project {
	constructor() {}

	get element() {
		let project = document.createElement('div');
		project.className = 'work-item';
		project.style.height = Math.round(window.innerHeight * 0.75) + 'px';

		let wrapper = document.createElement('div');
		wrapper.className = 'wrapper';
		wrapper.innerHTML = 'lol';
		project.appendChild(wrapper);

		return project;
	}
}

let projects = [new project(), new project()];
