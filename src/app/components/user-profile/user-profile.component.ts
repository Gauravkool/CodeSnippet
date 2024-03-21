import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent {
  name = 'Gaurav ';
  status = 'single';
  salary = 40000;
  inputVal = 'test';
  isDisabled = true;
  users = [
    { name: 'Gaurav', isSingle: true, salary: 60000 },
    { name: 'Moanli', isSingle: true, salary: 30000 },
    { name: 'Tamnna', isSingle: false, salary: 10000 },
  ];
  onChange(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    console.log(value);
    this.inputVal = value;
  }
}
