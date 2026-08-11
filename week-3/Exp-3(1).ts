class Student {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    display(): void {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
    }
}

const s1 = new Student("Mounika", 20);
s1.display();