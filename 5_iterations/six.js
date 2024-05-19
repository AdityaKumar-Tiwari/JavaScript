//filter and mapreduce
const mynums =  [1,2,3,4,5,6,7,8,9]  
const newnums = mynums.filter( (num) =>num > 4)
console.log(newnums);  //[ 5, 6, 7, 8, 9 ]

const mynums1 =  [1,2,3,4,5,6,7,8,9]  
const newnums1 = mynums1.filter( (num) => {
    num > 4  })
console.log(newnums1);  //[] because there is no return statement  inside the scope{}

const mynums2 =  [1,2,3,4,5,6,7,8,9]  
const newnums2 = mynums2.filter( (num) => {
    return num > 4  })
console.log(newnums2)  //[ 5, 6, 7, 8, 9 

const mynums3 =  [1,2,3,4,5,6,7,8,9]  
const newnums3 = []
mynums1.forEach( (num) => {
    if (num > 4) {
        newnums3.push(num)
    } })
console.log(newnums3) //[ 5, 6, 7, 8, 9 ]

//apply return inside the scope 