import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';


import { FluxesComponent } from './fluxes.component';
import { FluxesService } from './fluxes.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    MaterialModule.forRoot(),
  ],
  declarations: [ FluxesComponent ],
  providers: [ FluxesService ]
})
export class FluxesModule { }
