import csvjson from './api/csvjson.json' assert {type: 'json'}
import Sales from './src/Sales.ts';

const sale = new Sales(csvjson);

console.log(sale.getSales());