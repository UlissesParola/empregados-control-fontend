import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';

import { AppComponent } from './app.component';
import { EmpregadosComponent } from './empregados/empregados.component';
import { ShowEmpregadosComponent } from './empregados/show-empregados/show-empregados.component';
import { AddEditEmpregadosComponent } from './empregados/add-edit-empregados/add-edit-empregados.component';
import { EmpregadosApiService } from './empregados-api.service';
import { EmpregadosFilterPipe } from './empregados-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmpregadosComponent,
    ShowEmpregadosComponent,
    AddEditEmpregadosComponent,
    EmpregadosFilterPipe
  ],
  imports: [
    OrderModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,

  ],
  providers: [EmpregadosApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
