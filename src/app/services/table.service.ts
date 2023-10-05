import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  private _formValueSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  private _resultsSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  set results(items: any) {
    this._resultsSubject.next(items);
  }

  get results$(): Observable<any> {
    return this._resultsSubject.asObservable();
  }

  constructor() { }

  set checked(formValue: any) {
    this._formValueSubject.next(formValue);
  }

  get formValue$(): BehaviorSubject<any> {
    return this._formValueSubject;
  }
}
