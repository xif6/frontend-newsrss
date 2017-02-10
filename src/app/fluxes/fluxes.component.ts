import { Component, OnInit } from '@angular/core';

import { FluxesService } from './fluxes.service';

@Component({
  selector: 'app-fluxes',
  templateUrl: './fluxes.component.html',
  styleUrls: ['./fluxes.component.css']
})
export class FluxesComponent implements OnInit {

  protected fluxes: fluxes[];

  constructor(protected FluxesService: FluxesService) { }

  ngOnInit() {
    this.FluxesService.getFluxesFromAPI()
      .subscribe(
        res => this.fluxes = res,
        err => console.error(err.status)
      );
  }

}

export interface fluxes {
  flux: flux;
  date: boolean;
  category: boolean;
  description: boolean;
  flux_nb: number;
  rank: number;
  style: string;
}

export interface flux {
  id: number;
  name: string;
  slug: string;
  site: site;
  url: string;
  description: string;
  display: boolean;
  active: boolean;
  'new': boolean;
  created_at: Date;
  updated_at: Date;
}

export interface site {
  id: number;
  name: string;
  url: string;
  flux: item[];
  updated_at: Date;
}

export interface item {
  id: number;
  name: string;
  slug: string;
  url: string;
  description?: string;
  display: boolean;
  active: boolean;
  'new': boolean;
  updated_at: Date;
}

