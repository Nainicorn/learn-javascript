window.addEventListener('storage', () => {
    let users = JSON.parse(localStorage.getItem('users'));
    render(users)
})

function render(users)  {
    users.forEach((user, i) => {
        console.log('name' + (i+1))
        let nameDiv = document.getElementById('name' + (i+1));
        nameDiv.innerHTML = user.userName;
        let barDiv = document.getElementsByClassName('bar' + (i+1))[0];
        barDiv.style.width = user.score + '0px';
    });
}