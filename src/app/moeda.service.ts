import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICotacao } from './models/cotacao.model';

@Injectable({
  providedIn: 'root',
})
export class MoedaService {
  constructor(private httClient: HttpClient) {}

  obterTodos(moeda: string, dataInicial: string, dataFinal: string): Observable<ICotacao[]> {
    return this.httClient.get<any>(
      `${environment.api.API_URL}/CotacaoMoedaPeriodo(moeda=@moeda,dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)`,
      {
        params: {
          ['@moeda']: `'${moeda}'`,
          ['@dataInicial']: `'${dataInicial}'`,
          ['@dataFinalCotacao']: `'${dataFinal}'`,
          $select: 'cotacaoCompra,cotacaoVenda,dataHoraCotacao',
          $format: 'json',
          $top: '1000',
        },
      }
    ).pipe(map((response) => response.value));
  }
}
