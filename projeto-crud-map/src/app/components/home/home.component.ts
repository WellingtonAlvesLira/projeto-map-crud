import { Component, OnInit } from '@angular/core';

import { Funcionario } from '../funcionario-map/funcionario';
import { HomeService } from './home.service';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private FormFuncionarioMap: FormGroup;
  funcionarioMap : Funcionario [];
  message = '';

  constructor( private FormBuilder: FormBuilder, private homeService: HomeService) {
    this.FormFuncionarioMap = this.FormBuilder.group({
       nome_funcionario: ['',this.valid_form],
       email_funcionario: ['',this.valid_form,],
       contato_funcionario: ['',this.valid_form],
       cargo_funcionario: ['',this.valid_form],
       endereco_funcionario: ['',this.valid_form],
       cidade_funcionario: ['',this.valid_form],
       estado_funcionario: ['',this.valid_form],
    })
   }
  
  

  ngOnInit() {
    
 }

 cadastrar_funcionario(){
     if(this.FormFuncionarioMap.value !== ''){
      this.homeService.cadastrar_funcionario(this.FormFuncionarioMap.value).subscribe();
      this.message = 'Funcionário cadastrado com sucesso'
      setTimeout(() => this.message = "", 4000);
      this.limpar_form()
     }else{
      alert('Error ao salvar')
     }

 }

 valid_form(input: FormControl){
   return (input.value ? null : {obrigatorio: true})
 }

 limpar_form(){
  this.FormFuncionarioMap.reset()
 }


}
