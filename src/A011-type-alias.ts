type Persona = {
  nome: string;
  salario: number;
  idade: number;
  corPreferida?: string;
};

const pessoa1: Persona = {
  nome: 'José',
  salario: 1_000,
  idade: 25,
};

type cores1 = 'Azul' | 'Amarelo' | 'Vermelho';
type cores2 = 'Preto' | 'Branco';
type coresGeral = cores1 | cores2;

function corPreferida(pessoa: Persona, cor: coresGeral) {
  return { ...pessoa, coresGeral: cor };
}

console.log(corPreferida(pessoa1, 'Preto'));
