//map
const mynums =  [1,2,3,4,5,6,7,8,9,10] 
const newnums = mynums.map(  (num) =>  num +10)
console.log(newnums);

const mynums1 =  [1,2,3,4,5,6,7,8,9,10] 
const newnums1 = mynums1.map(  (num) =>  { return num +10})  //scope  is there so use return 
console.log(newnums1);

//chaining  use 2 ,3 methods directly
const mynums3 =  [1,2,3,4,5,6,7,8,9,10] 
const newnums3 = mynums3.map(  (num) => num * 10).map( (num) => num +1 ).filter( (num) => num >=40)
console.log(newnums3);

