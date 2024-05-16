const user = {
    username: "adi",
    price: 999,

    welcomemsg: function(){
        console.log(`${this.username} , welcome to our website`)  //this refers current context
        //console.log(this)

    }
}
//user.welcomemsg() //adi , welcome to our website
//user.username= "harsh"
//user.welcomemsg()  //harsh , welcome to our website => as we change the current context
//console.log(this)  //{} because in browser global obj is window but in engine it is empty obj


//+++++++++++++++++++++
//function chai(){
 //   let username = "adi"
    //console.log(this.username)  //undefined  we cant use this inside function
//}
//chai()

//+++++++++++

//const chai = function(){
   // let username = "adi"
  //  console.log(this.username)  
//}
//chai()

//++++++++++++
const chai = () =>{
    let username = "adi"
    //console.log(this)  //undefined  we cant use this inside function
}
//chai()

//+++++++++   arrow func  ++++++++++

const addtwo = (num1, num2) =>{
    return num1+ num2
}
console.log(addtwo(3 , 6))  //9

//+++++++++++ implicit return in arrow func
const addtwo1 = (num1, num2) =>  num1+ num2


//////return object
const addtwo2 = (num1, num2) =>  ({username: "adi"})
console.log(addtwo2()) //{ username: 'adi' }

console.log(addtwo1(3 , 4))  //7  
// here if we have used {} then return ketword is must if not then not required
