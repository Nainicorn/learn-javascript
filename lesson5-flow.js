
// function line() {
//     console.log('---------------')
// }
// let x = 1
// while (x < 10) {
//     console.log(x)
//     x++;
// }
// console.log('------------------')

// var x = 1;
// {
//     var x = 2;
// }
// console.log(x); // outputs 2

// let age = 36;

// if (age <= 40) {
//     console.log('young');
// } else {
//     console.log('old')
// }

// let age1 = 41;

// if(age1 < 40){
//     console.log('young')
// }else if(age1 === 40){
//     console.log('perfect')
// }else{
//     console.log('old')
// }

// let cakeFlavor = '';

// if(cakeFlavor === 'chocolate'){
//     console.log('yummy')
// }else if(cakeFlavor === 'vanilla'){
//     console.log('perfect')
// }else if (cakeFlavor === 'strawberry'){
//     console.log('love it')
// }else if (cakeFlavor === 'butterscotch'){
//     console.log('great')
// }else {
//     console.log('common!')
// }

// let x = false

// console.log('-------------')
// if (x) {
//     console.log('true')
// } else {
//     console.log('false')
// }

// let cakeFlavor = 'vanilla';

// switch (cakeFlavor) {
//     case 'chocolate':
//         console.log('yummy')
//         break;
//     case 'butterscotch':
//         console.log('great')
//         break;
//     case 'vanilla':
//         console.log('perfect')
//         break;
//     default:
//         console.log('common!')
//         break;
// }


// function f() {
//     try {
//         console.log(0);
//         throw 'bogus';
//     } catch (e) {
//         console.log(e);
//     } finally {
//         console.log(3);
//         return false;
//     }
// }
// console.log(f()); // 0, 1, 3, false

//loops
// for (let step = 0; step < 5; step++) {
//     // Runs 5 times, with values of step 0 through 4.
//     console.log('Walking east one step');
// }

// line()
// let i = 10
// do {
//     console.log(i)
//     i--
// } while (i > 5)

// i = 10
// while (i > 5) {
//     console.log(i)
//     if (i === 9) {
//         break;
//     }
//     i--
// }

// line()
// let person = {
//     name: 'Naina',
//     age: 18,
//     hobby: 'art',
//     major: 'CS',
//     minor: 'Flying',
//     junkFoodie: true
// }

// for(let pr1 in person) {
//     if (pr1 === 'hobby')
//     console.log(`Key is ${pr1} and value is ${person[pr1]}`)
// }

// console.log(person['name'])

//loops
// line()
// let arr = [3, 6, 8, 9, 2, 5]
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// line()
// for (let item of arr) {
//     console.log(item);
// }
