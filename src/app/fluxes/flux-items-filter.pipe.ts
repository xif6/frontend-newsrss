import { Pipe, PipeTransform } from '@angular/core';

import { Items, Item } from '../shared/fluxes';

@Pipe({
  name: 'fluxItemsFilter'
})
export class FluxItemsFilterPipe implements PipeTransform {

  transform(value: Items[], fluxId: number): Item[] {
    if (!value) {
      return [];
    }

    let result = value.filter((item: any) => item.id === fluxId);
    return result[0].items;
  }

}
