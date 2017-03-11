import { Component } from '@angular/core';

import { AuthService } from './auth/auth.service';
import { LoginComponent } from './login/login.component';
import { MdDialogRef, MdDialog } from '@angular/material';
import { LoginDialogComponent } from './login/login-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  selectedOption: string;

  constructor(protected authService: AuthService, public dialog: MdDialog) {}

  hasAuthToken() {
    return this.authService.authenticated();
  }

  logout() {
    this.authService.logout();
  }

  login() {
    // this.loginComponent.loginModal();
    let dialogRef = this.dialog.open(LoginDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
    });
  }
}
