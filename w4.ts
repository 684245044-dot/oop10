class Patient {
    constructor(private id: string, private name: string, private age: number) {}

    getId(): string {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getAge(): number {
        return this.age;
    }

    showinfo(): string {
        return `ผู้ป่วย: รหัส - ${this.id}, ชื่อ - ${this.name}, อายุ - ${this.age} ปี`;
    }
}

class Doctor {
    constructor(private id: string, private name: string, private specialty: string) {}

    showinfo(): string {
        return `แพทย์: รหัส - ${this.id}, ชื่อ - ${this.name}, ความเชี่ยวชาญ - ${this.specialty}`;
    }

    examine(patient: Patient): void {
        console.log(`แพทย์ ${this.name} กำลังตรวจผู้ป่วย ${patient.showinfo()}`);
    }

    diagnose(pt: Patient, dis: string): void {
        console.log(`แพทย์ ${this.name} ได้วินิจฉัยโรคให้ผู้ป่วย รหัส: ${pt.getId()}, ชื่อ: ${pt.getName()}, อายุ: ${pt.getAge()} เป็นโรค: ${dis}`);
    }

    prescribeMedicine(pt: Patient, med: string): void {
        console.log(`แพทย์ ${this.name} ได้จ่ายยา ${med} ให้ผู้ป่วย รหัส: ${pt.getId()}, ชื่อ: ${pt.getName()}, อายุ: ${pt.getAge()}`);
    }

    calculateTreatmentCost(pt: Patient, fee: number, medFee: number): void {
        const total = fee + medFee;
        console.log(`แพทย์ ${this.name} คำนวณค่ารักษาพยาบาลให้ผู้ป่วย รหัส: ${pt.getId()}, ชื่อ: ${pt.getName()}, อายุ: ${pt.getAge()}`);
        console.log(`ค่าบริการตรวจรักษา = ${fee} บาท`);
        console.log(`ค่ายาพยาบาล = ${medFee} บาท`);
        console.log(`ราคารวมสุทธิ = ${total} บาท`);
    }
}
const patient1 = new Patient("P001", "สมชาย", 45);
const patient2 = new Patient("P002", "สมหญิง", 38);
const doctor1 = new Doctor("D001", "นพ. สมปอง", "หัวใจ");
const doctor2 = new Doctor("D002", "พญ. สมหญิง", "ผิวหนัง");
doctor1.examine(patient1);
doctor1.diagnose(patient1, "หัวใจเต้นผิดจังหวะ");
doctor1.prescribeMedicine(patient1, "ยาลดความดัน");
doctor1.calculateTreatmentCost(patient1, 1000, 500);
doctor2.examine(patient2);
doctor2.diagnose(patient2, "ภูมิแพ้ผิวหนัง");
doctor2.prescribeMedicine(patient2, "ยาแก้แพ้");
doctor2.calculateTreatmentCost(patient2, 500, 280);