function formValidation() {
    clearErrors();
    if (validatefName() == true && validatelName() == true &&
    validateUsername() == true &&
    validatePass() == true && validateRePass() == true &&
    validatePhone() == true &&
    validateStreet() == true &&
    validateCity() == true &&
    validateProv() == true &&
    validatePCode() == true) {
    alert("Registration Success");
        return true;
    } else {
        return false;
    }
}

function validatefName() {
    var error = document.querySelector("#fNameError");
    var elem = document.getElementById("fName");
    var input = elem.value.trim();
    inputCap = input.toUpperCase();
    for (var i = 0; i < input.length; i++) {
        if (inputCap.charAt(i) < "A" || inputCap.charAt(i) > "Z") {
            clearErrors();
            error.innerHTML += "<p>*First name must contain letters only.</p>";
            document.signup.fName.focus();
            return false;
        }
        clearErrors();
        return true;
    }
}

function validatelName() {
    var error = document.querySelector("#lNameError");
    var elem = document.getElementById("lName");
    var input = elem.value.trim();
    inputCap = input.toUpperCase();
    for (var i = 0; i < input.length; i++) {
        if (inputCap.charAt(i) < "A" || inputCap.charAt(i) > "Z") {
            clearErrors();
            error.innerHTML += "<p>*Last name must contain letters only.</p>";
            document.signup.lName.focus();
            return false;
        }
        clearErrors();
        return true;
    }
}

function validateUsername() {
    var error = document.querySelector("#userError");
    var elem = document.getElementById("username");
    var input = elem.value.trim();
    var inputCap = input.toUpperCase();
    for (var i = 0; i < input.length; i++) {
        if (inputCap.charAt(0) < "A" || inputCap.charAt(0) > "Z") {
            clearErrors();
            error.innerHTML += "<p>*Username must start with a letter.</p>";
            document.signup.username.focus();
            return false;
        }
        if (input.length < 6) {
            clearErrors();
            error.innerHTML += "<p>*Username must be at least 6 characters long.</p>";
            document.signup.username.focus();
            return false;
        }
        clearErrors();
        return true;
    }
}

function validatePass() {
    var error = document.querySelector("#passError");
    var elem = document.getElementById("password");
    var input = elem.value.trim();
    var inputCap = input.toUpperCase();
    var input1 = document.signup.password.value.trim();
    var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    for (var i = 0; i < input.length; i++) {
        if (input.length < 8) {
            clearErrors();
            error.innerHTML += "<p>*Password must be at least 8 characters long.</p>";
            document.signup.password.focus();
            return false;
        }
        if (inputCap.charAt(0) < "A" || inputCap.charAt(0) > "Z") {
            clearErrors();
            error.innerHTML += "<p>*Password must start with a letter.</p>";
            document.signup.password.focus();
            return false;
        }
        if (!input1.match(pattern)) {
            clearErrors();
            error.innerHTML += "<p>*Password must contain at least one uppercase letter and one digit.</p>";
            document.signup.password.focus();
            return false;
        }
        clearErrors();
        return true;
    }
}

function validateRePass() {
    var error = document.querySelector("#rePassError");
    var input = document.signup.rePassword.value.trim();
    if (input != document.signup.password.value.trim()) {
        clearErrors();
        error.innerHTML += "<p>*Passwords must match.</p>";
        document.signup.rePassword.focus();
        return false;
    }
    clearErrors();
    return true;
}

function validatePhone() {
    var error = document.querySelector("#phoneError");
    var input = document.signup.phone.value.trim();
    var pattern = /^\d{3}-\d{3}-\d{4}$/;
    if (!input.match(pattern)) {
        clearErrors();
        error.innerHTML += "<p>*Phone number must be 10 digits and must be in format 111-111-1111</p>";
        document.signup.phone.focus();
        return false;
    }
    clearErrors();
    return true;
}

function validateStreet() {
    var error = document.querySelector("#streetError");
    var elem = document.getElementById("street");
    var input = elem.value.trim();
    inputCap = input.toUpperCase();
    for (var i = 0; i < input.length; i++) {
        if (inputCap.charAt(i) < "A" || inputCap.charAt(i) > "Z") {
            clearErrors();
            error.innerHTML += "<p>*Street must contain letters only.</p>";
            document.signup.street.focus();
            return false;
        }
        clearErrors();
        return true;
    }
}

function validateCity() {
    var error = document.querySelector("#cityError");
    var elem = document.getElementById("city");
    var input = elem.value.trim();
    inputCap = input.toUpperCase();
    for (var i = 0; i < input.length; i++) {
        if (inputCap.charAt(i) < "A" || inputCap.charAt(i) > "Z") {
            clearErrors();
            error.innerHTML += "<p>*City must contain letters only.</p>";
            document.signup.city.focus();
            return false;
        }
        clearErrors();
        return true;
    }
}

function validateProv() {
    var error = document.querySelector("#provError");
    var options = document.getElementById("provinces").options;
    for (var i = 0; i < options.length; i++) {
        if (document.getElementById("prov").value != options[i].value) {
            clearErrors();
            error.innerHTML += "<p>*Province must be selected from drop down menu.</p>";
            return false;
        }
        clearErrors();
        return true;
    }
}

function validatePCode() {
    var error = document.querySelector("#pCodeError");
    var input = document.signup.pCode.value.trim();
    var pattern = /^[A-Z][0-9][A-Z][0-9][A-Z][0-9]$/;
    if (!input.match(pattern)) {
        clearErrors();
        error.innerHTML += "<p>*Postal code must be in Canadian format (eg. C1A1A7)</p>";
        document.signup.pCode.focus();
        return false;
    }
    clearErrors();
    return true;
}

function clearErrors() {
    document.querySelector("#fNameError").innerHTML = "";
    document.querySelector("#lNameError").innerHTML = "";
    document.querySelector("#userError").innerHTML = "";
    document.querySelector("#passError").innerHTML = "";
    document.querySelector("#rePassError").innerHTML = "";
    document.querySelector("#phoneError").innerHTML = "";
    document.querySelector("#streetError").innerHTML = "";
    document.querySelector("#cityError").innerHTML = "";
    document.querySelector("#provError").innerHTML = "";
    document.querySelector("#pCodeError").innerHTML = "";
}
