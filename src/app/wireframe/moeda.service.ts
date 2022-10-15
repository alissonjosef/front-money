import { API_PATH } from './../../environments/environment';
import { IModas } from './IApi';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoedaService {

  constructor(private httClient: HttpClient) { }

  obterTodos(){
  
  }
}
