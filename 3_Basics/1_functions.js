function saymyname(){
    console.log("A")
    console.log("d")
    console.log("i")
    console.log("t")
    console.log("y")
    console.log("a")
}
//saymyname()


//to add two no
//function addTwoNumbers(number1, number2){   //number1 & number2 are called as parameters
    //console.log(number1 + number2)
//}
//addTwoNumbers(3,4) //7  //3&4 are called as arguments

function addTwoNumbers(number1, number2){   
    //let result = number1 + number2
    //return result

    return number1+ number2
}  

const result = addTwoNumbers(3,4)
//console.log("Result:" , result)


//new
function loginusermsg(username = "sam") {  //default is sam to not go inside if statement
    if(username === undefined){
        console.log("plz entre a username")
        return
    }
    return `${username} just logged in`
}
//console.log(loginusermsg("adi"))  //adi just logged in

//console.log(loginusermsg())  //undefined just logged in


//shopping cart
function calculatecartprice(...num1){  //... rest or spread operatior
    return num1
}
//console.log(calculatecartprice(200, 600,742))

//create an object
const user = {
    username: "adi",
    price: 567
}
function handleobject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
//console.log(handleobject(user))

//array in function
const newarray = [200,300 , 700]
function returnvalue(getarray) {
    return getarray[1]
}
console.log(returnvalue(newarray))  //300