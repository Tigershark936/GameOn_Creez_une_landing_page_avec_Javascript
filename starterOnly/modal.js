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

//----------------------------------------FORMULAIRE---------------------------------------------

// Section Formulaire
const formData = document.querySelectorAll(".formData");
let Inputs = document.querySelectorAll("input");
let errorMessageForm = document.getElementById("errorMessageForm");

console.log(Inputs);

for (let i = 0; Inputs.length; i++){
  if (!Inputs[i].value) {
    errorMessageForm.textContent = "Tous les champs doivent être remplis !";
    break;
  } else {
    errorMessageForm.textContent = "";
    modalBackground.style.display = "none";
  }
}

form.addEventListener( "submit", (e) => {
  e.preventDefault();
});

// FIRSTNAME -----------------------------------------------------------------------------------
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

// console.log(dateOfBirthInput);
// console.log(errorMessageDate);

dateOfBirthInput.addEventListener("input", () => {
  validateDateOfBirth = dateOfBirthInput.value.trim();

  if (validateDateOfBirth === ""){
    errorMessageDate.textContent = "Vous devez entrer votre date de naissance.";
    dateOfBirthInput.style.border = "2px solid red";
  } else {
    errorMessageDate.textContent = "";
    dateOfBirthInput.style.border = "none";
  }
  
  console.log(validateDateOfBirth);
  
});


// HOW MANY TOURNAMENT QUESTION -----------------------------------------------------------------
const quantityInput = document.getElementById("quantity");
let errorMessageQuantity = document.getElementById("errorMessageTournemant")
let validateQuantity = "";

quantityInput.addEventListener("input", function() {
  validateQuantity = quantityInput.value.trim();

  if (validateQuantity === ""){
    errorMessageQuantity.textContent = "Pour le nombre de concours, une valeur numérique doît être saisie."
    quantityInput.style.border = "2px solid red";
  } else if (isNaN(validateQuantity) || validateQuantity < 1 || validateQuantity > 99)
    //isNAN => Vérifie si la valeur n'est pas un nombre valide (ex : si l'utilisateur tape du texte).//
    {
    errorMessageQuantity.textContent = "Veuillez saisir uniquement un nombre entre 1 et 99.";
    quantityInput.style.border = "2px solid red";
  } else {
    errorMessageQuantity.textContent = "";
    quantityInput.style.border = "none"; 
  }

  console.log(validateQuantity);

});


// WHICH TOURNAMENT IN THIS YEAR ----------------------------------------------------------------

// Sélectionne tous les boutons radio du groupe "location"
let locationCheckboxes = document.querySelectorAll('input[type=radio]');
let errorMessageCheckbox = document.getElementById("errorMessageLocation");


// Fonction qui va permettre de vérifier la sélection
function checkSelection() {
  let selected = false; //  On signifie qu'on suppose qu'aucun radio n'est sélectionné au départ.

  for (let i = 0; i < locationCheckboxes.length; i++) {
    if (locationCheckboxes[i].checked) { 
        console.log(locationCheckboxes[i].value);
        errorMessageCheckbox.textContent = "";
        selected = true;
        break; // Stop la boucle après avoir trouvé un sélectionné
    } else {
      errorMessageCheckbox.textContent = "Vous devez choisir une option minimum.";
    }
  }
}

// Ajoute un écouteur d'événement sur TOUS les boutons radio du fieldset
for (let i = 0; i < locationCheckboxes.length; i++) {
  locationCheckboxes[i].addEventListener("change", checkSelection);
}

// Vérifie la sélection dès le chargement dans la console 
checkSelection();


// VALIDATION CVG OF FORM ---------------------------------------------------------------------------
let conditionsCvg = document.getElementById("checkbox1");
let errorMessageCondition = document.getElementById("errorMessageCvg")
// console.log(conditionsCvg.checked);

  
if (!checkbox1.checked) {
  errorMessageCondition.textContent = "Vous devez vérifier que vous acceptez les termes et conditions.";
} else {
  errorMessageCondition.textContent = "";
};

  


