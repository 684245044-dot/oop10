class Engine{
    constructor(private type: string) {}
    start(): void{
        console.log(`เครื่องยนต์ ${this.type} เริ่มทำงาน`)
    }
    stop(): void{
        console.log(`เครื่องยนต์ ${this.type} หยุดทำงาน`)
    }
    getType(): string{
        return this.type;
    }
}
class Battery{
    constructor(private capacity: number) {}
    charge(): void{
        console.log(`ขณะนี้แบตเตอร์รี่มีอยู่ ${this.capacity}`);
        this.capacity = 100;
        console.log(`ชาร์จเเบตเตอร์รี่เรียบร้อยเเล้ว ตอนนี้แบตเตอร์รี่มีอยู่ ${this.capacity}`);
    }
    showstatus(): void{
        console.log(`ขณะนี้แบตเตอร์รี่มีอยู่ ${this.capacity}`);
    }
}
class Car{
    private engine: Engine;
    private battery: Battery;
    constructor(type: string, capacity: number){
        this.engine = new Engine(type);
        this.battery = new Battery(capacity);
    }
    startcar(): void{
        this.engine.start();
        this.battery.showstatus();
    }
    stopcar(): void{
        this.engine.stop();
        this.battery.showstatus();
    }
    showcarinfo(): void{
        console.log(`ข้อมูลของรถยนต์: เครื่องยนต์ชนิด ${this.engine.getType()}`);
        this.battery.showstatus();
    }
    chargebattery(): void{
        this.battery.charge();
    }
}

const car1 = new Car("v6", 10);
car1.startcar();
car1.showcarinfo();
car1.chargebattery();
car1.stopcar();