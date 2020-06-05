//使用第三方库的声明文件

declare var jQuery:(selector: string) => any
//有的时候无法获得Jquery的定义 其实我们需要配置一下tsc的编译器
// 新建tsconfig.json
// {
//     "include ": ["**/*"] 编译当前文件夹下的所有文件
// }