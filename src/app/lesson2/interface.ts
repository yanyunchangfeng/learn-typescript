// 对对象的形状(shape)进行描述
// 对类(class)进行抽象
// DuckTyping（鸭子类型） 动态编程语言的一种对象推断策略 它更关注的是对象如何被使用 而不是对象的类型本身

interface Person {
    readonly id: number;
    name : string;
    age?:number; 
}

let cf:Person = {
    id:11,
    name:'dd',
    age:12
}