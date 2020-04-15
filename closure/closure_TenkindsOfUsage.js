// 1. 返回值
// var fn = function() {
//     var name = "ying";
//     return function() {
//         return name;
//     }
// }
// var fnc = fn();
// console.log(fnc);
// 2.函数赋值

//内部闭包赋值给外部变量调用
// var fn2;
// (function fn() {
//     let a = 2;
//     fn2 = function() {
//         return a;
//     }
//     return fn2;
// })();
// console.log(fn2())

// 3.函数参数
//函数作为参数
// var fn2 = function(f) {
//     console.log(f());
// }

// function fn() {
//     var name = "xiaoming";
//     var a = function() {
//         return name;
//     }
//     fn2(a);
// }
// fn();
// 4.IIFE
// 立即执行函数可以简化闭包函数的执行
// var fn2 = function(f) {
//     console.log(f());
// };
// 如果立即执行函数前面的语句不写封号，会导致js引擎无法解析是否为一个括号表达式。我们可以在立即执行和函数前面加一个运算符.
// 以保证立即执行函数不会因为分号引发错误
// !(function fn() {
//     var name = "xiaoming";
//     var a = function() {
//         return name;
//     }
//     fn2(a);
// })()

// 5.循环赋值
// function fn() {
//     var arr = [];
//     for (var i = 0; i < 10; i++) {
//         (function(n) {
//             arr[n] = function() {
//                 return n;
//             }
//         })(i)
//     }
//     return arr;
// }

// function fn() {
//     var arr = [];
//     for (var i = 0; i < 10; i++) {
//         arr[i] = (function(n) {
//             return function() {
//                 return n;
//             }
//         })(i)
//     }
//     return arr;
// }

// let bar = fn();
// console.log(bar[2]());
// 6.getter setter
//防止变量污染全局
// (function fn() {
//     name = 'xiaoming';

//     getter = function() {
//         return name;
//     }

//     setter = function(n) {
//         if (typeof n === "string")
//             name = n
//     }
// })();
// console.log(getter());
// setter("daming");
// console.log(getter());

// 7.迭代器
//计数器
// var count = (function() {
//     var num = 0;
//     return function() {
//         return num++;
//     }
// })();
// console.log(count());
// console.log(count());
// //迭代器

// var next = (function() {
//     var index = 0
//     return function(arr) {
//         return arr[index + 1] ? arr[index++] : index = 0;
//     }
// }());
// var arr = ['xiaoming', 'daming', 'zhongming']
// console.log(next(arr));
// console.log(next(arr));
// console.log(next(arr));
// console.log(next(arr));

// 9.区分首次
// 第一次插入返回true，第二次插入一个相同的值返回一个false，插入失败
// var firstLoad = (function() {
//     var arr = [];
//     return function(id) {
//         if (arr.indexOf(id) >= 0) {
//             return false;
//         } else {
//             arr.push(id);
//             return true;
//         }

//     }
// })();

// console.log(firstLoad(10));
// console.log(firstLoad(10));
// console.log(firstLoad(20));
// 8.缓存机制
//使用闭包缓存一个对象将之前累加过的值缓存起来
var mute = (function() {
    var cache = {};
    // 求和函数
    var calculate = function() {
        var sum = 0;
        for (let i = 0; i < arguments.length; i++) {
            sum += arguments[i];
        }
        return sum
    }
    return function() {
        var args = Array.prototype.join.call(arguments, ',');
        console.log(args);
        console.log(cache);
        if (args in cache) {
            return cache[args];
        }
        // 求和函数需要传入参数
        console.log(cache);
        return cache[args] = calculate.apply(null, arguments);
    }
})()
console.log(mute(1, 24, 1, 351, 2, 3));
console.log(mute(1, 24, 2, 351, 1, 3));
console.log(mute(1, 24, 1, 351, 2, 3, 312));
console.log(mute(1, 24, 1, 351, 2, 3, 312));
// 10. img对象图片上报
// 防止低版本浏览器中函数调用完之后就销毁，而产生图片上报数据不完整
var report = (function() {
    var imgs = [];
    return function(src) {
        img = new Image();
        imgs.push(img);
        img.src = src;
    }
})();
report('http://xx.com/XXX');