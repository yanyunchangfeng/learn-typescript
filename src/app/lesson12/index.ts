// 装饰器 前端中使用stage-3
// 扩展属性和方法

function addSay(target: Function) {
  // 修饰类本身当前参数就是类
  target.prototype.say = function () {
    console.log("say");
  };
}
function toUpperCase(target: any, key: string) {
  //target 原型 key 指的是属性

  let value = target[key];
  Object.defineProperty(target, key, {
    get() {
      return value.toUpperCase();
    },
    set(newValue) {
      value = newValue;
    },
  });
}
function double(num: number) {
  return function (target: any, key: string) {
    //target 类的原型 key 指的是属性
    let value = target[key];
    Object.defineProperty(target, key, {
      get() {
        return value * num;
      },
      set(newValue) {
        value = newValue;
      },
    });
  };
}

function Enum(target: any, key: string, descriptor: PropertyDescriptor) {
  // descriptor value configurable  writable enumerable
  descriptor.enumerable = false;
}
function params() {
  return function (target: any, key: string, index: number) {
    //               原型         getName       1
    console.log(target, key, index);
  };
}
@addSay // 语法糖 只是为了简单一点 ()=>{}
class Person {
  say!: Function;
  @toUpperCase
  name: string = "zhufeng"; // 直接走set方法
  @double(3) // 装饰器 就是一个函数
  static age: number = 10; // 修饰类静态属性时 不会走set方法
  @Enum
  getName(a: string, @params() xx: string) {}
}
let person = new Person();
console.log(person.name);
console.log(Person.age);
person.say();

// 装饰器只能围绕类来使用 本质上就是一个函数 将类中的属性、类中的方法、函数的参数进行修饰
export {};
