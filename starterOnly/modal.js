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
const formImput = document.querySelector('input[type="text"]');
let errorMessage = "";

// FIRSTNAME 
const firstnameInput = document.getElementById("firstname");
let validateFirstname = "";

firstnameInput.addEventListener('input', () => {
  validateFirstname = firstnameInput.value.trim(); // .trim() suppression des espaces inutiles

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


