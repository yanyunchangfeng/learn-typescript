

// let EventEmitter = require('events')
class EventEmitter {
    _events = {};
    constructor() {
        
    }
    on(type, listener) {
        let listeners = this._events[type];
        if (listeners) {
            listeners.push(listener)
        } else {
            this._events[type]= [listener]
        }
    }
    emit(type, ...arg) {
        let listeners = this._events[type] || [];
        listeners.forEach(listener=>listener(...arg))
    }
}

let subject = new EventEmitter();
subject.on('click', (name,age) => {
    console.log(1,name,age)
})
subject.on('click', (name,age) => {
    console.log(2,name,age)
})
subject.emit('click','yanyunchangfeng',29)