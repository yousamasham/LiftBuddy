function loginClicked(){
    var username = document.getElementById("Username").value;
    var password = document.getElementById("Password").value;
    var errorMessage = document.getElementById("loginError")
    errorMessage.style.display = "none"

    if (username == "admin" && password == "admin"){
        window.location.href = "homepage.html"
    }

    else{
        errorMessage.style.display = "block"
    }
}

function hasWhiteSpace(s) {
    return s.indexOf(' ') >= 0;
  }

function registerClicked(){
    window.location.href = "register.html"
}

document.addEventListener('keypress', (event) => {
    var name = event.key;

    if (name == "Enter"){
        document.getElementById("login").click()
    }
  }, false);