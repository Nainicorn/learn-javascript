import formatter from "./modules/formatter.js";

let name = {
    first: 'Sreenaina',
    middle: 'F',
    last: 'Koujala'
}

// let formattedName = formatter.lastCommaFirst(name);
let formattedName = formatter.firstLast(name);

let nameDiv = document.querySelector('div.name');
nameDiv.innerHTML = formattedName


