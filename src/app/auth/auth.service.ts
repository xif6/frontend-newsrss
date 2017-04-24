import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams, Response } from '@angular/http';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/do';

import { User } from '../shared/user';

@Injectable()
export class AuthService {

  // Observable sources
  protected wantToRegister = new Subject<any>();

  // Observable streams
  wantToRegister$ = this.wantToRegister.asObservable();

  constructor(protected http: Http) { }

  login(user: User) {
    const body = new URLSearchParams();
    body.set('_username', user.username);
    body.set('_password', user.password);
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post('http://sf28.newsrss.net/api/login_check', body, {headers: headers})
      .map((res: Response) => res.json())
      .do(
        authResult => { localStorage.setItem('token', authResult.token); },
        err => { console.error(err); }
      );
  }

  register(user: User) {
    const body = new URLSearchParams();
    body.set('username', user.username);
    body.set('password', user.password);
    body.set('email', user.email);
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    // return this.http.post('http://sf28.newsrss.net/api/register', body, {headers: headers})
    return this.http.post('/assets/mock-api/empty.json', body, {headers: headers})
      .map((res: Response) => res.json())
      .do(
        authResult => { localStorage.setItem('id_token', authResult.token); },
        err => { console.error(err); }
      );
  }

  authenticated() {
    return tokenNotExpired();
  }


  logout() {
    localStorage.removeItem('id_token');
  }

  openRegister() {
    this.wantToRegister.next();
  }
}
