import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value, ...args: unknown[]): unknown {
    const filterString = args[0];
    if (args[0] === ''){
      return value;
    }
    return value.filter(addressBook => {
      if (addressBook.firstName === filterString || addressBook.lastName === filterString
        || (addressBook.firstName + ' ' + addressBook.lastName) === filterString) {
        return true;
        }
    });
  }

}
