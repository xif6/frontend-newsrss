import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth/auth.service';
import { AuthComponent } from './auth/auth.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  @ViewChild('auth') protected auth: AuthComponent;

  constructor(protected authService: AuthService, protected router: Router) {}

  ngOnInit() {
    this.authService.wantToRegister$.subscribe(
      () => this.register()
    );
  }

  hasAuthToken() {
    return this.authService.authenticated();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  login() {
    this.auth.show('login');
  }

  register() {
    this.auth.show('register');
  }
}
