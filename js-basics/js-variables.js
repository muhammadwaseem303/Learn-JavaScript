const { table } = require("console");

const accountId = 36987; //Variable Const Type
let accountEmail = "waseem@google.com"; //Variable Let Type
var accountCity = "Gujranwala"; // Variable var Type
accountState = "Punjab"; //Variable without any type
//const accountpassowrd;//Declare const variable without assigning values that's why its value will be undefined


// Lets start to change the values of all Variables
//const
accountId = 12345; //Throw Error Because Const variable can not be changed after Initialized
// let
accountEmail="was@wa.com";//Let value can be changed after initialized but this scope is a Block scope
// var
accountCity = "Lahore";//Var value can be changed after initialized but this scope is a Functional Scope

console.log(accountId,accountEmail,accountCity,accountState,accountpassowrd); //Output Variables
console.table([accountId,accountEmail,accountCity,accountState,accountpassowrd]); //Output Variables in Table Form


/*
Prefer not to use var 
because of issue in block scope and functional scope 
*/

/*var: Variables declared with var are function-scoped. This means they are only accessible within the function in which they are declared, or globally if declared outside of any function.

let: Variables declared with let are block-scoped. They are limited to the block (enclosed by curly braces {}) in which they are defined. This includes loops, conditionals, and any other code blocks.*/