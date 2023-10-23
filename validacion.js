// Obtiene elementos del formulario
const form = document.getElementById("registrationForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const address = document.getElementById("address");
const gender = document.getElementById("gender");
const country = document.getElementById("country");
const submitButton = document.getElementById("submitButton");

// Función para validar el nombre de usuario
function validateUsername() {
    const usernameValue = username.value.trim();
    if (usernameValue.length < 5) {
        username.
        username
classList.add("is-invalid");
        document.getElementById("usernameError").textContent = "Nombre de usuario debe tener al menos 5 caracteres";
    } 
    }
else {
        username.classList.remove("is-invalid");
        
       
document.getElementById("usernameError").textContent = "";
    }
   
// Función para validar el correo electrónico
function validateEmail() {
    const emailValue = email.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValue)) {
        email.
       
classList.add("is-invalid");
        document.getElementById("emailError").textContent = "Correo electrónico debe tener un formato válido";
    } else {
        email.classList.remove("is-invalid");
        document.getElementById("emailError").textContent = "";
    }
}

// Función para validar la contraseña
function validatePassword() {
    const passwordValue = password.value.trim();
    
   
if (passwordValue.length < 8) {
        password.classList.add("is-invalid");
        document.getElementById("passwordError").textContent = "La contraseña debe tener al menos 8 caracteres";
    } else {
        password.
       
classList.remove("is-invalid");
        
       
document.getElementById("passwordError").textContent = "";
    }
}

// Función para validar la dirección
function validateAddress() {
    const addressValue = address.value.trim();
    const [calle, numero] = addressValue.split(" ");
    if (!calle || !numero) {
        address.classList.add("is-invalid");
        document.getElementById("addressError").textContent = "Los campos de dirección deben estar completos";
    } else {
        address.classList.remove("is-invalid");
        document.getElementById("addressError").textContent = "";
    }
}
  
// Función para validar el género
function validateGender() {
    if (gender.value === "") {
        gender.classList.add("is-invalid");
        document.getElementById("genderError").textContent = "Debe seleccionar una opción";
    } else {
        gender.classList.remove("is-invalid");
        document.getElementById("genderError").textContent = "";
    }
}

// Habilita/deshabilita el botón de envío
function enableSubmitButton() {
    const isUsernameValid = username.value.trim().length >= 5;
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
    const isPasswordValid = password.value.trim().length >= 8;
    const isAddressValid = validateAddress();
    const isGenderValid = gender.value !== "";
    const isCountryValid = country.value !== "";

    submitButton.disabled = !(isUsernameValid && isEmailValid && isPasswordValid && isAddressValid && isGenderValid && isCountryValid);
}

// Agrega eventos a los campos para realizar las validaciones en tiempo real
username.addEventListener("input", validateUsername);
email.addEventListener("input", validateEmail);
password.addEventListener("input", validatePassword);
address.addEventListener("input", validateAddress);
gender.addEventListener("input", validateGender);
form.addEventListener("input", enableSubmitButton);