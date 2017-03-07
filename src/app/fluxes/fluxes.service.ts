import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class FluxesService {

  constructor(protected authHttp: AuthHttp) {}

  getFluxesFromAPI() {
    return this.authHttp.get('http://sf28.newsrss.net/api/user/fluxes')
      .map(fluxes => fluxes.json())
      .catch(error => {
        return Observable.throw(error);
      });
  }

  getItemsFromAPI() {
    return this.authHttp.get('http://sf28.newsrss.net/api/user/items')
      .map(items => items.json())
      .catch(error => {
        return Observable.throw(error);
      });
  }
}
