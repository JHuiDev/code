/**
 * has用于拦截in操作符并返回一些不同的值和默认值
 * 在使用in检查的时候都会触发has陷阱
 */
let target = {
    name: 'target',
    value: 42,
}

let proxy = new Proxy(target, {
    has(trapTarget, key) {
        if (key === 'value') {
            return false;
        } else {
            return Reflect.has(trapTarget, key);
        }
    }
})
console.log("value" in proxy);
console.log("name" in proxy);