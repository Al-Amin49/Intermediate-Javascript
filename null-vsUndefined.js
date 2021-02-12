//undefined

1
let pakhi;
console.log(pakhi);
// output-> undefined(karon pakhi er value set kora hoy ni)

2
function add( num1, num2){ 
    console.log(num1+num2);
      return (shudu jodi return leke kuno kisu leki na tahole undefined dekabe)
}
const result = add(13, 82);
console.log(result);
// output->undefined (karon return dewa hoy ni)

3
function add(num1, num2){ 
    console.log(num1, num2);
}
const result = add(13);
console.log(result);
//output-> undefined (kuno akta parameter pass na korle by default undefined hoye jay)

4
const premik ={names: "smart", phone:655565}
console.log(premik.gf);
//output:undefined;

5
let fun = undefined;
console.log(fun);
// output:undefined;



//null
null mane kisu ny. kali. tobe seta amra explicitely set korte pari.

