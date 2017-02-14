import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class FluxesService {

  constructor(protected http: Http) { }

  getFluxesFromAPI() {
    return this.http.get('app/mock-api/fluxes.json')
    // return this.http.get('http://sf28.newsrss.net/user/fluxes')
      //.do(x => console.log(x))
      .map(fluxes => fluxes.json())
      .catch(error => {
        let errorMessage = `Une erreur ${error.status} est survenue en tentant de joindre ${error.url}`;
        return Observable.throw(errorMessage);
      });
  }

  getItemsFromAPI() {
    return this.http.get('app/mock-api/items-array.json')
    // return this.http.get('http://sf28.newsrss.net/user/items')
      //.do(x => console.log(x))
      .map(items => items.json())
      .catch(error => {
        let errorMessage = `Une erreur ${error.status} est survenue en tentant de joindre ${error.url}`;
        return Observable.throw(errorMessage);
      });
  }

}
