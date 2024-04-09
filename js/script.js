function passwordCheck () {
    let passwordInit = document.querySelector("#password");
    let passwordConfirm = document.querySelector("#password-confirm");
    let passwordInitError = document.querySelector("#password + .error");
    let passwordConfirmError = document.querySelector("#password-confirm + .error");
    let myForm = document.querySelector("#create-account-form")

    passwordInit.addEventListener("input", function () {
        if (passwordInit.value.length < 8) {
            passwordInitError.textContent = "Password must be 8 characters or more";
            passwordInit.classList.add("input-invalid");
        }
        else {
            passwordInitError.textContent = "";
            passwordInit.classList.remove("input-invalid");
        }

        //password matching
        if (passwordConfirm.value !== "" && 
            passwordInit.value !== passwordConfirm.value) {
            passwordConfirmError.textContent = "Passwords do not match";
            showPasswordInvalid(passwordInit, passwordConfirm)
        }
        else if (passwordInit.value === passwordConfirm.value) {
            passwordConfirmError.textContent = "";
            showPasswordValid(passwordInit, passwordConfirm);
        }

    });

    passwordConfirm.addEventListener("input", function () {
        if (passwordInit.value !== passwordConfirm.value) {
            passwordConfirmError.textContent = "Passwords do not match";
            showPasswordInvalid(passwordInit, passwordConfirm);
        }
        else {
            passwordConfirmError.textContent = "";
            showPasswordValid(passwordInit, passwordConfirm);
        }
    });

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

function showPasswordInvalid(passwordInit, passwordConfirm) {
    passwordInit.classList.add("input-invalid");
    passwordConfirm.classList.add("input-invalid");
}

function showPasswordValid(passwordInit, passwordConfirm) {
    passwordInit.classList.remove("input-invalid");
    passwordConfirm.classList.remove("input-invalid");
}

passwordCheck();