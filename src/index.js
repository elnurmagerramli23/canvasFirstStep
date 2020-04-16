// const root = document.querySelector('div#root');

// const container = document.createElement('div');
// container.setAttribute('class', 'container');
// root.appendChild(container)

const Model = require('./Model.js');
const View = require('./View.js');
const Controller = require('./Controller.js');

function initProject() {  
	const model = new Model();
   	const view = new View(); 
	const controller = new Controller(model, view);
 
	controller.init()
}

initProject();

