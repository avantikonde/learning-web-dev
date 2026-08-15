// Create an abstract class User with a name property, abstract greet function and a hello function
abstract class User {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    abstract greet(): string;

    hello(): void {
        console.log("Hello Everyone");        
    }
}

class Employee extends User {
    name: string;
    age: number;
  
    constructor(name: string, age: number) {
        super(name);
        this.name = name;
        this.age = age;
    }

    greet(): string {
        return "Hi " + this.name;
    }
}

let emp = new Employee("Avanti", 18);

console.log(emp.greet()); 

emp.hello(); // Output: Hello Everyone
