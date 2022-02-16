// function that writes the password
var writePassword = function () {
  generatePassword();

};

// function that generates password
var generatePassword = function () {
  // length of password criteria
  var lengthPrompt = window.prompt("What length would you like your password to be? (8-128 characters)");
  if (lengthPrompt < 8 || lengthPrompt > 128) {
    window.alert("You must pick a number between 8 and 128.");
    return generatePassword();
  };

  // lowercase character criteria
  var lowercasePrompt = window.prompt("Would you like to include lowercase characters? Please type 'yes' or 'no'.");
  // make input lowercase to validate 
  lowercasePrompt = lowercasePrompt.toLowerCase();

  if (lowercasePrompt !== 'yes' && lowercasePrompt !== 'no') {
    window.alert("You must choose 'yes' or 'no'.");
    return generatePassword();
  };

  // uppercase character criteria
  var uppercasePrompt = window.prompt("Would you like to include uppercase characters? Please type 'yes or 'no'.");
  // make input lowercase to validate
  uppercasePrompt = uppercasePrompt.toLowerCase();

  if (uppercasePrompt !== 'yes' && uppercasePrompt !== 'no') {
    window.alert("You must choose 'yes' or 'no'.");
    return generatePassword();
  };

  var numericPrompt = window.prompt("Would you like to include numeric characters? Please type 'yes' or 'no'.");
  // make input lowercase to validate
  numericPrompt = numericPrompt.toLowerCase();

  if (numericPrompt !== 'yes' && numericPrompt !== 'no') {
    window.alert("You must choose 'yes' or 'no'.");
    return generatePassword();
  };

  // special character criteria
  var specialPrompt = window.prompt("Would you like to include special characters? Please type 'yes' or 'no'.");
  // make input lowercase to validate
  specialPrompt = specialPrompt.toLowerCase();

  if (specialPrompt !== 'yes' && specialPrompt !== 'no') {
    window.alert("You must choose 'yes' or 'no'.");
    return generatePassword();
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
