let number: number = 145;
let temp = number;
let addition = 0;

while (temp > 0) {
    let digit = temp % 10;
    let fact = 1;

    for (let i = 1; i <= digit; i++) {
        fact *= i;
    }

    addition += fact;
    temp = Math.floor(temp / 10);
}

console.log(addition === number ? "Strong Number" : "Not Strong Number");