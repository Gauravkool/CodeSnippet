import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countrycode',
  standalone: true,
})
export class CountrycodePipe implements PipeTransform {
  transform(value: number, country?: string): string {
    // switch (value) {
    //   case 'United States':
    //     return '+1 - ' + value;
    //   case 'United Kingdom':
    //     return '+44 - ' + value;
    //   case 'India':
    //     return '+91 - ' + value;
    //   // Add more cases for other countries
    //   default:
    //     return 'Unknown';
    // }

    let code = "+91-";
    if(country == "USA") code = "+1-";
    return code + value
  }
}
