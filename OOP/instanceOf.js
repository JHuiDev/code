//javascript中没有类的概念，只有对象实例的概念
//所谓的class关键字创建的类其实就是创建对象实例，class作为一个语法糖来使用。
var Person = function(name) {
    if (this instanceof Person) {
        this.name = name;
    } else {
        return new Person(name)

    }
}
var p = Person("小明");
console.log(p);