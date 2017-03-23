import { Component, OnInit } from '@angular/core';

import { FluxesService } from './fluxes.service';
import { Items, Fluxes } from '../shared/fluxes';

@Component({
  selector: 'app-fluxes',
  templateUrl: './fluxes.component.html',
  styleUrls: ['fluxes-custom.component.css', './fluxes-custom.component.css']
})
export class FluxesComponent implements OnInit {

  protected fluxes: Fluxes[];
  protected items: Items[];

  constructor(protected FluxesService: FluxesService) { }

  ngOnInit() {
    this.FluxesService.getFluxes()
      .subscribe(
        res => this.fluxes = res,
        err => console.error(err)
      );

    this.FluxesService.getItems()
      .subscribe(
        res => this.items = res,
        err => console.error(err)
      );
  }

}
