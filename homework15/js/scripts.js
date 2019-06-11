"use strict";
var board = [
    [{}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}],
];


function initGame() {
    var piecesArr = document.getElementsByTagName('I');
    for (let i = 0; i < piecesArr.length; i++) {
        piecesArr[i].draggable = true;
    }
    var playSquaresArr = document.getElementsByClassName('cell-black');
    for (let i = 0; i < playSquaresArr.lengthl; i++) {
        var elm = playSquaresArr[i];
        elm.addEventListener('dragover', function(ev){
            allowDrop(ev);
            console.log(elm);
        });
        elm.addEventListener('drop', function(ev) {
            drop (ev);
        })
    }


}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("Text", ev.target.id);
}

function drop(ev) {
    var data = ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(data));
    ev.preventDefault();
}