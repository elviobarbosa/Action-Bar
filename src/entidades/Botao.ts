export class Botao {
  texto: string;
  acao: () => void;

  constructor(texto: string, acao: () => void) {
    this.texto = texto;
    this.acao = acao;
  }
}
