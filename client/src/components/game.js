import React, {Component} from 'react';

class Game extends Component{

    componentDidMount() {
        fetch('/api/new_game')
            .then(res => res.json())
            .then(game => this.setState({game}, () => console.log(game)));
    }

    render(){
        return (
            <h2>
                Game
            </h2>
        )
    }
}

export default Game
