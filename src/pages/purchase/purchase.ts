import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Purchase } from '../../providers/models/purchase-data';
import { PurchaseDao } from '../../providers/dataBase/purchase-dao';

@Component({
  selector: 'page-purchase',
  templateUrl: 'purchase.html',
})
export class PurchasePage {
  private purchase: Purchase;
  private status: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private purchaseDao: PurchaseDao) {
    this.purchase = this.navParams.get('purchase');
    this.status = this.navParams.get('status');
  }

  ionViewDidLoad() {
  }
  private processPurchase(): void {
    switch (this.status) {
      case "new":
        this.purchaseDao.insert(this.purchase);
        this.navCtrl.pop();
      break;
      case "modify":

      break;
      default: break;
    }
  }

}
