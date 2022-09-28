const noRepeat = (file, param) => {
    const coleccion = file.map((item) => item[param]);
    return coleccion.filter((item, pos) => coleccion.indexOf(item) == pos);
}

const filtrarVentas = (file, param, fechaIni, fechaFin) => {
    const coleccion = noRepeat(file, param);
    let result = [];
    let ventasTotales = 0;

    coleccion.forEach((item) => {
        let contador = 0;
        file.forEach((venta) => {
            const [dia, mes, year] = venta.Date.split('/');
            if(venta[param] == item && (year >= fechaIni && year <= fechaFin)){
                contador++;
                ventasTotales++;
            }
        });
        result = [...result, {"title": item, "ventas": contador}];
    });

    return {
        result,
        ventasTotales
    }
}

module.exports = {
    filtrarVentas
}