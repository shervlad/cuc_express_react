const express = require('express');
const questions = require('./questions');
const app = express();

active_games = {};

function generate_game_id(){
    let chars = "abcdefghijklmnopkrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    id = "";
    for(i=0;i<10;i++){
        id += chars[Math.floor(Math.random() * chars.length)]
    }
    if(active_games.keys.indexOf(id) >= 0){
        id = generate_game_id();
    }
    return id;
}
class Game{
    constructor(id){
        this.id = id;
        this.questions = questions;
        this.current_question = "";
        this.current_answer = "";
    }


    function serialize(){
        return {
            "id": this.id,
            "questions": this.questions,
            "current_question": this.current_question,
            "current_answer": this.current_answer
        }
    }
}

class Question{
    constructor(){
        this.images = [];
        this.texts = [];
        this.answers = [];
        this.authors = [];
        this.team = "";
        this.comment = "";
        this.teams_that_answered_correctly = [];
        this.teams_that_answered_incorrectly = [];
        this.is_normal = true;
        this.is_double_blitz = false;
        this.is_triple_blitz = false;
    }

    function serialize(){
        return {
            "images" : this.images,
            "texts" : this.texts,
            "answers" : this.answers,
            "authors" : this.authors,
            "team" : this.team,
            "comment" : this.comment,
            "teams_that_answered_correctly" : this.teams_that_answered_correctly,
            "teams_that_answered_incorrectly" : this.teams_that_answered_incorrectly,
            "is_normal": this.is_normal,
            "is_double_blitz" : this.is_double_blitz,
            "is_triple_blitz" : this.is_triple_blitz
        }
    }
}

class Team{
    constructor(){
        this.members = [];
        this.games = {};
        this.questions = {};
        this.games_won = 0;
        this.quesitons_taken = 0;
        this.questions_played = 0;
    }
}

app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Brad', lastName: 'Traversy'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'},
  ];
  res.json(questions);
});

app.get('/api/get_questions', (req,res) => {
    const questions = [
        {text: 'vine vidi vici', author: 'Vlad Seremet', team:'phi'},
        {text: 'whassup biatch?', author: 'Adrian Ojlob', team:'phi'},
    ];
    res.json(questions);
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

app.get('/api/submit_answer')

app.get('/api/join_game', (req,res) => {
    // return game object corresponding to game id
    // in the user object, add game id to list of active games

})
const port = 5000;

app.listen(port, () => `Server running on port ${port}`);