var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var An = /** @class */ (function () {
    function An(name) {
        this.name = name;
    }
    ;
    return An;
}());
var Animal = /** @class */ (function () {
    function Animal(sex) {
        this.sex = sex;
    }
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(sex) {
        var _this = _super.call(this, sex) || this;
        console.log(_this.sex);
        return _this;
    }
    return Cat;
}(Animal));
//抽象类 不能实例化只能子类实现
var Animals = /** @class */ (function () {
    function Animals(name) {
        this.name = name;
    }
    return Animals;
}());
var Cats = /** @class */ (function (_super) {
    __extends(Cats, _super);
    function Cats() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cats.prototype.sayHi = function () {
        console.log("Meow, My name is " + this.name);
    };
    return Cats;
}(Animals));
var cat = new Cat('Tom');
