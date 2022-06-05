let isDone = true;
let age = 22;
let binaryNumber = 0b1111;
let firstName = "changfeng";
let message = `hello ${firstName} age is ${age}`;
let u = undefined;
let n = null;
let num = undefined;
// undefined 和null 是所有类型的子类型
let notSure = 4;
notSure = "maybe it is a string";
notSure = true;
notSure.myName;
// notSure.getName();
//联合类型
let numberOrString;
numberOrString = 123;
numberOrString = "yanyun";
let arrOfNumbers = [1, 9, 9, 3];
let arrOfNumbers2 = [1, 9, 9, 3];
arrOfNumbers.push(9);
function test() {
    console.log(arguments);
    // let arr:any []  = arguments;  Type 'IArguments' is missing the following properties from type 'any[]':
}
//元组类型tuple 数量和类型已知的数组
let user = ["changfeng", 28];
// user = ['yanyun' , 44, true]
// never 代表不会出现的值
// 1.作为不会返回的函数的返回值 类型
function error(message) {
    throw new Error("报错了");
    console.log("ok");
}
function loop() {
    while (true) { }
    console.log("ok");
}
// error('33')
// loop()
// void 代表没有任何类型
// 函数没有返回值，呢么就是void类型
// strictNullChecks=false null 赋值 void true，不行了
function greeting() {
    // return null
}
// void never
// void 可又被赋值为null undefined never不能包含任何类型
// 返回类型为void的函数能正常执行，但是返回never的函数无法正常执行
// Symbol
const s1 = Symbol("key");
const s2 = Symbol("key");
// console.log(s1 == s2)
console.log(111);
// BigInt
const max = BigInt(Number.MAX_SAFE_INTEGER);
// console.log(max +1 === max +2)
console.log(max + 1n === max + 2n);
// JS 里面的类型Number BigInt ts里的类型 number bigint
let foo;
let bar;
/**
 * foo = bar
   bar = foo
 */
// 普通枚举
var Gender;
(function (Gender) {
    Gender[Gender["GIRL"] = 0] = "GIRL";
    Gender[Gender["BOY"] = 1] = "BOY";
})(Gender || (Gender = {}));
console.log(Gender.BOY, Gender[1]); // 1 BOY
console.log(Gender.GIRL, Gender[0]); // 0 GIRL
// 常量枚举
var Colors;
(function (Colors) {
    Colors[Colors["RED"] = 0] = "RED";
    Colors[Colors["YELLOW"] = 1] = "YELLOW";
    Colors[Colors["BLUE"] = 2] = "BLUE";
})(Colors || (Colors = {}));
let myColor = [0 /* RED */, 1 /* YELLOW */, 2 /* BLUE */]; // [0,1,2]
// 任意类型
// any
//如果变量定义为any类型，就跟JS差不多，不进行类型检查
let root = document.getElementById("root");
root.style.color = "red";
//# sourceMappingURL=basic-types.js.map