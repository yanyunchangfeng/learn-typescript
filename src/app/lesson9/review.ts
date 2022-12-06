// string | number | boolean | 数组 | 元组 | never | null | undefined | void
// symbol bigint
// object

// 标识类型时 使用基本类型 Number实例的类型

class Animal {}
//:后面都是类型 标识这个能new
// let A: new () => Animal = Animal; 等价于下面的写法或者不标记类型自动推导的类型
let A: typeof Animal = Animal;
// function createInstance(clazz: { new (): Animal }) {}
function createInstance(clazz: new () => Animal) {}
createInstance(Animal);
export {};
