// Define a namespace to group Student-related operations
namespace StudentInfo{
    // Private variable (not exported)
    // Cannot be accessed outside the namespace
    const collegeName: string = "SVECW";
    // Exported function to display student details
    export function displayStudent(name: string, rollNo: number): void {
        console.log("Student Name :", name);
        console.log("Roll Number  :", rollNo);
        console.log("College      :", collegeName);
    }
    // Exported function to calculate percentage
    export function calculatePercentage(total: number, obtained: number): number {
        return (obtained / total) * 100;
    }
    // Nested Namespace
    export namespace Result {
        export function grade(percentage: number): string {
            if (percentage >= 90)
                return "A+";
            else if (percentage >= 80)
                return "A";
            else if (percentage >= 70)
                return "B";
            else if (percentage >= 60)
                return "C";
            else
                return "Fail";
        }
    }
}
StudentInfo.displayStudent("Pranathi", 4584);
let percentage = StudentInfo.calculatePercentage(600, 540);
console.log("Percentage :", percentage);
let grade = StudentInfo.Result.grade(percentage);
console.log("Grade :", grade);

// -------- ERROR DEMO --------
// console.log(StudentInfo.collegeName);
// The above line gives an error because
// 'collegeName' is not exported.
