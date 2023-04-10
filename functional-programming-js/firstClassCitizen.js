

//Functions as First-Class Citizens
/*
what is first class citizen?

If any programming language has the ability to treat functions as values, to pass them as arguments and to return a 
function from another function then it is said that  programming language has First Class Functions and the functions
 are called as First Class Citizens in that programming language.
*/
//1- ability to treat function as values
var greet = function() {
    console.log("Hello World!");
  }
  greet();

//2. Ability to pass a function as arguments

function head (){
    return("dept head");
}
function supervisor(){
    return("my project supervisor");
}
 function greeting(user){
    console.log("Assalamualikum", user())
 }
 var msg= greeting(head)
 var msg= greeting(supervisor)

 //3. ability to return a function from another function
 var welcome = function(){
    return function(){
    console.log("Welcome to the world!");
    }
}
welcome()();