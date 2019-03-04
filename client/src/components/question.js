import React, { Component } from 'react';
import Timer from './timer';
import AnswerForm from './answer_form';

class Question extends Component{
  constructor(props){
    super(props)
  }
    render(){
        const tableStyle = {
            backgroundColor:"#000",
            color:"#fff",
            textAlign:"left"
        }
        return(
            <table style={tableStyle}>
              <tbody>
                <tr class="question">
                  <td>Întrebare</td>
                  <td>{this.props.question}</td>
                </tr>
                <tr class="answer">
                  <td>Răspuns</td>
                  <td>{this.props.answer}</td>
                </tr>
                <tr class="comment">
                  <td>Comentariu</td>
                  <td>{this.props.comment}</td>
                </tr>
                <tr class="author">
                  <td>Autor:</td>
                  <td>{this.props.author}</td>
                </tr>
                <tr class="source">
                  <td>Sursa:</td>
                  <td>{this.props.source}</td>
                </tr>
              </tbody>
            </table>
        )
    }

}

export default Question
