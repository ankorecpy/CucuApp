import { Component, Input } from '@angular/core';

@Component({
  selector: 'month-card',
  templateUrl: 'month-card.html'
})
export class MonthCardComponent {
  @Input() name: string;
  @Input() listOfWeeks: Array<number[]>;
  @Input() actualDay: number;
  @Input() month: number;    

  constructor() {
  }

  goToOperations(day: number): void {
    
  }

}
