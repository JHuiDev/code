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
    this.age = 12;
}
var earthExample = new Earth();
Animal.prototype = earthExample;
var animalExample = new Animal();
Person.prototype = animalExample;
var personExample = new Person();
Child.prototype = personExample;
var childExample = new Child();