const jsonFile = require('./csvjson.json');
const { filtrarVentas } = require('./functions');


/* Promedio de ventas por zona del 2020 - 2022 */
const { result: zonas, ventasTotales: zonasVentasTotales } = filtrarVentas(jsonFile, 'Zone', 2020, 2022);
const promedioZonas = zonas.map((item) => ({...item, promedio: Number(((item.ventas/zonasVentasTotales) * 100).toFixed(2))}));

console.log("(1) Promedio de ventas por zona del 2020 - 2022");
console.table(promedioZonas);
console.log("\n\n\n");




/* Tiendas Cerradas por menor cantidad de ventas del 2020 al 2022 */
const { result: tiendas } = filtrarVentas(jsonFile, 'Store', 2020, 2022);
const menorCantidadVentas = tiendas.sort((a, b) => a.ventas - b.ventas)[0].ventas;
const tiendasCerradas = tiendas.filter((item) => item.ventas === menorCantidadVentas);

console.log("(2) Tiendas Cerradas por menor cantidad de ventas del 2020 al 2022");
console.table(tiendasCerradas);
console.log("\n\n\n");




const { result: vendedores } = filtrarVentas(jsonFile, 'Salesman name', 2021, 2021);

/* El mejor vendedor del 2021 */
const numeroMejorVendedor = vendedores.sort((a, b) => b.ventas - a.ventas)[0].ventas;
const mejoresVendedores = vendedores.filter(item => item.ventas === numeroMejorVendedor);

console.log("(3) El mejor vendedor del 2021");
console.table(mejoresVendedores);
console.log("\n\n\n");





/*El peor vendedor del 2021*/
const numeroPeorVendedor = vendedores.sort((a, b) => a.ventas - b.ventas)[0].ventas;
const peoresVendedores = vendedores.filter(item => item.ventas === numeroPeorVendedor);

console.log("(3) El peor vendedor del 2021");
console.table(peoresVendedores);
console.log("\n\n\n");




/* Promovido o despedido */
const { result: postulantes } = filtrarVentas(jsonFile, 'Salesman name', 2020, 2022);
const numeroMejorPostulantes = postulantes.sort((a, b) => b.ventas - a.ventas)[0].ventas;
const numeroPeorPostulantes = postulantes.sort((a, b) => a.ventas - b.ventas)[0].ventas;

const result = postulantes.map(item => {
    if(item.ventas === numeroMejorPostulantes){
        return {...item, msg: 'Promovido'};
    }else if(item.ventas === numeroPeorPostulantes){
        return {...item, msg: 'Despedido'};
    }else{
        return {...item, msg: '--'};
    }
});

console.log("(4) Promovido o despedido");
console.table(result);
console.log("\n\n\n");
