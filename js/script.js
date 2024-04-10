function checkPasswords (passwordInit, passwordConfirm, 
                         passwordInitError, passwordConfirmError) {

    passwordInit.addEventListener("input", function () {
        updatePasswordErrorMsg(passwordInit, passwordConfirm, 
                               passwordInitError, passwordConfirmError);
        updatePasswordErrorStyle(passwordInit, passwordConfirm);
    });

    passwordConfirm.addEventListener("input", function () {
        updatePasswordErrorMsg(passwordInit, passwordConfirm, 
                               passwordInitError, passwordConfirmError);
        updatePasswordErrorStyle(passwordInit, passwordConfirm);
    });
}

function updatePasswordErrorMsg(passwordInit, passwordConfirm, 
                                passwordInitError, passwordConfirmError) {
    let isPasswordLong = passwordInit.value.length > 7;
    let arePasswordsEqual = passwordInit.value === passwordConfirm.value;
    let isPasswordConfirmEmpty = passwordConfirm.value === "";

    //password length
    if (!isPasswordLong) {
        passwordInitError.textContent = "Password must be 8 characters or more";
    }
    else {
        passwordInitError.textContent = "";
    }
    //password matching
    if (!isPasswordConfirmEmpty && !arePasswordsEqual) {
        passwordConfirmError.textContent = "Passwords do not match";    
    }
    else if (arePasswordsEqual) {
        passwordConfirmError.textContent = "";
    }
}

function updatePasswordErrorStyle(passwordInit, passwordConfirm) {
    let isPasswordLong = passwordInit.value.length > 7;
    let arePasswordsEqual = passwordInit.value === passwordConfirm.value;
    let isPasswordConfirmEmpty = passwordConfirm.value === "";
    
    if (!isPasswordLong && isPasswordConfirmEmpty) {
        applyCssClass("input-invalid", passwordInit);
    }
    else if (isPasswordLong && isPasswordConfirmEmpty) {
        removeCssClass("input-invalid", passwordInit);
    }
    
    if (!isPasswordConfirmEmpty && !arePasswordsEqual) { //unequal and confirm filled
        applyCssClass("input-invalid", passwordInit, passwordConfirm); 
    }
    else if (arePasswordsEqual && isPasswordLong) {
        removeCssClass("input-invalid", passwordInit, passwordConfirm);
    }
}

function applyCssClass(className, ...htmlElements) {
    htmlElements.forEach(htmlElement => {
        htmlElement.classList.add(className);
    });
}

function removeCssClass(className, ...htmlElements) {
    htmlElements.forEach(htmlElement => {
        htmlElement.classList.remove(className);
    });
}

function checkSubmit(myForm, passwordInit, passwordConfirm) {
    myForm.addEventListener("submit", function(event){
        event.preventDefault();

        if (isFormValid(passwordInit, passwordConfirm)) {
            this.submit();
        }
    });
}

function isFormValid(passwordInit, passwordConfirm) {
    let isPasswordLong = passwordInit.value.length > 7;
    let isPasswordMatch = passwordInit.value === passwordConfirm.value;

    return isPasswordLong && isPasswordMatch;
}

function checkEmail(email){
    const emailRegex = /^[a-zA-Z0-9\.\_\-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

    email.addEventListener("blur", function() {
        let emailInput = email.value;
        
        if(!emailRegex.test(emailInput)) {
            applyCssClass("input-invalid", email);
        }
        else {
            removeCssClass("input-invalid", email);
        }
    })
}

function initializeValidation() {
    let passwordInit = document.querySelector("#password");
    let passwordConfirm = document.querySelector("#password-confirm");
    let passwordInitError = document.querySelector("#password + .error");
    let passwordConfirmError = document.querySelector("#password-confirm + .error");
    let email = document.querySelector("#email");
    let myForm = document.querySelector("#create-account-form");

    checkPasswords(passwordInit, passwordConfirm, passwordInitError, passwordConfirmError);
    checkEmail(email);
    checkSubmit(myForm, passwordInit, passwordConfirm);
}

initializeValidation();
