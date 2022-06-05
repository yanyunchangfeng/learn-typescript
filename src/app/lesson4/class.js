class Animal {
    constructor(name) {
        this.name = name;
    }
    run() {
        return `${this.name} is running`;
    }
}
const snake = new Animal('lily');
// console.log(snake.run())
// snake.name = 'luck'
// console.log(snake.name)
// privte 修饰的属性 子类无法访问 protectd 修饰的属性子类可以访问
class Dog extends Animal {
    bark() {
        return `${this.name} is barking`;
    }
}
const xiaobao = new Dog('xiaoao');
class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    run() {
        return 'Meow,' + super.run();
    }
}
const maomao = new Cat('maomao');
console.log(maomao.run());
class Car {
    switchRadio() {
    }
}
class CellPhone {
    switchRadio() {
    }
    checkBatteryStatus() {
    }
}
export {};
//# sourceMappingURL=class.js.map