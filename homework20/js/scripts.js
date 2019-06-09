'use strict';

var carData = [];

document.getElementById("cars_form").addEventListener("submit", function (e) {
    e.preventDefault();
    addCar();
    $('#carsFormModal').modal('hide')
    .on('hidden.bs.modal', function () { //resets modal form values
        $(this).find('form').trigger('reset');
    })
});

function Car(date, nr, s, t) {
    this.date = date;
    this.numberPlate = nr;
    this.travelDistance = s;
    this.travelTime = t;
    this.speed = (this.travelDistance / this.travelTime * 3.6).toFixed(2);
}

function addCar() {
    let car = new Car(
        document.getElementById("date").value,
        document.getElementById("num_plate").value,
        document.getElementById("distance").value,
        document.getElementById("travel_time").value,
    );
    carData.push(car);
    console.log(carData);
    console.log(car);
    displayData(carData)
}

function displayData(carData) {
    let html = "";
    let entryId = 0;
    carData.forEach(function (element) {
        html += '<tr ' + 'id=' + '"' + entryId++ + '"' + '>';
        for (let i in element) {
            if (element.hasOwnProperty(i)) {
                html += '<td>' + element[i] + '</td>'
            }
        }
        html += '<td>' + '<button type="button" class="btn btn-primary btn-sm">Redaguoti įrašą</button>' + '</td>' +
            '<td>' + '<button type="button" class="btn btn-danger btn-sm">Ištrinti įrašą</button>' + '</td>' + '</tr>';
    });
    document.getElementById('cars_table').innerHTML = html;
}









