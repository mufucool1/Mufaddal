function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

//sayMyName()

function addTwoNumbers(number1,number2){
    return number1+number2;
    // let result=number1+number2
    // return result
}

const result=addTwoNumbers(3,5);
//const result=addTwoNumbers(3,"5");

//console.log("Result is "+result);

//console.log("Result is",result);

function loginUserMessage(username="New User"){
    if(!username){
        console.log("Please enter username");
        return
    }  
    return `Welcome ${username}`
}

//console.log(loginUserMessage("Mufaddal"));
//console.log(loginUserMessage());

// function calculateCartPrice(...num1){
//     return num1
// }

// console.log(calculateCartPrice(200,300,500));

function calculateCartPrice(val1,val2,...num1){
    return num1
}

console.log(calculateCartPrice(200,300,700,2000));

const user={
    username:"Mufaddal",
    price:100
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

//handleObject(user);

handleObject({
    username:"Sam",
    price:399
})

const myNewArray=[200,500,700,1000]

function returnSecondValue(getArray,index){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))

console.log(returnSecondValue([50,100,200]))

function returnArrayIndexValue(getArray,index){
    return getArray[index]
}

console.log(returnArrayIndexValue(myNewArray,3))