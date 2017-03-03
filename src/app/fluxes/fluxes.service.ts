import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AuthHttp } from "angular2-jwt";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { AuthService } from '../auth/auth.service';

@Injectable()
export class FluxesService {

  constructor(protected authHttp: AuthHttp, protected authService: AuthService) {
  }

  getFluxesFromAPI() {
    // this.authService.login();
    // console.log(this.authService.authenticated());
    return this.authHttp.get('http://sf28.newsrss.net/api/user/fluxes')
    // return this.authHttp.get('/assets/mock-api/fluxes.json')
    //.do(x => console.log(x))
      .map(fluxes => fluxes.json())
      .catch(error => {
        // let errorMessage = `Une erreur ${error.status} est survenue en tentant de joindre ${error.url}`;
        return Observable.throw(error);
      });
  }

  getItemsFromAPI() {
    return this.authHttp.get('http://sf28.newsrss.net/api/user/items')
    // return this.authHttp.get('/assets/mock-api/items.json')
    //.do(x => console.log(x))
      .map(items => items.json())
      .catch(error => {
        return Observable.throw(error);
      });
  }

  /*
   getItemsFromAPI() {
   return this.authHttp.get('/assets/mock-api/items-array.json')
   //.do(x => console.log(x))
   .map(items => items.json())
   .catch(error => {
   return Observable.throw(error);
   });
   }
   */
}
