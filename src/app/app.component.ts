import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth/auth.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  @ViewChild('loginModal') protected loginModal: LoginComponent;
  @ViewChild('registerModal') protected registerModal: RegisterComponent;

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
    this.loginModal.show();
  }

  register() {
    this.registerModal.show();
  }
}
