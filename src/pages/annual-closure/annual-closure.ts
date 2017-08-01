import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { SaleDao } from '../../providers/dataBase/sale-dao';
import { PurchaseDao } from '../../providers/dataBase/purchase-dao';
import { ProductionDao } from '../../providers/dataBase/production-dao';

/**
 * Generated class for the AnnualClosurePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-annual-closure',
  templateUrl: 'annual-closure.html',
})
export class AnnualClosurePage {
  private year: number;
  private months: string[];

  constructor(private navCtrl: NavController ,private purchaseDao: PurchaseDao, private saleDao: SaleDao, private productionDao: ProductionDao) {
    this.year = (new Date()).getFullYear();
    this.months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];;
  }

  ionViewDidLoad() {
  }
  private clean(): void {
    this.navCtrl.pop();
  }
}
