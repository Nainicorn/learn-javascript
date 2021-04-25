
document.getElementById('greetButton').addEventListener('click', greet);
document.getElementById('colorButton').addEventListener('click', color);

function greet() {
    let input1 = document.getElementById('name1').value;
    let output1 = document.getElementById('output1');
    output1.innerText = 'Hello ' + input1;
}

function color() {
    let color1 = document.getElementById('color1').value;
    let output1 = document.getElementById('output1');
    output1.style.color = color1;
    
}