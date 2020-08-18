import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value, ...args): any {
    const sortBy = args[0];
    if (sortBy !== 'birthDate' ){
      value.sort( (a, b) => {
        if (a[sortBy] < b[sortBy]){
          return -1;
        }
      });
    } else {
      value.sort( (a, b) => {
        if (new Date(a[sortBy]) > new Date(b[sortBy])){
          return -1;
        }
      });
    }
    return value;
  }

}
