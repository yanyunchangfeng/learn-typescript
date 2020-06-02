let isDone : boolean = true;
let age:number = 22;
let binaryNumber: number = 0b1111;
let firstName:string ='changfeng'
let message: string = `hello ${firstName} age is ${age}`
let u :undefined = undefined;
let n :null = null;
let num:number = undefined;
// undefined 和null 是所有类型的子类型


let notSure: any = 4;
notSure = 'maybe it is a string';
notSure = true;
notSure.myName
notSure.getName();

//联合类型
let numberOrString : number | string;
numberOrString = 123;
numberOrString = 'yanyun';


let arrOfNumbers: number [] = [1,9,9,3]
arrOfNumbers.push(9)

function test(){
    console.log(arguments);
    // let arr:any []  = arguments;  Type 'IArguments' is missing the following properties from type 'any[]': 
}
//元组
let user : [string ,number] = ['changfeng', 28]

// user = ['yanyun' , 44, true]
