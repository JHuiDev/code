//每个对象在创建的时候都会拥有一个构造函数属性construct
//其实就是Person函数

function Person(name) {
    this.name = name
}

var p = new Person("xiaoming");
console.log(p.constructor === Person);
//使用class关键字定义一个类的时候，其中的construct方法对应的也就是一个函数

class Animal {
    // construct方法相当于上面的Person方法
    constructor(kind) {
        this.kind = kind
    }
}

var dog = new Animal("Canidae");

console.log(dog.constructor);
console.log(dog);