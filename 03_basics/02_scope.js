//var c=300
let a=300

if(true){
    let a=20
    const b=30
    //var c=40
    //c=40
    console.log("INNER a=",a)
}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

console.log(a);
//console.log(b);
//console.log(c);

function one(){

    const username="Mufaddal"

    function two(){
        const website="youtube"
        console.log("Username: ",username)
    }

    //console.log(website);

    two()
}

one()

if (true) {
    const username = "mufaddal"
    if (username === "mufaddal") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// ++++++++++++++++++ interesting ++++++++++++++++++

console.log(addOne(5));
 
function addOne(num){
    return num+1
}

addTwo(8)

const addTwo=function(num){
    return num+2
}

console.log(addTwo(8))