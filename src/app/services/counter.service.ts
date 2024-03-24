import { Injectable, Signal, computed, effect, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  count = signal(0);
  doubleCount: Signal<number> = computed(() => this.count() * 2);
  constructor() {
    effect(() => {
      console.log('count', this.count(), 'double', this.doubleCount());
    });
  }
  getCounter() {
    return this.count();
  }
  incCounter() {
    // this.count.set(5);
    this.count.update((preCount) => {
      return preCount + 1;
    });
  }
}
