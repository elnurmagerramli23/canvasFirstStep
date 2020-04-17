function View() {
    this._root = document.querySelector('div#root');
}

View.prototype.init = function() {
    const container = createDiv({
        class: 'container',
        id: 'container'
    });
   
    const canvas = document.createElement('canvas');
    canvas.setAttribute('class', 'canvas');
    canvas.setAttribute('id', 'containerCanvas');
    canvas.setAttribute('width', '500px');
    canvas.setAttribute('height', '500px');

    const inputColor = document.createElement('input');
    inputColor.setAttribute('class', 'input__color');
    inputColor.setAttribute('id', 'inputColor');
    inputColor.setAttribute('type', 'color');
    inputColor.setAttribute('value', '#ff0000');


    container.appendChild(inputColor);
    container.appendChild(canvas);
    this._root.appendChild(container);
}

// const createCanvas = params => {
//     const canvas = document.createElement('canvas');
//     canvas.setAttribute('class', 'container__canvas');
//     canvas.id && (canvas.id = params.id);
//     params.width && (canvas.width = params.width);
//     params.height && (canvas.height = params.height);

//     return canvas;
// }

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