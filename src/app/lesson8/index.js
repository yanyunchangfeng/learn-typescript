class Animal {
    constructor() {
        this.name = '';
    }
}
class Cat extends Animal {
    speak() {
        console.log('喵喵喵');
    }
}
class Dog extends Animal {
    speak() {
        console.log('汪汪汪');
    }
}
function double(val) {
    if (typeof val === 'number') {
        return val * 2;
    }
    if (typeof val === 'string') {
        return val + val;
    }
}
export {};
//# sourceMappingURL=index.js.map