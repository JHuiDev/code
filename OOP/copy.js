// 类型的拷贝可以为深拷贝和浅拷贝
// 浅拷贝
var obj = {
    name: "xiaoming",
    age: 23,
    friend: {
        name: "daming",
        age: 22,
    }
}
var obj2 = {}
for (var key in obj) {
    obj2[key] = obj[key];
}
// 更改obj2的内引用类型属性obj的也会被更改
obj2.friend.name = "xiaohong";
obj2.name = "xiaobai";
console.log(obj);
console.log(obj2);

//深拷贝

obj3 = {};

function deepCopy(sourceObj, newObj) {
    for (key in sourceObj) {
        // 确保是自己对象上的属性，而非继承的
        if (sourceObj.hasOwnProperty(key)) {
            // 数组和对象都使用typeof都会返回object
            if (sourceObj[key] && typeof sourceObj[key] === 'object') {
                // 通过构造器判断是数组还是对象
                newObj[key] = sourceObj[key].constructor === Array ? [] : {};
                newObj[key] = deepCopy(sourceObj[key], newObj[key]);
            } else {
                newObj[key] = sourceObj[key];
            }
        }
    }
    return newObj;
}

obj3 = deepCopy(obj, obj3);
obj3.friend.name = "xxx";
console.log(obj3);
console.log(obj); //obj的引用类型不会被修改