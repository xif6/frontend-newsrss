import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';

import { AlertModule, ModalModule, DropdownModule } from 'ng2-bootstrap';
import { AuthHttp, AuthConfig } from 'angular2-jwt';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { AuthService } from './auth/auth.service';
import { LoginComponent, } from './login/login.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { RegisterComponent } from './register/register.component';
import { AddFluxComponent } from './add-flux/add-flux.component';
import { FluxItemsFilterPipe } from './fluxes/flux-items-filter.pipe';
import { FluxesComponent } from './fluxes/fluxes.component';
import { FluxesService } from './fluxes/fluxes.service';
import { FluxComponent } from './fluxes/flux.component';

export function authHttpServiceFactory(
  http: Http,
  options: RequestOptions
) {
  return new AuthHttp(new AuthConfig(), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AddFluxComponent,
    FluxesComponent,
    FluxItemsFilterPipe,
    FluxComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    DropdownModule.forRoot(),
  ],
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    },
    AuthService,
    AuthGuardService,
    FluxesService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
