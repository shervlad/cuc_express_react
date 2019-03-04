import React, { Component } from 'react';
import Timer from './timer';
import AnswerForm from './answer_form';

class Question extends Component{
  constructor(props){
    super(props)
    this.state = {hide_answer:true}
    this.showAnswer = function(e){
      this.setState({hide_answer: !this.state.hide_answer})
      console.log(this.state)
    }
  }
    render(){
        const tableStyle = {
            width:"50%",
            backgroundColor:"#000",
            marginLeft: "auto",
            marginRight: "auto",
            color:"#fff",
            textAlign:"left",
            valign :"top"
        }
      var arrowStyle = {
        width : '25px',
        transform: this.state.hide_answer?"rotate(0deg)":"rotate(180deg)"
      }
        return(
            
            <div className = "QuestionContainer">
            <table>
              <tbody>
                <tr valign="top" className="question">
                    <td className="FirstColumn"><b>Întrebare</b></td>
                    <td className="SecondColumn">{this.props.question}</td>
                </tr>
                    <tr hidden = {this.state.hide_answer}>
                      <td className="FirstColumn"><b>Răspuns</b></td>
                      <td className="SecondColumn">{this.props.answer}</td>
                    </tr>
                    <tr className="comment" hidden = {this.state.hide_answer}>
                      <td className="FirstColumn"><b>Comentariu</b></td>
                      <td className="SecondColumn">{this.props.comment}</td>
                    </tr>
                    <tr className="author" hidden = {this.state.hide_answer}>
                      <td className="FirstColumn"><b>Autor:</b></td>
                      <td className="SecondColumn">{this.props.author}</td>
                    </tr>
                    <tr className="source" hidden = {this.state.hide_answer}>
                      <td className="FirstColumn"><b>Sursa:</b></td>
                      <td className="SecondColumn">{this.props.source}</td>
                    </tr>
                <tr>
                <td className = "ArrowRow" colSpan="2" align="center" onClick={this.showAnswer.bind(this)}>
                        <img style={arrowStyle} src="arrow.png"></img>
                </td>
                </tr>
              </tbody>
            </table>
          </div>
        )
    }

}

export default Question
