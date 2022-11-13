function registerClicked(){
    
    var fName = document.getElementById("firstName")
    var lName = document.getElementById("lastName")
    var email = document.getElementById("email")
    var ogPassword = document.getElementById("password")
    var secPassword = document.getElementById("password2")
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
        lnError.style.display = "block"
        return
    }

    //email checks
    if (!re.test(email.value)){
        eError.style.display = "block"
        return
    }

    //password check empty
    if (ogPassword.value == ""){
        epError.style.display = "block"
        return
    }

    //password check space
    if (hasWhiteSpace(ogPassword.value)){
        pwInvalidError.style.display = "block"
        return
    }

    //check if passwords match
    if (ogPassword.value != secPassword.value){
        pwError.style.display = "block"
        return
    }
}

function hasWhiteSpace(s) {
    return s.indexOf(' ') >= 0;
  }