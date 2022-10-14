import { IModas } from './wireframe/IApi';
import { API_PATH } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoedaService {

  constructor(private httClient: HttpClient) { }

  obterTodos(){
    return this.httClient.get<IModas>(`${API_PATH}`).toPromise()
  }

  /* obterTodos(money: string, startDate: string, finalDate: string){
    return this.httClient.get<IModas>(`https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaPeriodo(moeda=@moeda,dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)?@moeda=${money}&@dataInicial=${startDate}&@dataFinalCotacao=${finalDate}&$top=1000&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`).toPromise()
  } */
}
