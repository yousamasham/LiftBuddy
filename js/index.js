function loginClicked(){
    var username = document.getElementById("Username").value;
    var password = document.getElementById("Password").value;

    if (username == "admin" && password == "admin"){
        window.location.href = "nextpage.html"
    }

    else{
        var errorMessage = document.getElementById("loginError")
        errorMessage.style.display = "block"
    }
}