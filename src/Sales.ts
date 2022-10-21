import { Csvjson } from './Csvjson.ts';
import Sale from './Sale.ts';

export default class Sales {

    private listSale: Array<Sale>;

    constructor(filejson: Csvjson[]){
        this.listSale = this.generateList(filejson);
    }

    public getSales(): Array<Sale>{
        return this.listSale;
    }

    private generateList(filejson: Csvjson[]): Array<Sale>{
        let list: Array<Sale> = [];
        list = filejson.map((item) => (new Sale(item.Zone, item.Store, item["Salesman name"], item.Date)));
        return list;
    }

}