import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{counter}}</h3>

    <button (click)="IncreaseBy(1)">+1</button>
    <button (click)="ResetCounter()">Reset</button>
    <button (click)="IncreaseBy(-1)">-1</button>
  `
})

export class CounterComponent {
  public counter = 10;

  IncreaseBy(value: number) {
    this.counter += value;
  }

  ResetCounter() {
    this.counter = 10;
  }
}
