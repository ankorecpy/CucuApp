import { Injectable } from '@angular/core';
import { Operation } from './operation-data';

@Injectable()
export class Buy extends Operation {
  private concept: string;

  constructor(date: Date, concept: string, quantity: number, value: number) {
      super(date, quantity, value);
      this.concept = concept;
  }

  public getConcept(): string {
      return this.concept;
  }

  public setConcep(newConcept: string): void {
      this.concept = newConcept;
  }
}