import { Saletype } from './CustomType.ts';

export default class Sale {

    private zone: string;
    private store: string;
    private salesman: string;
    private salesdate: string;
 
    constructor(zone: string, store: string, salesman: string, salesdate: string){
        this.zone = zone;
        this.store = store;
        this.salesman = salesman;
        this.salesdate = salesdate;
    }

    public getBy(key: keyof Saletype): string{
        const options: Saletype = {
            zone: this.zone, 
            strore: this.store, 
            salesman: this.salesman, 
            salesdate: this.salesdate
        }
        return options[key] || "undefined";
    }

}