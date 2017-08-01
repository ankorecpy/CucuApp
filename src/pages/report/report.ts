import { Component } from '@angular/core';
import { SaleDao } from '../../providers/dataBase/sale-dao';
import { PurchaseDao } from '../../providers/dataBase/purchase-dao';
import { ProductionDao } from '../../providers/dataBase/production-dao';

@Component({
  selector: 'page-report',
  templateUrl: 'report.html',
})
export class ReportPage {
  private year: number;
  private months: string[];

  constructor(private purchaseDao: PurchaseDao, private saleDao: SaleDao, private productionDao: ProductionDao) {
    this.year = (new Date()).getFullYear();
    this.months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];;
  }

  ionViewDidLoad() {
    this.year = (new Date()).getFullYear();
  }
}
