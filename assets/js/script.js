  
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
   var length=prompt("How long is your password?")
   var lowercase=confirm("Do you want to includde lower case characters?")
   var uppercase=confirm("Do you want an upper case?")
   var numeric=confirm("Do you ")
   return "Lisa"

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

