function line() {
    console.log('---------------')
}
line()


// console.log(cube(3))

// function cube(num) {
//     return num**3
// }

// const cube1 = function (num) {
//     return num**3
// }
// console.log(cube1(3))

// line()

// function factorial(n) {
//     if(n === 0 || n === 1) {
//         return 1
//     }
//     return n * factorial(n-1);
// }

// // 5! = 5 * 4 * 3 * 2 * 1 = 120

// console.log(factorial(5))

// function hello() {
//     console.log(arguments.length)
// }

// hello(1, 2, 3, 4)

// line()

// function person() {
//     var name = '';
//     return {
//         setName: function(strname) {
//             name = strname
//         },
//         getName: function(strname) {
//             return name
//         }
//     }
// }

// let me = new person()
// me.setName('naina')
// console.log(me.getName())


// function append() {
//     let joined = '';
//     for (let item of arguments) {
//         joined += ' ' + item;
//     }
//     console.log(joined)

// }

// append('hello', 'murali', 'naina')

//rest example

// function append(...args) {
//     console.log(args)
//     console.log(args.join(' '))
// }

// append('hello', 'murali', 'naina')

//default params
// function square(num = 2) {
//     return num * num;
// }

// console.log(square())

//arrow functions
// let elements = [
//     'Hydrogen',
//     'Helium',
//     'Lithium',
//     'Beryllium'
// ];

// console.log(elements)

// let mappedelements = elements.map(function (item, i) {
//     // return `the name of item ${i} element is ${item}`
//     return item.length
// })

// let mappedelements = elements.map(item => item.length)

// console.log(mappedelements)

// var a2 = a.map(function (s) { return s.length; });

// console.log(a2); // logs [8, 6, 7, 9]

// var a3 = a.map(s => s.length);

// console.log(a3); // logs [8, 6, 7, 9]


function Person() {
    // The Person() constructor defines `this` as itself.
    this.age = 0;

    setInterval(() => {
        this.age++;
        console.log(this.age)
    }, 1000);
}

var p = new Person();

// console.log(encodeURI('http://learn.sreenaina.com?name=test space&age=4^^'))/
