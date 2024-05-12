const myarr = [0,1,2,3,5]
console.log(myarr[0])

const heros = ["shaktimaan", "naagrag"]
const myarr2= new Array(1,3,5,7)
console.log(heros)
console.log(myarr2)

//array methods
myarr.push(7)
myarr.pop()

myarr.unshift(9)   //[ 9, 0, 1, 2, 3, 5 ]
myarr.shift()
console.log(myarr.includes(5))  //true

const newarr = myarr.join()
console.log(typeof newarr)   //used to convert into string


//slice , splice

console.log("A", myarr)

const myn1 = myarr.slice(1,3)  //it leaves the last value

console.log(myn1)
console.log("B", myarr)

const myn2 = myarr.splice(1,3)  //it includes the whole range
console.log("C", myarr)   //it removes the orignal array's range i.e. it manipulates the orignal array
console.log(myn2)



const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros= ["batman", "superman", "flash"]

marvel_heros.push(dc_heros)
console.log(marvel_heros)  //thy did't merge [ 'thor', 'ironman', 'spiderman', [ 'batman', 'superman', 'flash' ] ]
 
const allheros =marvel_heros.concat(dc_heros)
console.log(allheros)  //to merge

//*******************************spread method ... */

const allheros_new = [...marvel_heros, ...dc_heros]
console.log(allheros_new)


//flat
const another_array = [1,2,3, [4,5,6], 7,[6,7,[4,5]]]

const usable_array = another_array.flat(Infinity)
console.log(usable_array)

console.log(Array.isArray("Aditya"))  //false
console.log(Array.from("Aditya")) //makes a new array [ 'A', 'd', 'i', 't', 'y', 'a' ]

console.log(Array.from({name: "aditya"}))  //intresting case  [] gives empty arr

let score1 =100
let score2 =200
let score3 = 400

console.log(Array.of(score1,score2,score3))  //[ 100, 200, 400 ]