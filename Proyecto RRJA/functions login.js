function login (){
    var user, password;
    
    user = document.getElementById('nombre').value;
    password = document.getElementById('password').value;

if (user == "gabrielprofe" && password == "123456"){

    window.location = "Home.html";
 } else {
    alert ('El usuario no es válido')
 }
}
