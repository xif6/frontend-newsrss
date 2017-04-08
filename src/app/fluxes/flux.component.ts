import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { Fluxes, Items } from '../shared/fluxes';

@Component({
  selector: 'app-flux',
  templateUrl: 'flux.component.html',
  styleUrls: ['flux.component.css'],
})
export class FluxComponent implements OnInit {

  protected form: FormGroup;
  protected isOpen = false;

  @Input() flux: Fluxes;
  @Input() items: Items;

  protected colors = [
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

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      'desc': [this.flux.description],
      'nb_news': [this.flux.flux_nb, Validators.required],
      'color': [this.flux.style, Validators.required],
    });
  }

  onEvent(event) {
    event.stopPropagation();
  }

  toggleDropdown(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isOpen = !this.isOpen;
  }

  submit() {
    console.log(this.form.value);
    this.isOpen = false;
  }

}
