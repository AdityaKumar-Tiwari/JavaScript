//while

let i =0
while (i <= 10) {
    console.log(`value of index is ${i}`);
    i = i+2
}

let myArray = ["shaktimaan","kilvish", "baalveer"]
let  arr = 0
while (arr < myArray.length) {
    console.log(`value is ${myArray[arr]}`);
    arr = arr+1
}


let score = 1
do {
    console.log(`score is ${score}`);
    score++
} while (score <= 10);

//score special case
let score1 = 11
do {
    console.log(`score is ${score1}`);
    score++
} while (score1 <= 10);  //score is 11