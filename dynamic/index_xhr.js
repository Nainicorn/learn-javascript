// My mockarro "https://my.api.mockaroo.com/students.json?key=c30f2110"

insertRow = (data) => {
    console.log(data);
    let studentsBody = document.getElementsByTagName("tbody")[0];
    var row = studentsBody.insertRow();

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = data.cell1;
    cell2.innerHTML = data.cell2;
    cell3.innerHTML = data.cell3;
    cell4.innerHTML = data.cell4;
};

renderUsers = () => {
    data = window.USERS;
    data = data.length ? data : [data];

    let studentsBody = document.getElementsByTagName("tbody")[0];
    studentsBody.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
        let dr = data[i];
        let row = {
            cell1: dr.id,
            cell2: dr.first_name,
            cell3: dr.last_name,
            cell4: dr.email,
        };
        insertRow(row);
    }
};

sendRequest = (method, url, data) => {
    const promise = new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = "json";
        if (data) {
            xhr.setRequestHeader(
                "Content-Type",
                "application/json; charset=UTF-8"
            );
        }

        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject('check url');
            } else {
                resolve(xhr.response);
            }
        };
        xhr.onerror = (e) => {
            reject('something went wrong!');
        };
        if (data) {
            xhr.send(JSON.stringify(data));
        } else {
            xhr.send();
        }
    });
    return promise;
};

//do not forget to start json server like
//json-server --watch test.json
getData = () => {
    sendRequest("GET", "http://localhost:3000/users").then((response) => {
        window.USERS = response;
        renderUsers();
    }).catch(err => {
        console.log(err);
    });
};

postData = (data) => {
    sendRequest("POST", "http://localhost:3000/users", data);
    getData();
};

const get1 = document.getElementById("get1");
get1.addEventListener("click", getData);

const post1 = document.getElementById("post1");
post1.addEventListener("click", () => {
    postData({
        first_name: "Sreenaina",
        last_name: "Koujala",
        email: "nkoujala@gmail.com",
    });
});
