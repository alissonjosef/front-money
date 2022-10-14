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
}
