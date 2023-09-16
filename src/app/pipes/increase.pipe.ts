import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'increase'
})
export class IncreasePipe implements PipeTransform {

  transform(value: number): number {
    return value + 5;
  }

}
