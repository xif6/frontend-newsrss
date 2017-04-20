import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Fluxes, FluxSettings, Items } from '../shared/fluxes';


@Injectable()
export class FluxesService {

  protected fluxes: Fluxes[];
  protected fluxes$: Observable<Fluxes[]>;
  protected items: Items[];
  protected items$: Observable<Items[]>;

  constructor(protected authHttp: AuthHttp) {}

  clearCache() {
    this.fluxes = this.items = null;
    return this;
  }

  clearCacheFluxes() {
    this.fluxes = null;
    return this;
  }

  clearCacheItems() {
    this.items = null;
    return this;
  }

  getFluxes(): Observable<Fluxes[]> {
    if (this.fluxes) {
      return Observable.of(this.fluxes);
    } else if (this.fluxes$) {
      // request is in progress
      return this.fluxes$;
    }

    this.fluxes$ = this.authHttp.get('http://sf28.newsrss.net/api/user/fluxes')
      .map(fluxes => {
        this.fluxes$ = null;
        this.fluxes = fluxes.json();
        return this.fluxes;
      })
      .catch(error => {
        return Observable.throw(error);
      });

    return this.fluxes$;
  }

  getItems(): Observable<Items[]> {
    if (this.items) {
      return Observable.of(this.items);
    } else if (this.items$) {
      // request is in progress
      return this.items$;
    }

    this.items$ = this.authHttp.get('http://sf28.newsrss.net/api/user/items')
      .map(items => {
        this.items$ = null;
        this.items = items.json();
        return this.items;
      })
      .catch(error => {
        return Observable.throw(error);
      });

    return this.items$;
  }

  postFlux(q) {
    return this.authHttp.post('/assets/mock-api/empty.json', q)
      .map(res => res.json())
      .catch(error => {
        return Observable.throw(error);
      });
  }

  patchFluxSettings(fluxSettings: FluxSettings) {
    console.log(fluxSettings);
    return this.authHttp.post('/assets/mock-api/empty.json', fluxSettings)
      .map(res => res.json())
      .catch(error => {
        return Observable.throw(error);
      });
  }
}
