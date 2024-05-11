const score = 400
console.log(score) //400

const balance = new Number(100)  //[Number: 100]
console.log(balance)

console.log(balance.toString().length)

console.log(balance.toFixed(1))  //100.0

const number = 23.8754
console.log(number.toPrecision(3)) //23.9

const hundred = 10000000
console.log(hundred.toLocaleString()) //10,000,000
console.log(hundred.toLocaleString('en-IN')) //1,00,00,000  Indian standard

//************************MATHS ***********************//

console.log(Math)  // Object [Math] {}


console.log(Math.abs(-4))  //to convert negative to positive 

console.log(Math.round(408.76))  //409

console.log(Math.ceil(34.3))  //35

console.log(Math.floor(34.8))  //34

console.log(Math.min(4,5,7,8,9))  //4

console.log(Math.max(4,8,5,7,1))  //8


console.log(Math.random())  //its range is in b/w 0 and 1
console.log(Math.random()*10+1)  //we add +1 because some times its value also becomes 1  and * for getting out of range
console.log((Math.random()*10) +1)  //more precise way
console.log(Math.floor(Math.random()*10) +1)


const min =10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)  //11 in range of 11 and 20 it is a formula
