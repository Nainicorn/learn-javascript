//hoisting
// var c
// console.log(c) // b is undefined 
// console.log(b); // b is not defined

// console.log(d)
// var d = 100;
// console.log(d)

//floating point]
// let x = '1.1'
// let y = '1.1'

// let z = x + y;
// console.log(z)

// let zz = (+x) + (+y)
// console.log(zz)

// array literal 
// let coffees = ['French Roast', 'Colombian', 'Kona'];

//parseInt
// let myB = 0b110
// console.log(parseInt(myB, 10))

// let bb = 100
// console.log('decimal', bb)

// bb = 065 //octal
// console.log('octal', bb)

// bb = 0XFF //hex
// console.log('hex', bb)

// bb = 0b101 //bin
// console.log('binary', bb)

// bb = 8**2 //exponentiation
// console.log('square', bb)

//convert decimal to hex, bin
// console.log('-----------------------')
// let dec = 10
// console.log('bin', dec.toString(2))
// console.log('hex', dec.toString(16))
// console.log('octal', dec.toString(8))

//literals
// let hex = 0xA
// console.log('dec', parseInt(hex, 10))
// console.log('bin', parseInt(hex, 2))
// console.log('octal', parseInt(hex, 8))

//object literals
// console.log('-------Object Literals--------')
// const person = {
//     name: 'Sreenaina',
//     age: 18,
//     lovesArt: true,
//     hobbies: [
//         'Chess', 'Ludo', 'Playing with Brother'
//     ],
//     major: 'CS',
//     minors: [
//         {
//             name: 'Machine Learning',
//             credits: 4
//         },
//         {
//             name: 'Flying',
//             credits: 3
//         }
//     ],
//     clubs: [
//         {
//             dept: 'AI',
//             hours: 4
//         },
//         {
//             dept: 'Aero',
//             hours: 3
//         },
//         {
//             dept: 'Chess',
//             hours: 10
//         }
//     ],
//     toString() {
//         return 'My name is ' + this.name;
//     },
//     ageName() {
//         return `My name is ${this.name}, age is ${this.age}`;
//     }
// }

// // const newperson = person;

// // newperson.name = 'Jasmin'
// // console.log(person.name)
// // console.log(newperson.name)

// // //interesting they are the same as they only point to address in memory
// // console.log(newperson.name === person.name)

// function showCredits(strList, strType) {
//     if (!strList || !strType) {
//         console.log('Read documentation stupid!')
//         return;
//     }
//     for (let i = 0; i < person[strList].length; i++) {
//         console.log(person[strList][i][strType])
//     }
// }

// showCredits('minors', 'name')
// showCredits('clubs', 'dept')

// console.log(person.toString())

//regexp

// let myReg1 = /ab+c/;
// console.log(myReg1)
// // https://regex101.com/

// console.log('----------------')
// console.log('one line \nsecond line')

// // String interpolation
// var name1 = 'Bobby', time = 'today';
// console.log(`Hello ${name1}, \u{2F804} how are you ${time}?`)

// var poem =
// `Roses are red ,
// Violets are blue.
// Sugar is sweet,
// and so is foo.` 

// console.log(poem)