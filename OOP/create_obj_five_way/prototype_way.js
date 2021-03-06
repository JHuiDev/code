//原型模式
//缺点：原型对象的属性被所有实例对象共享，当发生修改其他对象的引用值也被修改
//解决：构造函数模式方法暴露，构造函数模式每个实例都有不同的方法引用地址。
(function() {
    function Person() {}
    Person.prototype = {
        construcotr: Person,
        name: 'mjj',
        age: 23,
        friend: [],
        sayName: function() {
            console.log(this.name);
        }
    }
    var p1 = new Person("xiaoming");
    var p2 = new Person();
    p1.friend.push('xiaoming');
    console.log(p1.friend, p2.friend);
    p1.sayName();
}())

// 组合模式
// 组合模式解决了函数属性共享的问题，再开发过程中更最多使用也是组合模式
// 问题：构造函数还没有实例化，就已经被初始化了。
!(function() {
    function Person(name, age) {
        this.name = name;
        this.age = age;
        this.friend = [];
        console.log('333');
    }
    Person.prototype = {
        construcotr: Person,
        sayName: function() {
            console.log(this.name);
        }
    }
    console.log(Perosn.prototype); //
    var my = new Person("ying", 21);
    var you = new Person("maka", 21);
    my.friend.push('dama');
    console.log(my.friend);
    console.log(you.friend);

}())
// 动态原型模式
// 为了解决原型组合模式,构造函数还没有实例化就吧内部的元素初始话的初始化的问题
//动态创建模式是最优方案，但是在开发过程中大多是使用的时候组合创建模式。你可能会在框架源码中见到动态创建模式的身影。
!(function() {
    function Person(name, age) {
        this.name = name;
        this.age = age;
        this.friend = [];
        if (typeof this.sayName != 'function') {
            Person.prototype.sayName = function() {
                console.log(this.name);
            }
        }
    }
    var p = new Person();
    console.log(Person.prototype);

})()