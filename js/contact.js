const form = document.querySelector("#contactForm");

//First name input
const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");
let firstNameHasAnError = false;

//Last name input
const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastNameError");
let lastNameHasAnError = false;

//Email input
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
let emailHasAnError = false;

//Message textarea
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
let messageHasAnError = false;

//Submit message
const submitMessage = document.querySelector("#submitMessage");


form.addEventListener("submit", validateForm);

function validateForm() {
    event.preventDefault();

    //First name
    const firstNameValue = firstName.value;

    if (validateLength(firstNameValue, 1) === true) {
        firstNameError.style.display = "none";
        firstNameHasAnError = false;
    } else {
        firstNameError.style.display = "block";
        firstNameHasAnError = true;
    }

    //Last name
    const lastNameValue = lastName.value;

    if (validateLength(lastNameValue, 2) === true) {
        lastNameError.style.display = "none";
        lastNameHasAnError = false;
    } else {
        lastNameError.style.display = "block";
        lastNameHasAnError = true;
    }

    //Email
    const emailValue = email.value;

    if (validateEmail(emailValue)) {
        emailError.style.display = "none";
        emailHasAnError = false;
    } else {
        emailError.style.display = "block";
        emailHasAnError = true;
    }

    //Message
    const messageValue = message.value;

    if (validateLength(messageValue, 10) === true) {
        messageError.style.display = "none";
        messageHasAnError = false;
    } else {
        messageError.style.display = "block";
        messageHasAnError = true;
    }

    // submit message 
    if (firstNameHasAnError === true || lastNameHasAnError === true || emailHasAnError === true || messageHasAnError === true) {
        submitMessage.style.display = "none";
    } else {
        submitMessage.style.display = "block";
        firstName.value = "";
        lastName.value = "";
        email.value = "";
        message.value = "";

        console.log("message was submitted!");
    }
}

function validateLength(value, checkLength) {
    const trimmedValue = value.trim();

    if (trimmedValue.length >= checkLength) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(emailValue) {
    const registrat = /\S+@\S+\.\S+/;

    if (registrat.test(emailValue)) {
        return true;
    } else {
        return false;
    }
}