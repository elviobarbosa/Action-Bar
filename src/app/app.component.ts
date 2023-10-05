import { Component, OnInit } from '@angular/core';
import { Botao } from 'src/app/action-bar/entities/action-bar.model';
import { ActionBarService } from './services/action-bar.service';
import { TableService } from './services/table.service'; // Importe o TableService

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    private readonly _servActioBar: ActionBarService,
    private readonly _servTable: TableService
  ) {
    this._servTable.formValue$.subscribe((value) => {
      this._servActioBar.selectedItems = value;
    });
    
    this._servActioBar.autorizados$.subscribe((value) => {
      this._servTable.results = value;
    })
  }

  title = 'CodeSandbox';
  botoes: Botao[] = this._servActioBar.botoes;

}
