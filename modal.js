function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const divThanks = document.querySelector('#thank');
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCloseBtn = document.querySelector(".close");
const firstInput = document.querySelector("#first");
const lastInput = document.querySelector("#last");
const emailInput = document.querySelector("#email");
const birthdateInput = document.querySelector("#birthdate");
const quantityInput = document.querySelector("#quantity");
const locationInput = document.querySelector('.checkbox-label');
const conditionInput = document.querySelector('#checkbox1');
const submitButton = document.querySelector('.btn-submit');
const allInputs = document.querySelectorAll('form>div>input');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
modalCloseBtn.addEventListener('click', closeModal);

// verify conditions 
submitButton.addEventListener("click", allConditionsOk);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// function to close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// Regex
const regexName = /^([^0-9]{2,})$/
const regexMail = /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/;
const regexNumber = /^[0-9]$/;

// function to check if first name is ok
function firstNameOk() {
  let nameOk = false;
  if(firstInput.value.trim().match(regexName)) {
    firstInput.parentNode.removeAttribute("data-error");
    firstInput.parentNode.removeAttribute("data-error-visible");
    nameOk = true;
  } else {
    firstInput.parentNode.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du nom");
    firstInput.parentNode.setAttribute("data-error-visible", "true");
  }
  return nameOk;
}

// function to check if last name is ok
function lastNameOk() {
  let nameOk = false;
  if(lastInput.value.trim().match(regexName)) {
    lastInput.parentNode.removeAttribute("data-error");
    lastInput.parentNode.removeAttribute("data-error-visible");
    nameOk = true;
  } else {
    lastInput.parentNode.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du nom");
    lastInput.parentNode.setAttribute("data-error-visible", "true");
  }
  return nameOk;
}

// function to check if email is ok
function emailOk() {
  let emailOk = false;
  if(emailInput.value.trim().match(regexMail)) {
    emailInput.parentNode.removeAttribute("data-error");
    emailInput.parentNode.removeAttribute("data-error-visible");
    emailOk = true;
  }  else {
    emailInput.parentNode.setAttribute("data-error", "Veuillez entrer une adresse email valide");
    emailInput.parentNode.setAttribute("data-error-visible", "true");
  }
  return emailOk;
}

// function to check if birthdate is ok
function birthdateOk() {
  let birthdateOk = false;
  if(birthdateInput.value.trim() != "") { 
    birthdateInput.parentNode.removeAttribute("data-error");
    birthdateInput.parentNode.removeAttribute("data-error-visible");
    birthdateOk = true;
  } else {
    birthdateInput.parentNode.setAttribute("data-error", "Vous devez entrer votre date de naissance");
    birthdateInput.parentNode.setAttribute("data-error-visible", "true");
  }
  return birthdateOk;
}

// function to check if quantity is ok 
function quantityOk() {
  let quantityOk = false;
  if(quantityInput.value.trim() != "" && quantityInput.value.trim() >= 0) {
    quantityInput.parentNode.removeAttribute("data-error");
    quantityInput.parentNode.removeAttribute("data-error-visible");
    quantityOk = true;
  } else {
    quantityInput.parentNode.setAttribute("data-error", "Vous devez renseigner un chiffre");
    quantityInput.parentNode.setAttribute("data-error-visible", "true");
  }
  return quantityOk;
}

// function to check if location is ok
function locationOk() {
  let locationOk = false;
  if(document.querySelectorAll('input[type=radio]:checked').length == 1) {
    locationInput.parentNode.removeAttribute("data-error");
    locationInput.parentNode.removeAttribute("data-error-visible");
    locationOk = true;
  } else {
    locationInput.parentNode.setAttribute("data-error", "Vous devez choisir une destination")
    locationInput.parentNode.setAttribute("data-error-visible", "true");
  }
  return locationOk;
}

// function to check if condition is ok
function conditionOk() {
  let conditionOk = false;
  if(document.querySelectorAll('input[id=checkbox1]:checked').length == 1) {
    conditionInput.parentNode.removeAttribute("data-error");
    conditionInput.parentNode.removeAttribute("data-error-visible");
    conditionOk = true;
  } else {
    conditionInput.parentNode.setAttribute("data-error", "Vous devez valider les conditions générales")
    conditionInput.parentNode.setAttribute("data-error-visible", "true");
  }
  return conditionOk;
}

// function to check if all conditions are ok
function allConditionsOk(e) {
  e.preventDefault();
  let conditionLastName = lastNameOk();
  let conditionFirstName = firstNameOk();
  let conditionEmail = emailOk();
  let conditionBirthdate = birthdateOk();
  let conditionQuantity = quantityOk();
  let conditionLocation = locationOk();
  let conditionCondition = conditionOk();
  if(conditionFirstName && conditionLastName && conditionEmail && conditionBirthdate && conditionQuantity && conditionLocation && conditionCondition) {
    closeModal();
    firstInput.value = "";
    lastInput.value = "";
    emailInput.value = "";
    birthdateInput.value = "";
    quantityInput.value = "";
    uncheckLocation();
    thanks();
  }
}

// function to open remerciements
function thanks() {
  divThanks.style.display = "flex";
}

function closeThanks() {
  divThanks.style.display = "none";
}


// function to check if a location is already checked and unchecked them
function uncheckLocation(){
  if(document.querySelector('#location1').checked == true) document.querySelector('#location1').checked = false;
  if(document.querySelector('#location2').checked == true) document.querySelector('#location2').checked = false;
  if(document.querySelector('#location3').checked == true) document.querySelector('#location3').checked = false;
  if(document.querySelector('#location4').checked == true) document.querySelector('#location4').checked = false;
  if(document.querySelector('#location5').checked == true) document.querySelector('#location5').checked = false;
  if(document.querySelector('#location6').checked == true) document.querySelector('#location6').checked = false;
}
