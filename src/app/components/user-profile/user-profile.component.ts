import { NgFor, NgIf } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  booleanAttribute,
  input,
  numberAttribute,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../../models/user';
import { CountrycodePipe } from '../../pipes/countrycode.pipe';
import { HighlightDirectiveDirective } from '../../directives/highlight-directive.directive';

function formateName(value: string) {
  return `Hi ${value.toLocaleUpperCase()}`;
}
@Component({
  selector: 'app-user-profile',
  standalone: true,
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
  imports: [
    FormsModule,
    NgFor,
    NgIf,
    CountrycodePipe,
    HighlightDirectiveDirective,
  ],
})
export class UserProfileComponent
  implements OnInit, OnDestroy, OnChanges, AfterViewInit
{
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

  // @Input({ alias: 'username' }) name: string = '';
  name = input('', {
    alias: 'username',
  });
  @Input({ transform: booleanAttribute }) isSingle: boolean | undefined;
  @Input({ transform: numberAttribute }) salary: number | undefined;
  @Output() myEvent = new EventEmitter<User>();
  phoneNum: number = 9045349786;
  sendData() {
    this.myEvent.emit({ name: this.name(), updateSalary: 25000 });
  }

  @ViewChild('myHeading') heading?: ElementRef;

  constructor() {
    // init propreties
    // dependency inject
    // event listener register
    console.log('constructor called', this.name());
    console.log('constructor', this.heading?.nativeElement.textContent);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
    console.log('ngOnChanges', this.heading?.nativeElement.textContent);
  }

  ngOnInit() {
    // init propreties
    // api callig
    // event listener register
    console.log('ngOnInit called', this.name());
    console.log('ngOnInit', this.heading?.nativeElement.textContent);
  }

  ngOnDestroy() {
    // unregister event listener
    console.log('ngOnDestroy called');
    console.log('ngOnDestroy', this.heading?.nativeElement.textContent);
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit', this.heading?.nativeElement.textContent);
  }
}
