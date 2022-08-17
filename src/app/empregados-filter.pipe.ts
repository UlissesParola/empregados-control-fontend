import { Pipe, PipeTransform } from '@angular/core';
import { ShowEmpregadosComponent } from './empregados/show-empregados/show-empregados.component';

@Pipe({
  name: 'filter'
})
export class EmpregadosFilterPipe implements PipeTransform {

 constructor(
  private showEmpregadosComponent : ShowEmpregadosComponent
 ){}

  transform(empregados: any, term: any): any {
    if (term === undefined) {
      return empregados;
    }

    return empregados.filter((empregado : any) => {
      if (empregado.nome.toLowerCase().includes(term.toLowerCase())
        || empregado.matricula.toLowerCase().includes(term.toLowerCase())
        || empregado.dataDeNascimento.toLowerCase().includes(term.toLowerCase())
        || this.showEmpregadosComponent.funcaoMap.get(empregado.funcaoId)?.toLowerCase().includes(term.toLowerCase())
        || this.showEmpregadosComponent.escolaridadeMap.get(empregado.escolaridadeId)?.toLowerCase().includes(term.toLowerCase())
      ) {
        return true;
      }
      return false;
      })
  }
}
