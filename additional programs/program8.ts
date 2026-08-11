let n: number = 153;
let tp = n;
let add = 0;

while (tp > 0) {
    let digit = tp % 10;
    add += digit * digit * digit;
    tp = Math.floor(tp / 10);
}

console.log(add === n ? "Armstrong Number" : "Not Armstrong Number");