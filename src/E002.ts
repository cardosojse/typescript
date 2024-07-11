interface User {
  name: string;
  age: number;
  occupation: string;
}

export interface Admin {
  name: string;
  age: number;
  role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
  {
    name: 'Max',
    age: 25,
    occupation: 'Developer',
  },
  {
    name: 'Jane Doe',
    age: 32,
    role: 'Admin',
  },
  {
    name: 'Kate Müller',
    age: 23,
    occupation: 'Astronaut',
  },
  {
    name: 'Bruce Willis',
    age: 64,
    role: 'World saver',
  },
];

const logPerson = (user: Person) => {
  console.log(` - ${user.name}, ${user.age}`);
};

persons.forEach(logPerson);
