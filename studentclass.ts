class Student {
    readonly studentId: number;
    name: string;

    constructor(studentId: number, name: string) {
        this.studentId = studentId;
        this.name = name;
    }

    display(): void {
        console.log(`ID: ${this.studentId}`);
        console.log(`Name: ${this.name}`);
    }
}

const s1 = new Student(101, "Pranathi");
s1.display();

// Error
// s1.studentId = 200;