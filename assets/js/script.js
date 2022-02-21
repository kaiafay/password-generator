// array of characters
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var UpperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];

// function that holds all the prompts
var prompts = function() {

  // password length criteria
  var passwordLength =  window.prompt("What length would you like your password to be? (8-128 characters)");
    // validate the number input
    if (passwordLength < 8 || passwordLength > 128) {
      window.alert("You must pick a number between 8 and 128.");
      return prompts();
      // checks to see if the input is not a number 
    } else if (isNaN(passwordLength)) {
      window.alert("Invalid input! Please pick a number.");
      return prompts();
    };

  // lowercase character criteria
  var passwordLowercase = window.confirm("Would you like to include lowercase characters? Please press 'OK' for yes or 'Cancel' for no.");

  // uppercase character criteria
  var passwordUppercase = window.confirm("Would you like to include uppercase characters? Please press 'OK' for yes or 'Cancel' for no.");

  // numeric character criteria
  var passwordNumeric = window.confirm("Would you like to include numeric characters? Please press 'OK' for yes or 'Cancel' for no.");

  // special character criteria 
  var passwordSpecial = window.confirm("Would you like to include special characters? Please press 'OK' for yes or 'Cancel' for no.");

  // checks if user doesn't include any character types 
  if (passwordLowercase === false && passwordUppercase === false && passwordNumeric === false && passwordSpecial === false) {
    alert("You must select at least one character type!");
    return generatePassword();
  };

  // object to store user's answers
  var userInput = {
    length: passwordLength,
    includeLower: passwordLowercase,
    includeUpper: passwordUppercase,
    includeNumeric: passwordNumeric,
    includeSpecial: passwordSpecial,
  };

  // returns user's answers
  return userInput;
};

// function that gets a random element from an array
function randomize(arr) {
  // gets a random number based off the array length
  var randomIndex = Math.floor(Math.random() * arr.length);
  // picks the element in the array that corresponds to the random number
  var randomEl = arr[randomIndex];
  // returns the randomized element
  return randomEl;
};

// function that generates password
var generatePassword = function () {
  var options = prompts();

  // array for possible characters
  var possibleChar = [];

  // array for resulting characters
  var result = [];

  // array to ensure one of each selected character is included in the password
  var requiredChar = [];

  // adds lowercase characters array to possible characters array if selected by user
  if (options.includeLower === true) {
    possibleChar = possibleChar.concat(lowerCase);
    // pushes random lowercase character to required characters array
    requiredChar.push(randomize(lowerCase));
  }

  // adds uppercase characters array to possible characters array if selected by user
  if (options.includeUpper === true) {
    possibleChar = possibleChar.concat(UpperCase);
    // pushes random uppercase character to required characters array
    requiredChar.push(randomize(UpperCase));
  }

  // adds numeric characters array to possible characters array if selected by user
  if (options.includeNumeric === true) {
    possibleChar = possibleChar.concat(numbers);
    // pushes random numeric character to rquired characters array
    requiredChar.push(randomize(numbers));
  }

  // adds special characters array to possible characters array if selected by user
  if (options.includeSpecial === true) {
    possibleChar = possibleChar.concat(specialChar);
    // pushes random special character to required characters array
    requiredChar.push(randomize(specialChar));
  }

  // for loop that picks characters from possible characters array
  for (let i=0; i < options.length; i++) {
    // randomly picks a character from the possible characters array
    var character = randomize(possibleChar)

    // pushes the random character to the result array for the password
    result.push(character)
  };

  // for loop that includes the required characters in the result array for the password
  for (let i=0; i < requiredChar.length; i++) {
    result[i] = requiredChar[i];
  }

  return result;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  password = password.join("");
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
