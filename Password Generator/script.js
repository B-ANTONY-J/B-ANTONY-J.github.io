// // Elements to be  added to the DOM

///****Orgional code that I couldn't fix but found it easier to write and condense based off where I couldn't move forward
 
// const passwordEl = document.getElementById("password");
// const lengthEl = document.getElementById("length");
// const uppercaseEl = document.getElementById("uppercase");
// const lowercaseEl = document.getElementById("lowercase");
// const numberEl = document.getElementById("number");
// const symbolEl = document.getElementById("symbol");
// // const generateEl = document.querySelector("#generate");
// // Assignment Code

// const randomFunction = {
//   lower: getRandomLowerCase,
//   upper: getRandomUpperCase,
//   number: getRandomNumber,
//   symbol: getRandomSymbol,
// };

// // This should Generate event Listen
// generateEl.addEventListener("click", () => {
//   const length = +lengthEl.value;
//   const hasLower =lowercaseEl.value;
//   const hasUpper =uppercaseEl.value;
//   const hasNumber =numberEl.value;
//   const hasSymbol =symbolEl.value;

//   passwordEl.innerText = generateEl(
//     hasLower,
//     length,
//     hasUpper,
//     hasNumber,
//     hasSymbol,
//   );
//   // console.log(typeof length);
// });

// // Generate Password Function from above entries
// function generatePassword(lower, upper, length, number, symbol) {
//   //  password variables
//   // loop over length
//   // call generator function for each type
//   //  somehow configure pw from  password variable and return

//   let generatePassword = "";

//   const typesCount = lower + upper + number + symbol;

//   // console.log('typesCount: ', typesCount);

//   const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter (

//     item => Object.values(item)[0]
//   );

//   // console.log('typesArr: ', typesArr);

//   // if(typesCount === 0) {
//   //   return '';
//   // }

//   for(let i = 0; i < length; i <= typesCount) {
//     typesArr.forEach(type => {
//       const functionName = Object.keys(type)[0];
//       // console.log('functionName: ', functionName);

//       generatePassword += randomFunction[functionName]();
//     })

//   }
//   console.log(generatePassword)
// }

// // ****Temp removing in order to test Generate Password Button
// // var generateBtn = document.querySelector("#generate");

// // Write password to the #password input

// // function writePassword() {
// //   var password = generatePassword();
// //   var passwordText = document.querySelector("#password");

// //   passwordText.value = password;

// // }
// // making Chararcter sets to generate  Random lower case
// function getRandomLowerCase() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }
// console.log(getRandomLowerCase());

// // making Chararcter sets to generate  Random Upper case
// function getRandomUpperCase() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// }
// console.log(getRandomUpperCase());

// // making Chararcter sets to generate  Random Numbers
// function getRandomNumber() {
//   return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// }
// console.log(getRandomNumber());

// // making Chararcter sets to generate  Random Upper case
// function getRandomSymbol() {
//   var symbol = "!@#$%^&*()_-=+|][]{}'':?/.>,<";
//   return symbol[Math.floor(Math.random() * symbol.length)];
// }
// console.log(getRandomSymbol());

// // // making Chararcter sets to generate  Random Upper case
// // function getRandomLower() {
// //   return String.fromCharCode(Math.floor(Math.random()*26)+65);
// // }
// // Add event listener to generate button

// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }


// // generateEl.addEventListener("click", writePassword);



// ---NEW FULL WORKING CODE BELOW HERE ------- ---------



//Password option input - assigned code to  the dom and  will prompt the user for answers
const passwordEl = document.getElementById("password");
var characters = prompt("How many characters should the password containt (8-128)");
var upperCase = prompt("Should the password contain uppercase Letters?");
var lowerCase = prompt("Should the password contain lowercase Letters");
var numbers = prompt("Should the password contain numbers?");
var symbols = prompt("Should the password contain symbols?");
var generateEl = document.getElementById("generate");


/*adjusted code because lop above  stopped at "hasUpper"*/
function randomFunc(input) {
  let randomChar;
  if (input === "hasUpper") {
      randomChar = getRandomUpper();
  }
  if (input === "hasLower") {
      randomChar = getRandomLower();
  }
  if (input === "hasNumbers") {
      randomChar = getRandomNumber();
  }
  if (input === "hasSymbols") {
      randomChar = getRandomSymbol();
  }
  return randomChar;
}

//to determine password length between 8 and 128 anything else is invalid
if (characters > 7 && characters < 129) {
  var length = parseInt(characters, 10);
  console.log("length: " + length);
} else {
  var length = false;
  alert("Invalid Password length");
}

// if input is "yes" return true
if (upperCase.toLowerCase() === 'yes') {
  var hasUpper = true;
  console.log("upper: " + hasUpper);
}
if (lowerCase.toLowerCase() === 'yes') {
  var hasLower = true;
  console.log("lower: " + hasLower);
}
if (numbers.toLowerCase() === 'yes') {
  var hasNumbers = true;
  console.log("number: " + hasNumbers);
}
if (symbols.toLowerCase() === 'yes') {
  var hasSymbols = true;
  console.log("symbol: " + hasSymbols);
}

//generateEl  with this event function will allow for the password to generate
generateEl.addEventListener('click', function() {

  passwordEl.innerText = generatePassword(hasUpper, hasLower, hasNumbers, hasSymbols, length);
  console.log("generatebut");

});

//Generate password function
function generatePassword(hasUpper, hasLower, hasNumbers, hasSymbols, length) {
  let generatedPassword = '';

  const typesCount = hasUpper + hasLower + hasNumbers + hasSymbols;

  const typesArr = [{ hasUpper }, { hasLower }, { hasNumbers }, { hasSymbols }]

  for (let i = 0; i < length; i += typesCount) {
      typesArr.forEach(function(type) {
          const funcName = Object.keys(type)[0];
          generatedPassword = generatedPassword + randomFunc(funcName);
      });
  }

  return generatedPassword;

 //4. Add final password to password variable and return
  const finalPassword = generatedPassword;
  console.log("password: " + generatedPassword);
  return finalPassword;

}

// Password generator functions

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*()<>?,."
  return symbols[Math.floor(Math.random() * symbols.length)];
}


// // generateEl.addEventListener("click", writePassword);