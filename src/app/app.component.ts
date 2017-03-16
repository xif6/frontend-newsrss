import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth/auth.service';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  @ViewChild('modal') protected loginModal: LoginComponent;

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
}
