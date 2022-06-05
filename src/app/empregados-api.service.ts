import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpregadosApiService {
  readonly empregadosAPIUrl = "https://localhost:7082/api";

  constructor(private http:HttpClient) { }

  getEmpregadolist():Observable<any[]> {
    return this.http.get<any>(this.empregadosAPIUrl + `/Empregados`);
  }

  addEmpregado(data:any) {
    return this.http.post(this.empregadosAPIUrl + `/Empregados`, data);
  }

  updateEmpregado(id:number|string, data:any) {
    return this.http.put(this.empregadosAPIUrl + `/Empregados/${id}`, data);
  }

  deleteEmpregado(id:number|string) {
    return this.http.delete(this.empregadosAPIUrl + `/Empregados/${id}`);
  }

  getEscolaridadeList():Observable<any[]> {
    return this.http.get<any>(this.empregadosAPIUrl + `/Escolaridades`);
  }

  getEscolaridade(id:number|string) {
    return this.http.get(this.empregadosAPIUrl + `/Escolaridades/${id}`);
  } 

  getFuncaoList():Observable<any[]> {
    return this.http.get<any>(this.empregadosAPIUrl + `/Funcoes`);
  }

  getFuncao(id:number|string) {
    return this.http.get(this.empregadosAPIUrl + `/Funcoes/${id}`);
  }
}
