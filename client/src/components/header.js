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
                <div className="Column">
                    <h2>CUC</h2>
                </div>
            </div>
        )
    }
}

export default Header;
