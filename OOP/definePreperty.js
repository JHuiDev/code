var obj = Object.defineProperty({}, 'name', {
    value: 'xiaoming',
    writable: false, //是否可写
    configurable: false, //是否可配置（删除）
    enumerable: false //是否可枚举
})
for (var key in obj) {
    console.log(obj[key]);
}
obj.name = "xiaohong"
console.log(obj.name);
console.log(delete obj.name);
// Object.defineProperties定义多个属性的描述
var obj2 = Object.defineProperties({}, {
    p1: {
        value: 1,
        enumerable: true,
        writable: true,
    },
    p2: {
        value: 2,
        enumerable: false,
        writable: false,
    },
    p3: {
        get: function() {
            console.log(this.p2 + this.p1);
        }
    }
})
obj2.p3;
// 注意get方法和writeable、value属性不能共存!!!