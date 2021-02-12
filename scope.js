//scope deka baki roise.ei video abar dekte hobe puro hoy ni

// function sum(first , second){ 
//     let result = first + second;
//     console.log(result);
//     return result;
// }
// const output = sum(3,8);
// // console.log(result); akne result console korar por error dekay jeta define hoy ni . mane scope er baire r ki. jodi upore console kora hoy abar tik e run hobe.
// console.log(output);


// let bonus=20;//global scope
// function sum2(first , second){ 
//     let result2 = first + second+bonus;
//     console.log(bonus);
//     return result2;
// }
// const output2 = sum2(3,8);
// console.log(output2);
// console.log(bonus);

let bonus =20;
function sum(first , second){ 
    let result = first + second +bonus;
    if(result>9){ 
        var mood ="happy";
        mood="fishy";
        mood="cranky";
        
    }
    console.log(mood);
    return result;
}


