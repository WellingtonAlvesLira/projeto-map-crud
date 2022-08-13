import { Component, OnInit } from '@angular/core';
import { Funcionario } from './funcionario';
import { FuncionarioMapService } from './funcionario-map.service';

@Component({
  selector: 'app-funcionario-map',
  templateUrl: './funcionario-map.component.html',
  styleUrls: ['./funcionario-map.component.css']
})
export class FuncionarioMapComponent implements OnInit {

  funcionarioMap: Funcionario [];
  message = '';
  constructor(private funcionarioService: FuncionarioMapService) { }

  ngOnInit() {
    this.listar_funcionario()
  }

  listar_funcionario(){
    this.funcionarioService.list_funcionario().subscribe(res => this.funcionarioMap = res)
    
  }

  delete_funcionario(id,nome){
      this.funcionarioService.delete_funcionario(id).subscribe();
      this.listar_funcionario();
      this.showMsg(nome);
  }

  edit_funcionario(id){
   alert(id)     
  }

  showMsg(nome){
    this.message = `Funcionário ${nome} deletado com sucesso!`
    setTimeout(() => this.message = "", 4000);
  }


}
