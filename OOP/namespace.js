/**
 * 命名空间
 * 使用宽放大模式
 * 子命名空间
 */

var namespace = (function(namespace) {
    // 定义一个对象
    namespace.PersonInfo = function(obj) {
        obj = obj || {};
        this.name = obj.name || "";
        this.gender = obj.gender || "?";
    }
    namespace.PerosnInfoUtil = function() {
        return {
            show: function(p) {
                alert("姓名：" + p.name + " 性别：" + p.gender);
            }
        }
    }();
    return namespace;
})(window.namespace || {});

namespace.sub = (function(sub) {
    // 在namespace的基础上定义了一个子的命名空间
    // 在子命名空间中使用继承
    sub.Animal = function(name, color) {
        this.name = name;
        this.color = color;
    };
    sub.Animal.prototype.sleep = function() {
        console.log('sleepy');
    };
    sub.Cat = function(name, color) {
        sub.Animal.call(this, name, color);
    };
    sub.Cat.prototype = Object.create(sub.Animal.prototype);
    return sub;
})(window.namespace.sub || {});