var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello SQL');
});

app.get('/customers', function (req, res) {
   
    var sql = require("mssql");

    // config for your database
    var config = {
        user: 'user1',
        password: 'password1',
        server: 'localhost',
        database: 'BikeStores',
        trustServerCertificate: true,
        port: 1433
    };

    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('select * from sales.customers', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        });
    });
});

var server = app.listen(8000, function () {
    console.log('Server is running..');
});