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

//do not forget to start json server like
//json-server --watch test.json
getData = () => {
    axios
        .get("http://localhost:3000/users")
        .then((response) => {
            window.USERS = response.data;
            renderUsers();
        })
        .catch((error) => {
            console.log(error);
        });
};

getDataA = async () => {
    let response = await axios.get("http://localhost:3000/users1");
    window.USERS = response.data;
    renderUsers();
};

postData = (data) => {
    axios
        .post("http://localhost:3000/users", data)
        .then((response) => {
            getData(); 
        })
        .catch((error) => {
            console.log(error);
        });
};

const get1 = document.getElementById("get1");
get1.addEventListener("click", getData);
// get1.addEventListener("click", getDataA); //using async

const post1 = document.getElementById("post1");
post1.addEventListener("click", () => {
    postData({
        first_name: "Sreenaina",
        last_name: "Koujala",
        email: "nkoujala@gmail.com",
    });
});
