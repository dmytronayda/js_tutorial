let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Kansas -> kansas
// North Dakota -> north-dakota


// Returns a URL-friendly version of a string.
//  Example: "North Dakota" -> "north-dakota"
function urlify(string) {
    return string.toLowerCase().split(/\s+/).join('-');
}

let imperativeFunction = (elements) => {
    let urls = [];
    elements.forEach(element => {
        urls.push(urlify(element));
    });
    return urls;
}

// same with functional programming 

function functionalUrls(elements) {
    return elements.map(element => urlify(element));
}

console.log(imperativeFunction(states));

console.log(functionalUrls(states));


// Using map, write a function that takes in the states variable and returns an
//  array of URLs of the form https://example.com/<urlified form>.
function urlifyState(element) {
    return 'https://example.com/' + element.toLowerCase().split(/\s+/).join('-');
}

function returnArray(elements) {
    // return URLs of the following form https://example.com/<urlified form>
    return elements.map(element => urlifyState(element));
};

console.log(returnArray(states));


// singles: Imperative version
function singles(elements) {
    let singleWordStates = [];
    elements.forEach(element => {
        if (element.split(/\s+/).length === 1) {
            singleWordStates.push(element);
        }
    });
    return singleWordStates;
};

console.log(singles(states));

// singles: functional version
function functionalSingles(elements) {
    return elements.filter(element => element.split(/\s+/).length === 1);
};

console.log(functionalSingles(states));



function functionalTwoWordStates(elements) {
    return elements.filter(element => element.includes("Dakota"));
};

function functionalTwoWordStates2(elements) {
    return elements.filter(element => element.split(/\s+/).length === 2);
};

console.log(functionalTwoWordStates(states));
console.log(functionalTwoWordStates2(states));



let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // imperative function that sums up an array of numbers
// let imperativeSum = (arr) => {
//     let sum = 0;
//     arr.forEach(element => {
//         sum += element;
//     });
//     return sum;
// }
// console.log(imperativeSum(numbers));


// functional sum function solution
let functionalSum = (arr) => {
    return arr.reduce((sum, n) => {return sum += n})
}; 

console.log(functionalSum(numbers));


// functional product function solution
let functionalProduct = (arr) => {
    return arr.reduce((product, n) => {return product *= n})
}; 

console.log(functionalProduct(numbers));

// length imperative solution 

let lengthImperative = (arr) => {
    let keyVal = {}; 
    arr.forEach(element => {
        keyVal[element] = element.length; 
    }); 
    return keyVal; 
}

console.log(lengthImperative(states)); 

// length functional solution 

let lengthFunctional = (arr) => {
    return arr.reduce((arr, element) => {
        arr[element] = element.length; 
        return arr; 
    }, {}); 
}

console.log(lengthFunctional(states)); 

let lengthFunctional2 = (arr) => {
    return arr.reduce((arr, element) => {arr[element] = element.length; return arr;}, {}); 
}

console.log(lengthFunctional2(states)); 