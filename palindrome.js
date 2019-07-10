// Adss reverse to all strings.
String.prototype.reverse = function () {
    return Array.from(this).reverse().join("");
};

// Checks if string is blank. 
String.prototype.blank = function () {
    if (this.match(/^\s*$/g)) {
        return true;
    } else {
        return false; 
    }
};

// Returns last element of the array
Array.prototype.last = function() {
    return this[this.length-1]; 
}; 



function Phrase(content) {
    this.content = content;

    this.processor = function (string) {
        // Returns strings in lowerCase. 
        return string.toLowerCase();
    }

    this.processedContent = function processedContent() {
        return this.processor(this.content);
    }

    // Returns true if the phrase is a palindrome, false otherwise.
    this.palindrome = function palindrome() {
        return this.processedContent() === (this.processedContent()).reverse();
    }
}