class Student {
    // Fields
    id:number;
    name: string;

    // Define constructor
    constructor(id:number, name:string) {
        this.id = id;
        this.name = name;
    }

    // Method or function to display student id and name
    display(): void {
        console.log("Student ID: " + this.id);
        console.log("Student Name: " + this.name);
    }
}

// Creating an Object or Instance
var obj = new Student(10, 'Josh');
obj.display()