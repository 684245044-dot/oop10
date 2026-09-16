class CPU {
    constructor(private brand: string = "Intel", private cores: number = 8) {}

    process(): void {
        console.log(`CPU ${this.brand} จำนวน ${this.cores} คอร์ กำลังประมวลผล`);
    }

    showInfo(): void {
        console.log(`ข้อมูล CPU: แบรนด์ - ${this.brand}, คอร์ - ${this.cores}`);
    }
}

class RAM {
    constructor(private capacity: number = 16) {}

    load(): void {
        console.log(`RAM ${this.capacity} GB กำลังโหลดข้อมูล`);
    }

    showInfo(): void {
        console.log(`ข้อมูล RAM: ความจุ - ${this.capacity} GB`);
    }
}

class Storage {
    constructor(private capacity: number = 512, private type: string = "SSD") {}

    readData(): void {
        console.log(`Storage ${this.type} ความจุ ${this.capacity} GB กำลังอ่านข้อมูล`);
    }

    showInfo(): void {
        console.log(`ข้อมูล Storage: ประเภท - ${this.type}, ความจุ - ${this.capacity} GB`);
    }
}

class Computer {
    private cpu: CPU;
    private ram: RAM;
    private storage: Storage;

    constructor(
        brand: string = "Intel",
        cores: number = 8,
        ramSize: number = 16,
        storageSize: number = 512,
        storageType: string = "SSD"
    ) {
        this.cpu = new CPU(brand, cores);
        this.ram = new RAM(ramSize);
        this.storage = new Storage(storageSize, storageType);
    }

    boot(): void {
        this.cpu.process();
        this.ram.load();
        this.storage.readData();
        console.log("คอมพิวเตอร์กำลังเริ่มเปิดใช้งาน");
    }

    showComputerInfo(): void {
        console.log("ข้อมูลคอมพิวเตอร์:");
        this.cpu.showInfo();
        this.ram.showInfo();
        this.storage.showInfo();
    }
}

const myComputer = new Computer("Intel", 8, 16, 512, "SSD");

myComputer.boot();
myComputer.showComputerInfo();