import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {tap,take} from 'rxjs/operators'
import { Funcionario } from './funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioMapService {
  private readonly API = 'http://localhost:3000/funcionario';

  constructor(private http: HttpClient) { }

  list_funcionario(){
    return this.http.get<Funcionario[]>(this.API).pipe(
      tap()
    )
  }
  
  delete_funcionario(id){
    return this.http.delete(`${this.API}/${id}`).pipe(
      take(1)
      )
  }


}
