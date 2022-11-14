// 类型声明

declare let vue: string; // declare 关键字 只是让我们的代码有提示功能而已
declare function sum(): void; // 没有实现
declare class Person {}

declare interface Tomato {}
declare module A {
  const a: string; // declare 里面的内容不需要导出 也不需要再增加declare
}
A.a;

declare enum Seasons {
  Spring,
  Summer,
}
// ---------这些东西就是给你当提示用的 不需要实现--------------
console.log(Seasons.Spring); //仅仅是一个提示作用
// 不是同名的就能合并 （接口同名的接口可以自动合并）（函数和命名空间能自动合并）（命名空间和命名空间也能合并）
// declare const $: (selector: string) => {
//   width(val: number): void;
//   height(val: number): void;
// };

declare function $(selector: string): {
  height(val: number): void;
  width(val: number): void;
};
declare namespace $ {
  namespace fn {
    function extend(): void;
  }
}
// import $ from "jquery"; //export default $
// import $ = require("jquery"); // export = jquery(为了兼容commonjs 规范来实现的) node中可以使用这套api
// commonjs 规范可以动态引入 es6静态的 可以支持tree shaking
// const $ = require('jquery') // 标识没有声明文件
// export = Jquery ts准备好的导出方法  标识代码可以在commonjs 中使用

export {};
