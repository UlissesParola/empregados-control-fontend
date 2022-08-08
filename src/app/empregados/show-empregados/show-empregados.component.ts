import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmpregadosApiService } from 'src/app/empregados-api.service';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-show-empregados',
  templateUrl: './show-empregados.component.html',
  styleUrls: ['./show-empregados.component.css']
})

export class ShowEmpregadosComponent implements OnInit {

  empregadoList$!:Observable<any[]>;
  empregadoList:any = [];
  escolaridadeList$!:Observable<any[]>;
  escolaridadeList:any=[];
  funcaoList$!:Observable<any[]>;
  funcaoList:any = [];
  actualPage: number = 1;


  escolaridadeMap:Map<number, string> = new Map();
  funcaoMap:Map<number, string> = new Map();

  constructor(private service:EmpregadosApiService ) { }

  ngOnInit(): void {
    this.empregadoList$ = this.service.getEmpregadolist();
    this.escolaridadeList$ = this.service.getEscolaridadeList();
    this.funcaoList$ = this.service.getFuncaoList();
    this.refreshEmpregadoList()
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
      dataDeNascimento: '',
      funcaoId:null,
      escolaridadeId:null
    }
    this.modalTitle = "Adicionar Empregado";
    this.activateAddEditEmpregadoComponent = true;
  }

  ModalEdit(item:any){
    this.empregado = item;
    this.modalTitle = "Editar Empregado";
    this.activateAddEditEmpregadoComponent = true;
  }

  Delete(item:any)
  {
    if(confirm(`Você realmente quer excluir ${item.nome}?`)){
      this.service.deleteEmpregado(item.id).subscribe(res =>{

      var showDeleteSuccess = document.getElementById('delete-success-alert');
      if(showDeleteSuccess){
        showDeleteSuccess.style.display = "block";
      }

      setTimeout(function(){
        if(showDeleteSuccess){
          showDeleteSuccess.style.display = "none";
        }
      }, 4000);
      this.refreshEmpregadoList();
      });
    }
  }

  modalClose(){
    this.activateAddEditEmpregadoComponent = false;
    this.refreshEmpregadoList();
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

  refreshEmpregadoList(){
    this.service.getEmpregadolist().subscribe(data =>{
      if (data != null) {
        this.hideLoader();
      }

      this.empregadoList = data;
    })
  }

  dateMask(item:string){
    var str = item;

    var [year, month, day] = str.split('-');

    return `${day}/${month}/${year}`;
  }

  hideLoader(){
    document.getElementById('loading_api')!.style.display = 'none';
  }

}
