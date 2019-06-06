'use strict';
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
               var data = this.responseText;
            data = JSON.parse(data);
            displayData(data);
        }
    };
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    xhttp.send();
}

//Display the data from JSON in a table
function displayData(data) {
    var html = "";
    data.forEach(function (element) {
        console.log(element);
        html += '<tr>';
        for (let j in element) {
            if (element.hasOwnProperty(j)){
                html += '<td>' + element[j] + '</td>';
            }
        }
        html += '</tr>';
        console.log(html);
    });
    document.getElementById('posts_table').innerHTML = html;
}



