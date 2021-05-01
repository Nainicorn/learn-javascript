let animal1 = 'fox'
let animal2 = 'dog'
let date1 = new Date()
let info = `&copy; A quick brown "${animal1}" \u{03BB} jumps over the lazy ${animal2} on ${date1}`

// console.log(info)

let n = 1000n

console.log(n)

let theMark = false

markLoop:
while (theMark === true) {
    doSomething();
}