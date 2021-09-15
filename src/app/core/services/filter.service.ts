import { Injectable } from '@angular/core';
import { PropertyResolver } from './property-resolver';

@Injectable(
  
)
export class FilterService {

  constructor() { }
  filter<T>(items: any, data: string, props: string[]) {
    return items.filter((item: any) => {
        let match = false;
        for (const prop of props) {
            if (prop.indexOf('.') > -1) {
               const value = PropertyResolver.resolve(prop, item);
               if (value && value.toUpperCase().indexOf(data) > -1) {
                  match = true;
                  break;
               }
               continue;
            }

            if (item[prop].toString().toUpperCase().indexOf(data) > -1) {
              match = true;
              break;
            }
        }
        return match;
    });
}
}
