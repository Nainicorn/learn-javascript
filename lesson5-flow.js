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

function setFruit(fruit) {
    if (!fruit) {
        fruit = localStorage.getItem('fruit')
    }
    let messageElement = document.querySelector('.message');
    messageElement.textContent = fruit

    document.body.style.backgroundColor = fruit
    
    localStorage.setItem('fruit', fruit);
}

setFruit()

