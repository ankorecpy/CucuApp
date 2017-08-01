import { Injectable } from '@angular/core';
import { Sale } from '../models/sale-data';

@Injectable()
export class SaleDao {
    private listOfSales: Sale[];

    constructor() {
        let date: Date = new Date();
        this.listOfSales = [];
        let sale: Sale = new Sale(date, "don nadie", 5, 3000, true);
        this.listOfSales.push(sale);
        sale = new Sale(date, "Ronaldo Nazario", 3, 30000,false);
        this.listOfSales.push(sale);
        sale = new Sale(date, "James Rodriguez", 5, 100000,false);
        this.listOfSales.push(sale);
        sale = new Sale(date, "Carlos Mario Kempes", 1, 12000,true);
        this.listOfSales.push(sale);
        sale = new Sale(date, "Eden Hazard", 2, 33000,true);
        this.listOfSales.push(sale);
        sale = new Sale(date, "Totti", 1, 9000, true);
        this.listOfSales.push(sale);
        sale = new Sale(date, "Cristiano Ronaldo", 2, 28000, false);
        this.listOfSales.push(sale);        
    }
    public getSales(day: number, month: number, year: number): Sale[] {
        return this.listOfSales;
    }
    public getTotalOfSales(year: number, month: number): number {
        return 500000;
    }
    public getPendingSales(year: number): Sale[] {
        let date: Date = new Date();
        let listOfsales: Sale[] = [];
        let sale: Sale = new Sale(date, "don nadie", 5, 3000, false);
        sale = new Sale(date, "Ronaldo Nazario", 3, 30000,false);
        listOfsales.push(sale);
        sale = new Sale(date, "James Rodriguez", 5, 100000,false);
        listOfsales.push(sale);
        sale = new Sale(date, "Cristiano Ronaldo", 2, 28000, false);
        listOfsales.push(sale);
        return listOfsales;
    }
    public updateStatusOfSale(date: Date, status: boolean): void {

    }
    public insert(sale: Sale): void {
        this.listOfSales.push(sale);
    }
    public delete(date: Date): void {
        this.listOfSales[0].setQuantity(-1);
         
    }
    
}