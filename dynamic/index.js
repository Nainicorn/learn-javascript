insertRow = (data) => {
    let studentsTable = document.getElementById("students01");
    let insertPos = studentsTable.rows.length - 1;
    var row = studentsTable.insertRow(insertPos);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    cell1.innerHTML = data.cell1;
    cell2.innerHTML = data.cell2;
    cell3.innerHTML = data.cell3;
    cell4.innerHTML = data.cell4;
    cell5.innerHTML = data.cell5;
};

renderStudents = (data) => {
    data = (data.length) ? data: [data];
    for (let i = 0; i < data.length; i++) {
        let dr = data[i];
        let row = {
            cell1: dr.id,
            cell2: dr.first_name,
            cell3: dr.last_name,
            cell4: dr.ssn,
            cell5: dr.gender
        };
        insertRow(row);
    }
};

loadStudentsXHR = () => {
    ///xhr
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://my.api.mockaroo.com/students.json?key=c30f2110");
    // xhr.open("GET", "https://my.api.mockaroo.com/students/2.json?key=c30f2110");

    xhr.onload = () => {
        let response = xhr.response;
        let data = JSON.parse(response);
        console.log(data);
        renderStudents(data);
    };
    xhr.send();
};

loadStudentsXHR();
