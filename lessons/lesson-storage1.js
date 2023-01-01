window.addEventListener('storage', () => {
    let color = localStorage.getItem('color');
    document.body.style.backgroundColor = color;
})