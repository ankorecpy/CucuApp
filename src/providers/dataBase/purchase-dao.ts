import { Injectable } from '@angular/core';
import { Purchase } from '../models/purchase-data';

@Injectable()
export class PurchaseDao {
    private listOfPurchases: Purchase[];

    constructor() {
        this.listOfPurchases = [];
        let date: Date = new Date();
        let purchase: Purchase = new Purchase(date, "bulto de maiz", 2, 50000);
        this.listOfPurchases.push(purchase);
        purchase = new Purchase(date, "bulto de alimento", 1, 49000);
        this.listOfPurchases.push(purchase);
        purchase = new Purchase(date, "bolsa de ajos", 1, 5000);
        this.listOfPurchases.push(purchase);
        purchase = new Purchase(date, "calzetas para panal", 59, 280);
        this.listOfPurchases.push(purchase);
        purchase = new Purchase(date, "bolsa de achote ", 1, 7000);
        this.listOfPurchases.push(purchase);
        purchase = new Purchase(date, "varios", 1, 9000);
        this.listOfPurchases.push(purchase);
    }

    public insert(purchase: Purchase): void {
        this.listOfPurchases.push(purchase);
    }
    public delete(date: Date): void {
        this.listOfPurchases[0].setConcept("elemento borrado");
         
    }
    public getPurchases(day: number, month: number, year: number): Purchase[] {
        return this.listOfPurchases;
    }
    public getTotalOfPurchases(year: number, month: number): number {
        return 200000;

    }
}