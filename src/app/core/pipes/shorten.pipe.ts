import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: string,shorten:number): string {
    if (value.length > shorten) {
      return value.substring(0, shorten)+'...' ;
    }
    return value;
  }

}
