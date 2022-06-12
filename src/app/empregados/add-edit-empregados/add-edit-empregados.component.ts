import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmpregadosApiService } from 'src/app/empregados-api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-empregados',
  templateUrl: './add-edit-empregados.component.html',
  styleUrls: ['./add-edit-empregados.component.css']
})
export class AddEditEmpregadosComponent implements OnInit {

  addEmpregadosFormGroup: FormGroup;
  empregadosList$!: Observable<any[]>;
  funcaoList$!: Observable<any[]>;
  escolaridadeList$!: Observable<any[]>;

  constructor(private service:EmpregadosApiService, private formBuilder: FormBuilder) { 

    this.addEmpregadosFormGroup = this.formBuilder.group({
      matricula: ['', [
        Validators.required,
        Validators.pattern('^[Cc]{1}\d{6}$')]],
      nome: ['', Validators.required,],
      dataDeNascimento: ['', Validators.required]
    });

  }

  @Input() empregado:any;
  id: number = 0;
  matricula:string = '';
  nome:string = '';
  dataDeNascimento:string = '';
  funcaoId:number = 0;
  escolaridadeId:number = 0;

  ngOnInit(): void {
    this.id = this.empregado.id;
    this.matricula = this.empregado.matricula;
    this.nome = this.empregado.nome;
    this.dataDeNascimento = this.empregado.dataDeNascimento;
    this.funcaoId = this.empregado.funcaoId;
    this.escolaridadeId = this.empregado.escolaridadeId;

    this.empregadosList$ = this.service.getEmpregadolist();
    this.funcaoList$ = this.service.getFuncaoList();
    this.escolaridadeList$ = this.service.getEscolaridadeList();
  }

  addEmpregado(){
    var empregado = {
      matricula: this.matricula,
      nome:this.nome,
      dataDeNascimento:this.dataDeNascimento,
      funcaoId:this.funcaoId,
      escolaridadeId:this.escolaridadeId
    }

    this.service.addEmpregado(empregado).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn){
        closeModalBtn.click();
      }  

      var showAddSuccess = document.getElementById('add-success-alert');
      if(showAddSuccess){
        showAddSuccess.style.display = "block";
      }

      setTimeout(function(){
        if(showAddSuccess){
          showAddSuccess.style.display = "none";
        }  
      }, 4000);

    });
    
  }

  updateEmpregado(){
    var empregado = {
      id: this.id,
      matricula: this.matricula,
      nome:this.nome,
      dataDeNascimento:this.dataDeNascimento,
      funcaoId:this.funcaoId,
      escolaridadeId:this.escolaridadeId
    }

    var id:number = this.id;

    this.service.updateEmpregado(id, empregado).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn){
        closeModalBtn.click();
      }  

      var showUpdateSuccess = document.getElementById('update-success-alert');
      if(showUpdateSuccess){
        showUpdateSuccess.style.display = "block";
      }

      setTimeout(function(){
        if(showUpdateSuccess){
          showUpdateSuccess.style.display = "none";
        }  
      }, 4000);

    });
    
  }
}
