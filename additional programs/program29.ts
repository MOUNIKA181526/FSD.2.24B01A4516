class Box<T> {
    value: T;

    constructor(value: T) {
        this.value = value;
    }

    display(): void {
        console.log(this.value);
    }
}

let numberBox = new Box<number>(100);
let stringBox = new Box<string>("Hello");

numberBox.display();
stringBox.display();