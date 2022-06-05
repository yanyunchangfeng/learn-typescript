// 模块 vs 命名空间
// 1. 模块  全局模块 
//   . 在默认情况下，当你开始在一个新的Typescript 文件中写下代码时，它处于全局命名空间中
//   . 使用全局变量空间是危险的，因为它会与文件内的代码命名冲突 我们推荐使用下文中提到的文件模块
// 2. 文件模块
//   . 文件模块也被称为外部模块，如果你的TypeScript文件的根级别位置含有import 或者export 那么它会在这个文件中创建一个本地的作用域
//   . 模块是TS种外部模块的简称，侧重于代码和复用
//   . 模块在其自身的作用域里执行，而不是在全局作用域里
//   . 一个模块里的变量、函数、类等在外部是不可见的，除非你把它导出
//   . 如果想要使用一个模块里导出的变量，则需要导入
// 如果出现了import或者export那么这个文件就成为一个外部模块，简称模块
// 命名空间是内部模块 其实就是一个对象
// 命名空间
//    .在代码量较大的情况下，为避免命名空间冲突，可以将相似的函数、类、接口放置到命名空间内
//    .命名空间可以将代码包裹起来，只对外暴露需要在外部访问的对象，命名空间内通过export 向外导出
//    .命名空间是内部模块，主要用于组织代码，避免命名冲突
// 通过 import export 解决全局变量的问题  通过namespace 解决一个模块内部类名重复的问题
export var zoo;
(function (zoo) {
    class Elephant {
    }
    class Dog {
        eat() {
            console.log('zoo dog');
        }
    }
    zoo.Dog = Dog;
    let moneyArea;
    (function (moneyArea) {
        class Money {
            eat() {
                console.log(' zoo Money');
            }
        }
        moneyArea.Money = Money;
    })(moneyArea || (moneyArea = {}));
})(zoo || (zoo = {}));
export var home;
(function (home) {
    class Wife {
    }
    class Dog {
        eat() {
            console.log('home dog');
        }
    }
    home.Dog = Dog;
})(home || (home = {}));
let dogOfZoo = new zoo.Dog();
dogOfZoo.eat();
let dogOfHome = new home.Dog();
dogOfHome.eat();
//# sourceMappingURL=index.js.map