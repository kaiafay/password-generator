// function that writes the password
var writePassword = function () {
  generatePassword();

};

// function that generates password
var generatePassword = function () {
  passwordLength();
  passwordLowercase();
  passwordUppercase();
  passwordNumeric();
  passwordSpecial();
};

var passwordLength = function() {
  // prompt for password length
  var lengthPrompt = window.prompt("What length would you like your password to be? (8-128 characters)");
  // validate the number input
    if (lengthPrompt < 8 || lengthPrompt > 128) {
      window.alert("You must pick a number between 8 and 128.");
      return passwordLength();
  };
};

var passwordLowercase = function() {
  // lowercase character criteria
  var lowercasePrompt = window.prompt("Would you like to include lowercase characters? Please type 'yes' or 'no'.");
  // make input lowercase to validate 
  lowercasePrompt = lowercasePrompt.toLowerCase();

  if (lowercasePrompt !== 'yes' && lowercasePrompt !== 'no') {
    window.alert("You must choose 'yes' or 'no'.");
    return passwordLowercase();
  };
};

var passwordUppercase = function() {
  // uppercase character criteria
  var uppercasePrompt = window.prompt("Would you like to include uppercase characters? Please type 'yes or 'no'.");
  // make input lowercase to validate
  uppercasePrompt = uppercasePrompt.toLowerCase();

  if (uppercasePrompt !== 'yes' && uppercasePrompt !== 'no') {
    window.alert("You must choose 'yes' or 'no'.");
    return passwordUppercase();
  };
};

var passwordNumeric = function() {
  // numeric character criteria
  var numericPrompt = window.prompt("Would you like to include numeric characters? Please type 'yes' or 'no'.");
  // make input lowercase to validate
  numericPrompt = numericPrompt.toLowerCase();

  if (numericPrompt !== 'yes' && numericPrompt !== 'no') {
    window.alert("You must choose 'yes' or 'no'.");
    return passwordNumeric();
  };
};

var passwordSpecial = function() {
  // special character criteria
  var specialPrompt = window.prompt("Would you like to include special characters? Please type 'yes' or 'no'.");
  // make input lowercase to validate
  specialPrompt = specialPrompt.toLowerCase();

  if (specialPrompt !== 'yes' && specialPrompt !== 'no') {
    window.alert("You must choose 'yes' or 'no'.");
    return passwordSpecial();
  };
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
