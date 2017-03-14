import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AlertModule } from 'ng2-bootstrap';
import { AuthHttp, AuthConfig } from 'angular2-jwt';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FluxesModule } from './fluxes/fluxes.module';

import { AuthService } from './auth/auth.service';
import { LoginComponent, } from './login/login.component';
import { LoginDialogComponent } from './login/login-dialog.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { SubscribeComponent } from './subscribe/subscribe.component';

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
    SubscribeComponent,
    LoginDialogComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    FluxesModule,
    AlertModule.forRoot(),
    MaterialModule,
  ],
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    },
    AuthService,
    AuthGuardService
  ],
  entryComponents: [LoginDialogComponent],
  bootstrap: [AppComponent]
})

export class AppModule {
}
