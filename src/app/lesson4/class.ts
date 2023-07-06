class Animal {
  readonly name: string;
  constructor(name: string) {
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
  constructor(name: string) {
    super(name);
  }
  run() {
    return 'Meow,' + super.run();
  }
}
const maomao = new Cat('maomao');

console.log(maomao.run());
// 接口抽象类的属性和方法 有的时候 很多不同的类会有一些相同的特性 使用子类继承父类的方法很难完成 这时候
// 我们可以把这些特性提取成接口 ，然后用implements 的关键字来实现，这样就大大提高了面向对象的灵活性

interface Radio {
  switchRadio(): void;
}
interface Battery {
  checkBatteryStatus(): void;
}
// 接口之间的继承
interface RadioWithBattery extends Radio {
  checkBatteryStatus(): void;
}

class Car implements Radio {
  switchRadio() {}
}
class CellPhone implements RadioWithBattery {
  switchRadio() {}
  checkBatteryStatus() {}
}

// 这就是鸭子类型的精髓 只要它走路像鸭子 叫起来像鸭子 我就不管你是什么东西 我可以用它来约束各种概念上毫不相关的内容

// 类 es6 类来调用的静态属性 私有的实例属性  共享的原型属性
// as 断言成xxx
// ! 非空断言
// ? 链判断运算符 有值取值 没值返回undefined

class Pointer {
  public x!: number; // 表示实例上有这个属性
  public y!: number;
  constructor(x: number, y?: number, ...args: number[]) {
    // 这些参数 函数中的使用方式 这里都可以使用
    this.x = x;
    this.y = y as number;
  }
}

let pointer = new Pointer(1, 2, 3, 4, 5, 6);

// （public private protected）readonly 类的修饰符
// public 表示父类本身 子类 外面 都可以获取这个属性
// protected 受保护的 父类本身 子类 能访问到这个属性
// private 只有自己能访问到

// 如果constructor 被标识成了private 或者protected 则此类不能被new，
// 被标识成了private 不能被子类继承

class Animals {
  public name!: string;
  public readonly age!: number; //readonly 表示此属性不能被修改
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  // 静态属性和静态方法 通过类来调用的就是静态的（是可以被继承的）
  static type = '动物';
  static getName(): string {
    return '动物类';
  }
  say(): void {
    console.log('say');
  }
}

class CatM extends Animals {
  address = '';
  constructor(name: string, age: number, address: string) {
    super(name, age); //Animals.call
    this.address = address;
    // readonly 表示初始化后不能再被修改了
  }
  static getName(): string {
    // 子类重写父类的方法
    console.log(super.getName()); //静态方法中的super指代的是父类
    return '猫';
  }
  say(): void {
    // 原型中的super指代的是 父类的原型
    super.say(); // Animal.prototype
    console.log('cat say');
  }
  private _eat: string = '';
  // 属性访问器,来访问私有属性
  get eat() {
    // Object.defineProperty
    // 原型属性
    return this._eat; // 谁调用此方法this就是谁
  }
  set eat(newValue) {
    this._eat = newValue;
  }
}
let catM = new CatM('缅因猫', 10, '杭州');
console.log(CatM.getName());
catM.eat = 'hello';
console.log(catM.eat);

// 原型 实例 静态 super 属性访问器
export {};
