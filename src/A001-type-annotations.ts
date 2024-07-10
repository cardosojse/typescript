/* eslint-disable */

// module mode

// Tipos básicos (aqui ocorre inferência de tipos) NÃO FAZER ASSIM
let nome: string = 'José'; // Qualquer tipo de strings
let idade: number = 9; // 10, 1.57, -5.55, 0xf00d
let adulto: boolean = true; // true ou false
let simbolo: symbol = Symbol('qualquer-symbol'); // symbol

// Arrays
let arrayNumbers: Array<number> = [1, 2, 3];
let arrayNumbers2: number[] = [1, 2, 3];
let arrayString: Array<string> = ['A', 'B', 'C'];
let arrayString2: string[] = ['A', 'B', 'C'];

// Objetos
const pessoa: {nome: string, idade: number, adulto?:boolean} = {
  nome: 'José',
  idade: 25
};

// Funções
function soma(x: number, y: number): number {
  return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;

console.log(soma(2, 5));
console.log(soma2(5, 3));
