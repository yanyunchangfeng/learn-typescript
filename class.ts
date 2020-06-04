class Animal {
    readonly name:string;
    constructor(name: string){
        this.name = name;
    }
    run(){
        return `${this.name} is running`
    }
}
const snake = new Animal('lily')
// console.log(snake.run())
// snake.name = 'luck'
// console.log(snake.name)
// privte 修饰的属性 子类无法访问 protectd 修饰的属性子类可以访问
class Dog extends Animal {
    bark(){
        return `${this.name} is barking`
    }
}
const xiaobao  = new Dog('xiaoao')

class Cat extends Animal {
   constructor(name){
       super(name)
   }
   run(){
       return 'Meow,'   +super.run();
   }
}
const maomao = new Cat('maomao')

console.log(maomao.run())
// 接口抽象类的属性和方法 有的时候 很多不同的类会有一些相同的特性 使用子类继承父类的方法很难完成 这时候
// 我们可以把这些特性提取成接口 ，然后用implements 的关键字来实现，这样就大大提高了面向对象的灵活性

interface Radio {
    switchRadio():void;
}
interface Battery {
    checkBatteryStatus();
}
// 接口之间的继承
interface RadioWithBattery extends Radio{
    checkBatteryStatus()
}

class Car implements Radio{
    switchRadio(){

    }
}
class CellPhone implements RadioWithBattery{
    switchRadio(){

    }
    checkBatteryStatus(){

    }
}

// 这就是鸭子类型的精髓 只要它走路像鸭子 叫起来像鸭子 我就不管你是什么东西 我可以用它来约束各种概念上毫不相关的内容