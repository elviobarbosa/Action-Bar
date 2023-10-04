import { Component, Input } from '@angular/core';
import { Botao } from 'src/entidades/Botao';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.css']
})
export class ActionBarComponent {
  @Input() botoes: Botao[] = [];
}
