// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

// used for shopping cart

const myNums=[1,2,3]

// const myTotal=myNums.reduce(function(acc,currval){
//     console.log(`acc: ${acc} , currval: ${currval}`);
    
//     return acc+currval
// },2) // 2 is the initial value

// const myTotal=myNums.reduce( (acc,currval) => acc+currval,0 ) // 0 is the initial value

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const total_price=shoppingCart.reduce( (acc,item) => acc+item.price,0)

console.log(total_price);

