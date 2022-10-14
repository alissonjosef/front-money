import { MoedaService } from './../moeda.service';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-wireframe',
  templateUrl: './wireframe.component.html',
  styleUrls: ['./wireframe.component.css']
})
export class WireframeComponent implements OnInit {

  listMoeda:any[] = [
    {
      "ID":"AUD",
      "TEXT": "Dolar autraliano"
    },
    {
      "ID":"CAD",
      "TEXT": "Dolar canadense"
    },
    {
      "ID":"EUR",
      "TEXT": "Euro"
    },
    {
      "ID":"USD",
      "TEXT": "Dolar dos Estados Unidos"
    },
  ]
  @Output() informacao = "Alisson silva";

  constructor(private moedaService: MoedaService) { }
  //"AUD","07-06-2022","07-25-2022"

  obterTodosMoedas(){
    this.moedaService.obterTodos()
    .then(moedas => {
      console.log(moedas?.value)
    })
    .catch(erro => console.error(erro)
    )
  }

  ngOnInit(): void {
    this.moedaService
  }

}
