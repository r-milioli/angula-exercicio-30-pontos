import { TestBed } from '@angular/core/testing';

import { CalcularAreaService } from './calcular-area.service';

describe('CalcularAreaService', () => {
  let service: CalcularAreaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcularAreaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
