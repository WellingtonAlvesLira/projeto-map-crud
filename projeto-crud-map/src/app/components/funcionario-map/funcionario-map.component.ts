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
  constructor(private funcionarioService: FuncionarioMapService) { }

  ngOnInit() {
    this.listar_funcionario()
  }

  listar_funcionario(){
    this.funcionarioService.list_funcionario().subscribe(res => this.funcionarioMap = res)
  }

  delete_funcionario(id){
    if (window.confirm("Tem certeza?")) {
      this.funcionarioService.delete_funcionario(id).subscribe();
      alert("Funcionário deletado com sucesso!");
      this.listar_funcionario();
    }


  }

  edit_funcionario(id){
   alert(id)     
  }


}
