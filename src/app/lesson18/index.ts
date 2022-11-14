// unknown 是any的安全类型

// unknown 类型 可以被任何类型赋值
let unknown: any;
unknown = { name: "zf" };

//unknown 不能通过属性取值 不能调用方法
// ！ 是非空校验

unknown.name;

// 类型判断，没有传入类型时，默认会推导出unknown类型

// unknown 和其他类型的联合类型 都是unknown

// unknown 和其他类型做交叉 获得到的永远是其他类型

type t1 = unknown & number;

// unknown, never 是unknown的子类型
type t2 = never extends unknown ? true : false;

// unknown 不能使用keyof，否则获取到的值是never
type t3 = keyof unknown; // never

// 有一个组件它接口 age、name、company 三个属性，都是可选的，但是如果传入了name 那就必须要传入age
interface Test1 {
  age?: string;
  name?: string;
  company?: string;
}

interface Test2 {
  age: string;
  name: string;
  company?: string;
}

type NewType<T> = T extends { name: string } ? Test2 : Test1;

let person = { name: "cf", age: "29" };
function getFn<T>(v: NewType<T>) {}
getFn<typeof person>(person);

export {};
