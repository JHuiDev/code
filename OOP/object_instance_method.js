/**
 * Object对象 实例上的方法
 */
// 1. Object.prototype.valueOf()
// 返回对象的值，默认返回对象本身
var obj = new Object();
obj.valueOf = function() { //自定义个valueOf函数
    return 2;
}
console.log(obj.valueOf());
console.log(1 + obj); //1[object Object] //obj的默认返回值就变成你所更的值

// 2.Object.prototype.toString
var obj2 = { a: 1 };
obj2.toString = function() { //定制toString
    return "hello";
}
console.log(obj2.toString()); //定制前"[object Object]" 定制后“hello”
// 其他的类都定制了自身的toString方法
var arr = [1, 2, 3];
console.log(arr.toString);
console.log((function() {
    return 1;
}).toString());
// Date 类型上的同toString方法
console.log((new Date()).toString());

// 3.Object.prototype.toLocaleString()
// 返回所在地的时间
console.log((new Date()).toLocaleString());

// 4.Object.prototype.isPrototypeOf();
// 判断该对象是否为另一对对象的原型
o1 = {};
o2 = Object.create(o1);
o3 = Object.create(o2);
console.log("=--");
console.log(o1.isPrototypeOf(o2));
console.log(o1.isPrototypeOf(o3));
console.log(Object.prototype.isPrototypeOf([]));

// 5. Object.prototype.hasOwnProperty()
// 校验对象是否有自己的某个属性，只能检测对象自身的属性对于继承而来的属性无法校验
var obj2 = {
    a: 123,
}
console.log(obj2.hasOwnProperty("a")); //存在
console.log(obj2.hasOwnProperty("b")); //不存在
console.log(obj2.hasOwnProperty("toString")) //false

// 查看对象上某个属性的值的信息，是否可配置，删除，可枚举，value值等信息。他是Object构造函数上的方法
arr = [1, 3];
arr.length = 3;
console.log(Object.getOwnPropertyDescriptor(arr, 'length'));