import { Component, Host, OnChanges, Self, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TableService } from '../services/table.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    @Host() public  servTable: TableService) {
    this.form = this.formBuilder.group({
      item1: false,
      item2: false,
    });
  }

  checkHandler(check: boolean) {
    this.servTable.checked = this.form.value;
  }

}
