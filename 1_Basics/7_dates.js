//jan 1 1970  calc in milli sec
let mydate = new Date()
console.log(mydate)  //2024-05-12T15:34:57.751Z

console.log(mydate.toString())

console.log(mydate.toDateString()) //Sun May 12 2024
console.log(mydate.toISOString())  //2024-05-12T15:37:12.738Z
console.log(mydate.toLocaleDateString())  //5/12/2024
console.log(mydate.toLocaleTimeString())  //3:38:02 PM
console.log(typeof mydate)     //object

let createmydate = new Date(2024, 5, 23)  //months start ewith 0 in js
console.log(createmydate.toLocaleDateString())  //this way we have to declare


let mytimestamp = Date.now()
console.log(mytimestamp) //1715528618105 in millisec

console.log(Math.floor(Date.now()/1000))  //use to convert into second

let newdate = new Date()
console.log(newdate.getMonth())  //4  = may as it start with 0
console.log(newdate.getDay())  //0 = sunday

/*newdate.toLocaleString('default',{
    weekday: "long",
    timeZone: "kolkata"
})
console.toLocaleDateString(newdate)
*/
