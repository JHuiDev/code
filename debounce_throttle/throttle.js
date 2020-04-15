/**
 * 节流
 * 如果你持续触发事件，那么隔一段事件，只执行一次事件
 * 通过时间戳的定时器实现
 * 应用场景：
 *  1.DOM元素的拖拽
 *  2.射击游戏
 *  3.计算鼠标移动的距离
 *  4.监听scorll滚动事件
 * @param {Function} func 
 * @param {Number} wait 
 * @param {Object} options leading开始时否立即执行，trailing离开时是否执行最后一次 
 * 参考underscore.js源码
 */
function thorttle(func, wait, options = { leading: true, trailing: false }) {
    let context, args, timeout, oldTime = 0,
        nowTime, resoult;
    // 定时器作用时 时间戳不可执行，时间戳作用时定时器不可执行
    let later = function() {
        oldTime = nowTime;
        timeout = null;
        func.apply(context, args);
    };
    let thorttled = function() {
        context = this;
        args = arguments;
        nowTime = new Date().valueOf();
        if (options.leading === false) oldTime = nowTime;
        // 使用时间戳的时间差来做到立即执行函数
        if (nowTime - oldTime > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            resoult = func.apply(context, args);
            oldTime = nowTime;
        } else if (!timeout && options.trailing !== false) {
            // 使用定时器做到离开后再执行一次函数
            timeout = setTimeout(later, wait);
        }
        return resoult;
    }
    return thorttled;
}