
let a = 500
if(true){
    let a = 10
    const b = 20
    //var c = 30
    console.log("INNER:" , a)  //INNER: 10

}



//console.log(a)
//console.log(b)
//console.log(c) //30  thats why e avoid var
 //the value inside if is called block scope and outside is called glbal scope

 console.log(a) //500


 //nested scope

 function one (){
    const username = "aditya"

    function two(){
        const website = "youtube.com"
        console.log(username)
    }
    //console.log(website)
    two()
 }
 //one()


 //new code
 if(true){
    const username = "aditya"
    if(username === "aditya"){
        const website = " youtube"
        console.log(username + website)  //aditya youtube
    }
    //console.log(website)
 }
 //console.log(username)

 //++++++++++++++++ intresting ++++++++++++++++++


 //console.log(addone(5))  //6
 function addone(num){
    return num + 1
 }
//console.log(addone(5))  //6


console.log(addtwo(5))  //Cannot access 'addtwo' before initialization  called as HOISTING
const addtwo = function (num){  //also called as expression
    return num + 2
 } 
//console.log(addtwo(5))  //7