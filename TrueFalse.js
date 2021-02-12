//GS->Comparison of truthy and falsy values in js

//Summary jei jinish gula dile false hoy.
// 1)0 2)"" 3)undefined 4)null 5)NaN
//Truthy
//"0"  " "  []  {}

//1
const age =4;// kintu age =4 er jaygay abar 0 hole false dekabe.
if(age){ //jokon shudu age>0 er poriborte shdudu age takbe tokon o "condition is true"dekabe.
    console.log("Condition is true");
}
else{ 
    console.log("condition is false");
}
//js a kuno kisu undefined hole js setake false dhore neve.
//2
const names ="Al-Amin";// kintu name="Al-Amin" er jaygay abar "" (empty string) hole false dekabe. abr lodi " " akta faka space take tahole true dekabe.
if(names.length>0){ //jokon shudu name.length>0 er poriborte shdudu name takbe tokon o "condition is true"dekabe.
    console.log("Condition is true");
}
else{ 
    console.log("condition is false");
}
