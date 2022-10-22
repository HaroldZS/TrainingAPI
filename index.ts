import csvjson from './api/csvjson.json' assert {type: 'json'}
import Sales from './src/Sales.ts';

const sale = new Sales(csvjson);

console.log("\n\n");

console.log("Promedio de ventas por zona del 2020 - 2022");
console.table(sale.avgZone());
console.log("\n\n");

console.log("Tienda cerrada por menores ventas del 2020 - 2022");
console.table(sale.closeShop());
console.log("\n\n");

console.log("Mejor vendedor 2021");
console.table(sale.betterSalesMan());
console.log("\n\n");

console.log("Vendedores con peores ventas el 2021");
console.table(sale.worseSalesMan());
console.log("\n\n");

console.log("Despedir vendedores 2020 - 2022");
console.table(sale.statuSalesMan(false));
console.log("\n\n");


console.log("Ascender vendedores 2020 - 2022");
console.table(sale.statuSalesMan(true));
console.log("\n\n");