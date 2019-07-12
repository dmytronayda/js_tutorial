let Phrase = require("dnaida-palindrome"); 

function palindromeTester() {
    let string = prompt("Please enter a string for a palindrome testing:")
    let phrase = new Phrase(string); 

    let palindromeResult = document.querySelector("#result"); 
    if (phrase.palindrome()) {
        palindromeResult.innerHTML = `"${phrase.content}" is a palindrome!`; 
    } else {
        palindromeResult.innerHTML = `"${phrase.content}" is NOT a palindrome.`; 
    }; 
};


document.addEventListener("DOMContentLoaded",function () {
    let form = document.querySelector("#palindromeTester"); 
    form.addEventListener("submit", function() {
        palindromeTester(); 
        return false;
    }); 
});  



