import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { Flux, Items } from '../shared/fluxes';

@Component({
  // selector: '[app-flux]',
  selector: 'app-flux',
  templateUrl: 'flux.component.html',
  styleUrls: ['flux.component.css']
})
export class FluxComponent implements OnInit {

  @Input() flux: Flux;
  @Input() items: Items;

  constructor() { }

  ngOnInit() {
  }

}
