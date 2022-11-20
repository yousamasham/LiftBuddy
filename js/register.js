function registerClicked(){
    
    var fName = document.getElementById("firstName")
    var lName = document.getElementById("lastName")
    var email = document.getElementById("email")
    var ogPassword = document.getElementById("password")
    var secPassword = document.getElementById("password2")
    fName.style.borderBlockColor = "unset"
    lName.style.borderBlockColor = "unset"
    email.style.borderBlockColor = "unset"
    ogPassword.style.borderBlockColor = "unset"
    secPassword.style.borderBlockColor = "unset"
    var re = new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")
    var fnError = document.getElementById("fnErrorMessage")
    var lnError = document.getElementById("lnErrorMessage")
    var eError = document.getElementById("emErrorMessage")
    var pwError = document.getElementById("pwErrorMessage")
    var epError = document.getElementById("epErrorMessage")
    var pwInvalidError = document.getElementById("pwInvalidErrorMessage")
    fnError.style.display = "none"
    lnError.style.display = "none"
    eError.style.display = "none"
    pwError.style.display = "none"
    epError.style.display = "none"
    pwInvalidError.style.display = "none"

    //first name check
    if(fName.value == "" || hasWhiteSpace(fName.value)){
        fName.style.borderBlockColor = "red"
        fnError.style.display = "block"
        return
    }

    //last name check
    if (lName.value == "" || hasWhiteSpace(lName.value)){
        lName.style.borderBlockColor = "red"
        lnError.style.display = "block"
        return
    }

    //email checks
    if (!re.test(email.value)){
        email.style.borderBlockColor = "red"
        eError.style.display = "block"
        return
    }

    //password check empty
    if (ogPassword.value == ""){
        ogPassword.style.borderBlockColor = "red"
        epError.style.display = "block"
        return
    }

    //password check space
    if (hasWhiteSpace(ogPassword.value)){
        ogPassword.style.borderBlockColor = "red"
        pwInvalidError.style.display = "block"
        return
    }

    //check if passwords match
    if (ogPassword.value != secPassword.value){
        ogPassword.style.borderBlockColor = "red"
        secPassword.style.borderBlockColor = "red"
        pwError.style.display = "block"
        return
    }

    window.location.href = "homepage.html"
}

function hasWhiteSpace(s) {
    return s.indexOf(' ') >= 0;
  }

document.addEventListener('keypress', (event) => {
var name = event.key;

if (name == "Enter"){
    document.getElementById("login").click()
    }
}, false);