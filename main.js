let Phrase = require("dnaida-palindrome"); 

function palindromeTester(event) {
    event.preventDefault(); 
    
    let phrase = new Phrase(event.target.phrase.value); 

    let palindromeResult = document.querySelector("#palindromeResult"); 
    if (phrase.palindrome()) {
        palindromeResult.innerHTML = `"<strong>${phrase.content}</strong>" is a palindrome!`; 
    } else {
        palindromeResult.innerHTML = `"${phrase.content}" is NOT a palindrome.`; 
    }; 
};


document.addEventListener("DOMContentLoaded",function () {
    let form = document.querySelector("#palindromeTester"); 
    form.addEventListener("submit", function() {
        palindromeTester(event); 
    }); 
});  



