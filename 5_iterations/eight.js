//reduce
const mynums =  [1,2,3,4,5,6,7,8,9,10]
//const newnums = mynums.reduce(function (acc, curr_val){
  //  console.log(`acc: ${acc} and curr_val: ${curr_val}`)
   // return acc + curr_val
//}, 3)

const newnums = mynums.reduce( (acc, curr) => acc+curr,0)
console.log(newnums);

const shoppingcart = [
    {
        itemname: 'js cource',
        price: 4789
    },
    {
        itemname: 'python',
        price: 4781
    },
    {
        itemname: 'mob dev',
        price: 6543
    },
    {
        itemname: 'data science',
        price: 12678
    }
]
const cart = shoppingcart.reduce( (acc, item) => acc + item.price , 0)
console.log(cart)  //28791