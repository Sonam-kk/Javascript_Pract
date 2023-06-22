// Function Statement
function hellofunction(){
    console.log("Hello from Normal Function!");
}
hellofunction(); //This is function call


// Function Expression

// Function expression Anonymous expression
const hellofunctionAnonymous=function(){
    console.log("Function expression Anonymous expression");
}
hellofunctionAnonymous();
console.log(hellofunctionAnonymous);




// Function expression Named expression
const hellofunctionNamed=function xyz(){
    console.log("Function expression Named expression");
}
hellofunctionNamed();
// xyz(); //This is not allowed as functuon gets swip off after executing.
console.log(hellofunctionNamed);



// IIFES-> Immediatly inovation function expression
(function(){
    console.log("Hello from IIFES");
})
();


// Parameter-Value paased at the time of function declearation 
// Argument-Value at the time of Calling function

function sum(a,b){   // Here a and be is parameter 
    return a+b;
}
let sumvalue=sum(3,5);
console.log(sumvalue);  // here 3 and 4 is an argument


// First class function/Citizen
 
//unction in js are called first class function citizens because they have ability
//to store variable ,passed as argument and parameter,they can also be returned in the fucntion.







