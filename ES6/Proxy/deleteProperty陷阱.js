/**
 * 使用deleteProperty防止删除属性
 * 每当属性被删除时都会调用该陷阱
 */
(function() {

    "use strict";
    let target = {
        name: "xiaoming",
        age: 21,
        value: 55,
    };
    //在非严格模式下删除不可配置的属性，只是返回false，在严格模式下则会直接报错
    // Object.defineProperty(target, "name", {
    //     configurable: false,
    // });
    // console.log(delete target.name);//严格模式中报错
    console.log(delete target.age);

    let proxy = new Proxy(target, {
        deleteProperty(trapTarget, key) {
            if (key === "value") {
                return false;
            } else {
                console.log(Reflect);
                return Reflect.deleteProperty(trapTarget, key);
            }
        }

    });
    console.log(delete proxy.name);
    // console.log(delete proxy.value);
})()