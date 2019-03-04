const express = require('express');
const questions = require('./questions');
const app = express();
const jwt = require('jsonwebtoken');
const MongoClient = require('mongodb').MongoClient

var db = null
app.use((req, res, next) => {
        res.append('Access-Control-Allow-Origin', ['*']);
        res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.append('Access-Control-Allow-Headers', 'Content-Type');
        next();

});

MongoClient.connect("mongodb://vladseremet:abc918273645@ds155825.mlab.com:55825/cuc", {useNewUrlParser : true}, function(err,client){
  if(err) throw err;
  db = client.db("cuc")
  db.collection("questions").find().limit(10).toArray(function (err,result){
    if(err) throw err;
  })
})


app.get('/api/get_questions', (req,res) => {
  db.collection("questions").find().limit(10).toArray(function (err,result){
    if(err) throw err;
    res.json(result);
  })
});

app.get('/api/new_game', (req,res) => {
    //create new game object
    //add game to server state
    //add game to database
    let game_id = generate_game_id();
    return_questions = [];
    for(i = 0;i<20;i++){
        return_questions.push(questions[i])
    }
    console.log(return_questions);
    res.json(return_questions);
});

app.get('/api/join_game', (req,res) => {
    // return game object corresponding to game id
    // in the user object, add game id to list of active games

})
const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
