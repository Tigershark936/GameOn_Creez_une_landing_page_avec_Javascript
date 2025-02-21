// DOM Elements
const closeModalButton = document.querySelector(".close");
const modalBackground = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalBackground.style.display = "block";
}

// Close modal 
closeModalButton.addEventListener('click', () => {
  modalBackground.style.display = "none";
});

function editNav() {
  var topNavbar = document.getElementById("myTopnav");
  if (topNavbar.className === "topnav") {
    topNavbar.className += " responsive";
  } else {
    topNavbar.className = "topnav";
  }
}

//--------------------------------------------------------------

// Section Formulaire
const form = document.querySelector("form");
const formImput = document.querySelector(".formData");
let errorMessage = "";


// FIRSTNAME 
const firstnameInput = document.getElementById("firstname");
let validateFirstname = "";

firstnameInput.addEventListener('input', () => {
  validateFirstname = firstnameInput.value.trim(); // .trim() suppression des espaces inutiles et ne les prend pas en compte.

  if (validateFirstname.length < 2) {
    errorMessage = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    firstnameInput.style.border = "2px solid red";
    firstnameInput.textContent = errorMessage;
  } else {
    errorMessage = ""; // Pas d'erreur de nombres de caractères
    firstnameInput.style.border = "none";
  }

  console.log(validateFirstname);
});


// SURNAME 
const surnameInput = document.getElementById("surname");
let validateSurname = "";

surnameInput.addEventListener("input", () => {
  validateSurname = surnameInput.value.trim();

  if (validateSurname.length < 2){
    errorMessage = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    surnameInput.style.border = "2px solid red";
    surnameInput.textContent = errorMessage;
  } else {
    errorMessage = "";
    surnameInput.style.border = "none";
  }

  console.log(validateSurname);
});


// EMAIL 
const emailInput = document.getElementById("email");
let validateEmail = "";

emailInput.addEventListener("input", () => {
  validateEmail = emailInput.value.trim();

  if ( validateEmail === ""){
    errorMessage = "Le champs email ne peut pas être vide.";
    emailInput.style.border = "2px solid red";
  } else if (!validateEmail.includes("@")) {
    errorMessage = "Veuillez inclure '@' dans l'adresse e-mail il manque un symbole '@'";
    emailInput.style.border = "2px solid red";
  } else if (!validateEmail.split("@")[1]) {
    errorMessage = "Veuillez  saisir la partie manquante après le symbole '@'. L'adresse est incomplète";
    emailInput.style.border = "2px solid red";
  } else if (!validateEmail.includes(".")) {
    errorMessage = "Le domaine de l'email doit contenir un '.'";
    emailInput.style.border = "2px solid red";
  } else {
    errorMessage = "";
    emailInput.style.border = "none";   
  }

  console.log(validateEmail);
  
});



// VALIDATION OF FORM
form.addEventListener( "submit", (e) => {
  e.preventDefault();

  if (checkbox1.checked) {
    alert ('Merci pour votre inscription');
    modalBackground.style.display = "none";
  } else {
    alert ("Veuillez accepter les CVG");
  }
});


