// Assignment Code.
var generateBtn = document.querySelector("#generate");

// Declaration of all variables needed for the project including all possible characters that user may want to include into the password
var letters = 'abcdefghijklmonpqrstuvwxyz';
var numbers = '1234567890';
var characters = '!@#/"$%^&*()_+`~{}][=-';
var lettersUpperCase = letters.toUpperCase();
var charset ='';
var length;


// Condition function that checks for length and doesnt let user to create password unless it is the right length.
  function lengthCondition(){
    length = prompt('How long would you like your password to be?');
    if(length < 8){
      alert('Password is too short, it has to be at least 8 characters long');
      return lengthCondition();
    } else if(length > 128){
      alert('Password is too long, it has to be 128 characters or less');
      return lengthCondition();
    } else{
      return characteristics();
    }
  }; // End function



// Condition function that checks for what user wants to include in the password.
  function characteristics(){
    var qNumbers = confirm('Would you like your password to include numbers?');
    var qLetters = confirm('Would you like your password to include lower case letters?');
    var qUpperCase = confirm('Would you like your password to include upper case letters?');
    var qCharacters = confirm('Would you like your password to include special characters?');
    if(qNumbers === true){
      charset += numbers;
    }
    if(qLetters === true){
      charset += letters;
    }
    if(qUpperCase === true){
      charset += lettersUpperCase;
    }
    if(qCharacters === true){
      charset += characters;
    }
    // This condition checks if there is at least 1 type of characters included in password.
    if(charset.length == 0){
      alert('You have to select at least one type of characters to be included in the password!')
      characteristics();
    }
  }; // End function

// Password generator - creats a random string of characters that are passed from conditions user specified earlier.
// Resets the conditions without reloading the page when user clicks on generate password button again.
function generatePassword(){
  lengthCondition();
  var pswrd = '';
  for( i = 0; i < length; i++ ){
    pswrd += charset[parseInt(Math.random() * charset.length)];
  }
  charset = '';
  return pswrd;
}


// Write password to the #password input.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button.
generateBtn.addEventListener("click", writePassword);