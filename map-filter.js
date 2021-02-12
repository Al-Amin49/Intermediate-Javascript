//Homework -> foreach, REact er jonno map jana lage
const numbers =[3,4,5,6,7,8];
const output =[];
for(let i=0; i<numbers.length; i++){ 
    const element = numbers[i];
    const result = element*element;
    output.push(result);
}
console.log(output);

//Map
//map 3 ta parameter nite pare element, index, array
const numbers =[3,4,5,6,7,8];
function square (element){ 
    return element *element
}
numbers.map(function(element, index, array){ 

    console.log(element, index, array);
})

//map, filter array diye de, r find element de.

const numbers =[3,4,5,6,7,8];
function square(element){ 
    return element*element;
}// otoba ei function ebabe o leka jay.

//const square = element =>element*element;


const result = numbers.map(function(element){ 
    return element*element;

})
console.log(result);

//Uporer oitake Arrow function diye cuto kore leka jay

const result2= numbers.map(x=>x*x);
console.log('Arrow function=',result2);

//filter-> use kora hoy kisu select korar jonno.je shorto dibe sei onujayi kaj korbe.
const bigger = numbers.filter(x=> x<5);
console.log('Filter ', bigger);
//find-> find and filter almost same. filter er akta special version find bola jay.
// find a 5 er boro akta  dekabe. kintu filter joyta boro 5 teke shob dekabe
// filter a jodi kuno kisu 3 er cuto na take tobu o [] ata dekabe . r find er ketre undefined dekabe.
const isThere = numbers.find(x=>x<5);// 5 er 3 dile undefined dekabe ja filter er ketre [] ata dekay
console.log('find=', isThere);
