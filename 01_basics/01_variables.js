const accountId = 53
let accountEmail = "mufaddal.saifee52@gmail.com"
var accountPassword = "515253"
accountCity = "Indore" // By default it is consider as a variable
let accountState

// accountId = 2 // not allowed


accountEmail = "ms@gmail.com"
accountPassword = "5253"
accountCity = "Pune"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])