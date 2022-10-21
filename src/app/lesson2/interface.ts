// 对对象的形状(shape)进行描述
// 对类(class)进行抽象
// DuckTyping（鸭子类型） 动态编程语言的一种对象推断策略 它更关注的是对象如何被使用 而不是对象的类型本身

interface Person {
  readonly id: number;
  name: string;
  age?: number;
}

let cf: Person = {
  id: 11,
  name: "dd",
  age: 12,
};

// 接口 描述对象的形状， 根据接口提供一些新的类 为别人使用

// 计算fullname = firstName + lastName

// 接口可以被实现 被继承 type 不能
// type可以写联合类型

// 1) 描述对象

// 能用接口用接口，不能用换成type

// interface IFullName {
//   firstName: string;
//   lastName: string;
// }
// // interface 可以描述 （属性 方法 类）

// const fullName = (obj: IFullName): IFullName => {
//   return obj;
// };

// 2) 描述函数
interface IFullName {
  (firstName: string, lastName: string): string;
}

type FullName = (firstName: string, lastName: string) => string;

const fullName: FullName = (firstName, lastName): string => {
  return firstName + lastName;
};

// 混合类型 计数器  一个函数返回一个函数，返回的函数有属性
interface ICount {
  (): number;
  count: number;
}
const fn: ICount = () => {
  return ++fn.count;
};
fn.count = 0;
console.log(fn());

// 接口特性

interface IVegetables {
  taste: string;
  color: string;
}
// 1)如果我定义的值比接口中的多可以采用 类型断言 直接断言成对应的接口

// const tomato: IVegetables = {
//   size: 10,
//   taste: "sour",
//   color: "red",
// } as IVegetables;

// interface IVegetables {  // 多个同名接口会进行合并操作
//   size: number;
// }

// interface Itomato extends IVegetables {
//   size: number;
// }

// const tomato: Itomato = {
//   size: 10,
//   taste: "sour",
//   color: "red",
// };

// console.log(tomato);

interface IVegetables {
  // 可选属性 仅读属性
  taste: string;
  color: string;
  [xxx: string]: any; // 限制死的 其他的随意 任意接口
  // readonly size?:number
  type?: string;
}
const tomato: IVegetables = {
  type: "fruit",
  color: "red",
  taste: "sour",
  1: 1,
};
// 如果接口中 [xxx:index] 可索引接口
interface IArr {
  [key: number]: any;
}
let arr: IArr = [1, {}, "a", "v"];
export {};
