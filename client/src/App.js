import React, {Component} from 'react';
import './App.css';
import Question from './components/question'
import PageNumbers from './components/PageNumbers'
import Header from './components/header';
import Game from './components/game';
import AuthComponent from './components/auth';
import {
    Link,
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

class App extends Component {
    
    constructor(props){
       super(props)
       this.state = {questions:[]}
    }
    getPage(number){
      console.log("number: ", number)
      fetch("http://localhost:5555/api/get_questions/" + number) 
      .then(results => results.json())
      .then(data    => {
        console.log(data)
        this.setState({
            questions : data
        })
      })

    }
    render() {
      var questions =  this.state.questions.map(q => 
                                                       <Question  key={q._id} 
                                                                  question={q.question}
                                                                  answer  ={q.answer}
                                                                  comment ={q.comment}
                                                                  author  ={q.author}
                                                                  source  ={q.source} />);
        return (
            <Router>
                <div className="App">
                    <Header/>
                    {questions} 
                    <PageNumbers getPage={this.getPage.bind(this)}/>
                </div>
            </Router>
        );
    }
    
  componentDidMount(){
    this.getPage(1)
  }
}

export default App;
