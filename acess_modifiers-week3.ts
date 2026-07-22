class Library {
    public holdername: string;
    private phone_number: bigint;
    private pin: number;
    protected booksTaken: number;

    constructor(holdername: string,phone_number: bigint,pin: number,booksTaken: number) {
        this.holdername = holdername;
        this.phone_number = phone_number;
        this.pin = pin;
        this.booksTaken = booksTaken;
    }

    // Public method
    public displayDetails(): void {
        console.log("Holder Name:", this.holdername);
        console.log("Phone Number:", this.phone_number);
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
const obj = new Library("Pranathi", 9876543210n, 1234, 5);
obj.displayDetails();
obj.displayBooksTaken();
// console.log(obj.booksTaken); // Error: 'booksTaken' is protected
// obj.verifyPin();     // Error: Property 'verifyPin' is private