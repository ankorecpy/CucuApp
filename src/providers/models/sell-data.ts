import { Injectable } from '@angular/core';
import { Operation } from './operation-data';

@Injectable()
export class Sell extends Operation {
  private buyer: string;
  private payStatus: boolean;

  constructor(date: Date, buyer: string, quantity: number, value: number, payStatus: boolean) {
      super(date, quantity, value);
      this.buyer = buyer;
      this.payStatus = payStatus;
  }

  public getBuyer(): string {
      return this.buyer;
  }
  public getPayStatus(): boolean {
      return this.payStatus;
  }

  public setBuyer(newBuyer: string): void {
      this.buyer = newBuyer;
  }
  public setPayStatus(newPayStatus: boolean) {
      this.payStatus = newPayStatus;
  }

}
