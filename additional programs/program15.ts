let s: string = "programming";
let result = "";

for (let ch of s) {
    if (!result.includes(ch)) {
        result += ch;
    }
}

console.log(result);