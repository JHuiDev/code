/**
 * 下面展示了代理与目标代理的差异性
 * 在对代理使用Object.getPrototypeOf获取原型的时候会触发getPrototype陷阱并使它返回null；而代理目标则不会触发代理陷阱
 * 在使用Object.setPrototypeOf获取代理的原型是使用代理陷阱返回false，如果返回false则陷阱会默认报错。而目标代理不会触发代理陷阱
 * 
 */
let target = {};

let proxy = new Proxy(target, {
    getPrototypeOf(traptarget) {
        // Reflect.getPrototypeOf(traptarget);
        return null;
    },
    setPrototypeOf(traptarget, prototype) {
        // Reflect.setPrototypeOf(traptarget, prototype);
        return false;
    },
})

let proxyproto = Object.getPrototypeOf(proxy);

let targetproto = Object.getPrototypeOf(target);
console.log(proxyproto === Object.prototype);
console.log(targetproto === Object.prototype);
console.log(proxyproto);

Object.setPrototypeOf(target, {});
// Object.setPrototypeOf(proxy, {}); //Error

/**
 * Object.getPrototypeOf()和Object.setPrototypeOf()与反射的Reflect.getPrototypeOf()和Reflect.setPrototypeOf()看似相同的操作其实存在重大差异
 *  Object.getPrototypeOf()和Object.setPrototypeOf()是高级操作
 *  而Reflect.getPrototypeOf()、Reflect.setPrototypeOf()是底层操作
 *  查看深入理解ES6 P281阅读原文
 */

//如果传入的是值不是对象Reflect.getPrototypeOf()返回直接报错；
//而Object.getPrototypeOf()方法则会在执行前强制将值转换为对象，在进行操作

let result = Object.getPrototypeOf(1); //将1强制转化为Number对象
console.log(result === Number.prototype); //true

// Reflect.getPrototypeOf(1); //不是一个对象抛出错误Error

/**
 * 
 * Object.setPrototypeOf 与 Reflect.setPrototypeOf同样存在差异
  Object.setPrototypeOf的返回值为第一个参数，当它操作失败的时候会返回false，相当与操作失败
  而Reflect.setPrototypeOf返回的是boolean操作是否成功
 */

let target2 = {};

let result2 = Object.setPrototypeOf(target2, {}); //返回的是第一个参数
console.log(target2 === result2); //true

let result3 = Reflect.setPrototypeOf(target2, {}) //返回boolean值

console.log(result3);