import React, { Component } from 'react';
import Timer from './timer';
import AnswerForm from './answer_form';

class Question extends Component{
    render(){
        return(
            <div className="QuestionContainer">
                <p>Question text</p>
                <AnswerForm/>
                <Timer/>
            </div>
        )
    }
}

export default Question