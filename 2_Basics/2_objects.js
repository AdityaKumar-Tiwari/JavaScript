//singleton  obj made by constructor
//Object.create

//object literals

const mysym = Symbol("key1")


const Jsuser = {
    name: "Aditya",
    //to use/access symbol in datatype use square brackets
    [mysym]: "mykey1",
    "fullname": "aditya tiwari",
    age: 20,
    email: "adi123@gmail.com",
    isloggedin: false,
    lastloginDays: ["monday", "saturday"]
}
console.log(Jsuser.email)
console.log(Jsuser["fullname"])


console.log(Jsuser["email"])
console.log(Jsuser[mysym])


Jsuser.email = "adi12@google.com"
//Object.freeze(Jsuser)
Jsuser.email = "adi12@amazon.com"
console.log(Jsuser)


//in js functions are treated as type 1 citizen i.e. we can treat them as variables

Jsuser.greeting = function(){
    console.log("hello js user")
}
Jsuser.greetingtwo = function(){
    console.log(`hello js user, ${this.name}`)
}
console.log(Jsuser.greeting())  //hello js user
console.log(Jsuser.greetingtwo()) //hello js user, Aditya

