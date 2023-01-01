let btn1 = document.getElementById('btn1')
btn1.addEventListener('click', (e) => {
    let clr1 = document.getElementById('clr1')
    let color = clr1.value;
    localStorage.setItem('color', color);
})

