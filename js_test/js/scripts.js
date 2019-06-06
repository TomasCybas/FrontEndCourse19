function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        console.log(this.readyState)
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML =
                this.response;
        }
    };
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    xhttp.send();
}