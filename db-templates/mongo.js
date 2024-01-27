var express = require('express');
var app = express();

const mongoose = require('mongoose');
const mongoString = "mongodb+srv://naina01:Mongo1125$@cluster0.hyldrje.mongodb.net/sample_cars?retryWrites=true&w=majority";

mongoose.connect(mongoString);
const db = mongoose.connection;

db.on('error', (error) => {
    console.log(error)
})

db.once('connected', () => {
    console.log('Database Connected');
})

app.use(express.json());

app.get('/', function (req, res) {
    res.send('Hello SQL');
});

app.get('/cars', async function (req, res) {
    let collection = await db.collection("cars");
    let results = await collection.find({})
      .limit(10)
      .toArray();
  
    res.send(results).status(200);
});

var server = app.listen(8000, function () {
    console.log('Server is running..');
});