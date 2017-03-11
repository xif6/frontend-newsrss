import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams, Response } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {

  constructor(protected http: Http) {
  }

  login(username, password) {
    const body = new URLSearchParams();
    body.set('_username', username);
    body.set('_password', password);
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post('http://sf28.newsrss.net/api/login_check', body, {headers: headers})
      .map((res: Response) => res.json())
      .do(
        authResult => { localStorage.setItem('id_token', authResult.token); },
        err => { console.error(err); }
      );
  }

  static authenticated() {
    return tokenNotExpired();
  }


  static logout() {
    localStorage.removeItem('id_token');
  }
}
