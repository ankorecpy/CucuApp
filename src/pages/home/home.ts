import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CalendarPage } from '../calendar/calendar';
import { ReportPage } from '../report/report';
import { InformationPage } from '../information/information';
import { PendingSalesPage } from '../pending-sales/pending-sales';
import { AnnualClosurePage } from '../annual-closure/annual-closure';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private mainContent: any;
  private listOfIcons: any[];
  private listOfPages: any[];

  constructor(public navCtrl: NavController) {
    this.mainContent = CalendarPage;
    this.listOfIcons = [{title: "Calendario", icon: "calendar"}, {title: "Reportes", icon: "stats"}, {title: "Ventas pendientes", icon: "paper"}, {title: "Información", icon: "information-circle"}];
    this.listOfPages = [CalendarPage, ReportPage, PendingSalesPage, InformationPage];
    let date: Date = new Date();
    //cambiar condicion de if por una que valide que no haya información del año pasado
    if ((date.getDate() == 1) && (date.getMonth() == 0)) {
      this.navCtrl.push(AnnualClosurePage);
    }
  }

  private goToPage(index: number): void {
    this.mainContent = (this.listOfPages[index]);      
  }
}

export interface Item {
  title: string;
  icon: string;  
}
