import { Component } from '@angular/core';
import { CounterService } from '../../services/counter.service';
import { CComponent } from '../c/c.component';

@Component({
  selector: 'app-b',
  standalone: true,
  imports: [CComponent],
  providers: [CounterService],
  templateUrl: './b.component.html',
  styleUrl: './b.component.css',
})
export class BComponent {
  constructor(public countService: CounterService) {}
}
