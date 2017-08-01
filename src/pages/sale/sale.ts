import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Sale } from '../../providers/models/sale-data';
import { SaleDao } from '../../providers/dataBase/sale-dao';

@Component({
  selector: 'page-sale',
  templateUrl: 'sale.html',
})
export class SalePage {
  private sale: Sale;
  private status: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private saleDao: SaleDao) {
    this.sale = this.navParams.get('sale');
    this.status = this.navParams.get('status');
  }

  ionViewDidLoad() {

  }
  private processsale(): void {
    switch (this.status) {
      case "new":
        //enviar a saleDao en funcion de creación
      break;
      case "modify":
        //enviar a saleDao en funcion de modificación
      break;    
      default:
        break;
    }
  }

}
