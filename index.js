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
    })