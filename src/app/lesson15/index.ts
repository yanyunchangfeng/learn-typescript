// 条件类型  js三元表达式

// ts中很多内置类型 HTMLElement ....

interface Bird {
  name1: string;
}
interface Sky {
  sky: string;
}
interface Fish {
  name2: string;
}
interface Swimming {
  swim: string;
}
// 泛型约束 约束这个人是否满足他的特性  满足就为true 我要的你都有
type MyType<T> = T extends Bird ? Sky : Swimming; // 三元表达式

// 条件的分发 Sky | Swimming  只有"联合"类型会进行分发操作，最终取联合类型
type x = MyType<Bird | Fish>; // 并集
// 等价于u
type m = MyType<Bird>;
type n = MyType<Fish>;
type u = m | n;

//  o Sky
type o = MyType<Bird & Fish>; // 因为交叉之后既有Bird又有Fish 所以满足Bird 交叉的部分 交集

let obj = { name1: "xx", name2: "yy" };
type xx = typeof obj;
type x1 = MyType<xx>;

// 交叉类型

interface Person1 {
  handsome: string;
}
interface Person2 {
  high: string;
}
type Person3 = Person1 & Person2;
let p1!: Person1;
let p2!: Person2;
let p3!: Person3;
p1 = p3;
p2 = p3;

// 内置类型 (现在说的都是基于条件类型)
// Exclude 类型的排除
type Exclude<T, U> = T extends U ? never : T;

type xxx = string | number | never; // xxx string | number

type MyExclude = Exclude<string | number | boolean, boolean>;

// Extract 抽离类型
type Extract<T, U> = T extends U ? T : never;
type xxxx = never | never | boolean; // xxxx boolean
type MyExtract = Extract<string | number | boolean, boolean | number>;

// 非null | undefined检测
type NonNullable<T> = T extends null | undefined ? never : T;

type MyNonNullable = NonNullable<string | number | null | boolean>;

// 类型推导 infer
// 1. 查看函数返回值的类型

function getUser(x: string, y: string) {
  return { name: "cf", age: 29 };
}
// 不执行函数 取类型 infer 写在哪里就推导哪里的类型
type t = typeof getUser;
type ReturnType<T extends (...args: any[]) => any> = T extends (
  ...args: any[]
) => infer R
  ? R
  : never;
type MyReturnType = ReturnType<t>;
//                   我传入的类型需要是一个函数             如果是函数  将参数类型推导出来塞入到变量P中  返回P
// type Parameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P: never;
type MyParamsType = Parameters<typeof getUser>;

// 取构造函数类型
class Animal {
  constructor(name: string, age: number) {}
}
let A: typeof Animal = Animal;
// type ConstructorParameters<T extends { new (...args: any[]): any }> =
//   T extends { new (...args: infer C): any } ? C : any;
// Animal 可以描述实例的类型
type MyConstructor = ConstructorParameters<typeof Animal>;

// 取实例类型
type InstanceType<T extends { new (...args: any[]): any }> = T extends {
  new (...args: any[]): infer R;
}
  ? R
  : any;
type MyInstance = InstanceType<typeof Animal>;

export {};
