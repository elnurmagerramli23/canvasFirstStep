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