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

            console.log("Total Sur: " + ZonaS);
            console.log("Total Norte: " + ZonaN);
            console.log("Total Central: " + ZonaC);
            console.log("Total Este: " + ZonaE);
            console.log("Total Oeste: " + ZonaO);

            console.log("%Sur: " + ((ZonaS/total)*100).toFixed(2) + "%");
            console.log("%Norte: " + ((ZonaN/total)*100).toFixed(2) + "%");
            console.log("%Central: " + ((ZonaC/total)*100).toFixed(2) + "%");
            console.log("%Este: " + ((ZonaE/total)*100).toFixed(2) + "%");
            console.log("%Oeste: " + ((ZonaO/total)*100).toFixed(2) + "%");
        });
}

inciso1();