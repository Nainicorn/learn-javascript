let btnAdd = document.querySelector("#btnAdd");
let counter = 0;
let container = document.querySelector(".container");

btnAdd.addEventListener("click", (e) => {
    counter++;
    addItem(counter);
});

let addItem = (counter) => {
    //make some html
    let strHtml = `
        <div class="item">
            <span>Item ${counter}</span>
            <button class="btn-delete">X</button>
        </div>
    `;

    let currentHtml = container.innerHTML;
    container.innerHTML = currentHtml + strHtml;
};

container.addEventListener("click", (e) => {
    let element = e.target;
    if (element.classList.contains("btn-delete")) {
        let item = element.closest('.item');
        item.remove();
    }
});
