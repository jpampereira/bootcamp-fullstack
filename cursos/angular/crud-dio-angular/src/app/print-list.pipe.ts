import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'printList',
  pure: false
})

export class PrintListPipe implements PipeTransform {

  transform(value: string[], ...args: unknown[]): unknown {
    let returnStr = '';

    if (value.length > 0) {
      returnStr = value.reduce((cur, acc) => cur + ' ' + acc, '');
    }

    return returnStr;
  }
}