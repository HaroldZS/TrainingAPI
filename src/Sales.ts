import { Csvtype, Saletype, Salerestype, Avgtype, Shoptype } from './CustomType.ts';
import Sale from './Sale.ts';


export default class Sales {

    private listSale: Array<Sale>;

    constructor(filejson: Array<Csvtype>){
        this.listSale = this.generateList(filejson);
    }

    public getSales(): Array<Sale> {
        return this.listSale;
    }

    public avgZone(): Array<Avgtype> {
        const {group, totalsales}: Salerestype = this.groupBy('zone', 2020, 2022);
        return group.map((item) => {
            const avg: string = (100*(item.sales / totalsales)).toFixed(2)+"%";
            return {...item, avg};
        });
    }

    public closeShop(): Array<Shoptype> {
        const {group}: Salerestype = this.groupBy('strore', 2020, 2022);
        const minSale = group.sort((a, b) => a.sales - b.sales)[0].sales;
        return group.filter((item) => item.sales === minSale);
    }

    public betterSalesMan(): Array<Shoptype> {
        const {group}: Salerestype = this.groupBy('salesman', 2021, 2021);
        const maxSale = group.sort((a, b) => b.sales - a.sales)[0].sales;
        return group.filter((item) => item.sales === maxSale);
    }

    public worseSalesMan(): Array<Shoptype> {
        const {group}: Salerestype = this.groupBy('salesman', 2021, 2021);
        const minSale = group.sort((a, b) => a.sales - b.sales)[0].sales;
        return group.filter((item) => item.sales === minSale);
    }

    public statuSalesMan(promoted: boolean): Array<Shoptype> {
        const {group}: Salerestype = this.groupBy('salesman', 2020, 2022);
        const minSale = group.sort((a, b) => a.sales - b.sales)[0].sales;
        const maxSale = group.sort((a, b) => b.sales - a.sales)[0].sales;

        if(promoted){
            return group.filter((item) => item.sales === maxSale);
        }else{
            return group.filter((item) => item.sales === minSale);
        }
    }

    private groupBy(key: keyof Saletype, year_ini: number, year_limit: number): Salerestype {
        const params: Array<string> = this.paramsBy(key);
        let totalSaleCount = 0;

        const group = params.map((param) => {
            let saleCount = 0;
            
            this.listSale.forEach((item) => {
                if(
                    param === item.getBy(key) &&
                    item.getYear() >= year_ini &&
                    item.getYear() <= year_limit
                ){
                    totalSaleCount++;
                    saleCount++;
                }
            });
            return { param, "sales": saleCount }
        });

        return {group, totalsales: totalSaleCount};
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