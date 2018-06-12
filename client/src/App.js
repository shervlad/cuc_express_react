import React, {Component} from 'react';
import './App.css';
import Question from './components/question'
import Header from './components/header';
import Game from './components/game';
import {
    Link,
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
class App extends Component {

    render() {
        return (
            <Router>
                <div className="App">
                    <Header/>
                    <Route path="/new_game" component={Game}/>
                    <Route path="/join_game" component={Game}/>
                </div>
            </Router>
        );
    }
}

export default App;
