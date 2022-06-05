import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEmpregadosComponent } from './show-empregados.component';

describe('ShowEmpregadosComponent', () => {
  let component: ShowEmpregadosComponent;
  let fixture: ComponentFixture<ShowEmpregadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowEmpregadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowEmpregadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
