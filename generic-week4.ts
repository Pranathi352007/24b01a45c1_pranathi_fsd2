
// Generic Variable

// Generic array of numbers
let numbers: Array<number> = [10, 20, 30, 40];

// Generic array of strings
let names: Array<string> = ["Pranathi", "Rahul", "Anjali"];

console.log("Numbers :", numbers);
console.log("Names :", names);

// Generic function
function display<T>(value: T): T {
    return value;
}

console.log("\nGeneric Function:");
console.log(display<number>(100));
console.log(display<string>("Hello"));
console.log(display<boolean>(true));

// Generic function with two type parameters
function printData<T, U>(value1: T, value2: U): void {
    console.log("\nFirst Value :", value1);
    console.log("Second Value :", value2);
}
printData<string, number>("Pranathi", 4584);
printData<boolean, string>(true, "TypeScript");

// Generic Class

class Box<T> {
    value: T;
    constructor(value: T) {
        this.value = value;
    }
    display(): void {
        console.log("Stored Value :", this.value);
    }
}

console.log("\nGeneric Class:");

let box1 = new Box<number>(500);
box1.display();

let box2 = new Box<string>("SVECW");
box2.display();

// Generic Constraint

// Interface used as constraint
interface StudentInfo {
    name: string;
    age: number;
}
// Generic function with constraint
function displayStudent<T extends StudentInfo>(student: T): void {
    console.log("\nStudent Details");
    console.log("Name :", student.name);
    console.log("Age :", student.age);
}
displayStudent({
    name: "Pranathi",
    age: 20
});
// Generic Constraint using Length
// Interface containing length property
interface Length {
    length: number;
}
// Generic function with length constraint
function printLength<T extends Length>(value: T): void {
    console.log("Length :", value.length);
}
console.log("\nLength Constraint:");
printLength("TypeScript");
printLength([10, 20, 30, 40]);