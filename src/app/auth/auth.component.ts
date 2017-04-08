import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap';

import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  @ViewChild('modal') protected modal: ModalDirective;

  protected action: 'login'|'register';
  protected formLogin: FormGroup;
  protected redirect: string;
  protected loading = false;
  protected error: string;
  protected formRegister: FormGroup;

  constructor(
    private authService: AuthService,
    private authGuardService: AuthGuardService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      'username': ['', [Validators.required, Validators.minLength(3)]],
      'password': ['', Validators.required]
    });

    this.formRegister = this.formBuilder.group({
      'email': ['', [Validators.required, Validators.email]],
      'username': ['', [Validators.required, Validators.minLength(3)]],
      'password': ['', Validators.required]
    });

    this.authGuardService.mustAuthenticate$.subscribe(
      route => {
        this.redirect = route;
        this.show('login');
      }
    );

  }

  submitLogin() {
    this.loading = true;
    this.authService.login(this.formLogin.value)
      .subscribe(
        () => {
          this.hide();
          if (this.redirect) {
            this.router.navigate([this.redirect]);
          }
        },
        () => {
          this.error = 'Username or password is incorrect';
          this.loading = false;
        }
      );
  }

  submitRegister() {
    this.loading = true;
    this.authService.register(this.formRegister.value)
      .subscribe(
        () => {
          this.hide();
          if (this.redirect) {
            this.router.navigate([this.redirect]);
          }
        },
        () => {
          this.error = 'Error';
          this.loading = false;
        }
      );
  }

  show(action) {
    this.action = action;
    this.modal.show();
  }

  hide() {
    this.modal.hide();
  }
}
