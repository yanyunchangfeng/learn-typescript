// 第三方的 有其他人专门写了一些扩展方法

// 求差集
let person1 = {
  name: 'cf',
  age: 29,
  address: '杭州'
};

let person2 = {
  address: '杭州'
};
type Diff<T extends object, K extends object> = Omit<T, keyof K>;
type MyDiff = Diff<typeof person1, typeof person2>;

type InterSection<T extends object, K extends object> = Pick<T, Extract<keyof T, keyof K>>;
type myInter = InterSection<typeof person1, typeof person2>;

// OverWrite 覆盖属性 如果存在了属性  用新的覆盖掉

interface Person1 {
  name: string;
  age: number;
  a: number;
}
interface Person2 {
  name: string;
  age: string;
  address: string;
}
// address 不会覆盖 但是age会覆盖掉原有的，同样原来的还需要有
//                                             先比较两个人的差异   在person2中忽略掉 两个人的差异（新的里面的和老的公有的部分，以新的为主）
// 去老的中选，选出差异的部分保留
type OverWrite<T extends object, K extends object> = Omit<T, keyof Diff<T, K>> & Pick<K, keyof Diff<K, T>>;
type myWrite = OverWrite<Person2, Person1>;

let myType: myWrite = {
  a: 1,
  age: 'string',
  name: 'cf'
};

// merge对象

let t1 = { name: 'cf', a: 1 };
let t2 = { age: 29, a: 'string' };

type T1 = typeof t1;
type T2 = typeof t2;

type Compute<T> = { [K in keyof T]: T[K] }; // 循环里面的属性 重新赋值
type Merge<T, K> = Omit<T, keyof K> & K;
type T3 = Compute<Merge<T1, T2>>;
let t: T3 = {
  name: 'cf',
  a: 'xxx',
  age: 29
};

export {};
