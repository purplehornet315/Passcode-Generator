// Assignment code here
// var randomFunc = {
//     lower: getRandomLower,
//     upper: getRandomUpper,
//     number: getRandomNumber,
//     symbol: getRandomSymbol
// };

// function getRandomLower(){
//     return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }

// function getRandomUpper(){
//     return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// }

// function getRandomNumber(){
//     return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// }

// function getRandomSymbol(){
//     const symbols = '!@#$%^&*(){}<>?[],.';
//     return symbols[Math.floor(Math.random() * symbols.length)];
// }
const numberArray = [0,1,2,3,4,5,6,7,8,9];
const symobolArray = ["!", "@", "#", "$", "%,", "^","&", "*", "(",")", "?"];
const characterCodes = Array.from(Array(26)).map( (_, i) => i +97);
const lowercaseLetters = characterCodes.map(code => String.fromCharCode(code));
const uppercaseLetters = lowercaseLetters.map(letter => letter.toUpperCase());

var lowercaseLetter = function(){
    var lowercasePrompt = window.prompt("Do you want lowercase letters 'YES' or 'NO'");
  
     lowercasePrompt = lowercasePrompt.toLowerCase();
     
  
     if(lowercasePrompt === "yes"){
         lowercasePrompt = true;
     }
     else if(lowercasePrompt === "no"){
         lowercasePrompt = false;
     }
     else{
         window.alert( "You have placed an incorrect value. Please type yes or no.");
         lowercaseLetter();
     }
      return lowercasePrompt;
  }

var uppercaseLetter = function(){
    var uppercasePrompt = window.prompt("Do you want uppercase letters 'YES' or 'NO'");
  
     uppercasePrompt = uppercasePrompt.toLowerCase();
     
  
     if(uppercasePrompt === "yes"){
         uppercasePrompt = true;
     }
     else if(uppercasePrompt === "no"){
         uppercasePrompt = false;
     }
     else{
         window.alert( "You have placed an incorrect value. Please type yes or no.");
         uppercaseLetter();
     }
      return uppercasePrompt;
  }

var number = function(){
    var numberPrompt = window.prompt("Do you want to include numbers 'YES' or 'NO'");
  
     numberPrompt = numberPrompt.toLowerCase();
     
  
     if(numberPrompt === "yes"){
         numberPrompt = true;
     }
     else if(numberPrompt === "no"){
         numberPrompt = false;
     }
     else{
         window.alert( "You have placed an incorrect value. Please type yes or no.");
         number();
     }
      return numberPrompt;
  }

  var symbol = function(){
    var symbolPrompt = window.prompt("Do you want to include symbols 'YES' or 'NO'");
  
     symbolPrompt = symbolPrompt.toLowerCase();
     
  
     if(symbolPrompt === "yes"){
         symbolPrompt = true;
     }
     else if(symbolPrompt === "no"){
         symbolPrompt = false;
     }
     else{
         window.alert( "You have placed an incorrect value. Please type yes or no.");
         symbol();
     }
      return symbolPrompt;
  }

  var lengthA = function(){
    var lengthAPrompt = window.prompt("How long do you want you password to be? Must be between 8-128 characters.");
  
    //  symbolPrompt = symbolPrompt.toLowerCase();
    lengthAPrompt = parseInt(lengthAPrompt);
  
     if(lengthAPrompt > 8 && lengthAPrompt< 129){
         lengthAPrompt = parseInt(lengthAPrompt);
     }
     else{
         window.alert( "You have placed an incorrect value. Please type yes or no.");
         lengthA();
     }
      return lengthAPrompt;
  }


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

generateBtn.onclick  = function(){
    var lengthB = lengthA();
    console.log(lengthB);

    // lowercaseLetter();
    var lower = lowercaseLetter();
    console.log(lower);

    // uppercaseLetter();
    var upper = uppercaseLetter();
    console.log(upper);
  
    // number();
    var number1 = number();
    console.log(number1);
  
    // symbol();
    var symbols = symbol();
    console.log(symbols);  
}

const inputPassword = (lengthB, lower, upper, number1, symbols) =>{
    const availableCharacters = [
        ...(hasLowercaseLetters ? lowercaseLetters :[]),
        ...(hasUppercaseLetters ? uppercaseLetters :[]),
        ...(hasNumberArray ? numberArray :[]),
        ...(hasSymbolArray ? symobolArray :[])
    ];

    if(availableCharacters === 0)return "";

    for(let i=0; i<lengthB; i++){

    }
}


