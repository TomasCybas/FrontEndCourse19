document.getElementById('password').addEventListener('submit', function(e){
    e.preventDefault();
    var pass1 = document.getElementById('inputPassword').value;
    var pass2 = document.getElementById('repeatPassword').value;

    console.log(pass1);
    console.log(pass2);
    validate(pass1, pass2)
});



function validate(pass1, pass2) {
    if (pass1 === pass2) {
        document.getElementById('button').innerHTML = ('Processing... '
            + '<i class="fas fa-spinner fa-spin"></i>')
    } else {
        alert("Passwords do not match");
    }
}