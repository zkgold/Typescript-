class An {
    public name;
    private age;   
    public constructor(name) {
        this.name = name;
    };
}
class Animal {
    protected sex;
    public constructor(sex) {
        this.sex = sex;
    }
}
class Cat extends Animal {
	constructor(sex){
		super(sex);
		console.log(this.sex);
	}
}

//抽象类 不能实例化只能子类实现
abstract class Animals {
    public name;
    public constructor(name) {
        this.name = name;
    }
    public abstract sayHi();
}

class Cats extends Animals {
    public sayHi() {
        console.log(`Meow, My name is ${this.name}`);
    }
}

let cat = new Cat('Tom');