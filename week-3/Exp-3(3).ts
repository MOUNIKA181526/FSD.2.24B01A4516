class College {
    readonly collegeName: string = "ABC College";
    static city: string = "Hyderabad";

    display(): void {
        console.log(this.collegeName);
        console.log(College.city);
    }
}

const c1 = new College();
c1.display();