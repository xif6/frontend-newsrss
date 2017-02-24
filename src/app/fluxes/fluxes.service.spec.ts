import { TestBed, async, inject } from '@angular/core/testing';
import { FluxesService } from './fluxes.service';

describe('FluxesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FluxesService]
    });
  });

  it('should ...', inject([FluxesService], (service: FluxesService) => {
    expect(service).toBeTruthy();
  }));
});
