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

function swap<T, K>(tuple: [T, K]): [K, T] {
  return [tuple[1], tuple[0]];
}

swap([1, 2]);
