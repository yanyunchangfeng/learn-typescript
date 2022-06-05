function sum(x, y) {
    return x + y;
}
const sum2 = sum;
const sum3 = sum;
//比方说一个函数接受的参数为不同类型 我们在联合类型的场景下使用类型别名
function getName(n) {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
}
// type assertion
function getLength(input) {
    // const str = input as String
    // if(str.length){
    //     return str.length
    // }else{
    //     const number = input as Number
    //     return number.toString().length
    // }
    if (input.length) {
        return input.length;
    }
    else {
        return input.toString().length;
    }
}
//# sourceMappingURL=more.js.map