// class Person {
//   constructor(
//     private firstName: string,
//     private lastName: string,
//   ) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   getFullName(): string {
//     return `${this.firstName} ${this.lastName}`;
//   }

//   describe(): string {
//     return `This is ${this.firstName} ${this.lastName}`;
//   }
// }

// class Employee extends Person {
//   constructor(
//     firstName: string,
//     lastName: string,
//     private jobTitle: string,
//   ) {
//     super(firstName, lastName);
//   }

//   describe(): string {
//     return `He is a ${this.jobTitle}`;
//   }
// }

// const employee = new Employee('José', 'Cardoso', 'Frontend Developer');

// console.log(employee.describe());
