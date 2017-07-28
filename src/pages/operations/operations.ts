import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BuyDao } from '../../providers/dataBase/buy-dao';
import { SellDao } from '../../providers/dataBase/sell-dao';
import { Buy } from '../../providers/models/buy-data';
import { Sell } from '../../providers/models/sell-data';

@Component({
  selector: 'page-operations',
  templateUrl: 'operations.html',
})
export class OperationsPage {
  private nameMonth: string;
  private day: number;
  private month: number;
  private year: number;
  private operationActivated: string;
  private modificationActivated :boolean;
  private listOfSells: Sell[];
  private listOfBuys: Buy[];
  //private eggsCollected: number;

  constructor(public navCtrl: NavController, private navParams: NavParams, private sellDao: SellDao, private buyDao: BuyDao) {    
      let date: Date = new Date();
      this.operationActivated = 'collect';
      this.year = date.getFullYear();
      this.month = this.navParams.get('month');
      this.day = this.navParams.get('day');      
      this.nameMonth = this.navParams.get('nameMonth');    
      this.modificationActivated = this.navParams.get('modification');
  }
  ionWiewDidEnter(){
  }
  private sumar(): void {
      console.log("sumar");
  }
  private calculateBuys(): void {
    this.listOfBuys = this.buyDao.getBuys();
  }
  private calculateSells(): void {
    this.listOfSells = this.sellDao.getListOfSells();
  }
  private msg(): string {
      let message: string = "jajaja";
      return message;
  }
/*
  ionViewWillEnter(): void {
      let actualYear: number = new Date().getFullYear();
      switch (this.operationActived) {
          case "sell":
              this.sellDao.selectSellsByDate(actualYear + "-" + this.month + "-" + this.day).then(result =>{
                  this.listOfSells = result;
              });
              break;
          case "buy":
              this.buyDao.selectBuysByDate(actualYear + "-" + this.month + "-" + this.day).then(result =>{
                  this.listOfBuys = result;
              });
              break;
          case "collect":
              break;
      }
  }
*/
}
