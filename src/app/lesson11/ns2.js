var Box;
(function (Box) {
    // export class Book1{} // 会报错 命名空间全局具有唯一性
    class Book2 {
    }
    Box.Book2 = Book2;
})(Box || (Box = {}));
//# sourceMappingURL=ns2.js.map