const form_register = document.querySelector(".Register-container");
form_register.addEventListener('submit', function (event) {
    event.preventDefault();
    Validation_register();
});

function Validation_register() {

    var username_r = document.querySelector(".input-user-textfield");
    var email_r = document.querySelector(".input-email-textfield");
    var number_r = document.querySelector(".input-number-textfield");
    var password_r = document.querySelector(".input-password-textfield");
    var confirm_password_r = document.querySelector(".input-confirm-password-textfield");

    const usernameValue = username_r.value.trim();
    const emailValue = email_r.value.trim();
    const numberValue = number_r.value.trim();
    const passwordValue = password_r.value.trim();
    const confirm_passwordValue = confirm_password_r.value.trim();

    var username_error = document.querySelector(".username_error_message");
    var email_error = document.querySelector(".email_error_message");
    var number_error = document.querySelector(".number_error_message");
    var password_error = document.querySelector(".password_error_message");
    var confirm_password_error = document.querySelector(".confirm_password_error_message");

    //username validation
    if (usernameValue === "") {
        username_error.innerHTML = "Users name cannot be blank";
        username_error.style.display = 'flex';
        return;
    } else if (usernameValue.length <= 3) {
        username_error.innerHTML = "Users name should be more than 3 letters";
        username_error.style.display = 'flex';
        return;
    } else {
        username_error.innerHTML = "Good";
        username_error.style.display = 'flex';
    }

    function isValidateEmail(email){
        const expression_email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return expression_email.test(email);
    }

    //email validation
    if(emailValue === ""){
        email_error.innerHTML = "Email cannot be blank";
        email_error.style.display = 'flex';
        return;
    }else if(!isValidateEmail(emailValue)){
        email_error.innerHTML = "Invalid email";
        email_error.style.display = 'flex';
        return;
    }else{
        email_error.innerHTML = "Good";
        email_error.style.display = 'flex';
    }


    //number validation
    var startnumber = /^98\d{8}$/;
    if (numberValue === "") {
        number_error.innerHTML = "Number cannot be blank";
        number_error.style.display = 'flex';
        return;
    }else if(numberValue.length !== 10){
        number_error.innerHTML = "Number should be of 10 digits";
        number_error.style.display = 'flex';
        return;
    }else if(!/^98\d{8}$/.test(numberValue)){
        number_error.innerHTML = "Number should start with 98";
        number_error.style.display = 'flex';
        return;
    }else{
        number_error.innerHTML = "Good";
        number_error.style.display = 'flex';
    }
    //password validation
    if (passwordValue === "") {
        password_error.innerHTML = "Passwod cannot be blank";
        password_error.style.display = 'flex';
        return;
    } else if (passwordValue.length <= 5) {
        password_error.innerHTML = "Password name should be more than 5 letters";
        password_error.style.display = 'flex';
        return;
    }else if( confirm_passwordValue.length <= 5){
        confirm_password_error.innerHTML = "Password name should be more than 5 letters";
        confirm_password_error.style.display = 'flex';
    } 
    else if(passwordValue != confirm_passwordValue){
        passwordValue.innerHTML = "Password does not match";
        confirm_passwordValue.innerHTML = "Password does not match";
        password_error.style.display = 'flex';
    }else if(confirm_passwordValue ===""){
        confirm_password_error.innerHTML = "Passwod cannot be blank";
        confirm_password_error.style.display = 'flex';
    }
    else {
        username_error.innerHTML = "Good";
        username_error.style.display = 'flex';
    }
}


