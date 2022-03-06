/**
 * Promise
 */

export { }
class Promise{
    success: Array<Function> = [];
    constructor(task) {
        const resolve = () => {
            this.success.forEach(success=>success())
        }
        task(resolve)
    }
    then(success) {
        this.success.push(success)
    }
}
let promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve();
    },1000)
})
promise.then(() =>  console.log(1) )
promise.then(()=>console.log(2))