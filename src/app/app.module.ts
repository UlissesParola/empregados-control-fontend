import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmpregadosComponent } from './empregados/empregados.component';
import { ShowEmpregadosComponent } from './empregados/show-empregados/show-empregados.component';
import { AddEditEmpregadosComponent } from './empregados/add-edit-empregados/add-edit-empregados.component';
import { EmpregadosApiService } from './empregados-api.service';

@NgModule({
  declarations: [
    AppComponent,
    EmpregadosComponent,
    ShowEmpregadosComponent,
    AddEditEmpregadosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EmpregadosApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
