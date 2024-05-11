const name = "Aditya"
const repoCount =  50

console.log(name + repoCount + "value")

console.log(`hello my name is ${name} and my repoCount is ${repoCount}`) //string interpolation use backtrics


const gamename = new String("aaddiittyyaa")
console.log(gamename[0])  //a

console.log(gamename.__proto__)  //{}

console.log(gamename.length)
console.log(gamename.toUpperCase()) //convet into uppercase
console.log(gamename.charAt(3))  //d
console.log(gamename.indexOf("t"))  //6

const newstring = gamename.substring(0,4) //last value is not included
console.log(newstring)   //aadd

const anotherstring = gamename.slice(-12,4) //for negtive values
console.log(anotherstring)

const  newstringi = "  Aditya  "
console.log(newstringi)
console.log(newstring.trim())  //to remove spaces

const url = "httpa://adi.com/adi@tiw"
console.log(url.replace('@', '%2')) //httpa://adi.com/adi%2tiw
console.log(url.includes('tiw')) //true

console.log(gamename.split("a")) //[ '', '', 'ddiittyy', '', '' ]