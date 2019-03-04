import React, {Component} from 'react';
import './App.css';
import Question from './components/question'
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
    render() {
      var questions =  this.state.questions.map(q => 
                     <Question  
                                      key={q._id} 
                                      question={q.question}
                                      answer  ={q.answer}
                                      comment ={q.comment}
                                      author  ={q.author}
                                      source  ={q.source}
                   />);
        return (
            <Router>
                <div className="App">
                    <Header/>
                    {questions} 
                </div>
            </Router>
        );
    }
    
  componentDidMount(){
    fetch("http://localhost:5000/api/get_questions") 
      .then(results => results.json())
      .then(data    => {
        console.log(data)
        this.setState({
            questions : data
        })
      })
  }
}

export default App;
