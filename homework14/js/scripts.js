function calc() {
    var a = parseFloat(document.getElementById('a').value);
    var b = parseFloat(document.getElementById('b').value);
    var c = parseFloat(document.getElementById('c').value);
    var p = ((a + b + c) / 2);
    if (a + b > c && a + c > b && b + c > a) {
        if (a === b === c) {
            trikampis = "Lygiakraštis";
            document.getElementById('type').innerHTML = "Trikampis " + trikampis;
        } else {
            if (a === c || a === b || b === c) {
                trikampis = "Lygiašonis";
                document.getElementById('type').innerHTML = "Trikampis " + trikampis;
            } else {
                trikampis = "Įvairiakraštis";
                document.getElementById('type').innerHTML = "Trikampis " + trikampis;
            }
        }
        area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
        document.getElementById('result').innerHTML = "Trikampio plotas " + area;

    }else {
            document.getElementById('result').innerHTML = "Trikampis negalimas";
        }
    }



