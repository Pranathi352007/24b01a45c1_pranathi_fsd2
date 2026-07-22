class Library1 {
    // Static property (belongs to the class)
    static libraryName: string = "Central Library";

    // Static readonly property (constant for the class)
    static readonly libraryCode: string = "LIB001";

    // Readonly property
    readonly memberId: number;

    // Public property
    public holderName: string;

    // Private property
    private phoneNumber: bigint;
    private pin: number;

    // Protected property
    protected booksTaken: number;

    constructor(
        memberId: number,
        holderName: string,
        phoneNumber: bigint,
        pin: number,
        booksTaken: number
    ) {
        this.memberId = memberId;
        this.holderName = holderName;
        this.phoneNumber = phoneNumber;
        this.pin = pin;
        this.booksTaken = booksTaken;
    }

    // Public method
    public displayDetails(): void {
        console.log("Library:", Library1.libraryName);
        console.log("Library Code:", Library1.libraryCode);
        console.log("Member ID:", this.memberId);
        console.log("Holder Name:", this.holderName);
        console.log("Phone Number:", this.phoneNumber);
        this.verifyPin();
    }

    // Public method
    public displayBooksTaken(): void {
        console.log("Books Taken:", this.booksTaken);
    }

    // Private method
    private verifyPin(): void {
        console.log("PIN Verified Successfully");
    }
}

// Child class to access protected property
class Student extends Library1 {
    public showBooks(): void {
        console.log("Books Taken (from child class):", this.booksTaken);
    }
}

// Creating object
const library1 = new Student(
    101,
    "Pranathi",
    9876543210n,
    1234,
    5
);

library1.displayDetails();
library1.displayBooksTaken();
library1.showBooks();

// Accessing static properties
console.log("Library Name:", Library1.libraryName);
console.log("Library Code:", Library1.libraryCode);

// library1.memberId = 102;      // Error (readonly)
// library1.booksTaken = 10;     // Error (protected)
// library1.phoneNumber = 123n;  // Error (private)
// library1.verifyPin();         // Error (private)