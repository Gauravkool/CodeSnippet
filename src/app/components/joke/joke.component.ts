import { Component, OnInit } from '@angular/core';
import { JokeService } from '../../services/joke.service';

@Component({
  selector: 'app-joke',
  standalone: true,
  imports: [],
  templateUrl: './joke.component.html',
  styleUrl: './joke.component.css',
})
export class JokeComponent implements OnInit {
  joke = 'loading';
  constructor(private jokeService: JokeService) {}

  ngOnInit() {
    this.getNewJoke();
  }

  getNewJoke() {
    this.jokeService.getJoke().subscribe({
      next: (data: any) => {
        this.joke = data.value;
      },
      error: (error) => {
        console.log('error', error);
      },
    });
  }
}
