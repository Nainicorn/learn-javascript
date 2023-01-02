const addUsers = (e) => {
    let users = [];
    let inputValues = document.getElementsByClassName('inputValue');

    for (element of inputValues) {
        let user = {
            userName: element.children[1].value,
            score: element.children[3].value,
        }
        users.push(user);
    };

    localStorage.setItem('users', JSON.stringify(users))

}

document.getElementById('saveDataBtn').addEventListener('click', addUsers);
