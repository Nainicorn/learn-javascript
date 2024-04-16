// function Box(value) {
//     this.value = value;
// }

// // Properties all boxes created from the Box() constructor
// // will have
// Box.prototype.getValue = function () {
//     return this.value;
// };

// const myBox = new Box('naina');

// console.log(myBox.getValue())

String.prototype.reverse = function() {
    return this.split('').reverse().join('');
}

let name1 = 'Sreenaina';
console.log(name1.reverse());

let newS = 'hola'
console.log(newS.reverse());

