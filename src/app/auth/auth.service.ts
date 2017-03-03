import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams, Response } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';
import { Observable } from "rxjs";

@Injectable()
export class AuthService {

  constructor(protected http: Http) {
  }

  public login(username, password) {
    console.log('auth');

    let body = new URLSearchParams();
    body.set('_username', username);
    body.set('_password', password);
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post(
      'http://sf28.newsrss.net/api/login_check',
      body,
      {
        headers: headers
      }
    ).map(
      (res: Response) => res.json()
    ).do(
      authResult => {
        localStorage.setItem('id_token', authResult.token);
      },
      err => {
        console.error(err);
      }
    );
  }

  public authenticated() {
    return tokenNotExpired();
  }


  public logout() {
    localStorage.removeItem('id_token');
  }
}
