import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { FluxesService } from './fluxes.service';
import { AllItems, Flux, Fluxes } from '../shared/fluxes';

@Component({
  selector: 'app-fluxes',
  templateUrl: './fluxes.component.html',
  styleUrls: ['./fluxes.component.css']
})
export class FluxesComponent implements OnInit {

  protected fluxes: Observable<Fluxes[]>;
  protected allItems: Observable<AllItems>;

  constructor(protected fluxesService: FluxesService) { }

  ngOnInit() {
    this.fluxesService.getFluxes()
      .subscribe(
        res => this.fluxes = res,
        err => console.error(err)
      );

    this.fluxesService.getAllItems()
      .subscribe(
        res => this.allItems = res,
        err => console.error(err)
      );
  }

  refresh() {
    this.fluxesService.clearCache();
    this.ngOnInit();
  }

  trackById(index: number, flux: Flux): number {
    return flux.id;
  }
}
