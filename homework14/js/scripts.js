//Triangle verification & calculation
function calc() {
    var a = parseFloat(document.getElementById('a').value);
    var b = parseFloat(document.getElementById('b').value);
    var c = parseFloat(document.getElementById('c').value);
    var p = ((a + b + c) / 2);
    if (a + b > c && a + c > b && b + c > a) {
        if (a === b === c) {
            type = "Lygiakraštis";
            document.getElementById('type').innerHTML = "Trikampis " + type;
        } else {
            if ((a * a + b * b === c * c) || (a * a + c * c === b * b) || (b * b + c * c === a * a)) {
                type = "Statusis";
                document.getElementById('type').innerHTML = "Trikampis " + type;
            } else {
                if (a === c || a === b || b === c) {
                    type = "Lygiašonis";
                    document.getElementById('type').innerHTML = "Trikampis " + type;
                } else {
                    type = "Įvairiakraštis";
                    document.getElementById('type').innerHTML = "Trikampis " + type;
                }

            }

        }
        area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
        document.getElementById('result').innerHTML = "Trikampio plotas " + area;

    } else {
        document.getElementById('result').innerHTML = "Trikampis negalimas";
    }
}

// Speed calculation


var car = ["2017-07-06 19:59:45", "LRS123", 5000, 118];
var speed = 0;

function carSpeed() {
    speed = (car[2] / 1000) / (car[3] / 360);
    return speed.toFixed(2)

}

function display() {
    document.getElementById("date").innerHTML = car[0];
    document.getElementById("plate").innerHTML = car[1];
    document.getElementById("distance").innerHTML = car[2];
    document.getElementById("time").innerHTML = car[3];
    document.getElementById("speed").innerHTML = carSpeed();
}