import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OperationsPage } from '../../pages/operations/operations';

@Component({
  selector: 'month-card',
  templateUrl: 'month-card.html'
})
export class MonthCardComponent {
  @Input() private name: string;
  @Input() private listOfWeeks: Array<number[]>;
  @Input() private actualDay: number;
  @Input() private month: number;
  @Input() private year: number;

  constructor(public navController: NavController, public navParams: NavParams) {

  }
  goToOperations(day: number): void {
    let date: Date = new Date(this.year, this.month, day);
    let modificationActivated: boolean = ((date.getMonth()) == this.month) && (day == this.actualDay);    
    this.navController.push(OperationsPage, {date: date, nameMonth: this.name, modification: modificationActivated});
  }
}
