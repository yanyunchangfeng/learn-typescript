
// import { zoo } from 'src/app/lesson10';
// let dogOfZoo = new zoo.Dog();
// dogOfZoo.eat();
import { Box}from './table1';
console.log(Box,'A')
/**
 * 文件 模块 命名空间的关系 
 */

export namespace zoo{
    export class Cat{
        eat() {
            console.log('zoo cat')
       }
    }
}

let Animal = new zoo.Cat()