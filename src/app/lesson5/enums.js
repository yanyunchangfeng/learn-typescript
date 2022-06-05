// const enum Direction {
//     Up,
//     Down,
//     Left,
//     Right,
// }
// console.log(Direction.Up) // 0
// console.log(Direction[0]) // Up
// 加上const 为常量枚举 
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
const value = 'UP';
if (value === "UP" /* Up */) {
    console.log('go up!');
}
// 不加const 编译结果 var Direction;
// (function (Direction) {
//     Direction["Up"] = "UP";
//     Direction["Down"] = "DOWN";
//     Direction["Left"] = "LEFT";
//     Direction["Right"] = "RIGHT";
// })(Direction || (Direction = {}));
// var value = 'UP';
// if (value === Direction.Up) {
//     console.log('go up!');
// }
// 加上const 后的编译结果 var value = 'UP';
// if (value === "UP" /* Up */) {
//     console.log('go up!');
// }
//# sourceMappingURL=enums.js.map