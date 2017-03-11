import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { LoginDialogComponent } from './login-dialog.component';
import { MdDialog } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading = false;
  error: string;
  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private location: Location,
    private formBuilder: FormBuilder,
    private dialog: MdDialog
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'username': ['', [Validators.required, Validators.minLength(3)]],
      'password': ['', Validators.required]
    });
  }

  login() {
    this.loading = true;
    this.authService.login(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe(
        () => {
          console.log(this.router);
          // this.router.navigate(['/fluxes']);
          // this.location.back();
        },
        () => {
          this.error = 'Username or password is incorrect';
          this.loading = false;
        }
      );
  }

  openDialog() {
    let dialogRef = this.dialog.open(LoginDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}
