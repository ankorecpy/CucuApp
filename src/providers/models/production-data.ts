import { Injectable } from '@angular/core';

@Injectable()
export class Production {
    private date: Date;
    private eggsCollected: number;
    private note: string;
    
    constructor(date: Date, eggsCollected: number, note: string){
        this.date = date;
        this.eggsCollected = eggsCollected;
        this.note = note;
    }

    public getDate(): Date {
        return this.date;
    }
    public getEggsCollected(): number {
        return this.eggsCollected;
    }
    public getNote(): string {
        return this.note;
    }

    public setEggsCollected(newEggsCollected: number): void {
        this.eggsCollected = newEggsCollected;
    }
    public setNote(newNote: string): void {
        this.note = newNote;
    }
    
}