/**
 * js模块化写法，使用立即执行函数防止全集作用域的污染
 */
var module1 = (function(params) {
    var count = 0; //函数内部的私有变量
    var m1 = function(params) {
        console.log('m1');
    };
    var m2 = function(params) {
        console.log('m2');
    };
    // 将内部的函数返回
    return {
        m1: m1,
        m2: m2,
    }
}());

/**
 * 放大模式
 * 将一个模块拆分为多个模块
 * 为了实现模块的细化
 */

(function(mod) {
    mod.m3 = function() {
        console.log("m3");
    }
    return mod;
})(module1);

/**
 * 宽放大模式
 * 当js程序运行再服务器运行的时候有可能会出现网络加超时等问题，请求的js文件就可能会失败。
 * 可能导致只加载了一部分的函数模块,为了避免错位的发生，我们可以对传入的函数进行判断
 */
(function(mod) {
    mod.m3 = function() {
        console.log("m3");
    }
    return mod;
}(window.module1 || {})); //尽管函数对应的文件没有请求成功，传入一个空的对象，一面直接报错程序无法运行