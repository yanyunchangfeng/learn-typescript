// function echo(arg: any):any {
//     return arg
// }
// const result:string = echo(123)
// 有两个问题 传入和返回的类型没法做到统一还是丧失了类型 第二个 是定义了string 返回的是any string 属于any下的一个类型
// 泛型是指在定义函数接口或类时， 我们不预先指定具体的类型 而是在使用的时候再指定类型的一种特征

function echo<T>(arg: T): T {
  return arg;
}

// const str:string = 'str';
const result = echo("str");
// const result:string = echo(true) 报错
// const result = echo(true)
// const result = echo(123)

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}
const result2 = swap(["string", 123]);
result2[1].charCodeAt(0);
// 泛型就像一个占位符 或者一个变量 在使用的时候我们可以把定义的类型像参数一样传入 ，然后它可以原封不变的给我们输出

// 约束泛型
function echoWithArr<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}

const arrs = echoWithArr([1, 2, 3]);
interface IWithLength {
  length: number;
}
function echoWithLength<T extends IWithLength>(arg: T): T {
  console.log(arg.length);
  return arg;
}
const str = echoWithLength("str");
const obj = echoWithLength({ length: 10, with: 10 });
const arr2 = echoWithLength([1, 2, 3]);
// const number = echoWithLength(12) 报错
//这就是活生生鸭子类型出现了 只要你叫起来像鸭子 ，只要你有length属性 ，那么就符合这个约束，就没有问题，不管你是什么类型都可以

// 泛型约束类

class Queue<T> {
  private data: T[] = [];
  push(item: T) {
    return this.data.push(item);
  }
  pop(): T {
    return this.data.shift()!;
  }
}

const queue = new Queue<number>();
queue.push(1);
const queue2 = new Queue<string>();
queue2.push("str");
console.log(queue2.pop().length);

interface KeyPair<T, U> {
  key: T;
  value: U;
}

let kp1: KeyPair<number, string> = { key: 123, value: "str" };
let kp2: KeyPair<string, number> = { key: "test", value: 123 };

let arr: number[] = [1, 2, 3];

let arrTwo: Array<number> = [1, 2, 3];

interface IPlus<T> {
  (a: T, b: T): T;
}

function plus(a: number, b: number): number {
  return a + b;
}
function connect(a: string, b: string): string {
  return a + b;
}

const a: IPlus<number> = plus;
const b: IPlus<string> = connect;

// 查询对象中某一个属性的值  希望属性存在对象中 用 keyof 关键字约束
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
let x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, "d");
// getProperty(x,'m')  //报错

function create<T>(c: { new (): T }): T {
  // 构造器类型
  return new c();
}
class BeeKeeper {
  hasMask: boolean;
}
class LionKeeper {
  nametgg: string;
}
class Animals {
  numLengs: number;
}
class Bee extends Animals {
  keeper: BeeKeeper;
}

class Lion extends Animals {
  keeper: LionKeeper;
}

function createInstance<T extends Animals>(c: new () => T): T {
  return new c();
}
createInstance(Lion).keeper.nametgg;
createInstance(Bee).keeper.hasMask;

function identity<T>(arg: T): T {
  return arg;
}
let myIentity: <T>(arg: T) => T = identity; // let myIentity :{<T>(arg:T):T} = identity  还可以使用带有调用签名的对象字面量的方式来定义类型
//改造 使用接口
interface GenericIdentityFn {
  <T>(arg: T): T;
}
let mynewIentity: GenericIdentityFn = identity;
//继续改造 把类型提出来
interface GenericIdentityFnT<T> {
  (arg: T): T;
}
let mynewIentityT: GenericIdentityFnT<number> = identity;
