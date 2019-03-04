import React, {Component} from 'react';
import {
    Link,
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

class PageNumbers extends Component {
    
    constructor(props){
       super(props)
       this.state = {
         page_numbers : [1,2,3,4,5,6,7,8,9, 10],
         current_page : 1,
         getPage : this.props.getPage }
    }
        
    scrollBack(){
      if(this.state.page_numbers[0]!=1){
        var new_current_page = this.state.page_numbers[0]-10
        this.setState({
          page_numbers: this.state.page_numbers.map(n=>n-10),
          current_page: new_current_page 
        })  
        this.getPage(new_current_page)
      }
    }
    scrollForward(){
      console.log("scrolling forward...")
      var new_current_page = this.state.page_numbers[0]+10
      this.setState({
        current_page: new_current_page,
        page_numbers: this.state.page_numbers.map(n=>n+10)
      })  
      this.getPage(new_current_page)
    }
    getPage(pageNum){
      this.state.getPage(pageNum)
      this.setState({current_page:pageNum})
    }
    
    cellStyle(pageNum){
      return {
        backgroundColor: (this.state.current_page == pageNum)?'gray':'white'
      }
    }
  render(){

    var number_elements = this.state.page_numbers.map((number) => {
        return (
          <td class="PageNumber" style={this.cellStyle(number)} id={number} onClick={(e)=>this.getPage(e.target.id)}>
                    {number} 
          </td>
        )
    })
        
    return(
      <table class="PageNumbers">
        <tr>
          <td class="PageNumber" onClick={this.scrollBack.bind(this)}>&lt;&lt;</td>
          {number_elements}
          <td class="PageNumber" onClick={this.scrollForward.bind(this)}>&gt;&gt;</td>
        </tr>
      </table>
    )
  }
}
export default PageNumbers;
