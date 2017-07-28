import { Injectable } from '@angular/core';
import { Sell } from '../models/sell-data';

@Injectable()
export class SellDao {
    public getListOfSells(): Sell[] {
        let date: Date = new Date();
        let listOfSells: Sell[] = [];
        let sell: Sell = new Sell(date, "don nadie", 5, 3000, true);
        listOfSells.push(sell);
        sell = new Sell(date, "Ronaldo Nazario", 3, 30000,false);
        listOfSells.push(sell);
        sell = new Sell(date, "James Rodriguez", 5, 100000,false);
        listOfSells.push(sell);
        sell = new Sell(date, "Carlos Mario Kempes", 1, 12000,false);
        listOfSells.push(sell);
        sell = new Sell(date, "Eden Hazard", 2, 33000,false);
        listOfSells.push(sell);
        sell = new Sell(date, "Totti", 1, 9000, true);
        listOfSells.push(sell);
        sell = new Sell(date, "Cristiano Ronaldo", 2, 28000,true);
        listOfSells.push(sell);
        return listOfSells;
    }
}