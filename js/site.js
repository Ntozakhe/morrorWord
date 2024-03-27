//get our user input
function getValue() {
    document.querySelector('#alert').classList.add('invisible');
    //get user string from the page
    let userString = document.querySelector('#userString').value;

    //check to see if its a palindrome
    let returnObj = checkForPalindrome(userString);

    //display our message to the screen
    displayMessage(returnObj);
}

//check for a plaindrome
function checkForPalindrome(userString) {

    //make the user inout to lowercase
    userString = userString.toLowerCase();

    //remove spaces and special characters
    let regex = /[^a-z0-9]/gi;
    userString = userString.replace(regex, "");

    let revString = [];
    let returnObj = {};
    for (let i = userString.length - 1; i >= 0; i--) {
        revString += userString[i];
    }

    if(revString == userString){
       
        returnObj.msg = 'Well done! You enterd a PALINDROME!';
    }
    else{
        document.querySelector('#alert').classList.add('alert-danger');
        returnObj.msg = 'Sorry! You did not enter a PALINDROME';
    }

    returnObj.reversed = revString;

    return returnObj
}


//display a message to the string
function displayMessage(returnObj) {
    document.querySelector('#msg1').innerHTML = returnObj.msg;
    document.querySelector('#msg').innerHTML = `Your phrase reversed is: ${returnObj.reversed}`;
    document.querySelector('#alert').classList.remove('invisible');
}