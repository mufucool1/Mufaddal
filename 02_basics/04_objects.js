//const tinderUser=new Object() // creats object, sinleton example

const tinderUser={}

tinderUser.id=786110
tinderUser.name="Mufaddal"
// tinderUser.email="mufaddal.saifee52@gmail.com"
// tinderUser.contact=7869329921
tinderUser.isLoggedIn=false

//console.log(tinderUser);

const regularUser = {
    email:"mufaddal.saifee52@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Mufaddal",
            lastname:"Saifee"
        }
    }
}

//console.log(regularUser);

//console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//const obj3 = { obj1, obj2 }
//const obj3 = Object.assign({}, obj1, obj2, obj4)

// const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "email1@gmail.com"
    },
    {
        id: 2,
        email: "email2@gmail.com"
    },
    {
        id: 3,
        email: "email3@gmail.com"
    },
]


//console.log(users[1].email);

console.log(tinderUser);

console.log(Object.keys(tinderUser)); // output datatype is array

console.log(Object.values(tinderUser)); // output datatype is array

console.log(Object.entries(tinderUser)); // output is array of arrays

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // checks for key exists returns boolean

const course = {
    coursename: "Web Development",
    price: "7000",
    courseInstructor: "Mufaddal"
}

// course.courseInstructor

const {courseInstructor: abc} = course

// console.log(courseInstructor);
//console.log(abc);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
