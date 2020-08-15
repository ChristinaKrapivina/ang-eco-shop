import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(phone: number | string): number | string {
    if (phone) {
      return (phone + '').replace(/^(\d{3})(\d{3})(\d{4}).*/, '($1) $2-$3');
    }
  }
}
