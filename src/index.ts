import "src/app/lesson8";
import "src/app/lesson11";
import "src/app/lesson1/basic-types";
import "src/app/lesson3/function";
import "src/app/lesson4/class";
import "src/app/lesson12";
// d.ts 默认打包出来的代码 可以指定生成.d.ts 文件

// 1. 默认先查找node_modules package.json types字段 有说明直接就找到了
// 2. 找对应包下有没有index.d.ts 如果没有说明此包没有用ts来写
// 3. 找@types下的文件来查找index.d.ts
// 4. 可以指定查找路径 paths
// 5. 查找include 目录下的文件、或者全局下所有的.d.ts文件

console.log(AUTHOR);
