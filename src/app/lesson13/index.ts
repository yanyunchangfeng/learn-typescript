
// 发布订阅模式  有中间商赚差价的就是发布订阅模式 否则就是观察者模式

// 中介
class Agency{
    _topic = {} // _events
    subscribe(type,listener) {
        let listeners = this._topic[type];
        if (listeners) {
            listeners.push(listener)
        } else {
            this._topic[type] = [listener]
        }
    }
    publish(type, ...args) {
        let listeners = this._topic[type] || [];
        listeners.forEach(listener => listener(...args));

    }
}
// 房东
class LandLord{
    constructor(public agency: Agency) {
        
    }
    // type是房子的类型 area是房子的面积 money房租的价格
    lend(type,area,money) {
        this.agency.publish(type,area,money)
    }
}

class Tenant{
    constructor(public agency: Agency,public name:string) {
        
    }
    order(type) {
        this.agency.subscribe(type, (area,money) => {
            console.log(this.name, area + '平', money + '元');
        })
    }
}

let agency = new Agency();
let rich = new Tenant(agency, '大款');
let northFloat = new Tenant(agency, '北漂');
rich.order('豪宅');
northFloat.order('单间');
let landLord = new LandLord(agency);
landLord.lend('豪宅', 100000, 1000000);
landLord.lend('单间', 10, 2000);
