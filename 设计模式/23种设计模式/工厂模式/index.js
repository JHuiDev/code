class Product {
    constructor(name) {
        this.name = name;
    }
    init() {
        console.log('init');
    }
    fnc() {
        console.log('fnc');
    }
}
class Creator {
    create(name) {
        return new Product(name);
    }
}

let creator = new Creator();
let p = creator.create('daming');
p.init();
p.fnc();


class jQuery {
    constructor(selector) {
        let slice = Array.prototype.slice;
        let dom = slice.call(document.querySelectorAll(selector));
        let len = dom ? dom.length : 0;
        for (let i = 0; i < len; i++) {
            this[i] = dom[i];
        }
        this.length = len;
        this.selector = selector || '';
    }
    html(txt) {
        if (!txt) {
            return this[0].innerHTML;
        }
        for (let i = 0; i < this.length; i++) {
            this[i].innerHTML = txt;
        }
        return this;
    }
    append() {

    }
}

window.$ = function(selector) {
        return new jQuery(selector);
    }
    // $('div').html('xxx').html('aaa')
console.log($('div'));