let value: any = 100;
value = "Hello";
console.log(value);

let data: unknown = "TypeScript";

if (typeof data === "string") {
    console.log(data.toUpperCase());
}

function showMessage(): void {
    console.log("This function returns nothing");
}

showMessage();