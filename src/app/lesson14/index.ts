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
type ForEachFn<T> = (item: T, index: number) => void;
function forEach<T>(arr: T[], cb: ForEachFn<T>) {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i);
  }
}
forEach<number>([1, 2, 3, 4, 5], function (item) {
  console.log(item);
});

export {};
