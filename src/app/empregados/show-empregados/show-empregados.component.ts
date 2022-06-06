import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmpregadosApiService } from 'src/app/empregados-api.service';

@Component({
  selector: 'app-show-empregados',
  templateUrl: './show-empregados.component.html',
  styleUrls: ['./show-empregados.component.css']
})
export class ShowEmpregadosComponent implements OnInit {

  empregadoList$!:Observable<any[]>;
  escolaridadeList$!:Observable<any[]>;
  escolaridadeList:any=[];
  funcaoList$!:Observable<any[]>;
  funcaoList:any = [];

  escolaridadeMap:Map<number, string> = new Map();
  funcaoMap:Map<number, string> = new Map();

  constructor(private service:EmpregadosApiService ) { }

  ngOnInit(): void {
    this.empregadoList$ = this.service.getEmpregadolist();
    this.escolaridadeList$ = this.service.getEscolaridadeList();
    this.funcaoList$ = this.service.getFuncaoList();
    this.refreshEscolaridadeMap();
    this.refreshFuncaoMap();
  }

  modalTitle:string = '';
  activateAddEditEmpregadoComponent:boolean = false;
  empregado:any;

  modalAdd(){
    this.empregado = {
      id:0,
      matricula:'',
      nome:'',
      dataDeNascimento: null,
      funcaoId:null,
      escolaridadeId:null
    }
    this.modalTitle = "Adicionar Empregado";
    this.activateAddEditEmpregadoComponent = true;
  }

  modalClose(){
    this.activateAddEditEmpregadoComponent = false;
    this.empregadoList$ = this.service.getEmpregadolist();
  }

  refreshEscolaridadeMap(){
    this.service.getEscolaridadeList().subscribe(data =>{
        this.escolaridadeList = data;

        for (let i = 0; i < data.length; i++){
          this.escolaridadeMap.set(this.escolaridadeList[i].id, this.escolaridadeList[i].nivelEscolaridade);
        }
    })
  }

  refreshFuncaoMap(){
    this.service.getFuncaoList().subscribe(data =>{
      this.funcaoList = data;

      for (let i = 0; i < data.length; i++){
        this.funcaoMap.set(this.funcaoList[i].id, this.funcaoList[i].nomeFuncao);
      }
  })
  }

}
