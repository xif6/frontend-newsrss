import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AlertModule, ModalModule, BsDropdownModule } from 'ng2-bootstrap';
import { ClickOutsideModule } from 'ng-click-outside';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { AddFluxComponent } from './add-flux/add-flux.component';
import { FluxItemsFilterPipe } from './fluxes/flux-items-filter.pipe';
import { FluxesComponent } from './fluxes/fluxes.component';
import { FluxesService } from './fluxes/fluxes.service';
import { FluxComponent } from './fluxes/flux.component';
import { AuthComponent } from './auth/auth.component';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    AddFluxComponent,
    FluxesComponent,
    FluxItemsFilterPipe,
    FluxComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    AuthModule,
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    ClickOutsideModule,
  ],
  providers: [
    FluxesService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
