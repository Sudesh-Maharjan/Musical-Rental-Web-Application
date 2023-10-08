const Signup_button = document.querySelector(".SignUp-nav");
const Register_Login_container = document.querySelector(".center-container");

//signup button logic of navigation
Signup_button.addEventListener('click', function(){
if(Register_Login_container.style.display === 'none'){
    Register_Login_container.style.display = 'flex';
}else{
    Register_Login_container.style.display = 'none';
}
});

const register_container = document.querySelector(".center-container-register");
const close_btn_cross = document.querySelector(".close-register-btn");
const nav_to_register_container = document.querySelector(".btn-nav-Register");

//register cross button logic
close_btn_cross.addEventListener('click', function(){
if(register_container.style.display === 'block'){
    register_container.style.display = 'none';
    Register_Login_container.style.display = 'none';
}else{
    register_container.style.display = 'none';
}
});

// Register navigation button
nav_to_register_container.addEventListener('click', function(){
if(register_container.style.display === 'none'){
    register_container.style.display = 'block';
    Register_Login_container.style.display = 'none';

}else{
    register_container.style.display = 'none';
}
});

//Login navigation logic
const nav_btn_Login = document.querySelector(".btn-nav-Login");
const Login_container = document.querySelector(".center-container-login");

nav_btn_Login.addEventListener('click', function(){
if(Login_container.style.display === 'none'){
    Login_container.style.display = 'flex';
    Register_Login_container.style.display = 'none';
}else{
    Login_container.style.display = 'none';
    if(register_container.style.display === 'block'){
register_container.style.display = 'none';
Login_container.style.display = 'flex';
    }
}
});
//Login close button logic
const login_close_btn = document.querySelector(".close-login-btn");

login_close_btn.addEventListener('click', function(){
Login_container.style.display = 'none';
});