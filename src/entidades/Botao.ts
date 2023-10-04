interface optionInterface {
  disable: boolean,
}
export class Botao {
  texto: string;
  options: optionInterface;
  acao: () => void;

  constructor(texto: string, options: optionInterface, acao: () => void) {
    this.texto = texto;
    this.acao = acao;
    this.options = options;
  }
}
