import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { ICotacao } from '../models/cotacao.model';
import { IOptionsMoedas } from '../models/options.model';
import { MoedaService } from './../moeda.service';

@Component({
  selector: 'app-wireframe',
  templateUrl: './wireframe.component.html',
  styleUrls: ['./wireframe.component.css'],
})
export class WireframeComponent implements OnInit {
  listMoeda: IOptionsMoedas[] = [
    {
      ID: 'AUD',
      TEXT: 'Dolar autraliano',
    },
    {
      ID: 'CAD',
      TEXT: 'Dolar canadense',
    },
    {
      ID: 'EUR',
      TEXT: 'Euro',
    },
    {
      ID: 'USD',
      TEXT: 'Dolar dos Estados Unidos',
    },
  ];

  moedaSelecionada: string = '';
  cotacoes$!: Observable<ICotacao[]>;
  // cotacoes: ICotacao[] = [];

  // Date as moment formatted string
  dataInicial: string = moment(new Date()).format('YYYY-MM-DD');
  dataFinal: string = moment(new Date()).format('YYYY-MM-DD');

  constructor(private moedaService: MoedaService) {}
  //"AUD","07-06-2022","07-25-2022"

  obterTodosMoedas() {
    // usando promise
    /* firstValueFrom(
      this.moedaService.obterTodos(
        this.moedaSelecionada,
        moment(this.dataInicial).format('MM-DD-YYYY'),
        moment(this.dataFinal).format('MM-DD-YYYY')
      )
    )
      .then((cotacoes: ICotacao[]) => {
        this.cotacoes = cotacoes;
      })
      .catch((erro) => console.error(erro)); */

    this.cotacoes$ = this.moedaService.obterTodos(
      this.moedaSelecionada,
      moment(this.dataInicial).format('MM-DD-YYYY'),
      moment(this.dataFinal).format('MM-DD-YYYY')
    );
  }

  ngOnInit(): void {}

  checarDataInicialEFinal() {
    return moment(this.dataInicial).isAfter(this.dataFinal)
  }
  
}
