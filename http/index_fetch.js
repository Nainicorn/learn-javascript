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
    let promise = fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers: data ? { "Content-Type": "application/json" } : {},
    }).then((response) => {
        if (response.status >= 400) {
            return response.json().then((errData) => {
                const error = new Error("Something went wrong!");
                error.data = errData;
                throw error;
            });
        }
        return response.json();
    });
    return promise;
};

//do not forget to start json server like
//json-server --watch test.json
getData = () => {
    sendRequest("GET", "http://localhost:3000/users")
        .then((response) => {
            window.USERS = response;
            renderUsers();
        })
        .catch((err) => {
            console.log(err);
        });
};

postData = (data) => {
    sendRequest("POST", "http://localhost:3000/users", data)
        .then(() => {
            getData();
        })
        .catch((err) => {
            console.log(err);
        });
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
