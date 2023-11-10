// Assignment Code
let generateBtn = document.querySelector("#generate");
// Prompt the user for password length
let pwdLength = window.prompt("Enter password length from 8 to 128 characters");
// Test to make sure that it is a number between 8 and 128
if ((pwdLength > 128) || (pwdLength < 8)) {
  alert("That's not a number between 8 and 128");
  pwdLength = window.prompt("Enter password length from 8 to 128 characters");
} 
// Ask user if they want to include upper case characters
let useUpper = window.prompt("Would you like to include UPPER CASE characters? Y or N");
if (useUpper == "Y") {
  useUpper = true;} else 
  if (useUpper == "N") {
useUpper = false;} else {
alert("Please enter Y or N only");
useUpper = window.prompt("Would you like to include UPPER CASE characters? Y or N");
};
// Ask user if they want to include lower case characters
let useLower = window.prompt("Would you like to include lower case characters? Y or N");
if (useLower == "Y") {
  useLower = true;} else 
  if (useLower == "N") {
useLower = false;} else {
alert("Please enter Y or N only");
useLower = window.prompt("Would you like to include UPPER CASE characters? Y or N");
};
// As user if they want to inlcude symbols
let useSymbol = window.prompt("Would you like to include symbols such as # and/or *? Y or N");
if (useSymbol == "Y") {
  useSymbol = true;} else 
  if (useSymbol == "N") {
    useSymbol = false;} else {
alert("Please enter Y or N only");
useSymbol = window.prompt("Would you like to include UPPER CASE characters? Y or N");
};
// And finally ask if they want to include numbers
let useNumeric = window.prompt("Would you like to include numbers? Y or N");
if (useNumeric == "Y") {
  useNumeric = true;} else 
  if (useNumeric == "N") {
    useNumeric = false;} else {
alert("Please enter Y or N only");
useNumeric = window.prompt("Would you like to include UPPER CASE characters? Y or N");
};

//Initialize arrays to hold varrious character groups
let upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let numeric = [0,1,2,3,4,5,6,7,8,9];
let symbols = ["!","@","#","$","%","^","&","*","(",")","-","+","=","_"];
let characterPool = [];

// Start to build character pool based on user input
if (useUpper == true) {
  alert("Use Upper is True");
  characterPool = characterPool.concat(upperCase);
}
if (useLower == true) {
  alert("Use Lower is True");
  characterPool = characterPool.concat(lowerCase);
}
if (useNumeric == true) {
  alert("Use Numeric is True");
  characterPool = characterPool.concat(numeric);
}
if (useSymbol == true) {
  alert("Use Symbols is True");
  characterPool = characterPool.concat(symbols);
}



console.log(pwdLength);
console.log(characterPool);


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
