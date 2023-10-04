import { Component, OnInit } from '@angular/core';
import { Botao } from 'src/entidades/Botao';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  constructor() {}

  title = 'CodeSandbox';
  autorizarButton: Botao = new Botao('Autorizar', {
    disable: true
  }, () => this.autorizar());

  baixarButton: Botao = new Botao('Baixar', {
    disable: true
  }, () => this.autorizar());

  enviarButton: Botao = new Botao('Enviar para IB', {
    disable: true
  }, () => this.autorizar());

  botoes: Botao[] = [
    this.autorizarButton,
    this.baixarButton,
    this.enviarButton,
  ];

  autorizar() {
    console.log('autorizar');
  }
  onOpenedModalBaixar() {}
  openModalEnviarIB() {}

  ngOnInit(): void {
    this.autorizarButton.options.disable = false;
  }
}
