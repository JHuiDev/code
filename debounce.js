/**
 * 防抖
 * 事件结束后的规定时间后执行事件响应程序。
 * 应用场景:
 *  1.scroll事件滚动
 *  2.搜索输入查询
 *  3.表单验证
 *  4.按钮提交事件
 *  5.浏览器窗口缩放
 *  6.鼠标移动
 * @param {Function} func 需要处理的函数 
 * @param {Number} wait 事件发送后等待多时秒执行
 * @param {Boolean} immediate 是否立即执行
 * 参考underscore.js 源码
 */

function debounce(func, wait, immediate = false) {
    var timeout, result;
    let decounced = function(event) {
        // 这里可以使用传入event的形式，也可以使用arguments获取参数的方式给doSomeThing传递event对象
        event = event || window.event;
        clearTimeout(timeout);
        if (immediate) {
            //立即执行
            // 当用户移动鼠标的时候timeout有值取反之后为false,当用户停止事件响应wiat事件后timeout改为null，取反为真.
            let callNow = !timeout;
            timeout = setTimeout(() => {
                callNow = null;
            }, wait);
            if (callNow) result = func.apply(this, arguments);
        } else {
            //事件结束后执行

            timeout = setTimeout(() => {
                // 改变函数内部的this指向;
                func.apply(this, arguments);
            }, wait);
        }
        return result;
    };
    decounced.cancel = function() {
        clearTimeout(timeout);
        //防止闭包内存泄漏将timeout的值赋值为null
        timeout = null;
    }
    return decounced;
}