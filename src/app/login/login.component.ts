import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { AuthService } from "../auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading: boolean = false;
  error: string;

  constructor(private authService: AuthService, private router: Router, private location: Location) {
  }

  ngOnInit() {
  }

  login(formValue: any) {
    this.loading = true;
    this.authService.login(formValue.username, formValue.password)
      .subscribe(
        () => {
          console.log(this.router);
          this.router.navigate(['/fluxes']);
          // this.location.back();
        },
        () => {
          this.error = 'Username or password is incorrect';
          this.loading = false;
        });
  }

}
