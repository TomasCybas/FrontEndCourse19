function calculate() {
    var height = parseFloat(document.getElementById('height').value);
    var width = parseFloat(document.getElementById('width').value);
    area = height * width;
    perimeter = 2 * (height + width);
    diagonal = Math.sqrt(height ** 2 + width ** 2);
    document.getElementById('result').innerHTML = "Plotas = " + area + "<br>" + "Perimteras = " + perimeter +
        "<br>" + "Istrizaine = " + diagonal;
}
