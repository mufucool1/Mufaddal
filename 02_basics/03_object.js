// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Mufaddal",
    "full name": "Mufaddal Saifee",
    [mySym]: "mufaddal",
    age: 18,
    location: "Indore",
    email: "mufaddal@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Mon","Tues","Wed","Thur","Fri"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "mufaddal@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "mufaddal@microsoft.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());