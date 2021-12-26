function line() {
    console.log('---------------')
}

line()
// let x = 100
// let y = x << 1

// console.log(y)
// console.log(parseInt(x, 2))
// console.log(parseInt(1000, 2))

//destructuring
// let things = ['book', 'pencil', 'eraser']

// let b = things[0]
// let p = things[1]
// let e = things[2]
// console.log(b, p, e)

// let [, p1,] = things;
// console.log(p1)

// let cakes = {
//     'book': 'narnia', 
//     'pencil': 'toptip', 
//     'eraser': 'gonewiththewind'
// }

// let b = cakes.book
// let p = cakes['pencil']
// let e = cakes.eraser
// console.log(b, p, e)

// let {book} = cakes;
// console.log(book)


//ternary
// let fruit = 'apple'

// let istasty = (fruit === 'mango') ? 'yay' : 'nay'

// console.log(istasty)

//delete
let recipe = {
    cup: 2,
    heat: 150,
    eggs: 3
}

console.log(recipe)

delete recipe.cup

console.log(recipe)

// let arr = [1, 2, 3, 4]
// console.log(recipe instanceof Array)
// console.log(arr instanceof Array)
