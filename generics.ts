// function echo(arg: any):any {
//     return arg
// }
// const result:string = echo(123)
// 有两个问题 传入和返回的类型没法做到统一还是丧失了类型 第二个 是定义了string 返回的是any string 属于any下的一个类型
// 泛型是指在定义函数接口或类时， 我们不预先指定具体的类型 而是在使用的时候再指定类型的一种特征


function echo<T>(arg: T): T{
   return arg
}

// const str:string = 'str';
const result = echo('str')
// const result:string = echo(true) 报错
// const result = echo(true)
// const result = echo(123)


function swap<T,U>(tuple:[T,U]):[U,T]{
    return [tuple[1],tuple[0]]
}
const result2 = swap(['string',123])
result2[1].charCodeAt(0)
// 泛型就像一个占位符 或者一个变量 在使用的时候我们可以把定义的类型像参数一样传入 ，然后它可以原封不变的给我们输出




// 约束泛型
function echoWithArr<T>(arg: T[]):T[]{
    console.log(arg.length)
    return arg
}

const arrs = echoWithArr([1,2,3])
interface IWithLength {
    length:number
}
function echoWithLength<T extends IWithLength>(arg:T):T{
    console.log(arg.length);
    return arg
}
const str = echoWithLength('str')
const obj = echoWithLength({length:10,with:10})
const arr2 = echoWithLength([1,2,3])
// const number = echoWithLength(12) 报错



// 泛型约束类

class Queue<T> {
    private data = [];
    push(item: T){
        return this.data.push(item)
    }
    pop(): T{
        return this.data.shift()
    }
}

const queue = new Queue<number>()
queue.push(1)
const queue2 = new Queue<string>()
queue2.push('str')
console.log(queue2.pop().length)

interface KeyPair<T,U>{
    key:T;
    value:U;
}

let kp1:KeyPair<number,string> = {key:123,value:'str'}
let kp2:KeyPair<string,number> = {key:'test',value:123}

let arr: number[] = [1,2,3]

let arrTwo: Array<number>= [1,2,3]
 
interface IPlus<T>{
 (a:T,b:T):T
}

function plus (a:number,b:number):number{
    return a + b
}
function connect (a:string,b:string):string{
    return a + b
}

const a:IPlus<number> = plus
const b:IPlus<string> = connect