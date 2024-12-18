const user = {
    username: "mufaddal",
    age: 36,

    welcomeMessage:function(){
        console.log(`${this.username} welcome to my place`)
        
    }
}

//user.welcomeMessage()
user.username="sam"
user.welcomeMessage()

//console.log(this);

// function chai(){
//     let username="saifee"
//     console.log(this.username);
// }

// chai()

// const chai = function(){
//     let username="saifee"
//     console.log(this.username);
// }

// const chai = () => {
//     let username="saifee"
//     console.log(this.username);
// }

// chai()

// const addTwoNum = (num1,num2) => {
//     return num1 + num2
// }

// const addTwoNum = (num1,num2) => num1 + num2 // implicit return

// const addTwoNum = (num1,num2) => (num1 + num2)

const addTwoNum = (num1,num2) => ({username:"mufaddal"})

console.log(addTwoNum(3,5));

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
