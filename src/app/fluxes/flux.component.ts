import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { BsDropdownToggleDirective } from 'ngx-bootstrap';

import { Fluxes, Items } from '../shared/fluxes';
import { FluxesService } from './fluxes.service';

@Component({
  selector: 'app-flux',
  templateUrl: 'flux.component.html',
  styleUrls: ['flux.component.css'],
})
export class FluxComponent implements OnInit {

  protected form: FormGroup;

  @ViewChild('bsDropdownToggle') protected bsDropdownToggle: BsDropdownToggleDirective;

  @Input() flux: Fluxes;
  @Input() items: Items;

  protected styles = [
    {
      id: 'default',
      name: 'defaut',
    },
    {
      id: 'blue',
      name: 'bleu',
    },
    {
      id: 'orange',
      name: 'orange',
    },
    {
      id: 'pink',
      name: 'rose',
    },
    {
      id: 'green',
      name: 'vert',
    },
    {
      id: 'turquoise',
      name: 'turquoise',
    },
    {
      id: 'grey',
      name: 'gris',
    },
    {
      id: 'red',
      name: 'rouge',
    },
    {
      id: 'yellow',
      name: 'jaune',
    },
    {
      id: 'light_pink',
      name: 'rose_pale',
    },
  ];

  constructor(private formBuilder: FormBuilder, private fluxesService: FluxesService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      'description': [this.flux.description],
      'flux_nb': [this.flux.flux_nb, Validators.required],
      'style': [this.flux.style, Validators.required],
    });
  }

  onEvent(event) {
    event.stopPropagation();
  }

  submit() {
    this.fluxesService.patchFluxSettings(this.form.value)
      .subscribe(
        () => this.bsDropdownToggle.onEsc(),
        err => console.error(err)
      );
  }

}
