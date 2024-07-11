interface User {
  type: 'user';
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  type: 'admin';
  name: string;
  age: number;
  role: string;
}

type Person = User | Admin;

const persons: Person[] = [
  {
    type: 'user',
    name: 'Max Mustermann',
    age: 25,
    occupation: 'Chimney sweep',
  },
  {
    type: 'admin',
    name: 'Jane Doe',
    age: 32,
    role: 'Administrator',
  },
  {
    type: 'user',
    name: 'Kate Müller',
    age: 23,
    occupation: 'Astronaut',
  },
  {
    type: 'admin',
    name: 'Bruce Willis',
    age: 64,
    role: 'World saver',
  },
];

export const isAdmin = (person: Person): person is Admin =>
  person.type === 'admin';
export const isUser = (person: Person): person is User =>
  person.type === 'user';

function logPerson(person: Person) {
  let additionalInfo: string = '';
  if (isAdmin(person)) {
    additionalInfo = person.role;
  }
  if (isUser(person)) {
    additionalInfo = person.occupation;
  }
  console.log(` - ${person.name}, ${person.age}, ${additionalInfo}`);
}

console.log('Admins: ');
persons.filter(isAdmin).forEach(logPerson);

console.log('Users: ');
persons.filter(isUser).forEach(logPerson);
