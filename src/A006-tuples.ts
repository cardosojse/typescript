// Tuplas são arrays tipados com lenght e types predefinidos para cada índice.

const myTuple: [number, string] = [1, 'Olá, mundo!'];
myTuple.pop();
// O TS não reconhece esse comportamento indesejável.
// Para evitá-lo utilizamos a palavra-chave reandonly.

const myTupleTwo: readonly [number, string, boolean] = [105, 'Jon', true];

console.log(myTuple);
console.log(myTupleTwo);
