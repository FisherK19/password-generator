// Assignment code here
let generateBtn = document.querySelector("#generate");

let numeric = "123456789";
let specialChar = "!@#$%^&*";
let Lowercase = "abcdefghijklmnopqrstuvwxyz";
let Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Declare variables that will be used 
let verifySpecialCharacter;
let verifyNumericCharacter;
let verifyUpperCase;
let verifyLowerCase;

function generatePassword() {
  let passwordLengthPrompt;

  // Get valid password length from the user
  do {
    passwordLengthPrompt = prompt("How many characters would you like your password to contain?");
  } while (passwordLengthPrompt < 8 || passwordLengthPrompt > 128);

  // Alerts again to verify length
  alert(`Your password will have ${passwordLengthPrompt} characters`);

  // Get user preferences for character types
  let confirmSpecialCharacter = confirm("Would you like to include special characters");
  let confirmNumericCharacter = confirm("Would you like to include numeric characters");
  let confirmLowerCase = confirm("Would you like to include lowercase characters");
  let confirmUpperCase = confirm("Would you like to include uppercase characters");

  // Ensure the user selects at least one character type
  while (!confirmUpperCase && !confirmLowerCase && !confirmSpecialCharacter && !confirmNumericCharacter) {
    alert("You must choose at least an upper, lower, special char, or number");
    confirmSpecialCharacter = confirm("Would you like to include special characters");
    confirmNumericCharacter = confirm("Would you like to include numeric characters");
    confirmLowerCase = confirm("Would you like to include lowercase characters");
    confirmUpperCase = confirm("Would you like to include uppercase characters");
  }

  // Combine selected character types
  let passwordCharacters = "";

  if (confirmSpecialCharacter) {
    passwordCharacters += specialChar;
  }

  if (confirmNumericCharacter) {
    passwordCharacters += numeric;
  }

  if (confirmLowerCase) {
    passwordCharacters += Lowercase;
  }

  if (confirmUpperCase) {
    passwordCharacters += Uppercase;
  }

  // Generate the password
  let randomPassword = "";
  for (let i = 0; i < passwordLengthPrompt; i++) {
    randomPassword += passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  }

  return randomPassword;
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

