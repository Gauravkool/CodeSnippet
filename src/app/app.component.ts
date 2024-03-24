import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CommonModule } from '@angular/common';
import { User } from '../models/user';
import { JokeComponent } from './components/joke/joke.component';
import { AComponent } from './components/a/a.component';
import { BComponent } from './components/b/b.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    UserProfileComponent,
    CommonModule,
    JokeComponent,
    AComponent,
    BComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular17Codebin-app';

  users = [
    { name: 'ramesh', isSingle: true, salary: 60000 },
    // { name: 'suresh', isSingle: true, salary: 30000 },
    // { name: 'nitesh', isSingle: false, salary: 10000 },
  ];
  recieveData(e: User) {
    const index = this.users.findIndex((user) => e.name === user.name);
    console.log(index, 'index');
    this.users[index].salary = e.updateSalary;
  }

  onClear() {
    this.users = [];
  }
}
