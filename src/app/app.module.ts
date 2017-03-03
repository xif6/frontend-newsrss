import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AlertModule } from 'ng2-bootstrap';
import { AUTH_PROVIDERS }      from 'angular2-jwt';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FluxesModule } from './fluxes/fluxes.module';

import { AuthService } from './auth/auth.service';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from "./auth/auth-guard.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    FluxesModule,
    AlertModule.forRoot(),
//    MaterialModule.forRoot(),
  ],
  providers: [
    AUTH_PROVIDERS,
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
