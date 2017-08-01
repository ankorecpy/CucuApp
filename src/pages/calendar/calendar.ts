import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MonthData, Month } from '../../providers/models/month-data';

@Component({
    selector: 'page-calendar',
    templateUrl: './calendar.html'
})
export class CalendarPage {
    private year: number;
    private month: Month;

    constructor( public navCtrl: NavController, public monthData: MonthData ) {
        let date: Date = new Date();
        this.month = this.monthData.mountMonth(date.getMonth(), date.getFullYear());
        this.year = date.getFullYear();
    }
    ionViewDidLoad() {
        let date: Date = new Date();
        let year: number = (this.year != (date.getFullYear())) ? this.year - 1: this.year;
        this.month = this.monthData.mountMonth(this.month.getMonth(), year);
        this.year = date.getFullYear();
    }
    private nextMonth(): void {
        let numberOfNewMonth: number = this.month.getMonth() + 1;
        this.month = this.monthData.mountMonth(numberOfNewMonth, this.year);
    }
    private previousMonth(): void {
        let numberOfNewMonth: number = this.month.getMonth() - 1;
        this.month = this.monthData.mountMonth(numberOfNewMonth, this.year);
    }
}