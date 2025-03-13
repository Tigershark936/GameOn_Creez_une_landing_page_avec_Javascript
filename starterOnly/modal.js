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

function editNav() {
  var topNavbar = document.getElementById("myTopnav");
  if (topNavbar.className === "topnav") {
    topNavbar.className += " responsive";
  } else {
    topNavbar.className = "topnav";
  }
}

//--------------------------------------FORMULAIRE--------------------------------------

// Section Inputs Formulaire

// sélectionne l'élément <form> de la page HTML.
const form = document.querySelector("form");
// sélectionne l'affiche du message d'erreur pour le bouton "c'est Parti".
let textErrorMsg = document.getElementById("errorMessageForm");
// Sélectionne le button de type of submit for the formulary.
const validateFormButton = document.getElementById("validateForm");
// Sélectionne la boite for the message of confirmation formulary.
const messageConfirmationForm = document.getElementById("confirmationForm");
// Sélectionne the button "fermer" for close to modal message of confirmation.
const ButtoncloseModalConfirmation = document.getElementById("closeModalConfirmation");
// Boolean qui servira à vérifier si tous les champs sont remplis ou pas.
let validateForm = true;


//--------------------------------------------------------------------------------------

function validateFirstname(){
  // récuperer le champs firstname
const firstnameInput = document.getElementById("firstname");

// récuperer la valeur du champs firstname
console.log(firstnameInput.value);

//récuperer l'élément html qui sert à afficher l'erreur firstname
const errorFirstname = document.getElementById("errorMessageFirstname");

  if (firstnameInput.value.length < 2){
    // si il y a moins de 2 caractères afficher,insérer un texte d'erreur dans l'element avec un style sur l'input
    errorFirstname.innerText = `Veuillez entrer 2 caractères ou plus pour le champ du prénom`;
    firstnameInput.style.border = "2px solid red";
    return false; 
  } else {
    errorFirstname.innerText = ``;
    firstnameInput.style.border = "none";
    return true;
  }
};

//--------------------------------------------------------------------------------------

const validateSurname = () => {
  
  // récuperer le champs surname
  const surnameInput = document.getElementById("surname");
  
  // récuperer la valeur du champs surname
  console.log(surnameInput.value);
  
  //récuperer l'élément html qui sert à afficher l'erreur surname
  const errorSurname = document.getElementById("errorMessageSurname");
  
  if (surnameInput.value.length < 2){
    // si il y a moins de 2 caractères afficher,insérer un texte d'erreur dans l'element avec un style sur l'input
    errorSurname.innerText = `Veuillez entrer 2 caractères ou plus pour le champ du nom`;
    surnameInput.style.border = "2px solid red";
    return false;
  } else {
    errorSurname.innerText = ``;
    surnameInput.style.border = "none";
    return true;
  }
};

//--------------------------------------------------------------------------------------

function validateEmail(){
  // récuperer le champs email
  const emailInput = document.getElementById("email");
  const emailRegExp = new RegExp ('^[a-zA-Z0-9.-]+[@]{1}[a-zA-Z0-9.-]+[.]{1}[a-z]{2,10}$');
  
  // récuperer la valeur du champs email
  console.log(emailInput.value);
  
  //récuperer l'élément html qui sert à afficher l'erreur email
  const errorEmail = document.getElementById("errorMessageEmail");

  const isValidedEmail = emailRegExp.test(emailInput.value);
  console.log(isValidedEmail);
  // Vérifie si validateEmail.value est une valeur "false" (vide, null, undefined)
  if (!emailInput.value){
    errorEmail.textContent = `Le champs email ne peut pas être vide.`;
    emailInput.style.border = "2px solid red";
    return false; 
  } else if (!emailInput.value.includes("@")) {
    errorEmail.textContent = "Veuillez inclure '@' dans l'adresse e-mail il manque un symbole '@'";
    emailInput.style.border = "2px solid red";
    return false; 
  } else if (!isValidedEmail){
    errorEmail.innerText = `Veillez saisir un email valide`;
    emailInput.style.border = "2px solid red";
    return false; 
  } else if(emailInput.value && isValidedEmail){
    errorEmail.innerText = ``;
    emailInput.style.border = "none";
    return true;
  }
};

//----------------------------------------------------------------------------------------------------

// Vérification de la saisie de la date de naissance
function validateDateOfBirth(){

// récupération du champs dateOfBirth
const dateOfBirthInput = document.getElementById("dateOfBirth");


// récupèrer la valeur de saisie de dateOfBirth 
console.log(dateOfBirthInput.value);

// permet d'envoyer le message d'erreur et de le faire afficher dans le html 
const errorDateOfBirth = document.getElementById("errorMessageDateOfBirth");
    
  // permet de vérifier si le champs est vide
  if (!dateOfBirthInput.value){
    errorDateOfBirth.innerText = `Vous devez entrer votre date de naissance.`;
    dateOfBirthInput.style.border = "2px solid red";
    return false;
  } else {
    const dateOfBirthAsDateObject = new Date(dateOfBirthInput.value);
    // Récupère la date saisie par l'utilisateur et la convertit en objet Date.
    const yearOfBirth = parseInt (dateOfBirthAsDateObject.getFullYear().toString().substring(0, 4));
    // parseInt(...) : Convertit "1994" en nombre 1994.
    //.getFullYear() : Extrait l'année de l'objet Date.
    // .toString() : Convertit le nombre (1994) en chaîne "1994".
    //.substring(0, 4) : Extrait les 4 premiers caractères de la chaîne "1994", ce qui donne "1994".

    const actuelDate = new Date();
    //Permettre de récuperer l'année actuelle.
    console.log(actuelDate);
    const yearActuel = actuelDate.getFullYear();
    // Permet d'extraire l'année actuelle sous forme de nombre
    console.log(yearActuel);
    //Affiche l'année actuelle dans la console.

//L'âge est d'au moins 16 ans pour s'inscrire sinon un message d'erreur. < 16ans date de naissance valide
    if ((yearActuel - yearOfBirth) < 16){
      errorDateOfBirth.innerText = `Vous devez avoir plus de 16ans pour pouvoir vous inscrire.`;
      dateOfBirthInput.style.border = "2px solid red";
      return false;
    } else {
      errorDateOfBirth.innerText = ``;
      dateOfBirthInput.style.border = 'none';
      return true;
    }
  }
};

//----------------------------------------------------------------------------------------------------

const validateQuantityTournemant = () => {

  // récupèrer la valeur de la "how many tournemant"
const quantityInput = document.getElementById("quantity");

// récupèrer la valeur de saisie de quantityInput
console.log(quantityInput.value);

// Sert à envoyer le message d'erreur dans le HTML
const errorMessageQuantity = document.getElementById("errorMessageTournament");

// Empêcher la saisie de caractères non numériques et empêche les utilisateurs de taper e, E, -, +, ou .
quantityInput.addEventListener("keydown", (event) => {
  if (event.key === "e" || event.key === "E" || event.key === "-" || event.key === "+" || event.key === "."){
    event.preventDefault();
  }
});

// Vérifie si le champs est rempli
  if (!quantityInput.value){
    errorMessageQuantity.innerText = `Pour le nombre de concours, une valeur numérique doît être saisie.`;
    quantityInput.style.border = "2px solid red";
    return false;
    // permet que l'utilisateur saisis un chiffre ou un nombre entre 1 et 99
  } else if (isNaN(quantityInput.value) || quantityInput.value < 1 || quantityInput.value > 99) {
  //isNAN => Vérifie si la valeur n'est pas un nombre valide (ex : si l'utilisateur tape du texte).//
    errorMessageQuantity.innerText = `Veuillez saisir uniquement un nombre entre 1 et 99.`;
    quantityInput.style.border = "2px solid red";
    return false;
  } else {
    errorMessageQuantity.innerText = ``;
    quantityInput.style.border = "none";
    return true;
  }
};
  
//----------------------------------------------------------------------------------------------------


function checkLocation(){
  // Récuperer tous les boutons radio du groupe "location"
  let locationCheckboxes = document.querySelectorAll('input[type=radio]');
  
  // Permet d'envoyer le message d'erreur dans le HTML pour la selection d'un bouton radio non click
  const errorSelectedCheckbox = document.getElementById("errorMessageLocation");
  
  //On suppose qu'aucun input type=radio n'est sélectionné dans le formulaire au départ.
  let checkboxLocationSelected = false;

  for (let i = 0; i < locationCheckboxes.length; i++) {
    if (locationCheckboxes[i].checked) { 
      console.log(locationCheckboxes[i].value);
      checkboxLocationSelected = true;
      break; // Stop la boucle après avoir trouvé un input sélectionné
    }
  }

// Si l'une des checkbox est selectionnée avec le controle de la boucle "for" dans le formulaire alors pas de message d'erreur.
  if (checkboxLocationSelected){
    errorSelectedCheckbox.textContent = "";
    return true;
  } else {
    errorSelectedCheckbox.textContent = "Vous devez choisir une option.";
    return false;
  }
};

//----------------------------------------------------------------------------------------------------

function validateCvgCheckbox(){
  // récuperer la checkbox du html à valider obligatoirement
  const validateCvg = document.getElementById("checkbox1");
  
  // permet d'envoyer le message d'erreur dans le HTML
  const errorMessageCvg = document.getElementById("errorMessageCvg");

  // Obligation d'avoir la checkbox CVG check pour le submit du formulaire
  if(!validateCvg.checked){
    errorMessageCvg.innerText = `Vous devez vérifier que vous acceptez les termes et conditions.`;
    return false;
  } else {
    errorMessageCvg.innerText = ``;
    return true;
  }
};

// -------------------------------------------------------------------------------------
// EVENT SUBMIT FOR THE FORMULARY WITH CALL FUNCTIONS FOR THE INPUTS VALIDATION
// -------------------------------------------------------------------------------------


form.addEventListener( "submit", (e) => {
  e.preventDefault();  //  empêche l’envoi du formulaire (évite le rechargement de la page).

  // sélectionne tous les champs <input> du formulaire du HTML.
  const inputsForm = document.querySelectorAll("input");
  // Boolean qui servira à vérifier si tous les champs sont remplis ou pas.
  let validateForm = true;

  for (let i = 0; i < inputsForm.length; i++) {
    
    console.log(inputsForm[i].value) 
    // Si un champ est vide 
    if (!inputsForm[i].value){
      // validateForm passe à false.
      validateForm = false;  
      textErrorMsg.innerText = `Veuillez remplir tous les champs du formulaire !`;
      textErrorMsg.classList.add("errorMessage");
      inputsForm[i].style.border = "2px solid red";
      break; // dès qu'un champ est vide, on sort de la boucle "for"
    }
  }; 

 
// On appelle les fonctions pour des validations de champs spécifiques au formulaire, Si une fonction renvoie true, alors  ex: validateForm garde sa valeur (true) et si validateFirstname() renvoie false, alors validateForm devient false et mes inner.Text avec les styles s'afficheront pour chaque "inputs" mal remplis selon les conditions que j'ai apporté pour chaque input du formulaire.

// -------------------------------------------------------------------------------------
// INPUT FIRSTNAME 
// -------------------------------------------------------------------------------------

validateForm = validateFirstname() && validateForm;

// -------------------------------------------------------------------------------------
// INPUT SURNAME 
//--------------------------------------------------------------------------------------

validateForm = validateSurname() && validateForm;

// -------------------------------------------------------------------------------------
// INPUT EMAIL 
//--------------------------------------------------------------------------------------

validateForm = validateEmail() && validateForm;

// -------------------------------------------------------------------------------------
// DATE OF BIRTH
// -------------------------------------------------------------------------------------

validateForm = validateDateOfBirth() && validateForm;

// -------------------------------------------------------------------------------------
// HOW MANY TOURNAMENT QUESTION 
//--------------------------------------------------------------------------------------

validateForm = validateQuantityTournemant() && validateForm;

// -------------------------------------------------------------------------------------
// WHICH TOURNAMENT IN THIS YEAR
// -------------------------------------------------------------------------------------

validateForm = checkLocation() && validateForm;

//--------------------------------------------------------------------------------------
// VALIDATION CVG OF FORM 
// -------------------------------------------------------------------------------------
 
validateForm = validateCvgCheckbox() && validateForm;

//------------------------------------------------------------------------------------
// CONDITION OF VALIDATION MESSAGE FOR THE FORMULARY WITH EVENT RESET AND STYLE FORMULARY
// -----------------------------------------------------------------------------------


function registrationForm() {
  messageConfirmationForm.style.display = "none";
  form.submit();
}
// Si tous les inputs et la checkbox sont bien remplis dans le formulaire
  if (validateForm === true){
    document.querySelector("form").style.display = "none";
    messageConfirmationForm.style.display = "block";
  }
  
// Close the confirmation message for the inscription with registration formulary in the network
ButtoncloseModalConfirmation.addEventListener('click', () => {
  modalBackground.style.display = "none";
  registrationForm();
  
  messageConfirmationForm.style.display = "none";
});
});


function resetFormStyles() {
  // Sélectionne tous les inputs du formulaire
  const inputs = document.querySelectorAll("input");
  inputs.forEach(input => {
    input.style.border = "none"; // Réinitialise la bordure
  });

  // Sélectionne tous les messages d'erreur et les efface
  const errorMessages = document.querySelectorAll(".errorMessage");
  errorMessages.forEach(error => {
    error.innerText = "";
  });
}


// Close modal with reset formulary
closeModalButton.addEventListener('click', () => {;
  modalBackground.style.display = "none";
 // Reset the form to zero
  form.reset(); 
  // Réinitialiser les styles et messages d'erreur
  resetFormStyles();

  form.style.display = "block"; 
  messageConfirmationForm.style.display = "none";
});



