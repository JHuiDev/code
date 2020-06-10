function toUint32(value) {
    return Math.floor(Math.abs(Number(value))) % Math.pow(2, 32);
}

function isArrayIndex(key) {
    let numbericKey = key;
    return String(numbericKey) == key && numbericKey < Math.pow(2, 32) - 1;
}

function createMyArray(length) {
    return new Proxy({ length }, {
        set(trapTarget, key, value) {
            let currentLength = Reflect.get(trapTarget, "length");
            if (isArrayIndex(key)) {
                let numbericKey = Number(key);
                if (numbericKey >= currentLength) {
                    return Reflect.set(trapTarget, "length", numbericKey + 1);
                }
                // 但key为length时说明要更改length的长度
            } else if (key === "length") {
                if (value < currentLength) {
                    for (let i = currentLength - 1; i >= value; i--) {
                        Reflect.deleteProperty(trapTarget, i);
                    }
                }
            }
            return Reflect.set(trapTarget, key, value);
        }

    })
}

let arr = createMyArray(3);
arr[0] = 1;
arr[1] = 3;

arr[2] = 2;

arr[10] = 3;
arr.length = 1;
// console.log(arr);

class MyArray {
    constructor(length) {
        this.length = length;
        return new Proxy(this, {
            set(trapTarget, key, value) {
                console.log(key);
                let currentLength = Reflect.get(trapTarget, "length");
                if (isArrayIndex(key)) {
                    // 最开始创建的length小于等于我们后来获取到的length就加1
                    if (key >= currentLength) {
                        Reflect.set(trapTarget, "length", currentLength + 1);
                    }
                } else if (key === "length") {
                    if (value < currentLength) {
                        for (let index = currentLength - 1; index >= value; index--) {
                            Reflect.deleteProperty(trapTarget, index);
                        }
                    }
                }
                return Reflect.set(trapTarget, key, value);
            }
        })
    }
}

let arr2 = new MyArray(3);
arr2[0] = 1
arr2[2] = 1
arr2[1] = 1
arr2[3] = 1
arr2.length = 1;
console.log(arr2);