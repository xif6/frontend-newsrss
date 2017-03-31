import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Subject } from 'rxjs/Subject';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  // Observable sources
  protected mustAuthenticate = new Subject<any>();

  // Observable streams
  mustAuthenticate$ = this.mustAuthenticate.asObservable();


  constructor(protected auth: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.auth.authenticated()) {
      return true;
    } else {
      this.mustAuthenticate.next(state.url);
      return false;
    }
  }

  openLogin() {
    this.mustAuthenticate.next();
  }
}
