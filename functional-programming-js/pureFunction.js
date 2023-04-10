
//What is pure function?

// *It returns the result  if given the same arguments
// * It does not cause observable side effects

//this is a pure function because it maintain above two rule
function sqr(n){
    return n*n;
}
console.log(sqr(4))
console.log(sqr(4))
console.log(sqr(4))//It returns the result  if given the same arguments


//it is not a pure function. Because It has side effect.It change the outer varible.
var n=10;

function change(){
    n=100
}
change()
console.log(n)


//It is not a pure function . Becaute eta bhaire object k change kore ditese. tar mane it has side effect
var point ={
    x:45,
    y:30
}
function printPoint(point){
    point.x=100
    point.y=200
    console.log(point)
}
printPoint(point)
console.log(point)