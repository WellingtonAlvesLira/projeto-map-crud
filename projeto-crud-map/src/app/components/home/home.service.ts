import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private readonly API = 'http://localhost:3000/funcionario';

  constructor(private http: HttpClient) { }
   
  cadastrar_funcionario(funcionario){
   return this.http.post(this.API, funcionario).pipe(
     
    )
  }
 
}