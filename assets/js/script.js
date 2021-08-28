// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function generatePassword() {
  var length = prompt("How long is your password?");
  var lowercase = confirm("Do you want to include lower case characters?");
  var uppercase = confirm("Do you want to include upper case letters?");
  var numeric = confirm("Do you want to include numeric characters?");
  console.log(lowercase, uppercase, numeric)
  if (lowercase, uppercase, numeric) {
    var myArray=[]
  for (let index = 0; index < length; index++) {
    var element = Math.floor(Math.random() * 10);
    console.log (index % 2 == 0) 
   if ((index % 2 == 0)==true) {
     myArray.push("a")
   }else{

     myArray.push(element)
   }
    
  }
    
  }
  // if(typeof x === 'string' && typeof y === 'string' && typeof z === 'string') {
  // console.log("My if was true")
  // }
  //   // else {
  //   var myArray=[]
  // for (let index = 0; index < length; index++) {
  //   var element = Math.floor(Math.random() * 10);
  //   myArray.push(element)
    
  // }

  var computerTurn =  Math.floor(Math.random() * length);

  // console.log(myArray);
  var finalPassword = myArray.toString(); 
  console.log(finalPassword)
  return finalPassword

  // var userTurn = prompt('Enter ').toLowerCase();


  //     return 'Not all strings';
  //   }
  }
  
  
 


 
    
function CheckPassword(inputtxt) {
  var passw = "Li$aco2021";
  if (inputtxt.value.match(passw)) {
    alert("Correct, try another...");
    return true;
  } else {
    alert("Wrong...!");
    return false;
  }

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
