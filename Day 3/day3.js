//define function
// function testfunction(){
//     console.log("Hello World!")
// }
// testfunction();

//define function and call with arg
// function testfunction(x){
//     console.log(x)
// }
// testfunction(Jayant);

//Function with return value
// function testfunction(x,y){
//     return x+y;
// }
// let c = testfunction(4,5);
// console.log(c);

//Function with default value
// function testfunction(X="default is here"){
//     console.log(X);
// }
// testfunction();

//Assigning function to a variable (function expression)
// let a = function xyz(){
//     console.log("Hello World!");
// }
// a();

//anonymous function
let a = function (){
    console.log("anonymous function is called");
}
a();

//arrow function
let arrow = () => {
    console.log("Inside arrow function")
}
arrow();