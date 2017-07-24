import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MonthData, Month } from '../../providers/models/month-data';


@Component({
    selector: 'page-calendar',
    templateUrl: './calendar.html'
})
export class CalendarPage {
    private month: Month;

    constructor( public navCtrl: NavController, public monthData: MonthData ) {
        let date: Date = new Date();
        this.month = this.monthData.mountMonth(date.getMonth(), date.getFullYear());
        
    }
}