import { TestBed, inject } from '@angular/core/testing';

import { FluxesService } from './fluxes.service';

describe('fluxesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FluxesService]
    });
  });

  it('should ...', inject([FluxesService], (service: FluxesService) => {
    expect(service).toBeTruthy();
  }));
});
