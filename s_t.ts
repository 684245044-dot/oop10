class student {
    constructor(private name: string, private major: string) {}
    getstudentInfo(): string {
        return `นักศึกษา ชื่อ: ${this.name}, สาขา: ${this.major}`;
    }
}

class Teacher {
    constructor(private name: string, private faculty: string) {}
    teach(student: student): void {
        console.log(`อาจารย์ ${this.name} คณะ ${student.getstudentInfo()}`);
    }
}
const student1 = new student("ภาณุวัฒน์", "วิทยาการคอมพิวเตอร์");
const student2 = new student("ณัฐวุฒิ", "วิศวกรรมคอมพิวเตอร์");
const teacher1 = new Teacher("อาจารย์สมชาย", "คณะวิทยาศาสตร์และเทคโนโลยี");
const teacher2 = new Teacher("อาจารย์สมหญิง", "คณะการจัดการ");
teacher1.teach(student1);
teacher1.teach(student2);
teacher2.teach(student1);
teacher2.teach(student2);
