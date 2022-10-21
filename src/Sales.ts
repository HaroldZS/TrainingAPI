import { Csvtype, Saletype, Salerestype } from './CustomType.ts';
import Sale from './Sale.ts';


export default class Sales {

    private listSale: Array<Sale>;

    constructor(filejson: Array<Csvtype>){
        this.listSale = this.generateList(filejson);
    }

    public getSales(): Array<Sale> {
        return this.listSale;
    }

    public groupBy(key: keyof Saletype): Array<Salerestype> {
        const params: Array<string> = this.paramsBy(key);

        const res = params.map((param) => {
            let saleCount = 0;
            this.listSale.forEach((item) => {
                if(param === item.getBy(key)){
                    saleCount++;
                }
            });
            return { param, "sales": saleCount }
        });
        return res;
    }

    private paramsBy(key: keyof Saletype): Array<string> {
        const params: Array<string> = this.listSale.map((item: Sale) => item.getBy(key));
        return params.filter((item: string, i: number) => params.indexOf(item) == i);
    }

    private generateList(filejson: Array<Csvtype>): Array<Sale> {
        return filejson.map((item) => {
            return new Sale(
                item.Zone,
                item.Store,
                item["Salesman name"],
                item.Date
            )
        });
    }

}