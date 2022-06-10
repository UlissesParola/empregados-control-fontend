import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmpregadosApiService } from 'src/app/empregados-api.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

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
      this.empregadoList$ = this.service.getEmpregadolist();
      });
    }
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

  dateMask(item:string){
    var str = item;

    var [year, month, day] = str.split('-');
    
    return `${day}/${month}/${year}`;
  }

  public createPDF(): void {
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('ListaEmpregados.pdf');
    });
  }

}
