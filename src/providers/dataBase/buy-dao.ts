import { Injectable } from '@angular/core';
import { Buy } from '../models/buy-data';

@Injectable()
export class BuyDao {

    public getBuys(): Buy[] {
        let listOfBuys: Buy[] = [];
        let date: Date = new Date();
        let buy: Buy = new Buy(date, "bulto de maiz", 2, 50000);
        listOfBuys.push(buy);
        buy = new Buy(date, "bulto de alimento", 1, 49000);
        listOfBuys.push(buy);
        buy = new Buy(date, "bolsa de ajos", 1, 5000);
        listOfBuys.push(buy);
        buy = new Buy(date, "calzetas para panal", 59, 280);
        listOfBuys.push(buy);
        buy = new Buy(date, "bolsa de achote ", 1, 7000);
        listOfBuys.push(buy);
        buy = new Buy(date, "varios", 1, 9000);
        listOfBuys.push(buy);
        return listOfBuys;
    }
}