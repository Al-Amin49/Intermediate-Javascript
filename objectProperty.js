const students = [ 
    {id:21, name:"Sharlina"},
    {id:31, name:"Shoel"},
    {id:41, name:"Shanzida"},
    {id:71, name:"Shejuti"}
];
const names = students.map(s=>s.name);
const ids = students.map(s=>s.id)
console.log("name",  names);
console.log("id", ids);
const bigger = students.filter(s=> s.id>40);
console.log('Bigger number is', bigger);
// const namess=[];

// for(let i=0; i<students.length; i++){ 
//     const elements = students[i];
//     namess.push(elements);
// }
// console.log(namess);