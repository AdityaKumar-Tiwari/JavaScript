//for of
//["", "",""]
//[{}, {},{}]

const arr = [1, 2,3, 4, 5]
for (const num of arr) {
    console.log(num)
}

const greetings = "hello world"
for (const greet of greetings) {
    console.log(`each char is ${greet}`);
}

//maps  : it takes key value pair
const map = new Map()
map.set('in', 'india'),
map.set('us', 'america')

console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-' ,value)
}

//for obj as they are not iteratable
const myObject ={
    game1 : "lodo",
    game2 : "carrom"
}

for (const [key, value] of myObject) {
    console.log(key, ':-' ,value)  //myObject is not iterable
}