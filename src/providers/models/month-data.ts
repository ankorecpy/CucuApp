import { Injectable } from '@angular/core';

@Injectable()
export class MonthData {    
    private daysForMonth: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    private sequenceYears: number[] = [5, 0, 1, 2, 3, 5, 6, 0, 1, 3, 4, 5, 6, 1, 2, 3, 4, 6, 0, 1, 2, 4, 5, 6, 0, 2, 3, 4];
    private listOfMonths: string[] = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    private listOfWeeks: Array<number[]>;

    constructor() { }

    public mountMonth(month: number, year: number): Month {
        this.daysForMonth[1] = year % 4 == 0 ? 29: 28;
        this.listOfWeeks = [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]];
        let initialDayOfYear: number = (this.sequenceYears[(year % 1000) % this.sequenceYears.length]);
        let initialDayOfMonth: number = (initialDayOfYear + this.getSumDaysTo(month)) % 7;
        let initialDayOfWeek:number = initialDayOfMonth;
        let accumulatorOfDays: number = 1;
        let maximumDayOfMonth: number = this.daysForMonth[month];
        for (let week = 0; week < 6; week++){
            accumulatorOfDays = this.fillWeek(initialDayOfWeek, accumulatorOfDays, week, maximumDayOfMonth);
            initialDayOfWeek = 0;
        }
        let date: Date = new Date();
        let day: number = (date.getMonth()) == month ? date.getDate() : 0;
        let newMonth = new Month(this.listOfMonths[month], this.listOfWeeks, day, (month + 1));
        return newMonth;
    }
    private fillWeek(intialDay: number, dayCounter: number, numberOfWeek: number, maximumDayForMonth: number): number {
        for(let day: number = intialDay; day < 7 && (dayCounter <= maximumDayForMonth); day++){
            (this.listOfWeeks[numberOfWeek])[day] = dayCounter;
            dayCounter++;
        }
        return dayCounter;
    }
    private getSumDaysTo(actualMonth: number): number {
        let result: number = 0;
        for (let month: number = 0; month < actualMonth; month++){
            result += this.daysForMonth[month];
        }
        return result;
    }

    
}
@Injectable()
export class Month {
    private name: string;
    private days: Array<number[]>;
    private actualDay: number;
    private month: number;

    constructor(nameOfMonth: string, days: Array<number[]>, actualDay: number, month: number) {
        this.name = nameOfMonth;
        this.days = days;
        this.actualDay = actualDay;
        this.month = month;
    }

    public getName(): string {
        return this.name;
    }
    public getDays(): Array<number[]> {
        return this.days;
    }
    public getActualDay(): number {
        return this.actualDay;
    }
    public getMonth(): number {
        return this.month;
    }
}