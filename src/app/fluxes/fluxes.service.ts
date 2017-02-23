import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class FluxesService {

  constructor(protected authHttp: Http) {
  }

  getFluxesFromAPI() {
    // return this.authHttp.get('http://sf28.newsrss.net/user/fluxes')
    return this.authHttp.get('app/mock-api/fluxes.json')
    //.do(x => console.log(x))
      .map(fluxes => fluxes.json())
      .catch(error => {
        // let errorMessage = `Une erreur ${error.status} est survenue en tentant de joindre ${error.url}`;
        return Observable.throw(error);
      });
  }

  getItemsFromAPI() {
    // return this.authHttp.get('http://sf28.newsrss.net/user/items')
    return this.authHttp.get('app/mock-api/items.json')
    //.do(x => console.log(x))
      .map(items => items.json())
      .catch(error => {
        return Observable.throw(error);
      });
  }

  /*
   getItemsFromAPI() {
   return this.authHttp.get('app/mock-api/items-array.json')
   //.do(x => console.log(x))
   .map(items => items.json())
   .catch(error => {
   return Observable.throw(error);
   });
   }
   */
}
