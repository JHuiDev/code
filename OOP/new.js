/**
 * new关键字的原理
 * 1.创建一个空对象，作为将要返回的对象实例
 * 2.将这个空对象原型对象，指向了构造函数的prototype属性对象
 * 3.将这个实例对象的值赋值给函数内部的this关键字
 * 4.执行构造函数体内的代码
 */
function Person(name) {
    this.name = name;
}
var p1 = new Person("xiaoming"); //返回一个空的对象实例
console.log(p1);
console.log(p1.__proto__ === Person.prototype); //空对象的原型与Person构造构造函数的实例相同