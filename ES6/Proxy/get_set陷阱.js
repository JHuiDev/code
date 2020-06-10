/**
 * 使用set陷阱验证属性
 * 传入的属性为number类型的验证
 * Reflect.set(traptarget, key, value, receiver);
 */

let target = {
    name: 'target',
}

let proxy = new Proxy(target, {
    /**
     * 
     * @param {*} traptarget 代理目标 
     * @param {*} key 
     * @param {*} value 
     * @param {*} receiver 代理
     */
    set(traptarget, key, value, receiver) {
        // 
        if (!receiver.hasOwnProperty(key)) {
            if (isNaN(value)) {
                throw new TypeError('属性必须是数字');
            }
        }
        return Reflect.set(traptarget, key, value, receiver);
    }
})

proxy.num = 1;
target.name = "xiaoming";
// proxy.gender = "man"; //error
console.log(target);
console.log(proxy);

/**
 * get陷阱
 */

getProxy = new Proxy(target, {
    get(traptarget, key, receiver) {
        console.log('====');
        console.log(traptarget, receiver);
        if (key in traptarget) {
            return Reflect.get(traptarget, key, receiver);
        } else {
            throw new Error('not definde');
        }
    }
})

console.log(getProxy.name); //获取不存在的属性直接报错