var Earth = function() {
    this.name = "earth";
}

var Animal = function() {
    this.name = "Animal";
}

var Person = function() {
    this.age = 23;
}
var Child = function() {
    this.name = 12;
};
// Animal.prototype = Earth.prototype;
// Person.prototype = Animal.prototype;
Child.prototype.show
Child.prototype = Person.prototype;
Child.prototype.constructor = Child;
var child = new Child();