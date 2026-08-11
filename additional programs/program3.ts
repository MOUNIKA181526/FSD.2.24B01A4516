let a: number = 10;
let b: number = 25;
let c: number = 15;

let largest = a;

if (b > largest) {
    largest = b;
}

if (c > largest) {
    largest = c;
}

console.log("Largest Number:", largest);