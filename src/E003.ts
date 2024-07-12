interface User {
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  name: string;
  age: number;
  role: string;
}

type Person = User | Admin;

const persons: Person[] = [
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

function logPerson(person: Person) {
  let additionalInfo: string;
  if ('role' in person) additionalInfo = person.role;
  else additionalInfo = person.occupation;
  console.log(`${person.name}, ${person.age} - ${additionalInfo}`);
}

logPerson(persons[0]);
