function Person() {
    this.name = "xiaoming";
}
Person.prototype.sayName = function() {
    console.log(this.name);
}

function Partent() {
    this.age = 12;
}
Partent.prototype.sayAge = function() {
    console.log(age);
}

function Me() {
    Person.call(this);
    Partent.call(this);
}
// Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。
Me.prototype = Object.create(Person.prototype);
Me.prototype.constructor = Me;
// Object.assign(targetObj,sourcesObj) 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
Object.assign(Me.prototype, Partent.prototype);