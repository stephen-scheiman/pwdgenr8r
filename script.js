// Assignment Code
let generateBtn = document.querySelector("#generate");

// Create the generate password function as a wrapper
function generatePassword() {

//Initialize variables to hold varrious character groups
let upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let numeric = [0,1,2,3,4,5,6,7,8,9];
let strSymbols = `\`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~";'`;
let symbols = strSymbols.split("");
let charSelector;
let buildtmppwd = [];
let characterPool = [];

// Prompt the user for password length
let pwdLength = window.prompt("Enter password length from 8 to 128 characters");
// Test to make sure that it is a number between 8 and 128
if ((pwdLength > 128) || (pwdLength < 8)) {
  alert("That's not a password length from 8 to 128 characters");
  pwdLength = window.prompt("Enter password length from 8 to 128 characters");
} ;

// Ask user if they want to include upper case characters
let useUpper = window.prompt("Would you like to include upper case characters? Y or N");
if (useUpper == "Y") {
  useUpper = true;} else 
  if (useUpper == "N") {
useUpper = false;} else {
alert("Please enter Y or N only");
useUpper = window.prompt("Would you like to include upper case characters? Y or N");
};

// Ask user if they want to include lower case characters
let useLower = window.prompt("Would you like to include lower case characters? Y or N");
if (useLower == "Y") {
  useLower = true;} else 
  if (useLower == "N") {
useLower = false;} else {
alert("Please enter Y or N only");
useLower = window.prompt("Would you like to include lower case characters? Y or N");
};

// As user if they want to inlcude symbols
let useSymbol = window.prompt("Would you like to include symbols such as # and/or *? Y or N");
if (useSymbol == "Y") {
  useSymbol = true;} else 
  if (useSymbol == "N") {
    useSymbol = false;} else {
alert("Please enter Y or N only");
useSymbol = window.prompt("Would you like to include symbols such as # and/or *? Y or N");
};

// And finally ask if they want to include numbers
let useNumeric = window.prompt("Would you like to include numbers? Y or N");
if (useNumeric == "Y") {
  useNumeric = true;} else 
  if (useNumeric == "N") {
    useNumeric = false;} else {
alert("Please enter Y or N only");
useNumeric = window.prompt("Would you like to include numbers? Y or N");
};

// Start to build character pool based on user input
if (useUpper == true) {
  characterPool = characterPool.concat(upperCase);
};

if (useLower == true) {
  characterPool = characterPool.concat(lowerCase);
};

if (useNumeric == true) {
  characterPool = characterPool.concat(numeric);
};

if (useSymbol == true) {
  characterPool = characterPool.concat(symbols);
};

if (characterPool.length == 0) {
  alert("You must select at least one character set");
  return ("No character set chosen, try again");
}

// Use a randomly generated index to pick from the character pool array until length requirement is met
for (count = 1; count <= pwdLength; count++) {
  charSelector = Math.floor(Math.random() * characterPool.length);
  buildtmppwd = buildtmppwd.concat(characterPool[charSelector]);
};

//Take the characters that we placed in the array and stringify them
let tmppwd = buildtmppwd.join("");

// return our generated password from the function so we can write it to the screen
return (tmppwd);
};

//Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
};

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
