//for in
const myObject = {
    js: "javascript",
    cpp: "c++",
    rb : "ruby",
    swift: "swift by google"
}
    for (const key in myObject) {
       // console.log(myObject[key])
            console.log(`${key} shortcut is for ${myObject[key]}`)
    }

//++++++++ it prints keys

prog = ['js','rb','cpp', 'swift']
for (const key in prog) {
        console.log(prog[key]);
    }

//+++++++
const map = new Map()
map.set('in', 'india'),
map.set('us', 'america')

console.log(map);
for (const key in map) {
        console.log(key);
    }
