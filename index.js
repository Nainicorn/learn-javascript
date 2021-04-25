let names = ["Hello", "World", "How", "Are", "You"];
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// names.forEach(function (item, index) {
//     item = item + "1";
//     console.log(item)
// })
// console.log(names)

// names = names.map(function (item, index) {
//     return item + "1";
// })
// console.log(names)

// names = names.filter(function (item, index) {
//     return item == "World";
// })
// console.log(names)

// names.push("Cool")
// console.log(names)

// names = names.slice(2, 4)
// console.log(names)

final = numbers.reduce(function (prev, current) {
    return prev * current
})
console.log(final)

console.log(numbers.join())

console.log(Math.ceil(10))

