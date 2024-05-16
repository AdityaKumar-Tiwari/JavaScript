//Immediately Invoked Function Expressions (IIFE)
//it is used to eliminate the problem of global scope pollution
 //and along with that it immidiately executes the function



//iife
(function chai(){
    console.log(`DB CONNECT`)
})() ;//DB CONNECT

(  (name) => {
    console.log(`DB CONNECTED TWO ${name}`)
} )("hi")  //DB CONNECTED TWO to run this add ; in 1st one