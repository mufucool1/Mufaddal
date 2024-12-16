// dates

let mydate=new Date();

// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());

// console.log(typeof mydate);

//let myCreatedDate=new Date(2024,11,8,19,53);
//console.log(myCreatedDate);

let myCreatedDate=new Date("08-12-2024");

//console.log(myCreatedDate.toLocaleString());

let myTimeStamp=Date.now();

// console.log(myTimeStamp);

// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate=new Date();

console.log(newDate);

console.log(newDate.getMonth()+1); // 0 to 11

console.log(newDate.getDay()); // 0 to 6

console.log(newDate.toLocaleString('default',{
    weekday:"long"
}));



