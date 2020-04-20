//1. 原型继承
// 解决：实现对父类方法和属性的继承
// 缺点：共享父类的实例， 当某一个实例修改了父类的属性时，其他属性的值也会被修改。
//      当实例化时无法传递参数到父类。
(function() {
    var Animal = function(naem) {
        this.name = name;
        this.friend = ["alsj", 'dahuang'];
    }
    var Dog = function() {}
    Dog.prototype = new Animal();
}())

//2。构造函数继承
// 解决：原型继承父类中的实例共享的问题，可以像父类的构造函数传递参数。
// 缺点：只继承了父类的属性，而没有继承父类的方法
!(function() {
    var Animal = function(naem) {
        this.name = name;
        this.friend = ["alsj", 'dahuang'];
    }
    var Dog = function(name) {
        Animal.call(this, name);
    }
}())

//3.组合继承
// 合并了原型继承和构造函数继承。
//解决：一并原型继承和构造函数继承的问题。
//缺点：会执行两次父类的构造函数。
!(function() {

    var Animal = function(name) {
        this.name = name;
        this.friend = ["alsj", 'dahuang'];
    };
    var Dog = function(name) {
        Animal.apply(this, [name]);
    };
    Dog.prototype = new Animal();

})()
//4.寄生组合继承
//解决：组合继承需要执行两次父类构造函数的问题
//寄生组合继承是开发中最常用的继承方式
!(function() {
    var Animal = function(name) {
        this.name = name;
        this.friend = ["alsj", 'dahuang'];
    };
    Animal.prototype.sayName = function() {
        console.log(this.name);
    }
    var Dog = function(name) {
        Animal.call(this, name);
    };
    Dog.prototype = Object.create(Animal.prototype);
}())