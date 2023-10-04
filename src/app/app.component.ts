import { Component } from '@angular/core';
import { Botao } from 'src/entidades/Botao';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'CodeSandbox';

  botoes: Botao[] = [
    new Botao('Autorizar', () => this.autorizar()),
    new Botao('Baixar', () => this.onOpenedModalBaixar()),
    new Botao('Enviar para IB', () => this.openModalEnviarIB()),
  ];

  autorizar() {

  }

  onOpenedModalBaixar() {

  }

  openModalEnviarIB() {}
}
