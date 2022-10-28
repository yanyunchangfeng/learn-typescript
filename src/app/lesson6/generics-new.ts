// 泛型 特性 就是为了 在声明时不能确定类型，只有在使用的时候 才能决定类型
// 函数 接口、类型别名 类

// 函数中使用泛型

function createArray<T>(times: number, val: T) {
  let result = [];
  for (let i = 0; i < times; i++) {
    result.push(val);
  }
  return result;
}

let r = createArray<string>(3, "ABC"); // 不传入类型 ts 也会自动推导类型

// 泛型可以使用多个
// 元组 [ string ,number] => [number,string]

// function swap<T, K>(tuple: [T, K]): [K, T] {
//   return [tuple[1], tuple[0]];
// }

// swap<string, string>(["string", "string"]);

// 函数表达式的写法
// 写到函数上的泛型表示调用函数时 传入具体类型，写在接口后面的标识使用接口时传入类型
interface MySwap<A, B> {
  // <A, B>(tuple: [A, B]): [B, A];
  (tuple: [A, B]): [B, A];
}
// const swap: MySwap<string, string> = <A, B>(tuple: [A, B]): [B, A] => {
//   return [tuple[1], tuple[0]];
// };
interface IArr<A, B> {
  [key: number]: B;
}
// 在接口调用时传递参数
const swap = <A, B>(tuple: IArr<A, B>): IArr<A, B> => {
  return [tuple[1], tuple[0]];
};

swap([2, 3]);
