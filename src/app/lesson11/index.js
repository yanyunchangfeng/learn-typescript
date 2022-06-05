// import { zoo } from 'src/app/lesson10';
// let dogOfZoo = new zoo.Dog();
// dogOfZoo.eat();
import { Box } from './table1';
console.log(Box, 'A');
/**
 * 文件 模块 命名空间的关系
 */
export var zoo;
(function (zoo) {
    class Cat {
        eat() {
            console.log('zoo cat');
        }
    }
    zoo.Cat = Cat;
})(zoo || (zoo = {}));
let Animal = new zoo.Cat();
//# sourceMappingURL=index.js.map