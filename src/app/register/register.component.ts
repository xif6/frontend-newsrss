import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDirective } from 'ng2-bootstrap';

import { AuthService } from '../auth/auth.service';
import { AuthGuardService } from '../auth/auth-guard.service';
import { EMAIL_REGEXP } from '../shared/pattern';

@Component({
  selector: 'app-subscribe',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('modal') protected modal: ModalDirective;

  loading = false;
  error: string;
  form: FormGroup;
  protected redirect: string;

  constructor(
    private authService: AuthService,
    private authGuardService: AuthGuardService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      'email': ['', [Validators.required, Validators.pattern(EMAIL_REGEXP)]],
      'username': ['', [Validators.required, Validators.minLength(3)]],
      'password': ['', Validators.required]
    });
  }

  submit() {
    this.loading = true;
    this.authService.register(this.form.value)
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

  show() {
    this.modal.show();
  }

  hide() {
    this.modal.hide();
  }
}


