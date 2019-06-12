'use strict';

var carData = [];
var entryId = 0;

document.getElementById("cars_form").addEventListener("submit", function (e) {
    e.preventDefault();
    addCar();
    $('#carsFormModal').modal('hide')
        .on('hidden.bs.modal', function () { //resets modal form values
            $(this).find('form').trigger('reset');
        })
});

function Car(id, date, nr, s, t) {
    this.entryId = id;
    this.date = date;
    this.numberPlate = nr;
    this.travelDistance = s;
    this.travelTime = t;
    this.speed = (this.travelDistance / this.travelTime * 3.6).toFixed(2);
}
var inputDate = document.getElementById("date");
var inputNumPlate = document.getElementById("num_plate");
var inputDistance = document.getElementById("distance");
var inputTravelTime = document.getElementById("travel_time");
function addCar() {
    var car = new Car(
        entryId.toString(),
        inputDate.value,
        inputNumPlate.value,
        inputDistance.value,
        inputTravelTime.value,
    );
    carData.push(car);
    entryId++;
    console.log(carData);
    displayData();

}



function displayData() {
    let html = "";
    for (let i = 0; i < carData.length; i++) {
        let item = carData[i];
        html += '<tr data-car-id="' + entryId + '"> ' +
            '<td>' + item.date + '</td>' +
            '<td>' + item.numberPlate + '</td>' +
            '<td>' + item.travelDistance + '</td>' +
            '<td>' + item.travelTime + '</td>' +
            '<td>' + item.speed + '</td>' +
            '<td><button type="button" class="btn btn-primary btn-sm edit" data-car-item-id="' + item.entryId +
            '">Redaguoti įrašą</button></td>' +
            '<td><button type="button" class="btn btn-danger btn-sm delete" data-car-item-id="' + item.entryId +
            '">Ištrinti įrašą</button></td>' +
            '</tr>'
    }
    document.getElementById('cars_table').innerHTML = html;
    addEventListeners();
}

function addEventListeners() {
    //Handle edit events
    var editElements = document.getElementsByClassName('edit');
    for (let i = 0; i < editElements.length; i++) {
        var elm = editElements[i];
        elm.addEventListener('click', function (e) {
            e.preventDefault();
            editData(this.getAttribute('data-car-item-id'));
            return false
        });
    }
    //Handle delete events
    var deleteElements = document.getElementsByClassName('delete');
    for (let i = 0; i < deleteElements.length; i++) {
        let elm = deleteElements[i];
        elm.addEventListener('click', function (e) {
            e.preventDefault();
            deleteData(this.getAttribute('data-car-item-id'));
            return false
        });
    }


}

function getCarItem(id) {
    var carItem = null;
    for (let i = 0; i < carData.length; i++) {
        var item = carData[i];
        if (item.entryId === id) {
            carItem = item;
            break;
        }
    }
    return carItem;


}

function deleteData(id) { //deletes entry by index and redraws table;
    let index = carData.findIndex(car => car.entryId === id);
    if (confirm("Ar tikrai norite ištrinti?")){
        carData.splice(index, 1);
        displayData();
    }
    return false;

}

function editData(id) {
    let item = getCarItem(id);
    $('#carsFormModal').modal()
        .on('shown.bs.modal', function(){
            $('#date').val(item.date);
            $('#num_plate').val(item.numberPlate);
            $('#distance').val(item.travelDistance);
            $('#travel_time').val(item.travelTime);
        })
}


/*function callSubmitModal(){
    $('#carsFormModal').modal();
    $('#cars_form').on('submit', function(e){
        e.preventDefault();
        addCar();
            })
        .on('hidden.bs.modal', function () { //resets modal form values
            $(this).find('form').trigger('reset');
        })

}*/


/*<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
    Launch demo modal
</button>*/
