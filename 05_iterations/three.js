// for of loop is used for array values not for keys and not for objects, used for maps

const arr=[1,2,3,4,5]

for (const num of arr) {
    console.log(num);
}

// for (const [key, value] of arr) {
//     console.log(key, ':-', value);
// }

// const greetings="Good Morning!";

// for (const greet of greetings) {
//     console.log(greet);
// }

const map=new Map()

map.set('IN',"INDIA")
map.set('PK',"PAKISTAN")
map.set('SR',"SRI LANKA")

console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }