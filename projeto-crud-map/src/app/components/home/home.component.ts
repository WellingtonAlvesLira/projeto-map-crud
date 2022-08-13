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
  cargoFuncionarioMap = [{"id": 1, "cargo": "Dev Front-End Jr"},
           {"id": 2, "cargo": "Dev Back-end Senior"},
           {"id": 3, "cargo": "Devops"},
           {"id": 4, "cargo": "Analista de Sistemas"},
  ]

  listCidade = []

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
  this.listar_cidade()
    
 }

 cadastrar_funcionario(){
     if(this.FormFuncionarioMap.value !== ''){
      this.homeService.cadastrar_funcionario(this.FormFuncionarioMap.value).subscribe();
      this.showMsg();
      this.limpar_form()
     }else{
      alert('Error ao salvar')
     }

 }

 listar_cidade(){
  this.homeService.list_cidade().subscribe((resp =>{
    if(resp){
      this.listCidade = resp;
    }
  }))
 }
//FUNCTION ISOLADAS
 limpar_form(){
  this.FormFuncionarioMap.reset()
 }
  
  showMsg(){  
  let nome = this.FormFuncionarioMap.get('nome_funcionario').value
  this.message = `Funcionário ${nome} cadastrado com sucesso`
  setTimeout(() => this.message = "", 4000);
 }

 valid_form(input: FormControl){
  return (input.value ? null : {obrigatorio: true})
}


}
