import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { BsDropdownToggleDirective } from 'ngx-bootstrap';
import { Observable } from 'rxjs/Observable';

import { Fluxes, Item } from '../shared/fluxes';
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
  @Input() allItems: Item[];

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

  refresh(fluxId) {
    this.fluxesService.getItems(fluxId)
      .subscribe(
        allItems => {
          this.bsDropdownToggle.onEsc();
          this.allItems = allItems;
        },
        err => console.error(err)
      );
  }

  trackByUrl(index: number, item: Item): string {
    return item.url;
  }

  addBookmark (item: Item) {
    this.fluxesService.postBookmark(item)
      .subscribe(
        () => {
          item.bookmark = true;
        },
        err => console.error(err)
      );
  }

  removeBookmark (item: Item) {
    this.fluxesService.deleteBookmark(item)
      .subscribe(
        () => {
          item.bookmark = false;
        },
        err => console.error(err)
      );
  }

  addSave (item: Item) {
    this.fluxesService.postSave(item)
      .subscribe(
        () => {
          item.save = true;
        },
        err => console.error(err)
      );
  }

  removeSave (item: Item) {
    this.fluxesService.deleteSave(item)
      .subscribe(
        () => {
          item.save = false;
        },
        err => console.error(err)
      );
  }

  read (item: Item) {
    this.fluxesService.read(item)
      .subscribe(
        () => {
          item.read = true;
        },
        err => console.error(err)
      );
  }

}
