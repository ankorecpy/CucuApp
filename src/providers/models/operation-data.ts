export class Operation {
    protected date: Date;
    protected quantity: number;
    protected value: number;

    constructor(date: Date, quantity: number, value: number){
        this.date = date;
        this.quantity = quantity;
        this.value = value;    
    }

    public getDate(): Date {
        return this.date;
    }
    public getQuantity(): number {
        return this.quantity;
    }
    public getvalue(): number {
        return this.value;
    }
    public setQuantity(newQuantity: number): void {
        this.quantity = newQuantity;
    }
    public setValue(newValue: number): void {
        this.value = newValue;
    }
}