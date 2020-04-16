(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function Controller(model, view) {
    this._model = model;
    this._view = view;
}

Controller.prototype.init = function() {
    this._view.init();
}

Controller.prototype.addPerson = function() {
    let sName = document.getElementById('name').value;
    let person = {
        name: sName,
    };

    this._model.addPerson(person);
}

module.exports = Controller;
},{}],2:[function(require,module,exports){
function Model() {
    this._persons = [];
}

Model.prototype.addPerson = function(person) {
    this._persons.push(person);
}

Model.prototype.getPersons = function() {
    return this._persons;
}

module.exports = Model;

//tolshina, cvet, koordinati
},{}],3:[function(require,module,exports){
function View() {
    this._root = document.querySelector('div#root');
}

View.prototype.init = function() {
    const container = createDiv({
        class: 'container',
        id: 'container'
    });
    
   
    this._root.append(container);
}

const createDiv = params => {
    const div = document.createElement('div');
    div.setAttribute('class', params.class)
    params.id && (div.id = params.id);
    params.title && (div.title = params.title);
    params.textContent && (div.textContent = params.textContent);
    params.inner && (div.innerHTML = params.inner);

    return div;
};

const createForm = id => {
    const form = document.createElement('form');
    form.id = id;

    return form;
}

const createLabel = params => {
    const label = document.createElement('label');
    label.setAttribute('for', params.name);
    params.inner && (label.innerHTML = params.inner);

    return label;
}

const createInput = params => {
    const input = document.createElement('input');
    input.setAttribute('type', params.type || 'text');
    params.id && input.setAttribute('id', params.id);
    params.name && input.setAttribute('name', params.name);
    params.placeholder && (input.placeholder = params.placeholder);

    return input;
}

module.exports = View;
},{}],4:[function(require,module,exports){
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


},{"./Controller.js":1,"./Model.js":2,"./View.js":3}]},{},[4]);
