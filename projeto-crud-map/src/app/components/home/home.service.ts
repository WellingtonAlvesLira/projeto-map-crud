import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {tap,take} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private readonly API = 'http://localhost:3000/funcionario';
  private readonly URL_CIDADE = 'http://localhost:3000/cidade';

  constructor(private http: HttpClient) { }
   
  cadastrar_funcionario(funcionario){
   return this.http.post(this.API, funcionario).pipe(
     
    )
  }

  list_cidade(){
    return this.http.get<any []>(this.URL_CIDADE).pipe(
      tap()
    )
  }
 
}