import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Fluxes, FluxSettings, AllItems, Item } from '../shared/fluxes';


@Injectable()
export class FluxesService {

  protected fluxes: Fluxes[];
  protected fluxes$: Observable<Fluxes[]>;
  protected fluxesCache$: Observable<Observable<Fluxes[]>>;
  protected allItems: AllItems;
  protected allItems$: Observable<AllItems>;
  protected allItemsCache$: Observable<Observable<AllItems>>;

  constructor(protected authHttp: AuthHttp) {}

  clearCache() {
    this.fluxes = this.allItems = null;
    return this;
  }

  clearCacheFluxes() {
    this.fluxes = null;
    return this;
  }

  clearCacheItems() {
    this.allItems = null;
    return this;
  }

  getFluxes(): Observable<Observable<Fluxes[]>> {
    if (this.fluxes) {
      return Observable.of(this.fluxes$);
    } else if (this.fluxesCache$) {
      // request is in progress
      return this.fluxesCache$;
    }

    this.fluxesCache$ = this.authHttp.get('http://sf28.newsrss.net/api/user/fluxes')
      .map(fluxes => {
        this.fluxesCache$ = null;
        this.fluxes = fluxes.json();
        this.fluxes$ = Observable.of(this.fluxes);

        return this.fluxes$;
      })
      .catch(error => {
        return Observable.throw(error);
      });

    return this.fluxesCache$;
  }

  getItems(fluxId): Observable<Item[]> {
    return this.authHttp.get('http://sf28.newsrss.net/api/user/item/' + fluxId)
      .map(fluxes => {
        this.allItems['flux_' + fluxId] = fluxes.json();

        return this.allItems['flux_' + fluxId];
      })
      .catch(error => {
        return Observable.throw(error);
      });
  }
/*

  getAllItems(): Observable<Observable<Items[]>> {

    return this.authHttp.get('http://sf28.newsrss.net/api/user/items')
      .map(allItems => {
        this.allItems = allItems.json();

        this.allItems$ = Observable.of(this.allItems);
        return this.allItems$;
      })
      .catch(error => {
        return Observable.throw(error);
      });

  }
*/

  getAllItems(): Observable<Observable<AllItems>> {
    if (this.allItems) {
      return Observable.of(this.allItems$);
    } else if (this.allItemsCache$) {
      // request is in progress
      return this.allItemsCache$;
    }

    this.allItemsCache$ = this.authHttp.get('http://sf28.newsrss.net/api/user/items')
      .map(allItems => {
        this.allItemsCache$ = null;
        this.allItems = allItems.json();

        this.allItems$ = Observable.of(this.allItems);
        return this.allItems$;
      })
      .catch(error => {
        return Observable.throw(error);
      });

    return this.allItemsCache$;
  }
/*

  getItems2(): Observable<AllItems> {
    if (this.allItems) {
      return Observable.of(this.allItems);
    } else if (this.allItems$) {
      // request is in progress
      return this.allItems$;
    }

    this.allItems$ = this.authHttp.get('http://sf28.newsrss.net/api/user/items')
      .map(allItems => {
        this.allItems$ = null;
        this.allItems = allItems.json();
        return this.allItems;
      })
      .catch(error => {
        return Observable.throw(error);
      });

    return this.allItems$;
  }
*/

  postFlux(q) {
    return this.authHttp.post('/assets/mock-api/empty.json', q)
      .map(res => res.json())
      .catch(error => {
        return Observable.throw(error);
      });
  }

  patchFluxSettings(fluxSettings: FluxSettings) {
    return this.authHttp.post('/assets/mock-api/empty.json', fluxSettings)
      .map(res => res.json())
      .catch(error => {
        return Observable.throw(error);
      });
  }
}
