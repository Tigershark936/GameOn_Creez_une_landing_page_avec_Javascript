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

//----------------------------------------------------------------------------------------------

// Section Formulaire
const form = document.querySelector("form");


// FIRSTNAME 
const firstnameInput = document.getElementById("firstname");
let errorMessageFirstname = document.getElementById("errorMessageFirstname");
let validateFirstname = "";


firstnameInput.addEventListener('input', () => {
  validateFirstname = firstnameInput.value.trim(); // .trim() suppression des espaces inutiles et ne les prend pas en compte.

  if (validateFirstname.length < 2) {
    errorMessageFirstname.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom."
    firstnameInput.style.border = "2px solid red";
  } 
  else {
    firstnameInput.errorMessageFirstname.remove(".errorMessage");
    firstnameInput.style.border = "none";
  }

  console.log(validateFirstname);
});


// SURNAME ---------------------------------------------------------------------------------------
const surnameInput = document.getElementById("surname");
let errorMessageSurname = document.getElementById("errorMessageSurname");
let validateSurname = "";


surnameInput.addEventListener("input", () => {
  validateSurname = surnameInput.value.trim();

  if (validateSurname.length < 2){
    errorMessageSurname.textContent ="Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    surnameInput.style.border = "2px solid red";
  } else {
    errorMessageSurname.textContent = "";
    surnameInput.style.border = "none";
  }

  console.log(validateSurname);
});


// EMAIL -----------------------------------------------------------------------------------------
const emailInput = document.getElementById("email");
let errorMessageEmail = document.getElementById("errorMessageEmail");
let validateEmail = "";


emailInput.addEventListener("input", () => {
  validateEmail = emailInput.value.trim();

  if ( validateEmail === ""){
    errorMessageEmail.textContent = "Le champs email ne peut pas être vide.";
    emailInput.style.border = "2px solid red";
  } else if (!validateEmail.includes("@")) {
    errorMessageEmail.textContent  = "Veuillez inclure '@' dans l'adresse e-mail il manque un symbole '@'";
    emailInput.style.border = "2px solid red";
  } else if (!validateEmail.split("@")[1]) {
    errorMessageEmail.textContent = "Veuillez  saisir la partie manquante après le symbole '@'. L'adresse est incomplète";
    emailInput.style.border = "2px solid red";
  } else if (!validateEmail.includes(".")) {
    errorMessageEmail.textContent = "Le domaine de l'email doit contenir un '.'";
    emailInput.style.border = "2px solid red";
  } else {
    errorMessageEmail.textContent = "";
    emailInput.style.border = "none";   
  }

  console.log(validateEmail);
  
});


// DATE OF BIRTH --------------------------------------------------------------------------------
const dateOfBirthInput = document.getElementById("dateOfBirth");
let errorMessageDate = document.getElementById("errorMessageDateOfBirth");
let validateDateOfBirth = "";

console.log(dateOfBirthInput);
console.log(errorMessageDate);

dateOfBirthInput.addEventListener("input", (e) => {
  console.log(e);
  
});


// HOW MANY TOURNAMENT QUESTION -----------------------------------------------------------------
const quantityInput = document.getElementById("quantity");
let validateQuantity = "";

quantityInput.addEventListener("input", () => {
  validateQuantity = quantityInput.value.trim();

  if (validateQuantity === ""){
    errorMessage = "Pour le nombre de concours, une valeur numérique doît être saisie."
    quantityInput.style.border = "2px solid red";
  } else if (isNaN(validateQuantity) || validateQuantity < 1 || validateQuantity > 99)
    //isNAN => Vérifie si la valeur n'est pas un nombre valide (ex : si l'utilisateur tape du texte).//
    {
    errorMessage = "Veuillez saisir uniquement un nombre entre 1 et 99.";
    quantityInput.style.border = "2px solid red";
  } else {
    errorMessage = "";
    quantityInput.style.border = "none"; 
  }

  console.log(validateQuantity);

});


// WHICH TOURNAMENT IN THIS YEAR ----------------------------------------------------------------
const LocationCheckbox = document.querySelector('input[name="location"]');
let validateLocation = "";

LocationCheckbox.addEventListener("change", () => {
  if (validateLocation.target.checked);
})


// VALIDATION OF FORM ---------------------------------------------------------------------------
const formImput = document.querySelectorAll(".formData");
let validateForm = true;

formImput.forEach((FormData) => {
  FormData.addEventListener("input", (validateForm));
  
  if (formImput.value.trim() === ""){
    form = false;
    formImput.style.border = "2px solid red";
  } else {
    formImput.style.border = "none";
  }
  
  if (!validateForm){
    SubmitEvent.preventDefault();
    alert("Tous les champs doivent être remplis !");
  }
  
});



form.addEventListener( "submit", (e) => {
  e.preventDefault();

  if (!checkbox1.checked) {
    alert ("Veuillez accepter les CVG");
  } else {
    alert ('Merci ! Votre réservation a été reçue.');
    modalBackground.style.display = "none";
  }
});


