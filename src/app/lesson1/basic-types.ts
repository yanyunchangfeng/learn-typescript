let isDone: boolean = true;
let age: number = 22;
let binaryNumber: number = 0b1111;
let firstName: string = "changfeng";
let message: string = `hello ${firstName} age is ${age}`;
let u: undefined = undefined;
let n: null = null;
// let num: number = undefined;
// undefined 和null 是所有类型的子类型

let notSure: any = 4;
notSure = "maybe it is a string";
notSure = true;
notSure.myName;
// notSure.getName();

//联合类型 可以看作并集 既能使用数字 又能使用字符串
let numberOrString: number | string;
numberOrString = 123;
numberOrString = "yanyun";

let arrOfNumbers: (number | string)[] = [1, 9, 9, 3, "333"];
let arrOfNumbers2: Array<number | string> = [1, 9, 9, 3, "yanger"];
arrOfNumbers.push(9);

function test() {
  console.log(arguments);
  // let arr:any []  = arguments;  Type 'IArguments' is missing the following properties from type 'any[]':
}
//元组类型tuple 数量和类型已知的数组  表示长度和个数都（内容存放类型）都限制好了

let user: [string, number] = ["changfeng", 28];
//可以向元组中添加内容，不能通过索引添加属性
//只能放入元组汇总已经声明过的类型
user[0] = "yanyunchangfeng";
user.push("yanger");
console.log(user, "user");

// user = ['yanyun' , 44, true]

// never 代表不会出现的值
// 1.作为不会返回的函数的返回值 类型

function error(message: string): never {
  throw new Error("报错了");
  console.log("ok");
}
function loop(): never {
  while (true) {}
  console.log("ok");
}
function fn(x: number | string) {
  if (typeof x === "number") {
    console.log(x);
  } else if (typeof x === "string") {
    console.log(x);
  } else {
    console.log(x); //never
  }
}
// error('33')
// loop()

// void 代表没有任何类型
// 函数没有返回值，那么就是void类型
// strictNullChecks=false null 赋值 void 如果strictNullChecks=true，不行了
function greeting(): void {
  // return null
}
// void never
// void 可以被赋值为null undefined never不能包含任何类型
// 返回类型为void的函数能正常执行，但是返回never的函数无法正常执行
// Symbol symbol 表示独一无二的值
const s1: symbol = Symbol("key");
const s2 = Symbol("key");
console.log(s1 == s2);

// BigInt
const max = BigInt(Number.MAX_SAFE_INTEGER);
// console.log(max +1 === max +2) // 报错
console.log(max + BigInt(1) === max + BigInt(2));
console.log(max + 1n === max + 2n);
// JS 里面的类型Number BigInt ts里的类型 number bigint
let foo: number;
let bar: bigint;

/**
 * foo = bar
   bar = foo
 */

//  枚举类型
//  普通枚举
enum Gender {
  GIRL,
  BOY,
}
// 默认可以正向取出 也可以反举
console.log(Gender.BOY, Gender[1]); // 1 BOY
console.log(Gender.GIRL, Gender[0]); // 0 GIRL
// 常量枚举 只是提供了一个类型
const enum Colors { // 语义化
  RED,
  YELLOW,
  BLUE,
}

console.log(Colors.BLUE);
let myColor = [Colors.RED, Colors.YELLOW, Colors.BLUE]; // [0,1,2]

// 异构枚举 可以在枚举中放不同的类型

enum USER_ROLE {
  USER = "a",
  ADMIN = 1,
  MANAGER,
}
console.log(USER_ROLE.USER);

// 任意类型
// any
//如果变量定义为any类型，就跟JS差不多，不进行类型检查
let root: HTMLElement | null = document.getElementById("root");
root!.style.color = "red";
let element: HTMLElement | null = document.getElementById("root");
// 非空断言
element!.style.color = "green"; // 非空断言 表示一定有值 ts 语法
element?.style?.color; // element && element.style && element.style.color

// 可以做断言操作 也能解决这个问题
(<HTMLElement>element).style.color = "red"; // 这个和jsx语法有冲突 尽量不采用
(element as HTMLElement).style.color = "red"; // 断言 不能断言不存在的属性
// 双重断言（不建议使用 会破坏原有类型）
//(element as any) as boolean;

// null undefined 是其它类型的子类型
// 如果说strictNullChecks的值为true，则不能把null undefined赋值给y
let y: number;
// y = 1;
// y = undefined;
// y = null;

let z: number | null | undefined;
z = 1;
z = undefined;
z = null;

// void 空类型只能接受nul 和undefined。函数的返回值
// 函数默认的返回值是undefined,默认在严格模式下不能将null赋值给void
let v: void;
// v = null; // strict 模式下不能赋值为null
v = undefined;

// 字符串 数字 布尔类型 元组 数组 枚举 any null 和 undefined

// 1) 联合类型
// 默认你可以认为是并集

let str: string | number; //当没有初始化的时候 只能调用两者类型中的共同方法

// str.toString
// str.valueOf

str = 1; // 会根据赋值来推导后续的方法
str.toFixed();

str = "abc";
str.toLowerCase();

// 对象类型 非原始数据类型 object
const create = (obj: object) => {};

// create(1);
create({});
create([]);
create([]);
create(function () {});
// create(null);
export {};
