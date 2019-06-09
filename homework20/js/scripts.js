var carData = [];

function Car(date, nr, s, t,){
    this.date = date;
    this.numberPlate = nr;
    this.travelDistance = s;
    this.travelTime = t;
    this.speed = function () {
        return this.travelDistance / this.travelTime * 3.6;
    };
}

function addCar () {
    var car = new Car (
        document.getElementById("date").value,
        document.getElementById("num_plate").value,
        document.getElementById("distance").value,
        document.getElementById("travel_time").value,
    );
    carData.push(car);
    console.log(carData);
    console.log(car);
}


