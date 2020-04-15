//闭包中的循环问题
function foo1() {
    var arr = [];
    for (var i = 0; i < 10; i++) {
        arr[i] = function() {
            return i;
        }
    }
    return arr;
}

// 这时因为foo作用域内的for在foo调用的时候就已经执行完毕
var bar1 = foo1();
// 之后我们在调用闭包，foo内部缓存的是i的最中值 10
console.log(bar1[0]()); //10
console.log(bar1[1]()); //10

//我们可以再嵌套一个闭包，用来缓存每次i的值，通过参数的方式将i传到内部n
function foo2() {
    var arr = [];
    for (var i = 0; i < 10; i++) {
        arr[i] = (function(n) {
            return function() {
                return n;
            }
        })(i);
    }
    return arr;
}

var bar2 = foo2();
console.log(bar2[0]());
console.log(bar2[1]());

//第三种解决翻案，使用ES6的块级作用域
//变成块级作用域之后拿到的就是对应i的值，不存在其他的i值
function foo3() {
    var arr = [];
    for (let i = 0; i < 10; i++) {
        arr[i] = function() {
            return i;
        }
    }
    return arr;
}

var bar3 = foo3();
console.log(bar3[0]());
console.log(bar3[1]());