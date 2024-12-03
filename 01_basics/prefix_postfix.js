let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);

//console.log(y);

// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

// ++(++x); // SyntaxError: Invalid left-hand side expression in prefix operation

// Postfix increment

/*let x = 3;
const y = x++;

// x=4 y=3

let x2 = 3n;
const y2 = x2++;

// x2=4n y2=3n

// Prefix Increment

let x = 3;
const y = ++x;

// x=4 y=4

let x2 = 3n;
const y2 = ++x2;

// x2=4n y2=4n */