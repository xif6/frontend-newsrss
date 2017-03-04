import { Pipe, PipeTransform } from '@angular/core';

import { Item } from '../shared/fluxes';

@Pipe({
  name: 'fluxItemsFilter'
})
export class FluxItemsFilterPipe implements PipeTransform {

  /*
   transform(value: Items[], fluxId: number): Item[] {
   if (!value) {
   return [];
   }

   let result = value.filter((item: any) => item.id === fluxId);
   return result[0].items;
   }
   */

  transform(value: any[], fluxId: number): Item[] {
    if (!value || !value['flux_' + fluxId]) {
      return [];
    }

    return value['flux_' + fluxId];
  }

}
