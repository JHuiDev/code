var Animal = function() {
    this.name = "Animal";
}

var Dog = function() {
    this.kind = 'dog'
}
Dog.prototype = new Animal();
Dog.prototype.constructor = Dog;