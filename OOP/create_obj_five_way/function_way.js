//3. 构造函数模式
// 使用构造函数解决工厂模式的问题

// 解决：可以使用instanceof检测对象类型
// 问题：每个创建出来的方法都引用了不同的内存空间；
!(function() {
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
    // man 和woman两个对象引用了来个不同的内存空间这就会加大内存消耗
    console.log(man.sayName === woman.sayName); //false

})()

//3.1 构造函数拓展模式
// 解决: 可以使用instanceof判断实例
// 问题：放在外面的函数会污染全局空间
!(function() {
    function Person(name, age) {
        if (!(this instanceof Person))
            return new Person(name, age);
        this.name = name;
        this.age = age;
        this.sayAge = sayAge;
    }

    function sayAge() {
        console.log(name);
    }
    var man = Person("xiaoma", 28);
    var woman = Person('xiaohau', 22);
    console.log(man.sayAge === woman.sayAge); //true

}());
//3.2 寄生构造函数模式
// 解决:寄生模式解决了全局污染的问题
// 问题：每个创建出来的方法都引用了不同的内存空间；不能使用instanceof检测
!(function() {
    function Person(name, age) {
        var o = new Object();
        o.name = name;
        o.age = age;
        o.sayName = function() {
            console.log(this);
            console.log(this.name);
        }
        return o;
    }
    var man = new Person("ahaung", '21');
    var woman = new Person("xiaobao", '21');
    console.log(man.sayName === woman.sayName); //false
    console.log(man instanceof Person); //false
})()
//3.3 稳妥构造函数模式
// 解决：数据的安全
// 问题：每个创建出来的方法都引用了不同的内存空间；不能使用instanceof检测
!(function() {
    // 稳妥模式：没有公共的属性，并且它的方法也不引用this对象
    // 使用闭包封装私有属性a
    function Person(name) {
        var a = 10;
        var o = new Object();
        o.sayName = function() {
            console.log(a);
            console.log(name);
        }
        return o;
    }
    // p1对象的委托对象
    var p1 = Person('xioaming');
    p1.sayName();
})()