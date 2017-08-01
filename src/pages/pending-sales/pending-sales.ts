import { Component } from '@angular/core';
import { Sale } from '../../providers/models/sale-data';
import { SaleDao } from '../../providers/dataBase/sale-dao';


@Component({
  selector: 'page-pending-sales',
  templateUrl: 'pending-sales.html',
})
export class PendingSalesPage {
  private year: number;
  private lastSaleUpdated: Sale;
  private listOfSales: Sale[];

  constructor(private saleDao: SaleDao) {
  }

  ionViewDidLoad() {
    this.year = (new Date()).getFullYear();
    this.lastSaleUpdated = null;
    this.listOfSales = this.saleDao.getPendingSales(this.year);
  }
  private updateStatusToTrue(sale: Sale): void {
    this.lastSaleUpdated = sale;
    this.saleDao.updateStatusOfSale(sale.getDate(), true);
    this.listOfSales = this.saleDao.getPendingSales(this.year);
  }
  private updateStatusToFalse(sale: Sale): void {
    this.lastSaleUpdated = null;
    this.saleDao.updateStatusOfSale(sale.getDate(), false);
    this.listOfSales = this.saleDao.getPendingSales(this.year);
  }
}
