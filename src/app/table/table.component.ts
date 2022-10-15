import { Component, Input, OnInit } from '@angular/core';
import { ICotacao } from '../models/cotacao.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() cotacoes!: ICotacao[] | null;

  constructor() {}

  ngOnInit(): void {}
}
