class Box<T> {

    value: T;

    constructor(value: T) {
        this.value = value;
    }

    display(): void {
        console.log(this.value);
    }

}

let box1 = new Box<number>(100);
box1.display();

let box2 = new Box<string>("TypeScript");
box2.display();

let box3 = new Box<boolean>(true);
box3.display();