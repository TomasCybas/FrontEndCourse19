'use strict';

var carData = [];
var entryId = 0;
var isNewEntry = 1; //checks if entry is new or edited
var buttonId = 0;


document.getElementById("cars_form").addEventListener("submit", function (e) {
    e.preventDefault();
    if(isNewEntry === 1){
        addCar();
        $('#carsFormModal').modal('hide')
            .on('hidden.bs.modal', function () { //resets modal form values
                $(this).find('form').trigger('reset');
            })
    }
    else {
        editCar(buttonId);
        $('#carsFormModal').modal('hide')
            .on('hidden.bs.modal', function () { //resets modal form values
                $(this).find('form').trigger('reset');
            })
    }

});

function Car(id, date, nr, s, t) {
    this.entryId = id;
    this.date = date;
    this.numberPlate = nr;
    this.travelDistance = s;
    this.travelTime = t;
    this.speed = (this.travelDistance / this.travelTime * 3.6).toFixed(2);
}

// Adds a new entry to the carData array
function addCar() {
    var car = new Car(
        entryId.toString(),
        document.getElementById("date").value,
        document.getElementById("num_plate").value,
        document.getElementById("distance").value,
        document.getElementById("travel_time").value,
    );
    carData.push(car);
    entryId++;
    console.log(carData);
    displayData();
}

//generates table
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
    //Handles edit events
    var editButtons = document.getElementsByClassName('edit');
    for (let i = 0; i < editButtons.length; i++) {
        var elm = editButtons[i];
        elm.addEventListener('click', function (e) {
            e.preventDefault();
            isNewEntry = 0;
            buttonId = this.getAttribute('data-car-item-id');
            editData(buttonId);
            return false
        });
    }
    //Handles delete events
    var deleteButtons = document.getElementsByClassName('delete');
    for (let i = 0; i < deleteButtons.length; i++) {
        let elm = deleteButtons[i];
        elm.addEventListener('click', function (e) {
            e.preventDefault();
            buttonId = this.getAttribute('data-car-item-id');
            deleteData(buttonId);
            return false
        });
    }
}

//gets object to be edited in array
function getCarItem(buttonId) {
    var carItem = null;
    for (let i = 0; i < carData.length; i++) {
        var item = carData[i];
        if (item.entryId === buttonId) {
            carItem = item;
            break;
        }
    }
    return carItem;
}

//deletes entry by index and redraws table;
function deleteData(buttonId) {
    let index = carData.findIndex(car => car.entryId === buttonId);
    if (!confirm("Ar tikrai norite ištrinti?"))
    {
        return false
    }
        carData.splice(index, 1);
        displayData();
}

//Handles edit modal input fields
function editData(buttonId) {
    let item = getCarItem(buttonId);
    $('#carsFormModal').modal()
        .on('shown.bs.modal', function() {
            $('#date').val(item.date);
            $('#num_plate').val(item.numberPlate);
            $('#distance').val(item.travelDistance);
            $('#travel_time').val(item.travelTime);
        })
}

//Replaces object in carData array with edited object and redraws table
function editCar(buttonId){
    let index = carData.findIndex(car => car.entryId === buttonId);
    var car = new Car(
        entryId.toString(),
        document.getElementById("date").value,
        document.getElementById("num_plate").value,
        document.getElementById("distance").value,
        document.getElementById("travel_time").value,
    );
    carData.splice(index, 1, car);
    displayData()
}

