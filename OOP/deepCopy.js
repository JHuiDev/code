function deepCopy(source, target) {

    for (let key in source) {
        if (source.hasOwnProperty(key)) {
            if (source[key].nodeType === 1) {
                //dom元素
                target[key] = source[key];
            } else if (source[key].constructor === Object && source[key].constructor === Array) {
                // 對象或數組
                let gather = source[key].constructor === Object ? {} : [];
                target[key] = deepCopy(source[key], gather);
            } else {
                target[key] = source[key];
            }
        }
    }
    return target;
}

let obj = [{
        name: 'xiaoming',
        aaa: function() {
            console.log(this.name);
        },
        date: new Date(),
    },
    {
        name: 'xiaoming',
        aaa: function() {
            console.log(name);
        },
        date: new Date(),
    }
]

let copy = deepCopy(obj, []);
let d = obj[0].date
console.log(d);
console.log(copy);