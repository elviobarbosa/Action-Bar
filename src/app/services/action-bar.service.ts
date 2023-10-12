import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Botao } from 'src/app/action-bar/entities/action-bar.model';

@Injectable({
  providedIn: 'root'
})
export class ActionBarService {

  private _selectedItemsSubject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  private _selectedItems: any;
  private _autorizados: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  private _autorizarButton: Botao = new Botao('Autorizar', {
    submenu: [
      {
        label: 'Autorizar todos',
        fn: () => this._autorizarTodos()
      },
      {
        label: 'Autorizar selecionados',
        fn: () => this._autorizarSelecionados()
      }
    ]
  });
  private _baixarButton: Botao = new Botao('Baixar', {
    disable: false,
    submenu: [{
      label: 'Buu todos',
        fn: () => this._autorizarTodos()
    }]
  });
  private _enviarButton: Botao = new Botao('Enviar para IB');

  get botoes() {
    return [
      this._autorizarButton,
      this._baixarButton,
      this._enviarButton
    ]
  }

  get autorizados$(): Observable<any> {
    return this._autorizados;
  }

  set selectedItems(items: any) {
    this._selectedItemsSubject.next(items);
  }

  get selectedItems$(): Observable<string[]> {
    return this._selectedItemsSubject.asObservable();
  }

  constructor() {
    this.selectedItems$.subscribe(selectedItems => {
       if (this._autorizarButton.submenu) {
        this._selectedItems = selectedItems;
        const disable: boolean = this._hasSelected(selectedItems);
        this._autorizarButton.disable = disable;
        this._autorizarButton.submenu[1].disable = disable;
      }
    });
  }

  private _hasSelected(items: any): boolean {
    if (items) {
      return Object.values(items).every((item) => item === false);
    }
    return true;
  }

  private _autorizarTodos() {  }
  private _autorizarSelecionados() {
    this._autorizados.next(Object.values(this._selectedItems).find((item) => item));
  }

}
