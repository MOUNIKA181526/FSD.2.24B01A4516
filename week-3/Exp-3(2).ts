class Employee {
    public name: string;
    private salary: number;
    protected department: string;

    constructor(name: string, salary: number, department: string) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }

    showDetails(): void {
        console.log(this.name);
        console.log(this.salary);
        console.log(this.department);
    }
}

const e1 = new Employee("Mounika", 50000, "IT");
e1.showDetails();