import { Injectable } from '@angular/core';
import { Production } from '../models/production-data';

@Injectable()
export class ProductionDao {
    public getProductionOfDay(): Production {
        let result = new Production((new Date()), 78, "ninguna");
        return result;
    }
    public getTotalOfProductions(year: number, month: number): number {
        return 91;

    }
}