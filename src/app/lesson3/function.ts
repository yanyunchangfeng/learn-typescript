//函数声明
// function add(x: number, y: number, z?:number): number {
//   if(typeof z === 'number'){
//       return x+y+z
//   }else{
//       return x+y
//   }
// }
// let result = add(2,3,5)
const add = function (x: number, y: number, z: number = 10): number {
  if (typeof z === 'number') {
    return x + y + z;
  } else {
    return x + y;
  }
};

// 如果使用的是表达式 你给他定义了类型，你可以把一个可以兼容的函数赋予给他
type Sum = (x: number, y: number, z?: number) => number;
const add2: Sum = add; //  =>表示返回值
//这里我们没有定义add 的类型但是typescript 会自动的进行类型推断

// 再看这个例子会更容易理解
let str = '112'; //再赋值 的过程中推断为string类型

// 可选参数? 默认值 =

//b? 表示b可以不传递

// 剩余参数

let sum = (...args: (number | string)[]) => {};
sum(1, '2', 4, 3);

// 函数的重载  根据不同的参数实现不同的功能
// 希望把一个字符串 或者数字转换成一个数组
// 123 => [1,2,3]
// '123' => ['1','2','3']
function toArray(value: string): string[];
function toArray(value: number): number[];
function toArray(value: number | string) {
  if (typeof value === 'string') {
    return value.split('');
  } else {
    return value
      .toString()
      .split('')
      .map((item) => parseInt(item));
  }
}
// 函数的参数类型 返回值类型如何标明 函数的重载
export {};
