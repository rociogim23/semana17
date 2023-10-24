// Obtiene elementos del formulario
const form = document.getElementById("registrationForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const address = document.getElementById("address");
const addressN = document.getElementById("addressN"); // Agregado para el campo Nº
const gender = document.getElementById("gender");
const country = document.getElementById("country");
const submitButton = document.getElementById("submitButton");

// Función para validar el nombre de usuario
function validateUsername() {
    const usernameValue = username.value.trim();
    if (usernameValue.length < 5) {
        username.classList.add("is-invalid");
        document.getElementById("usernameError").textContent = "Nombre de usuario debe tener al menos 5 caracteres";
    } else {
        username.classList.remove("is-invalid");
        document.getElementById("usernameError").textContent = "";
    }
}

// Función para validar el correo electrónico
function validateEmail() {
    const emailValue = email.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValue)) {
        email.classList.add("is-invalid");
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
        password.classList.remove("is-invalid");
        document.getElementById("passwordError").textContent = "";
    }
}

// Función para validar la dirección
function validateAddress() {
    const addressValue = address.value.trim();
    const addressNValue = addressN.value.trim();
    if (!addressValue || !addressNValue) {
        address.classList.add("is-invalid");
        addressN.classList.add("is-invalid"); // Agregado para el campo Nº
        document.getElementById("addressError").textContent = "Por favor, complete la dirección correctamente";
    } else {
        address.classList.remove("is-invalid");
        addressN.classList.remove("is-invalid"); // Agregado para el campo Nº
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
    const isAddressValid = address.value.trim() !== "" && addressN.value.trim() !== "";
    const isGenderValid = gender.value !== "";
    const isCountryValid = country.value !== "Seleccionar"; // Modificado para considerar la opción "Seleccionar"

    if (isUsernameValid && isEmailValid && isPasswordValid && isAddressValid && isGenderValid && isCountryValid) {
        submitButton.disabled = false; // Habilita el botón
    } else {
        submitButton.disabled = true; // Deshabilita el botón
    }
}


// Agrega eventos a los campos para realizar las validaciones en tiempo real
username.addEventListener("input", function() {
    validateUsername();
    enableSubmitButton();
});

email.addEventListener("input", function() {
    validateEmail();
    enableSubmitButton();
});

password.addEventListener("input", function() {
    validatePassword();
    enableSubmitButton();
});

address.addEventListener("input", function() {
    validateAddress();
    enableSubmitButton();
});

addressN.addEventListener("input", function() {
    validateAddress();
    enableSubmitButton();
});

gender.addEventListener("input", function() {
    validateGender();
    enableSubmitButton();
});

form.addEventListener("submit", function(event) {
    validateUsername();
    validateEmail();
    validatePassword();
    validateAddress();
    validateGender();

    if (
        username.classList.contains("is-invalid") ||
        email.classList.contains("is-invalid") ||
        password.classList.contains("is-invalid") ||
        address.classList.contains("is-invalid") ||
        addressN.classList.contains("is-invalid") || // Agregado para el campo Nº
        gender.classList.contains("is-invalid")
    ) {
        showAlert("Por favor, complete los campos");
        event.preventDefault();
    }
});

function showAlert(mensaje) {
    alert(mensaje);
}
