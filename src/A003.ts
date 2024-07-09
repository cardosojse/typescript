// O tipo void é utilizado quando uma função ou método não retorna nada
function semRetorno(...args: string[]): void {
  console.log(args.join());
}

const pessoa = {
  nome: 'José',
  sobrenome: 'Cardoso',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Meu nome é');
pessoa.exibirNome();

export { pessoa };
