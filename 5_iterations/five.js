//for each : call back func it does not have name so remove it

const coding = ['js','rb','cpp', 'swift']

//coding.forEach( function (item){
  //  console.log(item);
//})
 
//coding.forEach( (item)=> {
  //  console.log(item);
//})

//function printMe(item){
  //  console.log(item);
//}
//coding.forEach(printMe)

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr)
})

const mycoding = [{
    langname: 'javascript',
    langfilename: 'js'
},
{
    langname: 'python',
    langfilename: 'py'
},
{
    langname: 'c++',
    langfilename: 'cpp'
}
]
mycoding.forEach( (item) => {
    console.log(item.langname);
})