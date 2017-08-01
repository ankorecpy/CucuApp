import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PurchaseDao } from '../../providers/dataBase/purchase-dao';
import { SaleDao } from '../../providers/dataBase/sale-dao';
import { ProductionDao } from '../../providers/dataBase/production-dao';
import { Purchase } from '../../providers/models/purchase-data';
import { Sale } from '../../providers/models/sale-data';
import { Production } from '../../providers/models/production-data';
import { SalePage } from '../sale/sale';
import { PurchasePage } from '../purchase/purchase';

@Component({
  selector: 'page-operations',
  templateUrl: 'operations.html',
})
export class OperationsPage {
  private nameMonth: string;
  private date: Date;
  private operationActivated: string;
  private modificationActivated :boolean;
  private listOfSales: Sale[];
  private listOfPurchases: Purchase[];
  private production: Production;
  private lastSaleDeleted: Sale;
  private lastPurchaseDeleted: Purchase;
  
  constructor(public navCtrl: NavController, private navParams: NavParams, private saleDao: SaleDao, private purchaseDao: PurchaseDao, private productionDao: ProductionDao) {    
      this.date = this.navParams.get('date');
      this.operationActivated = 'production';
      this.nameMonth = this.navParams.get('nameMonth');    
      this.modificationActivated = this.navParams.get('modification');
      this.production = this.productionDao.getProductionOfDay();
  }
  ionWiewDidEnter(){
  }
  private getPurchasesOfDay(): void {
    this.listOfPurchases = this.purchaseDao.getPurchases(this.date.getDate(), this.date.getMonth(), this.date.getFullYear());
  }
  private getSalesOfDay(): void {
    this.listOfSales = this.saleDao.getSales(this.date.getDate(), this.date.getMonth(), this.date.getFullYear());
  }
  private getProductionOfDay(): void {
    this.production = this.productionDao.getProductionOfDay();
  }
  private goToSale(sale: Sale): void {
      let status: string = this.modificationActivated ? "modify" : "view";
      this.navCtrl.push(SalePage, {sale: sale, status: status});
  }
  private goToPurchase(purchase: Purchase): void {
      let status: string = this.modificationActivated ? "modify" : "view";
      this.navCtrl.push(PurchasePage, {purchase: purchase, status: status});
  }
  private deleteSale(sale: Sale): void {
    this.lastSaleDeleted = sale;
    this.saleDao.delete(sale.getDate());
    this.getSalesOfDay();
  }
  private deletePurchase(purchase: Purchase): void {
    this.lastPurchaseDeleted = purchase;
    this.purchaseDao.delete(purchase.getDate());
    this.getPurchasesOfDay();
  }
  private reInsertPurchase(): void {
    this.purchaseDao.insert(this.lastPurchaseDeleted);
    this.lastPurchaseDeleted = null;
    this.getPurchasesOfDay();
  }
  private reInsertSale(): void {
    this.saleDao.insert(this.lastSaleDeleted);
    this.lastSaleDeleted = null;
    this.getSalesOfDay();
  }
  private processOperation(): void {
      switch (this.operationActivated) {
        case "production":
        break;
        case "purchase":
            let newPurchase: Purchase = new Purchase(new Date(), "", 1, 0);
            this.navCtrl.push(PurchasePage, {purchase: newPurchase, status: "new"});
        break;
        case "sale":
            let newSale: Sale = new Sale(new Date(), "", 1, 0, false);
            this.navCtrl.push(SalePage, {sale: newSale, status: "new"});
        break;
        default:
        break;
      }
  }
}
