//类型别名和类型断言
//type aliases
type PlusType = (x: number, y: number) => number;
function sum(x: number, y: number): number {
  return x + y;
}

const sum2: (x: number, y: number) => number = sum;
const sum3: PlusType = sum;

type NameResolver = () => string;
type NameOrResolver = string | NameResolver;
//比方说一个函数接受的参数为不同类型 我们在联合类型的场景下使用类型别名
function getName(n: NameOrResolver): string {
  if (typeof n === 'string') {
    return n;
  } else {
    return n();
  }
}

// type assertion
function getLength(input: string | number): number {
  // const str = input as String
  // if(str.length){
  //     return str.length
  // }else{
  //     const number = input as Number
  //     return number.toString().length
  // }
  if ((<string>input).length) {
    return (<string>input).length;
  } else {
    return input.toString().length;
  }
}
