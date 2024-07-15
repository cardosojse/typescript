function getFullName(person: { firstName: string; lastName: string }) {
  return `${person.firstName} ${person.lastName}`;
}

const person = {
  firstName: 'José',
  lastName: 'Cardoso',
};

console.log(getFullName(person));
