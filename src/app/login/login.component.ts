import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ModalDirective } from 'ng2-bootstrap';

import { AuthService } from '../auth/auth.service';
import { AuthGuardService } from '../auth/auth-guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('modal') protected modal: ModalDirective;

  loading = false;
  error: string;
  loginForm: FormGroup;
  protected redirect: string;

  constructor(
    private authService: AuthService,
    private authGuardService: AuthGuardService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'username': ['', [Validators.required, Validators.minLength(3)]],
      'password': ['', Validators.required]
    });
    this.authGuardService.mustAuthenticate$.subscribe(
      route => {
        this.redirect = route;
        this.show();
      }
    );
  }

  login() {
    this.loading = true;
    this.authService.login(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe(
        () => {
          console.log(this.router);
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

  show(route = null) {
    this.modal.show();
  }

  hide() {
    this.modal.hide();
  }
}
