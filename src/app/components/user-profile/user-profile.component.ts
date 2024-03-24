import { NgFor, NgIf } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  booleanAttribute,
  numberAttribute,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../../models/user';
import { CountrycodePipe } from "../../pipes/countrycode.pipe";

function formateName(value: string) {
  return `Hi ${value.toLocaleUpperCase()}`;
}
@Component({
    selector: 'app-user-profile',
    standalone: true,
    templateUrl: './user-profile.component.html',
    styleUrl: './user-profile.component.css',
    imports: [FormsModule, NgFor, NgIf, CountrycodePipe]
})
export class UserProfileComponent {
  // name = 'Gaurav ';
  // status = 'single';
  // salary = 40000;
  // inputVal = 'test';
  // isDisabled = true;
  // users = [
  //   { name: 'Gaurav', isSingle: true, salary: 60000 },
  //   { name: 'Moanli', isSingle: true, salary: 30000 },
  //   { name: 'Tamnna', isSingle: false, salary: 10000 },
  // ];
  // onChange(e: Event) {
  //   const value = (e.target as HTMLInputElement).value;
  //   console.log(value);
  //   this.inputVal = value;
  // }

  @Input({ alias: 'username' }) name: string = '';
  @Input({ transform: booleanAttribute }) isSingle: boolean | undefined;
  @Input({ transform: numberAttribute }) salary: number | undefined;
  @Output() myEvent = new EventEmitter<User>();
  phoneNum: number = 9045349786;
  sendData() {
    this.myEvent.emit({ name: this.name, updateSalary: 25000 });
  }
}
