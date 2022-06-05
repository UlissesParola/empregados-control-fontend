import { TestBed } from '@angular/core/testing';

import { EmpregadosApiService } from './empregados-api.service';

describe('EmpregadosApiService', () => {
  let service: EmpregadosApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpregadosApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
