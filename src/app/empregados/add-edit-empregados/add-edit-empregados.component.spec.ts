import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditEmpregadosComponent } from './add-edit-empregados.component';

describe('AddEditEmpregadosComponent', () => {
  let component: AddEditEmpregadosComponent;
  let fixture: ComponentFixture<AddEditEmpregadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditEmpregadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditEmpregadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
