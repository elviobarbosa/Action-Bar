import { Component, Input } from '@angular/core';
import { Botao } from 'src/app/action-bar/entities/action-bar.model';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.css']
})
export class ActionBarComponent {
  @Input() botoes: Botao[] = [];
}
