// array of characters
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var UpperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];

// array for possible characters
var possibleChar = [];

var passwordLength = function() {
  // prompt for password length
  var lengthPrompt = window.prompt("What length would you like your password to be? (8-128 characters)");
  // validate the number input
    if (lengthPrompt < 8 || lengthPrompt > 128) {
      window.alert("You must pick a number between 8 and 128.");
      return passwordLength();
      // checks to see if the input is not a number 
    } else if (isNaN(lengthPrompt)) {
      window.alert("Invalid input! Please pick a number.");
      return passwordLength();
    };

  return lengthPrompt;
};

var passwordLowercase = function() {
  // lowercase character criteria
  var lowercasePrompt = window.confirm("Would you like to include lowercase characters? Please press 'OK' for yes or 'Cancel' for no.");
  
  if (lowercasePrompt === true) {
    possibleChar.push(lowerCase);
  }
};

var passwordUppercase = function() {
  // uppercase character criteria
  var uppercasePrompt = window.confirm("Would you like to include uppercase characters? Please press 'OK' for yes or 'Cancel' for no.");

  if (uppercasePrompt === true) {
    possibleChar.push(UpperCase);
  }
};

var passwordNumeric = function() {
  // numeric character criteria
  var numericPrompt = window.confirm("Would you like to include numeric characters? Please press 'OK' for yes or 'Cancel' for no.");

  if (numericPrompt === true) {
    possibleChar.push(numbers);
  }
};

var passwordSpecial = function() {
  // special character criteria
  var specialPrompt = window.confirm("Would you like to include special characters? Please press 'OK' for yes or 'Cancel' for no.");
  
  if (specialPrompt === true) {
    console.log("we want specials");
    possibleChar.push(specialChar);
  }
};

// function that generates password
var generatePassword = function () {

  // run functions
  var length = passwordLength();
  passwordLowercase();
  passwordUppercase();
  passwordNumeric();
  passwordSpecial();

  console.log(possibleChar)
  console.log(length);
  
  // array for resulting characters
  var result = [];

  // for loop for password length of possible characters
  for (let i=0; i < passwordLength; i++) {
    
  }
  // random function that generates index based on criteria
  // use at least one character of each included in criteria
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
