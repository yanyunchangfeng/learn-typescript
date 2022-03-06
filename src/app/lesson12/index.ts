// import './promise'
// import './callbacks'
// import './EventEmitter'
abstract class Student{
    constructor(public teacher: Teacher) {
        
    }
    // 每个观察这都有一个update方法，用来在被观察 对象更新的时候进行自我更新
    public abstract update(): void;
}

class Xueba extends Student{
    public update(): void {
        if (this.teacher.getState() === '提问') {
            console.log('举手回答')
        }
    }
    
}
class Xuezha extends Student{
    public update(): void {
        if (this.teacher.getState() === '提问') {
            console.log('低头看脚')
        }
    }
    
}
class Teacher{
    private students: Student[] = [];
    private state: string = '讲课';
    public askQuestion() {
        this.state = '提问';
        this.notifyAllStudents()
    }
    getState() {
        return this.state
    }
    attach(student: Student) {
        this.students.push(student)
    }
    notifyAllStudents() {
        this.students.forEach(
            (student:Student) => student.update())
    }
}
let teacher = new Teacher()
const xueba = new Xueba(teacher)
const xuezha = new Xuezha(teacher)
teacher.attach(xueba)
teacher.attach(xuezha)
teacher.askQuestion()
// 观察者模式和发布订阅的区别：在观察者模式里面 学生和老师相互了解 相互知道 相互耦合在一起的 老师知道他有那几个学生 学生知道他的老师是谁
