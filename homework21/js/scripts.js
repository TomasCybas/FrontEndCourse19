"use strict";

const POSTIT_API_KEY = 'xdmklpTMR5wV0AI86MIP';
var city = "";
var street = "";
var number = "";

$('#address_form').on('submit', function(e){
    e.preventDefault();
    getInputValues();
    getPostalCode();
    return false
});

function getInputValues() {
    city = $('#city').val();
    street = $('#street').val();
    number = $('#number').val();
    if (!city || !street || !number) {
        alert("Užpildykite visus laukelius")
    }
}

function getPostalCode () {
    var request = 'https://api.postit.lt/v2/?' +
                    'city=' + city +
                    '&address=' + street + number +
                    '&key=' +  POSTIT_API_KEY;
    request = encodeURI(request);
    getAjax(request, displayPostalCode);
}

function getAjax(url, callBack){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function()
    {
        if(this.readyState === 4 && this.status === 200)
        {
            callBack(JSON.parse(this.responseText));
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function displayPostalCode(response) {
    if (response.data.length < 1) {
        alert('Pašto kodo rasti nepavyko, patikslinkite adresą')
    }
    else {
        document.getElementById('postal_code',).innerText = 'Pašto kodas: ' + response.data[0].post_code;
    }
}



