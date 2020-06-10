/**
 * 一个类只能被实例化一次
 */
// 使用属性实现
class SingleObject {
    constructor(name) {
        this.name = name;
        if (SingleObject.install) {
            return SingleObject.install;
        }
        SingleObject.install = this;
        return this;
    }
}
/**
 * 使用闭包实习
 */
// SingleObject.getInstance = (function() {
//     let instence;
//     return function() {
//         if (!instence) {
//             instence = new SingleObject();
//         }
//         return instence;
//     }
// }());

let single1 = new SingleObject("xiaoming");

let single2 = new SingleObject("daming");
console.log(single1, single2);