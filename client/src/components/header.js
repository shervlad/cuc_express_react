import React, { Component } from 'react';
import logo from './logo.svg';
import {
    Link,
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

class Header extends Component{
    render(){
        return(

            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="Row">
                    <div className="Column">
                        <Link to="/new_game">
                            New Game
                        </Link>
                    </div>
                    <div className="Column">
                       <Link to="/join_game">
                        Join Game
                       </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;