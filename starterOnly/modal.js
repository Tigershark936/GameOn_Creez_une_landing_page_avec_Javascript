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

// sélectionne l'élément <form> de la page HTML.
const form = document.querySelector("form");
let textErrorMsg = document.getElementById("errorMessageForm");
const validateFormButton = document.getElementById("validateForm")
const messageConfirmationForm = document.getElementById("confirmationForm")
const ButtoncloseModalConfirmation = document.getElementById("closeModalConfirmation")


form.addEventListener( "submit", (e) => {
  e.preventDefault();  //  empêche l’envoi du formulaire (évite le rechargement de la page).

  // sélectionne tous les champs <input> du formulaire du HTML.
  const inputsForm = document.querySelectorAll("input");
  // servira à vérifier si tous les champs sont remplis.
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
    } else {
      document.querySelector("form").style.display = "none";
      document.querySelector("messageConfirmationForm").style.display = "block";
    }
  } 

  // On appelle d'autres fonctions pour des validations de champs spécifiques au formulaire 
  validateFirstname()
  validateSurname()
  validateEmail()
  validateDateOfBirth()
  validateQuantityTournemant()
  checkLocation()
  validateCvgCheckbox()
  
});
 

// FIRSTNAME -----------------------------------------------------------------------------------

// récuperer le champs firstname
const firstnameInput = document.getElementById("firstname");
console.log(firstnameInput);

// récuperer la valeur du champs firstname
console.log(firstnameInput.value);

//récuperer l'élément html qui sert à afficher l'erreur firstname
const errorFirstname = document.getElementById("errorMessageFirstname");

function validateFirstname(){
  if (firstnameInput.value.length < 2){
    // si il y a moins de 2 caractères afficher,insérer un texte d'erreur dans l'element avec un style sur l'input
    errorFirstname.innerText = `Veuillez entrer 2 caractères ou plus pour le champ du prénom`;
    firstnameInput.style.border = "2px solid red";
  } else {
    errorFirstname.innerText = ``;
    firstnameInput.style.border = "none";
  }
}


// SURNAME ---------------------------------------------------------------------------------------

// récuperer le champs surname
const surnameInput = document.getElementById("surname");
console.log(surnameInput);

// récuperer la valeur du champs surname
console.log(surnameInput.value);

//récuperer l'élément html qui sert à afficher l'erreur surname
const errorSurname = document.getElementById("errorMessageSurname");

const validateSurname = () => {
  if (surnameInput.value.length < 2){
    // si il y a moins de 2 caractères afficher,insérer un texte d'erreur dans l'element avec un style sur l'input
    errorSurname.innerText = `Veuillez entrer 2 caractères ou plus pour le champ du nom`;
    surnameInput.style.border = "2px solid red";
  } else {
    errorSurname.innerText = ``;
    surnameInput.style.border = "none";
  }
};


// EMAIL -----------------------------------------------------------------------------------------

// récuperer le champs email
const emailInput = document.getElementById("email");
console.log(emailInput);
const emailRegExp = new RegExp ('^[a-zA-Z0-9.-]+[@]{1}[a-zA-Z0-9.-]+[.]{1}[a-z]{2,10}$');

// récuperer la valeur du champs email
console.log(emailInput.value);

//récuperer l'élément html qui sert à afficher l'erreur email
const errorEmail = document.getElementById("errorMessageEmail");


function validateEmail(){
  const isValidedEmail = emailRegExp.test(emailInput.value);
  console.log(isValidedEmail);
  // Vérifie si validateEmail.value est une valeur "false" (vide, null, undefined)
  if (!emailInput.value){
    errorEmail.textContent = `Le champs email ne peut pas être vide.`;
    emailInput.style.border = "2px solid red";
  } else if (!emailInput.value.includes("@")) {
      errorEmail.textContent = "Veuillez inclure '@' dans l'adresse e-mail il manque un symbole '@'";
      emailInput.style.border = "2px solid red";
  } else if (!isValidedEmail){
    errorEmail.innerText = `Veillez saisir un email valide`;
    emailInput.style.border = "2px solid red";
  } else if(emailInput.value && isValidedEmail){
    errorEmail.innerText = ``;
    emailInput.style.border = "none";
  }
};


// DATE OF BIRTH --------------------------------------------------------------------------------

// récupération du champs dateOfBirth
const dateOfBirthInput = document.getElementById("dateOfBirth");
console.log(dateOfBirthInput);
const dateOfBirthRegExp = new RegExp ('/^(?:(?:31([\/\-\.])(0?[13578]|1[02])\x01|(?:(?:29|30)\x02(0?[13-9]|1[0-2])\x02))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29([\/\-\.])0?2\x03(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])([\/\-\.])(0?[1-9]|1[0-2])\x04(?:(?:1[6-9]|[2-9]\d)?\d{2})$/i');
const dateOfBirthValidate = dateOfBirthInput.value;


// récupèrer la valeur de saisie de dateOfBirth 
console.log(dateOfBirthInput.value);

// permet d'envoyer le message d'erreur et de le faire afficher dans le html 
const errorDateOfBirth = document.getElementById("errorMessageDateOfBirth");

 // Vérification de la saisie de la date de naissance
function validateDateOfBirth(){
  // permet de vérifier si le champs est vide
  if (!dateOfBirthInput.value){
    errorDateOfBirth.innerText = `Vous devez entrer votre date de naissance.`;
    dateOfBirthInput.style.border = "2px solid red";
  } else {
    errorDateOfBirth.innerText = ``;
    dateOfBirthInput.style.border = 'none';
  }
};

//La date est valide (en respectant les jours/mois/années, y compris les années bissextiles),
//La date est inférieure à aujourd'hui (pas de dates futures),
//L'âge est d'au moins 16 ans (donc la date de naissance doit être au plus "Aujourd’hui - 16 ans"),


// HOW MANY TOURNAMENT QUESTION -----------------------------------------------------------------

// récupèrer la valeur de la "how many tournemant"
const quantityInput = document.getElementById("quantity");
console.log(quantityInput);

// récupèrer la valeur de saisie de quantityInput
console.log(quantityInput.value);

// Sert à envoyer le message d'erreur dans le HTML
const errorQuantity = document.getElementById("errorMessageTournament");

// Empêcher la saisie de caractères non numériques et empêche les utilisateurs de taper e, E, -, +, ou .
quantityInput.addEventListener("keydown", (event) => {
  if (event.key === "e" || event.key === "E" || event.key === "-" || event.key === "+" || event.key === "."){
    event.preventDefault();
  }
});

const validateQuantityTournemant = () => {
  // Vérifie si le champs est rempli
  if (!quantityInput.value){
    errorQuantity.innerText = `Pour le nombre de concours, une valeur numérique doît être saisie.`;
    quantityInput.style.border = "2px solid red";
    // permet que l'utilisateur saisis un chiffre ou un nombre entre 1 et 99
  } else if (isNaN(quantityInput.value) || quantityInput.value < 1 || quantityInput.value > 99) {
    //isNAN => Vérifie si la valeur n'est pas un nombre valide (ex : si l'utilisateur tape du texte).//
    errorQuantity.innerText = `Veuillez saisir uniquement un nombre entre 1 et 99.`;
    quantityInput.style.border = "2px solid red";
  } else {
    errorQuantity.innerText = ``;
    quantityInput.style.border = "none";
  }
};


// WHICH TOURNAMENT IN THIS YEAR ----------------------------------------------------------------

// Récuperer tous les boutons radio du groupe "location"
let locationCheckboxes = document.querySelectorAll('input[type=radio]');
console.log(locationCheckboxes);

// Permet d'envoyer le message d'erreur dans le HTML pour la selection d'un bouton radio non click
const errorSelectedCheckbox = document.getElementById("errorMessageLocation");

function checkLocation(){
  //On suppose qu'aucun input type=radio n'est sélectionné au départ.
  let selected = false

   for (let i = 0; i < locationCheckboxes.length; i++) {
    if (locationCheckboxes[i].checked) { 
        console.log(locationCheckboxes[i].value);
        errorSelectedCheckbox.textContent = "";
        selected = true;
        break; // Stop la boucle après avoir trouvé un input sélectionné
    } else {
      errorSelectedCheckbox.textContent = "Vous devez choisir une option.";
    }
  }
};


// VALIDATION CVG OF FORM ---------------------------------------------------------------------------

// récuperer la checkbox du html à valider obligatoirement
const validateCvg = document.getElementById("checkbox1");
console.log(validateCvg);

// permet d'envoyer le message d'erreur dans le HTML
const errorMessageCvg = document.getElementById("errorMessageCvg");

function validateCvgCheckbox(){
  // Obligation d'avoir la checkbox CVG check pour le submit du formulaire
  if(!validateCvg.checked){
    errorMessageCvg.innerText = `Vous devez vérifier que vous acceptez les termes et conditions.`;
  } else {
    errorMessageCvg.innerText = ``;
  }
};
