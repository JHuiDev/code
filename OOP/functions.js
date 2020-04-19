//Object.keys
// 该方法返回对象的所有可枚举key值
let arr = ["daming", "xiaoming", 3, 4];
let obj = {
    'xiaoming': 123,
    "daming": 321,
}
console.log(Object.keys(arr));
console.log(Object.keys(obj));

// Object.getOwnPropertyNames();方法返回一个对象的所有key值也包括了不可枚举的key值
console.log(Object.getOwnPropertyNames(arr));

//Object.getPrototypeOf()获取对象的原型
console.log(Object.getPrototypeOf(arr) === Array.prototype);

//Object.setPrototypeOf(targetObj,sourceObj),将obj对象作为原型继承给a对象
let a = {};
b = Object.setPrototypeOf(a, obj);
console.log(a.xiaoming);

// 使用Object.setPrototypeof()模拟new关键字
// new关键字做的操作：

// 1.实例化一个对象
// 2.更改构造函数内部的this指向
function Person() {
    this.name = "xiaoming";
}
var p = Object.setPrototypeOf({}, Person.prototype);
Person.call(p);
console.log(p);