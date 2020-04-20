//1. 对象字面量
// (1) new关键字
var obj = new Object();
obj.name = "datougui";
console.log(obj.name);
// (2) 对象字面量 (语法糖)
var person = {
    name: 'daming',
    age: 27
};
console.log(person);
// (3) Object.create() 从一个实例对象生成另一个实例对象
// create()中的参数a作为返回实例对b的原型对象，在a中定义的属性方法都能被b实例继承下来
var a = {
    getX: function() {
        console.log("X");
    }
}
var b = Object.create(a);
b.getX();
//2. 工厂模式 
//工厂模式存在无法确定对象的身份问题，不知道创建出来的对象是属于那个构造函数的实例
function createPerson(name, age) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.showName = function() {
        console.log(o.name);
    }
    return o;
}

var p1 = createPerson("xioaming", 17);
var p2 = createPerson('xiaohon', 19);
p1.showName();
p2.showName();
//所有的对象都可以检测出是object的实例，因此无法判断
console.log(p1 instanceof Object);
console.log(p2 instanceof Object);

//3. 构造函数模式
// 使用构造函数解决工厂模式的问题
function Person(name, age) {
    if (!(this instanceof Person))
        return new Person(name, age);
    this.name = name;
    this.age = age;
    this.sayName = function() {
        console.log(name);
    }
}
var man = Person("xiaoma", 28);
var woman = Person('xiaohau', 22);
console.log(man, woman);
//3.1 构造函数拓展模式
//3.2 寄生构造函数模式
//3.3 稳妥构造函数模式

//4.原型模式
//5.组合模式
//动态原型模式