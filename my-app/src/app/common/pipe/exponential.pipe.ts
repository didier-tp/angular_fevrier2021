import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponential'
})
export class ExponentialPipe implements PipeTransform {

  transform(value: number, ...args: string[]): unknown {
    return Math.pow(value, parseInt(args[0] || '1', 10));
  }

}
