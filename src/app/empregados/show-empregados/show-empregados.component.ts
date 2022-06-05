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
  }

}
