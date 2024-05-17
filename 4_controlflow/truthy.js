//here we dont do comaparision in condition statement
const emailuser = "adi678@gmail.com"

if (emailuser){
    console.log("got the email");
}else{
    console.log("dont have the user email");
}

// falsy values

//false, 0 ,-0 ,BigInt, 0n, "", null, undefined, NaN : else all are truthy values

//truthy values
//"0", 'false'," ",[], {}, function(){}

//Nullish Coalescing Operator (??): null , undefined

let val1;
//val1 = 5 ?? 10  //5
//val1 = null ?? 10 //10 if there is null then NCO cheaks the security of it
//val1 = undefined ?? 15  //15
val1 = null ?? 13 ?? 15  //here the 1st valure will only assign



console.log(val1);

//Terniary Operator
//condition ? true : false

const iceteaprice = 100

iceteaprice >= 80 ? console.log("less than 80") : console.log("more than 80");  //less than 80