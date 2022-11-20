function loginClicked(){
    var username = document.getElementById("Username");
    var password = document.getElementById("Password");
    var errorMessage = document.getElementById("loginError")
    username.style.borderBlockColor = "unset"
    password.style.borderBlockColor = "unset"
    errorMessage.style.display = "none"

    if (username.value == "admin" && password.value == "admin"){
        window.location.href = "homepage.html"
    }

    else{
        username.style.borderBlockColor = '#A6192E'
        password.style.borderBlockColor = '#A6192E'
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