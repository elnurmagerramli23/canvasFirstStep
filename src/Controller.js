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