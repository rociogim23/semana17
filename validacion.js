// obtiene elementos formulario
const form = document.getElementById("registrationForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const address = document.getElementById("address");
const gender = document.getElementById("gender");
const country = document.getElementById("country");
const submitButton = document.getElementById("submitButton");

// valida nombre usuario
function validateUsername() {
    
}

// valida correo 
function validateEmail() {
    
}

// valida contraseña
function validatePassword() {
    
}

// valida dirección
function validateAddress() {

}
    

// valida género
function validateGender() {
    
}

// habilita/deshabilita botón envío
function enableSubmitButton() {
    
    // verifica validaciones y habilita/deshabilita botón
}

username.addEventListener("input", validateUsername);
email.addEventListener("input", validateEmail);
password.addEventListener("input", validatePassword);
address.addEventListener("input", validateAddress);
gender.addEventListener("input", validateGender);
form.addEventListener("input", enableSubmitButton);
