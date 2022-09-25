let postsElements = '';

fetch('csvjson.json')
    .then(response => {
        return response.json();
    })
    .then(data => {
        for (let i=0; i < data.length; i++){
            postsElements += `<li>${data[i].Zone} - ${data[i].Store}
            - ${data[i]["Salesman name"]} - ${data[i].Date}</li>`;
        }
        document.getElementById('posts').innerHTML = postsElements;
    });

//Inciso1 Harold
function inciso1(){
    let total = 0;
    let ZonaS = 0;
    let ZonaN = 0;
    let ZonaC = 0;
    let ZonaE = 0;
    let ZonaO = 0;

    fetch('csvjson.json')
        .then(res => {
            return res.json();
        })
        .then(data => {
            for(let i=0; i < data.length; i++){
                if(data[i].Date.includes('2020') ||
                    data[i].Date.includes('2021') ||
                    data[i].Date.includes('2022')){

                    total = total+1;

                    if(data[i].Zone.includes("South")){
                        ZonaS = ZonaS+1;
                    }
                    if(data[i].Zone.includes("North")){
                        ZonaN = ZonaN+1;
                    }
                    if(data[i].Zone.includes("Central")){
                        ZonaC = ZonaC+1;
                    }
                    if(data[i].Zone.includes("East")){
                        ZonaE = ZonaE+1;
                    }
                    if(data[i].Zone.includes("West")){
                        ZonaO = ZonaO+1;
                    }

                }
            }
            console.log("El total es: " + total);

            //console.log("Total Sur: " + ZonaS);
            //console.log("Total Norte: " + ZonaN);
            //console.log("Total Central: " + ZonaC);
            //console.log("Total Este: " + ZonaE);
            //console.log("Total Oeste: " + ZonaO);

            console.log("%Sur: " + ((ZonaS/total)*100).toFixed(2) + "%");
            console.log("%Norte: " + ((ZonaN/total)*100).toFixed(2) + "%");
            console.log("%Central: " + ((ZonaC/total)*100).toFixed(2) + "%");
            console.log("%Este: " + ((ZonaE/total)*100).toFixed(2) + "%");
            console.log("%Oeste: " + ((ZonaO/total)*100).toFixed(2) + "%");
            console.log(" ");
        });
}

//Inciso2 Harold
function inciso2(){
    let total = 0;
    let Circ = 0;
    let Amer = 0;
    let Pand = 0;
    let Plaz = 0;
    let Arom = 0;
    let Muyu = 0;
    let Paca = 0;
    let Pueb = 0;
    let Beij = 0;
    let Pana = 0;
    let Kana = 0;

    fetch('csvjson.json')
        .then(res => {
            return res.json();
        })
        .then(data => {
            for(let i=0; i < data.length; i++){
                if(data[i].Date.includes('2020') ||
                    data[i].Date.includes('2021') ||
                    data[i].Date.includes('2022')){

                    total = total+1;

                    if(data[i].Store.includes("Circunvalacion")){
                        Circ = Circ+1;
                    }
                    if(data[i].Store.includes("America")){
                        Amer = Amer+1;
                    }
                    if(data[i].Store.includes("Pando")){
                        Pand = Pand+1;
                    }
                    if(data[i].Store.includes("Plaza")){
                        Plaz = Plaz+1;
                    }
                    if(data[i].Store.includes("Aroma")){
                        Arom = Arom+1;
                    }
                    if(data[i].Store.includes("Muyurina")){
                        Muyu = Muyu+1;
                    }
                    if(data[i].Store.includes("Pacata")){
                        Paca = Paca+1;
                    }
                    if(data[i].Store.includes("Pueblito")){
                        Pueb = Pueb+1;
                    }
                    if(data[i].Store.includes("Beijing")){
                        Beij = Beij+1;
                    }
                    if(data[i].Store.includes("Panamericana")){
                        Pana = Pana+1;
                    }
                    if(data[i].Store.includes("Kanata")){
                        Kana = Kana+1;
                    }

                }
            }
            console.log("El total es: " + total);

            console.log("Total Circunvalación: " + Circ);
            console.log("Total Ámerica: " + Amer);
            console.log("Total Pando: " + Pand);
            console.log("Total Plaza: " + Plaz);
            console.log("Total Aroma: " + Arom);
            console.log("Total Muyurina: " + Muyu);
            console.log("Total Pacata: " + Paca);
            console.log("Total Pueblito: " + Pueb);
            console.log("Total Beijing: " + Beij);
            console.log("Total Panamericana: " + Pana);
            console.log("Total Kanata: " + Kana);

            let arreglo = [Circ,Amer,Pand,Plaz,Arom,Muyu,Paca,Pueb,Beij,Pana,Kana];
            let tienda = ["Circunvalacion","America","Pando","Plaza","Aroma","Muyurina","Pacata","Pueblita","Beijing","Panamericana","Kanata"];
            let menor = minimo(arreglo, 1000);
            let sol = cerrarTiendas(arreglo, tienda, menor);
            imprimirInciso2(sol);
        });
}

function minimo(arreglo, n){
    let min = n;
    for(let i=0; i < arreglo.length; i++){
        if(arreglo[i] < min){
            min = arreglo[i];
        }
    }
    return min;
}

function cerrarTiendas(arreglo, tienda, menor){
    let arrSol = [];
    let pos = 0;
    for (let i=0; i < arreglo.length; i++){
        if(arreglo[i] === menor){
            arrSol[pos] = tienda[i];
            pos = pos+1;
        }
    }
    return arrSol;
}

function  imprimirInciso2(sol){
    console.log("Se tiene que cerra las siguientes tiendas:");
    for(let i=0;i < sol.length; i++){
        console.log((i+1)+". "+sol[i]);
    }
}

inciso1();
inciso2();