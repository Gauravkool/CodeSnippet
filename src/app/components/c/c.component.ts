import { Component } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-c',
  standalone: true,
  imports: [],
  templateUrl: './c.component.html',
  styleUrl: './c.component.css'
})
export class CComponent {
  constructor(public countService: CounterService) {}
}
