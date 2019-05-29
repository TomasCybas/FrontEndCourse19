var arr = [
    ["2017-07-06 12:59:45", "LRS123", "1000", "120"],
    ["2017-07-07 13:59:45", "LRS123", "2000", "100"],
    ["2017-07-08 14:59:45", "LRS123", "500", "121"],
    ["2017-07-09 15:59:45", "LRS123", "4000", "180"],
];
var html ="";
for (var i = 0; i < arr.length; i++) {
    var item = arr[i];
    html += '<tr>' +
        '<td>'+ item[0] +'</td>' + //Date time
        '<td>'+ item[1] +'</td>' + //Plate
        '<td>'+ item[2] +'</td>' + //Distance
        '<td>'+ item[3] +'</td>' + //Time
        '<td>'+ item[4] +'</td>' + //Speed
        '</tr>';
}
document.getElementById('content').innerHTML = html;
