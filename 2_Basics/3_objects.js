//singleton
const tinderuser = new Object()
tinderuser.id = "123a"
tinderuser.name = "sami"
tinderuser.isloggedin = false
//console.log(tinderuser)  //{ id: '123a', name: 'sami', isloggedin: false }

const regularuser = {
    email: "sami@gkil.com",

    fullname: {
        userfullname: {
            firstname: "sami",
            lastname: "zayn"
        }
    }

}
//console.log(regularuser.fullname)  //{ userfullname: { firstname: 'sami', lastname: 'zayn' } }

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

//const obj3 = Object.assign({},obj1,obj2)  //{}= targrt not compulsory, obj1,obj2= source
const obj3 = {...obj1, ...obj2}
//console.log(obj3)  //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const users = [
    {
        id:1,
        email:"df@gh.com"
    },
    {
        id:2,
        email:"dg@gh.com"
    },
    {
        id:4,
        email:"dfty@gh.com"
    },
]
users[1].email
console.log(tinderuser) 

console.log(Object.keys(tinderuser))  // [ 'id', 'name', 'isloggedin' ]
console.log(Object.values(tinderuser)) //[ '123a', 'sami', false ]
console.log(Object.entries(tinderuser)) //[ [ 'id', '123a' ], [ 'name', 'sami' ], [ 'isloggedin', false ] ]

console.log(tinderuser.hasOwnProperty('isloggedin'))  //true