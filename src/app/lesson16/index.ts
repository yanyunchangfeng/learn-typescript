// 内置类型 （转化类型）
// 1) 部分属性
interface Company {
  name: string;
  age?: number;
  address: string;
}
interface Person {
  name?: string;
  age: number;
  address: string;
  company: Company;
}
// 将所有属性 变为可选属性
type Partial<T> = { [K in keyof T]?: T[K] };
type MyPartialPerson = Partial<Person>;
let myPartialPerson: MyPartialPerson = {
  name: 'cf',
  age: 11,
  address: 'hz'
};

//    取出类型中的key 进行依次循环
type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};
type DeepPartialPerson = DeepPartial<Person>;
let person: DeepPartialPerson = {
  company: {
    address: ''
  }
};

// 实现一个深层次的嵌套树类型 children 可能就是可有可无
// 必填属性-? 把所有属性拿出来减去所有可选部分                     把可选的?减掉 所以写作 -?
type Required<T> = { [K in keyof T]-?: T[K] };
type MyRequiredPerson = Required<Person>;
let myRequiredPerson: MyRequiredPerson = {
  name: 'cf', // name 变为必填项
  age: 11,
  address: 'hz',
  company: {
    address: '',
    name: 'dd'
    // age 仍然是可选项
  }
};

type DeepRequired<T> = {
  [K in keyof T]-?: T[K] extends object ? DeepRequired<T[K]> : T[K];
};

type MyDeepRequiredPerson = DeepRequired<Person>;

let myDeepRequiredPerson: MyDeepRequiredPerson = {
  name: 'cf',
  age: 33,
  address: '333',
  company: {
    name: '',
    address: '',
    age: 11 // 此处age变为必填项
  }
};

type Readonly<T> = { readonly [K in keyof T]: T[K] };
type MyReadonlyPerson = Readonly<Person>;

let myReadonlyPerson: MyReadonlyPerson = {
  age: 11,
  name: 'yc',
  address: 'hz',
  company: {
    age: 18,
    address: 'xh',
    name: 'cf'
  }
};
myReadonlyPerson.company.address = 'hhh'; // company里层仍然可以修改

type MyDeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? MyDeepReadonly<T[K]> : T[K];
};
type MyDeepReadonlyPerson = MyDeepReadonly<Person>;
let myDeepReadonlyPerson: MyDeepReadonlyPerson = {
  age: 11,
  name: 'yc',
  address: 'hz',
  company: {
    address: 'xh',
    age: 13,
    name: 'cf'
  }
};
// myDeepReadonlyPerson.company.address = "hh"; // 无法为“address”赋值，因为它是只读属性

// Pick 精挑细选

// 抽离 多个选某几个 Pick 是从某个类型中挑选属性
type Pick<T, K extends keyof T> = { [X in K]: T[X] };
type MyPickPerson = Pick<Person, 'name' | 'age'>;

let myPickPerson: MyPickPerson = {
  age: 22,
  name: 'd'
};

type Head<T extends string> = T extends `${infer First}.${string}` ? First : T;

type Tail<T extends string> = T extends `${string}.${infer Rest}` ? Rest : never;

type a = Head<'company.age'>; // company
type b = Extract<'company.age', `${'company'}.${string}`>; // company.age
type e = Tail<Extract<'company.age', `${'company'}.${string}`>>; // age
type DeepPick<T, K extends string> = T extends object
  ? {
      [P in Head<K> & keyof T]: T[P] extends readonly unknown[]
        ? DeepPick<T[P][number], Tail<Extract<K, `${P}.${string}`>>>[]
        : DeepPick<T[P], Tail<Extract<K, `${P}.${string}`>>>;
    }
  : T;

type MyDeepPickPerson = DeepPick<Person, 'name' | 'company.age'>;
let myDeepPickPerson: MyDeepPickPerson = {
  name: 'cf',
  company: {
    age: 13
  }
};
interface TestBook {
  id: string;
  name: string;
}

interface TestUser {
  id: string;
  email: string;
  books: TestBook[];
  book: TestBook;
}
type d = TestUser['books'][0]; //TestBook
type c = Tail<Extract<'books.name', `${'books'}.${string}`>>; // name
type MyDeepArrayPickPerson = DeepPick<TestUser, 'books.name'>;

let myArrayPickPerson: MyDeepArrayPickPerson = {
  books: [{ name: '' }]
};

// Record记录
// 对象中的key 必须得是 string | number | symbol
type xx = keyof any;
type Record<K extends keyof any, T> = {
  //   [key: string]: any;
  //   [key: number]: any;
  [P in K]: T;
};
let obj: Record<string | number, any> = { name: 'cf', age: 11 };
let arr: Record<number, any> = ['2', 55];
// map 方法
// name,age = T
// zf 11 = k
// U 函数的返回值
// 定义泛型
type Fn<K, T, U> = (item: K, key: T) => U;
function map<T extends keyof any, K, U>(
  obj: Record<T, K>, // 对象参数
  cb: Fn<K, T, U> // 回调函数参数
): Record<T, U> {
  //返回值类型
  let result = {} as Record<T, U>;
  for (let key in obj) {
    result[key] = cb(obj[key], key);
  }
  return result;
}
// extends keyof any = string | number | symbol
let r = map({ name: 'cf', age: 29 }, (item, key) => {
  return 123;
});

// Omit 忽略属性 我希望有三个属性都是必填的，但是我希望把某个属性改成选填的
interface IPerson {
  name: string;
  age: number;
  company: Company;
}
type iPerson = Omit<IPerson, 'company'> & { company?: Company };
let p: iPerson = {
  name: 'cf',
  age: 11
};

type MyExtract = Pick<IPerson, Exclude<keyof IPerson, 'company'>>; // 排除company
type Omit<K, T extends keyof any> = Pick<K, Exclude<keyof K, T>>;

// Exclude Extract Required Readonly Partial Omit
// Record ReturnType instanceType ParametersType

export {};
