const nome = 'Henrique';
const idade = 26;
const adulto = true;
const simbolo = Symbol('avatar');

const arrayDeNumeros: Array<number> = [1, 2, 3];
const arrayDeNumeros2: number[] = [1, 2, 3];
const arrayDeStrings: Array<string> = ['Henrique', 'Arantes', 'Nunes'];
const arrayDeStrings2: string[] = ['Henrique', 'Arantes', 'Nunes'];

const pessoa: {
  nome: string;
  idade: number;
  adulto?: boolean;
} = {
  idade: 26,
  nome: 'Henrique',
};

function soma(x: number, y: number): number {
  return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;
