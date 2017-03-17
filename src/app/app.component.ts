import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth/auth.service';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  @ViewChild('loginModal') protected loginModal: LoginComponent;
  @ViewChild('registrationModal') protected registrationModal: RegistrationComponent;

  constructor(protected authService: AuthService, protected router: Router) {}

  hasAuthToken() {
    return this.authService.authenticated();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  login() {
    this.loginModal.show();
  }

  subscribe() {
    this.registrationModal.show();
  }
}
