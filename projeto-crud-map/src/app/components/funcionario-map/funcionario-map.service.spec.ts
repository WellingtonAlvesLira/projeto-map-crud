import { TestBed } from '@angular/core/testing';

import { FuncionarioMapService } from './funcionario-map.service';

describe('FuncionarioMapService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FuncionarioMapService = TestBed.get(FuncionarioMapService);
    expect(service).toBeTruthy();
  });
});
