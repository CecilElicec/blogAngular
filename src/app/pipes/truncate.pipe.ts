
import { Pipe, PipeTransform } from '@angular/core';
import { truncate } from 'lodash';

@Pipe({name: 'truncator'})
export class TruncatePipe implements PipeTransform {

  transform(value: string, param:number): string {
    return truncate(value,{length:param});
  }
}