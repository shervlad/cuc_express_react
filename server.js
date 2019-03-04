const express = require('express');
const questions = require('./questions');
const app = express();
const jwt = require('jsonwebtoken');
const MongoClient = require('mongodb').MongoClient
const initDb = require("./server_modules/db").initDb;
const getDb = require("./server_modules/db").getDb;
const path = require("path");

var db = null
app.use((req, res, next) => {
        res.append('Access-Control-Allow-Origin', ['*']);
        res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.append('Access-Control-Allow-Headers', 'Content-Type');
        next();
});

app.use(express.static(path.join(__dirname, "client/build")))

question_collection = null

MongoClient.connect("mongodb://vladseremet:abc918273645@ds155825.mlab.com:55825/cuc", {useNewUrlParser : true}, function(err,client){
  if(err) throw err;
  console.log("connecting to database")
  db = client.db("cuc")
})



app.get('/api/get_questions/:pageNumber([0-9]+)', (req,res) => {
  var page_number = parseInt(req.params["pageNumber"])
  console.log("page number: ",page_number) 
  var db = getDb();
  db.collection("questions").find().skip(page_number*10-10).limit(10).toArray(function (err,result){
    if(err) throw err;
    res.json(result);
  })
});

const port = 5000;
initDb(function (err) {
  app.listen(port, function (err) {
    if (err)  throw err;
    console.log("Server running on port " + port);
  });
});
