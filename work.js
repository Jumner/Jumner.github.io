class project {
	constructor(name) {
		this.name = name;
	}

	get element() {
		let project = document.createElement('div');
		project.className = 'work-item';
		project.style.height = Math.round(window.innerHeight * 0.75) + 'px';

		let wrapper = document.createElement('div');
		wrapper.className = 'wrapper';
		// wrapper.innerHTML = this.name;
		project.appendChild(wrapper);

		let content = document.createElement('div');
		content.className = 'content';
		content.innerHTML = 'content: ' + this.name;

		let space = document.createElement('div');
		space.className = 'space';
		space.innerHTML = 'space: ' + this.name;

		let header = document.createElement('div');
		header.className = 'header';
		header.innerHTML = 'header: ' + this.name;

		wrapper.appendChild(header);
		wrapper.appendChild(content);
		wrapper.appendChild(space);

		return project;
	}
}

let projects = [
	new project('My portfolio website, This!'),
	new project('Turing Vscode'),
	new project('Do Work'),
];
