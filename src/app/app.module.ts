import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

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
    OrderModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,

  ],
  providers: [EmpregadosApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
