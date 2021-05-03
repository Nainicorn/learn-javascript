var c
console.log(c); // b is undefined 
// console.log(b); // b is not defined

//hoisting

console.log(d);
var d = 100;
console.log(d);

let x = '1.1'
let y = '1.1'

let z = x + y;
console.log(z)

let zz = (+x) + (+y);
console.log(zz)

//parseInt
// console.log(parseInt('101', 2))

let bb = 065 //octal
console.log('octal', bb)

bb = 0XFF //hex
console.log('octal', bb)

bb = 0b101 //bin
console.log('octal', bb)

bb = 8**2
console.log('square', bb)


