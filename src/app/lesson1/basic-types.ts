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

//联合类型
let numberOrString: number | string;
numberOrString = 123;
numberOrString = "yanyun";

let arrOfNumbers: number[] = [1, 9, 9, 3];
let arrOfNumbers2: Array<number> = [1, 9, 9, 3];
arrOfNumbers.push(9);

function test() {
  console.log(arguments);
  // let arr:any []  = arguments;  Type 'IArguments' is missing the following properties from type 'any[]':
}
//元组类型tuple 数量和类型已知的数组
let user: [string, number] = ["changfeng", 28];

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
// Symbol
const s1 = Symbol("key");
const s2 = Symbol("key");
// console.log(s1 == s2)
console.log(111);

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

// 普通枚举
enum Gender {
  GIRL,
  BOY,
}
console.log(Gender.BOY, Gender[1]); // 1 BOY
console.log(Gender.GIRL, Gender[0]); // 0 GIRL
// 常量枚举
const enum Colors {
  RED,
  YELLOW,
  BLUE,
}
let myColor = [Colors.RED, Colors.YELLOW, Colors.BLUE]; // [0,1,2]

// 任意类型
// any
//如果变量定义为any类型，就跟JS差不多，不进行类型检查
let root: any = document.getElementById("root");
root.style.color = "red";
let element: HTMLElement | null = document.getElementById("root");
// 非空断言
element!.style.color = "green";

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
