import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { FluxesService } from '../fluxes/fluxes.service';

@Component({
  selector: 'app-add-flux',
  templateUrl: './add-flux.component.html',
  styleUrls: ['./add-flux.component.css']
})
export class AddFluxComponent implements OnInit {

  protected form: FormGroup;

  constructor(
    protected formBuilder: FormBuilder,
    protected fluxesService: FluxesService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      'q': ['', [Validators.required, Validators.minLength(1)]],
    });
  }

  submit() {
    this.fluxesService.postFlux(this.form.value.q).subscribe(
      () => this.fluxesService.clearCache(),
      err => {this.fluxesService.clearCache(); console.error(err);}
    );
  }

}
