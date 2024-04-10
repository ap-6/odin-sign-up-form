function checkPasswords (passwordInit, passwordConfirm, 
                         passwordInitError, passwordConfirmError) {

    passwordInit.addEventListener("input", function () {
        if (passwordInit.value.length < 8) {
            passwordInitError.textContent = "Password must be 8 characters or more";
            applyCssClass("input-invalid", passwordInit);
        }
        else {
            passwordInitError.textContent = "";
            removeCssClass("input-invalid", passwordInit);
        }

        //password matching
        if (passwordConfirm.value !== "" && 
            passwordInit.value !== passwordConfirm.value) {
            passwordConfirmError.textContent = "Passwords do not match";
            applyCssClass("input-invalid", passwordInit, passwordConfirm);
            
        }
        else if (passwordInit.value === passwordConfirm.value) {
            passwordConfirmError.textContent = "";
            removeCssClass("input-invalid", passwordInit, passwordConfirm);
        }

    });

    passwordConfirm.addEventListener("input", function () {
        if (passwordInit.value !== passwordConfirm.value) {
            passwordConfirmError.textContent = "Passwords do not match";
            applyCssClass("input-invalid", passwordInit, passwordConfirm);
        }
        else {
            passwordConfirmError.textContent = "";
            removeCssClass("input-invalid", passwordInit, passwordConfirm);
        }
    });
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

function checkSubmit() {
    myForm.addEventListener("submit", function(event){
        event.preventDefault();

        if (passwordInit.value === passwordConfirm.value) {
            this.submit();
        }
        else {
            alert("Passwords don't match");
        }
    })
}

function initializeValidation() {
    let passwordInit = document.querySelector("#password");
    let passwordConfirm = document.querySelector("#password-confirm");
    let passwordInitError = document.querySelector("#password + .error");
    let passwordConfirmError = document.querySelector("#password-confirm + .error");
    let myForm = document.querySelector("#create-account-form");

    checkPasswords(passwordInit, passwordConfirm, passwordInitError, passwordConfirmError);
    checkSubmit(myForm, passwordInit, passwordConfirm);
}

initializeValidation();
