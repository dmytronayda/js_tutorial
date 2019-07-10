let b = ['ant', 'bat', 'cat', 42]; 
b.forEach((element) => {
    console.log(element); 
}); 



let soliloquy = "To be, or not to be, that is the question:";
Array.from(soliloquy).forEach((i) => {
    console.log(i); 
}); 

let a = [8, 17, 42, 99];
a.sort(function(a, b) { return a - b; }).forEach((i) => {
    console.log(i); 
}); 