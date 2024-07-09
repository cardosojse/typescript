class Pessoa {
  constructor(
    private firstName: string,
    private lastName: string,
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  describe(): string {
    return `This is ${this.firstName} ${this.lastName}`;
  }
}

class Employee extends Pessoa {
  constructor(
    firstName: string,
    lastName: string,
    private jobTitle: string,
  ) {
    super(firstName, lastName);
  }

  describe(): string {
    return super.describe() + ` - ${this.jobTitle}`;
  }
}

const employee = new Employee('José', 'Cardoso', 'Frontend Developer');

console.log(employee.getFullName());
console.log(employee.describe());
