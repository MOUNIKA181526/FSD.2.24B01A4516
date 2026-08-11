let m: number = 28;
let sm = 0;

for (let i = 1; i < m; i++) {
    if (m % i === 0) {
        sm += i;
    }
}

console.log(sm === m ? "Perfect Number" : "Not Perfect Number");