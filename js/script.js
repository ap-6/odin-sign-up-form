function passwordCheck () {
    let passwordInit = document.querySelector("#password");
    let passwordConfirm = document.querySelector("#password-confirm");
    let myForm = document.querySelector("#create-account-form")

    let isPasswordIdentical = false;

    // passwordConfirm.addEventListener("click", function () {

    // })
    if(passwordConfirm.value !== "") {
        if (passwordInit.value === passwordConfirm.value) {
            isPasswordIdentical = true;
            passwordInit.style["background-color"] = "green";
        }
        else if (passwordInit.value !== passwordConfirm.value) {
            isPasswordIdentical = false;
            passwordInit.style["background-color"] = "red";
        }
    }

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

passwordCheck();