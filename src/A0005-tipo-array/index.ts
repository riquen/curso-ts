export function multiplicaArgs(...args: Array<number>) {
  return args.reduce((ac, valor) => ac * valor);
}

export function concatenaString(...args: string[]) {
  return args.reduce((ac, valor) => ac + valor);
}

export function upperCase(...args: string[]) {
  return args.map((valor) => valor.toUpperCase());
}
