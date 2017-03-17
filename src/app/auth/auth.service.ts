import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams, Response } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';
import { User } from '../shared/user';

@Injectable()
export class AuthService {

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
        authResult => { localStorage.setItem('id_token', authResult.token); },
        err => { console.error(err); }
      );
  }

  subscribe(user: User) {
    console.log(user);
    const body = new URLSearchParams();
    body.set('username', user.username);
    body.set('password', user.password);
    body.set('email', user.email);
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post('http://sf28.newsrss.net/api/registration', body, {headers: headers})
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
}
