import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeName'
})
export class PipeNamePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
