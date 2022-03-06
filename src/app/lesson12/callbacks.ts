/**
 * Jquery Callbacks
 */



function Callbacks() {
    let observers = [];
    const add = (observer) => {
        observers.push(observer)
    }
    const remove = (observer) => {
        observers = observers.filter(item=> item !== observer)
    }
    const fire = () => {
        observers.forEach(observer=>observer())
    }
    return {
        add,
        remove,
        fire,
    }
}
let callbacks = Callbacks()
let a1 = ()=> console.log(1)
let a2 = ()=> console.log(2)
let a3 = ()=> console.log(3)
callbacks.add(a1)
callbacks.add(a2)
callbacks.add(a3)
callbacks.remove(a3)
callbacks.fire()