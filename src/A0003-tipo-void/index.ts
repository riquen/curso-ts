function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

export const pessoa = {
  nome: 'Henrique',
  sobrenome: 'Arantes',
  exibirNome(): void {
    console.log(`${this.nome} ${this.sobrenome}`);
  },
};

semRetorno('Henrique', 'Arantes', 'Nunes');
pessoa.exibirNome();
