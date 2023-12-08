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

// function will provide user with how many characters they would like to use in password
function generatePassword() {
  let passwordLengthPrompt = (prompt("How many characters would you like your password to contain?"));

  // Alerts if password length is wrong
  while(passwordLengthPrompt <= 8 || passwordLengthPrompt >= 128) {
      alert("Password length must be between 8-128 characters");
      let passwordLengthPrompt = (prompt("How many characters would you like your password to contain?"));
      } 

      // Alerts again to verify length  
      alert(`Your password will have ${passwordLengthPrompt} characters`);

    // click ok to determine what will be in password
    let confirmSpecialCharacter = confirm("Would like to include special characters");
    let confirmNumericCharacter = confirm("Would like to include numeric characters");    
    let confirmLowerCase = confirm("Would like to include lowercase characters");
    let confirmUpperCase = confirm("Would like to include uppercase characters");
      // Alerts to choose one of the variables 
      while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
        alert("You must choose at least an upper,lower,specialchar or number");
        let confirmSpecialCharacter = confirm("Would like to include special characters");
        let confirmNumericCharacter = confirm("Would like to include numeric characters");    
        let confirmLowerCase = confirm("Would like to include lowercase characters");
        let confirmUpperCase = confirm("Would like to include uppercase characters");   
    } 

      // section using Array instances no string outputs a message to the console
      let passwordCharacters = []
      
    if (confirmSpecialCharacter) {
      passwordCharacters = passwordCharacters.concat(specialChar)
    }

    if (confirmNumericCharacter) {
      passwordCharacters = passwordCharacters.concat(numeric)
    }
      
    if (confirmLowerCase) {
      passwordCharacters = passwordCharacters.concat(Lowercase)
    }

    if (confirmUpperCase) {
      passwordCharacters = passwordCharacters.concat(Uppercase)
    }

      console.log(passwordCharacters)

    //For loop to get a random character from the selection variable and the create a new variable called
    //randomChartacter. that randomcharacter variable is then added to the password variable and is returned to the user.
      let randomPassword = ""
      
      for (let i = 0; i < passwordLengthPrompt; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
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

