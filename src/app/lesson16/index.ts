// 内置类型 （转化类型）
// 1) 部分属性
interface Company {
  name: string;
  age: number;
  address: string;
}
interface Person {
  name?: string;
  age: number;
  address: string;
  company: Company;
}
// 将所有属性 变为可选属性
// type Partial<T> = { [K in keyof T]?: T[K] };
// type MyPerson = Partial<Person>;
// let myPerson: MyPerson = {
//   name: "cf",
//   age: 11,
//   address: "hz",
// };

//    取出类型中的key 进行依次循环
type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

let person: DeepPartial<Person> = {
  company: {
    address: "",
  },
};

// 实现一个深层次的嵌套树类型 children 可能就是可有可无
// 必填属性-? 把所有属性拿出来减去所有可选部分                     把可选的?减掉 所以写作 -?
// type Required<T> = { [K in keyof T]-?: T[K] };
// type MyPerson = Required<Person>;
type DeepRequired<T> = {
  [K in keyof T]-?: T[K] extends object ? DeepRequired<T[K]> : T[K];
};
type Readonly<T> = { readonly [K in keyof T]: T[K] };
type MyPerson = Readonly<Person>;

// Pick 精挑细选

// 抽离 多个选某几个 Pick 是从某个类型中挑选属性
type Pick<T, K extends keyof T> = { [X in K]: T[X] };
type PickPerson = Pick<Person, "name" | "age">;

// Record记录
// 对象中的key 必须得是 string | number | symbol
type xx = keyof any;
type Record<K extends keyof any, T> = {
  //   [key: string]: any;
  //   [key: number]: any;
  [P in K]: T;
};
let obj: Record<string | number, any> = { name: "cf", age: 29 };

export {};
