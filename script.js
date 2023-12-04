// Assignment code here
var generateBtn = document.querySelector("#generate");

var numeric = "123456789";
var specialChar = "!@#$%^&*";
var Lowercase = "abcdefghijklmnopqrstuvwxyz";
var Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Declare variables that will be used 
var verifyLength = "";
var verifySpecialCharacter;
var verifyNumericCharacter;
var verifyUpperCase;
var verifyLowerCase;

// function will provide user with how many characters they would like to use in password
function generatePassword() {
  var confirmLength = (prompt("How many characters would you like your password to contain?"));

  // Alerts if password length is wrong
  while(confirmLength <= 8 || confirmLength >= 128) {
      alert("Password length must be between 8-128 characters");
      var confirmLength = (prompt("How many characters would you like your password to contain?"));
      } 

      // Alerts again to verify length  
      alert(`Your password will have ${confirmLength} characters`);

    // click ok to determine what will be in password
    var confirmSpecialCharacter = confirm("Would like to include special characters");
    var confirmNumericCharacter = confirm("Would like to include numeric characters");    
    var confirmLowerCase = confirm("Would like to include lowercase characters");
    var confirmUpperCase = confirm("Would like to include uppercase characters");
      // Alerts to choose one of the variables 
      while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
        alert("You must choose at least an upper,lower,specialchar or number");
        var confirmSpecialCharacter = confirm("Would like to include special characters");
        var confirmNumericCharacter = confirm("Would like to include numeric characters");    
        var confirmLowerCase = confirm("Would like to include lowercase characters");
        var confirmUpperCase = confirm("Would like to include uppercase characters");   
    } 

      // section using Array instances no string outputs a message to the console
      var passwordCharacters = []
      
    if (confirmSpecialCharacter) {
      passwordCharacters = passwordCharacters.concat(specialChar)
    }

    if (confirmNumericCharacter) {
      passwordCharacters = passwordCharacters.concat(number)
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
      var randomPassword = ""
      
      for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

