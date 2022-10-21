type ParamKey = { key: "zone" | "store" | "salesman" | "salesdate" }
interface Param {
    zone: string, 
    strore: string, 
    salesman: string, 
    salesdate: string
}

export default class Sale {

    public zone: string;
    private store: string;
    private salesman: string;
    private salesdate: string;
 
    constructor(zone: string, store: string, salesman: string, salesdate: string){
        this.zone = zone;
        this.store = store;
        this.salesman = salesman;
        this.salesdate = salesdate;
    }

    public getBy(key: keyof Param): string{
        const options: Param = {
            zone: this.zone, 
            strore: this.store, 
            salesman: this.salesman, 
            salesdate: this.salesdate
        }
        return options[key] || "undefined";
    }

}