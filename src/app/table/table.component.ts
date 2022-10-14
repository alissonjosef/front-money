import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  cotacao = [
    {
      cotacaoCompra: 5.5084,
      cotacaoVenda: 5.5112,
      dataHoraCotacao: "2022-07-06 10:06:15.609"
    },
    {
      cotacaoCompra: 5.5084,
      cotacaoVenda: 5.5112,
      dataHoraCotacao: "2022-07-06 10:06:15.609"
    },
    {
      cotacaoCompra: 5.5084,
      cotacaoVenda: 5.5112,
      dataHoraCotacao: "2022-07-06 10:06:15.609"
    },
    {
      cotacaoCompra: 5.5084,
      cotacaoVenda: 5.5112,
      dataHoraCotacao: "2022-07-06 10:06:15.609"
    },{
      cotacaoCompra: 5.5084,
      cotacaoVenda: 5.5112,
      dataHoraCotacao: "2022-07-06 10:06:15.609"
    },{
      cotacaoCompra: 5.5084,
      cotacaoVenda: 5.5112,
      dataHoraCotacao: "2022-07-06 10:06:15.609"
    }
  ]
  @Input() informacao: string | undefined;
  
  constructor() {
    
  }

  ngOnInit(): void {
  }

}
