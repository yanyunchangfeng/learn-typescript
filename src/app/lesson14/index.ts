// ts 中的兼容性 一个类型能否被赋予给另一个类型

// 1.基本数据类型的兼容性
let str!: string;
let temp: string | number;

temp = str; // 我们可以把小类型赋予给更多类型的
// str = temp; // 从安全性来考虑

// ts 叫鸭子类型检测 结构 只要长得像就可以

interface MyNum {
  toString(): string;
}

let str2: MyNum = "xxxx"; // 我要的你有就可以了
let myNum!: MyNum; // 我要的时有toString方法的 你有就可以

// let str3: string = myNum;

// 2.接口类型的兼容性
interface Animal {
  name: string;
  age: number;
}
interface Person {
  name: string;
  age: number;
  address: string;
}
let animal!: Animal;
let person!: Person;
animal = person; // 我要的你有就可以了

// 函数 函数的参数 函数的返回值
// 函数的兼容性 参数要求，赋值的函数的参数要小于等于被赋值的函数

let sum1 = (a: string, b: string) => {};
let sum2 = (a: string) => {};

sum1 = sum2;

// 自己实现一个forEach
type ForEachFn<T> = (item: T, index: number) => void; // <T>表示声明了一个变量叫T , item:T 表示使用了这个变量
function forEach<T>(arr: T[], cb: ForEachFn<T>) {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i);
  }
}
// 能使用接口就用接口,接口用不了用别名 ，没有继承没有扩展就直接用type
forEach<number>([1, 2, 3, 4, 5], function (item) {
  console.log(item);
});
interface A {}
interface B extends A {} // 继承只能用接口

type a = string | number; // 联合类型只能用别名

// 函数的返回值 (遵循基本类型的特征,遵循接口特性)

type sum1 = () => string | number;
type sum2 = () => string;
let s1!: sum1;
let s2!: sum2;

s1 = s2;

// 1. 基本类型 可以小范围的赋予给大范围的
// 2. 接口类型可以把多的赋予给少的
// 3. 函数的兼容性 （函数的参数 函数的返回值
//     1）可以把参数少的函数赋予给参数多的函数
//     2) 函数的返回值遵循（1，2，3）

// 协变（函数的返回值 可以传递儿子自己）与逆变（函数的参数可以逆变 可以传递父亲和自己）
// 参数是双向协变 就是可以传儿子 也可以传父亲 (默认在严格模式下不支持)
class Parent {
  address: string = "杭州翠苑";
}
class Child extends Parent {
  money: number = 1000;
}
class Grandson extends Child {
  // 没写constructor 默认调了super
  name: string = "CF";
}

type MyFn = (person: Child) => Child;

function getFn(cb: MyFn) {}

getFn((person: Parent) => new Child()); // 传爸爸
getFn((person: Child) => new Child()); // 传自己

getFn((person: Parent) => new Grandson()); // 传爸爸
// getFn((person: Grandson) => new Grandson()); // 严格模式下支持
export {};
