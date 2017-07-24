import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CalendarPage } from '../calendar/calendar';

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
    this.listOfIcons = [{title: "Reportes", icon: "stats"}, {title: "Pendiente", icon: "paper"}, {title: "Información", icon: "information-circle"}];
  }

}

export interface Item {
  title: string;
  icon: string;  
}
