function addNewDiv() {
    // let newDiv = document.createElement("div") 
    // could have also just created a new div but I duplicated instead
    // how to add new div if all are gone from screen
    let defaultDiv = document.querySelector(".add-div")
    let newDiv = defaultDiv.cloneNode(true)
    let containerDiv = document.querySelector(".div-container")
    containerDiv.appendChild(newDiv)
}
function deleteDiv() {
    // remove specific divs + counter and id
    let defaultDiv = document.querySelector(".add-div")
    defaultDiv.remove()
}

