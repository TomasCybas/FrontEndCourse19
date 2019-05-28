function calculate() {
    var height = document.getElementById('height').value;
    var width = document.getElementById('width').value;
    area = height * width;
    perimeter = 2 * (+height + +width);
    diagonal = Math.sqrt(height * height + width * width);
    document.getElementById('result').innerHTML = "Plotas = " + area + "<br>" + "Perimteras = " + perimeter +
        "<br>" + "Istrizaine = " + diagonal;

}