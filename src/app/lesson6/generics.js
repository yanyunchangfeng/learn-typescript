// function echo(arg: any):any {
//     return arg
// }
// const result:string = echo(123)
// 有两个问题 传入和返回的类型没法做到统一还是丧失了类型 第二个 是定义了string 返回的是any string 属于any下的一个类型
// 泛型是指在定义函数接口或类时， 我们不预先指定具体的类型 而是在使用的时候再指定类型的一种特征
function echo(arg) {
    return arg;
}
// const str:string = 'str';
const result = echo('str');
// const result:string = echo(true) 报错
// const result = echo(true)
// const result = echo(123)
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
const result2 = swap(['string', 123]);
result2[1].charCodeAt(0);
// 泛型就像一个占位符 或者一个变量 在使用的时候我们可以把定义的类型像参数一样传入 ，然后它可以原封不变的给我们输出
// 约束泛型
function echoWithArr(arg) {
    console.log(arg.length);
    return arg;
}
const arrs = echoWithArr([1, 2, 3]);
function echoWithLength(arg) {
    console.log(arg.length);
    return arg;
}
const str = echoWithLength('str');
const obj = echoWithLength({ length: 10, with: 10 });
const arr2 = echoWithLength([1, 2, 3]);
// const number = echoWithLength(12) 报错
//这就是活生生鸭子类型出现了 只要你叫起来像鸭子 ，只要你有length属性 ，那么就符合这个约束，就没有问题，不管你是什么类型都可以
// 泛型约束类
class Queue {
    constructor() {
        this.data = [];
    }
    push(item) {
        return this.data.push(item);
    }
    pop() {
        return this.data.shift();
    }
}
const queue = new Queue();
queue.push(1);
const queue2 = new Queue();
queue2.push('str');
console.log(queue2.pop().length);
let kp1 = { key: 123, value: 'str' };
let kp2 = { key: 'test', value: 123 };
let arr = [1, 2, 3];
let arrTwo = [1, 2, 3];
function plus(a, b) {
    return a + b;
}
function connect(a, b) {
    return a + b;
}
const a = plus;
const b = connect;
// 查询对象中某一个属性的值  希望属性存在对象中 用 keyof 关键字约束
function getProperty(obj, key) {
    return obj[key];
}
let x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, 'd');
// getProperty(x,'m')  //报错
function create(c) {
    return new c();
}
class BeeKeeper {
}
class LionKeeper {
}
class Animals {
}
class Bee extends Animals {
}
class Lion extends Animals {
}
function createInstance(c) {
    return new c();
}
createInstance(Lion).keeper.nametgg;
createInstance(Bee).keeper.hasMask;
function identity(arg) {
    return arg;
}
let myIentity = identity; // let myIentity :{<T>(arg:T):T} = identity  还可以使用带有调用签名的对象字面量的方式来定义类型
let mynewIentity = identity;
let mynewIentityT = identity;
//# sourceMappingURL=generics.js.map