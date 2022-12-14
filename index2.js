const arrData = require('./csvjson.json');

// Inciso 1 - Promedio de ventas por zona del 2020 - 2022

console.log("----------------------------------- INCISO 1 -----------------------------------");

// Valores únicos de zonas
const total = arrData.filter(item =>  (item.Date.includes('2020') || item.Date.includes('2021') || item.Date.includes('2022'))).length;
let zonas = [];
for(let i=0; i < arrData.length; i++){
    if(!zonas.includes(arrData[i].Zone)){
        zonas.push(arrData[i].Zone);
    }
}

let inciso1 = [];
for(let i=0; i < zonas.length; i++){
    const nuevaZona = arrData.filter(item =>  (item.Date.includes('2020') || item.Date.includes('2021') || item.Date.includes('2022')) && item.Zone === zonas[i]);
    inciso1.push({"Zona": zonas[i], "Ventas": nuevaZona.length, "Promedio": ((nuevaZona.length/total)*100).toFixed(2) + " %"});
}

console.log("El total es "+total);
console.table(inciso1);

// fin inciso 1


//Inciso 2 - Tiendas cerradas por menor cantidad de ventas del 2020 - 2022

console.log("----------------------------------- INCISO 2 -----------------------------------");

const tiendas = [];
for(let i=0; i < arrData.length; i++){
    if(!tiendas.includes(arrData[i].Store)){
        tiendas.push(arrData[i].Store);
    }
}

let tiendasVentas = [];
for(let i=0; i < tiendas.length; i++){
    const nuevaTienda = arrData.filter(item =>  (item.Date.includes('2020') || item.Date.includes('2021') || item.Date.includes('2022')) && item.Store === tiendas[i]);
    tiendasVentas.push({"Tienda": tiendas[i], "Ventas": nuevaTienda.length});
}

const inciso2 = [...tiendasVentas].sort((a,b)=> a.Ventas - b.Ventas);
console.table(inciso2);

const min = inciso2[0].Ventas;
const cerrarTiendas = [];
console.log("Se tienen que cerrar las siguientes tiendas:");
for(let i=0; i < inciso2.length; i++){
    if(inciso2[i].Ventas == min){
        cerrarTiendas.push({"Tienda":inciso2[i].Tienda});
    }
}

console.table(cerrarTiendas);

// fin inciso 2

//Inciso 3 - El mejor vendedor del 2021
console.log("----------------------------------- INCISO 3 -----------------------------------");

const arrData2021 = [...arrData].filter(item => item.Date.includes('2021'));

const vendedores = [];
for(let i=0; i < arrData2021.length; i++){
    if(!vendedores.includes(arrData2021[i]['Salesman name'])){
        vendedores.push(arrData2021[i]['Salesman name']);
    }
}

let ventasVendedores = [];
for(let i=0; i < vendedores.length; i++){
    const nuevoVendedor = arrData2021.filter(item => item['Salesman name'] === vendedores[i]);
    ventasVendedores.push({"Vendedor": vendedores[i], "Ventas": nuevoVendedor.length});
}

console.table(ventasVendedores);

const inciso3 = [...ventasVendedores].sort((a,b)=> a.Ventas - b.Ventas);
console.table(inciso3);

const maxVentas = inciso3[inciso3.length-1].Ventas;
const mejores = [];
console.log("Los mejores vendedores son:");
for(let i=0; i < inciso3.length; i++){
    if(inciso3[i].Ventas == maxVentas){
    mejores.push({"Vendedor":inciso3[i].Vendedor});
    }
}

console.table(mejores);

// fin inciso 3

//Inciso 4 - El peor vendedor del 2021
console.log("----------------------------------- INCISO 4 -----------------------------------");

console.table(inciso3);

const minVentas = inciso3[0].Ventas;
const peores = [];
console.log("Los peores vendedores son:");
for(let i=0; i < inciso3.length; i++){
    if(inciso3[i].Ventas == minVentas){
    peores.push({"Vendedor":inciso3[i].Vendedor});
    }
}

console.table(peores);

// fin inciso 4


//Inciso 5 - promovido o despedido segun promedio de ventas del 2020 al 2022
// Ej. pqq353 2020: 19, 2021: 24, 2022: 105, promedio: 49,33
console.log("----------------------------------- INCISO 5 -----------------------------------");

const arrRango = [...arrData].filter(item => (item.Date.includes('2020') || item.Date.includes('2021') || item.Date.includes('2022')));

const vendedoresRango = [];
for(let i=0; i < arrRango.length; i++){
    if(!vendedoresRango.includes(arrRango[i]['Salesman name'])){
        vendedoresRango.push(arrRango[i]['Salesman name']);
    }
}

let rangoVentas = [];
for(let i=0; i < vendedoresRango.length; i++){
    const nuevoRango2020 = arrRango.filter(item =>  item.Date.includes('2020') && item['Salesman name'] === vendedoresRango[i]);
    const nuevoRango2021 = arrRango.filter(item =>  item.Date.includes('2021') && item['Salesman name'] === vendedoresRango[i]);
    const nuevoRango2022 = arrRango.filter(item =>  item.Date.includes('2022') && item['Salesman name'] === vendedoresRango[i]);
    rangoVentas.push({"Vendedor": vendedoresRango[i], "Ventas2020": nuevoRango2020.length, "Ventas2021": nuevoRango2021.length, "Ventas2022": nuevoRango2022.length, "Promedio": ((nuevoRango2020.length+nuevoRango2021.length+nuevoRango2022.length)/3).toFixed(2)});
}

const inciso5 = [...rangoVentas].sort((a,b)=> a.Promedio - b.Promedio);
console.table(inciso5);

const minPromedio = inciso5[0].Promedio;
const maxPromedio = inciso5[inciso5.length-1].Promedio;

const promovidos = [];
const despedidos = [];

for(let i=0; i < inciso5.length; i++){
    if(inciso5[i].Promedio == maxPromedio){
    promovidos.push({"Vendedor":inciso5[i].Vendedor});
    }
    if(inciso5[i].Promedio == minPromedio){
        despedidos.push({"Vendedor":inciso5[i].Vendedor});
    }
}

console.log("Los vendedores promovidos son:");
console.table(promovidos);

console.log("Los vendedores despedidos son:");
console.table(despedidos);

// fin inciso 5